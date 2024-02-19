import { yysPangleCommon } from "@constants";
import { yysConfig } from "@utility";
import { yysIconrightorange } from "../../Umeng/yys_iconbell_renew";

export class EventApi {
    static postEvents = async (events: yysIconrightorange) => {
        try {
            if (events.stats.length <= 0) return;

            const result = await yysConfig.post(yysPangleCommon.eventPost, {
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
