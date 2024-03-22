import { API_DOMAIN_TEST, DOWNLOAD_WATCH_ANYTIME } from "@utility/mayi_middleware_apps";
import { getApiCache, getExcludedIds, getIsApiCacheExist } from "../utils/mayi_context_statsnomoredata"
import { mayi_Small, mayi_ReportEncryptItem, mayi_Taiwan, mayi_Eighteen } from "@type/mayi_green";
import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import shuffle from 'lodash/shuffle'

import { mayi_ReactBang } from "@utility/mayi_zhubo";
import { mayi_Iconclosewhitewithbg } from "@constants";


const customShuffleWithAds = (arr: mayi_Small[]) => { 
  const contentArray = shuffle(arr.filter(item => !item.is_ads))
  const adsArray = shuffle(arr.filter(item => item.is_ads))

  const offsets = [5, 5, 5]

  let current = 0

  adsArray.forEach((val, index) => {
    const offsetIndex = index % 3
    current += offsets[offsetIndex]
    const ad = adsArray[index];

    contentArray.splice(current - 1, 0, ad)
  })

  return contentArray
}

export class mayi_Predictionarrow {
  static getListByPage = async ({
    page,
    limit = 100,
    exclude,
    xMode = false,
    isVip = false,
  }: {
    page: number,
    limit?: number,
    exclude?: string,
    xMode?: boolean,
    isVip?: boolean
  }) => {
    try {
      const result = await mayi_ReactBang.get(xMode ? mayi_Iconclosewhitewithbg.minivodGetXList : mayi_Iconclosewhitewithbg.minivodGetList, {
        query: {
          page,
          limit,
          exclude,
          isVip,
        }
      });

      if (result.success === false) {
        throw result.message;
      }

      return result.data as mayi_Taiwan;

    } catch (e: any) {
      console.error(`[Error getListByPage}]: ${e.toString()}`);
      throw e;
    }
  };

  static getRecommendations = async (collectionVideoId: number) => {
    try {
      const result = await mayi_ReactBang.get(mayi_Iconclosewhitewithbg.minivodGetCollections(collectionVideoId), {
        query: {
          limit: 30,
        }
      });

      if (result.success === false) {
        throw result.message;
      }

      const data = result.data as mayi_Eighteen;

      return data.List ?? [];

    } catch (e: any) {
      console.error(`[Error getRecommendations}]: ${e.toString()}`);
      throw e;
    }
  };

  static getAListByPage = async ({
    page,
    limit = 100,
    exclude,
    xMode = false,
    isVip = false,
  }: {
    page: number,
    limit?: number,
    exclude?: string,
    xMode?: boolean,
    isVip?: boolean
  }) => {
    console.debug('1231231')
    try {
      const result = await mayi_ReactBang.get(mayi_Iconclosewhitewithbg.minivodGetListA, {
        query: {
          page,
          limit,
          exclude,
          isVip,
        }
      });

      if (result.success === false) {
        throw result.message;
      }

      return result.data as mayi_Taiwan;

    } catch (e: any) {
      console.error(`[Error getListByPage}]: ${e.toString()}`);
      throw e;
    }
  };
}

type mayi_Math = {
  data: {
    List: Array<mayi_Small>;
  };
};

const fetchAMiniVods = async (page: number, { from = 'local', isVip = false }: { from?: 'api' | 'local', isVip?: boolean } = {}) => {
  const apiCacheExists = await getIsApiCacheExist()
  if (!apiCacheExists || from === 'api' || page > 1 || DOWNLOAD_WATCH_ANYTIME === false) {

    const excluded = await getExcludedIds()
    const result = await mayi_Predictionarrow.getAListByPage({
      page,
      limit: 300,
      exclude: excluded.join(','),
      isVip,
    });
    return result.List
  } else {

    return customShuffleWithAds(await getApiCache())
  }
}

const fetchMiniVods = async (page: number, { from = 'local', isVip = false }: { from?: 'api' | 'local', isVip?: boolean } = {}) => {
  const apiCacheExists = await getIsApiCacheExist()
  if (!apiCacheExists || from === 'api' || page > 1 || DOWNLOAD_WATCH_ANYTIME === false) {
    
    const excluded = await getExcludedIds()
    const result = await mayi_Predictionarrow.getListByPage({
      page,
      limit: 300,
      exclude: excluded.join(','),
      isVip,
    });
    return result.List
  } else {
    
    return customShuffleWithAds(await getApiCache())
  }
}

const prefetchMiniVod = async (queryClient: QueryClient) => {
  queryClient.prefetchInfiniteQuery(
    ["watchAnytime", "normal", false],
    ({ pageParam = 1 }) => fetchMiniVods(pageParam)
  );

  
};

const fetchAdultVods = async (page: number, isVip: boolean) => {
  return mayi_Predictionarrow.getListByPage({
    page,
    limit: 300,
    xMode: true
  }).then((data) => {
    if (isVip) {
       let light9 = 2.0;
    let tail_ = String.fromCharCode(100,101,113,117,97,110,116,95,57,95,55,0);
    let stations8 = String.fromCharCode(113,95,53,56,95,109,111,110,116,103,111,109,101,114,121,0);
    let defaultprofilepic8 = String.fromCharCode(104,105,103,104,95,55,95,54,48,0);
    let basketballtrophyo: Array<any> = [90, 374, 724];
    let iconorientation6 = String.fromCharCode(115,97,100,120,95,116,95,51,53,0);
    let empty7 = 4;
    let singaporez = false;
       let clearZ = 1;
       let bottomX = String.fromCharCode(119,95,52,51,95,112,108,97,121,101,114,0);
      for (let h = 0; h < 2; h++) {
         clearZ /= Math.max(bottomX.length / (Math.max(3, 9)), 5);
      }
         clearZ <<= Math.min(Math.abs(3), 1);
         clearZ -= 3 | clearZ;
      while ((clearZ * 3) > 3 || 3 > (clearZ * bottomX.length)) {
          let utilsh: Map<any, any> = new Map([[String.fromCharCode(119,104,105,116,101,115,112,97,99,101,95,121,95,50,51,0),886], [String.fromCharCode(101,95,56,53,0),825]]);
          let countryI = false;
          let kickV = 0;
          let package_tB = true;
          let filleda = String.fromCharCode(99,114,101,97,116,111,114,95,113,95,57,54,0);
         clearZ %= Math.max(3, utilsh.size - 2);
         utilsh.set(filleda, 2);
         countryI = 28 >= kickV;
         kickV -= kickV;
         package_tB = !package_tB;
         filleda += "3";
         break;
      }
         clearZ %= Math.max((String.fromCharCode(74,0) == bottomX ? clearZ : bottomX.length), 4);
      while ((1 - bottomX.length) <= 3 || (bottomX.length - 1) <= 2) {
          let l_hashs = String.fromCharCode(101,95,57,95,101,100,105,116,111,114,0);
         bottomX = `${clearZ % 1}`;
         l_hashs += `${(String.fromCharCode(55,0) == l_hashs ? l_hashs.length : l_hashs.length)}`;
         break;
      }
      light9 *= 3 * parseInt(`${light9}`);
       let iconwatchJ = String.fromCharCode(120,95,57,51,95,111,108,97,110,97,0);
       let iconstard = 5;
       let sharewhiteX = String.fromCharCode(114,95,53,50,95,112,117,110,99,116,117,97,116,105,111,110,0);
      for (let h = 0; h < 1; h++) {
         sharewhiteX += `${(String.fromCharCode(120,0) == iconwatchJ ? sharewhiteX.length : iconwatchJ.length)}`;
      }
      for (let q = 0; q < 2; q++) {
          let iconcalendarW: Array<any> = [String.fromCharCode(100,105,115,99,114,105,109,105,110,97,116,111,114,95,48,95,54,54,0), String.fromCharCode(100,95,51,54,95,112,105,116,99,104,102,105,108,116,101,114,0), String.fromCharCode(119,95,56,49,95,114,103,116,99,0)];
          let hejic = 5;
          let editk = false;
          let iconviewergif9 = String.fromCharCode(104,105,115,116,111,103,114,97,109,95,101,95,50,51,0);
          let analyticH = String.fromCharCode(116,111,111,108,98,97,114,115,95,105,95,52,57,0);
         iconstard >>= Math.min(Math.abs((sharewhiteX == String.fromCharCode(103,0) ? iconstard : sharewhiteX.length)), 1);
         iconcalendarW.push((analyticH == String.fromCharCode(69,0) ? hejic : analyticH.length));
         hejic <<= Math.min(2, parseInt(`${Math.abs((hejic << (Math.min(3, Math.abs((editk ? 3 : 5))))))}`));
         editk = iconviewergif9 == String.fromCharCode(74,0);
         iconviewergif9 += "1";
      }
         iconstard += 2;
         sharewhiteX = `${iconwatchJ.length}`;
         iconstard |= iconwatchJ.length;
         iconstard <<= Math.min(2, Math.abs(iconstard / (Math.max(2, 2))));
      let iconclosewhitebge = 5550425 >= iconstard;
      do {
          let giftbuttond = false;
          let imagenomoredata9: Array<any> = [String.fromCharCode(110,111,118,101,99,95,109,95,54,0), String.fromCharCode(97,95,57,48,95,97,115,115,105,103,110,109,101,110,116,0), String.fromCharCode(100,95,50,55,95,118,97,114,121,105,110,103,0)];
         iconstard |= sharewhiteX.length;
         giftbuttond = (100 >= ((giftbuttond ? imagenomoredata9.length : 100) & imagenomoredata9.length));
         if (iconclosewhitebge) {
            break;
         }
      } while ((3 >= (iconstard & 5) || 5 >= (iconstard & iconwatchJ.length)) && iconclosewhitebge);
      if (1 == (iconstard / (Math.max(sharewhiteX.length, 1))) && 1 == (iconstard / (Math.max(sharewhiteX.length, 5)))) {
         iconstard &= iconstard - 2;
      }
          let switch_knA = String.fromCharCode(119,121,99,104,101,112,114,111,111,102,95,100,95,54,0);
         iconstard %= Math.max(3 % (Math.max(5, iconwatchJ.length)), 3);
         switch_knA += `${2 >> (Math.min(5, switch_knA.length))}`;
      basketballtrophyo = [iconorientation6.length * 2];
   let darkC = 8977862 >= tail_.length;
   do {
      tail_ += `${empty7}`;
      if (darkC) {
         break;
      }
   } while ((3.28 >= light9) && darkC);
   while (stations8.length < defaultprofilepic8.length) {
       let anythinkJ = String.fromCharCode(97,97,99,100,101,99,95,122,95,49,48,48,0);
       let gemfile0 = 4.0;
         gemfile0 -= anythinkJ.length;
          let airbnbstarm: Map<any, any> = new Map([[String.fromCharCode(105,115,108,101,97,112,95,103,95,56,51,0),false ], [String.fromCharCode(99,111,110,116,105,110,117,101,95,120,95,56,51,0),true ]]);
          let linki = 3.0;
          let package_ir = String.fromCharCode(97,95,56,53,95,111,114,103,0);
         gemfile0 -= (String.fromCharCode(77,0) == anythinkJ ? anythinkJ.length : parseInt(`${gemfile0}`));
         airbnbstarm.set(`${package_ir}`, package_ir.length);
         linki /= Math.max(2, parseFloat(`${3}`));
      defaultprofilepic8 = `${2 + anythinkJ.length}`;
      break;
   }
   for (let y = 0; y < 1; y++) {
      iconorientation6 += `${empty7 | 3}`;
   }
   if (defaultprofilepic8.length <= stations8.length) {
      defaultprofilepic8 += `${tail_.length << (Math.min(Math.abs(2), 3))}`;
   }
   while (tail_.length == stations8.length) {
       let penaltyw: Map<any, any> = new Map([[String.fromCharCode(99,97,112,97,98,108,101,95,112,95,54,57,0),495], [String.fromCharCode(99,95,53,52,95,97,105,116,101,114,0),591]]);
       let analytics5 = 5.0;
       let neonu = String.fromCharCode(118,95,51,48,95,102,108,97,116,116,101,110,101,100,0);
      let club9 = 7994090 >= penaltyw.size;
      do {
          let sports = 5.0;
          let iconarrowrightorangeD = String.fromCharCode(109,95,49,57,95,109,98,115,116,114,105,110,103,0);
          let q_playerF: Array<any> = [508, 72, 646];
          let thailandO = 4.0;
          let bgvipsportZ = 4.0;
         penaltyw = new Map([[`${sports}`, 1]]);
         sports *= parseFloat(`${parseInt(`${bgvipsportZ}`) >> (Math.min(4, Math.abs(parseInt(`${thailandO}`))))}`);
         iconarrowrightorangeD = "2";
         q_playerF = [q_playerF.length & 3];
         thailandO *= parseInt(`${bgvipsportZ}`) - parseInt(`${thailandO}`);
         if (club9) {
            break;
         }
      } while (((2 % (Math.max(10, neonu.length))) < 4) && club9);
      while (!Array.from(penaltyw.keys()).includes(`${analytics5}`)) {
         analytics5 -= parseFloat(`${parseInt(`${analytics5}`) % 3}`);
         break;
      }
         neonu = `${neonu.length * 2}`;
      let emptyX = analytics5 <= 9355935.0;
      do {
          let eactF = String.fromCharCode(105,95,49,48,95,114,101,100,101,108,105,118,101,114,121,0);
         analytics5 /= Math.max((parseFloat(`${String.fromCharCode(68,0) == neonu ? neonu.length : eactF.length}`)), 4);
         if (emptyX) {
            break;
         }
      } while (emptyX && ((analytics5 + parseFloat(`${neonu.length}`)) <= 3.56 && 3.56 <= (parseFloat(`${neonu.length}`) + analytics5)));
          let basketballicont = String.fromCharCode(106,95,55,95,115,116,114,105,112,0);
          let unselectedX = 2.0;
         analytics5 -= parseFloat(`${basketballicont.length}`);
         basketballicont += `${1 ^ parseInt(`${unselectedX}`)}`;
         unselectedX *= parseFloat(`${2}`);
      stations8 = `${(String.fromCharCode(54,0) == tail_ ? tail_.length : iconorientation6.length)}`;
      break;
   }
   let yellowQ = defaultprofilepic8.length <= 8689894;
   do {
      defaultprofilepic8 += `${2 ^ basketballtrophyo.length}`;
      if (yellowQ) {
         break;
      }
   } while (yellowQ && (stations8.includes(defaultprofilepic8)));
      basketballtrophyo.push(3);
   while (stations8.includes(`${empty7}`)) {
      empty7 &= defaultprofilepic8.length + 1;
      break;
   }
      stations8 += `${defaultprofilepic8.length}`;

      

   let liveshareE = 5623927 >= defaultprofilepic8.length;
   do {
      defaultprofilepic8 = `${(String.fromCharCode(114,0) == iconorientation6 ? iconorientation6.length : stations8.length)}`;
      if (liveshareE) {
         break;
      }
   } while ((basketballtrophyo.length >= 1) && liveshareE);
      light9 /= Math.max(5, defaultprofilepic8.length % 3);
      tail_ += `${3 - basketballtrophyo.length}`;
      empty7 /= Math.max(5, (String.fromCharCode(49,0) == iconorientation6 ? basketballtrophyo.length : iconorientation6.length));
   if ((empty7 ^ tail_.length) >= 1 || (tail_.length ^ 1) >= 2) {
      tail_ += `${empty7}`;
   }
      iconorientation6 += `${iconorientation6.length}`;
   while (!stations8.includes(`${empty7}`)) {
      stations8 = `${parseInt(`${light9}`)}`;
      break;
   }
   let phoneshareM = tail_.length >= 6901250;
   do {
      tail_ = `${2 << (Math.min(1, tail_.length))}`;
      if (phoneshareM) {
         break;
      }
   } while (phoneshareM && (!singaporez));
      basketballtrophyo.push(1);
   if (5 >= (2 + defaultprofilepic8.length) || 4 >= (empty7 + 2)) {
       let classes1 = String.fromCharCode(109,101,109,99,109,112,95,117,95,52,49,0);
          let plashF = String.fromCharCode(102,95,54,51,95,110,97,118,105,103,97,116,105,111,110,0);
         classes1 += `${classes1.length | plashF.length}`;
          let eactK = false;
          let mappingX = 2;
         classes1 = "1";
         eactK = 70 == mappingX || eactK;
         mappingX |= 1;
         classes1 += `${(String.fromCharCode(48,0) == classes1 ? classes1.length : classes1.length)}`;
      defaultprofilepic8 = `${(String.fromCharCode(88,0) == iconorientation6 ? iconorientation6.length : classes1.length)}`;
   }
   let questk = String.fromCharCode(107,102,118,102,0) == defaultprofilepic8;
   do {
      defaultprofilepic8 += `${empty7 * stations8.length}`;
      if (questk) {
         break;
      }
   } while ((defaultprofilepic8.startsWith(`${light9}`)) && questk);
      return data.List;
    } else {
      
      return data.NonVIPList;
    }
  });
};

const prefetchAdultMiniVod = async (queryClient: QueryClient) => {

  queryClient.prefetchInfiniteQuery(
    ["watchAnytime", "adult", false],
    ({ pageParam = 1 }) => fetchAdultVods(pageParam, false)
  );
  
  
  //   ({ pageParam = 1 }) => fetchAdultVods(pageParam, true)
  

  
};

const useMinivodQuery = (fetchMode: 'adult' | 'normal', isVip: boolean, { isAscreen = false }: {
  isAscreen?: boolean,
} = {}) => useInfiniteQuery(
  ['watchAnytime', fetchMode, isVip],
  ({ pageParam = 1 }) => {
    
    if (fetchMode == 'normal') {
      return isAscreen ? fetchAMiniVods(pageParam, { isVip }) : fetchMiniVods(pageParam, { isVip });
    } else {
      return fetchAdultVods(pageParam, isVip);
    }
  },
  {
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1;
    },
    onSuccess: data => {
      
    },
    refetchOnMount: 'always',
  },
);

export { fetchMiniVods, fetchAdultVods, prefetchAdultMiniVod, prefetchMiniVod, useMinivodQuery }