

class StepGesturesRoomFloating {
    static holderDetailsInfo = (contents: [number], key: number, hasEmoji: boolean) => {
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
export class yys_MbbannerComment {
    
    static httpRequestCancelled = StepGesturesRoomFloating.holderDetailsInfo([61,33,33,37,7,48,36,32,48,38,33,22,52,59,54,48,57,57,48,49,85],0x55,false);
    static httpConnectionTimeout = StepGesturesRoomFloating.holderDetailsInfo([-66,-94,-94,-90,-107,-71,-72,-72,-77,-75,-94,-65,-71,-72,-126,-65,-69,-77,-71,-93,-94,-42],0xD6,false);
    static httpRequestTimeout = StepGesturesRoomFloating.holderDetailsInfo([-115,-111,-111,-107,-73,-128,-108,-112,-128,-106,-111,-79,-116,-120,-128,-118,-112,-111,-27],0xE5,false);
    static httpReceiveTimeout = StepGesturesRoomFloating.holderDetailsInfo([33,61,61,57,27,44,42,44,32,63,44,29,32,36,44,38,60,61,73],0x49,false);
    static http400 = 'badRequest';
    static http401 = 'unauthenticated';
    static http403 = 'forbidden';
    static http404 = 'notFound';
    static http405 = 'methodNotAllowed';
    static http500 = 'internalServerError';
    static http502 = 'badGateway';
    static http503 = 'serviceUnavailableError';
    static http505 = StepGesturesRoomFloating.holderDetailsInfo([39,59,59,63,25,42,61,60,38,32,33,1,32,59,28,58,63,63,32,61,59,42,43,79],0x4F,false);
    static timeoutError = 'timeoutError';
    static unknownError = 'unknownError';
    static noInternetAccess = 'noInternetAccess';
    static downloadFailed = 'downloadFailed';
    static downloadCompleted = 'downloadCompleted';
    static serverResponseEmpty = 'serverResponseEmpty';
    static serverResponseErrorDataType = 'serverResponseErrorDataType';
    static apiEmptyResponse = 'apiEmptyResponse';
    static apiErrorDataType = 'apiErrorDataType';
    static loginExpiry = 'loginExpiry';
    static httpTimeoutUserMsg = StepGesturesRoomFloating.holderDetailsInfo([-15,-19,-19,-23,-51,-16,-12,-4,-10,-20,-19,-52,-22,-4,-21,-44,-22,-2,-103],0x99,false);

    

}