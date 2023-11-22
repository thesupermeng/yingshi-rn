
import { Divider } from "@rneui/base";
import { ReactNode, useCallback, useState } from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { Switch } from "react-native-switch"
import WatchAnytimeVipModal from "./watchAnytimeVipModal";
import { useWatchAnytime } from "./WatchAnytimeContext";
import EighteenPlusOverlay from "../modal/overEighteenOverlay";
import CountdownIndicator from "../button/countdownIndicator";
import AdultModeCountdownIndicator from "./adultModeCountdownIndicator";
import AdultModeSwitch from "./adultModeSwitch";
interface Props {
  
}

const EighteenPlusText = () => 
  <Text
    style={{
      fontWeight: '900', 
      fontSize: 10
    }}
  >18+</Text>

const eighteenPlusControls = ({}: Props) => {
  const {showVipModal, adultMode, toggleAdultMode, showDisclaimer, toggleShowDisclaimer, toggleShowVipModal} = useWatchAnytime();


  const handleToggle = useCallback((e:boolean) => {
    if (e){ //if swtiching to true
      toggleShowDisclaimer(true)
    } else {
      toggleAdultMode(false)
      toggleShowVipModal(false)
    }
  }, [])

  return (
    <View style={{...styles.container, height: (showVipModal || showDisclaimer ? '100%' : 'auto')}}>

      <WatchAnytimeVipModal/>    
      <AdultModeSwitch 
      switchStyle={styles.switch}        
      />
      <AdultModeCountdownIndicator
        containerStyle={{
          position: 'absolute', 
          top: 70, 
          right: 20, 
          flex: 1
        }}
      />
      <EighteenPlusOverlay
        handleAccept={() => {
          console.debug('accepted 18+')
          toggleShowDisclaimer(false)
          toggleAdultMode(true)
          }}
        handleReject={() => {
          console.debug('rejected 18+')
          toggleAdultMode(false)
          toggleShowDisclaimer(false)
        }}
      />
    </View>
  );

}

const styles= StyleSheet.create({
  container: {
    zIndex: 100, 
    width: '100%',
    position: 'absolute'
  }, 
  switch: {
    position: 'absolute',
    top: 25, 
    right: 20
  }
})

export default eighteenPlusControls; 