import AnalyticsUtil from './AnalyticsUtil';
import analytics from '@react-native-firebase/analytics';
import { CustomEventAnalytic } from './EventAnalytic';
import { ANALYTICS_CUSTOM, ANALYTICS_FIREBASE, ANALYTICS_UMENG } from '@utility/constants';

/**
catalog
- clicked: 片库-点击量
- viewed: 片库-浏览量

home_tab
- clicked: 首页-点击量
- viewed: 首页-浏览量

play
- viewed: 播放页-浏览量

play_plays_times
- viewed: 播放-播放量

play_x
- viewed: 播放页-X浏览量

play_x_plays_times
- viewed: 播放-X播放量

Play_share
- clicked: 播放-分享点击量

playlist
- clicked: 播单-点击量
- viewed: 播单-浏览量

playlist_topics
- clicked: 播单-专题详情点击量
- viewed: 播单-专题详情浏览量

search_keywords
- viewed: 搜索-关键词

search_result
- clicked: 搜索-结果内容点击量
- viewed: 搜索-结果浏览量

sport
- clicked: 体育-点击量
- viewed: 体育-浏览量

sportDetail
- viewed: 体育详情-浏览量

sportDetail_play_times
- viewed: 体育详情-播放量

sportDetail_vip_popup
- clicked: 体育详情-VIP点击次数
- viewed: 体育详情-VIP弹出次数

userCenter_login_success_times
- viewed: 个人中心-登录成功数

userCenter_vip_login_success_times
- viewed: 个人中心-VIP登录成功数

userCenter_view_vip
- viewed (desc_1: "pay"): 个人中心-付费VIP浏览量
- viewed (desc_1: "invite"): 个人中心-邀请VIP浏览量

watchAnytime
- viewed: 随心看-浏览量

watchAnytime_play_times
- viewed: 随心看-小视频浏览量

watchAnytime_x
- viewed: 随心看-X浏览量

watchAnytime_x_play_times
- viewed: 随心看-X小视频浏览量

watchAnytime_view_playlist
- clicked: 随心看-播单点击量

watchAnytime_view_video
- clicked: 随心看-正片点击量


============================== ads ==============================
slot_id: 100, 101, 102, 104, 105, 106, 107, 108
- clicked: 首页-横幅点击量
- viewed: 首页-横幅浏览量

slot_id: 110
- clicked: 体育-横幅点击量
- viewed: 体育-横幅浏览量

slot_id: 111, 112, 113
- clicked: 视频播放-横幅点击量
- viewed: 视频播放-横幅浏览量

slot_id: 114
- clicked: 播放-贴片点击量
- viewed: 播放-贴片浏览量


??? (no slot_id & title api return)
- 首页-轮播图点击量
- 首页-轮播图浏览量

??? (no slot_id & title api return)
- clicked: 随心看-小视频广告点击量
- viewed: 随心看-小视频广告浏览量
 */
enum EventId {
    // Home
    Home_views = 'Home-views',
    Home_clicks = 'Home-clicks',
    Home_Carousel_views = 'Home-Carousel_views',
    Home_Carousel_clicks = 'Home-Carousel_clicks',
    Home_Banner_views = 'Home-banner_views',
    Home_Banner_clicks = 'Home-banner_clicks',

    // WatchAnytime
    WatchAnytime_views = 'WatchAnytime-Views',
    WatchAnytime_video_view_times = 'WatchAnytime-video_view_times',
    WatchAnytime_x_views = 'WatchAnytime-X_views',
    WatchAnytime_x_video_view_times = 'WatchAnytime-X_video_view_times',
    WatchAnytime_playlist_clicks = 'WatchAnytime-playlist_clicks',
    WatchAnytime_video_clicks = 'WatchAnytime-video_clicks',
    WatchAnytime_Ads_views = 'WatchAnytime-ads_views',
    WatchAnytime_Ads_clicks = 'WatchAnytime-ads_clicks',

    // Sport
    Sport_views = 'Sport-views',
    Sport_clicks = 'Sport-clicks',
    Sport_Banner_views = 'Sport-banner_views',
    Sport_Banner_clicks = 'Sport-banner_clicks',

    // Sport Details
    SportDetails_views = 'SportDetails-views',
    SportDetails_plays_times = 'SportDetails-plays_times',
    SportDetails_vip_popup_times = 'SportDetails-vip_popup_times',
    SportDetails_vip_clicks = 'SportDetails-vip_clicks',

    // Playlist
    Playlist_views = 'Playlist-views',
    Playlist_clicks = 'Playlist-clicks',
    Playlist_topics_views = 'Playlist-topics_views',
    Playlist_topics_clicks = 'Playlist-topics_clicks',

    // User Center
    UserCenter_login_success_times = 'UserCenter-login_success_times',
    UserCenter_vip_login_success_times = 'UserCenter-vip_login_success_times',
    UserCenter_pay_vip_views = 'UserCenter-pay_vip_views',
    UserCenter_invites_vip_views = 'UserCenter-invites_vip_views',

    // Search
    Search_result_views = 'Search-result_views',
    Search_result_clicks = 'Search-result_clicks',
    Search_keyword = 'Search-keywords',

    // Catalog
    Catalog_views = 'Catalog-views',
    Catalog_clicks = 'Catalog-clicks',
    Catalog_x_views = 'Catalog-X_views',
    Catalog_x_clicks = 'Catalog-X_clicks',

    // Plays
    Plays_views = 'Play-views',
    Plays_plays_times = 'Play-plays_times',
    Plays_X_views = 'Play-X_views',
    Plays_X_plays_times = 'Play-X_plays_times',
    Plays_share_clicks = 'Play-share_clicks',

    // Plays (ads)
    Plays_ads_views = 'Play-ads_views',
    Plays_ads_clicks = 'Play-ads_clicks',

    // Video player banner
    VideoPlayer_Banner_views = 'VideoPlayer-banner_views',
    VideoPlayer_Banner_clicks = 'VideoPlayer-banner_clicks',

    // Profile
    Profile_Banner_views = 'Profile-banner_views',
    Profile_Banner_clicks = 'Profile-banner_clicks',
}

enum CustomEventKey {
    // Home
    Home = 'home_tab',

    // WatchAnytime
    WatchAnytime = 'watchAnytime',
    WatchAnytime_Play_Times = 'watchAnytime_play_times',
    WatchAnytime_View_Video = 'watchAnytime_view_video',
    WatchAnytime_View_Playlist = 'watchAnytime_view_playlist',

    WatchAnytimeX = 'watchAnytime_x',
    WatchAnytimeX_Play_Times = 'watchAnytime_x_play_times',

    // Sport
    Sport = 'sport',
    SportDetails = 'sportDetail',
    SportDetails_Play_Times = 'sportDetail_play_times',
    SportDetails_Vip_Popup = 'sportDetail_vip_popup',

    // Playlist
    Playlist = 'playlist',
    Playlist_Topics = 'playlist_topics',

    // User Center
    UserCenter_Login_Success_Times = 'userCenter_login_success_times',
    UserCenter_Vip_Login_Success_Times = 'userCenter_vip_login_success_times',
    UserCenter_View_Vip = 'userCenter_view_vip',

    // Search
    Search_Keyword = 'search_keywords',
    Search_Result = 'search_result',

    // Catalog
    Catalog = 'catalog',
    CatalogX = 'catalog_x',

    // Plays
    Plays = 'play',
    Plays_Plays_Times = 'play_plays_times',
    Plays_Share = 'Play_share',

    PlaysX = 'play_x',
    PlaysX_Plays_Times = 'play_x_plays_times',
}

export default class UmengAnalytics {
    static showLog: boolean = false;
    static disabled: boolean = false;
    static disabledUmeng: boolean = !ANALYTICS_UMENG;
    static disabledFirebase: boolean = !ANALYTICS_FIREBASE;
    static disabledCustom: boolean = !ANALYTICS_CUSTOM;

    static #triggerUmengEvent = (eventId: EventId, body: any = {}) => {
        if (this.disabled || this.disabledUmeng) return;

        AnalyticsUtil.onEventWithMap(eventId, body);
        if (this.showLog) console.log('trigger umeng event id:', eventId);
    }

    static #triggerFirebaseCustomEvent = async (eventId: EventId, body: any = {}) => {
        if (this.disabled || this.disabledFirebase) return;

        await analytics().logEvent(eventId.replace('-', '_'), body);
        if (this.showLog) console.log('trigger firebase event id:', eventId);
    }

    static #triggerFirebaseEvent = async (
        type: 'boot',

    ) => {
        if (this.disabled || this.disabledFirebase) return;

        switch (type) {
            case 'boot': {
                await analytics().logAppOpen();
                break;
            }
        }

        if (this.showLog) console.log('trigger firebase event id:', type);
    }

    static #triggerCustomEvent = (type: 'view' | 'click' | 'count', eventId: CustomEventKey | string, data: {
        name?: string | undefined;
        ads_slot_id?: number | undefined;
        ads_id?: number | undefined;
        params?: any | undefined;
    } = {}) => {
        if (this.disabled || this.disabledCustom) return;

        CustomEventAnalytic.onEvent({
            type: type,
            title: eventId,
            name: data?.name,
            ads_slot_id: data?.ads_slot_id,
            ads_id: data?.ads_id,
            params: data?.params,
        });
        if (this.showLog) console.log('trigger custom event id:', eventId);
    }

    // ============================== boot ==============================
    static onBootAnalytics = () => {
        // this.#triggerUmengEvent(EventId.Home_views);
        this.#triggerFirebaseEvent('boot');
        // this.#triggerCustomEvent('view', CustomEventKey.Home);
    }

    // ============================== Home ==============================
    static homeTabViewsAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        this.#triggerUmengEvent(EventId.Home_views, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerFirebaseCustomEvent(EventId.Home_views, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerCustomEvent('view', CustomEventKey.Home, {
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });
    }

    static homeTabClicksAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        this.#triggerUmengEvent(EventId.Home_clicks, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerFirebaseCustomEvent(EventId.Home_clicks, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerCustomEvent('click', CustomEventKey.Home, {
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });
    }

    static homeTabCarouselViewAnalytics = ({
        tab_id,
        tab_name,
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        tab_id: string,
        tab_name: string,
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        this.#triggerUmengEvent(EventId.Home_Carousel_views, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerFirebaseCustomEvent(EventId.Home_Carousel_views, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerCustomEvent('view', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });
    }

    static homeTabCarouselClickAnalytics = ({
        tab_id,
        tab_name,
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        tab_id: string,
        tab_name: string,
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        this.#triggerUmengEvent(EventId.Home_Carousel_clicks, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerFirebaseCustomEvent(EventId.Home_Carousel_clicks, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerCustomEvent('click', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });
    }

    static homeTabBannerViewAnalytics = ({
        tab_id,
        tab_name,
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        tab_id: string,
        tab_name: string,
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        this.#triggerUmengEvent(EventId.Home_Banner_views, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(EventId.Home_Banner_views, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('view', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });
    }

    static homeTabBannerClickAnalytics = ({
        tab_id,
        tab_name,
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name
    }: {
        tab_id: string,
        tab_name: string,
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        this.#triggerUmengEvent(EventId.Home_Banner_clicks, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(EventId.Home_Banner_clicks, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('click', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });
    }

    // ============================== WatchAnytime ==============================
    static watchAnytimeViewsAnalytics = ({ isXmode = false }: { isXmode?: boolean } = { isXmode: false }) => {
        let evendId: EventId = EventId.WatchAnytime_views;

        if (isXmode) {
            evendId = EventId.WatchAnytime_x_views;
        }

        this.#triggerUmengEvent(evendId);
        this.#triggerFirebaseCustomEvent(evendId);
        this.#triggerCustomEvent('view', isXmode
            ? CustomEventKey.WatchAnytimeX
            : CustomEventKey.WatchAnytime,
        );
    }

    static watchAnytimeVideoViewTimesAnalytics = ({ userId, vod_id, isXmode }: { userId: string, vod_id: string, isXmode?: boolean }) => {
        let evendId: EventId = EventId.WatchAnytime_video_view_times;

        if (isXmode) {
            evendId = EventId.WatchAnytime_x_video_view_times;
        }

        let prefixUserId = '';

        // add prefix
        if (userId !== '') {
            prefixUserId = 'userId_' + userId;
        } else {
            prefixUserId = 'guest';
        }

        this.#triggerUmengEvent(evendId, {
            [prefixUserId]: vod_id,
        });
        this.#triggerFirebaseCustomEvent(evendId, {
            [prefixUserId]: vod_id,
        });
        this.#triggerCustomEvent('view', isXmode
            ? CustomEventKey.WatchAnytimeX_Play_Times
            : CustomEventKey.WatchAnytime_Play_Times,
            {
                params: {
                    desc_1: 'user.id:' + userId,
                    // desc_2: vod_id,
                }
            }
        );
    }

    static watchAnytimeVideoClicksAnalytics = () => {
        this.#triggerUmengEvent(EventId.WatchAnytime_video_clicks);
        this.#triggerFirebaseCustomEvent(EventId.WatchAnytime_video_clicks);
        this.#triggerCustomEvent('click', CustomEventKey.WatchAnytime_View_Video);
    }

    static watchAnytimePlaylistClicksAnalytics = () => {
        this.#triggerUmengEvent(EventId.WatchAnytime_playlist_clicks);
        this.#triggerFirebaseCustomEvent(EventId.WatchAnytime_playlist_clicks);
        this.#triggerCustomEvent('click', CustomEventKey.WatchAnytime_View_Playlist);
    }

    static watchAnytimeAdsViewAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        this.#triggerUmengEvent(EventId.WatchAnytime_Ads_views);
        this.#triggerFirebaseCustomEvent(EventId.WatchAnytime_Ads_views);
        this.#triggerCustomEvent('view', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });
    }

    static watchAnytimeAdsClicksAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        this.#triggerUmengEvent(EventId.WatchAnytime_Ads_clicks);
        this.#triggerFirebaseCustomEvent(EventId.WatchAnytime_Ads_clicks);
        this.#triggerCustomEvent('click', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });
    }


    // ============================== Sport ==============================
    static sportViewsAnalytics = () => {
        this.#triggerUmengEvent(EventId.Sport_views);
        this.#triggerFirebaseCustomEvent(EventId.Sport_views);
        this.#triggerCustomEvent('view', CustomEventKey.Sport);
    }

    static sportClicksAnalytics = () => {
        this.#triggerUmengEvent(EventId.Sport_clicks);
        this.#triggerFirebaseCustomEvent(EventId.Sport_clicks);
        this.#triggerCustomEvent('click', CustomEventKey.Sport);
    }

    static sportBannerViewAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        this.#triggerUmengEvent(EventId.Sport_Banner_views, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(EventId.Sport_Banner_views, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('view', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });
    }

    static sportBannerClickAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        this.#triggerUmengEvent(EventId.Sport_Banner_clicks, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(EventId.Sport_Banner_clicks, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('click', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });
    }

    // ============================== Sport Details ==============================
    static sportDetailsViewsAnalytics = () => {
        this.#triggerUmengEvent(EventId.SportDetails_views);
        this.#triggerFirebaseCustomEvent(EventId.SportDetails_views);
        this.#triggerCustomEvent('view', CustomEventKey.SportDetails);
    }

    static sportDetailsPlaysTimesAnalytics = (category: 'live' | 'animation') => {
        this.#triggerUmengEvent(EventId.SportDetails_plays_times, {
            'live_category': category === 'live' ? '视频直播' : '动画直播',
        });
        this.#triggerFirebaseCustomEvent(EventId.SportDetails_plays_times, {
            'live_category': category === 'live' ? '视频直播' : '动画直播',
        });
        this.#triggerCustomEvent('view', CustomEventKey.SportDetails_Play_Times, {
            params: {
                desc_1: category,
            }
        });
    }

    static sportDetailsVipPopupTimesAnalytics = () => {
        this.#triggerUmengEvent(EventId.SportDetails_vip_popup_times);
        this.#triggerFirebaseCustomEvent(EventId.SportDetails_vip_popup_times);
        this.#triggerCustomEvent('view', CustomEventKey.SportDetails_Vip_Popup);
    }

    static sportDetailsVipPopupClicksAnalytics = (category: 'pay' | 'invite') => {
        this.#triggerUmengEvent(EventId.SportDetails_vip_clicks, {
            'click_category': category === 'pay' ? '购买' : '邀请',
        });
        this.#triggerFirebaseCustomEvent(EventId.SportDetails_vip_clicks, {
            'click_category': category === 'pay' ? '购买' : '邀请',
        });
        this.#triggerCustomEvent('click', CustomEventKey.SportDetails_Vip_Popup, {
            params: {
                desc_1: category,
            }
        });
    }


    // ============================== Playlist ==============================
    static playlistViewsAnalytics = () => {
        this.#triggerUmengEvent(EventId.Playlist_views);
        this.#triggerFirebaseCustomEvent(EventId.Playlist_views);
        this.#triggerCustomEvent('view', CustomEventKey.Playlist);
    }

    static playlistClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        this.#triggerUmengEvent(EventId.Playlist_clicks, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        this.#triggerFirebaseCustomEvent(EventId.Playlist_clicks, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        this.#triggerCustomEvent('click', CustomEventKey.Playlist, {
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });
    }

    static playlistTopicsViewsAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        this.#triggerUmengEvent(EventId.Playlist_topics_views, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        this.#triggerFirebaseCustomEvent(EventId.Playlist_topics_views, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        this.#triggerCustomEvent('view', CustomEventKey.Playlist_Topics, {
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });
    }

    static playlistTopicsClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        this.#triggerUmengEvent(EventId.Playlist_topics_clicks, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        this.#triggerFirebaseCustomEvent(EventId.Playlist_topics_clicks, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        this.#triggerCustomEvent('click', CustomEventKey.Playlist_Topics, {
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });
    }


    // ============================== User Center ==============================
    static userCenterLoginSuccessTimesAnalytics = () => {
        this.#triggerUmengEvent(EventId.UserCenter_login_success_times);
        this.#triggerFirebaseCustomEvent(EventId.UserCenter_login_success_times);
        this.#triggerCustomEvent('view', CustomEventKey.UserCenter_Login_Success_Times);
    }

    static userCenterVipLoginSuccessTimesAnalytics = () => {
        this.#triggerUmengEvent(EventId.UserCenter_vip_login_success_times);
        this.#triggerFirebaseCustomEvent(EventId.UserCenter_vip_login_success_times);
        this.#triggerCustomEvent('view', CustomEventKey.UserCenter_Vip_Login_Success_Times);
    }

    static userCenterVipPayViewsAnalytics = () => {
        this.#triggerUmengEvent(EventId.UserCenter_pay_vip_views);
        this.#triggerFirebaseCustomEvent(EventId.UserCenter_pay_vip_views);
        this.#triggerCustomEvent('view', CustomEventKey.UserCenter_View_Vip, {
            params: {
                desc_1: 'pay',
            }
        });
    }

    static userCenterVipInviteViewsAnalytics = () => {
        this.#triggerUmengEvent(EventId.UserCenter_invites_vip_views);
        this.#triggerFirebaseCustomEvent(EventId.UserCenter_invites_vip_views);
        this.#triggerCustomEvent('view', CustomEventKey.UserCenter_View_Vip, {
            params: {
                desc_1: 'invite',
            }
        });
    }


    // ============================== Search ==============================
    static searchResultViewsAnalytics = () => {
        this.#triggerUmengEvent(EventId.Search_result_views);
        this.#triggerFirebaseCustomEvent(EventId.Search_result_views);
        this.#triggerCustomEvent('view', CustomEventKey.Search_Result);
    }

    static searchResultClicksAnalytics = () => {
        this.#triggerUmengEvent(EventId.Search_result_clicks);
        this.#triggerFirebaseCustomEvent(EventId.Search_result_clicks);
        this.#triggerCustomEvent('click', CustomEventKey.Search_Result);
    }

    static searchKeywordAnalytics = (keyword: string) => {
        this.#triggerUmengEvent(EventId.Search_keyword, {
            'keyword': keyword,
        });
        this.#triggerFirebaseCustomEvent(EventId.Search_keyword, {
            'keyword': keyword,
        });
        this.#triggerCustomEvent('view', CustomEventKey.Search_Keyword, {
            params: {
                desc_1: keyword,
            }
        });
    }


    // ============================== Catalog ==============================
    static catalogViewsAnalytics = ({ category_id, category_name, isXmode = false }: { category_id: string, category_name: string, isXmode?: boolean }) => {
        let evendId: EventId = EventId.Catalog_views;

        if (isXmode) {
            evendId = EventId.Catalog_x_views;
        }

        this.#triggerUmengEvent(evendId, {
            'category_id': category_id,
            'category_name': category_name,
        });
        this.#triggerFirebaseCustomEvent(evendId, {
            'category_id': category_id,
            'category_name': category_name,
        });
        this.#triggerCustomEvent('view', isXmode ? CustomEventKey.CatalogX : CustomEventKey.Catalog, {
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });
    }

    static catalogClicksAnalytics = ({ category_id, category_name, isXmode = false }: { category_id: string, category_name: string, isXmode?: boolean }) => {
        let evendId: EventId = EventId.Catalog_clicks;

        if (isXmode) {
            evendId = EventId.Catalog_x_clicks;
        }

        this.#triggerUmengEvent(evendId, {
            'category_id': category_id,
            'category_name': category_name,
        });
        this.#triggerFirebaseCustomEvent(evendId, {
            'category_id': category_id,
            'category_name': category_name,
        });
        this.#triggerCustomEvent('click', isXmode ? CustomEventKey.CatalogX : CustomEventKey.Catalog, {
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });
    }


    // ============================== Plays ==============================
    static playsViewsAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: EventId = EventId.Plays_views;

        if (isXmode) {
            eventId = EventId.Plays_X_views;
        }

        this.#triggerUmengEvent(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        this.#triggerFirebaseCustomEvent(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        this.#triggerCustomEvent('view', isXmode
            ? CustomEventKey.PlaysX
            : CustomEventKey.Plays,
            {
                params: {
                    desc_1: 'vod.id:' + vod_id,
                    desc_2: 'vod.name:' + vod_name,
                }
            },
        );
    }

    static playsPlaysTimesAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: EventId = EventId.Plays_plays_times;

        if (isXmode) {
            eventId = EventId.Plays_X_plays_times;
        }

        this.#triggerUmengEvent(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        this.#triggerFirebaseCustomEvent(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        this.#triggerCustomEvent('view', isXmode
            ? CustomEventKey.PlaysX_Plays_Times
            : CustomEventKey.Plays_Plays_Times,
            {
                params: {
                    desc_1: 'vod.id:' + vod_id,
                    desc_2: 'vod.name:' + vod_name,
                }
            },
        );
    }

    static playsShareClicksAnalytics = () => {
        this.#triggerUmengEvent(EventId.Plays_share_clicks);
        this.#triggerFirebaseCustomEvent(EventId.Plays_share_clicks);
        this.#triggerCustomEvent('click', CustomEventKey.Plays_Share);
    }

    static playsAdsViewAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title = EventId.Plays_ads_views,
        ads_name,
    }: {
        ads_slot_id?: number,
        ads_id?: number,
        ads_title?: string,
        ads_name?: string,
    }) => {
        this.#triggerUmengEvent(EventId.Plays_ads_views);
        this.#triggerFirebaseCustomEvent(EventId.Plays_ads_views);
        this.#triggerCustomEvent('view', ads_title, {
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });
    }

    static playsAdsClickAnalytics = ({
        url,
        ads_slot_id,
        ads_id,
        ads_title = EventId.Plays_ads_clicks,
        ads_name,
    }: {
        url?: string
        ads_slot_id?: number,
        ads_id?: number,
        ads_title?: string,
        ads_name?: string,
    } = {}) => {
        let params = {}

        if (url === undefined || url === '') {
            params = {
                'url': 'none',
            }
        } else {
            params = {
                'url': url,
            }
        }

        this.#triggerUmengEvent(EventId.Plays_ads_clicks, params);
        this.#triggerFirebaseCustomEvent(EventId.Plays_ads_clicks, params);
        this.#triggerCustomEvent('click', ads_title, {
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: url ?? 'none',
            }
        });
    }


    // ============================== Video PLayer ==============================
    static videoPlayerBannerViewAnalytics = ({
        playerType,
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        playerType: 'normal' | 'xVideo' | 'sport',
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        this.#triggerUmengEvent(EventId.VideoPlayer_Banner_views, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(EventId.VideoPlayer_Banner_views, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('view', ads_title, {
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });
    }

    static videoPlayerBannerClickAnalytics = ({
        playerType,
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        playerType: 'normal' | 'xVideo' | 'sport',
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        this.#triggerUmengEvent(EventId.VideoPlayer_Banner_clicks, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(EventId.VideoPlayer_Banner_clicks, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('click', ads_title, {
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });
    }


    // ============================== Profile ==============================
    static profileBannerViewAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        this.#triggerUmengEvent(EventId.Profile_Banner_views, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(EventId.Profile_Banner_views, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('view', ads_title, {
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });
    }

    static profileBannerClickAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        this.#triggerUmengEvent(EventId.Profile_Banner_clicks, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(EventId.Profile_Banner_clicks, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('click', ads_title, {
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });
    }
}
