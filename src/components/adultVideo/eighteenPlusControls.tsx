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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/hooks";
import { RootState } from "@redux/store";
import {
  acceptOverEighteen,
  disableAdultMode,
  enableAdultMode,
  enableWatchAnytimeAdultMode,
  hideAdultModeDisclaimer,
  hideAdultModeVip,
  hideAdultVipPrivilegeMiniVideoAction,
  incrementAdultVideoWatchTime,
  showAdultVipPrivilegeMiniVideoAction,
} from "@redux/actions/screenAction";
import { UMENG_CHANNEL } from "@utility/constants";
import { AdultVipPrivilegeOverlay } from "../modal/adultVipPrivilegeOverlay";
import { VipPrivilegeFloatingIndicator } from "./vipPrivilegeFloatingIndicator";
import { UserStateType } from "@redux/reducers/userReducer";
import { User } from "@models";
interface Props { }

const eighteenPlusControls = ({ }: Props) => {
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const userState = useSelector<UserStateType>('userReducer');
  const {
    adultModeVipShow,
    adultModeDisclaimerShow,
    adultMode,
    watchAnytimeAdultMode,
    isOverEighteenAccepted,
    showAdultVipPrivilegeMiniVideo
  } = screenState;
  const dispatch = useAppDispatch();
  const isVip = true//User.isVip(userState.user);

  // useEffect(() => {
  //   let interval: any;
  //   if (adultMode && !isVip){
  //     interval = setInterval(() => {
  //       dispatch(incrementAdultVideoWatchTime())
  //     }, 1000)
  //   }
  //   return () => clearInterval(interval)
  // }, [adultMode])
  console.log(Platform.OS)

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

  const handlePressIndicator = useCallback(() => {
    dispatch(showAdultVipPrivilegeMiniVideoAction())
  }, [])

  const handleOnClose = useCallback(() => {
    dispatch(hideAdultVipPrivilegeMiniVideoAction())
    console.debug('close!!!')
  }, [])

  return (
    <View
      style={{
        ...styles.container,
        // height: adultModeVipShow || (!isOverEighteenAccepted && adultModeDisclaimerShow) ? "100%" : "auto",
        height: showAdultVipPrivilegeMiniVideo ? '100%' : 'auto'
      }}
    >
      {/* {watchAnytimeAdultMode && <WatchAnytimeVipModal />} */}
      {(screenState.showAdultTab) && (
        <AdultModeSwitch switchStyle={styles.switch} />
      )}
      {watchAnytimeAdultMode && !isVip && !showAdultVipPrivilegeMiniVideo &&
        <VipPrivilegeFloatingIndicator
          text1="升级VIP"
          text2="享更多福利视频 》"
          containerStyle={{
            position: "absolute",
            top: 70,
            right: 0,
            flex: 1,
          }}
          onPress={handlePressIndicator}
        />

      }
      {/* {watchAnytimeAdultMode && (UMENG_CHANNEL != "GOOGLE_PLAY" || Platform.OS === "ios" )&& (
        <AdultModeCountdownIndicator
          containerStyle={{
            position: "absolute",
            top: 70,
            right: 20,
            flex: 1,
          }}
        />
      )} */}
      {/* <EighteenPlusOverlay
        handleAccept={handleAccept}
        handleReject={handleReject}
      /> */}
      <AdultVipPrivilegeOverlay
        showCondition={showAdultVipPrivilegeMiniVideo}
        onClose={handleOnClose}
        showBlur={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    // width: "100%",
    // position: "absolute",
  },
  switch: {
    // position: "absolute",
    // top: 25,
    // right: 20,
  },
});

export default eighteenPlusControls;
