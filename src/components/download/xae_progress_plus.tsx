import { RAccepted } from "@type/jx_suggestion";
import { memo, useCallback } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DownloadCompleteIcon from '@static/images/questRoomClub.svg'
import DownloadPauseIcon from '@static/images/largeCountrySearch.svg'
import FastImage from "../common/gwi_with";
import { LinearProgress } from "@rneui/base";

const DownloadingGif = require('@static/images/bannerBecome.gif')

interface XFillButton {
  title: string; 
  progressPercentage: number; 
  status: RAccepted; 
  activeOpacity?: number; 
  onPress?: any; 
}

const StatusIcon = memo(({status}: {status: RAccepted}) => {
  if (status === RAccepted.RUnselectedDropdown)
    return <FastImage source={DownloadingGif} resizeMode="contain" style={styles.statusIcon}/>
  if (status === RAccepted.RClearModels)
    return <DownloadCompleteIcon style={styles.statusIcon} />
  if (status === RAccepted.RPoint)
    return <DownloadPauseIcon style={styles.statusIcon}/>
    if (status === RAccepted.REditGoal)
    return <DownloadPauseIcon style={styles.statusIcon}/>
  

})

const statusToText = (status: RAccepted) => {
  switch (status){
    case RAccepted.RClearModels: 
      return '已完成'
    case RAccepted.RUnselectedDropdown: 
      return '下载中'
    case RAccepted.REditGoal: 
      return '已暂停'
    default: 
      return '下载失败'
  }
}

const statusToColor = (status: RAccepted) => {
  switch (status){
    case RAccepted.RClearModels: 
    return '#07C160'
    case RAccepted.RUnselectedDropdown: 
    case RAccepted.RPoint: 
    case RAccepted.REditGoal:
      return '#FAC33D'
    default: 
      return ''
  }
}


const DownloadEpisodeDetailCard = ({title, progressPercentage, status, activeOpacity, onPress}: XFillButton) => {

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
        <LinearProgress animation={false} value={progressPercentage/100} color={statusToColor(status)} style={[styles.progressBar, {opacity: status === RAccepted.RPoint || status === RAccepted.REditGoal ? 0.5: 1}]}/>

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