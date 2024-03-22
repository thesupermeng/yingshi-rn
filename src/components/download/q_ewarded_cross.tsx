import React, { memo } from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {XVSScoreDark} from '@type/wpk_long';
import VodImageCard from '../vod/cqx_main';
import VodDescription from '../vod/a_schedule_inactive';
import { RAccepted, ALaunchShrink } from '@type/jx_suggestion';
import FastImage from '../common/gwi_with'
import DownloadPauseYellowIcon from '@static/images/bodanInvite.svg'
import { Divider } from '@rneui/base';



const DownloadingGif = require('@static/images/bannerBecome.gif')

const DownloadIndicator = (props: {downloading: boolean; paused: boolean}) => (
  <View
    style={{
      flexDirection: 'row',
      opacity: props.downloading || props.paused ? 1 : 0,
      height: 18, 
      gap: 2
    }}>
    {props.downloading && (
      <>
        <Text style={{color: '#FAC33D', lineHeight: 18}}>下载中</Text>
        <FastImage
          useFastImage={true}
          source={DownloadingGif}
          resizeMode="contain"
          style={{width: 18, height: 18}}
        />
      </>
    )}
    {props.paused && (
      <>
        <Text style={{color: '#FAC33D', lineHeight: 18, opacity: 0.5}}>已暂停</Text>
        <DownloadPauseYellowIcon
          width={18}
          height={18}
          style={{opacity: 0.5}}
        />
      </>
    )}
  </View>
);
    



interface XFillButton {
  download: ALaunchShrink;
  onPress?: any;
  params?: any[];
  btnStyle?: typeof StyleSheet;
  index: number;
  imgOrientation?: 'horizontal' | 'vertical'; 
  vod_pic_list: string[]
  activeOpacity?: number;
}
function DownloadVodCard({
  download,
  onPress,
  btnStyle,
  index, 
  imgOrientation,
  activeOpacity = 0.2,
  vod_pic_list, 
  ...params
}: XFillButton) {
  const {colors, spacing, textVariants} = useTheme();

  const totalFileSizeInMB = download.episodes.reduce((prev, curr) => prev + curr.sizeInBytes, 0) / 1024 / 1024  

  let totalNumberOfEpisodes, totalDownloadedEpisodes;
  if (download.vod.vod_sources){
    const vodSource = download.vod.vod_sources.find(source => source.source_id === download.vod.preferred_source_id) ?? download.vod.vod_sources.shift()
    totalNumberOfEpisodes = vodSource ? vodSource.vod_play_list.url_count : 0
    totalDownloadedEpisodes = download.episodes.length
  }
  else {
    totalNumberOfEpisodes = download.vod.vod_play_list.url_count
    totalDownloadedEpisodes = download.episodes.length
  }
  const isVodsDownloading = download.episodes.some(ep => ep.status === RAccepted.RUnselectedDropdown) 
  const isVodsDownloadingPaused = !isVodsDownloading && download.episodes.some(ep => ep.status === RAccepted.RPoint || ep.status === RAccepted.REditGoal)

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={{...styles.description, gap: spacing.xs}}
      onPress={onPress}>
      <View style={{...styles.card, gap: spacing.s}}>
        <VodImageCard
          vod_img={download.imagePath}
          vodStyle={
            imgOrientation === 'horizontal'
              ? styles.imageHorizontal
              : styles.image
          }
          isDisabled={true}
          onPress={onPress}
          index={index}
        />

        <View
          style={{
            ...styles.description,
            gap: spacing.xs,
            justifyContent: 'center',
          }}>
          <Text
            numberOfLines={1}
            style={{
              ...textVariants.body,
              color: colors.text,
              
              flexShrink: 1,
              
              fontWeight: '600',
            }}
            ellipsizeMode="tail">
            {download.vod.vod_name}
          </Text>
          <View style={styles.videoCountDetail}>
            <Text style={{color: colors.muted}}>
              {totalDownloadedEpisodes}个视频
            </Text>
            <Divider orientation='vertical'/>
            <Text style={{color: colors.muted}}>
              共{totalFileSizeInMB.toFixed(0)}MB
            </Text>

          </View>
          <DownloadIndicator downloading={isVodsDownloading} paused={isVodsDownloadingPaused} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default memo(DownloadVodCard);

const styles = StyleSheet.create({
  card: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  description: {
    flexGrow: 1,
    paddingTop: 2,
    paddingBottom: 2,
    display: 'flex',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  image: {
   width: 120, 
   height: 180,
  },
  imageHorizontal: {
    width: 154,
    height: 87,
  }, 
  videoCountDetail: {
    flexDirection: 'row', 
    gap: 5
  }
});
