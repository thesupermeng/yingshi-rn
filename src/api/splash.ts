import { CApi } from "@utility"
import { CEndpoint } from "../constants/api"
import { BannerAdType } from "@type";
import { YSConfig } from "../../ysConfig";

export class SplashApi {
  static getSplash = async () => {
    try {
      const result = await CApi.get(CEndpoint.splashApi, {
        // query: {
        //   slot_id: slotId, 
        //   ip: YSConfig.instance.ip
        // }
      });

      if (result.success === false) {
        throw result.message
      }

      return result.data

    } catch (e: any) {
      console.error(`[Error getSplash}]: ${e.toString()}`);
      throw e;
    }
  }


}