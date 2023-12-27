import { API_DOMAIN_TEST, DOWNLOAD_WATCH_ANYTIME } from "@utility/constants";
import { getApiCache, getExcludedIds, getIsApiCacheExist } from "../utils/minivodDownloader"
import { MiniVideo } from "@type/ajaxTypes";
import { QueryClient } from "@tanstack/react-query";
import shuffle from 'lodash/shuffle'

type MiniVideoResponseType = {
  data: {
    List: Array<MiniVideo>;
  };
};

const fetchMiniVods = async (page: number, from: 'api'|'local' = 'local') => {
  const apiCacheExists = await getIsApiCacheExist()
  if (!apiCacheExists || from === 'api' || page > 1 || DOWNLOAD_WATCH_ANYTIME === false){
    console.debug('getting from api')
    const excluded = await getExcludedIds()
    const res = await fetch(`${API_DOMAIN_TEST}miniVod/v2/miniVod?page=${page}&limit=300&exclude=${excluded.join(',')}`)
    const json: MiniVideoResponseType = await res.json()
    return json.data.List
  } else {
    console.debug('getting from local')
    return shuffle(await getApiCache())
  }
}

const prefetchMiniVod = async (queryClient: QueryClient) => {
  queryClient.prefetchInfiniteQuery(
    ["watchAnytime", "normal", true],
    ({ pageParam = 1 }) => fetchMiniVods(pageParam)
  );
  queryClient.prefetchInfiniteQuery(
    ["watchAnytime", "normal", false],
    ({ pageParam = 1 }) => fetchMiniVods(pageParam)
  );
  
  // console.info('done prefetch minivod')
};

const fetchAdultVods = async (page: number, isVip: boolean) =>{
      return fetch(`${API_DOMAIN_TEST}miniSVod/v1/miniSVod?page=${page}&limit=300`)
        .then((response) => response.json())
        .then((json: MiniVideoResponseType) => {
          if (isVip){
            // console.debug('api return vip content')
            return json.data.List;
          } else {
            // console.debug('api return non-vip content')
            return json.data.NonVIPList;
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

export { fetchMiniVods, fetchAdultVods, prefetchAdultMiniVod, prefetchMiniVod }