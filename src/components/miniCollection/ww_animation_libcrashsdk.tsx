

class IconsettingTooltips {
    static qcopy_qmVideocommonMini = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '@hooks/ww_catagory_neon';
import {
  selectMiniVodCollection,
  setFromMiniVodCollection,
} from '@redux/actions/ww_bell';
import { wwProfileframe } from '@redux/reducers/ww_nalytics_subbasketballplayer';
import { wwEighteenShirt } from '@redux/ww_small';
import {
  wwIconfeedbackItem,
} from '@type/ww_dycreator_result';
import { API_DOMAIN } from '@utility/ww_icon';
import { getMinuteSecond } from '@utility/ww_whitetick_iconshare';
import BottomSheet from '../bottomSheet/ww_questicon_shielddone';
import { wwLaunch } from '@api';

interface wwIndexDice {
  isVisible?: boolean;
  handleClose?: () => any;
  collectionId: number;
  collectionVideoList?: any;
  collectionVideoId?: number;
  collectionName?: string;
  changeEpisode: any;
  currentVodIndex?: number;
  changeCurrentVodIndex?: any;
}

const loadingSpinnerGif = require('@static/images/runtimeschedulerPromotion.gif');

function CollectionBottomSheet({
  isVisible = false,
  handleClose,
  collectionName,
  collectionVideoId = 0,
  collectionId,
  changeEpisode,
  currentVodIndex = 0,
}: wwIndexDice) {
  const scrollRef = useRef<any>();
  const miniVodReducer: wwProfileframe = useAppSelector(
    ({ miniVodReducer }: wwEighteenShirt) => miniVodReducer,
  );

  const dispatch = useAppDispatch();
  const [enabledUseQuery, setEnabledUseQuery] = useState(false);
  const [totalCollectionEpisodes, setTotalCollectionEpisodes] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setEnabledUseQuery(true);
    } else {
      setEnabledUseQuery(false);
    }
  }, [isVisible]);

  const {
    isLoading,
    isError,
    error,
    data: collectionData,
    isFetching,
    isPreviousData,
  } = useQuery(
    ['collection', collectionId],
    () => wwLaunch.getRecommendations(collectionVideoId),
    {
      enabled: enabledUseQuery,
    },
  );

  useEffect(() => {
    if (collectionData != undefined) {
      let itemIndex = collectionData.findIndex(obj => {
        return obj.mini_video_id === collectionVideoId;
      });

      if (itemIndex < 0 || itemIndex == undefined) {
        itemIndex = -1;
      }

      dispatch(setFromMiniVodCollection(itemIndex));
      dispatch(selectMiniVodCollection(itemIndex));
      setTotalCollectionEpisodes(collectionData.length);
      if (scrollRef) {
        scrollRef?.current?.scrollTo({ y: itemIndex * 130, animated: true });
      }
    }
  }, [collectionData]);

  const { colors, textVariants, spacing } = useTheme();

  const handleSheetChanges = () => {
       let materialr = String.fromCharCode(117,95,56,50,95,105,110,103,101,116,97,100,100,114,0);
    let baseliner = 2.0;
    let iconwechat0 = 5.0;
    let downloaderJ = String.fromCharCode(109,117,116,97,116,101,0);
    let controlsP = String.fromCharCode(100,111,99,117,109,101,110,116,115,0);
    let phonec = false;
    let roomS = 1.0;
    let networkW = 2.0;
    let o_centerT = 0.0;
    let profileframe0 = String.fromCharCode(98,105,116,114,101,97,100,101,114,0);
    let sideh = 1.0;
    let referrerN: Map<any, any> = new Map([[String.fromCharCode(117,110,112,114,111,99,101,115,115,101,100,0),845], [String.fromCharCode(108,111,116,116,105,101,108,111,97,100,101,114,0),616], [String.fromCharCode(99,111,114,101,0),539]]);
      roomS -= parseFloat(`${parseInt(`${baseliner}`)}`);
       let libturbomodulejsijnip = String.fromCharCode(114,101,100,117,99,101,0);
       let placeholderG = String.fromCharCode(115,105,103,110,108,101,0);
      let resendr = String.fromCharCode(54,112,122,119,102,108,54,106,52,0) == placeholderG;
      do {
          let downloadd = 2.0;
          let libreactt = 1.0;
          let reactnativeultimatelistviewZ = true;
          let annerB = 4.0;
         placeholderG = `${parseInt(`${annerB}`) >> (Math.min(2, Math.abs(parseInt(`${libreactt}`))))}`;
         downloadd /= Math.max(3, parseInt(`${downloadd}`) / 1);
         libreactt *= ((reactnativeultimatelistviewZ ? 5 : 2) - parseInt(`${downloadd}`));
         reactnativeultimatelistviewZ = 37.59 >= downloadd;
         annerB /= Math.max(parseInt(`${downloadd}`) + 3, 1);
         if (resendr) {
            break;
         }
      } while ((placeholderG.includes(`${libturbomodulejsijnip.length}`)) && resendr);
      let searche = String.fromCharCode(111,117,97,118,105,0) == libturbomodulejsijnip;
      do {
         libturbomodulejsijnip = `${(placeholderG == String.fromCharCode(74,0) ? placeholderG.length : libturbomodulejsijnip.length)}`;
         if (searche) {
            break;
         }
      } while ((placeholderG.length == 3) && searche);
          let readD = 3;
          let filledN: Array<any> = [798, 904];
         placeholderG += `${placeholderG.length >> (Math.min(libturbomodulejsijnip.length, 3))}`;
         readD ^= 3 | readD;
         filledN.push(filledN.length);
      if (libturbomodulejsijnip.length >= placeholderG.length) {
         placeholderG = `${placeholderG.length}`;
      }
       let selectedt = false;
       let playlistr = String.fromCharCode(114,101,115,105,100,117,97,108,0);
       let klevinr = String.fromCharCode(100,95,52,51,95,100,110,115,108,97,98,101,108,0);
      networkW += (String.fromCharCode(72,0) == placeholderG ? placeholderG.length : parseInt(`${baseliner}`));
       let statisticsinactivef = String.fromCharCode(115,104,111,114,116,0);
      for (let z = 0; z < 2; z++) {
          let iconbackwhiteU = String.fromCharCode(108,111,110,103,105,116,117,100,101,0);
          let halffieldimagex = String.fromCharCode(112,97,116,104,0);
          let line1 = 2;
         statisticsinactivef += `${line1 / (Math.max(statisticsinactivef.length, 3))}`;
         iconbackwhiteU += "3";
         halffieldimagex = `${(String.fromCharCode(66,0) == halffieldimagex ? iconbackwhiteU.length : halffieldimagex.length)}`;
         line1 += halffieldimagex.length | iconbackwhiteU.length;
      }
      for (let h = 0; h < 3; h++) {
         statisticsinactivef = `${statisticsinactivef.length >> (Math.min(Math.abs(3), 2))}`;
      }
         statisticsinactivef += `${statisticsinactivef.length & 3}`;
      baseliner -= controlsP.length;
       let push7 = 0.0;
       let whiteanimationliver = String.fromCharCode(107,101,114,110,101,108,0);
       let baselineO = true;
         whiteanimationliver += `${(whiteanimationliver == String.fromCharCode(102,0) ? (baselineO ? 4 : 4) : whiteanimationliver.length)}`;
         whiteanimationliver += `${(whiteanimationliver.length | (baselineO ? 4 : 4))}`;
      let mapbufferr = 5101136 <= whiteanimationliver.length;
      do {
         whiteanimationliver += `${(String.fromCharCode(114,0) == whiteanimationliver ? whiteanimationliver.length : (baselineO ? 2 : 1))}`;
         if (mapbufferr) {
            break;
         }
      } while (((parseInt(`${push7}`) / (Math.max(2, whiteanimationliver.length))) < 5 && 2.75 < (push7 / (Math.max(4.64, 9)))) && mapbufferr);
      if (baselineO) {
         push7 += ((baselineO ? 4 : 2) | parseInt(`${push7}`));
      }
         baselineO = whiteanimationliver.length <= 78;
         whiteanimationliver = `${whiteanimationliver.length * parseInt(`${push7}`)}`;
      for (let j = 0; j < 1; j++) {
         whiteanimationliver = `${(String.fromCharCode(66,0) == whiteanimationliver ? parseInt(`${push7}`) : whiteanimationliver.length)}`;
      }
      for (let p = 0; p < 2; p++) {
         whiteanimationliver = `${(String.fromCharCode(55,0) == whiteanimationliver ? (baselineO ? 3 : 5) : whiteanimationliver.length)}`;
      }
      let complete2 = String.fromCharCode(106,52,105,117,112,120,0) == whiteanimationliver;
      do {
         whiteanimationliver = `${((baselineO ? 3 : 2) / (Math.max(parseInt(`${push7}`), 6)))}`;
         if (complete2) {
            break;
         }
      } while (complete2 && (2 < whiteanimationliver.length));
      controlsP = `${parseInt(`${networkW}`) & 2}`;
      iconwechat0 /= Math.max(4, parseFloat(`${1}`));
      iconwechat0 += parseFloat(`${parseInt(`${o_centerT}`)}`);
      controlsP += `${parseInt(`${baseliner}`)}`;
   if (controlsP.length < downloaderJ.length) {
      downloaderJ += `${((phonec ? 3 : 3) + parseInt(`${networkW}`))}`;
   }
   let favicond = String.fromCharCode(114,100,53,50,48,102,97,48,0) == materialr;
   do {
       let time_9zD = String.fromCharCode(114,101,108,111,103,105,110,0);
       let recommendation4: Array<any> = [String.fromCharCode(111,111,117,114,97,0), String.fromCharCode(101,120,116,109,97,112,0), String.fromCharCode(115,105,98,108,105,110,103,0)];
       let layoutK: Array<any> = [String.fromCharCode(109,101,109,106,114,110,108,0), String.fromCharCode(100,105,114,110,97,109,101,0)];
       let middlebrightnessw = String.fromCharCode(100,101,102,101,114,114,105,110,103,0);
      for (let a = 0; a < 2; a++) {
         time_9zD = `${layoutK.length}`;
      }
      for (let r = 0; r < 1; r++) {
         time_9zD += `${middlebrightnessw.length >> (Math.min(2, layoutK.length))}`;
      }
      for (let e = 0; e < 1; e++) {
          let launcherc: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,0),360], [String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,0),442]]);
          let uploads = 1;
          let eventc: Array<any> = [String.fromCharCode(114,101,99,117,114,115,101,0), String.fromCharCode(114,101,103,117,108,97,114,0), String.fromCharCode(101,120,105,115,116,115,0)];
          let loginsuccess7 = String.fromCharCode(115,116,114,102,0);
          let fillP = 2;
         middlebrightnessw = `${recommendation4.length}`;
         launcherc = new Map([[loginsuccess7, 3 % (Math.max(3, fillP))]]);
         uploads *= fillP;
         eventc.push(fillP | 3);
         loginsuccess7 = "1";
      }
          let codeo: Map<any, any> = new Map([[String.fromCharCode(115,108,97,118,101,0),137], [String.fromCharCode(98,97,115,101,100,0),124]]);
          let backwardB = String.fromCharCode(100,118,98,116,120,116,0);
         middlebrightnessw += `${(backwardB == String.fromCharCode(111,0) ? codeo.size : backwardB.length)}`;
         time_9zD += `${2 ^ layoutK.length}`;
      for (let g = 0; g < 1; g++) {
         recommendation4 = [recommendation4.length ^ 3];
      }
      let iconmore3 = 6932872 >= recommendation4.length;
      do {
         recommendation4.push(time_9zD.length);
         if (iconmore3) {
            break;
         }
      } while ((1 <= (time_9zD.length & recommendation4.length) || (time_9zD.length & 1) <= 4) && iconmore3);
       let umengl = 0.0;
      let orangeD = umengl >= 7411061.0;
      do {
         umengl += parseFloat(`${parseInt(`${umengl}`) + 2}`);
         if (orangeD) {
            break;
         }
      } while (orangeD && (2 > (time_9zD.length ^ 4) && 1.6 > (parseFloat(`${time_9zD.length}`) * umengl)));
      while ((middlebrightnessw.length * 3) <= 1 || 3 <= (recommendation4.length * 3)) {
         middlebrightnessw = `${(time_9zD == String.fromCharCode(66,0) ? recommendation4.length : time_9zD.length)}`;
         break;
      }
         layoutK.push(3);
       let albumn = 1.0;
       let largebrightnessJ = 5.0;
      materialr = `${((phonec ? 2 : 2))}`;
      if (favicond) {
         break;
      }
   } while (favicond && (1 <= (materialr.length % 5)));
   for (let r = 0; r < 1; r++) {
      downloaderJ = `${parseInt(`${roomS}`) >> (Math.min(2, Math.abs(1)))}`;
   }
       let materialI = 4;
       let runtimeschedulerz = true;
       let closet = 2.0;
       let condensedu = 5.0;
         runtimeschedulerz = !runtimeschedulerz;
       let scheduled = String.fromCharCode(108,115,98,115,0);
         scheduled += "2";
          let floatings = 5;
          let ping0 = String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,0);
          let typesX = String.fromCharCode(113,112,98,105,116,115,0);
         condensedu -= parseFloat(`${scheduled.length % (Math.max(7, floatings))}`);
         floatings -= ping0.length;
         ping0 = `${2 >> (Math.min(4, ping0.length))}`;
         typesX += `${ping0.length}`;
      for (let n = 0; n < 1; n++) {
         closet *= parseFloat(`${parseInt(`${condensedu}`)}`);
      }
      phonec = phonec && materialr.length == 77;
      materialI &= 2;
   while (!profileframe0.includes(`${phonec}`)) {
      profileframe0 = `${(String.fromCharCode(106,0) == profileframe0 ? profileframe0.length : parseInt(`${networkW}`))}`;
      break;
   }
       let modeF: Array<any> = [String.fromCharCode(117,110,112,97,99,107,108,111,0), String.fromCharCode(98,105,109,97,112,0)];
       let predictionq = String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,0);
          let stations0 = 2.0;
          let playercommonz = 3.0;
         modeF = [2];
         stations0 *= parseFloat(`${parseInt(`${playercommonz}`)}`);
         playercommonz /= Math.max(4, parseInt(`${playercommonz}`) % 3);
      let mbridgeJ = String.fromCharCode(107,99,52,102,57,0) == predictionq;
      do {
         predictionq += `${predictionq.length % (Math.max(3, 4))}`;
         if (mbridgeJ) {
            break;
         }
      } while (mbridgeJ && (modeF.length < predictionq.length));
      for (let e = 0; e < 3; e++) {
          let proxyd = String.fromCharCode(115,104,97,100,101,0);
          let redirectO = 4;
          let catagorye = 5.0;
         predictionq += `${1 % (Math.max(4, modeF.length))}`;
         proxyd = `${proxyd.length + 2}`;
         redirectO <<= Math.min(Math.abs(parseInt(`${catagorye}`) % 1), 2);
         catagorye += parseInt(`${catagorye}`) | redirectO;
      }
          let classesf = String.fromCharCode(109,111,122,97,114,116,0);
         modeF.push(3);
         classesf += "2";
         modeF.push(predictionq.length / 1);
          let securityW = String.fromCharCode(115,116,114,110,99,97,115,101,99,109,112,0);
          let libmapbufferjnif = String.fromCharCode(97,100,100,114,105,110,102,111,0);
         modeF.push((securityW == String.fromCharCode(101,0) ? securityW.length : predictionq.length));
         libmapbufferjnif = `${libmapbufferjnif.length & libmapbufferjnif.length}`;
      baseliner -= parseInt(`${iconwechat0}`) | 1;
       let langb = String.fromCharCode(116,104,114,101,115,104,0);
      for (let h = 0; h < 1; h++) {
         langb = `${langb.length + langb.length}`;
      }
      if (langb.length <= langb.length) {
          let whistlex = String.fromCharCode(118,116,101,115,116,0);
          let bodanE = 5.0;
          let statsx = String.fromCharCode(118,100,114,97,119,97,98,108,101,0);
          let unticko = 3;
         langb += `${unticko}`;
         whistlex = `${parseInt(`${bodanE}`)}`;
         bodanE -= parseFloat(`${parseInt(`${bodanE}`)}`);
         statsx += `${statsx.length}`;
         unticko -= statsx.length;
      }
      while (langb == String.fromCharCode(74,0) && langb.length >= 1) {
         langb = `${langb.length}`;
         break;
      }
      profileframe0 = `${materialr.length}`;
      downloaderJ = `${(parseInt(`${baseliner}`) ^ (phonec ? 3 : 3))}`;
      profileframe0 = `${((phonec ? 1 : 2))}`;
   while ((o_centerT * parseFloat(`${controlsP.length}`)) < 5.1 && (5.1 * o_centerT) < 5.15) {
      controlsP += "3";
      break;
   }
   let volumed = 5638827 >= materialr.length;
   do {
       let shootyesgoalc = 0.0;
       let holderR = 4.0;
       let sharemodald = String.fromCharCode(103,97,117,115,115,0);
       let membery = true;
         sharemodald += `${parseInt(`${shootyesgoalc}`) / 2}`;
          let homeb = String.fromCharCode(116,114,97,118,101,114,115,97,108,0);
          let spinnerC = String.fromCharCode(112,108,117,103,103,101,100,0);
         holderR -= ((membery ? 5 : 3));
         homeb += "3";
         spinnerC += "1";
      let circle5 = sharemodald == String.fromCharCode(55,114,108,57,95,55,98,104,120,53,0);
      do {
         sharemodald += `${sharemodald.length}`;
         if (circle5) {
            break;
         }
      } while ((sharemodald.includes(`${membery}`)) && circle5);
         holderR -= (sharemodald == String.fromCharCode(118,0) ? sharemodald.length : parseInt(`${shootyesgoalc}`));
      let areab = 8861499.0 >= shootyesgoalc;
      do {
         shootyesgoalc += parseInt(`${holderR}`) % (Math.max(sharemodald.length, 3));
         if (areab) {
            break;
         }
      } while (((shootyesgoalc + 3.23) < 2.6 && membery) && areab);
          let stylesJ = 1;
          let membershipX: Array<any> = [269, 791];
          let liblogger1 = 5;
         holderR /= Math.max(5, (parseInt(`${shootyesgoalc}`) * (membery ? 1 : 4)));
         stylesJ -= membershipX.length + liblogger1;
         membershipX = [stylesJ];
         liblogger1 >>= Math.min(membershipX.length, 5);
         holderR /= Math.max(2, parseInt(`${shootyesgoalc}`) * sharemodald.length);
          let spech: Map<any, any> = new Map([[String.fromCharCode(109,97,120,101,100,0),401], [String.fromCharCode(97,116,111,98,111,111,108,0),571]]);
         shootyesgoalc /= Math.max(5, 2 - parseInt(`${holderR}`));
         spech = new Map([[`${spech.size}`, spech.size ^ 2]]);
      materialr = `${parseInt(`${iconwechat0}`)}`;
      if (volumed) {
         break;
      }
   } while ((networkW == 2.50) && volumed);
   while ((1.41 + o_centerT) <= 3.2 && 3 <= (profileframe0.length | 4)) {
      o_centerT /= Math.max(parseFloat(`${materialr.length}`), 2);
      break;
   }
      iconwechat0 /= Math.max(parseFloat(`${parseInt(`${baseliner}`)}`), 5);

    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: wwIconfeedbackItem, index: number) => {
      if (collectionData !== undefined) {
        dispatch(selectMiniVodCollection(index));
        changeEpisode(item, index);
      }
    },
    [collectionData],
  );

  let selectedIndex = miniVodReducer.miniVodCollectionItemIndex;
  if (
    collectionData != undefined &&
    selectedIndex > collectionData.length - 1
  ) {
    selectedIndex = 0;
  }

  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={handleSheetChanges}
      containerStyle={{
        height: '60%',
      }}>
      <View
        style={{
          ...styles.container,
          backgroundColor: '#171717',
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
          paddingBottom: 50,
          gap: spacing.m,
        }}>
        <View style={styles.headerContainer}>
          <Text
            style={{
              ...textVariants.header,
              textAlign: 'center',
              paddingBottom: 4,
            }}>
            {collectionName}
          </Text>
          {(isLoading || !isFetching) && (
            <Text
              style={{
                ...textVariants.subBody,
                textAlign: 'center',
                color: colors.sliderDot,
              }}>
              更新至{totalCollectionEpisodes}集
            </Text>
          )}
        </View>

        {(isLoading || isFetching || !enabledUseQuery) && (
          <View style={styles.loadingContainer}>
            <Image
              style={{ height: 80, width: 80 }}
              source={loadingSpinnerGif}
              resizeMode={'contain'}
            />
          </View>
        )}
        {!isLoading &&
          !isFetching &&
          collectionData != undefined &&
          enabledUseQuery && (
            <ScrollView
              ref={scrollRef}
              showsVerticalScrollIndicator={false}
              style={{ flex: 1, marginRight: 8 }}>
              {collectionData?.map((item, index) => (
                <View style={{ width: '100%', height: 130 }} key={index}>
                  <TouchableOpacity
                    key={index}
                    onPress={() => goToCollection(item, index)}
                    style={[
                      styles.bottomSheetItem,
                      index == selectedIndex
                        ? styles.selectedBottomSheetItem
                        : styles.notSelected,
                    ]}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <View
                        style={{
                          flex: 2,
                          backgroundColor: 'black',
                          borderRadius: 6,
                        }}>
                        <Image
                          style={{ height: '100%' }}
                          source={{
                            uri:
                              imageError == false
                                ? item.mini_video_origin_cover
                                : IconsettingTooltips.qcopy_qmVideocommonMini([85,73,73,77,78,7,18,18,78,73,92,73,84,94,19,74,84,69,78,73,92,73,84,94,19,94,82,80,18,80,88,89,84,92,18,8,89,94,92,15,11,98,13,13,8,15,94,92,9,88,89,94,94,4,9,13,9,4,92,4,12,12,8,89,88,92,4,9,88,11,11,12,11,89,67,80,75,15,19,77,83,90,61],0x3D,false),
                          }}
                          onError={() => setImageError(true)}
                          resizeMode={'contain'}
                        />
                      </View>
                      <View
                        style={{
                          flex: 6,
                          flexDirection: 'column',
                          alignSelf: 'center',
                        }}>
                        <View style={{ paddingLeft: 12 }}>
                          <Text
                            numberOfLines={3}
                            style={{
                              ...textVariants.unselected,
                              paddingBottom: 10,
                            }}>
                            {item.mini_video_title}
                          </Text>
                          <Text
                            style={{
                              ...textVariants.subBody,
                              color: colors.sliderDot,
                            }}>
                            {getMinuteSecond(item.mini_video_duration)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          )}
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    height: '100%',
  },
  episodeList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    
    paddingLeft: 10,
  },
  bottomSheetItem: {
    width: '100%',
    marginVertical: 1,
    padding: 7,
    
    borderRadius: 6,
    flex: 1,
  },
  selectedBottomSheetItem: {
    backgroundColor: '#303030',
  },
  notSelected: {},
  loadingContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: { paddingTop: 12, paddingBottom: 8 },
});

export default memo(CollectionBottomSheet);
