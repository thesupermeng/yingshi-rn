import { CEndpoint } from "@constants";
import { SubmitFeedbackRequest } from "@type/ajaxTypes";
import { CApi } from "@utility/apiService";

export class FeedbackApi {
    static postFeedback = async (data: SubmitFeedbackRequest) => {
        try {
            const result = await CApi.post(CEndpoint.feedbackPost);

            if (result.success === false) {
                throw result.message;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error ${this.postFeedback.name}]: ${e.toString()}`);
            throw e;
        }
    }
}