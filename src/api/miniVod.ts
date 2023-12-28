import { API_DOMAIN_TEST, DOWNLOAD_WATCH_ANYTIME } from "@utility/constants";
import { getApiCache, getExcludedIds, getIsApiCacheExist } from "../utils/minivodDownloader"
import { MiniVideo, MiniVideoListType, MiniVideoVodListType } from "@type/ajaxTypes";
import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import shuffle from 'lodash/shuffle'

import { CApi } from "@utility/apiService";
import { CEndpoint } from "@constants";


export class MiniVodApi {
  static getListByPage = async ({ page, limit = 100, exclude, xMode = false, }: { page: number, limit?: number, exclude?: string, xMode?: boolean }) => {
    try {
      const result = await CApi.get(xMode ? CEndpoint.minivodGetXList : CEndpoint.minivodGetList, {
        query: {
          page,
          limit,
          exclude,
        }
      });

      if (result.success === false) {
        throw result.message;
      }

      return result.data as MiniVideoListType;

    } catch (e: any) {
      console.error(`[Error ${this.name}]: ${e.toString()}`);
      throw e;
    }
  };

  static getRecommendations = async (collectionVideoId: number) => {
    try {
      const result = await CApi.get(CEndpoint.minivodGetCollections(collectionVideoId), {
        query: {
          limit: 30,
        }
      });

      if (result.success === false) {
        throw result.message;
      }

      const data = result.data as MiniVideoVodListType;

      return data.List;

    } catch (e: any) {
      console.error(`[Error ${this.name}]: ${e.toString()}`);
      throw e;
    }
  };
}

type MiniVideoResponseType = {
  data: {
    List: Array<MiniVideo>;
  };
};

const fetchMiniVods = async (page: number, from: 'api' | 'local' = 'local') => {
  const apiCacheExists = await getIsApiCacheExist()
  if (!apiCacheExists || from === 'api' || page > 1 || DOWNLOAD_WATCH_ANYTIME === false) {
    console.debug('getting from api')
    const excluded = await getExcludedIds()
    return await MiniVodApi.getListByPage({
      page,
      limit: 300,
      exclude: excluded.join(','),
    });
  } else {
    console.debug('getting from local')
    return shuffle(await getApiCache())
  }
}

const prefetchMiniVod = async (queryClient: QueryClient) => {
  queryClient.prefetchInfiniteQuery(
    ["watchAnytime", "normal", false],
    ({ pageParam = 1 }) => fetchMiniVods(pageParam)
  );

  // console.info('done prefetch minivod')
};

const fetchAdultVods = async (page: number, isVip: boolean) => {
  return MiniVodApi.getListByPage({
    page,
    limit: 300,
  }).then((data) => {
    if (isVip) {
      // console.debug('api return vip content')
      return data.List;
    } else {
      // console.debug('api return non-vip content')
      return data.NonVIPList;
    }
  });
};

const prefetchAdultMiniVod = async (queryClient: QueryClient) => {

  queryClient.prefetchInfiniteQuery(
    ["watchAnytime", "adult", false],
    ({ pageParam = 1 }) => fetchAdultVods(pageParam, false)
  );
  queryClient.prefetchInfiniteQuery(
    ["watchAnytime", "adult", true],
    ({ pageParam = 1 }) => fetchAdultVods(pageParam, true)
  );

  // console.info('done prefetch adult minivod')
};

const useMinivodQuery = (fetchMode: 'adult' | 'normal', isVip: boolean) => useInfiniteQuery(
  ['watchAnytime', fetchMode, isVip],
  ({ pageParam = 1 }) => {
    console.log('fetchMode -', fetchMode);
    if (fetchMode == 'normal') {
      return fetchMiniVods(pageParam);
    } else {
      return fetchAdultVods(pageParam, isVip);
    }
  },
  {
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1;
    },
    onSuccess: data => { },
    refetchOnMount: 'always',
  },
);

export { fetchMiniVods, fetchAdultVods, prefetchAdultMiniVod, prefetchMiniVod, useMinivodQuery }