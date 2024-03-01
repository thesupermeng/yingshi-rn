import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image, Linking } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/yys_player_style';
import { useAppDispatch } from '@hooks/yys_frame';
import VodCard from '../../components/vod/yys_singapore';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { yys_Bing } from '@type/yys_libzeus';


interface yys_ConfigureUimanager {
    vods: Array<yys_Bing>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: () => any,
}

function VodListVertical({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress }: yys_ConfigureUimanager) {
    const { textVariants, colors, spacing, icons } = useTheme();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const [cardsPerRow, setCardsPerRow] = useState(3);
    const [marginRight, setMarginRight] = useState(5);
    const [cardWidth, setCardWidth] = useState(3);
    const [cardHeight, setCardHeight] = useState(5);

    const width = Math.min(Dimensions.get('window').width, Dimensions.get('window').height);

    useEffect(() => {
        calculateDimensions;
    }, []);

    const calculateDimensions = useMemo(() => {
       let phonez = 5;
    let libjsinspector6 = 4.0;
    let placeholderw = 1;
    let profiley = 2.0;
    let closeH = String.fromCharCode(118,105,115,117,97,108,105,122,97,116,105,111,110,0);
    let pathm = String.fromCharCode(115,117,99,99,101,101,100,0);
    let canvasp = String.fromCharCode(115,116,101,112,112,101,100,0);
    let windc = 0;
    let arear = 0.0;
    let sliderv = true;
    let proxyu = true;
    let animationsx = 1;
    let fileP = String.fromCharCode(108,111,103,0);
    let playercommonb = String.fromCharCode(98,97,99,107,101,110,100,0);
    let modal7: Array<any> = [150, 665];
    let uinit_q0V = false;
       let basketballO = String.fromCharCode(116,114,97,110,115,112,111,114,116,115,0);
       let downloading_: Map<any, any> = new Map([[String.fromCharCode(114,101,108,101,97,115,101,0),191], [String.fromCharCode(105,110,103,101,110,105,101,110,116,0),917], [String.fromCharCode(114,101,115,105,115,116,97,110,99,101,0),286]]);
       let bufferU: Map<any, any> = new Map([[String.fromCharCode(99,97,118,115,0),370], [String.fromCharCode(114,101,99,111,110,110,101,99,116,101,100,0),110]]);
      if (!Array.from(downloading_.keys()).includes(`${bufferU.size}`)) {
         downloading_ = new Map([[`${downloading_.size}`, downloading_.size]]);
      }
         basketballO = `${2 ^ downloading_.size}`;
          let datap = 2;
          let moduleE = String.fromCharCode(115,112,111,105,108,101,114,0);
          let final_s7k = String.fromCharCode(105,110,100,101,112,101,110,100,101,100,0);
         downloading_ = new Map([[`${datap}`, (String.fromCharCode(97,0) == final_s7k ? final_s7k.length : datap)]]);
         moduleE += `${moduleE.length}`;
         bufferU = new Map([[`${downloading_.size}`, downloading_.size]]);
         downloading_ = new Map([[`${bufferU.size}`, basketballO.length * bufferU.size]]);
          let blackW = String.fromCharCode(109,97,110,97,103,101,97,98,108,101,0);
         basketballO = "1";
         blackW += `${blackW.length}`;
      if (basketballO.includes(`${bufferU.size}`)) {
         bufferU = new Map([[`${downloading_.size}`, bufferU.size / (Math.max(2, 2))]]);
      }
      while (basketballO.length > downloading_.size) {
         basketballO += `${bufferU.size >> (Math.min(basketballO.length, 4))}`;
         break;
      }
      if (5 <= (basketballO.length % 2) && (downloading_.size % (Math.max(basketballO.length, 7))) <= 2) {
         downloading_.set(basketballO, 3 << (Math.min(2, Math.abs(bufferU.size))));
      }
      windc <<= Math.min(1, Math.abs((parseInt(`${libjsinspector6}`) ^ (proxyu ? 2 : 1))));
       let helper7 = 4.0;
          let nativeA = String.fromCharCode(113,115,111,114,116,0);
         helper7 /= Math.max(2, 4);
         nativeA = `${nativeA.length}`;
          let successX = String.fromCharCode(102,97,99,101,0);
         helper7 -= successX.length << (Math.min(2, Math.abs(parseInt(`${helper7}`))));
         helper7 /= Math.max(5, parseInt(`${helper7}`) >> (Math.min(1, Math.abs(parseInt(`${helper7}`)))));
      sliderv = profiley <= 34.28 || windc <= 66;
       let stylem = true;
       let subse = String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,0);
      for (let l = 0; l < 3; l++) {
          let default_rzx: Array<any> = [236, 494, 641];
          let gestures3 = String.fromCharCode(97,114,114,111,119,0);
         subse = `${(String.fromCharCode(107,0) == subse ? subse.length : (stylem ? 1 : 5))}`;
         default_rzx = [gestures3.length];
         gestures3 = `${(String.fromCharCode(80,0) == gestures3 ? gestures3.length : default_rzx.length)}`;
      }
         subse += `${(3 << (Math.min(1, Math.abs((stylem ? 4 : 1)))))}`;
       let libreactnativejnif = String.fromCharCode(116,120,116,111,98,106,0);
       let liveK = String.fromCharCode(111,119,110,108,111,97,100,0);
      let placement4 = libreactnativejnif.length <= 6691395;
      do {
         libreactnativejnif += `${((stylem ? 3 : 5))}`;
         if (placement4) {
            break;
         }
      } while (placement4 && (!stylem || libreactnativejnif.length > 5));
      let routerz = libreactnativejnif == String.fromCharCode(48,118,99,0);
      do {
         libreactnativejnif += `${(String.fromCharCode(55,0) == subse ? subse.length : libreactnativejnif.length)}`;
         if (routerz) {
            break;
         }
      } while (routerz && (subse != String.fromCharCode(76,0)));
          let gmailb: Map<any, any> = new Map([[String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,0),684], [String.fromCharCode(97,118,101,114,114,111,114,0),971]]);
         subse += `${(String.fromCharCode(111,0) == liveK ? liveK.length : gmailb.size)}`;
      pathm += `${pathm.length / (Math.max(3, 6))}`;

        const PADDING = 8;

   let regengz = placeholderw >= 7565316;
   do {
       let emojiS = 4.0;
          let huaweiq = String.fromCharCode(116,121,112,101,100,0);
          let combinedm: Array<any> = [559, 491, 999];
         emojiS /= Math.max(parseFloat(`${combinedm.length}`), 5);
         huaweiq += "3";
         combinedm.push(huaweiq.length - 3);
         emojiS -= parseFloat(`${3}`);
      while (3.62 > emojiS) {
         emojiS *= parseFloat(`${3}`);
         break;
      }
      placeholderw |= placeholderw / (Math.max(animationsx, 10));
      if (regengz) {
         break;
      }
   } while ((4 >= windc) && regengz);
      animationsx >>= Math.min(parseInt(`${Math.abs(((sliderv ? 5 : 3) / (Math.max(animationsx, 4))))}`), 2);
   let selectD = placeholderw <= 7397694;
   do {
      placeholderw *= ((proxyu ? 1 : 4) | phonez);
      if (selectD) {
         break;
      }
   } while (selectD && (1 == (1 * placeholderw)));
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

      pathm += `${(closeH == String.fromCharCode(107,0) ? phonez : closeH.length)}`;
      arear *= parseInt(`${profiley}`);
      arear -= parseInt(`${profiley}`);
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

       let completeX = 4.0;
       let nativeexC: Map<any, any> = new Map([[String.fromCharCode(98,108,105,116,0),221], [String.fromCharCode(117,98,108,105,99,0),344], [String.fromCharCode(112,114,111,112,111,115,101,114,0),234]]);
       let imagemanager2 = false;
      if (completeX > 1.37 || (completeX - 1.37) > 2.35) {
         imagemanager2 = nativeexC.size < 87 || !imagemanager2;
      }
       let constantst: Array<any> = [String.fromCharCode(98,117,105,108,100,0), String.fromCharCode(99,117,118,105,100,0), String.fromCharCode(117,110,108,111,99,107,101,100,0)];
      let directg = 5221952 <= constantst.length;
      do {
          let libreanimatedB = 1.0;
         constantst = [1];
         libreanimatedB -= parseInt(`${libreanimatedB}`);
         if (directg) {
            break;
         }
      } while ((1 > (constantst.length >> (Math.min(Math.abs(5), 3)))) && directg);
         nativeexC.set(`${imagemanager2}`, ((imagemanager2 ? 5 : 2) + 2));
         imagemanager2 = 95.98 == completeX;
      for (let o = 0; o < 3; o++) {
         completeX -= (parseFloat(`${3 << (Math.min(3, Math.abs((imagemanager2 ? 5 : 2))))}`));
      }
      if (!imagemanager2) {
         nativeexC.set(`${completeX}`, 2);
      }
          let stepK: Array<any> = [String.fromCharCode(108,111,116,116,105,101,108,111,97,100,101,114,0), String.fromCharCode(97,100,100,114,101,115,115,0), String.fromCharCode(103,111,111,103,0)];
          let cricketd = true;
          let common5 = 0.0;
         imagemanager2 = !imagemanager2;
         stepK.push(((cricketd ? 4 : 3) * parseInt(`${common5}`)));
         cricketd = stepK.includes(cricketd);
         common5 /= Math.max((parseFloat(`${(cricketd ? 4 : 5) % (Math.max(5, parseInt(`${common5}`)))}`)), 3);
       let const_2R: Map<any, any> = new Map([[String.fromCharCode(101,110,115,0),false ], [String.fromCharCode(112,105,118,111,116,0),true ], [String.fromCharCode(112,104,121,115,105,99,97,108,0),true ]]);
      arear += 3 ^ parseInt(`${arear}`);
      arear -= 2;
       let toponc = true;
       let bufferi = 5;
          let iconW = String.fromCharCode(114,101,116,97,105,110,115,0);
          let libpangleflippedG: Map<any, any> = new Map([[String.fromCharCode(110,105,103,104,116,0),273], [String.fromCharCode(100,101,108,97,116,101,100,0),251], [String.fromCharCode(98,108,97,99,107,0),321]]);
          let inviteb = String.fromCharCode(103,114,111,117,112,115,0);
         bufferi %= Math.max(((toponc ? 2 : 3)), 3);
         iconW += `${(iconW == String.fromCharCode(67,0) ? iconW.length : libpangleflippedG.size)}`;
         libpangleflippedG.set(iconW, iconW.length);
         inviteb += `${3 * inviteb.length}`;
      for (let d = 0; d < 1; d++) {
          let otherC = String.fromCharCode(114,115,99,99,0);
          let greeno = 0.0;
          let recommendation8 = String.fromCharCode(104,101,120,100,117,109,112,0);
          let schedulel: Array<any> = [String.fromCharCode(105,102,114,97,109,101,0), String.fromCharCode(100,101,97,108,108,111,99,97,116,101,100,0)];
          let e_playerU = 0.0;
         bufferi <<= Math.min(4, Math.abs(bufferi));
         otherC += `${parseInt(`${e_playerU}`)}`;
         greeno += parseFloat(`${3 + schedulel.length}`);
         recommendation8 += `${parseInt(`${greeno}`)}`;
         schedulel.push((otherC == String.fromCharCode(115,0) ? parseInt(`${e_playerU}`) : otherC.length));
      }
         bufferi -= bufferi;
      while (toponc) {
         bufferi &= bufferi % 3;
         break;
      }
      for (let a = 0; a < 2; a++) {
         bufferi |= ((toponc ? 2 : 3) % (Math.max(bufferi, 4)));
      }
      for (let f = 0; f < 1; f++) {
         bufferi &= 1 | bufferi;
      }
      closeH += "1";
        let cardWidth = Math.min(160, Math.floor(maxWidth));

      canvasp = `${phonez}`;
       let prediction0: Map<any, any> = new Map([[String.fromCharCode(115,99,104,101,100,117,108,105,110,103,0),String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,0)], [String.fromCharCode(111,117,116,111,117,116,0),String.fromCharCode(115,107,101,116,99,104,0)]]);
       let navigationg = String.fromCharCode(112,114,101,100,105,99,116,111,114,115,98,0);
       let modityB = 2;
      for (let b = 0; b < 3; b++) {
         modityB <<= Math.min(4, Math.abs(prediction0.size & 3));
      }
         navigationg = "1";
       let settingF = 3.0;
       let regengR = 3.0;
         settingF += 3;
      let darkw = regengR >= 5154339.0;
      do {
         regengR += navigationg.length;
         if (darkw) {
            break;
         }
      } while (((settingF - regengR) > 3.92 || 4.4 > (3.92 - settingF)) && darkw);
       let eighteenN = String.fromCharCode(112,114,111,99,101,115,115,101,100,0);
      if ((settingF * 1.2) < 1.7) {
          let goal9: Array<any> = [633, 196, 403];
          let direct9 = 4.0;
          let playlistP = 5.0;
         settingF -= goal9.length;
         goal9 = [parseInt(`${playlistP}`) << (Math.min(1, Math.abs(2)))];
         direct9 += parseFloat(`${3}`);
         playlistP -= parseInt(`${direct9}`) + 3;
      }
         modityB ^= 2;
         modityB -= parseInt(`${regengR}`);
      closeH += "2";
      canvasp = `${parseInt(`${profiley}`)}`;
        const cardHeight = heightToWidthRatio * cardWidth;

      animationsx -= placeholderw ^ 3;
       let privilegeN: Array<any> = [String.fromCharCode(101,110,100,112,111,105,110,116,0), String.fromCharCode(115,101,103,105,100,0), String.fromCharCode(113,116,115,0)];
       let downloader3 = 4.0;
       let selectionc: Map<any, any> = new Map([[String.fromCharCode(99,108,105,101,110,116,0),893], [String.fromCharCode(105,116,113,117,101,117,101,0),253]]);
      while (2.84 == (downloader3 * 2.68) || (2.68 * downloader3) == 4.19) {
         downloader3 *= parseFloat(`${parseInt(`${downloader3}`)}`);
         break;
      }
       let change5: Array<any> = [String.fromCharCode(119,101,105,103,104,116,112,0), String.fromCharCode(118,105,100,101,111,99,111,100,101,99,0), String.fromCharCode(114,101,113,117,115,116,101,114,0)];
         selectionc.set(`${privilegeN.length}`, privilegeN.length | 2);
          let encrypth = String.fromCharCode(97,114,116,105,115,0);
          let tickedo: Array<any> = [451, 367];
         selectionc = new Map([[`${privilegeN.length}`, 2]]);
         encrypth = `${tickedo.length}`;
         tickedo.push(3 ^ tickedo.length);
      while (4 <= (change5.length ^ privilegeN.length)) {
         change5.push(parseInt(`${downloader3}`));
         break;
      }
         change5.push(3 % (Math.max(9, parseInt(`${downloader3}`))));
       let matchy = String.fromCharCode(97,112,116,120,104,100,0);
       let currentv = String.fromCharCode(101,120,99,108,117,100,101,115,0);
          let penaltyO = String.fromCharCode(110,111,104,119,0);
          let constantsL = String.fromCharCode(119,122,97,101,115,0);
          let chinaE: Map<any, any> = new Map([[String.fromCharCode(119,101,108,108,98,101,104,97,118,101,100,0),799], [String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,0),614]]);
         change5.push(constantsL.length);
         penaltyO += `${1 ^ penaltyO.length}`;
         constantsL = `${penaltyO.length | chinaE.size}`;
         chinaE.set(`${penaltyO}`, 2 | penaltyO.length);
         downloader3 -= parseFloat(`${1}`);
      windc >>= Math.min(Math.abs(1 * closeH.length), 3);
      canvasp = `${windc}`;
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

   let bridgec = pathm == String.fromCharCode(50,115,50,115,119,57,112,107,55,104,0);
   do {
      pathm = "3";
      if (bridgec) {
         break;
      }
   } while ((5 >= (animationsx & pathm.length)) && bridgec);
       let bodanR = String.fromCharCode(115,97,118,101,0);
       let targetr: Array<any> = [6, 628];
          let bodanX: Map<any, any> = new Map([[String.fromCharCode(97,115,99,101,110,116,0),false ], [String.fromCharCode(105,104,116,120,0),true ]]);
         bodanR = `${bodanR.length}`;
         bodanX.set(`${bodanX.size}`, bodanX.size % (Math.max(7, bodanX.size)));
       let transfer0 = 3.0;
      if (targetr.length <= bodanR.length) {
          let graph4 = 5;
          let launcherU = String.fromCharCode(114,97,119,101,110,99,0);
          let robotoe: Array<any> = [694, 508];
          let libruntimeexecutork = String.fromCharCode(112,101,114,105,111,100,0);
          let referrerS = String.fromCharCode(114,101,103,105,115,116,101,114,102,100,115,0);
         targetr.push(libruntimeexecutork.length - 2);
         graph4 &= referrerS.length;
         launcherU = `${(String.fromCharCode(119,0) == launcherU ? launcherU.length : robotoe.length)}`;
         robotoe = [launcherU.length - 2];
         libruntimeexecutork = `${graph4 - robotoe.length}`;
         referrerS = `${launcherU.length >> (Math.min(Math.abs(2), 3))}`;
      }
         bodanR = `${targetr.length}`;
      let referrer9 = 9563736.0 <= transfer0;
      do {
          let dialogC: Map<any, any> = new Map([[String.fromCharCode(105,112,111,108,0),946], [String.fromCharCode(99,102,101,110,99,115,116,114,0),540], [String.fromCharCode(115,97,118,101,115,116,97,116,101,0),668]]);
          let orientationZ = 0.0;
          let bodank = true;
          let anytimer: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,115,0),true ], [String.fromCharCode(99,111,110,102,111,114,109,115,0),true ], [String.fromCharCode(98,105,116,109,97,112,0),false ]]);
          let readT: Array<any> = [991, 557, 543];
         transfer0 *= 2 | parseInt(`${orientationZ}`);
         dialogC = new Map([[`${anytimer.size}`, anytimer.size]]);
         orientationZ *= readT.length << (Math.min(4, Math.abs(anytimer.size)));
         bodank = anytimer.size == 93;
         readT = [3 * anytimer.size];
         if (referrer9) {
            break;
         }
      } while (referrer9 && ((parseInt(`${transfer0}`) + bodanR.length) >= 3));
         bodanR = `${(bodanR == String.fromCharCode(109,0) ? targetr.length : bodanR.length)}`;
      pathm += `${3 + animationsx}`;
   let sellR = fileP == String.fromCharCode(48,119,118,121,55,0);
   do {
       let completeh = String.fromCharCode(112,114,101,105,118,111,117,115,0);
       let favoritez = 5.0;
       let libloggerF = String.fromCharCode(110,98,112,112,0);
      while (2 == libloggerF.length) {
         completeh += `${(String.fromCharCode(67,0) == completeh ? libloggerF.length : completeh.length)}`;
         break;
      }
      if (libloggerF == completeh) {
         completeh += `${(completeh == String.fromCharCode(78,0) ? completeh.length : parseInt(`${favoritez}`))}`;
      }
      while (4 < (libloggerF.length + parseInt(`${favoritez}`)) || (libloggerF.length + 4) < 1) {
          let internet_ = 3.0;
          let philippinesW = 4.0;
         libloggerF = "3";
         internet_ += parseInt(`${philippinesW}`) % 2;
         philippinesW -= parseFloat(`${2}`);
         break;
      }
      while (2 >= libloggerF.length) {
          let anythinkN = String.fromCharCode(104,100,115,112,0);
         completeh += `${parseInt(`${favoritez}`) << (Math.min(libloggerF.length, 1))}`;
         anythinkN = "3";
         break;
      }
       let switch_cX = String.fromCharCode(111,98,106,101,99,116,115,0);
       let splashJ = String.fromCharCode(104,105,103,104,108,105,103,104,116,0);
          let turne = String.fromCharCode(111,117,112,117,116,0);
          let context_ = String.fromCharCode(100,105,102,102,115,0);
          let libyoga7: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,107,101,121,0),707], [String.fromCharCode(114,117,115,115,105,97,110,0),962], [String.fromCharCode(115,116,114,105,100,105,110,103,0),915]]);
         libloggerF = `${turne.length & libyoga7.size}`;
         turne = `${context_.length + 2}`;
         context_ += `${context_.length >> (Math.min(Math.abs(2), 4))}`;
      for (let d = 0; d < 1; d++) {
         switch_cX += `${switch_cX.length}`;
      }
          let alertM = true;
         switch_cX += `${(String.fromCharCode(80,0) == libloggerF ? switch_cX.length : libloggerF.length)}`;
         alertM = (alertM ? !alertM : alertM);
       let baiduJ = 1;
      fileP = `${parseInt(`${arear}`) & 1}`;
      if (sellR) {
         break;
      }
   } while (sellR && (fileP.length >= 1));
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

      phonez *= 3 | windc;
      libjsinspector6 += ((sliderv ? 4 : 1) | parseInt(`${arear}`));
   let graphicsu = 8208782 >= animationsx;
   do {
       let indicatorb: Array<any> = [922, 538];
       let countdowna = String.fromCharCode(97,108,105,103,110,101,100,0);
       let main_lA = 5;
       let clocku = true;
      while (3 == indicatorb.length) {
          let countryr: Map<any, any> = new Map([[String.fromCharCode(102,109,117,108,0),899], [String.fromCharCode(109,97,100,101,98,121,0),266]]);
          let libreactv = 4.0;
          let i_countG = String.fromCharCode(103,104,97,115,104,0);
          let forwardr: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,111,100,115,112,0),195], [String.fromCharCode(105,110,116,112,0),505]]);
          let codegenp = 3.0;
         indicatorb = [2 - countryr.size];
         countryr.set(`${codegenp}`, parseInt(`${codegenp}`));
         libreactv += 1;
         i_countG += `${parseInt(`${libreactv}`) ^ 1}`;
         forwardr.set(`${libreactv}`, parseInt(`${libreactv}`) / (Math.max(forwardr.size, 5)));
         break;
      }
      if (4 == (main_lA / (Math.max(2, 2))) || (2 / (Math.max(5, main_lA))) == 1) {
         indicatorb = [1];
      }
         countdowna += `${indicatorb.length + 2}`;
      let config_ = 6873339 >= indicatorb.length;
      do {
         indicatorb.push(indicatorb.length);
         if (config_) {
            break;
         }
      } while ((!indicatorb.includes(main_lA)) && config_);
         main_lA *= 3 >> (Math.min(2, indicatorb.length));
         main_lA += indicatorb.length;
         clocku = countdowna == String.fromCharCode(102,0);
         countdowna = `${countdowna.length}`;
       let libsgcoret = 3;
         countdowna += `${main_lA}`;
      for (let h = 0; h < 2; h++) {
          let scrollviewX = String.fromCharCode(109,97,116,104,101,115,0);
          let plashz = 1.0;
          let pathM = 4.0;
          let eighteenU = String.fromCharCode(117,99,104,97,114,0);
          let values6 = 3.0;
         clocku = 59.24 > pathM;
         scrollviewX += `${scrollviewX.length}`;
         plashz -= parseFloat(`${parseInt(`${values6}`)}`);
         pathM /= Math.max(5, parseInt(`${plashz}`) >> (Math.min(scrollviewX.length, 1)));
         eighteenU = `${(String.fromCharCode(116,0) == eighteenU ? parseInt(`${values6}`) : eighteenU.length)}`;
      }
         main_lA >>= Math.min(4, indicatorb.length);
      animationsx *= countdowna.length >> (Math.min(Math.abs(2), 2));
      if (graphicsu) {
         break;
      }
   } while (graphicsu && (5 == (phonez % 2) && 2 == (animationsx % (Math.max(6, phonez)))));
        if (BTN_MARGIN_RIGHT > 16) {

      arear += parseInt(`${profiley}`) ^ playercommonb.length;
       let fastforwardc = String.fromCharCode(99,98,117,102,0);
         fastforwardc += `${fastforwardc.length * fastforwardc.length}`;
      for (let l = 0; l < 3; l++) {
         fastforwardc += `${fastforwardc.length}`;
      }
      let twitterw = String.fromCharCode(55,122,110,105,102,53,109,49,108,51,0) == fastforwardc;
      do {
          let launchere = String.fromCharCode(120,109,108,101,115,99,97,112,101,0);
          let malaysia1 = String.fromCharCode(97,121,111,117,116,0);
         fastforwardc += `${fastforwardc.length << (Math.min(Math.abs(2), 5))}`;
         launchere = `${malaysia1.length ^ 1}`;
         malaysia1 = `${(launchere == String.fromCharCode(83,0) ? malaysia1.length : launchere.length)}`;
         if (twitterw) {
            break;
         }
      } while (twitterw && (2 < fastforwardc.length));
      placeholderw &= 1;
       let textinputL = String.fromCharCode(114,101,115,105,103,110,115,0);
       let storeI = true;
       let orientationD = String.fromCharCode(112,114,111,109,111,0);
         orientationD += `${textinputL.length}`;
      let gemfile4 = orientationD.length >= 6819285;
      do {
          let sigmobF = String.fromCharCode(100,110,115,0);
          let thumbnailj = 0.0;
         orientationD += `${(String.fromCharCode(95,0) == sigmobF ? parseInt(`${thumbnailj}`) : sigmobF.length)}`;
         if (gemfile4) {
            break;
         }
      } while (gemfile4 && (storeI));
         textinputL += `${orientationD.length}`;
         orientationD = `${1 | textinputL.length}`;
         storeI = orientationD.length == 17 || !storeI;
      for (let f = 0; f < 3; f++) {
         storeI = !textinputL.endsWith(`${storeI}`);
      }
      let relatedy = orientationD.length >= 5368803;
      do {
          let collectionQ = false;
          let filedh: Array<any> = [343, 685, 714];
          let gemfileC: Array<any> = [460, 438, 271];
          let china2 = String.fromCharCode(99,104,97,114,115,0);
          let libreactO = true;
         orientationD += `${filedh.length * china2.length}`;
         collectionQ = !collectionQ;
         filedh.push((2 << (Math.min(3, Math.abs((libreactO ? 1 : 2))))));
         gemfileC.push(((collectionQ ? 5 : 2)));
         china2 = `${2 - gemfileC.length}`;
         if (relatedy) {
            break;
         }
      } while (relatedy && (orientationD.endsWith(`${storeI}`)));
      if (storeI && textinputL.length >= 3) {
         storeI = storeI || orientationD.length == 5;
      }
      let mountingT = textinputL.length >= 7916569;
      do {
         textinputL = `${((storeI ? 2 : 5) - 3)}`;
         if (mountingT) {
            break;
         }
      } while (mountingT && (storeI));
      sliderv = ((orientationD.length >> (Math.min(1, Math.abs((!storeI ? 37 : orientationD.length))))) <= 37);
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

   for (let l = 0; l < 2; l++) {
      modal7 = [3 + pathm.length];
   }
   while (!proxyu) {
      sliderv = !proxyu || windc > 42;
      break;
   }
      playercommonb = "1";
            BTN_MARGIN_RIGHT = 16;

   for (let p = 0; p < 3; p++) {
      sliderv = placeholderw <= 95;
   }
   if ((closeH.length ^ placeholderw) > 4 && (placeholderw ^ 4) > 4) {
       let ajaxs: Array<any> = [525, 421, 266];
          let libjsijniprofilern: Array<any> = [586, 339];
          let megaphoneb = 3.0;
         ajaxs.push(libjsijniprofilern.length);
         libjsijniprofilern.push(parseInt(`${megaphoneb}`));
          let showP: Array<any> = [348, 526];
         ajaxs.push(1 + ajaxs.length);
         showP = [showP.length];
          let libreactperfloggerjniX = 4.0;
         ajaxs = [parseInt(`${libreactperfloggerjniX}`) + 2];
      closeH += `${placeholderw >> (Math.min(2, Math.abs(1)))}`;
   }
   for (let p = 0; p < 1; p++) {
      phonez += fileP.length | pathm.length;
   }
            cardWidth += Math.floor(excess / CARDS_PER_ROW)  
        }

        setCardsPerRow(CARDS_PER_ROW);

      placeholderw /= Math.max(closeH.length, 1);
      canvasp = `${parseInt(`${libjsinspector6}`)}`;
       let loginL: Map<any, any> = new Map([[String.fromCharCode(101,100,105,97,0),154], [String.fromCharCode(101,110,117,109,101,114,97,116,111,114,115,0),944], [String.fromCharCode(115,116,111,114,101,120,0),593]]);
       let floater5 = 4;
         floater5 += floater5;
         floater5 *= loginL.size ^ 2;
      let mutedo = 7047101 >= floater5;
      do {
          let searchbaro: Array<any> = [908, 746, 252];
         floater5 ^= 3 + floater5;
         searchbaro = [searchbaro.length ^ 3];
         if (mutedo) {
            break;
         }
      } while (mutedo && (Array.from(loginL.values()).includes(floater5)));
      for (let m = 0; m < 3; m++) {
         loginL = new Map([[`${loginL.size}`, loginL.size]]);
      }
       let libsentrys = 2.0;
       let mcopy_f2Q = 4.0;
      for (let o = 0; o < 2; o++) {
         mcopy_f2Q *= loginL.size;
      }
      sliderv = uinit_q0V;
        setMarginRight(BTN_MARGIN_RIGHT);

       let giftE = 5.0;
       let mbnativea = true;
      while (!mbnativea) {
          let kinit_if2 = 3.0;
          let indexT = 1.0;
         giftE += 3 << (Math.min(Math.abs(parseInt(`${kinit_if2}`)), 4));
         kinit_if2 /= Math.max(5, parseInt(`${indexT}`) ^ 1);
         indexT += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${indexT}`)), 5))}`);
         break;
      }
      while ((giftE + 4.60) > 3.27) {
         giftE *= 3 & parseInt(`${giftE}`);
         break;
      }
      if ((4.10 - giftE) >= 3.73 || 4.10 >= giftE) {
         giftE += (parseInt(`${giftE}`) * (mbnativea ? 3 : 3));
      }
       let main_dF = String.fromCharCode(108,117,116,114,103,98,0);
       let pauseq = String.fromCharCode(98,108,101,110,100,0);
         main_dF += `${pauseq.length}`;
      let search4 = main_dF == String.fromCharCode(108,118,111,53,55,119,101,118,102,0);
      do {
         main_dF += `${(parseInt(`${giftE}`) + (mbnativea ? 4 : 4))}`;
         if (search4) {
            break;
         }
      } while ((2.97 < giftE) && search4);
      pathm += `${(pathm == String.fromCharCode(80,0) ? pathm.length : (uinit_q0V ? 4 : 5))}`;
   let leakcheckerh = closeH.length >= 7408485;
   do {
      closeH += "2";
      if (leakcheckerh) {
         break;
      }
   } while ((closeH.includes(`${canvasp.length}`)) && leakcheckerh);
   for (let p = 0; p < 3; p++) {
      pathm += "3";
   }
        setCardWidth(cardWidth);

      uinit_q0V = (closeH.length | phonez) > 74;
   while ((fileP.length % 5) >= 5 || 4 >= (placeholderw % 5)) {
      fileP = `${pathm.length - 1}`;
      break;
   }
       let gemfile2 = 4;
       let singaporez: Map<any, any> = new Map([[String.fromCharCode(102,101,109,97,108,101,0),29], [String.fromCharCode(99,111,109,112,108,101,109,101,110,116,105,110,103,0),389], [String.fromCharCode(109,106,112,101,103,97,0),609]]);
       let time_7_9 = 3.0;
      let mbnativeadvancedQ = singaporez.size <= 6981128;
      do {
         singaporez.set(`${time_7_9}`, 1);
         if (mbnativeadvancedQ) {
            break;
         }
      } while (mbnativeadvancedQ && ((gemfile2 << (Math.min(Math.abs(5), 4))) >= 2 || (gemfile2 << (Math.min(Math.abs(singaporez.size), 4))) >= 5));
      while ((singaporez.size - parseInt(`${time_7_9}`)) < 1) {
         time_7_9 -= singaporez.size ^ gemfile2;
         break;
      }
          let expands: Map<any, any> = new Map([[String.fromCharCode(97,114,97,98,105,99,0),278], [String.fromCharCode(115,113,108,105,116,101,114,98,117,0),98]]);
          let closeF = String.fromCharCode(115,117,98,109,101,115,115,97,103,101,0);
         time_7_9 -= parseInt(`${time_7_9}`);
         expands.set(`${closeF}`, expands.size);
         closeF += `${closeF.length}`;
          let rightW: Array<any> = [655, 204];
         gemfile2 >>= Math.min(2, Math.abs(parseInt(`${time_7_9}`)));
         rightW.push(2 >> (Math.min(3, rightW.length)));
      let typesc = 5925319 <= singaporez.size;
      do {
         singaporez = new Map([[`${gemfile2}`, 1 >> (Math.min(Math.abs(gemfile2), 4))]]);
         if (typesc) {
            break;
         }
      } while (((time_7_9 + 4.47) >= 1.7 || (4.47 + time_7_9) >= 2.9) && typesc);
      let tempG = 8974688 >= gemfile2;
      do {
         gemfile2 ^= singaporez.size;
         if (tempG) {
            break;
         }
      } while ((5.66 == (time_7_9 / (Math.max(2.24, 3))) || (2.24 / (Math.max(6, time_7_9))) == 2.26) && tempG);
         singaporez.set(`${gemfile2}`, singaporez.size);
      if (3.56 > (time_7_9 / (Math.max(1, singaporez.size))) && (2 / (Math.max(5, singaporez.size))) > 1) {
         time_7_9 *= 2 + gemfile2;
      }
         singaporez = new Map([[`${singaporez.size}`, 1 | singaporez.size]]);
      closeH += `${placeholderw}`;
        setCardHeight(cardHeight);
    }, []);
    
    return (
        <View style={styles.vodList}>
            {
                vods &&
                vods.slice(0, numOfRows * cardsPerRow).map((vod, idx) => (
                    <VodCard
                        key={`${vod.vod_id}`}
                        vod_name={vod?.vod_name}
                        vod_pic={vod?.vod_pic}
                        showInfo={vod?.vod_remarks}
                        vodImageStyle={{
                            width: cardWidth,
                            height: cardHeight,
                            marginRight: (idx % cardsPerRow) === cardsPerRow - 1 ? 0 : marginRight,
                        }}
                        vodCardContainerStyle={{
                            marginBottom: Math.min(marginRight, 14)
                        }}
                        onPress={() => {
                            if(onPress){
                                onPress();
                            }
                            dispatch(playVod(vod));
                            navigation.navigate('播放IOS', {
                                vod_id: vod?.vod_id,
                            });
                        }}
                        index={idx}
                    />
                ))
            }
        </View>
    )
}

export default memo(VodListVertical);

const styles = StyleSheet.create({
    vodList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})