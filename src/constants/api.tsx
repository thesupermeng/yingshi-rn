export class CEndpoint {
    // ============================== apps ==============================
    static appGetLocalIp = 'https://geolocation-db.com/json';
    static appGetBottomNav = 'nav/v1/bottomtabs';
    static appPostLocation = 'location/v1/info';

    static userPostSigninup = 'users/v1/signinup';
    static userGetDetails = 'users/v1/me';
    static userPostUsername = 'users/v1/update';
    static userGetCountries = 'country/v1/country';

    static homeGetNav = 'nav/v1/navItems';
    static homeGetPages = 'page/v2/typepage';

    static playlistGetTopic = 'topic/v1/topic';
    static playlistGetTopicIosTmp = 'topic/v1/topic/temp';

    static vodGetTopicType = 'type/v1/type';
    static vodGetDetail = 'vod/v3/vod/detail';
    static vodGetXDetail = 'svod/v1/vod/detail';
    static vodGetList = 'vod/v3/vod';
    static vodGetXList = 'svod/v1/vod';
    static vodGetReviewDetail = 'vod/v1/vod/reviewdetail';
    static vodGetAdsSlot = 'ads/v1/slot';

    static minivodGetList = 'miniVod/v2/miniVod';
    static minivodGetXList = 'miniSVod/v1/miniSVod';
    static minivodGetCollections = (id: number) => `miniVod/v2/collections/${id}`;

    static feedbackPost = 'feedback/v1/submit';

    static productGetList = 'products/v1/products';
    static nativeProductGetList = 'products/v2/nativeProducts';
    static productPostValidateReceiptIos = 'validate/v1/iosreceipt';
    static productPostValidateReceiptAndroid = 'validate/v1/androidreceipt';
    static productGetFinzfTransaction = 'finzf/v1/transactions';
    static productPostFinzfOrder = 'finzf/v1/order';

    static bannerAd = 'ads/v1/slot';
    static bannerEventAds = 'ads/v1/events';

    static eventPost = 'track/v1/statsViewClick';

    static splashApi = 'intro/v1/navigate';
}
