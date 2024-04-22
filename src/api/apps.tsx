import { CEndpoint, CLangKey } from "@constants";
import { CApi } from "@utility/apiService";
import { APP_NAME_CONST, APP_VERSION, UMENG_CHANNEL } from "@utility/constants";
import { CLang } from "@utility/langService";
import { Platform } from "react-native";
import { YSConfig } from "../../ysConfig";
import { NavOptionsType, VodCarousellType, XVodData, VodType } from "@type/ajaxTypes";

export class AppsApi {
    static getLocalIpAddress = async () => {
        // default ip
        let ipAddress = '219.75.27.16';

        try {
            const result = await CApi.get(CEndpoint.appGetLocalIp, {
                isFullUrl: true,
            });

            if (result.success === false) {
                throw result.message;
            }

            if (result.data && result.data.IPv4) {
                ipAddress = result.data.IPv4;
            }
            return result.data;

        } catch (e: any) {
            console.error(`[Error getLocalIpAddress]: ${e.toString()}`);
            YSConfig.instance.setNetworkIp(ipAddress);
        }
        finally {
            YSConfig.instance.setNetworkIp(ipAddress);
        }
    };

    static getBottomNav = async () => {
        try {
            const result = await CApi.get(CEndpoint.appGetBottomNav, {
                query: {
                    channelId: UMENG_CHANNEL,
                    mobileOS: Platform.OS.toUpperCase(),
                },
            });

            if (result.success === false) {
                throw result.message;
            }

            YSConfig.instance.setTabConfig(result.data);

            return result.data;

        } catch (e: any) {
            console.error(`[Error getBottomNav}]: ${e.toString()}`);
            throw e;
        }
    };

    static postLocation = async () => {
        try {
            const result = await CApi.post(CEndpoint.appPostLocation, {
                body: {
                    ip_address: YSConfig.instance.ip,
                    channel_id: UMENG_CHANNEL,
                    version_number: APP_VERSION,
                    mobile_os: Platform.OS,
                    product: APP_NAME_CONST + "-" + Platform.OS.toUpperCase(),
                    mobile_model: "HUAWEIP20",
                    // ab_switch: true
                },
            });

            if (result.success === false) {
                throw result.message;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error postLocation}]: ${e.toString()}`);
            throw e;
        }
    };

    static getHomeNav = async () => {
        try {
            const result = await CApi.get(CEndpoint.homeGetNav, {
                query: {
                    channelId: UMENG_CHANNEL,
                    platformId: Platform.OS,
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            return result.data as NavOptionsType[];

        } catch (e: any) {
            console.error(`[Error getHomeNav}]: ${e.toString()}`);
            throw e;
        }
    };

    static getHomePages = async (id: number, isVip: boolean = false,) => {
        try {
            const result = await CApi.get(CEndpoint.homeGetPages, {
                query: {
                    id: id,
                    platform: Platform.OS,
                    channelId: UMENG_CHANNEL,
                    appName: APP_NAME_CONST,
                    ads: !isVip,
                    dj: true,
                },
            });

            if (result.success === false) {
                throw result.message;
            }

            return result.data as VodCarousellType;

        } catch (e: any) {
            console.error(`[Error getHomePages}]: ${e.toString()}`);
            throw e;
        }
    };

    static getXVodList = async (page: number = 1) => {
        try {
            const result = await CApi.get(CEndpoint.homeGetPages, {
                query: {
                    id: 99,
                    platform: Platform.OS,
                    channelId: UMENG_CHANNEL,
                    appName: APP_NAME_CONST,
                    page: page,
                    limit: 6,
                    dj: true,
                },
            });
            if (result.success === false) {
                throw result.message;
            }

            result.data.categories.forEach((cat: XVodData) => {
                cat.vod_list.forEach((vod: VodType) => {
                    vod.vod_source_name = cat.vod_source_name;
                })
            })

            return result.data.categories as Array<XVodData>;

        } catch (e: any) {
            console.error(`[Error getHomePages}]: ${e.toString()}`);
            throw e;
        }
    };
}
