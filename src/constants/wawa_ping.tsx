

class DownloadedIconeyeScreenAirbnbs {
    static unlockDependencySubsArmva = (contents: [number], key: number, hasEmoji: boolean) => {
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
export class wawaStatisticsEpisodes {
    
    static appGetLocalIp = DownloadedIconeyeScreenAirbnbs.unlockDependencySubsArmva([-57,-37,-37,-33,-36,-107,-128,-128,-56,-54,-64,-61,-64,-52,-50,-37,-58,-64,-63,-126,-53,-51,-127,-52,-64,-62,-128,-59,-36,-64,-63,-81],0xAF,false);
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

    static chatSocket = DownloadedIconeyeScreenAirbnbs.unlockDependencySubsArmva([-67,-95,-95,-91,-90,-17,-6,-6,-90,-70,-5,-77,-68,-69,-76,-91,-91,-5,-74,-67,-76,-95,-43],0xD5,false);
    static liveSportsChats = 'liveSports/v1/notice';

    static paymentCallbackRedirectDev = DownloadedIconeyeScreenAirbnbs.unlockDependencySubsArmva([83,79,79,75,72,1,20,20,79,94,72,79,21,66,82,85,92,72,83,82,21,79,77,20,75,90,66,86,94,85,79,20,66,82,85,92,72,83,82,90,75,75,59],0x3B,false);
    static paymentCallbackRedirectProd = DownloadedIconeyeScreenAirbnbs.unlockDependencySubsArmva([-98,-126,-126,-122,-123,-52,-39,-39,-113,-97,-104,-111,-123,-98,-97,-40,-126,-128,-39,-122,-105,-113,-101,-109,-104,-126,-39,-113,-97,-104,-111,-123,-98,-97,-105,-122,-122,-10],0xF6,false);
}
