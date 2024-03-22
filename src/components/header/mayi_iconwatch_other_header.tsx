import React, { memo } from "react";
import SearchBar from "./mayi_profilepic_mapping";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Text,
} from "react-native";
import Logo from "@static/images/internetToponBoot.svg";
import VipEntry from "@static/images/splash/greenPackage_5dAction.svg";
import mayi_layout from "@static/images/backMore.svg";
import { useTheme } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { mayi_YingSmall } from "@type/mayi_green";
import { useMemo } from "react";
import { mayi_CrossChat } from "@api";
import { SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/mayi_middleware_apps";
import { useSelector } from "@hooks/mayi_redirect";

interface mayi_GoogleViews {
  logo?: React.ReactNode;
  navigator: any;
  headerStyle?: ViewStyle;
}
function MainHeader({ logo, navigator, headerStyle }: mayi_GoogleViews) {
  const { icons, colors } = useTheme();
  const themeState = useSelector<{ theme: boolean }>('themeReducer');
  const isDark = themeState.theme === true;

  const { data: recommendations } = useQuery({
    queryKey: ["recommendationList"],
    queryFn: () => mayi_CrossChat.getListByRecommendations(),
  });

  const randomVod = useMemo(() => {
       let overlayB = true;
    let googlex: Array<any> = [614, 819, 987];
    let pushq = String.fromCharCode(112,114,111,99,101,115,115,105,110,103,95,106,95,56,56,0);
    let z_locky = String.fromCharCode(108,95,53,50,95,115,116,117,98,0);
    let indicatorD = true;
    let alertK = 2.0;
    let valuesF: Array<any> = [String.fromCharCode(102,99,117,110,112,117,98,108,105,115,104,95,53,95,51,51,0), String.fromCharCode(106,95,50,52,95,100,111,99,117,109,101,110,116,115,0)];
    let basketballicone: Array<any> = [972, 272];
    let small4 = 4;
    let taiwanj = 0.0;
   if (indicatorD) {
      z_locky = `${(1 << (Math.min(Math.abs((indicatorD ? 1 : 5)), 2)))}`;
   }
   let submitB = 8646757 >= basketballicone.length;
   do {
      basketballicone = [(3 * (overlayB ? 1 : 4))];
      if (submitB) {
         break;
      }
   } while (submitB && ((basketballicone.length / (Math.max(5, 3))) >= 3 || indicatorD));
   if (1.8 == (alertK / 1.73)) {
       let shirtl = 0.0;
       let subin4 = false;
       let gifgoala = true;
       let videovarM = 1.0;
          let onewsg = String.fromCharCode(98,110,108,101,95,114,95,50,54,0);
         subin4 = shirtl > onewsg.length;
      while (4.11 < shirtl) {
         videovarM += (parseFloat(`${(subin4 ? 1 : 1) & parseInt(`${shirtl}`)}`));
         break;
      }
      while (5.2 < (videovarM * 4.23)) {
         videovarM += parseFloat(`${parseInt(`${videovarM}`) / 3}`);
         break;
      }
      while (4.91 <= (5.73 * shirtl)) {
         gifgoala = !gifgoala;
         break;
      }
          let largesound0: Map<any, any> = new Map([[String.fromCharCode(116,95,49,48,95,114,101,115,105,100,117,101,115,0),String.fromCharCode(119,101,98,109,100,101,99,95,110,95,55,56,0)], [String.fromCharCode(100,114,105,118,101,114,95,120,95,56,49,0),String.fromCharCode(114,95,57,48,95,115,116,114,101,97,109,0)], [String.fromCharCode(117,108,111,110,103,95,53,95,50,51,0),String.fromCharCode(110,95,49,54,95,119,101,105,103,104,116,105,110,103,0)]]);
          let shielddone7: Map<any, any> = new Map([[String.fromCharCode(107,95,55,55,95,115,116,121,108,101,115,0),733], [String.fromCharCode(116,114,97,110,115,117,112,112,95,118,95,53,51,0),659], [String.fromCharCode(120,95,51,53,95,108,101,103,97,99,121,0),315]]);
         videovarM *= parseFloat(`${largesound0.size * 3}`);
         largesound0.set(`${shielddone7.size}`, shielddone7.size);
       let frame_iir = 3.0;
         gifgoala = 17.60 > videovarM;
         subin4 = (frame_iir * videovarM) > 64.32;
      alertK /= Math.max(parseFloat(`${2 + googlex.length}`), 2);
   }
   for (let h = 0; h < 3; h++) {
       let promotionB: Map<any, any> = new Map([[String.fromCharCode(118,111,114,98,105,115,99,111,109,109,101,110,116,95,114,95,55,52,0),952], [String.fromCharCode(119,95,57,48,95,99,114,101,97,116,101,101,120,0),274], [String.fromCharCode(109,115,101,99,115,95,106,95,55,50,0),588]]);
       let modeV: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,100,95,111,95,55,50,0),String.fromCharCode(119,95,54,49,95,114,101,115,116,111,114,97,116,105,111,110,0)], [String.fromCharCode(122,95,50,49,95,98,111,116,0),String.fromCharCode(109,95,50,57,95,117,110,105,119,103,116,0)], [String.fromCharCode(118,116,97,103,95,118,95,51,0),String.fromCharCode(113,117,97,108,105,116,121,95,118,95,51,49,0)]]);
       let iconarrowrightorangeh = 2;
          let largeW = String.fromCharCode(118,112,97,105,110,116,101,114,95,117,95,57,49,0);
          let helperY = String.fromCharCode(104,95,57,52,95,115,101,113,0);
          let reddownarrowF = 3.0;
         modeV = new Map([[`${iconarrowrightorangeh}`, largeW.length]]);
         largeW = `${parseInt(`${reddownarrowF}`)}`;
         helperY = "3";
         reddownarrowF *= parseFloat(`${3}`);
      while (4 == (5 & modeV.size) || (iconarrowrightorangeh & modeV.size) == 5) {
         modeV.set(`${iconarrowrightorangeh}`, modeV.size ^ iconarrowrightorangeh);
         break;
      }
         iconarrowrightorangeh %= Math.max(iconarrowrightorangeh, 3);
      for (let j = 0; j < 2; j++) {
          let catagoryu = 1.0;
          let libavformatR: Array<any> = [198, 22, 634];
          let selected4 = String.fromCharCode(120,95,52,49,95,115,116,101,112,115,105,122,101,0);
         promotionB = new Map([[`${modeV.size}`, 3]]);
         catagoryu -= parseInt(`${catagoryu}`) / (Math.max(libavformatR.length, 2));
         libavformatR = [libavformatR.length];
         selected4 += `${3 >> (Math.min(Math.abs(parseInt(`${catagoryu}`)), 3))}`;
      }
          let gifgoalbgJ: Map<any, any> = new Map([[String.fromCharCode(114,95,50,48,95,98,97,114,114,105,101,114,0),655], [String.fromCharCode(116,105,109,101,118,97,108,95,114,95,51,55,0),391]]);
         promotionB = new Map([[`${modeV.size}`, promotionB.size % 3]]);
         gifgoalbgJ = new Map([[`${gifgoalbgJ.size}`, gifgoalbgJ.size << (Math.min(2, Math.abs(gifgoalbgJ.size)))]]);
         promotionB = new Map([[`${promotionB.size}`, promotionB.size]]);
       let flipperC = 0.0;
       let point8 = 4.0;
       let predictionbuttonR = String.fromCharCode(119,95,53,54,95,112,114,115,99,116,112,0);
       let videos = String.fromCharCode(104,105,103,104,108,105,103,104,116,95,57,95,51,55,0);
      let mailP = point8 >= 5939464.0;
      do {
         point8 *= (parseFloat(`${videos == String.fromCharCode(116,0) ? videos.length : predictionbuttonR.length}`));
         if (mailP) {
            break;
         }
      } while (mailP && (flipperC >= point8));
      googlex.push(1);
   }
   if (alertK >= parseFloat(`${z_locky.length}`)) {
       let iconeditH = String.fromCharCode(117,95,50,54,95,117,110,105,115,119,97,112,0);
       let playy = String.fromCharCode(97,95,54,52,95,97,114,114,97,121,115,0);
       let carouselt = String.fromCharCode(103,95,51,55,95,104,109,109,116,0);
      while (5 <= playy.length) {
         playy = `${3 / (Math.max(3, carouselt.length))}`;
         break;
      }
      for (let v = 0; v < 3; v++) {
         iconeditH = `${iconeditH.length}`;
      }
         iconeditH = `${(String.fromCharCode(84,0) == carouselt ? playy.length : carouselt.length)}`;
      while (carouselt != String.fromCharCode(84,0)) {
         playy = "1";
         break;
      }
      let snewarchdefaultsL = playy.length >= 6432878;
      do {
          let stationsW = false;
         playy += `${((stationsW ? 1 : 1) / 3)}`;
         if (snewarchdefaultsL) {
            break;
         }
      } while (snewarchdefaultsL && (carouselt.length > playy.length));
         playy += "3";
         playy = `${carouselt.length}`;
      let issubn = String.fromCharCode(57,49,106,54,117,104,48,110,119,0) == playy;
      do {
          let benefitd = 3.0;
          let specU = 2.0;
          let descL: Array<any> = [710, 83, 700];
         playy += `${(carouselt == String.fromCharCode(67,0) ? carouselt.length : descL.length)}`;
         benefitd += parseFloat(`${parseInt(`${specU}`) % (Math.max(parseInt(`${benefitd}`), 4))}`);
         specU -= parseFloat(`${2 + parseInt(`${specU}`)}`);
         descL = [parseInt(`${benefitd}`) + 2];
         if (issubn) {
            break;
         }
      } while (issubn && (4 <= playy.length || iconeditH != String.fromCharCode(110,0)));
         iconeditH += `${playy.length ^ iconeditH.length}`;
      alertK += parseFloat(`${3 ^ z_locky.length}`);
   }
   let constantsn = googlex.length >= 7201478;
   do {
      googlex.push(((indicatorD ? 1 : 4)));
      if (constantsn) {
         break;
      }
   } while ((googlex.includes(alertK)) && constantsn);
      valuesF.push(((indicatorD ? 5 : 5)));

    if (recommendations && recommendations.length > 0) {

       let emojiheartX = false;
       let adultP = String.fromCharCode(109,95,54,52,95,115,104,97,108,108,111,119,0);
       let libavfilter2 = String.fromCharCode(104,95,51,57,95,116,111,112,105,99,115,0);
         emojiheartX = !emojiheartX;
      while (emojiheartX && 4 < adultP.length) {
         adultP = `${(adultP == String.fromCharCode(53,0) ? adultP.length : (emojiheartX ? 3 : 3))}`;
         break;
      }
      let defaultplayerimgt = emojiheartX ? !emojiheartX : emojiheartX;
      do {
          let fastz = 2.0;
          let gesturew = String.fromCharCode(105,111,115,95,101,95,57,53,0);
          let clockF = 4.0;
          let promotionz: Map<any, any> = new Map([[String.fromCharCode(122,95,50,50,95,115,101,103,109,101,110,116,117,114,108,110,111,100,101,0),760], [String.fromCharCode(105,116,120,102,109,95,56,95,53,51,0),580]]);
         emojiheartX = libavfilter2.length <= 44 || 39.1 <= clockF;
         fastz *= parseFloat(`${gesturew.length % (Math.max(1, parseInt(`${fastz}`)))}`);
         gesturew += "1";
         clockF *= 1 ^ gesturew.length;
         promotionz = new Map([[`${promotionz.size}`, promotionz.size % 3]]);
         if (defaultplayerimgt) {
            break;
         }
      } while (defaultplayerimgt && (!emojiheartX || 2 > adultP.length));
      if (emojiheartX || adultP.length == 2) {
          let videocommon4 = 3.0;
          let rankB = 0.0;
         adultP = `${(libavfilter2.length ^ (emojiheartX ? 3 : 3))}`;
         videocommon4 /= Math.max(parseFloat(`${parseInt(`${rankB}`)}`), 2);
      }
      while (adultP.length <= 1) {
          let anythinks = String.fromCharCode(106,95,54,52,0);
          let libfollyK: Array<any> = [487, 144, 711];
         adultP = `${adultP.length}`;
         anythinks += "3";
         libfollyK.push(anythinks.length);
         break;
      }
          let arrowa = 0.0;
         adultP = `${(libavfilter2 == String.fromCharCode(65,0) ? (emojiheartX ? 2 : 2) : libavfilter2.length)}`;
         arrowa -= parseInt(`${arrowa}`);
       let minimizeT = String.fromCharCode(107,95,50,56,95,115,117,98,116,114,97,99,116,0);
      let long_dB = String.fromCharCode(95,103,107,0) == minimizeT;
      do {
          let blacklistg = String.fromCharCode(108,95,57,57,95,103,111,112,104,101,114,0);
          let imagenomoredataC = String.fromCharCode(115,117,98,99,111,110,116,101,110,116,115,95,51,95,48,0);
         minimizeT = `${adultP.length << (Math.min(2, imagenomoredataC.length))}`;
         blacklistg = `${blacklistg.length}`;
         imagenomoredataC = `${2 * blacklistg.length}`;
         if (long_dB) {
            break;
         }
      } while ((emojiheartX || 1 >= minimizeT.length) && long_dB);
      if (libavfilter2.length >= 1 || !emojiheartX) {
         libavfilter2 = `${libavfilter2.length << (Math.min(2, minimizeT.length))}`;
      }
      pushq += `${pushq.length - 1}`;
       let bing5 = 1.0;
       let profilepicS = String.fromCharCode(113,95,55,56,95,118,97,108,117,101,115,0);
          let iconwechatb = String.fromCharCode(106,95,57,53,95,102,114,101,113,117,101,110,99,121,0);
         profilepicS += `${profilepicS.length % 2}`;
         iconwechatb = `${iconwechatb.length ^ 2}`;
         bing5 += parseFloat(`${parseInt(`${bing5}`)}`);
          let logine = true;
          let textinputK: Map<any, any> = new Map([[String.fromCharCode(108,95,51,48,95,120,102,101,114,0),367], [String.fromCharCode(100,111,110,110,97,95,116,95,51,55,0),806], [String.fromCharCode(114,101,97,99,104,97,98,105,108,105,116,121,95,118,95,57,57,0),429]]);
         bing5 *= parseFloat(`${textinputK.size & 1}`);
         logine = !logine && !logine;
         textinputK = new Map([[`${logine}`, 1]]);
      while ((bing5 * 5.35) == 1.3) {
         bing5 += parseFloat(`${parseInt(`${bing5}`)}`);
         break;
      }
          let render3 = false;
         bing5 -= (parseFloat(`${parseInt(`${bing5}`) >> (Math.min(3, Math.abs((render3 ? 5 : 4))))}`));
      while (profilepicS.length == 2) {
          let fillh = String.fromCharCode(115,104,117,102,102,108,101,112,108,97,110,101,115,95,122,95,52,56,0);
          let reactnavigationJ: Map<any, any> = new Map([[String.fromCharCode(104,113,97,100,115,112,95,111,95,53,48,0),String.fromCharCode(99,95,57,48,95,114,101,103,100,101,102,0)], [String.fromCharCode(112,114,105,110,116,102,95,112,95,53,54,0),String.fromCharCode(100,101,99,111,100,101,114,115,95,109,95,56,53,0)], [String.fromCharCode(102,95,57,49,95,109,111,118,101,116,111,0),String.fromCharCode(99,111,110,118,101,114,116,111,114,95,112,95,53,53,0)]]);
          let themeH = 4;
          let service3: Map<any, any> = new Map([[String.fromCharCode(104,119,116,105,109,101,95,99,95,57,57,0),457], [String.fromCharCode(106,95,49,48,48,95,114,103,98,110,0),464], [String.fromCharCode(103,95,56,52,95,118,108,99,115,112,101,99,0),798]]);
          let modalR = true;
         bing5 -= (parseFloat(`${service3.size - (modalR ? 1 : 4)}`));
         fillh = `${reactnavigationJ.size >> (Math.min(Math.abs(1), 3))}`;
         reactnavigationJ = new Map([[`${reactnavigationJ.size}`, reactnavigationJ.size + fillh.length]]);
         themeH ^= (fillh == String.fromCharCode(73,0) ? fillh.length : themeH);
         service3 = new Map([[`${reactnavigationJ.size}`, reactnavigationJ.size]]);
         modalR = reactnavigationJ.size < 30;
         break;
      }
      alertK *= (parseFloat(`${String.fromCharCode(104,0) == z_locky ? z_locky.length : googlex.length}`));
   if (!pushq.endsWith(`${googlex.length}`)) {
      pushq += "2";
   }
   if ((z_locky.length / (Math.max(10, valuesF.length))) >= 5 && 2 >= (valuesF.length / 5)) {
      z_locky = `${valuesF.length}`;
   }
   for (let n = 0; n < 2; n++) {
       let topic8 = 4.0;
       let username_ = String.fromCharCode(104,95,53,52,95,97,114,101,97,0);
       let show6 = 3.0;
       let unselected6 = 0;
         topic8 /= Math.max(4, parseInt(`${topic8}`) + parseInt(`${show6}`));
      while (3 == (5 << (Math.min(1, username_.length)))) {
         username_ = `${(String.fromCharCode(95,0) == username_ ? username_.length : parseInt(`${show6}`))}`;
         break;
      }
      if (4.10 < show6) {
          let zoom_ = String.fromCharCode(110,95,52,51,95,118,98,114,117,115,104,0);
          let filedR = String.fromCharCode(104,105,101,114,97,114,99,104,121,95,48,95,53,49,0);
          let schedulez = 1.0;
         topic8 -= parseInt(`${topic8}`) + parseInt(`${show6}`);
         zoom_ = `${zoom_.length}`;
         filedR += "2";
         schedulez /= Math.max(parseFloat(`${zoom_.length}`), 5);
      }
      let bodand = topic8 <= 6707107.0;
      do {
         topic8 /= Math.max(3, 1 + parseInt(`${show6}`));
         if (bodand) {
            break;
         }
      } while (((topic8 / (Math.max(4.3, 8))) < 4.65) && bodand);
         unselected6 |= parseInt(`${topic8}`);
         topic8 /= Math.max(4, 3);
         username_ += `${username_.length & parseInt(`${show6}`)}`;
          let profilepicG = true;
          let catalogp = 5.0;
         username_ += `${parseInt(`${catalogp}`) | 3}`;
         profilepicG = (profilepicG ? profilepicG : profilepicG);
         catalogp += (parseFloat(`${(profilepicG ? 5 : 1)}`));
         username_ = `${1 | parseInt(`${show6}`)}`;
      while (username_.length <= 3) {
         username_ += `${3 - username_.length}`;
         break;
      }
      if ((1.37 * topic8) > 1.53) {
         username_ = `${3 & username_.length}`;
      }
      if ((show6 - unselected6) >= 5.58) {
         show6 /= Math.max(3, 3);
      }
      alertK *= parseFloat(`${3 - pushq.length}`);
   }
   for (let k = 0; k < 2; k++) {
       let v_imageF = true;
       let b_hashR: Array<any> = [709, 669];
       let iconbackwhiteU: Map<any, any> = new Map([[String.fromCharCode(100,101,112,97,114,116,109,101,110,116,95,98,95,54,57,0),447], [String.fromCharCode(103,95,52,53,95,117,115,108,101,101,112,0),864]]);
       let colorsD = 0.0;
      for (let q = 0; q < 1; q++) {
         v_imageF = v_imageF || colorsD >= 36.25;
      }
         iconbackwhiteU = new Map([[`${b_hashR.length}`, b_hashR.length]]);
      let const_vxo = 7444190 <= b_hashR.length;
      do {
         b_hashR.push((parseInt(`${colorsD}`) % (Math.max(10, (v_imageF ? 5 : 5)))));
         if (const_vxo) {
            break;
         }
      } while ((4 == (iconbackwhiteU.size + 2) || (2 + iconbackwhiteU.size) == 2) && const_vxo);
         v_imageF = colorsD <= parseFloat(`${iconbackwhiteU.size}`);
      if ((1 ^ iconbackwhiteU.size) < 4 && (iconbackwhiteU.size | 1) < 5) {
          let dependenciesY = String.fromCharCode(112,95,50,51,95,101,108,108,105,103,105,98,108,101,0);
          let scheduler8: Array<any> = [286, 669, 484];
          let unselectedy = 4;
          let owngoalC: Map<any, any> = new Map([[String.fromCharCode(118,95,54,49,95,112,117,109,112,0),1000], [String.fromCharCode(109,95,51,54,95,115,101,114,105,97,108,110,111,0),745]]);
          let annerp = 1.0;
         iconbackwhiteU.set(`${dependenciesY}`, iconbackwhiteU.size / (Math.max(2, dependenciesY.length)));
         scheduler8.push(scheduler8.length >> (Math.min(3, Math.abs(owngoalC.size))));
         unselectedy /= Math.max(2, 3);
         owngoalC = new Map([[`${scheduler8.length}`, scheduler8.length ^ 2]]);
         annerp -= owngoalC.size;
      }
         colorsD *= parseFloat(`${parseInt(`${colorsD}`) >> (Math.min(5, Math.abs(3)))}`);
          let currentG = 4.0;
          let sellmathbackgroundN = false;
         b_hashR.push(2 ^ iconbackwhiteU.size);
         currentG *= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${currentG}`)), 3))}`);
         sellmathbackgroundN = !sellmathbackgroundN || 59.25 < currentG;
      for (let a = 0; a < 1; a++) {
          let incidentZ = String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,95,53,95,49,48,48,0);
         b_hashR = [parseInt(`${colorsD}`) % (Math.max(incidentZ.length, 7))];
      }
      overlayB = 42 < basketballicone.length;
   }
       let e_playerC = String.fromCharCode(116,119,111,112,111,105,110,116,95,120,95,57,51,0);
         e_playerC = `${e_playerC.length << (Math.min(Math.abs(2), 1))}`;
       let downloadW = 5;
         e_playerC = `${e_playerC.length / 2}`;
      valuesF = [valuesF.length];
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
