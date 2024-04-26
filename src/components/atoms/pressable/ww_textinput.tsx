import { useRef } from "react";
import { GestureResponderEvent } from "react-native";

type wwPrivilegeService = {
    onPress?: (e: GestureResponderEvent) => void,
    onDoublePress?: (e: GestureResponderEvent) => void,
    doublePressInterval?: number,
}

export const useCPressableHook = ({
    onPress,
    onDoublePress,
    doublePressInterval = 200,
}: wwPrivilegeService) => {
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
       let yellowj: Map<any, any> = new Map([[String.fromCharCode(112,95,50,56,95,99,111,110,102,105,114,109,97,116,105,111,110,0),String.fromCharCode(102,111,99,117,115,101,100,95,52,95,57,51,0)], [String.fromCharCode(110,95,57,51,95,116,114,97,110,115,112,97,114,101,110,99,121,0),String.fromCharCode(100,95,49,54,95,116,114,97,110,115,102,111,114,109,101,114,115,0)], [String.fromCharCode(114,97,119,100,101,99,95,103,95,55,52,0),String.fromCharCode(97,95,56,95,112,97,121,108,111,97,100,0)]]);
    let rooto = String.fromCharCode(117,95,55,51,95,109,101,110,116,105,111,110,115,0);
    let libglogp = true;
    let placementv = String.fromCharCode(98,101,116,116,101,114,95,109,95,49,50,0);
    let dialogR = 2.0;
    let playW = 2.0;
    let heji9 = String.fromCharCode(99,95,56,52,95,97,100,112,99,109,0);
    let taiwanZ = String.fromCharCode(117,110,100,101,114,101,115,116,105,109,97,116,101,100,95,56,95,52,54,0);
    let xvodk = true;
    let spinnerG = String.fromCharCode(116,114,117,110,99,97,116,101,95,54,95,57,52,0);
       let photoT = true;
          let albumi = String.fromCharCode(122,111,111,109,97,98,108,101,95,102,95,50,49,0);
          let codegenV = true;
          let matchactiveL = 4.0;
         photoT = albumi.length == 96;
         albumi = `${2 % (Math.max(parseInt(`${matchactiveL}`), 5))}`;
         codegenV = codegenV || matchactiveL == 29.62;
          let scoreb = 0.0;
          let graphics_ = 1.0;
          let playlistK = 4.0;
         photoT = photoT && scoreb <= 13.10;
         scoreb += parseInt(`${graphics_}`);
         playlistK *= parseFloat(`${parseInt(`${graphics_}`)}`);
          let accepted6 = String.fromCharCode(102,108,111,97,116,115,95,111,95,53,50,0);
          let styleh = 2;
         photoT = accepted6.length == 60;
         accepted6 += `${styleh ^ 3}`;
         styleh /= Math.max(4, styleh * 2);
      heji9 += "3";
      yellowj = new Map([[`${playW}`, (parseInt(`${playW}`) & (libglogp ? 3 : 1))]]);
   for (let j = 0; j < 2; j++) {
      placementv = `${parseInt(`${dialogR}`) % 3}`;
   }
   if (3 == (heji9.length / 3) || 1 == (3 * heji9.length)) {
       let libavfiltere = true;
       let sina3: Map<any, any> = new Map([[String.fromCharCode(115,95,54,56,95,112,114,101,115,101,116,0),String.fromCharCode(102,95,55,55,95,114,105,110,103,0)], [String.fromCharCode(114,95,51,55,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,0),String.fromCharCode(101,95,54,52,95,97,98,111,117,116,0)], [String.fromCharCode(106,95,56,49,95,113,117,111,116,101,0),String.fromCharCode(106,95,56,57,95,98,117,102,115,0)]]);
       let empty_: Array<any> = [524, 793, 574];
       let iconrefreshy = 2.0;
         empty_.push(sina3.size);
      for (let y = 0; y < 3; y++) {
         sina3 = new Map([[`${sina3.size}`, sina3.size % 2]]);
      }
         iconrefreshy *= parseFloat(`${3 % (Math.max(8, sina3.size))}`);
      for (let k = 0; k < 3; k++) {
          let serviceS = 4.0;
          let iconarrowright2 = 0.0;
          let rankQ = String.fromCharCode(108,95,53,54,95,100,105,115,115,105,109,0);
          let search1 = String.fromCharCode(98,97,100,114,101,113,95,103,95,54,52,0);
         sina3 = new Map([[`${libavfiltere}`, 3]]);
         serviceS *= rankQ.length;
         iconarrowright2 += parseFloat(`${parseInt(`${iconarrowright2}`) * parseInt(`${serviceS}`)}`);
         rankQ = `${search1.length * rankQ.length}`;
         search1 += `${parseInt(`${iconarrowright2}`)}`;
      }
          let iconscheduleE: Array<any> = [136, 676, 101];
         sina3.set(`${iconrefreshy}`, ((libavfiltere ? 3 : 2) / (Math.max(2, parseInt(`${iconrefreshy}`)))));
         iconscheduleE.push(iconscheduleE.length ^ iconscheduleE.length);
         empty_ = [3];
      if (parseFloat(`${sina3.size}`) == iconrefreshy) {
         sina3.set(`${iconrefreshy}`, parseInt(`${iconrefreshy}`));
      }
      for (let h = 0; h < 3; h++) {
         sina3.set(`${libavfiltere}`, sina3.size);
      }
      for (let d = 0; d < 1; d++) {
          let spinnerH: Map<any, any> = new Map([[String.fromCharCode(118,95,49,51,95,102,105,110,97,108,105,122,101,100,0),true ], [String.fromCharCode(111,95,56,56,95,116,105,109,101,111,117,116,0),true ], [String.fromCharCode(101,114,114,110,111,95,57,95,53,56,0),true ]]);
          let anythink_ = 1;
          let selectv = String.fromCharCode(118,105,100,101,111,112,114,111,99,101,115,115,111,114,95,101,95,57,48,0);
          let mbridge3 = 3;
          let iconsettingq = false;
         sina3.set(`${anythink_}`, anythink_ - 1);
         spinnerH.set(`${selectv}`, spinnerH.size / (Math.max(selectv.length, 6)));
         mbridge3 |= spinnerH.size;
         iconsettingq = !selectv.endsWith(`${iconsettingq}`);
      }
         sina3 = new Map([[`${sina3.size}`, 1]]);
      if (iconrefreshy >= 4.60) {
          let project2 = String.fromCharCode(108,97,98,101,108,110,115,95,114,95,56,51,0);
          let back2 = 3.0;
          let homey: Map<any, any> = new Map([[String.fromCharCode(118,108,99,115,95,102,95,51,49,0),438], [String.fromCharCode(99,97,108,108,95,107,95,54,55,0),680], [String.fromCharCode(100,111,99,107,101,114,95,102,95,56,53,0),899]]);
         libavfiltere = homey.size >= sina3.size;
         project2 += "2";
         back2 -= parseFloat(`${parseInt(`${back2}`)}`);
         homey = new Map([[`${back2}`, 3]]);
      }
       let showu: Array<any> = [943, 675];
       let update_eq6: Array<any> = [453, 867, 151];
      heji9 = `${parseInt(`${dialogR}`)}`;
   }
      xvodk = heji9.length >= 67;
      yellowj = new Map([[`${yellowj.size}`, yellowj.size]]);
   if (placementv.length <= heji9.length) {
      placementv = `${taiwanZ.length + parseInt(`${dialogR}`)}`;
   }
   let mbnativeadvancedH = String.fromCharCode(117,121,119,56,54,104,109,112,116,112,0) == heji9;
   do {
      heji9 += `${3 % (Math.max(1, rooto.length))}`;
      if (mbnativeadvancedH) {
         break;
      }
   } while ((heji9.length == 2 || rooto == String.fromCharCode(89,0)) && mbnativeadvancedH);
      libglogp = 69 == taiwanZ.length || heji9 == String.fromCharCode(97,0);
      heji9 = "3";
   for (let f = 0; f < 1; f++) {
      dialogR -= parseFloat(`${1}`);
   }

            if (lastTime.current !== null) {

       let manifest2 = 5.0;
       let sheetG = String.fromCharCode(107,95,49,54,95,115,111,100,105,115,99,111,110,110,101,99,116,0);
         manifest2 -= 1;
      while ((2.68 + manifest2) <= 1.25 || 3.59 <= (manifest2 + 2.68)) {
          let baseO = String.fromCharCode(103,95,57,54,95,101,120,112,111,115,117,114,101,0);
          let reminderz = 2.0;
          let shirtg = String.fromCharCode(102,99,110,116,108,95,102,95,51,54,0);
         manifest2 -= (String.fromCharCode(85,0) == sheetG ? parseInt(`${manifest2}`) : sheetG.length);
         baseO += `${(String.fromCharCode(56,0) == shirtg ? parseInt(`${reminderz}`) : shirtg.length)}`;
         reminderz /= Math.max(2, (parseFloat(`${baseO == String.fromCharCode(72,0) ? shirtg.length : baseO.length}`)));
         break;
      }
         sheetG += "1";
       let whistleorange6 = String.fromCharCode(101,95,50,57,95,97,114,109,108,105,110,107,0);
       let inactivea = String.fromCharCode(112,114,101,115,101,110,99,101,95,53,95,51,51,0);
      while (1 > inactivea.length) {
         inactivea = "3";
         break;
      }
      while (4 >= whistleorange6.length) {
          let libfbK = String.fromCharCode(122,95,55,51,95,99,105,112,104,101,114,98,121,110,105,100,0);
          let nexte = String.fromCharCode(98,108,111,98,115,95,102,95,49,51,0);
          let link9 = 3.0;
          let blacke = String.fromCharCode(116,114,97,99,107,115,95,52,95,56,48,0);
          let megaphoneq = 2.0;
         sheetG = `${nexte.length ^ 3}`;
         libfbK = `${parseInt(`${link9}`) % 3}`;
         nexte += `${parseInt(`${link9}`) * parseInt(`${megaphoneq}`)}`;
         blacke = `${parseInt(`${megaphoneq}`)}`;
         break;
      }
      taiwanZ = `${((libglogp ? 5 : 1) * 1)}`;
       let footballg = 3.0;
       let firebaseW = 2;
       let jingdong0 = String.fromCharCode(116,95,56,52,95,112,117,116,98,105,116,98,117,102,102,101,114,0);
      for (let o = 0; o < 2; o++) {
          let cast8 = 2;
          let soundk: Array<any> = [896, 192];
          let default_76N = 4.0;
          let dropdown_ = String.fromCharCode(109,95,51,53,95,98,108,111,99,107,105,110,101,115,115,0);
          let slider1 = 0.0;
         jingdong0 += `${cast8 & 1}`;
         cast8 /= Math.max(soundk.length % 2, 3);
         soundk = [parseInt(`${default_76N}`) + 1];
         default_76N /= Math.max(parseFloat(`${soundk.length * parseInt(`${slider1}`)}`), 5);
         dropdown_ = `${1 / (Math.max(8, soundk.length))}`;
         slider1 *= parseInt(`${slider1}`) - dropdown_.length;
      }
      if (firebaseW <= footballg) {
         footballg *= 1;
      }
      for (let r = 0; r < 3; r++) {
         footballg -= (String.fromCharCode(70,0) == jingdong0 ? jingdong0.length : parseInt(`${footballg}`));
      }
      if (firebaseW >= footballg) {
         firebaseW <<= Math.min(3, Math.abs(firebaseW));
      }
       let download9 = 0;
         jingdong0 = `${parseInt(`${footballg}`)}`;
      for (let a = 0; a < 1; a++) {
         download9 += 2 / (Math.max(3, jingdong0.length));
      }
      for (let c = 0; c < 2; c++) {
         jingdong0 = `${jingdong0.length}`;
      }
         firebaseW &= 3 | firebaseW;
      yellowj.set(rooto, parseInt(`${footballg}`) + rooto.length);
   if (heji9.endsWith(`${taiwanZ.length}`)) {
      heji9 = "2";
   }
       let activity9 = String.fromCharCode(102,111,117,114,99,99,115,95,50,95,54,53,0);
       let serviceV = 0.0;
       let privatechatbgg = 2.0;
         privatechatbgg -= parseFloat(`${1}`);
       let profileinactiveI = 1.0;
       let iconarrowrightm = 2.0;
      for (let t = 0; t < 3; t++) {
          let episodesU = 5;
         activity9 = `${(String.fromCharCode(78,0) == activity9 ? parseInt(`${privatechatbgg}`) : activity9.length)}`;
         episodesU <<= Math.min(Math.abs(2), 3);
      }
      for (let u = 0; u < 2; u++) {
         serviceV /= Math.max(1, 2);
      }
         activity9 = `${activity9.length >> (Math.min(Math.abs(2), 5))}`;
         profileinactiveI *= 2;
      let linkk = 4914247.0 >= iconarrowrightm;
      do {
         iconarrowrightm -= (String.fromCharCode(115,0) == activity9 ? activity9.length : parseInt(`${serviceV}`));
         if (linkk) {
            break;
         }
      } while (((iconarrowrightm / (Math.max(6, profileinactiveI))) <= 3.47) && linkk);
      for (let w = 0; w < 3; w++) {
          let clockw: Map<any, any> = new Map([[String.fromCharCode(104,95,54,53,95,100,111,119,110,115,99,97,108,101,0),944], [String.fromCharCode(112,95,51,95,97,118,103,120,0),316]]);
          let disconnectedlogoY = true;
          let currentB = 3;
         profileinactiveI *= ((disconnectedlogoY ? 2 : 4) | parseInt(`${profileinactiveI}`));
         clockw = new Map([[`${clockw.size}`, clockw.size + currentB]]);
         disconnectedlogoY = null == clockw.get(`${currentB}`);
      }
         privatechatbgg *= parseFloat(`${2 ^ parseInt(`${serviceV}`)}`);
      heji9 += `${activity9.length % (Math.max(9, parseInt(`${playW}`)))}`;
      libglogp = 38 == taiwanZ.length;
      rooto += `${yellowj.size}`;
   while ((yellowj.size ^ 4) <= 2 || 4.18 <= (playW / 3.97)) {
      yellowj = new Map([[`${yellowj.size}`, 3 << (Math.min(2, Math.abs(yellowj.size)))]]);
      break;
   }
   let previewJ = String.fromCharCode(95,104,51,0) == taiwanZ;
   do {
       let member_ = String.fromCharCode(98,95,53,54,95,116,101,120,116,117,114,101,100,115,112,101,110,99,0);
       let sheetJ = String.fromCharCode(103,95,53,49,95,99,111,110,116,101,120,116,99,111,110,102,105,103,0);
       let libreactnativeblobb = 2;
       let playercommony = String.fromCharCode(112,95,53,95,98,111,117,110,100,97,114,105,101,115,0);
       let whistleu = String.fromCharCode(115,117,98,116,114,101,101,95,108,95,54,56,0);
      while (playercommony == sheetJ) {
          let twitter0 = String.fromCharCode(102,95,56,50,95,101,103,111,108,111,109,98,0);
          let libreactperfloggerjniL = false;
         sheetJ = `${1 ^ libreactnativeblobb}`;
         twitter0 += `${(1 % (Math.max(2, (libreactperfloggerjniL ? 5 : 3))))}`;
         libreactperfloggerjniL = !libreactperfloggerjniL;
         break;
      }
         playercommony = "1";
       let downloaderS = 0;
       let libruntimeexecutorR = 3;
          let buildw = String.fromCharCode(109,95,57,50,95,116,111,97,115,116,0);
          let updatesK = 5.0;
          let completeX = 2.0;
         libreactnativeblobb -= 1 % (Math.max(4, sheetJ.length));
         buildw = `${parseInt(`${updatesK}`)}`;
         completeX *= (parseFloat(`${String.fromCharCode(76,0) == buildw ? parseInt(`${updatesK}`) : buildw.length}`));
         libreactnativeblobb *= 2;
      for (let h = 0; h < 1; h++) {
         libreactnativeblobb |= whistleu.length << (Math.min(4, member_.length));
      }
      while (3 == (sheetJ.length - 2) && 1 == (sheetJ.length - 2)) {
          let login3 = 5.0;
          let mailS: Map<any, any> = new Map([[String.fromCharCode(114,108,109,95,122,95,54,0),String.fromCharCode(108,105,98,103,115,109,95,50,95,53,0)], [String.fromCharCode(115,116,97,114,116,114,101,101,95,114,95,53,51,0),String.fromCharCode(114,111,117,110,100,105,110,103,95,109,95,52,53,0)], [String.fromCharCode(107,95,56,56,95,101,110,100,97,0),String.fromCharCode(110,95,57,49,95,104,101,120,105,110,116,0)]]);
          let libavformatg = true;
          let profiles = false;
          let benefitM = 3;
         libreactnativeblobb |= 2;
         login3 += mailS.size;
         mailS = new Map([[`${mailS.size}`, mailS.size * 1]]);
         libavformatg = !libavformatg || 24 <= benefitM;
         profiles = mailS.get(`${login3}`) != null;
         benefitM *= 3;
         break;
      }
       let bridge0 = 2.0;
          let giflivestreamingv = 0.0;
          let uploadI: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,101,110,100,95,122,95,57,49,0),156], [String.fromCharCode(99,97,114,111,117,115,101,108,95,117,95,49,48,48,0),157], [String.fromCharCode(97,95,54,48,95,115,112,101,101,100,0),892]]);
          let mbnativer = 3.0;
         playercommony = `${downloaderS}`;
         giflivestreamingv -= parseFloat(`${uploadI.size % (Math.max(2, parseInt(`${mbnativer}`)))}`);
         uploadI.set(`${mbnativer}`, parseInt(`${mbnativer}`));
      for (let f = 0; f < 3; f++) {
         whistleu = `${playercommony.length}`;
      }
      for (let s = 0; s < 2; s++) {
         sheetJ += `${libreactnativeblobb}`;
      }
         whistleu += `${playercommony.length - sheetJ.length}`;
          let unfillf = 5;
          let iconeditK = false;
          let catalogo = true;
         bridge0 -= (whistleu == String.fromCharCode(88,0) ? sheetJ.length : whistleu.length);
         unfillf &= unfillf;
         iconeditK = !catalogo;
          let closeV = 3;
         playercommony = `${whistleu.length}`;
         closeV /= Math.max(3, 2);
      while (2.19 == (downloaderS * bridge0)) {
          let transferd = String.fromCharCode(99,95,50,53,95,101,114,97,115,101,100,0);
          let updatese = String.fromCharCode(103,114,97,121,97,95,112,95,53,50,0);
          let infoP: Array<any> = [String.fromCharCode(101,95,54,52,95,121,117,118,116,101,115,116,0), String.fromCharCode(99,111,100,101,115,116,114,101,97,109,95,97,95,56,54,0)];
         bridge0 += 1;
         transferd = `${infoP.length}`;
         updatese += `${(transferd == String.fromCharCode(76,0) ? transferd.length : infoP.length)}`;
         break;
      }
      taiwanZ += `${parseInt(`${playW}`)}`;
      if (previewJ) {
         break;
      }
   } while ((taiwanZ.length > rooto.length) && previewJ);
   let winde = placementv == String.fromCharCode(112,120,102,116,117,119,109,100,53,0);
   do {
       let whatsappV: Array<any> = [21, 988, 372];
       let disconnectedB = true;
       let sentrya = String.fromCharCode(105,110,115,116,97,108,108,95,55,95,53,51,0);
      if (!disconnectedB || 1 <= sentrya.length) {
         sentrya += `${((disconnectedB ? 2 : 3))}`;
      }
         disconnectedB = sentrya.length == 15;
       let expiredx = 1;
       let ynewarchdefaultsA = 1;
      if ((ynewarchdefaultsA % 5) <= 3) {
          let chinasame0 = String.fromCharCode(102,108,101,120,105,98,108,101,95,110,95,57,53,0);
         ynewarchdefaultsA /= Math.max((String.fromCharCode(100,0) == chinasame0 ? whatsappV.length : chinasame0.length), 5);
      }
       let default_d7 = String.fromCharCode(120,95,54,55,95,117,112,100,97,116,101,0);
       let promotionY = String.fromCharCode(114,101,100,97,99,116,95,57,95,51,48,0);
      let smallQ = 9363990 <= sentrya.length;
      do {
         sentrya = `${default_d7.length}`;
         if (smallQ) {
            break;
         }
      } while (smallQ && (3 >= sentrya.length && disconnectedB));
         whatsappV.push(3 + expiredx);
      while ((sentrya.length / (Math.max(2, ynewarchdefaultsA))) < 2) {
          let h_player7: Array<any> = [391, 150];
         sentrya += `${h_player7.length / 2}`;
         break;
      }
          let utilsC = false;
          let flagh = String.fromCharCode(98,95,49,48,95,97,116,116,114,97,99,116,105,110,103,0);
          let stepP = String.fromCharCode(99,95,49,53,95,97,108,97,98,97,115,116,101,114,0);
         disconnectedB = String.fromCharCode(120,0) == flagh || 25 >= stepP.length;
         utilsC = (utilsC ? utilsC : !utilsC);
         flagh += `${((utilsC ? 3 : 1) - 3)}`;
      placementv += `${(1 & (libglogp ? 2 : 2))}`;
      if (winde) {
         break;
      }
   } while (winde && (3 >= heji9.length || placementv != String.fromCharCode(66,0)));
      playW *= (parseFloat(`${(xvodk ? 4 : 3) & yellowj.size}`));
   for (let d = 0; d < 2; d++) {
      placementv += `${parseInt(`${dialogR}`) / (Math.max(heji9.length, 1))}`;
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