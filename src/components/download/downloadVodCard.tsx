import React, { memo } from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {VodType} from '@type/ajaxTypes';
import VodImageCard from '../vod/vodImageCard';
import VodDescription from '../vod/vodDescription';
import { DownloadStatus, VodDownloadType } from '@type/vodDownloadTypes';
import FastImage from '../common/customFastImage'
import DownloadPauseYellowIcon from '@static/images/downloadPause_yellow.svg'



const DownloadingGif = require('@static/images/downloading.gif')

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
    



interface Props {
  download: VodDownloadType;
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
}: Props) {
  const {colors, spacing, textVariants} = useTheme();

  const totalFileSizeInMB = download.episodes.reduce((prev, curr) => prev + curr.sizeInBytes, 0) / 1024 / 1024  // size in MiB
  const vodSource = download.vod.vod_sources.find(source => source.source_id === download.vod.preferred_source_id) ?? download.vod.vod_sources.shift()
  const totalNumberOfEpisodes = vodSource ? vodSource.vod_play_list.url_count : 0
  const totalDownloadedEpisodes = download.episodes.length
  const isVodsDownloading = download.episodes.some(ep => ep.status === DownloadStatus.DOWNLOADING) 
  const isVodsDownloadingPaused = !isVodsDownloading && download.episodes.some(ep => ep.status === DownloadStatus.ERROR || ep.status === DownloadStatus.PAUSED)

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
              // flex: 1,
              flexShrink: 1,
              // marginBottom: 10,
              fontWeight: '600',
            }}
            ellipsizeMode="tail">
            {download.vod.vod_name}
          </Text>
          <Text style={{color: colors.muted}}>
            ({totalDownloadedEpisodes}/{totalNumberOfEpisodes}) 共
            {totalFileSizeInMB.toFixed(0)}MB
          </Text>
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
  }
});
