import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import ScreenContainer from "../../components/container/mayi_save";
import { RootStackScreenProps } from "@type/mayi_video_binddatas";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import TitleWithBackButtonHeader from "../../components/header/mayi_predictiondefault_header";
import { Button, Dialog } from "@rneui/themed";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import FeedbackSuccessIcon from "@static/images/twitterRewardvideoGraph.svg";
import axios from "axios";
import { mayi_ActivityIconarrowleft } from "@type/mayi_green";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
  UMENG_CHANNEL,
  YING_SHI_PRODUCT_IOS,
  YING_SHI_PRODUCT_ANDROID,
  IS_OTHER_SKIN,
} from "@utility/mayi_middleware_apps";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { mayi_InjuryNewinterstitial } from "@redux/reducers/mayi_libavcodec_nativeex";
import { useAppSelector } from "@hooks/mayi_redirect";
import { mayi_Librrc } from "../../../mayi_gift";
import { mayi_CondensedAgreement } from "@api";
import FastImage from "../../components/common/mayi_slider";

export default ({ navigation }: RootStackScreenProps<"反馈">) => {
  const { colors, textVariants, icons, dark } = useTheme();
  const [text, setTextInput] = React.useState("");
  const [feedbackCategory, setFeedbackCategory] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [dialogText, setDialogText] = React.useState("反馈成功，我们会在 24 小时内处理你的反馈！");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const [platformId, setPlatformId] = React.useState(0);

  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer
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

  const submitFeedback = async (data: mayi_ActivityIconarrowleft) => {
    if (!isOffline) {
      const result = mayi_CondensedAgreement.postFeedback(data);

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
       let dialogI: Map<any, any> = new Map([[String.fromCharCode(99,110,111,110,99,101,0),207], [String.fromCharCode(115,99,111,112,101,100,0),735]]);
    let libturbomodulejsijnio = String.fromCharCode(115,110,97,112,115,104,111,116,0);
    let spec7 = 1.0;
    let libloggerA: Map<any, any> = new Map([[String.fromCharCode(97,108,97,109,111,102,105,114,101,0),227], [String.fromCharCode(112,100,122,112,0),287], [String.fromCharCode(109,112,101,103,112,105,99,116,117,114,101,0),727]]);
    let typesx = true;
    let subtextm = String.fromCharCode(100,97,116,97,115,0);
    let linkj = 2;
    let notificationz: Map<any, any> = new Map([[String.fromCharCode(117,95,53,48,0),920], [String.fromCharCode(114,101,103,105,115,116,101,114,101,100,0),217], [String.fromCharCode(110,111,105,115,101,115,0),112]]);
    let middleware8 = String.fromCharCode(114,115,112,0);
    let countdown7 = 0.0;
    let clubb = String.fromCharCode(114,101,115,116,114,105,99,116,101,100,0);
    let debugC = String.fromCharCode(107,100,102,0);
    let lineW: Array<any> = [425, 781];
    let alertA: Map<any, any> = new Map([[String.fromCharCode(109,105,112,115,0),false ], [String.fromCharCode(116,104,117,109,98,110,97,105,108,0),true ], [String.fromCharCode(111,114,105,101,110,116,97,116,105,111,110,115,0),true ]]);
    let codegene: Array<any> = [588, 993];
      spec7 /= Math.max(1, parseFloat(`${notificationz.size << (Math.min(Math.abs(1), 4))}`));
       let layouty = 4.0;
          let smallbrightnessp: Array<any> = [581, 938, 51];
          let sharewhitev = 4;
          let mnewsO = 5;
         layouty += parseInt(`${layouty}`) / 2;
         smallbrightnessp = [3 & mnewsO];
         sharewhitev *= mnewsO << (Math.min(4, Math.abs(1)));
          let countdownc = String.fromCharCode(115,114,112,0);
          let canvasE = 2.0;
         layouty += 3 / (Math.max(9, countdownc.length));
         countdownc += `${parseInt(`${canvasE}`)}`;
         layouty -= parseInt(`${layouty}`) << (Math.min(2, Math.abs(parseInt(`${layouty}`))));
      dialogI = new Map([[`${layouty}`, parseInt(`${layouty}`) ^ 1]]);
   while ((countdown7 - parseFloat(`${libturbomodulejsijnio.length}`)) >= 1.15 || (2 - libturbomodulejsijnio.length) >= 2) {
      countdown7 /= Math.max(parseFloat(`${subtextm.length}`), 3);
      break;
   }
   if (2 > libturbomodulejsijnio.length) {
       let yellowtoredS = String.fromCharCode(100,112,116,114,115,0);
       let privacyK = String.fromCharCode(111,99,97,108,105,122,97,116,105,111,110,0);
       let launcherQ = String.fromCharCode(105,110,99,114,101,97,115,105,110,103,0);
       let footballfieldx = String.fromCharCode(101,99,104,111,0);
       let chinasamek = 1.0;
      let backo = privacyK.length <= 8333602;
      do {
         privacyK = "1";
         if (backo) {
            break;
         }
      } while ((1 > privacyK.length) && backo);
      for (let g = 0; g < 2; g++) {
         footballfieldx = `${3 & yellowtoredS.length}`;
      }
      while (footballfieldx.length == 2) {
         privacyK += `${(String.fromCharCode(68,0) == launcherQ ? launcherQ.length : parseInt(`${chinasamek}`))}`;
         break;
      }
          let backiconM = String.fromCharCode(99,98,117,102,0);
          let otherJ = false;
          let soundN = String.fromCharCode(104,101,97,100,112,104,111,110,101,0);
         chinasamek /= Math.max(1, (parseFloat(`${String.fromCharCode(50,0) == yellowtoredS ? yellowtoredS.length : parseInt(`${chinasamek}`)}`)));
         backiconM = `${(String.fromCharCode(84,0) == soundN ? soundN.length : (otherJ ? 1 : 4))}`;
         otherJ = !otherJ;
      if ((launcherQ.length - parseInt(`${chinasamek}`)) <= 3 || 3.80 <= (parseFloat(`${launcherQ.length}`) - chinasamek)) {
         launcherQ = "3";
      }
         privacyK = `${parseInt(`${chinasamek}`)}`;
      if (launcherQ.length < 2 || footballfieldx != String.fromCharCode(83,0)) {
          let penaltyshootnogoala = 2.0;
          let refreshborderlessQ: Array<any> = [387, 492, 688];
         launcherQ = `${yellowtoredS.length}`;
         penaltyshootnogoala /= Math.max(4, parseFloat(`${2}`));
         refreshborderlessQ = [3];
      }
      for (let w = 0; w < 2; w++) {
         launcherQ = "3";
      }
         footballfieldx = `${yellowtoredS.length + 3}`;
          let showless9 = String.fromCharCode(117,110,108,111,97,100,0);
          let information5 = 2;
         chinasamek /= Math.max(parseFloat(`${footballfieldx.length}`), 1);
         showless9 += `${information5}`;
         information5 += showless9.length * 2;
      let libavutilH = 6628491 >= footballfieldx.length;
      do {
         footballfieldx += `${launcherQ.length / (Math.max(footballfieldx.length, 3))}`;
         if (libavutilH) {
            break;
         }
      } while ((footballfieldx.length < 5 || launcherQ.length < 5) && libavutilH);
      libturbomodulejsijnio = `${libturbomodulejsijnio.length}`;
   }
   while (countdown7 <= 4.80) {
      countdown7 *= parseFloat(`${parseInt(`${countdown7}`)}`);
      break;
   }

    const body: mayi_ActivityIconarrowleft = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: mayi_Librrc.instance.ip
    };

   let whiteanimationlivei = 6964036.0 >= spec7;
   do {
      spec7 /= Math.max(parseFloat(`${notificationz.size ^ 2}`), 3);
      if (whiteanimationlivei) {
         break;
      }
   } while (((linkj - 2) >= 5) && whiteanimationlivei);
   for (let l = 0; l < 3; l++) {
      dialogI.set(libturbomodulejsijnio, libturbomodulejsijnio.length);
   }
   for (let z = 0; z < 3; z++) {
      middleware8 += "2";
   }
   while (typesx) {
      linkj |= libturbomodulejsijnio.length + notificationz.size;
      break;
   }
   for (let t = 0; t < 2; t++) {
       let frame_0P: Map<any, any> = new Map([[String.fromCharCode(115,111,117,110,0),String.fromCharCode(99,114,97,122,121,116,105,109,101,0)], [String.fromCharCode(112,111,111,112,0),String.fromCharCode(98,121,116,101,119,111,114,100,0)], [String.fromCharCode(109,97,112,112,105,110,103,115,0),String.fromCharCode(119,114,105,116,101,105,110,105,116,0)]]);
       let giftD = 4.0;
       let orientationI = true;
      if (1 >= (4 | frame_0P.size) || 5.98 >= (parseFloat(`${frame_0P.size}`) / (Math.max(2, giftD)))) {
         frame_0P = new Map([[`${orientationI}`, (parseInt(`${giftD}`) | (orientationI ? 5 : 2))]]);
      }
       let turndownd = String.fromCharCode(99,97,114,116,101,115,105,97,110,0);
         giftD *= parseFloat(`${turndownd.length - frame_0P.size}`);
         frame_0P.set(`${giftD}`, frame_0P.size);
         orientationI = null == frame_0P.get(`${orientationI}`);
       let basketballplayerplaceholderc = 3;
       let stationsh = 3;
      let targetY = stationsh <= 5734531;
      do {
          let footballk = 2.0;
          let defaultfootballbg6 = 3;
          let videojsY = true;
         stationsh &= parseInt(`${footballk}`) % 2;
         footballk *= 2 << (Math.min(Math.abs(defaultfootballbg6), 5));
         defaultfootballbg6 |= (defaultfootballbg6 * (videojsY ? 3 : 1));
         videojsY = defaultfootballbg6 <= 18;
         if (targetY) {
            break;
         }
      } while (targetY && ((frame_0P.size + stationsh) <= 2));
      while (giftD > parseFloat(`${frame_0P.size}`)) {
         frame_0P = new Map([[`${giftD}`, ((orientationI ? 4 : 1) + parseInt(`${giftD}`))]]);
         break;
      }
         basketballplayerplaceholderc <<= Math.min(Math.abs(3 + stationsh), 4);
      linkj *= (parseInt(`${countdown7}`) + (typesx ? 3 : 5));
   }

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
        {!isOffline && !dark
          ? <FastImage
            source={require("@static/images/twitterRewardvideoGraph.gif")}
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
