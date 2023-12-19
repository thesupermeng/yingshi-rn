import { API_DOMAIN_TEST } from "@utility/constants";
import { getExcludedIds } from "../utils/minivodDownloader"
import { MiniVideo } from "@type/ajaxTypes";
import { QueryClient } from "@tanstack/react-query";

type MiniVideoResponseType = {
  data: {
    List: Array<MiniVideo>;
  };
};

export const fetchMiniVods = async (page: number) => {
  const excluded = await getExcludedIds()
  const res = await fetch(`${API_DOMAIN_TEST}miniVod/v2/miniVod?page=${page}&limit=300&exclude=${excluded.join(',')}`)
  const json: MiniVideoResponseType = await res.json()
  return json.data.List

}

export const prefetchMiniVod = async (queryClient: QueryClient) => {
  queryClient.prefetchInfiniteQuery(
    ["watchAnytime", "normal"],
    ({ pageParam = 1 }) => fetchMiniVods(pageParam)
  );
  
  // console.info('done prefetch minivod')
}

const fetchAdultVods = (page: number) =>
      fetch(`${API_DOMAIN_TEST}miniSVod/v1/miniSVod?page=${page}&limit=300`)
        .then((response) => response.json())
        .then((json: MiniVideoResponseType) => {
          return json.data.List;
        });

export const prefetchAdultMiniVod = async (queryClient: QueryClient) => {
  
    queryClient.prefetchInfiniteQuery(
      ["watchAnytime", "adult"],
      ({ pageParam = 1 }) => fetchAdultVods(pageParam)
    );

  // console.info('done prefetch adult minivod')
}
