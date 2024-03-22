import { MVCountry } from "@constants";
import { UBFConstModule } from "@type/wpk_long";
import { streamerPinMsgFromJson } from "@type/nn_bing";
import { JTumbnailMatches } from "@utility/qot_stations_station";

export class NXSharedConstants {
    static getStreamerPinMsg = async (): Promise<UBFConstModule> => {
        try {
            
            

            const result = await JTumbnailMatches.get(MVCountry.liveSportsChats, {
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