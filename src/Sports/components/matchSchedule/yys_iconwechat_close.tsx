import React, { memo, useMemo, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import FastImage from '../../../components/common/yys_alert_backwhite';
import { Link, useTheme } from '@react-navigation/native';
import styles from './yys_nbatrophy';
import { IsSub, Sub, Views, IconViewerGif, Live, VideoLiveWhite, AnimationLiveWhite } from '../../assets';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import vars from '../../utility/yys_videovar';
import { HomeIcon, AwayIcon, AnimationLive, VideoLive } from '../../assets';
import {
  calculateScore,
  getMatchStatus,
  liveRoomName,
} from '../../utility/utils';
import { store } from '@redux';
import { useNavigation } from '@react-navigation/native';
import { yysFavoriteNetwork } from '../../types/yys_history_plash';
import FixedTouchableHighlight from '../fixedTouchableHighlight';
import { matchOnTime } from '../../utility/yys_user';

interface yysIconarrowrightorangeStation {
  matchSche: yysFavoriteNetwork,
  onPress?: any
  followMatchIds?: Array<number>
  isMatchPage?: boolean
  matchType?: 'basketball' | 'football' | 'others'
}

const MatchScheduleLive = ({ matchSche, onPress, isMatchPage = true, matchType }: yysIconarrowrightorangeStation) => {
  

  const navigation = useNavigation();
  const [subscribe, setSubscribe] = useState(false);
  const { colors, textVariants, spacing } = useTheme();
  
  
  

  let totalViews = 0;
  const calTotalViews = () => {
       let redgoalF = 1;
    let blackB = String.fromCharCode(119,95,56,49,95,98,108,101,110,100,109,111,100,101,0);
    let tickr = 1.0;
    let langkeyp: Array<any> = [String.fromCharCode(115,99,97,108,101,109,111,100,101,95,102,95,50,0), String.fromCharCode(105,112,113,102,95,112,95,50,57,0), String.fromCharCode(118,95,50,53,95,122,111,111,109,0)];
    let backgroundP: Array<any> = [String.fromCharCode(110,95,52,95,112,101,114,115,111,110,115,0), String.fromCharCode(99,104,97,105,110,105,100,95,103,95,50,57,0)];
    let basketballhometeamN = String.fromCharCode(120,95,57,50,95,115,97,109,112,108,101,115,0);
    let paginationG: Array<any> = [423, 243, 126];
    let iconmoreD = 5.0;
    let manifestr = String.fromCharCode(105,110,116,101,114,110,101,100,95,104,95,53,54,0);
    let manifestY = 3.0;
    let halfe = String.fromCharCode(111,95,54,51,95,98,117,116,116,111,110,115,0);
    let disconnectedc = 2.0;
      manifestr = `${paginationG.length}`;
      backgroundP.push(langkeyp.length);
   let bingC = 6087823 <= blackB.length;
   do {
      blackB = `${blackB.length}`;
      if (bingC) {
         break;
      }
   } while ((3 < (1 * backgroundP.length) || 1 < (backgroundP.length * blackB.length)) && bingC);
   while (2 == (paginationG.length / (Math.max(basketballhometeamN.length, 5)))) {
       let layoutv = 5;
       let combineQ = 3.0;
       let combineA = true;
       let related7 = String.fromCharCode(115,95,53,54,95,112,114,111,103,114,101,115,115,0);
       let filledw = String.fromCharCode(108,95,57,50,95,115,101,101,107,97,98,108,101,0);
          let floater8 = 5.0;
          let defaultroombgO = String.fromCharCode(106,95,55,56,95,98,97,99,107,101,110,100,0);
         combineA = filledw.length <= combineQ;
         floater8 += defaultroombgO.length | 3;
         defaultroombgO += "1";
         filledw += `${related7.length + 3}`;
         combineA = (91 >= ((!combineA ? filledw.length : 91) % (Math.max(filledw.length, 8))));
      for (let l = 0; l < 2; l++) {
          let inouttargetred0: Array<any> = [310, 912, 317];
          let arrowupe = String.fromCharCode(102,105,108,101,110,97,109,101,115,95,49,95,53,51,0);
         layoutv *= related7.length;
         inouttargetred0.push(arrowupe.length);
         arrowupe = `${2 * arrowupe.length}`;
      }
         layoutv <<= Math.min(5, Math.abs(parseInt(`${combineQ}`) & 1));
          let subsv = false;
          let resendj = String.fromCharCode(98,108,111,99,107,105,110,101,115,115,95,122,95,55,57,0);
         combineA = 16 > resendj.length && combineQ > 33.31;
         subsv = !subsv || subsv;
         resendj = `${((subsv ? 2 : 4) ^ (subsv ? 1 : 5))}`;
      while (3.74 <= (3.68 - combineQ)) {
         combineQ *= related7.length - 1;
         break;
      }
      let robotoX = String.fromCharCode(104,57,117,0) == related7;
      do {
         related7 = `${filledw.length - layoutv}`;
         if (robotoX) {
            break;
         }
      } while (robotoX && (!related7.endsWith(`${layoutv}`)));
      for (let k = 0; k < 1; k++) {
         related7 += `${layoutv * 2}`;
      }
         filledw += `${layoutv / 1}`;
      let assisti = related7 == String.fromCharCode(108,118,116,50,120,0);
      do {
         related7 = `${1 - parseInt(`${combineQ}`)}`;
         if (assisti) {
            break;
         }
      } while ((4 >= (layoutv / 1) && 1 >= (layoutv / 1)) && assisti);
         layoutv <<= Math.min(2, Math.abs(layoutv));
      if (related7.length > 3) {
         related7 = `${related7.length}`;
      }
      let javai = related7 == String.fromCharCode(57,52,121,55,105,0);
      do {
         related7 = `${filledw.length}`;
         if (javai) {
            break;
         }
      } while (javai && (related7.length == filledw.length));
      while (filledw == related7) {
          let livesharee: Array<any> = [32, 95];
          let smallsoundH = String.fromCharCode(106,115,105,109,100,100,99,116,95,115,95,51,51,0);
         related7 += `${smallsoundH.length}`;
         livesharee = [livesharee.length & 3];
         smallsoundH = `${livesharee.length & livesharee.length}`;
         break;
      }
      paginationG.push(parseInt(`${tickr}`) & parseInt(`${combineQ}`));
      break;
   }

    if (matchSche?.streams != undefined && matchSche?.streams.length > 0) {

       let step8 = String.fromCharCode(105,110,115,116,97,110,116,105,97,116,105,111,110,95,56,95,49,48,0);
          let uinit_n_ = String.fromCharCode(115,95,51,55,95,100,110,115,110,97,109,101,0);
          let libjsinspector_ = String.fromCharCode(119,95,51,53,95,118,97,108,105,100,97,116,105,110,103,0);
         step8 += `${libjsinspector_.length + step8.length}`;
         uinit_n_ = `${1 ^ uinit_n_.length}`;
         libjsinspector_ += `${uinit_n_.length % (Math.max(2, 8))}`;
      if (step8.length == step8.length) {
         step8 += `${step8.length}`;
      }
      if (!step8.endsWith(step8)) {
         step8 = `${step8.length}`;
      }
      tickr /= Math.max(parseInt(`${manifestY}`) >> (Math.min(paginationG.length, 5)), 4);
      blackB += `${redgoalF | backgroundP.length}`;
   let modelsy = 5190579 >= paginationG.length;
   do {
       let upgrade1 = false;
      while (!upgrade1) {
          let audienceQ = true;
          let smallsound1 = true;
          let baiduadsu = String.fromCharCode(100,95,53,52,0);
          let sportU = true;
          let photoh = 3;
         upgrade1 = (audienceQ ? !smallsound1 : !audienceQ);
         smallsound1 = !baiduadsu.startsWith(`${sportU}`);
         baiduadsu += "1";
         photoh |= (baiduadsu == String.fromCharCode(117,0) ? baiduadsu.length : (sportU ? 5 : 5));
         break;
      }
         upgrade1 = (!upgrade1 ? !upgrade1 : upgrade1);
      if (!upgrade1) {
         upgrade1 = !upgrade1 || !upgrade1;
      }
      paginationG.push(3 % (Math.max(redgoalF, 4)));
      if (modelsy) {
         break;
      }
   } while (modelsy && (!paginationG.includes(redgoalF)));
       let episodeT: Array<any> = [375, 267, 862];
      while (2 <= (episodeT.length / (Math.max(1, 9))) || (episodeT.length / (Math.max(episodeT.length, 10))) <= 1) {
         episodeT = [episodeT.length % (Math.max(1, 8))];
         break;
      }
      while (episodeT.includes(episodeT.length)) {
          let loadingw = 5;
          let bgvipsportX = String.fromCharCode(100,115,100,112,99,109,95,118,95,52,53,0);
          let sportsc: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,102,117,108,95,105,95,54,55,0),122], [String.fromCharCode(114,101,109,111,118,101,95,114,95,56,48,0),978]]);
          let iconcurrentmatcht = String.fromCharCode(100,95,57,51,95,100,121,110,97,109,105,99,0);
          let mapbuffery = String.fromCharCode(99,111,108,99,111,108,95,100,95,51,52,0);
         episodeT = [iconcurrentmatcht.length - episodeT.length];
         loadingw >>= Math.min(Math.abs(1 + sportsc.size), 3);
         bgvipsportX += "1";
         sportsc = new Map([[`${sportsc.size}`, 1]]);
         iconcurrentmatcht += "2";
         mapbuffery += `${mapbuffery.length ^ bgvipsportX.length}`;
         break;
      }
      if ((episodeT.length * 2) <= 2 && (episodeT.length * 2) <= 3) {
         episodeT.push(episodeT.length << (Math.min(episodeT.length, 4)));
      }
      paginationG.push(episodeT.length * 3);
      matchSche?.streams.map(e => (totalViews += e.view_num));

   while (langkeyp.includes(redgoalF)) {
      redgoalF %= Math.max(5, redgoalF / 3);
      break;
   }
      paginationG.push((String.fromCharCode(119,0) == manifestr ? manifestr.length : parseInt(`${manifestY}`)));
      manifestY += parseFloat(`${parseInt(`${manifestY}`)}`);
   for (let a = 0; a < 3; a++) {
      tickr += 1 ^ redgoalF;
   }
    }

    let dividedTotalViews = 0;

      iconmoreD -= basketballhometeamN.length >> (Math.min(Math.abs(3), 3));
   for (let m = 0; m < 1; m++) {
      manifestr += `${langkeyp.length + 3}`;
   }
       let profilee: Array<any> = [605, 217];
      for (let w = 0; w < 1; w++) {
         profilee = [profilee.length];
      }
          let libnmss = String.fromCharCode(107,95,49,53,0);
          let libyoga_: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,116,97,98,95,122,95,50,51,0),false ], [String.fromCharCode(105,110,102,101,114,101,100,95,56,95,51,52,0),true ], [String.fromCharCode(122,95,53,49,95,101,120,99,101,101,100,0),false ]]);
         profilee.push(1);
         libnmss = `${libnmss.length}`;
         libyoga_.set(libnmss, libyoga_.size ^ libnmss.length);
         profilee.push(profilee.length);
      blackB = `${3 | redgoalF}`;
   if (5.82 > (iconmoreD + 1.67) && 1.67 > (tickr / (Math.max(3, iconmoreD)))) {
      iconmoreD /= Math.max(1, redgoalF << (Math.min(Math.abs(parseInt(`${iconmoreD}`)), 4)));
   }
    if (totalViews / 10000 >= 1) {

      tickr -= 3;
      backgroundP.push(redgoalF);
      redgoalF &= halfe.length / 2;
       let sellq = 1.0;
       let template_ur = 1.0;
         sellq -= parseInt(`${sellq}`) * 2;
      let emptyG = sellq <= 8888075.0;
      do {
         sellq *= parseInt(`${template_ur}`) & parseInt(`${sellq}`);
         if (emptyG) {
            break;
         }
      } while (emptyG && (4.59 <= (sellq + template_ur)));
          let mutedj = 1.0;
          let iconchatsendl = String.fromCharCode(109,97,116,104,101,109,97,116,105,99,115,95,54,95,53,57,0);
          let questf: Array<any> = [String.fromCharCode(110,117,108,108,95,105,95,49,48,0), String.fromCharCode(99,95,56,57,95,112,97,105,114,0)];
         sellq *= parseInt(`${template_ur}`);
         mutedj += iconchatsendl.length >> (Math.min(Math.abs(3), 2));
         iconchatsendl += `${parseInt(`${mutedj}`)}`;
         questf.push(3 & iconchatsendl.length);
          let historyZ = String.fromCharCode(115,95,57,57,95,110,111,110,110,111,114,109,97,116,105,118,101,0);
         sellq -= 2;
         historyZ += "1";
          let awayK = true;
         sellq -= (parseInt(`${template_ur}`) + (awayK ? 5 : 1));
         sellq += parseInt(`${template_ur}`);
      halfe += `${halfe.length | backgroundP.length}`;
      dividedTotalViews = totalViews / 10000;

      paginationG = [parseInt(`${iconmoreD}`)];
       let settingq = String.fromCharCode(121,95,57,53,95,114,117,110,108,111,111,112,0);
       let traminiO = String.fromCharCode(107,95,57,56,95,115,101,116,0);
      for (let q = 0; q < 3; q++) {
         traminiO += `${2 >> (Math.min(3, traminiO.length))}`;
      }
         traminiO = `${traminiO.length}`;
         traminiO = `${(String.fromCharCode(107,0) == settingq ? traminiO.length : settingq.length)}`;
      for (let k = 0; k < 1; k++) {
         settingq += `${(traminiO == String.fromCharCode(82,0) ? traminiO.length : settingq.length)}`;
      }
      let expandR = String.fromCharCode(49,56,104,0) == traminiO;
      do {
          let pingq = String.fromCharCode(113,95,55,55,95,99,104,111,111,115,105,110,103,0);
         traminiO += `${pingq.length % 2}`;
         if (expandR) {
            break;
         }
      } while ((settingq == traminiO) && expandR);
         settingq += `${settingq.length * traminiO.length}`;
      redgoalF %= Math.max(3, parseInt(`${manifestY}`) - 2);
      blackB += `${basketballhometeamN.length}`;
      basketballhometeamN = `${blackB.length << (Math.min(Math.abs(2), 4))}`;
      return dividedTotalViews.toFixed(1) + '万';
    }

    return totalViews;
  };

  const matchState = matchSche?.state;
  const matchStatus = matchSche?.status;
  const matchSportType = matchSche?.sports_type;

  
  const matchStartTime = matchSche?.start_time;

  
  
  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  

  const matchClicked = async () => {
       let policyC = 2;
    let u_position_ = String.fromCharCode(117,114,105,95,119,95,49,52,0);
    let uimanagery = 0;
    let moviest = String.fromCharCode(115,97,100,120,120,95,112,95,52,0);
    let nalyticsN = String.fromCharCode(102,95,57,51,95,97,114,99,104,105,118,101,100,0);
    let tumbnail4 = true;
    let show4 = false;
    let iconsharefriendsD = false;
    let memberw = true;
    let neonA = true;
    let eactR: Array<any> = [724, 699, 196];
    let basketballiconW: Map<any, any> = new Map([[String.fromCharCode(99,97,114,100,115,95,121,95,57,57,0),true ], [String.fromCharCode(100,105,99,116,95,105,95,57,53,0),true ]]);
      policyC >>= Math.min(Math.abs(((show4 ? 1 : 1))), 4);
   let movies7 = 5982655 >= moviest.length;
   do {
      moviest += "1";
      if (movies7) {
         break;
      }
   } while ((!moviest.startsWith(`${iconsharefriendsD}`)) && movies7);
   let s_lock2 = moviest == String.fromCharCode(104,98,55,0);
   do {
      moviest = "2";
      if (s_lock2) {
         break;
      }
   } while ((1 < (uimanagery % 3) && 3 < (moviest.length % (Math.max(4, uimanagery)))) && s_lock2);


    

   while (!tumbnail4 || moviest.length == 4) {
       let successD = String.fromCharCode(99,114,111,115,115,98,97,114,95,113,95,57,50,0);
       let modityW: Array<any> = [598, 3, 988];
       let componentsc: Map<any, any> = new Map([[String.fromCharCode(105,109,97,103,101,95,51,95,57,51,0),211], [String.fromCharCode(121,95,54,51,95,101,115,101,110,100,0),546], [String.fromCharCode(105,95,52,52,95,109,117,108,116,105,115,116,101,112,0),159]]);
       let regengv = 4;
      for (let d = 0; d < 1; d++) {
         modityW.push(componentsc.size - modityW.length);
      }
       let targetJ = String.fromCharCode(112,95,55,48,0);
       let iconchatsendS = String.fromCharCode(114,95,49,49,95,110,105,108,0);
         iconchatsendS = `${modityW.length}`;
       let filled8 = 2.0;
         iconchatsendS = `${modityW.length >> (Math.min(Math.abs(1), 2))}`;
       let mappingU: Map<any, any> = new Map([[String.fromCharCode(109,95,51,55,95,99,111,109,112,97,110,121,0),String.fromCharCode(109,95,49,48,95,109,105,115,109,97,116,99,104,0)], [String.fromCharCode(118,95,52,56,95,118,97,114,105,97,116,105,111,110,0),String.fromCharCode(121,95,55,56,95,109,121,114,110,100,0)]]);
          let matchesM = 3;
          let statisticsactive6 = String.fromCharCode(100,101,115,99,114,95,105,95,55,50,0);
          let basketballawayteam2 = 0.0;
         successD = `${2 << (Math.min(2, Math.abs(regengv)))}`;
         matchesM %= Math.max((statisticsactive6 == String.fromCharCode(50,0) ? statisticsactive6.length : parseInt(`${basketballawayteam2}`)), 5);
         basketballawayteam2 -= (parseFloat(`${statisticsactive6 == String.fromCharCode(82,0) ? parseInt(`${basketballawayteam2}`) : statisticsactive6.length}`));
         filled8 *= 2 | componentsc.size;
      for (let l = 0; l < 2; l++) {
         successD += `${successD.length}`;
      }
      let subbasketballplayerY = 9431977 <= regengv;
      do {
         regengv += 3;
         if (subbasketballplayerY) {
            break;
         }
      } while (subbasketballplayerY && (3 < regengv));
      if (5 >= (successD.length * modityW.length)) {
          let foundB: Array<any> = [723, 549, 570];
          let libreactV = 0;
          let graphb: Array<any> = [785, 204, 136];
          let penaltyo = 5.0;
          let heartQ = 4.0;
         modityW.push(modityW.length - 1);
         foundB = [parseInt(`${penaltyo}`) % (Math.max(parseInt(`${heartQ}`), 6))];
         libreactV |= foundB.length;
         graphb = [2];
         penaltyo *= parseFloat(`${libreactV - graphb.length}`);
         heartQ /= Math.max(4, parseInt(`${penaltyo}`) - parseInt(`${heartQ}`));
      }
      while ((mappingU.size % 2) <= 1) {
         mappingU.set(`${filled8}`, 1 / (Math.max(3, componentsc.size)));
         break;
      }
      tumbnail4 = !show4;
      break;
   }
      nalyticsN += "3";
   if (show4) {
      show4 = nalyticsN.length == 68 || iconsharefriendsD;
   }

    

       let iconarrowrightt = String.fromCharCode(100,105,102,102,97,98,108,101,95,100,95,54,52,0);
       let const_8Y = 5.0;
      if (1 == (parseInt(`${const_8Y}`) - iconarrowrightt.length) && 1 == (iconarrowrightt.length - parseInt(`${const_8Y}`))) {
         iconarrowrightt += `${parseInt(`${const_8Y}`)}`;
      }
      for (let i = 0; i < 2; i++) {
          let java5 = String.fromCharCode(113,95,54,54,95,118,111,114,98,105,115,0);
         const_8Y -= (iconarrowrightt == String.fromCharCode(112,0) ? parseInt(`${const_8Y}`) : iconarrowrightt.length);
         java5 += `${java5.length}`;
      }
         const_8Y -= (String.fromCharCode(68,0) == iconarrowrightt ? parseInt(`${const_8Y}`) : iconarrowrightt.length);
         const_8Y *= iconarrowrightt.length % 3;
      for (let t = 0; t < 1; t++) {
         iconarrowrightt += `${1 * iconarrowrightt.length}`;
      }
         iconarrowrightt = `${iconarrowrightt.length / (Math.max(1, 3))}`;
      policyC %= Math.max(2, 2);
   let eactg = neonA ? !neonA : neonA;
   do {
      neonA = neonA || uimanagery < 15;
      if (eactg) {
         break;
      }
   } while ((!memberw) && eactg);
   while (5 >= (uimanagery | 5) || uimanagery >= 5) {
      memberw = nalyticsN.length < 32;
      break;
   }
    let route: '体育详情' | '足球详情' | '篮球详情' = '体育详情';
    if (matchType === 'football') {
      route = '足球详情';
    } else if (matchType === 'basketball') {
      route = '篮球详情'
    }
    navigation.navigate('体育详情', {
      matchId: matchSche?.id === null ? undefined : matchSche.id,
      streamerId:
        matchSche?.streams?.length > 0
          ? matchSche?.streams[0]?.streamer_id
          : undefined,
      sportType: '足球'
    });
  }



  
  
  
  
  
  
  
  
  
  //         matchSche?.streams?.length > 0
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  //     const onlineStreamer = match?.streams?.findIndex(e => e.status == 3);
  
  
  
  
  
  
  
  
  
  
  

  
  //   const onlineStreamer = matchSche?.streams?.findIndex(e => e.status == 3);
  
  
  
  
  
  

  return (
    <FixedTouchableHighlight onPress={matchClicked} >
      <View style={styles.live}>
        <View style={styles.verticalBar}></View>
        <View style={{
          height: 90, display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 16,
          paddingRight: 16
        }}>
          <View style={styles.liveContent}>
            <View>
              {matchSche?.streams != undefined &&
                matchSche?.streams?.length > 0 &&
                matchSche?.streams?.some(streamer => streamer.status == 3) && (
                  <View>
                    {
                      matchSche?.status === 1
                        ?
                        <View style={styles.pill}>
                          <FastImage style={{
                            width: 20,
                            height: 20,
                          }} source={Live} />
                          <Text style={{ ...textVariants.subBody, color: colors.primary }}>
                            {
                              matchOnTime(
                                matchStartTime,
                                matchSportType,
                                matchStatus,
                                matchState,
                              )
                            }
                          </Text>
                        </View>
                        :
                        <View style={styles.schedule}>
                          <Text style={{ color: colors.muted, textAlign: 'center' }}>
                            {matchSche?.competition?.name_short}
                          </Text>
                          <Text style={{ ...textVariants.small, color: colors.muted, textAlign: 'center' }}>
                            {('0' + new Date(matchSche?.match_time_ts).getHours()).slice(-2) +
                              ':' +
                              ('0' + new Date(matchSche?.match_time).getMinutes()).slice(-2)}
                          </Text>
                        </View>
                    }
                  </View>
                )}
            </View>
            <View style={{ gap: 8 }}>
              <View style={{ ...styles.teamContentB, gap: 10, width: 150 }}>
                {matchSche?.home?.icon != undefined &&
                  matchSche?.home?.icon.length > 0 ? (
                  <FastImage
                    style={styles.teamImage}
                    source={{ uri: matchSche?.home?.icon }}
                  />
                ) : (
                  <ImageBackground style={styles.teamImage} source={HomeIcon}>
                    <Text style={styles.teamLogoText}>
                      {matchSche?.home?.name.charAt(0)}
                    </Text>
                  </ImageBackground>
                )}
                <Text
                  style={{ ...textVariants.small, flexShrink: 1 }}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}>
                  {matchSche.home?.name}
                </Text>
              </View>
              <View style={{ ...styles.teamContentB, gap: 10, width: 150 }}>
                {matchSche?.away?.icon != undefined &&
                  matchSche?.away?.icon.length > 0 ? (
                  <FastImage
                    style={styles.teamImage}
                    source={{ uri: matchSche?.away?.icon }}
                  />
                ) : (
                  <ImageBackground style={styles.teamImage} source={AwayIcon}>
                    <Text style={styles.teamLogoText}>
                      {matchSche?.away?.name.charAt(0)}
                    </Text>
                  </ImageBackground>
                )}
                <Text style={{ ...textVariants.small, flexShrink: 1 }} numberOfLines={1}>
                  {matchSche?.away?.name}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.liveContent}>
            {
              matchSche.status === 1
                ? <>
                  <View>
                    <Text
                      style={
                        calculateScore(
                          matchSche?.home_score,
                          matchSche?.sports_type,
                        ) >
                          calculateScore(
                            matchSche?.away_score,
                            matchSche?.sports_type,
                          )
                          ? { ...styles.highScoreFont, color: colors.primary, fontFamily: '045-SSYiFeiTi' }
                          : { ...styles.scoreFont, fontFamily: '045-SSYiFeiTi' }
                      }>
                      {calculateScore(
                        matchSche?.home_score,
                        matchSche?.sports_type,
                      )}
                    </Text>
                    <Text
                      style={
                        calculateScore(
                          matchSche?.away_score,
                          matchSche?.sports_type,
                        ) >
                          calculateScore(
                            matchSche?.home_score,
                            matchSche?.sports_type,
                          )
                          ? { ...styles.highScoreFont, color: colors.primary, fontFamily: '045-SSYiFeiTi' }
                          : { ...styles.scoreFont, fontFamily: '045-SSYiFeiTi' }
                      }>
                      {calculateScore(
                        matchSche?.away_score,
                        matchSche?.sports_type,
                      )}
                    </Text>
                  </View>
                  <View style={{ gap: 8 }}>
                    {isMatchPage === true &&
                      matchSche?.streams != undefined &&
                      matchSche?.streams.length > 0 &&
                      matchSche?.streams?.some(streamer => streamer.status == 3) && (
                        <FastImage style={{ height: 22, width: 22 }} source={VideoLiveWhite} resizeMode='contain' />
                      )}
                    {isMatchPage === true && matchSche?.mlive == 1 && (
                      <FastImage style={{ height: 22, width: 22 }} resizeMode='contain' source={AnimationLiveWhite} />
                    )}
                  </View>
                </>
                : <Text style={{ ...textVariants.subBody }}>
                  {
                    matchOnTime(
                      matchStartTime,
                      matchSportType,
                      matchStatus,
                      matchState,
                    )
                  }
                </Text>
            }
          </View>
        </View>
      </View>
    </FixedTouchableHighlight>
  )

};

export default memo(MatchScheduleLive);
