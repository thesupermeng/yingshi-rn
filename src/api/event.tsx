import { yys_FavoriteCustom } from "@constants";
import { yys_StringsVignette } from "@utility/yys_ping";
import { yys_PhoneLibreactperfloggerjni } from "../../Umeng/yys_search_cancel";

export class EventApi {
    static postEvents = async (events: yys_PhoneLibreactperfloggerjni) => {
        try {
            if (events.stats.length <= 0) return;

            const result = await yys_StringsVignette.post(yys_FavoriteCustom.eventPost, {
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
