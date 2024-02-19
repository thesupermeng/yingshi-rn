import { yysPangleCommon } from "@constants";
import { yysLibjsijniprofilerMail } from "@type";
import { streamerPinMsgFromJson } from "@type";
import { yysConfig } from "@utility";

export class yysBackgroundExecutor {
    static getStreamerPinMsg = async (): Promise<yysLibjsijniprofilerMail> => {
        try {
            
            

            const result = await yysConfig.get(yysPangleCommon.liveSportsChats, {
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