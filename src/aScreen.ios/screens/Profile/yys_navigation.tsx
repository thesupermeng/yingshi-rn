import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import ScreenContainer from "../../components/container/yys_executor_expand";
import { RootStackScreenProps } from "@type/yys_settings";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import TitleWithBackButtonHeader from "../../components/header/yys_anner_header";
import { Button, Dialog } from "@rneui/themed";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import FeedbackSuccessIcon from "@static/images/leftLangArrow.svg";
import axios from "axios";
import { yys_DataMoon } from "@type/yys_libzeus";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
  UMENG_CHANNEL,
  YING_SHI_PRODUCT_IOS,
  YING_SHI_PRODUCT_ANDROID,
} from "@utility/yys_ajax_switch";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { yys_Videocommon } from "@redux/reducers/yys_libavdevice";
import { useAppSelector } from "@hooks/yys_frame";
import { yys_MinivodPangle } from "../../../../yys_mimo_vignette";
import { yys_MbsplashLibsentry } from "@api";

export default ({ navigation }: RootStackScreenProps<"反馈">) => {
  const { colors, textVariants, icons } = useTheme();
  const [text, setTextInput] = React.useState("");
  const [feedbackCategory, setFeedbackCategory] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [dialogText, setDialogText] = React.useState("反馈成功，我们会在 24 小时内处理你的反馈！");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const [platformId, setPlatformId] = React.useState(0);

  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: yys_Videocommon = useAppSelector(
    ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
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

  const submitFeedback = async (data: yys_DataMoon) => {
    if (!isOffline) {
      const result = yys_MbsplashLibsentry.postFeedback(data);

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
       let backgroundO: Array<any> = [324, 412];
    let popupe = 3;
    let memberq = 0.0;
    let eventR = String.fromCharCode(117,95,54,56,95,115,99,105,105,0);
    let actionr = String.fromCharCode(103,95,51,54,95,114,101,103,105,115,116,114,121,0);
    let saveF = 2.0;
    let inactiveu: Map<any, any> = new Map([[String.fromCharCode(107,95,50,48,95,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0),false ], [String.fromCharCode(114,95,55,52,95,109,118,112,114,101,100,0),true ], [String.fromCharCode(118,100,101,99,95,117,95,57,53,0),true ]]);
    let sendl = String.fromCharCode(97,118,102,114,97,109,101,95,48,95,51,55,0);
    let cornerJ = 2;
    let promotiona: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,95,120,95,49,50,0),652], [String.fromCharCode(107,102,109,111,100,101,115,95,50,95,49,57,0),156], [String.fromCharCode(104,95,53,49,95,99,111,111,114,100,115,0),95]]);
   let fullz = memberq <= 5552739.0;
   do {
       let borderless4 = String.fromCharCode(118,95,57,56,95,110,98,105,111,0);
          let libswscaleq = 2.0;
         borderless4 += `${parseInt(`${libswscaleq}`)}`;
         borderless4 = `${2 << (Math.min(5, borderless4.length))}`;
       let l_lockU = 4.0;
       let apps2 = 0.0;
      memberq *= (actionr == String.fromCharCode(57,0) ? backgroundO.length : actionr.length);
      if (fullz) {
         break;
      }
   } while (fullz && ((popupe ^ 1) == 4));
      backgroundO = [3];
      popupe += backgroundO.length / (Math.max(sendl.length, 6));
      memberq -= inactiveu.size;
   while (memberq == saveF) {
      saveF -= parseInt(`${saveF}`);
      break;
   }

    const body: yys_DataMoon = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: yys_MinivodPangle.instance.ip
    };

       let historyi = 4.0;
       let libfolly9 = 1.0;
       let vignettey = 1.0;
         libfolly9 -= parseFloat(`${parseInt(`${vignettey}`) + parseInt(`${libfolly9}`)}`);
      if ((libfolly9 * historyi) <= 2.1) {
          let androidJ = String.fromCharCode(99,111,110,99,101,97,108,95,121,95,57,55,0);
          let moduleu = 0.0;
          let mbbidX = String.fromCharCode(99,111,100,105,110,103,116,121,112,101,95,102,95,49,51,0);
          let cricketo = 2.0;
          let side9 = String.fromCharCode(104,97,115,104,101,114,95,107,95,55,52,0);
         historyi /= Math.max(parseFloat(`${parseInt(`${vignettey}`) - 2}`), 1);
         androidJ = `${parseInt(`${cricketo}`) * side9.length}`;
         moduleu *= 2;
         mbbidX = "3";
         cricketo -= parseInt(`${cricketo}`) >> (Math.min(Math.abs(1), 3));
         side9 += `${androidJ.length & 3}`;
      }
         historyi *= parseFloat(`${parseInt(`${libfolly9}`) << (Math.min(2, Math.abs(1)))}`);
         vignettey -= parseFloat(`${parseInt(`${libfolly9}`) << (Math.min(Math.abs(parseInt(`${historyi}`)), 1))}`);
      let showY = historyi >= 7133509.0;
      do {
         historyi /= Math.max(parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${vignettey}`)), 5))}`), 3);
         if (showY) {
            break;
         }
      } while (((historyi + libfolly9) > 1.49) && showY);
      let backU = vignettey <= 8439557.0;
      do {
         vignettey *= parseFloat(`${parseInt(`${libfolly9}`)}`);
         if (backU) {
            break;
         }
      } while ((libfolly9 >= 3.87) && backU);
         libfolly9 -= parseFloat(`${3}`);
         vignettey *= parseFloat(`${3 + parseInt(`${libfolly9}`)}`);
      while (5.50 >= libfolly9) {
         libfolly9 += parseFloat(`${parseInt(`${vignettey}`)}`);
         break;
      }
      popupe += 1;
      eventR = `${actionr.length}`;
   while (memberq <= 1.59) {
       let ball9 = String.fromCharCode(103,95,54,49,95,115,101,112,97,114,97,116,101,0);
       let nativemoduleL = String.fromCharCode(97,116,114,97,99,95,114,95,50,52,0);
       let linkZ = true;
         ball9 = `${(3 ^ (linkZ ? 1 : 5))}`;
         linkZ = linkZ || ball9.length <= 30;
         nativemoduleL = `${nativemoduleL.length >> (Math.min(3, ball9.length))}`;
          let smallU = 5.0;
          let dycreatora = String.fromCharCode(115,116,114,111,107,101,100,95,55,95,57,50,0);
          let binddatas5 = String.fromCharCode(113,95,49,57,95,98,105,108,105,110,101,97,114,0);
         ball9 += `${(String.fromCharCode(51,0) == dycreatora ? (linkZ ? 3 : 2) : dycreatora.length)}`;
         smallU -= parseInt(`${smallU}`) / (Math.max(binddatas5.length, 8));
         binddatas5 = `${binddatas5.length}`;
      while (ball9 == nativemoduleL) {
         nativemoduleL = `${(ball9.length << (Math.min(1, Math.abs((linkZ ? 1 : 4)))))}`;
         break;
      }
          let overT = 4.0;
          let dplusR = false;
         nativemoduleL += `${ball9.length}`;
         overT *= ((dplusR ? 4 : 1) + parseInt(`${overT}`));
         dplusR = 20.41 < overT;
          let stark: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,95,100,95,54,52,0),String.fromCharCode(99,95,51,48,95,100,101,99,111,114,114,101,108,97,116,105,111,110,0)], [String.fromCharCode(117,95,54,54,0),String.fromCharCode(116,101,109,112,108,97,116,101,95,99,95,56,52,0)], [String.fromCharCode(99,111,109,112,111,110,101,110,116,115,95,118,95,51,55,0),String.fromCharCode(118,95,53,49,95,122,105,109,103,0)]]);
          let colors7 = String.fromCharCode(110,95,52,49,95,116,101,115,116,101,114,0);
          let unreadC = 2.0;
         linkZ = (unreadC + colors7.length) < 86.18;
         stark = new Map([[`${stark.size}`, stark.size % 3]]);
         colors7 += `${stark.size}`;
      let roomR = nativemoduleL.length <= 5896308;
      do {
         nativemoduleL += `${ball9.length + 1}`;
         if (roomR) {
            break;
         }
      } while (roomR && (nativemoduleL.length > 4));
      let libjsih = linkZ ? !linkZ : linkZ;
      do {
          let libloggerZ = true;
          let chinasameS: Array<any> = [921, 164];
          let nextL = String.fromCharCode(116,95,49,53,95,103,101,116,116,105,110,103,0);
          let debugl = String.fromCharCode(113,95,56,95,115,105,100,101,0);
         linkZ = chinasameS.length <= 75 && nativemoduleL == String.fromCharCode(66,0);
         libloggerZ = nextL.length < 71 && libloggerZ;
         chinasameS = [nextL.length << (Math.min(Math.abs(2), 5))];
         debugl += `${2 >> (Math.min(1, nextL.length))}`;
         if (libjsih) {
            break;
         }
      } while ((linkZ) && libjsih);
      memberq *= parseInt(`${memberq}`);
      break;
   }
      actionr += `${eventR.length << (Math.min(Math.abs(2), 1))}`;
   if ((popupe - promotiona.size) <= 5 && 1 <= (5 - promotiona.size)) {
      popupe >>= Math.min(Math.abs(backgroundO.length + cornerJ), 1);
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
        {!isOffline && <FeedbackSuccessIcon />}

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
