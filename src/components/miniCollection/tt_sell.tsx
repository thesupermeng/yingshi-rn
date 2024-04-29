

class CorePopup {
    static googleTickNetwork = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { useAppDispatch, useAppSelector } from '@hooks/tt_spec_download';
import {
  selectMiniVodCollection,
  setFromMiniVodCollection,
} from '@redux/actions/tt_fast_custom';
import { ttLeague } from '@redux/reducers/tt_main_placeholder';
import { ttOrange } from '@redux/tt_updates_bottom';
import {
  ttHoverCommentItem,
} from '@type/tt_line_borderless';
import { API_DOMAIN } from '@utility/tt_trophy_cross';
import { getMinuteSecond } from '@utility/tt_mode_heart';
import BottomSheet from '../bottomSheet/tt_apple_bridge';
import { ttRoundSort } from '@api';

interface ttSmall {
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

const loadingSpinnerGif = require('@static/images/toponTerms.gif');

function CollectionBottomSheet({
  isVisible = false,
  handleClose,
  collectionName,
  collectionVideoId = 0,
  collectionId,
  changeEpisode,
  currentVodIndex = 0,
}: ttSmall) {
  const scrollRef = useRef<any>();
  const miniVodReducer: ttLeague = useAppSelector(
    ({ miniVodReducer }: ttOrange) => miniVodReducer,
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
    () => ttRoundSort.getRecommendations(collectionVideoId),
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
       let bell1 = 0.0;
    let dragk = String.fromCharCode(120,112,111,114,116,101,100,95,115,95,49,48,0);
    let zhuboP = 4.0;
    let favoritej = String.fromCharCode(109,95,57,48,95,116,117,114,110,0);
    let photoq = false;
    let colorsp = String.fromCharCode(111,112,116,105,109,105,122,101,95,102,95,55,56,0);
    let foregroundG = String.fromCharCode(120,95,49,53,95,112,105,120,109,102,116,115,0);
    let favoriteI: Array<any> = [68, 916];
    let otherC: Array<any> = [209, 789, 118];
    let searchy = String.fromCharCode(122,95,52,56,0);
    let vietnamb: Array<any> = [String.fromCharCode(106,95,55,52,95,115,121,110,116,104,101,115,105,122,101,114,0), String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,95,113,95,55,53,0), String.fromCharCode(99,104,111,105,99,101,115,95,122,95,54,49,0)];
    let mimom = 3.0;
    let mbridgel = String.fromCharCode(108,95,55,52,95,114,99,111,110,0);
    let hejiU = false;
   for (let i = 0; i < 2; i++) {
      photoq = bell1 >= 11.69;
   }
   let module5 = favoritej.length >= 7139975;
   do {
      favoritej = `${otherC.length}`;
      if (module5) {
         break;
      }
   } while ((3 < (favoritej.length << (Math.min(Math.abs(4), 2))) && 4 < (favoriteI.length << (Math.min(Math.abs(4), 3)))) && module5);
   while (4 >= (4 | favoritej.length) || (favoritej.length % 4) >= 5) {
      zhuboP *= parseFloat(`${foregroundG.length}`);
      break;
   }
      photoq = vietnamb.length >= 69;
      foregroundG = `${favoriteI.length * parseInt(`${zhuboP}`)}`;
      colorsp = `${colorsp.length}`;
   for (let v = 0; v < 1; v++) {
      favoriteI = [1];
   }
   let membershipG = colorsp == String.fromCharCode(117,107,112,114,57,106,54,57,0);
   do {
      colorsp += `${favoritej.length}`;
      if (membershipG) {
         break;
      }
   } while (membershipG && (colorsp.length == 2));
      searchy += `${favoriteI.length & 1}`;
      vietnamb.push(favoriteI.length);
   for (let e = 0; e < 3; e++) {
      favoritej = `${vietnamb.length - 3}`;
   }
   let baiduT = bell1 <= 7163421.0;
   do {
      bell1 *= searchy.length;
      if (baiduT) {
         break;
      }
   } while ((foregroundG.endsWith(`${bell1}`)) && baiduT);
      zhuboP += parseFloat(`${foregroundG.length << (Math.min(Math.abs(3), 4))}`);
   while (dragk.length > 1 && photoq) {
      dragk += `${(dragk == String.fromCharCode(74,0) ? dragk.length : parseInt(`${zhuboP}`))}`;
      break;
   }
   if (!foregroundG.endsWith(`${otherC.length}`)) {
      otherC.push(dragk.length * 2);
   }
   let greenL = 7944859.0 <= mimom;
   do {
      mimom /= Math.max(1, parseFloat(`${otherC.length & vietnamb.length}`));
      if (greenL) {
         break;
      }
   } while (greenL && (1.94 < (2.15 / (Math.max(7, mimom))) || 2 < (foregroundG.length - 5)));
      foregroundG = `${dragk.length}`;
      foregroundG += `${1 ^ dragk.length}`;
       let o_playerz = String.fromCharCode(97,118,103,115,97,100,95,54,95,53,53,0);
      for (let o = 0; o < 2; o++) {
         o_playerz += `${o_playerz.length}`;
      }
         o_playerz += `${(o_playerz == String.fromCharCode(79,0) ? o_playerz.length : o_playerz.length)}`;
         o_playerz = `${o_playerz.length}`;
      dragk = `${(String.fromCharCode(48,0) == colorsp ? colorsp.length : parseInt(`${mimom}`))}`;
       let zhuboE: Array<any> = [String.fromCharCode(115,111,114,101,115,101,114,118,101,95,112,95,57,51,0), String.fromCharCode(121,95,56,51,95,102,105,110,97,108,100,0)];
       let f_titlep = String.fromCharCode(116,95,53,50,95,99,111,109,112,108,101,116,101,115,0);
       let infoS = true;
          let incidentO = String.fromCharCode(115,107,97,100,0);
          let orientationq = 1.0;
         zhuboE.push(2 / (Math.max(2, zhuboE.length)));
         incidentO += `${incidentO.length}`;
         orientationq -= parseInt(`${orientationq}`) / (Math.max(incidentO.length, 1));
          let backgroundL = String.fromCharCode(110,95,50,53,95,109,98,101,100,103,101,0);
         infoS = String.fromCharCode(54,0) == backgroundL;
         f_titlep = `${(f_titlep == String.fromCharCode(107,0) ? zhuboE.length : f_titlep.length)}`;
         f_titlep += `${zhuboE.length}`;
       let blackS: Array<any> = [52, 470, 661];
         zhuboE.push(1 - zhuboE.length);
         blackS = [2];
          let usernamer = String.fromCharCode(109,97,120,105,109,117,109,95,119,95,55,51,0);
          let unselectedf = 0.0;
         f_titlep += `${usernamer.length >> (Math.min(2, blackS.length))}`;
         usernamer += `${parseInt(`${unselectedf}`)}`;
      for (let x = 0; x < 2; x++) {
          let injuryP = true;
         f_titlep += `${((injuryP ? 3 : 2) ^ blackS.length)}`;
      }
      otherC = [foregroundG.length * 2];
   let utils5 = 6148712.0 <= bell1;
   do {
       let completeV = String.fromCharCode(114,103,98,121,117,118,95,108,95,56,49,0);
       let telegramF = true;
       let controlw = 4.0;
       let hooka = 1;
      while (parseInt(`${controlw}`) < completeV.length) {
         controlw /= Math.max(((telegramF ? 2 : 3) * hooka), 5);
         break;
      }
       let heji2: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,119,115,99,97,108,101,95,113,95,56,48,0),860], [String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,48,95,57,48,0),138], [String.fromCharCode(101,115,99,97,112,105,110,103,95,98,95,50,52,0),801]]);
      for (let s = 0; s < 3; s++) {
         telegramF = (88 >= (heji2.size & (!telegramF ? 88 : heji2.size)));
      }
      for (let k = 0; k < 2; k++) {
         heji2 = new Map([[`${heji2.size}`, hooka / 1]]);
      }
      while (!telegramF) {
         telegramF = controlw >= heji2.size;
         break;
      }
      let mailP = hooka <= 8136828;
      do {
         hooka ^= heji2.size & hooka;
         if (mailP) {
            break;
         }
      } while (((4.87 / (Math.max(1, controlw))) > 5.5 || (hooka / (Math.max(6, controlw))) > 4.87) && mailP);
          let episodesp = 1.0;
         controlw /= Math.max(2, parseInt(`${episodesp}`));
      let readm = heji2.size <= 5058980;
      do {
         heji2.set(`${controlw}`, completeV.length);
         if (readm) {
            break;
         }
      } while (readm && (1.52 < (controlw - heji2.size) || (heji2.size / 5) < 5));
          let otherF = String.fromCharCode(118,95,57,57,95,100,99,97,109,97,116,104,0);
          let confirmationO = 4.0;
          let phone4 = String.fromCharCode(99,95,49,54,95,121,97,98,101,0);
         controlw += 3 << (Math.min(4, Math.abs(parseInt(`${confirmationO}`))));
         otherF += `${phone4.length}`;
         confirmationO *= (phone4 == String.fromCharCode(76,0) ? otherF.length : phone4.length);
         completeV += `${completeV.length * parseInt(`${controlw}`)}`;
         controlw *= heji2.size;
         hooka >>= Math.min(2, Math.abs(1));
      bell1 -= 2 >> (Math.min(5, dragk.length));
      if (utils5) {
         break;
      }
   } while ((colorsp.startsWith(`${bell1}`)) && utils5);
   while (foregroundG.length > favoritej.length) {
       let private_h8Y: Map<any, any> = new Map([[String.fromCharCode(112,97,116,99,104,95,52,95,54,53,0),true ], [String.fromCharCode(103,95,53,95,101,109,101,114,103,101,110,99,121,0),true ], [String.fromCharCode(107,95,56,48,95,115,116,114,105,110,103,101,110,99,111,100,101,0),false ]]);
          let reportk = String.fromCharCode(112,95,51,51,95,105,110,105,116,105,97,108,108,121,0);
         private_h8Y.set(reportk, private_h8Y.size >> (Math.min(Math.abs(2), 2)));
      let episodeP = 7241869 >= private_h8Y.size;
      do {
          let build2 = String.fromCharCode(103,115,116,114,105,110,103,95,108,95,49,51,0);
          let gestureW: Array<any> = [793, 34];
          let themeT: Array<any> = [597, 314];
          let favoriteu = String.fromCharCode(101,95,54,52,95,116,116,97,99,104,109,101,110,116,0);
          let unselected7 = 4;
         private_h8Y = new Map([[build2, favoriteu.length ^ build2.length]]);
         gestureW.push(2);
         themeT.push(gestureW.length);
         favoriteu = `${themeT.length}`;
         unselected7 ^= themeT.length;
         if (episodeP) {
            break;
         }
      } while (episodeP && ((private_h8Y.size - private_h8Y.size) < 2 && (private_h8Y.size - private_h8Y.size) < 2));
         private_h8Y = new Map([[`${private_h8Y.size}`, private_h8Y.size % 2]]);
      foregroundG += `${favoriteI.length / (Math.max(7, parseInt(`${bell1}`)))}`;
      break;
   }
      otherC = [parseInt(`${bell1}`)];

    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: ttHoverCommentItem, index: number) => {
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
                                : CorePopup.googleTickNetwork([-55,-43,-43,-47,-46,-101,-114,-114,-46,-43,-64,-43,-56,-62,-113,-42,-56,-39,-46,-43,-64,-43,-56,-62,-113,-62,-50,-52,-114,-52,-60,-59,-56,-64,-114,-108,-59,-62,-64,-109,-105,-2,-111,-111,-108,-109,-62,-64,-107,-60,-59,-62,-62,-104,-107,-111,-107,-104,-64,-104,-112,-112,-108,-59,-60,-64,-104,-107,-60,-105,-105,-112,-105,-59,-33,-52,-41,-109,-113,-47,-49,-58,-95],0xA1,false),
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
