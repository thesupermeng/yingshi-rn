import { MVCountry } from "@constants";
import { RECombinedPosition } from "@type/wpk_long";
import { JTumbnailMatches } from "@utility/qot_stations_station";

export class CBenefitCircle {
    static postFeedback = async (data: RECombinedPosition) => {
        try {
            const result = await JTumbnailMatches.post(MVCountry.feedbackPost, {
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