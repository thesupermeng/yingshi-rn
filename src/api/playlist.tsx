import { CEndpoint, CLangKey } from "@constants";
import { VodPlayListType } from "@type";
import { CApi } from "@utility";
import { APP_NAME_CONST, UMENG_CHANNEL } from "@utility";
import { CLang } from "@utility";
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

            return result.data as VodPlayListType;

        } catch (e: any) {
            console.error(`[Error getTopicIosTmp}]: ${e.toString()}`);
            throw e;
        }
    };
}