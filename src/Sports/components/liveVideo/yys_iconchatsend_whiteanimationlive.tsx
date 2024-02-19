import React, { useState, useEffect, useCallback, memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './yys_nbatrophy';
import { VideoLiveType } from '../../global/yys_profileinactive_alert';
import { yysFavoriteNetwork, yysLibfollyMember } from '../../types/yys_history_plash';
import VodPlayer, { yysLargeQuest } from '../../../components/videoPlayer/yys_colors';
import { lockAppOrientation } from '@redux';
import { yysIconclosewhiteBaiduads } from '@redux';
import { yysDownloadingCombined } from '@redux';
import { useAppDispatch, useAppSelector } from '@hooks';
import WebView from 'react-native-webview';
import { BackArrowSvg, } from "@static";
import { useIsFocused, useTheme } from '@react-navigation/native';
import yys_giftbutton_footballtrophy from '../../../../Umeng/yys_giftbutton_footballtrophy';
import CountdownIndicator from '../../../components/button/yys_latn';

interface yysIconarrowrightorangeStation {
    videoRef?: React.MutableRefObject<yysLargeQuest | null>,
    matchID?: number,
    streamID?: number,
    liveDataState?: yysFavoriteNetwork,
    onLiveEnd?: any,
    onLoad?: any,
    videoSource?: {
        type: number,
        url: any
    },
    setVideoSource?: any,
    onGoBack: () => void,
    showCountdown: boolean,
    countdownTime?: number,
    onVipCountdownClick: () => void,
}

const LiveVideo = ({ videoRef, matchID, liveDataState, onLiveEnd, onLoad, streamID, videoSource, setVideoSource, onGoBack, showCountdown = false, countdownTime = 0, onVipCountdownClick, }: yysIconarrowrightorangeStation) => {
    const { colors } = useTheme();

    const homeName = liveDataState?.home?.name;
    const awayName = liveDataState?.away?.name;
    const combinedName = `${homeName} vs ${awayName}`;

    const dispatch = useAppDispatch();

    const [isReadyPlay, setReadyPlay] = useState(false);
    const settingsReducer: yysDownloadingCombined = useAppSelector(
        ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
    );

    
    
    
    
    
    // } = useSelector(s => s.videoPlayerControl);

    
    const [streamData, setStreamData] = useState<yysLibfollyMember | undefined>();
    const streamsData = liveDataState?.streams;
    const streamRoomID = streamData?.id;
    

    const onHandleBack = () => {
       let videocommonL = String.fromCharCode(117,112,108,111,97,100,101,100,95,109,95,54,54,0);
    let subtextH = String.fromCharCode(104,119,100,111,119,110,108,111,97,100,95,51,95,54,0);
    let moviesE = String.fromCharCode(106,95,56,54,95,102,114,101,101,116,121,112,101,0);
    let orientationE = 2;
    let iconwatchnowh = 3.0;
    let greenz = String.fromCharCode(112,114,111,102,105,108,101,115,95,98,95,50,54,0);
    let emojihearta = String.fromCharCode(120,95,52,49,95,111,110,101,111,102,115,0);
    let acceptedD = String.fromCharCode(112,114,111,116,101,99,116,101,100,95,50,95,51,50,0);
    let matchinactiver = 4;
   while (videocommonL != acceptedD) {
       let style0 = false;
       let iconpipshrinkk = 4.0;
          let libsentryC = String.fromCharCode(109,111,122,106,112,101,103,95,53,95,52,54,0);
         style0 = (iconpipshrinkk / (Math.max(5, libsentryC.length))) < 35.57;
         style0 = 79.47 == iconpipshrinkk;
      let storep = iconpipshrinkk >= 6413317.0;
      do {
         iconpipshrinkk += 1 ^ parseInt(`${iconpipshrinkk}`);
         if (storep) {
            break;
         }
      } while (storep && (iconpipshrinkk > 5.78));
       let trophyv = String.fromCharCode(119,95,52,53,95,97,108,112,105,110,101,0);
          let chatroombackgroundq = 2;
          let screenQ = String.fromCharCode(101,120,101,99,117,116,111,114,95,108,95,51,55,0);
          let giftbuttonr: Array<any> = [606, 529, 793];
         iconpipshrinkk += ((style0 ? 5 : 4));
         chatroombackgroundq += screenQ.length % (Math.max(1, 6));
         screenQ += "1";
         giftbuttonr.push(screenQ.length >> (Math.min(3, Math.abs(chatroombackgroundq))));
         iconpipshrinkk -= parseInt(`${iconpipshrinkk}`) - 1;
      acceptedD = `${(orientationE / (Math.max(3, (style0 ? 1 : 2))))}`;
      break;
   }
   let update_0c8 = videocommonL == String.fromCharCode(121,49,57,52,97,112,0);
   do {
      videocommonL = `${subtextH.length | moviesE.length}`;
      if (update_0c8) {
         break;
      }
   } while ((!videocommonL.endsWith(subtextH)) && update_0c8);
   if (videocommonL.endsWith(`${iconwatchnowh}`)) {
      videocommonL += "3";
   }
   let fullscreenmaxt = iconwatchnowh >= 7878845.0;
   do {
      iconwatchnowh *= parseFloat(`${2}`);
      if (fullscreenmaxt) {
         break;
      }
   } while (fullscreenmaxt && (2 == (5 >> (Math.min(3, greenz.length))) || 1.56 == (iconwatchnowh - 5.29)));
   let sharel = emojihearta == String.fromCharCode(104,120,119,120,55,110,51,50,0);
   do {
      emojihearta = `${(greenz == String.fromCharCode(71,0) ? greenz.length : parseInt(`${iconwatchnowh}`))}`;
      if (sharel) {
         break;
      }
   } while (sharel && (3 >= (orientationE >> (Math.min(emojihearta.length, 1))) && (orientationE >> (Math.min(Math.abs(3), 2))) >= 3));
   while (videocommonL.startsWith(moviesE)) {
      videocommonL += `${parseInt(`${iconwatchnowh}`) * 2}`;
      break;
   }
   while (subtextH != String.fromCharCode(104,0)) {
      moviesE = `${(String.fromCharCode(114,0) == videocommonL ? videocommonL.length : moviesE.length)}`;
      break;
   }

        if (settingsReducer.appOrientation === 'PORTRAIT' || settingsReducer.appOrientation === 'PORTRAIT-UPSIDEDOWN') {

      moviesE += `${(moviesE == String.fromCharCode(85,0) ? orientationE : moviesE.length)}`;
   for (let e = 0; e < 1; e++) {
      moviesE = `${subtextH.length}`;
   }
      subtextH = `${moviesE.length - parseInt(`${iconwatchnowh}`)}`;
   while (greenz.startsWith(`${acceptedD.length}`)) {
      acceptedD += `${1 + moviesE.length}`;
      break;
   }
      emojihearta = `${(String.fromCharCode(70,0) == acceptedD ? acceptedD.length : greenz.length)}`;
       let iconarrowrightblackW = false;
       let reactnativejs1: Map<any, any> = new Map([[String.fromCharCode(97,109,112,108,105,102,121,95,98,95,50,57,0),827], [String.fromCharCode(115,95,54,49,95,117,114,108,100,101,99,111,100,101,0),421]]);
      if (!iconarrowrightblackW && (2 - reactnativejs1.size) > 5) {
         iconarrowrightblackW = (67 == ((!iconarrowrightblackW ? reactnativejs1.size : 33) >> (Math.min(Math.abs(reactnativejs1.size), 2))));
      }
          let subinh = String.fromCharCode(108,111,111,112,98,97,99,107,95,104,95,52,51,0);
          let textlayoutmanager6 = String.fromCharCode(103,95,57,53,95,105,100,99,116,0);
          let cast8: Map<any, any> = new Map([[String.fromCharCode(113,95,51,55,95,115,117,103,103,101,115,116,105,111,110,115,0),787], [String.fromCharCode(111,95,55,54,95,116,119,111,119,97,121,0),620]]);
         reactnativejs1 = new Map([[`${cast8.size}`, subinh.length]]);
         subinh = `${textlayoutmanager6.length / (Math.max(3, 3))}`;
         textlayoutmanager6 += `${textlayoutmanager6.length / 2}`;
         iconarrowrightblackW = reactnativejs1.get(`${iconarrowrightblackW}`) == null;
         reactnativejs1.set(`${iconarrowrightblackW}`, ((iconarrowrightblackW ? 2 : 5) * reactnativejs1.size));
         iconarrowrightblackW = reactnativejs1.size >= 98 && !iconarrowrightblackW;
         iconarrowrightblackW = null == reactnativejs1.get(`${iconarrowrightblackW}`);
      subtextH += `${1 % (Math.max(4, orientationE))}`;
   for (let n = 0; n < 2; n++) {
      acceptedD = `${moviesE.length | 3}`;
   }
            setTimeout(() => setVideoSource(VideoLiveType.DETAIL, ''), 100)
        } else {

      greenz = `${1 * parseInt(`${iconwatchnowh}`)}`;
       let emptyb = 2.0;
      for (let r = 0; r < 2; r++) {
         emptyb *= parseInt(`${emptyb}`);
      }
      for (let m = 0; m < 3; m++) {
         emptyb -= parseInt(`${emptyb}`) >> (Math.min(4, Math.abs(1)));
      }
       let match_ = 4;
      emojihearta = `${videocommonL.length | emojihearta.length}`;
      subtextH = `${videocommonL.length}`;
      emojihearta += `${(String.fromCharCode(89,0) == moviesE ? moviesE.length : subtextH.length)}`;
   for (let i = 0; i < 1; i++) {
      subtextH += `${matchinactiver}`;
   }
      videocommonL = `${moviesE.length}`;
      acceptedD += "1";
            onGoBack();
        }
    };

    useEffect(() => {
        if (streamsData) {
            const streamsDataArrayData = streamsData?.map(index => {
                
                if (index?.streamer_id == streamID) {
                    setStreamData(index);
                }

                return () => {
                    streamsDataArrayData;
                };
            });
        }
    }, [streamsData]);


    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    

    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    

    const lockOrientation = (orientation: string) => {
        dispatch(lockAppOrientation(orientation));
    };

    
    const onReadyForDisplay = useCallback(() => {
       let shrunkA = String.fromCharCode(98,95,52,55,95,106,97,99,111,98,105,97,110,0);
    let moduleI: Array<any> = [163, 971, 917];
    let leaguex = String.fromCharCode(99,104,117,110,107,101,100,95,54,95,56,50,0);
    let suggestiony = String.fromCharCode(112,95,52,48,95,102,116,114,117,110,99,97,116,101,0);
    let pluso = 5;
    let iconshareC: Array<any> = [853, 33];
    let iconwechatF: Array<any> = [String.fromCharCode(122,108,105,98,95,50,95,51,57,0), String.fromCharCode(118,95,55,48,95,105,108,108,101,103,97,108,0)];
    let langkeyR: Map<any, any> = new Map([[String.fromCharCode(111,95,57,55,95,102,97,105,108,97,98,108,101,0),337], [String.fromCharCode(120,95,49,51,95,121,111,102,102,115,101,116,0),813]]);
   let updatesM = String.fromCharCode(52,103,108,107,100,107,0) == leaguex;
   do {
      leaguex += `${iconshareC.length * iconwechatF.length}`;
      if (updatesM) {
         break;
      }
   } while ((shrunkA == String.fromCharCode(117,0) || leaguex != String.fromCharCode(74,0)) && updatesM);
       let unimplementedviewd = 2.0;
       let qaagH = 0;
       let yellowv = String.fromCharCode(114,97,100,102,95,102,95,50,57,0);
      let modalS = yellowv.length >= 6078174;
      do {
         yellowv = "1";
         if (modalS) {
            break;
         }
      } while ((!yellowv.endsWith(`${qaagH}`)) && modalS);
      if ((5 << (Math.min(3, yellowv.length))) > 4 && (2.18 / (Math.max(1, unimplementedviewd))) > 1.75) {
         unimplementedviewd -= parseFloat(`${parseInt(`${unimplementedviewd}`) + qaagH}`);
      }
         qaagH %= Math.max(qaagH, 5);
      if (1.24 == unimplementedviewd) {
         unimplementedviewd -= parseFloat(`${yellowv.length}`);
      }
      for (let u = 0; u < 2; u++) {
          let promotione = 3.0;
         yellowv = `${yellowv.length}`;
         promotione /= Math.max(1, parseInt(`${promotione}`));
      }
       let searchbarA = 4;
       let subsN = 3;
         searchbarA >>= Math.min(2, Math.abs(3));
       let gradlek = 3.0;
       let cancelS = 2.0;
       let modeQ = String.fromCharCode(106,95,55,56,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,0);
      shrunkA = "1";
      iconwechatF.push(moduleI.length);
   while (2 == (langkeyR.size + 2) && 1 == (2 + langkeyR.size)) {
       let privilegeO = 1.0;
       let matchinactiveQ = String.fromCharCode(115,116,97,110,100,97,114,100,105,122,101,95,110,95,50,48,0);
       let mbnativel = 3.0;
      while (5.92 > (parseFloat(`${matchinactiveQ.length}`) + mbnativel) && (mbnativel + parseFloat(`${matchinactiveQ.length}`)) > 5.92) {
         matchinactiveQ += `${parseInt(`${mbnativel}`) ^ matchinactiveQ.length}`;
         break;
      }
       let mintegralK = 0.0;
       let libloggerg = 0;
          let animationsD = String.fromCharCode(108,105,98,112,104,111,110,101,110,117,109,98,101,114,95,97,95,55,56,0);
         mbnativel /= Math.max(1, parseFloat(`${1}`));
         animationsD += `${animationsD.length}`;
         mintegralK /= Math.max(parseFloat(`${parseInt(`${mbnativel}`)}`), 3);
      while (matchinactiveQ.includes(`${mintegralK}`)) {
         matchinactiveQ = `${parseInt(`${mbnativel}`)}`;
         break;
      }
      for (let c = 0; c < 3; c++) {
         matchinactiveQ = `${parseInt(`${mbnativel}`)}`;
      }
      if (mintegralK < libloggerg) {
          let hooksc = false;
          let flipperJ = 1.0;
          let iconbelly = true;
         mintegralK *= parseFloat(`${libloggerg}`);
         hooksc = !iconbelly;
         flipperJ /= Math.max((parseFloat(`${(iconbelly ? 5 : 3) - parseInt(`${flipperJ}`)}`)), 2);
      }
         libloggerg <<= Math.min(Math.abs((matchinactiveQ == String.fromCharCode(88,0) ? parseInt(`${privilegeO}`) : matchinactiveQ.length)), 2);
      langkeyR.set(leaguex, pluso - leaguex.length);
      break;
   }
      pluso |= (String.fromCharCode(104,0) == leaguex ? langkeyR.size : leaguex.length);
      suggestiony = "1";
      iconwechatF.push(1 << (Math.min(5, Math.abs(langkeyR.size))));

        if (!isReadyPlay && videoSource !== undefined) {

   while (3 > (iconwechatF.length / (Math.max(5, 2)))) {
      iconshareC.push(iconshareC.length ^ shrunkA.length);
      break;
   }
      shrunkA += `${2 ^ moduleI.length}`;
       let smallY = 5.0;
       let bgvipxvody = String.fromCharCode(100,118,100,97,116,97,95,53,95,56,50,0);
       let watchnowbgN: Array<any> = [265, 681];
      while (watchnowbgN.length == 2) {
          let matchdetailbgU: Map<any, any> = new Map([[String.fromCharCode(114,101,109,97,112,95,117,95,54,50,0),99], [String.fromCharCode(105,119,104,116,120,95,54,95,57,54,0),250]]);
         smallY += parseFloat(`${matchdetailbgU.size >> (Math.min(bgvipxvody.length, 5))}`);
         break;
      }
      let file0 = 7913980 >= watchnowbgN.length;
      do {
         watchnowbgN = [bgvipxvody.length + parseInt(`${smallY}`)];
         if (file0) {
            break;
         }
      } while (file0 && (4 > (parseInt(`${smallY}`) / (Math.max(8, watchnowbgN.length))) && (parseFloat(`${watchnowbgN.length}`) / (Math.max(2, smallY))) > 1.36));
       let match8: Array<any> = [7, 249, 316];
       let splashf: Array<any> = [617, 821];
         splashf = [watchnowbgN.length];
      for (let g = 0; g < 3; g++) {
         bgvipxvody += `${(String.fromCharCode(112,0) == bgvipxvody ? match8.length : bgvipxvody.length)}`;
      }
         bgvipxvody = `${bgvipxvody.length}`;
      let iconclosewhited = 9171400.0 >= smallY;
      do {
         smallY -= parseFloat(`${2}`);
         if (iconclosewhited) {
            break;
         }
      } while (iconclosewhited && (2 >= (4 | bgvipxvody.length) || (parseInt(`${smallY}`) + 4) >= 2));
      let middlesound_ = 5887527 >= watchnowbgN.length;
      do {
         watchnowbgN.push(splashf.length | 1);
         if (middlesound_) {
            break;
         }
      } while ((match8.length < 5) && middlesound_);
         bgvipxvody += `${parseInt(`${smallY}`) | 1}`;
      moduleI.push(1 / (Math.max(3, iconwechatF.length)));
       let active4 = 0.0;
       let shrunkr = 4.0;
      let imageactionlivep = active4 >= 6956401.0;
      do {
         active4 += parseInt(`${shrunkr}`) * 1;
         if (imageactionlivep) {
            break;
         }
      } while (imageactionlivep && (1.6 < (2.44 - active4) || 2.7 < (active4 - 2.44)));
         active4 -= parseInt(`${shrunkr}`) ^ parseInt(`${active4}`);
      while (active4 > 2.28) {
         active4 /= Math.max(parseInt(`${shrunkr}`) / (Math.max(parseInt(`${active4}`), 4)), 4);
         break;
      }
          let whitetick5 = String.fromCharCode(120,95,53,54,95,115,117,98,99,111,110,116,101,110,116,115,0);
          let activeO = String.fromCharCode(97,103,103,114,101,103,97,116,101,100,95,107,95,55,49,0);
         shrunkr -= 1;
         whitetick5 += `${whitetick5.length >> (Math.min(activeO.length, 3))}`;
         activeO = "1";
          let listl: Array<any> = [743, 47];
          let issubG = 5.0;
          let defaultfootballbg1 = 3.0;
         shrunkr -= parseInt(`${active4}`);
         listl = [parseInt(`${issubG}`) & 2];
         issubG -= parseFloat(`${parseInt(`${issubG}`)}`);
         defaultfootballbg1 -= parseInt(`${defaultfootballbg1}`);
      for (let f = 0; f < 2; f++) {
         shrunkr /= Math.max(parseInt(`${shrunkr}`) >> (Math.min(4, Math.abs(parseInt(`${active4}`)))), 3);
      }
      pluso >>= Math.min(Math.abs(1), 3);
   for (let v = 0; v < 1; v++) {
      moduleI.push(suggestiony.length + shrunkA.length);
   }
       let profileA = 2.0;
       let floaterB = 4.0;
      if (3.60 < (4.41 * floaterB) && (4.41 * floaterB) < 3.48) {
          let mergerm = 0.0;
          let iconeditt = 3.0;
          let combinedN = String.fromCharCode(107,95,57,49,95,99,111,118,101,114,0);
          let iconcurrentmatchM = String.fromCharCode(111,112,116,105,109,105,115,116,105,99,95,108,95,57,50,0);
          let disconnectedlogo8 = 2;
         profileA -= parseInt(`${iconeditt}`) >> (Math.min(5, Math.abs(3)));
         mergerm += (parseFloat(`${String.fromCharCode(116,0) == iconcurrentmatchM ? iconcurrentmatchM.length : disconnectedlogo8}`));
         iconeditt /= Math.max(2, disconnectedlogo8 | 3);
         combinedN = `${parseInt(`${mergerm}`)}`;
      }
      while ((profileA * floaterB) >= 3.69 && 3.69 >= (floaterB * profileA)) {
         profileA /= Math.max(2, parseInt(`${floaterB}`) - parseInt(`${profileA}`));
         break;
      }
      suggestiony = `${2 + parseInt(`${profileA}`)}`;
      suggestiony += `${iconshareC.length}`;
            setReadyPlay(true);
            yys_giftbutton_footballtrophy.sportDetailsPlaysTimesAnalytics(videoSource.type === VideoLiveType.LIVE ? 'live' : 'animation');
        }
    }, [isReadyPlay, videoSource]);
    

    const isFocus = useIsFocused()

    return (
        <View style={styles.container}>
            {/* <View style={{height: isFullScreen ? '100%' : 'auto'}}> */}
            {/* <View style={styles.videoDiv}> */}
            {(videoSource !== undefined || streamData?.src) && (
                <>
                    {
                        videoSource?.url !== undefined && (
                            videoSource.type === VideoLiveType.LIVE
                                ? <>
                                    {isFocus &&
                                        <VodPlayer
                                            ref={videoRef}
                                            onBack={onHandleBack}
                                            vod_source={videoSource.url}
                                            videoType='live'
                                            vodTitle={combinedName}
                                            appOrientation={settingsReducer.appOrientation}
                                            devicesOrientation={settingsReducer.devicesOrientation}
                                            lockOrientation={lockOrientation}
                                            onReadyForDisplay={onReadyForDisplay}
                                        />
                                    }
                                    {showCountdown &&
                                        <CountdownIndicator
                                            timer={countdownTime}
                                            onClickVip={() => {
                                                onVipCountdownClick()
                                            }}
                                            vipButtonText="开通VIP畅享无限内容"
                                            containerStyle={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0
                                            }}
                                        />
                                    }
                                </>
                                : <View
                                    style={{
                                        width: '100%',
                                        aspectRatio: 16 / 9,
                                    }}
                                >
                                    <WebView
                                        resizeMode="contain"
                                        source={{ uri: videoSource.url }}
                                    />
                                    <TouchableOpacity
                                        onPress={onHandleBack}
                                        style={{ position: 'absolute', padding: 20 }}
                                    >
                                        <BackArrowSvg
                                            style={{
                                                color: colors.text,
                                            }}
                                        ></BackArrowSvg>
                                    </TouchableOpacity>
                                </View>
                        )

                    }
                </>
            )}
            {/* </View> */}
        </View>
    );
};

export default memo(LiveVideo);
