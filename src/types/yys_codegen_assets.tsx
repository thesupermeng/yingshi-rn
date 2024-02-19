import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { yysPenaltyshoot, yysArrowup, yysTempnodatagifLeagueItem, yysSubmit, yysIconviewer } from "./yys_ajax";
import { yysIconstar } from "@models";

export type yysMail = {
  首页: undefined;
  随心看: undefined;
  播单: undefined;
  我的: undefined;
  体育: undefined;
  会员中心: undefined;
};

export type yysNbatrophyBootsplash = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type yysUnreadVolume = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type yysComponentComponentregistry = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type yysPredictionbanner = {
  Profile: BottomTabScreenProps<yysNbatrophyBootsplash>;
  
  Playlist: BottomTabScreenProps<yysUnreadVolume>;
  WatchAnytime: BottomTabScreenProps<yysComponentComponentregistry>;
  // yys_calendar: BottomTabScreenProps<yysMail>;
  yys_calendar: any;
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
    vod_id: yysPenaltyshoot["vod_id"];
    player_mode?: "adult" | 'normal';
  };
  全部评论: {
    vod_id: yysPenaltyshoot["vod_id"];
    vod_name: yysPenaltyshoot["vod_name"];
    commentItems: yysSubmit[];
  };
  搜索: {
    initial: string;
  };
  PlaylistDetail: {
    topic_id: yysArrowup["topic_id"];
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
    liveStationItemList: Array<yysTempnodatagifLeagueItem>;
  };
  电视台播放: {
    liveStationItemList: Array<yysTempnodatagifLeagueItem>;
    liveStationItem: yysTempnodatagifLeagueItem;
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
    userState: yysIconstar;
  };
  午夜场剧情: {
    class: string;
  };
  活动页: {
    bannerAd: yysIconviewer;
  };
  我的下载: undefined;
  下载详情: {
    vodId: number
  };
  续费服务: undefined,
};

export type RootStackScreenProps<
  T extends keyof yysPredictionbanner
> = NativeStackScreenProps<yysPredictionbanner, T>;

export type HomeTabScreenProps<
  T extends keyof yysMail
> = BottomTabScreenProps<yysMail, T>;
export type ProfileTabScreenProps<
  T extends keyof yysNbatrophyBootsplash
> = BottomTabScreenProps<yysNbatrophyBootsplash, T>;
export type PlaylistTabScreenProps<
  T extends keyof yysUnreadVolume
> = BottomTabScreenProps<yysUnreadVolume, T>;
export type WatchAnytimeTabScreenProps<
  T extends keyof yysComponentComponentregistry
> = BottomTabScreenProps<yysComponentComponentregistry, T>;

declare global {
  namespace ReactNavigation {
    interface yysLibjsinspectorDefaultroombg extends yysPredictionbanner { }
  }
}
