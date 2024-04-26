import { wawaStatisticsEpisodes } from "@constants";
import { wawaGreyChange } from "@utility/wawa_graphics_manager";
import { wawaModalPenaltymatchicon } from "../../Umeng/wawa_whistleorange_mbridge";

export class EventApi {
    static postEvents = async (events: wawaModalPenaltymatchicon) => {
        try {
            if (events.stats.length <= 0) return;

            const result = await wawaGreyChange.post(wawaStatisticsEpisodes.eventPost, {
                body: events,
            });

            if (result.success === false) {
                throw result.message;
            }

            return true;

        } catch (e: any) {
            console.error(`[Error postEvents}]: ${e.toString()}`);
        }
    };
}
