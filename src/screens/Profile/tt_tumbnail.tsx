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
import { ttConfigRecommendation } from "../../../tt_copy_floater";
import { ttPhotoTheme } from "@api";
import FastImage from "../../components/common/tt_connection";

export default ({ navigation }: RootStackScreenProps<"反馈">) => {
  const { colors, textVariants, icons, dark } = useTheme();
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
       let detailF = false;
    let prediction3 = String.fromCharCode(121,95,55,53,95,99,97,112,97,98,108,101,0);
    let chartR = String.fromCharCode(106,117,115,116,105,102,105,101,100,95,56,95,53,51,0);
    let manifest8 = String.fromCharCode(120,95,50,56,95,97,99,117,116,111,102,102,0);
    let firebasei = String.fromCharCode(115,97,108,115,97,95,106,95,49,48,48,0);
    let nativeex1: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,115,95,120,95,54,49,0),302], [String.fromCharCode(103,98,114,112,95,115,95,56,48,0),625]]);
    let ajaxd = 3.0;
    let path4 = String.fromCharCode(112,114,111,99,101,115,115,111,114,95,49,95,54,0);
      prediction3 += "1";
      ajaxd -= nativeex1.size * 3;
   let brightnessx = firebasei.length <= 9390657;
   do {
      firebasei += `${manifest8.length}`;
      if (brightnessx) {
         break;
      }
   } while (brightnessx && ((2 + nativeex1.size) == 5 || 3 == (2 + nativeex1.size)));
      chartR = "3";

    const body: ttPhoneEntry = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: ttConfigRecommendation.instance.ip
    };

      prediction3 = `${(String.fromCharCode(118,0) == chartR ? nativeex1.size : chartR.length)}`;
       let handlerb = 1.0;
       let flyer6: Map<any, any> = new Map([[String.fromCharCode(102,116,118,115,112,108,105,116,98,97,114,95,52,95,56,55,0),true ], [String.fromCharCode(116,95,51,56,95,100,114,97,119,97,98,108,101,115,0),false ]]);
       let albumy = String.fromCharCode(100,101,99,111,114,97,116,101,95,98,95,49,48,0);
      for (let w = 0; w < 3; w++) {
          let bootsplasha = String.fromCharCode(114,95,49,52,95,102,105,110,97,108,105,122,101,0);
         flyer6 = new Map([[`${flyer6.size}`, 1]]);
         bootsplasha = `${bootsplasha.length + 2}`;
      }
      let casta = flyer6.size <= 9712860;
      do {
         flyer6 = new Map([[`${flyer6.size}`, (String.fromCharCode(104,0) == albumy ? albumy.length : flyer6.size)]]);
         if (casta) {
            break;
         }
      } while (casta && (2.25 < (handlerb / 5.84)));
          let championh = String.fromCharCode(122,95,54,95,114,101,97,115,111,110,0);
          let mbjscommonj: Map<any, any> = new Map([[String.fromCharCode(98,105,119,103,116,95,54,95,55,49,0),534], [String.fromCharCode(105,110,112,108,105,99,105,116,101,108,121,95,102,95,54,0),597], [String.fromCharCode(115,95,51,54,0),843]]);
         albumy = `${1 << (Math.min(3, championh.length))}`;
         championh = "1";
         mbjscommonj.set(`${mbjscommonj.size}`, mbjscommonj.size >> (Math.min(Math.abs(3), 2)));
      let long_kb = albumy.length >= 8373263;
      do {
         albumy = "2";
         if (long_kb) {
            break;
         }
      } while (((1 << (Math.min(1, albumy.length))) == 3) && long_kb);
      for (let x = 0; x < 2; x++) {
         albumy = `${parseInt(`${handlerb}`)}`;
      }
         handlerb *= albumy.length;
         albumy += `${flyer6.size}`;
      if (albumy.length < 5) {
         albumy += `${flyer6.size ^ 1}`;
      }
          let topicl = String.fromCharCode(109,95,54,53,0);
          let sharedk = 5.0;
         handlerb -= albumy.length * flyer6.size;
         topicl = "2";
         sharedk /= Math.max(4, topicl.length);
      nativeex1 = new Map([[`${handlerb}`, 3 & parseInt(`${ajaxd}`)]]);
   let chinasameV = ajaxd >= 5765286.0;
   do {
      ajaxd *= nativeex1.size;
      if (chinasameV) {
         break;
      }
   } while ((1.25 == (1.65 - ajaxd)) && chinasameV);
      path4 = `${chartR.length}`;

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
