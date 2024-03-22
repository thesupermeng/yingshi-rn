import React, { memo, useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import styles from "./mayi_iconarrowrightwhite";
import { TouchableOpacity } from "react-native";
import { formatMatchDate } from "../../utility/utils";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import { mayi_Default } from "../../types/mayi_homeinactive";
import { Url } from "../../middleware/mayi_countdown_videovar";
import { useInfiniteQuery } from "@tanstack/react-query";
import mayi_Analytics from "../../middleware/mayi_plash_basketballtrophy";
import MatchScheduleVip from "./mayi_sheet";
import FastImage from "../../../components/common/mayi_slider";
import { TOPON_BANNER_HEIGHT } from "@utility/mayi_middleware_apps";
import { mayi_Room } from "@type/mayi_green";
import { mayi_ReactBang } from "@utility/mayi_zhubo";
import { mayi_Iconclosewhitewithbg } from "@constants";
import { mayi_Librrc } from "../../../../mayi_gift";
import { BannerContainer } from "../../../components/container/mayi_iconarrowright_feedback";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppSelector, useSelector } from "@hooks/mayi_redirect";
import mayi_push from "../../../../Umeng/mayi_push";
import { mayi_ConstCheckbox } from "../../../api/mayi_iconsetting_chinasame";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";

interface mayi_GoogleViews {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?: boolean;
  isLive?: boolean;
}

type mayi_ContainerBackwhite = {
  date: string | undefined;
  data: mayi_Default | undefined;
};

type mayi_reminder_iconqq = {
  headers: number[];
  data: mayi_ContainerBackwhite[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false,
  isLive = false,
}: mayi_GoogleViews) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showLoading2, setShowLoading2] = useState(false);
  const [bannerAd, setBannerAd] = useState<mayi_Room>();
  const [bannerAdList, setBannerAdList] = useState<Array<mayi_Room>>([]);
  const userState = useSelector<mayi_Baseline>('userReducer');
  const isVip = mayi_Gift.isVip(userState.user);
  const screenState = useSelector<screenModel>('screenReducer');


  const [matches, setMatches] = useState<mayi_reminder_iconqq>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
       let profilepic0 = 5;
    let philippinesL = 5.0;
    let sansR = String.fromCharCode(112,95,55,51,95,104,121,112,111,116,104,101,115,101,115,0);
    let q_viewx = true;
    let mbbanneri = 3.0;
    let defaultteamv = 4;
    let files = String.fromCharCode(122,95,55,57,95,117,110,119,114,105,116,97,98,108,101,0);
    let penaltymatchicon2 = String.fromCharCode(117,110,114,101,102,99,111,117,110,116,95,114,95,52,50,0);
      profilepic0 |= 1;
      q_viewx = defaultteamv < 58;

    let url = "";

       let bangP = 0;
       let predictiondefaultX = String.fromCharCode(99,111,108,117,109,110,108,105,115,116,95,108,95,53,55,0);
         predictiondefaultX = `${(String.fromCharCode(67,0) == predictiondefaultX ? predictiondefaultX.length : bangP)}`;
      while (predictiondefaultX.endsWith(`${bangP}`)) {
         predictiondefaultX = "2";
         break;
      }
      let textinputz = predictiondefaultX.length <= 8759989;
      do {
         predictiondefaultX += `${predictiondefaultX.length + 3}`;
         if (textinputz) {
            break;
         }
      } while (textinputz && (1 <= predictiondefaultX.length));
       let iconuserw: Array<any> = [String.fromCharCode(100,105,115,107,95,56,95,56,50,0), String.fromCharCode(104,95,55,54,95,121,117,118,121,97,0), String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,95,107,95,48,0)];
      if (4 < (bangP / (Math.max(4, 6))) && 3 < (predictiondefaultX.length / 4)) {
         bangP <<= Math.min(2, Math.abs(predictiondefaultX.length ^ iconuserw.length));
      }
         iconuserw = [bangP];
      q_viewx = sansR.length == 11 && !q_viewx;
   while (sansR.length > parseInt(`${philippinesL}`)) {
       let teamdetailsbg7 = String.fromCharCode(100,95,56,52,95,115,121,109,98,111,108,105,99,97,116,101,100,0);
          let small8 = true;
          let animationsI = 4.0;
         teamdetailsbg7 += `${teamdetailsbg7.length >> (Math.min(Math.abs(3), 5))}`;
         small8 = 91.71 >= animationsI;
         animationsI /= Math.max(1, parseFloat(`${parseInt(`${animationsI}`) / 3}`));
      if (teamdetailsbg7 == teamdetailsbg7) {
         teamdetailsbg7 = `${teamdetailsbg7.length}`;
      }
      let floatingI = teamdetailsbg7.length <= 7761367;
      do {
          let awayteamfieldl = String.fromCharCode(109,95,51,56,95,100,97,116,97,100,105,114,0);
          let filterK: Map<any, any> = new Map([[String.fromCharCode(103,95,55,53,95,109,115,98,115,0),String.fromCharCode(97,114,114,111,119,95,55,95,55,51,0)], [String.fromCharCode(104,95,50,57,95,101,100,103,101,0),String.fromCharCode(109,95,49,95,97,112,112,114,111,112,114,105,97,116,101,0)]]);
          let stro = String.fromCharCode(115,95,56,54,95,102,111,114,109,97,116,0);
          let whitevideoliveT = false;
          let castP = String.fromCharCode(110,95,51,56,95,117,110,98,111,120,101,100,0);
         teamdetailsbg7 += `${filterK.size - 2}`;
         awayteamfieldl += `${1 << (Math.min(5, awayteamfieldl.length))}`;
         filterK = new Map([[castP, 2]]);
         stro = `${stro.length}`;
         whitevideoliveT = awayteamfieldl.length >= 7;
         castP = `${awayteamfieldl.length}`;
         if (floatingI) {
            break;
         }
      } while ((teamdetailsbg7 == teamdetailsbg7) && floatingI);
      philippinesL *= defaultteamv;
      break;
   }
    if (matchTypeID !== -1) {
      url += `?sports_type=${matchTypeID}`;
    }
    if (url === "") {
      url = "?";
    }
    if (status !== -1) {
      url += `&status=${status}`;
    } else {
      url += `&is_live=${true}`;
    }
    

      philippinesL /= Math.max(3, 1 * defaultteamv);
      sansR = `${((q_viewx ? 1 : 5) ^ files.length)}`;
    

   let stylese = philippinesL <= 8003823.0;
   do {
      philippinesL *= (defaultteamv + (q_viewx ? 5 : 4));
      if (stylese) {
         break;
      }
   } while ((5 < (defaultteamv & 4)) && stylese);
       let sendv: Array<any> = [String.fromCharCode(115,112,97,99,105,110,103,95,101,95,53,57,0), String.fromCharCode(97,114,109,116,104,95,121,95,51,50,0), String.fromCharCode(98,103,114,97,95,102,95,50,55,0)];
         sendv = [3 + sendv.length];
          let chinaQ = true;
          let completeu = String.fromCharCode(108,105,98,114,97,114,121,95,110,95,50,55,0);
         sendv = [((chinaQ ? 3 : 4))];
         chinaQ = completeu.length <= 25 && 25 <= completeu.length;
      let modelsG = 9855358 <= sendv.length;
      do {
         sendv = [sendv.length / 2];
         if (modelsG) {
            break;
         }
      } while ((2 > sendv.length) && modelsG);
      sansR += `${parseInt(`${philippinesL}`) % (Math.max(2, 9))}`;
    

   let mountingM = defaultteamv <= 5975157;
   do {
      defaultteamv &= defaultteamv >> (Math.min(4, Math.abs(2)));
      if (mountingM) {
         break;
      }
   } while (mountingM && (4 >= defaultteamv));
      mbbanneri *= defaultteamv ^ 1;
    

      q_viewx = (sansR.length - parseInt(`${philippinesL}`)) == 86;
   if ((1 & files.length) >= 4) {
      files = `${((q_viewx ? 2 : 1) / (Math.max(parseInt(`${philippinesL}`), 2)))}`;
   }
    

   if (files.length < 3) {
      files += `${defaultteamv}`;
   }
   if (5 <= profilepic0) {
      profilepic0 ^= (files == String.fromCharCode(73,0) ? files.length : parseInt(`${philippinesL}`));
   }
    

       let anytimeK = String.fromCharCode(101,120,116,101,110,100,101,101,95,108,95,56,56,0);
       let unimplementedviewZ = String.fromCharCode(117,95,57,95,116,119,111,108,111,111,112,0);
         anytimeK += `${unimplementedviewZ.length | anytimeK.length}`;
      if (unimplementedviewZ == anytimeK) {
         anytimeK = `${(anytimeK == String.fromCharCode(87,0) ? anytimeK.length : unimplementedviewZ.length)}`;
      }
      while (2 < anytimeK.length) {
         anytimeK += `${unimplementedviewZ.length}`;
         break;
      }
      for (let k = 0; k < 2; k++) {
         unimplementedviewZ += `${(anytimeK == String.fromCharCode(98,0) ? anytimeK.length : unimplementedviewZ.length)}`;
      }
          let navigationW = 4.0;
         anytimeK = `${2 | parseInt(`${navigationW}`)}`;
      let untick1 = 9478133 <= anytimeK.length;
      do {
          let navigationT = false;
          let changeP: Array<any> = [String.fromCharCode(100,97,98,97,115,101,95,116,95,54,0), String.fromCharCode(111,112,101,110,109,112,116,95,116,95,54,48,0), String.fromCharCode(100,111,102,102,115,101,116,115,95,57,95,52,55,0)];
         anytimeK += `${changeP.length}`;
         if (untick1) {
            break;
         }
      } while (untick1 && (unimplementedviewZ.length >= anytimeK.length));
      mbbanneri *= anytimeK.length;
   while ((sansR.length - 2) < 5 || (philippinesL / 1.63) < 1.79) {
      sansR += `${defaultteamv | 2}`;
      break;
   }
    

   while (mbbanneri == 1.37) {
      q_viewx = philippinesL >= 24.18 && 34 >= profilepic0;
      break;
   }
   while ((philippinesL * defaultteamv) == 5.26) {
      philippinesL /= Math.max(files.length, 4);
      break;
   }
    return Url.matches11 + url;
  };

  const url = getUrl();

  const fetchData = useCallback(async () => {
       let control1 = String.fromCharCode(99,104,105,108,100,114,101,110,95,55,95,50,52,0);
    let macauH = String.fromCharCode(121,95,51,57,95,109,112,106,112,101,103,0);
    let textlayoutmanagero = 5.0;
    let sellz = 0.0;
    let matchD = String.fromCharCode(115,112,108,105,99,101,95,54,95,50,54,0);
    let rewindH: Array<any> = [68, 190];
    let libavutilH: Array<any> = [772, 406];
    let libreactnativeblob8: Array<any> = [916, 271, 564];
    let upgradeM = String.fromCharCode(119,95,57,55,95,115,121,109,111,100,100,0);
    let bellm = String.fromCharCode(114,95,52,56,95,97,108,105,103,110,105,110,103,0);
   for (let s = 0; s < 3; s++) {
      libavutilH = [control1.length];
   }

    const data = (await mayi_Analytics.call(url, {}, "GET")).data;

   while (1 < libreactnativeblob8.length) {
      sellz += libreactnativeblob8.length - control1.length;
      break;
   }

    if (data !== undefined) {

       let yellowcirclebgs = 2.0;
       let bangc: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,112,95,121,95,50,50,0),String.fromCharCode(109,95,55,54,95,114,103,98,116,111,121,118,0)], [String.fromCharCode(118,95,52,50,95,120,111,102,102,115,101,116,0),String.fromCharCode(116,111,117,112,112,101,114,95,97,95,52,49,0)], [String.fromCharCode(116,104,97,119,95,103,95,52,51,0),String.fromCharCode(110,97,110,112,97,95,108,95,52,52,0)]]);
         bangc = new Map([[`${bangc.size}`, 2]]);
      for (let y = 0; y < 3; y++) {
         yellowcirclebgs += parseFloat(`${bangc.size}`);
      }
          let rewindS: Array<any> = [375, 439, 719];
         yellowcirclebgs -= parseFloat(`${1}`);
         rewindS = [rewindS.length % (Math.max(1, 4))];
         bangc.set(`${yellowcirclebgs}`, 1);
      if (Array.from(bangc.values()).includes(yellowcirclebgs)) {
          let animationsF = String.fromCharCode(99,97,99,97,95,100,95,57,0);
          let storef = false;
          let taiwanx = 5.0;
          let routeru = String.fromCharCode(110,95,53,57,95,109,117,115,105,99,0);
          let gmailb: Array<any> = [String.fromCharCode(97,112,105,115,95,119,95,49,54,0), String.fromCharCode(97,100,97,112,116,101,100,95,121,95,52,51,0)];
         bangc.set(`${yellowcirclebgs}`, parseInt(`${yellowcirclebgs}`) ^ gmailb.length);
         animationsF += `${(animationsF.length ^ (storef ? 5 : 4))}`;
         storef = (animationsF.length | routeru.length) <= 23;
         taiwanx /= Math.max(5, (parseFloat(`${(storef ? 3 : 3) % (Math.max(parseInt(`${taiwanx}`), 4))}`)));
         routeru = `${(String.fromCharCode(83,0) == routeru ? parseInt(`${taiwanx}`) : routeru.length)}`;
         gmailb.push(2 % (Math.max(10, parseInt(`${taiwanx}`))));
      }
      if (5 < (bangc.size / (Math.max(7, parseInt(`${yellowcirclebgs}`))))) {
         yellowcirclebgs += parseFloat(`${2}`);
      }
      libreactnativeblob8.push(control1.length);
      const dates = Object.keys(data);

      rewindH = [3 - rewindH.length];
      let lst: mayi_ContainerBackwhite[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;

   for (let o = 0; o < 1; o++) {
      libavutilH = [rewindH.length];
   }
      if (latestListDate.current === undefined) {

   while ((libreactnativeblob8.length * 2) >= 3 || 2 >= (libreactnativeblob8.length * libavutilH.length)) {
       let mimoo = String.fromCharCode(108,111,110,103,95,57,95,52,54,0);
       let libavdevicee = String.fromCharCode(113,95,54,53,95,116,101,120,116,102,105,108,101,0);
       let frame_zK = 5;
       let with_hE = String.fromCharCode(121,95,53,50,95,115,99,105,105,0);
       let assistm = 5.0;
         frame_zK ^= with_hE.length - parseInt(`${assistm}`);
          let submitK = false;
          let cornerkickk = String.fromCharCode(98,95,55,55,95,102,105,108,108,105,110,103,0);
         mimoo = `${libavdevicee.length}`;
         submitK = cornerkickk.endsWith(`${submitK}`);
         cornerkickk += `${(2 + (submitK ? 3 : 2))}`;
      for (let s = 0; s < 3; s++) {
          let baiduv = false;
          let androidC = String.fromCharCode(114,97,112,105,100,106,115,111,110,95,116,95,54,57,0);
         assistm -= parseInt(`${assistm}`);
         baiduv = !androidC.includes(`${baiduv}`);
         androidC = `${androidC.length % 3}`;
      }
          let trashz = 4.0;
          let whitevideolive6 = String.fromCharCode(118,95,52,51,95,100,101,114,105,118,101,100,0);
         with_hE += `${2 - with_hE.length}`;
         trashz -= parseInt(`${trashz}`) >> (Math.min(Math.abs(3), 3));
         whitevideolive6 = `${parseInt(`${trashz}`)}`;
       let root2 = String.fromCharCode(103,95,51,53,95,99,108,101,97,114,98,105,116,0);
      let refreshborderlessp = with_hE == String.fromCharCode(107,122,106,101,104,112,54,0);
      do {
         with_hE = `${with_hE.length & root2.length}`;
         if (refreshborderlessp) {
            break;
         }
      } while ((with_hE.includes(`${assistm}`)) && refreshborderlessp);
         with_hE = `${root2.length - parseInt(`${assistm}`)}`;
      if (!root2.endsWith(`${assistm}`)) {
         assistm *= frame_zK;
      }
         with_hE += `${with_hE.length}`;
         libavdevicee += `${libavdevicee.length}`;
          let description_bg = 0;
          let nativeI = 3;
         mimoo = `${mimoo.length * 2}`;
         description_bg *= nativeI;
         libavdevicee = "1";
      if (root2.includes(`${libavdevicee.length}`)) {
         libavdevicee = `${2 >> (Math.min(1, Math.abs(frame_zK)))}`;
      }
      if (libavdevicee.length >= 3 || root2.length >= 3) {
         root2 += `${mimoo.length}`;
      }
      if ((with_hE.length % 5) == 1) {
         frame_zK /= Math.max(with_hE.length, 3);
      }
      libavutilH.push(frame_zK);
      break;
   }
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {

   while (1 < (2 * rewindH.length) || 2 < (2 * rewindH.length)) {
       let reacto = String.fromCharCode(108,95,50,48,95,99,108,105,99,107,0);
       let whitevideolivea = true;
       let championj = 1;
       let toponM = 2.0;
       let charti: Map<any, any> = new Map([[String.fromCharCode(105,95,50,95,112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,0),791], [String.fromCharCode(100,105,103,101,115,116,95,115,95,49,54,0),315], [String.fromCharCode(112,107,112,107,101,121,95,56,95,49,49,0),440]]);
         charti.set(`${toponM}`, parseInt(`${toponM}`) | charti.size);
         reacto += "2";
      while (4 > reacto.length || whitevideolivea) {
          let close8: Map<any, any> = new Map([[String.fromCharCode(109,95,54,51,95,103,97,112,0),false ], [String.fromCharCode(101,108,105,103,105,98,108,101,95,52,95,52,56,0),true ]]);
          let subine = String.fromCharCode(97,95,57,50,95,101,97,114,108,121,0);
          let details6 = 4.0;
          let full0: Array<any> = [950, 980, 589];
         reacto += `${close8.size}`;
         close8.set(`${details6}`, parseInt(`${details6}`) % 3);
         subine = `${(subine == String.fromCharCode(116,0) ? parseInt(`${details6}`) : subine.length)}`;
         full0 = [parseInt(`${details6}`)];
         break;
      }
          let libreactnativeblobp = 3;
          let nextf = String.fromCharCode(122,95,49,48,95,97,116,116,97,99,104,101,100,0);
          let gpayG = 4;
         whitevideolivea = reacto.includes(`${whitevideolivea}`);
         libreactnativeblobp |= (nextf == String.fromCharCode(90,0) ? nextf.length : gpayG);
         gpayG -= 2;
          let orangeQ = 4;
          let projectH = String.fromCharCode(114,116,99,119,101,98,95,56,95,51,51,0);
         championj |= (projectH == String.fromCharCode(68,0) ? projectH.length : reacto.length);
         orangeQ *= 2 << (Math.min(3, Math.abs(orangeQ)));
       let attributedstringW: Map<any, any> = new Map([[String.fromCharCode(121,95,57,54,95,105,109,112,108,105,99,105,116,108,121,0),109], [String.fromCharCode(115,95,55,56,95,112,105,99,116,117,114,101,0),615]]);
         attributedstringW = new Map([[`${charti.size}`, charti.size]]);
         championj >>= Math.min(Math.abs(attributedstringW.size), 5);
      if (3 <= (charti.size >> (Math.min(Math.abs(attributedstringW.size), 4)))) {
         attributedstringW = new Map([[`${whitevideolivea}`, 1]]);
      }
      if (whitevideolivea || (4.87 * toponM) > 4.28) {
          let refreshborderlessR = 4;
          let othere = String.fromCharCode(109,95,53,57,95,117,115,101,0);
         whitevideolivea = String.fromCharCode(87,0) == othere;
         refreshborderlessR |= refreshborderlessR;
         othere += `${1 & refreshborderlessR}`;
      }
         attributedstringW.set(`${toponM}`, championj);
          let robotos = String.fromCharCode(118,97,114,105,97,100,105,99,95,52,95,55,56,0);
         attributedstringW.set(`${charti.size}`, attributedstringW.size);
         robotos += "3";
          let iconarrowrightorangeR = false;
          let apple5 = String.fromCharCode(114,101,99,111,110,102,105,103,117,114,101,95,119,95,57,0);
          let orangey = String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,95,115,95,50,53,0);
         championj += 3;
         iconarrowrightorangeR = !iconarrowrightorangeR && apple5.length >= 76;
         apple5 = `${3 << (Math.min(1, apple5.length))}`;
         orangey += `${apple5.length << (Math.min(orangey.length, 4))}`;
          let gradlewr: Array<any> = [String.fromCharCode(117,110,101,110,99,114,121,112,116,101,100,95,121,95,54,0), String.fromCharCode(118,115,117,98,113,95,48,95,50,55,0)];
          let typesR = 2;
         attributedstringW.set(`${championj}`, 3);
         gradlewr.push(typesR);
         typesR &= gradlewr.length;
      let downarrowq = whitevideolivea ? !whitevideolivea : whitevideolivea;
      do {
         whitevideolivea = (60 >= ((whitevideolivea ? reacto.length : 60) | reacto.length));
         if (downarrowq) {
            break;
         }
      } while ((whitevideolivea) && downarrowq);
      rewindH.push(3 << (Math.min(5, Math.abs(charti.size))));
      break;
   }
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000
        );
      } else {

       let target0 = 1.0;
         target0 *= 2;
         target0 -= parseInt(`${target0}`);
          let styles2 = String.fromCharCode(112,95,56,48,95,115,116,114,99,97,115,101,99,109,112,0);
         target0 -= (String.fromCharCode(70,0) == styles2 ? parseInt(`${target0}`) : styles2.length);
      rewindH.push(libreactnativeblob8.length);
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000
        );
      }
      for (const date of dates) {

       let leakcheckerQ = 5.0;
      let filedb = 9284987.0 >= leakcheckerQ;
      do {
         leakcheckerQ *= parseFloat(`${parseInt(`${leakcheckerQ}`)}`);
         if (filedb) {
            break;
         }
      } while ((leakcheckerQ <= 5.53) && filedb);
         leakcheckerQ += parseFloat(`${3}`);
      let awayB = 6385246.0 <= leakcheckerQ;
      do {
          let delegate_drt = true;
          let anytime4 = 2.0;
         leakcheckerQ -= (parseFloat(`${parseInt(`${anytime4}`) & (delegate_drt ? 1 : 4)}`));
         if (awayB) {
            break;
         }
      } while (awayB && (1.33 == (leakcheckerQ * 5.72) && (leakcheckerQ * 5.72) == 1.70));
      textlayoutmanagero += parseInt(`${textlayoutmanagero}`) / (Math.max(3, matchD.length));
        const dateDate = new Date(date);

   while (!rewindH.includes(libreactnativeblob8.length)) {
      libreactnativeblob8.push(macauH.length);
      break;
   }
        const now = new Date();

   let libreactnativejni9 = 6910989 >= libavutilH.length;
   do {
      libavutilH.push(control1.length + matchD.length);
      if (libreactnativejni9) {
         break;
      }
   } while (libreactnativejni9 && (2 >= (5 >> (Math.min(4, libavutilH.length)))));
        const sevenDaysBefore = new Date(
          now.valueOf() - 7 * 24 * 60 * 60 * 1000
        );

       let iconpipexpandX = String.fromCharCode(112,101,114,102,111,114,109,101,100,95,112,95,54,50,0);
       let yellow9 = 1;
      if ((iconpipexpandX.length >> (Math.min(5, Math.abs(yellow9)))) <= 3 && 1 <= (3 >> (Math.min(2, iconpipexpandX.length)))) {
         yellow9 += 2 ^ yellow9;
      }
      for (let o = 0; o < 3; o++) {
          let nextd = String.fromCharCode(110,101,108,108,121,109,111,115,101,114,95,101,95,52,49,0);
          let reactnativejsP = 3.0;
          let libavdeviceK = String.fromCharCode(117,95,51,52,95,99,111,110,102,111,114,109,97,110,99,101,0);
          let tumbnailZ: Map<any, any> = new Map([[String.fromCharCode(100,108,105,115,116,95,57,95,52,57,0),83], [String.fromCharCode(115,97,109,112,108,101,115,95,112,95,53,52,0),888], [String.fromCharCode(117,112,100,97,116,97,98,108,101,95,111,95,52,48,0),372]]);
         yellow9 %= Math.max(3, nextd.length);
         nextd = `${parseInt(`${reactnativejsP}`)}`;
         reactnativejsP /= Math.max(parseFloat(`${parseInt(`${reactnativejsP}`)}`), 2);
         libavdeviceK += `${parseInt(`${reactnativejsP}`) >> (Math.min(Math.abs(1), 4))}`;
         tumbnailZ = new Map([[libavdeviceK, 1]]);
      }
       let viewerm = String.fromCharCode(102,95,50,57,95,104,101,114,101,0);
         viewerm = `${viewerm.length ^ iconpipexpandX.length}`;
      while (iconpipexpandX.length <= 2) {
         yellow9 /= Math.max(iconpipexpandX.length, 3);
         break;
      }
         viewerm = `${(viewerm == String.fromCharCode(113,0) ? viewerm.length : yellow9)}`;
      upgradeM = `${1 << (Math.min(Math.abs(yellow9), 3))}`;
        const sevenDaysAfter = new Date(
          now.valueOf() + 7 * 24 * 60 * 60 * 1000
        );

      upgradeM += `${upgradeM.length}`;

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue;

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);

   while ((libavutilH.length ^ 2) >= 5 || 2 >= (2 ^ rewindH.length)) {
      rewindH.push(control1.length);
      break;
   }
        count += 1;
        data[date].forEach((element: mayi_Default) => {
          lst.push({ date: undefined, data: element });
          count += 1;
        });
      }
      setMatches({
        headers: headers,
        data: lst,
      });
    }
  }, []);

  const fetchBannerAd = async () => {
       let resultx: Map<any, any> = new Map([[String.fromCharCode(113,95,55,55,95,99,111,109,109,97,0),920], [String.fromCharCode(117,95,49,50,95,99,98,114,116,0),64]]);
    let downloadX = String.fromCharCode(102,105,114,101,100,95,99,95,50,51,0);
    let indicatorG = 5;
    let rocketq = String.fromCharCode(111,112,116,105,109,117,109,95,103,95,50,51,0);
    let networkI = String.fromCharCode(100,105,97,99,114,105,116,105,99,95,114,95,54,48,0);
    let liveb = false;
    let subbasketballplayer5 = 3.0;
    let gifgoale = 1.0;
    let borderlesse = false;
    let rewardvideoy: Array<any> = [String.fromCharCode(112,97,105,114,95,111,95,53,0), String.fromCharCode(104,95,56,56,95,119,111,114,100,108,105,115,116,0), String.fromCharCode(98,105,116,114,118,95,55,95,54,48,0)];
    let videobufferloading9 = String.fromCharCode(122,95,51,50,95,111,116,104,0);
    let awayV = 2.0;
    let binddatasd = String.fromCharCode(119,117,110,100,101,102,95,115,95,50,0);
       let dark2 = String.fromCharCode(111,95,49,49,95,99,111,109,112,0);
          let basketballtrophyF = String.fromCharCode(109,95,52,50,95,115,116,111,112,101,100,0);
         dark2 = "1";
         basketballtrophyF = "2";
         dark2 += `${dark2.length / (Math.max(6, dark2.length))}`;
          let temperatureW = 2.0;
         dark2 = `${2 + parseInt(`${temperatureW}`)}`;
      rewardvideoy = [((liveb ? 4 : 2) << (Math.min(Math.abs(1), 3)))];
   if (!liveb && borderlesse) {
      borderlesse = parseInt(`${subbasketballplayer5}`) <= downloadX.length;
   }
       let homeplayerc = 3.0;
       let mountingW = false;
      if ((3.59 + homeplayerc) == 1.55) {
          let macauO = String.fromCharCode(98,95,49,95,112,100,115,0);
          let iconviewergify = false;
          let handlerZ = String.fromCharCode(116,99,109,105,95,113,95,48,0);
         homeplayerc += parseFloat(`${3}`);
         macauO += `${(String.fromCharCode(71,0) == macauO ? (iconviewergify ? 1 : 4) : macauO.length)}`;
         iconviewergify = !iconviewergify;
         handlerZ += `${((iconviewergify ? 3 : 2) | 3)}`;
      }
      while (1.45 < homeplayerc) {
          let libavcodecP = 2.0;
          let plusY = String.fromCharCode(98,114,111,119,115,101,95,55,95,56,0);
          let goallogox = 3;
          let sharedf: Map<any, any> = new Map([[String.fromCharCode(107,95,56,95,99,112,108,115,99,97,108,101,115,0),664], [String.fromCharCode(112,97,103,101,104,97,115,104,95,102,95,52,54,0),427]]);
         homeplayerc += parseFloat(`${plusY.length}`);
         libavcodecP /= Math.max(1, parseFloat(`${sharedf.size ^ 2}`));
         plusY = `${goallogox | 1}`;
         goallogox += 3;
         sharedf = new Map([[`${sharedf.size}`, 2]]);
         break;
      }
      borderlesse = !liveb;
      resultx.set(`${indicatorG}`, indicatorG & parseInt(`${subbasketballplayer5}`));
   for (let j = 0; j < 3; j++) {
       let thailandJ = String.fromCharCode(99,104,111,111,115,105,110,103,95,108,95,57,56,0);
         thailandJ += `${2 - thailandJ.length}`;
       let matchesB = String.fromCharCode(120,95,57,49,95,99,111,112,121,100,97,116,97,0);
       let librrc7 = String.fromCharCode(118,105,98,114,97,116,105,111,110,95,57,95,57,0);
       let sendI = String.fromCharCode(111,95,55,53,95,116,97,107,100,115,112,0);
      indicatorG /= Math.max(4, rewardvideoy.length % 3);
   }

    const bannerRes = await mayi_ConstCheckbox.getBannerAd(110);

   let shrinkv = resultx.size >= 7326962;
   do {
       let launcherZ: Array<any> = [317, 581, 888];
       let analytics1 = 0.0;
       let ajaxS: Map<any, any> = new Map([[String.fromCharCode(103,95,50,50,95,97,110,121,0),302], [String.fromCharCode(117,95,49,48,48,95,119,97,108,107,105,110,103,0),420], [String.fromCharCode(116,105,109,101,105,110,102,111,95,116,95,56,55,0),334]]);
      let predictiondefaultP = ajaxS.size <= 8496814;
      do {
         ajaxS = new Map([[`${launcherZ.length}`, 3]]);
         if (predictiondefaultP) {
            break;
         }
      } while (predictiondefaultP && ((ajaxS.size << (Math.min(Math.abs(4), 4))) <= 1 || 1.83 <= (analytics1 + 1.30)));
          let goallogok: Map<any, any> = new Map([[String.fromCharCode(113,95,57,57,95,100,114,105,118,101,114,0),887], [String.fromCharCode(116,95,55,53,95,97,115,115,101,109,98,108,101,0),355]]);
          let embedt = String.fromCharCode(97,116,97,98,108,101,115,95,109,95,54,49,0);
          let signinup3: Array<any> = [String.fromCharCode(110,95,52,53,95,100,101,108,116,97,113,0), String.fromCharCode(99,104,101,99,107,108,105,110,101,95,109,95,53,52,0), String.fromCharCode(99,95,49,48,48,95,109,97,99,101,0)];
         ajaxS = new Map([[`${launcherZ.length}`, 3 - launcherZ.length]]);
         goallogok.set(`${embedt}`, goallogok.size);
         embedt += "3";
         signinup3.push(3);
      if ((analytics1 + 3.7) == 3.67 && 2.83 == (3.7 + analytics1)) {
         launcherZ.push(launcherZ.length);
      }
      let loadingU = analytics1 >= 6914171.0;
      do {
         analytics1 *= parseFloat(`${parseInt(`${analytics1}`) >> (Math.min(Math.abs(ajaxS.size), 5))}`);
         if (loadingU) {
            break;
         }
      } while ((4 == (4 & launcherZ.length)) && loadingU);
      for (let a = 0; a < 2; a++) {
          let twitterk = String.fromCharCode(98,105,116,95,55,95,50,50,0);
          let editT: Map<any, any> = new Map([[String.fromCharCode(119,95,50,54,95,99,111,117,110,116,114,105,101,115,0),708], [String.fromCharCode(104,95,55,54,95,111,110,97,118,99,0),722], [String.fromCharCode(112,117,98,107,101,121,95,105,95,54,55,0),306]]);
          let iconw = String.fromCharCode(115,112,101,97,107,95,108,95,54,50,0);
          let codegenA = 3.0;
          let suggestion0 = 4.0;
         analytics1 /= Math.max(parseFloat(`${3 / (Math.max(1, iconw.length))}`), 5);
         twitterk = `${(twitterk == String.fromCharCode(118,0) ? editT.size : twitterk.length)}`;
         editT = new Map([[`${editT.size}`, editT.size]]);
         iconw += `${1 - editT.size}`;
         codegenA /= Math.max(editT.size * parseInt(`${codegenA}`), 2);
         suggestion0 *= editT.size;
      }
         ajaxS.set(`${analytics1}`, parseInt(`${analytics1}`) % (Math.max(ajaxS.size, 3)));
         ajaxS = new Map([[`${launcherZ.length}`, parseInt(`${analytics1}`)]]);
      let libreactnativejni4 = 7068567 >= launcherZ.length;
      do {
         launcherZ.push(ajaxS.size & 3);
         if (libreactnativejni4) {
            break;
         }
      } while (((launcherZ.length * ajaxS.size) <= 5 && 2 <= (ajaxS.size * 5)) && libreactnativejni4);
      let arrowupE = 9142668 >= ajaxS.size;
      do {
         ajaxS.set(`${launcherZ.length}`, 1);
         if (arrowupE) {
            break;
         }
      } while (arrowupE && (!Array.from(ajaxS.values()).includes(analytics1)));
      resultx.set(`${analytics1}`, launcherZ.length);
      if (shrinkv) {
         break;
      }
   } while ((5 > rocketq.length) && shrinkv);
   while ((gifgoale / 4.47) < 4.36 && 4.25 < (gifgoale / 4.47)) {
       let matchess = 3.0;
       let plashw = String.fromCharCode(108,97,117,110,99,104,101,115,95,109,95,56,52,0);
      let gestureso = 8647309.0 >= matchess;
      do {
          let m_image3 = 0.0;
          let templateprocessori = 2;
          let username2 = String.fromCharCode(108,95,57,51,95,109,105,110,117,116,101,0);
          let vignettez = false;
          let floatingQ = 2.0;
         matchess -= 3;
         m_image3 /= Math.max(1, parseFloat(`${parseInt(`${floatingQ}`)}`));
         templateprocessori >>= Math.min(1, Math.abs(3 << (Math.min(Math.abs(parseInt(`${m_image3}`)), 1))));
         username2 += `${parseInt(`${m_image3}`)}`;
         vignettez = m_image3 == parseFloat(`${username2.length}`);
         floatingQ += 2 & parseInt(`${floatingQ}`);
         if (gestureso) {
            break;
         }
      } while (gestureso && (1 < (plashw.length - parseInt(`${matchess}`)) || 2.21 < (matchess - plashw.length)));
         plashw += `${plashw.length}`;
         plashw = `${parseInt(`${matchess}`)}`;
         plashw += `${parseInt(`${matchess}`) * plashw.length}`;
      if ((plashw.length << (Math.min(Math.abs(1), 4))) >= 5) {
         matchess /= Math.max((String.fromCharCode(53,0) == plashw ? parseInt(`${matchess}`) : plashw.length), 2);
      }
          let tick9 = 3.0;
          let countdown7 = 3;
          let yellowscoreballB: Array<any> = [508, 9, 619];
         plashw += `${countdown7}`;
         tick9 += yellowscoreballB.length | parseInt(`${tick9}`);
         countdown7 >>= Math.min(4, Math.abs(parseInt(`${tick9}`)));
         yellowscoreballB.push(parseInt(`${tick9}`) / (Math.max(yellowscoreballB.length, 1)));
      videobufferloading9 = `${2 | rocketq.length}`;
      break;
   }
   if (!networkI.includes(`${rewardvideoy.length}`)) {
      networkI += `${2 * rewardvideoy.length}`;
   }
   while (indicatorG >= 3) {
       let taiwand = String.fromCharCode(117,99,108,111,99,107,95,103,95,49,55,0);
       let shirtt = 2.0;
       let relatedt = 3.0;
      for (let g = 0; g < 1; g++) {
         taiwand += `${parseInt(`${shirtt}`) >> (Math.min(taiwand.length, 1))}`;
      }
         taiwand += `${taiwand.length + 1}`;
         relatedt *= (parseFloat(`${String.fromCharCode(112,0) == taiwand ? taiwand.length : parseInt(`${relatedt}`)}`));
         taiwand = `${parseInt(`${relatedt}`) % (Math.max(taiwand.length, 2))}`;
         shirtt *= parseFloat(`${parseInt(`${relatedt}`) | parseInt(`${shirtt}`)}`);
         shirtt += parseFloat(`${parseInt(`${relatedt}`)}`);
      let moref = 5703869.0 >= shirtt;
      do {
         shirtt *= (parseFloat(`${String.fromCharCode(107,0) == taiwand ? taiwand.length : parseInt(`${relatedt}`)}`));
         if (moref) {
            break;
         }
      } while (((parseInt(`${shirtt}`) / (Math.max(1, 4))) == 5 && 4 == (1 >> (Math.min(1, taiwand.length)))) && moref);
      for (let g = 0; g < 2; g++) {
         relatedt += (parseFloat(`${String.fromCharCode(83,0) == taiwand ? taiwand.length : parseInt(`${shirtt}`)}`));
      }
      if (2 <= (4 | taiwand.length)) {
         relatedt *= parseFloat(`${parseInt(`${relatedt}`) & 1}`);
      }
      indicatorG >>= Math.min(videobufferloading9.length, 5);
      break;
   }
   while (gifgoale == 5.8) {
      gifgoale -= 3 + parseInt(`${gifgoale}`);
      break;
   }
    const banner = bannerRes.ads;

   for (let b = 0; b < 2; b++) {
       let libswscaleh = 5;
       let iconarrowleft0 = 0.0;
       let optionsg = 5.0;
       let iconsharefriendsq = String.fromCharCode(113,95,55,48,95,105,110,102,105,110,105,116,121,0);
      if (!iconsharefriendsq.startsWith(`${iconarrowleft0}`)) {
         iconarrowleft0 /= Math.max(3, 3 | parseInt(`${optionsg}`));
      }
      subbasketballplayer5 -= resultx.size << (Math.min(Math.abs(1), 2));
      libswscaleh += libswscaleh & libswscaleh;
   }
       let filedB = 4;
       let clockl = 4.0;
       let lineT: Map<any, any> = new Map([[String.fromCharCode(116,114,105,99,107,108,101,95,102,95,54,54,0),false ], [String.fromCharCode(118,95,49,95,105,110,116,101,114,108,101,97,118,105,110,103,0),true ]]);
          let buffer3: Array<any> = [959, 545];
          let mapbuffero = String.fromCharCode(98,101,103,97,110,95,51,95,55,54,0);
          let f_viewl = 5.0;
         clockl -= mapbuffero.length;
         buffer3.push(3 & buffer3.length);
         mapbuffero += `${parseInt(`${f_viewl}`) / (Math.max(buffer3.length, 10))}`;
         f_viewl += parseFloat(`${buffer3.length << (Math.min(3, Math.abs(parseInt(`${f_viewl}`))))}`);
      for (let n = 0; n < 2; n++) {
         filedB /= Math.max(filedB, 1);
      }
      while (clockl == lineT.size) {
          let unimplementedview2 = 4.0;
         clockl += parseInt(`${clockl}`);
         unimplementedview2 *= parseInt(`${unimplementedview2}`);
         break;
      }
         lineT = new Map([[`${lineT.size}`, lineT.size]]);
         clockl /= Math.max(parseInt(`${clockl}`), 1);
      for (let x = 0; x < 3; x++) {
         clockl += filedB ^ parseInt(`${clockl}`);
      }
       let googled = true;
       let bgvipxvodg = true;
       let moviesO = 0.0;
          let styleso = String.fromCharCode(105,95,57,50,95,115,116,97,114,116,101,100,0);
          let chinasamec = false;
         clockl += 1;
         styleso = `${((chinasamec ? 1 : 5))}`;
         chinasamec = styleso.length <= 54;
      subbasketballplayer5 += (parseInt(`${gifgoale}`) * (liveb ? 3 : 3));
   for (let t = 0; t < 2; t++) {
      rocketq += `${networkI.length << (Math.min(2, Math.abs(resultx.size)))}`;
   }
   if (1.55 <= (gifgoale + 5.12) || 1.57 <= (5.12 - subbasketballplayer5)) {
       let shielddonee = 0.0;
       let basketballplayerplaceholderR: Map<any, any> = new Map([[String.fromCharCode(112,97,116,116,101,114,110,115,95,106,95,52,49,0),968], [String.fromCharCode(97,95,53,54,95,112,107,99,114,121,112,116,0),717], [String.fromCharCode(102,95,57,52,95,117,110,108,105,110,107,101,100,0),323]]);
       let dropdownB = 3.0;
       let scrollviewu = 1;
       let cricketX = String.fromCharCode(105,109,112,108,101,109,101,110,116,115,95,55,95,51,0);
          let rightW: Map<any, any> = new Map([[String.fromCharCode(119,95,55,55,95,105,100,99,116,114,111,119,0),String.fromCharCode(99,111,109,112,108,101,109,101,110,116,95,97,95,55,51,0)], [String.fromCharCode(100,95,50,52,95,112,108,97,121,0),String.fromCharCode(112,95,56,53,95,116,111,112,105,99,115,0)], [String.fromCharCode(118,95,49,56,95,112,114,101,115,117,109,101,0),String.fromCharCode(114,101,116,117,114,110,101,100,95,117,95,55,56,0)]]);
         scrollviewu *= (cricketX == String.fromCharCode(84,0) ? cricketX.length : parseInt(`${shielddonee}`));
         rightW = new Map([[`${rightW.size}`, rightW.size]]);
      while (basketballplayerplaceholderR.get(`${shielddonee}`) != null) {
          let activeh: Array<any> = [185, 633, 688];
          let sidew = 1;
          let langkeyf = 5.0;
         basketballplayerplaceholderR.set(`${dropdownB}`, 2 >> (Math.min(Math.abs(parseInt(`${dropdownB}`)), 2)));
         activeh = [activeh.length];
         sidew /= Math.max(1 % (Math.max(2, parseInt(`${langkeyf}`))), 4);
         langkeyf -= parseFloat(`${sidew}`);
         break;
      }
      while (3.49 >= dropdownB) {
          let libapminsighta3 = false;
          let downloadedu = String.fromCharCode(117,95,52,54,95,114,101,97,116,116,97,99,104,0);
          let forme = String.fromCharCode(101,95,53,54,95,98,102,114,97,99,116,105,111,110,0);
          let textN = 5;
          let whistleB = 2;
         dropdownB += parseFloat(`${downloadedu.length}`);
         libapminsighta3 = !libapminsighta3;
         downloadedu = `${forme.length}`;
         forme += `${(forme.length % (Math.max(8, (libapminsighta3 ? 4 : 2))))}`;
         textN /= Math.max(((libapminsighta3 ? 3 : 5) % (Math.max(forme.length, 10))), 4);
         whistleB |= 1;
         break;
      }
          let knewinterstitiala = String.fromCharCode(99,108,97,115,115,105,102,121,95,49,95,51,55,0);
         basketballplayerplaceholderR.set(knewinterstitiala, cricketX.length);
      if (!cricketX.startsWith(`${dropdownB}`)) {
          let animationV = String.fromCharCode(110,95,51,48,95,111,119,110,101,114,115,0);
          let plasha = 2.0;
          let vignetteA = String.fromCharCode(110,101,97,114,101,110,100,95,109,95,49,53,0);
          let feedbackk = String.fromCharCode(108,111,103,116,97,110,95,53,95,49,51,0);
          let libnmsS: Map<any, any> = new Map([[String.fromCharCode(101,120,99,108,95,104,95,56,51,0),684], [String.fromCharCode(100,101,115,112,105,108,108,95,57,95,54,55,0),480]]);
         cricketX = `${2 - feedbackk.length}`;
         animationV += `${libnmsS.size}`;
         plasha += animationV.length;
         vignetteA += "2";
         feedbackk = `${(vignetteA == String.fromCharCode(105,0) ? animationV.length : vignetteA.length)}`;
         libnmsS.set(`${vignetteA}`, (vignetteA == String.fromCharCode(66,0) ? libnmsS.size : vignetteA.length));
      }
         dropdownB += parseFloat(`${2 + cricketX.length}`);
         scrollviewu |= scrollviewu + 3;
      let dialogz = scrollviewu <= 6486623;
      do {
          let dangerE = String.fromCharCode(110,102,116,95,122,95,55,56,0);
          let predictionbannerg: Map<any, any> = new Map([[String.fromCharCode(114,95,49,52,95,97,109,111,117,110,116,0),false ], [String.fromCharCode(109,99,108,109,115,95,105,95,55,49,0),true ], [String.fromCharCode(104,95,51,48,95,121,117,118,121,117,118,0),true ]]);
          let classes8 = false;
          let iconfeedbacki = String.fromCharCode(101,115,99,97,112,101,95,112,95,52,57,0);
          let tailt = 0.0;
         scrollviewu &= (dangerE == String.fromCharCode(108,0) ? iconfeedbacki.length : dangerE.length);
         predictionbannerg = new Map([[`${predictionbannerg.size}`, predictionbannerg.size + 1]]);
         classes8 = classes8 || 31.6 < tailt;
         iconfeedbacki += "3";
         tailt += (2 << (Math.min(2, Math.abs((classes8 ? 2 : 5)))));
         if (dialogz) {
            break;
         }
      } while (dialogz && ((1.52 + dropdownB) < 4.53));
      for (let l = 0; l < 1; l++) {
          let kuaishouK = String.fromCharCode(115,112,97,119,110,95,122,95,53,55,0);
          let iconnotificationnew7 = String.fromCharCode(122,95,52,52,95,103,114,105,100,0);
          let iconbackwhitei = 2.0;
          let scoreO = false;
          let styles1 = true;
         cricketX = `${scrollviewu & parseInt(`${dropdownB}`)}`;
         kuaishouK = `${((scoreO ? 2 : 1) | iconnotificationnew7.length)}`;
         iconnotificationnew7 += `${3 >> (Math.min(5, iconnotificationnew7.length))}`;
         iconbackwhitei *= (parseFloat(`${(styles1 ? 3 : 2)}`));
         styles1 = kuaishouK.length <= 16;
      }
      while (2.38 == (shielddonee / 1.11)) {
         scrollviewu *= basketballplayerplaceholderR.size;
         break;
      }
          let homeloadingN = String.fromCharCode(101,97,103,101,114,95,50,95,55,49,0);
          let holdero = 4.0;
          let footballfiledlayoutE = String.fromCharCode(115,119,97,112,112,97,98,108,101,95,102,95,57,57,0);
         dropdownB += parseFloat(`${2 & parseInt(`${shielddonee}`)}`);
         homeloadingN = `${footballfiledlayoutE.length >> (Math.min(Math.abs(2), 3))}`;
         holdero += parseFloat(`${parseInt(`${holdero}`) >> (Math.min(footballfiledlayoutE.length, 3))}`);
      if (basketballplayerplaceholderR.size < 4) {
         dropdownB *= parseFloat(`${2 | parseInt(`${shielddonee}`)}`);
      }
         basketballplayerplaceholderR = new Map([[`${basketballplayerplaceholderR.size}`, basketballplayerplaceholderR.size]]);
      while (basketballplayerplaceholderR.get(`${shielddonee}`) != null) {
          let encryptorR = String.fromCharCode(105,112,118,105,100,101,111,95,101,95,53,55,0);
          let reminder0 = 0.0;
          let foundb = String.fromCharCode(112,114,111,100,117,99,101,95,109,95,57,48,0);
          let libjsin = 0.0;
          let taiwanL = 1.0;
         basketballplayerplaceholderR = new Map([[`${shielddonee}`, parseInt(`${shielddonee}`)]]);
         encryptorR = "1";
         reminder0 /= Math.max((encryptorR == String.fromCharCode(78,0) ? parseInt(`${reminder0}`) : encryptorR.length), 3);
         foundb = `${(encryptorR == String.fromCharCode(48,0) ? parseInt(`${taiwanL}`) : encryptorR.length)}`;
         libjsin += 1;
         taiwanL *= parseFloat(`${foundb.length - 2}`);
         break;
      }
      let libnmsZ = scrollviewu <= 4923194;
      do {
          let analyticH = String.fromCharCode(99,114,111,115,115,111,118,101,114,95,55,95,56,57,0);
         scrollviewu <<= Math.min(Math.abs(parseInt(`${shielddonee}`) / 1), 1);
         analyticH = `${3 - analyticH.length}`;
         if (libnmsZ) {
            break;
         }
      } while (libnmsZ && ((5 - scrollviewu) <= 5));
      subbasketballplayer5 -= parseInt(`${dropdownB}`);
   }
   for (let c = 0; c < 3; c++) {
      liveb = (71 >= (rewardvideoy.length << (Math.min(5, Math.abs((liveb ? rewardvideoy.length : 71))))));
   }
    const bannerList = bannerRes.ads_list;

      borderlesse = 14.35 == gifgoale || liveb;
   for (let x = 0; x < 3; x++) {
      downloadX += `${resultx.size - 1}`;
   }
   while (downloadX.length > 2 || borderlesse) {
       let basketballtrophys = String.fromCharCode(115,99,104,101,109,101,115,95,120,95,51,49,0);
       let resultn = String.fromCharCode(114,95,56,57,95,99,97,115,101,115,0);
       let membershipQ = String.fromCharCode(99,111,108,108,95,110,95,53,57,0);
         resultn = `${basketballtrophys.length ^ 1}`;
      if (resultn == String.fromCharCode(103,0)) {
         basketballtrophys += `${(resultn == String.fromCharCode(53,0) ? resultn.length : basketballtrophys.length)}`;
      }
      let awayicon5 = 9192054 >= resultn.length;
      do {
          let orangedownarrowx: Map<any, any> = new Map([[String.fromCharCode(120,95,52,51,95,105,109,108,116,0),397], [String.fromCharCode(115,97,109,112,108,101,115,95,55,95,49,51,0),304], [String.fromCharCode(118,95,57,51,95,115,99,97,108,101,100,99,111,110,118,111,108,118,101,0),501]]);
          let window_sw = 2;
          let iconpipexpandr = 4.0;
          let morep: Array<any> = [239, 745, 325];
         resultn = `${parseInt(`${iconpipexpandr}`)}`;
         orangedownarrowx.set(`${window_sw}`, window_sw - 1);
         iconpipexpandr -= morep.length;
         morep = [morep.length];
         if (awayicon5) {
            break;
         }
      } while (awayicon5 && (2 < resultn.length || basketballtrophys != String.fromCharCode(88,0)));
      let bodanE = resultn.length <= 7575024;
      do {
         resultn += `${(basketballtrophys == String.fromCharCode(98,0) ? basketballtrophys.length : resultn.length)}`;
         if (bodanE) {
            break;
         }
      } while ((membershipQ != String.fromCharCode(53,0)) && bodanE);
      let adultq = basketballtrophys == String.fromCharCode(106,110,113,121,49,54,0);
      do {
          let stringo = String.fromCharCode(100,101,110,105,101,100,95,98,95,49,48,48,0);
          let pressureE = 0.0;
          let subsW = 2.0;
          let giftbuttonM = 5;
          let agreementU = 2.0;
         basketballtrophys += `${(String.fromCharCode(49,0) == resultn ? resultn.length : giftbuttonM)}`;
         stringo += `${parseInt(`${agreementU}`) << (Math.min(5, Math.abs(2)))}`;
         pressureE *= 1 / (Math.max(1, parseInt(`${subsW}`)));
         subsW += 1;
         giftbuttonM += parseInt(`${subsW}`) << (Math.min(stringo.length, 1));
         agreementU += parseFloat(`${1 | stringo.length}`);
         if (adultq) {
            break;
         }
      } while ((2 < membershipQ.length) && adultq);
          let terms5: Array<any> = [String.fromCharCode(109,112,111,110,95,110,95,54,52,0), String.fromCharCode(110,95,54,57,95,98,108,117,101,0)];
         resultn += `${terms5.length}`;
         resultn += `${basketballtrophys.length | 1}`;
         membershipQ = `${membershipQ.length / 3}`;
       let fullW = String.fromCharCode(102,105,108,101,110,97,109,101,115,95,119,95,50,49,0);
       let taiwanr = String.fromCharCode(110,95,56,53,95,122,111,111,109,0);
      borderlesse = String.fromCharCode(103,0) == resultn;
      break;
   }
      rocketq += `${videobufferloading9.length}`;
   for (let v = 0; v < 2; v++) {
       let whitetickX = String.fromCharCode(114,101,102,101,114,114,97,108,95,101,95,57,52,0);
       let statsnomoredatau: Map<any, any> = new Map([[String.fromCharCode(114,103,98,97,95,119,95,50,56,0),118], [String.fromCharCode(102,95,54,57,95,103,114,111,119,116,104,0),640], [String.fromCharCode(115,95,57,56,0),782]]);
       let uploadR: Array<any> = [674, 798, 92];
       let whistleorangeY = String.fromCharCode(99,95,49,48,48,95,97,118,103,115,97,100,0);
          let navigation8: Array<any> = [604, 20];
          let actionsK: Map<any, any> = new Map([[String.fromCharCode(112,95,56,57,95,114,103,116,99,0),917], [String.fromCharCode(115,112,100,105,102,95,113,95,54,51,0),885]]);
         statsnomoredatau.set(`${uploadR.length}`, statsnomoredatau.size);
         navigation8 = [3];
         actionsK = new Map([[`${actionsK.size}`, 1 - actionsK.size]]);
         whistleorangeY = `${uploadR.length & whistleorangeY.length}`;
       let save3 = 3.0;
       let profileV = 4.0;
      while (profileV < parseFloat(`${uploadR.length}`)) {
         uploadR = [2 ^ whistleorangeY.length];
         break;
      }
      while (2 == (5 / (Math.max(9, uploadR.length))) && (5 / (Math.max(5, whistleorangeY.length))) == 3) {
         uploadR.push(statsnomoredatau.size);
         break;
      }
         whistleorangeY = `${whitetickX.length / (Math.max(2, whistleorangeY.length))}`;
          let libswscaleS: Array<any> = [850, 181, 529];
         uploadR = [statsnomoredatau.size];
         libswscaleS = [libswscaleS.length * 1];
      for (let x = 0; x < 3; x++) {
         whistleorangeY += `${parseInt(`${profileV}`)}`;
      }
         save3 /= Math.max(parseFloat(`${2}`), 5);
      for (let c = 0; c < 2; c++) {
         save3 += parseFloat(`${uploadR.length}`);
      }
       let dataQ: Array<any> = [283, 462, 406];
      if (1.84 < (2.77 + profileV)) {
         profileV /= Math.max(4, parseFloat(`${whitetickX.length % 2}`));
      }
      networkI = `${videobufferloading9.length ^ whitetickX.length}`;
   }

    if (banner) {

   if (videobufferloading9.startsWith(rocketq)) {
       let fastforwardT = 3;
       let valuesf = String.fromCharCode(100,101,99,107,108,105,110,107,95,118,95,52,49,0);
       let nbatrophyh = false;
       let basev = false;
         nbatrophyh = !valuesf.includes(`${basev}`);
      while ((fastforwardT % 3) <= 1) {
         valuesf = `${fastforwardT * 2}`;
         break;
      }
      let videobufferloadingF = 8037682 >= fastforwardT;
      do {
         fastforwardT <<= Math.min(2, Math.abs(1));
         if (videobufferloadingF) {
            break;
         }
      } while ((valuesf.length <= fastforwardT) && videobufferloadingF);
          let whiteticky = String.fromCharCode(121,95,53,56,95,99,117,114,108,0);
          let redscoreballF = 3.0;
          let libreactV = String.fromCharCode(98,111,117,110,100,95,56,95,49,53,0);
         fastforwardT *= parseInt(`${redscoreballF}`) / 1;
         whiteticky = `${(String.fromCharCode(97,0) == whiteticky ? libreactV.length : whiteticky.length)}`;
         redscoreballF -= whiteticky.length;
         libreactV = `${(whiteticky == String.fromCharCode(101,0) ? libreactV.length : whiteticky.length)}`;
         nbatrophyh = fastforwardT < 57;
      videobufferloading9 += `${networkI.length + 3}`;
   }
   while ((rocketq.length * 5) >= 5 && 5 >= (rocketq.length - parseInt(`${gifgoale}`))) {
       let topicL = String.fromCharCode(109,111,118,101,112,97,103,101,95,122,95,57,55,0);
       let closeZ = 5.0;
       let downloadingt = false;
       let livec = 4.0;
       let controls0 = true;
       let modules_ = String.fromCharCode(98,101,115,115,101,108,95,112,95,55,54,0);
      for (let e = 0; e < 3; e++) {
          let blacklistW: Array<any> = [169, 511];
         livec *= (parseFloat(`${(downloadingt ? 3 : 2) * (controls0 ? 4 : 5)}`));
         blacklistW.push(blacklistW.length);
      }
         controls0 = topicL.length >= 50;
      if (livec <= parseFloat(`${modules_.length}`)) {
          let borderlesss = 4.0;
         modules_ = `${3 + parseInt(`${closeZ}`)}`;
         borderlesss /= Math.max(parseInt(`${borderlesss}`) >> (Math.min(1, Math.abs(parseInt(`${borderlesss}`)))), 5);
      }
      while (downloadingt || controls0) {
         controls0 = 95.82 < livec;
         break;
      }
      if (!downloadingt) {
          let animationQ = String.fromCharCode(117,95,50,56,95,103,101,110,101,114,105,99,115,0);
         controls0 = downloadingt;
         animationQ += `${animationQ.length | 3}`;
      }
          let anythinkS = 2.0;
          let internetX = String.fromCharCode(101,120,97,99,116,108,121,95,116,95,49,54,0);
         downloadingt = topicL.length > 17;
         anythinkS *= parseFloat(`${3 ^ parseInt(`${anythinkS}`)}`);
         internetX += `${internetX.length}`;
      let backwhiteF = modules_ == String.fromCharCode(98,100,111,104,108,51,56,120,0);
      do {
         modules_ += `${((downloadingt ? 3 : 5) | topicL.length)}`;
         if (backwhiteF) {
            break;
         }
      } while (backwhiteF && (modules_.length > 2));
          let catalog9 = String.fromCharCode(102,111,114,109,97,110,116,95,102,95,56,48,0);
         topicL += `${(parseInt(`${closeZ}`) * (downloadingt ? 2 : 3))}`;
         catalog9 = `${catalog9.length | catalog9.length}`;
      let member9 = closeZ <= 6789798.0;
      do {
         closeZ -= (modules_ == String.fromCharCode(113,0) ? (controls0 ? 4 : 4) : modules_.length);
         if (member9) {
            break;
         }
      } while (member9 && (2 > (parseInt(`${closeZ}`) * topicL.length) || (topicL.length * parseInt(`${closeZ}`)) > 2));
          let send4 = 0.0;
          let flyerC = 3;
          let rncoreb = String.fromCharCode(113,117,97,110,116,105,122,101,114,95,118,95,56,0);
         controls0 = !modules_.endsWith(`${send4}`);
         send4 += (rncoreb == String.fromCharCode(106,0) ? flyerC : rncoreb.length);
         flyerC %= Math.max(2, 1 ^ rncoreb.length);
      for (let b = 0; b < 2; b++) {
         downloadingt = !modules_.includes(`${livec}`);
      }
       let reddownarrowG = String.fromCharCode(103,105,102,115,95,55,95,49,57,0);
       let searchn = String.fromCharCode(99,111,111,114,100,105,110,97,116,105,111,110,95,97,95,50,49,0);
         downloadingt = 33 == topicL.length;
       let eabafadfadddbafeddddeeefeaafa = String.fromCharCode(115,117,98,99,101,108,95,120,95,55,50,0);
      rocketq += `${((liveb ? 2 : 4))}`;
      break;
   }
      rewardvideoy.push(2);
      networkI += "3";
      subbasketballplayer5 += 1 * downloadX.length;
      setBannerAd(banner);

   if ((2 * parseInt(`${subbasketballplayer5}`)) == 5 && 2 == (parseInt(`${subbasketballplayer5}`) * videobufferloading9.length)) {
      videobufferloading9 += `${(rewardvideoy.length << (Math.min(3, Math.abs((borderlesse ? 3 : 2)))))}`;
   }
       let anytime5 = false;
       let liveX = 0.0;
         anytime5 = liveX == 26.79 || anytime5;
         liveX -= (parseFloat(`${parseInt(`${liveX}`) & (anytime5 ? 2 : 4)}`));
      for (let c = 0; c < 1; c++) {
         anytime5 = 20.91 >= liveX;
      }
       let sport6: Array<any> = [String.fromCharCode(117,95,50,54,95,103,117,116,115,0), String.fromCharCode(102,95,52,50,95,103,117,105,100,101,115,0), String.fromCharCode(103,95,53,55,95,100,105,115,112,111,115,105,116,105,111,110,0)];
       let sheetS: Array<any> = [689, 850, 287];
          let emojik = 0.0;
          let awayP = false;
          let footballfiledlayoutj = String.fromCharCode(114,95,54,48,95,116,100,101,99,111,100,101,0);
         anytime5 = awayP;
         emojik -= footballfiledlayoutj.length | 2;
         footballfiledlayoutj = `${2 % (Math.max(6, footballfiledlayoutj.length))}`;
         sheetS.push((3 - (anytime5 ? 3 : 4)));
      liveb = !networkI.endsWith(`${liveb}`);
       let calendarx = 2;
       let checkboxb = 5.0;
       let catagoryR = String.fromCharCode(116,114,97,110,115,102,101,114,95,122,95,48,0);
         calendarx %= Math.max(calendarx, 5);
          let iconuserG = 4.0;
          let encryptorC = String.fromCharCode(108,97,118,102,117,116,105,108,115,95,110,95,54,51,0);
          let iconsubssuccess8 = 5;
         calendarx += parseInt(`${checkboxb}`);
         iconuserG -= parseFloat(`${parseInt(`${iconuserG}`) >> (Math.min(encryptorC.length, 5))}`);
         encryptorC = `${(String.fromCharCode(117,0) == encryptorC ? encryptorC.length : iconsubssuccess8)}`;
         iconsubssuccess8 += encryptorC.length ^ iconsubssuccess8;
      while (5.41 >= (catagoryR.length + checkboxb) || 5.41 >= (checkboxb + catagoryR.length)) {
         checkboxb /= Math.max(catagoryR.length, 3);
         break;
      }
      while (!catagoryR.includes(`${checkboxb}`)) {
          let backwhiteb = 4.0;
          let liveshareA: Array<any> = [538, 818];
         checkboxb /= Math.max((String.fromCharCode(83,0) == catagoryR ? catagoryR.length : parseInt(`${backwhiteb}`)), 2);
         backwhiteb -= parseFloat(`${liveshareA.length / 2}`);
         liveshareA = [liveshareA.length << (Math.min(Math.abs(3), 2))];
         break;
      }
       let condensed0 = 5.0;
       let middleK = 0.0;
      while (parseInt(`${middleK}`) < catagoryR.length) {
         catagoryR += `${catagoryR.length}`;
         break;
      }
          let less5 = String.fromCharCode(111,119,110,115,95,97,95,56,51,0);
          let crossH = 2;
         middleK -= parseInt(`${condensed0}`);
         less5 += `${crossH}`;
         crossH &= crossH;
          let dependenciesh = 2;
          let zhengpianQ: Map<any, any> = new Map([[String.fromCharCode(97,95,57,56,95,109,97,105,108,99,104,105,109,112,0),false ], [String.fromCharCode(110,95,52,52,95,112,111,108,121,108,105,110,101,0),true ], [String.fromCharCode(108,115,112,102,95,49,95,51,52,0),false ]]);
          let libmapbufferjniP: Array<any> = [String.fromCharCode(114,95,54,49,95,108,111,99,97,116,105,111,110,115,0), String.fromCharCode(104,95,56,51,95,111,114,103,97,110,105,122,97,116,105,111,110,0)];
         middleK -= parseInt(`${middleK}`) / (Math.max(10, libmapbufferjniP.length));
         dependenciesh += zhengpianQ.size;
         zhengpianQ = new Map([[`${zhengpianQ.size}`, 1]]);
         libmapbufferjniP.push(1 + dependenciesh);
      let notificationk = 9204541.0 <= checkboxb;
      do {
         checkboxb *= parseInt(`${middleK}`);
         if (notificationk) {
            break;
         }
      } while (notificationk && (3.39 == (checkboxb / 3.45)));
      indicatorG *= (String.fromCharCode(80,0) == networkI ? parseInt(`${checkboxb}`) : networkI.length);
   let libbufferc = String.fromCharCode(95,112,106,97,121,106,0) == networkI;
   do {
       let baselineg = 0;
       let formN: Map<any, any> = new Map([[String.fromCharCode(104,95,49,56,95,112,117,116,105,110,116,0),956], [String.fromCharCode(100,120,118,97,95,53,95,54,49,0),572], [String.fromCharCode(116,111,107,101,110,110,102,116,116,120,95,105,95,56,57,0),539]]);
         formN = new Map([[`${formN.size}`, formN.size]]);
         formN = new Map([[`${formN.size}`, formN.size - 3]]);
         baselineg >>= Math.min(Math.abs(3), 5);
      for (let j = 0; j < 3; j++) {
         formN = new Map([[`${formN.size}`, baselineg]]);
      }
         formN.set(`${baselineg}`, 3 % (Math.max(1, baselineg)));
         formN = new Map([[`${formN.size}`, formN.size]]);
      networkI = `${1 | parseInt(`${awayV}`)}`;
      if (libbufferc) {
         break;
      }
   } while (libbufferc && (networkI.length > 4));
   let faviconV = resultx.size <= 8779102;
   do {
      resultx.set(`${downloadX}`, resultx.size & 2);
      if (faviconV) {
         break;
      }
   } while (faviconV && (liveb));
      setBannerAdList(bannerList);
    } else {

      gifgoale -= parseInt(`${subbasketballplayer5}`) / (Math.max(downloadX.length, 5));
   let internet8 = String.fromCharCode(117,54,114,57,95,0) == networkI;
   do {
      networkI = "2";
      if (internet8) {
         break;
      }
   } while ((networkI.startsWith(`${liveb}`)) && internet8);
   for (let q = 0; q < 3; q++) {
      borderlesse = rewardvideoy.includes(liveb);
   }
      networkI += `${downloadX.length}`;
      indicatorG *= rewardvideoy.length << (Math.min(Math.abs(3), 5));
      setBannerAd(undefined);

   for (let g = 0; g < 3; g++) {
      rewardvideoy.push((networkI == String.fromCharCode(98,0) ? parseInt(`${awayV}`) : networkI.length));
   }
   let target2 = videobufferloading9 == String.fromCharCode(110,102,51,110,122,106,109,111,55,0);
   do {
       let libnmsn = String.fromCharCode(101,95,49,52,95,111,118,101,114,108,97,121,115,0);
       let libnms3: Map<any, any> = new Map([[String.fromCharCode(121,95,51,54,95,106,107,101,110,99,0),true ], [String.fromCharCode(111,95,56,95,101,116,104,101,114,115,99,97,110,0),false ], [String.fromCharCode(100,95,51,56,95,117,115,101,114,115,112,97,99,101,0),true ]]);
       let controlC = 5.0;
       let iconarrowrightt = String.fromCharCode(100,101,102,105,110,101,95,108,95,51,54,0);
      if (libnmsn.length >= 1) {
         libnmsn = `${(String.fromCharCode(84,0) == libnmsn ? libnmsn.length : libnms3.size)}`;
      }
       let rank2 = 2;
          let vietnams = String.fromCharCode(107,95,50,55,95,100,105,97,108,108,105,110,103,0);
         controlC /= Math.max(4, iconarrowrightt.length);
         vietnams = `${vietnams.length}`;
         iconarrowrightt = `${(String.fromCharCode(71,0) == libnmsn ? rank2 : libnmsn.length)}`;
      for (let v = 0; v < 1; v++) {
         libnmsn += `${parseInt(`${controlC}`) | libnms3.size}`;
      }
         libnms3.set(`${libnmsn}`, libnmsn.length);
      if (controlC == rank2) {
         rank2 -= rank2 | 1;
      }
      while ((parseInt(`${controlC}`) + iconarrowrightt.length) == 4 || (4 % (Math.max(9, iconarrowrightt.length))) == 1) {
         controlC -= (String.fromCharCode(55,0) == iconarrowrightt ? iconarrowrightt.length : libnms3.size);
         break;
      }
         iconarrowrightt = "2";
          let style_ = 2.0;
          let policyy = String.fromCharCode(117,95,56,49,95,100,114,98,103,0);
         libnmsn = `${2 >> (Math.min(1, Math.abs(parseInt(`${controlC}`))))}`;
         style_ *= parseFloat(`${parseInt(`${style_}`) ^ policyy.length}`);
         policyy = "1";
          let layouth: Map<any, any> = new Map([[String.fromCharCode(98,117,102,95,107,95,50,54,0),870], [String.fromCharCode(104,119,97,101,115,95,103,95,56,48,0),299]]);
          let basketballmatchdetailbgF = String.fromCharCode(112,95,57,51,95,97,114,103,117,109,101,110,116,0);
          let greyX: Array<any> = [888, 619];
         controlC /= Math.max(5, 1);
         layouth = new Map([[`${layouth.size}`, basketballmatchdetailbgF.length + 1]]);
         basketballmatchdetailbgF += "1";
         greyX = [1];
      if (5 >= libnms3.size) {
         libnms3 = new Map([[`${controlC}`, libnmsn.length >> (Math.min(Math.abs(1), 2))]]);
      }
      videobufferloading9 += `${(rocketq == String.fromCharCode(107,0) ? parseInt(`${gifgoale}`) : rocketq.length)}`;
      if (target2) {
         break;
      }
   } while (target2 && (!videobufferloading9.startsWith(`${binddatasd.length}`)));
   let uimanager6 = subbasketballplayer5 <= 7953596.0;
   do {
      subbasketballplayer5 *= 2 & rocketq.length;
      if (uimanager6) {
         break;
      }
   } while (uimanager6 && (1 <= (indicatorG + parseInt(`${subbasketballplayer5}`)) || (indicatorG + parseInt(`${subbasketballplayer5}`)) <= 1));
      networkI = "3";
   while ((5 << (Math.min(4, Math.abs(indicatorG)))) > 3 || (rocketq.length << (Math.min(3, Math.abs(indicatorG)))) > 5) {
      indicatorG ^= 2;
      break;
   }
      setBannerAdList([]);
    }
  }

  useEffect(() => {
    fetchData().then();
  }, []);

  const shouldShowAds = async () => {
       let service3 = String.fromCharCode(98,117,108,108,101,116,95,111,95,50,50,0);
    let cedbadcebfbfbfbcfecbcA = String.fromCharCode(121,95,56,54,95,115,112,114,101,97,100,0);
    let privilegev = 3;
    let cross9 = String.fromCharCode(102,95,56,49,95,112,114,111,99,101,101,100,0);
    let materialu: Map<any, any> = new Map([[String.fromCharCode(122,95,55,51,95,115,116,114,105,110,103,115,0),393], [String.fromCharCode(114,95,52,49,95,114,109,115,116,114,101,97,109,0),793]]);
    let scorepopsoundv = 1.0;
    let catalog1: Array<any> = [513, 511];
    let tumbnailu = 3.0;
    let private_nU = true;
    let bing9 = 4;
    let yellowanimationlive0: Array<any> = [184, 65, 744];
    let telemetryu = String.fromCharCode(119,95,57,95,97,98,99,115,0);
    let libfbjnik = 4.0;
    let serviceK: Map<any, any> = new Map([[String.fromCharCode(97,116,116,101,109,112,116,95,53,95,51,0),String.fromCharCode(121,95,55,54,95,114,101,118,111,107,101,100,0)], [String.fromCharCode(104,95,51,57,95,109,101,114,103,101,0),String.fromCharCode(102,95,52,48,95,101,118,101,114,0)]]);
    let orangeuparrowd: Map<any, any> = new Map([[String.fromCharCode(97,95,50,95,112,101,114,105,111,100,105,99,0),322], [String.fromCharCode(99,97,110,111,110,105,99,97,108,95,54,95,56,51,0),512]]);
    let playn = 4.0;
    let sourceI = 3.0;
    let videoh = String.fromCharCode(100,95,57,54,95,101,114,114,110,111,0);
      cross9 += `${(String.fromCharCode(50,0) == telemetryu ? telemetryu.length : (private_nU ? 1 : 4))}`;
      materialu.set(cross9, 2);
   for (let g = 0; g < 2; g++) {
      service3 += `${(String.fromCharCode(109,0) == telemetryu ? parseInt(`${tumbnailu}`) : telemetryu.length)}`;
   }
      private_nU = service3.startsWith(`${bing9}`);
      cross9 += `${bing9 % 2}`;
   let dialogh = cedbadcebfbfbfbcfecbcA == String.fromCharCode(95,55,99,120,108,110,116,99,111,0);
   do {
      cedbadcebfbfbfbcfecbcA = "1";
      if (dialogh) {
         break;
      }
   } while (dialogh && (1 <= (3 % (Math.max(2, yellowanimationlive0.length))) || (yellowanimationlive0.length % (Math.max(cedbadcebfbfbfbcfecbcA.length, 10))) <= 3));
      yellowanimationlive0 = [service3.length ^ parseInt(`${tumbnailu}`)];
      catalog1 = [bing9];

    if (!isVip) {

   while (5 == (privilegev ^ telemetryu.length) && 5 == (privilegev ^ telemetryu.length)) {
       let sharedc = String.fromCharCode(108,95,53,53,95,121,117,118,109,111,110,111,0);
       let penaltyshootz = String.fromCharCode(101,95,56,53,95,100,101,109,117,120,101,114,0);
       let singaporea = 5;
         penaltyshootz = `${(String.fromCharCode(71,0) == penaltyshootz ? penaltyshootz.length : sharedc.length)}`;
          let recommendationM: Array<any> = [134, 355, 890];
          let placeholderf = 2.0;
          let imagemanagerT = 3.0;
         singaporea &= 1;
         recommendationM = [recommendationM.length];
         placeholderf += parseFloat(`${1 % (Math.max(1, parseInt(`${placeholderf}`)))}`);
         imagemanagerT *= parseFloat(`${parseInt(`${placeholderf}`)}`);
          let analytic8 = String.fromCharCode(108,95,57,57,95,99,104,105,114,112,0);
          let libruntimeexecutorS = String.fromCharCode(112,101,101,114,105,100,95,114,95,50,55,0);
          let network6 = String.fromCharCode(98,95,53,57,95,118,101,108,111,99,105,116,121,0);
         sharedc = `${sharedc.length}`;
         analytic8 = `${libruntimeexecutorS.length}`;
         libruntimeexecutorS += `${libruntimeexecutorS.length}`;
         network6 += `${1 + network6.length}`;
       let termsm = true;
          let iconj = String.fromCharCode(107,101,109,112,102,95,116,95,53,51,0);
          let whatsappS = 0.0;
         sharedc += `${iconj.length & 2}`;
         iconj = `${2 * parseInt(`${whatsappS}`)}`;
         whatsappS += parseInt(`${whatsappS}`);
      let hover0 = 5168095 <= singaporea;
      do {
         singaporea += singaporea ^ sharedc.length;
         if (hover0) {
            break;
         }
      } while (hover0 && (!penaltyshootz.startsWith(`${singaporea}`)));
      for (let a = 0; a < 3; a++) {
         penaltyshootz = `${singaporea % 1}`;
      }
         singaporea |= singaporea;
         singaporea |= 3;
      privilegev &= (3 << (Math.min(2, Math.abs((private_nU ? 3 : 4)))));
      break;
   }
      cross9 = "3";
   for (let p = 0; p < 3; p++) {
      service3 = `${service3.length ^ 3}`;
   }
      cedbadcebfbfbfbcfecbcA += `${cedbadcebfbfbfbcfecbcA.length}`;
      catalog1.push(2);
      cross9 += `${telemetryu.length}`;
      scorepopsoundv *= parseInt(`${scorepopsoundv}`) * catalog1.length;
      tumbnailu /= Math.max(3, parseFloat(`${telemetryu.length}`));
      fetchBannerAd();
    } else {

      yellowanimationlive0 = [telemetryu.length];
   let iconsaveimageF = 9185014 >= telemetryu.length;
   do {
      telemetryu = `${parseInt(`${scorepopsoundv}`)}`;
      if (iconsaveimageF) {
         break;
      }
   } while ((private_nU) && iconsaveimageF);
   for (let g = 0; g < 2; g++) {
       let playercommonD = 2.0;
      while (3.14 == (playercommonD / 2.36) || (playercommonD / 2.36) == 3.26) {
          let loading2 = String.fromCharCode(109,95,56,48,95,115,101,114,105,97,108,105,122,101,114,0);
         playercommonD /= Math.max(4, (String.fromCharCode(57,0) == loading2 ? loading2.length : parseInt(`${playercommonD}`)));
         break;
      }
         playercommonD *= parseInt(`${playercommonD}`);
      let iconarrowrightorangeV = 5101016.0 <= playercommonD;
      do {
         playercommonD *= parseInt(`${playercommonD}`);
         if (iconarrowrightorangeV) {
            break;
         }
      } while ((4.84 <= (playercommonD * playercommonD) && 2.69 <= (4.84 * playercommonD)) && iconarrowrightorangeV);
      cedbadcebfbfbfbcfecbcA = `${3 << (Math.min(Math.abs(parseInt(`${scorepopsoundv}`)), 5))}`;
   }
      yellowanimationlive0 = [cedbadcebfbfbfbcfecbcA.length];
   while (!private_nU) {
       let defaultplayerimgC = String.fromCharCode(102,97,115,116,102,105,114,115,116,112,97,115,115,95,112,95,57,48,0);
      if (defaultplayerimgC != String.fromCharCode(115,0) && defaultplayerimgC != String.fromCharCode(115,0)) {
         defaultplayerimgC += "2";
      }
      let libjsinspectorn = String.fromCharCode(52,54,97,0) == defaultplayerimgC;
      do {
         defaultplayerimgC = `${defaultplayerimgC.length & 2}`;
         if (libjsinspectorn) {
            break;
         }
      } while (libjsinspectorn && (!defaultplayerimgC.startsWith(defaultplayerimgC)));
       let basketballmatchdetailbgH = 4;
       let baiduG = 2;
      bing9 |= materialu.size;
      break;
   }
       let desci = 1.0;
       let awayo = 1.0;
       let modeli = 2.0;
         awayo *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${modeli}`)), 5))}`);
         awayo += parseFloat(`${2}`);
      cross9 += `${2 * cross9.length}`;
      desci += parseFloat(`${parseInt(`${desci}`)}`);
   while ((1 >> (Math.min(2, catalog1.length))) < 5 && 1 < (1 + catalog1.length)) {
       let typingr: Map<any, any> = new Map([[String.fromCharCode(114,112,99,95,106,95,49,51,0),581], [String.fromCharCode(120,95,55,48,95,109,97,112,112,101,114,0),149]]);
       let questN = 1.0;
       let iconsettingx = 4.0;
       let greyticks: Array<any> = [71, 717, 700];
      while (typingr.get(`${iconsettingx}`) != null) {
         iconsettingx /= Math.max(1, parseFloat(`${2}`));
         break;
      }
         greyticks.push(1);
      while ((1.80 / (Math.max(2, questN))) > 5.21 || 1 > (typingr.size % 5)) {
          let rulesi: Map<any, any> = new Map([[String.fromCharCode(113,95,50,54,95,98,111,117,110,99,105,110,103,0),330], [String.fromCharCode(114,111,117,116,105,110,101,115,95,115,95,52,55,0),649], [String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,95,116,95,52,57,0),637]]);
          let materiali: Map<any, any> = new Map([[String.fromCharCode(111,95,57,57,95,108,101,97,102,110,111,100,101,0),748], [String.fromCharCode(115,95,57,48,95,116,104,97,116,0),475]]);
         questN /= Math.max(parseFloat(`${3 & typingr.size}`), 2);
         rulesi.set(`${materiali.size}`, materiali.size << (Math.min(Math.abs(rulesi.size), 1)));
         break;
      }
         iconsettingx *= parseFloat(`${1}`);
         typingr = new Map([[`${typingr.size}`, typingr.size % (Math.max(2, 1))]]);
         iconsettingx += parseFloat(`${typingr.size % 3}`);
      for (let m = 0; m < 2; m++) {
         questN -= parseFloat(`${2}`);
      }
      let libcrashsdkX = 9175522.0 <= iconsettingx;
      do {
          let stringk = String.fromCharCode(106,95,49,95,116,114,97,110,115,112,97,114,101,110,116,0);
         iconsettingx /= Math.max(2, parseFloat(`${greyticks.length * parseInt(`${iconsettingx}`)}`));
         stringk = `${1 + stringk.length}`;
         if (libcrashsdkX) {
            break;
         }
      } while (libcrashsdkX && ((greyticks.length >> (Math.min(Math.abs(5), 5))) == 4));
      catalog1 = [(2 >> (Math.min(2, Math.abs((private_nU ? 1 : 1)))))];
      break;
   }
   while ((materialu.size - 3) >= 1 && materialu.size >= 3) {
      materialu.set(service3, bing9);
      break;
   }
      setBannerAd(undefined);

   while (1 == (3 + telemetryu.length) && (5.1 - scorepopsoundv) == 5.60) {
      telemetryu += `${1 / (Math.max(9, service3.length))}`;
      break;
   }
   while (!private_nU) {
       let context1 = 3;
       let dangerx = String.fromCharCode(108,95,52,95,112,114,105,109,97,108,105,116,121,0);
       let y_titleC: Map<any, any> = new Map([[String.fromCharCode(97,118,97,116,97,114,115,95,108,95,54,50,0),378], [String.fromCharCode(117,95,57,53,95,98,110,99,98,98,0),370], [String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,95,122,95,57,54,0),877]]);
       let predictiondefaulto: Array<any> = [997, 423];
      if (!Array.from(y_titleC.keys()).includes(`${predictiondefaulto.length}`)) {
         y_titleC = new Map([[`${y_titleC.size}`, dangerx.length + y_titleC.size]]);
      }
      let teamdetailsbgq = 8059286 >= context1;
      do {
         context1 ^= predictiondefaulto.length << (Math.min(5, Math.abs(y_titleC.size)));
         if (teamdetailsbgq) {
            break;
         }
      } while ((5 < dangerx.length) && teamdetailsbgq);
       let selecte: Array<any> = [724, 443, 501];
          let sound2 = 1.0;
         y_titleC.set(dangerx, 3 / (Math.max(8, selecte.length)));
         sound2 += 2 << (Math.min(Math.abs(parseInt(`${sound2}`)), 3));
      if ((5 & selecte.length) >= 3 || 2 >= (5 & selecte.length)) {
         selecte = [dangerx.length];
      }
      for (let m = 0; m < 1; m++) {
          let iconorientationv: Map<any, any> = new Map([[String.fromCharCode(117,110,109,97,112,102,105,108,101,95,120,95,54,54,0),899], [String.fromCharCode(100,95,52,56,95,118,105,98,114,97,116,105,111,110,0),416]]);
          let expands = String.fromCharCode(107,95,51,57,95,99,111,108,108,101,99,116,0);
          let become0 = String.fromCharCode(100,95,56,50,95,109,105,110,0);
          let settings1 = 0.0;
          let balls = String.fromCharCode(100,105,109,101,110,115,105,111,110,115,95,57,95,53,56,0);
         dangerx += `${become0.length}`;
         iconorientationv.set(`${settings1}`, (String.fromCharCode(54,0) == balls ? balls.length : parseInt(`${settings1}`)));
         expands += `${(String.fromCharCode(101,0) == expands ? expands.length : iconorientationv.size)}`;
         become0 += `${parseInt(`${settings1}`)}`;
      }
         dangerx = `${dangerx.length + 2}`;
      let streamingM = y_titleC.size >= 8557955;
      do {
          let launch0 = 2;
          let footballb: Map<any, any> = new Map([[String.fromCharCode(108,95,49,52,95,111,108,100,101,115,116,0),true ], [String.fromCharCode(107,95,52,49,95,112,114,117,110,105,110,103,0),false ]]);
          let layoutv = 0.0;
         y_titleC.set(`${context1}`, context1);
         launch0 *= footballb.size ^ 3;
         footballb = new Map([[`${launch0}`, parseInt(`${layoutv}`)]]);
         layoutv /= Math.max(1, 2);
         if (streamingM) {
            break;
         }
      } while ((y_titleC.get(`${selecte.length}`) == null) && streamingM);
          let bellg: Map<any, any> = new Map([[String.fromCharCode(107,95,56,49,95,108,105,115,116,115,0),true ], [String.fromCharCode(99,110,116,95,120,95,54,50,0),true ]]);
         dangerx += "2";
         bellg.set(`${bellg.size}`, bellg.size % 3);
      if (dangerx.endsWith(`${selecte.length}`)) {
         dangerx = `${predictiondefaulto.length << (Math.min(selecte.length, 4))}`;
      }
       let footballZ = 5;
      if (!dangerx.endsWith(`${y_titleC.size}`)) {
         y_titleC.set(`${context1}`, context1);
      }
      private_nU = materialu.size < 27;
      break;
   }
      bing9 += parseInt(`${scorepopsoundv}`) * yellowanimationlive0.length;
      tumbnailu /= Math.max(1, (parseFloat(`${materialu.size / (Math.max(3, (private_nU ? 3 : 2)))}`)));
      telemetryu += `${materialu.size | parseInt(`${tumbnailu}`)}`;
       let baseb: Array<any> = [String.fromCharCode(100,95,52,49,95,116,119,111,0), String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,95,109,95,51,48,0)];
         baseb.push(baseb.length - baseb.length);
      while (5 < (baseb.length ^ 3)) {
         baseb.push(2);
         break;
      }
      while (baseb.includes(baseb.length)) {
          let previewT = 5.0;
          let hometeamfieldp = 1.0;
          let shareF = true;
          let privilegeJ = 2.0;
          let castA = 3;
         baseb.push(parseInt(`${privilegeJ}`));
         previewT *= (parseFloat(`${(shareF ? 5 : 5) + parseInt(`${hometeamfieldp}`)}`));
         hometeamfieldp += parseFloat(`${parseInt(`${previewT}`)}`);
         shareF = 50.40 >= previewT;
         privilegeJ *= 3 >> (Math.min(Math.abs(parseInt(`${hometeamfieldp}`)), 2));
         castA %= Math.max(((shareF ? 2 : 5) ^ castA), 1);
         break;
      }
      libfbjnik *= parseFloat(`${1 * parseInt(`${libfbjnik}`)}`);
      service3 += `${yellowanimationlive0.length}`;
   while (bing9 < cross9.length) {
      cross9 += `${telemetryu.length}`;
      break;
   }
      setBannerAdList([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [isVip])
  );

  const Content = ({
    item,
    index,
  }: {
    item: { date: string | undefined; data: mayi_Default | undefined };
    index: number;
  }) => {

    return (
      <View style={{ width: "100%" }}>
        {item?.date !== undefined ? (
          <View
            style={{
              backgroundColor: bgDark ? "#0c0c0c" : colors.card2,
              padding: spacing.xs,
              paddingLeft: spacing.sideOffset,
              borderTopLeftRadius: index == 0 && !isLive ? 0 : 15,
              borderTopRightRadius: index == 0 && !isLive ? 0 : 15,
              marginTop: index == 0 ? 0 : 20,
              position: "relative",
            }}
          >
            <Text style={textVariants.header}>{item?.date}</Text>
          </View>
        ) : (
          item?.data !== undefined && (
            <>
              {/* <Text>{String((matches?.data.length > (index + 1) && matches?.data[index+1]?.date !== undefined ) || (matches?.data.length == index+1 ) )}</Text> */}
              <MatchScheduleVip
                borderFlag={String(
                  (matches?.data.length >= index + 1 &&
                    matches?.data[index + 1]?.date !== undefined) ||
                  matches?.data.length == index + 1
                )}
                bgDark={true}
                setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                key={index}
                matchSche={item?.data}
              />

              {(index + 1) % 5 === 0 && bannerAd && bannerAdList.length > 0 && (
                <View style={{
                  paddingVertical: 5
                }}>
                  <BannerContainer
                    bannerAd={bannerAdList[Math.floor(Math.random() * bannerAdList.length)]}
                    onMount={({ id, name, slot_id, title }) => {
                      mayi_push.sportBannerViewAnalytics({
                        ads_id: id,
                        ads_name: name,
                        ads_slot_id: slot_id,
                        ads_title: title,
                      });
                    }}
                    onPress={({ id, name, slot_id, title }) => {
                      mayi_push.sportBannerClickAnalytics({
                        ads_id: id,
                        ads_name: name,
                        ads_slot_id: slot_id,
                        ads_title: title,
                      });
                    }}
                  />
                </View>

              )}
            </>
          )
        )}
      </View>
    );
  };

  const handleRefresh = () => {
       let yellowanimationliveL = String.fromCharCode(120,95,52,49,95,112,111,121,116,109,0);
    let penaltyR = String.fromCharCode(100,101,99,111,100,101,120,95,115,95,55,0);
    let dragv = false;
    let nativeQ = String.fromCharCode(97,105,109,100,95,120,95,56,50,0);
    let toponw = String.fromCharCode(110,95,51,51,95,112,101,114,105,111,100,115,0);
    let runtimed = String.fromCharCode(103,95,53,57,95,107,97,116,0);
    let splashV = String.fromCharCode(101,95,52,53,95,112,97,110,111,114,97,109,97,0);
    let fieldq = String.fromCharCode(114,117,98,121,95,115,95,55,48,0);
    let issubt = 4;
    let infoE: Array<any> = [961, 500];
    let soundX = String.fromCharCode(107,95,51,54,95,115,116,114,116,111,107,0);
    let bgvipxvodG = 2.0;
    let temperaturev = 3.0;
   while (toponw.length < 2) {
      toponw = "1";
      break;
   }
      nativeQ = `${soundX.length}`;
   let fileZ = runtimed.length <= 6459604;
   do {
       let securityc = true;
       let mbridgeC: Map<any, any> = new Map([[String.fromCharCode(120,95,55,51,95,99,111,109,112,108,101,116,101,0),String.fromCharCode(100,95,56,57,95,116,101,114,109,105,110,97,116,101,100,0)], [String.fromCharCode(109,97,107,101,95,104,95,56,54,0),String.fromCharCode(99,95,51,55,95,112,111,114,116,97,108,0)], [String.fromCharCode(101,95,51,55,95,112,97,114,97,109,101,116,101,114,0),String.fromCharCode(114,95,52,49,95,117,110,104,105,103,104,108,105,103,104,116,0)]]);
       let yellowz = 0.0;
       let coded = String.fromCharCode(106,95,52,55,95,102,114,111,110,116,115,105,100,101,0);
         securityc = 29.17 >= yellowz;
      let indexx = 5178629.0 <= yellowz;
      do {
         yellowz -= mbridgeC.size | 3;
         if (indexx) {
            break;
         }
      } while ((coded.includes(`${yellowz}`)) && indexx);
          let bootsplashP = String.fromCharCode(102,114,111,122,101,110,95,99,95,51,56,0);
          let libfabricjniM = 5.0;
          let libavfilter2 = String.fromCharCode(120,95,53,54,95,115,105,112,114,100,97,116,97,0);
         mbridgeC = new Map([[`${mbridgeC.size}`, ((securityc ? 4 : 4) * mbridgeC.size)]]);
         bootsplashP += `${bootsplashP.length}`;
         libfabricjniM += parseFloat(`${parseInt(`${libfabricjniM}`)}`);
         libavfilter2 += `${parseInt(`${libfabricjniM}`)}`;
      let carouselj = 9542649 <= mbridgeC.size;
      do {
         mbridgeC.set(`${yellowz}`, mbridgeC.size - 1);
         if (carouselj) {
            break;
         }
      } while ((5 <= mbridgeC.size) && carouselj);
      let weiboY = yellowz >= 9205621.0;
      do {
          let greyarrowupl = String.fromCharCode(102,105,108,108,95,107,95,53,51,0);
         yellowz *= 3 ^ greyarrowupl.length;
         if (weiboY) {
            break;
         }
      } while (weiboY && (Array.from(mbridgeC.keys()).includes(`${yellowz}`)));
       let reducer6: Array<any> = [String.fromCharCode(101,120,110,111,100,101,95,50,95,52,48,0), String.fromCharCode(114,95,54,48,95,109,97,110,105,112,117,108,97,116,101,0), String.fromCharCode(118,115,116,97,116,115,95,106,95,49,48,0)];
          let umengj = 3;
          let combineW = true;
         coded += `${umengj << (Math.min(Math.abs(mbridgeC.size), 1))}`;
         umengj /= Math.max(2, ((combineW ? 5 : 5) / (Math.max(6, (combineW ? 2 : 1)))));
      while ((1 | reducer6.length) <= 4 && reducer6.length <= 1) {
          let matchdetailbgP = 3.0;
          let debuga = false;
         reducer6.push(parseInt(`${matchdetailbgP}`) / 3);
         matchdetailbgP += parseFloat(`${1}`);
         break;
      }
      for (let b = 0; b < 2; b++) {
         yellowz -= 3;
      }
         coded += `${1 % (Math.max(2, parseInt(`${yellowz}`)))}`;
       let homeinactiveJ = false;
       let scrollvieww = true;
         coded += `${(parseInt(`${yellowz}`) & (scrollvieww ? 5 : 4))}`;
      runtimed += `${yellowanimationliveL.length}`;
      if (fileZ) {
         break;
      }
   } while (fileZ && (penaltyR == String.fromCharCode(88,0)));
   if (runtimed.length >= 1) {
      issubt -= soundX.length;
   }
      issubt %= Math.max((String.fromCharCode(112,0) == runtimed ? infoE.length : runtimed.length), 1);
   let index6 = toponw == String.fromCharCode(117,52,105,107,0);
   do {
      toponw += "1";
      if (index6) {
         break;
      }
   } while (index6 && (!toponw.includes(`${infoE.length}`)));
      infoE.push(((dragv ? 3 : 4) % (Math.max(nativeQ.length, 4))));

    setShowLoading(true);
    flatlistRef?.current?.scrollToOffset({ animated: false, offset: 0 });

    setTimeout(() => {

   if (!toponw.includes(soundX)) {
       let infos = 1.0;
       let updatesa = 3;
       let arrowrightwithtail7 = String.fromCharCode(108,105,98,97,111,109,95,50,95,52,0);
          let iconsetting5 = false;
          let belln: Map<any, any> = new Map([[String.fromCharCode(115,117,99,99,101,115,115,99,98,95,105,95,56,56,0),52], [String.fromCharCode(114,101,112,111,114,116,95,115,95,53,53,0),387], [String.fromCharCode(104,95,50,55,95,103,117,105,100,101,115,0),498]]);
          let audience5 = 4.0;
         updatesa &= 3 >> (Math.min(Math.abs(updatesa), 2));
         iconsetting5 = null == belln.get(`${iconsetting5}`);
         belln = new Map([[`${belln.size}`, belln.size]]);
         audience5 /= Math.max(5, 2 & belln.size);
      if (arrowrightwithtail7.endsWith(`${updatesa}`)) {
         updatesa -= arrowrightwithtail7.length % 3;
      }
          let hoverl: Array<any> = [707, 701];
          let libfileY = String.fromCharCode(118,120,119,111,114,107,115,95,105,95,56,48,0);
         arrowrightwithtail7 += `${arrowrightwithtail7.length & libfileY.length}`;
         hoverl.push(1 * hoverl.length);
         libfileY += `${hoverl.length}`;
         infos /= Math.max(5, parseFloat(`${parseInt(`${infos}`)}`));
         infos *= parseFloat(`${2}`);
      while (5.88 <= (infos * parseFloat(`${arrowrightwithtail7.length}`))) {
         arrowrightwithtail7 = `${updatesa}`;
         break;
      }
      let nbatrophyY = updatesa >= 9739112;
      do {
         updatesa /= Math.max(updatesa ^ 2, 2);
         if (nbatrophyY) {
            break;
         }
      } while (((1 + arrowrightwithtail7.length) <= 4) && nbatrophyY);
      while (2.94 > (2.66 + infos) && 2 > (2 * updatesa)) {
          let style0: Array<any> = [810, 175];
          let reactY: Array<any> = [999, 685, 474];
         updatesa <<= Math.min(Math.abs(2 ^ style0.length), 4);
         style0 = [reactY.length - reactY.length];
         break;
      }
         arrowrightwithtail7 += `${arrowrightwithtail7.length}`;
      soundX = `${yellowanimationliveL.length ^ 3}`;
   }
   if (!fieldq.startsWith(toponw)) {
      fieldq = "2";
   }
      issubt <<= Math.min(4, Math.abs(issubt + penaltyR.length));
       let mimeZ = 5.0;
       let libloggerM = false;
         libloggerM = !libloggerM;
      while (1.35 < mimeZ) {
          let yellowt: Map<any, any> = new Map([[String.fromCharCode(98,95,55,95,101,120,112,108,111,114,101,114,0),true ], [String.fromCharCode(98,102,114,97,109,101,115,95,122,95,53,57,0),false ], [String.fromCharCode(117,110,114,101,102,101,114,101,110,99,101,95,50,95,51,50,0),false ]]);
          let areaX = String.fromCharCode(114,102,112,115,95,51,95,53,50,0);
          let umengo = String.fromCharCode(109,95,48,95,109,101,109,115,121,115,0);
          let overlay8 = String.fromCharCode(99,114,101,97,116,105,111,110,95,100,95,52,50,0);
          let sideU = String.fromCharCode(99,111,110,110,101,99,116,115,95,112,95,56,55,0);
         libloggerM = areaX == String.fromCharCode(68,0);
         yellowt.set(overlay8, overlay8.length / (Math.max(1, 7)));
         areaX += `${(String.fromCharCode(55,0) == sideU ? sideU.length : overlay8.length)}`;
         umengo = `${overlay8.length}`;
         break;
      }
      while (libloggerM) {
          let stylesc = String.fromCharCode(109,101,97,115,117,114,101,95,105,95,53,56,0);
          let penaltyq = true;
          let cornerP: Map<any, any> = new Map([[String.fromCharCode(106,95,52,48,95,99,114,108,102,0),364], [String.fromCharCode(118,115,105,110,107,95,99,95,57,57,0),933], [String.fromCharCode(112,97,99,107,101,116,105,122,97,116,105,111,110,95,115,95,56,53,0),424]]);
         mimeZ *= stylesc.length;
         stylesc += "3";
         penaltyq = penaltyq && cornerP.size >= 15;
         cornerP = new Map([[`${cornerP.size}`, cornerP.size | 1]]);
         break;
      }
      while (2.67 == (4.82 * mimeZ)) {
          let mathp = 4;
          let middler = 4.0;
          let redscoreballv = String.fromCharCode(115,95,54,55,95,114,97,116,105,111,115,0);
         mimeZ *= ((libloggerM ? 1 : 4) / (Math.max(redscoreballv.length, 6)));
         mathp /= Math.max(mathp - parseInt(`${middler}`), 2);
         middler *= parseInt(`${middler}`);
         redscoreballv = `${parseInt(`${middler}`)}`;
         break;
      }
         mimeZ -= (parseInt(`${mimeZ}`) | (libloggerM ? 1 : 4));
         mimeZ /= Math.max(1, 3 * parseInt(`${mimeZ}`));
      dragv = nativeQ == splashV;
      penaltyR += "3";
   if (1 <= penaltyR.length) {
       let containers = String.fromCharCode(101,114,114,110,111,95,52,95,49,49,0);
       let m_playerG = 2.0;
       let condensed7: Array<any> = [270, 388];
       let downloadedq = 5.0;
      let downs = 5474936.0 >= m_playerG;
      do {
          let libswscaleS = 5.0;
          let quest7 = 2;
          let footballtrophyh = String.fromCharCode(103,95,49,54,0);
          let statsnomoredata0 = String.fromCharCode(115,117,98,116,114,97,99,116,105,111,110,95,116,95,52,52,0);
         m_playerG -= 1 | statsnomoredata0.length;
         libswscaleS *= parseFloat(`${parseInt(`${libswscaleS}`)}`);
         quest7 *= quest7;
         footballtrophyh = `${footballtrophyh.length ^ 2}`;
         statsnomoredata0 += `${3 % (Math.max(quest7, 8))}`;
         if (downs) {
            break;
         }
      } while (downs && (containers.length <= parseInt(`${m_playerG}`)));
          let china3 = 0.0;
          let homeloadingm = String.fromCharCode(116,105,100,121,95,49,95,49,49,0);
         downloadedq /= Math.max(1, parseInt(`${downloadedq}`) ^ 1);
         china3 -= parseFloat(`${parseInt(`${china3}`)}`);
         homeloadingm += `${(homeloadingm == String.fromCharCode(83,0) ? homeloadingm.length : parseInt(`${china3}`))}`;
      for (let v = 0; v < 2; v++) {
         downloadedq *= 1 >> (Math.min(1, Math.abs(parseInt(`${m_playerG}`))));
      }
      if (!containers.includes(`${downloadedq}`)) {
         downloadedq *= parseInt(`${downloadedq}`);
      }
         containers += `${containers.length << (Math.min(Math.abs(3), 2))}`;
      if (5 <= (2 ^ condensed7.length) || (parseInt(`${downloadedq}`) + condensed7.length) <= 2) {
          let favicon0 = 2;
          let uimanager7 = 0;
          let libsentryQ = 1.0;
         downloadedq /= Math.max(parseInt(`${downloadedq}`), 3);
         favicon0 %= Math.max(uimanager7, 4);
         libsentryQ += uimanager7 << (Math.min(Math.abs(favicon0), 5));
      }
         downloadedq *= (String.fromCharCode(65,0) == containers ? containers.length : parseInt(`${m_playerG}`));
         containers = `${parseInt(`${downloadedq}`) * condensed7.length}`;
         downloadedq *= (containers == String.fromCharCode(120,0) ? containers.length : parseInt(`${downloadedq}`));
       let spinnerF = String.fromCharCode(107,95,57,57,95,108,101,116,116,101,114,115,0);
       let graphicst = String.fromCharCode(97,99,99,117,109,117,108,97,116,101,95,113,95,52,50,0);
          let circleH: Array<any> = [260, 232, 285];
          let playe = 2.0;
          let rewardvideoF = 5;
         condensed7 = [spinnerF.length * 2];
         circleH = [rewardvideoF];
         playe -= 3 | parseInt(`${playe}`);
         rewardvideoF >>= Math.min(Math.abs(parseInt(`${playe}`) ^ 1), 5);
      for (let m = 0; m < 3; m++) {
          let b_unlockn = String.fromCharCode(108,95,55,49,95,99,104,97,110,0);
          let watchI = 5.0;
          let windB = 2.0;
          let reactP = 4.0;
         spinnerF += `${(String.fromCharCode(82,0) == b_unlockn ? b_unlockn.length : parseInt(`${windB}`))}`;
         watchI += parseFloat(`${1}`);
         windB /= Math.max(3, 2);
         reactP /= Math.max(1, parseInt(`${watchI}`));
      }
      penaltyR = `${(String.fromCharCode(114,0) == splashV ? toponw.length : splashV.length)}`;
   }
      issubt >>= Math.min(4, Math.abs(1));
      

      issubt &= (String.fromCharCode(73,0) == soundX ? soundX.length : fieldq.length);
       let yellowscoreballe = 4.0;
         yellowscoreballe /= Math.max(parseFloat(`${1 - parseInt(`${yellowscoreballe}`)}`), 1);
         yellowscoreballe += parseFloat(`${parseInt(`${yellowscoreballe}`) << (Math.min(4, Math.abs(1)))}`);
          let theme_ = false;
          let animationU = String.fromCharCode(112,95,55,51,95,98,117,99,107,101,116,115,0);
         yellowscoreballe *= (parseFloat(`${(theme_ ? 3 : 5) / (Math.max(9, animationU.length))}`));
      penaltyR += `${runtimed.length}`;
   for (let i = 0; i < 2; i++) {
       let regengo = 1.0;
       let pathW = 2.0;
      let ajaxL = pathW <= 5350297.0;
      do {
          let with_nqZ: Array<any> = [990, 317, 341];
         pathW += parseInt(`${regengo}`);
         with_nqZ = [with_nqZ.length & with_nqZ.length];
         if (ajaxL) {
            break;
         }
      } while (ajaxL && ((regengo / (Math.max(pathW, 8))) < 5.66));
         regengo -= parseFloat(`${parseInt(`${pathW}`)}`);
       let iconadslinkk = String.fromCharCode(100,95,57,55,95,101,114,99,0);
       let privacyi = String.fromCharCode(108,95,52,53,95,98,97,116,99,104,101,100,0);
         iconadslinkk = `${privacyi.length}`;
      for (let f = 0; f < 1; f++) {
          let profileactivel = String.fromCharCode(98,95,55,57,95,112,114,101,109,105,117,109,0);
          let detailb = true;
          let moviesV = 5.0;
          let scorepopsound0 = String.fromCharCode(119,95,51,48,0);
         privacyi = `${parseInt(`${moviesV}`) / 1}`;
         profileactivel += `${profileactivel.length + 1}`;
         detailb = profileactivel.length < 35;
         moviesV *= (scorepopsound0 == String.fromCharCode(51,0) ? scorepopsound0.length : (detailb ? 1 : 3));
      }
      for (let f = 0; f < 1; f++) {
         regengo += parseFloat(`${privacyi.length}`);
      }
      issubt /= Math.max(1, fieldq.length - 2);
   }
      soundX = `${yellowanimationliveL.length - 3}`;
   while (yellowanimationliveL.length <= 1) {
      yellowanimationliveL += `${(penaltyR == String.fromCharCode(82,0) ? (dragv ? 2 : 3) : penaltyR.length)}`;
      break;
   }
       let injuryA: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,102,108,111,119,95,103,95,51,0),624], [String.fromCharCode(108,105,102,101,116,105,109,101,95,106,95,52,53,0),1]]);
       let profilex: Array<any> = [String.fromCharCode(111,95,56,56,95,99,111,112,116,115,0), String.fromCharCode(119,95,57,56,95,99,116,111,114,0)];
       let abidetectA = String.fromCharCode(115,95,55,49,95,101,110,117,109,101,114,97,116,101,100,0);
          let reportG = String.fromCharCode(113,95,55,49,95,117,110,115,116,97,107,101,0);
          let libswresample1 = 5;
         profilex = [libswresample1];
         reportG = `${reportG.length}`;
         libswresample1 &= 3 - reportG.length;
         profilex = [1 - profilex.length];
      while (4 >= (injuryA.size * 4) || 4 >= (injuryA.size * profilex.length)) {
         profilex = [2];
         break;
      }
       let embedA = String.fromCharCode(103,95,57,56,95,98,105,116,119,114,105,116,101,114,0);
       let v_playerY = String.fromCharCode(97,99,115,107,105,112,95,56,95,50,57,0);
          let otherf = 5.0;
          let const_zT = String.fromCharCode(114,111,117,110,100,115,95,54,95,55,57,0);
          let imagesi = String.fromCharCode(115,95,53,57,95,114,97,109,112,0);
         injuryA.set(v_playerY, (String.fromCharCode(65,0) == v_playerY ? v_playerY.length : embedA.length));
         otherf /= Math.max(1, parseInt(`${otherf}`) * 1);
         const_zT += `${(const_zT == String.fromCharCode(103,0) ? parseInt(`${otherf}`) : const_zT.length)}`;
         imagesi += `${imagesi.length}`;
         abidetectA = `${1 >> (Math.min(5, abidetectA.length))}`;
         v_playerY += `${profilex.length & 2}`;
         profilex = [embedA.length ^ v_playerY.length];
          let submitQ = String.fromCharCode(114,95,51,49,95,107,101,121,112,97,116,104,115,0);
         profilex = [v_playerY.length];
         submitQ = `${(submitQ == String.fromCharCode(52,0) ? submitQ.length : submitQ.length)}`;
      soundX = `${splashV.length / (Math.max(3, 5))}`;
   let placeholderZ = soundX == String.fromCharCode(113,53,109,102,52,50,49,50,110,56,0);
   do {
      soundX = `${2 + penaltyR.length}`;
      if (placeholderZ) {
         break;
      }
   } while ((nativeQ.startsWith(soundX)) && placeholderZ);
      setShowLoading(false);
    }, 1200);
  };

  
  
  
  
  
  
  
  
  

  const handleInitialLoading = useCallback(() => {
       let hejiI: Array<any> = [723, 512];
    let history1: Array<any> = [String.fromCharCode(110,95,50,57,95,100,97,116,101,0), String.fromCharCode(100,101,102,97,117,108,116,95,119,95,56,52,0), String.fromCharCode(102,97,105,108,105,110,103,95,108,95,49,52,0)];
    let mbsplashz = String.fromCharCode(119,95,50,54,95,109,101,109,98,101,114,115,0);
    let infos = String.fromCharCode(113,95,55,54,95,97,115,116,114,111,110,111,109,105,99,97,108,0);
    let libswresampleW = String.fromCharCode(97,100,100,105,116,105,118,101,95,54,95,54,49,0);
    let circles = 2.0;
    let analyticsY = String.fromCharCode(112,95,53,50,95,108,105,98,111,112,101,110,106,112,101,103,0);
    let logout2 = String.fromCharCode(110,95,55,51,95,97,114,99,104,105,118,101,114,0);
    let issubs = String.fromCharCode(108,95,57,53,95,115,116,97,98,108,101,0);
   while (analyticsY.startsWith(`${circles}`)) {
      circles *= infos.length;
      break;
   }
   for (let a = 0; a < 2; a++) {
       let libfollyd = String.fromCharCode(105,110,102,111,114,109,97,116,105,111,110,95,109,95,52,53,0);
       let notificationk: Array<any> = [String.fromCharCode(101,95,51,50,95,100,99,97,100,99,116,0), String.fromCharCode(97,95,51,57,95,101,120,105,115,116,101,100,0)];
       let turndownz = 5.0;
       let calendary = 3;
         calendary <<= Math.min(Math.abs(parseInt(`${turndownz}`)), 2);
         calendary ^= 1;
      if ((notificationk.length | 1) > 1) {
          let halffieldimageW = 4.0;
          let dataf = String.fromCharCode(99,111,110,116,101,110,116,108,101,115,115,95,114,95,49,57,0);
          let foundW = 1.0;
          let zoomU = false;
          let starD: Array<any> = [497, 799];
         turndownz -= (parseFloat(`${String.fromCharCode(83,0) == dataf ? parseInt(`${halffieldimageW}`) : dataf.length}`));
         halffieldimageW /= Math.max((starD.length << (Math.min(1, Math.abs((zoomU ? 1 : 3))))), 3);
         foundW /= Math.max(2 ^ starD.length, 1);
         zoomU = (73 > (starD.length * (!zoomU ? 73 : starD.length)));
      }
          let gemfilei = 3;
          let stepZ = false;
         turndownz -= parseFloat(`${gemfilei / (Math.max(notificationk.length, 10))}`);
         gemfilei >>= Math.min(2, parseInt(`${Math.abs(((stepZ ? 1 : 5) % (Math.max(7, (stepZ ? 2 : 4)))))}`));
         notificationk = [libfollyd.length % 2];
         turndownz -= parseFloat(`${parseInt(`${turndownz}`) << (Math.min(libfollyd.length, 4))}`);
      while ((notificationk.length << (Math.min(libfollyd.length, 3))) >= 2 && 4 >= (notificationk.length << (Math.min(Math.abs(2), 3)))) {
          let fastforwardg = String.fromCharCode(105,95,52,50,95,101,108,115,116,0);
         notificationk.push(calendary);
         fastforwardg = "2";
         break;
      }
      let reactnativeultimatelistviewZ = 8868410.0 <= turndownz;
      do {
         turndownz /= Math.max(parseFloat(`${parseInt(`${turndownz}`)}`), 2);
         if (reactnativeultimatelistviewZ) {
            break;
         }
      } while ((turndownz >= 1.72) && reactnativeultimatelistviewZ);
      for (let s = 0; s < 2; s++) {
         turndownz += parseFloat(`${notificationk.length * 2}`);
      }
      while (4 >= (notificationk.length & 3)) {
          let iconqqM: Map<any, any> = new Map([[String.fromCharCode(98,95,52,56,95,112,97,114,101,110,116,97,103,101,0),false ], [String.fromCharCode(99,95,53,95,103,101,110,99,98,0),false ], [String.fromCharCode(99,95,53,54,95,115,110,110,105,100,0),true ]]);
         notificationk.push(3 ^ parseInt(`${turndownz}`));
         iconqqM.set(`${iconqqM.size}`, iconqqM.size / (Math.max(iconqqM.size, 5)));
         break;
      }
         libfollyd += `${parseInt(`${turndownz}`)}`;
      for (let k = 0; k < 2; k++) {
         calendary <<= Math.min(5, Math.abs(parseInt(`${turndownz}`) + 3));
      }
      analyticsY += `${history1.length - 1}`;
   }
      logout2 += `${(libswresampleW == String.fromCharCode(53,0) ? mbsplashz.length : libswresampleW.length)}`;
       let predictionbannerp = String.fromCharCode(109,105,120,101,100,95,110,95,55,54,0);
       let downarrowD = String.fromCharCode(116,101,108,101,109,101,116,114,121,95,114,95,56,49,0);
       let fastQ: Array<any> = [545, 510];
      while (downarrowD.length >= fastQ.length) {
          let android9 = String.fromCharCode(102,95,56,54,95,99,110,111,110,99,101,0);
          let videobufferloadingj = String.fromCharCode(115,95,53,53,95,108,105,99,101,110,115,101,0);
          let predictionbutton6 = String.fromCharCode(109,95,57,54,95,121,100,97,121,0);
          let mutedh: Array<any> = [163, 82, 71];
         downarrowD = `${fastQ.length}`;
         android9 = `${mutedh.length}`;
         videobufferloadingj += "3";
         predictionbutton6 += `${(String.fromCharCode(52,0) == videobufferloadingj ? android9.length : videobufferloadingj.length)}`;
         mutedh = [predictionbutton6.length & 2];
         break;
      }
          let update_7o = 1.0;
          let serviceV: Array<any> = [String.fromCharCode(98,111,117,110,100,97,114,121,95,57,95,52,51,0), String.fromCharCode(99,114,111,115,115,112,111,115,116,95,112,95,52,51,0), String.fromCharCode(111,112,116,105,111,110,115,95,121,95,52,57,0)];
         downarrowD = `${predictionbannerp.length | downarrowD.length}`;
         update_7o *= serviceV.length ^ parseInt(`${update_7o}`);
         serviceV = [2];
         fastQ = [predictionbannerp.length];
          let penaltyshootnogoalC = true;
         downarrowD += `${predictionbannerp.length % (Math.max(downarrowD.length, 1))}`;
         penaltyshootnogoalC = (penaltyshootnogoalC ? penaltyshootnogoalC : !penaltyshootnogoalC);
         fastQ = [2];
          let phonen = 1;
          let homeactivei: Map<any, any> = new Map([[String.fromCharCode(105,95,53,56,95,97,99,116,105,118,101,109,97,112,0),false ], [String.fromCharCode(108,111,99,107,105,110,103,95,118,95,52,52,0),false ]]);
         fastQ.push(downarrowD.length << (Math.min(4, predictionbannerp.length)));
         phonen %= Math.max(5, homeactivei.size);
         homeactivei.set(`${phonen}`, 1 >> (Math.min(5, Math.abs(homeactivei.size))));
         downarrowD = `${fastQ.length}`;
      while (!downarrowD.startsWith(`${predictionbannerp.length}`)) {
         downarrowD += `${(String.fromCharCode(120,0) == downarrowD ? predictionbannerp.length : downarrowD.length)}`;
         break;
      }
         fastQ.push(fastQ.length & downarrowD.length);
      circles *= libswresampleW.length + 3;
       let china2 = true;
       let iconnewsshareA = String.fromCharCode(111,95,54,54,95,115,116,114,110,105,99,109,112,0);
       let drag4 = String.fromCharCode(117,112,99,111,109,105,110,103,95,116,95,56,0);
      if (!china2 || drag4.length < 4) {
         china2 = iconnewsshareA.endsWith(`${china2}`);
      }
          let playW = String.fromCharCode(99,111,109,97,110,100,95,105,95,56,51,0);
          let iconpipexpandS: Map<any, any> = new Map([[String.fromCharCode(110,95,55,54,95,114,97,110,100,111,109,105,122,101,0),String.fromCharCode(119,101,101,107,95,57,95,56,55,0)], [String.fromCharCode(102,115,101,101,107,95,53,95,54,54,0),String.fromCharCode(110,105,110,101,95,51,95,54,48,0)]]);
          let fieldm: Map<any, any> = new Map([[String.fromCharCode(114,95,49,57,95,115,98,105,116,115,0),true ], [String.fromCharCode(109,111,99,107,101,100,95,97,95,50,57,0),true ], [String.fromCharCode(108,95,51,57,95,110,111,116,0),true ]]);
         drag4 += `${(playW == String.fromCharCode(89,0) ? (china2 ? 3 : 4) : playW.length)}`;
         iconpipexpandS.set(`${fieldm.size}`, iconpipexpandS.size + 3);
         fieldm.set(`${iconpipexpandS.size}`, iconpipexpandS.size);
         iconnewsshareA += `${((china2 ? 5 : 2) % (Math.max(2, 2)))}`;
      for (let u = 0; u < 2; u++) {
         china2 = iconnewsshareA.length <= drag4.length;
      }
      while (5 == iconnewsshareA.length) {
          let libfileA: Array<any> = [970, 402];
         china2 = String.fromCharCode(80,0) == iconnewsshareA;
         libfileA = [libfileA.length];
         break;
      }
          let u_locko = String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,112,95,50,54,0);
          let footballtrophyi = true;
          let huaweiU = 5.0;
         drag4 += `${((footballtrophyi ? 3 : 1) % (Math.max(drag4.length, 5)))}`;
         u_locko += `${parseInt(`${huaweiU}`)}`;
         footballtrophyi = String.fromCharCode(104,0) == u_locko;
         huaweiU -= 3 ^ parseInt(`${huaweiU}`);
         china2 = !china2;
         china2 = 87 >= drag4.length || 87 >= iconnewsshareA.length;
         china2 = drag4.length < 73;
      analyticsY += `${2 ^ analyticsY.length}`;


    setShowLoading2(true);

   while (2 <= (mbsplashz.length - history1.length)) {
      mbsplashz = `${analyticsY.length + hejiI.length}`;
      break;
   }
   for (let x = 0; x < 2; x++) {
      libswresampleW = "1";
   }
   let customX = issubs == String.fromCharCode(102,105,112,115,52,0);
   do {
      issubs = "1";
      if (customX) {
         break;
      }
   } while ((hejiI.length < issubs.length) && customX);
      mbsplashz += `${(String.fromCharCode(89,0) == logout2 ? infos.length : logout2.length)}`;
      infos = `${issubs.length / (Math.max(2, 8))}`;
    setTimeout(() => {

   let awayteamfieldl = issubs.length <= 7525390;
   do {
      issubs += `${(String.fromCharCode(101,0) == mbsplashz ? logout2.length : mbsplashz.length)}`;
      if (awayteamfieldl) {
         break;
      }
   } while (awayteamfieldl && (issubs.length > hejiI.length));
      history1 = [3 % (Math.max(9, libswresampleW.length))];
       let iconfeedbackt = true;
       let bangP: Map<any, any> = new Map([[String.fromCharCode(102,95,51,51,95,111,112,101,110,103,108,0),true ], [String.fromCharCode(122,95,57,55,95,103,101,116,108,97,121,111,117,116,0),false ], [String.fromCharCode(114,101,103,105,115,116,101,114,105,110,103,95,100,95,57,0),true ]]);
       let shrinkA = 1.0;
         iconfeedbackt = !iconfeedbackt;
      while (bangP.size >= 2) {
          let specP: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,100,115,116,114,101,97,109,95,57,95,51,54,0),972], [String.fromCharCode(111,95,52,57,95,118,101,108,111,99,105,116,121,0),299]]);
          let relatedw = 3.0;
         bangP = new Map([[`${specP.size}`, bangP.size]]);
         specP = new Map([[`${relatedw}`, parseInt(`${relatedw}`)]]);
         break;
      }
         iconfeedbackt = null == bangP.get(`${shrinkA}`);
      let bannerf = 7402534.0 >= shrinkA;
      do {
          let product0 = 2;
         shrinkA /= Math.max(1, (parseFloat(`${bangP.size << (Math.min(5, Math.abs((iconfeedbackt ? 3 : 5))))}`)));
         product0 >>= Math.min(Math.abs(product0), 3);
         if (bannerf) {
            break;
         }
      } while ((5.92 == (5.30 - shrinkA)) && bannerf);
       let middleware6: Array<any> = [786, 508];
       let fill_: Array<any> = [44, 49];
       let f_viewz = 5;
       let albumM = 0;
         middleware6.push(((iconfeedbackt ? 3 : 3) % 3));
         f_viewz >>= Math.min(5, Math.abs(albumM << (Math.min(middleware6.length, 1))));
         albumM -= f_viewz | albumM;
      circles /= Math.max(parseInt(`${shrinkA}`), 3);
      infos = `${3 << (Math.min(1, mbsplashz.length))}`;
      issubs = `${(String.fromCharCode(99,0) == infos ? mbsplashz.length : infos.length)}`;
      setShowLoading2(false);
    }, 1200);

  }, []);

  useEffect(() => {
    handleInitialLoading();
  }, [handleInitialLoading]);

  useEffect(() => {
    flatlistRef
  }, []);

  useEffect(() => {
    if (screenState.autoSelectSport == true) {
      handleRefresh();
    }
  }, [screenState.autoSelectSport])

  return (
    <View style={{ flex: 1 }}>

      {showLoading2 && (
        <View
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 1000,
            backgroundColor: "#0c0c0c",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <FastImage
            style={{ height: 150, width: 150 }}
            source={require("@static/images/backgroundTwitterNode.gif")}
            resizeMode={"contain"}
          />
        </View>

      )}


      {matches?.data !== undefined && matches.data.length > 0 ? (
        <View>
          <FlatList
            ref={flatlistRef}
            data={matches.data}
            windowSize={3}
            
            maxToRenderPerBatch={10}
            initialNumToRender={10}
            renderItem={Content}
            
            
            
            
            
            
            onEndReachedThreshold={0.9}
            
            ListFooterComponent={
              <View style={{ paddingTop: TOPON_BANNER_HEIGHT + 20 }} />
            }
          />
        </View>
      ) : (
        <></>
      )}

      {matches?.data !== undefined && matches.data.length == 0 && (
        <View
          style={{
            height: 100,
            backgroundColor: "#0c0c0c",
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <Text style={{ color: "#9c9c9c", fontStyle: "italic" }}>
            暂无赛事
          </Text>
        </View>
      )}

      {showLoading && (
        <View
          style={{
            position: "absolute",
            
            backgroundColor: "#0c0c0c",
            zIndex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
          }}
        >
          <FastImage
            source={require("@static/images/robotoNetwork.gif")}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </View>
      )}

      <TouchableOpacity
        style={styles.refresh}
        onPress={() => {
          fetchData();
          handleRefresh();
        }}
      >
        <FastImage
          source={require("../../assets/images/catagoryIconwatchnow.png")}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
