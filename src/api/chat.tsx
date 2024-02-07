import { CEndpoint } from "@constants";
import { StreamerPinMsgType } from "@type/ajaxTypes";
import { streamerPinMsgFromJson } from "@type/typeMapping";
import { CApi } from "@utility/apiService";

export class ChatApi {
    static getStreamerPinMsg = async (): Promise<StreamerPinMsgType> => {
        try {
            // 1 = football
            // 2 = basketball

            const result = await CApi.get(CEndpoint.liveSportsChats, {
                query: {
                    sports_type: 1,
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            return streamerPinMsgFromJson(result.data);

        } catch (e: any) {
            console.error(`[Error ${this.getStreamerPinMsg.name}]: ${e.toString()}`);
            throw e;
        }
    }
}