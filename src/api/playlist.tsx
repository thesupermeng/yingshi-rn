import { CEndpoint, CLangKey } from "@constants";
import { VodPlayListType } from "@type/ajaxTypes";
import { CApi } from "@utility/apiService";
import { CLang } from "@utility/langService";

export class PlaylistApi {
    static getTopic = async (page: number = 1) => {
        try {
            const result = await CApi.get(CEndpoint.playlistGetTopic, {
                query: {
                    page: page
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            return result.data as VodPlayListType;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    };

    static getTopicIosTmp = async () => {
        try {
            const result = await CApi.get(CEndpoint.playlistGetTopicIosTmp);

            if (result.success === false) {
                throw result.message;
            }

            return result.data as VodPlayListType;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    };
}