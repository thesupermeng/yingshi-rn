import { wwCollection } from "@constants";
import { wwWeiboInactive } from "@type/ww_dycreator_result";
import { streamerPinMsgFromJson } from "@type/ww_renew";
import { wwForegroundModules } from "@utility/ww_rewardvideo";

export class wwBggradient {
    static getStreamerPinMsg = async (): Promise<wwWeiboInactive> => {
        try {
            
            

            const result = await wwForegroundModules.get(wwCollection.liveSportsChats, {
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