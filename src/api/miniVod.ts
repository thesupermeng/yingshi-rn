import { API_DOMAIN_TEST } from "@utility/constants";
import { getExcludedIds } from "../utils/minivodDownloader"
import { MiniVideo } from "@type/ajaxTypes";
import { QueryClient } from "@tanstack/react-query";

type MiniVideoResponseType = {
  data: {
    List: Array<MiniVideo>;
  };
};

export const prefetchMiniVod = async (queryClient: QueryClient) => {
  const excludedIds = await getExcludedIds()

  const fetchVods = (page: number, excluded: string) =>
  fetch(`${API_DOMAIN_TEST}miniVod/v2/miniVod?page=${page}&limit=300&exclude=${excluded}`)
    .then((response) => response.json())
    .then((json: MiniVideoResponseType) => {
      return json.data.List;
    });

  queryClient.prefetchInfiniteQuery(
    ["watchAnytime", "normal"],
    ({ pageParam = 1 }) => fetchVods(pageParam, excludedIds.join(','))
  );
  
  // console.info('done prefetch minivod')
}

export const prefetchAdultMiniVod = async (queryClient: QueryClient) => {
  const fetchAdultVods = (page: number) =>
      fetch(`${API_DOMAIN_TEST}miniSVod/v1/miniSVod?page=${page}&limit=300`)
        .then((response) => response.json())
        .then((json: MiniVideoResponseType) => {
          return json.data.List;
        });

    queryClient.prefetchInfiniteQuery(
      ["watchAnytime", "adult"],
      ({ pageParam = 1 }) => fetchAdultVods(pageParam)
    );

  // console.info('done prefetch adult minivod')
}
