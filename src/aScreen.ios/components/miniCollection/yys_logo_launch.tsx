

class IconmoreLibfollyDycreatorLarge {
    static miniNotificationfilledIconnewc = (contents: [number], key: number, hasEmoji: boolean) => {
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
} from "@redux";
import { API_DOMAIN } from "@utility";
import {
  yysCcdfbdabcabbbedbItem,
} from "@type";
import { getMinuteSecond } from "@utility";
import { useAppDispatch, useAppSelector } from "@hooks";
import { yysIconclosewhiteBaiduads } from "@redux";
import { yysCustomRedirect } from "@redux";
import BottomSheet from "../bottomSheet/yys_progress_catagory";
import { yysMegaphoneProject } from "@api";

interface yysIconarrowrightorangeStation {
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
}: yysIconarrowrightorangeStation) {
  const scrollRef = useRef<any>();
  const miniVodReducer: yysCustomRedirect = useAppSelector(
    ({ miniVodReducer }: yysIconclosewhiteBaiduads) => miniVodReducer
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
    ["upgradeElements", collectionId],
    () => yysMegaphoneProject.getRecommendations(collectionVideoId),
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
       let libreanimatedI = 1.0;
    let calendar7 = String.fromCharCode(102,114,97,109,101,99,114,99,0);
    let profileinactiveh = String.fromCharCode(114,101,97,108,109,95,98,95,49,50,0);
    let shareblackA = 2.0;
    let yellowcirclebga = String.fromCharCode(112,97,110,111,114,97,109,97,0);
    let release_nol: Map<any, any> = new Map([[String.fromCharCode(112,117,116,110,117,109,112,97,115,115,101,115,0),String.fromCharCode(118,111,114,98,105,115,100,115,112,0)], [String.fromCharCode(120,95,52,54,95,114,101,100,114,97,119,0),String.fromCharCode(114,116,97,100,100,114,115,0)], [String.fromCharCode(112,114,111,118,105,115,105,111,110,95,53,95,49,55,0),String.fromCharCode(120,95,51,95,112,100,122,112,0)]]);
    let iconbellY = true;
    let componentsj: Map<any, any> = new Map([[String.fromCharCode(104,101,108,100,0),327], [String.fromCharCode(109,118,115,97,100,0),955]]);
      release_nol.set(yellowcirclebga, yellowcirclebga.length - 1);
   while (parseInt(`${shareblackA}`) > yellowcirclebga.length) {
      shareblackA -= release_nol.size;
      break;
   }
      calendar7 = `${profileinactiveh.length}`;
      release_nol = new Map([[`${libreanimatedI}`, parseInt(`${libreanimatedI}`) + calendar7.length]]);
      calendar7 += `${release_nol.size * 2}`;
   for (let f = 0; f < 3; f++) {
       let appleA: Map<any, any> = new Map([[String.fromCharCode(108,122,109,97,0),422], [String.fromCharCode(97,114,103,98,0),320]]);
       let penaltyw = String.fromCharCode(115,99,114,117,98,98,101,114,0);
       let tempnodataF = 1;
       let sina3 = 1.0;
       let bellremindere = String.fromCharCode(100,105,115,99,117,115,115,0);
      for (let i = 0; i < 2; i++) {
         appleA.set(`${penaltyw}`, appleA.size & 2);
      }
          let vipsportC = 4.0;
          let assist9 = String.fromCharCode(100,116,109,102,0);
         penaltyw = `${parseInt(`${vipsportC}`) * 1}`;
         vipsportC /= Math.max(parseFloat(`${assist9.length}`), 3);
         assist9 = `${assist9.length - assist9.length}`;
      for (let z = 0; z < 3; z++) {
         appleA = new Map([[bellremindere, 1]]);
      }
      if (bellremindere.includes(`${sina3}`)) {
         bellremindere = `${parseInt(`${sina3}`) + appleA.size}`;
      }
      while ((parseInt(`${sina3}`) - penaltyw.length) == 3 && (5.26 - sina3) == 3.68) {
         penaltyw += `${appleA.size}`;
         break;
      }
      for (let a = 0; a < 1; a++) {
         appleA.set(`${tempnodataF}`, tempnodataF);
      }
         sina3 /= Math.max(2, 2);
       let alertj = String.fromCharCode(102,114,97,109,101,110,117,109,0);
       let iconclosewhitewithbgT = String.fromCharCode(100,98,115,105,122,101,0);
      while (5 >= (penaltyw.length & 1) && 4 >= (appleA.size & 1)) {
          let greytickZ = true;
          let smallbrightnessW = 0;
          let whitesmalltickp = String.fromCharCode(100,118,100,97,116,97,0);
         penaltyw += `${bellremindere.length + tempnodataF}`;
         greytickZ = String.fromCharCode(66,0) == whitesmalltickp;
         smallbrightnessW %= Math.max(5, 3);
         whitesmalltickp = `${((greytickZ ? 5 : 4))}`;
         break;
      }
         tempnodataF *= parseInt(`${sina3}`) - tempnodataF;
         bellremindere = `${1 >> (Math.min(4, Math.abs(parseInt(`${sina3}`))))}`;
         tempnodataF <<= Math.min(Math.abs(appleA.size), 1);
      let carousel5 = tempnodataF <= 6943715;
      do {
         tempnodataF %= Math.max(penaltyw.length / 2, 1);
         if (carousel5) {
            break;
         }
      } while (carousel5 && (3 == (1 - tempnodataF) || 1 == (1 - tempnodataF)));
         sina3 /= Math.max(5, parseInt(`${sina3}`) << (Math.min(1, Math.abs(tempnodataF))));
          let searchbarL: Array<any> = [365, 520, 229];
          let reactnavigationH: Array<any> = [275, 620, 949];
         sina3 /= Math.max(4, reactnavigationH.length ^ iconclosewhitewithbgT.length);
         searchbarL.push(searchbarL.length & searchbarL.length);
         reactnavigationH = [1];
      calendar7 += "2";
   }
       let tickedi: Array<any> = [730, 566, 160];
       let relatedE = 2.0;
       let adultU = 1;
       let penaltyshoots = 2.0;
       let mathV = 5.0;
      while (4 == (4 & adultU) || (4 & adultU) == 2) {
         tickedi.push(2 * parseInt(`${relatedE}`));
         break;
      }
      let whitetickO = relatedE <= 9746466.0;
      do {
          let valuesb = String.fromCharCode(114,104,115,95,116,95,57,49,0);
          let securityZ = String.fromCharCode(115,101,114,105,97,108,108,121,0);
          let yellowscoreball1: Array<any> = [767, 394];
          let iconarrowrightblackw = 0.0;
          let sharewhiteK = String.fromCharCode(109,117,120,101,114,0);
         relatedE -= parseFloat(`${parseInt(`${penaltyshoots}`)}`);
         valuesb = "3";
         securityZ += `${3 << (Math.min(1, sharewhiteK.length))}`;
         yellowscoreball1 = [3];
         iconarrowrightblackw -= yellowscoreball1.length % 3;
         sharewhiteK += "1";
         if (whitetickO) {
            break;
         }
      } while (whitetickO && (5.85 > (relatedE * 2.33) || (tickedi.length * parseInt(`${relatedE}`)) > 2));
      while (1 >= (adultU & 1)) {
         adultU *= 1;
         break;
      }
      for (let m = 0; m < 3; m++) {
         adultU *= adultU / 3;
      }
         penaltyshoots += parseFloat(`${parseInt(`${relatedE}`) / 1}`);
         tickedi = [adultU];
          let moreJ = String.fromCharCode(118,95,52,56,95,115,112,108,97,115,104,0);
         relatedE /= Math.max(parseFloat(`${2 - parseInt(`${mathV}`)}`), 5);
         moreJ = `${(String.fromCharCode(50,0) == moreJ ? moreJ.length : moreJ.length)}`;
          let settingsF = false;
          let closeI = true;
          let aboutT = 5.0;
         adultU *= 3;
         settingsF = (settingsF ? !closeI : settingsF);
         closeI = !closeI;
         aboutT *= ((closeI ? 1 : 4) * 2);
      shareblackA /= Math.max(2, 2 - parseInt(`${shareblackA}`));
   while ((parseInt(`${libreanimatedI}`) + calendar7.length) < 1 || (libreanimatedI + parseFloat(`${calendar7.length}`)) < 4.60) {
      calendar7 = "2";
      break;
   }
   if (release_nol.size <= parseInt(`${libreanimatedI}`)) {
      libreanimatedI *= parseFloat(`${parseInt(`${libreanimatedI}`) * 1}`);
   }
       let cornershootD = true;
       let iconpipshrinkb = 5.0;
          let notificationJ = String.fromCharCode(97,100,97,112,116,105,118,101,0);
         iconpipshrinkb *= parseInt(`${iconpipshrinkb}`) / 2;
         notificationJ += `${notificationJ.length}`;
         cornershootD = 39.82 <= iconpipshrinkb && !cornershootD;
      let chinasameT = cornershootD ? !cornershootD : cornershootD;
      do {
         cornershootD = !cornershootD;
         if (chinasameT) {
            break;
         }
      } while ((!cornershootD) && chinasameT);
          let mathk = 3.0;
          let icondefaultthumbnailQ = false;
          let star3 = false;
         cornershootD = !cornershootD;
         mathk *= (parseFloat(`${(icondefaultthumbnailQ ? 1 : 1) | parseInt(`${mathk}`)}`));
         icondefaultthumbnailQ = 61.65 <= mathk || icondefaultthumbnailQ;
         star3 = !icondefaultthumbnailQ;
         cornershootD = !cornershootD;
         iconpipshrinkb /= Math.max(1, ((cornershootD ? 2 : 5) & parseInt(`${iconpipshrinkb}`)));
      calendar7 = `${parseInt(`${libreanimatedI}`)}`;
   if (profileinactiveh == calendar7) {
       let nalyticsW = 2.0;
       let huaweiy: Map<any, any> = new Map([[String.fromCharCode(122,95,49,95,97,103,101,110,116,115,0),887], [String.fromCharCode(108,105,98,114,115,118,103,0),784]]);
       let wifirouterl = String.fromCharCode(105,110,115,101,114,116,105,111,110,115,0);
       let time_vu = 1.0;
      if ((2.89 + nalyticsW) <= 3.46) {
         nalyticsW += huaweiy.size * 1;
      }
      let result1 = huaweiy.size <= 8640444;
      do {
          let becomeX: Map<any, any> = new Map([[String.fromCharCode(111,108,97,110,97,95,56,95,54,55,0),false ], [String.fromCharCode(100,105,97,103,114,97,109,0),true ], [String.fromCharCode(100,95,55,56,0),true ]]);
          let rulesx = 5.0;
          let redcirclebgC = String.fromCharCode(112,117,110,99,116,117,97,116,105,111,110,0);
         huaweiy.set(`${redcirclebgC}`, 2);
         becomeX.set(`${rulesx}`, becomeX.size >> (Math.min(4, Math.abs(parseInt(`${rulesx}`)))));
         redcirclebgC = `${becomeX.size ^ 1}`;
         if (result1) {
            break;
         }
      } while ((5.15 <= (5.44 + time_vu)) && result1);
         wifirouterl += `${wifirouterl.length}`;
      let middlebrightnessn = time_vu >= 9863755.0;
      do {
         time_vu -= parseFloat(`${wifirouterl.length + 2}`);
         if (middlebrightnessn) {
            break;
         }
      } while (middlebrightnessn && (3 <= (wifirouterl.length + 2)));
       let basketballhometeami: Array<any> = [274, 740];
       let privatechatbgF: Array<any> = [756, 492, 861];
         wifirouterl = "3";
       let elementsa = String.fromCharCode(99,104,101,99,107,95,51,95,55,56,0);
      for (let d = 0; d < 3; d++) {
         elementsa += `${parseInt(`${time_vu}`) & 2}`;
      }
         basketballhometeami.push((wifirouterl == String.fromCharCode(108,0) ? wifirouterl.length : elementsa.length));
      for (let v = 0; v < 1; v++) {
         nalyticsW += (wifirouterl == String.fromCharCode(76,0) ? parseInt(`${nalyticsW}`) : wifirouterl.length);
      }
      if ((time_vu / (Math.max(2, parseFloat(`${huaweiy.size}`)))) > 4.89 || (time_vu / (Math.max(parseFloat(`${huaweiy.size}`), 8))) > 4.89) {
          let stepB = String.fromCharCode(103,105,118,101,110,0);
          let iconsubssuccessU = false;
          let member1 = 2.0;
         huaweiy = new Map([[`${privatechatbgF.length}`, privatechatbgF.length * parseInt(`${time_vu}`)]]);
         stepB += `${((iconsubssuccessU ? 5 : 2) >> (Math.min(Math.abs(parseInt(`${member1}`)), 1)))}`;
         iconsubssuccessU = stepB.length >= 83;
         member1 /= Math.max(3, 1);
      }
      for (let y = 0; y < 1; y++) {
         nalyticsW *= privatechatbgF.length;
      }
      calendar7 = "1";
   }
   while ((parseInt(`${shareblackA}`) / (Math.max(5, release_nol.size))) >= 5 || (shareblackA / (Math.max(1.7, 3))) >= 1.54) {
      release_nol.set(`${libreanimatedI}`, 2 - parseInt(`${libreanimatedI}`));
      break;
   }
      release_nol = new Map([[`${iconbellY}`, parseInt(`${libreanimatedI}`) << (Math.min(2, Math.abs(1)))]]);
   for (let a = 0; a < 2; a++) {
      profileinactiveh += "3";
   }
   let rewardl = 5450145.0 >= libreanimatedI;
   do {
       let description_xe = true;
       let router7 = String.fromCharCode(109,115,118,99,0);
       let libapminsightb9 = false;
         description_xe = (libapminsightb9 ? !description_xe : libapminsightb9);
      for (let s = 0; s < 2; s++) {
          let arrowselectdownC = 4;
          let smallq = String.fromCharCode(100,111,117,98,108,101,0);
          let halffieldimageW = 5;
          let arrowright6 = 1;
          let yellowscoreball_ = String.fromCharCode(97,112,112,108,101,0);
         router7 += `${router7.length}`;
         arrowselectdownC -= smallq.length * 1;
         smallq += `${halffieldimageW & smallq.length}`;
         halffieldimageW -= smallq.length;
         arrowright6 |= (yellowscoreball_ == String.fromCharCode(80,0) ? arrowright6 : yellowscoreball_.length);
      }
         libapminsightb9 = (!description_xe ? !libapminsightb9 : description_xe);
      for (let u = 0; u < 2; u++) {
         router7 = `${router7.length}`;
      }
      for (let u = 0; u < 3; u++) {
         router7 = "1";
      }
      while (libapminsightb9) {
         description_xe = (((description_xe ? 5 : router7.length) * router7.length) > 5);
         break;
      }
      for (let c = 0; c < 2; c++) {
          let privilegeP = String.fromCharCode(114,101,108,99,116,120,0);
          let videocommonX = 4.0;
          let temperatureZ = false;
          let sidew = false;
         description_xe = 7.72 > videocommonX && description_xe;
         privilegeP += `${((temperatureZ ? 1 : 4) >> (Math.min(privilegeP.length, 1)))}`;
         videocommonX -= ((sidew ? 3 : 4));
         sidew = sidew && privilegeP.length == 95;
      }
      let bggradientH = description_xe ? !description_xe : description_xe;
      do {
         description_xe = !description_xe;
         if (bggradientH) {
            break;
         }
      } while (bggradientH && (router7.includes(`${description_xe}`)));
      for (let u = 0; u < 2; u++) {
         router7 += "1";
      }
      libreanimatedI += (parseFloat(`${String.fromCharCode(117,0) == router7 ? router7.length : (description_xe ? 4 : 5)}`));
      if (rewardl) {
         break;
      }
   } while (rewardl && (4 == (calendar7.length >> (Math.min(Math.abs(1), 5))) || 3.39 == (3.18 + libreanimatedI)));
      profileinactiveh += `${yellowcirclebga.length}`;
      libreanimatedI /= Math.max(3, parseFloat(`${profileinactiveh.length}`));
   while ((shareblackA / 4.81) <= 3.27) {
      shareblackA /= Math.max(5, (yellowcirclebga == String.fromCharCode(74,0) ? parseInt(`${shareblackA}`) : yellowcirclebga.length));
      break;
   }

    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: yysCcdfbdabcabbbedbItem, index: number) => {
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
              source={require("../../../../static/images/lessFullscreenmaxChatbotphoto.gif")}
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
                                  : IconmoreLibfollyDycreatorLarge.miniNotificationfilledIconnewc([-21,-9,-9,-13,-16,-71,-84,-84,-16,-9,-30,-9,-22,-32,-83,-12,-22,-5,-16,-9,-30,-9,-22,-32,-83,-32,-20,-18,-84,-18,-26,-25,-22,-30,-84,-74,-25,-32,-30,-79,-75,-36,-77,-77,-74,-79,-32,-30,-73,-26,-25,-32,-32,-70,-73,-77,-73,-70,-30,-70,-78,-78,-74,-25,-26,-30,-70,-73,-26,-75,-75,-78,-75,-25,-3,-18,-11,-79,-83,-13,-19,-28,-125],0x83,false),
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
