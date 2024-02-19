

class RenewAwayiconTemp {
    static informationIconpipexpandPressu = (contents: [number], key: number, hasEmoji: boolean) => {
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
export class yysResultSport {
    
    static httpRequestCancelled = RenewAwayiconTemp.informationIconpipexpandPressu([-29,-1,-1,-5,-39,-18,-6,-2,-18,-8,-1,-56,-22,-27,-24,-18,-25,-25,-18,-17,-117],0x8B,false);
    static httpConnectionTimeout = RenewAwayiconTemp.informationIconpipexpandPressu([98,126,126,122,73,101,100,100,111,105,126,99,101,100,94,99,103,111,101,127,126,10],0xA,false);
    static httpRequestTimeout = RenewAwayiconTemp.informationIconpipexpandPressu([94,66,66,70,100,83,71,67,83,69,66,98,95,91,83,89,67,66,54],0x36,false);
    static httpReceiveTimeout = RenewAwayiconTemp.informationIconpipexpandPressu([0,28,28,24,58,13,11,13,1,30,13,60,1,5,13,7,29,28,104],0x68,false);
    static http400 = 'badRequest';
    static http401 = 'unauthenticated';
    static http403 = 'forbidden';
    static http404 = 'notFound';
    static http405 = 'methodNotAllowed';
    static http500 = 'internalServerError';
    static http502 = 'badGateway';
    static http503 = 'serviceUnavailableError';
    static http505 = RenewAwayiconTemp.informationIconpipexpandPressu([-33,-61,-61,-57,-31,-46,-59,-60,-34,-40,-39,-7,-40,-61,-28,-62,-57,-57,-40,-59,-61,-46,-45,-73],0xB7,false);
    static unknownError = 'unknownError';
    static noInternetAccess = 'noInternetAccess';
    static downloadFailed = 'downloadFailed';
    static downloadCompleted = 'downloadCompleted';
    static serverResponseEmpty = 'serverResponseEmpty';
    static serverResponseErrorDataType = 'serverResponseErrorDataType';
    static apiEmptyResponse = 'apiEmptyResponse';
    static apiErrorDataType = 'apiErrorDataType';
    static loginExpiry = 'loginExpiry';
    static httpTimeoutUserMsg = RenewAwayiconTemp.informationIconpipexpandPressu([41,53,53,49,21,40,44,36,46,52,53,20,50,36,51,12,50,38,65],0x41,false);

    

}