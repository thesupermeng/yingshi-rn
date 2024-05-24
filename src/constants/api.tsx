export class CEndpoint {
    // ============================== apps ==============================
    static appGetLocalIp = 'https://geolocation-db.com/json';
    static appGetBottomNav = 'yindu/v1/bottomtabs';
    static appPostLocation = 'yindu/v1/location';

    static userPostSigninup = 'users/v2/signinup';
    static userGetDetails = 'users/v1/me';
    static userPostUsername = 'users/v1/update';
    static userGetCountries = 'country/v1/country';

    static homeGetNav = 'nav/v1/navItems';
    static homeGetPages = 'yindu/v1/typepage';

    static playlistGetTopic = 'topic/v1/topic';
    static playlistGetTopicDetail = 'topic/v1/topic/detail';
    static playlistGetTopicIosTmp = 'topic/v1/topic/temp';

    static vodGetTopicType = 'yindu/v1/type';
    static vodGetDetail = 'yindu/v1/vod/detail';
    static vodGetXDetail = 'yindu/v1/svod/detail';
    static vodGetList = 'yindu/v1/vod';
    static vodGetXList = 'yindu/v1/svod';
    static vodGetReviewDetail = 'vod/v1/vod/reviewdetail';
    static vodGetAdsSlot = 'ads/v1/slot';
    static vodGetXCategories = 'yindu/v1/svod/categories';

    static minivodGetList = 'yindu/v1/miniVod';
    static minivodGetXList = 'yindu/v1/miniSVod';
    static minivodGetCollections = (id: number) => `miniVod/v2/collections/${id}`;

    static feedbackPost = 'yindu/v1/feedback';

    static productGetList = 'products/v1/products';
    static nativeProductGetList = 'products/v3/nativeProducts';
    static productPostAndroidSubscription = 'android/v1/subscription';
    static productPostAndroidIAP = 'android/v1/onetime';
    static productPostValidateReceiptIos = 'validate/v1/iosreceipt';
    static productPostValidateReceiptAndroid = 'validate/v1/androidreceipt';
    static productGetFinzfTransaction = 'finzf/v1/transactions';
    static productPostFinzfOrder = 'finzf/v2/order';

    static bannerAd = 'ads/v2/slot';
    static bannerEventAds = 'ads/v1/events';

    static eventPost = 'track/v1/statsViewClick';

    static splashApi = 'intro/v1/navigate';

    static guestLoginApi = 'users/v2/guestsigninup';

    static chatSocket = 'https://so.finapp.chat';
    static liveSportsChats = 'liveSports/v1/notice';

    static adsGetSlot = 'yindu/v1/ads';

    static paymentCallbackRedirectDev = 'https://test.yingshi.tv/payment/yingshiapp';
    static paymentCallbackRedirectProd = 'https://yingshi.tv/payment/yingshiapp';
}
