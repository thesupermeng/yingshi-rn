import { MARTextinputBackground } from "@type/yys_fast";
import { memo, useCallback } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DownloadCompleteIcon from '@static/images/codegenYellowSource.svg'
import DownloadPauseIcon from '@static/images/singaporeGmailNext.svg'
import FastImage from "../common/yys_vertical_collection";
import { LinearProgress } from "@rneui/base";

const DownloadingGif = require('@static/images/watchMaterial.gif')

interface yys_ConfigureUimanager {
  title: string; 
  progressPercentage: number; 
  status: MARTextinputBackground; 
  activeOpacity?: number; 
  onPress?: any; 
}

const StatusIcon = memo(({status}: {status: MARTextinputBackground}) => {
  if (status === MARTextinputBackground.MARRewardvideoBell)
    return <FastImage source={DownloadingGif} resizeMode="contain" style={styles.statusIcon}/>
  if (status === MARTextinputBackground.MARLibjsi)
    return <DownloadCompleteIcon style={styles.statusIcon} />
  if (status === MARTextinputBackground.MARGpayMintegral)
    return <DownloadPauseIcon style={styles.statusIcon}/>
    if (status === MARTextinputBackground.MARInjuryModels)
    return <DownloadPauseIcon style={styles.statusIcon}/>
  

})

const statusToText = (status: MARTextinputBackground) => {
  switch (status){
    case MARTextinputBackground.MARLibjsi: 
      return '已完成'
    case MARTextinputBackground.MARRewardvideoBell: 
      return '下载中'
    case MARTextinputBackground.MARInjuryModels: 
      return '已暂停'
    default: 
      return '下载失败'
  }
}

const statusToColor = (status: MARTextinputBackground) => {
  switch (status){
    case MARTextinputBackground.MARLibjsi: 
    return '#07C160'
    case MARTextinputBackground.MARRewardvideoBell: 
    case MARTextinputBackground.MARGpayMintegral: 
    case MARTextinputBackground.MARInjuryModels:
      return '#FAC33D'
    default: 
      return ''
  }
}


const DownloadEpisodeDetailCard = ({title, progressPercentage, status, activeOpacity, onPress}: yys_ConfigureUimanager) => {

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
        <LinearProgress animation={false} value={progressPercentage/100} color={statusToColor(status)} style={[styles.progressBar, {opacity: status === MARTextinputBackground.MARGpayMintegral || status === MARTextinputBackground.MARInjuryModels ? 0.5: 1}]}/>

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