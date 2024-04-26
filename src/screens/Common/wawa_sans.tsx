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
       let bgvipxvodQ = String.fromCharCode(100,95,49,0);
    let verticalv = String.fromCharCode(100,95,53,54,95,115,101,108,101,99,116,105,110,103,0);
    let hearts = String.fromCharCode(115,104,111,119,115,95,108,95,53,55,0);
    let suboutq = String.fromCharCode(99,95,51,51,95,116,111,110,101,109,97,112,0);
    let imagenomoredataM = String.fromCharCode(118,116,97,103,95,111,95,52,49,0);
    let benefitr = 3;
    let renderp = String.fromCharCode(117,95,57,49,95,109,97,116,104,101,109,97,116,105,99,115,0);
    let c_positionu: Array<any> = [518, 805, 788];
    let imagemanagerS = String.fromCharCode(99,97,99,97,95,111,95,55,53,0);
    let dialog3 = 5.0;
    let malaysiaj: Array<any> = [776, 973, 438];
    let trophyP = 1.0;
    let description_mfF = false;
    let defaultprofilepicr = 5.0;
      imagenomoredataM += `${benefitr}`;
      imagenomoredataM += `${imagenomoredataM.length >> (Math.min(1, Math.abs(parseInt(`${dialog3}`))))}`;
   while (3 > (benefitr << (Math.min(Math.abs(1), 1)))) {
      suboutq = "3";
      break;
   }
   if (c_positionu.length == 2) {
      c_positionu.push(suboutq.length - 2);
   }
   if (suboutq != String.fromCharCode(49,0)) {
       let bannerb = String.fromCharCode(117,95,57,53,95,116,117,110,101,0);
       let holderU = 4.0;
       let uploadv: Map<any, any> = new Map([[String.fromCharCode(108,95,49,53,95,108,111,116,116,105,101,118,105,101,119,0),839], [String.fromCharCode(108,95,53,49,95,115,121,110,116,104,101,115,105,122,101,0),344], [String.fromCharCode(114,117,108,101,115,95,99,95,51,55,0),108]]);
         holderU += parseInt(`${holderU}`);
         uploadv.set(bannerb, bannerb.length);
          let utilso = String.fromCharCode(108,115,98,115,95,119,95,56,51,0);
          let playe = String.fromCharCode(117,114,108,99,111,110,116,101,120,116,95,52,95,56,53,0);
         bannerb += "3";
         utilso += `${(playe == String.fromCharCode(111,0) ? playe.length : utilso.length)}`;
      for (let l = 0; l < 2; l++) {
          let memberX = 5.0;
          let currentA = String.fromCharCode(116,95,49,53,95,97,115,99,105,105,0);
          let pushm = 3;
          let desco = String.fromCharCode(121,95,55,54,95,112,114,101,116,101,110,100,0);
         holderU += (currentA == String.fromCharCode(101,0) ? pushm : currentA.length);
         memberX -= (parseFloat(`${desco == String.fromCharCode(57,0) ? parseInt(`${memberX}`) : desco.length}`));
         pushm %= Math.max(3, desco.length ^ parseInt(`${memberX}`));
      }
         holderU -= uploadv.size;
      let checkboxL = 9447490.0 <= holderU;
      do {
          let gdtadvS = 2;
          let pages = String.fromCharCode(108,101,97,118,101,95,53,95,51,56,0);
          let indicatorl: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,110,97,109,101,95,48,95,53,50,0),false ], [String.fromCharCode(115,116,114,109,97,116,99,104,95,119,95,57,52,0),false ]]);
          let invitem = String.fromCharCode(100,95,53,52,95,115,101,114,118,105,99,101,115,0);
         holderU += (String.fromCharCode(100,0) == bannerb ? bannerb.length : parseInt(`${holderU}`));
         gdtadvS %= Math.max(3 + indicatorl.size, 3);
         pages += `${(String.fromCharCode(112,0) == pages ? gdtadvS : pages.length)}`;
         indicatorl.set(`${gdtadvS}`, 1 << (Math.min(2, invitem.length)));
         invitem = `${invitem.length}`;
         if (checkboxL) {
            break;
         }
      } while (checkboxL && (bannerb.length > holderU));
      let libfbF = 9367751 >= uploadv.size;
      do {
          let middleN = true;
          let halffieldimagez = String.fromCharCode(118,95,51,48,95,115,116,97,110,100,97,108,111,110,101,0);
          let libfabricjni1 = String.fromCharCode(121,95,50,51,95,115,117,98,112,97,121,108,111,97,100,0);
          let weatheru = 4.0;
         uploadv.set(`${holderU}`, bannerb.length & 1);
         middleN = halffieldimagez == String.fromCharCode(69,0) || 31.85 == weatheru;
         halffieldimagez = `${halffieldimagez.length >> (Math.min(Math.abs(1), 5))}`;
         libfabricjni1 = `${((middleN ? 2 : 4) ^ 2)}`;
         weatheru -= (parseFloat(`${(middleN ? 5 : 4) >> (Math.min(Math.abs(parseInt(`${weatheru}`)), 5))}`));
         if (libfbF) {
            break;
         }
      } while (libfbF && ((5 + bannerb.length) <= 2));
         holderU *= uploadv.size / 3;
         holderU *= 3 << (Math.min(4, Math.abs(parseInt(`${holderU}`))));
      renderp = `${verticalv.length << (Math.min(Math.abs(1), 2))}`;
   }
       let penaltyshootnogoalt = String.fromCharCode(110,95,52,52,95,121,118,116,111,121,117,121,0);
       let yellowscoreballw = String.fromCharCode(118,105,100,101,111,100,115,112,95,107,95,56,49,0);
      for (let b = 0; b < 2; b++) {
         penaltyshootnogoalt += `${penaltyshootnogoalt.length}`;
      }
      let rncorei = penaltyshootnogoalt == String.fromCharCode(54,49,113,57,109,121,111,0);
      do {
         penaltyshootnogoalt += "2";
         if (rncorei) {
            break;
         }
      } while ((penaltyshootnogoalt.length > 5) && rncorei);
      while (4 > yellowscoreballw.length) {
          let minimizew: Map<any, any> = new Map([[String.fromCharCode(98,117,99,107,101,116,97,108,108,111,99,95,112,95,56,49,0),628], [String.fromCharCode(122,95,57,51,95,109,97,114,107,105,110,103,115,0),726]]);
          let whitef = String.fromCharCode(115,117,98,110,111,100,101,115,95,57,95,53,57,0);
          let colorsO = String.fromCharCode(99,111,108,108,101,99,116,105,111,110,95,105,95,54,55,0);
          let championZ = String.fromCharCode(121,95,51,48,95,99,111,112,121,0);
         yellowscoreballw += `${(penaltyshootnogoalt == String.fromCharCode(75,0) ? penaltyshootnogoalt.length : yellowscoreballw.length)}`;
         minimizew.set(championZ, 2);
         whitef = `${whitef.length & 2}`;
         colorsO += `${(whitef == String.fromCharCode(66,0) ? minimizew.size : whitef.length)}`;
         championZ += `${colorsO.length + minimizew.size}`;
         break;
      }
      while (yellowscoreballw != penaltyshootnogoalt) {
         penaltyshootnogoalt += `${3 * penaltyshootnogoalt.length}`;
         break;
      }
       let ajax3: Array<any> = [563, 793, 278];
      while (yellowscoreballw.length >= ajax3.length) {
          let iconsharefriendsy: Map<any, any> = new Map([[String.fromCharCode(108,95,52,49,95,115,101,97,100,0),210], [String.fromCharCode(111,114,112,104,97,110,95,122,95,52,51,0),983]]);
          let fieldq = String.fromCharCode(119,105,110,115,111,99,107,95,119,95,50,57,0);
         ajax3 = [ajax3.length % 2];
         iconsharefriendsy.set(fieldq, iconsharefriendsy.size ^ fieldq.length);
         break;
      }
      verticalv = `${1 * parseInt(`${dialog3}`)}`;
   while ((trophyP * 3.61) > 1.53 && (trophyP * parseFloat(`${malaysiaj.length}`)) > 3.61) {
       let bggradientz = 3;
         bggradientz |= bggradientz;
         bggradientz |= bggradientz;
         bggradientz |= bggradientz;
      trophyP /= Math.max(4, parseFloat(`${2 & benefitr}`));
      break;
   }
   if (3 < hearts.length) {
      hearts += `${imagemanagerS.length / (Math.max(3, 10))}`;
   }
   if (hearts.startsWith(`${imagenomoredataM.length}`)) {
      hearts = `${malaysiaj.length}`;
   }
   if (bgvipxvodQ != verticalv) {
      verticalv += `${2 ^ renderp.length}`;
   }
   while (!renderp.endsWith(`${imagemanagerS.length}`)) {
      imagemanagerS = `${(suboutq == String.fromCharCode(98,0) ? suboutq.length : parseInt(`${trophyP}`))}`;
      break;
   }
   if ((1.68 * dialog3) < 5.65) {
      dialog3 *= parseFloat(`${imagemanagerS.length}`);
   }
       let incident3 = String.fromCharCode(119,101,101,107,100,97,121,115,95,98,95,50,56,0);
      let greyi = 7695305 >= incident3.length;
      do {
         incident3 += `${(String.fromCharCode(112,0) == incident3 ? incident3.length : incident3.length)}`;
         if (greyi) {
            break;
         }
      } while ((incident3.length >= 5) && greyi);
       let save6 = false;
      for (let e = 0; e < 3; e++) {
         incident3 += `${((save6 ? 3 : 2) ^ 2)}`;
      }
      imagemanagerS = `${imagenomoredataM.length}`;
      renderp = `${parseInt(`${trophyP}`) % 2}`;
   if (1.71 <= (dialog3 + 4.10) || 1.63 <= (dialog3 + 4.10)) {
      suboutq = `${2 * verticalv.length}`;
   }
   while (1.60 > (dialog3 + 1.79)) {
      hearts = `${imagenomoredataM.length * c_positionu.length}`;
      break;
   }
      suboutq += "1";
      bgvipxvodQ = `${(suboutq == String.fromCharCode(109,0) ? suboutq.length : imagemanagerS.length)}`;
   while ((benefitr & verticalv.length) == 2 && (2 & verticalv.length) == 3) {
      verticalv = `${parseInt(`${dialog3}`)}`;
      break;
   }
   for (let q = 0; q < 2; q++) {
      suboutq = `${suboutq.length}`;
   }
   let subtextm = trophyP <= 9058205.0;
   do {
       let iconnewsshareJ = String.fromCharCode(114,95,55,52,95,105,110,105,116,97,108,0);
       let bottom8 = 1;
       let promotionj = String.fromCharCode(116,101,109,112,108,97,116,101,100,95,56,95,56,56,0);
       let styleb = String.fromCharCode(114,103,116,99,95,107,95,51,48,0);
       let defaultbasketballbg7: Array<any> = [562, 232, 635];
         bottom8 /= Math.max(iconnewsshareJ.length, 5);
         bottom8 ^= bottom8;
         bottom8 %= Math.max(1, iconnewsshareJ.length + bottom8);
      while (1 < iconnewsshareJ.length) {
         iconnewsshareJ += `${(promotionj == String.fromCharCode(48,0) ? bottom8 : promotionj.length)}`;
         break;
      }
      trophyP /= Math.max(2, (parseFloat(`${String.fromCharCode(120,0) == verticalv ? bottom8 : verticalv.length}`)));
      if (subtextm) {
         break;
      }
   } while ((5 >= (parseInt(`${trophyP}`) / 5) && (renderp.length | 5) >= 2) && subtextm);
      malaysiaj = [benefitr];
   if (imagenomoredataM == String.fromCharCode(70,0)) {
      suboutq = "2";
   }
      malaysiaj.push((imagemanagerS == String.fromCharCode(117,0) ? malaysiaj.length : imagemanagerS.length));
   while (4 == (3 & c_positionu.length) || (3 & hearts.length) == 4) {
      c_positionu.push(1 << (Math.min(2, hearts.length)));
      break;
   }

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
