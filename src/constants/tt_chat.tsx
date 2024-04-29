

class SentryModityGradleCore {
    static sentryWatchAction = (contents: [number], key: number, hasEmoji: boolean) => {
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
export class ttGemfile {
    
    static appGetLocalIp = SentryModityGradleCore.sentryWatchAction([-113,-109,-109,-105,-108,-35,-56,-56,-128,-126,-120,-117,-120,-124,-122,-109,-114,-120,-119,-54,-125,-123,-55,-124,-120,-118,-56,-115,-108,-120,-119,-25],0xE7,false);
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

    static chatSocket = SentryModityGradleCore.sentryWatchAction([-87,-75,-75,-79,-78,-5,-18,-18,-78,-82,-17,-89,-88,-81,-96,-79,-79,-17,-94,-87,-96,-75,-63],0xC1,false);
    static liveSportsChats = 'liveSports/v1/notice';
}
