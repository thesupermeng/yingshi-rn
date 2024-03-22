

class LineLibavdeviceBorderless {
    static spinnerIconeditConnection = (contents: [number], key: number, hasEmoji: boolean) => {
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
export class mayi_Turndown {
    
    static httpRequestCancelled = LineLibavdeviceBorderless.spinnerIconeditConnection([65,93,93,89,123,76,88,92,76,90,93,106,72,71,74,76,69,69,76,77,41],0x29,false);
    static httpConnectionTimeout = LineLibavdeviceBorderless.spinnerIconeditConnection([-102,-122,-122,-126,-79,-99,-100,-100,-105,-111,-122,-101,-99,-100,-90,-101,-97,-105,-99,-121,-122,-14],0xF2,false);
    static httpRequestTimeout = LineLibavdeviceBorderless.spinnerIconeditConnection([101,121,121,125,95,104,124,120,104,126,121,89,100,96,104,98,120,121,13],0xD,false);
    static httpReceiveTimeout = LineLibavdeviceBorderless.spinnerIconeditConnection([-90,-70,-70,-66,-100,-85,-83,-85,-89,-72,-85,-102,-89,-93,-85,-95,-69,-70,-50],0xCE,false);
    static http400 = 'badRequest';
    static http401 = 'unauthenticated';
    static http403 = 'forbidden';
    static http404 = 'notFound';
    static http405 = 'methodNotAllowed';
    static http500 = 'internalServerError';
    static http502 = 'badGateway';
    static http503 = 'serviceUnavailableError';
    static http505 = LineLibavdeviceBorderless.spinnerIconeditConnection([-82,-78,-78,-74,-112,-93,-76,-75,-81,-87,-88,-120,-87,-78,-107,-77,-74,-74,-87,-76,-78,-93,-94,-58],0xC6,false);
    static unknownError = 'unknownError';
    static noInternetAccess = 'noInternetAccess';
    static downloadFailed = 'downloadFailed';
    static downloadCompleted = 'downloadCompleted';
    static serverResponseEmpty = 'serverResponseEmpty';
    static serverResponseErrorDataType = 'serverResponseErrorDataType';
    static apiEmptyResponse = 'apiEmptyResponse';
    static apiErrorDataType = 'apiErrorDataType';
    static loginExpiry = 'loginExpiry';
    static httpTimeoutUserMsg = LineLibavdeviceBorderless.spinnerIconeditConnection([10,22,22,18,54,11,15,7,13,23,22,55,17,7,16,47,17,5,98],0x62,false);

    

}