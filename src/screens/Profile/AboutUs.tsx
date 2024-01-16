import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ScreenContainer from "../../components/container/screenContainer";
import { RootStackScreenProps } from "@type/navigationTypes";
import { useTheme } from "@react-navigation/native";
import { RootState } from "@redux/store";

import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import { Button } from "@rneui/themed";
import ShowMoreButton from "../../components/button/showMoreButton";
import Logo2 from "@static/images/logo2.svg";
import NotificationModal from "../../components/modal/notificationModal";
import {
  APP_EMAIL_CONST,
  APP_NAME_CONST,
  APP_VERSION,
} from "@utility/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNRestart from 'react-native-restart';
import {FFmpegKit, FFmpegSession} from 'ffmpeg-kit-react-native'
import RNFetchBlob from "rn-fetch-blob";
import { downloadVod } from "../../utils/vodDownloader";

const output = RNFetchBlob.fs.dirs.DocumentDir + '/testdownload'


export default ({ navigation }: RootStackScreenProps<"关于我们">) => {
  const [s, setS] = useState<FFmpegSession>()

  const downloadVideo = () => downloadVod('https://m3u.haiwaikan.com/xm3u8/5419f222d945864e287379169bc19ca4bb6a05be098d4b893ac7e9bd60c673669921f11e97d0da21.m3u8')

  const handlePress = useCallback(async () => {
    await downloadVideo()
  }, [])

  return (
    <Button title={'download'} onPress={handlePress}/>
  )
};

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  submitBtn: {
    borderRadius: 10,
  },
});
