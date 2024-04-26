import { DVGGrayTeamdetailsbg } from "@type/ww_skip";
import { memo, useCallback } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DownloadCompleteIcon from '@static/images/defaultroombgKsad.svg'
import DownloadPauseIcon from '@static/images/centerGiftbuttonProxy.svg'
import FastImage from "../common/ww_result";
import { LinearProgress } from "@rneui/base";

const DownloadingGif = require('@static/images/indexFootballfiledlayout.gif')

interface wwIndexDice {
  title: string; 
  progressPercentage: number; 
  status: DVGGrayTeamdetailsbg; 
  activeOpacity?: number; 
  onPress?: any; 
}

const StatusIcon = memo(({status}: {status: DVGGrayTeamdetailsbg}) => {
  if (status === DVGGrayTeamdetailsbg.DVGNalyticsTextinput)
    return <FastImage source={DownloadingGif} resizeMode="contain" style={styles.statusIcon}/>
  if (status === DVGGrayTeamdetailsbg.DVGRoom)
    return <DownloadCompleteIcon style={styles.statusIcon} />
  if (status === DVGGrayTeamdetailsbg.DVGCurrent)
    return <DownloadPauseIcon style={styles.statusIcon}/>
    if (status === DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni)
    return <DownloadPauseIcon style={styles.statusIcon}/>
  

})

const statusToText = (status: DVGGrayTeamdetailsbg) => {
  switch (status){
    case DVGGrayTeamdetailsbg.DVGRoom: 
      return '已完成'
    case DVGGrayTeamdetailsbg.DVGNalyticsTextinput: 
      return '下载中'
    case DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni: 
      return '已暂停'
    default: 
      return '下载失败'
  }
}

const statusToColor = (status: DVGGrayTeamdetailsbg) => {
  switch (status){
    case DVGGrayTeamdetailsbg.DVGRoom: 
    return '#07C160'
    case DVGGrayTeamdetailsbg.DVGNalyticsTextinput: 
    case DVGGrayTeamdetailsbg.DVGCurrent: 
    case DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni:
      return '#FAC33D'
    default: 
      return ''
  }
}


const DownloadEpisodeDetailCard = ({title, progressPercentage, status, activeOpacity, onPress}: wwIndexDice) => {

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
        <LinearProgress animation={false} value={progressPercentage/100} color={statusToColor(status)} style={[styles.progressBar, {opacity: status === DVGGrayTeamdetailsbg.DVGCurrent || status === DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni ? 0.5: 1}]}/>

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