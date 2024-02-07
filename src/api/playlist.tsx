import { CEndpoint, CLangKey } from "@constants";
import { VodPlayListType } from "@type/ajaxTypes";
import { CApi } from "@utility/apiService";
import { APP_NAME_CONST, UMENG_CHANNEL } from "@utility/constants";
import { CLang } from "@utility/langService";
import { Platform } from "react-native";
import { YSConfig } from "../../ysConfig";

export class PlaylistApi {
    static getTopic = async (page: number = 1) => {
        try {
            const result = await CApi.get(CEndpoint.playlistGetTopic, {
                query: {
                    page: page,
                    appName: APP_NAME_CONST,
                    platform: Platform.OS.toUpperCase(),
                    channelId: UMENG_CHANNEL,
                    ip: YSConfig.instance.ip,
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            return result.data as VodPlayListType;

        } catch (e: any) {
            console.error(`[Error ${this.getTopic.name}]: ${e.toString()}`);
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
            console.error(`[Error ${this.getTopicIosTmp.name}]: ${e.toString()}`);
            throw e;
        }
    };
}