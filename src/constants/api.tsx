export class CEndpoint {
    // ============================== apps ==============================
    static appGetLocalIp = 'https://geolocation-db.com/json';
    static appGetBottomNav = 'nav/v1/bottomtabs';
    static appPostLocation = 'location/v1/info';

    static userPostSigninup = 'users/v2/signinup';
    static userGetDetails = 'users/v1/me';
    static userPostUsername = 'users/v1/update';
    static userGetCountries = 'country/v1/country';

    static homeGetNav = 'nav/v1/navItems';
    static homeGetPages = 'page/v2/typepage';

    static playlistGetTopic = 'topic/v1/topic';
    static playlistGetTopicDetail = 'topic/v1/topic/detail';
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

    static feedbackPost = 'feedback/v2/submit';

    static productGetList = 'products/v1/products';
    static nativeProductGetList = 'products/v2/nativeProducts';
    static productPostAndroidSubscription = 'android/v1/subscription';
    static productPostAndroidIAP = 'android/v1/onetime';
    static productPostValidateReceiptIos = 'validate/v1/iosreceipt';
    static productPostValidateReceiptAndroid = 'validate/v1/androidreceipt';
    static productGetFinzfTransaction = 'finzf/v1/transactions';
    static productPostFinzfOrder = 'finzf/v1/order';

    static bannerAd = 'ads/v1/slot';
    static bannerEventAds = 'ads/v1/events';

    static eventPost = 'track/v1/statsViewClick';

    static splashApi = 'intro/v1/navigate';

    static guestLoginApi = 'users/v2/guestsigninup';

    static chatSocket = 'https://so.finapp.chat';
    static liveSportsChats = 'liveSports/v1/notice';
}
