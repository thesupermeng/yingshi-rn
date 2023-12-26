import { Platform } from 'react-native';

export const DARK_THEME = 'DARK_THEME';
export const LIGHT_THEME = 'LIGHT_THEME';

export const ADD_VOD_TO_FAVORITES = 'add_vod_to_fav';
export const REMOVE_VOD_FROM_FAVORITES = 'remove_from_fav';
export const PLAY_VOD = 'play_vod';
export const TOGGLE_VOD_FAVORITES = 'toggle_vod_fav';

export const SELECT_MINI_VOD_COLLECTION_ITEM =
  'select_mini_vod_collection_item';
export const SET_FROM_MINI_VOD_COLLECTION_ITEM =
  'set_from_mini_vod_collection_item';

export const ADD_VOD_TO_HISTORY = 'add_vod_to_history';
export const REMOVE_VOD_HISTORY = 'remove_from_history';
export const CLEAR_HISTORY = 'clear_history';

export const TOGGLE_PLAYLIST_FAVORITES = 'toggle_playlist_fav';
export const VIEW_PLAYLIST = 'view_playlist';

export const HIDE_VOD_PLAYER_GUIDE = 'hide_vod_helper_guide';
export const ACCEPT_PRIVACY_POLICY = 'accept_privacy_policy';

export const HANDLE_APP_ORIENTATION = 'handle_app_orientation';
export const HANDLE_DEVICES_ORIENTATION = 'handle_devices_orientation';
export const LOCK_ORIENTATION = 'lock_orientation';

export const UPDATE_NETWORK_INFO = 'update_network_info';

// export const API_DOMAIN = 'https://api.yingshi.tv/'
// export const API_DOMAIN = 'https://api.gxhongdeli168.com/';
export const API_DOMAIN = 'https://api.gxhongdeli168.com/';
// export const API_DOMAIN_TEST = 'https://testapi.yingshi.tv/';
export const API_DOMAIN_TEST = 'https://api.gxhongdeli168.com/';
export const API_DOMAIN_LOCAL = 'http://localhost:3000/';
export const MATCH_API_DOMAIN = 'https://api.ggsimida.com/';

export const ADD_SEARCH_HISTORY = 'add_search_history';
export const REMOVE_SEARCH_HISTORY = 'remove_from_search_history';
export const CLEAR_SEARCH_HISTORY = 'clear_search_history';

export const CLEAR_STORAGE_MEMORY = 'clear_storage_memory';

export const APPSFLYER_DEVKEY = 'wrxTHihLJNWrrusXtgRJZa';

export const INVITE_DOMAIN = 'https://yingshi.tv/invite/pro/?invite=';

// const ALL_UMENG_CHANNELS = {
//     'WEB': 'WEB',
//     'GOOGLE_PLAY': 'GOOGLE_PLAY',
//     'HUAWEI_APP_GALLERY_OVERSEAS': 'HUAWEI_APP_GALLERY_OVERSEAS',
//     'OPPO_APP_MARKET': 'OPPO_APP_MARKET',
//     'VIVO_APP_STORE': 'VIVO_APP_STORE',
//     'MI_GETAPPS': 'MI_GETAPPS',
// }

export const UMENG_CHANNEL = "WEB";

export const APP_VERSION = "1.7.0";

export const TOPON_ANDROID_APP_ID = 'a65002a2db3a7f';
export const TOPON_ANDROID_APP_KEY = 'aad683307ed540dfc11b094206e8a15b1';

export const TOPON_IOS_APP_ID = 'a65093c4e166c3';
export const TOPON_IOS_APP_KEY = 'ac16f5a19bcbae7438b36f0f7160fbac3';

// topon 横幅广告
export const ANDROID_HOME_PAGE_BANNER_ADS = 'b65002ded406c8';
export const ANDROID_PLAY_DETAILS_BANNER_ADS = 'b65017594babf8';
export const ANDROID_TOPIC_DETAILS_BANNER_ADS = 'b650175c1b7a23';
export const ANDROID_TOPIC_TAB_BANNER_ADS = 'b6523b931be70d';

export const IOS_HOME_PAGE_BANNER_ADS = 'b650a5ecaebc22';
export const IOS_PLAY_DETAILS_BANNER_ADS = 'b650a5e611f0ae';
export const IOS_TOPIC_DETAILS_BANNER_ADS = 'b655aba884a693';
export const IOS_TOPIC_TAB_BANNER_ADS = 'b650a5e282588c';

// topon 插屏广告
export const ANDROID_HOME_PAGE_POP_UP_ADS = 'b650bf7ba6ea04';
export const ANDROID_PLAY_DETAILS_POP_UP_ADS = 'b65002e06244c7';
export const IOS_PLAY_DETAILS_POP_UP_ADS = 'b650a5eb890d73';
export const IOS_HOME_PAGE_POP_UP_ADS = 'b650bf7cddb441';

// topon 激励视频广告
export const ANDROID_HOME_REWARD_ADS = 'b651e77ae56eda';

// topon banner
export const TOPON_BANNER_WIDTH = 415;
export const TOPON_BANNER_HEIGHT = 50;
export const TOPON_BANNER_RATIO = TOPON_BANNER_HEIGHT / TOPON_BANNER_WIDTH;

// app platform
export const YING_SHI_PRODUCT_ANDROID = 3;
export const YING_SHI_PRODUCT_IOS = 4;

// export const YING_SHI_PIN_ANDROID = 1;
// export const YING_SHI_PIN_IOS = 2;
// export const YING_SHI_TV_ANDROID = 3;
// export const YING_SHI_TV_IOS = 4;

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

export const APP_NAME_CONST = '影视TV';
export const APP_EMAIL_CONST = 'contactus@yingshi.tv';

export const NON_VIP_STREAM_TIME_SECONDS = 300;

export const PLAY_HTTP_SERVER_PORT = 8085;

export const SHOW_ZF_CONST = true;

export const ADULT_MODE_PREVIEW_DURATION = 300; // number of seconds 

// watch anytime download
export const DOWNLOAD_WATCH_ANYTIME = true;
export const DOWNLOAD_BATCH_SIZE = 5;
export const TOTAL_VIDEO_TO_DOWNLOAD = 100;
// export const CACHE_DURATION = 3; //days

export const GOOGLE_SINGIN_CLIENT_WEB = '699123886701-lg76r3gei261u8lip8jp7qjlt49hqkf7.apps.googleusercontent.com';
export const GOOGLE_SINGIN_CLIENT_IOS = '699123886701-ok49jlua77cf0omih5g1u9f1irflnrq3.apps.googleusercontent.com';
