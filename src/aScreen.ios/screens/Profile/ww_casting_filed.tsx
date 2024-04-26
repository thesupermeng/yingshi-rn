import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import ScreenContainer from "../../components/container/ww_collection";
import { RootStackScreenProps } from "@type/ww_tempnodatagif_description";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { wwEighteenShirt } from "@redux/ww_small";
import TitleWithBackButtonHeader from "../../components/header/ww_react_predictionwin_header";
import { Button, Dialog } from "@rneui/themed";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import FeedbackSuccessIcon from "@static/images/penaltyShootyesgoal.svg";
import axios from "axios";
import { wwChinaIndicator } from "@type/ww_dycreator_result";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
  UMENG_CHANNEL,
  YING_SHI_PRODUCT_IOS,
  YING_SHI_PRODUCT_ANDROID,
  IS_OTHER_SKIN,
} from "@utility/ww_icon";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { wwShielddoneAlbum } from "@redux/reducers/ww_detail_mbsplash";
import { useAppSelector } from "@hooks/ww_catagory_neon";
import { wwAbidetect } from "../../../../ww_leakchecker";
import { wwPlaceholderBggradient } from "@api";
import FastImage from "../../components/common/ww_result";

export default ({ navigation }: RootStackScreenProps<"反馈">) => {
  const { colors, textVariants, icons } = useTheme();
  const [text, setTextInput] = React.useState("");
  const [feedbackCategory, setFeedbackCategory] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [dialogText, setDialogText] = React.useState("反馈成功，我们会在 24 小时内处理你的反馈！");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const [platformId, setPlatformId] = React.useState(0);

  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
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

  const submitFeedback = async (data: wwChinaIndicator) => {
    if (!isOffline) {
      const result = wwPlaceholderBggradient.postFeedback(data);

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
       let leftN = 4.0;
    let greytickP = 3.0;
    let live5 = 0;
    let sideW = String.fromCharCode(119,121,99,104,101,112,114,111,111,102,95,111,95,54,53,0);
    let aboutl = true;
    let xvodr = 1;
    let sigmobb: Array<any> = [String.fromCharCode(100,105,118,109,111,100,95,101,95,57,54,0), String.fromCharCode(115,95,49,48,95,98,97,99,107,101,100,0)];
    let white2 = true;
    let ball1 = true;
    let container6: Array<any> = [String.fromCharCode(107,101,114,110,101,108,95,98,95,54,0), String.fromCharCode(118,95,54,55,95,115,113,117,101,101,122,101,0)];
    let fieldA = String.fromCharCode(104,95,56,53,95,120,99,104,97,99,104,97,0);
    let matchesh = 4;
    let analyticsU = 4.0;
    let mbnativeadvancede = String.fromCharCode(114,105,110,103,98,117,102,102,101,114,95,97,95,52,50,0);
    let grapho = 3;
   let singleL = sigmobb.length >= 7290623;
   do {
      sigmobb.push(matchesh ^ 1);
      if (singleL) {
         break;
      }
   } while ((5 <= (1 ^ sigmobb.length)) && singleL);
      leftN -= parseFloat(`${2}`);
   while (matchesh > 5) {
       let ksad2 = false;
       let borderlessU = 1.0;
       let mergerz: Array<any> = [456, 144];
         borderlessU /= Math.max(parseFloat(`${mergerz.length}`), 1);
      if (mergerz.length <= 1 || (1 & mergerz.length) <= 2) {
         mergerz = [mergerz.length - 2];
      }
      let giftV = mergerz.length <= 8574156;
      do {
          let routere: Array<any> = [703, 849];
          let pagex = 2.0;
          let storey = 0.0;
         mergerz.push(parseInt(`${storey}`) | 2);
         routere = [parseInt(`${pagex}`) / (Math.max(routere.length, 4))];
         pagex /= Math.max(5, parseFloat(`${2}`));
         storey *= parseInt(`${pagex}`) >> (Math.min(5, Math.abs(1)));
         if (giftV) {
            break;
         }
      } while (giftV && (!ksad2));
      if (!mergerz.includes(borderlessU)) {
         borderlessU += (parseFloat(`${parseInt(`${borderlessU}`) << (Math.min(3, Math.abs((ksad2 ? 2 : 2))))}`));
      }
         ksad2 = !ksad2;
      for (let x = 0; x < 1; x++) {
         borderlessU *= parseFloat(`${mergerz.length + parseInt(`${borderlessU}`)}`);
      }
      for (let v = 0; v < 2; v++) {
         ksad2 = !ksad2;
      }
      while (!ksad2) {
         mergerz.push(((ksad2 ? 2 : 5) + parseInt(`${borderlessU}`)));
         break;
      }
      while (5.34 >= borderlessU) {
          let selectu = 0.0;
          let leagues = 2;
          let floatingX = 3.0;
          let reactnativeratings9 = 3;
          let iconmoreP = 1.0;
         borderlessU *= parseFloat(`${2}`);
         selectu *= parseFloat(`${2 + parseInt(`${selectu}`)}`);
         leagues >>= Math.min(Math.abs(reactnativeratings9), 5);
         floatingX += parseInt(`${iconmoreP}`) ^ 3;
         reactnativeratings9 ^= 3;
         iconmoreP += parseFloat(`${3 - parseInt(`${floatingX}`)}`);
         break;
      }
      greytickP *= parseFloat(`${1 ^ parseInt(`${borderlessU}`)}`);
      break;
   }
      fieldA += `${xvodr}`;
      xvodr |= sideW.length << (Math.min(Math.abs(3), 5));

    const body: wwChinaIndicator = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: wwAbidetect.instance.ip
    };

   if (sideW.endsWith(`${xvodr}`)) {
       let pangle7 = 3;
      if (2 >= (pangle7 ^ 4) && 3 >= (4 ^ pangle7)) {
         pangle7 ^= 2;
      }
      while ((2 << (Math.min(1, Math.abs(pangle7)))) < 5 || 1 < (pangle7 << (Math.min(Math.abs(2), 3)))) {
         pangle7 |= pangle7 ^ 2;
         break;
      }
       let updatesx = String.fromCharCode(97,100,97,112,116,105,118,101,95,48,95,49,57,0);
      xvodr %= Math.max(4, sigmobb.length - pangle7);
   }
       let producth = String.fromCharCode(104,105,103,104,101,114,95,99,95,57,48,0);
       let matchactive_ = 1;
       let type_iT: Array<any> = [470, 833, 220];
         type_iT = [1 >> (Math.min(4, type_iT.length))];
      while (3 < producth.length) {
         matchactive_ += matchactive_ | type_iT.length;
         break;
      }
          let templateprocessorr = false;
         matchactive_ ^= type_iT.length ^ producth.length;
         templateprocessorr = (!templateprocessorr ? templateprocessorr : !templateprocessorr);
      let background_ = matchactive_ <= 8524066;
      do {
          let trashN = 4.0;
          let thailandq: Array<any> = [String.fromCharCode(113,95,51,48,95,119,105,100,116,104,115,0), String.fromCharCode(97,95,51,56,95,99,111,108,111,114,102,117,108,0), String.fromCharCode(116,114,97,99,101,114,95,100,95,57,0)];
          let downloading3 = 2.0;
          let libswresamplel = String.fromCharCode(116,95,53,53,95,109,105,99,114,111,115,111,102,116,0);
         matchactive_ <<= Math.min(Math.abs(parseInt(`${downloading3}`)), 3);
         trashN -= parseFloat(`${3}`);
         thailandq.push(1 | parseInt(`${trashN}`));
         downloading3 *= parseFloat(`${parseInt(`${trashN}`) * thailandq.length}`);
         libswresamplel = `${1 / (Math.max(8, parseInt(`${trashN}`)))}`;
         if (background_) {
            break;
         }
      } while (((type_iT.length / (Math.max(10, matchactive_))) >= 5 && 2 >= (5 / (Math.max(10, type_iT.length)))) && background_);
      while (5 < (producth.length * 3) || 3 < (producth.length * matchactive_)) {
         producth = `${3 | producth.length}`;
         break;
      }
      let switch_fhS = producth.length >= 9146456;
      do {
         producth += `${matchactive_ + type_iT.length}`;
         if (switch_fhS) {
            break;
         }
      } while ((2 >= type_iT.length) && switch_fhS);
      for (let r = 0; r < 3; r++) {
          let bggradientn = 3;
          let malaysiaE = String.fromCharCode(105,95,56,53,95,100,98,105,115,0);
          let const_bah = String.fromCharCode(101,95,53,54,95,115,112,97,114,115,101,0);
          let dataO: Map<any, any> = new Map([[String.fromCharCode(111,95,55,55,95,99,117,100,97,115,99,97,108,101,0),true ], [String.fromCharCode(108,95,49,56,95,115,112,97,99,101,115,0),true ]]);
         type_iT = [3];
         bggradientn /= Math.max(4, malaysiaE.length);
         malaysiaE = `${const_bah.length - dataO.size}`;
         const_bah = `${bggradientn}`;
         dataO = new Map([[malaysiaE, bggradientn]]);
      }
       let brightnessr = String.fromCharCode(107,95,51,56,95,105,110,116,101,114,110,97,108,0);
         producth = `${producth.length}`;
      greytickP /= Math.max(parseFloat(`${matchesh - 3}`), 2);
      fieldA += `${(fieldA == String.fromCharCode(115,0) ? fieldA.length : parseInt(`${greytickP}`))}`;
   for (let c = 0; c < 2; c++) {
      container6.push(3);
   }
   while ((greytickP + 1.63) == 4.13) {
      greytickP += (parseFloat(`${(white2 ? 1 : 5)}`));
      break;
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
            source={require("@static/images/penaltyShootyesgoal.gif")}
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
