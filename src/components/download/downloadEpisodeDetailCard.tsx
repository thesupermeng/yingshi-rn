import { DownloadStatus } from "@type";
import { memo, useCallback } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DownloadCompleteSvg, DownloadPauseSvg } from '@static';

import FastImage from "../common/customFastImage";
import { LinearProgress } from "@rneui/base";

const DownloadingGif = require('../../../static/images/downloading.gif')

interface Props {
  title: string;
  progressPercentage: number;
  status: DownloadStatus;
  activeOpacity?: number;
  onPress?: any;
}

const StatusIcon = memo(({ status }: { status: DownloadStatus }) => {
  if (status === DownloadStatus.DOWNLOADING)
    return <FastImage source={DownloadingGif} resizeMode="contain" style={styles.statusIcon} />
  if (status === DownloadStatus.COMPLETED)
    return <DownloadCompleteSvg style={styles.statusIcon} />
  if (status === DownloadStatus.ERROR)
    return <DownloadPauseSvg style={styles.statusIcon} />
  if (status === DownloadStatus.PAUSED)
    return <DownloadPauseSvg style={styles.statusIcon} />


})

const statusToText = (status: DownloadStatus) => {
  switch (status) {
    case DownloadStatus.COMPLETED:
      return '已完成'
    case DownloadStatus.DOWNLOADING:
      return '下载中'
    case DownloadStatus.PAUSED:
      return '已暂停'
    default:
      return '下载失败'
  }
}

const statusToColor = (status: DownloadStatus) => {
  switch (status) {
    case DownloadStatus.COMPLETED:
      return '#07C160'
    case DownloadStatus.DOWNLOADING:
    case DownloadStatus.ERROR:
    case DownloadStatus.PAUSED:
      return '#FAC33D'
    default:
      return ''
  }
}


const DownloadEpisodeDetailCard = ({ title, progressPercentage, status, activeOpacity, onPress }: Props) => {

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.detailContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title} ellipsizeMode="middle" numberOfLines={1}>{title}</Text>
          <View style={styles.statusTextContainer}>
            <Text style={styles.statusText}>{progressPercentage}%</Text>
            <Text style={styles.statusText}>{statusToText(status)}</Text>
          </View>
        </View>
        <LinearProgress animation={false} value={progressPercentage / 100} color={statusToColor(status)} style={[styles.progressBar, { opacity: status === DownloadStatus.ERROR || status === DownloadStatus.PAUSED ? 0.5 : 1 }]} />

      </View>

      <View>
        <StatusIcon status={status} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  statusIcon: {
    width: 32,
    height: 32
  },
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-between',
    gap: 14,
    paddingVertical: 10,
  },
  textContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-between'
  },
  statusTextContainer: {
    flexDirection: 'row',
    gap: 16
  },
  title: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'PingFang SC',
    width: "70%"
  },
  statusText: {
    color: '#9C9C9C',
    fontFamily: 'PingFang SC',
    fontSize: 12,
    fontWeight: '400'
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  progressBar: {
    borderRadius: 33,
    height: 3,
  }
})

export default DownloadEpisodeDetailCard