import AnalyticsUtil from '../../Umeng/AnalyticsUtil';

enum EventId {
    // Home
    Home_views = 'Home-views',
    Home_clicks = 'Home-clicks',

    // WatchAnytime
    WatchAnytime_views = 'WatchAnytime-Views',
    WatchAnytime_playlist_clicks = 'WatchAnytime-playlist_clicks',
    WatchAnytime_video_clicks = 'WatchAnytime-video_clicks',

    // Sport
    Sport_views = 'Sport-views',
    Sport_clicks = 'Sport-clicks',

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
    Plays_share_clicks = 'Play-share_clicks',
}

const useAnalytics = ({ showLog }: { showLog: boolean } = { showLog: true }) => {

    // ============================== Home ==============================
    const homeTabViewsAnalytics = (tabName: string) => {
        AnalyticsUtil.onEventWithMap(EventId.Home_views, {
            'category': tabName,
        });
    }

    const homeTabClicksAnalytics = (tabName: string) => {
        AnalyticsUtil.onEventWithMap(EventId.Home_clicks, {
            'category': tabName,
        });
    }


    // ============================== WatchAnytime ==============================
    const watchAnytimeViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.WatchAnytime_views, {});
    }

    const watchAnytimeVideoClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.WatchAnytime_video_clicks, {});
    }

    const watchAnytimePlaylistClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.WatchAnytime_playlist_clicks, {});
    }


    // ============================== Sport ==============================
    const sportViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Sport_views, {});
    }

    const sportClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Sport_clicks, {});
    }


    // ============================== Sport Details ==============================
    const sportDetailsViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.SportDetails_views, {});
    }

    const sportDetailsPlaysTimesAnalytics = (category: 'live' | 'animation') => {
        AnalyticsUtil.onEventWithMap(EventId.SportDetails_plays_times, {
            'live_category': category === 'live' ? '视频直播' : '动画直播',
        });
    }

    const sportDetailsVipPopupTimesAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.SportDetails_vip_popup_times, {});
    }

    const sportDetailsVipPopupClicksAnalytics = (category: 'pay' | 'invite') => {
        AnalyticsUtil.onEventWithMap(EventId.SportDetails_vip_clicks, {
            'click_category': category === 'pay' ? '购买' : '邀请',
        });
    }


    // ============================== Playlist ==============================
    const playlistViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Playlist_views, {});
    }

    const playlistClickAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Playlist_clicks, {});
    }

    const playlistTopicsViewsAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Playlist_topics_views, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
    }

    const playlistTopicsClickAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Playlist_topics_clicks, {});
    }


    // ============================== User Center ==============================
    const userCenterLoginSuccessTimesAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.UserCenter_login_success_times, {});
    }

    const userCenterVipLoginSuccessTimesAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.UserCenter_vip_login_success_times, {});
    }

    const userCenterVipPayViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.UserCenter_pay_vip_views, {});
    }

    const userCenterVipInviteViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.UserCenter_invites_vip_views);
    }


    // ============================== Search ==============================
    const searchResultViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Search_result_views, {});
    }

    const searchResultClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Search_result_clicks, {});
    }

    const searchKeywordAnalytics = (keyword: string) => {
        AnalyticsUtil.onEventWithMap(EventId.Search_keyword, {
            'keyword': keyword,
        });
    }


    // ============================== Catalog ==============================
    const catalogViewsAnalytics = (category: string) => {
        AnalyticsUtil.onEventWithMap(EventId.Catalog_views, {
            'category': category,
        });
    }

    const catalogClicksAnalytics = (category: string) => {
        AnalyticsUtil.onEventWithMap(EventId.Catalog_clicks, {
            'category': category,
        });
    }


    // ============================== Plays ==============================
    const playsViewsAnalytics = ({ vod_id, vod_name }: { vod_id: string, vod_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Plays_views, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
    }

    const playsPlaysTimesAnalytics = ({ vod_id, vod_name }: { vod_id: string, vod_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Plays_plays_times, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
    }

    const playsShareClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Plays_share_clicks, {});
    }


    return {
        // Home
        homeTabViewsAnalytics,
        homeTabClicksAnalytics,
        // WatchAnytime
        watchAnytimeViewsAnalytics,
        watchAnytimeVideoClicksAnalytics,
        watchAnytimePlaylistClicksAnalytics,
        // Sport
        sportViewsAnalytics,
        sportClicksAnalytics,
        // Sport Details
        sportDetailsViewsAnalytics,
        sportDetailsPlaysTimesAnalytics,
        sportDetailsVipPopupTimesAnalytics,
        sportDetailsVipPopupClicksAnalytics,
        // Playlist
        playlistViewsAnalytics,
        playlistClickAnalytics,
        playlistTopicsViewsAnalytics,
        playlistTopicsClickAnalytics,
        // User Center
        userCenterLoginSuccessTimesAnalytics,
        userCenterVipLoginSuccessTimesAnalytics,
        userCenterVipPayViewsAnalytics,
        userCenterVipInviteViewsAnalytics,
        // Search
        searchResultViewsAnalytics,
        searchResultClicksAnalytics,
        searchKeywordAnalytics,
        // Catalog
        catalogViewsAnalytics,
        catalogClicksAnalytics,
        // Plays
        playsViewsAnalytics,
        playsPlaysTimesAnalytics,
        playsShareClicksAnalytics,
    };
}

export default useAnalytics;