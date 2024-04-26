import { wwCollection } from "@constants";
import { wwChinaIndicator } from "@type/ww_dycreator_result";
import { wwForegroundModules } from "@utility/ww_rewardvideo";

export class wwPlaceholderBggradient {
    static postFeedback = async (data: wwChinaIndicator) => {
        try {
            const result = await wwForegroundModules.post(wwCollection.feedbackPost, {
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