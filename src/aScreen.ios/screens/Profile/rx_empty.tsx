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
import { KLongNext } from "../../../../z_search";
import { CBenefitCircle } from "@api";
import FastImage from "../../components/common/gwi_with";

export default ({ navigation }: RootStackScreenProps<"反馈">) => {
  const { colors, textVariants, icons } = useTheme();
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
       let baiduu = 5;
    let popupM: Map<any, any> = new Map([[String.fromCharCode(114,95,49,53,95,99,109,112,97,100,100,114,0),true ], [String.fromCharCode(99,95,52,95,101,114,114,108,111,103,0),true ]]);
    let singlez = String.fromCharCode(121,95,57,53,95,117,116,116,111,110,0);
    let formS = true;
    let sendL = String.fromCharCode(115,101,108,95,53,95,54,50,0);
    let searchV: Array<any> = [421, 444];
    let bodanT = String.fromCharCode(114,101,115,99,104,101,100,117,108,101,95,55,95,51,48,0);
    let gesturesD: Map<any, any> = new Map([[String.fromCharCode(115,114,116,112,95,105,95,56,52,0),String.fromCharCode(104,111,115,116,110,97,109,101,95,103,95,57,56,0)], [String.fromCharCode(118,95,54,50,95,115,116,114,105,114,101,112,108,97,99,101,0),String.fromCharCode(111,95,53,52,95,112,115,104,0)], [String.fromCharCode(98,95,51,53,95,108,105,98,97,111,109,0),String.fromCharCode(108,108,118,105,100,100,115,112,101,110,99,95,109,95,51,50,0)]]);
    let shrinkS = 3.0;
    let downloaderB = 2;
    let stationo = 1.0;
       let station9 = String.fromCharCode(105,110,118,105,116,101,114,95,99,95,57,51,0);
       let sellf = 5.0;
       let ewardedq: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,97,99,116,115,95,112,95,54,53,0),220], [String.fromCharCode(115,95,49,52,95,105,110,99,114,0),813]]);
         ewardedq = new Map([[`${ewardedq.size}`, parseInt(`${sellf}`) - 3]]);
      while (Array.from(ewardedq.keys()).includes(`${sellf}`)) {
         ewardedq = new Map([[`${ewardedq.size}`, ewardedq.size]]);
         break;
      }
      if (!station9.endsWith(`${sellf}`)) {
         sellf += 3 & parseInt(`${sellf}`);
      }
         station9 = `${parseInt(`${sellf}`) | 2}`;
         sellf *= station9.length;
      while (4.68 >= (sellf / (Math.max(station9.length, 5))) && 5.26 >= (sellf / 4.68)) {
          let bingI = String.fromCharCode(97,99,99,101,115,115,111,114,115,95,119,95,52,50,0);
          let entryU = String.fromCharCode(116,101,109,112,111,114,97,114,121,95,108,95,51,57,0);
          let types_ = 0.0;
         station9 += `${entryU.length}`;
         bingI = `${bingI.length}`;
         entryU += `${parseInt(`${types_}`)}`;
         types_ /= Math.max(3, 1);
         break;
      }
      let telegramH = 6161192 <= ewardedq.size;
      do {
         ewardedq = new Map([[`${ewardedq.size}`, 3]]);
         if (telegramH) {
            break;
         }
      } while (telegramH && ((station9.length ^ ewardedq.size) == 4));
      while (3.69 < (4.47 + sellf)) {
          let telegramE: Array<any> = [738, 950, 173];
          let ajaxl = 2;
         station9 = `${telegramE.length}`;
         telegramE.push(3);
         ajaxl /= Math.max(5, ajaxl & 2);
         break;
      }
      if (Array.from(ewardedq.values()).includes(sellf)) {
         ewardedq = new Map([[`${ewardedq.size}`, parseInt(`${sellf}`) * 3]]);
      }
      formS = (parseInt(`${shrinkS}`) * searchV.length) < 47;
   let pauses = 5129884.0 >= shrinkS;
   do {
      shrinkS -= popupM.size / 2;
      if (pauses) {
         break;
      }
   } while (pauses && (!formS && (shrinkS / 4.6) > 2.94));
       let linkL = 0;
       let detailk = String.fromCharCode(114,95,54,49,95,100,105,115,109,105,115,115,105,110,103,0);
         detailk = `${linkL}`;
         detailk += `${detailk.length * 3}`;
         linkL ^= 1 * linkL;
         linkL ^= detailk.length << (Math.min(2, Math.abs(linkL)));
      if (4 >= (linkL ^ 5) || 2 >= (5 ^ detailk.length)) {
          let langkey2 = false;
          let videoM = String.fromCharCode(99,111,109,101,95,106,95,52,53,0);
          let usernamez = String.fromCharCode(101,95,49,50,95,100,105,97,108,108,101,100,0);
         detailk = `${(videoM.length << (Math.min(1, Math.abs((langkey2 ? 5 : 2)))))}`;
         langkey2 = 80 <= usernamez.length || usernamez == String.fromCharCode(80,0);
         videoM = "2";
      }
         detailk += `${detailk.length >> (Math.min(5, Math.abs(linkL)))}`;
      popupM.set(`${shrinkS}`, (parseInt(`${shrinkS}`) * (formS ? 1 : 4)));
      formS = 39.6 < stationo;
      shrinkS -= (sendL == String.fromCharCode(85,0) ? baiduu : sendL.length);

    const body: RECombinedPosition = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: KLongNext.instance.ip
    };

   while (5 < bodanT.length) {
      stationo -= popupM.size;
      break;
   }
      formS = 9 > baiduu;
      searchV.push((singlez == String.fromCharCode(84,0) ? singlez.length : parseInt(`${stationo}`)));
      stationo += searchV.length | 1;
       let carouseln = 5.0;
      if (2.28 < (2 + carouseln)) {
          let rewindD = String.fromCharCode(106,95,56,50,95,99,104,101,99,107,115,0);
          let customZ = String.fromCharCode(99,114,108,115,95,102,95,53,55,0);
         carouseln -= (String.fromCharCode(105,0) == rewindD ? rewindD.length : customZ.length);
      }
      while (carouseln < carouseln) {
         carouseln -= parseInt(`${carouseln}`);
         break;
      }
      let const_ksM = carouseln <= 5440028.0;
      do {
         carouseln /= Math.max(parseInt(`${carouseln}`), 1);
         if (const_ksM) {
            break;
         }
      } while (const_ksM && ((carouseln * carouseln) < 5.88 || (carouseln * 5.88) < 1.34));
      baiduu |= parseInt(`${stationo}`) + 2;

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
