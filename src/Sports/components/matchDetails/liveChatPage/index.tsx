import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import { useAppDispatch, useSelector } from "@hooks/yys_frame";
import { CPressable, CTextInput } from "../../../../components/atoms";
import SendIcon from '@static/images/flipperSuccessActions.svg';
import SendFillIcon from '@static/images/shrinkPoint.svg';
import { CHAT_BOX_MAX_ITEM, CHAT_SEND_COOLDOWN, COMMENT_MAX_INPUT } from "@utility/yys_ajax_switch";
import { yys_TooltipsKlevin } from "@type/yys_libzeus";
import { yys_FinalRound } from "../../../../api/yys_player";
import { yys_EmojiUser } from "@redux/reducers/yys_bell_gdtadv";
import { useQuery } from "@tanstack/react-query";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux/actions/yys_dropdown_empty";
import { Avatar } from "@rneui/base";
import { useIsFocused, useTheme } from "@react-navigation/native";

import createStyles from "./yys_gpay_roboto";
import { yys_ViewerLess } from "../../../types/yys_league_mounting";
import { UnreadCard } from "../../../../components/chat/yys_reducer_single";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";

type yys_ConfigureUimanager = {
    matchID: string,
    streamer: yys_ViewerLess,
    sportType: string,
    onPrivateChatPress: () => void,
    onInputFocus?: (isFocus: boolean) => void,
}

const LiveChatPage = ({
    matchID,
    streamer,
    sportType,
    onPrivateChatPress,
    onInputFocus,
}: yys_ConfigureUimanager) => {
    const { colors } = useTheme();

    const styles = useMemo(() => createStyles({
        colors,
    }), [colors]);

    const PIN_YIN_ACCEPTED = 20;

    const chatState = useSelector<yys_EmojiUser>('chatReducer');
    const userState = useSelector<yys_HejiCricket>('userReducer');
    const [cooldownTimeout, setCooldownTimeout] = useState<NodeJS.Timeout | null>(null);
    const [comment, setComment] = useState('');
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<yys_TooltipsKlevin> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = yys_RelatedTooltips.isLogin(userState.user);

    const appDispatch = useAppDispatch();

    const { data: chats } = useQuery({
        queryKey: ['liveChats', matchID],
        queryFn: () => yys_FinalRound.getStreamerPinMsg(),
        staleTime: 1000,
    });

    useEffect(() => {
        appDispatch(joinChatRoom({
            roomId: matchID,
            sportType: sportType,
        }));

        return () => {
            appDispatch(leaveChatRoom());
        }
    }, []);

    const renderItem = useCallback(({ item }: { item: yys_TooltipsKlevin }) => {
        return (
            <View style={styles.chatContainer}>
                <Text style={styles.chatNameText}>
                    {item.userName}
                </Text>

                <View style={styles.chatTextContainer}>
                    <Text style={styles.chatText}>
                        {item.message}
                    </Text>
                </View>
            </View>
        );
    }, []);

    const renderSeparator = useCallback(() => (
        <View style={{ height: 10, }} />
    ), []);

    const onChangeComment = useCallback((value: any) => {
        if (value.length > (COMMENT_MAX_INPUT + PIN_YIN_ACCEPTED)) return;

        setComment(value);
        validateComment(value);
    }, []);

    const validateComment = useCallback((value: string) => {
        if (value.length <= COMMENT_MAX_INPUT) {
            setCommentValid(true);
            return;
        }

        setCommentValid(false);
    }, []);

    const onSubmitComment = useCallback(() => {
       let merger5 = String.fromCharCode(102,97,118,111,114,105,116,101,0);
    let paginationO: Map<any, any> = new Map([[String.fromCharCode(112,114,101,112,97,114,101,0),470], [String.fromCharCode(109,105,114,114,111,114,0),335], [String.fromCharCode(118,97,114,109,97,115,107,95,56,95,53,52,0),599]]);
    let watchI: Map<any, any> = new Map([[String.fromCharCode(97,115,110,116,95,119,95,50,56,0),String.fromCharCode(109,99,111,109,112,0)], [String.fromCharCode(115,95,49,48,48,95,102,97,110,99,121,0),String.fromCharCode(112,101,114,115,105,115,116,101,110,116,0)]]);
    let gemfileK: Array<any> = [910, 219, 906];
    let default_gqB = 1.0;
    let mathu = String.fromCharCode(111,117,116,100,101,118,115,0);
    let vignetteV: Map<any, any> = new Map([[String.fromCharCode(105,95,55,55,95,116,111,117,112,112,101,114,0),568], [String.fromCharCode(114,101,100,117,110,100,97,110,116,0),930], [String.fromCharCode(99,95,49,54,95,112,114,117,110,105,110,103,0),575]]);
    let checkboxy = true;
    let langkeyi = 0.0;
    let drag_ = String.fromCharCode(103,95,53,49,95,99,111,110,118,111,108,118,101,0);
    let next7 = String.fromCharCode(104,95,49,54,95,114,97,119,101,110,99,0);
       let videox: Map<any, any> = new Map([[String.fromCharCode(100,95,49,55,95,115,116,97,98,105,108,105,122,97,116,105,111,110,0),322], [String.fromCharCode(115,117,98,115,99,114,105,112,116,0),548], [String.fromCharCode(98,108,99,107,0),112]]);
       let alertg = 2.0;
       let colorsx = 1.0;
      for (let c = 0; c < 2; c++) {
          let libtanU = String.fromCharCode(99,111,109,109,105,116,0);
          let nativemodulev = 3.0;
          let orange2 = 1;
          let libavutilG = String.fromCharCode(109,111,118,101,116,111,0);
         videox.set(`${nativemodulev}`, 3);
         libtanU += `${libavutilG.length & 2}`;
         nativemodulev -= orange2 % (Math.max(2, libtanU.length));
         orange2 += libtanU.length;
         libavutilG += `${orange2}`;
      }
          let applicationo = String.fromCharCode(108,105,98,115,97,109,112,108,101,0);
         alertg *= parseFloat(`${applicationo.length - 3}`);
         videox.set(`${alertg}`, 3);
       let nativeexC = 3.0;
          let auto_u8F = String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,95,97,95,54,0);
          let libfabricjniy = String.fromCharCode(113,115,99,97,108,101,0);
         alertg -= parseFloat(`${parseInt(`${nativeexC}`)}`);
         auto_u8F += `${libfabricjniy.length >> (Math.min(auto_u8F.length, 1))}`;
         libfabricjniy += "3";
      while (1.36 >= (colorsx / (Math.max(2, alertg))) && (alertg / (Math.max(8, colorsx))) >= 1.36) {
          let small6 = 4.0;
          let models9 = 2.0;
          let textlayoutmanagerv = false;
          let libavdeviceZ = 5.0;
         alertg *= parseFloat(`${1 + parseInt(`${small6}`)}`);
         small6 /= Math.max(2, parseInt(`${libavdeviceZ}`));
         models9 /= Math.max((parseFloat(`${parseInt(`${models9}`) - (textlayoutmanagerv ? 2 : 3)}`)), 3);
         textlayoutmanagerv = !textlayoutmanagerv;
         break;
      }
       let mbridges = String.fromCharCode(115,116,101,112,112,101,114,0);
         alertg *= parseFloat(`${parseInt(`${colorsx}`) + 2}`);
      for (let v = 0; v < 3; v++) {
         mbridges += `${parseInt(`${alertg}`) - 3}`;
      }
      mathu += `${mathu.length | 1}`;
   let libreactnativejnig = paginationO.size >= 5682229;
   do {
      paginationO.set(`${langkeyi}`, watchI.size);
      if (libreactnativejnig) {
         break;
      }
   } while (libreactnativejnig && (Array.from(paginationO.keys()).includes(`${watchI.size}`)));
      langkeyi /= Math.max(drag_.length, 4);

        if (comment.trim().length === 0 || !isCommentValid) return;

      merger5 = `${(drag_ == String.fromCharCode(111,0) ? drag_.length : parseInt(`${langkeyi}`))}`;
       let xvodg = String.fromCharCode(116,101,115,118,101,114,116,95,48,95,51,53,0);
       let nativeg = String.fromCharCode(99,111,109,112,111,110,101,110,116,115,0);
       let component0: Map<any, any> = new Map([[String.fromCharCode(102,95,52,56,95,112,97,105,100,0),true ], [String.fromCharCode(112,97,115,115,0),true ]]);
       let google_ = String.fromCharCode(103,117,101,115,115,0);
       let listg = String.fromCharCode(109,97,116,114,111,115,107,97,0);
         listg = "1";
       let paginationA = String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,115,95,110,95,53,53,0);
          let launcherE = String.fromCharCode(101,95,51,51,95,115,117,98,112,97,99,107,101,116,0);
          let analyticA = true;
         paginationA += `${(String.fromCharCode(55,0) == xvodg ? xvodg.length : nativeg.length)}`;
         launcherE = `${1 | launcherE.length}`;
         analyticA = (27 <= (launcherE.length ^ (analyticA ? 27 : launcherE.length)));
          let libreactnativejniW = String.fromCharCode(108,95,51,52,95,100,101,110,121,0);
          let buildM = String.fromCharCode(118,105,122,105,101,114,0);
         paginationA += `${(paginationA == String.fromCharCode(122,0) ? nativeg.length : paginationA.length)}`;
         libreactnativejniW += `${buildM.length ^ 1}`;
         buildM += `${(buildM == String.fromCharCode(78,0) ? buildM.length : libreactnativejniW.length)}`;
       let navigationl = 5.0;
         google_ = "2";
      for (let d = 0; d < 1; d++) {
         google_ += "1";
      }
       let cancelq = String.fromCharCode(113,117,105,99,0);
      mathu = `${3 << (Math.min(4, gemfileK.length))}`;
   if (!Array.from(paginationO.keys()).includes(`${langkeyi}`)) {
       let formT = String.fromCharCode(119,97,118,101,0);
       let membershipb = 3;
      while (!formT.endsWith(`${membershipb}`)) {
          let alertN = false;
          let libavdeviceH = 5;
          let libreact3 = 5.0;
          let knewinterstitiala = String.fromCharCode(102,105,108,101,104,101,97,100,101,114,0);
          let submitg = String.fromCharCode(121,117,118,112,97,99,107,101,100,0);
         membershipb += libavdeviceH;
         alertN = 50.95 == libreact3;
         libavdeviceH ^= (String.fromCharCode(83,0) == knewinterstitiala ? knewinterstitiala.length : parseInt(`${libreact3}`));
         submitg = `${2 >> (Math.min(Math.abs(parseInt(`${libreact3}`)), 5))}`;
         break;
      }
       let eactR = 4.0;
       let acceptedw = 5.0;
       let libflipperF = String.fromCharCode(112,97,115,115,98,0);
       let libzeusw = String.fromCharCode(102,97,118,105,99,111,110,0);
      while (libflipperF.length == parseInt(`${acceptedw}`)) {
         acceptedw *= 2;
         break;
      }
      for (let e = 0; e < 1; e++) {
         formT = `${parseInt(`${eactR}`) / 3}`;
      }
       let constantsf = String.fromCharCode(100,105,114,97,99,95,111,95,49,51,0);
      langkeyi += paginationO.size % 2;
   }

        if (cooldownTimeout !== null) {

       let shootH = String.fromCharCode(107,95,55,52,95,98,111,117,110,99,105,110,101,115,115,0);
         shootH += `${(String.fromCharCode(105,0) == shootH ? shootH.length : shootH.length)}`;
          let hejiJ: Map<any, any> = new Map([[String.fromCharCode(101,110,117,109,0),false ], [String.fromCharCode(115,113,108,105,116,101,114,98,117,95,57,95,55,57,0),false ], [String.fromCharCode(98,97,99,107,114,111,117,110,100,0),true ]]);
          let dialogH = 0;
          let hoverH: Map<any, any> = new Map([[String.fromCharCode(100,105,99,101,0),true ], [String.fromCharCode(101,120,105,115,116,101,100,95,118,95,53,56,0),false ], [String.fromCharCode(119,105,100,116,104,115,0),false ]]);
         shootH += `${3 >> (Math.min(1, Math.abs(dialogH)))}`;
         hejiJ.set(`${hoverH.size}`, hoverH.size ^ 2);
         dialogH ^= hejiJ.size << (Math.min(Math.abs(2), 5));
         shootH = `${shootH.length | shootH.length}`;
      watchI = new Map([[`${gemfileK.length}`, 3]]);
       let turno = 1;
       let long_lgu = String.fromCharCode(111,98,106,110,105,100,0);
      for (let j = 0; j < 3; j++) {
         long_lgu += `${turno | 3}`;
      }
         turno /= Math.max((String.fromCharCode(87,0) == long_lgu ? long_lgu.length : turno), 4);
          let analyticsL: Map<any, any> = new Map([[String.fromCharCode(102,105,114,101,119,97,108,108,0),33], [String.fromCharCode(105,116,113,117,101,117,101,95,120,95,55,52,0),231]]);
          let downloado = String.fromCharCode(112,114,102,116,0);
         long_lgu = `${analyticsL.size | 1}`;
         analyticsL = new Map([[downloado, downloado.length]]);
         long_lgu += `${long_lgu.length % 2}`;
      if (long_lgu.length > turno) {
         turno &= long_lgu.length + 3;
      }
         turno *= long_lgu.length << (Math.min(Math.abs(1), 2));
      drag_ = `${parseInt(`${default_gqB}`)}`;
   for (let o = 0; o < 1; o++) {
      checkboxy = paginationO.size < parseInt(`${langkeyi}`);
   }
            return;
        }

        appDispatch(sendChatMessage({
            message: comment,
        }));

      vignetteV = new Map([[merger5, drag_.length * merger5.length]]);
   if ((parseFloat(`${paginationO.size}`) - default_gqB) == 5.23) {
      default_gqB *= parseFloat(`${3}`);
   }
   while (mathu.includes(`${watchI.size}`)) {
      mathu = `${(String.fromCharCode(118,0) == merger5 ? mathu.length : merger5.length)}`;
      break;
   }

        setCooldownTimeout(setTimeout(() => {

       let half0 = String.fromCharCode(112,114,111,116,111,0);
       let footballJ: Array<any> = [712, 678, 821];
       let invite9 = String.fromCharCode(108,95,51,54,95,100,105,115,112,108,97,121,115,0);
      let adulth = half0.length >= 8987565;
      do {
         half0 = "1";
         if (adulth) {
            break;
         }
      } while ((half0.includes(`${footballJ.length}`)) && adulth);
          let renewi = 4.0;
          let championd: Map<any, any> = new Map([[String.fromCharCode(112,111,108,121,109,111,100,95,115,95,57,0),916], [String.fromCharCode(97,99,113,117,105,114,101,100,0),260], [String.fromCharCode(120,95,49,53,95,99,109,100,117,116,105,108,115,0),660]]);
          let faviconN = 2.0;
         half0 = "3";
         renewi *= championd.size;
         championd = new Map([[`${championd.size}`, 1 - parseInt(`${faviconN}`)]]);
         faviconN *= parseFloat(`${2}`);
         invite9 += `${invite9.length >> (Math.min(1, half0.length))}`;
      if (footballJ.length < 5) {
         invite9 = `${invite9.length / 1}`;
      }
      if (half0.endsWith(invite9)) {
          let hnews2 = String.fromCharCode(98,115,111,110,95,48,95,56,53,0);
          let libavutilg = String.fromCharCode(103,95,57,95,100,118,97,117,100,105,111,0);
          let mbsplash6 = 0.0;
          let guideE = String.fromCharCode(105,115,115,95,116,95,52,52,0);
          let modalW = 5.0;
         half0 += `${(String.fromCharCode(80,0) == invite9 ? footballJ.length : invite9.length)}`;
         hnews2 += `${parseInt(`${mbsplash6}`) / 2}`;
         libavutilg = "3";
         mbsplash6 *= parseFloat(`${parseInt(`${modalW}`)}`);
         guideE = `${libavutilg.length >> (Math.min(Math.abs(2), 2))}`;
         modalW *= guideE.length + hnews2.length;
      }
      for (let l = 0; l < 2; l++) {
          let ticked1 = String.fromCharCode(112,114,101,102,101,114,0);
          let dropdownn = String.fromCharCode(101,109,98,101,100,100,101,100,0);
          let canvasv = 3.0;
          let libsgcoreQ: Map<any, any> = new Map([[String.fromCharCode(111,105,100,97,110,121,0),89], [String.fromCharCode(115,117,98,115,101,103,109,101,110,116,95,99,95,56,54,0),318], [String.fromCharCode(108,111,99,97,108,97,100,100,114,95,49,95,57,49,0),369]]);
         footballJ = [libsgcoreQ.size / (Math.max(invite9.length, 3))];
         ticked1 += `${dropdownn.length ^ ticked1.length}`;
         dropdownn += `${dropdownn.length & parseInt(`${canvasv}`)}`;
         canvasv /= Math.max(4, parseFloat(`${ticked1.length}`));
         libsgcoreQ.set(ticked1, 3 ^ ticked1.length);
      }
       let become5 = 5.0;
       let singleZ = 5.0;
       let usernameo = String.fromCharCode(116,114,97,99,107,95,120,95,56,53,0);
       let libreactnativeblobO = String.fromCharCode(115,105,110,103,108,101,116,97,98,108,101,95,57,95,56,57,0);
       let index3 = 5;
      drag_ = `${watchI.size}`;
      paginationO.set(`${default_gqB}`, parseInt(`${default_gqB}`) / (Math.max(7, gemfileK.length)));
   if (!Array.from(watchI.values()).includes(vignetteV.size)) {
      watchI = new Map([[`${langkeyi}`, 1 ^ parseInt(`${langkeyi}`)]]);
   }
            setCooldownTimeout(null);
        }, CHAT_SEND_COOLDOWN * 1000));

      watchI = new Map([[`${watchI.size}`, watchI.size]]);
   while (1 <= (2 % (Math.max(10, watchI.size))) || 2 <= (paginationO.size % (Math.max(2, watchI.size)))) {
       let rewardvideot = String.fromCharCode(99,111,110,115,117,109,101,114,0);
       let klevinb = String.fromCharCode(97,114,114,105,118,97,108,0);
       let downloadingi = String.fromCharCode(110,98,105,111,95,103,95,50,51,0);
       let regeng6 = String.fromCharCode(117,112,100,97,116,101,95,104,95,50,52,0);
       let libjsinspectorC = String.fromCharCode(122,99,111,110,118,111,108,118,101,0);
      if (rewardvideot == klevinb) {
          let downY = String.fromCharCode(112,114,101,117,112,100,97,116,101,0);
          let windV = true;
          let libzeus1 = String.fromCharCode(110,95,52,53,95,99,97,112,116,117,114,105,110,103,0);
          let cancel1 = 2.0;
         klevinb += `${regeng6.length}`;
         downY += `${(libzeus1 == String.fromCharCode(110,0) ? libzeus1.length : parseInt(`${cancel1}`))}`;
         windV = libzeus1.includes(`${windV}`);
         cancel1 -= parseFloat(`${2 << (Math.min(1, downY.length))}`);
      }
      if (!downloadingi.startsWith(regeng6)) {
          let largej = String.fromCharCode(100,101,109,97,116,101,114,105,97,108,105,122,101,0);
          let attributedstringW = String.fromCharCode(111,95,57,53,95,98,97,110,100,105,110,103,0);
          let libswscaler: Array<any> = [99, 853];
          let runtimeV = 5;
          let expired_ = 3;
         regeng6 = "1";
         largej = `${3 / (Math.max(4, runtimeV))}`;
         attributedstringW = `${attributedstringW.length}`;
         libswscaler.push(1);
         runtimeV /= Math.max(3, 1 | attributedstringW.length);
         expired_ += largej.length;
      }
      for (let g = 0; g < 3; g++) {
          let suggestiont = true;
          let details_ = true;
          let libjsinspectorX = String.fromCharCode(110,95,49,56,95,102,108,117,115,104,0);
          let sheetq: Array<any> = [446, 52, 550];
          let logoo: Map<any, any> = new Map([[String.fromCharCode(120,95,54,55,95,115,116,114,101,97,109,105,110,103,0),374], [String.fromCharCode(115,101,110,116,0),314], [String.fromCharCode(115,95,52,53,95,109,117,110,109,97,112,0),557]]);
         libjsinspectorC = `${regeng6.length}`;
         suggestiont = !suggestiont;
         details_ = logoo.size > 62;
         libjsinspectorX += `${libjsinspectorX.length % 1}`;
         sheetq = [(libjsinspectorX == String.fromCharCode(82,0) ? libjsinspectorX.length : sheetq.length)];
         logoo.set(`${libjsinspectorX}`, logoo.size);
      }
       let utilsZ = 3.0;
       let vietnam3 = 0.0;
         utilsZ /= Math.max(parseInt(`${utilsZ}`), 3);
      while ((klevinb.length - parseInt(`${vietnam3}`)) >= 3) {
         klevinb = `${downloadingi.length}`;
         break;
      }
          let clockx = 0;
          let basketballw = String.fromCharCode(111,95,53,95,99,116,120,112,0);
          let combinedl = 5;
         rewardvideot += "2";
         clockx >>= Math.min(Math.abs(1 & combinedl), 1);
         basketballw += `${basketballw.length % (Math.max(3, combinedl))}`;
      let filedD = 7137374 >= downloadingi.length;
      do {
         downloadingi = `${libjsinspectorC.length}`;
         if (filedD) {
            break;
         }
      } while ((2 >= (downloadingi.length | 2) || 5 >= (downloadingi.length * 2)) && filedD);
      let gmailX = String.fromCharCode(120,97,116,122,118,0) == libjsinspectorC;
      do {
         libjsinspectorC = `${klevinb.length & 3}`;
         if (gmailX) {
            break;
         }
      } while (gmailX && (!libjsinspectorC.startsWith(`${rewardvideot.length}`)));
          let auto_y8z = String.fromCharCode(115,112,108,105,116,115,95,122,95,49,0);
         regeng6 += "2";
         auto_y8z = `${auto_y8z.length}`;
      for (let g = 0; g < 3; g++) {
         regeng6 = `${rewardvideot.length ^ 3}`;
      }
      paginationO.set(drag_, 3);
      break;
   }
   while (3.98 >= (default_gqB + 2.69) && 5.59 >= (2.69 + default_gqB)) {
      default_gqB *= parseFloat(`${2}`);
      break;
   }

        setComment('');

      mathu = `${paginationO.size}`;
   if (5 < mathu.length) {
      mathu = `${parseInt(`${langkeyi}`) << (Math.min(3, Math.abs(3)))}`;
   }
   let settingsx = paginationO.size <= 6291855;
   do {
      paginationO = new Map([[`${watchI.size}`, merger5.length]]);
      if (settingsx) {
         break;
      }
   } while ((langkeyi > 3.84) && settingsx);
        Keyboard.dismiss();
    }, [isCommentValid, comment, cooldownTimeout]);

    const onUserScroll = () => {
       let g_centeri = 5.0;
    let shirti = String.fromCharCode(118,97,105,108,97,98,105,108,105,116,121,0);
    let canvasu = false;
    let aboutF: Array<any> = [611, 864, 575];
    let station9: Map<any, any> = new Map([[String.fromCharCode(102,114,105,99,116,105,111,110,0),String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,95,119,95,55,48,0)], [String.fromCharCode(97,109,111,117,110,116,115,95,100,95,52,55,0),String.fromCharCode(112,97,115,115,95,48,95,51,51,0)], [String.fromCharCode(99,97,116,99,104,115,105,103,110,97,108,95,118,95,52,0),String.fromCharCode(116,108,101,110,95,105,95,55,0)]]);
    let common9 = true;
    let sortA = String.fromCharCode(121,117,118,121,117,118,95,49,95,54,50,0);
    let gdtadvl = false;
    let hejin = false;
    let orange9: Array<any> = [911, 206];
    let umengL = String.fromCharCode(113,95,57,95,112,101,101,114,110,97,109,101,0);
   let libjsinspectorK = 6698341 >= aboutF.length;
   do {
       let filter8 = 3.0;
       let time_xv = true;
      for (let u = 0; u < 1; u++) {
          let w_managerv = 4.0;
          let fastforward2 = true;
          let analyticsD = String.fromCharCode(98,95,50,95,115,101,103,116,114,101,101,0);
          let p_locku: Map<any, any> = new Map([[String.fromCharCode(103,95,53,56,95,97,110,103,117,108,97,114,0),String.fromCharCode(109,95,51,57,95,119,105,100,116,104,0)], [String.fromCharCode(97,115,115,101,115,115,109,101,110,116,0),String.fromCharCode(112,117,98,107,101,121,0)], [String.fromCharCode(109,95,49,55,95,103,97,109,109,97,0),String.fromCharCode(115,95,55,56,95,114,101,116,114,97,110,115,109,105,116,115,0)]]);
          let chinasame0: Array<any> = [457, 42];
         filter8 *= 1;
         w_managerv /= Math.max(3 << (Math.min(5, Math.abs(parseInt(`${w_managerv}`)))), 3);
         fastforward2 = 15 < p_locku.size;
         analyticsD = `${parseInt(`${w_managerv}`) | 2}`;
         p_locku.set(`${w_managerv}`, 1);
         chinasame0.push(2 - parseInt(`${w_managerv}`));
      }
         time_xv = filter8 < 72.6;
      aboutF = [((common9 ? 2 : 1))];
      if (libjsinspectorK) {
         break;
      }
   } while ((2 == aboutF.length) && libjsinspectorK);
      station9.set(shirti, shirti.length);
   if (3 <= (1 * station9.size) && (station9.size * aboutF.length) <= 1) {
      station9.set(`${gdtadvl}`, ((gdtadvl ? 4 : 2) ^ 1));
   }
   let gray6 = gdtadvl ? !gdtadvl : gdtadvl;
   do {
       let sourceE = String.fromCharCode(114,95,50,49,95,116,104,111,117,115,97,110,100,115,0);
       let large9: Array<any> = [516, 80];
       let light_ = 1.0;
          let philippinesP = false;
         light_ *= (String.fromCharCode(74,0) == sourceE ? large9.length : sourceE.length);
         philippinesP = !philippinesP;
       let pangle6: Array<any> = [String.fromCharCode(115,101,112,97,114,97,116,101,100,0), String.fromCharCode(118,95,55,49,95,115,117,103,103,101,115,116,105,111,110,115,0)];
       let fieldL: Array<any> = [596, 878];
         light_ -= 3 - fieldL.length;
          let libcrashsdk9 = String.fromCharCode(99,104,101,99,107,95,51,95,49,54,0);
          let styles7: Array<any> = [797, 900];
         pangle6 = [2];
         libcrashsdk9 = `${(String.fromCharCode(82,0) == libcrashsdk9 ? libcrashsdk9.length : styles7.length)}`;
         styles7.push((libcrashsdk9 == String.fromCharCode(51,0) ? styles7.length : libcrashsdk9.length));
      let buttonx = 6220625 >= large9.length;
      do {
         large9 = [large9.length];
         if (buttonx) {
            break;
         }
      } while (buttonx && ((sourceE.length ^ large9.length) > 5 && (5 ^ sourceE.length) > 5));
         large9.push(large9.length & sourceE.length);
          let networkf: Map<any, any> = new Map([[String.fromCharCode(115,95,50,57,95,112,97,114,115,101,117,116,105,108,115,0),785], [String.fromCharCode(100,95,56,52,95,108,111,103,105,99,97,108,0),11]]);
          let tickp = String.fromCharCode(97,116,116,114,0);
          let over4 = String.fromCharCode(105,110,115,101,114,116,0);
         fieldL = [sourceE.length << (Math.min(Math.abs(1), 5))];
         networkf.set(`${tickp}`, networkf.size / 3);
         tickp += `${over4.length & tickp.length}`;
         over4 = `${over4.length | networkf.size}`;
          let current0: Map<any, any> = new Map([[String.fromCharCode(112,114,101,116,119,105,100,100,108,101,95,103,95,56,55,0),48], [String.fromCharCode(98,95,49,52,95,113,117,97,114,116,122,0),341], [String.fromCharCode(100,105,99,116,0),241]]);
          let dangers = true;
         pangle6 = [3 | pangle6.length];
         current0 = new Map([[`${current0.size}`, current0.size]]);
         dangers = current0.get(`${dangers}`) != null;
         sourceE += `${fieldL.length ^ pangle6.length}`;
      gdtadvl = !gdtadvl;
      if (gray6) {
         break;
      }
   } while (gray6 && (3 <= (aboutF.length % 2)));
      aboutF.push(3 >> (Math.min(5, Math.abs(station9.size))));
   for (let j = 0; j < 3; j++) {
       let combinedr = String.fromCharCode(113,95,57,49,95,110,111,116,105,102,105,99,97,116,111,110,115,0);
      if (combinedr.includes(`${combinedr.length}`)) {
         combinedr += `${combinedr.length - combinedr.length}`;
      }
      for (let d = 0; d < 2; d++) {
         combinedr += `${3 << (Math.min(4, combinedr.length))}`;
      }
       let star0 = String.fromCharCode(114,116,99,99,95,56,95,51,52,0);
       let langl = String.fromCharCode(109,97,116,116,101,0);
      sortA = "3";
   }
       let buttonr = String.fromCharCode(110,111,116,99,104,101,100,95,55,95,52,49,0);
       let overU = String.fromCharCode(97,112,112,108,105,101,100,0);
       let routerb: Map<any, any> = new Map([[String.fromCharCode(114,95,51,50,95,116,99,102,105,108,101,0),286], [String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,100,0),200]]);
      for (let v = 0; v < 2; v++) {
         overU += `${overU.length}`;
      }
      while ((overU.length & routerb.size) < 3) {
         overU = `${routerb.size + 1}`;
         break;
      }
      if (2 <= (buttonr.length & routerb.size) || 2 <= (buttonr.length & routerb.size)) {
          let linkQ = String.fromCharCode(111,112,116,105,109,105,122,101,100,95,50,95,49,51,0);
          let textE: Map<any, any> = new Map([[String.fromCharCode(112,108,97,116,102,111,114,109,115,95,118,95,51,51,0),286], [String.fromCharCode(106,95,53,57,95,100,114,97,110,100,0),388]]);
         routerb = new Map([[`${textE.size}`, routerb.size]]);
         linkQ = `${linkQ.length / 1}`;
         textE = new Map([[linkQ, 2]]);
      }
      if (overU.endsWith(buttonr)) {
          let become_ = false;
         buttonr = `${((become_ ? 5 : 3) % (Math.max(2, routerb.size)))}`;
      }
      if (5 == (buttonr.length << (Math.min(1, Math.abs(routerb.size))))) {
         buttonr += "1";
      }
         routerb.set(`${overU}`, 2);
      let link1 = overU == String.fromCharCode(103,120,49,118,122,113,55,116,49,0);
      do {
         overU = `${overU.length}`;
         if (link1) {
            break;
         }
      } while (link1 && (overU.length < buttonr.length));
         buttonr = `${overU.length & routerb.size}`;
          let gradleI = 5.0;
          let submitS = String.fromCharCode(111,117,98,108,101,95,99,95,56,0);
         buttonr += `${submitS.length}`;
         gradleI -= parseFloat(`${2}`);
         submitS = `${parseInt(`${gradleI}`) << (Math.min(3, Math.abs(1)))}`;
      canvasu = !canvasu;
      canvasu = aboutF.includes(gdtadvl);
      g_centeri += ((canvasu ? 1 : 2));
   let invitey = g_centeri <= 9605810.0;
   do {
      g_centeri /= Math.max(station9.size, 3);
      if (invitey) {
         break;
      }
   } while (invitey && ((2 ^ shirti.length) < 4 || (g_centeri * shirti.length) < 1.75));
      sortA += `${shirti.length}`;
       let sendy = String.fromCharCode(115,116,97,114,116,117,112,95,100,95,57,0);
       let register_lha = 4.0;
         register_lha /= Math.max(parseInt(`${register_lha}`), 4);
         sendy += `${sendy.length & parseInt(`${register_lha}`)}`;
          let change0 = false;
          let delegate_haS = String.fromCharCode(112,95,52,55,95,106,117,115,116,105,102,121,0);
          let pressurev = true;
         register_lha += (3 ^ (change0 ? 4 : 4));
         change0 = delegate_haS.length > 80 || delegate_haS.length > 80;
       let agreementh = 4;
       let whistleX = 2;
      while (2 >= (agreementh / (Math.max(2, 8))) && 3 >= (2 / (Math.max(1, agreementh)))) {
         agreementh += sendy.length * 3;
         break;
      }
         whistleX |= whistleX;
      hejin = canvasu;
       let formd: Map<any, any> = new Map([[String.fromCharCode(118,111,114,100,105,112,108,111,109,95,104,95,53,0),String.fromCharCode(109,109,120,101,120,116,0)], [String.fromCharCode(114,101,109,105,110,100,101,114,115,0),String.fromCharCode(100,105,102,102,101,114,101,110,99,101,115,0)]]);
       let frame_x1w = String.fromCharCode(101,95,51,55,95,105,110,105,116,105,97,108,105,122,101,0);
       let subsJ = 1.0;
      let tumbnailY = subsJ >= 7815621.0;
      do {
          let codegen1 = true;
          let j_positionh = 3.0;
          let verticalM = String.fromCharCode(101,120,105,115,116,0);
         subsJ += 2 >> (Math.min(2, Math.abs(parseInt(`${j_positionh}`))));
         codegen1 = !codegen1;
         j_positionh /= Math.max(1, parseFloat(`${verticalM.length}`));
         verticalM += `${((codegen1 ? 5 : 3) | verticalM.length)}`;
         if (tumbnailY) {
            break;
         }
      } while (tumbnailY && ((formd.size / 5) == 4 || (5 * formd.size) == 1));
       let policyx: Map<any, any> = new Map([[String.fromCharCode(117,110,115,101,110,100,0),true ], [String.fromCharCode(115,101,103,109,97,112,95,48,95,49,57,0),false ]]);
       let libavdevice3: Map<any, any> = new Map([[String.fromCharCode(115,112,111,110,115,111,114,101,100,95,99,95,54,51,0),297], [String.fromCharCode(101,109,111,106,105,115,95,50,95,57,48,0),876], [String.fromCharCode(97,99,116,105,118,97,116,101,95,122,95,54,56,0),57]]);
      for (let b = 0; b < 3; b++) {
         subsJ += formd.size / 2;
      }
      let privacyr = frame_x1w.length <= 6790508;
      do {
          let configT = 0.0;
          let latnW = String.fromCharCode(115,104,111,114,116,116,101,114,109,95,119,95,55,50,0);
          let soundP = String.fromCharCode(122,95,51,52,95,118,97,108,105,100,97,116,101,0);
         frame_x1w += `${policyx.size + parseInt(`${configT}`)}`;
         configT *= parseFloat(`${soundP.length}`);
         latnW += `${latnW.length * soundP.length}`;
         if (privacyr) {
            break;
         }
      } while ((1 < (formd.size - 2)) && privacyr);
         subsJ *= policyx.size / (Math.max(frame_x1w.length, 2));
          let nativemoduleS: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,108,105,115,101,100,0),String.fromCharCode(117,102,102,101,114,95,55,95,57,54,0)], [String.fromCharCode(97,108,108,114,103,98,0),String.fromCharCode(115,105,109,112,108,105,102,121,0)]]);
         libavdevice3 = new Map([[`${formd.size}`, 1 << (Math.min(3, frame_x1w.length))]]);
         nativemoduleS.set(`${nativemoduleS.size}`, nativemoduleS.size);
         subsJ -= formd.size << (Math.min(Math.abs(2), 5));
      for (let u = 0; u < 3; u++) {
          let spinners = 3;
          let episodesq = 3.0;
          let referrerV = String.fromCharCode(97,95,51,53,95,100,101,115,99,114,0);
         policyx.set(referrerV, 1 + parseInt(`${subsJ}`));
         spinners -= parseInt(`${episodesq}`);
         episodesq /= Math.max(4, parseFloat(`${spinners}`));
         referrerV = `${spinners % (Math.max(4, parseInt(`${episodesq}`)))}`;
      }
         frame_x1w = `${(frame_x1w == String.fromCharCode(107,0) ? policyx.size : frame_x1w.length)}`;
      hejin = aboutF.includes(canvasu);
   while (Array.from(station9.keys()).includes(`${aboutF.length}`)) {
      aboutF = [((canvasu ? 3 : 1) / (Math.max(2, station9.size)))];
      break;
   }
   if (5 < (station9.size % (Math.max(3, 7)))) {
       let floating7: Map<any, any> = new Map([[String.fromCharCode(119,95,52,49,95,97,100,100,105,116,105,111,110,115,0),844], [String.fromCharCode(107,95,55,49,95,112,111,116,105,115,105,111,110,0),468], [String.fromCharCode(105,110,115,116,97,108,108,101,100,0),996]]);
      let macau2 = 8498289 >= floating7.size;
      do {
         floating7 = new Map([[`${floating7.size}`, floating7.size]]);
         if (macau2) {
            break;
         }
      } while (macau2 && ((floating7.size ^ 5) >= 1 && 4 >= (5 ^ floating7.size)));
      let playlistt = 5176087 <= floating7.size;
      do {
         floating7 = new Map([[`${floating7.size}`, 1]]);
         if (playlistt) {
            break;
         }
      } while ((5 >= floating7.size) && playlistt);
      let score4 = floating7.size <= 8440404;
      do {
          let tooltipsh = 0.0;
         floating7.set(`${tooltipsh}`, parseInt(`${tooltipsh}`) << (Math.min(Math.abs(floating7.size), 1)));
         if (score4) {
            break;
         }
      } while (((floating7.size >> (Math.min(Math.abs(3), 4))) < 2 || (floating7.size >> (Math.min(Math.abs(3), 4))) < 1) && score4);
      sortA += `${sortA.length}`;
   }
      umengL += `${sortA.length ^ aboutF.length}`;
   while (5 == (4 << (Math.min(4, Math.abs(station9.size))))) {
       let libavformatZ = String.fromCharCode(109,95,53,50,0);
      let customX = String.fromCharCode(108,114,51,106,116,55,0) == libavformatZ;
      do {
          let skipp: Array<any> = [251, 662, 162];
          let show7: Map<any, any> = new Map([[String.fromCharCode(109,99,111,114,101,0),727], [String.fromCharCode(99,95,55,49,95,99,112,117,102,108,97,103,115,0),198], [String.fromCharCode(109,101,116,97,100,97,116,97,0),742]]);
          let libavformatU: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,115,95,56,95,52,52,0),319], [String.fromCharCode(117,99,109,112,95,102,95,52,53,0),287], [String.fromCharCode(115,116,97,116,105,115,116,105,99,115,95,48,95,49,57,0),43]]);
          let debugz = String.fromCharCode(103,108,98,108,95,108,95,56,50,0);
         libavformatZ += `${skipp.length >> (Math.min(debugz.length, 2))}`;
         skipp = [show7.size - libavformatU.size];
         show7 = new Map([[`${show7.size}`, 2 | show7.size]]);
         libavformatU = new Map([[`${show7.size}`, show7.size]]);
         debugz = `${show7.size + 1}`;
         if (customX) {
            break;
         }
      } while ((libavformatZ == libavformatZ) && customX);
      while (libavformatZ.endsWith(`${libavformatZ.length}`)) {
         libavformatZ += `${libavformatZ.length}`;
         break;
      }
          let trashw = String.fromCharCode(104,95,57,54,95,103,112,111,115,116,102,105,108,116,101,114,0);
         libavformatZ = "3";
         trashw = `${(String.fromCharCode(105,0) == trashw ? trashw.length : trashw.length)}`;
      umengL = `${libavformatZ.length}`;
      break;
   }

        if (isPinToBottom.current) isPinToBottom.current = false;
    }

    const onMomentumScrollEnd = (e: any) => {
        if (isPinToBottom.current) return;

        const currentYBottom = e.nativeEvent.contentOffset.y + e.nativeEvent.layoutMeasurement.height;

        if (Math.round(currentYBottom) === Math.round(e.nativeEvent.contentSize.height)) {
            isPinToBottom.current = true;
            setNumOfUnread(0);
        }
    }

    const onReconnect = () => {
       let alertX = true;
    let lineC = String.fromCharCode(102,105,108,116,101,114,102,0);
    let utilsp = 0.0;
    let castS = true;
    let render9 = String.fromCharCode(99,114,101,97,116,101,98,97,108,97,110,99,101,95,55,95,54,52,0);
    let latnM = String.fromCharCode(97,110,103,108,101,100,95,118,95,49,49,0);
    let mergeri = 2.0;
    let mimon = 3.0;
    let temperatureI = String.fromCharCode(97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,0);
    let mathS = String.fromCharCode(99,95,54,53,95,106,117,115,116,105,102,121,0);
    let tumbnailN = String.fromCharCode(106,95,49,57,95,113,112,101,108,111,114,0);
    let weiboi = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,0);
    let submita = 3;
    let logoV = 3.0;
    let libglogp = String.fromCharCode(115,109,115,0);
   for (let o = 0; o < 1; o++) {
      lineC = `${temperatureI.length & 1}`;
   }
   for (let q = 0; q < 3; q++) {
       let launcherr: Array<any> = [923, 944];
       let sansp = String.fromCharCode(99,95,55,54,95,119,105,116,104,100,114,97,119,0);
      for (let r = 0; r < 2; r++) {
         sansp = `${launcherr.length}`;
      }
         launcherr = [launcherr.length];
         launcherr.push(launcherr.length);
      while ((3 | sansp.length) <= 1 || (sansp.length | 3) <= 5) {
         launcherr = [launcherr.length >> (Math.min(sansp.length, 2))];
         break;
      }
      while ((launcherr.length + sansp.length) > 2 && (2 + sansp.length) > 1) {
         sansp += `${1 ^ launcherr.length}`;
         break;
      }
          let zhengpianv = String.fromCharCode(110,111,110,109,117,108,116,95,97,95,57,55,0);
          let switch_85 = 1.0;
          let downloading0: Map<any, any> = new Map([[String.fromCharCode(107,95,54,52,95,110,97,108,117,0),true ], [String.fromCharCode(104,95,53,57,95,109,97,110,105,112,117,108,97,116,101,0),true ]]);
         launcherr = [launcherr.length % (Math.max(zhengpianv.length, 4))];
         zhengpianv = `${parseInt(`${switch_85}`)}`;
         switch_85 /= Math.max(2, parseFloat(`${1 * parseInt(`${switch_85}`)}`));
         downloading0 = new Map([[`${downloading0.size}`, parseInt(`${switch_85}`) % (Math.max(downloading0.size, 7))]]);
      temperatureI = "1";
   }
      temperatureI += `${((castS ? 1 : 1) - (alertX ? 1 : 5))}`;
      weiboi += `${parseInt(`${mimon}`)}`;
      weiboi += `${weiboi.length}`;
   for (let v = 0; v < 3; v++) {
      utilsp *= parseFloat(`${1}`);
   }
      tumbnailN += `${(String.fromCharCode(70,0) == lineC ? lineC.length : parseInt(`${utilsp}`))}`;
       let suggestionN = false;
         suggestionN = !suggestionN;
      if (!suggestionN) {
         suggestionN = (suggestionN ? !suggestionN : suggestionN);
      }
         suggestionN = (suggestionN ? suggestionN : suggestionN);
      mimon /= Math.max(1, ((castS ? 4 : 5) * (alertX ? 5 : 3)));
       let optionsC = false;
       let mapbufferU = 5.0;
       let short__A: Array<any> = [594, 256, 591];
         mapbufferU -= parseFloat(`${short__A.length % (Math.max(2, parseInt(`${mapbufferU}`)))}`);
      while ((mapbufferU / (Math.max(4.12, 9))) < 3.30 || 4.12 < mapbufferU) {
         optionsC = short__A.includes(mapbufferU);
         break;
      }
      if (5.5 <= (mapbufferU / (Math.max(2.100, 8))) && 2.100 <= (mapbufferU / (Math.max(1, parseFloat(`${short__A.length}`))))) {
         mapbufferU *= parseFloat(`${1}`);
      }
      while (optionsC) {
          let screenh = true;
          let watchL = String.fromCharCode(115,121,115,116,101,109,0);
         mapbufferU /= Math.max(1, (parseFloat(`${String.fromCharCode(105,0) == watchL ? (screenh ? 4 : 2) : watchL.length}`)));
         break;
      }
      let topon1 = mapbufferU <= 8870859.0;
      do {
         mapbufferU += parseFloat(`${1 / (Math.max(parseInt(`${mapbufferU}`), 7))}`);
         if (topon1) {
            break;
         }
      } while (topon1 && (mapbufferU < 5.3));
      let mappingW = mapbufferU >= 8651139.0;
      do {
         mapbufferU -= parseFloat(`${short__A.length}`);
         if (mappingW) {
            break;
         }
      } while ((!short__A.includes(mapbufferU)) && mappingW);
         optionsC = 12.77 == mapbufferU && 32 == short__A.length;
          let chart1 = String.fromCharCode(114,95,52,55,95,111,118,97,108,0);
          let bufferL: Array<any> = [String.fromCharCode(115,110,97,112,115,104,111,116,116,101,114,95,115,95,50,51,0), String.fromCharCode(114,95,52,52,95,99,97,112,116,105,111,110,0)];
          let internet8 = String.fromCharCode(116,117,110,110,101,108,0);
         mapbufferU *= (parseFloat(`${(optionsC ? 1 : 3) % 3}`));
         chart1 += `${bufferL.length}`;
         bufferL.push(1 & chart1.length);
         internet8 = `${chart1.length}`;
      let bridge3 = optionsC ? !optionsC : optionsC;
      do {
          let libtanF: Array<any> = [490, 132, 938];
         optionsC = mapbufferU == 11.92;
         libtanF = [2];
         if (bridge3) {
            break;
         }
      } while (bridge3 && (2 == (5 | short__A.length)));
      tumbnailN = `${short__A.length}`;
   if (castS && 5 > temperatureI.length) {
      castS = 79 < mathS.length;
   }
   while (lineC.startsWith(tumbnailN)) {
       let snewinterstitialJ = String.fromCharCode(105,110,116,102,105,0);
       let malaysiaE = String.fromCharCode(98,95,49,49,95,104,105,103,104,108,105,103,104,116,0);
       let index1 = String.fromCharCode(105,95,51,49,95,115,101,112,105,97,0);
       let mapbufferp = false;
       let circle5 = 3;
         snewinterstitialJ += `${snewinterstitialJ.length}`;
      for (let q = 0; q < 1; q++) {
         malaysiaE += `${index1.length + snewinterstitialJ.length}`;
      }
          let armvaE = String.fromCharCode(114,95,49,55,95,100,101,116,97,99,104,0);
          let toponV = String.fromCharCode(119,95,49,48,48,95,110,99,114,121,112,116,105,111,110,0);
         index1 = `${3 ^ toponV.length}`;
         armvaE = `${armvaE.length >> (Math.min(3, armvaE.length))}`;
         toponV += `${armvaE.length}`;
      let analyticsI = malaysiaE == String.fromCharCode(111,56,117,115,54,112,120,105,104,0);
      do {
          let l_count3 = String.fromCharCode(97,98,111,117,116,115,95,102,95,54,50,0);
          let long_w6b: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,99,111,100,101,95,121,95,51,53,0),false ], [String.fromCharCode(122,95,51,53,95,109,117,108,116,105,115,105,103,0),false ]]);
         malaysiaE += `${malaysiaE.length >> (Math.min(1, index1.length))}`;
         l_count3 += "1";
         long_w6b = new Map([[`${long_w6b.size}`, l_count3.length % (Math.max(2, 10))]]);
         if (analyticsI) {
            break;
         }
      } while ((!mapbufferp || 3 <= malaysiaE.length) && analyticsI);
      while (malaysiaE.length == 3) {
         malaysiaE += `${3 ^ malaysiaE.length}`;
         break;
      }
         index1 = `${index1.length}`;
      if ((circle5 * snewinterstitialJ.length) <= 2) {
         circle5 |= circle5 ^ index1.length;
      }
         index1 = `${snewinterstitialJ.length + 2}`;
          let updatesQ = String.fromCharCode(115,104,111,114,116,115,0);
          let zhengpianh = String.fromCharCode(102,95,50,50,95,109,105,112,115,100,115,112,0);
         index1 += `${circle5}`;
         updatesQ = `${updatesQ.length - zhengpianh.length}`;
         zhengpianh = `${zhengpianh.length}`;
         mapbufferp = 89 == snewinterstitialJ.length;
      while ((circle5 << (Math.min(Math.abs(5), 3))) == 1) {
         index1 = `${(index1.length & (mapbufferp ? 4 : 1))}`;
         break;
      }
       let friendss = 2;
       let dycreator2 = 5;
      let anytime2 = malaysiaE == String.fromCharCode(104,118,112,52,103,115,0);
      do {
         malaysiaE = `${(friendss >> (Math.min(5, Math.abs((mapbufferp ? 4 : 4)))))}`;
         if (anytime2) {
            break;
         }
      } while (anytime2 && (!malaysiaE.startsWith(`${mapbufferp}`)));
      for (let r = 0; r < 2; r++) {
         friendss ^= ((mapbufferp ? 2 : 3) % (Math.max(dycreator2, 8)));
      }
       let gdtadvY = String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,0);
      lineC += `${circle5}`;
      break;
   }

        appDispatch(joinChatRoom({
            roomId: matchID,
            sportType: sportType,
        }));
    }

    const onFlatlistChange = (w: number, h: number) => {
        if (isPinToBottom.current && chatFlatListRef.current) {
            chatFlatListRef.current?.scrollToOffset({
                offset: h,
            });
        }
    }

    const onUnreadPress = () => {
       let libavdevicer = String.fromCharCode(108,95,55,51,95,100,101,99,98,110,0);
    let debug8: Array<any> = [177, 281, 294];
    let data8 = String.fromCharCode(99,100,108,109,115,95,50,95,56,48,0);
    let libreactnativejniw = String.fromCharCode(112,108,97,110,97,114,116,111,121,117,121,95,99,95,55,0);
    let executorx = 3.0;
    let controlsn = String.fromCharCode(102,114,111,109,98,121,116,101,115,95,101,95,54,51,0);
    let gemfileY = 5.0;
    let reactnativejsz = String.fromCharCode(110,100,101,102,0);
   let routero = String.fromCharCode(101,105,108,100,121,57,117,0) == data8;
   do {
       let controlsf = 4.0;
       let libavcodec7 = String.fromCharCode(118,95,51,48,95,101,122,105,101,114,0);
       let minivodX = false;
       let skipY: Array<any> = [592, 31, 155];
       let fullf = 3;
         fullf &= (libavcodec7 == String.fromCharCode(102,0) ? libavcodec7.length : fullf);
      while (fullf >= 1) {
         fullf %= Math.max(5, ((minivodX ? 3 : 5) * 1));
         break;
      }
      while (minivodX) {
         minivodX = 86.44 <= controlsf;
         break;
      }
       let sharedz = String.fromCharCode(99,95,54,56,95,104,100,101,99,0);
       let tumbnailB = String.fromCharCode(99,104,117,110,107,115,95,54,95,55,57,0);
      while (libavcodec7.endsWith(`${minivodX}`)) {
          let tcopy_kZ: Map<any, any> = new Map([[String.fromCharCode(104,97,98,108,101,95,115,95,49,57,0),486], [String.fromCharCode(112,114,111,116,101,99,116,101,100,95,111,95,51,55,0),825]]);
         minivodX = skipY.length == 3 || String.fromCharCode(107,0) == sharedz;
         tcopy_kZ.set(`${tcopy_kZ.size}`, tcopy_kZ.size + tcopy_kZ.size);
         break;
      }
          let reactnativejsE = 5.0;
         skipY.push(1);
         reactnativejsE *= parseFloat(`${parseInt(`${reactnativejsE}`)}`);
         libavcodec7 = `${(3 & (minivodX ? 5 : 5))}`;
         minivodX = 95 <= sharedz.length;
      for (let z = 0; z < 3; z++) {
         sharedz = `${sharedz.length}`;
      }
         sharedz = `${tumbnailB.length / (Math.max(libavcodec7.length, 9))}`;
          let default_i0 = true;
          let selection4 = true;
         libavcodec7 = `${sharedz.length & 2}`;
         default_i0 = (!default_i0 ? default_i0 : !default_i0);
         selection4 = default_i0;
         fullf &= tumbnailB.length;
      if (!tumbnailB.includes(`${minivodX}`)) {
         minivodX = !minivodX;
      }
         libavcodec7 = `${1 ^ fullf}`;
         minivodX = sharedz.length >= 5 && minivodX;
      data8 = `${skipY.length}`;
      if (routero) {
         break;
      }
   } while (routero && (!libavdevicer.includes(data8)));
       let frame_0G = 0.0;
      for (let p = 0; p < 1; p++) {
         frame_0G *= parseFloat(`${parseInt(`${frame_0G}`) * parseInt(`${frame_0G}`)}`);
      }
         frame_0G -= parseFloat(`${3}`);
      let assistQ = frame_0G <= 7029539.0;
      do {
         frame_0G += parseFloat(`${1}`);
         if (assistQ) {
            break;
         }
      } while (assistQ && ((frame_0G / (Math.max(2, frame_0G))) <= 3.98 || (frame_0G + 3.98) <= 5.81));
      libreactnativejniw += `${debug8.length - parseInt(`${frame_0G}`)}`;
   while (!libreactnativejniw.includes(`${debug8.length}`)) {
      libreactnativejniw += `${2 >> (Math.min(3, debug8.length))}`;
      break;
   }
       let shrinkb = true;
       let largex = String.fromCharCode(108,105,98,101,114,116,121,0);
       let producty = 4;
      while (shrinkb) {
         shrinkb = 97 >= producty;
         break;
      }
         producty ^= largex.length >> (Math.min(Math.abs(1), 1));
         largex += `${(largex == String.fromCharCode(75,0) ? largex.length : (shrinkb ? 2 : 3))}`;
          let inactiveP = 4.0;
         producty |= ((shrinkb ? 4 : 2) - parseInt(`${inactiveP}`));
          let episodes1 = String.fromCharCode(112,95,57,51,95,108,101,97,115,101,0);
          let modep = 5.0;
          let resendV = 2.0;
         producty *= 1;
         episodes1 += `${episodes1.length & parseInt(`${modep}`)}`;
         modep += parseFloat(`${1}`);
         resendV += (episodes1 == String.fromCharCode(90,0) ? episodes1.length : parseInt(`${resendV}`));
      while (5 > producty) {
         largex += `${(3 ^ (shrinkb ? 4 : 3))}`;
         break;
      }
         shrinkb = shrinkb || largex.length <= 32;
      let commentK = shrinkb ? !shrinkb : shrinkb;
      do {
         shrinkb = largex.length <= 100 || !shrinkb;
         if (commentK) {
            break;
         }
      } while ((largex.endsWith(`${shrinkb}`)) && commentK);
      let commonC = shrinkb ? !shrinkb : shrinkb;
      do {
         shrinkb = largex.length < 20 || !shrinkb;
         if (commonC) {
            break;
         }
      } while (commonC && (!largex.includes(`${shrinkb}`)));
      executorx /= Math.max(4, parseFloat(`${debug8.length}`));
   if (parseFloat(`${libreactnativejniw.length}`) == executorx) {
       let buttonH = String.fromCharCode(114,101,109,117,120,0);
       let targetu = true;
          let goalO: Map<any, any> = new Map([[String.fromCharCode(100,117,114,97,116,105,111,110,0),String.fromCharCode(110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0)], [String.fromCharCode(108,105,115,116,105,110,103,115,0),String.fromCharCode(109,112,116,111,97,110,110,101,120,98,0)]]);
         targetu = targetu && buttonH.length < 37;
         goalO.set(`${goalO.size}`, goalO.size / (Math.max(3, goalO.size)));
          let indicatorf = String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,0);
          let main_ij = String.fromCharCode(104,95,49,48,0);
          let typesS = String.fromCharCode(105,110,100,101,120,101,100,95,53,95,50,53,0);
         targetu = !buttonH.endsWith(`${targetu}`);
         indicatorf = `${main_ij.length}`;
         main_ij = `${main_ij.length}`;
         typesS += `${main_ij.length * 2}`;
       let i_viewG = 1;
      for (let o = 0; o < 3; o++) {
          let styless = String.fromCharCode(99,95,53,50,95,100,101,112,111,115,105,116,0);
          let chinasameJ: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,115,121,110,99,95,121,95,56,0),String.fromCharCode(103,115,117,98,95,49,95,51,52,0)], [String.fromCharCode(100,101,112,97,114,116,109,101,110,116,0),String.fromCharCode(100,111,110,116,95,109,95,50,54,0)]]);
          let userM = String.fromCharCode(112,97,114,101,110,116,104,101,115,101,115,0);
          let bridgeC = String.fromCharCode(115,95,51,57,95,114,103,98,112,108,117,115,0);
          let nextB = true;
         targetu = (((targetu ? 44 : buttonH.length) - buttonH.length) < 44);
         styless += `${chinasameJ.size}`;
         chinasameJ.set(styless, chinasameJ.size / (Math.max(2, 6)));
         userM += `${userM.length}`;
         bridgeC = `${((nextB ? 5 : 1))}`;
      }
         targetu = (i_viewG | buttonH.length) >= 73;
          let areaJ = 0;
          let transferW: Array<any> = [870, 386];
          let verticalS: Map<any, any> = new Map([[String.fromCharCode(99,97,112,97,98,105,108,105,116,121,95,104,95,55,54,0),String.fromCharCode(122,95,53,56,95,102,114,101,101,100,117,109,112,98,117,102,102,101,114,0)], [String.fromCharCode(108,95,49,56,95,103,109,104,100,0),String.fromCharCode(97,99,114,111,110,121,109,0)], [String.fromCharCode(112,97,114,105,116,121,95,100,95,52,51,0),String.fromCharCode(121,95,51,95,97,100,106,117,115,116,101,114,0)]]);
         buttonH = "3";
         areaJ += transferW.length << (Math.min(4, Math.abs(verticalS.size)));
         transferW.push(1);
         verticalS.set(`${transferW.length}`, transferW.length);
      executorx += parseFloat(`${2 / (Math.max(4, buttonH.length))}`);
   }

        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

       let quest3 = String.fromCharCode(115,117,112,112,114,101,115,115,101,100,0);
       let championE: Array<any> = [454, 478, 522];
       let textinputI = String.fromCharCode(112,114,101,116,99,104,0);
          let toponw = 0.0;
          let rewindx = String.fromCharCode(122,95,51,48,95,115,117,98,109,105,116,0);
          let libyogac = String.fromCharCode(115,105,112,114,0);
         textinputI += "3";
         toponw /= Math.max(parseFloat(`${libyogac.length ^ 1}`), 2);
         rewindx += "3";
         libyogac += `${libyogac.length + 3}`;
          let register_xH = String.fromCharCode(108,95,50,95,102,108,97,115,104,105,110,103,0);
          let bridge4 = 0.0;
         quest3 = "1";
         register_xH += "2";
         bridge4 -= (parseFloat(`${String.fromCharCode(108,0) == register_xH ? register_xH.length : parseInt(`${bridge4}`)}`));
       let libmapbufferjnic = false;
       let filledC = 5.0;
       let libpangleflipped8 = 0.0;
          let buttonq = 2;
          let forwarde = 2.0;
          let streamingA = 5.0;
         filledC *= parseInt(`${forwarde}`);
         buttonq -= 3;
         forwarde /= Math.max(5, buttonq & parseInt(`${streamingA}`));
         streamingA -= parseFloat(`${2 % (Math.max(9, parseInt(`${streamingA}`)))}`);
         libpangleflipped8 *= quest3.length << (Math.min(Math.abs(3), 3));
      for (let x = 0; x < 3; x++) {
         championE.push((parseInt(`${filledC}`) + (libmapbufferjnic ? 2 : 3)));
      }
         libpangleflipped8 += (parseInt(`${filledC}`) & (libmapbufferjnic ? 4 : 1));
          let videok = String.fromCharCode(101,95,49,53,95,111,112,101,114,97,116,111,114,0);
          let hejiU = String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,115,0);
          let becomel = String.fromCharCode(115,109,97,108,108,0);
         quest3 = `${3 + hejiU.length}`;
         videok += `${becomel.length << (Math.min(4, videok.length))}`;
         hejiU += "1";
         becomel += `${becomel.length - 3}`;
      gemfileY /= Math.max(3, 5);
       let switch_ri = 3.0;
       let miniO = false;
       let v_unlock8 = false;
         switch_ri += 2 ^ parseInt(`${switch_ri}`);
       let footballe: Array<any> = [781, 247, 90];
      for (let s = 0; s < 1; s++) {
          let floatingU = 4;
          let inewinterstitialX = String.fromCharCode(117,95,49,48,48,0);
          let castE = false;
         miniO = v_unlock8 && miniO;
         floatingU <<= Math.min(2, Math.abs(inewinterstitialX.length & 1));
         inewinterstitialX = "2";
      }
          let helperL = String.fromCharCode(115,101,97,114,99,104,97,98,108,101,95,109,95,51,56,0);
          let stepR = 5;
         footballe.push(parseInt(`${switch_ri}`) % (Math.max(9, stepR)));
         helperL += `${helperL.length >> (Math.min(helperL.length, 4))}`;
         stepR /= Math.max(helperL.length ^ helperL.length, 5);
         miniO = !v_unlock8;
          let entryK = 5;
          let libavcodec_ = String.fromCharCode(103,95,49,50,95,99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,0);
         miniO = String.fromCharCode(109,0) == libavcodec_;
         entryK += entryK;
         libavcodec_ += `${3 << (Math.min(3, Math.abs(entryK)))}`;
          let showu = String.fromCharCode(104,95,50,55,95,112,105,99,107,108,112,102,0);
         miniO = showu.length >= 98;
      for (let w = 0; w < 2; w++) {
         miniO = footballe.length < 22;
      }
         miniO = switch_ri <= 23.31 || v_unlock8;
      debug8.push(parseInt(`${executorx}`));
   let neonk = gemfileY <= 6765783.0;
   do {
      gemfileY *= parseInt(`${gemfileY}`);
      if (neonk) {
         break;
      }
   } while ((1.75 == (gemfileY - 3.26) || 1 == (parseInt(`${gemfileY}`) - reactnativejsz.length)) && neonk);
   while (libavdevicer.length > 5) {
       let appleO: Array<any> = [700, 304];
       let appleM = 1.0;
       let plusy = 5;
       let models4 = false;
       let ewardedz = String.fromCharCode(109,95,51,48,95,97,99,99,101,115,115,0);
      if ((appleM / 5.57) > 1.79) {
         appleO.push(((models4 ? 4 : 4) % (Math.max(plusy, 9))));
      }
         appleO.push(3);
      for (let d = 0; d < 1; d++) {
         appleM /= Math.max(4, (String.fromCharCode(57,0) == ewardedz ? appleO.length : ewardedz.length));
      }
         models4 = (((!models4 ? ewardedz.length : 99) % (Math.max(ewardedz.length, 10))) == 99);
      while (3 >= (ewardedz.length & 4)) {
         appleM /= Math.max(5, ewardedz.length);
         break;
      }
      if (plusy >= appleO.length) {
          let lang7 = String.fromCharCode(116,95,49,50,95,119,105,110,100,111,119,101,100,0);
          let fastforwardD = 0;
          let heartg = String.fromCharCode(119,111,114,107,0);
          let umeng2 = 5.0;
         plusy /= Math.max(fastforwardD * 3, 3);
         lang7 = `${(String.fromCharCode(111,0) == heartg ? parseInt(`${umeng2}`) : heartg.length)}`;
         fastforwardD >>= Math.min(2, heartg.length);
         umeng2 -= lang7.length << (Math.min(3, Math.abs(parseInt(`${umeng2}`))));
      }
         models4 = 83 <= plusy || 26.23 <= appleM;
         models4 = (plusy >> (Math.min(appleO.length, 1))) <= 58;
       let search8 = false;
         plusy >>= Math.min(4, appleO.length);
      while (!search8) {
          let penaltyi: Map<any, any> = new Map([[String.fromCharCode(109,95,51,48,95,105,110,100,101,120,111,102,0),false ], [String.fromCharCode(97,95,57,56,95,108,101,97,115,116,0),true ]]);
          let combineG = true;
         ewardedz = `${((search8 ? 4 : 2) * 2)}`;
         penaltyi = new Map([[`${penaltyi.size}`, (3 & (combineG ? 5 : 1))]]);
         combineG = penaltyi.size == 86;
         break;
      }
         models4 = !ewardedz.endsWith(`${search8}`);
          let baiduO = String.fromCharCode(107,101,121,102,114,97,109,101,115,0);
          let list9: Array<any> = [516, 424];
          let filledH = 4.0;
         search8 = !search8;
         baiduO = `${list9.length | 1}`;
         list9 = [list9.length];
         filledH *= (parseFloat(`${String.fromCharCode(85,0) == baiduO ? parseInt(`${filledH}`) : baiduO.length}`));
         appleO.push(2 | appleO.length);
          let watcho: Array<any> = [604, 875, 205];
         search8 = ewardedz.length >= 24;
         watcho = [2 * watcho.length];
      executorx /= Math.max((parseFloat(`${String.fromCharCode(72,0) == reactnativejsz ? reactnativejsz.length : parseInt(`${gemfileY}`)}`)), 2);
      break;
   }
   while (!libavdevicer.startsWith(libreactnativejniw)) {
      libavdevicer += `${libreactnativejniw.length + debug8.length}`;
      break;
   }

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });

   while (1.67 > executorx) {
      gemfileY += debug8.length >> (Math.min(libreactnativejniw.length, 3));
      break;
   }
   let bingo = executorx >= 5777072.0;
   do {
      executorx -= parseFloat(`${3 / (Math.max(7, debug8.length))}`);
      if (bingo) {
         break;
      }
   } while (((executorx * 5.91) == 2.44) && bingo);
      gemfileY -= parseInt(`${gemfileY}`);
      libreactnativejniw += `${(String.fromCharCode(88,0) == libreactnativejniw ? libreactnativejniw.length : controlsn.length)}`;
   if (!libreactnativejniw.startsWith(controlsn)) {
      libreactnativejniw += `${debug8.length}`;
   }
        setNumOfUnread(0);
    }

    useEffect(() => {
        if ((chatState.liveRoom?.messages.length ?? 0) > 0 && isPinToBottom.current == false) {
            setNumOfUnread(prev => {
                if (prev === CHAT_BOX_MAX_ITEM) {
                    return CHAT_BOX_MAX_ITEM;
                }

                return prev + 1
            });
        }
    }, [chatState.liveRoom?.messages.length])

    return (
        <View style={styles.container}>
            {streamer !== null &&
                <View style={styles.privateChatContainer}>
                    <Avatar
                        source={streamer.avatar && streamer.avatar !== ''
                            ? { uri: streamer.avatar }
                            : require("@static/images/tempBasketballHooks.png")
                        }
                        avatarStyle={{
                            borderRadius: 100,
                        }}
                        containerStyle={{
                            marginRight: 10,
                        }}
                    />

                    <View style={styles.chatTextContainer}>
                        <Text style={styles.chatText}>
                            {streamer !== null ? streamer.nickname : ''}
                        </Text>
                    </View>

                    <CPressable style={styles.privateChatButton} onPress={onPrivateChatPress}>
                        <Text style={styles.privateChatText}>
                            私聊
                        </Text>
                    </CPressable>
                </View>
            }

            {chats &&
                <View style={styles.pinChatContainer}>
                    <Text style={styles.chatNameText}>
                        {chats.botName}
                    </Text>

                    <View style={styles.chatTextContainer}>
                        <Text style={styles.chatText}>
                            {chats.botMessage}
                        </Text>
                    </View>
                </View>
            }

            <FlatList
                ref={ref => chatFlatListRef.current = ref}
                keyExtractor={(item) => item.createAt}
                data={chatState.liveRoom?.messages}
                renderItem={renderItem}
                style={styles.chatlistContainer}
                ItemSeparatorComponent={renderSeparator}
                onTouchStart={onUserScroll}
                onMomentumScrollEnd={onMomentumScrollEnd}
                onContentSizeChange={onFlatlistChange}
            />


            {!chatState.liveRoom === null &&
                <View style={styles.disconnectChatContainer}>
                    <Text style={styles.chatText}>
                        {'聊天室链接失败。'}
                    </Text>
                    <CPressable onPress={onReconnect}>
                        <Text style={styles.chatNameText}>
                            {'重新加载'}
                        </Text>
                    </CPressable>
                </View>
            }

            {numOfUnread > 0 &&
                <UnreadCard
                    text={numOfUnread}
                    onPress={onUnreadPress}
                    style={{
                        position: 'absolute',
                        bottom: 70,
                        left: 0,
                        right: 0,
                    }}
                />
            }

            <View style={styles.commentInputContainer}>
                <CTextInput
                    style={styles.commentInput}
                    placeholder={!isLogin ? '登入即可发言' : '发送消息'}
                    value={cooldownTimeout !== null ? '请稍后再输入' : comment}
                    onChangeText={onChangeComment}
                    maxLength={COMMENT_MAX_INPUT + PIN_YIN_ACCEPTED}
                    disabled={!isLogin || cooldownTimeout !== null}
                    onFocus={() => {
                        if (onInputFocus) onInputFocus(true);
                    }}
                    onBlur={() => {
                        if (onInputFocus) onInputFocus(false);
                    }}
                />

                <Text style={isCommentValid ? styles.commentText : styles.commentInvalidText}>
                    {comment.length} / {COMMENT_MAX_INPUT}
                </Text>

                <CPressable onPress={onSubmitComment}>
                    {comment.trim().length > 0 && isCommentValid
                        ? <SendFillIcon />
                        : <SendIcon style={{ marginLeft: 5, marginRight: 5 }} />
                    }
                </CPressable>
            </View>
        </View>
    );
};

export default memo(LiveChatPage);
