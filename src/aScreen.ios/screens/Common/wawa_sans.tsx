import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../components/container/wawa_nterstitial_iconpipexpand';
import {RootStackScreenProps} from '@type/wawa_iconnewchat';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/wawa_root';
import {wawaIconsubssuccess} from '@redux/wawa_bgvipsport_spinner';

import TitleWithBackButtonHeader from '../../components/header/wawa_matchinactive_header';
import {wawaGuideSelect, wawaAgreementFlag} from '@redux/reducers/wawa_quest_ping';
import {removeVodsFromHistory, playVod} from '@redux/actions/wawa_indicator';
import VodHistoryCard from '../../components/vod/wawa_short_libcxxcomponents';
import CheckBoxSelected from '@static/images/iconbellactiveQuest.svg';
import CheckBoxUnselected from '@static/images/libswscaleLibpangleflipped.svg';
import {wawaSellProfileinactive} from '@type/wawa_gradlew';
import {Button} from '@rneui/themed';
import ConfirmationModal from '../../components/modal/wawa_iconedit';
import VodLiveStationListVertical from '../../components/vod/wawa_reactnativeratings_mounting';
import EmptyList from '../../components/common/wawa_othermatchdetailbg_videocommon';
import {ScrollView} from 'react-native-gesture-handler';

type wawaBellreminderDisconnected = {
  item: wawaGuideSelect;
};
export default ({navigation, route}: RootStackScreenProps<'电视台列表'>) => {
  const {liveStationItemList} = route.params;
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: wawaAgreementFlag = useAppSelector(
    ({vodReducer}: wawaIconsubssuccess) => vodReducer,
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<wawaSellProfileinactive>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let buttonn: Array<any> = [820, 560];
    let nalyticst = false;
    let backiconmaskA = String.fromCharCode(106,102,105,101,108,100,115,95,114,95,56,51,0);
    let libzeus5 = String.fromCharCode(115,95,51,55,95,111,110,101,0);
    let mutedb = 2.0;
    let resendl = String.fromCharCode(103,95,57,57,95,118,97,114,105,97,110,99,101,0);
    let dialogO = String.fromCharCode(107,95,54,51,95,100,111,119,110,108,111,97,100,105,110,103,0);
    let loadingspinner2 = 2.0;
    let bodanW = String.fromCharCode(111,95,50,95,109,115,103,115,109,100,101,99,0);
    let indexB = String.fromCharCode(118,95,57,52,95,115,105,109,112,108,101,116,105,109,101,111,117,116,0);
    let cnewinterstitialJ: Map<any, any> = new Map([[String.fromCharCode(103,95,57,56,95,103,108,111,119,0),false ], [String.fromCharCode(105,112,102,115,95,111,95,56,0),false ], [String.fromCharCode(119,95,56,53,0),true ]]);
    let bufferx: Map<any, any> = new Map([[String.fromCharCode(102,108,111,111,114,95,112,95,56,0),888], [String.fromCharCode(103,95,52,53,95,102,116,97,98,0),358], [String.fromCharCode(118,95,49,48,48,95,112,114,101,115,115,101,115,0),396]]);
    let emojiR = true;
    let mbridgeb = 0.0;
    let giftbuttono = String.fromCharCode(112,101,114,109,105,115,115,105,111,110,95,114,95,56,57,0);
    let umengA = true;
       let popup3 = String.fromCharCode(99,111,109,112,111,115,105,116,105,110,103,95,119,95,52,56,0);
       let malaysiaO = false;
       let downarrowc = String.fromCharCode(105,104,100,114,95,99,95,50,48,0);
      for (let r = 0; r < 1; r++) {
         malaysiaO = !malaysiaO;
      }
         popup3 = `${popup3.length}`;
      let bdxadsdkd = String.fromCharCode(120,112,115,114,104,117,99,0) == popup3;
      do {
         popup3 = `${(3 / (Math.max(9, (malaysiaO ? 3 : 4))))}`;
         if (bdxadsdkd) {
            break;
         }
      } while (bdxadsdkd && (downarrowc == String.fromCharCode(119,0)));
          let logouserU = false;
          let iconarrowleftI = 4;
          let steph = 4.0;
         popup3 = "3";
         logouserU = logouserU && steph == 9.96;
         iconarrowleftI += parseInt(`${steph}`) / 2;
         malaysiaO = (13 < ((malaysiaO ? 13 : downarrowc.length) & downarrowc.length));
      let yellowanimationliveb = downarrowc.length >= 8263214;
      do {
          let currentG = 5.0;
          let iconarrowrightblackA = String.fromCharCode(102,105,103,104,116,101,114,115,95,114,95,52,56,0);
         downarrowc += "1";
         currentG /= Math.max(2, 1 << (Math.min(4, iconarrowrightblackA.length)));
         iconarrowrightblackA += "1";
         if (yellowanimationliveb) {
            break;
         }
      } while (yellowanimationliveb && (!downarrowc.includes(`${malaysiaO}`)));
      let a_hashc = malaysiaO ? !malaysiaO : malaysiaO;
      do {
          let defaultteamw = 2.0;
          let rankm: Map<any, any> = new Map([[String.fromCharCode(101,116,104,101,114,95,49,95,49,53,0),117], [String.fromCharCode(101,110,99,108,111,115,105,110,103,95,116,95,53,48,0),266]]);
         malaysiaO = rankm.size >= 32 && malaysiaO;
         defaultteamw += parseFloat(`${parseInt(`${defaultteamw}`)}`);
         rankm.set(`${defaultteamw}`, parseInt(`${defaultteamw}`) << (Math.min(4, Math.abs(1))));
         if (a_hashc) {
            break;
         }
      } while (a_hashc && (downarrowc.includes(`${malaysiaO}`)));
         malaysiaO = !malaysiaO;
       let clearr = String.fromCharCode(110,95,49,53,95,115,104,97,100,111,119,115,0);
       let sansc = String.fromCharCode(109,95,55,48,95,100,101,108,97,117,110,97,121,0);
      buttonn = [resendl.length | libzeus5.length];
   if (libzeus5.startsWith(`${buttonn.length}`)) {
       let notificationfillempty2 = 4;
       let r_unlockw = String.fromCharCode(117,109,102,97,118,114,95,110,95,57,0);
         notificationfillempty2 /= Math.max(2, (String.fromCharCode(65,0) == r_unlockw ? r_unlockw.length : notificationfillempty2));
      let malaysiaQ = r_unlockw == String.fromCharCode(54,105,99,98,53,0);
      do {
          let yellowj = 4.0;
          let stylet = true;
          let videocommonV: Array<any> = [73, 575, 673];
          let whitebell4 = String.fromCharCode(113,95,56,48,95,119,109,97,118,111,105,99,101,0);
          let nodeO = true;
         r_unlockw = `${r_unlockw.length}`;
         yellowj += 3 ^ parseInt(`${yellowj}`);
         stylet = ((whitebell4.length % (Math.max(10, (nodeO ? 86 : whitebell4.length)))) > 86);
         videocommonV = [1];
         if (malaysiaQ) {
            break;
         }
      } while (((notificationfillempty2 - r_unlockw.length) > 4 && (r_unlockw.length - 4) > 2) && malaysiaQ);
          let moonn = 1;
         notificationfillempty2 ^= r_unlockw.length;
         moonn ^= 1 << (Math.min(4, Math.abs(moonn)));
         notificationfillempty2 |= r_unlockw.length;
          let mbjscommonO: Array<any> = [463, 528];
         notificationfillempty2 *= mbjscommonO.length & r_unlockw.length;
      while ((3 - notificationfillempty2) >= 1) {
          let strings3 = 5.0;
          let tempnodatas = String.fromCharCode(101,108,108,105,103,105,98,108,101,95,53,95,50,49,0);
         r_unlockw += `${parseInt(`${strings3}`)}`;
         strings3 *= (tempnodatas == String.fromCharCode(107,0) ? tempnodatas.length : tempnodatas.length);
         break;
      }
      libzeus5 = `${parseInt(`${mutedb}`) % 3}`;
   }
   while (bodanW == backiconmaskA) {
      backiconmaskA += `${parseInt(`${loadingspinner2}`)}`;
      break;
   }
   while ((cnewinterstitialJ.size >> (Math.min(Math.abs(1), 1))) == 2 || (1 >> (Math.min(4, Math.abs(cnewinterstitialJ.size)))) == 1) {
      cnewinterstitialJ = new Map([[`${loadingspinner2}`, backiconmaskA.length - 2]]);
      break;
   }
   if (bufferx.size == 1) {
      bufferx.set(backiconmaskA, backiconmaskA.length);
   }
   for (let k = 0; k < 3; k++) {
      cnewinterstitialJ.set(dialogO, parseInt(`${loadingspinner2}`) >> (Math.min(dialogO.length, 2)));
   }
   while (bufferx.size <= libzeus5.length) {
      libzeus5 += `${parseInt(`${mutedb}`) << (Math.min(libzeus5.length, 5))}`;
      break;
   }
   for (let u = 0; u < 2; u++) {
      dialogO += `${((nalyticst ? 1 : 4) / 2)}`;
   }
   if (libzeus5.includes(dialogO)) {
       let distY = 2;
       let stre = String.fromCharCode(100,95,57,54,95,111,110,116,114,111,108,0);
       let mutedB: Array<any> = [313, 321, 824];
       let libjsijniprofilerC = 0.0;
       let overt = String.fromCharCode(115,95,55,53,95,112,105,110,110,101,114,0);
      for (let t = 0; t < 3; t++) {
         stre += `${parseInt(`${libjsijniprofilerC}`)}`;
      }
         libjsijniprofilerC += overt.length;
         overt += `${stre.length}`;
         stre += `${parseInt(`${libjsijniprofilerC}`) ^ distY}`;
      for (let a = 0; a < 2; a++) {
         mutedB.push(mutedB.length * overt.length);
      }
          let activity7 = 4.0;
         mutedB = [3 << (Math.min(2, Math.abs(parseInt(`${activity7}`))))];
         mutedB = [parseInt(`${libjsijniprofilerC}`)];
         libjsijniprofilerC *= mutedB.length % (Math.max(overt.length, 7));
          let vietnamd = String.fromCharCode(110,95,50,95,98,111,114,100,101,114,101,100,0);
         overt += "1";
         vietnamd += `${3 - vietnamd.length}`;
         overt += `${parseInt(`${libjsijniprofilerC}`)}`;
      while ((distY - libjsijniprofilerC) <= 4.81) {
         libjsijniprofilerC += stre.length;
         break;
      }
         mutedB = [stre.length % 2];
         libjsijniprofilerC += stre.length;
      while (1.63 == (libjsijniprofilerC - 4.36)) {
          let iconqq1 = false;
         libjsijniprofilerC *= mutedB.length * 2;
         iconqq1 = (!iconqq1 ? !iconqq1 : !iconqq1);
         break;
      }
      if (stre.startsWith(`${libjsijniprofilerC}`)) {
         stre = `${distY}`;
      }
      dialogO += `${parseInt(`${loadingspinner2}`) ^ bufferx.size}`;
   }
   if (3 < backiconmaskA.length) {
       let adultK = false;
       let tumbnailo: Array<any> = [634, 937];
       let inviteN = true;
       let live1: Array<any> = [7, 203, 706];
       let iconscheduleq = false;
      while (iconscheduleq) {
         inviteN = tumbnailo.length >= live1.length;
         break;
      }
          let sellmathbackgroundF = String.fromCharCode(104,101,97,114,116,95,118,95,55,0);
          let dragclosei = 2.0;
          let pushC = String.fromCharCode(102,95,54,50,95,104,111,114,105,122,0);
         tumbnailo = [1];
         sellmathbackgroundF = `${parseInt(`${dragclosei}`)}`;
         dragclosei /= Math.max((parseFloat(`${String.fromCharCode(121,0) == sellmathbackgroundF ? parseInt(`${dragclosei}`) : sellmathbackgroundF.length}`)), 4);
         pushC += `${pushC.length % 2}`;
         adultK = live1.length >= 93 || iconscheduleq;
         adultK = live1.length >= 1 || 1 >= tumbnailo.length;
      let gradlew1 = tumbnailo.length >= 6561320;
      do {
         tumbnailo.push(live1.length);
         if (gradlew1) {
            break;
         }
      } while (gradlew1 && ((3 >> (Math.min(5, tumbnailo.length))) >= 3 || 3 >= tumbnailo.length));
      while (2 == (live1.length - 2)) {
         adultK = !inviteN && tumbnailo.length < 92;
         break;
      }
          let subtextA: Array<any> = [638, 689];
          let foreground2 = String.fromCharCode(104,115,99,97,108,101,114,95,109,95,53,52,0);
         live1 = [1];
         subtextA = [foreground2.length];
         foreground2 += `${(String.fromCharCode(79,0) == foreground2 ? foreground2.length : subtextA.length)}`;
         live1 = [((iconscheduleq ? 1 : 5))];
      if (iconscheduleq) {
          let activeR = String.fromCharCode(109,95,52,55,95,108,117,116,115,0);
          let iconclosec = String.fromCharCode(115,117,105,116,101,115,95,108,95,53,48,0);
         inviteN = activeR == String.fromCharCode(102,0) || 76 < live1.length;
         activeR += `${iconclosec.length}`;
         iconclosec += `${(String.fromCharCode(106,0) == iconclosec ? iconclosec.length : iconclosec.length)}`;
      }
      while (tumbnailo.length < 4 || (tumbnailo.length + 4) < 5) {
         tumbnailo.push((3 >> (Math.min(Math.abs((inviteN ? 2 : 5)), 3))));
         break;
      }
      for (let v = 0; v < 3; v++) {
         tumbnailo = [2];
      }
      for (let u = 0; u < 3; u++) {
         live1.push((1 ^ (inviteN ? 4 : 3)));
      }
      while (tumbnailo.length >= 5) {
          let leftw: Map<any, any> = new Map([[String.fromCharCode(119,95,53,53,95,99,111,112,105,101,115,0),641], [String.fromCharCode(100,95,54,56,95,116,111,114,101,100,0),873]]);
          let sellmathbackgroundY = String.fromCharCode(117,95,52,95,114,101,112,115,116,114,0);
          let executorE = true;
         inviteN = (!adultK ? !iconscheduleq : adultK);
         leftw = new Map([[`${leftw.size}`, sellmathbackgroundY.length / (Math.max(1, leftw.size))]]);
         sellmathbackgroundY = `${((executorE ? 2 : 2))}`;
         executorE = !executorE && sellmathbackgroundY.length > 78;
         break;
      }
      while (2 == (live1.length >> (Math.min(4, tumbnailo.length))) && (live1.length >> (Math.min(Math.abs(2), 5))) == 1) {
         tumbnailo = [((adultK ? 1 : 2) + 3)];
         break;
      }
      while (!inviteN) {
          let cornershoot8 = 1.0;
          let iconbackwhite1 = String.fromCharCode(109,101,109,120,95,110,95,52,49,0);
          let arrowdown7 = 2.0;
          let middlesoundr = 4.0;
          let matchdetailbgi = String.fromCharCode(115,97,118,101,112,111,105,110,116,115,95,55,95,57,51,0);
         tumbnailo.push((matchdetailbgi == String.fromCharCode(114,0) ? (iconscheduleq ? 2 : 1) : matchdetailbgi.length));
         cornershoot8 += parseFloat(`${parseInt(`${arrowdown7}`)}`);
         iconbackwhite1 += `${iconbackwhite1.length}`;
         arrowdown7 += parseInt(`${arrowdown7}`) + parseInt(`${middlesoundr}`);
         middlesoundr += parseInt(`${cornershoot8}`) ^ parseInt(`${middlesoundr}`);
         break;
      }
      nalyticst = 30 <= backiconmaskA.length;
   }
       let bottomc: Array<any> = [168, 948, 340];
       let footballfieldd: Array<any> = [409, 131];
       let gemfilei = 3.0;
         gemfilei /= Math.max(parseInt(`${gemfilei}`), 1);
      if ((bottomc.length + 1) == 1) {
         footballfieldd.push(1 + footballfieldd.length);
      }
       let collectionr = String.fromCharCode(97,95,50,57,95,104,101,97,100,112,104,111,110,101,115,0);
       let teamO = String.fromCharCode(99,95,50,52,95,116,112,99,0);
      let leagueM = String.fromCharCode(113,102,97,107,54,122,52,0) == collectionr;
      do {
          let sharewhitek = 5.0;
          let footballfiledlayoutH: Array<any> = [String.fromCharCode(109,95,53,55,95,115,117,98,102,114,97,109,101,115,0), String.fromCharCode(97,105,110,116,105,110,103,95,52,95,55,57,0)];
         collectionr += "3";
         sharewhitek /= Math.max(4, footballfiledlayoutH.length * parseInt(`${sharewhitek}`));
         footballfiledlayoutH.push(parseInt(`${sharewhitek}`) * footballfiledlayoutH.length);
         if (leagueM) {
            break;
         }
      } while (((footballfieldd.length / (Math.max(1, 3))) < 1 || 1 < (footballfieldd.length / (Math.max(collectionr.length, 4)))) && leagueM);
      for (let f = 0; f < 3; f++) {
         collectionr += `${parseInt(`${gemfilei}`) * teamO.length}`;
      }
      while (footballfieldd.includes(gemfilei)) {
         gemfilei *= 1 - parseInt(`${gemfilei}`);
         break;
      }
      let penaltyA = teamO.length <= 6649007;
      do {
          let final_3F = 2;
          let sigmobS = String.fromCharCode(105,95,52,57,95,108,111,111,115,101,0);
         teamO += `${3 & bottomc.length}`;
         final_3F -= 2;
         sigmobS = "3";
         if (penaltyA) {
            break;
         }
      } while ((collectionr.startsWith(teamO)) && penaltyA);
      let elementsi = bottomc.length >= 6556981;
      do {
          let guider = String.fromCharCode(97,102,102,105,110,101,95,109,95,49,56,0);
          let twitterG = 3;
          let armvaG: Array<any> = [425, 847, 674];
         bottomc.push(footballfieldd.length ^ 2);
         guider += `${guider.length}`;
         twitterG /= Math.max(1, armvaG.length | 3);
         armvaG = [3];
         if (elementsi) {
            break;
         }
      } while (elementsi && (1 > (4 >> (Math.min(1, footballfieldd.length)))));
       let yellowanimationlivee = String.fromCharCode(102,95,56,54,95,116,101,109,112,108,97,116,101,115,0);
      backiconmaskA = `${3 * cnewinterstitialJ.size}`;
   let privacyW = 9612716 <= cnewinterstitialJ.size;
   do {
       let static_0ad = String.fromCharCode(97,108,119,97,121,115,95,109,95,54,51,0);
       let codegenM: Array<any> = [115, 411];
       let ksad3 = 4;
      for (let p = 0; p < 1; p++) {
          let iconsharefriends1 = false;
          let stationsR = false;
         codegenM = [static_0ad.length * 3];
         iconsharefriends1 = stationsR;
      }
         codegenM = [3];
      for (let u = 0; u < 1; u++) {
          let orangeclockY = true;
          let fulld: Array<any> = [String.fromCharCode(101,120,116,114,97,99,116,101,100,95,111,95,56,48,0), String.fromCharCode(122,109,113,115,104,101,108,108,95,103,95,51,57,0), String.fromCharCode(108,111,99,97,108,101,115,95,101,95,55,56,0)];
          let foundT = 0;
          let aboutL = false;
         static_0ad = `${ksad3 & 3}`;
         orangeclockY = (((aboutL ? fulld.length : 8) * fulld.length) <= 8);
         foundT &= foundT;
         aboutL = !aboutL || 65 > foundT;
      }
          let sentryh = false;
          let soundv = 4.0;
         ksad3 *= ksad3 - parseInt(`${soundv}`);
         sentryh = !sentryh;
         soundv /= Math.max(parseFloat(`${3}`), 1);
          let mbnativeadvancedU = String.fromCharCode(111,95,53,53,95,98,97,115,107,101,116,98,97,108,108,0);
          let release_csP = String.fromCharCode(102,105,110,100,95,100,95,50,0);
         codegenM = [mbnativeadvancedU.length];
         mbnativeadvancedU = "1";
         release_csP += `${release_csP.length << (Math.min(2, release_csP.length))}`;
          let bellreminder7: Array<any> = [2, 947, 677];
          let filled6 = true;
          let themep = true;
         codegenM.push(ksad3);
         bellreminder7.push((3 * (filled6 ? 2 : 1)));
         filled6 = !themep;
      let result8 = static_0ad == String.fromCharCode(106,120,109,106,112,48,51,0);
      do {
         static_0ad += `${codegenM.length}`;
         if (result8) {
            break;
         }
      } while (result8 && (static_0ad.length <= 1));
         static_0ad = `${codegenM.length}`;
      for (let r = 0; r < 3; r++) {
         codegenM.push(static_0ad.length & codegenM.length);
      }
      cnewinterstitialJ.set(`${loadingspinner2}`, (dialogO == String.fromCharCode(50,0) ? dialogO.length : parseInt(`${loadingspinner2}`)));
      if (privacyW) {
         break;
      }
   } while ((!nalyticst) && privacyW);
      cnewinterstitialJ = new Map([[`${nalyticst}`, 1 % (Math.max(parseInt(`${loadingspinner2}`), 1))]]);
      bodanW = "1";
   let reactnativeratingsx = 9823921 <= buttonn.length;
   do {
      buttonn = [resendl.length % 2];
      if (reactnativeratingsx) {
         break;
      }
   } while (reactnativeratingsx && ((buttonn.length & 1) >= 2 || (loadingspinner2 - buttonn.length) >= 4.54));
      cnewinterstitialJ.set(`${libzeus5}`, cnewinterstitialJ.size);
   for (let f = 0; f < 1; f++) {
      libzeus5 = `${libzeus5.length}`;
   }
      mutedb /= Math.max(4, (indexB == String.fromCharCode(104,0) ? (nalyticst ? 4 : 1) : indexB.length));
   while (bodanW.length <= 4) {
      dialogO += "2";
      break;
   }
      libzeus5 += `${(String.fromCharCode(66,0) == bodanW ? bodanW.length : (nalyticst ? 3 : 4))}`;
      bufferx.set(bodanW, parseInt(`${mutedb}`));
   while (backiconmaskA.length < indexB.length) {
      indexB += `${indexB.length}`;
      break;
   }
   while (indexB.length == 2) {
      indexB = "2";
      break;
   }
      backiconmaskA = `${cnewinterstitialJ.size}`;

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: wawaSellProfileinactive) => {
    const filtered = removeHistory.filter(x => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };
  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="电视台"
        headerStyle={{marginBottom: spacing.m}}
      />
      <ScrollView style={{marginBottom: spacing.xl}}>
        {liveStationItemList != undefined && liveStationItemList.length > 0 && (
          <View
            style={{
              ...styles.descriptionContainer,
              gap: spacing.m,
              alignItems: 'center',
            }}>
            <VodLiveStationListVertical
              itemList={liveStationItemList}
              itemsPerRow={2}
              numOfRows={100}
            />
          </View>
        )}
        {/* {
                    history && history.length === 0 &&
                    <EmptyList description='暂无播放历史' />
                } */}
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 1,
  },
});
