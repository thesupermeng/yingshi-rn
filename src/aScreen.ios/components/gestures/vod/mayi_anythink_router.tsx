import React, { useEffect, useState, useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import VolumeGestureControl from './mayi_recommendation_gemfile';
import BrightnessGestureControl from './mayi_libfb_tempnodata';
import BrightnessVolumeSlider from './mayi_rewardvideo';
import ProgressGestureControl from './mayi_uimanager';

const GestureControls = {
    VOLUME: 'Volume',
    BRIGHTNESS: 'Brightness',
};

const Icons = {
    [GestureControls.BRIGHTNESS]: {
        noValue: "iconstarCatagory",
        hasValue: "phoneInviteLibhermes"
    },
    [GestureControls.VOLUME]: {
        noValue: "taiwanScore",
        hasValue: "iconarrowrightorangeReminderPosition"
    },
}

type mayi_GoogleViews = {
    onScreenTouched: () => any,
    disableFullScreenGesture: boolean,
    onSkip?: any
    vodType?: string
}

export default ({ onScreenTouched, disableFullScreenGesture, onSkip, vodType = 'vod' }: mayi_GoogleViews) => {
    const [icon, setIcon] = useState({
        noValue: "taiwanScore",
        hasValue: "iconarrowrightorangeReminderPosition"
    })
    const [showSlider, setShowSlider] = useState(false)
    const [value, setValue] = useState(0)

    const sliderTimeout = useRef(0)

    const onPropertyChanged = (gestureType: string, value: number) => {
        setIcon(Icons[gestureType]);
        setValue(parseFloat(value.toFixed(2)));
        setShowSlider(true);

        clearTimeout(sliderTimeout.current);
        sliderTimeout.current = setTimeout(() => {
       let championl = false;
    let animationy: Array<any> = [String.fromCharCode(99,97,110,118,97,115,0), String.fromCharCode(108,95,52,53,95,117,118,97,114,105,110,116,0)];
    let package_9aV = String.fromCharCode(115,117,112,101,114,110,111,100,101,0);
    let filef: Array<any> = [740, 897, 762];
    let favoriteJ = String.fromCharCode(112,100,102,95,97,95,51,50,0);
    let plash0 = 4.0;
    let hookx = false;
    let static_tQ: Array<any> = [951, 327];
    let detailsD: Map<any, any> = new Map([[String.fromCharCode(114,95,53,49,0),29], [String.fromCharCode(100,117,109,112,112,97,99,107,101,116,0),302]]);
    let mergerm = false;
    let minimizeu: Map<any, any> = new Map([[String.fromCharCode(113,112,102,105,108,101,0),753], [String.fromCharCode(117,95,49,53,0),492]]);
    let dataV = String.fromCharCode(103,104,97,115,104,0);
    let awayteamfieldy = false;
    let assistZ: Array<any> = [223, 278];
       let rootP = 5.0;
          let kickI = 0;
          let downarrow2 = String.fromCharCode(118,95,52,53,95,112,114,101,109,117,108,116,105,112,108,105,101,100,0);
         rootP *= parseFloat(`${parseInt(`${rootP}`)}`);
         kickI /= Math.max(2, downarrow2.length * kickI);
         downarrow2 += `${downarrow2.length}`;
      while (4.17 == (rootP + rootP) && (rootP + 4.17) == 1.63) {
          let blacklistd = String.fromCharCode(114,101,108,111,97,100,101,114,0);
          let canceld = String.fromCharCode(114,101,115,116,111,114,101,0);
         rootP *= parseFloat(`${canceld.length}`);
         blacklistd += "2";
         canceld += `${(String.fromCharCode(52,0) == blacklistd ? blacklistd.length : blacklistd.length)}`;
         break;
      }
          let downU: Map<any, any> = new Map([[String.fromCharCode(103,97,109,101,115,0),true ], [String.fromCharCode(118,116,114,107,0),false ], [String.fromCharCode(109,95,56,49,95,108,105,115,116,115,0),false ]]);
         rootP *= parseFloat(`${downU.size << (Math.min(1, Math.abs(parseInt(`${rootP}`))))}`);
      package_9aV += `${minimizeu.size}`;
      animationy.push(parseInt(`${plash0}`) / 3);
   while (!hookx) {
      championl = filef.length <= 66;
      break;
   }
   let adult7 = 8501769 >= animationy.length;
   do {
       let libmapbufferjnii: Map<any, any> = new Map([[String.fromCharCode(105,100,99,116,120,100,99,95,104,95,51,0),41], [String.fromCharCode(112,116,115,95,54,95,57,56,0),978]]);
       let iconnewsshareN: Map<any, any> = new Map([[String.fromCharCode(115,109,105,108,101,0),true ], [String.fromCharCode(103,117,116,116,101,114,0),false ]]);
      while (Array.from(libmapbufferjnii.values()).includes(iconnewsshareN.size)) {
         libmapbufferjnii = new Map([[`${iconnewsshareN.size}`, iconnewsshareN.size]]);
         break;
      }
          let applicationM = String.fromCharCode(103,95,49,54,95,99,111,110,115,116,114,117,99,116,111,114,109,97,103,105,99,0);
         libmapbufferjnii = new Map([[`${iconnewsshareN.size}`, (applicationM == String.fromCharCode(74,0) ? applicationM.length : iconnewsshareN.size)]]);
         iconnewsshareN.set(`${iconnewsshareN.size}`, libmapbufferjnii.size);
      if (1 < (libmapbufferjnii.size / (Math.max(8, iconnewsshareN.size)))) {
         iconnewsshareN.set(`${libmapbufferjnii.size}`, libmapbufferjnii.size | iconnewsshareN.size);
      }
          let transferq = String.fromCharCode(97,110,110,111,117,110,99,101,109,101,110,116,0);
          let cornershoot_ = 4.0;
          let contextq: Map<any, any> = new Map([[String.fromCharCode(116,95,57,49,95,114,101,102,101,114,101,110,99,101,100,0),206], [String.fromCharCode(115,112,108,105,116,115,95,53,95,57,50,0),6]]);
         libmapbufferjnii.set(`${libmapbufferjnii.size}`, libmapbufferjnii.size | 1);
         transferq += `${(String.fromCharCode(71,0) == transferq ? transferq.length : parseInt(`${cornershoot_}`))}`;
         cornershoot_ -= parseFloat(`${parseInt(`${cornershoot_}`) * transferq.length}`);
         contextq = new Map([[`${cornershoot_}`, 3]]);
      while (iconnewsshareN.size <= libmapbufferjnii.size) {
          let huaweiw = String.fromCharCode(103,97,112,0);
          let vignette3: Array<any> = [String.fromCharCode(101,115,116,105,109,97,116,101,100,95,118,95,50,53,0), String.fromCharCode(101,110,100,112,111,105,110,116,0)];
         iconnewsshareN = new Map([[`${libmapbufferjnii.size}`, vignette3.length << (Math.min(Math.abs(1), 4))]]);
         huaweiw += `${huaweiw.length}`;
         vignette3 = [(String.fromCharCode(122,0) == huaweiw ? huaweiw.length : huaweiw.length)];
         break;
      }
      animationy.push(((hookx ? 3 : 5)));
      if (adult7) {
         break;
      }
   } while ((1 > (animationy.length & 3) && 2 > (3 & favoriteJ.length)) && adult7);
      plash0 /= Math.max(detailsD.size, 1);
   let splasho = detailsD.size >= 5428425;
   do {
      detailsD.set(`${mergerm}`, (3 & (mergerm ? 1 : 4)));
      if (splasho) {
         break;
      }
   } while (splasho && (detailsD.size > 1));
   let modules_ = 8253088 <= favoriteJ.length;
   do {
      favoriteJ = `${(1 << (Math.min(3, Math.abs((hookx ? 2 : 5)))))}`;
      if (modules_) {
         break;
      }
   } while (modules_ && (1 > (favoriteJ.length & 2)));
      minimizeu.set(`${plash0}`, (parseInt(`${plash0}`) * (mergerm ? 2 : 4)));
      animationy = [1 | parseInt(`${plash0}`)];
      animationy = [3];
       let sportg = String.fromCharCode(109,95,53,48,95,99,104,97,110,103,101,100,104,0);
          let executorW: Map<any, any> = new Map([[String.fromCharCode(122,95,57,51,95,108,115,112,112,111,108,121,0),70], [String.fromCharCode(116,116,108,0),712]]);
         sportg = `${executorW.size ^ sportg.length}`;
      let libswresamplet = sportg.length >= 6480535;
      do {
         sportg += `${2 - sportg.length}`;
         if (libswresamplet) {
            break;
         }
      } while ((sportg != sportg) && libswresamplet);
         sportg = `${sportg.length << (Math.min(Math.abs(3), 3))}`;
      animationy = [minimizeu.size % (Math.max(1, 1))];
      filef = [(3 >> (Math.min(Math.abs((championl ? 1 : 4)), 4)))];
   if (mergerm || !championl) {
      mergerm = 18 == detailsD.size && String.fromCharCode(106,0) == package_9aV;
   }
   let gestureX = 7942085 <= static_tQ.length;
   do {
      static_tQ.push(detailsD.size);
      if (gestureX) {
         break;
      }
   } while (((5 * filef.length) < 2) && gestureX);
       let middleU = String.fromCharCode(118,95,56,56,95,97,112,102,115,0);
       let gradlewK = String.fromCharCode(105,95,54,54,95,112,97,114,116,115,0);
       let push9 = false;
         gradlewK = `${gradlewK.length}`;
      while (middleU.length < 3 || gradlewK == String.fromCharCode(113,0)) {
         gradlewK += `${((push9 ? 3 : 1))}`;
         break;
      }
      let latnd = String.fromCharCode(116,116,54,118,0) == middleU;
      do {
         middleU = `${(String.fromCharCode(66,0) == middleU ? middleU.length : gradlewK.length)}`;
         if (latnd) {
            break;
         }
      } while (latnd && (!gradlewK.startsWith(middleU)));
         middleU = "1";
         gradlewK = `${1 * middleU.length}`;
      championl = (30 < ((!hookx ? 30 : filef.length) | filef.length));
   if (Array.from(minimizeu.values()).includes(detailsD.size)) {
      minimizeu.set(`${mergerm}`, (minimizeu.size / (Math.max(6, (mergerm ? 1 : 3)))));
   }
       let regengA = String.fromCharCode(116,95,55,52,95,100,105,115,116,114,105,98,117,116,101,0);
      if (regengA != regengA) {
          let icondefaultthumbnails = String.fromCharCode(115,116,97,110,100,97,114,100,115,0);
          let iconX = 0;
          let iconarrowrightH = 2.0;
          let hook_: Array<any> = [String.fromCharCode(108,111,111,112,102,105,108,116,101,114,0), String.fromCharCode(111,95,57,50,95,113,117,97,114,116,122,0)];
          let cancelL = String.fromCharCode(100,105,115,97,112,112,101,97,114,105,110,103,0);
         regengA += `${regengA.length >> (Math.min(Math.abs(3), 2))}`;
         icondefaultthumbnails += `${parseInt(`${iconarrowrightH}`)}`;
         iconX <<= Math.min(Math.abs(parseInt(`${iconarrowrightH}`) * cancelL.length), 2);
         hook_ = [parseInt(`${iconarrowrightH}`) | icondefaultthumbnails.length];
         cancelL = `${hook_.length}`;
      }
      for (let g = 0; g < 3; g++) {
          let iconpointscorea = String.fromCharCode(98,101,110,101,102,105,99,105,97,114,121,95,109,95,49,53,0);
          let nativemodule3 = 0;
          let rankn = true;
          let iconfeedbackY: Array<any> = [408, 208];
         regengA = `${1 & iconpointscorea.length}`;
         iconpointscorea += "2";
         nativemodule3 *= ((rankn ? 3 : 5) - iconfeedbackY.length);
         rankn = nativemodule3 <= 93 && !rankn;
         iconfeedbackY = [1 * nativemodule3];
      }
         regengA = "1";
      mergerm = detailsD.size < regengA.length;
      animationy.push(((championl ? 5 : 5) >> (Math.min(Math.abs((mergerm ? 2 : 4)), 1))));
   let scorepopsoundE = championl ? !championl : championl;
   do {
      championl = 79.39 == plash0;
      if (scorepopsoundE) {
         break;
      }
   } while ((!championl) && scorepopsoundE);
       let sliderk = true;
      for (let t = 0; t < 2; t++) {
          let pangled: Array<any> = [992, 349, 552];
         sliderk = pangled.length > 53;
      }
          let whatsappo = 1;
          let bgvipsport2 = String.fromCharCode(104,101,114,101,0);
          let owngoal6: Array<any> = [String.fromCharCode(115,99,114,111,108,108,101,114,95,118,95,51,0), String.fromCharCode(102,101,101,100,98,97,99,107,0), String.fromCharCode(100,121,110,108,111,97,100,95,115,95,54,53,0)];
         sliderk = 88 > owngoal6.length && whatsappo > 88;
         whatsappo *= bgvipsport2.length;
         bgvipsport2 += `${3 / (Math.max(10, bgvipsport2.length))}`;
          let cornershootC: Array<any> = [429, 571];
          let gemfiley = String.fromCharCode(121,95,55,50,95,111,114,105,101,110,116,97,116,105,111,110,115,0);
         sliderk = (3 == ((sliderk ? 3 : cornershootC.length) >> (Math.min(cornershootC.length, 3))));
         gemfiley = `${gemfiley.length * gemfiley.length}`;
      mergerm = !championl;
       let auto_q6 = String.fromCharCode(101,95,52,53,95,114,97,100,105,120,0);
       let changea = true;
      if (changea) {
          let holderz = false;
          let chatroombackground_ = String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,104,95,51,55,0);
          let selections = true;
          let mbjscommon9 = String.fromCharCode(108,111,111,107,97,115,105,100,101,0);
         changea = auto_q6 == mbjscommon9;
         holderz = (!holderz ? !selections : !holderz);
         chatroombackground_ = `${(String.fromCharCode(121,0) == chatroombackground_ ? chatroombackground_.length : (selections ? 3 : 1))}`;
         mbjscommon9 += "3";
      }
      while (!changea) {
          let thumbnailq = 4;
         auto_q6 += `${auto_q6.length % 1}`;
         thumbnailq += thumbnailq << (Math.min(Math.abs(2), 5));
         break;
      }
         changea = auto_q6.length <= 23;
      while (changea) {
          let renderp = 3;
          let routerx = 3;
          let emojiR: Array<any> = [651, 833];
          let smalla = String.fromCharCode(114,111,119,107,101,121,95,48,95,49,49,0);
         changea = routerx > 76 || !changea;
         renderp &= smalla.length & 3;
         routerx >>= Math.min(4, emojiR.length);
         emojiR.push((smalla == String.fromCharCode(102,0) ? smalla.length : emojiR.length));
         break;
      }
          let classesk = 5.0;
          let windh = 4;
         auto_q6 += `${(parseInt(`${classesk}`) / (Math.max(6, (changea ? 3 : 1))))}`;
         classesk += parseFloat(`${2}`);
         windh ^= windh - 1;
         auto_q6 += `${(2 - (changea ? 3 : 4))}`;
      mergerm = (17 >= (animationy.length & (!mergerm ? 17 : animationy.length)));
      static_tQ = [((championl ? 1 : 5) | (hookx ? 2 : 3))];
       let aboutQ: Array<any> = [String.fromCharCode(110,95,53,53,95,116,101,115,116,110,101,116,0), String.fromCharCode(102,95,57,56,95,98,119,114,105,116,101,0), String.fromCharCode(100,111,117,98,108,105,110,103,95,98,95,49,48,0)];
      if (5 <= aboutQ.length) {
          let adultA = true;
          let whiteu = 5;
         aboutQ.push(((adultA ? 1 : 2) + 1));
         adultA = whiteu >= whiteu;
      }
         aboutQ = [aboutQ.length / 2];
         aboutQ = [aboutQ.length * aboutQ.length];
      championl = 76 < filef.length;
      championl = 2 <= minimizeu.size;
       let bingm = String.fromCharCode(108,111,103,100,98,95,49,95,56,54,0);
       let styles_ = 4.0;
         bingm = `${parseInt(`${styles_}`) - 2}`;
          let window_lY = 5.0;
          let iconviewergifK = String.fromCharCode(107,95,53,52,95,97,117,116,104,101,110,116,104,105,99,97,116,101,0);
          let modal1: Array<any> = [911, 106];
         bingm += `${(String.fromCharCode(85,0) == iconviewergifK ? parseInt(`${window_lY}`) : iconviewergifK.length)}`;
         window_lY /= Math.max(2 ^ modal1.length, 5);
      for (let n = 0; n < 1; n++) {
          let release_09 = 2.0;
          let tooltipsc = 2.0;
          let filed6 = false;
          let constants4 = String.fromCharCode(119,95,49,95,112,114,111,116,101,99,116,0);
          let networkS = String.fromCharCode(103,97,116,104,101,114,0);
         styles_ -= networkS.length - parseInt(`${release_09}`);
         release_09 -= parseInt(`${tooltipsc}`);
         tooltipsc -= (parseFloat(`${(filed6 ? 4 : 5) >> (Math.min(Math.abs(parseInt(`${tooltipsc}`)), 5))}`));
         filed6 = tooltipsc >= 58.45;
         constants4 = "1";
         networkS = `${1 * constants4.length}`;
      }
          let penaltymatchiconU = String.fromCharCode(114,101,109,105,110,100,101,114,95,104,95,49,48,48,0);
          let whitetickG = 3;
          let backN = 1;
         styles_ /= Math.max(parseInt(`${styles_}`) / 3, 2);
         penaltymatchiconU = `${backN}`;
         whitetickG %= Math.max(whitetickG | backN, 3);
      if (styles_ <= bingm.length) {
         bingm = "2";
      }
      let whistleq = 5744116.0 >= styles_;
      do {
         styles_ -= bingm.length & parseInt(`${styles_}`);
         if (whistleq) {
            break;
         }
      } while ((bingm.length <= 4) && whistleq);
      filef.push(minimizeu.size ^ 1);
   for (let r = 0; r < 2; r++) {
       let whistlez: Map<any, any> = new Map([[String.fromCharCode(118,111,105,112,0),443], [String.fromCharCode(98,95,52,55,95,102,108,116,112,0),237]]);
      while (2 < whistlez.size) {
         whistlez.set(`${whistlez.size}`, 1 / (Math.max(1, whistlez.size)));
         break;
      }
         whistlez.set(`${whistlez.size}`, 1 >> (Math.min(3, Math.abs(whistlez.size))));
         whistlez = new Map([[`${whistlez.size}`, 2]]);
      animationy.push(1 | detailsD.size);
   }

            setShowSlider(false);
        }, 1000);
    }

    const handleScreenTouch = () => {
       let eighteenN = String.fromCharCode(112,97,99,107,101,116,115,0);
    let watch0 = String.fromCharCode(109,97,105,108,116,111,0);
    let calendarh = String.fromCharCode(102,114,97,109,101,110,117,109,95,51,95,51,57,0);
    let foregroundQ: Map<any, any> = new Map([[String.fromCharCode(105,110,116,108,0),229], [String.fromCharCode(115,95,51,53,0),544]]);
    let main_fr = true;
    let textlayoutmanager8 = String.fromCharCode(100,95,50,56,95,97,116,116,101,109,116,115,0);
    let goalv = String.fromCharCode(106,95,50,49,95,104,117,100,0);
    let cancelZ = String.fromCharCode(99,95,51,49,95,109,105,99,114,111,100,118,100,0);
    let rankR: Array<any> = [63, 900];
    let dplus6 = 4;
    let animationN = String.fromCharCode(106,95,49,56,95,101,110,99,97,112,115,117,108,97,116,101,100,0);
    let yellowp = 4.0;
      main_fr = rankR.length <= 80 || foregroundQ.size <= 80;
   if (eighteenN.endsWith(`${calendarh.length}`)) {
       let downQ = String.fromCharCode(98,95,52,57,95,115,105,103,110,114,97,110,100,0);
       let popupT: Map<any, any> = new Map([[String.fromCharCode(114,97,110,107,115,0),57], [String.fromCharCode(97,117,116,111,102,105,120,95,97,95,53,50,0),646], [String.fromCharCode(115,101,116,102,100,95,50,95,52,53,0),435]]);
       let iconorientationd = true;
       let faviconi = String.fromCharCode(100,95,56,54,95,103,114,97,110,117,108,101,0);
       let completej: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,105,116,105,121,95,54,95,56,51,0),678], [String.fromCharCode(97,108,97,114,109,0),889]]);
      let nbatrophyp = iconorientationd ? !iconorientationd : iconorientationd;
      do {
         iconorientationd = !iconorientationd;
         if (nbatrophyp) {
            break;
         }
      } while ((faviconi.length <= 5) && nbatrophyp);
         popupT.set(`${faviconi}`, completej.size - faviconi.length);
      for (let a = 0; a < 2; a++) {
          let soundT = String.fromCharCode(115,116,114,108,101,110,0);
          let mbnativek: Map<any, any> = new Map([[String.fromCharCode(101,95,52,56,95,114,119,110,100,0),502], [String.fromCharCode(99,111,110,99,104,95,116,95,49,48,48,0),895], [String.fromCharCode(102,104,116,120,0),622]]);
         iconorientationd = downQ.length > faviconi.length;
         soundT = `${soundT.length | mbnativek.size}`;
         mbnativek.set(soundT, soundT.length);
      }
      while ((completej.size + downQ.length) < 1 || (1 + completej.size) < 1) {
         downQ += `${downQ.length + faviconi.length}`;
         break;
      }
       let defaultlogoV = String.fromCharCode(111,110,110,101,99,116,105,111,110,0);
         downQ = `${defaultlogoV.length % 3}`;
         completej.set(`${completej.size}`, completej.size);
      while ((popupT.size ^ faviconi.length) >= 1 || (popupT.size ^ faviconi.length) >= 1) {
          let selectW = String.fromCharCode(118,97,108,105,100,97,116,101,95,105,95,57,49,0);
         popupT = new Map([[`${popupT.size}`, defaultlogoV.length]]);
         selectW = `${selectW.length & 1}`;
         break;
      }
      if (5 <= (3 ^ faviconi.length) || 3 <= (faviconi.length ^ popupT.size)) {
          let catalogE = 4.0;
          let setting0 = String.fromCharCode(112,105,110,107,0);
         faviconi = "2";
         catalogE -= parseInt(`${catalogE}`) / (Math.max(setting0.length, 7));
         setting0 += `${1 + parseInt(`${catalogE}`)}`;
      }
         completej = new Map([[faviconi, faviconi.length]]);
      for (let n = 0; n < 2; n++) {
         faviconi += `${completej.size % 1}`;
      }
      for (let q = 0; q < 3; q++) {
         faviconi += `${completej.size % (Math.max(3, 7))}`;
      }
      let iconpipexpandm = iconorientationd ? !iconorientationd : iconorientationd;
      do {
         iconorientationd = faviconi.length < 43;
         if (iconpipexpandm) {
            break;
         }
      } while (iconpipexpandm && (defaultlogoV.length > 2));
      for (let t = 0; t < 1; t++) {
         iconorientationd = defaultlogoV == String.fromCharCode(97,0) || 4 == popupT.size;
      }
         iconorientationd = (defaultlogoV.length ^ faviconi.length) == 49;
      eighteenN = "2";
   }
   while (1 <= (4 * calendarh.length) && 4 <= (calendarh.length * foregroundQ.size)) {
       let termsY: Array<any> = [753, 848];
       let nalytics2: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,101,99,98,0),214], [String.fromCharCode(116,101,115,116,98,105,116,0),700], [String.fromCharCode(119,111,114,107,115,95,122,95,54,51,0),675]]);
       let chat6 = 5.0;
      let predictionbuttonj = 8693724.0 >= chat6;
      do {
         chat6 -= 1 << (Math.min(2, Math.abs(parseInt(`${chat6}`))));
         if (predictionbuttonj) {
            break;
         }
      } while ((2.7 <= (2.45 / (Math.max(10, chat6)))) && predictionbuttonj);
      while (!Array.from(nalytics2.values()).includes(termsY.length)) {
         nalytics2 = new Map([[`${termsY.length}`, termsY.length]]);
         break;
      }
          let customA = String.fromCharCode(100,111,99,107,101,114,0);
         nalytics2 = new Map([[`${nalytics2.size}`, 2 ^ termsY.length]]);
         customA += `${(customA == String.fromCharCode(53,0) ? customA.length : customA.length)}`;
      if (1.32 >= (nalytics2.size - chat6) && (parseInt(`${chat6}`) - nalytics2.size) >= 5) {
         nalytics2.set(`${termsY.length}`, termsY.length * 1);
      }
       let homeloadingu = 3;
         chat6 /= Math.max(3, 1);
      if ((5 | termsY.length) < 4) {
         nalytics2 = new Map([[`${termsY.length}`, 1 + termsY.length]]);
      }
      for (let b = 0; b < 1; b++) {
         chat6 += 3 + parseInt(`${chat6}`);
      }
         termsY.push(nalytics2.size & termsY.length);
      foregroundQ = new Map([[`${nalytics2.size}`, nalytics2.size + 1]]);
      break;
   }
       let viewsO = true;
       let viewerF = String.fromCharCode(113,95,49,55,95,97,97,110,100,99,116,116,97,98,0);
       let nextZ = String.fromCharCode(114,101,115,111,108,118,101,0);
      for (let f = 0; f < 3; f++) {
         nextZ += "1";
      }
          let floatingD = false;
         viewerF = "2";
         floatingD = !floatingD;
         viewerF = `${((viewsO ? 5 : 1))}`;
       let modelsR = String.fromCharCode(99,111,109,112,111,115,105,116,105,110,103,95,108,95,51,49,0);
         nextZ += `${(String.fromCharCode(104,0) == modelsR ? modelsR.length : viewerF.length)}`;
       let floatingt = 4.0;
       let window_hz = 5.0;
         nextZ = "1";
         floatingt += (parseFloat(`${(viewsO ? 4 : 3) >> (Math.min(viewerF.length, 1))}`));
       let schedulee = false;
       let whitetickj = true;
      eighteenN = `${watch0.length}`;
   let mutedC = 9195566 <= dplus6;
   do {
      dplus6 <<= Math.min(Math.abs(2 - rankR.length), 3);
      if (mutedC) {
         break;
      }
   } while (((rankR.length % (Math.max(1, 6))) == 3 && (1 % (Math.max(7, rankR.length))) == 2) && mutedC);
   for (let e = 0; e < 1; e++) {
      goalv += `${goalv.length}`;
   }
      foregroundQ = new Map([[`${rankR.length}`, (cancelZ == String.fromCharCode(69,0) ? cancelZ.length : rankR.length)]]);
       let reactnativeultimatelistviewg = 5;
       let matches0 = 1.0;
       let submitu = 0.0;
      let pause9 = reactnativeultimatelistviewg <= 7642251;
      do {
         reactnativeultimatelistviewg ^= 1;
         if (pause9) {
            break;
         }
      } while (pause9 && (4.53 <= (1.18 - submitu)));
      let iconnewsshareQ = reactnativeultimatelistviewg <= 6821202;
      do {
          let infoP = true;
         reactnativeultimatelistviewg /= Math.max(2, parseInt(`${submitu}`) + 3);
         infoP = !infoP;
         if (iconnewsshareQ) {
            break;
         }
      } while ((4 < (reactnativeultimatelistviewg / (Math.max(parseInt(`${matches0}`), 6))) && 4 < (parseInt(`${matches0}`) / (Math.max(7, reactnativeultimatelistviewg)))) && iconnewsshareQ);
          let hometeamfieldf = String.fromCharCode(110,95,56,53,95,112,97,114,116,105,99,108,101,115,0);
          let catalog0: Array<any> = [String.fromCharCode(112,105,110,107,95,121,95,51,55,0), String.fromCharCode(99,108,97,122,122,95,50,95,56,52,0), String.fromCharCode(99,95,54,54,95,114,111,111,116,115,0)];
          let bangM: Array<any> = [935, 580];
         reactnativeultimatelistviewg /= Math.max(1, parseInt(`${matches0}`));
         hometeamfieldf = "1";
         catalog0 = [(hometeamfieldf == String.fromCharCode(80,0) ? catalog0.length : hometeamfieldf.length)];
         bangM = [(String.fromCharCode(79,0) == hometeamfieldf ? hometeamfieldf.length : bangM.length)];
      let libapminsightat = matches0 <= 8143351.0;
      do {
         matches0 += parseFloat(`${parseInt(`${submitu}`) + parseInt(`${matches0}`)}`);
         if (libapminsightat) {
            break;
         }
      } while (libapminsightat && ((1.12 / (Math.max(1, matches0))) >= 1.24 && 2 >= (reactnativeultimatelistviewg % 1)));
         submitu /= Math.max(2, parseFloat(`${2}`));
          let frame_ca3 = false;
          let homeinactivep = String.fromCharCode(116,95,56,57,95,100,99,98,108,111,99,107,0);
          let with_bk_ = String.fromCharCode(111,118,101,114,114,105,100,101,110,95,99,95,55,57,0);
         reactnativeultimatelistviewg |= (String.fromCharCode(120,0) == with_bk_ ? with_bk_.length : parseInt(`${submitu}`));
         frame_ca3 = !frame_ca3;
         homeinactivep += `${homeinactivep.length}`;
      for (let k = 0; k < 2; k++) {
         reactnativeultimatelistviewg >>= Math.min(4, Math.abs(1 - parseInt(`${matches0}`)));
      }
         matches0 *= parseFloat(`${parseInt(`${submitu}`)}`);
         matches0 *= parseFloat(`${parseInt(`${submitu}`)}`);
      eighteenN = `${2 & reactnativeultimatelistviewg}`;
       let collectionT: Array<any> = [80, 125, 68];
       let gifgoaln = String.fromCharCode(99,111,110,102,105,103,117,114,101,100,95,51,95,52,55,0);
       let reducer8 = 0.0;
          let iconnotificationnew5 = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,0);
          let selecty: Array<any> = [0, 271, 386];
          let custom6 = String.fromCharCode(118,97,114,121,105,110,103,0);
         gifgoaln += `${parseInt(`${reducer8}`) >> (Math.min(Math.abs(1), 5))}`;
         iconnotificationnew5 += `${custom6.length}`;
         selecty = [1 - custom6.length];
      let libapminsightbi = collectionT.length >= 9598414;
      do {
         collectionT = [parseInt(`${reducer8}`)];
         if (libapminsightbi) {
            break;
         }
      } while (libapminsightbi && ((collectionT.length >> (Math.min(Math.abs(4), 2))) == 5 && 3.39 == (5.1 * reducer8)));
      for (let c = 0; c < 2; c++) {
         gifgoaln += `${collectionT.length}`;
      }
      for (let e = 0; e < 2; e++) {
         gifgoaln = `${(String.fromCharCode(118,0) == gifgoaln ? gifgoaln.length : collectionT.length)}`;
      }
      let room2 = 9102396.0 <= reducer8;
      do {
         reducer8 /= Math.max(parseFloat(`${gifgoaln.length % 3}`), 4);
         if (room2) {
            break;
         }
      } while (room2 && (4 <= (gifgoaln.length * parseInt(`${reducer8}`))));
      if (4.14 < reducer8) {
         reducer8 /= Math.max(parseFloat(`${collectionT.length + gifgoaln.length}`), 3);
      }
      for (let p = 0; p < 3; p++) {
         collectionT.push(gifgoaln.length);
      }
      let humidityk = gifgoaln.length <= 5401261;
      do {
         gifgoaln = `${collectionT.length}`;
         if (humidityk) {
            break;
         }
      } while (humidityk && (5 <= gifgoaln.length));
          let whitetickz = String.fromCharCode(101,118,97,108,95,111,95,56,53,0);
         gifgoaln += `${collectionT.length ^ 1}`;
         whitetickz += `${whitetickz.length}`;
      eighteenN += `${1 + collectionT.length}`;
      calendarh += `${rankR.length}`;
   if ((cancelZ.length | dplus6) > 4) {
      cancelZ = `${rankR.length - watch0.length}`;
   }
   while ((eighteenN.length - 4) < 3 && (4 - foregroundQ.size) < 3) {
      foregroundQ.set(textlayoutmanager8, goalv.length);
      break;
   }
      foregroundQ = new Map([[`${main_fr}`, 1 << (Math.min(Math.abs(parseInt(`${yellowp}`)), 4))]]);
   let roundv = 7629312 <= rankR.length;
   do {
      rankR = [calendarh.length];
      if (roundv) {
         break;
      }
   } while ((2 < (foregroundQ.size * 5)) && roundv);
   let libbufferV = animationN.length >= 7205335;
   do {
       let frame_eF = String.fromCharCode(117,95,50,55,95,107,105,116,116,121,0);
       let minimizer = String.fromCharCode(97,95,53,49,95,101,118,97,108,117,97,116,105,111,110,0);
       let basketballiconY = String.fromCharCode(109,95,55,48,95,99,111,110,118,101,114,116,105,98,108,101,0);
       let neong = 2;
      while (minimizer.length < basketballiconY.length) {
         minimizer += `${frame_eF.length}`;
         break;
      }
          let targets = 2.0;
          let owngoalu: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,111,116,97,116,105,111,110,0),String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,115,95,122,95,52,57,0)], [String.fromCharCode(106,112,101,103,99,111,109,112,0),String.fromCharCode(109,95,51,95,113,110,111,115,0)], [String.fromCharCode(114,111,117,110,100,105,110,103,95,116,95,53,57,0),String.fromCharCode(98,95,51,54,95,108,111,116,116,105,101,112,97,114,115,101,114,0)]]);
          let rulesZ: Array<any> = [377, 137];
         minimizer = `${neong + frame_eF.length}`;
         targets += 3;
         owngoalu = new Map([[`${rulesZ.length}`, 1 >> (Math.min(2, rulesZ.length))]]);
      if (1 == minimizer.length) {
          let u_titlev = String.fromCharCode(108,111,99,97,108,0);
          let save_: Map<any, any> = new Map([[String.fromCharCode(115,101,116,115,111,99,107,111,112,116,0),532], [String.fromCharCode(97,117,120,95,100,95,49,48,48,0),307]]);
          let grayw = 3.0;
          let libreactnativejniw = 4.0;
          let libruntimeexecutorY = String.fromCharCode(102,105,114,115,116,95,51,95,56,54,0);
         minimizer += "3";
         u_titlev += `${parseInt(`${grayw}`) >> (Math.min(Math.abs(3), 1))}`;
         save_.set(libruntimeexecutorY, 1 & libruntimeexecutorY.length);
         grayw += parseFloat(`${1 << (Math.min(2, Math.abs(parseInt(`${grayw}`))))}`);
         libreactnativejniw /= Math.max(2, 3);
      }
          let backicont = true;
          let langD = false;
         basketballiconY += `${(neong % (Math.max(8, (backicont ? 3 : 2))))}`;
         backicont = langD || langD;
       let e_unlockU: Array<any> = [300, 515];
       let zhuboE: Array<any> = [712, 619];
          let confirmationP: Map<any, any> = new Map([[String.fromCharCode(100,105,110,102,95,115,95,54,57,0),String.fromCharCode(97,118,105,97,108,97,98,108,101,0)], [String.fromCharCode(117,110,115,104,97,114,112,0),String.fromCharCode(103,101,110,102,105,108,101,115,95,101,95,55,51,0)], [String.fromCharCode(101,120,105,115,116,105,110,103,0),String.fromCharCode(99,97,116,97,108,111,103,95,107,95,50,50,0)]]);
          let anytimeI: Array<any> = [453, 382];
         neong %= Math.max(basketballiconY.length | confirmationP.size, 5);
         confirmationP = new Map([[`${anytimeI.length}`, 1 - anytimeI.length]]);
         frame_eF += `${2 / (Math.max(8, e_unlockU.length))}`;
          let modulesB = 1;
          let turng = 1;
         zhuboE.push(2 ^ frame_eF.length);
         modulesB /= Math.max(2, turng);
         minimizer += `${frame_eF.length}`;
      while (3 >= (zhuboE.length / 1)) {
         neong >>= Math.min(4, Math.abs(1 ^ minimizer.length));
         break;
      }
       let leaguer = 3.0;
      while (leaguer < 3.60) {
         leaguer -= (basketballiconY == String.fromCharCode(49,0) ? e_unlockU.length : basketballiconY.length);
         break;
      }
      animationN += `${(eighteenN == String.fromCharCode(53,0) ? eighteenN.length : calendarh.length)}`;
      if (libbufferV) {
         break;
      }
   } while ((main_fr) && libbufferV);
      main_fr = 58 < goalv.length;
   let iconwechatx = 7164020.0 >= yellowp;
   do {
      yellowp += (3 & (main_fr ? 4 : 2));
      if (iconwechatx) {
         break;
      }
   } while (((yellowp + 2.92) == 5.35 && (yellowp + 2.92) == 4.17) && iconwechatx);
      foregroundQ = new Map([[calendarh, calendarh.length]]);
   while (rankR.length == 5) {
      foregroundQ.set(`${main_fr}`, 3 << (Math.min(3, animationN.length)));
      break;
   }
   for (let o = 0; o < 1; o++) {
       let windI = 5.0;
         windI /= Math.max(1, 2 << (Math.min(Math.abs(parseInt(`${windI}`)), 1)));
         windI -= parseInt(`${windI}`);
      for (let y = 0; y < 2; y++) {
          let overlay9 = false;
         windI -= parseInt(`${windI}`) % 1;
         overlay9 = !overlay9;
      }
      textlayoutmanager8 += `${watch0.length}`;
   }
       let frame_wO = true;
      while (!frame_wO && frame_wO) {
          let iconpointscoreF = String.fromCharCode(115,117,115,112,101,110,100,95,99,95,52,50,0);
          let actived = String.fromCharCode(115,117,110,112,111,115,0);
          let matchQ = String.fromCharCode(116,111,107,101,110,105,122,101,114,95,106,95,53,57,0);
         frame_wO = actived.length <= 6;
         iconpointscoreF += `${iconpointscoreF.length << (Math.min(matchQ.length, 4))}`;
         actived = `${iconpointscoreF.length - matchQ.length}`;
         break;
      }
       let smallb = 2;
       let arrown = 5;
          let mbnativeadvanced7 = 5.0;
         smallb *= smallb;
         mbnativeadvanced7 -= parseInt(`${mbnativeadvanced7}`) << (Math.min(Math.abs(parseInt(`${mbnativeadvanced7}`)), 1));
      yellowp *= 1;
   for (let a = 0; a < 3; a++) {
      main_fr = 28 < eighteenN.length;
   }
   while (goalv != String.fromCharCode(98,0) || eighteenN.length > 4) {
       let iconpointscoreG = 4.0;
       let hooksa = true;
       let showlessI = false;
       let iconclosewhitebgT = 0.0;
      if (iconpointscoreG <= 3.76) {
         iconpointscoreG /= Math.max(2, (1 / (Math.max((hooksa ? 5 : 4), 9))));
      }
         iconclosewhitebgT *= parseFloat(`${parseInt(`${iconclosewhitebgT}`) - 1}`);
      for (let s = 0; s < 2; s++) {
          let huaweit = true;
          let steph = String.fromCharCode(113,117,97,110,116,120,95,52,95,50,56,0);
          let thailandS = String.fromCharCode(102,97,99,101,98,111,111,107,95,112,95,53,56,0);
          let injury3 = String.fromCharCode(106,95,57,49,95,100,101,114,105,118,97,116,105,111,110,0);
          let rootm = 2.0;
         hooksa = injury3.length <= 1 || !huaweit;
         huaweit = 51 == thailandS.length;
         steph += `${(steph == String.fromCharCode(55,0) ? thailandS.length : steph.length)}`;
         injury3 = "2";
         rootm /= Math.max(5, steph.length << (Math.min(Math.abs(3), 4)));
      }
         showlessI = !showlessI;
      if (2.36 > (iconclosewhitebgT - 5.39) || showlessI) {
         showlessI = iconclosewhitebgT >= 19.43;
      }
      let cancelA = iconpointscoreG <= 9882619.0;
      do {
          let unselectedx = String.fromCharCode(117,110,105,110,115,116,97,108,108,95,98,95,56,49,0);
          let materialb = String.fromCharCode(110,95,56,52,95,97,108,116,114,101,102,0);
          let scorepopsounds = String.fromCharCode(117,110,98,108,111,99,107,0);
         iconpointscoreG -= scorepopsounds.length;
         unselectedx += `${(materialb == String.fromCharCode(48,0) ? unselectedx.length : materialb.length)}`;
         scorepopsounds += `${2 - materialb.length}`;
         if (cancelA) {
            break;
         }
      } while (cancelA && (iconpointscoreG < iconclosewhitebgT));
       let whistleorangeI = 3.0;
       let interstitialx = 5.0;
       let matchdetailbgw = true;
      if (matchdetailbgw) {
         iconpointscoreG /= Math.max(3 << (Math.min(Math.abs(parseInt(`${iconclosewhitebgT}`)), 1)), 1);
      }
         whistleorangeI *= parseFloat(`${3 | parseInt(`${whistleorangeI}`)}`);
      for (let s = 0; s < 1; s++) {
          let const_cz = true;
          let iconmorej = 3.0;
          let orientationf = 2.0;
          let settingU: Array<any> = [String.fromCharCode(104,95,50,53,95,112,111,112,117,112,0), String.fromCharCode(104,95,56,56,95,115,111,117,114,99,101,105,100,0)];
         hooksa = iconpointscoreG >= 67.91 && 79 >= settingU.length;
         const_cz = 8.97 == orientationf;
         iconmorej /= Math.max(parseFloat(`${parseInt(`${iconmorej}`) | parseInt(`${orientationf}`)}`), 1);
         settingU.push(3 % (Math.max(parseInt(`${iconmorej}`), 6)));
      }
         showlessI = !showlessI;
      goalv = `${goalv.length ^ animationN.length}`;
      break;
   }
   for (let j = 0; j < 3; j++) {
      foregroundQ.set(`${dplus6}`, foregroundQ.size);
   }
   for (let z = 0; z < 1; z++) {
      main_fr = watch0.length >= 74;
   }
      goalv += "2";
   while (calendarh == goalv) {
       let abidetect9 = 5.0;
       let mbsplashX: Map<any, any> = new Map([[String.fromCharCode(100,117,114,103,101,114,107,105,110,103,95,52,95,54,49,0),70], [String.fromCharCode(115,116,114,105,100,101,98,95,120,95,56,56,0),824], [String.fromCharCode(116,104,101,109,101,115,95,101,95,53,55,0),545]]);
       let handlerK = true;
       let chinasame3: Array<any> = [41, 967, 308];
      while (Array.from(mbsplashX.values()).includes(abidetect9)) {
         mbsplashX.set(`${abidetect9}`, chinasame3.length);
         break;
      }
          let eighteend = 2;
          let subsM: Array<any> = [String.fromCharCode(115,116,114,114,101,115,101,116,0), String.fromCharCode(97,118,115,116,114,105,110,103,95,106,95,49,54,0)];
          let downloadedA = 2;
         handlerK = 13 <= eighteend || 13 <= downloadedA;
         eighteend |= subsM.length;
         subsM = [subsM.length];
      let goalm = mbsplashX.size >= 9040193;
      do {
          let sorto = 0;
          let inviteR = String.fromCharCode(111,95,56,52,0);
         mbsplashX.set(`${abidetect9}`, parseInt(`${abidetect9}`) % (Math.max(4, mbsplashX.size)));
         sorto /= Math.max(3, 5);
         inviteR = `${sorto >> (Math.min(Math.abs(2), 4))}`;
         if (goalm) {
            break;
         }
      } while ((mbsplashX.size < 5) && goalm);
          let stepF = 0.0;
          let fnewsF = false;
          let volume7 = 0.0;
         chinasame3.push(((fnewsF ? 2 : 3) % (Math.max(parseInt(`${volume7}`), 2))));
         stepF -= parseFloat(`${3 | parseInt(`${stepF}`)}`);
         fnewsF = 83.16 >= stepF;
      while (!Array.from(mbsplashX.keys()).includes(`${abidetect9}`)) {
         mbsplashX = new Map([[`${mbsplashX.size}`, 3]]);
         break;
      }
      if (2 < (mbsplashX.size * 2)) {
         handlerK = mbsplashX.get(`${abidetect9}`) == null;
      }
         handlerK = null != mbsplashX.get(`${handlerK}`);
         handlerK = ((chinasame3.length & (!handlerK ? chinasame3.length : 15)) >= 15);
          let j_unlockx: Map<any, any> = new Map([[String.fromCharCode(114,95,50,50,95,103,101,110,101,115,105,115,0),true ], [String.fromCharCode(111,95,51,95,111,99,99,117,112,105,101,100,0),false ], [String.fromCharCode(116,95,54,55,95,108,97,110,100,109,105,110,101,115,0),true ]]);
         chinasame3 = [chinasame3.length];
         j_unlockx.set(`${j_unlockx.size}`, j_unlockx.size & 1);
      for (let x = 0; x < 1; x++) {
          let thumbnaili: Map<any, any> = new Map([[String.fromCharCode(102,111,114,98,105,100,100,101,110,95,55,95,51,49,0),1000], [String.fromCharCode(109,97,110,97,103,101,114,95,108,95,55,48,0),828]]);
          let basketballtrophyQ = 1;
          let libavcodecW: Map<any, any> = new Map([[String.fromCharCode(109,98,112,114,101,100,0),491], [String.fromCharCode(120,95,56,53,0),335]]);
          let iconedity: Map<any, any> = new Map([[String.fromCharCode(98,105,116,111,112,115,95,112,95,49,48,0),637], [String.fromCharCode(112,114,101,112,114,111,99,101,115,115,95,112,95,54,57,0),684]]);
          let rewardvideom = String.fromCharCode(113,95,49,57,95,109,111,100,105,102,105,99,97,116,105,111,110,115,0);
         abidetect9 += chinasame3.length / (Math.max(3, 7));
         thumbnaili = new Map([[`${libavcodecW.size}`, basketballtrophyQ % (Math.max(1, 10))]]);
         basketballtrophyQ &= libavcodecW.size >> (Math.min(Math.abs(iconedity.size), 5));
         iconedity = new Map([[`${thumbnaili.size}`, 2 * thumbnaili.size]]);
         rewardvideom = `${1 >> (Math.min(4, Math.abs(libavcodecW.size)))}`;
      }
         chinasame3 = [parseInt(`${abidetect9}`) & 3];
       let expiredF: Map<any, any> = new Map([[String.fromCharCode(112,111,115,105,116,105,111,110,0),55], [String.fromCharCode(103,97,115,95,51,95,56,52,0),124], [String.fromCharCode(97,115,115,105,103,110,101,100,0),546]]);
      goalv += `${(cancelZ == String.fromCharCode(77,0) ? (handlerK ? 1 : 2) : cancelZ.length)}`;
      break;
   }
      textlayoutmanager8 += `${rankR.length >> (Math.min(Math.abs(3), 3))}`;

        onScreenTouched();
    }

    return (
        <View style={!disableFullScreenGesture ? styles.container : { zIndex: -10, position: 'absolute' }}>
            <BrightnessGestureControl
                onChangeBrightness={(value: number) => {
                    onPropertyChanged(GestureControls.BRIGHTNESS, value)
                }}
                onTouchScreen={handleScreenTouch}
            />
            {
                vodType === 'vod' && <ProgressGestureControl
                    onTouchScreen={handleScreenTouch}
                    onProgressChange={onSkip}
                />
            }
            <VolumeGestureControl
                onChangeVolume={(value: number) => {
                    onPropertyChanged(GestureControls.VOLUME, value)
                }}
                onTouchScreen={handleScreenTouch}
            />
            {showSlider && (
                <BrightnessVolumeSlider
                    percent={100 * value}
                    icon={
                        value === 0 ? icon.noValue : icon.hasValue
                    }
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        zIndex: 20,
        position: 'absolute'
    }
});