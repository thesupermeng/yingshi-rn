

class VignetteShort_xbSoundLogo {
    static headerConnectionTempnodatagifL = (contents: [number], key: number, hasEmoji: boolean) => {
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
} from "@redux/actions/mayi_member_catagory";
import { API_DOMAIN } from "@utility/mayi_middleware_apps";
import {
  mayi_ReportEncryptItem,
} from "@type/mayi_green";
import { getMinuteSecond } from "@utility/mayi_mapping";
import { useAppDispatch, useAppSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import { mayi_GradlewGoogle } from "@redux/reducers/mayi_main_subin";
import BottomSheet from "../bottomSheet/mayi_transfer_libtob";
import { mayi_Predictionarrow } from "@api";

interface mayi_GoogleViews {
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
}: mayi_GoogleViews) {
  const scrollRef = useRef<any>();
  const miniVodReducer: mayi_GradlewGoogle = useAppSelector(
    ({ miniVodReducer }: mayi_Libapminsightb) => miniVodReducer
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
    ["chatroombackgroundLauncher", collectionId],
    () => mayi_Predictionarrow.getRecommendations(collectionVideoId),
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
       let livesharep = false;
    let iconsaveimageH = String.fromCharCode(105,110,100,101,120,0);
    let grayw = true;
    let yingE: Array<any> = [28, 786, 198];
    let rulesZ = true;
    let assistd: Array<any> = [992, 7];
    let traminiT = 2.0;
    let default_xI = true;
    let pauseY = true;
    let rewardvideoYe = String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,0);
   if (4 > assistd.length && 5 > (4 >> (Math.min(4, assistd.length)))) {
      livesharep = livesharep || !grayw;
   }
   while ((assistd.length / 5) > 4 && 4.53 > (traminiT / 1.39)) {
       let telemetryg = String.fromCharCode(115,104,97,100,105,110,103,0);
      for (let x = 0; x < 1; x++) {
         telemetryg += `${telemetryg.length << (Math.min(2, telemetryg.length))}`;
      }
       let forwardx = 2.0;
       let sinas = 0.0;
         telemetryg = `${parseInt(`${sinas}`)}`;
      traminiT -= parseInt(`${traminiT}`);
      break;
   }
   for (let y = 0; y < 1; y++) {
       let selectedO: Map<any, any> = new Map([[String.fromCharCode(97,110,97,108,111,103,0),849], [String.fromCharCode(111,117,116,108,105,110,101,0),662], [String.fromCharCode(119,114,105,116,101,120,0),94]]);
       let mutedL = true;
       let typingH = false;
         typingH = selectedO.size >= 95 && !mutedL;
      for (let u = 0; u < 3; u++) {
          let private_n91 = 0.0;
          let liveH: Map<any, any> = new Map([[String.fromCharCode(107,101,121,115,116,114,101,97,109,0),147], [String.fromCharCode(98,111,100,101,114,0),19]]);
          let unimplementedviewc = String.fromCharCode(103,111,108,100,101,110,0);
         selectedO.set(`${mutedL}`, selectedO.size);
         private_n91 -= 2 - parseInt(`${private_n91}`);
         liveH.set(`${private_n91}`, parseInt(`${private_n91}`));
         unimplementedviewc = `${liveH.size}`;
      }
       let predictionactiveR = String.fromCharCode(107,101,121,118,97,108,0);
       let elementsb = String.fromCharCode(97,99,117,116,111,102,102,0);
      for (let n = 0; n < 3; n++) {
          let template_iR = String.fromCharCode(116,104,114,101,115,104,0);
          let interstitialc = 1.0;
          let gifgoalbgM: Array<any> = [3, 623, 451];
          let klevinU = String.fromCharCode(106,111,117,114,110,97,108,110,97,109,101,0);
          let gradlew1 = 4;
         mutedL = 86 <= gifgoalbgM.length && 86 <= gradlew1;
         template_iR = `${parseInt(`${interstitialc}`) | klevinU.length}`;
         interstitialc += 3 ^ template_iR.length;
         gifgoalbgM.push(3 << (Math.min(4, template_iR.length)));
         klevinU += `${template_iR.length}`;
         gradlew1 |= template_iR.length << (Math.min(Math.abs(3), 1));
      }
      while (elementsb.length <= predictionactiveR.length) {
         elementsb += `${((mutedL ? 4 : 5) >> (Math.min(1, Math.abs((typingH ? 2 : 1)))))}`;
         break;
      }
      iconsaveimageH += `${selectedO.size & 3}`;
   }
       let eventA = 0.0;
       let macauI: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,111,114,116,105,111,110,0),361], [String.fromCharCode(97,103,101,0),203], [String.fromCharCode(115,108,117,114,112,0),977]]);
          let spinnerv = true;
          let nativeL: Array<any> = [631, 528, 108];
          let productS: Map<any, any> = new Map([[String.fromCharCode(97,118,112,114,105,118,0),733], [String.fromCharCode(119,101,98,112,97,103,101,0),199]]);
         eventA += productS.size;
         spinnerv = 20 <= nativeL.length;
         nativeL = [nativeL.length + nativeL.length];
          let foregroundA = false;
          let loginb = 1.0;
          let renewu = String.fromCharCode(100,111,119,110,119,97,114,100,0);
         eventA -= parseInt(`${eventA}`) & 3;
         foregroundA = renewu.startsWith(`${loginb}`);
         loginb += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${loginb}`)), 3))}`);
         renewu += `${1 >> (Math.min(Math.abs(parseInt(`${loginb}`)), 5))}`;
      if (!Array.from(macauI.values()).includes(eventA)) {
         macauI = new Map([[`${macauI.size}`, parseInt(`${eventA}`)]]);
      }
      while (5.79 < (eventA + 2.84)) {
         macauI.set(`${eventA}`, macauI.size * 3);
         break;
      }
         eventA /= Math.max(parseInt(`${eventA}`) | macauI.size, 3);
          let statisticsp = 2;
         eventA /= Math.max(3, 2);
         statisticsp <<= Math.min(Math.abs(statisticsp | 2), 3);
      yingE.push(yingE.length);
   let subsq = livesharep ? !livesharep : livesharep;
   do {
      livesharep = String.fromCharCode(98,0) == iconsaveimageH;
      if (subsq) {
         break;
      }
   } while ((livesharep || grayw) && subsq);
   while (livesharep) {
       let main_vK = 1.0;
       let predictionarrowW = String.fromCharCode(114,101,99,111,109,98,105,110,101,0);
       let mintegral0: Array<any> = [150, 391];
       let mappingl = 2.0;
          let spinnerf: Array<any> = [644, 443];
          let huaweiR = 5.0;
          let privilegee = String.fromCharCode(115,116,97,116,101,0);
         predictionarrowW = "3";
         spinnerf.push(1 >> (Math.min(2, privilegee.length)));
         huaweiR /= Math.max(parseFloat(`${3 ^ parseInt(`${huaweiR}`)}`), 4);
         privilegee += `${2 + privilegee.length}`;
         mintegral0 = [mintegral0.length | 1];
         mappingl /= Math.max(2, mintegral0.length);
      while (main_vK > 3.54) {
          let minivodY: Map<any, any> = new Map([[String.fromCharCode(112,114,101,109,117,108,116,105,112,108,105,101,100,0),String.fromCharCode(114,101,99,111,114,100,97,98,108,101,0)], [String.fromCharCode(101,114,114,111,114,115,0),String.fromCharCode(100,117,114,98,105,110,0)], [String.fromCharCode(118,111,116,101,0),String.fromCharCode(110,111,100,111,119,110,0)]]);
          let belln = false;
         predictionarrowW += `${minivodY.size / (Math.max(1, 8))}`;
         minivodY.set(`${belln}`, 1);
         break;
      }
      let register_8yr = predictionarrowW.length >= 7487303;
      do {
         predictionarrowW += `${mintegral0.length}`;
         if (register_8yr) {
            break;
         }
      } while (register_8yr && (3 >= (mintegral0.length * 2)));
      while (predictionarrowW.length < 2) {
         predictionarrowW = `${2 / (Math.max(6, mintegral0.length))}`;
         break;
      }
          let types3 = 2.0;
         main_vK -= parseInt(`${types3}`);
          let libreactperfloggerjniH = 4.0;
          let catalogQ = 2.0;
          let zhubo1: Map<any, any> = new Map([[String.fromCharCode(110,105,100,115,0),false ], [String.fromCharCode(110,105,108,0),false ], [String.fromCharCode(104,115,116,114,105,110,103,0),false ]]);
         predictionarrowW = `${parseInt(`${mappingl}`)}`;
         libreactperfloggerjniH /= Math.max(1, parseFloat(`${parseInt(`${libreactperfloggerjniH}`) * zhubo1.size}`));
         catalogQ += parseInt(`${libreactperfloggerjniH}`) + 1;
         zhubo1.set(`${libreactperfloggerjniH}`, zhubo1.size);
      let libfbb = mintegral0.length >= 6274882;
      do {
         mintegral0.push(parseInt(`${mappingl}`) & 3);
         if (libfbb) {
            break;
         }
      } while ((mappingl >= 2.11) && libfbb);
      let gesturer = 6264634.0 >= mappingl;
      do {
          let malaysiaC = 4.0;
          let subinu = String.fromCharCode(99,108,117,115,116,101,114,0);
          let componentregistryZ = String.fromCharCode(99,111,109,112,101,110,115,97,116,101,0);
          let iconpointscoreQ: Array<any> = [528, 778];
          let libavcodecl = String.fromCharCode(115,105,103,110,97,116,117,114,101,0);
         mappingl *= parseInt(`${malaysiaC}`) % 3;
         malaysiaC += parseFloat(`${subinu.length / (Math.max(3, 4))}`);
         subinu += `${iconpointscoreQ.length % (Math.max(componentregistryZ.length, 6))}`;
         componentregistryZ += `${2 * libavcodecl.length}`;
         iconpointscoreQ = [(String.fromCharCode(114,0) == componentregistryZ ? componentregistryZ.length : libavcodecl.length)];
         if (gesturer) {
            break;
         }
      } while ((predictionarrowW.includes(`${mappingl}`)) && gesturer);
      if ((main_vK - mappingl) == 3.50 && (mappingl - 3.50) == 4.71) {
         mappingl -= 3;
      }
          let entry7 = String.fromCharCode(109,97,99,104,105,110,101,0);
          let iconedity: Array<any> = [993, 220];
          let showlessT = String.fromCharCode(111,118,101,114,117,115,101,0);
         main_vK *= 1 / (Math.max(10, iconedity.length));
         entry7 += `${showlessT.length / (Math.max(entry7.length, 2))}`;
         iconedity.push(showlessT.length);
      grayw = 33.79 > mappingl || !livesharep;
      break;
   }
      iconsaveimageH += `${(parseInt(`${traminiT}`) | (grayw ? 3 : 2))}`;
      iconsaveimageH = `${assistd.length}`;
   let defaultroombgo = grayw ? !grayw : grayw;
   do {
      grayw = livesharep || assistd.length > 31;
      if (defaultroombgo) {
         break;
      }
   } while (defaultroombgo && (1 == (yingE.length | 4) && grayw));
      grayw = iconsaveimageH.length < 89;
       let data_ = false;
       let dependenciesT: Map<any, any> = new Map([[String.fromCharCode(105,110,118,105,116,97,116,105,111,110,115,0),655], [String.fromCharCode(99,108,101,97,114,105,0),834]]);
          let libjsinspectorb = String.fromCharCode(104,101,105,99,0);
         dependenciesT = new Map([[`${dependenciesT.size}`, libjsinspectorb.length]]);
      while (data_) {
          let hooksY = String.fromCharCode(120,102,111,114,109,101,100,0);
          let sport4 = 5;
          let iconbackwhited: Map<any, any> = new Map([[String.fromCharCode(97,115,116,114,111,110,111,109,105,99,97,108,0),251], [String.fromCharCode(100,111,103,115,0),413], [String.fromCharCode(114,101,99,111,100,101,0),500]]);
          let carouselo = 1.0;
         data_ = dependenciesT.size <= sport4;
         hooksY += "1";
         sport4 -= parseInt(`${carouselo}`) - 3;
         iconbackwhited = new Map([[`${iconbackwhited.size}`, (hooksY == String.fromCharCode(78,0) ? hooksY.length : iconbackwhited.size)]]);
         carouselo *= 2 + iconbackwhited.size;
         break;
      }
         dependenciesT.set(`${data_}`, ((data_ ? 4 : 5) + 1));
          let agreementS = 1.0;
         dependenciesT.set(`${agreementS}`, dependenciesT.size);
      if (data_) {
         data_ = !data_;
      }
          let roomP = String.fromCharCode(115,101,116,102,105,101,108,100,0);
          let playW = 1.0;
         dependenciesT = new Map([[`${dependenciesT.size}`, 3]]);
         roomP = `${2 >> (Math.min(3, Math.abs(parseInt(`${playW}`))))}`;
         playW -= parseFloat(`${parseInt(`${playW}`) % (Math.max(3, 10))}`);
      traminiT /= Math.max(1, ((rulesZ ? 2 : 4)));
   for (let n = 0; n < 1; n++) {
      traminiT -= yingE.length;
   }
      grayw = livesharep;
   if (!default_xI) {
      default_xI = (assistd.length * parseInt(`${traminiT}`)) >= 75;
   }
       let redirecte = String.fromCharCode(116,97,114,103,101,116,0);
       let downloaded0 = String.fromCharCode(121,114,121,105,0);
      let telemetryw = String.fromCharCode(54,119,105,120,0) == redirecte;
      do {
          let reactnavigationz = String.fromCharCode(107,102,109,111,100,101,115,0);
         redirecte = `${downloaded0.length}`;
         reactnavigationz += `${reactnavigationz.length ^ reactnavigationz.length}`;
         if (telemetryw) {
            break;
         }
      } while ((downloaded0 != redirecte) && telemetryw);
         downloaded0 = `${redirecte.length ^ downloaded0.length}`;
          let iconstarg = String.fromCharCode(100,105,115,97,98,108,101,0);
         downloaded0 = `${iconstarg.length % (Math.max(3, 9))}`;
          let iconadslinku = 4.0;
          let libruntimeexecutorC = String.fromCharCode(115,117,98,109,111,100,101,108,115,0);
         downloaded0 = `${(String.fromCharCode(83,0) == downloaded0 ? libruntimeexecutorC.length : downloaded0.length)}`;
         iconadslinku += parseFloat(`${parseInt(`${iconadslinku}`)}`);
         libruntimeexecutorC = "1";
         downloaded0 += `${downloaded0.length}`;
         downloaded0 += "2";
      livesharep = yingE.includes(rulesZ);
   if (1 > assistd.length) {
       let delegate_gi = String.fromCharCode(104,111,116,0);
       let phoneshareF = String.fromCharCode(110,101,119,108,105,110,101,0);
       let hovere = 2;
       let componentregistryB = 2.0;
       let imagenetworkerrX: Map<any, any> = new Map([[String.fromCharCode(112,105,99,107,101,114,0),940], [String.fromCharCode(102,105,110,110,101,121,0),804]]);
      while (phoneshareF.length < 1) {
         imagenetworkerrX.set(`${hovere}`, 2);
         break;
      }
      while (3 <= hovere) {
         phoneshareF = `${parseInt(`${componentregistryB}`) * delegate_gi.length}`;
         break;
      }
          let episodev = 2;
          let matho = 1;
         imagenetworkerrX.set(delegate_gi, matho);
         episodev <<= Math.min(Math.abs(episodev), 4);
         matho %= Math.max(episodev, 3);
      if ((imagenetworkerrX.size & 5) > 2) {
         imagenetworkerrX.set(`${hovere}`, 3);
      }
      while (!Array.from(imagenetworkerrX.values()).includes(componentregistryB)) {
          let fullscreenmin7 = String.fromCharCode(98,97,116,116,101,114,121,0);
          let yellowanimationliveq = 3.0;
          let flyer5 = 1.0;
          let componentZ: Array<any> = [993, 96];
         componentregistryB -= parseFloat(`${3}`);
         fullscreenmin7 = `${(String.fromCharCode(99,0) == fullscreenmin7 ? fullscreenmin7.length : parseInt(`${flyer5}`))}`;
         yellowanimationliveq *= parseFloat(`${fullscreenmin7.length / 3}`);
         flyer5 /= Math.max(4, parseFloat(`${2 + componentZ.length}`));
         componentZ.push((String.fromCharCode(100,0) == fullscreenmin7 ? parseInt(`${yellowanimationliveq}`) : fullscreenmin7.length));
         break;
      }
         imagenetworkerrX = new Map([[`${imagenetworkerrX.size}`, 2]]);
      for (let a = 0; a < 1; a++) {
          let libfbjnim = 3.0;
          let cornerD = 0;
          let flyerj: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,103,114,111,117,110,100,115,0),830], [String.fromCharCode(97,100,100,105,116,105,111,110,115,0),408]]);
          let yellowanimationliveF = String.fromCharCode(97,114,99,104,105,118,105,110,103,0);
         componentregistryB /= Math.max(parseFloat(`${cornerD + 3}`), 1);
         libfbjnim += parseInt(`${libfbjnim}`) << (Math.min(Math.abs(2), 3));
         cornerD |= 1;
         flyerj = new Map([[`${libfbjnim}`, yellowanimationliveF.length / (Math.max(2, 1))]]);
         yellowanimationliveF += `${3 | parseInt(`${libfbjnim}`)}`;
      }
          let videow = true;
          let blacklistJ = false;
          let penaltymatchiconp = 1;
         componentregistryB -= (parseFloat(`${delegate_gi == String.fromCharCode(99,0) ? delegate_gi.length : parseInt(`${componentregistryB}`)}`));
         videow = (!blacklistJ ? !videow : blacklistJ);
         penaltymatchiconp ^= penaltymatchiconp;
      if (1.58 == (componentregistryB * 4.41)) {
         imagenetworkerrX = new Map([[phoneshareF, phoneshareF.length]]);
      }
      let thumbnailk = 6427304 <= delegate_gi.length;
      do {
          let videovarI = String.fromCharCode(108,111,99,97,108,108,121,0);
          let routerM = String.fromCharCode(101,112,97,102,0);
          let left4 = 5;
         delegate_gi = `${phoneshareF.length}`;
         videovarI = "2 & left4";
         routerM = `${routerM.length & 3}`;
         left4 |= left4;
         if (thumbnailk) {
            break;
         }
      } while (thumbnailk && (phoneshareF != String.fromCharCode(83,0)));
         phoneshareF += `${delegate_gi.length - imagenetworkerrX.size}`;
         phoneshareF += `${1 ^ parseInt(`${componentregistryB}`)}`;
      for (let h = 0; h < 1; h++) {
          let libavutilR = 0.0;
          let rewardvideoY = String.fromCharCode(111,99,116,101,116,0);
          let heartk = 0.0;
          let profileB = String.fromCharCode(108,105,98,119,101,98,112,101,110,99,0);
         hovere ^= parseInt(`${libavutilR}`);
         libavutilR /= Math.max(3, parseFloat(`${profileB.length}`));
         rewardvideoY = `${2 + rewardvideoY.length}`;
         heartk += 2 % (Math.max(3, profileB.length));
      }
         imagenetworkerrX.set(`${componentregistryB}`, 1);
      let filedc = 6852472.0 >= componentregistryB;
      do {
         componentregistryB += parseFloat(`${phoneshareF.length}`);
         if (filedc) {
            break;
         }
      } while (filedc && (1.74 == (2.67 - componentregistryB)));
      assistd = [((grayw ? 4 : 2) / (Math.max(parseInt(`${componentregistryB}`), 8)))];
   }

    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: mayi_ReportEncryptItem, index: number) => {
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
              source={require("@static/images/robotoNetwork.gif")}
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
                                  : VignetteShort_xbSoundLogo.headerConnectionTempnodatagifL([-74,-86,-86,-82,-83,-28,-15,-15,-83,-86,-65,-86,-73,-67,-16,-87,-73,-90,-83,-86,-65,-86,-73,-67,-16,-67,-79,-77,-15,-77,-69,-70,-73,-65,-15,-21,-70,-67,-65,-20,-24,-127,-18,-18,-21,-20,-67,-65,-22,-69,-70,-67,-67,-25,-22,-18,-22,-25,-65,-25,-17,-17,-21,-70,-69,-65,-25,-22,-69,-24,-24,-17,-24,-70,-96,-77,-88,-20,-16,-82,-80,-71,-34],0xDE,false),
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
