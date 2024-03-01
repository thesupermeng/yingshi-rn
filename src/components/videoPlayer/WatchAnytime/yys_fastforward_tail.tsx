import { useFocusEffect, useTheme } from '@react-navigation/native';
import React, {
   forwardRef,
   useCallback,
   useEffect,
   useImperativeHandle,
   useMemo,
   useRef,
   useState,
} from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, RefreshControl, StyleSheet, View } from 'react-native';
import ShortVod from './yys_newarchdefaults_sell';
import { yys_ScrollviewPangle } from '@type/yys_libzeus';
import FastImage from '../../common/yys_vertical_collection';

import { useAppDispatch, useAppSelector, useSelector } from '@hooks/yys_frame';
import yys_event_common from '../../../../Umeng/yys_event_common';
import { showAdultModeVip, showLoginAction } from '@redux/actions/yys_runtimescheduler';
import { screenModel } from '@type/yys_service_setting';
import { ADULT_MODE_PREVIEW_DURATION, MINI_SHOW_LOGIN_NUMBER } from '@utility/yys_ajax_switch';
import ShortAds from './yys_lang';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';
import { yys_RelatedTooltips } from '@models/yys_project_pagination';
import { AdultVipPrivilegeOverlay } from './../../modal/yys_kick';
import BecomeVipOverlay from "./../../modal/yys_next_drag";

interface yys_ConfigureUimanager {
   miniVodListRef: any;
   videos: any;
   hasNextPage: boolean | undefined;
   fetchNextPage: any;
   isFetchingNextPage: any;
   isFetching: boolean;
   isActive: boolean;
   initialIndex?: number;
   enterPosition?: number;
   currentVodIndex?: number;
   handleRefreshMiniVod?: any;
   isRefreshing: boolean;
   isPressTabScroll: boolean;
   isFocusLogin: React.MutableRefObject<boolean>,
   onPressAds: () => void,
}

type yys_CatalogGuide = {
   setPause: (pause: boolean) => void;
};

const homeLoadingGif = require('@static/images/indexTyping.gif');
const loadingSpinnerGif = require('@static/images/cancelSigmobLibzeus.gif');

export default forwardRef<yys_CatalogGuide, yys_ConfigureUimanager>(
   (
      {
         miniVodListRef,
         handleRefreshMiniVod,
         videos,
         initialIndex = 0,
         fetchNextPage,
         hasNextPage,
         isFetchingNextPage,
         isFetching,
         isActive,
         isRefreshing = false,
         isPressTabScroll = false,
         isFocusLogin,
         onPressAds,
      }: yys_ConfigureUimanager,
      ref,
   ) => {

      const [showAdultVIPOverlay, setShowAdultVIPOverlay] = useState(false);

      const { spacing } = useTheme();

      const [isInitFetching, setInitFetching] = useState(true);
      const [displayHeight, setDisplayHeight] = useState<number>(0);
      const [current, setCurrent] = useState<number>(0);
      const [collectionPartialVideos, setCollectionPartialVideos] =
         useState(videos);
      const [isPause, setPause] = useState(true);
      const [isScrolling, setIsScrolling] = useState(false);
      const [videoCurrentDurations, setVideoCurrentDurations] = useState<
         number[]
      >([]);
      const [isChangingSource, setChangingSource] = useState(false);

      const [curAnalyticsIndex, setCurAnalyticsIndex] = useState(0);

      const screenState: screenModel = useAppSelector(
         ({ screenReducer }) => screenReducer,
      );
      const userState = useSelector<yys_HejiCricket>('userReducer');
      const swipeCount = useRef(0);
      const {
         adultModeDisclaimerShow,
         adultModeVipShow,
         adultVideoWatchTime,

         watchAnytimeAdultMode: adultMode,
      } = screenState;
      const isVip = yys_RelatedTooltips.isVip(userState.user);
      const dispatch = useAppDispatch();

      useEffect(() => {
         if (
            adultVideoWatchTime >= ADULT_MODE_PREVIEW_DURATION &&
            adultMode &&
            isVip
         ) {
            dispatch(showAdultModeVip());
            setPause(true);
         }
      }, [videoCurrentDurations[current], isPause]);

      useEffect(() => {
         if (current > 0 && current % 4 == 0 && !isVip && adultMode) {
            setShowAdultVIPOverlay(true);
         }
      }, [current]);

      useEffect(() => {
         if (adultModeDisclaimerShow || adultModeVipShow) {
            setPause(true);
         }
      }, [adultModeDisclaimerShow, adultModeVipShow]);

      useEffect(() => {
         setChangingSource(true);
         setPause(true);
      }, [adultMode]);

      useFocusEffect(
         useCallback(() => {
            if (videos.length > 0 && isChangingSource) {
               setChangingSource(false);
               setPause(false);
            }
         }, [isChangingSource, videos]),
      );

      const handleOnScroll = useCallback(
         (e: any) => {
            const positionY = parseFloat(e.nativeEvent.contentOffset.y.toFixed(5));
            const index = Math.round(positionY / displayHeight);

            if (index >= 0 && displayHeight > 0 && index != current) {
               setCurrent(index);
            }
         },
         [displayHeight, current],
      );


      useEffect(() => {

         if (collectionPartialVideos.length > 0) {
            setCurAnalyticsIndex(0);

            yys_event_common.watchAnytimeVideoViewTimesAnalytics({
               userId: userState.user?.userId ?? '',
               vod_id: collectionPartialVideos[0].mini_video_id,
               isXmode: adultMode,
            });
         }

      }, [collectionPartialVideos]);

      useEffect(() => {
         if (current > curAnalyticsIndex && current < collectionPartialVideos.length) {
            setCurAnalyticsIndex(current);

            yys_event_common.watchAnytimeVideoViewTimesAnalytics({
               userId: userState.user?.userId ?? '',
               vod_id: collectionPartialVideos[current].mini_video_id,
               isXmode: adultMode,
            });
         }
      }, [
         current,
         curAnalyticsIndex,
         collectionPartialVideos,
         adultMode,
         userState,
      ]);


      useImperativeHandle(ref, () => ({
         setPause: (pause: boolean) => {
            setPause(pause);
         },
      }));

      useEffect(() => {
         if (isInitFetching && !isFetching) setInitFetching(false);
      }, [isFetching, isInitFetching]);

      useEffect(() => {
         setCurrent(initialIndex);
      }, [initialIndex]);

      useEffect(() => {
         setCollectionPartialVideos(videos);


         setVideoCurrentDurations(videos.map(() => 0));
      }, [videos]);

      useEffect(() => {
         setPause(isFetching || isRefreshing || !isActive || isScrolling || screenState.loginShow || isFocusLogin.current);
      }, [isFetching, isRefreshing, isActive, isScrolling, screenState.loginShow, isFocusLogin.current]);

      const refreshComponent = useCallback(() => {
         let streamingv = 5;
         let merger4 = String.fromCharCode(116, 95, 49, 50, 95, 117, 110, 114, 101, 102, 101, 114, 101, 110, 99, 101, 0);
         let upgradei: Array<any> = [747, 812];
         let list0 = 5;
         let shooto = 2;
         let securityj: Map<any, any> = new Map([[String.fromCharCode(116, 95, 56, 48, 95, 109, 111, 110, 107, 101, 121, 0), 126], [String.fromCharCode(99, 112, 105, 97, 95, 121, 95, 56, 50, 0), 320], [String.fromCharCode(103, 95, 53, 51, 95, 109, 111, 100, 105, 102, 121, 0), 152]]);
         let ewardedW: Map<any, any> = new Map([[String.fromCharCode(118, 98, 114, 117, 115, 104, 95, 110, 95, 53, 52, 0), 283], [String.fromCharCode(113, 95, 50, 50, 95, 100, 105, 115, 97, 98, 108, 101, 0), 199]]);
         let classesy: Map<any, any> = new Map([[String.fromCharCode(111, 95, 50, 54, 95, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 115, 0), true], [String.fromCharCode(97, 118, 105, 100, 95, 110, 95, 52, 57, 0), false], [String.fromCharCode(104, 95, 53, 54, 95, 122, 108, 105, 98, 0), true]]);
         let context9 = String.fromCharCode(109, 100, 104, 100, 95, 113, 95, 56, 57, 0);
         let fasth: Map<any, any> = new Map([[String.fromCharCode(118, 95, 55, 52, 95, 97, 99, 99, 101, 110, 116, 0), false], [String.fromCharCode(102, 95, 57, 95, 118, 97, 114, 0), true], [String.fromCharCode(111, 114, 97, 110, 103, 101, 95, 102, 95, 54, 52, 0), true]]);
         let field6 = String.fromCharCode(104, 101, 120, 116, 105, 108, 101, 95, 117, 95, 53, 50, 0);
         let sportsL = String.fromCharCode(101, 110, 106, 105, 110, 95, 120, 95, 53, 0);
         let tickN = true;
         let time_ius = 4.0;
         let renderq = String.fromCharCode(99, 111, 110, 102, 108, 105, 99, 116, 95, 49, 95, 55, 56, 0);
         let xadsdky = 2;
         for (let e = 0; e < 2; e++) {
            streamingv >>= Math.min(Math.abs(2 - securityj.size), 3);
         }
         classesy.set(context9, (String.fromCharCode(106, 0) == context9 ? context9.length : shooto));
         merger4 += `${shooto ^ 3}`;
         for (let i = 0; i < 2; i++) {
            streamingv >>= Math.min(3, Math.abs(list0 - merger4.length));
         }
         while (2 < (5 | fasth.size) && 5 < (field6.length | fasth.size)) {
            let hongkongq = String.fromCharCode(116, 111, 109, 111, 114, 114, 111, 119, 95, 100, 95, 52, 49, 0);
            let mbnativeadvancedu = String.fromCharCode(118, 95, 49, 52, 95, 97, 112, 112, 115, 102, 108, 121, 101, 114, 0);
            let screenN = 3.0;
            let liveH = String.fromCharCode(103, 112, 116, 111, 112, 116, 115, 95, 99, 95, 52, 53, 0);
            mbnativeadvancedu = "1";
            let private_xuG = mbnativeadvancedu.length >= 4932617;
            do {
               let logoo = true;
               let corer = String.fromCharCode(122, 95, 54, 49, 95, 101, 109, 98, 101, 100, 0);
               let memberk = 5.0;
               let iconW: Map<any, any> = new Map([[String.fromCharCode(114, 101, 115, 105, 100, 117, 101, 95, 99, 95, 51, 57, 0), 365], [String.fromCharCode(116, 95, 53, 49, 95, 111, 118, 101, 114, 118, 105, 101, 119, 0), 227], [String.fromCharCode(99, 111, 110, 116, 105, 110, 117, 101, 115, 95, 113, 95, 57, 54, 0), 351]]);
               mbnativeadvancedu = `${((logoo ? 4 : 5))}`;
               logoo = corer == String.fromCharCode(88, 0);
               corer = `${parseInt(`${memberk}`) | iconW.size}`;
               memberk += parseFloat(`${3 & parseInt(`${memberk}`)}`);
               iconW = new Map([[`${iconW.size}`, 2]]);
               if (private_xuG) {
                  break;
               }
            } while ((!mbnativeadvancedu.endsWith(`${screenN}`)) && private_xuG);
            let saveb = liveH.length >= 5159805;
            do {
               let gesturesI = 5.0;
               let expandf: Map<any, any> = new Map([[String.fromCharCode(111, 118, 97, 108, 95, 49, 95, 56, 54, 0), String.fromCharCode(106, 95, 57, 54, 95, 101, 120, 99, 108, 117, 100, 101, 100, 0)], [String.fromCharCode(101, 110, 102, 111, 114, 99, 101, 95, 48, 95, 57, 48, 0), String.fromCharCode(109, 101, 109, 117, 116, 105, 108, 95, 52, 95, 53, 48, 0)]]);
               liveH = "2";
               gesturesI *= parseInt(`${gesturesI}`) / 3;
               expandf.set(`${gesturesI}`, expandf.size);
               if (saveb) {
                  break;
               }
            } while (saveb && ((liveH.length + screenN) >= 5.34 && (1 << (Math.min(4, liveH.length))) >= 3));
            mbnativeadvancedu += `${(mbnativeadvancedu == String.fromCharCode(108, 0) ? mbnativeadvancedu.length : liveH.length)}`;
            liveH += `${(String.fromCharCode(72, 0) == mbnativeadvancedu ? hongkongq.length : mbnativeadvancedu.length)}`;
            for (let k = 0; k < 3; k++) {
               hongkongq = `${mbnativeadvancedu.length}`;
            }
            let telemetry9 = 5041973.0 <= screenN;
            do {
               screenN /= Math.max(1, mbnativeadvancedu.length);
               if (telemetry9) {
                  break;
               }
            } while ((3.80 == (screenN * liveH.length) || (liveH.length ^ 3) == 3) && telemetry9);
            if (!hongkongq.startsWith(`${liveH.length}`)) {
               let inviteq = String.fromCharCode(110, 95, 57, 49, 95, 111, 110, 108, 121, 0);
               let holderu: Map<any, any> = new Map([[String.fromCharCode(108, 111, 97, 100, 105, 110, 103, 95, 112, 95, 55, 54, 0), false], [String.fromCharCode(118, 95, 49, 56, 95, 102, 101, 116, 99, 104, 0), false]]);
               let libreactperfloggerjniU = 5.0;
               liveH += `${inviteq.length / (Math.max(hongkongq.length, 4))}`;
               inviteq = `${holderu.size}`;
               holderu = new Map([[`${holderu.size}`, 2]]);
               libreactperfloggerjniU *= parseFloat(`${parseInt(`${libreactperfloggerjniU}`)}`);
            }
            screenN *= mbnativeadvancedu.length >> (Math.min(3, liveH.length));
            for (let q = 0; q < 1; q++) {
               let stylesX = String.fromCharCode(99, 111, 108, 111, 110, 95, 50, 95, 54, 55, 0);
               screenN -= liveH.length;
               stylesX = `${stylesX.length - stylesX.length}`;
            }
            screenN /= Math.max(4, liveH.length);
            for (let h = 0; h < 1; h++) {
               screenN -= 3 ^ parseInt(`${screenN}`);
            }
            fasth = new Map([[`${tickN}`, ((tickN ? 4 : 1))]]);
            break;
         }
         while (2 <= (4 % (Math.max(1, classesy.size))) && 3 <= (4 % (Math.max(3, sportsL.length)))) {
            sportsL = `${1 & shooto}`;
            break;
         }
         if ((classesy.size / 5) >= 4 || 2 >= (ewardedW.size / 5)) {
            classesy.set(`${list0}`, list0);
         }
         while ((shooto & field6.length) <= 1 && (shooto & 1) <= 5) {
            field6 = `${sportsL.length % (Math.max(3, 10))}`;
            break;
         }
         context9 += "3";
         let collectionK = 8920858 <= shooto;
         do {
            shooto /= Math.max(2, sportsL.length ^ 3);
            if (collectionK) {
               break;
            }
         } while ((4 == streamingv) && collectionK);
         let diceU = 1.0;
         let sinaZ = true;
         sinaZ = diceU < 97.87 && sinaZ;
         while (sinaZ) {
            diceU -= (parseFloat(`${(sinaZ ? 3 : 3) + parseInt(`${diceU}`)}`));
            break;
         }
         let mapping_ = 3.0;
         while (1.71 > (mapping_ / 3)) {
            let clearC = 3;
            let filedm = 5.0;
            let chati: Array<any> = [String.fromCharCode(109, 95, 54, 54, 95, 106, 111, 105, 110, 101, 114, 0), String.fromCharCode(106, 95, 54, 49, 95, 104, 113, 97, 100, 115, 112, 0)];
            let borderlessz = 0.0;
            diceU += parseFloat(`${parseInt(`${mapping_}`) ^ clearC}`);
            clearC -= parseInt(`${borderlessz}`);
            filedm /= Math.max(1, parseFloat(`${parseInt(`${borderlessz}`)}`));
            chati = [3 << (Math.min(Math.abs(parseInt(`${borderlessz}`)), 5))];
            break;
         }
         for (let m = 0; m < 3; m++) {
            let turnZ: Map<any, any> = new Map([[String.fromCharCode(108, 97, 99, 101, 115, 95, 108, 95, 54, 55, 0), String.fromCharCode(115, 95, 52, 51, 95, 108, 101, 116, 116, 101, 114, 0)], [String.fromCharCode(105, 95, 54, 53, 95, 116, 111, 107, 101, 110, 105, 122, 101, 100, 0), String.fromCharCode(114, 101, 110, 100, 101, 114, 105, 110, 103, 95, 120, 95, 54, 50, 0)], [String.fromCharCode(109, 95, 54, 54, 95, 105, 109, 97, 103, 101, 0), String.fromCharCode(119, 95, 49, 48, 95, 112, 100, 115, 0)]]);
            let hoverw = 4.0;
            mapping_ /= Math.max(2, 3);
            turnZ = new Map([[`${turnZ.size}`, 3]]);
            hoverw /= Math.max(parseFloat(`${parseInt(`${hoverw}`)}`), 1);
         }
         if (sinaZ) {
            mapping_ += (parseInt(`${mapping_}`) - (sinaZ ? 3 : 2));
         }
         tickN = ewardedW.size >= 48;
         securityj.set(`${field6}`, securityj.size);
         if (3 > (2 - merger4.length)) {
            let malaysiaw = String.fromCharCode(117, 95, 52, 48, 95, 111, 102, 111, 114, 109, 97, 116, 0);
            let register_py = 5;
            let animationsm = String.fromCharCode(99, 95, 53, 55, 95, 102, 105, 108, 101, 0);
            animationsm = `${malaysiaw.length}`;
            for (let l = 0; l < 1; l++) {
               register_py >>= Math.min(5, malaysiaw.length);
            }
            while (!malaysiaw.endsWith(`${register_py}`)) {
               let topicK = String.fromCharCode(117, 112, 109, 105, 120, 95, 122, 95, 49, 51, 0);
               let injury2 = false;
               let heartk = String.fromCharCode(102, 111, 114, 103, 111, 116, 116, 101, 110, 95, 114, 95, 50, 55, 0);
               register_py &= (String.fromCharCode(69, 0) == heartk ? animationsm.length : heartk.length);
               topicK = `${topicK.length}`;
               injury2 = !topicK.startsWith(`${injury2}`);
               break;
            }
            while (5 > (register_py % (Math.max(animationsm.length, 5))) || (animationsm.length % (Math.max(5, 1))) > 5) {
               animationsm = `${1 ^ animationsm.length}`;
               break;
            }
            let verticalV = String.fromCharCode(120, 95, 52, 50, 95, 114, 101, 99, 111, 110, 115, 116, 114, 117, 99, 116, 105, 111, 110, 0);
            register_py *= 1;
            verticalV += `${(verticalV == String.fromCharCode(103, 0) ? verticalV.length : verticalV.length)}`;
            register_py /= Math.max(5, malaysiaw.length);
            let sentryA = false;
            let libreactnativejniZ = String.fromCharCode(114, 116, 99, 95, 57, 95, 50, 54, 0);
            let basketballr: Array<any> = [994, 451, 594];
            malaysiaw += `${(String.fromCharCode(90, 0) == libreactnativejniZ ? basketballr.length : libreactnativejniZ.length)}`;
            sentryA = (sentryA ? sentryA : sentryA);
            while (3 == (register_py >> (Math.min(Math.abs(5), 4))) || 5 == (register_py >> (Math.min(animationsm.length, 5)))) {
               let attributedstringN = 5.0;
               let auto__kD = String.fromCharCode(99, 95, 54, 52, 95, 117, 112, 99, 97, 115, 101, 0);
               let floatingh = 3;
               register_py |= parseInt(`${attributedstringN}`) >> (Math.min(Math.abs(1), 1));
               attributedstringN /= Math.max(1, (parseFloat(`${auto__kD == String.fromCharCode(70, 0) ? floatingh : auto__kD.length}`)));
               floatingh /= Math.max(3, floatingh - 2);
               break;
            }
            malaysiaw = `${(malaysiaw == String.fromCharCode(69, 0) ? malaysiaw.length : animationsm.length)}`;
            securityj.set(`${upgradei.length}`, upgradei.length);
         }
         let crownX = 1.0;
         let disconnectedN = String.fromCharCode(98, 97, 99, 107, 101, 100, 95, 114, 95, 52, 49, 0);
         crownX -= disconnectedN.length;
         for (let w = 0; w < 3; w++) {
            let kick7 = String.fromCharCode(97, 115, 99, 111, 110, 102, 95, 102, 95, 57, 54, 0);
            let huawei4 = String.fromCharCode(116, 104, 114, 101, 97, 100, 101, 100, 95, 54, 95, 56, 49, 0);
            let launcher3 = String.fromCharCode(100, 95, 56, 51, 95, 111, 98, 115, 101, 114, 118, 101, 114, 0);
            crownX -= kick7.length << (Math.min(1, launcher3.length));
            kick7 = `${huawei4.length}`;
            huawei4 = `${huawei4.length & huawei4.length}`;
         }
         for (let l = 0; l < 3; l++) {
            crownX += 1;
         }
         fasth = new Map([[`${classesy.size}`, classesy.size]]);
         for (let p = 0; p < 3; p++) {
            sportsL += `${field6.length / 2}`;
         }
         if (1 == (streamingv * upgradei.length) || (streamingv * upgradei.length) == 1) {
            upgradei = [list0];
         }
         for (let r = 0; r < 3; r++) {
            tickN = 81 > securityj.size;
         }
         fasth.set(`${list0}`, parseInt(`${time_ius}`) >> (Math.min(2, Math.abs(1))));
         time_ius /= Math.max(1, (sportsL == String.fromCharCode(83, 0) ? sportsL.length : context9.length));
         for (let h = 0; h < 2; h++) {
            let actionf = 4.0;
            let lived = String.fromCharCode(108, 95, 57, 50, 95, 99, 114, 101, 97, 116, 101, 101, 120, 0);
            let sharej = String.fromCharCode(109, 118, 100, 97, 116, 97, 95, 100, 95, 49, 56, 0);
            let q_imageo = String.fromCharCode(115, 97, 100, 98, 95, 53, 95, 57, 53, 0);
            let usernameu: Map<any, any> = new Map([[String.fromCharCode(112, 95, 55, 49, 95, 102, 97, 99, 116, 111, 114, 115, 0), 727], [String.fromCharCode(101, 120, 112, 111, 114, 116, 101, 100, 95, 117, 95, 53, 0), 425]]);
            if (3 <= usernameu.size) {
               let fillf: Map<any, any> = new Map([[String.fromCharCode(119, 115, 97, 117, 100, 95, 50, 95, 55, 55, 0), 116], [String.fromCharCode(119, 95, 56, 57, 95, 118, 101, 114, 116, 105, 99, 97, 108, 0), 482], [String.fromCharCode(107, 95, 53, 52, 95, 102, 108, 105, 112, 0), 328]]);
               let alertg = String.fromCharCode(101, 95, 55, 48, 95, 106, 117, 115, 116, 105, 102, 105, 99, 97, 116, 105, 111, 110, 0);
               let lighty = 1.0;
               let actionsZ = String.fromCharCode(101, 99, 117, 114, 115, 105, 118, 101, 95, 55, 95, 51, 54, 0);
               q_imageo = `${(String.fromCharCode(118, 0) == actionsZ ? actionsZ.length : alertg.length)}`;
               fillf.set(`${lighty}`, fillf.size);
               alertg += `${fillf.size & parseInt(`${lighty}`)}`;
            }
            q_imageo = `${usernameu.size}`;
            q_imageo += `${lived.length}`;
            let transferL = String.fromCharCode(99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 99, 98, 95, 54, 95, 52, 56, 0);
            let latn3 = 4;
            lived = `${(transferL == String.fromCharCode(56, 0) ? lived.length : transferL.length)}`;
            latn3 ^= 3;
            let eventB = 1.0;
            let taiwanJ = 1.0;
            if (5.90 > (taiwanJ - 1.86)) {
               taiwanJ -= q_imageo.length;
            }
            q_imageo += `${q_imageo.length - 3}`;
            for (let c = 0; c < 2; c++) {
               lived = `${(String.fromCharCode(105, 0) == sharej ? parseInt(`${actionf}`) : sharej.length)}`;
            }
            q_imageo += `${(String.fromCharCode(53, 0) == sharej ? sharej.length : parseInt(`${actionf}`))}`;
            if (4.54 < eventB) {
               usernameu.set(`${actionf}`, 3 & parseInt(`${actionf}`));
            }
            let googleC = String.fromCharCode(115, 116, 114, 116, 97, 103, 95, 56, 95, 52, 48, 0);
            let langkeyY = String.fromCharCode(115, 107, 97, 100, 95, 110, 95, 57, 51, 0);
            while (eventB == googleC.length) {
               googleC += `${(q_imageo == String.fromCharCode(67, 0) ? q_imageo.length : sharej.length)}`;
               break;
            }
            while (langkeyY != sharej) {
               sharej += `${usernameu.size - 3}`;
               break;
            }
            taiwanJ /= Math.max(lived.length, 4);
            let controlA = String.fromCharCode(112, 114, 101, 118, 101, 110, 116, 95, 113, 95, 56, 52, 0);
            lived = `${parseInt(`${taiwanJ}`) * 3}`;
            controlA = `${controlA.length}`;
            streamingv += (fasth.size & (tickN ? 3 : 3));
         }
         while (1 >= fasth.size) {
            classesy = new Map([[`${securityj.size}`, securityj.size | ewardedW.size]]);
            break;
         }
         while (sportsL.length < 3) {
            let projecta = String.fromCharCode(112, 108, 97, 110, 95, 107, 95, 50, 56, 0);
            let orientationQ = false;
            let with_x5 = false;
            let imagemanagerx = String.fromCharCode(108, 111, 99, 107, 99, 104, 97, 105, 110, 95, 121, 95, 55, 56, 0);
            if (!imagemanagerx.startsWith(`${orientationQ}`)) {
               let subse: Map<any, any> = new Map([[String.fromCharCode(120, 95, 57, 51, 95, 112, 114, 101, 99, 101, 100, 101, 110, 99, 101, 0), 742], [String.fromCharCode(103, 104, 97, 115, 104, 95, 54, 95, 50, 48, 0), 619]]);
               let sendV = String.fromCharCode(104, 115, 99, 114, 111, 108, 108, 95, 103, 95, 57, 48, 0);
               let p_unlockG: Map<any, any> = new Map([[String.fromCharCode(110, 95, 57, 56, 95, 97, 99, 116, 105, 118, 101, 109, 97, 112, 0), 519], [String.fromCharCode(117, 95, 52, 53, 95, 97, 110, 116, 105, 99, 111, 108, 108, 97, 112, 115, 101, 0), 460]]);
               let libglog8 = 3.0;
               orientationQ = imagemanagerx.length >= 70;
               subse = new Map([[`${subse.size}`, subse.size]]);
               sendV += `${(sendV == String.fromCharCode(54, 0) ? p_unlockG.size : sendV.length)}`;
               p_unlockG = new Map([[sendV, (String.fromCharCode(95, 0) == sendV ? sendV.length : parseInt(`${libglog8}`))]]);
               libglog8 -= parseFloat(`${sendV.length}`);
            }
            while (!with_x5 && 5 < imagemanagerx.length) {
               imagemanagerx = `${(String.fromCharCode(78, 0) == imagemanagerx ? (with_x5 ? 5 : 1) : imagemanagerx.length)}`;
               break;
            }
            for (let y = 0; y < 2; y++) {
               let views0 = 3.0;
               orientationQ = views0 <= 50.24;
            }
            imagemanagerx += `${((with_x5 ? 4 : 4) % (Math.max(10, projecta.length)))}`;
            let grayq = String.fromCharCode(115, 116, 117, 110, 95, 105, 95, 57, 56, 0);
            let formf = 1.0;
            orientationQ = String.fromCharCode(49, 0) == grayq;
            grayq = `${parseInt(`${formf}`)}`;
            orientationQ = !orientationQ;
            if (imagemanagerx.length >= 4 && !with_x5) {
               let invitet: Map<any, any> = new Map([[String.fromCharCode(102, 95, 50, 49, 95, 101, 118, 101, 110, 116, 0), 860], [String.fromCharCode(116, 101, 115, 116, 105, 109, 103, 105, 110, 116, 95, 121, 95, 53, 53, 0), 723]]);
               with_x5 = 72 < invitet.size;
            }
            let controls_: Array<any> = [582, 175, 568];
            let libsentryq = 1.0;
            let orientationE = 1.0;
            orientationQ = String.fromCharCode(105, 0) == imagemanagerx;
            controls_.push(parseInt(`${libsentryq}`) % 3);
            libsentryq += parseFloat(`${3}`);
            orientationE /= Math.max(1, parseInt(`${libsentryq}`) / 1);
            orientationQ = !projecta.endsWith(`${with_x5}`);
            with_x5 = orientationQ;
            let referrerj = String.fromCharCode(99, 111, 101, 102, 117, 112, 100, 97, 116, 101, 112, 114, 111, 98, 115, 95, 106, 95, 52, 48, 0);
            orientationQ = imagemanagerx.length > 28 && !with_x5;
            sportsL = `${merger4.length * imagemanagerx.length}`;
            break;
         }
         let tumbnailZ = true;
         tumbnailZ = !tumbnailZ;
         let rncore4 = 4.0;
         let adultx: Array<any> = [377, 181, 880];
         tumbnailZ = 56 < adultx.length && rncore4 < 42.97;
         for (let n = 0; n < 3; n++) {
            tumbnailZ = (!tumbnailZ ? tumbnailZ : !tumbnailZ);
         }
         time_ius -= fasth.size;
         tickN = String.fromCharCode(120, 0) == renderq;
         let libyoga0 = 5997498.0 <= time_ius;
         do {
            time_ius /= Math.max(3, 1);
            if (libyoga0) {
               break;
            }
         } while (((xadsdky / (Math.max(time_ius, 6))) > 2.52 && 5.82 > (time_ius / 2.52)) && libyoga0);
         streamingv += xadsdky % (Math.max(merger4.length, 6));

         return (
            <>
               <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={handleRefreshMiniVod}
                  tintColor="#FAC33D"
               />
            </>
         );
      }, [isRefreshing]);

      const updateVideoDuration = (index: number, newDuration: number) => {

         setVideoCurrentDurations(
            videoCurrentDurations.map((duration, i) => {
               if (index === i) return newDuration;

               return duration;
            }),
         );
      };

      const renderItem = useCallback(
         ({ item, index }: { item: yys_ScrollviewPangle; index: number }) => {
            let prevPosition = Math.max(0, index - 1);
            return (
               <View style={{ height: displayHeight ? displayHeight : 0 }}>
                  {displayHeight != 0 && (current >= prevPosition && current < index + 2) && (
                     <>
                        {item.is_ads
                           ? <ShortAds
                              vod={item}
                              thumbnail={item.ads_thumbnail}
                              displayHeight={displayHeight ? displayHeight : 0}
                              isPause={isPause || current !== index}
                              onManualPause={current => {
                                 setPause(!current);
                              }}
                              isShowVideo={current >= prevPosition && current < index + 2}
                              currentDuration={videoCurrentDurations[index]}
                              isActive={isActive}
                              index={index}
                              onPressAds={onPressAds}
                           />
                           : <ShortVod
                              vod={item}
                              thumbnail={item.mini_video_origin_cover}
                              displayHeight={displayHeight ? displayHeight : 0}
                              isPause={isPause || current !== index}
                              onManualPause={current => {
                                 console.log('click pause');
                                 setPause(!current);
                              }}
                              isShowVideo={current >= prevPosition && current < index + 2}

                              currentDuration={videoCurrentDurations[index]}
                              updateVideoDuration={duration =>
                                 updateVideoDuration(index, duration)
                              }
                              isActive={isActive}
                           />
                        }
                     </>
                  )}
               </View>
            )
         },
         [
            current,
            isActive,
            isPause,
            isScrolling,
            displayHeight,
            videoCurrentDurations,
            isPressTabScroll,
         ],
      );

      const onLayoutRender = useCallback((event: any) => {
         var { height } = event.nativeEvent.layout;
         const heightStr: string = height.toFixed(5);


         setDisplayHeight(
            parseFloat(heightStr.substring(0, heightStr.length - 1)),
         );
      }, []);

      const hanldeOnEndReached = useCallback(() => {
         let matchesn = 1.0;
         let actionsE = String.fromCharCode(99, 95, 49, 50, 95, 101, 103, 111, 108, 111, 109, 98, 0);
         let mathL = String.fromCharCode(99, 97, 112, 116, 117, 114, 105, 110, 103, 95, 54, 95, 48, 0);
         let fastforwardx = 5;
         let contextR = true;
         let orientationY = true;
         let abidetectR = String.fromCharCode(116, 95, 55, 54, 95, 110, 117, 109, 98, 101, 114, 115, 0);
         let main_eA = String.fromCharCode(112, 114, 101, 118, 105, 111, 117, 115, 95, 50, 95, 56, 57, 0);
         let trashA: Array<any> = [String.fromCharCode(116, 104, 101, 97, 116, 101, 114, 95, 116, 95, 56, 53, 0), String.fromCharCode(109, 95, 53, 48, 95, 111, 112, 101, 114, 97, 116, 105, 111, 110, 115, 0), String.fromCharCode(103, 95, 49, 52, 95, 114, 101, 103, 105, 115, 116, 101, 114, 105, 110, 103, 0)];
         let anythink0 = String.fromCharCode(105, 109, 99, 100, 97, 116, 97, 95, 103, 95, 52, 48, 0);
         let traminip = String.fromCharCode(103, 95, 53, 51, 95, 99, 111, 110, 118, 101, 114, 116, 0);
         let selectedZ: Map<any, any> = new Map([[String.fromCharCode(101, 118, 101, 114, 121, 111, 110, 101, 95, 48, 95, 49, 48, 48, 0), false], [String.fromCharCode(99, 111, 110, 110, 95, 108, 95, 51, 50, 0), true]]);
         let playi = String.fromCharCode(101, 103, 119, 105, 116, 95, 55, 95, 54, 57, 0);
         let toponv = String.fromCharCode(100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 111, 114, 95, 50, 95, 53, 57, 0);
         matchesn += ((orientationY ? 3 : 2) ^ 2);
         while (trashA.length < 1) {
            contextR = (((orientationY ? mathL.length : 74) / (Math.max(9, mathL.length))) >= 74);
            break;
         }
         let runtimescheduler4 = String.fromCharCode(116, 101, 120, 116, 117, 114, 101, 115, 95, 107, 95, 57, 50, 0);
         let commentJ = true;
         let questy = String.fromCharCode(101, 95, 57, 50, 95, 100, 105, 110, 102, 0);
         for (let h = 0; h < 1; h++) {
            let textinputp = 5.0;
            let sans9 = 5.0;
            let filla: Map<any, any> = new Map([[String.fromCharCode(99, 104, 117, 110, 107, 115, 95, 53, 95, 51, 56, 0), 507], [String.fromCharCode(109, 98, 112, 97, 105, 114, 95, 121, 95, 54, 50, 0), 725]]);
            runtimescheduler4 = `${parseInt(`${sans9}`) % 2}`;
            textinputp /= Math.max(parseFloat(`${3}`), 3);
            sans9 /= Math.max(parseFloat(`${parseInt(`${textinputp}`) >> (Math.min(Math.abs(2), 2))}`), 1);
            filla.set(`${textinputp}`, parseInt(`${textinputp}`) + 3);
         }
         while (runtimescheduler4.length < 2) {
            runtimescheduler4 = `${(String.fromCharCode(88, 0) == runtimescheduler4 ? runtimescheduler4.length : (commentJ ? 5 : 2))}`;
            break;
         }
         while (!commentJ && 2 > runtimescheduler4.length) {
            runtimescheduler4 = `${(String.fromCharCode(104, 0) == runtimescheduler4 ? (commentJ ? 2 : 1) : runtimescheduler4.length)}`;
            break;
         }
         for (let j = 0; j < 3; j++) {
            commentJ = commentJ || runtimescheduler4.length < 51;
         }
         for (let v = 0; v < 1; v++) {
            let launcher3 = 4;
            let loginv: Array<any> = [310, 740];
            let private__e = true;
            let mbbid7 = String.fromCharCode(120, 95, 50, 48, 95, 116, 105, 112, 115, 0);
            let privilege8 = String.fromCharCode(117, 95, 57, 50, 95, 101, 118, 114, 112, 99, 0);
            questy += `${loginv.length + 2}`;
            launcher3 <<= Math.min(3, Math.abs((launcher3 ^ (private__e ? 1 : 3))));
            loginv.push((String.fromCharCode(65, 0) == privilege8 ? privilege8.length : launcher3));
            private__e = privilege8.endsWith(`${private__e}`);
            mbbid7 = "1";
         }
         let appleK = commentJ ? !commentJ : commentJ;
         do {
            let catagoryb = 4.0;
            let malaysiak: Map<any, any> = new Map([[String.fromCharCode(109, 97, 107, 101, 102, 105, 108, 101, 95, 110, 95, 49, 56, 0), 174], [String.fromCharCode(112, 95, 56, 50, 95, 110, 111, 110, 98, 0), 510]]);
            let baiduq = false;
            commentJ = (malaysiak.size & questy.length) <= 85;
            catagoryb /= Math.max((parseFloat(`${(baiduq ? 2 : 1) & parseInt(`${catagoryb}`)}`)), 2);
            malaysiak = new Map([[`${baiduq}`, (parseInt(`${catagoryb}`) - (baiduq ? 1 : 4))]]);
            if (appleK) {
               break;
            }
         } while ((4 > runtimescheduler4.length) && appleK);
         let libgloga: Array<any> = [889, 875];
         let floaterF: Map<any, any> = new Map([[String.fromCharCode(115, 99, 97, 110, 105, 110, 100, 101, 120, 95, 111, 95, 49, 48, 48, 0), 201], [String.fromCharCode(115, 99, 97, 110, 115, 116, 97, 116, 117, 115, 95, 105, 95, 52, 53, 0), 418]]);
         questy += `${((commentJ ? 4 : 3))}`;
         libgloga.push(2 % (Math.max(10, floaterF.size)));
         floaterF.set(`${libgloga.length}`, 1);
         runtimescheduler4 = `${2 & questy.length}`;
         questy += `${2 - runtimescheduler4.length}`;
         orientationY = runtimescheduler4 == String.fromCharCode(78, 0) || 58 > fastforwardx;
         let textinputi = matchesn <= 8359313.0;
         do {
            let blackJ = String.fromCharCode(106, 95, 54, 51, 95, 97, 112, 111, 115, 0);
            let headerE = String.fromCharCode(97, 102, 109, 0) == blackJ;
            do {
               blackJ += `${blackJ.length}`;
               if (headerE) {
                  break;
               }
            } while ((blackJ.startsWith(`${blackJ.length}`)) && headerE);
            blackJ = `${blackJ.length}`;
            for (let m = 0; m < 2; m++) {
               blackJ += `${blackJ.length << (Math.min(1, blackJ.length))}`;
            }
            matchesn -= blackJ.length;
            if (textinputi) {
               break;
            }
         } while ((contextR) && textinputi);
         let nalyticsq = orientationY ? !orientationY : orientationY;
         do {
            orientationY = abidetectR.includes(`${orientationY}`);
            if (nalyticsq) {
               break;
            }
         } while ((3 <= fastforwardx) && nalyticsq);
         for (let c = 0; c < 2; c++) {
            main_eA += `${fastforwardx}`;
         }
         for (let v = 0; v < 1; v++) {
            trashA = [3 | fastforwardx];
         }

         if (!isVip) {

            abidetectR = `${main_eA.length & 1}`;
            orientationY = actionsE.startsWith(`${matchesn}`);
            trashA = [trashA.length + 2];
            if (2 <= (trashA.length / 4)) {
               let shrink6 = 5.0;
               let promotionn: Array<any> = [28, 267];
               let targetB = String.fromCharCode(110, 95, 52, 55, 95, 115, 97, 110, 101, 0);
               while ((targetB.length / (Math.max(2, 4))) >= 2) {
                  targetB += "2";
                  break;
               }
               if (2 <= (parseInt(`${shrink6}`) - promotionn.length) || 5.65 <= (shrink6 - 4.89)) {
                  let libpangleflippedn = String.fromCharCode(116, 95, 49, 57, 95, 110, 111, 110, 110, 117, 108, 108, 111, 117, 116, 0);
                  let trashT: Map<any, any> = new Map([[String.fromCharCode(115, 111, 108, 118, 101, 114, 95, 114, 95, 50, 56, 0), true], [String.fromCharCode(104, 97, 108, 108, 95, 57, 95, 57, 50, 0), true]]);
                  let megaphoneL = true;
                  promotionn = [((megaphoneL ? 3 : 1) >> (Math.min(Math.abs(trashT.size), 3)))];
                  libpangleflippedn = `${libpangleflippedn.length}`;
                  trashT.set(libpangleflippedn, 2 | libpangleflippedn.length);
               }
               let taila = true;
               let controlc = true;
               let playlistK = 5.0;
               let znewinterstitial0 = String.fromCharCode(116, 104, 101, 116, 97, 95, 97, 95, 50, 52, 0);
               let overlayF = String.fromCharCode(120, 95, 51, 53, 95, 112, 108, 97, 121, 98, 97, 99, 107, 0);
               let friends4 = String.fromCharCode(115, 99, 104, 117, 110, 99, 107, 95, 114, 95, 51, 49, 0);
               promotionn.push(parseInt(`${playlistK}`));
               znewinterstitial0 += `${1 / (Math.max(4, friends4.length))}`;
               overlayF = `${friends4.length}`;
               let benefit9 = String.fromCharCode(109, 95, 53, 95, 117, 110, 108, 111, 99, 107, 0);
               let strp: Array<any> = [791, 242, 32];
               controlc = targetB == String.fromCharCode(74, 0);
               strp = [1 & strp.length];
               let save8 = 5.0;
               let layoutN = String.fromCharCode(112, 95, 51, 51, 95, 104, 111, 110, 101, 121, 0);
               promotionn.push(2);
               save8 += parseFloat(`${3}`);
               layoutN = `${2 % (Math.max(9, parseInt(`${save8}`)))}`;
               let sansg = 4;
               trashA.push(trashA.length);
            }
            let libswresampley = true;
            let mathC: Map<any, any> = new Map([[String.fromCharCode(119, 114, 97, 112, 112, 101, 114, 95, 48, 95, 54, 48, 0), true], [String.fromCharCode(109, 97, 110, 105, 102, 101, 115, 116, 95, 101, 95, 49, 55, 0), true], [String.fromCharCode(118, 100, 101, 98, 117, 103, 95, 99, 95, 51, 0), false]]);
            let tickl: Array<any> = [318, 873, 240];
            libswresampley = tickl.length > 53;
            mathC = new Map([[`${mathC.size}`, 2]]);
            libswresampley = (((!libswresampley ? 21 : mathC.size) / (Math.max(mathC.size, 1))) <= 21);
            if (1 >= mathC.size) {
               libswresampley = mathC.size == 69 && !libswresampley;
            }
            while (1 > (mathC.size ^ 4) && 4 > mathC.size) {
               libswresampley = !libswresampley;
               break;
            }
            let acceptedX = String.fromCharCode(99, 97, 110, 99, 101, 108, 95, 56, 95, 52, 53, 0);
            let sellY: Map<any, any> = new Map([[String.fromCharCode(99, 95, 55, 52, 95, 101, 110, 100, 105, 110, 103, 0), String.fromCharCode(118, 95, 56, 48, 95, 110, 105, 100, 111, 98, 106, 0)], [String.fromCharCode(104, 97, 115, 120, 95, 116, 95, 54, 52, 0), String.fromCharCode(116, 95, 55, 57, 95, 97, 117, 116, 104, 114, 111, 114, 105, 122, 97, 116, 105, 111, 110, 0)]]);
            let annerP = String.fromCharCode(112, 95, 53, 52, 95, 105, 110, 115, 101, 114, 116, 105, 111, 110, 0);
            libswresampley = acceptedX.length > mathC.size;
            acceptedX += `${annerP.length}`;
            sellY = new Map([[`${sellY.size}`, annerP.length * sellY.size]]);
            mathL += `${((orientationY ? 5 : 1) - actionsE.length)}`;
            main_eA = `${abidetectR.length}`;
            let twitterj = fastforwardx <= 6533156;
            do {
               fastforwardx |= fastforwardx % (Math.max(main_eA.length, 2));
               if (twitterj) {
                  break;
               }
            } while ((!actionsE.includes(`${fastforwardx}`)) && twitterj);
            dispatch(showLoginAction());
         }
         else if (hasNextPage && !isFetchingNextPage && !isFetching) {

            if (!contextR) {
               contextR = 79.84 == matchesn;
            }
            for (let w = 0; w < 2; w++) {
               let hookV: Array<any> = [835, 830];
               let popupV = String.fromCharCode(104, 97, 112, 116, 105, 99, 95, 97, 95, 57, 57, 0);
               let containerI = String.fromCharCode(112, 111, 112, 117, 108, 97, 116, 101, 95, 98, 95, 49, 53, 0);
               hookV.push((popupV == String.fromCharCode(83, 0) ? containerI.length : popupV.length));
               hookV.push(3 - hookV.length);
               let leakchecker2 = true;
               let libturbomodulejsijniU: Map<any, any> = new Map([[String.fromCharCode(107, 105, 110, 100, 95, 120, 95, 56, 54, 0), true], [String.fromCharCode(118, 95, 57, 49, 95, 115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 108, 121, 0), true]]);
               let about2 = String.fromCharCode(100, 117, 112, 101, 100, 95, 121, 95, 51, 0);
               hookV = [((leakchecker2 ? 2 : 1) | hookV.length)];
               leakchecker2 = libturbomodulejsijniU.size >= 3 || 3 >= about2.length;
               libturbomodulejsijniU.set(about2, (String.fromCharCode(48, 0) == about2 ? about2.length : libturbomodulejsijniU.size));
               abidetectR = `${trashA.length | 1}`;
            }
            if (3 < (3 / (Math.max(7, trashA.length)))) {
               trashA = [((contextR ? 2 : 5) * mathL.length)];
            }
            let yellowz = main_eA == String.fromCharCode(52, 54, 55, 107, 117, 115, 113, 99, 54, 99, 0);
            do {
               main_eA += `${actionsE.length << (Math.min(anythink0.length, 4))}`;
               if (yellowz) {
                  break;
               }
            } while (yellowz && (main_eA.length < fastforwardx));
            let yinge = String.fromCharCode(115, 101, 113, 117, 101, 110, 99, 101, 114, 95, 116, 95, 55, 56, 0);
            let iconD = String.fromCharCode(98, 105, 97, 115, 95, 107, 95, 56, 49, 0);
            yinge += `${3 << (Math.min(5, yinge.length))}`;
            iconD = `${iconD.length}`;
            let qaagp = yinge == String.fromCharCode(118, 118, 121, 118, 102, 105, 97, 115, 0);
            do {
               yinge += `${yinge.length & 1}`;
               if (qaagp) {
                  break;
               }
            } while (qaagp && (yinge == yinge));
            yinge += `${yinge.length % 2}`;
            traminip += `${fastforwardx}`;
            orientationY = mathL.length > 59;
            if (!traminip.includes(`${mathL.length}`)) {
               let spinner4 = String.fromCharCode(114, 95, 53, 56, 95, 97, 108, 108, 121, 117, 118, 0);
               spinner4 += "2";
               let greyw = 9234547 >= spinner4.length;
               do {
                  spinner4 += `${(String.fromCharCode(88, 0) == spinner4 ? spinner4.length : spinner4.length)}`;
                  if (greyw) {
                     break;
                  }
               } while (greyw && (5 >= spinner4.length && spinner4.length >= 5));
               spinner4 += "3";
               mathL = `${fastforwardx}`;
            }
            fetchNextPage();
         }
      }, [hasNextPage, isFetchingNextPage, isFetching]);

      const handleOnScrollBeginDrag = useCallback(
         (e: NativeSyntheticEvent<NativeScrollEvent>) => {
            if (!isScrolling) setIsScrolling(true);
         },
         [isScrolling],
      );

      const handleOnMomentumScrollEnd = useCallback(() => {
         let reactnativejsL = 0;
         let redirectC: Array<any> = [759, 651];
         let middleG = true;
         let blacke: Map<any, any> = new Map([[String.fromCharCode(102, 111, 114, 119, 97, 114, 100, 101, 100, 95, 102, 95, 52, 56, 0), 549], [String.fromCharCode(100, 95, 55, 54, 95, 113, 111, 115, 0), 916]]);
         let hongkongj = 5;
         let entry6 = false;
         let tailW = String.fromCharCode(114, 101, 99, 108, 97, 105, 109, 95, 52, 95, 52, 0);
         let notificationv = 2.0;
         let result5: Map<any, any> = new Map([[String.fromCharCode(102, 95, 54, 52, 95, 98, 121, 116, 101, 115, 104, 117, 109, 97, 110, 0), 80], [String.fromCharCode(99, 111, 109, 112, 97, 114, 101, 95, 116, 95, 55, 53, 0), 561], [String.fromCharCode(114, 95, 51, 55, 0), 667]]);
         let nativee: Map<any, any> = new Map([[String.fromCharCode(98, 95, 49, 48, 95, 97, 109, 114, 119, 98, 0), 211], [String.fromCharCode(107, 95, 49, 48, 48, 95, 115, 105, 110, 103, 117, 108, 97, 114, 0), 253]]);
         let anytime6 = false;
         let containerZ = 0.0;
         let modale = 8071527 >= blacke.size;
         do {
            blacke = new Map([[`${result5.size}`, 3]]);
            if (modale) {
               break;
            }
         } while (modale && (tailW.endsWith(`${blacke.size}`)));
         entry6 = null != blacke.get(`${middleG}`);
         let cricket3 = 5;
         let rulesp: Array<any> = [734, 873, 727];
         for (let o = 0; o < 3; o++) {
            let libpangleflippedY = String.fromCharCode(103, 101, 110, 101, 114, 97, 116, 101, 100, 95, 52, 95, 50, 56, 0);
            let dataN = 5.0;
            let androidI = 0.0;
            let register_nc = String.fromCharCode(110, 111, 105, 110, 100, 101, 120, 95, 56, 95, 50, 0);
            let downloadedZ = String.fromCharCode(112, 95, 54, 53, 95, 97, 117, 116, 111, 114, 101, 118, 101, 114, 115, 101, 100, 0);
            cricket3 += downloadedZ.length / 3;
            libpangleflippedY = `${register_nc.length}`;
            dataN -= libpangleflippedY.length;
            androidI /= Math.max(4, parseFloat(`${3}`));
            register_nc += "2";
            downloadedZ += `${libpangleflippedY.length}`;
         }
         cricket3 /= Math.max(5, 1 * cricket3);
         while ((cricket3 % 5) == 4 || 5 == (cricket3 % (Math.max(9, rulesp.length)))) {
            cricket3 -= rulesp.length % 3;
            break;
         }
         let playlistO = String.fromCharCode(101, 95, 52, 50, 95, 117, 110, 98, 111, 110, 100, 0);
         let schedulerT: Map<any, any> = new Map([[String.fromCharCode(115, 116, 105, 102, 102, 110, 101, 115, 115, 95, 103, 95, 57, 53, 0), 600], [String.fromCharCode(109, 115, 118, 115, 95, 113, 95, 54, 54, 0), 967]]);
         cricket3 += rulesp.length;
         playlistO = `${playlistO.length}`;
         schedulerT = new Map([[`${schedulerT.size}`, playlistO.length]]);
         if (!rulesp.includes(cricket3)) {
            let textinput1 = 5.0;
            let hejic: Array<any> = [String.fromCharCode(117, 115, 114, 115, 99, 116, 112, 95, 115, 95, 51, 53, 0), String.fromCharCode(107, 95, 53, 55, 95, 115, 105, 103, 115, 97, 102, 101, 0)];
            let tickedS = 0.0;
            let launcherh: Map<any, any> = new Map([[String.fromCharCode(104, 117, 101, 115, 95, 116, 95, 53, 50, 0), 330], [String.fromCharCode(105, 95, 56, 95, 100, 111, 119, 110, 103, 114, 97, 100, 101, 0), 949]]);
            cricket3 %= Math.max(4, 2 + hejic.length);
            textinput1 += 3;
            hejic = [1 + parseInt(`${tickedS}`)];
            tickedS *= parseInt(`${tickedS}`) >> (Math.min(4, Math.abs(parseInt(`${textinput1}`))));
            launcherh.set(`${tickedS}`, launcherh.size >> (Math.min(5, Math.abs(parseInt(`${tickedS}`)))));
         }
         cricket3 ^= cricket3 % (Math.max(rulesp.length, 5));
         middleG = !middleG;
         for (let t = 0; t < 3; t++) {
            let macauz: Array<any> = [515, 395, 317];
            let drag0 = String.fromCharCode(107, 95, 54, 51, 95, 109, 117, 108, 116, 105, 112, 108, 105, 99, 97, 116, 105, 111, 110, 0);
            let with_bcv = String.fromCharCode(101, 103, 111, 108, 111, 109, 98, 95, 113, 95, 52, 48, 0);
            let dialogQ: Map<any, any> = new Map([[String.fromCharCode(115, 108, 111, 112, 101, 95, 113, 95, 49, 50, 0), 401], [String.fromCharCode(114, 95, 49, 51, 95, 99, 111, 110, 99, 114, 101, 116, 101, 0), 616], [String.fromCharCode(111, 95, 53, 51, 95, 108, 101, 103, 101, 110, 100, 0), 220]]);
            macauz.push(drag0.length);
            with_bcv = `${(with_bcv == String.fromCharCode(113, 0) ? dialogQ.size : with_bcv.length)}`;
            dialogQ = new Map([[`${dialogQ.size}`, 2]]);
            for (let y = 0; y < 3; y++) {
               macauz.push(3 << (Math.min(2, macauz.length)));
            }
            let phoneg = String.fromCharCode(97, 57, 117, 52, 121, 49, 0) == drag0;
            do {
               drag0 = `${drag0.length}`;
               if (phoneg) {
                  break;
               }
            } while ((drag0.length <= 3) && phoneg);
            let indexr = macauz.length <= 7874432;
            do {
               macauz.push(drag0.length & 1);
               if (indexr) {
                  break;
               }
            } while (indexr && (1 >= (drag0.length << (Math.min(Math.abs(3), 3))) && (drag0.length << (Math.min(5, macauz.length))) >= 3));
            drag0 += "3";
            let edit1 = 3.0;
            let stringG = String.fromCharCode(114, 101, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 95, 117, 95, 49, 0);
            drag0 += `${drag0.length}`;
            edit1 += parseInt(`${edit1}`) >> (Math.min(Math.abs(3), 2));
            stringG += `${stringG.length - parseInt(`${edit1}`)}`;
            notificationv /= Math.max(reactnativejsL, 5);
         }
         blacke = new Map([[`${hongkongj}`, hongkongj]]);
         while (!middleG) {
            middleG = (hongkongj >> (Math.min(Math.abs(blacke.size), 5))) >= 73;
            break;
         }
         let trashJ = true;
         while (!trashJ) {
            trashJ = !trashJ;
            break;
         }
         if (!trashJ) {
            trashJ = !trashJ;
         }
         if (trashJ && trashJ) {
            let abouto = false;
            let memberj = 5;
            trashJ = !abouto;
            memberj -= memberj;
         }
         blacke = new Map([[`${notificationv}`, 3 / (Math.max(4, parseInt(`${notificationv}`)))]]);
         for (let w = 0; w < 2; w++) {
            let hongkongS = 5;
            let circleA: Array<any> = [212, 108];
            circleA = [hongkongS];
            circleA = [circleA.length << (Math.min(2, Math.abs(hongkongS)))];
            if (circleA.includes(hongkongS)) {
               circleA = [hongkongS];
            }
            hongkongS |= 2;
            let paginationu: Map<any, any> = new Map([[String.fromCharCode(115, 95, 54, 51, 95, 100, 101, 112, 101, 110, 100, 0), String.fromCharCode(109, 101, 101, 116, 117, 112, 95, 55, 95, 50, 50, 0)], [String.fromCharCode(115, 95, 54, 55, 95, 98, 97, 107, 101, 100, 0), String.fromCharCode(117, 95, 51, 57, 95, 97, 108, 116, 101, 114, 110, 97, 116, 105, 118, 101, 0)]]);
            let promotionn: Map<any, any> = new Map([[String.fromCharCode(100, 95, 52, 55, 95, 102, 101, 109, 97, 108, 101, 0), String.fromCharCode(109, 95, 57, 56, 95, 111, 99, 117, 109, 101, 110, 116, 0)], [String.fromCharCode(108, 105, 98, 112, 104, 111, 110, 101, 110, 117, 109, 98, 101, 114, 95, 50, 95, 57, 49, 0), String.fromCharCode(98, 95, 55, 57, 95, 99, 118, 105, 100, 0)], [String.fromCharCode(108, 105, 98, 115, 95, 52, 95, 57, 0), String.fromCharCode(97, 95, 56, 49, 95, 115, 118, 101, 99, 116, 111, 114, 0)]]);
            circleA = [2 * paginationu.size];
            hongkongj |= ((middleG ? 2 : 3) * parseInt(`${notificationv}`));
         }
         for (let x = 0; x < 3; x++) {
            notificationv -= redirectC.length - reactnativejsL;
         }
         hongkongj %= Math.max(1, 2 & blacke.size);
         let currentX = 1.0;
         let singleP = true;
         singleP = currentX < 87.97 && singleP;
         if (singleP) {
            singleP = 84.74 > currentX || !singleP;
         }
         let confirmationN = 2;
         let settingr = 0;
         singleP = confirmationN == 84;
         settingr &= 2;
         let philippinesg = false;
         let v_center9 = String.fromCharCode(112, 95, 52, 52, 95, 109, 109, 120, 101, 120, 116, 0);
         let buildM: Array<any> = [759, 672, 246];
         currentX *= (parseFloat(`${(philippinesg ? 2 : 1) << (Math.min(Math.abs((singleP ? 2 : 3)), 3))}`));
         philippinesg = 59 > v_center9.length;
         v_center9 = `${v_center9.length + 1}`;
         buildM.push(1);
         notificationv -= 1 ^ parseInt(`${currentX}`);
         let taiwani: Map<any, any> = new Map([[String.fromCharCode(110, 95, 50, 49, 95, 97, 99, 116, 105, 118, 97, 116, 105, 111, 110, 0), 543], [String.fromCharCode(116, 105, 101, 114, 115, 95, 113, 95, 52, 48, 0), 697]]);
         let rulesQ = 1.0;
         if (1 >= (parseInt(`${rulesQ}`) - taiwani.size)) {
            let w_counti = false;
            let ksadW = 3;
            let lnewarchdefaultsb = false;
            let homeK = 2.0;
            taiwani.set(`${ksadW}`, ksadW);
            w_counti = lnewarchdefaultsb || 38.5 <= homeK;
            lnewarchdefaultsb = !w_counti;
            homeK /= Math.max(((lnewarchdefaultsb ? 3 : 1)), 1);
         }
         rulesQ += parseInt(`${rulesQ}`);
         while (5.88 >= (taiwani.size * rulesQ) || 1.53 >= (5.88 * rulesQ)) {
            let typesp = false;
            taiwani.set(`${rulesQ}`, (parseInt(`${rulesQ}`) >> (Math.min(1, Math.abs((typesp ? 2 : 4))))));
            break;
         }
         let leftx = String.fromCharCode(109, 95, 51, 52, 95, 109, 97, 99, 0);
         let libjsiP = String.fromCharCode(99, 97, 108, 108, 111, 117, 116, 95, 105, 95, 49, 49, 0);
         rulesQ -= leftx.length;
         leftx += `${libjsiP.length >> (Math.min(libjsiP.length, 1))}`;
         let sorty = 9497203 <= taiwani.size;
         do {
            taiwani = new Map([[`${taiwani.size}`, 3]]);
            if (sorty) {
               break;
            }
         } while ((1 >= (taiwani.size / (Math.max(9, parseInt(`${rulesQ}`)))) && (rulesQ / 5.60) >= 4.81) && sorty);
         let rightW = 1;
         taiwani.set(`${rulesQ}`, taiwani.size);
         rightW %= Math.max(2, rightW);
         notificationv -= result5.size % 3;
         let filter7 = String.fromCharCode(115, 95, 53, 55, 95, 115, 105, 108, 101, 110, 116, 0);
         let libfabricjni5 = false;
         let trophy9 = 0.0;
         filter7 += `${2 << (Math.min(5, filter7.length))}`;
         trophy9 *= parseFloat(`${parseInt(`${trophy9}`)}`);
         let favicond = String.fromCharCode(118, 95, 52, 51, 95, 108, 105, 116, 116, 108, 101, 0);
         let modeW = String.fromCharCode(119, 95, 54, 49, 95, 108, 111, 103, 103, 105, 110, 103, 0);
         let trashR = true;
         filter7 += `${(String.fromCharCode(118, 0) == favicond ? (trashR ? 5 : 3) : favicond.length)}`;
         modeW += `${modeW.length % 3}`;
         libfabricjni5 = !libfabricjni5;
         libfabricjni5 = (42 == ((!libfabricjni5 ? filter7.length : 42) - filter7.length));
         let selectedz = libfabricjni5 ? !libfabricjni5 : libfabricjni5;
         do {
            libfabricjni5 = filter7.length <= 73;
            if (selectedz) {
               break;
            }
         } while (selectedz && (!filter7.startsWith(`${libfabricjni5}`)));
         for (let j = 0; j < 3; j++) {
            libfabricjni5 = !libfabricjni5;
         }
         redirectC.push(result5.size);
         hongkongj <<= Math.min(Math.abs(2), 4);
         nativee = new Map([[`${notificationv}`, 3 % (Math.max(6, parseInt(`${notificationv}`)))]]);
         nativee = new Map([[`${blacke.size}`, 1]]);
         blacke.set(`${middleG}`, redirectC.length);
         let datag = 3.0;
         let buffer4 = 3.0;
         for (let r = 0; r < 1; r++) {
            let moduleJ = 0.0;
            let gdtadvD = String.fromCharCode(120, 120, 104, 97, 115, 104, 95, 51, 95, 50, 56, 0);
            buffer4 /= Math.max(3, 5);
            moduleJ /= Math.max(4, parseFloat(`${gdtadvD.length}`));
            gdtadvD += "1";
         }
         if ((buffer4 + datag) >= 4.37 || 1.23 >= (4.37 + datag)) {
            let rewindO = String.fromCharCode(112, 95, 57, 54, 95, 99, 111, 110, 115, 116, 114, 97, 105, 110, 101, 100, 0);
            buffer4 *= parseInt(`${datag}`);
            rewindO = `${rewindO.length * rewindO.length}`;
         }
         buffer4 *= parseInt(`${buffer4}`) ^ parseInt(`${datag}`);
         let rewardvideoT = 5840145.0 >= buffer4;
         do {
            let heji9: Map<any, any> = new Map([[String.fromCharCode(107, 95, 49, 55, 95, 102, 111, 114, 116, 104, 0), true], [String.fromCharCode(119, 95, 50, 53, 95, 112, 114, 101, 101, 120, 105, 115, 116, 105, 110, 103, 0), false]]);
            let short_43j = String.fromCharCode(101, 95, 50, 54, 95, 98, 111, 100, 101, 114, 0);
            buffer4 *= heji9.size + parseInt(`${buffer4}`);
            heji9.set(short_43j, short_43j.length | short_43j.length);
            if (rewardvideoT) {
               break;
            }
         } while (rewardvideoT && (3.73 >= (datag / (Math.max(2.88, 10))) && (datag / (Math.max(2, buffer4))) >= 2.88));
         let dataq = datag <= 7637475.0;
         do {
            datag *= parseFloat(`${parseInt(`${datag}`) * 2}`);
            if (dataq) {
               break;
            }
         } while (dataq && (datag == 3.64));
         let loading3 = true;
         hongkongj -= 3;
         while (!anytime6) {
            let tickI: Array<any> = [962, 792, 410];
            let castingv = true;
            let searchbar7 = 0.0;
            let singleQ = String.fromCharCode(100, 95, 55, 56, 95, 112, 114, 101, 115, 115, 0);
            let modityj = String.fromCharCode(101, 120, 112, 108, 111, 114, 101, 114, 95, 49, 95, 56, 48, 0);
            let foundG = 1.0;
            let internetV = 3.0;
            tickI = [((castingv ? 5 : 2) >> (Math.min(Math.abs(3), 5)))];
            foundG -= parseFloat(`${2 ^ parseInt(`${internetV}`)}`);
            internetV -= parseFloat(`${1}`);
            for (let z = 0; z < 2; z++) {
               castingv = modityj.length >= 9;
            }
            let libreact2: Map<any, any> = new Map([[String.fromCharCode(118, 95, 57, 52, 95, 117, 110, 112, 111, 105, 115, 111, 110, 0), String.fromCharCode(100, 99, 115, 116, 114, 95, 115, 95, 56, 50, 0)], [String.fromCharCode(117, 110, 102, 114, 101, 101, 122, 101, 95, 57, 95, 51, 52, 0), String.fromCharCode(105, 95, 57, 50, 95, 115, 109, 107, 97, 0)], [String.fromCharCode(102, 119, 97, 108, 115, 104, 95, 99, 95, 57, 50, 0), String.fromCharCode(114, 101, 99, 116, 95, 52, 95, 53, 51, 0)]]);
            let z_countI = 4.0;
            singleQ = `${singleQ.length}`;
            libreact2 = new Map([[`${libreact2.size}`, parseInt(`${z_countI}`)]]);
            z_countI *= libreact2.size ^ 2;
            let iconG = String.fromCharCode(108, 101, 111, 0) == modityj;
            do {
               modityj += `${((castingv ? 4 : 3) % 1)}`;
               if (iconG) {
                  break;
               }
            } while ((modityj.length < 3 || castingv) && iconG);
            let unimplementedvieww: Array<any> = [288, 819];
            let baseg: Array<any> = [373, 282, 985];
            castingv = singleQ.includes(`${searchbar7}`);
            baseg.push(3);
            castingv = (modityj.length >> (Math.min(4, unimplementedvieww.length))) < 55;
            singleQ += `${((castingv ? 5 : 5) ^ unimplementedvieww.length)}`;
            if (3 > (tickI.length & 3)) {
               singleQ = `${unimplementedvieww.length}`;
            }
            if (!modityj.startsWith(`${castingv}`)) {
               modityj = `${(String.fromCharCode(99, 0) == modityj ? baseg.length : modityj.length)}`;
            }
            if ((modityj.length | baseg.length) <= 4 || 4 <= (modityj.length | 4)) {
               let ball4 = true;
               let carouselB = 2.0;
               modityj = `${modityj.length + 1}`;
               ball4 = carouselB >= 80.25 && ball4;
               carouselB /= Math.max(4, ((ball4 ? 1 : 3) & parseInt(`${carouselB}`)));
            }
            for (let g = 0; g < 3; g++) {
               let libavformatb: Map<any, any> = new Map([[String.fromCharCode(100, 115, 109, 111, 116, 105, 111, 110, 95, 106, 95, 52, 51, 0), 441], [String.fromCharCode(109, 98, 99, 110, 116, 95, 103, 95, 52, 0), 453]]);
               let downL = String.fromCharCode(105, 110, 112, 117, 116, 95, 97, 95, 53, 53, 0);
               let fill9 = String.fromCharCode(106, 95, 55, 49, 95, 114, 101, 115, 117, 109, 101, 0);
               singleQ = "3";
               libavformatb.set(`${fill9}`, fill9.length >> (Math.min(Math.abs(2), 2)));
               downL += `${downL.length ^ libavformatb.size}`;
            }
            baseg.push(((castingv ? 3 : 2)));
            for (let o = 0; o < 3; o++) {
               singleQ += `${((castingv ? 4 : 2) & 3)}`;
            }
            anytime6 = (modityj.length + result5.size) > 65;
            break;
         }
         middleG = 61.40 >= notificationv;

         setIsScrolling(false);
      }, []);

      useEffect(() => {
         if (yys_RelatedTooltips.isLogin(userState.user)) return;

         if (swipeCount.current < MINI_SHOW_LOGIN_NUMBER && !adultMode) {
            swipeCount.current++;
         } else {



         }
      }, [current, adultMode, isFocusLogin.current]);

      return (
         <>
            <View style={{ flex: 1 }} onLayout={onLayoutRender}>
               {isInitFetching ? (
                  <View style={styles.loadingContainer}>
                     <FastImage
                        source={homeLoadingGif}
                        style={styles.homeLoadingImage}
                        resizeMode={'contain'}
                        useFastImage={true}
                     />
                  </View>
               ) : (
                  <FlatList
                     ref={miniVodListRef}
                     data={collectionPartialVideos}
                     initialNumToRender={5}
                     maxToRenderPerBatch={3}
                     windowSize={3}
                     refreshControl={refreshComponent()}
                     renderItem={renderItem}
                     horizontal={false}

                     pagingEnabled={isRefreshing ? false : true}
                     scrollEnabled={isRefreshing ? false : true}
                     keyExtractor={(item: any, index: any) =>
                        item.mini_video_id.toString()
                     }
                     viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                     showsHorizontalScrollIndicator={false}
                     showsVerticalScrollIndicator={false}
                     onEndReached={hanldeOnEndReached}
                     onEndReachedThreshold={0.8}
                     ListFooterComponent={
                        isVip ?
                           <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                              {hasNextPage && (
                                 <FastImage
                                    style={{ height: 80, width: 80 }}
                                    source={loadingSpinnerGif}
                                    resizeMode={'contain'}
                                 />
                              )}
                           </View>
                           :
                           <></>
                     }
                     onScroll={handleOnScroll}
                     onScrollBeginDrag={handleOnScrollBeginDrag}
                     onMomentumScrollEnd={handleOnMomentumScrollEnd}
                     scrollsToTop={false}
                  />
               )}
            </View>
            { }

            <AdultVipPrivilegeOverlay
               showCondition={showAdultVIPOverlay}
               addPaddingTop={true}
               showDarkBackdrop={true}
               onClose={() => {

                  setShowAdultVIPOverlay(false);
               }}
            />
         </>
      );
   },
);

const styles = StyleSheet.create({
   loading: {
      flexDirection: 'row',
      justifyContent: 'center',
      flex: 1,
   },
   loadingContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
   },
   homeLoadingImage: {
      width: 150,
      height: 150,
      bottom: 50,
      zIndex: 1,
   },
});
