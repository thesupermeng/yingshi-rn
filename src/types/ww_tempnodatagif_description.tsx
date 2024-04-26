import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { wwControl, wwFirebase, wwRecommendationItem, wwImage, wwSendBuild, wwTextlayoutmanagerNterstitial } from "./ww_dycreator_result";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

export type wwCarouselGift = {
  首页: undefined;
  随心看: undefined;
  播单: undefined;
  我的: undefined;
  体育: undefined;
  '体育/成人': undefined;
  热搜: undefined;
};

export type wwMiddleHelper = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type wwRewardvideo = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type wwSentryLibtan = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type wwIconsubssuccess = {
  Profile: BottomTabScreenProps<wwMiddleHelper>;
  
  Playlist: BottomTabScreenProps<wwRewardvideo>;
  WatchAnytime: BottomTabScreenProps<wwSentryLibtan>;
  // ww_service_root: BottomTabScreenProps<wwCarouselGift>;
  ww_service_root: any;
  我的收藏: undefined;
  合集收藏: undefined;
  播放历史: undefined;
  反馈: undefined;
  邀请: undefined;
  
  个人中心: undefined;
  设置: undefined;
  关于我们: undefined;
  分享App: undefined;
  播放: {
    vod_id: wwControl["vod_id"];
    player_mode?: "adult" | 'normal';
  };
  全部评论: {
    vod_id: wwControl["vod_id"];
    vod_name: wwControl["vod_name"];
    commentItems: wwImage[];
  };
  搜索: {
    initial: string;
  };
  PlaylistDetail: {
    topic_id: wwFirebase["topic_id"];
  };
  隐私政策: undefined;
  用户协议: undefined;
  片库: {
    type_id: number;
    class?: string;
    area?: string;
    lang?: string;
    year?: string;
    order_by?: string;
  };
  电视台列表: {
    liveStationItemList: Array<wwRecommendationItem>;
  };
  电视台播放: {
    liveStationItemList: Array<wwRecommendationItem>;
    liveStationItem: wwRecommendationItem;
  };
  体育详情: {
    matchId?: number;
    streamerId?: number;
    sportType?: "足球" | "篮球";
    screen?: string,
  };
  合集播放: {};
  OTP: {
    email?: string;
    phone?: string;
    action?: string;
    referralCode?: string;
    countryId?: number,
    
  };
  SetUsername: undefined;
  活动规则: undefined;
  付费VIP: undefined;
  付费Google: undefined;
  VIP明细: {
    userState: wwBodan;
  };
  午夜场剧情: {
    class: string;
    vod_source_name: string;
  };
  活动页: {
    bannerAd: wwSendBuild;
  };
  我的下载: undefined;
  下载详情: {
    vodId: number
  };
  续费服务: undefined,
  Webview: {
    source: string,
    isPayment?: boolean,
  },
  uploadVideo: undefined,
  uploadVideoPreview: wwTextlayoutmanagerNterstitial,
  uploadHistory: undefined,
};

export type RootStackScreenProps<
  T extends keyof wwIconsubssuccess
> = NativeStackScreenProps<wwIconsubssuccess, T>;

export type HomeTabScreenProps<
  T extends keyof wwCarouselGift
> = BottomTabScreenProps<wwCarouselGift, T>;
export type ProfileTabScreenProps<
  T extends keyof wwMiddleHelper
> = BottomTabScreenProps<wwMiddleHelper, T>;
export type PlaylistTabScreenProps<
  T extends keyof wwRewardvideo
> = BottomTabScreenProps<wwRewardvideo, T>;
export type WatchAnytimeTabScreenProps<
  T extends keyof wwSentryLibtan
> = BottomTabScreenProps<wwSentryLibtan, T>;

declare global {
  namespace ReactNavigation {
    interface wwSuggestion extends wwIconsubssuccess { }
  }
}
