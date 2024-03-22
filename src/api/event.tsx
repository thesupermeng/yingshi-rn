import { mayi_Iconclosewhitewithbg } from "@constants";
import { mayi_ReactBang } from "@utility/mayi_zhubo";
import { mayi_Cornershoot } from "../../Umeng/mayi_init_predictionarrow";

export class EventApi {
    static postEvents = async (events: mayi_Cornershoot) => {
        try {
            if (events.stats.length <= 0) return;

            const result = await mayi_ReactBang.post(mayi_Iconclosewhitewithbg.eventPost, {
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
