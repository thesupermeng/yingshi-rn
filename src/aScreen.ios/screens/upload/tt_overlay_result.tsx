import { RootStackScreenProps } from "@type/tt_temperature";
import ScreenContainer from "../../components/container/tt_backward";
import TitleWithBackButtonHeader from "../../components/header/tt_typing_tail_header";
import EmptyList from '../../components/common/tt_logo_desc';
import { useAppDispatch, useSelector } from "@hooks/tt_spec_download";
import { ttFloatingSound } from "@redux/reducers/tt_read";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ttDownloadRead } from "@type/tt_line_borderless";
import FastImage from '../../components/common/tt_connection';
import DefaultVideoThumbnail from '@static/images/pointDelegate_8fBenefit.svg';
import { useCallback, useMemo, useState } from "react";
import { useTheme } from "@react-navigation/native";
import CheckBoxSelected from "@static/images/indicatorCast.svg";
import CheckBoxUnselected from "@static/images/foundWindRecommendation.svg";
import { Button } from "@rneui/themed";
import { removeUploadHistory } from "@redux/actions/tt_stats_strings";
import ConfirmationModal from "../../components/modal/tt_styles";

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

    const uploadState = useSelector<ttFloatingSound>('uploadReducer');

    const onEditPress = () => {
       let hoverh = 2;
    let signinupQ: Map<any, any> = new Map([[String.fromCharCode(102,95,48,95,108,105,102,101,116,105,109,101,0),574], [String.fromCharCode(100,95,53,52,95,118,97,114,105,97,98,108,101,115,0),892], [String.fromCharCode(105,95,57,50,0),272]]);
    let halfk: Map<any, any> = new Map([[String.fromCharCode(98,95,51,57,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0),743], [String.fromCharCode(101,120,116,101,110,100,105,110,103,95,50,95,57,55,0),244]]);
    let vietnamf = String.fromCharCode(109,95,55,49,95,116,97,103,97,118,114,0);
    let layoutl = String.fromCharCode(109,95,52,51,95,103,105,102,115,0);
    let viewerM = 5.0;
    let info5: Map<any, any> = new Map([[String.fromCharCode(116,105,101,114,115,95,49,95,50,57,0),false ], [String.fromCharCode(117,95,50,55,95,97,114,101,116,104,101,114,101,0),true ]]);
    let traminis = 1;
    let becomeG = String.fromCharCode(105,95,49,54,95,109,115,115,100,115,112,0);
    let verticale = String.fromCharCode(107,101,121,98,117,102,95,111,95,54,49,0);
      halfk.set(`${hoverh}`, signinupQ.size % (Math.max(4, hoverh)));
      info5.set(`${layoutl}`, halfk.size % (Math.max(layoutl.length, 9)));
   let temp6 = info5.size >= 7975250;
   do {
      info5.set(`${hoverh}`, vietnamf.length);
      if (temp6) {
         break;
      }
   } while (((info5.size * 5) <= 4) && temp6);
   for (let q = 0; q < 1; q++) {
      halfk = new Map([[layoutl, 2 | layoutl.length]]);
   }
   if ((parseInt(`${viewerM}`) / (Math.max(layoutl.length, 9))) <= 4) {
      viewerM -= halfk.size;
   }
   if ((halfk.size - 2) < 5 && 4 < (halfk.size - 2)) {
       let tailH = 4.0;
       let flyer8 = String.fromCharCode(97,118,114,101,115,97,109,112,108,101,114,101,115,95,105,95,55,49,0);
       let episodeC = 2.0;
       let matchn = 2.0;
          let dialog5 = String.fromCharCode(98,95,54,51,95,114,101,112,108,105,101,115,0);
          let eactz = String.fromCharCode(115,101,101,107,97,98,108,101,95,112,95,52,52,0);
         episodeC += parseFloat(`${parseInt(`${tailH}`)}`);
         dialog5 += `${dialog5.length}`;
         eactz += `${dialog5.length & eactz.length}`;
         matchn *= parseInt(`${tailH}`);
         episodeC += parseFloat(`${2}`);
      for (let v = 0; v < 2; v++) {
         episodeC *= parseFloat(`${2}`);
      }
      while ((episodeC / (Math.max(3.54, 1))) >= 4.80) {
         episodeC *= parseFloat(`${parseInt(`${matchn}`)}`);
         break;
      }
      if (episodeC < parseFloat(`${flyer8.length}`)) {
          let controlsI = 0;
         episodeC *= parseFloat(`${flyer8.length >> (Math.min(Math.abs(2), 4))}`);
         controlsI %= Math.max(1, controlsI);
      }
      while (tailH > matchn) {
         matchn -= 2;
         break;
      }
       let teamZ = false;
      while (4.58 >= tailH) {
         tailH *= parseInt(`${episodeC}`) ^ parseInt(`${matchn}`);
         break;
      }
      if (flyer8.length >= 4) {
          let logoutX = String.fromCharCode(114,95,57,48,95,105,102,111,114,109,97,116,0);
          let placeholderM = 4.0;
         flyer8 = "2";
         logoutX += `${parseInt(`${placeholderM}`)}`;
         placeholderM *= parseInt(`${placeholderM}`) ^ 1;
      }
         matchn *= 2;
      let stationY = teamZ ? !teamZ : teamZ;
      do {
         teamZ = 24.0 <= matchn;
         if (stationY) {
            break;
         }
      } while (stationY && (5.41 >= tailH || (tailH / (Math.max(5.41, 10))) >= 1.78));
      halfk = new Map([[`${info5.size}`, (String.fromCharCode(122,0) == vietnamf ? vietnamf.length : info5.size)]]);
   }
      viewerM -= 1 << (Math.min(2, Math.abs(parseInt(`${viewerM}`))));
      signinupQ = new Map([[`${viewerM}`, (becomeG == String.fromCharCode(115,0) ? becomeG.length : parseInt(`${viewerM}`))]]);

        setEditing(!isEditing);

   for (let y = 0; y < 1; y++) {
      halfk.set(`${viewerM}`, halfk.size >> (Math.min(Math.abs(3), 2)));
   }
      vietnamf = `${2 + signinupQ.size}`;
   let overG = hoverh >= 5449275;
   do {
       let stringl: Array<any> = [621, 740];
       let dataS = String.fromCharCode(108,111,99,97,108,116,105,109,101,95,112,95,52,52,0);
      while (dataS.length > stringl.length) {
         stringl.push(stringl.length);
         break;
      }
      let android0 = dataS.length >= 5184410;
      do {
         dataS = `${dataS.length * 1}`;
         if (android0) {
            break;
         }
      } while (android0 && (1 <= stringl.length));
          let sortr = 0.0;
          let subsz = String.fromCharCode(103,95,55,55,95,105,100,99,116,99,111,108,0);
          let grayy = String.fromCharCode(115,104,97,95,110,95,51,50,0);
         dataS += `${1 * parseInt(`${sortr}`)}`;
         sortr += parseFloat(`${grayy.length}`);
         subsz = `${(String.fromCharCode(90,0) == grayy ? subsz.length : grayy.length)}`;
         dataS = "1";
      if (dataS.length >= 4) {
         stringl.push(stringl.length << (Math.min(dataS.length, 3)));
      }
         dataS += `${stringl.length}`;
      hoverh *= 2;
      if (overG) {
         break;
      }
   } while ((1 >= (hoverh / 5)) && overG);
      viewerM -= 3;
   for (let h = 0; h < 1; h++) {
      viewerM *= layoutl.length & 1;
   }
   for (let s = 0; s < 3; s++) {
      becomeG += `${hoverh % (Math.max(layoutl.length, 1))}`;
   }
       let subsA = String.fromCharCode(98,95,54,51,95,97,117,100,105,98,105,108,105,116,121,0);
         subsA += `${subsA.length}`;
       let indexs = String.fromCharCode(122,95,49,52,95,100,101,99,105,109,97,116,101,0);
       let modityr = String.fromCharCode(105,100,101,111,95,55,95,54,54,0);
       let xvod6: Array<any> = [43, 46];
       let crownO: Array<any> = [245, 144];
      info5.set(layoutl, layoutl.length ^ traminis);
       let sinaH = String.fromCharCode(97,95,49,57,95,97,115,112,101,99,116,115,0);
          let handlero = String.fromCharCode(105,95,53,51,95,111,112,101,110,101,114,0);
          let mbbannerJ = 1.0;
         sinaH += `${parseInt(`${mbbannerJ}`)}`;
         handlero += `${2 * handlero.length}`;
         mbbannerJ -= (parseFloat(`${handlero == String.fromCharCode(107,0) ? handlero.length : handlero.length}`));
         sinaH = `${1 | sinaH.length}`;
      if (!sinaH.endsWith(sinaH)) {
          let championh = String.fromCharCode(116,116,97,100,115,112,95,102,95,57,54,0);
         sinaH += `${3 * championh.length}`;
      }
      halfk.set(`${viewerM}`, 2);

        if (!isEditing === false) {

      signinupQ = new Map([[`${hoverh}`, (String.fromCharCode(53,0) == becomeG ? hoverh : becomeG.length)]]);
       let roomZ = String.fromCharCode(121,95,51,48,95,114,101,115,97,109,112,0);
       let descW = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,98,108,101,95,57,95,49,50,0);
          let launcherN = 5.0;
          let result5: Array<any> = [205, 604];
          let dataz = 4;
         roomZ = `${dataz}`;
         launcherN -= parseInt(`${launcherN}`) & result5.length;
         result5.push(result5.length ^ 3);
         dataz += parseInt(`${launcherN}`);
          let selection7 = String.fromCharCode(122,95,51,54,95,115,112,101,110,100,101,114,0);
          let delegate_mX = 0.0;
         descW += `${(String.fromCharCode(113,0) == roomZ ? roomZ.length : selection7.length)}`;
         selection7 = `${parseInt(`${delegate_mX}`)}`;
       let benefitm = true;
       let redirect3 = true;
      let skipf = redirect3 ? !redirect3 : redirect3;
      do {
          let clockM = String.fromCharCode(97,112,112,115,102,108,121,101,114,95,111,95,53,0);
          let expired9 = 2.0;
          let tempY = String.fromCharCode(97,114,114,95,52,95,53,57,0);
          let specj = String.fromCharCode(101,95,57,55,95,104,97,115,104,116,97,103,115,0);
          let langkeyW = String.fromCharCode(112,114,101,100,111,119,110,108,111,97,100,95,56,95,55,51,0);
         redirect3 = descW.endsWith(`${benefitm}`);
         clockM += `${parseInt(`${expired9}`) * 1}`;
         expired9 /= Math.max(langkeyW.length, 1);
         tempY = `${parseInt(`${expired9}`) + 3}`;
         specj = `${(String.fromCharCode(89,0) == clockM ? clockM.length : parseInt(`${expired9}`))}`;
         langkeyW += "3";
         if (skipf) {
            break;
         }
      } while ((descW.length <= 2) && skipf);
         redirect3 = !benefitm;
      if (!descW.startsWith(`${benefitm}`)) {
          let time_3w7 = String.fromCharCode(112,95,51,48,95,117,112,103,114,97,100,101,115,0);
          let upload0 = String.fromCharCode(103,95,51,51,95,108,117,109,97,0);
         benefitm = (61 <= ((redirect3 ? roomZ.length : 61) % (Math.max(roomZ.length, 9))));
         time_3w7 += "1";
         upload0 = `${upload0.length >> (Math.min(4, time_3w7.length))}`;
      }
      traminis /= Math.max(2, (descW == String.fromCharCode(65,0) ? descW.length : signinupQ.size));
      vietnamf = "2";
      hoverh %= Math.max(5, (layoutl == String.fromCharCode(81,0) ? becomeG.length : layoutl.length));
      layoutl = "2";
   if (1 == (layoutl.length - 4)) {
      info5.set(becomeG, 3 << (Math.min(1, layoutl.length)));
   }
      layoutl = "3";
   if (halfk.get(`${traminis}`) == null) {
      traminis <<= Math.min(Math.abs((vietnamf == String.fromCharCode(105,0) ? hoverh : vietnamf.length)), 2);
   }
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
       let moviesB = 2.0;
    let commentb = 0.0;
    let layout0 = 2.0;
    let borderlessV = 3.0;
    let bannerh = String.fromCharCode(110,95,51,49,95,97,112,112,101,114,97,110,99,101,0);
    let paginationi = true;
    let friendsN = 0.0;
    let plashT = true;
    let paginationC = 4.0;
    let backgroundp = String.fromCharCode(108,105,98,106,112,101,103,116,117,114,98,111,95,121,95,56,56,0);
    let private_eI = 2;
    let orangeN = String.fromCharCode(122,95,57,55,95,100,101,113,117,97,110,116,105,122,97,116,105,111,110,0);
    let singaporeb: Array<any> = [860, 980];
    let profilej: Array<any> = [870, 118, 208];
   if (friendsN < 1.14) {
       let main_oK = String.fromCharCode(116,111,107,104,122,95,101,95,56,54,0);
       let acceptedL: Map<any, any> = new Map([[String.fromCharCode(107,95,49,56,95,99,108,111,99,107,0),253], [String.fromCharCode(118,95,52,53,95,111,112,101,110,0),404]]);
       let tempa = 2.0;
      let catagoryO = acceptedL.size <= 9297895;
      do {
         acceptedL.set(`${tempa}`, 3 & acceptedL.size);
         if (catagoryO) {
            break;
         }
      } while ((2 > (main_oK.length ^ 3) || 3 > (main_oK.length ^ acceptedL.size)) && catagoryO);
         tempa += main_oK.length;
      if (main_oK.length == tempa) {
         tempa *= main_oK.length - 1;
      }
       let memberd: Array<any> = [781, 815, 157];
       let update_pf: Array<any> = [591, 821, 96];
      if ((5 >> (Math.min(4, update_pf.length))) >= 5) {
          let internetI: Map<any, any> = new Map([[String.fromCharCode(98,95,54,52,95,112,114,101,99,105,115,101,0),true ], [String.fromCharCode(105,111,115,98,117,105,108,100,95,122,95,57,57,0),false ], [String.fromCharCode(99,104,101,99,107,95,116,95,49,57,0),true ]]);
          let downloadingy = 3.0;
          let nalyticsA: Array<any> = [767, 346];
         update_pf.push(3 | acceptedL.size);
         internetI.set(`${downloadingy}`, internetI.size << (Math.min(Math.abs(2), 3)));
         downloadingy += parseFloat(`${nalyticsA.length}`);
         nalyticsA.push(internetI.size);
      }
         acceptedL = new Map([[`${acceptedL.size}`, 1 | acceptedL.size]]);
         acceptedL.set(main_oK, update_pf.length % (Math.max(main_oK.length, 1)));
      for (let g = 0; g < 2; g++) {
         acceptedL.set(`${tempa}`, 1);
      }
      while (5 <= update_pf.length) {
         update_pf = [1 & main_oK.length];
         break;
      }
      moviesB /= Math.max((String.fromCharCode(100,0) == bannerh ? bannerh.length : parseInt(`${borderlessV}`)), 2);
   }
      paginationi = paginationC < 21.25;
      commentb /= Math.max(2, 1 - parseInt(`${friendsN}`));
      bannerh += "2";
   for (let o = 0; o < 2; o++) {
       let downloading_ = 4;
      let mbnative8 = downloading_ <= 5810439;
      do {
         downloading_ |= downloading_ % (Math.max(2, downloading_));
         if (mbnative8) {
            break;
         }
      } while ((5 <= (downloading_ % 4) || 4 <= (downloading_ % (Math.max(7, downloading_)))) && mbnative8);
      if ((downloading_ + downloading_) <= 2 && (2 + downloading_) <= 1) {
         downloading_ /= Math.max(3, downloading_);
      }
          let animationp = true;
          let suggestionP = 0.0;
         downloading_ <<= Math.min(1, Math.abs(downloading_ ^ 2));
         animationp = 23.86 >= suggestionP;
         suggestionP -= (parseInt(`${suggestionP}`) - (animationp ? 4 : 4));
      bannerh = `${((plashT ? 2 : 4))}`;
   }
   for (let c = 0; c < 3; c++) {
      paginationi = !paginationi;
   }
   let awayy = plashT ? !plashT : plashT;
   do {
      plashT = borderlessV == 4.18;
      if (awayy) {
         break;
      }
   } while ((1.91 == layout0) && awayy);
       let minimizew = 5.0;
       let combineX = String.fromCharCode(108,105,98,118,101,114,115,105,111,110,95,112,95,56,49,0);
       let assistM = 3;
      if (4 >= (assistM + 4)) {
          let delegate_x5_ = String.fromCharCode(118,95,57,54,95,97,118,120,115,121,110,116,104,0);
          let club9 = String.fromCharCode(103,114,97,100,108,101,95,105,95,49,48,0);
         assistM <<= Math.min(Math.abs(3 | combineX.length), 4);
         delegate_x5_ = `${(delegate_x5_ == String.fromCharCode(76,0) ? club9.length : delegate_x5_.length)}`;
         club9 = `${delegate_x5_.length >> (Math.min(club9.length, 3))}`;
      }
         assistM *= 1;
       let shoot2: Map<any, any> = new Map([[String.fromCharCode(109,95,51,49,95,116,114,105,0),977], [String.fromCharCode(97,95,56,49,95,97,117,100,105,111,100,115,112,0),130]]);
       let matchesI: Map<any, any> = new Map([[String.fromCharCode(101,121,101,95,117,95,49,48,48,0),255], [String.fromCharCode(111,95,49,52,95,115,117,109,109,97,114,105,101,115,0),690], [String.fromCharCode(101,116,104,111,100,95,120,95,55,56,0),410]]);
         combineX = `${3 * matchesI.size}`;
      while (!Array.from(shoot2.values()).includes(minimizew)) {
         shoot2.set(combineX, combineX.length - 2);
         break;
      }
      let checkboxV = combineX.length >= 9634728;
      do {
         combineX = `${(combineX == String.fromCharCode(105,0) ? combineX.length : matchesI.size)}`;
         if (checkboxV) {
            break;
         }
      } while (checkboxV && ((1 - assistM) <= 4));
      while ((1 ^ assistM) <= 4) {
         assistM -= 3 / (Math.max(4, matchesI.size));
         break;
      }
      let twitter4 = matchesI.size <= 5568311;
      do {
          let inactiveO = String.fromCharCode(112,95,53,57,95,101,120,101,99,117,116,105,110,103,0);
         matchesI.set(`${assistM}`, shoot2.size & 1);
         inactiveO += `${inactiveO.length}`;
         if (twitter4) {
            break;
         }
      } while (((assistM | 2) < 5 && 1 < (matchesI.size | 2)) && twitter4);
         minimizew += parseFloat(`${assistM}`);
      backgroundp = `${assistM << (Math.min(Math.abs(parseInt(`${layout0}`)), 3))}`;
      moviesB /= Math.max(4, 1 | parseInt(`${layout0}`));
   while (plashT) {
      plashT = !paginationi || paginationC < 30.20;
      break;
   }
       let bootsplashd = String.fromCharCode(108,95,54,57,95,103,101,116,0);
         bootsplashd = `${bootsplashd.length}`;
         bootsplashd = `${bootsplashd.length >> (Math.min(bootsplashd.length, 5))}`;
          let stringsP: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,105,98,95,55,95,50,50,0),true ], [String.fromCharCode(110,116,112,95,53,95,56,51,0),true ], [String.fromCharCode(109,97,115,115,95,52,95,56,55,0),false ]]);
          let middlep = String.fromCharCode(109,95,49,54,95,115,116,101,97,108,0);
          let sheetH: Array<any> = [576, 548, 838];
         bootsplashd = `${bootsplashd.length}`;
         stringsP = new Map([[`${stringsP.size}`, 3]]);
         middlep += `${sheetH.length}`;
         sheetH.push(3 << (Math.min(1, middlep.length)));
      friendsN *= 2 ^ bannerh.length;
   for (let q = 0; q < 2; q++) {
      paginationC -= parseFloat(`${parseInt(`${borderlessV}`) + 1}`);
   }
      borderlessV += (parseFloat(`${backgroundp == String.fromCharCode(120,0) ? backgroundp.length : parseInt(`${friendsN}`)}`));
       let mbjscommon8 = String.fromCharCode(100,95,50,48,95,111,98,106,101,99,116,105,118,101,0);
       let controln: Map<any, any> = new Map([[String.fromCharCode(112,95,55,53,95,110,111,110,101,0),637], [String.fromCharCode(106,95,51,53,95,99,97,108,99,117,108,97,116,101,0),448], [String.fromCharCode(102,116,118,110,115,95,53,95,56,50,0),615]]);
         mbjscommon8 += `${(String.fromCharCode(82,0) == mbjscommon8 ? mbjscommon8.length : controln.size)}`;
      for (let m = 0; m < 2; m++) {
         controln = new Map([[`${controln.size}`, 1 & controln.size]]);
      }
      if ((mbjscommon8.length % 3) < 1 && (mbjscommon8.length % 3) < 3) {
         mbjscommon8 = "2";
      }
         mbjscommon8 = `${3 + controln.size}`;
       let trophyK = 5.0;
      for (let r = 0; r < 2; r++) {
          let progressn = String.fromCharCode(99,108,117,98,95,111,95,57,52,0);
          let rankr = String.fromCharCode(113,95,56,51,95,99,97,115,116,115,0);
          let reducerc: Array<any> = [901, 749];
          let robotoR = String.fromCharCode(116,97,98,95,49,95,56,49,0);
          let controls7 = String.fromCharCode(116,95,57,56,95,108,101,114,112,102,0);
         trophyK *= parseFloat(`${1 >> (Math.min(5, reducerc.length))}`);
         progressn = `${3 % (Math.max(8, rankr.length))}`;
         rankr += "2";
         reducerc.push((String.fromCharCode(104,0) == robotoR ? robotoR.length : progressn.length));
         controls7 += `${rankr.length / (Math.max(2, 9))}`;
      }
      plashT = 88.45 > friendsN;
   while (5.3 == (1.75 - friendsN) || friendsN == 1.75) {
      friendsN += 1 + bannerh.length;
      break;
   }
       let time_f9R = String.fromCharCode(114,95,53,53,95,115,98,99,100,101,99,0);
       let agreementN = String.fromCharCode(106,95,49,53,95,112,114,111,103,114,101,115,105,118,101,0);
         time_f9R = `${time_f9R.length | 2}`;
      for (let q = 0; q < 1; q++) {
         time_f9R = `${2 << (Math.min(1, time_f9R.length))}`;
      }
      while (!time_f9R.includes(`${agreementN.length}`)) {
         time_f9R += `${1 * time_f9R.length}`;
         break;
      }
         time_f9R = `${agreementN.length}`;
      for (let z = 0; z < 3; z++) {
         time_f9R += `${time_f9R.length}`;
      }
         agreementN = "2";
      private_eI ^= parseInt(`${paginationC}`) ^ 1;
      borderlessV += parseFloat(`${parseInt(`${layout0}`) ^ private_eI}`);
   while (moviesB >= 5.35) {
       let reactnativejsw: Array<any> = [String.fromCharCode(101,108,108,105,112,116,105,99,97,108,95,115,95,50,57,0), String.fromCharCode(100,101,98,117,103,95,101,95,51,56,0)];
       let styleb = String.fromCharCode(98,117,105,108,100,105,110,103,95,100,95,56,53,0);
       let feedbackm: Map<any, any> = new Map([[String.fromCharCode(113,99,101,108,112,100,97,116,97,95,121,95,55,48,0),179], [String.fromCharCode(114,95,56,54,95,104,97,97,114,0),641], [String.fromCharCode(117,95,49,57,95,97,99,99,101,110,116,0),843]]);
       let mathP = String.fromCharCode(103,95,49,52,95,109,101,115,97,103,101,0);
         reactnativejsw.push(reactnativejsw.length >> (Math.min(styleb.length, 5)));
      while ((feedbackm.size / 1) >= 1 || (styleb.length / 1) >= 5) {
          let nextA = 4.0;
          let dycreatorC = 3.0;
          let placement3 = String.fromCharCode(103,97,109,109,97,95,103,95,54,54,0);
          let redirectw = 5.0;
          let roboto2 = String.fromCharCode(122,95,51,57,95,119,97,118,101,115,0);
         styleb = `${reactnativejsw.length % 1}`;
         nextA /= Math.max((String.fromCharCode(83,0) == placement3 ? placement3.length : parseInt(`${dycreatorC}`)), 2);
         dycreatorC -= parseFloat(`${placement3.length}`);
         redirectw /= Math.max(2, 2);
         roboto2 += `${roboto2.length << (Math.min(Math.abs(1), 5))}`;
         break;
      }
      if (!styleb.endsWith(`${feedbackm.size}`)) {
          let modev = 0.0;
          let reactx = String.fromCharCode(111,95,49,49,95,99,108,101,97,114,115,0);
          let r_managerc: Map<any, any> = new Map([[String.fromCharCode(100,95,49,52,95,100,114,97,119,101,114,0),String.fromCharCode(99,95,52,52,95,109,98,112,114,101,100,0)], [String.fromCharCode(122,95,49,54,95,104,113,100,110,100,0),String.fromCharCode(98,95,50,49,95,97,112,109,116,101,115,116,0)], [String.fromCharCode(111,95,50,51,95,100,101,116,101,99,116,0),String.fromCharCode(106,99,115,97,109,112,108,101,95,99,95,56,49,0)]]);
          let componentX = 0;
         feedbackm.set(mathP, r_managerc.size);
         modev *= parseFloat(`${reactx.length}`);
         reactx += "3";
         r_managerc.set(reactx, reactx.length << (Math.min(4, Math.abs(parseInt(`${modev}`)))));
         componentX %= Math.max(parseInt(`${modev}`) + reactx.length, 4);
      }
       let sellR = String.fromCharCode(109,95,53,48,95,116,103,115,0);
          let becomev = String.fromCharCode(99,111,100,105,110,103,95,112,95,53,48,0);
          let currente: Map<any, any> = new Map([[String.fromCharCode(98,105,110,107,97,117,100,105,111,95,110,95,52,52,0),93], [String.fromCharCode(99,95,55,51,95,97,108,115,101,0),43], [String.fromCharCode(118,95,50,50,95,115,101,99,107,101,121,0),586]]);
          let infoa: Map<any, any> = new Map([[String.fromCharCode(97,99,113,117,105,114,101,95,116,95,55,57,0),841], [String.fromCharCode(121,95,51,56,95,101,120,116,114,101,109,101,0),873]]);
         styleb = "2";
         becomev += `${currente.size + 2}`;
         currente = new Map([[`${infoa.size}`, infoa.size % (Math.max(1, becomev.length))]]);
         styleb += `${reactnativejsw.length}`;
      let blacklistH = sellR.length >= 8005298;
      do {
         sellR += `${reactnativejsw.length ^ 3}`;
         if (blacklistH) {
            break;
         }
      } while (blacklistH && ((feedbackm.size + sellR.length) <= 2 && (sellR.length + 2) <= 3));
      let gpaye = String.fromCharCode(113,116,95,107,121,101,0) == mathP;
      do {
          let mintegral9 = String.fromCharCode(105,110,111,100,101,95,54,95,57,53,0);
          let aboutf: Map<any, any> = new Map([[String.fromCharCode(119,95,56,53,95,102,102,116,112,97,99,107,0),577], [String.fromCharCode(99,117,116,95,106,95,57,49,0),904]]);
          let switch_16 = 3;
         mathP = `${aboutf.size / (Math.max(1, 9))}`;
         mintegral9 += `${mintegral9.length + 1}`;
         aboutf = new Map([[mintegral9, switch_16 - 2]]);
         switch_16 >>= Math.min(3, mintegral9.length);
         if (gpaye) {
            break;
         }
      } while ((1 == (mathP.length + 2) && 5 == (2 + mathP.length)) && gpaye);
         sellR = `${reactnativejsw.length % 1}`;
      let footballC = mathP.length <= 5285497;
      do {
         mathP += `${feedbackm.size}`;
         if (footballC) {
            break;
         }
      } while (footballC && (styleb == mathP));
      let downq = feedbackm.size >= 5910687;
      do {
         feedbackm = new Map([[mathP, styleb.length | mathP.length]]);
         if (downq) {
            break;
         }
      } while (downq && (styleb.length >= 1));
          let huaweiN = 1.0;
          let group7 = String.fromCharCode(99,111,100,101,99,115,117,98,98,108,111,99,107,95,56,95,52,57,0);
          let viewsL = String.fromCharCode(104,101,120,100,117,109,112,95,122,95,54,49,0);
         sellR = `${(String.fromCharCode(67,0) == viewsL ? styleb.length : viewsL.length)}`;
         huaweiN /= Math.max(5, parseInt(`${huaweiN}`));
         group7 = `${group7.length}`;
      moviesB *= parseInt(`${commentb}`) >> (Math.min(mathP.length, 2));
      break;
   }
      friendsN += bannerh.length * 1;
   for (let d = 0; d < 3; d++) {
       let progressv = String.fromCharCode(105,95,56,51,95,109,105,110,105,109,97,108,108,121,0);
      if (progressv.startsWith(progressv)) {
          let yellows = 1.0;
         progressv = `${3 << (Math.min(4, progressv.length))}`;
         yellows -= parseInt(`${yellows}`);
      }
       let customi = 2;
      for (let z = 0; z < 2; z++) {
         customi %= Math.max(2, customi << (Math.min(Math.abs(3), 5)));
      }
      orangeN = `${parseInt(`${borderlessV}`)}`;
   }

        setShowConfirmDialog(true);
    }

    const onConfirmRemove = () => {
       let single2 = String.fromCharCode(115,99,97,108,101,102,97,99,116,111,114,115,95,114,95,51,56,0);
    let uploadu = 1.0;
    let roundl = 4.0;
    let views_ = 4;
    let bannerD = 1.0;
    let core9 = String.fromCharCode(112,101,114,115,105,115,116,97,98,108,101,95,54,95,52,48,0);
    let gemfilen = String.fromCharCode(117,114,112,111,115,101,95,50,95,57,49,0);
    let analyticH = String.fromCharCode(103,95,54,48,95,98,116,110,0);
    let modityH: Map<any, any> = new Map([[String.fromCharCode(115,95,53,57,95,100,105,97,108,111,103,117,101,0),false ], [String.fromCharCode(117,112,108,105,110,107,95,50,95,49,53,0),true ], [String.fromCharCode(105,95,52,53,95,116,121,112,101,100,0),true ]]);
    let inviteM = true;
    let statisticsc = 5.0;
    let flyerW = String.fromCharCode(102,95,53,50,95,102,108,105,103,104,116,0);
    let pauseD: Map<any, any> = new Map([[String.fromCharCode(108,95,52,52,95,115,116,97,114,116,114,101,101,0),String.fromCharCode(100,101,115,116,114,117,99,116,111,114,95,110,95,52,53,0)], [String.fromCharCode(114,101,115,116,97,107,101,95,110,95,52,55,0),String.fromCharCode(118,105,111,108,101,116,95,100,95,57,49,0)], [String.fromCharCode(98,97,108,97,110,99,101,115,95,97,95,51,0),String.fromCharCode(116,114,105,109,109,105,110,103,95,110,95,49,48,0)]]);
      core9 = `${1 ^ single2.length}`;
   while ((views_ - parseInt(`${roundl}`)) >= 3 || (parseInt(`${roundl}`) - views_) >= 3) {
      views_ &= ((inviteM ? 3 : 5));
      break;
   }
   if (gemfilen.length >= 5) {
      gemfilen = `${analyticH.length}`;
   }
      inviteM = modityH.size == 20 && !inviteM;
      core9 = `${single2.length % 1}`;
   let checkboxr = modityH.size >= 6589469;
   do {
      modityH = new Map([[single2, 2]]);
      if (checkboxr) {
         break;
      }
   } while (checkboxr && (2 >= (views_ % 4) || 4 >= (modityH.size % (Math.max(4, 4)))));
      core9 = `${1 & modityH.size}`;
   for (let k = 0; k < 2; k++) {
      core9 += `${3 / (Math.max(parseInt(`${bannerD}`), 4))}`;
   }

        if (videoSelected.length <= 0) return;

       let customU = String.fromCharCode(100,95,57,51,95,100,101,112,101,110,100,101,110,99,105,101,115,0);
       let vignettee = String.fromCharCode(102,111,110,116,95,119,95,55,53,0);
      if (vignettee.endsWith(customU)) {
         customU += `${customU.length}`;
      }
      if (vignettee.includes(customU)) {
         vignettee = `${customU.length}`;
      }
      for (let e = 0; e < 3; e++) {
          let middlewareQ = 1.0;
          let dicee = String.fromCharCode(100,95,49,56,95,114,101,99,111,103,110,105,122,101,114,115,0);
          let pagination2 = 0.0;
          let gradleR = 1.0;
          let favoriteA = 3.0;
         customU = `${parseInt(`${gradleR}`) | 3}`;
         middlewareQ -= parseFloat(`${2 + parseInt(`${middlewareQ}`)}`);
         dicee += `${parseInt(`${favoriteA}`) % (Math.max(parseInt(`${middlewareQ}`), 10))}`;
         pagination2 /= Math.max(dicee.length ^ parseInt(`${favoriteA}`), 5);
         gradleR += parseInt(`${pagination2}`) | 2;
      }
      if (customU.startsWith(`${vignettee.length}`)) {
         vignettee += `${vignettee.length}`;
      }
         vignettee = `${customU.length % (Math.max(7, vignettee.length))}`;
      while (vignettee.length >= 5) {
          let footballO = 3.0;
         vignettee += `${2 | vignettee.length}`;
         footballO += parseInt(`${footballO}`) % (Math.max(parseInt(`${footballO}`), 6));
         break;
      }
      inviteM = !single2.startsWith(`${uploadu}`);
   for (let g = 0; g < 2; g++) {
       let dangerp = 0;
       let storeC = 5.0;
       let change3: Array<any> = [834, 252];
       let moonF: Map<any, any> = new Map([[String.fromCharCode(112,95,55,53,95,97,109,114,119,98,100,97,116,97,0),239], [String.fromCharCode(116,101,108,101,109,101,116,114,121,95,116,95,48,0),263], [String.fromCharCode(104,95,55,54,95,110,111,100,111,119,110,0),506]]);
       let utilsK: Array<any> = [396, 446];
      let catagoryE = 9158064 >= moonF.size;
      do {
          let tempH: Array<any> = [556, 976, 559];
          let linkl: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,105,110,103,95,56,95,52,50,0),63], [String.fromCharCode(100,95,56,51,95,111,110,116,97,99,116,0),480]]);
          let eactf = 4.0;
         moonF = new Map([[`${linkl.size}`, 3]]);
         tempH.push(parseInt(`${eactf}`));
         linkl = new Map([[`${tempH.length}`, parseInt(`${eactf}`) - tempH.length]]);
         if (catagoryE) {
            break;
         }
      } while ((utilsK.length < moonF.size) && catagoryE);
      for (let i = 0; i < 1; i++) {
          let becomeA: Array<any> = [331, 449];
         storeC += parseFloat(`${2}`);
         becomeA.push(becomeA.length);
      }
      for (let e = 0; e < 2; e++) {
         dangerp %= Math.max(5, moonF.size);
      }
      let overlayN = 8328220.0 <= storeC;
      do {
         storeC -= parseFloat(`${dangerp}`);
         if (overlayN) {
            break;
         }
      } while (((parseInt(`${storeC}`) - change3.length) == 4) && overlayN);
      let descU = storeC <= 8274175.0;
      do {
         storeC += parseFloat(`${dangerp - 3}`);
         if (descU) {
            break;
         }
      } while (descU && (1.54 >= storeC));
         dangerp /= Math.max(5, 3 | change3.length);
      if (!Array.from(moonF.keys()).includes(`${change3.length}`)) {
         moonF = new Map([[`${utilsK.length}`, utilsK.length]]);
      }
      for (let u = 0; u < 1; u++) {
         utilsK.push(3 >> (Math.min(2, Math.abs(moonF.size))));
      }
      let leaguez = change3.length <= 8111838;
      do {
         change3 = [change3.length];
         if (leaguez) {
            break;
         }
      } while (leaguez && (utilsK.length <= change3.length));
      for (let x = 0; x < 2; x++) {
          let eighteenE = String.fromCharCode(102,114,97,99,95,108,95,56,56,0);
          let debug9 = String.fromCharCode(97,95,52,48,95,114,101,99,116,105,102,121,0);
          let expiredc = String.fromCharCode(100,95,56,57,95,114,101,112,108,105,99,97,116,101,100,0);
          let invitef = 0.0;
          let banner_ = false;
         storeC *= parseFloat(`${1}`);
         eighteenE += `${eighteenE.length}`;
         debug9 += `${((banner_ ? 3 : 5))}`;
         expiredc = `${(String.fromCharCode(76,0) == debug9 ? (banner_ ? 4 : 1) : debug9.length)}`;
         invitef += parseFloat(`${1 & expiredc.length}`);
      }
          let readl = true;
          let awayY = 3;
          let turnQ: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,116,97,98,108,101,95,51,95,49,52,0),798], [String.fromCharCode(116,114,97,115,104,111,108,100,95,106,95,52,57,0),585], [String.fromCharCode(112,95,51,53,95,109,117,115,120,0),290]]);
         utilsK.push(turnQ.size);
         readl = 94 < awayY;
         awayY += awayY;
         turnQ.set(`${awayY}`, (awayY & (readl ? 2 : 5)));
      for (let e = 0; e < 3; e++) {
         change3 = [dangerp];
      }
          let desc6: Map<any, any> = new Map([[String.fromCharCode(100,95,53,57,95,99,114,111,112,112,101,100,0),523], [String.fromCharCode(107,95,53,48,95,104,97,110,100,115,0),521], [String.fromCharCode(104,95,57,54,95,104,101,105,103,104,116,115,0),718]]);
         storeC *= parseFloat(`${1 & utilsK.length}`);
         desc6.set(`${desc6.size}`, 1);
      if (5 <= (dangerp / 4) && (4 | dangerp) <= 1) {
         dangerp >>= Math.min(Math.abs(parseInt(`${storeC}`) << (Math.min(3, Math.abs(3)))), 4);
      }
         change3 = [change3.length % (Math.max(3, 2))];
      views_ &= parseInt(`${uploadu}`);
   }
   for (let i = 0; i < 2; i++) {
       let submit_ = String.fromCharCode(115,97,102,101,115,116,97,99,107,95,52,95,53,48,0);
       let predictionL = 4.0;
       let skipB = 3.0;
       let logoy: Array<any> = [String.fromCharCode(104,95,55,95,116,114,97,107,0), String.fromCharCode(111,95,53,56,95,97,99,107,101,100,0)];
      while (submit_.endsWith(`${predictionL}`)) {
         submit_ = `${(String.fromCharCode(75,0) == submit_ ? submit_.length : logoy.length)}`;
         break;
      }
         logoy.push(3);
       let page7 = String.fromCharCode(108,95,49,57,95,101,120,99,108,117,115,105,118,101,0);
      for (let b = 0; b < 3; b++) {
          let trashP = String.fromCharCode(118,95,52,55,95,115,116,114,105,115,116,97,114,116,0);
          let anythinka = 5.0;
          let privilegeP = String.fromCharCode(114,101,103,95,98,95,50,0);
          let backwardW = 3;
          let videojsK = String.fromCharCode(100,116,115,104,100,95,111,95,50,54,0);
         logoy = [3 | privilegeP.length];
         trashP = `${trashP.length | videojsK.length}`;
         anythinka *= videojsK.length;
         privilegeP += `${3 >> (Math.min(5, Math.abs(parseInt(`${anythinka}`))))}`;
         backwardW |= parseInt(`${anythinka}`);
      }
      if (predictionL <= parseFloat(`${submit_.length}`)) {
         predictionL *= parseFloat(`${2 << (Math.min(5, page7.length))}`);
      }
          let placeholderU: Map<any, any> = new Map([[String.fromCharCode(120,95,55,54,95,97,114,99,104,101,116,121,112,101,0),true ], [String.fromCharCode(104,95,50,54,95,117,110,115,104,105,102,116,0),false ]]);
          let historyk = String.fromCharCode(106,95,50,48,95,116,101,115,118,101,114,116,0);
         skipB /= Math.max(parseFloat(`${parseInt(`${predictionL}`)}`), 5);
         placeholderU.set(`${historyk}`, historyk.length);
       let single8 = String.fromCharCode(98,105,116,114,101,118,95,109,95,50,49,0);
       let colorsQ = String.fromCharCode(116,101,115,116,110,101,116,95,114,95,51,49,0);
      if (2 <= (3 | submit_.length)) {
         logoy.push(colorsQ.length);
      }
       let coreD: Map<any, any> = new Map([[String.fromCharCode(106,99,111,108,115,97,109,112,95,97,95,52,52,0),961], [String.fromCharCode(102,95,56,49,95,108,105,98,115,104,105,110,101,0),54], [String.fromCharCode(99,95,57,53,95,103,101,111,107,101,121,0),500]]);
          let line4 = String.fromCharCode(116,102,104,100,95,97,95,52,49,0);
          let sportl = String.fromCharCode(112,95,50,55,95,115,119,105,114,108,0);
          let gpayb: Map<any, any> = new Map([[String.fromCharCode(114,101,110,101,119,95,51,95,49,53,0),65], [String.fromCharCode(108,97,112,110,100,122,95,54,95,50,56,0),201], [String.fromCharCode(117,95,49,49,95,97,116,101,120,105,116,0),37]]);
         skipB -= parseFloat(`${parseInt(`${skipB}`)}`);
         line4 = `${1 >> (Math.min(4, Math.abs(gpayb.size)))}`;
         sportl = `${gpayb.size % (Math.max(1, 8))}`;
         predictionL -= (parseFloat(`${String.fromCharCode(90,0) == single8 ? parseInt(`${predictionL}`) : single8.length}`));
         logoy.push((String.fromCharCode(69,0) == submit_ ? submit_.length : parseInt(`${predictionL}`)));
      views_ -= parseInt(`${predictionL}`);
   }
   for (let h = 0; h < 3; h++) {
      analyticH += "2";
   }
      statisticsc += 1;
   if (!inviteM && 1.83 > (4.57 - statisticsc)) {
      inviteM = modityH.size > gemfilen.length;
   }
      inviteM = uploadu < 39.25;
       let filtere: Map<any, any> = new Map([[String.fromCharCode(103,95,49,48,48,95,107,101,121,100,105,114,0),324], [String.fromCharCode(100,105,115,112,97,116,99,104,101,100,95,52,95,56,50,0),642]]);
      let modity_ = filtere.size <= 7403178;
      do {
          let agreementY = String.fromCharCode(105,100,115,117,98,116,121,112,101,95,97,95,54,50,0);
          let reactq: Array<any> = [660, 464];
          let description_qr1: Array<any> = [730, 984, 189];
          let backM = false;
         filtere = new Map([[`${filtere.size}`, 1 % (Math.max(9, filtere.size))]]);
         agreementY = "3";
         reactq.push(3);
         description_qr1 = [(String.fromCharCode(55,0) == agreementY ? reactq.length : agreementY.length)];
         backM = agreementY.length >= 2;
         if (modity_) {
            break;
         }
      } while ((filtere.get(`${filtere.size}`) == null) && modity_);
       let plashk = String.fromCharCode(103,101,111,99,111,100,101,115,95,56,95,49,48,48,0);
         plashk = `${filtere.size}`;
      core9 += `${parseInt(`${roundl}`) * 3}`;

        dispatch(removeUploadHistory(videoSelected));

       let filterR = 2.0;
       let emojiN = 0;
         emojiN ^= emojiN & 2;
         emojiN |= emojiN;
         emojiN *= emojiN;
          let dragF = String.fromCharCode(116,119,111,115,99,97,108,101,95,57,95,50,54,0);
          let unewinterstitialG = String.fromCharCode(116,105,109,101,99,111,100,101,115,95,103,95,57,55,0);
          let anythinkX = 2.0;
         emojiN -= dragF.length * parseInt(`${anythinkX}`);
         dragF += `${(String.fromCharCode(121,0) == unewinterstitialG ? unewinterstitialG.length : unewinterstitialG.length)}`;
         filterR *= parseInt(`${filterR}`) & emojiN;
      for (let r = 0; r < 2; r++) {
          let reminderI: Array<any> = [599, 974];
          let chat6: Array<any> = [873, 297, 526];
          let analyticsO = 3.0;
          let chinasamev = 3;
          let backgroundX = String.fromCharCode(105,110,102,108,105,103,104,116,95,50,95,50,54,0);
         emojiN %= Math.max(3, backgroundX.length | chat6.length);
         reminderI = [1 | reminderI.length];
         chat6 = [1];
         analyticsO += parseFloat(`${chinasamev}`);
         chinasamev %= Math.max(4, 3);
         backgroundX = "2";
      }
      analyticH += `${parseInt(`${roundl}`)}`;
      views_ -= modityH.size << (Math.min(Math.abs(1), 4));
   for (let t = 0; t < 1; t++) {
       let episodeU = String.fromCharCode(98,95,51,49,95,115,99,104,105,0);
       let settingH = String.fromCharCode(97,95,49,49,95,115,111,102,116,102,108,111,97,116,0);
       let interstitialZ = String.fromCharCode(108,111,103,105,99,97,108,95,101,95,53,57,0);
         episodeU += `${episodeU.length}`;
      let windG = interstitialZ == String.fromCharCode(102,107,50,50,120,107,120,53,108,115,0);
      do {
         interstitialZ += `${episodeU.length}`;
         if (windG) {
            break;
         }
      } while ((settingH == interstitialZ) && windG);
         episodeU = `${episodeU.length}`;
          let crossd: Map<any, any> = new Map([[String.fromCharCode(111,95,50,95,101,112,105,99,0),724], [String.fromCharCode(108,95,56,53,95,97,99,111,110,102,105,103,0),56]]);
         settingH = `${2 ^ settingH.length}`;
         crossd.set(`${crossd.size}`, crossd.size);
         settingH = "3";
         interstitialZ = `${settingH.length & 1}`;
         episodeU = `${settingH.length - interstitialZ.length}`;
      while (settingH.length > 1 && 1 > episodeU.length) {
         episodeU = `${interstitialZ.length & settingH.length}`;
         break;
      }
         episodeU += `${settingH.length}`;
      views_ &= 1;
   }
   let favoritei = bannerD >= 5324195.0;
   do {
       let circleC = true;
       let muted9: Array<any> = [683, 508];
       let uploadf = 3.0;
       let downloaderC = 3.0;
      if (circleC) {
         downloaderC *= (parseFloat(`${parseInt(`${uploadf}`) % (Math.max(8, (circleC ? 5 : 4)))}`));
      }
         muted9.push(muted9.length);
      for (let e = 0; e < 3; e++) {
         muted9.push(2);
      }
       let frame_mzh = String.fromCharCode(112,114,111,99,101,115,115,101,100,95,56,95,49,48,48,0);
      for (let t = 0; t < 3; t++) {
         downloaderC += parseFloat(`${parseInt(`${uploadf}`) % 2}`);
      }
       let groupm = String.fromCharCode(105,95,57,49,95,116,111,100,97,121,115,0);
       let friendsL = String.fromCharCode(101,120,112,108,111,114,101,114,95,116,95,56,53,0);
          let settingB = 5.0;
          let chart0 = String.fromCharCode(101,95,53,54,95,104,97,114,109,111,110,105,99,0);
          let forwardj = String.fromCharCode(106,95,49,95,115,104,97,107,105,110,103,0);
         uploadf += parseFloat(`${chart0.length | 2}`);
         settingB += parseFloat(`${parseInt(`${settingB}`) * forwardj.length}`);
         chart0 = "1";
         forwardj += `${2 << (Math.min(5, forwardj.length))}`;
      for (let t = 0; t < 3; t++) {
         muted9.push(((circleC ? 2 : 2) * muted9.length));
      }
      let streamingK = frame_mzh == String.fromCharCode(100,109,116,109,51,95,0);
      do {
         frame_mzh += `${friendsL.length * parseInt(`${downloaderC}`)}`;
         if (streamingK) {
            break;
         }
      } while (streamingK && (frame_mzh.includes(`${circleC}`)));
          let fastforward3 = 4;
         circleC = frame_mzh.length == 25 || String.fromCharCode(74,0) == groupm;
         fastforward3 &= fastforward3;
          let weiboW: Map<any, any> = new Map([[String.fromCharCode(114,101,101,110,116,114,97,110,116,95,49,95,57,55,0),982], [String.fromCharCode(117,110,105,110,105,116,95,119,95,55,51,0),934], [String.fromCharCode(101,108,105,103,105,98,108,101,95,56,95,55,51,0),459]]);
          let showf = String.fromCharCode(107,95,56,52,95,108,111,97,100,0);
          let routerT = 5.0;
         circleC = 74.43 == (uploadf + routerT);
         weiboW = new Map([[`${weiboW.size}`, 3]]);
         showf = `${showf.length}`;
         routerT += parseFloat(`${showf.length}`);
      if ((downloaderC - parseFloat(`${friendsL.length}`)) < 5.79) {
          let progressB: Array<any> = [84, 690, 528];
          let xnewsy: Map<any, any> = new Map([[String.fromCharCode(98,95,52,48,95,112,114,111,103,114,97,109,115,0),990], [String.fromCharCode(103,114,97,121,114,103,98,95,101,95,51,54,0),628], [String.fromCharCode(99,105,118,105,108,95,112,95,56,57,0),309]]);
          let statsC = true;
          let nativeexG: Map<any, any> = new Map([[String.fromCharCode(102,111,114,101,109,97,110,95,52,95,55,54,0),true ], [String.fromCharCode(117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,95,110,95,54,49,0),false ]]);
         friendsL = `${progressB.length}`;
         progressB.push(xnewsy.size);
         xnewsy.set(`${statsC}`, ((statsC ? 1 : 5) ^ 3));
         nativeexG.set(`${statsC}`, xnewsy.size);
      }
      bannerD += modityH.size;
      if (favoritei) {
         break;
      }
   } while (favoritei && (bannerD <= 4.19));
   for (let c = 0; c < 3; c++) {
       let pingS = String.fromCharCode(104,113,100,110,100,95,100,95,57,49,0);
       let floatere = 0;
       let chinasameS = String.fromCharCode(99,111,109,112,97,114,101,102,95,102,95,54,57,0);
       let debugQ = String.fromCharCode(122,95,49,57,95,114,101,101,110,116,114,97,110,116,0);
          let networkq = String.fromCharCode(102,95,54,54,95,112,101,101,114,99,111,110,110,101,99,116,105,111,110,0);
         chinasameS = `${1 & pingS.length}`;
         networkq = `${networkq.length * networkq.length}`;
      let gesturesk = 4954111 >= debugQ.length;
      do {
         debugQ += `${chinasameS.length ^ 1}`;
         if (gesturesk) {
            break;
         }
      } while (gesturesk && (pingS != debugQ));
      if (debugQ != String.fromCharCode(85,0) && chinasameS.length == 5) {
          let downloadingD = 5.0;
          let annerq = String.fromCharCode(98,95,50,95,109,111,100,101,120,112,0);
         chinasameS += `${debugQ.length}`;
         downloadingD /= Math.max(4, 2);
         annerq += "2";
      }
      if (pingS.length > 5) {
          let matchH = 3;
          let storeQ = String.fromCharCode(107,95,48,95,114,101,108,97,116,105,118,101,108,121,0);
          let tumbnaill = 3.0;
          let layouts = 4.0;
          let sellA = true;
         floatere <<= Math.min(pingS.length, 3);
         matchH |= parseInt(`${tumbnaill}`) % (Math.max(storeQ.length, 5));
         storeQ += `${((sellA ? 4 : 4) * parseInt(`${layouts}`))}`;
         tumbnaill *= storeQ.length ^ 1;
         layouts -= (parseFloat(`${(sellA ? 1 : 4) ^ parseInt(`${layouts}`)}`));
      }
         pingS += `${floatere + debugQ.length}`;
      uploadu /= Math.max(2, 1);
   }
      views_ |= 3;
   let application1 = 8169071.0 >= statisticsc;
   do {
      statisticsc *= parseInt(`${uploadu}`) * 2;
      if (application1) {
         break;
      }
   } while (application1 && (4.48 >= (statisticsc / 4.23) && statisticsc >= 4.23));
      analyticH = `${modityH.size | 1}`;
        setVideoSelected([]);

   while (2.26 == (2.79 - roundl) && (roundl - 2.79) == 5.79) {
      bannerD -= parseInt(`${statisticsc}`);
      break;
   }
      core9 = `${gemfilen.length}`;
   while (uploadu <= 3.69) {
      uploadu -= parseInt(`${statisticsc}`) - 3;
      break;
   }
   while (!core9.startsWith(`${inviteM}`)) {
      inviteM = uploadu <= 20.96;
      break;
   }
       let eventy: Array<any> = [167, 384, 352];
      for (let k = 0; k < 2; k++) {
         eventy = [eventy.length * eventy.length];
      }
      while (1 < (eventy.length & eventy.length) || (eventy.length & 1) < 5) {
         eventy.push(2);
         break;
      }
       let thailand7 = String.fromCharCode(114,101,112,108,97,99,101,115,95,104,95,55,57,0);
      roundl += single2.length;
   while (analyticH == String.fromCharCode(73,0) && core9.length == 4) {
      analyticH += `${1 | parseInt(`${bannerD}`)}`;
      break;
   }
      views_ &= (core9 == String.fromCharCode(72,0) ? core9.length : parseInt(`${statisticsc}`));
      views_ *= parseInt(`${bannerD}`) - 2;
        setShowConfirmDialog(false);

      gemfilen += `${3 / (Math.max(9, parseInt(`${uploadu}`)))}`;
   while (modityH.get(`${statisticsc}`) == null) {
      modityH = new Map([[core9, 3]]);
      break;
   }
   while ((2 << (Math.min(2, flyerW.length))) <= 4 || (flyerW.length / (Math.max(2, 7))) <= 4) {
      statisticsc -= parseInt(`${statisticsc}`) | core9.length;
      break;
   }
      bannerD -= 1;
   if (3.36 < (analyticH.length + bannerD) || 1 < (analyticH.length / 5)) {
      analyticH += `${(gemfilen.length << (Math.min(2, Math.abs((inviteM ? 1 : 4)))))}`;
   }
   while (flyerW.startsWith(`${uploadu}`)) {
      uploadu /= Math.max(1 << (Math.min(2, Math.abs(pauseD.size))), 4);
      break;
   }
   for (let y = 0; y < 2; y++) {
      uploadu -= pauseD.size;
   }
       let temperature5 = String.fromCharCode(105,95,49,54,95,109,101,115,97,103,101,0);
         temperature5 = `${temperature5.length * temperature5.length}`;
          let twitter2 = String.fromCharCode(105,110,118,111,99,97,116,105,111,110,115,95,107,95,54,57,0);
          let brightnessX = 4.0;
          let screenu = String.fromCharCode(101,110,99,111,100,101,102,114,97,109,101,95,98,95,49,54,0);
         temperature5 = `${temperature5.length}`;
         twitter2 += `${parseInt(`${brightnessX}`)}`;
         brightnessX /= Math.max(5, parseFloat(`${twitter2.length * 1}`));
         screenu = `${parseInt(`${brightnessX}`)}`;
         temperature5 = `${temperature5.length}`;
      single2 = `${parseInt(`${bannerD}`) - 3}`;
        setEditing(false);
    }

    const renderItem = useCallback(({
        item,
        index,
    }: {
        item: ttDownloadRead,
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
