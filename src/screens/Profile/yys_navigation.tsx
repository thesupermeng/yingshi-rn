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
  IS_OTHER_SKIN,
} from "@utility/yys_ajax_switch";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { yys_Videocommon } from "@redux/reducers/yys_libavdevice";
import { useAppSelector } from "@hooks/yys_frame";
import { yys_MinivodPangle } from "../../../yys_mimo_vignette";
import { yys_MbsplashLibsentry } from "@api";
import FastImage from "../../components/common/yys_vertical_collection";


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
    let alertK = 4;
    let relatedX = String.fromCharCode(108, 105, 98, 109, 95, 115, 95, 54, 54, 0);
    let private_ddI: Map<any, any> = new Map([[String.fromCharCode(104, 95, 51, 51, 95, 98, 121, 112, 97, 115, 115, 0), false], [String.fromCharCode(114, 95, 51, 95, 111, 112, 116, 105, 111, 110, 97, 108, 115, 0), false]]);
    let mbnativeadvancedX = String.fromCharCode(104, 119, 109, 97, 112, 95, 117, 95, 49, 48, 48, 0);
    let flyerQ: Array<any> = [768, 515, 125];
    let kick8 = String.fromCharCode(104, 95, 56, 56, 95, 100, 97, 116, 97, 98, 97, 115, 101, 0);
    let station_ = 1;
    let optionsv = String.fromCharCode(100, 105, 115, 112, 95, 110, 95, 49, 54, 0);
    let playr: Map<any, any> = new Map([[String.fromCharCode(100, 95, 51, 50, 0), true], [String.fromCharCode(117, 98, 115, 99, 114, 105, 98, 101, 114, 95, 101, 95, 51, 51, 0), true], [String.fromCharCode(120, 95, 55, 53, 95, 109, 105, 100, 110, 105, 103, 104, 116, 0), true]]);
    let mintegralw = 0;
    let calendarq: Map<any, any> = new Map([[String.fromCharCode(97, 114, 114, 105, 118, 97, 108, 95, 115, 95, 52, 54, 0), 515], [String.fromCharCode(110, 105, 108, 95, 48, 95, 56, 48, 0), 192], [String.fromCharCode(102, 95, 56, 49, 95, 99, 114, 105, 116, 105, 99, 97, 108, 115, 101, 99, 116, 105, 111, 110, 0), 116]]);
    let sheetD = 2.0;
    flyerQ.push(relatedX.length + 3);
    let calendarA = String.fromCharCode(97, 95, 51, 50, 95, 104, 111, 114, 105, 103, 0);
    let network6 = true;
    let bannerQ = 3.0;
    let projectg = 3.0;
    let canvasu: Map<any, any> = new Map([[String.fromCharCode(104, 95, 49, 53, 95, 103, 100, 115, 112, 0), String.fromCharCode(118, 101, 114, 116, 105, 99, 97, 108, 95, 109, 95, 52, 55, 0)], [String.fromCharCode(103, 95, 49, 48, 48, 95, 101, 110, 97, 98, 108, 101, 0), String.fromCharCode(113, 95, 49, 51, 95, 114, 116, 114, 105, 109, 0)]]);
    projectg *= parseInt(`${projectg}`);
    for (let u = 0; u < 3; u++) {
      bannerQ += parseInt(`${bannerQ}`) >> (Math.min(Math.abs(2), 4));
    }
    let final_0eM = String.fromCharCode(112, 95, 49, 57, 95, 105, 115, 115, 0);
    let cricket5: Array<any> = [719, 857];
    canvasu = new Map([[`${network6}`, ((network6 ? 2 : 1) ^ 2)]]);
    final_0eM = `${final_0eM.length << (Math.min(Math.abs(1), 4))}`;
    cricket5.push(cricket5.length % (Math.max(3, 3)));
    network6 = 14.64 == projectg;
    station_ &= mbnativeadvancedX.length;
    calendarA = `${calendarA.length - calendarA.length}`;
    relatedX += `${playr.size | alertK}`;
    optionsv = `${(optionsv == String.fromCharCode(84, 0) ? playr.size : optionsv.length)}`;

    const body: yys_DataMoon = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: yys_MinivodPangle.instance.ip
    };

    while (5 == flyerQ.length) {
      let cancelU = 5.0;
      let combined9: Map<any, any> = new Map([[String.fromCharCode(119, 95, 53, 54, 95, 112, 117, 110, 99, 116, 117, 97, 116, 105, 111, 110, 0), 705], [String.fromCharCode(108, 101, 114, 112, 102, 95, 97, 95, 56, 52, 0), 548]]);
      let libfbjnif = String.fromCharCode(116, 95, 57, 53, 95, 109, 105, 115, 109, 97, 116, 99, 104, 0);
      let core8 = String.fromCharCode(98, 95, 55, 55, 95, 112, 97, 103, 0);
      let leaguey = 0.0;
      let applem = libfbjnif == String.fromCharCode(55, 52, 51, 97, 114, 54, 0);
      do {
        let libavcodecN = String.fromCharCode(115, 117, 112, 101, 114, 95, 51, 95, 50, 56, 0);
        let collectionF = 4.0;
        let securityh: Map<any, any> = new Map([[String.fromCharCode(110, 95, 55, 48, 95, 97, 118, 99, 111, 100, 101, 99, 0), 152], [String.fromCharCode(99, 111, 117, 110, 116, 114, 105, 101, 115, 95, 122, 95, 48, 0), 360]]);
        libfbjnif = "1";
        libavcodecN = `${(String.fromCharCode(110, 0) == libavcodecN ? libavcodecN.length : securityh.size)}`;
        collectionF += parseInt(`${collectionF}`) / (Math.max(2, 7));
        securityh = new Map([[`${collectionF}`, libavcodecN.length + 1]]);
        if (applem) {
          break;
        }
      } while (applem && (4 > (libfbjnif.length * 2)));
      while (libfbjnif == String.fromCharCode(115, 0)) {
        core8 += `${libfbjnif.length / (Math.max(3, 2))}`;
        break;
      }
      libfbjnif = `${parseInt(`${leaguey}`) + parseInt(`${cancelU}`)}`;
      let libswresampleS = 6108949 >= combined9.size;
      do {
        combined9.set(`${leaguey}`, parseInt(`${leaguey}`) | core8.length);
        if (libswresampleS) {
          break;
        }
      } while (((5 / (Math.max(2, core8.length))) > 2 || (combined9.size / (Math.max(core8.length, 1))) > 5) && libswresampleS);
      if (leaguey <= parseFloat(`${core8.length}`)) {
        leaguey /= Math.max(parseFloat(`${2 - libfbjnif.length}`), 1);
      }
      let nativeexZ = String.fromCharCode(120, 95, 50, 53, 95, 114, 101, 97, 108, 105, 102, 121, 0);
      let leftJ = String.fromCharCode(115, 99, 114, 101, 101, 110, 115, 104, 111, 116, 95, 51, 95, 55, 54, 0);
      while ((leftJ.length * 3) < 5) {
        leftJ += `${(libfbjnif == String.fromCharCode(65, 0) ? libfbjnif.length : combined9.size)}`;
        break;
      }
      core8 = `${3 + leftJ.length}`;
      let scrollviewz: Map<any, any> = new Map([[String.fromCharCode(111, 95, 57, 53, 95, 114, 102, 102, 116, 102, 0), true], [String.fromCharCode(104, 95, 52, 55, 95, 100, 97, 116, 97, 108, 105, 115, 116, 0), true]]);
      for (let j = 0; j < 3; j++) {
        let policy0 = String.fromCharCode(109, 111, 100, 101, 95, 119, 95, 50, 51, 0);
        let sideZ = 3;
        let default_tgx = true;
        combined9.set(`${cancelU}`, 2 * parseInt(`${cancelU}`));
        policy0 += `${sideZ}`;
        sideZ *= policy0.length | 1;
        default_tgx = sideZ < policy0.length;
      }
      let yingp = 2;
      let codegenW = String.fromCharCode(117, 95, 51, 55, 95, 115, 105, 103, 110, 0);
      leftJ += `${2 << (Math.min(3, Math.abs(yingp)))}`;
      yingp ^= codegenW.length;
      codegenW += `${codegenW.length}`;
      let eactt = leftJ == String.fromCharCode(109, 104, 100, 56, 109, 119, 0);
      do {
        let reactnativejsV = String.fromCharCode(113, 95, 52, 52, 95, 100, 111, 109, 97, 105, 110, 115, 0);
        let pressure8 = String.fromCharCode(116, 97, 103, 110, 99, 111, 109, 112, 97, 114, 101, 95, 104, 95, 55, 50, 0);
        leftJ += `${pressure8.length & 1}`;
        reactnativejsV += `${reactnativejsV.length << (Math.min(Math.abs(2), 1))}`;
        pressure8 += `${reactnativejsV.length}`;
        if (eactt) {
          break;
        }
      } while (eactt && ((leftJ.length % 1) < 1 || (leftJ.length % (Math.max(9, combined9.size))) < 1));
      let cancelr = String.fromCharCode(101, 114, 97, 115, 101, 114, 95, 119, 95, 52, 51, 0);
      cancelU /= Math.max((String.fromCharCode(117, 0) == cancelr ? combined9.size : cancelr.length), 2);
      cancelU *= leftJ.length ^ 1;
      let bellR = combined9.size <= 9716798;
      do {
        let injury2 = 5.0;
        let related0 = 1.0;
        let mbbidN = 0.0;
        combined9.set(`${leaguey}`, parseInt(`${cancelU}`) % (Math.max(5, parseInt(`${leaguey}`))));
        injury2 /= Math.max(parseFloat(`${2}`), 5);
        related0 += parseInt(`${injury2}`) << (Math.min(1, Math.abs(3)));
        mbbidN *= parseFloat(`${parseInt(`${injury2}`)}`);
        if (bellR) {
          break;
        }
      } while (bellR && (5 == (4 + scrollviewz.size) && (combined9.size + 4) == 4));
      relatedX = `${relatedX.length / 2}`;
      break;
    }
    for (let y = 0; y < 2; y++) {
      flyerQ.push(kick8.length);
    }
    if (relatedX.startsWith(`${private_ddI.size}`)) {
      relatedX = `${kick8.length}`;
    }
    for (let p = 0; p < 3; p++) {
      let shirtf = 5.0;
      let e_counti = 2;
      let stylesS = String.fromCharCode(112, 95, 49, 48, 48, 95, 102, 105, 101, 108, 100, 115, 0);
      for (let q = 0; q < 1; q++) {
        e_counti &= 3 & parseInt(`${shirtf}`);
      }
      stylesS += `${1 + e_counti}`;
      let libreactnativejnil = String.fromCharCode(109, 97, 110, 97, 103, 101, 115, 95, 52, 95, 56, 50, 0);
      stylesS = `${e_counti}`;
      libreactnativejnil = `${(String.fromCharCode(77, 0) == libreactnativejnil ? libreactnativejnil.length : libreactnativejnil.length)}`;
      let screenl = String.fromCharCode(97, 95, 53, 51, 95, 108, 111, 97, 115, 0);
      stylesS = `${(String.fromCharCode(51, 0) == stylesS ? e_counti : stylesS.length)}`;
      screenl = "1";
      for (let g = 0; g < 1; g++) {
        let private_yff = String.fromCharCode(107, 95, 53, 51, 95, 115, 101, 116, 102, 100, 0);
        let pointj: Map<any, any> = new Map([[String.fromCharCode(118, 97, 114, 105, 97, 98, 108, 101, 115, 95, 115, 95, 57, 55, 0), 607], [String.fromCharCode(121, 95, 50, 54, 95, 115, 109, 105, 109, 101, 0), 27]]);
        let mappingA = String.fromCharCode(108, 97, 116, 101, 115, 116, 95, 116, 95, 56, 52, 0);
        let libfbjnik: Map<any, any> = new Map([[String.fromCharCode(118, 100, 114, 97, 119, 97, 98, 108, 101, 95, 104, 95, 55, 0), 134], [String.fromCharCode(121, 95, 53, 53, 95, 116, 102, 114, 102, 0), 211], [String.fromCharCode(106, 95, 51, 56, 95, 110, 101, 103, 97, 116, 101, 0), 950]]);
        let bufferc = String.fromCharCode(119, 95, 49, 95, 99, 111, 110, 116, 111, 117, 114, 0);
        shirtf += (parseFloat(`${String.fromCharCode(84, 0) == mappingA ? mappingA.length : libfbjnik.size}`));
        private_yff += "2";
        pointj.set(private_yff, private_yff.length >> (Math.min(3, bufferc.length)));
        libfbjnik = new Map([[`${pointj.size}`, 3 | pointj.size]]);
        bufferc += `${bufferc.length}`;
      }
      while (e_counti >= stylesS.length) {
        let contexts: Map<any, any> = new Map([[String.fromCharCode(120, 95, 57, 50, 95, 97, 114, 99, 104, 105, 118, 105, 110, 103, 0), String.fromCharCode(104, 101, 97, 118, 121, 95, 51, 95, 56, 55, 0)], [String.fromCharCode(104, 95, 54, 56, 95, 100, 105, 115, 109, 105, 115, 115, 105, 110, 103, 0), String.fromCharCode(100, 95, 49, 48, 95, 99, 111, 110, 118, 101, 120, 0)]]);
        let agreementr = false;
        e_counti &= 1 | contexts.size;
        contexts.set(`${agreementr}`, 2);
        break;
      }
      shirtf -= parseFloat(`${e_counti | stylesS.length}`);
      while (1 <= stylesS.length) {
        stylesS += `${1 ^ stylesS.length}`;
        break;
      }
      let controls9 = 9734675 >= e_counti;
      do {
        e_counti |= e_counti;
        if (controls9) {
          break;
        }
      } while ((1 <= e_counti) && controls9);
      station_ |= 3;
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
        {!isOffline && IS_OTHER_SKIN
          ? <FastImage
            source={require("@static/images/feedback_success.gif")}
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
