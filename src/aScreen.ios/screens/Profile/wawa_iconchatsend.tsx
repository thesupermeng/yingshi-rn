import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import ScreenContainer from "../../components/container/wawa_nterstitial_iconpipexpand";
import { RootStackScreenProps } from "@type/wawa_iconnewchat";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import TitleWithBackButtonHeader from "../../components/header/wawa_matchinactive_header";
import { Button, Dialog } from "@rneui/themed";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import FeedbackSuccessIcon from "@static/images/libsgcoreReferrerBasketballdetailsbg.svg";
import axios from "axios";
import { wawaHooksGoallogo } from "@type/wawa_gradlew";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
  UMENG_CHANNEL,
  YING_SHI_PRODUCT_IOS,
  YING_SHI_PRODUCT_ANDROID,
  IS_OTHER_SKIN,
} from "@utility/wawa_iconpointscore";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { wawaBackground } from "@redux/reducers/wawa_comment";
import { useAppSelector } from "@hooks/wawa_root";
import { wawaBasketballiconPenaltyshootnogoal } from "../../../../wawa_shareblack_orientation";
import { wawaSpec } from "@api";
import FastImage from "../../components/common/wawa_iconarrowrightblack";

export default ({ navigation }: RootStackScreenProps<"反馈">) => {
  const { colors, textVariants, icons } = useTheme();
  const [text, setTextInput] = React.useState("");
  const [feedbackCategory, setFeedbackCategory] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [dialogText, setDialogText] = React.useState("反馈成功，我们会在 24 小时内处理你的反馈！");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const [platformId, setPlatformId] = React.useState(0);

  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
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

  const submitFeedback = async (data: wawaHooksGoallogo) => {
    if (!isOffline) {
      const result = wawaSpec.postFeedback(data);

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
       let notificationfillemptyt = String.fromCharCode(100,95,55,95,112,114,111,98,97,98,105,108,105,116,105,101,115,0);
    let imageactionliveP = false;
    let bangx = false;
    let lightz = String.fromCharCode(112,95,48,95,100,101,115,116,105,110,97,116,105,111,110,0);
    let weatherv = String.fromCharCode(105,110,116,101,110,115,105,116,121,95,115,95,52,50,0);
    let popupL: Map<any, any> = new Map([[String.fromCharCode(103,95,57,53,95,99,100,101,114,114,111,114,0),199], [String.fromCharCode(104,100,108,114,95,113,95,56,50,0),782]]);
    let videocommonG: Array<any> = [112, 753];
    let info2 = String.fromCharCode(99,95,54,56,95,112,97,105,114,105,110,103,0);
    let roomZ = String.fromCharCode(113,95,55,49,95,104,105,103,104,108,105,103,104,116,0);
    let reactnavigationi = String.fromCharCode(108,95,57,49,95,113,115,99,97,108,101,113,108,111,103,0);
    let imagesg = true;
    let iconchatsend8 = String.fromCharCode(107,95,51,50,95,108,105,98,115,114,116,0);
    let launchH = String.fromCharCode(108,95,57,53,95,119,97,110,116,115,0);
    let umengO = 0.0;
    let graphk = 3.0;
    let libhermesa = 4;
    let completeO = String.fromCharCode(104,95,54,48,95,98,105,116,112,108,97,110,97,114,99,104,117,110,107,121,0);
       let debugf = true;
       let icondownimgY = String.fromCharCode(98,95,50,95,101,97,103,101,114,0);
       let imagewatchliveK: Array<any> = [151, 784];
      if (debugf) {
         debugf = icondownimgY.length <= 68;
      }
      let crossu = icondownimgY == String.fromCharCode(108,114,116,117,52,106,56,0);
      do {
          let moduleW = String.fromCharCode(108,95,57,51,95,102,105,108,109,0);
          let subbasketballplayerI = 2.0;
         icondownimgY += `${1 / (Math.max(8, icondownimgY.length))}`;
         moduleW += `${1 ^ parseInt(`${subbasketballplayerI}`)}`;
         subbasketballplayerI -= parseInt(`${subbasketballplayerI}`) ^ 2;
         if (crossu) {
            break;
         }
      } while ((5 > icondownimgY.length) && crossu);
      let singaporeJ = debugf ? !debugf : debugf;
      do {
          let libfbZ = String.fromCharCode(104,95,56,54,95,115,117,98,118,105,101,119,101,114,0);
          let expandD = String.fromCharCode(108,95,49,55,95,105,110,102,101,114,0);
          let iconmegaphonem: Map<any, any> = new Map([[String.fromCharCode(108,105,115,116,101,100,95,114,95,49,51,0),false ], [String.fromCharCode(115,105,109,117,108,99,97,115,116,95,99,95,55,48,0),false ], [String.fromCharCode(110,95,52,57,95,104,101,118,109,97,115,107,0),true ]]);
          let libswscaleS = 2.0;
         debugf = iconmegaphonem.size < 21 && libfbZ == String.fromCharCode(54,0);
         libfbZ = `${1 | expandD.length}`;
         expandD += `${expandD.length}`;
         iconmegaphonem.set(expandD, parseInt(`${libswscaleS}`) & expandD.length);
         libswscaleS *= parseInt(`${libswscaleS}`) % 1;
         if (singaporeJ) {
            break;
         }
      } while (singaporeJ && (!debugf));
          let backgroundb = String.fromCharCode(104,95,54,54,95,117,102,102,101,114,0);
          let bellB = String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,95,48,95,54,57,0);
          let volumes: Map<any, any> = new Map([[String.fromCharCode(98,95,49,55,95,109,107,118,109,117,120,101,114,117,116,105,108,0),String.fromCharCode(99,111,100,101,99,112,114,105,118,97,116,101,95,55,95,55,0)], [String.fromCharCode(122,95,53,51,0),String.fromCharCode(105,95,50,51,95,115,117,98,116,97,115,107,0)]]);
         icondownimgY = "1";
         backgroundb = `${volumes.size << (Math.min(Math.abs(2), 4))}`;
         bellB += "3";
         volumes = new Map([[`${volumes.size}`, volumes.size]]);
         icondownimgY += `${(imagewatchliveK.length / (Math.max(10, (debugf ? 5 : 2))))}`;
         debugf = imagewatchliveK.length == 16;
         icondownimgY = `${imagewatchliveK.length}`;
      if ((2 & icondownimgY.length) < 4 || (icondownimgY.length & imagewatchliveK.length) < 2) {
          let description_npy = String.fromCharCode(100,111,119,110,108,101,102,116,95,122,95,56,53,0);
          let icondefaultthumbnailq: Array<any> = [241, 1000];
         imagewatchliveK.push(icondownimgY.length);
         description_npy += "3";
         icondefaultthumbnailq.push(description_npy.length);
      }
      while (icondownimgY.includes(`${debugf}`)) {
         icondownimgY = `${imagewatchliveK.length ^ 2}`;
         break;
      }
      launchH += `${((debugf ? 2 : 4) / (Math.max(6, launchH.length)))}`;
      weatherv = `${notificationfillemptyt.length % (Math.max(2, 5))}`;
       let statisticsactiveI = String.fromCharCode(97,95,52,54,95,110,97,118,105,103,97,116,105,111,110,0);
       let iconrefreshC = String.fromCharCode(99,102,116,102,115,117,98,95,103,95,54,54,0);
       let whatsapp9 = String.fromCharCode(105,95,49,48,95,104,97,115,104,101,100,0);
       let dialogA = String.fromCharCode(102,105,114,115,116,112,97,115,115,95,111,95,54,51,0);
       let iconclosewhitewithbgO = 0.0;
       let abidetectO = 0.0;
         iconrefreshC = `${iconrefreshC.length | dialogA.length}`;
         whatsapp9 += `${(String.fromCharCode(112,0) == dialogA ? iconrefreshC.length : dialogA.length)}`;
       let langkeyH: Map<any, any> = new Map([[String.fromCharCode(102,95,53,51,95,104,111,108,100,105,110,103,0),736], [String.fromCharCode(97,95,56,56,95,119,97,116,99,104,0),301]]);
      for (let y = 0; y < 1; y++) {
         statisticsactiveI += `${2 * langkeyH.size}`;
      }
      notificationfillemptyt += `${2 | notificationfillemptyt.length}`;
   if (!lightz.includes(`${bangx}`)) {
      lightz = `${reactnavigationi.length}`;
   }
   for (let y = 0; y < 2; y++) {
      reactnavigationi = `${launchH.length << (Math.min(Math.abs(2), 5))}`;
   }
   while (!bangx) {
      imageactionliveP = iconchatsend8.length >= notificationfillemptyt.length;
      break;
   }

    const body: wawaHooksGoallogo = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: wawaBasketballiconPenaltyshootnogoal.instance.ip
    };

      imagesg = 38 == iconchatsend8.length;
       let iconfeedbackF = String.fromCharCode(108,105,115,116,101,110,101,114,95,119,95,49,52,0);
      if (iconfeedbackF != String.fromCharCode(100,0) || 2 >= iconfeedbackF.length) {
         iconfeedbackF = "2";
      }
      for (let k = 0; k < 2; k++) {
         iconfeedbackF += `${iconfeedbackF.length}`;
      }
      for (let o = 0; o < 2; o++) {
          let predictionbuttonx = true;
          let tumbnailO = 0;
          let flipperB = 0;
          let lessu = 4;
          let bgvipsport_ = 4;
         iconfeedbackF = `${bgvipsport_ * 1}`;
         predictionbuttonx = !predictionbuttonx;
         tumbnailO >>= Math.min(Math.abs(flipperB), 1);
         lessu >>= Math.min(3, Math.abs(((predictionbuttonx ? 2 : 5) & lessu)));
         bgvipsport_ &= tumbnailO;
      }
      launchH += `${(String.fromCharCode(95,0) == iconfeedbackF ? popupL.size : iconfeedbackF.length)}`;
      weatherv += `${(2 / (Math.max(2, (bangx ? 3 : 1))))}`;
      popupL.set(weatherv, (weatherv == String.fromCharCode(95,0) ? videocommonG.length : weatherv.length));
      videocommonG = [2];
   for (let j = 0; j < 3; j++) {
      bangx = (roomZ.length % (Math.max(1, videocommonG.length))) == 45;
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
              color: text ? colors.primaryContrast : colors.muted,
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
            source={require("@static/images/libsgcoreReferrerBasketballdetailsbg.gif")}
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
