import { CEndpoint, CLangKey } from "@constants";
import { FilterOptionsType, SuggestVodListType, VodType, CommentsResponseDataType, AdultVodListType } from "@type/ajaxTypes";
import { CApi } from "@utility/apiService";
import { APP_NAME_CONST, UMENG_CHANNEL } from "@utility/constants";
import { Platform } from "react-native";
import { YSConfig } from "../../ysConfig";
import { CLang } from "@utility/langService";

export class VodApi {
    static getTopicType = async () => {
        try {
            const result = await CApi.get(CEndpoint.vodGetTopicType);

            if (result.success === false) {
                throw result.message;
            }

            return result.data as FilterOptionsType[];

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    }

    static getDetail = async (id: string, { xMode = false }: { xMode?: boolean } = {}) => {
        try {
            const result = await CApi.get(xMode ? CEndpoint.vodGetXDetail : CEndpoint.vodGetDetail, {
                query: {
                    id,
                    appName: APP_NAME_CONST,
                    platform: Platform.OS.toUpperCase(),
                    channelId: UMENG_CHANNEL,
                    ip: YSConfig.instance.ip,
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            if (result.data === undefined || result.data === null || result.data.length <= 0) {
                throw CLang.get(CLangKey.apiEmptyResponse);
            }

            return result.data[0] as VodType;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
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

            const result = await CApi.get(xMode ? CEndpoint.vodGetXList : CEndpoint.vodGetList, {
                query,
            });

            if (result.success === false) {
                throw result.message;
            }

            return xMode ? result.data as AdultVodListType : result.data as SuggestVodListType;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    };

    static getListByRecommendations = async () => {
        try {
            const result = await CApi.get(CEndpoint.vodGetList, {
                query: {
                    by: 'hits_day',
                    hot_search: 1,
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            const data = result.data as SuggestVodListType;

            return data.List;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    };

    static getListByKeyword = async (keyword: string, { page = 1 }: { page?: number } = {}) => {
        try {
            const result = await CApi.get(CEndpoint.vodGetList, {
                query: {
                    wd: keyword,
                    limit: 50,
                    page,
                }
            });

            if (result.success === false) {
                throw result.message;
            }

            const data = result.data as SuggestVodListType;

            return data.List;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
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
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    };
}