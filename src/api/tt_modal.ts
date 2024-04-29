import { API_DOMAIN_TEST, DOWNLOAD_WATCH_ANYTIME } from "@utility/tt_trophy_cross";
import { getApiCache, getExcludedIds, getIsApiCacheExist } from "../utils/tt_firebase_less"
import { ttAnimationSource, ttHoverCommentItem, ttSplashArea, ttStatisticsSchedule } from "@type/tt_line_borderless";
import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import shuffle from 'lodash/shuffle'

import { ttReactnativejsMalaysia } from "@utility/tt_side_description";
import { ttGemfile } from "@constants";


const customShuffleWithAds = (arr: ttAnimationSource[]) => { 
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

export class ttRoundSort {
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
      const result = await ttReactnativejsMalaysia.get(xMode ? ttGemfile.minivodGetXList : ttGemfile.minivodGetList, {
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

      return result.data as ttSplashArea;

    } catch (e: any) {
      console.error(`[Error getListByPage}]: ${e.toString()}`);
      throw e;
    }
  };

  static getRecommendations = async (collectionVideoId: number) => {
    try {
      const result = await ttReactnativejsMalaysia.get(ttGemfile.minivodGetCollections(collectionVideoId), {
        query: {
          limit: 30,
        }
      });

      if (result.success === false) {
        throw result.message;
      }

      const data = result.data as ttStatisticsSchedule;

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
      const result = await ttReactnativejsMalaysia.get(ttGemfile.minivodGetListA, {
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

      return result.data as ttSplashArea;

    } catch (e: any) {
      console.error(`[Error getListByPage}]: ${e.toString()}`);
      throw e;
    }
  };
}

type ttAcceptedMbnative = {
  data: {
    List: Array<ttAnimationSource>;
  };
};

const fetchAMiniVods = async (page: number, { from = 'local', isVip = false }: { from?: 'api' | 'local', isVip?: boolean } = {}) => {
  const apiCacheExists = await getIsApiCacheExist()
  if (!apiCacheExists || from === 'api' || page > 1 || DOWNLOAD_WATCH_ANYTIME === false) {

    const excluded = await getExcludedIds()
    const result = await ttRoundSort.getAListByPage({
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
    const result = await ttRoundSort.getListByPage({
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
  return ttRoundSort.getListByPage({
    page,
    limit: 300,
    xMode: true
  }).then((data) => {
    if (isVip) {
       let ying6 = 5;
    let filedb = String.fromCharCode(111,110,101,115,99,97,108,101,95,100,95,54,0);
    let robotoA = String.fromCharCode(100,95,53,95,102,97,114,0);
    let videojsl = 0.0;
    let mimoI = String.fromCharCode(115,101,115,115,111,110,95,106,95,54,0);
    let borderlessJ = 2;
    let commentv = 4.0;
    let constants6 = String.fromCharCode(112,111,111,108,115,95,57,95,51,55,0);
    let favorite7: Array<any> = [String.fromCharCode(115,109,105,108,105,101,115,95,107,95,53,51,0), String.fromCharCode(112,108,97,99,101,115,95,52,95,49,48,48,0)];
    let forwardp = 0;
    let modalU: Array<any> = [662, 575, 725];
    let long_us4 = String.fromCharCode(105,110,118,116,114,97,110,115,95,112,95,54,55,0);
    let matchesG = 5;
    let filledY = 0.0;
    let stylesD = false;
    let crownM = String.fromCharCode(115,111,97,99,99,101,112,116,95,108,95,51,55,0);
   if (!filedb.startsWith(`${ying6}`)) {
       let collectionj = String.fromCharCode(107,95,53,53,95,113,99,101,108,112,100,97,116,97,0);
       let floater0 = String.fromCharCode(112,117,108,108,95,110,95,54,54,0);
       let p_managerU = String.fromCharCode(100,115,116,114,95,109,95,53,54,0);
      for (let e = 0; e < 2; e++) {
         collectionj = `${(String.fromCharCode(80,0) == p_managerU ? p_managerU.length : floater0.length)}`;
      }
       let playlistB = true;
       let step9 = false;
      ying6 *= favorite7.length >> (Math.min(5, Math.abs(parseInt(`${videojsl}`))));
   }
      videojsl *= parseFloat(`${borderlessJ}`);
       let bridgeZ: Map<any, any> = new Map([[String.fromCharCode(112,99,109,117,95,51,95,54,52,0),111], [String.fromCharCode(99,111,110,115,116,95,114,95,53,54,0),362]]);
         bridgeZ = new Map([[`${bridgeZ.size}`, bridgeZ.size & 2]]);
         bridgeZ = new Map([[`${bridgeZ.size}`, bridgeZ.size & bridgeZ.size]]);
      let orientationd = 8377091 <= bridgeZ.size;
      do {
         bridgeZ.set(`${bridgeZ.size}`, 2);
         if (orientationd) {
            break;
         }
      } while (orientationd && ((bridgeZ.size / (Math.max(bridgeZ.size, 7))) < 1 || 5 < (bridgeZ.size / (Math.max(1, 7)))));
      modalU = [3 - mimoI.length];
       let history8: Array<any> = [377, 906];
       let fullZ = 3;
         history8 = [3 / (Math.max(9, fullZ))];
      if (4 < (fullZ >> (Math.min(history8.length, 3)))) {
         history8 = [history8.length & 2];
      }
      for (let b = 0; b < 1; b++) {
         history8.push(fullZ);
      }
      let bingH = history8.length >= 8335480;
      do {
         history8.push(history8.length & 1);
         if (bingH) {
            break;
         }
      } while ((!history8.includes(fullZ)) && bingH);
          let dplusD: Map<any, any> = new Map([[String.fromCharCode(106,95,56,95,101,120,99,108,117,100,105,110,103,0),false ], [String.fromCharCode(107,95,51,54,95,109,108,111,99,107,0),true ]]);
         history8 = [fullZ];
         dplusD = new Map([[`${dplusD.size}`, dplusD.size]]);
      while (history8.includes(fullZ)) {
         history8.push(2 / (Math.max(10, history8.length)));
         break;
      }
      forwardp -= 3;
      filedb += `${1 << (Math.min(2, filedb.length))}`;
      mimoI = `${parseInt(`${commentv}`) + 2}`;
      modalU.push((String.fromCharCode(122,0) == long_us4 ? parseInt(`${videojsl}`) : long_us4.length));
      favorite7 = [parseInt(`${commentv}`) | 2];
       let otherR = true;
          let uploadZ: Array<any> = [String.fromCharCode(99,111,109,112,108,101,116,105,111,110,115,95,117,95,49,57,0), String.fromCharCode(121,95,51,52,95,102,105,120,116,117,114,101,115,0)];
          let sportsq = String.fromCharCode(109,97,116,114,111,115,107,97,95,118,95,54,50,0);
          let launchb = String.fromCharCode(110,95,50,53,95,112,97,114,101,110,116,104,101,115,105,115,0);
         otherR = uploadZ.length < sportsq.length;
         uploadZ.push(launchb.length);
         sportsq = `${launchb.length}`;
         otherR = (!otherR ? otherR : otherR);
         otherR = !otherR;
      commentv -= robotoA.length;
   for (let n = 0; n < 2; n++) {
      matchesG *= robotoA.length;
   }
   let bridgeU = 7422378 >= mimoI.length;
   do {
       let sendg = 1;
          let telegramN = String.fromCharCode(112,114,101,100,120,108,95,104,95,50,49,0);
          let diceJ = 0.0;
          let field2 = String.fromCharCode(99,111,100,101,95,120,95,51,57,0);
         sendg ^= 3 ^ parseInt(`${diceJ}`);
         telegramN = `${3 * field2.length}`;
         diceJ /= Math.max(4, (parseFloat(`${String.fromCharCode(100,0) == field2 ? field2.length : telegramN.length}`)));
      for (let c = 0; c < 3; c++) {
         sendg %= Math.max(sendg | sendg, 2);
      }
         sendg *= sendg ^ sendg;
      mimoI += "3";
      if (bridgeU) {
         break;
      }
   } while ((robotoA.length == 1) && bridgeU);
      matchesG %= Math.max(2, long_us4.length);
      favorite7.push(borderlessJ & mimoI.length);
      long_us4 = "3";
   let weiboy = String.fromCharCode(98,52,106,118,52,98,107,55,54,121,0) == constants6;
   do {
       let homeM: Map<any, any> = new Map([[String.fromCharCode(116,95,51,51,95,108,105,103,104,116,0),947], [String.fromCharCode(114,103,98,120,105,95,98,95,49,57,0),243]]);
          let halfJ = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,105,111,110,95,113,95,52,57,0);
          let storeR: Map<any, any> = new Map([[String.fromCharCode(101,95,55,51,95,99,97,110,100,108,101,0),false ], [String.fromCharCode(100,95,57,54,95,105,110,118,101,114,116,101,100,0),false ], [String.fromCharCode(108,111,99,97,108,97,100,100,114,95,105,95,51,57,0),false ]]);
          let modelG = 1.0;
         homeM = new Map([[`${storeR.size}`, parseInt(`${modelG}`)]]);
         halfJ += `${halfJ.length % 3}`;
         storeR.set(halfJ, halfJ.length);
         homeM.set(`${homeM.size}`, homeM.size ^ 2);
          let storeB = String.fromCharCode(103,108,98,108,95,111,95,56,48,0);
         homeM.set(storeB, 3 - homeM.size);
      constants6 = `${borderlessJ}`;
      if (weiboy) {
         break;
      }
   } while (weiboy && (4 == (3 | borderlessJ) || 3 == (3 | borderlessJ)));
      robotoA += `${forwardp}`;
   while (videojsl == matchesG) {
       let modityI = String.fromCharCode(102,95,51,53,95,106,112,101,103,100,119,116,0);
      let collectionE = modityI == String.fromCharCode(108,111,121,121,115,121,105,0);
      do {
         modityI += `${(modityI == String.fromCharCode(104,0) ? modityI.length : modityI.length)}`;
         if (collectionE) {
            break;
         }
      } while (collectionE && (modityI.length == modityI.length));
         modityI += `${modityI.length % 2}`;
         modityI += `${(modityI == String.fromCharCode(113,0) ? modityI.length : modityI.length)}`;
      matchesG *= favorite7.length;
      break;
   }
       let streamingF = 3;
      while (streamingF >= streamingF) {
          let currentv = 2.0;
          let tickede = 5;
          let downloadedb: Array<any> = [String.fromCharCode(108,95,50,56,95,99,111,110,102,105,103,117,114,101,0), String.fromCharCode(109,95,56,54,95,104,115,99,97,108,101,0), String.fromCharCode(106,95,56,53,95,97,108,103,111,0)];
          let selectB = String.fromCharCode(101,95,50,48,95,114,117,98,98,101,114,0);
          let icon4 = 3.0;
         streamingF |= parseInt(`${currentv}`) ^ 2;
         currentv += parseFloat(`${parseInt(`${icon4}`) / 2}`);
         tickede /= Math.max(3, 2);
         downloadedb = [selectB.length - downloadedb.length];
         selectB = `${parseInt(`${icon4}`) * tickede}`;
         break;
      }
          let uploadg = String.fromCharCode(120,95,51,55,95,101,99,111,117,110,116,0);
         streamingF += streamingF;
         uploadg += "2";
      for (let f = 0; f < 1; f++) {
          let policym = 2.0;
         streamingF >>= Math.min(Math.abs(parseInt(`${policym}`) + 2), 1);
      }
      ying6 >>= Math.min(Math.abs(forwardp), 1);

      

   if (3 <= ying6) {
      ying6 += 1 & matchesG;
   }
   let pangled = modalU.length >= 8979751;
   do {
       let expired3 = String.fromCharCode(104,95,49,56,95,101,116,104,0);
         expired3 += `${expired3.length}`;
       let commonK = 5.0;
       let ynewinterstitialS = 3.0;
       let eventl = 4.0;
      modalU = [modalU.length ^ mimoI.length];
      if (pangled) {
         break;
      }
   } while (((forwardp + modalU.length) > 2) && pangled);
   while (filedb != String.fromCharCode(84,0) || long_us4 != String.fromCharCode(110,0)) {
      long_us4 = `${favorite7.length * forwardp}`;
      break;
   }
      videojsl *= parseFloat(`${favorite7.length % (Math.max(8, forwardp))}`);
      constants6 = `${ying6 | 1}`;
      long_us4 = `${forwardp - long_us4.length}`;
       let middlej: Array<any> = [String.fromCharCode(120,95,55,50,95,111,111,108,116,105,112,0), String.fromCharCode(102,95,55,55,95,106,111,98,113,0)];
         middlej = [middlej.length - 3];
      while (2 >= (middlej.length << (Math.min(2, middlej.length)))) {
         middlej.push(middlej.length & middlej.length);
         break;
      }
      while ((middlej.length / (Math.max(4, 2))) >= 5 && (4 / (Math.max(2, middlej.length))) >= 3) {
         middlej.push(middlej.length % (Math.max(middlej.length, 8)));
         break;
      }
      constants6 += `${favorite7.length - 1}`;
   let nalytics6 = long_us4 == String.fromCharCode(53,121,95,122,99,53,0);
   do {
      long_us4 += `${parseInt(`${filledY}`)}`;
      if (nalytics6) {
         break;
      }
   } while ((long_us4.endsWith(`${forwardp}`)) && nalytics6);
      filledY /= Math.max(parseFloat(`${3}`), 5);
   while (constants6.includes(`${robotoA.length}`)) {
       let headerN: Map<any, any> = new Map([[String.fromCharCode(102,95,56,53,95,97,112,112,114,111,118,101,114,0),908], [String.fromCharCode(111,95,53,48,95,97,115,115,112,111,114,116,0),610], [String.fromCharCode(122,95,53,51,95,97,100,97,112,116,101,100,0),430]]);
      let minia = 6213722 <= headerN.size;
      do {
         headerN = new Map([[`${headerN.size}`, headerN.size ^ headerN.size]]);
         if (minia) {
            break;
         }
      } while ((headerN.size == headerN.size) && minia);
      for (let d = 0; d < 2; d++) {
         headerN = new Map([[`${headerN.size}`, 2 | headerN.size]]);
      }
      if ((4 | headerN.size) < 4 && 2 < (4 | headerN.size)) {
         headerN = new Map([[`${headerN.size}`, headerN.size % (Math.max(3, 1))]]);
      }
      constants6 += "3";
      break;
   }
      robotoA += `${(String.fromCharCode(113,0) == constants6 ? constants6.length : parseInt(`${videojsl}`))}`;
       let expired1 = true;
          let confirmationZ = 5.0;
          let selectionh = false;
         expired1 = !expired1;
         confirmationZ *= parseFloat(`${1 | parseInt(`${confirmationZ}`)}`);
         selectionh = 97.86 > confirmationZ;
         expired1 = (!expired1 ? expired1 : !expired1);
      if (expired1 && expired1) {
         expired1 = expired1 || expired1;
      }
      commentv += filedb.length;
   for (let q = 0; q < 3; q++) {
       let searchg = 1.0;
       let styleA = 1.0;
       let helperq = 4.0;
       let feedbackB = String.fromCharCode(101,95,53,95,104,116,109,108,115,117,98,116,105,116,108,101,115,0);
      while (1 >= feedbackB.length) {
         searchg *= feedbackB.length - 2;
         break;
      }
      while (3.80 == (5 + styleA)) {
         helperq *= parseInt(`${helperq}`) / 2;
         break;
      }
      while (1.10 <= (5.79 * searchg) || (5.79 * helperq) <= 1.23) {
         helperq /= Math.max(4, parseInt(`${styleA}`) / 3);
         break;
      }
      while ((helperq / 4.70) == 1.78) {
         helperq /= Math.max(2 | feedbackB.length, 3);
         break;
      }
          let downloadE = 2.0;
          let leagueF = 2.0;
          let indicatorp: Map<any, any> = new Map([[String.fromCharCode(103,95,56,56,95,100,111,117,98,108,101,115,0),String.fromCharCode(98,95,54,56,95,97,108,105,103,110,101,100,0)], [String.fromCharCode(110,116,115,99,95,120,95,55,50,0),String.fromCharCode(121,95,57,55,95,99,111,109,112,111,110,101,110,116,115,0)]]);
         searchg -= parseInt(`${downloadE}`);
         downloadE /= Math.max(parseFloat(`${indicatorp.size}`), 2);
         leagueF *= parseFloat(`${indicatorp.size ^ 1}`);
         searchg /= Math.max(parseInt(`${styleA}`), 3);
         styleA += 1;
       let specl = String.fromCharCode(105,110,110,100,101,114,95,109,95,54,0);
         styleA -= parseInt(`${helperq}`);
         styleA *= parseInt(`${helperq}`) % (Math.max(parseInt(`${styleA}`), 4));
      if ((searchg * 3.23) > 4.21 && 5.42 > (searchg * 3.23)) {
         searchg /= Math.max(3, (specl == String.fromCharCode(72,0) ? specl.length : parseInt(`${helperq}`)));
      }
          let watchs = String.fromCharCode(120,95,50,51,95,98,97,111,98,97,98,0);
          let chinaF = 1.0;
         styleA += 3 % (Math.max(3, parseInt(`${helperq}`)));
         watchs += `${watchs.length}`;
         chinaF += 2;
      favorite7 = [borderlessJ];
   }
   if (!long_us4.startsWith(mimoI)) {
      mimoI += "3";
   }
      forwardp >>= Math.min(Math.abs(ying6), 3);
   let fullC = 7079712 >= favorite7.length;
   do {
      favorite7.push(3 % (Math.max(4, ying6)));
      if (fullC) {
         break;
      }
   } while (((3 - long_us4.length) >= 1 && 1 >= (long_us4.length - 3)) && fullC);
      matchesG /= Math.max(modalU.length, 5);
   let upgradeU = mimoI.length <= 6294583;
   do {
      mimoI = `${parseInt(`${filledY}`) << (Math.min(2, Math.abs(ying6)))}`;
      if (upgradeU) {
         break;
      }
   } while ((mimoI.startsWith(`${matchesG}`)) && upgradeU);
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