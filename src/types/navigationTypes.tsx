import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LiveTVStationItem, CommentsType, BannerAdType } from "./ajaxTypes";
import { PlayList, User, Vod } from "@models";

// https://reactnavigation.org/docs/typescript/
export type HomeTabParamList = {
  首页: undefined;
  随心看: undefined;
  播单: undefined;
  我的: undefined;
  体育: undefined;
  会员中心: undefined;
  娱乐: undefined;
};

export type ProfileTabParamList = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type PlaylistTabParamList = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type WatchAnytimeTabParamList = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type RootStackParamList = {
  Profile: BottomTabScreenProps<ProfileTabParamList>;
  // Profile: any;
  Playlist: BottomTabScreenProps<PlaylistTabParamList>;
  WatchAnytime: BottomTabScreenProps<WatchAnytimeTabParamList>;
  // Home: BottomTabScreenProps<HomeTabParamList>;
  Home: any;
  我的收藏: undefined;
  合集收藏: undefined;
  播放历史: undefined;
  反馈: undefined;
  邀请: undefined;
  // 邀请详情: undefined;
  个人中心: undefined;
  设置: undefined;
  关于我们: undefined;
  分享App: undefined;
  播放: {
    vod_id: Vod["vod_id"];
    player_mode?: "adult" | 'normal';
  };
  全部评论: {
    vod_id: Vod["vod_id"];
    vod_name: Vod["vod_name"];
    commentItems: CommentsType[];
  };
  搜索: {
    initial: string;
  };
  PlaylistDetail: {
    topic_id: PlayList["topic_id"];
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
    liveStationItemList: Array<LiveTVStationItem>;
  };
  电视台播放: {
    liveStationItemList: Array<LiveTVStationItem>;
    liveStationItem: LiveTVStationItem;
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
    countryId?: string,
    // deviceId?: string;
  };
  SetUsername: undefined;
  活动规则: undefined;
  付费VIP: undefined;
  付费Google: undefined;
  VIP明细: {
    userState: User;
  };
  午夜场剧情: {
    class: string;
    vod_source_name: string;
  };
  活动页: {
    bannerAd: BannerAdType;
  };
  我的下载: undefined;
  下载详情: {
    vodId: number
  };
  续费服务: undefined,
  Webview: {
    url: string,
  },
  PaymentWebview: {
    source: string,
    isPayment?: boolean,
  };
  AhaGamesScreen: undefined;
  AhaWebScreen: {
    url?: string,
    navBack?: number
  };
  AhaLinkScreen: {
    url?: string,
    navBack?: number
  };
  AhaPinCodeScreen: {
    verify?: boolean
  };
  AhaPinOtpScreen: {
    pin?: string;
  };
};

export type RootStackScreenProps<
  T extends keyof RootStackParamList
> = NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<
  T extends keyof HomeTabParamList
> = BottomTabScreenProps<HomeTabParamList, T>;
export type ProfileTabScreenProps<
  T extends keyof ProfileTabParamList
> = BottomTabScreenProps<ProfileTabParamList, T>;
export type PlaylistTabScreenProps<
  T extends keyof PlaylistTabParamList
> = BottomTabScreenProps<PlaylistTabParamList, T>;
export type WatchAnytimeTabScreenProps<
  T extends keyof WatchAnytimeTabParamList
> = BottomTabScreenProps<WatchAnytimeTabParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
