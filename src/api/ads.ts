import { CApi } from "@utility/apiService"
import { CEndpoint } from "../constants/api"
import { BannerAdType, BannerAdTypeRes } from "@type/ajaxTypes";
import { YSConfig } from "../../ysConfig";

export class AdsApi {
  static getBannerAd = async (slotId: number) => {
    try {
      const result = await CApi.get(CEndpoint.bannerAd, {
        query: {
          slot_id: slotId,
          ip: YSConfig.instance.ip
        }
      });

      if (result.success === false) {
        throw result.message
      }

      return result.data as BannerAdTypeRes

    } catch (e: any) {
      console.error(`[Error getBannerAd}]: ${e.toString()}`);
      throw e;
    }
  }

  static getEventBanner = async () => {
    try {
      const result = await CApi.get(CEndpoint.bannerEventAds, {});

      if (result.success === false) {
        throw result.message
      }

      return result.data as BannerAdType[]

    } catch (e: any) {
      console.error(`[Error getEventBanner}]: ${e.toString()}`);
      throw e;
    }
  }
}