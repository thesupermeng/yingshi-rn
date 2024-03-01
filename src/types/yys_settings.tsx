import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { yys_Bing, yys_BrightnessCopy, yys_StyleItem, yys_InviteAway, yys_Xadsdk } from "./yys_libzeus";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";

export type yys_BaiduLight = {
  首页: undefined;
  随心看: undefined;
  播单: undefined;
  我的: undefined;
  体育: undefined;
  会员中心: undefined;
};

export type yys_Product = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type yys_CornerAccepted = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type yys_Libreactperfloggerjni = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type yys_ServiceBridge = {
  Profile: BottomTabScreenProps<yys_Product>;
  
  Playlist: BottomTabScreenProps<yys_CornerAccepted>;
  WatchAnytime: BottomTabScreenProps<yys_Libreactperfloggerjni>;
  // yys_dycreator: BottomTabScreenProps<yys_BaiduLight>;
  yys_dycreator: any;
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
    vod_id: yys_Bing["vod_id"];
    player_mode?: "adult" | 'normal';
  };
  全部评论: {
    vod_id: yys_Bing["vod_id"];
    vod_name: yys_Bing["vod_name"];
    commentItems: yys_InviteAway[];
  };
  搜索: {
    initial: string;
  };
  PlaylistDetail: {
    topic_id: yys_BrightnessCopy["topic_id"];
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
    liveStationItemList: Array<yys_StyleItem>;
  };
  电视台播放: {
    liveStationItemList: Array<yys_StyleItem>;
    liveStationItem: yys_StyleItem;
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
    userState: yys_RelatedTooltips;
  };
  午夜场剧情: {
    class: string;
  };
  活动页: {
    bannerAd: yys_Xadsdk;
  };
  我的下载: undefined;
  下载详情: {
    vodId: number
  };
  续费服务: undefined,
};

export type RootStackScreenProps<
  T extends keyof yys_ServiceBridge
> = NativeStackScreenProps<yys_ServiceBridge, T>;

export type HomeTabScreenProps<
  T extends keyof yys_BaiduLight
> = BottomTabScreenProps<yys_BaiduLight, T>;
export type ProfileTabScreenProps<
  T extends keyof yys_Product
> = BottomTabScreenProps<yys_Product, T>;
export type PlaylistTabScreenProps<
  T extends keyof yys_CornerAccepted
> = BottomTabScreenProps<yys_CornerAccepted, T>;
export type WatchAnytimeTabScreenProps<
  T extends keyof yys_Libreactperfloggerjni
> = BottomTabScreenProps<yys_Libreactperfloggerjni, T>;

declare global {
  namespace ReactNavigation {
    interface yys_Mbjscommon extends yys_ServiceBridge { }
  }
}
