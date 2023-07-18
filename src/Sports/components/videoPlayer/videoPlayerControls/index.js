import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {hideControlAction} from '../../../screens/Sports/MatchDetails/action';
import {BottomSheet} from './controlComponents/BottomSheet';
import {ShowControlType} from '../config';
import {BottomBar} from './BottomBar';
import {Locker} from './Controls';
import {RightPanel} from './RightPanel';
import {TopBar} from './TopBar';
import SliderControl from './controlComponents/SliderControl';
import {VideoLiveType} from '../../../global/const';

const VideoPlayerControls = ({videoTitle, isError, isCast}) => {
  const videoPlayerControl = useSelector(state => state.videoPlayerControl);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(async () => {
      const timeout = videoPlayerControl.showControl.timeout || 0;
      if (!timeout) {
        return;
      }
      const currentTime = new Date().getTime();
      console.log('currentTime >= timeout', currentTime, timeout);
      if (currentTime >= timeout) {
        dispatch(hideControlAction());
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [videoPlayerControl.showControl]);

  return (
    <>
      <Locker
        display={videoPlayerControl.showControl.type === ShowControlType.Locker}
      />
      <TopBar
        display={
          videoPlayerControl.showControl.type === ShowControlType.TopBottom &&
          !isError &&
          !isCast
        }
        title={videoTitle}
      />
      {!videoPlayerControl.isLocked &&
        videoPlayerControl.showControl.type !== ShowControlType.Right &&
        videoPlayerControl.videoType === VideoLiveType.LIVE && (
          <SliderControl />
        )}
      <RightPanel
        display={
          videoPlayerControl.showControl.type === ShowControlType.Right &&
          videoPlayerControl.rightPanel?.type
        }
      />
      {/* {this.state.rightControlProp.type ? this.renderRightControls() : null} */}
      <BottomBar
        display={
          videoPlayerControl.showControl.type === ShowControlType.TopBottom &&
          !isError &&
          !isCast
        }></BottomBar>
      <BottomSheet />
    </>
  );
};
export default VideoPlayerControls;
