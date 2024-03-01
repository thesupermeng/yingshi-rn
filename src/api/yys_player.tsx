import { yys_FavoriteCustom } from "@constants";
import { yys_Button } from "@type/yys_libzeus";
import { streamerPinMsgFromJson } from "@type/yys_large";
import { yys_StringsVignette } from "@utility/yys_ping";

export class yys_FinalRound {
    static getStreamerPinMsg = async (): Promise<yys_Button> => {
        try {
            
            

            const result = await yys_StringsVignette.get(yys_FavoriteCustom.liveSportsChats, {
                query: {
                    sports_type: 1,
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            return streamerPinMsgFromJson(result.data);

        } catch (e: any) {
            console.error(`[Error getStreamerPinMsg}]: ${e.toString()}`);
            throw e;
        }
    }
}