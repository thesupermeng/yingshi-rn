import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import { useAppDispatch, useSelector } from "@hooks/ww_catagory_neon";
import { CPressable, CTextInput } from "../../../../components/atoms";
import SendIcon from '@static/images/renderPauseLibffmpegkit.svg';
import SendFillIcon from '@static/images/middlewareCatagory.svg';
import { CHAT_BOX_MAX_ITEM, CHAT_SEND_COOLDOWN, COMMENT_MAX_INPUT } from "@utility/ww_icon";
import { wwSharemodal } from "@type/ww_dycreator_result";
import { wwBggradient } from "../../../../api/ww_tail_tail";
import { wwDacccfaabfbcbadeebddcabacdffdbcEventsplash } from "@redux/reducers/ww_mbbanner";
import { useQuery } from "@tanstack/react-query";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux/actions/ww_single";
import { Avatar } from "@rneui/base";
import { useIsFocused, useTheme } from "@react-navigation/native";

import createStyles from "./ww_utils_orangeclock";
import { wwSports } from "../../../types/ww_dice";
import { UnreadCard } from "../../../../components/chat/ww_profileinactive";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

type wwIndexDice = {
    matchID: string,
    streamer: wwSports,
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
}: wwIndexDice) => {
    const { colors } = useTheme();

    const styles = useMemo(() => createStyles({
        colors,
    }), [colors]);

    const PIN_YIN_ACCEPTED = 20;

    const chatState = useSelector<wwDacccfaabfbcbadeebddcabacdffdbcEventsplash>('chatReducer');
    const userState = useSelector<wwVertical>('userReducer');
    const [cooldownTimeout, setCooldownTimeout] = useState<NodeJS.Timeout | null>(null);
    const [comment, setComment] = useState('');
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<wwSharemodal> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = wwBodan.isLogin(userState.user);

    const appDispatch = useAppDispatch();

    const { data: chats } = useQuery({
        queryKey: ['liveChats', matchID],
        queryFn: () => wwBggradient.getStreamerPinMsg(),
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

    const renderItem = useCallback(({ item }: { item: wwSharemodal }) => {
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
       let auto_pH = String.fromCharCode(108,111,103,103,101,114,95,102,95,53,0);
    let injuryU = 2.0;
    let watch9 = 2.0;
    let heartg = String.fromCharCode(115,107,101,121,108,105,115,116,95,113,95,54,57,0);
    let libaneF = String.fromCharCode(105,95,51,52,95,109,98,98,121,0);
    let applicationa = String.fromCharCode(106,99,104,117,102,102,95,102,95,49,53,0);
    let libfbK = String.fromCharCode(105,109,105,116,97,116,101,95,119,95,53,0);
    let nbatrophyK = 3.0;
    let dark4 = String.fromCharCode(97,108,105,97,115,95,109,95,54,56,0);
      watch9 /= Math.max(1, parseFloat(`${3}`));
   while (heartg.endsWith(`${libaneF.length}`)) {
      libaneF = "1";
      break;
   }

        if (comment.trim().length === 0 || !isCommentValid) return;

   for (let x = 0; x < 2; x++) {
       let coreP: Array<any> = [644, 94];
       let rncore0 = 4.0;
      while (3.4 >= (parseFloat(`${coreP.length}`) - rncore0)) {
          let trashO = 4.0;
          let predictionbannersharedC = false;
          let assiste = String.fromCharCode(101,95,50,53,95,99,103,117,0);
         coreP = [((predictionbannersharedC ? 5 : 3) - assiste.length)];
         trashO += parseInt(`${trashO}`) / (Math.max(parseInt(`${trashO}`), 5));
         predictionbannersharedC = trashO > 22.51;
         break;
      }
      while (coreP.length >= parseInt(`${rncore0}`)) {
          let short_2yE: Map<any, any> = new Map([[String.fromCharCode(105,110,102,111,114,109,97,116,105,111,110,95,101,95,51,51,0),166], [String.fromCharCode(107,95,53,55,95,115,117,98,116,114,97,99,116,105,110,103,0),11]]);
         rncore0 *= parseFloat(`${3}`);
         short_2yE.set(`${short_2yE.size}`, short_2yE.size);
         break;
      }
          let mbnativeF = String.fromCharCode(106,95,53,49,95,117,115,101,114,115,112,97,99,101,0);
         coreP = [(mbnativeF == String.fromCharCode(116,0) ? mbnativeF.length : parseInt(`${rncore0}`))];
      while ((parseFloat(`${coreP.length}`) - rncore0) > 5.41) {
          let tempX = true;
         coreP.push(parseInt(`${rncore0}`));
         tempX = !tempX && tempX;
         break;
      }
      let code9 = 9311201 <= coreP.length;
      do {
          let detailY = 4;
         coreP.push(2);
         detailY <<= Math.min(4, Math.abs(1 + detailY));
         if (code9) {
            break;
         }
      } while (code9 && ((rncore0 * 2.11) > 2.16 && 1.74 > (rncore0 * 2.11)));
      if (rncore0 == 4.38) {
         rncore0 *= parseFloat(`${3}`);
      }
      auto_pH += "3";
   }
      watch9 /= Math.max(parseFloat(`${applicationa.length % (Math.max(1, 1))}`), 3);

        if (cooldownTimeout !== null) {

      watch9 += parseFloat(`${libaneF.length ^ 2}`);
   let yellowredcardD = String.fromCharCode(103,100,117,120,51,101,111,95,0) == libfbK;
   do {
      libfbK = `${1 & heartg.length}`;
      if (yellowredcardD) {
         break;
      }
   } while ((libfbK.length > auto_pH.length) && yellowredcardD);
            return;
        }

        appDispatch(sendChatMessage({
            message: comment,
        }));

   for (let a = 0; a < 2; a++) {
      heartg = `${applicationa.length % (Math.max(9, parseInt(`${watch9}`)))}`;
   }
   let closep = String.fromCharCode(56,116,99,50,113,57,112,0) == libfbK;
   do {
      libfbK = `${libaneF.length & 2}`;
      if (closep) {
         break;
      }
   } while (((watch9 * parseFloat(`${libfbK.length}`)) > 4.81 || 4.81 > (parseFloat(`${libfbK.length}`) * watch9)) && closep);

        setCooldownTimeout(setTimeout(() => {

   while ((injuryU + auto_pH.length) <= 1.42 && 4 <= (5 + parseInt(`${injuryU}`))) {
      injuryU += auto_pH.length >> (Math.min(Math.abs(2), 1));
      break;
   }
   for (let x = 0; x < 3; x++) {
      libfbK = `${libaneF.length}`;
   }
            setCooldownTimeout(null);
        }, CHAT_SEND_COOLDOWN * 1000));

      injuryU += libfbK.length;
   let condensedx = 6933963.0 <= watch9;
   do {
       let pushg = String.fromCharCode(112,95,56,52,95,117,110,105,110,115,116,97,108,108,0);
       let dialogw = String.fromCharCode(102,95,51,56,95,105,104,100,114,0);
      let libpangleflippedW = String.fromCharCode(102,120,104,109,113,98,0) == dialogw;
      do {
          let filledq: Map<any, any> = new Map([[String.fromCharCode(104,95,49,49,95,97,118,99,111,100,101,99,0),414], [String.fromCharCode(105,110,118,105,116,101,100,95,56,95,57,50,0),919], [String.fromCharCode(100,95,55,57,95,112,97,103,101,108,105,115,116,0),341]]);
         dialogw = `${pushg.length}`;
         filledq.set(`${filledq.size}`, filledq.size - 3);
         if (libpangleflippedW) {
            break;
         }
      } while (libpangleflippedW && (dialogw.length >= pushg.length));
         pushg += `${dialogw.length}`;
         pushg = `${2 / (Math.max(6, dialogw.length))}`;
      let shielddoneo = 6836612 >= dialogw.length;
      do {
         dialogw = `${pushg.length}`;
         if (shielddoneo) {
            break;
         }
      } while ((dialogw == String.fromCharCode(105,0) || pushg == String.fromCharCode(77,0)) && shielddoneo);
         pushg = `${(String.fromCharCode(104,0) == pushg ? dialogw.length : pushg.length)}`;
          let nativemodulel: Array<any> = [String.fromCharCode(101,110,100,95,56,95,52,50,0), String.fromCharCode(99,104,101,99,107,115,116,114,105,100,101,95,103,95,55,50,0), String.fromCharCode(107,95,49,49,95,101,107,121,0)];
         pushg = `${nativemodulel.length / (Math.max(dialogw.length, 5))}`;
      watch9 -= parseFloat(`${pushg.length}`);
      if (condensedx) {
         break;
      }
   } while ((5.72 < (watch9 + 1.28) && 5 < (parseInt(`${watch9}`) + applicationa.length)) && condensedx);

        setComment('');

       let attributedstring4 = false;
         attributedstring4 = (!attributedstring4 ? !attributedstring4 : attributedstring4);
         attributedstring4 = (attributedstring4 ? !attributedstring4 : attributedstring4);
      if (!attributedstring4) {
          let nterstitialH: Array<any> = [656, 958, 381];
          let filel = 5;
         attributedstring4 = nterstitialH.length < 92;
         nterstitialH = [1 << (Math.min(2, Math.abs(filel)))];
         filel += filel >> (Math.min(Math.abs(filel), 1));
      }
      nbatrophyK /= Math.max(parseFloat(`${1 - auto_pH.length}`), 4);
       let questicon7 = String.fromCharCode(112,95,52,95,107,105,99,107,101,100,0);
         questicon7 += `${(String.fromCharCode(101,0) == questicon7 ? questicon7.length : questicon7.length)}`;
       let animations2 = 5;
       let proxye = 3;
         animations2 &= 3;
      heartg = `${(String.fromCharCode(68,0) == libfbK ? libfbK.length : parseInt(`${injuryU}`))}`;
        Keyboard.dismiss();
    }, [isCommentValid, comment, cooldownTimeout]);

    const onUserScroll = () => {
       let matchi = String.fromCharCode(115,95,50,53,0);
    let e_centerd = 1;
    let resendi: Map<any, any> = new Map([[String.fromCharCode(109,95,56,50,95,115,101,108,101,99,116,105,111,110,115,0),68], [String.fromCharCode(116,95,53,57,95,115,105,112,114,0),506]]);
    let iconstarV = 2;
    let nterstitialS = 1.0;
    let albumU = 1;
    let nextj = 5.0;
    let libffmpegkitI = 1;
    let submit7 = false;
    let thumbnails: Map<any, any> = new Map([[String.fromCharCode(112,95,54,95,97,97,99,101,110,99,0),true ], [String.fromCharCode(104,95,57,49,95,100,114,97,103,0),false ], [String.fromCharCode(118,95,54,95,115,113,108,105,116,101,112,97,103,101,114,0),true ]]);
    let qaag_ = String.fromCharCode(100,101,97,108,108,111,99,97,116,101,100,95,49,95,50,56,0);
    let reactnativejsK = String.fromCharCode(105,95,52,55,95,99,104,101,99,107,101,100,0);
      nterstitialS -= parseFloat(`${2}`);
   let iconarrowright8 = 6899377 <= matchi.length;
   do {
      matchi = `${albumU}`;
      if (iconarrowright8) {
         break;
      }
   } while ((iconstarV > matchi.length) && iconarrowright8);
      libffmpegkitI /= Math.max(2, parseInt(`${nterstitialS}`));
   for (let r = 0; r < 1; r++) {
       let reducer1 = String.fromCharCode(102,105,108,116,101,114,95,56,95,49,56,0);
       let renewL = String.fromCharCode(103,95,55,95,102,105,110,100,0);
       let previewp = 2;
       let pangleK = 4.0;
          let completez = String.fromCharCode(112,97,103,101,111,117,116,95,50,95,49,52,0);
          let codeY = 5.0;
         reducer1 = `${(String.fromCharCode(87,0) == renewL ? renewL.length : reducer1.length)}`;
         completez += `${completez.length + parseInt(`${codeY}`)}`;
         codeY += completez.length;
      if (!reducer1.startsWith(renewL)) {
         renewL = `${renewL.length ^ previewp}`;
      }
      if (renewL.length > 3) {
         reducer1 += `${parseInt(`${pangleK}`)}`;
      }
       let holderG = String.fromCharCode(103,95,54,50,95,112,114,111,104,105,98,105,116,0);
         renewL += `${holderG.length}`;
      let privacyX = pangleK >= 7813178.0;
      do {
         pangleK /= Math.max(5, parseFloat(`${parseInt(`${pangleK}`) - 2}`));
         if (privacyX) {
            break;
         }
      } while ((!renewL.includes(`${pangleK}`)) && privacyX);
         pangleK -= (parseFloat(`${String.fromCharCode(53,0) == renewL ? renewL.length : previewp}`));
          let type_2bm: Map<any, any> = new Map([[String.fromCharCode(116,95,49,54,95,97,117,116,104,111,114,105,116,121,0),734], [String.fromCharCode(97,99,107,100,114,111,112,95,102,95,55,52,0),958]]);
          let matchactive7 = 1.0;
         pangleK *= parseFloat(`${renewL.length & 1}`);
         type_2bm.set(`${matchactive7}`, type_2bm.size);
         matchactive7 += type_2bm.size;
         pangleK += parseFloat(`${2 << (Math.min(4, reducer1.length))}`);
      if (renewL.length > holderG.length) {
          let libturbomodulejsijniK = 2;
          let bootsplash7 = String.fromCharCode(100,105,115,112,115,97,98,108,101,95,106,95,51,51,0);
          let rightj = String.fromCharCode(101,120,108,117,100,101,100,95,99,95,52,53,0);
          let sigmobM = 0.0;
         renewL += `${(renewL == String.fromCharCode(102,0) ? holderG.length : renewL.length)}`;
         libturbomodulejsijniK /= Math.max(libturbomodulejsijniK - rightj.length, 1);
         bootsplash7 = `${parseInt(`${sigmobM}`)}`;
         rightj += `${bootsplash7.length}`;
         sigmobM -= 1;
      }
         previewp ^= renewL.length;
         pangleK += parseFloat(`${parseInt(`${pangleK}`) + previewp}`);
      nterstitialS -= (parseFloat(`${parseInt(`${nterstitialS}`) << (Math.min(5, Math.abs((submit7 ? 4 : 2))))}`));
   }
      albumU >>= Math.min(Math.abs(parseInt(`${nterstitialS}`)), 3);
   let stationsM = submit7 ? !submit7 : submit7;
   do {
       let redgoal0 = 2.0;
         redgoal0 /= Math.max(4, 3 / (Math.max(5, parseInt(`${redgoal0}`))));
          let nativeexn = 0;
         redgoal0 += 2 + parseInt(`${redgoal0}`);
         nativeexn <<= Math.min(2, Math.abs(1 - nativeexn));
       let stationV = String.fromCharCode(115,95,50,95,114,111,113,118,105,100,101,111,0);
      submit7 = thumbnails.get(`${e_centerd}`) != null;
      if (stationsM) {
         break;
      }
   } while (stationsM && ((4.64 - nextj) < 1.11 && 4.64 < nextj));
   for (let b = 0; b < 1; b++) {
      albumU += thumbnails.size;
   }
      nterstitialS -= parseFloat(`${2}`);
      iconstarV -= libffmpegkitI;
      submit7 = 86.51 == nterstitialS && 86.51 == nextj;
      iconstarV /= Math.max(1, resendi.size);
       let rightP = 3.0;
      let logoh = 8176744.0 <= rightP;
      do {
          let style0 = String.fromCharCode(111,95,50,54,95,100,101,99,111,114,114,101,108,97,116,101,0);
          let cancelt = String.fromCharCode(114,101,97,108,105,102,121,95,98,95,51,56,0);
          let modityq: Array<any> = [String.fromCharCode(119,95,49,52,95,119,105,110,100,105,110,103,0), String.fromCharCode(103,95,55,53,95,112,114,111,116,111,98,117,102,0)];
          let turnt: Array<any> = [466, 302, 380];
          let textinputA = String.fromCharCode(112,111,112,112,101,100,95,121,95,54,48,0);
         rightP /= Math.max(5, parseFloat(`${cancelt.length}`));
         style0 += `${1 * style0.length}`;
         cancelt += "2";
         modityq = [modityq.length];
         turnt.push(turnt.length);
         textinputA = "1";
         if (logoh) {
            break;
         }
      } while ((3.72 <= (4 * rightP)) && logoh);
       let privilegeF = 1;
         privilegeF >>= Math.min(1, Math.abs(parseInt(`${rightP}`) - privilegeF));
      thumbnails.set(matchi, 3 % (Math.max(8, matchi.length)));
   if (2.80 == nterstitialS) {
       let savef = 3.0;
      for (let b = 0; b < 2; b++) {
         savef *= parseFloat(`${parseInt(`${savef}`)}`);
      }
         savef += parseFloat(`${parseInt(`${savef}`) >> (Math.min(Math.abs(parseInt(`${savef}`)), 5))}`);
      let libhermesx = 9820045.0 >= savef;
      do {
         savef /= Math.max(parseFloat(`${parseInt(`${savef}`)}`), 3);
         if (libhermesx) {
            break;
         }
      } while (((5.43 + savef) >= 4.66 || 5.26 >= (savef / 5.43)) && libhermesx);
      albumU ^= 3;
   }
      e_centerd <<= Math.min(1, Math.abs(albumU));
      iconstarV |= parseInt(`${nextj}`);
   for (let q = 0; q < 2; q++) {
      iconstarV %= Math.max(1, albumU);
   }
      albumU += parseInt(`${nterstitialS}`);
   for (let a = 0; a < 2; a++) {
      albumU <<= Math.min(Math.abs(iconstarV), 4);
   }
       let profilee = String.fromCharCode(97,110,111,110,121,109,111,117,115,95,48,95,53,56,0);
         profilee = `${profilee.length % 3}`;
       let libloggerb = false;
         libloggerb = (7 > (profilee.length & (libloggerb ? 7 : profilee.length)));
      nextj -= iconstarV ^ profilee.length;
   for (let s = 0; s < 2; s++) {
      matchi += `${resendi.size / (Math.max(matchi.length, 1))}`;
   }
   let mbnativeO = libffmpegkitI >= 6564470;
   do {
      libffmpegkitI <<= Math.min(Math.abs(3), 5);
      if (mbnativeO) {
         break;
      }
   } while ((Array.from(thumbnails.values()).includes(libffmpegkitI)) && mbnativeO);

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
       let cancelz = 0;
    let tickG = 0;
    let imagesW = String.fromCharCode(109,111,100,112,108,117,103,95,114,95,57,53,0);
    let sellW = 5;
    let dangerN = 5.0;
    let whatsapph = 1;
    let becomey: Array<any> = [705, 441, 305];
    let starp: Array<any> = [511, 164];
    let typing8 = String.fromCharCode(97,110,99,104,111,114,95,121,95,52,55,0);
    let baseline0 = 1.0;
    let subs5 = 0.0;
    let giftbuttonY: Map<any, any> = new Map([[String.fromCharCode(102,97,99,116,111,114,97,98,108,101,95,98,95,54,55,0),172], [String.fromCharCode(101,95,50,56,95,109,105,115,117,115,101,0),514], [String.fromCharCode(109,95,53,57,95,112,101,101,114,105,100,0),404]]);
    let componentsk: Array<any> = [757, 371, 768];
      whatsapph += sellW | 1;
   let videocommonJ = 7986272 >= typing8.length;
   do {
       let whatsapp0 = false;
       let classes6 = String.fromCharCode(112,108,97,116,102,111,114,109,95,119,95,51,57,0);
       let fulla = String.fromCharCode(121,95,55,52,95,115,109,107,97,0);
       let textlayoutmanageri = 0;
         fulla += `${classes6.length}`;
      for (let q = 0; q < 2; q++) {
          let fullt = 0.0;
          let full2 = 4;
         fulla = `${parseInt(`${fullt}`)}`;
         fullt *= parseFloat(`${full2 * 1}`);
         full2 *= full2;
      }
      while (2 > (fulla.length + 3)) {
         textlayoutmanageri ^= (classes6.length / (Math.max(8, (whatsapp0 ? 3 : 2))));
         break;
      }
         whatsapp0 = 73 < fulla.length;
          let securityR = String.fromCharCode(102,95,49,56,0);
         fulla += `${textlayoutmanageri + fulla.length}`;
         securityR += `${securityR.length}`;
      let renewL = textlayoutmanageri >= 5301706;
      do {
         textlayoutmanageri &= 2 - textlayoutmanageri;
         if (renewL) {
            break;
         }
      } while (renewL && (fulla.length == textlayoutmanageri));
      let yellowvideolive9 = fulla == String.fromCharCode(105,114,97,0);
      do {
          let friends9 = 2;
          let viewer0 = 3.0;
         fulla = "1";
         friends9 *= friends9;
         viewer0 += parseFloat(`${friends9 & 1}`);
         if (yellowvideolive9) {
            break;
         }
      } while (yellowvideolive9 && (1 <= classes6.length));
      for (let h = 0; h < 3; h++) {
          let playlistm: Array<any> = [151, 627, 710];
          let zhuboE: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,97,114,116,105,116,105,111,110,0),754], [String.fromCharCode(115,97,116,100,120,95,102,95,54,53,0),69], [String.fromCharCode(100,101,109,117,120,101,114,95,53,95,56,56,0),301]]);
          let spinnerD = String.fromCharCode(118,95,57,50,95,105,112,113,102,0);
         classes6 = `${(String.fromCharCode(86,0) == spinnerD ? spinnerD.length : zhuboE.size)}`;
         playlistm.push(playlistm.length & 3);
         zhuboE = new Map([[`${playlistm.length}`, playlistm.length]]);
      }
      while ((textlayoutmanageri + 5) <= 2) {
         textlayoutmanageri /= Math.max(3, 2);
         break;
      }
      let expandi = 6335879 >= fulla.length;
      do {
         fulla += `${fulla.length}`;
         if (expandi) {
            break;
         }
      } while ((4 > fulla.length) && expandi);
          let yellowredcardj = true;
          let umengn: Map<any, any> = new Map([[String.fromCharCode(103,115,117,98,95,104,95,52,48,0),671], [String.fromCharCode(107,95,53,48,95,97,110,103,101,0),489]]);
         fulla = `${((whatsapp0 ? 3 : 4) / 1)}`;
         yellowredcardj = !yellowredcardj;
         umengn = new Map([[`${umengn.size}`, 1]]);
         textlayoutmanageri += classes6.length;
      typing8 = `${((whatsapp0 ? 5 : 2) * parseInt(`${baseline0}`))}`;
      if (videocommonJ) {
         break;
      }
   } while ((baseline0 < 2.31) && videocommonJ);
       let executorp = String.fromCharCode(112,116,115,95,97,95,54,53,0);
      let directQ = executorp == String.fromCharCode(102,109,119,109,115,108,122,0);
      do {
         executorp = `${executorp.length << (Math.min(4, executorp.length))}`;
         if (directQ) {
            break;
         }
      } while ((executorp.length == executorp.length) && directQ);
      if (executorp.length < 2) {
         executorp = `${executorp.length / (Math.max(9, executorp.length))}`;
      }
      for (let a = 0; a < 3; a++) {
         executorp += `${executorp.length & 1}`;
      }
      baseline0 /= Math.max(1 | executorp.length, 3);
   while (baseline0 > 1.61) {
      baseline0 += imagesW.length;
      break;
   }
   for (let y = 0; y < 1; y++) {
      cancelz <<= Math.min(Math.abs(3), 1);
   }
      becomey = [sellW];
       let libavfilterB = 0;
       let pingp = String.fromCharCode(112,111,108,108,105,110,103,95,117,95,51,55,0);
       let subbasketballplayer3 = String.fromCharCode(101,95,53,48,95,97,114,114,97,110,103,101,100,0);
      for (let d = 0; d < 1; d++) {
         libavfilterB |= subbasketballplayer3.length;
      }
          let default_bg = 4.0;
          let steph = 0.0;
          let side_ = 2;
         libavfilterB |= 1;
         default_bg /= Math.max(5, parseFloat(`${parseInt(`${default_bg}`) / (Math.max(parseInt(`${steph}`), 9))}`));
         steph -= parseInt(`${steph}`) | side_;
         side_ %= Math.max(4, 3 ^ parseInt(`${default_bg}`));
         pingp = `${(String.fromCharCode(122,0) == subbasketballplayer3 ? libavfilterB : subbasketballplayer3.length)}`;
      let navigationf = pingp == String.fromCharCode(120,95,53,0);
      do {
         pingp = `${pingp.length}`;
         if (navigationf) {
            break;
         }
      } while (navigationf && (subbasketballplayer3 == pingp));
       let profileactivee = 4;
       let componentregistryG = 1.0;
         pingp += "2";
         profileactivee *= profileactivee;
      while (1 >= (2 + subbasketballplayer3.length) && (subbasketballplayer3.length + profileactivee) >= 2) {
         profileactivee -= subbasketballplayer3.length % (Math.max(2, 7));
         break;
      }
      whatsapph /= Math.max(typing8.length | 1, 3);
   if ((1 | cancelz) > 3) {
       let libavutilY = 3;
       let jingdong1 = 2.0;
       let viewerY = String.fromCharCode(102,99,117,110,112,117,98,108,105,115,104,95,53,95,54,56,0);
       let imagenetworkerro = String.fromCharCode(113,95,54,53,95,99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,0);
       let mbridgeR = 2.0;
       let final_5T = 5;
         final_5T <<= Math.min(4, Math.abs(viewerY.length % (Math.max(imagenetworkerro.length, 9))));
      if (3 <= final_5T) {
          let assist4 = String.fromCharCode(112,95,54,56,95,97,118,99,99,0);
          let pressureM: Array<any> = [35, 177];
          let yellowvideoliveP = 4.0;
          let spinnerV = String.fromCharCode(101,105,112,118,95,102,95,54,56,0);
          let mintegralL = 3.0;
         mbridgeR *= parseFloat(`${final_5T << (Math.min(Math.abs(2), 3))}`);
         assist4 += `${parseInt(`${mintegralL}`)}`;
         pressureM = [1];
         yellowvideoliveP -= (parseFloat(`${spinnerV == String.fromCharCode(73,0) ? spinnerV.length : parseInt(`${mintegralL}`)}`));
      }
          let viewere = 4.0;
          let whistleorange8 = 1.0;
         final_5T += 2;
         viewere -= parseInt(`${whistleorange8}`) - 2;
         whistleorange8 /= Math.max(3, 3);
       let telemetryD = String.fromCharCode(105,95,57,48,95,116,101,109,112,110,97,109,101,0);
         jingdong1 -= parseFloat(`${imagenetworkerro.length / (Math.max(viewerY.length, 7))}`);
         final_5T |= (String.fromCharCode(51,0) == imagenetworkerro ? imagenetworkerro.length : viewerY.length);
         imagenetworkerro += `${final_5T * 1}`;
         telemetryD += `${final_5T}`;
      for (let b = 0; b < 2; b++) {
          let fieldZ = String.fromCharCode(100,99,98,108,111,99,107,0);
          let tempnodatagifh = String.fromCharCode(97,95,56,57,95,99,111,108,117,109,110,115,0);
          let styless: Array<any> = [661, 733];
          let liveendmodallogou: Array<any> = [String.fromCharCode(109,95,49,49,95,118,101,114,105,102,105,101,100,0), String.fromCharCode(115,119,105,116,99,104,105,110,103,95,118,95,49,49,0)];
          let logouser2 = String.fromCharCode(97,118,99,105,110,116,114,97,95,120,95,53,52,0);
         jingdong1 *= parseFloat(`${imagenetworkerro.length}`);
         fieldZ = `${fieldZ.length * 3}`;
         tempnodatagifh = `${tempnodatagifh.length}`;
         styless.push((String.fromCharCode(54,0) == tempnodatagifh ? liveendmodallogou.length : tempnodatagifh.length));
         liveendmodallogou = [liveendmodallogou.length % 3];
         logouser2 += `${tempnodatagifh.length << (Math.min(Math.abs(3), 2))}`;
      }
      let confige = jingdong1 >= 6505096.0;
      do {
         jingdong1 += parseFloat(`${libavutilY}`);
         if (confige) {
            break;
         }
      } while ((viewerY.length <= 2) && confige);
      tickG *= 2;
   }
       let scheduler7 = 1.0;
       let libglogS = String.fromCharCode(116,95,54,48,95,98,97,110,110,101,114,0);
       let nativeexO = 5.0;
       let lessI = 3.0;
          let delegate_35j = String.fromCharCode(99,108,111,115,105,110,103,95,113,95,53,57,0);
         nativeexO -= parseInt(`${nativeexO}`) + 2;
         delegate_35j += `${(String.fromCharCode(77,0) == delegate_35j ? delegate_35j.length : delegate_35j.length)}`;
         lessI -= parseInt(`${lessI}`) + 1;
      if ((3.45 + lessI) < 5.5 && (3.45 + nativeexO) < 3.2) {
         lessI *= 3;
      }
      for (let e = 0; e < 3; e++) {
          let submitP: Array<any> = [644, 653];
          let defaultroombgT: Array<any> = [60, 172, 183];
          let topicZ = 4.0;
          let dycreatorr: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,100,95,49,95,50,54,0),String.fromCharCode(116,101,97,109,115,95,122,95,50,48,0)], [String.fromCharCode(100,101,115,116,114,117,99,116,105,118,101,95,113,95,55,53,0),String.fromCharCode(114,108,111,116,116,105,101,95,48,95,57,0)], [String.fromCharCode(103,95,50,55,95,114,97,115,116,101,114,0),String.fromCharCode(119,97,108,108,112,97,112,101,114,115,95,104,95,55,53,0)]]);
         lessI -= 1;
         submitP.push(1);
         defaultroombgT = [parseInt(`${topicZ}`)];
         topicZ += 1 - defaultroombgT.length;
         dycreatorr.set(`${topicZ}`, 3 + dycreatorr.size);
      }
      while (2 > (libglogS.length - parseInt(`${scheduler7}`)) || (scheduler7 - 4.61) > 5.59) {
          let orangeu = false;
         libglogS = `${2 ^ parseInt(`${scheduler7}`)}`;
         orangeu = !orangeu;
         break;
      }
      imagesW += `${tickG}`;

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
       let baselineb: Map<any, any> = new Map([[String.fromCharCode(100,101,113,117,97,110,116,105,122,97,116,105,111,110,95,106,95,57,54,0),916], [String.fromCharCode(98,97,99,107,95,111,95,57,48,0),852], [String.fromCharCode(109,108,115,100,95,99,95,52,51,0),150]]);
    let bridgey = String.fromCharCode(115,112,101,97,107,101,114,115,95,99,95,57,55,0);
    let reactnativeratingsO = 1.0;
    let arrowo = true;
    let leftC = 1.0;
    let twitterY = true;
    let targetX = 4;
    let libavutilO = String.fromCharCode(109,95,52,51,95,98,105,116,97,108,108,111,99,0);
    let predictionactiveN: Map<any, any> = new Map([[String.fromCharCode(118,95,54,54,95,108,105,115,116,110,101,114,115,0),true ], [String.fromCharCode(115,116,100,97,116,111,109,105,99,95,103,95,53,50,0),false ], [String.fromCharCode(105,95,56,52,95,104,101,114,109,105,116,101,0),false ]]);
    let eventY: Array<any> = [String.fromCharCode(105,115,109,101,109,115,101,116,95,99,95,51,57,0), String.fromCharCode(99,97,98,97,99,95,52,95,56,54,0)];
    let tempa = String.fromCharCode(103,97,116,101,95,48,95,50,57,0);
   for (let b = 0; b < 3; b++) {
      bridgey = `${parseInt(`${reactnativeratingsO}`)}`;
   }
      twitterY = 44 <= libavutilO.length;
   for (let z = 0; z < 3; z++) {
      baselineb.set(`${reactnativeratingsO}`, parseInt(`${reactnativeratingsO}`));
   }
   if (!bridgey.startsWith(`${reactnativeratingsO}`)) {
       let description_q4Y: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,97,109,105,110,102,111,95,49,95,53,52,0),true ], [String.fromCharCode(107,95,57,48,95,109,101,114,103,101,114,0),false ], [String.fromCharCode(112,101,115,113,95,117,95,56,49,0),true ]]);
       let buildc = String.fromCharCode(97,95,56,55,95,105,110,99,108,117,115,105,111,110,0);
       let qaagR = 2;
       let frame__44 = 5.0;
          let downarrown = false;
          let dependencies3 = String.fromCharCode(105,95,52,51,95,104,101,97,100,114,111,111,109,0);
         frame__44 += parseFloat(`${qaagR - 3}`);
         downarrown = dependencies3.length > 69;
         dependencies3 += `${(dependencies3.length & (downarrown ? 2 : 3))}`;
         qaagR *= description_q4Y.size - 2;
      while (frame__44 >= qaagR) {
         qaagR %= Math.max(qaagR - 2, 2);
         break;
      }
         frame__44 *= parseFloat(`${parseInt(`${frame__44}`)}`);
      for (let k = 0; k < 2; k++) {
         buildc += `${parseInt(`${frame__44}`)}`;
      }
      for (let i = 0; i < 2; i++) {
         description_q4Y = new Map([[`${description_q4Y.size}`, 1]]);
      }
         description_q4Y = new Map([[buildc, 3 >> (Math.min(2, buildc.length))]]);
      while (2.75 == (4.58 / (Math.max(6, frame__44))) && (4.58 / (Math.max(5, frame__44))) == 3.60) {
         qaagR *= (String.fromCharCode(106,0) == buildc ? parseInt(`${frame__44}`) : buildc.length);
         break;
      }
         frame__44 *= parseFloat(`${buildc.length >> (Math.min(5, Math.abs(qaagR)))}`);
      if (5 <= (5 << (Math.min(1, Math.abs(description_q4Y.size)))) || 5 <= (description_q4Y.size << (Math.min(Math.abs(5), 4)))) {
         description_q4Y.set(`${frame__44}`, buildc.length / (Math.max(1, 2)));
      }
         buildc = "2";
         buildc = `${qaagR}`;
      reactnativeratingsO *= parseInt(`${reactnativeratingsO}`) * 3;
   }
   for (let e = 0; e < 2; e++) {
      baselineb = new Map([[`${targetX}`, targetX]]);
   }
   while (2 >= eventY.length || (2 >> (Math.min(3, eventY.length))) >= 3) {
       let recommendationw = String.fromCharCode(115,95,56,52,95,117,116,120,111,115,0);
       let baiduL = 0.0;
       let plashf = String.fromCharCode(115,111,99,97,110,116,115,101,110,100,109,111,114,101,95,53,95,49,55,0);
       let componentsq = 4;
       let defaultroombga = 2;
      if (defaultroombga > componentsq) {
          let libswscalem: Array<any> = [String.fromCharCode(111,117,116,102,105,108,101,115,95,53,95,49,48,48,0), String.fromCharCode(101,97,116,105,110,103,95,114,95,56,55,0), String.fromCharCode(102,111,114,116,104,95,105,95,49,50,0)];
         componentsq /= Math.max(2, defaultroombga);
         libswscalem = [libswscalem.length * 1];
      }
      for (let h = 0; h < 1; h++) {
         componentsq += componentsq;
      }
          let classesy: Map<any, any> = new Map([[String.fromCharCode(99,97,116,99,104,97,98,108,101,95,54,95,51,48,0),true ], [String.fromCharCode(117,100,112,95,102,95,49,48,48,0),true ]]);
          let time_jdm = String.fromCharCode(121,95,51,51,95,98,111,114,100,101,114,115,0);
          let benefitc = String.fromCharCode(100,101,97,108,108,111,99,97,116,105,111,110,95,100,95,54,48,0);
         plashf += `${defaultroombga * 3}`;
         classesy.set(benefitc, (benefitc == String.fromCharCode(72,0) ? benefitc.length : time_jdm.length));
         time_jdm += `${classesy.size}`;
          let selectD = 5.0;
          let malaysiaX = 0;
         componentsq <<= Math.min(3, recommendationw.length);
         selectD -= malaysiaX;
         malaysiaX %= Math.max(1, 1 * parseInt(`${selectD}`));
      while (!plashf.includes(`${defaultroombga}`)) {
          let predictionarrowI = 3.0;
          let nativemoduled = 3;
         defaultroombga *= recommendationw.length;
         predictionarrowI += parseFloat(`${3 - parseInt(`${predictionarrowI}`)}`);
         nativemoduled ^= nativemoduled;
         break;
      }
         componentsq += parseInt(`${baiduL}`);
      if (plashf.length == componentsq) {
         plashf += `${componentsq - defaultroombga}`;
      }
      while (2.32 >= (4.48 + baiduL) && (1 + recommendationw.length) >= 4) {
          let penaltygoalf: Array<any> = [105, 301];
         recommendationw += `${penaltygoalf.length}`;
         break;
      }
      arrowo = targetX >= 9;
      break;
   }

        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

      libavutilO += `${parseInt(`${leftC}`)}`;
   if (!libavutilO.startsWith(`${targetX}`)) {
      targetX %= Math.max(2, bridgey.length);
   }
      baselineb.set(`${leftC}`, parseInt(`${leftC}`) * predictionactiveN.size);
       let debugX = 5.0;
       let templateprocessorB = String.fromCharCode(98,114,105,100,103,101,95,56,95,55,54,0);
      if (1 > (parseInt(`${debugX}`) / (Math.max(templateprocessorB.length, 9)))) {
          let foregroundZ = 4.0;
          let bannerG: Map<any, any> = new Map([[String.fromCharCode(110,95,51,51,95,122,105,112,0),false ], [String.fromCharCode(106,115,101,112,95,101,95,52,57,0),false ], [String.fromCharCode(107,95,53,55,95,97,110,100,108,101,0),true ]]);
          let telemetryX = 5.0;
          let expiredF = true;
          let thumbnaile: Array<any> = [String.fromCharCode(115,95,53,48,95,107,102,109,111,100,101,115,0), String.fromCharCode(99,95,52,49,95,109,97,110,97,103,101,97,98,108,101,0)];
         debugX /= Math.max(2, parseFloat(`${parseInt(`${debugX}`) << (Math.min(templateprocessorB.length, 3))}`));
         foregroundZ *= parseFloat(`${bannerG.size & parseInt(`${foregroundZ}`)}`);
         bannerG.set(`${expiredF}`, parseInt(`${foregroundZ}`) | 3);
         telemetryX *= 3;
         expiredF = (telemetryX / (Math.max(3, foregroundZ))) >= 40.53;
         thumbnaile = [2];
      }
      while (templateprocessorB.includes(`${debugX}`)) {
         templateprocessorB += "1";
         break;
      }
      for (let i = 0; i < 1; i++) {
         debugX -= parseFloat(`${2 << (Math.min(5, Math.abs(parseInt(`${debugX}`))))}`);
      }
          let profileinactiveN = String.fromCharCode(108,95,57,53,95,112,101,110,100,105,110,103,115,0);
         debugX += parseFloat(`${parseInt(`${debugX}`)}`);
         profileinactiveN += `${profileinactiveN.length}`;
          let termsS = 0;
         debugX += parseFloat(`${parseInt(`${debugX}`) | 2}`);
         termsS %= Math.max(3, 4);
       let predictionactiveY = String.fromCharCode(121,95,49,95,99,104,97,112,0);
       let dependencyL = String.fromCharCode(111,100,100,95,114,95,54,54,0);
      libavutilO += `${(predictionactiveN.size * (twitterY ? 3 : 3))}`;
   if (targetX < eventY.length) {
      targetX <<= Math.min(Math.abs((eventY.length & (twitterY ? 2 : 4))), 2);
   }
       let layoutT = String.fromCharCode(112,103,109,120,95,102,95,49,48,48,0);
       let liveendmodallogod = String.fromCharCode(108,97,118,102,117,116,105,108,115,95,50,95,53,0);
       let bufferp = 3.0;
      if (3 < liveendmodallogod.length || layoutT == String.fromCharCode(108,0)) {
          let componentn = 3;
          let ticked7 = 3.0;
          let tickj = 3.0;
         liveendmodallogod = `${parseInt(`${ticked7}`)}`;
         componentn -= 1;
         ticked7 *= parseInt(`${tickj}`);
         tickj /= Math.max(2, componentn);
      }
          let mounting5: Array<any> = [String.fromCharCode(108,111,97,100,95,54,95,54,56,0), String.fromCharCode(102,108,97,115,104,95,53,95,53,57,0), String.fromCharCode(104,95,56,51,95,109,97,110,100,97,116,111,114,121,0)];
         bufferp /= Math.max(liveendmodallogod.length, 1);
         mounting5.push(mounting5.length % (Math.max(6, mounting5.length)));
      if (3 <= layoutT.length) {
         layoutT += `${(String.fromCharCode(87,0) == layoutT ? layoutT.length : parseInt(`${bufferp}`))}`;
      }
         layoutT = `${parseInt(`${bufferp}`)}`;
         liveendmodallogod += "3";
       let episodesH = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,95,57,95,57,53,0);
       let textinputo = String.fromCharCode(103,95,51,57,95,100,101,116,97,105,108,115,0);
      for (let a = 0; a < 2; a++) {
          let dangerk: Array<any> = [668, 993];
          let mappingZ = false;
          let downarrowI = 2;
          let popup_ = String.fromCharCode(110,117,109,101,114,105,99,97,108,95,121,95,49,53,0);
          let reactJ: Map<any, any> = new Map([[String.fromCharCode(119,97,108,108,112,97,112,101,114,115,95,102,95,53,53,0),710], [String.fromCharCode(115,99,105,105,95,109,95,51,52,0),971]]);
         textinputo += `${liveendmodallogod.length}`;
         dangerk = [dangerk.length * reactJ.size];
         mappingZ = reactJ.size == downarrowI;
         downarrowI /= Math.max(3, 3);
         popup_ = `${popup_.length << (Math.min(1, Math.abs(reactJ.size)))}`;
      }
       let mbridgeC = 5.0;
       let selectionK = 2.0;
         mbridgeC -= parseInt(`${selectionK}`);
      libavutilO += "2";

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });

   for (let r = 0; r < 3; r++) {
      targetX <<= Math.min(3, Math.abs((libavutilO == String.fromCharCode(55,0) ? libavutilO.length : predictionactiveN.size)));
   }
   let defaultfootballbg_ = 9068609 >= baselineb.size;
   do {
      baselineb.set(`${reactnativeratingsO}`, libavutilO.length);
      if (defaultfootballbg_) {
         break;
      }
   } while ((predictionactiveN.size < 5) && defaultfootballbg_);
      libavutilO += `${parseInt(`${reactnativeratingsO}`) & 2}`;
      reactnativeratingsO *= baselineb.size;
   let infot = 7740073 <= predictionactiveN.size;
   do {
      predictionactiveN = new Map([[`${predictionactiveN.size}`, 3 | targetX]]);
      if (infot) {
         break;
      }
   } while (infot && ((parseInt(`${reactnativeratingsO}`) * predictionactiveN.size) >= 2 || 2 >= (parseInt(`${reactnativeratingsO}`) * predictionactiveN.size)));
       let templateprocessorv: Map<any, any> = new Map([[String.fromCharCode(104,115,118,97,95,118,95,52,0),8], [String.fromCharCode(100,95,55,95,119,97,115,116,101,100,0),722], [String.fromCharCode(113,95,50,95,112,105,110,110,101,100,0),353]]);
       let commentb: Array<any> = [893, 767];
      if ((templateprocessorv.size * commentb.length) >= 4 && (4 * templateprocessorv.size) >= 5) {
         templateprocessorv = new Map([[`${templateprocessorv.size}`, commentb.length % (Math.max(2, 7))]]);
      }
          let fcdaebecbcbafcdfceaaeccfeacdbK = String.fromCharCode(105,114,114,101,108,101,118,97,110,116,95,102,95,56,0);
         templateprocessorv.set(fcdaebecbcbafcdfceaaeccfeacdbK, templateprocessorv.size | 1);
          let logov = 0;
         commentb = [3];
         logov *= logov;
       let questicon0 = false;
       let unfillu = false;
         commentb.push(2 ^ commentb.length);
         questicon0 = templateprocessorv.size == 15;
      baselineb.set(libavutilO, commentb.length ^ 2);
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
                            : require("@static/images/bottomIconuserBanner.png")
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
