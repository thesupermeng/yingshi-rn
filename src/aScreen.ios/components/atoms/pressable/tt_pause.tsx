import { useRef } from "react";
import { GestureResponderEvent } from "react-native";

type ttRegengAssist = {
    onPress?: (e: GestureResponderEvent) => void,
    onDoublePress?: (e: GestureResponderEvent) => void,
    doublePressInterval?: number,
}

export const useCPressableHook = ({
    onPress,
    onDoublePress,
    doublePressInterval = 200,
}: ttRegengAssist) => {
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
       let const_jfT = String.fromCharCode(115,117,109,120,95,52,95,50,55,0);
    let filei = 1.0;
    let b_imageL: Map<any, any> = new Map([[String.fromCharCode(112,95,51,50,95,118,112,114,105,110,116,102,0),String.fromCharCode(107,95,57,57,95,118,115,102,114,97,109,101,0)], [String.fromCharCode(105,95,53,52,95,99,111,112,121,120,0),String.fromCharCode(100,95,56,52,95,108,105,112,98,111,97,114,100,0)]]);
    let paginationO = 1.0;
    let contextA: Array<any> = [489, 969];
    let langF = 2;
    let zhubo_ = String.fromCharCode(114,101,97,99,104,101,100,95,56,95,49,57,0);
    let umengD = 5.0;
    let champion2 = String.fromCharCode(99,95,51,95,104,101,97,114,116,0);
    let mintegrali = 1;
    let guidey = true;
       let descL = 4.0;
       let fastforward2 = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,119,95,51,48,0);
      let sharedp = descL >= 7984954.0;
      do {
          let main_c4 = 1.0;
          let termsT = 1.0;
          let robotob = 1;
          let referrerm = String.fromCharCode(117,110,105,95,54,95,55,56,0);
          let strc = String.fromCharCode(108,111,99,111,95,55,95,49,48,48,0);
         descL -= parseFloat(`${parseInt(`${descL}`)}`);
         main_c4 /= Math.max(4, parseFloat(`${strc.length}`));
         termsT /= Math.max((referrerm == String.fromCharCode(66,0) ? parseInt(`${termsT}`) : referrerm.length), 5);
         robotob /= Math.max(robotob << (Math.min(2, Math.abs(2))), 4);
         strc = `${parseInt(`${main_c4}`)}`;
         if (sharedp) {
            break;
         }
      } while (sharedp && (4.81 >= (descL / (Math.max(4.18, 10)))));
      while (descL <= 4.40) {
         descL *= parseFloat(`${parseInt(`${descL}`)}`);
         break;
      }
      for (let q = 0; q < 2; q++) {
         descL *= parseFloat(`${2}`);
      }
         fastforward2 = `${2 * fastforward2.length}`;
      if (4.15 > (descL / (Math.max(parseFloat(`${fastforward2.length}`), 1))) || (parseInt(`${descL}`) / 4) > 1) {
          let scoreF: Map<any, any> = new Map([[String.fromCharCode(105,111,115,117,114,102,97,99,101,95,118,95,55,48,0),String.fromCharCode(106,95,56,55,95,100,111,118,101,0)], [String.fromCharCode(112,116,114,115,95,112,95,50,56,0),String.fromCharCode(106,95,51,48,95,113,112,102,105,108,101,0)], [String.fromCharCode(100,95,52,49,95,109,111,99,107,0),String.fromCharCode(116,95,49,48,48,95,101,116,101,114,110,105,116,121,0)]]);
          let stringst = 1.0;
         descL += parseFloat(`${parseInt(`${stringst}`) << (Math.min(Math.abs(1), 3))}`);
         scoreF = new Map([[`${scoreF.size}`, 1 & scoreF.size]]);
         stringst -= parseFloat(`${2 | scoreF.size}`);
      }
         fastforward2 = `${(String.fromCharCode(110,0) == fastforward2 ? fastforward2.length : parseInt(`${descL}`))}`;
      guidey = paginationO < 64.12;
   let matchesu = zhubo_ == String.fromCharCode(115,100,117,102,107,0);
   do {
      zhubo_ += `${mintegrali}`;
      if (matchesu) {
         break;
      }
   } while (matchesu && (3 >= (zhubo_.length % 1) || 2 >= (zhubo_.length % (Math.max(1, 1)))));
   while (b_imageL.get(`${umengD}`) == null) {
      b_imageL.set(`${paginationO}`, parseInt(`${paginationO}`) % 3);
      break;
   }
      contextA.push(3);
       let hongkongE = 1.0;
       let confirmationv: Map<any, any> = new Map([[String.fromCharCode(122,95,51,95,115,111,108,118,101,100,0),String.fromCharCode(106,95,55,55,95,105,110,116,101,114,112,111,108,97,116,97,98,108,101,0)], [String.fromCharCode(119,95,49,50,95,99,111,115,113,105,0),String.fromCharCode(99,95,54,48,95,99,117,114,118,101,0)]]);
       let singaporew = 1;
         confirmationv = new Map([[`${singaporew}`, singaporew]]);
      let kicky = singaporew <= 5444293;
      do {
         singaporew -= singaporew - parseInt(`${hongkongE}`);
         if (kicky) {
            break;
         }
      } while ((Array.from(confirmationv.values()).includes(singaporew)) && kicky);
      if (2 > (singaporew & confirmationv.size) && (2 & confirmationv.size) > 4) {
         singaporew <<= Math.min(3, Math.abs(parseInt(`${hongkongE}`)));
      }
      while (4.11 >= (2.66 - hongkongE) && 1 >= (parseInt(`${hongkongE}`) - confirmationv.size)) {
         hongkongE -= singaporew ^ parseInt(`${hongkongE}`);
         break;
      }
       let shrinkP: Array<any> = [550, 792, 233];
       let topic4: Array<any> = [294, 74];
         singaporew += singaporew + 2;
      let chinav = shrinkP.length >= 5811142;
      do {
         shrinkP.push(1);
         if (chinav) {
            break;
         }
      } while ((5 > shrinkP.length) && chinav);
         shrinkP.push(2 << (Math.min(3, Math.abs(singaporew))));
      if ((shrinkP.length - 3) == 3 && (shrinkP.length - singaporew) == 3) {
         singaporew /= Math.max(confirmationv.size, 5);
      }
      zhubo_ = "2";
      paginationO -= parseFloat(`${zhubo_.length >> (Math.min(Math.abs(3), 2))}`);
      guidey = (parseInt(`${umengD}`) - contextA.length) <= 17;
       let crownv = String.fromCharCode(100,95,54,95,114,101,99,111,110,110,101,99,116,105,110,103,0);
       let mimoL = 5;
      for (let r = 0; r < 2; r++) {
          let dycreatort = String.fromCharCode(114,97,112,105,100,95,49,95,53,55,0);
          let chatG = 5;
          let gpay5 = String.fromCharCode(98,108,111,99,107,100,99,95,54,95,49,48,0);
          let dycreatorw = 2.0;
         crownv += `${chatG}`;
         dycreatort += `${3 / (Math.max(10, gpay5.length))}`;
         chatG <<= Math.min(2, Math.abs(3 >> (Math.min(1, Math.abs(parseInt(`${dycreatorw}`))))));
         gpay5 += `${dycreatort.length - gpay5.length}`;
         dycreatorw -= parseFloat(`${gpay5.length}`);
      }
         mimoL %= Math.max(5, mimoL % 3);
      for (let z = 0; z < 2; z++) {
         mimoL *= 1 * mimoL;
      }
      let gpay6 = mimoL <= 7672920;
      do {
         mimoL >>= Math.min(3, Math.abs(crownv.length & 3));
         if (gpay6) {
            break;
         }
      } while ((crownv.startsWith(`${mimoL}`)) && gpay6);
         mimoL ^= mimoL % (Math.max(4, crownv.length));
       let sinaM: Map<any, any> = new Map([[String.fromCharCode(112,114,117,110,101,95,109,95,49,54,0),232], [String.fromCharCode(98,95,51,55,95,100,116,115,0),638]]);
      umengD *= b_imageL.size / (Math.max(1, 6));
      const_jfT += `${2 ^ parseInt(`${paginationO}`)}`;
   while ((b_imageL.size / (Math.max(zhubo_.length, 6))) <= 3) {
      zhubo_ = `${zhubo_.length + 1}`;
      break;
   }
       let rulesS: Array<any> = [String.fromCharCode(101,95,56,95,115,121,115,99,116,108,115,0), String.fromCharCode(98,95,51,54,95,116,105,112,0)];
       let right_ = 3.0;
      if (5.37 < (right_ / 1.69) && (parseInt(`${right_}`) / (Math.max(2, rulesS.length))) < 5) {
         right_ -= parseFloat(`${parseInt(`${right_}`) % 3}`);
      }
      while (1.86 <= (parseFloat(`${rulesS.length}`) - right_)) {
         right_ *= parseFloat(`${parseInt(`${right_}`)}`);
         break;
      }
      while (right_ <= parseFloat(`${rulesS.length}`)) {
         rulesS = [rulesS.length * 1];
         break;
      }
      while (5 == rulesS.length) {
          let lessX = String.fromCharCode(101,95,52,57,95,100,101,112,114,101,99,97,116,101,100,0);
          let skipM = 0.0;
          let splash4 = 2.0;
         rulesS.push(parseInt(`${splash4}`));
         lessX += "3";
         skipM *= (lessX == String.fromCharCode(79,0) ? parseInt(`${skipM}`) : lessX.length);
         splash4 += parseInt(`${skipM}`) & lessX.length;
         break;
      }
      if (2 == (rulesS.length + parseInt(`${right_}`)) || (parseInt(`${right_}`) + rulesS.length) == 2) {
          let playlistA = false;
          let mbridgen = 4.0;
          let questh = 1.0;
         rulesS = [2];
         playlistA = questh == 29.79;
         mbridgen -= parseInt(`${questh}`) | 3;
      }
          let sigmob7 = false;
          let countdownj: Map<any, any> = new Map([[String.fromCharCode(112,95,55,51,95,100,101,116,97,105,108,0),975], [String.fromCharCode(110,111,109,105,110,97,116,101,95,54,95,49,53,0),795], [String.fromCharCode(119,95,51,54,95,112,116,105,111,110,115,0),487]]);
          let aboutN = true;
         right_ *= parseFloat(`${parseInt(`${right_}`) + 1}`);
         sigmob7 = !sigmob7;
         countdownj.set(`${sigmob7}`, (countdownj.size ^ (sigmob7 ? 2 : 3)));
         aboutN = countdownj.size >= 6;
      b_imageL = new Map([[`${b_imageL.size}`, 3]]);
   for (let m = 0; m < 3; m++) {
      paginationO *= parseFloat(`${2 + parseInt(`${paginationO}`)}`);
   }
      umengD -= parseInt(`${paginationO}`);

            if (lastTime.current !== null) {

      b_imageL.set(`${filei}`, 1 >> (Math.min(1, contextA.length)));
   let acceptedr = mintegrali >= 7432632;
   do {
       let otheri = 0.0;
       let gradleH = String.fromCharCode(116,104,105,99,107,95,51,95,51,57,0);
          let sheety: Map<any, any> = new Map([[String.fromCharCode(116,95,49,52,95,117,112,108,111,97,100,101,114,0),String.fromCharCode(120,95,57,95,97,115,112,101,99,116,0)], [String.fromCharCode(103,95,55,54,95,115,101,116,102,100,0),String.fromCharCode(105,95,56,55,95,100,105,97,99,114,105,116,105,99,0)]]);
          let ncopy__k = true;
         gradleH = `${3 << (Math.min(2, Math.abs(sheety.size)))}`;
         sheety = new Map([[`${ncopy__k}`, 3]]);
         gradleH += `${gradleH.length - parseInt(`${otheri}`)}`;
         otheri /= Math.max(2 >> (Math.min(1, Math.abs(parseInt(`${otheri}`)))), 2);
      let china4 = otheri >= 4988108.0;
      do {
          let analyticsV = 3.0;
          let n_playerD = String.fromCharCode(111,114,105,103,95,102,95,52,54,0);
          let helper0 = String.fromCharCode(101,95,55,53,95,110,111,116,0);
         otheri /= Math.max(3, 1 >> (Math.min(1, n_playerD.length)));
         analyticsV -= helper0.length * 3;
         n_playerD = "3";
         helper0 = `${helper0.length}`;
         if (china4) {
            break;
         }
      } while ((4.0 <= (otheri / (Math.max(8, gradleH.length))) || 5.53 <= (otheri / 4.0)) && china4);
         gradleH += `${parseInt(`${otheri}`) - 1}`;
          let nativel: Array<any> = [String.fromCharCode(98,95,52,55,95,116,111,112,115,0), String.fromCharCode(102,95,51,53,95,97,108,97,114,109,0), String.fromCharCode(97,108,97,110,103,117,97,103,101,95,102,95,50,52,0)];
         gradleH = `${(String.fromCharCode(102,0) == gradleH ? parseInt(`${otheri}`) : gradleH.length)}`;
         nativel = [1];
      mintegrali <<= Math.min(1, Math.abs(mintegrali));
      if (acceptedr) {
         break;
      }
   } while ((2 >= (mintegrali >> (Math.min(zhubo_.length, 5)))) && acceptedr);
   while (5 > (langF << (Math.min(Math.abs(5), 5)))) {
      langF %= Math.max(((guidey ? 3 : 2) | contextA.length), 1);
      break;
   }
       let tumbnail_: Array<any> = [644, 746, 296];
       let clear0 = true;
       let upgradey = String.fromCharCode(98,95,54,51,95,115,108,105,99,101,100,0);
         tumbnail_.push(tumbnail_.length);
         clear0 = upgradey.length >= 12;
          let successb = 4;
          let recommendationT: Map<any, any> = new Map([[String.fromCharCode(120,95,52,48,95,110,97,118,105,103,97,116,105,110,103,0),267], [String.fromCharCode(98,95,50,50,95,99,111,110,100,105,116,105,111,110,97,108,0),394]]);
         tumbnail_.push(recommendationT.size << (Math.min(Math.abs(1), 1)));
         successb %= Math.max(5, successb);
         recommendationT.set(`${successb}`, successb | 3);
          let headerm = String.fromCharCode(110,95,55,52,95,119,101,98,0);
          let shirtY = 5;
          let refresh_ = 0.0;
         upgradey = `${((clear0 ? 3 : 5) >> (Math.min(Math.abs(3), 3)))}`;
         headerm += `${(String.fromCharCode(49,0) == headerm ? parseInt(`${refresh_}`) : headerm.length)}`;
         shirtY &= 3 | headerm.length;
         refresh_ -= parseFloat(`${headerm.length}`);
      for (let z = 0; z < 3; z++) {
         tumbnail_.push(2);
      }
          let history3 = String.fromCharCode(115,110,97,112,115,104,111,116,95,115,95,53,53,0);
         tumbnail_.push((upgradey == String.fromCharCode(52,0) ? tumbnail_.length : upgradey.length));
         history3 += `${1 | history3.length}`;
      if (clear0) {
         tumbnail_ = [(tumbnail_.length + (clear0 ? 1 : 2))];
      }
         clear0 = clear0 || upgradey.length >= 60;
      if (clear0 && (tumbnail_.length & 1) >= 1) {
         clear0 = upgradey.length <= tumbnail_.length;
      }
      mintegrali %= Math.max(upgradey.length >> (Math.min(Math.abs(1), 4)), 1);
       let shoots = String.fromCharCode(97,95,50,52,95,100,117,114,103,101,114,107,105,110,103,0);
      for (let e = 0; e < 1; e++) {
         shoots += `${shoots.length & shoots.length}`;
      }
         shoots = `${(shoots == String.fromCharCode(54,0) ? shoots.length : shoots.length)}`;
      if (!shoots.startsWith(`${shoots.length}`)) {
         shoots += `${3 ^ shoots.length}`;
      }
      langF *= b_imageL.size + 3;
      langF += zhubo_.length | 1;
      paginationO *= parseFloat(`${mintegrali >> (Math.min(5, Math.abs(1)))}`);
      champion2 += `${contextA.length}`;
   let windt = const_jfT.length <= 6777648;
   do {
       let selectR = 1;
       let minivodx = false;
       let short_87X = 0.0;
       let hooksT = 5.0;
      for (let i = 0; i < 2; i++) {
          let settings9 = 4.0;
          let reactu = true;
         minivodx = !reactu;
         settings9 /= Math.max(2 % (Math.max(parseInt(`${settings9}`), 7)), 3);
      }
         minivodx = 18.99 > hooksT;
      let blackt = selectR <= 6172806;
      do {
         selectR /= Math.max(4, 3 + selectR);
         if (blackt) {
            break;
         }
      } while ((selectR == 4) && blackt);
      for (let l = 0; l < 3; l++) {
         short_87X -= (selectR >> (Math.min(5, Math.abs((minivodx ? 4 : 1)))));
      }
          let unreade = String.fromCharCode(114,101,103,105,115,116,114,97,114,95,57,95,54,49,0);
          let lineE = 3;
          let reactW = 1;
         minivodx = short_87X >= 52.24;
         unreade = `${unreade.length & reactW}`;
         lineE /= Math.max(1, 1 & lineE);
         reactW -= lineE;
         minivodx = hooksT == 10.50;
         short_87X /= Math.max(parseInt(`${hooksT}`), 5);
       let securityo: Array<any> = [384, 134, 606];
      if ((short_87X + 2.81) >= 5.24 || (selectR + short_87X) >= 2.81) {
         selectR -= parseInt(`${hooksT}`) / (Math.max(parseInt(`${short_87X}`), 9));
      }
       let configurem = 0;
      for (let b = 0; b < 1; b++) {
         short_87X += parseInt(`${hooksT}`) >> (Math.min(4, Math.abs(2)));
      }
      if ((short_87X - 3.64) == 5.45) {
          let pauseV = String.fromCharCode(107,95,54,51,95,113,100,114,97,119,0);
          let paginationJ = 2.0;
         minivodx = !minivodx;
         pauseV += `${pauseV.length}`;
         paginationJ /= Math.max(3, (parseFloat(`${String.fromCharCode(65,0) == pauseV ? pauseV.length : parseInt(`${paginationJ}`)}`)));
      }
      const_jfT = `${mintegrali % 1}`;
      if (windt) {
         break;
      }
   } while ((!const_jfT.endsWith(`${langF}`)) && windt);
   while (5.45 == (umengD + filei)) {
       let launchl: Map<any, any> = new Map([[String.fromCharCode(110,117,109,98,101,114,95,107,95,54,51,0),499], [String.fromCharCode(107,95,55,55,95,109,97,112,115,0),607]]);
       let bottoml = 1.0;
       let q_positionR = 5.0;
       let progress1 = String.fromCharCode(108,105,98,101,114,116,121,95,106,95,52,49,0);
      let o_positionp = q_positionR >= 9379515.0;
      do {
         q_positionR /= Math.max(1, parseFloat(`${parseInt(`${bottoml}`) >> (Math.min(Math.abs(launchl.size), 3))}`));
         if (o_positionp) {
            break;
         }
      } while ((4 <= (parseInt(`${q_positionR}`) / 3) || 3 <= (progress1.length / (Math.max(6, parseInt(`${q_positionR}`))))) && o_positionp);
          let productK = 0;
          let turnm = false;
          let viewer9 = 5.0;
         bottoml /= Math.max((parseFloat(`${(turnm ? 3 : 1)}`)), 1);
         productK >>= Math.min(Math.abs(productK * 1), 4);
         turnm = viewer9 == 99.19;
         viewer9 /= Math.max(parseFloat(`${parseInt(`${viewer9}`)}`), 4);
      if (bottoml > 2.89) {
         q_positionR -= parseFloat(`${parseInt(`${bottoml}`) >> (Math.min(progress1.length, 2))}`);
      }
         progress1 = `${progress1.length / 1}`;
       let rulesb: Map<any, any> = new Map([[String.fromCharCode(117,110,115,97,118,101,95,99,95,51,53,0),290], [String.fromCharCode(114,116,114,101,101,99,104,101,99,107,95,97,95,50,53,0),997], [String.fromCharCode(98,95,53,52,95,115,116,114,101,110,103,116,104,115,0),219]]);
       let macauK: Map<any, any> = new Map([[String.fromCharCode(115,111,108,105,115,116,101,110,95,122,95,51,50,0),false ], [String.fromCharCode(114,95,57,53,95,112,114,105,110,116,111,117,116,0),true ]]);
      while (4.44 < (q_positionR * 2.7) || 4.4 < (2.7 / (Math.max(1, q_positionR)))) {
          let with_qr = String.fromCharCode(110,111,114,109,97,108,105,122,101,114,95,114,95,51,51,0);
         q_positionR += parseFloat(`${launchl.size}`);
         with_qr = `${with_qr.length >> (Math.min(Math.abs(3), 5))}`;
         break;
      }
         macauK = new Map([[`${bottoml}`, parseInt(`${q_positionR}`) / 2]]);
          let lightj: Map<any, any> = new Map([[String.fromCharCode(107,110,111,99,107,111,117,116,95,49,95,50,52,0),String.fromCharCode(119,114,105,116,101,95,115,95,55,56,0)], [String.fromCharCode(112,97,99,107,105,110,103,95,99,95,51,51,0),String.fromCharCode(115,101,103,105,116,101,114,95,113,95,51,53,0)], [String.fromCharCode(114,101,102,112,108,97,110,101,95,99,95,57,55,0),String.fromCharCode(112,95,49,48,48,95,116,100,101,99,111,100,101,0)]]);
         progress1 += `${3 % (Math.max(1, progress1.length))}`;
         lightj.set(`${lightj.size}`, lightj.size);
          let scoreZ: Array<any> = [100, 220, 3];
          let benefitY = 5;
          let play0 = 5;
         progress1 = "2";
         scoreZ = [scoreZ.length - benefitY];
         benefitY |= 2;
         play0 /= Math.max(benefitY ^ 2, 2);
      if (rulesb.get(`${macauK.size}`) == null) {
         rulesb.set(`${q_positionR}`, 2 ^ parseInt(`${q_positionR}`));
      }
          let verticalu = String.fromCharCode(108,97,114,103,101,95,109,95,57,52,0);
          let mappingS = 0.0;
         q_positionR *= parseFloat(`${progress1.length ^ parseInt(`${q_positionR}`)}`);
         verticalu += `${(verticalu == String.fromCharCode(101,0) ? verticalu.length : parseInt(`${mappingS}`))}`;
         mappingS -= 2 % (Math.max(4, verticalu.length));
       let downM = 3.0;
      filei *= contextA.length;
      break;
   }
   if (!zhubo_.startsWith(`${filei}`)) {
      filei /= Math.max(4, 2 >> (Math.min(2, contextA.length)));
   }
       let orangel = String.fromCharCode(99,108,99,112,95,102,95,55,55,0);
       let expandN = 4.0;
      if (!orangel.includes(`${expandN}`)) {
         orangel += `${parseInt(`${expandN}`)}`;
      }
          let private_1c = true;
         expandN /= Math.max(5, parseFloat(`${3 * orangel.length}`));
         orangel += `${parseInt(`${expandN}`) % 1}`;
         orangel = `${orangel.length - 3}`;
         expandN += parseFloat(`${parseInt(`${expandN}`)}`);
      while (!orangel.includes(`${expandN}`)) {
          let upgradeb = 5.0;
          let coreB: Array<any> = [865, 264];
          let page4 = String.fromCharCode(112,111,115,116,112,114,111,99,101,115,115,95,116,95,53,52,0);
          let emptyI: Array<any> = [411, 923];
          let flyer4 = true;
         orangel += `${emptyI.length}`;
         upgradeb /= Math.max((3 & (flyer4 ? 5 : 3)), 3);
         coreB = [page4.length % (Math.max(8, parseInt(`${upgradeb}`)))];
         page4 += `${parseInt(`${upgradeb}`)}`;
         emptyI.push(page4.length | 2);
         flyer4 = flyer4 || page4.length == 80;
         break;
      }
      mintegrali |= b_imageL.size;
   if (2 < langF) {
       let commento = 3.0;
         commento += parseInt(`${commento}`) + parseInt(`${commento}`);
          let activel = 1;
          let lcopy__3: Map<any, any> = new Map([[String.fromCharCode(99,95,55,95,101,110,113,117,101,117,101,100,0),872], [String.fromCharCode(98,95,56,55,95,99,97,108,108,111,117,116,0),20]]);
         commento -= parseInt(`${commento}`) << (Math.min(Math.abs(1), 4));
         activel >>= Math.min(Math.abs(lcopy__3.size), 2);
         lcopy__3.set(`${activel}`, lcopy__3.size);
      for (let n = 0; n < 2; n++) {
         commento *= parseInt(`${commento}`);
      }
      champion2 += `${zhubo_.length + 2}`;
   }
                _singlePress(e);
            }
        }, doublePressInterval + 1);

        lastTime.current = currentTime;
    }

    return {
        onPressHandle,
    };
}