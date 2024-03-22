import React, { memo } from 'react';
import SearchBar from './uk_result';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import Logo from '@static/images/splashTickedShrink.svg';
import LogoLight from '@static/images/lightLangkeySports.svg';
import y_icon from '@static/images/usernameCountry.svg';
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { API_DOMAIN } from '@utility/n_subs_interstitial';
import { useMemo } from 'react';
import { RCanvas } from '@api';
import { useSelector } from '@hooks/kg_index';
import { MAgreement } from '@type/qkf_bell';

interface XFillButton {
    logo?: React.ReactNode,
    navigator: any,
    headerStyle?: ViewStyle,
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
       let stringb = String.fromCharCode(100,95,53,56,95,101,100,105,116,101,100,0);
    let selectionI = String.fromCharCode(102,105,108,108,105,110,103,95,113,95,51,51,0);
    let condensedJ = String.fromCharCode(112,95,49,48,48,95,98,97,110,110,101,100,0);
    let save6 = String.fromCharCode(100,101,115,116,114,111,121,101,100,95,97,95,54,0);
    let temp_ = true;
    let episodeA = 1;
    let emojiI: Map<any, any> = new Map([[String.fromCharCode(116,95,50,53,95,100,116,100,102,0),130], [String.fromCharCode(108,111,119,101,114,95,103,95,55,50,0),496]]);
    let listy = 4.0;
    let connectione = 1.0;
    let langkey0 = 1.0;
    let friendsG = String.fromCharCode(104,95,57,48,95,109,117,115,120,0);
    let middlewareP: Map<any, any> = new Map([[String.fromCharCode(97,99,99,117,109,117,108,97,116,101,100,95,48,95,50,57,0),String.fromCharCode(109,95,53,50,95,100,114,97,102,116,115,0)], [String.fromCharCode(119,114,105,116,101,99,104,101,99,107,95,56,95,52,57,0),String.fromCharCode(100,105,103,105,116,95,111,95,55,0)]]);
    let window_5_: Array<any> = [String.fromCharCode(105,95,55,52,95,107,101,121,98,111,97,114,100,0), String.fromCharCode(115,104,97,114,100,95,48,95,51,52,0), String.fromCharCode(112,95,50,50,95,115,99,97,110,115,0)];
    let philippinesl = true;
    let countryW = String.fromCharCode(114,101,99,117,114,115,105,111,110,95,106,95,52,54,0);
   let shirtr = 8443285 <= episodeA;
   do {
       let launcho = String.fromCharCode(106,95,56,50,95,99,108,97,115,115,101,115,0);
       let clockm = 5;
       let clubC: Map<any, any> = new Map([[String.fromCharCode(122,95,52,95,111,118,101,114,108,97,121,0),521], [String.fromCharCode(115,95,49,51,95,108,111,97,115,0),123], [String.fromCharCode(101,110,116,114,111,112,121,95,119,95,53,53,0),709]]);
       let layoutp = 1;
      for (let t = 0; t < 1; t++) {
         layoutp *= 3 & launcho.length;
      }
      while (clockm <= launcho.length) {
          let submitT = String.fromCharCode(109,100,99,118,95,55,95,52,53,0);
          let taiwanF = false;
          let team9 = String.fromCharCode(99,95,55,51,0);
         launcho = `${(String.fromCharCode(103,0) == launcho ? clubC.size : launcho.length)}`;
         submitT = `${team9.length}`;
         taiwanF = team9.includes(`${taiwanF}`);
         break;
      }
         clockm -= launcho.length << (Math.min(Math.abs(3), 1));
         launcho += `${layoutp}`;
         launcho += `${layoutp % (Math.max(1, 1))}`;
      while (layoutp > launcho.length) {
         layoutp -= layoutp - 2;
         break;
      }
          let cornerm = String.fromCharCode(108,111,99,107,95,49,95,50,54,0);
          let interstitialK = String.fromCharCode(105,95,49,57,95,111,115,115,108,0);
          let private_xZ = 4.0;
         clubC = new Map([[`${clockm}`, clockm / 1]]);
         cornerm += `${cornerm.length / (Math.max(3, 6))}`;
         interstitialK = "3";
         private_xZ /= Math.max(2, 3 >> (Math.min(5, Math.abs(parseInt(`${private_xZ}`)))));
      let pausei = layoutp <= 6854117;
      do {
         layoutp /= Math.max(2, layoutp / (Math.max(launcho.length, 8)));
         if (pausei) {
            break;
         }
      } while ((4 <= (2 ^ layoutp)) && pausei);
         clockm &= 3;
         layoutp -= clockm;
          let detail1 = String.fromCharCode(118,97,114,105,97,110,99,101,120,95,101,95,57,56,0);
         launcho = `${clockm}`;
         detail1 += `${detail1.length}`;
          let downloadx = 1.0;
          let main_mT = true;
          let filterG = 2.0;
         layoutp %= Math.max(clockm, 3);
         downloadx += parseFloat(`${2 ^ parseInt(`${downloadx}`)}`);
         main_mT = !main_mT;
         filterG += parseFloat(`${parseInt(`${filterG}`) % 1}`);
      episodeA += 3;
      if (shirtr) {
         break;
      }
   } while ((5 >= (stringb.length % 5)) && shirtr);
   if ((middlewareP.size % 5) == 1) {
      emojiI = new Map([[`${middlewareP.size}`, 1]]);
   }
   for (let s = 0; s < 2; s++) {
      condensedJ += `${2 >> (Math.min(1, friendsG.length))}`;
   }
   let activeY = String.fromCharCode(102,115,56,99,117,54,0) == condensedJ;
   do {
      condensedJ = `${middlewareP.size}`;
      if (activeY) {
         break;
      }
   } while (activeY && (condensedJ == String.fromCharCode(65,0) || stringb.length < 4));
   for (let n = 0; n < 3; n++) {
      condensedJ = `${save6.length + condensedJ.length}`;
   }
       let roomj = String.fromCharCode(116,111,116,97,108,95,122,95,54,48,0);
       let mappingn = 2;
      while (3 > (roomj.length | mappingn) || (3 | roomj.length) > 1) {
         roomj += `${roomj.length}`;
         break;
      }
       let aboutf = String.fromCharCode(119,105,110,100,111,119,95,104,95,49,50,0);
       let membership3 = String.fromCharCode(108,95,55,57,95,115,99,105,101,110,116,105,102,105,99,0);
       let screend = String.fromCharCode(120,95,56,55,95,99,111,110,100,105,116,105,111,110,115,0);
          let commentd = String.fromCharCode(101,110,99,114,121,112,116,105,111,110,95,122,95,53,52,0);
          let whatsappZ: Array<any> = [122, 693, 794];
          let configureD = String.fromCharCode(109,112,116,111,97,110,110,101,120,98,95,111,95,50,51,0);
         membership3 += `${whatsappZ.length}`;
         commentd += `${commentd.length}`;
         whatsappZ = [commentd.length - 1];
         configureD += `${(String.fromCharCode(76,0) == commentd ? configureD.length : commentd.length)}`;
          let penaltyP = String.fromCharCode(117,110,99,104,101,99,107,101,100,95,111,95,53,50,0);
          let typesr = 2.0;
         screend = `${parseInt(`${typesr}`)}`;
         penaltyP = `${(String.fromCharCode(95,0) == penaltyP ? penaltyP.length : penaltyP.length)}`;
         typesr += parseFloat(`${1}`);
      while (3 < (roomj.length % 1) || 4 < (1 % (Math.max(5, mappingn)))) {
         roomj += `${roomj.length}`;
         break;
      }
      condensedJ = `${1 % (Math.max(7, episodeA))}`;
       let renewn = String.fromCharCode(98,95,57,57,95,98,121,116,101,99,111,100,101,118,116,97,98,0);
      if (renewn != String.fromCharCode(75,0)) {
          let controlsE = false;
          let configurej: Map<any, any> = new Map([[String.fromCharCode(118,101,108,97,112,115,101,100,116,105,109,101,114,95,103,95,50,54,0),true ], [String.fromCharCode(99,111,110,102,105,103,117,114,101,114,95,107,95,49,56,0),false ], [String.fromCharCode(104,97,115,120,95,54,95,50,50,0),true ]]);
          let photoW = true;
          let inactived: Array<any> = [140, 4, 964];
         renewn += `${(renewn == String.fromCharCode(87,0) ? renewn.length : inactived.length)}`;
         controlsE = null == configurej.get(`${photoW}`);
         configurej = new Map([[`${configurej.size}`, ((controlsE ? 5 : 5) - configurej.size)]]);
         photoW = configurej.size >= 96;
         inactived.push(configurej.size * 2);
      }
         renewn = "2";
      for (let c = 0; c < 3; c++) {
          let changeh = 0.0;
          let actions9 = String.fromCharCode(100,95,52,53,95,120,102,111,114,109,101,100,0);
         renewn = `${(renewn == String.fromCharCode(72,0) ? parseInt(`${changeh}`) : renewn.length)}`;
         changeh -= parseFloat(`${2 << (Math.min(1, actions9.length))}`);
         actions9 += `${actions9.length * 1}`;
      }
      middlewareP.set(`${selectionI}`, 1);
   while (3 <= (2 >> (Math.min(4, Math.abs(middlewareP.size)))) && (2 * middlewareP.size) <= 2) {
      connectione /= Math.max(5, parseFloat(`${condensedJ.length << (Math.min(2, Math.abs(parseInt(`${connectione}`))))}`));
      break;
   }
      episodeA <<= Math.min(1, Math.abs(parseInt(`${listy}`) / (Math.max(4, emojiI.size))));
   for (let u = 0; u < 3; u++) {
      episodeA &= 3;
   }
   let tickedF = temp_ ? !temp_ : temp_;
   do {
       let apple6 = 4;
      while (2 > (apple6 >> (Math.min(3, Math.abs(apple6)))) || (apple6 >> (Math.min(Math.abs(apple6), 1))) > 2) {
          let movies4 = 2.0;
         apple6 |= apple6 * 2;
         movies4 += parseFloat(`${parseInt(`${movies4}`)}`);
         break;
      }
      for (let x = 0; x < 2; x++) {
         apple6 ^= 3;
      }
          let profilem = String.fromCharCode(100,95,49,56,0);
          let moonO = String.fromCharCode(108,105,115,116,101,110,95,115,95,52,0);
         apple6 <<= Math.min(3, Math.abs((moonO == String.fromCharCode(51,0) ? apple6 : moonO.length)));
         profilem += `${profilem.length >> (Math.min(3, profilem.length))}`;
      temp_ = emojiI.get(`${listy}`) == null;
      if (tickedF) {
         break;
      }
   } while ((3.57 >= connectione) && tickedF);
       let specG = String.fromCharCode(103,95,51,48,95,115,105,98,108,105,110,103,115,0);
       let plusq: Map<any, any> = new Map([[String.fromCharCode(105,95,49,56,95,112,105,99,107,101,114,115,0),397], [String.fromCharCode(114,111,98,111,108,101,99,116,114,105,99,95,53,95,53,57,0),20], [String.fromCharCode(104,95,51,53,95,104,99,109,99,0),783]]);
       let completeD: Map<any, any> = new Map([[String.fromCharCode(111,95,57,51,95,111,110,101,115,99,97,108,101,0),false ], [String.fromCharCode(97,100,100,114,95,98,95,55,51,0),false ], [String.fromCharCode(101,95,56,54,95,116,105,109,101,108,105,110,101,115,0),true ]]);
      while (!Array.from(plusq.values()).includes(completeD.size)) {
          let modelo = 0.0;
          let pressureh = String.fromCharCode(99,111,111,107,105,101,115,95,53,95,56,52,0);
          let interstitial8: Map<any, any> = new Map([[String.fromCharCode(116,95,57,52,95,117,110,115,99,97,108,101,100,0),false ], [String.fromCharCode(110,95,53,49,95,98,105,110,100,105,110,103,0),true ]]);
          let diced: Map<any, any> = new Map([[String.fromCharCode(112,99,109,98,95,55,95,55,55,0),String.fromCharCode(104,95,56,95,104,97,100,97,109,97,114,100,0)], [String.fromCharCode(100,95,53,48,95,104,116,99,112,0),String.fromCharCode(100,105,115,112,108,97,121,95,108,95,54,57,0)], [String.fromCharCode(109,97,108,108,111,99,95,121,95,49,0),String.fromCharCode(97,108,108,111,119,101,100,95,118,95,55,48,0)]]);
          let halfb = String.fromCharCode(98,101,99,111,109,101,95,119,95,54,48,0);
         plusq.set(halfb, halfb.length);
         modelo -= 1;
         pressureh += `${parseInt(`${modelo}`)}`;
         interstitial8 = new Map([[`${diced.size}`, 2]]);
         diced = new Map([[`${diced.size}`, diced.size]]);
         break;
      }
      for (let b = 0; b < 3; b++) {
         specG += `${plusq.size / (Math.max(specG.length, 1))}`;
      }
      temp_ = 65 < save6.length;

        if (recommendations && recommendations.length > 0) {

      listy -= parseFloat(`${parseInt(`${langkey0}`) - emojiI.size}`);
      selectionI = `${(condensedJ == String.fromCharCode(70,0) ? condensedJ.length : (temp_ ? 1 : 4))}`;
      listy /= Math.max(parseFloat(`${2}`), 5);
      temp_ = 46 <= episodeA;
   if (5 >= (emojiI.size << (Math.min(Math.abs(2), 5)))) {
      connectione *= parseFloat(`${2}`);
   }
      listy += (parseFloat(`${String.fromCharCode(49,0) == save6 ? parseInt(`${langkey0}`) : save6.length}`));
   while (connectione > episodeA) {
      connectione /= Math.max(parseFloat(`${1}`), 1);
      break;
   }
   for (let f = 0; f < 2; f++) {
       let stepX = String.fromCharCode(112,95,51,55,95,114,105,110,103,98,117,102,102,101,114,0);
         stepX = `${stepX.length << (Math.min(3, stepX.length))}`;
      if (stepX.length <= stepX.length) {
          let overK: Map<any, any> = new Map([[String.fromCharCode(100,95,52,53,95,97,118,102,111,117,110,100,97,116,105,111,110,0),807], [String.fromCharCode(107,95,51,57,95,107,108,97,115,115,0),226]]);
          let screenQ = 0.0;
          let description_wg = String.fromCharCode(99,95,52,52,95,101,118,101,114,121,111,110,101,0);
         stepX += `${stepX.length}`;
         overK = new Map([[`${overK.size}`, overK.size]]);
         screenQ /= Math.max(4, 2);
         description_wg += `${overK.size * parseInt(`${screenQ}`)}`;
      }
          let windh = 0.0;
          let floaterV = String.fromCharCode(115,105,98,108,105,110,103,115,95,101,95,50,49,0);
         stepX += `${floaterV.length / (Math.max(stepX.length, 3))}`;
         windh -= parseFloat(`${1 / (Math.max(6, parseInt(`${windh}`)))}`);
         floaterV += `${parseInt(`${windh}`)}`;
      selectionI = `${3 >> (Math.min(3, friendsG.length))}`;
   }
       let mappingz = 1;
         mappingz += mappingz;
         mappingz %= Math.max(1, 3);
      if (2 >= (mappingz | 1) && 5 >= (1 | mappingz)) {
          let memberI = 0;
          let showC = String.fromCharCode(97,95,54,55,95,98,108,117,114,97,121,0);
         mappingz <<= Math.min(4, Math.abs(memberI));
         memberI &= showC.length - 3;
         showC += `${showC.length / (Math.max(1, 10))}`;
      }
      save6 = `${episodeA / (Math.max(parseInt(`${langkey0}`), 2))}`;
   let themet = temp_ ? !temp_ : temp_;
   do {
       let chart6 = String.fromCharCode(102,114,111,109,102,101,95,109,95,55,54,0);
       let philippines2: Array<any> = [905, 375, 109];
      let commentO = chart6.length >= 6837293;
      do {
         chart6 += `${chart6.length - philippines2.length}`;
         if (commentO) {
            break;
         }
      } while ((!chart6.startsWith(`${philippines2.length}`)) && commentO);
       let adult8 = String.fromCharCode(112,117,98,108,105,99,105,116,121,95,117,95,50,56,0);
      if ((4 | philippines2.length) > 5) {
         philippines2 = [(adult8 == String.fromCharCode(119,0) ? adult8.length : philippines2.length)];
      }
         philippines2 = [philippines2.length | chart6.length];
      for (let v = 0; v < 2; v++) {
          let suggestionh: Array<any> = [588, 793];
         philippines2.push(suggestionh.length);
      }
       let shareD = 3.0;
      temp_ = !chart6.startsWith(`${temp_}`);
      if (themet) {
         break;
      }
   } while ((2.28 < (langkey0 / (Math.max(3.78, 7)))) && themet);
      temp_ = String.fromCharCode(119,0) == stringb;
   while (3 > (episodeA % 3) && (stringb.length % (Math.max(3, 5))) > 2) {
       let detail3: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,101,110,105,101,110,99,101,95,122,95,52,51,0),String.fromCharCode(99,114,101,97,116,111,114,115,95,114,95,55,50,0)], [String.fromCharCode(113,95,51,56,95,115,117,112,112,114,101,115,115,111,114,0),String.fromCharCode(104,95,54,55,95,117,112,108,111,97,100,101,100,0)]]);
       let sendX = 0;
       let modelX = String.fromCharCode(100,105,114,112,95,115,95,56,55,0);
         modelX = `${modelX.length << (Math.min(3, Math.abs(detail3.size)))}`;
      for (let q = 0; q < 3; q++) {
         detail3 = new Map([[`${detail3.size}`, 3 - detail3.size]]);
      }
          let yellowY = false;
          let football2 = true;
         modelX = `${((yellowY ? 2 : 1))}`;
          let areaI = String.fromCharCode(104,95,54,95,115,116,114,111,107,101,100,0);
         sendX *= 3 / (Math.max(5, sendX));
         areaI += `${3 & areaI.length}`;
         detail3.set(`${sendX}`, 3);
      if (4 > (sendX % 1) && 1 > (sendX % (Math.max(1, detail3.size)))) {
         detail3 = new Map([[modelX, modelX.length & 2]]);
      }
      let interstitialr = sendX <= 6254094;
      do {
         sendX |= 1;
         if (interstitialr) {
            break;
         }
      } while (interstitialr && ((sendX / 2) > 2));
      let launchs = modelX.length <= 6256702;
      do {
         modelX += `${(modelX == String.fromCharCode(100,0) ? sendX : modelX.length)}`;
         if (launchs) {
            break;
         }
      } while ((modelX.startsWith(`${detail3.size}`)) && launchs);
      if (modelX.includes(`${sendX}`)) {
          let background8 = String.fromCharCode(109,111,100,112,108,117,103,95,54,95,56,51,0);
          let infoK = String.fromCharCode(113,95,51,51,95,116,101,115,116,111,114,105,103,0);
         sendX >>= Math.min(Math.abs(2), 4);
         background8 += `${background8.length}`;
         infoK += `${background8.length % (Math.max(8, infoK.length))}`;
      }
      episodeA *= parseInt(`${connectione}`) % (Math.max(5, sendX));
      break;
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
                    <y_icon height={26} width={26} color={icons.iconColor} />
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