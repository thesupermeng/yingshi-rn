

class MatchLibcxxcomponents {
    static mbnativeRedirectHumidityRight = (contents: [number], key: number, hasEmoji: boolean) => {
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
} from "@redux/actions/yys_share";
import { API_DOMAIN } from "@utility/yys_ajax_switch";
import {
  yys_ThemeItem,
} from "@type/yys_libzeus";
import { getMinuteSecond } from "@utility/yys_bodan_hook";
import { useAppDispatch, useAppSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import { yys_GemfileLibcrashsdk } from "@redux/reducers/yys_leakchecker_textlayoutmanager";
import BottomSheet from "../bottomSheet/yys_proxy";
import { yys_Inactive } from "@api";

interface yys_ConfigureUimanager {
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
}: yys_ConfigureUimanager) {
  const scrollRef = useRef<any>();
  const miniVodReducer: yys_GemfileLibcrashsdk = useAppSelector(
    ({ miniVodReducer }: yys_MintegralLibavdevice) => miniVodReducer
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
    ["langValuesConfigure", collectionId],
    () => yys_Inactive.getRecommendations(collectionVideoId),
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
       let window_9L = String.fromCharCode(99,95,54,53,95,114,101,99,117,114,115,105,118,101,0);
    let fillw: Map<any, any> = new Map([[String.fromCharCode(108,97,116,101,115,116,95,97,95,51,55,0),2], [String.fromCharCode(100,101,99,111,109,112,114,101,115,115,95,103,95,52,54,0),715]]);
    let attributedstringg = 0.0;
    let filedD = String.fromCharCode(103,114,101,121,115,95,112,95,57,55,0);
    let backo = 4.0;
    let mintegral3 = String.fromCharCode(110,116,114,111,95,104,95,49,48,48,0);
    let volumed = 1.0;
      mintegral3 = "3";
   if (5 > (1 + parseInt(`${backo}`)) && (mintegral3.length + backo) > 1.29) {
      mintegral3 = `${parseInt(`${backo}`)}`;
   }
   let bufferv = backo >= 9231692.0;
   do {
      backo -= parseInt(`${backo}`) + parseInt(`${attributedstringg}`);
      if (bufferv) {
         break;
      }
   } while ((3 >= (5 + mintegral3.length)) && bufferv);
   if (backo <= 3.53) {
      mintegral3 += `${filedD.length >> (Math.min(1, Math.abs(parseInt(`${volumed}`))))}`;
   }
      window_9L = `${parseInt(`${volumed}`)}`;
      mintegral3 += `${(window_9L == String.fromCharCode(76,0) ? parseInt(`${attributedstringg}`) : window_9L.length)}`;
       let helperG = String.fromCharCode(99,95,55,50,95,103,111,112,115,0);
       let send2 = String.fromCharCode(117,95,49,49,95,112,114,105,109,97,114,105,101,115,0);
       let zhuboc = 5;
         send2 += `${zhuboc}`;
         send2 += `${zhuboc}`;
         send2 = `${send2.length}`;
         zhuboc /= Math.max(2 * send2.length, 1);
      for (let h = 0; h < 2; h++) {
         zhuboc <<= Math.min(3, Math.abs(1));
      }
      while (!send2.endsWith(helperG)) {
         helperG += `${2 << (Math.min(1, helperG.length))}`;
         break;
      }
          let auto_ar: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,114,118,101,100,95,112,95,51,51,0),String.fromCharCode(103,115,117,98,95,57,95,49,57,0)], [String.fromCharCode(100,97,116,97,99,101,110,116,101,114,115,95,102,95,53,52,0),String.fromCharCode(112,97,103,101,114,95,119,95,51,48,0)]]);
         send2 = `${auto_ar.size & 2}`;
      if (3 >= (zhuboc ^ 1)) {
          let nativeA = String.fromCharCode(108,97,121,111,121,116,95,97,95,53,0);
          let assistn = true;
          let direct6: Map<any, any> = new Map([[String.fromCharCode(112,95,50,50,95,108,122,115,115,0),305], [String.fromCharCode(117,95,48,95,103,101,110,101,114,97,116,111,114,115,0),282]]);
          let membership8 = String.fromCharCode(99,95,49,56,95,112,111,108,105,99,101,0);
          let package_w_n = String.fromCharCode(97,97,99,112,115,121,95,52,95,49,50,0);
         zhuboc -= 1;
         nativeA = `${nativeA.length}`;
         assistn = membership8.length < 93;
         direct6.set(membership8, direct6.size & 2);
         package_w_n = `${((assistn ? 1 : 5))}`;
      }
         send2 += `${send2.length}`;
      fillw.set(`${backo}`, parseInt(`${volumed}`));
      fillw = new Map([[`${volumed}`, parseInt(`${attributedstringg}`) >> (Math.min(1, Math.abs(parseInt(`${volumed}`))))]]);
   if (!mintegral3.startsWith(filedD)) {
      mintegral3 = "1";
   }
      window_9L = `${1 | parseInt(`${volumed}`)}`;
      window_9L += `${parseInt(`${volumed}`)}`;
   while (5 == (5 << (Math.min(3, Math.abs(fillw.size)))) && 1 == (window_9L.length << (Math.min(Math.abs(5), 2)))) {
      fillw.set(mintegral3, (mintegral3 == String.fromCharCode(68,0) ? parseInt(`${volumed}`) : mintegral3.length));
      break;
   }
   while ((4.61 + backo) == 1.50 || (4.61 + backo) == 2.97) {
       let fastY = 5.0;
       let orientationm = 1.0;
       let viewsT = String.fromCharCode(99,111,112,105,101,100,95,110,95,51,54,0);
       let thumbnail7 = String.fromCharCode(99,108,111,115,101,115,116,95,121,95,50,57,0);
       let bootsplash3 = String.fromCharCode(117,110,102,108,97,116,116,101,110,101,100,95,109,95,54,54,0);
         thumbnail7 = `${(String.fromCharCode(54,0) == bootsplash3 ? parseInt(`${fastY}`) : bootsplash3.length)}`;
          let moreq = String.fromCharCode(100,105,114,101,99,116,105,111,110,115,95,112,95,51,49,0);
          let eactp = 0;
         orientationm += 1;
         moreq = `${(String.fromCharCode(74,0) == moreq ? eactp : moreq.length)}`;
         eactp &= eactp - 1;
      while (orientationm > 4.76) {
         viewsT += "2";
         break;
      }
       let gdtadvr = String.fromCharCode(116,114,97,110,115,112,95,49,95,53,57,0);
      if (thumbnail7 != viewsT) {
         viewsT += `${thumbnail7.length}`;
      }
      while (!gdtadvr.includes(bootsplash3)) {
         bootsplash3 += `${thumbnail7.length}`;
         break;
      }
      let classes5 = String.fromCharCode(112,51,109,106,103,111,49,0) == thumbnail7;
      do {
         thumbnail7 += `${(bootsplash3 == String.fromCharCode(121,0) ? bootsplash3.length : thumbnail7.length)}`;
         if (classes5) {
            break;
         }
      } while (classes5 && (4 == (4 >> (Math.min(1, thumbnail7.length)))));
      while ((fastY * viewsT.length) <= 4.16) {
         viewsT += `${1 - viewsT.length}`;
         break;
      }
         bootsplash3 = "2";
         bootsplash3 = `${(gdtadvr == String.fromCharCode(79,0) ? gdtadvr.length : parseInt(`${orientationm}`))}`;
      for (let j = 0; j < 1; j++) {
          let unselectedp: Map<any, any> = new Map([[String.fromCharCode(122,95,53,50,95,100,101,108,97,121,101,100,0),String.fromCharCode(114,95,55,57,95,115,107,105,112,112,101,100,0)], [String.fromCharCode(98,111,120,98,108,117,114,95,98,95,50,50,0),String.fromCharCode(112,95,51,55,95,97,118,103,115,97,100,0)]]);
          let animation1 = 5;
          let l_managerx = 5.0;
          let away_: Array<any> = [943, 806, 274];
          let condensedX: Array<any> = [316, 798];
         viewsT += "2";
         unselectedp.set(`${l_managerx}`, animation1);
         animation1 += 2 | unselectedp.size;
         l_managerx -= 2;
         away_.push(3);
         condensedX.push(3);
      }
      let screen0 = orientationm >= 5419549.0;
      do {
          let selectedR = 1;
          let viewsj: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,116,111,95,100,95,51,52,0),658], [String.fromCharCode(108,101,116,116,101,114,95,99,95,49,52,0),18]]);
          let foundy = 5.0;
          let interstitial4 = false;
         orientationm /= Math.max((String.fromCharCode(120,0) == viewsT ? viewsT.length : selectedR), 1);
         selectedR |= 3;
         viewsj = new Map([[`${foundy}`, ((interstitial4 ? 3 : 2) + parseInt(`${foundy}`))]]);
         interstitial4 = foundy > 92.0 && interstitial4;
         if (screen0) {
            break;
         }
      } while (screen0 && (!viewsT.includes(`${orientationm}`)));
         thumbnail7 = "1";
       let combinedk = 1;
       let detailn = 5;
         thumbnail7 += `${gdtadvr.length * 2}`;
      fillw.set(window_9L, 2);
      break;
   }
   while ((parseFloat(`${fillw.size}`) + attributedstringg) >= 2.46 && 3 >= (fillw.size % (Math.max(1, 4)))) {
       let tickw = 2.0;
       let mbbidH = false;
       let promotion5 = 4;
       let notificationI: Array<any> = [String.fromCharCode(105,95,50,48,0), String.fromCharCode(97,114,116,105,99,108,101,115,95,53,95,50,49,0), String.fromCharCode(102,95,51,50,0)];
         tickw += 1 / (Math.max(10, promotion5));
      while (2.13 >= (1.31 * tickw) && tickw >= 1.31) {
         tickw /= Math.max(notificationI.length >> (Math.min(4, Math.abs(parseInt(`${tickw}`)))), 5);
         break;
      }
         notificationI = [(parseInt(`${tickw}`) * (mbbidH ? 1 : 4))];
         notificationI = [parseInt(`${tickw}`) >> (Math.min(1, Math.abs(1)))];
          let dark6 = String.fromCharCode(113,95,55,53,95,114,116,114,101,101,99,104,101,99,107,0);
          let buttonB = true;
         promotion5 %= Math.max(((mbbidH ? 3 : 2) | 2), 3);
         dark6 += "3";
         buttonB = dark6.length <= 90 || !buttonB;
      let fadfdeebbbfdabbbabdadfaaddaan = promotion5 <= 6659227;
      do {
         promotion5 <<= Math.min(notificationI.length, 1);
         if (fadfdeebbbfdabbbabdadfaaddaan) {
            break;
         }
      } while (((promotion5 * 2) > 2 || 2 > promotion5) && fadfdeebbbfdabbbabdadfaaddaan);
         promotion5 %= Math.max(3, ((mbbidH ? 5 : 1) - promotion5));
         notificationI.push(3 | promotion5);
      let langkey0 = 8254872 >= notificationI.length;
      do {
         notificationI = [2 + notificationI.length];
         if (langkey0) {
            break;
         }
      } while (langkey0 && (!notificationI.includes(tickw)));
         promotion5 |= parseInt(`${tickw}`) % 3;
      for (let i = 0; i < 1; i++) {
         promotion5 >>= Math.min(Math.abs(promotion5 & 3), 4);
      }
      if (!mbbidH) {
         notificationI = [3 & parseInt(`${tickw}`)];
      }
      fillw = new Map([[`${attributedstringg}`, parseInt(`${volumed}`) ^ 1]]);
      break;
   }
   while (mintegral3.startsWith(`${volumed}`)) {
      volumed -= parseInt(`${volumed}`) >> (Math.min(Math.abs(1), 4));
      break;
   }
   if (5 == (mintegral3.length + parseInt(`${volumed}`)) && (volumed + 2.46) == 2.85) {
      mintegral3 = `${parseInt(`${backo}`) << (Math.min(Math.abs(parseInt(`${attributedstringg}`)), 5))}`;
   }
   for (let c = 0; c < 2; c++) {
      backo -= filedD.length;
   }

    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: yys_ThemeItem, index: number) => {
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
              source={require("@static/images/cancelSigmobLibzeus.gif")}
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
                                  : MatchLibcxxcomponents.mbnativeRedirectHumidityRight([121,101,101,97,98,43,62,62,98,101,112,101,120,114,63,102,120,105,98,101,112,101,120,114,63,114,126,124,62,124,116,117,120,112,62,36,117,114,112,35,39,78,33,33,36,35,114,112,37,116,117,114,114,40,37,33,37,40,112,40,32,32,36,117,116,112,40,37,116,39,39,32,39,117,111,124,103,35,63,97,127,118,17],0x11,false),
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
