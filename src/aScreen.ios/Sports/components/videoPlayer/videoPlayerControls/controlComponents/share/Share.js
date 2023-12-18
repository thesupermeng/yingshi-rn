import {Image, Share} from 'react-native';
import {IconNewsShare} from '../../../../../assets';
import {createShareLink} from '../../../../../utility/utils';
import {RenderControl, style} from '../../Controls';
import {setPredictionShareTimeStamp} from '../../../../../global/asyncStorage';
import debounce from 'lodash.debounce';
import {useCallback} from 'react';

// this might not be use need ask brother lizhu
export const Share = ({title}) => {
  const debouncedShare = useCallback(
    debounce(() => onPress(), 500),
    [],
  );

  const onPress = async () => {
    const shareLink = await createShareLink('streams', id);
    if (shareLink) {
      const shareContent = `${title}\n\n${shareLink}`;
      Share.share({message: shareContent}).then(
        async ({action, activityType}) => {
          if (action === 'sharedAction') await setPredictionShareTimeStamp();
        },
      );
    }
  };
  return (
    <RenderControl onPress={debouncedShare} style={style.playPauseContainer}>
      <Image
        source={IconNewsShare}
        style={style.playPauseIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
};
