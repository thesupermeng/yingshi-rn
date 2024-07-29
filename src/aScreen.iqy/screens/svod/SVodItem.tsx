import React, { useState, memo, useCallback, useEffect } from 'react';
import SVodPlayer from './SVodPlayer';

interface Props {
  thumbnail?: string;
  displayHeight: number;
  vod: any;
  isPause: boolean;
  onManualPause: (value: boolean) => void;
  isShowVideo: boolean,
  currentDuration: number,
  updateVideoDuration: (duration: number) => any,
  isActive: boolean,
}

function SVodItem({
  vod,
  thumbnail,
  displayHeight = 0,
  isPause = true,
  onManualPause,
  isShowVideo,
  currentDuration,
  updateVideoDuration,
  isActive,
}: Props) {
  const [isShowBottomSheet, setShowBottomSheet] = useState(false);
  const [currentVod, setVod] = useState(vod);
  const [showVod, setShowVod] = useState(true);

  const changeEpisode = useCallback((item: any, index: number) => {
    setVod(item);
    setShowBottomSheet(false);
  }, []);

  const openSheet = () => {
    setShowBottomSheet(true);
  }

  useEffect(() => {
    setShowVod(true);
    console.log("MOUNT - " + vod.mini_video_title);

    return () => {
        console.log("UNMOUNT - " + vod.mini_video_title);
        setShowVod(false);
    }
  }, [])

  return (
    <>
      {showVod &&
        <>
          <SVodPlayer
            vod={currentVod}
            thumbnail={thumbnail}
            displayHeight={displayHeight}
            openSheet={openSheet}
            isPause={isPause}
            onManualPause={onManualPause}
            isShowVideo={isShowVideo}
            currentDuration={currentDuration}
            updateVideoDuration={updateVideoDuration}
            isActive={isActive}
          />
        </>
      }
    </>
  )

}

export default memo(SVodItem)