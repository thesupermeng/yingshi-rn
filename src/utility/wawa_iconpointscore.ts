

class LibtanStatsUimanager {
   static assistGrey = (contents: [number], key: number, hasEmoji: boolean) => {
      const newList = [];
      for (let i = 0; i < contents.length; i++) {
         var v = contents[i];
         v ^= key;
         v &= 0xff;
         if (v == 0 && i == contents.length - 1) {
            break;
         }
         newList.push(v);
      }
      let result = "";
      for (let i = 0; i < newList.length; i++) {
         result += '%' + newList[i].toString(16);
      }
      result = decodeURIComponent(result);
      if (hasEmoji) {
         let bangG = 1.0;
         let libtanc: Map<any, any> = new Map([[String.fromCharCode(109, 108, 112, 100, 115, 112, 95, 107, 95, 52, 55, 0), false], [String.fromCharCode(109, 95, 51, 51, 95, 102, 105, 110, 100, 101, 112, 0), false], [String.fromCharCode(100, 95, 52, 55, 95, 97, 115, 116, 101, 114, 105, 115, 107, 0), false]]);
         let short_1G: Array<any> = [139, 137];
         let largeH = false;
         let iconsubssuccessv: Array<any> = [1000, 607];
         let membership9 = String.fromCharCode(107, 95, 50, 95, 99, 121, 99, 108, 101, 115, 0);
         let weibo9 = 0.0;
         let yellowtoredT = 5;
         let jingdongd = String.fromCharCode(99, 95, 52, 54, 95, 104, 108, 105, 116, 0);
         let iconchatsend7 = 4.0;
         let statisticsactiveR = false;
         let weibo4: Map<any, any> = new Map([[String.fromCharCode(102, 108, 111, 97, 116, 115, 104, 111, 114, 116, 95, 100, 95, 54, 57, 0), String.fromCharCode(107, 95, 50, 52, 95, 100, 111, 99, 117, 109, 101, 110, 116, 97, 116, 105, 111, 110, 0)], [String.fromCharCode(115, 95, 52, 52, 95, 115, 121, 110, 116, 97, 120, 0), String.fromCharCode(103, 95, 52, 95, 109, 101, 97, 115, 117, 114, 101, 109, 101, 110, 116, 115, 0)]]);
         let networkd: Map<any, any> = new Map([[String.fromCharCode(103, 95, 51, 54, 95, 99, 117, 114, 114, 101, 110, 116, 0), 904], [String.fromCharCode(109, 97, 100, 101, 95, 120, 95, 51, 48, 0), 233]]);
         let arrowrightA: Map<any, any> = new Map([[String.fromCharCode(113, 109, 97, 116, 95, 106, 95, 53, 55, 0), String.fromCharCode(97, 117, 116, 111, 115, 99, 114, 111, 108, 108, 95, 97, 95, 57, 54, 0)], [String.fromCharCode(102, 114, 101, 101, 100, 95, 118, 95, 52, 0), String.fromCharCode(115, 97, 109, 112, 108, 101, 115, 95, 112, 95, 51, 52, 0)]]);
         let iconclosewhiteE = String.fromCharCode(115, 119, 97, 112, 112, 101, 114, 95, 53, 95, 56, 49, 0);
         let matchactiveU = String.fromCharCode(105, 110, 115, 112, 101, 99, 116, 97, 98, 108, 101, 95, 120, 95, 55, 57, 0);
         let singleH = 5281499 <= short_1G.length;
         do {
            let profilepicO = 1;
            let detail5 = String.fromCharCode(116, 95, 52, 57, 95, 108, 97, 98, 101, 108, 101, 100, 0);
            let baset: Array<any> = [146, 305, 601];
            let annere = false;
            let placeholderZ: Array<any> = [234, 523];
            while ((profilepicO % (Math.max(detail5.length, 6))) == 5) {
               let defaultbasketballbgw = 2;
               detail5 += "3";
               defaultbasketballbgw >>= Math.min(1, Math.abs(defaultbasketballbgw));
               break;
            }
            let login4 = 5961327 >= profilepicO;
            do {
               profilepicO += 3 & placeholderZ.length;
               if (login4) {
                  break;
               }
            } while ((5 > (profilepicO / (Math.max(1, baset.length))) || (baset.length / (Math.max(4, profilepicO))) > 5) && login4);
            if (!annere) {
               profilepicO *= 2;
            }
            for (let l = 0; l < 1; l++) {
               detail5 = `${placeholderZ.length - 1}`;
            }
            baset = [2 * detail5.length];
            while (3 == (profilepicO + baset.length) || 2 == (3 + profilepicO)) {
               let libloggerD = true;
               let predictiondefault1 = 5.0;
               let iconmegaphonem: Map<any, any> = new Map([[String.fromCharCode(115, 117, 112, 111, 114, 116, 101, 100, 95, 111, 95, 55, 0), 228], [String.fromCharCode(120, 95, 54, 52, 95, 121, 97, 98, 101, 0), 773], [String.fromCharCode(99, 95, 55, 48, 95, 112, 114, 111, 99, 101, 115, 115, 0), 258]]);
               baset = [baset.length];
               libloggerD = iconmegaphonem.size == 45 && !libloggerD;
               predictiondefault1 *= parseInt(`${predictiondefault1}`) | 1;
               iconmegaphonem = new Map([[`${libloggerD}`, parseInt(`${predictiondefault1}`) - 1]]);
               break;
            }
            let episodesC = String.fromCharCode(119, 95, 57, 56, 95, 115, 117, 98, 114, 97, 110, 103, 101, 115, 0);
            let expired7 = String.fromCharCode(99, 108, 97, 115, 115, 95, 106, 95, 50, 50, 0);
            episodesC = `${(String.fromCharCode(66, 0) == detail5 ? (annere ? 4 : 2) : detail5.length)}`;
            while (profilepicO > 5) {
               episodesC = `${((annere ? 1 : 4) / 1)}`;
               break;
            }
            let subtext3 = baset.length >= 7342146;
            do {
               let predictionlossi: Map<any, any> = new Map([[String.fromCharCode(100, 95, 52, 49, 95, 97, 99, 111, 108, 111, 114, 115, 0), 448], [String.fromCharCode(112, 97, 114, 97, 109, 101, 116, 101, 114, 95, 99, 95, 49, 54, 0), 505], [String.fromCharCode(99, 97, 114, 100, 105, 110, 97, 108, 105, 116, 121, 95, 109, 95, 51, 55, 0), 826]]);
               let loginsuccessS: Map<any, any> = new Map([[String.fromCharCode(102, 108, 97, 116, 116, 101, 110, 95, 48, 95, 51, 56, 0), 86], [String.fromCharCode(112, 105, 120, 101, 108, 102, 108, 111, 97, 116, 95, 100, 95, 49, 48, 48, 0), 628], [String.fromCharCode(109, 101, 97, 115, 117, 114, 101, 100, 95, 53, 95, 57, 52, 0), 833]]);
               let promotionT: Array<any> = [146, 14];
               let diceC = 3.0;
               let cornershootz = 4.0;
               baset = [(String.fromCharCode(97, 0) == detail5 ? detail5.length : placeholderZ.length)];
               predictionlossi.set(`${cornershootz}`, parseInt(`${cornershootz}`) | 3);
               loginsuccessS = new Map([[`${diceC}`, parseInt(`${diceC}`)]]);
               promotionT = [2 * parseInt(`${cornershootz}`)];
               if (subtext3) {
                  break;
               }
            } while ((2 == (profilepicO / (Math.max(10, baset.length))) || 2 == (profilepicO / (Math.max(baset.length, 3)))) && subtext3);
            let ewardedC = true;
            let wnewsshareW = true;
            if (wnewsshareW) {
               baset.push(placeholderZ.length / 1);
            }
            let type_zH = false;
            type_zH = !ewardedC && baset.length < 88;
            let tumbnailD = false;
            short_1G.push(2);
            if (singleH) {
               break;
            }
         } while (singleH && (!short_1G.includes(yellowtoredT)));
         let iconwatchnow9 = 5.0;
         let attributedstringF: Array<any> = [String.fromCharCode(118, 95, 49, 57, 95, 109, 97, 116, 114, 105, 120, 0), String.fromCharCode(109, 95, 51, 52, 95, 103, 97, 116, 105, 110, 103, 0), String.fromCharCode(115, 116, 97, 108, 101, 95, 55, 95, 49, 57, 0)];
         let bellreminderb = 1;
         while ((iconwatchnow9 / 4.74) >= 1.94) {
            bellreminderb -= attributedstringF.length;
            break;
         }
         let topic3: Map<any, any> = new Map([[String.fromCharCode(107, 95, 50, 57, 95, 105, 110, 116, 101, 114, 97, 99, 116, 0), true], [String.fromCharCode(119, 95, 54, 95, 117, 110, 97, 114, 121, 0), false]]);
         let chartZ = bellreminderb <= 9200852;
         do {
            bellreminderb &= 1 + bellreminderb;
            if (chartZ) {
               break;
            }
         } while (((attributedstringF.length + bellreminderb) <= 5 && (attributedstringF.length + 5) <= 3) && chartZ);
         for (let a = 0; a < 2; a++) {
            bellreminderb <<= Math.min(Math.abs(2), 5);
         }
         iconwatchnow9 /= Math.max(5, parseFloat(`${bellreminderb}`));
         if (Array.from(topic3.keys()).includes(`${bellreminderb}`)) {
            topic3.set(`${iconwatchnow9}`, parseInt(`${iconwatchnow9}`) << (Math.min(Math.abs(3), 5)));
         }
         bellreminderb <<= Math.min(2, Math.abs(topic3.size));
         if (4 > bellreminderb) {
            attributedstringF.push(topic3.size);
         }
         bellreminderb += parseInt(`${iconwatchnow9}`);
         libtanc.set(`${bangG}`, parseInt(`${bangG}`) & parseInt(`${iconchatsend7}`));
         for (let f = 0; f < 1; f++) {
            jingdongd = `${1 % (Math.max(parseInt(`${iconchatsend7}`), 3))}`;
         }
         let icondownimgw = String.fromCharCode(99, 117, 114, 114, 114, 101, 110, 116, 95, 118, 95, 56, 0);
         let bottomn: Array<any> = [String.fromCharCode(112, 105, 120, 109, 102, 116, 115, 95, 108, 95, 56, 51, 0), String.fromCharCode(109, 95, 52, 56, 0)];
         let modall = 1.0;
         let pangleh = String.fromCharCode(107, 95, 54, 54, 95, 97, 117, 116, 111, 98, 97, 110, 104, 0);
         let mail1 = 2;
         bottomn = [mail1];
         modall *= parseFloat(`${1}`);
         pangleh += `${pangleh.length}`;
         mail1 += pangleh.length;
         let untickY: Array<any> = [String.fromCharCode(115, 105, 110, 99, 101, 95, 52, 95, 52, 0), String.fromCharCode(105, 95, 49, 56, 95, 114, 101, 113, 117, 105, 114, 101, 0)];
         untickY = [2];
         let schedulerO = String.fromCharCode(117, 115, 114, 115, 99, 116, 112, 95, 114, 95, 55, 50, 0);
         let predictionbuttonh = String.fromCharCode(110, 105, 103, 104, 116, 115, 104, 111, 116, 95, 104, 95, 57, 53, 0);
         let holderZ = 6293005 <= bottomn.length;
         do {
            bottomn.push((schedulerO == String.fromCharCode(54, 0) ? schedulerO.length : bottomn.length));
            if (holderZ) {
               break;
            }
         } while ((1 >= bottomn.length) && holderZ);
         let uploadE = String.fromCharCode(105, 109, 101, 114, 95, 98, 95, 53, 50, 0);
         let statisticsr = 0.0;
         bottomn.push((String.fromCharCode(99, 0) == schedulerO ? schedulerO.length : uploadE.length));
         uploadE += "1";
         statisticsr *= parseInt(`${statisticsr}`) | parseInt(`${statisticsr}`);
         iconsubssuccessv = [3 / (Math.max(yellowtoredT, 1))];
         icondownimgw = `${icondownimgw.length | 2}`;
         weibo9 += 1;
         iconchatsend7 += parseFloat(`${iconsubssuccessv.length * 3}`);
         if (weibo4.get(`${iconsubssuccessv.length}`) == null) {
            weibo4.set(`${largeH}`, networkd.size);
         }
         for (let k = 0; k < 2; k++) {
            let libcrashsdkg: Map<any, any> = new Map([[String.fromCharCode(99, 104, 114, 111, 110, 111, 95, 112, 95, 54, 52, 0), true], [String.fromCharCode(98, 97, 99, 107, 119, 97, 114, 100, 115, 95, 55, 95, 49, 53, 0), true], [String.fromCharCode(100, 105, 115, 97, 108, 108, 111, 119, 95, 103, 95, 51, 54, 0), false]]);
            let rncore0 = String.fromCharCode(111, 95, 54, 48, 95, 99, 111, 114, 114, 101, 99, 116, 105, 110, 103, 0);
            let unfillU: Array<any> = [310, 661, 141];
            let fastforward4 = false;
            rncore0 += `${rncore0.length ^ 1}`;
            if ((libcrashsdkg.size ^ 4) == 3) {
               fastforward4 = 25 >= unfillU.length;
            }
            while (!fastforward4) {
               libcrashsdkg = new Map([[`${libcrashsdkg.size}`, libcrashsdkg.size]]);
               break;
            }
            let mintegral4 = 2.0;
            let projectD = 0;
            let matchesl = true;
            unfillU = [(rncore0 == String.fromCharCode(51, 0) ? rncore0.length : (fastforward4 ? 3 : 5))];
            mintegral4 += projectD;
            projectD /= Math.max(projectD << (Math.min(Math.abs(parseInt(`${mintegral4}`)), 4)), 5);
            matchesl = 61 >= projectD;
            let weiboA = rncore0.length <= 8859230;
            do {
               let libturbomodulejsijniK: Map<any, any> = new Map([[String.fromCharCode(101, 95, 53, 50, 95, 122, 102, 114, 101, 101, 0), 15], [String.fromCharCode(111, 110, 116, 114, 111, 108, 115, 95, 50, 95, 51, 55, 0), 643]]);
               let overK = String.fromCharCode(108, 95, 55, 56, 95, 98, 117, 98, 98, 108, 101, 115, 0);
               let filln = String.fromCharCode(101, 97, 114, 108, 105, 101, 115, 116, 95, 110, 95, 53, 57, 0);
               let orangedownarrowd = String.fromCharCode(112, 111, 114, 116, 114, 97, 105, 116, 95, 49, 95, 55, 53, 0);
               let eighteenJ = String.fromCharCode(122, 95, 54, 56, 95, 100, 101, 108, 101, 116, 101, 0);
               rncore0 += `${libturbomodulejsijniK.size}`;
               libturbomodulejsijniK = new Map([[filln, filln.length]]);
               overK += "2";
               orangedownarrowd = `${filln.length}`;
               eighteenJ = "3";
               if (weiboA) {
                  break;
               }
            } while (weiboA && (1 == rncore0.length));
            let filledn = 3.0;
            if (!fastforward4) {
               let eighteend: Array<any> = [String.fromCharCode(111, 95, 54, 49, 95, 99, 117, 114, 115, 111, 114, 115, 0), String.fromCharCode(98, 95, 51, 52, 95, 115, 117, 109, 0)];
               let homeinactivek = 4.0;
               let countdownH = 1.0;
               let exampleimageT = String.fromCharCode(101, 110, 116, 114, 121, 112, 111, 105, 110, 116, 95, 101, 95, 55, 51, 0);
               fastforward4 = !fastforward4;
               eighteend = [parseInt(`${homeinactivek}`) - eighteend.length];
               homeinactivek += parseFloat(`${eighteend.length}`);
               countdownH += parseFloat(`${1}`);
               exampleimageT = `${eighteend.length >> (Math.min(3, Math.abs(parseInt(`${homeinactivek}`))))}`;
            }
            let bingN = fastforward4 ? !fastforward4 : fastforward4;
            do {
               fastforward4 = !fastforward4;
               if (bingN) {
                  break;
               }
            } while ((rncore0.length >= 4) && bingN);
            let orientationK: Array<any> = [455, 15];
            filledn -= (parseFloat(`${libcrashsdkg.size + (fastforward4 ? 5 : 5)}`));
            orientationK = [orientationK.length];
            if (libcrashsdkg.get(`${filledn}`) == null) {
               libcrashsdkg = new Map([[`${unfillU.length}`, 2 ^ unfillU.length]]);
            }
            let shareblack1 = String.fromCharCode(99, 95, 57, 57, 95, 102, 105, 120, 116, 117, 114, 101, 0);
            let mathW = String.fromCharCode(122, 95, 49, 52, 95, 100, 114, 97, 103, 0);
            rncore0 += `${parseInt(`${filledn}`) / (Math.max(mathW.length, 2))}`;
            bangG += parseFloat(`${networkd.size}`);
         }
         for (let f = 0; f < 3; f++) {
            iconsubssuccessv = [2 & membership9.length];
         }
         if (weibo4.size > 5) {
            weibo4.set(`${iconsubssuccessv.length}`, short_1G.length);
         }
         largeH = networkd.size <= 79;
         for (let k = 0; k < 2; k++) {
            statisticsactiveR = 24 > iconsubssuccessv.length || 24 > libtanc.size;
         }
         short_1G.push(2);
         for (let u = 0; u < 3; u++) {
            weibo4 = new Map([[`${weibo4.size}`, weibo4.size]]);
         }
         iconsubssuccessv.push(2);
         let libaneb = 1.0;
         libaneb -= parseFloat(`${2 - parseInt(`${libaneb}`)}`);
         let rewardo = String.fromCharCode(112, 111, 108, 121, 95, 52, 95, 49, 48, 0);
         let bottomq = String.fromCharCode(115, 95, 54, 50, 95, 114, 101, 100, 117, 99, 101, 0);
         let backwardW = String.fromCharCode(102, 116, 57, 105, 117, 0) == rewardo;
         do {
            let libreactnativejniB = 1.0;
            let componentX = 5.0;
            let libsgcoreh: Array<any> = [String.fromCharCode(98, 97, 115, 101, 117, 114, 108, 95, 56, 95, 49, 56, 0), String.fromCharCode(105, 109, 112, 111, 114, 116, 95, 49, 95, 53, 51, 0), String.fromCharCode(108, 111, 103, 116, 97, 110, 95, 113, 95, 56, 56, 0)];
            let plashJ: Map<any, any> = new Map([[String.fromCharCode(112, 95, 54, 56, 95, 97, 116, 114, 97, 99, 116, 97, 98, 0), 906], [String.fromCharCode(115, 95, 57, 55, 95, 109, 98, 97, 102, 102, 0), 500], [String.fromCharCode(103, 95, 57, 55, 95, 98, 105, 100, 105, 114, 101, 99, 116, 105, 111, 110, 97, 108, 0), 931]]);
            rewardo += `${parseInt(`${libaneb}`) * bottomq.length}`;
            libreactnativejniB -= 1 >> (Math.min(4, libsgcoreh.length));
            componentX += plashJ.size >> (Math.min(Math.abs(3), 4));
            libsgcoreh.push(libsgcoreh.length + parseInt(`${componentX}`));
            plashJ = new Map([[`${plashJ.size}`, 2]]);
            if (backwardW) {
               break;
            }
         } while ((bottomq != String.fromCharCode(49, 0)) && backwardW);
         yellowtoredT |= parseInt(`${libaneb}`) - 2;
         for (let z = 0; z < 1; z++) {
            weibo9 += 2;
         }
         jingdongd = `${membership9.length}`;
         for (let d = 0; d < 3; d++) {
            membership9 += `${parseInt(`${weibo9}`) / 2}`;
         }
         if (3 >= (1 | iconsubssuccessv.length)) {
            iconclosewhiteE = `${membership9.length}`;
         }
         while (!statisticsactiveR) {
            iconchatsend7 *= parseFloat(`${libtanc.size}`);
            break;
         }
         for (let y = 0; y < 2; y++) {
            let halfI: Map<any, any> = new Map([[String.fromCharCode(100, 101, 105, 110, 105, 116, 95, 115, 95, 57, 50, 0), String.fromCharCode(98, 95, 53, 50, 95, 105, 115, 99, 111, 118, 101, 114, 0)], [String.fromCharCode(105, 110, 116, 101, 114, 110, 101, 116, 95, 106, 95, 53, 50, 0), String.fromCharCode(111, 112, 116, 105, 109, 105, 115, 109, 95, 106, 95, 55, 51, 0)], [String.fromCharCode(117, 95, 51, 95, 119, 105, 110, 100, 111, 119, 0), String.fromCharCode(104, 95, 49, 54, 95, 117, 121, 118, 121, 0)]]);
            let friendsy = false;
            let data_ = String.fromCharCode(101, 97, 105, 100, 99, 116, 95, 56, 95, 55, 52, 0);
            let tickedw = String.fromCharCode(99, 105, 118, 105, 108, 95, 105, 95, 53, 56, 0);
            let filterM = String.fromCharCode(112, 95, 51, 55, 95, 103, 114, 111, 117, 112, 105, 110, 103, 0);
            let usernamew = 3.0;
            let videocommonM: Map<any, any> = new Map([[String.fromCharCode(115, 101, 99, 116, 105, 111, 110, 95, 98, 95, 50, 52, 0), 501], [String.fromCharCode(97, 108, 108, 111, 99, 122, 95, 118, 95, 48, 0), 543], [String.fromCharCode(98, 105, 110, 100, 108, 105, 115, 116, 95, 100, 95, 50, 53, 0), 727]]);
            let stringsl = String.fromCharCode(105, 95, 51, 55, 95, 112, 117, 98, 108, 105, 99, 107, 101, 121, 115, 0);
            data_ = `${parseInt(`${usernamew}`)}`;
            usernamew += parseFloat(`${2}`);
            videocommonM = new Map([[`${videocommonM.size}`, videocommonM.size]]);
            stringsl = "2";
            let condensed9 = String.fromCharCode(120, 95, 53, 57, 95, 100, 114, 97, 119, 97, 98, 108, 101, 0);
            friendsy = String.fromCharCode(55, 0) == filterM;
            condensed9 = `${condensed9.length * condensed9.length}`;
            let club8 = 8549674 <= filterM.length;
            do {
               let confirmationF: Map<any, any> = new Map([[String.fromCharCode(103, 95, 50, 56, 95, 104, 112, 105, 99, 0), 488], [String.fromCharCode(120, 95, 51, 49, 95, 103, 101, 110, 100, 101, 114, 0), 716], [String.fromCharCode(117, 110, 114, 101, 108, 105, 97, 98, 108, 101, 95, 57, 95, 54, 0), 160]]);
               let homeplayers = String.fromCharCode(103, 95, 57, 56, 95, 115, 111, 117, 114, 99, 101, 0);
               let dependencyn = String.fromCharCode(105, 110, 115, 116, 97, 108, 108, 97, 116, 105, 111, 110, 95, 50, 95, 49, 48, 48, 0);
               let statsnomoredatar = String.fromCharCode(112, 114, 111, 118, 105, 100, 101, 114, 95, 119, 95, 49, 0);
               let icondownimgJ: Map<any, any> = new Map([[String.fromCharCode(116, 101, 120, 116, 95, 117, 95, 55, 48, 0), 798], [String.fromCharCode(115, 121, 109, 101, 118, 101, 110, 95, 112, 95, 51, 48, 0), 609]]);
               filterM += `${homeplayers.length ^ 2}`;
               confirmationF = new Map([[`${icondownimgJ.size}`, dependencyn.length / (Math.max(10, icondownimgJ.size))]]);
               homeplayers = `${confirmationF.size * 2}`;
               dependencyn += `${statsnomoredatar.length}`;
               statsnomoredatar += `${statsnomoredatar.length}`;
               if (club8) {
                  break;
               }
            } while ((data_ == String.fromCharCode(110, 0)) && club8);
            let eyeclosea = String.fromCharCode(112, 95, 54, 54, 95, 100, 105, 115, 112, 111, 115, 101, 100, 0);
            let baseline_ = String.fromCharCode(117, 112, 108, 111, 97, 100, 105, 110, 103, 95, 114, 95, 54, 54, 0);
            friendsy = String.fromCharCode(98, 0) == filterM;
            eyeclosea += `${eyeclosea.length}`;
            baseline_ += "1";
            let emojiU = 7319376 >= halfI.size;
            do {
               halfI.set(data_, (data_ == String.fromCharCode(81, 0) ? data_.length : tickedw.length));
               if (emojiU) {
                  break;
               }
            } while ((!friendsy) && emojiU);
            let eventn = true;
            let dialogD: Array<any> = [160, 394];
            let update_ik: Array<any> = [467, 71, 942];
            filterM += `${(String.fromCharCode(120, 0) == data_ ? (friendsy ? 5 : 4) : data_.length)}`;
            eventn = update_ik.length < dialogD.length;
            dialogD.push(3);
            update_ik.push(((eventn ? 2 : 5) % (Math.max(dialogD.length, 5))));
            if (3 > filterM.length) {
               data_ += `${data_.length * halfI.size}`;
            }
            let settings7 = 4;
            data_ += `${filterM.length - 2}`;
            settings7 |= 1;
            let penaltymatchiconS = 3.0;
            let promotionR: Map<any, any> = new Map([[String.fromCharCode(98, 95, 57, 56, 95, 109, 106, 112, 101, 103, 100, 101, 99, 0), true], [String.fromCharCode(110, 111, 114, 111, 117, 110, 100, 95, 117, 95, 54, 50, 0), false], [String.fromCharCode(102, 95, 53, 48, 0), false]]);
            friendsy = 44 >= tickedw.length;
            penaltymatchiconS /= Math.max(parseInt(`${penaltymatchiconS}`) ^ 1, 3);
            promotionR = new Map([[`${promotionR.size}`, parseInt(`${penaltymatchiconS}`)]]);
            let interstitialj = String.fromCharCode(117, 114, 98, 103, 95, 55, 95, 50, 57, 0);
            friendsy = filterM.length > halfI.size;
            interstitialj += `${interstitialj.length | interstitialj.length}`;
            halfI = new Map([[`${halfI.size}`, data_.length >> (Math.min(2, Math.abs(halfI.size)))]]);
            data_ = `${((friendsy ? 1 : 3))}`;
            let register_1tW = String.fromCharCode(114, 97, 103, 103, 97, 98, 108, 101, 95, 97, 95, 52, 48, 0);
            tickedw = `${tickedw.length}`;
            register_1tW += `${register_1tW.length - 2}`;
            let shareblackJ = 1.0;
            let iconnointernett = String.fromCharCode(101, 95, 54, 56, 95, 103, 117, 105, 100, 101, 0);
            friendsy = tickedw.length >= 62;
            shareblackJ -= 1 | parseInt(`${shareblackJ}`);
            iconnointernett += `${iconnointernett.length / (Math.max(3, parseInt(`${shareblackJ}`)))}`;
            filterM = `${filterM.length}`;
            iconsubssuccessv.push((networkd.size << (Math.min(4, Math.abs((statisticsactiveR ? 3 : 5))))));
         }

         return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
      }
      return result;
   }
}
import { Platform } from 'react-native';

export const ENABLE_APPSFLYER = false;

export const DARK_THEME = 'DARK_THEME';
export const LIGHT_THEME = 'LIGHT_THEME';

export const ADD_VOD_TO_FAVORITES = 'add_vod_to_fav';
export const REMOVE_VOD_FROM_FAVORITES = 'remove_from_fav';
export const PLAY_VOD = 'play_vod';
export const ADD_PLAYER_AD_VIDEO = 'add_player_ad_video';
export const TOGGLE_VOD_FAVORITES = 'toggle_vod_fav';

export const SELECT_MINI_VOD_COLLECTION_ITEM =
   'select_mini_vod_collection_item';
export const SET_FROM_MINI_VOD_COLLECTION_ITEM =
   'set_from_mini_vod_collection_item';

export const ADD_VOD_TO_HISTORY = 'add_vod_to_history';
export const REMOVE_VOD_HISTORY = 'remove_from_history';
export const CLEAR_HISTORY = 'clear_history';

export const TOGGLE_PLAYLIST_FAVORITES = 'toggle_playlist_fav';
export const VIEW_PLAYLIST = 'view_playlist';

export const HIDE_VOD_PLAYER_GUIDE = 'hide_vod_helper_guide';
export const ACCEPT_PRIVACY_POLICY = 'accept_privacy_policy';

export const HANDLE_APP_ORIENTATION = 'handle_app_orientation';
export const HANDLE_DEVICES_ORIENTATION = 'handle_devices_orientation';
export const LOCK_ORIENTATION = 'lock_orientation';

export const UPDATE_NETWORK_INFO = 'update_network_info';

export const API_DOMAIN = LibtanStatsUimanager.assistGrey([-55, -43, -43, -47, -46, -101, -114, -114, -55, -37, -113, -58, -39, -55, -50, -49, -58, -59, -60, -51, -56, -112, -105, -103, -113, -62, -50, -52, -114, -95], 0xA1, false);
export const API_DOMAIN_TEST = LibtanStatsUimanager.assistGrey([-55, -43, -43, -47, -46, -101, -114, -114, -55, -37, -113, -58, -39, -55, -50, -49, -58, -59, -60, -51, -56, -112, -105, -103, -113, -62, -50, -52, -114, -95], 0xA1, false);
export const API_DOMAIN_LOCAL = LibtanStatsUimanager.assistGrey([68, 88, 88, 92, 22, 3, 3, 64, 67, 79, 77, 64, 68, 67, 95, 88, 22, 31, 28, 28, 28, 3, 44], 0x2C, false);
export const MATCH_API_DOMAIN = LibtanStatsUimanager.assistGrey([-9, -21, -21, -17, -20, -91, -80, -80, -2, -17, -10, -79, -8, -8, -20, -10, -14, -10, -5, -2, -79, -4, -16, -14, -80, -97], 0x9F, false);

export const ADD_SEARCH_HISTORY = 'add_search_history';
export const REMOVE_SEARCH_HISTORY = 'remove_from_search_history';
export const CLEAR_SEARCH_HISTORY = 'clear_search_history';

export const CLEAR_STORAGE_MEMORY = 'clear_storage_memory';

export const APPSFLYER_DEVKEY = 'wrxTHihLJNWrrusXtgRJZa';
export const APPSFLYER_APPID = Platform.OS === 'android' ? 'com.wawa' : '';

export const APPSFLYER_PAYMENT_PUBLIC_KEY =
   'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhKAAW+9FvkiSL9GJFYpDtrHYLd3KhlKtXWLe1pCkIGnDf4nF0qqclMfoV6CUY0t7WCyXlnfyb7jkwhQiI9+LdHIKz6Vtjn0nzBB0Y3gfiuuAmbcC9QZ5HPD/AVsKdzr70LkVIg3B320gc71H2SiI59kSSD0AAb2QAh9NH5cXmm0XWcp30QKtLp8Yjh+RZOBo9p2T9HcNUL+jo5zGFVvUUp2YI6YGVDnry1KeYOukszRv47BzSddrTrbs9UFJd63d1mHDcxtDye0oI/B7P4EyFtCUCUsD3hm4wdqLkTGZ5/6k0K0wwPS7uITU/iSf0KcJ3F3ZsvcJzg1Irqj3NiybDwIDAQAB';

export const INVITE_DOMAIN = LibtanStatsUimanager.assistGrey([-121, -101, -101, -97, -100, -43, -64, -64, -106, -122, -127, -120, -100, -121, -122, -63, -101, -103, -64, -122, -127, -103, -122, -101, -118, -63, -121, -101, -126, -125, -48, -122, -127, -103, -122, -101, -118, -46, -17], 0xEF, false);


export const UMENG_CHANNEL = 'WAWA';

export const APP_VERSION = '1.7.8';

export const TOPON_ANDROID_APP_ID = 'a65f7e864ec33e';
export const TOPON_ANDROID_APP_KEY = 'a7fa2bea6b6105fdee92beb136b1e31ec';

export const TOPON_IOS_APP_ID = 'a6629ff64da95b';
export const TOPON_IOS_APP_KEY = 'ae2e7a7fe60c2a6e7a85e157c999618e4';

export const ANDROID_HOME_PAGE_BANNER_ADS = 'b1ffea90t3mmpp';
export const ANDROID_PLAY_DETAILS_BANNER_ADS = 'b1ffea90t3mqrn';
export const ANDROID_TOPIC_DETAILS_BANNER_ADS = 'b1ffea90t3mvl6';
export const ANDROID_TOPIC_TAB_BANNER_ADS = 'b1ffea90t3n32j';

export const IOS_HOME_PAGE_BANNER_ADS = 'b662a00e69448b';
export const IOS_PLAY_DETAILS_BANNER_ADS = 'b662a00f210721';
export const IOS_TOPIC_DETAILS_BANNER_ADS = 'b662a010d8f865';
export const IOS_TOPIC_TAB_BANNER_ADS = 'b662a011a0c567';

export const ANDROID_HOME_PAGE_POP_UP_ADS = 'b1ffea90t3mgqp';
export const ANDROID_PLAY_DETAILS_POP_UP_ADS = 'b1ffea90t3makj';
export const ANDROID_PLAY_PAUSE_POP_UP_ADS = 'b6633205636665';
export const IOS_PLAY_DETAILS_POP_UP_ADS = 'b6629fff6cb865';
export const IOS_HOME_PAGE_POP_UP_ADS = 'b6629ffe981749';
export const IOS_PLAY_PAUSE_POP_UP_ADS = 'b663320bbd7c24';

export const ANDROID_PLAY_DETAIL_DOWNLOAD_REWARD_ADS = 'b6620c56e9b5fa';
export const ANDROID_PLAY_DETAIL_SHORT_VOD_REWARD_ADS = 'b6621d55d12755';
export const IOS_PLAY_DETAIL_DOWNLOAD_REWARD_ADS = 'b662a013e339de';
export const IOS_PLAY_DETAIL_SHORT_VOD_REWARD_ADS = 'b662a01476b4d5';

export const TOPON_BANNER_WIDTH = 415;
export const TOPON_BANNER_HEIGHT = 50;
export const TOPON_BANNER_RATIO = TOPON_BANNER_HEIGHT / TOPON_BANNER_WIDTH;

export const YING_SHI_PRODUCT_ANDROID = 3;
export const YING_SHI_PRODUCT_IOS = 4;

export const AMJ_PRODUCT_ANDROID = 5;
export const AMJ_PRODUCT_IOS = 6;


export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

export const APP_NAME_CONST = '娃娃追剧';
export const APP_NAME_CONST2 = '该APP';
export const APP_EMAIL_CONST = 'contact.movie9@gmail.com';

export const IS_OTHER_SKIN =
   APP_NAME_CONST !== '爱美剧' && APP_NAME_CONST !== '影视TV';

export const NON_VIP_STREAM_TIME_SECONDS = 300;

export const PLAY_HTTP_SERVER_PORT = 8085;

export const SHOW_ZF_CONST = false;
export const INVITE_FRIEND = false;

export const ADULT_MODE_PREVIEW_DURATION = 300;

export const DOWNLOAD_WATCH_ANYTIME = Platform.OS === 'android' ? false : true;
export const DOWNLOAD_BATCH_SIZE = 5;
export const TOTAL_VIDEO_TO_DOWNLOAD = 300;

export const COMMENT_MAX_INPUT = 200;

export const MINI_SHOW_LOGIN_NUMBER = Platform.OS === 'ios' ? 299 : 10;

export const AD_VIDEO_SECONDS = 15;

export const GOOGLE_SINGIN_CLIENT_WEB =
   '699123886701-lg76r3gei261u8lip8jp7qjlt49hqkf7.apps.googleusercontent.com';
export const GOOGLE_SINGIN_CLIENT_IOS =
   '699123886701-ok49jlua77cf0omih5g1u9f1irflnrq3.apps.googleusercontent.com';

export const MAX_CONCURRENT_VIDEO_DOWNLOAD = 1;
export const EVENT_CUSTOM_ON = true;
export const EVENT_ANALYSIS_INTERVEL_SECONDS = 300;

export const SUBSCRIPTION_TYPE = 'subs';
export const IAP_TYPE = 'iap';
export const SI_FANG = '4_Fang';

export const CHAT_SEND_COOLDOWN = 3;
export const CHAT_BOX_MAX_ITEM = 150;

export const VIP_PROMOTION_INTERVEL_SECONDS = 3;
export const VIP_PROMOTION_COUNTDOWN_MINUTE = 300;
export const VIP_PROMOTION_PURCHASE_MIN = 25000;
export const VIP_PROMOTION_PURCHASE_MAX = 50000;
export const VIP_PROMOTION_PURCHASE_RANDOM = 10000;

export const DOWNLOAD_FEATURE_ENABLED = true;
export const DOWNLOAD_FEATURE_MAX_QUEUE = 10;

export const EVENT_SPLASH_SHOW_DURATION = 7 * 24 * 60 * 60 * 1000;

export const VIEW_NUMBER_FOR_SHOW_VIDEO_ADS = 20;

export const VIDEO_UPLOAD_DEFAULT_SIZE = 1000000;
export const VIDEO_UPLOAD_SPEED = 900000; 
