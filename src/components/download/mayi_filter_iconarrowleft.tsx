import { CUASheetIconarrowright } from "@type/mayi_agreement";
import { memo, useCallback } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DownloadCompleteIcon from '@static/images/frame_umDescription_8.svg'
import DownloadPauseIcon from '@static/images/temperatureSetting.svg'
import FastImage from "../common/mayi_slider";
import { LinearProgress } from "@rneui/base";

const DownloadingGif = require('@static/images/predictionBlacklist.gif')

interface mayi_GoogleViews {
  title: string; 
  progressPercentage: number; 
  status: CUASheetIconarrowright; 
  activeOpacity?: number; 
  onPress?: any; 
}

const StatusIcon = memo(({status}: {status: CUASheetIconarrowright}) => {
  if (status === CUASheetIconarrowright.CUAAudienceUmeng)
    return <FastImage source={DownloadingGif} resizeMode="contain" style={styles.statusIcon}/>
  if (status === CUASheetIconarrowright.CUAAttributedstring)
    return <DownloadCompleteIcon style={styles.statusIcon} />
  if (status === CUASheetIconarrowright.CUAFlipperTurndown)
    return <DownloadPauseIcon style={styles.statusIcon}/>
    if (status === CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni)
    return <DownloadPauseIcon style={styles.statusIcon}/>
  

})

const statusToText = (status: CUASheetIconarrowright) => {
  switch (status){
    case CUASheetIconarrowright.CUAAttributedstring: 
      return '已完成'
    case CUASheetIconarrowright.CUAAudienceUmeng: 
      return '下载中'
    case CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni: 
      return '已暂停'
    default: 
      return '下载失败'
  }
}

const statusToColor = (status: CUASheetIconarrowright) => {
  switch (status){
    case CUASheetIconarrowright.CUAAttributedstring: 
    return '#07C160'
    case CUASheetIconarrowright.CUAAudienceUmeng: 
    case CUASheetIconarrowright.CUAFlipperTurndown: 
    case CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni:
      return '#FAC33D'
    default: 
      return ''
  }
}


const DownloadEpisodeDetailCard = ({title, progressPercentage, status, activeOpacity, onPress}: mayi_GoogleViews) => {

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
        <LinearProgress animation={false} value={progressPercentage/100} color={statusToColor(status)} style={[styles.progressBar, {opacity: status === CUASheetIconarrowright.CUAFlipperTurndown || status === CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni ? 0.5: 1}]}/>

      </View>
      
      <View>
        <StatusIcon status={status}/>
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