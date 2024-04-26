

class SubtextUimanagerEntryRoboto {
    static libffmpegkitReact = (contents: [number], key: number, hasEmoji: boolean) => {
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
export class wwNativemodule {
    
    static httpRequestCancelled = SubtextUimanagerEntryRoboto.libffmpegkitReact([123,103,103,99,65,118,98,102,118,96,103,80,114,125,112,118,127,127,118,119,19],0x13,false);
    static httpConnectionTimeout = SubtextUimanagerEntryRoboto.libffmpegkitReact([23,11,11,15,60,16,17,17,26,28,11,22,16,17,43,22,18,26,16,10,11,127],0x7F,false);
    static httpRequestTimeout = SubtextUimanagerEntryRoboto.libffmpegkitReact([86,74,74,78,108,91,79,75,91,77,74,106,87,83,91,81,75,74,62],0x3E,false);
    static httpReceiveTimeout = SubtextUimanagerEntryRoboto.libffmpegkitReact([-90,-70,-70,-66,-100,-85,-83,-85,-89,-72,-85,-102,-89,-93,-85,-95,-69,-70,-50],0xCE,false);
    static http400 = 'badRequest';
    static http401 = 'unauthenticated';
    static http403 = 'forbidden';
    static http404 = 'notFound';
    static http405 = 'methodNotAllowed';
    static http500 = 'internalServerError';
    static http502 = 'badGateway';
    static http503 = 'serviceUnavailableError';
    static http505 = SubtextUimanagerEntryRoboto.libffmpegkitReact([9,21,21,17,55,4,19,18,8,14,15,47,14,21,50,20,17,17,14,19,21,4,5,97],0x61,false);
    static unknownError = 'unknownError';
    static noInternetAccess = 'noInternetAccess';
    static downloadFailed = 'downloadFailed';
    static downloadCompleted = 'downloadCompleted';
    static serverResponseEmpty = 'serverResponseEmpty';
    static serverResponseErrorDataType = 'serverResponseErrorDataType';
    static apiEmptyResponse = 'apiEmptyResponse';
    static apiErrorDataType = 'apiErrorDataType';
    static loginExpiry = 'loginExpiry';
    static httpTimeoutUserMsg = SubtextUimanagerEntryRoboto.libffmpegkitReact([80,76,76,72,108,81,85,93,87,77,76,109,75,93,74,117,75,95,56],0x38,false);

    

}