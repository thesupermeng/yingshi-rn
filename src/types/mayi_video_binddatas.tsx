import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { mayi_EmptyGradle, mayi_Runtime, mayi_ReddownarrowItem, mayi_StreamingSmall, mayi_Room, mayi_Interstitial } from "./mayi_green";
import { mayi_Gift } from "@models/mayi_libjsinspector";

export type mayi_KuaishouMalaysia = {
  首页: undefined;
  解说: undefined;
  发现: undefined;
  上传: undefined;
  我的: undefined;
  体育: undefined;
  会员中心: undefined;
};

export type mayi_FullscreenmaxCore = {
  我的: undefined;
  首页: undefined;
  上传: undefined;
  解说: undefined;
  发现: undefined;
};

export type mayi_Rules = {
  我的: undefined;
  首页: undefined;
  上传: undefined;
  解说: undefined;
  发现: undefined;
};

export type mayi_Arrowup = {
  我的: undefined;
  首页: undefined;
  上传: undefined;
  解说: undefined;
  发现: undefined;
};

export type mayi_Collection = {
  Profile: BottomTabScreenProps<mayi_FullscreenmaxCore>;
  
  Playlist: BottomTabScreenProps<mayi_Rules>;
  WatchAnytime: BottomTabScreenProps<mayi_Arrowup>;
  // mayi_awayteamfield: BottomTabScreenProps<mayi_KuaishouMalaysia>;
  mayi_awayteamfield: any;
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
    vod_id: mayi_EmptyGradle["vod_id"];
    player_mode?: "adult" | 'normal';
  };
  全部评论: {
    vod_id: mayi_EmptyGradle["vod_id"];
    vod_name: mayi_EmptyGradle["vod_name"];
    commentItems: mayi_StreamingSmall[];
  };
  搜索: {
    initial: string;
  };
  PlaylistDetail: {
    topic_id: mayi_Runtime["topic_id"];
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
    liveStationItemList: Array<mayi_ReddownarrowItem>;
  };
  电视台播放: {
    liveStationItemList: Array<mayi_ReddownarrowItem>;
    liveStationItem: mayi_ReddownarrowItem;
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
    userState: mayi_Gift;
  };
  午夜场剧情: {
    class: string;
    vod_source_name: string;
  };
  活动页: {
    bannerAd: mayi_Room;
  };
  我的下载: undefined;
  下载详情: {
    vodId: number
  };
  续费服务: undefined,
  uploadVideoPreview: mayi_Interstitial,
  uploadHistory: undefined,
};

export type RootStackScreenProps<
  T extends keyof mayi_Collection
> = NativeStackScreenProps<mayi_Collection, T>;

export type HomeTabScreenProps<
  T extends keyof mayi_KuaishouMalaysia
> = BottomTabScreenProps<mayi_KuaishouMalaysia, T>;
export type ProfileTabScreenProps<
  T extends keyof mayi_FullscreenmaxCore
> = BottomTabScreenProps<mayi_FullscreenmaxCore, T>;
export type PlaylistTabScreenProps<
  T extends keyof mayi_Rules
> = BottomTabScreenProps<mayi_Rules, T>;
export type WatchAnytimeTabScreenProps<
  T extends keyof mayi_Arrowup
> = BottomTabScreenProps<mayi_Arrowup, T>;

declare global {
  namespace ReactNavigation {
    interface mayi_LibyogaBodan extends mayi_Collection { }
  }
}
