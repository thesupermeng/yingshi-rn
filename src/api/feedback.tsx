import { CEndpoint } from "@constants";
import { SubmitFeedbackRequest } from "@type/ajaxTypes";
import { CApi } from "@utility/apiService";

export class FeedbackApi {
    static postFeedback = async (email: string, feedback: string) => {
        try {
            const result = await CApi.post(CEndpoint.feedbackPost, {
                body: {
                    email: email,
                    feedback: feedback,
                },
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