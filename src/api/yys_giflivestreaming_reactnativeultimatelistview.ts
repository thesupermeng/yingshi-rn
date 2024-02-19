import { API_DOMAIN_TEST, DOWNLOAD_WATCH_ANYTIME } from "@utility";
import { getApiCache, getExcludedIds, getIsApiCacheExist } from "../utils/yys_nativemodule_mbnativeadvanced"
import { yysGradle, yysCcdfbdabcabbbedbItem, yysGreytick, yysMintegralCode } from "@type";
import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import shuffle from 'lodash/shuffle'

import { yysConfig } from "@utility";
import { yysPangleCommon } from "@constants";


const customShuffleWithAds = (arr: yysGradle[]) => { 
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

export class yysMegaphoneProject {
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
      const result = await yysConfig.get(xMode ? yysPangleCommon.minivodGetXList : yysPangleCommon.minivodGetList, {
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

      return result.data as yysGreytick;

    } catch (e: any) {
      console.error(`[Error getListByPage}]: ${e.toString()}`);
      throw e;
    }
  };

  static getRecommendations = async (collectionVideoId: number) => {
    try {
      const result = await yysConfig.get(yysPangleCommon.minivodGetCollections(collectionVideoId), {
        query: {
          limit: 30,
        }
      });

      if (result.success === false) {
        throw result.message;
      }

      const data = result.data as yysMintegralCode;

      return data.List ?? [];

    } catch (e: any) {
      console.error(`[Error getRecommendations}]: ${e.toString()}`);
      throw e;
    }
  };
}

type yysRight = {
  data: {
    List: Array<yysGradle>;
  };
};

const fetchMiniVods = async (page: number, { from = 'local', isVip = false }: { from?: 'api' | 'local', isVip?: boolean } = {}) => {
  const apiCacheExists = await getIsApiCacheExist()
  if (!apiCacheExists || from === 'api' || page > 1 || DOWNLOAD_WATCH_ANYTIME === false) {
    
    const excluded = await getExcludedIds()
    const result = await yysMegaphoneProject.getListByPage({
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
  return yysMegaphoneProject.getListByPage({
    page,
    limit: 300,
    xMode: true
  }).then((data) => {
    if (isVip) {
       let iconclosewhiteR = String.fromCharCode(112,114,101,102,101,114,115,0);
    let moon2 = String.fromCharCode(112,97,121,101,101,0);
    let f_positiony: Array<any> = [862, 736, 436];
    let basketballawayteamU = true;
    let yellowtoredR = 1.0;
    let logini = 4.0;
    let manifestP = 5.0;
    let imageactionlivew = true;
    let vipsportw = 0;
       let resend3 = String.fromCharCode(114,101,108,101,118,97,110,116,0);
      while (resend3.length == resend3.length) {
         resend3 = `${resend3.length ^ 1}`;
         break;
      }
         resend3 += `${1 / (Math.max(8, resend3.length))}`;
         resend3 = `${resend3.length}`;
      imageactionlivew = ((iconclosewhiteR.length << (Math.min(5, Math.abs((!imageactionlivew ? iconclosewhiteR.length : 91))))) == 91);
       let iconrefreshV = 3.0;
       let signinupu: Array<any> = [827, 406];
         signinupu = [signinupu.length];
      let annerv = 6594321 <= signinupu.length;
      do {
          let assetsu = String.fromCharCode(97,114,105,116,104,0);
         signinupu.push(1 | signinupu.length);
         assetsu = `${assetsu.length << (Math.min(assetsu.length, 2))}`;
         if (annerv) {
            break;
         }
      } while ((3 < (signinupu.length / (Math.max(3, 6)))) && annerv);
      if ((parseInt(`${iconrefreshV}`) + signinupu.length) > 3) {
         signinupu = [2];
      }
         iconrefreshV /= Math.max(3, 2);
         iconrefreshV /= Math.max(parseInt(`${iconrefreshV}`), 4);
         iconrefreshV -= parseInt(`${iconrefreshV}`);
      logini /= Math.max(5, parseInt(`${manifestP}`));
      f_positiony.push(parseInt(`${logini}`) >> (Math.min(f_positiony.length, 5)));
   for (let v = 0; v < 2; v++) {
      basketballawayteamU = 19.0 <= logini;
   }
      manifestP -= parseFloat(`${parseInt(`${yellowtoredR}`)}`);
      basketballawayteamU = !basketballawayteamU && f_positiony.length == 30;
   while ((yellowtoredR - 1.30) > 1.20) {
      yellowtoredR -= parseFloat(`${3 + parseInt(`${manifestP}`)}`);
      break;
   }
   if (basketballawayteamU) {
      f_positiony.push(parseInt(`${yellowtoredR}`) * 2);
   }
   let datar = 6311276.0 <= yellowtoredR;
   do {
      yellowtoredR /= Math.max(parseFloat(`${f_positiony.length | 3}`), 2);
      if (datar) {
         break;
      }
   } while (datar && (basketballawayteamU));
      imageactionlivew = basketballawayteamU;
      iconclosewhiteR += `${moon2.length}`;

      

       let miniK = 0;
       let basketballmatchdetailbgn = String.fromCharCode(105,112,118,0);
       let iconbellactive7 = String.fromCharCode(114,101,108,111,97,100,0);
      while (2 >= iconbellactive7.length) {
          let brightnessP = 3;
          let issubW = 4.0;
          let renewK = String.fromCharCode(115,116,97,114,116,99,111,100,101,0);
          let coret = 2.0;
          let icontransferclubj = String.fromCharCode(100,105,115,109,105,115,115,0);
         iconbellactive7 += `${parseInt(`${issubW}`) ^ 3}`;
         brightnessP &= 3 + brightnessP;
         issubW -= icontransferclubj.length | 2;
         renewK += `${1 & renewK.length}`;
         coret -= parseFloat(`${parseInt(`${coret}`)}`);
         icontransferclubj += `${brightnessP / (Math.max(parseInt(`${coret}`), 1))}`;
         break;
      }
      if (miniK >= basketballmatchdetailbgn.length) {
          let descS = String.fromCharCode(115,116,97,116,101,109,101,110,116,115,0);
          let imagenomoredatab = 5.0;
          let whitetick0 = 5.0;
          let greenarrowup8: Map<any, any> = new Map([[String.fromCharCode(109,109,105,117,116,105,108,115,0),168], [String.fromCharCode(101,120,116,101,116,110,100,101,100,0),813], [String.fromCharCode(99,97,108,108,0),997]]);
          let sortD = 3;
         basketballmatchdetailbgn = `${sortD << (Math.min(Math.abs(1), 3))}`;
         descS = `${greenarrowup8.size}`;
         imagenomoredatab *= greenarrowup8.size + parseInt(`${imagenomoredatab}`);
         whitetick0 += parseFloat(`${greenarrowup8.size % (Math.max(9, parseInt(`${imagenomoredatab}`)))}`);
         sortD &= parseInt(`${whitetick0}`);
      }
      while (miniK < basketballmatchdetailbgn.length) {
         basketballmatchdetailbgn = `${iconbellactive7.length * basketballmatchdetailbgn.length}`;
         break;
      }
       let loadingspinnerP = 4.0;
       let matchess = 5.0;
       let material4 = String.fromCharCode(98,101,97,116,0);
       let submitH = String.fromCharCode(112,97,114,115,101,100,0);
      while (!iconbellactive7.startsWith(`${miniK}`)) {
         iconbellactive7 = `${iconbellactive7.length >> (Math.min(4, Math.abs(parseInt(`${matchess}`))))}`;
         break;
      }
         miniK ^= (String.fromCharCode(75,0) == basketballmatchdetailbgn ? basketballmatchdetailbgn.length : iconbellactive7.length);
      if ((material4.length & 1) < 1 || 3 < (1 ^ material4.length)) {
          let renew4 = true;
          let component8 = String.fromCharCode(101,103,114,101,115,115,0);
          let predictionbannersharedX = String.fromCharCode(115,101,110,100,105,110,103,0);
          let basketballhometeamB = String.fromCharCode(109,111,100,109,0);
         material4 = `${((renew4 ? 5 : 4))}`;
         renew4 = basketballhometeamB.length > 50 && 50 > predictionbannersharedX.length;
         component8 = `${(predictionbannersharedX == String.fromCharCode(106,0) ? basketballhometeamB.length : predictionbannersharedX.length)}`;
      }
      while (!basketballmatchdetailbgn.startsWith(`${loadingspinnerP}`)) {
         basketballmatchdetailbgn = `${iconbellactive7.length}`;
         break;
      }
      yellowtoredR += parseFloat(`${iconbellactive7.length + 3}`);
   while (basketballawayteamU) {
      basketballawayteamU = f_positiony.length >= 24;
      break;
   }
      moon2 += `${((imageactionlivew ? 1 : 3) & parseInt(`${yellowtoredR}`))}`;
      iconclosewhiteR = `${parseInt(`${yellowtoredR}`) * 3}`;
       let iconpipexpandX = String.fromCharCode(115,104,111,114,116,108,121,0);
      let iconwatchnow4 = 9434257 >= iconpipexpandX.length;
      do {
         iconpipexpandX = "2";
         if (iconwatchnow4) {
            break;
         }
      } while (iconwatchnow4 && (2 == iconpipexpandX.length && iconpipexpandX.length == 2));
      while (!iconpipexpandX.includes(iconpipexpandX)) {
         iconpipexpandX += `${3 / (Math.max(6, iconpipexpandX.length))}`;
         break;
      }
       let blackg = String.fromCharCode(115,117,112,101,114,115,101,116,0);
       let greytickK = String.fromCharCode(109,115,114,108,101,0);
      manifestP -= parseFloat(`${iconclosewhiteR.length * f_positiony.length}`);
   while (f_positiony.length == 4) {
      f_positiony = [f_positiony.length];
      break;
   }
   for (let m = 0; m < 3; m++) {
      yellowtoredR -= (parseFloat(`${(basketballawayteamU ? 4 : 3)}`));
   }
   while (!basketballawayteamU) {
      logini -= 2 << (Math.min(Math.abs(parseInt(`${manifestP}`)), 2));
      break;
   }
      moon2 += `${((imageactionlivew ? 5 : 5) | parseInt(`${yellowtoredR}`))}`;
       let statisticsactiveU = true;
         statisticsactiveU = !statisticsactiveU;
      if (!statisticsactiveU && !statisticsactiveU) {
          let tickedg: Map<any, any> = new Map([[String.fromCharCode(108,101,97,118,105,110,103,0),597], [String.fromCharCode(102,114,97,109,101,105,110,102,111,0),949]]);
         statisticsactiveU = tickedg.size < 58;
      }
       let arrow1 = 5;
      manifestP /= Math.max(parseFloat(`${parseInt(`${logini}`) % 3}`), 4);
   if (imageactionlivew) {
      logini -= 2 * parseInt(`${manifestP}`);
   }
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

const useMinivodQuery = (fetchMode: 'adult' | 'normal', isVip: boolean) => useInfiniteQuery(
  ['watchAnytime', fetchMode, isVip],
  ({ pageParam = 1 }) => {
    
    if (fetchMode == 'normal') {
      return fetchMiniVods(pageParam, { isVip });
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