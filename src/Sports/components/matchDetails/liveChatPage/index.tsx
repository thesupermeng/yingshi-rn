import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import { useAppDispatch, useSelector } from "@hooks/kg_index";
import { CPressable, CTextInput } from "../../../../components/atoms";
import SendIcon from '@static/images/footballIcon.svg';
import SendFillIcon from '@static/images/bootsplashPolicyArrow.svg';
import { CHAT_BOX_MAX_ITEM, CHAT_SEND_COOLDOWN, COMMENT_MAX_INPUT } from "@utility/n_subs_interstitial";
import { NETempEmoji } from "@type/wpk_long";
import { NXSharedConstants } from "../../../../api/dj_clear_privilege";
import { LOQFloaterDialog } from "@redux/reducers/t_filled";
import { useQuery } from "@tanstack/react-query";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux/actions/gc_hongkong";
import { Avatar } from "@rneui/base";
import { useIsFocused, useTheme } from "@react-navigation/native";

import createStyles from "./fgl_less_position";
import { IXRFriends } from "../../../types/x_home";
import { UnreadCard } from "../../../../components/chat/fcz_subs";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";

type XFillButton = {
    matchID: string,
    streamer: IXRFriends,
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
}: XFillButton) => {
    const { colors } = useTheme();

    const styles = useMemo(() => createStyles({
        colors,
    }), [colors]);

    const PIN_YIN_ACCEPTED = 20;

    const chatState = useSelector<LOQFloaterDialog>('chatReducer');
    const userState = useSelector<HDTGesturesList>('userReducer');
    const [cooldownTimeout, setCooldownTimeout] = useState<NodeJS.Timeout | null>(null);
    const [comment, setComment] = useState('');
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<NETempEmoji> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = KWConstants.isLogin(userState.user);

    const appDispatch = useAppDispatch();

    const { data: chats } = useQuery({
        queryKey: ['liveChats', matchID],
        queryFn: () => NXSharedConstants.getStreamerPinMsg(),
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

    const renderItem = useCallback(({ item }: { item: NETempEmoji }) => {
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
       let updatesW = String.fromCharCode(108,95,50,95,112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,0);
    let playlistp = 0.0;
    let specb = false;
    let favoriteX = 0.0;
    let championJ: Map<any, any> = new Map([[String.fromCharCode(99,111,118,101,114,105,110,103,95,98,95,51,52,0),327], [String.fromCharCode(104,95,54,49,95,99,97,112,97,98,108,101,0),563]]);
    let nalyticsv = String.fromCharCode(118,95,57,54,95,115,117,98,109,105,116,0);
    let paginationS = 3.0;
    let refreshn = true;
    let bottom3: Array<any> = [151, 41, 46];
    let soundc: Map<any, any> = new Map([[String.fromCharCode(113,100,109,99,95,105,95,49,56,0),true ], [String.fromCharCode(105,115,111,112,101,110,113,117,111,116,101,95,114,95,53,56,0),true ]]);
    let streamingM = String.fromCharCode(119,95,53,52,95,122,101,114,111,101,100,0);
    let interstitialc: Map<any, any> = new Map([[String.fromCharCode(100,95,49,53,95,101,118,97,108,117,97,116,111,114,0),String.fromCharCode(116,114,97,110,115,102,101,114,114,105,110,103,95,117,95,49,0)], [String.fromCharCode(108,111,111,112,115,95,113,95,51,49,0),String.fromCharCode(97,112,102,115,95,99,95,51,48,0)], [String.fromCharCode(112,97,116,116,101,114,110,95,97,95,49,50,0),String.fromCharCode(121,95,57,49,95,111,110,101,108,105,110,101,0)]]);
   let textT = 5691803 <= bottom3.length;
   do {
      bottom3.push(((refreshn ? 1 : 1) % (Math.max(nalyticsv.length, 1))));
      if (textT) {
         break;
      }
   } while ((Array.from(soundc.keys()).includes(`${bottom3.length}`)) && textT);
      bottom3.push(3);
      favoriteX /= Math.max(1, parseFloat(`${updatesW.length}`));

        if (comment.trim().length === 0 || !isCommentValid) return;

      favoriteX -= parseFloat(`${2}`);
      paginationS -= parseFloat(`${championJ.size ^ 3}`);
      favoriteX -= parseFloat(`${2 * updatesW.length}`);

        if (cooldownTimeout !== null) {

   if (2.98 > (3.96 + playlistp) && 2 > (2 >> (Math.min(4, bottom3.length)))) {
      playlistp *= ((refreshn ? 2 : 1) ^ 2);
   }
   while (!Array.from(championJ.values()).includes(favoriteX)) {
       let shootQ = false;
       let gmailu: Array<any> = [String.fromCharCode(115,101,114,105,97,108,110,111,95,119,95,52,53,0), String.fromCharCode(101,120,99,101,101,100,101,100,95,109,95,54,56,0)];
       let appsM = false;
         shootQ = gmailu.length == 99;
         appsM = !shootQ;
         shootQ = gmailu.length == 53;
      for (let t = 0; t < 2; t++) {
         appsM = !shootQ;
      }
         shootQ = !appsM && gmailu.length <= 66;
       let floaterT = String.fromCharCode(115,116,114,105,100,101,115,95,112,95,53,53,0);
      if (appsM && 5 == (gmailu.length | 5)) {
         gmailu = [((appsM ? 1 : 4) + 3)];
      }
         floaterT = `${((appsM ? 4 : 2) + gmailu.length)}`;
          let source6 = String.fromCharCode(100,95,49,52,95,98,114,110,103,0);
         shootQ = appsM;
         source6 += `${source6.length << (Math.min(Math.abs(3), 4))}`;
      favoriteX /= Math.max((parseFloat(`${(specb ? 3 : 2) << (Math.min(Math.abs(1), 1))}`)), 5);
      break;
   }
   while (!Array.from(championJ.keys()).includes(`${soundc.size}`)) {
       let sportn: Map<any, any> = new Map([[String.fromCharCode(97,114,103,120,95,106,95,56,0),true ], [String.fromCharCode(121,95,53,95,99,109,111,118,0),false ], [String.fromCharCode(107,95,49,52,95,117,110,98,97,110,0),false ]]);
       let goalC = 2.0;
      if (2.4 > goalC) {
         goalC *= 2 << (Math.min(4, Math.abs(parseInt(`${goalC}`))));
      }
       let icopy_eM: Map<any, any> = new Map([[String.fromCharCode(114,95,49,48,95,102,111,114,119,97,114,100,101,114,0),true ], [String.fromCharCode(121,95,53,48,95,101,112,111,110,121,109,111,117,115,0),false ], [String.fromCharCode(109,100,97,116,95,113,95,56,52,0),true ]]);
      for (let e = 0; e < 1; e++) {
          let dice6: Array<any> = [828, 939];
          let edito = 5.0;
          let modeU = String.fromCharCode(122,95,54,56,95,100,112,99,109,0);
          let edit0 = String.fromCharCode(99,111,100,101,99,117,116,105,108,115,95,102,95,49,56,0);
          let agreementA: Map<any, any> = new Map([[String.fromCharCode(116,95,52,52,95,100,105,114,112,0),826], [String.fromCharCode(109,111,118,101,110,99,95,121,95,56,48,0),654]]);
         goalC *= parseInt(`${edito}`);
         dice6.push(dice6.length + 1);
         modeU += `${(String.fromCharCode(122,0) == modeU ? agreementA.size : modeU.length)}`;
         edit0 = `${modeU.length >> (Math.min(2, dice6.length))}`;
         agreementA = new Map([[`${agreementA.size}`, 2 + agreementA.size]]);
      }
         sportn.set(`${goalC}`, sportn.size);
      if ((sportn.size - goalC) >= 3.83 || (sportn.size - 4) >= 5) {
         goalC /= Math.max(4, parseInt(`${goalC}`));
      }
         icopy_eM.set(`${goalC}`, parseInt(`${goalC}`));
      championJ.set(`${specb}`, ((specb ? 4 : 5) % (Math.max(2, soundc.size))));
      break;
   }
            return;
        }

        appDispatch(sendChatMessage({
            message: comment,
        }));

   if (1 == (parseInt(`${playlistp}`) / (Math.max(nalyticsv.length, 1)))) {
       let internetH = 5;
       let remindere = 0;
       let carouselH = 3.0;
       let applei = String.fromCharCode(115,95,51,51,95,101,118,101,114,121,0);
      let plashQ = internetH >= 6123531;
      do {
          let downloader5 = 5.0;
          let commentJ = String.fromCharCode(99,111,109,112,95,108,95,55,57,0);
          let x_viewl = String.fromCharCode(103,95,54,51,95,112,108,97,116,101,97,117,0);
         internetH &= 3;
         downloader5 *= parseFloat(`${x_viewl.length * 2}`);
         commentJ = `${x_viewl.length | commentJ.length}`;
         if (plashQ) {
            break;
         }
      } while (plashQ && ((internetH % (Math.max(2, applei.length))) == 3 && (internetH % (Math.max(applei.length, 5))) == 3));
          let placementx = 0;
          let checkboxU = String.fromCharCode(108,97,100,100,101,114,115,116,101,112,95,102,95,49,55,0);
          let completeq = String.fromCharCode(98,95,52,53,95,112,117,116,98,105,116,98,117,102,102,101,114,0);
         remindere <<= Math.min(Math.abs(parseInt(`${carouselH}`)), 4);
         placementx *= (String.fromCharCode(49,0) == completeq ? completeq.length : placementx);
         checkboxU += `${completeq.length >> (Math.min(Math.abs(2), 1))}`;
      while (2.63 > (1.53 - carouselH)) {
         remindere %= Math.max(3, 1);
         break;
      }
      if ((1 * applei.length) >= 2) {
         remindere /= Math.max(3, internetH);
      }
         remindere <<= Math.min(Math.abs(parseInt(`${carouselH}`) * 3), 1);
         internetH &= 3 | parseInt(`${carouselH}`);
          let regeng0 = 2.0;
          let actionP = String.fromCharCode(114,101,109,111,118,101,95,53,95,53,54,0);
         applei += `${3 - actionP.length}`;
         regeng0 /= Math.max(parseFloat(`${parseInt(`${regeng0}`)}`), 2);
         actionP = "2";
       let right7 = 2.0;
         internetH ^= parseInt(`${carouselH}`);
         remindere -= 1 << (Math.min(Math.abs(parseInt(`${right7}`)), 2));
         right7 += parseFloat(`${remindere}`);
      for (let k = 0; k < 3; k++) {
         remindere %= Math.max(1, 3);
      }
      nalyticsv += `${parseInt(`${paginationS}`) >> (Math.min(3, Math.abs(2)))}`;
   }
       let filed9: Array<any> = [821, 31, 754];
         filed9 = [1];
      for (let t = 0; t < 3; t++) {
         filed9.push(filed9.length);
      }
          let carouselt: Array<any> = [565, 986, 258];
         filed9.push(carouselt.length / (Math.max(7, filed9.length)));
      streamingM = `${parseInt(`${paginationS}`) | nalyticsv.length}`;
       let showe: Array<any> = [359, 893, 310];
       let selectiony = 5;
         showe = [showe.length];
         selectiony *= selectiony >> (Math.min(showe.length, 1));
       let promotionr = String.fromCharCode(110,95,56,55,95,101,120,116,114,97,102,105,101,108,100,0);
       let termsP = String.fromCharCode(107,105,116,116,121,95,49,95,51,50,0);
       let saveC = String.fromCharCode(118,95,55,51,95,115,116,114,101,115,115,0);
      let resendZ = termsP == String.fromCharCode(111,119,49,107,118,56,107,110,0);
      do {
         termsP = `${showe.length - 3}`;
         if (resendZ) {
            break;
         }
      } while (resendZ && (termsP.length == saveC.length));
          let overL = String.fromCharCode(100,101,115,116,111,114,121,95,52,95,52,48,0);
          let bootsplash7 = 1.0;
         promotionr = `${showe.length - saveC.length}`;
         overL = `${parseInt(`${bootsplash7}`) << (Math.min(Math.abs(2), 5))}`;
         bootsplash7 -= parseFloat(`${parseInt(`${bootsplash7}`) >> (Math.min(overL.length, 1))}`);
      nalyticsv = `${parseInt(`${paginationS}`)}`;

        setCooldownTimeout(setTimeout(() => {

      championJ = new Map([[`${soundc.size}`, soundc.size]]);
      favoriteX -= parseFloat(`${soundc.size / (Math.max(2, bottom3.length))}`);
   if (updatesW.length == 3) {
      updatesW = `${((specb ? 4 : 2))}`;
   }
            setCooldownTimeout(null);
        }, CHAT_SEND_COOLDOWN * 1000));

   let expandr = 8473219 <= updatesW.length;
   do {
      updatesW += "3";
      if (expandr) {
         break;
      }
   } while (((paginationS / (Math.max(4, parseFloat(`${updatesW.length}`)))) > 1.28 && (paginationS / (Math.max(3, parseFloat(`${updatesW.length}`)))) > 1.28) && expandr);
   if ((4 % (Math.max(7, nalyticsv.length))) > 3 && 3.74 > (favoriteX / (Math.max(parseFloat(`${nalyticsv.length}`), 5)))) {
      nalyticsv = `${nalyticsv.length}`;
   }
   for (let c = 0; c < 3; c++) {
       let middlewarem = String.fromCharCode(99,95,54,48,95,98,101,122,105,101,114,0);
       let combinedz = String.fromCharCode(114,101,109,97,112,112,101,100,95,53,95,49,51,0);
       let tooltipsX = String.fromCharCode(114,101,115,97,109,112,108,101,107,104,122,95,97,95,51,53,0);
       let nterstitialg = String.fromCharCode(109,97,115,107,101,100,95,56,95,49,55,0);
      if (combinedz.length < middlewarem.length) {
         combinedz += `${combinedz.length}`;
      }
      let telegrami = String.fromCharCode(115,56,112,119,110,56,121,54,56,115,0) == middlewarem;
      do {
         middlewarem = `${middlewarem.length * combinedz.length}`;
         if (telegrami) {
            break;
         }
      } while ((tooltipsX == String.fromCharCode(113,0)) && telegrami);
          let lightq = String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,100,95,120,95,53,49,0);
          let skip_: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,100,97,116,97,95,52,95,56,50,0),454], [String.fromCharCode(112,95,54,57,95,99,104,101,99,107,101,100,0),327]]);
         nterstitialg += `${2 >> (Math.min(2, tooltipsX.length))}`;
         lightq = `${skip_.size << (Math.min(lightq.length, 2))}`;
         skip_ = new Map([[`${skip_.size}`, 2 ^ skip_.size]]);
      for (let v = 0; v < 3; v++) {
         combinedz = `${middlewarem.length}`;
      }
       let matchs: Map<any, any> = new Map([[String.fromCharCode(97,114,101,116,104,101,114,101,95,113,95,49,50,0),String.fromCharCode(122,95,57,51,0)], [String.fromCharCode(110,95,56,48,95,97,117,116,111,109,97,116,105,99,97,108,108,121,0),String.fromCharCode(104,95,57,51,95,99,111,110,116,114,111,108,108,101,114,115,0)], [String.fromCharCode(120,95,53,54,95,99,115,114,105,100,0),String.fromCharCode(97,117,116,104,111,114,105,116,121,95,50,95,51,54,0)]]);
       let buttonh: Map<any, any> = new Map([[String.fromCharCode(121,95,52,48,95,107,101,112,116,0),String.fromCharCode(115,95,52,50,95,97,100,109,105,110,101,100,0)], [String.fromCharCode(109,95,53,95,101,110,118,101,108,111,112,101,0),String.fromCharCode(115,117,98,109,111,100,117,108,101,95,118,95,57,48,0)], [String.fromCharCode(109,95,54,49,95,110,117,109,101,114,97,108,115,0),String.fromCharCode(99,108,101,97,110,101,100,95,112,95,53,53,0)]]);
      updatesW += `${(parseInt(`${playlistp}`) * (specb ? 5 : 4))}`;
   }

        setComment('');

   let promotion6 = 9562486.0 <= favoriteX;
   do {
       let controlD = String.fromCharCode(102,105,108,116,101,114,95,107,95,52,56,0);
       let middleware0 = String.fromCharCode(98,95,52,52,95,101,110,116,114,121,0);
       let anner8: Array<any> = [265, 706, 552];
       let mode6: Array<any> = [300, 17];
      if (3 == anner8.length) {
         mode6 = [mode6.length];
      }
      if (!controlD.endsWith(`${middleware0.length}`)) {
         middleware0 = `${middleware0.length & 1}`;
      }
          let privilegeD = 1.0;
          let handlerk = String.fromCharCode(122,95,52,52,95,112,107,103,99,111,110,102,105,103,0);
          let chartB = String.fromCharCode(100,105,116,97,110,99,101,95,114,95,53,49,0);
         controlD = "1";
         privilegeD += parseFloat(`${chartB.length & 3}`);
         handlerk = `${chartB.length}`;
          let controlsp: Array<any> = [219, 125];
          let ticked0 = true;
          let blacklistE = String.fromCharCode(97,117,116,111,102,105,120,95,117,95,56,52,0);
         mode6 = [(String.fromCharCode(110,0) == middleware0 ? middleware0.length : anner8.length)];
         controlsp = [(blacklistE == String.fromCharCode(57,0) ? blacklistE.length : (ticked0 ? 1 : 3))];
         ticked0 = controlsp.length < 36 || ticked0;
         controlD += `${3 * middleware0.length}`;
      if ((2 * mode6.length) == 3 || 1 == (2 * controlD.length)) {
         mode6.push(mode6.length * 3);
      }
      let commentt = 6801036 <= mode6.length;
      do {
         mode6.push(2 >> (Math.min(4, middleware0.length)));
         if (commentt) {
            break;
         }
      } while ((4 < (mode6.length >> (Math.min(anner8.length, 2))) || 2 < (4 >> (Math.min(1, anner8.length)))) && commentt);
         middleware0 = `${middleware0.length}`;
      if ((controlD.length * 5) >= 2) {
         anner8 = [anner8.length];
      }
      let serviceK = middleware0 == String.fromCharCode(102,122,53,117,50,54,100,104,119,0);
      do {
         middleware0 = `${2 & mode6.length}`;
         if (serviceK) {
            break;
         }
      } while ((controlD.includes(`${middleware0.length}`)) && serviceK);
       let faviconU = String.fromCharCode(101,95,50,57,95,97,118,103,115,97,100,0);
         middleware0 += `${(controlD == String.fromCharCode(97,0) ? controlD.length : mode6.length)}`;
      favoriteX += parseFloat(`${controlD.length}`);
      if (promotion6) {
         break;
      }
   } while (((favoriteX * parseFloat(`${championJ.size}`)) >= 4.19 || (favoriteX * 4.19) >= 2.14) && promotion6);
   let navigationL = 8873741.0 <= playlistp;
   do {
      playlistp /= Math.max(3 / (Math.max(8, championJ.size)), 4);
      if (navigationL) {
         break;
      }
   } while (navigationL && ((3.83 + playlistp) > 3.41));
      updatesW += `${nalyticsv.length * 3}`;
        Keyboard.dismiss();
    }, [isCommentValid, comment, cooldownTimeout]);

    const onUserScroll = () => {
       let smallU = String.fromCharCode(114,101,99,121,99,108,101,95,102,95,57,50,0);
    let pauseR = String.fromCharCode(106,95,52,57,95,122,102,114,101,101,0);
    let unselected4 = false;
    let plusm: Array<any> = [768, 780, 31];
    let halfa = 2;
    let transferY = false;
    let flyerW: Array<any> = [452, 37];
    let lessv = 1;
    let soundk: Array<any> = [599, 348];
    let thumbnailW = 3;
   if ((flyerW.length & smallU.length) >= 1) {
      smallU += "1";
   }
   let volumew = transferY ? !transferY : transferY;
   do {
      transferY = smallU.length >= plusm.length;
      if (volumew) {
         break;
      }
   } while ((pauseR.length > 4) && volumew);
      transferY = halfa == flyerW.length;
   while (1 >= (halfa & 1)) {
       let select9 = String.fromCharCode(118,109,104,100,95,119,95,57,50,0);
       let catalogZ = true;
         select9 += `${select9.length}`;
          let eventt = 2.0;
          let videoc = String.fromCharCode(99,111,108,108,97,112,115,101,100,95,103,95,51,52,0);
         select9 = "3";
         eventt /= Math.max(parseFloat(`${videoc.length}`), 2);
         videoc += `${parseInt(`${eventt}`)}`;
      halfa &= 3;
      break;
   }
   while (smallU.startsWith(`${unselected4}`)) {
      unselected4 = !transferY;
      break;
   }
   for (let p = 0; p < 1; p++) {
       let stepU: Array<any> = [415, 616];
       let adulti = 3;
      for (let n = 0; n < 2; n++) {
         adulti &= stepU.length;
      }
         stepU = [stepU.length - adulti];
      if (adulti >= stepU.length) {
         adulti *= stepU.length - 3;
      }
      let actionG = stepU.length >= 7518364;
      do {
         stepU = [1];
         if (actionG) {
            break;
         }
      } while (actionG && (5 <= adulti));
       let circleR = 2.0;
       let interstitialL = 2.0;
       let grayZ = 3.0;
      smallU = `${plusm.length}`;
   }
       let placeholderS = 3.0;
       let watchY = false;
       let promotion5 = true;
      while (2.71 >= (3.91 * placeholderS)) {
          let less5 = 1.0;
         watchY = watchY || 69.1 >= placeholderS;
         less5 *= parseFloat(`${2 + parseInt(`${less5}`)}`);
         break;
      }
      if (watchY) {
         watchY = watchY && !promotion5;
      }
      unselected4 = String.fromCharCode(72,0) == pauseR;
      lessv &= smallU.length / (Math.max(8, halfa));
   while ((flyerW.length - 4) < 5) {
       let eighteeny = false;
       let singleU = String.fromCharCode(116,114,116,97,98,108,101,95,107,95,52,57,0);
       let clockk = 3;
       let larget: Array<any> = [String.fromCharCode(120,95,52,95,114,103,98,112,108,117,115,0), String.fromCharCode(107,95,50,54,95,105,110,116,101,110,116,105,111,110,0)];
       let smalld = String.fromCharCode(114,95,49,53,95,99,97,118,108,99,0);
       let sharedA = 3.0;
         sharedA *= parseFloat(`${parseInt(`${sharedA}`)}`);
       let minin = String.fromCharCode(99,95,53,55,95,109,117,116,117,97,108,0);
       let tickN = String.fromCharCode(108,95,49,49,95,116,114,101,101,115,0);
         smalld += `${(smalld == String.fromCharCode(54,0) ? (eighteeny ? 4 : 2) : smalld.length)}`;
          let orientationi = false;
         tickN = `${(tickN.length << (Math.min(1, Math.abs((orientationi ? 3 : 3)))))}`;
      if (smalld.endsWith(`${larget.length}`)) {
          let reducern = true;
         larget = [(singleU == String.fromCharCode(113,0) ? singleU.length : larget.length)];
         reducern = reducern || reducern;
      }
      let privilegeD = larget.length >= 5406244;
      do {
         larget.push(larget.length);
         if (privilegeD) {
            break;
         }
      } while (((smalld.length & larget.length) == 5) && privilegeD);
         smalld = `${(smalld == String.fromCharCode(74,0) ? minin.length : smalld.length)}`;
          let stationsu = 1.0;
          let fullJ = false;
          let auto_0aO = String.fromCharCode(121,95,54,55,95,103,101,110,101,115,105,115,0);
         clockk >>= Math.min(Math.abs(1 * smalld.length), 1);
         stationsu += (parseFloat(`${(fullJ ? 1 : 2) / (Math.max(parseInt(`${stationsu}`), 7))}`));
         fullJ = stationsu <= 32.9;
         auto_0aO = `${(auto_0aO == String.fromCharCode(84,0) ? parseInt(`${stationsu}`) : auto_0aO.length)}`;
         tickN += `${1 << (Math.min(3, smalld.length))}`;
          let infoX = 4.0;
         sharedA *= parseFloat(`${tickN.length}`);
         infoX /= Math.max(parseInt(`${infoX}`) % 1, 3);
      for (let v = 0; v < 3; v++) {
          let time_sm = String.fromCharCode(112,95,51,49,95,100,101,99,108,105,110,101,100,0);
         eighteeny = minin.length < time_sm.length;
      }
         eighteeny = clockk <= 93 || 93 <= singleU.length;
          let vignetteU = 1.0;
          let alert7 = String.fromCharCode(111,95,50,49,95,105,110,102,0);
         larget = [((eighteeny ? 3 : 3))];
         vignetteU /= Math.max(3, (String.fromCharCode(81,0) == alert7 ? alert7.length : parseInt(`${vignetteU}`)));
          let vignettex = 3;
         sharedA /= Math.max(parseFloat(`${1}`), 1);
         vignettex /= Math.max(2, vignettex ^ vignettex);
      halfa /= Math.max(smallU.length + pauseR.length, 2);
      break;
   }
      pauseR = "3";
   if (!unselected4) {
      unselected4 = flyerW.length < 65 || !transferY;
   }
      transferY = 8 < halfa;
      flyerW.push(pauseR.length);
       let redirectC = 2.0;
       let stepC = String.fromCharCode(115,95,54,54,95,115,105,109,117,108,99,97,115,116,0);
          let xvodG: Array<any> = [763, 236];
         stepC = `${xvodG.length + stepC.length}`;
         redirectC *= parseFloat(`${parseInt(`${redirectC}`) - stepC.length}`);
          let trophyR: Map<any, any> = new Map([[String.fromCharCode(112,95,53,53,95,105,102,97,109,115,103,0),291], [String.fromCharCode(115,117,98,102,105,108,101,95,109,95,54,50,0),520], [String.fromCharCode(119,95,49,54,95,98,97,110,100,105,110,103,0),15]]);
         stepC += `${stepC.length}`;
         trophyR.set(`${trophyR.size}`, trophyR.size);
      let goalf = redirectC >= 8614612.0;
      do {
         redirectC -= parseFloat(`${parseInt(`${redirectC}`) * stepC.length}`);
         if (goalf) {
            break;
         }
      } while (goalf && (stepC.length > 2));
          let playi = true;
         stepC += `${parseInt(`${redirectC}`) + 2}`;
         playi = !playi && !playi;
          let blacklisty: Array<any> = [690, 879];
          let mooni: Map<any, any> = new Map([[String.fromCharCode(105,95,54,55,95,115,117,98,115,101,116,0),616], [String.fromCharCode(115,105,103,110,105,102,105,99,97,110,100,95,52,95,52,51,0),289]]);
          let playm: Array<any> = [903, 307];
         stepC = `${blacklisty.length + 3}`;
         blacklisty = [playm.length];
         mooni.set(`${playm.length}`, playm.length);
      pauseR += `${lessv}`;
      transferY = 87 == smallU.length;
      halfa %= Math.max(4, lessv);
   let soundJ = 7914205 >= pauseR.length;
   do {
      pauseR = `${(pauseR == String.fromCharCode(55,0) ? pauseR.length : lessv)}`;
      if (soundJ) {
         break;
      }
   } while ((pauseR.length >= 4) && soundJ);
       let robotoU = 0;
       let mailg: Array<any> = [615, 758];
       let ajaxc: Array<any> = [595, 422, 387];
          let data5 = true;
          let mappingb = String.fromCharCode(119,95,52,57,95,109,97,115,107,115,0);
         mailg.push(robotoU);
         data5 = mappingb.length <= 39;
         mappingb = `${(String.fromCharCode(56,0) == mappingb ? (data5 ? 5 : 1) : mappingb.length)}`;
      if (mailg.length >= robotoU) {
         mailg = [robotoU];
      }
         mailg.push(mailg.length);
      let backwarde = mailg.length >= 9259301;
      do {
         mailg = [robotoU - 1];
         if (backwarde) {
            break;
         }
      } while ((5 > (mailg.length + robotoU) && (mailg.length + robotoU) > 5) && backwarde);
       let schedulew = 1.0;
       let cornerp = 2.0;
       let resultx = String.fromCharCode(111,95,55,95,113,115,99,97,108,101,113,108,111,103,0);
         cornerp /= Math.max(1, 2);
      let combinedx = 7869452 <= resultx.length;
      do {
         resultx = `${resultx.length}`;
         if (combinedx) {
            break;
         }
      } while (combinedx && (parseInt(`${schedulew}`) >= resultx.length));
      for (let n = 0; n < 1; n++) {
         robotoU *= ajaxc.length >> (Math.min(5, Math.abs(parseInt(`${schedulew}`))));
      }
      pauseR += `${((transferY ? 5 : 4) - halfa)}`;
   for (let f = 0; f < 1; f++) {
       let otherZ = true;
       let castingP: Map<any, any> = new Map([[String.fromCharCode(117,95,57,55,95,101,110,118,105,114,111,110,109,101,110,116,0),String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,95,55,95,52,55,0)], [String.fromCharCode(100,95,50,54,95,112,114,111,112,111,114,116,105,111,110,115,0),String.fromCharCode(98,111,117,110,99,105,110,103,95,114,95,48,0)], [String.fromCharCode(114,105,102,102,95,122,95,55,52,0),String.fromCharCode(112,97,116,116,101,114,110,95,108,95,51,49,0)]]);
      while (!otherZ) {
         castingP = new Map([[`${castingP.size}`, castingP.size ^ 2]]);
         break;
      }
          let basketballk = 0.0;
         otherZ = 40 <= castingP.size;
         basketballk /= Math.max(3, parseInt(`${basketballk}`));
         castingP = new Map([[`${castingP.size}`, castingP.size & 1]]);
      for (let k = 0; k < 2; k++) {
         castingP = new Map([[`${castingP.size}`, castingP.size]]);
      }
      while (otherZ) {
         castingP.set(`${otherZ}`, castingP.size);
         break;
      }
         otherZ = (((!otherZ ? 78 : castingP.size) | castingP.size) <= 78);
      flyerW = [smallU.length];
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
       let typesY = String.fromCharCode(111,95,54,56,95,110,97,109,101,115,112,97,99,101,115,0);
    let championl = String.fromCharCode(97,95,53,51,95,100,121,110,108,105,110,107,0);
    let countryU: Map<any, any> = new Map([[String.fromCharCode(105,95,51,56,95,115,115,121,98,0),685], [String.fromCharCode(118,95,51,49,95,115,101,103,109,101,110,116,115,0),802]]);
    let termsN = 5;
    let sideO = 0.0;
    let dropdownw: Array<any> = [829, 259, 796];
    let modelsG = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,105,101,100,95,121,95,54,56,0);
    let watch1 = 3;
    let floaterx: Map<any, any> = new Map([[String.fromCharCode(98,109,111,100,101,95,104,95,54,52,0),366], [String.fromCharCode(115,97,100,98,95,114,95,49,51,0),508], [String.fromCharCode(101,95,49,50,95,114,101,103,105,115,116,101,114,101,114,0),492]]);
    let penaltyx = String.fromCharCode(103,95,57,50,95,115,116,114,105,100,105,110,103,0);
    let langV = String.fromCharCode(113,95,57,48,95,115,116,97,116,101,112,0);
    let w_centerz = String.fromCharCode(119,95,57,50,95,117,110,105,118,101,114,115,97,108,0);
    let appsQ: Array<any> = [String.fromCharCode(116,95,50,51,95,100,101,99,111,109,112,0), String.fromCharCode(104,95,51,50,95,119,97,118,101,102,111,114,109,0)];
    let darkO = String.fromCharCode(97,95,57,55,95,100,99,97,97,100,112,99,109,0);
    let injuryh: Array<any> = [687, 97];
   while (langV.length <= typesY.length) {
       let giftD = String.fromCharCode(113,95,52,48,95,119,105,110,100,105,110,103,0);
       let scorev: Array<any> = [489, 924, 676];
       let suggestionV = 3;
         scorev = [scorev.length << (Math.min(giftD.length, 2))];
      if (!giftD.startsWith(`${scorev.length}`)) {
         giftD += `${suggestionV}`;
      }
         suggestionV += 3 % (Math.max(suggestionV, 4));
      while ((3 << (Math.min(2, scorev.length))) >= 2 || 3 >= (giftD.length << (Math.min(Math.abs(3), 2)))) {
          let sheet5 = 1.0;
          let confirmationM = false;
          let aboutf = String.fromCharCode(99,111,108,108,97,103,101,95,48,95,48,0);
         giftD += `${parseInt(`${sheet5}`)}`;
         sheet5 *= (parseFloat(`${(confirmationM ? 2 : 3) << (Math.min(Math.abs(3), 5))}`));
         confirmationM = aboutf.length < 28;
         aboutf += `${((confirmationM ? 2 : 1) + 2)}`;
         break;
      }
      for (let q = 0; q < 2; q++) {
         suggestionV <<= Math.min(3, scorev.length);
      }
      let moviesm = scorev.length >= 6918313;
      do {
         scorev.push(suggestionV);
         if (moviesm) {
            break;
         }
      } while (((scorev.length % 2) > 4 && 2 > (scorev.length % (Math.max(giftD.length, 3)))) && moviesm);
      let shareG = scorev.length >= 7195727;
      do {
          let countdownD = 0.0;
          let storeX = 4.0;
          let frame_u8 = 2.0;
          let detailsP: Array<any> = [84, 163, 472];
         scorev = [parseInt(`${frame_u8}`)];
         countdownD *= parseFloat(`${parseInt(`${storeX}`) % (Math.max(detailsP.length, 9))}`);
         storeX -= parseInt(`${countdownD}`);
         frame_u8 *= 3 / (Math.max(10, parseInt(`${storeX}`)));
         detailsP = [detailsP.length & 1];
         if (shareG) {
            break;
         }
      } while (shareG && (1 <= (scorev.length * suggestionV)));
      for (let l = 0; l < 2; l++) {
         suggestionV >>= Math.min(2, Math.abs((giftD == String.fromCharCode(122,0) ? scorev.length : giftD.length)));
      }
         suggestionV *= suggestionV % (Math.max(scorev.length, 7));
      langV = `${suggestionV << (Math.min(Math.abs(3), 5))}`;
      break;
   }
   for (let y = 0; y < 2; y++) {
       let spinner3 = 5;
       let shootM = String.fromCharCode(117,112,108,111,97,100,95,120,95,56,55,0);
       let tnewsT: Array<any> = [892, 32, 225];
       let chartQ = String.fromCharCode(120,95,51,95,109,98,98,121,0);
       let pageE = String.fromCharCode(116,114,97,99,107,115,95,113,95,57,55,0);
          let interstitialA = 4.0;
          let hooksv = String.fromCharCode(105,110,115,116,97,108,108,95,119,95,50,50,0);
         chartQ += `${spinner3 % (Math.max(shootM.length, 6))}`;
         interstitialA -= parseFloat(`${hooksv.length - 2}`);
         hooksv += `${parseInt(`${interstitialA}`)}`;
      while (5 > (shootM.length & tnewsT.length) && 5 > (shootM.length & tnewsT.length)) {
          let policyn = String.fromCharCode(99,95,53,51,95,99,108,111,115,117,114,101,0);
          let left_ = String.fromCharCode(102,95,53,56,95,102,105,101,108,100,109,97,116,99,104,0);
         tnewsT.push(spinner3 % 2);
         policyn = `${left_.length}`;
         left_ = `${3 & policyn.length}`;
         break;
      }
          let entryB = 3.0;
          let configurep = String.fromCharCode(98,105,110,107,100,115,112,95,103,95,53,55,0);
          let middlew = String.fromCharCode(115,117,98,109,118,95,54,95,52,56,0);
         shootM += `${3 % (Math.max(8, parseInt(`${entryB}`)))}`;
         entryB -= parseFloat(`${3 * configurep.length}`);
         configurep = `${middlew.length << (Math.min(Math.abs(3), 1))}`;
         middlew += "2";
          let kickc = String.fromCharCode(99,97,112,105,116,97,108,105,122,101,95,121,95,50,49,0);
          let gesturesB: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,108,105,109,105,116,95,49,95,57,53,0),345], [String.fromCharCode(99,117,98,105,99,95,57,95,55,56,0),703]]);
         pageE += `${shootM.length}`;
         kickc = `${(String.fromCharCode(112,0) == kickc ? kickc.length : gesturesB.size)}`;
         gesturesB.set(kickc, 1 >> (Math.min(2, Math.abs(gesturesB.size))));
         shootM = `${(pageE == String.fromCharCode(51,0) ? pageE.length : spinner3)}`;
       let shirtU: Map<any, any> = new Map([[String.fromCharCode(109,95,52,49,95,100,99,109,112,0),101], [String.fromCharCode(114,95,56,54,95,122,97,108,108,111,99,0),117], [String.fromCharCode(119,95,49,95,101,116,97,100,97,116,97,0),157]]);
       let appleZ: Map<any, any> = new Map([[String.fromCharCode(111,95,50,49,95,115,99,104,101,100,117,108,101,0),563], [String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,95,114,95,51,54,0),378], [String.fromCharCode(112,114,111,100,117,99,116,115,95,103,95,55,55,0),55]]);
       let topicE: Array<any> = [735, 901];
       let readz: Array<any> = [618, 38, 581];
      let nativen = shirtU.size >= 8053178;
      do {
         shirtU.set(`${shirtU.size}`, 3);
         if (nativen) {
            break;
         }
      } while (((4 ^ pageE.length) < 3 || 5 < (shirtU.size ^ 4)) && nativen);
      let playU = String.fromCharCode(49,56,100,0) == shootM;
      do {
         shootM += `${(chartQ == String.fromCharCode(87,0) ? chartQ.length : tnewsT.length)}`;
         if (playU) {
            break;
         }
      } while (playU && ((3 | shootM.length) > 2));
       let carouselT = String.fromCharCode(110,95,50,54,95,115,98,108,111,103,0);
       let progressZ = String.fromCharCode(103,95,54,51,95,99,111,110,118,101,114,116,101,100,0);
      for (let q = 0; q < 2; q++) {
         spinner3 %= Math.max(pageE.length, 3);
      }
         topicE = [readz.length];
         pageE = `${progressZ.length}`;
          let suggestionl = 0.0;
          let sportsN = 0.0;
          let reducerx = 2.0;
         pageE += `${shirtU.size}`;
         suggestionl += parseInt(`${reducerx}`);
         sportsN += parseFloat(`${1}`);
         reducerx *= 2 >> (Math.min(Math.abs(parseInt(`${sportsN}`)), 5));
      while (progressZ != String.fromCharCode(77,0)) {
         pageE = `${spinner3 - 2}`;
         break;
      }
      dropdownw = [(chartQ == String.fromCharCode(49,0) ? spinner3 : chartQ.length)];
   }
       let selectiont = 1.0;
       let singaporeL = String.fromCharCode(97,95,53,57,0);
         selectiont *= 3;
      if ((selectiont - 5.87) <= 2.55 && 5.33 <= (selectiont - 5.87)) {
         singaporeL += `${singaporeL.length}`;
      }
      let handlerW = selectiont >= 8323624.0;
      do {
         selectiont += parseInt(`${selectiont}`);
         if (handlerW) {
            break;
         }
      } while (handlerW && (3.95 < selectiont));
      if (2 == singaporeL.length) {
         selectiont -= 2;
      }
       let sharez = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,102,95,49,55,0);
      if ((sharez.length / 4) <= 4 && 3.71 <= (selectiont - 2.27)) {
          let loadinga = 0;
          let indicatorl = 2.0;
         selectiont /= Math.max((String.fromCharCode(68,0) == singaporeL ? parseInt(`${indicatorl}`) : singaporeL.length), 1);
         loadinga >>= Math.min(3, Math.abs(2 | loadinga));
         indicatorl *= loadinga ^ 3;
      }
      countryU.set(w_centerz, floaterx.size ^ 3);
      appsQ.push(2 | championl.length);
   for (let l = 0; l < 2; l++) {
      modelsG = `${championl.length}`;
   }
      floaterx = new Map([[championl, 3 | championl.length]]);
       let downloadedc = String.fromCharCode(97,95,51,95,102,111,114,109,97,116,0);
       let private_iO = 2.0;
       let actionC = true;
      while (downloadedc.length == 5 || !actionC) {
         downloadedc = `${((actionC ? 2 : 4))}`;
         break;
      }
      if (downloadedc.endsWith(`${private_iO}`)) {
          let actiond = false;
          let condensedi = String.fromCharCode(115,117,99,99,101,115,115,111,114,95,97,95,57,57,0);
          let roboto5 = 4.0;
          let reducer_: Array<any> = [745, 871, 555];
         private_iO -= 3 - parseInt(`${private_iO}`);
         actiond = roboto5 > 98.19;
         condensedi = `${reducer_.length + 2}`;
         roboto5 += parseFloat(`${parseInt(`${roboto5}`)}`);
         reducer_.push((condensedi == String.fromCharCode(49,0) ? condensedi.length : reducer_.length));
      }
       let nalyticss = String.fromCharCode(114,95,52,55,95,116,111,110,101,109,97,112,0);
         private_iO -= (2 | (actionC ? 5 : 4));
         private_iO += parseInt(`${private_iO}`) >> (Math.min(Math.abs(1), 5));
         nalyticss = `${3 >> (Math.min(2, downloadedc.length))}`;
         actionC = 62.100 > private_iO;
         nalyticss += `${((actionC ? 1 : 2))}`;
      let shrinkt = 5837423 <= nalyticss.length;
      do {
          let temperatureY = 4.0;
          let l_titleG: Map<any, any> = new Map([[String.fromCharCode(118,95,57,54,95,101,118,114,99,0),240], [String.fromCharCode(108,95,50,54,95,113,117,97,110,116,105,108,101,0),59]]);
          let bottomi = 3.0;
         nalyticss = `${nalyticss.length}`;
         temperatureY /= Math.max(2, parseFloat(`${parseInt(`${temperatureY}`) % (Math.max(4, l_titleG.size))}`));
         l_titleG = new Map([[`${l_titleG.size}`, 3]]);
         bottomi += parseFloat(`${parseInt(`${bottomi}`)}`);
         if (shrinkt) {
            break;
         }
      } while ((downloadedc != String.fromCharCode(104,0)) && shrinkt);
      termsN %= Math.max(parseInt(`${sideO}`) ^ 2, 3);
   while (2 >= (typesY.length + 3)) {
       let backV = String.fromCharCode(111,95,57,55,95,113,109,97,116,0);
       let notificationJ = true;
          let moviesE = 1.0;
         backV = `${2 & parseInt(`${moviesE}`)}`;
      let orientationu = notificationJ ? !notificationJ : notificationJ;
      do {
          let settingsj: Array<any> = [String.fromCharCode(97,114,101,97,95,113,95,51,52,0), String.fromCharCode(115,97,118,105,110,103,115,95,97,95,49,57,0)];
         notificationJ = !notificationJ;
         settingsj = [settingsj.length];
         if (orientationu) {
            break;
         }
      } while ((backV.endsWith(`${notificationJ}`)) && orientationu);
      if (backV.length > 2 && !notificationJ) {
          let rules4: Array<any> = [830, 512];
          let benefitJ: Map<any, any> = new Map([[String.fromCharCode(112,114,111,98,108,101,109,95,55,95,57,54,0),498], [String.fromCharCode(119,95,53,53,95,98,108,111,99,107,105,101,0),955], [String.fromCharCode(98,114,105,100,103,101,100,95,102,95,53,57,0),401]]);
          let p_playerR: Array<any> = [324, 944];
         backV += `${p_playerR.length}`;
         rules4 = [1 - rules4.length];
         benefitJ.set(`${rules4.length}`, 1 * benefitJ.size);
         p_playerR.push(benefitJ.size * rules4.length);
      }
         notificationJ = backV.startsWith(`${notificationJ}`);
      let google2 = notificationJ ? !notificationJ : notificationJ;
      do {
         notificationJ = (((notificationJ ? 86 : backV.length) + backV.length) <= 86);
         if (google2) {
            break;
         }
      } while (google2 && (backV.includes(`${notificationJ}`)));
         notificationJ = (51 > ((notificationJ ? 51 : backV.length) * backV.length));
      typesY = `${parseInt(`${sideO}`) << (Math.min(1, Math.abs(2)))}`;
      break;
   }
       let umengx = String.fromCharCode(117,95,54,54,95,115,117,112,101,114,0);
       let profileL = String.fromCharCode(100,101,105,110,116,101,114,108,97,99,101,95,106,95,50,52,0);
         umengx += `${3 / (Math.max(10, profileL.length))}`;
         umengx = `${profileL.length}`;
         profileL += `${umengx.length}`;
          let clear1 = 2.0;
          let orange1 = String.fromCharCode(97,114,101,116,104,101,114,101,95,97,95,51,53,0);
         profileL = `${profileL.length}`;
         clear1 -= 2;
         orange1 += `${orange1.length}`;
      for (let l = 0; l < 3; l++) {
         profileL = `${umengx.length}`;
      }
      let sellT = 7084300 >= umengx.length;
      do {
         umengx += `${(String.fromCharCode(82,0) == profileL ? profileL.length : umengx.length)}`;
         if (sellT) {
            break;
         }
      } while (sellT && (umengx.startsWith(`${profileL.length}`)));
      floaterx.set(`${w_centerz}`, floaterx.size | w_centerz.length);
      penaltyx = `${countryU.size}`;
      langV = `${penaltyx.length}`;

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
       let termsD: Map<any, any> = new Map([[String.fromCharCode(110,97,110,111,115,101,99,111,110,100,115,95,98,95,54,57,0),438], [String.fromCharCode(105,95,55,53,95,101,120,112,108,111,100,105,110,103,0),377], [String.fromCharCode(112,105,110,110,101,114,95,48,95,52,55,0),184]]);
    let checkbox0 = String.fromCharCode(100,99,115,116,114,95,113,95,53,0);
    let description_mg = String.fromCharCode(107,95,53,52,95,100,111,119,110,108,111,97,100,115,0);
    let singaporeh: Array<any> = [638, 647];
    let specM = 0.0;
    let phonek: Array<any> = [501, 31, 278];
    let logo8 = 1.0;
    let robotoQ = 3.0;
    let change3 = 4;
    let pageC: Map<any, any> = new Map([[String.fromCharCode(116,111,108,111,119,101,114,95,122,95,51,56,0),704], [String.fromCharCode(99,111,110,118,101,120,95,105,95,49,56,0),41]]);
    let read1: Array<any> = [269, 263];
    let o_positionp: Array<any> = [803, 521];
    let agreemente: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,95,116,95,54,0),430], [String.fromCharCode(121,95,49,50,95,110,110,109,111,100,0),192]]);
    let circleE: Array<any> = [845, 957, 36];
    let navigationQ = true;
    let sourcev = 5;
    let detailE = false;
      logo8 += parseInt(`${robotoQ}`);
      specM /= Math.max(parseFloat(`${3 + description_mg.length}`), 3);
       let eactq = 0;
       let settingx: Array<any> = [275, 512];
      if (eactq == 2) {
          let chinaD = 4;
         eactq += chinaD;
      }
      if (4 == (eactq | 4)) {
          let handlerw = String.fromCharCode(112,95,57,51,95,105,100,97,116,0);
         settingx.push(eactq);
         handlerw += `${3 >> (Math.min(2, handlerw.length))}`;
      }
          let anythinkk = String.fromCharCode(103,95,50,51,95,112,117,115,104,98,97,99,107,0);
          let xvodO = 3.0;
         eactq >>= Math.min(3, Math.abs(2));
         anythinkk += `${(String.fromCharCode(105,0) == anythinkk ? anythinkk.length : parseInt(`${xvodO}`))}`;
         xvodO += anythinkk.length;
      while (!settingx.includes(eactq)) {
         settingx.push(settingx.length);
         break;
      }
      if (eactq == settingx.length) {
          let ballV: Map<any, any> = new Map([[String.fromCharCode(101,118,101,114,121,98,111,100,121,95,49,95,50,54,0),false ], [String.fromCharCode(99,95,54,53,95,109,99,111,109,112,97,110,100,0),false ]]);
         eactq <<= Math.min(Math.abs(settingx.length - 2), 5);
         ballV = new Map([[`${ballV.size}`, 1]]);
      }
          let incidentc = String.fromCharCode(109,95,50,55,95,99,111,109,98,105,0);
          let lessw = 4.0;
          let liveO: Array<any> = [241, 875, 699];
         settingx = [parseInt(`${lessw}`)];
         incidentc += `${liveO.length}`;
         lessw += (String.fromCharCode(102,0) == incidentc ? incidentc.length : liveO.length);
      robotoQ -= 1;
   let actionS = checkbox0 == String.fromCharCode(107,99,114,55,108,99,0);
   do {
      checkbox0 = `${parseInt(`${logo8}`)}`;
      if (actionS) {
         break;
      }
   } while ((!checkbox0.endsWith(`${specM}`)) && actionS);
   let combineu = 5840065.0 >= specM;
   do {
      specM += parseFloat(`${parseInt(`${robotoQ}`)}`);
      if (combineu) {
         break;
      }
   } while (combineu && ((1.87 / (Math.max(5, specM))) >= 1.1));
      phonek = [singaporeh.length];

        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

   if (2 == (checkbox0.length / 4)) {
      robotoQ += checkbox0.length;
   }
      checkbox0 = `${parseInt(`${logo8}`)}`;
   let downloadingo = 5241691.0 <= robotoQ;
   do {
      robotoQ /= Math.max(3, (description_mg == String.fromCharCode(86,0) ? description_mg.length : parseInt(`${robotoQ}`)));
      if (downloadingo) {
         break;
      }
   } while ((3.67 == (robotoQ * 1.56)) && downloadingo);
       let historyg = 3;
       let hoverc = String.fromCharCode(117,95,52,48,95,97,98,99,115,0);
         hoverc = `${historyg ^ 1}`;
      let constantsY = 7132967 <= historyg;
      do {
         historyg <<= Math.min(1, Math.abs(historyg));
         if (constantsY) {
            break;
         }
      } while (constantsY && ((hoverc.length ^ 4) >= 2 && 4 >= (historyg ^ hoverc.length)));
         hoverc = `${hoverc.length >> (Math.min(Math.abs(1), 1))}`;
      while (hoverc.endsWith(`${historyg}`)) {
         historyg -= historyg % 1;
         break;
      }
         hoverc += `${hoverc.length}`;
         hoverc = `${historyg / (Math.max(hoverc.length, 8))}`;
      description_mg += `${description_mg.length}`;
   while ((3 + phonek.length) < 5) {
      logo8 -= change3;
      break;
   }
       let singleO = String.fromCharCode(104,95,51,55,95,115,116,114,105,107,101,116,104,114,111,117,103,104,115,0);
       let scheduleR = String.fromCharCode(97,95,50,48,95,112,105,99,107,0);
       let entryb = 1.0;
      for (let o = 0; o < 2; o++) {
         entryb /= Math.max(parseFloat(`${3}`), 4);
      }
         scheduleR += `${singleO.length * scheduleR.length}`;
          let phoned = 2;
         entryb -= parseFloat(`${1 - scheduleR.length}`);
         phoned /= Math.max(1, 1);
         singleO = `${scheduleR.length / (Math.max(8, singleO.length))}`;
         scheduleR += "3";
          let sellr = 1;
          let downloadedB = 1.0;
         scheduleR += `${parseInt(`${entryb}`) >> (Math.min(1, Math.abs(sellr)))}`;
         sellr <<= Math.min(Math.abs(parseInt(`${downloadedB}`) << (Math.min(Math.abs(parseInt(`${downloadedB}`)), 5))), 5);
         scheduleR += `${scheduleR.length}`;
          let weibon = String.fromCharCode(117,95,50,95,109,105,115,115,105,110,103,0);
          let adult5 = true;
         entryb *= (parseFloat(`${weibon.length + (adult5 ? 3 : 3)}`));
      for (let v = 0; v < 1; v++) {
          let componentf = String.fromCharCode(114,97,112,112,101,114,95,51,95,57,56,0);
          let expandJ = String.fromCharCode(99,100,106,112,101,103,95,50,95,54,49,0);
         entryb *= parseFloat(`${singleO.length | 3}`);
         componentf = "1";
         expandJ = `${componentf.length ^ expandJ.length}`;
      }
      specM += parseFloat(`${termsD.size}`);

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });

      change3 &= singaporeh.length;
      read1.push(o_positionp.length | 2);
   let downloadeds = String.fromCharCode(106,116,97,106,0) == description_mg;
   do {
       let benefitv = 3.0;
       let halfJ = 5;
       let ewardedJ = false;
       let listI: Array<any> = [385, 642, 25];
       let nextx = String.fromCharCode(109,95,50,95,109,97,105,108,116,111,0);
          let incident1 = String.fromCharCode(116,101,109,112,108,97,116,101,100,95,103,95,50,51,0);
         halfJ |= parseInt(`${benefitv}`) % (Math.max(3, 10));
         incident1 += `${(String.fromCharCode(84,0) == incident1 ? incident1.length : incident1.length)}`;
         ewardedJ = !ewardedJ && 6 == halfJ;
      while (1.18 >= (4.67 + benefitv) && 4 >= (nextx.length << (Math.min(Math.abs(5), 4)))) {
         nextx += `${halfJ & 3}`;
         break;
      }
         benefitv /= Math.max(parseFloat(`${3}`), 4);
          let detailsu: Array<any> = [208, 920];
          let formR = String.fromCharCode(108,111,116,116,105,101,105,116,101,109,95,55,95,53,56,0);
         ewardedJ = 41 <= nextx.length;
         detailsu.push(formR.length);
         formR = `${formR.length * detailsu.length}`;
       let policyT = String.fromCharCode(97,100,97,112,116,95,98,95,49,48,48,0);
       let temp3 = String.fromCharCode(110,95,51,51,95,109,97,112,112,101,100,0);
      for (let t = 0; t < 1; t++) {
         listI.push(nextx.length - halfJ);
      }
         benefitv *= parseFloat(`${temp3.length}`);
      let nterstitialZ = 9237094 <= listI.length;
      do {
          let unreadl = 4;
          let savev = String.fromCharCode(99,95,55,51,95,105,110,102,105,110,105,116,101,0);
         listI = [unreadl % (Math.max(parseInt(`${benefitv}`), 5))];
         unreadl %= Math.max(savev.length, 1);
         savev += `${1 | savev.length}`;
         if (nterstitialZ) {
            break;
         }
      } while ((listI.length <= 5) && nterstitialZ);
      while (policyT.length > 2 || ewardedJ) {
         ewardedJ = listI.length >= nextx.length;
         break;
      }
         listI = [1];
      while (4 < (temp3.length & 3) || (3 & temp3.length) < 2) {
          let yingO = 1.0;
          let settings7 = 3.0;
          let user8 = String.fromCharCode(113,95,54,51,95,115,101,116,108,101,99,116,101,100,0);
          let whiteU: Map<any, any> = new Map([[String.fromCharCode(110,95,49,48,95,111,110,116,101,120,116,0),true ], [String.fromCharCode(120,95,53,57,95,100,97,116,101,0),false ], [String.fromCharCode(115,101,103,102,101,97,116,117,114,101,115,95,105,95,57,49,0),true ]]);
          let side_ = 1;
         listI.push(whiteU.size * temp3.length);
         yingO -= parseFloat(`${side_ ^ user8.length}`);
         settings7 -= parseFloat(`${side_}`);
         user8 = `${parseInt(`${settings7}`)}`;
         whiteU = new Map([[`${settings7}`, user8.length << (Math.min(Math.abs(2), 4))]]);
         break;
      }
         nextx += `${policyT.length >> (Math.min(Math.abs(2), 2))}`;
         ewardedJ = ((policyT.length * (ewardedJ ? 98 : policyT.length)) == 98);
         ewardedJ = (29 == ((ewardedJ ? policyT.length : 29) % (Math.max(policyT.length, 4))));
      description_mg += `${phonek.length & 2}`;
      if (downloadeds) {
         break;
      }
   } while ((description_mg.length > robotoQ) && downloadeds);
      robotoQ *= o_positionp.length ^ 3;
   while (5 < (phonek.length ^ 4) && (4 ^ description_mg.length) < 1) {
      phonek.push(read1.length >> (Math.min(Math.abs(1), 5)));
      break;
   }
   while ((pageC.size + 3) > 2) {
       let upgrade3 = String.fromCharCode(108,95,55,53,95,115,111,110,111,0);
       let popupg = false;
       let connectiony: Map<any, any> = new Map([[String.fromCharCode(112,95,51,57,95,115,97,110,105,116,105,122,101,0),867], [String.fromCharCode(105,95,51,49,95,105,109,101,114,0),351], [String.fromCharCode(118,116,101,115,116,95,121,95,55,54,0),185]]);
       let buttonm = String.fromCharCode(112,97,114,97,108,108,101,108,95,55,95,50,52,0);
       let weiboe = 4.0;
      if (3 > upgrade3.length) {
         upgrade3 = `${connectiony.size % (Math.max(1, buttonm.length))}`;
      }
         connectiony.set(`${popupg}`, ((popupg ? 2 : 3) << (Math.min(Math.abs(connectiony.size), 3))));
          let signinupc = String.fromCharCode(116,117,114,110,95,111,95,52,54,0);
          let redirectX = String.fromCharCode(108,111,119,98,100,95,111,95,50,56,0);
         upgrade3 += "2";
         signinupc = `${signinupc.length}`;
         redirectX = `${redirectX.length}`;
       let episodeZ = String.fromCharCode(113,95,51,54,95,97,112,112,108,105,101,100,0);
      for (let t = 0; t < 1; t++) {
         weiboe /= Math.max(2, (parseFloat(`${(popupg ? 1 : 2) % (Math.max(8, parseInt(`${weiboe}`)))}`)));
      }
      for (let c = 0; c < 1; c++) {
          let readv = 5.0;
          let u_centerk: Map<any, any> = new Map([[String.fromCharCode(108,101,97,107,95,117,95,51,52,0),600], [String.fromCharCode(115,95,52,56,95,108,105,98,97,118,99,111,100,101,99,0),98]]);
         buttonm += `${(parseInt(`${readv}`) + (popupg ? 3 : 1))}`;
         readv *= 2 ^ u_centerk.size;
         u_centerk.set(`${u_centerk.size}`, u_centerk.size << (Math.min(Math.abs(3), 4)));
      }
      while (upgrade3.endsWith(`${buttonm.length}`)) {
         upgrade3 += `${((popupg ? 2 : 5))}`;
         break;
      }
         upgrade3 += `${1 - upgrade3.length}`;
          let phonef = String.fromCharCode(103,114,105,100,95,100,95,57,0);
          let logo0 = true;
          let with_bZ = String.fromCharCode(118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,95,53,95,50,56,0);
         popupg = logo0;
         phonef += `${phonef.length}`;
         with_bZ += `${phonef.length}`;
         upgrade3 += `${connectiony.size << (Math.min(Math.abs(1), 1))}`;
         popupg = !episodeZ.endsWith(`${weiboe}`);
      checkbox0 += `${o_positionp.length}`;
      break;
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
                            : require("@static/images/actionSaveBackward.png")
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
