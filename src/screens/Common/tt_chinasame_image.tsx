import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../components/container/tt_backward';
import {RootStackScreenProps} from '@type/tt_temperature';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/tt_spec_download';
import {ttOrange} from '@redux/tt_updates_bottom';

import TitleWithBackButtonHeader from '../../components/header/tt_typing_tail_header';
import {ttExpired, ttStreaming} from '@redux/reducers/tt_configure_injury';
import {removeVodsFromHistory, playVod} from '@redux/actions/tt_activity';
import VodHistoryCard from '../../components/vod/tt_country';
import CheckBoxSelected from '@static/images/historyPlayerFloater.svg';
import CheckBoxUnselected from '@static/images/foundWindRecommendation.svg';
import {ttAppsOther} from '@type/tt_line_borderless';
import {Button} from '@rneui/themed';
import ConfirmationModal from '../../components/modal/tt_styles';
import VodLiveStationListVertical from '../../components/vod/tt_flipper';
import EmptyList from '../../components/common/tt_logo_desc';
import {ScrollView} from 'react-native-gesture-handler';

type ttBing = {
  item: ttExpired;
};
export default ({navigation, route}: RootStackScreenProps<'电视台列表'>) => {
  const {liveStationItemList} = route.params;
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: ttStreaming = useAppSelector(
    ({vodReducer}: ttOrange) => vodReducer,
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<ttAppsOther>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let long_hwA = 0;
    let rewindd: Map<any, any> = new Map([[String.fromCharCode(115,116,114,97,116,101,103,121,95,108,95,54,50,0),114], [String.fromCharCode(103,95,48,95,112,114,101,116,116,121,119,114,105,116,101,114,0),964], [String.fromCharCode(117,110,99,104,101,99,107,101,100,95,101,95,50,0),235]]);
    let smallq = 2.0;
    let hooks8 = false;
    let configureh: Map<any, any> = new Map([[String.fromCharCode(117,95,52,53,95,105,110,99,111,114,114,101,99,116,0),235], [String.fromCharCode(114,95,52,52,95,98,117,99,107,101,116,0),898], [String.fromCharCode(101,100,105,116,95,51,95,53,56,0),398]]);
    let libcrashsdkh = 0;
    let calendarG = 2.0;
    let reactj = true;
    let progressl = true;
    let cataloga = 3;
    let emptyy = 2.0;
      reactj = progressl && 16 <= long_hwA;
   while ((smallq / 4.40) >= 2.72 || (long_hwA / (Math.max(parseInt(`${smallq}`), 1))) >= 3) {
       let animationO = 2.0;
       let leaguem: Array<any> = [422, 951, 481];
       let modalD = String.fromCharCode(121,95,49,57,95,116,111,109,105,99,0);
       let rewardvideof = String.fromCharCode(115,101,108,101,99,116,101,100,95,115,95,56,55,0);
       let crossQ = 0.0;
         leaguem.push(3 * rewardvideof.length);
       let middlewareD = 3.0;
      let flyer0 = String.fromCharCode(120,53,101,53,106,100,113,102,0) == rewardvideof;
      do {
          let adult7 = String.fromCharCode(105,95,53,95,100,105,102,102,105,110,103,0);
          let vignettey = false;
          let stationk = false;
          let vnews3 = 2;
         rewardvideof = "3";
         adult7 += `${adult7.length - vnews3}`;
         vignettey = !vignettey;
         stationk = !stationk || !vignettey;
         vnews3 &= (String.fromCharCode(74,0) == adult7 ? (stationk ? 5 : 3) : adult7.length);
         if (flyer0) {
            break;
         }
      } while ((5 < (2 * rewardvideof.length) || (2 / (Math.max(5, rewardvideof.length))) < 5) && flyer0);
         animationO -= parseFloat(`${2}`);
         middlewareD -= parseFloat(`${modalD.length}`);
         rewardvideof = `${modalD.length % 2}`;
      while (4 <= (parseInt(`${crossQ}`) * rewardvideof.length)) {
          let zoomq = 4.0;
         rewardvideof = `${3 % (Math.max(3, parseInt(`${middlewareD}`)))}`;
         zoomq /= Math.max(4, parseInt(`${zoomq}`));
         break;
      }
         modalD += `${2 ^ modalD.length}`;
      for (let o = 0; o < 2; o++) {
          let zhubox = String.fromCharCode(114,101,99,97,108,99,117,108,97,116,101,95,57,95,50,49,0);
          let xvodX = 3;
          let membershipF: Array<any> = [189, 403, 88];
          let mbridgev: Map<any, any> = new Map([[String.fromCharCode(112,114,111,99,101,101,100,95,110,95,52,48,0),String.fromCharCode(112,101,114,115,105,115,116,101,110,99,101,95,97,95,55,48,0)], [String.fromCharCode(112,97,100,100,101,100,95,112,95,52,55,0),String.fromCharCode(112,97,105,114,119,105,115,101,95,119,95,51,57,0)]]);
         crossQ *= parseFloat(`${2 << (Math.min(3, Math.abs(mbridgev.size)))}`);
         zhubox += `${(zhubox == String.fromCharCode(88,0) ? xvodX : zhubox.length)}`;
         xvodX |= membershipF.length / 3;
         membershipF.push(xvodX * 2);
         mbridgev = new Map([[`${membershipF.length}`, 3]]);
      }
       let about4: Array<any> = [664, 570, 957];
       let lined: Array<any> = [597, 628];
      for (let w = 0; w < 2; w++) {
         crossQ /= Math.max(1, parseFloat(`${parseInt(`${animationO}`) | 3}`));
      }
         middlewareD /= Math.max(parseFloat(`${leaguem.length | lined.length}`), 2);
      while (lined.includes(animationO)) {
         animationO *= parseFloat(`${about4.length}`);
         break;
      }
         about4.push((modalD == String.fromCharCode(83,0) ? lined.length : modalD.length));
         about4.push(leaguem.length * 2);
      long_hwA += parseInt(`${crossQ}`) / (Math.max(3, rewardvideof.length));
      break;
   }
   while ((5.51 * calendarG) >= 4.71 || progressl) {
      calendarG /= Math.max((parseFloat(`${(progressl ? 3 : 5) - (hooks8 ? 5 : 2)}`)), 5);
      break;
   }
      hooks8 = (libcrashsdkh + smallq) >= 33;
   let sendG = libcrashsdkh >= 7600742;
   do {
      libcrashsdkh %= Math.max(((hooks8 ? 4 : 5) - parseInt(`${calendarG}`)), 1);
      if (sendG) {
         break;
      }
   } while ((2 >= (libcrashsdkh << (Math.min(Math.abs(3), 3))) && (3 << (Math.min(1, Math.abs(libcrashsdkh)))) >= 4) && sendG);
       let spece = String.fromCharCode(108,95,50,52,95,99,111,109,112,108,101,109,101,110,116,0);
          let macauv: Array<any> = [220, 627];
          let statisticsM = String.fromCharCode(114,101,110,100,101,114,105,110,103,95,119,95,54,0);
          let downv = 0.0;
         spece += `${macauv.length}`;
         macauv.push(statisticsM.length - 1);
         statisticsM = `${2 >> (Math.min(3, statisticsM.length))}`;
         downv *= parseFloat(`${parseInt(`${downv}`)}`);
       let photoX: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,95,52,95,51,57,0),404], [String.fromCharCode(105,110,99,114,109,101,114,103,101,95,111,95,56,49,0),137]]);
          let buttont = 3.0;
          let nativeQ = true;
         spece = `${3 >> (Math.min(5, Math.abs(photoX.size)))}`;
         buttont /= Math.max((parseFloat(`${(nativeQ ? 2 : 4) / (Math.max(1, parseInt(`${buttont}`)))}`)), 5);
         nativeQ = !nativeQ;
      calendarG /= Math.max(1, parseFloat(`${libcrashsdkh}`));
       let utilsi = String.fromCharCode(102,114,97,99,116,105,111,110,97,108,95,109,95,54,55,0);
       let scorei: Array<any> = [640, 163, 52];
       let routert = false;
         utilsi = `${scorei.length}`;
      for (let j = 0; j < 3; j++) {
          let dycreatorA = String.fromCharCode(105,110,115,116,97,108,108,105,110,103,95,52,95,57,53,0);
         routert = 25 <= scorei.length;
         dycreatorA = `${dycreatorA.length}`;
      }
      while (scorei.length < utilsi.length) {
          let networkF = false;
          let moviesm = String.fromCharCode(115,104,117,102,102,108,101,112,108,97,110,101,115,95,48,95,51,54,0);
          let favoriteF = String.fromCharCode(115,99,117,98,98,101,114,95,56,95,49,48,0);
          let clubP: Map<any, any> = new Map([[String.fromCharCode(120,100,97,105,95,106,95,52,49,0),806], [String.fromCharCode(97,116,111,109,115,95,117,95,49,53,0),981]]);
          let apple0 = 4.0;
         scorei.push(2 << (Math.min(1, Math.abs(clubP.size))));
         networkF = moviesm.startsWith(`${apple0}`);
         moviesm = `${favoriteF.length}`;
         favoriteF += `${(moviesm == String.fromCharCode(116,0) ? moviesm.length : parseInt(`${apple0}`))}`;
         clubP.set(favoriteF, 3);
         break;
      }
      while (!routert) {
         scorei = [1];
         break;
      }
      for (let q = 0; q < 1; q++) {
         routert = ((utilsi.length / (Math.max(2, (!routert ? utilsi.length : 90)))) == 90);
      }
         scorei = [2];
      let viewso = 8584184 >= scorei.length;
      do {
         scorei.push(utilsi.length * scorei.length);
         if (viewso) {
            break;
         }
      } while (viewso && (utilsi.endsWith(`${scorei.length}`)));
         scorei.push(((routert ? 2 : 5) + scorei.length));
      let klevinG = String.fromCharCode(101,115,56,49,51,113,121,51,0) == utilsi;
      do {
         utilsi = `${scorei.length}`;
         if (klevinG) {
            break;
         }
      } while (klevinG && (!routert));
      configureh.set(utilsi, 2);
      rewindd.set(`${smallq}`, libcrashsdkh);
       let suggestion0 = String.fromCharCode(121,95,51,55,95,117,121,118,121,0);
       let upload0 = false;
         suggestion0 = `${1 / (Math.max(7, suggestion0.length))}`;
      if (2 >= suggestion0.length || upload0) {
         suggestion0 += `${((upload0 ? 2 : 4) / (Math.max(1, 9)))}`;
      }
      hooks8 = calendarG >= 95.83;
   for (let f = 0; f < 3; f++) {
       let sheetX = String.fromCharCode(105,95,51,51,95,115,105,108,101,110,116,108,121,0);
       let entryI = String.fromCharCode(98,95,57,51,95,118,111,105,112,0);
       let ajaxK: Map<any, any> = new Map([[String.fromCharCode(105,95,49,54,95,114,101,100,117,110,100,97,110,116,0),352], [String.fromCharCode(107,95,56,53,95,102,105,108,109,0),718], [String.fromCharCode(112,114,105,111,114,105,116,121,113,95,53,95,54,52,0),681]]);
       let launcher8 = 2;
         entryI += `${launcher8}`;
      while (1 > (sheetX.length | ajaxK.size)) {
         ajaxK = new Map([[entryI, (sheetX == String.fromCharCode(83,0) ? sheetX.length : entryI.length)]]);
         break;
      }
      while (sheetX != entryI) {
          let stylea = 4.0;
          let middleware2: Map<any, any> = new Map([[String.fromCharCode(101,110,99,95,119,95,51,54,0),232], [String.fromCharCode(108,95,49,48,95,97,100,115,103,97,115,0),358]]);
          let gifta = String.fromCharCode(104,95,52,51,95,99,100,99,105,0);
          let areai = true;
         entryI += `${((areai ? 5 : 5) << (Math.min(Math.abs(parseInt(`${stylea}`)), 4)))}`;
         stylea /= Math.max(parseFloat(`${middleware2.size & gifta.length}`), 1);
         middleware2 = new Map([[`${middleware2.size}`, (gifta == String.fromCharCode(78,0) ? gifta.length : middleware2.size)]]);
         areai = (middleware2.size & gifta.length) == 93;
         break;
      }
      if (4 == sheetX.length) {
          let videojsZ = false;
          let watchF = String.fromCharCode(109,97,120,107,101,121,115,105,122,101,95,119,95,56,49,0);
          let closei = 0;
          let grey9 = 2;
          let videoz = 3.0;
         sheetX = `${closei}`;
         videojsZ = (watchF.length & grey9) <= 84;
         watchF = `${2 / (Math.max(1, grey9))}`;
         videoz += grey9;
      }
       let componentq: Array<any> = [550, 850];
       let infom: Array<any> = [13, 474];
      for (let k = 0; k < 3; k++) {
         componentq = [componentq.length];
      }
         ajaxK.set(`${launcher8}`, infom.length ^ 3);
      let helperS = String.fromCharCode(49,110,95,114,118,99,97,106,0) == entryI;
      do {
         entryI += `${entryI.length}`;
         if (helperS) {
            break;
         }
      } while (((entryI.length * 2) == 5 && 2 == (entryI.length * launcher8)) && helperS);
      while ((3 ^ infom.length) >= 4 && 3 >= (3 ^ launcher8)) {
         infom = [(sheetX == String.fromCharCode(76,0) ? sheetX.length : launcher8)];
         break;
      }
       let switch_sy = 4.0;
       let membershipy = 4.0;
         launcher8 &= 2 << (Math.min(4, entryI.length));
       let episodesh = String.fromCharCode(116,95,57,57,95,109,105,108,108,105,115,101,99,111,110,100,115,0);
      smallq *= parseFloat(`${libcrashsdkh}`);
   }
      rewindd = new Map([[`${smallq}`, (parseInt(`${smallq}`) & (progressl ? 3 : 2))]]);
      reactj = configureh.size < 86;
   for (let p = 0; p < 2; p++) {
       let toponw: Map<any, any> = new Map([[String.fromCharCode(101,95,49,51,95,114,101,99,101,105,118,101,114,0),956], [String.fromCharCode(97,95,50,49,95,104,97,110,100,0),844]]);
       let favicon7 = 5.0;
       let tick9: Array<any> = [272, 786, 82];
         favicon7 /= Math.max(3, parseFloat(`${2 & toponw.size}`));
      let placeholderW = toponw.size >= 9825991;
      do {
         toponw = new Map([[`${toponw.size}`, toponw.size]]);
         if (placeholderW) {
            break;
         }
      } while (placeholderW && (parseInt(`${favicon7}`) > toponw.size));
       let ucopy_53 = 1.0;
       let borderlessg = 3.0;
         borderlessg -= parseFloat(`${2}`);
      configureh.set(`${progressl}`, 2 & rewindd.size);
   }
      long_hwA <<= Math.min(4, Math.abs(libcrashsdkh << (Math.min(2, Math.abs(2)))));
      rewindd.set(`${long_hwA}`, 1 & long_hwA);
   for (let x = 0; x < 2; x++) {
      hooks8 = rewindd.size < parseInt(`${smallq}`);
   }
   let dataF = 7511819 >= long_hwA;
   do {
      long_hwA >>= Math.min(Math.abs(((reactj ? 3 : 5) | (progressl ? 4 : 1))), 1);
      if (dataF) {
         break;
      }
   } while ((hooks8) && dataF);
      configureh = new Map([[`${smallq}`, (parseInt(`${smallq}`) << (Math.min(5, Math.abs((reactj ? 5 : 1)))))]]);
      smallq -= (parseFloat(`${parseInt(`${smallq}`) + (progressl ? 1 : 5)}`));
       let product6 = 0;
       let r_lockJ = String.fromCharCode(107,109,115,103,114,97,98,95,52,95,55,57,0);
       let vcopy_9F = 2.0;
      let hongkongp = product6 <= 7000713;
      do {
         product6 += 1 >> (Math.min(3, r_lockJ.length));
         if (hongkongp) {
            break;
         }
      } while (hongkongp && (vcopy_9F <= 4.3));
         r_lockJ += "3";
      for (let t = 0; t < 1; t++) {
         r_lockJ += `${product6}`;
      }
       let blackE = 5.0;
       let downloadingm = 3.0;
      let delegate_vi7 = vcopy_9F <= 4913475.0;
      do {
          let sourcep = 5.0;
          let descq: Map<any, any> = new Map([[String.fromCharCode(101,108,105,109,105,110,97,116,105,111,110,95,57,95,56,0),String.fromCharCode(112,111,119,95,114,95,54,0)], [String.fromCharCode(115,104,111,114,116,95,56,95,49,53,0),String.fromCharCode(105,110,118,111,108,118,101,100,95,57,95,54,51,0)]]);
          let t_imageS = 0;
         vcopy_9F -= parseFloat(`${1}`);
         sourcep /= Math.max(1, parseFloat(`${t_imageS}`));
         descq.set(`${sourcep}`, t_imageS);
         if (delegate_vi7) {
            break;
         }
      } while ((vcopy_9F > product6) && delegate_vi7);
         blackE *= parseInt(`${blackE}`);
          let stringsz = 4;
          let grays = false;
          let minivod0 = 4.0;
         vcopy_9F += parseFloat(`${3}`);
         stringsz %= Math.max(1, stringsz & 2);
         grays = 79.20 >= minivod0;
         minivod0 *= (parseFloat(`${(grays ? 3 : 3) - stringsz}`));
      let previewL = String.fromCharCode(98,103,107,122,118,102,107,122,0) == r_lockJ;
      do {
         r_lockJ = "2";
         if (previewL) {
            break;
         }
      } while (((product6 ^ r_lockJ.length) < 4 || (product6 ^ r_lockJ.length) < 4) && previewL);
         vcopy_9F -= parseFloat(`${3 | parseInt(`${vcopy_9F}`)}`);
      long_hwA /= Math.max(3, (r_lockJ == String.fromCharCode(48,0) ? r_lockJ.length : rewindd.size));

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: ttAppsOther) => {
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
