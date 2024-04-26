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
import { wawaBasketballiconPenaltyshootnogoal } from "../../../wawa_shareblack_orientation";
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
       let verticall = 3.0;
    let nodeq = 4.0;
    let gifgoalx = String.fromCharCode(110,111,110,98,108,111,99,107,95,107,95,52,49,0);
    let yellowtoredg = String.fromCharCode(101,120,112,105,114,105,110,103,95,121,95,52,50,0);
    let mbbid_ = 5;
    let related3 = String.fromCharCode(102,114,111,110,116,115,105,100,101,95,100,95,55,56,0);
    let root8 = 4.0;
    let textD = String.fromCharCode(119,95,56,53,95,108,111,99,97,116,101,100,0);
    let templateprocessord: Array<any> = [175, 59];
    let security2: Array<any> = [306, 574];
    let libsgcorew = 3;
    let scorepopsoundL = String.fromCharCode(116,97,105,108,115,95,114,95,51,49,0);
    let jingdong5 = 5.0;
    let classesy = 3.0;
       let dialogE = 4;
         dialogE &= dialogE - 2;
      if (dialogE > dialogE) {
         dialogE >>= Math.min(4, Math.abs(dialogE + dialogE));
      }
      while ((dialogE % 2) > 1) {
          let changeM = 1.0;
          let libimagepipelineJ = 2.0;
         dialogE &= 1 - dialogE;
         changeM *= 1 | parseInt(`${libimagepipelineJ}`);
         libimagepipelineJ += 3;
         break;
      }
      gifgoalx = `${yellowtoredg.length}`;
   if (!yellowtoredg.startsWith(`${nodeq}`)) {
       let elementsw = 0.0;
       let whistleorangeB: Array<any> = [356, 867, 162];
       let rncore4 = String.fromCharCode(98,117,102,102,101,114,113,117,101,117,101,95,103,95,52,52,0);
       let chatbotphotoI = 5.0;
       let eyecloser = false;
         eyecloser = whistleorangeB.length < 83;
          let iconshareX = true;
         rncore4 += `${parseInt(`${chatbotphotoI}`)}`;
         iconshareX = (iconshareX ? !iconshareX : iconshareX);
      if (elementsw <= 1.88 || 4.87 <= (elementsw + 1.88)) {
         eyecloser = whistleorangeB.length <= elementsw;
      }
      let middlesoundk = 6671754 <= whistleorangeB.length;
      do {
         whistleorangeB = [3 ^ rncore4.length];
         if (middlesoundk) {
            break;
         }
      } while (middlesoundk && (whistleorangeB.length == 1));
          let iconrefresh0 = String.fromCharCode(104,95,51,53,95,105,110,112,111,115,0);
          let t_playerQ = 1.0;
          let darkO = String.fromCharCode(105,95,55,54,95,98,115,102,115,0);
         eyecloser = t_playerQ < 77.42;
         iconrefresh0 = `${(darkO == String.fromCharCode(87,0) ? iconrefresh0.length : darkO.length)}`;
         t_playerQ -= parseFloat(`${iconrefresh0.length % 3}`);
         rncore4 += `${whistleorangeB.length}`;
         eyecloser = whistleorangeB.length > elementsw;
         whistleorangeB = [2];
         chatbotphotoI /= Math.max(parseInt(`${elementsw}`), 3);
         rncore4 = `${(2 - (eyecloser ? 2 : 2))}`;
       let cornerkick0: Array<any> = [554, 941];
       let code2: Array<any> = [String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,95,97,95,56,53,0), String.fromCharCode(100,101,115,116,114,117,99,116,111,114,95,103,95,54,57,0)];
         chatbotphotoI *= 2 & cornerkick0.length;
         rncore4 = `${parseInt(`${chatbotphotoI}`) - 2}`;
          let long_hc = String.fromCharCode(109,101,114,103,105,110,103,95,122,95,55,49,0);
          let qaagj = String.fromCharCode(114,97,110,115,105,116,105,111,110,95,51,95,48,0);
          let hometeamfieldI = 2;
         elementsw *= qaagj.length >> (Math.min(Math.abs(1), 5));
         long_hc = `${long_hc.length | 3}`;
         qaagj += "2";
         hometeamfieldI %= Math.max(hometeamfieldI, 4);
         rncore4 += `${cornerkick0.length + 3}`;
      nodeq *= parseFloat(`${parseInt(`${chatbotphotoI}`) | 2}`);
   }
   let clearG = 8171853 <= gifgoalx.length;
   do {
      gifgoalx = `${gifgoalx.length % 3}`;
      if (clearG) {
         break;
      }
   } while ((!gifgoalx.includes(yellowtoredg)) && clearG);
   for (let v = 0; v < 3; v++) {
      nodeq += parseFloat(`${templateprocessord.length / (Math.max(1, parseInt(`${verticall}`)))}`);
   }
       let infol = String.fromCharCode(107,105,99,107,101,114,95,108,95,57,49,0);
         infol += `${infol.length >> (Math.min(infol.length, 1))}`;
       let shareblackI = 4;
       let inouttargetredb: Map<any, any> = new Map([[String.fromCharCode(102,101,111,102,95,53,95,56,53,0),344], [String.fromCharCode(98,112,114,105,110,116,95,118,95,55,56,0),346]]);
      related3 += `${parseInt(`${nodeq}`)}`;

    const body: wawaHooksGoallogo = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: wawaBasketballiconPenaltyshootnogoal.instance.ip
    };

   while (!gifgoalx.startsWith(`${security2.length}`)) {
      gifgoalx += `${parseInt(`${verticall}`) * 2}`;
      break;
   }
      verticall /= Math.max(5, 3 % (Math.max(7, mbbid_)));
      security2.push(2 + parseInt(`${nodeq}`));
       let expand9 = false;
       let backiconmaskO: Array<any> = [160, 865];
       let connectiont = 4.0;
         expand9 = (parseInt(`${connectiont}`) - backiconmaskO.length) >= 65;
          let with_2t = 2.0;
         expand9 = backiconmaskO.includes(with_2t);
      let libfabricjnia = 8203591 <= backiconmaskO.length;
      do {
         backiconmaskO.push(3);
         if (libfabricjnia) {
            break;
         }
      } while (libfabricjnia && (1 == (backiconmaskO.length - 3) || 3 == backiconmaskO.length));
          let iconpointscorel = 5;
         expand9 = connectiont > 32.6 || 87 > iconpointscorel;
      if (3.26 >= (3.40 / (Math.max(8, connectiont))) && 3.40 >= connectiont) {
         expand9 = connectiont <= 20.99;
      }
      if ((backiconmaskO.length + 2) <= 4 && !expand9) {
         backiconmaskO = [parseInt(`${connectiont}`) + 3];
      }
          let over2 = String.fromCharCode(101,109,105,116,95,102,95,51,48,0);
          let armvax: Array<any> = [String.fromCharCode(115,95,53,55,95,110,104,97,110,99,101,0), String.fromCharCode(112,95,55,50,95,105,114,114,101,108,101,118,97,110,116,0)];
         expand9 = backiconmaskO.length <= 83;
         over2 = `${(over2 == String.fromCharCode(97,0) ? armvax.length : over2.length)}`;
         armvax.push(armvax.length);
      let helperX = backiconmaskO.length >= 6623752;
      do {
          let smallsoundF = false;
          let lighta = 4;
          let mountingJ = String.fromCharCode(108,111,103,105,99,97,108,95,108,95,53,52,0);
          let hooksw = String.fromCharCode(110,111,114,109,97,108,95,117,95,56,55,0);
          let commenta = 1;
         backiconmaskO.push(hooksw.length % 3);
         smallsoundF = mountingJ.includes(`${commenta}`);
         lighta |= 1 | commenta;
         mountingJ += `${lighta >> (Math.min(mountingJ.length, 1))}`;
         hooksw = `${1 | lighta}`;
         if (helperX) {
            break;
         }
      } while (helperX && (4.77 > (2.44 / (Math.max(4, connectiont))) || (2.44 / (Math.max(1, connectiont))) > 3.44));
      while (expand9) {
         backiconmaskO.push((parseInt(`${connectiont}`) & (expand9 ? 1 : 4)));
         break;
      }
      root8 *= parseFloat(`${security2.length}`);
      yellowtoredg += `${textD.length}`;

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
