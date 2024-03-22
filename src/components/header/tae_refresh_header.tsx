import React, { memo } from "react";
import SearchBar from "./uk_result";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Text,
} from "react-native";
import Logo from "@static/images/splashTickedShrink.svg";
import VipEntry from "@static/images/splash/infoType_6.svg";
import y_icon from "@static/images/usernameCountry.svg";
import { useTheme } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { MDown } from "@type/wpk_long";
import { useMemo } from "react";
import { RCanvas } from "@api";
import { SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/n_subs_interstitial";
import { useSelector } from "@hooks/kg_index";

interface XFillButton {
  logo?: React.ReactNode;
  navigator: any;
  headerStyle?: ViewStyle;
}
function MainHeader({ logo, navigator, headerStyle }: XFillButton) {
  const { icons, colors } = useTheme();
  const themeState = useSelector<{ theme: boolean }>('themeReducer');
  const isDark = themeState.theme === true;

  const { data: recommendations } = useQuery({
    queryKey: ["recommendationList"],
    queryFn: () => RCanvas.getListByRecommendations(),
  });

  const randomVod = useMemo(() => {
       let ballA = String.fromCharCode(119,95,49,50,95,114,101,103,105,115,116,101,114,0);
    let update_j6p = String.fromCharCode(112,95,50,50,95,104,97,110,100,111,102,102,0);
    let lessg = 0;
    let penaltyN: Map<any, any> = new Map([[String.fromCharCode(119,95,55,57,95,115,116,111,114,101,120,0),false ], [String.fromCharCode(115,95,53,53,95,114,101,112,108,97,121,101,114,0),true ], [String.fromCharCode(114,97,115,116,101,114,105,122,101,95,56,95,53,53,0),true ]]);
    let bannerK: Map<any, any> = new Map([[String.fromCharCode(97,95,54,55,95,98,105,111,109,101,116,114,105,99,0),22], [String.fromCharCode(112,111,108,121,108,105,110,101,95,118,95,56,53,0),480]]);
    let short_n0J = true;
    let playlistB = String.fromCharCode(120,102,105,120,101,115,95,51,95,54,51,0);
    let launch3 = 5.0;
    let main_jp = true;
    let cornerA = 3.0;
   while (update_j6p.startsWith(ballA)) {
       let completeO = String.fromCharCode(103,95,53,48,95,115,99,97,110,110,105,110,103,0);
       let malaysia1: Array<any> = [319, 262, 802];
      if ((5 ^ malaysia1.length) < 5 && (completeO.length ^ 5) < 3) {
         completeO += `${3 * completeO.length}`;
      }
      if (!completeO.startsWith(`${malaysia1.length}`)) {
         malaysia1 = [completeO.length + malaysia1.length];
      }
      let l_countu = completeO.length <= 5055455;
      do {
         completeO += `${completeO.length * 3}`;
         if (l_countu) {
            break;
         }
      } while (l_countu && (3 == malaysia1.length));
      let watch8 = completeO == String.fromCharCode(107,104,56,120,55,0);
      do {
         completeO = `${completeO.length}`;
         if (watch8) {
            break;
         }
      } while (((malaysia1.length >> (Math.min(completeO.length, 4))) < 1) && watch8);
         completeO += `${completeO.length}`;
         completeO = `${3 / (Math.max(4, completeO.length))}`;
      ballA = `${bannerK.size * 1}`;
      break;
   }
      launch3 -= (parseFloat(`${(short_n0J ? 2 : 4) >> (Math.min(Math.abs(lessg), 2))}`));
   while (playlistB.startsWith(`${launch3}`)) {
      launch3 += parseFloat(`${1}`);
      break;
   }
      penaltyN = new Map([[`${penaltyN.size}`, update_j6p.length]]);
   while (ballA.length < 2) {
       let minimizeH = String.fromCharCode(105,115,112,97,116,99,104,95,55,95,55,0);
       let constantsX = 4.0;
       let constantsI = String.fromCharCode(104,101,97,114,116,98,101,97,116,95,104,95,51,50,0);
      while (!minimizeH.startsWith(constantsI)) {
          let controla: Array<any> = [939, 740];
          let emptyn: Array<any> = [92, 963];
         minimizeH += `${2 & controla.length}`;
         controla.push(emptyn.length);
         emptyn.push(emptyn.length % (Math.max(10, emptyn.length)));
         break;
      }
      if (4 >= minimizeH.length) {
         minimizeH = `${parseInt(`${constantsX}`) / 1}`;
      }
         minimizeH += `${parseInt(`${constantsX}`)}`;
         minimizeH = `${parseInt(`${constantsX}`) % (Math.max(2, 5))}`;
      for (let g = 0; g < 2; g++) {
          let blacklistG = 0.0;
         minimizeH += "2";
         blacklistG *= 3 * parseInt(`${blacklistG}`);
      }
      while ((constantsI.length * parseInt(`${constantsX}`)) > 1 && 1 > (parseInt(`${constantsX}`) * constantsI.length)) {
         constantsX *= (minimizeH == String.fromCharCode(120,0) ? parseInt(`${constantsX}`) : minimizeH.length);
         break;
      }
      let dialogq = 6666270.0 <= constantsX;
      do {
         constantsX /= Math.max(constantsI.length << (Math.min(minimizeH.length, 5)), 2);
         if (dialogq) {
            break;
         }
      } while (dialogq && (constantsI.length >= parseInt(`${constantsX}`)));
      if ((constantsX / 3.50) < 4.78 || (3.50 / (Math.max(2, constantsX))) < 1.73) {
         constantsX += constantsI.length / 1;
      }
      let logo2 = 7085544.0 <= constantsX;
      do {
         constantsX *= parseInt(`${constantsX}`) - minimizeH.length;
         if (logo2) {
            break;
         }
      } while (logo2 && (5.71 == constantsX));
      ballA = `${parseInt(`${launch3}`) >> (Math.min(3, Math.abs(1)))}`;
      break;
   }
   let hookso = penaltyN.size <= 8710166;
   do {
       let fillX = false;
       let clubT: Map<any, any> = new Map([[String.fromCharCode(109,101,109,111,95,99,95,51,56,0),795], [String.fromCharCode(98,105,110,100,105,110,103,95,110,95,53,49,0),46]]);
       let whistleK = 5;
       let blacklists: Array<any> = [271, 469];
      let collectionL = whistleK >= 9361544;
      do {
          let connectionr = String.fromCharCode(99,95,49,56,95,114,101,112,97,105,110,116,0);
         whistleK *= blacklists.length - connectionr.length;
         if (collectionL) {
            break;
         }
      } while (((1 >> (Math.min(1, blacklists.length))) > 1 && 1 > (blacklists.length >> (Math.min(2, Math.abs(whistleK))))) && collectionL);
      if (!fillX) {
         fillX = (whistleK % (Math.max(blacklists.length, 5))) == 90;
      }
      if (fillX || 3 > (blacklists.length / (Math.max(1, 3)))) {
          let analyticss = false;
          let condensed4 = 0.0;
          let typeso = 3.0;
         fillX = blacklists.length <= 60 && 60 <= whistleK;
         analyticss = condensed4 <= 63.96;
         condensed4 += parseFloat(`${1 % (Math.max(parseInt(`${condensed4}`), 7))}`);
         typeso += parseInt(`${condensed4}`);
      }
      if ((1 >> (Math.min(1, Math.abs(whistleK)))) == 4) {
         whistleK += 3 << (Math.min(3, Math.abs(clubT.size)));
      }
      let areaG = 7199143 <= whistleK;
      do {
         whistleK |= 3 + blacklists.length;
         if (areaG) {
            break;
         }
      } while ((5 < whistleK) && areaG);
      if (3 <= (clubT.size + 1) && clubT.size <= 1) {
          let hejiY = String.fromCharCode(106,95,50,56,95,99,114,111,115,115,102,97,100,101,0);
          let style5 = 5;
          let popupa = false;
         clubT.set(`${fillX}`, ((fillX ? 4 : 5) % 2));
         hejiY += `${style5}`;
         style5 %= Math.max(hejiY.length, 4);
         popupa = String.fromCharCode(106,0) == hejiY;
      }
      let stepS = fillX ? !fillX : fillX;
      do {
          let thumbnail8 = String.fromCharCode(102,95,49,55,95,111,112,101,110,115,101,97,0);
          let minivod6 = 1.0;
          let groupT = String.fromCharCode(102,108,105,103,104,116,95,118,95,55,55,0);
         fillX = blacklists.length == whistleK;
         thumbnail8 += `${thumbnail8.length % 3}`;
         minivod6 += (groupT == String.fromCharCode(90,0) ? parseInt(`${minivod6}`) : groupT.length);
         if (stepS) {
            break;
         }
      } while ((1 < clubT.size) && stepS);
      for (let o = 0; o < 1; o++) {
         whistleK ^= 1 * clubT.size;
      }
         clubT = new Map([[`${clubT.size}`, whistleK]]);
         clubT = new Map([[`${whistleK}`, whistleK]]);
          let sinaG = true;
          let league1 = String.fromCharCode(98,95,55,51,95,97,110,97,108,121,122,101,0);
         whistleK <<= Math.min(4, Math.abs(league1.length * 3));
         sinaG = (!sinaG ? sinaG : !sinaG);
         league1 += "3";
       let clockH: Array<any> = [368, 903];
       let qnewsV: Array<any> = [729, 349];
      penaltyN = new Map([[`${launch3}`, playlistB.length]]);
      if (hookso) {
         break;
      }
   } while (hookso && (!main_jp));
   for (let h = 0; h < 2; h++) {
      playlistB += `${parseInt(`${launch3}`) << (Math.min(1, Math.abs(1)))}`;
   }

    if (recommendations && recommendations.length > 0) {

      ballA += `${2 & update_j6p.length}`;
       let userE = 5;
       let whatsapp7 = String.fromCharCode(112,99,98,105,110,102,111,95,57,95,49,53,0);
       let sellp = String.fromCharCode(99,111,117,110,116,113,117,97,110,116,95,99,95,49,54,0);
      if (sellp.includes(whatsapp7)) {
         whatsapp7 = `${whatsapp7.length}`;
      }
      for (let u = 0; u < 3; u++) {
          let settingsn = 3;
         whatsapp7 = `${sellp.length}`;
         settingsn ^= settingsn;
      }
      lessg |= 2;
      userE &= userE * userE;
      playlistB += `${penaltyN.size}`;
   while (!Array.from(bannerK.values()).includes(lessg)) {
       let modal9 = 1;
       let telegrami = 4.0;
       let heartW = String.fromCharCode(122,95,57,49,95,119,101,98,112,0);
       let const_uG = String.fromCharCode(108,95,55,52,95,99,111,108,111,114,113,117,97,110,116,0);
         telegrami *= parseFloat(`${const_uG.length ^ 1}`);
       let profiles = true;
       let frame_0T = false;
       let unselectedm = 2.0;
      if (!profiles && (4.78 - unselectedm) >= 2.41) {
         profiles = (frame_0T ? profiles : !frame_0T);
      }
       let handlerh: Map<any, any> = new Map([[String.fromCharCode(105,95,56,57,0),119], [String.fromCharCode(102,114,105,101,110,100,95,98,95,53,57,0),715], [String.fromCharCode(114,101,112,108,97,99,101,95,122,95,53,50,0),816]]);
       let expiredf: Map<any, any> = new Map([[String.fromCharCode(103,95,53,48,95,100,97,112,0),true ], [String.fromCharCode(97,117,116,111,97,114,99,104,105,118,101,95,103,95,56,51,0),false ], [String.fromCharCode(115,97,100,100,95,102,95,53,56,0),false ]]);
          let agreementN = 1;
         expiredf.set(const_uG, const_uG.length << (Math.min(Math.abs(3), 5)));
         agreementN -= agreementN << (Math.min(Math.abs(3), 5));
      while (!profiles) {
         expiredf = new Map([[`${modal9}`, (heartW == String.fromCharCode(72,0) ? modal9 : heartW.length)]]);
         break;
      }
      while (expiredf.size < handlerh.size) {
         expiredf = new Map([[`${frame_0T}`, (parseInt(`${unselectedm}`) % (Math.max(10, (frame_0T ? 2 : 5))))]]);
         break;
      }
      bannerK = new Map([[`${bannerK.size}`, 1]]);
      break;
   }
   for (let k = 0; k < 1; k++) {
      lessg >>= Math.min(4, Math.abs(((main_jp ? 4 : 1) + 3)));
   }
      launch3 += (parseFloat(`${(main_jp ? 2 : 2)}`));
   let catalogs = penaltyN.size <= 6853071;
   do {
       let bottomj: Map<any, any> = new Map([[String.fromCharCode(101,120,112,105,114,121,95,106,95,50,57,0),180], [String.fromCharCode(121,95,57,54,95,100,111,108,98,121,0),565], [String.fromCharCode(107,95,55,48,95,115,111,98,101,108,0),436]]);
       let firebaseq = true;
         bottomj.set(`${firebaseq}`, 2 - bottomj.size);
          let minim: Map<any, any> = new Map([[String.fromCharCode(115,117,98,110,111,100,101,95,105,95,52,49,0),true ], [String.fromCharCode(117,95,55,52,95,115,117,98,115,116,114,105,110,103,0),true ]]);
         bottomj = new Map([[`${bottomj.size}`, 1]]);
         minim = new Map([[`${minim.size}`, 3]]);
         firebaseq = bottomj.size > 78;
          let link4 = 5.0;
         firebaseq = !firebaseq;
         link4 += parseFloat(`${parseInt(`${link4}`)}`);
      let singaporeC = bottomj.size >= 7356292;
      do {
          let orientationC = true;
          let transfern = 2.0;
          let w_title9 = String.fromCharCode(109,101,110,117,115,95,105,95,52,56,0);
          let commonZ = String.fromCharCode(119,95,54,49,95,100,111,110,110,97,0);
          let countryL: Array<any> = [876, 770, 615];
         bottomj.set(`${firebaseq}`, ((firebaseq ? 4 : 5) / (Math.max(w_title9.length, 9))));
         orientationC = !orientationC;
         transfern -= parseFloat(`${countryL.length & commonZ.length}`);
         w_title9 += `${(parseInt(`${transfern}`) - (orientationC ? 2 : 2))}`;
         commonZ = `${2 << (Math.min(Math.abs(parseInt(`${transfern}`)), 2))}`;
         countryL.push(1 >> (Math.min(1, countryL.length)));
         if (singaporeC) {
            break;
         }
      } while ((5 >= bottomj.size) && singaporeC);
          let policy_ = true;
         bottomj.set(`${policy_}`, (1 / (Math.max(5, (policy_ ? 2 : 3)))));
      penaltyN.set(ballA, ballA.length);
      if (catalogs) {
         break;
      }
   } while (catalogs && (4 < lessg));
      return recommendations[
        Math.floor(Math.random() * recommendations.length)
      ];
    }
  }, [recommendations]);

  return (
    <View style={{ ...styles.container, ...headerStyle }}>
      {logo ? logo : <Logo height={36} color={colors.primary} />}
      <SearchBar
        onPress={() =>
          navigator.navigate("搜索", { initial: randomVod?.vod_name })
        }
        defaultValue={randomVod !== undefined ? randomVod.vod_name : ""}
      />
      {SHOW_ZF_CONST &&
        <TouchableOpacity
          onPress={() => {
            navigator.navigate("付费VIP");
            
            
            
            
            
          }}
        >
          <VipEntry height={36} />
        </TouchableOpacity>
      }
    </View>
  );
}

export default memo(MainHeader);

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 2,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
});
