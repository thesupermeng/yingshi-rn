import { Divider } from "@rneui/base";
import { ReactNode, useCallback, useEffect, useState } from "react";
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { Switch } from "react-native-switch";
import WatchAnytimeVipModal from "../modal/adultVideoVipModal";
import EighteenPlusOverlay from "../modal/overEighteenOverlay";
import CountdownIndicator from "../button/countdownIndicator";
import AdultModeCountdownIndicator from "./adultModeCountdownIndicator";
import AdultModeSwitch from "./adultModeSwitch";
import { screenModel } from "@type/screenType";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { RootState } from "@redux/store";
import {
  acceptOverEighteen,
  disableAdultMode,
  enableAdultMode,
  enableWatchAnytimeAdultMode,
  hideAdultModeDisclaimer,
  hideAdultModeVip,
  incrementAdultVideoWatchTime,
} from "@redux/actions/screenAction";
import { userModel } from "@type/userType";
import { UMENG_CHANNEL } from "@utility/constants";
interface Props {}

const eighteenPlusControls = ({}: Props) => {
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const userState: userModel = useAppSelector(({ userReducer }) => userReducer);
  const {
    adultModeVipShow,
    adultModeDisclaimerShow,
    adultMode,
    watchAnytimeAdultMode,
    isOverEighteenAccepted
  } = screenState;
  const dispatch = useAppDispatch();
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
console.log( Platform.OS )

  const handleAccept = useCallback(() => {
    console.debug("accepted 18+");
    dispatch(enableAdultMode());
    dispatch(acceptOverEighteen());
    dispatch(hideAdultModeDisclaimer());
    // dispatch(hideAdultModeVip())
    dispatch(enableWatchAnytimeAdultMode());
  }, [])

  const handleReject = useCallback(() => {
    console.debug("rejected 18+");
    dispatch(disableAdultMode());
    dispatch(hideAdultModeDisclaimer());
  }, [])

  return (
    <View
      style={{
        ...styles.container,
        height: adultModeVipShow || (!isOverEighteenAccepted && adultModeDisclaimerShow) ? "100%" : "auto",
      }}
    >
      {watchAnytimeAdultMode && <WatchAnytimeVipModal />}
      {(UMENG_CHANNEL != "GOOGLE_PLAY" || Platform.OS === "ios" ) && (
        <AdultModeSwitch switchStyle={styles.switch} />
      )}
      {watchAnytimeAdultMode && (UMENG_CHANNEL != "GOOGLE_PLAY" || Platform.OS === "ios" )&& (
        <AdultModeCountdownIndicator
          containerStyle={{
            position: "absolute",
            top: 70,
            right: 20,
            flex: 1,
          }}
        />
      )}
      <EighteenPlusOverlay
        handleAccept={handleAccept}
        handleReject={handleReject}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    width: "100%",
    position: "absolute",
  },
  switch: {
    position: "absolute",
    top: 25,
    right: 20,
  },
});

export default eighteenPlusControls;
