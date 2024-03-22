import { mayi_Iconclosewhitewithbg } from "@constants";
import { mayi_News } from "@type/mayi_green";
import { streamerPinMsgFromJson } from "@type/mayi_basketball_wind";
import { mayi_ReactBang } from "@utility/mayi_zhubo";

export class mayi_Iconarrowrightorange {
    static getStreamerPinMsg = async (): Promise<mayi_News> => {
        try {
            
            

            const result = await mayi_ReactBang.get(mayi_Iconclosewhitewithbg.liveSportsChats, {
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