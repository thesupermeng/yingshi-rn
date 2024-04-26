import {
    ANDROID_PLAY_DETAIL_DOWNLOAD_REWARD_ADS,
    ANDROID_PLAY_DETAIL_SHORT_VOD_REWARD_ADS,
    IOS_PLAY_DETAIL_DOWNLOAD_REWARD_ADS,
    IOS_PLAY_DETAIL_SHORT_VOD_REWARD_ADS,
} from "@utility/wawa_iconpointscore";
import {
    ATRewardedVideoRNSDK,
} from "./../../AnyThinkAds/wawa_tick";
import { Platform } from "react-native";
import { useSelector } from "./wawa_root";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { useEffect, useRef, useState } from "react";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";


const maxRetryTimes = 3;

type wawaAwayShow = {
    showLog?: boolean,
}

export enum UGreytickLoading {
    UIconclosewhiteLock,
    UShowless,
}

export const useRewardVideoAds = ({
    showLog = false,
}: wawaAwayShow = {
        showLog: false,
    }) => {
    const userState = useSelector<wawaPhoneControls>('userReducer');
    const [adsList, setAdsList] = useState<wawaWhitebell[]>([]);

    useEffect(() => {
        _addListenerAds();

        return () => {
            ATRewardedVideoRNSDK.removeAllListeners();
        }
    }, [adsList]);

    const showAds = (type: UGreytickLoading) => {
        

        const pId = _getPId(type);

        if (pId === undefined || pId === null || pId === '') return;

        _loadVideoAds(pId);
    }

    const getDetails = (type: UGreytickLoading): wawaWhitebell | undefined => {
        const pId = _getPId(type);

        if (pId === undefined || pId === null || pId === '') return;

        return adsList.find((ads) => ads.pId === pId);
    }

    const _addListenerAds = () => {
       let libswresampleL = String.fromCharCode(102,101,116,99,104,101,115,0);
    let subtextg = String.fromCharCode(101,120,112,114,0);
    let custom2 = 3.0;
    let downloadY = 5.0;
    let predictionactivey = 1.0;
    let fullscreenmaxc = 5.0;
    let basketballhometeamB = true;
    let hongkongT = String.fromCharCode(100,105,115,112,111,115,97,98,108,101,0);
    let ksadf = String.fromCharCode(116,104,101,110,0);
    let largeW = 0.0;
    let changeC = false;
    let tempr = true;
    let awayteamfield6 = String.fromCharCode(103,112,116,111,112,116,115,0);
   if ((ksadf.length % 5) <= 1 || 4.58 <= (4.46 - fullscreenmaxc)) {
      fullscreenmaxc += 3 >> (Math.min(2, Math.abs(parseInt(`${custom2}`))));
   }
      subtextg += `${parseInt(`${custom2}`)}`;

        
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoLoaded, (event: any) => {
            if (showLog) console.log('ATRewardedVideoLoaded: ' + event.placementId);

   while (4.68 == downloadY) {
       let heartP = String.fromCharCode(104,95,54,51,0);
       let diceN = String.fromCharCode(117,116,120,111,115,0);
       let placementY: Map<any, any> = new Map([[String.fromCharCode(116,111,109,99,114,121,112,116,0),523], [String.fromCharCode(116,120,102,109,0),590]]);
       let sportsM = false;
       let kickz = 0;
      if (heartP.endsWith(`${placementY.size}`)) {
          let buffers = false;
          let flipper8: Map<any, any> = new Map([[String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,0),783], [String.fromCharCode(100,97,116,97,108,95,120,95,53,57,0),726]]);
          let playershirtR = 0;
          let themea = String.fromCharCode(105,110,118,0);
          let friendsJ: Array<any> = [987, 735, 239];
         placementY = new Map([[`${flipper8.size}`, flipper8.size & 1]]);
         buffers = (friendsJ.length >> (Math.min(1, Math.abs(playershirtR)))) > 16;
         playershirtR -= friendsJ.length | playershirtR;
         themea = `${(themea == String.fromCharCode(115,0) ? friendsJ.length : themea.length)}`;
      }
         placementY = new Map([[`${placementY.size}`, 1]]);
      let libruntimeexecutor9 = 7480896 >= kickz;
      do {
         kickz <<= Math.min(Math.abs((String.fromCharCode(72,0) == heartP ? diceN.length : heartP.length)), 5);
         if (libruntimeexecutor9) {
            break;
         }
      } while (((heartP.length / 3) <= 4 || (heartP.length / (Math.max(9, kickz))) <= 3) && libruntimeexecutor9);
         placementY.set(`${sportsM}`, 2);
         kickz -= ((sportsM ? 2 : 3) << (Math.min(Math.abs(3), 5)));
       let robotoU = 2.0;
       let imagenomoredatay = 3.0;
         diceN += `${2 - heartP.length}`;
         kickz ^= kickz % (Math.max(diceN.length, 1));
      let matchR = robotoU >= 5062427.0;
      do {
         robotoU += (diceN == String.fromCharCode(75,0) ? diceN.length : (sportsM ? 4 : 4));
         if (matchR) {
            break;
         }
      } while (matchR && (5 < (kickz * 4)));
          let runtimeschedulery = 1.0;
          let libfolly1: Map<any, any> = new Map([[String.fromCharCode(108,115,112,112,111,108,121,102,0),String.fromCharCode(102,111,112,101,110,0)], [String.fromCharCode(111,114,105,103,105,110,97,108,0),String.fromCharCode(122,108,105,98,0)], [String.fromCharCode(119,105,110,100,105,110,103,0),String.fromCharCode(109,109,99,111,0)]]);
         imagenomoredatay *= parseInt(`${runtimeschedulery}`);
         runtimeschedulery *= 2 & libfolly1.size;
         libfolly1.set(`${libfolly1.size}`, libfolly1.size >> (Math.min(Math.abs(libfolly1.size), 5)));
      while (5.67 <= robotoU) {
         robotoU -= 2;
         break;
      }
      let configureD = diceN == String.fromCharCode(49,99,105,101,108,108,102,107,108,99,0);
      do {
          let yellowtoredv: Array<any> = [String.fromCharCode(118,102,114,101,101,0), String.fromCharCode(100,105,102,102,97,98,108,101,0)];
         diceN += `${diceN.length - parseInt(`${robotoU}`)}`;
         yellowtoredv = [yellowtoredv.length];
         if (configureD) {
            break;
         }
      } while ((!sportsM) && configureD);
      while (robotoU >= heartP.length) {
          let xadsdkj = 5.0;
          let dragclosel = String.fromCharCode(115,117,102,102,105,120,0);
          let sinax = 5.0;
          let viewer7 = String.fromCharCode(112,111,115,108,105,115,116,115,0);
          let bdxadsdkz: Map<any, any> = new Map([[String.fromCharCode(101,118,105,99,101,0),437], [String.fromCharCode(99,117,114,114,101,110,100,95,105,95,55,50,0),447], [String.fromCharCode(115,117,98,108,97,121,111,117,116,115,0),46]]);
         robotoU /= Math.max(5, parseInt(`${xadsdkj}`) + viewer7.length);
         xadsdkj /= Math.max(5, 3 + dragclosel.length);
         dragclosel += `${bdxadsdkz.size}`;
         sinax /= Math.max(parseFloat(`${3}`), 4);
         viewer7 += `${dragclosel.length}`;
         bdxadsdkz.set(dragclosel, (dragclosel == String.fromCharCode(68,0) ? parseInt(`${sinax}`) : dragclosel.length));
         break;
      }
         robotoU *= parseInt(`${imagenomoredatay}`);
      for (let d = 0; d < 1; d++) {
          let componentregistryM = 3.0;
         placementY = new Map([[`${sportsM}`, ((sportsM ? 5 : 1))]]);
         componentregistryM -= parseInt(`${componentregistryM}`);
      }
      changeC = 97 >= diceN.length;
      break;
   }
      changeC = !changeC;
            _changeStatusToReady(event.placementId);
        });
        
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoFail, (event: any) => {
            if (showLog) console.warn('ATRewardedVideoLoadFail: ' + event.placementId + ', errorMsg: ' + event.errorMsg);

       let tumbnaili: Map<any, any> = new Map([[String.fromCharCode(116,111,110,95,102,95,55,49,0),899], [String.fromCharCode(115,101,113,95,112,95,49,48,0),899]]);
      while ((tumbnaili.size | tumbnaili.size) < 2) {
         tumbnaili = new Map([[`${tumbnaili.size}`, tumbnaili.size << (Math.min(Math.abs(1), 4))]]);
         break;
      }
      let mergerQ = tumbnaili.size <= 6513360;
      do {
         tumbnaili = new Map([[`${tumbnaili.size}`, tumbnaili.size >> (Math.min(Math.abs(tumbnaili.size), 3))]]);
         if (mergerQ) {
            break;
         }
      } while (mergerQ && (!Array.from(tumbnaili.keys()).includes(`${tumbnaili.size}`)));
      for (let k = 0; k < 2; k++) {
         tumbnaili = new Map([[`${tumbnaili.size}`, tumbnaili.size]]);
      }
      largeW += parseFloat(`${libswresampleL.length >> (Math.min(Math.abs(2), 5))}`);
      predictionactivey -= parseInt(`${largeW}`);
            _retryAds(event.placementId);
        });
        
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoPlayStart, (event: any) => {
            if (showLog) console.log('ATRewardedVideoPlayStart: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);

   let tumbnaile = 5717918.0 <= custom2;
   do {
      custom2 /= Math.max(parseFloat(`${subtextg.length / 3}`), 4);
      if (tumbnaile) {
         break;
      }
   } while ((changeC) && tumbnaile);
      libswresampleL = `${parseInt(`${largeW}`) * 1}`;
            _changeStatusToPlay(event.placementId);
        });
        
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoPlayEnd, (event: any) => {
            if (showLog) console.log('ATRewardedVideoPlayDone: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);

      predictionactivey /= Math.max(4, subtextg.length | 2);
      fullscreenmaxc += 3;
            _changeStatusToDone(event.placementId);
        });
        
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoPlayFail, (event: any) => {
            if (showLog) console.log('ATRewardedVideoPlayFail: ' + event.placementId + ', errorMsg: ' + event.errorMsg + ', adCallbackInfo: ' + event.adCallbackInfo);

   while (!hongkongT.startsWith(`${basketballhometeamB}`)) {
      hongkongT += `${parseInt(`${fullscreenmaxc}`) * 1}`;
      break;
   }
   while (5 > libswresampleL.length) {
      libswresampleL = `${((changeC ? 5 : 5) % (Math.max(9, parseInt(`${predictionactivey}`))))}`;
      break;
   }
            _retryAds(event.placementId);
        });
        
        
        
        
        
        
        
        
        
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoClose, (event: any) => {
            if (showLog) console.log('ATRewardedVideoClose: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);

   if (basketballhometeamB) {
       let configp = false;
       let leaguedetailsbgH = String.fromCharCode(112,101,101,107,95,55,95,55,53,0);
       let gifgoalQ: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,97,116,104,115,0),696], [String.fromCharCode(100,111,109,105,110,97,110,116,0),922], [String.fromCharCode(112,95,54,53,95,116,114,97,110,115,99,116,105,111,110,0),112]]);
      for (let q = 0; q < 2; q++) {
         configp = !configp;
      }
      while (leaguedetailsbgH.includes(`${gifgoalQ.size}`)) {
         gifgoalQ.set(leaguedetailsbgH, (leaguedetailsbgH == String.fromCharCode(78,0) ? gifgoalQ.size : leaguedetailsbgH.length));
         break;
      }
      while (leaguedetailsbgH.length <= 3) {
         leaguedetailsbgH += `${leaguedetailsbgH.length / 1}`;
         break;
      }
         leaguedetailsbgH = `${(leaguedetailsbgH == String.fromCharCode(105,0) ? gifgoalQ.size : leaguedetailsbgH.length)}`;
         leaguedetailsbgH = "1";
          let thailand9 = false;
         leaguedetailsbgH = `${(2 * (configp ? 2 : 2))}`;
         thailand9 = !thailand9;
         configp = leaguedetailsbgH.length == 52;
         configp = leaguedetailsbgH.length >= 93;
      let dependencies4 = configp ? !configp : configp;
      do {
         configp = (gifgoalQ.size + leaguedetailsbgH.length) >= 2;
         if (dependencies4) {
            break;
         }
      } while (dependencies4 && (!configp));
      basketballhometeamB = subtextg.endsWith(`${custom2}`);
   }
       let helpers = 2.0;
         helpers += parseInt(`${helpers}`);
         helpers += parseInt(`${helpers}`);
          let showmored = String.fromCharCode(115,112,101,99,105,102,105,99,0);
          let selly = String.fromCharCode(97,108,108,111,119,97,110,99,101,0);
          let backp: Array<any> = [603, 499, 677];
         helpers *= selly.length;
         showmored += `${showmored.length}`;
         selly = `${backp.length << (Math.min(Math.abs(1), 4))}`;
         backp = [backp.length * 3];
      libswresampleL = `${(subtextg == String.fromCharCode(82,0) ? subtextg.length : parseInt(`${largeW}`))}`;
            _changeStatusToClose(event.placementId);
        });
    }

    const _getPId = (type: UGreytickLoading) => {
        switch (type) {
            case UGreytickLoading.UIconclosewhiteLock: {
                return Platform.OS === "android"
                    ? ANDROID_PLAY_DETAIL_DOWNLOAD_REWARD_ADS
                    : IOS_PLAY_DETAIL_DOWNLOAD_REWARD_ADS
            }
            case UGreytickLoading.UShowless: {
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
            setAdsList(prev => [...prev, new wawaWhitebell(pId)]);
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

class wawaWhitebell {
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