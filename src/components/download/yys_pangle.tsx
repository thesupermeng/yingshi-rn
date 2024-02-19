import { IConfirmationLibffmpegkit } from "@type";
import { memo, useCallback } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DownloadCompleteSvg, DownloadPauseSvg } from '@static';

import FastImage from "../common/yys_alert_backwhite";
import { LinearProgress } from "@rneui/base";

const DownloadingGif = require('../../../static/images/template_gFoundConst_w.gif')

interface yysIconarrowrightorangeStation {
  title: string;
  progressPercentage: number;
  status: IConfirmationLibffmpegkit;
  activeOpacity?: number;
  onPress?: any;
}

const StatusIcon = memo(({ status }: { status: IConfirmationLibffmpegkit }) => {
  if (status === IConfirmationLibffmpegkit.ICrown)
    return <FastImage source={DownloadingGif} resizeMode="contain" style={styles.statusIcon} />
  if (status === IConfirmationLibffmpegkit.IPointStar)
    return <DownloadCompleteSvg style={styles.statusIcon} />
  if (status === IConfirmationLibffmpegkit.IRightTerms)
    return <DownloadPauseSvg style={styles.statusIcon} />
  if (status === IConfirmationLibffmpegkit.IRedirectLibyoga)
    return <DownloadPauseSvg style={styles.statusIcon} />


})

const statusToText = (status: IConfirmationLibffmpegkit) => {
  switch (status) {
    case IConfirmationLibffmpegkit.IPointStar:
      return '已完成'
    case IConfirmationLibffmpegkit.ICrown:
      return '下载中'
    case IConfirmationLibffmpegkit.IRedirectLibyoga:
      return '已暂停'
    default:
      return '下载失败'
  }
}

const statusToColor = (status: IConfirmationLibffmpegkit) => {
  switch (status) {
    case IConfirmationLibffmpegkit.IPointStar:
      return '#07C160'
    case IConfirmationLibffmpegkit.ICrown:
    case IConfirmationLibffmpegkit.IRightTerms:
    case IConfirmationLibffmpegkit.IRedirectLibyoga:
      return '#FAC33D'
    default:
      return ''
  }
}


const DownloadEpisodeDetailCard = ({ title, progressPercentage, status, activeOpacity, onPress }: yysIconarrowrightorangeStation) => {

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
        <LinearProgress animation={false} value={progressPercentage / 100} color={statusToColor(status)} style={[styles.progressBar, { opacity: status === IConfirmationLibffmpegkit.IRightTerms || status === IConfirmationLibffmpegkit.IRedirectLibyoga ? 0.5 : 1 }]} />

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