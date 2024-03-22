import ScreenContainer from "../../components/container/ypy_fast";
import { Alert, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddIcon from '@static/images/thailandApple.svg';
import AlbumIcon from '@static/images/eighteenMatch.svg';
import { useTheme } from "@react-navigation/native";
import { IRouterComponent } from "../../../routes/dqb_wind_league";
import { useCallback, useEffect, useMemo, useState } from "react";
import Permissions, { PERMISSIONS, RESULTS, request, check } from "react-native-permissions";
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import { UploadResultOverlay } from "../../components/modal/hdf_side";
import { UploadProgressOverlay } from "../../components/modal/odj_sports";
import { VIDEO_UPLOAD_DEFAULT_SIZE, VIDEO_UPLOAD_SPEED } from "@utility/n_subs_interstitial";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { showLoginAction } from "@redux/actions/a_switch";
import { KWConstants } from '@models/kl_sheet';
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export const UploadVideo = ({ navigation }: BottomTabScreenProps<any>) => {
    const defaultFileSize = VIDEO_UPLOAD_DEFAULT_SIZE;
    const uploadSpeed = VIDEO_UPLOAD_SPEED;

    const { textVariants, colors, dark } = useTheme();
    const styles = useMemo(() => createStyles({ colors }), [colors]);

    const [isGrantPhotePermission, setGrantPhotePermission] = useState(false);
    const [videoSelected, setVideoSelected] = useState<Asset>();
    const [uploadProgress, setUploadProgress] = useState<number | undefined>();
    const [progressTimer, setProgressTimer] = useState<NodeJS.Timeout | undefined>();
    const [showSuccess, setShowSuccess] = useState(false);
    const dispatch = useAppDispatch();
    const userState = useSelector<HDTGesturesList>('userReducer');

    useEffect(() => {
        if (Platform.OS === 'ios') {
            check(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {
                if (result == RESULTS.GRANTED) {
                    setGrantPhotePermission(true);
                } else {
                    
                    onRequestPermissiobPress();
                }
            });
        }
    }, []);

    const onCheckHistoryPress = () => {
       let selectedr = String.fromCharCode(102,95,57,50,95,114,116,99,112,0);
    let zhuboY = String.fromCharCode(112,111,112,111,118,101,114,95,108,95,49,56,0);
    let spec6 = String.fromCharCode(115,117,98,116,114,101,101,95,51,95,51,52,0);
    let corner0 = String.fromCharCode(105,95,49,48,48,95,112,114,111,116,111,99,111,108,0);
    let clearN = 1.0;
    let sortX = String.fromCharCode(102,95,49,57,95,116,101,109,112,102,105,108,101,0);
    let themeu = 1;
    let castQ = false;
      sortX = `${zhuboY.length * spec6.length}`;
      selectedr = `${corner0.length}`;
   let analyticsG = sortX.length >= 5875896;
   do {
      sortX += `${zhuboY.length}`;
      if (analyticsG) {
         break;
      }
   } while ((4 < (themeu << (Math.min(sortX.length, 2)))) && analyticsG);
      corner0 = "1";
       let checkboxO = String.fromCharCode(107,95,55,53,95,99,108,105,112,98,111,97,114,100,0);
       let infoL: Map<any, any> = new Map([[String.fromCharCode(113,95,56,49,95,119,105,116,104,0),true ], [String.fromCharCode(111,95,55,53,95,112,97,103,101,110,111,0),false ]]);
      if (1 == (2 & checkboxO.length) || 2 == (infoL.size & 2)) {
         checkboxO = `${infoL.size}`;
      }
         infoL.set(checkboxO, infoL.size);
          let robotoX = 4.0;
         checkboxO += "2";
         robotoX += 3 >> (Math.min(Math.abs(parseInt(`${robotoX}`)), 4));
          let hooksf = 2.0;
         checkboxO += `${checkboxO.length}`;
         hooksf /= Math.max(parseFloat(`${1 / (Math.max(1, parseInt(`${hooksf}`)))}`), 5);
         checkboxO = `${checkboxO.length & infoL.size}`;
          let rulesS = String.fromCharCode(121,95,53,52,95,118,120,119,111,114,107,115,0);
          let sheetl = true;
          let time_z4 = 3;
         infoL = new Map([[rulesS, 3]]);
         rulesS = "3";
         sheetl = time_z4 <= 34;
         time_z4 >>= Math.min(parseInt(`${Math.abs(((sheetl ? 3 : 4) / (Math.max(time_z4, 2))))}`), 1);
      sortX += `${(checkboxO == String.fromCharCode(106,0) ? selectedr.length : checkboxO.length)}`;
   for (let d = 0; d < 3; d++) {
      spec6 = `${parseInt(`${clearN}`)}`;
   }
      zhuboY = "3";
      spec6 += `${selectedr.length * themeu}`;
   while (2 > (3 | zhuboY.length)) {
      zhuboY = `${parseInt(`${clearN}`) / (Math.max(1, 4))}`;
      break;
   }
   while (selectedr.length < zhuboY.length) {
      zhuboY = `${(corner0 == String.fromCharCode(104,0) ? corner0.length : themeu)}`;
      break;
   }
      clearN -= spec6.length + sortX.length;
      selectedr = `${spec6.length}`;
   if (!selectedr.includes(`${corner0.length}`)) {
      selectedr += "2";
   }
   for (let i = 0; i < 1; i++) {
      castQ = themeu < 95;
   }
       let macauw: Map<any, any> = new Map([[String.fromCharCode(97,99,116,117,97,108,105,122,97,116,105,111,110,95,119,95,52,50,0),259], [String.fromCharCode(109,101,116,114,105,99,115,95,99,95,54,49,0),767]]);
       let spinnerW = 4.0;
      if (macauw.get(`${spinnerW}`) != null) {
         spinnerW += macauw.size ^ 1;
      }
      while ((macauw.size - parseInt(`${spinnerW}`)) <= 1) {
         macauw.set(`${spinnerW}`, parseInt(`${spinnerW}`));
         break;
      }
      while ((spinnerW * 4.4) > 5.35 || (4 >> (Math.min(1, Math.abs(macauw.size)))) > 5) {
          let whatsapp3: Map<any, any> = new Map([[String.fromCharCode(102,95,49,48,95,99,115,115,0),true ], [String.fromCharCode(116,97,103,95,119,95,51,54,0),false ], [String.fromCharCode(120,95,51,53,95,114,101,97,100,0),false ]]);
          let selectQ: Map<any, any> = new Map([[String.fromCharCode(97,116,116,97,99,107,95,122,95,53,56,0),962], [String.fromCharCode(98,95,51,54,95,104,97,114,100,101,110,101,100,0),563], [String.fromCharCode(121,95,54,56,95,115,101,116,0),580]]);
          let clocka = String.fromCharCode(109,112,99,100,97,116,97,95,97,95,54,51,0);
          let targetX = 0;
         spinnerW -= 1;
         whatsapp3.set(clocka, clocka.length - 3);
         selectQ = new Map([[`${selectQ.size}`, targetX]]);
         targetX |= selectQ.size + whatsapp3.size;
         break;
      }
          let tickd = 1.0;
          let editp = String.fromCharCode(115,95,54,50,0);
          let shoota = false;
         macauw.set(`${tickd}`, parseInt(`${tickd}`));
         editp += `${(editp == String.fromCharCode(117,0) ? editp.length : (shoota ? 1 : 2))}`;
         shoota = editp.length <= 23 || shoota;
          let anytimed = false;
          let time_3F = String.fromCharCode(104,95,50,49,95,116,101,108,101,116,101,120,116,0);
          let middle8: Map<any, any> = new Map([[String.fromCharCode(100,105,115,97,112,112,101,97,114,105,110,103,95,120,95,52,49,0),523], [String.fromCharCode(114,101,110,100,101,114,95,121,95,52,49,0),953], [String.fromCharCode(115,116,114,116,111,107,95,48,95,57,57,0),367]]);
         spinnerW -= ((anytimed ? 2 : 1) * parseInt(`${spinnerW}`));
         anytimed = middle8.size <= 47 && String.fromCharCode(101,0) == time_3F;
         time_3F += `${(String.fromCharCode(105,0) == time_3F ? middle8.size : time_3F.length)}`;
         spinnerW /= Math.max(macauw.size, 1);
      selectedr = `${parseInt(`${spinnerW}`)}`;
   let dataE = castQ ? !castQ : castQ;
   do {
      castQ = 31 > themeu;
      if (dataE) {
         break;
      }
   } while (dataE && (3 > sortX.length));
       let bootsplashi: Map<any, any> = new Map([[String.fromCharCode(115,95,51,49,95,112,97,100,100,101,100,0),String.fromCharCode(115,119,101,101,112,95,119,95,52,52,0)], [String.fromCharCode(101,95,57,95,111,116,105,102,105,99,97,116,105,111,110,0),String.fromCharCode(118,101,99,116,95,108,95,55,48,0)]]);
      for (let d = 0; d < 3; d++) {
         bootsplashi.set(`${bootsplashi.size}`, 3);
      }
      let calendar5 = bootsplashi.size <= 7617691;
      do {
         bootsplashi.set(`${bootsplashi.size}`, bootsplashi.size);
         if (calendar5) {
            break;
         }
      } while ((bootsplashi.size <= 3) && calendar5);
      if (!Array.from(bootsplashi.values()).includes(bootsplashi.size)) {
         bootsplashi.set(`${bootsplashi.size}`, bootsplashi.size);
      }
      sortX += `${selectedr.length - 2}`;

        IRouterComponent.toName('uploadHistory');
    }

    const onUploadPress = async () => {
       let default_ca0 = 1.0;
    let kickL = String.fromCharCode(99,116,120,105,100,120,105,110,99,95,111,95,50,50,0);
    let largeH: Array<any> = [516, 858, 139];
    let middle8 = String.fromCharCode(115,98,108,111,103,95,107,95,51,55,0);
    let emptyG = String.fromCharCode(121,95,57,54,0);
    let circleP: Map<any, any> = new Map([[String.fromCharCode(99,95,57,57,95,117,110,109,97,110,97,103,101,100,0),602], [String.fromCharCode(113,95,55,49,95,112,111,115,116,105,110,103,0),270]]);
    let entry7: Array<any> = [String.fromCharCode(99,111,109,112,97,114,97,116,111,114,95,107,95,56,51,0), String.fromCharCode(98,105,116,101,120,97,99,116,95,49,95,55,53,0), String.fromCharCode(104,95,50,95,111,110,101,111,102,0)];
    let shrinkp = 3;
    let referrery: Array<any> = [600, 91, 474];
    let assist7: Array<any> = [String.fromCharCode(111,95,50,54,95,99,97,114,114,121,111,117,116,0), String.fromCharCode(108,111,99,108,95,117,95,50,57,0)];
    let otherc = String.fromCharCode(100,97,115,104,98,111,97,114,100,95,103,95,51,53,0);
    let report4 = 1.0;
    let renewk: Array<any> = [String.fromCharCode(107,95,51,49,95,109,108,115,100,0), String.fromCharCode(101,95,51,50,95,114,101,99,101,110,116,108,121,0), String.fromCharCode(104,95,49,57,95,98,115,101,114,118,101,114,0)];
    let zhengpian2 = String.fromCharCode(103,95,50,57,95,112,101,114,0);
    let pressureB = 3;
    let sina2 = 1;
   let philippinesl = kickL.length >= 5458396;
   do {
      kickL += `${entry7.length}`;
      if (philippinesl) {
         break;
      }
   } while (((largeH.length * 3) > 3 || (3 * kickL.length) > 4) && philippinesl);
   while ((largeH.length / 2) >= 2 || (2 / (Math.max(10, largeH.length))) >= 5) {
      otherc += "2";
      break;
   }

        if (KWConstants.isGuest(userState.user)) {

   for (let z = 0; z < 1; z++) {
       let favoritee = 3;
       let mathW: Map<any, any> = new Map([[String.fromCharCode(103,95,56,49,95,112,111,115,108,105,115,116,115,0),42], [String.fromCharCode(115,95,57,48,95,97,100,109,105,110,115,0),981]]);
       let untickE = String.fromCharCode(118,101,108,97,112,115,101,100,116,105,109,101,114,95,110,95,49,50,0);
       let floatingd = String.fromCharCode(122,95,51,54,95,116,104,97,116,0);
      if (4 == floatingd.length && untickE != String.fromCharCode(49,0)) {
          let nalyticss = String.fromCharCode(110,95,55,57,95,103,111,100,101,112,115,0);
          let fastforwardZ = 2.0;
          let pause2 = true;
          let statsj: Map<any, any> = new Map([[String.fromCharCode(97,95,54,56,95,117,108,116,114,97,119,105,100,101,0),String.fromCharCode(114,95,50,48,95,103,122,105,112,112,101,100,0)], [String.fromCharCode(98,108,97,107,101,95,53,95,57,56,0),String.fromCharCode(101,110,97,98,108,101,100,95,112,95,56,53,0)]]);
         floatingd += `${nalyticss.length}`;
         nalyticss = `${(2 | (pause2 ? 3 : 5))}`;
         fastforwardZ /= Math.max(2, statsj.size + 3);
         pause2 = statsj.size > 79;
      }
          let updatesH = true;
          let step9 = 1.0;
          let playQ = true;
         mathW = new Map([[`${mathW.size}`, parseInt(`${step9}`)]]);
         updatesH = !updatesH && !playQ;
         step9 /= Math.max(2, parseFloat(`${1}`));
      if ((2 * untickE.length) >= 2 || (favoritee * untickE.length) >= 2) {
         untickE += `${untickE.length + 1}`;
      }
         untickE = `${untickE.length}`;
         untickE += `${untickE.length}`;
      if ((1 << (Math.min(1, Math.abs(mathW.size)))) == 4) {
         floatingd = `${floatingd.length}`;
      }
      for (let h = 0; h < 1; h++) {
          let firebaseY = String.fromCharCode(99,100,101,114,114,111,114,95,49,95,56,56,0);
          let goal3 = String.fromCharCode(100,101,102,97,117,108,116,95,101,95,50,0);
          let streamingi = 2.0;
          let pageR = String.fromCharCode(107,95,51,52,95,110,117,109,98,105,116,115,0);
          let footballp = String.fromCharCode(119,95,52,53,95,111,98,115,101,114,118,101,114,115,0);
         mathW = new Map([[`${favoritee}`, favoritee - 3]]);
         firebaseY += `${3 & pageR.length}`;
         goal3 = `${firebaseY.length & goal3.length}`;
         streamingi -= parseFloat(`${footballp.length}`);
         pageR += `${pageR.length}`;
         footballp += `${firebaseY.length | goal3.length}`;
      }
         mathW = new Map([[`${favoritee}`, favoritee]]);
      if ((floatingd.length >> (Math.min(3, Math.abs(favoritee)))) < 1) {
         floatingd += `${mathW.size}`;
      }
          let episodel = String.fromCharCode(99,97,118,115,105,100,99,116,95,104,95,57,54,0);
          let canvasx = 3.0;
          let tumbnailx: Map<any, any> = new Map([[String.fromCharCode(99,95,49,50,95,112,105,120,101,108,98,117,102,102,101,114,0),String.fromCharCode(117,95,54,57,95,115,116,114,101,110,103,116,104,0)], [String.fromCharCode(117,116,105,109,101,95,115,95,49,57,0),String.fromCharCode(106,95,52,51,95,97,100,106,117,115,116,109,101,110,116,0)]]);
         mathW.set(untickE, 3 / (Math.max(4, untickE.length)));
         episodel = `${(episodel == String.fromCharCode(53,0) ? episodel.length : parseInt(`${canvasx}`))}`;
         canvasx -= parseFloat(`${episodel.length}`);
         tumbnailx = new Map([[`${tumbnailx.size}`, 2 & tumbnailx.size]]);
         untickE = `${2 + mathW.size}`;
      for (let e = 0; e < 1; e++) {
         mathW.set(`${floatingd}`, floatingd.length);
      }
      renewk = [mathW.size];
   }
   while ((2 + assist7.length) >= 3) {
      otherc += `${2 % (Math.max(5, circleP.size))}`;
      break;
   }
            dispatch(showLoginAction());

      otherc += `${2 >> (Math.min(5, Math.abs(circleP.size)))}`;
      otherc += `${assist7.length / 3}`;
            return;
        }

        try {

   while (1 < (2 * referrery.length) && 1 < (referrery.length * 2)) {
       let hookR: Map<any, any> = new Map([[String.fromCharCode(103,101,116,111,112,116,95,101,95,51,48,0),580], [String.fromCharCode(100,108,105,100,120,95,119,95,50,50,0),461], [String.fromCharCode(114,95,50,52,95,98,108,105,110,107,0),604]]);
      let router_ = 6882685 >= hookR.size;
      do {
         hookR.set(`${hookR.size}`, hookR.size * hookR.size);
         if (router_) {
            break;
         }
      } while ((Array.from(hookR.keys()).includes(`${hookR.size}`)) && router_);
      if (hookR.get(`${hookR.size}`) != null) {
         hookR.set(`${hookR.size}`, 3 - hookR.size);
      }
         hookR.set(`${hookR.size}`, hookR.size);
      referrery.push(assist7.length);
      break;
   }
   while ((referrery.length ^ 4) <= 1 || 4 <= (otherc.length ^ referrery.length)) {
      referrery = [assist7.length - referrery.length];
      break;
   }
            setVideoSelected(undefined);

       let const_xj = String.fromCharCode(98,95,52,53,95,122,101,114,111,105,110,103,0);
      let episodesz = 8097758 <= const_xj.length;
      do {
         const_xj = "1";
         if (episodesz) {
            break;
         }
      } while (episodesz && (const_xj.length == const_xj.length));
       let h_countv: Array<any> = [828, 391];
      if (2 <= h_countv.length) {
          let humidityj = 4.0;
          let detailn = String.fromCharCode(103,95,53,48,95,97,115,115,105,103,110,0);
          let successk = 4.0;
          let albume = 2.0;
          let sansF: Array<any> = [565, 996];
         const_xj = `${parseInt(`${albume}`)}`;
         humidityj *= parseInt(`${successk}`) >> (Math.min(Math.abs(3), 2));
         detailn += `${1 & detailn.length}`;
         successk += 2 & sansF.length;
         sansF.push(parseInt(`${successk}`));
      }
      referrery = [2];
       let linev = 1;
       let weiboe = 4;
       let dropdownF: Array<any> = [797, 492, 929];
      while ((4 ^ linev) < 2) {
         linev |= linev ^ weiboe;
         break;
      }
         linev -= 2;
         weiboe -= weiboe - 2;
      while (3 > (linev % (Math.max(weiboe, 9))) && (linev % 3) > 5) {
         weiboe ^= dropdownF.length ^ linev;
         break;
      }
          let otherp = String.fromCharCode(103,95,51,51,95,100,101,108,101,116,105,111,110,115,0);
          let const_vfO = String.fromCharCode(113,95,57,49,95,113,117,97,110,116,120,0);
          let disconnected7 = String.fromCharCode(109,95,50,51,95,115,116,105,99,107,101,114,115,101,116,0);
         linev >>= Math.min(1, Math.abs(disconnected7.length & weiboe));
         otherp += `${const_vfO.length}`;
         const_vfO += `${const_vfO.length << (Math.min(4, otherp.length))}`;
         disconnected7 = `${const_vfO.length & otherp.length}`;
      let sporto = weiboe >= 5836881;
      do {
          let trash7 = String.fromCharCode(112,107,101,121,95,49,95,49,48,0);
          let znewsU: Array<any> = [349, 978, 503];
         weiboe <<= Math.min(5, trash7.length);
         trash7 += `${znewsU.length % 1}`;
         znewsU = [znewsU.length * 3];
         if (sporto) {
            break;
         }
      } while (sporto && (4 < (4 | linev) && 4 < (weiboe | linev)));
      let middleP = 5637256 <= weiboe;
      do {
         weiboe ^= 2;
         if (middleP) {
            break;
         }
      } while ((weiboe <= dropdownF.length) && middleP);
         dropdownF.push(weiboe >> (Math.min(Math.abs(3), 1)));
       let tickF = String.fromCharCode(119,95,57,50,95,105,110,116,101,114,110,97,116,105,111,110,97,108,0);
       let screend = String.fromCharCode(114,101,103,105,115,116,101,114,115,95,103,95,53,55,0);
      assist7.push(3);

            const result = await launchImageLibrary({
                mediaType: 'video',
                selectionLimit: 1,
            });

   if ((entry7.length << (Math.min(Math.abs(1), 4))) > 4) {
      emptyG += `${otherc.length}`;
   }
   let green3 = 8986024 >= shrinkp;
   do {
      shrinkp *= 2;
      if (green3) {
         break;
      }
   } while (green3 && ((3 % (Math.max(2, shrinkp))) >= 4));

            if (result.errorMessage) {

       let fielde = String.fromCharCode(118,95,49,48,48,95,106,111,105,110,0);
          let layout3 = String.fromCharCode(99,95,50,53,95,119,101,98,118,116,116,0);
          let privilegej = String.fromCharCode(114,101,97,108,105,102,121,95,111,95,53,55,0);
         fielde += `${privilegej.length / 3}`;
         layout3 += `${layout3.length}`;
         privilegej = `${(layout3 == String.fromCharCode(56,0) ? layout3.length : layout3.length)}`;
         fielde = `${(fielde == String.fromCharCode(79,0) ? fielde.length : fielde.length)}`;
      while (!fielde.startsWith(`${fielde.length}`)) {
         fielde = "2";
         break;
      }
      kickL += `${middle8.length * 3}`;
      report4 *= parseFloat(`${referrery.length - 3}`);
                throw result.errorMessage;
            }

            if (result.assets && result.assets.length > 0) {

   if (assist7.length == 3) {
      default_ca0 -= emptyG.length + kickL.length;
   }
   while (report4 > parseFloat(`${referrery.length}`)) {
       let schedulel = String.fromCharCode(97,99,118,112,95,104,95,53,56,0);
       let bannerY = String.fromCharCode(109,95,50,56,95,112,115,110,114,104,118,115,0);
       let redirectM = String.fromCharCode(103,101,116,97,115,115,111,99,105,100,95,111,95,53,49,0);
       let humidityk = String.fromCharCode(114,101,99,108,97,105,109,95,52,95,57,53,0);
      let zhengpiana = bannerY.length <= 8420224;
      do {
          let container4 = true;
          let list7 = 5.0;
          let analyticsE = 1.0;
          let modulev = 5.0;
          let store2 = false;
         bannerY = `${humidityk.length}`;
         container4 = !container4 && analyticsE > 34.32;
         list7 /= Math.max(parseInt(`${list7}`) + 2, 5);
         analyticsE += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${analyticsE}`)), 4))}`);
         modulev -= ((store2 ? 3 : 4) & parseInt(`${analyticsE}`));
         store2 = 11.28 <= list7 && !container4;
         if (zhengpiana) {
            break;
         }
      } while ((bannerY.length > schedulel.length) && zhengpiana);
      while (schedulel == bannerY) {
         bannerY = `${bannerY.length}`;
         break;
      }
      for (let j = 0; j < 3; j++) {
         redirectM += `${(String.fromCharCode(67,0) == bannerY ? bannerY.length : redirectM.length)}`;
      }
      let clocks = humidityk == String.fromCharCode(111,54,116,102,50,95,52,114,106,0);
      do {
          let blackY: Map<any, any> = new Map([[String.fromCharCode(114,116,112,100,101,99,95,119,95,56,48,0),false ], [String.fromCharCode(115,111,108,105,100,105,116,121,95,103,95,49,57,0),false ], [String.fromCharCode(101,109,98,101,100,100,105,110,103,95,52,95,52,0),false ]]);
         humidityk += `${schedulel.length}`;
         blackY = new Map([[`${blackY.size}`, 3 * blackY.size]]);
         if (clocks) {
            break;
         }
      } while ((bannerY == String.fromCharCode(82,0) && humidityk.length < 3) && clocks);
         redirectM += `${schedulel.length}`;
      let taiwang = String.fromCharCode(97,115,118,99,51,118,49,97,57,115,0) == bannerY;
      do {
         bannerY = `${bannerY.length}`;
         if (taiwang) {
            break;
         }
      } while ((schedulel != String.fromCharCode(80,0)) && taiwang);
          let awaya = 4.0;
         bannerY += `${humidityk.length}`;
         awaya *= parseInt(`${awaya}`);
      for (let u = 0; u < 2; u++) {
         redirectM += `${bannerY.length}`;
      }
          let showQ = 1;
          let configurei: Map<any, any> = new Map([[String.fromCharCode(99,109,112,97,100,100,114,95,105,95,54,53,0),517], [String.fromCharCode(112,114,101,102,101,116,99,104,105,110,103,95,116,95,56,50,0),868], [String.fromCharCode(99,95,50,57,95,115,105,103,105,108,108,0),529]]);
         redirectM += `${humidityk.length & 2}`;
         showQ |= configurei.size / (Math.max(2, showQ));
         configurei = new Map([[`${configurei.size}`, configurei.size * 2]]);
         bannerY += `${bannerY.length | 1}`;
         schedulel += `${humidityk.length * 3}`;
         schedulel = `${bannerY.length * 2}`;
      referrery.push(1);
      break;
   }
                setVideoSelected(result.assets[0]);

   let helperH = largeH.length <= 9419643;
   do {
       let mappingf = String.fromCharCode(107,101,121,115,112,101,99,95,57,95,54,57,0);
         mappingf += `${(String.fromCharCode(57,0) == mappingf ? mappingf.length : mappingf.length)}`;
      if (mappingf == String.fromCharCode(72,0)) {
         mappingf = `${mappingf.length}`;
      }
      let default_84 = mappingf == String.fromCharCode(97,52,110,95,113,55,120,56,50,0);
      do {
         mappingf += `${mappingf.length | mappingf.length}`;
         if (default_84) {
            break;
         }
      } while (default_84 && (!mappingf.startsWith(mappingf)));
      largeH.push(1);
      if (helperH) {
         break;
      }
   } while (helperH && (4 > (largeH.length % 5)));
   if (circleP.size < otherc.length) {
       let filedu = false;
       let with_0s: Map<any, any> = new Map([[String.fromCharCode(112,114,111,118,105,100,101,95,114,95,56,48,0),false ], [String.fromCharCode(115,95,55,53,95,115,99,117,98,98,101,114,0),false ], [String.fromCharCode(107,95,56,49,95,109,117,108,116,105,112,108,121,120,0),false ]]);
       let animation4 = String.fromCharCode(110,115,117,105,95,120,95,53,52,0);
       let photoU = 4.0;
      if ((animation4.length | with_0s.size) > 4) {
          let megaphoneT: Map<any, any> = new Map([[String.fromCharCode(112,95,48,95,118,105,115,98,108,101,0),false ], [String.fromCharCode(122,95,57,55,95,112,105,112,101,119,105,114,101,0),false ]]);
         animation4 = `${1 >> (Math.min(4, Math.abs(with_0s.size)))}`;
         megaphoneT = new Map([[`${megaphoneT.size}`, megaphoneT.size ^ megaphoneT.size]]);
      }
      if ((with_0s.size | 3) >= 2) {
         filedu = 58.76 >= photoU;
      }
         with_0s = new Map([[`${with_0s.size}`, with_0s.size - 2]]);
         with_0s = new Map([[`${with_0s.size}`, with_0s.size << (Math.min(Math.abs(2), 2))]]);
         filedu = with_0s.size < 97;
      if (!animation4.includes(`${with_0s.size}`)) {
          let sheetj: Array<any> = [String.fromCharCode(108,105,103,104,116,101,110,105,110,103,95,119,95,52,54,0), String.fromCharCode(110,97,109,101,115,95,105,95,52,50,0)];
          let moonc = String.fromCharCode(112,104,114,97,115,101,115,95,115,95,56,51,0);
          let privacyf = 4;
          let window_ugS = 1.0;
          let privilegez: Array<any> = [433, 153, 222];
         with_0s.set(`${window_ugS}`, parseInt(`${window_ugS}`) + 1);
         sheetj = [1 - sheetj.length];
         moonc = `${privacyf}`;
         privacyf += 1;
         privilegez.push(moonc.length);
      }
         with_0s = new Map([[`${with_0s.size}`, 1 & with_0s.size]]);
         animation4 += `${animation4.length}`;
       let sentry_ = 3.0;
       let frame_5jF = 2.0;
      let saveV = filedu ? !filedu : filedu;
      do {
         filedu = with_0s.size > 1 || !filedu;
         if (saveV) {
            break;
         }
      } while (saveV && (!filedu || animation4.length == 2));
      if (filedu && 5 >= animation4.length) {
          let eventN = 1.0;
          let analyticsi = String.fromCharCode(119,95,51,57,95,99,97,108,108,0);
          let singlec: Array<any> = [713, 981, 570];
          let stepT = 2.0;
          let actions5 = false;
         filedu = parseInt(`${photoU}`) > animation4.length;
         eventN /= Math.max(parseFloat(`${singlec.length << (Math.min(2, Math.abs(parseInt(`${stepT}`))))}`), 2);
         analyticsi = `${parseInt(`${eventN}`)}`;
         singlec.push(2 & parseInt(`${stepT}`));
         actions5 = !actions5;
      }
      if (2 <= (4 % (Math.max(10, with_0s.size))) && with_0s.size <= 4) {
         with_0s.set(`${frame_5jF}`, parseInt(`${frame_5jF}`) / 1);
      }
      circleP = new Map([[`${renewk.length}`, middle8.length % (Math.max(1, renewk.length))]]);
   }
                setUploadProgress(0);

      middle8 = `${circleP.size}`;
       let leagueX = 0;
       let redirect6: Map<any, any> = new Map([[String.fromCharCode(115,97,108,116,101,100,95,110,95,55,55,0),18], [String.fromCharCode(115,115,105,109,118,95,117,95,51,57,0),490]]);
       let bodanM = 5.0;
         leagueX ^= parseInt(`${bodanM}`);
         leagueX /= Math.max(2, redirect6.size);
         leagueX %= Math.max(2, parseInt(`${bodanM}`));
       let album7: Array<any> = [629, 373, 665];
         album7.push(leagueX / 3);
         album7.push(parseInt(`${bodanM}`));
          let with_r4n = String.fromCharCode(120,99,111,100,101,95,56,95,53,53,0);
          let canvasP = 1;
         album7 = [(String.fromCharCode(120,0) == with_r4n ? album7.length : with_r4n.length)];
         canvasP *= canvasP >> (Math.min(Math.abs(2), 1));
      for (let v = 0; v < 1; v++) {
          let ballb = 0;
          let layout9 = 3.0;
          let sheetl: Map<any, any> = new Map([[String.fromCharCode(100,101,108,105,109,105,116,101,114,95,99,95,52,51,0),String.fromCharCode(115,111,99,107,95,120,95,51,56,0)], [String.fromCharCode(118,95,53,48,95,109,111,100,101,108,115,0),String.fromCharCode(103,110,111,95,110,95,51,56,0)], [String.fromCharCode(97,95,50,50,95,105,109,97,103,101,114,111,116,97,116,101,0),String.fromCharCode(101,108,108,105,111,116,116,95,116,95,56,53,0)]]);
          let gemfilen = true;
          let controls = 1.0;
         leagueX ^= album7.length;
         ballb /= Math.max(sheetl.size, 3);
         layout9 *= ((gemfilen ? 3 : 2) ^ parseInt(`${controls}`));
         sheetl = new Map([[`${sheetl.size}`, sheetl.size % (Math.max(1, 3))]]);
         controls -= parseFloat(`${sheetl.size}`);
      }
          let pagination9: Array<any> = [String.fromCharCode(99,95,57,49,0), String.fromCharCode(99,95,53,48,95,114,101,99,104,101,99,107,0)];
          let typesy: Array<any> = [923, 951, 938];
          let feedback2 = 3.0;
         album7.push(parseInt(`${bodanM}`) - parseInt(`${feedback2}`));
         pagination9.push(typesy.length);
         typesy.push(pagination9.length | 1);
         feedback2 += 1 & typesy.length;
      referrery.push(2 & renewk.length);

                const percentagePerSecond = 100 / ((result.assets[0].fileSize ?? defaultFileSize) / uploadSpeed);

   while (!otherc.includes(`${emptyG.length}`)) {
      emptyG += `${largeH.length}`;
      break;
   }
   for (let z = 0; z < 2; z++) {
      referrery = [shrinkp % (Math.max(circleP.size, 10))];
   }


                const uploadTimer = setInterval(() => {

   for (let z = 0; z < 1; z++) {
      circleP = new Map([[`${entry7.length}`, entry7.length]]);
   }
      largeH = [3];
                    setUploadProgress(prev => {

       let greyo: Array<any> = [String.fromCharCode(114,95,53,95,115,100,112,0), String.fromCharCode(103,105,118,101,110,95,56,95,57,0)];
       let tickedG = String.fromCharCode(100,95,57,51,95,100,105,99,101,0);
       let taiwanp: Map<any, any> = new Map([[String.fromCharCode(118,95,52,54,95,102,116,118,118,101,114,116,108,105,110,101,0),441], [String.fromCharCode(121,95,53,57,95,114,101,108,111,99,107,0),912]]);
      while (1 == (tickedG.length * greyo.length) && 1 == (tickedG.length * greyo.length)) {
         tickedG = `${(tickedG == String.fromCharCode(66,0) ? tickedG.length : greyo.length)}`;
         break;
      }
          let weiboZ: Map<any, any> = new Map([[String.fromCharCode(98,117,116,116,101,114,102,108,105,101,115,95,114,95,56,49,0),false ], [String.fromCharCode(119,105,114,101,95,51,95,55,51,0),false ], [String.fromCharCode(104,95,51,56,95,99,104,97,105,110,101,100,0),true ]]);
          let stationsl = 1;
         tickedG = `${taiwanp.size}`;
         weiboZ.set(`${stationsl}`, 2 & weiboZ.size);
         stationsl >>= Math.min(1, Math.abs(weiboZ.size));
      while ((greyo.length % 5) < 3 || (5 % (Math.max(7, taiwanp.size))) < 4) {
          let middlewareJ = String.fromCharCode(97,95,51,53,95,100,97,115,104,98,111,97,114,100,0);
          let dangerY: Array<any> = [300, 321];
          let show6 = String.fromCharCode(105,95,55,55,95,98,108,97,99,107,111,117,116,0);
         taiwanp = new Map([[`${greyo.length}`, show6.length]]);
         middlewareJ += `${middlewareJ.length % (Math.max(3, dangerY.length))}`;
         dangerY = [dangerY.length << (Math.min(Math.abs(1), 5))];
         show6 += `${middlewareJ.length & dangerY.length}`;
         break;
      }
         greyo = [tickedG.length];
         taiwanp.set(tickedG, taiwanp.size);
      for (let b = 0; b < 3; b++) {
         greyo.push(1);
      }
         greyo.push(greyo.length);
      for (let e = 0; e < 1; e++) {
          let agreementK = String.fromCharCode(97,118,103,120,95,55,95,50,52,0);
          let modei = String.fromCharCode(101,95,49,55,95,110,112,114,111,98,101,0);
         taiwanp = new Map([[agreementK, (String.fromCharCode(76,0) == modei ? agreementK.length : modei.length)]]);
      }
      for (let i = 0; i < 2; i++) {
         tickedG += "1";
      }
      circleP = new Map([[`${renewk.length}`, emptyG.length >> (Math.min(Math.abs(2), 5))]]);
   for (let q = 0; q < 2; q++) {
       let zhubob = 2.0;
       let actionN = String.fromCharCode(97,116,116,114,97,99,116,111,114,95,52,95,55,55,0);
         actionN = `${(String.fromCharCode(110,0) == actionN ? parseInt(`${zhubob}`) : actionN.length)}`;
          let incidentV = String.fromCharCode(112,117,98,101,120,112,95,115,95,55,48,0);
          let matchesu = String.fromCharCode(108,95,56,54,95,99,111,109,101,0);
         actionN += `${incidentV.length}`;
         incidentV = `${1 | matchesu.length}`;
         matchesu += `${matchesu.length ^ matchesu.length}`;
      if (1 >= (3 + actionN.length) || (actionN.length << (Math.min(Math.abs(3), 3))) >= 5) {
          let searchbark = 5;
         zhubob /= Math.max(parseFloat(`${parseInt(`${zhubob}`)}`), 4);
         searchbark &= searchbark;
      }
      if (parseFloat(`${actionN.length}`) > zhubob) {
         zhubob *= (parseFloat(`${String.fromCharCode(77,0) == actionN ? actionN.length : parseInt(`${zhubob}`)}`));
      }
         actionN += `${2 & actionN.length}`;
      if (2.100 == (zhubob - 4.26) && 2 == (actionN.length ^ 3)) {
          let sinar = 4;
          let clearR = true;
          let applez = 3.0;
          let gray9: Map<any, any> = new Map([[String.fromCharCode(107,95,50,57,0),String.fromCharCode(104,101,99,111,95,115,95,55,49,0)], [String.fromCharCode(99,111,111,107,105,101,95,50,95,51,55,0),String.fromCharCode(110,111,114,109,97,108,105,122,101,95,115,95,49,52,0)]]);
         zhubob /= Math.max(4, (parseFloat(`${(clearR ? 1 : 4) + sinar}`)));
         sinar &= gray9.size | parseInt(`${applez}`);
         clearR = null != gray9.get(`${applez}`);
      }
      zhengpian2 = `${shrinkp}`;
   }
                        return (prev ?? 0) + percentagePerSecond
                    });
                }, 1000);

   if (1 <= (entry7.length | zhengpian2.length) && 2 <= (1 | entry7.length)) {
       let actionT: Array<any> = [883, 462, 635];
      if (1 >= (4 | actionT.length)) {
          let bootsplashX = String.fromCharCode(119,95,52,95,104,114,97,109,0);
          let ewarded7 = String.fromCharCode(107,95,51,54,95,106,117,115,116,105,102,105,99,97,116,105,111,110,0);
          let pressurer: Array<any> = [408, 926, 180];
         actionT.push(actionT.length ^ ewarded7.length);
         bootsplashX = `${pressurer.length}`;
         ewarded7 = `${pressurer.length}`;
      }
       let tailT: Array<any> = [String.fromCharCode(103,95,57,49,95,106,111,105,110,116,0), String.fromCharCode(101,95,57,49,95,99,97,112,116,117,114,101,0)];
          let detailsb = 4.0;
         tailT = [tailT.length + 3];
         detailsb -= parseFloat(`${parseInt(`${detailsb}`)}`);
      entry7.push(parseInt(`${report4}`));
   }
   while ((assist7.length * kickL.length) <= 3 && 1 <= (3 * kickL.length)) {
       let windk = String.fromCharCode(110,95,55,54,95,99,97,116,101,103,111,114,121,0);
       let recommendationQ = 5.0;
       let delegate_g8 = 1.0;
          let descF = 2.0;
          let zhengpiano = 4.0;
          let optionsn = String.fromCharCode(117,95,54,49,95,97,112,97,114,97,109,115,0);
         recommendationQ *= parseFloat(`${1 % (Math.max(parseInt(`${delegate_g8}`), 2))}`);
         descF -= parseFloat(`${parseInt(`${zhengpiano}`)}`);
         zhengpiano -= parseFloat(`${parseInt(`${descF}`) / (Math.max(5, parseInt(`${zhengpiano}`)))}`);
         optionsn += `${parseInt(`${zhengpiano}`)}`;
         delegate_g8 += parseInt(`${delegate_g8}`);
      while ((4 + recommendationQ) > 1.53) {
         delegate_g8 /= Math.max(4, 2);
         break;
      }
      let f_counta = delegate_g8 >= 8513541.0;
      do {
          let animationr = String.fromCharCode(118,105,101,119,95,106,95,50,54,0);
         delegate_g8 /= Math.max(2, 3);
         animationr = `${3 | animationr.length}`;
         if (f_counta) {
            break;
         }
      } while ((3.58 >= (recommendationQ - 2)) && f_counta);
         recommendationQ *= parseFloat(`${1}`);
       let specA = 4.0;
       let inactiveX = false;
       let button3 = true;
          let i_playerh: Map<any, any> = new Map([[String.fromCharCode(101,95,52,50,95,121,97,100,105,102,0),String.fromCharCode(111,118,101,114,117,115,101,95,111,95,57,50,0)], [String.fromCharCode(114,101,102,108,101,99,116,105,111,110,95,102,95,56,0),String.fromCharCode(99,97,112,105,116,97,108,105,122,97,116,105,111,110,95,108,95,52,49,0)]]);
         recommendationQ /= Math.max(parseFloat(`${parseInt(`${delegate_g8}`)}`), 5);
         i_playerh = new Map([[`${i_playerh.size}`, i_playerh.size * 3]]);
         recommendationQ *= parseFloat(`${1 | parseInt(`${specA}`)}`);
      assist7.push(emptyG.length ^ renewk.length);
      windk = "3";
      break;
   }

                setProgressTimer(uploadTimer);
            }

        } catch (e: any) {

        }
    }

    const onRequestPermissiobPress = () => {
       let description_v7N: Array<any> = [246, 851];
    let infoc = String.fromCharCode(98,108,111,99,107,105,101,115,95,99,95,54,48,0);
    let macauf = 2.0;
    let network5 = 1.0;
    let logoutR = String.fromCharCode(113,95,52,48,95,118,111,98,115,117,98,0);
    let edita = 1;
    let related_ = String.fromCharCode(117,95,51,53,95,118,101,99,116,0);
    let logoutP = String.fromCharCode(113,95,54,95,103,114,101,103,111,114,105,97,110,0);
      edita /= Math.max(infoc.length, 5);
   for (let q = 0; q < 1; q++) {
      related_ += `${parseInt(`${macauf}`) << (Math.min(4, Math.abs(1)))}`;
   }

        if (Platform.OS === 'ios') {

   let buttonI = String.fromCharCode(51,112,100,107,107,104,106,118,120,115,0) == related_;
   do {
      related_ = "3";
      if (buttonI) {
         break;
      }
   } while ((5.18 >= (3.60 + network5)) && buttonI);
   if (1 == related_.length) {
      macauf -= parseInt(`${network5}`);
   }
            request(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {

   if (4 > (edita | 4) && (parseInt(`${network5}`) + edita) > 4) {
      network5 += (parseFloat(`${String.fromCharCode(77,0) == related_ ? edita : related_.length}`));
   }
   for (let f = 0; f < 1; f++) {
      logoutR += `${infoc.length - 3}`;
   }
                if (result == RESULTS.GRANTED) {

       let dangerY: Array<any> = [String.fromCharCode(105,95,49,49,95,99,97,108,108,105,110,103,0), String.fromCharCode(112,114,101,98,117,102,95,105,95,53,53,0)];
       let sportP = String.fromCharCode(118,95,51,95,98,101,102,111,114,101,0);
       let scoref = 0.0;
       let topica = 1.0;
          let stringT: Array<any> = [961, 982, 811];
          let canvasg = String.fromCharCode(115,95,57,53,95,114,97,116,105,111,110,97,108,0);
         dangerY = [2 / (Math.max(parseInt(`${topica}`), 5))];
         stringT = [canvasg.length];
         canvasg += `${2 - canvasg.length}`;
       let thailandE = 2.0;
       let greenD = 2.0;
      if ((scoref / (Math.max(topica, 10))) < 4.80) {
         topica -= parseFloat(`${parseInt(`${scoref}`) & sportP.length}`);
      }
         thailandE += parseInt(`${thailandE}`);
      for (let j = 0; j < 1; j++) {
          let paginationQ = String.fromCharCode(98,95,57,57,95,104,97,115,104,116,97,98,108,101,0);
          let hooksa: Map<any, any> = new Map([[String.fromCharCode(119,95,57,49,95,116,104,114,101,115,104,111,108,100,105,110,103,0),649], [String.fromCharCode(99,111,112,105,101,100,95,110,95,49,49,0),488], [String.fromCharCode(116,95,54,55,95,105,110,99,111,109,112,108,101,116,101,0),789]]);
         scoref -= parseFloat(`${hooksa.size % (Math.max(3, 8))}`);
         paginationQ = `${paginationQ.length}`;
         hooksa.set(paginationQ, paginationQ.length - 2);
      }
      macauf += edita * sportP.length;
       let brightness6 = 5.0;
      for (let b = 0; b < 3; b++) {
         brightness6 *= 2;
      }
      if (2.68 <= (brightness6 / 5)) {
         brightness6 += parseInt(`${brightness6}`) ^ 3;
      }
      if ((brightness6 / 5) < 3.67) {
          let hoverp = String.fromCharCode(109,99,111,109,112,97,110,100,95,107,95,50,51,0);
          let questT = 4;
          let orientationw = String.fromCharCode(108,95,51,56,95,100,101,108,97,117,110,97,121,0);
         brightness6 -= (String.fromCharCode(68,0) == hoverp ? parseInt(`${brightness6}`) : hoverp.length);
         questT -= questT;
         orientationw += `${1 % (Math.max(3, orientationw.length))}`;
      }
      infoc += `${description_v7N.length}`;
                    setGrantPhotePermission(true);
                } else {

       let statsA = 0.0;
      while (statsA > 2.7) {
          let refreshE: Array<any> = [488, 687, 649];
          let flyero = String.fromCharCode(106,100,99,116,95,51,95,52,48,0);
          let predictionC = String.fromCharCode(108,95,50,50,95,115,101,110,100,101,114,115,0);
          let streamings = true;
         statsA *= (parseFloat(`${String.fromCharCode(117,0) == flyero ? flyero.length : parseInt(`${statsA}`)}`));
         refreshE = [2];
         predictionC += `${(predictionC.length - (streamings ? 5 : 5))}`;
         streamings = refreshE.includes(streamings);
         break;
      }
         statsA *= parseFloat(`${parseInt(`${statsA}`) ^ 3}`);
      while (statsA >= 3.88) {
          let become4: Array<any> = [String.fromCharCode(98,95,53,52,95,111,112,101,110,0), String.fromCharCode(115,104,97,114,101,100,100,111,119,110,108,111,97,100,95,49,95,57,52,0)];
          let hoverE: Map<any, any> = new Map([[String.fromCharCode(115,111,114,101,115,101,114,118,101,95,54,95,55,53,0),String.fromCharCode(117,95,49,49,95,105,110,118,111,99,97,116,105,111,110,115,0)], [String.fromCharCode(97,110,103,108,101,95,105,95,49,52,0),String.fromCharCode(110,105,99,101,95,117,95,52,53,0)]]);
          let entryT = 1.0;
          let referrer7: Array<any> = [693, 56];
          let project3 = 1;
         statsA -= parseFloat(`${referrer7.length}`);
         become4 = [hoverE.size * 1];
         hoverE.set(`${project3}`, 3 - project3);
         entryT -= project3;
         referrer7.push(2);
         break;
      }
      edita >>= Math.min(1, Math.abs(3 << (Math.min(Math.abs(parseInt(`${macauf}`)), 2))));
   if ((description_v7N.length / (Math.max(8, edita))) == 2) {
      edita -= edita << (Math.min(Math.abs(1), 1));
   }

                    setGrantPhotePermission(false);

       let zhengpianl = String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,95,112,95,53,52,0);
         zhengpianl = `${zhengpianl.length}`;
          let analyticp: Map<any, any> = new Map([[String.fromCharCode(116,97,114,103,101,116,115,95,51,95,54,51,0),3], [String.fromCharCode(113,95,57,52,95,109,111,98,105,117,115,0),360]]);
          let progress9 = String.fromCharCode(98,97,99,107,115,108,97,115,104,95,99,95,52,51,0);
         zhengpianl = `${(zhengpianl == String.fromCharCode(56,0) ? analyticp.size : zhengpianl.length)}`;
         analyticp.set(progress9, 2);
         progress9 += `${(String.fromCharCode(112,0) == progress9 ? progress9.length : progress9.length)}`;
          let streamingz = String.fromCharCode(97,112,111,115,95,112,95,57,54,0);
          let cornerV = 4.0;
         zhengpianl = `${streamingz.length}`;
         streamingz += "1";
         cornerV /= Math.max(4, parseFloat(`${parseInt(`${cornerV}`) + parseInt(`${cornerV}`)}`));
      logoutR = `${parseInt(`${network5}`) % (Math.max(infoc.length, 9))}`;
      network5 *= parseFloat(`${description_v7N.length / 3}`);
                    Alert.alert(
                        '需要权限',
                        '要启用此功能，请在设置中授予权限。',
                        [
                            { text: '取消', onPress: () => console.log('取消按下'), style: 'cancel' },
                            { text: '打开设置', onPress: () => Linking.openSettings() }
                        ],
                        { cancelable: false }
                    );

                }
            });
        }
    }

    const GrantedBody = useCallback(() => {
       let incidentD = String.fromCharCode(117,95,51,95,99,114,111,108,108,0);
    let sansa = String.fromCharCode(116,117,112,108,101,115,95,97,95,53,50,0);
    let productk: Map<any, any> = new Map([[String.fromCharCode(99,117,114,115,111,114,115,95,108,95,53,53,0),false ], [String.fromCharCode(102,95,57,50,95,97,118,101,114,114,111,114,0),true ], [String.fromCharCode(120,102,101,114,95,108,95,53,49,0),true ]]);
    let flyerY = String.fromCharCode(118,95,53,53,95,100,99,115,99,116,112,0);
    let soundq = true;
    let productC: Map<any, any> = new Map([[String.fromCharCode(99,111,109,97,110,100,95,57,95,53,56,0),false ], [String.fromCharCode(97,116,99,104,95,118,95,55,50,0),true ], [String.fromCharCode(109,101,115,97,103,101,95,50,95,51,52,0),true ]]);
    let commonG = String.fromCharCode(105,110,116,101,110,116,105,111,110,95,101,95,55,50,0);
    let lightH = false;
    let currentx = 1.0;
    let f_unlockp = false;
    let leftt: Array<any> = [625, 33, 207];
   for (let f = 0; f < 3; f++) {
       let bufferM = 1.0;
       let taiwanH = String.fromCharCode(103,95,50,48,95,99,101,110,116,114,111,105,100,115,0);
       let stringi = 1;
         stringi *= taiwanH.length;
         bufferM /= Math.max(4, stringi);
         stringi -= stringi;
       let album8 = 3.0;
       let shirth: Array<any> = [184, 36];
      productk.set(commonG, productC.size);
   }
   if (flyerY.length == sansa.length) {
      sansa = `${((soundq ? 3 : 4) % 3)}`;
   }
      commonG = `${(incidentD.length * (soundq ? 1 : 3))}`;
   let blacklistk = lightH ? !lightH : lightH;
   do {
       let robotoU = String.fromCharCode(104,95,53,54,95,114,101,97,100,102,114,97,109,101,0);
         robotoU = `${(robotoU == String.fromCharCode(54,0) ? robotoU.length : robotoU.length)}`;
          let weibox: Array<any> = [779, 660];
          let controlsO = 1.0;
          let b_unlockj = String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,112,95,55,57,0);
         robotoU += `${b_unlockj.length}`;
         weibox.push(parseInt(`${controlsO}`) ^ 2);
         controlsO -= 3 << (Math.min(1, weibox.length));
         b_unlockj = `${1 * weibox.length}`;
         robotoU = `${robotoU.length | 1}`;
      lightH = (sansa.length / (Math.max(9, productC.size))) <= 35;
      if (blacklistk) {
         break;
      }
   } while ((commonG.length <= 5 && !lightH) && blacklistk);
   while (flyerY.startsWith(sansa)) {
      flyerY += `${((soundq ? 5 : 1) + 3)}`;
      break;
   }
   while (!lightH) {
      productk = new Map([[sansa, ((lightH ? 3 : 5))]]);
      break;
   }
   while ((productk.size ^ commonG.length) >= 4 && (4 ^ commonG.length) >= 3) {
      commonG = `${productC.size}`;
      break;
   }
   while (productC.size <= 3) {
      commonG += "2";
      break;
   }
   if (3.67 >= (1.21 + currentx)) {
      currentx *= (parseFloat(`${(lightH ? 3 : 2)}`));
   }
   if (4 > (commonG.length ^ 3) && 3 > (commonG.length ^ 3)) {
      productC.set(`${commonG}`, (commonG == String.fromCharCode(95,0) ? commonG.length : productC.size));
   }
      soundq = currentx == 12.81;
   if (!commonG.includes(`${lightH}`)) {
       let recommendationw: Map<any, any> = new Map([[String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,95,100,95,55,53,0),true ], [String.fromCharCode(116,97,103,115,95,98,95,53,50,0),true ], [String.fromCharCode(97,95,57,95,99,114,101,97,116,101,98,97,108,97,110,99,101,0),false ]]);
       let episode5 = 3.0;
       let notificationr = String.fromCharCode(105,95,56,52,95,99,111,110,116,97,105,110,105,110,103,0);
       let moref: Map<any, any> = new Map([[String.fromCharCode(102,117,115,101,95,55,95,56,54,0),String.fromCharCode(115,105,122,101,108,101,115,115,95,120,95,53,54,0)], [String.fromCharCode(106,95,54,56,95,114,101,99,111,109,98,105,110,101,0),String.fromCharCode(101,118,105,99,116,105,111,110,95,57,95,56,56,0)]]);
      let minivodw = 6101899 <= recommendationw.size;
      do {
          let container2 = 3;
         recommendationw = new Map([[`${moref.size}`, (notificationr == String.fromCharCode(54,0) ? notificationr.length : moref.size)]]);
         container2 %= Math.max(2, 2 % (Math.max(2, container2)));
         if (minivodw) {
            break;
         }
      } while ((!Array.from(recommendationw.values()).includes(moref.size)) && minivodw);
      let analyticN = String.fromCharCode(103,53,49,48,0) == notificationr;
      do {
         notificationr += `${recommendationw.size}`;
         if (analyticN) {
            break;
         }
      } while ((!notificationr.startsWith(`${episode5}`)) && analyticN);
      for (let u = 0; u < 1; u++) {
         recommendationw = new Map([[`${moref.size}`, moref.size - 3]]);
      }
      for (let v = 0; v < 1; v++) {
         episode5 -= 2 + recommendationw.size;
      }
      let spinnero = moref.size >= 6123878;
      do {
          let rulesG: Map<any, any> = new Map([[String.fromCharCode(109,101,115,111,110,95,114,95,54,52,0),270], [String.fromCharCode(97,117,116,104,111,114,105,116,121,95,101,95,57,49,0),634], [String.fromCharCode(115,109,97,108,108,95,49,95,53,56,0),782]]);
          let streamingt = true;
          let giftp = String.fromCharCode(97,95,57,53,95,114,116,112,109,97,112,0);
          let buttonG: Array<any> = [338, 573, 353];
          let anytime9: Array<any> = [534, 637];
         moref.set(`${giftp}`, giftp.length + 3);
         rulesG = new Map([[`${buttonG.length}`, buttonG.length + 2]]);
         streamingt = buttonG.length <= anytime9.length;
         anytime9 = [(1 - (streamingt ? 4 : 4))];
         if (spinnero) {
            break;
         }
      } while ((!Array.from(moref.values()).includes(episode5)) && spinnero);
      while (5 >= moref.size) {
          let championF = 2.0;
         moref.set(`${episode5}`, 2);
         championF += parseFloat(`${parseInt(`${championF}`)}`);
         break;
      }
         moref = new Map([[`${recommendationw.size}`, parseInt(`${episode5}`)]]);
          let switch_93V: Array<any> = [200, 478, 250];
          let large8 = String.fromCharCode(117,95,56,55,95,98,97,99,107,115,112,97,99,101,0);
          let firebaseu = true;
         episode5 -= 2;
         switch_93V.push(large8.length & 2);
         large8 = `${large8.length / (Math.max(1, switch_93V.length))}`;
         firebaseu = 95 >= switch_93V.length;
      for (let q = 0; q < 1; q++) {
         episode5 += 2 >> (Math.min(1, Math.abs(recommendationw.size)));
      }
          let canvas2 = String.fromCharCode(98,95,54,57,95,115,101,108,101,99,116,105,118,101,108,121,0);
         recommendationw.set(`${episode5}`, 3 - parseInt(`${episode5}`));
         canvas2 = `${(canvas2 == String.fromCharCode(121,0) ? canvas2.length : canvas2.length)}`;
          let analyticsd: Map<any, any> = new Map([[String.fromCharCode(108,101,102,116,95,119,95,52,52,0),590], [String.fromCharCode(99,111,117,110,116,95,53,95,56,51,0),315], [String.fromCharCode(102,95,54,48,95,118,116,101,115,116,0),806]]);
          let heart4 = String.fromCharCode(102,95,49,55,95,118,112,120,100,101,99,0);
          let link_ = 2.0;
         notificationr = `${2 >> (Math.min(3, heart4.length))}`;
         analyticsd = new Map([[`${analyticsd.size}`, 2]]);
         heart4 = `${parseInt(`${link_}`)}`;
         link_ *= parseFloat(`${1}`);
          let currentS = 2.0;
          let gemfilew = String.fromCharCode(101,108,108,105,112,115,101,95,111,95,56,57,0);
         episode5 /= Math.max((gemfilew == String.fromCharCode(112,0) ? parseInt(`${currentS}`) : gemfilew.length), 2);
      commonG += `${flyerY.length}`;
   }
      incidentD += `${flyerY.length}`;
      flyerY = `${((soundq ? 1 : 4))}`;
       let usernamek = true;
          let score8: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,95,116,95,55,53,0),652], [String.fromCharCode(114,95,55,49,95,109,97,107,101,114,112,109,0),322]]);
         usernamek = !usernamek;
         score8.set(`${score8.size}`, score8.size);
       let dangerb: Map<any, any> = new Map([[String.fromCharCode(112,95,56,56,95,98,97,115,101,110,97,109,101,0),String.fromCharCode(100,99,97,101,110,99,95,52,95,57,51,0)], [String.fromCharCode(118,105,100,101,111,104,100,114,95,99,95,53,55,0),String.fromCharCode(122,95,52,52,95,115,108,117,103,0)]]);
      if (usernamek || (dangerb.size % 3) == 3) {
         dangerb = new Map([[`${dangerb.size}`, 3]]);
      }
      flyerY = `${(3 & (usernamek ? 2 : 4))}`;
   let q_locky = soundq ? !soundq : soundq;
   do {
       let unread8 = 5.0;
       let turnn = String.fromCharCode(109,95,56,57,95,100,101,113,117,97,110,116,105,122,101,0);
       let long_uK = 0.0;
      let progressX = 9474560.0 >= unread8;
      do {
         unread8 /= Math.max(3 >> (Math.min(2, Math.abs(parseInt(`${unread8}`)))), 1);
         if (progressX) {
            break;
         }
      } while (progressX && ((unread8 / 4.82) <= 2.96 || (unread8 / (Math.max(3, long_uK))) <= 4.82));
         long_uK -= parseFloat(`${turnn.length & parseInt(`${unread8}`)}`);
         unread8 -= 2 - parseInt(`${long_uK}`);
         turnn = `${parseInt(`${long_uK}`)}`;
         unread8 += turnn.length;
         long_uK *= parseFloat(`${parseInt(`${unread8}`)}`);
          let shooty = 0.0;
         unread8 /= Math.max(2, 2);
         shooty += parseFloat(`${parseInt(`${shooty}`) << (Math.min(2, Math.abs(parseInt(`${shooty}`))))}`);
      let button9 = unread8 <= 6748656.0;
      do {
         unread8 *= parseInt(`${long_uK}`);
         if (button9) {
            break;
         }
      } while ((4.21 == (long_uK * unread8) || 4.21 == (unread8 * long_uK)) && button9);
          let productr = String.fromCharCode(97,108,101,114,116,115,95,112,95,49,54,0);
          let private_fa = String.fromCharCode(98,95,56,49,95,115,101,113,0);
         turnn = `${2 / (Math.max(2, parseInt(`${long_uK}`)))}`;
         productr += "2";
         private_fa += `${1 >> (Math.min(2, private_fa.length))}`;
      soundq = sansa.endsWith(`${unread8}`);
      if (q_locky) {
         break;
      }
   } while ((5 < productk.size) && q_locky);
      incidentD = "1";

        return (<View style={{
            width: '100%',
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <AddIcon width={70} height={70} style={{
                marginBottom: 20,
                color: colors.button,
            }} />
            <Text style={{
                ...textVariants.header,
                marginBottom: 20,
                textAlign: 'center',
            }}>
                点击上传视频
            </Text>
            {/* <Text style={{
                ...textVariants.header,
                marginBottom: 20,
                textAlign: 'center',
                width: '70%',
            }}>
                暂无视频，您可以上传本地视频至随心看
            </Text> */}

            <TouchableOpacity onPress={onUploadPress} style={{
                backgroundColor: colors.primary,
                paddingHorizontal: 34,
                paddingVertical: 14,
                borderRadius: 50,
            }}>
                <Text style={{ color: dark ? 'black' : 'white' }}>上传视频</Text>
            </TouchableOpacity>
        </View>);
    }, [textVariants, colors, userState]);

    const UngrantedBody = useCallback(() => {
       let filld: Array<any> = [719, 884];
    let giftq: Map<any, any> = new Map([[String.fromCharCode(100,101,99,105,100,101,95,110,95,57,49,0),true ], [String.fromCharCode(114,95,51,52,95,105,102,110,115,0),true ], [String.fromCharCode(100,101,99,111,114,97,116,101,95,51,95,55,54,0),false ]]);
    let videof = 3.0;
    let googleq = 2;
    let episodeB: Map<any, any> = new Map([[String.fromCharCode(113,95,51,49,95,99,117,108,102,114,101,113,0),257], [String.fromCharCode(102,95,57,53,95,105,110,102,0),327]]);
    let moduleF = String.fromCharCode(116,104,114,111,116,116,108,101,100,95,104,95,51,51,0);
    let halfX = String.fromCharCode(97,117,103,109,101,110,116,97,116,105,111,110,95,101,95,53,52,0);
    let orangeX = String.fromCharCode(117,110,107,110,111,119,110,115,95,103,95,52,48,0);
    let hooksJ = 0.0;
    let confirmationQ: Array<any> = [703, 251];
    let commonH: Map<any, any> = new Map([[String.fromCharCode(110,97,110,111,112,98,95,122,95,57,0),true ], [String.fromCharCode(114,97,116,101,99,116,114,108,95,50,95,51,53,0),true ]]);
   for (let x = 0; x < 1; x++) {
      videof *= 2 * episodeB.size;
   }
   for (let n = 0; n < 2; n++) {
      filld.push((String.fromCharCode(105,0) == orangeX ? filld.length : orangeX.length));
   }
      halfX = `${giftq.size & moduleF.length}`;
      moduleF += `${filld.length << (Math.min(moduleF.length, 5))}`;
   while ((hooksJ - 2.86) < 1.13 || 3.54 < (2.86 - hooksJ)) {
      googleq *= giftq.size;
      break;
   }
   for (let h = 0; h < 1; h++) {
      confirmationQ.push(episodeB.size >> (Math.min(confirmationQ.length, 1)));
   }
   for (let i = 0; i < 2; i++) {
       let tooltips_ = String.fromCharCode(97,116,114,95,110,95,49,55,0);
       let storeX: Map<any, any> = new Map([[String.fromCharCode(112,114,101,101,109,112,116,105,118,101,95,111,95,52,0),702], [String.fromCharCode(103,95,50,95,114,101,102,101,116,99,104,0),27], [String.fromCharCode(101,95,57,56,95,116,101,108,101,103,114,97,0),450]]);
          let emojiR = String.fromCharCode(117,108,112,102,101,99,95,97,95,52,55,0);
          let predictionI = 1;
          let animationh: Map<any, any> = new Map([[String.fromCharCode(108,95,57,57,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0),990], [String.fromCharCode(117,95,53,54,95,112,101,101,107,0),817], [String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,95,99,95,57,50,0),717]]);
         storeX.set(tooltips_, animationh.size >> (Math.min(Math.abs(1), 5)));
         emojiR += `${1 - predictionI}`;
         predictionI |= 3;
         animationh.set(emojiR, emojiR.length ^ predictionI);
      if (storeX.size >= tooltips_.length) {
         tooltips_ += `${(String.fromCharCode(77,0) == tooltips_ ? tooltips_.length : storeX.size)}`;
      }
      for (let y = 0; y < 3; y++) {
         storeX.set(tooltips_, tooltips_.length << (Math.min(Math.abs(3), 2)));
      }
      for (let b = 0; b < 1; b++) {
         storeX = new Map([[`${storeX.size}`, tooltips_.length ^ storeX.size]]);
      }
          let chinay = String.fromCharCode(100,105,118,105,100,111,114,115,95,115,95,49,52,0);
          let disconnectede = true;
          let temperaturez = String.fromCharCode(107,95,51,53,95,115,105,109,105,108,97,114,105,116,121,0);
         storeX.set(tooltips_, (tooltips_.length / (Math.max(5, (disconnectede ? 4 : 4)))));
         chinay += `${temperaturez.length * 1}`;
         disconnectede = chinay.length <= temperaturez.length;
      let minivody = 7628520 <= storeX.size;
      do {
         storeX = new Map([[`${storeX.size}`, 2]]);
         if (minivody) {
            break;
         }
      } while (((3 * storeX.size) == 3) && minivody);
      moduleF = `${googleq + 3}`;
   }
   while (!orangeX.startsWith(`${googleq}`)) {
      orangeX = `${(String.fromCharCode(74,0) == orangeX ? giftq.size : orangeX.length)}`;
      break;
   }
      hooksJ += parseInt(`${hooksJ}`) / (Math.max(episodeB.size, 9));
   for (let i = 0; i < 3; i++) {
      orangeX = `${giftq.size - parseInt(`${hooksJ}`)}`;
   }
      giftq.set(halfX, 1);
       let countryj = 0.0;
       let gesturea = true;
      if ((countryj + 3.83) < 1.46) {
          let nativew = true;
          let catalogb = 2;
          let soundG: Map<any, any> = new Map([[String.fromCharCode(106,95,51,95,104,116,109,108,109,97,114,107,117,112,0),String.fromCharCode(112,105,120,101,108,115,120,95,117,95,57,49,0)], [String.fromCharCode(105,95,50,56,95,99,105,114,99,0),String.fromCharCode(121,95,57,95,109,112,108,97,109,101,0)]]);
          let serviceX = 3.0;
         countryj /= Math.max(1, parseFloat(`${catalogb}`));
         nativew = soundG.size > 74 && nativew;
         catalogb += 1 - parseInt(`${serviceX}`);
         soundG.set(`${serviceX}`, parseInt(`${serviceX}`) >> (Math.min(Math.abs(2), 1)));
      }
         countryj /= Math.max(parseFloat(`${parseInt(`${countryj}`) | 1}`), 2);
         gesturea = 7.9 >= countryj && !gesturea;
      while (4.42 < (1.74 / (Math.max(1, countryj))) || !gesturea) {
          let benefitq: Array<any> = [605, 198, 523];
         gesturea = 5.54 <= countryj;
         benefitq = [benefitq.length + 1];
         break;
      }
      if (countryj == 4.32) {
          let watchi = String.fromCharCode(101,120,116,101,116,110,100,101,100,95,105,95,52,55,0);
          let successj = 2.0;
          let const_0s = String.fromCharCode(99,111,108,100,95,117,95,50,55,0);
          let weibo5: Array<any> = [717, 585, 811];
         countryj /= Math.max(parseFloat(`${2}`), 3);
         watchi += `${weibo5.length % 1}`;
         successj /= Math.max(watchi.length, 5);
         const_0s += `${const_0s.length}`;
         weibo5.push(const_0s.length / (Math.max(6, watchi.length)));
      }
         countryj /= Math.max(2, (parseFloat(`${(gesturea ? 2 : 3) * parseInt(`${countryj}`)}`)));
      hooksJ -= parseInt(`${countryj}`);
   while (2 <= (giftq.size >> (Math.min(moduleF.length, 5)))) {
       let sheetF = String.fromCharCode(98,105,100,105,114,101,99,116,105,111,110,97,108,95,99,95,54,48,0);
       let arean: Map<any, any> = new Map([[String.fromCharCode(100,105,108,97,116,101,95,108,95,55,53,0),267], [String.fromCharCode(104,113,97,100,115,112,95,51,95,50,51,0),300]]);
       let specR: Map<any, any> = new Map([[String.fromCharCode(99,95,55,50,95,99,95,51,52,0),758], [String.fromCharCode(101,95,49,50,0),936]]);
          let math0 = String.fromCharCode(106,95,52,57,95,99,104,105,114,112,0);
         specR = new Map([[`${arean.size}`, 3]]);
         math0 = `${(String.fromCharCode(104,0) == math0 ? math0.length : math0.length)}`;
          let grayS = String.fromCharCode(122,95,51,50,95,114,101,110,97,109,101,0);
         sheetF = `${1 - arean.size}`;
         grayS += `${1 << (Math.min(5, grayS.length))}`;
       let textf = 3.0;
          let spinnerK = 3;
          let vietnamL = String.fromCharCode(97,99,114,111,110,121,109,95,114,95,56,53,0);
          let annerb = false;
         arean = new Map([[vietnamL, parseInt(`${textf}`) | vietnamL.length]]);
         spinnerK ^= spinnerK << (Math.min(5, Math.abs(2)));
         annerb = !annerb;
      if (1 == (sheetF.length >> (Math.min(Math.abs(1), 3))) && (1 >> (Math.min(2, Math.abs(arean.size)))) == 4) {
         arean.set(`${sheetF}`, specR.size - 1);
      }
      for (let g = 0; g < 2; g++) {
         textf /= Math.max(5, parseFloat(`${2}`));
      }
         specR = new Map([[sheetF, sheetF.length << (Math.min(Math.abs(2), 2))]]);
      for (let j = 0; j < 3; j++) {
          let largeK = String.fromCharCode(98,95,55,51,95,100,114,97,119,0);
          let pauseJ = String.fromCharCode(118,105,115,105,116,111,114,95,117,95,53,0);
         sheetF += `${arean.size % (Math.max(2, sheetF.length))}`;
         largeK = `${largeK.length | 2}`;
         pauseJ += `${pauseJ.length - largeK.length}`;
      }
         specR = new Map([[`${arean.size}`, sheetF.length + arean.size]]);
      giftq.set(`${sheetF}`, 3 + sheetF.length);
      break;
   }
      filld.push(googleq << (Math.min(Math.abs(3), 1)));
      hooksJ /= Math.max(3, giftq.size / (Math.max(orangeX.length, 7)));
      googleq *= (String.fromCharCode(82,0) == moduleF ? episodeB.size : moduleF.length);
   while ((orangeX.length >> (Math.min(1, Math.abs(episodeB.size)))) < 1) {
       let gpayN = true;
       let regeng2 = false;
       let spinnerN: Map<any, any> = new Map([[String.fromCharCode(103,95,55,95,115,107,101,116,99,104,0),false ], [String.fromCharCode(115,112,111,110,115,111,114,101,100,95,117,95,53,51,0),false ]]);
       let userT = String.fromCharCode(100,95,57,53,95,107,95,57,56,0);
      while (userT.length > 4) {
         regeng2 = (!regeng2 ? !gpayN : !regeng2);
         break;
      }
          let contextm = 5;
         gpayN = !regeng2 && contextm == 19;
         gpayN = (spinnerN.size | userT.length) == 4;
          let heartw = String.fromCharCode(104,111,115,116,112,111,114,116,102,105,108,101,95,97,95,55,51,0);
         spinnerN.set(`${gpayN}`, 2);
         heartw += `${2 - heartw.length}`;
         userT += `${spinnerN.size - userT.length}`;
         gpayN = (((!gpayN ? 30 : userT.length) | userT.length) == 30);
          let rankX = 5.0;
         regeng2 = userT.length > 55;
         rankX += parseInt(`${rankX}`);
      let upgradeK = 9198886 <= spinnerN.size;
      do {
          let detailU = 3;
          let forwardG = String.fromCharCode(118,95,56,54,95,112,101,97,99,104,0);
          let catalog6: Map<any, any> = new Map([[String.fromCharCode(111,117,116,112,117,116,113,95,112,95,54,48,0),16], [String.fromCharCode(115,95,51,54,95,99,111,100,101,102,0),356], [String.fromCharCode(99,111,110,110,101,99,116,111,114,95,110,95,57,49,0),430]]);
          let favoriteK = String.fromCharCode(111,119,110,101,114,115,95,111,95,53,50,0);
         spinnerN.set(`${gpayN}`, ((gpayN ? 1 : 2) & catalog6.size));
         detailU += 2;
         forwardG = `${(forwardG == String.fromCharCode(99,0) ? detailU : forwardG.length)}`;
         catalog6 = new Map([[forwardG, forwardG.length ^ 2]]);
         favoriteK = `${favoriteK.length & 2}`;
         if (upgradeK) {
            break;
         }
      } while ((!gpayN && (2 & spinnerN.size) <= 4) && upgradeK);
         gpayN = !userT.startsWith(`${gpayN}`);
          let minivod0 = 1;
          let singapore5 = false;
          let privilege9 = 3;
         regeng2 = !gpayN;
         minivod0 %= Math.max(3, ((singapore5 ? 5 : 4) * minivod0));
         singapore5 = minivod0 >= privilege9;
         privilege9 >>= Math.min(2, Math.abs(privilege9 * 2));
         userT += `${(spinnerN.size + (gpayN ? 3 : 1))}`;
      let grayB = gpayN ? !gpayN : gpayN;
      do {
          let customj = 1.0;
         gpayN = 50 <= userT.length;
         customj *= parseFloat(`${parseInt(`${customj}`) & parseInt(`${customj}`)}`);
         if (grayB) {
            break;
         }
      } while (grayB && (userT.length > 5 && gpayN));
      episodeB = new Map([[`${giftq.size}`, 2 ^ filld.length]]);
      break;
   }
      halfX = `${halfX.length | parseInt(`${videof}`)}`;

        return (<View style={{
            width: '100%',
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <AlbumIcon width={70} height={70} style={{
                marginBottom: 20,
                color: colors.button,
            }} />
            <Text style={{
                ...textVariants.header,
                marginBottom: 20,
                textAlign: 'center',
            }}>
                相册访问权限
            </Text>
            <Text style={{
                ...textVariants.subBody,
                marginBottom: 26,
                textAlign: 'center',
                width: '70%',
            }}>
                您还没有开启相册权限，开启后就能访问相册里的视频或上传视频
            </Text>

            <TouchableOpacity onPress={onRequestPermissiobPress} style={{
                backgroundColor: colors.primary,
                paddingHorizontal: 34,
                paddingVertical: 14,
                borderRadius: 50,
            }}>
                <Text style={{ color: dark ? 'black' : 'white' }}>允许访问相册</Text>
            </TouchableOpacity>
        </View>);
    }, [textVariants, colors]);

    useEffect(() => {
        if (uploadProgress !== undefined && uploadProgress >= 100) {
            clearInterval(progressTimer);

            setUploadProgress(undefined);
            setProgressTimer(undefined);

            IRouterComponent.toName('uploadVideoPreview', {
                params: {
                    assets: videoSelected,
                },
            });

            

            
            

            
            
            
            
            
            
        }
    }, [uploadProgress]);

    return (
        <ScreenContainer>
            <View style={styles.titleTextContainer}>
                <Text style={{ ...textVariants.bigHeader, ...styles.titleText }}>上传视频</Text>

                <TouchableOpacity onPress={onCheckHistoryPress}>
                    <Text style={{ color: colors.text }}>
                        查看记录
                    </Text>
                </TouchableOpacity>
            </View>

            {isGrantPhotePermission
                ? <GrantedBody />
                : <UngrantedBody />
            }

            {uploadProgress !== undefined &&
                <UploadProgressOverlay
                    value={uploadProgress}
                    backgroundColor={'#ffffffaa'}
                />
            }

            {/* {showSuccess &&
                <UploadResultOverlay

                />
            } */}
        </ScreenContainer>
    );
}

const createStyles = ({ colors }: any) => StyleSheet.create({
    titleTextContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 20,
        paddingRight: 0,
        zIndex: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleText: {
        color: colors.text,
        fontSize: 20,
    },
});