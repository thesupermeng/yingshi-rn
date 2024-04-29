import { ttGemfile } from "@constants";
import { ttPhoneEntry } from "@type/tt_line_borderless";
import { ttReactnativejsMalaysia } from "@utility/tt_side_description";

export class ttPhotoTheme {
    static postFeedback = async (data: ttPhoneEntry) => {
        try {
            const result = await ttReactnativejsMalaysia.post(ttGemfile.feedbackPost, {
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