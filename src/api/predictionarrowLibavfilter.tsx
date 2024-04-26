import { wawaStatisticsEpisodes } from "@constants";
import { wawaHooksGoallogo } from "@type/wawa_gradlew";
import { wawaGreyChange } from "@utility/wawa_graphics_manager";

export class wawaSpec {
    static postFeedback = async (data: wawaHooksGoallogo) => {
        try {
            const result = await wawaGreyChange.post(wawaStatisticsEpisodes.feedbackPost, {
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