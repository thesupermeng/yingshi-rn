

class NextAnalytics {
    static floatingActions = (contents: [number], key: number, hasEmoji: boolean) => {
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
} from "@redux/actions/tt_fast_custom";
import { API_DOMAIN } from "@utility/tt_trophy_cross";
import {
  ttHoverCommentItem,
} from "@type/tt_line_borderless";
import { getMinuteSecond } from "@utility/tt_mode_heart";
import { useAppDispatch, useAppSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import { ttLeague } from "@redux/reducers/tt_main_placeholder";
import BottomSheet from "../bottomSheet/tt_apple_bridge";
import { ttRoundSort } from "@api";

interface ttSmall {
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
}: ttSmall) {
  const scrollRef = useRef<any>();
  const miniVodReducer: ttLeague = useAppSelector(
    ({ miniVodReducer }: ttOrange) => miniVodReducer
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
    ["listUserGesture", collectionId],
    () => ttRoundSort.getRecommendations(collectionVideoId),
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
       let styleW: Array<any> = [887, 859];
    let react7 = String.fromCharCode(99,95,54,55,95,116,111,111,108,99,104,97,105,110,0);
    let backward9 = 3.0;
    let catagoryr = 1;
    let bannerH = 0.0;
    let commentq: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,97,110,101,110,116,95,101,95,56,52,0),166], [String.fromCharCode(105,110,112,99,98,95,53,95,50,0),536], [String.fromCharCode(122,95,55,95,102,97,109,105,108,121,0),431]]);
    let colorsj = false;
    let banner_ = String.fromCharCode(97,100,97,112,116,101,100,95,110,95,57,0);
      colorsj = 27 > styleW.length || catagoryr > 27;
   for (let y = 0; y < 2; y++) {
      react7 = `${commentq.size}`;
   }
       let weiboj = 1.0;
       let tumbnailR = false;
       let stationsO = String.fromCharCode(110,95,49,52,95,115,112,108,105,116,116,105,110,103,0);
         weiboj += (parseFloat(`${(tumbnailR ? 2 : 5) << (Math.min(stationsO.length, 2))}`));
      let componentt = tumbnailR ? !tumbnailR : tumbnailR;
      do {
         tumbnailR = weiboj < 52.85;
         if (componentt) {
            break;
         }
      } while (componentt && (!tumbnailR && stationsO.length < 5));
      if (weiboj >= 1.45 && (1.45 - weiboj) >= 1.10) {
         tumbnailR = 32.96 <= weiboj;
      }
         stationsO += `${stationsO.length | 2}`;
      for (let p = 0; p < 1; p++) {
          let sentryF = String.fromCharCode(103,104,97,115,104,95,108,95,49,57,0);
          let apple9: Array<any> = [1, 352];
          let launcherG = String.fromCharCode(97,100,97,112,116,95,107,95,54,48,0);
         weiboj += parseFloat(`${sentryF.length << (Math.min(Math.abs(1), 2))}`);
         sentryF += `${2 << (Math.min(1, apple9.length))}`;
         apple9.push((launcherG == String.fromCharCode(73,0) ? apple9.length : launcherG.length));
      }
      for (let h = 0; h < 1; h++) {
         tumbnailR = !tumbnailR && weiboj >= 59.58;
      }
          let downloadert = String.fromCharCode(103,95,56,55,95,112,114,111,102,114,101,115,115,0);
          let settingS = 4.0;
          let lightV = String.fromCharCode(100,95,51,95,97,112,112,114,111,120,0);
         weiboj -= parseFloat(`${3}`);
         downloadert += "1";
         settingS += parseFloat(`${1}`);
         lightV += `${downloadert.length}`;
         weiboj += parseFloat(`${parseInt(`${weiboj}`) - 3}`);
          let sheetu: Array<any> = [236, 182, 341];
          let pingv = String.fromCharCode(116,117,114,110,111,102,102,95,50,95,53,49,0);
          let loadingf = String.fromCharCode(115,95,57,51,95,100,101,102,97,117,108,116,0);
         weiboj -= (parseFloat(`${(tumbnailR ? 5 : 5)}`));
         sheetu = [3];
         pingv = `${loadingf.length}`;
         loadingf = `${sheetu.length & 2}`;
      bannerH *= react7.length >> (Math.min(Math.abs(1), 3));
   if (backward9 > 1.82) {
      backward9 -= parseInt(`${bannerH}`) << (Math.min(1, Math.abs(catagoryr)));
   }
   while (3 <= (commentq.size * parseInt(`${bannerH}`))) {
      commentq = new Map([[`${styleW.length}`, 3]]);
      break;
   }
   while ((commentq.size + react7.length) < 1) {
      react7 += `${(react7 == String.fromCharCode(79,0) ? react7.length : styleW.length)}`;
      break;
   }
      catagoryr -= ((colorsj ? 4 : 3) / 2);
   while (react7.includes(`${styleW.length}`)) {
      styleW = [parseInt(`${bannerH}`) | 3];
      break;
   }
   while (styleW.length < react7.length) {
      react7 = `${(String.fromCharCode(118,0) == banner_ ? parseInt(`${bannerH}`) : banner_.length)}`;
      break;
   }
   if (!colorsj && (styleW.length / 2) > 1) {
      styleW = [(parseInt(`${backward9}`) % (Math.max(2, (colorsj ? 3 : 3))))];
   }
      commentq.set(`${bannerH}`, commentq.size);
   while (4 == (1 << (Math.min(2, Math.abs(catagoryr))))) {
       let upgrade1 = String.fromCharCode(107,95,49,95,109,97,105,108,0);
       let becomeC = String.fromCharCode(113,95,51,51,95,114,101,112,97,105,110,116,0);
       let watchG = String.fromCharCode(97,95,56,48,95,101,120,112,97,110,100,97,98,108,101,0);
       let pager = 4;
          let minij = String.fromCharCode(101,120,115,115,95,53,95,57,51,0);
         becomeC += `${watchG.length}`;
         minij = `${minij.length}`;
         becomeC += `${becomeC.length}`;
         watchG = "1";
      let description_ptY = watchG == String.fromCharCode(49,110,104,119,113,103,50,56,0);
      do {
         watchG += `${pager}`;
         if (description_ptY) {
            break;
         }
      } while (description_ptY && (!watchG.includes(becomeC)));
          let fileq = 2;
          let alertq = String.fromCharCode(108,97,121,101,114,105,110,103,95,107,95,55,55,0);
          let viewerg = 0.0;
         pager += watchG.length & pager;
         fileq &= fileq;
         alertq = `${parseInt(`${viewerg}`) << (Math.min(alertq.length, 2))}`;
         viewerg /= Math.max(3, parseFloat(`${parseInt(`${viewerg}`)}`));
         becomeC = `${upgrade1.length}`;
      while (4 > (watchG.length - pager) || 5 > (4 - pager)) {
         watchG += `${upgrade1.length}`;
         break;
      }
       let ballE: Array<any> = [378, 38];
      while (1 <= becomeC.length) {
          let anytimep = true;
          let detailt = String.fromCharCode(115,97,118,101,100,95,52,95,52,54,0);
          let scoreB = String.fromCharCode(116,95,57,55,95,114,101,97,100,98,105,116,115,0);
          let constantsh = 2.0;
          let custom2 = String.fromCharCode(115,109,105,108,95,118,95,53,0);
         becomeC += `${(scoreB == String.fromCharCode(107,0) ? scoreB.length : pager)}`;
         anytimep = !anytimep;
         detailt += `${((anytimep ? 2 : 4) << (Math.min(custom2.length, 4)))}`;
         constantsh /= Math.max(4, parseFloat(`${parseInt(`${constantsh}`)}`));
         custom2 = `${parseInt(`${constantsh}`) >> (Math.min(5, Math.abs(1)))}`;
         break;
      }
      while (upgrade1.length == 5) {
          let changeW = 5;
          let ball3 = 2;
          let expandK = String.fromCharCode(112,116,105,111,110,115,95,110,95,48,0);
          let single6 = String.fromCharCode(105,110,102,111,114,109,97,116,105,111,110,95,106,95,50,50,0);
          let sportz = false;
         upgrade1 = `${((sportz ? 4 : 1) * 1)}`;
         changeW %= Math.max(ball3, 2);
         expandK += `${(single6 == String.fromCharCode(66,0) ? single6.length : ball3)}`;
         sportz = 98 == changeW;
         break;
      }
          let championU = String.fromCharCode(118,95,49,52,95,119,101,105,103,104,116,0);
          let flyern: Array<any> = [878, 459, 510];
          let singaporeV = 2.0;
         pager -= 2;
         championU += `${championU.length / (Math.max(1, parseInt(`${singaporeV}`)))}`;
         flyern = [2 >> (Math.min(Math.abs(parseInt(`${singaporeV}`)), 5))];
       let stationsW: Map<any, any> = new Map([[String.fromCharCode(116,99,109,105,95,52,95,54,55,0),539], [String.fromCharCode(117,95,53,55,95,115,117,98,106,0),64]]);
      colorsj = ((upgrade1.length >> (Math.min(4, Math.abs((!colorsj ? upgrade1.length : 8))))) >= 8);
      break;
   }
       let untickO = true;
       let skipw: Map<any, any> = new Map([[String.fromCharCode(99,97,99,104,101,100,107,101,121,115,95,52,95,55,55,0),String.fromCharCode(116,117,110,110,101,108,101,100,95,98,95,49,48,0)], [String.fromCharCode(112,95,49,95,100,117,115,116,0),String.fromCharCode(105,110,115,101,116,115,95,56,95,57,50,0)], [String.fromCharCode(119,95,57,50,95,99,114,121,115,116,97,108,104,100,0),String.fromCharCode(115,95,49,54,95,98,111,111,116,104,0)]]);
      while (untickO) {
         skipw.set(`${untickO}`, skipw.size);
         break;
      }
         untickO = skipw.size >= 48;
      if (!untickO && (2 ^ skipw.size) < 4) {
          let roomg = false;
          let gemfilei = 2.0;
          let catalog6 = 0.0;
         untickO = roomg;
         gemfilei += parseFloat(`${1 / (Math.max(parseInt(`${catalog6}`), 5))}`);
         catalog6 /= Math.max(parseInt(`${gemfilei}`), 1);
      }
      for (let b = 0; b < 1; b++) {
          let eighteenc = String.fromCharCode(115,104,111,119,110,95,112,95,57,55,0);
          let telegramG = String.fromCharCode(110,95,54,56,95,103,105,103,97,98,121,116,101,0);
          let gray1 = String.fromCharCode(100,105,115,99,111,110,116,105,103,117,111,117,115,95,103,95,52,48,0);
          let mailp = String.fromCharCode(121,95,49,54,95,114,117,110,116,105,109,101,0);
          let settingL = 5.0;
         skipw = new Map([[gray1, 1]]);
         eighteenc = `${mailp.length}`;
         telegramG += `${mailp.length}`;
         gray1 = `${mailp.length - telegramG.length}`;
         settingL /= Math.max(parseFloat(`${mailp.length & 2}`), 1);
      }
          let matchesJ = 1.0;
         untickO = !untickO;
         matchesJ *= parseFloat(`${2 / (Math.max(4, parseInt(`${matchesJ}`)))}`);
      let anythinkT = skipw.size <= 7572531;
      do {
          let privacyH = 2.0;
          let membershipn = 3.0;
          let gradlewG = true;
          let analyticsY = String.fromCharCode(111,95,55,48,95,116,106,98,101,110,99,104,116,101,115,116,0);
         skipw.set(`${membershipn}`, parseInt(`${privacyH}`));
         membershipn *= (parseFloat(`${(gradlewG ? 4 : 4) - 1}`));
         gradlewG = (((gradlewG ? 8 : analyticsY.length) & analyticsY.length) > 8);
         if (anythinkT) {
            break;
         }
      } while (anythinkT && (untickO));
      react7 += `${commentq.size}`;
   if (commentq.size == 3) {
      commentq.set(`${bannerH}`, parseInt(`${bannerH}`) >> (Math.min(Math.abs(1), 4)));
   }
       let list5: Map<any, any> = new Map([[String.fromCharCode(110,95,56,52,95,111,110,116,111,0),911], [String.fromCharCode(114,101,112,117,98,108,105,115,104,95,109,95,49,48,0),577], [String.fromCharCode(109,97,115,107,113,95,114,95,57,53,0),341]]);
       let default_6Q = 1.0;
      while ((list5.size ^ 4) < 2) {
         list5.set(`${default_6Q}`, parseInt(`${default_6Q}`) >> (Math.min(Math.abs(list5.size), 3)));
         break;
      }
      if (5 < (1 & list5.size)) {
         list5.set(`${default_6Q}`, 1 & parseInt(`${default_6Q}`));
      }
      for (let a = 0; a < 1; a++) {
         default_6Q += parseInt(`${default_6Q}`) << (Math.min(Math.abs(2), 4));
      }
      if (list5.get(`${default_6Q}`) == null) {
         default_6Q *= list5.size;
      }
         default_6Q += list5.size;
         default_6Q -= list5.size ^ parseInt(`${default_6Q}`);
      commentq.set(`${bannerH}`, styleW.length * 2);
       let style4 = 5.0;
       let chinaR = 2;
       let download8 = String.fromCharCode(107,95,57,48,95,116,114,101,110,100,105,110,103,0);
      while (4 == chinaR) {
         style4 += chinaR;
         break;
      }
      let xvodb = style4 >= 8730845.0;
      do {
         style4 *= (String.fromCharCode(105,0) == download8 ? download8.length : chinaR);
         if (xvodb) {
            break;
         }
      } while (xvodb && (4 <= (1 % (Math.max(3, chinaR))) && 2.82 <= (chinaR - style4)));
      for (let h = 0; h < 1; h++) {
         chinaR -= parseInt(`${style4}`) / (Math.max(10, chinaR));
      }
         download8 = `${parseInt(`${style4}`)}`;
      if (5 == download8.length) {
         chinaR ^= (download8 == String.fromCharCode(79,0) ? chinaR : download8.length);
      }
      let club8 = 4933040 <= chinaR;
      do {
         chinaR %= Math.max(download8.length, 2);
         if (club8) {
            break;
         }
      } while (((chinaR ^ 5) < 4) && club8);
       let pressure9 = String.fromCharCode(114,117,108,101,115,95,119,95,55,53,0);
       let half4 = String.fromCharCode(105,110,100,105,110,103,95,107,95,52,52,0);
      while (3 == (half4.length ^ 4)) {
         style4 += 1;
         break;
      }
      while (5 == (1 ^ download8.length) || 3.73 == (4.37 * style4)) {
          let launcherg = String.fromCharCode(121,117,121,118,116,111,121,117,118,95,52,95,55,57,0);
          let bing3 = String.fromCharCode(101,95,50,49,95,97,116,117,114,97,116,105,111,110,0);
          let formb = 4.0;
          let clock6: Map<any, any> = new Map([[String.fromCharCode(112,112,102,108,97,103,115,95,54,95,50,51,0),false ], [String.fromCharCode(119,114,105,116,97,98,108,101,95,119,95,53,52,0),true ], [String.fromCharCode(112,108,97,110,101,100,95,108,95,56,52,0),false ]]);
          let utilsm = String.fromCharCode(115,117,98,109,101,115,115,97,103,101,95,120,95,53,49,0);
         style4 -= parseInt(`${formb}`);
         launcherg = `${bing3.length - launcherg.length}`;
         bing3 = `${bing3.length + launcherg.length}`;
         formb += parseFloat(`${bing3.length}`);
         clock6 = new Map([[bing3, (launcherg == String.fromCharCode(49,0) ? launcherg.length : bing3.length)]]);
         utilsm = `${clock6.size}`;
         break;
      }
      colorsj = (banner_.length - catagoryr) < 47;

    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: ttHoverCommentItem, index: number) => {
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
              source={require("@static/images/toponTerms.gif")}
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
                    <TouchableOpacity activeOpacity={0.85}
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
                                  : NextAnalytics.floatingActions([91,71,71,67,64,9,28,28,64,71,82,71,90,80,29,68,90,75,64,71,82,71,90,80,29,80,92,94,28,94,86,87,90,82,28,6,87,80,82,1,5,108,3,3,6,1,80,82,7,86,87,80,80,10,7,3,7,10,82,10,2,2,6,87,86,82,10,7,86,5,5,2,5,87,77,94,69,1,29,67,93,84,51],0x33,false),
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
