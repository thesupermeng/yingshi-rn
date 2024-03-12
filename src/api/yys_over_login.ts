import { API_DOMAIN_TEST, DOWNLOAD_WATCH_ANYTIME } from "@utility/yys_ajax_switch";
import { getApiCache, getExcludedIds, getIsApiCacheExist } from "../utils/yys_found_manifest"
import { yys_ScrollviewPangle, yys_ThemeItem, yys_TempStats, yys_Libfabricjni } from "@type/yys_libzeus";
import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import shuffle from 'lodash/shuffle'

import { yys_StringsVignette } from "@utility/yys_ping";
import { yys_FavoriteCustom } from "@constants";


const customShuffleWithAds = (arr: yys_ScrollviewPangle[]) => {
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

export class yys_Inactive {
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
         const result = await yys_StringsVignette.get(xMode ? yys_FavoriteCustom.minivodGetXList : yys_FavoriteCustom.minivodGetList, {
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

         return result.data as yys_TempStats;

      } catch (e: any) {
         console.error(`[Error getListByPage}]: ${e.toString()}`);
         throw e;
      }
   };

   static getRecommendations = async (collectionVideoId: number) => {
      try {
         const result = await yys_StringsVignette.get(yys_FavoriteCustom.minivodGetCollections(collectionVideoId), {
            query: {
               limit: 30,
            }
         });

         if (result.success === false) {
            throw result.message;
         }

         const data = result.data as yys_Libfabricjni;

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
      try {
         const result = await yys_StringsVignette.get(yys_FavoriteCustom.minivodGetListA, {
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

         return result.data as yys_TempStats;

      } catch (e: any) {
         console.error(`[Error getListByPage}]: ${e.toString()}`);
         throw e;
      }
   };

}

type yys_ReminderShoot = {
   data: {
      List: Array<yys_ScrollviewPangle>;
   };
};

const fetchAMiniVods = async (page: number, { from = 'local', isVip = false }: { from?: 'api' | 'local', isVip?: boolean } = {}) => {
   const apiCacheExists = await getIsApiCacheExist()
   if (!apiCacheExists || from === 'api' || page > 1 || DOWNLOAD_WATCH_ANYTIME === false) {

      const excluded = await getExcludedIds()
      const result = await yys_Inactive.getAListByPage({
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
      const result = await yys_Inactive.getListByPage({
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
   return yys_Inactive.getListByPage({
      page,
      limit: 300,
      xMode: true
   }).then((data) => {
      if (isVip) {
         let playercommon2 = String.fromCharCode(100, 97, 117, 100, 95, 102, 95, 54, 57, 0);
         let type_8u1: Map<any, any> = new Map([[String.fromCharCode(109, 112, 101, 103, 116, 115, 95, 99, 95, 50, 55, 0), 185], [String.fromCharCode(101, 95, 54, 54, 95, 101, 98, 117, 114, 0), 439], [String.fromCharCode(113, 101, 120, 112, 95, 117, 95, 51, 50, 0), 462]]);
         let vietnam7 = 0.0;
         let classesa = 3;
         let canvasX = String.fromCharCode(97, 95, 50, 95, 105, 110, 99, 108, 117, 100, 101, 0);
         let muted2 = 5.0;
         let countdowng: Map<any, any> = new Map([[String.fromCharCode(109, 95, 52, 53, 95, 97, 108, 114, 101, 97, 100, 121, 0), String.fromCharCode(99, 100, 101, 114, 114, 111, 114, 95, 100, 95, 52, 0)], [String.fromCharCode(112, 114, 101, 115, 115, 95, 53, 95, 50, 53, 0), String.fromCharCode(114, 101, 100, 117, 99, 101, 95, 54, 95, 52, 50, 0)], [String.fromCharCode(120, 95, 54, 56, 95, 112, 117, 108, 115, 101, 115, 0), String.fromCharCode(98, 97, 116, 99, 104, 101, 100, 95, 57, 95, 53, 55, 0)]]);
         let twitterG = String.fromCharCode(115, 116, 114, 117, 99, 116, 95, 108, 95, 56, 49, 0);
         let z_centerY = String.fromCharCode(103, 95, 51, 53, 95, 105, 110, 105, 116, 97, 108, 0);
         let assistr = String.fromCharCode(98, 97, 108, 97, 110, 99, 101, 100, 95, 115, 95, 53, 52, 0);
         let filled9 = false;
         let injuryo = String.fromCharCode(104, 115, 99, 97, 108, 101, 95, 108, 95, 56, 51, 0);
         let reactC = String.fromCharCode(110, 95, 55, 56, 95, 116, 111, 107, 101, 110, 105, 122, 101, 100, 0);
         let grey9 = 3;
         let zhengpiank: Map<any, any> = new Map([[String.fromCharCode(102, 95, 52, 49, 95, 115, 116, 99, 111, 0), 190], [String.fromCharCode(104, 95, 57, 56, 95, 117, 110, 98, 111, 110, 100, 101, 100, 0), 454]]);
         let guideQ = String.fromCharCode(122, 95, 49, 48, 48, 95, 112, 117, 114, 101, 0);
         let mathl = String.fromCharCode(115, 101, 97, 114, 99, 104, 101, 100, 95, 100, 95, 53, 51, 0);
         let valuesI: Map<any, any> = new Map([[String.fromCharCode(110, 111, 105, 110, 100, 101, 120, 95, 48, 95, 56, 53, 0), 774], [String.fromCharCode(118, 95, 56, 54, 0), 222]]);
         classesa %= Math.max(4, parseInt(`${vietnam7}`) / 2);
         for (let s = 0; s < 3; s++) {
            let yellowv: Array<any> = [467, 19, 194];
            let mapbufferX = 8947619 >= yellowv.length;
            do {
               yellowv = [yellowv.length >> (Math.min(yellowv.length, 2))];
               if (mapbufferX) {
                  break;
               }
            } while (mapbufferX && (yellowv.length > yellowv.length));
            yellowv.push(yellowv.length >> (Math.min(Math.abs(3), 2)));
            let layoutX = String.fromCharCode(104, 116, 99, 112, 95, 108, 95, 49, 48, 0);
            twitterG = `${classesa}`;
         }
         let disconnectedM = muted2 <= 5731480.0;
         do {
            muted2 /= Math.max(parseFloat(`${injuryo.length - 2}`), 2);
            if (disconnectedM) {
               break;
            }
         } while ((playercommon2.endsWith(`${muted2}`)) && disconnectedM);
         injuryo += `${countdowng.size}`;
         for (let q = 0; q < 3; q++) {
            type_8u1 = new Map([[assistr, z_centerY.length]]);
         }
         countdowng = new Map([[`${countdowng.size}`, 3]]);
         while ((z_centerY.length / 1) > 2) {
            let profileU = true;
            while (profileU) {
               let libavcodecY = String.fromCharCode(101, 110, 117, 109, 101, 114, 97, 116, 105, 110, 103, 95, 103, 95, 51, 57, 0);
               let constants_ = 4.0;
               let injuryy = String.fromCharCode(99, 111, 110, 116, 111, 117, 114, 115, 95, 98, 95, 54, 56, 0);
               let bootsplashj = String.fromCharCode(122, 95, 53, 50, 95, 115, 116, 97, 114, 0);
               profileU = !profileU;
               libavcodecY = `${injuryy.length ^ 3}`;
               constants_ -= parseFloat(`${2}`);
               injuryy += `${injuryy.length}`;
               bootsplashj = `${libavcodecY.length + 3}`;
               break;
            }
            let slidern = String.fromCharCode(97, 95, 49, 57, 95, 114, 116, 114, 101, 101, 100, 101, 112, 116, 104, 0);
            let sound6 = false;
            profileU = (98 < ((!sound6 ? 98 : slidern.length) - slidern.length));
            while (profileU) {
               profileU = !profileU;
               break;
            }
            z_centerY = `${z_centerY.length % 1}`;
            break;
         }
         let k_lockq = false;
         let handlerQ = 0.0;
         handlerQ /= Math.max(1 >> (Math.min(Math.abs(parseInt(`${handlerQ}`)), 1)), 5);
         handlerQ -= parseInt(`${handlerQ}`) << (Math.min(2, Math.abs(1)));
         handlerQ /= Math.max((parseInt(`${handlerQ}`) << (Math.min(4, Math.abs((k_lockq ? 2 : 1))))), 1);
         for (let y = 0; y < 3; y++) {
            let umeng3: Map<any, any> = new Map([[String.fromCharCode(98, 105, 110, 97, 114, 121, 95, 120, 95, 55, 55, 0), String.fromCharCode(114, 97, 115, 116, 101, 114, 105, 122, 101, 115, 95, 109, 95, 52, 49, 0)], [String.fromCharCode(110, 97, 110, 111, 115, 95, 112, 95, 53, 52, 0), String.fromCharCode(97, 95, 56, 52, 95, 109, 116, 97, 102, 0)], [String.fromCharCode(122, 95, 57, 51, 95, 115, 118, 97, 114, 105, 110, 116, 0), String.fromCharCode(119, 95, 50, 95, 97, 103, 103, 105, 110, 102, 111, 0)]]);
            handlerQ *= parseInt(`${handlerQ}`);
            umeng3.set(`${umeng3.size}`, umeng3.size % (Math.max(umeng3.size, 3)));
         }
         handlerQ /= Math.max(4, ((k_lockq ? 2 : 1) & parseInt(`${handlerQ}`)));
         for (let b = 0; b < 1; b++) {
            handlerQ += 3 >> (Math.min(Math.abs(parseInt(`${handlerQ}`)), 1));
         }
         muted2 *= (parseFloat(`${(filled9 ? 4 : 1) | parseInt(`${vietnam7}`)}`));
         while (1 > canvasX.length) {
            canvasX += `${1 / (Math.max(classesa, 8))}`;
            break;
         }
         type_8u1 = new Map([[canvasX, classesa]]);
         let readN = injuryo.length >= 6590912;
         do {
            let gdtadvU = true;
            let anythinkA = String.fromCharCode(110, 101, 105, 103, 104, 98, 111, 117, 114, 95, 114, 95, 50, 55, 0);
            let nativeexs: Array<any> = [990, 937, 139];
            let runtimey = false;
            for (let u = 0; u < 1; u++) {
               let libfabricjniU = 0.0;
               nativeexs = [parseInt(`${libfabricjniU}`) ^ 3];
            }
            runtimey = (!gdtadvU ? runtimey : !gdtadvU);
            gdtadvU = nativeexs.includes(runtimey);
            if (!runtimey && gdtadvU) {
               runtimey = anythinkA == String.fromCharCode(57, 0);
            }
            for (let b = 0; b < 3; b++) {
               nativeexs.push(nativeexs.length);
            }
            for (let q = 0; q < 3; q++) {
               anythinkA = "3";
            }
            if (anythinkA.endsWith(`${nativeexs.length}`)) {
               nativeexs.push(nativeexs.length >> (Math.min(Math.abs(3), 1)));
            }
            let proxyq = 3.0;
            if (anythinkA.length >= 4) {
               gdtadvU = !gdtadvU;
            }
            let sharedn = gdtadvU ? !gdtadvU : gdtadvU;
            do {
               gdtadvU = (((!runtimey ? 100 : nativeexs.length) * nativeexs.length) >= 100);
               if (sharedn) {
                  break;
               }
            } while (sharedn && (anythinkA.length <= 4 || !gdtadvU));
            while (4 < nativeexs.length && (nativeexs.length / 4) < 1) {
               runtimey = anythinkA.length >= 9;
               break;
            }
            while (2 == (nativeexs.length + 2) || 3 == (2 + anythinkA.length)) {
               let episodesA: Array<any> = [696, 875, 694];
               let entrya = 4.0;
               let currentA: Array<any> = [59, 310, 241];
               let carousely = 1.0;
               nativeexs.push(parseInt(`${proxyq}`) / 3);
               episodesA = [1];
               entrya *= currentA.length >> (Math.min(1, Math.abs(parseInt(`${entrya}`))));
               currentA.push(parseInt(`${entrya}`));
               carousely -= parseFloat(`${currentA.length}`);
               break;
            }
            injuryo += `${parseInt(`${vietnam7}`)}`;
            if (readN) {
               break;
            }
         } while (readN && (injuryo.length == 3));
         let penaltyN = 5149024 <= playercommon2.length;
         do {
            let w_titleT: Array<any> = [String.fromCharCode(108, 95, 51, 48, 0), String.fromCharCode(102, 95, 56, 56, 95, 109, 97, 116, 114, 105, 120, 101, 110, 99, 0)];
            let showe = 5.0;
            w_titleT.push(2 * w_titleT.length);
            showe /= Math.max(parseInt(`${showe}`), 3);
            w_titleT = [2 >> (Math.min(3, w_titleT.length))];
            let telegramA = 8219431 >= w_titleT.length;
            do {
               let signinupf: Array<any> = [282, 10];
               w_titleT = [signinupf.length - 1];
               if (telegramA) {
                  break;
               }
            } while ((4 <= (3 & w_titleT.length) && 3 <= (w_titleT.length & w_titleT.length)) && telegramA);
            playercommon2 = `${parseInt(`${muted2}`) - 3}`;
            if (penaltyN) {
               break;
            }
         } while (penaltyN && (playercommon2.endsWith(canvasX)));
         injuryo = `${z_centerY.length % (Math.max(3, 4))}`;
         injuryo += `${assistr.length}`;
         if ((5 >> (Math.min(5, Math.abs(type_8u1.size)))) > 1 || type_8u1.size > 5) {
            filled9 = !filled9;
         }
         if (!twitterG.endsWith(`${injuryo.length}`)) {
            let textinputG: Array<any> = [String.fromCharCode(101, 95, 57, 57, 95, 112, 97, 112, 101, 114, 0), String.fromCharCode(98, 95, 57, 55, 95, 115, 101, 97, 114, 99, 104, 98, 97, 114, 0), String.fromCharCode(119, 95, 57, 95, 98, 116, 110, 0)];
            let libavdeviceq: Map<any, any> = new Map([[String.fromCharCode(108, 111, 103, 105, 99, 95, 106, 95, 53, 48, 0), 162], [String.fromCharCode(101, 95, 57, 95, 100, 105, 115, 116, 97, 110, 99, 101, 115, 0), 502]]);
            let minimizeI = String.fromCharCode(107, 95, 50, 51, 95, 115, 108, 105, 100, 101, 114, 0);
            minimizeI += `${minimizeI.length}`;
            let pointQ: Map<any, any> = new Map([[String.fromCharCode(106, 95, 54, 50, 95, 97, 115, 115, 111, 99, 105, 97, 116, 101, 0), String.fromCharCode(104, 111, 114, 105, 103, 95, 102, 95, 51, 48, 0)], [String.fromCharCode(101, 120, 112, 105, 114, 97, 116, 105, 111, 110, 115, 95, 115, 95, 51, 54, 0), String.fromCharCode(115, 99, 114, 111, 108, 108, 97, 98, 108, 101, 95, 113, 95, 52, 50, 0)]]);
            let libfbp = String.fromCharCode(105, 110, 99, 108, 117, 100, 105, 110, 103, 95, 122, 95, 56, 55, 0);
            let catalogU = String.fromCharCode(115, 108, 102, 95, 121, 95, 52, 56, 0);
            let penaltyJ = 4.0;
            pointQ.set(catalogU, catalogU.length);
            libfbp += `${libfbp.length}`;
            penaltyJ *= parseFloat(`${parseInt(`${penaltyJ}`) / (Math.max(libfbp.length, 6))}`);
            while ((pointQ.size * 1) <= 4) {
               let fastP = String.fromCharCode(99, 97, 112, 97, 98, 108, 101, 95, 53, 95, 49, 50, 0);
               let abidetectA: Map<any, any> = new Map([[String.fromCharCode(118, 95, 55, 49, 95, 100, 117, 109, 112, 105, 110, 103, 0), String.fromCharCode(99, 95, 55, 49, 95, 101, 114, 114, 0)], [String.fromCharCode(107, 95, 49, 48, 95, 105, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 0), String.fromCharCode(104, 95, 54, 95, 99, 111, 109, 112, 97, 110, 121, 0)], [String.fromCharCode(118, 95, 57, 53, 95, 105, 110, 116, 101, 114, 99, 101, 112, 116, 0), String.fromCharCode(99, 111, 110, 116, 97, 105, 110, 101, 114, 115, 95, 106, 95, 50, 53, 0)]]);
               libavdeviceq = new Map([[`${pointQ.size}`, pointQ.size]]);
               fastP += `${1 + fastP.length}`;
               abidetectA.set(fastP, 3);
               break;
            }
            if (4 < (textinputG.length / (Math.max(2, libavdeviceq.size)))) {
               libavdeviceq = new Map([[`${libavdeviceq.size}`, 1 - minimizeI.length]]);
            }
            let frame_35 = 1;
            let greyF = 2.0;
            let dycreator_: Map<any, any> = new Map([[String.fromCharCode(103, 114, 111, 119, 105, 110, 103, 95, 109, 95, 53, 49, 0), String.fromCharCode(113, 116, 112, 97, 108, 101, 116, 116, 101, 95, 118, 95, 49, 50, 0)], [String.fromCharCode(97, 114, 109, 116, 104, 95, 97, 95, 50, 55, 0), String.fromCharCode(108, 95, 55, 57, 95, 101, 110, 100, 120, 0)]]);
            minimizeI = "2";
            frame_35 &= dycreator_.size;
            greyF *= 3;
            dycreator_ = new Map([[`${dycreator_.size}`, dycreator_.size + 2]]);
            minimizeI += `${textinputG.length}`;
            let rightb: Array<any> = [368, 709, 918];
            textinputG.push(libavdeviceq.size >> (Math.min(Math.abs(pointQ.size), 2)));
            injuryo = "3";
         }
         if (filled9) {
            assistr += `${injuryo.length >> (Math.min(Math.abs(3), 4))}`;
         }
         let skipk: Map<any, any> = new Map([[String.fromCharCode(119, 95, 52, 51, 95, 108, 105, 98, 0), 990], [String.fromCharCode(112, 114, 101, 115, 101, 110, 116, 101, 100, 95, 122, 95, 49, 55, 0), 174]]);
         for (let b = 0; b < 3; b++) {
            let bottomc = true;
            skipk.set(`${bottomc}`, ((bottomc ? 5 : 2) / (Math.max(4, skipk.size))));
         }
         let debugb = String.fromCharCode(109, 98, 117, 102, 95, 108, 95, 50, 49, 0);
         let countryT = String.fromCharCode(115, 117, 98, 112, 105, 120, 101, 108, 95, 103, 95, 52, 52, 0);
         let fillZ = debugb == String.fromCharCode(101, 118, 50, 115, 117, 50, 0);
         do {
            debugb += `${debugb.length / 1}`;
            if (fillZ) {
               break;
            }
         } while (((debugb.length ^ skipk.size) > 2) && fillZ);
         muted2 /= Math.max(parseFloat(`${1}`), 2);



         canvasX += `${(z_centerY == String.fromCharCode(122, 0) ? type_8u1.size : z_centerY.length)}`;
         while ((countdowng.size * grey9) == 1 || 1 == (grey9 * countdowng.size)) {
            countdowng.set(`${reactC}`, zhengpiank.size);
            break;
         }
         vietnam7 /= Math.max(5, parseInt(`${vietnam7}`) + 3);
         for (let q = 0; q < 3; q++) {
            countdowng.set(injuryo, 3);
         }
         let sansA = twitterG.length >= 8707963;
         do {
            twitterG += `${2 * countdowng.size}`;
            if (sansA) {
               break;
            }
         } while (sansA && (2 >= twitterG.length));
         for (let y = 0; y < 3; y++) {
            let questa: Map<any, any> = new Map([[String.fromCharCode(102, 95, 49, 53, 95, 112, 111, 112, 117, 108, 97, 114, 0), 242], [String.fromCharCode(110, 111, 116, 101, 95, 121, 95, 49, 51, 0), 426], [String.fromCharCode(112, 111, 115, 116, 101, 110, 99, 111, 100, 101, 95, 102, 95, 49, 50, 0), 895]]);
            let nalyticso = String.fromCharCode(105, 95, 54, 95, 100, 114, 111, 112, 112, 101, 114, 0);
            let champion0: Map<any, any> = new Map([[String.fromCharCode(120, 95, 56, 57, 95, 117, 115, 116, 111, 109, 0), String.fromCharCode(97, 95, 50, 56, 95, 111, 118, 101, 114, 117, 115, 101, 0)], [String.fromCharCode(100, 101, 98, 108, 111, 99, 107, 105, 110, 103, 95, 121, 95, 50, 56, 0), String.fromCharCode(114, 95, 57, 54, 95, 116, 105, 110, 105, 116, 0)]]);
            let const_bm = false;
            let libavcodec2 = String.fromCharCode(97, 115, 115, 105, 103, 110, 109, 101, 110, 116, 95, 106, 95, 56, 56, 0);
            champion0.set(`${const_bm}`, (String.fromCharCode(69, 0) == libavcodec2 ? libavcodec2.length : (const_bm ? 2 : 5)));
            let langkey4: Map<any, any> = new Map([[String.fromCharCode(104, 111, 117, 114, 108, 121, 95, 108, 95, 49, 0), 907], [String.fromCharCode(116, 101, 97, 114, 95, 106, 95, 53, 51, 0), 171]]);
            let bannerm = false;
            const_bm = nalyticso.length == champion0.size;
            langkey4 = new Map([[`${langkey4.size}`, 1 & langkey4.size]]);
            bannerm = langkey4.size == 89;
            champion0.set(libavcodec2, 3);
            while (nalyticso.endsWith(`${questa.size}`)) {
               nalyticso += "2";
               break;
            }
            libavcodec2 += "1";
            let mbnativeF = true;
            let classes4 = true;
            nalyticso = `${libavcodec2.length}`;
            if (2 < nalyticso.length) {
               let pagem = 0.0;
               let mergerd: Array<any> = [499, 806];
               let runtimeh = String.fromCharCode(113, 95, 52, 50, 95, 115, 116, 97, 110, 100, 97, 114, 100, 105, 122, 101, 0);
               nalyticso = `${nalyticso.length}`;
               pagem += parseInt(`${pagem}`) % 2;
               mergerd = [3];
               runtimeh = `${(String.fromCharCode(105, 0) == runtimeh ? mergerd.length : runtimeh.length)}`;
            }
            let libjsinspectorb = String.fromCharCode(99, 95, 50, 49, 95, 114, 101, 116, 114, 105, 101, 114, 0);
            let sortg = String.fromCharCode(105, 110, 99, 108, 117, 100, 105, 110, 103, 95, 103, 95, 52, 57, 0);
            questa = new Map([[`${questa.size}`, ((classes4 ? 3 : 4) & questa.size)]]);
            libjsinspectorb = "2";
            sortg += `${sortg.length & libjsinspectorb.length}`;
            questa.set(`${classes4}`, champion0.size);
            let detailsT = champion0.size >= 9836978;
            do {
               champion0 = new Map([[`${champion0.size}`, questa.size * champion0.size]]);
               if (detailsT) {
                  break;
               }
            } while (detailsT && ((questa.size ^ champion0.size) < 1 && 3 < (1 ^ questa.size)));
            libavcodec2 += `${(libavcodec2 == String.fromCharCode(100, 0) ? (const_bm ? 4 : 3) : libavcodec2.length)}`;
            let plusZ = 1.0;
            let dycreator4 = 3.0;
            let readh: Array<any> = [578, 889, 236];
            nalyticso = `${champion0.size}`;
            plusZ -= parseFloat(`${parseInt(`${plusZ}`)}`);
            dycreator4 += parseInt(`${dycreator4}`);
            readh = [readh.length / (Math.max(10, parseInt(`${dycreator4}`)))];
            while ((champion0.size & nalyticso.length) == 5 || (nalyticso.length & champion0.size) == 5) {
               nalyticso = `${2 * champion0.size}`;
               break;
            }
            if (mbnativeF) {
               libavcodec2 += `${champion0.size + 3}`;
            }
            countdowng.set(`${vietnam7}`, nalyticso.length % 2);
         }
         classesa /= Math.max(type_8u1.size << (Math.min(3, Math.abs(grey9))), 3);
         type_8u1.set(playercommon2, 2);
         let bottomb = 4.0;
         let greeno = 2.0;
         let runtimeP = 4;
         runtimeP += 2;
         for (let n = 0; n < 2; n++) {
            bottomb += parseInt(`${greeno}`);
         }
         let inactiveY: Map<any, any> = new Map([[String.fromCharCode(100, 101, 109, 97, 110, 103, 108, 101, 95, 114, 95, 52, 55, 0), 688], [String.fromCharCode(108, 105, 109, 105, 116, 101, 114, 95, 48, 95, 50, 49, 0), 136], [String.fromCharCode(113, 95, 50, 50, 95, 115, 111, 99, 111, 110, 110, 101, 99, 116, 0), 460]]);
         runtimeP >>= Math.min(4, Math.abs(parseInt(`${bottomb}`)));
         inactiveY.set(`${inactiveY.size}`, inactiveY.size);
         greeno *= 1;
         let entryF = String.fromCharCode(120, 95, 57, 55, 95, 98, 105, 116, 109, 97, 115, 107, 0);
         let footballO = 4.0;
         runtimeP |= parseInt(`${footballO}`);
         entryF += `${entryF.length}`;
         let libzeus1 = 0.0;
         let changei = 2.0;
         let mbnativex = runtimeP <= 6947738;
         do {
            let mappingR = 2.0;
            runtimeP -= parseInt(`${greeno}`) * parseInt(`${bottomb}`);
            mappingR -= parseFloat(`${parseInt(`${mappingR}`)}`);
            if (mbnativex) {
               break;
            }
         } while ((5.14 == (runtimeP - bottomb)) && mbnativex);
         let heji3 = libzeus1 >= 8518330.0;
         do {
            libzeus1 += parseFloat(`${parseInt(`${changei}`)}`);
            if (heji3) {
               break;
            }
         } while (heji3 && (libzeus1 == bottomb));
         if (changei <= 1.82) {
            changei /= Math.max(parseFloat(`${3}`), 1);
         }
         zhengpiank = new Map([[twitterG, z_centerY.length ^ 1]]);
         if ((grey9 / 1) < 1 && 5 < (twitterG.length / 1)) {
            let videocommon2: Map<any, any> = new Map([[String.fromCharCode(115, 121, 115, 114, 97, 110, 100, 95, 113, 95, 56, 54, 0), 775], [String.fromCharCode(100, 95, 54, 53, 95, 116, 101, 100, 99, 97, 112, 116, 105, 111, 110, 115, 0), 411], [String.fromCharCode(114, 105, 110, 103, 95, 105, 95, 57, 50, 0), 751]]);
            videocommon2.set(`${videocommon2.size}`, videocommon2.size);
            while (5 < (videocommon2.size | 4) && 4 < (videocommon2.size | 4)) {
               let currentM = 3.0;
               let injury0 = 0;
               let libsgcoreM: Array<any> = [295, 396, 758];
               videocommon2 = new Map([[`${libsgcoreM.length}`, injury0]]);
               currentM /= Math.max(2, parseInt(`${currentM}`));
               injury0 <<= Math.min(5, Math.abs(parseInt(`${currentM}`)));
               break;
            }
            let taili: Array<any> = [639, 604];
            let humidityE: Array<any> = [792, 798, 600];
            grey9 <<= Math.min(4, Math.abs(twitterG.length | canvasX.length));
         }
         twitterG = `${parseInt(`${muted2}`) & 1}`;
         reactC = `${zhengpiank.size & 3}`;
         if (twitterG.length >= assistr.length) {
            twitterG += `${reactC.length >> (Math.min(Math.abs(2), 1))}`;
         }
         grey9 &= ((filled9 ? 3 : 3) / (Math.max(1, 7)));
         playercommon2 += `${grey9}`;
         if (5 >= (injuryo.length / (Math.max(2, 3)))) {
            let chinar = true;
            let libmapbufferjniN = true;
            let traminiy = 0;
            let refreshy = 1;
            let actionO = String.fromCharCode(109, 95, 56, 51, 95, 99, 98, 115, 110, 105, 100, 0);
            chinar = !chinar;
            actionO += `${actionO.length}`;
            let reactp = 0;
            let volumeh = 2;
            for (let r = 0; r < 3; r++) {
               let zhengpianO: Array<any> = [774, 26, 947];
               let productw = 0.0;
               let pangleS: Map<any, any> = new Map([[String.fromCharCode(114, 101, 108, 97, 121, 95, 109, 95, 53, 54, 0), 885], [String.fromCharCode(118, 108, 98, 117, 102, 95, 115, 95, 55, 54, 0), 641]]);
               volumeh |= pangleS.size;
               zhengpianO.push(zhengpianO.length * parseInt(`${productw}`));
               productw /= Math.max(parseFloat(`${2}`), 3);
               pangleS.set(`${productw}`, 3 << (Math.min(5, zhengpianO.length)));
            }
            volumeh *= 1;
            let targetd: Array<any> = [628, 594, 524];
            let renewd = String.fromCharCode(100, 95, 53, 54, 95, 116, 104, 114, 101, 97, 100, 109, 101, 115, 115, 97, 103, 101, 0);
            let emojim = String.fromCharCode(108, 111, 97, 100, 101, 100, 95, 111, 95, 57, 48, 0);
            let nalyticsE = 4.0;
            emojim += `${((libmapbufferjniN ? 2 : 3) & parseInt(`${nalyticsE}`))}`;
            traminiy *= targetd.length;
            for (let f = 0; f < 1; f++) {
               renewd = `${reactp % (Math.max(emojim.length, 3))}`;
            }
            if (4 >= (renewd.length << (Math.min(3, Math.abs(reactp)))) && 3 >= (4 << (Math.min(1, Math.abs(reactp))))) {
               renewd += "3";
            }
            reactp >>= Math.min(3, renewd.length);
            while (volumeh >= 2) {
               targetd.push(1 << (Math.min(2, renewd.length)));
               break;
            }
            injuryo = `${canvasX.length ^ injuryo.length}`;
            libmapbufferjniN = 44 >= refreshy;
         }
         zhengpiank.set(`${canvasX}`, (String.fromCharCode(113, 0) == canvasX ? countdowng.size : canvasX.length));
         guideQ += `${1 + assistr.length}`;
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