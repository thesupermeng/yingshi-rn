import { ttGemfile } from "@constants";
import { ttMbnative } from "@type/tt_line_borderless";
import { streamerPinMsgFromJson } from "@type/tt_team_empty";
import { ttReactnativejsMalaysia } from "@utility/tt_side_description";

export class ttModuleNewinterstitial {
    static getStreamerPinMsg = async (): Promise<ttMbnative> => {
        try {
            
            

            const result = await ttReactnativejsMalaysia.get(ttGemfile.liveSportsChats, {
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