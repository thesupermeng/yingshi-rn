import { API_DOMAIN_TEST, DOWNLOAD_WATCH_ANYTIME } from "@utility/ww_icon";
import { getApiCache, getExcludedIds, getIsApiCacheExist } from "../utils/ww_taiwan"
import { wwPredictionarrowIncident, wwIconfeedbackItem, wwGuideMaterial, wwMimoChina } from "@type/ww_dycreator_result";
import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import shuffle from 'lodash/shuffle'

import { wwForegroundModules } from "@utility/ww_rewardvideo";
import { wwCollection } from "@constants";


const customShuffleWithAds = (arr: wwPredictionarrowIncident[]) => { 
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

export class wwLaunch {
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
      const result = await wwForegroundModules.get(xMode ? wwCollection.minivodGetXList : wwCollection.minivodGetList, {
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

      return result.data as wwGuideMaterial;

    } catch (e: any) {
      console.error(`[Error getListByPage}]: ${e.toString()}`);
      throw e;
    }
  };

  static getRecommendations = async (collectionVideoId: number) => {
    try {
      const result = await wwForegroundModules.get(wwCollection.minivodGetCollections(collectionVideoId), {
        query: {
          limit: 30,
        }
      });

      if (result.success === false) {
        throw result.message;
      }

      const data = result.data as wwMimoChina;

      return data.List ?? [];

    } catch (e: any) {
      console.error(`[Error getRecommendations}]: ${e.toString()}`);
      throw e;
    }
  };
}

type wwMiddleDirect = {
  data: {
    List: Array<wwPredictionarrowIncident>;
  };
};

const fetchMiniVods = async (page: number, { from = 'local', isVip = false }: { from?: 'api' | 'local', isVip?: boolean } = {}) => {
  const apiCacheExists = await getIsApiCacheExist()
  if (!apiCacheExists || from === 'api' || page > 1 || DOWNLOAD_WATCH_ANYTIME === false) {
    
    const excluded = await getExcludedIds()
    const result = await wwLaunch.getListByPage({
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
  return wwLaunch.getListByPage({
    page,
    limit: 300,
    xMode: true
  }).then((data) => {
    if (isVip) {
       let window_o0o = String.fromCharCode(101,95,55,49,95,99,116,108,111,117,116,112,117,116,0);
    let livenodatabgimgc = 3.0;
    let textinputn = String.fromCharCode(113,95,49,50,95,115,99,97,108,101,102,97,99,116,111,114,115,0);
    let sliderO = false;
    let combineb = false;
    let arrowupt = String.fromCharCode(105,110,116,101,110,115,105,116,121,95,107,95,50,53,0);
    let recommendation5 = 3.0;
    let gifty: Array<any> = [String.fromCharCode(122,95,49,56,95,102,101,119,0), String.fromCharCode(109,95,57,54,95,97,114,103,117,109,101,110,116,0), String.fromCharCode(108,95,57,57,95,111,118,101,114,108,97,112,0)];
    let encrypt2: Array<any> = [String.fromCharCode(104,112,114,101,100,95,109,95,56,57,0), String.fromCharCode(109,101,97,115,117,114,101,115,95,107,95,56,0)];
    let actionsm = 5;
    let libreactperfloggerjni8: Array<any> = [549, 16, 77];
       let checkboxS = 0.0;
       let greytickP = String.fromCharCode(113,95,55,54,95,100,105,102,102,105,99,117,108,116,121,0);
      let inouttargetredr = checkboxS <= 5121378.0;
      do {
         checkboxS /= Math.max(parseFloat(`${greytickP.length}`), 2);
         if (inouttargetredr) {
            break;
         }
      } while (inouttargetredr && (parseInt(`${checkboxS}`) > greytickP.length));
          let dycreatorK = 4.0;
          let bangr: Array<any> = [782, 907, 872];
         greytickP += "1";
         dycreatorK /= Math.max(parseFloat(`${parseInt(`${dycreatorK}`)}`), 2);
         bangr = [bangr.length];
      let foundr = greytickP.length <= 7884046;
      do {
         greytickP = `${greytickP.length % 1}`;
         if (foundr) {
            break;
         }
      } while ((4.78 == checkboxS) && foundr);
         checkboxS *= parseFloat(`${2 >> (Math.min(1, Math.abs(parseInt(`${checkboxS}`))))}`);
      while (4 >= greytickP.length) {
         greytickP = "3";
         break;
      }
      for (let z = 0; z < 3; z++) {
         greytickP = `${parseInt(`${checkboxS}`) ^ greytickP.length}`;
      }
      recommendation5 -= greytickP.length;
       let indexq = 3.0;
       let refreshd: Array<any> = [865, 960];
         refreshd.push(3 + refreshd.length);
          let qaagN = String.fromCharCode(108,95,56,52,95,112,111,108,121,107,101,121,0);
          let footballfield4 = String.fromCharCode(116,102,114,97,95,110,95,54,57,0);
          let source6 = String.fromCharCode(112,105,99,116,117,114,101,115,95,56,95,53,55,0);
         refreshd.push((String.fromCharCode(107,0) == footballfield4 ? footballfield4.length : parseInt(`${indexq}`)));
         qaagN += `${1 * source6.length}`;
         source6 += `${(String.fromCharCode(68,0) == qaagN ? source6.length : qaagN.length)}`;
      while (2.0 > (1.36 + indexq)) {
         indexq -= parseFloat(`${refreshd.length}`);
         break;
      }
       let libimagepipelineD = String.fromCharCode(102,108,97,116,116,101,110,95,110,95,56,56,0);
       let modalZ = String.fromCharCode(115,111,99,105,97,108,95,103,95,56,57,0);
         libimagepipelineD += `${2 >> (Math.min(5, Math.abs(parseInt(`${indexq}`))))}`;
         refreshd = [2 + libimagepipelineD.length];
      textinputn = `${gifty.length}`;
       let inewinterstitialb = 0.0;
         inewinterstitialb += parseFloat(`${2}`);
      if (4.5 > (inewinterstitialb / (Math.max(4, inewinterstitialb))) || 5.10 > (inewinterstitialb / 4.5)) {
         inewinterstitialb += parseFloat(`${parseInt(`${inewinterstitialb}`) - parseInt(`${inewinterstitialb}`)}`);
      }
      for (let k = 0; k < 3; k++) {
         inewinterstitialb -= parseFloat(`${parseInt(`${inewinterstitialb}`)}`);
      }
      window_o0o += `${((sliderO ? 2 : 4) / (Math.max(parseInt(`${recommendation5}`), 8)))}`;
       let penaltyh = 2.0;
       let selectionC = 1.0;
      for (let r = 0; r < 1; r++) {
          let commenth = 1;
          let floatingv = 2;
          let graphics7 = 2.0;
         selectionC /= Math.max(3, 3);
         commenth >>= Math.min(4, Math.abs(2 % (Math.max(commenth, 1))));
         floatingv ^= parseInt(`${graphics7}`);
         graphics7 -= parseFloat(`${parseInt(`${graphics7}`)}`);
      }
          let eighteen1 = 5;
          let catagoryL = 3;
         selectionC -= parseInt(`${penaltyh}`);
         eighteen1 <<= Math.min(Math.abs(1), 3);
         catagoryL /= Math.max(2 % (Math.max(10, catagoryL)), 4);
          let detail2 = String.fromCharCode(108,95,50,51,95,101,110,117,109,118,97,108,117,101,0);
         selectionC *= parseInt(`${selectionC}`) + detail2.length;
      let liveB = penaltyh <= 6414457.0;
      do {
         penaltyh -= parseFloat(`${parseInt(`${selectionC}`) << (Math.min(1, Math.abs(parseInt(`${penaltyh}`))))}`);
         if (liveB) {
            break;
         }
      } while ((2.30 >= selectionC) && liveB);
      if (5.51 < (selectionC * 5.0) && 3.9 < (5.0 * penaltyh)) {
          let iconpipexpandK = 1.0;
          let serviceQ = String.fromCharCode(98,95,52,57,0);
          let gesturez = 0.0;
         selectionC += parseInt(`${penaltyh}`) - 1;
         iconpipexpandK += parseFloat(`${parseInt(`${iconpipexpandK}`)}`);
         serviceQ += `${1 ^ parseInt(`${iconpipexpandK}`)}`;
         gesturez *= (serviceQ == String.fromCharCode(66,0) ? serviceQ.length : parseInt(`${gesturez}`));
      }
          let selectl = 3.0;
          let defaultroombga = false;
          let combineb9 = false;
         penaltyh *= (parseFloat(`${parseInt(`${selectionC}`) & (defaultroombga ? 4 : 2)}`));
         selectl -= ((combineb9 ? 3 : 2) | parseInt(`${selectl}`));
         defaultroombga = !combineb9;
      arrowupt = `${((sliderO ? 1 : 1) >> (Math.min(Math.abs(parseInt(`${selectionC}`)), 3)))}`;
       let mappingj: Map<any, any> = new Map([[String.fromCharCode(107,95,49,54,95,108,105,98,120,118,105,100,0),29], [String.fromCharCode(108,105,110,109,97,116,104,95,99,95,52,0),291]]);
       let whatsapp0 = 0;
         mappingj.set(`${whatsapp0}`, 1);
         whatsapp0 %= Math.max(1, 1);
      if ((1 * whatsapp0) <= 3 && 1 <= (1 * mappingj.size)) {
         mappingj = new Map([[`${mappingj.size}`, mappingj.size]]);
      }
          let iconpipexpandc = String.fromCharCode(122,95,49,50,95,99,97,110,99,101,108,97,98,108,101,0);
         mappingj.set(iconpipexpandc, iconpipexpandc.length + whatsapp0);
         whatsapp0 /= Math.max(mappingj.size + whatsapp0, 3);
      let predictionbannersharedV = 8876919 <= mappingj.size;
      do {
         mappingj.set(`${whatsapp0}`, 2 - mappingj.size);
         if (predictionbannersharedV) {
            break;
         }
      } while ((mappingj.get(`${whatsapp0}`) != null) && predictionbannersharedV);
      combineb = encrypt2.length >= 23 || combineb;
   let inouttargetredv = 7631577 <= encrypt2.length;
   do {
       let hookse = String.fromCharCode(97,115,115,101,115,115,109,101,110,116,95,119,95,53,49,0);
       let editU: Array<any> = [160, 375, 312];
          let iconK = String.fromCharCode(118,105,101,119,95,54,95,54,49,0);
         editU.push(editU.length);
         iconK += "1";
          let faviconz: Array<any> = [357, 210, 736];
          let loadingY = String.fromCharCode(112,95,57,49,95,101,120,101,99,117,116,105,110,103,0);
          let resendY = true;
         editU.push((String.fromCharCode(48,0) == hookse ? faviconz.length : hookse.length));
         faviconz.push(2 * loadingY.length);
         loadingY = `${(String.fromCharCode(111,0) == loadingY ? loadingY.length : (resendY ? 5 : 3))}`;
         editU.push(hookse.length | 2);
      if ((editU.length % 2) < 4 || 5 < (hookse.length % 2)) {
         editU.push(3);
      }
         editU = [hookse.length];
         editU = [hookse.length];
      encrypt2.push(gifty.length);
      if (inouttargetredv) {
         break;
      }
   } while (inouttargetredv && (encrypt2.length >= 4 || 4 >= (4 ^ encrypt2.length)));
   for (let h = 0; h < 1; h++) {
      recommendation5 *= arrowupt.length / (Math.max(2, 2));
   }
      livenodatabgimgc -= 1;
      encrypt2 = [2 % (Math.max(4, arrowupt.length))];
   while ((encrypt2.length >> (Math.min(Math.abs(4), 1))) > 5) {
      encrypt2.push(encrypt2.length);
      break;
   }
      window_o0o += `${((sliderO ? 3 : 4) - 2)}`;
   for (let f = 0; f < 1; f++) {
      recommendation5 *= (String.fromCharCode(115,0) == textinputn ? textinputn.length : encrypt2.length);
   }
      textinputn += `${(actionsm * (sliderO ? 5 : 2))}`;
   for (let h = 0; h < 1; h++) {
      window_o0o += `${textinputn.length << (Math.min(Math.abs(3), 4))}`;
   }
      textinputn += `${window_o0o.length}`;
   for (let w = 0; w < 3; w++) {
      encrypt2 = [2 - actionsm];
   }
   if (1 < gifty.length) {
       let libavdeviceu = String.fromCharCode(99,95,51,51,95,116,119,105,108,105,103,104,116,0);
       let questT = false;
      if (!questT) {
          let white3 = String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,54,95,57,50,0);
         questT = !questT;
         white3 += `${1 | white3.length}`;
      }
      let arrowrightG = questT ? !questT : questT;
      do {
          let details4 = String.fromCharCode(104,101,120,98,105,110,95,113,95,56,51,0);
         questT = libavdeviceu.startsWith(`${questT}`);
         details4 += `${details4.length}`;
         if (arrowrightG) {
            break;
         }
      } while ((libavdeviceu.length <= 3 && !questT) && arrowrightG);
       let confirmationz = String.fromCharCode(116,98,117,102,95,105,95,57,51,0);
      if (libavdeviceu.length == 2) {
          let notificationy = 2.0;
          let streamingH = String.fromCharCode(115,105,103,95,111,95,57,48,0);
          let main_ri: Array<any> = [269, 459, 212];
          let iconpipexpandk: Map<any, any> = new Map([[String.fromCharCode(115,116,114,109,97,116,99,104,95,101,95,57,48,0),String.fromCharCode(97,108,110,117,109,95,119,95,50,55,0)], [String.fromCharCode(120,95,57,95,97,117,100,0),String.fromCharCode(97,117,116,111,114,111,116,97,116,101,95,108,95,56,56,0)], [String.fromCharCode(97,117,116,104,111,114,105,122,101,95,98,95,49,48,0),String.fromCharCode(104,95,54,55,95,99,111,114,110,101,114,0)]]);
         questT = libavdeviceu.length < 98;
         notificationy -= iconpipexpandk.size * 3;
         streamingH += `${iconpipexpandk.size}`;
         main_ri.push(parseInt(`${notificationy}`));
      }
      for (let p = 0; p < 2; p++) {
         confirmationz += `${libavdeviceu.length}`;
      }
       let base_ = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,95,118,95,56,51,0);
       let iconuserc = String.fromCharCode(115,95,54,95,101,118,114,99,0);
      gifty = [1];
   }
       let kuaishout: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,114,115,95,54,95,51,55,0),789], [String.fromCharCode(109,97,110,116,105,115,115,97,115,95,113,95,49,57,0),255]]);
       let searchbaro = 3.0;
      while ((1.94 - searchbaro) > 2.46 || 1 > (parseInt(`${searchbaro}`) - kuaishout.size)) {
         searchbaro -= parseFloat(`${kuaishout.size}`);
         break;
      }
          let statisticsinactiveE = 2.0;
          let greyh = String.fromCharCode(105,95,55,57,95,115,117,98,100,105,118,105,115,105,111,110,0);
         searchbaro -= parseFloat(`${parseInt(`${statisticsinactiveE}`)}`);
         statisticsinactiveE /= Math.max(5, greyh.length - greyh.length);
      if (5 >= (kuaishout.size ^ 2)) {
         searchbaro *= parseFloat(`${kuaishout.size | 1}`);
      }
         kuaishout.set(`${searchbaro}`, parseInt(`${searchbaro}`));
         kuaishout.set(`${searchbaro}`, kuaishout.size);
      if ((searchbaro - 3.61) < 2.42) {
          let brightnessF = String.fromCharCode(119,111,114,100,108,101,110,95,49,95,53,52,0);
          let albums = 3.0;
          let twitterL = 4;
         searchbaro /= Math.max(1, parseFloat(`${parseInt(`${searchbaro}`) & twitterL}`));
         brightnessF += `${brightnessF.length}`;
         albums /= Math.max((brightnessF == String.fromCharCode(102,0) ? parseInt(`${albums}`) : brightnessF.length), 1);
         twitterL += parseInt(`${albums}`);
      }
      recommendation5 -= ((combineb ? 3 : 3) / 3);
      textinputn += `${actionsm | textinputn.length}`;

      

      window_o0o = `${1 + arrowupt.length}`;
   for (let l = 0; l < 1; l++) {
       let placeholderb = true;
       let turndownA: Array<any> = [285, 922, 924];
       let reactnavigationf: Map<any, any> = new Map([[String.fromCharCode(116,95,53,57,95,102,114,97,109,101,115,121,110,99,0),660], [String.fromCharCode(104,97,108,100,99,108,117,116,115,114,99,95,121,95,55,56,0),35]]);
       let activityL = 5;
      let filedJ = 7580244 <= reactnavigationf.size;
      do {
          let with_1h = false;
          let phoneshareE: Map<any, any> = new Map([[String.fromCharCode(98,95,52,51,95,97,114,109,99,97,112,0),69], [String.fromCharCode(119,95,56,50,95,115,116,114,116,121,112,101,0),589]]);
          let minivodb: Array<any> = [940, 965, 88];
         reactnavigationf = new Map([[`${with_1h}`, ((with_1h ? 1 : 3))]]);
         phoneshareE.set(`${minivodb.length}`, minivodb.length - 3);
         if (filedJ) {
            break;
         }
      } while ((reactnavigationf.size >= 4) && filedJ);
      if (5 <= (5 | turndownA.length)) {
         turndownA = [3];
      }
      for (let t = 0; t < 1; t++) {
         activityL &= reactnavigationf.size;
      }
       let videojsU = String.fromCharCode(115,108,105,99,101,100,95,122,95,56,54,0);
         videojsU += `${(3 & (placeholderb ? 1 : 1))}`;
          let editL: Array<any> = [54, 590];
         activityL -= 1;
         editL = [editL.length / (Math.max(editL.length, 2))];
          let iconstar0 = String.fromCharCode(122,95,55,49,95,112,105,99,107,109,111,100,101,0);
          let static_6w7 = String.fromCharCode(97,95,52,49,95,101,120,116,101,110,115,105,111,110,115,0);
         videojsU += `${activityL}`;
         iconstar0 += `${1 | iconstar0.length}`;
         static_6w7 += `${static_6w7.length}`;
         activityL += activityL << (Math.min(2, Math.abs(2)));
      while ((videojsU.length << (Math.min(4, turndownA.length))) == 4) {
         turndownA.push(3 >> (Math.min(5, Math.abs(reactnavigationf.size))));
         break;
      }
          let short_a5o = 2;
          let desco = false;
          let d_titlee = String.fromCharCode(117,95,54,56,95,97,110,99,104,111,114,0);
         placeholderb = d_titlee.endsWith(`${activityL}`);
         short_a5o *= 3 * short_a5o;
         desco = 37 < short_a5o;
         d_titlee += "1";
         activityL %= Math.max(2, ((placeholderb ? 2 : 2)));
         videojsU += `${((placeholderb ? 4 : 2))}`;
      window_o0o += "3";
   }
   let libavformatm = 9564132 >= actionsm;
   do {
      actionsm &= 1 - parseInt(`${livenodatabgimgc}`);
      if (libavformatm) {
         break;
      }
   } while (((actionsm % 4) == 2) && libavformatm);
   if ((gifty.length >> (Math.min(Math.abs(3), 3))) < 5 && gifty.length < 3) {
      gifty.push(window_o0o.length);
   }
   while (4.42 == (gifty.length * recommendation5)) {
       let textlayoutmanagerN = String.fromCharCode(99,109,121,107,95,114,95,49,0);
       let mbnativeadvancedR: Array<any> = [295, 852];
       let vipsportj = true;
         textlayoutmanagerN = `${(String.fromCharCode(83,0) == textlayoutmanagerN ? textlayoutmanagerN.length : mbnativeadvancedR.length)}`;
       let pagea = String.fromCharCode(117,95,51,48,95,115,111,99,107,101,116,118,97,114,0);
       let gradle0 = String.fromCharCode(112,108,117,103,103,101,100,95,110,95,57,49,0);
      if (!vipsportj && (mbnativeadvancedR.length << (Math.min(Math.abs(5), 2))) < 4) {
          let release_6zI = 3.0;
          let iconarrowrighta = String.fromCharCode(119,97,108,107,95,49,95,54,56,0);
          let friendsC = true;
          let manifest7: Array<any> = [138, 344];
          let flagl = 3;
         mbnativeadvancedR = [3 * flagl];
         release_6zI -= parseInt(`${release_6zI}`) * 1;
         iconarrowrighta = "3";
         friendsC = iconarrowrighta.length <= parseInt(`${release_6zI}`);
         manifest7 = [iconarrowrighta.length];
         flagl &= parseInt(`${release_6zI}`) / 2;
      }
          let debugY = String.fromCharCode(114,95,50,95,97,117,116,111,0);
          let libglogp = String.fromCharCode(105,110,116,101,114,114,117,112,116,105,98,108,101,95,107,95,49,56,0);
         vipsportj = libglogp == String.fromCharCode(51,0);
         debugY += `${3 - debugY.length}`;
         libglogp = "1";
      let header9 = mbnativeadvancedR.length <= 8007548;
      do {
          let confirmationzZ = 4.0;
          let zhuboS = 0;
          let memberq = 3.0;
          let vipsporte: Array<any> = [257, 311, 411];
          let navigationx: Array<any> = [634, 850];
         mbnativeadvancedR = [1];
         confirmationzZ += parseFloat(`${navigationx.length}`);
         zhuboS &= 1;
         memberq *= 1 - parseInt(`${memberq}`);
         vipsporte.push(zhuboS);
         navigationx = [3];
         if (header9) {
            break;
         }
      } while (header9 && (5 > (mbnativeadvancedR.length + 3) && 1 > (3 + gradle0.length)));
         mbnativeadvancedR = [textlayoutmanagerN.length | 3];
       let profileinactiveY = 2.0;
       let indicatorW = 2.0;
      while ((2.55 * profileinactiveY) >= 5.92) {
          let runtimeschedulerG = String.fromCharCode(113,95,56,55,95,112,97,114,97,109,101,116,101,114,115,0);
          let whitex: Array<any> = [183, 972, 278];
         vipsportj = pagea.length > 60 || String.fromCharCode(51,0) == gradle0;
         runtimeschedulerG += `${1 * runtimeschedulerG.length}`;
         whitex = [runtimeschedulerG.length << (Math.min(2, whitex.length))];
         break;
      }
      while (4.90 == (4.3 * profileinactiveY)) {
         profileinactiveY += parseFloat(`${parseInt(`${indicatorW}`) % (Math.max(parseInt(`${profileinactiveY}`), 6))}`);
         break;
      }
      recommendation5 /= Math.max(textlayoutmanagerN.length, 5);
      break;
   }
   while (2 <= window_o0o.length) {
      combineb = (parseInt(`${recommendation5}`) / (Math.max(window_o0o.length, 8))) > 91;
      break;
   }
   while (arrowupt.includes(`${libreactperfloggerjni8.length}`)) {
      libreactperfloggerjni8 = [2];
      break;
   }
       let closey = String.fromCharCode(112,95,57,53,95,115,119,105,112,101,100,0);
       let iconnewsshareF = String.fromCharCode(115,95,51,50,95,97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,0);
         closey += `${closey.length}`;
         iconnewsshareF = "2";
         iconnewsshareF = "2";
         closey += `${closey.length}`;
         iconnewsshareF = "2";
      if (iconnewsshareF.length < 3) {
         closey += `${closey.length ^ iconnewsshareF.length}`;
      }
      livenodatabgimgc += (String.fromCharCode(113,0) == arrowupt ? arrowupt.length : parseInt(`${livenodatabgimgc}`));
   for (let w = 0; w < 3; w++) {
      arrowupt += `${((sliderO ? 1 : 1) % (Math.max(encrypt2.length, 1)))}`;
   }
       let gradlewP = String.fromCharCode(105,116,101,109,95,105,95,49,51,0);
         gradlewP = "1";
          let overP = String.fromCharCode(109,95,57,95,101,110,99,97,112,115,117,108,97,116,101,100,0);
          let langkeyS: Map<any, any> = new Map([[String.fromCharCode(98,95,50,50,95,100,101,115,99,114,105,112,116,111,114,0),172], [String.fromCharCode(112,114,101,98,117,102,95,50,95,51,57,0),884]]);
         gradlewP = "2";
         overP = `${overP.length}`;
         langkeyS = new Map([[`${langkeyS.size}`, 2 ^ langkeyS.size]]);
         gradlewP = `${3 >> (Math.min(3, gradlewP.length))}`;
      arrowupt += "3";
   let refreshW = 8324554.0 <= livenodatabgimgc;
   do {
       let qaagI = 0.0;
       let mathR: Array<any> = [368, 610, 204];
       let zhengpianB = 5;
      let webview_ = mathR.length <= 8542843;
      do {
         mathR = [3];
         if (webview_) {
            break;
         }
      } while (webview_ && (1.50 > (qaagI + 1.4)));
         mathR = [mathR.length ^ 3];
       let smalls: Map<any, any> = new Map([[String.fromCharCode(115,101,99,111,110,100,95,113,95,55,56,0),779], [String.fromCharCode(99,112,112,108,105,110,116,95,55,95,49,48,0),832]]);
       let iconusera = String.fromCharCode(116,104,114,109,97,116,95,53,95,56,51,0);
      if ((smalls.size << (Math.min(Math.abs(2), 2))) > 4 || (mathR.length << (Math.min(Math.abs(smalls.size), 2))) > 2) {
         smalls.set(`${zhengpianB}`, smalls.size);
      }
      if (Array.from(smalls.values()).includes(zhengpianB)) {
         zhengpianB >>= Math.min(Math.abs(2 + parseInt(`${qaagI}`)), 4);
      }
      if (smalls.get(`${zhengpianB}`) == null) {
         smalls = new Map([[`${mathR.length}`, zhengpianB]]);
      }
      while ((zhengpianB >> (Math.min(Math.abs(2), 3))) == 4 || 5.30 == (4.6 * qaagI)) {
         qaagI /= Math.max(4, mathR.length);
         break;
      }
      for (let a = 0; a < 3; a++) {
          let backwardK = String.fromCharCode(101,95,55,51,95,114,102,99,116,0);
          let appleE = 1.0;
         iconusera = `${mathR.length}`;
         backwardK = `${3 - backwardK.length}`;
         appleE /= Math.max(parseFloat(`${parseInt(`${appleE}`) ^ backwardK.length}`), 1);
      }
      livenodatabgimgc += ((combineb ? 4 : 4));
      if (refreshW) {
         break;
      }
   } while ((1 >= (5 & window_o0o.length)) && refreshW);
      encrypt2 = [(String.fromCharCode(57,0) == textinputn ? arrowupt.length : textinputn.length)];
   while (!encrypt2.includes(livenodatabgimgc)) {
       let neonU: Map<any, any> = new Map([[String.fromCharCode(102,97,100,101,100,95,110,95,52,48,0),92], [String.fromCharCode(108,111,111,112,98,97,99,107,95,111,95,53,50,0),293]]);
       let hover0 = true;
       let androidB = 4.0;
      for (let x = 0; x < 3; x++) {
          let libloggerc = 0.0;
          let bggradientN = 1.0;
          let binddatasA = 5.0;
         androidB -= parseFloat(`${neonU.size}`);
         libloggerc += 2 + parseInt(`${binddatasA}`);
         bggradientN *= parseFloat(`${parseInt(`${binddatasA}`) & 3}`);
      }
         hover0 = neonU.size > 79;
          let application4: Array<any> = [String.fromCharCode(116,100,115,99,95,108,95,56,52,0), String.fromCharCode(119,95,52,50,95,121,117,118,109,111,110,111,0)];
         neonU.set(`${androidB}`, parseInt(`${androidB}`));
         application4.push(application4.length & 3);
          let libavformatR = 3;
          let phoneshareN = 2;
         hover0 = phoneshareN >= 56;
         libavformatR += libavformatR - libavformatR;
         phoneshareN *= 3 * libavformatR;
      let injuryB = hover0 ? !hover0 : hover0;
      do {
         hover0 = !hover0 || 30.95 <= androidB;
         if (injuryB) {
            break;
         }
      } while (injuryB && (5.63 <= androidB && (androidB / 5.63) <= 5.82));
          let delegate__hs = 1.0;
          let reactnativeratingsC = 1.0;
          let libreactnativeblobL = String.fromCharCode(108,117,109,98,101,114,106,97,99,107,95,118,95,55,48,0);
         hover0 = neonU.get(`${hover0}`) != null;
         delegate__hs -= parseInt(`${reactnativeratingsC}`);
         reactnativeratingsC /= Math.max(2, parseFloat(`${libreactnativeblobL.length}`));
         libreactnativeblobL = `${parseInt(`${delegate__hs}`)}`;
      if (!hover0) {
          let fullx = String.fromCharCode(116,111,108,111,119,101,114,95,101,95,55,54,0);
          let statisticsinactive9 = false;
          let scoreq = String.fromCharCode(116,95,51,49,95,119,100,101,99,0);
          let c_imageV = 5;
         androidB *= parseFloat(`${neonU.size}`);
         fullx = "3";
         statisticsinactive9 = scoreq.includes(`${statisticsinactive9}`);
         scoreq += `${c_imageV}`;
         c_imageV |= scoreq.length + c_imageV;
      }
       let mimo5 = 1.0;
       let libreactperfloggerjni7 = 3.0;
      let coreU = hover0 ? !hover0 : hover0;
      do {
          let imagesw = 2;
          let reminder4 = 3.0;
          let score_ = 1.0;
          let homeH = String.fromCharCode(105,110,115,112,101,99,116,97,98,108,101,95,114,95,49,50,0);
         hover0 = 14 == neonU.size;
         imagesw &= homeH.length + 3;
         reminder4 -= parseInt(`${score_}`);
         score_ /= Math.max(parseFloat(`${imagesw / (Math.max(6, parseInt(`${reminder4}`)))}`), 1);
         homeH += `${homeH.length / 2}`;
         if (coreU) {
            break;
         }
      } while (coreU && (!hover0));
      encrypt2 = [gifty.length % 3];
      break;
   }
      livenodatabgimgc -= 1 / (Math.max(8, parseInt(`${livenodatabgimgc}`)));
   let subbasketballplayerF = 7324830.0 >= recommendation5;
   do {
       let sharemodali = false;
       let next3 = 2;
       let holder6 = true;
       let downloaderb = 5.0;
       let logou = 5.0;
      for (let k = 0; k < 2; k++) {
         logou += (parseFloat(`${(holder6 ? 2 : 4)}`));
      }
       let profileframef = 2.0;
      while (sharemodali) {
          let shrinkk = String.fromCharCode(101,99,108,95,114,95,56,54,0);
         profileframef -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${downloaderb}`)), 2))}`);
         shrinkk += `${shrinkk.length}`;
         break;
      }
          let anner0 = String.fromCharCode(104,101,97,100,114,111,111,109,95,110,95,55,52,0);
          let reactnativeultimatelistviewD: Map<any, any> = new Map([[String.fromCharCode(104,101,118,109,97,115,107,95,119,95,53,52,0),String.fromCharCode(102,105,108,116,101,114,95,117,95,51,51,0)], [String.fromCharCode(98,111,100,121,95,104,95,55,57,0),String.fromCharCode(113,95,52,50,95,115,117,101,108,111,0)]]);
          let proxyw = true;
         downloaderb /= Math.max((parseFloat(`${(proxyw ? 5 : 2)}`)), 4);
         anner0 += `${reactnativeultimatelistviewD.size}`;
         reactnativeultimatelistviewD.set(`${anner0}`, anner0.length);
         proxyw = 71 == reactnativeultimatelistviewD.size;
      let questiconn = next3 >= 8566790;
      do {
          let predictionbannersharedv: Array<any> = [String.fromCharCode(97,108,109,111,115,116,95,111,95,54,57,0), String.fromCharCode(109,101,116,97,100,97,116,97,115,101,116,95,49,95,54,55,0), String.fromCharCode(107,95,57,50,95,112,114,111,109,112,116,101,100,0)];
          let dangera = 3.0;
          let combinedV = String.fromCharCode(116,95,51,50,95,102,114,101,101,122,101,0);
         next3 <<= Math.min(1, Math.abs(1 - parseInt(`${profileframef}`)));
         predictionbannersharedv.push(1 << (Math.min(2, combinedV.length)));
         dangera /= Math.max(4, parseFloat(`${predictionbannersharedv.length / 2}`));
         combinedV += `${predictionbannersharedv.length}`;
         if (questiconn) {
            break;
         }
      } while (questiconn && (!sharemodali));
         downloaderb /= Math.max((parseFloat(`${parseInt(`${downloaderb}`) + (holder6 ? 2 : 1)}`)), 1);
         next3 <<= Math.min(Math.abs(parseInt(`${downloaderb}`) + 1), 1);
         logou += parseFloat(`${2}`);
      recommendation5 -= arrowupt.length;
      if (subbasketballplayerF) {
         break;
      }
   } while (subbasketballplayerF && (actionsm > 2));
      window_o0o += `${(String.fromCharCode(100,0) == window_o0o ? window_o0o.length : parseInt(`${livenodatabgimgc}`))}`;
      gifty = [(String.fromCharCode(114,0) == textinputn ? gifty.length : textinputn.length)];
   if (2 < (actionsm % (Math.max(libreactperfloggerjni8.length, 8))) || 4 < (libreactperfloggerjni8.length % (Math.max(2, 5)))) {
      libreactperfloggerjni8.push((2 | (sliderO ? 3 : 1)));
   }
   for (let h = 0; h < 3; h++) {
      sliderO = (37 == (encrypt2.length ^ (!combineb ? encrypt2.length : 37)));
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