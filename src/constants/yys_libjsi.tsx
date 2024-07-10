

class ActionsMaterialConfigureUpdate {
    static subsNetworkPolicyReact = (contents: [number], key: number, hasEmoji: boolean) => {
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
export class yys_FavoriteCustom {

    static appStartPing = 'index/v1/ping';

    static appGetLocalIp = ActionsMaterialConfigureUpdate.subsNetworkPolicyReact([-1, -29, -29, -25, -28, -83, -72, -72, -16, -14, -8, -5, -8, -12, -10, -29, -2, -8, -7, -70, -13, -11, -71, -12, -8, -6, -72, -3, -28, -8, -7, -105], 0x97, false);
    static appGetBottomNav = 'nav/v1/bottomtabs';
    static appPostLocation = 'location/v1/info';

    static userPostSigninup = 'users/v2/signinup';
    static userGetDetails = 'users/v1/me';
    static userPostUsername = 'users/v1/update';
    static userGetCountries = 'country/v1/country';

    static homeGetNav = 'nav/v1/navItems';
    static homeGetPages = 'page/v3/typepage';

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
    static minivodGetListA = 'miniVod/v2/miniVodA';
    static minivodGetXList = 'miniSVod/v1/miniSVod';
    static minivodGetCollections = (id: number) => `miniVod/v2/collections/${id}`;

    static feedbackPost = 'feedback/v2/submit';

    static productGetList = 'products/v1/products';
    static nativeProductGetList = 'products/v3/nativeProducts';
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

    static chatSocket = ActionsMaterialConfigureUpdate.subsNetworkPolicyReact([-89, -69, -69, -65, -68, -11, -32, -32, -68, -96, -31, -87, -90, -95, -82, -65, -65, -31, -84, -89, -82, -69, -49], 0xCF, false);
    static liveSportsChats = 'liveSports/v1/notice';

    static paymentCallbackRedirectDev = 'https://test.yingshi.tv/payment/yingshiapp';
    static paymentCallbackRedirectProd = 'https://yingshi.tv/payment/yingshiapp';
}
