import { RootStackScreenProps } from "@type/vrm_thailand"
import ScreenContainer from "../../../components/container/ypy_fast"
import TitleWithBackButtonHeader from "../../../components/header/cio_news_types_header"
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useCallback, useState } from "react"
import { useTheme } from "@react-navigation/native"
import { useAppDispatch, useAppSelector } from "@hooks/kg_index"
import { PSmall } from "@redux/fj_prediction_thailand"
import { ALaunchShrink } from "@type/jx_suggestion"
import EmptyList from "../../../components/common/jip_next_bell"
import DownloadVodCard from "../../../components/download/q_ewarded_cross"
import CheckBoxSelected from "@static/images/thailandStationSell.svg";
import CheckBoxUnselected from "@static/images/middlewareGoalStation.svg";
import { XVSScoreDark } from "@type/wpk_long"
import ConfirmationModal from "../../../components/modal/nw_topic"
import { Button } from "@rneui/themed"
import { removeVodFromDownloadThunk } from "@redux/actions/y_read"
import { IS_OTHER_SKIN } from "@utility/n_subs_interstitial"

const DownloadCatalog = ({ navigation }: RootStackScreenProps<"我的下载">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<XVSScoreDark[]>([]);
  const allDownloads = useAppSelector(({ downloadVideoReducer }: PSmall) => downloadVideoReducer.downloads)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useAppDispatch();


  const toggleHistory = (vod: XVSScoreDark) => {
    const filtered = removeHistory.filter((x) => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };

  const toggleOverlay = useCallback(() => {
       let tooltipsa = 0.0;
    let large0 = false;
    let descZ = 0;
    let dangerd = true;
    let macauU = String.fromCharCode(115,105,109,117,108,97,116,111,114,0);
    let upload9 = String.fromCharCode(109,101,116,104,111,100,0);
    let downc = String.fromCharCode(101,120,112,114,101,115,115,105,111,110,0);
    let speck: Map<any, any> = new Map([[String.fromCharCode(114,101,97,114,0),224], [String.fromCharCode(97,116,116,114,105,98,115,0),438]]);
    let humidityu = 4;
    let const_w1t = true;
    let footbally: Array<any> = [506, 537];
    let greyg: Map<any, any> = new Map([[String.fromCharCode(116,119,111,108,97,109,101,0),48], [String.fromCharCode(117,110,105,113,117,101,108,121,0),583], [String.fromCharCode(99,108,105,112,112,101,100,0),24]]);
    let borderlessK = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,100,0);
    let login3 = String.fromCharCode(115,108,105,100,101,114,0);
       let matches3 = 3;
       let placementR = 0;
      let currentH = placementR <= 6698176;
      do {
         placementR += matches3 % 1;
         if (currentH) {
            break;
         }
      } while (((4 | placementR) < 4) && currentH);
      let hoverU = matches3 >= 6474422;
      do {
         matches3 &= matches3 % 2;
         if (hoverU) {
            break;
         }
      } while (hoverU && ((placementR & 1) >= 1 && (matches3 & placementR) >= 1));
      let gesturesV = 7323993 <= matches3;
      do {
         matches3 ^= 2 ^ placementR;
         if (gesturesV) {
            break;
         }
      } while (gesturesV && (5 > (matches3 | 2)));
         matches3 += 1;
          let ajaxq = 0;
          let roboto8: Map<any, any> = new Map([[String.fromCharCode(99,97,117,115,101,0),903], [String.fromCharCode(108,105,116,101,114,97,108,0),102]]);
         matches3 <<= Math.min(2, Math.abs(roboto8.size));
         ajaxq %= Math.max(5, ajaxq);
         roboto8 = new Map([[`${ajaxq}`, 2]]);
         matches3 /= Math.max(placementR << (Math.min(2, Math.abs(matches3))), 3);
      macauU += `${downc.length ^ descZ}`;
   let fieldl = large0 ? !large0 : large0;
   do {
      large0 = 63 == footbally.length || speck.size == 63;
      if (fieldl) {
         break;
      }
   } while ((large0) && fieldl);
   for (let d = 0; d < 1; d++) {
       let benefit6 = 0.0;
       let orientationY = String.fromCharCode(103,111,111,100,0);
       let downloadC = false;
       let fastw = 1;
         fastw -= orientationY.length;
      while ((1.58 + benefit6) == 2.76 || (1 & orientationY.length) == 3) {
          let injury_ = String.fromCharCode(98,121,114,121,105,0);
          let statsA = 1.0;
         orientationY = `${parseInt(`${statsA}`) / 3}`;
         injury_ += `${injury_.length * injury_.length}`;
         statsA /= Math.max(parseFloat(`${injury_.length * injury_.length}`), 2);
         break;
      }
      while (3 >= (fastw % 1) || downloadC) {
         fastw |= parseInt(`${benefit6}`);
         break;
      }
          let vignetteD = String.fromCharCode(104,99,104,97,99,104,97,0);
          let stationV = 4.0;
         benefit6 /= Math.max(parseFloat(`${3}`), 4);
         vignetteD += `${vignetteD.length}`;
         stationV += 2 + vignetteD.length;
         orientationY += `${parseInt(`${benefit6}`)}`;
         downloadC = 11 > fastw || !downloadC;
         benefit6 += parseFloat(`${fastw - 2}`);
      for (let n = 0; n < 1; n++) {
         fastw -= ((downloadC ? 1 : 1) | parseInt(`${benefit6}`));
      }
       let aboutE: Array<any> = [521, 547, 237];
       let dialog_: Array<any> = [707, 101];
       let signinupK = 5.0;
       let linkj = 1.0;
      for (let l = 0; l < 3; l++) {
         dialog_.push(3 | dialog_.length);
      }
          let changeU = String.fromCharCode(100,105,105,110,0);
          let fast6 = 0.0;
         aboutE.push(changeU.length);
         changeU = `${parseInt(`${fast6}`) - parseInt(`${fast6}`)}`;
      downc += `${((dangerd ? 4 : 4) / (Math.max(downc.length, 8)))}`;
   }
   if (1 < (footbally.length + humidityu) || (1 + humidityu) < 2) {
       let zhengpianf = 0.0;
       let mail6 = true;
       let soundW = String.fromCharCode(108,111,111,107,97,104,101,97,100,0);
       let moduleQ = false;
       let configuref: Array<any> = [847, 210];
          let anythinkm = 4.0;
          let nterstitial5 = String.fromCharCode(103,108,121,112,104,115,0);
         configuref = [soundW.length << (Math.min(Math.abs(1), 2))];
         anythinkm /= Math.max(parseFloat(`${parseInt(`${anythinkm}`)}`), 5);
         nterstitial5 += `${nterstitial5.length - 1}`;
          let alertn = 5.0;
          let greenJ = 3.0;
          let logoutb = true;
         soundW = `${(parseInt(`${greenJ}`) + (mail6 ? 4 : 4))}`;
         alertn *= (parseFloat(`${(logoutb ? 1 : 4) ^ parseInt(`${alertn}`)}`));
         greenJ += (parseInt(`${alertn}`) >> (Math.min(2, Math.abs((logoutb ? 2 : 5)))));
         mail6 = !moduleQ;
      let tooltipsj = configuref.length <= 8482915;
      do {
          let light7 = 4.0;
          let turnA: Array<any> = [String.fromCharCode(101,115,116,105,109,97,116,101,100,0), String.fromCharCode(110,110,109,111,100,0)];
          let liveW = String.fromCharCode(115,112,101,108,108,0);
          let basketballd = String.fromCharCode(114,101,112,108,121,0);
         configuref.push(((moduleQ ? 5 : 5)));
         light7 *= parseInt(`${light7}`);
         turnA = [liveW.length];
         liveW = `${parseInt(`${light7}`) / 3}`;
         basketballd = `${liveW.length | parseInt(`${light7}`)}`;
         if (tooltipsj) {
            break;
         }
      } while (tooltipsj && (3 >= (configuref.length ^ 3)));
         mail6 = !mail6;
      let floater5 = 9825088 <= soundW.length;
      do {
         soundW = `${configuref.length}`;
         if (floater5) {
            break;
         }
      } while (floater5 && (3.11 > zhengpianf));
      let containerQ = zhengpianf >= 5248923.0;
      do {
          let rulesA = 3.0;
          let action1 = String.fromCharCode(109,97,105,110,115,116,97,103,101,0);
          let windI: Array<any> = [632, 423, 520];
          let dicel: Map<any, any> = new Map([[String.fromCharCode(115,114,116,112,0),true ], [String.fromCharCode(115,101,103,116,114,101,101,0),false ]]);
         zhengpianf /= Math.max(parseFloat(`${soundW.length}`), 5);
         rulesA *= parseFloat(`${windI.length}`);
         action1 = `${windI.length >> (Math.min(Math.abs(3), 3))}`;
         dicel = new Map([[`${windI.length}`, (String.fromCharCode(80,0) == action1 ? windI.length : action1.length)]]);
         if (containerQ) {
            break;
         }
      } while (containerQ && (5.90 >= (2.26 - zhengpianf)));
          let resendt = String.fromCharCode(99,97,112,116,117,114,101,114,0);
         moduleQ = soundW.length < 21;
         resendt = `${resendt.length << (Math.min(1, resendt.length))}`;
      let hookU = mail6 ? !mail6 : mail6;
      do {
         mail6 = configuref.includes(mail6);
         if (hookU) {
            break;
         }
      } while (hookU && (2.75 < (2.54 * zhengpianf) && mail6));
       let whistles = 5;
       let znewsv = 1;
         znewsv &= (configuref.length ^ (moduleQ ? 3 : 5));
          let configc = String.fromCharCode(112,114,101,101,109,112,116,105,118,101,0);
         moduleQ = znewsv == configc.length;
      if (4 < znewsv) {
          let light2 = 2.0;
         znewsv >>= Math.min(Math.abs(znewsv / (Math.max(8, configuref.length))), 4);
         light2 -= parseFloat(`${2 | parseInt(`${light2}`)}`);
      }
          let rewindS: Map<any, any> = new Map([[String.fromCharCode(97,105,109,105,110,103,0),false ], [String.fromCharCode(99,104,117,110,107,101,100,0),false ]]);
          let penaltyy = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,105,111,110,0);
          let module_: Map<any, any> = new Map([[String.fromCharCode(114,116,112,112,108,97,121,0),String.fromCharCode(115,119,114,105,0)], [String.fromCharCode(114,101,111,114,100,101,114,101,100,0),String.fromCharCode(102,111,110,116,0)], [String.fromCharCode(99,108,101,97,110,115,101,0),String.fromCharCode(101,120,112,97,110,100,97,98,108,101,0)]]);
         soundW = `${configuref.length}`;
         rewindS = new Map([[`${module_.size}`, 2 % (Math.max(8, module_.size))]]);
         penaltyy += `${module_.size}`;
         soundW = "2";
      footbally.push(parseInt(`${tooltipsa}`) & 1);
   }
       let volumea = String.fromCharCode(111,114,105,0);
       let configureL = 4.0;
       let questn = String.fromCharCode(115,116,114,101,97,109,104,101,97,100,101,114,0);
         questn = `${2 - parseInt(`${configureL}`)}`;
      for (let h = 0; h < 1; h++) {
          let connection5 = 4.0;
         volumea = `${questn.length | parseInt(`${connection5}`)}`;
      }
      while (2 < (5 / (Math.max(7, volumea.length))) || 5 < (volumea.length >> (Math.min(Math.abs(5), 4)))) {
         volumea += `${volumea.length}`;
         break;
      }
         questn += `${questn.length}`;
      while (3.46 < (configureL * 4.86)) {
         configureL += (String.fromCharCode(74,0) == volumea ? volumea.length : parseInt(`${configureL}`));
         break;
      }
          let pageL = true;
         questn = `${(questn == String.fromCharCode(88,0) ? (pageL ? 3 : 1) : questn.length)}`;
      while (questn != volumea) {
         volumea = "1";
         break;
      }
       let commentB: Array<any> = [249, 613, 244];
       let with_m08: Array<any> = [235, 789, 317];
          let brightnessZ = String.fromCharCode(98,117,99,107,101,116,97,108,108,111,99,0);
          let fastQ = String.fromCharCode(114,101,99,111,118,101,114,101,100,0);
         with_m08.push(with_m08.length * commentB.length);
         brightnessZ = `${fastQ.length % (Math.max(brightnessZ.length, 10))}`;
         fastQ = "1";
      greyg = new Map([[questn, (questn == String.fromCharCode(52,0) ? (dangerd ? 3 : 2) : questn.length)]]);
   while (downc.endsWith(`${humidityu}`)) {
      downc = `${2 + speck.size}`;
      break;
   }
   if (5 <= macauU.length) {
       let chatw = 5.0;
       let lineC = 0.0;
       let benefitT: Map<any, any> = new Map([[String.fromCharCode(115,101,116,108,105,115,116,0),false ], [String.fromCharCode(117,110,109,111,118,101,100,0),true ]]);
      if (2 == benefitT.size) {
         chatw *= parseFloat(`${parseInt(`${chatw}`) / 1}`);
      }
          let n_unlockT = true;
          let short_3d = 3.0;
         chatw += parseFloat(`${benefitT.size}`);
         n_unlockT = !n_unlockT;
         short_3d += (parseFloat(`${(n_unlockT ? 1 : 1) / (Math.max(parseInt(`${short_3d}`), 10))}`));
      if (Array.from(benefitT.values()).includes(chatw)) {
          let privacyI = 0;
          let ewardedY = String.fromCharCode(99,111,115,116,115,0);
          let update_bqq = 5;
         benefitT.set(ewardedY, ewardedY.length % (Math.max(2, 8)));
         privacyI %= Math.max(2, 2);
         update_bqq /= Math.max(1, 2 & privacyI);
      }
      let episodes0 = benefitT.size <= 8598950;
      do {
         benefitT = new Map([[`${lineC}`, 1]]);
         if (episodes0) {
            break;
         }
      } while ((benefitT.get(`${lineC}`) != null) && episodes0);
       let showI = 2.0;
       let nextx = 5.0;
          let buttonh = String.fromCharCode(115,121,110,116,104,102,105,108,116,0);
         showI -= parseFloat(`${parseInt(`${chatw}`) + 1}`);
         buttonh = `${(buttonh == String.fromCharCode(54,0) ? buttonh.length : buttonh.length)}`;
      for (let x = 0; x < 1; x++) {
         showI -= parseFloat(`${3 * benefitT.size}`);
      }
         lineC -= parseInt(`${lineC}`) % 3;
      for (let x = 0; x < 3; x++) {
         showI *= parseFloat(`${1 + parseInt(`${nextx}`)}`);
      }
      const_w1t = !const_w1t;
   }
   while (3 < (3 % (Math.max(5, greyg.size))) || 3 < (greyg.size % (Math.max(4, speck.size)))) {
      speck.set(macauU, macauU.length - 2);
      break;
   }
       let foundL = 3;
       let commentf = 5;
       let default_1x: Array<any> = [String.fromCharCode(100,101,97,108,108,111,99,0), String.fromCharCode(109,115,103,115,0)];
         foundL |= default_1x.length;
         foundL += 1 | default_1x.length;
      let overlay5 = 5758290 <= commentf;
      do {
          let yellow3 = 4;
          let greyf: Map<any, any> = new Map([[String.fromCharCode(97,108,112,97,0),668], [String.fromCharCode(111,103,103,105,110,103,0),114], [String.fromCharCode(102,97,105,108,97,98,108,101,0),83]]);
          let searchM = true;
          let update_br = 1.0;
         commentf %= Math.max(5, 1);
         yellow3 &= greyf.size % 1;
         greyf.set(`${update_br}`, 2 + parseInt(`${update_br}`));
         searchM = null != greyf.get(`${update_br}`);
         if (overlay5) {
            break;
         }
      } while ((commentf >= 4) && overlay5);
      for (let o = 0; o < 3; o++) {
         commentf &= 2;
      }
      for (let k = 0; k < 1; k++) {
         foundL >>= Math.min(Math.abs(2), 3);
      }
       let membershipv = 1;
          let episodem = String.fromCharCode(119,114,105,116,101,97,108,105,103,110,0);
         membershipv &= foundL;
         episodem += `${episodem.length}`;
      for (let c = 0; c < 2; c++) {
          let morev = String.fromCharCode(107,105,110,100,0);
         foundL &= commentf;
         morev = `${morev.length}`;
      }
         commentf <<= Math.min(1, Math.abs(1));
      tooltipsa /= Math.max(4, parseFloat(`${1 ^ humidityu}`));
   for (let f = 0; f < 2; f++) {
      footbally.push((descZ & (const_w1t ? 1 : 5)));
   }
      descZ %= Math.max(3, humidityu);
   for (let j = 0; j < 1; j++) {
      humidityu %= Math.max(greyg.size + speck.size, 4);
   }
   let connectionh = humidityu <= 8459051;
   do {
      humidityu -= ((dangerd ? 4 : 1) % (Math.max(1, greyg.size)));
      if (connectionh) {
         break;
      }
   } while ((5 >= (humidityu ^ descZ) && 4 >= (5 ^ humidityu)) && connectionh);
   for (let v = 0; v < 1; v++) {
      upload9 += `${1 & descZ}`;
   }
   let statsL = 6778838 >= footbally.length;
   do {
      footbally = [3];
      if (statsL) {
         break;
      }
   } while ((footbally.length > 5 && (footbally.length + 5) > 4) && statsL);
   while (const_w1t) {
      speck = new Map([[upload9, (upload9 == String.fromCharCode(49,0) ? humidityu : upload9.length)]]);
      break;
   }
   while (downc.length == speck.size) {
      speck.set(`${humidityu}`, humidityu ^ footbally.length);
      break;
   }
   if (const_w1t) {
       let casting1 = String.fromCharCode(108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0);
         casting1 += `${casting1.length - casting1.length}`;
         casting1 += "1";
         casting1 += `${casting1.length / (Math.max(casting1.length, 3))}`;
      descZ |= 3 & footbally.length;
   }
       let configureT: Map<any, any> = new Map([[String.fromCharCode(108,105,115,116,105,110,103,115,0),461], [String.fromCharCode(99,97,108,108,111,99,0),683], [String.fromCharCode(97,110,99,105,108,108,97,114,121,0),382]]);
       let i_player8: Array<any> = [487, 886, 215];
       let modelY = false;
       let s_titleY = true;
         i_player8 = [(3 + (s_titleY ? 4 : 4))];
       let renewQ = 1.0;
      for (let l = 0; l < 1; l++) {
         configureT.set(`${renewQ}`, (parseInt(`${renewQ}`) >> (Math.min(2, Math.abs((modelY ? 4 : 3))))));
      }
      while (i_player8.includes(renewQ)) {
          let arroww = String.fromCharCode(98,114,111,119,115,101,0);
          let searchbarx = String.fromCharCode(116,112,105,100,0);
          let previewb = String.fromCharCode(97,108,115,111,0);
          let hookt = 2.0;
         i_player8.push(((modelY ? 5 : 4)));
         arroww = `${(String.fromCharCode(122,0) == searchbarx ? searchbarx.length : parseInt(`${hookt}`))}`;
         previewb += `${2 * parseInt(`${hookt}`)}`;
         break;
      }
         modelY = s_titleY;
      macauU = `${humidityu ^ descZ}`;
   for (let x = 0; x < 2; x++) {
      large0 = parseFloat(`${upload9.length}`) >= tooltipsa;
   }
      dangerd = downc.length > footbally.length;
   for (let g = 0; g < 1; g++) {
      tooltipsa *= parseFloat(`${1 - upload9.length}`);
   }
   if (speck.size > 1) {
      speck.set(`${macauU}`, (macauU == String.fromCharCode(97,0) ? speck.size : macauU.length));
   }
   if (macauU != String.fromCharCode(88,0)) {
       let viewerA = true;
         viewerA = (viewerA ? viewerA : viewerA);
      for (let w = 0; w < 2; w++) {
         viewerA = (!viewerA ? !viewerA : viewerA);
      }
          let settingA = 2;
         viewerA = settingA > 64 && viewerA;
      upload9 = `${descZ - 3}`;
   }
      large0 = const_w1t && tooltipsa < 45.22;
      const_w1t = greyg.size < 76;
   if (upload9.length < macauU.length) {
      upload9 += `${downc.length & 3}`;
   }

    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const renderItem = useCallback(({ item, index }: { item: ALaunchShrink, index: number }) => {
    return (
      <View style={styles.downloadItem}>
        {isEditing && (
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => toggleHistory(item.vod)}>
            {removeHistory.some(x => x.vod_id === item.vod.vod_id) ? (
              <CheckBoxSelected height={icons.sizes.m} width={icons.sizes.m} color={IS_OTHER_SKIN ? colors.success : colors.primary} fill={'white'} />
            ) : (
              <CheckBoxUnselected
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
       let lefti = 0.0;
    let reducerm: Array<any> = [897, 793, 587];
    let usernames = true;
    let grayK = true;
    let minivodm = String.fromCharCode(97,100,100,105,116,105,111,110,0);
    let gpayU = String.fromCharCode(115,116,101,112,0);
    let indexh = 3;
    let targetv = String.fromCharCode(100,101,112,108,111,121,109,101,110,116,0);
    let moreN = 5.0;
    let resendV = 1;
   if (indexh >= 5) {
       let langkeyP: Array<any> = [747, 368, 377];
       let black9 = 1;
       let bootsplashO: Map<any, any> = new Map([[String.fromCharCode(122,112,116,102,0),689], [String.fromCharCode(97,101,99,0),175]]);
       let heji7 = false;
       let signinupW: Array<any> = [599, 937];
      if (2 == (langkeyP.length + 3) && heji7) {
         heji7 = langkeyP.length >= black9;
      }
      let nextv = black9 <= 7009136;
      do {
         black9 ^= 2;
         if (nextv) {
            break;
         }
      } while (((signinupW.length << (Math.min(3, Math.abs(black9)))) < 4) && nextv);
         heji7 = black9 > 36;
      while (langkeyP.length <= black9) {
          let paginationu = String.fromCharCode(116,97,103,115,116,114,0);
          let handler5 = false;
          let indexj: Array<any> = [357, 358, 885];
          let floatingX = 3.0;
         black9 ^= bootsplashO.size;
         paginationu = `${1 / (Math.max(4, parseInt(`${floatingX}`)))}`;
         handler5 = 77 > paginationu.length;
         indexj = [indexj.length ^ parseInt(`${floatingX}`)];
         break;
      }
      for (let i = 0; i < 2; i++) {
          let streaming4 = 2.0;
          let storer: Map<any, any> = new Map([[String.fromCharCode(108,117,114,97,108,105,122,97,116,105,111,110,0),896], [String.fromCharCode(103,114,101,121,115,0),678]]);
          let backo: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,97,121,101,100,0),625], [String.fromCharCode(114,101,100,118,0),150], [String.fromCharCode(109,102,104,100,0),34]]);
          let baidu6 = 3;
          let main_mU = 2.0;
         heji7 = signinupW.length < parseInt(`${streaming4}`);
         streaming4 *= parseFloat(`${3 ^ backo.size}`);
         storer.set(`${main_mU}`, parseInt(`${main_mU}`) & baidu6);
         backo.set(`${main_mU}`, parseInt(`${main_mU}`) * backo.size);
         baidu6 /= Math.max(3, 2 / (Math.max(9, storer.size)));
      }
         heji7 = (93 <= ((heji7 ? signinupW.length : 93) + signinupW.length));
      while (heji7) {
         heji7 = signinupW.length >= 49;
         break;
      }
         bootsplashO.set(`${langkeyP.length}`, 1 - bootsplashO.size);
      let pressuree = 9620198 >= black9;
      do {
         black9 *= black9 / 1;
         if (pressuree) {
            break;
         }
      } while (pressuree && (heji7));
      while ((5 / (Math.max(6, bootsplashO.size))) > 1) {
         bootsplashO.set(`${heji7}`, bootsplashO.size);
         break;
      }
      if (heji7) {
         heji7 = !heji7 || black9 == 11;
      }
          let kicko = String.fromCharCode(119,105,116,110,101,115,115,0);
         black9 >>= Math.min(Math.abs(kicko.length ^ black9), 5);
      if (black9 > signinupW.length) {
         black9 <<= Math.min(3, Math.abs(langkeyP.length % (Math.max(1, 6))));
      }
      while (5 == (bootsplashO.size * 4)) {
         bootsplashO.set(`${black9}`, black9 << (Math.min(4, Math.abs(1))));
         break;
      }
      for (let j = 0; j < 3; j++) {
         bootsplashO.set(`${black9}`, black9);
      }
      indexh += 2;
   }
       let redirectu: Array<any> = [9, 24];
      let playx = 7280562 >= redirectu.length;
      do {
         redirectu = [redirectu.length >> (Math.min(redirectu.length, 3))];
         if (playx) {
            break;
         }
      } while (playx && ((3 ^ redirectu.length) == 2 || 3 == (redirectu.length ^ redirectu.length)));
      if (5 <= (redirectu.length - redirectu.length) && (5 - redirectu.length) <= 5) {
          let blacklists = false;
         redirectu.push(redirectu.length);
      }
      for (let k = 0; k < 3; k++) {
         redirectu.push(redirectu.length);
      }
      gpayU += `${parseInt(`${lefti}`) % 3}`;
      targetv += `${(1 * (grayK ? 1 : 1))}`;
   while ((minivodm.length - 1) >= 3 || (5.95 / (Math.max(9, moreN))) >= 2.91) {
      minivodm = `${((grayK ? 3 : 2) ^ parseInt(`${moreN}`))}`;
      break;
   }
      targetv += "3";
   while (!grayK) {
       let screenA = String.fromCharCode(103,114,97,98,0);
       let fieldD = String.fromCharCode(111,110,101,105,110,99,104,0);
       let agreementt = 1.0;
      if (screenA.includes(fieldD)) {
         fieldD += `${screenA.length}`;
      }
      let reducerR = 7966403.0 >= agreementt;
      do {
         agreementt += (parseFloat(`${screenA == String.fromCharCode(116,0) ? screenA.length : fieldD.length}`));
         if (reducerR) {
            break;
         }
      } while (reducerR && (3 > fieldD.length));
         fieldD += `${2 & fieldD.length}`;
          let statisticsR = true;
          let trashW = String.fromCharCode(110,111,116,105,102,105,99,97,116,111,110,115,0);
         fieldD += `${parseInt(`${agreementt}`)}`;
         statisticsR = trashW.length <= 94 && !statisticsR;
         trashW = `${trashW.length & 1}`;
      while (fieldD == screenA) {
          let right0 = String.fromCharCode(106,115,105,109,100,100,99,116,0);
          let commentV = false;
          let dragY = String.fromCharCode(115,105,109,112,108,101,116,97,103,0);
          let updatesY: Array<any> = [747, 486, 638];
          let unread1 = String.fromCharCode(116,114,105,97,108,0);
         screenA += `${right0.length & 3}`;
         right0 += `${2 ^ updatesY.length}`;
         commentV = !commentV && dragY.length < 66;
         dragY = `${unread1.length * 3}`;
         updatesY.push(unread1.length);
         break;
      }
         screenA += `${fieldD.length}`;
       let rankO = 1;
      if (4 == (parseInt(`${agreementt}`) / (Math.max(fieldD.length, 8))) && 4.70 == (agreementt / (Math.max(parseFloat(`${fieldD.length}`), 2)))) {
         fieldD = `${parseInt(`${agreementt}`) >> (Math.min(Math.abs(2), 2))}`;
      }
         agreementt *= parseFloat(`${rankO / 2}`);
      grayK = 88 >= reducerm.length && String.fromCharCode(97,0) == gpayU;
      break;
   }
   for (let i = 0; i < 1; i++) {
      gpayU += `${((grayK ? 5 : 2) / (Math.max(4, (usernames ? 5 : 5))))}`;
   }
      resendV |= (String.fromCharCode(102,0) == minivodm ? parseInt(`${moreN}`) : minivodm.length);
      indexh >>= Math.min(3, Math.abs(1 - minivodm.length));
      indexh %= Math.max(1, reducerm.length);
   if (gpayU.length <= 2 && !usernames) {
      usernames = !grayK;
   }
   if (resendV > reducerm.length) {
      reducerm = [reducerm.length & parseInt(`${lefti}`)];
   }
   let livef = grayK ? !grayK : grayK;
   do {
      grayK = parseFloat(`${resendV}`) <= lefti;
      if (livef) {
         break;
      }
   } while (((moreN * 4.3) == 2.14) && livef);
      moreN += parseFloat(`${indexh}`);
   for (let v = 0; v < 2; v++) {
      indexh += 1;
   }
      usernames = 13 >= resendV;
   if (1.49 <= (moreN / 4.70)) {
       let buttonl = 0.0;
       let smallu = String.fromCharCode(118,112,109,99,0);
       let sell_ = String.fromCharCode(97,99,99,101,108,101,114,97,116,101,100,0);
       let bing9: Array<any> = [654, 782, 842];
       let playlistP = String.fromCharCode(117,112,108,111,97,100,0);
          let fieldDl = false;
          let usero = false;
          let screenQ: Array<any> = [988, 585];
         bing9 = [sell_.length | bing9.length];
         fieldDl = (fieldDl ? usero : !fieldDl);
         usero = screenQ.length > 63 && usero;
         screenQ = [(2 * (fieldDl ? 4 : 1))];
      if (sell_.startsWith(`${playlistP.length}`)) {
         sell_ = `${smallu.length + sell_.length}`;
      }
      for (let v = 0; v < 3; v++) {
         smallu = `${sell_.length}`;
      }
       let whitey = String.fromCharCode(100,97,116,97,98,108,111,99,107,0);
         bing9.push((whitey == String.fromCharCode(86,0) ? whitey.length : playlistP.length));
       let predictionG = 3;
       let reminder_ = 1;
      let rewind9 = 9056821 >= predictionG;
      do {
         predictionG |= 2 << (Math.min(4, sell_.length));
         if (rewind9) {
            break;
         }
      } while (rewind9 && ((reminder_ >> (Math.min(Math.abs(predictionG), 3))) < 4));
      if (3.85 < (buttonl * 2.23)) {
         reminder_ *= 3;
      }
      let acceptedd = buttonl >= 6055973.0;
      do {
         buttonl -= 1 + reminder_;
         if (acceptedd) {
            break;
         }
      } while ((4.45 <= (buttonl + 2.90)) && acceptedd);
          let questc: Map<any, any> = new Map([[String.fromCharCode(120,118,105,100,0),String.fromCharCode(99,111,112,121,116,111,0)], [String.fromCharCode(112,97,105,114,0),String.fromCharCode(103,114,97,98,98,101,114,0)]]);
          let episodea = String.fromCharCode(100,105,118,105,100,101,114,0);
          let styleg = String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,0);
         whitey += `${whitey.length}`;
         questc = new Map([[`${questc.size}`, episodea.length]]);
         episodea += `${episodea.length}`;
         styleg += "2";
         sell_ = "2";
      while (whitey != String.fromCharCode(68,0)) {
          let reminders: Map<any, any> = new Map([[String.fromCharCode(104,117,102,102,121,117,118,100,115,112,0),189], [String.fromCharCode(116,114,105,97,110,103,108,101,0),564], [String.fromCharCode(104,117,101,0),29]]);
         smallu += `${sell_.length}`;
         reminders.set(`${reminders.size}`, reminders.size / 2);
         break;
      }
         smallu = `${bing9.length - 3}`;
      while (3 <= (playlistP.length | 4)) {
         playlistP = `${1 + smallu.length}`;
         break;
      }
      if (playlistP.length >= smallu.length) {
         playlistP += `${predictionG}`;
      }
      targetv = `${2 % (Math.max(6, bing9.length))}`;
   }
       let thailandA = String.fromCharCode(114,116,109,112,100,104,0);
       let predictionR: Map<any, any> = new Map([[String.fromCharCode(101,97,99,104,0),35], [String.fromCharCode(109,97,112,108,105,109,105,116,0),313]]);
       let calendarS = String.fromCharCode(109,105,120,105,110,115,0);
         calendarS += `${predictionR.size | calendarS.length}`;
      if (!thailandA.endsWith(`${predictionR.size}`)) {
         thailandA += `${2 | thailandA.length}`;
      }
         predictionR.set(calendarS, 1);
         predictionR = new Map([[`${predictionR.size}`, thailandA.length]]);
      let register_vF = 9054970 <= predictionR.size;
      do {
         predictionR = new Map([[`${predictionR.size}`, thailandA.length]]);
         if (register_vF) {
            break;
         }
      } while (register_vF && ((predictionR.size / (Math.max(calendarS.length, 4))) < 1 && 2 < (calendarS.length / (Math.max(1, 10)))));
      for (let v = 0; v < 2; v++) {
         predictionR.set(`${calendarS}`, 2 << (Math.min(1, calendarS.length)));
      }
       let greenj = 0;
       let v_count7 = 0;
      while (4 < (predictionR.size | v_count7)) {
         v_count7 ^= v_count7 * calendarS.length;
         break;
      }
      let awayh = 8818351 >= greenj;
      do {
         greenj <<= Math.min(1, Math.abs(greenj));
         if (awayh) {
            break;
         }
      } while (awayh && (5 <= (3 * greenj)));
      grayK = lefti <= 65.29;
   for (let f = 0; f < 1; f++) {
       let friendsC: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,0),678], [String.fromCharCode(99,101,110,116,114,111,105,100,115,0),248]]);
       let dropdownz: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,102,105,108,116,101,114,0),true ], [String.fromCharCode(102,114,111,109,98,121,116,101,97,114,114,97,121,0),false ], [String.fromCharCode(115,112,105,110,110,101,114,0),false ]]);
       let matchz = 5;
      for (let l = 0; l < 3; l++) {
         dropdownz.set(`${dropdownz.size}`, friendsC.size * dropdownz.size);
      }
       let reade = 1.0;
      for (let p = 0; p < 3; p++) {
         matchz -= matchz;
      }
       let cornerf: Map<any, any> = new Map([[String.fromCharCode(105,110,102,111,115,0),393], [String.fromCharCode(114,101,99,101,105,118,105,110,103,0),387], [String.fromCharCode(115,117,98,101,120,112,114,0),282]]);
       let windB = 4;
         dropdownz = new Map([[`${cornerf.size}`, windB]]);
      let canvasQ = 8815100 >= friendsC.size;
      do {
         friendsC = new Map([[`${cornerf.size}`, parseInt(`${reade}`) & 1]]);
         if (canvasQ) {
            break;
         }
      } while ((!Array.from(friendsC.keys()).includes(`${reade}`)) && canvasQ);
         dropdownz = new Map([[`${cornerf.size}`, cornerf.size * windB]]);
          let invited = 4;
          let privilegeR = 5.0;
         dropdownz.set(`${invited}`, invited & cornerf.size);
         privilegeR -= parseFloat(`${parseInt(`${privilegeR}`) + 1}`);
      usernames = minivodm.length > resendV;
   }

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
                    color={removeHistory.length === 0 ? colors.card2 : (IS_OTHER_SKIN ? colors.error : colors.primary)}
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
                  <Pressable style={{ ...styles.seeMoreBtn, backgroundColor: IS_OTHER_SKIN ? 'white' : colors.primary }} onPress={handleSeeMore}>
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