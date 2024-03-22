import { API_DOMAIN_TEST, DOWNLOAD_WATCH_ANYTIME } from "@utility/n_subs_interstitial";
import { getApiCache, getExcludedIds, getIsApiCacheExist } from "../utils/iue_description_form"
import { DSplash, KHelperEactItem, GQNDisconnected, DBSSearchbarCanvas } from "@type/wpk_long";
import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import shuffle from 'lodash/shuffle'

import { JTumbnailMatches } from "@utility/qot_stations_station";
import { MVCountry } from "@constants";


const customShuffleWithAds = (arr: DSplash[]) => { 
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

export class GHongkong {
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
      const result = await JTumbnailMatches.get(xMode ? MVCountry.minivodGetXList : MVCountry.minivodGetList, {
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

      return result.data as GQNDisconnected;

    } catch (e: any) {
      console.error(`[Error getListByPage}]: ${e.toString()}`);
      throw e;
    }
  };

  static getRecommendations = async (collectionVideoId: number) => {
    try {
      const result = await JTumbnailMatches.get(MVCountry.minivodGetCollections(collectionVideoId), {
        query: {
          limit: 30,
        }
      });

      if (result.success === false) {
        throw result.message;
      }

      const data = result.data as DBSSearchbarCanvas;

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
      const result = await JTumbnailMatches.get(MVCountry.minivodGetListA, {
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

      return result.data as GQNDisconnected;

    } catch (e: any) {
      console.error(`[Error getListByPage}]: ${e.toString()}`);
      throw e;
    }
  };
}

type CZBCompleteService = {
  data: {
    List: Array<DSplash>;
  };
};

const fetchAMiniVods = async (page: number, { from = 'local', isVip = false }: { from?: 'api' | 'local', isVip?: boolean } = {}) => {
  const apiCacheExists = await getIsApiCacheExist()
  if (!apiCacheExists || from === 'api' || page > 1 || DOWNLOAD_WATCH_ANYTIME === false) {

    const excluded = await getExcludedIds()
    const result = await GHongkong.getAListByPage({
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
    const result = await GHongkong.getListByPage({
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
  return GHongkong.getListByPage({
    page,
    limit: 300,
    xMode: true
  }).then((data) => {
    if (isVip) {
       let sharedh = String.fromCharCode(105,110,116,99,104,101,99,107,95,109,95,53,48,0);
    let gpayZ: Array<any> = [String.fromCharCode(121,95,54,48,95,108,115,98,115,0), String.fromCharCode(111,95,52,56,95,101,116,104,101,114,0), String.fromCharCode(109,95,53,95,102,105,101,108,100,115,0)];
    let sinaT = 2.0;
    let nterstitiall = 0.0;
    let nalyticsz = 5.0;
    let commentF = String.fromCharCode(113,95,50,54,95,102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,0);
    let sendb: Array<any> = [String.fromCharCode(111,95,50,57,95,97,100,100,98,108,107,0), String.fromCharCode(101,112,115,105,108,111,110,95,108,95,56,55,0), String.fromCharCode(111,102,102,115,99,114,101,101,110,95,49,95,53,0)];
    let historyV = 3.0;
    let configl = 3;
    let benefitf = 4.0;
    let pressureB = String.fromCharCode(98,95,57,55,95,104,101,116,97,0);
    let signinupf = String.fromCharCode(115,121,109,98,111,108,115,95,101,95,55,53,0);
      configl <<= Math.min(Math.abs(commentF.length | 3), 4);
       let placementh: Array<any> = [338, 967];
       let dragp = String.fromCharCode(99,111,110,102,105,114,109,101,100,95,109,95,52,50,0);
       let match9 = String.fromCharCode(98,117,102,115,95,121,95,53,50,0);
          let configureP: Array<any> = [String.fromCharCode(111,102,102,101,116,95,109,95,54,51,0), String.fromCharCode(116,111,111,108,98,97,114,95,103,95,54,51,0)];
         dragp = "1";
         configureP = [configureP.length * 2];
         dragp += "2";
      while (5 < match9.length) {
         dragp = `${match9.length % (Math.max(3, dragp.length))}`;
         break;
      }
         dragp = `${dragp.length % 3}`;
          let resendm = String.fromCharCode(108,108,118,105,100,100,115,112,95,114,95,53,57,0);
         dragp = `${match9.length}`;
         resendm = `${resendm.length ^ 3}`;
      while (!dragp.endsWith(`${placementh.length}`)) {
         placementh.push(dragp.length ^ 3);
         break;
      }
       let downloadr = 3.0;
       let alertq = false;
       let xvod_ = false;
         match9 = "3";
      nterstitiall += parseFloat(`${3 | gpayZ.length}`);
   let updatesW = sharedh.length <= 8170699;
   do {
      sharedh = `${parseInt(`${nterstitiall}`) * gpayZ.length}`;
      if (updatesW) {
         break;
      }
   } while ((3 < (gpayZ.length / (Math.max(10, sharedh.length))) || 3 < (3 / (Math.max(8, gpayZ.length)))) && updatesW);
   while (3 > (parseInt(`${nterstitiall}`) + commentF.length) && (parseInt(`${nterstitiall}`) + 3) > 4) {
      commentF += `${sharedh.length ^ 1}`;
      break;
   }
      commentF += `${2 / (Math.max(8, parseInt(`${nalyticsz}`)))}`;
       let greenr: Map<any, any> = new Map([[String.fromCharCode(102,95,56,95,98,101,110,105,103,110,0),String.fromCharCode(107,95,56,49,95,111,102,102,101,115,116,0)], [String.fromCharCode(122,95,50,55,95,112,114,101,118,105,101,119,101,100,0),String.fromCharCode(107,95,56,55,95,115,112,114,105,116,101,0)]]);
       let g_lockt = 2.0;
       let sinax = String.fromCharCode(113,95,54,49,95,117,110,98,108,111,99,107,105,110,103,0);
       let overG = String.fromCharCode(119,95,56,56,95,115,117,98,118,97,108,117,101,0);
       let footballs = String.fromCharCode(110,95,52,53,95,99,114,101,97,116,111,114,115,0);
          let texth = 3.0;
          let temperatureb: Array<any> = [900, 678];
         g_lockt *= parseFloat(`${temperatureb.length ^ 3}`);
         texth -= parseFloat(`${parseInt(`${texth}`) / 3}`);
         temperatureb.push(parseInt(`${texth}`));
         overG += `${1 - parseInt(`${g_lockt}`)}`;
          let whatsappB = String.fromCharCode(99,108,111,115,101,115,111,99,107,101,116,95,113,95,50,53,0);
          let unreadt = String.fromCharCode(105,109,112,114,101,115,115,105,111,110,115,95,56,95,54,57,0);
         g_lockt /= Math.max(parseFloat(`${sinax.length}`), 1);
         whatsappB += `${unreadt.length ^ 2}`;
         unreadt = `${3 - whatsappB.length}`;
          let sortO = true;
         overG += `${overG.length}`;
         sortO = !sortO;
         overG = `${2 & overG.length}`;
       let trophyJ = true;
          let trashH: Array<any> = [277, 68, 350];
         footballs += "2";
         trashH = [trashH.length % 2];
          let carouselG = 2;
         trophyJ = footballs == String.fromCharCode(72,0);
         carouselG <<= Math.min(Math.abs(carouselG * carouselG), 3);
      sendb = [commentF.length ^ 3];
      greenr.set(`${greenr.size}`, greenr.size);
   let time_x7 = commentF == String.fromCharCode(100,106,50,107,115,113,108,0);
   do {
       let clears = String.fromCharCode(99,105,112,104,101,114,115,95,106,95,52,52,0);
       let sinaX = String.fromCharCode(106,95,57,54,95,97,116,117,114,97,116,105,111,110,0);
          let sourceB = String.fromCharCode(103,95,52,56,95,101,120,112,101,114,116,0);
         clears = `${sinaX.length - sourceB.length}`;
         sinaX = `${sinaX.length >> (Math.min(1, clears.length))}`;
      let productx = sinaX == String.fromCharCode(107,110,101,114,107,0);
      do {
          let appleG = 0;
          let sendY = String.fromCharCode(104,95,52,52,95,99,97,110,99,101,108,97,116,105,111,110,0);
          let rankG = 2;
          let starq = 3.0;
          let recommendationN = 2.0;
         sinaX = `${1 >> (Math.min(1, sinaX.length))}`;
         appleG %= Math.max(1, appleG & 1);
         sendY += `${sendY.length}`;
         rankG ^= 2 * parseInt(`${starq}`);
         starq -= parseFloat(`${sendY.length}`);
         recommendationN -= parseFloat(`${1}`);
         if (productx) {
            break;
         }
      } while ((4 >= sinaX.length && clears.length >= 4) && productx);
          let friendsA: Array<any> = [371, 655, 46];
          let diceO = 3.0;
         clears += `${clears.length}`;
         friendsA.push(parseInt(`${diceO}`) / (Math.max(8, friendsA.length)));
         diceO -= 1;
         sinaX += `${sinaX.length << (Math.min(4, clears.length))}`;
         sinaX = `${2 & clears.length}`;
      commentF = `${(sinaX == String.fromCharCode(66,0) ? sinaX.length : parseInt(`${historyV}`))}`;
      if (time_x7) {
         break;
      }
   } while (time_x7 && (commentF.length <= parseInt(`${sinaT}`)));
       let arrowQ = String.fromCharCode(120,95,53,55,95,106,115,111,110,0);
         arrowQ = "3";
       let indexX = true;
       let loadingM: Array<any> = [373, 315, 761];
       let sans7: Array<any> = [557, 724];
      commentF += `${parseInt(`${sinaT}`)}`;
   if (gpayZ.includes(benefitf)) {
      benefitf *= parseFloat(`${2}`);
   }
   for (let t = 0; t < 3; t++) {
       let reminderk = String.fromCharCode(112,111,115,105,116,105,111,110,95,119,95,56,50,0);
       let bottom2: Array<any> = [58, 160, 615];
       let groupi: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,117,109,101,95,122,95,54,52,0),String.fromCharCode(108,101,114,116,95,51,95,50,54,0)], [String.fromCharCode(119,122,97,101,115,95,50,95,53,56,0),String.fromCharCode(108,95,51,48,95,114,115,112,0)], [String.fromCharCode(97,95,53,57,95,102,111,114,109,97,116,115,0),String.fromCharCode(109,97,107,101,110,97,110,95,55,95,49,56,0)]]);
      while (Array.from(groupi.keys()).includes(`${bottom2.length}`)) {
         bottom2 = [(reminderk == String.fromCharCode(103,0) ? groupi.size : reminderk.length)];
         break;
      }
         reminderk += `${reminderk.length | bottom2.length}`;
      let malaysia_ = bottom2.length >= 5923202;
      do {
         bottom2 = [reminderk.length];
         if (malaysia_) {
            break;
         }
      } while ((reminderk.length >= bottom2.length) && malaysia_);
      let shrinkS = 8391894 <= bottom2.length;
      do {
         bottom2.push(3);
         if (shrinkS) {
            break;
         }
      } while ((!Array.from(groupi.values()).includes(bottom2.length)) && shrinkS);
       let matchg = String.fromCharCode(109,95,55,52,95,112,114,105,109,97,114,105,108,121,0);
       let theme9 = String.fromCharCode(110,101,119,114,111,119,95,113,95,54,50,0);
         bottom2 = [matchg.length & 2];
         theme9 = `${reminderk.length ^ 2}`;
      let shrinkp = theme9.length <= 5313891;
      do {
         theme9 += `${2 | matchg.length}`;
         if (shrinkp) {
            break;
         }
      } while ((bottom2.length < theme9.length) && shrinkp);
          let dataO = String.fromCharCode(115,98,99,100,101,99,95,54,95,55,0);
          let targetT = 4;
          let auto_c0 = String.fromCharCode(111,95,56,52,95,100,114,97,103,103,105,110,103,0);
         bottom2.push(theme9.length);
         dataO += `${dataO.length >> (Math.min(2, Math.abs(targetT)))}`;
         targetT %= Math.max(2, dataO.length);
         auto_c0 = `${targetT}`;
      nterstitiall -= (parseFloat(`${sharedh == String.fromCharCode(99,0) ? sharedh.length : parseInt(`${sinaT}`)}`));
   }
   let configureY = commentF.length >= 7247821;
   do {
      commentF += `${parseInt(`${nterstitiall}`)}`;
      if (configureY) {
         break;
      }
   } while (((parseInt(`${historyV}`) - commentF.length) <= 5) && configureY);
      sinaT *= parseFloat(`${parseInt(`${benefitf}`)}`);
   while (commentF.startsWith(`${sendb.length}`)) {
       let blacklistF = String.fromCharCode(113,95,49,51,95,122,111,111,109,97,98,108,101,0);
       let readr: Array<any> = [781, 407];
       let private_tm3 = String.fromCharCode(102,112,117,116,115,95,109,95,49,54,0);
       let previeww = 0;
       let productl = 1;
         productl -= previeww & 2;
      let borderless_ = private_tm3 == String.fromCharCode(49,109,51,111,112,99,107,98,118,0);
      do {
         private_tm3 += `${readr.length}`;
         if (borderless_) {
            break;
         }
      } while ((private_tm3.includes(`${productl}`)) && borderless_);
      for (let c = 0; c < 2; c++) {
         previeww += 1 & productl;
      }
      let analyticj = 8253357 >= blacklistF.length;
      do {
         blacklistF += `${readr.length}`;
         if (analyticj) {
            break;
         }
      } while (analyticj && (2 >= (previeww + blacklistF.length)));
         blacklistF = `${blacklistF.length - productl}`;
      let banner3 = private_tm3 == String.fromCharCode(121,117,122,53,108,0);
      do {
         private_tm3 += `${previeww}`;
         if (banner3) {
            break;
         }
      } while (banner3 && (blacklistF == private_tm3));
       let list1 = 3.0;
       let moreY = 0.0;
          let saveS: Array<any> = [497, 953];
         readr = [blacklistF.length];
         saveS.push(saveS.length + 3);
      sendb = [3 + parseInt(`${benefitf}`)];
      break;
   }
   while (1.43 <= (sinaT + 2.10) && (3 / (Math.max(1, sharedh.length))) <= 1) {
      sinaT *= parseFloat(`${3}`);
      break;
   }
       let windP = String.fromCharCode(114,101,103,100,101,102,95,104,95,51,53,0);
       let dangerC: Array<any> = [328, 82];
       let firebasen: Array<any> = [String.fromCharCode(121,98,121,114,95,104,95,57,55,0), String.fromCharCode(99,111,110,115,116,114,97,105,110,101,100,95,117,95,55,48,0)];
       let championG: Array<any> = [368, 635];
      if (4 >= (windP.length % 5) || 4 >= (windP.length % 5)) {
         dangerC.push(firebasen.length);
      }
      for (let n = 0; n < 3; n++) {
          let matchd = String.fromCharCode(99,109,100,117,116,105,108,115,95,115,95,53,49,0);
          let otherz = String.fromCharCode(104,105,103,104,101,115,116,95,118,95,55,55,0);
          let gestures_ = 2.0;
          let groupQ = String.fromCharCode(112,95,57,54,95,112,114,111,109,105,115,101,0);
          let formt = String.fromCharCode(112,117,116,105,110,116,95,113,95,52,48,0);
         firebasen = [championG.length << (Math.min(1, dangerC.length))];
         matchd += `${(String.fromCharCode(76,0) == otherz ? parseInt(`${gestures_}`) : otherz.length)}`;
         gestures_ -= parseInt(`${gestures_}`) % 1;
         groupQ += `${parseInt(`${gestures_}`) + 3}`;
         formt = `${(matchd == String.fromCharCode(51,0) ? otherz.length : matchd.length)}`;
      }
      for (let p = 0; p < 1; p++) {
          let main_z_ = String.fromCharCode(103,95,57,57,95,102,119,104,116,120,0);
          let model3 = 0.0;
          let notificationU = 4;
          let commentZ = String.fromCharCode(119,95,50,52,95,100,101,115,116,0);
         dangerC = [1];
         main_z_ += `${commentZ.length}`;
         model3 += commentZ.length ^ parseInt(`${model3}`);
         notificationU |= commentZ.length / (Math.max(1, 4));
      }
      for (let k = 0; k < 1; k++) {
          let incidenty = 4.0;
          let bufferj = String.fromCharCode(104,111,116,95,119,95,56,48,0);
         windP = `${bufferj.length + 1}`;
         incidenty /= Math.max(3 - parseInt(`${incidenty}`), 3);
         bufferj = "3";
      }
          let expiredT = String.fromCharCode(108,95,52,49,95,114,101,97,99,116,105,111,110,0);
          let countrya = String.fromCharCode(110,97,110,111,115,95,110,95,56,56,0);
          let halfX = String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,95,111,95,49,49,0);
         dangerC.push((countrya == String.fromCharCode(83,0) ? expiredT.length : countrya.length));
         expiredT += `${1 | halfX.length}`;
      gpayZ.push(parseInt(`${nterstitiall}`));
      gpayZ = [1];
       let nalyticsy = 4.0;
       let full7 = 1;
      for (let a = 0; a < 2; a++) {
          let fullR = String.fromCharCode(101,95,49,57,95,114,101,99,111,118,101,114,0);
          let floaterf: Map<any, any> = new Map([[String.fromCharCode(122,95,54,51,95,97,108,112,104,97,110,117,109,0),String.fromCharCode(119,95,57,54,95,101,110,99,97,112,0)], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,95,51,95,54,0),String.fromCharCode(105,110,99,114,101,109,101,110,116,97,108,95,54,95,55,49,0)], [String.fromCharCode(102,95,51,57,95,112,114,101,102,101,114,114,101,100,0),String.fromCharCode(118,95,50,53,95,114,111,116,97,116,105,111,110,97,110,103,108,101,0)]]);
          let constantsX = String.fromCharCode(99,111,109,112,114,101,115,115,95,55,95,51,52,0);
          let hookW = false;
         nalyticsy *= fullR.length << (Math.min(Math.abs(1), 4));
         fullR = "3";
         floaterf = new Map([[`${hookW}`, constantsX.length]]);
         constantsX = `${(1 + (hookW ? 5 : 4))}`;
      }
         nalyticsy -= full7;
          let pauseh: Map<any, any> = new Map([[String.fromCharCode(112,101,114,105,111,100,95,53,95,55,48,0),224], [String.fromCharCode(104,95,56,49,95,100,105,97,108,108,105,110,103,0),543]]);
          let mail0 = String.fromCharCode(102,105,118,101,95,109,95,51,52,0);
          let hookG: Map<any, any> = new Map([[String.fromCharCode(119,95,52,52,95,114,101,115,101,116,117,112,0),482], [String.fromCharCode(106,95,51,56,95,103,110,114,101,0),748]]);
         nalyticsy /= Math.max(1, 2);
         pauseh = new Map([[`${pauseh.size}`, mail0.length]]);
         mail0 += "3";
         hookG = new Map([[`${hookG.size}`, hookG.size]]);
      let logo9 = full7 <= 9061339;
      do {
         full7 >>= Math.min(2, Math.abs(full7));
         if (logo9) {
            break;
         }
      } while (logo9 && (3 <= (full7 + 1) || (nalyticsy / (Math.max(4.1, 4))) <= 3.47));
          let blackE = 4.0;
          let countdownV = 3;
         nalyticsy -= countdownV;
         blackE *= parseFloat(`${parseInt(`${blackE}`) - parseInt(`${blackE}`)}`);
         countdownV ^= 1 - parseInt(`${blackE}`);
         nalyticsy *= full7 % (Math.max(3, parseInt(`${nalyticsy}`)));
      configl &= parseInt(`${nalyticsz}`) + 2;
      signinupf = `${gpayZ.length ^ sendb.length}`;

      

   let suggestion1 = 6945208 <= configl;
   do {
      configl >>= Math.min(4, Math.abs(3 + sendb.length));
      if (suggestion1) {
         break;
      }
   } while (suggestion1 && (sinaT <= 4.77));
      sinaT *= (parseFloat(`${commentF == String.fromCharCode(71,0) ? configl : commentF.length}`));
   while (sharedh.includes(`${nalyticsz}`)) {
      sharedh = `${2 + gpayZ.length}`;
      break;
   }
   while (!gpayZ.includes(historyV)) {
       let sansp: Map<any, any> = new Map([[String.fromCharCode(112,95,57,50,95,97,112,112,108,105,101,115,0),819], [String.fromCharCode(97,108,108,101,116,95,117,95,50,56,0),132], [String.fromCharCode(107,95,50,56,95,111,112,101,110,109,112,116,0),696]]);
       let downloadingQ: Array<any> = [764, 844];
       let dialogh = 3.0;
       let gesturesC = String.fromCharCode(121,101,116,95,114,95,55,51,0);
       let n_imageU = 2.0;
          let unread2 = String.fromCharCode(103,114,111,117,112,95,51,95,57,0);
         dialogh -= sansp.size;
         unread2 += "3";
      if (sansp.get(`${dialogh}`) != null) {
         sansp.set(`${dialogh}`, sansp.size % 2);
      }
      for (let a = 0; a < 1; a++) {
          let string5 = String.fromCharCode(115,116,97,108,101,95,108,95,54,57,0);
         n_imageU /= Math.max(2, (parseFloat(`${String.fromCharCode(111,0) == gesturesC ? gesturesC.length : downloadingQ.length}`)));
         string5 += `${string5.length}`;
      }
      if ((downloadingQ.length / 1) == 1) {
         downloadingQ = [downloadingQ.length % (Math.max(3, 4))];
      }
          let b_player7 = String.fromCharCode(106,95,55,52,95,119,97,118,112,97,99,107,101,110,99,0);
          let assistt = String.fromCharCode(105,110,116,102,108,111,97,116,95,108,95,53,51,0);
          let selectedJ = 3.0;
         n_imageU += parseFloat(`${1 << (Math.min(2, Math.abs(sansp.size)))}`);
         b_player7 = "1";
         assistt += `${(assistt == String.fromCharCode(51,0) ? assistt.length : parseInt(`${selectedJ}`))}`;
         selectedJ *= parseFloat(`${b_player7.length + 1}`);
       let sinaz = String.fromCharCode(108,95,49,95,99,108,101,97,114,0);
       let emptyl = String.fromCharCode(101,95,57,50,95,100,101,108,97,121,0);
       let livep = 1.0;
       let unselectedP = 2.0;
         n_imageU *= parseFloat(`${downloadingQ.length * 2}`);
      for (let r = 0; r < 2; r++) {
         emptyl = `${parseInt(`${unselectedP}`)}`;
      }
          let greyE = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,50,95,57,0);
         livep /= Math.max(4, parseFloat(`${1}`));
         greyE += `${greyE.length}`;
          let indicatorN = 5.0;
          let floaterz = 1;
         emptyl = `${(sinaz == String.fromCharCode(48,0) ? parseInt(`${dialogh}`) : sinaz.length)}`;
         indicatorN += parseFloat(`${parseInt(`${indicatorN}`) % 3}`);
         floaterz += 1 ^ parseInt(`${indicatorN}`);
         gesturesC = "1";
         dialogh *= parseInt(`${livep}`);
         gesturesC += "2";
         sansp.set(`${dialogh}`, parseInt(`${unselectedP}`) >> (Math.min(Math.abs(parseInt(`${dialogh}`)), 3)));
      gpayZ = [parseInt(`${nalyticsz}`) | 3];
      break;
   }
   if (5.0 > (benefitf / (Math.max(6, nterstitiall)))) {
       let diceT: Array<any> = [151, 708, 971];
       let tooltips3 = 4.0;
       let bootsplashb = String.fromCharCode(117,110,114,101,97,100,95,55,95,55,52,0);
         tooltips3 *= parseFloat(`${2 - diceT.length}`);
       let weibog = 4.0;
       let controls5 = 5.0;
      while (!bootsplashb.endsWith(`${diceT.length}`)) {
         diceT.push(parseInt(`${controls5}`));
         break;
      }
         diceT = [diceT.length | 2];
      while (1.98 <= (3.24 * tooltips3) || 2.23 <= (controls5 * 3.24)) {
         controls5 /= Math.max(4, parseFloat(`${diceT.length}`));
         break;
      }
       let reducer2 = String.fromCharCode(99,111,109,112,95,122,95,56,51,0);
      for (let e = 0; e < 2; e++) {
         bootsplashb = `${bootsplashb.length + 1}`;
      }
         tooltips3 += parseFloat(`${parseInt(`${weibog}`) + 1}`);
         controls5 -= parseFloat(`${parseInt(`${tooltips3}`) * parseInt(`${weibog}`)}`);
      nterstitiall /= Math.max(2, parseFloat(`${1}`));
   }
       let googlev = 3;
       let hongkongM: Array<any> = [String.fromCharCode(99,95,50,57,95,114,103,98,0), String.fromCharCode(104,95,57,95,113,115,118,101,110,99,0)];
         googlev &= googlev;
      let j_centerl = 8552389 >= hongkongM.length;
      do {
         hongkongM = [hongkongM.length * 2];
         if (j_centerl) {
            break;
         }
      } while (((googlev ^ 5) > 5 && 4 > (googlev ^ 5)) && j_centerl);
          let overa: Array<any> = [937, 129, 866];
         googlev >>= Math.min(Math.abs(3 << (Math.min(3, overa.length))), 2);
      let uploadU = googlev <= 6828071;
      do {
          let lights = String.fromCharCode(108,95,52,95,116,104,101,116,97,0);
          let memberi = false;
          let nextf = 4.0;
          let leaguev = String.fromCharCode(114,95,50,49,95,102,97,99,105,108,105,116,97,116,101,0);
          let sinaA: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,111,115,101,105,95,52,95,55,49,0),String.fromCharCode(111,95,53,57,95,102,105,114,115,116,108,105,110,101,0)], [String.fromCharCode(102,114,97,99,95,109,95,52,53,0),String.fromCharCode(100,105,115,112,97,116,99,104,105,110,103,95,110,95,52,48,0)], [String.fromCharCode(103,95,49,53,95,118,97,114,105,97,98,108,101,115,0),String.fromCharCode(101,95,54,51,95,105,110,101,116,0)]]);
         googlev %= Math.max(1, parseInt(`${nextf}`));
         lights = "2";
         memberi = 92 <= sinaA.size;
         nextf += 1;
         leaguev += `${2 ^ leaguev.length}`;
         sinaA.set(lights, 1);
         if (uploadU) {
            break;
         }
      } while (uploadU && (1 < googlev));
          let clockR: Array<any> = [631, 705];
          let icopy_u6: Map<any, any> = new Map([[String.fromCharCode(120,95,50,55,95,104,117,109,97,110,0),914], [String.fromCharCode(109,101,109,98,101,114,115,104,105,112,95,122,95,53,48,0),686], [String.fromCharCode(107,95,54,55,95,98,105,110,0),503]]);
          let r_titleO = 4;
         googlev -= r_titleO / 1;
         clockR.push(clockR.length);
         icopy_u6.set(`${clockR.length}`, clockR.length % (Math.max(2, 9)));
         r_titleO -= clockR.length | icopy_u6.size;
         hongkongM = [googlev];
      sendb = [hongkongM.length << (Math.min(4, Math.abs(googlev)))];
   for (let m = 0; m < 2; m++) {
      sendb.push(parseInt(`${sinaT}`));
   }
      sinaT += parseFloat(`${parseInt(`${nterstitiall}`)}`);
   for (let z = 0; z < 3; z++) {
      pressureB = `${parseInt(`${historyV}`) + parseInt(`${nterstitiall}`)}`;
   }
      gpayZ.push(parseInt(`${nalyticsz}`));
      historyV /= Math.max(1, parseFloat(`${parseInt(`${nterstitiall}`) / (Math.max(1, parseInt(`${sinaT}`)))}`));
   while (4 <= pressureB.length) {
      sharedh += `${commentF.length >> (Math.min(4, Math.abs(configl)))}`;
      break;
   }
      commentF += `${parseInt(`${sinaT}`)}`;
       let areaZ = String.fromCharCode(98,95,49,56,95,100,114,97,102,116,0);
       let large4 = true;
       let whatsapp7 = 4.0;
      let stationsf = large4 ? !large4 : large4;
      do {
         large4 = whatsapp7 < 19.48 || !large4;
         if (stationsf) {
            break;
         }
      } while (stationsf && (!areaZ.endsWith(`${large4}`)));
         areaZ = `${(areaZ.length * (large4 ? 5 : 3))}`;
      if (whatsapp7 >= 2.81) {
         whatsapp7 *= parseFloat(`${1}`);
      }
          let upload6 = 5.0;
          let hookD = false;
          let telegramy = false;
         large4 = (upload6 - whatsapp7) >= 19.7;
         upload6 *= parseFloat(`${2}`);
         hookD = !telegramy;
      while (areaZ.length <= parseInt(`${whatsapp7}`)) {
         areaZ += `${areaZ.length}`;
         break;
      }
      while (areaZ.length >= 3 && !large4) {
         areaZ = `${((large4 ? 1 : 4))}`;
         break;
      }
         areaZ = `${(String.fromCharCode(74,0) == areaZ ? (large4 ? 4 : 1) : areaZ.length)}`;
      if (1.69 >= whatsapp7 || (1.69 + whatsapp7) >= 2.6) {
          let acceptedu = String.fromCharCode(109,95,55,54,95,116,114,97,110,115,112,111,114,116,115,0);
          let sideI = 0.0;
          let resultz = 5.0;
          let schedulen = String.fromCharCode(115,95,57,55,95,115,115,108,0);
         whatsapp7 -= parseFloat(`${2}`);
         acceptedu = `${parseInt(`${sideI}`) * parseInt(`${resultz}`)}`;
         sideI -= parseFloat(`${2 & schedulen.length}`);
         resultz += 3 ^ parseInt(`${sideI}`);
         schedulen = `${parseInt(`${resultz}`)}`;
      }
      for (let h = 0; h < 2; h++) {
         large4 = !large4;
      }
      benefitf -= (parseFloat(`${(large4 ? 1 : 4)}`));
   if ((5 * gpayZ.length) <= 2 && 5 <= (gpayZ.length * sharedh.length)) {
      gpayZ.push(sendb.length);
   }
   while (1.19 < (nalyticsz - 3.27)) {
      nalyticsz /= Math.max(2, 3);
      break;
   }
   while ((nterstitiall * 5.63) > 4.70) {
      pressureB = `${(pressureB == String.fromCharCode(107,0) ? parseInt(`${nalyticsz}`) : pressureB.length)}`;
      break;
   }
   for (let a = 0; a < 2; a++) {
      nterstitiall *= parseFloat(`${parseInt(`${benefitf}`)}`);
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