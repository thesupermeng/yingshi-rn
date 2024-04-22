import { CEndpoint } from "@constants";
import { CApi } from "@utility/apiService";
import { APP_NAME_CONST, UMENG_CHANNEL } from "@utility/constants";
import { Platform } from "react-native";
import { YSConfig } from "../../ysConfig";
import { PaggingObject, PlayList } from "@models";

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

            return PaggingObject.fromJson<PlayList>(result.data, PlayList.fromJsonList);

        } catch (e: any) {
            console.error(`[Error getTopic}]: ${e.toString()}`);
            throw e;
        }
    };

    static getTopicIosTmp = async () => {
        try {
            const result = await CApi.get(CEndpoint.playlistGetTopicIosTmp);

            if (result.success === false) {
                throw result.message;
            }

            return PlayList.fromJsonList(result.data);

        } catch (e: any) {
            console.error(`[Error getTopicIosTmp}]: ${e.toString()}`);
            throw e;
        }
    };
}