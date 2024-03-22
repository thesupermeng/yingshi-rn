import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { XVSScoreDark, RBEmojiEwarded, XPaginationWeiboItem, WQRReducer, MAboutEdit, ITFOverBrightness } from "./wpk_long";
import { KWConstants } from "@models/kl_sheet";

export type YIPHandler = {
  首页: undefined;
  解说: undefined;
  发现: undefined;
  上传: undefined;
  我的: undefined;
  体育: undefined;
  会员中心: undefined;
};

export type KGiftMapping = {
  我的: undefined;
  首页: undefined;
  上传: undefined;
  解说: undefined;
  发现: undefined;
};

export type HQDownloader = {
  我的: undefined;
  首页: undefined;
  上传: undefined;
  解说: undefined;
  发现: undefined;
};

export type TEighteenSingapore = {
  我的: undefined;
  首页: undefined;
  上传: undefined;
  解说: undefined;
  发现: undefined;
};

export type NRank = {
  Profile: BottomTabScreenProps<KGiftMapping>;
  
  Playlist: BottomTabScreenProps<HQDownloader>;
  WatchAnytime: BottomTabScreenProps<TEighteenSingapore>;
  // xh_gpay: BottomTabScreenProps<YIPHandler>;
  xh_gpay: any;
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
    vod_id: XVSScoreDark["vod_id"];
    player_mode?: "adult" | 'normal';
  };
  全部评论: {
    vod_id: XVSScoreDark["vod_id"];
    vod_name: XVSScoreDark["vod_name"];
    commentItems: WQRReducer[];
  };
  搜索: {
    initial: string;
  };
  PlaylistDetail: {
    topic_id: RBEmojiEwarded["topic_id"];
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
    liveStationItemList: Array<XPaginationWeiboItem>;
  };
  电视台播放: {
    liveStationItemList: Array<XPaginationWeiboItem>;
    liveStationItem: XPaginationWeiboItem;
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
    userState: KWConstants;
  };
  午夜场剧情: {
    class: string;
    vod_source_name: string;
  };
  活动页: {
    bannerAd: MAboutEdit;
  };
  我的下载: undefined;
  下载详情: {
    vodId: number
  };
  续费服务: undefined,
  uploadVideoPreview: ITFOverBrightness,
  uploadHistory: undefined,
};

export type RootStackScreenProps<
  T extends keyof NRank
> = NativeStackScreenProps<NRank, T>;

export type HomeTabScreenProps<
  T extends keyof YIPHandler
> = BottomTabScreenProps<YIPHandler, T>;
export type ProfileTabScreenProps<
  T extends keyof KGiftMapping
> = BottomTabScreenProps<KGiftMapping, T>;
export type PlaylistTabScreenProps<
  T extends keyof HQDownloader
> = BottomTabScreenProps<HQDownloader, T>;
export type WatchAnytimeTabScreenProps<
  T extends keyof TEighteenSingapore
> = BottomTabScreenProps<TEighteenSingapore, T>;

declare global {
  namespace ReactNavigation {
    interface QMPrivilegeGpay extends NRank { }
  }
}
