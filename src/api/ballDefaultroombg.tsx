import { mayi_Iconclosewhitewithbg } from "@constants";
import { mayi_ActivityIconarrowleft } from "@type/mayi_green";
import { mayi_ReactBang } from "@utility/mayi_zhubo";

export class mayi_CondensedAgreement {
    static postFeedback = async (data: mayi_ActivityIconarrowleft) => {
        try {
            const result = await mayi_ReactBang.post(mayi_Iconclosewhitewithbg.feedbackPost, {
                body: data,
            });
            if (result.success === false) {
                throw result.message;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error postFeedback}]: ${e.toString()}`);
            throw e;
        }
    }
}