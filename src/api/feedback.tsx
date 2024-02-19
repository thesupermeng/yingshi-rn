import { CEndpoint } from "@constants";
import { SubmitFeedbackRequest } from "@type";
import { CApi } from "@utility";

export class FeedbackApi {
    static postFeedback = async (data: SubmitFeedbackRequest) => {
        try {
            const result = await CApi.post(CEndpoint.feedbackPost, {
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