
import { Divider } from "@rneui/base";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { Switch } from "react-native-switch"
import WatchAnytimeVipModal from "../modal/adultVideoVipModal";
import EighteenPlusOverlay from "../modal/overEighteenOverlay";
import CountdownIndicator from "../button/countdownIndicator";
import AdultModeCountdownIndicator from "./adultModeCountdownIndicator";
import AdultModeSwitch from "./adultModeSwitch";
import { screenModel } from "../../types/screenType";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../redux/store";
import { acceptOverEighteen, disableAdultMode, enableAdultMode, hideAdultModeDisclaimer, incrementAdultVideoWatchTime } from "../../redux/actions/screenAction";
import { userModel } from "../../types/userType";
interface Props {
  
}

const eighteenPlusControls = ({}: Props) => {
  const screenState: screenModel = useAppSelector(
    ({screenReducer}) => screenReducer
  )
  const userState: userModel = useAppSelector(
    ({userReducer}) => userReducer
  )
  const {adultModeVipShow, adultModeDisclaimerShow, adultMode} = screenState
  const dispatch = useAppDispatch()
  // const isVip = !(Number(userState.userMemberExpired) <=
  //                 Number(userState.userCurrentTimestamp) ||
  //                 userState.userToken === "")

  // useEffect(() => {
  //   let interval: any;
  //   if (adultMode && !isVip){
  //     interval = setInterval(() => {
  //       dispatch(incrementAdultVideoWatchTime())
  //     }, 1000)
  //   }
  //   return () => clearInterval(interval)
  // }, [adultMode])

  return (
    <View style={{...styles.container, height: (adultModeVipShow || adultModeDisclaimerShow ? '100%' : 'auto')}}>

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
          dispatch(acceptOverEighteen())
          dispatch(enableAdultMode())
          dispatch(hideAdultModeDisclaimer())
          }}
        handleReject={() => {
          console.debug('rejected 18+')
          dispatch(disableAdultMode())
          dispatch(hideAdultModeDisclaimer())
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