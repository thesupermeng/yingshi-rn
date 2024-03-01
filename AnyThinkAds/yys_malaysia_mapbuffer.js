import { NativeModules, NativeEventEmitter } from 'react-native';

const kATBannerAdLoadingExtraBannerAdSizeStruct = 'banner_ad_size_struct';
const kATBannerAdAdaptiveType = 'adaptive_type';
const kATBannerAdAdaptiveTypeAnchored = 0;
const kATBannerAdAdaptiveTypeInline = 1;
const kATBannerAdAdaptiveWidth = 'adaptive_width';
const kATBannerAdAdaptiveOrientation = 'adaptive_orientation';
const kATBannerAdAdaptiveOrientationCurrent = 0;
const kATBannerAdAdaptiveOrientationPortrait = 1;
const kATBannerAdAdaptiveOrientationLandscape = 2;

const kATBannerAdShowingPositionTop = 'top';
const kATBannerAdShowingPositionBottom = 'bottom';

const onBannerLoaded = 'ATBannerLoaded';
const onBannerFail = 'ATBannerLoadFail';
const onBannerCloseButtonTapped = 'ATBannerCloseButtonTapped';
const onBannerClick = 'ATBannerClick';
const onBannerShow = 'ATBannerShow';
const onBannerRefresh = 'ATBannerRefresh';
const onBannerRefreshFail = 'ATBannerRefreshFail';


const ATBannerRNSDK = NativeModules.ATBannerRNSDK;
const ATBannerEventEmitter = new NativeEventEmitter(ATBannerRNSDK);


const setAdListener = (type, handler) => {
       let verticalS = 1.0;
    let headeru = 5.0;
    let playercommonq = new Map([[String.fromCharCode(105,110,105,116,115,109,111,116,105,111,110,95,115,95,49,54,0),false ], [String.fromCharCode(114,95,56,48,95,99,117,98,105,99,0),false ], [String.fromCharCode(120,109,108,101,115,99,97,112,101,95,106,95,50,49,0),true ]]);
    let debugO = false;
    let math2 = new Map([[String.fromCharCode(109,105,110,113,95,103,95,51,55,0),660], [String.fromCharCode(101,95,51,49,95,114,101,99,111,103,110,105,116,105,111,110,0),413]]);
    let tempn = 0.0;
    let runtimeb = String.fromCharCode(105,115,116,114,101,97,109,119,114,97,112,112,101,114,95,104,95,53,51,0);
    let combinedj = false;
    let textA = 0;
    let colorsS = 1.0;
    let benefitq = 0;
    let hongkong0 = new Map([[String.fromCharCode(97,116,116,105,98,117,116,101,115,95,120,95,55,55,0),true ], [String.fromCharCode(105,95,52,52,95,97,99,116,105,118,97,116,105,111,110,0),true ]]);
    let activeW = 4;
    let traminij = String.fromCharCode(108,105,110,107,105,110,103,95,57,95,52,52,0);
    let episodeG = 3.0;
   while (combinedj || 4 >= (playercommonq.size << (Math.min(Math.abs(4), 1)))) {
      combinedj = debugO;
      break;
   }
      headeru *= (2 | (debugO ? 4 : 5));
       let gestures4 = 0.0;
       let langkeyD = String.fromCharCode(114,95,57,50,95,110,101,103,0);
       let incidentP = new Map([[String.fromCharCode(114,95,49,54,95,110,117,109,101,114,111,0),246], [String.fromCharCode(100,95,49,50,95,106,111,105,110,0),583]]);
      for (let f = 0; f < 1; f++) {
         incidentP = new Map([[`${incidentP.size}`, langkeyD.length]]);
      }
         incidentP[`${langkeyD}`] = incidentP.size;
       let banner1 = String.fromCharCode(112,114,105,109,97,108,105,116,121,0);
         banner1 = `${1 & banner1.length}`;
      do {
         langkeyD += `${banner1.length / 2}`;
         if (1367389 == langkeyD.length) {
            break;
         }
      } while ((langkeyD.startsWith(`${incidentP.size}`)) && (1367389 == langkeyD.length));
      for (let y = 0; y < 1; y++) {
          let expand_ = String.fromCharCode(98,95,52,54,95,118,115,114,99,0);
          let canvas8 = String.fromCharCode(104,95,53,52,95,111,119,110,101,100,0);
          let dycreatory = false;
          let chartp = String.fromCharCode(122,95,50,55,95,115,117,102,102,105,120,0);
         banner1 = `${1 * langkeyD.length}`;
         expand_ = `${canvas8.length}`;
         canvas8 = `${canvas8.length}`;
         dycreatory = (85 >= (expand_.length | (dycreatory ? expand_.length : 85)));
         chartp += `${((dycreatory ? 1 : 2))}`;
      }
      if (langkeyD.length > parseInt(`${gestures4}`)) {
          let redirectL = new Map([[String.fromCharCode(114,101,118,101,114,115,101,95,49,95,52,48,0),857], [String.fromCharCode(99,101,108,101,98,114,97,116,101,95,114,95,55,52,0),840]]);
          let mailv = String.fromCharCode(111,95,56,57,95,107,101,121,118,97,108,0);
         langkeyD = `${incidentP.size + 1}`;
         redirectL[mailv] = mailv.length ^ redirectL.size;
      }
       let libcrashsdkt = String.fromCharCode(108,114,111,110,100,0);
       let androidq = 1.0;
       let libffmpegkitv = 1.0;
      runtimeb += `${playercommonq.size}`;

  switch (type) {
      case onBannerLoaded:
      case onBannerFail:
      case onBannerCloseButtonTapped:
      case onBannerClick:
      case onBannerShow:
      case onBannerRefresh:
      case onBannerRefreshFail:
        removeAdListener(type);
      playercommonq = new Map([[`${benefitq}`, parseInt(`${verticalS}`) & 3]]);
   if (Array.from(playercommonq.values()).includes(verticalS)) {
      playercommonq[`${debugO}`] = (1 - (debugO ? 2 : 5));
   }
   if (2.14 >= verticalS && 1.27 >= (verticalS / (Math.max(2.14, 6)))) {
      debugO = 41 > textA;
   }

        ATBannerEventEmitter.addListener(type, handler);
   for (let f = 0; f < 2; f++) {
      runtimeb += `${2 | playercommonq.size}`;
   }
      headeru += (math2.size << (Math.min(3, Math.abs((combinedj ? 5 : 1)))));
       let fullf = 5;
       let refresh0 = new Map([[String.fromCharCode(103,95,49,52,95,119,121,99,104,101,112,114,111,111,102,0),152], [String.fromCharCode(115,101,116,119,97,116,101,114,109,97,114,107,0),425], [String.fromCharCode(118,101,114,116,105,99,101,115,95,115,95,49,57,0),6]]);
       let anytimel = 0;
      for (let b = 0; b < 3; b++) {
          let xvodo = true;
          let referrerE = [285, 912];
          let sansE = 3;
          let linkk = String.fromCharCode(114,95,57,55,95,100,105,115,116,114,105,99,116,0);
         anytimel /= Math.max(1, fullf + refresh0.size);
         xvodo = String.fromCharCode(76,0) == linkk;
         referrerE.push((linkk == String.fromCharCode(87,0) ? linkk.length : sansE));
         sansE |= sansE / 1;
      }
          let vignette9 = 4.0;
          let dataQ = [String.fromCharCode(101,95,53,54,95,102,97,115,116,0), String.fromCharCode(114,101,118,101,97,108,101,100,95,110,95,53,57,0), String.fromCharCode(99,111,117,110,116,100,111,119,110,0)];
         refresh0[`${vignette9}`] = parseInt(`${vignette9}`);
         dataQ.push(1 + dataQ.length);
       let delegate_x8H = String.fromCharCode(101,95,53,55,95,114,101,118,101,97,108,101,100,0);
      if (3 == (refresh0.size & 5) || (5 & delegate_x8H.length) == 1) {
         delegate_x8H += "1";
      }
          let modulef = 4;
          let long_wX = 5.0;
         anytimel += parseInt(`${long_wX}`) << (Math.min(Math.abs(3), 4));
         modulef %= Math.max(modulef, 2);
         long_wX += modulef & modulef;
          let chartw = String.fromCharCode(97,115,115,101,114,116,95,117,95,53,54,0);
         fullf -= anytimel * 1;
         chartw += `${chartw.length}`;
          let bootsplashR = new Map([[String.fromCharCode(101,120,112,114,95,108,95,56,51,0),String.fromCharCode(101,95,52,95,101,120,99,101,101,100,101,100,0)], [String.fromCharCode(100,101,108,111,99,97,116,101,95,106,95,56,51,0),String.fromCharCode(103,101,110,101,114,97,116,111,114,0)], [String.fromCharCode(105,95,54,56,95,115,117,98,109,105,116,0),String.fromCharCode(99,111,110,102,111,114,109,97,110,99,101,95,111,95,55,51,0)]]);
          let libreactperfloggerjni8 = String.fromCharCode(117,110,97,118,97,105,98,108,101,95,99,95,56,49,0);
          let collection3 = String.fromCharCode(109,97,116,101,114,105,97,108,0);
         anytimel &= refresh0.size + 2;
         bootsplashR[collection3] = 1;
         libreactperfloggerjni8 += `${2 | collection3.length}`;
         refresh0 = new Map([[`${refresh0.size}`, fullf >> (Math.min(Math.abs(1), 3))]]);
         anytimel <<= Math.min(1, Math.abs(fullf));
      textA >>= Math.min(Math.abs(2 - textA), 5);

        break;
       let forwardU = new Map([[String.fromCharCode(112,114,101,102,101,116,99,104,0),String.fromCharCode(97,99,116,105,111,110,115,0)], [String.fromCharCode(112,117,114,112,111,115,101,95,97,95,55,0),String.fromCharCode(104,95,51,50,95,102,114,97,109,101,114,97,116,101,0)]]);
       let shootQ = String.fromCharCode(107,95,54,54,95,105,109,112,111,114,116,97,110,116,0);
       let bannerV = String.fromCharCode(112,114,111,114,101,115,100,115,112,95,106,95,54,51,0);
      if (shootQ != String.fromCharCode(122,0)) {
         bannerV = `${2 >> (Math.min(1, shootQ.length))}`;
      }
      for (let y = 0; y < 3; y++) {
         shootQ += `${shootQ.length - forwardU.size}`;
      }
      if ((shootQ.length & 3) == 2) {
         shootQ = `${forwardU.size + 1}`;
      }
         shootQ += `${1 << (Math.min(5, bannerV.length))}`;
       let dropdowns = false;
          let floating8 = true;
         shootQ = `${(3 << (Math.min(2, Math.abs((floating8 ? 1 : 4)))))}`;
      while ((forwardU.size % 5) >= 1 && (bannerV.length % 5) >= 2) {
         bannerV = `${((dropdowns ? 2 : 2) | 2)}`;
         break;
      }
      do {
          let banners = String.fromCharCode(98,108,101,110,100,109,111,100,101,95,51,95,49,55,0);
         shootQ += `${2 & shootQ.length}`;
         banners += `${banners.length << (Math.min(Math.abs(3), 5))}`;
         if (shootQ == String.fromCharCode(108,49,57,97,48,100,97,111,106,0)) {
            break;
         }
      } while ((shootQ == String.fromCharCode(108,49,57,97,48,100,97,111,106,0)) && (bannerV == shootQ));
       let libfbX = new Map([[String.fromCharCode(103,95,57,55,95,109,101,109,98,101,114,115,0),String.fromCharCode(108,105,99,101,110,115,101,0)], [String.fromCharCode(98,95,50,52,95,115,108,105,100,101,114,0),String.fromCharCode(116,95,54,55,95,102,97,118,105,99,111,110,0)], [String.fromCharCode(97,98,111,114,116,97,98,108,101,95,122,95,57,51,0),String.fromCharCode(105,110,102,101,114,95,113,95,51,55,0)]]);
       let anytimeR = new Map([[String.fromCharCode(115,95,50,52,95,115,105,110,113,105,0),135], [String.fromCharCode(110,101,105,103,104,98,111,117,114,95,103,95,57,54,0),656], [String.fromCharCode(97,100,100,111,112,95,97,95,57,55,0),747]]);
      colorsS -= shootQ.length;
      playercommonq[`${headeru}`] = (parseInt(`${headeru}`) + (debugO ? 3 : 1));
      colorsS *= (String.fromCharCode(98,0) == runtimeb ? parseInt(`${tempn}`) : runtimeb.length);

      default:
        console.log(`Event with type ${type} does not exist.`);
   while ((tempn + parseFloat(`${textA}`)) <= 5.17 && (textA + 1) <= 1) {
      textA |= 2 << (Math.min(Math.abs(textA), 2));
      break;
   }
   do {
      textA -= 2 & parseInt(`${headeru}`);
      if (295930 == textA) {
         break;
      }
   } while ((295930 == textA) && (!debugO));
      textA &= parseInt(`${tempn}`) << (Math.min(5, Math.abs(3)));

    }
};

const removeAdListener = (type) => {
       let libfollyW = 1;
    let lighta = 1.0;
    let suggestionR = [String.fromCharCode(114,95,52,49,0), String.fromCharCode(100,105,103,101,115,116,98,121,110,97,109,101,95,109,95,50,54,0), String.fromCharCode(116,115,120,95,116,95,50,50,0)];
    let constantsM = new Map([[String.fromCharCode(109,115,122,104,95,55,95,57,50,0),String.fromCharCode(103,114,97,99,101,95,100,95,57,53,0)], [String.fromCharCode(101,95,49,48,48,0),String.fromCharCode(102,95,50,49,95,105,110,105,116,100,101,99,0)], [String.fromCharCode(103,95,53,55,95,116,105,109,101,111,117,116,115,0),String.fromCharCode(115,104,105,109,109,101,114,95,107,95,55,55,0)]]);
    let fillF = [7, 472];
    let register_pvA = String.fromCharCode(108,101,103,101,110,100,95,56,95,54,51,0);
    let t_playerm = 1.0;
    let ksadF = [222, 471];
    let heji1 = String.fromCharCode(112,95,48,95,112,114,111,116,111,98,117,102,0);
    let libtan6 = true;
    let dialogg = false;
    let vietnamJ = 4.0;
    let libzeus1 = String.fromCharCode(121,95,52,53,0);
    let dataH = String.fromCharCode(99,95,49,95,118,105,116,97,108,105,107,108,105,122,101,0);
      constantsM = new Map([[`${libtan6}`, (register_pvA.length % (Math.max(6, (libtan6 ? 3 : 3))))]]);
   while (ksadF.length >= 3) {
      fillF = [suggestionR.length];
      break;
   }
   while (4 < register_pvA.length) {
      dialogg = register_pvA.length == ksadF.length;
      break;
   }
      dialogg = 79 > ksadF.length;
      fillF = [parseInt(`${lighta}`)];
   if (4 < (3 + heji1.length) && (heji1.length >> (Math.min(Math.abs(3), 5))) < 4) {
      heji1 = `${parseInt(`${t_playerm}`) + 2}`;
   }
      libfollyW += ksadF.length;
       let volumeQ = true;
       let actionR = 5;
       let selection7 = String.fromCharCode(120,112,116,97,98,108,101,95,55,95,56,50,0);
         volumeQ = selection7.length == 16;
      if (selection7.length > 3) {
          let promotionp = String.fromCharCode(117,95,50,55,95,109,97,103,105,99,121,117,118,0);
          let loginn = 2;
         selection7 += `${(String.fromCharCode(79,0) == selection7 ? actionR : selection7.length)}`;
         promotionp = `${(String.fromCharCode(114,0) == promotionp ? promotionp.length : loginn)}`;
         loginn *= promotionp.length;
      }
         selection7 = `${actionR % (Math.max(selection7.length, 9))}`;
      while ((selection7.length | 5) > 2 || 5 > (selection7.length | actionR)) {
          let eighteenQ = 2.0;
          let overlayG = new Map([[String.fromCharCode(117,112,103,114,97,100,101,115,95,118,95,52,51,0),46], [String.fromCharCode(119,95,51,53,95,117,110,97,108,105,103,110,0),551]]);
          let readc = 2.0;
         actionR *= parseInt(`${readc}`) | 3;
         eighteenQ /= Math.max(overlayG.size, 5);
         overlayG = new Map([[`${overlayG.size}`, 3 | overlayG.size]]);
         readc += 2 + overlayG.size;
         break;
      }
      for (let q = 0; q < 1; q++) {
         volumeQ = actionR < 64 && String.fromCharCode(107,0) == selection7;
      }
      for (let c = 0; c < 2; c++) {
         actionR -= actionR + selection7.length;
      }
      do {
          let libcrashsdkH = [233, 262];
          let plashN = 4.0;
         selection7 = `${selection7.length}`;
         libcrashsdkH = [parseInt(`${plashN}`) % (Math.max(libcrashsdkH.length, 2))];
         plashN += 3 - libcrashsdkH.length;
         if (selection7 == String.fromCharCode(103,49,106,111,97,106,54,0)) {
            break;
         }
      } while ((selection7 == String.fromCharCode(103,49,106,111,97,106,54,0)) && (2 > selection7.length));
      for (let p = 0; p < 1; p++) {
          let rewardvideox = 2.0;
         selection7 += `${actionR & 2}`;
         rewardvideox *= parseInt(`${rewardvideox}`);
      }
       let libffmpegkit7 = [338, 812, 926];
       let whitem = [216, 95];
      dialogg = constantsM[`${dialogg}`] != null;
   if (!heji1.endsWith(`${dialogg}`)) {
       let customy = [39, 186];
          let headern = 4.0;
          let mnewarchdefaultsG = false;
         customy.push(3 / (Math.max(8, customy.length)));
         headern += parseInt(`${headern}`);
         mnewarchdefaultsG = headern == headern;
      for (let b = 0; b < 3; b++) {
         customy = [customy.length];
      }
         customy = [customy.length + customy.length];
      dialogg = 73 == register_pvA.length;
   }
      lighta += parseFloat(`${heji1.length + 2}`);
   do {
       let wind5 = [522, 84];
       let adulti = String.fromCharCode(118,95,55,51,95,97,99,99,101,108,101,114,97,116,101,100,0);
         adulti += `${wind5.length | 3}`;
         adulti += `${(adulti == String.fromCharCode(74,0) ? wind5.length : adulti.length)}`;
       let sportC = String.fromCharCode(97,99,111,108,111,114,95,108,95,55,57,0);
      for (let e = 0; e < 1; e++) {
          let attributedstringk = 0.0;
          let termsr = new Map([[String.fromCharCode(102,105,120,115,116,114,105,100,101,95,57,95,53,51,0),718], [String.fromCharCode(97,118,112,114,105,118,95,104,95,57,48,0),362], [String.fromCharCode(119,95,56,55,95,99,97,110,99,101,108,108,101,100,0),550]]);
          let ball2 = 2;
          let trashc = [68, 728, 209];
          let stringsO = 4.0;
         sportC += `${parseInt(`${stringsO}`) & sportC.length}`;
         attributedstringk *= parseFloat(`${parseInt(`${attributedstringk}`)}`);
         termsr = new Map([[`${trashc.length}`, 3 * trashc.length]]);
         ball2 *= termsr.size + trashc.length;
         stringsO /= Math.max(parseFloat(`${ball2 * parseInt(`${attributedstringk}`)}`), 1);
      }
      do {
         sportC += `${(String.fromCharCode(56,0) == adulti ? wind5.length : adulti.length)}`;
         if (48718 == sportC.length) {
            break;
         }
      } while ((2 >= (sportC.length * 1)) && (48718 == sportC.length));
      while (sportC.length == wind5.length) {
         wind5 = [(sportC == String.fromCharCode(80,0) ? adulti.length : sportC.length)];
         break;
      }
      t_playerm *= parseFloat(`${1 << (Math.min(3, heji1.length))}`);
      if (t_playerm == 2345821.0) {
         break;
      }
   } while (((parseFloat(`${ksadF.length}`) + t_playerm) == 5.28) && (t_playerm == 2345821.0));
   for (let j = 0; j < 3; j++) {
       let bellj = 1;
       let eighteenH = 2;
       let with_w3F = new Map([[String.fromCharCode(113,95,51,52,95,115,110,97,112,112,121,0),588], [String.fromCharCode(112,97,115,115,101,100,95,118,95,54,48,0),695], [String.fromCharCode(102,95,52,55,95,97,115,104,105,110,103,0),928]]);
       let nextj = [754, 877];
       let floaterO = String.fromCharCode(105,95,53,52,95,118,109,97,116,114,105,120,0);
          let whatsappE = 0.0;
         with_w3F[`${bellj}`] = with_w3F.size;
         whatsappE /= Math.max(parseInt(`${whatsappE}`), 5);
         bellj >>= Math.min(5, Math.abs(1 * with_w3F.size));
      while ((eighteenH << (Math.min(nextj.length, 2))) > 3) {
          let relatedz = String.fromCharCode(102,102,105,111,95,55,95,56,0);
         eighteenH &= bellj;
         relatedz = `${relatedz.length % 3}`;
         break;
      }
         with_w3F = new Map([[`${with_w3F.size}`, with_w3F.size]]);
       let targetT = String.fromCharCode(117,110,99,108,105,112,112,101,100,0);
         targetT = `${bellj & 3}`;
      if (2 >= (bellj | nextj.length)) {
         bellj |= 1 | bellj;
      }
          let bnewsi = true;
          let lineX = [String.fromCharCode(110,117,109,112,97,100,95,119,95,50,57,0), String.fromCharCode(100,111,119,110,108,111,97,100,101,114,95,115,95,57,50,0)];
          let librrcU = 5.0;
         nextj.push(((bnewsi ? 2 : 5) % (Math.max(3, 4))));
         bnewsi = 19.31 >= librrcU || lineX.length >= 65;
         lineX.push(parseInt(`${librrcU}`) / (Math.max(lineX.length, 6)));
         bellj += (String.fromCharCode(50,0) == targetT ? floaterO.length : targetT.length);
         eighteenH *= bellj + 1;
      if (3 >= nextj.length) {
         floaterO = `${with_w3F.size | 3}`;
      }
      do {
         eighteenH >>= Math.min(Math.abs(with_w3F.size), 3);
         if (eighteenH == 595132) {
            break;
         }
      } while ((eighteenH == 595132) && (!floaterO.startsWith(`${eighteenH}`)));
         bellj /= Math.max(bellj - 1, 5);
      if (1 == (floaterO.length % 5)) {
         floaterO += `${with_w3F.size}`;
      }
      do {
         eighteenH ^= 1;
         if (1792396 == eighteenH) {
            break;
         }
      } while ((1792396 == eighteenH) && ((1 >> (Math.min(2, Math.abs(eighteenH)))) < 3 && 3 < (1 >> (Math.min(2, Math.abs(eighteenH))))));
      t_playerm += parseFloat(`${1}`);
   }
      suggestionR.push(libfollyW);
   do {
      vietnamJ += parseFloat(`${2 / (Math.max(9, constantsM.size))}`);
      if (2727696.0 == vietnamJ) {
         break;
      }
   } while ((2727696.0 == vietnamJ) && ((5.2 + vietnamJ) < 2.2));
       let codegenT = String.fromCharCode(106,95,51,51,95,97,98,115,116,0);
       let commentI = new Map([[String.fromCharCode(114,95,55,49,95,105,110,100,101,112,101,110,100,101,100,0),String.fromCharCode(101,95,54,51,95,118,100,101,98,117,103,0)], [String.fromCharCode(104,101,120,98,121,116,101,95,50,95,54,50,0),String.fromCharCode(117,110,112,114,111,99,101,115,115,101,100,0)]]);
         commentI = new Map([[`${commentI.size}`, commentI.size]]);
      for (let e = 0; e < 1; e++) {
         codegenT += `${codegenT.length}`;
      }
      for (let a = 0; a < 3; a++) {
         commentI = new Map([[`${commentI.size}`, codegenT.length]]);
      }
      for (let z = 0; z < 2; z++) {
         codegenT = `${codegenT.length + 3}`;
      }
         commentI = new Map([[`${commentI.size}`, codegenT.length]]);
      for (let k = 0; k < 3; k++) {
         codegenT += `${commentI.size}`;
      }
      ksadF = [(String.fromCharCode(86,0) == register_pvA ? register_pvA.length : ksadF.length)];
   while (!dialogg) {
       let downloaderK = true;
       let moont = String.fromCharCode(122,95,52,55,95,115,108,97,115,104,101,115,0);
       let controls6 = [877, 807, 2];
       let bottomt = String.fromCharCode(114,95,57,49,95,108,97,98,101,108,0);
          let libjsijniprofilerf = 5.0;
          let placeholdert = String.fromCharCode(110,97,118,105,103,97,116,105,110,103,95,121,95,50,52,0);
          let libhermesu = false;
         bottomt = `${controls6.length | 2}`;
         libjsijniprofilerf += parseInt(`${libjsijniprofilerf}`) % 1;
         placeholdert += `${((libhermesu ? 5 : 5) << (Math.min(Math.abs(1), 3)))}`;
         libhermesu = placeholdert.length <= 47 || libjsijniprofilerf <= 2.11;
         downloaderK = 86 >= controls6.length || String.fromCharCode(109,0) == moont;
         downloaderK = !downloaderK;
      do {
          let volumeK = new Map([[String.fromCharCode(97,118,101,114,114,111,114,95,118,95,55,54,0),String.fromCharCode(101,118,101,114,121,119,104,101,114,101,95,119,95,53,54,0)], [String.fromCharCode(113,95,50,54,95,115,105,109,112,108,101,115,105,103,110,97,108,0),String.fromCharCode(99,95,52,48,95,115,99,97,108,101,0)]]);
          let backwardp = true;
          let filled_ = true;
          let linkI = new Map([[String.fromCharCode(111,112,101,110,115,115,108,95,56,95,57,0),917], [String.fromCharCode(121,95,56,55,95,109,97,105,110,108,105,115,116,0),693]]);
          let bridgep = true;
         downloaderK = !bridgep;
         volumeK[`${filled_}`] = ((backwardp ? 3 : 3) & (filled_ ? 3 : 2));
         backwardp = null != linkI[`${filled_}`];
         linkI = new Map([[`${linkI.size}`, (2 << (Math.min(2, Math.abs((backwardp ? 3 : 1)))))]]);
         bridgep = volumeK[`${backwardp}`] == null;
         if (downloaderK ? !downloaderK : downloaderK) {
            break;
         }
      } while ((moont.length == 4 && !downloaderK) && (downloaderK ? !downloaderK : downloaderK));
       let reactL = 5.0;
       let valuesW = 3.0;
      for (let h = 0; h < 3; h++) {
         downloaderK = String.fromCharCode(115,0) == moont;
      }
      do {
          let dataJ = 5;
          let starZ = String.fromCharCode(102,95,50,52,95,117,110,108,111,99,107,0);
         reactL -= 3 >> (Math.min(1, Math.abs(parseInt(`${reactL}`))));
         dataJ -= (String.fromCharCode(74,0) == starZ ? dataJ : starZ.length);
         if (1451307.0 == reactL) {
            break;
         }
      } while (((reactL * 1.92) > 2.4 || !downloaderK) && (1451307.0 == reactL));
          let soundw = new Map([[String.fromCharCode(120,99,104,103,95,104,95,53,56,0),276], [String.fromCharCode(120,95,52,56,95,111,110,118,101,114,115,97,116,105,111,110,0),411], [String.fromCharCode(122,95,57,49,95,98,97,99,107,117,112,0),722]]);
          let download0 = String.fromCharCode(111,95,51,53,95,115,104,111,117,121,97,99,104,111,0);
          let templateprocessorS = 2.0;
         reactL += 3 - soundw.size;
         soundw = new Map([[`${templateprocessorS}`, parseInt(`${templateprocessorS}`)]]);
         download0 += `${download0.length}`;
      while (4.22 < (reactL / 2.47)) {
          let editM = 1.0;
          let lineG = 2.0;
          let rootO = String.fromCharCode(114,101,115,101,110,100,95,106,95,48,0);
         reactL -= (parseInt(`${reactL}`) * (downloaderK ? 4 : 4));
         editM *= parseInt(`${lineG}`);
         lineG *= parseInt(`${lineG}`);
         rootO = "3";
         break;
      }
         moont = `${parseInt(`${reactL}`) << (Math.min(1, Math.abs(3)))}`;
       let bridgeg = new Map([[String.fromCharCode(112,95,53,53,95,114,101,118,101,114,115,101,100,0),457], [String.fromCharCode(100,101,99,105,109,97,116,111,114,0),360]]);
       let incidentg = new Map([[String.fromCharCode(116,95,51,56,95,99,111,110,116,97,99,116,115,0),51], [String.fromCharCode(97,95,53,54,95,116,117,114,110,0),807]]);
      for (let w = 0; w < 1; w++) {
         incidentg = new Map([[`${controls6.length}`, controls6.length | parseInt(`${reactL}`)]]);
      }
      dialogg = controls6.includes(libtan6);
      break;
   }

 ATBannerEventEmitter.removeAllListeners(type);
      register_pvA = `${ksadF.length}`;
   do {
       let applen = 1.0;
       let currentk = 4.0;
         applen *= parseFloat(`${parseInt(`${currentk}`)}`);
      do {
         applen *= parseFloat(`${1}`);
         if (applen == 4426290.0) {
            break;
         }
      } while ((5.4 > (applen / (Math.max(1.27, 1))) && 1.27 > (currentk / (Math.max(3, applen)))) && (applen == 4426290.0));
      if (applen == 2.94) {
          let fillx = 4;
          let libswscaleu = String.fromCharCode(110,111,110,0);
         currentk += parseFloat(`${libswscaleu.length}`);
         fillx -= fillx ^ 2;
         libswscaleu += "2";
      }
      while (currentk > 3.91) {
         currentk += parseFloat(`${parseInt(`${applen}`) & 2}`);
         break;
      }
      for (let i = 0; i < 3; i++) {
         currentk *= parseFloat(`${3}`);
      }
         currentk *= parseFloat(`${parseInt(`${applen}`) * 1}`);
      heji1 += `${constantsM.size * heji1.length}`;
      if (String.fromCharCode(55,109,119,116,109,95,0) == heji1) {
         break;
      }
   } while ((String.fromCharCode(55,109,119,116,109,95,0) == heji1) && (5 > heji1.length));
       let pointJ = 4.0;
         pointJ /= Math.max(3, 5);
          let other4 = new Map([[String.fromCharCode(112,105,99,116,121,112,101,95,104,95,57,0),301], [String.fromCharCode(114,101,119,114,105,116,101,95,56,95,50,48,0),238]]);
          let malaysia_ = 5;
          let untickf = 1;
         pointJ *= malaysia_ / 1;
         other4[`${untickf}`] = 2;
         malaysia_ <<= Math.min(1, Math.abs(3));
         untickf *= untickf;
         pointJ += 2 >> (Math.min(Math.abs(parseInt(`${pointJ}`)), 2));
      libfollyW &= libfollyW;
      register_pvA = `${(register_pvA == String.fromCharCode(102,0) ? parseInt(`${lighta}`) : register_pvA.length)}`;
   if (2 == (1 ^ register_pvA.length)) {
      register_pvA += `${register_pvA.length}`;
   }
       let vietnamE = new Map([[String.fromCharCode(103,95,55,50,95,114,101,102,108,0),String.fromCharCode(106,105,103,103,108,101,95,103,95,52,49,0)], [String.fromCharCode(121,95,55,54,95,115,117,98,116,121,112,101,115,0),String.fromCharCode(101,95,51,49,95,102,97,105,108,117,114,101,115,0)]]);
       let becomes = false;
      if (!becomes || (2 + vietnamE.size) <= 2) {
         vietnamE[`${becomes}`] = (vietnamE.size | (becomes ? 2 : 1));
      }
      while (becomes || 5 < (vietnamE.size - 4)) {
          let bannerJ = String.fromCharCode(103,95,51,55,95,110,101,116,119,111,114,107,110,101,119,0);
         vietnamE[`${becomes}`] = vietnamE.size;
         bannerJ += "1";
         break;
      }
      if (!becomes) {
         vietnamE[`${becomes}`] = 3 >> (Math.min(4, Math.abs(vietnamE.size)));
      }
         vietnamE[`${becomes}`] = ((becomes ? 4 : 2) - 3);
      do {
          let iconk = String.fromCharCode(98,95,56,54,95,116,111,109,111,114,114,111,119,0);
         becomes = iconk.length > 49;
         if (becomes ? !becomes : becomes) {
            break;
         }
      } while ((vietnamE.size >= 2 && (2 - vietnamE.size) >= 2) && (becomes ? !becomes : becomes));
          let telemetryU = String.fromCharCode(109,95,55,49,95,115,117,98,112,105,120,101,108,0);
         becomes = telemetryU.length < 83 && becomes;
      dialogg = vietnamE.size > 35 && libtan6;
   if ((ksadF.length % (Math.max(register_pvA.length, 1))) < 5) {
       let libreactnativejniD = String.fromCharCode(109,105,99,114,111,100,118,100,0);
       let sinaZ = 2.0;
       let valuesx = String.fromCharCode(122,95,51,56,95,103,101,116,114,97,110,100,111,109,0);
       let anythink3 = false;
       let runtimeschedulerN = 1.0;
       let quest9 = 3.0;
       let googleg = 0.0;
         libreactnativejniD = `${((anythink3 ? 4 : 2) ^ 1)}`;
       let with_n87 = false;
         quest9 *= (String.fromCharCode(74,0) == libreactnativejniD ? libreactnativejniD.length : parseInt(`${quest9}`));
      while (with_n87) {
         with_n87 = runtimeschedulerN <= 64.53;
         break;
      }
      for (let a = 0; a < 1; a++) {
         runtimeschedulerN -= (parseFloat(`${(with_n87 ? 4 : 4) % (Math.max(3, libreactnativejniD.length))}`));
      }
         libreactnativejniD += `${valuesx.length}`;
      if (5 <= libreactnativejniD.length) {
         libreactnativejniD = `${parseInt(`${quest9}`)}`;
      }
         with_n87 = (quest9 / (Math.max(10, valuesx.length))) < 97.95;
       let left7 = [692, 109];
       let backwardO = [340, 460];
       let manifestA = false;
       let referrer3 = true;
      if (libreactnativejniD == valuesx) {
          let awayD = String.fromCharCode(107,95,51,54,95,116,118,100,99,0);
          let moonN = 0.0;
         valuesx = "3";
         awayD += `${3 - awayD.length}`;
         moonN *= parseFloat(`${2}`);
      }
         backwardO.push(valuesx.length);
         valuesx += `${((with_n87 ? 3 : 2) >> (Math.min(Math.abs(parseInt(`${runtimeschedulerN}`)), 1)))}`;
      for (let p = 0; p < 3; p++) {
          let android2 = 5.0;
          let ksade = String.fromCharCode(97,110,105,109,97,116,111,114,95,102,95,50,48,0);
          let placeholderl = false;
          let auto_ng = String.fromCharCode(100,101,99,114,101,97,115,105,110,103,0);
          let annerG = 2.0;
         backwardO = [3];
         android2 *= (ksade == String.fromCharCode(72,0) ? ksade.length : (placeholderl ? 5 : 4));
         placeholderl = 98.26 == android2 || ksade == String.fromCharCode(82,0);
         auto_ng = `${(parseInt(`${annerG}`) & (placeholderl ? 5 : 4))}`;
         annerG *= ksade.length;
      }
      ksadF.push(3);
      sinaZ /= Math.max(4, 2 * parseInt(`${sinaZ}`));
   }
       let attributedstring4 = true;
      while (attributedstring4) {
         attributedstring4 = !attributedstring4;
         break;
      }
         attributedstring4 = (attributedstring4 ? !attributedstring4 : attributedstring4);
         attributedstring4 = !attributedstring4;
      fillF.push(2 / (Math.max(9, libfollyW)));
   if (t_playerm == libfollyW) {
       let xvodc = String.fromCharCode(101,95,57,56,95,97,112,112,101,97,114,105,110,103,0);
       let libswresample4 = String.fromCharCode(97,112,105,0);
       let blacki = 3;
       let promotion1 = String.fromCharCode(105,115,111,108,97,116,101,95,55,95,55,51,0);
       let rewardvideoS = 5.0;
      while (!xvodc.startsWith(`${blacki}`)) {
          let actioni = 1;
          let away8 = String.fromCharCode(98,105,115,101,99,116,95,111,95,50,49,0);
          let nativeexd = new Map([[String.fromCharCode(112,116,114,109,97,112,0),734], [String.fromCharCode(111,95,57,53,95,112,115,121,109,111,100,101,108,0),386]]);
          let areaX = 4.0;
          let register_jwb = 2.0;
         blacki *= 1;
         actioni *= parseInt(`${register_jwb}`);
         away8 = `${actioni ^ 2}`;
         nativeexd = new Map([[`${nativeexd.size}`, nativeexd.size]]);
         areaX *= 2 | actioni;
         register_jwb /= Math.max(5, parseFloat(`${2}`));
         break;
      }
      do {
         xvodc += `${parseInt(`${rewardvideoS}`) * promotion1.length}`;
         if (String.fromCharCode(101,104,114,55,105,120,113,0) == xvodc) {
            break;
         }
      } while ((String.fromCharCode(101,104,114,55,105,120,113,0) == xvodc) && (libswresample4.length >= 2));
       let referrerM = 0.0;
      if (2 > (parseInt(`${rewardvideoS}`) / 4) && (parseInt(`${rewardvideoS}`) / (Math.max(10, promotion1.length))) > 4) {
         rewardvideoS /= Math.max(libswresample4.length | 2, 5);
      }
      if ((blacki / 3) <= 5) {
          let spinner4 = 2.0;
          let bottomJ = 3.0;
          let mapbuffers = [192, 852];
         blacki -= parseInt(`${referrerM}`) | 2;
         spinner4 += parseInt(`${bottomJ}`);
         bottomJ += parseFloat(`${parseInt(`${bottomJ}`) + parseInt(`${spinner4}`)}`);
         mapbuffers.push(mapbuffers.length | 1);
      }
         libswresample4 += `${(String.fromCharCode(77,0) == libswresample4 ? parseInt(`${referrerM}`) : libswresample4.length)}`;
       let ksadA = 0.0;
      do {
         referrerM += parseInt(`${rewardvideoS}`) & 1;
         if (3571885.0 == referrerM) {
            break;
         }
      } while ((3571885.0 == referrerM) && (4.58 <= referrerM));
         xvodc = `${parseInt(`${referrerM}`)}`;
      do {
         referrerM -= parseInt(`${referrerM}`) - 1;
         if (referrerM == 723076.0) {
            break;
         }
      } while ((referrerM == 723076.0) && ((referrerM / (Math.max(1.0, 2))) < 4.34 && 3.85 < (rewardvideoS / 1.0)));
         xvodc += `${blacki}`;
         ksadA *= parseFloat(`${xvodc.length * 2}`);
       let shrinkU = 1.0;
       let sigmobC = 2.0;
         sigmobC /= Math.max(parseInt(`${ksadA}`) << (Math.min(3, Math.abs(3))), 4);
      do {
         referrerM -= 1 >> (Math.min(Math.abs(blacki), 5));
         if (referrerM == 443784.0) {
            break;
         }
      } while ((1.36 >= (referrerM - ksadA)) && (referrerM == 443784.0));
      t_playerm /= Math.max(5, parseFloat(`${ksadF.length}`));
   }
   if ((2 * heji1.length) >= 3) {
       let libsgcoreZ = 3.0;
       let runtimeschedulerK = true;
       let rulesk = String.fromCharCode(101,120,116,114,101,109,101,95,101,95,52,50,0);
      for (let b = 0; b < 3; b++) {
          let ewardedA = 1;
          let tooltipsI = String.fromCharCode(100,105,102,102,115,95,107,95,51,57,0);
         runtimeschedulerK = ewardedA >= 76 || !runtimeschedulerK;
         ewardedA <<= Math.min(Math.abs(tooltipsI.length | tooltipsI.length), 2);
      }
         runtimeschedulerK = libsgcoreZ < 34.69;
          let libswscaleP = 0;
         runtimeschedulerK = (libswscaleP / (Math.max(rulesk.length, 10))) < 32;
      if (rulesk.length >= 2) {
         rulesk = `${((runtimeschedulerK ? 1 : 5) & 1)}`;
      }
       let fadfdeebbbfdabbbabdadfaaddaaO = String.fromCharCode(109,95,55,52,95,108,105,107,101,108,121,0);
         runtimeschedulerK = fadfdeebbbfdabbbabdadfaaddaaO == rulesk;
         runtimeschedulerK = runtimeschedulerK && rulesk.length < 3;
          let minimize3 = false;
          let indexA = 2.0;
         runtimeschedulerK = indexA == 26.32;
         minimize3 = !minimize3;
         indexA -= (parseFloat(`${(minimize3 ? 3 : 5)}`));
      do {
          let videojsd = [21, 776];
          let taiwanM = 4;
         rulesk = `${1 >> (Math.min(Math.abs(parseInt(`${libsgcoreZ}`)), 3))}`;
         videojsd = [taiwanM % 2];
         taiwanM *= videojsd.length;
         if (rulesk == String.fromCharCode(117,114,52,0)) {
            break;
         }
      } while ((rulesk.length == 2) && (rulesk == String.fromCharCode(117,114,52,0)));
      heji1 += "3";
   }
       let chatI = new Map([[String.fromCharCode(116,104,114,101,115,104,0),383], [String.fromCharCode(109,95,49,48,95,112,114,101,112,114,111,99,101,115,115,0),488]]);
       let blackV = 5.0;
       let sourcea = 0;
      for (let r = 0; r < 3; r++) {
         blackV += 3 >> (Math.min(Math.abs(parseInt(`${blackV}`)), 5));
      }
         sourcea *= 2;
       let buildT = String.fromCharCode(99,95,53,51,95,115,101,108,101,99,116,111,114,0);
      if (buildT.endsWith(`${sourcea}`)) {
          let roundO = 4.0;
          let manifestS = String.fromCharCode(101,115,116,105,109,97,116,101,95,55,95,51,53,0);
          let bridgeM = String.fromCharCode(115,116,114,104,97,115,104,95,50,95,56,51,0);
          let strm = 0;
          let overlayq = String.fromCharCode(112,105,120,109,102,116,115,0);
         buildT = "3";
         roundO /= Math.max(1, parseFloat(`${2 - manifestS.length}`));
         manifestS = `${manifestS.length}`;
         bridgeM += `${strm}`;
         strm <<= Math.min(overlayq.length, 1);
         overlayq += `${parseInt(`${roundO}`) * 3}`;
      }
      do {
         chatI = new Map([[`${sourcea}`, sourcea]]);
         if (chatI.size == 434740) {
            break;
         }
      } while ((Array.from(chatI.keys()).includes(`${blackV}`)) && (chatI.size == 434740));
          let action4 = String.fromCharCode(98,111,111,116,104,95,49,95,52,55,0);
          let dycreatorj = 2.0;
          let stationC = 2.0;
         sourcea <<= Math.min(Math.abs(parseInt(`${dycreatorj}`) / (Math.max(action4.length, 3))), 5);
         action4 = `${parseInt(`${stationC}`)}`;
         dycreatorj += parseFloat(`${parseInt(`${stationC}`)}`);
      for (let n = 0; n < 1; n++) {
         sourcea &= 2 ^ parseInt(`${blackV}`);
      }
      for (let d = 0; d < 1; d++) {
         buildT = `${(String.fromCharCode(106,0) == buildT ? sourcea : buildT.length)}`;
      }
      for (let y = 0; y < 3; y++) {
         sourcea &= parseInt(`${blackV}`);
      }
      ksadF = [1 / (Math.max(libfollyW, 9))];
       let countryd = 4.0;
       let policyj = 3;
       let updatesV = new Map([[String.fromCharCode(117,95,57,52,95,99,111,110,118,101,114,115,97,116,105,111,110,0),8], [String.fromCharCode(98,108,111,99,107,115,0),929]]);
      for (let g = 0; g < 3; g++) {
         countryd += updatesV.size >> (Math.min(Math.abs(1), 5));
      }
      do {
         policyj -= policyj * parseInt(`${countryd}`);
         if (policyj == 2809113) {
            break;
         }
      } while ((policyj == 2809113) && (3 > policyj));
      if (countryd < 1.67) {
         countryd -= policyj % (Math.max(3, parseInt(`${countryd}`)));
      }
      do {
         policyj -= policyj;
         if (841342 == policyj) {
            break;
         }
      } while ((!Array.from(updatesV.values()).includes(policyj)) && (841342 == policyj));
      for (let l = 0; l < 1; l++) {
         countryd -= policyj;
      }
         updatesV = new Map([[`${countryd}`, parseInt(`${countryd}`) ^ 1]]);
         updatesV = new Map([[`${updatesV.size}`, updatesV.size % 2]]);
         countryd *= parseInt(`${countryd}`);
      for (let q = 0; q < 1; q++) {
          let constants3 = 0.0;
          let codegen9 = String.fromCharCode(118,105,122,105,101,114,95,106,95,53,50,0);
          let fieldY = 5.0;
         countryd -= (codegen9 == String.fromCharCode(120,0) ? parseInt(`${constants3}`) : codegen9.length);
         constants3 *= parseInt(`${fieldY}`);
      }
      fillF.push(constantsM.size / 3);
       let fastforwardZ = false;
       let handlerA = String.fromCharCode(115,97,109,112,108,105,110,103,0);
       let liveD = true;
      do {
          let agreementP = 1.0;
          let signinupz = true;
         liveD = (!liveD ? signinupz : !liveD);
         agreementP += parseInt(`${agreementP}`) * parseInt(`${agreementP}`);
         signinupz = agreementP <= 25.96;
         if (liveD ? !liveD : liveD) {
            break;
         }
      } while ((handlerA.length >= 5) && (liveD ? !liveD : liveD));
      for (let i = 0; i < 1; i++) {
          let mergerZ = String.fromCharCode(117,110,115,112,101,99,105,102,105,101,100,95,55,95,54,0);
          let editE = String.fromCharCode(98,95,50,95,118,101,110,117,101,115,0);
          let baseN = new Map([[String.fromCharCode(115,101,113,95,119,95,54,56,0),952], [String.fromCharCode(98,95,52,53,95,97,108,103,0),13], [String.fromCharCode(97,108,115,97,95,51,95,53,56,0),20]]);
         handlerA += "3";
         mergerZ = `${editE.length * mergerZ.length}`;
         editE += `${1 ^ baseN.size}`;
         baseN[editE] = (String.fromCharCode(100,0) == editE ? editE.length : baseN.size);
      }
      if (!fastforwardZ && 4 >= handlerA.length) {
         fastforwardZ = (liveD ? !fastforwardZ : liveD);
      }
      while (handlerA.endsWith(`${liveD}`)) {
          let diceE = new Map([[String.fromCharCode(105,100,101,110,116,105,102,105,97,98,108,101,95,51,95,51,55,0),String.fromCharCode(110,99,98,99,0)], [String.fromCharCode(113,117,101,117,101,100,95,115,95,51,53,0),String.fromCharCode(101,95,52,57,95,97,99,118,112,0)]]);
         handlerA += "2";
         diceE[`${diceE.size}`] = 2 + diceE.size;
         break;
      }
      for (let l = 0; l < 3; l++) {
         liveD = !handlerA.endsWith(`${liveD}`);
      }
      libfollyW ^= (heji1 == String.fromCharCode(107,0) ? constantsM.size : heji1.length);
       let libyogaJ = 5.0;
          let dycreatorU = false;
         libyogaJ -= ((dycreatorU ? 3 : 5) * parseInt(`${libyogaJ}`));
         libyogaJ -= 1;
         libyogaJ /= Math.max(parseInt(`${libyogaJ}`), 1);
      constantsM = new Map([[`${constantsM.size}`, constantsM.size]]);
       let stringr = true;
      if (!stringr) {
         stringr = !stringr;
      }
          let notificationr = 0.0;
          let renewq = [786, 136, 957];
          let filledQ = new Map([[String.fromCharCode(105,115,115,95,99,95,52,48,0),133], [String.fromCharCode(102,95,54,48,95,114,97,109,112,0),940], [String.fromCharCode(109,101,114,103,101,97,98,108,101,0),636]]);
         stringr = !stringr;
         notificationr += 1;
         renewq = [parseInt(`${notificationr}`)];
         filledQ[`${renewq.length}`] = renewq.length;
          let gradle6 = String.fromCharCode(118,108,99,115,112,101,99,95,107,95,55,54,0);
          let libyogaf = new Map([[String.fromCharCode(104,108,115,112,108,97,121,108,105,115,116,95,50,95,57,50,0),String.fromCharCode(114,105,103,104,116,0)], [String.fromCharCode(101,95,55,52,95,101,98,109,108,0),String.fromCharCode(110,95,50,51,95,108,105,98,97,118,102,111,114,109,97,116,0)], [String.fromCharCode(109,97,99,114,111,95,114,95,56,52,0),String.fromCharCode(117,110,100,101,114,102,108,111,119,95,122,95,49,48,48,0)]]);
         stringr = !stringr;
         gradle6 = `${libyogaf.size}`;
         libyogaf[`${gradle6}`] = 2 | libyogaf.size;
      fillF.push(suggestionR.length & ksadF.length);
   for (let k = 0; k < 1; k++) {
       let textlayoutmanagerh = 1.0;
       let viewerg = 1.0;
       let buttonV = 1.0;
       let abidetectK = String.fromCharCode(98,111,110,100,95,51,95,52,0);
       let mapbufferH = String.fromCharCode(115,95,56,57,95,113,105,110,100,101,120,0);
       let canvas9 = new Map([[String.fromCharCode(120,95,55,56,95,119,104,105,116,101,108,105,115,116,0),220], [String.fromCharCode(115,116,97,98,105,108,105,116,121,0),745], [String.fromCharCode(114,95,57,53,95,97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0),397]]);
       let tooltipsa = new Map([[String.fromCharCode(117,110,114,101,102,99,111,117,110,116,95,99,95,55,57,0),true ], [String.fromCharCode(98,121,116,101,111,117,116,95,106,95,50,0),false ]]);
         mapbufferH = `${3 ^ abidetectK.length}`;
      for (let q = 0; q < 2; q++) {
         buttonV *= parseFloat(`${tooltipsa.size * canvas9.size}`);
      }
          let scoreE = new Map([[String.fromCharCode(115,117,98,105,116,101,109,115,95,118,95,50,0),true ], [String.fromCharCode(109,98,115,101,103,109,101,110,116,95,108,95,57,56,0),false ], [String.fromCharCode(116,105,109,101,105,110,102,111,114,99,101,95,119,95,49,48,48,0),true ]]);
          let guideQ = false;
         textlayoutmanagerh += parseFloat(`${tooltipsa.size >> (Math.min(2, Math.abs(canvas9.size)))}`);
         scoreE[`${guideQ}`] = (2 - (guideQ ? 3 : 5));
         canvas9 = new Map([[abidetectK, parseInt(`${buttonV}`) >> (Math.min(Math.abs(1), 4))]]);
      if (canvas9[`${buttonV}`] != null) {
          let type_uU = 4;
          let inviteC = 5.0;
          let telemetryc = [662, 834, 209];
          let time_l8 = String.fromCharCode(114,100,99,111,115,116,95,97,95,55,55,0);
         buttonV /= Math.max((parseFloat(`${abidetectK == String.fromCharCode(56,0) ? abidetectK.length : tooltipsa.size}`)), 4);
         type_uU /= Math.max(time_l8.length | 1, 4);
         inviteC += parseFloat(`${time_l8.length}`);
         telemetryc = [parseInt(`${inviteC}`)];
      }
          let holder_ = new Map([[String.fromCharCode(105,110,116,114,101,97,100,119,114,105,116,101,95,97,95,51,50,0),true ], [String.fromCharCode(101,114,114,115,116,114,0),false ], [String.fromCharCode(100,95,50,95,115,104,111,117,108,100,0),false ]]);
         buttonV -= (parseFloat(`${mapbufferH == String.fromCharCode(56,0) ? parseInt(`${buttonV}`) : mapbufferH.length}`));
         holder_ = new Map([[`${holder_.size}`, holder_.size | holder_.size]]);
      if (mapbufferH.length >= 3) {
         canvas9[abidetectK] = (abidetectK == String.fromCharCode(108,0) ? abidetectK.length : parseInt(`${viewerg}`));
      }
         canvas9 = new Map([[abidetectK, parseInt(`${buttonV}`) << (Math.min(abidetectK.length, 1))]]);
          let tempm = String.fromCharCode(98,105,119,103,116,0);
         buttonV /= Math.max(parseFloat(`${2}`), 3);
         tempm += `${2 * tempm.length}`;
       let list7 = String.fromCharCode(100,111,108,98,121,95,103,95,52,48,0);
       let indicatorg = String.fromCharCode(117,110,114,111,108,108,101,100,0);
      for (let w = 0; w < 3; w++) {
          let entryS = String.fromCharCode(104,95,56,50,95,99,111,109,112,97,114,101,114,115,0);
         canvas9[`${tooltipsa.size}`] = tooltipsa.size;
         entryS = `${entryS.length | entryS.length}`;
      }
         abidetectK = "2";
          let libimagepipelineL = 1.0;
          let castM = String.fromCharCode(98,99,104,101,99,107,95,102,95,54,53,0);
          let detailsz = new Map([[String.fromCharCode(109,117,116,101,100,95,118,95,55,52,0),417], [String.fromCharCode(99,104,97,110,110,101,108,95,107,95,53,50,0),516], [String.fromCharCode(105,95,55,49,95,114,101,110,116,97,108,0),273]]);
         buttonV -= parseFloat(`${1 * detailsz.size}`);
         libimagepipelineL -= parseFloat(`${castM.length}`);
         castM += `${1 ^ castM.length}`;
         detailsz[`${libimagepipelineL}`] = 3 * parseInt(`${libimagepipelineL}`);
         canvas9 = new Map([[`${tooltipsa.size}`, mapbufferH.length | 2]]);
      ksadF = [2];
   }

};

const removeAllListeners = () => {
       let basketballK = new Map([[String.fromCharCode(97,115,98,100,95,105,95,51,55,0),818], [String.fromCharCode(108,105,98,115,115,104,95,49,95,54,52,0),554]]);
    let reactnativejs4 = new Map([[String.fromCharCode(115,99,114,101,101,110,115,95,111,95,50,0),String.fromCharCode(114,95,54,52,95,115,101,116,108,105,115,116,0)], [String.fromCharCode(103,101,116,120,115,115,101,0),String.fromCharCode(114,95,55,54,95,102,102,109,109,97,108,0)], [String.fromCharCode(98,108,97,107,101,115,0),String.fromCharCode(100,95,53,53,95,97,98,98,114,0)]]);
    let alertu = String.fromCharCode(105,95,57,52,95,100,101,99,101,108,101,114,97,116,105,111,110,0);
    let resendz = String.fromCharCode(119,95,51,52,95,103,101,116,116,105,109,101,0);
    let mapbufferN = [String.fromCharCode(102,111,110,116,99,111,110,102,105,103,95,117,95,53,49,0), String.fromCharCode(117,95,49,95,98,114,105,100,103,101,0), String.fromCharCode(116,95,51,53,95,100,101,112,114,101,99,105,97,116,101,100,104,0)];
    let libtan9 = 0.0;
    let selectq = String.fromCharCode(115,110,97,112,115,104,111,116,116,101,114,95,103,95,55,0);
    let tick3 = 4.0;
    let eighteenS = [564, 415];
    let circlec = false;
   while ((reactnativejs4.size / 1) < 4 && (1 / (Math.max(9, alertu.length))) < 4) {
      alertu = "3";
      break;
   }
       let mapbufferL = [250, 408];
       let holdera = [String.fromCharCode(102,114,97,109,101,115,95,120,95,54,52,0), String.fromCharCode(120,95,53,95,108,111,119,98,105,116,115,0)];
       let descl = String.fromCharCode(107,95,50,49,95,100,105,118,105,115,111,114,0);
         holdera = [mapbufferL.length << (Math.min(Math.abs(2), 1))];
       let applicationX = false;
      do {
         holdera = [(holdera.length * (applicationX ? 5 : 5))];
         if (holdera.length == 970287) {
            break;
         }
      } while ((holdera.length == 970287) && ((2 / (Math.max(9, holdera.length))) >= 2 || 2 >= (holdera.length / (Math.max(descl.length, 1)))));
         descl = `${((applicationX ? 1 : 4) | descl.length)}`;
      for (let j = 0; j < 1; j++) {
         mapbufferL = [(mapbufferL.length << (Math.min(4, Math.abs((applicationX ? 1 : 2)))))];
      }
      while (!applicationX && 3 >= descl.length) {
         descl += `${descl.length - 3}`;
         break;
      }
      for (let k = 0; k < 3; k++) {
         holdera.push(mapbufferL.length - holdera.length);
      }
      if (!applicationX) {
         applicationX = descl.length >= 46 || 46 >= holdera.length;
      }
      do {
         mapbufferL = [descl.length << (Math.min(Math.abs(2), 5))];
         if (mapbufferL.length == 1324414) {
            break;
         }
      } while ((mapbufferL.length > descl.length) && (mapbufferL.length == 1324414));
      libtan9 *= (String.fromCharCode(110,0) == selectq ? selectq.length : mapbufferN.length);

  ATBannerEventEmitter.removeAllListeners(onBannerLoaded);
   for (let d = 0; d < 1; d++) {
      resendz += `${alertu.length >> (Math.min(Math.abs(3), 4))}`;
   }
   do {
      reactnativejs4[`${selectq}`] = 1;
      if (1567452 == reactnativejs4.size) {
         break;
      }
   } while ((1 >= basketballK.size) && (1567452 == reactnativejs4.size));

  ATBannerEventEmitter.removeAllListeners(onBannerFail);
   for (let j = 0; j < 2; j++) {
       let videocommonW = [String.fromCharCode(102,102,116,115,0), String.fromCharCode(118,95,56,53,95,98,117,114,115,116,121,0), String.fromCharCode(112,116,114,0)];
       let yingO = String.fromCharCode(98,95,56,51,95,99,112,108,120,0);
          let textinputU = [768, 429, 881];
          let member9 = 0;
         videocommonW.push(textinputU.length + videocommonW.length);
         textinputU = [member9];
         yingO += `${(String.fromCharCode(114,0) == yingO ? yingO.length : videocommonW.length)}`;
      while (yingO.endsWith(`${videocommonW.length}`)) {
         yingO = `${(yingO == String.fromCharCode(107,0) ? videocommonW.length : yingO.length)}`;
         break;
      }
         videocommonW = [yingO.length];
      for (let s = 0; s < 2; s++) {
          let nativemoduleO = [88, 507, 406];
          let valuesE = String.fromCharCode(119,114,105,116,101,99,98,95,105,95,53,50,0);
         yingO = `${valuesE.length + nativemoduleO.length}`;
      }
      if (5 <= yingO.length) {
         videocommonW = [3 + yingO.length];
      }
      reactnativejs4 = new Map([[`${mapbufferN.length}`, 1 >> (Math.min(4, resendz.length))]]);
   }
   do {
      basketballK = new Map([[`${libtan9}`, 2]]);
      if (4117313 == basketballK.size) {
         break;
      }
   } while ((Array.from(basketballK.keys()).includes(`${reactnativejs4.size}`)) && (4117313 == basketballK.size));

  ATBannerEventEmitter.removeAllListeners(onBannerCloseButtonTapped);
   for (let t = 0; t < 2; t++) {
      basketballK = new Map([[`${reactnativejs4.size}`, reactnativejs4.size]]);
   }
   if (4 > (selectq.length / 2) || 2 > (selectq.length / (Math.max(4, reactnativejs4.size)))) {
      reactnativejs4[alertu] = alertu.length;
   }

  ATBannerEventEmitter.removeAllListeners(onBannerClick);
       let verticalh = 5.0;
       let libjsinspector4 = String.fromCharCode(115,104,97,112,101,95,49,95,49,50,0);
      while (!libjsinspector4.includes(`${verticalh}`)) {
         verticalh *= parseFloat(`${3}`);
         break;
      }
      for (let m = 0; m < 3; m++) {
         verticalh -= (parseFloat(`${String.fromCharCode(106,0) == libjsinspector4 ? libjsinspector4.length : parseInt(`${verticalh}`)}`));
      }
      if (parseFloat(`${libjsinspector4.length}`) <= verticalh) {
          let model0 = [96, 36, 467];
         verticalh *= parseFloat(`${3 % (Math.max(7, libjsinspector4.length))}`);
         model0 = [model0.length >> (Math.min(Math.abs(3), 3))];
      }
          let libavcodecs = String.fromCharCode(114,101,100,97,99,116,95,121,95,57,55,0);
          let libflipperl = String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,101,95,109,95,54,53,0);
         libjsinspector4 += `${libavcodecs.length}`;
         libavcodecs = `${libflipperl.length & libflipperl.length}`;
       let mounting9 = 2;
          let pressure3 = String.fromCharCode(114,95,52,95,100,101,110,111,105,115,101,114,0);
         libjsinspector4 += "2 | mounting9";
         pressure3 += `${pressure3.length * 2}`;
      reactnativejs4[`${libtan9}`] = parseInt(`${libtan9}`) / 1;
   for (let f = 0; f < 1; f++) {
      selectq += `${mapbufferN.length / 3}`;
   }

  ATBannerEventEmitter.removeAllListeners(onBannerShow);
       let screen4 = 3.0;
       let gemfileD = String.fromCharCode(102,112,101,108,95,111,95,53,53,0);
         gemfileD += `${3 - parseInt(`${screen4}`)}`;
          let anytimeG = [197, 663];
         gemfileD += `${2 * parseInt(`${screen4}`)}`;
         anytimeG.push(anytimeG.length >> (Math.min(Math.abs(2), 3)));
      do {
         screen4 *= parseFloat(`${parseInt(`${screen4}`)}`);
         if (screen4 == 4743560.0) {
            break;
         }
      } while (((gemfileD.length / (Math.max(1, parseInt(`${screen4}`)))) == 4) && (screen4 == 4743560.0));
      if (4 == (gemfileD.length << (Math.min(Math.abs(1), 2))) && 4 == (1 / (Math.max(8, gemfileD.length)))) {
          let libyogaZ = String.fromCharCode(122,95,49,52,95,101,110,99,111,100,101,0);
          let natives = true;
          let downloadedz = String.fromCharCode(104,95,54,50,95,119,97,118,101,102,111,114,109,97,116,101,120,0);
         screen4 *= parseFloat(`${gemfileD.length}`);
         libyogaZ += `${(downloadedz == String.fromCharCode(49,0) ? (natives ? 2 : 1) : downloadedz.length)}`;
         natives = 50 <= downloadedz.length && libyogaZ.length <= 50;
      }
      for (let z = 0; z < 3; z++) {
         screen4 *= parseFloat(`${3}`);
      }
      do {
         screen4 += (parseFloat(`${gemfileD == String.fromCharCode(66,0) ? parseInt(`${screen4}`) : gemfileD.length}`));
         if (screen4 == 1587450.0) {
            break;
         }
      } while ((5 > (parseInt(`${screen4}`) + gemfileD.length) || 5 > (parseInt(`${screen4}`) + gemfileD.length)) && (screen4 == 1587450.0));
      reactnativejs4 = new Map([[selectq, selectq.length]]);
   for (let l = 0; l < 3; l++) {
       let penalty2 = [String.fromCharCode(112,114,117,110,105,110,103,95,112,95,52,50,0), String.fromCharCode(120,95,52,49,95,99,100,106,112,101,103,0), String.fromCharCode(116,95,55,54,95,110,100,111,116,115,0)];
       let yingV = String.fromCharCode(114,101,99,111,110,102,105,103,117,114,101,95,57,95,56,55,0);
      for (let i = 0; i < 1; i++) {
         yingV += "2";
      }
         penalty2.push(yingV.length);
         yingV += `${3 ^ penalty2.length}`;
      if (yingV.endsWith(`${penalty2.length}`)) {
          let gradlewW = 3;
         penalty2 = [gradlewW];
      }
          let mountingt = new Map([[String.fromCharCode(108,95,55,50,95,114,116,109,100,0),String.fromCharCode(112,114,101,102,97,99,101,95,110,95,52,48,0)], [String.fromCharCode(117,117,105,100,117,115,109,116,0),String.fromCharCode(101,110,117,109,101,114,97,116,101,100,0)]]);
          let mergerx = String.fromCharCode(100,114,97,103,103,105,110,103,95,107,95,55,55,0);
          let videoO = String.fromCharCode(114,101,116,117,114,110,101,100,95,55,95,50,52,0);
         yingV += "3";
         mountingt[`${mergerx}`] = mountingt.size;
         mergerx = `${3 >> (Math.min(5, Math.abs(mountingt.size)))}`;
         videoO = `${(String.fromCharCode(119,0) == mergerx ? mountingt.size : mergerx.length)}`;
       let with_tnV = String.fromCharCode(116,95,53,55,95,102,114,101,97,100,0);
      libtan9 -= mapbufferN.length;
   }

  ATBannerEventEmitter.removeAllListeners(onBannerRefresh);
       let friendsN = [760, 700, 124];
       let trashp = String.fromCharCode(100,95,52,48,95,110,111,110,122,101,114,111,0);
       let stationsF = false;
         friendsN = [friendsN.length];
          let emptyI = String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,0);
         trashp = `${(trashp == String.fromCharCode(115,0) ? (stationsF ? 3 : 3) : trashp.length)}`;
         emptyI += `${(String.fromCharCode(102,0) == emptyI ? emptyI.length : emptyI.length)}`;
         trashp += `${((stationsF ? 5 : 4) - trashp.length)}`;
      for (let s = 0; s < 3; s++) {
          let suggestionz = String.fromCharCode(115,117,112,112,114,101,115,115,105,111,110,95,103,95,50,51,0);
          let const_sjx = 3.0;
         friendsN.push(parseInt(`${const_sjx}`));
         suggestionz = `${suggestionz.length}`;
         const_sjx /= Math.max(parseFloat(`${suggestionz.length | 2}`), 1);
      }
      if (trashp.includes(`${stationsF}`)) {
         trashp = `${(3 & (stationsF ? 2 : 2))}`;
      }
      do {
          let viewsD = String.fromCharCode(119,95,50,56,95,112,108,97,121,98,97,99,107,0);
          let mintegralr = String.fromCharCode(103,97,109,109,97,118,97,108,95,113,95,55,51,0);
          let live8 = 2;
          let pressureF = [283, 469, 211];
          let dycreatorV = 2.0;
         stationsF = dycreatorV == 28.83;
         viewsD += `${viewsD.length + mintegralr.length}`;
         mintegralr += `${2 >> (Math.min(1, mintegralr.length))}`;
         live8 &= 3;
         pressureF.push(mintegralr.length);
         dycreatorV *= 1;
         if (stationsF ? !stationsF : stationsF) {
            break;
         }
      } while ((stationsF ? !stationsF : stationsF) && (5 > (1 | friendsN.length) && !stationsF));
      if (2 == friendsN.length) {
         stationsF = 41 > trashp.length;
      }
      for (let k = 0; k < 2; k++) {
         trashp += `${friendsN.length ^ 2}`;
      }
         trashp += `${trashp.length * 1}`;
      tick3 *= parseFloat(`${parseInt(`${tick3}`) / 2}`);
      libtan9 -= reactnativejs4.size | mapbufferN.length;

  ATBannerEventEmitter.removeAllListeners(onBannerRefreshFail);
   while ((libtan9 / 3.44) < 4.97 && (parseInt(`${libtan9}`) / 3) < 1) {
       let moonR = new Map([[String.fromCharCode(98,95,51,54,95,109,111,99,107,0),269], [String.fromCharCode(116,95,50,49,0),602]]);
         moonR[`${moonR.size}`] = moonR.size - 2;
      for (let h = 0; h < 3; h++) {
          let confirmationk = false;
          let libreactnativeblobc = String.fromCharCode(116,104,114,101,97,100,115,97,102,101,95,104,95,55,56,0);
          let shootd = String.fromCharCode(100,114,97,119,108,105,110,101,95,117,95,54,55,0);
          let eighteenb = String.fromCharCode(111,116,104,101,114,115,95,106,95,54,53,0);
          let lineF = String.fromCharCode(117,110,100,111,95,116,95,52,52,0);
         moonR = new Map([[`${moonR.size}`, moonR.size & 2]]);
         confirmationk = 59 <= libreactnativeblobc.length && lineF.length <= 59;
         libreactnativeblobc += "2";
         shootd += `${shootd.length}`;
         eighteenb += "1";
         lineF = `${lineF.length * eighteenb.length}`;
      }
          let appsG = String.fromCharCode(109,95,57,49,95,109,97,107,101,114,112,109,0);
          let libcrashsdk9 = new Map([[String.fromCharCode(103,95,56,53,95,102,101,101,100,0),341], [String.fromCharCode(100,95,54,53,95,108,111,99,107,115,0),534]]);
         moonR = new Map([[`${moonR.size}`, 2]]);
         appsG += `${libcrashsdk9.size}`;
         libcrashsdk9 = new Map([[`${libcrashsdk9.size}`, 1]]);
      resendz = `${reactnativejs4.size}`;
      break;
   }
   while (1.44 >= (5.2 - tick3) && (tick3 - libtan9) >= 5.2) {
      tick3 *= (parseFloat(`${String.fromCharCode(51,0) == selectq ? selectq.length : resendz.length}`));
      break;
   }

}

function createLoadAdSize(width, height) {
       let logoutq = String.fromCharCode(100,95,56,50,95,102,102,116,103,0);
    let nalyticsz = String.fromCharCode(121,95,56,49,95,97,99,100,101,99,0);
    let renewm = 0;
    let blacki = [232, 873];
    let catalogj = 5;
    let skipy = String.fromCharCode(100,95,54,52,95,112,117,115,104,101,100,0);
    let trashg = 4.0;
    let private_e8 = new Map([[String.fromCharCode(100,121,110,97,114,114,97,121,95,109,95,55,57,0),763], [String.fromCharCode(114,97,100,98,103,0),13], [String.fromCharCode(113,95,51,48,95,100,99,116,0),612]]);
    let q_manageru = String.fromCharCode(116,119,111,108,97,109,101,95,97,95,54,50,0);
    let libavutild = false;
    let runtimeschedulerd = false;
       let pageH = [518, 208];
       let libsgcoreq = 2;
      while (pageH.length > 1) {
         pageH.push(libsgcoreq ^ pageH.length);
         break;
      }
      if (!pageH.includes(libsgcoreq)) {
         pageH.push(pageH.length & libsgcoreq);
      }
         libsgcoreq /= Math.max(1, 4);
         libsgcoreq &= 3;
      if (!pageH.includes(libsgcoreq)) {
         libsgcoreq -= pageH.length;
      }
       let eacth = true;
       let mbbidw = true;
      nalyticsz = `${q_manageru.length - 1}`;
      private_e8 = new Map([[`${renewm}`, renewm]]);
      catalogj %= Math.max(2, skipy.length);
   if (2.77 >= (3.19 * trashg) || (renewm * trashg) >= 3.19) {
      trashg -= 2 / (Math.max(6, nalyticsz.length));
   }
   while (1 > logoutq.length) {
       let trophyL = String.fromCharCode(115,101,101,110,95,100,95,51,49,0);
       let full7 = false;
       let hooksJ = String.fromCharCode(115,101,110,100,118,0);
       let libswscalez = 3.0;
       let floateru = String.fromCharCode(110,95,50,49,95,112,114,101,100,120,0);
      while (!hooksJ.startsWith(`${full7}`)) {
         hooksJ = `${trophyL.length << (Math.min(Math.abs(2), 1))}`;
         break;
      }
      while (5.30 >= (parseFloat(`${hooksJ.length}`) + libswscalez) || 4 >= (3 ^ hooksJ.length)) {
         libswscalez -= parseFloat(`${hooksJ.length - 2}`);
         break;
      }
      if (floateru.length == 3) {
         hooksJ += `${floateru.length}`;
      }
         full7 = hooksJ.length > 52;
      for (let b = 0; b < 3; b++) {
         full7 = String.fromCharCode(117,0) == trophyL;
      }
      do {
          let leftY = [String.fromCharCode(99,95,49,51,95,97,97,110,100,99,116,116,97,98,0), String.fromCharCode(108,95,52,49,95,117,112,112,101,114,99,97,115,101,0)];
         floateru += `${leftY.length}`;
         if (floateru == String.fromCharCode(108,56,112,52,97,97,97,112,0)) {
            break;
         }
      } while ((5 > floateru.length) && (floateru == String.fromCharCode(108,56,112,52,97,97,97,112,0)));
      for (let o = 0; o < 1; o++) {
         libswscalez += parseFloat(`${1}`);
      }
       let modeB = new Map([[String.fromCharCode(99,111,110,116,114,111,108,108,101,100,0),575], [String.fromCharCode(114,95,56,52,95,116,114,105,109,0),421]]);
      do {
          let heart0 = true;
          let valuesw = new Map([[String.fromCharCode(114,101,106,101,99,116,105,111,110,115,95,115,95,54,48,0),577], [String.fromCharCode(107,95,57,53,95,116,105,109,101,105,110,102,111,0),219]]);
          let clubp = 4.0;
          let analytic7 = 5.0;
          let storex = String.fromCharCode(105,95,52,56,95,114,101,99,101,110,116,101,114,0);
         libswscalez *= parseFloat(`${2 << (Math.min(5, hooksJ.length))}`);
         heart0 = (valuesw.size ^ storex.length) >= 83;
         valuesw = new Map([[storex, storex.length]]);
         clubp -= parseFloat(`${parseInt(`${analytic7}`) * parseInt(`${clubp}`)}`);
         analytic7 *= (parseFloat(`${(heart0 ? 2 : 3) * parseInt(`${clubp}`)}`));
         if (1144167.0 == libswscalez) {
            break;
         }
      } while ((1144167.0 == libswscalez) && (parseInt(`${libswscalez}`) > modeB.size));
          let screenr = String.fromCharCode(97,95,49,95,107,102,109,111,100,101,115,0);
          let sortQ = 0.0;
         floateru = `${2 - trophyL.length}`;
         screenr = `${parseInt(`${sortQ}`)}`;
         sortQ *= 1;
       let grayT = String.fromCharCode(101,108,108,105,112,116,105,99,97,108,95,115,95,57,51,0);
         modeB = new Map([[`${libswscalez}`, (floateru == String.fromCharCode(110,0) ? parseInt(`${libswscalez}`) : floateru.length)]]);
      for (let k = 0; k < 3; k++) {
         trophyL += `${(floateru == String.fromCharCode(108,0) ? floateru.length : parseInt(`${libswscalez}`))}`;
      }
      do {
         full7 = floateru == String.fromCharCode(99,0);
         if (full7 ? !full7 : full7) {
            break;
         }
      } while ((full7) && (full7 ? !full7 : full7));
      if (floateru.includes(trophyL)) {
         floateru += `${(String.fromCharCode(106,0) == grayT ? grayT.length : (full7 ? 3 : 2))}`;
      }
      logoutq = `${3 ^ private_e8.size}`;
      break;
   }

    var loadAdSize = {};
      catalogj %= Math.max(3, 1);
   if (!blacki.includes(renewm)) {
       let h_countR = String.fromCharCode(118,95,57,53,95,114,101,116,114,105,101,100,0);
         h_countR = `${h_countR.length % 2}`;
         h_countR = "2";
         h_countR = `${h_countR.length}`;
      blacki = [logoutq.length << (Math.min(Math.abs(3), 1))];
   }
       let baset = 3;
       let commonw = 5.0;
       let modityE = String.fromCharCode(115,104,97,100,111,119,115,95,105,95,56,48,0);
       let memberY = String.fromCharCode(114,101,97,100,109,101,95,110,95,51,52,0);
       let telemetryf = 3.0;
       let unimplementedviewq = 4.0;
         commonw += parseFloat(`${parseInt(`${unimplementedviewq}`) >> (Math.min(memberY.length, 3))}`);
         memberY = `${(memberY == String.fromCharCode(109,0) ? memberY.length : modityE.length)}`;
         modityE += "1";
         baset *= modityE.length * 3;
      if (5.40 == telemetryf) {
         unimplementedviewq -= parseFloat(`${baset * parseInt(`${commonw}`)}`);
      }
         commonw -= parseFloat(`${memberY.length}`);
      while (!memberY.startsWith(`${baset}`)) {
         baset ^= 2 % (Math.max(baset, 2));
         break;
      }
      catalogj /= Math.max(1 & catalogj, 4);
   for (let k = 0; k < 2; k++) {
       let gestureO = String.fromCharCode(112,95,51,95,116,114,97,110,115,102,101,114,0);
       let cornerz = String.fromCharCode(114,116,112,102,98,95,99,95,52,53,0);
       let whistlew = new Map([[String.fromCharCode(113,95,54,49,95,100,117,114,105,110,103,0),String.fromCharCode(99,97,110,99,101,108,95,109,95,52,51,0)], [String.fromCharCode(100,101,108,97,121,115,95,53,95,51,0),String.fromCharCode(115,105,110,103,108,101,116,97,98,108,101,95,114,95,53,57,0)]]);
       let cluba = String.fromCharCode(114,101,118,97,108,105,100,97,116,105,110,103,95,98,95,52,48,0);
      if (!gestureO.includes(`${cornerz.length}`)) {
          let orange_ = 1.0;
          let brightnessY = false;
          let slidery = String.fromCharCode(103,95,54,54,95,100,101,102,101,114,114,101,114,0);
         gestureO = `${gestureO.length}`;
         orange_ *= parseFloat(`${3 % (Math.max(parseInt(`${orange_}`), 9))}`);
         brightnessY = (parseInt(`${orange_}`) - slidery.length) > 91;
         slidery += `${3 << (Math.min(Math.abs(parseInt(`${orange_}`)), 2))}`;
      }
      if (gestureO != cluba) {
         cluba = `${cluba.length ^ whistlew.size}`;
      }
       let blackH = 1;
       let tailL = 5;
      if ((5 | blackH) <= 3) {
          let halfS = String.fromCharCode(100,95,53,55,95,107,97,116,0);
          let auto_7dV = String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,106,95,49,0);
         gestureO += `${gestureO.length ^ 3}`;
         halfS += `${(String.fromCharCode(66,0) == halfS ? halfS.length : auto_7dV.length)}`;
         auto_7dV += `${(String.fromCharCode(72,0) == auto_7dV ? halfS.length : auto_7dV.length)}`;
      }
      if (cornerz.length <= gestureO.length) {
         cornerz += `${blackH + 1}`;
      }
         blackH *= whistlew.size / (Math.max(3, 10));
         blackH -= cluba.length;
      if (blackH >= whistlew.size) {
         blackH >>= Math.min(Math.abs((cluba == String.fromCharCode(109,0) ? cluba.length : tailL)), 1);
      }
          let update_48R = String.fromCharCode(116,97,110,95,118,95,49,57,0);
          let schedule0 = String.fromCharCode(99,108,97,105,109,101,100,95,108,95,55,0);
         cluba += `${schedule0.length * 2}`;
         update_48R += `${1 << (Math.min(3, update_48R.length))}`;
         schedule0 = `${update_48R.length / (Math.max(3, 3))}`;
         tailL >>= Math.min(Math.abs((String.fromCharCode(56,0) == gestureO ? gestureO.length : whistlew.size)), 3);
      while ((2 / (Math.max(4, tailL))) < 5) {
         tailL += 2;
         break;
      }
          let floaterK = new Map([[String.fromCharCode(108,111,103,103,101,100,95,57,95,53,53,0),815], [String.fromCharCode(112,101,114,109,117,116,101,115,0),741]]);
         whistlew[`${blackH}`] = gestureO.length % 1;
         floaterK = new Map([[`${floaterK.size}`, floaterK.size << (Math.min(Math.abs(floaterK.size), 3))]]);
      private_e8[q_manageru] = q_manageru.length;
   }
       let mbsplashm = 4;
       let gray0 = 4.0;
         mbsplashm |= parseInt(`${gray0}`);
      for (let q = 0; q < 1; q++) {
         gray0 += parseFloat(`${parseInt(`${gray0}`)}`);
      }
      while (2.23 >= (gray0 / 3.60)) {
          let statsC = 4.0;
          let sortl = 2.0;
          let baiduY = false;
          let hookW = false;
         mbsplashm += 3;
         statsC *= (2 * (baiduY ? 2 : 1));
         sortl /= Math.max(parseFloat(`${parseInt(`${statsC}`) % 2}`), 4);
         baiduY = baiduY || 95.38 == sortl;
         hookW = !baiduY;
         break;
      }
      if (gray0 <= 1.40) {
          let coreh = new Map([[String.fromCharCode(115,105,102,116,0),526], [String.fromCharCode(102,95,53,56,95,105,110,115,116,114,117,109,101,110,116,97,116,105,111,110,0),38]]);
          let whitep = 4.0;
          let forwardG = 2.0;
          let sortG = String.fromCharCode(99,97,116,99,104,105,110,103,95,113,95,51,56,0);
          let rootT = String.fromCharCode(106,95,51,95,118,103,108,111,98,97,108,0);
         mbsplashm *= (String.fromCharCode(57,0) == sortG ? sortG.length : parseInt(`${forwardG}`));
         coreh = new Map([[`${coreh.size}`, rootT.length]]);
         whitep += parseFloat(`${coreh.size}`);
         forwardG += parseFloat(`${1}`);
         rootT += `${parseInt(`${whitep}`)}`;
      }
      while (5.9 > (mbsplashm / (Math.max(gray0, 8)))) {
          let historyd = new Map([[String.fromCharCode(117,110,98,111,120,95,50,95,57,55,0),81], [String.fromCharCode(98,101,122,105,101,114,95,53,95,55,54,0),158], [String.fromCharCode(101,95,57,95,116,119,105,100,100,108,101,115,0),703]]);
          let vietnam0 = new Map([[String.fromCharCode(114,101,108,97,117,110,99,104,95,101,95,50,57,0),571], [String.fromCharCode(115,112,108,105,116,95,105,95,50,56,0),212], [String.fromCharCode(118,95,57,49,95,99,111,109,112,111,110,101,110,116,115,0),51]]);
          let xadsdkV = [403, 229, 275];
          let window_2f = String.fromCharCode(105,108,98,99,102,105,120,95,54,95,51,57,0);
         mbsplashm &= 2;
         historyd[`${vietnam0.size}`] = historyd.size / 2;
         vietnam0 = new Map([[`${vietnam0.size}`, 2]]);
         xadsdkV.push(vietnam0.size);
         window_2f = `${window_2f.length}`;
         break;
      }
      for (let h = 0; h < 2; h++) {
         gray0 /= Math.max(parseFloat(`${1}`), 4);
      }
      private_e8[`${trashg}`] = private_e8.size * 1;

    loadAdSize["width"] = width;
   do {
      nalyticsz += `${skipy.length << (Math.min(4, Math.abs(catalogj)))}`;
      if (418593 == nalyticsz.length) {
         break;
      }
   } while ((!nalyticsz.startsWith(`${catalogj}`)) && (418593 == nalyticsz.length));
   do {
       let dragH = [String.fromCharCode(114,97,116,101,115,95,103,95,52,49,0), String.fromCharCode(120,95,55,56,95,102,97,108,108,111,102,102,0)];
       let settingsu = true;
       let bellT = true;
          let lessB = String.fromCharCode(106,95,53,49,95,98,115,102,115,0);
          let info9 = String.fromCharCode(102,99,116,108,0);
          let activev = String.fromCharCode(115,119,102,104,97,115,104,0);
         bellT = info9.length == 96;
         lessB += `${(activev == String.fromCharCode(49,0) ? lessB.length : activev.length)}`;
         info9 = `${(lessB == String.fromCharCode(106,0) ? activev.length : lessB.length)}`;
         bellT = !settingsu;
      renewm ^= skipy.length;
      dragH.push(3 >> (Math.min(2, dragH.length)));
      if (renewm == 2722804) {
         break;
      }
   } while ((4 <= (4 - logoutq.length)) && (renewm == 2722804));
      private_e8 = new Map([[`${renewm}`, nalyticsz.length]]);
   if (1 >= (blacki.length / (Math.max(4, 10)))) {
       let stationj = String.fromCharCode(98,115,116,114,97,99,116,0);
       let modulef = String.fromCharCode(98,105,97,115,101,100,95,111,95,49,57,0);
       let reactnativejsk = [922, 766];
      for (let h = 0; h < 1; h++) {
         reactnativejsk = [2];
      }
         modulef = `${modulef.length ^ reactnativejsk.length}`;
      for (let z = 0; z < 2; z++) {
          let canvasf = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,95,120,95,49,54,0);
          let videocommonQ = [String.fromCharCode(97,110,97,108,111,103,95,119,95,50,48,0), String.fromCharCode(111,95,52,53,95,99,117,100,97,0), String.fromCharCode(118,111,105,99,101,115,95,120,95,54,48,0)];
          let combinedt = String.fromCharCode(113,95,51,54,95,116,100,115,99,0);
         modulef = `${2 << (Math.min(3, combinedt.length))}`;
         canvasf = `${canvasf.length}`;
         videocommonQ.push(videocommonQ.length);
         combinedt += "3";
      }
         modulef += "1";
      while ((modulef.length & reactnativejsk.length) >= 5) {
         reactnativejsk.push(modulef.length);
         break;
      }
      for (let d = 0; d < 2; d++) {
         modulef += `${(String.fromCharCode(106,0) == modulef ? modulef.length : reactnativejsk.length)}`;
      }
       let gdtadvV = true;
       let kuaishou8 = true;
         kuaishou8 = !gdtadvV;
         kuaishou8 = modulef.length <= 25;
      blacki.push(3);
      stationj = `${stationj.length * stationj.length}`;
   }
       let launchP = String.fromCharCode(101,113,117,97,108,105,122,101,114,95,120,95,49,53,0);
       let cancel2 = String.fromCharCode(103,95,51,52,95,116,112,101,108,100,115,112,0);
       let nalyticszu = String.fromCharCode(98,95,51,95,100,99,97,100,99,116,0);
         nalyticszu = `${cancel2.length}`;
         cancel2 += `${cancel2.length}`;
      if (nalyticszu == String.fromCharCode(53,0)) {
         cancel2 = "3";
      }
         nalyticszu += `${nalyticszu.length}`;
      while (5 > cancel2.length) {
          let description_wv = false;
         cancel2 = `${((description_wv ? 5 : 5) & 1)}`;
         break;
      }
       let libloggery = String.fromCharCode(121,95,52,57,95,101,110,97,98,108,101,0);
       let router_ = String.fromCharCode(111,95,56,52,95,117,116,102,116,111,0);
         launchP = "3";
       let gmaile = String.fromCharCode(105,110,118,105,116,101,114,95,113,95,52,51,0);
       let libgloga = String.fromCharCode(118,111,105,100,95,101,95,54,56,0);
      if (!libgloga.includes(`${gmaile.length}`)) {
         gmaile = `${1 >> (Math.min(5, router_.length))}`;
      }
      nalyticsz = `${renewm}`;

    loadAdSize["height"] = height;
       let selectedv = String.fromCharCode(110,95,54,50,95,114,97,100,105,97,110,115,0);
       let chinasameD = 1.0;
         chinasameD /= Math.max((selectedv == String.fromCharCode(84,0) ? selectedv.length : parseInt(`${chinasameD}`)), 2);
         selectedv = `${parseInt(`${chinasameD}`) + 3}`;
       let sharedS = String.fromCharCode(115,95,53,52,95,117,116,120,111,0);
       let filedF = String.fromCharCode(101,120,116,114,99,0);
          let o_centers = true;
          let auto_qP = 4;
         chinasameD += 3 >> (Math.min(Math.abs(parseInt(`${chinasameD}`)), 5));
         o_centers = auto_qP >= 36;
         auto_qP %= Math.max(((o_centers ? 2 : 3) % (Math.max(10, auto_qP))), 2);
         selectedv += `${filedF.length}`;
      if (1 == selectedv.length) {
         selectedv += `${selectedv.length / (Math.max(1, 3))}`;
      }
      blacki.push(nalyticsz.length);
       let darkL = String.fromCharCode(114,95,55,53,95,118,105,116,99,0);
       let paginationt = 2;
          let zooms = 2.0;
          let langw = new Map([[String.fromCharCode(114,95,54,95,118,97,114,105,97,110,99,101,120,104,0),String.fromCharCode(118,95,49,48,95,97,112,112,101,97,114,0)], [String.fromCharCode(117,110,108,111,99,107,95,99,95,57,0),String.fromCharCode(98,97,116,116,101,114,121,95,107,95,49,49,0)], [String.fromCharCode(99,95,50,48,95,116,104,114,101,115,104,111,108,100,115,0),String.fromCharCode(117,114,105,95,115,95,55,55,0)]]);
         paginationt += langw.size / (Math.max(9, parseInt(`${zooms}`)));
      if ((paginationt / 3) < 1 && 4 < (darkL.length / (Math.max(3, 6)))) {
         darkL = `${paginationt / (Math.max(darkL.length, 8))}`;
      }
         darkL += `${paginationt}`;
         paginationt >>= Math.min(2, Math.abs(2));
      for (let y = 0; y < 3; y++) {
          let minic = String.fromCharCode(97,95,53,56,95,106,111,117,114,110,97,108,0);
         paginationt &= (minic == String.fromCharCode(112,0) ? minic.length : paginationt);
      }
      while (5 > (darkL.length | paginationt) || (paginationt | 5) > 3) {
          let hiads = 1;
          let changed = true;
         paginationt %= Math.max(5, hiads);
         changed = !changed;
         break;
      }
      private_e8[`${renewm}`] = renewm;
   if (skipy.endsWith(`${catalogj}`)) {
      catalogj ^= q_manageru.length ^ renewm;
   }
       let renderi = String.fromCharCode(103,101,110,101,114,97,116,101,100,95,98,95,52,0);
       let toponH = String.fromCharCode(103,95,56,51,95,97,102,116,101,114,0);
         renderi += "1";
         toponH = `${renderi.length * toponH.length}`;
      for (let n = 0; n < 2; n++) {
          let streamingW = 0.0;
          let final_mU = String.fromCharCode(98,105,116,97,108,108,111,99,95,106,95,53,56,0);
         renderi += `${parseInt(`${streamingW}`) / (Math.max(toponH.length, 7))}`;
         streamingW /= Math.max(2, parseFloat(`${2 - final_mU.length}`));
         final_mU = `${(final_mU == String.fromCharCode(116,0) ? final_mU.length : final_mU.length)}`;
      }
      do {
         toponH += `${(renderi == String.fromCharCode(99,0) ? renderi.length : toponH.length)}`;
         if (toponH == String.fromCharCode(120,112,103,55,117,106,100,55,122,117,0)) {
            break;
         }
      } while ((toponH.length == 3) && (toponH == String.fromCharCode(120,112,103,55,117,106,100,55,122,117,0)));
         toponH = `${toponH.length + renderi.length}`;
         toponH = `${toponH.length}`;
      private_e8 = new Map([[`${blacki.length}`, renderi.length]]);
   while ((renewm % (Math.max(blacki.length, 2))) == 5 && 5 == (renewm % (Math.max(blacki.length, 5)))) {
      blacki.push(private_e8.size - 2);
      break;
   }

    return loadAdSize;
   for (let f = 0; f < 3; f++) {
      nalyticsz = `${skipy.length % (Math.max(1, 1))}`;
   }
   if (q_manageru.length > logoutq.length) {
       let injuryx = [219, 297];
       let round7 = [String.fromCharCode(98,95,49,56,95,104,105,103,104,108,105,103,104,116,115,0), String.fromCharCode(100,101,110,111,105,115,101,114,95,98,95,57,49,0), String.fromCharCode(102,114,97,109,101,112,97,99,107,95,103,95,53,51,0)];
       let specS = String.fromCharCode(114,101,97,99,116,105,111,110,95,122,95,51,49,0);
         round7.push(1);
      if (2 >= (injuryx.length % (Math.max(8, round7.length))) && (round7.length % 2) >= 5) {
         round7.push(round7.length & injuryx.length);
      }
         round7 = [3 - injuryx.length];
         injuryx.push(round7.length);
       let combinedi = 1.0;
      if (1 > (injuryx.length << (Math.min(Math.abs(2), 3))) && 5 > (injuryx.length & 2)) {
         combinedi += 2 & round7.length;
      }
      do {
         specS += `${parseInt(`${combinedi}`) / (Math.max(1, 7))}`;
         if (specS == String.fromCharCode(102,120,113,119,114,52,119,110,107,49,0)) {
            break;
         }
      } while ((specS == String.fromCharCode(102,120,113,119,114,52,119,110,107,49,0)) && (parseInt(`${combinedi}`) > specS.length));
      do {
          let renewo = String.fromCharCode(112,114,101,112,97,114,101,100,95,120,95,50,48,0);
          let applicationI = [563, 59];
         round7 = [injuryx.length >> (Math.min(specS.length, 4))];
         renewo += `${renewo.length}`;
         applicationI.push(applicationI.length);
         if (2506633 == round7.length) {
            break;
         }
      } while (((round7.length - 3) < 1) && (2506633 == round7.length));
       let mbbanner2 = false;
      q_manageru += `${1 - nalyticsz.length}`;
   }
       let nativemodule4 = String.fromCharCode(102,95,52,52,95,99,104,97,114,115,0);
       let v_playerZ = String.fromCharCode(112,97,99,107,115,95,101,95,55,55,0);
       let huaweiY = 3.0;
      while (1 <= (parseInt(`${huaweiY}`) / (Math.max(v_playerZ.length, 3)))) {
          let clubs = String.fromCharCode(112,97,110,101,115,95,99,95,52,55,0);
         v_playerZ = `${2 ^ nativemodule4.length}`;
         clubs += `${clubs.length}`;
         break;
      }
      if ((v_playerZ.length + 5) > 1) {
          let long_pyR = String.fromCharCode(109,97,108,101,95,56,95,54,54,0);
         v_playerZ += `${nativemodule4.length + 3}`;
         long_pyR = `${long_pyR.length >> (Math.min(long_pyR.length, 4))}`;
      }
         v_playerZ += "1";
      do {
          let ticked2 = [893, 416];
          let belle = [855, 171, 552];
          let tempH = 1.0;
          let singlem = 2.0;
          let gemfilea = [177, 602, 267];
         huaweiY += parseFloat(`${v_playerZ.length % 3}`);
         ticked2.push(1 * parseInt(`${tempH}`));
         belle.push(2 / (Math.max(parseInt(`${tempH}`), 8)));
         singlem += parseFloat(`${1}`);
         gemfilea = [parseInt(`${tempH}`)];
         if (huaweiY == 1375501.0) {
            break;
         }
      } while ((4.61 < (huaweiY / (Math.max(parseFloat(`${v_playerZ.length}`), 3)))) && (huaweiY == 1375501.0));
      do {
          let executorO = 5.0;
          let direct8 = new Map([[String.fromCharCode(116,114,97,110,115,102,101,114,114,105,110,103,95,51,95,57,0),329], [String.fromCharCode(111,110,108,105,110,101,115,95,53,95,49,54,0),647]]);
          let pressuret = 1;
          let baseF = 3;
         v_playerZ = "3";
         executorO += parseFloat(`${parseInt(`${executorO}`) - 2}`);
         direct8[`${baseF}`] = 1 % (Math.max(7, baseF));
         pressuret >>= Math.min(5, Math.abs(2));
         if (v_playerZ == String.fromCharCode(109,48,48,57,118,105,112,107,109,0)) {
            break;
         }
      } while ((nativemodule4 == String.fromCharCode(56,0) && v_playerZ == String.fromCharCode(122,0)) && (v_playerZ == String.fromCharCode(109,48,48,57,118,105,112,107,109,0)));
         nativemodule4 = `${nativemodule4.length}`;
         v_playerZ += `${v_playerZ.length}`;
         v_playerZ += `${nativemodule4.length}`;
      while ((3 * nativemodule4.length) <= 5) {
          let selectedZ = [884, 378, 734];
          let nextA = 3.0;
         nativemodule4 += "3";
         selectedZ.push(1 << (Math.min(4, selectedZ.length)));
         nextA *= selectedZ.length;
         break;
      }
      blacki.push((String.fromCharCode(111,0) == q_manageru ? q_manageru.length : renewm));
   if (renewm <= 4) {
      skipy += `${q_manageru.length}`;
   }
   for (let t = 0; t < 1; t++) {
      private_e8[`${q_manageru}`] = (q_manageru == String.fromCharCode(71,0) ? private_e8.size : q_manageru.length);
   }

}

function createShowAdRect(x, y, width, height) {
       let shirte = String.fromCharCode(109,95,52,55,95,114,101,97,100,98,121,116,101,0);
    let footballH = true;
    let pingE = 0.0;
    let relatedw = String.fromCharCode(120,95,51,50,95,109,101,110,117,115,0);
    let resultx = new Map([[String.fromCharCode(97,108,108,111,119,95,115,95,49,51,0),322], [String.fromCharCode(106,95,51,55,95,98,105,116,114,118,0),90], [String.fromCharCode(108,95,56,57,95,113,100,109,100,97,116,97,0),258]]);
    let entryb = [926, 144];
    let routern = String.fromCharCode(99,111,110,102,105,103,117,114,97,98,108,101,95,51,95,55,53,0);
    let libflipperS = [969, 45, 875];
    let libjsinspectorB = [984, 601, 486];
    let currenta = 2.0;
   for (let y = 0; y < 2; y++) {
      libflipperS = [relatedw.length];
   }
   if (4 > resultx.size || (4 * resultx.size) > 4) {
      resultx[`${footballH}`] = shirte.length;
   }
   do {
      libflipperS = [1];
      if (2130515 == libflipperS.length) {
         break;
      }
   } while ((2130515 == libflipperS.length) && ((pingE / (Math.max(8, libflipperS.length))) > 3.80));

    var adRect = {};
       let playercommonR = [903, 973, 850];
       let mbsplashm = String.fromCharCode(103,95,52,54,95,103,101,116,114,97,110,100,111,109,0);
       let update_cbu = new Map([[String.fromCharCode(112,97,100,100,105,110,103,95,120,95,57,49,0),802], [String.fromCharCode(110,95,50,50,95,105,109,112,111,115,116,101,114,0),728], [String.fromCharCode(117,95,53,56,95,101,110,116,101,114,101,100,0),30]]);
      if ((3 | update_cbu.size) <= 4) {
         mbsplashm = `${playercommonR.length << (Math.min(Math.abs(1), 1))}`;
      }
      do {
          let r_unlocko = 3.0;
          let nativeexd = [832, 792];
         update_cbu = new Map([[`${r_unlocko}`, (mbsplashm == String.fromCharCode(118,0) ? mbsplashm.length : parseInt(`${r_unlocko}`))]]);
         nativeexd.push(2 | nativeexd.length);
         if (update_cbu.size == 761844) {
            break;
         }
      } while ((update_cbu.size == 761844) && ((mbsplashm.length >> (Math.min(Math.abs(3), 2))) == 5));
      for (let c = 0; c < 2; c++) {
          let feedbackP = String.fromCharCode(104,95,52,49,95,115,97,102,101,116,121,0);
         mbsplashm = `${feedbackP.length % (Math.max(10, mbsplashm.length))}`;
      }
          let philippinesG = [176, 609];
         playercommonR = [update_cbu.size];
         philippinesG.push(philippinesG.length - 2);
      for (let l = 0; l < 3; l++) {
          let t_lockZ = String.fromCharCode(119,95,57,53,95,109,111,118,101,115,0);
          let description_lc = String.fromCharCode(115,117,114,102,97,99,101,95,112,95,51,56,0);
          let runtimer = String.fromCharCode(107,117,107,105,95,119,95,53,49,0);
         update_cbu = new Map([[`${update_cbu.size}`, update_cbu.size >> (Math.min(Math.abs(2), 3))]]);
         t_lockZ += `${description_lc.length}`;
         description_lc += "3";
         runtimer = `${runtimer.length}`;
      }
      while ((playercommonR.length * mbsplashm.length) > 2 || (mbsplashm.length * 2) > 3) {
         playercommonR = [mbsplashm.length << (Math.min(Math.abs(2), 1))];
         break;
      }
          let moona = [81, 402];
          let changez = 1.0;
         update_cbu[`${changez}`] = 2 * update_cbu.size;
         moona.push(1);
         changez *= parseFloat(`${moona.length}`);
      do {
         update_cbu = new Map([[`${playercommonR.length}`, playercommonR.length % (Math.max(mbsplashm.length, 5))]]);
         if (17784 == update_cbu.size) {
            break;
         }
      } while ((17784 == update_cbu.size) && ((update_cbu.size & 4) >= 2 && 4 >= (update_cbu.size & mbsplashm.length)));
         update_cbu = new Map([[`${update_cbu.size}`, 2 - update_cbu.size]]);
      libjsinspectorB.push(2);
      resultx[`${footballH}`] = ((footballH ? 5 : 5) / (Math.max(parseInt(`${currenta}`), 6)));
   while (shirte.length >= 4) {
       let taiwan5 = String.fromCharCode(108,95,55,57,95,116,114,101,101,99,111,100,101,114,0);
       let arrowZ = String.fromCharCode(114,101,97,115,111,110,115,95,108,95,55,53,0);
       let telemetryw = String.fromCharCode(101,95,54,51,95,114,101,112,115,116,114,0);
      while (!arrowZ.endsWith(taiwan5)) {
          let reminderA = [101, 404];
          let countdown1 = String.fromCharCode(108,95,56,48,95,116,111,111,116,105,112,0);
          let agreement9 = [929, 585, 733];
         taiwan5 += `${agreement9.length * 1}`;
         reminderA.push(3 % (Math.max(8, countdown1.length)));
         countdown1 += `${countdown1.length % 2}`;
         agreement9.push(countdown1.length << (Math.min(5, reminderA.length)));
         break;
      }
          let aboutv = new Map([[String.fromCharCode(105,109,112,108,105,101,115,95,109,95,55,48,0),564], [String.fromCharCode(98,95,51,56,95,99,111,109,112,97,114,101,0),643]]);
          let skipR = 2.0;
         arrowZ = `${telemetryw.length}`;
         aboutv[`${skipR}`] = parseInt(`${skipR}`) / (Math.max(aboutv.size, 2));
      for (let r = 0; r < 1; r++) {
         telemetryw += `${1 % (Math.max(8, telemetryw.length))}`;
      }
         arrowZ = `${taiwan5.length}`;
      do {
         arrowZ += `${telemetryw.length}`;
         if (arrowZ.length == 671909) {
            break;
         }
      } while ((arrowZ.length == 671909) && (telemetryw.startsWith(arrowZ)));
      for (let b = 0; b < 1; b++) {
         telemetryw += `${arrowZ.length}`;
      }
         arrowZ += `${(String.fromCharCode(50,0) == taiwan5 ? arrowZ.length : taiwan5.length)}`;
          let appleT = 2;
         taiwan5 += `${arrowZ.length}`;
         appleT *= appleT;
      if (!arrowZ.startsWith(telemetryw)) {
          let m_imageV = String.fromCharCode(114,101,97,100,113,95,105,95,56,50,0);
          let matchesa = 5.0;
          let mbjscommonG = [573, 231, 808];
          let reactg = String.fromCharCode(97,100,118,97,110,99,101,100,0);
          let privilegeM = String.fromCharCode(110,95,57,57,95,99,111,110,102,111,114,109,115,0);
         arrowZ += "2";
         m_imageV = `${reactg.length | 3}`;
         matchesa += parseFloat(`${1}`);
         mbjscommonG.push(3);
         reactg = `${1 & reactg.length}`;
         privilegeM += `${reactg.length ^ mbjscommonG.length}`;
      }
      shirte = "2";
      break;
   }

    adRect["x"] = x;
      libjsinspectorB = [(parseInt(`${currenta}`) >> (Math.min(5, Math.abs((footballH ? 2 : 3)))))];
      libjsinspectorB.push((String.fromCharCode(109,0) == relatedw ? relatedw.length : parseInt(`${pingE}`)));
   for (let x = 0; x < 1; x++) {
       let reactw = String.fromCharCode(115,101,116,116,105,116,108,101,95,109,95,57,56,0);
       let overX = 4;
       let telegramE = String.fromCharCode(99,111,117,110,116,114,121,0);
       let libfbjniv = String.fromCharCode(110,97,116,117,114,97,108,0);
       let bridgez = new Map([[String.fromCharCode(107,95,53,50,95,115,107,105,112,115,0),931], [String.fromCharCode(105,95,53,52,95,115,116,97,107,105,110,103,0),547], [String.fromCharCode(101,95,51,52,0),582]]);
      if (1 <= overX) {
          let fieldn = String.fromCharCode(112,97,103,101,108,105,115,116,95,111,95,54,53,0);
         overX %= Math.max(1, (String.fromCharCode(99,0) == libfbjniv ? libfbjniv.length : bridgez.size));
         fieldn = `${fieldn.length ^ fieldn.length}`;
      }
       let datac = String.fromCharCode(97,99,99,101,115,115,111,114,105,101,115,95,99,95,51,49,0);
      while (reactw == String.fromCharCode(55,0)) {
          let iconH = 5.0;
          let soundY = true;
          let detaile = String.fromCharCode(118,95,52,52,95,110,105,98,98,108,101,0);
          let topon3 = new Map([[String.fromCharCode(122,95,54,54,95,109,117,116,97,98,108,101,0),true ], [String.fromCharCode(110,101,103,97,116,105,118,101,95,52,95,57,55,0),true ], [String.fromCharCode(117,95,54,48,95,119,105,116,110,101,115,115,0),true ]]);
          let floater0 = new Map([[String.fromCharCode(103,95,53,53,95,109,117,108,116,105,108,105,110,101,0),54], [String.fromCharCode(105,110,111,117,116,95,99,95,55,54,0),505]]);
         telegramE += `${overX / (Math.max(1, 7))}`;
         iconH /= Math.max(5, parseFloat(`${1}`));
         soundY = 64 <= floater0.size;
         detaile += `${floater0.size | detaile.length}`;
         topon3 = new Map([[`${topon3.size}`, topon3.size]]);
         break;
      }
      for (let y = 0; y < 2; y++) {
          let round6 = String.fromCharCode(108,95,49,95,100,101,112,108,111,121,109,101,110,116,0);
          let f_unlockj = String.fromCharCode(121,95,55,51,95,117,110,112,114,101,109,117,108,116,105,112,108,121,0);
         reactw += `${(datac == String.fromCharCode(104,0) ? f_unlockj.length : datac.length)}`;
         round6 = `${(String.fromCharCode(81,0) == round6 ? round6.length : round6.length)}`;
         f_unlockj = "3";
      }
          let agreementY = 2.0;
          let mbbannerl = String.fromCharCode(112,101,114,99,95,118,95,53,57,0);
          let splashT = new Map([[String.fromCharCode(110,95,53,48,95,98,97,99,107,114,111,117,110,100,0),137], [String.fromCharCode(107,95,53,48,95,112,97,114,101,110,116,104,101,115,105,115,0),648]]);
         libfbjniv = `${telegramE.length % (Math.max(2, 2))}`;
         agreementY -= parseInt(`${agreementY}`);
         mbbannerl = `${mbbannerl.length ^ parseInt(`${agreementY}`)}`;
         splashT[`${agreementY}`] = mbbannerl.length ^ parseInt(`${agreementY}`);
       let layouta = String.fromCharCode(113,105,110,100,101,120,95,112,95,57,50,0);
       let nterstitialH = String.fromCharCode(102,105,110,100,101,114,0);
          let bottomS = 3.0;
         nterstitialH += `${1 + nterstitialH.length}`;
         bottomS *= parseFloat(`${1}`);
      do {
          let fullm = 3.0;
          let mintegral0 = new Map([[String.fromCharCode(100,99,97,100,115,112,95,48,95,49,56,0),false ], [String.fromCharCode(111,112,116,105,109,105,115,116,105,99,95,56,95,56,50,0),true ]]);
          let darkD = 3.0;
          let mintegralR = 3;
         layouta = `${parseInt(`${darkD}`)}`;
         fullm += parseFloat(`${mintegralR ^ 1}`);
         mintegral0 = new Map([[`${mintegral0.size}`, 1]]);
         darkD /= Math.max(3, parseFloat(`${mintegral0.size << (Math.min(3, Math.abs(parseInt(`${fullm}`))))}`));
         mintegralR /= Math.max(2, 4);
         if (layouta.length == 3289420) {
            break;
         }
      } while ((layouta.length == 3289420) && (datac.length >= 1));
      for (let j = 0; j < 2; j++) {
          let playercommon_ = [String.fromCharCode(119,95,50,49,95,114,101,99,105,112,105,101,110,116,0), String.fromCharCode(120,95,56,48,95,105,109,105,116,97,116,101,0)];
         libfbjniv += `${playercommon_.length * 1}`;
      }
      if (datac.length == 2) {
         datac = `${nterstitialH.length}`;
      }
      while (libfbjniv.length >= bridgez.size) {
          let typings = [980, 652];
          let successF = String.fromCharCode(115,105,102,102,95,120,95,52,54,0);
          let moreO = 3.0;
          let listV = String.fromCharCode(98,111,119,108,105,110,103,95,100,95,55,52,0);
          let v_unlockQ = 2.0;
         bridgez[datac] = layouta.length | datac.length;
         typings = [parseInt(`${moreO}`) ^ parseInt(`${v_unlockQ}`)];
         successF += "2";
         moreO -= parseFloat(`${3}`);
         listV = `${typings.length - 2}`;
         v_unlockQ -= 1;
         break;
      }
         libfbjniv += `${datac.length}`;
          let gradlej = 4;
         layouta += `${3 - datac.length}`;
         gradlej /= Math.max(gradlej >> (Math.min(3, Math.abs(gradlej))), 2);
      if ((bridgez.size & nterstitialH.length) > 2) {
         nterstitialH = `${telegramE.length}`;
      }
         layouta += "2";
      libflipperS = [3 + relatedw.length];
   }

    adRect["y"] = y;
       let faviconw = [550, 45, 942];
       let time_fsu = 2.0;
       let rewardvideoo = 3.0;
      if (!faviconw.includes(time_fsu)) {
          let disconnectedQ = String.fromCharCode(114,95,53,52,95,100,117,112,108,105,99,97,116,101,115,0);
          let volume5 = String.fromCharCode(108,95,56,52,95,101,104,105,103,104,0);
          let update_aI = 5;
         time_fsu /= Math.max(3, parseFloat(`${parseInt(`${rewardvideoo}`)}`));
         disconnectedQ += `${3 ^ volume5.length}`;
         volume5 += `${disconnectedQ.length ^ update_aI}`;
         update_aI += 1 - volume5.length;
      }
          let hoverM = new Map([[String.fromCharCode(116,114,97,110,115,112,111,114,116,95,106,95,57,0),951], [String.fromCharCode(115,112,105,110,108,111,99,107,95,56,95,52,56,0),597], [String.fromCharCode(115,95,55,57,95,111,112,97,100,0),131]]);
         rewardvideoo -= parseFloat(`${parseInt(`${rewardvideoo}`)}`);
         hoverM[`${hoverM.size}`] = hoverM.size;
      do {
         rewardvideoo -= parseFloat(`${parseInt(`${time_fsu}`) ^ parseInt(`${rewardvideoo}`)}`);
         if (2781290.0 == rewardvideoo) {
            break;
         }
      } while ((5.77 < (3.78 / (Math.max(8, rewardvideoo))) && 3.78 < (rewardvideoo + time_fsu)) && (2781290.0 == rewardvideoo));
       let sigmobE = 4;
       let bootsplashp = 0;
         sigmobE *= bootsplashp << (Math.min(Math.abs(sigmobE), 4));
          let gradler = String.fromCharCode(100,95,50,48,95,97,117,116,104,0);
          let malaysiag = String.fromCharCode(102,111,114,109,97,116,116,105,110,103,95,49,95,57,49,0);
          let bellb = String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,0);
         faviconw.push(parseInt(`${time_fsu}`) | 2);
         gradler += `${bellb.length}`;
         malaysiag += `${malaysiag.length ^ 1}`;
         bellb += `${malaysiag.length}`;
         faviconw.push(3 * bootsplashp);
          let grayx = 1;
         time_fsu *= parseFloat(`${3}`);
         grayx /= Math.max(1, 3 * grayx);
      do {
         bootsplashp %= Math.max(2, 3);
         if (2287219 == bootsplashp) {
            break;
         }
      } while ((5.59 > (5.32 + rewardvideoo) || 2.61 > (rewardvideoo + 5.32)) && (2287219 == bootsplashp));
      relatedw = `${1 - parseInt(`${rewardvideoo}`)}`;
      currenta /= Math.max(libflipperS.length + 3, 4);
      shirte = `${(String.fromCharCode(88,0) == shirte ? shirte.length : relatedw.length)}`;

    adRect["width"] = width;
      footballH = String.fromCharCode(101,0) == routern;
       let package_bg = new Map([[String.fromCharCode(115,110,97,112,104,111,116,95,99,95,50,52,0),675], [String.fromCharCode(115,95,49,49,95,114,101,100,117,99,116,105,111,110,115,0),242]]);
       let modity8 = String.fromCharCode(106,95,53,48,95,115,117,98,118,105,101,119,101,114,0);
          let blackC = String.fromCharCode(101,110,116,105,116,101,115,95,121,95,52,55,0);
          let championM = 3.0;
         modity8 = `${blackC.length}`;
         blackC = `${parseInt(`${championM}`)}`;
         modity8 = `${package_bg.size / 2}`;
      do {
         modity8 += `${modity8.length}`;
         if (424700 == modity8.length) {
            break;
         }
      } while (((modity8.length << (Math.min(3, Math.abs(package_bg.size)))) >= 1) && (424700 == modity8.length));
          let sportK = 5.0;
          let privilegen = 4.0;
          let eactP = 0.0;
         modity8 += `${parseInt(`${eactP}`) | 3}`;
         sportK += parseFloat(`${parseInt(`${privilegen}`)}`);
         eactP /= Math.max(parseFloat(`${parseInt(`${privilegen}`)}`), 1);
          let libruntimeexecutorP = 2.0;
          let telegramQ = new Map([[String.fromCharCode(99,111,110,116,97,105,110,115,95,104,95,53,49,0),true ], [String.fromCharCode(109,101,103,97,103,114,111,117,112,95,116,95,51,54,0),true ], [String.fromCharCode(121,95,55,95,117,110,98,111,110,100,101,100,0),false ]]);
         package_bg = new Map([[modity8, modity8.length]]);
         libruntimeexecutorP += parseFloat(`${2}`);
         telegramQ[`${libruntimeexecutorP}`] = 2 | parseInt(`${libruntimeexecutorP}`);
      if ((package_bg.size ^ 3) <= 1) {
         package_bg[`${modity8}`] = package_bg.size;
      }
      footballH = relatedw == modity8;
   do {
      pingE += 3;
      if (4877764.0 == pingE) {
         break;
      }
   } while ((4877764.0 == pingE) && (2 >= (relatedw.length + 4) && (pingE / (Math.max(5.50, 5))) >= 1.28));

    adRect["height"] = height;
      footballH = 37 > entryb.length;
      libjsinspectorB = [2 & routern.length];
      routern = "2";

    return adRect;
      libflipperS.push(2);
   if (5 > resultx.size) {
      footballH = (entryb.length >> (Math.min(routern.length, 3))) >= 41;
   }
      libflipperS.push(2 ^ parseInt(`${currenta}`));

}

function loadAd(placementId, settings) {
       let orangeq = 2.0;
    let areau = String.fromCharCode(114,101,97,100,121,95,116,95,54,54,0);
    let xadsdkA = true;
    let headers = String.fromCharCode(115,116,114,105,100,105,110,103,95,104,95,55,48,0);
    let vignetteb = [111, 949, 924];
    let livek = true;
    let grey_ = 1;
    let floaterR = String.fromCharCode(102,95,54,49,95,115,101,116,119,97,116,101,114,109,97,114,107,0);
    let libswresamplej = String.fromCharCode(112,114,111,103,114,97,109,115,95,110,95,54,49,0);
    let backwardQ = 3.0;
    let changeV = [615, 71, 398];
    let stylet = false;
    let editK = 3.0;
    let libmapbufferjni_ = 5.0;
   if (livek) {
       let borderlessM = String.fromCharCode(102,105,108,101,110,97,109,101,115,95,56,95,49,50,0);
       let libflippere = 1.0;
      if ((borderlessM.length * libflippere) == 5.84 || 2 == (parseInt(`${libflippere}`) * 3)) {
         libflippere -= 2;
      }
          let neonB = String.fromCharCode(103,114,101,101,100,121,95,122,95,53,56,0);
          let sliderT = String.fromCharCode(97,95,52,53,95,115,99,97,108,97,98,108,101,0);
         libflippere /= Math.max(4, parseInt(`${libflippere}`));
         neonB = `${(neonB == String.fromCharCode(122,0) ? sliderT.length : neonB.length)}`;
         sliderT += `${3 - sliderT.length}`;
         libflippere -= 2 - borderlessM.length;
          let searchbarq = 3.0;
          let strJ = new Map([[String.fromCharCode(114,101,112,101,97,116,101,100,108,121,0),303], [String.fromCharCode(114,101,99,116,97,110,103,108,101,115,0),923], [String.fromCharCode(99,101,108,108,115,95,101,95,49,55,0),699]]);
          let nativeexE = [33, 61];
         borderlessM = `${strJ.size}`;
         searchbarq += parseInt(`${searchbarq}`) & 2;
         strJ[`${searchbarq}`] = parseInt(`${searchbarq}`);
         nativeexE.push(nativeexE.length);
      while (!borderlessM.includes(`${libflippere}`)) {
         borderlessM += `${2 >> (Math.min(1, Math.abs(parseInt(`${libflippere}`))))}`;
         break;
      }
      if ((libflippere * 1.88) >= 2.41) {
          let commonf = 1.0;
          let currentK = String.fromCharCode(97,117,100,105,98,105,108,105,116,121,95,51,95,55,54,0);
          let libzeusE = false;
         libflippere += currentK.length * borderlessM.length;
         commonf += parseFloat(`${3 % (Math.max(8, parseInt(`${commonf}`)))}`);
         currentK = `${parseInt(`${commonf}`) * 1}`;
         libzeusE = commonf > 80.55;
      }
      libswresamplej += `${vignetteb.length}`;
   }
       let borderlessO = 3;
      do {
         borderlessO -= borderlessO / 1;
         if (4087449 == borderlessO) {
            break;
         }
      } while ((4087449 == borderlessO) && (1 <= (borderlessO ^ 5) && (borderlessO ^ borderlessO) <= 5));
      if (4 > (borderlessO ^ borderlessO) && (4 ^ borderlessO) > 5) {
         borderlessO %= Math.max(3, borderlessO);
      }
      for (let d = 0; d < 2; d++) {
         borderlessO <<= Math.min(Math.abs(3), 1);
      }
      backwardQ /= Math.max(((xadsdkA ? 1 : 4) ^ 1), 2);
      vignetteb = [((xadsdkA ? 3 : 4) - parseInt(`${orangeq}`))];
   do {
       let starq = true;
       let selectR = 3.0;
       let description_n7U = new Map([[String.fromCharCode(99,97,108,108,111,117,116,95,116,95,56,0),String.fromCharCode(105,110,105,116,115,109,111,116,105,111,110,95,55,95,53,54,0)], [String.fromCharCode(110,95,49,53,95,102,105,108,108,0),String.fromCharCode(110,101,97,114,0)]]);
       let internete = 3.0;
       let moviesr = 0.0;
         starq = internete == 15.54;
      do {
          let temperatureq = String.fromCharCode(119,95,52,54,95,110,97,99,107,0);
          let minimize0 = [259, 1000];
          let infoY = String.fromCharCode(103,95,52,48,95,97,117,116,104,101,110,116,105,99,97,116,111,114,0);
          let zoomL = 5.0;
         description_n7U[infoY] = parseInt(`${internete}`) | 2;
         temperatureq += `${temperatureq.length / (Math.max(9, parseInt(`${zoomL}`)))}`;
         minimize0 = [temperatureq.length | 1];
         infoY += `${temperatureq.length | minimize0.length}`;
         zoomL *= (parseFloat(`${temperatureq == String.fromCharCode(72,0) ? temperatureq.length : minimize0.length}`));
         if (description_n7U.size == 1454223) {
            break;
         }
      } while ((description_n7U.size == 1454223) && (description_n7U[`${moviesr}`] == null));
      if ((internete * 2.10) <= 1.78 && 3.30 <= (internete * 2.10)) {
         moviesr -= parseFloat(`${parseInt(`${selectR}`) << (Math.min(Math.abs(description_n7U.size), 2))}`);
      }
      if (4.20 > (3.11 + internete) && 3.93 > (3.11 + moviesr)) {
         internete += parseFloat(`${3 + parseInt(`${internete}`)}`);
      }
      if (internete > 2.37) {
         internete -= parseFloat(`${parseInt(`${moviesr}`) ^ parseInt(`${selectR}`)}`);
      }
      do {
         moviesr /= Math.max(parseFloat(`${description_n7U.size}`), 2);
         if (2003009.0 == moviesr) {
            break;
         }
      } while ((2003009.0 == moviesr) && ((description_n7U.size * parseInt(`${moviesr}`)) > 1));
         moviesr -= parseFloat(`${1}`);
          let androidf = [639, 859];
          let templateprocessorn = 3.0;
          let textlayoutmanagerk = 5;
         moviesr += parseFloat(`${2 * parseInt(`${selectR}`)}`);
         androidf = [parseInt(`${templateprocessorn}`) / 3];
         templateprocessorn += parseFloat(`${androidf.length + parseInt(`${templateprocessorn}`)}`);
         textlayoutmanagerk %= Math.max(parseInt(`${templateprocessorn}`), 1);
          let libfollyW = false;
         selectR *= ((libfollyW ? 5 : 5) << (Math.min(Math.abs(description_n7U.size), 4)));
      for (let x = 0; x < 2; x++) {
          let condensedx = new Map([[String.fromCharCode(108,95,53,52,95,119,97,107,101,0),840], [String.fromCharCode(100,105,97,103,111,110,97,108,95,55,95,50,50,0),354], [String.fromCharCode(103,95,51,57,95,114,101,100,101,116,101,99,116,0),164]]);
          let trophyh = new Map([[String.fromCharCode(115,117,109,109,101,100,95,100,95,54,53,0),372], [String.fromCharCode(108,105,98,101,118,101,110,116,0),835], [String.fromCharCode(100,105,115,107,95,114,95,53,0),554]]);
          let condensedI = false;
          let macauP = new Map([[String.fromCharCode(109,111,100,112,108,117,103,95,104,95,53,53,0),860], [String.fromCharCode(104,95,55,55,95,115,109,105,109,101,0),53], [String.fromCharCode(102,105,114,115,116,108,105,110,101,95,116,95,54,53,0),568]]);
         starq = selectR < moviesr;
         condensedx[`${condensedI}`] = trophyh.size / 2;
         trophyh[`${condensedI}`] = macauP.size;
         macauP = new Map([[`${macauP.size}`, macauP.size]]);
      }
      if (4 >= (description_n7U.size + 1)) {
          let yellowV = new Map([[String.fromCharCode(115,105,122,101,100,95,53,95,50,53,0),true ], [String.fromCharCode(120,95,52,50,95,99,111,110,116,105,110,117,101,100,0),false ]]);
          let logouta = 3.0;
          let libreactnativejnip = 5.0;
          let dicef = [353, 654];
          let libjsip = String.fromCharCode(97,99,111,108,111,114,95,118,95,53,0);
         moviesr *= parseFloat(`${3 | parseInt(`${libreactnativejnip}`)}`);
         yellowV[libjsip] = dicef.length >> (Math.min(Math.abs(3), 5));
         logouta -= (libjsip == String.fromCharCode(118,0) ? libjsip.length : dicef.length);
         libreactnativejnip += parseFloat(`${parseInt(`${logouta}`) >> (Math.min(dicef.length, 1))}`);
      }
      do {
         selectR *= (parseInt(`${selectR}`) % (Math.max(8, (starq ? 1 : 5))));
         if (selectR == 53935.0) {
            break;
         }
      } while ((selectR == 53935.0) && ((2 + internete) > 1.96));
      if (!starq) {
         starq = parseInt(`${moviesr}`) <= description_n7U.size;
      }
      for (let z = 0; z < 2; z++) {
         description_n7U[`${moviesr}`] = description_n7U.size << (Math.min(Math.abs(2), 4));
      }
       let reducern = String.fromCharCode(109,97,116,105,99,95,97,95,56,53,0);
       let mintegralG = String.fromCharCode(104,95,52,48,95,104,101,120,100,117,109,112,0);
      areau = `${((xadsdkA ? 4 : 1) << (Math.min(4, Math.abs((livek ? 4 : 1)))))}`;
      if (areau.length == 4118100) {
         break;
      }
   } while ((areau.length == 4118100) && (4 == (1 - areau.length)));

    if (settings.hasOwnProperty(kATBannerAdLoadingExtraBannerAdSizeStruct)) {

   if (4 >= vignetteb.length) {
       let utilss = new Map([[String.fromCharCode(115,101,116,102,100,95,102,95,50,52,0),String.fromCharCode(106,111,105,110,105,110,103,0)], [String.fromCharCode(121,95,50,50,95,109,101,110,116,105,111,110,0),String.fromCharCode(118,95,52,52,95,116,97,98,108,101,99,0)], [String.fromCharCode(97,97,100,95,119,95,50,0),String.fromCharCode(99,95,57,56,95,116,119,101,97,107,0)]]);
       let libmapbufferjnik = new Map([[String.fromCharCode(116,95,49,55,95,117,110,115,101,108,101,99,116,101,100,0),false ], [String.fromCharCode(97,95,56,52,95,99,111,101,114,99,101,0),true ], [String.fromCharCode(116,95,57,95,100,105,114,101,99,116,0),false ]]);
       let rightA = 4.0;
       let binddatasF = 5;
       let userE = new Map([[String.fromCharCode(118,105,98,114,97,116,105,111,110,95,111,95,52,48,0),235], [String.fromCharCode(109,111,118,101,95,117,95,51,48,0),589]]);
         binddatasF &= parseInt(`${rightA}`) % 3;
      if (4.25 > (binddatasF + rightA) || (binddatasF * 3) > 4) {
         rightA /= Math.max(2, utilss.size >> (Math.min(4, Math.abs(userE.size))));
      }
      do {
         rightA -= libmapbufferjnik.size;
         if (rightA == 2688424.0) {
            break;
         }
      } while ((rightA == 2688424.0) && (utilss.size <= parseInt(`${rightA}`)));
       let componentregistry3 = 0.0;
       let classesZ = String.fromCharCode(110,99,111,110,102,95,49,95,51,56,0);
       let downloaderY = String.fromCharCode(110,95,52,48,95,106,109,108,105,115,116,0);
      do {
         rightA -= binddatasF | 3;
         if (343487.0 == rightA) {
            break;
         }
      } while (((rightA * binddatasF) == 4.54 && (4.54 * rightA) == 1.65) && (343487.0 == rightA));
      while ((2 - classesZ.length) >= 4 || 1 >= (2 - binddatasF)) {
         classesZ = `${utilss.size}`;
         break;
      }
         classesZ = `${utilss.size | 3}`;
         rightA *= classesZ.length;
          let executore = true;
          let gradleI = 4;
         utilss[`${executore}`] = 3 ^ parseInt(`${componentregistry3}`);
         executore = gradleI <= 35;
         gradleI ^= gradleI & gradleI;
          let main_j2 = String.fromCharCode(115,116,111,114,105,110,103,95,105,95,49,52,0);
         classesZ += `${downloaderY.length}`;
         main_j2 += `${1 - main_j2.length}`;
         libmapbufferjnik = new Map([[`${libmapbufferjnik.size}`, libmapbufferjnik.size * binddatasF]]);
          let commonfX = true;
          let action2 = [398, 233];
          let frame__b = String.fromCharCode(115,95,57,52,95,100,97,114,119,105,110,0);
         componentregistry3 *= userE.size ^ 3;
         commonfX = frame__b.length >= 87 && action2.length >= 87;
         action2 = [frame__b.length];
       let langp = 4;
       let stylese = 4;
      do {
         langp ^= binddatasF;
         if (langp == 1766655) {
            break;
         }
      } while (((stylese % (Math.max(langp, 9))) == 2 && 2 == (langp % 2)) && (langp == 1766655));
      livek = 32 == utilss.size;
   }
   while (!libswresamplej.startsWith(`${livek}`)) {
      libswresamplej += `${libswresamplej.length | 1}`;
      break;
   }
   for (let k = 0; k < 3; k++) {
       let progressH = String.fromCharCode(121,95,53,57,95,99,111,109,112,97,114,105,115,111,110,0);
       let libffmpegkitV = new Map([[String.fromCharCode(112,114,101,108,105,109,105,110,97,114,121,95,48,95,56,52,0),379], [String.fromCharCode(105,100,115,95,113,95,53,53,0),463], [String.fromCharCode(99,95,54,50,95,119,114,105,116,101,111,117,116,0),336]]);
       let screenb = true;
       let imagemanager2 = 4.0;
       let feedbacka = String.fromCharCode(115,117,98,116,114,101,101,95,109,95,55,56,0);
       let rewardvideoj = String.fromCharCode(115,99,114,111,108,108,105,110,103,95,118,95,54,48,0);
      do {
         feedbacka += `${(parseInt(`${imagemanager2}`) & (screenb ? 3 : 3))}`;
         if (String.fromCharCode(109,117,48,117,53,101,116,0) == feedbacka) {
            break;
         }
      } while ((libffmpegkitV.size < feedbacka.length) && (String.fromCharCode(109,117,48,117,53,101,116,0) == feedbacka));
       let descX = 3.0;
      if ((4 - feedbacka.length) == 4 || (feedbacka.length - 4) == 3) {
         feedbacka = `${((screenb ? 4 : 3) / 3)}`;
      }
       let phoneF = String.fromCharCode(104,119,97,99,99,101,108,115,95,117,95,51,51,0);
       let main_mC = String.fromCharCode(112,111,108,108,101,114,0);
      while (5.0 <= descX) {
         descX -= progressH.length ^ feedbacka.length;
         break;
      }
      while (1 > progressH.length) {
         screenb = parseFloat(`${main_mC.length}`) < imagemanager2;
         break;
      }
         phoneF = `${(feedbacka == String.fromCharCode(73,0) ? feedbacka.length : parseInt(`${descX}`))}`;
         feedbacka = `${3 + parseInt(`${imagemanager2}`)}`;
      for (let d = 0; d < 3; d++) {
         descX /= Math.max(3, main_mC.length << (Math.min(Math.abs(3), 1)));
      }
         libffmpegkitV[`${feedbacka}`] = feedbacka.length << (Math.min(Math.abs(3), 2));
         feedbacka = `${1 | parseInt(`${imagemanager2}`)}`;
      livek = 38 == headers.length;
   }
      xadsdkA = (areau.length * orangeq) < 21.48;
        var loadAdSize = settings[kATBannerAdLoadingExtraBannerAdSizeStruct];
   while (3.67 >= backwardQ) {
      backwardQ *= parseInt(`${orangeq}`) / 2;
      break;
   }
       let tickv = 3.0;
          let zhuboW = String.fromCharCode(105,95,50,57,95,117,110,102,97,105,114,0);
          let membershipF = new Map([[String.fromCharCode(100,102,115,116,95,103,95,51,57,0),342], [String.fromCharCode(100,101,115,99,101,110,116,95,55,95,49,48,48,0),239], [String.fromCharCode(100,105,115,112,97,116,99,104,95,110,95,52,48,0),537]]);
          let catalog4 = [String.fromCharCode(118,95,55,49,95,99,111,100,101,114,0), String.fromCharCode(105,100,99,105,110,95,49,95,54,55,0), String.fromCharCode(101,114,111,100,101,95,55,95,55,48,0)];
         tickv /= Math.max(2, 1 << (Math.min(Math.abs(parseInt(`${tickv}`)), 4)));
         zhuboW += `${(String.fromCharCode(119,0) == zhuboW ? catalog4.length : zhuboW.length)}`;
         membershipF[zhuboW] = 1;
         catalog4.push(3 | membershipF.size);
      while ((tickv + 5.58) < 5.31 || (tickv + tickv) < 5.58) {
          let acceptedP = true;
         tickv -= ((acceptedP ? 2 : 5) << (Math.min(Math.abs(parseInt(`${tickv}`)), 5)));
         break;
      }
       let redirectg = String.fromCharCode(102,114,101,113,98,97,114,107,95,110,95,57,54,0);
      areau += `${grey_ * 2}`;
      orangeq += libswresamplej.length;
      orangeq -= parseInt(`${backwardQ}`) >> (Math.min(2, Math.abs(3)));

        settings["width"] = loadAdSize["width"];
   for (let r = 0; r < 1; r++) {
      vignetteb.push(parseInt(`${backwardQ}`));
   }
   for (let c = 0; c < 3; c++) {
      libswresamplej = `${(headers == String.fromCharCode(104,0) ? grey_ : headers.length)}`;
   }
       let libavfiltera = String.fromCharCode(115,117,98,110,111,100,101,115,95,120,95,51,49,0);
       let borderlessc = 2.0;
       let sigmobE = [443, 767, 516];
      if (4.87 > (1.72 - borderlessc) && 1.72 > (borderlessc - sigmobE.length)) {
         sigmobE.push(sigmobE.length & parseInt(`${borderlessc}`));
      }
      do {
         borderlessc *= parseInt(`${borderlessc}`);
         if (borderlessc == 3429896.0) {
            break;
         }
      } while (((libavfiltera.length + parseInt(`${borderlessc}`)) < 2) && (borderlessc == 3429896.0));
      while (2.11 > (borderlessc / 4.63) || 4.63 > (borderlessc / (Math.max(sigmobE.length, 7)))) {
          let macauh = [318, 745, 160];
          let targetF = String.fromCharCode(117,110,114,101,103,105,115,116,101,114,101,100,95,55,95,51,0);
          let club0 = 1.0;
         borderlessc *= 2;
         macauh.push(1);
         targetF = `${parseInt(`${club0}`) * 2}`;
         club0 -= parseFloat(`${parseInt(`${club0}`)}`);
         break;
      }
      for (let b = 0; b < 3; b++) {
          let crown7 = [String.fromCharCode(111,115,116,114,101,97,109,119,114,97,112,112,101,114,95,120,95,57,49,0), String.fromCharCode(102,111,114,109,97,116,95,121,95,55,0)];
          let statisticsb = 3;
          let bell_ = 4.0;
         borderlessc += parseInt(`${borderlessc}`) + 1;
         crown7.push(3 >> (Math.min(Math.abs(statisticsb), 4)));
         statisticsb -= 2 - parseInt(`${bell_}`);
         bell_ -= crown7.length >> (Math.min(3, Math.abs(statisticsb)));
      }
      for (let o = 0; o < 1; o++) {
         borderlessc /= Math.max(5, 2);
      }
      if ((sigmobE.length / (Math.max(2, 1))) <= 1 || (parseInt(`${borderlessc}`) * sigmobE.length) <= 2) {
         borderlessc /= Math.max(2 & libavfiltera.length, 5);
      }
         borderlessc *= libavfiltera.length ^ parseInt(`${borderlessc}`);
      if (3 == (1 | sigmobE.length) || (sigmobE.length | libavfiltera.length) == 1) {
         sigmobE.push(1);
      }
      while (3.21 <= borderlessc) {
         borderlessc -= parseInt(`${borderlessc}`) >> (Math.min(libavfiltera.length, 3));
         break;
      }
      livek = !livek;
   do {
       let cornerw = String.fromCharCode(99,98,108,107,95,121,95,55,54,0);
       let rightP = 5.0;
      while (cornerw.includes(`${rightP}`)) {
         cornerw += `${parseInt(`${rightP}`) % (Math.max(cornerw.length, 6))}`;
         break;
      }
      for (let p = 0; p < 3; p++) {
         rightP /= Math.max(2, parseFloat(`${parseInt(`${rightP}`) % 1}`));
      }
          let mathD = 3.0;
          let temperaturek = String.fromCharCode(102,102,116,112,97,99,107,0);
          let readR = String.fromCharCode(105,110,116,101,114,101,115,116,95,119,95,56,52,0);
         rightP *= parseFloat(`${cornerw.length % (Math.max(9, parseInt(`${rightP}`)))}`);
         mathD += 1;
         temperaturek += `${parseInt(`${mathD}`) & temperaturek.length}`;
         readR = `${temperaturek.length - parseInt(`${mathD}`)}`;
      if (5 <= (cornerw.length * 4) || 4 <= (cornerw.length - parseInt(`${rightP}`))) {
         rightP += parseFloat(`${parseInt(`${rightP}`) << (Math.min(Math.abs(3), 1))}`);
      }
      while (parseInt(`${rightP}`) < cornerw.length) {
          let gradlep = String.fromCharCode(110,95,57,48,95,114,117,108,101,115,0);
         cornerw = `${(String.fromCharCode(79,0) == gradlep ? cornerw.length : gradlep.length)}`;
         break;
      }
      if ((cornerw.length - parseInt(`${rightP}`)) == 3) {
         cornerw = "1";
      }
      livek = String.fromCharCode(51,0) == headers;
      if (livek ? !livek : livek) {
         break;
      }
   } while ((livek ? !livek : livek) && (4.14 == (backwardQ * 2.27) || livek));

        settings["height"] = loadAdSize["height"];
      grey_ *= parseInt(`${backwardQ}`);
      xadsdkA = areau.length < libswresamplej.length;
   do {
      vignetteb = [parseInt(`${orangeq}`)];
      if (588487 == vignetteb.length) {
         break;
      }
   } while ((588487 == vignetteb.length) && (vignetteb.length >= 1 && 1 >= (vignetteb.length ^ 1)));
   do {
      grey_ /= Math.max(5, 2);
      if (grey_ == 3013406) {
         break;
      }
   } while (((vignetteb.length ^ 2) <= 1 || (grey_ ^ 2) <= 2) && (grey_ == 3013406));

        delete settings[kATBannerAdLoadingExtraBannerAdSizeStruct];
   while (2 >= (libswresamplej.length * parseInt(`${backwardQ}`)) && (libswresamplej.length | 2) >= 3) {
       let canvasO = 0.0;
       let orientationX = new Map([[String.fromCharCode(119,95,51,48,95,98,105,110,116,101,120,116,0),false ], [String.fromCharCode(97,95,55,95,116,109,109,98,114,0),true ], [String.fromCharCode(105,110,116,101,114,114,117,112,116,95,98,95,52,0),true ]]);
       let headerY = String.fromCharCode(115,119,105,122,122,108,101,100,95,109,95,57,0);
       let themeu = String.fromCharCode(115,104,111,114,116,101,110,0);
       let sellr = 0;
      do {
          let configY = String.fromCharCode(98,97,122,101,108,95,108,95,50,53,0);
          let lightM = 1.0;
          let dragx = String.fromCharCode(115,95,51,51,95,114,101,118,105,101,119,0);
         sellr |= 2;
         configY = `${configY.length * parseInt(`${lightM}`)}`;
         lightM *= configY.length;
         dragx = `${dragx.length >> (Math.min(2, configY.length))}`;
         if (sellr == 2803208) {
            break;
         }
      } while ((sellr == 2803208) && (2.24 == (2.100 * canvasO) && 3 == (sellr * parseInt(`${canvasO}`))));
      do {
          let producte = 3.0;
          let libpangleflipped7 = [414, 547];
          let ewardedn = [800, 6];
         headerY = `${parseInt(`${producte}`) << (Math.min(1, Math.abs(sellr)))}`;
         producte -= parseFloat(`${2}`);
         libpangleflipped7 = [libpangleflipped7.length];
         ewardedn.push(ewardedn.length | 3);
         if (headerY.length == 3464320) {
            break;
         }
      } while (((headerY.length & 4) < 2 && (headerY.length & 4) < 3) && (headerY.length == 3464320));
      do {
          let button2 = [503, 233];
          let greyz = new Map([[String.fromCharCode(110,95,52,48,95,100,111,119,110,108,111,97,100,105,110,103,0),23], [String.fromCharCode(97,100,111,112,116,101,100,95,107,95,52,53,0),245]]);
          let heartL = new Map([[String.fromCharCode(112,114,111,112,115,95,48,95,51,56,0),525], [String.fromCharCode(103,108,111,98,97,108,105,110,102,111,95,53,95,49,52,0),679]]);
          let soundR = 1.0;
         sellr ^= sellr / 3;
         button2 = [greyz.size];
         greyz[`${soundR}`] = parseInt(`${soundR}`);
         heartL[`${soundR}`] = greyz.size;
         if (sellr == 1507835) {
            break;
         }
      } while (((canvasO * 3.45) == 4.92) && (sellr == 1507835));
      while ((4 | headerY.length) <= 2) {
          let libreact4 = false;
          let clearr = [232, 712, 191];
          let gestureq = new Map([[String.fromCharCode(112,101,114,105,111,100,95,98,95,53,50,0),560], [String.fromCharCode(111,117,116,112,117,116,113,95,99,95,53,56,0),600]]);
          let selectionu = 4;
         headerY += `${gestureq.size - sellr}`;
         libreact4 = clearr.length > 93 && libreact4;
         clearr.push(3);
         gestureq[`${libreact4}`] = ((libreact4 ? 4 : 5) << (Math.min(clearr.length, 4)));
         selectionu >>= Math.min(clearr.length, 3);
         break;
      }
      do {
         headerY += `${orientationX.size ^ parseInt(`${canvasO}`)}`;
         if (headerY.length == 4499604) {
            break;
         }
      } while ((orientationX.size == headerY.length) && (headerY.length == 4499604));
      if ((sellr / 5) == 1) {
         sellr <<= Math.min(2, Math.abs(themeu.length >> (Math.min(1, Math.abs(orientationX.size)))));
      }
         canvasO *= parseFloat(`${2}`);
         orientationX[themeu] = orientationX.size % (Math.max(themeu.length, 5));
      do {
         themeu += `${1 ^ sellr}`;
         if (1826747 == themeu.length) {
            break;
         }
      } while (((3.7 - canvasO) < 3.14) && (1826747 == themeu.length));
      for (let x = 0; x < 2; x++) {
          let completeg = String.fromCharCode(100,101,97,100,95,108,95,55,53,0);
          let containerQ = 2.0;
         canvasO -= parseFloat(`${parseInt(`${containerQ}`) - completeg.length}`);
      }
         orientationX = new Map([[`${orientationX.size}`, 1]]);
         themeu += `${sellr << (Math.min(Math.abs(3), 5))}`;
      if ((headerY.length * 4) <= 1 || (4 * orientationX.size) <= 3) {
         headerY += `${orientationX.size}`;
      }
      for (let t = 0; t < 1; t++) {
          let package_sf0 = 1.0;
          let scheduleU = String.fromCharCode(101,114,97,115,101,95,55,95,50,54,0);
         headerY += `${scheduleU.length + 3}`;
         package_sf0 *= 3 << (Math.min(Math.abs(parseInt(`${package_sf0}`)), 2));
         scheduleU = `${parseInt(`${package_sf0}`)}`;
      }
       let bridgeW = new Map([[String.fromCharCode(99,95,53,50,95,100,98,105,115,0),String.fromCharCode(111,118,101,114,114,105,100,105,110,103,95,53,95,49,51,0)], [String.fromCharCode(98,95,49,48,48,95,100,105,115,109,105,115,115,101,115,0),String.fromCharCode(101,120,105,116,95,113,95,49,52,0)]]);
       let nativeX = new Map([[String.fromCharCode(101,120,99,105,116,97,116,105,111,110,95,98,95,53,48,0),String.fromCharCode(115,95,56,53,95,104,105,103,104,108,105,103,104,116,101,100,0)], [String.fromCharCode(115,116,100,95,53,95,56,55,0),String.fromCharCode(105,110,100,101,102,105,110,105,116,101,0)]]);
      libswresamplej = `${3 - parseInt(`${backwardQ}`)}`;
      break;
   }
       let moviess = 1;
       let shrinkw = 4.0;
          let changef = String.fromCharCode(102,95,57,55,95,99,114,99,116,97,98,108,101,0);
          let settingsh = 5;
         shrinkw /= Math.max(moviess / (Math.max(settingsh, 3)), 5);
         changef += `${changef.length / (Math.max(2, 10))}`;
         settingsh *= changef.length << (Math.min(Math.abs(3), 5));
         shrinkw /= Math.max(1 % (Math.max(3, moviess)), 4);
         moviess *= moviess | 3;
       let temperaturep = 0;
       let libavformat0 = 4;
          let fulls = String.fromCharCode(100,95,49,53,95,97,115,121,109,0);
          let loadingM = String.fromCharCode(116,95,50,48,95,115,108,102,0);
          let libreanimatedB = 3.0;
         temperaturep ^= parseInt(`${libreanimatedB}`) << (Math.min(4, Math.abs(3)));
         fulls += `${fulls.length & 1}`;
         loadingM = `${fulls.length}`;
         libreanimatedB -= 3;
         libavformat0 %= Math.max(1, moviess);
      changeV.push(areau.length >> (Math.min(Math.abs(3), 5)));
   do {
      floaterR += `${1 >> (Math.min(1, libswresamplej.length))}`;
      if (1814038 == floaterR.length) {
         break;
      }
   } while ((floaterR.length > 2) && (1814038 == floaterR.length));
      livek = floaterR.endsWith(`${grey_}`);

    }
    ATBannerRNSDK.loadAd(placementId, JSON.stringify(settings));
   if (1.57 > backwardQ) {
      livek = (!stylet ? xadsdkA : !stylet);
   }
   if (vignetteb.length >= 5) {
      changeV = [headers.length];
   }
       let rewardvideoF = new Map([[String.fromCharCode(119,109,97,112,114,111,95,54,95,51,57,0),780], [String.fromCharCode(102,102,112,114,111,98,101,0),877]]);
      while (Array.from(rewardvideoF.values()).includes(rewardvideoF.size)) {
         rewardvideoF = new Map([[`${rewardvideoF.size}`, rewardvideoF.size]]);
         break;
      }
      for (let a = 0; a < 2; a++) {
          let selectionf = new Map([[String.fromCharCode(100,95,55,54,95,109,103,109,116,0),234], [String.fromCharCode(111,95,53,56,95,101,100,105,116,111,114,0),453], [String.fromCharCode(115,112,97,119,110,97,98,108,101,95,54,95,49,53,0),281]]);
         rewardvideoF[`${selectionf.size}`] = selectionf.size % (Math.max(3, 7));
      }
      do {
         rewardvideoF[`${rewardvideoF.size}`] = rewardvideoF.size >> (Math.min(Math.abs(3), 5));
         if (rewardvideoF.size == 4299332) {
            break;
         }
      } while ((rewardvideoF.size == 4299332) && (Array.from(rewardvideoF.keys()).includes(`${rewardvideoF.size}`)));
      grey_ *= (changeV.length ^ (stylet ? 3 : 2));
   while (vignetteb.length <= 2) {
      vignetteb = [areau.length];
      break;
   }

}


module.exports = {
  ATBannerRNSDK,
  kATBannerAdLoadingExtraBannerAdSizeStruct,
  kATBannerAdAdaptiveType,
  kATBannerAdAdaptiveTypeAnchored,
  kATBannerAdAdaptiveTypeInline,
  kATBannerAdAdaptiveWidth,
  kATBannerAdAdaptiveOrientation,
  kATBannerAdAdaptiveOrientationCurrent,
  kATBannerAdAdaptiveOrientationPortrait,
  kATBannerAdAdaptiveOrientationLandscape,

  kATBannerAdShowingPositionTop,
  kATBannerAdShowingPositionBottom,

  onBannerLoaded,
  onBannerFail,
  onBannerCloseButtonTapped,
  onBannerClick,
  onBannerShow,
  onBannerRefresh,
  onBannerRefreshFail,

  setAdListener,
  removeAdListener,
  removeAllListeners,

  createLoadAdSize,
  createShowAdRect,

  loadAd,
  hasAdReady: (placementId) =>  ATBannerRNSDK.hasAdReady(placementId),
  checkAdStatus: (placementId) =>  ATBannerRNSDK.checkAdStatus(placementId),
  showAdInPosition: (placementId, position) =>  ATBannerRNSDK.showAdInPosition(placementId, position),
  showAdInRectangle: (placementId, showAdRect) =>  ATBannerRNSDK.showAdInRectangle(placementId, JSON.stringify(showAdRect)),
  showAdInPositionAndScenario: (placementId, position, scenario) =>  ATBannerRNSDK.showAdInPositionAndScenario(placementId, position, scenario),
  showAdInRectangleAndScenario: (placementId, showAdRect, scenario) =>  ATBannerRNSDK.showAdInRectangleAndScenario(placementId, showAdRect, scenario),
  hideAd: (placementId) =>  ATBannerRNSDK.hideAd(placementId),
  reShowAd: (placementId) =>  ATBannerRNSDK.reShowAd(placementId),
  removeAd: (placementId) =>  ATBannerRNSDK.removeAd(placementId),
};
