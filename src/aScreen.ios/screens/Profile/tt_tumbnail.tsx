import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import ScreenContainer from "../../components/container/tt_backward";
import { RootStackScreenProps } from "@type/tt_temperature";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { ttOrange } from "@redux/tt_updates_bottom";
import TitleWithBackButtonHeader from "../../components/header/tt_typing_tail_header";
import { Button, Dialog } from "@rneui/themed";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import FeedbackSuccessIcon from "@static/images/mbnativeCoreReward.svg";
import axios from "axios";
import { ttPhoneEntry } from "@type/tt_line_borderless";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
  UMENG_CHANNEL,
  YING_SHI_PRODUCT_IOS,
  YING_SHI_PRODUCT_ANDROID,
  IS_OTHER_SKIN,
} from "@utility/tt_trophy_cross";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { ttBaiduNewinterstitial } from "@redux/reducers/tt_center";
import { useAppSelector } from "@hooks/tt_spec_download";
import { ttConfigRecommendation } from "../../../../tt_copy_floater";
import { ttPhotoTheme } from "@api";
import FastImage from "../../components/common/tt_connection";

export default ({ navigation }: RootStackScreenProps<"反馈">) => {
  const { colors, textVariants, icons } = useTheme();
  const [text, setTextInput] = React.useState("");
  const [feedbackCategory, setFeedbackCategory] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [dialogText, setDialogText] = React.useState("反馈成功，我们会在 24 小时内处理你的反馈！");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const [platformId, setPlatformId] = React.useState(0);

  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);

    if (Platform.OS === "ios") {
      setPlatformId(YING_SHI_PRODUCT_IOS);
    } else {
      setPlatformId(YING_SHI_PRODUCT_ANDROID);
    }
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline) {
      setIsOffline(settingsReducer.isOffline);
    } else {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  const submitFeedback = async (data: ttPhoneEntry) => {
    if (!isOffline) {
      const result = ttPhotoTheme.postFeedback(data);

      setDialogText("反馈成功，我们会在 24 小时内处理你的反馈！");
      Keyboard.dismiss();
      setIsDialogOpen(true);

      return result;
    } else {
      setDialogText("无法检测网络， 请稍后再试");
      Keyboard.dismiss();
      setIsDialogOpen(true);
    }
  };

  function sendFeedbackHandler() {
       let securityr = String.fromCharCode(109,97,103,110,105,116,117,100,101,115,95,103,95,54,48,0);
    let commentv = 1;
    let reports = 5.0;
    let greenh: Array<any> = [136, 211, 186];
    let rewardm: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,100,101,98,95,112,95,53,57,0),false ], [String.fromCharCode(97,104,101,97,100,95,52,95,54,56,0),false ], [String.fromCharCode(100,111,119,110,108,111,97,100,105,110,103,95,114,95,56,52,0),true ]]);
    let build5 = String.fromCharCode(105,95,55,49,95,103,101,116,0);
    let notificationp = String.fromCharCode(117,95,51,55,95,119,105,114,101,0);
    let orientationU = 0;
    let appleD = 0.0;
    let recommendationq = String.fromCharCode(109,111,100,98,95,55,95,55,49,0);
    let robotof = false;
    let customi = false;
    let photoZ = String.fromCharCode(116,121,112,101,99,111,100,101,95,97,95,53,55,0);
   for (let a = 0; a < 1; a++) {
       let whistleD = 4.0;
          let pressure3 = true;
          let sansU: Map<any, any> = new Map([[String.fromCharCode(118,95,56,95,115,117,98,120,0),true ], [String.fromCharCode(108,111,99,107,95,103,95,57,52,0),true ], [String.fromCharCode(115,105,110,101,115,95,109,95,54,56,0),true ]]);
         whistleD += parseFloat(`${sansU.size / (Math.max(2, 8))}`);
      let fieldi = whistleD >= 9029614.0;
      do {
         whistleD -= parseFloat(`${3 / (Math.max(parseInt(`${whistleD}`), 9))}`);
         if (fieldi) {
            break;
         }
      } while ((2.5 > (whistleD / (Math.max(5, 2)))) && fieldi);
       let basketballn = String.fromCharCode(100,95,51,53,95,117,116,105,109,101,0);
       let temperaturee = String.fromCharCode(119,114,97,112,100,101,116,101,99,116,95,109,95,56,50,0);
      notificationp = `${(securityr == String.fromCharCode(50,0) ? securityr.length : build5.length)}`;
   }
       let android8 = 1.0;
      let pagej = 6267002.0 >= android8;
      do {
         android8 /= Math.max(4, parseInt(`${android8}`) << (Math.min(Math.abs(parseInt(`${android8}`)), 2)));
         if (pagej) {
            break;
         }
      } while (((android8 * 4.80) < 1.78 || (android8 * android8) < 4.80) && pagej);
      for (let n = 0; n < 3; n++) {
         android8 /= Math.max(2, parseInt(`${android8}`));
      }
      for (let a = 0; a < 2; a++) {
         android8 *= 1;
      }
      build5 += `${1 << (Math.min(4, Math.abs(parseInt(`${android8}`))))}`;
   let actionsA = notificationp.length <= 5760838;
   do {
      notificationp += `${2 | rewardm.size}`;
      if (actionsA) {
         break;
      }
   } while ((build5 == notificationp) && actionsA);
   if ((parseInt(`${appleD}`) + rewardm.size) > 1) {
       let configure6 = String.fromCharCode(108,95,55,56,95,100,105,118,105,115,111,114,0);
       let chinar = 5.0;
       let mathf: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,105,110,103,95,57,95,49,51,0),String.fromCharCode(110,117,108,108,95,54,95,52,53,0)], [String.fromCharCode(99,95,51,95,98,101,103,97,110,0),String.fromCharCode(105,114,99,97,109,95,102,95,54,48,0)]]);
       let coreX: Map<any, any> = new Map([[String.fromCharCode(101,95,50,49,95,105,110,115,101,114,116,115,0),true ], [String.fromCharCode(105,110,116,108,95,97,95,49,54,0),false ]]);
       let verticalT = String.fromCharCode(115,111,97,99,99,101,112,116,95,106,95,55,48,0);
          let activityk = 4.0;
          let reportn = 0.0;
         mathf = new Map([[`${coreX.size}`, configure6.length << (Math.min(Math.abs(1), 5))]]);
         activityk /= Math.max(parseFloat(`${1}`), 4);
         reportn /= Math.max(4, parseFloat(`${parseInt(`${activityk}`)}`));
      while ((chinar + 5.97) >= 2.27 || (4 / (Math.max(3, mathf.size))) >= 1) {
          let form5 = String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,115,95,106,95,52,0);
          let videojsw = true;
          let reminderq: Array<any> = [String.fromCharCode(116,101,115,116,101,114,95,121,95,50,55,0), String.fromCharCode(116,95,57,57,95,100,101,108,116,97,113,0), String.fromCharCode(112,114,111,103,114,101,115,105,118,101,95,104,95,52,49,0)];
          let ping6 = 1;
         chinar += ((videojsw ? 2 : 4) ^ reminderq.length);
         form5 = `${(String.fromCharCode(80,0) == form5 ? ping6 : form5.length)}`;
         videojsw = form5.endsWith(`${ping6}`);
         reminderq.push(3);
         break;
      }
         chinar /= Math.max(5, configure6.length);
          let china1 = 2;
         chinar += china1 << (Math.min(Math.abs(coreX.size), 5));
         mathf.set(verticalT, verticalT.length & 2);
          let splashm = 5.0;
          let stationsc = String.fromCharCode(112,97,114,97,109,101,116,114,105,122,101,100,95,49,95,51,56,0);
          let context9: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,110,101,100,95,114,95,55,56,0),256], [String.fromCharCode(115,112,111,105,108,101,114,95,56,95,54,55,0),287], [String.fromCharCode(102,95,54,56,95,100,114,111,112,115,0),696]]);
         coreX.set(`${configure6}`, 3 * context9.size);
         splashm += parseInt(`${splashm}`) & 2;
         stationsc += "3";
         context9 = new Map([[`${splashm}`, (String.fromCharCode(72,0) == stationsc ? stationsc.length : parseInt(`${splashm}`))]]);
      let flipperR = String.fromCharCode(122,120,118,0) == verticalT;
      do {
         verticalT += `${2 - verticalT.length}`;
         if (flipperR) {
            break;
         }
      } while (flipperR && ((verticalT.length % 5) <= 1 || (chinar - 4.2) <= 3.50));
         mathf.set(`${chinar}`, configure6.length);
      let launch9 = verticalT == String.fromCharCode(109,97,52,118,116,0);
      do {
          let corem = 3;
         verticalT = `${corem}`;
         if (launch9) {
            break;
         }
      } while ((4 >= (verticalT.length >> (Math.min(Math.abs(3), 2))) && (verticalT.length >> (Math.min(Math.abs(3), 5))) >= 3) && launch9);
       let moona = String.fromCharCode(105,108,115,116,95,120,95,56,51,0);
       let clubg = String.fromCharCode(102,95,57,50,95,111,115,109,111,115,0);
          let sina4 = 1.0;
         moona += `${configure6.length}`;
         sina4 -= parseFloat(`${parseInt(`${sina4}`) | parseInt(`${sina4}`)}`);
      let themeL = configure6 == String.fromCharCode(55,122,121,121,103,104,0);
      do {
         configure6 += `${2 + clubg.length}`;
         if (themeL) {
            break;
         }
      } while (themeL && (configure6.length > coreX.size));
      while (1 == (coreX.size % (Math.max(2, 9)))) {
          let googleU = 2.0;
          let d_positiond = String.fromCharCode(102,95,53,54,95,104,108,105,116,0);
         coreX.set(d_positiond, (d_positiond == String.fromCharCode(54,0) ? parseInt(`${googleU}`) : d_positiond.length));
         break;
      }
      if (!configure6.endsWith(`${mathf.size}`)) {
         mathf = new Map([[`${chinar}`, 3 ^ moona.length]]);
      }
      let favoritex = String.fromCharCode(98,104,95,48,115,55,97,49,109,98,0) == verticalT;
      do {
         verticalT += `${coreX.size - mathf.size}`;
         if (favoritex) {
            break;
         }
      } while (favoritex && (5 <= coreX.size));
      rewardm.set(verticalT, 2 << (Math.min(1, verticalT.length)));
   }
   for (let g = 0; g < 2; g++) {
       let index7 = 0.0;
      let sanss = index7 >= 8319937.0;
      do {
         index7 /= Math.max(1, parseInt(`${index7}`) | parseInt(`${index7}`));
         if (sanss) {
            break;
         }
      } while (((index7 - 1.52) < 2.26 || 2.39 < (1.52 / (Math.max(1, index7)))) && sanss);
          let paginationz = 1;
          let filedt = String.fromCharCode(97,114,101,95,99,95,53,55,0);
         index7 -= parseInt(`${index7}`);
         paginationz += filedt.length;
         filedt = `${2 << (Math.min(5, filedt.length))}`;
         index7 /= Math.max(3, 3);
      build5 = "1";
   }

    const body: ttPhoneEntry = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: ttConfigRecommendation.instance.ip
    };

   let heartI = rewardm.size <= 5049939;
   do {
      rewardm.set(`${robotof}`, 1);
      if (heartI) {
         break;
      }
   } while (heartI && ((rewardm.size >> (Math.min(Math.abs(2), 3))) > 2 && (2 >> (Math.min(1, Math.abs(rewardm.size)))) > 2));
   while (build5 != String.fromCharCode(122,0)) {
      securityr = `${3 % (Math.max(parseInt(`${appleD}`), 3))}`;
      break;
   }
   let hejit = 7755516.0 <= appleD;
   do {
      appleD += parseInt(`${reports}`);
      if (hejit) {
         break;
      }
   } while ((orientationU < 2) && hejit);
      commentv *= parseInt(`${appleD}`) % (Math.max(recommendationq.length, 7));
      recommendationq = `${(String.fromCharCode(75,0) == securityr ? build5.length : securityr.length)}`;

    submitFeedback(body);
  }

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="我要反馈" />
      <View style={{ marginTop: 30, marginBottom: 20 }}>
        <Text style={{ ...textVariants.header, marginBottom: 20 }}>
          问题反馈:
        </Text>
        <TextInput
          style={{
            ...styles.input,
            backgroundColor: colors.card2,
            ...textVariants.body,
          }}
          onChangeText={setTextInput}
          placeholder="请详细描述您的问题和建议"
          editable
          multiline
          placeholderTextColor={colors.muted}
          value={text}
          rows={8}
          maxLength={1000}
          textAlignVertical="top"
          blurOnSubmit
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setTextInput("");
          sendFeedbackHandler();
        }}
      >
        <View
          style={{
            ...styles.submitBtn,
            backgroundColor: text ? colors.primary : colors.card2,
          }}
        >
          <Text
            style={{
              ...textVariants.body,
              fontWeight: "600",
              color: text ? colors.background : colors.muted,
            }}
          >
            提交
          </Text>
        </View>
      </TouchableOpacity>
      <Dialog
        isVisible={isDialogOpen}
        overlayStyle={{
          backgroundColor: "rgba(34, 34, 34, 1)",
          ...styles.overlay,
        }}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        onBackdropPress={() => setIsDialogOpen(false)}
      >
        {!isOffline && IS_OTHER_SKIN
          ? <FastImage
            source={require("@static/images/mbnativeCoreReward.gif")}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
          : <FeedbackSuccessIcon />
        }

        <Text style={{ ...textVariants.bigHeader, textAlign: 'center' }}>{dialogText}</Text>
      </Dialog>
    </ScreenContainer>
  );
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
  input: {
    
    height: 200,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 10,
  },
  submitBtn: {
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
