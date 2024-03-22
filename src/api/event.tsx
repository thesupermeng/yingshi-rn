import { MVCountry } from "@constants";
import { JTumbnailMatches } from "@utility/qot_stations_station";
import { XHSelection } from "../../Umeng/ddx_zhubo_more";

export class EventApi {
    static postEvents = async (events: XHSelection) => {
        try {
            if (events.stats.length <= 0) return;

            const result = await JTumbnailMatches.post(MVCountry.eventPost, {
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
