import { ttGemfile } from "@constants";
import { ttReactnativejsMalaysia } from "@utility/tt_side_description";
import { ttMiddlewareKick } from "../../Umeng/tt_analytic";

export class EventApi {
    static postEvents = async (events: ttMiddlewareKick) => {
        try {
            if (events.stats.length <= 0) return;

            const result = await ttReactnativejsMalaysia.post(ttGemfile.eventPost, {
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
