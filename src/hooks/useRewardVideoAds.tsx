import {
    ANDROID_DEMO_REWARD_ADS,
    IOS_DEMO_REWARD_ADS,
} from "@utility/constants";
import {
    ATRewardedVideoRNSDK,
} from "./../../AnyThinkAds/ATReactNativeSDK";
import { Platform } from "react-native";
import { useSelector } from "./hooks";
import { UserStateType } from "@redux/reducers/userReducer";
import { useEffect, useRef, useState } from "react";
import { User } from "@models/user";


const maxRetryTimes = 5;

type Props = {
    showLog?: boolean,
}

export enum RewardVideoAdsType {
    DEMO,
}

export const useRewardVideoAds = ({
    showLog = true,
}: Props = {
        showLog: true,
    }) => {
    const userState = useSelector<UserStateType>('userReducer');
    const [adsList, setAdsList] = useState<AdsQueueType[]>([]);

    useEffect(() => {
        _addListenerAds();

        return () => {
            ATRewardedVideoRNSDK.removeAllListeners();
        }
    }, [adsList]);

    const showAds = (type: RewardVideoAdsType) => {
        if (User.isVip(userState.user)) return;

        const pId = _getPId(type);

        if (pId === undefined || pId === null || pId === '') return;

        _loadVideoAds(pId);
    }

    const getDetails = (type: RewardVideoAdsType): AdsQueueType | undefined => {
        const pId = _getPId(type);

        if (pId === undefined || pId === null || pId === '') return;

        return adsList.find((ads) => ads.pId === pId);
    }

    const _addListenerAds = () => {
        //广告加载成功
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoLoaded, (event: any) => {
            if (showLog) console.log('ATRewardedVideoLoaded: ' + event.placementId);
            _changeStatusToReady(event.placementId);
        });
        //广告加载失败
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoFail, (event: any) => {
            if (showLog) console.warn('ATRewardedVideoLoadFail: ' + event.placementId + ', errorMsg: ' + event.errorMsg);
            _retryAds(event.placementId);
        });
        //广告开始播放
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoPlayStart, (event: any) => {
            if (showLog) console.log('ATRewardedVideoPlayStart: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);
            _changeStatusToPlay(event.placementId);
        });
        //广告播放结束
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoPlayEnd, (event: any) => {
            if (showLog) console.log('ATRewardedVideoPlayDone: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);
            _changeStatusToDone(event.placementId);
        });
        //广告播放失败
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoPlayFail, (event: any) => {
            if (showLog) console.log('ATRewardedVideoPlayFail: ' + event.placementId + ', errorMsg: ' + event.errorMsg + ', adCallbackInfo: ' + event.adCallbackInfo);
            _retryAds(event.placementId);
        });
        // //广告被点击
        // ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoClick, (event: any) => {
        //     if (showLog) console.log('ATRewardedVideoClick: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);
        // });
        // //激励成功，开发者可在此回调中下发奖励，一般先于onRewardedVideoAdClosed回调，服务器激励则不一定
        // ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoReward, (event: any) => {
        //     if (showLog) console.log('ATRewardedVideoReward: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);
        // });
        //广告被关闭
        ATRewardedVideoRNSDK.setAdListener(ATRewardedVideoRNSDK.onRewardedVideoClose, (event: any) => {
            if (showLog) console.log('ATRewardedVideoClose: ' + event.placementId + ', adCallbackInfo: ' + event.adCallbackInfo);
            _changeStatusToClose(event.placementId);
        });
    }

    const _getPId = (type: RewardVideoAdsType) => {
        switch (type) {
            case RewardVideoAdsType.DEMO: {
                return Platform.OS === "android"
                    ? ANDROID_DEMO_REWARD_ADS
                    : IOS_DEMO_REWARD_ADS
            }
            default: return '';
        }
    }

    const _retryAds = (pId: string) => {
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
    }

    const _loadVideoAds = (pId: string) => {
        const settings = {
            [ATRewardedVideoRNSDK.userIdKey]: userState.user?.userId,
            // [ATInterstitialRNSDK.userDataKey]: 'test_user_data',
        }

        const indexFound = adsList.findIndex((ads) => ads.pId === pId);

        if (indexFound === -1) {
            setAdsList(prev => [...prev, new AdsQueueType(pId)]);
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

class AdsQueueType {
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