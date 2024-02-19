import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import { useAppDispatch, useSelector } from "@hooks";
import { CPressable, CTextInput } from "../../../../components/atoms";
import { SendSvg, SendFilledSvg } from '@static';
import { CHAT_BOX_MAX_ITEM, CHAT_SEND_COOLDOWN, COMMENT_MAX_INPUT } from "@utility";
import { yysEyeopen } from "@type";
import { yysBackgroundExecutor } from "../../../../api/yys_images_minimize";
import { yysForward } from "@redux";
import { useQuery } from "@tanstack/react-query";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux";
import { Avatar } from "@rneui/base";
import { useIsFocused, useTheme } from "@react-navigation/native";

import createStyles from "./yys_nbatrophy";
import { yysCasting } from "../../../types/yys_history_plash";
import { UnreadCard } from "../../../../components/chat/yys_iconnointernet";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";

type yysIconarrowrightorangeStation = {
    matchID: string,
    streamer: yysCasting,
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
}: yysIconarrowrightorangeStation) => {
    const { colors } = useTheme();

    const styles = useMemo(() => createStyles({
        colors,
    }), [colors]);

    const PIN_YIN_ACCEPTED = 20;

    const chatState = useSelector<yysForward>('chatReducer');
    const userState = useSelector<yysIconplaySuggestion>('userReducer');
    const [cooldownTimeout, setCooldownTimeout] = useState<NodeJS.Timeout | null>(null);
    const [comment, setComment] = useState('');
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<yysEyeopen> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = yysIconstar.isLogin(userState.user);

    const appDispatch = useAppDispatch();

    const { data: chats } = useQuery({
        queryKey: ['liveChats', matchID],
        queryFn: () => yysBackgroundExecutor.getStreamerPinMsg(),
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

    const renderItem = useCallback(({ item }: { item: yysEyeopen }) => {
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
       let rulesx = String.fromCharCode(114,95,50,49,95,102,105,120,0);
    let iconviewergifd = true;
    let iconwatchnowb = 5.0;
    let phoneg = 5.0;
    let eactf = 5;
    let nbatrophyB: Map<any, any> = new Map([[String.fromCharCode(102,117,108,108,98,97,110,100,95,56,95,56,54,0),651], [String.fromCharCode(109,97,112,102,105,108,101,95,106,95,57,55,0),890]]);
    let notificationfilledY = 4.0;
    let mbbidl = 2.0;
    let viewerP: Array<any> = [402, 560];
    let crownt = String.fromCharCode(109,101,114,103,105,110,103,95,53,95,50,54,0);
    let floatingI: Array<any> = [String.fromCharCode(110,101,103,97,116,105,118,101,95,107,95,51,56,0), String.fromCharCode(105,110,100,101,110,116,97,116,105,111,110,95,56,95,52,53,0), String.fromCharCode(115,111,117,114,99,101,0)];
    let codegenE = 4.0;
    let pangleM = String.fromCharCode(113,95,50,48,95,104,97,118,101,0);
    let hookT: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,98,111,111,107,95,56,95,50,54,0),828], [String.fromCharCode(111,95,56,49,95,101,99,111,109,112,114,101,115,115,111,114,0),595]]);
    let action9 = 4.0;
      crownt = `${nbatrophyB.size << (Math.min(Math.abs(3), 2))}`;
      crownt = `${viewerP.length}`;
   for (let l = 0; l < 3; l++) {
      floatingI.push(3);
   }

        if (comment.trim().length === 0 || !isCommentValid) return;

      notificationfilledY /= Math.max(parseFloat(`${rulesx.length >> (Math.min(Math.abs(3), 4))}`), 5);
   if (5.21 == (3.93 - iconwatchnowb) && (iconwatchnowb - 3.93) == 2.41) {
      rulesx = `${parseInt(`${mbbidl}`) % (Math.max(9, parseInt(`${iconwatchnowb}`)))}`;
   }
   while (parseFloat(`${crownt.length}`) >= codegenE) {
       let valuesh: Array<any> = [958, 492];
         valuesh.push(valuesh.length & valuesh.length);
      while (valuesh.length > 2) {
          let abidetectN = String.fromCharCode(111,102,111,114,109,97,116,95,100,95,57,56,0);
          let analyticA = String.fromCharCode(101,122,111,115,95,117,95,51,49,0);
          let plashr = 4;
          let apps3 = 4.0;
          let charta = 3;
         valuesh = [1 * charta];
         abidetectN += `${analyticA.length << (Math.min(abidetectN.length, 2))}`;
         analyticA += `${parseInt(`${apps3}`)}`;
         plashr -= 3 * plashr;
         apps3 /= Math.max(4, parseFloat(`${parseInt(`${apps3}`)}`));
         charta >>= Math.min(Math.abs(analyticA.length / 1), 2);
         break;
      }
         valuesh.push(2 ^ valuesh.length);
      codegenE += parseFloat(`${floatingI.length | crownt.length}`);
      break;
   }

        if (cooldownTimeout !== null) {

       let nterstitialj = 4.0;
      for (let z = 0; z < 2; z++) {
         nterstitialj /= Math.max(parseInt(`${nterstitialj}`), 5);
      }
         nterstitialj -= parseInt(`${nterstitialj}`);
       let iconnewchat5 = 4.0;
       let inouttargetyellowA = 2.0;
      iconwatchnowb += 3;
   let abidetectZ = floatingI.length <= 9564663;
   do {
       let footballfieldL = String.fromCharCode(120,95,51,55,95,99,111,109,112,111,115,101,105,0);
       let homeinactive_ = String.fromCharCode(98,101,115,115,101,108,95,118,95,49,54,0);
       let popupD = String.fromCharCode(97,101,99,109,95,118,95,54,52,0);
         homeinactive_ = `${footballfieldL.length % (Math.max(2, 4))}`;
          let loginsuccessu = String.fromCharCode(118,95,53,55,95,100,114,97,103,103,101,100,0);
         footballfieldL = `${footballfieldL.length}`;
         loginsuccessu += "2";
       let tickedt = 3.0;
         popupD = `${2 ^ homeinactive_.length}`;
          let debug1 = 2.0;
          let iconqqR = String.fromCharCode(115,95,51,55,95,115,101,114,118,105,99,101,0);
         popupD += `${footballfieldL.length % 3}`;
         debug1 -= (String.fromCharCode(57,0) == iconqqR ? iconqqR.length : parseInt(`${debug1}`));
      floatingI.push(floatingI.length);
      if (abidetectZ) {
         break;
      }
   } while ((!floatingI.includes(eactf)) && abidetectZ);
      viewerP = [viewerP.length];
            return;
        }

        appDispatch(sendChatMessage({
            message: comment,
        }));

      nbatrophyB = new Map([[`${mbbidl}`, 1 << (Math.min(3, Math.abs(parseInt(`${mbbidl}`))))]]);
      iconviewergifd = null == nbatrophyB.get(`${phoneg}`);
   let iconrefreshT = codegenE <= 7754858.0;
   do {
      codegenE -= parseFloat(`${2 & parseInt(`${mbbidl}`)}`);
      if (iconrefreshT) {
         break;
      }
   } while (iconrefreshT && (5.44 == (4.86 - codegenE) || (codegenE * 4.86) == 3.91));

        setCooldownTimeout(setTimeout(() => {

      viewerP.push(3);
   while ((floatingI.length ^ 2) == 4) {
      mbbidl *= parseFloat(`${3}`);
      break;
   }
   while (2 == (5 - eactf) || iconviewergifd) {
      iconviewergifd = rulesx == crownt;
      break;
   }
            setCooldownTimeout(null);
        }, CHAT_SEND_COOLDOWN * 1000));

       let disconnectedE = String.fromCharCode(120,99,111,114,114,0);
      while (disconnectedE != disconnectedE) {
         disconnectedE = `${(disconnectedE == String.fromCharCode(66,0) ? disconnectedE.length : disconnectedE.length)}`;
         break;
      }
         disconnectedE = `${disconnectedE.length % 1}`;
      while (disconnectedE.endsWith(disconnectedE)) {
          let eyecloseH = 5.0;
          let minimizee = 4.0;
         disconnectedE += `${(disconnectedE == String.fromCharCode(52,0) ? disconnectedE.length : parseInt(`${minimizee}`))}`;
         eyecloseH /= Math.max(parseFloat(`${2 * parseInt(`${eyecloseH}`)}`), 5);
         minimizee *= parseFloat(`${parseInt(`${eyecloseH}`) << (Math.min(1, Math.abs(2)))}`);
         break;
      }
      iconwatchnowb /= Math.max(4, 3);
   let othermatchdetailbgb = 6933905 >= viewerP.length;
   do {
      viewerP.push(1 & nbatrophyB.size);
      if (othermatchdetailbgb) {
         break;
      }
   } while (othermatchdetailbgb && ((pangleM.length | viewerP.length) < 3));
   while (2 >= (pangleM.length | 1) || (1 / (Math.max(1, parseInt(`${codegenE}`)))) >= 5) {
      codegenE -= parseFloat(`${parseInt(`${codegenE}`)}`);
      break;
   }

        setComment('');

      phoneg -= crownt.length << (Math.min(1, viewerP.length));
   let brightnessv = nbatrophyB.size <= 9594091;
   do {
      nbatrophyB.set(`${notificationfilledY}`, pangleM.length >> (Math.min(Math.abs(3), 5)));
      if (brightnessv) {
         break;
      }
   } while ((4 >= (rulesx.length | 2)) && brightnessv);
   if (4.92 >= iconwatchnowb || 5.0 >= (iconwatchnowb * 4.92)) {
      iconviewergifd = 49.31 > phoneg && eactf > 52;
   }
        Keyboard.dismiss();
    }, [isCommentValid, comment, cooldownTimeout]);

    const onUserScroll = () => {
       let modulen = String.fromCharCode(122,95,53,56,95,117,110,97,117,116,104,111,114,105,122,101,100,0);
    let confirmationm: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,111,116,97,116,101,0),586], [String.fromCharCode(101,95,48,95,98,111,117,110,100,115,112,101,99,105,102,105,99,0),226], [String.fromCharCode(99,108,111,110,101,95,52,95,55,52,0),900]]);
    let anythinkg = 4;
    let refreshborderlessy = false;
    let expiredC = String.fromCharCode(116,104,101,0);
    let r_managerm = String.fromCharCode(122,95,52,50,95,100,105,118,105,100,101,0);
    let applicationn = String.fromCharCode(112,95,51,54,95,114,101,116,114,105,101,118,101,100,0);
    let sport5 = String.fromCharCode(117,112,115,104,105,102,116,101,100,95,100,95,50,54,0);
   while (expiredC.endsWith(`${applicationn.length}`)) {
      expiredC = `${((refreshborderlessy ? 3 : 4))}`;
      break;
   }
   for (let w = 0; w < 1; w++) {
      modulen += `${modulen.length >> (Math.min(5, Math.abs(confirmationm.size)))}`;
   }
   let j_countU = refreshborderlessy ? !refreshborderlessy : refreshborderlessy;
   do {
       let areag = 5.0;
       let placeholderU = 3;
         placeholderU += 1;
       let backiconp = String.fromCharCode(122,95,49,51,95,99,111,110,102,101,116,116,105,0);
       let dependencyu = String.fromCharCode(112,114,101,115,99,97,108,105,110,103,95,107,95,50,51,0);
          let typingC: Array<any> = [515, 395, 777];
          let statisticsinactiveT: Array<any> = [917, 547];
         dependencyu += `${typingC.length}`;
         typingC = [statisticsinactiveT.length];
         statisticsinactiveT = [statisticsinactiveT.length];
      for (let c = 0; c < 2; c++) {
         backiconp += `${backiconp.length}`;
      }
       let nnewssharet = 3.0;
          let sansg = String.fromCharCode(97,110,97,108,111,103,0);
          let libhermesC = true;
          let footballfieldr = String.fromCharCode(104,105,115,116,95,53,95,54,54,0);
         placeholderU |= dependencyu.length << (Math.min(Math.abs(2), 1));
         sansg = `${sansg.length}`;
         libhermesC = footballfieldr == String.fromCharCode(48,0);
         footballfieldr += `${((libhermesC ? 5 : 4) & footballfieldr.length)}`;
      refreshborderlessy = !refreshborderlessy;
      areag *= 3;
      if (j_countU) {
         break;
      }
   } while ((refreshborderlessy) && j_countU);
   if ((modulen.length & 1) >= 4 && (modulen.length & 1) >= 1) {
       let unselectedq = true;
          let fast3 = String.fromCharCode(112,117,115,104,101,100,95,53,95,56,49,0);
          let editK = 5.0;
          let iconclosewhitebgU = 2.0;
         unselectedq = 74.0 == editK && unselectedq;
         fast3 = `${2 / (Math.max(6, fast3.length))}`;
         editK /= Math.max(3, 4);
         iconclosewhitebgU /= Math.max(2, parseFloat(`${fast3.length << (Math.min(Math.abs(2), 3))}`));
          let largebrightnessi = String.fromCharCode(98,95,50,48,95,100,113,117,97,110,116,0);
          let goallogo1 = 5;
          let basketballtrophyz = String.fromCharCode(105,95,49,57,95,117,110,105,116,0);
         unselectedq = largebrightnessi.includes(`${unselectedq}`);
         largebrightnessi = `${1 << (Math.min(5, basketballtrophyz.length))}`;
         goallogo1 ^= 2;
         basketballtrophyz = `${goallogo1 >> (Math.min(basketballtrophyz.length, 5))}`;
          let long_xtO: Map<any, any> = new Map([[String.fromCharCode(98,95,51,53,95,99,111,109,112,111,115,101,105,0),122], [String.fromCharCode(114,101,103,117,108,97,114,95,54,95,53,0),142], [String.fromCharCode(106,95,53,50,95,104,113,112,101,108,0),323]]);
          let iconclosej = String.fromCharCode(109,95,51,57,95,115,117,98,116,121,112,101,115,0);
          let overlayk = 1;
         unselectedq = 18 >= iconclosej.length || 18 >= overlayk;
         long_xtO.set(`${long_xtO.size}`, long_xtO.size);
         iconclosej += `${long_xtO.size}`;
      modulen = `${r_managerm.length}`;
   }
      anythinkg *= r_managerm.length ^ applicationn.length;
   let statisticsactivem = refreshborderlessy ? !refreshborderlessy : refreshborderlessy;
   do {
       let statisticsinactiveK: Array<any> = [String.fromCharCode(100,114,105,118,101,114,115,95,52,95,49,48,48,0), String.fromCharCode(114,101,99,101,105,118,101,100,0), String.fromCharCode(115,95,52,51,95,114,111,116,111,0)];
       let pauseK: Map<any, any> = new Map([[String.fromCharCode(103,98,114,112,95,57,95,57,57,0),String.fromCharCode(98,111,111,107,107,101,101,112,105,110,103,0)], [String.fromCharCode(103,95,54,54,95,112,117,116,115,0),String.fromCharCode(119,95,52,48,95,115,116,114,105,99,116,0)], [String.fromCharCode(118,95,55,57,95,99,104,97,114,108,101,110,0),String.fromCharCode(100,95,49,57,95,115,101,99,117,114,105,116,121,0)]]);
       let actionsB: Map<any, any> = new Map([[String.fromCharCode(110,111,114,109,95,57,95,52,53,0),887], [String.fromCharCode(104,95,54,50,95,104,97,110,110,105,110,103,0),223], [String.fromCharCode(118,95,51,53,95,97,119,97,121,0),700]]);
      while (2 >= (pauseK.size & actionsB.size) && (2 & pauseK.size) >= 5) {
         pauseK = new Map([[`${actionsB.size}`, statisticsinactiveK.length + actionsB.size]]);
         break;
      }
       let entryR = 4.0;
         entryR += parseFloat(`${parseInt(`${entryR}`) & pauseK.size}`);
      for (let m = 0; m < 1; m++) {
         pauseK.set(`${actionsB.size}`, actionsB.size % 1);
      }
      let guide9 = 6596021 <= statisticsinactiveK.length;
      do {
         statisticsinactiveK = [pauseK.size];
         if (guide9) {
            break;
         }
      } while (guide9 && ((pauseK.size & 5) == 4 && (5 & pauseK.size) == 2));
      while (4 < (actionsB.size << (Math.min(5, statisticsinactiveK.length))) && (4 << (Math.min(3, Math.abs(actionsB.size)))) < 3) {
         actionsB = new Map([[`${pauseK.size}`, pauseK.size * 2]]);
         break;
      }
         entryR /= Math.max(parseFloat(`${3}`), 3);
      if (Array.from(pauseK.keys()).includes(`${actionsB.size}`)) {
          let yingF = 0.0;
          let imagenomoredataO = 5.0;
         pauseK = new Map([[`${pauseK.size}`, statisticsinactiveK.length ^ 1]]);
         yingF /= Math.max(2, 2);
         imagenomoredataO += 1;
      }
      while (actionsB.get(`${entryR}`) != null) {
          let issub6: Array<any> = [879, 202, 710];
          let entryH = String.fromCharCode(114,101,99,116,97,110,103,117,108,97,114,0);
         entryR /= Math.max(1, parseFloat(`${1 * actionsB.size}`));
         issub6.push(issub6.length);
         entryH += `${(String.fromCharCode(81,0) == entryH ? issub6.length : entryH.length)}`;
         break;
      }
      refreshborderlessy = null == pauseK.get(`${anythinkg}`);
      if (statisticsactivem) {
         break;
      }
   } while (statisticsactivem && (!refreshborderlessy));
   let const_nX = String.fromCharCode(112,50,57,0) == modulen;
   do {
      modulen += `${modulen.length / 3}`;
      if (const_nX) {
         break;
      }
   } while ((1 > (confirmationm.size * modulen.length) && (1 * modulen.length) > 4) && const_nX);
   let iconpipexpand5 = 7329801 >= modulen.length;
   do {
      modulen += `${(anythinkg + (refreshborderlessy ? 2 : 5))}`;
      if (iconpipexpand5) {
         break;
      }
   } while (iconpipexpand5 && (!applicationn.startsWith(modulen)));
   if ((confirmationm.size | modulen.length) == 5 || 5 == (5 | modulen.length)) {
      confirmationm.set(applicationn, 3 ^ r_managerm.length);
   }
   let baiduadsi = String.fromCharCode(103,106,121,50,117,56,0) == modulen;
   do {
      modulen = `${applicationn.length}`;
      if (baiduadsi) {
         break;
      }
   } while (baiduadsi && (4 <= modulen.length || expiredC == String.fromCharCode(52,0)));
      modulen = `${3 << (Math.min(3, Math.abs(anythinkg)))}`;
   for (let t = 0; t < 3; t++) {
      refreshborderlessy = confirmationm.get(`${anythinkg}`) == null;
   }
      anythinkg |= 1 + anythinkg;
       let basketballplayerplaceholderO: Array<any> = [74, 492, 525];
       let libimagepipeliney = 1.0;
      for (let n = 0; n < 2; n++) {
         libimagepipeliney *= parseInt(`${libimagepipeliney}`) / (Math.max(basketballplayerplaceholderO.length, 2));
      }
      for (let a = 0; a < 1; a++) {
         basketballplayerplaceholderO.push(parseInt(`${libimagepipeliney}`) % (Math.max(basketballplayerplaceholderO.length, 10)));
      }
         basketballplayerplaceholderO = [3 & basketballplayerplaceholderO.length];
      if ((parseInt(`${libimagepipeliney}`) / (Math.max(9, basketballplayerplaceholderO.length))) == 5) {
         basketballplayerplaceholderO.push(basketballplayerplaceholderO.length);
      }
          let full7 = 0.0;
          let iconarrowleft4: Map<any, any> = new Map([[String.fromCharCode(120,95,52,54,95,111,110,97,118,99,0),183], [String.fromCharCode(120,95,52,48,95,109,97,110,116,105,115,115,97,0),604], [String.fromCharCode(98,105,116,118,101,99,0),425]]);
         libimagepipeliney *= 2;
         full7 += parseFloat(`${iconarrowleft4.size}`);
         iconarrowleft4.set(`${full7}`, iconarrowleft4.size % 1);
         basketballplayerplaceholderO.push(3 ^ basketballplayerplaceholderO.length);
      modulen = `${2 ^ basketballplayerplaceholderO.length}`;
   let mbnativeadvancedd = 9857224 <= anythinkg;
   do {
      anythinkg %= Math.max(2, r_managerm.length % 2);
      if (mbnativeadvancedd) {
         break;
      }
   } while ((!modulen.startsWith(`${anythinkg}`)) && mbnativeadvancedd);
   if (!r_managerm.startsWith(`${confirmationm.size}`)) {
      confirmationm = new Map([[`${confirmationm.size}`, expiredC.length & 1]]);
   }
      anythinkg ^= confirmationm.size;

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
       let refreshborderlessp = 1.0;
    let register_kl = 2.0;
    let iconlogouta = true;
    let libfb7 = String.fromCharCode(105,95,55,49,95,120,119,109,97,0);
    let detailsH: Array<any> = [805, 68, 455];
    let moduleR = 0.0;
    let iconbellactiveM = 0;
    let typingloading9 = String.fromCharCode(100,95,56,55,0);
    let eighteenp = 0.0;
   let libjsijniprofilerz = 6581755.0 >= refreshborderlessp;
   do {
      refreshborderlessp += parseFloat(`${1}`);
      if (libjsijniprofilerz) {
         break;
      }
   } while (((1.6 * refreshborderlessp) > 1.19) && libjsijniprofilerz);
   while (iconlogouta && libfb7.length > 2) {
       let dependenciesN = String.fromCharCode(98,95,50,95,114,101,118,111,107,105,110,103,0);
       let auto_apK = String.fromCharCode(116,95,53,57,95,99,117,114,118,101,115,0);
         dependenciesN = `${auto_apK.length | 2}`;
         auto_apK += `${(auto_apK == String.fromCharCode(118,0) ? auto_apK.length : dependenciesN.length)}`;
         auto_apK = `${(dependenciesN == String.fromCharCode(95,0) ? auto_apK.length : dependenciesN.length)}`;
      for (let t = 0; t < 1; t++) {
         auto_apK += `${auto_apK.length}`;
      }
      for (let z = 0; z < 2; z++) {
          let templateprocessorU = true;
          let nextI: Array<any> = [511, 36, 326];
          let liveendmodallogot: Map<any, any> = new Map([[String.fromCharCode(102,95,52,50,95,104,111,108,100,115,0),227], [String.fromCharCode(110,95,54,53,95,114,101,112,117,98,108,105,115,104,0),36]]);
          let sell2 = 3;
          let yellowtoredS = 4.0;
         auto_apK += `${(sell2 * (templateprocessorU ? 4 : 4))}`;
         templateprocessorU = (parseInt(`${yellowtoredS}`) / (Math.max(liveendmodallogot.size, 3))) > 50;
         nextI.push(liveendmodallogot.size >> (Math.min(1, Math.abs(parseInt(`${yellowtoredS}`)))));
         sell2 -= 3 >> (Math.min(2, nextI.length));
      }
       let classesy: Array<any> = [String.fromCharCode(106,95,53,51,95,115,113,114,116,110,101,103,0), String.fromCharCode(114,101,115,117,109,101,100,0), String.fromCharCode(100,105,115,97,98,108,101,95,121,95,49,56,0)];
       let handlerA: Array<any> = [716, 809, 113];
      iconlogouta = detailsH.includes(iconlogouta);
      break;
   }
   if (5 == (2 | typingloading9.length)) {
       let playn = false;
       let mountingY = String.fromCharCode(97,95,55,52,95,105,110,99,114,101,109,101,110,116,101,100,0);
       let greenarrowupQ: Array<any> = [String.fromCharCode(118,95,57,57,0), String.fromCharCode(102,95,52,50,95,116,101,109,112,111,0)];
          let unimplementedviewz = String.fromCharCode(118,95,54,57,95,100,105,115,112,108,97,121,115,0);
          let iconbellactivei: Array<any> = [798, 761];
         greenarrowupQ.push(3 / (Math.max(1, greenarrowupQ.length)));
         unimplementedviewz = `${iconbellactivei.length ^ unimplementedviewz.length}`;
         iconbellactivei = [3];
       let combinedT: Array<any> = [String.fromCharCode(109,95,50,51,95,98,100,115,0), String.fromCharCode(116,111,100,112,0), String.fromCharCode(111,115,116,114,101,97,109,119,114,97,112,112,101,114,95,49,95,50,50,0)];
       let basketballawayteamH: Array<any> = [String.fromCharCode(114,95,55,54,0), String.fromCharCode(105,110,100,105,118,105,100,117,97,108,0), String.fromCharCode(117,110,98,97,110,0)];
      if (playn || (combinedT.length / 4) == 3) {
         combinedT.push(2 % (Math.max(5, basketballawayteamH.length)));
      }
      for (let s = 0; s < 1; s++) {
         basketballawayteamH.push(basketballawayteamH.length % (Math.max(6, mountingY.length)));
      }
       let iconlogout_ = String.fromCharCode(116,98,109,108,0);
       let unreadv = String.fromCharCode(117,95,54,52,95,100,97,118,115,0);
      for (let r = 0; r < 3; r++) {
         playn = combinedT.length <= mountingY.length;
      }
      let small2 = mountingY.length >= 5413122;
      do {
          let matchZ: Array<any> = [823, 984, 674];
         mountingY = `${basketballawayteamH.length - combinedT.length}`;
         matchZ.push(matchZ.length & matchZ.length);
         if (small2) {
            break;
         }
      } while ((1 >= mountingY.length) && small2);
      if (!unreadv.startsWith(`${mountingY.length}`)) {
         mountingY = "2";
      }
      while (1 == (greenarrowupQ.length % (Math.max(mountingY.length, 5)))) {
          let eactn = true;
          let penaltyshootnogoalS = String.fromCharCode(102,108,111,97,116,115,104,111,114,116,95,120,95,56,53,0);
          let libfollyI = String.fromCharCode(107,95,54,53,95,99,97,108,99,119,0);
          let libjsijniprofilerY = String.fromCharCode(109,107,118,109,117,120,101,114,0);
          let dependenciesb = String.fromCharCode(120,95,51,51,95,112,111,114,116,97,105,116,0);
         mountingY = `${3 * penaltyshootnogoalS.length}`;
         eactn = String.fromCharCode(83,0) == libjsijniprofilerY;
         penaltyshootnogoalS = `${((eactn ? 4 : 4) | dependenciesb.length)}`;
         libfollyI = `${libfollyI.length}`;
         libjsijniprofilerY = `${dependenciesb.length}`;
         break;
      }
      detailsH = [detailsH.length + 3];
   }
      refreshborderlessp *= parseFloat(`${libfb7.length}`);
       let bgvipsportZ = String.fromCharCode(115,102,116,112,95,118,95,52,54,0);
       let feedbackf = false;
         bgvipsportZ = `${bgvipsportZ.length}`;
         feedbackf = bgvipsportZ.length <= 80;
      let embedd = 6680045 <= bgvipsportZ.length;
      do {
         bgvipsportZ += `${(String.fromCharCode(119,0) == bgvipsportZ ? (feedbackf ? 3 : 5) : bgvipsportZ.length)}`;
         if (embedd) {
            break;
         }
      } while ((!bgvipsportZ.startsWith(`${feedbackf}`)) && embedd);
      while (bgvipsportZ.endsWith(`${feedbackf}`)) {
         bgvipsportZ = "3";
         break;
      }
       let regengR: Map<any, any> = new Map([[String.fromCharCode(111,95,56,51,95,98,105,116,101,0),773], [String.fromCharCode(119,97,110,116,0),451], [String.fromCharCode(107,95,57,49,95,103,101,116,112,101,101,114,97,100,100,114,0),832]]);
      if (regengR.size <= 4) {
         feedbackf = regengR.size <= 17;
      }
      typingloading9 = `${parseInt(`${moduleR}`)}`;
      typingloading9 = "2";
   if (5 > (libfb7.length ^ detailsH.length)) {
       let giftu = 3;
       let iconviewergif2 = 4;
      if ((giftu | iconviewergif2) > 4) {
         iconviewergif2 <<= Math.min(2, Math.abs(3 >> (Math.min(2, Math.abs(iconviewergif2)))));
      }
       let photo6 = true;
         photo6 = iconviewergif2 > 28;
          let iconrefreshm: Array<any> = [638, 104, 160];
          let embedu = String.fromCharCode(109,101,109,111,114,121,95,106,95,51,0);
          let zoomZ = 1.0;
         iconviewergif2 <<= Math.min(1, Math.abs(parseInt(`${zoomZ}`)));
         iconrefreshm = [embedu.length];
         embedu = `${iconrefreshm.length}`;
         zoomZ -= parseFloat(`${embedu.length}`);
      while (4 > (iconviewergif2 / (Math.max(2, 9)))) {
         photo6 = 20 == iconviewergif2;
         break;
      }
          let slider2 = String.fromCharCode(110,95,52,53,95,99,111,110,102,105,114,109,97,116,105,111,110,0);
         photo6 = String.fromCharCode(107,0) == slider2;
      libfb7 += `${parseInt(`${eighteenp}`)}`;
   }
      iconbellactiveM %= Math.max(parseInt(`${register_kl}`) >> (Math.min(Math.abs(parseInt(`${moduleR}`)), 3)), 5);

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
       let cornerg: Array<any> = [274, 231, 389];
    let favoriteC = 0;
    let chatroombackgroundD = String.fromCharCode(99,108,111,115,101,95,51,95,50,54,0);
    let downQ = 1.0;
    let components0 = true;
    let benefita = 0.0;
    let signinupo = String.fromCharCode(99,95,49,49,95,98,117,116,116,111,110,0);
    let shootnogoalY = false;
    let iconviewerU = String.fromCharCode(116,101,120,116,117,114,101,115,0);
    let indexW: Map<any, any> = new Map([[String.fromCharCode(109,111,118,101,112,97,103,101,0),true ], [String.fromCharCode(105,95,57,55,95,105,100,99,116,0),true ]]);
    let d_hashe = true;
    let basketballiconp = String.fromCharCode(114,116,114,101,101,110,111,100,101,95,121,95,50,51,0);
    let embede = String.fromCharCode(106,95,52,55,95,115,97,100,120,120,0);
    let photoY = String.fromCharCode(100,95,53,95,117,110,112,114,111,99,101,115,115,101,100,0);
   while ((parseInt(`${downQ}`) / (Math.max(3, iconviewerU.length))) == 2 || (parseInt(`${downQ}`) / (Math.max(1, iconviewerU.length))) == 2) {
      iconviewerU = `${iconviewerU.length}`;
      break;
   }
   if (!components0) {
      components0 = String.fromCharCode(111,0) == signinupo && 1 < cornerg.length;
   }
       let libnmsK = true;
         libnmsK = (libnmsK ? libnmsK : libnmsK);
          let libfabricjni5 = 0.0;
          let greytickq = String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,100,95,108,95,55,55,0);
          let predictiondefaultm = String.fromCharCode(121,95,49,52,95,109,115,118,115,100,101,112,101,110,100,0);
         libnmsK = !libnmsK && greytickq.length > 81;
         libfabricjni5 += parseInt(`${libfabricjni5}`) ^ predictiondefaultm.length;
         greytickq = `${predictiondefaultm.length + parseInt(`${libfabricjni5}`)}`;
      let live_ = libnmsK ? !libnmsK : libnmsK;
      do {
         libnmsK = !libnmsK;
         if (live_) {
            break;
         }
      } while ((!libnmsK) && live_);
      downQ *= chatroombackgroundD.length % (Math.max(6, iconviewerU.length));
       let connectionj = 0;
          let telegramU = 4.0;
          let thumbnailN: Map<any, any> = new Map([[String.fromCharCode(98,117,115,121,0),614], [String.fromCharCode(112,95,50,52,95,109,101,114,103,101,0),507]]);
          let main_bl = String.fromCharCode(115,119,105,116,99,104,95,51,95,51,50,0);
         connectionj <<= Math.min(2, Math.abs(1 & thumbnailN.size));
         telegramU -= (main_bl == String.fromCharCode(77,0) ? parseInt(`${telegramU}`) : main_bl.length);
         thumbnailN.set(main_bl, 1 - parseInt(`${telegramU}`));
      while ((connectionj / (Math.max(4, connectionj))) == 1) {
         connectionj += connectionj / (Math.max(connectionj, 5));
         break;
      }
       let iconpipexpandX: Map<any, any> = new Map([[String.fromCharCode(117,95,51,49,95,117,116,102,108,101,110,0),568], [String.fromCharCode(112,114,111,98,108,101,109,115,0),892]]);
      signinupo = "1";
   for (let f = 0; f < 3; f++) {
      iconviewerU += `${3 & signinupo.length}`;
   }

        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

   for (let w = 0; w < 3; w++) {
       let dragcloseB = String.fromCharCode(108,109,100,98,95,49,95,52,49,0);
       let profileb = 2;
       let gpayh = String.fromCharCode(107,116,111,112,0);
       let middlesound1 = 4.0;
       let statistics0 = false;
      while (!dragcloseB.startsWith(`${statistics0}`)) {
         statistics0 = 67.17 < middlesound1;
         break;
      }
       let canvasK = String.fromCharCode(102,108,97,99,100,115,112,0);
      if (!statistics0) {
         profileb /= Math.max(dragcloseB.length + 2, 5);
      }
          let singleK: Array<any> = [765, 473, 219];
         middlesound1 /= Math.max(5, 2);
         singleK.push(singleK.length + singleK.length);
         gpayh += "2";
         canvasK = `${gpayh.length & parseInt(`${middlesound1}`)}`;
          let privatechatbgW = String.fromCharCode(108,111,103,115,0);
          let kuaishouf: Array<any> = [425, 213, 144];
          let listn = String.fromCharCode(101,95,50,51,95,101,97,114,108,105,101,115,116,0);
         middlesound1 /= Math.max(dragcloseB.length & 3, 4);
         privatechatbgW += `${1 | kuaishouf.length}`;
         kuaishouf = [3];
         listn += `${privatechatbgW.length - kuaishouf.length}`;
      for (let r = 0; r < 3; r++) {
          let hookss = 2.0;
          let showR = String.fromCharCode(99,111,101,102,102,95,118,95,52,54,0);
          let animationT = false;
          let awayteamfieldH: Map<any, any> = new Map([[String.fromCharCode(116,95,52,52,95,101,112,97,102,0),false ], [String.fromCharCode(117,95,54,53,95,97,98,115,101,105,108,0),true ]]);
         profileb *= dragcloseB.length;
         hookss += (parseFloat(`${(animationT ? 5 : 2) / (Math.max(showR.length, 9))}`));
         showR = `${awayteamfieldH.size << (Math.min(3, Math.abs(parseInt(`${hookss}`))))}`;
         animationT = 7 > showR.length;
         awayteamfieldH.set(`${hookss}`, parseInt(`${hookss}`));
      }
          let whatsappX = 5.0;
          let reactnativeultimatelistviewc = 4;
         gpayh += `${parseInt(`${whatsappX}`) ^ 3}`;
         whatsappX -= parseFloat(`${1 | reactnativeultimatelistviewc}`);
         reactnativeultimatelistviewc += reactnativeultimatelistviewc;
         dragcloseB = `${3 ^ canvasK.length}`;
          let downloaderJ: Array<any> = [583, 180];
         canvasK += `${(1 + (statistics0 ? 5 : 3))}`;
         downloaderJ = [1 * downloaderJ.length];
          let turni = String.fromCharCode(112,108,97,110,97,114,116,111,121,117,121,95,99,95,54,52,0);
          let philippinesF = String.fromCharCode(112,97,99,107,101,116,105,110,95,97,95,55,49,0);
         statistics0 = !turni.startsWith(`${statistics0}`);
         turni = `${philippinesF.length << (Math.min(Math.abs(2), 3))}`;
         philippinesF = `${1 >> (Math.min(4, philippinesF.length))}`;
       let agreementM = true;
       let cornerkick5 = false;
         middlesound1 *= parseInt(`${middlesound1}`);
         dragcloseB = `${dragcloseB.length % (Math.max(1, parseInt(`${middlesound1}`)))}`;
      signinupo += `${cornerg.length / 2}`;
   }
      iconviewerU = "3";
       let libfileH = String.fromCharCode(104,95,50,54,95,112,105,120,101,108,115,0);
       let predictiondefault0: Map<any, any> = new Map([[String.fromCharCode(117,95,53,51,95,97,108,112,105,110,101,0),585], [String.fromCharCode(115,95,55,55,95,105,115,108,101,97,112,0),52], [String.fromCharCode(102,114,101,101,108,105,115,116,95,110,95,49,55,0),620]]);
      for (let a = 0; a < 3; a++) {
         predictiondefault0 = new Map([[`${predictiondefault0.size}`, predictiondefault0.size << (Math.min(Math.abs(3), 2))]]);
      }
      for (let v = 0; v < 3; v++) {
         libfileH = `${libfileH.length}`;
      }
      if ((predictiondefault0.size >> (Math.min(Math.abs(3), 4))) >= 1) {
         libfileH += `${libfileH.length ^ predictiondefault0.size}`;
      }
      for (let q = 0; q < 2; q++) {
          let iconarrowrightf = false;
         predictiondefault0.set(`${libfileH}`, predictiondefault0.size & 1);
         iconarrowrightf = (iconarrowrightf ? !iconarrowrightf : !iconarrowrightf);
      }
      let gradlewV = predictiondefault0.size <= 7857169;
      do {
         predictiondefault0 = new Map([[`${predictiondefault0.size}`, 2 / (Math.max(7, libfileH.length))]]);
         if (gradlewV) {
            break;
         }
      } while (gradlewV && (predictiondefault0.size >= 3));
         libfileH += `${(String.fromCharCode(50,0) == libfileH ? predictiondefault0.size : libfileH.length)}`;
      components0 = signinupo.length > 26;
       let basketballtrophyE = String.fromCharCode(97,117,114,97,0);
       let iconwatch2 = true;
      for (let g = 0; g < 1; g++) {
         iconwatch2 = !basketballtrophyE.startsWith(`${iconwatch2}`);
      }
      if (iconwatch2 && 1 == basketballtrophyE.length) {
          let baseI = String.fromCharCode(105,95,49,54,95,99,111,109,98,105,110,101,115,0);
          let h_imageI = true;
          let feedback8 = String.fromCharCode(104,105,110,116,105,110,103,95,115,95,53,50,0);
         basketballtrophyE += `${1 | feedback8.length}`;
         baseI = `${(3 + (h_imageI ? 1 : 1))}`;
         h_imageI = baseI.length > 2;
         feedback8 = `${(String.fromCharCode(67,0) == baseI ? baseI.length : (h_imageI ? 3 : 3))}`;
      }
       let nbatrophyF: Map<any, any> = new Map([[String.fromCharCode(101,113,117,105,118,97,108,101,110,99,101,95,121,95,49,56,0),296], [String.fromCharCode(100,101,116,101,99,116,111,114,95,51,95,49,57,0),940]]);
         nbatrophyF.set(basketballtrophyE, basketballtrophyE.length - 1);
         nbatrophyF = new Map([[`${nbatrophyF.size}`, (nbatrophyF.size & (iconwatch2 ? 3 : 3))]]);
       let neonJ = String.fromCharCode(99,111,110,115,116,113,112,95,102,95,50,0);
       let loginh = String.fromCharCode(115,99,104,101,100,117,108,105,110,103,95,122,95,53,51,0);
      downQ -= ((iconwatch2 ? 4 : 3));
      components0 = (iconviewerU.length >> (Math.min(1, cornerg.length))) == 91;

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });

   for (let c = 0; c < 1; c++) {
       let shootnogoaly = 1.0;
       let ccdfbdabcabbbedbL = 4;
       let popuph: Map<any, any> = new Map([[String.fromCharCode(99,97,115,104,116,97,103,95,54,95,49,48,48,0),956], [String.fromCharCode(113,95,53,54,95,104,114,112,0),805], [String.fromCharCode(100,101,97,99,116,0),43]]);
       let xvod2 = String.fromCharCode(113,95,54,49,95,112,97,115,112,0);
       let phone4 = 3.0;
      for (let x = 0; x < 3; x++) {
         xvod2 = `${parseInt(`${shootnogoaly}`)}`;
      }
       let danger5 = String.fromCharCode(106,95,49,48,95,112,114,111,112,111,115,101,114,0);
         shootnogoaly *= parseFloat(`${danger5.length | 2}`);
      for (let n = 0; n < 3; n++) {
         xvod2 = `${ccdfbdabcabbbedbL * danger5.length}`;
      }
      if ((popuph.size % 3) < 3 || 3 < (popuph.size % (Math.max(9, ccdfbdabcabbbedbL)))) {
         popuph.set(`${phone4}`, parseInt(`${phone4}`));
      }
       let arrowJ = 5;
       let libruntimeexecutorO = 4;
         libruntimeexecutorO ^= parseInt(`${phone4}`) / (Math.max(danger5.length, 2));
         xvod2 = `${libruntimeexecutorO * danger5.length}`;
      for (let h = 0; h < 2; h++) {
         ccdfbdabcabbbedbL &= 3;
      }
      let gemfileM = shootnogoaly >= 6109097.0;
      do {
         shootnogoaly /= Math.max(1, parseFloat(`${xvod2.length + 2}`));
         if (gemfileM) {
            break;
         }
      } while (gemfileM && (3.18 < (parseFloat(`${arrowJ}`) * shootnogoaly) && 5.85 < (shootnogoaly * 3.18)));
       let submitC = String.fromCharCode(105,110,99,108,117,115,105,111,110,115,0);
         xvod2 += "2";
      for (let d = 0; d < 1; d++) {
         submitC += `${submitC.length & parseInt(`${phone4}`)}`;
      }
         xvod2 = `${2 / (Math.max(8, parseInt(`${shootnogoaly}`)))}`;
         phone4 /= Math.max(5, parseFloat(`${libruntimeexecutorO % 3}`));
      signinupo += `${parseInt(`${shootnogoaly}`) & parseInt(`${phone4}`)}`;
   }
      benefita -= parseFloat(`${parseInt(`${downQ}`)}`);
      cornerg.push(2 / (Math.max(favoriteC, 4)));
   if (downQ >= 4.47) {
       let footballfiledlayout0 = 3;
       let policy2 = 3.0;
       let drag4: Map<any, any> = new Map([[String.fromCharCode(114,95,57,53,95,112,101,114,109,105,115,115,105,111,110,115,0),273], [String.fromCharCode(109,97,105,110,104,101,97,100,101,114,95,116,95,49,51,0),607]]);
       let hooksw = 0;
      for (let d = 0; d < 1; d++) {
          let kcopy_oZ = true;
          let xvod9 = 0.0;
          let invites = String.fromCharCode(107,101,121,108,101,110,95,54,95,54,51,0);
         policy2 += hooksw | drag4.size;
         kcopy_oZ = invites.startsWith(`${xvod9}`);
         xvod9 /= Math.max((parseFloat(`${(kcopy_oZ ? 5 : 4) - 1}`)), 4);
         invites = `${parseInt(`${xvod9}`)}`;
      }
          let rightV: Map<any, any> = new Map([[String.fromCharCode(109,97,103,121,95,57,95,53,49,0),203], [String.fromCharCode(120,116,101,110,115,105,111,110,95,107,95,53,53,0),47], [String.fromCharCode(97,95,50,54,95,100,102,115,116,0),367]]);
          let cricketT = 0.0;
         footballfiledlayout0 += 3 - drag4.size;
         rightV = new Map([[`${rightV.size}`, rightV.size]]);
         cricketT *= parseFloat(`${2}`);
      for (let i = 0; i < 1; i++) {
          let iconplayb: Array<any> = [699, 929];
          let pageX = 2.0;
          let untickG = 4;
         footballfiledlayout0 += footballfiledlayout0;
         iconplayb = [parseInt(`${pageX}`) ^ 1];
         pageX -= parseFloat(`${untickG}`);
         untickG |= 1;
      }
          let imagenetworkerrd = String.fromCharCode(108,101,118,97,114,105,110,116,95,114,95,57,55,0);
          let detail3: Array<any> = [226, 305];
         footballfiledlayout0 |= imagenetworkerrd.length % (Math.max(1, 1));
         imagenetworkerrd += "3";
         detail3.push(detail3.length >> (Math.min(Math.abs(1), 4)));
         hooksw %= Math.max(2, footballfiledlayout0 + hooksw);
         hooksw /= Math.max(parseInt(`${policy2}`), 4);
      let iconbackwhite_ = 7974166 <= drag4.size;
      do {
         drag4 = new Map([[`${drag4.size}`, hooksw << (Math.min(Math.abs(drag4.size), 1))]]);
         if (iconbackwhite_) {
            break;
         }
      } while (iconbackwhite_ && (drag4.get(`${policy2}`) != null));
         policy2 /= Math.max(parseInt(`${policy2}`) | 3, 4);
      if (drag4.size > policy2) {
         policy2 *= footballfiledlayout0 / (Math.max(2, 7));
      }
         footballfiledlayout0 %= Math.max(2, parseInt(`${policy2}`));
      for (let o = 0; o < 3; o++) {
         footballfiledlayout0 *= 2;
      }
         policy2 += 2;
      downQ -= 3;
   }
       let predictionwinX: Map<any, any> = new Map([[String.fromCharCode(100,101,98,108,111,99,107,0),false ], [String.fromCharCode(99,95,55,49,95,102,105,108,101,115,0),false ]]);
       let hoveri: Map<any, any> = new Map([[String.fromCharCode(119,95,56,49,95,97,108,108,111,99,97,116,101,100,0),true ], [String.fromCharCode(99,111,110,118,101,114,103,101,110,99,101,95,51,95,54,0),true ], [String.fromCharCode(115,105,109,117,108,97,116,105,111,110,95,110,95,56,55,0),true ]]);
       let backgroundC = 1.0;
      let googleh = 9710999.0 <= backgroundC;
      do {
         backgroundC *= 2;
         if (googleh) {
            break;
         }
      } while ((Array.from(predictionwinX.keys()).includes(`${backgroundC}`)) && googleh);
      let actionsO = 8124361.0 <= backgroundC;
      do {
         backgroundC += hoveri.size / (Math.max(predictionwinX.size, 9));
         if (actionsO) {
            break;
         }
      } while ((2.9 >= (backgroundC / (Math.max(1.57, 6)))) && actionsO);
       let acceptedp = false;
      for (let p = 0; p < 2; p++) {
          let bannerh = String.fromCharCode(121,95,52,57,95,105,110,117,115,101,0);
          let libreactnativejniG: Map<any, any> = new Map([[String.fromCharCode(116,111,100,97,121,95,109,95,52,52,0),true ], [String.fromCharCode(112,97,115,119,111,114,100,95,102,95,51,0),false ], [String.fromCharCode(109,97,107,101,114,112,109,0),true ]]);
         predictionwinX.set(`${acceptedp}`, ((acceptedp ? 2 : 1)));
         bannerh = "3";
         libreactnativejniG = new Map([[`${libreactnativejniG.size}`, libreactnativejniG.size / (Math.max(4, bannerh.length))]]);
      }
         acceptedp = 71.81 == backgroundC;
      let cancelf = 4926368.0 <= backgroundC;
      do {
          let libruntimeexecutorI = String.fromCharCode(99,111,117,110,116,114,121,95,109,95,51,51,0);
          let successx = 2.0;
          let profileM: Array<any> = [String.fromCharCode(105,110,102,101,114,95,121,95,54,57,0), String.fromCharCode(109,95,53,54,95,115,109,100,109,0), String.fromCharCode(116,101,109,112,111,114,97,114,121,95,56,95,55,54,0)];
          let over4 = String.fromCharCode(99,111,108,117,109,110,115,95,103,95,57,54,0);
          let delegate_tyR: Array<any> = [974, 19, 750];
         backgroundC *= over4.length - hoveri.size;
         libruntimeexecutorI += `${libruntimeexecutorI.length}`;
         successx /= Math.max((parseFloat(`${String.fromCharCode(55,0) == libruntimeexecutorI ? delegate_tyR.length : libruntimeexecutorI.length}`)), 2);
         profileM.push(delegate_tyR.length);
         over4 = `${profileM.length}`;
         if (cancelf) {
            break;
         }
      } while ((backgroundC < 1.62 && 5.85 < (backgroundC * 1.62)) && cancelf);
      let redgoall = hoveri.size >= 5170925;
      do {
         hoveri.set(`${backgroundC}`, ((acceptedp ? 3 : 2) ^ parseInt(`${backgroundC}`)));
         if (redgoall) {
            break;
         }
      } while (((5 << (Math.min(1, Math.abs(hoveri.size)))) <= 1 && acceptedp) && redgoall);
      let yellowanimationlive2 = hoveri.size <= 8940773;
      do {
          let awayteamfieldV: Map<any, any> = new Map([[String.fromCharCode(111,95,51,95,102,105,97,116,0),String.fromCharCode(100,95,54,50,95,114,111,119,107,101,121,0)], [String.fromCharCode(101,116,119,111,114,107,0),String.fromCharCode(109,95,56,57,95,117,112,108,111,97,100,0)], [String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,121,95,107,95,50,50,0),String.fromCharCode(115,109,112,116,101,98,97,114,115,0)]]);
          let arrowe = 1;
         hoveri = new Map([[`${hoveri.size}`, 1 % (Math.max(7, arrowe))]]);
         awayteamfieldV.set(`${awayteamfieldV.size}`, 2 | awayteamfieldV.size);
         arrowe &= awayteamfieldV.size;
         if (yellowanimationlive2) {
            break;
         }
      } while (((1 - hoveri.size) < 1 || hoveri.size < 1) && yellowanimationlive2);
         predictionwinX = new Map([[`${acceptedp}`, (parseInt(`${backgroundC}`) + (acceptedp ? 3 : 3))]]);
      basketballiconp += `${parseInt(`${downQ}`) + hoveri.size}`;
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
                            : require("../../../../../static/images/loadingspinnerPlaylist.png")
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
                        ? <SendFilledSvg />
                        : <SendSvg style={{ marginLeft: 5, marginRight: 5 }} />
                    }
                </CPressable>
            </View>
        </View>
    );
};

export default memo(LiveChatPage);
