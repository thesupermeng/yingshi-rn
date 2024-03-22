import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CTextInput } from "../atoms/textInput";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/mayi_iconorientation_chatroombackground";
import { updateUsernameState } from "@redux/actions/mayi_librrc";
import { mayi_Injury } from "@api";


interface mayi_GoogleViews {
    isVisible?: boolean;
    handleClose?: () => any;
    initialUsername: string,
    onSubmitSuccess?: (username: string) => void,
}

export const ChangeUsernameModal = ({
    isVisible = false,
    handleClose,
    initialUsername,
    onSubmitSuccess,
}: mayi_GoogleViews) => {
    const { textVariants } = useTheme();

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [username, setUsername] = useState(initialUsername);
    const [usernameErrMsg, setUsernameErrMsg] = useState<string | null>(null);

    const [isSubmitting, setSubmitting] = useState(false);

    const onUsernameChange = (value: any) => {
        setUsername(value);
        validateUsername(value.replace(/\s+/g, ""));
    };

    const validateUsername = (username: string): boolean => {
        if (2 <= username.length && username.length <= 18) {
            setUsernameErrMsg(null);
            return true;
        } else {
            setUsernameErrMsg("昵称必须介于2-18个字");
            return false;
        }
    }

    const resetForm = () => {
       let libreactnativejniH = false;
    let score_: Array<any> = [String.fromCharCode(112,97,115,115,105,118,101,95,110,95,49,53,0), String.fromCharCode(121,95,53,50,95,109,97,110,97,103,101,109,101,110,116,0), String.fromCharCode(103,95,51,49,95,112,117,98,108,105,99,105,116,121,0)];
    let playa = String.fromCharCode(101,116,104,101,114,116,117,112,108,105,115,95,57,95,49,56,0);
    let bufferg = 0;
    let tumbnailt = 4;
    let libavdevicep = String.fromCharCode(116,101,120,116,117,114,101,115,95,98,95,51,54,0);
    let confirmationU = String.fromCharCode(101,110,99,111,100,101,102,114,97,109,101,95,52,95,53,50,0);
    let predictionbannerM = 0.0;
    let minivodM = 2.0;
    let lineh = String.fromCharCode(99,95,54,56,95,119,109,97,100,97,116,97,0);
    let dplusX = 1;
    let carouselp = 3.0;
    let styleB = 0;
    let redirectB = true;
    let iconuserr = 3.0;
    let pageE = 3.0;
    let iconrightorangeG: Map<any, any> = new Map([[String.fromCharCode(103,95,56,49,95,109,117,108,116,105,112,108,121,0),String.fromCharCode(114,101,103,101,120,95,52,95,52,54,0)], [String.fromCharCode(116,95,53,57,95,109,111,100,101,109,0),String.fromCharCode(110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,95,106,95,54,49,0)], [String.fromCharCode(97,95,49,54,95,115,116,114,97,116,101,103,105,101,115,0),String.fromCharCode(111,98,118,105,111,117,115,108,121,95,52,95,57,48,0)]]);
    let becomet: Map<any, any> = new Map([[String.fromCharCode(107,95,50,50,0),486], [String.fromCharCode(106,100,99,111,101,102,99,116,95,98,95,51,55,0),156], [String.fromCharCode(105,110,116,114,97,120,109,98,117,118,95,106,95,56,52,0),691]]);
       let scrollviewk = String.fromCharCode(109,95,53,50,95,112,117,108,108,0);
       let detailA = 0.0;
       let humidityI = String.fromCharCode(120,95,50,54,95,114,101,99,97,108,99,117,108,97,116,105,111,110,0);
      for (let c = 0; c < 2; c++) {
         detailA -= parseInt(`${detailA}`) % 1;
      }
      while (4.64 >= detailA) {
          let robotox = 5;
         scrollviewk = `${scrollviewk.length + 3}`;
         robotox %= Math.max(3, robotox);
         break;
      }
      while (!scrollviewk.endsWith(`${humidityI.length}`)) {
          let iconfeedbacka = String.fromCharCode(97,98,115,95,114,95,54,0);
          let singapore8 = String.fromCharCode(101,95,51,53,95,100,105,115,99,111,118,101,114,101,100,0);
         scrollviewk += `${(String.fromCharCode(89,0) == humidityI ? humidityI.length : parseInt(`${detailA}`))}`;
         iconfeedbacka += `${iconfeedbacka.length}`;
         singapore8 += "1";
         break;
      }
      if (scrollviewk.includes(`${detailA}`)) {
         scrollviewk += `${humidityI.length / (Math.max(5, parseInt(`${detailA}`)))}`;
      }
       let default_pe4: Array<any> = [String.fromCharCode(108,111,110,103,109,117,108,97,119,95,109,95,52,0), String.fromCharCode(99,111,109,98,105,110,101,100,95,114,95,53,57,0)];
       let downp = String.fromCharCode(100,95,49,56,95,114,101,99,101,105,118,101,114,0);
         default_pe4.push(humidityI.length);
          let circlel = String.fromCharCode(100,121,97,100,105,99,95,119,95,55,54,0);
         scrollviewk = `${scrollviewk.length}`;
         circlel = `${2 ^ circlel.length}`;
      for (let n = 0; n < 2; n++) {
          let homeloadingI: Array<any> = [37, 289, 836];
          let videocommonp = String.fromCharCode(115,95,57,53,95,103,102,105,110,116,0);
         downp += `${videocommonp.length}`;
         homeloadingI.push(1 >> (Math.min(5, homeloadingI.length)));
         videocommonp += `${homeloadingI.length}`;
      }
      dplusX |= ((libreactnativejniH ? 2 : 3) + parseInt(`${detailA}`));
   while (1.45 < (5.3 * minivodM)) {
      minivodM -= ((libreactnativejniH ? 4 : 5) + parseInt(`${carouselp}`));
      break;
   }
   if (tumbnailt > 1) {
       let gmailG = true;
       let bridge7 = String.fromCharCode(122,95,54,55,95,97,114,103,120,0);
       let helperd = 2;
       let favicong = 4;
          let flipperJ = String.fromCharCode(107,95,56,57,95,108,108,118,105,100,100,115,112,0);
          let package_cvE = String.fromCharCode(120,95,51,95,109,99,100,99,0);
          let giftf = 4;
         helperd *= 1 >> (Math.min(1, flipperJ.length));
         flipperJ = `${package_cvE.length}`;
         package_cvE = "3";
         giftf /= Math.max(1, giftf / 3);
      while (5 < bridge7.length) {
          let iconfeedbackx = 5.0;
          let inactiver = false;
          let reactnativeratingsL = 3.0;
          let runtimeschedulerQ = true;
          let default_c1g = String.fromCharCode(104,105,115,116,111,103,114,97,109,115,95,50,95,50,54,0);
         bridge7 = `${((gmailG ? 1 : 1) | (inactiver ? 5 : 1))}`;
         iconfeedbackx /= Math.max(parseFloat(`${2 | parseInt(`${iconfeedbackx}`)}`), 5);
         inactiver = 58.30 >= (reactnativeratingsL - iconfeedbackx);
         reactnativeratingsL += (parseFloat(`${(runtimeschedulerQ ? 1 : 1) >> (Math.min(Math.abs(parseInt(`${iconfeedbackx}`)), 1))}`));
         runtimeschedulerQ = !runtimeschedulerQ;
         default_c1g += `${((runtimeschedulerQ ? 1 : 2) * parseInt(`${reactnativeratingsL}`))}`;
         break;
      }
          let orientationa = String.fromCharCode(122,95,57,51,95,113,117,97,108,105,102,121,0);
          let libjsijniprofilerf: Map<any, any> = new Map([[String.fromCharCode(106,95,50,55,95,102,114,111,110,116,0),206], [String.fromCharCode(116,104,114,109,97,116,95,114,95,52,53,0),834]]);
         favicong *= 3;
         orientationa += `${orientationa.length}`;
         libjsijniprofilerf = new Map([[`${libjsijniprofilerf.size}`, (String.fromCharCode(114,0) == orientationa ? libjsijniprofilerf.size : orientationa.length)]]);
         favicong |= favicong;
          let homeiconq = 4.0;
          let short_ra = String.fromCharCode(102,97,115,116,116,101,115,116,95,104,95,53,49,0);
         helperd ^= parseInt(`${homeiconq}`) << (Math.min(4, Math.abs(helperd)));
         homeiconq -= parseFloat(`${short_ra.length}`);
         short_ra += `${2 | short_ra.length}`;
      playa = `${parseInt(`${minivodM}`)}`;
   }
      libavdevicep = `${libavdevicep.length}`;
       let awayA = 5.0;
       let dialogl = true;
       let profileactives = 5;
         awayA += parseFloat(`${1 << (Math.min(Math.abs(profileactives), 4))}`);
      while (5.50 >= awayA) {
         awayA += parseFloat(`${parseInt(`${awayA}`) - 2}`);
         break;
      }
          let pageC = String.fromCharCode(104,111,114,105,122,111,110,116,97,108,108,121,95,114,95,52,50,0);
          let frame_hz = 5.0;
         profileactives |= pageC.length ^ profileactives;
         pageC = `${parseInt(`${frame_hz}`) * parseInt(`${frame_hz}`)}`;
         profileactives >>= Math.min(4, Math.abs(profileactives / 3));
         dialogl = !dialogl;
      let pages = dialogl ? !dialogl : dialogl;
      do {
          let images1 = 5;
          let promotionx = false;
          let downloadK: Map<any, any> = new Map([[String.fromCharCode(103,95,52,50,95,105,115,115,112,97,99,101,0),958], [String.fromCharCode(119,105,110,100,111,119,115,95,50,95,53,0),943]]);
          let telegrams: Map<any, any> = new Map([[String.fromCharCode(122,95,50,53,95,105,110,116,101,114,102,114,97,109,101,0),String.fromCharCode(118,109,97,116,114,105,120,95,55,95,49,57,0)], [String.fromCharCode(112,97,114,116,105,116,105,111,110,115,95,97,95,52,53,0),String.fromCharCode(97,95,57,51,95,114,111,117,110,100,117,112,0)], [String.fromCharCode(114,101,99,111,114,100,105,110,103,95,115,95,49,52,0),String.fromCharCode(100,105,115,107,95,56,95,54,55,0)]]);
          let graphd = String.fromCharCode(98,95,49,56,95,97,116,114,105,109,0);
         dialogl = !dialogl;
         images1 += telegrams.size * downloadK.size;
         promotionx = (downloadK.size | telegrams.size) >= 23;
         graphd = `${images1 * 2}`;
         if (pages) {
            break;
         }
      } while ((5.93 >= (3.29 + awayA) && dialogl) && pages);
      while (2.61 == (2.94 + awayA) && !dialogl) {
         dialogl = 47.44 > awayA || !dialogl;
         break;
      }
      let playercommonF = dialogl ? !dialogl : dialogl;
      do {
          let minii = String.fromCharCode(112,97,103,105,110,103,95,121,95,53,48,0);
          let upgradet = 2;
          let matchdetailbgC = String.fromCharCode(121,95,57,49,95,99,111,108,108,0);
         dialogl = matchdetailbgC.length == 29 || dialogl;
         minii = `${minii.length}`;
         upgradet |= upgradet << (Math.min(Math.abs(2), 1));
         matchdetailbgC = `${minii.length + 2}`;
         if (playercommonF) {
            break;
         }
      } while (playercommonF && ((awayA + 4.19) < 2.83 && awayA < 4.19));
      for (let y = 0; y < 1; y++) {
         awayA /= Math.max(parseFloat(`${parseInt(`${awayA}`) >> (Math.min(5, Math.abs(2)))}`), 5);
      }
      score_ = [bufferg >> (Math.min(Math.abs(2), 3))];
   if (carouselp < 4.53) {
      libreactnativejniH = bufferg <= parseInt(`${minivodM}`);
   }
   let lightT = 6721441.0 <= carouselp;
   do {
       let informationH: Array<any> = [888, 760, 125];
       let firebaseW = 4;
       let predictionbannersharedL: Map<any, any> = new Map([[String.fromCharCode(101,95,54,57,95,108,111,116,116,105,101,107,101,121,112,97,116,104,0),String.fromCharCode(122,95,54,55,95,109,97,112,112,101,114,0)], [String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,100,95,55,57,0),String.fromCharCode(116,119,111,108,111,111,112,95,105,95,53,0)], [String.fromCharCode(105,110,112,111,115,95,49,95,56,49,0),String.fromCharCode(98,95,51,49,95,99,104,114,111,110,111,0)]]);
       let sheet3: Array<any> = [String.fromCharCode(97,117,100,105,101,110,99,101,95,107,95,52,51,0), String.fromCharCode(120,95,56,50,95,105,110,105,116,105,97,116,101,100,0), String.fromCharCode(105,95,49,48,95,109,97,110,97,103,101,0)];
      while ((5 >> (Math.min(2, sheet3.length))) == 2 || (sheet3.length >> (Math.min(Math.abs(5), 4))) == 4) {
          let chatroombackgrounda: Map<any, any> = new Map([[String.fromCharCode(112,95,57,50,95,98,111,114,100,101,114,108,101,115,115,0),true ], [String.fromCharCode(105,95,50,50,95,105,110,116,101,114,99,101,112,116,0),false ], [String.fromCharCode(114,101,99,101,110,116,108,121,95,107,95,49,55,0),true ]]);
          let downloadedg: Map<any, any> = new Map([[String.fromCharCode(112,115,110,114,104,118,115,95,110,95,49,54,0),true ], [String.fromCharCode(100,115,100,112,99,109,95,50,95,57,51,0),false ], [String.fromCharCode(122,95,53,56,95,105,110,99,114,109,101,114,103,101,0),false ]]);
          let trophyH = String.fromCharCode(119,97,110,116,95,108,95,51,57,0);
          let types0 = true;
          let sliderY = false;
         sheet3 = [trophyH.length >> (Math.min(Math.abs(2), 5))];
         chatroombackgrounda.set(`${sliderY}`, (chatroombackgrounda.size & (sliderY ? 2 : 4)));
         downloadedg.set(`${types0}`, ((types0 ? 1 : 3) | 2));
         trophyH += "1";
         break;
      }
      let modeu = informationH.length <= 6451230;
      do {
         informationH = [2 & sheet3.length];
         if (modeu) {
            break;
         }
      } while (modeu && ((1 & informationH.length) < 5 || 2 < (1 & informationH.length)));
          let frame_jdO = false;
          let footballfiledlayoutX = 4.0;
          let graphicsj = 4.0;
         firebaseW &= predictionbannersharedL.size;
         frame_jdO = footballfiledlayoutX >= graphicsj;
         footballfiledlayoutX += parseFloat(`${1 - parseInt(`${footballfiledlayoutX}`)}`);
         graphicsj -= parseFloat(`${parseInt(`${footballfiledlayoutX}`) & 3}`);
      while ((1 & sheet3.length) < 1 || (sheet3.length & predictionbannersharedL.size) < 1) {
         predictionbannersharedL.set(`${firebaseW}`, predictionbannersharedL.size >> (Math.min(Math.abs(2), 4)));
         break;
      }
      for (let d = 0; d < 1; d++) {
         informationH.push(2);
      }
      for (let s = 0; s < 3; s++) {
         informationH = [1 | firebaseW];
      }
      if (5 == (predictionbannersharedL.size % 4)) {
          let modelse: Map<any, any> = new Map([[String.fromCharCode(103,95,55,53,95,103,119,101,105,0),String.fromCharCode(100,95,50,95,112,115,121,109,111,100,101,108,0)], [String.fromCharCode(109,105,99,114,111,115,111,102,116,95,101,95,49,48,48,0),String.fromCharCode(107,95,50,56,0)]]);
          let iconpipexpandv = 2;
          let iconarrowrighta = 4;
         predictionbannersharedL.set(`${firebaseW}`, sheet3.length ^ 3);
         modelse.set(`${iconarrowrighta}`, 3);
         iconpipexpandv ^= 1 | modelse.size;
         iconarrowrighta ^= iconarrowrighta + 3;
      }
      while (5 < (informationH.length ^ 1) || 1 < (predictionbannersharedL.size ^ informationH.length)) {
         informationH = [sheet3.length];
         break;
      }
         sheet3 = [2];
          let phoneshareT: Array<any> = [543, 577];
          let klevinx = String.fromCharCode(103,95,50,54,95,122,101,114,111,101,100,0);
         firebaseW <<= Math.min(4, Math.abs(klevinx.length * 3));
         phoneshareT = [phoneshareT.length | phoneshareT.length];
         klevinx = `${phoneshareT.length ^ phoneshareT.length}`;
         informationH = [informationH.length];
       let issubD = String.fromCharCode(108,111,116,116,105,101,95,54,95,48,0);
       let static_qs9 = String.fromCharCode(97,114,103,117,109,101,110,116,95,118,95,54,53,0);
      carouselp -= (parseFloat(`${(libreactnativejniH ? 3 : 2) + parseInt(`${carouselp}`)}`));
      if (lightT) {
         break;
      }
   } while (((4 >> (Math.min(4, Math.abs(bufferg)))) == 4 && (carouselp + 3.78) == 4.22) && lightT);
      tumbnailt += 1;
   for (let a = 0; a < 1; a++) {
      confirmationU += `${parseInt(`${predictionbannerM}`)}`;
   }
   for (let h = 0; h < 1; h++) {
       let volumeN: Array<any> = [747, 506, 77];
       let playn = false;
         volumeN = [2 + volumeN.length];
         playn = !playn;
          let inouttargetredk: Map<any, any> = new Map([[String.fromCharCode(107,110,111,98,95,99,95,48,0),767], [String.fromCharCode(111,112,101,114,97,116,111,114,115,95,107,95,51,49,0),730]]);
          let hometeamfield7 = 2;
         playn = !playn;
         inouttargetredk.set(`${hometeamfield7}`, hometeamfield7);
         playn = !playn;
          let smally = 3.0;
          let textinput7: Map<any, any> = new Map([[String.fromCharCode(119,95,53,95,99,108,101,97,114,0),437], [String.fromCharCode(116,105,109,101,102,105,108,116,101,114,95,103,95,55,56,0),380]]);
         playn = !playn;
         smally -= textinput7.size;
         textinput7 = new Map([[`${textinput7.size}`, parseInt(`${smally}`) + 1]]);
         volumeN.push(3);
      playa += `${((playn ? 1 : 5) + 2)}`;
   }
   for (let d = 0; d < 2; d++) {
      bufferg ^= 2;
   }
      libavdevicep += `${2 ^ playa.length}`;
   for (let g = 0; g < 1; g++) {
      libreactnativejniH = bufferg > tumbnailt;
   }
   while (2 < lineh.length) {
      libreactnativejniH = (lineh.length + minivodM) >= 62.20;
      break;
   }
       let stationu = String.fromCharCode(105,110,99,108,117,100,101,100,95,102,95,54,50,0);
       let circleD = 5;
      while ((1 * stationu.length) < 4 || 1 < (stationu.length * circleD)) {
         circleD <<= Math.min(4, Math.abs(circleD));
         break;
      }
         stationu += `${stationu.length * circleD}`;
         circleD |= 2 / (Math.max(9, circleD));
      for (let r = 0; r < 3; r++) {
         stationu = `${(stationu == String.fromCharCode(107,0) ? stationu.length : circleD)}`;
      }
      let selectedV = String.fromCharCode(98,95,57,101,116,48,55,49,111,0) == stationu;
      do {
          let backwardH = String.fromCharCode(111,114,105,103,110,97,108,95,113,95,56,49,0);
         stationu = `${3 ^ circleD}`;
         backwardH += "2";
         if (selectedV) {
            break;
         }
      } while (selectedV && (2 <= (3 * stationu.length)));
          let corner0 = 2;
          let chatI = true;
         circleD *= ((chatI ? 2 : 2) + circleD);
         corner0 >>= Math.min(5, Math.abs(corner0 << (Math.min(Math.abs(corner0), 4))));
         chatI = 54 == corner0;
      carouselp += parseFloat(`${1 - confirmationU.length}`);
   let emptyt = 6663888.0 <= carouselp;
   do {
      carouselp -= parseFloat(`${bufferg & styleB}`);
      if (emptyt) {
         break;
      }
   } while (emptyt && (1.22 < (4.69 - carouselp) && (carouselp - parseFloat(`${score_.length}`)) < 4.69));
      carouselp /= Math.max(5, parseFloat(`${2 / (Math.max(9, tumbnailt))}`));
   let predictionbuttonJ = bufferg >= 9358198;
   do {
      bufferg *= score_.length & parseInt(`${carouselp}`);
      if (predictionbuttonJ) {
         break;
      }
   } while ((bufferg <= dplusX) && predictionbuttonJ);

        setUsername(initialUsername);

   let codea = libreactnativejniH ? !libreactnativejniH : libreactnativejniH;
   do {
       let switch_5K: Map<any, any> = new Map([[String.fromCharCode(104,95,50,54,95,99,111,110,116,101,110,116,0),276], [String.fromCharCode(103,95,57,52,95,109,111,111,118,0),488], [String.fromCharCode(98,121,112,97,115,115,95,119,95,51,48,0),960]]);
      let twitterH = 7450470 >= switch_5K.size;
      do {
         switch_5K.set(`${switch_5K.size}`, switch_5K.size & switch_5K.size);
         if (twitterH) {
            break;
         }
      } while (twitterH && (!Array.from(switch_5K.keys()).includes(`${switch_5K.size}`)));
      let mbnativeadvancedk = switch_5K.size >= 6301368;
      do {
         switch_5K.set(`${switch_5K.size}`, switch_5K.size | switch_5K.size);
         if (mbnativeadvancedk) {
            break;
         }
      } while (mbnativeadvancedk && (switch_5K.size == switch_5K.size));
      for (let u = 0; u < 3; u++) {
          let relatedf = String.fromCharCode(121,95,52,51,95,106,105,110,99,108,117,100,101,0);
          let sportsS: Array<any> = [599, 634, 241];
         switch_5K.set(relatedf, sportsS.length);
      }
      libreactnativejniH = (libavdevicep.length * tumbnailt) == 76;
      if (codea) {
         break;
      }
   } while (codea && (!libreactnativejniH));
       let desc_: Array<any> = [275, 423, 1];
       let emptyI = String.fromCharCode(104,95,52,57,95,109,117,116,97,116,105,111,110,0);
         desc_.push(emptyI.length);
      for (let p = 0; p < 1; p++) {
         desc_ = [desc_.length];
      }
      tumbnailt *= parseInt(`${predictionbannerM}`) - dplusX;
      libreactnativejniH = 25.21 <= carouselp;
   let fnewarchdefaultss = 5010442 >= styleB;
   do {
      styleB /= Math.max(lineh.length, 1);
      if (fnewarchdefaultss) {
         break;
      }
   } while ((2 <= tumbnailt) && fnewarchdefaultss);
      lineh += `${tumbnailt >> (Math.min(Math.abs(parseInt(`${minivodM}`)), 4))}`;
   for (let h = 0; h < 1; h++) {
       let rewardvideo9 = 1.0;
       let upgradeq: Map<any, any> = new Map([[String.fromCharCode(98,95,55,50,95,104,119,100,101,118,105,99,101,0),true ], [String.fromCharCode(108,95,52,57,95,105,110,104,101,114,105,116,0),false ], [String.fromCharCode(118,95,56,53,95,105,109,112,111,114,116,97,98,108,101,0),true ]]);
       let expand5 = String.fromCharCode(100,101,115,112,105,108,108,95,103,95,54,55,0);
       let reportG = String.fromCharCode(121,95,51,53,95,117,116,116,101,114,97,110,99,101,0);
      for (let n = 0; n < 2; n++) {
          let iconclosewhiteb: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,105,101,114,115,95,103,95,51,51,0),285], [String.fromCharCode(103,114,105,100,95,98,95,53,50,0),863], [String.fromCharCode(121,95,53,53,95,115,111,99,114,101,97,116,101,0),39]]);
          let photo5 = true;
         rewardvideo9 += 2;
         iconclosewhiteb.set(`${photo5}`, 3);
      }
       let librrcL = String.fromCharCode(114,101,97,115,109,95,100,95,55,54,0);
       let countryZ = String.fromCharCode(112,114,111,98,97,98,105,108,105,116,121,95,103,95,57,57,0);
       let libswresampleE = String.fromCharCode(97,95,56,49,95,115,111,99,97,110,116,114,99,118,109,111,114,101,0);
       let album8 = String.fromCharCode(111,95,52,48,95,115,101,116,100,97,114,0);
      for (let v = 0; v < 2; v++) {
          let iconfeedbacks = 3.0;
         librrcL += `${countryZ.length >> (Math.min(Math.abs(3), 3))}`;
         iconfeedbacks += parseInt(`${iconfeedbacks}`) ^ 3;
      }
         librrcL += `${(String.fromCharCode(70,0) == librrcL ? librrcL.length : parseInt(`${rewardvideo9}`))}`;
         upgradeq.set(`${rewardvideo9}`, (expand5 == String.fromCharCode(76,0) ? expand5.length : parseInt(`${rewardvideo9}`)));
      for (let z = 0; z < 3; z++) {
          let mbbidC = 4.0;
          let regengd = String.fromCharCode(99,95,52,48,95,99,111,110,116,101,120,116,115,0);
          let helperk: Array<any> = [576, 272];
         album8 = `${1 * reportG.length}`;
         mbbidC -= parseFloat(`${3 * helperk.length}`);
         regengd += `${regengd.length - 2}`;
         helperk.push(1);
      }
      for (let a = 0; a < 1; a++) {
          let transferd = 1.0;
         countryZ = "2";
         transferd += parseFloat(`${2 + parseInt(`${transferd}`)}`);
      }
         rewardvideo9 -= (expand5 == String.fromCharCode(50,0) ? expand5.length : countryZ.length);
      if (librrcL.length == countryZ.length) {
          let guideV = String.fromCharCode(105,110,100,101,110,116,101,100,95,106,95,51,51,0);
          let tickedj: Map<any, any> = new Map([[String.fromCharCode(116,112,101,108,95,56,95,49,51,0),203], [String.fromCharCode(107,95,52,50,95,113,115,99,97,108,101,113,112,0),860], [String.fromCharCode(105,110,116,101,114,105,111,114,95,102,95,55,49,0),720]]);
         librrcL += `${(String.fromCharCode(55,0) == guideV ? libswresampleE.length : guideV.length)}`;
         tickedj = new Map([[`${tickedj.size}`, 3 | tickedj.size]]);
      }
       let holder_ = String.fromCharCode(108,105,98,101,118,101,110,116,95,54,95,53,53,0);
      let liveF = countryZ.length >= 5949724;
      do {
          let matchinactiveS = 4.0;
          let filledN: Array<any> = [944, 984, 450];
          let libfolly0 = 1.0;
         countryZ = `${expand5.length >> (Math.min(Math.abs(2), 2))}`;
         matchinactiveS += parseFloat(`${1}`);
         filledN.push(filledN.length);
         libfolly0 += parseFloat(`${filledN.length}`);
         if (liveF) {
            break;
         }
      } while (((rewardvideo9 * 3.89) <= 1.75 && (countryZ.length * parseInt(`${rewardvideo9}`)) <= 5) && liveF);
      playa = "2";
   }
   for (let t = 0; t < 3; t++) {
      carouselp -= parseFloat(`${styleB}`);
   }
      predictionbannerM *= playa.length;
      playa = `${1 >> (Math.min(3, Math.abs(bufferg)))}`;
       let sendx = false;
       let tempW = 4;
       let libcrashsdkI = 1.0;
      for (let f = 0; f < 2; f++) {
         libcrashsdkI *= (parseFloat(`${(sendx ? 4 : 4) * tempW}`));
      }
      let views_ = 6363421.0 <= libcrashsdkI;
      do {
          let iconpipexpandW = 0.0;
         libcrashsdkI += (parseFloat(`${parseInt(`${iconpipexpandW}`) * (sendx ? 3 : 2)}`));
         if (views_) {
            break;
         }
      } while (views_ && (1.54 > libcrashsdkI));
         tempW ^= 1;
          let downloadedd = 4.0;
          let handlerb = 5;
         sendx = handlerb > parseInt(`${downloadedd}`);
         libcrashsdkI /= Math.max(1, parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${libcrashsdkI}`)), 4))}`));
         tempW |= 1 - parseInt(`${libcrashsdkI}`);
          let foregroundd = String.fromCharCode(102,95,55,95,101,120,116,110,0);
          let historyy = String.fromCharCode(107,101,114,110,101,114,95,56,95,52,48,0);
         tempW += foregroundd.length + parseInt(`${libcrashsdkI}`);
         foregroundd += `${historyy.length % (Math.max(1, historyy.length))}`;
      while (2.46 == (parseFloat(`${tempW}`) + libcrashsdkI) && (parseFloat(`${tempW}`) + libcrashsdkI) == 2.46) {
         tempW -= 2 % (Math.max(4, parseInt(`${libcrashsdkI}`)));
         break;
      }
       let modeli: Map<any, any> = new Map([[String.fromCharCode(121,117,121,118,116,111,121,117,118,95,112,95,50,57,0),226], [String.fromCharCode(114,95,55,50,95,113,115,118,118,112,112,0),582]]);
       let showB: Map<any, any> = new Map([[String.fromCharCode(98,114,101,110,100,101,114,95,55,95,51,48,0),String.fromCharCode(111,117,98,108,101,95,122,95,52,55,0)], [String.fromCharCode(115,95,56,49,95,119,101,97,118,101,0),String.fromCharCode(98,95,55,53,95,108,111,99,105,0)]]);
      predictionbannerM += 3 << (Math.min(3, playa.length));
   while ((1 * styleB) <= 1 && 1 <= styleB) {
      styleB *= parseInt(`${iconuserr}`);
      break;
   }
   if (!libreactnativejniH) {
       let arrowupJ: Array<any> = [241, 886];
       let whitevideoliveN = String.fromCharCode(111,99,99,117,112,105,101,100,95,114,95,51,56,0);
       let star3: Array<any> = [355, 303, 797];
       let zhubo2 = String.fromCharCode(117,95,54,48,95,101,120,116,101,114,110,97,108,108,121,0);
       let predictionactivew = 3.0;
      for (let o = 0; o < 1; o++) {
         arrowupJ.push(whitevideoliveN.length >> (Math.min(5, arrowupJ.length)));
      }
         predictionactivew *= parseFloat(`${star3.length}`);
      for (let d = 0; d < 3; d++) {
         whitevideoliveN = "1";
      }
       let selectionc = true;
       let overW = 1;
      if (1.6 <= predictionactivew) {
         predictionactivew += parseFloat(`${zhubo2.length & 1}`);
      }
      while ((1.8 - predictionactivew) <= 4.82 || predictionactivew <= 1.8) {
          let change_ = true;
         predictionactivew /= Math.max(1, parseFloat(`${3}`));
         change_ = (!change_ ? change_ : change_);
         break;
      }
         whitevideoliveN = `${star3.length}`;
      let orangeS = 6256267 <= arrowupJ.length;
      do {
          let controlsa = String.fromCharCode(98,117,102,102,101,114,115,114,99,95,98,95,50,55,0);
          let headerb = String.fromCharCode(109,101,114,103,101,100,95,121,95,52,55,0);
         arrowupJ = [3];
         controlsa += `${headerb.length >> (Math.min(3, controlsa.length))}`;
         headerb += `${controlsa.length ^ 3}`;
         if (orangeS) {
            break;
         }
      } while (orangeS && ((arrowupJ.length / 4) <= 3 && (overW / 4) <= 2));
      for (let o = 0; o < 3; o++) {
          let rankR: Map<any, any> = new Map([[String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,50,95,56,49,0),false ], [String.fromCharCode(106,95,50,55,95,100,98,108,113,117,111,116,101,0),false ]]);
          let feedback_ = String.fromCharCode(116,95,50,52,95,114,101,108,97,121,0);
          let owngoalW = String.fromCharCode(101,109,117,108,97,116,105,111,110,95,117,95,57,51,0);
          let textinputZ = String.fromCharCode(106,95,49,52,95,97,100,106,117,115,116,105,110,103,0);
          let scorepopsoundq: Array<any> = [970, 388, 595];
         zhubo2 += `${(String.fromCharCode(52,0) == whitevideoliveN ? whitevideoliveN.length : zhubo2.length)}`;
         rankR = new Map([[feedback_, feedback_.length + textinputZ.length]]);
         owngoalW += `${3 - owngoalW.length}`;
         textinputZ = "2";
         scorepopsoundq = [textinputZ.length];
      }
       let telemetryR = false;
       let math2 = true;
       let iconqqD = true;
       let pressureK = false;
          let foundz = String.fromCharCode(99,95,55,51,95,115,101,103,102,101,97,116,117,114,101,115,0);
          let umengX = String.fromCharCode(102,95,56,57,95,116,114,97,110,115,97,99,116,105,111,110,115,0);
         selectionc = arrowupJ.length >= 85;
         foundz += `${foundz.length}`;
         umengX = `${umengX.length & foundz.length}`;
         math2 = overW < 67;
          let awayP: Array<any> = [407, 377];
          let unselectede = String.fromCharCode(112,95,54,54,95,119,101,98,112,97,103,101,0);
         star3 = [awayP.length & 3];
         awayP = [unselectede.length];
         unselectede += `${unselectede.length << (Math.min(Math.abs(2), 5))}`;
      lineh = `${parseInt(`${iconuserr}`)}`;
   }
       let grey_ = String.fromCharCode(117,95,52,55,95,114,101,116,114,105,101,118,105,110,103,0);
      while (grey_.includes(grey_)) {
          let statisticsY = true;
          let detailC = 5;
         grey_ = `${3 >> (Math.min(3, grey_.length))}`;
         statisticsY = 31 < detailC;
         detailC *= detailC;
         break;
      }
         grey_ += `${grey_.length}`;
      for (let p = 0; p < 1; p++) {
         grey_ += `${grey_.length | grey_.length}`;
      }
      bufferg -= ((libreactnativejniH ? 3 : 1) | styleB);
   let othera = String.fromCharCode(98,97,107,118,104,55,119,108,0) == confirmationU;
   do {
      confirmationU = `${(String.fromCharCode(122,0) == playa ? playa.length : confirmationU.length)}`;
      if (othera) {
         break;
      }
   } while (othera && (1 >= (confirmationU.length - 2) || (1.53 + predictionbannerM) >= 3.11));
      lineh += `${styleB >> (Math.min(libavdevicep.length, 4))}`;
   for (let o = 0; o < 2; o++) {
       let weather5 = 2.0;
       let bannerq = String.fromCharCode(110,95,56,53,95,116,97,103,103,101,114,0);
       let confirmationV = 4.0;
       let encrypt_ = String.fromCharCode(99,95,55,57,95,97,108,119,97,121,115,0);
         weather5 -= (parseFloat(`${bannerq == String.fromCharCode(83,0) ? parseInt(`${weather5}`) : bannerq.length}`));
         bannerq = `${parseInt(`${confirmationV}`) % (Math.max(1, 2))}`;
      if ((weather5 * 2) < 3.76) {
         confirmationV *= parseFloat(`${bannerq.length - 1}`);
      }
      while (1.95 >= (weather5 + 1.87) || 1.87 >= (confirmationV * weather5)) {
         weather5 -= parseFloat(`${encrypt_.length}`);
         break;
      }
         bannerq += `${bannerq.length}`;
         weather5 += parseFloat(`${encrypt_.length % 1}`);
      let storeH = bannerq == String.fromCharCode(97,95,54,103,52,0);
      do {
         bannerq = `${encrypt_.length}`;
         if (storeH) {
            break;
         }
      } while ((encrypt_ == bannerq) && storeH);
      let x_managerG = confirmationV >= 6060713.0;
      do {
         confirmationV /= Math.max(2, parseFloat(`${parseInt(`${weather5}`)}`));
         if (x_managerG) {
            break;
         }
      } while (x_managerG && (confirmationV >= parseFloat(`${bannerq.length}`)));
      iconuserr *= ((libreactnativejniH ? 3 : 5) + parseInt(`${carouselp}`));
   }
      confirmationU = `${lineh.length}`;
   if (1 < (4 >> (Math.min(4, Math.abs(dplusX)))) || (dplusX >> (Math.min(Math.abs(4), 3))) < 5) {
       let bridgeF: Array<any> = [999, 140, 86];
       let profile6 = true;
       let launchx: Array<any> = [861, 206, 661];
       let appsm: Map<any, any> = new Map([[String.fromCharCode(117,110,102,114,101,101,122,101,95,122,95,50,57,0),598], [String.fromCharCode(97,115,115,111,99,105,97,116,101,100,95,112,95,55,52,0),124]]);
         launchx = [2];
         bridgeF = [1 << (Math.min(5, bridgeF.length))];
         appsm = new Map([[`${appsm.size}`, 1 & bridgeF.length]]);
         profile6 = !profile6;
       let nativeex9 = String.fromCharCode(104,95,52,48,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0);
       let libfolly2 = String.fromCharCode(100,95,50,52,95,109,112,101,103,0);
          let albumW = String.fromCharCode(110,111,114,109,97,108,105,122,101,114,95,116,95,56,49,0);
         nativeex9 += `${libfolly2.length / (Math.max(7, albumW.length))}`;
      for (let r = 0; r < 2; r++) {
          let closeW = 4.0;
          let placementn = String.fromCharCode(99,95,50,52,95,98,111,111,116,0);
          let downarrowg = 1;
         launchx = [downarrowg];
         closeW /= Math.max(1 & placementn.length, 2);
         placementn = `${parseInt(`${closeW}`) * placementn.length}`;
         downarrowg %= Math.max(parseInt(`${closeW}`), 2);
      }
          let logor = String.fromCharCode(115,95,56,54,95,101,120,105,115,116,97,110,99,101,0);
          let redscoreball7: Array<any> = [412, 202];
          let mini8 = String.fromCharCode(114,95,57,55,95,114,101,102,114,101,115,104,0);
         appsm.set(mini8, (String.fromCharCode(114,0) == mini8 ? (profile6 ? 1 : 5) : mini8.length));
         logor = `${logor.length / 1}`;
         redscoreball7.push(redscoreball7.length);
       let iconh = true;
      for (let l = 0; l < 1; l++) {
         iconh = nativeex9.length <= 76;
      }
      for (let f = 0; f < 2; f++) {
          let icon5: Map<any, any> = new Map([[String.fromCharCode(99,97,114,95,108,95,55,48,0),38], [String.fromCharCode(100,121,110,97,109,105,99,115,95,98,95,54,57,0),96], [String.fromCharCode(111,108,100,110,101,119,95,113,95,55,49,0),867]]);
         bridgeF.push((nativeex9 == String.fromCharCode(80,0) ? icon5.size : nativeex9.length));
      }
         bridgeF = [(3 | (profile6 ? 5 : 2))];
      dplusX %= Math.max(2, 3);
   }
        setUsernameErrMsg(null);
    }

    const onClose = () => {
       let securityd = false;
    let time_m1b: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,108,111,97,100,101,100,95,102,95,51,55,0),674], [String.fromCharCode(100,101,108,101,103,97,116,101,95,104,95,50,57,0),631]]);
    let videobufferloadingJ = 4.0;
    let orientationt = 1.0;
    let stationz = 4;
    let emojiheartv = 3.0;
    let rewindC = 1;
    let reactnavigationZ = String.fromCharCode(110,95,57,51,95,112,111,108,108,101,100,0);
    let push0: Array<any> = [873, 777, 313];
    let v_positionu: Map<any, any> = new Map([[String.fromCharCode(104,95,57,49,95,114,101,109,111,118,101,103,114,97,105,110,0),279], [String.fromCharCode(116,114,105,112,108,101,95,118,95,52,52,0),829], [String.fromCharCode(116,97,112,95,111,95,57,50,0),136]]);
    let reactnativejss = false;
    let privatechatbgK = String.fromCharCode(108,95,53,51,95,103,114,97,112,104,113,108,0);
   if (1.35 == (emojiheartv / 3.72) || (emojiheartv / (Math.max(3.72, 4))) == 1.43) {
       let wcopy_dwx = 3.0;
       let release_9l = 0.0;
       let grayR: Map<any, any> = new Map([[String.fromCharCode(111,95,54,52,95,99,111,110,115,116,114,97,105,110,101,100,0),29], [String.fromCharCode(102,101,101,95,103,95,49,53,0),675]]);
          let middlewareY: Array<any> = [759, 612, 635];
         wcopy_dwx -= 2;
         middlewareY.push(middlewareY.length >> (Math.min(middlewareY.length, 2)));
      for (let c = 0; c < 3; c++) {
         release_9l /= Math.max(parseFloat(`${parseInt(`${wcopy_dwx}`)}`), 4);
      }
         release_9l *= parseFloat(`${1}`);
      for (let l = 0; l < 2; l++) {
         release_9l /= Math.max(1, parseFloat(`${parseInt(`${wcopy_dwx}`) ^ parseInt(`${release_9l}`)}`));
      }
         wcopy_dwx /= Math.max(3, parseInt(`${release_9l}`) * 3);
         grayR.set(`${release_9l}`, parseInt(`${wcopy_dwx}`) % (Math.max(parseInt(`${release_9l}`), 7)));
      let time_0P = release_9l >= 5885313.0;
      do {
         release_9l *= parseFloat(`${3 / (Math.max(3, parseInt(`${wcopy_dwx}`)))}`);
         if (time_0P) {
            break;
         }
      } while ((!Array.from(grayR.keys()).includes(`${release_9l}`)) && time_0P);
      for (let g = 0; g < 1; g++) {
         wcopy_dwx += parseInt(`${wcopy_dwx}`) % (Math.max(7, parseInt(`${release_9l}`)));
      }
      let libfbI = 7313522.0 <= release_9l;
      do {
         release_9l /= Math.max(parseFloat(`${parseInt(`${wcopy_dwx}`)}`), 5);
         if (libfbI) {
            break;
         }
      } while (libfbI && (1.72 >= (5.93 - release_9l) || (5.93 + release_9l) >= 1.88));
      v_positionu.set(`${securityd}`, ((securityd ? 3 : 3) / (Math.max(2, 10))));
   }
      reactnavigationZ = `${parseInt(`${videobufferloadingJ}`) & 2}`;
      time_m1b.set(`${orientationt}`, parseInt(`${orientationt}`) - parseInt(`${emojiheartv}`));
   if ((videobufferloadingJ / (Math.max(10, stationz))) >= 3.1) {
       let shootk = 2;
       let sigmobk = 0.0;
       let issubj: Map<any, any> = new Map([[String.fromCharCode(112,95,57,55,95,112,105,120,101,108,115,0),813], [String.fromCharCode(105,110,100,97,116,97,95,52,95,49,48,0),36], [String.fromCharCode(111,112,101,110,105,110,103,95,57,95,50,52,0),161]]);
       let yingR = 5.0;
       let modelsu = 1.0;
          let iconclosewhitebgn = 4;
          let sheetL: Map<any, any> = new Map([[String.fromCharCode(112,95,51,95,113,112,113,115,99,97,108,101,0),String.fromCharCode(104,101,97,114,116,115,95,48,95,54,56,0)], [String.fromCharCode(104,111,115,116,95,106,95,51,56,0),String.fromCharCode(117,95,52,56,95,108,97,117,110,99,104,101,100,0)], [String.fromCharCode(97,98,111,114,116,95,100,95,51,57,0),String.fromCharCode(104,95,52,56,95,100,105,115,116,111,114,116,105,111,110,0)]]);
          let with_ckZ = String.fromCharCode(114,101,100,117,110,100,97,110,116,95,119,95,50,53,0);
         yingR /= Math.max(1, parseFloat(`${parseInt(`${yingR}`) / (Math.max(2, 8))}`));
         iconclosewhitebgn >>= Math.min(Math.abs(3), 3);
         sheetL = new Map([[with_ckZ, 1]]);
         with_ckZ += `${with_ckZ.length | sheetL.size}`;
         issubj = new Map([[`${yingR}`, parseInt(`${yingR}`) - 3]]);
       let iconqqO = String.fromCharCode(116,95,50,51,95,98,111,117,110,100,97,114,121,0);
       let currentK = String.fromCharCode(102,115,105,122,101,95,97,95,52,48,0);
       let loadingF: Map<any, any> = new Map([[String.fromCharCode(118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,95,52,95,51,56,0),286], [String.fromCharCode(104,102,108,105,112,95,108,95,54,51,0),84], [String.fromCharCode(105,95,51,95,99,111,100,101,102,0),975]]);
       let yellowtoredt: Map<any, any> = new Map([[String.fromCharCode(120,95,51,57,95,102,101,116,99,104,101,115,0),String.fromCharCode(111,95,52,52,95,98,105,108,105,110,101,97,114,0)], [String.fromCharCode(109,105,120,105,110,115,95,54,95,56,49,0),String.fromCharCode(97,95,52,56,95,100,105,97,103,111,110,97,108,0)], [String.fromCharCode(116,105,108,101,100,95,57,95,51,50,0),String.fromCharCode(107,95,56,48,95,99,111,108,111,114,109,97,116,114,105,120,0)]]);
         issubj = new Map([[`${loadingF.size}`, 2 & issubj.size]]);
          let reactnativeratingsz = String.fromCharCode(114,100,112,99,109,95,119,95,57,48,0);
         shootk /= Math.max((currentK == String.fromCharCode(80,0) ? parseInt(`${sigmobk}`) : currentK.length), 1);
         reactnativeratingsz = `${3 * reactnativeratingsz.length}`;
      while (1 > (iconqqO.length * yellowtoredt.size)) {
         iconqqO += `${issubj.size}`;
         break;
      }
         loadingF.set(`${iconqqO}`, yellowtoredt.size);
         iconqqO = `${(String.fromCharCode(95,0) == currentK ? parseInt(`${yingR}`) : currentK.length)}`;
       let hover6 = 4;
       let bottomP = 0;
         issubj.set(`${shootk}`, 2);
       let unselectedP = String.fromCharCode(116,97,98,108,101,95,100,95,50,48,0);
         iconqqO = `${1 - issubj.size}`;
         iconqqO += `${parseInt(`${yingR}`)}`;
      let libfabricjnij = yingR >= 5938896.0;
      do {
         yingR *= parseFloat(`${parseInt(`${modelsu}`)}`);
         if (libfabricjnij) {
            break;
         }
      } while (((modelsu / 3.4) < 1.55 && 1.23 < (3.4 - yingR)) && libfabricjnij);
      stationz -= rewindC;
   }
      emojiheartv *= stationz;
      stationz |= stationz;
       let rightJ: Array<any> = [String.fromCharCode(101,95,51,54,95,115,101,116,102,105,101,108,100,0), String.fromCharCode(99,101,114,116,95,114,95,56,51,0), String.fromCharCode(102,95,51,56,0)];
       let libnmsH = 2.0;
      let minivodH = 9752598.0 >= libnmsH;
      do {
         libnmsH -= parseFloat(`${1 - parseInt(`${libnmsH}`)}`);
         if (minivodH) {
            break;
         }
      } while (minivodH && (rightJ.includes(libnmsH)));
         libnmsH /= Math.max(3, parseFloat(`${3 & parseInt(`${libnmsH}`)}`));
      if (5 > (1 % (Math.max(10, rightJ.length))) && 3.1 > (libnmsH / 3.37)) {
         rightJ = [1];
      }
         libnmsH += parseFloat(`${3}`);
      for (let h = 0; h < 3; h++) {
          let xvodo = String.fromCharCode(113,95,50,53,95,98,105,116,114,101,97,100,101,114,0);
         libnmsH += (parseFloat(`${xvodo == String.fromCharCode(98,0) ? xvodo.length : rightJ.length}`));
      }
         rightJ.push(2 + parseInt(`${libnmsH}`));
      securityd = (reactnavigationZ.length * parseInt(`${orientationt}`)) > 99;
      reactnavigationZ += `${((securityd ? 2 : 3) / (Math.max(time_m1b.size, 3)))}`;
       let matchdetailbgk: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,101,110,116,105,111,110,95,104,95,50,0),494], [String.fromCharCode(98,108,117,114,108,101,115,115,95,105,95,53,51,0),431]]);
       let subtextB = String.fromCharCode(99,111,100,101,99,115,95,56,95,49,51,0);
      while (4 > (subtextB.length & matchdetailbgk.size)) {
         matchdetailbgk = new Map([[`${matchdetailbgk.size}`, 2 / (Math.max(1, subtextB.length))]]);
         break;
      }
         subtextB += `${subtextB.length}`;
      let coref = 9418634 >= matchdetailbgk.size;
      do {
         matchdetailbgk.set(`${subtextB}`, subtextB.length * matchdetailbgk.size);
         if (coref) {
            break;
         }
      } while ((2 < (3 ^ matchdetailbgk.size) || 1 < (matchdetailbgk.size ^ 3)) && coref);
      while ((4 * matchdetailbgk.size) <= 3) {
         matchdetailbgk.set(`${subtextB}`, 3);
         break;
      }
      let minimizeM = matchdetailbgk.size >= 9112111;
      do {
         matchdetailbgk.set(subtextB, subtextB.length % (Math.max(3, 6)));
         if (minimizeM) {
            break;
         }
      } while ((!subtextB.includes(`${matchdetailbgk.size}`)) && minimizeM);
      if ((3 << (Math.min(1, Math.abs(matchdetailbgk.size)))) >= 2 && 2 >= (subtextB.length << (Math.min(Math.abs(3), 5)))) {
         subtextB += `${matchdetailbgk.size}`;
      }
      v_positionu = new Map([[`${videobufferloadingJ}`, reactnavigationZ.length]]);
      reactnavigationZ = `${time_m1b.size}`;

        if (handleClose) handleClose();

      time_m1b.set(`${time_m1b.size}`, v_positionu.size);
   while ((stationz / 3) > 5) {
      securityd = stationz == 60;
      break;
   }
   for (let e = 0; e < 1; e++) {
       let activity8: Array<any> = [11, 439, 809];
       let untickf = 2.0;
       let mbbidj = String.fromCharCode(121,95,50,48,95,97,116,116,114,105,98,117,116,101,100,0);
       let previewH = String.fromCharCode(101,105,116,104,101,114,95,55,95,50,52,0);
       let mbnativex = 1.0;
       let linec = 0.0;
      for (let y = 0; y < 3; y++) {
         previewH += `${activity8.length}`;
      }
         mbbidj += `${previewH.length}`;
       let emojis = 3.0;
       let saveY = 1.0;
          let hongkongt = String.fromCharCode(115,121,109,98,111,108,105,122,101,95,49,95,57,55,0);
         emojis -= (String.fromCharCode(117,0) == mbbidj ? mbbidj.length : parseInt(`${linec}`));
         hongkongt = `${1 * hongkongt.length}`;
          let greyarrowupN = String.fromCharCode(118,95,56,49,95,111,112,101,110,115,115,108,0);
         activity8.push(1);
         greyarrowupN = `${greyarrowupN.length}`;
         saveY *= parseInt(`${linec}`);
       let imagenetworkerrO = String.fromCharCode(100,95,52,54,95,98,105,116,100,101,112,116,104,0);
       let chinas = String.fromCharCode(105,95,52,53,95,114,101,112,108,97,99,101,100,0);
      if (4 <= (previewH.length + 4) && (4.84 - mbnativex) <= 3.11) {
         mbnativex /= Math.max(parseFloat(`${parseInt(`${saveY}`) ^ parseInt(`${mbnativex}`)}`), 1);
      }
       let mailw = 3.0;
       let issub9 = 1.0;
         linec /= Math.max(parseFloat(`${2}`), 2);
       let reactnativejsx: Array<any> = [307, 946];
       let dependencyE: Array<any> = [810, 85];
      v_positionu.set(`${securityd}`, 2 / (Math.max(5, time_m1b.size)));
      untickf /= Math.max(parseInt(`${untickf}`), 5);
   }
   while (Array.from(time_m1b.values()).includes(videobufferloadingJ)) {
       let indicatorK = String.fromCharCode(110,95,51,56,95,114,101,109,111,118,97,108,115,0);
      if (indicatorK != indicatorK) {
         indicatorK = `${(indicatorK == String.fromCharCode(119,0) ? indicatorK.length : indicatorK.length)}`;
      }
      for (let b = 0; b < 3; b++) {
         indicatorK += "2";
      }
       let bcopy_z2M = String.fromCharCode(106,95,49,53,95,100,101,114,105,118,0);
       let showX = String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,102,95,49,51,0);
      time_m1b = new Map([[`${videobufferloadingJ}`, (parseInt(`${videobufferloadingJ}`) & (securityd ? 3 : 2))]]);
      break;
   }
   let imagesT = 7327681.0 <= videobufferloadingJ;
   do {
      videobufferloadingJ -= (parseFloat(`${time_m1b.size * (securityd ? 5 : 3)}`));
      if (imagesT) {
         break;
      }
   } while ((securityd) && imagesT);
       let interstitialb = String.fromCharCode(115,104,97,107,105,110,103,95,116,95,49,51,0);
          let predictionbannershared0: Array<any> = [String.fromCharCode(119,97,108,108,112,97,112,101,114,95,104,95,57,49,0), String.fromCharCode(116,111,111,108,116,105,112,95,107,95,55,57,0)];
          let codeP = String.fromCharCode(105,95,57,48,95,100,105,115,99,111,110,110,101,99,116,105,111,110,0);
          let zooms = String.fromCharCode(106,95,55,52,95,101,115,101,110,100,0);
         interstitialb = `${interstitialb.length >> (Math.min(1, predictionbannershared0.length))}`;
         predictionbannershared0.push(zooms.length + 1);
         codeP += `${codeP.length}`;
         zooms += `${zooms.length ^ codeP.length}`;
         interstitialb += `${2 | interstitialb.length}`;
       let libfollyP = 1;
      rewindC /= Math.max(2, stationz);
       let casting4 = String.fromCharCode(111,95,52,55,95,105,112,111,108,0);
       let scorepopsounds: Array<any> = [String.fromCharCode(98,105,110,107,98,95,120,95,51,48,0), String.fromCharCode(116,114,97,102,95,97,95,50,56,0)];
       let minivod2: Map<any, any> = new Map([[String.fromCharCode(99,95,50,51,95,100,114,105,118,101,110,0),41], [String.fromCharCode(116,109,112,108,95,113,95,49,53,0),449]]);
      let agreemento = scorepopsounds.length <= 8731777;
      do {
          let reactnavigationt = String.fromCharCode(115,95,49,52,95,114,101,115,117,108,116,105,110,103,0);
          let penalty9 = true;
          let layoutQ = String.fromCharCode(117,95,51,48,95,110,112,114,111,98,101,0);
          let notificationfillempty0 = 4;
          let hookU = 4.0;
         scorepopsounds = [((penalty9 ? 5 : 3) & 3)];
         reactnavigationt = `${notificationfillempty0}`;
         penalty9 = reactnavigationt.length >= 7;
         layoutQ = `${1 >> (Math.min(3, Math.abs(notificationfillempty0)))}`;
         hookU -= reactnavigationt.length;
         if (agreemento) {
            break;
         }
      } while (agreemento && (4 < (scorepopsounds.length >> (Math.min(Math.abs(4), 5)))));
          let flipperC = 2.0;
          let slidern: Array<any> = [String.fromCharCode(118,112,105,116,120,102,109,95,57,95,56,52,0), String.fromCharCode(114,105,112,101,109,100,95,122,95,54,49,0)];
          let build_ = 1.0;
         minivod2.set(`${flipperC}`, 3);
         flipperC += parseFloat(`${parseInt(`${build_}`)}`);
         slidern.push(parseInt(`${build_}`));
          let logout1 = String.fromCharCode(99,111,109,97,110,100,95,121,95,53,49,0);
         minivod2 = new Map([[`${minivod2.size}`, minivod2.size >> (Math.min(logout1.length, 3))]]);
      if ((2 | minivod2.size) == 1 && 4 == (minivod2.size | 2)) {
          let libruntimeexecutorQ = 0;
          let iconsaveimages = String.fromCharCode(116,95,52,53,95,112,97,103,101,115,0);
          let z_titleP = 4.0;
          let nativea = 1.0;
          let profilepicb = 2.0;
         scorepopsounds = [libruntimeexecutorQ | parseInt(`${profilepicb}`)];
         libruntimeexecutorQ %= Math.max(parseInt(`${z_titleP}`), 5);
         iconsaveimages += `${3 / (Math.max(10, parseInt(`${nativea}`)))}`;
         nativea -= parseFloat(`${parseInt(`${z_titleP}`) / (Math.max(parseInt(`${nativea}`), 4))}`);
         profilepicb *= parseFloat(`${parseInt(`${nativea}`)}`);
      }
         scorepopsounds = [1 ^ scorepopsounds.length];
         scorepopsounds.push(1);
      if (!casting4.includes(`${scorepopsounds.length}`)) {
         casting4 += `${scorepopsounds.length}`;
      }
      for (let f = 0; f < 1; f++) {
          let footballfiledlayoutL = String.fromCharCode(122,101,114,111,98,108,111,98,95,109,95,57,57,0);
          let checkboxh = true;
          let iconlogout5 = String.fromCharCode(115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,95,113,95,56,53,0);
          let loading3 = 5.0;
         scorepopsounds = [scorepopsounds.length];
         footballfiledlayoutL = `${(String.fromCharCode(101,0) == footballfiledlayoutL ? footballfiledlayoutL.length : (checkboxh ? 2 : 5))}`;
         checkboxh = footballfiledlayoutL.length <= 68;
         iconlogout5 = `${(iconlogout5.length << (Math.min(4, Math.abs((checkboxh ? 1 : 3)))))}`;
         loading3 /= Math.max(2, parseFloat(`${parseInt(`${loading3}`)}`));
      }
      if (3 <= casting4.length) {
         casting4 = "2";
      }
      emojiheartv += parseInt(`${orientationt}`) & 2;
   let shrinkH = reactnavigationZ == String.fromCharCode(110,97,54,112,98,100,100,113,110,0);
   do {
       let sansU = String.fromCharCode(116,101,115,116,105,109,103,97,114,105,95,112,95,49,49,0);
       let clocks = String.fromCharCode(113,95,49,53,95,119,97,115,0);
       let verticalV = 4.0;
      let build9 = clocks == String.fromCharCode(105,97,57,52,95,121,55,57,100,0);
      do {
          let internetX = String.fromCharCode(101,108,115,100,101,99,95,112,95,51,56,0);
          let iconnotificationnewp: Array<any> = [191, 97, 404];
          let halffieldimageV = String.fromCharCode(119,114,105,116,101,116,114,117,110,99,95,115,95,50,53,0);
         clocks = `${halffieldimageV.length + sansU.length}`;
         internetX += "1";
         iconnotificationnewp = [3 & iconnotificationnewp.length];
         halffieldimageV = `${internetX.length}`;
         if (build9) {
            break;
         }
      } while ((clocks == String.fromCharCode(114,0) && 1 <= sansU.length) && build9);
      let carousels = String.fromCharCode(48,111,100,114,104,0) == sansU;
      do {
         sansU += "2";
         if (carousels) {
            break;
         }
      } while (carousels && (sansU.length < 5));
         sansU += `${clocks.length ^ 1}`;
      if (clocks.endsWith(`${verticalV}`)) {
         clocks += "1";
      }
       let club1: Map<any, any> = new Map([[String.fromCharCode(118,97,108,117,108,101,95,55,95,55,0),false ], [String.fromCharCode(115,99,114,111,108,108,101,114,95,54,95,57,49,0),false ], [String.fromCharCode(100,109,97,99,95,105,95,54,0),false ]]);
          let searchS = true;
         sansU += `${clocks.length - 1}`;
          let popupX = String.fromCharCode(102,95,50,53,95,100,112,114,105,110,116,0);
          let closei = String.fromCharCode(101,113,117,97,108,115,95,121,95,56,55,0);
         verticalV *= parseFloat(`${sansU.length}`);
         popupX = `${closei.length}`;
         closei = `${closei.length >> (Math.min(popupX.length, 3))}`;
         sansU = "2";
         clocks += `${clocks.length % 3}`;
      reactnavigationZ += `${(rewindC & (securityd ? 4 : 2))}`;
      if (shrinkH) {
         break;
      }
   } while (shrinkH && (securityd));
   let delegate_nkV = videobufferloadingJ <= 8693876.0;
   do {
       let tick_ = String.fromCharCode(118,95,52,56,95,100,101,109,97,110,100,0);
       let bangF = String.fromCharCode(111,95,51,95,109,97,115,107,101,100,99,108,97,109,112,0);
       let a_centerN = true;
       let defaultplayerimgL = 4;
      for (let t = 0; t < 1; t++) {
         defaultplayerimgL *= 1;
      }
       let embedL = String.fromCharCode(97,116,111,102,95,115,95,57,57,0);
      for (let h = 0; h < 3; h++) {
          let largesoundP = String.fromCharCode(99,98,115,110,105,100,95,105,95,52,54,0);
          let privacyl = 1;
          let elementsh: Array<any> = [397, 392];
          let textc = 3;
         defaultplayerimgL /= Math.max(4, privacyl ^ 1);
         largesoundP = `${(largesoundP == String.fromCharCode(77,0) ? largesoundP.length : textc)}`;
         privacyl &= 1 ^ textc;
         elementsh.push(elementsh.length);
      }
      let downloadedY = a_centerN ? !a_centerN : a_centerN;
      do {
         a_centerN = String.fromCharCode(116,0) == bangF;
         if (downloadedY) {
            break;
         }
      } while (downloadedY && (defaultplayerimgL >= 5));
      if (5 == bangF.length) {
         a_centerN = embedL.length == 61 || !a_centerN;
      }
      if (3 >= defaultplayerimgL) {
         defaultplayerimgL /= Math.max(4, defaultplayerimgL ^ 1);
      }
          let policyu = String.fromCharCode(97,108,108,111,119,97,110,99,101,95,98,95,51,0);
         a_centerN = !bangF.startsWith(`${a_centerN}`);
         policyu = `${3 + policyu.length}`;
         a_centerN = (68 < (tick_.length / (Math.max(6, (a_centerN ? tick_.length : 68)))));
      if (bangF == embedL) {
         embedL += "2";
      }
         tick_ = `${(tick_ == String.fromCharCode(55,0) ? tick_.length : bangF.length)}`;
       let mbnativew = String.fromCharCode(98,95,56,53,95,114,110,103,0);
       let unreadB = String.fromCharCode(118,98,112,114,105,110,116,102,95,118,95,51,48,0);
      while (mbnativew.length < bangF.length) {
          let projectY = 5;
          let private_hlg = true;
          let footballfiledlayoutk = String.fromCharCode(105,95,51,52,95,118,101,114,105,102,105,97,98,108,101,0);
         bangF = `${footballfiledlayoutk.length}`;
         projectY |= 2 << (Math.min(Math.abs(projectY), 5));
         private_hlg = !private_hlg && projectY >= 95;
         footballfiledlayoutk = "1";
         break;
      }
      videobufferloadingJ /= Math.max(parseFloat(`${defaultplayerimgL}`), 2);
      if (delegate_nkV) {
         break;
      }
   } while (((2 + v_positionu.size) >= 1 || 3.24 >= (videobufferloadingJ / (Math.max(2.61, 3)))) && delegate_nkV);
   let checkboxl = emojiheartv >= 5757967.0;
   do {
      emojiheartv *= 1 ^ v_positionu.size;
      if (checkboxl) {
         break;
      }
   } while ((5.36 >= (emojiheartv / 1.56) || 2.81 >= (videobufferloadingJ + 1.56)) && checkboxl);

        Keyboard.dismiss();

   let paginationR = 6192245 >= push0.length;
   do {
      push0 = [(v_positionu.size | (reactnativejss ? 2 : 4))];
      if (paginationR) {
         break;
      }
   } while ((1 > push0.length) && paginationR);
   for (let u = 0; u < 2; u++) {
       let mbnativeadvanceda = String.fromCharCode(104,101,108,100,95,122,95,54,55,0);
       let r_lock3 = String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,95,104,95,57,55,0);
       let background3 = String.fromCharCode(118,95,57,53,95,113,105,110,116,102,108,111,97,116,0);
       let macauC = 1.0;
      while (mbnativeadvanceda.length < 3) {
         mbnativeadvanceda = `${mbnativeadvanceda.length - 2}`;
         break;
      }
         background3 += `${background3.length}`;
      while (mbnativeadvanceda == String.fromCharCode(48,0)) {
         r_lock3 = `${(r_lock3 == String.fromCharCode(122,0) ? mbnativeadvanceda.length : r_lock3.length)}`;
         break;
      }
         macauC -= (String.fromCharCode(95,0) == r_lock3 ? r_lock3.length : parseInt(`${macauC}`));
         macauC /= Math.max(5, parseInt(`${macauC}`) / (Math.max(mbnativeadvanceda.length, 5)));
      for (let m = 0; m < 3; m++) {
         r_lock3 += `${(String.fromCharCode(112,0) == mbnativeadvanceda ? parseInt(`${macauC}`) : mbnativeadvanceda.length)}`;
      }
      for (let b = 0; b < 1; b++) {
         r_lock3 += `${2 + parseInt(`${macauC}`)}`;
      }
       let tempnodata_ = String.fromCharCode(118,95,49,51,95,98,97,115,101,105,115,107,101,121,0);
       let rocketR = String.fromCharCode(98,95,50,49,95,100,98,115,116,97,116,0);
          let iconfeedbacku = String.fromCharCode(98,95,54,51,95,100,114,97,103,103,101,100,0);
          let teamd = String.fromCharCode(97,99,116,117,97,108,105,122,97,116,105,111,110,95,56,95,51,50,0);
         background3 += `${3 << (Math.min(5, mbnativeadvanceda.length))}`;
         iconfeedbacku = `${teamd.length}`;
         teamd = `${teamd.length + 1}`;
       let logoutQ = String.fromCharCode(105,110,99,111,109,112,108,101,116,101,95,101,95,52,0);
       let short__lu = String.fromCharCode(104,95,53,51,95,114,105,110,103,105,110,103,0);
      for (let l = 0; l < 1; l++) {
         macauC += tempnodata_.length | logoutQ.length;
      }
      for (let q = 0; q < 3; q++) {
         tempnodata_ = "1";
      }
      time_m1b.set(`${securityd}`, 3 ^ parseInt(`${videobufferloadingJ}`));
   }
   if ((3 * time_m1b.size) > 3 && time_m1b.size > 3) {
       let constantsz = String.fromCharCode(120,95,51,50,95,103,101,110,101,114,105,99,0);
       let playercommona = 0;
      for (let o = 0; o < 3; o++) {
          let hookH: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,95,111,95,48,0),String.fromCharCode(98,101,103,105,110,95,116,95,53,51,0)], [String.fromCharCode(109,105,110,115,95,50,95,56,54,0),String.fromCharCode(120,95,49,57,95,112,114,111,99,101,115,115,0)], [String.fromCharCode(101,120,116,114,97,99,116,101,100,95,122,95,51,56,0),String.fromCharCode(114,95,49,50,95,109,117,108,116,105,108,105,110,101,0)]]);
          let vietnamX: Array<any> = [258, 419, 24];
          let abidetectG = String.fromCharCode(99,97,112,105,116,97,108,105,122,101,95,102,95,52,57,0);
          let iconwatchnowS = 4.0;
         constantsz = `${playercommona}`;
         hookH = new Map([[`${hookH.size}`, abidetectG.length]]);
         vietnamX.push(parseInt(`${iconwatchnowS}`) >> (Math.min(abidetectG.length, 3)));
         iconwatchnowS -= parseFloat(`${abidetectG.length / 2}`);
      }
      if (3 == (playercommona - 5)) {
         playercommona ^= 1 + constantsz.length;
      }
      while (1 <= (4 & playercommona) && (playercommona & 4) <= 4) {
         playercommona /= Math.max(constantsz.length, 3);
         break;
      }
      let iconadslinkb = String.fromCharCode(107,95,122,0) == constantsz;
      do {
         constantsz += `${playercommona / 1}`;
         if (iconadslinkb) {
            break;
         }
      } while (iconadslinkb && (2 >= (playercommona * constantsz.length)));
          let bootsplashY = String.fromCharCode(98,95,48,95,115,108,105,99,101,100,0);
         constantsz = `${constantsz.length & playercommona}`;
         bootsplashY += "3";
      let boote = 6726435 <= playercommona;
      do {
         playercommona &= playercommona / (Math.max(constantsz.length, 2));
         if (boote) {
            break;
         }
      } while ((constantsz.length >= 5) && boote);
      time_m1b.set(`${stationz}`, parseInt(`${orientationt}`));
   }
   if (stationz < v_positionu.size) {
      v_positionu.set(reactnavigationZ, 2);
   }
       let catalogu = 2.0;
       let refreshborderlessz = 0;
         catalogu += parseFloat(`${refreshborderlessz / 1}`);
          let zhengpianI = String.fromCharCode(114,101,102,101,114,114,97,108,95,101,95,56,54,0);
          let inouttargetredG = 5;
          let resendG = String.fromCharCode(119,97,110,116,95,98,95,51,52,0);
         catalogu += parseFloat(`${refreshborderlessz}`);
         zhengpianI += `${zhengpianI.length}`;
         inouttargetredG &= inouttargetredG;
         resendG = `${resendG.length * inouttargetredG}`;
      if ((refreshborderlessz / (Math.max(5, 8))) <= 4 && 5 <= (refreshborderlessz / (Math.max(parseInt(`${catalogu}`), 5)))) {
         refreshborderlessz /= Math.max(4, refreshborderlessz - 1);
      }
         refreshborderlessz -= 3 | parseInt(`${catalogu}`);
         refreshborderlessz += parseInt(`${catalogu}`) * 2;
         catalogu /= Math.max(parseFloat(`${parseInt(`${catalogu}`)}`), 2);
      reactnativejss = 32 < refreshborderlessz;
   if (5 < (4 * v_positionu.size)) {
      securityd = emojiheartv >= 31.71 || 76 >= stationz;
   }
      videobufferloadingJ /= Math.max(2, parseFloat(`${parseInt(`${videobufferloadingJ}`) & stationz}`));
      securityd = !securityd;
       let privilege_ = 3;
       let iconnotificationnewv: Array<any> = [256, 83, 596];
          let buffern = 2;
          let frame_csM = String.fromCharCode(98,111,117,110,99,105,110,103,95,120,95,51,0);
         iconnotificationnewv.push(iconnotificationnewv.length & 2);
         buffern /= Math.max(1, frame_csM.length);
         frame_csM = `${frame_csM.length}`;
         iconnotificationnewv.push(privilege_);
          let classesk = false;
         iconnotificationnewv.push(3 << (Math.min(3, iconnotificationnewv.length)));
         iconnotificationnewv = [iconnotificationnewv.length];
          let taiwanq: Array<any> = [606, 407];
         privilege_ &= iconnotificationnewv.length - 1;
         taiwanq = [2];
         iconnotificationnewv = [1 & privilege_];
      reactnativejss = privilege_ >= 76;
      reactnavigationZ += `${2 & parseInt(`${emojiheartv}`)}`;
        resetForm();
    }

    const onSubmitForm = async () => {
       let snewsG = 2.0;
    let privacyM: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,105,110,103,95,49,95,51,54,0),false ], [String.fromCharCode(110,111,110,114,100,95,56,95,51,55,0),false ]]);
    let inactive7 = String.fromCharCode(115,95,51,52,95,102,108,118,101,110,99,0);
    let giftT = 4.0;
    let math2 = String.fromCharCode(99,102,115,116,114,101,97,109,95,98,95,57,49,0);
    let chartk = 3;
    let mimod: Map<any, any> = new Map([[String.fromCharCode(105,95,55,52,95,116,114,105,99,107,108,101,0),905], [String.fromCharCode(102,95,56,57,95,97,99,116,117,97,108,108,121,0),841], [String.fromCharCode(100,95,54,57,95,114,101,97,100,99,98,0),211]]);
    let rockety = 2.0;
    let weibob = 1;
    let forwardB: Array<any> = [143, 537, 538];
    let ping9 = 1.0;
    let internet0: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,95,99,95,54,54,0),772], [String.fromCharCode(115,116,100,101,114,114,95,97,95,54,52,0),245], [String.fromCharCode(115,112,101,99,116,105,109,101,95,110,95,57,53,0),203]]);
    let minimizeL = 1.0;
    let sorto = 5.0;
      forwardB.push(1);
      internet0.set(`${chartk}`, 1);

        if (usernameErrMsg !== null) return;

   let gradlex = 6556230 <= math2.length;
   do {
      math2 += `${privacyM.size - 2}`;
      if (gradlex) {
         break;
      }
   } while (gradlex && (1.40 == (giftT + 3.23) && (math2.length + parseInt(`${giftT}`)) == 1));
       let logind = String.fromCharCode(97,95,57,95,116,105,108,101,100,0);
       let grayB: Array<any> = [911, 816];
       let downarrowj = false;
      while (grayB.length >= 5) {
         logind = `${grayB.length}`;
         break;
      }
         grayB.push(grayB.length);
         grayB = [(logind.length - (downarrowj ? 3 : 4))];
          let faviconE: Map<any, any> = new Map([[String.fromCharCode(104,95,56,95,100,102,115,116,0),false ], [String.fromCharCode(98,95,49,51,95,112,114,101,99,0),false ], [String.fromCharCode(105,110,112,117,116,115,95,52,95,51,57,0),false ]]);
          let lessS = String.fromCharCode(102,95,50,49,95,115,108,105,99,101,100,0);
          let detailp: Array<any> = [686, 515, 612];
         logind = "1";
         faviconE = new Map([[`${detailp.length}`, lessS.length]]);
         lessS += `${lessS.length}`;
         detailp = [lessS.length];
         logind = `${logind.length}`;
      while (logind.length == 4) {
         logind = `${grayB.length}`;
         break;
      }
         downarrowj = downarrowj && grayB.length < 79;
      while (1 > (logind.length & grayB.length) || (logind.length & grayB.length) > 1) {
         logind = `${grayB.length}`;
         break;
      }
         downarrowj = !downarrowj;
      forwardB.push(parseInt(`${rockety}`));

        if (isSubmitting) return;

      forwardB = [1 >> (Math.min(4, Math.abs(parseInt(`${rockety}`))))];
      mimod.set(`${ping9}`, parseInt(`${ping9}`) / (Math.max(5, math2.length)));
        setSubmitting(true);

       let accepteda = String.fromCharCode(108,95,50,51,95,114,101,97,110,97,108,121,122,101,0);
       let owngoala = String.fromCharCode(106,95,53,95,100,105,109,109,105,110,103,0);
       let basketballplayerplaceholderz: Map<any, any> = new Map([[String.fromCharCode(113,95,51,53,95,108,105,98,97,111,109,0),String.fromCharCode(107,95,54,53,95,108,97,117,110,99,104,101,100,0)], [String.fromCharCode(98,95,52,51,95,97,99,99,101,115,115,0),String.fromCharCode(99,95,48,95,114,101,109,111,118,101,103,114,97,105,110,0)]]);
         basketballplayerplaceholderz = new Map([[owngoala, accepteda.length]]);
         basketballplayerplaceholderz = new Map([[accepteda, owngoala.length >> (Math.min(Math.abs(3), 5))]]);
          let kuaishouy = String.fromCharCode(117,110,97,108,105,103,110,101,100,95,98,95,51,50,0);
         accepteda = `${owngoala.length}`;
         kuaishouy += `${(String.fromCharCode(55,0) == kuaishouy ? kuaishouy.length : kuaishouy.length)}`;
      let traminiU = basketballplayerplaceholderz.size <= 9297772;
      do {
         basketballplayerplaceholderz.set(accepteda, (accepteda == String.fromCharCode(112,0) ? basketballplayerplaceholderz.size : accepteda.length));
         if (traminiU) {
            break;
         }
      } while (traminiU && (owngoala.includes(`${basketballplayerplaceholderz.size}`)));
         basketballplayerplaceholderz.set(`${owngoala}`, 3);
         accepteda = `${basketballplayerplaceholderz.size}`;
      if (accepteda.length > 2) {
         owngoala = `${(owngoala == String.fromCharCode(57,0) ? basketballplayerplaceholderz.size : owngoala.length)}`;
      }
      for (let y = 0; y < 3; y++) {
         basketballplayerplaceholderz = new Map([[`${basketballplayerplaceholderz.size}`, (accepteda == String.fromCharCode(56,0) ? accepteda.length : basketballplayerplaceholderz.size)]]);
      }
      let sourceS = accepteda.length <= 6478125;
      do {
         accepteda = `${owngoala.length}`;
         if (sourceS) {
            break;
         }
      } while ((3 > (1 ^ accepteda.length) || 1 > (basketballplayerplaceholderz.size ^ accepteda.length)) && sourceS);
      weibob += weibob | 3;
       let launch4 = 3;
       let notificationc: Map<any, any> = new Map([[String.fromCharCode(99,95,56,55,95,104,119,99,111,110,102,105,103,0),false ], [String.fromCharCode(100,101,110,115,101,95,57,95,50,53,0),true ], [String.fromCharCode(112,111,108,121,107,101,121,95,122,95,56,0),false ]]);
       let dropdownv = 4.0;
      for (let q = 0; q < 3; q++) {
         dropdownv *= parseFloat(`${2 & launch4}`);
      }
      if (4.53 >= (4.50 - dropdownv)) {
         notificationc.set(`${launch4}`, notificationc.size + launch4);
      }
      if (3.37 >= dropdownv) {
         notificationc.set(`${launch4}`, launch4);
      }
          let currente = 4.0;
         notificationc.set(`${launch4}`, launch4 / 2);
         currente += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${currente}`)), 5))}`);
      if (2 == (notificationc.size / 3)) {
         dropdownv -= parseFloat(`${launch4 - notificationc.size}`);
      }
          let floaterA = 1.0;
         launch4 ^= notificationc.size;
         floaterA += parseInt(`${floaterA}`);
      while (4.30 == (dropdownv * parseFloat(`${notificationc.size}`))) {
         dropdownv += parseFloat(`${notificationc.size & 1}`);
         break;
      }
          let libyoga6 = 5.0;
         launch4 |= parseInt(`${dropdownv}`);
         libyoga6 /= Math.max(parseFloat(`${2 + parseInt(`${libyoga6}`)}`), 4);
         notificationc.set(`${launch4}`, launch4 >> (Math.min(Math.abs(2), 1)));
      snewsG /= Math.max(1, parseFloat(`${2 >> (Math.min(2, Math.abs(mimod.size)))}`));

        try {

   if ((parseFloat(`${math2.length}`) * rockety) > 2.64) {
      rockety += parseFloat(`${parseInt(`${ping9}`) + parseInt(`${snewsG}`)}`);
   }
      giftT -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${giftT}`)), 1))}`);
            await mayi_Injury.updateUsername({
                username: username,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.username
            ) {

      giftT += parseFloat(`${weibob}`);
       let minimizee = String.fromCharCode(119,95,53,53,95,99,109,121,107,0);
      for (let l = 0; l < 1; l++) {
          let cornerkickb = String.fromCharCode(119,95,48,95,114,101,103,101,120,112,0);
         minimizee = `${minimizee.length}`;
         cornerkickb = `${1 & cornerkickb.length}`;
      }
      while (minimizee != String.fromCharCode(119,0)) {
          let videojsf = false;
          let mapbufferC = 0.0;
          let awayteamfield6: Array<any> = [255, 558, 836];
          let tempnodata5: Array<any> = [414, 871, 992];
          let volumeq = String.fromCharCode(111,109,101,103,97,95,118,95,50,52,0);
         minimizee = `${awayteamfield6.length}`;
         videojsf = tempnodata5.includes(videojsf);
         mapbufferC += (volumeq == String.fromCharCode(85,0) ? parseInt(`${mapbufferC}`) : volumeq.length);
         awayteamfield6.push(3);
         tempnodata5 = [((videojsf ? 2 : 3) - parseInt(`${mapbufferC}`))];
         break;
      }
      for (let q = 0; q < 2; q++) {
         minimizee += `${minimizee.length * 1}`;
      }
      internet0.set(`${weibob}`, (math2 == String.fromCharCode(114,0) ? weibob : math2.length));
                setUsernameErrMsg(err.errors.username);
            }

            if (!err.errors && err.message) {

   while (1.58 >= rockety) {
      chartk >>= Math.min(1, Math.abs((math2 == String.fromCharCode(76,0) ? chartk : math2.length)));
      break;
   }
      weibob |= parseInt(`${snewsG}`) << (Math.min(2, Math.abs(2)));
                setUsernameErrMsg(err.message);
            }

            setSubmitting(false);

   while (4.72 > (ping9 - internet0.size) || 1 > (internet0.size << (Math.min(Math.abs(1), 3)))) {
       let borderlessK = String.fromCharCode(116,114,105,109,95,110,95,53,57,0);
       let unselectedT: Map<any, any> = new Map([[String.fromCharCode(120,95,54,57,95,100,105,97,103,0),String.fromCharCode(104,101,114,101,95,101,95,49,48,48,0)], [String.fromCharCode(102,95,57,56,95,105,110,115,116,97,108,108,0),String.fromCharCode(103,117,97,114,97,110,116,101,101,95,54,95,54,51,0)]]);
      while (3 < (borderlessK.length / (Math.max(6, unselectedT.size)))) {
         unselectedT.set(`${borderlessK}`, borderlessK.length);
         break;
      }
         borderlessK = `${borderlessK.length ^ 2}`;
      if (unselectedT.size < borderlessK.length) {
          let configures = String.fromCharCode(109,117,108,116,105,112,108,101,114,95,57,95,55,48,0);
          let themeg: Array<any> = [132, 694, 38];
          let cluba = String.fromCharCode(97,103,97,105,110,95,53,95,51,55,0);
         borderlessK = `${2 << (Math.min(2, Math.abs(unselectedT.size)))}`;
         configures += `${themeg.length}`;
         themeg.push(cluba.length - themeg.length);
         cluba = "2";
      }
          let refreshborderlessc = true;
         unselectedT = new Map([[`${unselectedT.size}`, (borderlessK == String.fromCharCode(95,0) ? unselectedT.size : borderlessK.length)]]);
         refreshborderlessc = (!refreshborderlessc ? !refreshborderlessc : !refreshborderlessc);
      for (let e = 0; e < 3; e++) {
         unselectedT.set(`${borderlessK}`, 2 | borderlessK.length);
      }
       let stylesl = String.fromCharCode(121,95,56,95,114,101,97,100,120,98,108,111,99,107,0);
      ping9 *= internet0.size * 3;
      break;
   }
      internet0.set(`${privacyM.size}`, internet0.size);
            return;
        }


        dispatch(updateUsernameState(username));

   if (internet0.get(`${chartk}`) != null) {
       let videobufferloadingS = 4;
       let showlessy = String.fromCharCode(109,95,57,48,95,110,97,117,116,105,99,97,108,0);
       let dycreatora = 0.0;
       let boot0: Array<any> = [821, 184];
       let internetJ: Map<any, any> = new Map([[String.fromCharCode(114,95,50,56,95,118,99,111,100,101,99,0),false ], [String.fromCharCode(99,111,108,100,95,50,95,53,55,0),false ]]);
         dycreatora /= Math.max(5, showlessy.length >> (Math.min(Math.abs(2), 3)));
         boot0 = [parseInt(`${dycreatora}`) / (Math.max(showlessy.length, 4))];
      while (1 < (showlessy.length % 2) || (videobufferloadingS % 2) < 2) {
          let serviceI = 2.0;
         showlessy += `${videobufferloadingS}`;
         serviceI /= Math.max(1, parseInt(`${serviceI}`));
         break;
      }
         internetJ = new Map([[`${boot0.length}`, videobufferloadingS]]);
         showlessy += `${(String.fromCharCode(82,0) == showlessy ? showlessy.length : videobufferloadingS)}`;
          let constantsR: Array<any> = [String.fromCharCode(109,95,52,95,105,110,116,114,101,112,111,108,0), String.fromCharCode(116,95,51,52,95,114,101,99,112,0), String.fromCharCode(98,105,116,108,105,110,101,99,104,117,110,107,121,95,101,95,57,54,0)];
         internetJ = new Map([[`${internetJ.size}`, 3]]);
         constantsR = [2];
         boot0.push(parseInt(`${dycreatora}`));
      if (3 > (2 ^ boot0.length)) {
         boot0 = [3 | parseInt(`${dycreatora}`)];
      }
         showlessy = `${internetJ.size}`;
         videobufferloadingS /= Math.max(boot0.length % (Math.max(5, parseInt(`${dycreatora}`))), 4);
          let faviconT = true;
          let castingl = 1.0;
          let fullscreenminr = String.fromCharCode(99,95,54,53,95,112,101,114,109,117,116,97,116,105,111,110,0);
         boot0.push(showlessy.length);
         faviconT = 68 == fullscreenminr.length;
         castingl /= Math.max((fullscreenminr.length >> (Math.min(5, Math.abs((faviconT ? 5 : 3))))), 2);
      for (let a = 0; a < 1; a++) {
         boot0.push(3 >> (Math.min(3, boot0.length)));
      }
      let alertu = showlessy.length <= 8445903;
      do {
          let internetn: Array<any> = [549, 237];
          let renew4: Array<any> = [985, 666];
          let libavformatc = 1.0;
          let dropdownh = String.fromCharCode(105,116,120,102,109,95,49,95,51,51,0);
          let ticki: Map<any, any> = new Map([[String.fromCharCode(97,95,56,55,95,115,101,108,102,105,101,0),597], [String.fromCharCode(97,95,52,53,95,101,97,114,108,105,101,115,116,0),49], [String.fromCharCode(120,109,112,101,103,95,97,95,51,55,0),888]]);
         showlessy += `${boot0.length}`;
         internetn = [2 - dropdownh.length];
         renew4.push(1 | ticki.size);
         libavformatc *= parseFloat(`${internetn.length * renew4.length}`);
         dropdownh = `${renew4.length << (Math.min(1, Math.abs(parseInt(`${libavformatc}`))))}`;
         ticki = new Map([[`${internetn.length}`, 3]]);
         if (alertu) {
            break;
         }
      } while ((showlessy.endsWith(`${internetJ.size}`)) && alertu);
         dycreatora += showlessy.length - parseInt(`${dycreatora}`);
      for (let b = 0; b < 1; b++) {
          let booto = String.fromCharCode(111,117,116,100,101,118,115,95,117,95,53,57,0);
          let homeinactive2 = 4.0;
         showlessy = `${booto.length}`;
         booto = "1";
         homeinactive2 -= parseInt(`${homeinactive2}`) ^ parseInt(`${homeinactive2}`);
      }
      chartk &= 1 ^ chartk;
   }
   if (5.100 < (3.61 + giftT)) {
      giftT += parseFloat(`${internet0.size}`);
   }
        dispatch(changeScreenAction("修改成功"));

       let libreactperfloggerjnim = String.fromCharCode(120,95,54,54,95,112,97,110,110,105,110,103,0);
         libreactperfloggerjnim = `${libreactperfloggerjnim.length}`;
         libreactperfloggerjnim = `${libreactperfloggerjnim.length & 1}`;
      while (libreactperfloggerjnim == String.fromCharCode(102,0)) {
         libreactperfloggerjnim += `${libreactperfloggerjnim.length}`;
         break;
      }
      forwardB.push(chartk);
   for (let u = 0; u < 1; u++) {
      forwardB = [internet0.size];
   }

        if (onSubmitSuccess) onSubmitSuccess(username);

      forwardB = [2];
       let notificationA = String.fromCharCode(117,114,118,101,95,116,95,49,55,0);
      if (notificationA.endsWith(notificationA)) {
         notificationA += `${notificationA.length}`;
      }
      let ewardedh = notificationA == String.fromCharCode(55,106,52,118,57,54,102,114,112,0);
      do {
          let privacy0 = String.fromCharCode(115,95,56,52,95,119,104,105,99,104,0);
          let securityo = String.fromCharCode(98,95,52,50,95,100,101,99,98,110,0);
          let phonel: Array<any> = [104, 818, 326];
         notificationA += `${securityo.length}`;
         privacy0 += `${(String.fromCharCode(122,0) == privacy0 ? phonel.length : privacy0.length)}`;
         securityo = `${(privacy0 == String.fromCharCode(97,0) ? phonel.length : privacy0.length)}`;
         if (ewardedh) {
            break;
         }
      } while ((notificationA.length < 3) && ewardedh);
         notificationA += `${notificationA.length >> (Math.min(notificationA.length, 4))}`;
      math2 += `${privacyM.size << (Math.min(Math.abs(2), 4))}`;

        Keyboard.dismiss();

      mimod = new Map([[inactive7, parseInt(`${snewsG}`) << (Math.min(inactive7.length, 2))]]);
   for (let r = 0; r < 1; r++) {
      inactive7 = "2";
   }
        navigation.navigate("Home", {
            screen: "Profile",
        });

      chartk *= parseInt(`${ping9}`);
   while (1 <= (privacyM.size / (Math.max(4, 10))) && (4 / (Math.max(9, privacyM.size))) <= 4) {
      snewsG *= parseFloat(`${parseInt(`${rockety}`)}`);
      break;
   }

        setSubmitting(false);
    }

    return (
        <CBottomSheet
            isVisible={isVisible}
            onBackdropPress={onClose}
            isLoading={isSubmitting}
        >
            <View style={styles.headerContainer}>
                <TouchableOpacity activeOpacity={0.85} onPress={onClose}>
                    <Text style={textVariants.body}>
                        取消
                    </Text>
                </TouchableOpacity>

                <Text style={textVariants.bigHeader}>
                    设置昵称
                </Text>

                <TouchableOpacity activeOpacity={0.85} onPress={onSubmitForm}>
                    <Text style={textVariants.body}>
                        保存
                    </Text>
                </TouchableOpacity>
            </View>
            <CTextInput
                value={username}
                onChangeText={onUsernameChange}
                placeholder="输入昵称"
                showErrorStyle={usernameErrMsg !== null}
            />

            <View
                style={{
                    ...styles.dangerWrap,
                }}
            >
                <View
                    style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "row",
                        paddingRight: 40,
                    }}
                >
                    {usernameErrMsg !== null && (
                        <>
                            <Image
                                style={{
                                    height: 22,
                                    width: 22,
                                    marginRight: 5,
                                    position: "relative",
                                    top: 1,
                                }}
                                source={require("@static/images/invite/assistTextinputHook.png")}
                            />

                            <Text style={styles.danger}>{usernameErrMsg}</Text>
                        </>
                    )}
                </View>

                <Text
                    style={{
                        fontWeight: "600",
                        fontSize: 15,
                        color: "#9C9C9C",
                        paddingRight: 10,
                    }}
                >
                    {username?.replace(/\s+/g, "").length}/18
                </Text>
            </View>
        </CBottomSheet>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    dangerWrap: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    danger: {
        fontWeight: "400",
        fontSize: 15,
        textAlign: "left",
        color: "#FF3434",
    },
});