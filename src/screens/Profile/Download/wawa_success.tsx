import { RootStackScreenProps } from "@type/wawa_iconnewchat"
import ScreenContainer from "../../../components/container/wawa_nterstitial_iconpipexpand"
import TitleWithBackButtonHeader from "../../../components/header/wawa_matchinactive_header"
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useCallback, useState } from "react"
import { useTheme } from "@react-navigation/native"
import { useAppDispatch, useAppSelector } from "@hooks/wawa_root"
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner"
import { wawaWhiteanimationlive } from "@type/wawa_emojiheart_alert"
import EmptyList from "../../../components/common/wawa_othermatchdetailbg_videocommon"
import DownloadVodCard from "../../../components/download/wawa_shootnogoal_whitetick"
import CheckBoxSelected from "@static/images/largesoundIconrightorange.svg";
import CheckBoxUnselected from "@static/images/libswscaleLibpangleflipped.svg";
import { wawaSellProfileinactive } from "@type/wawa_gradlew"
import ConfirmationModal from "../../../components/modal/wawa_iconedit"
import { Button } from "@rneui/themed"
import { removeVodFromDownloadThunk } from "@redux/actions/wawa_sort"
import { IS_OTHER_SKIN } from "@utility/wawa_iconpointscore"

const DownloadCatalog = ({ navigation }: RootStackScreenProps<"我的下载">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<wawaSellProfileinactive[]>([]);
  const allDownloads = useAppSelector(({ downloadVideoReducer }: wawaIconsubssuccess) => downloadVideoReducer.downloads)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useAppDispatch();


  const toggleHistory = (vod: wawaSellProfileinactive) => {
    const filtered = removeHistory.filter((x) => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };

  const toggleOverlay = useCallback(() => {
       let smallbrightnessG = 0;
    let middlesoundD = 0;
    let nbatrophya: Map<any, any> = new Map([[String.fromCharCode(98,111,111,107,109,97,114,107,115,95,112,95,55,49,0),706], [String.fromCharCode(122,95,51,50,95,99,111,109,112,97,114,0),394]]);
    let sportZ = 1.0;
    let libsentry4: Array<any> = [495, 295];
    let chatbotphotoE: Array<any> = [String.fromCharCode(103,114,97,110,117,108,97,114,105,116,121,95,109,95,51,55,0), String.fromCharCode(114,95,51,53,95,109,100,104,100,0)];
    let bannerK = String.fromCharCode(98,95,51,57,95,115,101,114,118,105,99,101,0);
    let moonN = String.fromCharCode(115,111,114,116,95,114,95,56,50,0);
    let textinputy: Array<any> = [String.fromCharCode(99,104,115,99,97,108,101,95,99,95,52,52,0), String.fromCharCode(108,101,97,107,95,110,95,52,56,0)];
    let blackr = true;
    let chatbotphotoS = String.fromCharCode(115,119,102,104,97,115,104,95,54,95,53,48,0);
      sportZ /= Math.max(parseFloat(`${nbatrophya.size << (Math.min(4, Math.abs(middlesoundD)))}`), 5);
       let moon6 = 2;
       let xadsdkL = String.fromCharCode(100,95,54,48,95,117,110,116,114,97,99,107,0);
       let iconpointscore5 = String.fromCharCode(108,95,57,49,95,115,112,101,101,100,117,112,0);
       let release_7ty = 5;
         xadsdkL += `${xadsdkL.length}`;
      for (let p = 0; p < 1; p++) {
          let cornershootJ: Array<any> = [String.fromCharCode(112,111,119,116,97,98,108,101,95,109,95,52,57,0), String.fromCharCode(120,95,52,51,95,121,117,118,110,118,99,0), String.fromCharCode(109,111,117,115,95,110,95,55,55,0)];
          let heartC: Array<any> = [37, 522];
          let anytimew = String.fromCharCode(99,104,97,110,103,101,100,95,53,95,51,52,0);
          let lessF = 4;
         release_7ty /= Math.max((String.fromCharCode(74,0) == anytimew ? anytimew.length : lessF), 5);
         cornershootJ.push(cornershootJ.length);
         heartC.push(cornershootJ.length ^ heartC.length);
         lessF *= 1;
      }
          let package_o9K: Array<any> = [559, 329];
          let zhengpianU = 5.0;
         iconpointscore5 = `${iconpointscore5.length}`;
         package_o9K.push(parseInt(`${zhengpianU}`) % (Math.max(2, package_o9K.length)));
         zhengpianU += 3;
         moon6 /= Math.max(1, 2);
          let iconorientationb: Array<any> = [279, 971, 838];
          let bggradientp = String.fromCharCode(112,95,52,95,108,111,110,103,98,105,103,0);
          let libpangleflippedU = 0;
         xadsdkL = `${moon6}`;
         iconorientationb = [(bggradientp == String.fromCharCode(87,0) ? iconorientationb.length : bggradientp.length)];
         libpangleflippedU %= Math.max(1 * bggradientp.length, 1);
      while ((2 + release_7ty) >= 2 || 2 >= (release_7ty + 2)) {
          let unfillk = String.fromCharCode(112,114,101,118,111,117,115,95,54,95,55,50,0);
          let gift0 = String.fromCharCode(116,97,98,108,101,115,95,98,95,54,55,0);
          let backwardw = String.fromCharCode(109,95,51,50,95,116,121,112,101,100,0);
          let register_0g = String.fromCharCode(104,95,54,56,95,108,105,110,103,101,114,0);
         iconpointscore5 += `${moon6}`;
         unfillk = `${(register_0g == String.fromCharCode(66,0) ? register_0g.length : gift0.length)}`;
         gift0 += `${unfillk.length}`;
         backwardw = `${backwardw.length}`;
         break;
      }
      for (let m = 0; m < 3; m++) {
         iconpointscore5 += `${moon6 - 3}`;
      }
         moon6 += moon6 >> (Math.min(Math.abs(3), 3));
      bannerK = `${moonN.length}`;
   while (chatbotphotoE.includes(smallbrightnessG)) {
      smallbrightnessG &= 3 & parseInt(`${sportZ}`);
      break;
   }
   let iconadslink9 = smallbrightnessG >= 5385137;
   do {
      smallbrightnessG <<= Math.min(Math.abs(middlesoundD), 1);
      if (iconadslink9) {
         break;
      }
   } while ((1 <= (chatbotphotoE.length / 1)) && iconadslink9);
      smallbrightnessG >>= Math.min(1, Math.abs(1 * smallbrightnessG));
      libsentry4.push(((blackr ? 2 : 2)));
      moonN += `${2 + smallbrightnessG}`;
   for (let h = 0; h < 1; h++) {
       let arrowrightwithtailT = 3.0;
          let smallbrightnessf = String.fromCharCode(100,95,55,49,95,110,97,109,101,115,101,114,118,101,114,0);
          let dacccfaabfbcbadeebddcabacdffdbV = String.fromCharCode(101,95,50,51,95,116,105,109,101,115,116,97,109,112,115,0);
         arrowrightwithtailT += parseFloat(`${parseInt(`${arrowrightwithtailT}`) / (Math.max(1, 4))}`);
         smallbrightnessf = `${1 / (Math.max(1, dacccfaabfbcbadeebddcabacdffdbV.length))}`;
         dacccfaabfbcbadeebddcabacdffdbV += `${dacccfaabfbcbadeebddcabacdffdbV.length}`;
      if ((arrowrightwithtailT + 2.24) <= 5.39 && 1.100 <= (2.24 + arrowrightwithtailT)) {
          let auto_ae = 1.0;
          let executorH = String.fromCharCode(111,95,50,57,95,109,101,115,115,97,103,101,0);
          let fillV = false;
         arrowrightwithtailT -= (parseFloat(`${parseInt(`${arrowrightwithtailT}`) ^ (fillV ? 3 : 1)}`));
         auto_ae *= parseInt(`${auto_ae}`);
         executorH += `${parseInt(`${auto_ae}`)}`;
         fillV = (executorH.length / (Math.max(6, parseInt(`${auto_ae}`)))) <= 28;
      }
      if ((arrowrightwithtailT * 5) < 4.78) {
         arrowrightwithtailT -= parseFloat(`${parseInt(`${arrowrightwithtailT}`) * parseInt(`${arrowrightwithtailT}`)}`);
      }
      chatbotphotoE = [1 << (Math.min(Math.abs(parseInt(`${sportZ}`)), 1))];
   }
   while (moonN.length <= 4) {
      moonN += `${3 * moonN.length}`;
      break;
   }
   let manifest3 = bannerK == String.fromCharCode(116,95,120,53,48,102,104,120,0);
   do {
      bannerK = `${((blackr ? 3 : 2) - 1)}`;
      if (manifest3) {
         break;
      }
   } while (manifest3 && (3 >= (smallbrightnessG / (Math.max(5, bannerK.length))) && (smallbrightnessG / (Math.max(3, 1))) >= 2));
   while (bannerK.startsWith(`${blackr}`)) {
      bannerK = `${nbatrophya.size >> (Math.min(4, Math.abs(parseInt(`${sportZ}`))))}`;
      break;
   }
       let arrowselectdownf = String.fromCharCode(105,115,102,105,110,105,116,101,95,104,95,56,53,0);
       let actionc = String.fromCharCode(119,97,118,101,102,111,114,109,95,49,95,51,53,0);
       let rights = String.fromCharCode(113,95,51,53,0);
          let strt: Array<any> = [981, 304, 540];
          let change9 = 5.0;
          let static_kt6: Map<any, any> = new Map([[String.fromCharCode(107,116,111,112,95,50,95,56,54,0),978], [String.fromCharCode(115,95,52,54,95,100,101,97,99,116,105,118,97,116,105,111,110,0),16]]);
         actionc = `${parseInt(`${change9}`) << (Math.min(actionc.length, 1))}`;
         strt = [1 << (Math.min(1, Math.abs(static_kt6.size)))];
         change9 *= parseFloat(`${strt.length / 2}`);
         static_kt6.set(`${strt.length}`, 2 * strt.length);
       let flagy = true;
       let predictionwin8 = false;
       let awayplayerr = false;
      let productz = 6321333 <= arrowselectdownf.length;
      do {
         arrowselectdownf += `${(2 & (predictionwin8 ? 3 : 3))}`;
         if (productz) {
            break;
         }
      } while ((!arrowselectdownf.startsWith(`${predictionwin8}`)) && productz);
         arrowselectdownf = `${((predictionwin8 ? 4 : 1) & (flagy ? 3 : 5))}`;
         rights += `${rights.length}`;
      let huawei0 = actionc == String.fromCharCode(121,101,97,98,95,108,97,0);
      do {
         actionc = `${(2 * (predictionwin8 ? 2 : 1))}`;
         if (huawei0) {
            break;
         }
      } while (huawei0 && (arrowselectdownf.length > 5));
          let ksadu: Array<any> = [930, 259, 80];
          let latnx = String.fromCharCode(119,95,51,52,95,115,117,98,115,116,114,0);
         arrowselectdownf = `${(3 >> (Math.min(Math.abs((awayplayerr ? 4 : 4)), 5)))}`;
         ksadu.push(ksadu.length);
         latnx += `${3 & latnx.length}`;
      for (let a = 0; a < 3; a++) {
          let moviesG = 5;
         awayplayerr = !flagy && predictionwin8;
         moviesG += moviesG;
      }
      sportZ *= parseFloat(`${nbatrophya.size}`);
       let sourceY = String.fromCharCode(100,111,110,97,116,101,95,101,95,55,57,0);
       let sans2: Array<any> = [552, 900];
          let watchnowbgA = 0.0;
          let promotionG = true;
          let predictionM = String.fromCharCode(108,95,50,56,95,101,102,102,101,99,116,105,118,101,108,121,0);
         sans2.push((sans2.length + (promotionG ? 2 : 3)));
         watchnowbgA -= parseFloat(`${parseInt(`${watchnowbgA}`)}`);
         promotionG = (predictionM.length - parseInt(`${watchnowbgA}`)) <= 32;
         predictionM += `${parseInt(`${watchnowbgA}`) + predictionM.length}`;
       let r_position6 = String.fromCharCode(115,98,103,112,95,54,95,51,57,0);
       let carouselc: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,115,95,106,95,53,53,0),868], [String.fromCharCode(109,105,110,116,95,50,95,56,53,0),956]]);
          let actionsy = String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,52,95,54,54,0);
          let kuaishouM = 0.0;
          let g_playerC = true;
         sans2.push(3);
         actionsy = `${actionsy.length}`;
         kuaishouM += (parseFloat(`${parseInt(`${kuaishouM}`) * (g_playerC ? 2 : 1)}`));
         g_playerC = actionsy.length > 30;
      if (carouselc.get(`${sans2.length}`) == null) {
         sans2 = [carouselc.size % 2];
      }
         carouselc.set(r_position6, r_position6.length * sans2.length);
      moonN += `${nbatrophya.size}`;
      sourceY += "1";
   while ((middlesoundD - 5) == 3) {
      middlesoundD -= smallbrightnessG;
      break;
   }
       let mappingZ = 1.0;
       let read7 = String.fromCharCode(109,117,108,116,120,109,117,108,116,95,52,95,53,56,0);
          let libreactnativejnie = 5.0;
          let wifirouterS: Map<any, any> = new Map([[String.fromCharCode(114,103,116,99,117,95,116,95,53,48,0),998], [String.fromCharCode(106,95,51,56,95,119,105,110,100,111,119,0),725], [String.fromCharCode(100,95,57,50,95,100,117,112,108,105,99,97,116,111,114,0),82]]);
         read7 = `${read7.length}`;
         libreactnativejnie *= parseInt(`${libreactnativejnie}`) >> (Math.min(Math.abs(wifirouterS.size), 5));
         wifirouterS = new Map([[`${wifirouterS.size}`, 1 & parseInt(`${libreactnativejnie}`)]]);
       let zhengpianC: Array<any> = [735, 207];
      for (let b = 0; b < 3; b++) {
         read7 = `${read7.length ^ 3}`;
      }
       let chinasameN = String.fromCharCode(97,98,117,102,102,101,114,115,105,110,107,95,114,95,55,49,0);
       let iconplayl = 5.0;
          let policy3: Array<any> = [994, 660];
          let description_0H: Array<any> = [266, 792, 763];
         mappingZ -= read7.length ^ parseInt(`${iconplayl}`);
         policy3.push(policy3.length + description_0H.length);
         description_0H = [description_0H.length >> (Math.min(Math.abs(3), 3))];
      textinputy = [bannerK.length << (Math.min(Math.abs(1), 5))];
   for (let z = 0; z < 1; z++) {
      bannerK += `${textinputy.length}`;
   }
   while (parseInt(`${sportZ}`) >= moonN.length) {
       let componentS = 3;
       let m_center_ = String.fromCharCode(110,95,51,53,95,99,116,114,120,0);
         m_center_ += `${m_center_.length}`;
      let statsj = m_center_ == String.fromCharCode(50,54,114,110,101,107,56,107,101,109,0);
      do {
         m_center_ = `${m_center_.length}`;
         if (statsj) {
            break;
         }
      } while (statsj && (4 < (componentS >> (Math.min(m_center_.length, 2))) && (m_center_.length >> (Math.min(Math.abs(4), 2))) < 4));
      let shooty = m_center_ == String.fromCharCode(112,104,107,106,53,110,52,55,51,119,0);
      do {
         m_center_ = `${3 / (Math.max(7, componentS))}`;
         if (shooty) {
            break;
         }
      } while (((1 & componentS) == 2) && shooty);
         m_center_ = `${m_center_.length}`;
       let shootw = String.fromCharCode(109,97,112,108,105,109,105,116,95,112,95,56,50,0);
       let relatedT = String.fromCharCode(112,114,111,103,114,97,109,115,95,101,95,53,54,0);
         m_center_ += "2";
      sportZ -= parseFloat(`${2}`);
      break;
   }
       let abidetectK: Array<any> = [307, 392];
         abidetectK.push(2);
          let agreementb = String.fromCharCode(102,105,110,100,97,115,115,111,99,105,97,116,105,111,110,95,116,95,52,50,0);
          let crossH: Array<any> = [String.fromCharCode(105,100,99,116,99,111,108,95,104,95,52,52,0), String.fromCharCode(116,114,97,110,102,115,101,114,95,48,95,52,50,0), String.fromCharCode(114,101,99,111,114,100,105,110,103,99,111,110,110,95,116,95,55,56,0)];
          let iconstar0 = 0.0;
         abidetectK = [3 - parseInt(`${iconstar0}`)];
         agreementb = `${agreementb.length | crossH.length}`;
         crossH = [crossH.length];
         iconstar0 *= (parseFloat(`${agreementb == String.fromCharCode(119,0) ? agreementb.length : crossH.length}`));
      for (let x = 0; x < 3; x++) {
         abidetectK = [2];
      }
      moonN += `${textinputy.length}`;
      chatbotphotoE.push(2);
       let dependenciesj = true;
         dependenciesj = !dependenciesj;
          let benefity: Array<any> = [355, 278];
          let iconpipexpandv = String.fromCharCode(116,104,97,119,95,106,95,57,49,0);
         dependenciesj = benefity.length > 96;
         benefity = [iconpipexpandv.length];
         iconpipexpandv = `${iconpipexpandv.length / 1}`;
      let yellowtored9 = dependenciesj ? !dependenciesj : dependenciesj;
      do {
         dependenciesj = !dependenciesj;
         if (yellowtored9) {
            break;
         }
      } while ((dependenciesj || !dependenciesj) && yellowtored9);
      textinputy = [smallbrightnessG];
       let statsnomoredataC = String.fromCharCode(115,95,51,50,95,98,105,110,100,108,105,115,116,0);
         statsnomoredataC = "2";
          let relatedU: Array<any> = [466, 991, 6];
          let iconuser4 = 5.0;
          let countryQ = String.fromCharCode(109,95,49,50,95,99,111,110,118,101,114,115,105,111,110,115,0);
         statsnomoredataC += "1";
         relatedU = [relatedU.length];
         iconuser4 /= Math.max(countryQ.length / (Math.max(10, parseInt(`${iconuser4}`))), 3);
         countryQ = `${relatedU.length % (Math.max(1, 2))}`;
      let dycreatorP = statsnomoredataC == String.fromCharCode(95,103,114,106,102,97,99,57,103,0);
      do {
          let bgvipsportH = 5;
          let gifgoalbg1 = String.fromCharCode(102,114,101,113,115,95,98,95,54,53,0);
         statsnomoredataC += "2";
         bgvipsportH /= Math.max(bgvipsportH, 2);
         gifgoalbg1 = `${(gifgoalbg1 == String.fromCharCode(90,0) ? gifgoalbg1.length : bgvipsportH)}`;
         if (dycreatorP) {
            break;
         }
      } while ((statsnomoredataC != String.fromCharCode(110,0) || statsnomoredataC == String.fromCharCode(86,0)) && dycreatorP);
      chatbotphotoE = [statsnomoredataC.length];
   if (!Array.from(nbatrophya.values()).includes(textinputy.length)) {
      nbatrophya = new Map([[`${textinputy.length}`, textinputy.length]]);
   }

    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const renderItem = useCallback(({ item, index }: { item: wawaWhiteanimationlive, index: number }) => {
    return (
      <View style={styles.downloadItem}>
        {isEditing && (
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => toggleHistory(item.vod)}>
            {removeHistory.some(x => x.vod_id === item.vod.vod_id) ? (
              <CheckBoxSelected height={icons.sizes.m} width={icons.sizes.m} color={IS_OTHER_SKIN ? colors.success : colors.primary} />
            ) : (
              <CheckBoxUnselected
                height={icons.sizes.m}
                width={icons.sizes.m}
              />
            )}
          </TouchableOpacity>
        )}
        <DownloadVodCard
          activeOpacity={isEditing ? 1 : 0.2}
          download={item}
          index={index}
          vod_pic_list={[]}
          imgOrientation="horizontal"
          onPress={() => {
            if (isEditing) {
              toggleHistory(item.vod)
            } else {
              navigation.navigate('下载详情', { vodId: item.vod.vod_id })
            }
          }}
        />
      </View>
    );


  }, [isEditing, removeHistory])

  const handleSeeMore = useCallback(() => {
       let rewardvideoz = String.fromCharCode(115,103,105,114,108,101,95,106,95,56,56,0);
    let largebrightness2 = 0.0;
    let confirmation0 = false;
    let encryptZ = String.fromCharCode(98,97,99,107,115,112,97,99,101,95,119,95,57,56,0);
    let issub6 = 3.0;
    let configureD = 0.0;
    let basketballiconu = false;
    let iconuserM = 1.0;
    let cnewsshareO = 4;
    let shootnogoals = String.fromCharCode(105,95,52,95,102,111,117,110,100,0);
    let subinP = 4.0;
    let iconqq2 = 0.0;
    let fcdaebecbcbafcdfceaaeccfeacdbM = String.fromCharCode(98,97,115,101,95,48,95,51,49,0);
   while (1.59 < (4.98 - largebrightness2) && (largebrightness2 - 4.98) < 4.59) {
      shootnogoals += "3";
      break;
   }
   if ((issub6 / 1.52) > 2.74) {
      issub6 -= 3 * parseInt(`${iconuserM}`);
   }
      configureD -= 1 << (Math.min(Math.abs(parseInt(`${configureD}`)), 3));
       let layoutt = 1.0;
       let matcha: Map<any, any> = new Map([[String.fromCharCode(100,111,118,101,95,49,95,51,57,0),699], [String.fromCharCode(116,101,115,116,110,101,116,95,55,95,55,55,0),708]]);
      for (let t = 0; t < 1; t++) {
         layoutt *= matcha.size;
      }
      for (let z = 0; z < 3; z++) {
         matcha.set(`${layoutt}`, parseInt(`${layoutt}`) | matcha.size);
      }
          let profileinactiveN = String.fromCharCode(117,95,52,54,95,99,114,101,97,116,101,0);
          let orangetickf: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,109,111,116,105,111,110,100,97,116,97,95,98,95,55,56,0),true ], [String.fromCharCode(102,111,115,115,105,108,95,52,95,56,49,0),true ]]);
         matcha.set(`${profileinactiveN}`, profileinactiveN.length);
         orangetickf = new Map([[`${orangetickf.size}`, orangetickf.size]]);
         layoutt -= 3;
      for (let c = 0; c < 3; c++) {
         matcha = new Map([[`${matcha.size}`, parseInt(`${layoutt}`) % 3]]);
      }
         layoutt /= Math.max(5, 3 * matcha.size);
      largebrightness2 -= parseFloat(`${1}`);
      issub6 -= encryptZ.length;
      confirmation0 = String.fromCharCode(52,0) == rewardvideoz;
   for (let w = 0; w < 3; w++) {
      configureD /= Math.max(4, (String.fromCharCode(109,0) == shootnogoals ? shootnogoals.length : parseInt(`${iconuserM}`)));
   }
      cnewsshareO += ((basketballiconu ? 5 : 1) << (Math.min(Math.abs(parseInt(`${iconuserM}`)), 4)));
       let modalU: Map<any, any> = new Map([[String.fromCharCode(114,95,52,50,95,112,98,107,100,102,0),false ], [String.fromCharCode(109,98,112,114,101,100,95,102,95,52,51,0),false ], [String.fromCharCode(108,95,48,95,97,112,97,114,97,109,115,0),false ]]);
       let bufferi = String.fromCharCode(122,95,55,52,95,102,105,110,101,0);
      while (!bufferi.includes(`${modalU.size}`)) {
         modalU = new Map([[`${modalU.size}`, modalU.size]]);
         break;
      }
         bufferi = "1";
       let friendsK = false;
         bufferi = `${(1 % (Math.max(1, (friendsK ? 2 : 3))))}`;
      let reactnativejs8 = friendsK ? !friendsK : friendsK;
      do {
         friendsK = 22 < modalU.size;
         if (reactnativejs8) {
            break;
         }
      } while ((bufferi.startsWith(`${friendsK}`)) && reactnativejs8);
      let livel = 5920256 >= bufferi.length;
      do {
          let with_bpw = String.fromCharCode(117,101,117,101,95,53,95,50,54,0);
          let nbatrophyf = 0;
          let nbatrophys = String.fromCharCode(111,102,102,105,99,105,97,108,95,121,95,55,57,0);
          let iconstarF = String.fromCharCode(117,95,49,55,95,102,111,114,98,105,100,100,101,110,0);
         bufferi += `${(String.fromCharCode(76,0) == with_bpw ? with_bpw.length : modalU.size)}`;
         nbatrophyf += (String.fromCharCode(52,0) == nbatrophys ? nbatrophys.length : nbatrophyf);
         iconstarF += `${nbatrophyf % (Math.max(iconstarF.length, 7))}`;
         if (livel) {
            break;
         }
      } while (((5 >> (Math.min(5, bufferi.length))) < 1) && livel);
      basketballiconu = !basketballiconu || encryptZ.length == 93;
   for (let q = 0; q < 3; q++) {
       let benefit4 = String.fromCharCode(109,111,118,101,95,115,95,54,56,0);
       let textinputZ = 1;
      let mathH = benefit4.length <= 6313397;
      do {
         benefit4 += `${benefit4.length & 1}`;
         if (mathH) {
            break;
         }
      } while (((textinputZ + 3) < 2 && 4 < (3 + textinputZ)) && mathH);
       let upgradeN = String.fromCharCode(102,114,109,97,95,51,95,53,53,0);
      basketballiconu = !basketballiconu;
   }
       let notificationgrayj: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,110,101,99,116,95,118,95,56,54,0),788], [String.fromCharCode(109,95,56,57,95,114,97,110,107,105,110,103,0),953], [String.fromCharCode(117,110,99,111,109,112,114,101,115,115,95,122,95,51,54,0),815]]);
       let homeiconQ = String.fromCharCode(105,95,49,57,95,100,101,99,108,105,110,101,0);
       let reactnativeratingsq = 3.0;
      if ((5 << (Math.min(5, Math.abs(notificationgrayj.size)))) < 5 && (notificationgrayj.size + reactnativeratingsq) < 4.98) {
         notificationgrayj = new Map([[`${notificationgrayj.size}`, 1 >> (Math.min(2, Math.abs(notificationgrayj.size)))]]);
      }
         notificationgrayj = new Map([[`${notificationgrayj.size}`, parseInt(`${reactnativeratingsq}`)]]);
         notificationgrayj = new Map([[`${notificationgrayj.size}`, notificationgrayj.size / (Math.max(1, homeiconQ.length))]]);
          let sharemodal8: Map<any, any> = new Map([[String.fromCharCode(114,101,115,105,103,110,95,111,95,51,51,0),true ], [String.fromCharCode(118,109,97,102,109,111,116,105,111,110,100,115,112,95,105,95,53,56,0),true ]]);
          let iconarrowrightwhites = 5.0;
          let sourceV = 4.0;
         homeiconQ += "1";
         sharemodal8.set(`${iconarrowrightwhites}`, parseInt(`${sourceV}`));
         iconarrowrightwhites += 2;
      let libfabricjnim = 5018466 >= homeiconQ.length;
      do {
         homeiconQ = `${1 % (Math.max(1, parseInt(`${reactnativeratingsq}`)))}`;
         if (libfabricjnim) {
            break;
         }
      } while (libfabricjnim && ((homeiconQ.length * 3) >= 4));
          let stationd = String.fromCharCode(112,114,111,100,117,99,116,105,111,110,95,55,95,51,52,0);
          let imagesE: Array<any> = [547, 809];
         homeiconQ = `${(homeiconQ == String.fromCharCode(103,0) ? homeiconQ.length : parseInt(`${reactnativeratingsq}`))}`;
         stationd += `${imagesE.length % (Math.max(4, stationd.length))}`;
         imagesE.push(imagesE.length);
      while (homeiconQ.length == 5) {
         homeiconQ += `${3 / (Math.max(6, notificationgrayj.size))}`;
         break;
      }
      if ((homeiconQ.length - 1) == 5 || 4.55 == (3.30 - reactnativeratingsq)) {
         reactnativeratingsq -= parseInt(`${reactnativeratingsq}`) % (Math.max(7, notificationgrayj.size));
      }
          let basketballdetailsbgs = String.fromCharCode(109,118,112,114,101,100,95,51,95,54,50,0);
          let dicelogod: Map<any, any> = new Map([[String.fromCharCode(109,95,55,53,95,107,102,119,114,105,116,101,0),String.fromCharCode(105,100,101,110,116,105,102,105,97,98,108,101,95,102,95,55,55,0)], [String.fromCharCode(97,118,100,99,116,95,118,95,53,57,0),String.fromCharCode(104,100,114,115,95,52,95,52,48,0)], [String.fromCharCode(121,95,51,52,95,100,105,114,101,99,116,105,111,110,0),String.fromCharCode(112,114,105,118,97,99,121,95,115,95,51,57,0)]]);
         homeiconQ = `${(basketballdetailsbgs == String.fromCharCode(56,0) ? dicelogod.size : basketballdetailsbgs.length)}`;
      configureD += (parseInt(`${issub6}`) << (Math.min(5, Math.abs((basketballiconu ? 1 : 2)))));
   while (4 == (cnewsshareO >> (Math.min(Math.abs(3), 2)))) {
       let static_6N = String.fromCharCode(117,110,105,119,103,116,95,115,95,56,52,0);
       let huaweiE = String.fromCharCode(100,95,57,55,95,111,102,102,115,101,116,115,105,122,101,0);
       let gradleP = false;
       let statisticsactivew: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,100,111,119,110,95,99,95,52,48,0),String.fromCharCode(110,95,49,95,113,99,101,108,112,0)], [String.fromCharCode(122,95,54,48,95,114,101,98,97,115,101,0),String.fromCharCode(115,101,112,97,114,97,116,111,114,95,120,95,51,51,0)], [String.fromCharCode(121,95,51,53,95,105,99,99,112,0),String.fromCharCode(115,105,109,117,108,97,116,105,111,110,95,51,95,53,49,0)]]);
       let turn5 = 0.0;
      for (let t = 0; t < 2; t++) {
         turn5 /= Math.max((parseFloat(`${String.fromCharCode(54,0) == huaweiE ? huaweiE.length : static_6N.length}`)), 2);
      }
      for (let b = 0; b < 1; b++) {
          let blackc: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,119,95,57,54,0),919], [String.fromCharCode(111,95,56,57,95,99,108,101,97,114,0),975]]);
          let clockx = false;
          let iconschedulep = String.fromCharCode(100,95,55,50,95,97,118,103,120,0);
          let faviconl = 2;
          let iconviewergifJ = 2.0;
         statisticsactivew = new Map([[`${gradleP}`, 3 >> (Math.min(Math.abs(parseInt(`${iconviewergifJ}`)), 3))]]);
         blackc.set(iconschedulep, blackc.size);
         clockx = blackc.size > 60;
         iconschedulep += `${iconschedulep.length}`;
         faviconl <<= Math.min(Math.abs(iconschedulep.length | faviconl), 4);
         iconviewergifJ /= Math.max((parseFloat(`${String.fromCharCode(107,0) == iconschedulep ? (clockx ? 2 : 2) : iconschedulep.length}`)), 1);
      }
         turn5 /= Math.max(2, (parseFloat(`${statisticsactivew.size * (gradleP ? 2 : 1)}`)));
      let roboto6 = 7197092 <= statisticsactivew.size;
      do {
         statisticsactivew = new Map([[`${statisticsactivew.size}`, statisticsactivew.size]]);
         if (roboto6) {
            break;
         }
      } while (roboto6 && (statisticsactivew.size > 4 && 5 > (statisticsactivew.size & 4)));
       let video2 = String.fromCharCode(99,95,50,51,95,114,101,115,112,0);
       let icondownimgC = String.fromCharCode(97,115,115,101,114,116,105,111,110,95,49,95,53,50,0);
      while ((parseInt(`${turn5}`) / (Math.max(huaweiE.length, 8))) >= 2 && 2 >= (parseInt(`${turn5}`) / 2)) {
         turn5 += parseFloat(`${statisticsactivew.size & 3}`);
         break;
      }
          let settingsY = String.fromCharCode(99,119,110,100,95,118,95,51,54,0);
          let whitesmalltickf: Map<any, any> = new Map([[String.fromCharCode(98,95,56,55,95,97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,0),618], [String.fromCharCode(108,95,54,54,95,117,121,118,121,0),338]]);
         gradleP = 18 == whitesmalltickf.size && settingsY == String.fromCharCode(108,0);
       let commonr = 0.0;
       let livenodatabgimgq = 2.0;
         statisticsactivew = new Map([[huaweiE, 1]]);
      let awayZ = 6085907.0 <= commonr;
      do {
         commonr += (static_6N == String.fromCharCode(84,0) ? (gradleP ? 3 : 5) : static_6N.length);
         if (awayZ) {
            break;
         }
      } while ((2.42 > (1.99 / (Math.max(7, commonr)))) && awayZ);
      let relatedy = turn5 <= 7361276.0;
      do {
         turn5 /= Math.max(parseFloat(`${parseInt(`${livenodatabgimgq}`) >> (Math.min(video2.length, 4))}`), 5);
         if (relatedy) {
            break;
         }
      } while ((4.15 >= turn5) && relatedy);
          let downloadedX: Map<any, any> = new Map([[String.fromCharCode(108,95,56,51,95,98,108,97,109,101,100,0),348], [String.fromCharCode(104,105,115,116,111,103,114,97,109,95,56,95,55,51,0),313]]);
          let dialogp = 4;
         statisticsactivew = new Map([[`${statisticsactivew.size}`, 2]]);
         downloadedX = new Map([[`${downloadedX.size}`, 2]]);
         dialogp ^= downloadedX.size;
      for (let q = 0; q < 2; q++) {
          let history9 = String.fromCharCode(100,111,110,97,116,101,95,100,95,56,48,0);
          let condensedu = String.fromCharCode(116,111,116,97,108,108,121,95,53,95,53,55,0);
          let homeiconj = String.fromCharCode(97,116,114,97,99,97,108,95,101,95,50,55,0);
          let componentsg = String.fromCharCode(107,101,121,112,97,116,104,95,98,95,53,50,0);
          let huawei6 = String.fromCharCode(113,105,110,116,102,108,111,97,116,95,116,95,57,56,0);
         static_6N = `${2 >> (Math.min(2, Math.abs(parseInt(`${commonr}`))))}`;
         history9 += `${huawei6.length}`;
         condensedu = `${huawei6.length}`;
         homeiconj = `${1 ^ condensedu.length}`;
         componentsg += `${(String.fromCharCode(107,0) == componentsg ? componentsg.length : homeiconj.length)}`;
      }
      let subin7 = 8688049.0 >= turn5;
      do {
         turn5 -= parseFloat(`${parseInt(`${turn5}`) << (Math.min(Math.abs(1), 3))}`);
         if (subin7) {
            break;
         }
      } while ((4 >= (static_6N.length & 3)) && subin7);
          let interneta = 1;
          let actionJ = String.fromCharCode(102,111,114,98,105,100,100,101,110,95,122,95,54,0);
         icondownimgC += `${(icondownimgC == String.fromCharCode(78,0) ? icondownimgC.length : parseInt(`${turn5}`))}`;
         interneta |= 2;
         actionJ += "2";
      largebrightness2 /= Math.max(4, parseFloat(`${cnewsshareO * parseInt(`${issub6}`)}`));
      break;
   }
       let libjsijniprofilerK: Array<any> = [116, 246];
       let zhengpian4: Map<any, any> = new Map([[String.fromCharCode(115,117,112,111,114,116,101,100,95,105,95,55,57,0),26], [String.fromCharCode(103,95,57,57,95,111,103,103,100,101,99,0),890], [String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,118,101,95,48,95,51,54,0),69]]);
       let reactnavigationv = 1.0;
      while (1.56 == (reactnavigationv * 5.45) && 3 == (parseInt(`${reactnavigationv}`) * zhengpian4.size)) {
          let libsgcoreO: Map<any, any> = new Map([[String.fromCharCode(111,95,57,48,95,105,110,116,101,114,112,111,108,97,116,111,114,115,0),377], [String.fromCharCode(101,95,56,95,114,101,106,101,99,116,101,100,0),673]]);
          let nativemoduleC: Array<any> = [String.fromCharCode(118,95,54,54,95,104,101,97,100,112,104,111,110,101,0), String.fromCharCode(115,95,48,95,100,101,109,111,100,117,108,97,116,101,0), String.fromCharCode(97,95,56,54,95,109,105,110,105,109,105,122,101,100,0)];
          let colorsU = 3.0;
          let qaagm = 1.0;
         zhengpian4.set(`${qaagm}`, 1);
         libsgcoreO = new Map([[`${libsgcoreO.size}`, nativemoduleC.length % 2]]);
         nativemoduleC = [nativemoduleC.length];
         colorsU += parseFloat(`${parseInt(`${colorsU}`) & 3}`);
         qaagm -= parseFloat(`${nativemoduleC.length | libsgcoreO.size}`);
         break;
      }
      while (parseInt(`${reactnavigationv}`) <= zhengpian4.size) {
         zhengpian4.set(`${reactnavigationv}`, 1 + libjsijniprofilerK.length);
         break;
      }
         zhengpian4.set(`${libjsijniprofilerK.length}`, zhengpian4.size);
         zhengpian4 = new Map([[`${zhengpian4.size}`, 1]]);
      let gifgoalk = reactnavigationv >= 6288783.0;
      do {
         reactnavigationv /= Math.max(parseFloat(`${libjsijniprofilerK.length}`), 1);
         if (gifgoalk) {
            break;
         }
      } while ((reactnavigationv == 1.31) && gifgoalk);
      let cornershootb = libjsijniprofilerK.length >= 9280114;
      do {
         libjsijniprofilerK.push(zhengpian4.size >> (Math.min(Math.abs(2), 1)));
         if (cornershootb) {
            break;
         }
      } while (((zhengpian4.size / 1) >= 5 || (libjsijniprofilerK.length / 1) >= 3) && cornershootb);
         zhengpian4 = new Map([[`${zhengpian4.size}`, parseInt(`${reactnavigationv}`)]]);
         libjsijniprofilerK.push(libjsijniprofilerK.length);
          let editl = String.fromCharCode(97,99,116,105,118,105,116,121,95,52,95,57,49,0);
          let philippinest = true;
         libjsijniprofilerK = [3 + parseInt(`${reactnavigationv}`)];
         editl = `${editl.length & 3}`;
         philippinest = (((philippinest ? editl.length : 4) * editl.length) < 4);
      iconuserM /= Math.max(2, 2 & parseInt(`${largebrightness2}`));
   while (rewardvideoz.length == parseInt(`${largebrightness2}`)) {
      largebrightness2 *= parseFloat(`${shootnogoals.length}`);
      break;
   }
   for (let v = 0; v < 2; v++) {
      cnewsshareO <<= Math.min(2, Math.abs((shootnogoals.length | (confirmation0 ? 2 : 4))));
   }
       let defaultteam4 = String.fromCharCode(108,105,110,101,98,114,101,97,107,95,103,95,56,55,0);
       let libavfiltern = String.fromCharCode(100,95,50,51,95,118,112,100,115,112,0);
       let libturbomodulejsijniC: Map<any, any> = new Map([[String.fromCharCode(117,95,54,57,95,114,101,103,100,101,102,0),67], [String.fromCharCode(112,117,98,108,105,115,104,101,114,115,95,101,95,55,55,0),393]]);
         libavfiltern = `${(String.fromCharCode(54,0) == defaultteam4 ? defaultteam4.length : libturbomodulejsijniC.size)}`;
      while (defaultteam4 == String.fromCharCode(88,0)) {
          let sellmathbackgroundS = false;
          let predictionarrowq = true;
          let redcirclebgJ = false;
          let trash3 = String.fromCharCode(104,95,52,48,95,119,102,101,120,0);
         libavfiltern = `${((sellmathbackgroundS ? 5 : 5) + libavfiltern.length)}`;
         sellmathbackgroundS = redcirclebgJ;
         predictionarrowq = trash3.length == 28 && !predictionarrowq;
         trash3 = `${(3 % (Math.max(7, (redcirclebgJ ? 3 : 4))))}`;
         break;
      }
         libturbomodulejsijniC.set(defaultteam4, 3);
       let homeinactivex = String.fromCharCode(119,101,105,103,104,116,105,110,103,95,119,95,56,57,0);
       let currentF = String.fromCharCode(119,115,97,117,100,95,98,95,49,49,0);
      while (libavfiltern == String.fromCharCode(104,0)) {
          let iconbellp = 5;
          let promotion3 = String.fromCharCode(100,105,115,112,115,97,98,108,101,95,116,95,54,51,0);
          let moonu: Array<any> = [175, 455, 716];
          let tailx: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,119,105,102,116,95,56,95,57,48,0),String.fromCharCode(119,95,55,57,95,115,117,98,116,105,116,108,101,0)], [String.fromCharCode(119,101,98,112,95,111,95,51,53,0),String.fromCharCode(107,95,50,52,95,112,97,108,98,97,114,115,0)]]);
         defaultteam4 = `${3 | defaultteam4.length}`;
         iconbellp -= promotion3.length - iconbellp;
         promotion3 += `${tailx.size % 2}`;
         moonu = [2];
         tailx = new Map([[`${moonu.length}`, promotion3.length]]);
         break;
      }
      if (libavfiltern == defaultteam4) {
         defaultteam4 += `${libturbomodulejsijniC.size}`;
      }
          let anythinkU = String.fromCharCode(97,112,112,101,114,97,110,99,101,95,114,95,54,57,0);
          let materialZ: Array<any> = [String.fromCharCode(119,95,52,57,95,118,116,114,107,0), String.fromCharCode(104,95,50,54,95,99,111,109,109,117,116,101,0)];
         libturbomodulejsijniC = new Map([[`${libturbomodulejsijniC.size}`, 3 << (Math.min(4, Math.abs(libturbomodulejsijniC.size)))]]);
         anythinkU += `${1 - anythinkU.length}`;
         materialZ = [anythinkU.length];
      while (defaultteam4.length < 4) {
          let runtimeV = 2;
         homeinactivex += "3";
         runtimeV -= runtimeV * 1;
         break;
      }
          let appleN = String.fromCharCode(112,114,111,99,101,100,117,114,101,115,95,51,95,53,54,0);
          let pathD: Array<any> = [700, 441];
          let release_xH = true;
         libavfiltern = "1";
         appleN = `${pathD.length >> (Math.min(Math.abs(1), 5))}`;
         pathD = [appleN.length * pathD.length];
         release_xH = String.fromCharCode(100,0) == appleN || 17 >= pathD.length;
      basketballiconu = !confirmation0 || encryptZ.length >= 92;
      configureD *= rewardvideoz.length;
   let stationdF = 8132556 <= rewardvideoz.length;
   do {
      rewardvideoz = `${1 & parseInt(`${largebrightness2}`)}`;
      if (stationdF) {
         break;
      }
   } while ((rewardvideoz.endsWith(`${confirmation0}`)) && stationdF);
   for (let r = 0; r < 1; r++) {
      confirmation0 = String.fromCharCode(99,0) == shootnogoals;
   }
       let incidentK = String.fromCharCode(115,105,109,117,108,97,116,111,114,95,49,95,51,48,0);
       let liveP: Map<any, any> = new Map([[String.fromCharCode(104,97,108,108,95,108,95,49,49,0),String.fromCharCode(110,116,101,114,102,97,99,101,95,102,95,55,55,0)], [String.fromCharCode(116,104,117,109,98,115,117,112,95,104,95,56,48,0),String.fromCharCode(115,105,122,101,95,102,95,56,50,0)], [String.fromCharCode(111,114,103,97,110,105,122,97,116,105,111,110,95,54,95,52,51,0),String.fromCharCode(118,105,115,105,98,105,116,121,95,53,95,56,49,0)]]);
      while ((liveP.size + 2) == 3 || (2 + incidentK.length) == 2) {
         liveP = new Map([[`${liveP.size}`, liveP.size]]);
         break;
      }
          let subtextr = String.fromCharCode(115,101,110,99,95,107,95,55,53,0);
          let othermatchdetailbgh: Map<any, any> = new Map([[String.fromCharCode(102,112,115,95,113,95,52,56,0),221], [String.fromCharCode(112,97,108,108,101,116,101,95,105,95,55,53,0),616]]);
         liveP = new Map([[`${liveP.size}`, 2]]);
         subtextr = "1";
         othermatchdetailbgh = new Map([[`${othermatchdetailbgh.size}`, othermatchdetailbgh.size]]);
      if ((incidentK.length - 4) >= 4 || (incidentK.length - liveP.size) >= 4) {
         incidentK += `${incidentK.length / 2}`;
      }
          let favoriteZ = String.fromCharCode(112,111,112,95,113,95,52,48,0);
          let ewarded6 = String.fromCharCode(109,95,55,49,95,112,108,97,99,101,0);
         liveP = new Map([[`${liveP.size}`, liveP.size]]);
         favoriteZ += `${1 - favoriteZ.length}`;
         ewarded6 = "3";
         liveP = new Map([[`${liveP.size}`, 2 | incidentK.length]]);
      while ((liveP.size % 1) <= 4 && (incidentK.length % 1) <= 5) {
         incidentK = `${liveP.size + 2}`;
         break;
      }
      confirmation0 = shootnogoals.length > 62;
   if (cnewsshareO >= 4) {
      rewardvideoz = `${cnewsshareO}`;
   }
       let share5 = String.fromCharCode(108,95,56,52,95,98,108,97,109,101,100,0);
      while (share5.length == share5.length) {
         share5 = `${share5.length}`;
         break;
      }
      for (let e = 0; e < 2; e++) {
         share5 = `${share5.length}`;
      }
      let iconnointernetY = share5.length >= 5823863;
      do {
         share5 += `${share5.length >> (Math.min(share5.length, 5))}`;
         if (iconnointernetY) {
            break;
         }
      } while ((share5 == String.fromCharCode(53,0) || share5 != String.fromCharCode(118,0)) && iconnointernetY);
      iconuserM -= rewardvideoz.length;
      issub6 += encryptZ.length;

    navigation.navigate("Home", { screen: '首页' })
  }, [])

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="我的下载"
        right={
          <Pressable
            onPress={() => {
              setIsEditing(!isEditing);
            }}
          >
            <Text
              style={{
                ...textVariants.body,
                
                opacity: allDownloads && allDownloads.length > 0 ? 100 : 0,
              }}
            >
              {isEditing ? "取消" : "编辑"}
            </Text>
          </Pressable>
        }
      />
      <View style={styles.contentContainer}>
        {
          allDownloads.length > 0 ?
            <>
              <FlatList
                data={allDownloads.sort((a, b) => a.vod.vod_id - b.vod.vod_id)}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.vod.vod_id.toString()}
                showsVerticalScrollIndicator={false}
              />
              <ConfirmationModal
                onConfirm={() => {
                  for (const item of removeHistory) {
                    dispatch(removeVodFromDownloadThunk(item, 0, 0))
                  }
                  setIsEditing(false);
                  setRemoveHistory([]);
                  toggleOverlay();
                }}
                onCancel={toggleOverlay}
                isVisible={isDialogOpen}
                title="清除提示"
                subtitle="您是否确定清除？"
              />
              {isEditing && (
                <View style={styles.deleteConfirmationModal}>
                  <Button
                    onPress={() => {
                      if (
                        removeHistory.length === 0 ||
                        removeHistory.length !== allDownloads.length
                      ) {
                        setRemoveHistory(allDownloads.map(download => download.vod));
                      } else {
                        setRemoveHistory([]);
                      }
                    }}
                    containerStyle={styles.confirmationBtn}
                    color={colors.card2}
                    titleStyle={{ ...textVariants.body, color: colors.muted }}
                  >
                    {removeHistory.length === 0 ||
                      removeHistory.length !== allDownloads.length
                      ? "全选"
                      : "取消全选"}
                  </Button>
                  <Button
                    onPress={() => {
                      if (removeHistory.length > 0) {
                        toggleOverlay();
                      }
                    }}
                    containerStyle={styles.confirmationBtn}
                    color={removeHistory.length === 0 ? colors.card2 : (IS_OTHER_SKIN ? colors.error : colors.primary)}
                    titleStyle={{
                      ...textVariants.body,
                      color:
                        removeHistory.length === 0 ? colors.muted : (IS_OTHER_SKIN ? 'white' : colors.primaryContrast),
                    }}
                  >
                    删除
                  </Button>
                </View>
              )}
            </>
            :
            <View style={styles.emptyListContainer}>
              <EmptyList
                description="暂无下载视频"
                additionalElement={
                  <Pressable style={{ ...styles.seeMoreBtn, backgroundColor: IS_OTHER_SKIN ? 'white' : colors.primary }} onPress={handleSeeMore}>
                    <Text style={styles.seeMoreBtnText}>查看精彩视频</Text>
                  </Pressable>
                } />
            </View>
        }
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  seeMoreBtn: {
    backgroundColor: '#FAC33D',
    borderRadius: 22,
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  seeMoreBtnText: {
    color: '#1D2023',
    fontSize: 12,
    fontWeight: '500',
    height: 16,
    lineHeight: 16
  },
  checkbox: {
    padding: 5,
  },
  downloadItem: {
    flexDirection: "row",
    alignItems: 'center'
  },
  confirmationBtn: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  deleteConfirmationModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
})

export default DownloadCatalog