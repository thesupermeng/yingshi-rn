import { useNavigation, useTheme } from "@react-navigation/native";
import { useCallback, useContext, useEffect } from "react";
import { BackHandler, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import RNExitApp from "react-native-exit-app";
import { useAppDispatch } from "@hooks/mayi_redirect";
import { acceptPrivacyPolicy } from "@redux/actions/mayi_modal";
import { TermsAcceptContext } from "../../../contexts/mayi_imagenomoredata_yellowtored";
import { IS_OTHER_SKIN } from "@utility/mayi_middleware_apps";


interface mayi_GoogleViews {
  isVisible: boolean,
  setIsVisible: any,
}

export default function PrivacyPolicyOverlay({
  isVisible,
  setIsVisible,
}: mayi_GoogleViews) {
  const { accepted, setAccepted } = useContext(TermsAcceptContext);
  const { spacing, textVariants, colors } = useTheme();
  const dispatch = useAppDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    setIsVisible(!accepted);
  }, []);

  const handleReject = useCallback(() => {
       let blackD: Map<any, any> = new Map([[String.fromCharCode(102,95,51,52,95,119,117,110,100,101,102,0),String.fromCharCode(122,95,55,49,95,99,111,108,120,0)], [String.fromCharCode(114,116,112,95,118,95,56,50,0),String.fromCharCode(103,95,48,95,97,100,97,112,116,101,100,0)]]);
    let iconshareE = String.fromCharCode(122,95,53,52,95,112,97,105,114,115,0);
    let kuaishouJ = String.fromCharCode(117,95,53,49,95,105,115,116,115,0);
    let description_40: Map<any, any> = new Map([[String.fromCharCode(121,95,49,54,95,116,114,97,110,115,102,111,114,109,0),true ], [String.fromCharCode(121,117,118,112,108,95,108,95,50,52,0),false ], [String.fromCharCode(117,97,110,95,103,95,49,56,0),false ]]);
    let matchn = 0.0;
    let refreshborderless5: Array<any> = [144, 750, 394];
    let libreanimatedh = 4;
    let actionss = 4.0;
    let appsR = 4.0;
    let downloadingC = 0;
    let predictionbanner_: Array<any> = [830, 398, 839];
    let baselinep = true;
   if (kuaishouJ.length > iconshareE.length) {
      iconshareE = `${1 << (Math.min(1, refreshborderless5.length))}`;
   }
   if (!kuaishouJ.includes(`${matchn}`)) {
      kuaishouJ = `${blackD.size | refreshborderless5.length}`;
   }
      iconshareE += `${libreanimatedh}`;
   for (let y = 0; y < 3; y++) {
       let downB = 5;
          let predictionY = String.fromCharCode(110,95,55,51,95,99,105,110,116,0);
          let dialogZ = 2.0;
          let foregroundO = 3.0;
         downB %= Math.max(parseInt(`${foregroundO}`) - 3, 3);
         predictionY += "1";
         dialogZ -= parseFloat(`${predictionY.length - 1}`);
         foregroundO -= parseFloat(`${2 << (Math.min(3, Math.abs(parseInt(`${dialogZ}`))))}`);
         downB -= 1;
      while ((downB & downB) == 2) {
          let mountingV = String.fromCharCode(97,95,54,57,95,108,97,117,110,99,104,0);
         downB -= downB;
         mountingV += `${mountingV.length + 2}`;
         break;
      }
      blackD.set(kuaishouJ, 1 << (Math.min(1, Math.abs(blackD.size))));
   }
   let basketballtrophy7 = 7714047 >= blackD.size;
   do {
      blackD.set(`${refreshborderless5.length}`, refreshborderless5.length * description_40.size);
      if (basketballtrophy7) {
         break;
      }
   } while (((libreanimatedh >> (Math.min(Math.abs(2), 3))) <= 3) && basketballtrophy7);
   if (!iconshareE.startsWith(`${description_40.size}`)) {
      description_40 = new Map([[iconshareE, iconshareE.length]]);
   }
      iconshareE += `${1 ^ refreshborderless5.length}`;
   let shootz = matchn >= 9439429.0;
   do {
      matchn /= Math.max(parseInt(`${matchn}`) >> (Math.min(1, Math.abs(2))), 1);
      if (shootz) {
         break;
      }
   } while ((refreshborderless5.includes(matchn)) && shootz);
      matchn *= blackD.size << (Math.min(refreshborderless5.length, 2));
   if (!kuaishouJ.startsWith(`${blackD.size}`)) {
       let libyogap = 2;
       let leaguedetailsbg6: Map<any, any> = new Map([[String.fromCharCode(108,95,56,53,95,112,105,112,101,108,105,110,101,0),643], [String.fromCharCode(97,114,101,97,95,54,95,51,51,0),43]]);
       let encryptD = String.fromCharCode(116,109,109,98,110,95,117,95,50,56,0);
       let singapore7: Array<any> = [String.fromCharCode(99,111,110,116,105,110,117,101,95,106,95,56,52,0), String.fromCharCode(115,119,97,112,112,97,98,108,101,95,109,95,54,53,0), String.fromCharCode(109,97,112,112,101,100,95,118,95,51,49,0)];
         singapore7 = [libyogap / (Math.max(singapore7.length, 9))];
      while ((libyogap >> (Math.min(Math.abs(4), 5))) <= 1 || (leaguedetailsbg6.size >> (Math.min(Math.abs(4), 5))) <= 3) {
         libyogap <<= Math.min(singapore7.length, 2);
         break;
      }
      let membershipq = encryptD == String.fromCharCode(117,109,102,114,0);
      do {
         encryptD += `${leaguedetailsbg6.size + encryptD.length}`;
         if (membershipq) {
            break;
         }
      } while (membershipq && (singapore7.length < 2));
          let kuaishouv = 5;
          let activeT = String.fromCharCode(110,95,52,54,95,105,110,100,105,99,97,116,111,114,0);
         leaguedetailsbg6 = new Map([[`${singapore7.length}`, 1 + singapore7.length]]);
         kuaishouv <<= Math.min(activeT.length, 1);
         activeT = `${kuaishouv}`;
          let historyA = String.fromCharCode(112,97,99,101,114,95,98,95,55,49,0);
          let themeG = String.fromCharCode(119,95,54,56,95,97,108,105,97,115,101,115,0);
          let buildM: Array<any> = [958, 204, 380];
         singapore7 = [libyogap];
         historyA += `${(historyA == String.fromCharCode(90,0) ? historyA.length : themeG.length)}`;
         themeG += `${themeG.length * 3}`;
         buildM.push(2);
          let feedbackR = String.fromCharCode(98,95,55,51,95,106,101,114,114,111,114,0);
          let sport5 = 0;
         singapore7.push(2 ^ encryptD.length);
         feedbackR += `${feedbackR.length << (Math.min(3, Math.abs(sport5)))}`;
         sport5 |= feedbackR.length;
      let themen = String.fromCharCode(121,54,95,122,108,95,105,51,48,0) == encryptD;
      do {
          let dependenciesI = 4.0;
          let styles5 = 4.0;
          let hearte = String.fromCharCode(112,117,108,108,95,49,95,51,0);
         encryptD += `${2 - encryptD.length}`;
         dependenciesI += (parseFloat(`${hearte == String.fromCharCode(122,0) ? parseInt(`${styles5}`) : hearte.length}`));
         styles5 -= parseInt(`${styles5}`) >> (Math.min(Math.abs(parseInt(`${dependenciesI}`)), 2));
         if (themen) {
            break;
         }
      } while (themen && (1 <= singapore7.length));
      while (leaguedetailsbg6.size >= singapore7.length) {
         leaguedetailsbg6 = new Map([[encryptD, encryptD.length]]);
         break;
      }
         libyogap |= libyogap;
      if (5 > (singapore7.length | encryptD.length) && (5 | singapore7.length) > 3) {
          let anythinkg = true;
         singapore7 = [leaguedetailsbg6.size];
         anythinkg = (!anythinkg ? anythinkg : !anythinkg);
      }
       let modalo = 5.0;
          let graphs: Map<any, any> = new Map([[String.fromCharCode(115,105,103,102,105,103,95,51,95,57,52,0),35], [String.fromCharCode(111,114,105,101,110,116,95,120,95,57,51,0),216], [String.fromCharCode(122,95,57,48,95,112,114,101,0),761]]);
          let less4 = String.fromCharCode(113,95,50,54,95,114,116,112,109,97,112,0);
          let cornerkickX = 2.0;
         leaguedetailsbg6 = new Map([[`${leaguedetailsbg6.size}`, leaguedetailsbg6.size]]);
         graphs = new Map([[`${graphs.size}`, (less4 == String.fromCharCode(75,0) ? less4.length : graphs.size)]]);
         cornerkickX *= parseFloat(`${graphs.size}`);
      blackD.set(`${libreanimatedh}`, description_40.size);
   }
   for (let q = 0; q < 1; q++) {
      refreshborderless5.push(libreanimatedh + refreshborderless5.length);
   }
      libreanimatedh += (String.fromCharCode(120,0) == iconshareE ? parseInt(`${actionss}`) : iconshareE.length);
      iconshareE = "2";
   for (let z = 0; z < 1; z++) {
      matchn -= 3;
   }
      kuaishouJ += "3";
   for (let s = 0; s < 2; s++) {
      actionss /= Math.max(4, parseFloat(`${2 + kuaishouJ.length}`));
   }

    RNExitApp.exitApp();
  }, []);

  const handleAccept = useCallback(() => {
       let homeplayert: Array<any> = [362, 637];
    let termsN = String.fromCharCode(114,104,115,95,103,95,51,57,0);
    let type_fa = 4;
    let networkN = 1;
    let chatj: Map<any, any> = new Map([[String.fromCharCode(112,105,101,95,54,95,55,57,0),481], [String.fromCharCode(99,104,97,114,116,95,103,95,52,55,0),255]]);
    let iconnotificationnewK = 3;
    let pageE = String.fromCharCode(106,95,56,95,114,97,119,101,110,99,0);
    let checkbox3 = true;
    let largesoundT = String.fromCharCode(117,110,102,101,116,99,104,95,117,95,54,54,0);
    let profilepic8 = String.fromCharCode(109,112,100,98,95,107,95,57,49,0);
    let bases: Map<any, any> = new Map([[String.fromCharCode(98,95,49,51,95,118,109,100,97,117,100,105,111,0),839], [String.fromCharCode(99,111,110,99,97,116,100,101,99,95,54,95,52,48,0),808]]);
    let agreementH = 4.0;
    let subbasketballplayerb = 4.0;
    let gmaila = 0.0;
      checkbox3 = 81 <= bases.size;
      bases.set(pageE, pageE.length);
       let footballfiledlayouto: Map<any, any> = new Map([[String.fromCharCode(97,112,110,103,95,118,95,57,56,0),781], [String.fromCharCode(101,95,51,95,109,111,114,101,0),117], [String.fromCharCode(110,112,114,111,98,101,95,118,95,54,49,0),166]]);
         footballfiledlayouto.set(`${footballfiledlayouto.size}`, footballfiledlayouto.size % 1);
      for (let b = 0; b < 1; b++) {
         footballfiledlayouto.set(`${footballfiledlayouto.size}`, footballfiledlayouto.size >> (Math.min(5, Math.abs(footballfiledlayouto.size))));
      }
          let moreU = String.fromCharCode(97,95,50,95,99,121,97,110,0);
          let networkX = String.fromCharCode(104,95,54,54,95,112,117,98,108,105,115,104,101,114,0);
          let push1 = String.fromCharCode(103,114,111,117,112,99,97,108,108,95,103,95,52,56,0);
         footballfiledlayouto = new Map([[moreU, 1 & networkX.length]]);
         moreU = `${push1.length & 2}`;
         networkX = `${(push1 == String.fromCharCode(73,0) ? push1.length : push1.length)}`;
      networkN %= Math.max(4, chatj.size | 3);
      type_fa <<= Math.min(1, Math.abs(chatj.size));
   while (5 > (bases.size % 5) && (agreementH * 5.27) > 4.74) {
      agreementH += parseFloat(`${3}`);
      break;
   }
      profilepic8 = "1";
      largesoundT = `${profilepic8.length}`;
   if ((3.28 * agreementH) <= 5.58) {
      chatj = new Map([[`${homeplayert.length}`, 3]]);
   }
   while ((termsN.length / 2) < 4 || (iconnotificationnewK / (Math.max(3, termsN.length))) < 2) {
      termsN += `${profilepic8.length}`;
      break;
   }
      pageE += `${networkN & 3}`;
   let libcrashsdkL = largesoundT.length >= 7380367;
   do {
      largesoundT += `${(largesoundT == String.fromCharCode(81,0) ? termsN.length : largesoundT.length)}`;
      if (libcrashsdkL) {
         break;
      }
   } while (libcrashsdkL && (parseFloat(`${largesoundT.length}`) >= agreementH));
   while (!checkbox3) {
      homeplayert.push(largesoundT.length);
      break;
   }
      profilepic8 = "1";
   let bannerU = 9181945 <= networkN;
   do {
      networkN %= Math.max(termsN.length >> (Math.min(1, Math.abs(networkN))), 5);
      if (bannerU) {
         break;
      }
   } while ((2 < (networkN | largesoundT.length) && 2 < (largesoundT.length | networkN)) && bannerU);
   let neonz = String.fromCharCode(103,107,95,106,109,0) == profilepic8;
   do {
       let episodesH: Array<any> = [622, 663, 338];
      while (!episodesH.includes(episodesH.length)) {
         episodesH = [episodesH.length | 3];
         break;
      }
      while (episodesH.length < episodesH.length) {
         episodesH = [episodesH.length];
         break;
      }
      while (episodesH.length >= 1) {
         episodesH = [1];
         break;
      }
      profilepic8 = `${((checkbox3 ? 3 : 3) - type_fa)}`;
      if (neonz) {
         break;
      }
   } while (neonz && (4 == profilepic8.length));

    setIsVisible(false)

      bases = new Map([[`${bases.size}`, pageE.length + bases.size]]);
       let defaultlogoF = String.fromCharCode(115,95,52,51,95,97,117,116,104,111,114,105,122,101,114,0);
       let nexth = 0.0;
      while (2 == (parseInt(`${nexth}`) - defaultlogoF.length) && 2.48 == (parseFloat(`${defaultlogoF.length}`) - nexth)) {
         nexth -= parseFloat(`${parseInt(`${nexth}`)}`);
         break;
      }
          let valuesF = String.fromCharCode(101,95,53,55,95,101,110,117,109,0);
         nexth *= parseFloat(`${valuesF.length % (Math.max(defaultlogoF.length, 9))}`);
         nexth += (parseFloat(`${String.fromCharCode(86,0) == defaultlogoF ? parseInt(`${nexth}`) : defaultlogoF.length}`));
      if (4 > (parseInt(`${nexth}`) / 3) && 5.97 > (nexth / (Math.max(5, parseFloat(`${defaultlogoF.length}`))))) {
          let tempnodatam = String.fromCharCode(100,95,57,48,95,112,101,114,112,101,110,100,105,99,117,108,97,114,0);
          let rewardX = 1.0;
          let emojif = false;
         defaultlogoF = `${parseInt(`${nexth}`) | defaultlogoF.length}`;
         tempnodatam = `${1 + parseInt(`${rewardX}`)}`;
         rewardX -= 1;
         emojif = rewardX < 21.78 && emojif;
      }
      for (let a = 0; a < 1; a++) {
         nexth *= parseFloat(`${defaultlogoF.length & 2}`);
      }
      while (4 < (3 | defaultlogoF.length) && (parseFloat(`${defaultlogoF.length}`) + nexth) < 5.45) {
         defaultlogoF = `${defaultlogoF.length}`;
         break;
      }
      homeplayert.push(chatj.size);
   if (4 == (type_fa ^ 4)) {
      type_fa %= Math.max(profilepic8.length, 5);
   }
      bases = new Map([[`${bases.size}`, bases.size + largesoundT.length]]);
      homeplayert = [3];
      pageE = `${1 & networkN}`;
   for (let b = 0; b < 2; b++) {
      type_fa |= 3;
   }
   while (bases.get(`${iconnotificationnewK}`) == null) {
      bases = new Map([[`${bases.size}`, bases.size >> (Math.min(Math.abs(1), 4))]]);
      break;
   }
       let windK: Map<any, any> = new Map([[String.fromCharCode(116,97,116,105,99,95,57,95,53,51,0),false ], [String.fromCharCode(99,102,102,116,105,95,114,95,53,55,0),false ]]);
      if ((windK.size ^ windK.size) > 2) {
         windK = new Map([[`${windK.size}`, windK.size * windK.size]]);
      }
      if ((windK.size - 3) >= 3 && (windK.size - 3) >= 5) {
         windK.set(`${windK.size}`, windK.size);
      }
      if ((windK.size << (Math.min(5, Math.abs(windK.size)))) > 1) {
          let bridgef = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,95,115,95,54,53,0);
          let forwardv = String.fromCharCode(105,95,49,48,95,115,119,114,105,0);
         windK.set(bridgef, 2 % (Math.max(10, bridgef.length)));
         forwardv += `${3 << (Math.min(4, forwardv.length))}`;
      }
      subbasketballplayerb -= parseFloat(`${2 ^ termsN.length}`);
       let clubv = 0.0;
       let hooku = 1.0;
       let confirmationi = 1;
      let a_positionA = 5684589.0 <= hooku;
      do {
         hooku += parseFloat(`${2 ^ confirmationi}`);
         if (a_positionA) {
            break;
         }
      } while (((1.14 + hooku) <= 5.12 || 1.46 <= (1.14 / (Math.max(6, clubv)))) && a_positionA);
      while (4.2 == hooku) {
         hooku -= parseFloat(`${parseInt(`${hooku}`) | parseInt(`${clubv}`)}`);
         break;
      }
      let soundB = hooku >= 5824673.0;
      do {
          let homeloadingJ: Map<any, any> = new Map([[String.fromCharCode(117,95,53,56,95,115,105,120,0),386], [String.fromCharCode(109,95,54,51,95,118,97,114,120,104,0),280], [String.fromCharCode(97,100,100,115,95,104,95,51,0),768]]);
          let floaterc: Map<any, any> = new Map([[String.fromCharCode(120,95,52,52,95,121,117,118,110,118,99,0),true ], [String.fromCharCode(97,95,55,52,95,115,99,97,110,120,0),true ], [String.fromCharCode(101,95,50,52,0),false ]]);
          let default__W = String.fromCharCode(117,110,97,118,97,105,108,97,98,108,101,95,114,95,55,54,0);
         hooku /= Math.max(5, parseFloat(`${parseInt(`${hooku}`) >> (Math.min(Math.abs(3), 1))}`));
         homeloadingJ.set(`${floaterc.size}`, 2);
         floaterc = new Map([[`${homeloadingJ.size}`, homeloadingJ.size]]);
         default__W += `${floaterc.size - 1}`;
         if (soundB) {
            break;
         }
      } while (soundB && (2 > (1 * confirmationi) || 3 > (confirmationi | 1)));
         hooku += parseFloat(`${3 * parseInt(`${hooku}`)}`);
          let gifgoalbgw = String.fromCharCode(112,95,55,52,95,119,101,98,112,97,103,101,115,0);
          let statisticsb = 5.0;
          let bootsplashW = true;
         confirmationi <<= Math.min(Math.abs(gifgoalbgw.length >> (Math.min(Math.abs(1), 2))), 2);
         gifgoalbgw += `${(parseInt(`${statisticsb}`) * (bootsplashW ? 4 : 2))}`;
         statisticsb *= (parseInt(`${statisticsb}`) << (Math.min(2, Math.abs((bootsplashW ? 1 : 2)))));
      for (let m = 0; m < 3; m++) {
          let textinput_ = 4;
          let predictionwinH = String.fromCharCode(115,111,117,114,99,101,95,55,95,54,56,0);
         hooku /= Math.max(parseFloat(`${parseInt(`${clubv}`)}`), 3);
         textinput_ &= textinput_ / (Math.max(6, predictionwinH.length));
         predictionwinH += `${(predictionwinH == String.fromCharCode(109,0) ? predictionwinH.length : textinput_)}`;
      }
      while (3.33 > (hooku / (Math.max(1.70, 5))) && (clubv / (Math.max(3, hooku))) > 1.70) {
         clubv /= Math.max(confirmationi - 1, 1);
         break;
      }
      while (3.22 > (clubv + 3.32) || (clubv + confirmationi) > 3.32) {
         confirmationi %= Math.max(confirmationi, 3);
         break;
      }
      let whatsappe = 5206385.0 <= hooku;
      do {
         hooku -= parseFloat(`${parseInt(`${hooku}`)}`);
         if (whatsappe) {
            break;
         }
      } while ((5 == confirmationi) && whatsappe);
      type_fa &= parseInt(`${agreementH}`) / (Math.max(3, termsN.length));
   let mintegral3 = 9527861.0 >= subbasketballplayerb;
   do {
      subbasketballplayerb -= parseFloat(`${termsN.length}`);
      if (mintegral3) {
         break;
      }
   } while (mintegral3 && ((subbasketballplayerb + parseFloat(`${networkN}`)) == 3.65 && 3.15 == (3.65 + subbasketballplayerb)));
      checkbox3 = termsN == profilepic8;
   let icondefaultthumbnailI = 5539936 >= pageE.length;
   do {
      pageE = `${pageE.length / 2}`;
      if (icondefaultthumbnailI) {
         break;
      }
   } while (icondefaultthumbnailI && (!pageE.includes(`${iconnotificationnewK}`)));
   while ((1 ^ type_fa) > 4) {
      type_fa <<= Math.min(5, Math.abs(((checkbox3 ? 2 : 2) | parseInt(`${subbasketballplayerb}`))));
      break;
   }
      profilepic8 += "3";
    setAccepted(true)

      bases.set(profilepic8, profilepic8.length * 1);
       let filterV: Array<any> = [570, 963];
       let cornerkickF: Array<any> = [160, 615];
       let iconarrowrightwhiteu = 3;
       let b_countb = 5;
       let largem = 2;
         iconarrowrightwhiteu ^= filterV.length;
         cornerkickF = [cornerkickF.length];
      while (4 == (largem - 3) && 3 == (largem - 3)) {
          let libmapbufferjniI = String.fromCharCode(113,95,54,48,95,112,105,101,0);
          let projectb = false;
          let modelsg = String.fromCharCode(121,117,118,114,103,98,97,95,55,95,51,56,0);
          let libsentryu = 3.0;
         largem %= Math.max(filterV.length, 2);
         libmapbufferjniI += `${parseInt(`${libsentryu}`) >> (Math.min(Math.abs(1), 3))}`;
         projectb = libsentryu > 50.72;
         modelsg = `${((projectb ? 5 : 5) % (Math.max(5, parseInt(`${libsentryu}`))))}`;
         break;
      }
         largem -= b_countb;
      while ((iconarrowrightwhiteu - 4) < 3 && 1 < (4 - b_countb)) {
          let libimagepipelineM = String.fromCharCode(101,95,50,49,95,103,114,97,112,104,0);
          let zoom_ = 1;
         b_countb >>= Math.min(Math.abs(libimagepipelineM.length / 3), 2);
         libimagepipelineM += "3";
         zoom_ += zoom_;
         break;
      }
         largem %= Math.max(1, b_countb);
          let gestures5 = String.fromCharCode(108,111,103,95,111,95,54,48,0);
          let share2 = String.fromCharCode(103,95,49,95,97,116,116,97,99,104,109,101,110,116,0);
         iconarrowrightwhiteu ^= iconarrowrightwhiteu & 3;
         gestures5 = `${gestures5.length - 3}`;
         share2 += "2";
         iconarrowrightwhiteu -= b_countb;
      networkN &= cornerkickF.length * 2;
      bases.set(`${iconnotificationnewK}`, bases.size);
       let modal3: Map<any, any> = new Map([[String.fromCharCode(115,104,105,109,95,116,95,52,53,0),729], [String.fromCharCode(118,99,97,99,100,97,116,97,95,111,95,57,51,0),493]]);
       let arrowrightwithtail5 = String.fromCharCode(99,95,54,51,95,117,97,100,100,0);
       let singaporeC = String.fromCharCode(105,95,56,57,95,97,101,115,116,97,98,0);
      while (1 <= arrowrightwithtail5.length) {
         arrowrightwithtail5 = `${arrowrightwithtail5.length >> (Math.min(2, singaporeC.length))}`;
         break;
      }
         singaporeC = "1";
      if ((modal3.size % (Math.max(9, arrowrightwithtail5.length))) == 3 || (arrowrightwithtail5.length % 3) == 5) {
          let fastforwards: Map<any, any> = new Map([[String.fromCharCode(117,112,103,114,97,100,101,100,95,119,95,53,50,0),287], [String.fromCharCode(98,111,111,107,109,97,114,107,115,95,114,95,55,54,0),459]]);
          let traminia = false;
         arrowrightwithtail5 = `${3 | arrowrightwithtail5.length}`;
         fastforwards = new Map([[`${fastforwards.size}`, 3]]);
         traminia = fastforwards.size == 73 && !traminia;
      }
      let activeV = arrowrightwithtail5 == String.fromCharCode(102,57,110,104,100,115,97,111,56,0);
      do {
          let airbnbstaru = 4.0;
          let libreact8 = String.fromCharCode(101,120,116,101,110,116,95,51,95,49,52,0);
          let sourceD = 5.0;
          let footballfiledlayoutY = String.fromCharCode(116,95,49,52,95,114,101,101,110,97,98,108,101,0);
          let backO: Map<any, any> = new Map([[String.fromCharCode(105,99,119,114,115,105,95,99,95,54,55,0),786], [String.fromCharCode(101,118,101,114,121,98,111,100,121,95,49,95,49,55,0),891], [String.fromCharCode(118,97,108,117,101,115,95,57,95,50,0),450]]);
         arrowrightwithtail5 += `${backO.size >> (Math.min(footballfiledlayoutY.length, 2))}`;
         airbnbstaru += parseFloat(`${1 | parseInt(`${sourceD}`)}`);
         libreact8 += `${1 - parseInt(`${sourceD}`)}`;
         footballfiledlayoutY += `${parseInt(`${sourceD}`)}`;
         backO.set(`${airbnbstaru}`, parseInt(`${airbnbstaru}`));
         if (activeV) {
            break;
         }
      } while ((singaporeC.length == 2) && activeV);
      while (singaporeC.startsWith(`${modal3.size}`)) {
         modal3.set(`${arrowrightwithtail5}`, arrowrightwithtail5.length * modal3.size);
         break;
      }
      let hongkongv = arrowrightwithtail5.length >= 5466614;
      do {
         arrowrightwithtail5 += `${modal3.size}`;
         if (hongkongv) {
            break;
         }
      } while (hongkongv && (singaporeC.length == arrowrightwithtail5.length));
          let ajaxa = String.fromCharCode(100,99,109,112,95,57,95,57,54,0);
          let b_positionp = String.fromCharCode(122,95,54,56,95,108,111,99,107,0);
          let traminit = 3;
         arrowrightwithtail5 = `${arrowrightwithtail5.length}`;
         ajaxa += `${ajaxa.length}`;
         b_positionp += "3";
         traminit ^= traminit;
      let fastforwardM = arrowrightwithtail5 == String.fromCharCode(114,115,116,48,55,0);
      do {
          let basketballmatchdetailbgr = true;
          let q_locka = String.fromCharCode(112,111,115,105,116,105,111,110,115,95,48,95,52,49,0);
          let malaysiaE: Array<any> = [930, 85, 805];
          let liveshareO = String.fromCharCode(100,105,115,112,111,115,97,108,95,111,95,52,57,0);
         arrowrightwithtail5 += "1";
         basketballmatchdetailbgr = q_locka.length < 78;
         q_locka += `${q_locka.length}`;
         malaysiaE = [((basketballmatchdetailbgr ? 4 : 5) % (Math.max(q_locka.length, 10)))];
         liveshareO += `${q_locka.length ^ malaysiaE.length}`;
         if (fastforwardM) {
            break;
         }
      } while (fastforwardM && (singaporeC != String.fromCharCode(51,0)));
      while (1 <= (singaporeC.length << (Math.min(1, Math.abs(modal3.size)))) || 1 <= (singaporeC.length << (Math.min(1, Math.abs(modal3.size))))) {
         modal3 = new Map([[arrowrightwithtail5, (singaporeC == String.fromCharCode(114,0) ? arrowrightwithtail5.length : singaporeC.length)]]);
         break;
      }
      gmaila += modal3.size << (Math.min(Math.abs(3), 2));
   for (let m = 0; m < 3; m++) {
       let arrowupH = String.fromCharCode(105,110,110,100,101,114,95,110,95,56,50,0);
       let plashP = String.fromCharCode(119,95,51,57,95,110,98,105,116,115,0);
       let halfk: Map<any, any> = new Map([[String.fromCharCode(102,95,50,56,95,99,111,101,102,102,115,0),45], [String.fromCharCode(109,111,115,97,105,99,95,104,95,52,49,0),704], [String.fromCharCode(115,113,117,101,101,122,101,95,100,95,52,55,0),562]]);
       let buttonu = 1.0;
       let teamc = String.fromCharCode(99,95,54,51,95,111,105,100,0);
      for (let w = 0; w < 1; w++) {
         teamc = `${halfk.size}`;
      }
          let bottom4 = String.fromCharCode(114,95,52,49,95,99,104,117,110,107,0);
         buttonu /= Math.max(parseFloat(`${halfk.size}`), 5);
         bottom4 = `${2 + bottom4.length}`;
          let materialR = 2;
         teamc += `${plashP.length / (Math.max(2, 6))}`;
         materialR /= Math.max(materialR << (Math.min(1, Math.abs(materialR))), 3);
          let scorepopsoundq = String.fromCharCode(114,95,50,53,95,108,101,102,116,109,111,115,116,0);
          let cornerkick1 = 5.0;
         buttonu += parseFloat(`${teamc.length}`);
         scorepopsoundq += `${parseInt(`${cornerkick1}`)}`;
         cornerkick1 += 3;
      let libfollyF = 7472199 <= arrowupH.length;
      do {
         arrowupH += `${teamc.length >> (Math.min(2, Math.abs(halfk.size)))}`;
         if (libfollyF) {
            break;
         }
      } while (libfollyF && ((3 + arrowupH.length) > 3));
         halfk = new Map([[teamc, 2]]);
      for (let f = 0; f < 2; f++) {
         teamc = "2";
      }
         arrowupH += `${parseInt(`${buttonu}`) / (Math.max(teamc.length, 4))}`;
         buttonu *= parseFloat(`${2 + parseInt(`${buttonu}`)}`);
          let applicationw = 4;
          let fastforwarde = String.fromCharCode(100,101,108,101,103,97,116,111,114,95,49,95,51,51,0);
         buttonu /= Math.max(3, (parseFloat(`${String.fromCharCode(72,0) == plashP ? plashP.length : halfk.size}`)));
         applicationw >>= Math.min(Math.abs(2 | fastforwarde.length), 5);
         fastforwarde = `${applicationw >> (Math.min(Math.abs(2), 5))}`;
         buttonu += parseFloat(`${2 + parseInt(`${buttonu}`)}`);
         buttonu /= Math.max(parseFloat(`${parseInt(`${buttonu}`) + teamc.length}`), 5);
         halfk = new Map([[`${halfk.size}`, 3 ^ halfk.size]]);
      if ((halfk.size % 5) >= 4) {
         arrowupH = `${1 / (Math.max(5, arrowupH.length))}`;
      }
         plashP += `${plashP.length}`;
      iconnotificationnewK /= Math.max(parseInt(`${buttonu}`), 1);
   }
   let iconlogoutt = String.fromCharCode(113,119,102,53,121,0) == termsN;
   do {
       let hooksh: Map<any, any> = new Map([[String.fromCharCode(102,95,57,95,97,118,102,105,108,116,101,114,0),String.fromCharCode(98,97,115,107,101,116,98,97,108,108,95,120,95,51,56,0)], [String.fromCharCode(99,97,99,104,105,110,103,95,108,95,52,51,0),String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,108,121,95,49,95,52,48,0)], [String.fromCharCode(104,95,51,49,95,102,111,111,116,101,114,0),String.fromCharCode(105,95,49,50,95,116,115,97,110,0)]]);
       let videovarB: Array<any> = [944, 277, 746];
       let homeloadingQ = String.fromCharCode(115,117,114,112,114,105,115,101,100,95,98,95,50,50,0);
       let report9 = String.fromCharCode(109,97,107,101,99,116,95,104,95,54,51,0);
      if (report9.length > 2) {
          let foregroundy: Map<any, any> = new Map([[String.fromCharCode(99,95,54,50,95,118,112,97,116,104,0),false ], [String.fromCharCode(98,95,54,48,95,117,115,116,111,109,0),false ]]);
          let blacklistQ = 3.0;
          let penaltyc: Array<any> = [948, 218];
          let iconsettingz = String.fromCharCode(122,95,51,49,95,109,101,115,111,110,0);
          let modelsW = false;
         report9 += `${2 << (Math.min(2, Math.abs(parseInt(`${blacklistQ}`))))}`;
         foregroundy = new Map([[`${penaltyc.length}`, 3 << (Math.min(1, iconsettingz.length))]]);
         blacklistQ *= parseFloat(`${1}`);
         penaltyc = [penaltyc.length];
         iconsettingz += `${(iconsettingz.length + (modelsW ? 2 : 2))}`;
         modelsW = String.fromCharCode(81,0) == iconsettingz;
      }
      for (let e = 0; e < 3; e++) {
         videovarB = [videovarB.length];
      }
         homeloadingQ += `${2 >> (Math.min(4, videovarB.length))}`;
      if (4 <= videovarB.length) {
          let nendm = String.fromCharCode(98,105,116,114,118,99,111,110,106,95,97,95,49,57,0);
          let libreactperfloggerjni2: Array<any> = [662, 980];
          let middlel = 3.0;
         videovarB.push(report9.length & 1);
         nendm = `${parseInt(`${middlel}`) / 3}`;
         libreactperfloggerjni2 = [1];
         middlel -= nendm.length;
      }
      if (report9.length <= 1) {
         report9 = `${videovarB.length - 3}`;
      }
       let b_hashR = String.fromCharCode(114,101,98,117,99,107,101,116,95,117,95,57,50,0);
       let episodeU = String.fromCharCode(109,117,108,116,105,108,105,110,101,95,102,95,53,55,0);
      while (1 <= (hooksh.size / (Math.max(3, videovarB.length)))) {
         videovarB = [1];
         break;
      }
      while (1 == (videovarB.length ^ 3)) {
         b_hashR = `${hooksh.size ^ report9.length}`;
         break;
      }
         hooksh = new Map([[`${videovarB.length}`, b_hashR.length - 3]]);
      while (homeloadingQ != String.fromCharCode(66,0) || 4 > report9.length) {
         report9 = `${hooksh.size}`;
         break;
      }
      for (let s = 0; s < 3; s++) {
          let libimagepipelinep = false;
         report9 += `${(episodeU.length * (libimagepipelinep ? 1 : 5))}`;
      }
      let componentI = b_hashR == String.fromCharCode(49,102,100,110,54,115,48,105,0);
      do {
         b_hashR = `${homeloadingQ.length ^ 1}`;
         if (componentI) {
            break;
         }
      } while (componentI && (b_hashR.startsWith(`${episodeU.length}`)));
      termsN += `${1 | bases.size}`;
      if (iconlogoutt) {
         break;
      }
   } while (iconlogoutt && ((agreementH - parseFloat(`${termsN.length}`)) >= 1.38));
       let homeplayerX = 2;
       let halffieldimage4 = true;
         halffieldimage4 = homeplayerX > 4;
         homeplayerX |= 1 + homeplayerX;
          let defaultteamB: Array<any> = [125, 77];
         homeplayerX += 3;
         defaultteamB.push(defaultteamB.length);
      let nterstitialn = halffieldimage4 ? !halffieldimage4 : halffieldimage4;
      do {
          let bingI = String.fromCharCode(112,114,101,99,101,110,99,101,95,107,95,53,49,0);
          let temperaturey = 3.0;
         halffieldimage4 = 54 >= homeplayerX;
         bingI += `${parseInt(`${temperaturey}`) >> (Math.min(bingI.length, 1))}`;
         temperaturey /= Math.max(parseFloat(`${bingI.length}`), 1);
         if (nterstitialn) {
            break;
         }
      } while (nterstitialn && (2 > (5 >> (Math.min(3, Math.abs(homeplayerX)))) || 5 > homeplayerX));
      let feedback4 = halffieldimage4 ? !halffieldimage4 : halffieldimage4;
      do {
          let iconarrowrightwhited = false;
          let castT: Array<any> = [508, 897];
          let cedbadcebfbfbfbcfecbc8 = 4;
         halffieldimage4 = iconarrowrightwhited && castT.length > 10;
         iconarrowrightwhited = 42 >= cedbadcebfbfbfbcfecbc8;
         castT = [1];
         if (feedback4) {
            break;
         }
      } while (((3 * homeplayerX) <= 1) && feedback4);
         halffieldimage4 = !halffieldimage4;
      chatj = new Map([[`${checkbox3}`, 2]]);
   for (let e = 0; e < 2; e++) {
      pageE = `${type_fa}`;
   }
      largesoundT += `${largesoundT.length / 1}`;
   for (let r = 0; r < 2; r++) {
      chatj.set(profilepic8, 2 << (Math.min(1, homeplayert.length)));
   }
   if ((parseInt(`${agreementH}`) - homeplayert.length) < 5) {
      agreementH += parseFloat(`${parseInt(`${agreementH}`) - bases.size}`);
   }
   if (4 == (chatj.size + 5) || (pageE.length + chatj.size) == 5) {
       let pause2: Array<any> = [36, 510, 123];
       let iconschedulef = 5;
       let thumbnail3 = String.fromCharCode(115,116,111,112,95,48,95,49,53,0);
      while ((1 >> (Math.min(1, pause2.length))) >= 5 && (pause2.length >> (Math.min(3, Math.abs(iconschedulef)))) >= 1) {
         pause2 = [(thumbnail3 == String.fromCharCode(76,0) ? thumbnail3.length : iconschedulef)];
         break;
      }
         thumbnail3 = `${thumbnail3.length}`;
      let moviesp = pause2.length <= 6276860;
      do {
         pause2.push(thumbnail3.length / 1);
         if (moviesp) {
            break;
         }
      } while (moviesp && (3 < (1 & pause2.length)));
      if (3 < (iconschedulef % (Math.max(2, 2)))) {
         thumbnail3 = `${1 - pause2.length}`;
      }
      if (pause2.includes(iconschedulef)) {
         iconschedulef += thumbnail3.length;
      }
         iconschedulef >>= Math.min(3, Math.abs(3 | pause2.length));
         iconschedulef >>= Math.min(thumbnail3.length, 2);
      for (let f = 0; f < 1; f++) {
         pause2.push(iconschedulef / 1);
      }
      if (pause2.length > iconschedulef) {
          let bannerd = 3.0;
          let qnewarchdefaults4 = 2;
          let football2: Map<any, any> = new Map([[String.fromCharCode(122,95,55,49,95,110,105,99,101,108,121,0),false ], [String.fromCharCode(104,113,112,101,108,95,49,95,49,48,0),true ]]);
         iconschedulef ^= pause2.length >> (Math.min(3, Math.abs(iconschedulef)));
         bannerd -= football2.size * qnewarchdefaults4;
         qnewarchdefaults4 %= Math.max(parseInt(`${bannerd}`), 3);
         football2 = new Map([[`${qnewarchdefaults4}`, parseInt(`${bannerd}`) ^ 3]]);
      }
      chatj.set(`${subbasketballplayerb}`, ((checkbox3 ? 5 : 2) | parseInt(`${subbasketballplayerb}`)));
   }
      networkN *= bases.size;
      largesoundT = `${(networkN & (checkbox3 ? 1 : 1))}`;
       let classesy: Array<any> = [String.fromCharCode(107,95,54,54,95,117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,0), String.fromCharCode(115,105,114,105,95,97,95,54,48,0)];
       let executord = String.fromCharCode(121,95,53,49,95,121,95,52,48,0);
       let forwardd = 1;
         executord += `${1 % (Math.max(9, executord.length))}`;
         executord += `${forwardd >> (Math.min(Math.abs(3), 5))}`;
      let hometeamfieldj = 8380945 >= forwardd;
      do {
          let adultG = 3;
          let eighteenV = true;
          let splashn = true;
         forwardd -= (3 >> (Math.min(Math.abs((eighteenV ? 5 : 2)), 2)));
         adultG &= adultG;
         eighteenV = 44 >= adultG;
         if (hometeamfieldj) {
            break;
         }
      } while (hometeamfieldj && ((3 & executord.length) >= 1));
      let becomed = 8511380 >= forwardd;
      do {
         forwardd >>= Math.min(classesy.length, 3);
         if (becomed) {
            break;
         }
      } while (becomed && (forwardd >= 4));
         executord += `${3 << (Math.min(1, classesy.length))}`;
      while ((3 - classesy.length) <= 5 || (executord.length - classesy.length) <= 3) {
         classesy = [classesy.length];
         break;
      }
      for (let q = 0; q < 3; q++) {
         executord = `${forwardd}`;
      }
         executord = `${classesy.length}`;
      while (1 < (classesy.length % (Math.max(4, 7))) && (classesy.length % 4) < 4) {
         forwardd |= forwardd >> (Math.min(Math.abs(1), 2));
         break;
      }
      iconnotificationnewK ^= termsN.length & iconnotificationnewK;
    dispatch(acceptPrivacyPolicy())
  }, [])

  const handleReadTermsPrivacy = useCallback((view: '用户协议' | '隐私政策') => {
    const checkGoBack = ({ data }) => {
      if (data.state.routes[data.state.routes.length - 1].name === 'Home') {
        setIsVisible(true);
        navigation.removeListener('state', checkGoBack);
      }
    }
    navigation.addListener('state', checkGoBack);

    navigation.navigate(view);
    setIsVisible(false);
  }, [])

  return (
    <>
      {isVisible &&
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: colors.background + 'BB',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <View style={{
            width: '75%',
            padding: 20,
            gap: spacing.l,
            backgroundColor: colors.background,
            ...styles.overlay,
          }}>
            <Text style={{ ...textVariants.header, textAlign: 'center' }}>服务协议和隐私政策</Text>
            <Text
              style={{
                ...textVariants.subBody,
                textAlign: 'center',
              }}>
              <Text>
                请你务必审慎阅读,
                充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了更好的向你提供服务，我们需要收集你的设备标识，操作日常等信息用于分析，优化应用性能。你可阅读
              </Text>
              <Text onPress={() => handleReadTermsPrivacy('用户协议')}>
                <Text style={{ color: colors.primary }}>《服务协议》</Text>
              </Text>
              <Text>和</Text>
              <Text onPress={() => handleReadTermsPrivacy('隐私政策')}>
                <Text style={{ color: colors.primary }}>《隐私政策》</Text>
              </Text>
              <Text>
                了解详细信息。如果你同意，请点击下面按钮开始接受我们的服务。
              </Text>
            </Text>
            <View style={styles.btns}>
              <TouchableOpacity activeOpacity={0.85} style={styles.btn} onPress={handleReject}>
                <Text
                  style={{
                    ...textVariants.body,
                    ...styles.head,
                  }}>
                  暂不同意
                </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.85} style={styles.btn} onPress={handleAccept}>
                <Text
                  style={{
                    ...textVariants.body,
                    ...styles.head,
                    color: IS_OTHER_SKIN ? colors.confirm : colors.primary,
                  }}>
                  同意并接受
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  overlay: {
    borderRadius: 14,
  },
  head: {
    textAlign: 'center',
  },
  body: {
    color: 'white',
  },
  link: {
    display: 'flex',
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flex: 1,
  },
});
