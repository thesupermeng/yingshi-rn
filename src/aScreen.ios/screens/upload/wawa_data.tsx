import { RootStackScreenProps } from "@type/wawa_iconnewchat";
import ScreenContainer from "../../components/container/wawa_nterstitial_iconpipexpand";
import TitleWithBackButtonHeader from "../../components/header/wawa_matchinactive_header";
import EmptyList from '../../components/common/wawa_othermatchdetailbg_videocommon';
import { useAppDispatch, useSelector } from "@hooks/wawa_root";
import { wawaIndicatorPredictionbutton } from "@redux/reducers/wawa_connection_textlayoutmanager";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { wawaGesture } from "@type/wawa_gradlew";
import FastImage from '../../components/common/wawa_iconarrowrightblack';
import DefaultVideoThumbnail from '@static/images/listPressureLivenodatabgimg.svg';
import { useCallback, useMemo, useState } from "react";
import { useTheme } from "@react-navigation/native";
import CheckBoxSelected from "@static/images/largesoundIconrightorange.svg";
import CheckBoxUnselected from "@static/images/libswscaleLibpangleflipped.svg";
import { Button } from "@rneui/themed";
import { removeUploadHistory } from "@redux/actions/wawa_unfill_iconclosewhite";
import ConfirmationModal from "../../components/modal/wawa_iconedit";

export const UploadHistory = ({
    route,
    navigation,
}: RootStackScreenProps<'uploadHistory'>) => {
    const { colors, textVariants, icons } = useTheme();
    const styles = useMemo(() => createStyles({ colors, textVariants }), [colors, textVariants]);

    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [videoSelected, setVideoSelected] = useState<number[]>([]);
    const dispatch = useAppDispatch();

    const uploadState = useSelector<wawaIndicatorPredictionbutton>('uploadReducer');

    const onEditPress = () => {
       let greenarrowupb: Map<any, any> = new Map([[String.fromCharCode(109,101,114,103,101,100,95,50,95,55,50,0),292], [String.fromCharCode(109,111,116,105,111,110,112,105,120,101,108,115,95,120,95,51,49,0),204], [String.fromCharCode(116,101,109,112,108,97,116,101,115,95,113,95,57,0),162]]);
    let predictionwin4 = true;
    let sinaS = String.fromCharCode(108,101,118,101,108,115,95,53,95,57,49,0);
    let basew = 1.0;
    let playlist9 = String.fromCharCode(120,95,53,50,95,99,104,101,99,107,111,117,116,0);
    let assetss = true;
    let elementsb = String.fromCharCode(109,95,56,48,95,97,117,103,109,101,110,116,0);
    let referrerL = String.fromCharCode(113,95,49,55,95,115,104,111,114,116,99,117,116,0);
    let runtimeh = 5;
    let networkx = false;
    let ruleso = 5;
    let classesa = String.fromCharCode(117,95,57,52,95,97,112,112,114,111,120,105,109,97,116,105,111,110,0);
       let carouselj = String.fromCharCode(99,95,53,55,95,114,117,110,108,111,111,112,0);
       let mounting3 = 1;
          let placeholderk = 3.0;
          let gradleJ = true;
         carouselj += `${carouselj.length}`;
         placeholderk /= Math.max(parseFloat(`${parseInt(`${placeholderk}`) & 3}`), 3);
         gradleJ = !gradleJ && placeholderk > 99.14;
          let iconcalendarz = 4.0;
          let contextJ = String.fromCharCode(122,95,53,49,95,100,101,110,111,114,109,97,108,0);
          let time_0it = true;
         mounting3 += 2;
         iconcalendarz *= (parseFloat(`${String.fromCharCode(120,0) == contextJ ? contextJ.length : (time_0it ? 4 : 2)}`));
         time_0it = contextJ.length == 82 && 37.95 == iconcalendarz;
       let cancelb: Map<any, any> = new Map([[String.fromCharCode(115,104,97,114,101,103,114,111,117,112,95,107,95,56,0),313], [String.fromCharCode(105,110,99,108,117,100,105,110,103,95,50,95,54,57,0),698], [String.fromCharCode(117,110,98,111,120,95,49,95,54,0),685]]);
       let iconcalendarw: Map<any, any> = new Map([[String.fromCharCode(112,95,50,53,95,105,112,118,0),String.fromCharCode(100,105,115,116,114,105,98,117,116,101,100,95,55,95,51,55,0)], [String.fromCharCode(97,95,56,50,95,112,104,111,110,101,0),String.fromCharCode(114,101,102,108,101,99,116,105,111,110,95,101,95,55,56,0)]]);
       let homeplayerD: Array<any> = [231, 429];
      while ((iconcalendarw.size & carouselj.length) >= 2) {
          let dialogA: Map<any, any> = new Map([[String.fromCharCode(110,95,50,52,95,97,108,97,110,103,117,97,103,101,0),455], [String.fromCharCode(115,117,114,101,95,115,95,50,54,0),504]]);
          let checkboxp: Array<any> = [33, 716, 610];
          let commenti: Array<any> = [342, 895, 461];
          let othermatchdetailbg6 = String.fromCharCode(104,95,54,55,95,112,101,114,102,111,114,109,105,110,103,0);
         carouselj = `${carouselj.length >> (Math.min(2, Math.abs(dialogA.size)))}`;
         dialogA.set(othermatchdetailbg6, commenti.length);
         checkboxp = [checkboxp.length + commenti.length];
         othermatchdetailbg6 = `${3 * othermatchdetailbg6.length}`;
         break;
      }
      while (Array.from(iconcalendarw.keys()).includes(`${cancelb.size}`)) {
          let libimagepipelineV = String.fromCharCode(119,95,56,53,95,109,115,105,122,101,0);
         iconcalendarw.set(`${mounting3}`, mounting3 / 3);
         libimagepipelineV = `${libimagepipelineV.length}`;
         break;
      }
      greenarrowupb = new Map([[playlist9, parseInt(`${basew}`) * playlist9.length]]);
       let middlewareQ = String.fromCharCode(107,95,52,56,95,110,111,99,104,97,110,103,101,0);
       let runtimew: Array<any> = [31, 245, 893];
         runtimew = [2];
         runtimew.push(middlewareQ.length);
      for (let x = 0; x < 2; x++) {
          let iconorientation5 = true;
          let submit4 = false;
         runtimew.push(((iconorientation5 ? 4 : 2)));
         iconorientation5 = !submit4 || !submit4;
      }
      for (let t = 0; t < 1; t++) {
          let vignettet = String.fromCharCode(115,117,112,111,114,116,101,100,95,50,95,53,50,0);
          let pager: Array<any> = [582, 929, 7];
          let libjsiv: Array<any> = [244, 702, 333];
          let dependenciesO: Array<any> = [1000, 985, 440];
         runtimew.push(3 | dependenciesO.length);
         vignettet += `${libjsiv.length - 3}`;
         pager = [libjsiv.length * 2];
         dependenciesO = [(vignettet == String.fromCharCode(114,0) ? vignettet.length : pager.length)];
      }
         middlewareQ += `${(String.fromCharCode(79,0) == middlewareQ ? runtimew.length : middlewareQ.length)}`;
         runtimew = [3];
      assetss = parseInt(`${basew}`) > greenarrowupb.size;
       let canvasp = String.fromCharCode(116,114,105,109,109,101,100,95,98,95,55,50,0);
      while (canvasp != String.fromCharCode(55,0)) {
          let directl: Map<any, any> = new Map([[String.fromCharCode(100,111,99,95,108,95,56,50,0),String.fromCharCode(115,112,101,99,105,102,105,101,100,95,48,95,55,55,0)], [String.fromCharCode(108,95,49,55,95,101,120,116,114,101,109,117,109,0),String.fromCharCode(102,95,51,95,102,105,120,116,117,114,101,115,0)]]);
          let iconviewergifW = 0;
          let actionn: Array<any> = [953, 843, 385];
         canvasp = `${canvasp.length}`;
         directl.set(`${iconviewergifW}`, 2);
         iconviewergifW <<= Math.min(Math.abs(directl.size / (Math.max(2, 9))), 3);
         actionn = [1];
         break;
      }
      while (canvasp.length > 3 || canvasp == String.fromCharCode(109,0)) {
          let telemetryr = String.fromCharCode(122,95,53,51,95,108,111,103,105,115,116,105,99,0);
          let selectedr = 4.0;
         canvasp = `${parseInt(`${selectedr}`)}`;
         telemetryr = `${2 ^ telemetryr.length}`;
         selectedr -= telemetryr.length;
         break;
      }
      while (!canvasp.startsWith(`${canvasp.length}`)) {
         canvasp += `${1 | canvasp.length}`;
         break;
      }
      sinaS += `${((predictionwin4 ? 3 : 4))}`;
      predictionwin4 = sinaS.endsWith(`${predictionwin4}`);
       let transferL = 5;
       let incidentg = String.fromCharCode(97,112,112,108,121,95,50,95,49,49,0);
       let chinasamer = String.fromCharCode(117,95,49,56,95,115,116,99,98,0);
       let executorM = String.fromCharCode(97,95,50,50,95,116,101,108,108,97,114,0);
       let whistleN = String.fromCharCode(120,95,55,51,95,99,111,110,99,97,116,101,110,97,116,101,0);
         incidentg += `${chinasamer.length}`;
         incidentg = `${whistleN.length + chinasamer.length}`;
          let friendsW = 2.0;
          let eventsplashR = 1;
          let libreactn = 1.0;
         executorM += `${executorM.length}`;
         friendsW *= parseInt(`${libreactn}`);
         eventsplashR >>= Math.min(3, Math.abs(eventsplashR << (Math.min(1, Math.abs(3)))));
         libreactn /= Math.max(eventsplashR % (Math.max(parseInt(`${friendsW}`), 5)), 3);
      let pointl = 7943207 <= chinasamer.length;
      do {
         chinasamer = "3";
         if (pointl) {
            break;
         }
      } while (pointl && (chinasamer.length < whistleN.length));
         executorM = "3";
          let predictionbannerC = 4;
          let playercommonf: Map<any, any> = new Map([[String.fromCharCode(100,95,57,50,95,109,112,101,103,97,117,100,105,111,116,97,98,0),false ], [String.fromCharCode(97,114,116,105,115,95,55,95,55,57,0),true ], [String.fromCharCode(109,111,110,111,98,108,97,99,107,95,107,95,52,0),false ]]);
         executorM = `${executorM.length << (Math.min(Math.abs(2), 5))}`;
         predictionbannerC *= playercommonf.size >> (Math.min(Math.abs(2), 4));
         playercommonf = new Map([[`${playercommonf.size}`, 2]]);
      if (5 >= (incidentg.length | transferL)) {
          let libavutilL = false;
          let iconviewergifk = String.fromCharCode(114,95,53,53,95,107,101,114,110,101,100,0);
          let iconuserX = 1.0;
         transferL /= Math.max(4, parseInt(`${iconuserX}`) - 1);
         libavutilL = iconviewergifk.includes(`${libavutilL}`);
         iconviewergifk += "2";
         iconuserX += (parseFloat(`${1 ^ (libavutilL ? 3 : 5)}`));
      }
      for (let z = 0; z < 3; z++) {
         chinasamer += `${(String.fromCharCode(115,0) == executorM ? executorM.length : incidentg.length)}`;
      }
      elementsb += `${incidentg.length * 2}`;
       let singleY = String.fromCharCode(100,111,109,97,105,110,115,95,116,95,49,53,0);
       let fullP = String.fromCharCode(110,105,109,97,116,105,111,110,95,48,95,57,57,0);
       let string3 = 5.0;
      if (parseInt(`${string3}`) == singleY.length) {
          let catalogK = 3.0;
          let star8 = 3.0;
          let sourceJ = String.fromCharCode(104,95,54,50,95,102,117,110,110,121,0);
          let penaltyshootnogoal_ = String.fromCharCode(101,95,51,53,95,100,111,118,101,0);
         string3 += 2;
         catalogK /= Math.max(4, parseInt(`${star8}`));
         sourceJ += `${parseInt(`${catalogK}`)}`;
         penaltyshootnogoal_ += `${(String.fromCharCode(108,0) == penaltyshootnogoal_ ? penaltyshootnogoal_.length : parseInt(`${catalogK}`))}`;
      }
         fullP += `${1 | singleY.length}`;
         fullP = `${singleY.length % 3}`;
         singleY += `${parseInt(`${string3}`)}`;
      if (singleY.length < 5 || fullP == String.fromCharCode(71,0)) {
          let playercommonq: Map<any, any> = new Map([[String.fromCharCode(99,109,97,115,107,95,97,95,56,52,0),245], [String.fromCharCode(117,110,99,108,97,109,112,101,100,95,52,95,50,54,0),207], [String.fromCharCode(99,111,109,102,111,114,116,95,55,95,54,57,0),183]]);
          let ballE = String.fromCharCode(117,95,57,49,95,114,105,99,101,0);
         fullP = `${fullP.length}`;
         playercommonq.set(`${ballE}`, 3);
         ballE += `${ballE.length}`;
      }
      let whitebellS = 7816312.0 <= string3;
      do {
         string3 += 2 & fullP.length;
         if (whitebellS) {
            break;
         }
      } while ((fullP.length > parseInt(`${string3}`)) && whitebellS);
          let iconclosewhite0 = 0.0;
          let searchbarY = String.fromCharCode(115,116,114,105,112,115,95,51,95,57,52,0);
          let auto_zV = 5.0;
         singleY += `${1 - searchbarY.length}`;
         iconclosewhite0 /= Math.max(3, 5);
         searchbarY += `${parseInt(`${iconclosewhite0}`)}`;
         auto_zV += parseFloat(`${parseInt(`${iconclosewhite0}`) - 3}`);
      for (let i = 0; i < 2; i++) {
         string3 /= Math.max(5, singleY.length);
      }
      if (!fullP.includes(`${string3}`)) {
          let headerH = 4;
          let penaltyA = 0.0;
          let whiteanimationliveF: Array<any> = [686, 207, 844];
          let notificationgray8 = String.fromCharCode(109,95,54,57,95,104,101,97,114,116,115,0);
          let largesoundS = 3;
         string3 *= parseInt(`${string3}`);
         headerH += parseInt(`${penaltyA}`) + largesoundS;
         penaltyA += parseFloat(`${largesoundS}`);
         whiteanimationliveF = [1];
         notificationgray8 += `${largesoundS << (Math.min(Math.abs(headerH), 4))}`;
      }
      greenarrowupb = new Map([[elementsb, 2 * elementsb.length]]);

        setEditing(!isEditing);

   while (sinaS.length == 2) {
      predictionwin4 = !predictionwin4 || playlist9.length < 70;
      break;
   }
   let floaterS = predictionwin4 ? !predictionwin4 : predictionwin4;
   do {
      predictionwin4 = playlist9.length == 90 && predictionwin4;
      if (floaterS) {
         break;
      }
   } while ((!playlist9.endsWith(`${predictionwin4}`)) && floaterS);
   if ((runtimeh & 4) == 5) {
       let vipsportg = 3.0;
       let policyL = 3.0;
       let calendarb: Map<any, any> = new Map([[String.fromCharCode(110,95,49,49,95,105,112,111,100,0),841], [String.fromCharCode(110,95,50,49,95,109,101,109,111,114,121,98,117,102,102,101,114,0),618], [String.fromCharCode(100,101,114,105,118,95,117,95,51,54,0),606]]);
       let analyticsu = 1.0;
       let macauT = 1.0;
      let liveendmodallogo1 = 6797230 >= calendarb.size;
      do {
         calendarb.set(`${macauT}`, parseInt(`${macauT}`) | 2);
         if (liveendmodallogo1) {
            break;
         }
      } while (liveendmodallogo1 && (3.93 == (parseFloat(`${calendarb.size}`) / (Math.max(4, analyticsu))) && (analyticsu / (Math.max(parseFloat(`${calendarb.size}`), 7))) == 3.93));
      for (let k = 0; k < 3; k++) {
         calendarb = new Map([[`${macauT}`, 2]]);
      }
      if (Array.from(calendarb.values()).includes(policyL)) {
         calendarb = new Map([[`${macauT}`, parseInt(`${policyL}`)]]);
      }
      for (let k = 0; k < 2; k++) {
         macauT /= Math.max(parseFloat(`${calendarb.size}`), 5);
      }
          let shootnogoal8: Map<any, any> = new Map([[String.fromCharCode(116,109,112,111,95,51,95,49,50,0),270], [String.fromCharCode(111,119,110,95,107,95,57,49,0),745]]);
          let sportJ = true;
         macauT /= Math.max(parseFloat(`${parseInt(`${analyticsu}`)}`), 3);
         shootnogoal8 = new Map([[`${shootnogoal8.size}`, (shootnogoal8.size & (sportJ ? 2 : 5))]]);
         sportJ = (34 <= (shootnogoal8.size * (sportJ ? shootnogoal8.size : 5)));
         macauT += parseFloat(`${1}`);
         vipsportg += parseFloat(`${parseInt(`${policyL}`)}`);
      let backiconmaskv = policyL <= 7464509.0;
      do {
          let controlj: Map<any, any> = new Map([[String.fromCharCode(101,95,56,51,95,114,97,110,115,102,111,114,109,0),false ], [String.fromCharCode(121,95,56,57,95,109,116,97,102,0),false ]]);
          let common7: Array<any> = [603, 446];
          let whatsapp4 = 3.0;
         policyL /= Math.max(5, parseFloat(`${parseInt(`${macauT}`) - parseInt(`${whatsapp4}`)}`));
         controlj.set(`${common7.length}`, 3 * common7.length);
         whatsapp4 -= parseFloat(`${1}`);
         if (backiconmaskv) {
            break;
         }
      } while ((1.81 <= (1.47 - analyticsu) && (analyticsu - 1.47) <= 4.95) && backiconmaskv);
         analyticsu += parseFloat(`${3}`);
      while ((calendarb.size & 3) == 5 || 3 == (parseInt(`${vipsportg}`) - calendarb.size)) {
         calendarb.set(`${macauT}`, calendarb.size >> (Math.min(4, Math.abs(parseInt(`${macauT}`)))));
         break;
      }
      while (!Array.from(calendarb.values()).includes(analyticsu)) {
         analyticsu += parseFloat(`${1}`);
         break;
      }
      if (5.33 >= (macauT - parseFloat(`${calendarb.size}`))) {
          let libhermesQ = String.fromCharCode(115,107,105,112,112,101,100,95,116,95,54,52,0);
          let iconsettingT = 0.0;
          let statisticsinactivew = String.fromCharCode(109,111,116,105,111,110,95,122,95,49,48,48,0);
         calendarb.set(libhermesQ, libhermesQ.length + 2);
         iconsettingT -= parseFloat(`${parseInt(`${iconsettingT}`) / (Math.max(3, 3))}`);
         statisticsinactivew += `${(statisticsinactivew == String.fromCharCode(111,0) ? statisticsinactivew.length : parseInt(`${iconsettingT}`))}`;
      }
      if (calendarb.get(`${vipsportg}`) != null) {
          let statsK = 1;
         calendarb.set(`${vipsportg}`, parseInt(`${policyL}`) % (Math.max(parseInt(`${vipsportg}`), 3)));
         statsK <<= Math.min(Math.abs(statsK & 2), 2);
      }
      while ((policyL - analyticsu) == 1.68) {
         analyticsu *= parseFloat(`${2 & parseInt(`${vipsportg}`)}`);
         break;
      }
         vipsportg += parseFloat(`${parseInt(`${policyL}`)}`);
      runtimeh += 2 - parseInt(`${basew}`);
   }
   while ((referrerL.length / 4) == 3) {
       let champions: Map<any, any> = new Map([[String.fromCharCode(99,109,97,115,107,95,114,95,56,48,0),277], [String.fromCharCode(108,95,51,54,95,98,116,110,99,108,105,99,107,0),268]]);
       let reactnativejsj = String.fromCharCode(105,103,110,97,108,95,56,95,55,54,0);
      for (let g = 0; g < 2; g++) {
          let submitK = true;
          let mbnativeadvancedt = String.fromCharCode(108,105,98,103,115,109,95,120,95,57,51,0);
         reactnativejsj += "3";
         submitK = mbnativeadvancedt.length <= 52;
         mbnativeadvancedt += "3";
      }
          let libavutilM = 2.0;
          let update_1S = String.fromCharCode(115,95,55,50,95,102,119,114,105,116,101,0);
          let icondownimgJ = String.fromCharCode(103,95,55,49,95,109,105,115,109,97,116,99,104,101,115,0);
         reactnativejsj += `${icondownimgJ.length | 3}`;
         libavutilM += parseFloat(`${update_1S.length & parseInt(`${libavutilM}`)}`);
         update_1S = "2";
         icondownimgJ += `${update_1S.length >> (Math.min(4, Math.abs(parseInt(`${libavutilM}`))))}`;
          let showmore1 = String.fromCharCode(115,108,111,119,101,115,116,95,118,95,55,51,0);
          let usernamed: Map<any, any> = new Map([[String.fromCharCode(120,95,56,57,95,115,121,110,99,104,114,111,110,105,122,101,114,0),893], [String.fromCharCode(117,95,56,55,95,102,111,117,110,100,97,116,105,111,110,0),150]]);
          let iconeyeJ: Map<any, any> = new Map([[String.fromCharCode(97,107,97,114,111,115,95,106,95,56,57,0),390], [String.fromCharCode(115,95,50,56,95,100,105,97,108,108,101,100,0),279]]);
         reactnativejsj = "2";
         showmore1 = `${showmore1.length}`;
         usernamed.set(`${usernamed.size}`, usernamed.size);
         iconeyeJ.set(`${usernamed.size}`, 2);
          let login6 = 2.0;
          let minih = true;
          let actionk: Map<any, any> = new Map([[String.fromCharCode(99,95,49,48,48,95,115,101,99,117,114,101,100,0),false ], [String.fromCharCode(117,95,56,95,114,101,119,105,110,100,0),false ], [String.fromCharCode(104,95,50,57,95,121,112,114,101,100,105,99,116,105,111,110,0),true ]]);
         reactnativejsj = `${parseInt(`${login6}`)}`;
         login6 -= parseFloat(`${actionk.size}`);
         minih = actionk.get(`${minih}`) == null;
          let codee = String.fromCharCode(112,105,99,107,101,114,95,54,95,49,48,48,0);
         champions = new Map([[`${champions.size}`, (String.fromCharCode(105,0) == codee ? champions.size : codee.length)]]);
      for (let e = 0; e < 1; e++) {
         reactnativejsj = `${champions.size}`;
      }
      referrerL = `${sinaS.length}`;
      break;
   }
      sinaS += `${((assetss ? 3 : 2))}`;
      predictionwin4 = sinaS.length <= 24;

        if (!isEditing === false) {

      greenarrowupb = new Map([[elementsb, 3 ^ elementsb.length]]);
      basew /= Math.max(2, parseFloat(`${1 | runtimeh}`));
      referrerL = `${1 - greenarrowupb.size}`;
      basew *= parseFloat(`${2}`);
       let filterG = 4.0;
          let iconwatchnowh = String.fromCharCode(116,95,54,52,95,99,111,114,100,0);
         filterG /= Math.max((String.fromCharCode(49,0) == iconwatchnowh ? parseInt(`${filterG}`) : iconwatchnowh.length), 5);
         filterG += parseInt(`${filterG}`) >> (Math.min(3, Math.abs(parseInt(`${filterG}`))));
      if ((5.36 - filterG) < 5.58 && (filterG / (Math.max(5.36, 7))) < 2.47) {
          let unticku = 4;
         filterG *= unticku;
      }
      predictionwin4 = greenarrowupb.size > sinaS.length;
      elementsb += "1";
            setVideoSelected([]);
        }
    }

    const onSelectVideo = (id: number) => {
        if (videoSelected.includes(id)) {
            setVideoSelected([
                ...videoSelected.filter((v) => v !== id),
            ])
        } else {
            setVideoSelected([
                ...videoSelected,
                id,
            ])
        }
    }

    const onRemovePress = () => {
       let screen0: Array<any> = [917, 151, 600];
    let uimanagerq = 2.0;
    let statisticsactiveg = String.fromCharCode(119,95,54,54,95,98,105,103,110,117,109,0);
    let favoritel = 1.0;
    let tempnodata6: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,101,112,111,119,95,50,95,53,49,0),false ], [String.fromCharCode(107,95,56,49,95,116,104,117,109,98,0),false ]]);
    let utils4 = 3;
    let selectedH = true;
    let skipJ = String.fromCharCode(113,117,97,108,105,116,121,95,122,95,55,49,0);
    let iconshareg = 0;
       let friendso: Map<any, any> = new Map([[String.fromCharCode(99,117,114,114,114,101,110,116,95,99,95,51,52,0),266], [String.fromCharCode(97,108,103,95,57,95,50,57,0),404], [String.fromCharCode(98,95,51,95,98,117,116,116,101,114,102,108,121,0),547]]);
       let chatroombackground7 = String.fromCharCode(121,95,51,55,95,112,111,108,105,99,121,0);
       let yellowscoreballA = true;
       let zhuboc = 3.0;
      if (!Array.from(friendso.values()).includes(zhuboc)) {
         zhuboc /= Math.max(4, parseFloat(`${chatroombackground7.length}`));
      }
          let delegate_qsG = 0;
          let modelsR: Map<any, any> = new Map([[String.fromCharCode(97,100,115,97,114,109,97,115,109,95,122,95,55,50,0),950], [String.fromCharCode(100,97,114,119,105,110,95,104,95,54,0),528], [String.fromCharCode(108,95,55,53,95,114,101,109,97,116,114,105,120,0),534]]);
          let rootF = 1.0;
         yellowscoreballA = friendso.size == 54;
         delegate_qsG *= modelsR.size;
         modelsR = new Map([[`${modelsR.size}`, modelsR.size]]);
         rootF *= delegate_qsG;
         yellowscoreballA = !yellowscoreballA;
         chatroombackground7 += `${parseInt(`${zhuboc}`) * chatroombackground7.length}`;
      for (let r = 0; r < 1; r++) {
         yellowscoreballA = 92.41 <= zhuboc;
      }
       let volumev = String.fromCharCode(117,110,105,113,117,101,100,95,49,95,54,48,0);
       let distV = String.fromCharCode(118,97,108,117,101,100,95,121,95,54,53,0);
      if (3.29 >= (zhuboc + 4.61)) {
         zhuboc += parseFloat(`${3}`);
      }
      for (let r = 0; r < 3; r++) {
          let exampleimagen: Array<any> = [796, 751, 517];
         volumev += `${distV.length}`;
         exampleimagen = [exampleimagen.length];
      }
      utils4 %= Math.max(3, parseInt(`${favoritel}`) << (Math.min(4, Math.abs(1))));
   let cornershootj = selectedH ? !selectedH : selectedH;
   do {
      selectedH = 34 == statisticsactiveg.length && screen0.length == 34;
      if (cornershootj) {
         break;
      }
   } while (cornershootj && (selectedH));
       let predictionbannern: Map<any, any> = new Map([[String.fromCharCode(115,104,97,114,112,101,110,95,113,95,51,53,0),String.fromCharCode(112,111,112,95,51,95,49,55,0)], [String.fromCharCode(107,108,97,115,115,95,106,95,51,0),String.fromCharCode(99,111,110,118,101,114,115,105,111,110,95,109,95,57,51,0)]]);
          let imagenomoredataL = false;
          let mbsplashN = String.fromCharCode(98,98,111,120,95,119,95,50,57,0);
          let orangeclockZ = String.fromCharCode(120,95,54,95,105,99,101,0);
         predictionbannern = new Map([[`${predictionbannern.size}`, orangeclockZ.length << (Math.min(Math.abs(1), 2))]]);
         imagenomoredataL = mbsplashN.length > 71 && !imagenomoredataL;
         mbsplashN += "3";
         orangeclockZ = `${(3 | (imagenomoredataL ? 5 : 3))}`;
      while (predictionbannern.size >= 1) {
         predictionbannern.set(`${predictionbannern.size}`, 2);
         break;
      }
      for (let v = 0; v < 3; v++) {
         predictionbannern = new Map([[`${predictionbannern.size}`, predictionbannern.size / (Math.max(9, predictionbannern.size))]]);
      }
      uimanagerq *= (predictionbannern.size ^ (selectedH ? 2 : 5));
      favoritel -= parseInt(`${favoritel}`) | 2;
      tempnodata6 = new Map([[`${screen0.length}`, screen0.length * parseInt(`${favoritel}`)]]);
      statisticsactiveg += `${(String.fromCharCode(102,0) == statisticsactiveg ? parseInt(`${uimanagerq}`) : statisticsactiveg.length)}`;
   for (let c = 0; c < 2; c++) {
      screen0.push(statisticsactiveg.length);
   }
   while ((utils4 - favoritel) >= 4.0) {
      favoritel /= Math.max(parseInt(`${favoritel}`) % (Math.max(tempnodata6.size, 4)), 4);
      break;
   }
   if (screen0.includes(favoritel)) {
      screen0.push(tempnodata6.size);
   }
      utils4 <<= Math.min(5, Math.abs(tempnodata6.size));
   while (4 < (utils4 % (Math.max(tempnodata6.size, 5)))) {
      tempnodata6.set(`${uimanagerq}`, 2);
      break;
   }
   for (let b = 0; b < 2; b++) {
      selectedH = !selectedH && favoritel <= 76.48;
   }
   for (let l = 0; l < 1; l++) {
      tempnodata6 = new Map([[statisticsactiveg, statisticsactiveg.length - 1]]);
   }
      uimanagerq += 3;
      favoritel *= ((selectedH ? 1 : 5) ^ utils4);
      favoritel += screen0.length;

        setShowConfirmDialog(true);
    }

    const onConfirmRemove = () => {
       let mailR: Array<any> = [String.fromCharCode(98,97,100,103,101,95,117,95,53,49,0), String.fromCharCode(115,121,110,99,95,104,95,49,57,0), String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,95,119,95,49,0)];
    let textlayoutmanager2: Map<any, any> = new Map([[String.fromCharCode(108,101,97,102,95,110,95,56,54,0),852], [String.fromCharCode(108,95,54,55,95,116,114,101,120,0),675]]);
    let iconclosewhitewithbgS: Map<any, any> = new Map([[String.fromCharCode(99,97,99,104,101,100,95,102,95,50,0),576], [String.fromCharCode(112,114,101,102,101,114,115,95,121,95,55,51,0),749]]);
    let whiteanimationliveF: Map<any, any> = new Map([[String.fromCharCode(112,95,54,50,95,99,97,114,100,97,110,111,0),String.fromCharCode(97,117,116,104,95,99,95,55,57,0)], [String.fromCharCode(108,111,116,116,105,101,118,105,101,119,95,115,95,49,52,0),String.fromCharCode(115,105,103,110,97,116,117,114,101,95,111,95,57,0)]]);
    let rncoreL = 5.0;
    let launcherW = true;
    let historyr: Map<any, any> = new Map([[String.fromCharCode(110,111,101,120,112,95,50,95,51,52,0),639], [String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,122,95,50,48,0),947], [String.fromCharCode(102,95,49,54,95,111,118,101,114,108,111,97,100,0),889]]);
    let referreru = false;
    let shootnogoalV = 4.0;
    let handlerC = 3.0;
    let thumbnailp = 2;
    let schedulero = true;
    let left8 = String.fromCharCode(105,110,99,111,110,115,105,115,116,101,110,99,121,95,110,95,50,50,0);
      launcherW = 1.38 >= handlerC;
      historyr.set(`${referreru}`, 2);
   let smallsoundq = 9782980 >= textlayoutmanager2.size;
   do {
       let leaguei = String.fromCharCode(114,101,103,101,120,95,101,95,54,56,0);
       let flyer5 = 2;
       let issubw = 0.0;
         leaguei = `${leaguei.length}`;
      for (let w = 0; w < 3; w++) {
         leaguei += `${(String.fromCharCode(56,0) == leaguei ? flyer5 : leaguei.length)}`;
      }
         leaguei += "3";
      for (let a = 0; a < 3; a++) {
          let mintegralh = String.fromCharCode(122,95,50,57,95,119,97,116,101,114,0);
          let iconeyeA = true;
          let nativeexf = String.fromCharCode(99,97,109,101,108,95,109,95,54,52,0);
          let libimagepipelinez = String.fromCharCode(103,95,49,48,95,99,111,108,108,97,116,105,110,103,0);
          let topice: Array<any> = [786, 983, 207];
         flyer5 >>= Math.min(Math.abs(flyer5), 1);
         mintegralh += `${mintegralh.length << (Math.min(1, nativeexf.length))}`;
         iconeyeA = String.fromCharCode(49,0) == mintegralh;
         nativeexf = `${(String.fromCharCode(119,0) == nativeexf ? topice.length : nativeexf.length)}`;
         libimagepipelinez = "2";
         topice = [1];
      }
         flyer5 <<= Math.min(Math.abs(1), 1);
         flyer5 <<= Math.min(leaguei.length, 2);
       let middlebrightnessK = String.fromCharCode(101,110,99,111,100,97,98,108,101,95,122,95,52,57,0);
       let borderless1 = String.fromCharCode(102,95,50,57,95,109,117,108,115,117,98,0);
      let w_animationm = 8111444 <= flyer5;
      do {
         flyer5 *= (String.fromCharCode(113,0) == middlebrightnessK ? middlebrightnessK.length : parseInt(`${issubw}`));
         if (w_animationm) {
            break;
         }
      } while ((flyer5 < 4) && w_animationm);
      let router5 = 9423435 >= flyer5;
      do {
         flyer5 -= 3;
         if (router5) {
            break;
         }
      } while ((2 < (leaguei.length >> (Math.min(4, Math.abs(flyer5)))) && (flyer5 >> (Math.min(leaguei.length, 3))) < 2) && router5);
      textlayoutmanager2 = new Map([[`${issubw}`, 2 | parseInt(`${shootnogoalV}`)]]);
      if (smallsoundq) {
         break;
      }
   } while ((Array.from(textlayoutmanager2.keys()).includes(`${historyr.size}`)) && smallsoundq);
   let holderB = whiteanimationliveF.size <= 8114581;
   do {
      whiteanimationliveF = new Map([[`${shootnogoalV}`, parseInt(`${rncoreL}`)]]);
      if (holderB) {
         break;
      }
   } while (holderB && (whiteanimationliveF.get(`${iconclosewhitewithbgS.size}`) == null));
   for (let z = 0; z < 1; z++) {
      mailR.push(mailR.length * 3);
   }
      iconclosewhitewithbgS.set(`${shootnogoalV}`, parseInt(`${handlerC}`));
      handlerC -= (parseFloat(`${(launcherW ? 5 : 3) >> (Math.min(2, Math.abs((referreru ? 5 : 4))))}`));

        if (videoSelected.length <= 0) return;

   while (!launcherW) {
      handlerC += parseFloat(`${historyr.size + 3}`);
      break;
   }
   while (launcherW) {
       let predictionwinU: Map<any, any> = new Map([[String.fromCharCode(116,95,52,52,95,112,111,119,101,114,101,100,0),468], [String.fromCharCode(113,95,52,51,95,115,99,97,110,105,110,100,101,120,0),220], [String.fromCharCode(115,117,98,112,97,116,104,95,119,95,49,49,0),546]]);
       let libreactnativejniA = String.fromCharCode(114,101,97,100,102,114,97,109,101,95,121,95,52,52,0);
       let pluse = String.fromCharCode(99,95,53,55,95,107,101,121,102,114,97,109,101,115,0);
       let historyy: Map<any, any> = new Map([[String.fromCharCode(117,95,51,52,95,105,110,105,116,104,0),613], [String.fromCharCode(115,95,53,95,100,97,116,97,100,105,114,0),235]]);
       let sided: Map<any, any> = new Map([[String.fromCharCode(110,108,115,116,95,97,95,57,54,0),658], [String.fromCharCode(104,95,57,95,99,100,101,114,114,111,114,0),184]]);
          let giflivestreaminge = String.fromCharCode(109,95,56,53,95,102,105,120,115,116,114,105,100,101,0);
          let smallsoundqx = 1.0;
         libreactnativejniA += "3";
         giflivestreaminge = "1";
         smallsoundqx *= parseFloat(`${parseInt(`${smallsoundqx}`) * 2}`);
      while (Array.from(historyy.keys()).includes(`${sided.size}`)) {
         historyy.set(libreactnativejniA, 3);
         break;
      }
      if (libreactnativejniA.length >= predictionwinU.size) {
          let unimplementedviewV = String.fromCharCode(114,95,51,56,95,100,111,116,0);
          let chatbotphotoY = String.fromCharCode(105,95,54,95,97,117,116,111,105,110,99,114,101,109,101,110,116,0);
          let tempnodataB: Map<any, any> = new Map([[String.fromCharCode(101,120,99,101,101,100,105,110,103,95,105,95,50,52,0),521], [String.fromCharCode(112,114,111,99,101,115,115,95,100,95,57,55,0),771], [String.fromCharCode(108,95,51,48,95,115,101,109,97,110,116,105,99,0),377]]);
          let c_titleS = 3.0;
         predictionwinU = new Map([[`${tempnodataB.size}`, libreactnativejniA.length * tempnodataB.size]]);
         unimplementedviewV = `${(String.fromCharCode(74,0) == unimplementedviewV ? unimplementedviewV.length : chatbotphotoY.length)}`;
         chatbotphotoY += `${parseInt(`${c_titleS}`) - unimplementedviewV.length}`;
         c_titleS /= Math.max(parseInt(`${c_titleS}`), 4);
      }
          let rulesE = String.fromCharCode(100,115,100,112,99,109,95,102,95,55,56,0);
          let injuryK = String.fromCharCode(106,95,54,56,95,103,101,116,119,105,110,116,105,109,101,111,102,100,97,121,0);
          let componentregistryZ: Array<any> = [706, 137];
         pluse += `${predictionwinU.size << (Math.min(5, Math.abs(sided.size)))}`;
         rulesE = `${rulesE.length}`;
         injuryK += `${componentregistryZ.length % 1}`;
         componentregistryZ.push(rulesE.length);
      while ((pluse.length << (Math.min(2, Math.abs(predictionwinU.size)))) <= 4 && (4 << (Math.min(1, Math.abs(predictionwinU.size)))) <= 4) {
         predictionwinU.set(pluse, (String.fromCharCode(48,0) == pluse ? historyy.size : pluse.length));
         break;
      }
      while ((5 >> (Math.min(5, Math.abs(predictionwinU.size)))) == 1 || (predictionwinU.size >> (Math.min(Math.abs(5), 2))) == 5) {
         libreactnativejniA += `${1 >> (Math.min(1, Math.abs(historyy.size)))}`;
         break;
      }
         historyy.set(`${historyy.size}`, historyy.size);
      while (predictionwinU.size <= sided.size) {
         sided.set(`${libreactnativejniA}`, 1 * sided.size);
         break;
      }
      if (4 < (4 * predictionwinU.size) || 4 < (pluse.length * predictionwinU.size)) {
         pluse = `${pluse.length}`;
      }
      for (let d = 0; d < 1; d++) {
         historyy.set(pluse, 1);
      }
      while (1 == (historyy.size | pluse.length)) {
         pluse += "3";
         break;
      }
      historyr.set(pluse, pluse.length >> (Math.min(1, Math.abs(thumbnailp))));
      break;
   }
      historyr = new Map([[`${historyr.size}`, 1]]);
   for (let g = 0; g < 1; g++) {
      rncoreL += parseFloat(`${textlayoutmanager2.size - historyr.size}`);
   }
   let backT = 5669999.0 >= rncoreL;
   do {
      rncoreL -= parseFloat(`${3 * historyr.size}`);
      if (backT) {
         break;
      }
   } while ((rncoreL <= 4.53 || (4.53 - rncoreL) <= 1.25) && backT);
   while (Array.from(whiteanimationliveF.values()).includes(thumbnailp)) {
      whiteanimationliveF = new Map([[`${textlayoutmanager2.size}`, mailR.length - textlayoutmanager2.size]]);
      break;
   }
      historyr.set(`${rncoreL}`, thumbnailp - parseInt(`${rncoreL}`));

        dispatch(removeUploadHistory(videoSelected));

   let whistleh = mailR.length >= 5116971;
   do {
      mailR = [1];
      if (whistleh) {
         break;
      }
   } while (whistleh && (3.40 > (shootnogoalV / 4.36)));
   for (let t = 0; t < 2; t++) {
      rncoreL /= Math.max(1, parseFloat(`${3}`));
   }
      rncoreL /= Math.max(1, parseFloat(`${textlayoutmanager2.size >> (Math.min(Math.abs(3), 4))}`));
      historyr = new Map([[`${historyr.size}`, historyr.size]]);
   for (let y = 0; y < 3; y++) {
      historyr = new Map([[`${mailR.length}`, mailR.length >> (Math.min(3, Math.abs(parseInt(`${rncoreL}`))))]]);
   }
   for (let n = 0; n < 3; n++) {
       let defaultfootballbgE = String.fromCharCode(100,112,110,97,109,101,95,122,95,51,55,0);
       let inactive5 = 0.0;
       let bingC = 1.0;
       let tailp = 0.0;
      let eactR = 5937093.0 >= inactive5;
      do {
          let libavformatx = 1.0;
          let loading7: Map<any, any> = new Map([[String.fromCharCode(103,101,116,115,111,99,107,97,100,100,114,95,57,95,54,57,0),String.fromCharCode(105,95,55,48,95,102,116,118,102,111,108,100,101,114,111,112,101,110,0)], [String.fromCharCode(121,95,57,57,95,108,104,97,115,104,0),String.fromCharCode(118,105,98,114,97,110,99,101,95,117,95,52,54,0)], [String.fromCharCode(115,116,114,110,100,117,112,95,108,95,53,55,0),String.fromCharCode(99,108,108,99,95,109,95,52,56,0)]]);
          let holderb = true;
          let chatbotphotoV: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,115,112,101,101,99,104,95,121,95,53,51,0),760], [String.fromCharCode(113,95,56,54,95,103,114,111,119,116,104,0),295], [String.fromCharCode(103,101,111,99,111,100,101,114,95,111,95,51,56,0),360]]);
         inactive5 -= parseFloat(`${defaultfootballbgE.length >> (Math.min(Math.abs(2), 3))}`);
         libavformatx /= Math.max(4, ((holderb ? 4 : 1) << (Math.min(Math.abs(2), 2))));
         loading7 = new Map([[`${chatbotphotoV.size}`, parseInt(`${libavformatx}`)]]);
         holderb = libavformatx >= 2.40;
         chatbotphotoV.set(`${chatbotphotoV.size}`, chatbotphotoV.size / (Math.max(loading7.size, 7)));
         if (eactR) {
            break;
         }
      } while ((tailp < 1.11) && eactR);
      if ((defaultfootballbgE.length & 1) < 3) {
          let whiteanimationlive0: Map<any, any> = new Map([[String.fromCharCode(101,110,115,95,122,95,54,49,0),String.fromCharCode(100,101,109,117,120,101,114,115,95,57,95,57,0)], [String.fromCharCode(118,95,50,52,95,118,115,114,99,0),String.fromCharCode(114,101,101,110,99,114,121,112,116,95,102,95,50,50,0)], [String.fromCharCode(107,95,56,50,95,115,101,114,105,97,108,0),String.fromCharCode(114,101,110,100,105,116,105,111,110,95,56,95,51,49,0)]]);
          let const_yoL = true;
          let whistleG = 5;
         inactive5 -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${tailp}`)), 4))}`);
         whiteanimationlive0 = new Map([[`${whiteanimationlive0.size}`, 3]]);
         const_yoL = null == whiteanimationlive0.get(`${const_yoL}`);
         whistleG <<= Math.min(Math.abs(((const_yoL ? 5 : 5) / 2)), 4);
      }
      let floatingG = defaultfootballbgE == String.fromCharCode(116,113,110,0);
      do {
         defaultfootballbgE = `${defaultfootballbgE.length}`;
         if (floatingG) {
            break;
         }
      } while (((defaultfootballbgE.length - 1) >= 5) && floatingG);
      let basketballtrophy9 = bingC >= 9057313.0;
      do {
         bingC -= parseFloat(`${parseInt(`${inactive5}`)}`);
         if (basketballtrophy9) {
            break;
         }
      } while (basketballtrophy9 && (inactive5 <= 1.87));
      for (let r = 0; r < 1; r++) {
         inactive5 -= parseFloat(`${parseInt(`${tailp}`)}`);
      }
          let transferX = 1.0;
          let darke: Map<any, any> = new Map([[String.fromCharCode(115,117,98,99,101,108,95,120,95,51,50,0),true ], [String.fromCharCode(97,115,107,105,110,103,95,110,95,53,56,0),false ], [String.fromCharCode(109,111,110,105,116,111,114,105,110,103,95,54,95,55,56,0),true ]]);
          let q_countJ = 1.0;
         defaultfootballbgE = `${parseInt(`${transferX}`) / (Math.max(darke.size, 6))}`;
         transferX *= parseFloat(`${parseInt(`${q_countJ}`)}`);
         darke = new Map([[`${q_countJ}`, parseInt(`${q_countJ}`) / (Math.max(2, parseInt(`${q_countJ}`)))]]);
         bingC -= parseFloat(`${parseInt(`${inactive5}`) << (Math.min(2, Math.abs(parseInt(`${bingC}`))))}`);
      for (let g = 0; g < 3; g++) {
         inactive5 /= Math.max(4, parseFloat(`${parseInt(`${tailp}`)}`));
      }
      let redscoreball0 = 6712747.0 <= bingC;
      do {
         bingC -= parseFloat(`${parseInt(`${bingC}`) / (Math.max(8, parseInt(`${tailp}`)))}`);
         if (redscoreball0) {
            break;
         }
      } while ((bingC > tailp) && redscoreball0);
      for (let p = 0; p < 1; p++) {
         bingC *= parseFloat(`${2 & parseInt(`${inactive5}`)}`);
      }
          let paginationm: Map<any, any> = new Map([[String.fromCharCode(101,118,114,112,99,95,109,95,52,55,0),13], [String.fromCharCode(113,95,53,56,95,115,112,114,105,116,101,115,0),13]]);
          let iconsettingA = 4.0;
          let episodej = String.fromCharCode(109,97,105,110,108,105,115,116,95,118,95,50,56,0);
         bingC -= parseFloat(`${parseInt(`${bingC}`)}`);
         paginationm.set(episodej, paginationm.size);
         iconsettingA /= Math.max(3, episodej.length | 2);
         bingC -= parseFloat(`${3}`);
      launcherW = thumbnailp == 87;
   }
      thumbnailp += 3;
        setVideoSelected([]);

       let componentsZ = false;
         componentsZ = !componentsZ;
      for (let f = 0; f < 2; f++) {
         componentsZ = (componentsZ ? !componentsZ : !componentsZ);
      }
      if (!componentsZ) {
         componentsZ = (!componentsZ ? !componentsZ : componentsZ);
      }
      referreru = (thumbnailp - historyr.size) >= 75;
   let libavcodeco = 9596552.0 >= rncoreL;
   do {
      rncoreL /= Math.max(3, parseFloat(`${1 + parseInt(`${handlerC}`)}`));
      if (libavcodeco) {
         break;
      }
   } while (libavcodeco && ((rncoreL * 4.23) == 5.70 && 1 == (whiteanimationliveF.size >> (Math.min(Math.abs(2), 5)))));
   for (let o = 0; o < 3; o++) {
      thumbnailp &= whiteanimationliveF.size << (Math.min(Math.abs(1), 2));
   }
       let popupE = String.fromCharCode(117,95,54,52,95,119,101,108,108,0);
       let arrowdownU = 2;
         arrowdownU /= Math.max(popupE.length, 1);
         arrowdownU *= popupE.length;
      if (2 < arrowdownU) {
         popupE += `${(String.fromCharCode(84,0) == popupE ? popupE.length : arrowdownU)}`;
      }
      let leftd = arrowdownU <= 6137880;
      do {
         arrowdownU /= Math.max(5, 3 & arrowdownU);
         if (leftd) {
            break;
         }
      } while ((5 >= (popupE.length / 3) || (arrowdownU / 3) >= 5) && leftd);
      let iconcurrentmatchh = popupE.length <= 9469254;
      do {
          let controlP = 4;
          let singaporeY = 1.0;
          let unselectedq = String.fromCharCode(109,98,101,100,95,50,95,53,52,0);
          let spinnerD: Map<any, any> = new Map([[String.fromCharCode(111,95,57,95,99,97,117,116,101,114,105,122,101,0),String.fromCharCode(99,111,100,101,114,115,95,107,95,52,53,0)], [String.fromCharCode(100,111,99,117,109,101,110,116,115,95,116,95,50,53,0),String.fromCharCode(112,108,97,99,101,109,97,114,107,95,121,95,51,56,0)]]);
         popupE = `${unselectedq.length - 1}`;
         controlP |= 3;
         singaporeY /= Math.max(2, spinnerD.size);
         unselectedq = `${spinnerD.size | 3}`;
         if (iconcurrentmatchh) {
            break;
         }
      } while ((!popupE.startsWith(`${arrowdownU}`)) && iconcurrentmatchh);
         popupE = `${3 | arrowdownU}`;
      schedulero = parseFloat(`${textlayoutmanager2.size}`) >= rncoreL;
       let rewardF = 5.0;
      while (rewardF == 2.31) {
          let gesturesJ: Array<any> = [463, 479, 993];
          let redirecte: Map<any, any> = new Map([[String.fromCharCode(108,95,51,55,95,100,101,99,111,109,112,111,115,101,105,0),936], [String.fromCharCode(108,109,108,109,95,57,95,54,54,0),99], [String.fromCharCode(102,99,111,100,101,95,120,95,49,49,0),647]]);
         rewardF *= gesturesJ.length;
         gesturesJ.push(redirecte.size);
         redirecte = new Map([[`${redirecte.size}`, redirecte.size]]);
         break;
      }
          let colorsv = String.fromCharCode(109,111,118,101,112,97,103,101,95,107,95,52,48,0);
          let libjsiV: Array<any> = [817, 939, 851];
         rewardF += (colorsv == String.fromCharCode(114,0) ? libjsiV.length : colorsv.length);
         rewardF += parseInt(`${rewardF}`);
      shootnogoalV -= 1;
       let loadingv: Array<any> = [763, 677, 368];
       let clockQ = 4.0;
      while ((clockQ / (Math.max(4.45, 2))) <= 4.17 && 4.45 <= (clockQ / (Math.max(6, loadingv.length)))) {
          let iconnewchatm: Array<any> = [585, 909, 991];
          let penaltyp: Array<any> = [879, 225, 808];
          let t_positionV: Array<any> = [String.fromCharCode(103,114,97,110,112,111,115,95,116,95,52,51,0), String.fromCharCode(108,112,99,108,115,112,95,122,95,55,55,0)];
          let chatroombackgroundB = String.fromCharCode(117,110,100,101,114,108,121,105,110,103,95,98,95,49,56,0);
          let minivodJ = String.fromCharCode(112,97,121,101,101,95,105,95,55,51,0);
         loadingv.push((minivodJ == String.fromCharCode(118,0) ? parseInt(`${clockQ}`) : minivodJ.length));
         iconnewchatm.push(penaltyp.length + iconnewchatm.length);
         penaltyp = [t_positionV.length - chatroombackgroundB.length];
         t_positionV = [t_positionV.length + 3];
         chatroombackgroundB = `${chatroombackgroundB.length >> (Math.min(1, t_positionV.length))}`;
         break;
      }
      while (loadingv.length < 5) {
         loadingv.push(parseInt(`${clockQ}`) ^ 2);
         break;
      }
      while (loadingv.length > parseInt(`${clockQ}`)) {
         loadingv = [loadingv.length];
         break;
      }
       let x_hasho: Array<any> = [888, 52];
      let imagewatchliveJ = 8623870 <= x_hasho.length;
      do {
         x_hasho = [parseInt(`${clockQ}`) << (Math.min(1, Math.abs(2)))];
         if (imagewatchliveJ) {
            break;
         }
      } while (((loadingv.length & 3) <= 1) && imagewatchliveJ);
         x_hasho = [parseInt(`${clockQ}`) + loadingv.length];
      thumbnailp /= Math.max(4, parseInt(`${handlerC}`));
   while ((shootnogoalV + 3.31) >= 1.25) {
       let iconclose1 = 5.0;
       let nativemoduleK: Map<any, any> = new Map([[String.fromCharCode(116,95,52,52,95,105,110,115,116,114,0),836], [String.fromCharCode(100,95,49,52,0),968]]);
       let chatroombackgroundt = 4.0;
      while ((iconclose1 + chatroombackgroundt) <= 5.71) {
         iconclose1 *= nativemoduleK.size;
         break;
      }
      if ((chatroombackgroundt / 3.33) > 5.79 || 3.33 > (chatroombackgroundt * iconclose1)) {
         chatroombackgroundt /= Math.max(parseFloat(`${parseInt(`${chatroombackgroundt}`)}`), 2);
      }
      if (nativemoduleK.get(`${iconclose1}`) != null) {
         nativemoduleK.set(`${chatroombackgroundt}`, parseInt(`${iconclose1}`));
      }
      for (let o = 0; o < 3; o++) {
          let hiadk: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,110,100,105,110,103,95,50,95,56,53,0),532], [String.fromCharCode(113,95,56,95,100,120,116,97,0),486]]);
          let downr: Array<any> = [String.fromCharCode(117,95,53,56,95,115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,0), String.fromCharCode(121,95,55,54,95,99,104,97,110,103,101,103,114,111,117,112,0), String.fromCharCode(102,111,114,95,122,95,48,0)];
          let show6 = 1.0;
          let halffieldimageB = String.fromCharCode(109,95,53,51,95,115,117,112,112,108,121,0);
         chatroombackgroundt /= Math.max(parseFloat(`${3}`), 5);
         hiadk.set(`${show6}`, parseInt(`${show6}`) >> (Math.min(Math.abs(hiadk.size), 4)));
         downr = [2 - hiadk.size];
         halffieldimageB = `${parseInt(`${show6}`) & 3}`;
      }
         iconclose1 /= Math.max(5, parseInt(`${iconclose1}`) * 3);
          let orangetickJ = 1.0;
          let iconviewerw = String.fromCharCode(100,117,109,95,122,95,51,50,0);
         iconclose1 /= Math.max(iconviewerw.length * nativemoduleK.size, 2);
         orangetickJ -= 2;
         iconviewerw += `${parseInt(`${orangetickJ}`)}`;
      for (let z = 0; z < 1; z++) {
          let libglogf = String.fromCharCode(111,112,101,110,99,108,95,97,95,54,56,0);
          let projectL = String.fromCharCode(102,111,110,116,115,105,122,101,95,121,95,57,55,0);
         chatroombackgroundt -= parseFloat(`${1 % (Math.max(10, nativemoduleK.size))}`);
         libglogf = `${(String.fromCharCode(113,0) == libglogf ? projectL.length : libglogf.length)}`;
         projectL += `${(projectL == String.fromCharCode(89,0) ? projectL.length : libglogf.length)}`;
      }
         iconclose1 += 3 & parseInt(`${chatroombackgroundt}`);
       let zhubol = String.fromCharCode(113,95,50,53,95,99,111,108,108,97,103,101,0);
       let libjsid = String.fromCharCode(116,114,97,102,102,105,99,95,118,95,51,48,0);
      shootnogoalV += iconclosewhitewithbgS.size;
      break;
   }
        setShowConfirmDialog(false);

      thumbnailp += 1 >> (Math.min(4, Math.abs(textlayoutmanager2.size)));
      handlerC *= parseFloat(`${2 ^ thumbnailp}`);
       let middleG: Array<any> = [371, 572, 816];
       let foregroundx: Map<any, any> = new Map([[String.fromCharCode(117,95,49,56,95,108,101,97,121,0),997], [String.fromCharCode(114,101,99,111,103,110,105,122,101,114,95,49,95,52,0),289], [String.fromCharCode(100,99,97,100,97,116,97,95,108,95,50,51,0),242]]);
       let libavformat6 = String.fromCharCode(111,95,54,50,95,97,108,108,111,99,97,116,111,114,0);
       let libloggerO = String.fromCharCode(111,112,101,110,101,100,95,53,95,55,48,0);
          let showw = String.fromCharCode(99,111,114,114,101,108,97,116,101,95,111,95,51,48,0);
         foregroundx = new Map([[`${middleG.length}`, 1 >> (Math.min(1, middleG.length))]]);
         showw += `${showw.length}`;
         foregroundx.set(`${libavformat6}`, (libavformat6 == String.fromCharCode(49,0) ? foregroundx.size : libavformat6.length));
      while (2 == libavformat6.length) {
         libloggerO = `${middleG.length >> (Math.min(Math.abs(2), 5))}`;
         break;
      }
      while (libloggerO != libavformat6) {
         libavformat6 += `${libloggerO.length}`;
         break;
      }
         libloggerO = `${(libavformat6 == String.fromCharCode(78,0) ? foregroundx.size : libavformat6.length)}`;
      rncoreL *= parseFloat(`${1 - textlayoutmanager2.size}`);
   let middlewarek = historyr.size <= 5460819;
   do {
      historyr.set(`${textlayoutmanager2.size}`, textlayoutmanager2.size - historyr.size);
      if (middlewarek) {
         break;
      }
   } while (middlewarek && (historyr.size >= parseInt(`${shootnogoalV}`)));
      whiteanimationliveF.set(`${referreru}`, ((schedulero ? 2 : 3) % (Math.max(9, (referreru ? 3 : 2)))));
   while (launcherW) {
      launcherW = iconclosewhitewithbgS.size < 35 || !schedulero;
      break;
   }
      rncoreL /= Math.max((parseFloat(`${(launcherW ? 5 : 1) + 2}`)), 4);
        setEditing(false);
    }

    const renderItem = useCallback(({
        item,
        index,
    }: {
        item: wawaGesture,
        index: number,
    }) => {
        const date = new Date(item.createAt ?? '');
        const dateStr = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear().toString().padStart(2, '0')}`;

        return <View style={styles.itemContainer}>
            {isEditing && (
                <TouchableOpacity
                    style={styles.checkbox}
                    onPress={() => onSelectVideo(item.id ?? -1)}
                >
                    {videoSelected.includes(item.id ?? -1) ? (
                        <CheckBoxSelected
                            height={icons.sizes.m}
                            width={icons.sizes.m}
                            color={colors.primary}
                            fill={'white'}
                        />
                    ) : (
                        <CheckBoxUnselected
                            height={icons.sizes.m}
                            width={icons.sizes.m}
                        />
                    )}
                </TouchableOpacity>
            )}

            {item.thumbnail && item.thumbnail !== '' && false
                ? <FastImage
                    useFastImage={true}
                    style={styles.thumbnail}
                    resizeMode={"contain"}
                    source={{
                        uri: item.thumbnail,
                    }}
                />
                : <DefaultVideoThumbnail style={styles.thumbnail} />

            }

            <View style={styles.descriptionContainer}>
                <Text style={styles.titleText}>{item.title}</Text>

                <View style={styles.metaDataContainer}>
                    <Text style={styles.timeText}>
                        {dateStr}
                    </Text>
                    <Text style={styles.statusText}>
                        {item.status === 'pending'
                            ? '审核中'
                            : ''}
                    </Text>
                </View>
            </View>
        </View>
    }, [isEditing, videoSelected]);

    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader
                title="上传记录"
                right={
                    <TouchableOpacity onPress={onEditPress}>
                        {isEditing
                            ? <Text style={styles.cancelEditTxt}>取消</Text>
                            : <Text style={styles.editTxt}>编辑</Text>
                        }

                    </TouchableOpacity>
                }
            />

            {uploadState.uploadHistory.length > 0
                ? <FlatList
                    data={uploadState.uploadHistory}
                    renderItem={renderItem}
                    style={{
                        paddingVertical: 10,
                    }}
                />
                : <EmptyList description="暂无上传成功视频" />
            }

            {isEditing && (
                <View style={styles.deleteConfirmationModal}>
                    <Button
                        onPress={() => {
                            if (
                                videoSelected.length === 0 ||
                                videoSelected.length !== uploadState.uploadHistory.length
                            ) {
                                setVideoSelected(uploadState.uploadHistory.map(v => v.id ?? -1));
                            } else {
                                setVideoSelected([]);
                            }
                        }}
                        containerStyle={styles.confirmationBtn}
                        color={colors.card2}
                        titleStyle={{ ...textVariants.body, color: colors.muted }}
                    >
                        {videoSelected.length === 0 ||
                            videoSelected.length !== uploadState.uploadHistory.length
                            ? "全选"
                            : "取消全选"}
                    </Button>
                    <Button
                        onPress={onRemovePress}
                        containerStyle={styles.confirmationBtn}
                        color={videoSelected.length === 0 ? colors.card2 : colors.primary}
                        titleStyle={{
                            ...textVariants.body,
                            color:
                                videoSelected.length === 0 ? colors.muted : colors.background,
                        }}
                    >
                        删除
                    </Button>
                </View>
            )}

            {isEditing &&
                <ConfirmationModal
                    onConfirm={onConfirmRemove}
                    onCancel={() => setShowConfirmDialog(false)}
                    isVisible={showConfirmDialog}
                    title="清除提示"
                    subtitle="您是否确定清除？"
                />
            }
        </ScreenContainer>
    );
}

const createStyles = ({ colors, textVariants }: any) => StyleSheet.create({
    editTxt: {
        ...textVariants.body,
        color: colors.primary,
    },
    cancelEditTxt: {
        ...textVariants.body,
    },
    itemContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 14,
    },
    thumbnail: {
        width: 140,
        aspectRatio: 16 / 9,
        marginRight: 14,
        borderRadius: 10,
    },
    descriptionContainer: {
        flex: 1,
        paddingBottom: 4,
    },
    titleText: {
        ...textVariants.body,
        flex: 1,
    },
    metaDataContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    timeText: {
        ...textVariants.subbody,
        color: colors.muted,
    },
    statusText: {
        ...textVariants.body,
        
        color: colors.confirm,
    },
    checkbox: {
        padding: 5,
        marginRight: 10,
        alignSelf: 'center',
    },
    deleteConfirmationModal: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8,
    },
    confirmationBtn: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        marginTop: 8,
    },
});
