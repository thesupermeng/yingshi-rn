import AnalyticsUtil from './AnalyticsUtil';
import { CustomEventAnalytic } from './EventAnalytic';

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

    // Plays
    Plays = 'play',
    Plays_Plays_Times = 'play_plays_times',
    Plays_Share = 'Play_share',

    PlaysX = 'play_x',
    PlaysX_Plays_Times = 'play_x_plays_times',
}

export default class UmengAnalytics {
    static showLog: boolean = true;

    // ============================== Home ==============================
    static homeTabViewsAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Home_views, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: CustomEventKey.Home,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.Home_views);
    }

    static homeTabClicksAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Home_clicks, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: CustomEventKey.Home,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.Home_clicks);
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
        AnalyticsUtil.onEventWithMap(EventId.Home_Carousel_views, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.Home_Carousel_views);
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
        AnalyticsUtil.onEventWithMap(EventId.Home_Carousel_clicks, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.Home_Carousel_clicks);
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
        AnalyticsUtil.onEventWithMap(EventId.Home_Banner_views, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.Home_Banner_views);
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
        AnalyticsUtil.onEventWithMap(EventId.Home_Banner_clicks, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.Home_Banner_clicks);
    }

    // ============================== WatchAnytime ==============================
    static watchAnytimeViewsAnalytics = ({ isXmode = false }: { isXmode?: boolean } = { isXmode: false }) => {
        let evendId: string = EventId.WatchAnytime_views;

        if (isXmode) {
            evendId = EventId.WatchAnytime_x_views;
        }

        AnalyticsUtil.onEventWithMap(evendId, {});
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: isXmode ? CustomEventKey.WatchAnytimeX : CustomEventKey.WatchAnytime,
        });

        if (this.showLog) console.log('trigger event id:', evendId);
    }

    static watchAnytimeVideoViewTimesAnalytics = ({ userId, vod_id, isXmode }: { userId: string, vod_id: string, isXmode?: boolean }) => {
        let evendId: string = EventId.WatchAnytime_video_view_times;

        if (isXmode) {
            evendId = EventId.WatchAnytime_x_video_view_times;
        }

        let prefixUserId = '';

        // add prefix
        if (userId !== '') {
            prefixUserId = 'userId-' + userId;
        } else {
            prefixUserId = 'guest';
        }

        AnalyticsUtil.onEventWithMap(evendId, {
            [prefixUserId]: vod_id,
        });
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: isXmode ? CustomEventKey.WatchAnytimeX_Play_Times : CustomEventKey.WatchAnytime_Play_Times,
            params: {
                desc_1: 'user.id:' + userId,
                // desc_2: vod_id,
            }
        });

        if (this.showLog) console.log('trigger event id:', evendId);
    }

    static watchAnytimeVideoClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.WatchAnytime_video_clicks, {});
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: CustomEventKey.WatchAnytime_View_Video,
        });

        if (this.showLog) console.log('trigger event id:', EventId.WatchAnytime_video_clicks);
    }

    static watchAnytimePlaylistClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.WatchAnytime_playlist_clicks, {});
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: CustomEventKey.WatchAnytime_View_Playlist,
        });

        if (this.showLog) console.log('trigger event id:', EventId.WatchAnytime_playlist_clicks);
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
        AnalyticsUtil.onEventWithMap(EventId.WatchAnytime_Ads_views, {});
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', EventId.WatchAnytime_Ads_views);
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
        AnalyticsUtil.onEventWithMap(EventId.WatchAnytime_Ads_clicks, {});
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', EventId.WatchAnytime_Ads_clicks);
    }


    // ============================== Sport ==============================
    static sportViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Sport_views, {});
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: CustomEventKey.Sport,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Sport_views);
    }

    static sportClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Sport_clicks, {});
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: CustomEventKey.Sport,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Sport_clicks);
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
        AnalyticsUtil.onEventWithMap(EventId.Sport_Banner_views, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Sport_Banner_views);
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
        AnalyticsUtil.onEventWithMap(EventId.Sport_Banner_clicks, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Sport_Banner_clicks);
    }

    // ============================== Sport Details ==============================
    static sportDetailsViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.SportDetails_views, {});
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: CustomEventKey.SportDetails,
        });

        if (this.showLog) console.log('trigger event id:', EventId.SportDetails_views);
    }

    static sportDetailsPlaysTimesAnalytics = (category: 'live' | 'animation') => {
        AnalyticsUtil.onEventWithMap(EventId.SportDetails_plays_times, {
            'live_category': category === 'live' ? '视频直播' : '动画直播',
        });
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: CustomEventKey.SportDetails_Play_Times,
            params: {
                desc_1: category,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.SportDetails_plays_times);
    }

    static sportDetailsVipPopupTimesAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.SportDetails_vip_popup_times, {});
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: CustomEventKey.SportDetails_Vip_Popup,
        });

        if (this.showLog) console.log('trigger event id:', EventId.SportDetails_vip_popup_times);
    }

    static sportDetailsVipPopupClicksAnalytics = (category: 'pay' | 'invite') => {
        AnalyticsUtil.onEventWithMap(EventId.SportDetails_vip_clicks, {
            'click_category': category === 'pay' ? '购买' : '邀请',
        });
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: CustomEventKey.SportDetails_Vip_Popup,
            params: {
                desc_1: category,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.SportDetails_vip_clicks);
    }


    // ============================== Playlist ==============================
    static playlistViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Playlist_views, {});
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: CustomEventKey.Playlist,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Playlist_views);
    }

    static playlistClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Playlist_clicks, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: CustomEventKey.Playlist,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.Playlist_clicks);
    }

    static playlistTopicsViewsAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Playlist_topics_views, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: CustomEventKey.Playlist_Topics,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.Playlist_topics_views);
    }

    static playlistTopicsClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Playlist_topics_clicks, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: CustomEventKey.Playlist_Topics,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.Playlist_topics_clicks);
    }


    // ============================== User Center ==============================
    static userCenterLoginSuccessTimesAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.UserCenter_login_success_times, {});
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: CustomEventKey.UserCenter_Login_Success_Times,
        });

        if (this.showLog) console.log('trigger event id:', EventId.UserCenter_login_success_times);
    }

    static userCenterVipLoginSuccessTimesAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.UserCenter_vip_login_success_times, {});
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: CustomEventKey.UserCenter_Vip_Login_Success_Times,
        });

        if (this.showLog) console.log('trigger event id:', EventId.UserCenter_vip_login_success_times);
    }

    static userCenterVipPayViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.UserCenter_pay_vip_views, {});
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: CustomEventKey.UserCenter_View_Vip,
            params: {
                desc_1: 'pay',
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.UserCenter_pay_vip_views);
    }

    static userCenterVipInviteViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.UserCenter_invites_vip_views, {});
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: CustomEventKey.UserCenter_View_Vip,
            params: {
                desc_1: 'invite',
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.UserCenter_invites_vip_views);
    }


    // ============================== Search ==============================
    static searchResultViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Search_result_views, {});
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: CustomEventKey.Search_Result,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Search_result_views);
    }

    static searchResultClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Search_result_clicks, {});
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: CustomEventKey.Search_Result,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Search_result_clicks);
    }

    static searchKeywordAnalytics = (keyword: string) => {
        AnalyticsUtil.onEventWithMap(EventId.Search_keyword, {
            'keyword': keyword,
        });
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: CustomEventKey.Search_Keyword,
            params: {
                desc_1: keyword,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.Search_keyword);
    }


    // ============================== Catalog ==============================
    static catalogViewsAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Catalog_views, {
            'category_id': category_id,
            'category_name': category_name,
        });
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: CustomEventKey.Catalog,
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.Catalog_views);
    }

    static catalogClicksAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Catalog_clicks, {
            'category_id': category_id,
            'category_name': category_name,
        });
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: CustomEventKey.Catalog,
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.Catalog_clicks);
    }


    // ============================== Plays ==============================
    static playsViewsAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: string = EventId.Plays_views;

        if (isXmode) {
            eventId = EventId.Plays_X_views;
        }

        AnalyticsUtil.onEventWithMap(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: isXmode ? CustomEventKey.PlaysX : CustomEventKey.Plays,
            params: {
                desc_1: 'vod.id:' + vod_id,
                desc_2: 'vod.name:' + vod_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', eventId);
    }

    static playsPlaysTimesAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: string = EventId.Plays_plays_times;

        if (isXmode) {
            eventId = EventId.Plays_X_plays_times;
        }

        AnalyticsUtil.onEventWithMap(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: isXmode ? CustomEventKey.PlaysX_Plays_Times : CustomEventKey.Plays_Plays_Times,
            params: {
                desc_1: 'vod.id:' + vod_id,
                desc_2: 'vod.name:' + vod_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', eventId);
    }

    static playsShareClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Plays_share_clicks, {});
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: CustomEventKey.Plays_Share,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Plays_share_clicks);
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
        AnalyticsUtil.onEventWithMap(EventId.Plays_ads_views, {});
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Plays_ads_views);
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

        AnalyticsUtil.onEventWithMap(EventId.Plays_ads_clicks, params);
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: url ?? 'none',
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.Plays_ads_clicks);
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
        AnalyticsUtil.onEventWithMap(EventId.VideoPlayer_Banner_views, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.VideoPlayer_Banner_views);
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
        AnalyticsUtil.onEventWithMap(EventId.VideoPlayer_Banner_clicks, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });

        if (this.showLog) console.log('trigger event id:', EventId.VideoPlayer_Banner_clicks);
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
        AnalyticsUtil.onEventWithMap(EventId.Profile_Banner_views, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        CustomEventAnalytic.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Profile_Banner_views);
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
        AnalyticsUtil.onEventWithMap(EventId.Profile_Banner_clicks, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        CustomEventAnalytic.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Profile_Banner_clicks);
    }
}
