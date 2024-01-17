import { CEndpoint } from "@constants";
import { CApi } from "@utility/apiService";
import { EventApiJsonType } from "../../Umeng/EventAnalytic";

export class EventApi {
    static postEvents = async (events: EventApiJsonType) => {
        try {
            if (events.stats.length <= 0) return;
            console.log('send to api')
            console.log(JSON.stringify(events))
            // return true;

            const result = await CApi.post(CEndpoint.eventPost, {
                body: events,
            });

            if (result.success === false) {
                throw result.message;
            }

            return true;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
        }
    };
}
