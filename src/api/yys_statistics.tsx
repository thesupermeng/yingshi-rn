import { yys_FavoriteCustom } from "@constants";
import { yys_DataMoon } from "@type/yys_libzeus";
import { yys_StringsVignette } from "@utility/yys_ping";

export class yys_MbsplashLibsentry {
    static postFeedback = async (data: yys_DataMoon) => {
        try {
            const result = await yys_StringsVignette.post(yys_FavoriteCustom.feedbackPost, {
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