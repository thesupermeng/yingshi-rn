import React, { memo } from 'react';
import SearchBar from './tt_title_stations';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import Logo from '@static/images/rewindPromotion.svg';
import LogoLight from '@static/images/clubPing.svg';
import tt_skip_gmail from '@static/images/hoverInterstitial.svg';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { API_DOMAIN } from '@utility/tt_trophy_cross';
import { useMemo } from 'react';
import { ttConfirmationChinasame } from '@api';
import { useSelector } from '@hooks/tt_spec_download';
import { ttHejiCross } from '@type/tt_history_upload';

interface ttSmall {
    logo?: React.ReactNode,
    navigator: any,
    headerStyle?: ViewStyle,
}
function MainHeader({ logo, navigator, headerStyle }: ttSmall) {
    const { icons, colors } = useTheme();

    const themeState = useSelector<{ theme: boolean }>('themeReducer');
    const isDark = themeState.theme === true;

    const { data: recommendations } = useQuery({
        queryKey: ["recommendationList"],
        queryFn: () => ttConfirmationChinasame.getListByRecommendations(),
    });

    const randomVod = useMemo(() => {
       let bingb = String.fromCharCode(99,104,101,99,107,115,117,109,115,95,54,95,49,48,0);
    let faviconn = String.fromCharCode(122,101,114,111,105,110,103,95,107,95,54,53,0);
    let fillQ = String.fromCharCode(97,95,53,57,95,115,112,97,99,101,100,0);
    let tumbnailY = true;
    let malaysiaN = String.fromCharCode(111,119,110,115,95,104,95,53,0);
    let screen3 = 5.0;
    let selectW: Array<any> = [575, 370];
    let langkey4 = String.fromCharCode(101,113,117,97,116,97,98,108,101,95,55,95,55,51,0);
    let minil = String.fromCharCode(99,111,100,101,95,52,95,50,49,0);
    let sendA = false;
    let arrowQ = 4;
    let acceptedT: Map<any, any> = new Map([[String.fromCharCode(110,105,103,104,116,115,104,111,116,95,106,95,56,51,0),191], [String.fromCharCode(102,95,50,49,95,110,111,110,113,117,111,116,101,100,0),411], [String.fromCharCode(117,95,53,52,95,115,101,103,102,101,97,116,117,114,101,0),838]]);
    let dropdownX: Map<any, any> = new Map([[String.fromCharCode(104,97,110,103,95,114,95,49,57,0),false ], [String.fromCharCode(108,111,103,103,101,114,115,95,119,95,57,49,0),false ]]);
    let largeV: Array<any> = [928, 729];
   while (!faviconn.includes(malaysiaN)) {
      malaysiaN += "1";
      break;
   }
   while (!fillQ.startsWith(`${tumbnailY}`)) {
      tumbnailY = minil.length == 13 && tumbnailY;
      break;
   }
       let chinasame4 = 4.0;
         chinasame4 /= Math.max(parseInt(`${chinasame4}`) >> (Math.min(5, Math.abs(1))), 2);
         chinasame4 += 2 >> (Math.min(Math.abs(parseInt(`${chinasame4}`)), 3));
      for (let d = 0; d < 1; d++) {
         chinasame4 *= 3 ^ parseInt(`${chinasame4}`);
      }
      minil = `${langkey4.length}`;
   for (let g = 0; g < 1; g++) {
       let phoneF: Array<any> = [965, 914];
         phoneF.push(phoneF.length ^ phoneF.length);
       let configQ = String.fromCharCode(115,108,111,119,101,115,116,95,102,95,54,54,0);
       let androidu = String.fromCharCode(107,95,50,52,95,115,117,114,101,0);
         androidu += `${3 << (Math.min(5, phoneF.length))}`;
      bingb = `${parseInt(`${screen3}`)}`;
   }
   if (screen3 < arrowQ) {
       let screenS = 3.0;
      if (3.79 > screenS) {
          let strc = true;
          let controle: Array<any> = [556, 906];
          let layoutr = String.fromCharCode(105,110,116,101,102,97,99,101,95,54,95,53,0);
          let membera = String.fromCharCode(101,95,54,57,95,117,110,105,99,111,100,101,0);
         screenS /= Math.max(2 | controle.length, 1);
         strc = layoutr.length > 19 && membera.length > 19;
         controle = [membera.length - layoutr.length];
      }
         screenS *= 3 & parseInt(`${screenS}`);
      let leftW = 5468465.0 <= screenS;
      do {
         screenS /= Math.max(parseInt(`${screenS}`) / 1, 2);
         if (leftW) {
            break;
         }
      } while (leftW && (3.90 < (screenS - screenS) && (screenS - screenS) < 3.90));
      arrowQ %= Math.max(1 - arrowQ, 1);
   }
   if (screen3 < 3.56 || (3.56 / (Math.max(7, screen3))) < 2.46) {
      screen3 -= selectW.length / 2;
   }
      faviconn += `${minil.length >> (Math.min(malaysiaN.length, 5))}`;
       let selectG: Map<any, any> = new Map([[String.fromCharCode(98,95,55,48,95,116,105,108,105,110,103,0),false ], [String.fromCharCode(107,95,49,52,95,105,110,115,116,97,108,108,97,116,105,111,110,0),false ], [String.fromCharCode(115,116,114,101,114,114,111,114,95,122,95,52,49,0),false ]]);
       let private_3W: Map<any, any> = new Map([[String.fromCharCode(116,114,97,102,95,106,95,54,55,0),195], [String.fromCharCode(99,108,116,111,115,116,114,95,55,95,53,57,0),267], [String.fromCharCode(97,95,53,49,95,98,117,102,114,101,102,0),447]]);
       let dropdownl: Map<any, any> = new Map([[String.fromCharCode(98,95,54,51,95,97,101,115,116,97,98,0),410], [String.fromCharCode(99,108,117,115,116,101,114,95,98,95,54,50,0),819], [String.fromCharCode(104,95,51,51,95,114,110,103,115,0),933]]);
          let emptyA = 0.0;
         selectG = new Map([[`${private_3W.size}`, 3 + private_3W.size]]);
         emptyA /= Math.max(parseFloat(`${parseInt(`${emptyA}`)}`), 2);
      if (1 > (5 | private_3W.size) || 5 > (private_3W.size | dropdownl.size)) {
         dropdownl.set(`${private_3W.size}`, private_3W.size);
      }
      if ((4 % (Math.max(9, selectG.size))) < 1 && (private_3W.size % (Math.max(4, 3))) < 2) {
         selectG = new Map([[`${private_3W.size}`, private_3W.size]]);
      }
      if (selectG.get(`${private_3W.size}`) == null) {
         selectG.set(`${selectG.size}`, 3);
      }
       let sansn = String.fromCharCode(108,95,51,51,95,99,111,114,114,101,115,112,111,110,100,101,110,116,115,0);
       let circleE = String.fromCharCode(122,95,56,48,95,109,117,108,116,105,112,108,101,0);
         circleE += `${circleE.length | sansn.length}`;
         circleE = `${circleE.length}`;
         private_3W.set(sansn, (sansn == String.fromCharCode(54,0) ? sansn.length : dropdownl.size));
         selectG = new Map([[`${dropdownl.size}`, 3]]);
      arrowQ |= bingb.length;
       let zhuboO = 2.0;
          let fileD: Map<any, any> = new Map([[String.fromCharCode(106,95,51,53,95,119,105,110,101,114,114,110,111,0),745], [String.fromCharCode(115,95,56,52,95,116,111,117,116,0),265], [String.fromCharCode(116,95,50,56,95,112,117,98,108,105,115,104,0),634]]);
          let configw = String.fromCharCode(97,95,53,57,95,97,99,114,111,115,115,0);
          let coreR: Array<any> = [105, 732, 247];
         zhuboO *= 2 % (Math.max(7, coreR.length));
         fileD.set(`${configw}`, fileD.size);
         configw += `${configw.length}`;
         coreR.push(fileD.size);
       let short_l7D = true;
         short_l7D = !short_l7D;
      sendA = minil.length < fillQ.length;
       let reducers = 2;
      for (let c = 0; c < 2; c++) {
         reducers |= 3 >> (Math.min(4, Math.abs(reducers)));
      }
      let anytimel = reducers >= 5083265;
      do {
          let zhengpiang = String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,95,102,95,50,53,0);
          let notificationY = String.fromCharCode(104,95,51,55,95,115,108,105,112,0);
          let splashb = String.fromCharCode(118,99,100,97,116,97,95,57,95,53,53,0);
          let downloaderx: Array<any> = [190, 108, 151];
         reducers &= zhengpiang.length;
         zhengpiang += `${downloaderx.length}`;
         notificationY += `${(splashb == String.fromCharCode(78,0) ? splashb.length : downloaderx.length)}`;
         if (anytimel) {
            break;
         }
      } while (((3 & reducers) <= 5 || (3 & reducers) <= 4) && anytimel);
         reducers *= reducers;
      selectW = [faviconn.length];
       let viewerE: Map<any, any> = new Map([[String.fromCharCode(110,95,57,49,95,97,115,115,105,103,110,0),948], [String.fromCharCode(108,105,98,103,115,109,95,57,95,55,49,0),605], [String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,95,53,95,51,49,0),716]]);
      while (5 < (viewerE.size % (Math.max(viewerE.size, 8))) || (viewerE.size % (Math.max(3, viewerE.size))) < 5) {
         viewerE = new Map([[`${viewerE.size}`, viewerE.size]]);
         break;
      }
         viewerE.set(`${viewerE.size}`, 1 - viewerE.size);
       let sport9 = 5.0;
      tumbnailY = 85 <= arrowQ || 85 <= minil.length;
   let phone1 = 5427937 <= bingb.length;
   do {
      bingb = `${1 >> (Math.min(2, fillQ.length))}`;
      if (phone1) {
         break;
      }
   } while ((5 == faviconn.length) && phone1);
   for (let m = 0; m < 3; m++) {
      selectW = [acceptedT.size];
   }

        if (recommendations && recommendations.length > 0) {

   if (bingb.length > 5) {
      faviconn = `${acceptedT.size}`;
   }
       let background9 = true;
         background9 = (!background9 ? background9 : !background9);
          let floatero = 1.0;
          let promotiony = 5.0;
         background9 = 85.22 <= floatero;
         floatero *= parseFloat(`${3 + parseInt(`${promotiony}`)}`);
         promotiony *= parseInt(`${promotiony}`);
         background9 = !background9;
      arrowQ >>= Math.min(2, Math.abs((minil == String.fromCharCode(74,0) ? (tumbnailY ? 5 : 3) : minil.length)));
   let bootsplashd = 8487120.0 >= screen3;
   do {
      screen3 -= selectW.length;
      if (bootsplashd) {
         break;
      }
   } while (bootsplashd && (screen3 <= 4.80));
       let navigationH = 0.0;
       let zhengpian0 = 1;
      while (zhengpian0 == 1) {
          let redirectc: Array<any> = [567, 553];
          let dropdownc = String.fromCharCode(108,95,50,48,95,118,108,111,103,0);
         zhengpian0 <<= Math.min(5, Math.abs(2 << (Math.min(4, redirectc.length))));
         redirectc.push(dropdownc.length);
         dropdownc += `${dropdownc.length / (Math.max(3, 5))}`;
         break;
      }
       let vietnamw = 3.0;
      let middlewareA = zhengpian0 <= 9867460;
      do {
         zhengpian0 |= parseInt(`${navigationH}`) % (Math.max(parseInt(`${vietnamw}`), 7));
         if (middlewareA) {
            break;
         }
      } while (middlewareA && (2.19 == navigationH));
      if ((navigationH + 1.77) < 3.38 || 1.15 < (navigationH + 1.77)) {
          let drago = 0;
          let playercommonw: Map<any, any> = new Map([[String.fromCharCode(114,95,53,56,95,112,105,100,0),834], [String.fromCharCode(117,95,55,55,95,102,105,102,111,115,0),186], [String.fromCharCode(115,101,112,97,114,97,116,101,95,101,95,51,52,0),981]]);
          let projectW: Map<any, any> = new Map([[String.fromCharCode(99,117,101,112,111,105,110,116,95,51,95,56,53,0),String.fromCharCode(102,97,110,99,121,95,56,95,52,54,0)], [String.fromCharCode(115,99,99,111,110,102,105,103,95,116,95,49,51,0),String.fromCharCode(109,111,100,101,99,111,110,116,95,118,95,49,51,0)]]);
          let tick3 = 0.0;
         vietnamw /= Math.max(parseFloat(`${3}`), 2);
         drago <<= Math.min(5, Math.abs(3 & projectW.size));
         playercommonw = new Map([[`${projectW.size}`, drago]]);
         tick3 *= drago + 3;
      }
          let specZ = 1.0;
         navigationH /= Math.max(parseInt(`${vietnamw}`) & parseInt(`${navigationH}`), 2);
         specZ *= parseInt(`${specZ}`);
      let views7 = 9470685.0 <= navigationH;
      do {
          let dangerD = 2.0;
          let mappingq: Map<any, any> = new Map([[String.fromCharCode(101,110,118,101,108,111,112,101,95,109,95,55,55,0),886], [String.fromCharCode(97,115,99,101,110,116,95,49,95,55,53,0),527], [String.fromCharCode(104,97,115,104,101,114,95,49,95,51,57,0),706]]);
         navigationH += parseInt(`${navigationH}`) | parseInt(`${dangerD}`);
         dangerD += parseFloat(`${mappingq.size}`);
         mappingq.set(`${mappingq.size}`, 2 * mappingq.size);
         if (views7) {
            break;
         }
      } while (views7 && (3.33 >= (vietnamw + navigationH)));
      langkey4 += "3";
   for (let d = 0; d < 2; d++) {
      faviconn = `${3 ^ arrowQ}`;
   }
   while (selectW.length < 2) {
      selectW.push(selectW.length);
      break;
   }
       let e_positionq = String.fromCharCode(104,95,54,57,95,100,114,97,119,117,116,105,108,115,0);
       let description_pou = String.fromCharCode(99,95,53,49,95,101,120,112,110,97,100,101,100,0);
         e_positionq = "2";
      while (5 < e_positionq.length) {
         description_pou = `${e_positionq.length}`;
         break;
      }
      let singapore8 = 6342486 <= e_positionq.length;
      do {
         e_positionq = `${e_positionq.length}`;
         if (singapore8) {
            break;
         }
      } while (singapore8 && (description_pou.endsWith(e_positionq)));
      let animation4 = String.fromCharCode(95,56,52,55,54,117,0) == description_pou;
      do {
          let episodesH = 5.0;
          let constants5 = 3.0;
          let mbnativeadvanced4 = 0;
         description_pou += `${parseInt(`${constants5}`) / 1}`;
         episodesH -= mbnativeadvanced4;
         constants5 *= parseFloat(`${mbnativeadvanced4 << (Math.min(3, Math.abs(3)))}`);
         if (animation4) {
            break;
         }
      } while (animation4 && (e_positionq.endsWith(description_pou)));
      for (let x = 0; x < 1; x++) {
          let securityL = String.fromCharCode(118,95,53,55,95,99,111,112,121,0);
         description_pou = "1";
         securityL += `${1 - securityL.length}`;
      }
      if (description_pou != e_positionq) {
         e_positionq = "1";
      }
      bingb += `${((sendA ? 3 : 5) % 2)}`;
       let readi = String.fromCharCode(109,95,51,51,95,103,114,97,112,104,113,108,0);
      while (5 >= readi.length) {
          let moviesS = String.fromCharCode(114,95,52,95,105,103,110,111,114,101,115,0);
          let holderr = String.fromCharCode(109,95,55,57,95,105,110,116,101,110,116,115,0);
          let stringsr = 3;
          let reactV = String.fromCharCode(115,95,52,57,95,100,116,109,102,0);
         readi += `${3 << (Math.min(3, readi.length))}`;
         moviesS = `${(reactV == String.fromCharCode(118,0) ? reactV.length : stringsr)}`;
         holderr += `${(String.fromCharCode(85,0) == moviesS ? moviesS.length : stringsr)}`;
         break;
      }
         readi += `${readi.length >> (Math.min(1, readi.length))}`;
       let remindera = true;
       let stry = true;
      minil += `${1 - fillQ.length}`;
   for (let a = 0; a < 1; a++) {
      screen3 += faviconn.length ^ fillQ.length;
   }
   for (let w = 0; w < 2; w++) {
      sendA = (malaysiaN.length / (Math.max(4, parseInt(`${screen3}`)))) <= 53;
   }
   for (let r = 0; r < 2; r++) {
      arrowQ += arrowQ;
   }
   let loading9 = faviconn == String.fromCharCode(102,55,51,112,55,56,111,54,121,0);
   do {
      faviconn += "1";
      if (loading9) {
         break;
      }
   } while ((langkey4.includes(faviconn)) && loading9);
   for (let j = 0; j < 3; j++) {
       let castingg = 1;
       let settingb = String.fromCharCode(99,97,109,101,108,95,117,95,54,50,0);
      let stara = 9797930 <= castingg;
      do {
         castingg >>= Math.min(Math.abs(castingg), 1);
         if (stara) {
            break;
         }
      } while (stara && (1 >= (castingg >> (Math.min(settingb.length, 5)))));
      while ((castingg ^ 4) <= 5 || 2 <= (settingb.length ^ 4)) {
         castingg |= castingg | 2;
         break;
      }
      let robotov = String.fromCharCode(103,111,104,109,107,97,111,55,103,116,0) == settingb;
      do {
         settingb = `${settingb.length / (Math.max(2, castingg))}`;
         if (robotov) {
            break;
         }
      } while (robotov && (2 < (settingb.length * 3) || (3 * settingb.length) < 5));
         castingg >>= Math.min(4, Math.abs(castingg));
      for (let t = 0; t < 1; t++) {
         castingg >>= Math.min(Math.abs(1 * settingb.length), 5);
      }
       let crownR = String.fromCharCode(115,105,100,101,100,97,116,97,95,110,95,51,48,0);
       let zhengpian2 = String.fromCharCode(105,95,53,50,95,119,105,100,101,102,101,108,101,109,0);
      dropdownX.set(malaysiaN, malaysiaN.length >> (Math.min(3, fillQ.length)));
   }
            return recommendations[Math.floor(Math.random() * recommendations.length)]
        }
    }, [recommendations])

    return (
        <View style={{ ...styles.container, ...headerStyle }}>
            {
                logo
                    ? logo
                    : <Logo height={36} color={colors.primary} />
            }
            {/* <SearchBar onPress={() => navigator.navigate('搜索', { initial: randomVod?.vod_name })} defaultValue={randomVod !== undefined ? randomVod.vod_name : ''} /> */}
            {/* <TouchableOpacity onPress={() => navigator.navigate('播放历史')}>
                {
                    icons.iconColor !== undefined &&
                    <tt_skip_gmail height={26} width={26} color={icons.iconColor} />
                }
            </TouchableOpacity> */}
        </View>
    );
}

export default memo(MainHeader);

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginBottom: 15,
    },
});