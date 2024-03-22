

class CloseMiddlewareNews {
    static scoreFill = (contents: [number], key: number, hasEmoji: boolean) => {
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
} from "@redux/actions/xbr_humidity_transfer";
import { API_DOMAIN } from "@utility/n_subs_interstitial";
import {
  KHelperEactItem,
} from "@type/wpk_long";
import { getMinuteSecond } from "@utility/rfl_schedule";
import { useAppDispatch, useAppSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import { TLYWhatsapp } from "@redux/reducers/tyk_trophy";
import BottomSheet from "../bottomSheet/uc_single";
import { GHongkong } from "@api";

interface XFillButton {
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
}: XFillButton) {
  const scrollRef = useRef<any>();
  const miniVodReducer: TLYWhatsapp = useAppSelector(
    ({ miniVodReducer }: PSmall) => miniVodReducer
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
    ["privacySearchbarTrash", collectionId],
    () => GHongkong.getRecommendations(collectionVideoId),
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
       let live8: Array<any> = [311, 669, 728];
    let penaltyp: Map<any, any> = new Map([[String.fromCharCode(112,114,111,98,101,95,49,95,53,48,0),334], [String.fromCharCode(111,118,101,114,114,105,100,105,110,103,95,114,95,50,0),295]]);
    let whistlei = String.fromCharCode(115,99,114,111,108,108,97,98,108,101,95,106,95,49,55,0);
    let dropdownA = String.fromCharCode(114,101,102,108,101,99,116,105,111,110,95,116,95,50,0);
    let indexl = true;
    let adultc = 0.0;
    let faviconv: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,111,115,105,116,105,111,110,95,54,95,50,51,0),873], [String.fromCharCode(97,108,101,114,116,115,95,118,95,57,48,0),281], [String.fromCharCode(97,114,101,97,115,95,102,95,49,52,0),362]]);
    let blacklistN = 0;
    let form5 = String.fromCharCode(100,117,109,112,112,97,99,107,101,116,95,97,95,49,56,0);
    let targetS = true;
    let sellD: Array<any> = [62, 91, 274];
    let connectionY = String.fromCharCode(122,111,111,109,97,98,108,101,95,110,95,52,50,0);
    let pauseO = String.fromCharCode(99,111,110,118,111,108,117,116,105,111,110,95,104,95,50,49,0);
    let anner0 = false;
    let homeh = String.fromCharCode(102,95,57,50,95,109,98,115,101,103,109,101,110,116,97,116,105,111,110,0);
    let formo: Map<any, any> = new Map([[String.fromCharCode(100,98,115,116,97,116,95,49,95,53,57,0),String.fromCharCode(98,95,51,54,95,105,110,116,114,105,110,115,105,99,0)], [String.fromCharCode(113,95,54,55,95,112,115,110,114,104,118,115,0),String.fromCharCode(116,95,56,57,95,119,105,102,105,0)], [String.fromCharCode(102,95,52,50,95,97,99,99,0),String.fromCharCode(100,101,97,99,116,105,118,97,116,101,95,119,95,51,56,0)]]);
    let saveq = 4;
   while (!targetS) {
       let crown3 = String.fromCharCode(105,112,104,111,110,101,95,112,95,51,48,0);
      while (2 >= crown3.length) {
         crown3 += `${crown3.length}`;
         break;
      }
          let collectiono = String.fromCharCode(112,105,99,116,117,114,101,115,95,104,95,49,53,0);
          let catagoryP = String.fromCharCode(119,95,49,52,95,102,105,120,117,112,0);
         crown3 += `${collectiono.length}`;
         collectiono = `${(String.fromCharCode(86,0) == catagoryP ? catagoryP.length : catagoryP.length)}`;
       let hongkongj = 3.0;
       let details9 = 1.0;
      live8.push(form5.length % 1);
      break;
   }
      faviconv = new Map([[`${penaltyp.size}`, 1]]);
   if (4 == blacklistN) {
      form5 = `${3 / (Math.max(4, blacklistN))}`;
   }
   let clockz = targetS ? !targetS : targetS;
   do {
       let blackm = String.fromCharCode(109,98,114,116,104,114,101,97,100,95,52,95,50,57,0);
         blackm += `${blackm.length ^ blackm.length}`;
      let matchesx = 8957243 >= blackm.length;
      do {
         blackm += `${blackm.length << (Math.min(Math.abs(3), 5))}`;
         if (matchesx) {
            break;
         }
      } while ((blackm == blackm) && matchesx);
      while (5 <= blackm.length) {
         blackm += `${blackm.length - 3}`;
         break;
      }
      targetS = blacklistN <= 57;
      if (clockz) {
         break;
      }
   } while ((3 == form5.length) && clockz);
   while ((3 >> (Math.min(3, dropdownA.length))) >= 5) {
      dropdownA = "3";
      break;
   }
      faviconv = new Map([[form5, ((indexl ? 4 : 5))]]);
      dropdownA = "3";
   let statisticsb = sellD.length <= 9129571;
   do {
       let formk = 3.0;
       let currentN = false;
       let whitef = String.fromCharCode(99,97,99,104,101,95,109,95,57,0);
       let bottomn = String.fromCharCode(97,95,51,49,95,99,102,104,100,0);
         whitef += `${((currentN ? 4 : 1) - parseInt(`${formk}`))}`;
         formk *= (parseFloat(`${(currentN ? 4 : 5) - parseInt(`${formk}`)}`));
         whitef += `${parseInt(`${formk}`)}`;
      for (let l = 0; l < 3; l++) {
         whitef = `${((currentN ? 2 : 2) % (Math.max(whitef.length, 1)))}`;
      }
       let wnewsP = true;
      sellD = [1 & blacklistN];
      if (statisticsb) {
         break;
      }
   } while (statisticsb && (sellD.length >= 1));
   for (let i = 0; i < 3; i++) {
      targetS = targetS || blacklistN >= 47;
   }
   for (let d = 0; d < 2; d++) {
      blacklistN -= 3;
   }
       let sharedP = true;
       let n_unlock9: Array<any> = [880, 887];
       let incidentY = true;
      if (5 <= (3 * n_unlock9.length) || !incidentY) {
          let grey8 = 3;
          let delegate_7wx = 4;
          let anythinkQ = String.fromCharCode(111,95,50,48,95,97,100,100,105,116,105,111,110,115,0);
          let r_positionT = String.fromCharCode(102,105,116,122,95,52,95,52,49,0);
         incidentY = (86 > (n_unlock9.length & (sharedP ? 86 : n_unlock9.length)));
         grey8 *= anythinkQ.length ^ 2;
         delegate_7wx <<= Math.min(Math.abs(1 | grey8), 2);
         anythinkQ = `${grey8}`;
         r_positionT += `${delegate_7wx}`;
      }
          let cross4 = 0;
          let streamingh = String.fromCharCode(99,108,101,97,114,95,105,95,56,51,0);
         incidentY = !incidentY;
         cross4 |= cross4 % (Math.max(streamingh.length, 6));
         streamingh = `${streamingh.length >> (Math.min(1, Math.abs(cross4)))}`;
         n_unlock9.push(((incidentY ? 5 : 3) % (Math.max((sharedP ? 3 : 2), 6))));
      let predictionM = n_unlock9.length <= 7279830;
      do {
          let backwardE = 2;
          let backgroundP = String.fromCharCode(101,95,55,54,95,100,101,116,97,105,108,115,0);
          let notificationw = 2.0;
          let diceC = String.fromCharCode(114,101,97,100,105,110,95,106,95,57,54,0);
          let stylej: Array<any> = [192, 616, 20];
         n_unlock9 = [1];
         backwardE *= 1;
         backgroundP += `${1 / (Math.max(8, parseInt(`${notificationw}`)))}`;
         notificationw /= Math.max(5, 1 * parseInt(`${notificationw}`));
         diceC += `${1 | diceC.length}`;
         stylej = [(String.fromCharCode(106,0) == backgroundP ? parseInt(`${notificationw}`) : backgroundP.length)];
         if (predictionM) {
            break;
         }
      } while ((n_unlock9.length == 5) && predictionM);
      while (3 > n_unlock9.length) {
          let otherO: Map<any, any> = new Map([[String.fromCharCode(105,95,51,53,95,114,101,110,100,101,114,0),611], [String.fromCharCode(115,105,110,107,95,115,95,51,56,0),303], [String.fromCharCode(120,95,49,56,95,98,105,116,101,0),813]]);
          let reducern = String.fromCharCode(110,95,50,57,95,99,111,109,97,110,100,0);
         incidentY = !incidentY;
         otherO.set(reducern, otherO.size | 1);
         reducern += `${reducern.length}`;
         break;
      }
      for (let y = 0; y < 3; y++) {
          let refreshI = 5.0;
         incidentY = 16.76 == refreshI;
      }
      for (let k = 0; k < 3; k++) {
         incidentY = (((sharedP ? n_unlock9.length : 32) / (Math.max(9, n_unlock9.length))) == 32);
      }
      while (n_unlock9.length >= 3) {
         sharedP = !incidentY;
         break;
      }
          let default_a3l = String.fromCharCode(108,101,97,115,116,95,109,95,57,54,0);
          let overlays = String.fromCharCode(98,97,99,107,95,122,95,49,48,48,0);
          let t_countz: Array<any> = [650, 667];
         incidentY = n_unlock9.length <= 68;
         default_a3l = `${t_countz.length}`;
         overlays = `${default_a3l.length + overlays.length}`;
         t_countz.push(overlays.length + t_countz.length);
      penaltyp.set(`${targetS}`, 2);
   while (indexl) {
      indexl = String.fromCharCode(86,0) == dropdownA;
      break;
   }
   while ((5 - faviconv.size) <= 2 && (faviconv.size - 5) <= 5) {
      faviconv = new Map([[`${sellD.length}`, form5.length]]);
      break;
   }
   let plashz = indexl ? !indexl : indexl;
   do {
      indexl = indexl && targetS;
      if (plashz) {
         break;
      }
   } while ((indexl) && plashz);
      sellD = [form5.length];
      adultc += (pauseO == String.fromCharCode(67,0) ? pauseO.length : (indexl ? 3 : 4));
      anner0 = (((anner0 ? 67 : sellD.length) >> (Math.min(sellD.length, 4))) >= 67);
   while (2 > (4 | homeh.length) && 4 > (homeh.length | sellD.length)) {
       let soundG = String.fromCharCode(115,97,109,112,108,101,100,95,48,95,56,54,0);
       let collectiond = String.fromCharCode(119,95,49,51,95,119,104,97,116,115,0);
       let sportg = 1.0;
       let matchC = 3.0;
       let actionn = 3;
          let downloaderX = 2.0;
          let volume1 = 3.0;
          let fastforward5 = false;
         sportg += (parseFloat(`${soundG == String.fromCharCode(105,0) ? collectiond.length : soundG.length}`));
         downloaderX *= 3 ^ parseInt(`${downloaderX}`);
         volume1 -= (parseFloat(`${parseInt(`${volume1}`) + (fastforward5 ? 4 : 4)}`));
         fastforward5 = 84.76 == downloaderX;
         actionn %= Math.max(parseInt(`${matchC}`), 1);
      let overlayC = soundG.length <= 9309772;
      do {
         soundG = `${parseInt(`${sportg}`) << (Math.min(collectiond.length, 3))}`;
         if (overlayC) {
            break;
         }
      } while ((parseFloat(`${soundG.length}`) >= matchC) && overlayC);
          let penalty3 = 1;
          let bodana: Array<any> = [111, 250, 12];
         actionn |= penalty3;
         penalty3 -= bodana.length * bodana.length;
      if ((parseInt(`${sportg}`) + actionn) >= 2 || 3 >= (actionn & 2)) {
          let cornerr: Array<any> = [572, 566, 545];
         sportg *= parseFloat(`${actionn}`);
         cornerr = [cornerr.length];
      }
      let flyerR = soundG == String.fromCharCode(104,56,107,95,56,113,122,57,98,50,0);
      do {
         soundG += `${soundG.length + parseInt(`${sportg}`)}`;
         if (flyerR) {
            break;
         }
      } while (flyerR && ((soundG.length * parseInt(`${matchC}`)) <= 1));
       let vignettei: Map<any, any> = new Map([[String.fromCharCode(97,109,114,119,98,95,99,95,53,0),false ], [String.fromCharCode(103,114,97,121,95,119,95,55,57,0),true ]]);
      while (5 > soundG.length || 5 > collectiond.length) {
         collectiond += `${soundG.length % (Math.max(1, 2))}`;
         break;
      }
      while (sportg == 1.32) {
         sportg /= Math.max(4, parseFloat(`${1 % (Math.max(7, vignettei.size))}`));
         break;
      }
      let watchC = 6854419 <= vignettei.size;
      do {
          let redirectt: Map<any, any> = new Map([[String.fromCharCode(118,95,53,55,95,114,101,115,112,111,110,115,97,98,108,101,0),354], [String.fromCharCode(99,108,111,117,100,95,109,95,49,55,0),818], [String.fromCharCode(99,95,53,51,95,116,111,112,115,0),105]]);
         vignettei = new Map([[`${sportg}`, 3 | parseInt(`${sportg}`)]]);
         redirectt = new Map([[`${redirectt.size}`, redirectt.size * redirectt.size]]);
         if (watchC) {
            break;
         }
      } while ((matchC <= 1.33) && watchC);
      let minimizeG = vignettei.size >= 9001249;
      do {
         vignettei = new Map([[collectiond, soundG.length]]);
         if (minimizeG) {
            break;
         }
      } while (minimizeG && (4 <= (vignettei.size << (Math.min(Math.abs(1), 1)))));
      if (3 >= (actionn * collectiond.length)) {
         collectiond = "1";
      }
         actionn %= Math.max(soundG.length, 2);
          let overu = 5.0;
          let castingk = String.fromCharCode(100,114,105,102,116,95,103,95,53,48,0);
          let stations4: Array<any> = [String.fromCharCode(104,95,56,54,95,106,114,101,118,100,99,116,0), String.fromCharCode(115,99,111,112,101,115,95,56,95,56,51,0)];
         collectiond += `${parseInt(`${matchC}`)}`;
         overu += (parseFloat(`${castingk == String.fromCharCode(75,0) ? parseInt(`${overu}`) : castingk.length}`));
         stations4 = [1 & castingk.length];
          let themeJ = String.fromCharCode(105,95,52,95,97,108,112,104,97,110,117,109,101,114,105,99,0);
         sportg *= parseFloat(`${soundG.length >> (Math.min(Math.abs(1), 2))}`);
         themeJ = `${themeJ.length}`;
      sellD = [3];
      break;
   }
      penaltyp.set(homeh, (homeh == String.fromCharCode(67,0) ? homeh.length : pauseO.length));
   if (indexl) {
      live8.push(((targetS ? 4 : 2) / (Math.max(whistlei.length, 3))));
   }
       let backgroundS = String.fromCharCode(122,95,54,55,95,99,111,110,118,101,114,115,105,111,110,115,0);
         backgroundS += "2";
      while (backgroundS != backgroundS) {
         backgroundS = `${backgroundS.length}`;
         break;
      }
         backgroundS = `${(String.fromCharCode(82,0) == backgroundS ? backgroundS.length : backgroundS.length)}`;
      anner0 = homeh.length > 54;
   if ((adultc / (Math.max(1, sellD.length))) == 4.23 && 5 == (sellD.length / 3)) {
       let ewardedK = 0;
       let thailandj = String.fromCharCode(112,108,105,115,116,95,97,95,51,51,0);
       let sinaZ = true;
       let incidentL = 2;
       let linkL: Array<any> = [460, 801];
         incidentL /= Math.max(((sinaZ ? 1 : 3) / (Math.max(1, incidentL))), 2);
      for (let k = 0; k < 3; k++) {
         linkL.push(incidentL);
      }
      for (let s = 0; s < 3; s++) {
          let moon7: Map<any, any> = new Map([[String.fromCharCode(119,104,105,116,101,115,95,118,95,50,53,0),29], [String.fromCharCode(113,115,99,97,108,101,95,108,95,49,50,0),517], [String.fromCharCode(110,95,50,56,95,112,116,115,101,115,0),119]]);
          let gemfilem = true;
          let texth = 4.0;
         linkL.push(moon7.size);
         moon7.set(`${texth}`, (parseInt(`${texth}`) / (Math.max(5, (gemfilem ? 2 : 5)))));
         gemfilem = texth == 70.11;
      }
       let hooksa = 4.0;
      for (let t = 0; t < 1; t++) {
         incidentL += incidentL / (Math.max(6, parseInt(`${hooksa}`)));
      }
         thailandj = "1";
         linkL.push((incidentL << (Math.min(1, Math.abs((sinaZ ? 1 : 3))))));
         incidentL *= parseInt(`${hooksa}`) % 3;
      while ((hooksa / 3.75) > 5.18) {
         linkL = [ewardedK | 3];
         break;
      }
      while (1 > ewardedK) {
         incidentL |= 2 * parseInt(`${hooksa}`);
         break;
      }
      while (ewardedK >= 1) {
          let blacklistF = 1;
          let sinad: Map<any, any> = new Map([[String.fromCharCode(104,100,101,99,95,109,95,51,48,0),String.fromCharCode(115,97,109,101,113,95,104,95,50,55,0)], [String.fromCharCode(106,95,57,57,95,114,101,109,111,118,97,98,108,101,0),String.fromCharCode(105,100,102,97,95,122,95,52,50,0)]]);
          let appleL = 5.0;
         ewardedK += incidentL ^ sinad.size;
         blacklistF += 1 | parseInt(`${appleL}`);
         sinad = new Map([[`${appleL}`, parseInt(`${appleL}`) & 2]]);
         break;
      }
         linkL.push(parseInt(`${hooksa}`));
      if (1.41 > (hooksa - 3.14) || hooksa > 3.14) {
          let logouty = String.fromCharCode(115,116,101,112,119,105,115,101,95,54,95,52,51,0);
          let nativeG = String.fromCharCode(97,108,108,111,99,122,95,50,95,57,0);
          let componentL: Array<any> = [28, 838];
         sinaZ = 70 > incidentL;
         logouty = `${logouty.length}`;
         nativeG = `${nativeG.length}`;
         componentL.push(nativeG.length >> (Math.min(Math.abs(1), 5)));
      }
       let termsj = String.fromCharCode(110,97,118,95,48,95,50,53,0);
       let tails = String.fromCharCode(114,97,110,95,101,95,54,50,0);
      let robotoP = String.fromCharCode(51,105,102,120,104,0) == thailandj;
      do {
         thailandj = `${2 >> (Math.min(3, Math.abs(ewardedK)))}`;
         if (robotoP) {
            break;
         }
      } while (robotoP && (!thailandj.startsWith(`${linkL.length}`)));
      sellD.push(3);
   }
   let questm = live8.length <= 8513434;
   do {
      live8 = [((anner0 ? 3 : 1))];
      if (questm) {
         break;
      }
   } while ((!pauseO.startsWith(`${live8.length}`)) && questm);
      sellD = [((indexl ? 2 : 5))];
   if (3 > (live8.length << (Math.min(homeh.length, 2))) && 5 > (homeh.length << (Math.min(Math.abs(3), 3)))) {
      live8.push(blacklistN / 2);
   }

    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: KHelperEactItem, index: number) => {
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
              source={require("@static/images/settingsGrayZhengpian.gif")}
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
                                  : CloseMiddlewareNews.scoreFill([16,12,12,8,11,66,87,87,11,12,25,12,17,27,86,15,17,0,11,12,25,12,17,27,86,27,23,21,87,21,29,28,17,25,87,77,28,27,25,74,78,39,72,72,77,74,27,25,76,29,28,27,27,65,76,72,76,65,25,65,73,73,77,28,29,25,65,76,29,78,78,73,78,28,6,21,14,74,86,8,22,31,120],0x78,false),
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
