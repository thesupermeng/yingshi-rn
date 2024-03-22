

class BasketballPromotion {
    static moviesLarge = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
export class MVCountry {
    
    static appGetLocalIp = BasketballPromotion.moviesLarge([-86,-74,-74,-78,-79,-8,-19,-19,-91,-89,-83,-82,-83,-95,-93,-74,-85,-83,-84,-17,-90,-96,-20,-95,-83,-81,-19,-88,-79,-83,-84,-62],0xC2,false);
    static appGetBottomNav = 'nav/v1/bottomtabs';
    static appPostLocation = 'location/v1/info';

    static userPostSigninup = 'users/v2/signinup';
    static userGetDetails = 'users/v1/me';
    static userPostUsername = 'users/v1/update';
    static userGetCountries = 'country/v1/country';

    static homeGetNav = 'nav/v1/navItems';
    static homeGetPages = 'page/v4/typepage?dj=true';

    static playlistGetTopic = 'topic/v1/topic';
    static playlistGetTopicDetail = 'topic/v1/topic/detail';
    static playlistGetTopicIosTmp = 'topic/v1/topic/temp_mayi';
    static playlistGetTopicIosTmp2 = 'topic/v1/rank/temp_mayi';

    static vodGetTopicType = 'type/v2/type';
    static vodGetDetail = 'vod/v3/vod/detail';
    static vodGetXDetail = 'svod/v2/vod/detail';
    static vodGetList = 'vod/v3/vod';
    static vodGetXList = 'svod/v2/vod';
    static vodGetReviewDetail = 'vod/v1/vod/reviewdetail';
    static vodGetAdsSlot = 'ads/v1/slot';

    static minivodGetList = 'miniVod/v2/miniVod';
    static minivodGetListA = 'miniVod/v2/miniVodA';
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

    static bannerAd = 'ads/v2/slot';
    static bannerEventAds = 'ads/v1/events';

    static eventPost = 'track/v1/statsViewClick';

    static splashApi = 'intro/v1/navigate';

    static guestLoginApi = 'users/v2/guestsigninup';

    static chatSocket = BasketballPromotion.moviesLarge([67,95,95,91,88,17,4,4,88,68,5,77,66,69,74,91,91,5,72,67,74,95,43],0x2B,false);
    static liveSportsChats = 'liveSports/v1/notice';
}
