import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ttAppsOther, ttSport, ttAcceptedCountItem, ttTempGift, ttAnalytics, ttHandlerContext } from "./tt_line_borderless";
import { ttFast } from "@models/tt_stations_right";

export type ttReferrerExpand = {
  首页: undefined;
  解说: undefined;
  发现: undefined;
  上传: undefined;
  我的: undefined;
  体育: undefined;
  会员中心: undefined;
};

export type ttConfirmationYing = {
  我的: undefined;
  首页: undefined;
  上传: undefined;
  解说: undefined;
  发现: undefined;
};

export type ttBodan = {
  我的: undefined;
  首页: undefined;
  上传: undefined;
  解说: undefined;
  发现: undefined;
};

export type ttScore = {
  我的: undefined;
  首页: undefined;
  上传: undefined;
  解说: undefined;
  发现: undefined;
};

export type ttNewsLogin = {
  Profile: BottomTabScreenProps<ttConfirmationYing>;
  
  Playlist: BottomTabScreenProps<ttBodan>;
  WatchAnytime: BottomTabScreenProps<ttScore>;
  // tt_terms: BottomTabScreenProps<ttReferrerExpand>;
  tt_terms: any;
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
    vod_id: ttAppsOther["vod_id"];
    player_mode?: "adult" | 'normal';
  };
  全部评论: {
    vod_id: ttAppsOther["vod_id"];
    vod_name: ttAppsOther["vod_name"];
    commentItems: ttTempGift[];
  };
  搜索: {
    initial: string;
  };
  PlaylistDetail: {
    topic_id: ttSport["topic_id"];
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
    liveStationItemList: Array<ttAcceptedCountItem>;
  };
  电视台播放: {
    liveStationItemList: Array<ttAcceptedCountItem>;
    liveStationItem: ttAcceptedCountItem;
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
    userState: ttFast;
  };
  午夜场剧情: {
    class: string;
    vod_source_name: string;
  };
  活动页: {
    bannerAd: ttAnalytics;
  };
  我的下载: undefined;
  下载详情: {
    vodId: number
  };
  续费服务: undefined,
  uploadVideoPreview: ttHandlerContext,
  uploadHistory: undefined,
};

export type RootStackScreenProps<
  T extends keyof ttNewsLogin
> = NativeStackScreenProps<ttNewsLogin, T>;

export type HomeTabScreenProps<
  T extends keyof ttReferrerExpand
> = BottomTabScreenProps<ttReferrerExpand, T>;
export type ProfileTabScreenProps<
  T extends keyof ttConfirmationYing
> = BottomTabScreenProps<ttConfirmationYing, T>;
export type PlaylistTabScreenProps<
  T extends keyof ttBodan
> = BottomTabScreenProps<ttBodan, T>;
export type WatchAnytimeTabScreenProps<
  T extends keyof ttScore
> = BottomTabScreenProps<ttScore, T>;

declare global {
  namespace ReactNavigation {
    interface ttMinivodCasting extends ttNewsLogin { }
  }
}
