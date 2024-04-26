import { API_DOMAIN_TEST, DOWNLOAD_WATCH_ANYTIME } from "@utility/wawa_iconpointscore";
import { getApiCache, getExcludedIds, getIsApiCacheExist } from "../utils/wawa_notificationfillempty_models"
import { wawaBingPing, wawaBorderlessCombineItem, wawaTextlayoutmanager, wawaLibfbjni } from "@type/wawa_gradlew";
import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import shuffle from 'lodash/shuffle'

import { wawaGreyChange } from "@utility/wawa_graphics_manager";
import { wawaStatisticsEpisodes } from "@constants";


const customShuffleWithAds = (arr: wawaBingPing[]) => { 
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

export class wawaPredictionbuttonFootballtrophy {
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
      const result = await wawaGreyChange.get(xMode ? wawaStatisticsEpisodes.minivodGetXList : wawaStatisticsEpisodes.minivodGetList, {
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

      return result.data as wawaTextlayoutmanager;

    } catch (e: any) {
      console.error(`[Error getListByPage}]: ${e.toString()}`);
      throw e;
    }
  };

  static getRecommendations = async (collectionVideoId: number) => {
    try {
      const result = await wawaGreyChange.get(wawaStatisticsEpisodes.minivodGetCollections(collectionVideoId), {
        query: {
          limit: 30,
        }
      });

      if (result.success === false) {
        throw result.message;
      }

      const data = result.data as wawaLibfbjni;

      return data.List ?? [];

    } catch (e: any) {
      console.error(`[Error getRecommendations}]: ${e.toString()}`);
      throw e;
    }
  };
}

type wawaSheet = {
  data: {
    List: Array<wawaBingPing>;
  };
};

const fetchMiniVods = async (page: number, { from = 'local', isVip = false }: { from?: 'api' | 'local', isVip?: boolean } = {}) => {
  const apiCacheExists = await getIsApiCacheExist()
  if (!apiCacheExists || from === 'api' || page > 1 || DOWNLOAD_WATCH_ANYTIME === false) {
    
    const excluded = await getExcludedIds()
    const result = await wawaPredictionbuttonFootballtrophy.getListByPage({
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
  return wawaPredictionbuttonFootballtrophy.getListByPage({
    page,
    limit: 300,
    xMode: true
  }).then((data) => {
    if (isVip) {
       let videojsU = 3.0;
    let textinputQ = String.fromCharCode(107,95,52,49,95,120,112,101,114,105,109,101,110,116,97,108,0);
    let basketballmatchdetailbgC = 0.0;
    let miniK = 1.0;
    let main_xp = false;
    let iconlogoutY = String.fromCharCode(111,95,49,48,48,95,102,97,105,108,0);
    let hooksS: Map<any, any> = new Map([[String.fromCharCode(111,95,49,53,95,98,105,110,107,100,97,116,97,0),208], [String.fromCharCode(105,115,115,117,101,115,95,118,95,49,48,48,0),740]]);
    let bnewarchdefaultsQ = String.fromCharCode(116,95,53,53,0);
    let resendN = String.fromCharCode(114,95,56,52,95,115,99,97,110,115,116,97,116,117,115,0);
    let iconviewerf = false;
    let hometeamfieldf = String.fromCharCode(112,95,56,50,95,98,105,103,105,110,116,101,103,101,114,0);
    let goalB = true;
   if (iconlogoutY.length >= 3) {
      iconlogoutY = `${parseInt(`${miniK}`) * 1}`;
   }
   if (!main_xp) {
       let iconeyew = String.fromCharCode(116,95,56,56,95,116,116,114,105,98,117,116,101,100,0);
          let animationsI: Map<any, any> = new Map([[String.fromCharCode(116,95,55,54,95,116,105,109,115,116,97,109,112,0),118], [String.fromCharCode(106,95,57,52,95,104,121,112,111,116,104,101,115,101,115,0),655], [String.fromCharCode(99,97,114,114,105,97,103,101,95,112,95,56,56,0),29]]);
          let images_ = String.fromCharCode(107,95,55,48,95,118,101,114,98,97,116,105,109,0);
         iconeyew += `${animationsI.size % 1}`;
         animationsI.set(images_, images_.length);
          let rewardvideoi: Map<any, any> = new Map([[String.fromCharCode(108,95,51,48,95,115,116,97,108,108,0),false ], [String.fromCharCode(105,95,56,48,95,114,101,97,115,111,110,115,0),false ], [String.fromCharCode(118,112,105,110,116,114,97,112,114,101,100,95,116,95,53,49,0),false ]]);
         iconeyew = `${rewardvideoi.size & iconeyew.length}`;
      if (iconeyew.endsWith(iconeyew)) {
         iconeyew += `${iconeyew.length}`;
      }
      resendN += `${(String.fromCharCode(89,0) == bnewarchdefaultsQ ? bnewarchdefaultsQ.length : iconlogoutY.length)}`;
   }
   while ((3 * hooksS.size) < 3) {
      hooksS = new Map([[`${basketballmatchdetailbgC}`, ((main_xp ? 2 : 4) / (Math.max(3, parseInt(`${basketballmatchdetailbgC}`))))]]);
      break;
   }
      basketballmatchdetailbgC += parseInt(`${videojsU}`);
       let libruntimeexecutorX = String.fromCharCode(115,101,116,108,105,115,116,95,102,95,49,55,0);
       let encryptz = true;
       let ajaxc = true;
      while (libruntimeexecutorX.length <= 2 && encryptz) {
          let iconstarH = String.fromCharCode(99,111,111,107,105,101,95,52,95,53,55,0);
          let k_animationz = 0;
          let playm = 4.0;
          let matchactive2 = String.fromCharCode(105,109,112,114,101,115,115,105,111,110,95,53,95,53,55,0);
          let libruntimeexecutorb = String.fromCharCode(100,101,115,116,114,117,99,116,105,118,101,95,118,95,50,48,0);
         libruntimeexecutorX = `${((encryptz ? 2 : 4) - 3)}`;
         iconstarH += `${matchactive2.length}`;
         k_animationz <<= Math.min(Math.abs(1 * matchactive2.length), 5);
         playm -= parseFloat(`${3 >> (Math.min(5, Math.abs(parseInt(`${playm}`))))}`);
         libruntimeexecutorb += `${parseInt(`${playm}`)}`;
         break;
      }
      for (let w = 0; w < 1; w++) {
         encryptz = (encryptz ? ajaxc : !encryptz);
      }
      iconviewerf = libruntimeexecutorX.length > iconlogoutY.length;
       let humidityg = String.fromCharCode(102,95,50,57,95,112,114,111,109,111,116,101,0);
      let libhermesb = humidityg == String.fromCharCode(102,118,49,49,118,113,0);
      do {
          let minimizea = String.fromCharCode(119,95,56,95,105,110,116,101,103,114,97,116,101,0);
          let video3 = 4;
         humidityg += `${video3}`;
         minimizea += `${3 % (Math.max(3, minimizea.length))}`;
         video3 += 3;
         if (libhermesb) {
            break;
         }
      } while (libhermesb && (humidityg.startsWith(`${humidityg.length}`)));
      for (let g = 0; g < 1; g++) {
         humidityg += `${humidityg.length}`;
      }
      if (5 > humidityg.length) {
          let iconeyeV = 4;
          let libavfilter6 = String.fromCharCode(111,95,49,53,95,104,101,97,100,101,114,115,0);
         humidityg = `${iconeyeV}`;
         iconeyeV -= libavfilter6.length * 2;
         libavfilter6 += `${libavfilter6.length}`;
      }
      hooksS = new Map([[textinputQ, bnewarchdefaultsQ.length - textinputQ.length]]);
      basketballmatchdetailbgC /= Math.max(bnewarchdefaultsQ.length | resendN.length, 4);
      miniK *= parseFloat(`${hooksS.size}`);
   while (!iconlogoutY.startsWith(`${main_xp}`)) {
      main_xp = textinputQ.length == 42 || iconviewerf;
      break;
   }
   for (let y = 0; y < 2; y++) {
      resendN = `${2 ^ bnewarchdefaultsQ.length}`;
   }
   if (4 < iconlogoutY.length) {
       let humidityJ = 3.0;
       let statsnomoredata2: Map<any, any> = new Map([[String.fromCharCode(107,95,51,49,95,106,118,101,114,115,105,111,110,0),941], [String.fromCharCode(113,95,49,57,95,102,105,114,115,116,108,105,110,101,0),945]]);
       let lessy = String.fromCharCode(112,101,114,109,95,112,95,56,56,0);
       let yellowq = 2;
      while (yellowq > 1) {
         statsnomoredata2 = new Map([[`${statsnomoredata2.size}`, 3]]);
         break;
      }
         lessy = `${parseInt(`${humidityJ}`) & 3}`;
      if ((1.29 + humidityJ) < 3.0) {
          let applicationf = String.fromCharCode(102,95,55,48,95,115,101,99,111,110,100,97,114,121,0);
          let roundQ = true;
          let countdownq = String.fromCharCode(99,95,51,48,95,99,97,108,99,117,108,97,116,105,110,103,0);
          let soundr = true;
          let libswscaleC = String.fromCharCode(108,95,52,55,95,100,97,116,97,98,108,111,99,107,0);
         humidityJ /= Math.max(3, (applicationf == String.fromCharCode(103,0) ? yellowq : applicationf.length));
         roundQ = (!soundr ? roundQ : soundr);
         countdownq += `${((roundQ ? 2 : 3) | libswscaleC.length)}`;
         libswscaleC += `${(countdownq.length & (soundr ? 2 : 3))}`;
      }
         yellowq <<= Math.min(1, Math.abs(2));
      for (let e = 0; e < 1; e++) {
         humidityJ /= Math.max(3, 1 - parseInt(`${humidityJ}`));
      }
      while (5.100 == (humidityJ - 1.88)) {
          let download2 = String.fromCharCode(119,111,114,107,97,114,111,117,110,100,95,104,95,55,53,0);
          let downarrowe: Map<any, any> = new Map([[String.fromCharCode(103,97,117,115,115,105,97,110,95,53,95,57,54,0),477], [String.fromCharCode(97,95,49,53,95,97,114,102,113,0),542]]);
          let chatbotphotoo = String.fromCharCode(105,110,100,105,99,97,116,111,114,95,108,95,56,53,0);
          let issube = String.fromCharCode(103,95,57,49,95,100,101,114,105,118,101,0);
         humidityJ -= yellowq | download2.length;
         download2 = `${downarrowe.size & chatbotphotoo.length}`;
         downarrowe = new Map([[`${downarrowe.size}`, (String.fromCharCode(86,0) == chatbotphotoo ? chatbotphotoo.length : downarrowe.size)]]);
         issube = `${issube.length % (Math.max(chatbotphotoo.length, 5))}`;
         break;
      }
      while ((humidityJ * 3.11) < 5.61) {
         statsnomoredata2.set(lessy, 2 + yellowq);
         break;
      }
       let entry8 = String.fromCharCode(102,101,116,99,104,95,113,95,50,51,0);
       let invitew = String.fromCharCode(97,95,49,48,95,112,97,100,0);
          let mounting1 = false;
          let librrc1 = String.fromCharCode(100,111,110,101,95,103,95,49,54,0);
         statsnomoredata2.set(entry8, invitew.length);
         mounting1 = !mounting1;
         librrc1 += "3";
      let iconnewchatj = 5022550 <= invitew.length;
      do {
         invitew = `${statsnomoredata2.size % (Math.max(invitew.length, 5))}`;
         if (iconnewchatj) {
            break;
         }
      } while (((1.24 - humidityJ) >= 1.93) && iconnewchatj);
         yellowq >>= Math.min(Math.abs(2 << (Math.min(3, Math.abs(parseInt(`${humidityJ}`))))), 1);
         yellowq <<= Math.min(4, entry8.length);
      videojsU *= hooksS.size | parseInt(`${basketballmatchdetailbgC}`);
   }
   while (bnewarchdefaultsQ != textinputQ) {
      textinputQ += "2";
      break;
   }
   if (iconlogoutY != String.fromCharCode(113,0) || bnewarchdefaultsQ.length >= 2) {
       let typing5 = 1;
       let libglogv = String.fromCharCode(101,95,49,53,95,108,105,98,115,114,116,0);
          let sliderR: Array<any> = [771, 884, 391];
         typing5 *= 2 >> (Math.min(4, libglogv.length));
         sliderR = [3];
         libglogv = `${(libglogv == String.fromCharCode(78,0) ? typing5 : libglogv.length)}`;
         typing5 /= Math.max(typing5, 4);
         libglogv += `${2 ^ libglogv.length}`;
         libglogv = `${typing5 + libglogv.length}`;
      while ((typing5 * libglogv.length) == 5) {
         libglogv = `${libglogv.length ^ typing5}`;
         break;
      }
      bnewarchdefaultsQ += "3";
   }
   let sidef = basketballmatchdetailbgC <= 6474044.0;
   do {
      basketballmatchdetailbgC *= parseInt(`${videojsU}`) / (Math.max(iconlogoutY.length, 8));
      if (sidef) {
         break;
      }
   } while ((!main_xp) && sidef);

      

      iconlogoutY += `${2 + parseInt(`${miniK}`)}`;
      iconviewerf = 91.67 == miniK;
      miniK /= Math.max(5, (parseFloat(`${(main_xp ? 2 : 4)}`)));
       let mutedt: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,105,95,48,95,51,0),false ], [String.fromCharCode(101,95,51,50,95,97,99,113,117,105,114,101,100,0),true ]]);
       let launcherG = 5.0;
      if (parseInt(`${launcherG}`) >= mutedt.size) {
         launcherG -= parseFloat(`${mutedt.size}`);
      }
       let m_lockE = String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,95,99,95,51,57,0);
       let leakcheckerK = String.fromCharCode(99,111,109,112,114,101,115,115,111,114,95,107,95,52,54,0);
      for (let o = 0; o < 3; o++) {
         m_lockE = `${mutedt.size & parseInt(`${launcherG}`)}`;
      }
         m_lockE += `${1 | leakcheckerK.length}`;
      for (let j = 0; j < 3; j++) {
         mutedt.set(leakcheckerK, m_lockE.length);
      }
      while (4.2 > (launcherG - 5.70) || (2 - parseInt(`${launcherG}`)) > 2) {
         leakcheckerK = `${leakcheckerK.length >> (Math.min(1, Math.abs(mutedt.size)))}`;
         break;
      }
      iconviewerf = videojsU < 97.29;
   for (let r = 0; r < 2; r++) {
      hooksS.set(bnewarchdefaultsQ, bnewarchdefaultsQ.length);
   }
      bnewarchdefaultsQ += `${textinputQ.length}`;
   let sharewhite2 = 5086118 <= textinputQ.length;
   do {
       let gpayD = 1.0;
      if (gpayD < gpayD) {
         gpayD *= 1 / (Math.max(parseInt(`${gpayD}`), 4));
      }
      for (let i = 0; i < 2; i++) {
          let statisticsactiveQ = String.fromCharCode(115,95,53,52,95,112,117,114,103,101,0);
          let whiteanimationliveI = false;
          let tempF = false;
          let reactnativeratingsD: Array<any> = [755, 431, 148];
          let rocketR = String.fromCharCode(116,114,105,110,103,95,107,95,54,52,0);
         gpayD -= ((tempF ? 3 : 4));
         statisticsactiveQ = `${statisticsactiveQ.length}`;
         whiteanimationliveI = !whiteanimationliveI;
         tempF = 54 >= reactnativeratingsD.length && 54 >= rocketR.length;
         reactnativeratingsD.push(statisticsactiveQ.length / (Math.max(3, 8)));
         rocketR = "2";
      }
      while (gpayD <= gpayD) {
         gpayD += 1;
         break;
      }
      textinputQ += `${2 / (Math.max(3, parseInt(`${basketballmatchdetailbgC}`)))}`;
      if (sharewhite2) {
         break;
      }
   } while ((5 > textinputQ.length) && sharewhite2);
      main_xp = !resendN.endsWith(`${iconviewerf}`);
       let executorM = String.fromCharCode(108,111,103,103,101,114,95,107,95,49,55,0);
       let a_unlockH = 1.0;
      if (executorM.endsWith(`${a_unlockH}`)) {
          let accepted0 = String.fromCharCode(110,101,116,119,111,114,107,105,110,103,95,49,95,56,57,0);
          let downloaderS = 4.0;
          let smallbrightnessL = 5.0;
          let libfabricjniF: Array<any> = [561, 820, 661];
         executorM += "1";
         accepted0 += "2";
         downloaderS += 3;
         smallbrightnessL /= Math.max(5, 3 % (Math.max(8, parseInt(`${downloaderS}`))));
         libfabricjniF.push(accepted0.length << (Math.min(5, libfabricjniF.length)));
      }
         a_unlockH -= (parseFloat(`${String.fromCharCode(75,0) == executorM ? parseInt(`${a_unlockH}`) : executorM.length}`));
         executorM += `${1 << (Math.min(5, Math.abs(parseInt(`${a_unlockH}`))))}`;
      if (executorM.length <= parseInt(`${a_unlockH}`)) {
         executorM = `${2 / (Math.max(10, parseInt(`${a_unlockH}`)))}`;
      }
      while ((a_unlockH * 4.49) >= 3.4 && 4.49 >= (a_unlockH * parseFloat(`${executorM.length}`))) {
         a_unlockH /= Math.max(5, parseFloat(`${parseInt(`${a_unlockH}`) / (Math.max(executorM.length, 4))}`));
         break;
      }
      while (executorM.length < parseInt(`${a_unlockH}`)) {
          let currentT = true;
          let l_imageh = true;
          let gemfileT = String.fromCharCode(105,109,112,108,105,99,105,116,108,121,95,115,95,54,57,0);
         executorM = `${((l_imageh ? 3 : 5))}`;
         currentT = gemfileT == gemfileT;
         l_imageh = gemfileT == gemfileT;
         break;
      }
      basketballmatchdetailbgC += 2 + parseInt(`${videojsU}`);
   let goal7 = 9853376 <= iconlogoutY.length;
   do {
      iconlogoutY += `${textinputQ.length}`;
      if (goal7) {
         break;
      }
   } while (goal7 && (3.68 <= (basketballmatchdetailbgC / (Math.max(iconlogoutY.length, 2)))));
   let backgroundL = String.fromCharCode(109,110,51,49,102,54,0) == iconlogoutY;
   do {
      iconlogoutY = `${(iconlogoutY == String.fromCharCode(56,0) ? iconlogoutY.length : (main_xp ? 5 : 2))}`;
      if (backgroundL) {
         break;
      }
   } while ((iconlogoutY.length <= resendN.length) && backgroundL);
       let plusY: Map<any, any> = new Map([[String.fromCharCode(122,97,108,108,111,99,95,104,95,57,56,0),true ], [String.fromCharCode(109,95,50,52,0),true ]]);
          let sendC: Map<any, any> = new Map([[String.fromCharCode(111,114,100,101,114,105,110,103,95,101,95,52,48,0),823], [String.fromCharCode(118,95,49,49,95,115,105,110,101,0),116]]);
         plusY = new Map([[`${plusY.size}`, 1]]);
         sendC = new Map([[`${sendC.size}`, sendC.size]]);
         plusY = new Map([[`${plusY.size}`, plusY.size - plusY.size]]);
          let iconbackwhiteL = String.fromCharCode(120,95,57,56,95,114,101,100,101,116,101,99,116,0);
         plusY = new Map([[`${plusY.size}`, 3]]);
         iconbackwhiteL = `${iconbackwhiteL.length}`;
      iconlogoutY = "1";
       let libjsijniprofilerQ = String.fromCharCode(99,111,108,111,114,95,103,95,55,49,0);
      for (let r = 0; r < 2; r++) {
         libjsijniprofilerQ += "1";
      }
      while (libjsijniprofilerQ != libjsijniprofilerQ) {
          let scorepopsoundo = true;
          let mbridge7 = String.fromCharCode(106,95,55,51,95,115,105,110,99,0);
          let register_z_ = String.fromCharCode(100,95,57,49,95,112,111,115,108,105,115,116,0);
         libjsijniprofilerQ = `${(mbridge7.length % (Math.max(9, (scorepopsoundo ? 3 : 5))))}`;
         scorepopsoundo = 69 < register_z_.length;
         mbridge7 += `${register_z_.length}`;
         break;
      }
          let penaltyshootw = String.fromCharCode(114,116,112,115,101,110,100,101,114,95,52,95,50,48,0);
          let basketballtrophyP = 1.0;
          let nbatrophyv: Map<any, any> = new Map([[String.fromCharCode(105,110,116,102,114,95,105,95,57,57,0),true ], [String.fromCharCode(104,95,55,48,95,115,121,110,116,97,120,0),false ], [String.fromCharCode(99,95,55,49,95,116,97,114,103,101,116,115,0),true ]]);
         libjsijniprofilerQ = `${nbatrophyv.size}`;
         penaltyshootw += `${1 - parseInt(`${basketballtrophyP}`)}`;
         basketballtrophyP -= parseFloat(`${parseInt(`${basketballtrophyP}`)}`);
         nbatrophyv = new Map([[`${basketballtrophyP}`, parseInt(`${basketballtrophyP}`)]]);
      iconviewerf = (hometeamfieldf.length + parseInt(`${miniK}`)) <= 52;
   let orangeticks = 5368550 >= bnewarchdefaultsQ.length;
   do {
      bnewarchdefaultsQ += `${parseInt(`${videojsU}`) << (Math.min(3, Math.abs(2)))}`;
      if (orangeticks) {
         break;
      }
   } while (orangeticks && (iconviewerf));
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