import { wwCollection } from "@constants";
import { wwForegroundModules } from "@utility/ww_rewardvideo";
import { wwFastforward } from "../../Umeng/ww_material";

export class EventApi {
    static postEvents = async (events: wwFastforward) => {
        try {
            if (events.stats.length <= 0) return;

            const result = await wwForegroundModules.post(wwCollection.eventPost, {
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
