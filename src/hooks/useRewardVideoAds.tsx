import {
    ANDROID_PLAY_DETAIL_DOWNLOAD_REWARD_ADS,
    ANDROID_PLAY_DETAIL_SHORT_VOD_REWARD_ADS,
    IOS_PLAY_DETAIL_DOWNLOAD_REWARD_ADS,
    IOS_PLAY_DETAIL_SHORT_VOD_REWARD_ADS,
} from "@utility/constants";
import {
    ATRewardedVideoRNSDK,
} from "./../../AnyThinkAds/ATReactNativeSDK";
import { Platform } from "react-native";
import { useSelector } from "./hooks";
import { UserStateType } from "@redux/reducers/userReducer";
import { useEffect, useRef, useState } from "react";
import { User } from "@models/user";


const maxRetryTimes = 3;

type Props = {
    showLog?: boolean,
}

export enum RewardVideoAdsType {
    PLAY_DETAIL_DOWNLOAD,
    PLAY_DETAIL_SHORT_VOD,
}

export const useRewardVideoAds = ({
    showLog = false,
}: Props = {}) => {
    const userState = useSelector<UserStateType>('userReducer');
    // use ref not state is because prevent when retry need get latest value, but state value update is after render
    const adsListRef = useRef<AdsQueueType[]>([]);
    const [_, _forceRender] = useState(false);

    const updateAdsListRef = (newList: AdsQueueType[]) => {
        adsListRef.current = newList;
        _forceRender(prev => !prev);
    }

    useEffect(() => {
        _addListenerAds();

        return () => {
            ATRewardedVideoRNSDK.removeAllListeners();
        }
    }, [_]);

    const showAds = (type: RewardVideoAdsType) => {
        // if (User.isVip(userState.user)) return;

        const pId = _getPId(type);

        if (pId === undefined || pId === null || pId === '') return;

        _loadVideoAds(pId);
    }

    const getDetails = (type: RewardVideoAdsType): AdsQueueType | undefined => {
        const pId = _getPId(type);

        if (pId === undefined || pId === null || pId === '') return;

        return adsListRef.current.find((ads) => ads.pId === pId);
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
            case RewardVideoAdsType.PLAY_DETAIL_DOWNLOAD: {
                return Platform.OS === "android"
                    ? ANDROID_PLAY_DETAIL_DOWNLOAD_REWARD_ADS
                    : IOS_PLAY_DETAIL_DOWNLOAD_REWARD_ADS
            }
            case RewardVideoAdsType.PLAY_DETAIL_SHORT_VOD: {
                return Platform.OS === "android"
                    ? ANDROID_PLAY_DETAIL_SHORT_VOD_REWARD_ADS
                    : IOS_PLAY_DETAIL_SHORT_VOD_REWARD_ADS
            }
            default: return '';
        }
    }

    const _retryAds = (pId: string) => {
        setTimeout(() => {
            const indexFound = adsListRef.current.findIndex((ads) => ads.pId === pId);

            if (indexFound !== -1) {
                updateAdsListRef(adsListRef.current.map((v, i) => i === indexFound ? { ...v, retry: v.retry + 1 } : v));

                if (adsListRef.current[indexFound].retry >= maxRetryTimes) {
                    _removeFromQueue(pId);
                    return;
                }

                if (adsListRef.current[indexFound].isReady === false) {
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
            // [ATInterstitialRNSDK.userDataKey]: 'test_user_data',
        }

        const indexFound = adsListRef.current.findIndex((ads) => ads.pId === pId);

        if (indexFound === -1) {
            updateAdsListRef([...adsListRef.current, new AdsQueueType(pId)]);
        } else {
            updateAdsListRef(adsListRef.current.map((v, i) => i === indexFound ? { ...v, retry: 0 } : v));
        }

        ATRewardedVideoRNSDK.loadAd(pId, settings);
    }

    const _changeStatusToReady = (pId: string, status?: boolean) => {
        const indexFound = adsListRef.current.findIndex((ads) => ads.pId === pId);

        if (indexFound === -1) return;

        if (status === false) {
            updateAdsListRef(adsListRef.current.map((v, i) => i === indexFound ? { ...v, isReady: status } : v));
            return;
        }

        updateAdsListRef(adsListRef.current.map((v, i) => i === indexFound ? { ...v, isReady: true } : v));
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
        const indexFound = adsListRef.current.findIndex((ads) => ads.pId === pId);

        if (indexFound === -1) return;

        updateAdsListRef(adsListRef.current.map((v, i) => i === indexFound ? { ...v, isPlay: true } : v));
    }

    const _changeStatusToDone = (pId: string) => {
        const indexFound = adsListRef.current.findIndex((ads) => ads.pId === pId);

        if (indexFound === -1) return;

        updateAdsListRef(adsListRef.current.map((v, i) => i === indexFound ? { ...v, isDone: true } : v));
    }

    const _changeStatusToClose = (pId: string) => {
        const indexFound = adsListRef.current.findIndex((ads) => ads.pId === pId);

        if (indexFound === -1) return;

        updateAdsListRef(adsListRef.current.map((v, i) => i === indexFound ? { ...v, isClose: true } : v));
        _removeFromQueue(pId);
    }

    const _removeFromQueue = (pId: string) => {
        const indexFound = adsListRef.current.findIndex((ads) => ads.pId === pId);

        if (indexFound === -1) return;

        updateAdsListRef(adsListRef.current.filter((v, i) => i !== indexFound));
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