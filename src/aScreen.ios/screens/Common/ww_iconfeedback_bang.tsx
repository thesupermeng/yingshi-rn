import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../components/container/ww_collection';
import {RootStackScreenProps} from '@type/ww_tempnodatagif_description';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/ww_catagory_neon';
import {wwEighteenShirt} from '@redux/ww_small';

import TitleWithBackButtonHeader from '../../components/header/ww_react_predictionwin_header';
import {wwYellowredcardRelease, wwMbjscommon} from '@redux/reducers/ww_shared';
import {removeVodsFromHistory, playVod} from '@redux/actions/ww_floater';
import VodHistoryCard from '../../components/vod/ww_iconarrowright_point';
import CheckBoxSelected from '@static/images/auto_eMemberSwitch_lx.svg';
import CheckBoxUnselected from '@static/images/twitterNbatrophy.svg';
import {wwControl} from '@type/ww_dycreator_result';
import {Button} from '@rneui/themed';
import ConfirmationModal from '../../components/modal/ww_upgrade';
import VodLiveStationListVertical from '../../components/vod/ww_found';
import EmptyList from '../../components/common/ww_reducer_libreact';
import {ScrollView} from 'react-native-gesture-handler';

type wwCasting = {
  item: wwYellowredcardRelease;
};
export default ({navigation, route}: RootStackScreenProps<'电视台列表'>) => {
  const {liveStationItemList} = route.params;
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: wwMbjscommon = useAppSelector(
    ({vodReducer}: wwEighteenShirt) => vodReducer,
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<wwControl>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let nterstitial_ = 0;
    let helpera = String.fromCharCode(108,111,111,112,98,97,99,107,95,111,95,57,0);
    let exampleimagez = 3.0;
    let episodex: Array<any> = [870, 630, 738];
    let middlewareU = false;
    let episoded = String.fromCharCode(109,116,97,102,95,114,95,51,55,0);
    let main_qP = 2;
    let downloaderM = String.fromCharCode(121,111,103,97,95,112,95,53,51,0);
    let iconstarU = true;
    let iconshare9 = String.fromCharCode(99,111,118,101,114,105,110,103,95,52,95,52,50,0);
    let clockk: Map<any, any> = new Map([[String.fromCharCode(110,105,115,116,95,97,95,49,50,0),532], [String.fromCharCode(112,95,55,55,95,104,105,101,114,97,114,99,104,121,0),849], [String.fromCharCode(97,118,100,101,118,105,99,101,114,101,115,95,122,95,56,49,0),290]]);
       let internet5 = 2;
       let teamdetailsbgT = 1.0;
       let bdxadsdkh: Array<any> = [745, 391];
          let benefitj = String.fromCharCode(104,95,49,48,48,95,119,104,116,120,0);
         bdxadsdkh.push(bdxadsdkh.length);
         benefitj += `${benefitj.length | benefitj.length}`;
      for (let x = 0; x < 3; x++) {
         internet5 |= parseInt(`${teamdetailsbgT}`);
      }
         bdxadsdkh.push(internet5);
      for (let g = 0; g < 2; g++) {
         bdxadsdkh = [3 % (Math.max(parseInt(`${teamdetailsbgT}`), 1))];
      }
      if (1 >= (4 | bdxadsdkh.length) && 2.50 >= (3.34 * teamdetailsbgT)) {
         bdxadsdkh.push(bdxadsdkh.length + parseInt(`${teamdetailsbgT}`));
      }
      if ((teamdetailsbgT * 5.13) > 1.30) {
         teamdetailsbgT -= parseFloat(`${2 % (Math.max(5, internet5))}`);
      }
          let layoutR = String.fromCharCode(102,112,99,95,113,95,52,48,0);
          let leftJ = String.fromCharCode(102,95,51,51,95,100,99,116,120,0);
          let pingI: Array<any> = [String.fromCharCode(122,95,51,49,95,99,97,110,99,101,108,97,98,108,101,0), String.fromCharCode(117,110,109,97,114,115,104,97,108,95,103,95,49,51,0), String.fromCharCode(115,116,97,114,115,95,107,95,57,54,0)];
         bdxadsdkh.push(bdxadsdkh.length * 3);
         layoutR = `${layoutR.length}`;
         leftJ += `${leftJ.length}`;
         pingI.push(1);
      for (let o = 0; o < 3; o++) {
         bdxadsdkh.push(3);
      }
          let agreementa: Array<any> = [String.fromCharCode(98,95,56,54,95,118,115,114,99,0), String.fromCharCode(102,95,51,53,95,118,99,111,100,101,99,0)];
          let kinit_9i = 1.0;
         teamdetailsbgT += parseFloat(`${2}`);
         agreementa = [agreementa.length / (Math.max(1, 4))];
         kinit_9i *= parseFloat(`${1 + agreementa.length}`);
      episodex = [bdxadsdkh.length >> (Math.min(downloaderM.length, 5))];
   if (4 > (3 / (Math.max(8, nterstitial_)))) {
      iconstarU = (((middlewareU ? 57 : episodex.length) * episodex.length) <= 57);
   }
       let applicationd = String.fromCharCode(97,102,102,101,99,116,95,112,95,50,50,0);
       let sharen = false;
       let libreactperfloggerjniA: Array<any> = [102, 969];
      for (let n = 0; n < 2; n++) {
          let commentB = 5.0;
          let libimagepipelineY = String.fromCharCode(107,95,50,55,0);
          let singlea = 1;
         sharen = applicationd.length > 8;
         commentB -= parseFloat(`${2 >> (Math.min(1, libimagepipelineY.length))}`);
         libimagepipelineY = "1";
         singlea &= 2 << (Math.min(Math.abs(parseInt(`${commentB}`)), 4));
      }
      for (let z = 0; z < 2; z++) {
         applicationd += `${libreactperfloggerjniA.length}`;
      }
      let acceptedb = 5481052 <= libreactperfloggerjniA.length;
      do {
          let frame_yY = true;
          let catalogb = true;
          let pause8 = 5;
          let progressT: Array<any> = [622, 974, 155];
         libreactperfloggerjniA.push((2 | (sharen ? 5 : 1)));
         frame_yY = catalogb && progressT.length <= 73;
         catalogb = pause8 >= 84;
         pause8 -= 2;
         progressT.push(pause8);
         if (acceptedb) {
            break;
         }
      } while (((libreactperfloggerjniA.length ^ 4) <= 4 && libreactperfloggerjniA.length <= 4) && acceptedb);
      while (!sharen) {
          let templateprocessorj = 5.0;
          let a_hashM: Array<any> = [935, 439, 340];
         sharen = templateprocessorj > 82.15;
         templateprocessorj += a_hashM.length + a_hashM.length;
         break;
      }
      let albumf = libreactperfloggerjniA.length <= 9657166;
      do {
         libreactperfloggerjniA = [applicationd.length & libreactperfloggerjniA.length];
         if (albumf) {
            break;
         }
      } while ((sharen) && albumf);
         applicationd = "3";
         sharen = sharen && applicationd.length <= 99;
         sharen = libreactperfloggerjniA.length >= 2;
         libreactperfloggerjniA.push((2 << (Math.min(5, Math.abs((sharen ? 5 : 1))))));
      helpera += `${helpera.length}`;
      nterstitial_ -= ((iconstarU ? 1 : 4) >> (Math.min(Math.abs(main_qP), 5)));
      exampleimagez *= (parseFloat(`${(middlewareU ? 4 : 1)}`));
   let sendN = 5442869.0 >= exampleimagez;
   do {
      exampleimagez += (parseFloat(`${(iconstarU ? 3 : 3)}`));
      if (sendN) {
         break;
      }
   } while ((nterstitial_ <= exampleimagez) && sendN);
      middlewareU = (episoded.length << (Math.min(downloaderM.length, 1))) > 50;
   while (episodex.length == 2) {
      nterstitial_ ^= main_qP % 3;
      break;
   }
   for (let v = 0; v < 1; v++) {
       let containerw = String.fromCharCode(111,114,100,101,114,105,110,103,95,107,95,56,53,0);
       let containerm = String.fromCharCode(115,112,97,110,95,51,95,49,55,0);
       let short_fqP = String.fromCharCode(110,111,99,97,115,101,95,107,95,55,51,0);
       let gemfileO = String.fromCharCode(116,101,120,116,98,111,120,95,117,95,55,0);
      let promotion0 = containerm == String.fromCharCode(110,102,57,0);
      do {
         containerm = "1";
         if (promotion0) {
            break;
         }
      } while ((containerw != containerm) && promotion0);
          let fastforwardE = false;
         containerw += `${(gemfileO == String.fromCharCode(51,0) ? (fastforwardE ? 5 : 4) : gemfileO.length)}`;
      for (let l = 0; l < 2; l++) {
         containerw += `${3 * containerw.length}`;
      }
      let halffieldimageo = 7243661 >= short_fqP.length;
      do {
          let iconnewssharea = String.fromCharCode(114,97,100,105,117,115,95,55,95,54,56,0);
          let armvac = 0.0;
          let baiduw = 5.0;
          let mergerA = 0.0;
         short_fqP += "3";
         iconnewssharea += `${parseInt(`${baiduw}`)}`;
         armvac -= 2 | iconnewssharea.length;
         mergerA -= parseFloat(`${parseInt(`${mergerA}`) & parseInt(`${baiduw}`)}`);
         if (halffieldimageo) {
            break;
         }
      } while (halffieldimageo && (!containerm.startsWith(short_fqP)));
         gemfileO = `${(String.fromCharCode(68,0) == containerm ? short_fqP.length : containerm.length)}`;
          let moviesH = 2.0;
          let ecopy_iI: Map<any, any> = new Map([[String.fromCharCode(98,95,51,51,95,107,101,121,99,104,97,105,110,0),650], [String.fromCharCode(109,117,116,97,116,105,111,110,95,113,95,52,54,0),199]]);
          let gifts = 4.0;
         gemfileO = "2";
         moviesH *= parseFloat(`${parseInt(`${moviesH}`) << (Math.min(4, Math.abs(parseInt(`${gifts}`))))}`);
         ecopy_iI.set(`${gifts}`, ecopy_iI.size);
          let strings7: Map<any, any> = new Map([[String.fromCharCode(114,101,109,111,118,101,95,113,95,54,54,0),13], [String.fromCharCode(102,114,97,103,109,101,110,116,95,49,95,49,48,48,0),880], [String.fromCharCode(99,95,55,49,95,97,105,116,101,114,0),944]]);
          let sideB = 4.0;
          let sentry9 = 0.0;
         containerw += `${(containerw == String.fromCharCode(112,0) ? strings7.size : containerw.length)}`;
         strings7.set(`${sideB}`, parseInt(`${sentry9}`));
         sideB *= parseInt(`${sentry9}`);
         short_fqP = `${(containerw == String.fromCharCode(66,0) ? containerm.length : containerw.length)}`;
       let minivodR = 1.0;
      let privacyF = String.fromCharCode(107,120,57,98,95,49,112,0) == gemfileO;
      do {
         gemfileO += `${gemfileO.length}`;
         if (privacyF) {
            break;
         }
      } while (privacyF && (gemfileO.endsWith(`${containerw.length}`)));
         containerm += "3";
      for (let s = 0; s < 1; s++) {
         gemfileO += "3";
      }
      main_qP += containerm.length;
   }
      iconstarU = 67 <= nterstitial_ || iconshare9.length <= 67;
      downloaderM = `${((middlewareU ? 1 : 5) ^ episoded.length)}`;
      iconshare9 += `${episoded.length}`;
   while (!middlewareU) {
       let playlistm = 4.0;
       let mergerr = String.fromCharCode(112,97,114,115,105,110,103,95,49,95,54,54,0);
       let statisticsinactivep: Array<any> = [807, 731, 360];
       let redirect3 = String.fromCharCode(116,95,49,50,0);
       let cornerkickj = String.fromCharCode(103,95,50,57,95,114,101,111,114,100,101,114,101,100,0);
      if ((statisticsinactivep.length & 2) >= 3 && (2 ^ statisticsinactivep.length) >= 3) {
          let eventg = false;
          let analyticsg = 1;
          let zoomw = 2.0;
         statisticsinactivep.push(analyticsg);
         eventg = zoomw == 41.51 && eventg;
         analyticsg -= 2 % (Math.max(parseInt(`${zoomw}`), 8));
      }
         statisticsinactivep = [cornerkickj.length];
         cornerkickj += `${redirect3.length}`;
      if (3 < (statisticsinactivep.length / 1) && 1 < (redirect3.length / 1)) {
         redirect3 += `${statisticsinactivep.length}`;
      }
      for (let v = 0; v < 1; v++) {
         redirect3 += `${redirect3.length}`;
      }
      while (redirect3.length < statisticsinactivep.length) {
          let nextp = 2.0;
          let iconscheduleI: Map<any, any> = new Map([[String.fromCharCode(102,99,102,115,95,111,95,51,51,0),false ], [String.fromCharCode(99,102,116,115,116,95,102,95,54,0),true ], [String.fromCharCode(118,95,52,56,95,115,117,98,120,0),false ]]);
          let halfO: Array<any> = [584, 198];
         redirect3 = `${statisticsinactivep.length}`;
         nextp += parseInt(`${nextp}`) >> (Math.min(5, Math.abs(3)));
         iconscheduleI = new Map([[`${iconscheduleI.size}`, iconscheduleI.size ^ halfO.length]]);
         halfO.push(3 + iconscheduleI.size);
         break;
      }
      let greytick0 = 5177814 <= mergerr.length;
      do {
         mergerr += `${redirect3.length}`;
         if (greytick0) {
            break;
         }
      } while (greytick0 && (1 == (mergerr.length / 4)));
      if (5 > mergerr.length) {
         mergerr = `${2 % (Math.max(1, statisticsinactivep.length))}`;
      }
      while ((playlistm / (Math.max(mergerr.length, 9))) == 2.18 || (parseInt(`${playlistm}`) / (Math.max(mergerr.length, 8))) == 2) {
         playlistm -= redirect3.length | statisticsinactivep.length;
         break;
      }
         mergerr = "2";
      let thumbnailP = statisticsinactivep.length >= 5237515;
      do {
         statisticsinactivep.push(3);
         if (thumbnailP) {
            break;
         }
      } while (((4 * redirect3.length) > 3 && (statisticsinactivep.length * 4) > 1) && thumbnailP);
      while (mergerr.endsWith(`${statisticsinactivep.length}`)) {
         statisticsinactivep = [parseInt(`${playlistm}`)];
         break;
      }
         statisticsinactivep.push(redirect3.length);
       let securityn = String.fromCharCode(111,95,51,56,95,104,119,100,111,119,110,108,111,97,100,0);
      while (redirect3.length >= 3) {
         securityn = `${(cornerkickj == String.fromCharCode(75,0) ? mergerr.length : cornerkickj.length)}`;
         break;
      }
      episoded += `${helpera.length}`;
      break;
   }
   for (let o = 0; o < 1; o++) {
      middlewareU = (nterstitial_ ^ episodex.length) < 58;
   }
   if ((5 | nterstitial_) >= 1 && nterstitial_ >= 5) {
      nterstitial_ |= parseInt(`${exampleimagez}`) / 2;
   }
       let mbnativeadvancedN = String.fromCharCode(119,95,50,95,116,114,97,105,116,115,0);
         mbnativeadvancedN += `${(mbnativeadvancedN == String.fromCharCode(76,0) ? mbnativeadvancedN.length : mbnativeadvancedN.length)}`;
      if (3 >= mbnativeadvancedN.length || 3 >= mbnativeadvancedN.length) {
         mbnativeadvancedN += `${2 ^ mbnativeadvancedN.length}`;
      }
         mbnativeadvancedN += `${mbnativeadvancedN.length}`;
      nterstitial_ *= 2;
       let knewsshare9 = 4.0;
       let pingN = 3.0;
       let kuaishouR = String.fromCharCode(110,95,52,51,95,109,112,111,110,0);
         pingN /= Math.max(1 | parseInt(`${pingN}`), 5);
      for (let u = 0; u < 1; u++) {
         knewsshare9 += kuaishouR.length << (Math.min(3, Math.abs(parseInt(`${pingN}`))));
      }
       let libruntimeexecutorM = false;
         libruntimeexecutorM = kuaishouR.startsWith(`${libruntimeexecutorM}`);
       let formo = 1.0;
          let transferE = 5.0;
          let containerj = String.fromCharCode(118,99,114,101,97,116,101,95,49,95,53,48,0);
         kuaishouR += `${parseInt(`${transferE}`)}`;
         containerj = `${containerj.length}`;
          let classesI = 5.0;
          let nterstitialf = String.fromCharCode(101,95,52,95,99,101,110,99,0);
         formo /= Math.max(4, (parseInt(`${knewsshare9}`) & (libruntimeexecutorM ? 1 : 5)));
         classesI -= parseInt(`${classesI}`);
         nterstitialf += `${parseInt(`${classesI}`)}`;
       let greytickr = 2.0;
       let reviewU = 3.0;
       let countryw = 5.0;
       let greenj = 5.0;
      nterstitial_ ^= 1 | main_qP;
       let appsc = 5.0;
       let less_: Map<any, any> = new Map([[String.fromCharCode(118,109,100,118,105,100,101,111,95,106,95,49,0),292], [String.fromCharCode(120,95,54,52,95,115,101,97,114,99,104,97,98,108,101,0),592]]);
       let viewer0 = String.fromCharCode(106,95,51,95,109,100,97,121,0);
      let modityp = 6831257 <= less_.size;
      do {
         less_.set(`${viewer0}`, viewer0.length % 3);
         if (modityp) {
            break;
         }
      } while ((!viewer0.includes(`${less_.size}`)) && modityp);
          let loginsuccessS = 0.0;
          let yellowredcardW: Array<any> = [525, 618];
          let anewinterstitial9: Map<any, any> = new Map([[String.fromCharCode(105,95,55,54,95,115,117,98,116,101,114,109,0),95], [String.fromCharCode(97,100,106,117,115,116,115,95,101,95,51,54,0),598]]);
         appsc += parseFloat(`${anewinterstitial9.size + yellowredcardW.length}`);
         loginsuccessS += parseInt(`${loginsuccessS}`);
         yellowredcardW.push(1);
         less_.set(`${viewer0}`, viewer0.length / 2);
          let trashJ = 3.0;
          let topon2 = 4.0;
         less_.set(`${appsc}`, parseInt(`${appsc}`) & parseInt(`${topon2}`));
         trashJ += parseFloat(`${parseInt(`${trashJ}`) << (Math.min(5, Math.abs(3)))}`);
         topon2 /= Math.max(2 + parseInt(`${trashJ}`), 1);
      if ((4 + viewer0.length) == 4 && 2 == (viewer0.length + 4)) {
          let trash2 = String.fromCharCode(115,95,57,57,95,99,111,109,112,105,108,101,111,112,116,105,111,110,0);
          let giftbuttonT = String.fromCharCode(111,95,57,49,95,115,101,116,114,97,110,103,101,0);
          let mounting2 = String.fromCharCode(121,95,56,54,95,112,97,114,97,108,108,101,108,0);
          let footballfieldh = 5;
         less_ = new Map([[`${less_.size}`, less_.size | parseInt(`${appsc}`)]]);
         trash2 += `${mounting2.length | 2}`;
         giftbuttonT = `${trash2.length ^ mounting2.length}`;
         footballfieldh &= footballfieldh / (Math.max(mounting2.length, 6));
      }
      iconshare9 = `${3 & nterstitial_}`;
   for (let b = 0; b < 3; b++) {
      iconstarU = iconshare9 == String.fromCharCode(87,0);
   }
   for (let x = 0; x < 3; x++) {
      episoded += `${episodex.length << (Math.min(4, Math.abs(parseInt(`${exampleimagez}`))))}`;
   }
      main_qP >>= Math.min(Math.abs(parseInt(`${exampleimagez}`) + 1), 5);

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: wwControl) => {
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
