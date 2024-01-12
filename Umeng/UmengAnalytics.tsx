import AnalyticsUtil from './AnalyticsUtil';

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

export default class UmengAnalytics {
    static showLog: boolean = false;

    // ============================== Home ==============================
    static homeTabViewsAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Home_views, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Home_views);
    }

    static homeTabClicksAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Home_clicks, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Home_clicks);
    }

    static homeTabCarouselViewAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Home_Carousel_views, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Home_Carousel_views);
    }

    static homeTabCarouselClickAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Home_Carousel_clicks, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Home_Carousel_clicks);
    }

    static homeTabBannerViewAnalytics = ({ tab_id, tab_name, ads_id, ads_name }: { tab_id: string, tab_name: string, ads_id: string, ads_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Home_Banner_views, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Home_Banner_views);
    }

    static homeTabBannerClickAnalytics = ({ tab_id, tab_name, ads_id, ads_name }: { tab_id: string, tab_name: string, ads_id: string, ads_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Home_Banner_clicks, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_name,
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

        if (this.showLog) console.log('trigger event id:', evendId);
    }

    static watchAnytimeVideoViewTimesAnalytics = ({ userId, vod_id, isXmode }: { userId: string, vod_id: string, isXmode?: boolean }) => {
        let evendId: string = EventId.WatchAnytime_video_view_times;

        if (isXmode) {
            evendId = EventId.WatchAnytime_x_video_view_times;
        }

        // add prefix
        if (userId !== '') {
            userId = 'userId-' + userId;
        } else {
            userId = 'guest';
        }

        AnalyticsUtil.onEventWithMap(evendId, {
            [userId]: vod_id,
        });

        if (this.showLog) console.log('trigger event id:', evendId);
    }

    static watchAnytimeVideoClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.WatchAnytime_video_clicks, {});

        if (this.showLog) console.log('trigger event id:', EventId.WatchAnytime_video_clicks);
    }

    static watchAnytimePlaylistClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.WatchAnytime_playlist_clicks, {});

        if (this.showLog) console.log('trigger event id:', EventId.WatchAnytime_playlist_clicks);
    }

    static watchAnytimeAdsViewAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.WatchAnytime_Ads_views, {});

        if (this.showLog) console.log('trigger event id:', EventId.WatchAnytime_Ads_views);
    }

    static watchAnytimeAdsClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.WatchAnytime_Ads_clicks, {});

        if (this.showLog) console.log('trigger event id:', EventId.WatchAnytime_Ads_clicks);
    }


    // ============================== Sport ==============================
    static sportViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Sport_views, {});

        if (this.showLog) console.log('trigger event id:', EventId.Sport_views);
    }

    static sportClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Sport_clicks, {});

        if (this.showLog) console.log('trigger event id:', EventId.Sport_clicks);
    }

    static sportBannerViewAnalytics = ({ ads_id, ads_name }: { ads_id: string, ads_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Sport_Banner_views, {
            'ads_id': ads_id,
            'ads_name': ads_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Sport_Banner_views);
    }

    static sportBannerClickAnalytics = ({ ads_id, ads_name }: { ads_id: string, ads_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Sport_Banner_clicks, {
            'ads_id': ads_id,
            'ads_name': ads_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Sport_Banner_clicks);
    }

    // ============================== Sport Details ==============================
    static sportDetailsViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.SportDetails_views, {});

        if (this.showLog) console.log('trigger event id:', EventId.SportDetails_views);
    }

    static sportDetailsPlaysTimesAnalytics = (category: 'live' | 'animation') => {
        AnalyticsUtil.onEventWithMap(EventId.SportDetails_plays_times, {
            'live_category': category === 'live' ? '视频直播' : '动画直播',
        });

        if (this.showLog) console.log('trigger event id:', EventId.SportDetails_plays_times);
    }

    static sportDetailsVipPopupTimesAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.SportDetails_vip_popup_times, {});

        if (this.showLog) console.log('trigger event id:', EventId.SportDetails_vip_popup_times);
    }

    static sportDetailsVipPopupClicksAnalytics = (category: 'pay' | 'invite') => {
        AnalyticsUtil.onEventWithMap(EventId.SportDetails_vip_clicks, {
            'click_category': category === 'pay' ? '购买' : '邀请',
        });

        if (this.showLog) console.log('trigger event id:', EventId.SportDetails_vip_clicks);
    }


    // ============================== Playlist ==============================
    static playlistViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Playlist_views, {});

        if (this.showLog) console.log('trigger event id:', EventId.Playlist_views);
    }

    static playlistClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Playlist_clicks, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Playlist_clicks);
    }

    static playlistTopicsViewsAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Playlist_topics_views, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Playlist_topics_views);
    }

    static playlistTopicsClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Playlist_topics_clicks, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Playlist_topics_clicks);
    }


    // ============================== User Center ==============================
    static userCenterLoginSuccessTimesAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.UserCenter_login_success_times, {});

        if (this.showLog) console.log('trigger event id:', EventId.UserCenter_login_success_times);
    }

    static userCenterVipLoginSuccessTimesAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.UserCenter_vip_login_success_times, {});

        if (this.showLog) console.log('trigger event id:', EventId.UserCenter_vip_login_success_times);
    }

    static userCenterVipPayViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.UserCenter_pay_vip_views, {});

        if (this.showLog) console.log('trigger event id:', EventId.UserCenter_pay_vip_views);
    }

    static userCenterVipInviteViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.UserCenter_invites_vip_views, {});

        if (this.showLog) console.log('trigger event id:', EventId.UserCenter_invites_vip_views);
    }


    // ============================== Search ==============================
    static searchResultViewsAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Search_result_views, {});

        if (this.showLog) console.log('trigger event id:', EventId.Search_result_views);
    }

    static searchResultClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Search_result_clicks, {});

        if (this.showLog) console.log('trigger event id:', EventId.Search_result_clicks);
    }

    static searchKeywordAnalytics = (keyword: string) => {
        AnalyticsUtil.onEventWithMap(EventId.Search_keyword, {
            'keyword': keyword,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Search_keyword);
    }


    // ============================== Catalog ==============================
    static catalogViewsAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Catalog_views, {
            'category_id': category_id,
            'category_name': category_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Catalog_views);
    }

    static catalogClicksAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Catalog_clicks, {
            'category_id': category_id,
            'category_name': category_name,
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

        if (this.showLog) console.log('trigger event id:', eventId);
    }

    static playsShareClicksAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Plays_share_clicks, {});

        if (this.showLog) console.log('trigger event id:', EventId.Plays_share_clicks);
    }

    static playsAdsViewAnalytics = () => {
        AnalyticsUtil.onEventWithMap(EventId.Plays_ads_views, {});

        if (this.showLog) console.log('trigger event id:', EventId.Plays_ads_views);
    }

    static playsAdsClickAnalytics = ({ url }: { url?: string } = {}) => {
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

        if (this.showLog) console.log('trigger event id:', EventId.Plays_ads_clicks);
    }


    // ============================== Video PLayer ==============================
    static videoPlayerBannerViewAnalytics = ({ playerType, ads_id, ads_name }: { playerType: 'normal' | 'xVideo' | 'sport', ads_id: string, ads_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.VideoPlayer_Banner_views, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.VideoPlayer_Banner_views);
    }

    static videoPlayerBannerClickAnalytics = ({ playerType, ads_id, ads_name }: { playerType: 'normal' | 'xVideo' | 'sport', ads_id: string, ads_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.VideoPlayer_Banner_clicks, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.VideoPlayer_Banner_clicks);
    }


    // ============================== Profile ==============================
    static profileBannerViewAnalytics = ({ ads_id, ads_name }: { ads_id: string, ads_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Profile_Banner_views, {
            'ads_id': ads_id,
            'ads_name': ads_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Profile_Banner_views);
    }

    static profileBannerClickAnalytics = ({ ads_id, ads_name }: { ads_id: string, ads_name: string }) => {
        AnalyticsUtil.onEventWithMap(EventId.Profile_Banner_clicks, {
            'ads_id': ads_id,
            'ads_name': ads_name,
        });

        if (this.showLog) console.log('trigger event id:', EventId.Profile_Banner_clicks);
    }
}
