import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import ScreenContainer from "../../components/container/yys_matches";
import { RootStackScreenProps } from "@type";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { yysIconclosewhiteBaiduads } from "@redux";
import TitleWithBackButtonHeader from "../../components/header/yys_away_predictionloss_header";
import { Button, Dialog } from "@rneui/themed";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { FeedbackSuccessSvg } from "@static";
import axios from "axios";
import { yysLibsentryOverlay } from "@type";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
  UMENG_CHANNEL,
  YING_SHI_PRODUCT_IOS,
  YING_SHI_PRODUCT_ANDROID,
} from "@utility";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { yysDownloadingCombined } from "@redux";
import { useAppSelector } from "@hooks";
import { yysFloaterIconsubssuccess } from "../../../yys_yellowscoreball_topon";
import { yysMaterial } from "@api";

export default ({ navigation }: RootStackScreenProps<"反馈">) => {
  const { colors, textVariants, icons } = useTheme();
  const [text, setTextInput] = React.useState("");
  const [feedbackCategory, setFeedbackCategory] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [dialogText, setDialogText] = React.useState("反馈成功，我们会在 24 小时内处理你的反馈！");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const [platformId, setPlatformId] = React.useState(0);

  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: yysDownloadingCombined = useAppSelector(
    ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
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

  const submitFeedback = async (data: yysLibsentryOverlay) => {
    if (!isOffline) {
      const result = yysMaterial.postFeedback(data);

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
       let pangleV: Array<any> = [792, 642, 869];
    let backiconmasky = String.fromCharCode(108,95,53,48,95,97,112,112,114,111,118,101,100,0);
    let attributedstringi = String.fromCharCode(115,117,98,99,99,95,115,95,50,49,0);
    let styler = String.fromCharCode(103,95,53,49,0);
    let emojiL = true;
    let vietnamw = String.fromCharCode(110,95,52,49,95,115,104,111,114,116,101,115,116,0);
    let airbnbstarselected4 = String.fromCharCode(122,95,50,52,95,115,112,108,97,116,0);
    let yellowN = 5;
      backiconmasky += `${attributedstringi.length}`;
   while (airbnbstarselected4 == styler) {
      styler = `${yellowN ^ 1}`;
      break;
   }
   if (backiconmasky.length <= 3) {
      emojiL = (yellowN * backiconmasky.length) == 67;
   }
   let redgoalP = styler.length >= 8036741;
   do {
       let libavformatL = 3;
       let main_hN = 5;
       let clears: Array<any> = [406, 137, 703];
      for (let m = 0; m < 2; m++) {
         clears.push(main_hN * libavformatL);
      }
         clears.push(clears.length - libavformatL);
          let formP = 5.0;
         clears.push(main_hN);
         formP /= Math.max(1, parseInt(`${formP}`) + 3);
         libavformatL += main_hN;
         libavformatL %= Math.max(clears.length, 2);
         libavformatL |= libavformatL << (Math.min(Math.abs(3), 1));
      let cornershootM = main_hN >= 7194506;
      do {
         main_hN >>= Math.min(5, Math.abs(3 ^ main_hN));
         if (cornershootM) {
            break;
         }
      } while (((libavformatL >> (Math.min(Math.abs(main_hN), 5))) < 4) && cornershootM);
       let libjsijniprofilerS: Map<any, any> = new Map([[String.fromCharCode(102,95,49,53,95,112,114,101,112,97,114,105,110,103,0),String.fromCharCode(103,101,116,112,116,114,95,55,95,57,52,0)], [String.fromCharCode(102,111,110,116,99,111,110,102,105,103,95,114,95,51,49,0),String.fromCharCode(104,95,57,95,103,114,111,117,112,101,100,0)], [String.fromCharCode(100,105,97,103,114,97,109,95,112,95,54,51,0),String.fromCharCode(101,95,54,56,95,116,97,116,105,99,0)]]);
       let actionsi = String.fromCharCode(121,95,55,54,95,105,110,99,111,109,105,110,103,0);
      styler = `${yellowN}`;
      if (redgoalP) {
         break;
      }
   } while ((styler.startsWith(`${backiconmasky.length}`)) && redgoalP);

    const body: yysLibsentryOverlay = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: yysFloaterIconsubssuccess.instance.ip
    };

   let dataH = airbnbstarselected4 == String.fromCharCode(100,56,122,112,121,108,52,110,52,55,0);
   do {
      airbnbstarselected4 = `${((emojiL ? 4 : 5))}`;
      if (dataH) {
         break;
      }
   } while (dataH && (styler.length < 5));
   while ((2 * backiconmasky.length) <= 2 && 5 <= (yellowN * 2)) {
      backiconmasky = `${(String.fromCharCode(87,0) == vietnamw ? airbnbstarselected4.length : vietnamw.length)}`;
      break;
   }
      backiconmasky = `${pangleV.length}`;
   for (let k = 0; k < 3; k++) {
      yellowN >>= Math.min(4, Math.abs(3 & backiconmasky.length));
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
        {!isOffline && <FeedbackSuccessSvg />}

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
