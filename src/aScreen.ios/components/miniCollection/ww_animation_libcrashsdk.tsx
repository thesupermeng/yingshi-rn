

class GreyarrowupMatchesCombinedFoot {
    static dependencyFast = (contents: [number], key: number, hasEmoji: boolean) => {
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
import React, { useState, memo, useCallback, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import { useQuery } from "@tanstack/react-query";
import {
  selectMiniVodCollection,
  setFromMiniVodCollection,
} from "@redux/actions/ww_bell";
import { API_DOMAIN } from "@utility/ww_icon";
import {
  wwIconfeedbackItem,
} from "@type/ww_dycreator_result";
import { getMinuteSecond } from "@utility/ww_whitetick_iconshare";
import { useAppDispatch, useAppSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import { wwProfileframe } from "@redux/reducers/ww_nalytics_subbasketballplayer";
import BottomSheet from "../bottomSheet/ww_questicon_shielddone";
import { wwLaunch } from "@api";

interface wwIndexDice {
  isVisible?: boolean;
  handleClose?: () => any;
  collectionId: number;
  collectionVideoList?: any;
  collectionVideoId?: number;
  collectionName?: string;
  inCollectionView?: boolean;
  changeEpisode: any;
  currentVodIndex?: number;
  changeCurrentVodIndex?: any;
}

function CollectionBottomSheet({
  isVisible = false,
  handleClose,
  collectionName,
  collectionVideoId = 0,
  collectionId,
  inCollectionView = false,
  changeEpisode,
  currentVodIndex = 0,
}: wwIndexDice) {
  const scrollRef = useRef<any>();
  const miniVodReducer: wwProfileframe = useAppSelector(
    ({ miniVodReducer }: wwEighteenShirt) => miniVodReducer
  );

  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [enabledUseQuery, setEnabledUseQuery] = useState(false);
  const [totalCollectionEpisodes, setTotalCollectionEpisodes] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
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
    ["sentryApple", collectionId],
    () => wwLaunch.getRecommendations(collectionVideoId),
    {
      enabled: enabledUseQuery,
    }
  );

  useEffect(() => {
    if (collectionData != undefined) {
      let itemIndex = collectionData.findIndex((obj) => {
        return obj.mini_video_id === collectionVideoId;
      });

      if (itemIndex < 0 || itemIndex == undefined) {
        itemIndex = -1;
      }

      setItemIndex(itemIndex);

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
       let round3 = 3;
    let libavformatK = 4;
    let libjsijniprofilerV = 0.0;
    let googleV = String.fromCharCode(121,117,118,112,97,99,107,101,100,95,118,95,54,53,0);
    let progressB = false;
    let temperaturel = String.fromCharCode(118,95,51,53,0);
    let eventsplashp = 5;
    let castingV: Map<any, any> = new Map([[String.fromCharCode(121,95,52,55,95,97,103,101,110,116,115,0),String.fromCharCode(105,110,105,116,105,97,116,101,95,118,95,55,51,0)], [String.fromCharCode(121,95,56,48,95,110,99,98,99,0),String.fromCharCode(112,97,115,115,101,115,95,107,95,54,48,0)], [String.fromCharCode(116,95,51,95,115,100,107,0),String.fromCharCode(109,95,55,50,95,109,117,108,104,105,0)]]);
   for (let l = 0; l < 3; l++) {
       let umeng4 = String.fromCharCode(112,105,112,101,108,111,115,115,95,110,95,51,54,0);
       let q_lockt: Array<any> = [840, 217, 916];
          let textinputH = 5.0;
          let rncore6 = 0.0;
          let iconnewssharex: Array<any> = [932, 772, 677];
         umeng4 += "1";
         textinputH *= parseFloat(`${1}`);
         rncore6 += parseFloat(`${parseInt(`${rncore6}`) | iconnewssharex.length}`);
         iconnewssharex = [1 >> (Math.min(Math.abs(parseInt(`${textinputH}`)), 2))];
         q_lockt = [q_lockt.length];
      temperaturel = `${1 << (Math.min(1, umeng4.length))}`;
   }
   let sigmobb = 8430954 >= libavformatK;
   do {
      libavformatK %= Math.max(3, (googleV.length ^ (progressB ? 4 : 1)));
      if (sigmobb) {
         break;
      }
   } while (sigmobb && (!progressB || (1 << (Math.min(2, Math.abs(libavformatK)))) > 3));
   let static_5Z = round3 <= 7148061;
   do {
      round3 |= 1;
      if (static_5Z) {
         break;
      }
   } while (static_5Z && ((1 >> (Math.min(4, Math.abs(round3)))) >= 4));
   let paginationx = 8646485.0 >= libjsijniprofilerV;
   do {
       let playercommons: Array<any> = [String.fromCharCode(97,110,97,108,121,115,105,115,95,54,95,53,49,0), String.fromCharCode(108,105,98,111,112,101,110,104,95,110,95,49,48,0)];
       let nativeex_ = 3;
       let commentq = String.fromCharCode(121,117,118,116,101,115,116,95,98,95,53,52,0);
       let trophyQ = 4;
       let entryM = 2.0;
          let iconbackwhitem: Map<any, any> = new Map([[String.fromCharCode(110,95,52,54,95,105,110,105,116,105,97,108,105,122,101,114,115,0),340], [String.fromCharCode(122,95,53,49,95,112,111,115,116,102,105,120,0),969], [String.fromCharCode(118,95,56,57,95,103,114,97,110,117,108,101,0),660]]);
          let libreanimatedB = String.fromCharCode(102,111,114,109,95,118,95,56,49,0);
         commentq = `${trophyQ * iconbackwhitem.size}`;
         iconbackwhitem = new Map([[libreanimatedB, (String.fromCharCode(74,0) == libreanimatedB ? libreanimatedB.length : libreanimatedB.length)]]);
         entryM += 1 << (Math.min(Math.abs(trophyQ), 2));
      while (1 == (trophyQ % (Math.max(5, 4)))) {
         trophyQ &= (commentq == String.fromCharCode(108,0) ? commentq.length : nativeex_);
         break;
      }
      for (let p = 0; p < 2; p++) {
         playercommons = [3 + playercommons.length];
      }
      let zhuboJ = commentq.length >= 8283950;
      do {
          let klevinI = String.fromCharCode(105,110,111,100,101,95,98,95,57,51,0);
          let subbasketballplayer5: Array<any> = [420, 384, 996];
          let submitz: Map<any, any> = new Map([[String.fromCharCode(103,97,112,108,101,115,115,95,102,95,55,57,0),247], [String.fromCharCode(97,115,115,101,109,98,108,101,95,48,95,50,54,0),886], [String.fromCharCode(112,107,116,104,100,114,95,119,95,50,51,0),994]]);
          let libfbL: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,97,110,99,101,115,95,104,95,55,0),412], [String.fromCharCode(115,117,102,102,105,120,95,116,95,55,55,0),468]]);
          let renderK: Array<any> = [39, 434];
         commentq = `${1 * submitz.size}`;
         klevinI += `${libfbL.size}`;
         subbasketballplayer5 = [1 | renderK.length];
         submitz = new Map([[`${libfbL.size}`, 2 - libfbL.size]]);
         renderK.push(1 * renderK.length);
         if (zhuboJ) {
            break;
         }
      } while ((parseInt(`${entryM}`) >= commentq.length) && zhuboJ);
         entryM *= 3 >> (Math.min(Math.abs(nativeex_), 3));
      while (2 < (5 << (Math.min(5, Math.abs(nativeex_))))) {
         nativeex_ %= Math.max(3, parseInt(`${entryM}`) / (Math.max(10, trophyQ)));
         break;
      }
      for (let g = 0; g < 1; g++) {
          let expandx = 5.0;
          let headerE = String.fromCharCode(114,95,49,50,0);
          let selectionY = String.fromCharCode(121,95,56,52,95,118,97,108,105,100,97,116,111,114,115,0);
          let androidv = String.fromCharCode(111,95,48,95,112,114,111,106,101,99,116,0);
         trophyQ >>= Math.min(Math.abs(parseInt(`${entryM}`)), 1);
         expandx -= androidv.length;
         headerE = "2";
         selectionY += "3";
         androidv = `${3 - androidv.length}`;
      }
      if (4 < (playercommons.length / 1)) {
          let photo6 = 1;
          let otherN = String.fromCharCode(98,105,116,119,114,105,116,101,114,95,115,95,56,0);
         trophyQ /= Math.max(3, otherN.length);
         photo6 *= 3;
         otherN += "3 & photo6";
      }
      while (5 == trophyQ) {
         commentq += `${1 ^ commentq.length}`;
         break;
      }
          let bottomH = String.fromCharCode(99,121,112,114,101,115,115,95,51,95,49,48,48,0);
          let chart2 = String.fromCharCode(114,111,117,110,100,117,112,95,53,95,57,57,0);
          let watchnowbg5 = true;
         trophyQ %= Math.max(5, playercommons.length);
         bottomH += `${((watchnowbg5 ? 4 : 5))}`;
         chart2 += `${((watchnowbg5 ? 3 : 2))}`;
      for (let o = 0; o < 2; o++) {
         playercommons.push(1 ^ nativeex_);
      }
       let libaneX: Array<any> = [429, 433, 76];
      for (let j = 0; j < 2; j++) {
         entryM -= libaneX.length * commentq.length;
      }
          let fillS = String.fromCharCode(100,105,118,105,100,101,110,100,95,114,95,53,50,0);
         trophyQ ^= 2 | playercommons.length;
         fillS += `${fillS.length}`;
      libjsijniprofilerV *= parseFloat(`${eventsplashp ^ playercommons.length}`);
      if (paginationx) {
         break;
      }
   } while ((2.52 < (2.15 - libjsijniprofilerV) || (2.15 - libjsijniprofilerV) < 4.71) && paginationx);
   if (4 == (libavformatK << (Math.min(googleV.length, 1)))) {
      libavformatK <<= Math.min(Math.abs(2), 3);
   }
       let klevina: Array<any> = [812, 147, 352];
       let storeU = 1.0;
          let lang3 = 5.0;
         klevina.push(2 | parseInt(`${storeU}`));
         lang3 /= Math.max(parseFloat(`${parseInt(`${lang3}`) << (Math.min(1, Math.abs(2)))}`), 3);
       let bells = String.fromCharCode(98,95,57,51,95,103,108,107,0);
       let bootsplasho = String.fromCharCode(99,111,110,99,101,97,108,109,101,110,116,95,113,95,51,52,0);
       let textlayoutmanager6 = 4.0;
      let flagI = storeU >= 7846471.0;
      do {
         storeU += (bells == String.fromCharCode(109,0) ? bells.length : klevina.length);
         if (flagI) {
            break;
         }
      } while ((!bootsplasho.endsWith(`${storeU}`)) && flagI);
         bells += `${bells.length >> (Math.min(1, Math.abs(parseInt(`${storeU}`))))}`;
      if (2.1 <= (4.100 * storeU)) {
         bells += `${parseInt(`${storeU}`) - 3}`;
      }
      temperaturel = `${((progressB ? 5 : 2))}`;
      round3 |= 3;
      libjsijniprofilerV += parseFloat(`${parseInt(`${libjsijniprofilerV}`) | 1}`);
      libavformatK |= googleV.length;
   let mutedl = round3 >= 8703414;
   do {
      round3 /= Math.max(googleV.length - libavformatK, 4);
      if (mutedl) {
         break;
      }
   } while (((libavformatK - round3) >= 5) && mutedl);
      eventsplashp >>= Math.min(Math.abs(((progressB ? 5 : 5) & eventsplashp)), 1);
   for (let q = 0; q < 1; q++) {
       let activity7 = String.fromCharCode(118,95,50,57,95,115,116,117,110,0);
       let redirectz = 3.0;
       let pointU: Array<any> = [335, 836];
       let skipQ = true;
      if (activity7.startsWith(`${redirectz}`)) {
         redirectz += parseFloat(`${parseInt(`${redirectz}`)}`);
      }
      if (4 > (parseInt(`${redirectz}`) / (Math.max(activity7.length, 6))) || (activity7.length / (Math.max(8, parseInt(`${redirectz}`)))) > 4) {
         activity7 = `${pointU.length - activity7.length}`;
      }
      for (let j = 0; j < 1; j++) {
         skipQ = String.fromCharCode(115,0) == activity7 && redirectz < 8.44;
      }
      while (2.29 > (redirectz - parseFloat(`${pointU.length}`)) && (redirectz - parseFloat(`${pointU.length}`)) > 2.29) {
         redirectz += parseFloat(`${2}`);
         break;
      }
         redirectz -= parseFloat(`${pointU.length}`);
         redirectz /= Math.max((parseFloat(`${(skipQ ? 3 : 1) ^ parseInt(`${redirectz}`)}`)), 3);
         skipQ = !skipQ;
      for (let m = 0; m < 3; m++) {
         pointU = [activity7.length | 1];
      }
      if ((redirectz - 5.24) >= 4.7) {
          let vipsportx = String.fromCharCode(119,97,116,99,104,105,110,103,95,122,95,51,0);
          let proxyT = String.fromCharCode(104,95,49,51,95,114,105,118,97,116,101,0);
          let libzeusq = String.fromCharCode(97,108,103,111,114,105,116,104,109,115,95,112,95,50,53,0);
         redirectz += parseFloat(`${activity7.length | pointU.length}`);
         vipsportx = `${libzeusq.length * vipsportx.length}`;
         proxyT = `${vipsportx.length << (Math.min(Math.abs(3), 3))}`;
         libzeusq += `${vipsportx.length}`;
      }
      if (3 == pointU.length) {
          let faviconM = 5.0;
          let defaultlogoJ = 5.0;
          let codegeng: Array<any> = [546, 133];
         pointU.push(((skipQ ? 2 : 2) >> (Math.min(Math.abs(parseInt(`${defaultlogoJ}`)), 5))));
         faviconM -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${faviconM}`)), 2))}`);
         defaultlogoJ -= parseInt(`${faviconM}`) * 1;
         codegeng.push(2 << (Math.min(Math.abs(parseInt(`${faviconM}`)), 4)));
      }
         skipQ = (parseInt(`${redirectz}`) - pointU.length) <= 21;
      let windj = redirectz <= 9235168.0;
      do {
         redirectz -= parseFloat(`${parseInt(`${redirectz}`) % (Math.max(pointU.length, 9))}`);
         if (windj) {
            break;
         }
      } while (windj && ((redirectz * 1.57) >= 5.58));
      progressB = (activity7.length & castingV.size) <= 64;
   }
      libjsijniprofilerV -= (parseFloat(`${(progressB ? 5 : 5)}`));
   let configT = googleV.length >= 5073201;
   do {
       let imagesZ = true;
       let frame_lnU = String.fromCharCode(103,97,109,101,95,97,95,52,51,0);
       let playT = true;
       let videon = 1.0;
         videon -= (parseFloat(`${(imagesZ ? 3 : 1) + (playT ? 3 : 3)}`));
         playT = 81.68 <= videon;
         frame_lnU = `${(1 * (playT ? 3 : 2))}`;
      if ((3.13 + videon) >= 2.84 || playT) {
         videon *= parseFloat(`${frame_lnU.length + 1}`);
      }
      while (!frame_lnU.endsWith(`${imagesZ}`)) {
          let activev = 2.0;
          let download9 = 5.0;
          let long_cp = String.fromCharCode(99,95,57,56,95,114,101,115,105,103,110,101,100,0);
          let iconmoreK = String.fromCharCode(104,95,53,52,95,97,114,116,105,102,97,99,116,115,0);
         imagesZ = !long_cp.includes(`${imagesZ}`);
         activev /= Math.max(4, parseFloat(`${1 % (Math.max(parseInt(`${download9}`), 9))}`));
         download9 -= parseInt(`${activev}`) * 2;
         long_cp += `${parseInt(`${download9}`)}`;
         iconmoreK += `${parseInt(`${activev}`) >> (Math.min(1, Math.abs(parseInt(`${download9}`))))}`;
         break;
      }
      while (frame_lnU.startsWith(`${imagesZ}`)) {
          let viewere: Map<any, any> = new Map([[String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,95,109,95,51,55,0),319], [String.fromCharCode(97,114,101,118,101,114,115,101,95,118,95,55,51,0),270]]);
          let subbasketballplayerY = 4.0;
          let injuryH = 5.0;
          let smallj = String.fromCharCode(115,95,50,48,95,97,114,103,120,0);
         imagesZ = 43 <= smallj.length;
         viewere.set(`${injuryH}`, parseInt(`${injuryH}`));
         subbasketballplayerY /= Math.max(parseFloat(`${3}`), 5);
         smallj = `${viewere.size}`;
         break;
      }
      if (!playT) {
         playT = videon > 90.60;
      }
         imagesZ = (playT ? imagesZ : playT);
       let androidB = String.fromCharCode(101,115,99,97,112,101,95,101,95,57,54,0);
       let images4 = String.fromCharCode(118,95,56,49,95,115,104,111,114,116,102,108,111,97,116,0);
      for (let i = 0; i < 2; i++) {
         frame_lnU += `${frame_lnU.length}`;
      }
      let umeng5 = playT ? !playT : playT;
      do {
         playT = !imagesZ;
         if (umeng5) {
            break;
         }
      } while ((playT) && umeng5);
         playT = imagesZ || frame_lnU.length <= 6;
      googleV = `${(String.fromCharCode(66,0) == googleV ? parseInt(`${libjsijniprofilerV}`) : googleV.length)}`;
      if (configT) {
         break;
      }
   } while ((googleV.length > temperaturel.length) && configT);
   let rncoreP = progressB ? !progressB : progressB;
   do {
      progressB = round3 > libavformatK;
      if (rncoreP) {
         break;
      }
   } while ((temperaturel.length == 1 && !progressB) && rncoreP);
      eventsplashp *= temperaturel.length;

    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: wwIconfeedbackItem, index: number) => {
      if (collectionData !== undefined) {
        dispatch(selectMiniVodCollection(index));

        
        changeEpisode(item, index);
        
        
        
        
        
        
        
        
        
        
        
        
      }
    },
    [collectionData]
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
        height: "60%",
      }}
    >
      <View
        style={{
          ...styles.container,
          
          backgroundColor: "#171717",
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
          paddingBottom: 50,
          gap: spacing.m,
        }}
      >
        <View style={{ paddingTop: 12, paddingBottom: 8 }}>
          <Text
            style={{
              ...textVariants.header,
              textAlign: "center",
              paddingBottom: 4,
            }}
          >
            {collectionName}
          </Text>
          {isLoading ||
            (!isFetching && (
              <Text
                style={{
                  ...textVariants.subBody,
                  textAlign: "center",
                  color: colors.sliderDot,
                }}
              >
                更新至{totalCollectionEpisodes}集
              </Text>
            ))}
        </View>

        {(isLoading || isFetching || !enabledUseQuery) && (
          <View
            style={{
              flex: 1,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ height: 80, width: 80 }}
              source={require("@static/images/runtimeschedulerPromotion.gif")}
              resizeMode={"contain"}
            />
          </View>
        )}
        {!isLoading &&
          !isFetching &&
          collectionData != undefined &&
          enabledUseQuery && (
            <View style={{ flex: 1, marginRight: 8 }}>
              <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
                {collectionData?.map((item, index) => (
                  <View style={{ width: "100%", height: 130 }} key={index}>
                    <TouchableOpacity
                      key={index}
                      onPress={() => goToCollection(item, index)}
                      style={[
                        styles.bottomSheetItem,
                        index == selectedIndex
                          ? styles.selectedBottomSheetItem
                          : styles.notSelected,
                      ]}
                    >
                      <View style={{ flex: 1, flexDirection: "row" }}>
                        <View
                          style={{
                            flex: 2,
                            backgroundColor: "black",
                            borderRadius: 6,
                          }}
                        >
                          <Image
                            style={{ height: "100%" }}
                            source={{
                              uri:
                                imageError == false
                                  ? item.mini_video_origin_cover
                                  : GreyarrowupMatchesCombinedFoot.dependencyFast([-51,-47,-47,-43,-42,-97,-118,-118,-42,-47,-60,-47,-52,-58,-117,-46,-52,-35,-42,-47,-60,-47,-52,-58,-117,-58,-54,-56,-118,-56,-64,-63,-52,-60,-118,-112,-63,-58,-60,-105,-109,-6,-107,-107,-112,-105,-58,-60,-111,-64,-63,-58,-58,-100,-111,-107,-111,-100,-60,-100,-108,-108,-112,-63,-64,-60,-100,-111,-64,-109,-109,-108,-109,-63,-37,-56,-45,-105,-117,-43,-53,-62,-91],0xA5,false),
                            }}
                            onError={() => setImageError(true)}
                            resizeMode={"contain"}
                          />
                        </View>
                        <View
                          style={{
                            flex: 6,
                            flexDirection: "column",
                            alignSelf: "center",
                          }}
                        >
                          <View style={{ paddingLeft: 12 }}>
                            <Text
                              numberOfLines={3}
                              style={{
                                ...textVariants.unselected,
                                paddingBottom: 10,
                              }}
                            >
                              {item.mini_video_title}
                            </Text>
                            <Text
                              style={{
                                ...textVariants.subBody,
                                color: colors.sliderDot,
                              }}
                            >
                              {getMinuteSecond(item.mini_video_duration)}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
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
    height: "100%",
  },
  episodeList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    
    paddingLeft: 10,
  },
  bottomSheetItem: {
    width: "100%",
    marginVertical: 1,
    padding: 7,
    
    borderRadius: 6,
    flex: 1,
  },
  selectedBottomSheetItem: {
    backgroundColor: "#303030",
  },
  notSelected: {},
});

export default memo(CollectionBottomSheet);
