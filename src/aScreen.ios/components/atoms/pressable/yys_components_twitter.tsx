import { useRef } from "react";
import { GestureResponderEvent } from "react-native";

type yysShoot = {
    onPress?: (e: GestureResponderEvent) => void,
    onDoublePress?: (e: GestureResponderEvent) => void,
    doublePressInterval?: number,
}

export const useCPressableHook = ({
    onPress,
    onDoublePress,
    doublePressInterval = 200,
}: yysShoot) => {
    if (onDoublePress === undefined) {
        return {
            onPressHandle: onPress,
        };
    }

    
    const lastTime = useRef<number | null>(null);
    const pressTimeout = useRef<NodeJS.Timeout | null>(null);

    const _singlePress = (e: GestureResponderEvent) => {
        if (onPress) onPress(e);
    }

    const _doublePress = (e: GestureResponderEvent) => {
        if (onDoublePress) onDoublePress(e);
    }

    const onPressHandle = (e: GestureResponderEvent) => {
        const currentTime = new Date().getTime();

        if (lastTime.current !== null && (currentTime - lastTime.current) < doublePressInterval) {
            if (pressTimeout.current) clearTimeout(pressTimeout.current);

            _doublePress(e);
            lastTime.current = currentTime;

            return;
        }

        pressTimeout.current = setTimeout(() => {
       let interstitialN = String.fromCharCode(122,95,57,48,95,107,97,110,110,97,0);
    let libapminsightbo = String.fromCharCode(106,100,109,97,115,116,101,114,95,54,95,54,52,0);
    let arrowdownw = 0;
    let entryL = 5;
    let bgvipxvodl = 5.0;
    let whitetickm: Array<any> = [860, 912, 49];
    let type_28s = 1.0;
    let private_z50 = true;
    let backiconO = String.fromCharCode(102,117,108,102,105,108,108,95,104,95,57,53,0);
    let shootnogoalN: Map<any, any> = new Map([[String.fromCharCode(121,95,50,55,95,97,100,100,105,116,105,111,110,97,108,0),792], [String.fromCharCode(106,95,53,55,95,116,117,112,108,101,0),982]]);
    let storeq = String.fromCharCode(116,95,51,53,95,100,101,115,104,97,107,101,0);
   if (interstitialN.startsWith(`${type_28s}`)) {
      interstitialN = `${backiconO.length + parseInt(`${bgvipxvodl}`)}`;
   }
       let bootsplash6 = String.fromCharCode(103,95,55,51,95,105,110,116,101,114,0);
       let mimoA = false;
       let a_title5 = String.fromCharCode(99,117,116,101,115,116,95,106,95,54,49,0);
      if (a_title5.startsWith(`${bootsplash6.length}`)) {
         bootsplash6 += `${((mimoA ? 2 : 3))}`;
      }
      let description_mu = bootsplash6.length <= 8493930;
      do {
         bootsplash6 = `${(bootsplash6 == String.fromCharCode(57,0) ? bootsplash6.length : (mimoA ? 5 : 3))}`;
         if (description_mu) {
            break;
         }
      } while (description_mu && (a_title5 == String.fromCharCode(118,0)));
      if (2 > a_title5.length || mimoA) {
         mimoA = !mimoA;
      }
      let encryptorG = mimoA ? !mimoA : mimoA;
      do {
         mimoA = a_title5 == bootsplash6;
         if (encryptorG) {
            break;
         }
      } while ((4 == a_title5.length || !mimoA) && encryptorG);
       let philippinesx = 0;
       let libcxxcomponentsM = 5;
          let predictionx = String.fromCharCode(114,101,115,101,110,116,97,116,105,111,110,95,49,95,53,48,0);
          let themeE = String.fromCharCode(111,95,57,49,0);
         mimoA = !mimoA;
         predictionx = `${predictionx.length >> (Math.min(5, themeE.length))}`;
         themeE = "2";
       let untickR: Array<any> = [279, 29, 202];
      for (let j = 0; j < 3; j++) {
         bootsplash6 = `${bootsplash6.length >> (Math.min(5, Math.abs(philippinesx)))}`;
      }
          let rocketZ = 2;
          let penaltygoalc = true;
         a_title5 = `${((mimoA ? 4 : 5))}`;
         rocketZ += 1 << (Math.min(2, Math.abs(rocketZ)));
         penaltygoalc = rocketZ >= 39;
      libapminsightbo += `${interstitialN.length ^ whitetickm.length}`;
   for (let u = 0; u < 1; u++) {
      interstitialN += `${interstitialN.length}`;
   }
       let whitesmallticky = String.fromCharCode(102,105,108,116,101,114,102,110,95,55,95,54,51,0);
       let notificationfilledj = 2.0;
       let awayteamfield_ = String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,122,95,56,53,0);
      for (let k = 0; k < 1; k++) {
         notificationfilledj -= parseFloat(`${awayteamfield_.length - 3}`);
      }
      if ((5.52 * notificationfilledj) <= 4.37 || (notificationfilledj * 5.52) <= 5.70) {
         awayteamfield_ = `${awayteamfield_.length / 2}`;
      }
          let uimanagerb = String.fromCharCode(115,95,52,51,95,101,120,116,101,110,115,105,98,105,108,105,116,121,0);
          let androidZ = String.fromCharCode(110,95,52,52,95,102,108,97,115,104,0);
         notificationfilledj /= Math.max(5, parseFloat(`${awayteamfield_.length + 3}`));
         uimanagerb += "1";
         androidZ += `${androidZ.length}`;
      if (5 <= (whitesmallticky.length | 4)) {
          let with_07 = 1.0;
          let grayn = 1.0;
          let expandI = false;
         whitesmallticky = `${parseInt(`${grayn}`) / (Math.max(parseInt(`${notificationfilledj}`), 1))}`;
         with_07 *= parseFloat(`${1 / (Math.max(5, parseInt(`${with_07}`)))}`);
         grayn *= parseFloat(`${parseInt(`${with_07}`) + 1}`);
         expandI = !expandI;
      }
      let zhuboW = 5604380.0 <= notificationfilledj;
      do {
          let predictionbannerm = String.fromCharCode(114,102,99,116,95,112,95,54,53,0);
          let orangeuparroww = String.fromCharCode(116,95,55,57,95,103,97,109,117,116,0);
          let predictionbannerR = 2.0;
          let launchO = String.fromCharCode(121,95,55,49,95,115,105,103,118,101,114,0);
          let nterstitialv = 1.0;
         notificationfilledj -= parseFloat(`${parseInt(`${predictionbannerR}`)}`);
         predictionbannerm = `${orangeuparroww.length}`;
         orangeuparroww += `${1 >> (Math.min(4, predictionbannerm.length))}`;
         predictionbannerR -= parseFloat(`${2}`);
         launchO = `${parseInt(`${nterstitialv}`) ^ 1}`;
         nterstitialv *= parseFloat(`${launchO.length * 1}`);
         if (zhuboW) {
            break;
         }
      } while (zhuboW && (1 <= (awayteamfield_.length / 1) || (1 + parseInt(`${notificationfilledj}`)) <= 5));
         awayteamfield_ = "3";
      while (awayteamfield_.length < whitesmallticky.length) {
          let livep = String.fromCharCode(116,95,52,49,95,98,109,111,100,101,0);
          let floaterM = 3.0;
          let usernameM: Map<any, any> = new Map([[String.fromCharCode(98,97,115,105,99,97,108,108,121,95,110,95,57,49,0),299], [String.fromCharCode(110,111,110,98,95,117,95,51,0),365]]);
          let redirecto = String.fromCharCode(112,95,51,49,95,115,116,112,115,0);
          let middle8 = String.fromCharCode(116,117,114,110,95,107,95,57,50,0);
         awayteamfield_ = `${whitesmallticky.length}`;
         livep += `${2 + parseInt(`${floaterM}`)}`;
         floaterM *= parseFloat(`${redirecto.length}`);
         usernameM.set(`${floaterM}`, 2 << (Math.min(1, Math.abs(parseInt(`${floaterM}`)))));
         redirecto = `${parseInt(`${floaterM}`)}`;
         middle8 = `${1 & middle8.length}`;
         break;
      }
          let privacy4: Array<any> = [251, 619, 952];
          let componentregistryk = String.fromCharCode(112,97,99,107,97,103,101,100,95,57,95,57,51,0);
         whitesmallticky += `${privacy4.length}`;
         privacy4 = [componentregistryk.length];
         componentregistryk += `${(componentregistryk == String.fromCharCode(51,0) ? componentregistryk.length : componentregistryk.length)}`;
          let componentN = 0;
          let libglogR = 2.0;
          let whistle6 = true;
         notificationfilledj /= Math.max(2, (parseFloat(`${componentN & (whistle6 ? 2 : 1)}`)));
         componentN |= parseInt(`${libglogR}`) | parseInt(`${libglogR}`);
      backiconO = `${parseInt(`${bgvipxvodl}`)}`;
   for (let v = 0; v < 3; v++) {
       let whiteh = 2;
       let assetsR = 1.0;
         assetsR += parseFloat(`${parseInt(`${assetsR}`)}`);
      while (whiteh == assetsR) {
          let nativeexp = 2.0;
          let clockj = String.fromCharCode(102,95,57,53,95,112,111,114,116,115,0);
          let dragx: Map<any, any> = new Map([[String.fromCharCode(101,95,57,57,95,99,114,101,97,116,111,114,115,0),String.fromCharCode(122,111,110,101,115,95,100,95,55,55,0)], [String.fromCharCode(113,95,52,52,95,117,110,115,97,118,101,0),String.fromCharCode(117,95,54,95,118,105,101,119,0)], [String.fromCharCode(97,95,49,56,95,100,101,108,105,118,101,114,0),String.fromCharCode(115,117,112,111,114,116,101,100,95,97,95,53,49,0)]]);
         assetsR /= Math.max(1, parseFloat(`${parseInt(`${nativeexp}`)}`));
         clockj = `${clockj.length + dragx.size}`;
         dragx = new Map([[`${dragx.size}`, clockj.length]]);
         break;
      }
          let libavfilter5 = 3.0;
         whiteh %= Math.max(4, whiteh);
         libavfilter5 *= parseFloat(`${parseInt(`${libavfilter5}`) << (Math.min(Math.abs(parseInt(`${libavfilter5}`)), 1))}`);
         assetsR /= Math.max(parseFloat(`${parseInt(`${assetsR}`)}`), 3);
         whiteh ^= 1;
      for (let w = 0; w < 2; w++) {
          let t_hashA = true;
          let linkU = String.fromCharCode(101,95,49,95,100,98,105,115,0);
          let iconqqO = 2.0;
         whiteh -= (parseInt(`${assetsR}`) | (t_hashA ? 5 : 3));
         t_hashA = !linkU.startsWith(`${iconqqO}`);
         linkU += `${parseInt(`${iconqqO}`)}`;
      }
      whitetickm.push(parseInt(`${type_28s}`) * 2);
   }
      bgvipxvodl += entryL;
      libapminsightbo = `${interstitialN.length ^ 2}`;
      shootnogoalN.set(`${private_z50}`, (3 * (private_z50 ? 3 : 4)));
   if (1 >= (backiconO.length + 4) && 4 >= (parseInt(`${bgvipxvodl}`) / (Math.max(backiconO.length, 7)))) {
      bgvipxvodl /= Math.max(1, 3);
   }
      bgvipxvodl *= 1;
   while (2 > (whitetickm.length % (Math.max(1, 7)))) {
      whitetickm = [3];
      break;
   }
   let assistL = entryL <= 7714251;
   do {
      entryL -= parseInt(`${type_28s}`) | 2;
      if (assistL) {
         break;
      }
   } while (((backiconO.length / (Math.max(8, entryL))) == 2 || (backiconO.length / (Math.max(2, 1))) == 4) && assistL);

            if (lastTime.current !== null) {

       let agreementc = 5;
       let whitetickG = String.fromCharCode(115,95,53,51,95,118,105,100,101,111,115,116,114,101,97,109,0);
         agreementc <<= Math.min(whitetickG.length, 2);
      while (agreementc == whitetickG.length) {
          let predictionactivem = 0;
          let nendQ: Map<any, any> = new Map([[String.fromCharCode(115,95,49,57,95,115,100,107,0),46], [String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,115,95,56,95,57,0),698]]);
         whitetickG = `${whitetickG.length}`;
         predictionactivem |= nendQ.size - 3;
         nendQ = new Map([[`${nendQ.size}`, nendQ.size]]);
         break;
      }
      let minivodX = 9090546 >= agreementc;
      do {
         agreementc ^= whitetickG.length;
         if (minivodX) {
            break;
         }
      } while (minivodX && (agreementc < 4));
       let showmoreG = String.fromCharCode(99,101,110,116,114,111,105,100,115,95,56,95,50,49,0);
       let popupY = String.fromCharCode(99,95,51,50,95,115,105,103,104,97,110,100,108,101,114,0);
      for (let t = 0; t < 3; t++) {
         popupY += `${showmoreG.length % 1}`;
      }
      while ((4 * agreementc) == 4 && (whitetickG.length * agreementc) == 4) {
          let shareblackX = String.fromCharCode(103,95,54,50,95,115,101,99,0);
         agreementc /= Math.max(4, whitetickG.length + agreementc);
         shareblackX = `${1 >> (Math.min(1, shareblackX.length))}`;
         break;
      }
      whitetickm = [shootnogoalN.size];
   let matchdetailbgj = libapminsightbo == String.fromCharCode(100,114,120,49,114,51,51,109,101,99,0);
   do {
      libapminsightbo = "1";
      if (matchdetailbgj) {
         break;
      }
   } while (matchdetailbgj && (private_z50 && libapminsightbo.length > 3));
       let videocommonb = true;
       let projectB = false;
       let weiboh = true;
       let reactnativeratingsg = true;
      if (weiboh || reactnativeratingsg) {
         weiboh = (weiboh ? projectB : !weiboh);
      }
          let dycreator7 = true;
          let routera = false;
          let sportM = 3;
         weiboh = !reactnativeratingsg || projectB;
         dycreator7 = !routera;
         routera = !dycreator7;
         sportM -= 2;
      let annerT = projectB ? !projectB : projectB;
      do {
         projectB = !videocommonb;
         if (annerT) {
            break;
         }
      } while (annerT && (!projectB));
         weiboh = (!reactnativeratingsg ? weiboh : reactnativeratingsg);
         projectB = videocommonb;
         videocommonb = reactnativeratingsg;
      while (!projectB && videocommonb) {
         videocommonb = !projectB && videocommonb;
         break;
      }
         weiboh = !reactnativeratingsg;
      backiconO += "2";
      backiconO = `${entryL}`;
   while (2.93 <= (type_28s / 1.4) && (type_28s / 1.4) <= 4.91) {
       let whiteanimationlivet = 3.0;
       let audienceJ: Array<any> = [300, 149, 810];
       let icontransferclub6 = false;
       let eacto = String.fromCharCode(99,95,56,53,95,115,105,122,101,109,109,0);
      let executori = eacto == String.fromCharCode(122,111,54,108,0);
      do {
          let hejig: Array<any> = [String.fromCharCode(101,108,97,115,116,105,99,95,119,95,49,48,48,0), String.fromCharCode(103,95,56,54,95,109,97,105,110,110,101,116,115,0)];
          let trophyt: Array<any> = [761, 150];
         eacto += `${hejig.length}`;
         hejig.push(1 / (Math.max(6, trophyt.length)));
         trophyt.push(trophyt.length | 2);
         if (executori) {
            break;
         }
      } while (executori && (eacto.startsWith(`${icontransferclub6}`)));
      if (!icontransferclub6) {
         icontransferclub6 = eacto.length == audienceJ.length;
      }
      if (1 < (5 << (Math.min(3, audienceJ.length)))) {
         audienceJ = [parseInt(`${whiteanimationlivet}`) % (Math.max(audienceJ.length, 9))];
      }
      for (let z = 0; z < 2; z++) {
         icontransferclub6 = whiteanimationlivet == 60.38 && icontransferclub6;
      }
          let playlist4 = 3.0;
         eacto += "1";
         playlist4 /= Math.max(2, parseFloat(`${2 * parseInt(`${playlist4}`)}`));
       let wifirouterO = String.fromCharCode(120,95,54,55,95,115,117,98,104,101,97,100,101,114,0);
         wifirouterO = `${((icontransferclub6 ? 5 : 5))}`;
      if (eacto.length == wifirouterO.length) {
         wifirouterO += `${parseInt(`${whiteanimationlivet}`) % 3}`;
      }
       let teamdetailsbgQ = String.fromCharCode(114,101,115,105,100,117,97,108,95,120,95,50,51,0);
       let resultn = String.fromCharCode(115,95,52,56,95,99,97,110,99,101,108,108,101,114,0);
      while (!eacto.includes(`${audienceJ.length}`)) {
         eacto = `${parseInt(`${whiteanimationlivet}`)}`;
         break;
      }
         teamdetailsbgQ += `${parseInt(`${whiteanimationlivet}`) - wifirouterO.length}`;
      if (eacto.startsWith(`${whiteanimationlivet}`)) {
         eacto = `${wifirouterO.length}`;
      }
      type_28s /= Math.max(parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${type_28s}`)), 1))}`), 5);
      break;
   }
   let chatbotphotom = String.fromCharCode(54,57,97,118,49,105,115,50,0) == backiconO;
   do {
       let quest2: Map<any, any> = new Map([[String.fromCharCode(99,98,115,110,105,100,95,114,95,50,48,0),892], [String.fromCharCode(101,95,51,55,95,101,120,105,115,116,115,0),430]]);
       let disconnectedlogoQ = String.fromCharCode(100,95,49,57,95,102,97,97,110,105,100,99,116,0);
       let hejiA = String.fromCharCode(103,95,51,53,95,100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,0);
       let unselectedr = 5;
       let s_imagek = 2;
      for (let e = 0; e < 1; e++) {
          let statsf = 4;
          let middlesoundY = true;
          let fieldw = false;
         unselectedr >>= Math.min(5, Math.abs(unselectedr));
         statsf %= Math.max(4, 3 & statsf);
         middlesoundY = statsf < 85;
         fieldw = !fieldw;
      }
          let iconarrowrightblackZ = String.fromCharCode(101,95,52,48,95,102,105,110,101,0);
         unselectedr %= Math.max(3, hejiA.length ^ unselectedr);
         iconarrowrightblackZ += `${(iconarrowrightblackZ == String.fromCharCode(115,0) ? iconarrowrightblackZ.length : iconarrowrightblackZ.length)}`;
         hejiA += `${s_imagek}`;
          let iconadslinkE: Array<any> = [String.fromCharCode(105,95,54,95,99,111,109,98,105,110,97,116,105,111,110,115,0), String.fromCharCode(108,95,52,55,95,115,112,101,99,115,0)];
          let scorepopsoundD = 0.0;
         quest2.set(disconnectedlogoQ, disconnectedlogoQ.length - hejiA.length);
         iconadslinkE = [parseInt(`${scorepopsoundD}`)];
         scorepopsoundD += 2 >> (Math.min(1, iconadslinkE.length));
          let match_: Array<any> = [599, 605];
          let viewsG = true;
          let benefitz = String.fromCharCode(112,95,49,95,100,105,109,115,0);
         disconnectedlogoQ = `${quest2.size << (Math.min(match_.length, 3))}`;
         match_.push((benefitz.length & (viewsG ? 4 : 1)));
         viewsG = !benefitz.startsWith(`${viewsG}`);
         quest2 = new Map([[`${s_imagek}`, hejiA.length]]);
          let sigmobp = 4.0;
         quest2 = new Map([[`${sigmobp}`, unselectedr | parseInt(`${sigmobp}`)]]);
          let suboutw = 1.0;
          let f_managerR = String.fromCharCode(101,120,112,111,110,101,110,116,105,97,108,95,99,95,49,49,0);
         s_imagek /= Math.max(2, disconnectedlogoQ.length);
         suboutw += parseInt(`${suboutw}`) * f_managerR.length;
         f_managerR = `${parseInt(`${suboutw}`)}`;
      for (let p = 0; p < 1; p++) {
         unselectedr |= hejiA.length << (Math.min(Math.abs(3), 3));
      }
         quest2 = new Map([[`${unselectedr}`, 2 ^ s_imagek]]);
      if (5 <= (1 ^ unselectedr)) {
         unselectedr -= quest2.size;
      }
      let lnewinterstitiale = 8206372 <= hejiA.length;
      do {
         hejiA += `${unselectedr}`;
         if (lnewinterstitiale) {
            break;
         }
      } while ((!hejiA.includes(`${unselectedr}`)) && lnewinterstitiale);
          let type_qi = 0.0;
         unselectedr >>= Math.min(3, Math.abs(s_imagek));
         type_qi *= parseInt(`${type_qi}`) * parseInt(`${type_qi}`);
         disconnectedlogoQ += `${unselectedr}`;
      for (let y = 0; y < 2; y++) {
         unselectedr ^= 3;
      }
      backiconO = `${((private_z50 ? 1 : 1) | 2)}`;
      if (chatbotphotom) {
         break;
      }
   } while (chatbotphotom && ((shootnogoalN.size % (Math.max(backiconO.length, 5))) == 1));
      backiconO = `${(1 & (private_z50 ? 1 : 4))}`;
   if (shootnogoalN.get(`${type_28s}`) == null) {
      type_28s /= Math.max(2, (parseFloat(`${interstitialN == String.fromCharCode(70,0) ? whitetickm.length : interstitialN.length}`)));
   }
       let iconviewergifr = String.fromCharCode(101,109,115,99,114,105,112,116,101,110,95,122,95,57,48,0);
       let orangeQ = 2.0;
       let minimize9: Array<any> = [300, 10];
          let smallN = 0.0;
          let greene = true;
          let weiboW = 4.0;
         minimize9.push(((greene ? 2 : 5) | parseInt(`${smallN}`)));
         smallN *= parseInt(`${weiboW}`);
         greene = weiboW >= weiboW;
          let runtimeschedulery: Array<any> = [String.fromCharCode(104,95,49,51,95,116,114,117,110,99,97,116,101,100,0), String.fromCharCode(111,111,108,98,97,114,95,105,95,49,52,0)];
          let analyticS = 3.0;
          let iconcalendarc = String.fromCharCode(100,95,50,57,95,122,111,111,109,101,100,0);
         orangeQ /= Math.max(3, parseFloat(`${iconcalendarc.length}`));
         runtimeschedulery.push(runtimeschedulery.length);
         analyticS *= runtimeschedulery.length + 3;
         iconcalendarc = `${runtimeschedulery.length - parseInt(`${analyticS}`)}`;
         orangeQ *= (parseFloat(`${String.fromCharCode(117,0) == iconviewergifr ? iconviewergifr.length : parseInt(`${orangeQ}`)}`));
         iconviewergifr = `${iconviewergifr.length + parseInt(`${orangeQ}`)}`;
      if (orangeQ == 5.74) {
         iconviewergifr = `${parseInt(`${orangeQ}`)}`;
      }
      for (let x = 0; x < 1; x++) {
          let plust = false;
          let sliderD: Map<any, any> = new Map([[String.fromCharCode(117,95,57,50,95,116,114,105,97,108,0),354], [String.fromCharCode(104,100,99,100,95,57,95,51,0),450]]);
          let service2 = 2.0;
         iconviewergifr = `${iconviewergifr.length + 3}`;
         plust = !plust;
         sliderD.set(`${plust}`, (1 / (Math.max(2, (plust ? 1 : 4)))));
         service2 += (parseFloat(`${(plust ? 1 : 1) | 1}`));
      }
       let iconw = 5.0;
       let bellreminderO = 5.0;
         iconw -= (String.fromCharCode(76,0) == iconviewergifr ? iconviewergifr.length : minimize9.length);
       let signinupY = 4;
      private_z50 = !private_z50;
      backiconO = `${2 + backiconO.length}`;
   if (!private_z50) {
      private_z50 = (bgvipxvodl - arrowdownw) >= 72;
   }
      entryL &= interstitialN.length | arrowdownw;
                _singlePress(e);
            }
        }, doublePressInterval + 1);

        lastTime.current = currentTime;
    }

    return {
        onPressHandle,
    };
}