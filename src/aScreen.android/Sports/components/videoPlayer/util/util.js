import {useEffect} from 'react';
import {AppState} from 'react-native';
import {
  setVideoControlProp,
  toggleVideoControlProp,
  updateVideoShowControl,
} from '../../../screens/Sports/MatchDetails/action'
import {ShowControlTimeoutDuration, ShowControlType} from '../config';

export const togglePlayPaused = () => {
  return toggleVideoControlProp('isPaused');
};

export const toggleLockScreen = () => {
  return toggleVideoControlProp('isLocked');
};

export const showControlAction = type => {
  switch (type) {
    case ShowControlType.TopBottom:
    case ShowControlType.Locker:
      return updateVideoShowControl({
        type: type,
        timeout: new Date().getTime() + ShowControlTimeoutDuration,
      });
    case ShowControlType.Right:
      return updateVideoShowControl({
        type: type,
        timeout: 0,
      });
  }
};

export const commonPlayerProps = (ref, loadingSetter) => {
  return {
    resizeMode: 'contain',
    autoPlay: true,
    controls: false,
    volume: 1,
    removeClippedSubviews: false,
    minLoadRetryCount: 30,
    muted: false,
    rate: 1,
    onPictureInPictureStatusChanged: isActive => {
      if (AppState.currentState === 'active') {
        loadingSetter(false);
        if (ref.current) {
          ref.current.paused = false;
          ref.current?.seek?.(0);
        }
      }
      if (isActive) {
        ref.current?.seek?.(0);
      }
    },
    onRestoreUserInterfaceForPictureInPictureStop: () => {
      loadingSetter(false);
      ref.current?.restoreUserInterfaceForPictureInPictureStopCompleted(true);
    },
    disableFullscreen: false,
  };
};

export const usePipState = (ref, setIsPipEnabled) => {
  useEffect(() => {
    let timer;
    const debounceSetPip = (val, delay = 300) => {
      clearTimeout(timer);
      timer = setTimeout(
        val => {
          setIsPipEnabled(val);
        },
        delay || 0,
        val,
      );
    };
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        debounceSetPip(false);
        ref.current?.seek(0);
      } else if (nextAppState === 'background') {
        setIsPipEnabled(true);
      }
    });
    return () => {
      subscription.remove();
    };
  }, []);
};
