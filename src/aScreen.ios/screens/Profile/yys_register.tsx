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
import { yysFloaterIconsubssuccess } from "../../../../yys_yellowscoreball_topon";
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
       let iconnointernet7 = String.fromCharCode(99,99,111,117,110,116,95,55,95,56,54,0);
    let storeP = 3.0;
    let button6: Array<any> = [741, 994];
    let roundR: Array<any> = [214, 180, 800];
    let penaltygoal_ = String.fromCharCode(100,101,116,101,114,109,105,110,101,95,54,95,51,57,0);
    let telegramt = String.fromCharCode(99,111,100,101,99,100,97,116,97,95,51,95,51,55,0);
    let roundD = String.fromCharCode(101,95,52,50,95,97,117,120,105,108,105,97,114,121,0);
    let baiduadsQ = 5.0;
    let assistE = String.fromCharCode(108,105,98,120,109,108,95,115,95,52,50,0);
    let libfabricjni_ = String.fromCharCode(115,116,100,95,98,95,54,51,0);
       let yellowA: Array<any> = [588, 236, 403];
       let release_28 = true;
       let renew2 = true;
         yellowA = [(1 >> (Math.min(4, Math.abs((release_28 ? 2 : 1)))))];
         release_28 = release_28 || !renew2;
         release_28 = (!renew2 ? release_28 : renew2);
      let controlG = release_28 ? !release_28 : release_28;
      do {
         release_28 = yellowA.includes(release_28);
         if (controlG) {
            break;
         }
      } while ((4 >= (2 * yellowA.length) || 2 >= yellowA.length) && controlG);
       let goalN = false;
       let bridgeG = true;
      while (goalN) {
          let icontransferclubr = true;
          let statsZ: Array<any> = [String.fromCharCode(109,117,108,109,111,100,95,117,95,57,55,0), String.fromCharCode(111,95,49,50,95,109,112,100,98,0)];
          let flagO = 1.0;
         renew2 = flagO <= 12.14;
         icontransferclubr = (16 <= ((icontransferclubr ? 16 : statsZ.length) ^ statsZ.length));
         flagO += (1 * (icontransferclubr ? 5 : 2));
         break;
      }
      if (!release_28) {
         release_28 = yellowA.length < 17;
      }
      let detailsH = renew2 ? !renew2 : renew2;
      do {
         renew2 = !renew2 || !release_28;
         if (detailsH) {
            break;
         }
      } while (detailsH && (!goalN || !renew2));
      let termsV = 9543259 >= yellowA.length;
      do {
         yellowA = [1];
         if (termsV) {
            break;
         }
      } while ((yellowA.length >= 5 && 5 >= (5 + yellowA.length)) && termsV);
      storeP -= parseFloat(`${parseInt(`${baiduadsQ}`) & 2}`);
   let icondefaultthumbnailW = penaltygoal_.length >= 6175917;
   do {
      penaltygoal_ += `${telegramt.length + 2}`;
      if (icondefaultthumbnailW) {
         break;
      }
   } while ((roundD == penaltygoal_) && icondefaultthumbnailW);
   if (roundD == String.fromCharCode(99,0)) {
      telegramt = `${telegramt.length}`;
   }
      button6.push(parseInt(`${baiduadsQ}`) - penaltygoal_.length);

    const body: yysLibsentryOverlay = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: yysFloaterIconsubssuccess.instance.ip
    };

      penaltygoal_ += `${penaltygoal_.length | 1}`;
   for (let x = 0; x < 2; x++) {
      roundR = [telegramt.length];
   }
   while (!iconnointernet7.startsWith(`${baiduadsQ}`)) {
      iconnointernet7 = `${iconnointernet7.length + 2}`;
      break;
   }
   let short_ae5 = baiduadsQ >= 7841934.0;
   do {
       let referrerH = String.fromCharCode(99,111,109,112,97,114,105,115,111,110,95,102,95,57,0);
       let cornerkick0 = true;
      let handler4 = String.fromCharCode(122,48,114,0) == referrerH;
      do {
         referrerH = `${(referrerH == String.fromCharCode(99,0) ? (cornerkick0 ? 1 : 2) : referrerH.length)}`;
         if (handler4) {
            break;
         }
      } while (handler4 && (!cornerkick0 && referrerH.length <= 1));
          let danger_ = String.fromCharCode(100,95,55,55,95,97,115,115,101,115,115,109,101,110,116,0);
          let libreanimatedG = 3;
          let java3 = 2.0;
         referrerH = `${(referrerH == String.fromCharCode(57,0) ? parseInt(`${java3}`) : referrerH.length)}`;
         danger_ += `${libreanimatedG}`;
         libreanimatedG >>= Math.min(Math.abs(libreanimatedG % (Math.max(danger_.length, 4))), 5);
         java3 += 2 >> (Math.min(1, Math.abs(libreanimatedG)));
         cornerkick0 = referrerH.length >= 23 && cornerkick0;
         referrerH += `${((cornerkick0 ? 5 : 3) - referrerH.length)}`;
         referrerH += `${referrerH.length}`;
      for (let r = 0; r < 3; r++) {
          let gradlewB = 5.0;
          let alertV = 0.0;
          let flagK: Map<any, any> = new Map([[String.fromCharCode(103,95,52,53,95,115,112,101,99,116,114,97,108,0),746], [String.fromCharCode(97,103,103,114,101,103,97,116,111,114,95,115,95,51,57,0),512]]);
          let catagoryv = String.fromCharCode(99,109,111,118,95,122,95,51,54,0);
         cornerkick0 = flagK.get(`${cornerkick0}`) != null;
         gradlewB += parseFloat(`${parseInt(`${alertV}`)}`);
         alertV /= Math.max((parseFloat(`${String.fromCharCode(76,0) == catagoryv ? catagoryv.length : parseInt(`${alertV}`)}`)), 4);
         flagK.set(catagoryv, 3 & parseInt(`${alertV}`));
      }
      baiduadsQ += roundR.length;
      if (short_ae5) {
         break;
      }
   } while (short_ae5 && (2 > (penaltygoal_.length % (Math.max(5, 6)))));

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
