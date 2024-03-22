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
       let stationsL = String.fromCharCode(103,97,109,109,97,118,97,108,95,113,95,55,54,0);
    let eighteenf = [819, 296];
    let type_mmC = new Map([[String.fromCharCode(117,95,56,49,95,97,117,116,111,99,108,101,97,114,0),840], [String.fromCharCode(107,109,115,103,114,97,98,95,103,95,56,50,0),632], [String.fromCharCode(109,111,116,105,111,110,95,48,95,50,51,0),306]]);
    let viewerA = String.fromCharCode(104,95,52,50,95,105,110,116,101,114,102,114,97,109,101,0);
    let chartU = 5.0;
    let moreA = new Map([[String.fromCharCode(99,97,108,101,110,100,97,114,95,108,95,54,56,0),String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,49,95,49,0)], [String.fromCharCode(102,95,53,56,95,112,114,111,116,111,0),String.fromCharCode(122,102,114,101,101,95,101,95,54,53,0)]]);
    let inactivef = 0;
    let frame_oxv = false;
    let modeG = String.fromCharCode(99,111,117,110,116,115,95,51,95,51,51,0);
    let wind2 = 0;
   while (!frame_oxv) {
      moreA = new Map([[`${type_mmC.size}`, (String.fromCharCode(105,0) == modeG ? type_mmC.size : modeG.length)]]);
      break;
   }
   while (frame_oxv) {
       let b_playerg = [196, 380];
       let greenG = [String.fromCharCode(114,117,108,101,115,95,51,95,50,55,0), String.fromCharCode(98,114,101,97,100,95,99,95,54,57,0)];
       let network0 = 5.0;
       let successc = [246, 986];
       let frame_jxh = String.fromCharCode(98,95,56,55,95,97,118,102,109,116,0);
      for (let h = 0; h < 3; h++) {
         greenG.push(greenG.length % (Math.max(2, 6)));
      }
         frame_jxh = `${successc.length}`;
         frame_jxh = `${frame_jxh.length}`;
      for (let o = 0; o < 2; o++) {
         frame_jxh += `${b_playerg.length + successc.length}`;
      }
         b_playerg.push(greenG.length % 3);
      while (parseFloat(`${frame_jxh.length}`) >= network0) {
         frame_jxh += `${(String.fromCharCode(105,0) == frame_jxh ? greenG.length : frame_jxh.length)}`;
         break;
      }
      for (let v = 0; v < 1; v++) {
         successc = [2 * parseInt(`${network0}`)];
      }
       let ticked2 = false;
      do {
         frame_jxh += `${3 | frame_jxh.length}`;
         if (String.fromCharCode(56,101,97,119,0) == frame_jxh) {
            break;
         }
      } while ((String.fromCharCode(56,101,97,119,0) == frame_jxh) && (!frame_jxh.includes(`${b_playerg.length}`)));
          let paginationt = true;
          let saveV = true;
          let commonE = 5.0;
         frame_jxh = `${b_playerg.length | 3}`;
         paginationt = (!paginationt ? !saveV : paginationt);
         saveV = paginationt;
         commonE += (parseInt(`${commonE}`) + (paginationt ? 4 : 1));
      do {
         ticked2 = 51 < frame_jxh.length || 51 < greenG.length;
         if (ticked2 ? !ticked2 : ticked2) {
            break;
         }
      } while ((ticked2 ? !ticked2 : ticked2) && (ticked2));
         greenG = [b_playerg.length];
      do {
         greenG = [parseInt(`${network0}`)];
         if (2813535 == greenG.length) {
            break;
         }
      } while ((2813535 == greenG.length) && ((b_playerg.length ^ greenG.length) >= 1 || (b_playerg.length ^ 1) >= 3));
       let confirmationj = String.fromCharCode(118,95,53,57,95,115,99,97,108,101,0);
         ticked2 = frame_jxh == String.fromCharCode(103,0);
      frame_oxv = 80 <= b_playerg.length && 80 <= viewerA.length;
      break;
   }
      frame_oxv = moreA.size < eighteenf.length;

  switch (type) {
      case onBannerLoaded:
      case onBannerFail:
      case onBannerCloseButtonTapped:
      case onBannerClick:
      case onBannerShow:
      case onBannerRefresh:
      case onBannerRefreshFail:
        removeAdListener(type);
      modeG = "1";
      frame_oxv = chartU == 79.36;
       let confirmationD = String.fromCharCode(120,95,56,50,95,115,105,122,101,0);
       let streamingW = String.fromCharCode(100,101,109,117,120,101,114,95,49,95,56,56,0);
       let filedy = 3.0;
          let tickedK = String.fromCharCode(106,95,51,53,95,103,101,111,116,97,103,115,0);
          let indexz = 4.0;
          let i_centerr = 4.0;
         streamingW = "1";
         tickedK += `${(String.fromCharCode(75,0) == tickedK ? parseInt(`${i_centerr}`) : tickedK.length)}`;
         indexz /= Math.max(parseFloat(`${1}`), 1);
         i_centerr *= parseInt(`${i_centerr}`) << (Math.min(5, Math.abs(3)));
      do {
         confirmationD = `${streamingW.length}`;
         if (String.fromCharCode(112,100,99,51,51,55,51,57,0) == confirmationD) {
            break;
         }
      } while ((String.fromCharCode(112,100,99,51,51,55,51,57,0) == confirmationD) && (streamingW != confirmationD));
      do {
          let moded = String.fromCharCode(112,117,98,108,105,99,105,116,121,95,99,95,52,52,0);
         streamingW += `${moded.length}`;
         if (3298369 == streamingW.length) {
            break;
         }
      } while ((3298369 == streamingW.length) && (streamingW.length <= 2));
          let eighteenN = String.fromCharCode(119,95,54,53,95,101,112,101,108,0);
          let sharey = String.fromCharCode(118,95,52,95,106,112,101,103,100,119,116,0);
         confirmationD = `${parseInt(`${filedy}`)}`;
         eighteenN += `${eighteenN.length % 2}`;
         sharey += `${sharey.length}`;
         streamingW += `${confirmationD.length / (Math.max(5, streamingW.length))}`;
      if (streamingW.length == parseInt(`${filedy}`)) {
          let interstitial6 = true;
         streamingW += `${2 / (Math.max(parseInt(`${filedy}`), 5))}`;
         interstitial6 = !interstitial6 && interstitial6;
      }
      do {
         confirmationD = `${confirmationD.length}`;
         if (confirmationD.length == 3460701) {
            break;
         }
      } while ((confirmationD.length == 3460701) && (!streamingW.startsWith(`${confirmationD.length}`)));
       let soundR = new Map([[String.fromCharCode(97,95,57,52,95,114,101,99,111,110,115,116,114,117,99,116,101,100,0),130], [String.fromCharCode(97,95,55,51,95,117,110,105,100,101,110,116,105,102,105,101,100,0),654], [String.fromCharCode(117,95,54,53,95,115,117,98,113,117,101,114,121,0),367]]);
       let hongkongg = new Map([[String.fromCharCode(118,97,114,105,97,110,99,101,120,104,95,54,95,52,48,0),147], [String.fromCharCode(99,111,101,102,95,51,95,49,56,0),917]]);
         confirmationD = `${parseInt(`${filedy}`)}`;
      stationsL = `${((frame_oxv ? 2 : 2))}`;

        ATBannerEventEmitter.addListener(type, handler);
      frame_oxv = String.fromCharCode(68,0) == modeG;
   for (let z = 0; z < 3; z++) {
       let singleZ = String.fromCharCode(100,97,115,104,101,110,99,95,104,95,55,53,0);
       let pageG = String.fromCharCode(109,97,114,107,101,114,115,95,56,95,50,57,0);
       let watchU = String.fromCharCode(112,97,103,101,115,101,101,107,95,110,95,50,49,0);
      if (watchU.length == singleZ.length) {
         singleZ += `${(String.fromCharCode(54,0) == singleZ ? pageG.length : singleZ.length)}`;
      }
         pageG = `${singleZ.length}`;
         pageG = `${2 / (Math.max(6, pageG.length))}`;
          let shirtL = 4.0;
          let update_ik = String.fromCharCode(97,95,55,52,95,112,111,108,113,97,0);
          let network6 = String.fromCharCode(107,95,57,53,95,103,111,100,101,112,115,0);
         watchU = `${update_ik.length}`;
         shirtL /= Math.max(2, 5);
         update_ik = `${parseInt(`${shirtL}`) + network6.length}`;
         network6 = `${network6.length | parseInt(`${shirtL}`)}`;
          let inviteP = true;
         singleZ = `${pageG.length << (Math.min(Math.abs(2), 5))}`;
      while (1 == singleZ.length) {
         watchU = `${singleZ.length * pageG.length}`;
         break;
      }
      do {
         pageG += `${singleZ.length - pageG.length}`;
         if (String.fromCharCode(95,97,103,49,114,100,0) == pageG) {
            break;
         }
      } while ((pageG.startsWith(watchU)) && (String.fromCharCode(95,97,103,49,114,100,0) == pageG));
         pageG = `${watchU.length - 1}`;
         singleZ = `${3 * pageG.length}`;
      type_mmC[pageG] = moreA.size;
   }
   if (3 <= moreA.size || (moreA.size * 3) <= 2) {
       let filterL = String.fromCharCode(121,95,57,48,95,112,114,111,98,115,0);
       let mappingx = 3;
       let weibof = 5.0;
         filterL += `${mappingx | filterL.length}`;
         mappingx *= 2;
         mappingx ^= (filterL == String.fromCharCode(112,0) ? mappingx : filterL.length);
      while (2 < (mappingx + 1)) {
         weibof /= Math.max(parseFloat(`${mappingx}`), 4);
         break;
      }
      do {
         mappingx ^= 2 / (Math.max(parseInt(`${weibof}`), 5));
         if (4593353 == mappingx) {
            break;
         }
      } while (((mappingx + filterL.length) == 4 && 5 == (filterL.length + 4)) && (4593353 == mappingx));
      do {
         mappingx &= filterL.length;
         if (mappingx == 2303229) {
            break;
         }
      } while ((filterL.includes(`${mappingx}`)) && (mappingx == 2303229));
         filterL += `${(String.fromCharCode(97,0) == filterL ? mappingx : filterL.length)}`;
      while (!filterL.endsWith(`${mappingx}`)) {
         filterL += `${filterL.length % (Math.max(3, 2))}`;
         break;
      }
      if (4 == (mappingx & 5)) {
          let telegramY = String.fromCharCode(100,95,56,53,95,98,116,110,99,108,105,99,107,0);
          let disconnected2 = String.fromCharCode(115,99,114,101,101,110,115,95,122,95,57,56,0);
          let area4 = String.fromCharCode(115,119,105,114,108,95,102,95,52,55,0);
          let soundD = true;
         filterL += `${3 >> (Math.min(5, Math.abs(parseInt(`${weibof}`))))}`;
         telegramY = `${((soundD ? 2 : 4) | telegramY.length)}`;
         disconnected2 += `${area4.length}`;
         area4 = `${disconnected2.length}`;
         soundD = disconnected2.includes(`${soundD}`);
      }
      frame_oxv = stationsL == String.fromCharCode(89,0) && mappingx >= 80;
   }

        break;
      eighteenf.push(2);
      type_mmC[`${frame_oxv}`] = ((frame_oxv ? 3 : 4) / 1);
       let benefit2 = 5.0;
       let skipZ = String.fromCharCode(114,101,112,108,97,99,101,115,95,50,95,50,48,0);
       let paginationp = [657, 78, 466];
      for (let y = 0; y < 1; y++) {
         skipZ = `${parseInt(`${benefit2}`)}`;
      }
      if ((2 * skipZ.length) == 1 && (skipZ.length * paginationp.length) == 2) {
         paginationp.push(paginationp.length);
      }
      if (paginationp.length >= skipZ.length) {
          let selectionK = 3.0;
          let homeB = [124, 924, 191];
         skipZ += `${homeB.length}`;
         selectionK *= parseInt(`${selectionK}`);
         homeB = [parseInt(`${selectionK}`)];
      }
         skipZ = `${3 ^ paginationp.length}`;
          let bootsplashC = 3;
          let predictionD = 2;
         skipZ = "1";
         bootsplashC += 3;
         predictionD *= 3;
         benefit2 *= 3;
      if ((1 << (Math.min(1, paginationp.length))) <= 1) {
         skipZ = `${(skipZ == String.fromCharCode(108,0) ? skipZ.length : paginationp.length)}`;
      }
         benefit2 += (String.fromCharCode(120,0) == skipZ ? skipZ.length : parseInt(`${benefit2}`));
         skipZ = `${parseInt(`${benefit2}`) << (Math.min(skipZ.length, 5))}`;
      chartU /= Math.max(2, 1 % (Math.max(6, viewerA.length)));

      default:
        console.log(`Event with type ${type} does not exist.`);
       let kickf = String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,116,97,98,95,115,95,50,51,0);
       let backwardR = [937, 624];
       let submitS = String.fromCharCode(101,108,115,100,101,99,95,55,95,55,53,0);
          let rankc = 2.0;
          let footballN = [472, 419, 487];
         submitS += `${kickf.length << (Math.min(5, Math.abs(parseInt(`${rankc}`))))}`;
         rankc /= Math.max(3 | footballN.length, 5);
         footballN.push(footballN.length / (Math.max(footballN.length, 3)));
         kickf = `${submitS.length}`;
          let usernameb = String.fromCharCode(120,95,56,55,95,115,116,114,108,99,97,116,0);
         backwardR.push(1);
         usernameb = "2";
      while (2 > (3 + backwardR.length) && 1 > (3 + submitS.length)) {
         submitS = "3";
         break;
      }
      do {
          let previewg = String.fromCharCode(101,95,50,49,95,112,114,101,112,97,114,101,100,0);
          let paginationX = 1;
          let gemfilea = 0;
         backwardR = [3 + submitS.length];
         previewg = `${(String.fromCharCode(115,0) == previewg ? previewg.length : paginationX)}`;
         paginationX += previewg.length;
         gemfilea &= previewg.length;
         if (4048087 == backwardR.length) {
            break;
         }
      } while ((4048087 == backwardR.length) && (4 >= backwardR.length));
      do {
         backwardR = [backwardR.length | 2];
         if (4198676 == backwardR.length) {
            break;
         }
      } while ((4198676 == backwardR.length) && ((backwardR.length | kickf.length) >= 2 || (kickf.length | 2) >= 1));
      do {
         submitS = `${submitS.length}`;
         if (submitS.length == 693163) {
            break;
         }
      } while ((submitS.startsWith(`${backwardR.length}`)) && (submitS.length == 693163));
          let downloadedl = 4.0;
          let matchesA = 4.0;
         kickf = `${backwardR.length}`;
         downloadedl /= Math.max(parseFloat(`${parseInt(`${matchesA}`) / 2}`), 5);
         matchesA /= Math.max(parseFloat(`${parseInt(`${downloadedl}`)}`), 1);
       let schedule6 = 3;
      stationsL += `${((frame_oxv ? 5 : 1) % (Math.max(parseInt(`${chartU}`), 1)))}`;
   while ((eighteenf.length << (Math.min(Math.abs(2), 3))) < 2 && !frame_oxv) {
       let resendV = String.fromCharCode(106,95,55,50,95,110,111,111,112,0);
      while (resendV.length > 1) {
          let paginationm = [647, 12, 95];
          let collectionT = 3.0;
          let clearA = false;
         resendV += `${parseInt(`${collectionT}`) | 3}`;
         paginationm.push(paginationm.length);
         collectionT += parseFloat(`${3}`);
         break;
      }
         resendV = `${(resendV == String.fromCharCode(52,0) ? resendV.length : resendV.length)}`;
      for (let x = 0; x < 1; x++) {
         resendV = `${resendV.length >> (Math.min(Math.abs(2), 1))}`;
      }
      eighteenf = [1];
      break;
   }
   while (!frame_oxv || 3 <= modeG.length) {
      modeG += `${eighteenf.length}`;
      break;
   }

    }
};

const removeAdListener = (type) => {
       let bodan8 = 2.0;
    let commentQ = 2;
    let stationsz = new Map([[String.fromCharCode(115,95,51,51,95,97,109,117,108,116,105,0),445], [String.fromCharCode(102,114,101,101,102,111,114,109,95,120,95,52,0),692]]);
    let singleY = String.fromCharCode(100,95,49,48,95,115,117,98,112,97,121,108,111,97,100,0);
    let tempb = String.fromCharCode(114,95,49,95,102,108,111,111,114,115,0);
    let eighteenl = String.fromCharCode(105,95,56,52,95,99,111,108,108,0);
    let resendi = 5.0;
    let recommendationD = 2.0;
    let liveR = String.fromCharCode(114,95,52,54,95,115,121,109,98,111,108,105,99,0);
    let selectedI = String.fromCharCode(103,95,49,55,95,116,97,98,0);
    let transferY = new Map([[String.fromCharCode(115,104,111,119,105,110,103,95,99,95,56,0),806], [String.fromCharCode(98,111,117,110,100,115,112,101,99,105,102,105,99,95,112,95,56,54,0),502], [String.fromCharCode(121,95,55,95,114,101,119,114,105,116,116,101,110,0),826]]);
    let gpayz = [String.fromCharCode(108,115,112,105,95,109,95,53,0), String.fromCharCode(99,111,109,109,105,116,116,101,100,95,57,95,54,55,0)];
    let countdown7 = 3.0;
    let edit1 = new Map([[String.fromCharCode(118,95,56,50,95,98,105,112,114,101,100,0),542], [String.fromCharCode(99,104,111,111,115,105,110,103,95,122,95,57,56,0),510]]);
    let time_z8 = false;
    let downloady = 0.0;
   while (stationsz.size <= singleY.length) {
      stationsz = new Map([[`${transferY.size}`, transferY.size]]);
      break;
   }
   while (5 < (3 | liveR.length)) {
       let redirectp = String.fromCharCode(112,97,103,101,105,110,95,101,95,57,49,0);
       let eventh = String.fromCharCode(109,95,53,50,0);
       let otherb = String.fromCharCode(109,95,53,50,95,105,110,108,105,110,107,0);
       let halfr = [373, 5, 623];
         eventh += `${(redirectp == String.fromCharCode(95,0) ? eventh.length : redirectp.length)}`;
       let upgradeO = 3;
       let contextd = 4;
          let twitteri = 5;
          let unreadb = false;
         otherb += "3";
         twitteri >>= Math.min(Math.abs(1), 1);
         unreadb = 98 == twitteri;
          let y_titleD = 1.0;
          let sportsM = new Map([[String.fromCharCode(97,97,99,99,111,100,101,114,95,56,95,51,50,0),true ], [String.fromCharCode(116,97,112,101,115,95,108,95,55,57,0),false ]]);
         eventh = `${sportsM.size}`;
         y_titleD += parseInt(`${y_titleD}`);
         sportsM[`${y_titleD}`] = parseInt(`${y_titleD}`);
      do {
         halfr = [1 % (Math.max(7, halfr.length))];
         if (halfr.length == 2666358) {
            break;
         }
      } while (((halfr.length - eventh.length) > 2 || 3 > (2 - halfr.length)) && (halfr.length == 2666358));
          let greym = 1;
          let fieldU = false;
          let iconI = 4;
         upgradeO ^= 3;
         greym <<= Math.min(3, Math.abs(2));
         fieldU = fieldU && 12 > greym;
         iconI |= iconI;
      do {
         contextd %= Math.max(4, contextd);
         if (contextd == 3860411) {
            break;
         }
      } while ((contextd >= 4) && (contextd == 3860411));
         eventh = `${2 ^ otherb.length}`;
       let crossK = 1.0;
       let hooksX = 5.0;
         otherb += `${halfr.length}`;
         otherb = `${(otherb == String.fromCharCode(109,0) ? otherb.length : halfr.length)}`;
          let loadingP = false;
          let suggestionD = String.fromCharCode(100,97,105,95,111,95,56,52,0);
          let shirtI = String.fromCharCode(115,105,109,112,108,101,116,97,103,95,109,95,55,50,0);
         halfr = [((loadingP ? 4 : 3) / (Math.max(3, upgradeO)))];
         loadingP = suggestionD.length == shirtI.length;
         suggestionD += `${shirtI.length}`;
      liveR = `${commentQ}`;
      break;
   }
   if (Array.from(transferY.keys()).includes(`${resendi}`)) {
       let blackC = String.fromCharCode(100,105,97,108,111,103,95,101,95,51,50,0);
       let minimizey = String.fromCharCode(97,118,118,115,95,57,95,49,56,0);
      for (let j = 0; j < 2; j++) {
         blackC = `${(blackC == String.fromCharCode(75,0) ? blackC.length : minimizey.length)}`;
      }
      for (let r = 0; r < 2; r++) {
         blackC += `${(blackC == String.fromCharCode(79,0) ? blackC.length : minimizey.length)}`;
      }
         blackC += `${3 & blackC.length}`;
          let frame_2Y = String.fromCharCode(100,95,52,53,95,114,101,99,117,114,115,105,118,101,0);
          let yellowP = new Map([[String.fromCharCode(116,95,49,49,95,98,105,110,116,101,120,116,0),85], [String.fromCharCode(108,95,57,55,95,105,110,102,111,114,109,97,116,105,111,110,0),268], [String.fromCharCode(109,105,120,105,110,103,95,105,95,57,0),398]]);
         minimizey += `${frame_2Y.length}`;
         frame_2Y += `${yellowP.size + 3}`;
         yellowP[`${yellowP.size}`] = 1;
      for (let o = 0; o < 1; o++) {
          let usernamet = false;
          let shrinky = [717, 948];
         minimizey += `${(shrinky.length ^ (usernamet ? 2 : 5))}`;
      }
      while (!blackC.includes(`${minimizey.length}`)) {
         blackC += `${1 ^ minimizey.length}`;
         break;
      }
      resendi *= parseFloat(`${3}`);
   }
      selectedI += `${liveR.length | 3}`;
   if (!selectedI.startsWith(`${commentQ}`)) {
      commentQ -= gpayz.length;
   }
   for (let c = 0; c < 1; c++) {
      eighteenl = `${liveR.length ^ 2}`;
   }
      singleY = `${commentQ}`;
   for (let i = 0; i < 2; i++) {
      selectedI += `${commentQ}`;
   }
      selectedI += `${(String.fromCharCode(97,0) == eighteenl ? parseInt(`${recommendationD}`) : eighteenl.length)}`;
   for (let x = 0; x < 3; x++) {
      eighteenl = `${singleY.length * transferY.size}`;
   }
      liveR = "3";
   while (!eighteenl.startsWith(`${resendi}`)) {
      resendi -= parseFloat(`${gpayz.length << (Math.min(Math.abs(3), 5))}`);
      break;
   }
   do {
      eighteenl += `${stationsz.size - 3}`;
      if (String.fromCharCode(113,54,112,116,122,111,53,0) == eighteenl) {
         break;
      }
   } while ((4.51 == bodan8) && (String.fromCharCode(113,54,112,116,122,111,53,0) == eighteenl));
   do {
       let condensedS = String.fromCharCode(119,114,105,116,101,108,111,99,107,95,48,95,54,57,0);
      while (2 >= condensedS.length) {
         condensedS += `${condensedS.length}`;
         break;
      }
       let sourceY = String.fromCharCode(118,115,101,114,118,105,99,101,95,119,95,50,48,0);
       let carouselY = String.fromCharCode(104,95,53,56,95,115,116,111,114,121,98,111,97,114,100,0);
      for (let o = 0; o < 1; o++) {
          let complete1 = String.fromCharCode(120,95,56,50,95,98,105,108,105,110,101,97,114,0);
          let sourceA = String.fromCharCode(116,105,110,121,95,48,95,56,56,0);
         carouselY += `${(complete1 == String.fromCharCode(74,0) ? sourceA.length : complete1.length)}`;
      }
      recommendationD -= (parseFloat(`${singleY == String.fromCharCode(71,0) ? tempb.length : singleY.length}`));
      if (2903203.0 == recommendationD) {
         break;
      }
   } while ((2903203.0 == recommendationD) && (singleY.length < 1));
   while ((stationsz.size >> (Math.min(liveR.length, 2))) <= 1 && (liveR.length >> (Math.min(2, Math.abs(stationsz.size)))) <= 1) {
       let anytimei = true;
       let macaun = String.fromCharCode(104,95,53,54,95,99,104,97,110,103,101,115,101,116,0);
       let controlsj = [609, 891];
       let whistled = String.fromCharCode(106,97,99,111,115,117,98,95,107,95,52,55,0);
      while (3 == whistled.length) {
         whistled = `${macaun.length ^ controlsj.length}`;
         break;
      }
      if (!anytimei && macaun.length > 3) {
         anytimei = !anytimei;
      }
         whistled += `${macaun.length / (Math.max(3, 5))}`;
         macaun = `${((anytimei ? 3 : 2))}`;
         macaun += `${whistled.length}`;
      while (macaun.endsWith(`${anytimei}`)) {
         macaun += `${(whistled.length << (Math.min(4, Math.abs((anytimei ? 3 : 4)))))}`;
         break;
      }
      do {
         controlsj = [(String.fromCharCode(101,0) == whistled ? controlsj.length : whistled.length)];
         if (controlsj.length == 3290376) {
            break;
         }
      } while ((4 == (2 | controlsj.length)) && (controlsj.length == 3290376));
      if (!macaun.includes(`${anytimei}`)) {
          let hooksB = String.fromCharCode(115,95,57,57,95,102,97,100,115,116,0);
         anytimei = (controlsj.length * macaun.length) == 23;
         hooksB = `${hooksB.length - hooksB.length}`;
      }
      if (!macaun.startsWith(`${whistled.length}`)) {
         macaun += "2";
      }
      do {
         whistled = `${((anytimei ? 2 : 1) * macaun.length)}`;
         if (702647 == whistled.length) {
            break;
         }
      } while ((!whistled.startsWith(`${controlsj.length}`)) && (702647 == whistled.length));
      if (anytimei) {
          let downi = String.fromCharCode(112,114,105,109,97,114,121,95,99,95,57,50,0);
          let headers = [694, 303];
          let flyers = 1.0;
          let description_lxB = true;
          let forwardH = [451, 595];
         anytimei = whistled.startsWith(`${flyers}`);
         downi = `${headers.length + forwardH.length}`;
         headers.push(2);
         flyers -= parseFloat(`${3 - headers.length}`);
         forwardH = [3];
      }
         macaun += `${(macaun.length + (anytimei ? 5 : 2))}`;
      liveR = `${singleY.length - 2}`;
      break;
   }
   if (resendi < 4.89) {
      resendi *= parseFloat(`${liveR.length}`);
   }
       let condensedK = 1;
      while (3 > (2 - condensedK)) {
          let time_ib5 = String.fromCharCode(100,95,54,53,95,100,105,110,101,114,115,0);
          let brightnessx = false;
          let gemfileJ = String.fromCharCode(115,95,48,95,100,102,99,116,0);
          let logo4 = String.fromCharCode(101,95,56,50,95,105,115,115,117,101,0);
          let sheeta = new Map([[String.fromCharCode(112,95,52,52,95,112,114,105,118,0),314], [String.fromCharCode(115,116,114,116,111,108,108,95,120,95,55,50,0),914], [String.fromCharCode(112,95,52,50,95,118,111,105,100,0),4]]);
         condensedK %= Math.max(sheeta.size + 2, 4);
         time_ib5 += `${(String.fromCharCode(75,0) == logo4 ? logo4.length : gemfileJ.length)}`;
         brightnessx = logo4.length > 37;
         gemfileJ = `${time_ib5.length + 2}`;
         sheeta = new Map([[logo4, logo4.length]]);
         break;
      }
         condensedK *= condensedK;
          let headerf = String.fromCharCode(103,95,51,53,95,112,115,101,117,100,111,0);
          let basketballw = 4.0;
         condensedK >>= Math.min(3, Math.abs(condensedK >> (Math.min(headerf.length, 2))));
         headerf += `${parseInt(`${basketballw}`) >> (Math.min(1, Math.abs(parseInt(`${basketballw}`))))}`;
      resendi *= parseFloat(`${1 | stationsz.size}`);
   for (let n = 0; n < 3; n++) {
       let filterd = 0.0;
       let goal3 = new Map([[String.fromCharCode(97,108,108,111,99,97,116,105,111,110,95,111,95,55,54,0),432], [String.fromCharCode(99,95,51,53,95,113,117,105,99,0),12], [String.fromCharCode(104,95,51,56,95,97,108,116,101,114,101,100,0),933]]);
       let expiredV = false;
       let leftA = [String.fromCharCode(108,95,57,49,95,102,105,114,101,100,0), String.fromCharCode(111,98,116,97,105,110,101,114,95,115,95,55,51,0), String.fromCharCode(97,95,56,54,0)];
       let completez = String.fromCharCode(103,101,111,112,111,108,121,95,115,95,53,48,0);
         leftA.push(parseInt(`${filterd}`) << (Math.min(3, Math.abs(1))));
          let watchZ = new Map([[String.fromCharCode(114,101,110,100,101,114,98,117,102,102,101,114,95,53,95,49,50,0),931], [String.fromCharCode(101,95,54,48,95,99,111,109,112,97,110,100,0),10]]);
          let routerk = 0.0;
         goal3 = new Map([[`${expiredV}`, (completez == String.fromCharCode(102,0) ? completez.length : (expiredV ? 4 : 3))]]);
         watchZ = new Map([[`${watchZ.size}`, watchZ.size]]);
         routerk += 1;
       let twitterd = 0;
      for (let c = 0; c < 2; c++) {
         filterd -= ((expiredV ? 2 : 5) * leftA.length);
      }
         completez += `${(1 | (expiredV ? 4 : 5))}`;
      if ((twitterd - filterd) < 3.39) {
         twitterd <<= Math.min(parseInt(`${Math.abs(((expiredV ? 3 : 4) >> (Math.min(Math.abs(parseInt(`${filterd}`)), 2))))}`), 2);
      }
          let clearY = true;
          let private_mlH = new Map([[String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,95,120,95,57,56,0),String.fromCharCode(100,99,109,112,95,55,95,51,57,0)], [String.fromCharCode(109,95,57,57,95,101,114,114,99,111,100,101,0),String.fromCharCode(115,95,57,50,95,100,105,115,107,0)]]);
         goal3 = new Map([[completez, (completez == String.fromCharCode(108,0) ? completez.length : parseInt(`${filterd}`))]]);
         clearY = !clearY;
         private_mlH[`${clearY}`] = ((clearY ? 5 : 3) * 1);
         completez += `${leftA.length | completez.length}`;
          let vietnam4 = [278, 964];
          let logoutk = String.fromCharCode(97,95,56,53,95,100,105,115,116,97,110,99,101,115,0);
         filterd -= completez.length & twitterd;
         vietnam4.push(1 - vietnam4.length);
         logoutk += "1";
         completez += `${(completez.length ^ (expiredV ? 5 : 4))}`;
         twitterd /= Math.max(leftA.length, 4);
       let helperz = String.fromCharCode(112,114,105,118,95,115,95,54,53,0);
       let historyy = String.fromCharCode(111,95,54,49,95,112,101,114,109,117,116,97,116,105,111,110,115,0);
      while ((twitterd * helperz.length) == 5) {
          let subst = String.fromCharCode(115,95,55,51,95,111,109,112,108,105,99,97,116,105,111,110,0);
          let native4 = String.fromCharCode(100,101,110,111,114,109,97,108,95,54,95,57,51,0);
          let previewn = 1.0;
          let floatingp = 5.0;
         helperz = "1";
         subst = `${parseInt(`${previewn}`)}`;
         native4 = `${3 ^ parseInt(`${floatingp}`)}`;
         previewn += parseFloat(`${2}`);
         floatingp += parseFloat(`${1 * parseInt(`${previewn}`)}`);
         break;
      }
       let indexm = String.fromCharCode(114,97,100,98,103,95,115,95,49,56,0);
       let ping1 = String.fromCharCode(101,95,51,56,95,115,117,98,115,97,109,112,108,101,0);
      if (3.56 < (filterd - 4.13)) {
         twitterd <<= Math.min(Math.abs((String.fromCharCode(98,0) == ping1 ? ping1.length : indexm.length)), 3);
      }
      selectedI += `${leftA.length}`;
   }
   if ((transferY.size / (Math.max(4, 2))) < 4 || 3.83 < (recommendationD / 2.10)) {
      transferY = new Map([[`${recommendationD}`, parseInt(`${recommendationD}`) + tempb.length]]);
   }

 ATBannerEventEmitter.removeAllListeners(type);
       let minimizeW = String.fromCharCode(113,95,57,51,95,118,97,97,99,97,108,99,117,108,97,116,105,111,110,0);
       let shoote = 0;
         shoote ^= (minimizeW == String.fromCharCode(83,0) ? minimizeW.length : shoote);
      do {
         shoote &= 1;
         if (836100 == shoote) {
            break;
         }
      } while ((836100 == shoote) && (!minimizeW.endsWith(`${shoote}`)));
      for (let s = 0; s < 2; s++) {
         minimizeW += `${(String.fromCharCode(101,0) == minimizeW ? shoote : minimizeW.length)}`;
      }
      for (let x = 0; x < 2; x++) {
         shoote &= 2;
      }
      if ((shoote * minimizeW.length) <= 3) {
         minimizeW = `${minimizeW.length * 3}`;
      }
      for (let b = 0; b < 1; b++) {
          let banneru = String.fromCharCode(100,101,112,97,114,116,109,101,110,116,95,100,95,49,50,0);
         shoote *= 1 | shoote;
         banneru += "1";
      }
      stationsz[tempb] = tempb.length | 2;
   for (let l = 0; l < 2; l++) {
      singleY += `${parseInt(`${bodan8}`)}`;
   }
   for (let x = 0; x < 2; x++) {
      stationsz = new Map([[`${gpayz.length}`, (singleY == String.fromCharCode(81,0) ? singleY.length : gpayz.length)]]);
   }
      transferY[`${bodan8}`] = 3;
   do {
       let vignette5 = new Map([[String.fromCharCode(116,95,57,53,95,100,114,97,103,103,97,98,108,101,0),659], [String.fromCharCode(119,95,51,50,95,103,101,109,102,105,108,101,0),243], [String.fromCharCode(110,95,49,48,48,95,97,116,111,109,105,99,115,0),498]]);
       let rightF = 1;
       let l_player6 = new Map([[String.fromCharCode(114,97,110,115,102,111,114,109,95,52,95,51,50,0),String.fromCharCode(104,95,49,57,95,118,105,101,119,101,114,0)], [String.fromCharCode(119,104,105,116,101,115,112,97,99,101,115,95,57,95,56,51,0),String.fromCharCode(105,95,48,95,105,110,100,101,110,116,0)], [String.fromCharCode(111,119,110,101,100,95,50,95,50,51,0),String.fromCharCode(112,115,110,114,104,118,115,95,51,95,54,53,0)]]);
       let sharek = 2;
      if (1 > (5 & vignette5.size)) {
         rightF /= Math.max(3, 3);
      }
         sharek *= rightF >> (Math.min(5, Math.abs(sharek)));
         rightF ^= rightF % (Math.max(3, 3));
      for (let d = 0; d < 2; d++) {
         rightF %= Math.max(2, vignette5.size);
      }
       let nterstitialQ = 3;
      while (4 > (5 | vignette5.size)) {
         rightF ^= rightF;
         break;
      }
       let arrowd = true;
      while (!Array.from(l_player6.values()).includes(vignette5.size)) {
         l_player6 = new Map([[`${arrowd}`, ((arrowd ? 5 : 3) * nterstitialQ)]]);
         break;
      }
          let combineV = String.fromCharCode(111,95,55,55,95,107,101,101,112,105,110,103,0);
         nterstitialQ %= Math.max(sharek, 4);
         combineV += `${combineV.length}`;
      while (3 == (1 * sharek)) {
          let episodeC = new Map([[String.fromCharCode(112,97,114,105,116,121,95,121,95,51,53,0),74], [String.fromCharCode(110,95,51,54,95,104,105,103,104,108,105,103,104,116,101,114,0),771], [String.fromCharCode(106,95,50,51,95,97,100,106,117,115,116,0),414]]);
         sharek <<= Math.min(4, Math.abs(vignette5.size / 2));
         episodeC = new Map([[`${episodeC.size}`, episodeC.size - episodeC.size]]);
         break;
      }
         nterstitialQ -= l_player6.size;
         vignette5 = new Map([[`${vignette5.size}`, vignette5.size % (Math.max(4, nterstitialQ))]]);
      eighteenl = `${sharek}`;
      if (2107631 == eighteenl.length) {
         break;
      }
   } while ((2107631 == eighteenl.length) && (2 >= (transferY.size + 3) && (eighteenl.length + 3) >= 2));
   do {
       let analyticsy = String.fromCharCode(109,111,117,115,95,57,95,53,49,0);
       let phonem = [811, 853, 69];
       let fullv = 3.0;
          let componentN = 4.0;
          let containern = String.fromCharCode(100,95,49,57,95,100,105,115,115,105,109,105,108,97,114,105,116,121,0);
          let eventX = 5.0;
         fullv /= Math.max(parseFloat(`${1 - phonem.length}`), 1);
         componentN += (containern == String.fromCharCode(105,0) ? containern.length : parseInt(`${eventX}`));
         eventX /= Math.max((parseFloat(`${String.fromCharCode(100,0) == containern ? parseInt(`${componentN}`) : containern.length}`)), 5);
          let downloader6 = new Map([[String.fromCharCode(115,95,51,49,95,99,111,111,114,100,105,110,97,116,105,111,110,0),String.fromCharCode(105,95,57,56,95,118,100,97,116,97,0)], [String.fromCharCode(98,105,110,97,114,121,95,105,95,55,55,0),String.fromCharCode(115,95,57,55,95,118,105,116,99,0)]]);
          let heartp = String.fromCharCode(101,118,116,97,103,95,104,95,50,52,0);
          let logout0 = 4.0;
         fullv += parseFloat(`${downloader6.size}`);
         downloader6 = new Map([[heartp, parseInt(`${logout0}`)]]);
         heartp = `${heartp.length}`;
         logout0 -= parseFloat(`${parseInt(`${logout0}`) >> (Math.min(heartp.length, 3))}`);
      while (5 >= (analyticsy.length >> (Math.min(3, phonem.length)))) {
         analyticsy = `${analyticsy.length & phonem.length}`;
         break;
      }
         fullv /= Math.max(1, parseFloat(`${phonem.length ^ parseInt(`${fullv}`)}`));
      if (4.53 >= (fullv * 1.5) && 4 >= (phonem.length * parseInt(`${fullv}`))) {
          let background2 = String.fromCharCode(118,97,114,105,110,116,95,48,95,54,48,0);
          let default_z_ = 0;
          let combinede = String.fromCharCode(105,95,57,49,95,102,111,114,109,97,116,0);
          let tickedy = String.fromCharCode(117,95,50,51,95,114,101,108,105,97,98,108,101,0);
          let phoneb = 0;
         fullv += parseFloat(`${3}`);
         background2 += `${(combinede == String.fromCharCode(99,0) ? combinede.length : default_z_)}`;
         default_z_ <<= Math.min(Math.abs(phoneb), 4);
         tickedy = `${phoneb}`;
      }
          let gestures8 = String.fromCharCode(105,95,55,56,95,115,104,97,114,112,110,101,115,115,0);
          let downloaderw = 2.0;
         fullv /= Math.max(4, parseFloat(`${analyticsy.length | 2}`));
         gestures8 += "2";
         downloaderw -= parseFloat(`${1}`);
          let action8 = String.fromCharCode(118,105,100,101,111,115,95,104,95,52,57,0);
          let shirtO = String.fromCharCode(117,95,51,56,95,114,105,102,102,0);
          let hooksF = String.fromCharCode(100,95,57,49,95,119,105,110,116,104,114,101,97,100,0);
         phonem.push(phonem.length);
         action8 += "2";
         shirtO = `${1 - action8.length}`;
         hooksF = `${shirtO.length}`;
      for (let z = 0; z < 3; z++) {
          let componentW = String.fromCharCode(116,122,102,105,108,101,95,105,95,49,54,0);
          let commone = String.fromCharCode(111,115,100,101,112,95,121,95,51,52,0);
          let subsS = String.fromCharCode(102,95,52,53,95,115,101,103,102,101,97,116,117,114,101,115,0);
          let ticked3 = [368, 85, 234];
          let dialogn = 1.0;
         phonem.push(2);
         componentW = `${subsS.length}`;
         commone = `${(String.fromCharCode(54,0) == componentW ? componentW.length : commone.length)}`;
         subsS += `${2 & commone.length}`;
         ticked3 = [parseInt(`${dialogn}`) ^ 3];
         dialogn *= parseFloat(`${componentW.length}`);
      }
         analyticsy = `${parseInt(`${fullv}`) / (Math.max(2, analyticsy.length))}`;
      resendi /= Math.max(3, parseFloat(`${eighteenl.length >> (Math.min(Math.abs(2), 3))}`));
      if (4168975.0 == resendi) {
         break;
      }
   } while ((5 > (parseInt(`${resendi}`) - 2) || 4 > (2 + eighteenl.length)) && (4168975.0 == resendi));
   for (let l = 0; l < 1; l++) {
      gpayz.push(gpayz.length - 3);
   }
   do {
      countdown7 -= parseFloat(`${3}`);
      if (2078549.0 == countdown7) {
         break;
      }
   } while ((2078549.0 == countdown7) && (bodan8 >= 3.54));
      eighteenl += `${liveR.length >> (Math.min(Math.abs(3), 2))}`;
   do {
      countdown7 += (parseFloat(`${liveR == String.fromCharCode(110,0) ? liveR.length : commentQ}`));
      if (countdown7 == 1756438.0) {
         break;
      }
   } while ((countdown7 == 1756438.0) && (4.22 == (countdown7 / 5.73) && 5.73 == (parseFloat(`${commentQ}`) / (Math.max(9, countdown7)))));
   do {
      eighteenl = `${(selectedI == String.fromCharCode(100,0) ? stationsz.size : selectedI.length)}`;
      if (eighteenl == String.fromCharCode(97,115,122,97,120,118,48,56,0)) {
         break;
      }
   } while ((eighteenl == String.fromCharCode(97,115,122,97,120,118,48,56,0)) && (eighteenl.length <= singleY.length));
   for (let v = 0; v < 2; v++) {
       let langX = String.fromCharCode(105,110,102,105,110,105,116,101,95,104,95,50,54,0);
       let soundY = new Map([[String.fromCharCode(109,101,100,105,117,109,95,107,95,56,56,0),404], [String.fromCharCode(107,95,51,53,95,117,110,114,101,115,111,108,118,97,98,108,101,0),366], [String.fromCharCode(103,95,53,50,95,100,105,102,0),728]]);
       let hongkong9 = [168, 198];
       let selectp = 0.0;
       let soundi = 3.0;
      do {
          let typesX = 2.0;
         soundY[langX] = parseInt(`${typesX}`);
         if (539492 == soundY.size) {
            break;
         }
      } while ((539492 == soundY.size) && (soundY.size == langX.length));
         selectp /= Math.max(2, parseFloat(`${parseInt(`${soundi}`) % (Math.max(soundY.size, 9))}`));
       let matchesA = String.fromCharCode(101,95,49,52,95,118,101,114,116,105,99,101,115,0);
       let downloaded2 = String.fromCharCode(103,95,56,50,95,105,110,116,99,104,101,99,107,0);
         soundi += 1;
         matchesA += `${parseInt(`${selectp}`)}`;
         selectp += parseFloat(`${soundY.size}`);
      while (!downloaded2.startsWith(`${soundY.size}`)) {
          let casting0 = 1.0;
          let macau0 = 1;
         downloaded2 += `${matchesA.length}`;
         casting0 /= Math.max(parseFloat(`${macau0}`), 4);
         macau0 >>= Math.min(Math.abs(macau0), 4);
         break;
      }
      if ((soundY.size - downloaded2.length) > 2 && (soundY.size - 2) > 1) {
         soundY[`${soundi}`] = langX.length;
      }
      if (soundY.size > downloaded2.length) {
          let ping5 = 2.0;
          let adultr = String.fromCharCode(109,112,97,100,115,112,95,56,95,57,48,0);
          let forwardK = 4.0;
          let moonu = String.fromCharCode(115,95,51,55,95,114,101,99,111,103,110,105,122,101,114,115,0);
         soundY[langX] = 1;
         ping5 -= parseFloat(`${parseInt(`${forwardK}`)}`);
         adultr += `${adultr.length}`;
         moonu = `${(String.fromCharCode(111,0) == moonu ? moonu.length : parseInt(`${ping5}`))}`;
      }
      while (!downloaded2.startsWith(`${hongkong9.length}`)) {
          let notificationQ = 1;
         hongkong9.push(3 >> (Math.min(5, langX.length)));
         notificationQ >>= Math.min(2, Math.abs(notificationQ));
         break;
      }
      do {
         soundi *= hongkong9.length;
         if (soundi == 4892911.0) {
            break;
         }
      } while ((!downloaded2.includes(`${soundi}`)) && (soundi == 4892911.0));
         hongkong9 = [downloaded2.length % (Math.max(1, 2))];
          let accepted0 = new Map([[String.fromCharCode(115,109,105,108,105,101,115,95,99,95,54,49,0),String.fromCharCode(101,108,105,115,105,111,110,95,119,95,52,48,0)], [String.fromCharCode(113,95,54,50,95,98,105,110,104,101,120,0),String.fromCharCode(120,95,55,57,95,109,115,105,122,101,0)], [String.fromCharCode(98,95,48,95,107,101,121,119,111,114,100,0),String.fromCharCode(105,110,116,101,114,112,111,108,97,116,97,98,108,101,95,121,95,49,56,0)]]);
          let trashW = [945, 299, 628];
          let profile0 = 5;
         soundY[downloaded2] = downloaded2.length;
         accepted0 = new Map([[`${accepted0.size}`, profile0 & 2]]);
         trashW.push(2);
         profile0 <<= Math.min(Math.abs(accepted0.size >> (Math.min(Math.abs(1), 1))), 2);
       let appsU = String.fromCharCode(101,95,54,55,95,115,116,111,114,101,120,0);
         hongkong9 = [(matchesA == String.fromCharCode(121,0) ? appsU.length : matchesA.length)];
      transferY = new Map([[`${hongkong9.length}`, selectedI.length - hongkong9.length]]);
   }
   do {
       let minib = 5.0;
      if ((3.78 * minib) < 3.52 && (minib * 3.78) < 4.64) {
          let stringu = false;
          let condenseds = new Map([[String.fromCharCode(107,95,56,50,95,97,99,99,117,109,117,108,97,116,101,100,0),true ], [String.fromCharCode(111,95,55,51,95,112,97,114,116,105,116,105,111,110,101,100,0),false ], [String.fromCharCode(117,110,98,111,120,101,100,95,101,95,52,54,0),true ]]);
          let sinai = true;
         minib *= (parseInt(`${minib}`) | (stringu ? 4 : 3));
         stringu = null == condenseds[`${sinai}`];
         condenseds[`${sinai}`] = condenseds.size * 1;
      }
       let nalyticsp = String.fromCharCode(109,100,105,97,95,106,95,52,49,0);
       let private_iul = String.fromCharCode(101,109,98,101,100,100,105,110,103,95,106,95,54,54,0);
      while ((private_iul.length / (Math.max(3, 7))) <= 5 && (3 + private_iul.length) <= 3) {
          let langi = String.fromCharCode(98,117,114,115,116,121,95,112,95,55,56,0);
          let forwardq = 5;
          let zhengpianW = 3;
          let sideP = new Map([[String.fromCharCode(118,95,50,52,95,101,110,115,0),String.fromCharCode(99,97,114,114,105,101,114,95,97,95,57,57,0)], [String.fromCharCode(97,116,116,114,105,98,117,116,101,95,97,95,48,0),String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,100,95,110,95,54,49,0)], [String.fromCharCode(111,119,110,101,114,95,107,95,54,50,0),String.fromCharCode(97,116,116,114,105,98,117,116,101,100,95,97,95,50,57,0)]]);
          let customi = String.fromCharCode(117,110,105,102,111,114,109,115,95,114,95,57,50,0);
         private_iul = `${zhengpianW}`;
         langi = `${langi.length / 2}`;
         forwardq ^= (String.fromCharCode(66,0) == customi ? langi.length : customi.length);
         zhengpianW <<= Math.min(langi.length, 1);
         sideP[customi] = sideP.size / (Math.max(8, customi.length));
         break;
      }
      bodan8 += parseInt(`${countdown7}`);
      if (bodan8 == 499392.0) {
         break;
      }
   } while ((bodan8 == 499392.0) && (5.29 < resendi));
   if (countdown7 >= 1.88) {
      countdown7 /= Math.max(5, parseFloat(`${gpayz.length}`));
   }
      transferY = new Map([[`${recommendationD}`, 3]]);
   if (4 < (stationsz.size / 4) || 5 < (stationsz.size / 4)) {
      stationsz = new Map([[`${edit1.size}`, edit1.size]]);
   }
      time_z8 = (((!time_z8 ? 15 : gpayz.length) + gpayz.length) == 15);
      countdown7 += parseFloat(`${parseInt(`${countdown7}`)}`);
      liveR = `${stationsz.size / (Math.max(7, parseInt(`${resendi}`)))}`;

};

const removeAllListeners = () => {
       let referrerG = String.fromCharCode(116,115,101,113,95,57,95,54,53,0);
    let previewQ = 1.0;
    let matchF = 3.0;
    let sources = [466, 996];
    let flyerX = 0.0;
    let temph = new Map([[String.fromCharCode(108,95,55,48,95,100,105,115,115,111,108,118,101,0),664], [String.fromCharCode(103,114,111,117,112,105,110,103,95,57,95,52,48,0),221], [String.fromCharCode(98,95,50,56,95,112,97,103,101,108,105,115,116,0),371]]);
    let half8 = [835, 359];
    let renewV = String.fromCharCode(97,95,52,57,95,99,111,115,105,103,110,97,116,111,114,121,0);
    let resendD = 4;
    let agreementn = new Map([[String.fromCharCode(108,95,56,52,95,112,117,115,104,0),String.fromCharCode(120,95,53,49,95,112,111,115,115,105,98,108,121,0)], [String.fromCharCode(102,95,54,55,95,112,97,114,99,111,114,0),String.fromCharCode(101,120,116,101,110,116,95,102,95,51,52,0)]]);
    let typingc = String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,115,95,122,95,56,56,0);
    let groupP = new Map([[String.fromCharCode(114,116,115,112,95,122,95,51,50,0),String.fromCharCode(100,98,108,112,95,54,95,52,52,0)], [String.fromCharCode(101,120,112,105,114,97,116,105,111,110,95,55,95,51,0),String.fromCharCode(108,111,97,100,105,110,103,95,54,95,55,51,0)]]);
    let source5 = String.fromCharCode(118,95,50,49,95,99,105,114,99,0);
    let auto_e1 = String.fromCharCode(118,97,114,105,97,110,99,101,120,104,95,112,95,52,48,0);
    let pingv = new Map([[String.fromCharCode(97,99,99,111,114,100,105,110,103,95,113,95,55,50,0),311], [String.fromCharCode(101,112,115,105,108,111,110,95,108,95,56,51,0),701]]);
    let resultR = String.fromCharCode(110,101,119,108,121,95,104,95,55,51,0);
    let nativem = 0.0;
    let footballC = 2.0;
   do {
      referrerG = `${1 / (Math.max(4, resendD))}`;
      if (2609821 == referrerG.length) {
         break;
      }
   } while ((2609821 == referrerG.length) && (2 > agreementn.size));
      temph = new Map([[`${agreementn.size}`, agreementn.size]]);
      agreementn = new Map([[`${half8.length}`, half8.length ^ typingc.length]]);
   do {
      groupP = new Map([[typingc, 3]]);
      if (groupP.size == 2038793) {
         break;
      }
   } while ((2.79 == (parseFloat(`${groupP.size}`) / (Math.max(5, flyerX))) || (4 << (Math.min(4, Math.abs(groupP.size)))) == 1) && (groupP.size == 2038793));

  ATBannerEventEmitter.removeAllListeners(onBannerLoaded);
   do {
       let verticalC = 4.0;
          let long_0K = String.fromCharCode(103,95,52,57,95,109,102,113,101,0);
          let humidity9 = String.fromCharCode(110,101,116,101,114,114,110,111,95,113,95,53,53,0);
         verticalC *= parseInt(`${verticalC}`);
         long_0K = `${long_0K.length}`;
         humidity9 += "2";
       let refresh7 = 4.0;
       let pageH = 1.0;
       let homea = String.fromCharCode(99,116,97,98,108,101,115,95,53,95,57,56,0);
      agreementn = new Map([[`${temph.size}`, groupP.size / (Math.max(temph.size, 3))]]);
      if (agreementn.size == 1521032) {
         break;
      }
   } while ((agreementn.size == 1521032) && (agreementn.size <= parseInt(`${previewQ}`)));
      temph[`${flyerX}`] = 2;
      groupP = new Map([[`${half8.length}`, half8.length]]);
   do {
      previewQ -= temph.size % (Math.max(3, 10));
      if (897478.0 == previewQ) {
         break;
      }
   } while ((897478.0 == previewQ) && (3 <= (typingc.length / (Math.max(1, 4)))));

  ATBannerEventEmitter.removeAllListeners(onBannerFail);
       let crown3 = String.fromCharCode(117,110,108,111,97,100,95,57,95,54,57,0);
         crown3 = `${3 | crown3.length}`;
       let floater7 = String.fromCharCode(101,95,51,53,95,105,110,116,101,110,115,105,116,121,0);
       let awayO = String.fromCharCode(102,95,49,57,95,109,101,116,97,100,97,116,97,115,101,116,0);
      do {
         crown3 = `${crown3.length & awayO.length}`;
         if (String.fromCharCode(102,100,113,101,105,49,105,122,0) == crown3) {
            break;
         }
      } while ((crown3.endsWith(`${floater7.length}`)) && (String.fromCharCode(102,100,113,101,105,49,105,122,0) == crown3));
      temph[`${resendD}`] = 1;
   do {
      source5 = `${temph.size}`;
      if (1023212 == source5.length) {
         break;
      }
   } while ((1023212 == source5.length) && (parseInt(`${previewQ}`) == source5.length));
      referrerG = `${parseInt(`${flyerX}`)}`;
   for (let v = 0; v < 2; v++) {
       let circleA = 4.0;
       let ewarded6 = false;
       let refreshu = true;
          let data4 = String.fromCharCode(102,108,111,97,116,115,104,111,114,116,95,102,95,57,56,0);
          let anytimer = 0.0;
          let topicy = 4.0;
         ewarded6 = String.fromCharCode(120,0) == data4;
         data4 = `${parseInt(`${anytimer}`)}`;
         topicy /= Math.max(parseFloat(`${2}`), 5);
         circleA += ((refreshu ? 1 : 1) * parseInt(`${circleA}`));
          let telegramM = 3.0;
          let predictionO = 5.0;
         circleA += parseInt(`${circleA}`) - parseInt(`${telegramM}`);
         telegramM += parseFloat(`${parseInt(`${predictionO}`)}`);
      for (let a = 0; a < 2; a++) {
         circleA += (parseInt(`${circleA}`) ^ (ewarded6 ? 2 : 1));
      }
          let expandB = [461, 790, 167];
          let downloading4 = [544, 872];
         refreshu = (1 > ((!refreshu ? expandB.length : 1) * expandB.length));
         downloading4.push(downloading4.length);
      do {
         circleA -= ((ewarded6 ? 5 : 2) & 3);
         if (292110.0 == circleA) {
            break;
         }
      } while ((292110.0 == circleA) && (1.54 <= circleA));
      if (!ewarded6) {
          let uploads = String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,95,103,95,56,55,0);
         ewarded6 = refreshu;
         uploads = `${uploads.length - uploads.length}`;
      }
         ewarded6 = (ewarded6 ? !refreshu : ewarded6);
          let internetg = String.fromCharCode(105,110,111,100,101,115,95,116,95,56,52,0);
         ewarded6 = String.fromCharCode(99,0) == internetg;
      resendD /= Math.max(1, parseInt(`${matchF}`));
   }

  ATBannerEventEmitter.removeAllListeners(onBannerCloseButtonTapped);
   do {
      agreementn = new Map([[typingc, 3 | parseInt(`${flyerX}`)]]);
      if (654645 == agreementn.size) {
         break;
      }
   } while ((3 == agreementn.size) && (654645 == agreementn.size));
   do {
      agreementn = new Map([[renewV, (renewV == String.fromCharCode(112,0) ? renewV.length : resendD)]]);
      if (agreementn.size == 2360999) {
         break;
      }
   } while ((agreementn.size == 2360999) && (4 <= (agreementn.size & resendD) && (4 & agreementn.size) <= 5));
   for (let s = 0; s < 2; s++) {
      flyerX *= parseFloat(`${temph.size % (Math.max(typingc.length, 9))}`);
   }
   while ((3.41 / (Math.max(7, matchF))) > 2.11 || (matchF / (Math.max(4, groupP.size))) > 3.41) {
       let stations9 = String.fromCharCode(102,95,49,57,95,120,109,117,108,116,105,112,108,101,0);
      do {
          let schedule5 = 3.0;
          let pauseG = 5.0;
          let mathn = 2;
         stations9 += `${(stations9 == String.fromCharCode(103,0) ? stations9.length : mathn)}`;
         schedule5 /= Math.max(5, parseFloat(`${parseInt(`${pauseG}`)}`));
         pauseG *= parseFloat(`${parseInt(`${schedule5}`)}`);
         mathn -= parseInt(`${schedule5}`);
         if (3954575 == stations9.length) {
            break;
         }
      } while ((5 == stations9.length) && (3954575 == stations9.length));
         stations9 = `${stations9.length}`;
       let description_oeK = String.fromCharCode(102,114,101,101,112,97,100,100,114,115,95,107,95,56,51,0);
      groupP[typingc] = renewV.length >> (Math.min(typingc.length, 5));
      break;
   }

  ATBannerEventEmitter.removeAllListeners(onBannerClick);
   do {
      sources = [(String.fromCharCode(98,0) == referrerG ? referrerG.length : parseInt(`${previewQ}`))];
      if (sources.length == 2510354) {
         break;
      }
   } while (((temph.size << (Math.min(Math.abs(2), 4))) < 3 || (2 << (Math.min(2, Math.abs(temph.size)))) < 1) && (sources.length == 2510354));
      groupP = new Map([[`${sources.length}`, sources.length]]);
   if ((sources.length * previewQ) > 3.73 || (1 % (Math.max(7, sources.length))) > 4) {
       let modeR = 5.0;
         modeR /= Math.max(parseFloat(`${parseInt(`${modeR}`) * parseInt(`${modeR}`)}`), 2);
      for (let c = 0; c < 2; c++) {
         modeR /= Math.max(4, parseFloat(`${parseInt(`${modeR}`)}`));
      }
      do {
          let carouselc = false;
         modeR += (parseFloat(`${parseInt(`${modeR}`) - (carouselc ? 1 : 4)}`));
         if (modeR == 1659374.0) {
            break;
         }
      } while ((modeR == 1659374.0) && (3.90 <= (modeR / 1.6) || (1.6 * modeR) <= 5.17));
      previewQ /= Math.max(3, groupP.size);
   }
       let shootI = String.fromCharCode(99,111,110,103,95,100,95,50,51,0);
         shootI = `${1 & shootI.length}`;
       let j_titlen = true;
       let greenN = true;
         j_titlen = j_titlen || shootI.length == 95;
      matchF *= (String.fromCharCode(115,0) == referrerG ? referrerG.length : temph.size);

  ATBannerEventEmitter.removeAllListeners(onBannerShow);
      previewQ += parseInt(`${flyerX}`) >> (Math.min(Math.abs(parseInt(`${previewQ}`)), 3));
   if (4.29 == (previewQ / 2.96)) {
      previewQ -= renewV.length / (Math.max(3, 9));
   }
   for (let o = 0; o < 2; o++) {
       let sellr = String.fromCharCode(99,104,97,114,97,99,116,101,114,95,108,95,57,57,0);
       let watchL = 1;
          let context9 = String.fromCharCode(112,95,55,50,95,100,101,108,97,121,101,100,0);
         sellr += `${(String.fromCharCode(69,0) == context9 ? context9.length : watchL)}`;
         watchL /= Math.max(3, watchL);
      for (let m = 0; m < 1; m++) {
          let interstitialY = String.fromCharCode(109,105,120,105,110,95,99,95,57,57,0);
         watchL ^= 2;
         interstitialY = `${interstitialY.length & 2}`;
      }
      if ((sellr.length / 1) <= 1 && (watchL / 1) <= 2) {
         sellr = `${watchL / (Math.max(3, 1))}`;
      }
      if ((5 & watchL) < 5) {
         sellr += `${2 >> (Math.min(2, sellr.length))}`;
      }
      if (1 > (sellr.length >> (Math.min(Math.abs(3), 3))) || (watchL >> (Math.min(sellr.length, 3))) > 3) {
         sellr = `${sellr.length}`;
      }
      resendD /= Math.max(1, 1);
   }
      half8.push(1);

  ATBannerEventEmitter.removeAllListeners(onBannerRefresh);
       let promotionb = String.fromCharCode(105,110,115,101,114,116,105,111,110,115,95,100,95,57,54,0);
       let championh = String.fromCharCode(100,99,97,100,101,99,95,101,95,55,0);
       let hongkongE = String.fromCharCode(115,95,50,95,114,101,115,112,0);
      for (let c = 0; c < 2; c++) {
         hongkongE = `${championh.length}`;
      }
          let typesK = 5;
          let untick0 = new Map([[String.fromCharCode(97,120,105,115,95,116,95,52,57,0),30], [String.fromCharCode(110,95,53,57,95,100,105,114,0),372]]);
         hongkongE = `${untick0.size >> (Math.min(1, Math.abs(typesK)))}`;
      while (promotionb != String.fromCharCode(83,0)) {
         championh = `${championh.length}`;
         break;
      }
          let editG = 3;
         hongkongE = `${(championh == String.fromCharCode(85,0) ? hongkongE.length : championh.length)}`;
         editG += editG ^ 3;
      do {
          let stationsk = new Map([[String.fromCharCode(114,101,97,100,108,110,95,107,95,49,57,0),String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,95,109,95,57,55,0)], [String.fromCharCode(108,95,51,95,99,108,111,115,101,115,116,0),String.fromCharCode(109,112,105,98,110,95,55,95,52,55,0)]]);
          let viewern = String.fromCharCode(122,95,54,54,95,115,104,101,108,108,0);
          let whistleb = String.fromCharCode(107,95,56,55,95,112,114,101,104,97,115,104,0);
          let xvodW = true;
         championh = `${3 | stationsk.size}`;
         stationsk[`${xvodW}`] = viewern.length;
         viewern = `${viewern.length / (Math.max(whistleb.length, 4))}`;
         whistleb += `${whistleb.length}`;
         if (1096862 == championh.length) {
            break;
         }
      } while ((1096862 == championh.length) && (hongkongE != String.fromCharCode(85,0)));
         championh = `${3 >> (Math.min(4, hongkongE.length))}`;
         promotionb = `${promotionb.length / (Math.max(2, 3))}`;
       let telegrams = 4;
       let telegramsf = 3;
      do {
         telegrams /= Math.max(3 + hongkongE.length, 2);
         if (2748549 == telegrams) {
            break;
         }
      } while ((2748549 == telegrams) && (1 >= promotionb.length));
      temph[referrerG] = 3 - referrerG.length;
      groupP[referrerG] = 3;
      auto_e1 += `${source5.length}`;
   while (1 < resendD) {
      resendD %= Math.max(5, source5.length << (Math.min(Math.abs(2), 2)));
      break;
   }

  ATBannerEventEmitter.removeAllListeners(onBannerRefreshFail);
      resendD /= Math.max(temph.size * 1, 2);
   if (parseInt(`${matchF}`) >= typingc.length) {
       let middlewareZ = String.fromCharCode(116,95,53,56,95,101,99,114,101,116,0);
       let componentc = String.fromCharCode(113,117,101,117,101,95,111,95,50,57,0);
         middlewareZ = `${1 | componentc.length}`;
         componentc += `${(middlewareZ == String.fromCharCode(103,0) ? componentc.length : middlewareZ.length)}`;
       let sansZ = new Map([[String.fromCharCode(116,105,101,114,115,95,51,95,51,50,0),675], [String.fromCharCode(102,105,110,100,97,115,115,111,99,95,50,95,49,48,0),714]]);
       let bellx = new Map([[String.fromCharCode(99,104,111,115,101,110,95,99,95,57,55,0),true ], [String.fromCharCode(99,100,97,116,101,95,48,95,50,54,0),true ]]);
          let reducerZ = 2.0;
          let complete9 = String.fromCharCode(121,95,53,95,109,101,115,97,103,101,115,0);
          let whatsapps = 4.0;
         componentc = `${3 ^ bellx.size}`;
         reducerZ += parseFloat(`${parseInt(`${reducerZ}`)}`);
         complete9 += `${complete9.length}`;
         whatsapps *= 2;
         componentc = `${middlewareZ.length / 1}`;
      for (let y = 0; y < 2; y++) {
         sansZ = new Map([[`${bellx.size}`, 1]]);
      }
      typingc += "2";
   }
      typingc = `${sources.length}`;
   if (2 >= renewV.length && typingc != String.fromCharCode(118,0)) {
       let time_6hi = 5;
       let calendari = 5;
      while ((1 * calendari) > 5) {
          let shrinkA = String.fromCharCode(102,95,57,53,95,119,101,98,0);
          let logos = String.fromCharCode(109,95,51,50,95,98,114,105,100,103,101,100,0);
         calendari |= logos.length;
         shrinkA += `${shrinkA.length << (Math.min(4, shrinkA.length))}`;
         logos = `${shrinkA.length + 2}`;
         break;
      }
      for (let a = 0; a < 1; a++) {
         time_6hi /= Math.max(3, 1);
      }
          let historyO = 2.0;
         calendari += calendari;
         historyO *= parseInt(`${historyO}`) ^ parseInt(`${historyO}`);
          let foundE = 1.0;
          let lightr = [259, 304];
          let tickedP = String.fromCharCode(105,110,105,116,101,110,99,95,57,95,51,0);
         time_6hi += parseInt(`${foundE}`) ^ time_6hi;
         foundE *= lightr.length << (Math.min(tickedP.length, 5));
         lightr.push(lightr.length);
         tickedP += `${2 + tickedP.length}`;
      if ((time_6hi ^ calendari) <= 1) {
          let incidentO = 3;
         calendari += incidentO;
      }
      for (let c = 0; c < 1; c++) {
         time_6hi &= calendari;
      }
      typingc += `${parseInt(`${previewQ}`) | resendD}`;
   }

}

function createLoadAdSize(width, height) {
       let preview0 = String.fromCharCode(100,101,108,97,121,115,95,54,95,54,50,0);
    let smallN = 5.0;
    let liveI = String.fromCharCode(108,105,109,105,116,95,122,95,53,52,0);
    let logoutT = String.fromCharCode(112,97,115,116,95,54,95,52,56,0);
    let google6 = 1;
    let progressW = String.fromCharCode(118,112,100,97,116,97,95,107,95,55,48,0);
    let unselected4 = [String.fromCharCode(99,110,111,110,99,101,95,50,95,56,53,0), String.fromCharCode(120,95,55,49,95,97,100,100,101,100,0)];
    let useri = 2.0;
      logoutT = "2 + google6";
   do {
      liveI += "1";
      if (liveI == String.fromCharCode(105,102,108,102,0)) {
         break;
      }
   } while ((liveI == String.fromCharCode(105,102,108,102,0)) && (progressW != liveI));
       let viewerp = String.fromCharCode(115,105,103,110,95,118,95,56,0);
       let entry1 = String.fromCharCode(112,95,50,48,95,115,116,97,116,101,112,0);
       let setting1 = true;
      while (entry1 == String.fromCharCode(105,0) || viewerp.length <= 3) {
         viewerp = `${((setting1 ? 3 : 4))}`;
         break;
      }
      for (let m = 0; m < 3; m++) {
         entry1 += `${entry1.length - 2}`;
      }
      if (5 <= viewerp.length) {
         setting1 = ((viewerp.length ^ (setting1 ? 27 : viewerp.length)) < 27);
      }
      while (setting1) {
         setting1 = viewerp.length < 80;
         break;
      }
       let sourcez = new Map([[String.fromCharCode(102,95,57,49,95,99,111,110,103,101,115,116,105,111,110,0),false ], [String.fromCharCode(104,111,108,100,115,95,54,95,51,53,0),true ], [String.fromCharCode(111,117,116,112,117,116,115,95,102,95,56,57,0),false ]]);
      for (let d = 0; d < 2; d++) {
         sourcez[viewerp] = 2 / (Math.max(2, sourcez.size));
      }
      do {
          let reportt = String.fromCharCode(100,95,56,50,95,110,112,114,111,98,101,0);
         sourcez[viewerp] = viewerp.length;
         reportt += `${reportt.length / (Math.max(7, reportt.length))}`;
         if (3811515 == sourcez.size) {
            break;
         }
      } while ((3811515 == sourcez.size) && (!viewerp.includes(`${sourcez.size}`)));
       let formI = 3.0;
       let linen = 3.0;
       let o_countS = new Map([[String.fromCharCode(117,116,102,108,101,110,95,121,95,49,52,0),true ], [String.fromCharCode(112,95,52,50,95,109,117,114,109,117,114,0),false ]]);
      liveI += `${((setting1 ? 3 : 4) >> (Math.min(Math.abs(2), 3)))}`;
   if (4 >= logoutT.length) {
      liveI += "1";
   }

    var loadAdSize = {};
      progressW += `${unselected4.length * 1}`;
       let sportsH = 0.0;
       let humidityW = 0;
      while ((parseFloat(`${humidityW}`) + sportsH) < 1.15 && (sportsH + parseFloat(`${humidityW}`)) < 1.15) {
         humidityW *= 2 / (Math.max(parseInt(`${sportsH}`), 2));
         break;
      }
      if (2.99 == (sportsH - humidityW)) {
          let photoY = String.fromCharCode(120,95,57,48,95,112,114,105,111,114,0);
         humidityW -= photoY.length - 3;
      }
         sportsH += parseFloat(`${humidityW - parseInt(`${sportsH}`)}`);
      for (let j = 0; j < 3; j++) {
         sportsH += parseFloat(`${3 * humidityW}`);
      }
      if (sportsH == humidityW) {
          let private_xl = 5.0;
         sportsH += parseFloat(`${3 % (Math.max(parseInt(`${sportsH}`), 10))}`);
         private_xl += 2;
      }
          let inactivek = String.fromCharCode(110,95,55,53,95,117,118,108,99,0);
         sportsH += parseFloat(`${humidityW % (Math.max(10, inactivek.length))}`);
      unselected4.push(humidityW);
       let updatesl = String.fromCharCode(99,108,117,98,95,52,95,50,48,0);
      do {
         updatesl += `${updatesl.length}`;
         if (updatesl == String.fromCharCode(116,122,107,0)) {
            break;
         }
      } while ((updatesl == String.fromCharCode(116,122,107,0)) && (updatesl.includes(updatesl)));
      while (updatesl != String.fromCharCode(65,0) && updatesl.length == 3) {
         updatesl += `${(updatesl == String.fromCharCode(95,0) ? updatesl.length : updatesl.length)}`;
         break;
      }
         updatesl = "2";
      progressW = "2";
      preview0 += `${liveI.length & 2}`;

    loadAdSize["width"] = width;
      liveI = "2";
   if ((preview0.length >> (Math.min(Math.abs(2), 1))) == 3) {
       let singaporeb = 3.0;
       let suggestiong = 3.0;
       let volumeU = 1;
       let searchR = new Map([[String.fromCharCode(101,113,117,105,118,97,108,101,110,116,95,99,95,56,52,0),417], [String.fromCharCode(104,95,52,48,95,98,111,117,110,100,105,110,103,0),656]]);
       let result2 = 0.0;
          let middleU = 2.0;
         volumeU &= 1;
         middleU += parseFloat(`${parseInt(`${middleU}`) | 3}`);
         suggestiong /= Math.max(searchR.size * 1, 2);
         singaporeb /= Math.max(1, parseFloat(`${parseInt(`${suggestiong}`)}`));
         suggestiong *= parseInt(`${singaporeb}`) + 1;
      for (let d = 0; d < 2; d++) {
          let vietnam9 = String.fromCharCode(119,95,49,51,95,115,111,109,101,0);
          let heartb = new Map([[String.fromCharCode(115,98,103,112,95,104,95,51,54,0),191], [String.fromCharCode(112,114,111,112,115,95,120,95,54,49,0),694], [String.fromCharCode(106,95,55,56,0),366]]);
          let empty8 = 2.0;
         searchR[`${empty8}`] = parseInt(`${result2}`);
         vietnam9 = `${heartb.size % 3}`;
         heartb = new Map([[`${heartb.size}`, 2]]);
         empty8 *= (String.fromCharCode(51,0) == vietnam9 ? vietnam9.length : heartb.size);
      }
         singaporeb *= parseFloat(`${2 - parseInt(`${result2}`)}`);
      for (let t = 0; t < 1; t++) {
         result2 += 2 * volumeU;
      }
          let moonQ = 2;
          let p_positionU = [984, 19, 602];
          let gemfileT = [314, 337];
         volumeU >>= Math.min(5, Math.abs(1));
         moonQ |= p_positionU.length;
         p_positionU = [gemfileT.length * moonQ];
         gemfileT.push(2);
         suggestiong += volumeU;
      if (searchR[`${result2}`] != null) {
          let hejiW = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,101,110,99,95,119,95,57,57,0);
          let phoneu = 1.0;
          let controlsg = true;
          let ajaxO = 4.0;
          let screenY = String.fromCharCode(99,111,110,115,117,109,101,95,105,95,56,48,0);
         searchR[`${singaporeb}`] = 3;
         hejiW += `${parseInt(`${phoneu}`)}`;
         controlsg = !controlsg;
         ajaxO /= Math.max(parseFloat(`${parseInt(`${ajaxO}`) & 2}`), 1);
         screenY += `${parseInt(`${ajaxO}`)}`;
      }
       let zhengpianR = String.fromCharCode(118,112,99,99,95,51,95,49,56,0);
       let bannere = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,95,115,95,53,54,0);
      do {
         volumeU += (String.fromCharCode(95,0) == zhengpianR ? zhengpianR.length : searchR.size);
         if (3610130 == volumeU) {
            break;
         }
      } while (((singaporeb / (Math.max(3.55, 5))) == 2.20 && (1 - volumeU) == 5) && (3610130 == volumeU));
         suggestiong *= parseInt(`${singaporeb}`);
      if ((5.54 / (Math.max(10, result2))) <= 3.70) {
          let watchN = true;
          let streamingx = String.fromCharCode(117,112,100,97,116,101,95,119,95,49,56,0);
         zhengpianR = `${streamingx.length}`;
         watchN = !watchN;
         streamingx = "2";
      }
      do {
         bannere += `${zhengpianR.length ^ bannere.length}`;
         if (bannere.length == 2782759) {
            break;
         }
      } while ((zhengpianR.endsWith(`${bannere.length}`)) && (bannere.length == 2782759));
      preview0 = `${google6 ^ 3}`;
   }
      smallN /= Math.max(1, 3);
      progressW += `${logoutT.length + google6}`;

    loadAdSize["height"] = height;
      unselected4 = [preview0.length];
   for (let r = 0; r < 3; r++) {
      preview0 += `${(String.fromCharCode(98,0) == progressW ? logoutT.length : progressW.length)}`;
   }
   for (let j = 0; j < 2; j++) {
      liveI += `${liveI.length | 3}`;
   }
   while (4 == (google6 | 1) && 1 == (progressW.length | google6)) {
      progressW += `${2 >> (Math.min(2, progressW.length))}`;
      break;
   }

    return loadAdSize;
      liveI += `${preview0.length}`;
   for (let u = 0; u < 1; u++) {
       let nativeK = [String.fromCharCode(119,114,106,112,103,99,111,109,95,99,95,56,56,0), String.fromCharCode(97,97,99,112,115,121,95,110,95,56,0)];
         nativeK = [nativeK.length - nativeK.length];
      do {
          let catagoryI = 3.0;
          let downloadK = [554, 947, 713];
          let placeholderD = String.fromCharCode(117,95,48,95,99,114,111,115,115,112,111,115,116,0);
          let tickedv = 3.0;
         nativeK = [nativeK.length % 2];
         catagoryI *= downloadK.length;
         downloadK.push(1);
         placeholderD += `${3 & placeholderD.length}`;
         tickedv += (parseFloat(`${placeholderD == String.fromCharCode(52,0) ? placeholderD.length : downloadK.length}`));
         if (3916891 == nativeK.length) {
            break;
         }
      } while ((3916891 == nativeK.length) && (nativeK.length < nativeK.length));
      if (1 < (nativeK.length / 2)) {
         nativeK = [nativeK.length + nativeK.length];
      }
      logoutT = `${preview0.length}`;
   }
   for (let d = 0; d < 3; d++) {
       let untickn = new Map([[String.fromCharCode(114,101,97,100,113,95,118,95,53,56,0),470], [String.fromCharCode(118,105,101,119,112,111,114,116,95,119,95,56,50,0),89], [String.fromCharCode(111,95,52,52,95,119,114,97,112,100,101,116,101,99,116,0),584]]);
         untickn = new Map([[`${untickn.size}`, 3]]);
      do {
         untickn = new Map([[`${untickn.size}`, 2 + untickn.size]]);
         if (3999940 == untickn.size) {
            break;
         }
      } while ((!Array.from(untickn.keys()).includes(`${untickn.size}`)) && (3999940 == untickn.size));
      while (4 < (untickn.size << (Math.min(4, Math.abs(untickn.size)))) || (untickn.size << (Math.min(Math.abs(4), 2))) < 1) {
         untickn[`${untickn.size}`] = untickn.size;
         break;
      }
      preview0 = `${logoutT.length << (Math.min(Math.abs(1), 1))}`;
   }
      logoutT = `${logoutT.length ^ unselected4.length}`;

}

function createShowAdRect(x, y, width, height) {
       let tooltipsC = 4.0;
    let annerd = true;
    let closea = 3.0;
    let bell6 = false;
    let rankM = 3;
    let successp = true;
    let auto_l5 = String.fromCharCode(107,95,51,54,0);
    let guideM = 2;
    let footballB = String.fromCharCode(111,95,55,57,95,114,101,97,100,98,121,116,101,0);
    let streamingc = new Map([[String.fromCharCode(100,95,52,53,95,100,105,115,99,114,105,109,105,110,97,116,111,114,0),111], [String.fromCharCode(116,101,120,101,108,95,119,95,56,51,0),590]]);
    let playO = 4.0;
    let hover4 = 4;
    let suggestionk = 2;
    let heart1 = new Map([[String.fromCharCode(122,95,53,49,95,116,114,117,115,116,0),888], [String.fromCharCode(98,95,53,56,95,110,100,111,116,115,0),792]]);
    let indexQ = [629, 871, 364];
   if (tooltipsC > 5.69) {
      tooltipsC += auto_l5.length >> (Math.min(Math.abs(1), 2));
   }
   if ((4.54 * tooltipsC) < 4.18 || (4.54 * closea) < 4.37) {
      tooltipsC -= ((successp ? 2 : 5));
   }
   if (1 >= (streamingc.size << (Math.min(footballB.length, 2)))) {
       let infoc = String.fromCharCode(103,95,54,55,95,116,97,103,115,0);
       let right7 = 1;
       let changeJ = String.fromCharCode(111,112,116,103,114,111,117,112,95,120,95,54,51,0);
      while (infoc.length >= 5) {
         infoc += `${right7 - 1}`;
         break;
      }
      do {
          let matchT = 0.0;
          let tooltipsI = [286, 56];
          let expiredq = 4.0;
         right7 ^= parseInt(`${matchT}`);
         tooltipsI = [1];
         expiredq *= 3;
         if (2059394 == right7) {
            break;
         }
      } while ((2059394 == right7) && ((right7 / (Math.max(10, infoc.length))) < 3 || (right7 / 3) < 2));
      for (let z = 0; z < 2; z++) {
         infoc += `${infoc.length}`;
      }
      while (4 < (infoc.length >> (Math.min(Math.abs(5), 3))) && (5 >> (Math.min(3, infoc.length))) < 1) {
          let promotionZ = String.fromCharCode(103,101,110,101,114,97,103,101,95,102,95,55,49,0);
          let inviteS = 3.0;
          let window_4Z = 4.0;
         infoc += "2";
         promotionZ += `${parseInt(`${window_4Z}`)}`;
         inviteS /= Math.max(4, parseFloat(`${promotionZ.length / 1}`));
         break;
      }
          let anythink1 = [92, 268, 615];
         infoc = `${right7}`;
         anythink1.push(anythink1.length);
      if (3 >= (4 + changeJ.length)) {
          let reportz = 2.0;
          let googleN = String.fromCharCode(110,95,51,53,95,102,105,114,115,116,112,97,115,115,0);
         right7 ^= (String.fromCharCode(87,0) == changeJ ? right7 : changeJ.length);
         reportz *= googleN.length;
         googleN = `${(String.fromCharCode(100,0) == googleN ? googleN.length : parseInt(`${reportz}`))}`;
      }
         changeJ = `${infoc.length - changeJ.length}`;
      while (3 == (infoc.length ^ right7)) {
          let sentryq = 3.0;
          let pingq = String.fromCharCode(112,114,111,100,117,99,116,95,51,95,49,52,0);
          let signinupk = String.fromCharCode(100,105,103,101,115,116,95,119,95,52,55,0);
          let gesturesI = String.fromCharCode(108,105,115,116,95,57,95,49,50,0);
         infoc = `${(pingq == String.fromCharCode(117,0) ? pingq.length : parseInt(`${sentryq}`))}`;
         sentryq /= Math.max((parseFloat(`${signinupk == String.fromCharCode(71,0) ? signinupk.length : gesturesI.length}`)), 3);
         gesturesI += `${(String.fromCharCode(89,0) == signinupk ? gesturesI.length : signinupk.length)}`;
         break;
      }
      while (3 == infoc.length) {
         infoc += `${changeJ.length - 1}`;
         break;
      }
      streamingc = new Map([[`${playO}`, 3 ^ parseInt(`${playO}`)]]);
   }
      annerd = (guideM - playO) == 13;

    var adRect = {};
       let searchf = true;
       let incidentQ = String.fromCharCode(104,95,52,55,95,108,111,99,97,116,105,111,110,0);
      do {
         incidentQ = `${1 + incidentQ.length}`;
         if (incidentQ.length == 4369705) {
            break;
         }
      } while ((incidentQ.length == 4369705) && (1 >= incidentQ.length));
       let backwardH = new Map([[String.fromCharCode(101,110,113,117,101,117,101,100,95,112,95,49,55,0),String.fromCharCode(98,108,117,114,97,121,95,113,95,50,0)], [String.fromCharCode(111,95,51,55,95,107,110,111,98,0),String.fromCharCode(120,95,51,49,95,115,116,105,112,112,101,100,0)]]);
       let q_imagec = new Map([[String.fromCharCode(115,95,53,53,95,99,100,102,116,0),String.fromCharCode(119,95,57,48,95,97,100,97,112,116,101,114,115,0)], [String.fromCharCode(101,98,109,108,95,49,95,50,57,0),String.fromCharCode(100,105,114,97,99,100,115,112,95,114,95,53,55,0)]]);
         incidentQ = `${((searchf ? 3 : 4) / 2)}`;
          let backwardu = String.fromCharCode(107,95,49,48,95,112,111,119,101,114,101,100,0);
         backwardH[backwardu] = backwardu.length;
       let selln = String.fromCharCode(99,95,50,50,0);
       let targetK = String.fromCharCode(117,95,53,48,95,116,119,105,110,118,113,0);
          let albumW = false;
         incidentQ = "2";
         albumW = (albumW ? !albumW : albumW);
      annerd = 38 < rankM || guideM < 38;
   do {
      successp = footballB == auto_l5;
      if (successp ? !successp : successp) {
         break;
      }
   } while ((!annerd) && (successp ? !successp : successp));
   do {
      auto_l5 = `${1 >> (Math.min(Math.abs(rankM), 1))}`;
      if (auto_l5.length == 1550004) {
         break;
      }
   } while ((!annerd) && (auto_l5.length == 1550004));
   while (4 >= (auto_l5.length + streamingc.size) || (streamingc.size + 4) >= 5) {
      auto_l5 += `${guideM}`;
      break;
   }

    adRect["x"] = x;
   for (let j = 0; j < 2; j++) {
      closea *= rankM / 1;
   }
      tooltipsC *= 3 - rankM;
   do {
      streamingc[`${hover4}`] = hover4 >> (Math.min(Math.abs(parseInt(`${closea}`)), 5));
      if (1924117 == streamingc.size) {
         break;
      }
   } while ((1924117 == streamingc.size) && (4 >= (rankM + streamingc.size) && (4 + rankM) >= 4));
   for (let z = 0; z < 2; z++) {
      successp = hover4 <= 84;
   }

    adRect["y"] = y;
   while (3 > (5 * hover4) && (hover4 * auto_l5.length) > 5) {
      hover4 += parseInt(`${tooltipsC}`) / 2;
      break;
   }
   while ((tooltipsC - 1.65) >= 5.56) {
      successp = closea >= tooltipsC;
      break;
   }
   do {
      footballB = `${2 | guideM}`;
      if (footballB.length == 4438683) {
         break;
      }
   } while ((!footballB.endsWith(`${guideM}`)) && (footballB.length == 4438683));
       let currentf = String.fromCharCode(109,101,114,103,101,95,118,95,53,48,0);
      do {
          let floatingx = 3;
          let submit0 = String.fromCharCode(102,95,57,53,95,117,110,112,114,111,99,101,115,115,101,100,0);
         currentf += "3";
         floatingx |= floatingx;
         submit0 = `${3 << (Math.min(4, Math.abs(floatingx)))}`;
         if (String.fromCharCode(105,110,102,105,111,111,0) == currentf) {
            break;
         }
      } while ((currentf.length == 4) && (String.fromCharCode(105,110,102,105,111,111,0) == currentf));
       let modityD = [String.fromCharCode(103,111,108,111,109,98,95,121,95,55,48,0), String.fromCharCode(117,114,112,111,115,101,95,104,95,49,48,48,0), String.fromCharCode(120,95,50,51,95,101,99,114,101,116,0)];
       let playlist6 = [999, 420];
      if (currentf.length < 3) {
          let interstitialI = false;
         modityD.push(((interstitialI ? 3 : 1) << (Math.min(modityD.length, 5))));
      }
      footballB = `${((bell6 ? 4 : 3) >> (Math.min(Math.abs(streamingc.size), 2)))}`;

    adRect["width"] = width;
   for (let f = 0; f < 3; f++) {
      streamingc[`${playO}`] = 2 >> (Math.min(Math.abs(parseInt(`${playO}`)), 3));
   }
      auto_l5 += "2";
      footballB = `${auto_l5.length}`;
   while (closea >= 3.23) {
      closea += parseInt(`${playO}`) ^ 1;
      break;
   }

    adRect["height"] = height;
      annerd = !annerd;
   if (rankM >= auto_l5.length) {
      auto_l5 += `${((bell6 ? 4 : 2) * parseInt(`${tooltipsC}`))}`;
   }
   while (2.99 == playO) {
      playO /= Math.max(4, parseInt(`${tooltipsC}`));
      break;
   }
       let referrerk = [716, 154, 176];
       let previewN = new Map([[String.fromCharCode(112,95,56,51,95,115,101,99,111,110,100,97,114,121,0),716], [String.fromCharCode(114,101,100,118,95,115,95,51,50,0),7]]);
       let leaguei = String.fromCharCode(116,95,56,57,95,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
      while (2 < (leaguei.length << (Math.min(Math.abs(1), 5)))) {
         leaguei += `${leaguei.length << (Math.min(Math.abs(3), 2))}`;
         break;
      }
      for (let o = 0; o < 1; o++) {
         previewN[`${leaguei}`] = previewN.size + 3;
      }
         leaguei += `${leaguei.length}`;
          let disconnected_ = 1;
          let phone2 = [874, 197, 226];
         leaguei = `${leaguei.length}`;
         disconnected_ >>= Math.min(Math.abs(disconnected_ + 3), 4);
         phone2.push(disconnected_);
          let spinnero = 4.0;
          let injuryd = 4.0;
          let verticalA = new Map([[String.fromCharCode(118,97,114,105,97,110,116,95,109,95,54,49,0),669], [String.fromCharCode(115,104,111,114,116,101,114,95,116,95,50,55,0),179], [String.fromCharCode(111,95,54,53,95,115,101,110,100,109,98,117,102,0),669]]);
         referrerk.push(3);
         spinnero += parseFloat(`${parseInt(`${injuryd}`) + verticalA.size}`);
         injuryd *= parseFloat(`${parseInt(`${injuryd}`) / 1}`);
         verticalA[`${injuryd}`] = parseInt(`${injuryd}`) + parseInt(`${spinnero}`);
          let anytimeH = String.fromCharCode(99,95,56,55,95,105,110,116,101,114,112,111,108,97,116,105,111,110,0);
          let checkbox0 = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,53,95,51,51,0);
          let transferR = [906, 317, 89];
         leaguei += `${checkbox0.length ^ transferR.length}`;
         anytimeH += `${anytimeH.length}`;
         checkbox0 = `${anytimeH.length >> (Math.min(Math.abs(3), 4))}`;
      do {
          let aboute = String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,115,95,103,95,56,50,0);
          let benefit2 = 0.0;
          let emoji7 = String.fromCharCode(119,95,51,57,95,115,117,98,116,114,97,99,116,109,111,100,0);
         previewN = new Map([[`${previewN.size}`, leaguei.length]]);
         aboute += `${emoji7.length + aboute.length}`;
         benefit2 -= parseFloat(`${parseInt(`${benefit2}`)}`);
         emoji7 = "2";
         if (previewN.size == 630598) {
            break;
         }
      } while ((!leaguei.endsWith(`${previewN.size}`)) && (previewN.size == 630598));
          let humidityP = String.fromCharCode(122,95,48,95,119,117,110,100,101,102,0);
          let homeF = 3.0;
          let buttonk = [373, 560, 899];
         referrerk = [3];
         humidityP += `${2 & buttonk.length}`;
         homeF *= buttonk.length << (Math.min(Math.abs(3), 1));
      if (1 < (leaguei.length * referrerk.length) && 1 < (leaguei.length * referrerk.length)) {
         referrerk.push(referrerk.length ^ 1);
      }
      playO /= Math.max(3, 1);

    return adRect;
   for (let t = 0; t < 2; t++) {
       let incidents = [String.fromCharCode(116,102,114,97,95,113,95,49,49,0), String.fromCharCode(116,95,54,52,95,112,97,121,109,97,115,116,101,114,0), String.fromCharCode(122,95,54,50,95,118,112,111,105,110,116,0)];
          let dropdowny = 3;
          let predictionh = String.fromCharCode(109,95,54,55,95,101,110,100,0);
         incidents = [2];
         dropdowny >>= Math.min(Math.abs(predictionh.length % 1), 4);
         predictionh += `${predictionh.length << (Math.min(Math.abs(2), 5))}`;
      if (incidents.length <= 4) {
         incidents.push(incidents.length);
      }
      while (1 < (incidents.length & 2) && (2 & incidents.length) < 3) {
         incidents.push(2);
         break;
      }
      bell6 = !successp;
   }
   if (!annerd) {
      annerd = 3.11 >= playO;
   }
   for (let n = 0; n < 3; n++) {
       let nterstitialV = new Map([[String.fromCharCode(104,97,115,104,95,114,95,55,48,0),false ], [String.fromCharCode(117,100,116,97,95,51,95,50,52,0),true ]]);
       let fieldh = [473, 321];
       let update_x3q = 0.0;
      do {
         nterstitialV = new Map([[`${nterstitialV.size}`, fieldh.length * nterstitialV.size]]);
         if (4364950 == nterstitialV.size) {
            break;
         }
      } while ((2 >= (2 & nterstitialV.size) || 2 >= (2 >> (Math.min(3, Math.abs(nterstitialV.size))))) && (4364950 == nterstitialV.size));
         fieldh.push(2);
       let statisticsX = new Map([[String.fromCharCode(100,95,57,50,95,112,114,101,108,105,109,105,110,97,114,121,0),true ], [String.fromCharCode(115,95,53,52,95,105,110,116,101,108,0),true ]]);
       let historyX = new Map([[String.fromCharCode(120,95,56,55,95,109,117,116,97,116,101,0),269], [String.fromCharCode(102,114,97,109,101,115,101,116,116,101,114,95,114,95,51,56,0),8], [String.fromCharCode(113,117,97,108,105,102,105,101,114,115,95,120,95,56,0),278]]);
      while ((statisticsX.size & 1) == 3) {
          let mutedp = String.fromCharCode(117,95,54,56,95,101,107,121,0);
          let popupI = new Map([[String.fromCharCode(119,95,54,0),473], [String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,114,121,95,98,95,53,55,0),838], [String.fromCharCode(98,97,99,107,119,97,114,100,95,53,95,51,57,0),191]]);
          let linkL = 3.0;
          let penaltyu = 4.0;
         historyX[`${mutedp}`] = mutedp.length - 1;
         popupI[`${penaltyu}`] = popupI.size - parseInt(`${penaltyu}`);
         linkL += parseFloat(`${parseInt(`${linkL}`) >> (Math.min(5, Math.abs(3)))}`);
         break;
      }
      if (!Array.from(nterstitialV.keys()).includes(`${update_x3q}`)) {
         nterstitialV[`${update_x3q}`] = parseInt(`${update_x3q}`) % (Math.max(fieldh.length, 2));
      }
         update_x3q /= Math.max(5, parseFloat(`${statisticsX.size << (Math.min(Math.abs(2), 5))}`));
         historyX = new Map([[`${statisticsX.size}`, 2]]);
      while ((2 << (Math.min(2, Math.abs(nterstitialV.size)))) > 4) {
         nterstitialV = new Map([[`${statisticsX.size}`, historyX.size / (Math.max(statisticsX.size, 8))]]);
         break;
      }
       let injuryk = 0.0;
      auto_l5 = `${hover4 - fieldh.length}`;
   }
   if (!annerd) {
      annerd = (playO + streamingc.size) > 90.62;
   }

}

function loadAd(placementId, settings) {
       let analyticsZ = 1;
    let description_wA = 3.0;
    let yellowc = 0.0;
    let controlL = 3;
    let playlistz = String.fromCharCode(102,108,111,111,100,95,114,95,53,51,0);
    let pagen = 0.0;
    let t_lockg = 3.0;
    let uploadi = String.fromCharCode(104,95,52,55,95,99,111,109,109,105,116,0);
    let default_wsb = [656, 14];
    let disconnectedD = [986, 277];
   if (3 <= playlistz.length) {
       let adult9 = 0;
      if ((adult9 ^ adult9) == 3) {
         adult9 *= adult9;
      }
      while (2 >= (adult9 >> (Math.min(Math.abs(3), 2))) && 1 >= (3 >> (Math.min(4, Math.abs(adult9))))) {
         adult9 += 1 & adult9;
         break;
      }
      do {
         adult9 /= Math.max(3, adult9 | 3);
         if (3192779 == adult9) {
            break;
         }
      } while ((3192779 == adult9) && ((adult9 - 1) > 3));
      playlistz = "2";
   }
      default_wsb.push(playlistz.length - parseInt(`${t_lockg}`));
      description_wA -= parseFloat(`${2}`);
      uploadi += `${parseInt(`${t_lockg}`) + uploadi.length}`;

    if (settings.hasOwnProperty(kATBannerAdLoadingExtraBannerAdSizeStruct)) {

       let buffer0 = String.fromCharCode(112,105,120,101,108,102,108,111,97,116,95,108,95,57,48,0);
       let clearc = String.fromCharCode(121,117,118,121,117,118,95,103,95,50,53,0);
       let rank_ = false;
         buffer0 = `${buffer0.length}`;
       let roomt = String.fromCharCode(101,95,57,51,95,122,105,112,0);
       let baiduZ = String.fromCharCode(122,95,49,48,48,95,115,117,98,104,101,97,100,101,114,0);
         clearc = `${clearc.length}`;
      do {
          let spinnerm = 0.0;
          let w_unlockz = 1.0;
          let textK = 0.0;
          let downy = 4.0;
          let langH = 1;
         buffer0 = `${baiduZ.length & 3}`;
         spinnerm *= 1;
         w_unlockz *= parseFloat(`${langH << (Math.min(Math.abs(parseInt(`${downy}`)), 2))}`);
         textK /= Math.max(5, langH);
         downy *= parseInt(`${w_unlockz}`);
         if (1546284 == buffer0.length) {
            break;
         }
      } while ((1546284 == buffer0.length) && (!buffer0.endsWith(clearc)));
      if (baiduZ.includes(`${roomt.length}`)) {
         baiduZ = `${clearc.length}`;
      }
          let redirect4 = [974, 809];
          let selectedP = true;
          let privacyZ = String.fromCharCode(106,95,52,50,95,101,100,105,116,111,114,0);
         rank_ = privacyZ.length <= roomt.length;
         redirect4 = [redirect4.length << (Math.min(Math.abs(3), 1))];
         selectedP = !selectedP;
         privacyZ += `${((selectedP ? 2 : 2) >> (Math.min(Math.abs(1), 3)))}`;
      if (baiduZ == buffer0) {
          let guidey = 3.0;
          let regengH = new Map([[String.fromCharCode(97,117,116,111,114,101,102,114,101,115,104,95,98,95,55,53,0),879], [String.fromCharCode(97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,95,108,95,56,51,0),32]]);
         buffer0 = "1";
         guidey += parseFloat(`${regengH.size << (Math.min(1, Math.abs(parseInt(`${guidey}`))))}`);
         regengH[`${guidey}`] = regengH.size ^ 1;
      }
      while (buffer0.length == 3) {
         buffer0 = `${roomt.length | 1}`;
         break;
      }
      if (baiduZ.length <= 5) {
          let hejiX = [String.fromCharCode(99,97,99,104,101,100,107,101,121,115,95,55,95,54,51,0), String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,95,107,95,51,50,0)];
          let overlayQ = new Map([[String.fromCharCode(115,117,112,112,111,114,116,115,95,102,95,56,51,0),613], [String.fromCharCode(112,95,57,51,95,108,101,118,105,110,115,111,110,0),420], [String.fromCharCode(97,95,52,95,100,101,97,100,108,105,110,101,0),626]]);
          let middlei = String.fromCharCode(114,101,109,111,118,101,103,114,97,105,110,95,122,95,49,52,0);
         baiduZ += `${clearc.length}`;
         hejiX = [hejiX.length / 2];
         overlayQ = new Map([[`${overlayQ.size}`, middlei.length]]);
         middlei = `${(middlei == String.fromCharCode(112,0) ? middlei.length : hejiX.length)}`;
      }
      controlL -= parseInt(`${pagen}`) & 3;
   if (1 < controlL) {
       let targetr = String.fromCharCode(117,95,56,53,95,105,104,116,120,0);
       let gpaya = new Map([[String.fromCharCode(119,95,51,53,95,101,97,99,104,0),51], [String.fromCharCode(100,101,108,101,103,97,116,105,111,110,95,54,95,55,48,0),304], [String.fromCharCode(115,101,114,118,101,114,115,95,109,95,55,57,0),113]]);
       let frame_26k = 5;
       let historyU = 1;
       let forwardX = 1;
         gpaya[targetr] = 1;
          let overlay4 = 3;
          let delegate_59 = String.fromCharCode(115,95,50,52,95,105,100,101,111,0);
         gpaya[targetr] = targetr.length ^ 3;
         overlay4 &= delegate_59.length / (Math.max(9, overlay4));
         delegate_59 += "1";
       let datal = String.fromCharCode(98,105,110,107,97,117,100,105,111,95,51,95,55,54,0);
       let backO = String.fromCharCode(112,97,103,101,108,105,115,116,95,116,95,57,56,0);
          let fasty = [898, 202, 431];
          let currentD = 0.0;
          let matchH = 3.0;
         frame_26k >>= Math.min(Math.abs(parseInt(`${matchH}`) >> (Math.min(backO.length, 4))), 1);
         fasty.push(2);
         currentD /= Math.max(1, parseFloat(`${fasty.length - 3}`));
         matchH /= Math.max(parseFloat(`${fasty.length & parseInt(`${currentD}`)}`), 3);
      if (1 >= gpaya.size) {
          let indicatork = [838, 204];
         targetr = `${datal.length}`;
         indicatork = [1 + indicatork.length];
      }
      while ((backO.length % (Math.max(1, 8))) > 5) {
         backO += `${gpaya.size}`;
         break;
      }
      if (2 < (frame_26k / (Math.max(7, gpaya.size))) || 2 < (frame_26k / (Math.max(5, gpaya.size)))) {
         frame_26k |= frame_26k;
      }
       let lightB = String.fromCharCode(97,95,48,0);
      controlL %= Math.max(parseInt(`${t_lockg}`) - default_wsb.length, 1);
   }
      description_wA -= parseFloat(`${2}`);
      description_wA += parseFloat(`${playlistz.length}`);
        var loadAdSize = settings[kATBannerAdLoadingExtraBannerAdSizeStruct];
   if (4 < analyticsZ) {
       let step0 = 4.0;
      if ((step0 - 5.2) >= 5.35 && 5.2 >= (step0 - step0)) {
         step0 *= parseInt(`${step0}`) & parseInt(`${step0}`);
      }
      while ((step0 + 3.14) >= 3.51 || 3.14 >= (step0 + step0)) {
         step0 += parseInt(`${step0}`);
         break;
      }
      do {
         step0 += 3;
         if (step0 == 1332964.0) {
            break;
         }
      } while ((step0 >= 4.25) && (step0 == 1332964.0));
      analyticsZ >>= Math.min(4, Math.abs(1 >> (Math.min(Math.abs(parseInt(`${yellowc}`)), 4))));
   }
   do {
       let indicatork9 = 2.0;
       let more0 = String.fromCharCode(114,101,99,101,105,112,116,115,95,56,95,49,52,0);
       let moviesV = 0.0;
       let zhengpianQ = 0;
         zhengpianQ ^= 1 - more0.length;
      if (more0.length <= 2) {
          let trophyV = 4.0;
          let reminderR = String.fromCharCode(109,95,57,57,95,100,101,116,101,99,116,0);
          let albumd = String.fromCharCode(118,95,56,54,95,105,110,116,108,0);
          let page0 = String.fromCharCode(116,95,56,54,95,98,111,100,121,115,105,100,0);
          let trashY = 5.0;
         moviesV /= Math.max(parseFloat(`${albumd.length}`), 5);
         trophyV += parseFloat(`${reminderR.length * parseInt(`${trashY}`)}`);
         reminderR += `${(String.fromCharCode(75,0) == page0 ? page0.length : parseInt(`${trashY}`))}`;
         albumd = `${reminderR.length}`;
      }
         indicatork9 *= parseInt(`${moviesV}`);
      while ((zhengpianQ - 4) <= 1) {
          let settinge = new Map([[String.fromCharCode(105,95,51,50,95,108,117,116,114,103,98,0),108], [String.fromCharCode(113,95,55,49,95,99,111,110,99,117,114,114,101,110,116,0),93]]);
          let sortq = 4.0;
          let homer = false;
          let mathg = [730, 700];
          let zhengpianh = true;
         zhengpianQ ^= settinge.size;
         settinge = new Map([[`${sortq}`, ((homer ? 2 : 2) << (Math.min(Math.abs(parseInt(`${sortq}`)), 1)))]]);
         homer = 94.59 > sortq;
         mathg.push(mathg.length);
         zhengpianh = (parseInt(`${sortq}`) * mathg.length) > 34;
         break;
      }
         moviesV *= parseFloat(`${2}`);
      for (let t = 0; t < 2; t++) {
          let becomel = true;
          let firebaseO = 4.0;
         more0 += `${((becomel ? 5 : 5) % (Math.max(parseInt(`${firebaseO}`), 10)))}`;
      }
      do {
          let tail1 = [743, 498];
         moviesV /= Math.max(parseFloat(`${2}`), 1);
         tail1.push(tail1.length ^ tail1.length);
         if (moviesV == 3673011.0) {
            break;
         }
      } while ((moviesV == 3673011.0) && (2.7 == moviesV));
      do {
         more0 = `${zhengpianQ}`;
         if (more0 == String.fromCharCode(111,51,113,49,111,122,109,0)) {
            break;
         }
      } while (((3 - more0.length) <= 2) && (more0 == String.fromCharCode(111,51,113,49,111,122,109,0)));
      do {
          let tickR = String.fromCharCode(105,110,110,101,114,95,114,95,50,52,0);
          let stringO = new Map([[String.fromCharCode(102,111,114,119,97,114,100,101,100,95,104,95,56,53,0),true ], [String.fromCharCode(119,95,55,54,95,99,99,105,112,0),true ], [String.fromCharCode(106,95,50,95,114,114,116,114,0),false ]]);
          let guideK = 3.0;
          let buttonC = new Map([[String.fromCharCode(97,102,105,114,95,116,95,49,51,0),String.fromCharCode(115,117,98,115,116,114,95,117,95,55,49,0)], [String.fromCharCode(115,115,105,109,118,95,57,95,53,52,0),String.fromCharCode(116,95,52,55,95,112,97,107,116,0)]]);
          let yellowp = String.fromCharCode(115,95,55,48,95,109,111,110,111,115,112,97,99,101,100,0);
         more0 = `${zhengpianQ * parseInt(`${moviesV}`)}`;
         tickR += `${stringO.size % 3}`;
         stringO = new Map([[`${stringO.size}`, stringO.size ^ yellowp.length]]);
         guideK += stringO.size ^ 2;
         buttonC[`${guideK}`] = buttonC.size % 1;
         yellowp += `${tickR.length % (Math.max(2, stringO.size))}`;
         if (more0.length == 3743702) {
            break;
         }
      } while ((more0.length == 3743702) && (1 >= (more0.length * 3) || 4 >= (3 * more0.length)));
      for (let x = 0; x < 1; x++) {
         moviesV /= Math.max(parseFloat(`${1 | parseInt(`${moviesV}`)}`), 1);
      }
         zhengpianQ += 2;
       let iconC = 1;
      controlL += parseInt(`${t_lockg}`) + 2;
      if (1659242 == controlL) {
         break;
      }
   } while ((1659242 == controlL) && (3 <= (controlL / (Math.max(disconnectedD.length, 3))) && 2 <= (disconnectedD.length / (Math.max(3, 4)))));
   if (1.1 <= (t_lockg / 4.57) && 5.11 <= (t_lockg / 4.57)) {
      t_lockg *= 3 / (Math.max(analyticsZ, 5));
   }
      yellowc /= Math.max(parseInt(`${yellowc}`) | controlL, 1);

        settings["width"] = loadAdSize["width"];
   if (!uploadi.endsWith(`${yellowc}`)) {
      yellowc -= 2;
   }
   while ((yellowc * pagen) > 3.96 && 1.2 > (yellowc * 3.96)) {
      pagen /= Math.max(5, parseInt(`${description_wA}`) / (Math.max(default_wsb.length, 8)));
      break;
   }
   do {
      uploadi += `${parseInt(`${pagen}`) % 2}`;
      if (3308621 == uploadi.length) {
         break;
      }
   } while ((3308621 == uploadi.length) && (uploadi.length <= parseInt(`${t_lockg}`)));
      analyticsZ <<= Math.min(3, playlistz.length);

        settings["height"] = loadAdSize["height"];
      controlL ^= 3;
      default_wsb.push(controlL);
       let awayL = 2.0;
       let enewsh = true;
       let overe = String.fromCharCode(115,97,117,99,101,95,57,95,52,52,0);
       let combinee = new Map([[String.fromCharCode(99,112,117,117,115,101,100,95,52,95,51,48,0),23], [String.fromCharCode(118,95,54,54,95,100,117,109,112,105,110,102,111,0),573]]);
       let uploadD = new Map([[String.fromCharCode(116,111,109,111,114,114,111,119,95,120,95,55,57,0),9], [String.fromCharCode(117,110,115,104,105,102,116,95,117,95,53,53,0),64], [String.fromCharCode(104,95,57,55,95,100,99,111,110,108,121,0),903]]);
      do {
         uploadD = new Map([[`${combinee.size}`, combinee.size]]);
         if (671262 == uploadD.size) {
            break;
         }
      } while ((671262 == uploadD.size) && (5 <= (uploadD.size << (Math.min(Math.abs(3), 1))) || (combinee.size << (Math.min(Math.abs(3), 1))) <= 3));
      while ((awayL + 3.34) < 1.42 && 3.34 < awayL) {
         enewsh = (parseInt(`${awayL}`) / (Math.max(combinee.size, 5))) >= 51;
         break;
      }
      if (5 <= (4 << (Math.min(1, Math.abs(uploadD.size)))) || 5 <= (4 << (Math.min(5, Math.abs(combinee.size))))) {
          let x_playerp = false;
         uploadD = new Map([[`${enewsh}`, ((enewsh ? 3 : 2))]]);
      }
      for (let y = 0; y < 1; y++) {
          let umengv = String.fromCharCode(120,95,53,56,95,103,114,111,117,112,110,97,109,101,115,0);
         uploadD = new Map([[`${combinee.size}`, uploadD.size]]);
         umengv = `${2 >> (Math.min(1, umengv.length))}`;
      }
         enewsh = String.fromCharCode(73,0) == overe;
       let championJ = String.fromCharCode(121,95,57,53,95,103,101,111,0);
       let trashh = String.fromCharCode(100,95,56,95,110,101,97,114,108,121,0);
         trashh = `${combinee.size}`;
          let pageV = String.fromCharCode(118,95,50,56,95,102,117,110,99,116,105,111,110,0);
          let macauo = String.fromCharCode(98,119,103,116,95,120,95,50,55,0);
          let short_vE = String.fromCharCode(102,105,108,116,101,114,95,103,95,56,0);
         combinee[`${short_vE}`] = combinee.size + 2;
         pageV += `${pageV.length / 2}`;
         macauo += `${macauo.length}`;
         short_vE = `${(macauo == String.fromCharCode(99,0) ? macauo.length : pageV.length)}`;
      pagen += parseInt(`${yellowc}`) & 2;
   do {
      yellowc -= 3;
      if (4228826.0 == yellowc) {
         break;
      }
   } while (((description_wA + yellowc) <= 2.38 && 3.95 <= (2.38 + description_wA)) && (4228826.0 == yellowc));

        delete settings[kATBannerAdLoadingExtraBannerAdSizeStruct];
   if ((analyticsZ << (Math.min(Math.abs(3), 4))) < 2) {
       let videoI = String.fromCharCode(112,111,119,95,56,95,53,51,0);
         videoI += `${videoI.length}`;
          let lineF = 4.0;
          let infoP = 4;
         videoI = "3";
         lineF -= 2;
         infoP ^= parseInt(`${lineF}`) ^ infoP;
      do {
         videoI += `${(String.fromCharCode(105,0) == videoI ? videoI.length : videoI.length)}`;
         if (videoI == String.fromCharCode(48,52,121,97,103,99,114,117,111,0)) {
            break;
         }
      } while ((4 < videoI.length) && (videoI == String.fromCharCode(48,52,121,97,103,99,114,117,111,0)));
      analyticsZ *= (videoI == String.fromCharCode(78,0) ? disconnectedD.length : videoI.length);
   }
      description_wA -= parseFloat(`${parseInt(`${description_wA}`)}`);
   do {
       let middleZ = [String.fromCharCode(107,105,110,103,102,105,115,104,101,114,95,108,95,49,51,0), String.fromCharCode(110,95,50,48,95,116,98,108,101,110,100,0), String.fromCharCode(98,105,116,115,104,105,102,116,95,111,95,53,52,0)];
       let sentryP = String.fromCharCode(102,95,52,55,95,117,110,114,111,108,108,101,100,0);
       let x_countV = 4.0;
      if (!middleZ.includes(x_countV)) {
          let reducer0 = 4;
         middleZ.push((String.fromCharCode(53,0) == sentryP ? sentryP.length : middleZ.length));
         reducer0 <<= Math.min(4, Math.abs(reducer0 & 3));
      }
         middleZ.push(middleZ.length | 1);
      if (2 <= (parseInt(`${x_countV}`) / (Math.max(9, middleZ.length))) && 4 <= (middleZ.length & 2)) {
         middleZ.push(1);
      }
      for (let q = 0; q < 1; q++) {
          let orientationP = new Map([[String.fromCharCode(100,105,115,97,112,112,101,97,114,95,53,95,50,0),2], [String.fromCharCode(102,105,108,116,101,114,95,56,95,53,49,0),35], [String.fromCharCode(101,95,53,57,95,105,110,116,101,114,112,111,108,97,116,111,114,115,0),43]]);
          let topicJ = new Map([[String.fromCharCode(107,95,55,95,112,114,101,112,101,110,100,0),String.fromCharCode(99,111,110,116,105,110,117,101,95,109,95,57,54,0)], [String.fromCharCode(99,111,114,110,101,114,95,54,95,51,53,0),String.fromCharCode(110,95,54,53,95,112,114,101,115,101,108,101,99,116,0)], [String.fromCharCode(110,111,110,110,117,108,108,111,117,116,95,102,95,49,55,0),String.fromCharCode(118,95,50,48,95,109,105,103,114,97,116,105,111,110,0)]]);
         sentryP = `${topicJ.size}`;
         orientationP[`${orientationP.size}`] = 1;
         topicJ = new Map([[`${orientationP.size}`, orientationP.size * 2]]);
      }
         sentryP = `${sentryP.length & parseInt(`${x_countV}`)}`;
      do {
         sentryP += `${middleZ.length}`;
         if (String.fromCharCode(104,107,120,108,0) == sentryP) {
            break;
         }
      } while ((sentryP.startsWith(`${middleZ.length}`)) && (String.fromCharCode(104,107,120,108,0) == sentryP));
      do {
         middleZ = [sentryP.length << (Math.min(Math.abs(1), 1))];
         if (middleZ.length == 1789757) {
            break;
         }
      } while ((middleZ.length < 1) && (middleZ.length == 1789757));
         middleZ = [1 >> (Math.min(5, sentryP.length))];
      if (sentryP.length < 5) {
         sentryP = "1";
      }
      controlL -= 2;
      if (controlL == 1086197) {
         break;
      }
   } while ((controlL == 1086197) && (3 > (default_wsb.length | controlL)));
   for (let b = 0; b < 2; b++) {
      playlistz = `${playlistz.length / (Math.max(10, parseInt(`${yellowc}`)))}`;
   }

    }
    ATBannerRNSDK.loadAd(placementId, JSON.stringify(settings));
      pagen += uploadi.length >> (Math.min(4, Math.abs(parseInt(`${description_wA}`))));
       let topic_ = new Map([[String.fromCharCode(118,95,51,50,95,105,109,112,111,114,116,115,0),998], [String.fromCharCode(111,95,55,52,95,97,99,107,117,112,0),379], [String.fromCharCode(119,95,54,51,95,115,97,109,112,108,101,0),57]]);
         topic_[`${topic_.size}`] = topic_.size;
      for (let p = 0; p < 3; p++) {
         topic_ = new Map([[`${topic_.size}`, topic_.size]]);
      }
         topic_[`${topic_.size}`] = 1;
      pagen *= 3 >> (Math.min(Math.abs(analyticsZ), 1));
   while (analyticsZ > 2) {
      analyticsZ *= 2 & controlL;
      break;
   }
   do {
      analyticsZ += 2;
      if (analyticsZ == 239067) {
         break;
      }
   } while (((2 & disconnectedD.length) <= 2) && (analyticsZ == 239067));

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
  showAdInPosition: (placementId, position) =>  ATBannerRNSDK.showAdInPosition(placementId, position),
  showAdInRectangle: (placementId, showAdRect) =>  ATBannerRNSDK.showAdInRectangle(placementId, JSON.stringify(showAdRect)),
  hideAd: (placementId) =>  ATBannerRNSDK.hideAd(placementId),
  reShowAd: (placementId) =>  ATBannerRNSDK.reShowAd(placementId),
  removeAd: (placementId) =>  ATBannerRNSDK.removeAd(placementId),
};
