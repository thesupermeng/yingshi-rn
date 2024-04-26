import { wawaStatisticsEpisodes } from "@constants";
import { wawaLibreactperfloggerjniEvent } from "@type/wawa_gradlew";
import { streamerPinMsgFromJson } from "@type/wawa_profilepic_hiad";
import { wawaGreyChange } from "@utility/wawa_graphics_manager";

export class wawaVideovarBaiduads {
    static getStreamerPinMsg = async (): Promise<wawaLibreactperfloggerjniEvent> => {
        try {
            
            

            const result = await wawaGreyChange.get(wawaStatisticsEpisodes.liveSportsChats, {
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