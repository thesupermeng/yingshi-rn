import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import ScreenContainer from '../../components/container/tt_backward';
import { RootStackScreenProps } from '@type/tt_temperature';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/tt_spec_download';
import { ttOrange } from '@redux/tt_updates_bottom';

import TitleWithBackButtonHeader from '../../components/header/tt_typing_tail_header';
import { ttExpired, ttStreaming } from '@redux/reducers/tt_configure_injury';
import { removeVodsFromHistory, playVod } from '@redux/actions/tt_activity';
import VodHistoryCard from '../../components/vod/tt_country';
import CheckBoxSelected from '@static/images/historyPlayerFloater.svg';
import CheckBoxUnselected from '@static/images/foundWindRecommendation.svg';
import { ttCenter, ttDown, ttAppsOther } from '@type/tt_line_borderless';
import { Button } from '@rneui/themed';
import ConfirmationModal from '../../components/modal/tt_styles';
import VodLiveStationListVertical from '../../components/vod/tt_flipper';
import EmptyList from '../../components/common/tt_logo_desc';
import { ScrollView } from 'react-native-gesture-handler';
import FastImage from '../../components/common/tt_connection';
import { API_DOMAIN_TEST } from '@utility/tt_trophy_cross';
import { enableAdultMode } from '@redux/actions/tt_copy_heji';
import { ttConfirmationChinasame } from '@api';

type ttUpgrade = {
  data: {
    List: Array<ttDown>;
    TotalPageCount: number;
  };
};



export default ({ navigation, route }: RootStackScreenProps<'午夜场剧情'>) => {
  const [adultVodData, setAdultVodData] = useState<ttDown[]>([]);
  const { colors, textVariants, spacing, icons } = useTheme();
  const [page, setPage] = useState(1);
  const totalPageCount = useRef<number>(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useAppDispatch()

  const fetchVod = async (page: number) => {
    return await ttConfirmationChinasame.getList({
      page: page,
      limit: 10,
      category: route.params.class,
      vod_source_name: route.params.vod_source_name,
      xMode: true,
    })
  };

  const fetchNextPage = async () => {
       let sound1: Map<any, any> = new Map([[String.fromCharCode(99,95,52,51,95,101,120,99,101,101,100,115,0),258], [String.fromCharCode(122,111,110,101,95,109,95,49,48,48,0),102]]);
    let ewardedV = String.fromCharCode(110,95,52,52,95,114,101,115,112,111,110,100,0);
    let sentry1 = String.fromCharCode(99,95,52,55,95,105,110,100,101,112,101,110,100,101,110,99,101,0);
    let typesN: Array<any> = [531, 860];
    let inviteL = 4.0;
    let bodani: Array<any> = [String.fromCharCode(98,114,111,97,100,99,97,115,116,95,57,95,56,51,0), String.fromCharCode(112,114,111,102,114,101,115,115,95,101,95,52,51,0), String.fromCharCode(100,105,109,105,110,115,105,111,110,115,95,113,95,49,49,0)];
    let vietnamy = String.fromCharCode(106,95,53,95,102,112,117,116,115,0);
    let sans5 = true;
    let matchM: Map<any, any> = new Map([[String.fromCharCode(97,95,51,50,95,115,101,110,115,105,116,105,118,105,116,121,0),String.fromCharCode(100,95,52,55,0)], [String.fromCharCode(104,95,52,53,95,100,101,99,98,110,0),String.fromCharCode(107,95,55,48,95,115,116,114,112,116,105,109,101,0)], [String.fromCharCode(104,105,101,114,97,114,99,104,121,95,111,95,49,52,0),String.fromCharCode(102,97,115,116,101,115,116,95,111,95,57,50,0)]]);
    let halft: Map<any, any> = new Map([[String.fromCharCode(100,117,112,115,95,56,95,55,55,0),724], [String.fromCharCode(115,116,97,108,101,95,56,95,52,48,0),604], [String.fromCharCode(98,108,111,99,107,101,100,95,99,95,54,53,0),775]]);
    let temperatureA = true;
    let subsF = String.fromCharCode(118,95,52,51,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0);
   let whatsappr = vietnamy.length <= 7187949;
   do {
       let darkp = 5.0;
       let holderA = 4.0;
      let whistleo = 9759702.0 <= holderA;
      do {
         holderA /= Math.max(parseInt(`${darkp}`), 3);
         if (whistleo) {
            break;
         }
      } while (whistleo && ((3.9 + holderA) >= 4.21));
      let loading0 = 5096947.0 >= holderA;
      do {
          let pinge = 0.0;
         holderA -= 3 & parseInt(`${darkp}`);
         pinge *= parseFloat(`${parseInt(`${pinge}`) + 1}`);
         if (loading0) {
            break;
         }
      } while (loading0 && (darkp <= holderA));
       let redirecty = 0;
       let sound8 = 1;
      let dataz = 9594881 <= sound8;
      do {
         sound8 += 1 << (Math.min(Math.abs(redirecty), 1));
         if (dataz) {
            break;
         }
      } while (dataz && ((2 & sound8) <= 3));
      while (redirecty <= sound8) {
         redirecty -= sound8;
         break;
      }
         redirecty |= parseInt(`${darkp}`) * parseInt(`${holderA}`);
      vietnamy = `${bodani.length << (Math.min(Math.abs(3), 3))}`;
      if (whatsappr) {
         break;
      }
   } while (whatsappr && ((vietnamy.length & 4) == 2 || (bodani.length & 4) == 5));
   let ewardedi = sans5 ? !sans5 : sans5;
   do {
       let loadingR = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,49,95,49,56,0);
         loadingR += `${loadingR.length - loadingR.length}`;
         loadingR += `${loadingR.length + loadingR.length}`;
      let thumbnailN = loadingR.length >= 8735817;
      do {
         loadingR = `${loadingR.length}`;
         if (thumbnailN) {
            break;
         }
      } while (thumbnailN && (loadingR == loadingR));
      sans5 = typesN.length >= 13;
      if (ewardedi) {
         break;
      }
   } while ((!sentry1.startsWith(`${sans5}`)) && ewardedi);
      sentry1 += `${parseInt(`${inviteL}`) >> (Math.min(4, Math.abs(3)))}`;

    if (isFetching) return;

   let vnewsi = 8272539 <= bodani.length;
   do {
      bodani.push(((sans5 ? 2 : 4)));
      if (vnewsi) {
         break;
      }
   } while ((bodani.length < 4) && vnewsi);
       let awayT = 2;
       let benefit0 = String.fromCharCode(103,101,116,104,100,114,95,111,95,50,50,0);
      for (let r = 0; r < 1; r++) {
         benefit0 = `${1 - benefit0.length}`;
      }
      let submitb = benefit0.length >= 6560608;
      do {
         benefit0 = `${benefit0.length}`;
         if (submitb) {
            break;
         }
      } while ((4 > benefit0.length) && submitb);
         benefit0 = `${benefit0.length | awayT}`;
       let filedE = String.fromCharCode(122,95,51,49,95,114,101,97,100,105,110,103,0);
      while (filedE == benefit0) {
         benefit0 += `${3 - benefit0.length}`;
         break;
      }
         awayT ^= benefit0.length * filedE.length;
      vietnamy += `${(benefit0 == String.fromCharCode(79,0) ? parseInt(`${inviteL}`) : benefit0.length)}`;
   for (let f = 0; f < 3; f++) {
       let list_ = String.fromCharCode(109,95,51,50,95,104,97,109,98,117,114,103,101,114,0);
       let stringsr = String.fromCharCode(113,117,111,116,105,101,110,116,95,51,95,56,0);
       let typingx = 0.0;
      if (list_ == stringsr) {
          let store2 = String.fromCharCode(109,97,110,97,103,101,100,95,107,95,49,51,0);
         stringsr = `${store2.length ^ 2}`;
      }
      for (let t = 0; t < 2; t++) {
          let description_cf: Array<any> = [String.fromCharCode(99,95,54,51,95,114,101,99,105,112,105,101,110,116,0), String.fromCharCode(115,105,103,110,95,107,95,53,0), String.fromCharCode(99,95,51,53,95,114,101,108,97,121,101,100,0)];
          let progressP: Map<any, any> = new Map([[String.fromCharCode(114,111,119,115,107,105,112,95,106,95,50,50,0),true ], [String.fromCharCode(98,121,116,101,108,101,110,95,110,95,55,51,0),false ]]);
         list_ += `${1 - parseInt(`${typingx}`)}`;
         description_cf = [description_cf.length * 2];
         progressP.set(`${description_cf.length}`, progressP.size);
      }
          let completeC = String.fromCharCode(112,95,55,56,0);
          let mutedg = 1.0;
          let moonr = String.fromCharCode(115,116,114,114,101,115,101,116,95,119,95,55,0);
         typingx /= Math.max(parseFloat(`${stringsr.length}`), 3);
         completeC += `${(completeC == String.fromCharCode(55,0) ? completeC.length : parseInt(`${mutedg}`))}`;
         mutedg /= Math.max(1, parseFloat(`${completeC.length}`));
         moonr += `${parseInt(`${mutedg}`) ^ completeC.length}`;
      while (!stringsr.startsWith(list_)) {
          let selectionI: Array<any> = [108, 856, 10];
          let modeu = String.fromCharCode(115,116,114,105,100,105,110,103,95,101,95,56,51,0);
          let downloadingz: Map<any, any> = new Map([[String.fromCharCode(115,95,57,49,95,114,105,110,103,116,111,110,101,0),String.fromCharCode(98,95,57,48,95,112,117,110,99,104,0)], [String.fromCharCode(107,105,110,103,95,121,95,52,49,0),String.fromCharCode(119,95,54,50,95,99,108,101,97,114,97,108,108,0)], [String.fromCharCode(115,105,109,112,108,101,115,105,103,110,97,108,95,108,95,52,48,0),String.fromCharCode(103,95,55,55,95,103,101,111,109,101,116,114,121,0)]]);
          let policy9 = 4.0;
          let langx = 4.0;
         stringsr += `${modeu.length % (Math.max(2, 4))}`;
         selectionI = [downloadingz.size];
         modeu = `${3 * parseInt(`${langx}`)}`;
         downloadingz = new Map([[`${langx}`, parseInt(`${policy9}`) & parseInt(`${langx}`)]]);
         policy9 /= Math.max(parseFloat(`${2 & parseInt(`${policy9}`)}`), 1);
         break;
      }
      for (let g = 0; g < 2; g++) {
         stringsr += `${list_.length}`;
      }
          let subsL = String.fromCharCode(115,104,111,114,116,95,119,95,57,56,0);
         stringsr += `${parseInt(`${typingx}`)}`;
         subsL += `${subsL.length}`;
      let send7 = stringsr == String.fromCharCode(118,99,95,103,116,51,48,98,101,54,0);
      do {
         stringsr += "3";
         if (send7) {
            break;
         }
      } while ((stringsr.startsWith(`${typingx}`)) && send7);
      let sentry9 = list_ == String.fromCharCode(120,50,55,51,95,115,116,106,0);
      do {
         list_ = `${(String.fromCharCode(78,0) == stringsr ? parseInt(`${typingx}`) : stringsr.length)}`;
         if (sentry9) {
            break;
         }
      } while (sentry9 && (stringsr.length > list_.length));
         typingx += parseFloat(`${1 % (Math.max(5, stringsr.length))}`);
      vietnamy += `${((sans5 ? 4 : 5) % (Math.max(2, typesN.length)))}`;
   }

    if (page > totalPageCount.current) {

       let footballN = true;
      while (!footballN) {
         footballN = (!footballN ? footballN : footballN);
         break;
      }
      if (footballN) {
         footballN = !footballN;
      }
       let skipp = true;
      bodani.push(typesN.length);
   for (let p = 0; p < 2; p++) {
       let grayZ = 0;
       let paginationD = 4.0;
       let switch_8rh = true;
       let detailsR = String.fromCharCode(116,95,52,51,95,108,112,99,108,115,112,0);
      if ((grayZ + paginationD) > 2.68) {
          let searchbarI: Array<any> = [892, 644, 85];
          let downloaderD = false;
          let page1: Array<any> = [902, 128];
          let downloadingT = String.fromCharCode(115,105,103,110,97,116,117,114,101,95,122,95,55,55,0);
         paginationD += parseFloat(`${downloadingT.length}`);
         searchbarI.push((1 << (Math.min(4, Math.abs((downloaderD ? 1 : 3))))));
         downloaderD = searchbarI.length < page1.length;
         page1.push(searchbarI.length);
         downloadingT = `${page1.length}`;
      }
      let fulle = detailsR.length <= 9151107;
      do {
         detailsR += `${((switch_8rh ? 1 : 3))}`;
         if (fulle) {
            break;
         }
      } while (fulle && (detailsR.length >= 1));
      while (switch_8rh && (3 ^ grayZ) >= 4) {
          let catagoryg: Map<any, any> = new Map([[String.fromCharCode(101,95,52,49,95,98,121,116,101,115,116,114,101,97,109,0),981], [String.fromCharCode(106,95,55,55,95,99,111,108,111,114,101,100,0),612]]);
         switch_8rh = !switch_8rh;
         catagoryg.set(`${catagoryg.size}`, catagoryg.size & 2);
         break;
      }
      for (let x = 0; x < 1; x++) {
         paginationD *= parseFloat(`${3 % (Math.max(grayZ, 1))}`);
      }
      for (let w = 0; w < 3; w++) {
         paginationD -= (parseFloat(`${String.fromCharCode(51,0) == detailsR ? parseInt(`${paginationD}`) : detailsR.length}`));
      }
         detailsR = `${parseInt(`${paginationD}`)}`;
          let promotions = String.fromCharCode(121,95,50,52,95,97,108,108,111,119,105,0);
         grayZ %= Math.max(((switch_8rh ? 4 : 5) >> (Math.min(Math.abs(3), 3))), 5);
         promotions = "2";
         switch_8rh = paginationD < 1.13;
      let playercommonI = paginationD <= 8442995.0;
      do {
          let backB = String.fromCharCode(100,95,57,49,95,100,101,99,107,108,105,110,107,0);
         paginationD -= parseFloat(`${3}`);
         backB += `${1 & backB.length}`;
         if (playercommonI) {
            break;
         }
      } while (playercommonI && (4.12 < (paginationD / 5.34) && paginationD < 5.34));
      for (let a = 0; a < 2; a++) {
         paginationD *= parseFloat(`${grayZ / 1}`);
      }
      let modaly = switch_8rh ? !switch_8rh : switch_8rh;
      do {
          let huaweiN: Map<any, any> = new Map([[String.fromCharCode(120,95,49,57,95,115,117,105,116,101,0),String.fromCharCode(122,95,52,57,95,105,115,110,111,110,122,101,114,111,0)], [String.fromCharCode(112,97,114,115,101,114,95,118,95,57,0),String.fromCharCode(115,111,117,114,99,101,95,103,95,55,49,0)], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,95,49,95,55,0),String.fromCharCode(120,95,50,51,95,116,119,114,112,0)]]);
          let entryW: Array<any> = [720, 978, 608];
          let crossC: Map<any, any> = new Map([[String.fromCharCode(101,95,55,56,95,109,97,103,105,99,121,117,118,0),473], [String.fromCharCode(115,117,98,115,116,97,116,101,95,120,95,49,56,0),837], [String.fromCharCode(120,95,56,50,95,103,109,111,99,107,0),963]]);
         switch_8rh = grayZ >= 6;
         huaweiN = new Map([[`${crossC.size}`, crossC.size]]);
         entryW.push(1);
         if (modaly) {
            break;
         }
      } while ((4 <= detailsR.length) && modaly);
         grayZ -= 2 / (Math.max(parseInt(`${paginationD}`), 1));
      typesN = [sound1.size];
   }
   let termsB = String.fromCharCode(119,55,114,109,111,0) == ewardedV;
   do {
       let control2 = 0;
       let navigation9 = String.fromCharCode(110,111,110,98,108,111,99,107,105,110,103,95,115,95,54,54,0);
       let albumK = 0.0;
       let soundu = String.fromCharCode(99,95,57,56,0);
       let moreQ = 5;
          let expiredw = String.fromCharCode(116,114,97,118,101,114,115,101,95,99,95,51,49,0);
          let alertj = String.fromCharCode(113,95,50,54,95,112,114,111,116,111,99,111,108,115,0);
         navigation9 += `${moreQ}`;
         expiredw += `${alertj.length >> (Math.min(expiredw.length, 2))}`;
         alertj += `${2 * alertj.length}`;
      while (control2 >= navigation9.length) {
          let entryb = 5.0;
          let blacklisth: Map<any, any> = new Map([[String.fromCharCode(103,95,57,53,95,115,117,98,115,116,105,116,117,116,101,0),String.fromCharCode(110,95,54,56,95,100,117,109,112,0)], [String.fromCharCode(110,95,50,53,95,115,117,112,112,114,101,115,115,105,110,103,0),String.fromCharCode(110,101,103,111,116,105,97,116,101,95,98,95,53,50,0)]]);
          let progressB = String.fromCharCode(115,112,101,99,105,97,108,95,104,95,51,53,0);
          let mbnativeadvanced2 = String.fromCharCode(102,105,112,115,95,54,95,50,55,0);
         control2 /= Math.max(3, 3);
         entryb += parseFloat(`${progressB.length}`);
         blacklisth.set(progressB, progressB.length + 2);
         mbnativeadvanced2 += `${(String.fromCharCode(67,0) == mbnativeadvanced2 ? progressB.length : mbnativeadvanced2.length)}`;
         break;
      }
      if (soundu.startsWith(`${albumK}`)) {
         soundu = `${navigation9.length}`;
      }
          let vnewinterstitialu = String.fromCharCode(104,105,116,95,118,95,50,50,0);
         control2 /= Math.max(4, moreQ);
         vnewinterstitialu += "1";
          let searchbarT = 5;
         navigation9 += `${searchbarT}`;
      while ((3 << (Math.min(5, Math.abs(moreQ)))) < 4 || 4 < (3 << (Math.min(5, Math.abs(moreQ))))) {
         moreQ >>= Math.min(soundu.length, 5);
         break;
      }
       let gemfileL: Array<any> = [614, 123];
       let screenN: Array<any> = [String.fromCharCode(111,95,52,51,95,97,100,100,114,101,115,115,0), String.fromCharCode(114,101,108,101,118,97,110,116,95,105,95,50,57,0), String.fromCharCode(100,101,110,111,105,115,105,110,103,95,51,95,57,50,0)];
      if ((control2 + 1) >= 2) {
          let overlayJ = String.fromCharCode(100,95,51,53,95,104,105,116,0);
          let countryS: Map<any, any> = new Map([[String.fromCharCode(100,95,52,53,95,112,114,111,109,112,116,101,100,0),String.fromCharCode(104,97,108,102,108,116,117,105,110,116,95,49,95,52,56,0)], [String.fromCharCode(104,95,54,52,95,115,99,114,117,98,98,105,110,103,0),String.fromCharCode(116,95,56,53,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0)], [String.fromCharCode(115,111,102,97,108,105,122,101,114,95,108,95,52,55,0),String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,108,95,57,55,0)]]);
          let promotionT = false;
          let hookz = String.fromCharCode(115,117,98,102,105,108,101,95,113,95,50,54,0);
          let malaysiaW: Map<any, any> = new Map([[String.fromCharCode(103,95,54,49,95,101,120,116,101,110,115,105,111,110,115,0),894], [String.fromCharCode(109,95,53,49,0),387], [String.fromCharCode(112,95,49,54,95,107,110,111,99,107,111,117,116,0),800]]);
         control2 |= 1;
         overlayJ += `${hookz.length}`;
         countryS = new Map([[`${malaysiaW.size}`, hookz.length]]);
         promotionT = !promotionT;
         malaysiaW = new Map([[`${countryS.size}`, (overlayJ == String.fromCharCode(121,0) ? overlayJ.length : countryS.size)]]);
      }
       let package_i9p = true;
       let typing5 = false;
         screenN = [((typing5 ? 3 : 5))];
      if (3 > (5 * soundu.length)) {
         screenN.push(screenN.length);
      }
         typing5 = !soundu.endsWith(`${typing5}`);
         screenN = [screenN.length];
          let descc = 4;
          let anythink9 = 3;
         gemfileL.push(descc - 1);
         descc %= Math.max(anythink9, 2);
      for (let x = 0; x < 3; x++) {
         screenN = [1];
      }
      ewardedV += `${sound1.size - moreQ}`;
      if (termsB) {
         break;
      }
   } while (termsB && ((typesN.length * ewardedV.length) <= 1 || (typesN.length * ewardedV.length) <= 1));
      setHasNextPage(false);

       let forwardD: Array<any> = [520, 629];
         forwardD.push(forwardD.length ^ forwardD.length);
       let nalyticsp = 1.0;
       let rewardvideoh = false;
      sound1 = new Map([[`${matchM.size}`, sentry1.length]]);
      vietnamy = `${(ewardedV.length * (sans5 ? 5 : 3))}`;
   if ((sound1.size & 5) < 3 || 2 < (sound1.size & 5)) {
      bodani = [sound1.size];
   }
      return;
    } else {

   let resultK = sans5 ? !sans5 : sans5;
   do {
      sans5 = (matchM.size >> (Math.min(1, Math.abs(sound1.size)))) > 42;
      if (resultK) {
         break;
      }
   } while (resultK && (4.40 == inviteL));
   let rules2 = bodani.length <= 9686688;
   do {
       let success2 = String.fromCharCode(99,111,110,118,101,114,116,101,114,95,113,95,52,49,0);
       let referrer4 = 5.0;
       let subsp = 3.0;
       let searchbarj = 1.0;
       let rewind8 = String.fromCharCode(97,112,112,108,105,101,114,95,53,95,57,0);
      while (searchbarj <= referrer4) {
         searchbarj /= Math.max(parseFloat(`${success2.length}`), 3);
         break;
      }
      let progress8 = subsp >= 5473294.0;
      do {
         subsp *= parseFloat(`${parseInt(`${subsp}`)}`);
         if (progress8) {
            break;
         }
      } while (progress8 && ((searchbarj * subsp) < 4.92));
      for (let p = 0; p < 3; p++) {
         searchbarj /= Math.max(parseFloat(`${3}`), 1);
      }
         searchbarj /= Math.max(parseFloat(`${parseInt(`${subsp}`)}`), 5);
         subsp /= Math.max((parseFloat(`${rewind8 == String.fromCharCode(89,0) ? parseInt(`${searchbarj}`) : rewind8.length}`)), 3);
         subsp *= parseFloat(`${2}`);
      for (let i = 0; i < 2; i++) {
         success2 = `${2 ^ parseInt(`${searchbarj}`)}`;
      }
         subsp /= Math.max(5, parseFloat(`${parseInt(`${referrer4}`)}`));
      if (3.67 < referrer4) {
         referrer4 *= parseFloat(`${2 >> (Math.min(3, rewind8.length))}`);
      }
      if (2.64 >= (referrer4 / 2.98)) {
         referrer4 /= Math.max(5, parseFloat(`${parseInt(`${referrer4}`) - parseInt(`${subsp}`)}`));
      }
          let backwardB = 5;
          let greenB: Map<any, any> = new Map([[String.fromCharCode(119,95,54,50,95,115,104,111,114,116,101,115,116,0),false ], [String.fromCharCode(112,111,108,105,99,101,95,52,95,56,57,0),false ], [String.fromCharCode(110,95,55,56,95,98,101,102,111,114,101,0),false ]]);
          let filledf = String.fromCharCode(115,99,99,111,110,102,105,103,95,50,95,50,53,0);
         referrer4 += parseFloat(`${1 ^ greenB.size}`);
         backwardB /= Math.max(4, filledf.length | backwardB);
         greenB = new Map([[`${backwardB}`, 1 % (Math.max(9, filledf.length))]]);
      let mappingl = rewind8.length >= 9401803;
      do {
         rewind8 = `${parseInt(`${subsp}`)}`;
         if (mappingl) {
            break;
         }
      } while (mappingl && (rewind8.length > parseInt(`${referrer4}`)));
         rewind8 = `${parseInt(`${subsp}`)}`;
         searchbarj /= Math.max(2, parseFloat(`${rewind8.length}`));
      if (5.11 >= (5.18 - subsp) || (5.18 - searchbarj) >= 1.4) {
          let penaltyp = 1;
         searchbarj += parseFloat(`${2}`);
         penaltyp |= penaltyp;
      }
      bodani.push((String.fromCharCode(79,0) == rewind8 ? parseInt(`${referrer4}`) : rewind8.length));
      if (rules2) {
         break;
      }
   } while ((5 <= (bodani.length >> (Math.min(typesN.length, 2)))) && rules2);
      sound1 = new Map([[`${matchM.size}`, sentry1.length]]);
      setHasNextPage(true);
    }
    setIsFetching(true);

   for (let f = 0; f < 2; f++) {
      typesN = [sound1.size];
   }
       let listz: Map<any, any> = new Map([[String.fromCharCode(111,95,54,50,95,117,110,112,114,101,109,117,108,116,105,112,108,121,0),455], [String.fromCharCode(119,109,97,112,114,111,100,97,116,97,95,118,95,55,49,0),473]]);
         listz = new Map([[`${listz.size}`, 3]]);
         listz = new Map([[`${listz.size}`, 2]]);
       let phonee = 3.0;
      bodani.push(parseInt(`${inviteL}`));
   if (3 >= (ewardedV.length + matchM.size)) {
      matchM = new Map([[`${sound1.size}`, sound1.size]]);
   }
    const vodData = await fetchVod(page) as ttCenter;

      vietnamy += `${1 - sound1.size}`;
       let private_th9: Array<any> = [String.fromCharCode(104,95,49,50,95,105,116,115,101,108,102,0), String.fromCharCode(102,95,49,57,95,115,99,97,108,101,102,97,99,116,111,114,115,0)];
       let serviceI = String.fromCharCode(114,97,98,98,105,116,95,107,95,50,49,0);
      if (serviceI.length <= private_th9.length) {
          let libcrashsdk6: Array<any> = [450, 382, 52];
          let group0 = String.fromCharCode(112,114,105,111,114,105,116,105,101,115,95,50,95,50,54,0);
          let invite8 = 3.0;
         private_th9.push(parseInt(`${invite8}`) >> (Math.min(serviceI.length, 3)));
         libcrashsdk6 = [3];
         group0 = `${libcrashsdk6.length}`;
         invite8 -= group0.length & 3;
      }
      if (!serviceI.includes(`${private_th9.length}`)) {
          let areaZ = 1.0;
          let giftn: Map<any, any> = new Map([[String.fromCharCode(100,101,116,97,105,108,101,100,95,51,95,49,57,0),898], [String.fromCharCode(117,95,54,52,95,115,105,99,107,0),608], [String.fromCharCode(110,111,111,112,95,97,95,55,53,0),734]]);
         serviceI += `${serviceI.length}`;
         areaZ += parseFloat(`${parseInt(`${areaZ}`)}`);
         giftn = new Map([[`${giftn.size}`, 1]]);
      }
         private_th9.push(serviceI.length);
      while (private_th9.length >= serviceI.length) {
          let changea: Map<any, any> = new Map([[String.fromCharCode(101,110,118,101,108,111,112,101,100,95,109,95,52,57,0),String.fromCharCode(109,95,49,56,95,116,111,120,121,122,0)], [String.fromCharCode(116,104,114,111,116,116,108,101,100,95,99,95,51,49,0),String.fromCharCode(113,95,51,50,95,99,97,110,99,101,108,0)]]);
          let lessz = String.fromCharCode(102,95,49,48,48,95,112,111,115,116,98,111,120,0);
          let launchA = 5.0;
         serviceI += `${lessz.length}`;
         changea.set(`${launchA}`, parseInt(`${launchA}`) >> (Math.min(Math.abs(changea.size), 5)));
         lessz = `${changea.size ^ parseInt(`${launchA}`)}`;
         break;
      }
      while ((private_th9.length << (Math.min(Math.abs(1), 2))) > 3) {
          let drag3 = String.fromCharCode(115,95,53,48,95,114,101,97,114,114,97,110,103,101,0);
          let downloadingF: Map<any, any> = new Map([[String.fromCharCode(110,116,114,111,95,97,95,49,49,0),false ], [String.fromCharCode(108,111,97,100,95,111,95,51,0),true ], [String.fromCharCode(114,97,110,107,115,95,53,95,51,51,0),true ]]);
          let private_tw6 = String.fromCharCode(102,95,54,56,95,102,105,110,105,115,104,101,100,0);
         private_th9 = [3 & private_th9.length];
         drag3 += "2";
         downloadingF = new Map([[`${downloadingF.size}`, private_tw6.length]]);
         private_tw6 += `${(drag3 == String.fromCharCode(80,0) ? downloadingF.size : drag3.length)}`;
         break;
      }
         private_th9 = [private_th9.length];
      vietnamy += `${parseInt(`${inviteL}`)}`;
       let short_fG = 4.0;
       let launchG = 3.0;
         short_fG -= parseFloat(`${1 + parseInt(`${short_fG}`)}`);
      while ((2.52 * short_fG) >= 5.33) {
         short_fG /= Math.max(5, parseFloat(`${parseInt(`${short_fG}`) & parseInt(`${launchG}`)}`));
         break;
      }
      matchM.set(`${sans5}`, bodani.length);
    const data = vodData.List;

       let actionq = String.fromCharCode(118,101,99,95,105,95,50,0);
       let source8 = String.fromCharCode(102,98,100,101,118,95,118,95,54,56,0);
       let time_92h: Map<any, any> = new Map([[String.fromCharCode(107,105,110,103,102,105,115,104,101,114,95,116,95,49,0),75], [String.fromCharCode(118,95,49,49,95,100,105,97,103,111,110,97,108,0),732], [String.fromCharCode(113,95,53,51,0),194]]);
          let orange9: Array<any> = [414, 370, 263];
          let modelh = String.fromCharCode(102,95,50,95,119,105,110,100,111,119,115,0);
         source8 += `${time_92h.size - modelh.length}`;
         orange9 = [orange9.length];
         modelh += `${1 >> (Math.min(4, orange9.length))}`;
      while (5 == (2 / (Math.max(10, source8.length))) && (time_92h.size / (Math.max(2, 10))) == 2) {
         time_92h.set(source8, time_92h.size % 1);
         break;
      }
          let p_countl: Map<any, any> = new Map([[String.fromCharCode(120,95,57,53,95,102,114,97,109,101,115,105,122,101,0),473], [String.fromCharCode(114,116,109,112,95,103,95,50,51,0),301], [String.fromCharCode(115,95,57,95,104,101,97,100,112,104,111,110,101,0),87]]);
          let predictiond = 4;
          let v_lock8 = 2;
         actionq = `${v_lock8 / (Math.max(9, time_92h.size))}`;
         p_countl = new Map([[`${p_countl.size}`, predictiond << (Math.min(Math.abs(3), 2))]]);
         predictiond *= p_countl.size;
         v_lock8 <<= Math.min(5, Math.abs(3));
          let actions = 5.0;
         source8 += `${source8.length}`;
         actions *= 2;
          let submit9 = String.fromCharCode(102,95,53,51,95,98,114,101,97,107,111,117,116,0);
          let contextG = String.fromCharCode(115,104,97,100,101,115,95,109,95,57,49,0);
          let filledM: Array<any> = [825, 602];
         source8 += `${actionq.length}`;
         submit9 += `${filledM.length}`;
         contextG += `${contextG.length + submit9.length}`;
         filledM.push(filledM.length + 2);
         actionq = "3";
       let transferv = 4.0;
         transferv *= parseFloat(`${parseInt(`${transferv}`) % (Math.max(actionq.length, 4))}`);
         time_92h = new Map([[actionq, source8.length]]);
      halft.set(`${source8}`, (String.fromCharCode(111,0) == source8 ? halft.size : source8.length));
      inviteL += parseFloat(`${2}`);
      typesN = [3];
    setIsFetching(false);

      bodani = [1];
      temperatureA = 64 == bodani.length || halft.size == 64;
   for (let f = 0; f < 2; f++) {
      inviteL *= parseFloat(`${parseInt(`${inviteL}`)}`);
   }

    setAdultVodData(curr => [...curr, ...data]);

       let singaporeY = String.fromCharCode(116,111,110,103,117,101,95,108,95,56,57,0);
       let humidityv = 3.0;
         singaporeY = `${(String.fromCharCode(122,0) == singaporeY ? parseInt(`${humidityv}`) : singaporeY.length)}`;
          let thailandx = false;
         singaporeY = `${(parseInt(`${humidityv}`) | (thailandx ? 3 : 2))}`;
         singaporeY += `${parseInt(`${humidityv}`) >> (Math.min(singaporeY.length, 2))}`;
         singaporeY += `${3 ^ parseInt(`${humidityv}`)}`;
      for (let d = 0; d < 1; d++) {
          let china1 = 5.0;
         singaporeY += "1";
         china1 /= Math.max(5, parseFloat(`${parseInt(`${china1}`)}`));
      }
      let flyerp = singaporeY.length <= 7598227;
      do {
         singaporeY = `${parseInt(`${humidityv}`) >> (Math.min(Math.abs(3), 1))}`;
         if (flyerp) {
            break;
         }
      } while ((2.40 == (humidityv - 5.53)) && flyerp);
      halft.set(`${typesN.length}`, 1 | typesN.length);
   let gpayI = sans5 ? !sans5 : sans5;
   do {
      sans5 = !sentry1.startsWith(`${sans5}`);
      if (gpayI) {
         break;
      }
   } while ((!sans5) && gpayI);
   if (!sans5) {
      sans5 = (subsF.length | typesN.length) > 22;
   }
    setPage(page => page + 1);
  };

  const renderItem = ({ item, index }: { item: ttDown; index: number }) => {
    return (
      <View
        style={{
          width: '50%',
          padding: 5,
          
        }}>
        <TouchableOpacity
          key={item.vod_id}
          style={styles.cardItem}
          onPress={() => {
            console.debug('vod pressed', item.vod_name);
            dispatch(playVod(item));
            navigation.navigate('播放', {
              vod_id: item?.vod_id,
              player_mode: 'adult'
            });
            
          }}>
          <FastImage
            useFastImage={true}
            style={{ flex: 1, borderRadius: 10 }}
            source={{
              uri: item.vod_pic,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
          }}>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {item.vod_name}
          </Text>
        </View>
      </View>
    )
  };

  useEffect(() => {
    fetchVod(page).then(data => {
      totalPageCount.current = data.TotalPageCount;
      setAdultVodData(curr => [...curr, ...data.List]);
      setPage(page => page + 1);
    });
  }, []);

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title={route.params.class}
      />
      <View>
        {adultVodData.length < 1 ?
          (
            <FastImage
              style={{
                height: 80,
                width: 80,

                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('@static/images/toponTerms.gif')}
              resizeMode={'contain'}
            />
          )

          :

          (
            <FlatList
              data={adultVodData}
              renderItem={renderItem}
              numColumns={2}
              contentContainerStyle={{ justifyContent: 'space-evenly' }}
              onEndReached={fetchNextPage}
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.5}
              ListFooterComponent={
                <View style={{ ...styles.loading, marginBottom: 100 }}>
                  {hasNextPage && (
                    <FastImage
                      style={{
                        height: 80,
                        width: 80,

                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      source={require('@static/images/toponTerms.gif')}
                      resizeMode={'contain'}
                    />
                  )}
                  {!isFetching && page !== 1 && !hasNextPage && (
                    <Text
                      style={{
                        ...textVariants.subBody,
                        color: colors.muted,
                        paddingTop: 12,
                      }}>
                      已经到底了
                    </Text>
                  )}
                </View>
              }
            />
          )
        }
      </View>
    </ScreenContainer>
  );
};

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
    backgroundColor: 'red',
  },
  cardItem: {
    
    aspectRatio: 130 / 80,
    borderRadius: 10,
    
    
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  cardTitle: {
    color: '#FFF',
    textAlign: 'center',
  },
});
