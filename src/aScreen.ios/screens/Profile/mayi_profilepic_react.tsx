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
import { mayi_Librrc } from "../../../../mayi_gift";
import { mayi_CondensedAgreement } from "@api";
import FastImage from "../../components/common/mayi_slider";

export default ({ navigation }: RootStackScreenProps<"反馈">) => {
  const { colors, textVariants, icons } = useTheme();
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
       let footballfieldZ = String.fromCharCode(99,117,114,118,101,0);
    let regengZ = true;
    let taiwanR: Array<any> = [82, 13];
    let nativeex8 = 1;
    let encrypth = String.fromCharCode(115,117,98,116,114,101,101,115,0);
    let confirmationJ: Map<any, any> = new Map([[String.fromCharCode(109,101,109,111,114,121,115,116,114,101,97,109,0),726], [String.fromCharCode(116,121,112,101,110,97,109,101,0),712], [String.fromCharCode(118,105,103,110,101,116,116,105,110,103,0),196]]);
    let iconnewssharee: Map<any, any> = new Map([[String.fromCharCode(112,105,110,115,0),String.fromCharCode(112,112,107,104,0)], [String.fromCharCode(114,111,117,110,100,100,115,0),String.fromCharCode(105,110,116,101,114,97,116,105,111,110,0)], [String.fromCharCode(114,101,102,112,116,114,0),String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,115,0)]]);
    let h_player4: Array<any> = [String.fromCharCode(101,120,112,108,111,114,101,114,0), String.fromCharCode(99,111,114,111,117,116,105,110,101,0)];
    let spinnerd = String.fromCharCode(114,101,112,111,114,116,101,100,0);
    let dycreatorJ: Array<any> = [746, 645];
   for (let i = 0; i < 1; i++) {
       let cancelL = String.fromCharCode(119,97,116,101,114,0);
       let chartX = true;
       let emojiY = 0.0;
       let moreY = 1.0;
         cancelL = `${parseInt(`${moreY}`) & 3}`;
         emojiY *= parseFloat(`${2 / (Math.max(4, parseInt(`${moreY}`)))}`);
          let views8: Array<any> = [837, 879];
          let datac = 5;
          let orangeu = 1;
         chartX = emojiY < moreY;
         views8 = [views8.length ^ 2];
         datac &= orangeu;
         orangeu ^= datac;
         cancelL = "1";
          let nendq: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,97,116,101,0),true ], [String.fromCharCode(107,97,110,110,97,0),false ], [String.fromCharCode(109,109,99,111,115,0),false ]]);
          let neonv = 0.0;
          let referrert = String.fromCharCode(98,117,109,112,0);
         cancelL = `${cancelL.length - parseInt(`${emojiY}`)}`;
         nendq.set(`${neonv}`, parseInt(`${neonv}`));
         referrert += `${3 + nendq.size}`;
      let profileactivej = emojiY >= 7370072.0;
      do {
         emojiY += parseFloat(`${parseInt(`${moreY}`) | parseInt(`${emojiY}`)}`);
         if (profileactivej) {
            break;
         }
      } while (profileactivej && (5.39 == emojiY));
       let streaming7 = 0;
      let pointm = 9747626 <= streaming7;
      do {
         streaming7 ^= 1;
         if (pointm) {
            break;
         }
      } while ((3.50 < (moreY * 1.33) || (5 % (Math.max(8, streaming7))) < 3) && pointm);
          let foregroundT: Map<any, any> = new Map([[String.fromCharCode(101,100,103,101,0),969], [String.fromCharCode(100,101,99,114,101,97,115,105,110,103,0),982]]);
          let bootsplashU: Map<any, any> = new Map([[String.fromCharCode(100,111,115,100,97,116,101,0),false ], [String.fromCharCode(114,112,99,103,101,110,0),false ], [String.fromCharCode(119,100,108,116,0),true ]]);
          let frame_db = String.fromCharCode(99,104,114,111,109,97,104,111,108,100,0);
         emojiY *= parseFloat(`${streaming7 % (Math.max(3, 4))}`);
         foregroundT = new Map([[`${foregroundT.size}`, foregroundT.size]]);
         bootsplashU = new Map([[`${foregroundT.size}`, bootsplashU.size]]);
         frame_db += `${bootsplashU.size >> (Math.min(frame_db.length, 2))}`;
         emojiY *= parseFloat(`${3}`);
       let stringL = 4.0;
      let basketball0 = 8509603.0 >= emojiY;
      do {
         emojiY += parseFloat(`${parseInt(`${moreY}`) - 1}`);
         if (basketball0) {
            break;
         }
      } while (basketball0 && ((2.3 * emojiY) == 2.47 || chartX));
      h_player4 = [3 & cancelL.length];
   }
      iconnewssharee = new Map([[`${regengZ}`, 1 * nativeex8]]);
      regengZ = iconnewssharee.size < 68;
   for (let y = 0; y < 1; y++) {
      encrypth = `${iconnewssharee.size}`;
   }

    const body: mayi_ActivityIconarrowleft = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: mayi_Librrc.instance.ip
    };

   let pathN = 7360698 <= confirmationJ.size;
   do {
      confirmationJ.set(`${h_player4.length}`, h_player4.length | 3);
      if (pathN) {
         break;
      }
   } while (pathN && (encrypth.startsWith(`${confirmationJ.size}`)));
      regengZ = taiwanR.includes(regengZ);
   let coreF = 7718075 <= nativeex8;
   do {
       let icontransfercluba = String.fromCharCode(116,111,117,99,104,0);
          let libswresamplew = 5.0;
          let k_unlocka: Array<any> = [84, 36, 564];
          let logouserf: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,118,101,114,97,98,108,101,0),34], [String.fromCharCode(119,105,100,116,104,0),310]]);
         icontransfercluba = `${k_unlocka.length}`;
         libswresamplew /= Math.max(1, 2 ^ parseInt(`${libswresamplew}`));
         k_unlocka = [2 ^ parseInt(`${libswresamplew}`)];
         logouserf = new Map([[`${logouserf.size}`, logouserf.size]]);
      while (icontransfercluba.startsWith(`${icontransfercluba.length}`)) {
         icontransfercluba = "2";
         break;
      }
      if (icontransfercluba.length > icontransfercluba.length) {
         icontransfercluba += `${icontransfercluba.length << (Math.min(Math.abs(3), 3))}`;
      }
      nativeex8 <<= Math.min(footballfieldZ.length, 2);
      if (coreF) {
         break;
      }
   } while (coreF && (4 <= (nativeex8 | 1) && (nativeex8 | encrypth.length) <= 1));
   if (footballfieldZ.length < confirmationJ.size) {
       let skip5: Map<any, any> = new Map([[String.fromCharCode(99,104,117,110,107,0),false ], [String.fromCharCode(97,119,97,105,116,105,110,103,0),true ], [String.fromCharCode(112,110,103,100,115,112,0),true ]]);
       let tooltipsd = String.fromCharCode(108,108,118,105,100,100,115,112,101,110,99,0);
       let vietnamQ = String.fromCharCode(108,105,115,116,101,110,105,110,103,0);
       let reactnavigationv = String.fromCharCode(103,101,115,116,117,114,101,115,0);
      for (let g = 0; g < 3; g++) {
         vietnamQ += `${tooltipsd.length}`;
      }
      for (let y = 0; y < 3; y++) {
         reactnavigationv = "1";
      }
      let playZ = 6733420 >= tooltipsd.length;
      do {
         tooltipsd = `${3 ^ skip5.size}`;
         if (playZ) {
            break;
         }
      } while (playZ && (vietnamQ == tooltipsd));
       let tailZ = String.fromCharCode(117,116,99,0);
       let bingL = String.fromCharCode(98,97,114,114,97,121,0);
          let sinag = true;
         reactnavigationv = `${tooltipsd.length >> (Math.min(3, vietnamQ.length))}`;
         sinag = !sinag;
      if (reactnavigationv != tailZ) {
         tailZ = `${reactnavigationv.length >> (Math.min(Math.abs(1), 4))}`;
      }
      let gmail2 = String.fromCharCode(106,109,101,117,97,101,101,0) == tailZ;
      do {
         tailZ = `${skip5.size}`;
         if (gmail2) {
            break;
         }
      } while ((reactnavigationv == tailZ) && gmail2);
          let chartk = String.fromCharCode(98,108,111,99,107,101,114,0);
         tooltipsd += `${reactnavigationv.length | 3}`;
         chartk += `${(String.fromCharCode(67,0) == chartk ? chartk.length : chartk.length)}`;
         skip5.set(`${reactnavigationv}`, 3);
      while (bingL.length >= reactnavigationv.length) {
         reactnavigationv = "1";
         break;
      }
      let issubF = bingL == String.fromCharCode(48,120,53,113,106,98,53,117,0);
      do {
         bingL += `${reactnavigationv.length + 3}`;
         if (issubF) {
            break;
         }
      } while (issubF && (2 > bingL.length || tailZ == String.fromCharCode(98,0)));
      if ((skip5.size + 4) == 1 && 4 == (skip5.size + vietnamQ.length)) {
         skip5 = new Map([[vietnamQ, vietnamQ.length & tailZ.length]]);
      }
      footballfieldZ = `${nativeex8}`;
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
