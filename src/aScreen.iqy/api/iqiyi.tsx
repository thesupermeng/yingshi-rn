import { CApi } from "@utility/apiService"
import { CEndpoint } from "../../constants/api"
import { Platform } from "react-native";
import { APP_NAME_CONST, UMENG_CHANNEL } from "@utility/constants";


export class IQiyiApi {
  static getHomeData = async (page?: number) => {
    try {
      const result = await CApi.get(CEndpoint.homeGetPages, {
        query: {
          id: 1002,
          platform: Platform.OS,
          channelId: UMENG_CHANNEL,
          appName: APP_NAME_CONST,
          page: page ?? 0,
          limit: 6,
          dj: true,
        },
      });

      if (result.success === false) {
        throw result.message
      }

      return result.data as any

    } catch (e: any) {
      console.error(`[Error getBannerAd}]: ${e.toString()}`);
      throw e;
    }
  }

  static getShortVodData = async (page?: number) => {
    // miniVod/v2/miniVod/iqiyi
    try {
      const result = await CApi.get("miniVod/v2/miniVod/iqiyi", {
        query: {
          platform: Platform.OS,
          channelId: UMENG_CHANNEL,
          appName: APP_NAME_CONST
        },
      });

      if (result.success === false) {
        throw result.message
      }

      return result.data as any

    } catch (e: any) {
      console.error(`[Error getBannerAd}]: ${e.toString()}`);
      throw e;
    }
  }
}
