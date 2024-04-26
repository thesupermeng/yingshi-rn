import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { wawaSellProfileinactive, wawaWithCrown, wawaIconeyeMoonItem, wawaMintegralLibmapbufferjni, wawaLeaguedetailsbgMbbid, wawaGoogleEact } from "./wawa_gradlew";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

export type wawaTaiwanScore = {
  首页: undefined;
  随心看: undefined;
  播单: undefined;
  我的: undefined;
  体育: undefined;
  '体育/成人': undefined;
  热搜: undefined;
};

export type wawaBottom = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type wawaCountdown = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type wawaLibtan = {
  我的: undefined;
  首页: undefined;
  随心看: undefined;
  播单: undefined;
};

export type wawaDelegate = {
  Profile: BottomTabScreenProps<wawaBottom>;
  
  Playlist: BottomTabScreenProps<wawaCountdown>;
  WatchAnytime: BottomTabScreenProps<wawaLibtan>;
  // wawa_down: BottomTabScreenProps<wawaTaiwanScore>;
  wawa_down: any;
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
    vod_id: wawaSellProfileinactive["vod_id"];
    player_mode?: "adult" | 'normal';
  };
  全部评论: {
    vod_id: wawaSellProfileinactive["vod_id"];
    vod_name: wawaSellProfileinactive["vod_name"];
    commentItems: wawaMintegralLibmapbufferjni[];
  };
  搜索: {
    initial: string;
  };
  PlaylistDetail: {
    topic_id: wawaWithCrown["topic_id"];
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
    liveStationItemList: Array<wawaIconeyeMoonItem>;
  };
  电视台播放: {
    liveStationItemList: Array<wawaIconeyeMoonItem>;
    liveStationItem: wawaIconeyeMoonItem;
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
    userState: wawaLibglog;
  };
  午夜场剧情: {
    class: string;
    vod_source_name: string;
  };
  活动页: {
    bannerAd: wawaLeaguedetailsbgMbbid;
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
  uploadVideoPreview: wawaGoogleEact,
  uploadHistory: undefined,
};

export type RootStackScreenProps<
  T extends keyof wawaDelegate
> = NativeStackScreenProps<wawaDelegate, T>;

export type HomeTabScreenProps<
  T extends keyof wawaTaiwanScore
> = BottomTabScreenProps<wawaTaiwanScore, T>;
export type ProfileTabScreenProps<
  T extends keyof wawaBottom
> = BottomTabScreenProps<wawaBottom, T>;
export type PlaylistTabScreenProps<
  T extends keyof wawaCountdown
> = BottomTabScreenProps<wawaCountdown, T>;
export type WatchAnytimeTabScreenProps<
  T extends keyof wawaLibtan
> = BottomTabScreenProps<wawaLibtan, T>;

declare global {
  namespace ReactNavigation {
    interface wawaClock extends wawaDelegate { }
  }
}
