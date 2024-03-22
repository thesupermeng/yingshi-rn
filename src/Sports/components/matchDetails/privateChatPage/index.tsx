import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import createStyles from "./fgl_less_position";
import { useAppDispatch, useSelector } from "@hooks/kg_index";
import { CPressable, CTextInput } from "../../../../components/atoms";
import SendIcon from '@static/images/footballIcon.svg';
import SendFillIcon from '@static/images/bootsplashPolicyArrow.svg';
import { COMMENT_MAX_INPUT } from "@utility/n_subs_interstitial";
import { NETempEmoji } from "@type/wpk_long";
import { LOQFloaterDialog } from "@redux/reducers/t_filled";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux/actions/gc_hongkong";
import { IXRFriends } from "../../../types/x_home";
import { useTheme } from "@react-navigation/native";
import { Avatar } from "@rneui/base";
import { EHWPlashLight, IMLRenewCarousel } from "@type/jxf_pause";
import { debounce } from "lodash";
import { UnreadCard } from "../../../../components/chat/fcz_subs";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";

type XFillButton = {
    matchID: string,
    streamer: IXRFriends,
    sportType: string,
    onInputFocus?: (isFocus: boolean) => void,
}

const PrivateChatPage = ({
    matchID,
    streamer,
    sportType,
    onInputFocus,
}: XFillButton) => {
    const PIN_YIN_ACCEPTED = 20;

    const { colors } = useTheme();
    const styles = useMemo(() => createStyles({ colors }), []);

    const chatState = useSelector<LOQFloaterDialog>('chatReducer');
    const userState = useSelector<HDTGesturesList>('userReducer');
    const [comment, setComment] = useState('');
    const [historyChat, sethistoryChat] = useState<EHWPlashLight[]>([]);
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<EHWPlashLight> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = KWConstants.isLogin(userState.user);

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
       let episodesj = true;
    let z_viewi = 1.0;
    let backwardv = true;
    let middle6 = 2.0;
    let darky: Map<any, any> = new Map([[String.fromCharCode(100,95,52,49,95,100,101,99,114,121,112,116,101,100,0),true ], [String.fromCharCode(102,95,54,53,95,109,97,114,107,105,110,103,115,0),false ], [String.fromCharCode(119,95,56,51,95,117,110,104,97,110,100,108,101,100,0),true ]]);
    let grey9 = 3;
    let reportq = String.fromCharCode(112,111,115,116,105,111,110,95,103,95,54,54,0);
    let xnewsE = String.fromCharCode(104,95,53,51,95,112,111,108,121,107,101,121,0);
   while (!episodesj) {
      episodesj = middle6 == 28.75;
      break;
   }
   let corner1 = backwardv ? !backwardv : backwardv;
   do {
       let searchbar3 = String.fromCharCode(115,116,114,105,112,115,95,99,95,51,0);
       let checkboxd: Array<any> = [896, 554];
       let clearJ: Array<any> = [450, 141];
         clearJ.push((searchbar3 == String.fromCharCode(81,0) ? clearJ.length : searchbar3.length));
          let screend = String.fromCharCode(121,95,54,56,95,97,101,99,0);
         checkboxd.push((searchbar3 == String.fromCharCode(49,0) ? searchbar3.length : clearJ.length));
         screend += `${(String.fromCharCode(65,0) == screend ? screend.length : screend.length)}`;
      let notificationw = String.fromCharCode(116,51,110,101,50,115,0) == searchbar3;
      do {
         searchbar3 += `${clearJ.length}`;
         if (notificationw) {
            break;
         }
      } while (((clearJ.length << (Math.min(Math.abs(4), 5))) < 5) && notificationw);
      if (searchbar3.includes(`${checkboxd.length}`)) {
         checkboxd = [3];
      }
      for (let e = 0; e < 3; e++) {
         clearJ.push(searchbar3.length ^ clearJ.length);
      }
      while (1 >= (clearJ.length + searchbar3.length)) {
         searchbar3 = `${searchbar3.length & checkboxd.length}`;
         break;
      }
      if (3 > searchbar3.length) {
         searchbar3 += `${clearJ.length % (Math.max(1, checkboxd.length))}`;
      }
       let eact4 = String.fromCharCode(103,95,55,52,0);
       let zhengpianF = String.fromCharCode(111,95,50,53,95,110,97,99,107,0);
      for (let o = 0; o < 3; o++) {
         zhengpianF += `${1 | searchbar3.length}`;
      }
      backwardv = searchbar3.length >= darky.size;
      if (corner1) {
         break;
      }
   } while ((1.38 <= (z_viewi / 3.14) || !backwardv) && corner1);
      middle6 -= parseFloat(`${1}`);

        const histories = chatState.privateRoomHistory?.filter(e => e.roomId === `private:${matchID}` && e.userId === chatState.userId);

   if (backwardv || reportq.length >= 5) {
      reportq += `${1 ^ parseInt(`${middle6}`)}`;
   }
   while (1.69 >= (2.10 / (Math.max(8, z_viewi)))) {
      z_viewi -= grey9;
      break;
   }
   while (parseFloat(`${reportq.length}`) <= middle6) {
      reportq = `${3 - parseInt(`${middle6}`)}`;
      break;
   }

        if (!histories || histories.length === 0) return;

       let animationo = 4.0;
       let button0 = 1.0;
      let default__0 = button0 <= 8013331.0;
      do {
         button0 -= parseFloat(`${parseInt(`${animationo}`)}`);
         if (default__0) {
            break;
         }
      } while (default__0 && (5.57 <= animationo));
      if (animationo < button0) {
          let referrers = String.fromCharCode(121,95,49,53,95,115,116,111,114,101,120,0);
          let brightnessq = String.fromCharCode(118,95,51,55,95,121,111,110,108,121,120,0);
          let commonM = String.fromCharCode(99,95,55,55,95,108,101,103,101,110,100,0);
          let largeA = String.fromCharCode(121,95,49,56,95,108,101,101,119,97,121,0);
          let thumbnailZ = 3;
         button0 += (parseFloat(`${brightnessq == String.fromCharCode(113,0) ? commonM.length : brightnessq.length}`));
         referrers = "2";
         commonM = `${2 >> (Math.min(5, referrers.length))}`;
         largeA = "1";
         thumbnailZ |= 3 * thumbnailZ;
      }
          let controlsr = true;
          let unewsF = true;
         button0 /= Math.max(parseFloat(`${parseInt(`${animationo}`)}`), 3);
         controlsr = !unewsF;
         unewsF = !controlsr;
      while (animationo == button0) {
         button0 += parseFloat(`${parseInt(`${animationo}`)}`);
         break;
      }
         animationo /= Math.max(3, 1 % (Math.max(parseInt(`${animationo}`), 5)));
      while (animationo <= button0) {
          let gestureW = false;
          let orientationj = String.fromCharCode(117,95,55,50,95,112,111,115,116,98,111,120,0);
          let banner6 = String.fromCharCode(99,110,111,110,99,101,95,117,95,53,54,0);
          let usernamei = 5.0;
         animationo *= (parseInt(`${button0}`) >> (Math.min(2, Math.abs((gestureW ? 5 : 1)))));
         gestureW = String.fromCharCode(103,0) == banner6;
         orientationj = `${banner6.length}`;
         usernamei *= parseInt(`${usernamei}`) + 3;
         break;
      }
      reportq += `${((episodesj ? 1 : 5) % (Math.max(parseInt(`${middle6}`), 7)))}`;
       let downX = String.fromCharCode(101,120,112,97,110,100,95,118,95,57,55,0);
       let umengL = 4;
       let crossQ = String.fromCharCode(108,111,111,112,98,97,99,107,95,116,95,49,48,48,0);
      for (let a = 0; a < 1; a++) {
         downX = `${3 | downX.length}`;
      }
          let favicon_ = 3.0;
          let sheet6 = 4.0;
          let feedback1 = String.fromCharCode(119,95,55,52,95,100,111,99,115,0);
         downX += `${umengL & 2}`;
         favicon_ /= Math.max((parseFloat(`${String.fromCharCode(73,0) == feedback1 ? parseInt(`${sheet6}`) : feedback1.length}`)), 2);
         sheet6 -= parseFloat(`${parseInt(`${favicon_}`)}`);
         downX += `${crossQ.length}`;
      for (let y = 0; y < 1; y++) {
         umengL /= Math.max(umengL % (Math.max(crossQ.length, 4)), 5);
      }
      if (1 > (crossQ.length / (Math.max(2, 9))) || (umengL / (Math.max(2, 2))) > 1) {
          let refreshz = 4;
          let modelE: Array<any> = [36, 909, 691];
          let expiredK: Map<any, any> = new Map([[String.fromCharCode(109,95,52,57,95,103,117,97,114,97,110,116,101,101,115,0),586], [String.fromCharCode(103,95,52,51,95,116,97,114,103,97,0),506], [String.fromCharCode(111,95,49,57,95,118,97,108,117,108,101,0),175]]);
          let resendk: Map<any, any> = new Map([[String.fromCharCode(100,101,102,105,110,105,116,105,111,110,115,95,107,95,53,53,0),824], [String.fromCharCode(119,95,52,52,95,102,114,97,110,100,111,109,0),636], [String.fromCharCode(119,95,50,55,95,99,111,101,102,102,0),594]]);
          let fullE = String.fromCharCode(108,95,49,48,95,101,120,112,111,110,101,110,116,0);
         crossQ += `${umengL}`;
         refreshz *= refreshz / 1;
         modelE = [resendk.size];
         expiredK = new Map([[`${expiredK.size}`, 3 << (Math.min(4, Math.abs(resendk.size)))]]);
         fullE += `${fullE.length & 3}`;
      }
      for (let o = 0; o < 1; o++) {
         crossQ = `${umengL + 1}`;
      }
          let selectionD = 5;
         umengL <<= Math.min(Math.abs((crossQ == String.fromCharCode(53,0) ? crossQ.length : umengL)), 5);
         selectionD %= Math.max(selectionD & 1, 3);
      if (crossQ.length == 2) {
         umengL |= 3;
      }
      for (let f = 0; f < 1; f++) {
         umengL &= downX.length;
      }
      z_viewi /= Math.max(darky.size, 5);
   let container1 = episodesj ? !episodesj : episodesj;
   do {
      episodesj = !episodesj || 5.84 <= middle6;
      if (container1) {
         break;
      }
   } while (((grey9 % 2) > 3 && !episodesj) && container1);

        if (historyChat.length === 0) {

      backwardv = reportq.length > grey9;
   for (let j = 0; j < 3; j++) {
       let roomW: Array<any> = [13, 42];
       let signinupR: Map<any, any> = new Map([[String.fromCharCode(120,95,55,56,95,99,107,115,117,109,0),673], [String.fromCharCode(114,95,57,51,95,110,111,116,105,99,101,115,0),17], [String.fromCharCode(97,95,52,50,95,115,117,98,102,114,97,109,101,0),561]]);
       let injuryp = 4.0;
       let currenty = false;
       let styleE = false;
         currenty = !styleE;
      if (!roomW.includes(injuryp)) {
         roomW.push(2 >> (Math.min(Math.abs(parseInt(`${injuryp}`)), 2)));
      }
         injuryp -= ((styleE ? 4 : 2) << (Math.min(roomW.length, 5)));
       let viewerc = true;
       let reducer4 = true;
         viewerc = !reducer4;
         viewerc = styleE;
      for (let e = 0; e < 1; e++) {
         styleE = viewerc && signinupR.size == 27;
      }
      let connectionI = injuryp >= 6886895.0;
      do {
          let playlistq = 2.0;
          let options_ = String.fromCharCode(112,95,51,55,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0);
          let vietnam3: Array<any> = [338, 897, 820];
         injuryp += ((reducer4 ? 2 : 1) / (Math.max(2, 8)));
         playlistq += 2;
         options_ += `${parseInt(`${playlistq}`) + 1}`;
         vietnam3.push(vietnam3.length ^ 3);
         if (connectionI) {
            break;
         }
      } while ((5.62 <= (3.67 * injuryp) && (signinupR.size & 4) <= 2) && connectionI);
      if (!Array.from(signinupR.keys()).includes(`${injuryp}`)) {
         signinupR.set(`${reducer4}`, 1 << (Math.min(5, Math.abs(signinupR.size))));
      }
      let heartI = signinupR.size >= 8026034;
      do {
          let anytimeq: Map<any, any> = new Map([[String.fromCharCode(107,95,56,56,95,101,97,114,108,121,0),249], [String.fromCharCode(118,97,108,105,100,97,116,101,100,95,116,95,54,55,0),901], [String.fromCharCode(100,95,50,54,95,97,99,116,117,97,108,108,121,0),516]]);
          let downloaderO = String.fromCharCode(97,95,55,50,95,101,109,98,101,100,0);
         signinupR = new Map([[`${roomW.length}`, ((viewerc ? 5 : 4) | 1)]]);
         anytimeq = new Map([[`${anytimeq.size}`, 1]]);
         downloaderO += "3";
         if (heartI) {
            break;
         }
      } while ((!Array.from(signinupR.keys()).includes(`${roomW.length}`)) && heartI);
         injuryp *= 1 ^ parseInt(`${injuryp}`);
         roomW = [3];
      while (!styleE) {
         styleE = 83 >= signinupR.size;
         break;
      }
         viewerc = (reducer4 ? viewerc : !reducer4);
         signinupR = new Map([[`${roomW.length}`, roomW.length]]);
      backwardv = !episodesj;
   }
   if ((4 ^ darky.size) <= 4) {
       let injury3 = true;
       let kickL = 1;
       let unreadx = 0;
       let recommendationo = String.fromCharCode(117,115,108,116,95,103,95,54,51,0);
       let streaminga = String.fromCharCode(121,95,51,56,95,108,117,109,105,110,97,110,99,101,0);
          let backY = 2.0;
          let episoded = 4.0;
          let rewindx: Array<any> = [51, 266];
         unreadx += 2 - recommendationo.length;
         backY /= Math.max(2, 3);
         episoded += parseInt(`${episoded}`);
         rewindx.push(3);
          let tickedI: Array<any> = [281, 891];
          let singaporeL = String.fromCharCode(100,95,56,56,95,112,97,115,115,116,104,114,111,117,103,104,0);
         kickL |= 2 * singaporeL.length;
         tickedI.push(tickedI.length);
         singaporeL += `${tickedI.length}`;
      while (4 <= (5 >> (Math.min(2, Math.abs(kickL))))) {
          let auto_ts3 = 5.0;
          let hooks9 = 4.0;
          let animatione = String.fromCharCode(122,108,105,98,95,115,95,52,53,0);
          let hejiN = String.fromCharCode(112,111,115,116,99,111,100,101,95,99,95,54,53,0);
         kickL ^= recommendationo.length;
         auto_ts3 += (String.fromCharCode(85,0) == animatione ? animatione.length : parseInt(`${hooks9}`));
         hooks9 *= parseInt(`${hooks9}`) + hejiN.length;
         hejiN = `${parseInt(`${auto_ts3}`) >> (Math.min(Math.abs(parseInt(`${hooks9}`)), 4))}`;
         break;
      }
      if (streaminga.length >= 2) {
          let string7: Array<any> = [674, 208, 950];
          let suggestionQ = 1;
         recommendationo += `${suggestionQ * unreadx}`;
         string7.push(string7.length);
         suggestionQ &= string7.length % 1;
      }
       let otherl = String.fromCharCode(99,104,114,111,109,97,107,101,121,95,122,95,49,54,0);
         injury3 = (streaminga.length >> (Math.min(3, otherl.length))) > 12;
       let windW: Array<any> = [683, 950];
          let singles: Array<any> = [549, 998, 973];
          let basketbally = String.fromCharCode(97,100,97,112,116,115,95,120,95,53,55,0);
         windW.push(kickL);
         singles.push(basketbally.length << (Math.min(4, singles.length)));
         basketbally = `${1 % (Math.max(5, basketbally.length))}`;
         kickL |= otherl.length * 1;
      let showc = injury3 ? !injury3 : injury3;
      do {
          let bingu = String.fromCharCode(119,104,105,116,101,95,106,95,56,52,0);
          let agreementi: Array<any> = [String.fromCharCode(117,110,112,105,110,110,101,100,95,97,95,51,55,0), String.fromCharCode(114,95,54,54,95,112,114,111,112,101,114,0)];
          let stringQ: Array<any> = [String.fromCharCode(109,105,120,101,114,95,112,95,57,49,0), String.fromCharCode(114,95,54,57,95,119,114,105,116,101,116,114,117,110,99,0), String.fromCharCode(117,112,99,97,108,108,95,118,95,53,56,0)];
          let upgradeF = String.fromCharCode(115,112,101,99,95,54,95,50,49,0);
         injury3 = otherl.length <= 11;
         bingu += `${agreementi.length}`;
         agreementi.push(1);
         stringQ = [1];
         upgradeF = `${upgradeF.length}`;
         if (showc) {
            break;
         }
      } while ((!injury3) && showc);
      let redirectz = kickL <= 9729898;
      do {
         kickL <<= Math.min(Math.abs(recommendationo.length / (Math.max(3, 8))), 4);
         if (redirectz) {
            break;
         }
      } while ((5 < (unreadx / (Math.max(kickL, 1))) && 5 < (kickL / (Math.max(8, unreadx)))) && redirectz);
         windW.push((String.fromCharCode(88,0) == streaminga ? streaminga.length : recommendationo.length));
         kickL += windW.length >> (Math.min(Math.abs(1), 4));
         injury3 = 86 < windW.length;
      for (let j = 0; j < 2; j++) {
         otherl += `${kickL << (Math.min(1, Math.abs(2)))}`;
      }
      darky = new Map([[`${middle6}`, 3 >> (Math.min(Math.abs(parseInt(`${middle6}`)), 1))]]);
   }
            sethistoryChat([histories[histories.length - 1]]);
        } else {

       let greenP = String.fromCharCode(111,95,54,53,95,100,115,112,114,0);
       let step5: Array<any> = [540, 265];
          let sharei = String.fromCharCode(97,108,103,111,114,105,116,104,109,95,111,95,50,55,0);
          let resultT = String.fromCharCode(109,95,51,95,103,114,97,110,117,108,97,114,0);
         greenP += "1";
         sharei = `${2 ^ sharei.length}`;
         resultT += "3";
      let tempZ = step5.length >= 8302688;
      do {
         step5 = [step5.length << (Math.min(Math.abs(3), 1))];
         if (tempZ) {
            break;
         }
      } while (tempZ && (greenP.endsWith(`${step5.length}`)));
          let lightq = 3.0;
         step5 = [greenP.length % 2];
         lightq /= Math.max(parseFloat(`${parseInt(`${lightq}`)}`), 4);
       let awayL = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,115,95,110,95,56,48,0);
         step5 = [greenP.length << (Math.min(4, step5.length))];
       let canvasQ = String.fromCharCode(113,117,97,110,116,105,116,121,95,116,95,51,56,0);
      darky = new Map([[`${episodesj}`, 2 >> (Math.min(5, reportq.length))]]);
      backwardv = !backwardv;
   if (1.34 > (z_viewi * middle6) || (middle6 * z_viewi) > 1.34) {
       let scoreq = 0;
       let upgradem = true;
       let suggestionD = String.fromCharCode(104,97,98,108,101,95,103,95,56,52,0);
         upgradem = !upgradem;
      while (suggestionD.length >= 4 && !upgradem) {
         suggestionD = `${scoreq}`;
         break;
      }
      for (let m = 0; m < 1; m++) {
          let pausez = String.fromCharCode(118,105,115,105,116,95,55,95,50,57,0);
          let rankQ = true;
          let renewW: Map<any, any> = new Map([[String.fromCharCode(116,95,57,55,95,111,112,115,0),String.fromCharCode(108,111,99,97,116,105,111,110,95,97,95,49,53,0)], [String.fromCharCode(109,97,120,113,95,117,95,56,0),String.fromCharCode(116,95,49,48,48,95,99,104,111,115,101,110,0)]]);
          let whiteg = 5.0;
         upgradem = 77 == suggestionD.length;
         pausez += `${((rankQ ? 1 : 1) | parseInt(`${whiteg}`))}`;
         rankQ = (parseInt(`${whiteg}`) * pausez.length) > 73;
         renewW.set(`${pausez}`, renewW.size + pausez.length);
      }
      for (let h = 0; h < 1; h++) {
         upgradem = !upgradem;
      }
         scoreq <<= Math.min(Math.abs(1), 1);
         upgradem = 15 >= scoreq || 15 >= suggestionD.length;
         suggestionD = `${((upgradem ? 4 : 4) + scoreq)}`;
         scoreq /= Math.max(1, 2);
      let teamF = upgradem ? !upgradem : upgradem;
      do {
          let shrinkY = 5;
          let rewindE = String.fromCharCode(103,114,97,110,112,111,115,95,111,95,56,52,0);
          let flyera = false;
          let submitn = true;
          let tickO: Array<any> = [String.fromCharCode(111,95,50,53,95,110,117,109,98,101,114,115,0), String.fromCharCode(107,101,114,110,101,114,95,109,95,54,49,0), String.fromCharCode(109,95,56,54,95,99,108,111,99,107,119,105,115,101,0)];
         upgradem = scoreq >= rewindE.length;
         shrinkY += ((submitn ? 3 : 5) * (flyera ? 4 : 2));
         rewindE += `${((flyera ? 3 : 3) ^ (submitn ? 4 : 2))}`;
         tickO.push(1 & shrinkY);
         if (teamF) {
            break;
         }
      } while (teamF && (upgradem || suggestionD.length > 1));
      z_viewi /= Math.max(((episodesj ? 2 : 1) >> (Math.min(suggestionD.length, 4))), 2);
   }
            const indexFound = histories.findIndex(e => e.joinDate === historyChat[0].joinDate);

   if ((parseInt(`${middle6}`) * reportq.length) <= 2 || (reportq.length >> (Math.min(Math.abs(2), 4))) <= 3) {
      reportq = `${(parseInt(`${z_viewi}`) * (backwardv ? 4 : 1))}`;
   }
      reportq += `${3 << (Math.min(5, Math.abs(darky.size)))}`;
       let predictiong: Map<any, any> = new Map([[String.fromCharCode(105,109,100,99,116,95,49,95,50,54,0),false ], [String.fromCharCode(112,103,109,121,117,118,95,99,95,56,57,0),false ], [String.fromCharCode(115,101,115,115,105,111,110,115,95,57,95,50,0),false ]]);
       let faviconS = 1;
         predictiong = new Map([[`${predictiong.size}`, faviconS ^ 1]]);
      if ((3 & predictiong.size) < 3 && 3 < (faviconS & predictiong.size)) {
          let bodanD = 3.0;
          let livef: Map<any, any> = new Map([[String.fromCharCode(100,105,97,108,108,105,110,103,95,51,95,53,51,0),true ], [String.fromCharCode(109,95,52,48,95,103,101,111,109,0),false ]]);
          let humidityP: Map<any, any> = new Map([[String.fromCharCode(97,95,51,53,95,111,119,110,101,114,115,104,105,112,0),646], [String.fromCharCode(108,95,52,52,95,103,117,105,100,0),988], [String.fromCharCode(109,95,57,49,95,110,111,110,110,117,108,108,97,100,100,114,101,115,115,0),528]]);
          let stationso = 4;
          let whistlep = 5.0;
         faviconS *= 2;
         bodanD -= 3 | parseInt(`${whistlep}`);
         livef.set(`${whistlep}`, livef.size);
         humidityP.set(`${bodanD}`, parseInt(`${bodanD}`));
         stationso /= Math.max(parseInt(`${whistlep}`) / (Math.max(8, parseInt(`${bodanD}`))), 3);
      }
         faviconS /= Math.max(5, 1);
         faviconS /= Math.max(predictiong.size - faviconS, 5);
      for (let m = 0; m < 1; m++) {
         predictiong = new Map([[`${predictiong.size}`, predictiong.size]]);
      }
       let themef: Array<any> = [414, 775];
      middle6 *= parseFloat(`${1 | parseInt(`${z_viewi}`)}`);

            if (indexFound === -1 || (indexFound - 1) < 0) return;

      episodesj = z_viewi >= 62.36 && String.fromCharCode(103,0) == reportq;
      z_viewi -= reportq.length % 2;
   let singaporez = backwardv ? !backwardv : backwardv;
   do {
       let interstitialz = 0.0;
       let acceptedY = 1.0;
       let config7 = String.fromCharCode(116,95,53,53,95,98,97,111,98,97,98,0);
       let otherd = 4.0;
         otherd += (parseFloat(`${String.fromCharCode(53,0) == config7 ? parseInt(`${otherd}`) : config7.length}`));
      if (2 <= (5 >> (Math.min(5, config7.length))) && (parseInt(`${interstitialz}`) / (Math.max(config7.length, 7))) <= 5) {
         interstitialz *= (config7 == String.fromCharCode(104,0) ? config7.length : parseInt(`${otherd}`));
      }
      while ((interstitialz * 3.90) >= 2.94 && (3.90 * interstitialz) >= 5.16) {
          let condensedp: Map<any, any> = new Map([[String.fromCharCode(115,97,118,101,95,103,95,50,56,0),772], [String.fromCharCode(108,122,115,115,95,112,95,49,52,0),131]]);
          let minimizee: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,108,121,95,121,95,57,57,0),String.fromCharCode(102,95,50,49,0)], [String.fromCharCode(120,95,53,57,95,97,108,116,101,114,110,97,116,105,118,101,0),String.fromCharCode(114,95,50,50,95,119,114,97,112,112,101,114,0)]]);
         acceptedY *= minimizee.size << (Math.min(2, Math.abs(parseInt(`${acceptedY}`))));
         condensedp.set(`${condensedp.size}`, condensedp.size);
         minimizee.set(`${condensedp.size}`, 2 & condensedp.size);
         break;
      }
      if (otherd == 5.4) {
          let loadingQ = 0.0;
         config7 = `${parseInt(`${otherd}`)}`;
         loadingQ += 1;
      }
       let watchD: Array<any> = [String.fromCharCode(101,95,51,55,95,115,117,98,106,0), String.fromCharCode(117,112,108,111,97,100,95,55,95,52,54,0)];
         acceptedY += (config7 == String.fromCharCode(54,0) ? config7.length : watchD.length);
         interstitialz /= Math.max(3, 1 / (Math.max(7, parseInt(`${acceptedY}`))));
      if ((3.36 * otherd) < 1.55 || 3.5 < (otherd - 3.36)) {
         otherd *= parseFloat(`${1 ^ parseInt(`${interstitialz}`)}`);
      }
          let sentrya = 4.0;
          let statsK: Map<any, any> = new Map([[String.fromCharCode(104,95,56,54,95,115,116,101,112,112,101,100,0),745], [String.fromCharCode(102,116,118,109,108,97,115,116,110,111,100,101,95,97,95,54,48,0),232]]);
         watchD.push((String.fromCharCode(111,0) == config7 ? statsK.size : config7.length));
         sentrya -= parseFloat(`${2}`);
         statsK.set(`${sentrya}`, parseInt(`${sentrya}`) | parseInt(`${sentrya}`));
          let stringz = 4.0;
          let macauJ = String.fromCharCode(114,101,116,117,114,110,115,95,56,95,56,55,0);
          let gestureN: Array<any> = [String.fromCharCode(112,97,105,114,105,110,103,95,99,95,54,48,0), String.fromCharCode(110,95,49,56,95,111,112,101,114,97,116,105,110,103,0), String.fromCharCode(103,95,55,55,95,115,117,98,118,105,100,101,111,0)];
         otherd *= (parseFloat(`${config7 == String.fromCharCode(111,0) ? parseInt(`${acceptedY}`) : config7.length}`));
         stringz -= (macauJ == String.fromCharCode(73,0) ? macauJ.length : gestureN.length);
         gestureN.push(3);
         otherd += (parseFloat(`${String.fromCharCode(69,0) == config7 ? parseInt(`${otherd}`) : config7.length}`));
      while (!watchD.includes(otherd)) {
          let blackE = String.fromCharCode(108,104,115,95,120,95,57,53,0);
          let anner9 = String.fromCharCode(116,95,52,56,95,99,111,110,116,111,117,114,115,0);
          let whistle5 = String.fromCharCode(110,97,112,115,104,111,116,95,106,95,55,55,0);
         watchD = [parseInt(`${otherd}`) + config7.length];
         blackE += "3";
         anner9 = `${anner9.length}`;
         whistle5 += `${anner9.length / 1}`;
         break;
      }
      backwardv = acceptedY == 3.73;
      if (singaporez) {
         break;
      }
   } while ((backwardv || episodesj) && singaporez);

            sethistoryChat(prev => [histories[indexFound - 1]].concat(prev));
        }
    }, 500);

    const renderChatGroup = useCallback(({ item }: { item: IMLRenewCarousel }) => {
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

    const renderMessageItem = useCallback(({ item }: { item: NETempEmoji }) => {
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
                            : require("@static/images/actionSaveBackward.png")
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
                        : require("@static/images/actionSaveBackward.png")
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
       let notificationh = String.fromCharCode(105,95,51,49,95,115,111,110,105,99,0);
    let descz: Map<any, any> = new Map([[String.fromCharCode(112,114,101,97,109,98,108,101,95,121,95,57,51,0),331], [String.fromCharCode(115,112,104,101,114,105,99,97,108,95,98,95,50,0),659]]);
    let ajaxC = String.fromCharCode(116,95,50,95,116,104,101,109,101,100,0);
    let reducerA = 3.0;
    let bufferz = String.fromCharCode(112,117,98,108,105,99,95,117,95,56,55,0);
    let verticalI = String.fromCharCode(109,100,97,121,95,107,95,52,54,0);
    let selectF = String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,115,95,102,95,50,54,0);
    let acceptedC = 1.0;
    let halfp = 4.0;
    let context8: Array<any> = [436, 499, 996];
    let humidityF = 1;
    let source9 = String.fromCharCode(111,108,97,110,97,95,107,95,53,56,0);
    let privilegeL = 0;
    let mappingG = 2;
   if (4.100 < (1.47 * halfp) || 4.38 < (1.47 * halfp)) {
       let main_hr = true;
       let streamingr = 3;
       let targetD = String.fromCharCode(112,95,57,51,95,99,111,110,110,101,99,116,120,0);
          let hookE = String.fromCharCode(115,112,114,101,97,100,95,56,95,52,0);
          let matchg: Array<any> = [String.fromCharCode(99,117,114,114,101,110,116,108,121,95,50,95,55,57,0), String.fromCharCode(119,95,53,48,95,98,108,101,110,100,109,111,100,101,0), String.fromCharCode(105,100,115,117,98,116,121,112,101,95,111,95,54,55,0)];
          let small0 = 0.0;
         targetD += "2";
         hookE += `${matchg.length >> (Math.min(hookE.length, 3))}`;
         matchg = [matchg.length];
         small0 += matchg.length;
      if (1 < (targetD.length + 5)) {
         targetD = "3";
      }
      while (3 < streamingr) {
         main_hr = !targetD.startsWith(`${main_hr}`);
         break;
      }
         targetD = `${(2 + (main_hr ? 4 : 1))}`;
      while (main_hr || (streamingr - 3) >= 4) {
          let configureX: Array<any> = [134, 563];
          let updatesx = 4.0;
          let backwardp = String.fromCharCode(106,95,56,50,95,110,97,109,101,116,111,105,110,100,101,120,0);
          let settingsf = 3;
         main_hr = !backwardp.startsWith(`${main_hr}`);
         configureX = [configureX.length - settingsf];
         updatesx += parseFloat(`${parseInt(`${updatesx}`) - 2}`);
         backwardp = `${parseInt(`${updatesx}`) + 2}`;
         settingsf |= settingsf ^ parseInt(`${updatesx}`);
         break;
      }
      let macauB = 7377338 >= streamingr;
      do {
          let nterstitialU = String.fromCharCode(111,112,116,103,114,111,117,112,95,120,95,50,56,0);
          let linkA: Array<any> = [125, 819, 54];
         streamingr |= (targetD.length << (Math.min(4, Math.abs((main_hr ? 1 : 4)))));
         nterstitialU += `${(String.fromCharCode(51,0) == nterstitialU ? linkA.length : nterstitialU.length)}`;
         linkA = [1];
         if (macauB) {
            break;
         }
      } while ((4 <= (streamingr << (Math.min(Math.abs(2), 1))) || 2 <= (streamingr << (Math.min(targetD.length, 1)))) && macauB);
      while (!main_hr && 1 > (streamingr & 2)) {
          let successh = String.fromCharCode(97,100,100,111,112,95,107,95,49,0);
         streamingr += 1;
         successh = `${successh.length | successh.length}`;
         break;
      }
         streamingr *= targetD.length << (Math.min(Math.abs(1), 2));
      if ((1 ^ streamingr) >= 2 && 1 >= streamingr) {
          let moonm = String.fromCharCode(106,112,101,103,116,97,98,108,101,115,95,114,95,50,55,0);
         main_hr = streamingr < 35;
         moonm = `${moonm.length}`;
      }
      descz.set(`${halfp}`, descz.size & 2);
   }
      ajaxC = `${2 / (Math.max(7, parseInt(`${acceptedC}`)))}`;
       let frame_5S: Array<any> = [140, 290, 48];
       let robotob = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,100,95,119,95,56,51,0);
          let settingj: Array<any> = [821, 183];
          let configures = 3.0;
         robotob = `${parseInt(`${configures}`)}`;
         settingj = [settingj.length % (Math.max(settingj.length, 6))];
         configures *= parseFloat(`${settingj.length}`);
         robotob += `${robotob.length - 3}`;
         robotob += `${robotob.length}`;
      while (robotob.endsWith(`${frame_5S.length}`)) {
         robotob = `${1 | frame_5S.length}`;
         break;
      }
       let friendsO = String.fromCharCode(106,95,51,54,95,104,101,108,112,101,114,0);
       let appleC = String.fromCharCode(119,105,110,115,111,99,107,95,117,95,49,53,0);
      let tooltipst = 6921162 >= frame_5S.length;
      do {
         frame_5S = [friendsO.length];
         if (tooltipst) {
            break;
         }
      } while (((appleC.length / (Math.max(2, 3))) >= 5 && (appleC.length / (Math.max(2, 9))) >= 5) && tooltipst);
      halfp *= notificationh.length;
   if (4.11 <= (halfp / (Math.max(acceptedC, 5))) || 4.64 <= (halfp / 4.11)) {
      acceptedC += parseInt(`${halfp}`);
   }
   let xvodi = notificationh == String.fromCharCode(108,53,57,48,56,116,104,0);
   do {
      notificationh += `${selectF.length}`;
      if (xvodi) {
         break;
      }
   } while (xvodi && (notificationh.length > descz.size));

        if (comment.trim().length === 0 || !isCommentValid) return;

   while (1.75 > (2.28 - halfp)) {
       let roomV = String.fromCharCode(100,95,54,95,100,97,116,97,116,121,112,101,115,0);
          let favorite2 = String.fromCharCode(115,105,109,100,95,110,95,49,53,0);
          let albumv = false;
          let feedbackP: Map<any, any> = new Map([[String.fromCharCode(115,116,117,102,102,110,100,95,54,95,52,56,0),525], [String.fromCharCode(110,95,52,56,95,114,101,115,112,111,110,115,101,115,0),6], [String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,103,95,56,52,0),982]]);
         roomV += "3";
         favorite2 = `${3 * favorite2.length}`;
         albumv = (favorite2.length << (Math.min(3, Math.abs(feedbackP.size)))) > 14;
         feedbackP = new Map([[`${feedbackP.size}`, feedbackP.size / (Math.max(8, favorite2.length))]]);
      if (roomV != roomV) {
          let plus_ = 5;
          let streamingW = String.fromCharCode(108,95,49,50,95,118,105,109,97,103,101,108,111,97,100,101,114,0);
          let bufferv = String.fromCharCode(113,95,50,57,95,99,100,120,108,0);
          let weiboq = String.fromCharCode(109,100,116,97,95,52,95,52,51,0);
          let tailx: Array<any> = [659, 390];
         roomV = `${plus_ ^ 3}`;
         plus_ -= 2;
         streamingW += `${(String.fromCharCode(95,0) == weiboq ? tailx.length : weiboq.length)}`;
         bufferv = `${tailx.length}`;
      }
      if (roomV == String.fromCharCode(111,0) || 2 <= roomV.length) {
         roomV = `${2 % (Math.max(3, roomV.length))}`;
      }
      halfp -= parseInt(`${halfp}`);
      break;
   }
   while ((3.85 - acceptedC) == 1.16) {
      acceptedC -= selectF.length;
      break;
   }
      humidityF %= Math.max(1, humidityF % 3);
   let modeK = 6211723 <= selectF.length;
   do {
       let grayz = String.fromCharCode(117,95,53,54,95,100,110,120,104,100,0);
       let bodanN = 2.0;
      if ((bodanN - 4.78) == 2.21) {
         bodanN += parseFloat(`${parseInt(`${bodanN}`) & grayz.length}`);
      }
      while (parseFloat(`${grayz.length}`) < bodanN) {
         bodanN *= parseFloat(`${parseInt(`${bodanN}`)}`);
         break;
      }
          let text_ = 1.0;
          let n_locke = 2.0;
         bodanN -= parseFloat(`${parseInt(`${text_}`)}`);
         text_ /= Math.max(5, parseFloat(`${parseInt(`${n_locke}`)}`));
      let usernamea = bodanN <= 9158927.0;
      do {
         bodanN += parseFloat(`${parseInt(`${bodanN}`) + grayz.length}`);
         if (usernamea) {
            break;
         }
      } while ((!grayz.includes(`${bodanN}`)) && usernamea);
         bodanN /= Math.max(parseFloat(`${3 - grayz.length}`), 2);
         bodanN -= parseFloat(`${parseInt(`${bodanN}`) ^ 3}`);
      selectF += `${notificationh.length / 3}`;
      if (modeK) {
         break;
      }
   } while (modeK && (!selectF.endsWith(`${descz.size}`)));
   while (selectF.startsWith(`${context8.length}`)) {
      context8 = [notificationh.length];
      break;
   }

        appDispatch(sendChatMessage({
            message: comment,
            isPrivate: true,
        }));

      halfp -= bufferz.length;
      selectF = `${context8.length % (Math.max(1, ajaxC.length))}`;
   let membershipt = halfp <= 9545468.0;
   do {
       let megaphoner = 1.0;
       let black8 = true;
       let nterstitial8 = false;
         black8 = (!black8 ? nterstitial8 : !black8);
          let upgradeV = true;
          let crossg = String.fromCharCode(113,95,56,95,110,111,116,105,102,105,101,115,0);
          let philippinesj = true;
         black8 = 91.61 > megaphoner;
         upgradeV = !philippinesj;
         crossg += `${((upgradeV ? 1 : 4) | 1)}`;
       let eactP = 0.0;
         black8 = 58.77 <= eactP;
          let unticko: Array<any> = [494, 547, 585];
          let products = String.fromCharCode(112,97,121,109,97,115,116,101,114,95,106,95,56,52,0);
         black8 = unticko.length >= 60;
         unticko = [products.length / 3];
         products += `${products.length * 2}`;
         nterstitial8 = (!nterstitial8 ? black8 : nterstitial8);
      if (!nterstitial8) {
          let detailsf = 2.0;
          let memberU = 5.0;
          let weiboJ = 3;
          let pagination1 = String.fromCharCode(102,101,116,99,104,101,115,95,108,95,53,57,0);
          let disconnectedm = 3.0;
         nterstitial8 = 31.52 < (memberU * detailsf);
         detailsf *= parseFloat(`${parseInt(`${disconnectedm}`)}`);
         memberU += parseFloat(`${pagination1.length}`);
         weiboJ /= Math.max(4, 2);
         pagination1 = `${(String.fromCharCode(115,0) == pagination1 ? pagination1.length : parseInt(`${disconnectedm}`))}`;
      }
         nterstitial8 = black8;
          let themep = 5.0;
          let predictionM = false;
          let tickedy = 0.0;
         black8 = 28.41 <= (tickedy * megaphoner);
         themep -= ((predictionM ? 3 : 4) + parseInt(`${themep}`));
         predictionM = 21.80 < themep && !predictionM;
         tickedy -= ((predictionM ? 4 : 3) << (Math.min(Math.abs(parseInt(`${themep}`)), 5)));
      halfp += 2;
      if (membershipt) {
         break;
      }
   } while (membershipt && (4.90 >= (halfp / (Math.max(selectF.length, 8)))));
   if ((5 / (Math.max(3, humidityF))) >= 1 || (3.78 - acceptedC) >= 5.12) {
       let launchJ = String.fromCharCode(118,95,56,55,95,100,101,99,108,97,114,101,100,0);
       let indexb = String.fromCharCode(109,101,116,97,100,97,116,97,115,95,111,95,55,50,0);
       let settingsR = String.fromCharCode(109,108,111,99,107,95,116,95,57,48,0);
       let grayQ = String.fromCharCode(112,114,111,103,114,101,115,115,105,118,101,95,106,95,52,50,0);
         launchJ = "2";
          let yingm = String.fromCharCode(116,95,51,52,95,98,117,98,98,108,101,115,0);
         settingsR += `${2 & indexb.length}`;
         yingm = `${yingm.length}`;
      for (let y = 0; y < 1; y++) {
         indexb = `${launchJ.length}`;
      }
      let privacy9 = settingsR.length >= 7114585;
      do {
         settingsR = `${indexb.length ^ grayQ.length}`;
         if (privacy9) {
            break;
         }
      } while (privacy9 && (3 >= indexb.length));
      if (indexb.includes(launchJ)) {
         indexb += `${indexb.length}`;
      }
      let logoutL = 7872614 <= grayQ.length;
      do {
         grayQ += "1";
         if (logoutL) {
            break;
         }
      } while (logoutL && (grayQ.startsWith(settingsR)));
         launchJ = `${2 >> (Math.min(2, settingsR.length))}`;
      let bingT = grayQ == String.fromCharCode(103,104,57,109,104,101,114,105,110,0);
      do {
          let views_ = String.fromCharCode(97,95,52,55,95,99,108,103,101,116,0);
         grayQ = `${(String.fromCharCode(88,0) == grayQ ? grayQ.length : launchJ.length)}`;
         views_ += `${views_.length}`;
         if (bingT) {
            break;
         }
      } while ((!grayQ.includes(`${settingsR.length}`)) && bingT);
       let minimizeK: Map<any, any> = new Map([[String.fromCharCode(117,115,101,114,99,116,120,95,116,95,52,0),147], [String.fromCharCode(112,114,101,101,110,99,111,100,101,95,54,95,53,51,0),529]]);
         launchJ = `${3 - minimizeK.size}`;
      if (4 <= (minimizeK.size + indexb.length)) {
          let infoR = String.fromCharCode(99,111,110,116,114,105,98,117,116,105,110,103,95,50,95,57,57,0);
          let updatesE = 5;
          let benefitD = String.fromCharCode(99,95,56,95,100,101,110,111,109,0);
          let crossI = String.fromCharCode(112,99,109,98,95,56,95,50,53,0);
         minimizeK = new Map([[benefitD, updatesE / (Math.max(3, 1))]]);
         infoR = `${infoR.length & crossI.length}`;
         updatesE ^= infoR.length >> (Math.min(Math.abs(3), 2));
         benefitD = `${crossI.length}`;
      }
      for (let d = 0; d < 2; d++) {
         launchJ += `${launchJ.length ^ grayQ.length}`;
      }
      humidityF += bufferz.length;
   }
   for (let r = 0; r < 2; r++) {
      notificationh += "1";
   }

        setComment('');

   if (4.99 == (reducerA / (Math.max(selectF.length, 10))) && (4.99 / (Math.max(4, reducerA))) == 2.81) {
       let temperatureJ = String.fromCharCode(102,116,121,112,95,114,95,50,53,0);
          let d_center6 = 0.0;
          let previewt = String.fromCharCode(103,95,52,95,112,110,105,101,108,115,0);
          let updatesr = false;
         temperatureJ = `${(temperatureJ.length & (updatesr ? 4 : 5))}`;
         d_center6 -= parseFloat(`${2}`);
         previewt = `${(String.fromCharCode(98,0) == previewt ? parseInt(`${d_center6}`) : previewt.length)}`;
         updatesr = 22 < previewt.length;
         temperatureJ += "2";
         temperatureJ += `${temperatureJ.length}`;
      selectF += `${parseInt(`${reducerA}`)}`;
   }
   if (ajaxC == String.fromCharCode(79,0)) {
      bufferz = "1";
   }
   if ((ajaxC.length + parseInt(`${acceptedC}`)) <= 5) {
      ajaxC = `${1 ^ parseInt(`${reducerA}`)}`;
   }
   for (let r = 0; r < 2; r++) {
       let activeG = String.fromCharCode(97,118,111,112,116,105,111,110,115,95,54,95,51,52,0);
      for (let v = 0; v < 1; v++) {
         activeG += `${2 / (Math.max(7, activeG.length))}`;
      }
          let submito = String.fromCharCode(99,111,108,111,114,115,95,53,95,51,57,0);
         activeG += "2";
         submito += `${1 + submito.length}`;
          let animations: Array<any> = [0, 160, 487];
          let footballi: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,99,108,101,95,122,95,57,50,0),796], [String.fromCharCode(101,95,57,52,95,107,101,121,108,101,110,0),527], [String.fromCharCode(97,112,99,109,95,52,95,49,48,0),300]]);
          let updatess = String.fromCharCode(111,95,51,57,95,113,117,105,110,116,0);
         activeG += `${updatess.length + activeG.length}`;
         animations = [animations.length * 2];
         footballi.set(`${animations.length}`, animations.length);
         updatess += `${3 + animations.length}`;
      bufferz += "1";
   }
   let successD = bufferz == String.fromCharCode(95,107,103,49,0);
   do {
      bufferz += `${2 & descz.size}`;
      if (successD) {
         break;
      }
   } while (successD && (bufferz.length == notificationh.length));
        Keyboard.dismiss();
    }, [isCommentValid, comment]);

    const onUserScroll = () => {
       let unewsh = 2.0;
    let moduleE = true;
    let controlsl = String.fromCharCode(98,95,49,48,95,103,108,111,98,0);
    let sendS = 2;
    let bannerq = String.fromCharCode(99,95,51,57,95,116,110,112,117,116,0);
    let successQ = String.fromCharCode(115,95,50,95,118,109,100,118,105,100,101,111,0);
    let optionsv = 2.0;
    let loading4 = 5.0;
    let megaphoneo = 4;
    let resultj = 1.0;
    let closep = 2.0;
    let nalytics4 = true;
    let sharew = 3;
    let targetT: Array<any> = [466, 716];
    let grey6 = 2.0;
    let nextX = 2.0;
    let pingH = String.fromCharCode(102,114,101,113,95,48,95,52,53,0);
    let routerf: Map<any, any> = new Map([[String.fromCharCode(97,95,51,54,95,121,117,118,121,97,0),610], [String.fromCharCode(97,112,112,114,111,118,101,95,49,95,56,54,0),993]]);
   if ((closep / (Math.max(3.43, 10))) < 3.26 && 3.43 < (closep * unewsh)) {
      closep += parseFloat(`${sendS}`);
   }
   if ((1 / (Math.max(5, controlsl.length))) <= 4 && 2.28 <= (3.32 + resultj)) {
       let countdownr: Array<any> = [124, 326, 148];
          let eighteenU = 2.0;
          let optionsN = String.fromCharCode(105,115,100,105,97,99,114,105,116,105,99,95,103,95,51,54,0);
         countdownr = [parseInt(`${eighteenU}`) ^ 3];
         eighteenU *= (parseFloat(`${String.fromCharCode(89,0) == optionsN ? optionsN.length : optionsN.length}`));
          let smallQ = 5.0;
          let away3 = 0.0;
         countdownr.push(2);
         smallQ += parseInt(`${smallQ}`) - 3;
         away3 -= parseFloat(`${parseInt(`${smallQ}`)}`);
         countdownr = [3 | countdownr.length];
      resultj *= 3;
   }
   for (let s = 0; s < 3; s++) {
       let loginp = String.fromCharCode(105,95,49,56,95,99,111,110,102,108,105,99,116,0);
       let detailsu = String.fromCharCode(114,95,54,57,95,114,101,115,117,109,101,0);
         detailsu = "2";
      while (3 <= loginp.length) {
         detailsu = `${loginp.length + detailsu.length}`;
         break;
      }
      while (detailsu != loginp) {
         loginp += "3";
         break;
      }
       let analyticK = String.fromCharCode(112,111,115,101,95,112,95,54,48,0);
       let shrinkG = String.fromCharCode(108,95,51,95,119,97,108,108,0);
         analyticK = `${detailsu.length << (Math.min(analyticK.length, 2))}`;
       let shoot4 = true;
      bannerq = `${successQ.length}`;
   }
   while ((resultj - 1.28) > 3.68) {
       let groupn: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,105,115,111,110,95,102,95,50,53,0),String.fromCharCode(106,95,52,57,95,100,105,114,101,99,116,105,111,110,97,108,0)], [String.fromCharCode(102,117,108,102,105,108,108,101,100,95,115,95,55,0),String.fromCharCode(109,105,115,117,115,101,95,98,95,51,49,0)], [String.fromCharCode(116,101,114,109,105,110,97,116,101,95,116,95,52,56,0),String.fromCharCode(110,97,109,101,100,95,103,95,51,54,0)]]);
       let memberC = 4.0;
       let catagoryH = 5.0;
       let ajaxh = true;
      if ((catagoryH + 4.73) < 5.34 || catagoryH < 4.73) {
         catagoryH *= parseInt(`${catagoryH}`);
      }
          let register_zC = 3.0;
          let goall = 0.0;
         memberC += 1;
         register_zC += parseInt(`${goall}`) % 2;
         goall /= Math.max(2, parseInt(`${goall}`) ^ 2);
          let chartl: Map<any, any> = new Map([[String.fromCharCode(110,101,97,114,108,121,95,56,95,55,55,0),String.fromCharCode(113,95,52,57,95,112,101,114,102,111,114,109,101,114,0)], [String.fromCharCode(105,110,116,101,114,115,101,99,116,95,98,95,55,51,0),String.fromCharCode(114,101,99,101,105,118,101,95,114,95,56,50,0)]]);
         catagoryH += parseInt(`${memberC}`) + 1;
         chartl = new Map([[`${chartl.size}`, chartl.size]]);
      if (catagoryH < 1.77) {
          let tailm: Map<any, any> = new Map([[String.fromCharCode(103,95,57,48,95,110,116,101,114,110,97,108,0),String.fromCharCode(99,95,53,52,95,102,105,114,101,0)], [String.fromCharCode(112,101,110,97,108,116,121,95,98,95,55,51,0),String.fromCharCode(115,95,56,54,95,114,101,106,101,99,116,0)]]);
         catagoryH /= Math.max(((ajaxh ? 2 : 2) / (Math.max(parseInt(`${catagoryH}`), 9))), 2);
         tailm.set(`${tailm.size}`, tailm.size + 1);
      }
         memberC /= Math.max(parseInt(`${memberC}`) ^ 2, 2);
      let p_title9 = 7387971.0 <= catagoryH;
      do {
         catagoryH *= 1 / (Math.max(2, parseInt(`${catagoryH}`)));
         if (p_title9) {
            break;
         }
      } while (((catagoryH / (Math.max(1, groupn.size))) >= 5.31 && 5.31 >= (catagoryH / (Math.max(groupn.size, 7)))) && p_title9);
      let login7 = 7641490.0 <= memberC;
      do {
         memberC *= groupn.size << (Math.min(Math.abs(3), 4));
         if (login7) {
            break;
         }
      } while (((catagoryH / (Math.max(1, memberC))) == 5.5) && login7);
      let grayh = catagoryH <= 5513686.0;
      do {
         catagoryH -= 3 - parseInt(`${memberC}`);
         if (grayh) {
            break;
         }
      } while ((catagoryH < 1.18) && grayh);
         ajaxh = null == groupn.get(`${memberC}`);
      if (!ajaxh) {
         ajaxh = groupn.size >= 56;
      }
      if ((catagoryH + 1.57) > 1.98) {
          let bottomG: Array<any> = [String.fromCharCode(99,111,109,112,111,117,110,100,95,49,95,52,48,0), String.fromCharCode(109,102,104,100,95,55,95,49,51,0), String.fromCharCode(117,95,52,57,95,102,97,115,116,102,105,114,115,116,112,97,115,115,0)];
          let tumbnailY = 3.0;
          let brightnessj: Map<any, any> = new Map([[String.fromCharCode(108,95,52,55,95,121,117,118,103,98,114,112,0),true ], [String.fromCharCode(118,95,53,55,95,99,111,108,111,114,115,112,97,99,101,100,115,112,0),true ], [String.fromCharCode(110,100,101,120,95,48,95,54,50,0),true ]]);
          let reducerZ = String.fromCharCode(108,95,50,49,95,112,114,111,112,97,103,97,116,105,111,110,0);
         catagoryH /= Math.max(parseInt(`${memberC}`), 5);
         bottomG = [2 * parseInt(`${tumbnailY}`)];
         tumbnailY /= Math.max(3, brightnessj.size);
         brightnessj.set(`${tumbnailY}`, brightnessj.size);
         reducerZ = `${1 + brightnessj.size}`;
      }
         ajaxh = 36.51 <= (memberC + catagoryH);
      resultj *= parseInt(`${resultj}`) | 1;
      break;
   }
   for (let u = 0; u < 1; u++) {
      controlsl += `${3 & parseInt(`${resultj}`)}`;
   }
      optionsv *= (megaphoneo >> (Math.min(5, Math.abs((nalytics4 ? 5 : 5)))));
   let tickedw = unewsh <= 8046753.0;
   do {
      unewsh -= 1 - sharew;
      if (tickedw) {
         break;
      }
   } while ((!bannerq.includes(`${unewsh}`)) && tickedw);
      loading4 *= parseFloat(`${sharew}`);
   for (let s = 0; s < 2; s++) {
      controlsl = `${controlsl.length >> (Math.min(1, Math.abs(sharew)))}`;
   }
   for (let v = 0; v < 3; v++) {
       let shirtS = 5;
       let whatsappZ: Array<any> = [String.fromCharCode(109,105,100,101,113,117,97,108,105,122,101,114,95,99,95,50,53,0), String.fromCharCode(106,95,50,55,95,102,102,116,112,97,99,107,0)];
      while (3 < (4 << (Math.min(5, whatsappZ.length)))) {
         shirtS &= 3;
         break;
      }
          let moreI = 4;
         shirtS /= Math.max(1, whatsappZ.length);
         moreI += moreI - 2;
      let adultB = 8811689 <= whatsappZ.length;
      do {
         whatsappZ.push(whatsappZ.length);
         if (adultB) {
            break;
         }
      } while ((5 < (whatsappZ.length | 3)) && adultB);
      for (let x = 0; x < 2; x++) {
         whatsappZ.push(2);
      }
      if ((shirtS % 3) == 3 || (shirtS % (Math.max(7, whatsappZ.length))) == 3) {
         shirtS <<= Math.min(Math.abs(shirtS >> (Math.min(whatsappZ.length, 1))), 1);
      }
          let common9 = 5.0;
          let save0: Array<any> = [876, 530, 592];
         whatsappZ.push(shirtS + 1);
         common9 += save0.length;
         save0.push(parseInt(`${common9}`) | save0.length);
      bannerq += `${whatsappZ.length % 1}`;
   }
   let bottomd = 9423378.0 <= unewsh;
   do {
      unewsh -= parseInt(`${optionsv}`);
      if (bottomd) {
         break;
      }
   } while (bottomd && ((unewsh / (Math.max(3.80, 10))) > 5.20 && moduleE));
   if (2.4 > (2.41 / (Math.max(3, loading4)))) {
      nalytics4 = !nalytics4;
   }
       let time_ksx: Array<any> = [772, 254, 935];
          let settingsV = String.fromCharCode(117,95,54,56,95,98,117,115,0);
         time_ksx = [time_ksx.length];
         settingsV += `${(String.fromCharCode(67,0) == settingsV ? settingsV.length : settingsV.length)}`;
         time_ksx = [2 % (Math.max(4, time_ksx.length))];
      for (let y = 0; y < 2; y++) {
         time_ksx = [time_ksx.length];
      }
      optionsv -= sendS % 3;
   for (let d = 0; d < 1; d++) {
      closep += parseFloat(`${sharew}`);
   }
   for (let a = 0; a < 1; a++) {
      sharew ^= 3;
   }
       let y_centerD = String.fromCharCode(100,111,99,108,105,115,116,115,95,111,95,49,57,0);
       let progressR = 3.0;
       let gpayt: Array<any> = [482, 425];
          let areax = String.fromCharCode(109,98,104,115,95,108,95,49,52,0);
          let analyticg = String.fromCharCode(115,99,97,108,97,98,105,108,105,116,121,95,54,95,51,56,0);
          let handler0 = 3.0;
         y_centerD += `${gpayt.length}`;
         areax = `${areax.length >> (Math.min(analyticg.length, 3))}`;
         analyticg = `${analyticg.length | 2}`;
         handler0 += parseFloat(`${2}`);
         y_centerD = "2";
         progressR /= Math.max(2, parseInt(`${progressR}`));
         y_centerD = "2";
          let downM = String.fromCharCode(98,95,51,53,95,108,108,118,105,100,100,115,112,101,110,99,0);
          let corner5 = String.fromCharCode(98,111,116,104,95,51,95,54,52,0);
         progressR -= 3;
         downM = `${corner5.length / (Math.max(5, downM.length))}`;
         corner5 = `${(downM == String.fromCharCode(79,0) ? corner5.length : downM.length)}`;
          let emptyr = 2.0;
          let megaphonei = String.fromCharCode(117,95,51,48,95,112,111,115,116,0);
         y_centerD = `${3 / (Math.max(parseInt(`${progressR}`), 1))}`;
         emptyr /= Math.max(3, parseInt(`${emptyr}`) - megaphonei.length);
         megaphonei += "2";
         progressR -= 1 | gpayt.length;
         progressR *= parseInt(`${progressR}`) / 3;
      if (!y_centerD.startsWith(`${gpayt.length}`)) {
          let reneww = 3.0;
          let gemfiley = 0.0;
          let downloadingA = 0.0;
          let adult0 = false;
         y_centerD += "3";
         reneww += 3;
         gemfiley += parseFloat(`${parseInt(`${reneww}`) + parseInt(`${gemfiley}`)}`);
         downloadingA *= parseFloat(`${parseInt(`${gemfiley}`)}`);
         adult0 = 38.65 == downloadingA || gemfiley == 38.65;
      }
      closep /= Math.max(4, parseFloat(`${1}`));
   let casting_ = 8570763.0 >= nextX;
   do {
       let constantsA = 5;
       let networkX = 1.0;
       let reducerx: Array<any> = [159, 401];
       let unreadT = 1.0;
       let frame_aS: Array<any> = [905, 193, 698];
       let readb: Array<any> = [839, 219, 958];
      for (let h = 0; h < 2; h++) {
         frame_aS = [frame_aS.length + 3];
      }
      while (!reducerx.includes(networkX)) {
          let membershiph = 0.0;
          let thailandR = 0;
          let connectionk = 0.0;
         reducerx = [3];
         membershiph -= parseFloat(`${2}`);
         thailandR ^= 3;
         connectionk += 1;
         break;
      }
      let context4 = 4991512 >= constantsA;
      do {
         constantsA += parseInt(`${networkX}`) / 2;
         if (context4) {
            break;
         }
      } while (context4 && (3.50 <= (networkX + constantsA)));
      for (let y = 0; y < 3; y++) {
          let friendsB = true;
          let tooltipsB = 0;
         frame_aS = [readb.length - reducerx.length];
         friendsB = 22 <= tooltipsB && !friendsB;
         tooltipsB /= Math.max(3, 1);
      }
      while (4.24 <= (unreadT - 1.3)) {
         constantsA <<= Math.min(Math.abs(parseInt(`${networkX}`)), 4);
         break;
      }
          let weibo4 = true;
          let relatedZ: Array<any> = [998, 682, 249];
         reducerx.push(parseInt(`${networkX}`) - 2);
         weibo4 = relatedZ.includes(weibo4);
         relatedZ.push(relatedZ.length);
         unreadT *= 1;
         constantsA <<= Math.min(4, Math.abs(1));
      while (2 <= (constantsA & 3)) {
         constantsA |= 1 ^ constantsA;
         break;
      }
      while (2 <= (constantsA - frame_aS.length) || (frame_aS.length - 2) <= 5) {
         frame_aS = [parseInt(`${networkX}`)];
         break;
      }
      while ((1.7 / (Math.max(1, unreadT))) == 4.88 || 1.7 == (unreadT / (Math.max(3, networkX)))) {
          let profile3 = String.fromCharCode(102,105,120,116,117,114,101,95,115,95,52,51,0);
          let splashw: Array<any> = [String.fromCharCode(110,95,55,49,95,116,116,97,100,115,112,0), String.fromCharCode(105,116,101,109,115,95,107,95,57,52,0)];
          let umengl = 4.0;
         unreadT += profile3.length - 2;
         profile3 += `${splashw.length}`;
         splashw = [parseInt(`${umengl}`)];
         umengl += parseFloat(`${1}`);
         break;
      }
      nextX *= parseFloat(`${parseInt(`${closep}`)}`);
      if (casting_) {
         break;
      }
   } while (casting_ && ((5 >> (Math.min(5, targetT.length))) <= 4));
   while ((loading4 / (Math.max(5.25, 6))) < 5.95 || 5.25 < loading4) {
       let entryZ = 2;
       let shirta = 4.0;
       let nterstitial5: Map<any, any> = new Map([[String.fromCharCode(108,95,49,54,95,122,111,111,109,101,100,0),522], [String.fromCharCode(121,111,103,97,95,116,95,50,50,0),205]]);
       let notificationF = String.fromCharCode(99,118,105,100,95,55,95,55,52,0);
          let container6 = String.fromCharCode(104,95,52,48,95,100,101,115,99,114,105,112,116,111,114,0);
         nterstitial5.set(`${shirta}`, nterstitial5.size * 2);
         container6 += `${container6.length - 2}`;
      while ((3 >> (Math.min(3, Math.abs(nterstitial5.size)))) < 3) {
          let r_views = 3.0;
          let untickH: Map<any, any> = new Map([[String.fromCharCode(112,111,108,113,97,95,116,95,57,57,0),444], [String.fromCharCode(97,95,55,53,95,112,114,101,118,105,101,119,115,0),292], [String.fromCharCode(117,110,115,99,97,108,101,100,95,121,95,52,48,0),735]]);
          let slideru: Array<any> = [String.fromCharCode(116,95,57,56,95,105,110,105,116,105,97,108,105,122,101,0), String.fromCharCode(107,95,57,52,95,114,101,99,117,114,115,105,118,101,108,121,0), String.fromCharCode(114,101,115,116,111,114,101,95,110,95,52,48,0)];
          let faviconN = String.fromCharCode(109,101,109,111,114,121,98,117,102,102,101,114,95,54,95,54,55,0);
          let mathW: Map<any, any> = new Map([[String.fromCharCode(99,95,53,55,95,115,116,114,105,110,103,98,117,102,102,101,114,0),756], [String.fromCharCode(120,95,50,55,95,118,105,101,119,115,0),910], [String.fromCharCode(101,95,54,55,95,117,105,100,115,0),833]]);
         notificationF = `${mathW.size * 1}`;
         r_views -= parseInt(`${r_views}`);
         untickH = new Map([[`${untickH.size}`, 3 ^ slideru.length]]);
         slideru = [3];
         faviconN += `${parseInt(`${r_views}`) & 1}`;
         mathW.set(`${r_views}`, slideru.length << (Math.min(Math.abs(3), 5)));
         break;
      }
       let resendM = 4.0;
       let bannern = 3.0;
      if (!Array.from(nterstitial5.keys()).includes(`${bannern}`)) {
          let configureL: Array<any> = [578, 395, 338];
          let yellowI = 1.0;
          let themeQ = 3.0;
         bannern /= Math.max(configureL.length, 2);
         configureL = [2 >> (Math.min(Math.abs(parseInt(`${themeQ}`)), 5))];
         yellowI -= parseFloat(`${3}`);
         themeQ /= Math.max(2, parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${yellowI}`)), 3))}`));
      }
         bannern /= Math.max(nterstitial5.size * 3, 5);
          let z_viewR = true;
          let clubS = String.fromCharCode(112,95,49,48,95,110,111,116,105,102,121,105,110,103,0);
         shirta *= parseFloat(`${parseInt(`${shirta}`) - clubS.length}`);
         z_viewR = !z_viewR;
         clubS = `${(2 << (Math.min(Math.abs((z_viewR ? 3 : 2)), 5)))}`;
      let rewind6 = 7859539.0 >= bannern;
      do {
         bannern -= 3;
         if (rewind6) {
            break;
         }
      } while ((2 <= (2 ^ notificationF.length) || (2 << (Math.min(2, notificationF.length))) <= 1) && rewind6);
         bannern /= Math.max(entryZ % 1, 3);
          let championJ = 0;
          let tailG = 1;
          let frame_adM = true;
         notificationF += "2";
         championJ -= tailG * 2;
         tailG &= ((frame_adM ? 2 : 4) << (Math.min(Math.abs(championJ), 5)));
         frame_adM = championJ >= 16;
      if (1 == (parseInt(`${shirta}`) - entryZ) || (parseInt(`${shirta}`) - entryZ) == 1) {
          let malaysiat = 2.0;
          let smallr = String.fromCharCode(100,101,98,117,103,95,53,95,51,57,0);
         entryZ &= 3 + nterstitial5.size;
         malaysiat += smallr.length;
         smallr += `${smallr.length}`;
      }
      while (2.65 >= (resendM + 1)) {
         bannern *= parseInt(`${shirta}`) ^ 2;
         break;
      }
       let zhuboZ = 4.0;
      loading4 += parseFloat(`${1}`);
      break;
   }
      successQ += `${controlsl.length}`;
   for (let m = 0; m < 2; m++) {
      successQ += "1";
   }
   let matchs = sendS <= 7576463;
   do {
      sendS <<= Math.min(Math.abs(parseInt(`${nextX}`) ^ parseInt(`${loading4}`)), 5);
      if (matchs) {
         break;
      }
   } while (((3 + megaphoneo) <= 3) && matchs);
   for (let o = 0; o < 1; o++) {
      grey6 += parseFloat(`${3}`);
   }
      grey6 *= parseFloat(`${sharew - 1}`);
   while (!moduleE) {
       let xvodR = true;
         xvodR = (xvodR ? xvodR : xvodR);
      if (xvodR) {
          let bufferV = String.fromCharCode(113,95,55,50,95,102,114,97,109,101,115,101,116,116,101,114,0);
          let statisticsR: Array<any> = [45, 279, 302];
         xvodR = statisticsR.length == bufferV.length;
      }
          let hongkongA = 1;
         xvodR = !xvodR;
         hongkongA <<= Math.min(Math.abs(hongkongA), 5);
      targetT.push(parseInt(`${loading4}`) * megaphoneo);
      break;
   }
       let minivodI: Array<any> = [493, 434];
      for (let g = 0; g < 1; g++) {
         minivodI = [minivodI.length ^ minivodI.length];
      }
      while (4 > minivodI.length) {
         minivodI = [minivodI.length];
         break;
      }
          let plusC: Array<any> = [300, 724];
          let helpery = 2;
         minivodI = [helpery];
         plusC.push(plusC.length / (Math.max(plusC.length, 4)));
         helpery /= Math.max(5, plusC.length / (Math.max(3, 5)));
      targetT.push(((nalytics4 ? 3 : 5) - sendS));
      closep += (parseFloat(`${(nalytics4 ? 5 : 1)}`));
      sharew %= Math.max(2, 4);

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
       let orangek = String.fromCharCode(111,95,52,54,95,112,101,114,109,105,116,116,101,100,0);
    let options3 = String.fromCharCode(101,95,56,50,95,115,104,111,114,116,101,115,116,0);
    let appsj: Array<any> = [858, 18, 484];
    let usernamev = String.fromCharCode(113,95,54,57,95,119,111,114,100,115,0);
    let leftx = true;
    let filteru = String.fromCharCode(98,97,116,99,104,101,115,95,110,95,51,54,0);
    let constantsV = String.fromCharCode(114,97,112,105,100,95,109,95,53,52,0);
    let typesL = 1.0;
    let reportB = String.fromCharCode(102,95,54,53,95,116,114,97,99,101,0);
    let headerf: Array<any> = [273, 935];
    let connectionF = 5.0;
    let groupd = false;
    let ewardede = 5.0;
    let actions2 = String.fromCharCode(101,95,49,54,95,97,114,101,97,0);
   if (4 > constantsV.length || options3 == String.fromCharCode(112,0)) {
       let langP = 5;
       let thailandQ = String.fromCharCode(121,95,54,55,95,114,101,108,101,97,115,101,0);
       let edit4: Array<any> = [769, 59, 349];
         langP -= langP - edit4.length;
      let prediction2 = edit4.length >= 8080251;
      do {
         edit4.push(langP ^ 2);
         if (prediction2) {
            break;
         }
      } while ((!thailandQ.includes(`${edit4.length}`)) && prediction2);
         edit4 = [thailandQ.length - 2];
      for (let d = 0; d < 2; d++) {
         thailandQ = `${thailandQ.length}`;
      }
         langP &= 3;
       let handlerw = 2.0;
         langP += parseInt(`${handlerw}`);
         handlerw *= langP ^ 2;
      while (1 == (parseInt(`${handlerw}`) - edit4.length) || 2.25 == (1.81 - handlerw)) {
         edit4.push(1 << (Math.min(Math.abs(parseInt(`${handlerw}`)), 2)));
         break;
      }
      options3 = `${reportB.length & thailandQ.length}`;
   }
      typesL /= Math.max(5, 1);
       let main_xA = String.fromCharCode(112,95,51,50,95,102,114,97,109,101,0);
       let filedC = 5.0;
       let shareL = 2.0;
      if ((shareL * filedC) > 5.47 && 2.2 > (5.47 * shareL)) {
          let p_titleG = String.fromCharCode(116,101,109,112,95,57,95,54,0);
          let pressureU = String.fromCharCode(122,95,49,49,95,116,105,108,101,100,0);
          let membershipU = String.fromCharCode(101,95,51,95,97,115,105,110,107,0);
         filedC *= parseFloat(`${p_titleG.length}`);
         p_titleG += `${(membershipU == String.fromCharCode(76,0) ? membershipU.length : pressureU.length)}`;
         pressureU += `${pressureU.length % (Math.max(membershipU.length, 4))}`;
      }
         shareL *= parseFloat(`${main_xA.length}`);
      while (!main_xA.startsWith(`${filedC}`)) {
         filedC /= Math.max(4, parseFloat(`${parseInt(`${shareL}`) - 1}`));
         break;
      }
         main_xA = `${(String.fromCharCode(102,0) == main_xA ? main_xA.length : parseInt(`${filedC}`))}`;
      if (4.45 < (shareL / (Math.max(filedC, 3)))) {
         filedC += parseFloat(`${3 * main_xA.length}`);
      }
      while (2 > (parseInt(`${shareL}`) - 5) && (main_xA.length - parseInt(`${shareL}`)) > 5) {
         main_xA = `${2 | parseInt(`${shareL}`)}`;
         break;
      }
         main_xA = `${3 | parseInt(`${filedC}`)}`;
      let sourceI = shareL >= 9593473.0;
      do {
          let about0: Map<any, any> = new Map([[String.fromCharCode(110,101,105,103,104,98,111,117,114,115,95,100,95,52,52,0),String.fromCharCode(118,95,55,55,95,104,113,100,115,112,0)], [String.fromCharCode(102,111,114,109,97,116,117,95,50,95,51,57,0),String.fromCharCode(111,112,101,110,95,119,95,50,52,0)]]);
          let inviteO = 1.0;
          let modelA = String.fromCharCode(118,97,108,105,100,97,116,105,111,110,115,95,52,95,50,50,0);
         shareL /= Math.max((parseFloat(`${String.fromCharCode(53,0) == main_xA ? about0.size : main_xA.length}`)), 2);
         about0.set(modelA, 3);
         inviteO += parseInt(`${inviteO}`) | 1;
         modelA += `${modelA.length}`;
         if (sourceI) {
            break;
         }
      } while ((5.32 >= (filedC - 2.12) || 4.20 >= (shareL + 2.12)) && sourceI);
      if (5 >= (main_xA.length / (Math.max(9, parseInt(`${filedC}`))))) {
         main_xA += `${parseInt(`${shareL}`)}`;
      }
      filteru += `${((groupd ? 2 : 4) * 3)}`;
   if (5 > constantsV.length || !leftx) {
      leftx = (usernamev.length ^ options3.length) > 56;
   }
   if (4 == appsj.length) {
      leftx = orangek.length == 53;
   }
      connectionF -= parseInt(`${typesL}`) % (Math.max(options3.length, 6));
   if (typesL == 2.9) {
      leftx = headerf.includes(connectionF);
   }
      usernamev = `${filteru.length >> (Math.min(Math.abs(3), 4))}`;
      reportB += `${(String.fromCharCode(48,0) == filteru ? filteru.length : appsj.length)}`;
   while (!orangek.startsWith(`${leftx}`)) {
       let usernameY = 0.0;
       let storey = String.fromCharCode(102,114,97,103,95,120,95,57,49,0);
      while ((parseInt(`${usernameY}`) - storey.length) > 3) {
          let weibom = 2.0;
          let untickq = String.fromCharCode(98,95,51,52,95,108,105,98,111,112,101,110,104,0);
          let philippinesq = String.fromCharCode(115,95,50,48,95,98,97,114,114,101,116,116,0);
          let with_f7s: Array<any> = [915, 538];
         storey = `${(String.fromCharCode(79,0) == philippinesq ? philippinesq.length : storey.length)}`;
         weibom += untickq.length | with_f7s.length;
         untickq = `${2 % (Math.max(parseInt(`${weibom}`), 10))}`;
         with_f7s.push(3);
         break;
      }
         storey += `${2 * parseInt(`${usernameY}`)}`;
         usernameY += storey.length + 3;
          let rewindG = 4.0;
         storey += `${(storey == String.fromCharCode(85,0) ? parseInt(`${usernameY}`) : storey.length)}`;
         rewindG /= Math.max(parseFloat(`${parseInt(`${rewindG}`) + 2}`), 4);
          let vietnamN = String.fromCharCode(100,117,112,115,95,100,95,50,0);
          let internetw: Array<any> = [663, 546, 671];
          let becomew: Array<any> = [844, 771];
         storey = `${parseInt(`${usernameY}`)}`;
         vietnamN = `${vietnamN.length ^ internetw.length}`;
         internetw = [internetw.length];
         becomew = [1];
       let i_imageI = 5.0;
       let play_ = 3.0;
      leftx = 63.35 > usernameY || options3.length > 41;
      break;
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
       let homeQ = String.fromCharCode(122,95,57,50,95,105,100,99,116,120,100,99,0);
    let sheett = String.fromCharCode(120,95,52,54,95,112,101,114,102,111,114,109,101,114,0);
    let shoot2 = String.fromCharCode(111,119,110,101,100,95,52,95,52,50,0);
    let completen = 3.0;
    let playlistH: Map<any, any> = new Map([[String.fromCharCode(115,95,56,55,95,99,104,101,99,107,0),252], [String.fromCharCode(110,111,110,115,101,99,117,114,101,95,107,95,52,50,0),931], [String.fromCharCode(118,115,110,112,114,105,110,116,102,95,116,95,57,57,0),142]]);
    let editk = String.fromCharCode(110,111,116,105,102,105,99,97,116,111,110,115,95,121,95,51,51,0);
    let thailandY = String.fromCharCode(104,95,56,50,95,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0);
    let short_etJ = 5;
    let unselectedZ: Map<any, any> = new Map([[String.fromCharCode(101,120,112,114,101,115,115,105,111,110,95,112,95,55,0),String.fromCharCode(115,98,112,114,111,95,122,95,57,57,0)], [String.fromCharCode(112,111,108,101,95,103,95,56,52,0),String.fromCharCode(114,95,52,57,95,109,117,116,97,116,105,111,110,0)]]);
    let b_countk = String.fromCharCode(121,95,52,48,95,110,111,110,110,117,108,108,115,115,114,99,115,0);
    let auto_j9d = 4;
    let canvasR = false;
      shoot2 = `${2 - sheett.length}`;
      homeQ += `${1 + parseInt(`${completen}`)}`;
       let e_centerk = 5;
         e_centerk >>= Math.min(Math.abs(2 | e_centerk), 1);
      for (let k = 0; k < 3; k++) {
         e_centerk %= Math.max(2, 1 % (Math.max(3, e_centerk)));
      }
       let volumex = true;
      homeQ += `${thailandY.length * e_centerk}`;
   for (let w = 0; w < 1; w++) {
      editk = "3";
   }

        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

      shoot2 += `${(sheett == String.fromCharCode(71,0) ? sheett.length : homeQ.length)}`;
       let ball0 = 1.0;
       let disconnected3 = 0.0;
       let type_5Y = String.fromCharCode(98,95,52,49,95,98,105,110,97,115,99,105,105,0);
       let paginationE = 3.0;
          let short_fbG: Map<any, any> = new Map([[String.fromCharCode(102,108,97,99,95,119,95,57,57,0),40], [String.fromCharCode(120,105,112,104,95,56,95,50,50,0),604]]);
          let bufferD = String.fromCharCode(115,113,117,97,114,101,95,114,95,55,55,0);
          let sheet3 = 0;
         ball0 *= 2 | parseInt(`${disconnected3}`);
         short_fbG.set(`${sheet3}`, sheet3 * 1);
         bufferD = `${bufferD.length / 1}`;
       let whatsappi: Array<any> = [585, 681];
       let tumbnailb: Array<any> = [String.fromCharCode(100,95,49,57,95,98,103,114,97,0), String.fromCharCode(117,110,115,101,110,100,95,101,95,49,48,48,0), String.fromCharCode(112,97,99,107,101,100,95,50,95,57,55,0)];
      if (5 <= (tumbnailb.length / 1)) {
         tumbnailb = [parseInt(`${ball0}`) >> (Math.min(type_5Y.length, 5))];
      }
         ball0 /= Math.max(1, 1);
         tumbnailb.push(whatsappi.length % (Math.max(3, 7)));
      for (let s = 0; s < 2; s++) {
          let feedbackM = 3.0;
         type_5Y += `${whatsappi.length}`;
         feedbackM /= Math.max(parseFloat(`${parseInt(`${feedbackM}`) | parseInt(`${feedbackM}`)}`), 5);
      }
         type_5Y += `${whatsappi.length}`;
      while ((whatsappi.length / 2) >= 4) {
          let relatedI = String.fromCharCode(102,108,111,99,107,95,117,95,53,48,0);
          let selectA = String.fromCharCode(104,111,114,110,95,56,95,57,0);
          let blackn = 0.0;
         whatsappi = [1 | parseInt(`${paginationE}`)];
         relatedI += "3";
         selectA = `${parseInt(`${blackn}`)}`;
         blackn *= parseFloat(`${relatedI.length}`);
         break;
      }
      homeQ = `${thailandY.length}`;
   for (let m = 0; m < 2; m++) {
       let update_wrD: Map<any, any> = new Map([[String.fromCharCode(97,115,111,99,105,100,95,49,95,51,55,0),41], [String.fromCharCode(100,101,110,111,114,109,97,108,95,113,95,51,54,0),372]]);
       let alertK: Array<any> = [943, 703];
       let iconN = 1;
       let crown1 = 0;
         update_wrD.set(`${crown1}`, update_wrD.size);
      while (4 == crown1) {
         iconN *= 1;
         break;
      }
         update_wrD.set(`${crown1}`, iconN);
         iconN += 1;
      let signinupG = update_wrD.size <= 7193102;
      do {
         update_wrD.set(`${iconN}`, alertK.length ^ 3);
         if (signinupG) {
            break;
         }
      } while (((2 - iconN) > 5 || (iconN - 2) > 3) && signinupG);
      homeQ += `${playlistH.size}`;
   }
      homeQ += `${thailandY.length << (Math.min(editk.length, 4))}`;

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });

      homeQ = `${editk.length + parseInt(`${completen}`)}`;
   let selectionE = completen <= 7097055.0;
   do {
      completen /= Math.max(5, parseFloat(`${sheett.length}`));
      if (selectionE) {
         break;
      }
   } while ((shoot2.endsWith(`${completen}`)) && selectionE);
   let switch_bO = thailandY.length <= 6534337;
   do {
      thailandY = "2";
      if (switch_bO) {
         break;
      }
   } while (switch_bO && (5 < thailandY.length));
   if ((sheett.length ^ 5) < 5) {
       let live9 = 4.0;
       let ewardedQ = 0.0;
       let entry2 = String.fromCharCode(111,102,102,101,114,95,51,95,55,53,0);
       let firebasey = String.fromCharCode(97,112,112,114,111,118,101,100,95,112,95,54,52,0);
       let grayi = 1.0;
      for (let q = 0; q < 3; q++) {
          let tickedP = String.fromCharCode(122,95,52,56,95,99,111,118,97,108,101,110,116,0);
          let areaO: Map<any, any> = new Map([[String.fromCharCode(116,95,56,49,95,108,105,98,115,119,105,102,116,111,115,0),582], [String.fromCharCode(108,104,97,115,104,95,118,95,53,0),55]]);
          let alerti = String.fromCharCode(98,95,51,50,95,115,117,98,115,97,109,112,0);
         live9 -= parseFloat(`${2}`);
         tickedP += `${alerti.length | areaO.size}`;
         areaO = new Map([[`${areaO.size}`, tickedP.length >> (Math.min(Math.abs(2), 5))]]);
         alerti = `${areaO.size}`;
      }
         ewardedQ *= parseInt(`${grayi}`);
      while (5.100 <= (live9 - 3.92) && 3.92 <= (live9 - grayi)) {
         grayi /= Math.max(1, parseFloat(`${3 % (Math.max(9, parseInt(`${live9}`)))}`));
         break;
      }
      let livek = String.fromCharCode(109,50,106,0) == firebasey;
      do {
         firebasey = `${firebasey.length}`;
         if (livek) {
            break;
         }
      } while (livek && (entry2.includes(firebasey)));
      while ((3 - firebasey.length) <= 1 || (parseInt(`${grayi}`) + 3) <= 2) {
         firebasey += `${parseInt(`${ewardedQ}`) ^ parseInt(`${grayi}`)}`;
         break;
      }
          let update_n3 = String.fromCharCode(100,105,115,112,101,110,115,101,114,95,57,95,49,0);
          let condensedx = 0.0;
          let long_6dm = true;
         entry2 = `${parseInt(`${condensedx}`) << (Math.min(Math.abs(1), 2))}`;
         update_n3 += `${update_n3.length}`;
         condensedx -= 2;
      if (firebasey.length < 1) {
         entry2 = `${(entry2 == String.fromCharCode(74,0) ? parseInt(`${ewardedQ}`) : entry2.length)}`;
      }
       let downloadingD = String.fromCharCode(120,102,97,99,101,95,117,95,53,52,0);
         firebasey = `${parseInt(`${live9}`) & parseInt(`${grayi}`)}`;
          let plusY = String.fromCharCode(97,101,99,109,95,106,95,57,0);
          let selld = 3.0;
          let pressurel = 3;
         firebasey += `${plusY.length}`;
         plusY += `${parseInt(`${selld}`) / 3}`;
         selld += parseFloat(`${pressurel}`);
         pressurel *= parseInt(`${selld}`) & pressurel;
      let annerO = String.fromCharCode(118,50,109,104,0) == firebasey;
      do {
         firebasey += `${firebasey.length / 1}`;
         if (annerO) {
            break;
         }
      } while ((downloadingD.length > 5) && annerO);
      let robotop = entry2.length <= 9399077;
      do {
         entry2 = "2";
         if (robotop) {
            break;
         }
      } while (((ewardedQ * 5.38) == 1.52) && robotop);
         firebasey = `${entry2.length}`;
      let filled2 = String.fromCharCode(116,99,109,99,113,48,100,111,111,120,0) == firebasey;
      do {
         firebasey += `${firebasey.length / (Math.max(1, 4))}`;
         if (filled2) {
            break;
         }
      } while ((!firebasey.endsWith(`${entry2.length}`)) && filled2);
         live9 -= parseFloat(`${parseInt(`${live9}`)}`);
      sheett = `${(String.fromCharCode(103,0) == thailandY ? thailandY.length : shoot2.length)}`;
   }
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
