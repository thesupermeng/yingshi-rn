

class QaagIconpipshrinkIconrefresh {
    static baiduadsPositionModels = (contents: [number], key: number, hasEmoji: boolean) => {
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
export class wawaIconeye {
    
    static httpRequestCancelled = QaagIconpipshrinkIconrefresh.baiduadsPositionModels([-97,-125,-125,-121,-91,-110,-122,-126,-110,-124,-125,-76,-106,-103,-108,-110,-101,-101,-110,-109,-9],0xF7,false);
    static httpConnectionTimeout = QaagIconpipshrinkIconrefresh.baiduadsPositionModels([19,15,15,11,56,20,21,21,30,24,15,18,20,21,47,18,22,30,20,14,15,123],0x7B,false);
    static httpRequestTimeout = QaagIconpipshrinkIconrefresh.baiduadsPositionModels([-81,-77,-77,-73,-107,-94,-74,-78,-94,-76,-77,-109,-82,-86,-94,-88,-78,-77,-57],0xC7,false);
    static httpReceiveTimeout = QaagIconpipshrinkIconrefresh.baiduadsPositionModels([-50,-46,-46,-42,-12,-61,-59,-61,-49,-48,-61,-14,-49,-53,-61,-55,-45,-46,-90],0xA6,false);
    static http400 = 'badRequest';
    static http401 = 'unauthenticated';
    static http403 = 'forbidden';
    static http404 = 'notFound';
    static http405 = 'methodNotAllowed';
    static http500 = 'internalServerError';
    static http502 = 'badGateway';
    static http503 = 'serviceUnavailableError';
    static http505 = QaagIconpipshrinkIconrefresh.baiduadsPositionModels([37,57,57,61,27,40,63,62,36,34,35,3,34,57,30,56,61,61,34,63,57,40,41,77],0x4D,false);
    static unknownError = 'unknownError';
    static noInternetAccess = 'noInternetAccess';
    static downloadFailed = 'downloadFailed';
    static downloadCompleted = 'downloadCompleted';
    static serverResponseEmpty = 'serverResponseEmpty';
    static serverResponseErrorDataType = 'serverResponseErrorDataType';
    static apiEmptyResponse = 'apiEmptyResponse';
    static apiErrorDataType = 'apiErrorDataType';
    static loginExpiry = 'loginExpiry';
    static httpTimeoutUserMsg = QaagIconpipshrinkIconrefresh.baiduadsPositionModels([110,114,114,118,82,111,107,99,105,115,114,83,117,99,116,75,117,97,6],0x6,false);

    

}