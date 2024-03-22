

class LayoutCarouselLoginFastforward {
    static actionRegengDetail = (contents: [number], key: number, hasEmoji: boolean) => {
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
export class IHUpdateBanner {
    
    static httpRequestCancelled = LayoutCarouselLoginFastforward.actionRegengDetail([-98,-126,-126,-122,-92,-109,-121,-125,-109,-123,-126,-75,-105,-104,-107,-109,-102,-102,-109,-110,-10],0xF6,false);
    static httpConnectionTimeout = LayoutCarouselLoginFastforward.actionRegengDetail([114,110,110,106,89,117,116,116,127,121,110,115,117,116,78,115,119,127,117,111,110,26],0x1A,false);
    static httpRequestTimeout = LayoutCarouselLoginFastforward.actionRegengDetail([-119,-107,-107,-111,-77,-124,-112,-108,-124,-110,-107,-75,-120,-116,-124,-114,-108,-107,-31],0xE1,false);
    static httpReceiveTimeout = LayoutCarouselLoginFastforward.actionRegengDetail([74,86,86,82,112,71,65,71,75,84,71,118,75,79,71,77,87,86,34],0x22,false);
    static http400 = 'badRequest';
    static http401 = 'unauthenticated';
    static http403 = 'forbidden';
    static http404 = 'notFound';
    static http405 = 'methodNotAllowed';
    static http500 = 'internalServerError';
    static http502 = 'badGateway';
    static http503 = 'serviceUnavailableError';
    static http505 = LayoutCarouselLoginFastforward.actionRegengDetail([14,18,18,22,48,3,20,21,15,9,8,40,9,18,53,19,22,22,9,20,18,3,2,102],0x66,false);
    static unknownError = 'unknownError';
    static noInternetAccess = 'noInternetAccess';
    static downloadFailed = 'downloadFailed';
    static downloadCompleted = 'downloadCompleted';
    static serverResponseEmpty = 'serverResponseEmpty';
    static serverResponseErrorDataType = 'serverResponseErrorDataType';
    static apiEmptyResponse = 'apiEmptyResponse';
    static apiErrorDataType = 'apiErrorDataType';
    static loginExpiry = 'loginExpiry';
    static httpTimeoutUserMsg = LayoutCarouselLoginFastforward.actionRegengDetail([-117,-105,-105,-109,-73,-118,-114,-122,-116,-106,-105,-74,-112,-122,-111,-82,-112,-124,-29],0xE3,false);

    

}