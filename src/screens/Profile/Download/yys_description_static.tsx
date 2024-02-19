import { RootStackScreenProps } from "@type"
import ScreenContainer from "../../../components/container/yys_matches"
import TitleWithBackButtonHeader from "../../../components/header/yys_away_predictionloss_header"
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useCallback, useState } from "react"
import { useTheme } from "@react-navigation/native"
import { useAppDispatch, useAppSelector } from "@hooks"
import { yysIconclosewhiteBaiduads } from "@redux"
import { yysStoreService } from "@type"
import EmptyList from "../../../components/common/yys_benefit"
import DownloadVodCard from "../../../components/download/yys_circle_questicon"
import { CheckboxSelectedSvg, CheckboxUnselectedSvg } from "@static";
import { yysPenaltyshoot } from "@type"
import ConfirmationModal from "../../../components/modal/yys_twitter"
import { Button } from "@rneui/themed"
import { removeVodFromDownloadThunk } from "@redux"

const DownloadCatalog = ({ navigation }: RootStackScreenProps<"我的下载">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<yysPenaltyshoot[]>([]);
  const allDownloads = useAppSelector(({ downloadVideoReducer }: yysIconclosewhiteBaiduads) => downloadVideoReducer.downloads)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useAppDispatch();


  const toggleHistory = (vod: yysPenaltyshoot) => {
    const filtered = removeHistory.filter((x) => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };

  const toggleOverlay = useCallback(() => {
       let mbbidM = String.fromCharCode(119,97,108,107,101,114,0);
    let lightN = String.fromCharCode(114,101,112,117,98,108,105,115,104,0);
    let largebrightnessk = String.fromCharCode(99,112,108,115,99,97,108,101,115,0);
    let handlerP = 2.0;
    let mimoX = String.fromCharCode(116,111,109,105,99,0);
    let stepo = true;
    let subinI = String.fromCharCode(107,95,54,54,95,108,97,117,110,99,104,101,100,0);
    let encryptv = 2.0;
    let componentr = 2.0;
    let predictionbannerx = String.fromCharCode(100,118,98,116,120,116,0);
    let livesharea: Array<any> = [985, 56, 116];
    let nodeM = 1;
    let positionfieldM: Map<any, any> = new Map([[String.fromCharCode(109,97,112,112,105,110,103,115,0),String.fromCharCode(100,105,114,97,99,100,115,112,0)], [String.fromCharCode(114,101,102,101,114,114,97,108,0),String.fromCharCode(104,119,97,99,99,101,108,115,0)], [String.fromCharCode(115,104,97,107,105,110,103,0),String.fromCharCode(99,111,111,114,100,105,110,97,116,105,111,110,0)]]);
   if (largebrightnessk.length < 4) {
       let shirt5 = 4;
       let moonU = String.fromCharCode(109,98,117,118,101,114,114,111,114,0);
       let libavutili = String.fromCharCode(100,105,115,116,114,97,99,116,97,98,108,101,0);
       let runtimeI = false;
       let dropdownQ = 0;
      for (let q = 0; q < 3; q++) {
         shirt5 /= Math.max(dropdownQ, 4);
      }
          let chinaZ = true;
          let debugC = String.fromCharCode(114,101,103,105,115,116,101,114,101,114,0);
         dropdownQ |= (debugC == String.fromCharCode(67,0) ? debugC.length : moonU.length);
         chinaZ = (chinaZ ? chinaZ : chinaZ);
      for (let t = 0; t < 3; t++) {
         libavutili = "2 & shirt5";
      }
       let eyeopeno: Map<any, any> = new Map([[String.fromCharCode(104,121,112,111,116,104,101,115,101,115,0),179], [String.fromCharCode(105,112,113,102,0),637]]);
       let sendW: Map<any, any> = new Map([[String.fromCharCode(104,109,109,116,0),129], [String.fromCharCode(107,95,51,0),485], [String.fromCharCode(99,111,110,115,117,109,112,116,105,111,110,0),700]]);
      while (libavutili.length <= eyeopeno.size) {
         eyeopeno.set(`${shirt5}`, 3);
         break;
      }
      if (moonU.length >= eyeopeno.size) {
         eyeopeno = new Map([[`${runtimeI}`, moonU.length]]);
      }
      let backwardl = libavutili.length <= 7315506;
      do {
          let flipperz = 4;
         libavutili = `${dropdownQ}`;
         flipperz += flipperz % (Math.max(3, 8));
         if (backwardl) {
            break;
         }
      } while (backwardl && (runtimeI));
          let animationsM = 5.0;
          let stepD: Array<any> = [String.fromCharCode(99,108,111,99,107,0), String.fromCharCode(112,115,110,114,104,118,115,0)];
         libavutili += `${eyeopeno.size >> (Math.min(Math.abs(3), 2))}`;
         animationsM /= Math.max(1, stepD.length + parseInt(`${animationsM}`));
         stepD = [1];
      for (let l = 0; l < 1; l++) {
         libavutili = "1";
      }
       let mbnative0 = 3;
       let iconsubssuccessF = 2;
       let eighteenm = String.fromCharCode(109,101,114,103,101,100,0);
       let defaultroombgY = String.fromCharCode(112,104,97,115,101,0);
          let backiconT = 1.0;
          let crownS = String.fromCharCode(102,97,105,108,97,98,108,101,0);
          let heartj = String.fromCharCode(98,101,115,116,0);
         defaultroombgY += `${((runtimeI ? 3 : 2) / (Math.max(sendW.size, 5)))}`;
         backiconT += parseFloat(`${parseInt(`${backiconT}`) & 3}`);
         crownS = "2";
         heartj += `${(crownS == String.fromCharCode(78,0) ? parseInt(`${backiconT}`) : crownS.length)}`;
         shirt5 >>= Math.min(libavutili.length, 1);
         libavutili += `${(defaultroombgY == String.fromCharCode(52,0) ? defaultroombgY.length : shirt5)}`;
      for (let j = 0; j < 2; j++) {
          let videox = String.fromCharCode(99,111,110,115,116,97,110,116,115,0);
          let templ: Map<any, any> = new Map([[String.fromCharCode(99,109,115,103,0),true ], [String.fromCharCode(103,112,116,111,112,116,115,0),false ], [String.fromCharCode(115,104,97,114,112,101,110,105,110,103,0),true ]]);
          let editP: Array<any> = [String.fromCharCode(104,105,103,104,98,105,116,115,0), String.fromCharCode(112,97,116,99,104,0)];
          let more6 = 5.0;
         eyeopeno = new Map([[`${eyeopeno.size}`, mbnative0 | 1]]);
         videox = `${videox.length * editP.length}`;
         templ.set(`${more6}`, templ.size | parseInt(`${more6}`));
         editP.push(videox.length / (Math.max(1, 9)));
      }
      largebrightnessk = `${parseInt(`${componentr}`)}`;
   }
       let shirt5Q = 4.0;
       let redcirclebgR = 4;
       let countdown_ = String.fromCharCode(99,111,109,97,110,100,0);
       let alertV = String.fromCharCode(97,118,102,105,108,116,101,114,114,101,115,0);
      let diceh = alertV.length >= 5636288;
      do {
          let predictionbannersharedk = 0.0;
         alertV = `${redcirclebgR * 3}`;
         predictionbannersharedk -= parseInt(`${predictionbannersharedk}`) / (Math.max(parseInt(`${predictionbannersharedk}`), 7));
         if (diceh) {
            break;
         }
      } while ((alertV.length == 5 || countdown_ == String.fromCharCode(112,0)) && diceh);
      let thailandS = countdown_ == String.fromCharCode(53,50,113,119,101,121,52,95,113,0);
      do {
          let project_ = String.fromCharCode(99,111,108,115,107,105,112,0);
          let shootG = false;
         countdown_ += `${parseInt(`${shirt5Q}`)}`;
         project_ = `${project_.length % 1}`;
         shootG = !shootG;
         if (thailandS) {
            break;
         }
      } while ((countdown_.includes(`${alertV.length}`)) && thailandS);
      if (!countdown_.includes(`${shirt5Q}`)) {
         countdown_ = `${(countdown_ == String.fromCharCode(75,0) ? redcirclebgR : countdown_.length)}`;
      }
      for (let f = 0; f < 3; f++) {
         shirt5Q *= parseFloat(`${countdown_.length ^ 1}`);
      }
      for (let d = 0; d < 1; d++) {
         alertV += `${redcirclebgR}`;
      }
       let libreactnativeblobb = String.fromCharCode(105,110,116,101,114,108,97,99,101,0);
       let penalty9 = String.fromCharCode(116,115,120,0);
      for (let t = 0; t < 1; t++) {
         libreactnativeblobb += "3";
      }
         shirt5Q += (parseFloat(`${String.fromCharCode(115,0) == libreactnativeblobb ? libreactnativeblobb.length : parseInt(`${shirt5Q}`)}`));
      componentr *= redcirclebgR ^ 3;
       let nativeexy = String.fromCharCode(108,95,50,0);
       let gmailv = 5;
      let sellt = 7359050 <= gmailv;
      do {
         gmailv %= Math.max(nativeexy.length << (Math.min(5, Math.abs(gmailv))), 2);
         if (sellt) {
            break;
         }
      } while (sellt && (5 > gmailv));
      for (let g = 0; g < 1; g++) {
          let nativemodule7: Array<any> = [491, 565];
          let mathe = String.fromCharCode(99,111,100,105,110,103,0);
          let release_cK = true;
          let yingY = String.fromCharCode(108,115,102,112,111,108,121,0);
         nativeexy = `${nativeexy.length ^ 1}`;
         nativemodule7.push((String.fromCharCode(101,0) == mathe ? mathe.length : nativemodule7.length));
         release_cK = nativemodule7.length <= 35;
         yingY += `${mathe.length}`;
      }
          let unselectede: Array<any> = [285, 559];
          let gifgoalD = String.fromCharCode(99,98,112,104,105,0);
          let fastr = 3.0;
         gmailv *= gifgoalD.length;
         unselectede.push(parseInt(`${fastr}`) ^ unselectede.length);
         gifgoalD = `${unselectede.length / (Math.max(5, parseInt(`${fastr}`)))}`;
      while (1 >= gmailv) {
         nativeexy += `${(nativeexy == String.fromCharCode(100,0) ? nativeexy.length : gmailv)}`;
         break;
      }
         nativeexy += `${nativeexy.length % (Math.max(9, gmailv))}`;
       let libavutilN = false;
       let homeloadingd = true;
      componentr /= Math.max(largebrightnessk.length, 3);
      predictionbannerx += `${(mbbidM == String.fromCharCode(87,0) ? mbbidM.length : parseInt(`${handlerP}`))}`;
      lightN += `${(largebrightnessk == String.fromCharCode(72,0) ? largebrightnessk.length : (stepo ? 4 : 1))}`;
      mbbidM += `${3 << (Math.min(1, Math.abs(parseInt(`${encryptv}`))))}`;
       let videobufferloadingR = false;
       let componentregistry6 = 3;
          let math2 = 3.0;
         videobufferloadingR = videobufferloadingR && 10.56 >= math2;
         videobufferloadingR = !videobufferloadingR;
      for (let g = 0; g < 1; g++) {
         componentregistry6 %= Math.max(2, 1);
      }
      let reddownarrow3 = videobufferloadingR ? !videobufferloadingR : videobufferloadingR;
      do {
         videobufferloadingR = !videobufferloadingR;
         if (reddownarrow3) {
            break;
         }
      } while (reddownarrow3 && (videobufferloadingR));
         componentregistry6 -= componentregistry6 ^ 2;
         videobufferloadingR = componentregistry6 <= 8;
      handlerP *= 1 ^ predictionbannerx.length;
       let text9: Map<any, any> = new Map([[String.fromCharCode(98,117,99,107,101,116,97,108,108,111,99,0),701], [String.fromCharCode(100,101,99,111,109,112,111,115,101,0),289]]);
       let iconrightorangeV = String.fromCharCode(103,114,97,110,117,108,101,0);
         text9 = new Map([[`${text9.size}`, iconrightorangeV.length / 1]]);
          let shrinkW = String.fromCharCode(116,101,115,116,105,109,103,97,114,105,0);
          let subsA = String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,115,0);
         iconrightorangeV += `${(String.fromCharCode(117,0) == subsA ? subsA.length : shrinkW.length)}`;
       let with_uwu = String.fromCharCode(98,121,116,101,95,112,95,50,53,0);
       let bgvipxvodL = 2.0;
          let moreC = String.fromCharCode(118,116,114,107,0);
         bgvipxvodL *= moreC.length * 1;
         text9.set(`${bgvipxvodL}`, 3);
      componentr /= Math.max(4, ((stepo ? 1 : 5) << (Math.min(Math.abs(parseInt(`${encryptv}`)), 5))));
      mbbidM = `${livesharea.length}`;
   for (let p = 0; p < 1; p++) {
       let libavutilr = String.fromCharCode(115,112,101,97,107,105,110,103,0);
       let j_positionT = true;
      for (let h = 0; h < 2; h++) {
         j_positionT = libavutilr.includes(`${j_positionT}`);
      }
       let pressurei: Array<any> = [528, 238, 591];
      subinI += `${nodeM}`;
   }
   for (let e = 0; e < 2; e++) {
      encryptv += mbbidM.length;
   }
   while (5.71 >= (handlerP / 2.89)) {
      stepo = (mbbidM.length >> (Math.min(5, mimoX.length))) < 18;
      break;
   }
       let flipperl = String.fromCharCode(105,110,116,108,101,0);
       let shootyesgoalA = 5;
       let baselineI = 0.0;
      if (flipperl.startsWith(`${shootyesgoalA}`)) {
         shootyesgoalA -= shootyesgoalA;
      }
         baselineI /= Math.max(parseFloat(`${shootyesgoalA >> (Math.min(Math.abs(parseInt(`${baselineI}`)), 2))}`), 1);
      let userB = shootyesgoalA >= 4978620;
      do {
         shootyesgoalA &= parseInt(`${baselineI}`) & flipperl.length;
         if (userB) {
            break;
         }
      } while ((1 == (shootyesgoalA << (Math.min(flipperl.length, 3))) || 1 == (flipperl.length << (Math.min(4, Math.abs(shootyesgoalA))))) && userB);
         flipperl += `${shootyesgoalA}`;
          let dragL = 2.0;
         shootyesgoalA /= Math.max(2 | shootyesgoalA, 2);
         dragL += parseInt(`${dragL}`) - parseInt(`${dragL}`);
          let hometeamfield5: Map<any, any> = new Map([[String.fromCharCode(110,100,101,120,0),false ], [String.fromCharCode(103,97,105,110,0),false ], [String.fromCharCode(117,110,100,101,108,101,103,97,116,101,0),false ]]);
         flipperl += "1";
         hometeamfield5 = new Map([[`${hometeamfield5.size}`, hometeamfield5.size]]);
      let emojiheart2 = 7576100 <= shootyesgoalA;
      do {
         shootyesgoalA /= Math.max(parseInt(`${baselineI}`), 3);
         if (emojiheart2) {
            break;
         }
      } while (emojiheart2 && (5.81 < (baselineI / 3.20) || 2 < (shootyesgoalA / (Math.max(8, parseInt(`${baselineI}`))))));
         shootyesgoalA |= shootyesgoalA;
      while (!flipperl.endsWith(`${shootyesgoalA}`)) {
          let langT = false;
         shootyesgoalA -= 1;
         break;
      }
      mimoX += `${shootyesgoalA & parseInt(`${baselineI}`)}`;
   for (let h = 0; h < 1; h++) {
       let rncoreE = String.fromCharCode(112,114,111,109,105,115,101,115,0);
       let materialY = String.fromCharCode(97,99,100,115,112,0);
      if (materialY != String.fromCharCode(80,0)) {
         rncoreE = `${2 & materialY.length}`;
      }
       let morem = String.fromCharCode(102,97,110,111,117,116,0);
      let overlayO = morem.length >= 7332372;
      do {
          let assetsw = String.fromCharCode(100,116,111,97,0);
          let orientationq = false;
         morem += `${(String.fromCharCode(71,0) == rncoreE ? (orientationq ? 3 : 5) : rncoreE.length)}`;
         assetsw = `${assetsw.length}`;
         orientationq = String.fromCharCode(65,0) == assetsw;
         if (overlayO) {
            break;
         }
      } while (overlayO && (morem.length < 5));
         morem += `${morem.length ^ 3}`;
         materialY += `${materialY.length << (Math.min(morem.length, 1))}`;
      if (!materialY.includes(`${morem.length}`)) {
         materialY += `${2 & morem.length}`;
      }
      nodeM -= materialY.length ^ mimoX.length;
   }
      subinI = `${((stepo ? 4 : 4) * parseInt(`${handlerP}`))}`;
   if (lightN.length <= 5) {
       let i_playery = String.fromCharCode(104,105,110,116,0);
       let const_o5O = String.fromCharCode(104,97,110,100,108,105,110,103,0);
       let sendw = String.fromCharCode(115,117,98,108,97,121,101,114,115,0);
      while (sendw == String.fromCharCode(120,0)) {
         const_o5O = "3";
         break;
      }
         sendw += `${const_o5O.length % 2}`;
       let ping1 = 0.0;
       let closeV = 3.0;
      let chatbotphotoy = 4981993.0 >= closeV;
      do {
          let configureG = 0.0;
          let static_upY = 1.0;
          let template_aD = 3.0;
          let nodeh = 3.0;
         closeV /= Math.max(parseFloat(`${3}`), 2);
         configureG -= parseFloat(`${parseInt(`${static_upY}`) % 1}`);
         static_upY += parseFloat(`${1 * parseInt(`${nodeh}`)}`);
         template_aD -= parseFloat(`${2 + parseInt(`${configureG}`)}`);
         nodeh *= 1 % (Math.max(2, parseInt(`${nodeh}`)));
         if (chatbotphotoy) {
            break;
         }
      } while (chatbotphotoy && ((closeV / (Math.max(5, ping1))) >= 3.64));
      let verticalk = sendw == String.fromCharCode(51,101,48,49,108,53,104,0);
      do {
         sendw += "3";
         if (verticalk) {
            break;
         }
      } while (verticalk && ((parseFloat(`${sendw.length}`) - closeV) <= 3.12));
         closeV /= Math.max(4, parseFloat(`${sendw.length & 1}`));
      let libmapbufferjnif = 4962979.0 <= ping1;
      do {
          let langd: Map<any, any> = new Map([[String.fromCharCode(108,101,110,103,116,104,115,0),119], [String.fromCharCode(116,114,121,0),672]]);
          let libreactS: Array<any> = [663, 39, 121];
          let selectiono: Map<any, any> = new Map([[String.fromCharCode(110,97,109,101,115,112,97,99,101,115,0),423], [String.fromCharCode(121,117,118,97,121,117,118,108,101,0),452]]);
         ping1 += parseFloat(`${i_playery.length}`);
         langd.set(`${langd.size}`, selectiono.size);
         libreactS.push(langd.size << (Math.min(Math.abs(1), 4)));
         selectiono.set(`${langd.size}`, langd.size);
         if (libmapbufferjnif) {
            break;
         }
      } while (libmapbufferjnif && ((parseInt(`${ping1}`) * const_o5O.length) >= 3 && (const_o5O.length | 3) >= 1));
      while (2.82 >= (ping1 / (Math.max(6, parseFloat(`${sendw.length}`)))) || (sendw.length / (Math.max(8, parseInt(`${ping1}`)))) >= 4) {
         sendw += "2";
         break;
      }
         closeV *= parseFloat(`${parseInt(`${ping1}`) / (Math.max(parseInt(`${closeV}`), 5))}`);
      stepo = 100.6 == handlerP;
   }
      mimoX = `${largebrightnessk.length | 3}`;
   if (3 == mimoX.length || lightN != String.fromCharCode(122,0)) {
      lightN = `${predictionbannerx.length % (Math.max(mimoX.length, 10))}`;
   }
   let appleV = 8138696.0 >= encryptv;
   do {
      encryptv *= mbbidM.length / (Math.max(10, parseInt(`${handlerP}`)));
      if (appleV) {
         break;
      }
   } while (appleV && (4.74 <= (encryptv * nodeM)));
   if (componentr > largebrightnessk.length) {
      largebrightnessk += `${predictionbannerx.length ^ 2}`;
   }
   if (mbbidM == String.fromCharCode(110,0)) {
       let styleY = 1.0;
       let dplusl = false;
         styleY *= (parseFloat(`${(dplusl ? 5 : 2) >> (Math.min(Math.abs(parseInt(`${styleY}`)), 5))}`));
          let reactnavigation7 = 2.0;
         dplusl = styleY == 49.74;
         reactnavigation7 *= parseFloat(`${parseInt(`${reactnavigation7}`) % (Math.max(parseInt(`${reactnavigation7}`), 3))}`);
          let debugE: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,99,116,101,100,0),false ], [String.fromCharCode(117,95,49,0),false ]]);
          let home3 = 5.0;
         dplusl = !dplusl;
         debugE.set(`${home3}`, parseInt(`${home3}`));
         dplusl = styleY > 16.10;
          let libyogaq = 4.0;
         dplusl = 40.39 < libyogaq && dplusl;
         dplusl = 4.48 < styleY;
      largebrightnessk += `${parseInt(`${encryptv}`)}`;
   }
   while ((componentr * 2.85) <= 5.70) {
       let sharedJ = String.fromCharCode(104,114,97,109,0);
       let eactW = String.fromCharCode(101,107,121,0);
          let hometeamfieldG = String.fromCharCode(115,116,97,98,108,101,0);
          let configV = 2;
         sharedJ = `${configV % 2}`;
         hometeamfieldG = `${hometeamfieldG.length}`;
         configV <<= Math.min(Math.abs(1 / (Math.max(4, hometeamfieldG.length))), 2);
         sharedJ = `${(sharedJ == String.fromCharCode(48,0) ? sharedJ.length : eactW.length)}`;
         sharedJ = `${eactW.length * 2}`;
         eactW = `${eactW.length}`;
         eactW = `${eactW.length}`;
      let historyi = eactW.length <= 9221518;
      do {
          let updatesK: Map<any, any> = new Map([[String.fromCharCode(100,105,103,101,115,116,98,121,111,98,106,0),true ], [String.fromCharCode(109,98,99,115,0),false ], [String.fromCharCode(116,105,110,116,101,114,108,97,99,101,0),true ]]);
          let basketballawayteamR: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,101,0),143], [String.fromCharCode(111,112,116,115,0),970], [String.fromCharCode(100,105,109,101,110,115,0),282]]);
          let bannerX = 3.0;
          let fullscreenminp = String.fromCharCode(100,117,112,115,0);
          let paginationW = String.fromCharCode(97,116,116,97,99,107,0);
         eactW += `${fullscreenminp.length}`;
         updatesK = new Map([[paginationW, 3]]);
         basketballawayteamR = new Map([[`${updatesK.size}`, 3 >> (Math.min(1, Math.abs(basketballawayteamR.size)))]]);
         bannerX += 3;
         fullscreenminp = `${updatesK.size | parseInt(`${bannerX}`)}`;
         paginationW += `${paginationW.length >> (Math.min(Math.abs(2), 1))}`;
         if (historyi) {
            break;
         }
      } while (historyi && (sharedJ.length > eactW.length));
      componentr /= Math.max(1 >> (Math.min(2, Math.abs(parseInt(`${componentr}`)))), 3);
      break;
   }
      stepo = String.fromCharCode(104,0) == lightN;
   if (mbbidM.endsWith(subinI)) {
       let giflivestreamingx = String.fromCharCode(100,101,108,105,118,101,114,0);
      if (giflivestreamingx == String.fromCharCode(82,0) || giflivestreamingx == String.fromCharCode(83,0)) {
         giflivestreamingx += `${giflivestreamingx.length * 2}`;
      }
      while (giflivestreamingx != giflivestreamingx) {
         giflivestreamingx = `${giflivestreamingx.length}`;
         break;
      }
         giflivestreamingx = `${giflivestreamingx.length}`;
      mbbidM += `${parseInt(`${encryptv}`) >> (Math.min(5, Math.abs(2)))}`;
   }

    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const renderItem = useCallback(({ item, index }: { item: yysStoreService, index: number }) => {
    return (
      <View style={styles.downloadItem}>
        {isEditing && (
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => toggleHistory(item.vod)}>
            {removeHistory.some(x => x.vod_id === item.vod.vod_id) ? (
              <CheckboxSelectedSvg height={icons.sizes.m} width={icons.sizes.m} />
            ) : (
              <CheckboxUnselectedSvg
                height={icons.sizes.m}
                width={icons.sizes.m}
              />
            )}
          </TouchableOpacity>
        )}
        <DownloadVodCard
          activeOpacity={isEditing ? 1 : 0.2}
          download={item}
          index={index}
          vod_pic_list={[]}
          imgOrientation="horizontal"
          onPress={() => {
            if (isEditing) {
              toggleHistory(item.vod)
            } else {
              navigation.navigate('下载详情', { vodId: item.vod.vod_id })
            }
          }}
        />
      </View>
    );


  }, [isEditing, removeHistory])

  const handleSeeMore = useCallback(() => {
       let fullm = 4.0;
    let zhubog = 1.0;
    let downloaderh = true;
    let hometeamfieldT = String.fromCharCode(112,107,116,99,112,121,0);
    let styley = String.fromCharCode(108,101,114,112,95,99,95,54,53,0);
    let debug1: Map<any, any> = new Map([[String.fromCharCode(103,97,116,104,101,114,105,110,103,95,55,95,57,53,0),String.fromCharCode(97,115,115,101,115,115,109,101,110,116,0)], [String.fromCharCode(99,111,100,101,114,0),String.fromCharCode(105,110,100,101,110,116,97,116,105,111,110,0)]]);
    let lessV = String.fromCharCode(97,109,116,0);
    let middlebrightnessz = 2.0;
    let canvasu = String.fromCharCode(98,108,101,110,100,109,111,100,101,0);
    let yingn = 2.0;
    let libffmpegkit0: Array<any> = [673, 568];
    let libreactnativejniD = 4.0;
   for (let e = 0; e < 1; e++) {
      middlebrightnessz *= 1;
   }
   if (yingn <= 4.76) {
      downloaderh = lessV == String.fromCharCode(82,0);
   }
      middlebrightnessz /= Math.max(4, lessV.length);
   let gestureX = canvasu.length <= 7791970;
   do {
      canvasu += "1";
      if (gestureX) {
         break;
      }
   } while ((1 < canvasu.length) && gestureX);
   for (let x = 0; x < 3; x++) {
      fullm -= parseFloat(`${canvasu.length % 3}`);
   }
   let eventG = 8692475.0 >= fullm;
   do {
      fullm -= parseFloat(`${hometeamfieldT.length}`);
      if (eventG) {
         break;
      }
   } while (eventG && ((fullm + 1.70) > 3.42));
      lessV = `${1 - parseInt(`${fullm}`)}`;
   for (let j = 0; j < 2; j++) {
      styley += `${lessV.length << (Math.min(Math.abs(2), 2))}`;
   }
   for (let z = 0; z < 2; z++) {
      styley = `${debug1.size >> (Math.min(Math.abs(1), 4))}`;
   }
       let baiduadsE: Map<any, any> = new Map([[String.fromCharCode(110,112,111,105,110,116,115,0),true ], [String.fromCharCode(108,111,99,97,108,104,111,115,116,0),false ], [String.fromCharCode(100,105,115,107,0),false ]]);
       let klevini = 4.0;
       let e_hashJ = true;
         e_hashJ = baiduadsE.size < 62 || 61.73 < klevini;
      let modeH = e_hashJ ? !e_hashJ : e_hashJ;
      do {
         e_hashJ = baiduadsE.size == 54;
         if (modeH) {
            break;
         }
      } while ((2 == (baiduadsE.size % 5)) && modeH);
         klevini -= baiduadsE.size;
      let dicelogoM = 6523955 >= baiduadsE.size;
      do {
          let componentZ = 1.0;
          let singaporeg = false;
          let iconclosewhitewithbgH = 3.0;
         baiduadsE = new Map([[`${singaporeg}`, 3 - parseInt(`${iconclosewhitewithbgH}`)]]);
         componentZ += parseFloat(`${2 * parseInt(`${componentZ}`)}`);
         singaporeg = 22.65 < componentZ;
         if (dicelogoM) {
            break;
         }
      } while (dicelogoM && ((4 | baiduadsE.size) <= 2));
         e_hashJ = klevini == 47.33 && !e_hashJ;
         klevini -= baiduadsE.size ^ 3;
      for (let o = 0; o < 1; o++) {
         klevini /= Math.max(2 | parseInt(`${klevini}`), 4);
      }
      for (let b = 0; b < 3; b++) {
          let scoreP = 0.0;
          let arrowdown2 = String.fromCharCode(103,114,101,101,100,121,0);
          let imagemanagere = 2;
          let transfer_ = 2;
         baiduadsE = new Map([[`${baiduadsE.size}`, arrowdown2.length]]);
         scoreP += transfer_;
         arrowdown2 += `${imagemanagere}`;
      }
         e_hashJ = !e_hashJ;
      hometeamfieldT += `${libffmpegkit0.length % 2}`;
      debug1.set(hometeamfieldT, (hometeamfieldT == String.fromCharCode(78,0) ? hometeamfieldT.length : libffmpegkit0.length));
   while ((5 + lessV.length) > 5 || 1 > (lessV.length + 5)) {
      middlebrightnessz -= 3;
      break;
   }
   let reminders = styley.length <= 9501998;
   do {
       let mbnativec: Array<any> = [647, 688, 308];
       let inviteA = 0.0;
      while (4.51 > (parseFloat(`${mbnativec.length}`) * inviteA)) {
         inviteA *= parseFloat(`${mbnativec.length - parseInt(`${inviteA}`)}`);
         break;
      }
      if (3.13 >= (inviteA - parseFloat(`${mbnativec.length}`))) {
          let greend: Map<any, any> = new Map([[String.fromCharCode(97,98,108,0),String.fromCharCode(115,117,98,116,121,112,101,0)], [String.fromCharCode(99,121,99,108,101,100,0),String.fromCharCode(102,98,100,101,118,0)]]);
          let giftbuttont = 4.0;
          let frame_x9: Array<any> = [155, 701];
          let traminim: Array<any> = [String.fromCharCode(107,95,51,49,95,114,101,108,97,116,105,118,101,108,121,0), String.fromCharCode(105,116,101,114,97,116,111,114,0)];
         inviteA -= parseFloat(`${traminim.length}`);
         greend.set(`${giftbuttont}`, 2 << (Math.min(4, Math.abs(parseInt(`${giftbuttont}`)))));
         frame_x9.push(greend.size ^ 3);
         traminim.push(greend.size);
      }
      let successV = 5875756 <= mbnativec.length;
      do {
         mbnativec = [2 % (Math.max(9, mbnativec.length))];
         if (successV) {
            break;
         }
      } while (((parseFloat(`${mbnativec.length}`) - inviteA) < 3.23 || 2.1 < (inviteA - 3.23)) && successV);
         inviteA /= Math.max(parseFloat(`${3}`), 4);
      for (let d = 0; d < 2; d++) {
          let mbbannerP = String.fromCharCode(108,97,109,112,0);
          let awayz = String.fromCharCode(99,108,105,112,112,105,110,103,0);
         inviteA -= parseFloat(`${2}`);
         mbbannerP = `${awayz.length % (Math.max(3, 1))}`;
         awayz = `${3 & awayz.length}`;
      }
      if ((inviteA - parseFloat(`${mbnativec.length}`)) < 4.13) {
         inviteA *= parseFloat(`${mbnativec.length}`);
      }
      styley += `${hometeamfieldT.length / (Math.max(7, mbnativec.length))}`;
      if (reminders) {
         break;
      }
   } while (reminders && (hometeamfieldT == String.fromCharCode(69,0)));
      fullm /= Math.max((parseFloat(`${lessV == String.fromCharCode(51,0) ? lessV.length : hometeamfieldT.length}`)), 4);
      middlebrightnessz *= hometeamfieldT.length | parseInt(`${yingn}`);
      yingn += parseFloat(`${1}`);
   while ((parseInt(`${yingn}`) + hometeamfieldT.length) > 2) {
      yingn -= parseFloat(`${parseInt(`${yingn}`)}`);
      break;
   }
   let customg = styley == String.fromCharCode(100,113,48,103,103,51,119,54,0);
   do {
      styley += `${styley.length}`;
      if (customg) {
         break;
      }
   } while ((3.91 >= middlebrightnessz) && customg);
   let macauh = debug1.size >= 5045856;
   do {
      debug1.set(`${downloaderh}`, ((downloaderh ? 5 : 4) | libffmpegkit0.length));
      if (macauh) {
         break;
      }
   } while (macauh && ((middlebrightnessz - 1.56) < 4.34));
   for (let s = 0; s < 3; s++) {
      yingn *= parseFloat(`${2 * canvasu.length}`);
   }
   while (hometeamfieldT.includes(`${libffmpegkit0.length}`)) {
      hometeamfieldT += `${((downloaderh ? 3 : 5) & parseInt(`${libreactnativejniD}`))}`;
      break;
   }
   let home5 = canvasu.length <= 7289959;
   do {
      canvasu += `${parseInt(`${fullm}`)}`;
      if (home5) {
         break;
      }
   } while (home5 && (styley == String.fromCharCode(51,0)));
   while (4 >= libffmpegkit0.length) {
      middlebrightnessz += parseInt(`${middlebrightnessz}`) << (Math.min(3, Math.abs(1)));
      break;
   }
      lessV += "1";

    navigation.navigate("Home", { screen: '首页' })
  }, [])

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="我的下载"
        right={
          <Pressable
            onPress={() => {
              setIsEditing(!isEditing);
            }}
          >
            <Text
              style={{
                ...textVariants.body,
                
                opacity: allDownloads && allDownloads.length > 0 ? 100 : 0,
              }}
            >
              {isEditing ? "取消" : "编辑"}
            </Text>
          </Pressable>
        }
      />
      <View style={styles.contentContainer}>
        {
          allDownloads.length > 0 ?
            <>
              <FlatList
                data={allDownloads.sort((a, b) => a.vod.vod_id - b.vod.vod_id)}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.vod.vod_id.toString()}
                showsVerticalScrollIndicator={false}
              />
              <ConfirmationModal
                onConfirm={() => {
                  for (const item of removeHistory) {
                    dispatch(removeVodFromDownloadThunk(item, 0, 0))
                  }
                  setIsEditing(false);
                  setRemoveHistory([]);
                  toggleOverlay();
                }}
                onCancel={toggleOverlay}
                isVisible={isDialogOpen}
                title="清除提示"
                subtitle="您是否确定清除？"
              />
              {isEditing && (
                <View style={styles.deleteConfirmationModal}>
                  <Button
                    onPress={() => {
                      if (
                        removeHistory.length === 0 ||
                        removeHistory.length !== allDownloads.length
                      ) {
                        setRemoveHistory(allDownloads.map(download => download.vod));
                      } else {
                        setRemoveHistory([]);
                      }
                    }}
                    containerStyle={styles.confirmationBtn}
                    color={colors.card2}
                    titleStyle={{ ...textVariants.body, color: colors.muted }}
                  >
                    {removeHistory.length === 0 ||
                      removeHistory.length !== allDownloads.length
                      ? "全选"
                      : "取消全选"}
                  </Button>
                  <Button
                    onPress={() => {
                      if (removeHistory.length > 0) {
                        toggleOverlay();
                      }
                    }}
                    containerStyle={styles.confirmationBtn}
                    color={removeHistory.length === 0 ? colors.card2 : colors.primary}
                    titleStyle={{
                      ...textVariants.body,
                      color:
                        removeHistory.length === 0 ? colors.muted : colors.background,
                    }}
                  >
                    删除
                  </Button>
                </View>
              )}
            </>
            :
            <View style={styles.emptyListContainer}>
              <EmptyList
                description="暂无下载视频"
                additionalElement={
                  <Pressable style={styles.seeMoreBtn} onPress={handleSeeMore}>
                    <Text style={styles.seeMoreBtnText}>查看精彩视频</Text>
                  </Pressable>
                } />
            </View>
        }
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  seeMoreBtn: {
    backgroundColor: '#FAC33D',
    borderRadius: 22,
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  seeMoreBtnText: {
    color: '#1D2023',
    fontSize: 12,
    fontWeight: '500',
    height: 16,
    lineHeight: 16
  },
  checkbox: {
    padding: 5,
  },
  downloadItem: {
    flexDirection: "row",
    alignItems: 'center'
  },
  confirmationBtn: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  deleteConfirmationModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
})

export default DownloadCatalog