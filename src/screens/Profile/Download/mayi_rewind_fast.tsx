import { RootStackScreenProps } from "@type/mayi_video_binddatas"
import ScreenContainer from "../../../components/container/mayi_save"
import TitleWithBackButtonHeader from "../../../components/header/mayi_predictiondefault_header"
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useCallback, useState } from "react"
import { useTheme } from "@react-navigation/native"
import { useAppDispatch, useAppSelector } from "@hooks/mayi_redirect"
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail"
import { mayi_CurrentFootball } from "@type/mayi_agreement"
import EmptyList from "../../../components/common/mayi_unread"
import DownloadVodCard from "../../../components/download/mayi_smallbrightness_libimagepipeline"
import CheckBoxSelected from "@static/images/copy_ugDetailsTwitter.svg";
import CheckBoxUnselected from "@static/images/notificationfillemptyUntick.svg";
import { mayi_EmptyGradle } from "@type/mayi_green"
import ConfirmationModal from "../../../components/modal/mayi_small_catalog"
import { Button } from "@rneui/themed"
import { removeVodFromDownloadThunk } from "@redux/actions/mayi_become"
import { IS_OTHER_SKIN } from "@utility/mayi_middleware_apps"

const DownloadCatalog = ({ navigation }: RootStackScreenProps<"我的下载">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<mayi_EmptyGradle[]>([]);
  const allDownloads = useAppSelector(({ downloadVideoReducer }: mayi_Libapminsightb) => downloadVideoReducer.downloads)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useAppDispatch();


  const toggleHistory = (vod: mayi_EmptyGradle) => {
    const filtered = removeHistory.filter((x) => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };

  const toggleOverlay = useCallback(() => {
       let changeU = 0.0;
    let forwardk = 3.0;
    let xvod_ = 2.0;
    let headerw = String.fromCharCode(98,95,50,95,98,108,117,114,97,121,0);
    let hometeamfield8: Map<any, any> = new Map([[String.fromCharCode(112,95,48,95,111,109,112,111,115,101,0),String.fromCharCode(97,112,116,120,95,51,95,57,55,0)], [String.fromCharCode(97,95,50,56,95,115,113,108,105,116,101,0),String.fromCharCode(104,95,50,52,95,115,99,114,97,116,99,104,0)], [String.fromCharCode(115,99,114,97,112,101,95,51,95,57,0),String.fromCharCode(114,101,97,99,104,95,100,95,56,51,0)]]);
    let tickr: Array<any> = [String.fromCharCode(122,95,49,56,95,102,111,114,0), String.fromCharCode(118,95,57,50,95,119,101,98,115,0), String.fromCharCode(112,117,98,95,119,95,53,52,0)];
    let mbsplash2 = 4.0;
    let smallbrightnessO = String.fromCharCode(105,95,50,48,95,97,117,116,111,114,111,116,97,116,105,111,110,0);
    let mintegralz = String.fromCharCode(121,95,54,48,95,99,97,112,97,98,108,101,0);
    let progressM = String.fromCharCode(108,95,50,48,95,112,114,101,0);
       let statisticsinactivej = String.fromCharCode(103,108,121,112,104,95,49,95,56,0);
      let flyerV = String.fromCharCode(122,115,51,111,109,99,105,0) == statisticsinactivej;
      do {
         statisticsinactivej = "1";
         if (flyerV) {
            break;
         }
      } while (flyerV && (5 == statisticsinactivej.length));
          let nativeexZ = 0.0;
          let libfbjni5: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,114,121,95,110,95,51,50,0),String.fromCharCode(115,119,105,102,116,99,95,100,95,54,51,0)], [String.fromCharCode(103,95,51,53,95,112,101,114,115,112,101,99,116,105,118,101,0),String.fromCharCode(100,95,51,48,95,103,102,109,117,108,0)], [String.fromCharCode(121,117,118,112,108,95,99,95,52,0),String.fromCharCode(116,95,56,55,95,105,110,112,117,116,116,101,109,0)]]);
          let splashl: Array<any> = [482, 428, 342];
         statisticsinactivej += "1";
         nativeexZ += 2;
         libfbjni5.set(`${splashl.length}`, libfbjni5.size);
         splashl = [1];
         statisticsinactivej += `${statisticsinactivej.length * statisticsinactivej.length}`;
      xvod_ /= Math.max(smallbrightnessO.length, 5);
   for (let f = 0; f < 3; f++) {
      headerw += `${hometeamfield8.size / 1}`;
   }
   if (!Array.from(hometeamfield8.values()).includes(forwardk)) {
      hometeamfield8.set(smallbrightnessO, (smallbrightnessO == String.fromCharCode(90,0) ? hometeamfield8.size : smallbrightnessO.length));
   }
   let tickedu = headerw.length <= 7676705;
   do {
       let disconnectedB: Map<any, any> = new Map([[String.fromCharCode(114,101,101,110,97,98,108,101,95,110,95,52,54,0),324], [String.fromCharCode(97,114,111,117,110,100,95,101,95,57,0),344]]);
       let smallbrightnessO3 = 1.0;
          let iconpipexpand1 = String.fromCharCode(115,95,56,51,95,116,101,97,114,0);
          let orangeuparrowx: Array<any> = [String.fromCharCode(117,110,102,105,108,116,101,114,101,100,95,122,95,50,56,0), String.fromCharCode(118,95,50,49,95,116,105,109,101,119,97,105,116,0), String.fromCharCode(107,95,52,57,95,116,117,114,98,117,108,101,110,99,101,0)];
         smallbrightnessO3 += parseInt(`${smallbrightnessO3}`) % (Math.max(6, orangeuparrowx.length));
         iconpipexpand1 += `${iconpipexpand1.length - iconpipexpand1.length}`;
         orangeuparrowx.push(iconpipexpand1.length / (Math.max(2, 4)));
         smallbrightnessO3 /= Math.max(5, disconnectedB.size);
          let footballa = String.fromCharCode(114,95,53,48,95,97,117,120,100,97,116,97,0);
          let weather6 = 4.0;
          let homeiconr = 1.0;
         disconnectedB = new Map([[`${smallbrightnessO3}`, parseInt(`${smallbrightnessO3}`) % (Math.max(parseInt(`${homeiconr}`), 9))]]);
         footballa += `${2 ^ parseInt(`${weather6}`)}`;
         weather6 += parseFloat(`${3}`);
         homeiconr /= Math.max(parseInt(`${weather6}`) + 2, 5);
         disconnectedB.set(`${smallbrightnessO3}`, parseInt(`${smallbrightnessO3}`) << (Math.min(Math.abs(disconnectedB.size), 1)));
         disconnectedB.set(`${smallbrightnessO3}`, 2 ^ disconnectedB.size);
       let zoomh = String.fromCharCode(98,117,110,100,108,101,115,95,51,95,51,0);
       let signinupe = String.fromCharCode(109,105,110,115,95,115,95,56,48,0);
      headerw += `${headerw.length}`;
      if (tickedu) {
         break;
      }
   } while (tickedu && ((tickr.length / 2) > 2 && 3 > (headerw.length / (Math.max(2, 1)))));
   while (3.34 == (2.56 - mbsplash2)) {
      mbsplash2 /= Math.max(2, 3);
      break;
   }
   let securityZ = tickr.length >= 6090609;
   do {
       let select3 = true;
       let boot2: Map<any, any> = new Map([[String.fromCharCode(116,95,52,48,95,115,116,114,101,97,109,105,100,0),String.fromCharCode(100,101,108,97,121,115,95,97,95,49,52,0)], [String.fromCharCode(114,95,57,53,95,99,111,108,99,111,108,0),String.fromCharCode(98,108,111,99,107,105,101,95,52,95,54,53,0)]]);
       let iconsaveimageQ = 1;
       let pressureS = 5.0;
       let whistleorange9 = String.fromCharCode(105,115,112,111,114,116,95,112,95,50,48,0);
          let tempnodataO: Map<any, any> = new Map([[String.fromCharCode(121,98,114,105,95,110,95,55,49,0),String.fromCharCode(115,97,116,105,115,102,105,101,100,95,56,95,49,48,48,0)], [String.fromCharCode(97,114,99,116,105,99,95,119,95,55,0),String.fromCharCode(101,118,111,108,118,101,95,50,95,54,52,0)]]);
          let analyticsT = String.fromCharCode(103,95,50,55,95,114,115,97,122,0);
         select3 = boot2.size <= 2 || select3;
         tempnodataO.set(`${analyticsT}`, analyticsT.length);
       let catalog0 = true;
       let oranget = true;
      while (!oranget) {
          let downloadedG = 5;
          let buildJ = true;
          let libavdevicex: Array<any> = [305, 109];
         oranget = catalog0 && 79.77 < pressureS;
         downloadedG *= downloadedG | 3;
         buildJ = (63 == (libavdevicex.length << (Math.min(4, Math.abs((buildJ ? libavdevicex.length : 63))))));
         break;
      }
      for (let r = 0; r < 1; r++) {
          let iconU = String.fromCharCode(104,97,108,102,95,120,95,54,48,0);
         boot2 = new Map([[`${oranget}`, ((oranget ? 3 : 3))]]);
         iconU += "3";
      }
      if (whistleorange9.length > 2) {
         whistleorange9 += "3";
      }
      let pangle_ = 7244291 <= whistleorange9.length;
      do {
         whistleorange9 += `${iconsaveimageQ - 1}`;
         if (pangle_) {
            break;
         }
      } while (pangle_ && ((pressureS - 1.14) < 4.75));
      while ((1 * iconsaveimageQ) < 3 && 1 < iconsaveimageQ) {
         catalog0 = select3;
         break;
      }
       let iconschedule0: Map<any, any> = new Map([[String.fromCharCode(98,95,51,56,0),String.fromCharCode(99,114,101,97,116,101,95,99,95,57,56,0)], [String.fromCharCode(102,116,114,117,110,99,97,116,101,95,54,95,49,51,0),String.fromCharCode(113,95,51,54,95,97,118,102,105,108,116,101,114,0)]]);
       let private_db: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,102,111,99,117,115,105,110,103,95,102,95,48,0),String.fromCharCode(100,115,116,115,117,98,95,50,95,56,48,0)], [String.fromCharCode(108,105,110,101,97,114,95,56,95,56,54,0),String.fromCharCode(108,95,53,52,95,99,104,101,99,107,0)], [String.fromCharCode(112,97,105,110,116,105,110,103,95,108,95,55,55,0),String.fromCharCode(119,95,53,50,95,98,117,105,108,100,105,110,103,0)]]);
         pressureS += parseFloat(`${3}`);
      while (!oranget) {
         iconschedule0.set(`${pressureS}`, parseInt(`${pressureS}`) % 1);
         break;
      }
          let modelsm = 2.0;
          let firebaseJ: Map<any, any> = new Map([[String.fromCharCode(109,98,101,100,103,101,95,97,95,57,55,0),990], [String.fromCharCode(100,105,103,101,115,116,95,99,95,56,0),954], [String.fromCharCode(115,116,114,103,108,111,98,95,55,95,57,0),291]]);
          let nodeo = 3.0;
         boot2.set(`${catalog0}`, whistleorange9.length);
         modelsm *= parseFloat(`${parseInt(`${nodeo}`)}`);
         firebaseJ = new Map([[`${firebaseJ.size}`, parseInt(`${nodeo}`) | 2]]);
      while (boot2.get(`${pressureS}`) != null) {
         boot2.set(`${catalog0}`, ((oranget ? 1 : 1)));
         break;
      }
       let combinee = String.fromCharCode(114,95,56,48,95,114,101,116,114,105,101,118,105,110,103,0);
      if (select3) {
          let setting0: Map<any, any> = new Map([[String.fromCharCode(107,95,54,49,95,114,101,99,116,105,102,121,0),426], [String.fromCharCode(114,95,56,48,95,105,110,99,114,109,101,114,103,101,0),585]]);
         whistleorange9 += `${(2 - (select3 ? 5 : 2))}`;
         setting0.set(`${setting0.size}`, 3);
      }
          let bodane = 2.0;
          let libapminsightbe = String.fromCharCode(99,95,49,56,95,114,101,99,116,97,110,103,108,101,0);
          let prediction2 = 2;
         iconschedule0 = new Map([[`${oranget}`, (2 + (catalog0 ? 3 : 5))]]);
         bodane -= 3;
         libapminsightbe += `${(String.fromCharCode(72,0) == libapminsightbe ? parseInt(`${bodane}`) : libapminsightbe.length)}`;
         prediction2 &= 1;
      tickr.push(2 - tickr.length);
      if (securityZ) {
         break;
      }
   } while (((tickr.length & 4) == 2) && securityZ);
   let yellowcirclebgh = mbsplash2 <= 9130145.0;
   do {
      mbsplash2 += parseInt(`${mbsplash2}`);
      if (yellowcirclebgh) {
         break;
      }
   } while ((1.37 < mbsplash2) && yellowcirclebgh);
   let bingk = 9258787.0 >= changeU;
   do {
       let modity_: Map<any, any> = new Map([[String.fromCharCode(104,95,50,50,95,111,112,116,105,109,105,115,109,0),341], [String.fromCharCode(101,95,52,95,101,110,99,111,100,101,114,0),609]]);
       let moreA = 1;
       let backx = String.fromCharCode(115,95,49,49,95,102,105,108,116,101,114,103,114,97,112,104,0);
       let icondefaultthumbnailS: Map<any, any> = new Map([[String.fromCharCode(116,109,112,108,95,108,95,57,0),777], [String.fromCharCode(103,95,56,49,95,110,101,115,116,0),710], [String.fromCharCode(118,111,114,100,105,112,108,111,109,95,48,95,57,56,0),924]]);
          let iconwechat6 = 0.0;
          let storeo = String.fromCharCode(117,95,57,52,95,100,101,99,105,100,101,0);
         backx = `${(String.fromCharCode(66,0) == backx ? backx.length : moreA)}`;
         iconwechat6 *= parseFloat(`${storeo.length + parseInt(`${iconwechat6}`)}`);
         storeo = `${storeo.length ^ 3}`;
         modity_.set(`${moreA}`, 2 >> (Math.min(2, Math.abs(moreA))));
         backx = `${icondefaultthumbnailS.size}`;
       let memberd = String.fromCharCode(105,110,100,101,111,100,97,116,97,95,106,95,52,57,0);
       let emptyx = String.fromCharCode(117,110,105,113,117,101,100,95,104,95,52,55,0);
      for (let z = 0; z < 3; z++) {
         backx = `${(emptyx == String.fromCharCode(117,0) ? emptyx.length : icondefaultthumbnailS.size)}`;
      }
         emptyx = `${icondefaultthumbnailS.size + moreA}`;
      while ((moreA % (Math.max(emptyx.length, 1))) == 3) {
          let videovarW = String.fromCharCode(105,95,54,55,95,115,112,101,99,115,0);
          let emojiheartb = false;
          let football3 = String.fromCharCode(114,101,102,101,114,101,110,101,95,51,95,57,52,0);
          let vignette_: Array<any> = [527, 694, 153];
         moreA ^= ((emojiheartb ? 2 : 2));
         videovarW = `${vignette_.length >> (Math.min(football3.length, 5))}`;
         emojiheartb = 77 < videovarW.length || String.fromCharCode(115,0) == football3;
         vignette_ = [football3.length];
         break;
      }
       let blacklistn = 3;
         icondefaultthumbnailS.set(backx, backx.length - icondefaultthumbnailS.size);
       let giftc = 5.0;
      for (let o = 0; o < 2; o++) {
         moreA <<= Math.min(Math.abs(2), 3);
      }
      if (1 >= (modity_.size | backx.length)) {
         modity_ = new Map([[emptyx, 2 * emptyx.length]]);
      }
      changeU -= hometeamfield8.size << (Math.min(Math.abs(2), 1));
      if (bingk) {
         break;
      }
   } while (((headerw.length * parseInt(`${changeU}`)) < 2 && 4.13 < (1.82 * changeU)) && bingk);
   let carouselo = 9852813 >= headerw.length;
   do {
      headerw = `${tickr.length}`;
      if (carouselo) {
         break;
      }
   } while (((headerw.length ^ 4) > 2 || 3.8 > (xvod_ / (Math.max(headerw.length, 8)))) && carouselo);
   while (2 == (tickr.length / (Math.max(10, parseInt(`${xvod_}`))))) {
      xvod_ -= parseInt(`${xvod_}`) ^ 1;
      break;
   }
   let trophyl = 6991950 >= smallbrightnessO.length;
   do {
       let listO = 5.0;
       let middlen = 0;
       let shielddonej = String.fromCharCode(108,105,98,120,118,105,100,95,111,95,52,54,0);
      for (let x = 0; x < 2; x++) {
         middlen <<= Math.min(1, Math.abs((String.fromCharCode(107,0) == shielddonej ? middlen : shielddonej.length)));
      }
          let crownB = 0.0;
          let flipper3 = false;
         listO /= Math.max((parseFloat(`${(flipper3 ? 3 : 4) % (Math.max(6, parseInt(`${crownB}`)))}`)), 4);
      while (5.22 > (middlen / (Math.max(10, listO)))) {
         listO *= parseFloat(`${3}`);
         break;
      }
      while ((listO * parseFloat(`${middlen}`)) < 3.17 && 1 < (2 + middlen)) {
         listO *= parseFloat(`${middlen}`);
         break;
      }
      while (shielddonej.startsWith(`${listO}`)) {
         shielddonej = `${parseInt(`${listO}`) / 1}`;
         break;
      }
      if (3 == shielddonej.length) {
         shielddonej = `${shielddonej.length}`;
      }
       let scorepopsounds = String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,95,109,95,50,49,0);
      while ((listO / (Math.max(parseFloat(`${shielddonej.length}`), 4))) >= 1.35 && 1.35 >= (parseFloat(`${shielddonej.length}`) / (Math.max(8, listO)))) {
          let detailsA = true;
          let sliderc: Map<any, any> = new Map([[String.fromCharCode(102,105,118,101,95,48,95,51,0),192], [String.fromCharCode(113,95,52,95,114,101,106,111,105,110,0),280], [String.fromCharCode(109,101,110,116,105,111,110,115,95,51,95,55,57,0),570]]);
          let carouselc = true;
          let release_q2b = String.fromCharCode(119,95,53,54,95,118,98,114,105,0);
          let penaltymatchicona = 0;
         listO += (parseFloat(`${String.fromCharCode(116,0) == release_q2b ? parseInt(`${listO}`) : release_q2b.length}`));
         detailsA = penaltymatchicona > 72;
         sliderc = new Map([[`${sliderc.size}`, 2 % (Math.max(3, sliderc.size))]]);
         carouselc = 100 > sliderc.size;
         penaltymatchicona ^= sliderc.size / 3;
         break;
      }
       let notificationY = String.fromCharCode(102,97,115,116,102,105,114,115,116,112,97,115,115,95,115,95,49,53,0);
      smallbrightnessO = "1";
      if (trophyl) {
         break;
      }
   } while (trophyl && (2.20 <= (smallbrightnessO.length - mbsplash2) || 5 <= (smallbrightnessO.length - 4)));
      headerw += `${hometeamfield8.size}`;
      hometeamfield8 = new Map([[`${changeU}`, parseInt(`${forwardk}`)]]);
       let active0 = String.fromCharCode(107,95,49,50,95,97,99,107,115,0);
       let sendW: Array<any> = [String.fromCharCode(121,95,53,55,95,121,118,116,111,121,117,121,0), String.fromCharCode(97,95,56,52,95,104,117,101,115,0)];
      while (!active0.includes(`${sendW.length}`)) {
          let basketballiconU = 3.0;
          let dragM = String.fromCharCode(108,97,117,110,99,104,101,100,95,97,95,56,57,0);
          let goalu = String.fromCharCode(97,115,115,101,116,115,95,107,95,53,56,0);
         sendW = [sendW.length % (Math.max(1, 1))];
         basketballiconU += parseFloat(`${goalu.length}`);
         dragM = "3";
         goalu += `${parseInt(`${basketballiconU}`) | 3}`;
         break;
      }
          let commentw = true;
         sendW = [sendW.length / 1];
         commentw = !commentw;
         active0 = `${2 - sendW.length}`;
          let mimos = String.fromCharCode(100,105,114,112,95,54,95,50,0);
          let modei = String.fromCharCode(119,95,57,55,95,115,121,110,116,97,120,0);
          let tumbnailR: Map<any, any> = new Map([[String.fromCharCode(106,95,52,51,95,104,114,97,109,0),895], [String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,115,95,56,55,0),4]]);
         active0 += `${sendW.length & modei.length}`;
         mimos = `${tumbnailR.size % 3}`;
         modei = `${(mimos == String.fromCharCode(104,0) ? tumbnailR.size : mimos.length)}`;
          let groupo = String.fromCharCode(120,95,51,56,95,115,116,97,114,116,99,111,100,101,0);
         active0 = `${active0.length}`;
         groupo += `${(groupo == String.fromCharCode(74,0) ? groupo.length : groupo.length)}`;
      while ((sendW.length * active0.length) > 5 || 3 > (active0.length * 5)) {
         active0 = `${active0.length}`;
         break;
      }
      xvod_ += sendW.length;
   for (let c = 0; c < 2; c++) {
      forwardk += parseFloat(`${smallbrightnessO.length >> (Math.min(headerw.length, 3))}`);
   }
      mbsplash2 -= tickr.length;
      headerw = `${(headerw == String.fromCharCode(114,0) ? hometeamfield8.size : headerw.length)}`;
       let sliderW = 1.0;
         sliderW += parseFloat(`${1}`);
      for (let d = 0; d < 3; d++) {
          let windI = 0.0;
          let t_hashi: Array<any> = [611, 65];
          let ballI = String.fromCharCode(110,99,111,109,105,110,103,95,48,95,54,52,0);
          let eventl = String.fromCharCode(114,101,98,97,115,101,95,116,95,57,55,0);
          let actionc = true;
         sliderW *= (parseFloat(`${parseInt(`${sliderW}`) << (Math.min(4, Math.abs((actionc ? 1 : 1))))}`));
         windI -= ballI.length;
         t_hashi = [parseInt(`${windI}`)];
         ballI += `${eventl.length}`;
         eventl = `${parseInt(`${windI}`) & 1}`;
         actionc = 77 == eventl.length && t_hashi.length == 77;
      }
         sliderW += parseFloat(`${parseInt(`${sliderW}`) / (Math.max(parseInt(`${sliderW}`), 1))}`);
      forwardk += parseFloat(`${tickr.length - 1}`);

    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const renderItem = useCallback(({ item, index }: { item: mayi_CurrentFootball, index: number }) => {
    return (
      <View style={styles.downloadItem}>
        {isEditing && (
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => toggleHistory(item.vod)}>
            {removeHistory.some(x => x.vod_id === item.vod.vod_id) ? (
              <CheckBoxSelected height={icons.sizes.m} width={icons.sizes.m} color={IS_OTHER_SKIN ? colors.success : colors.primary} fill={'white'} />
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
       let nextz = String.fromCharCode(100,99,109,112,95,115,95,49,55,0);
    let g_managert = 1.0;
    let yellowscoreballQ = String.fromCharCode(112,95,54,95,116,104,117,110,107,0);
    let libavdeviceE = String.fromCharCode(118,95,53,52,95,117,110,122,105,112,0);
    let networkf = 4.0;
    let configR = String.fromCharCode(97,95,49,56,95,98,97,99,107,100,114,111,112,0);
    let awayteamfielde = String.fromCharCode(111,95,52,95,111,109,112,108,105,99,97,116,105,111,110,0);
    let audienceK = String.fromCharCode(100,117,114,98,95,116,95,53,51,0);
    let long_dzn: Array<any> = [518, 642];
    let iconnotificationnewP = 1;
    let overA: Array<any> = [String.fromCharCode(97,95,55,53,95,99,111,108,108,101,99,116,105,98,108,101,0), String.fromCharCode(107,95,55,52,95,99,108,111,110,101,0), String.fromCharCode(98,97,116,99,104,101,115,95,97,95,52,57,0)];
    let ewardedB = String.fromCharCode(107,95,50,56,95,105,110,116,102,105,0);
      libavdeviceE += `${2 * parseInt(`${networkf}`)}`;
   if (2.6 == g_managert) {
       let ewardedD = String.fromCharCode(109,97,108,101,95,119,95,55,52,0);
      while (ewardedD != String.fromCharCode(111,0)) {
         ewardedD += `${(ewardedD == String.fromCharCode(99,0) ? ewardedD.length : ewardedD.length)}`;
         break;
      }
         ewardedD = `${ewardedD.length | 1}`;
         ewardedD += `${(ewardedD == String.fromCharCode(87,0) ? ewardedD.length : ewardedD.length)}`;
      g_managert /= Math.max(5, 2 * nextz.length);
   }
      long_dzn.push((String.fromCharCode(49,0) == awayteamfielde ? iconnotificationnewP : awayteamfielde.length));
   while (1.12 == networkf) {
      awayteamfielde = `${nextz.length % 1}`;
      break;
   }
   while ((awayteamfielde.length + g_managert) > 5.13 && (awayteamfielde.length << (Math.min(Math.abs(1), 1))) > 1) {
      g_managert *= 1;
      break;
   }
   if (5.33 > (networkf * parseFloat(`${libavdeviceE.length}`)) || (libavdeviceE.length * 2) > 2) {
      networkf -= parseFloat(`${long_dzn.length & awayteamfielde.length}`);
   }
       let mbsplashG = String.fromCharCode(121,95,56,51,95,98,97,115,105,99,115,0);
      while (mbsplashG != String.fromCharCode(52,0)) {
          let activem = true;
          let modulesJ: Array<any> = [208, 413];
          let tickX: Map<any, any> = new Map([[String.fromCharCode(118,95,50,50,95,101,118,97,115,97,112,112,0),true ], [String.fromCharCode(104,95,54,52,95,114,101,100,101,108,105,118,101,114,121,0),false ], [String.fromCharCode(109,95,52,55,95,114,101,112,101,97,116,0),true ]]);
         mbsplashG = `${((activem ? 5 : 5) / (Math.max(modulesJ.length, 4)))}`;
         activem = (tickX.size + tickX.size) < 46;
         modulesJ.push(tickX.size);
         break;
      }
         mbsplashG += "3";
      for (let p = 0; p < 3; p++) {
         mbsplashG += `${1 / (Math.max(4, mbsplashG.length))}`;
      }
      yellowscoreballQ = `${mbsplashG.length - yellowscoreballQ.length}`;
   if (yellowscoreballQ.endsWith(libavdeviceE)) {
       let weatherI: Array<any> = [String.fromCharCode(103,95,57,52,95,100,101,99,108,105,110,101,0), String.fromCharCode(104,95,56,55,95,102,102,109,97,108,0)];
      let type_gwe = weatherI.length <= 5171692;
      do {
         weatherI.push(weatherI.length);
         if (type_gwe) {
            break;
         }
      } while ((2 == weatherI.length) && type_gwe);
         weatherI = [weatherI.length];
       let libswresampled: Map<any, any> = new Map([[String.fromCharCode(108,95,57,50,95,99,114,101,97,116,101,0),String.fromCharCode(98,114,105,100,103,101,97,98,108,101,95,50,95,53,56,0)], [String.fromCharCode(99,111,110,99,117,114,101,110,116,95,122,95,53,49,0),String.fromCharCode(108,95,56,57,95,108,97,121,101,114,115,0)], [String.fromCharCode(115,101,114,118,105,99,101,115,95,105,95,49,57,0),String.fromCharCode(122,111,111,109,97,98,108,101,95,117,95,55,50,0)]]);
       let airbnbstarX: Map<any, any> = new Map([[String.fromCharCode(107,95,51,50,95,97,110,105,109,97,116,111,114,0),96], [String.fromCharCode(99,111,101,102,102,95,97,95,57,48,0),143], [String.fromCharCode(101,120,112,111,114,116,101,100,95,108,95,52,48,0),667]]);
      yellowscoreballQ += `${weatherI.length % (Math.max(1, 9))}`;
   }
   let release_zns = 5495470 >= long_dzn.length;
   do {
       let unreadS = String.fromCharCode(120,95,51,95,101,115,99,97,112,105,110,103,0);
       let homeactivef: Map<any, any> = new Map([[String.fromCharCode(110,111,100,101,115,95,121,95,56,49,0),String.fromCharCode(105,95,53,57,95,109,111,110,116,103,111,109,101,114,121,0)], [String.fromCharCode(122,95,49,56,95,100,101,105,110,116,101,114,108,97,99,101,0),String.fromCharCode(99,111,108,115,107,105,112,95,98,95,53,52,0)]]);
       let recommendationf = 1.0;
       let stepb = String.fromCharCode(103,95,54,50,95,117,110,114,101,115,111,108,118,101,100,0);
       let launch1 = String.fromCharCode(101,108,108,105,103,105,98,108,101,95,98,95,49,48,0);
      for (let z = 0; z < 1; z++) {
         stepb += "2";
      }
          let constantsz = String.fromCharCode(120,95,49,57,95,98,97,110,100,105,110,103,0);
          let type__0w: Array<any> = [596, 159, 725];
         homeactivef.set(`${recommendationf}`, 2);
         constantsz = "2";
         type__0w.push(type__0w.length * 1);
         recommendationf *= launch1.length % (Math.max(3, 6));
      for (let a = 0; a < 3; a++) {
         homeactivef.set(unreadS, 2);
      }
      if (2 == (3 << (Math.min(3, launch1.length))) && 5.71 == (recommendationf / (Math.max(1.26, 8)))) {
         launch1 = `${homeactivef.size * parseInt(`${recommendationf}`)}`;
      }
      if (1 == (3 % (Math.max(10, homeactivef.size))) || (3 % (Math.max(10, homeactivef.size))) == 2) {
         unreadS = `${(stepb == String.fromCharCode(66,0) ? homeactivef.size : stepb.length)}`;
      }
      while ((2.67 + recommendationf) <= 3.60) {
          let episodesr = false;
         recommendationf += parseInt(`${recommendationf}`);
         episodesr = (episodesr ? !episodesr : !episodesr);
         break;
      }
          let halfS: Map<any, any> = new Map([[String.fromCharCode(115,119,105,102,116,99,95,55,95,53,49,0),243], [String.fromCharCode(114,95,55,51,95,110,117,109,101,114,111,0),284]]);
          let shrinkO = 5.0;
         recommendationf *= (String.fromCharCode(108,0) == stepb ? stepb.length : launch1.length);
         halfS.set(`${shrinkO}`, halfS.size);
         shrinkO *= parseInt(`${shrinkO}`);
          let telegram2 = 3.0;
          let roundM = String.fromCharCode(112,95,55,57,95,99,104,111,109,112,0);
         stepb = `${parseInt(`${telegram2}`)}`;
         telegram2 *= parseFloat(`${1}`);
         roundM = `${roundM.length >> (Math.min(Math.abs(3), 5))}`;
      for (let x = 0; x < 3; x++) {
         unreadS += "1";
      }
          let greyticka = String.fromCharCode(102,105,110,100,97,115,115,111,99,105,97,116,105,111,110,95,48,95,55,54,0);
          let a_playerg = true;
         stepb += `${stepb.length / (Math.max(7, unreadS.length))}`;
         greyticka += `${((a_playerg ? 5 : 4))}`;
         a_playerg = (46 >= ((a_playerg ? greyticka.length : 46) * greyticka.length));
       let emojihearto = true;
      if (unreadS.length <= stepb.length) {
         stepb += "1";
      }
      while (3 <= launch1.length) {
         launch1 = `${stepb.length}`;
         break;
      }
      for (let l = 0; l < 1; l++) {
          let policy1 = 2.0;
          let action5 = 5;
          let libhermes8: Map<any, any> = new Map([[String.fromCharCode(97,95,52,52,95,102,111,114,105,0),95], [String.fromCharCode(114,101,99,111,103,110,105,122,101,95,57,95,53,0),677], [String.fromCharCode(110,95,55,95,110,98,112,112,0),117]]);
         stepb += `${(stepb == String.fromCharCode(67,0) ? stepb.length : libhermes8.size)}`;
         policy1 -= action5 + 3;
         action5 >>= Math.min(4, Math.abs(3 / (Math.max(parseInt(`${policy1}`), 6))));
         libhermes8.set(`${policy1}`, parseInt(`${policy1}`) | action5);
      }
      long_dzn.push(awayteamfielde.length);
      if (release_zns) {
         break;
      }
   } while (release_zns && (4 == (audienceK.length << (Math.min(5, long_dzn.length)))));
      configR = `${awayteamfielde.length}`;
       let combinet = 2.0;
      let iconwechatf = combinet <= 5257478.0;
      do {
         combinet -= parseFloat(`${parseInt(`${combinet}`)}`);
         if (iconwechatf) {
            break;
         }
      } while (((combinet - combinet) <= 5.4) && iconwechatf);
          let manifestb = 2;
         combinet -= parseFloat(`${1 * manifestb}`);
      for (let h = 0; h < 2; h++) {
         combinet += parseFloat(`${2 - parseInt(`${combinet}`)}`);
      }
      g_managert /= Math.max(2, 3 / (Math.max(1, overA.length)));
   for (let x = 0; x < 1; x++) {
       let basketballtrophyf: Map<any, any> = new Map([[String.fromCharCode(118,97,105,108,97,98,105,108,105,116,121,95,104,95,52,50,0),true ], [String.fromCharCode(122,95,57,50,95,103,101,111,116,97,103,115,0),true ], [String.fromCharCode(113,95,50,49,95,116,102,114,97,0),true ]]);
       let valuesH: Map<any, any> = new Map([[String.fromCharCode(113,95,49,55,95,109,97,99,101,0),622], [String.fromCharCode(118,95,57,51,95,101,114,97,115,105,110,103,0),468], [String.fromCharCode(101,95,49,51,95,114,97,116,101,0),884]]);
      let nend8 = valuesH.size >= 6560334;
      do {
         valuesH.set(`${valuesH.size}`, 3 & basketballtrophyf.size);
         if (nend8) {
            break;
         }
      } while ((valuesH.get(`${basketballtrophyf.size}`) == null) && nend8);
         valuesH.set(`${valuesH.size}`, basketballtrophyf.size);
      while (Array.from(valuesH.values()).includes(basketballtrophyf.size)) {
         valuesH = new Map([[`${valuesH.size}`, valuesH.size]]);
         break;
      }
      if (5 == (valuesH.size - 1) || (1 - basketballtrophyf.size) == 4) {
          let yellowE = 0.0;
          let iconcloseu = String.fromCharCode(120,95,55,55,95,117,105,110,116,0);
          let episode6 = 4;
         valuesH.set(`${iconcloseu}`, valuesH.size);
         yellowE *= 1;
         iconcloseu = `${episode6}`;
         episode6 &= parseInt(`${yellowE}`);
      }
         basketballtrophyf.set(`${basketballtrophyf.size}`, 3 | valuesH.size);
          let merger1 = false;
          let libreanimatedK = String.fromCharCode(100,101,108,97,121,95,117,95,54,57,0);
          let rewardvideoD = 5.0;
         valuesH = new Map([[`${merger1}`, ((merger1 ? 4 : 3))]]);
         libreanimatedK += "3";
         rewardvideoD /= Math.max(2, (libreanimatedK == String.fromCharCode(83,0) ? parseInt(`${rewardvideoD}`) : libreanimatedK.length));
      awayteamfielde = `${configR.length - parseInt(`${networkf}`)}`;
   }
      networkf += parseFloat(`${nextz.length ^ yellowscoreballQ.length}`);
   let plashj = 7749975.0 <= g_managert;
   do {
       let club7 = String.fromCharCode(116,104,114,111,117,103,104,112,117,116,95,117,95,55,55,0);
      if (club7.length > club7.length) {
         club7 = `${3 ^ club7.length}`;
      }
          let window_i8 = String.fromCharCode(120,95,54,49,95,115,116,97,114,114,101,100,0);
          let play6 = String.fromCharCode(117,95,52,95,114,101,116,97,105,110,101,100,0);
          let materialA: Array<any> = [952, 969, 271];
         club7 = `${(String.fromCharCode(69,0) == play6 ? materialA.length : play6.length)}`;
         window_i8 += `${window_i8.length - window_i8.length}`;
      let whatsappt = String.fromCharCode(117,52,98,122,98,120,0) == club7;
      do {
         club7 = `${club7.length | 3}`;
         if (whatsappt) {
            break;
         }
      } while ((club7.length == 2) && whatsappt);
      g_managert -= overA.length + configR.length;
      if (plashj) {
         break;
      }
   } while (plashj && (!long_dzn.includes(g_managert)));
       let animations0 = false;
         animations0 = (animations0 ? animations0 : !animations0);
          let libfbjniJ: Map<any, any> = new Map([[String.fromCharCode(116,95,56,55,95,121,99,111,99,103,114,103,98,97,0),688], [String.fromCharCode(118,101,114,116,105,99,97,108,95,52,95,51,56,0),54], [String.fromCharCode(100,107,101,121,95,99,95,56,49,0),343]]);
          let classese: Array<any> = [34, 632, 868];
          let attributedstringn = String.fromCharCode(104,95,52,52,95,115,111,108,105,115,116,101,110,0);
         animations0 = !animations0;
         libfbjniJ = new Map([[`${classese.length}`, (attributedstringn == String.fromCharCode(108,0) ? attributedstringn.length : classese.length)]]);
         animations0 = !animations0;
      nextz += `${parseInt(`${networkf}`) & iconnotificationnewP}`;
       let overlayH: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,101,95,102,95,50,0),629], [String.fromCharCode(122,95,54,95,122,111,111,109,97,98,108,101,0),528], [String.fromCharCode(114,97,114,105,116,121,95,48,95,53,49,0),779]]);
       let controln: Array<any> = [290, 890, 851];
       let analyticf: Map<any, any> = new Map([[String.fromCharCode(112,114,111,106,101,99,116,101,100,95,51,95,53,0),700], [String.fromCharCode(99,95,55,48,95,112,97,121,108,111,97,100,0),101]]);
          let promotiono: Array<any> = [938, 244];
         analyticf.set(`${promotiono.length}`, 3);
      if (analyticf.get(`${controln.length}`) != null) {
         analyticf.set(`${overlayH.size}`, overlayH.size - analyticf.size);
      }
         analyticf.set(`${controln.length}`, controln.length);
      if (Array.from(overlayH.values()).includes(controln.length)) {
         overlayH = new Map([[`${overlayH.size}`, controln.length >> (Math.min(Math.abs(2), 2))]]);
      }
      while (5 < (2 << (Math.min(4, controln.length))) && (controln.length << (Math.min(Math.abs(2), 2))) < 4) {
          let yellowtored6 = false;
         controln.push(controln.length % 2);
         yellowtored6 = yellowtored6 && yellowtored6;
         break;
      }
      let filey = overlayH.size <= 6313883;
      do {
         overlayH.set(`${overlayH.size}`, analyticf.size >> (Math.min(4, Math.abs(overlayH.size))));
         if (filey) {
            break;
         }
      } while (filey && (5 == analyticf.size));
      for (let t = 0; t < 1; t++) {
         controln = [controln.length];
      }
         analyticf = new Map([[`${overlayH.size}`, analyticf.size]]);
         controln.push(1);
      iconnotificationnewP -= overlayH.size ^ analyticf.size;
      audienceK = `${(String.fromCharCode(99,0) == audienceK ? overA.length : audienceK.length)}`;
   if (5 <= (yellowscoreballQ.length - long_dzn.length) && 2 <= (5 - long_dzn.length)) {
       let homeinactive6 = 4.0;
       let changeq = true;
       let window_u5J = String.fromCharCode(106,95,55,48,95,117,110,105,109,112,111,114,116,97,110,116,0);
       let arrowrightwithtailU = String.fromCharCode(97,114,109,111,110,121,95,117,95,57,52,0);
      let component1 = window_u5J == String.fromCharCode(52,100,103,102,112,110,57,110,119,55,0);
      do {
         window_u5J = `${2 << (Math.min(4, arrowrightwithtailU.length))}`;
         if (component1) {
            break;
         }
      } while ((!changeq && 1 < window_u5J.length) && component1);
         homeinactive6 *= parseFloat(`${window_u5J.length}`);
       let frame_vyf: Array<any> = [124, 215];
         arrowrightwithtailU = "3";
      for (let m = 0; m < 2; m++) {
         changeq = String.fromCharCode(51,0) == arrowrightwithtailU;
      }
      if (arrowrightwithtailU.length < 4) {
         arrowrightwithtailU = `${frame_vyf.length << (Math.min(window_u5J.length, 2))}`;
      }
      for (let u = 0; u < 3; u++) {
         changeq = (frame_vyf.length * window_u5J.length) <= 38;
      }
      let statsH = changeq ? !changeq : changeq;
      do {
          let chinasameb = String.fromCharCode(100,111,119,110,115,97,109,112,108,101,100,95,49,95,51,50,0);
          let hongkongR = 3.0;
          let cedbadcebfbfbfbcfecbcg: Map<any, any> = new Map([[String.fromCharCode(109,95,48,95,98,108,111,99,107,115,105,122,101,0),String.fromCharCode(102,111,110,116,99,111,110,102,105,103,95,113,95,49,55,0)], [String.fromCharCode(99,111,110,102,105,103,117,114,97,116,111,114,95,112,95,49,50,0),String.fromCharCode(101,95,52,54,95,114,101,103,105,115,116,101,114,0)]]);
         changeq = 3.93 < homeinactive6;
         chinasameb += `${chinasameb.length}`;
         hongkongR /= Math.max(cedbadcebfbfbfbcfecbcg.size, 2);
         cedbadcebfbfbfbcfecbcg.set(`${hongkongR}`, cedbadcebfbfbfbcfecbcg.size << (Math.min(Math.abs(2), 2)));
         if (statsH) {
            break;
         }
      } while (statsH && (!changeq || (homeinactive6 - 2.66) <= 5.49));
      yellowscoreballQ += `${nextz.length}`;
   }
      long_dzn = [(audienceK == String.fromCharCode(119,0) ? nextz.length : audienceK.length)];
   let pressureC = 8148272 <= configR.length;
   do {
      configR = `${(nextz == String.fromCharCode(50,0) ? nextz.length : iconnotificationnewP)}`;
      if (pressureC) {
         break;
      }
   } while (pressureC && (configR.length < nextz.length));
      networkf -= parseFloat(`${audienceK.length % (Math.max(3, yellowscoreballQ.length))}`);
   if (awayteamfielde.length == audienceK.length) {
       let long_hcY = 5.0;
       let chatm = String.fromCharCode(105,116,101,109,95,102,95,49,48,48,0);
       let pausem = 5.0;
       let inouttargetredM = String.fromCharCode(99,95,52,55,95,105,110,99,114,101,109,101,110,116,97,108,0);
       let predictionbuttons: Array<any> = [499, 277];
          let megaphoneS = String.fromCharCode(110,111,114,109,97,108,95,122,95,50,56,0);
          let checkbox2 = 5;
         long_hcY += predictionbuttons.length + 1;
         megaphoneS = "2";
         checkbox2 /= Math.max(checkbox2 * megaphoneS.length, 3);
       let station_ = String.fromCharCode(115,101,101,107,104,101,97,100,95,52,95,51,0);
       let slideru = String.fromCharCode(119,112,116,104,114,101,97,100,115,95,114,95,56,0);
         pausem -= 3 - station_.length;
         station_ += "3";
      while ((slideru.length << (Math.min(3, predictionbuttons.length))) < 4 || 4 < (predictionbuttons.length << (Math.min(slideru.length, 4)))) {
         slideru = `${inouttargetredM.length ^ 2}`;
         break;
      }
      for (let e = 0; e < 3; e++) {
         station_ += `${2 ^ parseInt(`${pausem}`)}`;
      }
      let theme3 = 5703483 >= predictionbuttons.length;
      do {
         predictionbuttons = [inouttargetredM.length];
         if (theme3) {
            break;
         }
      } while (theme3 && (5 < (predictionbuttons.length + 4)));
          let libavutilx = String.fromCharCode(105,95,54,55,95,102,99,116,108,0);
          let relatedn = 4.0;
         pausem /= Math.max(4, 3 & inouttargetredM.length);
         libavutilx += `${(libavutilx == String.fromCharCode(69,0) ? libavutilx.length : parseInt(`${relatedn}`))}`;
         relatedn *= parseInt(`${relatedn}`);
          let icondefaultthumbnail7: Array<any> = [926, 972, 413];
          let hooksZ = String.fromCharCode(97,95,52,53,95,114,101,99,111,109,112,117,116,101,0);
         long_hcY /= Math.max(3, inouttargetredM.length * parseInt(`${pausem}`));
         icondefaultthumbnail7.push(2 & hooksZ.length);
         hooksZ += "2";
       let greenW = 0.0;
      let downloadeda = station_ == String.fromCharCode(52,103,97,53,56,52,54,112,106,0);
      do {
          let iconsharee = String.fromCharCode(104,97,100,97,109,97,114,100,95,98,95,55,56,0);
          let iconarrowrightwhiteS = 1.0;
          let chinaf = String.fromCharCode(99,111,109,112,97,99,116,95,105,95,54,49,0);
         station_ = `${chinaf.length}`;
         iconsharee += `${iconsharee.length / 1}`;
         iconarrowrightwhiteS *= (parseFloat(`${String.fromCharCode(109,0) == iconsharee ? iconsharee.length : parseInt(`${iconarrowrightwhiteS}`)}`));
         chinaf = `${parseInt(`${iconarrowrightwhiteS}`) * 2}`;
         if (downloadeda) {
            break;
         }
      } while (downloadeda && (!station_.startsWith(`${inouttargetredM.length}`)));
      for (let b = 0; b < 1; b++) {
         predictionbuttons.push((chatm == String.fromCharCode(95,0) ? slideru.length : chatm.length));
      }
          let dnewarchdefaultsc = String.fromCharCode(98,111,100,105,101,115,95,53,95,57,48,0);
         greenW -= slideru.length;
         dnewarchdefaultsc = `${dnewarchdefaultsc.length}`;
      let emojiW = 9181676 <= chatm.length;
      do {
         chatm += `${parseInt(`${long_hcY}`)}`;
         if (emojiW) {
            break;
         }
      } while ((chatm.length > 4) && emojiW);
       let roundy = 2.0;
      awayteamfielde = `${parseInt(`${g_managert}`)}`;
   }
   for (let w = 0; w < 2; w++) {
      libavdeviceE += `${3 * configR.length}`;
   }
       let whiteq = String.fromCharCode(101,95,53,55,95,102,117,110,99,0);
      let type_hwR = 8185564 <= whiteq.length;
      do {
          let rootq = true;
          let launchZ = String.fromCharCode(112,114,102,95,104,95,53,0);
          let libreacts = 1.0;
          let agreementT: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,117,115,115,105,111,110,95,103,95,52,56,0),141], [String.fromCharCode(114,101,103,105,115,116,101,114,95,52,95,51,57,0),272]]);
          let settingsP = String.fromCharCode(105,111,101,114,114,95,108,95,55,53,0);
         whiteq += `${((rootq ? 5 : 4))}`;
         rootq = agreementT.size <= 40 && settingsP.length <= 40;
         launchZ += `${agreementT.size % (Math.max(7, parseInt(`${libreacts}`)))}`;
         libreacts += parseFloat(`${2 >> (Math.min(2, Math.abs(agreementT.size)))}`);
         settingsP = "2";
         if (type_hwR) {
            break;
         }
      } while ((whiteq.length < whiteq.length) && type_hwR);
       let awayteamfield4 = String.fromCharCode(97,117,116,111,102,105,120,95,112,95,53,53,0);
         whiteq = `${whiteq.length}`;
      networkf -= parseFloat(`${2}`);
      audienceK += "3";
   for (let x = 0; x < 1; x++) {
      audienceK = `${(awayteamfielde == String.fromCharCode(113,0) ? awayteamfielde.length : libavdeviceE.length)}`;
   }
   let typesf = String.fromCharCode(53,111,99,115,109,97,101,108,105,107,0) == libavdeviceE;
   do {
       let yingd = false;
          let e_titleZ = String.fromCharCode(120,95,54,49,95,98,97,99,107,112,116,114,0);
          let guideU: Map<any, any> = new Map([[String.fromCharCode(102,105,112,115,95,119,95,53,48,0),false ], [String.fromCharCode(108,95,51,55,95,102,117,122,122,105,110,103,0),true ]]);
          let eighteeno = 0.0;
         yingd = !yingd;
         e_titleZ = `${3 + guideU.size}`;
         guideU = new Map([[`${guideU.size}`, guideU.size / (Math.max(3, 3))]]);
         eighteeno += 1;
      for (let s = 0; s < 2; s++) {
         yingd = (yingd ? !yingd : yingd);
      }
         yingd = (yingd ? yingd : !yingd);
      libavdeviceE += `${awayteamfielde.length}`;
      if (typesf) {
         break;
      }
   } while ((audienceK != libavdeviceE) && typesf);

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
                        removeHistory.length === 0 ? colors.muted : colors.background,
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