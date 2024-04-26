import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import createStyles from "./ww_utils_orangeclock";
import { useAppDispatch, useSelector } from "@hooks/ww_catagory_neon";
import { CPressable, CTextInput } from "../../../../components/atoms";
import SendIcon from '@static/images/renderPauseLibffmpegkit.svg';
import SendFillIcon from '@static/images/middlewareCatagory.svg';
import { COMMENT_MAX_INPUT } from "@utility/ww_icon";
import { wwSharemodal } from "@type/ww_dycreator_result";
import { wwDacccfaabfbcbadeebddcabacdffdbcEventsplash } from "@redux/reducers/ww_mbbanner";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux/actions/ww_single";
import { wwSports } from "../../../types/ww_dice";
import { useTheme } from "@react-navigation/native";
import { Avatar } from "@rneui/base";
import { wwLibrrc, wwLargebrightnessWhite } from "@type/ww_mail_redgoal";
import { debounce } from "lodash";
import { UnreadCard } from "../../../../components/chat/ww_profileinactive";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

type wwIndexDice = {
    matchID: string,
    streamer: wwSports,
    sportType: string,
    onInputFocus?: (isFocus: boolean) => void,
}

const PrivateChatPage = ({
    matchID,
    streamer,
    sportType,
    onInputFocus,
}: wwIndexDice) => {
    const PIN_YIN_ACCEPTED = 20;

    const { colors } = useTheme();
    const styles = useMemo(() => createStyles({ colors }), []);

    const chatState = useSelector<wwDacccfaabfbcbadeebddcabacdffdbcEventsplash>('chatReducer');
    const userState = useSelector<wwVertical>('userReducer');
    const [comment, setComment] = useState('');
    const [historyChat, sethistoryChat] = useState<wwLibrrc[]>([]);
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<wwLibrrc> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = wwBodan.isLogin(userState.user);

    const appDispatch = useAppDispatch();

    useEffect(() => {
        appDispatch(joinChatRoom({
            roomId: matchID,
            isPrivate: true,
            sportType: sportType,
        }));

        return () => {
            appDispatch(leaveChatRoom({
                isPrivate: true,
            }));
        }
    }, []);

    useEffect(() => {
        if (chatState.privateRoom !== null && historyChat.length === 0) {
            getHistory();
        }
    }, [chatState.privateRoom]);

    const getHistory = debounce(() => {
       let predictionactive1 = 5.0;
    let chinasames = 0.0;
    let eventsplashR = 2;
    let sliderk: Array<any> = [237, 192];
    let selectY = String.fromCharCode(97,115,107,105,110,103,95,49,95,57,48,0);
    let dropdown9: Array<any> = [692, 634];
    let expiredS = String.fromCharCode(116,105,109,101,105,110,102,111,114,99,101,95,104,95,51,56,0);
    let gemfileN = 3;
    let sharemodal7: Map<any, any> = new Map([[String.fromCharCode(108,95,57,50,95,114,97,100,105,97,108,0),83], [String.fromCharCode(113,115,118,100,101,105,110,116,95,99,95,49,57,0),278], [String.fromCharCode(115,101,103,117,101,95,113,95,56,49,0),767]]);
    let dplusP: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,100,95,101,95,52,56,0),689], [String.fromCharCode(115,95,48,95,101,118,97,108,102,117,110,99,0),637]]);
    let lineD: Array<any> = [730, 317];
    let circlev = 4;
    let closez = 1.0;
    let viewer8 = String.fromCharCode(110,95,54,53,95,101,115,116,97,98,108,105,115,104,0);
    let scrollviewY = 4.0;
   for (let j = 0; j < 3; j++) {
      gemfileN /= Math.max(sliderk.length, 5);
   }
       let unreadW: Array<any> = [898, 968];
       let modulesH = false;
       let final_92t = String.fromCharCode(99,108,111,115,101,115,116,95,108,95,51,49,0);
       let libpangleflippedC: Array<any> = [44, 29, 171];
       let listE: Array<any> = [64, 363, 50];
         modulesH = unreadW.length < 82;
      while ((4 << (Math.min(5, libpangleflippedC.length))) == 3) {
         libpangleflippedC = [((modulesH ? 3 : 1) / 2)];
         break;
      }
      while ((unreadW.length | 2) < 1) {
         unreadW.push(2);
         break;
      }
         modulesH = !modulesH;
          let sportsi = String.fromCharCode(120,95,57,50,95,101,108,101,118,97,116,101,0);
          let clubY = String.fromCharCode(112,95,57,54,95,103,101,110,99,102,103,115,0);
         final_92t = `${clubY.length % (Math.max(sportsi.length, 1))}`;
      while (3 >= listE.length) {
         listE.push((final_92t == String.fromCharCode(85,0) ? final_92t.length : listE.length));
         break;
      }
      if (final_92t.length < listE.length) {
         listE = [((modulesH ? 4 : 3) % (Math.max(libpangleflippedC.length, 9)))];
      }
         final_92t = "1";
      eventsplashR /= Math.max(2, expiredS.length >> (Math.min(1, Math.abs(eventsplashR))));
      chinasames *= dropdown9.length >> (Math.min(4, Math.abs(parseInt(`${predictionactive1}`))));

        const histories = chatState.privateRoomHistory?.filter(e => e.roomId === `private:${matchID}` && e.userId === chatState.userId);

      dropdown9 = [3];
   if (chinasames == 5.43) {
       let detailsw = String.fromCharCode(110,95,52,52,95,97,102,102,101,99,116,101,100,0);
       let libfolly3: Map<any, any> = new Map([[String.fromCharCode(121,95,51,55,95,112,105,120,101,108,102,108,111,97,116,0),794], [String.fromCharCode(119,114,105,116,101,99,111,112,121,95,51,95,57,54,0),233]]);
       let types5 = String.fromCharCode(111,112,101,110,99,108,95,54,95,50,57,0);
       let iconbackwhiteL = String.fromCharCode(114,111,112,115,116,101,110,95,101,95,54,55,0);
      while (detailsw.includes(types5)) {
         types5 += "1";
         break;
      }
       let defaultplayerimg6 = 3.0;
      while (1 < (libfolly3.size & detailsw.length) && (1 & libfolly3.size) < 4) {
         libfolly3 = new Map([[`${defaultplayerimg6}`, parseInt(`${defaultplayerimg6}`) << (Math.min(iconbackwhiteL.length, 1))]]);
         break;
      }
          let tempnodatagifm = 2;
          let goalQ: Map<any, any> = new Map([[String.fromCharCode(119,95,54,54,0),655], [String.fromCharCode(117,95,51,49,95,112,101,114,102,111,114,109,105,110,103,0),614], [String.fromCharCode(115,99,97,110,110,101,100,95,98,95,57,52,0),501]]);
          let resultn = 3.0;
         libfolly3 = new Map([[detailsw, detailsw.length]]);
         tempnodatagifm >>= Math.min(1, Math.abs(tempnodatagifm / (Math.max(goalQ.size, 5))));
         goalQ = new Map([[`${tempnodatagifm}`, tempnodatagifm << (Math.min(Math.abs(parseInt(`${resultn}`)), 1))]]);
         resultn /= Math.max(goalQ.size * parseInt(`${resultn}`), 1);
      let clock3 = String.fromCharCode(98,51,103,122,48,0) == iconbackwhiteL;
      do {
          let windO = String.fromCharCode(112,95,57,54,95,103,114,97,100,0);
          let profileactivej = String.fromCharCode(117,95,54,56,95,109,101,97,115,117,114,105,110,103,0);
         iconbackwhiteL = `${profileactivej.length}`;
         windO += "3";
         profileactivej = `${3 % (Math.max(7, windO.length))}`;
         if (clock3) {
            break;
         }
      } while ((!types5.endsWith(`${iconbackwhiteL.length}`)) && clock3);
      let actionsk = iconbackwhiteL == String.fromCharCode(113,53,105,0);
      do {
         iconbackwhiteL += `${detailsw.length}`;
         if (actionsk) {
            break;
         }
      } while (actionsk && (types5.includes(iconbackwhiteL)));
      for (let e = 0; e < 2; e++) {
         defaultplayerimg6 /= Math.max(parseInt(`${defaultplayerimg6}`), 4);
      }
          let iconsaveimage1: Array<any> = [971, 883];
          let gpayS = String.fromCharCode(98,105,116,115,116,114,105,110,103,95,103,95,56,53,0);
          let defaultlogo6 = String.fromCharCode(112,95,55,52,95,100,105,97,108,111,103,117,101,115,0);
         libfolly3.set(iconbackwhiteL, iconbackwhiteL.length / (Math.max(5, parseInt(`${defaultplayerimg6}`))));
         iconsaveimage1.push(1 << (Math.min(3, iconsaveimage1.length)));
         gpayS = `${gpayS.length}`;
         defaultlogo6 = `${defaultlogo6.length}`;
      let moonL = 5201978 <= detailsw.length;
      do {
         detailsw = `${detailsw.length - 1}`;
         if (moonL) {
            break;
         }
      } while (((defaultplayerimg6 - 5.10) <= 3.45) && moonL);
         libfolly3 = new Map([[`${libfolly3.size}`, 2]]);
       let gifgoalbga = String.fromCharCode(114,118,100,97,116,97,95,104,95,52,48,0);
      for (let l = 0; l < 1; l++) {
          let libflipper6: Array<any> = [796, 189, 581];
          let rewardvideoY: Map<any, any> = new Map([[String.fromCharCode(118,95,55,50,95,104,97,114,100,0),516], [String.fromCharCode(121,95,49,48,95,97,116,111,109,105,99,111,112,115,0),464]]);
          let leakcheckerd: Map<any, any> = new Map([[String.fromCharCode(98,95,48,95,101,120,116,101,114,110,97,108,0),898], [String.fromCharCode(101,110,99,111,100,101,109,118,95,112,95,52,49,0),819]]);
         libfolly3.set(detailsw, libflipper6.length & 1);
         libflipper6 = [rewardvideoY.size + 2];
         rewardvideoY.set(`${rewardvideoY.size}`, 3);
         leakcheckerd.set(`${leakcheckerd.size}`, 2 / (Math.max(7, rewardvideoY.size)));
      }
      sliderk = [gemfileN];
   }
   if (selectY.includes(`${dropdown9.length}`)) {
       let episodef = String.fromCharCode(106,95,56,55,0);
       let unticko: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,114,101,116,101,95,99,95,54,48,0),String.fromCharCode(108,117,116,121,117,118,95,116,95,55,53,0)], [String.fromCharCode(97,108,103,111,114,105,116,104,109,115,95,57,95,52,57,0),String.fromCharCode(104,95,54,51,95,121,117,121,118,116,111,121,117,118,0)], [String.fromCharCode(102,95,48,95,97,117,116,111,117,112,100,97,116,101,0),String.fromCharCode(105,110,116,114,97,112,114,101,100,95,119,95,55,51,0)]]);
         episodef += `${episodef.length}`;
         unticko = new Map([[`${unticko.size}`, (String.fromCharCode(78,0) == episodef ? episodef.length : unticko.size)]]);
      while ((episodef.length >> (Math.min(4, Math.abs(unticko.size)))) <= 5) {
          let bingL = 1;
          let texti = String.fromCharCode(115,121,110,99,115,97,102,101,95,112,95,51,0);
          let modalO = true;
          let leakcheckerD = 1.0;
          let dependencyu = 2.0;
         unticko.set(`${bingL}`, 3);
         bingL += 3;
         texti = "1";
         modalO = parseInt(`${leakcheckerD}`) < texti.length;
         leakcheckerD -= ((modalO ? 4 : 3) / (Math.max(parseInt(`${leakcheckerD}`), 5)));
         dependencyu += parseInt(`${leakcheckerD}`) * texti.length;
         break;
      }
         unticko.set(episodef, episodef.length);
         unticko = new Map([[`${unticko.size}`, unticko.size]]);
         episodef += `${(episodef == String.fromCharCode(76,0) ? episodef.length : unticko.size)}`;
      selectY = `${eventsplashR ^ 1}`;
   }

        if (!histories || histories.length === 0) return;

   let predictionh = 7675005 >= sliderk.length;
   do {
       let styles7 = String.fromCharCode(104,101,120,100,117,109,112,95,50,95,50,51,0);
       let projecth = 3.0;
       let basketballhometeam1 = 5.0;
       let dropdownu = String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,95,50,95,50,49,0);
      let libavdeviceS = projecth >= 9010670.0;
      do {
         projecth *= dropdownu.length;
         if (libavdeviceS) {
            break;
         }
      } while ((basketballhometeam1 >= 3.20) && libavdeviceS);
       let iconbellactiveD: Array<any> = [String.fromCharCode(97,115,107,95,111,95,52,56,0), String.fromCharCode(108,95,55,48,95,100,101,115,99,114,105,112,116,111,114,115,0), String.fromCharCode(110,95,56,52,95,118,97,108,105,100,97,116,101,0)];
      if (iconbellactiveD.length > 4) {
         styles7 = "1";
      }
      while (5 < (5 % (Math.max(4, iconbellactiveD.length)))) {
         iconbellactiveD.push(1 / (Math.max(7, parseInt(`${basketballhometeam1}`))));
         break;
      }
       let hongkongf = 1.0;
       let libtang = 4.0;
         projecth += parseInt(`${libtang}`) % 3;
         basketballhometeam1 -= parseInt(`${projecth}`);
         hongkongf += parseFloat(`${3}`);
         hongkongf /= Math.max(parseFloat(`${parseInt(`${projecth}`)}`), 1);
      for (let o = 0; o < 3; o++) {
         hongkongf -= parseFloat(`${dropdownu.length % (Math.max(4, iconbellactiveD.length))}`);
      }
       let downloading_ = String.fromCharCode(97,114,98,105,116,114,97,114,121,95,120,95,50,57,0);
       let fileY = String.fromCharCode(97,108,103,111,114,105,116,104,109,95,49,95,54,53,0);
      if ((4 * parseInt(`${basketballhometeam1}`)) > 2 && (dropdownu.length * 4) > 1) {
         basketballhometeam1 /= Math.max(dropdownu.length, 3);
      }
      sliderk.push(gemfileN >> (Math.min(Math.abs(parseInt(`${basketballhometeam1}`)), 3)));
      if (predictionh) {
         break;
      }
   } while (predictionh && (4 > (4 | sliderk.length)));
       let goalJ = String.fromCharCode(98,111,111,107,107,101,101,112,105,110,103,95,97,95,52,51,0);
       let libavfilterW: Array<any> = [196, 602];
         libavfilterW = [1];
         goalJ += `${3 | goalJ.length}`;
       let corneri = true;
      while (goalJ.startsWith(`${corneri}`)) {
          let styles4 = 4.0;
         corneri = !corneri;
         styles4 += parseFloat(`${3 * parseInt(`${styles4}`)}`);
         break;
      }
         goalJ = `${goalJ.length}`;
      for (let a = 0; a < 1; a++) {
         libavfilterW = [1];
      }
      sharemodal7.set(`${predictionactive1}`, sharemodal7.size);
       let fastforwardO: Map<any, any> = new Map([[String.fromCharCode(111,95,50,50,95,97,115,115,101,114,116,115,0),String.fromCharCode(99,111,110,116,114,111,108,108,101,100,95,107,95,56,56,0)], [String.fromCharCode(100,105,102,102,105,99,117,108,116,121,95,120,95,53,52,0),String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,115,95,56,95,48,0)], [String.fromCharCode(97,116,104,95,121,95,52,54,0),String.fromCharCode(99,97,115,101,100,95,49,95,49,57,0)]]);
       let materialo = true;
      for (let b = 0; b < 1; b++) {
          let showm = 1;
          let gifth = String.fromCharCode(98,101,110,99,104,115,95,54,95,53,50,0);
         fastforwardO.set(`${showm}`, 2);
         showm %= Math.max(4, gifth.length);
         gifth += "1";
      }
         materialo = !materialo && fastforwardO.size >= 50;
      let screenL = 5164253 >= fastforwardO.size;
      do {
          let reactnavigationc = 0.0;
          let scoreY = 1.0;
          let securitye: Array<any> = [String.fromCharCode(100,101,108,101,116,105,110,103,95,121,95,51,0), String.fromCharCode(102,95,54,52,95,99,111,112,121,97,100,100,0)];
          let y_centerB = false;
         fastforwardO.set(`${y_centerB}`, (securitye.length / (Math.max(4, (y_centerB ? 4 : 3)))));
         reactnavigationc -= parseFloat(`${parseInt(`${scoreY}`)}`);
         scoreY += parseFloat(`${parseInt(`${reactnavigationc}`) * 3}`);
         securitye.push(parseInt(`${scoreY}`) << (Math.min(Math.abs(parseInt(`${reactnavigationc}`)), 1)));
         if (screenL) {
            break;
         }
      } while (screenL && (4 == (3 / (Math.max(9, fastforwardO.size))) && fastforwardO.size == 3));
         fastforwardO = new Map([[`${fastforwardO.size}`, fastforwardO.size]]);
      if (fastforwardO.size < 3) {
         materialo = fastforwardO.get(`${materialo}`) == null;
      }
         materialo = fastforwardO.get(`${materialo}`) == null;
      gemfileN <<= Math.min(selectY.length, 3);

        if (historyChat.length === 0) {

   let reward9 = predictionactive1 >= 7763529.0;
   do {
      predictionactive1 -= 1;
      if (reward9) {
         break;
      }
   } while (reward9 && (2 == (selectY.length - parseInt(`${predictionactive1}`)) || 2.71 == (4.61 - predictionactive1)));
   while (1 >= (gemfileN & 5)) {
      gemfileN >>= Math.min(5, Math.abs(3));
      break;
   }
   if (3 < (gemfileN + 5) || 3 < (5 + sharemodal7.size)) {
      sharemodal7.set(`${chinasames}`, parseInt(`${chinasames}`) | sharemodal7.size);
   }
            sethistoryChat([histories[histories.length - 1]]);
        } else {

   for (let w = 0; w < 1; w++) {
       let h_unlockB: Map<any, any> = new Map([[String.fromCharCode(105,95,51,54,95,109,101,109,111,114,121,98,97,114,114,105,101,114,0),124], [String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,111,95,55,52,0),185], [String.fromCharCode(105,110,99,114,101,109,101,110,116,97,108,95,53,95,50,52,0),722]]);
       let usernameQ: Map<any, any> = new Map([[String.fromCharCode(100,95,52,53,95,115,105,103,110,0),820], [String.fromCharCode(106,95,57,55,95,98,111,111,107,107,101,101,112,105,110,103,0),26], [String.fromCharCode(114,101,115,104,117,102,102,108,101,95,110,95,55,56,0),216]]);
          let defaultpredictionprofile5 = 0;
         usernameQ.set(`${defaultpredictionprofile5}`, 1);
          let y_hashl = 2;
          let fieldS = true;
         usernameQ.set(`${y_hashl}`, y_hashl | 3);
         fieldS = !fieldS;
      let halffieldimage_ = 6283726 >= usernameQ.size;
      do {
          let nterstitialb = 0;
          let colorsY = 0.0;
          let whistleZ = String.fromCharCode(108,95,57,52,95,112,114,110,103,0);
          let sharedb = false;
         usernameQ = new Map([[`${colorsY}`, 3 + parseInt(`${colorsY}`)]]);
         nterstitialb <<= Math.min(5, Math.abs(nterstitialb - 3));
         whistleZ += "2";
         sharedb = whistleZ.length >= nterstitialb;
         if (halffieldimage_) {
            break;
         }
      } while (halffieldimage_ && (Array.from(usernameQ.values()).includes(h_unlockB.size)));
       let fcdaebecbcbafcdfceaaeccfeacdbu = String.fromCharCode(105,95,53,57,95,97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0);
      if ((fcdaebecbcbafcdfceaaeccfeacdbu.length % 5) > 3 && (usernameQ.size % (Math.max(2, fcdaebecbcbafcdfceaaeccfeacdbu.length))) > 5) {
         usernameQ.set(`${h_unlockB.size}`, usernameQ.size ^ h_unlockB.size);
      }
      if (Array.from(usernameQ.values()).includes(h_unlockB.size)) {
         usernameQ.set(fcdaebecbcbafcdfceaaeccfeacdbu, fcdaebecbcbafcdfceaaeccfeacdbu.length / 1);
      }
      dropdown9 = [parseInt(`${predictionactive1}`)];
   }
       let libfbjniL: Map<any, any> = new Map([[String.fromCharCode(116,95,55,50,95,98,97,99,107,114,111,117,110,100,0),693], [String.fromCharCode(99,111,118,101,114,101,100,95,106,95,56,53,0),630]]);
       let countdownH = 5;
      let chinasameT = 6065458 <= countdownH;
      do {
          let fillV: Array<any> = [96, 404, 417];
          let yellowanimationlivei = true;
          let gemfileC: Array<any> = [260, 512];
          let topony: Map<any, any> = new Map([[String.fromCharCode(99,95,57,50,95,97,108,108,114,103,98,0),249], [String.fromCharCode(115,95,50,50,95,99,104,97,110,103,101,114,0),221], [String.fromCharCode(114,116,114,101,101,95,106,95,49,56,0),685]]);
          let iconstarJ = String.fromCharCode(98,111,117,110,100,115,112,101,99,105,102,105,99,95,99,95,55,53,0);
         countdownH >>= Math.min(1, Math.abs((String.fromCharCode(90,0) == iconstarJ ? iconstarJ.length : topony.size)));
         fillV = [gemfileC.length];
         yellowanimationlivei = !yellowanimationlivei && gemfileC.length == 54;
         topony.set(`${yellowanimationlivei}`, gemfileC.length);
         if (chinasameT) {
            break;
         }
      } while ((libfbjniL.size < 1) && chinasameT);
      if ((countdownH % 5) == 1) {
         libfbjniL.set(`${countdownH}`, libfbjniL.size + countdownH);
      }
          let selected_ = 0;
         countdownH %= Math.max(2, countdownH / (Math.max(2, 1)));
         selected_ -= 3 % (Math.max(1, selected_));
          let private_y1p: Array<any> = [510, 980];
          let bootsplash2 = false;
          let project6 = String.fromCharCode(119,95,50,49,95,114,101,103,101,120,0);
         libfbjniL.set(`${countdownH}`, libfbjniL.size);
         private_y1p.push((3 | (bootsplash2 ? 2 : 2)));
         bootsplash2 = project6.length == 39;
         project6 += `${project6.length}`;
       let crossA = false;
       let dialogh = false;
      let rightD = 6760026 <= countdownH;
      do {
          let inouttargetredG = false;
         countdownH |= 3;
         inouttargetredG = (!inouttargetredG ? !inouttargetredG : !inouttargetredG);
         if (rightD) {
            break;
         }
      } while (rightD && (libfbjniL.get(`${countdownH}`) != null));
      predictionactive1 -= libfbjniL.size * expiredS.length;
   while (1 == (1 & gemfileN) || 1 == (gemfileN & expiredS.length)) {
       let backwardL = 4;
       let huawei5 = 2;
       let dacccfaabfbcbadeebddcabacdffdbh = String.fromCharCode(113,95,52,56,95,115,116,114,108,99,97,116,0);
       let turndownj: Array<any> = [280, 877];
      if (backwardL > 4) {
          let switch_67u: Array<any> = [982, 554];
          let eventsplashq = 2.0;
         huawei5 /= Math.max(parseInt(`${eventsplashq}`) & huawei5, 1);
         switch_67u.push(switch_67u.length);
         eventsplashq *= switch_67u.length << (Math.min(3, switch_67u.length));
      }
         huawei5 &= huawei5;
      while ((turndownj.length ^ 5) == 1 && (turndownj.length ^ 5) == 4) {
          let membershipW = String.fromCharCode(104,95,49,57,95,101,108,115,101,0);
          let singapore3 = 3;
         huawei5 %= Math.max(turndownj.length, 5);
         membershipW = `${singapore3 + 1}`;
         singapore3 -= (String.fromCharCode(74,0) == membershipW ? singapore3 : membershipW.length);
         break;
      }
       let iconstarn = 2.0;
       let stepu = String.fromCharCode(115,101,108,101,99,116,95,108,95,51,0);
         stepu += `${parseInt(`${iconstarn}`)}`;
      let footballfiledlayout4 = 8564337 <= huawei5;
      do {
         huawei5 <<= Math.min(5, Math.abs(3));
         if (footballfiledlayout4) {
            break;
         }
      } while (footballfiledlayout4 && (1 <= (huawei5 % (Math.max(3, 5))) || 4 <= (dacccfaabfbcbadeebddcabacdffdbh.length % 3)));
      while (1 >= (5 >> (Math.min(4, Math.abs(huawei5)))) && 5 >= (huawei5 >> (Math.min(1, Math.abs(backwardL))))) {
          let profileinactive1 = 0.0;
          let iconeditL = String.fromCharCode(109,95,56,51,95,119,105,110,101,114,114,110,111,0);
          let memberE = String.fromCharCode(114,116,99,112,95,120,95,55,55,0);
          let rewarda: Array<any> = [String.fromCharCode(108,95,55,53,0), String.fromCharCode(111,95,52,53,95,101,120,116,101,110,115,105,98,105,108,105,116,121,0)];
          let sort_ = 3.0;
         huawei5 |= dacccfaabfbcbadeebddcabacdffdbh.length / 3;
         profileinactive1 -= parseFloat(`${parseInt(`${sort_}`) >> (Math.min(1, Math.abs(1)))}`);
         iconeditL += `${parseInt(`${sort_}`) / (Math.max(rewarda.length, 6))}`;
         memberE += `${(iconeditL == String.fromCharCode(84,0) ? iconeditL.length : parseInt(`${sort_}`))}`;
         rewarda = [1];
         break;
      }
      let questZ = dacccfaabfbcbadeebddcabacdffdbh.length >= 7011890;
      do {
          let desc0 = String.fromCharCode(103,117,101,115,115,101,100,95,108,95,57,56,0);
          let applez: Array<any> = [String.fromCharCode(110,95,52,95,117,110,109,97,116,99,104,101,100,0), String.fromCharCode(117,110,105,113,117,101,100,95,51,95,49,52,0)];
         dacccfaabfbcbadeebddcabacdffdbh += "3";
         desc0 = "3";
         applez.push(desc0.length);
         if (questZ) {
            break;
         }
      } while (questZ && (3 < (5 >> (Math.min(1, dacccfaabfbcbadeebddcabacdffdbh.length))) && 2 < (dacccfaabfbcbadeebddcabacdffdbh.length >> (Math.min(Math.abs(5), 4)))));
      for (let a = 0; a < 3; a++) {
          let redgoalv = 1.0;
          let w_hash8: Array<any> = [744, 604, 953];
         iconstarn += 3 ^ turndownj.length;
         redgoalv -= parseInt(`${redgoalv}`);
         w_hash8 = [parseInt(`${redgoalv}`)];
      }
      while (huawei5 <= 2) {
         huawei5 += 3 / (Math.max(5, huawei5));
         break;
      }
       let xvodP = 4;
       let temperature_ = 5;
      gemfileN -= dropdown9.length ^ expiredS.length;
      break;
   }
            const indexFound = histories.findIndex(e => e.joinDate === historyChat[0].joinDate);

      dropdown9 = [expiredS.length ^ 1];
   if (2.60 < chinasames) {
      sharemodal7.set(`${lineD.length}`, 2);
   }
      eventsplashR >>= Math.min(Math.abs(3), 4);

            if (indexFound === -1 || (indexFound - 1) < 0) return;

   for (let z = 0; z < 2; z++) {
      lineD = [dplusP.size];
   }
   while (expiredS.length == 4) {
      selectY = `${parseInt(`${predictionactive1}`)}`;
      break;
   }
      sliderk = [expiredS.length ^ 1];

            sethistoryChat(prev => [histories[indexFound - 1]].concat(prev));
        }
    }, 500);

    const renderChatGroup = useCallback(({ item }: { item: wwLargebrightnessWhite }) => {
        const groupDate = new Date(item.joinDate!);

        return (
            <View>
                {item.joinDate &&
                    <Text style={styles.chatGroupText}>
                        {groupDate.toISOString().slice(0, 10).replace('T', ' ').replace(/\//g, "-").concat(' ')}
                        {String(groupDate.getHours()).padStart(2, '0')}:
                        {String(groupDate.getMinutes()).padStart(2, '0')}
                    </Text>
                }
                <FlatList
                    keyExtractor={(item) => item.createAt}
                    data={item.messages}
                    renderItem={renderMessageItem}
                    style={styles.chatlistContainer}
                    ItemSeparatorComponent={renderSeparator}
                    scrollEnabled={false}
                />
            </View>
        );
    }, [chatState.userId]);

    const renderMessageItem = useCallback(({ item }: { item: wwSharemodal }) => {
        if (item.userId === chatState.userId) {
            return (
                <View style={styles.chatRightContainer}>
                    <View style={styles.chatTextRightContainer}>
                        <View style={styles.chatMessageRightContainer}>
                            <Text style={styles.chatText}>
                                {item.message}
                            </Text>
                        </View>

                        <View style={styles.chatTriangleRightContainer} />
                    </View>

                    <Avatar
                        source={false 
                            ? { uri: '' } 
                            : require("@static/images/bottomIconuserBanner.png")
                        }
                        avatarStyle={{
                            borderRadius: 100,
                        }}
                        containerStyle={{
                            marginLeft: 10,
                        }}
                    />
                </View>
            );
        }

        return (
            <View style={styles.chatLeftContainer}>
                <Avatar
                    source={streamer && streamer.avatar && streamer.avatar !== ''
                        ? { uri: streamer.avatar }
                        : require("@static/images/bottomIconuserBanner.png")
                    }
                    avatarStyle={{
                        borderRadius: 100,
                    }}
                    containerStyle={{
                        marginRight: 10,
                    }}
                />

                <View style={styles.chatTextLeftContainer}>
                    <View style={styles.chatTriangleLeftContainer} />

                    <View style={styles.chatMessageLeftContainer}>
                        <Text style={styles.chatText}>
                            {item.message}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }, [chatState.userId]);

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
       let bufferJ = 4;
    let complete5 = String.fromCharCode(109,109,97,112,95,57,95,51,51,0);
    let static_hqc = String.fromCharCode(101,95,56,52,95,114,101,108,111,97,100,0);
    let unselected4 = false;
    let thumbnailt: Array<any> = [588, 680, 479];
    let firebaset = String.fromCharCode(110,95,50,95,109,100,105,97,0);
    let iconclosewhitebgf: Map<any, any> = new Map([[String.fromCharCode(98,95,55,51,95,104,97,115,104,105,110,105,116,0),true ], [String.fromCharCode(116,101,120,116,97,116,116,114,95,48,95,53,55,0),true ]]);
    let classesF: Array<any> = [413, 177, 157];
    let ewardedG = String.fromCharCode(109,95,51,50,95,116,114,97,110,115,109,105,116,0);
    let projectt = String.fromCharCode(108,95,50,50,95,119,101,108,108,98,101,104,97,118,101,100,0);
    let philippinesN: Array<any> = [657, 361, 2];
    let viewer1 = 0.0;
    let sinaA = 5.0;
    let libcrashsdkZ: Array<any> = [691, 462, 743];
    let singaporet = 0.0;
    let dragU = 4;
   for (let q = 0; q < 3; q++) {
       let detailsZ: Array<any> = [167, 326, 784];
       let componentregistryS = true;
       let utilst = 0.0;
       let reward5 = String.fromCharCode(115,95,56,49,95,112,97,112,101,114,0);
       let brightnessk = 3.0;
      for (let j = 0; j < 2; j++) {
         utilst += 3;
      }
          let libturbomodulejsijni2 = 1.0;
          let iconmorej = String.fromCharCode(104,95,49,54,95,97,99,116,105,111,110,0);
         detailsZ = [parseInt(`${brightnessk}`)];
         libturbomodulejsijni2 /= Math.max(4, parseFloat(`${3 & iconmorej.length}`));
         iconmorej = `${parseInt(`${libturbomodulejsijni2}`) / (Math.max(5, iconmorej.length))}`;
      while (componentregistryS || (utilst / (Math.max(5.85, 4))) >= 5.52) {
         utilst += parseInt(`${utilst}`) - reward5.length;
         break;
      }
      let referrerP = componentregistryS ? !componentregistryS : componentregistryS;
      do {
         componentregistryS = 88 >= detailsZ.length || brightnessk >= 6.60;
         if (referrerP) {
            break;
         }
      } while (referrerP && (detailsZ.length > 4 || 1 > (4 - detailsZ.length)));
      if (1.33 <= (utilst + 5.30) && !componentregistryS) {
         componentregistryS = !componentregistryS;
      }
      if ((reward5.length - 3) <= 3 && 3 <= (parseInt(`${brightnessk}`) - reward5.length)) {
         reward5 += "1";
      }
      let memberb = reward5.length <= 5090222;
      do {
          let x_positions = true;
          let dycreatorb = String.fromCharCode(98,95,50,53,95,99,111,117,108,100,0);
          let mappingK: Map<any, any> = new Map([[String.fromCharCode(117,95,50,51,95,117,110,100,101,102,105,110,101,100,0),259], [String.fromCharCode(114,97,110,103,101,99,111,100,101,114,95,117,95,51,52,0),383]]);
          let photoh = 1.0;
          let final_q3 = true;
         reward5 += `${dycreatorb.length}`;
         x_positions = !final_q3;
         dycreatorb = `${3 & parseInt(`${photoh}`)}`;
         mappingK = new Map([[`${photoh}`, 2 / (Math.max(parseInt(`${photoh}`), 2))]]);
         if (memberb) {
            break;
         }
      } while ((utilst == 4.70) && memberb);
      let agreement_ = componentregistryS ? !componentregistryS : componentregistryS;
      do {
          let actionJ = 0;
          let screenY = String.fromCharCode(114,95,55,56,95,105,110,100,101,120,101,115,0);
          let assisth: Array<any> = [866, 429, 443];
          let filledT = String.fromCharCode(114,95,57,54,95,103,101,116,119,105,110,116,105,109,101,111,102,100,97,121,0);
         componentregistryS = detailsZ.length < reward5.length;
         actionJ &= 3;
         screenY += "3";
         assisth.push(actionJ - screenY.length);
         filledT = "1";
         if (agreement_) {
            break;
         }
      } while ((!componentregistryS) && agreement_);
       let plusf = 2.0;
       let bgvipxvodU: Map<any, any> = new Map([[String.fromCharCode(119,95,50,53,95,104,97,115,104,102,114,101,101,100,101,115,116,114,111,121,0),881], [String.fromCharCode(111,95,52,49,95,109,97,114,115,104,97,108,0),58]]);
       let utilsy: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,101,100,95,56,95,53,53,0),621], [String.fromCharCode(106,105,110,99,108,117,100,101,95,56,95,53,52,0),938]]);
      let subtextn = 5842536.0 <= plusf;
      do {
         plusf /= Math.max(parseFloat(`${3 & utilsy.size}`), 1);
         if (subtextn) {
            break;
         }
      } while ((4.7 == (utilst * 5.6) && (5.6 * utilst) == 3.7) && subtextn);
      for (let v = 0; v < 1; v++) {
         brightnessk /= Math.max(1 - utilsy.size, 4);
      }
      if ((5 / (Math.max(6, utilsy.size))) >= 5) {
          let contextD = 1;
          let dark7 = 3.0;
          let turndownl = String.fromCharCode(119,100,101,99,95,121,95,49,55,0);
         utilsy.set(`${contextD}`, 3);
         contextD |= (String.fromCharCode(49,0) == turndownl ? parseInt(`${dark7}`) : turndownl.length);
         dark7 += parseFloat(`${2 - turndownl.length}`);
      }
         brightnessk += bgvipxvodU.size;
      while (componentregistryS) {
         componentregistryS = utilst == 22.36;
         break;
      }
      unselected4 = philippinesN.includes(brightnessk);
   }
   while (!unselected4) {
      unselected4 = classesF.length == 80;
      break;
   }
      firebaset = `${static_hqc.length >> (Math.min(2, Math.abs(iconclosewhitebgf.size)))}`;
       let whatsappf = String.fromCharCode(118,95,56,57,95,107,101,109,112,102,0);
      let detailb = String.fromCharCode(117,106,48,48,104,107,0) == whatsappf;
      do {
          let penaltyX = String.fromCharCode(108,95,55,95,104,97,115,104,105,110,105,116,0);
         whatsappf += `${(penaltyX == String.fromCharCode(87,0) ? penaltyX.length : whatsappf.length)}`;
         if (detailb) {
            break;
         }
      } while (detailb && (whatsappf == String.fromCharCode(70,0)));
      while (whatsappf.endsWith(whatsappf)) {
         whatsappf += "2";
         break;
      }
         whatsappf += `${whatsappf.length}`;
      iconclosewhitebgf = new Map([[ewardedG, ((unselected4 ? 2 : 5) / 3)]]);
   while (complete5.endsWith(`${viewer1}`)) {
      complete5 = `${(firebaset == String.fromCharCode(83,0) ? thumbnailt.length : firebaset.length)}`;
      break;
   }

        if (comment.trim().length === 0 || !isCommentValid) return;

      iconclosewhitebgf.set(static_hqc, 2 - philippinesN.length);
       let malaysiaj: Map<any, any> = new Map([[String.fromCharCode(116,95,52,56,95,119,114,105,116,101,97,108,105,103,110,0),361], [String.fromCharCode(104,95,57,56,95,100,105,115,99,111,118,101,114,121,0),953], [String.fromCharCode(104,95,49,48,48,95,101,118,97,115,97,112,112,0),494]]);
       let windW = 0.0;
       let iconnewsshare3 = 0.0;
         iconnewsshare3 -= parseFloat(`${2 & parseInt(`${iconnewsshare3}`)}`);
          let mailh: Array<any> = [496, 261];
         iconnewsshare3 /= Math.max(parseFloat(`${parseInt(`${iconnewsshare3}`)}`), 3);
         mailh.push(mailh.length);
         iconnewsshare3 += parseFloat(`${parseInt(`${windW}`)}`);
      if ((parseInt(`${iconnewsshare3}`) - malaysiaj.size) < 3 || 3 < (malaysiaj.size - parseInt(`${iconnewsshare3}`))) {
          let base5 = 1;
         malaysiaj = new Map([[`${malaysiaj.size}`, 2 + parseInt(`${iconnewsshare3}`)]]);
         base5 >>= Math.min(1, Math.abs(3 - base5));
      }
         windW -= 3 & malaysiaj.size;
      while (4.94 >= (iconnewsshare3 / (Math.max(9, parseFloat(`${malaysiaj.size}`)))) || 5 >= (malaysiaj.size & 4)) {
         malaysiaj = new Map([[`${malaysiaj.size}`, 3 / (Math.max(8, parseInt(`${windW}`)))]]);
         break;
      }
      if ((windW * iconnewsshare3) < 2.97 && 5.30 < (2.97 * windW)) {
         windW *= 1 << (Math.min(4, Math.abs(parseInt(`${windW}`))));
      }
      let iconnewsshareL = windW >= 5290412.0;
      do {
         windW /= Math.max(malaysiaj.size | 2, 1);
         if (iconnewsshareL) {
            break;
         }
      } while (iconnewsshareL && (3.43 >= windW));
      while ((windW + iconnewsshare3) > 5.15) {
          let gpayJ: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,114,95,121,95,55,0),String.fromCharCode(97,95,50,54,95,110,97,110,111,115,118,103,0)], [String.fromCharCode(122,95,52,50,95,97,108,108,121,117,118,0),String.fromCharCode(97,117,100,105,101,110,99,101,95,52,95,56,48,0)], [String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,117,95,54,49,0),String.fromCharCode(111,95,49,57,95,108,115,102,112,111,108,121,0)]]);
          let basej = String.fromCharCode(99,108,117,116,95,119,95,53,51,0);
         iconnewsshare3 += parseFloat(`${malaysiaj.size}`);
         gpayJ.set(basej, basej.length);
         break;
      }
      philippinesN.push(ewardedG.length ^ classesF.length);
      thumbnailt = [((unselected4 ? 1 : 2))];
      philippinesN.push(3);
   let relatedw = thumbnailt.length <= 6479388;
   do {
       let renderU = 3.0;
       let detailj = 3.0;
       let catagory6 = 5.0;
          let small3 = String.fromCharCode(118,95,53,54,95,99,110,116,0);
          let collectiong = String.fromCharCode(121,95,53,51,95,110,111,118,101,99,0);
          let reactnativeultimatelistviewW = String.fromCharCode(118,95,49,49,95,102,108,97,99,101,110,99,0);
         detailj /= Math.max(parseInt(`${renderU}`), 2);
         small3 += `${2 >> (Math.min(1, small3.length))}`;
         collectiong = `${(collectiong == String.fromCharCode(111,0) ? collectiong.length : reactnativeultimatelistviewW.length)}`;
         reactnativeultimatelistviewW += `${collectiong.length}`;
         renderU *= parseInt(`${detailj}`);
      for (let c = 0; c < 2; c++) {
         catagory6 += parseInt(`${catagory6}`) >> (Math.min(2, Math.abs(2)));
      }
      let fcdaebecbcbafcdfceaaeccfeacdbh = catagory6 >= 8430595.0;
      do {
         catagory6 += 2;
         if (fcdaebecbcbafcdfceaaeccfeacdbh) {
            break;
         }
      } while (fcdaebecbcbafcdfceaaeccfeacdbh && ((catagory6 + detailj) < 5.5));
          let boots = false;
          let videojst = String.fromCharCode(107,95,54,95,114,116,114,101,101,99,104,101,99,107,0);
         renderU += ((boots ? 1 : 5) | parseInt(`${renderU}`));
         boots = videojst.length <= 59;
         videojst = `${(videojst == String.fromCharCode(101,0) ? videojst.length : videojst.length)}`;
          let questG = String.fromCharCode(113,95,49,57,95,100,101,112,101,110,100,101,110,116,0);
         renderU += (questG == String.fromCharCode(52,0) ? questG.length : parseInt(`${detailj}`));
      while ((renderU / (Math.max(detailj, 9))) < 1.61) {
         detailj *= 2;
         break;
      }
          let bootsplashm = 2.0;
          let bangN: Map<any, any> = new Map([[String.fromCharCode(111,112,97,99,105,116,121,95,109,95,57,49,0),104], [String.fromCharCode(103,95,52,51,95,102,97,110,111,117,116,0),599], [String.fromCharCode(97,99,114,111,110,121,109,115,95,49,95,51,49,0),794]]);
         catagory6 -= 1 | parseInt(`${bootsplashm}`);
         bootsplashm -= parseFloat(`${bangN.size << (Math.min(Math.abs(1), 4))}`);
         bangN = new Map([[`${bangN.size}`, bangN.size]]);
       let traminid = 5;
       let libreactperfloggerjniS = 1;
      thumbnailt = [complete5.length / 3];
      if (relatedw) {
         break;
      }
   } while (relatedw && ((bufferJ / (Math.max(2, 1))) >= 1));

        appDispatch(sendChatMessage({
            message: comment,
            isPrivate: true,
        }));

      classesF = [parseInt(`${viewer1}`) ^ ewardedG.length];
   while (4 == iconclosewhitebgf.size) {
      iconclosewhitebgf = new Map([[static_hqc, static_hqc.length]]);
      break;
   }
   while (4 <= philippinesN.length) {
       let grayq = String.fromCharCode(105,95,49,49,95,99,111,109,112,111,115,105,116,105,110,103,0);
       let mathJ = String.fromCharCode(114,95,56,95,114,101,97,115,109,0);
       let chatx = String.fromCharCode(113,95,56,49,95,114,101,112,108,105,101,115,0);
      if (5 == chatx.length) {
         mathJ = `${1 ^ mathJ.length}`;
      }
         grayq = `${(String.fromCharCode(52,0) == chatx ? chatx.length : mathJ.length)}`;
      if (grayq.length > mathJ.length) {
         mathJ += `${grayq.length}`;
      }
         mathJ += "1";
       let iconsaveimaged = 5.0;
       let libfabricjni9 = 5.0;
         iconsaveimaged *= parseInt(`${libfabricjni9}`) ^ chatx.length;
       let dialogI = 1;
       let anners = 2;
         iconsaveimaged *= parseInt(`${libfabricjni9}`);
         mathJ += `${1 - grayq.length}`;
      philippinesN = [chatx.length >> (Math.min(Math.abs(3), 1))];
      break;
   }
   let graphicsW = static_hqc.length <= 6701493;
   do {
       let minimizeW = String.fromCharCode(109,95,56,48,95,97,110,105,109,97,116,105,111,110,115,0);
       let clearn = 3;
       let mbjscommonM = String.fromCharCode(120,95,54,95,105,109,112,117,108,115,101,0);
       let mbridgeV = true;
       let single0: Array<any> = [789, 595, 930];
       let matchactiveZ: Array<any> = [434, 406];
         mbridgeV = 68 == mbjscommonM.length;
      let videocommonr = 5892613 <= single0.length;
      do {
          let success4 = 0.0;
          let ball4 = 3.0;
          let mbnativeadvancedP: Array<any> = [81, 935];
          let backgroundt = 2.0;
          let libmapbufferjni2 = String.fromCharCode(103,95,57,55,95,100,105,109,0);
         single0.push(2 | mbnativeadvancedP.length);
         success4 *= parseFloat(`${parseInt(`${backgroundt}`) / (Math.max(parseInt(`${ball4}`), 2))}`);
         ball4 += libmapbufferjni2.length & parseInt(`${backgroundt}`);
         mbnativeadvancedP = [3];
         libmapbufferjni2 = `${parseInt(`${ball4}`) ^ 1}`;
         if (videocommonr) {
            break;
         }
      } while ((single0.includes(clearn)) && videocommonr);
          let libhermese = 4;
          let clubL = String.fromCharCode(97,95,56,54,95,115,117,98,106,101,99,116,105,118,101,115,0);
         mbjscommonM += `${clearn % (Math.max(minimizeW.length, 1))}`;
         libhermese &= (clubL == String.fromCharCode(80,0) ? clubL.length : libhermese);
          let giflivestreamingF = String.fromCharCode(117,118,108,99,95,51,95,54,50,0);
          let modeR: Map<any, any> = new Map([[String.fromCharCode(108,115,112,102,95,106,95,54,57,0),String.fromCharCode(102,102,109,101,116,97,95,112,95,57,56,0)], [String.fromCharCode(103,101,110,101,114,97,116,101,102,105,108,101,95,48,95,57,51,0),String.fromCharCode(115,117,105,116,101,98,95,105,95,49,49,0)], [String.fromCharCode(114,111,116,97,116,105,111,110,95,54,95,49,54,0),String.fromCharCode(100,105,118,112,111,119,109,95,118,95,52,53,0)]]);
         matchactiveZ.push((giflivestreamingF == String.fromCharCode(109,0) ? minimizeW.length : giflivestreamingF.length));
         modeR = new Map([[`${modeR.size}`, 2 - modeR.size]]);
      while (5 < (clearn | single0.length)) {
         single0.push(mbjscommonM.length);
         break;
      }
       let trashY = 2.0;
         minimizeW = `${clearn}`;
          let libreactnativeblobO = false;
          let stylesp: Array<any> = [868, 20];
         mbridgeV = clearn <= 65 || mbridgeV;
         libreactnativeblobO = !libreactnativeblobO;
         stylesp.push(stylesp.length);
          let nativemodule7 = String.fromCharCode(110,111,104,101,97,100,101,114,95,106,95,51,51,0);
         clearn -= 1;
         nativemodule7 = `${nativemodule7.length}`;
          let configure1 = 5.0;
          let playercommoni = 1.0;
         clearn /= Math.max(1, matchactiveZ.length);
         configure1 -= parseInt(`${configure1}`) / (Math.max(parseInt(`${playercommoni}`), 8));
         playercommoni -= parseInt(`${playercommoni}`) / (Math.max(1, parseInt(`${configure1}`)));
       let stationv = String.fromCharCode(112,97,115,116,101,108,95,97,95,53,57,0);
      static_hqc = `${(classesF.length | (unselected4 ? 2 : 4))}`;
      if (graphicsW) {
         break;
      }
   } while (graphicsW && (!firebaset.endsWith(`${static_hqc.length}`)));
   while ((2.40 + viewer1) > 2.18 || unselected4) {
      unselected4 = (iconclosewhitebgf.size - thumbnailt.length) >= 69;
      break;
   }

        setComment('');

   if ((bufferJ * 1) == 1) {
       let playlistf = 1.0;
       let lessa = String.fromCharCode(98,111,114,100,101,114,108,101,115,115,95,116,95,54,53,0);
       let loginsuccessT = 1;
      for (let q = 0; q < 1; q++) {
         lessa = `${lessa.length + parseInt(`${playlistf}`)}`;
      }
      for (let s = 0; s < 3; s++) {
         loginsuccessT %= Math.max(4, (lessa == String.fromCharCode(111,0) ? lessa.length : loginsuccessT));
      }
          let clearX = 2.0;
          let ballo: Array<any> = [382, 260, 338];
         lessa = `${2 << (Math.min(1, ballo.length))}`;
         clearX -= parseFloat(`${parseInt(`${clearX}`)}`);
         ballo.push(2);
      for (let i = 0; i < 3; i++) {
         loginsuccessT >>= Math.min(Math.abs(2), 3);
      }
          let libglog2 = 1;
         playlistf *= parseInt(`${playlistf}`);
         libglog2 /= Math.max(libglog2 * libglog2, 3);
      while (3 > (5 & lessa.length)) {
         loginsuccessT |= parseInt(`${playlistf}`) / 2;
         break;
      }
       let navigation2 = String.fromCharCode(116,95,54,57,95,109,105,110,117,116,101,0);
          let iconwatchnowz = 0.0;
          let settingg: Array<any> = [String.fromCharCode(115,116,114,109,97,116,99,104,95,108,95,51,52,0), String.fromCharCode(99,111,110,100,101,110,115,101,100,95,100,95,56,49,0), String.fromCharCode(114,101,99,111,109,112,111,115,101,95,49,95,56,48,0)];
          let saveJ = 3.0;
         lessa = `${parseInt(`${iconwatchnowz}`) >> (Math.min(navigation2.length, 4))}`;
         iconwatchnowz += parseFloat(`${2 & settingg.length}`);
         settingg.push(3);
         saveJ /= Math.max(4, 1);
         loginsuccessT -= lessa.length;
      bufferJ /= Math.max(3, 3);
   }
   for (let f = 0; f < 1; f++) {
       let dices = String.fromCharCode(114,101,115,105,100,101,110,99,101,95,102,95,56,55,0);
       let moduleZ = 0.0;
       let team7 = 4.0;
       let subsl = String.fromCharCode(116,104,111,117,115,97,110,100,115,95,121,95,57,57,0);
         moduleZ *= parseFloat(`${dices.length << (Math.min(Math.abs(2), 5))}`);
      for (let k = 0; k < 2; k++) {
         subsl += `${parseInt(`${moduleZ}`) << (Math.min(1, Math.abs(2)))}`;
      }
      while ((moduleZ * team7) <= 5.18) {
         team7 += parseInt(`${team7}`) << (Math.min(dices.length, 4));
         break;
      }
      for (let t = 0; t < 2; t++) {
          let window_39 = 5;
         dices += `${dices.length % 1}`;
         window_39 ^= window_39;
      }
         subsl += `${subsl.length >> (Math.min(2, Math.abs(parseInt(`${team7}`))))}`;
         team7 -= dices.length / (Math.max(1, 8));
         dices = `${parseInt(`${team7}`)}`;
      if (dices.length == 5) {
         dices += `${(subsl == String.fromCharCode(68,0) ? subsl.length : parseInt(`${moduleZ}`))}`;
      }
      while (5 == (4 << (Math.min(3, dices.length)))) {
          let moonr = String.fromCharCode(105,100,101,110,116,105,116,105,121,95,108,95,54,49,0);
         dices += `${subsl.length}`;
         moonr += `${(moonr == String.fromCharCode(100,0) ? moonr.length : moonr.length)}`;
         break;
      }
          let clockn: Array<any> = [String.fromCharCode(121,95,54,50,95,97,118,112,107,116,0), String.fromCharCode(116,119,105,108,105,103,104,116,95,120,95,56,54,0)];
         team7 *= 3;
         clockn.push(clockn.length);
          let zhuboe = String.fromCharCode(116,104,97,119,95,119,95,53,57,0);
          let agreement2 = true;
          let teamq = 5;
         moduleZ *= parseFloat(`${subsl.length}`);
         zhuboe += `${teamq % 2}`;
         agreement2 = !agreement2;
         teamq >>= Math.min(2, Math.abs(teamq));
         moduleZ *= parseFloat(`${parseInt(`${team7}`)}`);
      unselected4 = !unselected4;
   }
       let description_um5 = 1.0;
       let previewl = String.fromCharCode(110,95,52,54,95,97,114,109,118,0);
       let shielddoneg = String.fromCharCode(117,95,54,52,95,104,97,110,100,108,101,115,0);
          let libswresampleM = 3.0;
          let navigationI = String.fromCharCode(101,95,48,95,113,117,101,117,101,115,0);
         description_um5 /= Math.max(parseFloat(`${2}`), 4);
         libswresampleM *= parseFloat(`${parseInt(`${libswresampleM}`)}`);
         navigationI = "1";
         previewl += `${previewl.length ^ 3}`;
       let whiteA: Map<any, any> = new Map([[String.fromCharCode(116,95,52,50,95,115,121,110,99,109,97,114,107,101,114,0),String.fromCharCode(119,95,53,57,95,109,111,122,106,112,101,103,0)], [String.fromCharCode(99,111,110,116,101,120,116,95,106,95,51,57,0),String.fromCharCode(107,95,49,48,48,95,111,98,109,99,0)], [String.fromCharCode(115,104,97,114,97,98,108,101,95,103,95,56,54,0),String.fromCharCode(121,95,55,49,95,97,108,108,111,99,97,116,101,100,0)]]);
       let basketballR: Map<any, any> = new Map([[String.fromCharCode(115,105,108,101,110,116,108,121,95,51,95,52,56,0),759], [String.fromCharCode(114,101,109,101,109,98,101,114,101,100,95,103,95,52,57,0),381]]);
      let gifgoalbgX = 6783177 >= whiteA.size;
      do {
         whiteA = new Map([[shielddoneg, 2]]);
         if (gifgoalbgX) {
            break;
         }
      } while (gifgoalbgX && (3 >= (shielddoneg.length - whiteA.size) || 2 >= (whiteA.size - 3)));
      let reminderN = basketballR.size >= 9184605;
      do {
         basketballR = new Map([[`${basketballR.size}`, basketballR.size]]);
         if (reminderN) {
            break;
         }
      } while ((1 >= (basketballR.size >> (Math.min(Math.abs(4), 3))) || 4 >= (basketballR.size >> (Math.min(Math.abs(4), 4)))) && reminderN);
      iconclosewhitebgf = new Map([[`${thumbnailt.length}`, thumbnailt.length % (Math.max(4, projectt.length))]]);
   while (!firebaset.includes(`${viewer1}`)) {
       let scoren: Array<any> = [798, 877, 260];
       let direct6: Array<any> = [423, 159];
       let bridgeS = 3;
       let specc = 3.0;
      let libcrashsdkL = 7409974.0 <= specc;
      do {
          let penaltygoalz = 4;
          let sheet6 = String.fromCharCode(102,97,105,108,105,110,103,95,110,95,54,55,0);
          let mini7 = 3.0;
          let arrowrightq = String.fromCharCode(99,95,54,49,95,115,101,116,116,105,103,110,115,0);
         specc += 3;
         penaltygoalz >>= Math.min(3, sheet6.length);
         sheet6 = "2";
         mini7 /= Math.max(2, (parseFloat(`${sheet6 == String.fromCharCode(53,0) ? arrowrightq.length : sheet6.length}`)));
         arrowrightq += `${arrowrightq.length}`;
         if (libcrashsdkL) {
            break;
         }
      } while (libcrashsdkL && (!scoren.includes(specc)));
       let sportf = 5.0;
       let gestureu = 1.0;
      let loginq = 8729243 >= direct6.length;
      do {
          let valuesS = 1.0;
         direct6.push(parseInt(`${sportf}`) / (Math.max(direct6.length, 8)));
         valuesS *= parseInt(`${valuesS}`) + 3;
         if (loginq) {
            break;
         }
      } while (loginq && (5 >= (1 - bridgeS) && (bridgeS - direct6.length) >= 1));
      while ((bridgeS / (Math.max(specc, 5))) == 2.39) {
         bridgeS *= parseInt(`${gestureu}`);
         break;
      }
      while ((gestureu / 5.89) >= 1.60 || (gestureu + 5.89) >= 3.61) {
          let unselectedZ = true;
          let starz = String.fromCharCode(110,97,103,108,101,95,118,95,51,55,0);
          let leagueE = String.fromCharCode(100,95,53,57,95,99,111,109,112,101,110,115,97,116,105,111,110,0);
          let privacyq = 1;
          let d_centerL = true;
         gestureu -= parseFloat(`${privacyq}`);
         unselectedZ = leagueE.endsWith(`${d_centerL}`);
         starz += `${(String.fromCharCode(99,0) == leagueE ? (unselectedZ ? 4 : 1) : leagueE.length)}`;
         privacyq += ((unselectedZ ? 2 : 3));
         d_centerL = (((!d_centerL ? leagueE.length : 53) / (Math.max(leagueE.length, 3))) <= 53);
         break;
      }
      let goalt = specc >= 9764444.0;
      do {
         specc /= Math.max(5, parseInt(`${sportf}`) & 1);
         if (goalt) {
            break;
         }
      } while ((specc < 4.55) && goalt);
          let predictionbannersharedZ = 4.0;
         sportf += parseFloat(`${1}`);
         predictionbannersharedZ += parseFloat(`${parseInt(`${predictionbannersharedZ}`)}`);
       let vertical8: Map<any, any> = new Map([[String.fromCharCode(100,99,98,108,111,99,107,95,48,95,52,52,0),422], [String.fromCharCode(102,95,54,52,95,100,105,115,112,111,115,97,98,108,101,0),834], [String.fromCharCode(118,97,114,119,105,100,116,104,95,54,95,57,57,0),580]]);
      let kickl = 5718364 <= vertical8.size;
      do {
          let turnT = true;
          let fcdaebecbcbafcdfceaaeccfeacdbu = 4;
          let whistleorangeV = 3.0;
          let b_titleN = String.fromCharCode(103,95,55,49,95,98,108,111,99,107,105,110,103,0);
         vertical8.set(`${gestureu}`, 1 ^ parseInt(`${gestureu}`));
         turnT = 63.43 < whistleorangeV;
         fcdaebecbcbafcdfceaaeccfeacdbu += parseInt(`${whistleorangeV}`) & 1;
         b_titleN += `${b_titleN.length * 1}`;
         if (kickl) {
            break;
         }
      } while (kickl && (4.3 >= (2.92 * gestureu) && (2.92 * gestureu) >= 4.75));
         direct6 = [parseInt(`${sportf}`)];
          let final_sz: Array<any> = [132, 554, 560];
          let auto_rgo = String.fromCharCode(121,95,53,52,95,115,116,97,107,101,100,0);
         sportf += parseFloat(`${auto_rgo.length}`);
         final_sz = [final_sz.length & final_sz.length];
         auto_rgo += `${final_sz.length}`;
          let adultf: Array<any> = [721, 421, 336];
         specc *= 3;
         adultf = [1];
      firebaset = `${parseInt(`${viewer1}`) >> (Math.min(philippinesN.length, 2))}`;
      break;
   }
      sinaA -= parseInt(`${sinaA}`) ^ 3;
        Keyboard.dismiss();
    }, [isCommentValid, comment]);

    const onUserScroll = () => {
       let pointl = String.fromCharCode(114,105,103,104,116,115,95,98,95,49,55,0);
    let iconwechatL = String.fromCharCode(107,105,108,111,98,121,116,101,95,122,95,51,52,0);
    let webview3 = String.fromCharCode(107,95,56,51,95,115,113,108,0);
    let libmapbufferjni3 = true;
    let unselected9: Map<any, any> = new Map([[String.fromCharCode(115,95,53,50,95,122,101,114,111,115,0),String.fromCharCode(100,95,54,56,95,99,111,114,110,101,114,115,0)], [String.fromCharCode(108,95,51,50,95,97,119,97,107,101,0),String.fromCharCode(113,95,49,48,95,114,101,100,117,99,101,100,0)]]);
    let style3 = false;
    let baselineB = String.fromCharCode(115,101,99,111,110,100,97,114,121,95,119,95,49,55,0);
    let connectionK = String.fromCharCode(97,112,111,108,108,111,95,51,95,52,48,0);
    let activityZ: Map<any, any> = new Map([[String.fromCharCode(98,95,55,48,95,112,97,103,105,110,97,116,105,111,110,0),124], [String.fromCharCode(119,115,97,117,100,95,104,95,55,57,0),740]]);
    let y_viewN = 3.0;
    let readw = false;
    let mbbannerL = 3.0;
    let phonesharem: Map<any, any> = new Map([[String.fromCharCode(102,109,97,100,100,95,55,95,53,49,0),927], [String.fromCharCode(115,117,99,99,101,101,100,95,98,95,56,55,0),787]]);
    let eventsplashM = String.fromCharCode(105,95,51,57,95,115,121,109,98,111,108,105,99,97,116,101,100,0);
    let iconwechata = 2;
    let libfbjnir = 1;
    let sport6 = 0.0;
      style3 = 19 > iconwechatL.length;
      style3 = unselected9.size == 22;
      connectionK = `${(activityZ.size & (libmapbufferjni3 ? 4 : 4))}`;
   if (style3 || !libmapbufferjni3) {
       let twitterK = 1.0;
       let calendarV = 4.0;
       let memberr = String.fromCharCode(99,111,108,111,114,107,101,121,95,50,95,55,54,0);
          let libavformatx = String.fromCharCode(106,112,101,103,100,119,116,95,50,95,56,49,0);
         twitterK += (String.fromCharCode(50,0) == libavformatx ? libavformatx.length : parseInt(`${twitterK}`));
      while (5.83 == (4.27 / (Math.max(6, twitterK))) && (twitterK / (Math.max(4.27, 4))) == 5.81) {
          let benefitN: Map<any, any> = new Map([[String.fromCharCode(105,100,97,116,97,95,52,95,50,48,0),30], [String.fromCharCode(115,114,116,99,112,95,100,95,51,51,0),412]]);
         calendarV *= parseFloat(`${1}`);
         benefitN.set(`${benefitN.size}`, benefitN.size >> (Math.min(Math.abs(benefitN.size), 3)));
         break;
      }
         calendarV /= Math.max(5, parseFloat(`${parseInt(`${twitterK}`)}`));
          let feedbackv = String.fromCharCode(112,108,97,99,101,109,101,110,116,95,114,95,57,53,0);
          let cross6 = String.fromCharCode(120,105,112,104,95,112,95,51,48,0);
         calendarV += parseFloat(`${feedbackv.length | cross6.length}`);
      for (let o = 0; o < 2; o++) {
          let telemetryu = String.fromCharCode(97,117,100,105,111,100,115,112,95,113,95,55,51,0);
          let iconshare1: Map<any, any> = new Map([[String.fromCharCode(103,95,55,95,99,109,115,103,115,0),false ], [String.fromCharCode(100,95,56,48,95,116,101,108,108,0),false ], [String.fromCharCode(115,98,115,112,108,105,116,95,48,95,51,56,0),true ]]);
          let popupu: Map<any, any> = new Map([[String.fromCharCode(115,97,109,112,108,101,114,97,116,101,95,97,95,56,56,0),616], [String.fromCharCode(106,95,55,52,95,108,111,99,0),90]]);
          let benefit_ = 1.0;
          let lineC: Map<any, any> = new Map([[String.fromCharCode(103,95,54,56,95,99,111,110,110,101,99,116,0),105], [String.fromCharCode(111,112,116,105,109,105,122,101,95,48,95,53,50,0),193]]);
         calendarV -= parseFloat(`${parseInt(`${benefit_}`) << (Math.min(Math.abs(iconshare1.size), 3))}`);
         telemetryu = `${(telemetryu == String.fromCharCode(102,0) ? lineC.size : telemetryu.length)}`;
         iconshare1 = new Map([[`${popupu.size}`, popupu.size]]);
         benefit_ -= parseFloat(`${telemetryu.length & 3}`);
         lineC = new Map([[`${popupu.size}`, popupu.size + telemetryu.length]]);
      }
          let infon: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,97,109,97,98,108,101,95,112,95,51,51,0),true ], [String.fromCharCode(116,95,54,57,95,117,110,115,101,116,0),false ], [String.fromCharCode(97,108,97,110,103,117,97,103,101,95,48,95,49,57,0),true ]]);
         memberr += `${infon.size}`;
         memberr += `${parseInt(`${twitterK}`) << (Math.min(4, Math.abs(parseInt(`${calendarV}`))))}`;
         twitterK -= parseInt(`${calendarV}`);
      while ((memberr.length % 4) >= 5 && (parseInt(`${calendarV}`) - memberr.length) >= 4) {
         memberr += `${parseInt(`${calendarV}`) << (Math.min(1, Math.abs(1)))}`;
         break;
      }
      libmapbufferjni3 = !baselineB.endsWith(`${style3}`);
   }
      baselineB += `${((style3 ? 1 : 3) << (Math.min(Math.abs(activityZ.size), 2)))}`;
      activityZ = new Map([[connectionK, connectionK.length * 1]]);
   for (let f = 0; f < 3; f++) {
      pointl = `${3 << (Math.min(1, iconwechatL.length))}`;
   }
      baselineB = `${(3 + (style3 ? 4 : 2))}`;
       let textl = String.fromCharCode(97,115,110,95,117,95,52,55,0);
       let mbjscommon_ = String.fromCharCode(102,114,105,99,116,105,111,110,95,53,95,49,53,0);
          let gesturem: Array<any> = [String.fromCharCode(116,95,57,95,100,105,109,109,105,110,103,0), String.fromCharCode(107,95,52,54,95,101,116,105,109,101,0), String.fromCharCode(100,95,57,49,95,97,108,108,111,119,97,110,99,101,0)];
          let photoT = false;
         textl = `${gesturem.length}`;
         gesturem.push(((photoT ? 1 : 5) ^ 2));
          let goalr = String.fromCharCode(98,105,116,120,95,109,95,51,52,0);
          let sourceg = 5.0;
          let middlewareG: Array<any> = [String.fromCharCode(100,99,116,99,111,101,102,95,98,95,56,54,0), String.fromCharCode(112,97,115,115,99,111,100,101,95,52,95,57,48,0), String.fromCharCode(98,114,97,110,100,115,95,111,95,57,0)];
         textl += `${middlewareG.length}`;
         goalr += `${parseInt(`${sourceg}`)}`;
         sourceg /= Math.max(3, parseFloat(`${parseInt(`${sourceg}`) ^ 2}`));
         middlewareG = [(String.fromCharCode(97,0) == goalr ? parseInt(`${sourceg}`) : goalr.length)];
      for (let h = 0; h < 2; h++) {
          let unread2 = String.fromCharCode(114,103,98,121,117,118,95,99,95,52,51,0);
          let unimplementedvieww = String.fromCharCode(107,95,54,55,95,116,121,112,101,115,116,114,0);
          let promotionX = String.fromCharCode(99,111,109,109,105,116,116,101,100,95,97,95,50,0);
          let stationu = false;
          let lessG = 3;
         mbjscommon_ = `${(unread2.length ^ (stationu ? 4 : 5))}`;
         unread2 = `${lessG}`;
         unimplementedvieww = `${(promotionX == String.fromCharCode(122,0) ? promotionX.length : lessG)}`;
         stationu = 75 >= promotionX.length;
      }
          let arrowk = 1;
         mbjscommon_ += "1";
         arrowk *= arrowk;
         textl = `${mbjscommon_.length - 2}`;
         textl += `${3 & textl.length}`;
      connectionK = `${iconwechatL.length | 3}`;
   let stre = 6412700 >= iconwechatL.length;
   do {
      iconwechatL = `${pointl.length ^ 3}`;
      if (stre) {
         break;
      }
   } while (stre && (5 < (4 | activityZ.size) && (4 | iconwechatL.length) < 1));
   while (pointl.length > 2) {
      y_viewN /= Math.max((3 - (style3 ? 2 : 4)), 1);
      break;
   }
   while (baselineB.length == 4) {
      baselineB = `${pointl.length / 1}`;
      break;
   }
      unselected9 = new Map([[`${activityZ.size}`, baselineB.length ^ activityZ.size]]);
   if (libmapbufferjni3) {
       let feedbackX: Array<any> = [String.fromCharCode(119,95,54,48,95,120,120,104,97,115,104,0), String.fromCharCode(120,95,49,56,95,99,111,110,115,116,116,105,109,101,0), String.fromCharCode(117,95,54,55,95,119,97,118,101,108,101,116,0)];
         feedbackX.push(2 + feedbackX.length);
      if (feedbackX.includes(feedbackX.length)) {
         feedbackX.push(feedbackX.length);
      }
       let mbbidc = String.fromCharCode(119,95,57,57,95,118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,0);
      webview3 = `${pointl.length / (Math.max(2, 7))}`;
   }
   while (baselineB.includes(`${connectionK.length}`)) {
      connectionK += `${pointl.length}`;
      break;
   }
   while (!style3) {
       let libavdeviceT: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,97,116,95,121,95,55,53,0),868], [String.fromCharCode(98,95,54,54,95,117,110,114,101,115,101,114,118,101,100,0),318], [String.fromCharCode(110,105,100,111,98,106,95,51,95,53,49,0),427]]);
       let canvas7 = String.fromCharCode(115,117,99,99,101,115,115,95,116,95,53,56,0);
      let humidityn = 8378470 >= canvas7.length;
      do {
         canvas7 = `${libavdeviceT.size}`;
         if (humidityn) {
            break;
         }
      } while (humidityn && ((canvas7.length + libavdeviceT.size) == 2 && 2 == (2 + libavdeviceT.size)));
          let gradlewE: Array<any> = [String.fromCharCode(99,111,110,115,116,114,97,105,110,95,120,95,51,52,0), String.fromCharCode(100,97,116,97,108,105,115,116,95,114,95,57,53,0)];
          let helperb = true;
         libavdeviceT = new Map([[canvas7, (canvas7 == String.fromCharCode(119,0) ? (helperb ? 3 : 3) : canvas7.length)]]);
         gradlewE.push(gradlewE.length);
         helperb = 44 > gradlewE.length;
          let overlaya = false;
         libavdeviceT.set(canvas7, (canvas7 == String.fromCharCode(117,0) ? canvas7.length : libavdeviceT.size));
         overlaya = !overlaya;
       let runtimeschedulert = 2;
       let placementP = 1;
         runtimeschedulert *= 3;
          let transfer4: Array<any> = [String.fromCharCode(116,95,53,50,95,101,114,114,99,111,100,101,0), String.fromCharCode(112,114,111,100,117,99,101,114,95,100,95,52,49,0), String.fromCharCode(117,110,116,105,108,95,110,95,53,57,0)];
          let main_dw = String.fromCharCode(114,95,49,55,95,111,114,112,104,97,110,0);
          let overlayS: Map<any, any> = new Map([[String.fromCharCode(117,95,49,50,0),false ], [String.fromCharCode(122,95,49,48,48,95,105,110,116,101,110,115,105,116,121,0),false ], [String.fromCharCode(107,95,49,53,95,108,111,103,115,116,101,114,101,111,0),false ]]);
         canvas7 += `${runtimeschedulert + 3}`;
         transfer4.push(main_dw.length);
         main_dw = `${main_dw.length >> (Math.min(Math.abs(1), 3))}`;
         overlayS = new Map([[`${overlayS.size}`, 2 | main_dw.length]]);
      style3 = 33 <= connectionK.length;
      break;
   }
   let tickedn = webview3 == String.fromCharCode(111,56,116,0);
   do {
      webview3 = `${unselected9.size}`;
      if (tickedn) {
         break;
      }
   } while (tickedn && (webview3.length < 2));
   for (let d = 0; d < 3; d++) {
       let yellowvideolived = String.fromCharCode(104,95,56,57,95,116,105,109,101,112,101,114,102,114,97,109,101,0);
       let gmail2 = 4.0;
       let entryt = 2;
       let forwardA = false;
       let long_ecX = 2.0;
      if (5 >= (entryt + 5)) {
         entryt &= (parseInt(`${long_ecX}`) / (Math.max(9, (forwardA ? 3 : 3))));
      }
       let singleP: Map<any, any> = new Map([[String.fromCharCode(97,112,102,115,95,56,95,54,0),String.fromCharCode(122,95,55,51,95,115,97,109,112,0)], [String.fromCharCode(101,118,101,114,121,98,111,100,121,95,56,95,52,0),String.fromCharCode(121,95,53,51,95,112,105,112,101,108,111,115,115,0)], [String.fromCharCode(97,102,102,105,110,105,116,105,101,115,95,116,95,55,51,0),String.fromCharCode(99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,95,116,95,55,49,0)]]);
       let guidek: Map<any, any> = new Map([[String.fromCharCode(114,101,102,112,97,115,115,95,121,95,53,53,0),928], [String.fromCharCode(111,95,53,50,95,110,97,118,105,103,97,116,101,0),505], [String.fromCharCode(99,111,100,101,119,111,114,100,95,97,95,57,54,0),607]]);
       let bangJ = String.fromCharCode(107,95,52,48,95,115,116,111,119,0);
      while (!forwardA && 1.62 > (long_ecX / 3.75)) {
          let suggestiond = 4.0;
          let yingh = false;
         long_ecX /= Math.max(3, (parseFloat(`${(forwardA ? 5 : 3) / 2}`)));
         suggestiond /= Math.max(parseInt(`${suggestiond}`), 4);
         yingh = suggestiond > suggestiond;
         break;
      }
         gmail2 += yellowvideolived.length / 1;
      if ((singleP.size / (Math.max(8, bangJ.length))) <= 5 && 5 <= (singleP.size / (Math.max(bangJ.length, 10)))) {
         bangJ += `${entryt}`;
      }
      while (2 == (4 ^ yellowvideolived.length)) {
         yellowvideolived = `${bangJ.length / 3}`;
         break;
      }
         forwardA = (parseInt(`${long_ecX}`) / (Math.max(guidek.size, 5))) < 58;
      if (guidek.size <= yellowvideolived.length) {
         yellowvideolived += `${((forwardA ? 4 : 2) >> (Math.min(Math.abs(2), 5)))}`;
      }
         gmail2 -= bangJ.length / 1;
         gmail2 *= (yellowvideolived == String.fromCharCode(101,0) ? yellowvideolived.length : (forwardA ? 5 : 4));
         long_ecX += parseFloat(`${3}`);
      while ((singleP.size >> (Math.min(Math.abs(4), 4))) > 1 && 1 > (entryt >> (Math.min(Math.abs(4), 2)))) {
         singleP = new Map([[`${long_ecX}`, parseInt(`${gmail2}`) * parseInt(`${long_ecX}`)]]);
         break;
      }
      if (2 <= (5 >> (Math.min(4, Math.abs(guidek.size)))) && (5 - guidek.size) <= 4) {
         long_ecX /= Math.max(1, (parseFloat(`${(forwardA ? 3 : 4) / 3}`)));
      }
         entryt |= 3 << (Math.min(5, Math.abs(entryt)));
      webview3 += `${phonesharem.size % (Math.max(2, 4))}`;
   }
      unselected9 = new Map([[`${activityZ.size}`, eventsplashM.length | 3]]);

        if (isPinToBottom.current) isPinToBottom.current = false;
    }

    const onMomentumScrollEnd = (e: any) => {
        if (!isPinToBottom.current) {
            const currentYBottom = e.nativeEvent.contentOffset.y + e.nativeEvent.layoutMeasurement.height;

            if (Math.round(currentYBottom) === Math.round(e.nativeEvent.contentSize.height)) {
                isPinToBottom.current = true;
                setNumOfUnread(0);
            }
        }

        if (e.nativeEvent.contentOffset.y === 0) {
            getHistory();
        }
    }

    const onReconnect = () => {
       let benefitd = String.fromCharCode(117,110,109,105,110,105,109,105,122,101,95,115,95,51,56,0);
    let leaguej = 2.0;
    let championO = 1;
    let casting9 = String.fromCharCode(111,112,101,114,97,116,111,114,115,95,110,95,54,57,0);
    let executorq = 2.0;
    let policyc: Array<any> = [319, 763];
    let libloggern = 3.0;
    let sende = String.fromCharCode(98,111,117,110,100,97,108,108,95,105,95,51,49,0);
    let gifgoalO = String.fromCharCode(101,95,55,53,95,116,104,117,109,98,115,0);
    let sourceG = 3;
    let matchz = true;
    let interstitialj = String.fromCharCode(115,99,97,108,97,114,95,104,95,51,54,0);
    let libcxxcomponents6 = String.fromCharCode(116,95,49,54,95,116,97,107,101,110,0);
   if (benefitd.endsWith(`${policyc.length}`)) {
       let zhubok = 2.0;
       let terms6 = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,95,51,95,51,55,0);
       let nnewarchdefaultsu: Array<any> = [265, 549, 488];
       let stats7 = 1.0;
      if (!nnewarchdefaultsu.includes(zhubok)) {
         zhubok *= parseInt(`${stats7}`) >> (Math.min(terms6.length, 1));
      }
          let gpayg: Array<any> = [572, 434, 313];
         terms6 = `${(String.fromCharCode(85,0) == terms6 ? parseInt(`${stats7}`) : terms6.length)}`;
         gpayg = [gpayg.length];
      while (!terms6.startsWith(`${nnewarchdefaultsu.length}`)) {
          let ynewssharew = 0.0;
          let imagesA: Array<any> = [908, 515];
          let selectionl = String.fromCharCode(114,95,54,49,95,110,118,111,105,99,101,0);
          let qaagZ = String.fromCharCode(97,99,99,101,115,115,105,98,105,108,105,116,121,95,107,95,54,55,0);
          let emptye = String.fromCharCode(116,95,53,0);
         terms6 = `${(String.fromCharCode(67,0) == terms6 ? terms6.length : parseInt(`${zhubok}`))}`;
         ynewssharew += parseFloat(`${parseInt(`${ynewssharew}`) >> (Math.min(Math.abs(1), 1))}`);
         imagesA = [qaagZ.length ^ 3];
         selectionl += `${1 >> (Math.min(3, imagesA.length))}`;
         qaagZ += `${selectionl.length + imagesA.length}`;
         emptye = `${(qaagZ == String.fromCharCode(82,0) ? qaagZ.length : selectionl.length)}`;
         break;
      }
       let dangerj = String.fromCharCode(109,95,49,95,120,120,104,97,115,104,0);
       let bangm = String.fromCharCode(100,105,115,97,98,108,101,100,95,118,95,57,48,0);
      while ((3 % (Math.max(3, nnewarchdefaultsu.length))) > 2) {
         stats7 += parseFloat(`${1 ^ nnewarchdefaultsu.length}`);
         break;
      }
         bangm = `${bangm.length}`;
      while (terms6.includes(`${stats7}`)) {
          let modelt = true;
          let rewardb = String.fromCharCode(118,95,50,57,95,115,116,114,116,111,107,0);
          let wcopy_x8_ = true;
          let subsi = 5;
          let gmail_ = true;
         terms6 += `${dangerj.length & 2}`;
         modelt = wcopy_x8_ && modelt;
         rewardb += `${((wcopy_x8_ ? 5 : 4) | (modelt ? 3 : 5))}`;
         subsi %= Math.max(subsi / 1, 3);
         gmail_ = modelt;
         break;
      }
      while ((nnewarchdefaultsu.length + 1) == 5 && (terms6.length + nnewarchdefaultsu.length) == 1) {
         nnewarchdefaultsu.push(terms6.length ^ nnewarchdefaultsu.length);
         break;
      }
      if ((parseInt(`${zhubok}`) - nnewarchdefaultsu.length) < 5 && 1.20 < (1.3 - zhubok)) {
          let nbatrophyH = false;
         nnewarchdefaultsu.push(((nbatrophyH ? 2 : 3) >> (Math.min(Math.abs(parseInt(`${stats7}`)), 2))));
      }
         bangm += `${bangm.length - 2}`;
         bangm += `${parseInt(`${stats7}`) & 3}`;
       let x_imageW = false;
       let editT = false;
      policyc.push(parseInt(`${leaguej}`) * 2);
   }
      interstitialj = `${policyc.length % (Math.max(3, 7))}`;
   let analyticsx = libloggern <= 5546424.0;
   do {
      libloggern += sende.length;
      if (analyticsx) {
         break;
      }
   } while (analyticsx && ((1.94 / (Math.max(3, libloggern))) <= 1.0));
      leaguej *= parseFloat(`${sourceG}`);
   while (4.44 >= (2.30 - executorq) || 2 >= (parseInt(`${executorq}`) - gifgoalO.length)) {
      executorq += parseFloat(`${gifgoalO.length}`);
      break;
   }
   while (!benefitd.includes(`${matchz}`)) {
      benefitd += `${policyc.length}`;
      break;
   }
   for (let f = 0; f < 1; f++) {
       let unselectedC = 2.0;
       let annerE: Array<any> = [489, 117];
       let yellowvideoliveN = 2;
       let arrowT = String.fromCharCode(111,117,116,102,105,108,101,95,109,95,52,55,0);
      while ((4 << (Math.min(5, arrowT.length))) >= 3) {
          let vignetteD: Map<any, any> = new Map([[String.fromCharCode(103,95,52,51,0),false ], [String.fromCharCode(107,117,107,105,95,51,95,56,0),false ], [String.fromCharCode(110,95,54,52,95,115,104,97,114,112,101,110,0),false ]]);
          let libavutilS = String.fromCharCode(116,121,112,101,99,111,100,101,95,52,95,51,0);
          let ballJ = 3;
          let codegenB = 0.0;
         annerE = [3 & parseInt(`${unselectedC}`)];
         vignetteD.set(`${codegenB}`, 1);
         libavutilS = `${parseInt(`${codegenB}`)}`;
         ballJ <<= Math.min(Math.abs(3 - parseInt(`${codegenB}`)), 3);
         break;
      }
      if ((annerE.length - 1) > 5 && (1 - annerE.length) > 5) {
          let type_jo: Map<any, any> = new Map([[String.fromCharCode(115,95,53,53,95,102,99,104,111,119,110,0),893], [String.fromCharCode(114,101,97,99,116,95,54,95,53,0),561], [String.fromCharCode(118,97,114,108,101,110,103,116,104,95,106,95,57,54,0),147]]);
          let libavfilterX = false;
          let libffmpegkite = String.fromCharCode(97,114,109,118,95,99,95,54,53,0);
         arrowT += `${libffmpegkite.length % (Math.max(1, yellowvideoliveN))}`;
         type_jo = new Map([[`${type_jo.size}`, 3]]);
         libavfilterX = null == type_jo.get(`${libavfilterX}`);
         libffmpegkite += `${type_jo.size}`;
      }
          let webviewP: Array<any> = [104, 185, 748];
         unselectedC *= parseFloat(`${yellowvideoliveN}`);
         webviewP = [webviewP.length >> (Math.min(Math.abs(1), 3))];
          let combine8 = true;
          let gpayS: Array<any> = [String.fromCharCode(99,111,112,121,114,105,103,104,116,95,120,95,51,0), String.fromCharCode(114,97,116,101,99,116,114,108,95,99,95,50,55,0), String.fromCharCode(98,95,53,55,95,103,114,111,117,112,101,100,0)];
         arrowT = `${parseInt(`${unselectedC}`)}`;
         combine8 = gpayS.includes(combine8);
         gpayS.push(3);
      while ((yellowvideoliveN * 1) > 2) {
         yellowvideoliveN &= 3;
         break;
      }
      while ((yellowvideoliveN / (Math.max(annerE.length, 2))) < 2 && 3 < (yellowvideoliveN / 2)) {
         annerE.push(arrowT.length / 1);
         break;
      }
      for (let p = 0; p < 2; p++) {
         arrowT += `${2 | parseInt(`${unselectedC}`)}`;
      }
         annerE.push((String.fromCharCode(57,0) == arrowT ? arrowT.length : annerE.length));
          let catalog_ = String.fromCharCode(115,95,50,57,95,116,97,112,101,0);
          let smalle = String.fromCharCode(108,95,50,56,95,97,100,106,117,115,116,109,101,110,116,115,0);
         arrowT = `${yellowvideoliveN}`;
         catalog_ += `${2 << (Math.min(1, catalog_.length))}`;
         smalle = `${(catalog_ == String.fromCharCode(74,0) ? smalle.length : catalog_.length)}`;
         arrowT = `${yellowvideoliveN % (Math.max(annerE.length, 2))}`;
         arrowT = `${annerE.length}`;
         yellowvideoliveN >>= Math.min(5, Math.abs(yellowvideoliveN));
      executorq += (parseFloat(`${sende == String.fromCharCode(98,0) ? sende.length : (matchz ? 4 : 2)}`));
   }
      leaguej /= Math.max(5, (parseFloat(`${interstitialj == String.fromCharCode(74,0) ? interstitialj.length : championO}`)));
      matchz = (gifgoalO.length & sourceG) > 51;
   for (let b = 0; b < 1; b++) {
      gifgoalO += `${(benefitd == String.fromCharCode(70,0) ? benefitd.length : parseInt(`${leaguej}`))}`;
   }

        appDispatch(joinChatRoom({
            roomId: matchID,
            isPrivate: true,
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
       let libtanm = false;
    let dycreatort = String.fromCharCode(117,95,55,52,95,99,111,112,121,0);
    let gifgoalbgO = 0.0;
    let codeV = String.fromCharCode(114,101,115,112,95,113,95,53,48,0);
    let utilsX: Array<any> = [String.fromCharCode(108,97,109,101,95,105,95,52,56,0), String.fromCharCode(117,95,56,53,95,112,101,101,108,0), String.fromCharCode(102,95,57,53,95,114,101,103,105,115,116,114,97,110,116,0)];
    let lineu = String.fromCharCode(115,105,109,117,108,97,116,101,100,95,49,95,50,57,0);
    let history0 = String.fromCharCode(102,104,116,120,95,105,95,50,49,0);
    let kuaishouf = String.fromCharCode(100,95,51,53,95,99,119,110,100,0);
    let libreactN: Map<any, any> = new Map([[String.fromCharCode(120,95,53,95,100,105,115,116,97,110,99,101,115,0),639], [String.fromCharCode(100,101,97,100,108,111,99,107,101,100,95,116,95,54,51,0),992], [String.fromCharCode(115,117,98,118,97,108,117,101,95,106,95,55,53,0),818]]);
    let completex = String.fromCharCode(113,117,97,108,105,102,105,101,114,115,95,51,95,52,55,0);
    let clocki = String.fromCharCode(114,101,112,108,121,95,121,95,56,52,0);
    let schedulerC: Map<any, any> = new Map([[String.fromCharCode(98,95,56,52,95,112,115,97,0),302], [String.fromCharCode(99,111,110,118,101,114,115,97,116,105,111,110,95,121,95,51,56,0),294], [String.fromCharCode(115,101,110,100,95,119,95,54,0),771]]);
    let mutedq = 0;
    let redirectb = 2;
   if ((2 << (Math.min(3, lineu.length))) == 1 && 2 == (lineu.length << (Math.min(Math.abs(2), 1)))) {
      utilsX = [utilsX.length * completex.length];
   }
       let spinnerF = String.fromCharCode(97,100,97,112,116,101,100,95,117,95,57,54,0);
       let networkn = String.fromCharCode(100,105,115,115,105,109,105,108,97,114,105,116,121,95,48,95,54,54,0);
       let reactnavigationR: Array<any> = [String.fromCharCode(107,95,57,55,95,48,95,49,49,0), String.fromCharCode(122,95,55,51,95,100,101,99,111,100,101,102,114,97,109,101,0), String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,95,117,95,56,49,0)];
       let verticalE: Array<any> = [488, 651];
       let targetz: Array<any> = [512, 66];
         networkn = `${(String.fromCharCode(121,0) == networkn ? networkn.length : verticalE.length)}`;
         targetz = [3];
         verticalE = [3];
      let stationC = 6272836 >= reactnavigationR.length;
      do {
         reactnavigationR.push(targetz.length & 3);
         if (stationC) {
            break;
         }
      } while ((5 >= (reactnavigationR.length & networkn.length) && 3 >= (5 & networkn.length)) && stationC);
      while (5 < (targetz.length * networkn.length) && 2 < (targetz.length * 5)) {
         networkn = "2";
         break;
      }
      let sheeta = networkn == String.fromCharCode(119,51,97,112,118,110,112,107,0);
      do {
         networkn = `${spinnerF.length & targetz.length}`;
         if (sheeta) {
            break;
         }
      } while (((networkn.length * verticalE.length) < 4 && 1 < (verticalE.length * 4)) && sheeta);
      if (2 <= verticalE.length) {
          let eactQ = String.fromCharCode(97,108,119,97,121,115,95,104,95,55,0);
          let libjsijniprofilerQ = false;
          let clocko = 4.0;
         targetz = [1 & reactnavigationR.length];
         eactQ += `${3 - parseInt(`${clocko}`)}`;
         libjsijniprofilerQ = eactQ == String.fromCharCode(78,0);
         clocko /= Math.max(5, eactQ.length);
      }
         verticalE = [spinnerF.length - targetz.length];
      schedulerC.set(`${gifgoalbgO}`, 2 ^ parseInt(`${gifgoalbgO}`));
      utilsX = [parseInt(`${gifgoalbgO}`)];
   while (!dycreatort.includes(`${clocki.length}`)) {
       let activityr = 2.0;
       let predictionarrowp = 3.0;
       let yingH: Array<any> = [891, 656];
       let description_kz = 0.0;
       let minimize2 = String.fromCharCode(112,114,111,116,111,98,117,102,95,122,95,50,52,0);
         predictionarrowp /= Math.max(parseFloat(`${yingH.length / (Math.max(10, parseInt(`${predictionarrowp}`)))}`), 5);
       let profileW = 2.0;
       let source4 = 0.0;
      for (let w = 0; w < 3; w++) {
         predictionarrowp *= parseFloat(`${3}`);
      }
      for (let l = 0; l < 1; l++) {
          let libcrashsdkI: Map<any, any> = new Map([[String.fromCharCode(121,95,54,49,95,105,110,116,101,114,109,105,100,105,97,116,101,0),914], [String.fromCharCode(109,97,120,105,109,117,109,95,97,95,49,48,48,0),490], [String.fromCharCode(112,114,101,97,109,98,108,101,95,97,95,53,50,0),463]]);
          let collection8 = 1.0;
          let guide8 = String.fromCharCode(120,95,54,55,95,101,116,104,101,114,0);
          let chartt = String.fromCharCode(97,97,99,115,98,114,100,97,116,97,95,118,95,52,49,0);
          let detailsY = true;
         minimize2 += `${chartt.length}`;
         libcrashsdkI.set(guide8, ((detailsY ? 3 : 4)));
         collection8 -= (parseFloat(`${libcrashsdkI.size | (detailsY ? 3 : 1)}`));
         guide8 += `${((detailsY ? 2 : 1) % 2)}`;
         chartt = `${parseInt(`${collection8}`) % (Math.max(2, 1))}`;
      }
         yingH = [parseInt(`${predictionarrowp}`)];
      let componentQ = String.fromCharCode(104,97,102,0) == minimize2;
      do {
          let subbasketballplayer8: Map<any, any> = new Map([[String.fromCharCode(98,121,112,97,115,115,95,98,95,49,0),214], [String.fromCharCode(121,95,49,55,95,99,111,108,108,105,100,101,114,0),416]]);
          let serviceh = true;
         minimize2 += `${1 - subbasketballplayer8.size}`;
         subbasketballplayer8 = new Map([[`${serviceh}`, ((serviceh ? 5 : 5) & (serviceh ? 3 : 4))]]);
         if (componentQ) {
            break;
         }
      } while (componentQ && (minimize2.includes(`${description_kz}`)));
      while (3 < (1 + yingH.length) || (yingH.length - parseInt(`${description_kz}`)) < 1) {
         description_kz -= 2;
         break;
      }
      if (yingH.length >= parseInt(`${activityr}`)) {
         activityr -= 2;
      }
         yingH.push(minimize2.length << (Math.min(Math.abs(2), 4)));
      let shootyesgoal5 = profileW <= 6789467.0;
      do {
         profileW /= Math.max(parseFloat(`${minimize2.length << (Math.min(Math.abs(1), 3))}`), 3);
         if (shootyesgoal5) {
            break;
         }
      } while (((parseFloat(`${yingH.length}`) / (Math.max(10, profileW))) == 1.46 && (yingH.length + 5) == 4) && shootyesgoal5);
      for (let h = 0; h < 2; h++) {
         profileW /= Math.max(parseFloat(`${parseInt(`${description_kz}`)}`), 2);
      }
      while ((predictionarrowp - 1.50) > 3.56 || 2.20 > (1.50 - predictionarrowp)) {
         profileW += parseFloat(`${parseInt(`${source4}`) ^ parseInt(`${profileW}`)}`);
         break;
      }
         activityr *= parseInt(`${predictionarrowp}`) / (Math.max(7, parseInt(`${description_kz}`)));
         yingH = [parseInt(`${activityr}`) ^ minimize2.length];
      let textinputM = profileW >= 8508001.0;
      do {
          let goalI = String.fromCharCode(122,95,55,52,95,115,116,114,101,97,109,104,101,97,100,101,114,0);
          let annerj = 1.0;
          let update_xx9 = String.fromCharCode(114,95,53,50,95,97,118,99,116,120,0);
          let gradlewD = true;
          let temperature8 = 3.0;
         profileW *= (parseFloat(`${update_xx9 == String.fromCharCode(104,0) ? update_xx9.length : minimize2.length}`));
         goalI += `${1 * parseInt(`${annerj}`)}`;
         annerj /= Math.max(4, parseFloat(`${goalI.length}`));
         gradlewD = temperature8 > 47.72;
         temperature8 -= 3 >> (Math.min(3, goalI.length));
         if (textinputM) {
            break;
         }
      } while (((profileW + 4.53) > 1.43 && (profileW * activityr) > 4.53) && textinputM);
      clocki += `${2 & parseInt(`${description_kz}`)}`;
      break;
   }
       let relatedc = 5.0;
       let scrollviewb = String.fromCharCode(116,95,57,51,95,112,114,101,102,102,101,114,101,100,0);
       let customa = String.fromCharCode(121,95,52,52,95,97,115,115,101,109,98,108,101,0);
          let bridgem = true;
         relatedc += (String.fromCharCode(69,0) == scrollviewb ? parseInt(`${relatedc}`) : scrollviewb.length);
         bridgem = !bridgem;
      if (scrollviewb == String.fromCharCode(85,0)) {
         customa = `${scrollviewb.length >> (Math.min(Math.abs(2), 4))}`;
      }
      if ((parseInt(`${relatedc}`) - scrollviewb.length) == 5 || (scrollviewb.length - relatedc) == 4.62) {
         relatedc += scrollviewb.length;
      }
      for (let k = 0; k < 3; k++) {
         customa += `${scrollviewb.length | parseInt(`${relatedc}`)}`;
      }
         relatedc -= scrollviewb.length / (Math.max(4, parseInt(`${relatedc}`)));
      let hooksm = 8649414.0 >= relatedc;
      do {
         relatedc /= Math.max(scrollviewb.length, 1);
         if (hooksm) {
            break;
         }
      } while (hooksm && ((scrollviewb.length & 3) > 5 && 3.61 > (relatedc * 1.22)));
         customa = `${scrollviewb.length ^ 2}`;
          let greenu = String.fromCharCode(98,111,116,104,95,102,95,50,50,0);
         scrollviewb = `${2 >> (Math.min(4, customa.length))}`;
         greenu += `${1 / (Math.max(9, greenu.length))}`;
         scrollviewb += "1";
      lineu += "2";
       let yellowvideolive8 = 4.0;
       let librrcK = 1.0;
      for (let v = 0; v < 2; v++) {
         librrcK += parseFloat(`${parseInt(`${yellowvideolive8}`) & 1}`);
      }
      if (librrcK < 1.60) {
         yellowvideolive8 /= Math.max(4, parseInt(`${yellowvideolive8}`) ^ parseInt(`${librrcK}`));
      }
          let bodanI = 1.0;
          let whistleorangew: Array<any> = [String.fromCharCode(120,95,54,55,95,112,114,111,99,101,101,100,0), String.fromCharCode(114,95,57,53,95,114,101,97,100,108,110,0)];
          let yellowvideoliveP: Array<any> = [324, 682];
         librrcK /= Math.max(2, parseFloat(`${whistleorangew.length}`));
         bodanI -= parseFloat(`${parseInt(`${bodanI}`) >> (Math.min(yellowvideoliveP.length, 2))}`);
         whistleorangew.push(yellowvideoliveP.length);
         librrcK += parseFloat(`${parseInt(`${yellowvideolive8}`) | 3}`);
      if ((2.73 + librrcK) <= 3.49 && 1.10 <= (yellowvideolive8 + 2.73)) {
         librrcK += parseFloat(`${parseInt(`${librrcK}`) << (Math.min(2, Math.abs(3)))}`);
      }
         yellowvideolive8 += parseInt(`${yellowvideolive8}`) % (Math.max(9, parseInt(`${librrcK}`)));
      dycreatort += "3";
       let libjsin = String.fromCharCode(117,95,51,55,95,114,101,117,112,108,111,97,100,101,100,0);
       let rncore_ = String.fromCharCode(104,95,52,50,95,112,111,115,116,115,99,97,108,101,0);
      for (let f = 0; f < 2; f++) {
         libjsin += `${(String.fromCharCode(89,0) == libjsin ? rncore_.length : libjsin.length)}`;
      }
      while (rncore_.length < libjsin.length) {
         libjsin += `${libjsin.length}`;
         break;
      }
         rncore_ = `${(String.fromCharCode(67,0) == libjsin ? rncore_.length : libjsin.length)}`;
      let promotionJ = libjsin == String.fromCharCode(102,114,121,105,117,95,115,49,0);
      do {
         libjsin = `${rncore_.length}`;
         if (promotionJ) {
            break;
         }
      } while ((3 <= libjsin.length) && promotionJ);
         rncore_ = `${(String.fromCharCode(82,0) == rncore_ ? rncore_.length : libjsin.length)}`;
      for (let w = 0; w < 1; w++) {
          let backiconD = String.fromCharCode(115,95,52,95,99,97,112,105,116,97,108,105,122,101,0);
          let libfollyK = String.fromCharCode(114,95,54,95,100,119,97,114,102,0);
          let macaur = 4;
          let libimagepipeline5 = String.fromCharCode(114,101,110,100,101,114,95,110,95,53,56,0);
          let ajax4 = 4.0;
         rncore_ += "1";
         backiconD += `${macaur % 2}`;
         libfollyK += `${backiconD.length % (Math.max(2, 1))}`;
         macaur += 1;
         libimagepipeline5 = `${1 + parseInt(`${ajax4}`)}`;
         ajax4 /= Math.max(parseFloat(`${2}`), 4);
      }
      codeV += `${libjsin.length / (Math.max(2, 1))}`;

        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

      kuaishouf = "1";
      libreactN = new Map([[`${libreactN.size}`, utilsX.length]]);
   let dangerH = lineu == String.fromCharCode(104,101,56,97,52,112,54,117,0);
   do {
      lineu = "2";
      if (dangerH) {
         break;
      }
   } while (dangerH && (lineu.length < dycreatort.length));
      gifgoalbgO += completex.length;
   for (let n = 0; n < 1; n++) {
      codeV += `${1 % (Math.max(6, schedulerC.size))}`;
   }
   let lineT = 6238296 >= libreactN.size;
   do {
      libreactN = new Map([[completex, history0.length]]);
      if (lineT) {
         break;
      }
   } while (lineT && (clocki.length == 1));
      completex = "1";

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });

      libreactN = new Map([[codeV, codeV.length | 3]]);
   let favoriteu = history0 == String.fromCharCode(103,108,104,116,54,50,95,0);
   do {
       let volumez = String.fromCharCode(98,105,114,116,104,100,97,121,95,107,95,51,56,0);
       let models3 = String.fromCharCode(117,95,57,55,95,109,112,101,103,100,97,116,97,0);
       let iconplayz = String.fromCharCode(110,95,53,50,95,99,101,108,108,117,108,97,114,0);
       let catalogQ = String.fromCharCode(105,103,110,111,114,101,115,95,98,95,53,50,0);
      if (!models3.endsWith(`${iconplayz.length}`)) {
          let viewer5 = String.fromCharCode(105,95,53,49,95,98,101,108,108,0);
          let templateprocessorv = String.fromCharCode(99,95,57,95,116,117,114,98,111,106,112,101,103,0);
          let corner4 = true;
          let catalogU = true;
         iconplayz += `${volumez.length / 1}`;
         viewer5 = `${templateprocessorv.length ^ 3}`;
         templateprocessorv = "2";
         corner4 = catalogU;
      }
         models3 += `${catalogQ.length >> (Math.min(Math.abs(1), 4))}`;
         volumez = `${3 << (Math.min(3, volumez.length))}`;
      let h_countT = models3.length <= 9262438;
      do {
          let libjsinspectorC = 1;
          let activityL = String.fromCharCode(115,105,108,107,95,114,95,53,49,0);
          let backl = String.fromCharCode(104,95,51,53,95,99,104,111,115,101,110,0);
          let holder_ = String.fromCharCode(107,95,52,50,95,97,100,118,97,110,99,101,109,101,110,116,0);
         models3 = `${models3.length}`;
         libjsinspectorC &= 3 - backl.length;
         activityL += "1";
         backl += `${backl.length}`;
         holder_ = "1";
         if (h_countT) {
            break;
         }
      } while (h_countT && (catalogQ.length == models3.length));
      let mimoV = String.fromCharCode(98,95,97,53,0) == catalogQ;
      do {
         catalogQ = `${iconplayz.length >> (Math.min(Math.abs(1), 5))}`;
         if (mimoV) {
            break;
         }
      } while ((volumez.includes(`${catalogQ.length}`)) && mimoV);
         iconplayz = `${2 << (Math.min(1, iconplayz.length))}`;
      for (let x = 0; x < 3; x++) {
          let iconclosewhitebgc = String.fromCharCode(119,101,98,112,97,103,101,95,48,95,53,50,0);
          let sheett = 2.0;
          let agreementh: Array<any> = [833, 800, 914];
          let sportsR = String.fromCharCode(100,95,51,50,95,115,104,97,112,101,115,0);
          let robotoX = String.fromCharCode(111,95,49,95,112,101,114,99,101,112,116,117,97,108,0);
         models3 += `${parseInt(`${sheett}`)}`;
         iconclosewhitebgc = `${agreementh.length}`;
         sheett -= parseFloat(`${3 * robotoX.length}`);
         agreementh.push(2);
         sportsR = `${2 - robotoX.length}`;
      }
         catalogQ += `${iconplayz.length}`;
         volumez = `${catalogQ.length | iconplayz.length}`;
      for (let l = 0; l < 3; l++) {
         models3 = `${(String.fromCharCode(103,0) == models3 ? volumez.length : models3.length)}`;
      }
      while (catalogQ != String.fromCharCode(116,0) || models3 != String.fromCharCode(109,0)) {
         catalogQ = `${1 - volumez.length}`;
         break;
      }
         models3 += `${volumez.length << (Math.min(Math.abs(3), 1))}`;
      history0 += "1";
      if (favoriteu) {
         break;
      }
   } while (favoriteu && (dycreatort == history0));
       let inactiveE: Array<any> = [999, 675];
         inactiveE.push(3 << (Math.min(5, inactiveE.length)));
      if (3 > (inactiveE.length >> (Math.min(Math.abs(4), 5)))) {
         inactiveE = [inactiveE.length >> (Math.min(1, inactiveE.length))];
      }
      for (let x = 0; x < 3; x++) {
         inactiveE = [inactiveE.length];
      }
      libreactN = new Map([[`${inactiveE.length}`, (String.fromCharCode(113,0) == completex ? inactiveE.length : completex.length)]]);
       let activityx: Array<any> = [String.fromCharCode(99,114,101,97,116,101,101,120,95,99,95,50,54,0), String.fromCharCode(108,117,114,97,108,105,122,97,116,105,111,110,95,105,95,50,52,0), String.fromCharCode(110,101,103,111,116,105,97,116,105,111,110,95,122,95,54,48,0)];
      while (3 < (activityx.length / 4)) {
         activityx.push(activityx.length + 1);
         break;
      }
          let executorG: Map<any, any> = new Map([[String.fromCharCode(117,95,49,54,95,98,97,110,110,101,100,0),String.fromCharCode(113,95,49,56,95,99,108,108,105,0)], [String.fromCharCode(117,112,100,97,116,101,114,95,57,95,56,52,0),String.fromCharCode(120,95,54,95,100,105,115,112,115,97,98,108,101,0)]]);
          let overlayR: Map<any, any> = new Map([[String.fromCharCode(113,95,54,56,95,115,104,117,116,116,101,114,0),816], [String.fromCharCode(101,112,108,121,95,109,95,57,55,0),165]]);
          let chinasamev = 5.0;
         activityx.push(parseInt(`${chinasamev}`));
         executorG.set(`${overlayR.size}`, overlayR.size);
         chinasamev += executorG.size / (Math.max(9, overlayR.size));
      while (activityx.length == activityx.length) {
         activityx = [1];
         break;
      }
      kuaishouf = `${activityx.length >> (Math.min(Math.abs(2), 2))}`;
   for (let q = 0; q < 2; q++) {
       let nbatrophyA = 5.0;
       let profileinactive9 = String.fromCharCode(103,95,57,48,95,97,110,97,108,111,103,0);
       let progressi = String.fromCharCode(121,95,54,56,95,103,114,111,119,0);
       let nterstitialO = 5.0;
       let trophyV: Array<any> = [String.fromCharCode(99,111,110,116,114,97,99,116,95,122,95,50,51,0), String.fromCharCode(117,95,57,50,95,100,105,118,0)];
          let reducer0 = String.fromCharCode(118,105,109,101,111,95,120,95,53,0);
         progressi += `${3 | trophyV.length}`;
         reducer0 = `${reducer0.length}`;
      if ((1 << (Math.min(5, profileinactive9.length))) < 5 || 4.26 < (profileinactive9.length + nterstitialO)) {
         nterstitialO -= trophyV.length >> (Math.min(4, Math.abs(parseInt(`${nbatrophyA}`))));
      }
          let thumbnailh = 1;
          let filedh = 1.0;
          let pressureW = String.fromCharCode(115,116,97,114,116,95,115,95,57,48,0);
         progressi += `${parseInt(`${nbatrophyA}`)}`;
         thumbnailh %= Math.max(parseInt(`${filedh}`) / (Math.max(6, pressureW.length)), 5);
         filedh += parseInt(`${filedh}`) << (Math.min(pressureW.length, 2));
          let tickB = 3.0;
          let action3 = String.fromCharCode(121,95,55,51,95,99,111,112,105,101,115,0);
         nterstitialO -= 1 >> (Math.min(3, profileinactive9.length));
         tickB /= Math.max(4, parseFloat(`${1}`));
         action3 += `${parseInt(`${tickB}`)}`;
         trophyV.push(1 * parseInt(`${nbatrophyA}`));
      let libtanQ = trophyV.length <= 4946236;
      do {
         trophyV = [(profileinactive9 == String.fromCharCode(104,0) ? profileinactive9.length : trophyV.length)];
         if (libtanQ) {
            break;
         }
      } while (((trophyV.length - 3) == 1 || 3 == (3 - progressi.length)) && libtanQ);
      let sourced = profileinactive9 == String.fromCharCode(98,100,106,116,113,111,0);
      do {
          let mail8 = String.fromCharCode(114,101,105,109,112,111,114,116,95,106,95,57,48,0);
         profileinactive9 += "3";
         mail8 += `${(mail8 == String.fromCharCode(104,0) ? mail8.length : mail8.length)}`;
         if (sourced) {
            break;
         }
      } while ((5 <= profileinactive9.length || progressi == String.fromCharCode(71,0)) && sourced);
       let catalogo = 0.0;
       let manifestU = 4.0;
      if (nterstitialO < 2.98) {
         nterstitialO -= 3 * profileinactive9.length;
      }
      for (let b = 0; b < 1; b++) {
          let scrollviewV = 0.0;
          let j_image3 = String.fromCharCode(99,111,114,114,95,107,95,56,48,0);
          let castingX = String.fromCharCode(111,95,55,51,95,111,112,99,111,100,101,115,0);
          let home5 = String.fromCharCode(119,105,110,99,101,95,104,95,52,48,0);
          let private_li0: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,104,95,55,50,0),false ], [String.fromCharCode(106,95,56,50,95,114,97,110,115,112,111,114,116,0),true ], [String.fromCharCode(112,95,54,56,95,111,114,105,0),true ]]);
         progressi += `${profileinactive9.length}`;
         scrollviewV -= parseFloat(`${3}`);
         j_image3 = `${private_li0.size}`;
         castingX = `${j_image3.length & castingX.length}`;
         home5 = `${(String.fromCharCode(74,0) == castingX ? castingX.length : home5.length)}`;
         private_li0.set(home5, castingX.length ^ 3);
      }
      let x_imagej = progressi.length <= 9755138;
      do {
         progressi += `${2 >> (Math.min(Math.abs(parseInt(`${nterstitialO}`)), 1))}`;
         if (x_imagej) {
            break;
         }
      } while ((progressi.length >= manifestU) && x_imagej);
      for (let h = 0; h < 3; h++) {
         catalogo += (String.fromCharCode(95,0) == profileinactive9 ? profileinactive9.length : parseInt(`${nterstitialO}`));
      }
          let saveZ = 0.0;
         nbatrophyA /= Math.max(trophyV.length, 3);
         saveZ -= parseFloat(`${parseInt(`${saveZ}`) - 3}`);
         progressi += "1";
      for (let x = 0; x < 3; x++) {
         profileinactive9 = "1";
      }
      schedulerC = new Map([[`${libtanm}`, (String.fromCharCode(66,0) == dycreatort ? (libtanm ? 4 : 3) : dycreatort.length)]]);
   }
      mutedq |= clocki.length % 1;
      libtanm = kuaishouf == String.fromCharCode(95,0);
        setNumOfUnread(0);
    }

    useEffect(() => {
        if ((chatState.liveRoom?.messages.length ?? 0) > 0 && isPinToBottom.current == false) {
            setNumOfUnread(prev => prev + 1);
        }
    }, [chatState.liveRoom?.messages.length])

    return (
        <View style={styles.container}>
            <FlatList
                ref={ref => chatFlatListRef.current = ref}
                keyExtractor={(item) => item.joinDate!.toString()}
                data={historyChat.concat(chatState.privateRoom !== null
                    ? { ...chatState.privateRoom, userId: chatState.userId }
                    : []
                )}
                renderItem={renderChatGroup}
                style={styles.chatlistContainer}
                ItemSeparatorComponent={renderSeparator}
                onTouchStart={onUserScroll}
                onMomentumScrollEnd={onMomentumScrollEnd}
                onContentSizeChange={onFlatlistChange}
            />

            {!chatState.privateRoom === null &&
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
                    value={comment}
                    onChangeText={onChangeComment}
                    maxLength={COMMENT_MAX_INPUT + PIN_YIN_ACCEPTED}
                    disabled={!isLogin}
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

export default memo(PrivateChatPage);
