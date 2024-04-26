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
import { wwAbidetect } from "../../../ww_leakchecker";
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
       let launchers = 5;
    let classesW = String.fromCharCode(115,116,105,99,107,101,114,0);
    let libavcodecU = String.fromCharCode(102,117,100,103,101,0);
    let diceb = false;
    let sourcej = true;
    let p_unlock7 = String.fromCharCode(114,101,98,117,105,108,100,0);
    let eactF = 3.0;
    let playa = String.fromCharCode(99,111,108,100,0);
    let libavformatz = String.fromCharCode(105,110,115,116,97,110,99,101,115,0);
    let select6 = 2;
    let brightness3 = 2.0;
    let customK = 2.0;
    let zhuboQ: Map<any, any> = new Map([[String.fromCharCode(99,117,100,97,115,99,97,108,101,0),34], [String.fromCharCode(114,101,115,101,116,0),851], [String.fromCharCode(101,110,117,109,101,114,97,116,111,114,115,0),199]]);
    let downloaderC = 5.0;
      select6 >>= Math.min(3, Math.abs(parseInt(`${eactF}`) & 3));
      sourcej = 23 < libavformatz.length;
   let controlsy = p_unlock7 == String.fromCharCode(57,122,99,98,57,56,0);
   do {
      p_unlock7 += `${parseInt(`${eactF}`)}`;
      if (controlsy) {
         break;
      }
   } while (controlsy && ((5 | p_unlock7.length) < 4));
   for (let e = 0; e < 2; e++) {
       let predictionactivee: Map<any, any> = new Map([[String.fromCharCode(109,101,100,105,97,115,0),684], [String.fromCharCode(98,97,99,107,117,112,0),993]]);
       let routerK = String.fromCharCode(100,105,115,97,112,112,101,97,114,0);
       let cnewssharen: Map<any, any> = new Map([[String.fromCharCode(104,116,109,108,109,97,114,107,117,112,0),true ], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,0),true ], [String.fromCharCode(112,114,101,100,101,99,111,100,101,0),true ]]);
      for (let d = 0; d < 1; d++) {
          let analyticsT = false;
          let white2: Array<any> = [586, 15, 332];
          let ksadH = false;
         routerK = `${(2 + (analyticsT ? 4 : 1))}`;
         analyticsT = white2.length >= white2.length;
      }
         routerK = "3";
         routerK = `${routerK.length % 2}`;
         routerK += `${cnewssharen.size - routerK.length}`;
      let renewq = cnewssharen.size <= 5891305;
      do {
         cnewssharen.set(`${routerK}`, 1);
         if (renewq) {
            break;
         }
      } while (((1 + cnewssharen.size) <= 3 || (predictionactivee.size + cnewssharen.size) <= 1) && renewq);
          let libreactnativejniS = 3.0;
         routerK = `${predictionactivee.size << (Math.min(5, Math.abs(parseInt(`${libreactnativejniS}`))))}`;
         predictionactivee = new Map([[`${predictionactivee.size}`, predictionactivee.size ^ routerK.length]]);
          let whiteanimationlivew = 4.0;
          let hiadi = String.fromCharCode(108,105,115,116,115,0);
         cnewssharen.set(routerK, 2 / (Math.max(3, cnewssharen.size)));
         whiteanimationlivew -= parseFloat(`${parseInt(`${whiteanimationlivew}`) ^ hiadi.length}`);
         hiadi += `${hiadi.length * parseInt(`${whiteanimationlivew}`)}`;
         predictionactivee.set(`${cnewssharen.size}`, cnewssharen.size % 2);
      brightness3 += cnewssharen.size ^ 1;
   }
       let userH = String.fromCharCode(115,119,105,112,101,0);
       let defaultroombgq = String.fromCharCode(97,108,108,111,99,97,116,101,0);
       let yellowvideolivey = 5.0;
         defaultroombgq = `${userH.length ^ 1}`;
         defaultroombgq = "2";
         yellowvideolivey *= defaultroombgq.length % 1;
         defaultroombgq += `${3 ^ parseInt(`${yellowvideolivey}`)}`;
         defaultroombgq += `${defaultroombgq.length - userH.length}`;
      let whistleb = defaultroombgq.length <= 7182259;
      do {
         defaultroombgq = `${parseInt(`${yellowvideolivey}`) & defaultroombgq.length}`;
         if (whistleb) {
            break;
         }
      } while (whistleb && (5 == defaultroombgq.length));
         userH = `${defaultroombgq.length}`;
          let libimagepipelineP = 0.0;
          let borderless6 = String.fromCharCode(109,98,112,97,105,114,0);
         yellowvideolivey += 2;
         libimagepipelineP += parseFloat(`${borderless6.length}`);
         borderless6 += `${borderless6.length % (Math.max(3, 8))}`;
      for (let e = 0; e < 1; e++) {
          let videocommonn = String.fromCharCode(111,97,117,116,104,0);
          let selected5: Array<any> = [562, 753];
         yellowvideolivey /= Math.max(videocommonn.length, 1);
         videocommonn = `${selected5.length * 1}`;
         selected5.push(selected5.length);
      }
      classesW = `${parseInt(`${eactF}`)}`;
      classesW = "1";

    const body: wwChinaIndicator = {
      email: email,
      feedback_category: feedbackCategory,
      feedback: text,
      platform_id: platformId,
      ip_address: wwAbidetect.instance.ip
    };

   while (5 == (select6 << (Math.min(playa.length, 4)))) {
      select6 <<= Math.min(Math.abs(2), 1);
      break;
   }
       let p_positions = String.fromCharCode(115,116,114,101,114,114,111,114,0);
       let gifgoalbgQ = String.fromCharCode(97,103,97,105,110,0);
       let dnewsshareI = 5;
      if (gifgoalbgQ.includes(`${p_positions.length}`)) {
          let anythinkc = 0.0;
          let profileinactiveV = true;
          let targets = 1.0;
          let reactnativejsM = 3.0;
          let aboutT = 1.0;
         gifgoalbgQ += `${1 - parseInt(`${targets}`)}`;
         anythinkc /= Math.max(parseInt(`${reactnativejsM}`) ^ 3, 3);
         profileinactiveV = 23.0 >= reactnativejsM;
         targets *= parseFloat(`${2 * parseInt(`${anythinkc}`)}`);
         aboutT += 3 - parseInt(`${anythinkc}`);
      }
      for (let z = 0; z < 3; z++) {
         gifgoalbgQ += `${gifgoalbgQ.length}`;
      }
         gifgoalbgQ += `${p_positions.length}`;
          let langg = 5;
          let crown0: Map<any, any> = new Map([[String.fromCharCode(105,115,97,108,110,117,109,0),561], [String.fromCharCode(97,108,111,99,0),318], [String.fromCharCode(115,101,114,105,97,108,110,111,0),502]]);
         gifgoalbgQ += `${crown0.size}`;
         langg >>= Math.min(4, Math.abs(langg | 1));
         crown0.set(`${langg}`, langg);
         p_positions += "3";
       let libzeusZ = 2.0;
       let rootv = 5.0;
      let topicB = 6914788.0 <= libzeusZ;
      do {
         libzeusZ -= dnewsshareI;
         if (topicB) {
            break;
         }
      } while (topicB && ((5.27 + libzeusZ) > 3.67 && 3 > (dnewsshareI % 5)));
          let libswresampleA = String.fromCharCode(108,122,115,115,0);
         libzeusZ -= gifgoalbgQ.length;
         libswresampleA += `${(String.fromCharCode(104,0) == libswresampleA ? libswresampleA.length : libswresampleA.length)}`;
          let nterstitial6 = String.fromCharCode(97,115,105,110,107,0);
          let moduleu = String.fromCharCode(100,105,115,112,97,116,99,104,105,110,103,0);
         rootv *= 2;
         nterstitial6 = `${nterstitial6.length % (Math.max(moduleu.length, 6))}`;
         moduleu += `${moduleu.length >> (Math.min(Math.abs(2), 3))}`;
      p_unlock7 = `${1 - parseInt(`${customK}`)}`;
   while ((customK * 3.58) == 4.53) {
      customK /= Math.max(1, p_unlock7.length);
      break;
   }
       let vietnamb = 0.0;
       let tempnodatagife: Map<any, any> = new Map([[String.fromCharCode(97,114,116,105,102,97,99,116,0),false ], [String.fromCharCode(112,101,114,115,112,101,99,116,105,118,101,0),true ]]);
         tempnodatagife.set(`${vietnamb}`, parseInt(`${vietnamb}`));
      if (tempnodatagife.get(`${vietnamb}`) == null) {
         vietnamb /= Math.max(tempnodatagife.size, 1);
      }
      while (2 >= (tempnodatagife.size | 3)) {
          let infob = 1.0;
          let m_count5: Array<any> = [202, 75, 963];
          let classesN = 4.0;
          let graphicsi = String.fromCharCode(100,105,118,105,100,105,110,103,0);
          let roomL = true;
         vietnamb *= (graphicsi == String.fromCharCode(86,0) ? parseInt(`${infob}`) : graphicsi.length);
         infob *= (parseInt(`${classesN}`) << (Math.min(1, Math.abs((roomL ? 3 : 4)))));
         m_count5 = [m_count5.length ^ parseInt(`${classesN}`)];
         roomL = classesN >= 4.81;
         break;
      }
      if ((tempnodatagife.size << (Math.min(Math.abs(1), 5))) <= 2 && (5.61 - vietnamb) <= 1.99) {
         tempnodatagife = new Map([[`${tempnodatagife.size}`, tempnodatagife.size % (Math.max(1, 2))]]);
      }
       let libglogv = true;
       let questiconU = false;
      while (libglogv) {
         questiconU = tempnodatagife.size < 37;
         break;
      }
      libavcodecU += `${2 >> (Math.min(1, Math.abs(parseInt(`${vietnamb}`))))}`;
   let resendF = libavformatz == String.fromCharCode(104,51,97,98,99,98,0);
   do {
       let icon6: Array<any> = [145, 353];
       let reactnativejs6 = false;
      while (icon6.length > 5) {
         icon6 = [((reactnativejs6 ? 1 : 1) + icon6.length)];
         break;
      }
       let zinit_iY: Map<any, any> = new Map([[String.fromCharCode(108,115,102,108,115,112,0),String.fromCharCode(106,115,111,110,0)], [String.fromCharCode(98,114,101,97,107,105,110,103,0),String.fromCharCode(114,101,118,97,108,105,100,97,116,105,110,103,0)], [String.fromCharCode(116,115,97,110,0),String.fromCharCode(105,110,102,111,114,109,97,116,105,118,101,0)]]);
         reactnativejs6 = !reactnativejs6 && zinit_iY.size == 69;
          let catalogR: Map<any, any> = new Map([[String.fromCharCode(105,110,104,105,98,105,116,115,0),81], [String.fromCharCode(100,97,112,112,115,0),64], [String.fromCharCode(115,121,115,114,97,110,100,0),309]]);
          let graphD = String.fromCharCode(117,112,100,97,116,101,0);
         reactnativejs6 = zinit_iY.size == 55;
         catalogR.set(`${graphD}`, catalogR.size);
         graphD = "2";
      for (let g = 0; g < 2; g++) {
         icon6 = [1];
      }
          let dangerS: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,99,116,0),String.fromCharCode(101,120,112,111,114,116,0)], [String.fromCharCode(97,108,97,99,0),String.fromCharCode(115,117,98,111,98,106,101,99,116,0)], [String.fromCharCode(114,97,116,101,0),String.fromCharCode(114,101,100,117,110,100,97,110,116,0)]]);
          let exampleimageB: Array<any> = [238, 380];
          let yellowf = String.fromCharCode(99,97,108,101,110,100,97,114,0);
         reactnativejs6 = 28 > icon6.length;
         dangerS.set(yellowf, exampleimageB.length - 2);
         exampleimageB = [1];
         yellowf += `${dangerS.size % (Math.max(exampleimageB.length, 1))}`;
      libavformatz = `${((diceb ? 1 : 2) << (Math.min(Math.abs(1), 1)))}`;
      if (resendF) {
         break;
      }
   } while ((1 < (1 / (Math.max(5, libavformatz.length)))) && resendF);
       let gradlez = 3.0;
       let entrym: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,105,110,101,115,115,0),true ], [String.fromCharCode(104,101,120,116,105,108,101,0),false ], [String.fromCharCode(99,111,110,116,114,111,108,108,101,114,0),true ]]);
         entrym = new Map([[`${entrym.size}`, parseInt(`${gradlez}`) + entrym.size]]);
         gradlez -= entrym.size / (Math.max(5, parseInt(`${gradlez}`)));
          let umeng2: Array<any> = [157, 836, 132];
         entrym = new Map([[`${umeng2.length}`, 1 | umeng2.length]]);
       let libreactnativejniR = 3;
      while (!Array.from(entrym.keys()).includes(`${libreactnativejniR}`)) {
         entrym.set(`${libreactnativejniR}`, entrym.size);
         break;
      }
      if (4 < (entrym.size | 1) && (libreactnativejniR | 1) < 2) {
         libreactnativejniR -= parseInt(`${gradlez}`);
      }
      sourcej = 62.81 == brightness3 || !sourcej;

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
