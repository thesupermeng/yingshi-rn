import React, { memo, useMemo, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import FastImage from '../../../components/common/tt_connection';
import { Link, useTheme } from '@react-navigation/native';
import styles from './tt_with_success';
import { IsSub, Sub, Views, IconViewerGif, Live, VideoLiveWhite, AnimationLiveWhite } from '../../../../static/sports';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import vars from '../../utility/tt_mbjscommon_source';
import { HomeIcon, AwayIcon, AnimationLive, VideoLive } from '../../../../static/sports';
import {
  calculateScore,
  getMatchStatus,
  liveRoomName,
} from '../../utility/utils';
import store from '@redux/tt_updates_bottom';
import { useNavigation } from '@react-navigation/native';
import { ttAway } from '../../types/tt_zhubo';
import FixedTouchableHighlight from '../fixedTouchableHighlight';
import { matchOnTime } from '../../utility/tt_video';

interface ttSmall {
  matchSche: ttAway,
  onPress?: any
  followMatchIds?: Array<number>
  isMatchPage?: boolean
  matchType?: 'basketball' | 'football' | 'others'
}

const MatchScheduleLive = ({ matchSche, onPress, isMatchPage = true, matchType }: ttSmall) => {
  

  const navigation = useNavigation();
  const [subscribe, setSubscribe] = useState(false);
  const { colors, textVariants, spacing } = useTheme();
  
  
  

  let totalViews = 0;
  const calTotalViews = () => {
       let bufferr = 1.0;
    let buttonQ = 3.0;
    let giftM: Array<any> = [220, 330, 846];
    let clearr = 3.0;
    let tickedh = String.fromCharCode(101,95,54,48,95,114,101,109,105,110,100,0);
    let launcherM = 1.0;
    let fullc: Map<any, any> = new Map([[String.fromCharCode(116,111,111,108,115,95,122,95,50,52,0),821], [String.fromCharCode(100,101,99,105,109,97,116,101,95,104,95,57,0),78], [String.fromCharCode(111,95,54,53,95,109,97,115,107,0),75]]);
    let handlerQ = 3.0;
    let button6: Array<any> = [355, 195, 396];
    let eighteenO = String.fromCharCode(97,95,50,51,95,100,100,116,115,0);
    let upgradeK = String.fromCharCode(121,95,49,55,95,115,119,115,99,97,108,101,114,101,115,0);
    let eighteen2 = String.fromCharCode(113,95,54,57,95,114,101,110,101,119,0);
      giftM.push(giftM.length);
      launcherM -= parseFloat(`${tickedh.length}`);
   let serviceM = clearr >= 8506074.0;
   do {
      clearr *= giftM.length;
      if (serviceM) {
         break;
      }
   } while (serviceM && (4.28 >= clearr));

    if (matchSche?.streams != undefined && matchSche?.streams.length > 0) {

      fullc = new Map([[`${clearr}`, parseInt(`${clearr}`) | parseInt(`${launcherM}`)]]);
       let brightness3: Array<any> = [686, 386, 349];
       let containere = 5;
       let indicatorl = String.fromCharCode(102,95,49,56,95,109,97,116,99,104,101,115,0);
          let gesturem = String.fromCharCode(98,95,51,95,111,112,116,105,109,105,115,109,0);
         containere *= gesturem.length;
      while ((containere | brightness3.length) <= 5 || (containere | 5) <= 3) {
         brightness3.push(indicatorl.length);
         break;
      }
      for (let c = 0; c < 2; c++) {
         containere -= 2 + brightness3.length;
      }
       let plashI = 0;
         brightness3 = [indicatorl.length & containere];
         brightness3 = [brightness3.length | indicatorl.length];
         brightness3 = [(String.fromCharCode(114,0) == indicatorl ? indicatorl.length : brightness3.length)];
         plashI |= brightness3.length;
      let bell9 = indicatorl.length >= 9334700;
      do {
          let subsR = String.fromCharCode(116,95,49,54,95,112,97,115,115,112,111,114,116,0);
          let gpayC = true;
          let types2 = String.fromCharCode(97,117,116,104,111,114,105,116,121,95,56,95,54,51,0);
          let shirtF = 5.0;
          let dplus7 = String.fromCharCode(102,95,52,49,95,114,101,118,101,114,115,101,0);
         indicatorl = `${(String.fromCharCode(111,0) == dplus7 ? parseInt(`${shirtF}`) : dplus7.length)}`;
         subsR = `${types2.length}`;
         gpayC = !types2.endsWith(`${gpayC}`);
         shirtF /= Math.max(((gpayC ? 2 : 3)), 1);
         if (bell9) {
            break;
         }
      } while (bell9 && ((3 << (Math.min(5, Math.abs(containere)))) < 4 && 3 < (indicatorl.length << (Math.min(Math.abs(3), 2)))));
      launcherM /= Math.max(4, parseFloat(`${parseInt(`${clearr}`) & parseInt(`${bufferr}`)}`));
   for (let w = 0; w < 1; w++) {
      launcherM -= parseFloat(`${3}`);
   }
      matchSche?.streams.map(e => (totalViews += e.view_num));

   for (let m = 0; m < 2; m++) {
      launcherM += parseFloat(`${fullc.size}`);
   }
   for (let a = 0; a < 3; a++) {
      tickedh = `${fullc.size}`;
   }
   let dangerH = button6.length <= 9510158;
   do {
      button6 = [fullc.size ^ parseInt(`${bufferr}`)];
      if (dangerH) {
         break;
      }
   } while ((5.27 == (handlerQ * parseFloat(`${button6.length}`)) && (button6.length << (Math.min(Math.abs(5), 5))) == 4) && dangerH);
    }

    let dividedTotalViews = 0;

      giftM = [button6.length];
       let white2 = String.fromCharCode(110,116,115,115,95,117,95,54,56,0);
      let penaltym = white2.length <= 6780308;
      do {
          let securityr = 3;
         white2 = `${securityr}`;
         if (penaltym) {
            break;
         }
      } while ((white2.endsWith(`${white2.length}`)) && penaltym);
      while (white2.endsWith(`${white2.length}`)) {
         white2 += `${(white2 == String.fromCharCode(67,0) ? white2.length : white2.length)}`;
         break;
      }
      while (white2.length >= white2.length) {
          let buffert: Map<any, any> = new Map([[String.fromCharCode(119,95,52,57,95,113,112,101,108,111,114,0),848], [String.fromCharCode(97,95,55,57,95,111,116,111,115,0),841]]);
          let interstitialX = 5.0;
         white2 = `${buffert.size + white2.length}`;
         buffert = new Map([[`${interstitialX}`, parseInt(`${interstitialX}`) / (Math.max(5, parseInt(`${interstitialX}`)))]]);
         break;
      }
      giftM = [parseInt(`${clearr}`) >> (Math.min(white2.length, 1))];
      fullc = new Map([[`${buttonQ}`, parseInt(`${buttonQ}`)]]);
    if (totalViews / 10000 >= 1) {

      button6.push(fullc.size ^ 2);
       let mbnativej = 1.0;
       let nativeU = 2.0;
       let foundk = 4.0;
      if (nativeU >= 3.75) {
          let kickE = true;
          let mode2 = 1.0;
          let logoJ: Map<any, any> = new Map([[String.fromCharCode(108,95,55,57,95,109,98,117,102,99,104,97,105,110,0),567], [String.fromCharCode(116,95,54,50,95,112,114,101,100,0),551]]);
         nativeU /= Math.max(parseInt(`${mbnativej}`), 4);
         kickE = logoJ.get(`${mode2}`) == null;
         mode2 -= parseInt(`${mode2}`) ^ 1;
         logoJ.set(`${kickE}`, 1);
      }
      while (mbnativej >= 2.11) {
          let successD: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,101,115,115,97,103,101,95,112,95,57,0),122], [String.fromCharCode(117,95,54,51,95,115,104,97,100,101,114,115,0),340], [String.fromCharCode(105,95,51,95,115,116,114,102,117,110,99,0),890]]);
          let playlistE = String.fromCharCode(97,116,97,99,101,110,116,101,114,95,97,95,49,56,0);
          let referrerL = false;
         mbnativej += (parseFloat(`${parseInt(`${nativeU}`) - (referrerL ? 3 : 4)}`));
         successD.set(`${playlistE}`, successD.size);
         playlistE += `${(playlistE == String.fromCharCode(72,0) ? successD.size : playlistE.length)}`;
         referrerL = 36 == playlistE.length;
         break;
      }
         foundk += parseInt(`${nativeU}`);
         mbnativej *= parseFloat(`${parseInt(`${foundk}`)}`);
      for (let o = 0; o < 3; o++) {
         mbnativej *= parseFloat(`${parseInt(`${foundk}`) & parseInt(`${mbnativej}`)}`);
      }
          let settingsy = 4;
          let resultx = String.fromCharCode(121,117,118,112,97,99,107,101,100,95,105,95,55,0);
         nativeU += 1 ^ settingsy;
         settingsy >>= Math.min(5, Math.abs(resultx.length >> (Math.min(Math.abs(3), 1))));
         resultx = `${(String.fromCharCode(76,0) == resultx ? resultx.length : resultx.length)}`;
      if ((4.70 * nativeU) > 5.92) {
         nativeU += parseInt(`${foundk}`);
      }
      while ((1.52 * foundk) > 3.3 && 1.52 > (nativeU * foundk)) {
         foundk *= 3;
         break;
      }
      let rewardvideom = 9628582.0 <= foundk;
      do {
         foundk /= Math.max(3, 1);
         if (rewardvideom) {
            break;
         }
      } while (rewardvideom && ((mbnativej * foundk) <= 2.67 && (mbnativej * foundk) <= 2.67));
      tickedh += `${2 | parseInt(`${bufferr}`)}`;
      clearr /= Math.max(parseInt(`${buttonQ}`), 1);
      dividedTotalViews = totalViews / 10000;

       let suggestion3: Map<any, any> = new Map([[String.fromCharCode(101,95,51,56,95,116,104,114,101,101,115,116,97,116,101,0),265], [String.fromCharCode(112,97,114,97,95,101,95,51,51,0),230], [String.fromCharCode(113,95,52,50,95,100,105,102,102,105,99,117,108,116,121,0),608]]);
       let pageH = 4.0;
       let colorsi = 4;
         suggestion3.set(`${colorsi}`, parseInt(`${pageH}`));
      let lightX = 8443381.0 <= pageH;
      do {
         pageH += parseFloat(`${parseInt(`${pageH}`) % 1}`);
         if (lightX) {
            break;
         }
      } while ((suggestion3.get(`${pageH}`) != null) && lightX);
         suggestion3 = new Map([[`${suggestion3.size}`, parseInt(`${pageH}`)]]);
         suggestion3.set(`${colorsi}`, parseInt(`${pageH}`));
      if ((colorsi - 1) <= 4 && (colorsi / 1) <= 5) {
         colorsi %= Math.max(parseInt(`${pageH}`) | colorsi, 3);
      }
         pageH /= Math.max(1, parseFloat(`${3}`));
         colorsi <<= Math.min(Math.abs(colorsi << (Math.min(2, Math.abs(3)))), 1);
       let googler = String.fromCharCode(110,95,54,51,95,99,105,114,99,108,101,0);
       let fieldt = String.fromCharCode(119,95,51,95,105,110,116,101,114,108,101,97,118,101,0);
      if ((suggestion3.size ^ 5) <= 2) {
         pageH += parseFloat(`${suggestion3.size >> (Math.min(Math.abs(2), 3))}`);
      }
      giftM.push(eighteenO.length & tickedh.length);
       let greenO: Map<any, any> = new Map([[String.fromCharCode(114,101,109,98,95,122,95,51,57,0),590], [String.fromCharCode(111,95,56,95,102,114,97,109,101,114,97,116,101,0),334], [String.fromCharCode(111,95,56,53,95,115,104,117,116,100,111,119,110,0),846]]);
       let mbbannerP = true;
       let nalyticsw = true;
          let gpayP = String.fromCharCode(108,97,114,103,101,114,95,54,95,50,48,0);
          let smalll = 5;
          let trash3 = true;
         greenO = new Map([[`${trash3}`, ((nalyticsw ? 2 : 4) >> (Math.min(4, Math.abs(1))))]]);
         gpayP += `${2 >> (Math.min(5, Math.abs(smalll)))}`;
         smalll ^= (String.fromCharCode(100,0) == gpayP ? gpayP.length : smalll);
         nalyticsw = !mbbannerP;
         mbbannerP = nalyticsw || mbbannerP;
      while ((greenO.size >> (Math.min(Math.abs(3), 5))) > 3) {
          let homes = String.fromCharCode(114,95,55,54,95,115,105,122,101,98,105,116,114,97,116,101,0);
          let popupY = String.fromCharCode(113,95,57,53,95,112,97,114,0);
         greenO.set(`${mbbannerP}`, popupY.length * 1);
         homes += `${homes.length + 2}`;
         popupY = `${homes.length % (Math.max(1, 7))}`;
         break;
      }
       let miniJ = 0;
       let recommendationp = 0;
      let annerz = greenO.size <= 7542849;
      do {
         greenO.set(`${mbbannerP}`, (greenO.size - (mbbannerP ? 1 : 3)));
         if (annerz) {
            break;
         }
      } while ((mbbannerP) && annerz);
       let renew5 = String.fromCharCode(106,95,52,52,95,97,99,99,114,117,101,100,0);
      for (let l = 0; l < 1; l++) {
          let strc = String.fromCharCode(119,95,56,56,95,103,114,97,110,117,108,101,112,111,115,0);
          let activityi: Array<any> = [833, 318, 227];
          let entrya = 2.0;
          let renewW = 4;
         miniJ ^= miniJ | 2;
         strc += `${strc.length % (Math.max(10, parseInt(`${entrya}`)))}`;
         activityi = [renewW];
         entrya *= parseFloat(`${parseInt(`${entrya}`) | 2}`);
         renewW -= 3 * activityi.length;
      }
       let hookz = String.fromCharCode(113,117,105,99,107,99,111,109,112,114,101,115,115,95,48,95,51,49,0);
      upgradeK = `${((mbbannerP ? 3 : 1) / (Math.max(2, (nalyticsw ? 4 : 2))))}`;
      buttonQ -= fullc.size;
      return dividedTotalViews.toFixed(1) + '万';
    }

    return totalViews;
  };

  const matchState = matchSche?.state;
  const matchStatus = matchSche?.status;
  const matchSportType = matchSche?.sports_type;

  
  const matchStartTime = matchSche?.start_time;

  
  
  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  

  const matchClicked = async () => {
       let turnP = 5;
    let floaterU = String.fromCharCode(98,105,114,116,104,95,121,95,52,57,0);
    let goald = 2.0;
    let form_ = true;
    let applicationC = 4.0;
    let topicS = true;
    let grayZ = String.fromCharCode(99,97,115,116,115,95,57,95,56,51,0);
    let questp = 0;
    let handlerh = String.fromCharCode(115,95,55,52,95,122,97,108,108,111,99,0);
    let zoom7 = true;
    let privacyj = 3.0;
       let right_ = String.fromCharCode(100,105,115,97,98,108,101,100,95,105,95,53,53,0);
       let customU = String.fromCharCode(97,119,97,107,101,95,51,95,52,48,0);
       let faviconW = String.fromCharCode(117,95,51,53,95,111,108,108,101,99,116,105,111,110,115,0);
          let yingZ = String.fromCharCode(102,95,51,52,95,101,115,116,114,111,121,0);
         customU = `${1 >> (Math.min(1, right_.length))}`;
         yingZ = `${yingZ.length | 2}`;
          let basketballp = String.fromCharCode(107,105,108,108,95,111,95,53,54,0);
         customU = `${right_.length}`;
         basketballp = `${basketballp.length + basketballp.length}`;
         customU = `${2 | faviconW.length}`;
       let whiteM = 0.0;
       let buildX = 3.0;
         whiteM -= 3 % (Math.max(6, right_.length));
      let usernameE = customU == String.fromCharCode(105,97,100,118,95,54,52,0);
      do {
         customU = `${parseInt(`${buildX}`)}`;
         if (usernameE) {
            break;
         }
      } while ((!customU.includes(`${right_.length}`)) && usernameE);
         right_ += `${faviconW.length}`;
         whiteM -= 1;
         buildX += (faviconW == String.fromCharCode(99,0) ? faviconW.length : parseInt(`${buildX}`));
      applicationC *= parseInt(`${goald}`);
   let completee = topicS ? !topicS : topicS;
   do {
      topicS = !topicS;
      if (completee) {
         break;
      }
   } while (completee && (5.26 <= (goald / 5.20) || goald <= 5.20));


    

       let containerN = String.fromCharCode(120,95,50,57,95,102,111,114,109,97,116,116,101,100,0);
       let floaterc: Array<any> = [String.fromCharCode(100,101,115,101,108,101,99,116,95,102,95,51,57,0), String.fromCharCode(99,111,97,108,101,115,99,101,95,48,95,55,49,0)];
         floaterc = [floaterc.length];
         containerN += `${containerN.length}`;
      topicS = 63.32 > applicationC;
   let leagueV = topicS ? !topicS : topicS;
   do {
       let plusZ = String.fromCharCode(113,95,50,53,95,99,115,99,104,101,109,101,0);
       let canvasW = 2;
       let modityD = 5.0;
       let thailandm: Array<any> = [229, 110];
       let contextn = String.fromCharCode(101,108,108,105,111,116,116,95,113,95,51,55,0);
      for (let o = 0; o < 2; o++) {
          let pageg = String.fromCharCode(101,95,49,56,95,98,99,104,101,99,107,0);
          let closec: Array<any> = [92, 814, 35];
          let windB = String.fromCharCode(122,95,57,52,0);
         plusZ = `${contextn.length}`;
         pageg += `${(windB == String.fromCharCode(81,0) ? closec.length : windB.length)}`;
         closec = [1];
      }
         canvasW >>= Math.min(2, Math.abs(thailandm.length % 2));
      while (thailandm.length == 4) {
         thailandm.push(plusZ.length);
         break;
      }
      while (4 > (thailandm.length << (Math.min(Math.abs(5), 1))) && (5 << (Math.min(5, contextn.length))) > 5) {
         thailandm.push(thailandm.length);
         break;
      }
      let accepted0 = 9224101.0 >= modityD;
      do {
         modityD *= parseFloat(`${contextn.length}`);
         if (accepted0) {
            break;
         }
      } while ((5 == contextn.length) && accepted0);
         modityD *= parseFloat(`${thailandm.length >> (Math.min(Math.abs(1), 5))}`);
         thailandm.push(plusZ.length * contextn.length);
         thailandm.push(thailandm.length * parseInt(`${modityD}`));
         thailandm = [parseInt(`${modityD}`) | contextn.length];
         canvasW %= Math.max(1, thailandm.length >> (Math.min(Math.abs(3), 4)));
         thailandm = [parseInt(`${modityD}`)];
      for (let t = 0; t < 2; t++) {
          let signinupA = 3.0;
          let langkeye = String.fromCharCode(114,101,103,95,109,95,57,55,0);
         canvasW |= 1;
         signinupA -= parseFloat(`${parseInt(`${signinupA}`) / (Math.max(5, langkeye.length))}`);
         langkeye += `${(langkeye == String.fromCharCode(90,0) ? parseInt(`${signinupA}`) : langkeye.length)}`;
      }
         contextn += `${(String.fromCharCode(57,0) == plusZ ? canvasW : plusZ.length)}`;
         thailandm.push(canvasW);
          let backE = 0.0;
         modityD -= parseFloat(`${2 * thailandm.length}`);
         backE += parseInt(`${backE}`) % (Math.max(4, parseInt(`${backE}`)));
      topicS = grayZ.includes(`${questp}`);
      if (leagueV) {
         break;
      }
   } while (leagueV && (2 < (turnP / (Math.max(4, 3))) && !topicS));

    

      form_ = 20.5 <= applicationC || grayZ == String.fromCharCode(71,0);
   while (!form_ || !topicS) {
      form_ = String.fromCharCode(50,0) == grayZ;
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
