import { yysPangleCommon } from "@constants";
import { yysLibsentryOverlay } from "@type";
import { yysConfig } from "@utility";

export class yysMaterial {
    static postFeedback = async (data: yysLibsentryOverlay) => {
        try {
            const result = await yysConfig.post(yysPangleCommon.feedbackPost, {
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