import { wawaPackage } from "@type/wawa_reward_logo"
import { KVCarouselSort, wawaModalEpisode, wawaGemfileFinal, wawaWhiteanimationlive } from "@type/wawa_emojiheart_alert"
import RNFetchBlob from "rn-fetch-blob"

const initialDownloadVideoState: wawaModalEpisode = {
   downloads: [],
   currentDownloading: [],
   queue: []
}

export function downloadVideoReducer(state = initialDownloadVideoState, action: wawaPackage): wawaModalEpisode {
   let iconscheduler: Array<any> = [765, 483];
   let string5F = 3.0;
   let const_hO = true;
   let listV = false;
   let iconsharefriends2 = String.fromCharCode(115, 105, 103, 110, 105, 110, 103, 95, 106, 95, 56, 50, 0);
   let dist1 = String.fromCharCode(114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 98, 108, 101, 95, 99, 95, 48, 0);
   let langkey5: Map<any, any> = new Map([[String.fromCharCode(117, 95, 51, 48, 95, 109, 97, 114, 107, 101, 114, 115, 0), 442], [String.fromCharCode(119, 95, 56, 57, 95, 115, 116, 114, 105, 107, 101, 116, 104, 114, 111, 117, 103, 104, 0), 143], [String.fromCharCode(108, 101, 114, 112, 95, 120, 95, 53, 53, 0), 380]]);
   let y_titleW = String.fromCharCode(100, 95, 49, 57, 95, 113, 117, 97, 100, 115, 0);
   let reminder3 = 0;
   let mountingC = String.fromCharCode(110, 95, 52, 51, 95, 106, 112, 101, 103, 108, 105, 98, 0);
   let livesharen = true;
   livesharen = (livesharen ? livesharen : livesharen);
   livesharen = (!livesharen ? livesharen : !livesharen);
   let temp6 = livesharen ? !livesharen : livesharen;
   do {
      livesharen = (!livesharen ? livesharen : !livesharen);
      if (temp6) {
         break;
      }
   } while ((livesharen && !livesharen) && temp6);
   listV = const_hO;

   switch (action.type) {
      case 'ADD_VIDEO_TO_DOWNLOAD': {

         const newVodDownload: wawaWhiteanimationlive = {
            vod: action.payload.vod,
            imagePath: 'file:///' + RNFetchBlob.fs.dirs.DocumentDir + '/VodImages' + `/pic${action.payload.vod.vod_id}.png`,
            episodes: [],
            vodIsAdult: action.payload.vodIsAdult ?? false
         }
         let targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id) ?? newVodDownload

         while (dist1.includes(`${y_titleW.length}`)) {
            dist1 += `${(2 ^ (listV ? 2 : 4))}`;
            break;
         }
         const videoExist = targetVod?.episodes.some(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

         let rootB = listV ? !listV : listV;
         do {
            listV = String.fromCharCode(72, 0) == iconsharefriends2 || 54 == y_titleW.length;
            if (rootB) {
               break;
            }
         } while (rootB && (iconsharefriends2.length == 2));

         if (videoExist) return state

         const newEpisode: wawaGemfileFinal = {
            progress: {
               percentage: 0,
               bytes: 0,
            },
            status: KVCarouselSort.KVIconchatsend,
            sizeInBytes: 0,
            videoPath: `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${action.payload.vod.vod_id}-${action.payload.vodSourceId}-${action.payload.vodUrlNid}.mp4`,
            vodSourceId: action.payload.vodSourceId,
            vodUrlNid: action.payload.vodUrlNid,
            ffmpegSession: action.payload.ffmpegSession
         }

         const concatEpisodeDownload = targetVod.episodes.concat(newEpisode)
         targetVod = { ...targetVod, episodes: concatEpisodeDownload }

         const concatDownloadsList = state.downloads
            .filter(download => download.vod.vod_id !== targetVod.vod.vod_id)
            .concat(targetVod)

         return {
            ...state,
            downloads: concatDownloadsList
         }
      }

      case "UPDATE_VIDEO_DOWNLOAD": {


         let iconscheduley = const_hO ? !const_hO : const_hO;
         do {
            const_hO = string5F == 29.79;
            if (iconscheduley) {
               break;
            }
         } while (iconscheduley && (5 == (5 >> (Math.min(5, Math.abs(reminder3))))));

         const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)

         let singapore_ = 3.0;
         let predictiondefaultB = false;
         let defaultbasketballbgM = String.fromCharCode(112, 95, 49, 51, 95, 99, 111, 102, 102, 105, 110, 0);
         singapore_ += ((predictiondefaultB ? 4 : 4) % (Math.max(parseInt(`${singapore_}`), 1)));
         let disconnectedu = 1.0;
         let foundf = 4.0;
         let iconnewchat8 = true;
         disconnectedu /= Math.max(1, (parseFloat(`${(predictiondefaultB ? 4 : 3)}`)));
         foundf -= parseFloat(`${parseInt(`${foundf}`) * 2}`);
         iconnewchat8 = foundf >= 11.88;
         let unselectedF = predictiondefaultB ? !predictiondefaultB : predictiondefaultB;
         do {
            predictiondefaultB = !predictiondefaultB || 11.12 <= disconnectedu;
            if (unselectedF) {
               break;
            }
         } while (((singapore_ * 2.50) > 2.86) && unselectedF);
         defaultbasketballbgM += `${((predictiondefaultB ? 2 : 1) + parseInt(`${disconnectedu}`))}`;
         disconnectedu -= parseFloat(`${parseInt(`${disconnectedu}`)}`);
         disconnectedu /= Math.max(2, (parseFloat(`${defaultbasketballbgM == String.fromCharCode(79, 0) ? parseInt(`${disconnectedu}`) : defaultbasketballbgM.length}`)));
         let basketballiconP = 2.0;
         for (let a = 0; a < 3; a++) {
            basketballiconP += parseFloat(`${2 & defaultbasketballbgM.length}`);
         }
         iconsharefriends2 += `${parseInt(`${singapore_}`) - 1}`;
         if (!targetVod) return state
         const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

         while (const_hO) {
            const_hO = iconscheduler.length == 14;
            break;
         }
         if (!targetEpisode) return state

         const updatedEpisode: wawaGemfileFinal = {
            status: action.payload.status ?? targetEpisode.status,
            progress: {
               percentage: action.payload.progress?.percentage ?? targetEpisode.progress.percentage,
               bytes: action.payload.progress?.bytes ?? targetEpisode.progress.bytes,
            },
            sizeInBytes: action.payload.sizeInBytes ?? targetEpisode.sizeInBytes,
            videoPath: action.payload.videoPath ?? targetEpisode.videoPath,
            vodSourceId: targetEpisode.vodSourceId,
            vodUrlNid: targetEpisode.vodUrlNid,
            ffmpegSession: action.payload.ffmpegSession === undefined ? targetEpisode.ffmpegSession : action.payload.ffmpegSession
         }

         const updatedVod: wawaWhiteanimationlive = {
            ...targetVod,
            vod: targetVod.vod,
            imagePath: targetVod.imagePath,
            episodes: targetVod.episodes
               .filter(episode => !(episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid))
               .concat(updatedEpisode)
         }

         const updatedList = state.downloads
            .filter(download => download.vod.vod_id !== targetVod.vod.vod_id)
            .concat(updatedVod)

         return {
            ...state,
            downloads: updatedList
         }
      }

      case 'START_VIDEO_DOWNLOAD': {
         const { vod, ...payloadOmitVod } = action.payload

         while ((reminder3 / (Math.max(string5F, 6))) < 5.86) {
            string5F += dist1.length;
            break;
         }
         return {
            ...state,
            currentDownloading: state.currentDownloading.concat({ ...payloadOmitVod, vodId: action.payload.vod.vod_id }),
         }
      }

      case 'END_VIDEO_DOWNLOAD': {
         return {
            ...state,
            currentDownloading: state.currentDownloading.filter(item => !(item.vodSourceId === action.payload.vodSourceId && item.vodUrlNid === action.payload.vodUrlNid && item.vodId === action.payload.vod.vod_id)),
         }
      }

      case 'ADD_DOWNLOAD_TO_QUEUE': {
         const { vod, ...payloadOmitVod } = action.payload

         let sheetT = 8671088.0 <= string5F;
         do {
            let chatbotphotoI = 5;
            chatbotphotoI += 2 << (Math.min(1, Math.abs(chatbotphotoI)));
            let buildT = chatbotphotoI >= 6548386;
            do {
               chatbotphotoI += 1 - chatbotphotoI;
               if (buildT) {
                  break;
               }
            } while (buildT && (4 == chatbotphotoI));
            let injury7 = String.fromCharCode(98, 95, 50, 48, 95, 101, 110, 118, 105, 114, 111, 110, 109, 101, 110, 116, 0);
            let sportsn = String.fromCharCode(122, 95, 54, 51, 95, 114, 111, 116, 111, 0);
            let actionc = 2;
            chatbotphotoI %= Math.max(sportsn.length | actionc, 1);
            injury7 = `${injury7.length}`;
            sportsn += `${injury7.length & injury7.length}`;
            string5F += y_titleW.length / 2;
            if (sheetT) {
               break;
            }
         } while ((5 == (iconsharefriends2.length / (Math.max(4, parseInt(`${string5F}`))))) && sheetT);
         return {
            ...state,
            queue: state.queue.concat({ ...payloadOmitVod, vodId: action.payload.vod.vod_id }),
         }
      }

      case "REMOVE_DOWNLOAD_FROM_QUEUE": {
         return {
            ...state,
            queue: state.queue.filter(item => !(item.vodSourceId === action.payload.vodSourceId && item.vodUrlNid === action.payload.vodUrlNid && item.vodId === action.payload.vod.vod_id))
         }
      }

      case 'REMOVE_VIDEO_FROM_DOWNLOAD': {
         const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)

         let rulesb = false;
         let moduleL = 1.0;
         let penaltygoalW = 2.0;
         rulesb = !rulesb;
         for (let h = 0; h < 2; h++) {
            let watchnowbgZ: Array<any> = [String.fromCharCode(99, 111, 110, 102, 105, 103, 117, 114, 97, 116, 105, 111, 110, 95, 105, 95, 56, 0), String.fromCharCode(115, 121, 109, 98, 111, 108, 105, 99, 97, 116, 101, 100, 95, 114, 95, 57, 0)];
            let nativeexm = 1.0;
            let bodan5 = String.fromCharCode(100, 95, 49, 55, 95, 98, 111, 114, 100, 101, 114, 101, 100, 0);
            penaltygoalW -= parseInt(`${penaltygoalW}`);
            watchnowbgZ.push(watchnowbgZ.length % 1);
            nativeexm += parseFloat(`${2}`);
            bodan5 += `${watchnowbgZ.length}`;
         }
         if (!rulesb) {
            let castU = String.fromCharCode(100, 105, 115, 116, 112, 111, 105, 110, 116, 95, 120, 95, 49, 50, 0);
            let weiboz = 4.0;
            let indexd: Array<any> = [998, 433, 224];
            penaltygoalW += indexd.length;
            castU += "1";
            weiboz -= (castU == String.fromCharCode(85, 0) ? parseInt(`${weiboz}`) : castU.length);
            indexd = [1 - castU.length];
         }
         let constants0 = moduleL <= 5961632.0;
         do {
            moduleL += (parseFloat(`${parseInt(`${moduleL}`) | (rulesb ? 4 : 4)}`));
            if (constants0) {
               break;
            }
         } while (((moduleL * 5.100) == 3.79 || (penaltygoalW * 5.100) == 5.90) && constants0);
         while (1.85 < penaltygoalW) {
            moduleL /= Math.max(parseFloat(`${parseInt(`${penaltygoalW}`)}`), 1);
            break;
         }
         let icondownimgB = false;
         moduleL *= parseFloat(`${parseInt(`${penaltygoalW}`) << (Math.min(2, Math.abs(2)))}`);
         icondownimgB = (icondownimgB ? !icondownimgB : !icondownimgB);
         moduleL += parseFloat(`${parseInt(`${penaltygoalW}`)}`);
         moduleL -= parseFloat(`${1}`);
         rulesb = 20.80 == moduleL;
         string5F -= parseInt(`${moduleL}`);
         if (!targetVod) return state
         const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

         langkey5 = new Map([[iconsharefriends2, 2]]);
         if (!targetEpisode) return state

         const updatedVod: wawaWhiteanimationlive = {
            vod: targetVod.vod,
            imagePath: targetVod.imagePath,
            episodes: targetVod.episodes
               .filter(episode => !(episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid))
         }

         const updatedList = state.downloads
            .filter(download => download.vod.vod_id !== targetVod.vod.vod_id)
            .concat(updatedVod)

         return {
            ...state,
            downloads: updatedList
         }
      }

      case 'REMOVE_VOD_FROM_DOWNLOAD': {
         const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)

         let mutedz = false;
         let halffieldimageM = String.fromCharCode(115, 101, 110, 100, 105, 110, 103, 95, 114, 95, 54, 48, 0);
         let trashm = String.fromCharCode(98, 114, 97, 110, 99, 104, 95, 56, 95, 52, 50, 0);
         while (halffieldimageM.includes(`${trashm.length}`)) {
            halffieldimageM += `${((mutedz ? 2 : 2))}`;
            break;
         }
         let eventJ = String.fromCharCode(122, 95, 57, 49, 95, 115, 97, 116, 117, 114, 97, 116, 101, 0);
         for (let d = 0; d < 3; d++) {
            eventJ += `${((mutedz ? 4 : 3) << (Math.min(Math.abs(3), 1)))}`;
         }
         let buttonU = 5;
         halffieldimageM = `${trashm.length / 1}`;
         buttonU /= Math.max(1, 3);
         let firebasea = String.fromCharCode(119, 95, 57, 54, 95, 115, 105, 110, 107, 0);
         let giftN = String.fromCharCode(108, 101, 114, 112, 105, 110, 103, 95, 53, 95, 57, 51, 0);
         if (!firebasea.includes(`${mutedz}`)) {
            let hongkongZ = true;
            let sentry3 = String.fromCharCode(97, 110, 97, 108, 121, 115, 101, 95, 102, 95, 49, 49, 0);
            let umengP = String.fromCharCode(103, 95, 49, 56, 95, 112, 101, 114, 115, 111, 110, 115, 0);
            let actionp = String.fromCharCode(106, 114, 110, 108, 95, 103, 95, 52, 48, 0);
            firebasea = `${actionp.length}`;
            hongkongZ = 83 <= umengP.length && String.fromCharCode(84, 0) == sentry3;
            sentry3 += `${(sentry3 == String.fromCharCode(67, 0) ? sentry3.length : (hongkongZ ? 3 : 5))}`;
            umengP = "2";
            actionp += `${sentry3.length | umengP.length}`;
         }
         while (firebasea.length < 2) {
            let libjsi_: Array<any> = [941, 489];
            let d_hashM = true;
            let lightt = String.fromCharCode(99, 95, 54, 57, 95, 116, 105, 108, 105, 110, 103, 0);
            firebasea = `${(String.fromCharCode(86, 0) == halffieldimageM ? (mutedz ? 2 : 5) : halffieldimageM.length)}`;
            libjsi_.push(3 + lightt.length);
            d_hashM = libjsi_.length > 46;
            lightt = `${1 - lightt.length}`;
            break;
         }
         let launch8 = mutedz ? !mutedz : mutedz;
         do {
            mutedz = String.fromCharCode(109, 0) == eventJ;
            if (launch8) {
               break;
            }
         } while ((eventJ.includes(`${mutedz}`)) && launch8);
         trashm = `${firebasea.length}`;
         string5F -= trashm.length;
         if (!targetVod) return state

         const updatedList = state.downloads
            .filter(download => download.vod.vod_id !== targetVod.vod.vod_id)

         return {
            ...state,
            downloads: updatedList
         }
      }

      case 'RESET_QUEUE': {
         return {
            ...state,
            currentDownloading: [],
            queue: []
         }
      }

      case 'PAUSE_VIDEO_DOWNLOAD': {
         const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)

         const_hO = !const_hO;
         if (!targetVod) return state
         const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

         let stationK: Array<any> = [String.fromCharCode(115, 105, 103, 110, 97, 108, 105, 110, 103, 95, 57, 95, 49, 53, 0), String.fromCharCode(99, 111, 110, 102, 108, 105, 99, 116, 101, 100, 95, 120, 95, 50, 48, 0), String.fromCharCode(102, 114, 97, 109, 101, 104, 97, 115, 104, 95, 100, 95, 52, 49, 0)];
         let greyw = 2.0;
         let kickx: Array<any> = [541, 647];
         greyw += kickx.length;
         let profilepicq = kickx.length <= 7233044;
         do {
            kickx.push(parseInt(`${greyw}`));
            if (profilepicq) {
               break;
            }
         } while (profilepicq && (2 >= stationK.length));
         if (kickx.length == 3) {
            stationK.push(stationK.length % (Math.max(2, 10)));
         }
         let detailg = 5730837.0 <= greyw;
         do {
            greyw *= 3 | stationK.length;
            if (detailg) {
               break;
            }
         } while ((2.99 >= (kickx.length - greyw) && (kickx.length * 1) >= 3) && detailg);
         let rewardX = 7456791 <= stationK.length;
         do {
            let playershirty = String.fromCharCode(108, 95, 49, 95, 116, 100, 101, 99, 111, 100, 101, 0);
            stationK = [playershirty.length ^ 2];
            if (rewardX) {
               break;
            }
         } while (rewardX && (3 == (3 & stationK.length)));
         greyw /= Math.max(3 & stationK.length, 3);
         greyw *= parseInt(`${greyw}`) >> (Math.min(3, Math.abs(3)));
         let iconstarp = greyw >= 6731952.0;
         do {
            greyw /= Math.max(2, parseInt(`${greyw}`) + kickx.length);
            if (iconstarp) {
               break;
            }
         } while ((1.20 == greyw) && iconstarp);
         kickx = [kickx.length ^ 3];
         dist1 += `${((const_hO ? 3 : 4) ^ reminder3)}`;
         if (!targetEpisode) return state

         const updatedEpisode: wawaGemfileFinal = {
            ...targetEpisode,
            status: KVCarouselSort.KVSharemodal,
         }

         const updatedVod: wawaWhiteanimationlive = {
            ...targetVod,
            vod: targetVod.vod,
            imagePath: targetVod.imagePath,
            episodes: targetVod.episodes
               .filter(episode => !(episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid))
               .concat(updatedEpisode)
         }

         const updatedList = state.downloads
            .filter(download => download.vod.vod_id !== targetVod.vod.vod_id)
            .concat(updatedVod)

         return {
            ...state,
            downloads: updatedList
         }
      }

      case 'UPDATE_VOD_DETAILS': {
         const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)

         if ((reminder3 / (Math.max(2, dist1.length))) == 2) {
            dist1 += `${parseInt(`${string5F}`) & 3}`;
         }
         if (!targetVod) return state

         const updatedVod: typeof targetVod = {
            ...targetVod,
            vod: action.payload.vod ?? targetVod.vod
         }


         const_hO = (!listV ? const_hO : !listV);
         const updatedList = state.downloads
            .filter(download => download.vod.vod_id !== targetVod.vod.vod_id)
            .concat(updatedVod)


         return {
            ...state,
            downloads: updatedList
         }
      }








      default: {
         return state
      }
   }
}