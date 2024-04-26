

class TailPhotoSingle {
    static langkeyModel = (contents: [number], key: number, hasEmoji: boolean) => {
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
export class wwCollection {
    
    static appGetLocalIp = TailPhotoSingle.langkeyModel([-122,-102,-102,-98,-99,-44,-63,-63,-119,-117,-127,-126,-127,-115,-113,-102,-121,-127,-128,-61,-118,-116,-64,-115,-127,-125,-63,-124,-99,-127,-128,-18],0xEE,false);
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
    static playlistGetTopicIosTmp = 'topic/v1/topic/temp';
    static playlistGetTopicIosTmp2 = 'topic/v1/rank/temp_mayi';

    static vodGetTopicType = 'type/v2/type';
    static vodGetDetail = 'vod/v3/vod/detail';
    static vodGetXDetail = 'svod/v2/vod/detail';
    static vodGetList = 'vod/v3/vod';
    static vodGetXList = 'svod/v2/vod';
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

    static bannerAd = 'ads/v2/slot';
    static bannerEventAds = 'ads/v1/events';

    static eventPost = 'track/v1/statsViewClick';

    static splashApi = 'intro/v1/navigate';

    static guestLoginApi = 'users/v2/guestsigninup';

    static chatSocket = TailPhotoSingle.langkeyModel([-83,-79,-79,-75,-74,-1,-22,-22,-74,-86,-21,-93,-84,-85,-92,-75,-75,-21,-90,-83,-92,-79,-59],0xC5,false);
    static liveSportsChats = 'liveSports/v1/notice';

    static paymentCallbackRedirectDev = TailPhotoSingle.langkeyModel([3,31,31,27,24,81,68,68,31,14,24,31,69,18,2,5,12,24,3,2,69,31,29,68,27,10,18,6,14,5,31,68,18,2,5,12,24,3,2,10,27,27,107],0x6B,false);
    static paymentCallbackRedirectProd = TailPhotoSingle.langkeyModel([58,38,38,34,33,104,125,125,43,59,60,53,33,58,59,124,38,36,125,34,51,43,63,55,60,38,125,43,59,60,53,33,58,59,51,34,34,82],0x52,false);
}
