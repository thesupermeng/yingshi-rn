import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../components/container/ypy_fast';
import {RootStackScreenProps} from '@type/vrm_thailand';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/kg_index';
import {PSmall} from '@redux/fj_prediction_thailand';

import TitleWithBackButtonHeader from '../../components/header/cio_news_types_header';
import {VFMode, QQCenterChart} from '@redux/reducers/pxk_lang_quest';
import {removeVodsFromHistory, playVod} from '@redux/actions/xif_layout';
import VodHistoryCard from '../../components/vod/sps_layout';
import CheckBoxSelected from '@static/images/foundPauseCircle.svg';
import CheckBoxUnselected from '@static/images/middlewareGoalStation.svg';
import {XVSScoreDark} from '@type/wpk_long';
import {Button} from '@rneui/themed';
import ConfirmationModal from '../../components/modal/nw_topic';
import VodLiveStationListVertical from '../../components/vod/mmr_placeholder';
import EmptyList from '../../components/common/jip_next_bell';
import {ScrollView} from 'react-native-gesture-handler';

type MEYMode = {
  item: VFMode;
};
export default ({navigation, route}: RootStackScreenProps<'电视台列表'>) => {
  const {liveStationItemList} = route.params;
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: QQCenterChart = useAppSelector(
    ({vodReducer}: PSmall) => vodReducer,
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<XVSScoreDark>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let kickq = 3;
    let team1 = String.fromCharCode(112,114,111,102,114,101,115,115,0);
    let nterstitiala = 1.0;
    let halfa = 5.0;
    let private_ir = 1;
    let halfl = String.fromCharCode(112,114,117,110,105,110,103,0);
    let downloady = String.fromCharCode(114,97,108,102,0);
    let acceptedX = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,101,0);
    let statsg = String.fromCharCode(116,111,111,108,0);
    let liveh = 0.0;
    let mailJ = 1.0;
    let shrinkS = String.fromCharCode(103,97,109,109,97,0);
    let match4 = 4.0;
    let fillb = String.fromCharCode(99,111,114,112,117,115,0);
    let gifti = true;
   let xcopy_sgf = mailJ >= 8271697.0;
   do {
      mailJ /= Math.max(4, parseFloat(`${kickq / 3}`));
      if (xcopy_sgf) {
         break;
      }
   } while (((4 - acceptedX.length) < 5 || 3.99 < (parseFloat(`${acceptedX.length}`) + mailJ)) && xcopy_sgf);
      kickq >>= Math.min(Math.abs(2 >> (Math.min(Math.abs(parseInt(`${mailJ}`)), 4))), 2);
   for (let c = 0; c < 2; c++) {
      statsg += `${parseInt(`${mailJ}`)}`;
   }
      mailJ -= parseFloat(`${kickq * 1}`);
      kickq -= parseInt(`${nterstitiala}`);
      halfl += `${halfl.length}`;
      nterstitiala *= parseInt(`${match4}`) | 1;
   let const_jzx = kickq >= 9589114;
   do {
      kickq |= private_ir << (Math.min(Math.abs(2), 1));
      if (const_jzx) {
         break;
      }
   } while (((shrinkS.length << (Math.min(Math.abs(1), 4))) >= 3 || (1 << (Math.min(2, Math.abs(kickq)))) >= 3) && const_jzx);
   if (!halfl.startsWith(`${nterstitiala}`)) {
      nterstitiala *= 1;
   }
   if (team1 != downloady) {
      downloady = `${kickq}`;
   }
      team1 = "2";
   if (shrinkS.startsWith(`${nterstitiala}`)) {
      shrinkS += `${kickq}`;
   }
   for (let t = 0; t < 1; t++) {
      private_ir *= 2 * parseInt(`${liveh}`);
   }
       let successU = String.fromCharCode(103,117,101,115,115,0);
       let resulty = 3.0;
      for (let v = 0; v < 3; v++) {
         successU = `${2 - parseInt(`${resulty}`)}`;
      }
      let previewu = resulty >= 6496926.0;
      do {
         resulty /= Math.max(parseInt(`${resulty}`), 1);
         if (previewu) {
            break;
         }
      } while (previewu && (4 < (parseInt(`${resulty}`) + successU.length) || 5.63 < (1.94 + resulty)));
          let modalX = 5.0;
          let indicatorL = 5;
          let dragN = String.fromCharCode(111,103,103,112,97,99,107,0);
         successU += `${successU.length}`;
         modalX *= parseFloat(`${3}`);
         indicatorL += dragN.length;
         dragN += `${2 + parseInt(`${modalX}`)}`;
         resulty /= Math.max(successU.length, 5);
         resulty *= successU.length;
         resulty *= parseInt(`${resulty}`);
      halfl += `${parseInt(`${nterstitiala}`) ^ parseInt(`${mailJ}`)}`;
      halfa -= parseFloat(`${2}`);
      private_ir <<= Math.min(Math.abs(team1.length ^ acceptedX.length), 4);
   while (acceptedX.includes(`${halfa}`)) {
      acceptedX = `${(String.fromCharCode(108,0) == team1 ? parseInt(`${liveh}`) : team1.length)}`;
      break;
   }
       let currentQ = String.fromCharCode(97,112,97,99,107,101,116,0);
         currentQ += "1";
       let fullk = String.fromCharCode(112,105,100,0);
       let football3 = String.fromCharCode(97,100,100,0);
          let plashm: Array<any> = [String.fromCharCode(101,97,114,108,105,101,114,0), String.fromCharCode(102,102,106,110,105,0)];
          let awayx = true;
         currentQ += `${(String.fromCharCode(118,0) == currentQ ? fullk.length : currentQ.length)}`;
         plashm.push(((awayx ? 3 : 2) & plashm.length));
         awayx = plashm.length <= 28 && !awayx;
      mailJ /= Math.max(parseFloat(`${1 << (Math.min(2, statsg.length))}`), 5);
      shrinkS = `${2 / (Math.max(7, parseInt(`${nterstitiala}`)))}`;
      shrinkS += `${((gifti ? 4 : 5) + statsg.length)}`;
      fillb += `${team1.length}`;
   for (let a = 0; a < 2; a++) {
      acceptedX += `${(String.fromCharCode(87,0) == statsg ? fillb.length : statsg.length)}`;
   }
       let xvodm = 3.0;
       let combineN: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,105,101,114,0),String.fromCharCode(110,97,118,105,103,97,116,101,100,0)], [String.fromCharCode(110,101,108,108,121,0),String.fromCharCode(112,114,111,99,0)], [String.fromCharCode(105,115,119,104,105,116,101,115,112,97,99,101,0),String.fromCharCode(114,105,98,98,111,110,95,122,95,57,49,0)]]);
       let sellI: Array<any> = [621, 687, 509];
      if (Array.from(combineN.values()).includes(xvodm)) {
         xvodm *= parseFloat(`${parseInt(`${xvodm}`)}`);
      }
          let tumbnailp = String.fromCharCode(103,114,111,117,112,110,97,109,101,115,0);
          let detailsA = String.fromCharCode(97,118,103,120,0);
          let heji1: Map<any, any> = new Map([[String.fromCharCode(117,98,108,105,99,95,106,95,57,49,0),622], [String.fromCharCode(114,101,103,105,115,116,101,114,101,100,0),274]]);
         sellI.push(sellI.length);
         tumbnailp += `${1 - detailsA.length}`;
         detailsA = `${heji1.size}`;
         heji1.set(`${detailsA}`, detailsA.length);
          let zhuboB = 1;
          let combinev = String.fromCharCode(99,97,112,116,105,111,110,0);
          let animationZ = false;
         sellI = [2 >> (Math.min(Math.abs(zhuboB), 2))];
         zhuboB <<= Math.min(Math.abs(2 ^ combinev.length), 5);
         combinev += `${combinev.length & 2}`;
      while ((3.88 + xvodm) == 5.89) {
          let recommendation3 = 0;
          let rank6 = String.fromCharCode(100,105,115,112,97,116,99,104,101,100,0);
          let fastforwarda = String.fromCharCode(115,105,103,115,97,102,101,0);
         combineN.set(`${recommendation3}`, 2);
         recommendation3 |= rank6.length;
         rank6 += `${rank6.length % (Math.max(4, fastforwarda.length))}`;
         fastforwarda = `${fastforwarda.length % (Math.max(rank6.length, 3))}`;
         break;
      }
      for (let i = 0; i < 3; i++) {
         xvodm *= parseFloat(`${combineN.size}`);
      }
         combineN.set(`${sellI.length}`, 2 + combineN.size);
      for (let j = 0; j < 2; j++) {
         combineN.set(`${xvodm}`, combineN.size ^ parseInt(`${xvodm}`));
      }
       let trophyM: Array<any> = [String.fromCharCode(102,116,118,110,115,0), String.fromCharCode(100,105,97,103,110,111,115,116,105,99,115,0)];
         trophyM.push(3 >> (Math.min(1, Math.abs(combineN.size))));
      gifti = halfl.endsWith(`${nterstitiala}`);
       let orangeW = String.fromCharCode(109,97,114,107,101,116,0);
       let analyticsw = true;
       let interstitialu = 4.0;
         orangeW += `${(String.fromCharCode(86,0) == orangeW ? parseInt(`${interstitialu}`) : orangeW.length)}`;
         interstitialu *= (parseFloat(`${parseInt(`${interstitialu}`) ^ (analyticsw ? 1 : 1)}`));
      while (2.52 == (interstitialu * 2.7) && analyticsw) {
          let rewindV: Array<any> = [339, 950];
          let gpayc: Map<any, any> = new Map([[String.fromCharCode(109,105,103,114,97,116,105,110,103,0),990], [String.fromCharCode(109,97,110,105,112,117,108,97,116,111,114,0),474]]);
          let const_6r = String.fromCharCode(119,97,114,110,105,110,103,0);
          let cross8 = String.fromCharCode(111,112,116,105,111,110,97,108,108,121,0);
         interstitialu -= (parseFloat(`${rewindV.length << (Math.min(5, Math.abs((analyticsw ? 4 : 5))))}`));
         rewindV = [1 << (Math.min(4, cross8.length))];
         gpayc.set(cross8, (String.fromCharCode(73,0) == cross8 ? const_6r.length : cross8.length));
         const_6r += "3";
         break;
      }
         analyticsw = 63.86 >= interstitialu;
         analyticsw = orangeW.length <= 45 && analyticsw;
         analyticsw = orangeW.length <= 78 && !analyticsw;
      if ((orangeW.length ^ 1) < 2 || (1 >> (Math.min(3, orangeW.length))) < 3) {
          let routerB = 2.0;
          let checkboxy = 3.0;
          let commentB = String.fromCharCode(113,115,118,118,112,112,0);
          let darka = 4.0;
         interstitialu += parseFloat(`${commentB.length << (Math.min(Math.abs(2), 4))}`);
         routerB /= Math.max(parseFloat(`${parseInt(`${checkboxy}`)}`), 5);
         checkboxy -= parseFloat(`${1}`);
         commentB = `${3 & parseInt(`${routerB}`)}`;
         darka *= parseFloat(`${2}`);
      }
       let tooltipsX = 1.0;
       let dropdownz = 0.0;
      while (dropdownz >= tooltipsX) {
         dropdownz *= ((analyticsw ? 2 : 4) >> (Math.min(Math.abs(parseInt(`${interstitialu}`)), 4)));
         break;
      }
      private_ir += halfl.length % (Math.max(2, 5));
   let spinnerP = gifti ? !gifti : gifti;
   do {
      gifti = 86 == acceptedX.length;
      if (spinnerP) {
         break;
      }
   } while ((!gifti) && spinnerP);
      gifti = String.fromCharCode(100,0) == team1;
      downloady += `${3 + parseInt(`${liveh}`)}`;

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: XVSScoreDark) => {
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
