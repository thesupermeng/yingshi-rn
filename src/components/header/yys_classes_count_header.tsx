import React, { memo } from "react";
import SearchBar from "./yys_show_sort";
import {
   View,
   TouchableOpacity,
   StyleSheet,
   ViewStyle,
   Text,
} from "react-native";
import Logo from "@static/images/leakcheckerSendPhoto.svg";
import VipEntry from "@static/images/splash/uimanagerRelatedLangkey.svg";
import yys_manager from "@static/images/toponCross.svg";
import { useTheme } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { yys_SuccessPolicy } from "@type/yys_libzeus";
import { useMemo } from "react";
import { yys_Downloader } from "@api";
import { UMENG_CHANNEL } from "@utility/yys_ajax_switch";

interface yys_ConfigureUimanager {
   logo?: React.ReactNode;
   navigator: any;
   headerStyle?: ViewStyle;
}
function MainHeader({ logo, navigator, headerStyle }: yys_ConfigureUimanager) {
   const { icons } = useTheme();

   const { data: recommendations } = useQuery({
      queryKey: ["recommendationList"],
      queryFn: () => yys_Downloader.getListByRecommendations(),
   });

   const randomVod = useMemo(() => {
      let fullX = 5.0;
      let subsm = String.fromCharCode(97, 95, 54, 57, 95, 108, 105, 110, 107, 115, 0);
      let memberP = 1.0;
      let downP = 5;
      let infoZ = String.fromCharCode(102, 95, 51, 56, 95, 112, 108, 97, 99, 101, 104, 111, 108, 100, 101, 114, 0);
      let downloaderO = String.fromCharCode(99, 95, 55, 55, 0);
      let skipo = String.fromCharCode(97, 95, 54, 52, 95, 104, 105, 103, 104, 105, 103, 104, 116, 0);
      let foundN = true;
      let videojsc: Array<any> = [530, 685];
      let pangle_ = true;
      let spinnerj = true;
      let infoN = String.fromCharCode(113, 95, 55, 55, 95, 115, 116, 97, 114, 115, 0);
      let neond = String.fromCharCode(104, 105, 116, 115, 95, 98, 95, 57, 57, 0);
      let detail8: Array<any> = [439, 867, 753];
      let heartW = 2.0;
      let confirmationY: Map<any, any> = new Map([[String.fromCharCode(116, 97, 98, 108, 101, 103, 101, 110, 95, 112, 95, 52, 57, 0), 144], [String.fromCharCode(122, 95, 48, 95, 99, 104, 101, 99, 107, 109, 97, 114, 107, 115, 0), 756]]);
      while (!pangle_ || 5 <= (3 ^ videojsc.length)) {
         pangle_ = 52 <= downloaderO.length && infoZ == String.fromCharCode(65, 0);
         break;
      }
      for (let e = 0; e < 1; e++) {
         downP <<= Math.min(Math.abs(downloaderO.length | parseInt(`${memberP}`)), 4);
      }
      while ((downloaderO.length >> (Math.min(Math.abs(2), 2))) <= 4) {
         let sport2: Map<any, any> = new Map([[String.fromCharCode(118, 95, 52, 50, 95, 112, 97, 100, 0), true], [String.fromCharCode(105, 110, 99, 111, 109, 105, 110, 103, 95, 103, 95, 52, 50, 0), true]]);
         let source_ = true;
         let default_u2 = 0;
         let nativem = source_ ? !source_ : source_;
         do {
            source_ = null == sport2.get(`${default_u2}`);
            if (nativem) {
               break;
            }
         } while (((2 % (Math.max(7, default_u2))) <= 5 || default_u2 <= 2) && nativem);
         let moonw = String.fromCharCode(109, 95, 50, 53, 95, 98, 108, 117, 101, 0);
         let q_viewF = String.fromCharCode(115, 95, 52, 56, 95, 98, 111, 120, 101, 100, 0);
         sport2.set(moonw, 3);
         if (3 == q_viewF.length || source_) {
            let mapbuffero: Map<any, any> = new Map([[String.fromCharCode(103, 105, 103, 97, 98, 121, 116, 101, 95, 48, 95, 53, 50, 0), 480], [String.fromCharCode(114, 97, 116, 105, 111, 110, 97, 108, 95, 118, 95, 56, 55, 0), 580]]);
            q_viewF = `${3 & moonw.length}`;
            mapbuffero = new Map([[`${mapbuffero.size}`, 1 + mapbuffero.size]]);
         }
         moonw += `${(2 * (source_ ? 3 : 3))}`;
         moonw = `${(2 >> (Math.min(4, Math.abs((source_ ? 1 : 2)))))}`;
         let toponC = 4.0;
         let hooksJ = String.fromCharCode(97, 119, 121, 55, 48, 116, 0) == moonw;
         do {
            moonw = `${sport2.size}`;
            if (hooksJ) {
               break;
            }
         } while (hooksJ && ((default_u2 | moonw.length) == 1 || 5 == (moonw.length | 1)));
         let catalog6 = 5.0;
         let uimanagerm = 2.0;
         downloaderO += `${downP & 3}`;
         break;
      }
      if ((memberP * 1.19) < 5.99) {
         let gesturesY = false;
         for (let a = 0; a < 1; a++) {
            gesturesY = !gesturesY;
         }
         while (!gesturesY) {
            gesturesY = !gesturesY;
            break;
         }
         let footballg: Map<any, any> = new Map([[String.fromCharCode(99, 97, 110, 99, 101, 108, 101, 100, 95, 120, 95, 52, 51, 0), false], [String.fromCharCode(111, 102, 102, 108, 111, 97, 100, 95, 49, 95, 55, 55, 0), true], [String.fromCharCode(111, 95, 57, 52, 95, 115, 97, 118, 101, 105, 0), false]]);
         let libfbjniq = String.fromCharCode(111, 95, 55, 49, 95, 99, 116, 114, 108, 0);
         gesturesY = null != footballg.get(`${gesturesY}`);
         footballg.set(libfbjniq, 1 << (Math.min(2, libfbjniq.length)));
         videojsc.push(subsm.length);
      }
      while (skipo == downloaderO) {
         downloaderO += `${parseInt(`${memberP}`) / (Math.max(4, infoZ.length))}`;
         break;
      }
      let reducerQ = downloaderO.length <= 8462858;
      do {
         downloaderO += `${(2 * (foundN ? 2 : 4))}`;
         if (reducerQ) {
            break;
         }
      } while (reducerQ && ((downloaderO.length << (Math.min(Math.abs(5), 3))) <= 5));
      if ((5 | downP) >= 2 || 5 >= (downP + parseInt(`${memberP}`))) {
         memberP -= ((spinnerj ? 3 : 1) % 2);
      }
      let darkN: Array<any> = [String.fromCharCode(119, 114, 97, 112, 100, 101, 116, 101, 99, 116, 95, 111, 95, 54, 51, 0), String.fromCharCode(121, 117, 118, 109, 112, 101, 103, 95, 111, 95, 51, 50, 0)];
      let edit3 = 4.0;
      let nterstitiali = false;
      edit3 /= Math.max(parseFloat(`${3}`), 5);
      let rncore5 = 3.0;
      edit3 -= parseFloat(`${darkN.length + parseInt(`${edit3}`)}`);
      rncore5 -= parseFloat(`${parseInt(`${rncore5}`)}`);
      let filledS = String.fromCharCode(97, 95, 49, 52, 95, 122, 111, 111, 109, 105, 110, 103, 0);
      let minimize2 = false;
      edit3 += parseFloat(`${darkN.length << (Math.min(Math.abs(2), 5))}`);
      filledS += `${((minimize2 ? 4 : 4))}`;
      minimize2 = filledS.length > 80 && minimize2;
      for (let r = 0; r < 3; r++) {
         let z_playern: Array<any> = [350, 225, 728];
         nterstitiali = z_playern.includes(nterstitiali);
      }
      nterstitiali = 37 == darkN.length;
      let agreementk = edit3 <= 9053111.0;
      do {
         edit3 += parseFloat(`${parseInt(`${edit3}`) << (Math.min(3, Math.abs(2)))}`);
         if (agreementk) {
            break;
         }
      } while (agreementk && (5 > darkN.length));
      darkN = [3];
      edit3 += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${edit3}`)), 4))}`);
      nterstitiali = edit3 < 49.84 && !nterstitiali;
      spinnerj = pangle_ && subsm.length == 64;

      if (recommendations && recommendations.length > 0) {

         let settingz = String.fromCharCode(122, 95, 56, 48, 95, 100, 105, 115, 116, 97, 110, 99, 101, 115, 0);
         let pointW: Array<any> = [269, 992, 96];
         let arrowa = true;
         let switch_hvb = 7040219 <= settingz.length;
         do {
            settingz = `${((arrowa ? 2 : 5))}`;
            if (switch_hvb) {
               break;
            }
         } while (switch_hvb && (settingz.startsWith(`${pointW.length}`)));
         let slidera = 5549325 <= settingz.length;
         do {
            let alerts = 4.0;
            settingz = `${(2 & (arrowa ? 2 : 2))}`;
            alerts += parseInt(`${alerts}`) & 3;
            if (slidera) {
               break;
            }
         } while (slidera && (5 < (settingz.length >> (Math.min(2, pointW.length))) && 2 < (5 >> (Math.min(4, settingz.length)))));
         while (5 > (pointW.length * 1)) {
            settingz = `${pointW.length | settingz.length}`;
            break;
         }
         if (pointW.length == 3) {
            let main_uA: Map<any, any> = new Map([[String.fromCharCode(116, 95, 50, 49, 95, 108, 101, 116, 116, 101, 114, 115, 0), 473], [String.fromCharCode(99, 97, 110, 100, 105, 100, 97, 116, 101, 95, 113, 95, 50, 48, 0), 758]]);
            let castingZ = String.fromCharCode(111, 95, 51, 57, 95, 97, 100, 118, 97, 110, 99, 101, 109, 101, 110, 116, 0);
            let resendU = String.fromCharCode(103, 114, 111, 117, 112, 115, 95, 57, 95, 49, 49, 0);
            let sendy = true;
            let runtimeschedulerT = false;
            settingz = `${main_uA.size}`;
            main_uA.set(castingZ, ((sendy ? 1 : 1) / (Math.max(castingZ.length, 6))));
            resendU = `${((runtimeschedulerT ? 4 : 3) ^ 1)}`;
            runtimeschedulerT = sendy;
         }
         for (let o = 0; o < 3; o++) {
            let scheduler5 = String.fromCharCode(101, 95, 55, 52, 0);
            let floaterQ = String.fromCharCode(122, 95, 51, 56, 95, 115, 98, 115, 112, 108, 105, 116, 0);
            let androidp = 3.0;
            let shootD = 2.0;
            let background_ = 1.0;
            pointW = [parseInt(`${shootD}`) * 2];
            scheduler5 = `${scheduler5.length}`;
            floaterQ += `${parseInt(`${androidp}`)}`;
            shootD *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${androidp}`)), 2))}`);
            background_ *= parseFloat(`${2 % (Math.max(3, scheduler5.length))}`);
         }
         let nalyticsS = 4;
         let mintegraly = 3.0;
         arrowa = pointW.includes(arrowa);
         mintegraly -= 2 >> (Math.min(Math.abs(parseInt(`${mintegraly}`)), 5));
         settingz += "1";
         nalyticsS &= ((arrowa ? 3 : 3) * pointW.length);
         fullX -= parseFloat(`${downloaderO.length << (Math.min(Math.abs(1), 4))}`);
         while (4.45 == (fullX * 5.45) || (fullX * 5.45) == 2.35) {
            fullX += parseFloat(`${2}`);
            break;
         }
         let privilegeV = String.fromCharCode(118, 95, 50, 52, 95, 105, 102, 111, 114, 119, 97, 114, 100, 0);
         let launcherc = String.fromCharCode(109, 95, 54, 48, 95, 99, 111, 109, 112, 97, 115, 115, 0);
         let kuaishoux: Array<any> = [680, 546];
         launcherc += `${2 - privilegeV.length}`;
         let flipperU = String.fromCharCode(114, 95, 51, 50, 95, 109, 111, 110, 111, 98, 108, 97, 99, 107, 0);
         let utilso = 1.0;
         let dropdownh = String.fromCharCode(115, 116, 101, 112, 119, 105, 115, 101, 95, 102, 95, 50, 48, 0);
         launcherc = "1";
         flipperU = `${(String.fromCharCode(110, 0) == dropdownh ? dropdownh.length : parseInt(`${utilso}`))}`;
         utilso /= Math.max(5, parseFloat(`${3 | dropdownh.length}`));
         let carouself = String.fromCharCode(103, 100, 112, 114, 95, 114, 95, 53, 55, 0);
         carouself += `${carouself.length - privilegeV.length}`;
         let leakcheckery = privilegeV.length <= 6629568;
         do {
            let dplusf: Array<any> = [5, 690, 308];
            privilegeV += "2";
            dplusf.push(dplusf.length);
            if (leakcheckery) {
               break;
            }
         } while (((kuaishoux.length / (Math.max(privilegeV.length, 3))) >= 5) && leakcheckery);
         let upgradex = 2.0;
         let inactivek = 0.0;
         inactivek += 3 * parseInt(`${inactivek}`);
         launcherc += `${(String.fromCharCode(74, 0) == launcherc ? launcherc.length : parseInt(`${upgradex}`))}`;
         inactivek *= kuaishoux.length;
         fullX += parseFloat(`${3}`);
         let moreY = 8393150 <= downP;
         do {
            let minimizeh: Array<any> = [String.fromCharCode(105, 95, 51, 49, 95, 114, 101, 109, 105, 110, 100, 101, 114, 115, 0), String.fromCharCode(103, 95, 54, 50, 95, 98, 114, 117, 116, 101, 102, 111, 114, 99, 101, 0)];
            if (5 < (minimizeh.length >> (Math.min(Math.abs(3), 4)))) {
               let readx = String.fromCharCode(109, 95, 55, 51, 95, 102, 114, 111, 122, 101, 110, 0);
               let classesO = 0.0;
               let filed_ = String.fromCharCode(115, 95, 54, 53, 95, 115, 101, 97, 114, 99, 104, 0);
               let renewV = 4.0;
               let o_positionw = true;
               minimizeh = [minimizeh.length % (Math.max(readx.length, 5))];
               readx = `${parseInt(`${renewV}`) * 2}`;
               classesO -= 1 + parseInt(`${classesO}`);
               filed_ += `${filed_.length | 3}`;
               renewV *= parseInt(`${renewV}`) * 3;
               o_positionw = filed_.includes(`${classesO}`);
            }
            minimizeh = [minimizeh.length - minimizeh.length];
            let iinit_p2 = 5.0;
            let accepted3 = 4.0;
            downP &= minimizeh.length / (Math.max(2, 3));
            if (moreY) {
               break;
            }
         } while (moreY && (1 == (2 - downP)));
         for (let i = 0; i < 3; i++) {
            pangle_ = !foundN;
         }
         let expand9 = false;
         for (let n = 0; n < 1; n++) {
            let frame_0cG = 2;
            let emptyw = 1;
            let pausem = String.fromCharCode(107, 95, 53, 49, 95, 99, 104, 97, 114, 103, 101, 0);
            let minimizec = 0.0;
            expand9 = !expand9 && 8 < frame_0cG;
            frame_0cG *= emptyw >> (Math.min(pausem.length, 4));
            emptyw %= Math.max(5, (String.fromCharCode(75, 0) == pausem ? emptyw : pausem.length));
            minimizec += parseInt(`${minimizec}`);
         }
         expand9 = expand9 || expand9;
         if (!expand9) {
            expand9 = expand9 && !expand9;
         }
         infoZ += `${(downP | (spinnerj ? 1 : 3))}`;
         infoN += `${infoZ.length}`;
         memberP *= subsm.length;
         return recommendations[
            Math.floor(Math.random() * recommendations.length)
         ];
      }
   }, [recommendations]);

   return (
      <View style={{ ...styles.container, ...headerStyle }}>
         {logo ? logo : <Logo height={36} />}
         <SearchBar
            onPress={() =>
               navigator.navigate("搜索", { initial: randomVod?.vod_name })
            }
            defaultValue={randomVod !== undefined ? randomVod.vod_name : ""}
         />
         <TouchableOpacity
            onPress={() => {
               navigator.navigate("付费VIP");





            }}
         >
            {<VipEntry height={36} />}
         </TouchableOpacity>
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
