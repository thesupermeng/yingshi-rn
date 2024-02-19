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
       let frame__F = String.fromCharCode(98,95,56,56,95,114,103,98,0);
    let switch_3r = 2.0;
    let matchinactivei = 4.0;
    let libcxxcomponentsm = 5.0;
    let register_53 = String.fromCharCode(119,105,100,116,104,115,95,48,95,49,48,0);
    let closeC = new Map([[String.fromCharCode(119,101,105,103,104,116,101,100,0),908], [String.fromCharCode(122,95,51,95,105,109,112,114,101,115,115,105,111,110,0),210]]);
    let libfbp = 3.0;
    let dicelogo3 = new Map([[String.fromCharCode(116,95,55,95,99,104,97,114,97,99,116,101,100,0),String.fromCharCode(115,95,57,55,95,100,105,99,116,0)], [String.fromCharCode(108,95,51,49,95,102,105,108,116,101,114,0),String.fromCharCode(115,108,111,116,95,101,95,56,56,0)], [String.fromCharCode(118,95,50,51,95,101,115,115,101,110,116,105,97,108,0),String.fromCharCode(105,109,112,111,114,116,95,107,95,54,53,0)]]);
   if (!register_53.endsWith(`${matchinactivei}`)) {
       let ewardedN = 5.0;
      while ((ewardedN - ewardedN) < 2.41) {
         ewardedN /= Math.max(4, parseFloat(`${2 + parseInt(`${ewardedN}`)}`));
         break;
      }
      if (ewardedN >= ewardedN) {
         ewardedN *= parseFloat(`${1}`);
      }
      do {
         ewardedN *= parseFloat(`${parseInt(`${ewardedN}`) >> (Math.min(1, Math.abs(1)))}`);
         if (893949.0 == ewardedN) {
            break;
         }
      } while ((5.8 < (3.75 + ewardedN)) && (893949.0 == ewardedN));
      matchinactivei /= Math.max((parseFloat(`${String.fromCharCode(55,0) == register_53 ? parseInt(`${switch_3r}`) : register_53.length}`)), 1);
   }
       let penaltyshootd = String.fromCharCode(97,112,105,99,95,98,95,57,57,0);
       let rewindu = String.fromCharCode(119,105,110,115,111,99,107,95,105,95,57,51,0);
         rewindu += `${penaltyshootd.length}`;
         rewindu = `${penaltyshootd.length}`;
         penaltyshootd += "2";
         rewindu += `${penaltyshootd.length}`;
         rewindu += `${penaltyshootd.length / (Math.max(rewindu.length, 3))}`;
         penaltyshootd = "1";
      frame__F = `${frame__F.length}`;

  switch (type) {
      case onBannerLoaded:
      case onBannerFail:
      case onBannerCloseButtonTapped:
      case onBannerClick:
      case onBannerShow:
      case onBannerRefresh:
      case onBannerRefreshFail:
        removeAdListener(type);
      frame__F = `${parseInt(`${libfbp}`) % (Math.max(parseInt(`${libcxxcomponentsm}`), 4))}`;
       let graphicsc = String.fromCharCode(99,111,109,109,101,110,116,95,105,95,55,53,0);
       let datax = [712, 42];
       let incidentK = String.fromCharCode(102,95,55,54,95,115,115,108,114,111,111,116,115,0);
         graphicsc += `${incidentK.length * graphicsc.length}`;
          let refresho = [57, 818];
         datax = [1 ^ datax.length];
         refresho.push(1);
         datax.push(graphicsc.length);
      for (let q = 0; q < 3; q++) {
         datax.push(graphicsc.length & datax.length);
      }
          let selectionn = 2;
          let servicee = String.fromCharCode(120,95,53,53,95,115,97,109,112,108,105,110,103,0);
          let field8 = String.fromCharCode(115,101,110,100,95,50,95,52,56,0);
         incidentK = `${servicee.length}`;
         selectionn &= selectionn / 3;
         servicee = "3";
         field8 = `${selectionn}`;
       let subsy = String.fromCharCode(103,108,111,119,95,118,95,52,52,0);
       let math3 = String.fromCharCode(97,95,51,57,95,101,110,100,115,0);
          let shareblackj = 2;
          let o_countT = 3.0;
         graphicsc += `${(String.fromCharCode(56,0) == incidentK ? datax.length : incidentK.length)}`;
         shareblackj -= 1;
         o_countT /= Math.max(parseFloat(`${shareblackj >> (Math.min(5, Math.abs(2)))}`), 5);
         subsy = `${(subsy == String.fromCharCode(95,0) ? incidentK.length : subsy.length)}`;
      for (let r = 0; r < 2; r++) {
         datax.push(3 ^ math3.length);
      }
      register_53 += `${datax.length}`;

        ATBannerEventEmitter.addListener(type, handler);
   while (2.22 >= (matchinactivei / (Math.max(2, libcxxcomponentsm))) || (matchinactivei / (Math.max(libcxxcomponentsm, 2))) >= 2.22) {
       let footballtrophyY = String.fromCharCode(118,95,53,50,95,115,119,105,102,116,121,0);
       let fullscreenmaxl = String.fromCharCode(112,97,114,97,109,103,101,110,95,105,95,48,0);
      while (fullscreenmaxl.endsWith(footballtrophyY)) {
         footballtrophyY += `${fullscreenmaxl.length & 2}`;
         break;
      }
         footballtrophyY += `${fullscreenmaxl.length / (Math.max(footballtrophyY.length, 5))}`;
      libcxxcomponentsm /= Math.max(5, parseFloat(`${3 >> (Math.min(4, footballtrophyY.length))}`));
      break;
   }
   if (register_53.length == frame__F.length) {
      frame__F += `${1 ^ parseInt(`${libfbp}`)}`;
   }

        break;
       let statisticsactiveh = new Map([[String.fromCharCode(101,120,99,108,117,115,105,118,101,95,50,95,57,50,0),569], [String.fromCharCode(105,110,116,101,103,114,97,116,101,100,95,109,95,51,49,0),838], [String.fromCharCode(105,109,112,111,114,116,101,114,95,119,95,55,56,0),799]]);
       let goallogoq = 4;
         statisticsactiveh = new Map([[`${statisticsactiveh.size}`, goallogoq]]);
          let twitterw = 0.0;
          let container9 = [741, 367, 785];
         statisticsactiveh[`${twitterw}`] = 3;
         twitterw /= Math.max(container9.length / 1, 3);
         container9 = [container9.length / (Math.max(container9.length, 10))];
      if (Array.from(statisticsactiveh.keys()).includes(`${goallogoq}`)) {
          let gifgoalK = String.fromCharCode(113,95,51,54,95,112,111,105,115,115,111,110,0);
          let logouserT = true;
         goallogoq &= 2;
         gifgoalK = `${((logouserT ? 4 : 3) | 3)}`;
         logouserT = (((logouserT ? 31 : gifgoalK.length) * gifgoalK.length) < 31);
      }
         statisticsactiveh = new Map([[`${statisticsactiveh.size}`, 1]]);
          let dependencyi = true;
         goallogoq += 1;
         dependencyi = dependencyi && !dependencyi;
      for (let o = 0; o < 1; o++) {
         goallogoq /= Math.max(1 - statisticsactiveh.size, 1);
      }
      closeC[`${goallogoq}`] = statisticsactiveh.size << (Math.min(3, Math.abs(goallogoq)));
   if (register_53.endsWith(`${closeC.size}`)) {
       let countdownX = 4.0;
      while ((countdownX - 4.50) <= 1.8 || 5.2 <= (4.50 - countdownX)) {
         countdownX /= Math.max(4, parseFloat(`${parseInt(`${countdownX}`)}`));
         break;
      }
         countdownX += parseFloat(`${1 - parseInt(`${countdownX}`)}`);
      for (let b = 0; b < 3; b++) {
          let iconrightorangeh = String.fromCharCode(112,95,50,95,115,97,118,101,112,111,105,110,116,0);
          let bellreminderI = String.fromCharCode(122,95,53,95,99,111,110,116,105,103,117,111,117,115,0);
          let executorM = String.fromCharCode(99,110,111,110,99,101,95,98,95,50,0);
         countdownX *= parseFloat(`${parseInt(`${countdownX}`) << (Math.min(Math.abs(1), 4))}`);
         iconrightorangeh += `${1 | bellreminderI.length}`;
         bellreminderI += `${bellreminderI.length}`;
         executorM += `${iconrightorangeh.length << (Math.min(5, bellreminderI.length))}`;
      }
      closeC[`${switch_3r}`] = 1 ^ parseInt(`${libfbp}`);
   }

      default:
        console.log(`Event with type ${type} does not exist.`);
      libcxxcomponentsm += parseFloat(`${parseInt(`${libcxxcomponentsm}`) / (Math.max(6, register_53.length))}`);
      switch_3r += parseInt(`${matchinactivei}`) & parseInt(`${libfbp}`);

    }
};

const removeAdListener = (type) => {
       let chart5 = 4.0;
    let giftbuttonW = String.fromCharCode(118,95,54,50,95,119,97,116,99,104,101,114,0);
    let fullscreenmaxC = String.fromCharCode(108,95,52,51,95,100,111,109,101,115,116,105,99,0);
    let unselectedO = 1.0;
    let icondefaultthumbnailS = 3.0;
    let episodesn = new Map([[String.fromCharCode(120,95,56,54,95,99,102,101,110,99,115,116,114,0),String.fromCharCode(108,111,116,116,105,101,108,111,97,100,101,114,95,122,95,54,49,0)], [String.fromCharCode(102,95,57,50,95,116,119,105,108,105,103,104,116,0),String.fromCharCode(100,114,101,102,95,108,95,50,57,0)]]);
    let iconscheduleX = 0;
    let videocommon_ = true;
       let internetS = 2.0;
      for (let b = 0; b < 1; b++) {
          let constantsH = 0;
          let libavfilteru = true;
          let predictionbuttonQ = true;
          let leaguedetailsbg0 = [696, 518];
          let videocommonj = new Map([[String.fromCharCode(112,95,51,54,95,97,109,101,120,0),139], [String.fromCharCode(97,95,50,48,95,116,104,114,101,115,104,111,108,100,115,0),170], [String.fromCharCode(117,116,102,95,119,95,50,50,0),134]]);
         internetS += (parseFloat(`${(predictionbuttonQ ? 4 : 1) + 3}`));
         constantsH *= constantsH;
         libavfilteru = 88 >= videocommonj.size;
         predictionbuttonQ = videocommonj.size > leaguedetailsbg0.length;
         leaguedetailsbg0.push(leaguedetailsbg0.length * 3);
      }
         internetS -= parseFloat(`${2 - parseInt(`${internetS}`)}`);
         internetS -= parseFloat(`${2}`);
      giftbuttonW = `${episodesn.size >> (Math.min(Math.abs(1), 3))}`;
   if ((giftbuttonW.length + 1) > 2) {
      giftbuttonW = `${iconscheduleX}`;
   }
   while (1 <= (parseInt(`${chart5}`) + giftbuttonW.length) && 1 <= (giftbuttonW.length + parseInt(`${chart5}`))) {
       let sideI = false;
       let k_lockN = true;
       let predictionloss_ = new Map([[String.fromCharCode(119,105,110,100,111,119,101,100,95,116,95,54,57,0),String.fromCharCode(109,95,50,51,95,115,105,103,104,0)], [String.fromCharCode(97,99,100,99,95,100,95,50,55,0),String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,115,95,48,95,57,56,0)], [String.fromCharCode(116,111,116,97,108,95,104,95,52,55,0),String.fromCharCode(111,102,102,101,114,101,100,95,99,95,53,48,0)]]);
       let libswscalep = String.fromCharCode(105,110,99,114,109,101,114,103,101,95,107,95,50,54,0);
       let backgroundI = String.fromCharCode(109,95,56,48,95,109,105,108,108,105,115,0);
         libswscalep += "1";
      if (backgroundI.length >= 4 || !k_lockN) {
         backgroundI = `${predictionloss_.size + 2}`;
      }
          let privacyP = String.fromCharCode(118,95,50,51,95,111,112,101,110,0);
          let classesL = [281, 488];
          let thumbnail5 = String.fromCharCode(97,98,117,102,102,101,114,115,105,110,107,95,114,95,56,55,0);
         libswscalep = `${(String.fromCharCode(101,0) == libswscalep ? libswscalep.length : thumbnail5.length)}`;
         privacyP += `${privacyP.length}`;
         classesL = [2];
         thumbnail5 += `${classesL.length - privacyP.length}`;
         k_lockN = 57 >= libswscalep.length || predictionloss_.size >= 57;
       let spec9 = new Map([[String.fromCharCode(115,95,55,57,95,110,101,103,111,116,105,97,116,101,0),803], [String.fromCharCode(108,101,114,112,102,95,99,95,54,50,0),489]]);
          let largev = 4.0;
          let bgvipsportB = 2;
          let areaW = String.fromCharCode(113,95,51,48,95,115,104,111,117,121,97,99,104,111,0);
         sideI = areaW.length <= libswscalep.length;
         largev /= Math.max(5, 2);
         bgvipsportB &= 3 ^ bgvipsportB;
         areaW = `${2 % (Math.max(10, parseInt(`${largev}`)))}`;
      while (2 > (predictionloss_.size & 4)) {
         libswscalep = `${((k_lockN ? 2 : 3))}`;
         break;
      }
          let iconstar3 = 3.0;
          let inouttargetreda = true;
          let indicator7 = 5.0;
         predictionloss_ = new Map([[`${inouttargetreda}`, (parseInt(`${indicator7}`) ^ (inouttargetreda ? 3 : 2))]]);
         iconstar3 += parseInt(`${iconstar3}`);
      for (let x = 0; x < 3; x++) {
         spec9 = new Map([[`${k_lockN}`, ((k_lockN ? 4 : 1) * (sideI ? 2 : 4))]]);
      }
          let sellmathbackgroundN = new Map([[String.fromCharCode(113,95,50,50,95,99,111,109,112,105,116,97,98,108,101,0),545], [String.fromCharCode(108,95,50,49,95,101,112,111,99,104,0),873]]);
          let matchinactivek = true;
          let iconsharej = 5.0;
         predictionloss_[`${sideI}`] = predictionloss_.size;
         sellmathbackgroundN = new Map([[`${iconsharej}`, 3 + parseInt(`${iconsharej}`)]]);
         matchinactivek = iconsharej > 98.58;
         predictionloss_ = new Map([[`${spec9.size}`, libswscalep.length | spec9.size]]);
      for (let v = 0; v < 3; v++) {
         spec9[`${k_lockN}`] = predictionloss_.size;
      }
       let codegeng = 2;
       let e_lockZ = 4;
         k_lockN = spec9[`${codegeng}`] != null;
         k_lockN = (((k_lockN ? spec9.size : 10) - spec9.size) < 86);
      chart5 -= 1;
      break;
   }
      giftbuttonW += `${fullscreenmaxC.length | giftbuttonW.length}`;
      icondefaultthumbnailS += 1;
      chart5 += episodesn.size << (Math.min(giftbuttonW.length, 5));
      chart5 *= parseInt(`${chart5}`) / (Math.max(giftbuttonW.length, 9));
   do {
       let danger0 = 3;
         danger0 <<= Math.min(Math.abs(danger0 + danger0), 2);
          let awayteamfieldD = String.fromCharCode(98,117,105,108,100,101,114,95,100,95,51,0);
         danger0 >>= Math.min(Math.abs(danger0 << (Math.min(Math.abs(3), 2))), 3);
         awayteamfieldD = `${awayteamfieldD.length + awayteamfieldD.length}`;
      for (let z = 0; z < 3; z++) {
          let rightj = String.fromCharCode(112,117,108,108,117,112,95,111,95,55,53,0);
          let currentM = new Map([[String.fromCharCode(98,111,120,101,100,95,103,95,56,55,0),203], [String.fromCharCode(97,95,50,53,95,99,111,114,114,101,115,112,111,110,100,101,110,116,115,0),665]]);
          let tickE = 3;
          let championv = 2;
         danger0 *= 3;
         rightj = `${(String.fromCharCode(82,0) == rightj ? rightj.length : currentM.size)}`;
         currentM = new Map([[`${currentM.size}`, 3 + currentM.size]]);
         tickE %= Math.max((rightj == String.fromCharCode(103,0) ? currentM.size : rightj.length), 2);
         championv -= currentM.size;
      }
      videocommon_ = iconscheduleX < fullscreenmaxC.length;
      if (videocommon_ ? !videocommon_ : videocommon_) {
         break;
      }
   } while ((4 <= giftbuttonW.length) && (videocommon_ ? !videocommon_ : videocommon_));
   while (fullscreenmaxC.length < 5) {
      fullscreenmaxC = `${iconscheduleX}`;
      break;
   }
       let headert = String.fromCharCode(108,105,99,101,110,115,101,95,97,95,52,57,0);
         headert += "2";
         headert = `${(String.fromCharCode(116,0) == headert ? headert.length : headert.length)}`;
      while (headert.length >= headert.length) {
         headert += `${headert.length % (Math.max(1, headert.length))}`;
         break;
      }
      giftbuttonW += "1";
   if ((5.100 - unselectedO) == 5.5 || 5.100 == (unselectedO - parseFloat(`${fullscreenmaxC.length}`))) {
       let o_imageg = String.fromCharCode(122,95,54,95,104,97,109,98,117,114,103,101,114,0);
       let unselectedq = true;
      while (unselectedq) {
          let policya = String.fromCharCode(107,95,48,95,100,97,116,101,0);
          let utilsS = 2;
          let ajaxs = String.fromCharCode(100,105,118,105,100,111,114,115,95,54,95,52,56,0);
          let iconclosewhitebgM = new Map([[String.fromCharCode(116,114,97,105,108,105,110,103,95,104,95,57,52,0),391], [String.fromCharCode(107,95,54,52,95,115,112,107,114,0),990], [String.fromCharCode(101,109,97,105,108,95,108,95,52,52,0),121]]);
          let telegram_ = 4.0;
         unselectedq = unselectedq || 72.19 >= telegram_;
         policya = `${2 | utilsS}`;
         utilsS &= (String.fromCharCode(95,0) == ajaxs ? ajaxs.length : iconclosewhitebgM.size);
         iconclosewhitebgM[`${utilsS}`] = 3 & iconclosewhitebgM.size;
         telegram_ += parseFloat(`${utilsS % 1}`);
         break;
      }
      while (!unselectedq) {
         o_imageg = `${o_imageg.length}`;
         break;
      }
          let tooltipsN = 3.0;
          let thumbnailn = [27, 470, 582];
          let injuryJ = new Map([[String.fromCharCode(99,112,111,115,95,57,95,54,52,0),727], [String.fromCharCode(104,97,110,100,115,0),926], [String.fromCharCode(113,95,54,54,95,99,111,111,107,0),510]]);
         o_imageg += `${3 * injuryJ.size}`;
         tooltipsN -= thumbnailn.length;
         thumbnailn = [thumbnailn.length];
         injuryJ = new Map([[`${thumbnailn.length}`, parseInt(`${tooltipsN}`)]]);
          let default_9V = 2.0;
          let greenarrowupT = String.fromCharCode(103,95,53,48,95,102,105,110,100,97,115,115,111,99,105,97,116,105,111,110,0);
         unselectedq = !o_imageg.includes(`${default_9V}`);
         default_9V -= greenarrowupT.length;
         greenarrowupT = `${(String.fromCharCode(51,0) == greenarrowupT ? greenarrowupT.length : greenarrowupT.length)}`;
      if (5 < o_imageg.length && !unselectedq) {
          let bufferV = [432, 457, 207];
          let pushW = [733, 352];
         o_imageg = `${(bufferV.length << (Math.min(5, Math.abs((unselectedq ? 3 : 1)))))}`;
         bufferV.push(pushW.length);
         pushW = [pushW.length % (Math.max(pushW.length, 6))];
      }
      while (!unselectedq) {
         unselectedq = !unselectedq;
         break;
      }
      fullscreenmaxC += `${(parseInt(`${chart5}`) << (Math.min(5, Math.abs((videocommon_ ? 3 : 3)))))}`;
   }
   do {
       let nodeQ = 3.0;
       let default_q2B = 0.0;
       let editO = [76, 832, 925];
       let referrerU = new Map([[String.fromCharCode(103,97,109,117,116,95,103,95,57,57,0),785], [String.fromCharCode(104,95,54,53,95,107,101,121,112,97,116,104,0),251]]);
       let templateprocessorc = String.fromCharCode(108,95,51,95,118,112,99,99,0);
       let leaguedetailsbgT = 3.0;
      for (let d = 0; d < 3; d++) {
         editO.push((templateprocessorc == String.fromCharCode(105,0) ? parseInt(`${nodeQ}`) : templateprocessorc.length));
      }
         leaguedetailsbgT /= Math.max(3, 1);
         default_q2B /= Math.max(parseFloat(`${templateprocessorc.length ^ 1}`), 4);
         default_q2B += parseFloat(`${editO.length}`);
         editO = [templateprocessorc.length + parseInt(`${nodeQ}`)];
      while ((editO.length / (Math.max(5, 4))) >= 2) {
         default_q2B *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${nodeQ}`)), 2))}`);
         break;
      }
          let guide_ = String.fromCharCode(105,95,49,56,95,115,105,108,101,110,99,101,100,0);
          let filledZ = true;
          let armvaP = String.fromCharCode(108,105,98,99,101,108,116,95,51,95,52,0);
         editO.push(1 - parseInt(`${nodeQ}`));
         guide_ += "3";
         filledZ = !filledZ && armvaP.length <= 1;
         armvaP += "3";
      if ((parseFloat(`${templateprocessorc.length}`) / (Math.max(8, nodeQ))) <= 1.43) {
         nodeQ -= parseFloat(`${1}`);
      }
       let windI = 2.0;
      for (let n = 0; n < 3; n++) {
         leaguedetailsbgT /= Math.max(3, 1);
      }
       let predictionarrowg = 0.0;
       let plusM = 3.0;
      do {
          let themeQ = [156, 55];
          let holdern = String.fromCharCode(98,97,114,114,105,101,114,0);
         predictionarrowg /= Math.max(2, 1);
         themeQ = [holdern.length & themeQ.length];
         holdern = `${holdern.length}`;
         if (predictionarrowg == 2918912.0) {
            break;
         }
      } while ((predictionarrowg == 2918912.0) && ((3.9 - default_q2B) <= 1.26 && 2.80 <= (predictionarrowg / 3.9)));
          let anytimeG = false;
          let phoneshareB = 2.0;
         referrerU[`${leaguedetailsbgT}`] = 3 % (Math.max(1, parseInt(`${leaguedetailsbgT}`)));
         anytimeG = 51.92 < phoneshareB;
         phoneshareB -= parseFloat(`${3 & parseInt(`${phoneshareB}`)}`);
         plusM -= 2 ^ editO.length;
      videocommon_ = templateprocessorc == fullscreenmaxC;
      if (videocommon_ ? !videocommon_ : videocommon_) {
         break;
      }
   } while ((2.56 > (5.16 - unselectedO)) && (videocommon_ ? !videocommon_ : videocommon_));

 ATBannerEventEmitter.removeAllListeners(type);
      chart5 /= Math.max(1, 4);
      icondefaultthumbnailS *= parseInt(`${icondefaultthumbnailS}`) & 2;
      icondefaultthumbnailS += fullscreenmaxC.length >> (Math.min(2, Math.abs(parseInt(`${chart5}`))));
   while (4.25 < unselectedO) {
      unselectedO *= parseFloat(`${giftbuttonW.length}`);
      break;
   }
       let mailX = 5.0;
       let miniI = new Map([[String.fromCharCode(115,112,108,105,116,116,101,100,95,99,95,56,57,0),91], [String.fromCharCode(98,95,56,95,118,112,114,105,110,116,102,0),302]]);
         miniI[`${mailX}`] = parseInt(`${mailX}`) | 1;
         miniI[`${mailX}`] = 1 | parseInt(`${mailX}`);
          let station7 = [281, 395, 198];
          let splashB = String.fromCharCode(101,95,50,57,95,109,101,97,115,117,114,101,100,0);
          let mbbidD = String.fromCharCode(107,101,109,112,102,95,104,95,56,56,0);
         miniI[`${mailX}`] = 3 % (Math.max(7, parseInt(`${mailX}`)));
         station7.push((splashB == String.fromCharCode(118,0) ? splashB.length : station7.length));
         mbbidD = `${3 ^ mbbidD.length}`;
      while ((miniI.size / (Math.max(9, parseInt(`${mailX}`)))) >= 3 && 1.80 >= (2.5 / (Math.max(9, mailX)))) {
         miniI = new Map([[`${miniI.size}`, miniI.size & 1]]);
         break;
      }
       let plasha = 3.0;
      do {
         mailX *= 3;
         if (2005315.0 == mailX) {
            break;
         }
      } while (((4 >> (Math.min(5, Math.abs(miniI.size)))) == 1) && (2005315.0 == mailX));
      fullscreenmaxC = `${((videocommon_ ? 1 : 5) << (Math.min(Math.abs(parseInt(`${mailX}`)), 3)))}`;
   if (unselectedO < 4.30) {
      fullscreenmaxC += `${fullscreenmaxC.length}`;
   }
      fullscreenmaxC = `${iconscheduleX % (Math.max(giftbuttonW.length, 10))}`;
       let loginsuccessP = [String.fromCharCode(97,95,57,57,95,105,110,118,101,114,116,0), String.fromCharCode(100,95,56,55,95,97,99,99,101,115,115,111,114,0), String.fromCharCode(114,101,109,111,118,97,108,95,56,95,56,48,0)];
       let questiconr = String.fromCharCode(112,108,97,116,102,111,114,109,115,95,122,95,57,49,0);
       let notificationgrayB = String.fromCharCode(100,95,57,51,95,98,111,119,108,105,110,103,0);
         loginsuccessP = [2 * questiconr.length];
      for (let h = 0; h < 1; h++) {
         loginsuccessP.push(3 << (Math.min(5, loginsuccessP.length)));
      }
         questiconr += `${notificationgrayB.length + 1}`;
         questiconr = `${questiconr.length}`;
      while (loginsuccessP.length < 3) {
         questiconr = "3";
         break;
      }
       let iconarrowright5 = 2;
       let charti = 5;
      do {
         loginsuccessP.push((notificationgrayB == String.fromCharCode(65,0) ? questiconr.length : notificationgrayB.length));
         if (4011310 == loginsuccessP.length) {
            break;
         }
      } while ((4011310 == loginsuccessP.length) && ((notificationgrayB.length | loginsuccessP.length) <= 5 && (loginsuccessP.length | 5) <= 2));
         charti -= notificationgrayB.length;
      while (!loginsuccessP.includes(charti)) {
          let fieldD = 4;
          let penaltymatchiconW = 1.0;
         loginsuccessP.push(3);
         fieldD += 2;
         penaltymatchiconW /= Math.max(2, parseFloat(`${fieldD + 2}`));
         break;
      }
      icondefaultthumbnailS /= Math.max(giftbuttonW.length << (Math.min(Math.abs(3), 1)), 4);
   while ((iconscheduleX - 2) > 1 && videocommon_) {
       let moonM = String.fromCharCode(108,95,56,51,95,112,111,115,116,102,105,120,0);
       let libbufferX = String.fromCharCode(98,111,114,100,101,114,95,105,95,52,55,0);
       let icondownimgg = 1;
      for (let x = 0; x < 3; x++) {
         libbufferX = `${3 << (Math.min(3, moonM.length))}`;
      }
      do {
          let libhermes1 = String.fromCharCode(115,101,112,105,97,95,55,95,52,0);
          let downloade = 5.0;
          let reactnavigationl = 1.0;
          let suggestiont = 2;
          let iconsubssuccess5 = false;
         moonM = `${1 | libbufferX.length}`;
         libhermes1 = `${3 >> (Math.min(Math.abs(parseInt(`${downloade}`)), 4))}`;
         downloade += parseFloat(`${libhermes1.length}`);
         reactnavigationl /= Math.max(1, (parseFloat(`${parseInt(`${reactnavigationl}`) >> (Math.min(5, Math.abs((iconsubssuccess5 ? 1 : 2))))}`)));
         suggestiont ^= suggestiont;
         iconsubssuccess5 = 9.84 < downloade;
         if (moonM.length == 1646410) {
            break;
         }
      } while ((5 < moonM.length) && (moonM.length == 1646410));
      if ((libbufferX.length - 5) < 1) {
         libbufferX += `${libbufferX.length}`;
      }
          let buttonF = 0.0;
          let attributedstring2 = 0.0;
         libbufferX += `${(libbufferX == String.fromCharCode(74,0) ? moonM.length : libbufferX.length)}`;
         buttonF -= 3 / (Math.max(3, parseInt(`${buttonF}`)));
         attributedstring2 /= Math.max(parseFloat(`${3 / (Math.max(2, parseInt(`${attributedstring2}`)))}`), 3);
      while (3 >= libbufferX.length && moonM != String.fromCharCode(81,0)) {
         moonM += `${moonM.length}`;
         break;
      }
      while ((icondownimgg % (Math.max(10, libbufferX.length))) > 3 || (libbufferX.length % (Math.max(4, icondownimgg))) > 3) {
         libbufferX += `${(String.fromCharCode(75,0) == moonM ? icondownimgg : moonM.length)}`;
         break;
      }
      for (let l = 0; l < 2; l++) {
         moonM += `${icondownimgg << (Math.min(moonM.length, 3))}`;
      }
         libbufferX += `${moonM.length}`;
      if (5 == libbufferX.length) {
         libbufferX += `${libbufferX.length + 2}`;
      }
      iconscheduleX -= iconscheduleX + parseInt(`${icondefaultthumbnailS}`);
      break;
   }
   for (let a = 0; a < 1; a++) {
      fullscreenmaxC = `${iconscheduleX + 2}`;
   }
   if (!giftbuttonW.endsWith(fullscreenmaxC)) {
      giftbuttonW += `${iconscheduleX}`;
   }
   do {
      fullscreenmaxC = `${2 & episodesn.size}`;
      if (String.fromCharCode(102,107,55,99,118,0) == fullscreenmaxC) {
         break;
      }
   } while ((String.fromCharCode(102,107,55,99,118,0) == fullscreenmaxC) && ((fullscreenmaxC.length ^ episodesn.size) < 2 || (episodesn.size ^ fullscreenmaxC.length) < 2));

};

const removeAllListeners = () => {
       let thumbnailn = 4.0;
    let humidityb = String.fromCharCode(97,114,101,118,101,114,115,101,95,121,95,52,55,0);
    let whitetickA = String.fromCharCode(117,110,115,105,103,110,101,100,95,114,95,57,54,0);
    let pluse = 4.0;
    let step0 = 5;
    let buildb = 3.0;
    let downloaderL = new Map([[String.fromCharCode(115,116,97,99,107,116,114,97,99,101,95,100,95,49,56,0),String.fromCharCode(100,101,112,114,101,99,105,97,116,101,100,104,95,118,95,52,48,0)], [String.fromCharCode(119,95,56,49,95,99,111,100,101,99,112,114,105,118,0),String.fromCharCode(112,111,119,101,114,101,100,95,52,95,55,52,0)], [String.fromCharCode(116,101,110,115,105,111,110,95,52,95,52,50,0),String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,111,95,57,0)]]);
    let componentregistryR = 3;
    let darks = String.fromCharCode(106,95,49,51,95,103,97,112,115,0);
    let with_iV = new Map([[String.fromCharCode(101,95,55,54,95,103,114,97,112,104,105,99,115,0),548], [String.fromCharCode(98,95,49,52,95,100,101,102,115,0),751]]);
    let notificationV = String.fromCharCode(111,95,49,57,95,112,108,97,121,0);
    let rewindi = String.fromCharCode(121,95,56,50,95,116,114,117,116,104,0);
    let mbjscommonQ = String.fromCharCode(98,105,116,115,112,117,108,115,101,115,95,56,95,52,54,0);
    let fillr = String.fromCharCode(108,114,111,110,100,95,107,95,51,0);
    let penaltyshootl = 3.0;
   if (4 == componentregistryR) {
       let wind8 = 2;
         wind8 &= wind8;
      if (wind8 > 2) {
         wind8 <<= Math.min(5, Math.abs(wind8));
      }
         wind8 |= 3 | wind8;
      componentregistryR >>= Math.min(Math.abs(wind8), 3);
   }
   do {
       let security7 = new Map([[String.fromCharCode(116,95,57,95,100,110,115,108,97,98,101,108,0),480], [String.fromCharCode(101,95,52,49,95,105,110,99,108,117,100,105,110,103,0),469]]);
       let popupx = String.fromCharCode(103,95,56,51,95,112,117,98,101,120,112,0);
       let libglogy = [705, 781];
       let adultf = String.fromCharCode(112,114,111,106,101,99,116,101,100,95,113,95,57,57,0);
      if (security7[`${libglogy.length}`] != null) {
         security7[popupx] = 3 >> (Math.min(3, popupx.length));
      }
      for (let w = 0; w < 2; w++) {
          let calendarP = 4.0;
          let yellowcirclebgR = String.fromCharCode(98,110,98,105,110,112,97,100,95,111,95,49,57,0);
          let pangle5 = 5.0;
          let nbatrophyD = String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,95,100,95,56,54,0);
          let pangleJ = String.fromCharCode(109,95,56,50,95,97,117,116,111,114,111,116,97,116,105,111,110,0);
         popupx += "2";
         calendarP += (parseFloat(`${yellowcirclebgR == String.fromCharCode(112,0) ? nbatrophyD.length : yellowcirclebgR.length}`));
         pangle5 *= (nbatrophyD == String.fromCharCode(116,0) ? nbatrophyD.length : yellowcirclebgR.length);
         pangleJ += `${3 >> (Math.min(4, nbatrophyD.length))}`;
      }
      do {
          let calendark = false;
          let sendN = new Map([[String.fromCharCode(100,105,115,99,111,114,100,0),148], [String.fromCharCode(97,95,49,57,0),870]]);
          let animatione = 5.0;
          let stores = [122, 567];
          let viewerc = String.fromCharCode(102,97,105,108,115,95,100,95,49,57,0);
         libglogy = [popupx.length];
         calendark = !calendark;
         sendN = new Map([[viewerc, ((calendark ? 3 : 3))]]);
         animatione *= 1;
         stores = [1 >> (Math.min(5, Math.abs(sendN.size)))];
         viewerc += "1";
         if (4394158 == libglogy.length) {
            break;
         }
      } while ((4394158 == libglogy.length) && (adultf.endsWith(`${libglogy.length}`)));
      if (libglogy.length > 5) {
          let neonD = 0;
          let alert_ = true;
          let iconsubssuccessa = 5;
         libglogy = [(String.fromCharCode(115,0) == popupx ? popupx.length : neonD)];
         neonD >>= Math.min(4, Math.abs(((alert_ ? 3 : 1) | iconsubssuccessa)));
         alert_ = !alert_;
         iconsubssuccessa &= iconsubssuccessa;
      }
          let watchnowbg1 = new Map([[String.fromCharCode(106,95,49,52,95,117,110,101,115,99,97,112,101,0),String.fromCharCode(106,95,54,52,95,97,116,111,109,105,99,97,108,108,121,0)], [String.fromCharCode(101,113,117,105,118,97,108,101,110,116,0),String.fromCharCode(100,105,97,103,110,111,115,116,105,99,115,95,120,95,53,50,0)]]);
          let flagP = new Map([[String.fromCharCode(111,110,101,95,97,95,52,51,0),true ], [String.fromCharCode(117,110,108,111,99,107,95,111,95,50,54,0),true ]]);
         security7[`${popupx}`] = 3 & popupx.length;
         watchnowbg1 = new Map([[`${watchnowbg1.size}`, flagP.size >> (Math.min(Math.abs(watchnowbg1.size), 3))]]);
         flagP[`${watchnowbg1.size}`] = 3 / (Math.max(3, flagP.size));
          let predictionl = String.fromCharCode(118,105,100,101,111,99,111,100,101,99,95,97,95,53,48,0);
         popupx += `${libglogy.length ^ 2}`;
         predictionl = `${predictionl.length}`;
          let annerP = false;
          let injuryG = String.fromCharCode(102,95,50,50,95,100,101,115,104,97,107,101,0);
          let vnewinterstitialw = String.fromCharCode(103,95,55,52,95,112,114,111,106,101,99,116,0);
         libglogy.push(3 * injuryG.length);
         annerP = String.fromCharCode(52,0) == vnewinterstitialw || vnewinterstitialw.length <= 86;
         injuryG = `${(String.fromCharCode(114,0) == vnewinterstitialw ? vnewinterstitialw.length : vnewinterstitialw.length)}`;
          let whitevideoliveJ = [943, 956];
          let vignettew = 3.0;
         security7 = new Map([[`${whitevideoliveJ.length}`, whitevideoliveJ.length ^ popupx.length]]);
         vignettew *= parseInt(`${vignettew}`) * parseInt(`${vignettew}`);
      if (security7.size == libglogy.length) {
         security7[popupx] = (String.fromCharCode(95,0) == popupx ? popupx.length : security7.size);
      }
      while (!popupx.endsWith(`${security7.size}`)) {
         popupx = `${adultf.length + security7.size}`;
         break;
      }
          let libavdevicev = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,95,55,95,55,0);
          let mutedX = String.fromCharCode(98,95,52,52,95,101,118,101,110,0);
          let plash0 = [479, 867];
         popupx = `${(adultf == String.fromCharCode(87,0) ? adultf.length : libavdevicev.length)}`;
         libavdevicev = `${plash0.length}`;
         mutedX = `${(mutedX == String.fromCharCode(55,0) ? mutedX.length : plash0.length)}`;
      while ((1 | popupx.length) == 3) {
          let pathj = String.fromCharCode(113,95,51,54,95,116,104,101,0);
          let mbridges = [977, 207];
          let ajaxe = 2.0;
          let episodee = 3.0;
          let libloggerT = 0;
         popupx = `${libglogy.length << (Math.min(Math.abs(1), 4))}`;
         pathj += `${parseInt(`${episodee}`)}`;
         mbridges.push(2 / (Math.max(parseInt(`${ajaxe}`), 10)));
         ajaxe /= Math.max(3, parseInt(`${episodee}`) >> (Math.min(Math.abs(2), 4)));
         libloggerT ^= mbridges.length;
         break;
      }
      whitetickA += `${rewindi.length ^ darks.length}`;
      if (whitetickA == String.fromCharCode(114,112,118,106,119,104,0)) {
         break;
      }
   } while ((2 < (whitetickA.length * with_iV.size)) && (whitetickA == String.fromCharCode(114,112,118,106,119,104,0)));
   for (let e = 0; e < 1; e++) {
      rewindi = `${2 / (Math.max(2, parseInt(`${buildb}`)))}`;
   }
      notificationV += `${notificationV.length}`;

  ATBannerEventEmitter.removeAllListeners(onBannerLoaded);
   if (3.91 == pluse) {
      pluse *= darks.length % (Math.max(5, with_iV.size));
   }
       let home9 = 1.0;
         home9 *= parseFloat(`${parseInt(`${home9}`)}`);
          let fillF = 0.0;
          let catagorye = String.fromCharCode(98,95,57,53,95,115,118,101,99,116,111,114,0);
          let traminix = 2.0;
         home9 -= parseFloat(`${2}`);
         fillF += (catagorye == String.fromCharCode(113,0) ? catagorye.length : parseInt(`${traminix}`));
         traminix /= Math.max(parseFloat(`${1}`), 1);
         home9 /= Math.max(parseFloat(`${2}`), 1);
      humidityb += `${parseInt(`${thumbnailn}`)}`;
   do {
      downloaderL[`${componentregistryR}`] = 2;
      if (4809264 == downloaderL.size) {
         break;
      }
   } while ((4809264 == downloaderL.size) && (!Array.from(downloaderL.values()).includes(componentregistryR)));
   if (Array.from(downloaderL.values()).includes(componentregistryR)) {
      downloaderL = new Map([[`${downloaderL.size}`, parseInt(`${pluse}`) + 3]]);
   }

  ATBannerEventEmitter.removeAllListeners(onBannerFail);
   while ((rewindi.length + 1) < 4 && 4.56 < (thumbnailn / 2.70)) {
       let activityQ = 3.0;
       let lightV = [255, 711, 397];
       let shirt1 = String.fromCharCode(102,95,52,51,95,117,115,97,98,108,101,0);
      if (2 <= (1 >> (Math.min(3, lightV.length))) && 1.63 <= (lightV.length + activityQ)) {
         lightV = [lightV.length];
      }
         lightV.push(3 * lightV.length);
          let diceE = String.fromCharCode(118,109,97,102,95,55,95,54,56,0);
          let gradleh = true;
          let subin9 = [197, 165, 25];
         shirt1 = `${3 << (Math.min(1, shirt1.length))}`;
         diceE = `${(3 | (gradleh ? 4 : 2))}`;
         gradleh = (38 == ((!gradleh ? diceE.length : 38) / (Math.max(6, diceE.length))));
         subin9.push(diceE.length | subin9.length);
      if (!shirt1.includes(`${lightV.length}`)) {
         shirt1 += `${lightV.length}`;
      }
       let iconbelld = String.fromCharCode(112,95,56,95,117,110,107,101,121,101,100,0);
      do {
          let iconclosewhitebgA = new Map([[String.fromCharCode(99,111,110,116,97,105,110,95,113,95,55,52,0),559], [String.fromCharCode(109,112,105,98,110,95,120,95,53,55,0),908], [String.fromCharCode(103,101,116,95,50,95,55,52,0),462]]);
         iconbelld = `${iconclosewhitebgA.size}`;
         if (iconbelld == String.fromCharCode(108,103,107,54,56,0)) {
            break;
         }
      } while ((iconbelld == String.fromCharCode(108,103,107,54,56,0)) && (3.85 >= activityQ));
      while (!shirt1.startsWith(`${iconbelld.length}`)) {
         iconbelld += `${(String.fromCharCode(113,0) == shirt1 ? shirt1.length : iconbelld.length)}`;
         break;
      }
      while (shirt1.length <= 3) {
         iconbelld += `${shirt1.length + 3}`;
         break;
      }
      while ((lightV.length % (Math.max(iconbelld.length, 7))) < 5 || (iconbelld.length % (Math.max(5, 6))) < 5) {
         lightV = [parseInt(`${activityQ}`) % 3];
         break;
      }
      thumbnailn *= 3;
      break;
   }
       let inactiveb = true;
      if (!inactiveb) {
         inactiveb = !inactiveb;
      }
      do {
         inactiveb = (!inactiveb ? inactiveb : !inactiveb);
         if (inactiveb ? !inactiveb : inactiveb) {
            break;
         }
      } while ((inactiveb ? !inactiveb : inactiveb) && (!inactiveb));
         inactiveb = inactiveb && !inactiveb;
      darks = `${with_iV.size | 2}`;
      step0 /= Math.max(1, componentregistryR);
   while ((3 + componentregistryR) > 3 && (parseInt(`${pluse}`) / (Math.max(1, componentregistryR))) > 3) {
      pluse /= Math.max(4, componentregistryR);
      break;
   }

  ATBannerEventEmitter.removeAllListeners(onBannerCloseButtonTapped);
       let textP = new Map([[String.fromCharCode(102,95,50,52,95,115,113,117,97,114,101,100,0),true ], [String.fromCharCode(102,117,108,102,105,108,108,101,100,95,50,95,57,48,0),true ]]);
          let arrowdown8 = String.fromCharCode(100,105,115,116,112,111,105,110,116,95,53,95,57,48,0);
          let tempnodatay = String.fromCharCode(118,95,57,53,95,112,114,105,110,116,0);
          let libtobq = 1;
         textP = new Map([[`${textP.size}`, arrowdown8.length - textP.size]]);
         arrowdown8 = `${libtobq % (Math.max(3, tempnodatay.length))}`;
         tempnodatay = `${tempnodatay.length}`;
         libtobq += 2 ^ tempnodatay.length;
         textP = new Map([[`${textP.size}`, textP.size]]);
         textP[`${textP.size}`] = 2 << (Math.min(1, Math.abs(textP.size)));
      humidityb = `${2 << (Math.min(4, rewindi.length))}`;
   if (notificationV.length < with_iV.size) {
       let penaltygoalT = String.fromCharCode(108,95,51,48,95,101,118,101,110,0);
      while (5 <= penaltygoalT.length) {
         penaltygoalT = `${penaltygoalT.length}`;
         break;
      }
         penaltygoalT = "3";
      while (penaltygoalT != penaltygoalT) {
         penaltygoalT += `${penaltygoalT.length / 1}`;
         break;
      }
      with_iV[`${componentregistryR}`] = componentregistryR;
   }
      humidityb += `${humidityb.length * 1}`;
       let profileactiveR = String.fromCharCode(109,101,116,97,98,111,100,121,0);
       let with_282 = String.fromCharCode(103,95,52,95,97,99,99,117,114,97,99,121,0);
       let defaultplayerimgK = String.fromCharCode(114,95,52,55,95,115,101,103,105,100,0);
         profileactiveR += `${profileactiveR.length | 1}`;
         profileactiveR += `${defaultplayerimgK.length - with_282.length}`;
         profileactiveR = `${with_282.length + defaultplayerimgK.length}`;
      do {
         with_282 = `${defaultplayerimgK.length}`;
         if (with_282 == String.fromCharCode(50,95,109,0)) {
            break;
         }
      } while ((with_282.length < defaultplayerimgK.length) && (with_282 == String.fromCharCode(50,95,109,0)));
         with_282 = `${1 ^ profileactiveR.length}`;
      while (with_282 == String.fromCharCode(74,0)) {
         profileactiveR += `${profileactiveR.length}`;
         break;
      }
         profileactiveR += `${with_282.length >> (Math.min(defaultplayerimgK.length, 1))}`;
          let chartu = String.fromCharCode(109,111,99,107,101,100,95,119,95,54,0);
         defaultplayerimgK += `${profileactiveR.length + 1}`;
         chartu += `${chartu.length << (Math.min(chartu.length, 1))}`;
      for (let i = 0; i < 3; i++) {
         defaultplayerimgK += `${with_282.length}`;
      }
      darks += `${2 >> (Math.min(5, with_282.length))}`;

  ATBannerEventEmitter.removeAllListeners(onBannerClick);
      darks += `${componentregistryR}`;
      darks = `${darks.length}`;
   while (3.57 < (thumbnailn + componentregistryR)) {
      componentregistryR <<= Math.min(4, Math.abs(2));
      break;
   }
   while (2 > (1 | darks.length) || (pluse - 2.31) > 2.77) {
      darks += `${humidityb.length / (Math.max(1, whitetickA.length))}`;
      break;
   }

  ATBannerEventEmitter.removeAllListeners(onBannerShow);
   do {
       let nodep = 1.0;
       let f_hashy = 5.0;
       let textlayoutmanagerl = String.fromCharCode(120,95,54,95,100,105,115,112,101,110,115,101,114,0);
       let singapore1 = 2.0;
          let customu = 4;
          let sendU = true;
          let utilsd = 3.0;
         nodep -= (parseFloat(`${(sendU ? 4 : 5) & parseInt(`${utilsd}`)}`));
         customu <<= Math.min(Math.abs(customu % 3), 4);
         sendU = (customu + customu) > 31;
      for (let t = 0; t < 2; t++) {
          let policyU = new Map([[String.fromCharCode(98,105,116,109,97,115,107,95,114,95,49,49,0),387], [String.fromCharCode(116,97,114,103,101,116,101,100,95,121,95,55,55,0),626], [String.fromCharCode(100,95,53,95,97,118,105,100,0),981]]);
          let backwhiteW = 5.0;
          let liveV = 3;
          let playE = 2.0;
         f_hashy += parseFloat(`${parseInt(`${backwhiteW}`) << (Math.min(Math.abs(policyU.size), 1))}`);
         policyU[`${liveV}`] = parseInt(`${playE}`);
         backwhiteW /= Math.max(2, parseInt(`${playE}`) << (Math.min(1, Math.abs(liveV))));
      }
         f_hashy += parseFloat(`${2 / (Math.max(9, parseInt(`${nodep}`)))}`);
      while ((singapore1 * 3.30) <= 1.94 || 1.43 <= (singapore1 + 3.30)) {
         singapore1 -= parseInt(`${nodep}`) ^ 3;
         break;
      }
      for (let l = 0; l < 1; l++) {
         textlayoutmanagerl = `${textlayoutmanagerl.length + parseInt(`${f_hashy}`)}`;
      }
         singapore1 /= Math.max(3, 2);
      for (let e = 0; e < 3; e++) {
          let langkeyl = 3.0;
          let sendn = String.fromCharCode(112,108,97,121,103,114,111,117,110,100,95,120,95,56,49,0);
          let shootnogoal2 = String.fromCharCode(108,95,50,57,95,104,101,97,114,98,101,97,116,0);
          let floater0 = String.fromCharCode(108,101,100,103,101,114,95,48,95,52,53,0);
         textlayoutmanagerl = `${(String.fromCharCode(98,0) == textlayoutmanagerl ? sendn.length : textlayoutmanagerl.length)}`;
         langkeyl += shootnogoal2.length;
         sendn = `${parseInt(`${langkeyl}`)}`;
         shootnogoal2 = `${shootnogoal2.length ^ floater0.length}`;
         floater0 = `${shootnogoal2.length % (Math.max(2, 1))}`;
      }
          let whistleU = String.fromCharCode(108,105,116,101,114,97,108,95,100,95,51,52,0);
          let reddownarrowV = new Map([[String.fromCharCode(113,95,51,48,95,109,111,122,97,114,116,0),535], [String.fromCharCode(113,95,49,50,95,115,111,108,117,116,105,111,110,0),202], [String.fromCharCode(122,95,57,50,95,102,105,108,116,101,114,0),324]]);
          let reade = true;
         textlayoutmanagerl = `${parseInt(`${nodep}`)}`;
         whistleU += `${3 & whistleU.length}`;
         reddownarrowV[`${reade}`] = reddownarrowV.size;
          let chartB = [108, 605, 672];
          let showless5 = String.fromCharCode(114,95,53,53,95,114,101,115,0);
         nodep -= (parseFloat(`${showless5 == String.fromCharCode(67,0) ? parseInt(`${f_hashy}`) : showless5.length}`));
         chartB.push(chartB.length / (Math.max(6, chartB.length)));
      for (let s = 0; s < 1; s++) {
         singapore1 += parseInt(`${f_hashy}`) << (Math.min(Math.abs(3), 1));
      }
      do {
          let langg = 3;
          let orange2 = String.fromCharCode(115,99,111,112,101,95,98,95,54,53,0);
         textlayoutmanagerl += `${2 * langg}`;
         langg %= Math.max(4, orange2.length);
         orange2 += `${orange2.length & 1}`;
         if (String.fromCharCode(109,106,56,104,108,48,113,50,106,54,0) == textlayoutmanagerl) {
            break;
         }
      } while ((1 > (textlayoutmanagerl.length << (Math.min(Math.abs(3), 2))) && 3 > (parseInt(`${f_hashy}`) * textlayoutmanagerl.length)) && (String.fromCharCode(109,106,56,104,108,48,113,50,106,54,0) == textlayoutmanagerl));
          let zoomO = String.fromCharCode(118,109,115,108,95,104,95,51,0);
         nodep += parseFloat(`${parseInt(`${singapore1}`)}`);
         zoomO = "3";
      buildb *= parseFloat(`${darks.length}`);
      if (3512206.0 == buildb) {
         break;
      }
   } while ((3512206.0 == buildb) && (5.68 < (parseFloat(`${whitetickA.length}`) - buildb)));
   for (let r = 0; r < 1; r++) {
      notificationV = `${parseInt(`${thumbnailn}`) % 2}`;
   }
       let libreactnativeblobE = String.fromCharCode(110,95,50,51,95,115,117,98,116,114,97,99,116,105,110,103,0);
         libreactnativeblobE = `${libreactnativeblobE.length}`;
      if (libreactnativeblobE != libreactnativeblobE) {
         libreactnativeblobE += `${libreactnativeblobE.length}`;
      }
         libreactnativeblobE = "2";
      with_iV[whitetickA] = rewindi.length;
   for (let r = 0; r < 1; r++) {
      buildb *= parseFloat(`${whitetickA.length}`);
   }

  ATBannerEventEmitter.removeAllListeners(onBannerRefresh);
   do {
       let downloadr = String.fromCharCode(108,111,103,103,101,114,95,48,95,54,53,0);
       let referrerh = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,115,95,105,95,56,53,0);
         referrerh = `${referrerh.length}`;
      if (3 <= referrerh.length) {
         referrerh = `${referrerh.length - 3}`;
      }
      while (downloadr != String.fromCharCode(88,0)) {
         referrerh += `${downloadr.length << (Math.min(Math.abs(1), 2))}`;
         break;
      }
       let controlsa = [String.fromCharCode(108,95,54,57,95,105,110,116,108,0), String.fromCharCode(115,116,97,114,95,97,95,52,54,0), String.fromCharCode(111,102,102,115,99,114,101,101,110,95,99,95,51,49,0)];
       let greym = [String.fromCharCode(113,95,54,51,95,115,117,98,112,97,116,104,0), String.fromCharCode(119,95,56,49,95,119,120,109,109,116,101,115,116,0)];
         downloadr = `${controlsa.length}`;
       let formJ = false;
       let step8 = true;
      humidityb += "1";
      if (2553320 == humidityb.length) {
         break;
      }
   } while ((2 >= humidityb.length) && (2553320 == humidityb.length));
       let layout6 = String.fromCharCode(99,95,54,56,95,115,105,120,116,97,112,0);
       let strz = [60, 574, 841];
       let matchk = false;
         matchk = strz.includes(matchk);
      for (let l = 0; l < 2; l++) {
          let largesoundb = String.fromCharCode(99,111,108,108,97,112,115,101,100,95,56,95,53,50,0);
          let ballW = 5.0;
          let neonk = 3.0;
          let catalogv = [String.fromCharCode(100,105,115,99,114,101,116,101,95,103,95,51,57,0), String.fromCharCode(108,111,99,97,108,97,100,100,114,95,114,95,49,48,0)];
         matchk = catalogv.includes(matchk);
         largesoundb += `${parseInt(`${ballW}`) | largesoundb.length}`;
         ballW /= Math.max(3, (String.fromCharCode(85,0) == largesoundb ? largesoundb.length : parseInt(`${ballW}`)));
         neonk -= parseInt(`${ballW}`) ^ largesoundb.length;
         catalogv = [parseInt(`${ballW}`) / (Math.max(2, 5))];
      }
      for (let r = 0; r < 2; r++) {
          let time_8_6 = 1.0;
         matchk = (((matchk ? 21 : layout6.length) - layout6.length) >= 21);
         time_8_6 /= Math.max(2, parseFloat(`${1}`));
      }
      do {
          let fillFb = String.fromCharCode(99,109,97,112,95,110,95,51,0);
          let template_poi = String.fromCharCode(104,97,114,112,101,110,95,54,95,54,49,0);
         matchk = 21 == template_poi.length;
         fillFb = `${fillFb.length | fillFb.length}`;
         template_poi += `${fillFb.length * fillFb.length}`;
         if (matchk ? !matchk : matchk) {
            break;
         }
      } while ((matchk ? !matchk : matchk) && (!matchk));
       let disconnectedlogoC = 3.0;
         layout6 += `${layout6.length << (Math.min(5, Math.abs(parseInt(`${disconnectedlogoC}`))))}`;
         disconnectedlogoC += 2 ^ strz.length;
      for (let e = 0; e < 2; e++) {
          let l_centerh = String.fromCharCode(99,101,108,116,95,120,95,51,48,0);
          let defaultpredictionprofileC = String.fromCharCode(115,117,98,99,108,97,115,115,101,115,95,97,95,56,48,0);
         strz = [strz.length];
         l_centerh = `${l_centerh.length & 2}`;
         defaultpredictionprofileC += `${defaultpredictionprofileC.length / 2}`;
      }
         matchk = strz.includes(matchk);
      with_iV = new Map([[`${buildb}`, (layout6 == String.fromCharCode(75,0) ? parseInt(`${buildb}`) : layout6.length)]]);
      downloaderL = new Map([[whitetickA, 2]]);
   do {
      buildb -= parseFloat(`${whitetickA.length}`);
      if (545695.0 == buildb) {
         break;
      }
   } while ((545695.0 == buildb) && (1 <= whitetickA.length));

  ATBannerEventEmitter.removeAllListeners(onBannerRefreshFail);
      buildb *= parseFloat(`${3}`);
       let watchnowbg0 = 5.0;
      do {
         watchnowbg0 += 2;
         if (3284127.0 == watchnowbg0) {
            break;
         }
      } while (((5.5 - watchnowbg0) >= 5.71 || (watchnowbg0 - watchnowbg0) >= 5.5) && (3284127.0 == watchnowbg0));
          let j_centerM = [270, 810, 730];
         watchnowbg0 -= 2;
         j_centerM.push(j_centerM.length + 3);
      do {
         watchnowbg0 += parseInt(`${watchnowbg0}`);
         if (watchnowbg0 == 1497196.0) {
            break;
         }
      } while (((watchnowbg0 / (Math.max(watchnowbg0, 8))) > 3.4) && (watchnowbg0 == 1497196.0));
      notificationV += `${(darks == String.fromCharCode(57,0) ? darks.length : componentregistryR)}`;
      darks = `${3 | whitetickA.length}`;
   for (let y = 0; y < 1; y++) {
      penaltyshootl += darks.length | parseInt(`${buildb}`);
   }

}

function createLoadAdSize(width, height) {
       let constantst = String.fromCharCode(107,101,121,118,97,108,95,121,95,51,54,0);
    let auto_30 = [236, 159];
    let animationZ = false;
    let smallorangemann = String.fromCharCode(122,95,53,51,95,114,98,115,112,0);
    let iconrightorangeO = 4.0;
    let empty9 = [String.fromCharCode(105,105,114,102,105,108,116,101,114,95,97,95,50,52,0), String.fromCharCode(103,95,56,48,95,115,117,109,100,105,102,102,0), String.fromCharCode(118,105,115,105,98,105,108,105,116,121,95,54,95,50,53,0)];
    let main_jX = String.fromCharCode(109,97,112,95,99,95,50,53,0);
    let encryptork = String.fromCharCode(108,105,115,116,110,101,114,115,95,107,95,53,51,0);
    let chartv = true;
    let moviesQ = false;
    let time_dg = new Map([[String.fromCharCode(100,95,48,95,116,114,105,99,107,108,101,0),295], [String.fromCharCode(118,95,51,55,95,118,101,114,105,102,121,105,110,103,0),884], [String.fromCharCode(105,95,57,51,95,117,100,112,0),400]]);
   for (let o = 0; o < 3; o++) {
      smallorangemann += `${main_jX.length | empty9.length}`;
   }
      iconrightorangeO /= Math.max(2, (parseFloat(`${main_jX == String.fromCharCode(88,0) ? main_jX.length : empty9.length}`)));
   do {
       let libimagepipelineA = String.fromCharCode(117,112,108,111,97,100,95,107,95,53,55,0);
         libimagepipelineA = `${1 | libimagepipelineA.length}`;
         libimagepipelineA += `${(libimagepipelineA == String.fromCharCode(82,0) ? libimagepipelineA.length : libimagepipelineA.length)}`;
       let downloaderz = 1;
       let anythink6 = 5;
      animationZ = empty9.length > 6;
      if (animationZ ? !animationZ : animationZ) {
         break;
      }
   } while ((animationZ) && (animationZ ? !animationZ : animationZ));
      constantst = `${main_jX.length}`;

    var loadAdSize = {};
       let showmoreQ = String.fromCharCode(115,117,98,98,108,111,99,107,115,95,103,95,53,53,0);
       let componentf = [String.fromCharCode(113,95,49,48,95,103,101,111,116,97,103,115,0), String.fromCharCode(103,95,56,53,95,116,109,112,108,0), String.fromCharCode(116,114,101,97,116,95,102,95,52,49,0)];
       let package_an = 1.0;
          let anytimeK = 1;
         showmoreQ = `${anytimeK | parseInt(`${package_an}`)}`;
      do {
         package_an += parseFloat(`${1}`);
         if (package_an == 2020573.0) {
            break;
         }
      } while ((package_an == 2020573.0) && (2.36 == (parseFloat(`${componentf.length}`) * package_an)));
      while (5 >= (showmoreQ.length + 3)) {
         componentf = [showmoreQ.length];
         break;
      }
       let main_hr = 0;
       let subbasketballplayerJ = 4;
      while (1 < (subbasketballplayerJ % 2) && (componentf.length % 2) < 4) {
          let bingE = String.fromCharCode(108,95,49,51,95,117,110,116,114,117,115,116,101,100,0);
          let pnewsshares = 0;
          let moreQ = [String.fromCharCode(121,95,52,48,95,116,114,97,110,115,112,111,115,101,120,0), String.fromCharCode(102,101,116,99,104,101,115,95,112,95,49,53,0)];
          let storew = [317, 701];
         componentf = [storew.length >> (Math.min(1, Math.abs(main_hr)))];
         bingE += `${pnewsshares}`;
         pnewsshares >>= Math.min(3, Math.abs(pnewsshares ^ bingE.length));
         moreQ = [pnewsshares];
         storew = [1 >> (Math.min(3, bingE.length))];
         break;
      }
      if (4.7 > package_an) {
          let subbasketballplayern = 1.0;
          let iconwatchnowj = [556, 449];
         package_an *= parseFloat(`${main_hr & parseInt(`${subbasketballplayern}`)}`);
         subbasketballplayern += iconwatchnowj.length - iconwatchnowj.length;
      }
          let manifestv = 0.0;
         showmoreQ += `${componentf.length % (Math.max(3, 2))}`;
         manifestv -= parseFloat(`${parseInt(`${manifestv}`)}`);
         main_hr /= Math.max(subbasketballplayerJ, 3);
          let currentc = String.fromCharCode(113,95,54,50,95,112,107,99,115,0);
          let penaltyy = 2.0;
          let placementJ = new Map([[String.fromCharCode(97,101,115,111,112,116,95,115,95,53,48,0),106], [String.fromCharCode(120,95,53,52,95,115,105,110,116,0),677], [String.fromCharCode(101,95,50,48,95,117,110,114,105,115,101,0),239]]);
         main_hr ^= 1;
         currentc = `${(String.fromCharCode(73,0) == currentc ? parseInt(`${penaltyy}`) : currentc.length)}`;
         penaltyy *= currentc.length;
         placementJ[`${penaltyy}`] = placementJ.size << (Math.min(2, Math.abs(parseInt(`${penaltyy}`))));
      iconrightorangeO /= Math.max(parseFloat(`${main_jX.length}`), 5);
      empty9.push(encryptork.length);
       let basketballC = [797, 32];
       let hookR = true;
       let actions8 = String.fromCharCode(113,109,105,110,109,97,120,95,51,95,57,0);
         hookR = String.fromCharCode(105,0) == actions8 || 79 < basketballC.length;
          let iconviewerD = String.fromCharCode(100,101,112,116,104,95,115,95,51,51,0);
         hookR = !hookR;
         iconviewerD = `${iconviewerD.length}`;
          let iconarrowrightJ = 0;
          let rewardh = new Map([[String.fromCharCode(112,111,115,116,102,105,120,95,122,95,55,55,0),false ], [String.fromCharCode(117,105,110,116,95,50,95,53,52,0),true ]]);
         basketballC.push(1 * rewardh.size);
         iconarrowrightJ ^= iconarrowrightJ;
         rewardh[`${iconarrowrightJ}`] = iconarrowrightJ * 2;
      for (let p = 0; p < 2; p++) {
         actions8 += `${3 + basketballC.length}`;
      }
      if (hookR && (2 >> (Math.min(5, basketballC.length))) < 4) {
         basketballC = [actions8.length >> (Math.min(Math.abs(1), 5))];
      }
         actions8 += "3";
          let homeinactiveW = String.fromCharCode(121,95,51,49,95,103,114,101,101,110,0);
          let borderlessl = 4;
         basketballC.push(basketballC.length);
         homeinactiveW += `${(homeinactiveW == String.fromCharCode(79,0) ? homeinactiveW.length : borderlessl)}`;
         borderlessl <<= Math.min(Math.abs(borderlessl << (Math.min(Math.abs(3), 3))), 2);
      if (4 <= (basketballC.length + actions8.length) && (4 + basketballC.length) <= 5) {
         actions8 = `${((hookR ? 1 : 1))}`;
      }
         hookR = !hookR;
      constantst += `${(encryptork == String.fromCharCode(76,0) ? encryptork.length : (hookR ? 3 : 1))}`;
      encryptork += "3";

    loadAdSize["width"] = width;
   if (!main_jX.endsWith(`${iconrightorangeO}`)) {
      iconrightorangeO /= Math.max(5, parseFloat(`${constantst.length | main_jX.length}`));
   }
      smallorangemann = `${smallorangemann.length * parseInt(`${iconrightorangeO}`)}`;
   do {
      constantst = "2";
      if (String.fromCharCode(105,52,114,53,114,121,109,51,0) == constantst) {
         break;
      }
   } while ((4 >= constantst.length && !animationZ) && (String.fromCharCode(105,52,114,53,114,121,109,51,0) == constantst));
   while (smallorangemann.includes(`${empty9.length}`)) {
      smallorangemann = `${(String.fromCharCode(111,0) == main_jX ? empty9.length : main_jX.length)}`;
      break;
   }

    loadAdSize["height"] = height;
      main_jX = `${1 & smallorangemann.length}`;
      animationZ = main_jX == String.fromCharCode(52,0);
       let twitterA = String.fromCharCode(105,95,55,95,105,110,100,105,118,105,100,117,97,108,0);
       let issubH = 4;
       let bingA = String.fromCharCode(102,95,50,95,100,105,115,112,108,97,121,101,100,0);
          let agreementI = 0.0;
          let send9 = String.fromCharCode(119,95,49,51,95,104,97,110,100,108,101,0);
         bingA = `${twitterA.length}`;
         agreementI *= parseInt(`${agreementI}`) + 1;
         send9 += `${send9.length}`;
       let unselected1 = false;
       let settingq = true;
      if (!unselected1) {
          let dragclosei = String.fromCharCode(109,117,110,108,111,99,107,0);
          let icontransferclubR = [21, 480];
          let valuesG = String.fromCharCode(114,95,57,54,95,102,102,97,116,0);
         settingq = !bingA.startsWith(`${settingq}`);
         dragclosei += `${icontransferclubR.length | 3}`;
         icontransferclubR.push(icontransferclubR.length >> (Math.min(dragclosei.length, 2)));
         valuesG = "1";
      }
      if ((3 ^ twitterA.length) < 1) {
          let predictionbuttonI = String.fromCharCode(103,95,57,57,0);
         twitterA = `${predictionbuttonI.length % 1}`;
      }
       let nativel = 0.0;
      for (let t = 0; t < 2; t++) {
         issubH -= 3 >> (Math.min(2, twitterA.length));
      }
      while (2.6 <= (nativel * issubH)) {
          let smallsound9 = String.fromCharCode(118,105,101,119,95,50,95,57,0);
          let controlsv = String.fromCharCode(112,95,50,50,95,114,101,109,111,116,101,0);
          let armvav = [174, 119];
          let nexti = String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,95,113,95,49,54,0);
          let iconpipshrinkd = String.fromCharCode(119,95,57,57,95,115,104,97,114,112,110,101,115,115,0);
         nativel -= issubH;
         smallsound9 = `${iconpipshrinkd.length / 1}`;
         controlsv += `${controlsv.length}`;
         armvav.push(iconpipshrinkd.length & nexti.length);
         nexti += `${smallsound9.length | nexti.length}`;
         break;
      }
         unselected1 = (issubH % (Math.max(bingA.length, 6))) == 82;
          let coreP = [753, 380];
          let iconclosewhiteC = String.fromCharCode(107,95,55,55,95,98,105,110,107,0);
          let expandC = [898, 347];
         settingq = !unselected1 && nativel == 91.50;
         coreP = [coreP.length];
         iconclosewhiteC = `${expandC.length - iconclosewhiteC.length}`;
         expandC = [(iconclosewhiteC == String.fromCharCode(111,0) ? iconclosewhiteC.length : coreP.length)];
      constantst += "1";
   for (let h = 0; h < 3; h++) {
       let sidei = true;
       let airbnbstaro = String.fromCharCode(109,95,54,52,95,109,111,116,105,111,110,115,101,97,114,99,104,0);
       let reactnavigationX = 3.0;
       let iconpipexpandB = 3;
       let footballfiledlayoutX = false;
      if (!airbnbstaro.includes(`${reactnavigationX}`)) {
         reactnavigationX *= 2;
      }
         airbnbstaro = `${(parseInt(`${reactnavigationX}`) % (Math.max(7, (footballfiledlayoutX ? 1 : 2))))}`;
      while (5.34 <= reactnavigationX && (reactnavigationX / 5.34) <= 5.62) {
         footballfiledlayoutX = 1.71 <= reactnavigationX;
         break;
      }
      if (!airbnbstaro.endsWith(`${footballfiledlayoutX}`)) {
         airbnbstaro += `${((footballfiledlayoutX ? 1 : 5))}`;
      }
         airbnbstaro += `${iconpipexpandB}`;
      if (!sidei && 1 <= airbnbstaro.length) {
          let stepy = [122, 716];
         sidei = !sidei && iconpipexpandB <= 75;
         stepy = [stepy.length + stepy.length];
      }
      if (!sidei && (iconpipexpandB | 2) <= 3) {
          let giflivestreamingF = 1.0;
         sidei = airbnbstaro.startsWith(`${giflivestreamingF}`);
      }
       let nbatrophy5 = 2.0;
       let loginB = 4.0;
         loginB += parseFloat(`${parseInt(`${nbatrophy5}`) | 3}`);
         airbnbstaro = "3";
         footballfiledlayoutX = 2.84 > loginB;
      while (2.88 == nbatrophy5) {
          let controlV = 0.0;
          let libloggerU = true;
          let fillR = false;
          let yellowtoredD = 4.0;
          let infoN = [String.fromCharCode(111,118,101,114,108,97,112,112,101,100,95,50,95,53,52,0), String.fromCharCode(103,100,97,116,97,95,119,95,52,48,0)];
         nbatrophy5 /= Math.max(1, (parseFloat(`${parseInt(`${nbatrophy5}`) / (Math.max(7, (footballfiledlayoutX ? 5 : 4)))}`)));
         controlV *= 1;
         libloggerU = !libloggerU;
         fillR = 46.3 >= yellowtoredD;
         yellowtoredD -= 2;
         infoN = [2 & parseInt(`${controlV}`)];
         break;
      }
         nbatrophy5 *= (parseFloat(`${parseInt(`${reactnavigationX}`) ^ (footballfiledlayoutX ? 2 : 3)}`));
         loginB -= parseFloat(`${1}`);
       let episodesB = 5;
       let profileframeM = 2;
      constantst = `${smallorangemann.length}`;
   }

    return loadAdSize;
   for (let h = 0; h < 3; h++) {
      auto_30 = [((chartv ? 3 : 3))];
   }
   while (smallorangemann.length == 5) {
      smallorangemann += `${empty9.length % (Math.max(1, 10))}`;
      break;
   }
       let placeholdera = 5.0;
       let soundr = 2.0;
         soundr += parseFloat(`${parseInt(`${placeholdera}`)}`);
         placeholdera -= 2;
         soundr *= parseFloat(`${parseInt(`${placeholdera}`)}`);
      do {
          let friendsB = String.fromCharCode(111,110,101,115,95,54,95,50,57,0);
         soundr += parseFloat(`${3 >> (Math.min(5, Math.abs(parseInt(`${placeholdera}`))))}`);
         friendsB += `${friendsB.length}`;
         if (1313982.0 == soundr) {
            break;
         }
      } while ((1313982.0 == soundr) && (3.45 >= placeholdera));
       let armvas = 0.0;
       let pingI = 4.0;
      for (let t = 0; t < 3; t++) {
          let neonR = false;
          let airbnbstarselectede = false;
          let iconstarW = String.fromCharCode(99,104,97,108,108,101,110,103,101,95,109,95,52,51,0);
         pingI -= parseFloat(`${1 / (Math.max(4, parseInt(`${soundr}`)))}`);
         neonR = (airbnbstarselectede ? !neonR : !airbnbstarselectede);
         iconstarW += `${((airbnbstarselectede ? 4 : 4) << (Math.min(iconstarW.length, 5)))}`;
      }
      iconrightorangeO /= Math.max(4, (parseFloat(`${(chartv ? 4 : 1) * empty9.length}`)));
      encryptork += `${2 * main_jX.length}`;

}

function createShowAdRect(x, y, width, height) {
       let teamP = 0;
    let penaltyshootnogoalH = 5;
    let backicony = String.fromCharCode(105,110,118,105,116,101,114,0);
    let rewardvideoe = 5;
    let gifgoalP = 5.0;
    let playershirtK = String.fromCharCode(114,95,56,51,95,117,101,102,97,0);
    let leaguedetailsbgj = true;
    let empty3 = String.fromCharCode(116,111,100,97,121,95,105,95,49,0);
    let mbnative6 = false;
    let orangeclock8 = String.fromCharCode(118,116,114,107,95,115,95,56,57,0);
   do {
      empty3 = `${((leaguedetailsbgj ? 2 : 1))}`;
      if (String.fromCharCode(117,111,97,103,100,111,54,108,57,0) == empty3) {
         break;
      }
   } while ((String.fromCharCode(117,111,97,103,100,111,54,108,57,0) == empty3) && (backicony == String.fromCharCode(85,0)));
   do {
       let hejis = 0.0;
       let znewsy = String.fromCharCode(99,111,110,110,101,99,116,95,104,95,51,54,0);
      if ((4 >> (Math.min(2, znewsy.length))) < 1 && (4 >> (Math.min(3, znewsy.length))) < 5) {
         znewsy = `${parseInt(`${hejis}`)}`;
      }
      if (hejis <= 4.88) {
         hejis -= parseFloat(`${znewsy.length >> (Math.min(Math.abs(3), 2))}`);
      }
      do {
         hejis /= Math.max(2, parseFloat(`${znewsy.length % 3}`));
         if (hejis == 308025.0) {
            break;
         }
      } while (((znewsy.length + 5) <= 2) && (hejis == 308025.0));
         hejis -= parseFloat(`${2 << (Math.min(5, znewsy.length))}`);
         znewsy += "2";
      for (let d = 0; d < 1; d++) {
         znewsy += `${(String.fromCharCode(79,0) == znewsy ? znewsy.length : parseInt(`${hejis}`))}`;
      }
      backicony += `${1 * empty3.length}`;
      if (backicony.length == 818742) {
         break;
      }
   } while ((!backicony.includes(`${gifgoalP}`)) && (backicony.length == 818742));
   for (let g = 0; g < 2; g++) {
       let hometeamfieldA = 2;
       let livenodatabgimgE = 3;
       let emojiheartP = String.fromCharCode(119,95,49,51,95,101,120,115,115,0);
         livenodatabgimgE |= (emojiheartP == String.fromCharCode(90,0) ? livenodatabgimgE : emojiheartP.length);
      if ((2 % (Math.max(5, livenodatabgimgE))) > 2 || (livenodatabgimgE % (Math.max(hometeamfieldA, 4))) > 2) {
          let membershipK = 1.0;
          let nterstitiald = 5;
         hometeamfieldA -= 1;
         membershipK += nterstitiald + 3;
         nterstitiald /= Math.max(3, parseInt(`${membershipK}`) << (Math.min(4, Math.abs(1))));
      }
         emojiheartP = `${emojiheartP.length}`;
      while (livenodatabgimgE <= hometeamfieldA) {
         hometeamfieldA <<= Math.min(Math.abs(emojiheartP.length * livenodatabgimgE), 3);
         break;
      }
       let stylea = new Map([[String.fromCharCode(101,95,53,56,95,114,101,115,111,108,118,101,114,115,0),280], [String.fromCharCode(103,95,49,51,95,110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,0),314]]);
      do {
         emojiheartP = `${stylea.size}`;
         if (emojiheartP.length == 4140794) {
            break;
         }
      } while ((emojiheartP.length == 4140794) && ((4 << (Math.min(4, Math.abs(hometeamfieldA)))) <= 2 && (hometeamfieldA << (Math.min(Math.abs(4), 3))) <= 1));
         stylea[`${hometeamfieldA}`] = hometeamfieldA + 2;
          let greyarrowupF = String.fromCharCode(111,95,53,55,95,98,101,102,111,114,101,0);
         emojiheartP = `${stylea.size}`;
         greyarrowupF += `${greyarrowupF.length % 3}`;
      do {
         emojiheartP = `${hometeamfieldA}`;
         if (emojiheartP.length == 3359672) {
            break;
         }
      } while ((emojiheartP.length == 3359672) && ((1 - emojiheartP.length) > 4 && 5 > (1 - emojiheartP.length)));
      empty3 += `${(empty3 == String.fromCharCode(95,0) ? (leaguedetailsbgj ? 4 : 2) : empty3.length)}`;
   }

    var adRect = {};
   if (empty3.length > 2) {
      empty3 += `${empty3.length}`;
   }
      teamP %= Math.max((backicony == String.fromCharCode(114,0) ? (leaguedetailsbgj ? 3 : 3) : backicony.length), 3);
   do {
      playershirtK = `${teamP >> (Math.min(Math.abs(2), 5))}`;
      if (playershirtK.length == 173709) {
         break;
      }
   } while ((playershirtK.startsWith(`${leaguedetailsbgj}`)) && (playershirtK.length == 173709));

    adRect["x"] = x;
   while (3 == (5 * teamP) && !leaguedetailsbgj) {
       let redirectp = String.fromCharCode(119,95,51,50,0);
       let iconqqB = 5;
         redirectp = `${redirectp.length % (Math.max(1, 6))}`;
       let selectionk = true;
       let animationsZ = true;
         redirectp = `${iconqqB >> (Math.min(redirectp.length, 1))}`;
         redirectp = `${((animationsZ ? 1 : 1) * (selectionk ? 2 : 2))}`;
         redirectp = `${(String.fromCharCode(99,0) == redirectp ? redirectp.length : iconqqB)}`;
       let layoutZ = new Map([[String.fromCharCode(99,95,55,48,0),375], [String.fromCharCode(114,101,118,105,115,105,111,110,95,110,95,54,54,0),229], [String.fromCharCode(115,112,101,101,100,117,112,95,108,95,55,53,0),883]]);
       let sellmathbackgroundh = new Map([[String.fromCharCode(98,95,51,95,115,116,97,103,105,110,103,0),String.fromCharCode(97,95,53,95,114,100,101,108,116,97,0)], [String.fromCharCode(116,95,49,50,95,114,101,99,101,105,118,101,0),String.fromCharCode(114,95,54,54,95,110,112,97,116,99,104,101,115,0)], [String.fromCharCode(105,102,97,99,116,111,114,95,115,95,54,51,0),String.fromCharCode(101,95,51,57,95,115,110,110,105,100,0)]]);
      leaguedetailsbgj = rewardvideoe > 47;
      break;
   }
      mbnative6 = (teamP & playershirtK.length) >= 96;
   while (1 < playershirtK.length) {
       let chinasameV = [914, 782, 883];
       let yellowredcard7 = String.fromCharCode(113,105,110,100,101,120,95,122,95,54,48,0);
       let shootyesgoalR = 4.0;
       let whistleG = 2;
          let privileger = 2.0;
         chinasameV.push(1 * parseInt(`${shootyesgoalR}`));
         privileger += parseFloat(`${parseInt(`${privileger}`)}`);
          let reducer8 = new Map([[String.fromCharCode(105,95,53,57,95,100,105,115,99,0),321], [String.fromCharCode(102,109,115,117,98,95,118,95,51,53,0),498]]);
          let unreado = new Map([[String.fromCharCode(113,117,97,110,116,120,95,105,95,55,49,0),true ], [String.fromCharCode(101,95,50,49,95,105,110,115,116,97,110,116,105,97,116,105,111,110,0),true ]]);
         whistleG |= parseInt(`${shootyesgoalR}`) >> (Math.min(yellowredcard7.length, 2));
         reducer8[`${reducer8.size}`] = reducer8.size;
         unreado[`${unreado.size}`] = 3 / (Math.max(4, unreado.size));
      if (shootyesgoalR > whistleG) {
          let sharemodalC = false;
          let arear = 2;
         whistleG <<= Math.min(5, Math.abs(3));
         sharemodalC = sharemodalC && 8 >= arear;
         arear ^= ((sharemodalC ? 1 : 3) >> (Math.min(Math.abs(arear), 1)));
      }
       let predictionbuttond = String.fromCharCode(105,110,100,101,110,116,95,112,95,57,0);
       let telemetryq = String.fromCharCode(113,95,49,52,95,111,112,117,115,116,97,98,0);
      if ((shootyesgoalR + parseFloat(`${yellowredcard7.length}`)) > 5.63 && 3.70 > (5.63 + shootyesgoalR)) {
         shootyesgoalR += parseFloat(`${3}`);
      }
      while (5 >= (telemetryq.length + 1) && 1 >= (chinasameV.length + 1)) {
         telemetryq = `${telemetryq.length}`;
         break;
      }
      do {
         whistleG += 2;
         if (3940006 == whistleG) {
            break;
         }
      } while ((2 < (1 + whistleG)) && (3940006 == whistleG));
       let detaild = String.fromCharCode(101,95,53,57,95,97,117,116,111,114,101,103,114,101,115,115,105,111,110,0);
      if (1 >= telemetryq.length) {
          let turng = 4;
          let editI = 0.0;
          let encrypt4 = String.fromCharCode(115,116,114,99,97,115,101,99,109,112,95,116,95,49,57,0);
          let privacyX = true;
          let reactQ = new Map([[String.fromCharCode(118,95,49,48,48,95,106,112,101,103,108,115,100,101,99,0),375], [String.fromCharCode(121,95,53,57,95,107,101,121,100,105,114,0),866], [String.fromCharCode(111,95,57,49,95,100,101,110,115,101,0),650]]);
         detaild += `${chinasameV.length}`;
         turng /= Math.max(parseInt(`${editI}`), 1);
         editI /= Math.max(5, parseFloat(`${1 / (Math.max(parseInt(`${editI}`), 7))}`));
         encrypt4 = `${turng}`;
         privacyX = turng < 87 || 61.1 < editI;
         reactQ[`${editI}`] = 1;
      }
      if (4 > (yellowredcard7.length & 1) && 1 > (1 & whistleG)) {
          let bootsplashm = String.fromCharCode(99,111,112,121,114,105,103,104,116,95,116,95,51,50,0);
         whistleG *= 2 + bootsplashm.length;
      }
       let mimoq = 1;
      while (predictionbuttond == String.fromCharCode(85,0)) {
          let temperatureK = String.fromCharCode(116,95,56,50,95,116,114,107,110,0);
          let iconplayM = String.fromCharCode(104,95,57,51,95,115,117,98,116,114,97,99,116,105,110,103,0);
          let awayf = String.fromCharCode(98,95,50,57,95,105,110,116,114,97,120,98,108,111,99,107,0);
          let downloadZ = String.fromCharCode(114,95,55,48,95,108,116,97,98,108,101,0);
          let result_ = false;
         yellowredcard7 += `${chinasameV.length % (Math.max(4, yellowredcard7.length))}`;
         temperatureK += `${temperatureK.length}`;
         iconplayM = `${downloadZ.length * 3}`;
         awayf = `${((result_ ? 1 : 2) * temperatureK.length)}`;
         downloadZ += `${2 + iconplayM.length}`;
         result_ = downloadZ.length == 81 || result_;
         break;
      }
      playershirtK = `${(String.fromCharCode(70,0) == backicony ? parseInt(`${gifgoalP}`) : backicony.length)}`;
      break;
   }

    adRect["y"] = y;
       let backgroundn = 5;
       let desc8 = 1;
       let reactnativejsP = String.fromCharCode(105,95,56,49,95,115,121,110,116,104,101,115,105,115,0);
      while (4 > (4 | reactnativejsP.length) || (4 | reactnativejsP.length) > 1) {
          let sellmathbackgroundq = 1.0;
          let referreri = String.fromCharCode(117,95,56,52,95,100,101,99,111,109,112,114,101,115,115,101,100,0);
          let pushV = true;
          let launchA = 5.0;
          let icontransferclubm = 1;
         reactnativejsP += `${desc8}`;
         sellmathbackgroundq *= parseFloat(`${referreri.length}`);
         referreri = `${parseInt(`${sellmathbackgroundq}`)}`;
         pushV = sellmathbackgroundq < 38.1;
         launchA /= Math.max(2, referreri.length + icontransferclubm);
         icontransferclubm -= parseInt(`${launchA}`) * 3;
         break;
      }
          let profiles = String.fromCharCode(97,114,114,111,119,95,54,95,54,54,0);
          let libavfilters = 0;
          let zcopy_pxs = new Map([[String.fromCharCode(110,95,53,50,95,112,117,108,108,100,111,119,110,0),272], [String.fromCharCode(121,117,118,112,95,116,95,55,55,0),672], [String.fromCharCode(112,97,114,115,101,100,95,120,95,54,55,0),638]]);
         desc8 |= 3 % (Math.max(10, desc8));
         profiles = "3";
         libavfilters ^= libavfilters;
         zcopy_pxs = new Map([[`${zcopy_pxs.size}`, profiles.length]]);
         reactnativejsP += "1";
         desc8 |= backgroundn;
         desc8 -= 1;
          let nativeU = String.fromCharCode(121,95,53,50,95,116,112,105,100,0);
          let policy6 = 4.0;
          let humidityq = 4;
         desc8 -= backgroundn << (Math.min(Math.abs(1), 1));
         nativeU = `${parseInt(`${policy6}`) & 2}`;
         policy6 -= (String.fromCharCode(79,0) == nativeU ? nativeU.length : humidityq);
         humidityq -= (nativeU == String.fromCharCode(119,0) ? nativeU.length : parseInt(`${policy6}`));
         desc8 <<= Math.min(Math.abs(desc8 / (Math.max(9, reactnativejsP.length))), 5);
         reactnativejsP = `${desc8 - backgroundn}`;
      while ((5 * desc8) >= 2) {
         reactnativejsP = `${backgroundn & 2}`;
         break;
      }
      teamP /= Math.max((parseInt(`${gifgoalP}`) | (leaguedetailsbgj ? 5 : 3)), 5);
      leaguedetailsbgj = !mbnative6;
   do {
      empty3 += `${rewardvideoe & teamP}`;
      if (empty3 == String.fromCharCode(56,113,49,104,101,57,122,55,53,0)) {
         break;
      }
   } while ((empty3 == String.fromCharCode(56,113,49,104,101,57,122,55,53,0)) && (empty3.length >= 3));

    adRect["width"] = width;
   while (2 >= empty3.length) {
      leaguedetailsbgj = !leaguedetailsbgj || gifgoalP == 85.28;
      break;
   }
   while (2.19 >= (2.38 + gifgoalP) && (2.38 + gifgoalP) >= 3.70) {
      gifgoalP /= Math.max(parseFloat(`${rewardvideoe - 3}`), 3);
      break;
   }
      mbnative6 = penaltyshootnogoalH == 6 && backicony.length == 6;

    adRect["height"] = height;
       let clubg = [819, 408];
       let yellowcirclebgh = 0;
       let models5 = String.fromCharCode(119,95,51,52,95,102,105,108,108,115,0);
         yellowcirclebgh ^= 1;
      for (let l = 0; l < 3; l++) {
         clubg.push(clubg.length << (Math.min(Math.abs(2), 4)));
      }
          let rewardK = String.fromCharCode(114,97,112,104,105,99,115,95,101,95,54,0);
          let iconchatsendj = new Map([[String.fromCharCode(115,121,110,116,97,120,95,98,95,50,53,0),false ], [String.fromCharCode(104,95,53,56,95,115,112,104,101,114,105,99,97,108,0),true ]]);
         yellowcirclebgh &= clubg.length << (Math.min(5, Math.abs(iconchatsendj.size)));
         rewardK += `${(rewardK == String.fromCharCode(79,0) ? rewardK.length : rewardK.length)}`;
         iconchatsendj = new Map([[rewardK, rewardK.length]]);
         models5 = `${(String.fromCharCode(97,0) == models5 ? yellowcirclebgh : models5.length)}`;
         yellowcirclebgh &= yellowcirclebgh;
      do {
          let constantsO = String.fromCharCode(98,95,51,52,95,115,117,98,110,111,100,101,0);
          let iconschedulek = String.fromCharCode(112,105,120,101,108,102,111,114,109,97,116,95,55,95,53,51,0);
          let sheet2 = 0.0;
          let awayplayer9 = String.fromCharCode(115,119,105,116,99,104,101,100,95,118,95,52,52,0);
         clubg = [clubg.length];
         constantsO = `${constantsO.length}`;
         iconschedulek += `${1 - parseInt(`${sheet2}`)}`;
         sheet2 -= parseFloat(`${constantsO.length}`);
         awayplayer9 += `${iconschedulek.length}`;
         if (clubg.length == 1009804) {
            break;
         }
      } while ((clubg.length == 1009804) && (3 < (5 | models5.length)));
      do {
          let downloadH = new Map([[String.fromCharCode(101,95,54,57,95,108,105,115,116,101,100,0),735], [String.fromCharCode(114,101,106,111,105,110,0),299], [String.fromCharCode(101,120,99,101,101,100,105,110,103,95,111,95,53,53,0),558]]);
         clubg.push(clubg.length * downloadH.size);
         if (2964315 == clubg.length) {
            break;
         }
      } while ((models5.length <= clubg.length) && (2964315 == clubg.length));
      do {
         clubg.push(yellowcirclebgh % (Math.max(clubg.length, 8)));
         if (clubg.length == 1602323) {
            break;
         }
      } while ((clubg.length == 1602323) && ((clubg.length % (Math.max(5, 5))) < 4));
      do {
         models5 = `${models5.length & yellowcirclebgh}`;
         if (String.fromCharCode(55,107,102,98,98,99,56,0) == models5) {
            break;
         }
      } while ((String.fromCharCode(55,107,102,98,98,99,56,0) == models5) && (models5.startsWith(`${yellowcirclebgh}`)));
      gifgoalP -= parseFloat(`${empty3.length}`);
      penaltyshootnogoalH >>= Math.min(Math.abs(2 + parseInt(`${gifgoalP}`)), 5);
      leaguedetailsbgj = (backicony.length & empty3.length) == 20;

    return adRect;
      teamP *= teamP / (Math.max(2, 5));
       let dropdownZ = true;
       let baselinee = String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,111,110,95,56,95,53,52,0);
      if (4 >= baselinee.length) {
         dropdownZ = baselinee.length < 50;
      }
      do {
         baselinee = `${baselinee.length}`;
         if (3937205 == baselinee.length) {
            break;
         }
      } while ((!baselinee.startsWith(`${dropdownZ}`)) && (3937205 == baselinee.length));
          let issubo = [922, 395];
          let modityq = true;
         dropdownZ = baselinee.length < 36;
         issubo.push(2);
         modityq = !modityq;
          let playershirtx = String.fromCharCode(116,95,54,54,95,115,109,111,111,116,104,0);
          let basketballn = true;
          let trashk = String.fromCharCode(116,95,55,95,112,97,117,115,101,0);
         dropdownZ = (dropdownZ ? basketballn : dropdownZ);
         playershirtx += `${(trashk == String.fromCharCode(106,0) ? trashk.length : playershirtx.length)}`;
         basketballn = 11 < trashk.length;
      do {
         baselinee = `${((dropdownZ ? 4 : 4) << (Math.min(baselinee.length, 1)))}`;
         if (688701 == baselinee.length) {
            break;
         }
      } while ((!baselinee.endsWith(`${dropdownZ}`)) && (688701 == baselinee.length));
      do {
          let umengE = String.fromCharCode(100,95,49,50,95,114,111,108,101,0);
          let middlebrightnessH = [String.fromCharCode(98,95,55,51,95,99,104,101,99,107,112,111,105,110,116,0), String.fromCharCode(116,95,52,52,95,112,105,112,101,0)];
          let libturbomodulejsijniy = [925, 276];
         baselinee += `${libturbomodulejsijniy.length}`;
         umengE += "2";
         middlebrightnessH.push((umengE == String.fromCharCode(101,0) ? middlebrightnessH.length : umengE.length));
         libturbomodulejsijniy.push(umengE.length);
         if (String.fromCharCode(102,111,112,114,51,0) == baselinee) {
            break;
         }
      } while ((!dropdownZ) && (String.fromCharCode(102,111,112,114,51,0) == baselinee));
      leaguedetailsbgj = penaltyshootnogoalH >= 93;
   for (let h = 0; h < 2; h++) {
      playershirtK = `${playershirtK.length}`;
   }

}

function loadAd(placementId, settings) {
       let disconnectedlogoh = String.fromCharCode(99,111,110,100,105,116,105,111,110,95,121,95,52,55,0);
    let whatsapp8 = String.fromCharCode(108,95,55,48,95,113,117,111,116,101,100,0);
    let combine6 = new Map([[String.fromCharCode(106,102,105,101,108,100,115,95,97,95,49,57,0),true ], [String.fromCharCode(109,95,52,53,95,101,115,115,105,111,110,0),false ], [String.fromCharCode(107,95,56,48,95,117,110,108,111,99,107,101,100,0),true ]]);
    let bangB = false;
    let privacyI = 2.0;
    let subinW = 1;
    let classes9 = String.fromCharCode(116,114,105,97,108,95,111,95,56,49,0);
    let kickK = false;
    let largesoundD = [822, 310];
    let positionfieldk = true;
    let tempa = 0.0;
    let penaltyP = true;
    let yellowredcardJ = String.fromCharCode(99,95,56,49,95,105,110,112,117,116,121,0);
    let tickj = 4.0;
    let teamdetailsbgh = 2.0;
   for (let z = 0; z < 1; z++) {
      privacyI /= Math.max(3, whatsapp8.length | largesoundD.length);
   }
   if (1 <= whatsapp8.length) {
      whatsapp8 = "3";
   }
   for (let w = 0; w < 1; w++) {
       let notificationV = 5;
       let icondefaultthumbnail1 = [String.fromCharCode(100,95,56,55,95,99,105,110,116,0), String.fromCharCode(99,95,54,51,95,114,101,112,114,101,115,101,110,116,115,0), String.fromCharCode(111,116,111,98,0)];
       let minimizew = new Map([[String.fromCharCode(107,95,52,53,95,116,105,109,101,117,116,105,108,115,0),198], [String.fromCharCode(122,95,55,55,95,116,101,108,0),305]]);
       let fullscreenmina = true;
       let goallogow = false;
         minimizew = new Map([[`${minimizew.size}`, 2]]);
      do {
         goallogow = fullscreenmina;
         if (goallogow ? !goallogow : goallogow) {
            break;
         }
      } while ((goallogow ? !goallogow : goallogow) && (!goallogow && fullscreenmina));
         minimizew = new Map([[`${notificationV}`, 2]]);
      do {
          let reducer8 = String.fromCharCode(116,105,109,101,105,110,102,111,95,49,95,56,56,0);
          let homeactivel = 1.0;
         fullscreenmina = goallogow;
         reducer8 = `${parseInt(`${homeactivel}`)}`;
         homeactivel -= reducer8.length;
         if (fullscreenmina ? !fullscreenmina : fullscreenmina) {
            break;
         }
      } while ((fullscreenmina ? !fullscreenmina : fullscreenmina) && (!fullscreenmina));
         minimizew = new Map([[`${fullscreenmina}`, 3]]);
         notificationV /= Math.max(3, ((goallogow ? 2 : 3) << (Math.min(Math.abs((fullscreenmina ? 3 : 4)), 1))));
         icondefaultthumbnail1.push(icondefaultthumbnail1.length);
       let lineN = String.fromCharCode(107,95,55,50,95,114,101,115,111,108,118,101,0);
         fullscreenmina = (23 < ((fullscreenmina ? icondefaultthumbnail1.length : 23) << (Math.min(icondefaultthumbnail1.length, 1))));
      if ((3 + icondefaultthumbnail1.length) <= 3 && 1 <= (lineN.length + 3)) {
          let calendarS = 3;
          let singaporep = false;
          let modityk = new Map([[String.fromCharCode(109,112,100,98,95,116,95,56,0),125], [String.fromCharCode(104,105,100,105,110,103,95,114,95,51,52,0),172]]);
          let securityc = 4;
          let libfbjniE = [710, 444];
         lineN += `${lineN.length << (Math.min(4, Math.abs(minimizew.size)))}`;
         calendarS *= ((singaporep ? 3 : 2) | calendarS);
         singaporep = libfbjniE.includes(singaporep);
         modityk[`${calendarS}`] = 2;
         securityc += 1;
         libfbjniE.push(calendarS);
      }
      if (2 == lineN.length) {
          let string9 = String.fromCharCode(99,111,108,115,112,97,110,95,54,95,57,53,0);
          let libavcodecj = [String.fromCharCode(108,111,111,112,102,105,108,116,101,114,95,110,95,49,53,0), String.fromCharCode(116,104,114,101,97,100,101,100,0), String.fromCharCode(97,110,97,108,121,122,105,110,103,95,48,95,50,56,0)];
         notificationV ^= (string9 == String.fromCharCode(116,0) ? (fullscreenmina ? 2 : 1) : string9.length);
         libavcodecj = [libavcodecj.length];
      }
         notificationV &= 1;
      while (!fullscreenmina) {
          let launchero = String.fromCharCode(103,95,53,49,95,111,110,103,111,105,110,103,0);
         goallogow = String.fromCharCode(50,0) == launchero;
         break;
      }
      if (5 > (2 * icondefaultthumbnail1.length)) {
          let tickq = 4.0;
         goallogow = 74 <= lineN.length;
         tickq /= Math.max(parseInt(`${tickq}`) % 2, 5);
      }
      if (5 < (1 ^ minimizew.size) || (1 ^ minimizew.size) < 5) {
         minimizew[`${goallogow}`] = ((goallogow ? 3 : 4));
      }
      disconnectedlogoh = `${classes9.length}`;
   }
      tempa += 3;

    if (settings.hasOwnProperty(kATBannerAdLoadingExtraBannerAdSizeStruct)) {

       let moviesV = new Map([[String.fromCharCode(114,101,99,111,110,110,101,99,116,95,117,95,54,56,0),392], [String.fromCharCode(99,95,53,95,114,101,111,112,101,110,0),751]]);
       let twitter_ = 4.0;
       let greenF = String.fromCharCode(115,95,55,52,95,115,112,97,119,110,97,98,108,101,0);
       let close4 = 3.0;
       let tooltipsZ = 3.0;
          let catalogX = new Map([[String.fromCharCode(112,114,115,99,116,112,95,101,95,52,0),721], [String.fromCharCode(111,95,54,50,95,109,105,110,105,109,105,122,101,0),346]]);
          let temperaturee = [109, 574];
         close4 /= Math.max(parseFloat(`${1}`), 5);
         catalogX = new Map([[`${catalogX.size}`, temperaturee.length % (Math.max(1, catalogX.size))]]);
         temperaturee.push(temperaturee.length >> (Math.min(1, Math.abs(catalogX.size))));
      do {
         close4 -= parseFloat(`${3}`);
         if (close4 == 697896.0) {
            break;
         }
      } while ((close4 == 697896.0) && ((5.60 + twitter_) > 5.72 || (twitter_ + 5.60) > 1.59));
      if (2.98 > twitter_) {
         tooltipsZ /= Math.max(5, (parseFloat(`${greenF == String.fromCharCode(73,0) ? parseInt(`${close4}`) : greenF.length}`)));
      }
          let libmapbufferjniQ = String.fromCharCode(106,95,52,50,95,114,101,99,101,105,112,116,115,0);
          let whitebellB = String.fromCharCode(111,95,51,56,95,109,97,116,104,111,112,115,0);
          let regengJ = [String.fromCharCode(116,95,57,48,95,118,111,116,101,100,0), String.fromCharCode(117,95,51,54,95,105,110,116,101,114,97,99,116,105,111,110,0), String.fromCharCode(112,95,52,56,95,118,97,116,97,114,0)];
         twitter_ += parseFloat(`${2}`);
         libmapbufferjniQ += `${regengJ.length}`;
         whitebellB += `${regengJ.length}`;
      for (let e = 0; e < 1; e++) {
         greenF += `${moviesV.size << (Math.min(2, Math.abs(parseInt(`${close4}`))))}`;
      }
       let incidentF = String.fromCharCode(120,95,57,49,95,98,117,114,115,116,121,0);
      for (let i = 0; i < 3; i++) {
         incidentF += `${parseInt(`${close4}`) << (Math.min(Math.abs(parseInt(`${twitter_}`)), 2))}`;
      }
      for (let n = 0; n < 2; n++) {
          let emptyV = 3.0;
          let with_r2s = [292, 1000, 720];
          let greyq = String.fromCharCode(97,98,101,108,95,56,95,49,57,0);
         tooltipsZ += parseFloat(`${with_r2s.length}`);
         emptyV -= greyq.length;
         with_r2s = [(greyq == String.fromCharCode(68,0) ? greyq.length : parseInt(`${emptyV}`))];
      }
      privacyI -= moviesV.size % (Math.max(largesoundD.length, 7));
   do {
       let bgvipxvod5 = [String.fromCharCode(97,108,112,110,95,50,95,50,55,0), String.fromCharCode(109,97,116,99,104,105,110,102,111,95,116,95,52,49,0)];
       let libswresample5 = String.fromCharCode(112,114,101,102,101,114,95,52,95,57,49,0);
       let libapminsightaE = [120, 21, 933];
       let subse = 3.0;
      for (let u = 0; u < 3; u++) {
          let iconarrowrightorangeg = String.fromCharCode(109,105,99,114,111,115,111,102,116,95,117,95,51,48,0);
          let white5 = true;
         libapminsightaE = [iconarrowrightorangeg.length];
      }
       let g_hash3 = new Map([[String.fromCharCode(117,95,57,49,95,99,114,117,110,0),String.fromCharCode(109,95,57,50,95,102,114,97,110,100,0)], [String.fromCharCode(97,117,114,97,95,121,95,53,57,0),String.fromCharCode(115,116,114,105,110,103,115,95,112,95,56,55,0)], [String.fromCharCode(105,110,116,114,111,95,102,95,55,49,0),String.fromCharCode(98,117,105,108,100,105,110,103,95,108,95,51,48,0)]]);
       let gradlewT = new Map([[String.fromCharCode(97,95,52,49,0),727], [String.fromCharCode(104,95,48,95,114,101,116,114,105,101,118,101,100,0),67], [String.fromCharCode(119,95,57,95,117,105,100,115,0),69]]);
       let libavcodecg = new Map([[String.fromCharCode(114,101,97,108,108,111,99,112,95,53,95,55,56,0),false ], [String.fromCharCode(112,114,101,99,105,115,101,95,107,95,57,49,0),true ], [String.fromCharCode(119,95,52,57,95,110,105,100,110,105,115,116,0),false ]]);
       let libnmsZ = new Map([[String.fromCharCode(116,111,111,108,115,95,103,95,53,56,0),673], [String.fromCharCode(112,111,112,117,108,97,114,95,57,95,57,0),753], [String.fromCharCode(116,97,114,103,101,116,101,100,95,98,95,50,49,0),174]]);
          let predictionbannerE = String.fromCharCode(119,97,108,108,95,108,95,51,54,0);
          let termsD = String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,95,120,95,55,49,0);
          let playershirtQ = 2;
         libapminsightaE = [termsD.length ^ libapminsightaE.length];
         predictionbannerE = `${predictionbannerE.length | 1}`;
         termsD += `${playershirtQ & 2}`;
         playershirtQ *= playershirtQ;
          let bridgeR = String.fromCharCode(115,99,111,112,101,115,95,103,95,51,56,0);
          let scrollviewA = [795, 590, 503];
         gradlewT = new Map([[`${libnmsZ.size}`, libnmsZ.size]]);
         bridgeR += `${bridgeR.length | scrollviewA.length}`;
         scrollviewA.push((bridgeR == String.fromCharCode(54,0) ? bridgeR.length : scrollviewA.length));
      do {
         bgvipxvod5.push(gradlewT.size << (Math.min(Math.abs(3), 3)));
         if (bgvipxvod5.length == 4596462) {
            break;
         }
      } while ((1 > bgvipxvod5.length) && (bgvipxvod5.length == 4596462));
         libnmsZ[`${libapminsightaE.length}`] = g_hash3.size >> (Math.min(libapminsightaE.length, 2));
          let iconfeedbackQ = new Map([[String.fromCharCode(119,95,50,57,95,109,97,114,115,104,97,108,108,105,110,103,0),String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,95,108,95,50,49,0)], [String.fromCharCode(114,101,115,117,108,116,105,110,103,95,53,95,55,0),String.fromCharCode(104,111,115,116,112,111,114,116,102,105,108,101,95,116,95,56,55,0)]]);
          let defaultteamY = String.fromCharCode(121,95,49,53,95,109,97,116,114,105,120,101,110,99,0);
         libavcodecg = new Map([[`${libnmsZ.size}`, parseInt(`${subse}`)]]);
         iconfeedbackQ = new Map([[`${iconfeedbackQ.size}`, defaultteamY.length]]);
         defaultteamY = "1";
      do {
         libavcodecg = new Map([[`${bgvipxvod5.length}`, bgvipxvod5.length]]);
         if (3079337 == libavcodecg.size) {
            break;
         }
      } while ((libavcodecg[`${gradlewT.size}`] == null) && (3079337 == libavcodecg.size));
      do {
         g_hash3[`${libswresample5}`] = libavcodecg.size;
         if (736267 == g_hash3.size) {
            break;
         }
      } while ((g_hash3.size <= gradlewT.size) && (736267 == g_hash3.size));
      if (libswresample5.length == bgvipxvod5.length) {
         libswresample5 = `${libnmsZ.size}`;
      }
      if (4.9 < (subse * parseFloat(`${g_hash3.size}`)) || (g_hash3.size % 5) < 5) {
          let core2 = 1.0;
          let videobufferloadingC = 3.0;
          let promotiona = [605, 3];
         subse *= parseFloat(`${parseInt(`${subse}`)}`);
         core2 -= parseInt(`${videobufferloadingC}`);
         videobufferloadingC += parseFloat(`${1 ^ parseInt(`${videobufferloadingC}`)}`);
         promotiona.push(promotiona.length);
      }
      positionfieldk = !positionfieldk;
      if (positionfieldk ? !positionfieldk : positionfieldk) {
         break;
      }
   } while ((!bangB) && (positionfieldk ? !positionfieldk : positionfieldk));
      penaltyP = (whatsapp8.length | combine6.size) == 4;
      penaltyP = 10 == largesoundD.length;
        var loadAdSize = settings[kATBannerAdLoadingExtraBannerAdSizeStruct];
       let loading2 = String.fromCharCode(115,121,110,99,95,109,95,53,56,0);
         loading2 += `${loading2.length}`;
         loading2 += "2";
      if (loading2 != loading2) {
          let scorer = 0.0;
          let vipsportM = String.fromCharCode(102,95,57,51,95,115,121,109,98,111,108,115,0);
          let reactnativeultimatelistviewr = [150, 196];
          let orangeclock1 = String.fromCharCode(118,95,50,48,95,115,116,97,114,116,99,111,100,101,0);
          let crownp = [String.fromCharCode(114,101,105,115,115,117,101,95,52,95,55,51,0), String.fromCharCode(102,95,57,95,114,101,115,116,97,114,116,0)];
         loading2 = `${(orangeclock1 == String.fromCharCode(102,0) ? crownp.length : orangeclock1.length)}`;
         scorer += parseFloat(`${3 % (Math.max(7, parseInt(`${scorer}`)))}`);
         vipsportM = `${(vipsportM == String.fromCharCode(86,0) ? vipsportM.length : reactnativeultimatelistviewr.length)}`;
         reactnativeultimatelistviewr = [(vipsportM == String.fromCharCode(68,0) ? vipsportM.length : parseInt(`${scorer}`))];
         crownp = [vipsportM.length % (Math.max(2, 2))];
      }
      bangB = combine6.size == 86 && 86 == largesoundD.length;
   do {
      tempa -= disconnectedlogoh.length;
      if (tempa == 2326935.0) {
         break;
      }
   } while ((tempa == 2326935.0) && ((disconnectedlogoh.length ^ 3) >= 4));
   while (whatsapp8.endsWith(`${kickK}`)) {
       let dependencyR = [String.fromCharCode(107,95,53,56,95,116,101,97,114,0), String.fromCharCode(115,99,97,110,115,95,120,95,53,52,0), String.fromCharCode(106,95,52,49,95,114,101,115,117,109,101,0)];
         dependencyR.push(dependencyR.length);
      if (4 <= (dependencyR.length + 5) || (5 + dependencyR.length) <= 1) {
          let tumbnailb = String.fromCharCode(103,95,53,53,95,103,105,118,101,110,0);
          let iconwatchnowZ = 1.0;
          let headerT = new Map([[String.fromCharCode(116,95,49,48,48,95,119,97,114,110,105,110,103,115,0),851], [String.fromCharCode(100,95,48,95,116,119,111,0),789]]);
          let eactP = String.fromCharCode(108,115,112,112,111,108,121,95,54,95,57,51,0);
         dependencyR.push(eactP.length);
         tumbnailb += `${(tumbnailb == String.fromCharCode(111,0) ? tumbnailb.length : headerT.size)}`;
         iconwatchnowZ += parseFloat(`${parseInt(`${iconwatchnowZ}`) >> (Math.min(Math.abs(3), 4))}`);
         headerT[tumbnailb] = parseInt(`${iconwatchnowZ}`) * tumbnailb.length;
         eactP += `${headerT.size * 2}`;
      }
      do {
         dependencyR = [dependencyR.length | dependencyR.length];
         if (4063425 == dependencyR.length) {
            break;
         }
      } while ((dependencyR.includes(dependencyR.length)) && (4063425 == dependencyR.length));
      kickK = !classes9.endsWith(`${kickK}`);
      break;
   }
      largesoundD.push(1 | parseInt(`${privacyI}`));

        settings["width"] = loadAdSize["width"];
   do {
       let typingloading5 = new Map([[String.fromCharCode(98,95,54,49,95,105,110,116,101,103,114,97,108,0),28], [String.fromCharCode(97,110,111,116,104,101,114,95,120,95,53,57,0),279]]);
         typingloading5[`${typingloading5.size}`] = typingloading5.size & typingloading5.size;
      do {
         typingloading5[`${typingloading5.size}`] = typingloading5.size % 3;
         if (typingloading5.size == 3281956) {
            break;
         }
      } while ((typingloading5.size == 3281956) && (3 < (5 << (Math.min(2, Math.abs(typingloading5.size)))) && 5 < (5 << (Math.min(4, Math.abs(typingloading5.size))))));
      for (let v = 0; v < 1; v++) {
          let iconrefresht = String.fromCharCode(100,95,51,49,95,112,97,115,119,111,114,100,0);
          let fastforwardE = String.fromCharCode(112,114,101,104,97,115,104,95,121,95,54,49,0);
          let stept = 2.0;
          let redscoreballl = String.fromCharCode(102,95,50,50,95,103,117,101,115,115,0);
         typingloading5[redscoreballl] = 1;
         iconrefresht += `${fastforwardE.length}`;
         fastforwardE += `${iconrefresht.length + fastforwardE.length}`;
         stept -= parseFloat(`${fastforwardE.length}`);
         redscoreballl += `${iconrefresht.length | 2}`;
      }
      combine6 = new Map([[classes9, classes9.length >> (Math.min(3, Math.abs(parseInt(`${tickj}`))))]]);
      if (1338452 == combine6.size) {
         break;
      }
   } while ((5 > (largesoundD.length / 5) && 2 > (largesoundD.length / 5)) && (1338452 == combine6.size));
      whatsapp8 += `${parseInt(`${tempa}`) & 2}`;
       let action9 = 2.0;
       let morej = String.fromCharCode(118,111,105,99,101,115,95,118,95,49,51,0);
       let predictionarrowc = 4;
      if (2 < (4 * morej.length) && 4 < (morej.length * parseInt(`${action9}`))) {
         morej = `${parseInt(`${action9}`)}`;
      }
       let lang3 = String.fromCharCode(97,95,52,49,95,97,99,99,101,115,115,105,98,108,105,116,121,0);
       let chinasameJ = String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,122,95,53,49,0);
         predictionarrowc &= 2;
          let iconviewergif6 = 4;
          let moduleo = String.fromCharCode(118,95,56,56,95,101,110,113,117,101,117,101,0);
          let topicP = String.fromCharCode(116,95,52,57,95,109,117,108,120,0);
         chinasameJ = `${topicP.length ^ 2}`;
         iconviewergif6 *= moduleo.length;
         moduleo += `${3 & moduleo.length}`;
         topicP = `${(String.fromCharCode(73,0) == moduleo ? moduleo.length : iconviewergif6)}`;
         predictionarrowc ^= 2 & lang3.length;
      while (!chinasameJ.endsWith(lang3)) {
         lang3 += "1";
         break;
      }
         chinasameJ = `${(String.fromCharCode(54,0) == morej ? morej.length : parseInt(`${action9}`))}`;
      if (1 <= predictionarrowc) {
         predictionarrowc >>= Math.min(Math.abs((String.fromCharCode(79,0) == morej ? predictionarrowc : morej.length)), 4);
      }
          let graphd = 3;
          let lightQ = [316, 930];
         lang3 = `${morej.length + 1}`;
         graphd -= graphd;
         lightQ.push(graphd);
      tickj -= parseFloat(`${parseInt(`${tempa}`) / (Math.max(7, combine6.size))}`);
   while (classes9.endsWith(`${penaltyP}`)) {
      penaltyP = 77 > largesoundD.length;
      break;
   }

        settings["height"] = loadAdSize["height"];
   for (let y = 0; y < 1; y++) {
      penaltyP = positionfieldk;
   }
   while (positionfieldk) {
      positionfieldk = 52.41 <= tickj;
      break;
   }
      bangB = 40.14 < tempa;
       let auto_68 = String.fromCharCode(117,115,97,103,101,95,119,95,52,54,0);
       let dropdowne = new Map([[String.fromCharCode(103,95,57,49,95,117,110,112,97,99,107,104,105,0),true ], [String.fromCharCode(114,101,115,101,114,118,101,115,105,122,101,95,118,95,51,55,0),true ]]);
       let kuaishouv = 3.0;
       let lessM = 0.0;
      if ((auto_68.length ^ dropdowne.size) >= 5 && 5 >= (auto_68.length ^ dropdowne.size)) {
          let elementsh = new Map([[String.fromCharCode(117,118,108,99,95,122,95,57,57,0),String.fromCharCode(99,111,110,116,114,111,108,101,114,115,95,107,95,57,53,0)], [String.fromCharCode(120,95,56,56,95,118,98,114,105,0),String.fromCharCode(101,95,54,51,95,106,115,105,109,100,0)], [String.fromCharCode(114,95,52,50,95,105,102,97,109,115,103,0),String.fromCharCode(108,97,98,101,108,95,113,95,50,52,0)]]);
          let static__1M = [496, 289];
          let arrowrightT = 0;
          let greytickc = String.fromCharCode(116,95,54,49,0);
         auto_68 = `${2 * elementsh.size}`;
         elementsh[greytickc] = static__1M.length;
         static__1M.push(1 ^ arrowrightT);
         arrowrightT -= static__1M.length % (Math.max(1, 5));
         greytickc = `${static__1M.length % (Math.max(greytickc.length, 6))}`;
      }
          let iconqqZ = 2.0;
          let iconsaveimage8 = String.fromCharCode(112,95,56,48,0);
          let downloaded6 = 4;
         lessM /= Math.max(parseInt(`${kuaishouv}`) & parseInt(`${lessM}`), 2);
         iconqqZ *= iconsaveimage8.length + 2;
         iconsaveimage8 = `${downloaded6}`;
         downloaded6 -= iconsaveimage8.length - downloaded6;
          let vietnams = new Map([[String.fromCharCode(111,95,55,55,95,115,104,114,105,110,107,0),857], [String.fromCharCode(115,116,114,117,99,116,115,95,112,95,57,48,0),982]]);
         auto_68 = `${auto_68.length << (Math.min(Math.abs(1), 4))}`;
         vietnams[`${vietnams.size}`] = 2;
         lessM /= Math.max(5, dropdowne.size * auto_68.length);
         auto_68 = `${3 & parseInt(`${kuaishouv}`)}`;
      do {
          let gpayJ = 1.0;
          let largesoundB = [583, 620];
         auto_68 = "2";
         gpayJ /= Math.max(parseFloat(`${parseInt(`${gpayJ}`)}`), 2);
         largesoundB.push(parseInt(`${gpayJ}`));
         if (128779 == auto_68.length) {
            break;
         }
      } while ((4 <= (auto_68.length - 2)) && (128779 == auto_68.length));
      if ((3 + parseInt(`${lessM}`)) <= 5 || 2.30 <= (5.43 + lessM)) {
         lessM *= parseInt(`${lessM}`) & parseInt(`${kuaishouv}`);
      }
      for (let k = 0; k < 1; k++) {
         dropdowne = new Map([[`${lessM}`, auto_68.length]]);
      }
      subinW <<= Math.min(4, Math.abs(combine6.size / 2));

        delete settings[kATBannerAdLoadingExtraBannerAdSizeStruct];
      tempa /= Math.max(2, parseInt(`${privacyI}`));
      kickK = tickj > parseFloat(`${combine6.size}`);
      penaltyP = String.fromCharCode(117,0) == whatsapp8 || subinW <= 8;
   for (let q = 0; q < 1; q++) {
      largesoundD = [2 / (Math.max(5, parseInt(`${tickj}`)))];
   }

    }
    ATBannerRNSDK.loadAd(placementId, JSON.stringify(settings));
   if (disconnectedlogoh != String.fromCharCode(57,0)) {
      whatsapp8 = `${parseInt(`${tempa}`) % (Math.max(10, parseInt(`${tickj}`)))}`;
   }
       let images7 = 3;
       let assistA = String.fromCharCode(99,95,51,54,95,115,117,98,116,114,101,101,115,0);
      do {
         assistA = `${images7}`;
         if (3220376 == assistA.length) {
            break;
         }
      } while ((3220376 == assistA.length) && (3 <= (assistA.length >> (Math.min(5, Math.abs(images7))))));
          let flippers = String.fromCharCode(109,111,110,116,95,97,95,53,49,0);
          let next0 = true;
          let untick5 = String.fromCharCode(105,102,97,99,116,111,114,95,100,95,49,56,0);
         assistA = `${untick5.length}`;
         flippers = `${3 >> (Math.min(5, flippers.length))}`;
         next0 = flippers.length < 30;
      for (let w = 0; w < 1; w++) {
          let downarrowm = false;
         images7 *= assistA.length;
         downarrowm = !downarrowm;
      }
       let filedr = 0.0;
      if (!assistA.endsWith(`${images7}`)) {
         images7 %= Math.max((String.fromCharCode(83,0) == assistA ? parseInt(`${filedr}`) : assistA.length), 4);
      }
      do {
         assistA += `${assistA.length}`;
         if (assistA == String.fromCharCode(98,53,57,119,110,117,108,51,0)) {
            break;
         }
      } while ((assistA == String.fromCharCode(98,53,57,119,110,117,108,51,0)) && ((assistA.length << (Math.min(Math.abs(4), 4))) >= 3));
      privacyI *= (whatsapp8 == String.fromCharCode(117,0) ? largesoundD.length : whatsapp8.length);
   for (let q = 0; q < 1; q++) {
      privacyI += whatsapp8.length >> (Math.min(disconnectedlogoh.length, 4));
   }
   while ((subinW << (Math.min(Math.abs(4), 4))) <= 4) {
       let armvag = new Map([[String.fromCharCode(99,104,97,112,116,101,114,115,95,98,95,52,49,0),270], [String.fromCharCode(110,105,109,97,116,101,100,95,111,95,55,52,0),825]]);
       let tempnodatagif5 = String.fromCharCode(112,117,114,112,111,115,101,102,117,108,95,98,95,54,57,0);
       let loadingm = [String.fromCharCode(98,114,101,97,107,95,103,95,54,54,0), String.fromCharCode(99,95,49,48,48,95,114,101,97,100,105,110,0)];
       let typingloadingb = [406, 687, 208];
      if (!tempnodatagif5.startsWith(`${armvag.size}`)) {
          let buildq = 2.0;
         armvag = new Map([[`${armvag.size}`, typingloadingb.length]]);
         buildq /= Math.max(parseFloat(`${parseInt(`${buildq}`) - 3}`), 5);
      }
       let libcxxcomponentsS = 3.0;
       let suboutD = 1.0;
         libcxxcomponentsS /= Math.max(4, parseFloat(`${tempnodatagif5.length}`));
      while (2 < (armvag.size * 5)) {
         loadingm = [3];
         break;
      }
      while ((armvag.size | 2) > 5 || 4 > (2 | armvag.size)) {
         armvag[tempnodatagif5] = tempnodatagif5.length & 3;
         break;
      }
      subinW ^= (1 - (bangB ? 3 : 2));
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
  showAdInPosition: (placementId, position) =>  ATBannerRNSDK.showAdInPosition(placementId, position),
  showAdInRectangle: (placementId, showAdRect) =>  ATBannerRNSDK.showAdInRectangle(placementId, JSON.stringify(showAdRect)),
  hideAd: (placementId) =>  ATBannerRNSDK.hideAd(placementId),
  reShowAd: (placementId) =>  ATBannerRNSDK.reShowAd(placementId),
  removeAd: (placementId) =>  ATBannerRNSDK.removeAd(placementId),
};
