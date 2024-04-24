import { CEndpoint, CLangKey } from "@constants";
import { FilterOptionsType, CommentsResponseDataType, VodPlayerAdType } from "@type/ajaxTypes";
import { CApi } from "@utility/apiService";
import { AD_VIDEO_SECONDS, APP_NAME_CONST, UMENG_CHANNEL } from "@utility/constants";
import { Platform } from "react-native";
import { YSConfig } from "../../ysConfig";
import { CLang } from "@utility/langService";
import { PaggingObject, Vod } from "@models";

export class VodApi {
    static getTopicType = async () => {
        try {
            const result = await CApi.get(CEndpoint.vodGetTopicType);

            if (result.success === false) {
                throw result.message;
            }

            return result.data as FilterOptionsType[];

        } catch (e: any) {
            console.error(`[Error getTopicType}]: ${e.toString()}`);
            throw e;
        }
    }

    static getDetail = async (id: string, typeId: string, vodSourceName = "", { xMode = false }: { xMode?: boolean } = {}) => {
        try {
            const result = await CApi.get(xMode ? CEndpoint.vodGetXDetail : CEndpoint.vodGetDetail, {
                query: {
                    id,
                    appName: APP_NAME_CONST,
                    platform: Platform.OS.toUpperCase(),
                    channelId: UMENG_CHANNEL,
                    ip: YSConfig.instance.ip,
                    tid: typeId,
                    vod_source_name: vodSourceName
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            if (result.data === undefined || result.data === null || result.data.length <= 0) {
                throw CLang.get(CLangKey.apiEmptyResponse);
            }
            return result.data[0] as Vod;

        } catch (e: any) {
            console.error(`[Error getDetail}]: ${e.toString()}`);
            throw e;
        }
    }

    static getList = async ({
        tid,
        page = 1,
        limit = 30,
        category,
        area,
        lang,
        year,
        by,
        rand,
        orderBy = 'asc',
        xMode = false,
        vod_source_name = "",
    }: {
        tid?: string,
        page?: number,
        limit?: number,
        category?: string,
        area?: string,
        lang?: string,
        year?: string,
        by?: string,
        rand?: number,
        orderBy?: 'desc' | 'asc'
        xMode?: boolean,
        vod_source_name?: string,
    }) => {
        try {
            let query: any = {
                order: orderBy,
                page,
                limit,
            };

            if (tid) {
                query['tid'] = tid;
            }
            if (category) {
                query['class'] = category;
            }
            if (area) {
                query['area'] = area;
            }
            if (lang) {
                query['lang'] = lang;
            }
            if (year) {
                query['year'] = year;
            }
            if (by) {
                query['by'] = by;
            }
            if (rand) {
                query['rand'] = rand;
            }
            if (vod_source_name != "" && xMode == true) {
                query['vod_source_name'] = vod_source_name;
            }
            const result = await CApi.get(xMode ? CEndpoint.vodGetXList : CEndpoint.vodGetList, {
                query,
            });

            if (result.success === false) {
                throw result.message;
            }

            return PaggingObject.fromJson<Vod>(result.data, Vod.fromJsonList);

        } catch (e: any) {
            console.error(`[Error getList}]: ${e.toString()}`);
            throw e;
        }
    };

    static getListByRecommendations = async () => {
        try {
            const result = await CApi.get(CEndpoint.playlistGetTopicDetail, {
                query: {
                    id: 1,
                    appName: APP_NAME_CONST,
                    platform: Platform.OS.toUpperCase(),
                    channelId: UMENG_CHANNEL,
                    ip: YSConfig.instance.ip,
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            return PaggingObject.fromJson<Vod>(result.data.vod_list, Vod.fromJsonList);

        } catch (e: any) {
            console.error(`[Error getListByRecommendations}]: ${e.toString()}`);
            throw e;
        }
    };

    static getListByKeyword = async (keyword: string, { page = 1 }: { page?: number } = {}) => {
        try {
            const result = await CApi.get(CEndpoint.vodGetList, {
                query: {
                    wd: keyword,
                    limit: 35,
                    page,
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            const data = PaggingObject.fromJson<Vod>(result.data.vod_list, Vod.fromJsonList);

            return data.List ?? [];

        } catch (e: any) {
            console.error(`[Error getListByKeyword}]: ${e.toString()}`);
            throw e;
        }
    };

    static getReviewDetails = async (id: string) => {
        try {
            const result = await CApi.get(CEndpoint.vodGetReviewDetail, {
                query: {
                    douban_id: id,
                    limit: 6,
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            return result.data as CommentsResponseDataType;

        } catch (e: any) {
            console.error(`[Error getReviewDetails}]: ${e.toString()}`);
            throw e;
        }
    };

    static getPlayerAdVideo = async (): Promise<VodPlayerAdType | undefined> => {
        try {
            const result = await CApi.get(CEndpoint.vodGetAdsSlot, {
                query: {
                    slot_id: '114',
                    ip: YSConfig.instance.ip
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            if (!result.data) {
                return undefined;
            }

            return {
                id: result.data.ads_id,
                title: result.data.ads_title,
                eventTitle: result.data.ads_event_title,
                name: result.data.ads_name,
                url: result.data.ads_pic,
                slotId: result.data.ads_slot_id,
                isVideo: result.data.is_video,
                actionUrl: result.data.ads_url,
                minDuration: !isNaN(result.data.ads_min_duration ?? NaN) ? result.data.ads_min_duration : AD_VIDEO_SECONDS,
                redirectType: result.data.ads_redirect_type,
            }

        } catch (e: any) {
            console.error(`[Error getPlayerAdVideo}]: ${e.toString()}`);
            throw e;
        }
    };
}