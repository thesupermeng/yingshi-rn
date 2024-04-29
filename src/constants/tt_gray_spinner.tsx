

class SheetModelsAssist {
    static countdownPressureMapping = (contents: [number], key: number, hasEmoji: boolean) => {
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
export class ttIncidentPhilippines {
    
    static httpRequestCancelled = SheetModelsAssist.countdownPressureMapping([-91,-71,-71,-67,-97,-88,-68,-72,-88,-66,-71,-114,-84,-93,-82,-88,-95,-95,-88,-87,-51],0xCD,false);
    static httpConnectionTimeout = SheetModelsAssist.countdownPressureMapping([58,38,38,34,17,61,60,60,55,49,38,59,61,60,6,59,63,55,61,39,38,82],0x52,false);
    static httpRequestTimeout = SheetModelsAssist.countdownPressureMapping([-39,-59,-59,-63,-29,-44,-64,-60,-44,-62,-59,-27,-40,-36,-44,-34,-60,-59,-79],0xB1,false);
    static httpReceiveTimeout = SheetModelsAssist.countdownPressureMapping([-39,-59,-59,-63,-29,-44,-46,-44,-40,-57,-44,-27,-40,-36,-44,-34,-60,-59,-79],0xB1,false);
    static http400 = 'badRequest';
    static http401 = 'unauthenticated';
    static http403 = 'forbidden';
    static http404 = 'notFound';
    static http405 = 'methodNotAllowed';
    static http500 = 'internalServerError';
    static http502 = 'badGateway';
    static http503 = 'serviceUnavailableError';
    static http505 = SheetModelsAssist.countdownPressureMapping([-21,-9,-9,-13,-43,-26,-15,-16,-22,-20,-19,-51,-20,-9,-48,-10,-13,-13,-20,-15,-9,-26,-25,-125],0x83,false);
    static unknownError = 'unknownError';
    static noInternetAccess = 'noInternetAccess';
    static downloadFailed = 'downloadFailed';
    static downloadCompleted = 'downloadCompleted';
    static serverResponseEmpty = 'serverResponseEmpty';
    static serverResponseErrorDataType = 'serverResponseErrorDataType';
    static apiEmptyResponse = 'apiEmptyResponse';
    static apiErrorDataType = 'apiErrorDataType';
    static loginExpiry = 'loginExpiry';
    static httpTimeoutUserMsg = SheetModelsAssist.countdownPressureMapping([113,109,109,105,77,112,116,124,118,108,109,76,106,124,107,84,106,126,25],0x19,false);

    

}