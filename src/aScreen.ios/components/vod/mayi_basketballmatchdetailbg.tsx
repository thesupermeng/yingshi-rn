

class AgreementEighteenStore {
    static const_8rIconviewergifConfirmat = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import React, { useCallback, useEffect, useMemo, memo, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import ScreenContainer from '../../components/container/mayi_save';
import { useNavigation, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/mayi_video_binddatas';
import {
  mayi_LibswresampleModal,
  mayi_EmptyGradle,
} from '@type/mayi_green';
import { playVod } from '@redux/actions/mayi_goallogo';
import { useAppDispatch } from '@hooks/mayi_redirect';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/mayi_predictiondefault_header';
import VodTopicFilter from '../../components/vod/mayi_slider_popup';
import VodCard from '../../components/vod/mayi_pressure_footballfiledlayout';
import DownArrow from '@static/images/basketballtrophyNotificationfillemptyKick.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../common/mayi_slider';
import { mayi_ReddownarrowItem } from '@type/mayi_green';

interface mayi_GoogleViews {
  itemList: Array<mayi_ReddownarrowItem>;
  itemsPerRow?: number;
  numOfRows?: number;
  selectedItem?: mayi_ReddownarrowItem;
}

export default function VodLiveStationListVertical({
  itemList,
  itemsPerRow = 2,
  numOfRows = 4,
  selectedItem,
}: mayi_GoogleViews) {
  const { textVariants, colors, spacing, icons } = useTheme();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  let items = itemList.slice(0, itemsPerRow * numOfRows);

  if (selectedItem) {
    items = items.filter(i => i.id !== selectedItem.id);
  }

  const renderItems = () => {
       let defaultlogoS = true;
    let success8 = String.fromCharCode(105,95,56,48,95,104,101,99,111,0);
    let china9 = 0.0;
    let suggestion5 = 4.0;
    let iconarrowrightH: Map<any, any> = new Map([[String.fromCharCode(105,95,49,50,95,99,111,99,103,0),786], [String.fromCharCode(104,95,54,54,95,108,97,121,101,114,0),504]]);
    let iconwatchnowQ = 5.0;
    let description_dyQ = true;
    let malaysiaq = String.fromCharCode(112,114,101,115,115,117,114,101,95,55,95,50,52,0);
    let libtobx = String.fromCharCode(97,95,53,52,95,115,99,99,111,110,102,105,103,0);
    let unselected6: Map<any, any> = new Map([[String.fromCharCode(117,95,51,49,95,118,116,114,107,0),false ], [String.fromCharCode(104,95,57,56,95,111,98,118,105,111,117,115,108,121,0),true ]]);
    let agreementX = String.fromCharCode(101,95,52,52,95,97,108,101,114,116,0);
    let reactnativeratingsD = 5.0;
    let valuesh: Map<any, any> = new Map([[String.fromCharCode(114,95,53,51,95,121,117,108,101,0),259], [String.fromCharCode(118,95,53,54,95,113,112,105,115,0),363]]);
   let shrinkl = 6654577.0 <= iconwatchnowQ;
   do {
       let profileactivej = String.fromCharCode(117,95,50,56,0);
         profileactivej += `${profileactivej.length}`;
      while (profileactivej.length < 4) {
          let ajaxQ = true;
         profileactivej += `${profileactivej.length}`;
         break;
      }
         profileactivej += `${3 ^ profileactivej.length}`;
      iconwatchnowQ /= Math.max(3, 3);
      if (shrinkl) {
         break;
      }
   } while (shrinkl && (4.1 < (5 / (Math.max(4, suggestion5)))));
   while (!description_dyQ) {
       let pangleZ: Map<any, any> = new Map([[String.fromCharCode(98,108,101,101,100,95,98,95,57,56,0),String.fromCharCode(118,112,100,101,99,95,120,95,50,52,0)], [String.fromCharCode(114,111,117,110,100,100,115,95,57,95,50,48,0),String.fromCharCode(99,95,57,57,95,112,114,111,118,105,100,101,115,0)], [String.fromCharCode(98,95,50,54,95,105,110,115,101,116,0),String.fromCharCode(100,95,54,48,95,116,116,97,100,97,116,97,0)]]);
       let renewS: Array<any> = [192, 560, 259];
       let editm: Map<any, any> = new Map([[String.fromCharCode(99,97,112,105,95,99,95,52,53,0),784], [String.fromCharCode(115,105,110,101,115,95,48,95,55,55,0),95]]);
       let football_ = 5;
         editm = new Map([[`${pangleZ.size}`, 2 << (Math.min(2, renewS.length))]]);
      for (let s = 0; s < 3; s++) {
         renewS = [editm.size];
      }
      for (let y = 0; y < 3; y++) {
          let membershipl = 4.0;
          let redirectP = 4.0;
         renewS = [parseInt(`${membershipl}`) >> (Math.min(1, Math.abs(parseInt(`${redirectP}`))))];
      }
       let eventx = 5;
         eventx &= 1;
      if (football_ > editm.size) {
         editm = new Map([[`${eventx}`, football_]]);
      }
       let libreactnativeblobA: Array<any> = [894, 264, 763];
      for (let r = 0; r < 3; r++) {
          let robotoL = 1.0;
          let largeb = String.fromCharCode(122,95,54,56,95,102,111,111,116,98,97,108,108,0);
         eventx -= (String.fromCharCode(83,0) == largeb ? largeb.length : renewS.length);
         robotoL -= parseFloat(`${parseInt(`${robotoL}`)}`);
      }
          let iconscheduleq = 2.0;
         pangleZ.set(`${libreactnativeblobA.length}`, libreactnativeblobA.length);
         iconscheduleq /= Math.max(1, 2 >> (Math.min(Math.abs(parseInt(`${iconscheduleq}`)), 1)));
         renewS = [editm.size / (Math.max(2, 3))];
         editm = new Map([[`${libreactnativeblobA.length}`, football_ << (Math.min(4, Math.abs(3)))]]);
      if ((editm.size - 4) > 1) {
         editm = new Map([[`${editm.size}`, editm.size - 2]]);
      }
      malaysiaq += "3";
      break;
   }

    const rows = [];

   let becomeF = 6413227 <= libtobx.length;
   do {
       let iconpipexpandC: Map<any, any> = new Map([[String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,110,95,53,56,0),874], [String.fromCharCode(99,97,115,116,115,95,118,95,50,57,0),484]]);
       let imagemanagerb = String.fromCharCode(110,95,53,52,95,101,120,112,111,110,101,110,116,115,0);
       let nendp: Array<any> = [831, 61, 469];
       let crossu: Map<any, any> = new Map([[String.fromCharCode(109,95,49,50,95,105,100,120,0),95], [String.fromCharCode(107,95,51,50,95,100,105,115,109,105,115,115,0),989], [String.fromCharCode(122,95,53,55,95,117,110,98,108,111,99,107,0),713]]);
       let iconI: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,111,116,97,116,105,111,110,95,115,95,57,55,0),true ], [String.fromCharCode(116,98,108,104,100,114,95,103,95,55,55,0),true ]]);
      let thumbnailb = nendp.length >= 5583878;
      do {
         nendp.push(iconI.size);
         if (thumbnailb) {
            break;
         }
      } while (thumbnailb && (3 >= (1 ^ nendp.length)));
          let productA = String.fromCharCode(118,95,51,54,95,97,115,115,101,114,116,0);
         nendp = [iconI.size ^ iconpipexpandC.size];
         productA = `${1 << (Math.min(3, productA.length))}`;
      for (let j = 0; j < 3; j++) {
          let libjsiB: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,95,57,95,57,56,0),30], [String.fromCharCode(102,95,54,56,95,109,105,103,114,97,116,105,111,110,0),411]]);
          let graphO = 3.0;
          let goallogoc = true;
         crossu = new Map([[`${nendp.length}`, imagemanagerb.length / (Math.max(6, nendp.length))]]);
         libjsiB = new Map([[`${goallogoc}`, 2 >> (Math.min(Math.abs(parseInt(`${graphO}`)), 1))]]);
         graphO *= parseFloat(`${libjsiB.size}`);
         goallogoc = libjsiB.get(`${goallogoc}`) != null;
      }
         iconI = new Map([[`${crossu.size}`, (String.fromCharCode(57,0) == imagemanagerb ? imagemanagerb.length : crossu.size)]]);
         imagemanagerb += `${iconI.size}`;
         iconpipexpandC.set(imagemanagerb, 3);
         crossu.set(`${imagemanagerb}`, iconpipexpandC.size);
          let twitteri: Array<any> = [388, 444];
          let themeP = true;
          let info2 = true;
         iconpipexpandC = new Map([[`${crossu.size}`, crossu.size]]);
         twitteri.push(((themeP ? 2 : 1) & twitteri.length));
         themeP = twitteri.includes(themeP);
         info2 = !themeP || twitteri.length > 6;
      libtobx += `${nendp.length / (Math.max(3, 10))}`;
      if (becomeF) {
         break;
      }
   } while (becomeF && ((libtobx.length ^ 1) < 5 && 1 < (parseInt(`${suggestion5}`) + libtobx.length)));
   let malaysiaP = description_dyQ ? !description_dyQ : description_dyQ;
   do {
       let hometeamfieldM = 2.0;
       let s_title4: Map<any, any> = new Map([[String.fromCharCode(116,95,55,52,95,102,105,108,101,102,117,110,99,0),242], [String.fromCharCode(119,95,57,54,95,115,117,105,116,101,115,0),55]]);
       let flipperc = String.fromCharCode(99,97,116,99,104,95,54,95,57,0);
       let defaultprofilepicJ = String.fromCharCode(97,97,99,115,98,114,100,97,116,97,95,98,95,52,52,0);
       let predictionbuttonC = String.fromCharCode(101,121,98,111,97,114,100,95,113,95,51,50,0);
       let rncored = 2.0;
         rncored /= Math.max(4, parseFloat(`${flipperc.length % (Math.max(2, 7))}`));
         flipperc += `${s_title4.size - flipperc.length}`;
      while ((s_title4.size % 5) <= 5 && (5 / (Math.max(4, s_title4.size))) <= 4) {
          let libyogas = String.fromCharCode(120,95,54,49,95,114,101,110,100,101,114,105,110,103,0);
          let scrollviewS = String.fromCharCode(118,95,51,52,95,98,105,116,108,105,110,101,99,104,117,110,107,121,0);
         s_title4 = new Map([[`${hometeamfieldM}`, parseInt(`${hometeamfieldM}`) ^ scrollviewS.length]]);
         libyogas = "2";
         scrollviewS += `${libyogas.length}`;
         break;
      }
      let libhermesJ = 4924091 <= s_title4.size;
      do {
         s_title4 = new Map([[`${s_title4.size}`, defaultprofilepicJ.length << (Math.min(Math.abs(1), 1))]]);
         if (libhermesJ) {
            break;
         }
      } while (libhermesJ && (!predictionbuttonC.includes(`${s_title4.size}`)));
      while ((parseInt(`${hometeamfieldM}`) - predictionbuttonC.length) >= 1 && 5 >= (1 - predictionbuttonC.length)) {
          let viewerh = String.fromCharCode(99,121,99,108,101,100,95,97,95,55,48,0);
          let zhengpianj = 0;
          let classesp = String.fromCharCode(112,95,55,51,0);
         predictionbuttonC += `${flipperc.length}`;
         viewerh += `${viewerh.length ^ zhengpianj}`;
         zhengpianj /= Math.max(zhengpianj - classesp.length, 2);
         classesp += `${(String.fromCharCode(75,0) == classesp ? classesp.length : viewerh.length)}`;
         break;
      }
      let sigmobl = String.fromCharCode(99,121,100,50,102,98,0) == defaultprofilepicJ;
      do {
          let profileactivek = String.fromCharCode(99,97,116,101,103,111,114,105,122,101,95,119,95,54,50,0);
          let feedbackJ = 2;
          let giftbuttonj = String.fromCharCode(115,104,105,109,109,101,114,105,110,103,95,121,95,50,53,0);
          let cancelD = String.fromCharCode(109,112,101,103,118,108,99,95,57,95,51,55,0);
         defaultprofilepicJ += `${profileactivek.length}`;
         profileactivek += `${1 >> (Math.min(5, giftbuttonj.length))}`;
         feedbackJ ^= feedbackJ % (Math.max(cancelD.length, 9));
         giftbuttonj = `${(cancelD == String.fromCharCode(83,0) ? feedbackJ : cancelD.length)}`;
         if (sigmobl) {
            break;
         }
      } while ((predictionbuttonC == defaultprofilepicJ) && sigmobl);
         flipperc = `${parseInt(`${rncored}`)}`;
      description_dyQ = flipperc == String.fromCharCode(57,0);
      if (malaysiaP) {
         break;
      }
   } while ((1.70 < (china9 - 1.48)) && malaysiaP);
    for (let i = 0; i < items.length; i += itemsPerRow) {

   if (!defaultlogoS || !description_dyQ) {
      description_dyQ = success8.length >= 95;
   }
   let searchbar8 = 8061369 >= iconarrowrightH.size;
   do {
       let networkY = String.fromCharCode(97,112,112,115,102,108,121,101,114,95,99,95,55,51,0);
       let albumv = 3.0;
       let emptys: Map<any, any> = new Map([[String.fromCharCode(117,98,115,99,114,105,98,101,114,95,99,95,56,54,0),2], [String.fromCharCode(119,95,49,55,95,105,110,115,101,114,116,115,0),770], [String.fromCharCode(115,117,98,114,101,115,117,108,116,95,56,95,57,55,0),179]]);
       let penaltyshootnogoalR = String.fromCharCode(110,95,54,54,95,116,102,114,97,0);
         albumv *= parseFloat(`${penaltyshootnogoalR.length & emptys.size}`);
      while ((1 + emptys.size) >= 4 && 1 >= (parseInt(`${albumv}`) / (Math.max(emptys.size, 2)))) {
         emptys = new Map([[`${emptys.size}`, (penaltyshootnogoalR == String.fromCharCode(86,0) ? emptys.size : penaltyshootnogoalR.length)]]);
         break;
      }
      while (networkY.includes(penaltyshootnogoalR)) {
          let smallorangemanM = 2.0;
         penaltyshootnogoalR += "1";
         smallorangemanM *= 1 / (Math.max(9, parseInt(`${smallorangemanM}`)));
         break;
      }
          let bingY = String.fromCharCode(109,105,100,110,105,103,104,116,95,112,95,50,48,0);
          let annere = String.fromCharCode(100,105,108,97,116,101,95,57,95,56,53,0);
          let flyera = true;
         emptys.set(`${flyera}`, 3);
         bingY = `${2 * annere.length}`;
         annere = `${(annere == String.fromCharCode(112,0) ? bingY.length : annere.length)}`;
         albumv += parseFloat(`${penaltyshootnogoalR.length}`);
      while (emptys.size >= penaltyshootnogoalR.length) {
          let subtextG: Array<any> = [600, 673];
          let resultn = String.fromCharCode(105,95,51,54,95,112,105,120,98,108,111,99,107,100,115,112,0);
          let servicel = String.fromCharCode(105,110,116,101,110,116,95,108,95,55,52,0);
         emptys = new Map([[`${emptys.size}`, 3]]);
         subtextG.push(resultn.length % (Math.max(1, 8)));
         resultn += `${3 & servicel.length}`;
         servicel += `${2 ^ resultn.length}`;
         break;
      }
         penaltyshootnogoalR = `${(String.fromCharCode(74,0) == networkY ? networkY.length : emptys.size)}`;
         albumv -= (parseFloat(`${String.fromCharCode(76,0) == networkY ? networkY.length : parseInt(`${albumv}`)}`));
         albumv *= parseFloat(`${1}`);
      while ((emptys.size << (Math.min(penaltyshootnogoalR.length, 2))) < 2 || 4 < (2 << (Math.min(1, Math.abs(emptys.size))))) {
          let homeactivel = String.fromCharCode(103,111,101,114,108,105,95,117,95,55,55,0);
          let confirmation2 = 1.0;
          let basketballmatchdetailbgp = 4;
          let icontransferclubN = String.fromCharCode(100,101,97,100,108,105,110,101,95,105,95,52,53,0);
          let modalp = String.fromCharCode(98,95,49,53,95,115,117,98,116,105,116,108,101,0);
         penaltyshootnogoalR += `${emptys.size}`;
         homeactivel = `${parseInt(`${confirmation2}`)}`;
         confirmation2 -= parseFloat(`${homeactivel.length}`);
         basketballmatchdetailbgp |= 1;
         icontransferclubN += "1";
         modalp = `${icontransferclubN.length * 1}`;
         break;
      }
      if (networkY.length < 4) {
          let subinm = 1.0;
          let settingsG = String.fromCharCode(111,117,116,108,105,101,114,95,114,95,52,57,0);
          let yellowcirclebgt = 5.0;
          let iconfeedbackl = String.fromCharCode(98,115,119,97,112,100,115,112,95,114,95,49,48,0);
         penaltyshootnogoalR = `${(String.fromCharCode(75,0) == settingsG ? penaltyshootnogoalR.length : settingsG.length)}`;
         subinm += parseFloat(`${iconfeedbackl.length}`);
         yellowcirclebgt -= parseFloat(`${parseInt(`${yellowcirclebgt}`)}`);
         iconfeedbackl = `${2 * parseInt(`${yellowcirclebgt}`)}`;
      }
      let tempnodatagifh = penaltyshootnogoalR.length <= 8076262;
      do {
          let greyE = String.fromCharCode(110,95,57,51,95,103,114,101,101,110,0);
          let relatedo = false;
         penaltyshootnogoalR += `${(penaltyshootnogoalR == String.fromCharCode(74,0) ? penaltyshootnogoalR.length : parseInt(`${albumv}`))}`;
         greyE += `${greyE.length << (Math.min(Math.abs(3), 1))}`;
         relatedo = relatedo && greyE.length > 37;
         if (tempnodatagifh) {
            break;
         }
      } while ((2 == penaltyshootnogoalR.length) && tempnodatagifh);
      iconarrowrightH.set(`${defaultlogoS}`, success8.length + 3);
      if (searchbar8) {
         break;
      }
   } while (searchbar8 && (defaultlogoS));
      const rowItems = items.slice(i, i + itemsPerRow);

   while (4.34 == (4.0 / (Math.max(5, iconwatchnowQ)))) {
      iconwatchnowQ += ((description_dyQ ? 5 : 3) % (Math.max(parseInt(`${suggestion5}`), 9)));
      break;
   }
       let debug8 = String.fromCharCode(116,95,51,51,95,120,119,109,97,0);
       let serviceM = 3.0;
      for (let n = 0; n < 1; n++) {
         debug8 = `${parseInt(`${serviceM}`)}`;
      }
      if ((serviceM + 3.79) == 3.40 || (parseFloat(`${debug8.length}`) + serviceM) == 3.79) {
         debug8 += `${2 >> (Math.min(3, debug8.length))}`;
      }
       let policyT = 1;
      if (!debug8.includes(`${serviceM}`)) {
          let componentregistry_ = String.fromCharCode(113,95,51,48,95,112,105,99,107,108,112,102,0);
          let castinge = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,95,104,95,51,0);
          let libcxxcomponentsX: Map<any, any> = new Map([[String.fromCharCode(109,95,55,95,114,101,97,99,104,97,98,105,108,105,116,121,0),String.fromCharCode(101,120,104,97,117,115,116,101,100,95,52,95,55,54,0)], [String.fromCharCode(107,95,51,95,97,103,103,114,101,103,97,116,111,114,0),String.fromCharCode(115,95,54,55,95,114,101,116,114,121,0)]]);
         debug8 = `${(componentregistry_ == String.fromCharCode(73,0) ? policyT : componentregistry_.length)}`;
         castinge += `${(String.fromCharCode(50,0) == castinge ? libcxxcomponentsX.size : castinge.length)}`;
         libcxxcomponentsX.set(castinge, (String.fromCharCode(122,0) == castinge ? libcxxcomponentsX.size : castinge.length));
      }
         policyT -= debug8.length;
      let rewindQ = debug8.length >= 6705643;
      do {
         debug8 = "1";
         if (rewindQ) {
            break;
         }
      } while (rewindQ && (2 > (parseInt(`${serviceM}`) + debug8.length) || (4.43 + serviceM) > 5.4));
      suggestion5 *= parseFloat(`${parseInt(`${suggestion5}`) >> (Math.min(5, Math.abs(2)))}`);
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity activeOpacity={0.85}
              key={item.id}
              style={styles.cardItem}
              onPress={() => {

   for (let h = 0; h < 1; h++) {
      malaysiaq += `${(3 ^ (defaultlogoS ? 4 : 4))}`;
   }
      suggestion5 += parseFloat(`${3}`);
                setIsLoading(true);

       let slider9 = 1.0;
          let dropdownE: Array<any> = [String.fromCharCode(105,110,116,114,97,120,109,98,121,95,56,95,57,52,0), String.fromCharCode(103,101,116,112,116,114,95,104,95,51,52,0), String.fromCharCode(111,95,49,55,95,101,102,102,101,99,116,105,118,101,108,121,0)];
         slider9 += parseInt(`${slider9}`) - dropdownE.length;
          let firebaseR = String.fromCharCode(102,95,56,53,95,117,115,105,110,103,0);
         slider9 -= 2;
         firebaseR = `${firebaseR.length % (Math.max(2, 10))}`;
         slider9 *= 2 ^ parseInt(`${slider9}`);
      description_dyQ = 71 < iconarrowrightH.size;
       let tickR = 0.0;
       let termsj = false;
       let taiwani = 2.0;
       let awayteamfieldi = 0.0;
         tickR += parseFloat(`${parseInt(`${taiwani}`) >> (Math.min(3, Math.abs(2)))}`);
         taiwani -= (parseInt(`${taiwani}`) ^ (termsj ? 1 : 2));
         awayteamfieldi -= ((termsj ? 5 : 2) - parseInt(`${tickR}`));
      for (let i = 0; i < 1; i++) {
          let subbasketballplayerj = 4.0;
          let checkboxp = 5.0;
         taiwani -= 1;
         subbasketballplayerj *= parseFloat(`${parseInt(`${checkboxp}`) ^ 2}`);
         checkboxp /= Math.max(4, parseFloat(`${parseInt(`${subbasketballplayerj}`)}`));
      }
         termsj = 81.41 > awayteamfieldi;
      libtobx += "3";
                setTimeout(() => setIsLoading(false), 750);

       let libsentryc = String.fromCharCode(105,110,115,101,114,116,101,114,95,102,95,55,52,0);
      while (libsentryc == libsentryc) {
          let pangler = 1.0;
         libsentryc = `${3 | libsentryc.length}`;
         pangler *= parseFloat(`${parseInt(`${pangler}`) * 2}`);
         break;
      }
       let resendn: Map<any, any> = new Map([[String.fromCharCode(108,95,55,52,95,115,97,118,101,0),false ], [String.fromCharCode(110,95,49,56,95,115,99,114,101,101,110,115,104,97,114,101,0),false ], [String.fromCharCode(116,114,97,110,115,99,101,105,118,101,114,95,122,95,52,50,0),false ]]);
      if (5 >= (libsentryc.length >> (Math.min(4, Math.abs(resendn.size))))) {
         resendn = new Map([[`${resendn.size}`, 1]]);
      }
      china9 /= Math.max((parseFloat(`${malaysiaq == String.fromCharCode(70,0) ? malaysiaq.length : libtobx.length}`)), 4);
   if (libtobx.endsWith(`${china9}`)) {
      libtobx += `${libtobx.length}`;
   }

                navigation.navigate('电视台播放', {
                  liveStationItemList: itemList,
                  liveStationItem: item,
                });
              }}>
              <FastImage
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: item.live_station_img_url.charAt(0) == '/' ? AgreementEighteenStore.const_8rIconviewergifConfirmat([24,4,4,0,3,74,95,95,8,25,17,30,23,27,17,30,4,6,94,30,21,4,112],0x70,false) + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );

   if (!malaysiaq.includes(`${iconarrowrightH.size}`)) {
       let videobufferloadingu = String.fromCharCode(107,95,49,54,95,112,101,114,102,111,114,109,101,100,0);
       let redirect1 = 3.0;
       let iconclosewhitebgD = 5.0;
       let anythinkW = 4;
       let long_a_p = String.fromCharCode(109,117,114,109,117,114,95,54,95,49,48,48,0);
      let scorepopsoundO = String.fromCharCode(114,51,120,122,51,0) == long_a_p;
      do {
          let langkeyn = String.fromCharCode(108,95,49,54,95,112,114,101,118,101,110,116,101,100,0);
          let viewerS = 4.0;
          let privilegeH = 3.0;
          let tempnodatagifu: Array<any> = [423, 17];
          let bgvipsportw = String.fromCharCode(101,120,112,108,105,99,105,116,101,108,121,95,108,95,55,51,0);
         long_a_p += `${2 >> (Math.min(1, videobufferloadingu.length))}`;
         langkeyn += `${tempnodatagifu.length}`;
         viewerS /= Math.max(1, parseFloat(`${2}`));
         privilegeH /= Math.max(parseInt(`${viewerS}`), 1);
         tempnodatagifu = [parseInt(`${viewerS}`)];
         bgvipsportw = `${langkeyn.length % (Math.max(7, bgvipsportw.length))}`;
         if (scorepopsoundO) {
            break;
         }
      } while (((3 % (Math.max(3, long_a_p.length))) >= 2 || (long_a_p.length + iconclosewhitebgD) >= 1.18) && scorepopsoundO);
          let gradlewx = String.fromCharCode(115,95,51,48,95,114,101,100,105,114,101,99,116,105,111,110,0);
          let penaltyshoott = false;
         anythinkW /= Math.max(gradlewx.length / 3, 4);
         gradlewx = "2";
         iconclosewhitebgD -= long_a_p.length;
         iconclosewhitebgD *= anythinkW - 3;
       let stringS = String.fromCharCode(122,95,53,56,95,118,97,114,105,97,110,99,101,120,104,0);
      while ((iconclosewhitebgD * anythinkW) > 1.94) {
         anythinkW |= 2;
         break;
      }
         redirect1 -= (parseFloat(`${String.fromCharCode(72,0) == long_a_p ? parseInt(`${redirect1}`) : long_a_p.length}`));
         long_a_p = `${videobufferloadingu.length >> (Math.min(Math.abs(3), 3))}`;
         anythinkW <<= Math.min(Math.abs(1), 1);
      while (2 >= long_a_p.length) {
          let down1 = 5.0;
          let mbsplashF = 3;
         long_a_p += `${mbsplashF << (Math.min(4, Math.abs(anythinkW)))}`;
         down1 += parseFloat(`${1}`);
         mbsplashF /= Math.max(3, parseInt(`${down1}`) * 3);
         break;
      }
      for (let p = 0; p < 3; p++) {
          let arrowj = 3.0;
          let countdownU = String.fromCharCode(97,116,111,109,115,95,97,95,50,49,0);
         iconclosewhitebgD += parseInt(`${iconclosewhitebgD}`);
         arrowj += parseFloat(`${parseInt(`${arrowj}`)}`);
         countdownU += `${countdownU.length >> (Math.min(Math.abs(3), 2))}`;
      }
      let whitevideolivet = 5779280 <= videobufferloadingu.length;
      do {
          let sellmathbackgroundU = String.fromCharCode(115,105,108,101,110,99,101,95,48,95,54,51,0);
          let iconarrowrightorangea = String.fromCharCode(104,95,54,51,95,99,111,110,115,101,110,116,0);
          let stationP: Array<any> = [922, 378, 2];
          let containerw = true;
         videobufferloadingu += `${anythinkW}`;
         sellmathbackgroundU += `${stationP.length}`;
         iconarrowrightorangea += `${(1 + (containerw ? 5 : 4))}`;
         stationP.push((sellmathbackgroundU == String.fromCharCode(80,0) ? sellmathbackgroundU.length : iconarrowrightorangea.length));
         containerw = stationP.length > 76;
         if (whitevideolivet) {
            break;
         }
      } while (whitevideolivet && (1 < (anythinkW + videobufferloadingu.length) || 3 < (1 + anythinkW)));
      while (stringS.length < 5) {
         iconclosewhitebgD *= anythinkW;
         break;
      }
         iconclosewhitebgD /= Math.max(3, parseInt(`${redirect1}`));
         iconclosewhitebgD -= stringS.length;
      iconarrowrightH.set(`${unselected6.size}`, iconarrowrightH.size);
   }
   for (let p = 0; p < 3; p++) {
      agreementX = `${agreementX.length}`;
   }
      rows.push(row);
    }
    return rows;
  };
  return (
    <>
      {!isLoading && (
        <>
          <View style={styles.container}>{renderItems()}</View>
          <View style={{ ...styles.loading }}>
            <Text
              style={{
                ...textVariants.subBody,
                color: colors.muted,
                marginBottom: 20,
              }}>
              已经到底了
            </Text>
          </View>
        </>
      )}

      {isLoading && (
        <View style={{ ...styles.loading, paddingTop: 20 }}>
          <FastImage
            style={{ height: 80, width: 80 }}
            source={require('@static/images/robotoNetwork.gif')}
            resizeMode={"contain"}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 10, 
  },
  cardItem: {
    width: '48%', 
    aspectRatio: 130 / 80,
    borderRadius: 10,
    overflow: 'hidden', 
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
