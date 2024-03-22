import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import ScreenContainer from "../../components/container/ypy_fast";
import { RootStackScreenProps } from "@type/vrm_thailand";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { PSmall } from "@redux/fj_prediction_thailand";
import TitleWithBackButtonHeader from "../../components/header/cio_news_types_header";
import { Button, Dialog } from "@rneui/themed";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import FeedbackSuccessIcon from "@static/images/pointHalfLight.svg";
import axios from "axios";
import { RECombinedPosition } from "@type/wpk_long";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
  UMENG_CHANNEL,
  YING_SHI_PRODUCT_IOS,
  YING_SHI_PRODUCT_ANDROID,
  IS_OTHER_SKIN,
} from "@utility/n_subs_interstitial";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { GBYMiniCanvas } from "@redux/reducers/t_types";
import { useAppSelector } from "@hooks/kg_index";
import { KLongNext } from "../../../z_search";
import { CBenefitCircle } from "@api";
import FastImage from "../../components/common/gwi_with";

export default ({ navigation }: RootStackScreenProps<"反馈">) => {
  const { colors, textVariants, icons, dark } = useTheme();
  const [text, setTextInput] = React.useState("");
  const [feedbackCategory, setFeedbackCategory] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [dialogText, setDialogText] = React.useState("反馈成功，我们会在 24 小时内处理你的反馈！");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const [platformId, setPlatformId] = React.useState(0);

  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
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

  const submitFeedback = async (data: RECombinedPosition) => {
    if (!isOffline) {
      const result = CBenefitCircle.postFeedback(data);

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
       let rules8 = String.fromCharCode(99,97,114,114,105,101,114,95,118,95,50,49,0);
    let description_pi = 0;
    let kickM: Array<any> = [549, 36, 232];
    let username4 = 1;
    let i_positionF = true;
    let carouselO = String.fromCharCode(118,95,55,57,95,117,110,109,117,116,101,0);
    let connectionM = true;
    let settingk = String.fromCharCode(115,111,102,114,101,101,95,110,95,51,51,0);
    let themeb = 0.0;
    let descI = 5.0;
    let s_countS: Array<any> = [705, 255];
    let internetM = false;
      username4 /= Math.max((settingk == String.fromCharCode(110,0) ? rules8.length : settingk.length), 3);
   let time_mw = rules8.length <= 7594116;
   do {
      rules8 += "1";
      if (time_mw) {
         break;
      }
   } while ((5 <= description_pi) && time_mw);
      i_positionF = 70 <= rules8.length || settingk.length <= 70;
       let temperature2: Map<any, any> = new Map([[String.fromCharCode(97,99,108,114,95,54,95,52,56,0),591], [String.fromCharCode(102,108,97,116,110,101,115,115,95,100,95,55,50,0),958], [String.fromCharCode(98,117,116,111,110,95,107,95,57,55,0),704]]);
       let dcopy_8iJ = String.fromCharCode(113,95,49,50,95,115,112,105,108,108,115,105,122,101,0);
      if ((temperature2.size << (Math.min(Math.abs(1), 1))) <= 1 && 2 <= (1 << (Math.min(1, dcopy_8iJ.length)))) {
         temperature2 = new Map([[`${temperature2.size}`, dcopy_8iJ.length + temperature2.size]]);
      }
      while (2 > (dcopy_8iJ.length / 4)) {
         dcopy_8iJ += `${temperature2.size & 2}`;
         break;
      }
         temperature2.set(`${dcopy_8iJ}`, dcopy_8iJ.length * 1);
         temperature2 = new Map([[`${temperature2.size}`, 1]]);
         dcopy_8iJ = `${temperature2.size}`;
      let filterj = temperature2.size >= 6352032;
      do {
         temperature2 = new Map([[`${temperature2.size}`, temperature2.size]]);
         if (filterj) {
            break;
         }
      } while (filterj && (4 == (temperature2.size / (Math.max(3, 2)))));
      i_positionF = temperature2.size < parseInt(`${themeb}`);

    const body: RECombinedPosition = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: KLongNext.instance.ip
    };

      i_positionF = username4 < 66 || settingk == String.fromCharCode(69,0);
   if (kickM.length == rules8.length) {
      rules8 = `${kickM.length / (Math.max(carouselO.length, 7))}`;
   }
   while (descI < 3.0) {
       let checkboxW = 3.0;
       let slider4: Map<any, any> = new Map([[String.fromCharCode(121,95,54,51,95,116,101,99,104,110,111,108,111,103,121,0),115], [String.fromCharCode(99,95,50,55,95,111,116,105,102,105,99,97,116,105,111,110,0),596]]);
       let vietnamm: Array<any> = [990, 149, 815];
         checkboxW *= 1;
      let xvodi = 6583714 <= vietnamm.length;
      do {
         vietnamm = [2 + parseInt(`${checkboxW}`)];
         if (xvodi) {
            break;
         }
      } while ((2 >= (5 >> (Math.min(3, Math.abs(slider4.size)))) && (5 >> (Math.min(5, Math.abs(slider4.size)))) >= 2) && xvodi);
      for (let u = 0; u < 1; u++) {
         slider4 = new Map([[`${slider4.size}`, parseInt(`${checkboxW}`) | 2]]);
      }
         slider4.set(`${checkboxW}`, vietnamm.length);
      while (Array.from(slider4.values()).includes(checkboxW)) {
         slider4.set(`${checkboxW}`, parseInt(`${checkboxW}`) | slider4.size);
         break;
      }
      for (let w = 0; w < 3; w++) {
          let dragD: Map<any, any> = new Map([[String.fromCharCode(119,95,54,55,95,114,101,115,117,108,117,116,105,111,110,0),860], [String.fromCharCode(118,95,56,95,115,101,103,109,101,110,116,117,114,108,110,111,100,101,0),297]]);
          let floaterK = String.fromCharCode(103,114,97,110,117,108,97,114,105,116,121,95,112,95,51,53,0);
          let download2: Map<any, any> = new Map([[String.fromCharCode(107,95,55,52,95,99,114,108,102,0),false ], [String.fromCharCode(100,105,97,108,105,110,103,95,104,95,56,55,0),true ], [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,100,95,52,95,53,56,0),false ]]);
          let reducerh = false;
          let bingQ: Array<any> = [52, 674];
         vietnamm.push(1 * parseInt(`${checkboxW}`));
         dragD.set(`${download2.size}`, dragD.size);
         floaterK += `${download2.size}`;
         reducerh = bingQ.length == 52 || 52 == download2.size;
         bingQ.push((floaterK == String.fromCharCode(81,0) ? download2.size : floaterK.length));
      }
      while (Array.from(slider4.values()).includes(checkboxW)) {
         slider4 = new Map([[`${slider4.size}`, vietnamm.length]]);
         break;
      }
       let fastP = String.fromCharCode(115,101,110,100,95,115,95,57,56,0);
       let detailsO = 1.0;
       let casta = 0.0;
      descI += parseFloat(`${username4}`);
      break;
   }
   let calendarR = username4 <= 7801996;
   do {
      username4 += kickM.length;
      if (calendarR) {
         break;
      }
   } while (calendarR && ((username4 | 1) <= 3));

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
            source={require("@static/images/pointHalfLight.gif")}
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
