import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import { useAppDispatch, useSelector } from "@hooks/mayi_redirect";
import { CPressable, CTextInput } from "../../../../components/atoms";
import SendIcon from '@static/images/mappingBasketballplayerplaceholderApplication.svg';
import SendFillIcon from '@static/images/sendMbbidString.svg';
import { CHAT_BOX_MAX_ITEM, CHAT_SEND_COOLDOWN, COMMENT_MAX_INPUT } from "@utility/mayi_middleware_apps";
import { mayi_Background } from "@type/mayi_green";
import { mayi_Iconarrowrightorange } from "../../../../api/mayi_libhermes_libavcodec";
import { mayi_SportHalffieldimage } from "@redux/reducers/mayi_yellow_gemfile";
import { useQuery } from "@tanstack/react-query";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux/actions/mayi_gpay";
import { Avatar } from "@rneui/base";
import { useIsFocused, useTheme } from "@react-navigation/native";

import createStyles from "./mayi_iconarrowrightwhite";
import { mayi_LineShare } from "../../../types/mayi_homeinactive";
import { UnreadCard } from "../../../../components/chat/mayi_predictionbannershared";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";

type mayi_GoogleViews = {
    matchID: string,
    streamer: mayi_LineShare,
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
}: mayi_GoogleViews) => {
    const { colors } = useTheme();

    const styles = useMemo(() => createStyles({
        colors,
    }), [colors]);

    const PIN_YIN_ACCEPTED = 20;

    const chatState = useSelector<mayi_SportHalffieldimage>('chatReducer');
    const userState = useSelector<mayi_Baseline>('userReducer');
    const [cooldownTimeout, setCooldownTimeout] = useState<NodeJS.Timeout | null>(null);
    const [comment, setComment] = useState('');
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<mayi_Background> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = mayi_Gift.isLogin(userState.user);

    const appDispatch = useAppDispatch();

    const { data: chats } = useQuery({
        queryKey: ['liveChats', matchID],
        queryFn: () => mayi_Iconarrowrightorange.getStreamerPinMsg(),
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

    const renderItem = useCallback(({ item }: { item: mayi_Background }) => {
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
       let pageg: Array<any> = [862, 79, 259];
    let tickedj = String.fromCharCode(110,95,51,57,95,105,110,108,105,110,101,100,0);
    let mergerm = 1.0;
    let umengp = String.fromCharCode(101,110,116,105,116,105,101,115,95,52,95,57,49,0);
    let action1 = 2.0;
    let libswscale4 = 5.0;
    let singlet: Array<any> = [254, 700];
    let libfileA = 0;
    let classesT = 2;
    let libfilee: Map<any, any> = new Map([[String.fromCharCode(98,95,52,57,95,115,116,111,114,109,98,105,114,100,0),846], [String.fromCharCode(105,95,54,55,95,105,110,99,108,117,100,101,100,0),494]]);
   if (!singlet.includes(mergerm)) {
      singlet = [2];
   }
      tickedj = `${parseInt(`${libswscale4}`)}`;
       let footballtrophyu = String.fromCharCode(103,101,116,95,97,95,55,50,0);
       let launchX = String.fromCharCode(105,110,115,101,116,95,57,95,52,50,0);
         launchX += `${footballtrophyu.length}`;
      if (footballtrophyu == String.fromCharCode(103,0) || launchX.length >= 1) {
         launchX = `${launchX.length}`;
      }
         footballtrophyu += `${launchX.length}`;
         launchX += `${1 << (Math.min(2, launchX.length))}`;
         footballtrophyu = `${footballtrophyu.length * launchX.length}`;
      if (launchX.length < footballtrophyu.length) {
         footballtrophyu += `${footballtrophyu.length}`;
      }
      mergerm /= Math.max(3, singlet.length * 3);

        if (comment.trim().length === 0 || !isCommentValid) return;

      libswscale4 /= Math.max(5, parseInt(`${mergerm}`));
      tickedj = `${singlet.length}`;
       let whiteanimationlivec = String.fromCharCode(109,95,53,57,95,98,101,116,97,0);
       let videovart = 0.0;
      for (let b = 0; b < 3; b++) {
          let typing2 = String.fromCharCode(105,110,116,101,114,112,0);
          let rewardvideo7: Map<any, any> = new Map([[String.fromCharCode(98,95,49,52,95,98,114,97,110,99,104,0),978], [String.fromCharCode(110,95,56,56,95,100,105,109,101,110,115,105,111,110,0),596], [String.fromCharCode(112,114,111,95,114,95,49,56,0),652]]);
          let singlef: Array<any> = [249, 169, 832];
         whiteanimationlivec = "2";
         typing2 = `${3 >> (Math.min(5, typing2.length))}`;
         rewardvideo7.set(`${singlef.length}`, rewardvideo7.size | singlef.length);
      }
      while (1 == (whiteanimationlivec.length / (Math.max(3, 5))) || 4 == (whiteanimationlivec.length & 3)) {
          let googleX = true;
          let carouselp = 4;
         videovart += (whiteanimationlivec == String.fromCharCode(106,0) ? whiteanimationlivec.length : carouselp);
         googleX = !googleX;
         carouselp ^= 1;
         break;
      }
       let nbatrophyI = String.fromCharCode(108,95,53,48,95,115,99,116,112,0);
       let slider8 = String.fromCharCode(97,95,54,57,95,99,121,99,108,105,99,0);
          let libruntimeexecutorw = String.fromCharCode(108,105,98,114,115,118,103,95,104,95,54,54,0);
         nbatrophyI = `${slider8.length}`;
         libruntimeexecutorw += `${libruntimeexecutorw.length}`;
       let google1 = 0.0;
      if (nbatrophyI == String.fromCharCode(73,0)) {
          let libfbO = 2.0;
          let defaultlogow: Array<any> = [String.fromCharCode(112,95,52,54,95,99,114,101,97,116,105,118,101,0), String.fromCharCode(119,120,109,109,116,101,115,116,95,53,95,57,57,0), String.fromCharCode(103,95,49,51,95,114,97,116,101,99,116,114,108,0)];
         slider8 += "2";
         libfbO /= Math.max(1 - defaultlogow.length, 3);
         defaultlogow.push(parseInt(`${libfbO}`) + 2);
      }
      pageg = [umengp.length >> (Math.min(3, Math.abs(classesT)))];

        if (cooldownTimeout !== null) {

   let vipsportF = mergerm <= 5359154.0;
   do {
      mergerm *= pageg.length * umengp.length;
      if (vipsportF) {
         break;
      }
   } while (vipsportF && ((parseInt(`${mergerm}`) / (Math.max(6, tickedj.length))) <= 1 || 3.66 <= (mergerm / 4.45)));
      umengp += `${parseInt(`${action1}`) % (Math.max(3, 5))}`;
   if ((libswscale4 / (Math.max(tickedj.length, 3))) == 5.69) {
       let telegramB = String.fromCharCode(102,97,105,108,115,95,109,95,53,56,0);
       let linkE = String.fromCharCode(117,112,99,97,115,101,95,98,95,49,57,0);
         linkE = `${telegramB.length}`;
      for (let w = 0; w < 1; w++) {
         linkE += `${linkE.length << (Math.min(1, telegramB.length))}`;
      }
      if (telegramB == linkE) {
         linkE = `${1 * linkE.length}`;
      }
      while (telegramB.endsWith(linkE)) {
         linkE += `${telegramB.length << (Math.min(Math.abs(1), 2))}`;
         break;
      }
         telegramB = `${3 - linkE.length}`;
         telegramB += `${1 | telegramB.length}`;
      libswscale4 -= pageg.length ^ libfileA;
   }
            return;
        }

        appDispatch(sendChatMessage({
            message: comment,
        }));

       let iconsettingQ = 2.0;
       let colorsy = String.fromCharCode(114,95,50,57,95,108,111,116,116,105,101,107,101,121,112,97,116,104,0);
       let goallogoQ = String.fromCharCode(119,104,97,116,95,110,95,52,56,0);
         goallogoQ = `${goallogoQ.length}`;
      let nendS = colorsy == String.fromCharCode(101,117,99,105,53,102,105,49,0);
      do {
         colorsy = `${goallogoQ.length % (Math.max(2, 8))}`;
         if (nendS) {
            break;
         }
      } while (nendS && (!colorsy.startsWith(`${goallogoQ.length}`)));
      for (let a = 0; a < 2; a++) {
          let greyarrowupL = String.fromCharCode(115,95,49,95,112,97,103,101,115,0);
          let klevinW = 1.0;
         goallogoQ = `${colorsy.length / (Math.max(7, parseInt(`${klevinW}`)))}`;
         greyarrowupL = "3";
         klevinW += parseFloat(`${greyarrowupL.length / 2}`);
      }
      for (let p = 0; p < 3; p++) {
         iconsettingQ /= Math.max((parseFloat(`${String.fromCharCode(65,0) == colorsy ? colorsy.length : parseInt(`${iconsettingQ}`)}`)), 3);
      }
      if (goallogoQ == colorsy) {
         colorsy += `${(colorsy == String.fromCharCode(102,0) ? colorsy.length : parseInt(`${iconsettingQ}`))}`;
      }
       let collectionK = String.fromCharCode(110,95,51,95,112,111,112,117,108,97,114,0);
       let informationq = String.fromCharCode(102,105,108,101,115,121,115,116,101,109,0);
          let sigmobp = String.fromCharCode(118,112,105,110,116,114,97,112,114,101,100,95,106,95,53,55,0);
         iconsettingQ -= parseFloat(`${2 >> (Math.min(1, informationq.length))}`);
         sigmobp = `${sigmobp.length & 1}`;
      while (goallogoQ != colorsy) {
          let time_tL = String.fromCharCode(98,115,119,97,112,100,115,112,0);
          let filedI: Array<any> = [896, 162, 215];
         colorsy = "2";
         time_tL = `${time_tL.length + 2}`;
         filedI = [time_tL.length];
         break;
      }
       let statsnomoredataD = true;
      libswscale4 -= 3;
      action1 -= parseFloat(`${libfileA}`);
   if ((1 - classesT) == 2) {
       let favoritej = 0.0;
          let moreS = String.fromCharCode(116,95,50,57,95,110,116,102,115,0);
          let encryptr = 2;
          let u_imageC: Array<any> = [550, 165, 637];
         favoritej *= parseFloat(`${moreS.length}`);
         moreS += `${1 >> (Math.min(5, u_imageC.length))}`;
         encryptr -= 3 >> (Math.min(4, u_imageC.length));
      if ((1.38 + favoritej) <= 1.57 || (1.38 + favoritej) <= 4.81) {
         favoritej /= Math.max(parseFloat(`${3}`), 1);
      }
         favoritej += parseFloat(`${3 | parseInt(`${favoritej}`)}`);
      classesT &= singlet.length;
   }

        setCooldownTimeout(setTimeout(() => {

   for (let g = 0; g < 3; g++) {
       let backiconD = 4.0;
       let selectione: Map<any, any> = new Map([[String.fromCharCode(118,108,105,110,101,95,120,95,50,49,0),38], [String.fromCharCode(109,97,106,111,114,95,104,95,54,52,0),237]]);
       let dependencyy = String.fromCharCode(115,98,111,120,95,109,95,56,52,0);
       let hookE = String.fromCharCode(97,115,104,105,110,103,95,115,95,51,53,0);
         hookE += `${hookE.length}`;
         hookE = `${hookE.length}`;
          let iconcloseO = 0.0;
         dependencyy = `${parseInt(`${backiconD}`)}`;
         iconcloseO *= 2;
         dependencyy = `${1 >> (Math.min(5, dependencyy.length))}`;
       let hometeamfielde = false;
       let libflipperR = false;
          let scheduleQ = true;
         hookE += `${parseInt(`${backiconD}`) % 2}`;
         scheduleQ = !scheduleQ && !scheduleQ;
         dependencyy = "1";
      if (selectione.size >= 3) {
         dependencyy += `${selectione.size}`;
      }
      action1 /= Math.max(parseFloat(`${parseInt(`${mergerm}`)}`), 2);
   }
   while ((tickedj.length / (Math.max(7, parseInt(`${mergerm}`)))) > 4 && 5.66 > (mergerm / (Math.max(tickedj.length, 10)))) {
      mergerm += singlet.length >> (Math.min(4, Math.abs(parseInt(`${mergerm}`))));
      break;
   }
      singlet = [singlet.length << (Math.min(Math.abs(1), 4))];
            setCooldownTimeout(null);
        }, CHAT_SEND_COOLDOWN * 1000));

      action1 += parseFloat(`${3 & pageg.length}`);
   for (let v = 0; v < 1; v++) {
       let scrollviewe = String.fromCharCode(120,95,50,50,95,104,105,115,116,111,103,114,97,109,115,0);
       let nbatrophyR = 2;
       let corner6: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,101,120,95,97,95,49,48,0),String.fromCharCode(121,95,49,50,95,115,101,110,115,105,116,105,118,101,0)], [String.fromCharCode(99,95,55,49,95,104,105,103,104,0),String.fromCharCode(113,117,97,110,116,105,122,101,95,119,95,50,52,0)]]);
       let langb = String.fromCharCode(97,112,112,114,101,99,105,97,116,101,100,104,95,111,95,51,57,0);
          let arrowrightwithtail5: Array<any> = [813, 602];
          let subin1 = String.fromCharCode(103,108,111,115,115,95,105,95,55,48,0);
         langb += "3";
         arrowrightwithtail5 = [(String.fromCharCode(110,0) == subin1 ? subin1.length : arrowrightwithtail5.length)];
      if (scrollviewe.includes(langb)) {
          let eventf: Map<any, any> = new Map([[String.fromCharCode(104,95,49,49,95,99,102,116,121,112,101,114,101,102,0),698], [String.fromCharCode(117,112,100,97,116,101,95,114,95,54,53,0),25]]);
         langb = `${2 | nbatrophyR}`;
         eventf = new Map([[`${eventf.size}`, eventf.size]]);
      }
          let entryd: Array<any> = [528, 963];
          let fill5 = 1.0;
          let stationss = 4.0;
         scrollviewe += "3";
         entryd = [parseInt(`${fill5}`)];
         stationss -= parseInt(`${fill5}`) | parseInt(`${stationss}`);
          let onewinterstitialI: Array<any> = [885, 529];
          let membershipC = String.fromCharCode(108,95,54,57,95,102,105,108,116,101,114,115,0);
         nbatrophyR += onewinterstitialI.length - 3;
         onewinterstitialI = [membershipC.length];
         membershipC = `${membershipC.length}`;
      if (scrollviewe.startsWith(`${nbatrophyR}`)) {
         nbatrophyR += nbatrophyR;
      }
         scrollviewe += `${langb.length ^ 2}`;
         nbatrophyR /= Math.max(2, 2 * corner6.size);
      if (nbatrophyR <= 1) {
          let areaP = String.fromCharCode(115,110,97,109,101,0);
          let layoutU = String.fromCharCode(97,118,115,116,114,105,110,103,95,100,95,49,50,0);
          let vipsportw: Array<any> = [771, 767, 334];
         scrollviewe = `${langb.length}`;
         areaP = `${areaP.length}`;
         layoutU = `${(String.fromCharCode(117,0) == layoutU ? areaP.length : layoutU.length)}`;
         vipsportw = [layoutU.length];
      }
      let libfabricjni8 = nbatrophyR >= 9173217;
      do {
          let topon_ = 4.0;
          let reducerZ = 5.0;
          let kuaishouV: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,95,98,95,56,51,0),17], [String.fromCharCode(116,95,49,95,100,110,120,104,100,101,110,99,0),192]]);
          let icontransferclubY = String.fromCharCode(97,116,116,114,97,99,116,105,110,103,95,55,95,57,50,0);
         nbatrophyR <<= Math.min(4, Math.abs(2));
         topon_ += (icontransferclubY == String.fromCharCode(116,0) ? kuaishouV.size : icontransferclubY.length);
         reducerZ /= Math.max(parseInt(`${reducerZ}`), 2);
         kuaishouV = new Map([[`${reducerZ}`, icontransferclubY.length]]);
         if (libfabricjni8) {
            break;
         }
      } while (((scrollviewe.length ^ 4) <= 1) && libfabricjni8);
      for (let z = 0; z < 1; z++) {
         corner6 = new Map([[scrollviewe, scrollviewe.length]]);
      }
         langb = `${nbatrophyR}`;
         corner6 = new Map([[`${corner6.size}`, nbatrophyR - 2]]);
      umengp = `${corner6.size >> (Math.min(langb.length, 2))}`;
   }
      action1 /= Math.max(1, parseFloat(`${classesT * tickedj.length}`));

        setComment('');

      libswscale4 /= Math.max(1 / (Math.max(6, parseInt(`${mergerm}`))), 3);
   while ((action1 / 2.11) <= 5.64) {
      action1 += parseFloat(`${parseInt(`${libswscale4}`)}`);
      break;
   }
   while (4.73 < libswscale4) {
      action1 -= parseFloat(`${tickedj.length * 3}`);
      break;
   }
        Keyboard.dismiss();
    }, [isCommentValid, comment, cooldownTimeout]);

    const onUserScroll = () => {
       let whistleN = 1.0;
    let colorso = String.fromCharCode(112,95,51,52,95,105,110,115,116,0);
    let v_countT = true;
    let temperaturek: Map<any, any> = new Map([[String.fromCharCode(112,114,105,111,114,105,116,121,113,95,122,95,55,51,0),true ], [String.fromCharCode(115,100,112,0),true ], [String.fromCharCode(120,95,57,51,95,109,97,115,107,115,0),true ]]);
    let moduleN = String.fromCharCode(112,101,114,109,95,49,95,49,48,0);
    let weatherH = String.fromCharCode(97,114,105,98,95,101,95,51,48,0);
    let defaultplayerimgc = 1.0;
    let runtimeschedulerE = String.fromCharCode(107,95,49,56,95,97,109,98,105,101,110,116,0);
      whistleN -= parseFloat(`${temperaturek.size - colorso.length}`);
   let mapbufferY = 5977675 <= temperaturek.size;
   do {
      temperaturek.set(weatherH, temperaturek.size);
      if (mapbufferY) {
         break;
      }
   } while ((!v_countT) && mapbufferY);
      whistleN *= (parseFloat(`${colorso == String.fromCharCode(68,0) ? colorso.length : parseInt(`${whistleN}`)}`));
   while (defaultplayerimgc == 2.30) {
      weatherH += `${parseInt(`${defaultplayerimgc}`) * temperaturek.size}`;
      break;
   }
      weatherH += "3";
   while (colorso.includes(`${whistleN}`)) {
      colorso += `${colorso.length}`;
      break;
   }
      defaultplayerimgc *= moduleN.length / (Math.max(1, 3));
   if ((weatherH.length % 3) >= 5 && 1.84 >= (defaultplayerimgc / (Math.max(weatherH.length, 5)))) {
      defaultplayerimgc /= Math.max(3, 3);
   }
   for (let u = 0; u < 2; u++) {
      colorso += `${colorso.length}`;
   }
      temperaturek.set(weatherH, (weatherH.length * (v_countT ? 4 : 4)));
      whistleN += parseFloat(`${moduleN.length - 3}`);
       let memberJ: Array<any> = [668, 730];
       let sharec = 3.0;
         sharec /= Math.max(parseFloat(`${memberJ.length}`), 2);
          let contextb = 3.0;
          let activeG = 2;
         memberJ = [activeG];
         contextb -= parseFloat(`${2}`);
         activeG *= 1 / (Math.max(parseInt(`${contextb}`), 4));
      while (3.94 >= (parseFloat(`${memberJ.length}`) - sharec)) {
          let incidentl = false;
          let whiteanimationliveK = String.fromCharCode(117,112,108,111,97,100,95,51,95,55,52,0);
          let libimagepipeliney = String.fromCharCode(109,95,55,56,95,97,116,116,114,97,99,116,111,114,0);
         memberJ = [((incidentl ? 4 : 5) << (Math.min(memberJ.length, 1)))];
         incidentl = (libimagepipeliney.length >> (Math.min(1, whiteanimationliveK.length))) > 3;
         whiteanimationliveK += `${libimagepipeliney.length * whiteanimationliveK.length}`;
         break;
      }
         sharec -= parseFloat(`${3}`);
      let libbufferH = 9118098 <= memberJ.length;
      do {
         memberJ = [parseInt(`${sharec}`) & memberJ.length];
         if (libbufferH) {
            break;
         }
      } while ((2 > (4 << (Math.min(2, memberJ.length)))) && libbufferH);
          let activityR = String.fromCharCode(105,95,51,49,95,105,110,116,101,114,99,101,112,116,111,114,115,0);
         memberJ = [(String.fromCharCode(109,0) == activityR ? activityR.length : memberJ.length)];
      temperaturek = new Map([[`${whistleN}`, parseInt(`${whistleN}`) & 3]]);
       let libfbP = String.fromCharCode(109,112,101,103,118,108,99,95,57,95,52,53,0);
      if (libfbP.includes(libfbP)) {
         libfbP += "1";
      }
          let serviceg = 5;
          let brightnessh: Map<any, any> = new Map([[String.fromCharCode(109,97,105,110,100,98,0),false ], [String.fromCharCode(119,95,52,95,118,112,111,105,110,116,0),false ]]);
          let type_9P = 5.0;
         libfbP += "3";
         serviceg %= Math.max(brightnessh.size << (Math.min(2, Math.abs(serviceg))), 3);
         brightnessh.set(`${type_9P}`, 1);
         type_9P -= parseFloat(`${1}`);
      while (libfbP == String.fromCharCode(89,0)) {
          let anner9 = 0.0;
          let embedk = 0.0;
         libfbP = `${parseInt(`${embedk}`) * parseInt(`${anner9}`)}`;
         break;
      }
      colorso += `${((v_countT ? 5 : 1))}`;
       let downU = 2.0;
      if (5.75 > downU) {
         downU += 2;
      }
         downU -= 1;
       let mounting8 = String.fromCharCode(102,97,115,116,95,98,95,51,57,0);
       let upgrade2 = String.fromCharCode(114,101,115,101,114,118,101,100,95,97,95,56,57,0);
      defaultplayerimgc += parseInt(`${downU}`);
      colorso = `${((v_countT ? 5 : 3) >> (Math.min(Math.abs(3), 5)))}`;
   while ((temperaturek.size % 4) >= 2) {
      v_countT = weatherH.length <= 61;
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
       let descu: Map<any, any> = new Map([[String.fromCharCode(101,95,49,57,95,115,112,108,97,115,104,0),String.fromCharCode(104,95,49,95,110,101,117,116,114,97,108,0)], [String.fromCharCode(99,95,54,95,100,97,116,101,116,105,109,101,0),String.fromCharCode(109,105,103,104,116,95,112,95,48,0)]]);
    let greytickk = String.fromCharCode(118,95,51,95,115,110,97,107,101,0);
    let volumer = 3.0;
    let commentd = 1;
    let currentk: Array<any> = [String.fromCharCode(115,116,105,114,110,103,0), String.fromCharCode(121,95,50,54,95,114,101,99,101,105,118,101,100,0)];
    let yellowD: Array<any> = [145, 106, 400];
    let profileactive2 = true;
    let country6 = false;
    let nendh: Map<any, any> = new Map([[String.fromCharCode(117,95,49,56,95,104,97,115,120,0),160], [String.fromCharCode(99,107,115,117,109,0),348]]);
    let foregroundq = false;
    let iconarrowrightorangeq = 4;
      country6 = 10.66 == volumer || country6;
   while (2 <= greytickk.length || country6) {
       let qaag6: Array<any> = [147, 589];
       let sansT: Array<any> = [564, 147, 213];
       let regengr = 4.0;
       let become_ = 0;
       let libavformatD: Array<any> = [String.fromCharCode(114,98,115,112,95,114,95,49,57,0), String.fromCharCode(113,95,52,55,95,100,101,115,116,114,111,121,105,110,103,0)];
         become_ ^= 2;
         become_ %= Math.max(3, 3 ^ become_);
      if (libavformatD.length >= become_) {
         libavformatD.push(parseInt(`${regengr}`));
      }
      while ((regengr + 4.24) > 4.39 && (become_ ^ 3) > 5) {
         become_ -= 1;
         break;
      }
      let a_positionG = regengr <= 9421247.0;
      do {
         regengr += parseFloat(`${libavformatD.length ^ become_}`);
         if (a_positionG) {
            break;
         }
      } while (a_positionG && ((5.55 / (Math.max(1, regengr))) <= 3.62));
          let networku: Map<any, any> = new Map([[String.fromCharCode(114,118,100,115,112,95,55,95,55,48,0),String.fromCharCode(97,118,97,105,108,97,98,105,108,105,116,121,95,115,95,56,54,0)], [String.fromCharCode(101,95,53,55,95,116,99,102,105,108,101,0),String.fromCharCode(105,95,53,53,95,110,117,108,108,105,102,0)], [String.fromCharCode(109,111,110,111,116,111,110,105,99,95,107,95,53,0),String.fromCharCode(115,101,116,117,112,100,95,56,95,55,0)]]);
          let icontransferclubx = 1.0;
         regengr *= parseFloat(`${parseInt(`${regengr}`) - qaag6.length}`);
         networku.set(`${icontransferclubx}`, 3 >> (Math.min(4, Math.abs(parseInt(`${icontransferclubx}`)))));
         regengr += parseFloat(`${3}`);
      let chatroombackgroundc = regengr >= 5538505.0;
      do {
         regengr += parseFloat(`${2 + parseInt(`${regengr}`)}`);
         if (chatroombackgroundc) {
            break;
         }
      } while ((!libavformatD.includes(regengr)) && chatroombackgroundc);
      for (let f = 0; f < 1; f++) {
         become_ *= become_ & parseInt(`${regengr}`);
      }
         become_ ^= sansT.length / (Math.max(2, 2));
         libavformatD = [qaag6.length];
         libavformatD.push(libavformatD.length);
         become_ %= Math.max(libavformatD.length, 1);
      for (let h = 0; h < 2; h++) {
          let mathp: Map<any, any> = new Map([[String.fromCharCode(97,95,55,95,117,110,97,117,116,104,111,114,105,122,101,100,0),false ], [String.fromCharCode(97,95,53,56,95,99,111,118,101,114,115,0),true ], [String.fromCharCode(119,95,57,48,95,100,113,117,97,110,116,0),false ]]);
          let const_t0Q = String.fromCharCode(105,95,56,56,95,112,99,97,112,0);
          let vietnamt = 4.0;
         regengr /= Math.max(parseFloat(`${3}`), 3);
         mathp.set(`${vietnamt}`, 2 >> (Math.min(1, const_t0Q.length)));
         const_t0Q += "3";
         vietnamt /= Math.max(4, mathp.size / 1);
      }
          let defaultfootballbgB = String.fromCharCode(106,95,52,51,95,114,101,118,111,107,101,100,0);
          let utilsr = String.fromCharCode(101,114,108,101,95,52,95,54,56,0);
          let penaltyshootnogoall = String.fromCharCode(110,95,50,95,99,111,114,114,101,99,116,105,111,110,0);
         libavformatD = [parseInt(`${regengr}`) << (Math.min(3, Math.abs(2)))];
         defaultfootballbgB += `${(String.fromCharCode(112,0) == penaltyshootnogoall ? utilsr.length : penaltyshootnogoall.length)}`;
         utilsr = `${utilsr.length}`;
      greytickk = `${((profileactive2 ? 2 : 4) % (Math.max(parseInt(`${volumer}`), 10)))}`;
      break;
   }
   while (5 >= (commentd & yellowD.length)) {
      commentd *= parseInt(`${volumer}`) - 1;
      break;
   }
      country6 = volumer <= parseFloat(`${greytickk.length}`);
   if ((descu.size << (Math.min(Math.abs(1), 4))) > 2 && 5 > (descu.size << (Math.min(Math.abs(1), 3)))) {
      descu.set(`${yellowD.length}`, 3 | yellowD.length);
   }
   let traminim = 6528349 >= descu.size;
   do {
      descu = new Map([[`${profileactive2}`, 1]]);
      if (traminim) {
         break;
      }
   } while (traminim && (4 <= (1 << (Math.min(5, greytickk.length)))));
   for (let h = 0; h < 2; h++) {
      currentk.push(2 << (Math.min(1, yellowD.length)));
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
       let injuryw = 4.0;
    let g_viewx = String.fromCharCode(114,95,53,50,95,100,101,99,98,110,0);
    let profileactiveT = 1.0;
    let moviesE = String.fromCharCode(115,112,111,116,95,119,95,49,53,0);
    let mbjscommonD = true;
    let d_positionE = String.fromCharCode(103,101,110,101,114,97,116,111,114,95,118,95,56,50,0);
    let auto_qK: Map<any, any> = new Map([[String.fromCharCode(118,105,111,108,101,116,95,111,95,56,0),true ], [String.fromCharCode(99,95,56,51,95,97,117,116,104,0),false ], [String.fromCharCode(114,101,112,108,105,101,115,0),true ]]);
    let smallorangemana = true;
    let homeinactiveX = String.fromCharCode(97,101,115,110,105,95,120,95,50,49,0);
    let liblogger4 = String.fromCharCode(109,98,114,116,104,114,101,97,100,95,116,95,55,53,0);
    let predictionwing: Array<any> = [557, 464, 639];
    let guided = false;
    let basketballawayteamJ = 2.0;
      g_viewx = `${(moviesE == String.fromCharCode(110,0) ? parseInt(`${profileactiveT}`) : moviesE.length)}`;
      d_positionE = "2";
   if (3 < (g_viewx.length << (Math.min(3, Math.abs(auto_qK.size)))) && 1 < (3 << (Math.min(3, Math.abs(auto_qK.size))))) {
       let singaporeF: Array<any> = [237, 988, 285];
       let less0 = true;
       let foregroundf = false;
       let commentc = String.fromCharCode(105,95,51,55,95,97,115,99,98,110,0);
       let scoreU = String.fromCharCode(110,95,52,51,95,109,97,110,121,0);
       let imagenomoredataM = true;
       let buildp = false;
         foregroundf = commentc.length == 53;
      for (let o = 0; o < 3; o++) {
         buildp = singaporeF.includes(buildp);
      }
          let founds = String.fromCharCode(115,95,53,52,95,105,99,111,110,115,0);
          let arrowupS = 2.0;
         singaporeF.push(singaporeF.length & 3);
         founds = `${(String.fromCharCode(114,0) == founds ? founds.length : parseInt(`${arrowupS}`))}`;
         arrowupS += founds.length + 3;
      while (foregroundf && !imagenomoredataM) {
         imagenomoredataM = imagenomoredataM || singaporeF.length >= 45;
         break;
      }
         commentc += "3";
         foregroundf = !less0;
      let livesharey = singaporeF.length <= 8122124;
      do {
         singaporeF = [1];
         if (livesharey) {
            break;
         }
      } while (livesharey && (!imagenomoredataM));
      g_viewx = `${homeinactiveX.length}`;
   }
       let libreactK = String.fromCharCode(122,95,50,95,115,101,114,105,97,108,0);
       let alertB = 1;
      while (1 < (alertB % 4) && (libreactK.length % 4) < 2) {
         alertB |= (String.fromCharCode(105,0) == libreactK ? alertB : libreactK.length);
         break;
      }
      let areay = libreactK.length >= 5265155;
      do {
         libreactK += `${(libreactK == String.fromCharCode(119,0) ? libreactK.length : alertB)}`;
         if (areay) {
            break;
         }
      } while (areay && (libreactK.length <= 2));
       let iconuserK: Map<any, any> = new Map([[String.fromCharCode(107,101,101,112,95,121,95,53,53,0),false ], [String.fromCharCode(97,100,109,105,110,95,49,95,56,56,0),true ], [String.fromCharCode(99,97,114,111,117,115,101,108,95,56,95,51,56,0),false ]]);
       let cataloge: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,100,111,119,110,108,111,97,100,95,112,95,50,48,0),false ], [String.fromCharCode(105,110,110,100,101,114,95,109,95,57,54,0),false ], [String.fromCharCode(117,112,100,97,116,101,115,95,105,95,50,52,0),false ]]);
         libreactK += `${cataloge.size}`;
         iconuserK.set(libreactK, (String.fromCharCode(68,0) == libreactK ? libreactK.length : cataloge.size));
          let whistleorangeo = String.fromCharCode(113,95,57,48,95,118,98,101,122,105,101,114,0);
         iconuserK = new Map([[`${cataloge.size}`, whistleorangeo.length]]);
      moviesE = `${(String.fromCharCode(117,0) == homeinactiveX ? d_positionE.length : homeinactiveX.length)}`;
      profileactiveT /= Math.max(3, auto_qK.size);
   while (!smallorangemana) {
      injuryw *= homeinactiveX.length;
      break;
   }

        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

       let libtob1 = String.fromCharCode(118,97,100,107,104,122,95,97,95,54,52,0);
       let themeD = 4;
         libtob1 += `${libtob1.length}`;
          let backgroundw = false;
         libtob1 = `${libtob1.length}`;
         backgroundw = (!backgroundw ? !backgroundw : backgroundw);
         themeD %= Math.max(2 - libtob1.length, 3);
      if (4 >= (2 + libtob1.length) && 2 >= (themeD + libtob1.length)) {
         themeD ^= libtob1.length;
      }
      for (let d = 0; d < 1; d++) {
         libtob1 = `${2 ^ libtob1.length}`;
      }
          let combineI = false;
          let qaagi = String.fromCharCode(104,95,54,48,95,98,97,115,101,100,0);
         themeD += libtob1.length;
         combineI = 6 < qaagi.length;
         qaagi += `${qaagi.length}`;
      auto_qK = new Map([[`${injuryw}`, moviesE.length]]);
   while ((profileactiveT * injuryw) == 3.77 && (injuryw * 3.77) == 2.8) {
      profileactiveT += ((mbjscommonD ? 1 : 2) % 2);
      break;
   }
      g_viewx += `${parseInt(`${profileactiveT}`)}`;
   while (d_positionE.endsWith(`${mbjscommonD}`)) {
      mbjscommonD = 61 <= auto_qK.size;
      break;
   }
   for (let s = 0; s < 1; s++) {
       let iconpointscorep = 4;
       let smallorangemanc = 3;
      if ((smallorangemanc ^ iconpointscorep) < 5 || (5 ^ iconpointscorep) < 1) {
         iconpointscorep %= Math.max(2, smallorangemanc);
      }
         iconpointscorep /= Math.max(1, 1 | iconpointscorep);
      if ((1 ^ smallorangemanc) <= 3) {
         iconpointscorep /= Math.max(smallorangemanc, 1);
      }
          let iconarrowrightwhitei = 1;
         smallorangemanc ^= 1 | smallorangemanc;
         iconarrowrightwhitei -= 1 | iconarrowrightwhitei;
          let sport2: Map<any, any> = new Map([[String.fromCharCode(100,101,99,114,121,112,116,101,100,95,118,95,55,55,0),String.fromCharCode(108,112,99,109,95,107,95,57,52,0)], [String.fromCharCode(102,95,52,50,95,109,117,108,116,120,109,117,108,116,0),String.fromCharCode(115,108,101,101,112,95,49,95,56,53,0)], [String.fromCharCode(115,95,50,48,95,112,101,114,115,105,115,116,101,110,116,0),String.fromCharCode(114,95,53,49,95,110,101,105,103,104,98,111,114,115,0)]]);
          let forma = 3.0;
          let libjsijniprofilerf = String.fromCharCode(113,117,97,114,116,122,95,108,95,52,48,0);
         smallorangemanc >>= Math.min(5, Math.abs(2 >> (Math.min(4, Math.abs(smallorangemanc)))));
         sport2.set(libjsijniprofilerf, libjsijniprofilerf.length / (Math.max(3, 5)));
         forma += parseFloat(`${libjsijniprofilerf.length ^ 2}`);
      while ((2 + smallorangemanc) <= 4) {
         smallorangemanc /= Math.max(smallorangemanc % 3, 3);
         break;
      }
      injuryw -= 2;
   }
      auto_qK.set(homeinactiveX, homeinactiveX.length / 3);

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });

      mbjscommonD = injuryw == 87.62;
       let condensed5 = 0;
       let libglogs: Map<any, any> = new Map([[String.fromCharCode(98,95,51,56,95,114,101,97,100,102,117,108,108,0),String.fromCharCode(101,114,114,111,114,95,97,95,55,50,0)], [String.fromCharCode(102,95,53,49,95,118,114,97,115,116,101,114,0),String.fromCharCode(101,120,116,101,114,110,97,108,108,121,95,102,95,54,55,0)]]);
          let homeloadingV = String.fromCharCode(103,109,116,105,109,101,95,105,95,53,49,0);
         condensed5 -= homeloadingV.length % (Math.max(2, 9));
      for (let e = 0; e < 3; e++) {
          let controld = String.fromCharCode(112,114,111,103,114,101,115,115,105,118,101,95,97,95,53,48,0);
          let update_o86 = 3;
         condensed5 >>= Math.min(2, Math.abs(3 / (Math.max(6, condensed5))));
         controld = `${update_o86}`;
         update_o86 /= Math.max((controld == String.fromCharCode(73,0) ? controld.length : update_o86), 5);
      }
      for (let e = 0; e < 2; e++) {
         condensed5 -= 1 ^ libglogs.size;
      }
      if (Array.from(libglogs.keys()).includes(`${condensed5}`)) {
         condensed5 -= 3;
      }
          let orangedownarrowd = String.fromCharCode(109,95,50,53,95,110,101,117,116,114,97,108,0);
          let selectedk = false;
          let iconnotificationnewl = 0.0;
         condensed5 *= condensed5;
         orangedownarrowd = `${((selectedk ? 1 : 4))}`;
         selectedk = 77 == orangedownarrowd.length;
         iconnotificationnewl *= parseFloat(`${3}`);
         libglogs = new Map([[`${libglogs.size}`, libglogs.size]]);
      injuryw += g_viewx.length ^ homeinactiveX.length;
      moviesE = `${g_viewx.length}`;
   if (3 < homeinactiveX.length) {
       let matchinactivee = false;
      for (let j = 0; j < 1; j++) {
          let upload8 = 2.0;
          let configj: Map<any, any> = new Map([[String.fromCharCode(101,120,112,97,110,100,97,98,108,101,95,122,95,53,0),true ], [String.fromCharCode(117,95,50,52,95,112,117,114,112,111,115,101,102,117,108,0),true ]]);
          let service4 = 1;
         matchinactivee = service4 < 16;
         upload8 -= parseInt(`${upload8}`);
         configj = new Map([[`${configj.size}`, configj.size]]);
         service4 ^= 2;
      }
      for (let n = 0; n < 2; n++) {
         matchinactivee = (matchinactivee ? !matchinactivee : matchinactivee);
      }
         matchinactivee = (matchinactivee ? matchinactivee : matchinactivee);
      homeinactiveX += `${homeinactiveX.length}`;
   }
   while (liblogger4.length >= 5) {
       let modeT = 3;
       let spech = 5.0;
       let pangled = false;
       let overlayL = 0;
       let whistleorangeV = 0.0;
      let greytickl = modeT <= 6832568;
      do {
          let headerE = 4;
         modeT <<= Math.min(1, Math.abs(3));
         headerE &= headerE + headerE;
         if (greytickl) {
            break;
         }
      } while ((1 > (modeT << (Math.min(Math.abs(1), 2)))) && greytickl);
      if (4.1 <= (whistleorangeV / 1)) {
         spech -= parseInt(`${spech}`);
      }
          let schedule2: Array<any> = [936, 855];
          let scoreW = 5;
         spech *= 2;
         schedule2.push(2);
         scoreW |= schedule2.length;
       let index5 = 5.0;
         spech *= overlayL;
      while (!pangled) {
         overlayL *= 3 ^ parseInt(`${index5}`);
         break;
      }
         overlayL %= Math.max(5, parseInt(`${spech}`) | 1);
         spech /= Math.max(overlayL - 1, 5);
       let singapore7 = String.fromCharCode(99,108,105,112,102,95,111,95,53,50,0);
      for (let n = 0; n < 3; n++) {
          let huaweia = String.fromCharCode(115,99,114,97,116,99,104,95,118,95,50,51,0);
          let wnewsd = 5.0;
          let whatsapp_ = 4;
          let tickD: Array<any> = [483, 207, 396];
         singapore7 = `${whatsapp_}`;
         huaweia = `${parseInt(`${wnewsd}`) >> (Math.min(Math.abs(2), 3))}`;
         wnewsd -= huaweia.length * parseInt(`${wnewsd}`);
         whatsapp_ ^= tickD.length << (Math.min(Math.abs(3), 1));
         tickD.push(tickD.length);
      }
          let activityB = 0.0;
          let networkg = String.fromCharCode(105,110,100,105,114,101,99,116,95,122,95,56,55,0);
          let whiteticks = 0;
         index5 /= Math.max(2, 4);
         activityB += parseFloat(`${whiteticks}`);
         networkg += "3";
         whiteticks ^= (String.fromCharCode(57,0) == networkg ? parseInt(`${activityB}`) : networkg.length);
          let greene = 0.0;
          let activity0 = 3;
         overlayL /= Math.max(1, parseInt(`${spech}`));
         greene *= parseFloat(`${parseInt(`${greene}`)}`);
         activity0 ^= 1 - activity0;
         singapore7 = `${modeT}`;
       let filterF = 3;
       let libruntimeexecutorK = 4;
         overlayL ^= 2 ^ parseInt(`${spech}`);
      liblogger4 += `${overlayL ^ 2}`;
      break;
   }
   if (liblogger4.length == 5 || smallorangemana) {
       let basketballe = false;
       let leagueA = 4.0;
         basketballe = leagueA > 15.16;
      let orangeD = basketballe ? !basketballe : basketballe;
      do {
         basketballe = leagueA > 34.83;
         if (orangeD) {
            break;
         }
      } while ((basketballe) && orangeD);
       let mappingY = false;
       let launchD = true;
      if (basketballe) {
         leagueA -= ((mappingY ? 3 : 4) + parseInt(`${leagueA}`));
      }
       let fileK: Map<any, any> = new Map([[String.fromCharCode(97,95,50,95,115,105,110,107,0),866], [String.fromCharCode(98,95,57,55,95,118,101,114,116,0),406]]);
      while (!Array.from(fileK.keys()).includes(`${leagueA}`)) {
          let iconrightorangez = String.fromCharCode(116,104,114,111,119,105,110,103,95,49,95,56,0);
         fileK = new Map([[`${basketballe}`, iconrightorangez.length]]);
         break;
      }
      liblogger4 = "2";
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
                            : require("@static/images/iconfeedbackIconpointscoreHomeicon.png")
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
