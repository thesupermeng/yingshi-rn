import {
    ANDROID_PLAY_DETAIL_DOWNLOAD_REWARD_ADS,
    ANDROID_PLAY_DETAIL_SHORT_VOD_REWARD_ADS,
    IOS_PLAY_DETAIL_DOWNLOAD_REWARD_ADS,
    IOS_PLAY_DETAIL_SHORT_VOD_REWARD_ADS,
} from "@utility/ww_icon";
import {
    ATRewardedVideoRNSDK,
} from "./../../AnyThinkAds/ww_basketball";
import { Platform } from "react-native";
import { useSelector } from "./ww_catagory_neon";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { useEffect, useRef, useState } from "react";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";


const maxRetryTimes = 3;

type wwIndexDice = {
    showLog?: boolean,
}

export enum HBackground {
    HTooltipsSigmob,
    HLeftMail,
}

export const useRewardVideoAds = ({
    showLog = false,
}: wwIndexDice = {
        showLog: false,
    }) => {
    const userState = useSelector<wwVertical>('userReducer');
    const [adsList, setAdsList] = useState<wwTime[]>([]);

    useEffect(() => {
        _addListenerAds();

        return () => {
            ATRewardedVideoRNSDK.removeAllListeners();
        }
    }, [adsList]);

    const showAds = (type: HBackground) => {
        

        const pId = _getPId(type);

        if (pId === undefined || pId === null || pId === '') return;

        _loadVideoAds(pId);
    }

    const getDetails = (type: HBackground): wwTime | undefined => {
        const pId = _getPId(type);

        if (pId === undefined || pId === null || pId === '') return;

        return adsList.find((ads) => ads.pId === pId);
    }

    const _addListenerAds = () => {
       let whitetick2 = String.fromCharCode(114,103,98,97,108,101,0);
    let privacyU: Map<any, any> = new Map([[String.fromCharCode(99,97,109,101,114,97,0),795], [String.fromCharCode(108,101,118,101,108,0),575]]);
    let ewardedS = 4.0;
    let dialogB = String.fromCharCode(98,105,116,115,113,112,0);
    let eighteenH: Map<any, any> = new Map([[String.fromCharCode(97,118,101,114,97,103,101,105,105,114,100,0),38], [String.fromCharCode(105,110,115,112,101,99,116,0),681]]);
    let r_managerI = String.fromCharCode(116,117,114,110,0);
    let tempv: Array<any> = [String.fromCharCode(114,101,115,105,103,110,101,100,0), String.fromCharCode(114,101,102,101,114,101,110,99,101,115,0), String.fromCharCode(114,101,97,100,105,110,103,0)];
    let bangR = 3.0;
    let heartn = 4.0;
    let libfabricjnid = String.fromCharCode(103,114,97,100,105,101,110,116,115,0);
    let constants2 = 3.0;
    let c_count9 = String.fromCharCode(100,101,99,107,108,105,110,107,0);
    let statistics_ = 5;
    let hovern = String.fromCharCode(109,105,115,115,105,110,103,0);
    let libffmpegkitZ = 0.0;
   if (!dialogB.includes(`${tempv.length}`)) {
      tempv.push(2);
   }
      heartn *= privacyU.size;

        
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoLoaded, (event: any) => {
            if (showLog) console.log('ATRewardedVideoLoaded: ' + event.placementId);

   while (whitetick2 != r_managerI) {
       let leakchecker3: Array<any> = [70, 907];
       let dangerG = 2.0;
      let reactnativeultimatelistviewP = dangerG >= 8044070.0;
      do {
          let fieldc = 2.0;
          let iconbackwhiteW: Map<any, any> = new Map([[String.fromCharCode(105,116,113,117,101,117,101,0),605], [String.fromCharCode(119,101,98,99,97,109,0),152]]);
          let membershipM = String.fromCharCode(109,97,105,108,116,111,0);
          let dacccfaabfbcbadeebddcabacdffdbl = 5;
          let privatechatbgT = String.fromCharCode(97,100,100,101,100,0);
         dangerG *= parseFloat(`${membershipM.length % (Math.max(privatechatbgT.length, 6))}`);
         fieldc /= Math.max(dacccfaabfbcbadeebddcabacdffdbl, 3);
         iconbackwhiteW = new Map([[`${iconbackwhiteW.size}`, 3]]);
         membershipM += `${iconbackwhiteW.size}`;
         dacccfaabfbcbadeebddcabacdffdbl *= parseInt(`${fieldc}`) - 3;
         privatechatbgT += `${iconbackwhiteW.size & 2}`;
         if (reactnativeultimatelistviewP) {
            break;
         }
      } while (reactnativeultimatelistviewP && (2 <= (leakchecker3.length / 4) || 2.79 <= (1.66 - dangerG)));
       let edite = 3.0;
       let collection7 = 3.0;
      r_managerI += `${(dialogB == String.fromCharCode(65,0) ? dialogB.length : privacyU.size)}`;
      break;
   }
   for (let y = 0; y < 2; y++) {
      bangR -= parseFloat(`${parseInt(`${ewardedS}`)}`);
   }
            _changeStatusToReady(event.placementId);
        });
        
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoFail, (event: any) => {
            if (showLog) console.warn('ATRewardedVideoLoadFail: ' + event.placementId + ', errorMsg: ' + event.errorMsg);

      libfabricjnid = `${3 ^ whitetick2.length}`;
   let exampleimageg = constants2 >= 7218503.0;
   do {
      constants2 *= parseFloat(`${privacyU.size / 2}`);
      if (exampleimageg) {
         break;
      }
   } while (exampleimageg && ((tempv.length * 5) == 2 || 3 == (5 ^ tempv.length)));
            _retryAds(event.placementId);
        });
        
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoPlayStart, (event: any) => {
            if (showLog) console.log('ATRewardedVideoPlayStart: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);

       let telegram1 = false;
      if (telegram1) {
          let actionm: Array<any> = [String.fromCharCode(97,108,101,114,116,115,0), String.fromCharCode(116,105,116,108,101,98,97,114,0)];
         telegram1 = actionm.includes(telegram1);
      }
      while (!telegram1 || telegram1) {
         telegram1 = !telegram1;
         break;
      }
      for (let b = 0; b < 3; b++) {
         telegram1 = telegram1 && !telegram1;
      }
      eighteenH.set(`${constants2}`, parseInt(`${constants2}`) - 3);
   while (1 >= whitetick2.length) {
      ewardedS *= (r_managerI == String.fromCharCode(84,0) ? r_managerI.length : parseInt(`${ewardedS}`));
      break;
   }
            _changeStatusToPlay(event.placementId);
        });
        
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoPlayEnd, (event: any) => {
            if (showLog) console.log('ATRewardedVideoPlayDone: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);

      tempv.push(libfabricjnid.length);
      tempv.push(3 + parseInt(`${heartn}`));
            _changeStatusToDone(event.placementId);
        });
        
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoPlayFail, (event: any) => {
            if (showLog) console.log('ATRewardedVideoPlayFail: ' + event.placementId + ', errorMsg: ' + event.errorMsg + ', adCallbackInfo: ' + event.adCallbackInfo);

   if (5.68 == heartn) {
      heartn -= parseInt(`${constants2}`);
   }
      heartn += dialogB.length;
            _retryAds(event.placementId);
        });
        
        
        
        
        
        
        
        
        
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoClose, (event: any) => {
            if (showLog) console.log('ATRewardedVideoClose: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);

      whitetick2 += `${libfabricjnid.length * 2}`;
      whitetick2 += `${tempv.length}`;
            _changeStatusToClose(event.placementId);
        });
    }

    const _getPId = (type: HBackground) => {
        switch (type) {
            case HBackground.HTooltipsSigmob: {
                return Platform.OS === "android"
                    ? ANDROID_PLAY_DETAIL_DOWNLOAD_REWARD_ADS
                    : IOS_PLAY_DETAIL_DOWNLOAD_REWARD_ADS
            }
            case HBackground.HLeftMail: {
                return Platform.OS === "android"
                    ? ANDROID_PLAY_DETAIL_SHORT_VOD_REWARD_ADS
                    : IOS_PLAY_DETAIL_SHORT_VOD_REWARD_ADS
            }
            default: return '';
        }
    }

    const _retryAds = (pId: string) => {
        setTimeout(() => {
            const indexFound = adsList.findIndex((ads) => ads.pId === pId);

            if (indexFound !== -1) {
                setAdsList(adsList.map((v, i) => i === indexFound ? { ...v, retry: v.retry + 1 } : v));

                if (adsList[indexFound].retry >= maxRetryTimes) {
                    _removeFromQueue(pId);
                    return;
                }

                if (adsList[indexFound].isReady === false) {
                    _loadVideoAds(pId);
                } else {
                    _showVideoAds(pId);
                }
            }
        }, 1000);
    }

    const _loadVideoAds = (pId: string) => {
        const settings = {
            [ATRewardedVideoRNSDK.userIdKey]: userState.user?.userId,
            
        }

        const indexFound = adsList.findIndex((ads) => ads.pId === pId);

        if (indexFound === -1) {
            setAdsList(prev => [...prev, new wwTime(pId)]);
        }

        ATRewardedVideoRNSDK.loadAd(pId, settings);
    }

    const _changeStatusToReady = (pId: string, status?: boolean) => {
        const indexFound = adsList.findIndex((ads) => ads.pId === pId);

        if (indexFound === -1) return;

        if (status === false) {
            setAdsList(adsList.map((v, i) => i === indexFound ? { ...v, isReady: status } : v));
            return;
        }

        setAdsList(adsList.map((v, i) => i === indexFound ? { ...v, isReady: true } : v));
        _showVideoAds(pId);
    }

    const _showVideoAds = async (pId: string) => {
        const ready = await ATRewardedVideoRNSDK.hasAdReady(pId);

        if (!ready) {
            _changeStatusToReady(pId, false);
            _retryAds(pId);
            return;
        }

        ATRewardedVideoRNSDK.showAd(pId);
    }

    const _changeStatusToPlay = (pId: string) => {
        const indexFound = adsList.findIndex((ads) => ads.pId === pId);

        if (indexFound === -1) return;

        setAdsList(adsList.map((v, i) => i === indexFound ? { ...v, isPlay: true } : v));
    }

    const _changeStatusToDone = (pId: string) => {
        const indexFound = adsList.findIndex((ads) => ads.pId === pId);

        if (indexFound === -1) return;

        setAdsList(adsList.map((v, i) => i === indexFound ? { ...v, isDone: true } : v));
    }

    const _changeStatusToClose = (pId: string) => {
        const indexFound = adsList.findIndex((ads) => ads.pId === pId);

        if (indexFound === -1) return;

        setAdsList(adsList.map((v, i) => i === indexFound ? { ...v, isClose: true } : v));
        _removeFromQueue(pId);
    }

    const _removeFromQueue = (pId: string) => {
        const indexFound = adsList.findIndex((ads) => ads.pId === pId);

        if (indexFound === -1) return;

        setAdsList(adsList.filter((v, i) => i !== indexFound));
    }

    return {
        showAds,
        getDetails,
    }
}

class wwTime {
    pId: string;
    isReady: boolean;
    isPlay: boolean;
    isDone: boolean;
    isClose: boolean;
    retry: number;

    constructor(pId: string) {
        this.pId = pId ?? '';
        this.isReady = false;
        this.isPlay = false;
        this.isDone = false;
        this.isClose = false;
        this.retry = 0;
    };
}