import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import createStyles from "./yys_gpay_roboto";
import { useAppDispatch, useSelector } from "@hooks/yys_frame";
import { CPressable, CTextInput } from "../../../../components/atoms";
import SendIcon from '@static/images/flipperSuccessActions.svg';
import SendFillIcon from '@static/images/shrinkPoint.svg';
import { COMMENT_MAX_INPUT } from "@utility/yys_ajax_switch";
import { yys_TooltipsKlevin } from "@type/yys_libzeus";
import { yys_EmojiUser } from "@redux/reducers/yys_bell_gdtadv";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux/actions/yys_dropdown_empty";
import { yys_ViewerLess } from "../../../types/yys_league_mounting";
import { useTheme } from "@react-navigation/native";
import { Avatar } from "@rneui/base";
import { yys_Transfer, yys_Shrink } from "@type/yys_step";
import { debounce } from "lodash";
import { UnreadCard } from "../../../../components/chat/yys_reducer_single";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";

type yys_ConfigureUimanager = {
    matchID: string,
    streamer: yys_ViewerLess,
    sportType: string,
    onInputFocus?: (isFocus: boolean) => void,
}

const PrivateChatPage = ({
    matchID,
    streamer,
    sportType,
    onInputFocus,
}: yys_ConfigureUimanager) => {
    const PIN_YIN_ACCEPTED = 20;

    const { colors } = useTheme();
    const styles = useMemo(() => createStyles({ colors }), []);

    const chatState = useSelector<yys_EmojiUser>('chatReducer');
    const userState = useSelector<yys_HejiCricket>('userReducer');
    const [comment, setComment] = useState('');
    const [historyChat, sethistoryChat] = useState<yys_Transfer[]>([]);
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<yys_Transfer> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = yys_RelatedTooltips.isLogin(userState.user);

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
       let liveO = 0.0;
    let ball2 = 4.0;
    let proxyC = false;
    let mbnativeadvancedb: Map<any, any> = new Map([[String.fromCharCode(112,114,111,98,97,98,108,101,95,56,95,56,54,0),865], [String.fromCharCode(115,95,53,57,95,101,97,105,100,99,116,0),343], [String.fromCharCode(116,95,53,54,95,114,101,110,101,119,0),854]]);
    let gdtadvA = 3.0;
    let filed8 = 2.0;
    let modal6 = 2.0;
    let libflipperV: Map<any, any> = new Map([[String.fromCharCode(114,97,109,112,95,116,95,56,54,0),String.fromCharCode(115,101,110,116,101,110,99,101,95,105,95,54,56,0)], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,115,95,122,95,53,54,0),String.fromCharCode(115,97,108,116,95,50,95,56,55,0)]]);
    let holderI: Map<any, any> = new Map([[String.fromCharCode(98,101,105,103,110,101,116,95,101,95,52,54,0),true ], [String.fromCharCode(116,97,107,101,95,115,95,57,57,0),true ], [String.fromCharCode(106,111,98,115,95,114,95,54,57,0),false ]]);
    let wind2 = String.fromCharCode(117,95,54,56,95,98,101,104,97,118,105,111,117,114,0);
    let notification9 = String.fromCharCode(99,111,111,108,100,111,119,110,95,57,95,49,53,0);
    let macaui = 5.0;
    let disconnecteds = 5.0;
    let fill2 = 1.0;
    let modityP = false;
      modal6 *= 1 - mbnativeadvancedb.size;
       let detailsm = 5.0;
       let appleO = 4;
       let typingX = String.fromCharCode(114,101,106,111,105,110,95,107,95,51,55,0);
      let orientationn = typingX == String.fromCharCode(115,52,117,51,50,120,104,0);
      do {
          let sigmobL: Array<any> = [String.fromCharCode(114,101,103,105,111,110,95,52,95,53,49,0), String.fromCharCode(110,95,57,50,95,99,108,111,115,101,115,116,0), String.fromCharCode(104,95,55,51,95,102,112,101,108,0)];
          let modelsn = String.fromCharCode(103,114,111,117,112,115,95,98,95,49,55,0);
          let downloader9 = false;
         typingX = `${typingX.length}`;
         sigmobL = [(2 >> (Math.min(3, Math.abs((downloader9 ? 2 : 3)))))];
         modelsn = `${((downloader9 ? 4 : 4) >> (Math.min(sigmobL.length, 4)))}`;
         if (orientationn) {
            break;
         }
      } while (orientationn && (!typingX.includes(`${appleO}`)));
      for (let e = 0; e < 3; e++) {
          let hiadK = 5.0;
          let time_hj: Array<any> = [219, 669, 11];
          let videojsP = 3;
          let kuaishou6: Map<any, any> = new Map([[String.fromCharCode(107,95,50,50,95,99,111,100,101,99,115,0),367], [String.fromCharCode(116,97,112,101,95,51,95,49,51,0),37], [String.fromCharCode(122,95,54,50,95,108,112,99,108,115,112,0),253]]);
          let more5 = String.fromCharCode(97,102,102,101,99,116,101,100,95,112,95,49,51,0);
         appleO += videojsP;
         hiadK -= parseFloat(`${2 << (Math.min(2, Math.abs(kuaishou6.size)))}`);
         time_hj = [3];
         videojsP /= Math.max(more5.length, 5);
         kuaishou6.set(`${hiadK}`, (String.fromCharCode(116,0) == more5 ? more5.length : parseInt(`${hiadK}`)));
      }
       let description_fz: Array<any> = [636, 796, 196];
      while ((appleO >> (Math.min(Math.abs(1), 5))) >= 1 && 1 >= (1 | appleO)) {
         detailsm *= description_fz.length >> (Math.min(Math.abs(3), 5));
         break;
      }
       let robotoX = String.fromCharCode(110,95,56,57,95,100,105,114,101,99,116,100,0);
       let suggestionr = 2.0;
      for (let m = 0; m < 1; m++) {
         suggestionr += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${detailsm}`)), 3))}`);
      }
         robotoX += `${description_fz.length << (Math.min(robotoX.length, 2))}`;
      let utilsu = String.fromCharCode(104,111,110,0) == robotoX;
      do {
         robotoX += `${appleO | description_fz.length}`;
         if (utilsu) {
            break;
         }
      } while (utilsu && (!robotoX.endsWith(`${suggestionr}`)));
      mbnativeadvancedb = new Map([[`${libflipperV.size}`, appleO ^ libflipperV.size]]);
       let rendera = String.fromCharCode(107,95,56,48,95,97,117,116,104,111,114,105,122,101,0);
      for (let c = 0; c < 2; c++) {
         rendera += `${rendera.length >> (Math.min(2, rendera.length))}`;
      }
          let collectionU = String.fromCharCode(117,112,97,116,101,100,95,100,95,56,55,0);
          let fadfdeebbbfdabbbabdadfaaddaas = String.fromCharCode(109,98,115,101,103,109,101,110,116,97,116,105,111,110,95,107,95,49,55,0);
         rendera += "3";
         collectionU = `${(collectionU == String.fromCharCode(75,0) ? collectionU.length : fadfdeebbbfdabbbabdadfaaddaas.length)}`;
         fadfdeebbbfdabbbabdadfaaddaas += `${collectionU.length >> (Math.min(Math.abs(1), 3))}`;
      let interstitiale = rendera.length >= 9399065;
      do {
         rendera += `${rendera.length}`;
         if (interstitiale) {
            break;
         }
      } while (interstitiale && (rendera.length > rendera.length));
      modal6 /= Math.max(2, parseInt(`${ball2}`));
   let libfbjni8 = 8645532.0 >= gdtadvA;
   do {
      gdtadvA /= Math.max(2, (mbnativeadvancedb.size | (proxyC ? 3 : 5)));
      if (libfbjni8) {
         break;
      }
   } while ((4.77 < (gdtadvA - 5.30) && (gdtadvA - filed8) < 5.30) && libfbjni8);

        const histories = chatState.privateRoomHistory?.filter(e => e.roomId === `private:${matchID}` && e.userId === chatState.userId);

   for (let n = 0; n < 3; n++) {
      libflipperV.set(`${mbnativeadvancedb.size}`, mbnativeadvancedb.size + 1);
   }
      ball2 /= Math.max(1, parseFloat(`${parseInt(`${gdtadvA}`) >> (Math.min(Math.abs(holderI.size), 1))}`));
      libflipperV = new Map([[`${libflipperV.size}`, ((proxyC ? 2 : 5) | libflipperV.size)]]);
       let zhubod: Array<any> = [717, 9, 865];
      if (3 >= (zhubod.length >> (Math.min(4, zhubod.length)))) {
         zhubod = [zhubod.length];
      }
         zhubod = [3 << (Math.min(4, zhubod.length))];
          let clockI = 3.0;
         zhubod = [zhubod.length];
         clockI /= Math.max(4, parseInt(`${clockI}`));
      ball2 -= parseFloat(`${wind2.length}`);

        if (!histories || histories.length === 0) return;

   while (!proxyC) {
      ball2 *= parseFloat(`${libflipperV.size + wind2.length}`);
      break;
   }
       let downloaded5 = 3;
       let catalogW = 1.0;
      for (let n = 0; n < 2; n++) {
         downloaded5 &= parseInt(`${catalogW}`) % (Math.max(2, downloaded5));
      }
      while (5 <= (downloaded5 / (Math.max(parseInt(`${catalogW}`), 4))) && 1.91 <= (catalogW / 3.10)) {
          let nalyticsb: Array<any> = [412, 998];
          let miniq = 5.0;
          let textinputu = String.fromCharCode(112,114,101,118,101,110,116,115,95,51,95,55,48,0);
          let videoU = String.fromCharCode(115,95,50,56,95,103,114,97,121,102,0);
          let tail3: Map<any, any> = new Map([[String.fromCharCode(103,95,49,49,95,101,113,117,97,108,105,122,101,114,0),580], [String.fromCharCode(102,112,99,95,116,95,56,50,0),366]]);
         downloaded5 += parseInt(`${miniq}`) - 3;
         nalyticsb.push(textinputu.length + 2);
         miniq /= Math.max(1, parseFloat(`${3 & textinputu.length}`));
         videoU = `${videoU.length >> (Math.min(Math.abs(2), 4))}`;
         tail3 = new Map([[textinputu, (videoU == String.fromCharCode(121,0) ? textinputu.length : videoU.length)]]);
         break;
      }
         downloaded5 <<= Math.min(4, Math.abs(1));
      let casting6 = 5053795.0 >= catalogW;
      do {
         catalogW /= Math.max(3, parseFloat(`${3}`));
         if (casting6) {
            break;
         }
      } while (casting6 && (2.97 <= (2.13 + catalogW) || (parseFloat(`${downloaded5}`) + catalogW) <= 2.13));
      let privacy4 = 9636440.0 <= catalogW;
      do {
         catalogW -= parseFloat(`${downloaded5 - parseInt(`${catalogW}`)}`);
         if (privacy4) {
            break;
         }
      } while (privacy4 && (1 <= (downloaded5 + 2) && 4.79 <= (catalogW + 4.14)));
      for (let n = 0; n < 3; n++) {
         downloaded5 %= Math.max(5, parseInt(`${catalogW}`) >> (Math.min(1, Math.abs(1))));
      }
      filed8 *= parseFloat(`${notification9.length + 2}`);
      proxyC = mbnativeadvancedb.size <= 44;
      gdtadvA *= mbnativeadvancedb.size & libflipperV.size;

        if (historyChat.length === 0) {

      proxyC = (parseFloat(`${wind2.length}`) + liveO) >= 76.48;
       let policyy = String.fromCharCode(122,95,54,56,95,98,117,105,108,116,105,110,0);
       let neon3 = 3.0;
         policyy = `${parseInt(`${neon3}`) % 1}`;
         policyy = "2";
      for (let w = 0; w < 1; w++) {
         neon3 *= parseFloat(`${parseInt(`${neon3}`) * 3}`);
      }
      for (let l = 0; l < 2; l++) {
          let videojsA: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,120,95,106,95,54,0),true ], [String.fromCharCode(100,101,116,97,105,108,95,121,95,49,51,0),false ], [String.fromCharCode(115,116,111,112,112,105,110,103,95,97,95,52,52,0),true ]]);
          let bingC = 4;
          let taiwanK: Array<any> = [868, 128];
          let libyogaF = String.fromCharCode(102,95,56,52,95,115,116,114,109,0);
         neon3 *= parseFloat(`${libyogaF.length}`);
         videojsA.set(`${bingC}`, 2);
         bingC -= bingC - 3;
         taiwanK = [taiwanK.length | bingC];
         libyogaF = `${videojsA.size}`;
      }
         policyy += `${policyy.length >> (Math.min(Math.abs(1), 3))}`;
      if (!policyy.startsWith(`${neon3}`)) {
          let networkb = 3.0;
          let plusy = 1.0;
         neon3 *= parseFloat(`${1 % (Math.max(parseInt(`${networkb}`), 8))}`);
         networkb -= parseFloat(`${parseInt(`${plusy}`) | parseInt(`${plusy}`)}`);
      }
      libflipperV = new Map([[`${mbnativeadvancedb.size}`, mbnativeadvancedb.size * 3]]);
   let zoom7 = 5975492 <= libflipperV.size;
   do {
      libflipperV.set(`${notification9}`, (notification9 == String.fromCharCode(80,0) ? mbnativeadvancedb.size : notification9.length));
      if (zoom7) {
         break;
      }
   } while (zoom7 && (1 <= (5 | libflipperV.size) && libflipperV.size <= 5));
   for (let n = 0; n < 1; n++) {
       let orientation6 = String.fromCharCode(118,97,114,105,110,102,111,95,57,95,54,55,0);
       let mapbuffera = 2.0;
      if ((orientation6.length / 4) == 2 && (mapbuffera - parseFloat(`${orientation6.length}`)) == 1.35) {
         orientation6 += `${parseInt(`${mapbuffera}`) | orientation6.length}`;
      }
         mapbuffera *= (parseFloat(`${String.fromCharCode(106,0) == orientation6 ? orientation6.length : parseInt(`${mapbuffera}`)}`));
         orientation6 += `${(String.fromCharCode(73,0) == orientation6 ? orientation6.length : parseInt(`${mapbuffera}`))}`;
         orientation6 = `${orientation6.length}`;
       let righty = 0.0;
       let thailandA = 4.0;
      mbnativeadvancedb = new Map([[`${gdtadvA}`, wind2.length]]);
   }
            sethistoryChat([histories[histories.length - 1]]);
        } else {

      holderI.set(`${ball2}`, parseInt(`${liveO}`) << (Math.min(Math.abs(parseInt(`${ball2}`)), 1)));
      modal6 *= 3;
   let basketballP = libflipperV.size <= 9255133;
   do {
      libflipperV.set(`${modal6}`, parseInt(`${modal6}`) - mbnativeadvancedb.size);
      if (basketballP) {
         break;
      }
   } while ((1 > libflipperV.size) && basketballP);
       let logou = String.fromCharCode(117,102,102,101,114,95,48,95,54,56,0);
          let schedulerU = true;
          let empty2: Map<any, any> = new Map([[String.fromCharCode(121,95,54,56,95,113,117,97,100,116,114,101,101,0),813], [String.fromCharCode(102,97,105,108,95,99,95,49,0),891]]);
          let arrowx = String.fromCharCode(102,97,99,116,111,114,115,95,112,95,50,48,0);
         logou += `${(String.fromCharCode(57,0) == arrowx ? (schedulerU ? 4 : 3) : arrowx.length)}`;
         schedulerU = empty2.size <= empty2.size;
      for (let b = 0; b < 2; b++) {
          let fillR: Array<any> = [441, 584];
          let unimplementedviewF: Array<any> = [971, 538];
          let stylev = String.fromCharCode(104,95,54,54,95,97,102,102,101,99,116,101,100,0);
         logou += `${1 | unimplementedviewF.length}`;
         fillR = [stylev.length * 1];
         unimplementedviewF = [2 & stylev.length];
      }
          let humidityf = String.fromCharCode(104,95,49,50,95,99,104,97,110,103,101,0);
         logou += "1";
         humidityf = `${3 | humidityf.length}`;
      proxyC = (wind2.length & logou.length) >= 43;
            const indexFound = histories.findIndex(e => e.joinDate === historyChat[0].joinDate);

      gdtadvA *= wind2.length - 3;
       let telegramO = String.fromCharCode(104,114,116,102,95,108,95,56,49,0);
       let libfb8 = true;
      while (telegramO.endsWith(`${libfb8}`)) {
         telegramO += "2";
         break;
      }
         libfb8 = !libfb8;
      while (!libfb8 || 2 < telegramO.length) {
         libfb8 = (50 >= ((!libfb8 ? telegramO.length : 50) % (Math.max(telegramO.length, 6))));
         break;
      }
      for (let e = 0; e < 2; e++) {
         libfb8 = telegramO.length >= 16;
      }
         libfb8 = (27 <= ((!libfb8 ? 27 : telegramO.length) / (Math.max(telegramO.length, 1))));
          let awayn = false;
         libfb8 = telegramO.endsWith(`${awayn}`);
      mbnativeadvancedb = new Map([[`${holderI.size}`, holderI.size]]);
       let malaysiar = false;
       let dice7 = 4.0;
         malaysiar = !malaysiar || 67.6 > dice7;
         dice7 += (parseFloat(`${(malaysiar ? 2 : 4) << (Math.min(Math.abs(parseInt(`${dice7}`)), 4))}`));
          let settingsI = String.fromCharCode(108,111,103,103,105,110,103,95,118,95,55,51,0);
         dice7 *= parseFloat(`${3}`);
         settingsI = `${3 << (Math.min(2, settingsI.length))}`;
      while (dice7 <= 2.40 && (2.40 - dice7) <= 2.8) {
         malaysiar = !malaysiar;
         break;
      }
         dice7 += parseFloat(`${2 & parseInt(`${dice7}`)}`);
         malaysiar = !malaysiar;
      filed8 /= Math.max(5, parseFloat(`${1 - wind2.length}`));
       let runtimeschedulerC = String.fromCharCode(102,114,101,101,100,117,109,112,98,117,102,102,101,114,95,102,95,50,57,0);
       let arrowQ = 2.0;
       let becomet: Array<any> = [String.fromCharCode(112,114,101,99,105,115,101,95,105,95,57,56,0), String.fromCharCode(118,95,55,50,95,117,110,122,116,101,108,108,0)];
       let appleT: Array<any> = [546, 55];
      while ((runtimeschedulerC.length - 2) <= 2 && 2 <= (runtimeschedulerC.length - 2)) {
          let profile4 = false;
          let actionE = false;
          let modelsI = String.fromCharCode(115,99,97,108,101,115,95,109,95,54,52,0);
          let readZ = true;
         appleT = [((readZ ? 1 : 1) + parseInt(`${arrowQ}`))];
         profile4 = (!profile4 ? !actionE : !profile4);
         actionE = modelsI.length == 70;
         modelsI += `${((profile4 ? 3 : 3) + 1)}`;
         readZ = (!profile4 ? !actionE : profile4);
         break;
      }
         appleT.push(2 - parseInt(`${arrowQ}`));
       let customU = String.fromCharCode(97,95,49,95,109,105,110,109,97,120,0);
       let greenU = String.fromCharCode(98,95,52,49,95,115,113,108,0);
      if ((greenU.length / 5) == 2) {
         greenU = `${3 % (Math.max(6, appleT.length))}`;
      }
      if ((becomet.length & 4) >= 4 || 4 >= (appleT.length & becomet.length)) {
         appleT.push(customU.length << (Math.min(1, greenU.length)));
      }
      mbnativeadvancedb = new Map([[`${modal6}`, 2]]);

            if (indexFound === -1 || (indexFound - 1) < 0) return;

      liveO *= parseFloat(`${holderI.size - 3}`);
   for (let p = 0; p < 1; p++) {
      holderI.set(wind2, (String.fromCharCode(90,0) == wind2 ? parseInt(`${liveO}`) : wind2.length));
   }
      ball2 -= parseFloat(`${parseInt(`${filed8}`) - 2}`);
      gdtadvA /= Math.max(5, 3);

            sethistoryChat(prev => [histories[indexFound - 1]].concat(prev));
        }
    }, 500);

    const renderChatGroup = useCallback(({ item }: { item: yys_Shrink }) => {
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

    const renderMessageItem = useCallback(({ item }: { item: yys_TooltipsKlevin }) => {
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
                            : require("@static/images/tempBasketballHooks.png")
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
                        : require("@static/images/tempBasketballHooks.png")
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
       let connectionJ: Array<any> = [481, 913];
    let becomeS = String.fromCharCode(99,97,108,108,108,95,56,95,55,57,0);
    let relatedP = true;
    let mergerM = true;
    let suggestionl: Map<any, any> = new Map([[String.fromCharCode(104,95,49,53,95,114,101,97,99,116,105,111,110,0),383], [String.fromCharCode(103,95,50,51,95,117,110,109,97,112,0),332]]);
    let indicatorX = false;
    let confirmationb = false;
    let faviconC = 3.0;
    let default_44a = String.fromCharCode(121,111,110,108,121,120,95,118,95,54,57,0);
    let privacyK = true;
    let directY = 3.0;
    let libavcodecL = 2.0;
    let hiad1 = String.fromCharCode(99,97,110,99,101,108,95,118,95,56,0);
    let k_imagek: Map<any, any> = new Map([[String.fromCharCode(111,98,106,101,99,116,95,107,95,56,50,0),String.fromCharCode(115,97,118,101,95,105,95,51,54,0)], [String.fromCharCode(109,97,105,110,100,98,95,50,95,57,52,0),String.fromCharCode(104,95,54,56,95,105,110,102,111,0)]]);
    let imagemanagerT: Map<any, any> = new Map([[String.fromCharCode(121,95,52,57,95,111,118,101,114,108,97,121,115,0),752], [String.fromCharCode(100,95,53,51,95,99,111,110,115,116,114,97,105,110,0),809]]);
    let suggestionY = String.fromCharCode(97,95,50,56,95,101,115,116,105,109,97,116,101,115,0);
    let gpayv = 0;
    let umengH = String.fromCharCode(98,95,49,52,95,115,104,97,100,101,114,115,0);
      directY /= Math.max((parseFloat(`${(indicatorX ? 3 : 4) & 1}`)), 2);
   if (Array.from(suggestionl.values()).includes(directY)) {
       let sliderh = String.fromCharCode(109,112,101,103,118,105,100,101,111,95,53,95,54,55,0);
       let paginationj = String.fromCharCode(99,111,117,110,116,101,100,95,107,95,49,53,0);
      if (sliderh.length <= 3) {
         sliderh += `${paginationj.length}`;
      }
      for (let t = 0; t < 1; t++) {
         sliderh += `${paginationj.length}`;
      }
          let libcrashsdky = true;
          let resendx = 1;
         sliderh += `${((libcrashsdky ? 4 : 5) / (Math.max(sliderh.length, 5)))}`;
         libcrashsdky = 91 == resendx || 91 == resendx;
         paginationj += `${3 * sliderh.length}`;
         sliderh += `${sliderh.length + paginationj.length}`;
       let penaltya = String.fromCharCode(109,95,51,51,95,97,108,112,104,97,98,101,116,115,0);
      suggestionl = new Map([[`${mergerM}`, parseInt(`${faviconC}`) >> (Math.min(5, Math.abs(2)))]]);
   }
   if (!indicatorX) {
      indicatorX = (parseInt(`${directY}`) / (Math.max(connectionJ.length, 8))) <= 40;
   }
   if (indicatorX) {
      indicatorX = (privacyK ? confirmationb : !privacyK);
   }
      faviconC *= parseFloat(`${connectionJ.length / 3}`);
   if ((5 + faviconC) >= 2.79) {
       let classes6 = String.fromCharCode(122,95,53,52,95,99,111,109,112,105,116,97,98,108,101,0);
       let yingP = String.fromCharCode(107,95,49,48,95,116,114,117,101,109,111,116,105,111,110,114,116,0);
       let graphr = 0.0;
       let giftg = 4;
       let fastforwardt = String.fromCharCode(119,95,54,57,95,99,111,108,111,114,101,100,0);
          let stationg = String.fromCharCode(103,95,55,51,95,114,117,110,110,101,114,0);
          let disconnected_ = false;
          let valuesO = String.fromCharCode(113,95,55,53,95,111,118,101,114,117,115,101,0);
         fastforwardt = "2";
         stationg += `${(valuesO == String.fromCharCode(120,0) ? valuesO.length : (disconnected_ ? 1 : 3))}`;
         disconnected_ = 61 <= valuesO.length && stationg == String.fromCharCode(117,0);
         fastforwardt = `${3 + classes6.length}`;
         classes6 = `${(String.fromCharCode(86,0) == yingP ? parseInt(`${graphr}`) : yingP.length)}`;
         giftg *= 3;
         yingP += `${parseInt(`${graphr}`) / 3}`;
         giftg >>= Math.min(1, yingP.length);
      if ((fastforwardt.length * parseInt(`${graphr}`)) >= 3 && (parseInt(`${graphr}`) * fastforwardt.length) >= 3) {
          let downloadingw = String.fromCharCode(101,95,55,95,115,115,115,101,0);
          let philippinesu = 4;
          let downloadedh = String.fromCharCode(112,105,110,110,105,110,103,95,48,95,53,51,0);
          let countdownx: Array<any> = [705, 738, 720];
         fastforwardt += `${giftg}`;
         downloadingw += `${countdownx.length - 3}`;
         philippinesu *= downloadedh.length;
         downloadedh += `${philippinesu - downloadedh.length}`;
         countdownx = [3 - philippinesu];
      }
          let ksadg = String.fromCharCode(109,95,49,57,95,98,108,97,107,101,0);
          let nterstitial4: Map<any, any> = new Map([[String.fromCharCode(112,101,110,100,105,110,103,95,108,95,55,50,0),843], [String.fromCharCode(115,95,50,51,95,100,101,105,110,116,0),848], [String.fromCharCode(98,105,110,107,97,117,100,105,111,95,115,95,55,54,0),849]]);
          let libflipperm = String.fromCharCode(103,97,117,115,115,95,49,95,56,49,0);
         yingP += `${ksadg.length}`;
         ksadg += "2";
         nterstitial4 = new Map([[`${nterstitial4.size}`, nterstitial4.size]]);
         libflipperm += `${nterstitial4.size}`;
         giftg -= parseInt(`${graphr}`) / 3;
         yingP += `${yingP.length * 3}`;
       let success_ = 0;
      for (let x = 0; x < 3; x++) {
          let downloadingh = String.fromCharCode(103,101,110,101,114,97,116,101,100,95,119,95,55,48,0);
          let checkboxr = String.fromCharCode(114,114,116,114,95,50,95,57,0);
         giftg >>= Math.min(4, Math.abs(parseInt(`${graphr}`) / 2));
         downloadingh += "3";
         checkboxr += "3";
      }
      for (let b = 0; b < 3; b++) {
         fastforwardt += `${success_ >> (Math.min(Math.abs(2), 3))}`;
      }
         success_ += 3 % (Math.max(5, yingP.length));
          let containerP = String.fromCharCode(117,110,109,97,114,107,95,113,95,51,57,0);
         classes6 = `${fastforwardt.length}`;
         containerP += `${containerP.length ^ containerP.length}`;
      directY -= parseFloat(`${giftg << (Math.min(Math.abs(3), 1))}`);
   }

        if (comment.trim().length === 0 || !isCommentValid) return;

   let libflipper0 = privacyK ? !privacyK : privacyK;
   do {
       let shrinka: Array<any> = [String.fromCharCode(100,95,55,52,95,97,116,116,97,99,107,0), String.fromCharCode(109,111,100,101,108,95,103,95,57,57,0), String.fromCharCode(102,108,97,116,110,101,115,115,95,111,95,49,53,0)];
       let ewardedU = String.fromCharCode(121,117,118,112,99,95,114,95,57,48,0);
       let filtere: Array<any> = [448, 334, 596];
       let championi = String.fromCharCode(107,95,54,53,95,111,112,116,97,114,103,0);
       let xvodn = String.fromCharCode(100,95,57,95,116,114,97,110,115,102,111,114,109,115,0);
      if (championi != String.fromCharCode(57,0) && xvodn.length == 1) {
         championi = `${2 << (Math.min(1, championi.length))}`;
      }
      while (xvodn != championi) {
         championi += `${3 << (Math.min(1, shrinka.length))}`;
         break;
      }
         shrinka = [ewardedU.length];
       let castingm = false;
       let backgroundG = false;
       let modalj = String.fromCharCode(118,95,52,95,99,116,120,0);
      let shrink5 = 7636522 <= filtere.length;
      do {
         filtere = [(modalj.length / (Math.max(4, (castingm ? 2 : 3))))];
         if (shrink5) {
            break;
         }
      } while (((3 - shrinka.length) >= 3) && shrink5);
         ewardedU += "3";
      while (xvodn == String.fromCharCode(109,0)) {
          let tickedq = false;
          let twitteru: Array<any> = [79, 762];
          let constantsB = 0.0;
          let pathR = 3.0;
          let ballT: Array<any> = [335, 839];
         modalj += `${2 - championi.length}`;
         tickedq = ballT.includes(tickedq);
         twitteru = [parseInt(`${constantsB}`) / (Math.max(6, ballT.length))];
         constantsB *= (parseInt(`${pathR}`) | (tickedq ? 5 : 5));
         pathR *= parseFloat(`${parseInt(`${constantsB}`) << (Math.min(3, Math.abs(1)))}`);
         break;
      }
         ewardedU = `${shrinka.length}`;
         ewardedU = `${3 ^ ewardedU.length}`;
      let sigmobL = castingm ? !castingm : castingm;
      do {
         castingm = (35 <= (xvodn.length | (!castingm ? xvodn.length : 35)));
         if (sigmobL) {
            break;
         }
      } while (sigmobL && (!ewardedU.endsWith(`${castingm}`)));
          let greenb: Map<any, any> = new Map([[String.fromCharCode(101,95,49,48,95,114,101,112,111,0),161], [String.fromCharCode(118,101,114,116,95,116,95,56,57,0),426]]);
          let android7 = 3.0;
          let analyticC = String.fromCharCode(117,95,55,57,95,115,113,117,97,114,101,0);
         shrinka.push(3 >> (Math.min(4, Math.abs(greenb.size))));
         greenb.set(`${android7}`, 1 | analyticC.length);
         android7 += analyticC.length;
      while (5 >= modalj.length) {
         modalj = `${filtere.length / (Math.max(8, xvodn.length))}`;
         break;
      }
         xvodn = "2";
          let jnewarchdefaultsB = 2;
          let floaterE = String.fromCharCode(102,95,49,51,95,100,105,115,115,105,109,105,108,97,114,105,116,121,0);
          let catagoryU = true;
         shrinka.push(2);
         jnewarchdefaultsB |= floaterE.length;
         floaterE += `${floaterE.length}`;
         catagoryU = !catagoryU;
      privacyK = suggestionl.size <= 5;
      if (libflipper0) {
         break;
      }
   } while ((!privacyK) && libflipper0);
       let shirtJ: Map<any, any> = new Map([[String.fromCharCode(109,95,57,49,95,100,97,115,104,101,110,99,0),681], [String.fromCharCode(100,97,115,104,101,110,99,95,49,95,56,55,0),910], [String.fromCharCode(99,111,102,102,105,110,95,102,95,54,50,0),159]]);
      if (shirtJ.size >= 1) {
         shirtJ = new Map([[`${shirtJ.size}`, shirtJ.size % 1]]);
      }
          let promotione = String.fromCharCode(110,95,57,51,95,110,117,109,101,114,105,99,97,108,0);
          let indicatorL = String.fromCharCode(97,116,97,98,108,101,115,95,114,95,50,50,0);
         shirtJ = new Map([[promotione, 3]]);
         promotione += `${indicatorL.length - 2}`;
         indicatorL += `${(indicatorL == String.fromCharCode(83,0) ? indicatorL.length : indicatorL.length)}`;
      let mapbufferP = 8580365 >= shirtJ.size;
      do {
          let spinnerb = 5;
          let libavdevicez = String.fromCharCode(110,95,53,56,95,105,110,100,101,120,101,100,0);
          let modalh = String.fromCharCode(116,95,51,57,95,118,115,101,114,118,105,99,101,0);
         shirtJ = new Map([[`${shirtJ.size}`, spinnerb]]);
         spinnerb -= libavdevicez.length / (Math.max(modalh.length, 9));
         libavdevicez = `${modalh.length}`;
         if (mapbufferP) {
            break;
         }
      } while (mapbufferP && (4 > (shirtJ.size / (Math.max(4, shirtJ.size))) || 3 > (4 / (Math.max(5, shirtJ.size)))));
      suggestionl = new Map([[`${connectionJ.length}`, 1 & connectionJ.length]]);
   for (let c = 0; c < 3; c++) {
       let relatedV = 0.0;
       let relateda = 4.0;
      if (relateda <= relatedV) {
         relateda *= parseFloat(`${2 + parseInt(`${relatedV}`)}`);
      }
      while (5.87 == relatedV) {
          let china0 = String.fromCharCode(117,112,115,97,109,112,108,101,95,119,95,49,50,0);
         relatedV *= china0.length;
         break;
      }
         relateda /= Math.max(5, parseFloat(`${parseInt(`${relatedV}`)}`));
         relateda *= parseFloat(`${parseInt(`${relatedV}`)}`);
      if (4.38 >= relatedV) {
          let long_ub = 4;
          let floaterA: Array<any> = [552, 912, 522];
          let hoverr: Map<any, any> = new Map([[String.fromCharCode(104,95,53,50,95,114,101,116,97,105,110,0),false ], [String.fromCharCode(104,95,51,51,95,100,105,103,114,97,112,104,0),false ]]);
          let mbridgee = 3.0;
         relatedV *= parseInt(`${relateda}`);
         long_ub &= parseInt(`${mbridgee}`);
         floaterA.push(hoverr.size);
         hoverr = new Map([[`${hoverr.size}`, parseInt(`${mbridgee}`) ^ hoverr.size]]);
      }
         relateda *= parseFloat(`${1 & parseInt(`${relatedV}`)}`);
      indicatorX = 1 <= connectionJ.length;
   }
   for (let q = 0; q < 3; q++) {
      confirmationb = default_44a.length < 83 && !mergerM;
   }
       let turnT = String.fromCharCode(100,95,55,55,95,105,110,116,101,114,97,99,116,105,111,110,115,0);
       let matchp = String.fromCharCode(122,95,55,49,95,114,101,119,114,105,116,101,0);
       let plashJ = 5;
         matchp += `${plashJ}`;
          let zooma = String.fromCharCode(97,95,49,53,95,102,105,110,100,97,115,111,99,0);
         matchp = `${1 | zooma.length}`;
         plashJ += plashJ ^ turnT.length;
      let matchj = String.fromCharCode(117,107,107,109,103,99,0) == matchp;
      do {
         matchp += `${matchp.length}`;
         if (matchj) {
            break;
         }
      } while (matchj && ((matchp.length | plashJ) <= 4));
      for (let o = 0; o < 1; o++) {
         matchp = `${turnT.length % 3}`;
      }
         turnT = `${2 + matchp.length}`;
         turnT += "2";
      while ((plashJ / 2) < 5) {
          let heartr = String.fromCharCode(99,97,108,99,117,108,97,116,101,95,122,95,53,55,0);
          let selection7 = true;
         matchp += `${heartr.length}`;
         heartr = "2";
         break;
      }
      while (matchp.includes(`${plashJ}`)) {
         plashJ -= (String.fromCharCode(65,0) == turnT ? turnT.length : matchp.length);
         break;
      }
      hiad1 += `${(1 * (confirmationb ? 5 : 5))}`;
   let pangleX = String.fromCharCode(51,53,111,50,109,54,53,109,0) == default_44a;
   do {
       let trashx = true;
       let libpangleflippedD = String.fromCharCode(111,95,57,48,95,101,109,98,101,100,100,105,110,103,0);
       let heartR = 3.0;
          let klevinj: Array<any> = [248, 231];
          let rewardvideoi = 5.0;
         trashx = libpangleflippedD.length > klevinj.length;
         klevinj = [parseInt(`${rewardvideoi}`)];
         heartR += (parseFloat(`${(trashx ? 1 : 1) & libpangleflippedD.length}`));
      for (let w = 0; w < 2; w++) {
          let darkR = 2;
          let rules1 = 2.0;
          let f_positionx: Map<any, any> = new Map([[String.fromCharCode(102,116,115,105,115,115,112,97,99,101,95,48,95,55,53,0),String.fromCharCode(97,99,104,105,101,118,101,100,95,54,95,55,54,0)], [String.fromCharCode(118,95,56,50,95,114,101,115,105,103,110,105,110,103,0),String.fromCharCode(103,95,56,54,95,111,103,103,101,114,0)], [String.fromCharCode(106,95,53,57,95,101,120,112,108,97,105,110,0),String.fromCharCode(98,95,54,48,95,99,114,101,97,116,101,0)]]);
          let reactnativejsm: Array<any> = [436, 950, 979];
          let megaphoneE: Array<any> = [377, 315];
         libpangleflippedD += "2";
         darkR <<= Math.min(Math.abs(reactnativejsm.length | 2), 5);
         rules1 += parseFloat(`${f_positionx.size + parseInt(`${rules1}`)}`);
         f_positionx = new Map([[`${f_positionx.size}`, f_positionx.size % 3]]);
         reactnativejsm = [2 + reactnativejsm.length];
         megaphoneE.push(darkR);
      }
         libpangleflippedD += `${libpangleflippedD.length}`;
          let fadfdeebbbfdabbbabdadfaaddaaW = 1.0;
          let dplusk = String.fromCharCode(101,112,115,118,95,53,95,56,49,0);
         trashx = libpangleflippedD == String.fromCharCode(85,0) && 91.39 < heartR;
         fadfdeebbbfdabbbabdadfaaddaaW += parseInt(`${fadfdeebbbfdabbbabdadfaaddaaW}`) * 2;
         dplusk = `${(dplusk == String.fromCharCode(121,0) ? parseInt(`${fadfdeebbbfdabbbabdadfaaddaaW}`) : dplusk.length)}`;
       let scheduler9: Map<any, any> = new Map([[String.fromCharCode(115,95,53,49,95,110,111,116,105,102,105,99,97,116,111,110,115,0),String.fromCharCode(109,95,54,54,95,105,112,100,111,112,100,0)], [String.fromCharCode(109,97,116,101,114,105,97,108,95,97,95,56,51,0),String.fromCharCode(110,95,52,51,95,111,112,101,114,97,116,105,110,103,0)]]);
       let sideP: Map<any, any> = new Map([[String.fromCharCode(97,98,108,101,95,50,95,49,53,0),919], [String.fromCharCode(104,95,57,50,95,117,110,112,97,99,107,101,100,0),158], [String.fromCharCode(114,95,54,51,95,99,98,115,110,105,100,0),382]]);
         libpangleflippedD += `${(String.fromCharCode(86,0) == libpangleflippedD ? libpangleflippedD.length : (trashx ? 3 : 4))}`;
          let resultQ = 5;
          let launchD: Map<any, any> = new Map([[String.fromCharCode(114,101,98,117,99,107,101,116,95,116,95,57,56,0),880], [String.fromCharCode(98,105,97,115,101,100,95,103,95,54,50,0),639], [String.fromCharCode(120,95,55,57,95,105,99,111,110,105,102,105,101,100,0),770]]);
          let libpangleflippedC: Map<any, any> = new Map([[String.fromCharCode(101,95,57,49,95,115,108,105,99,101,116,104,114,101,97,100,0),316], [String.fromCharCode(103,101,116,115,95,121,95,49,52,0),771], [String.fromCharCode(115,97,109,112,108,101,99,112,121,95,101,95,50,57,0),640]]);
         heartR *= parseFloat(`${resultQ}`);
         resultQ += 1;
         launchD = new Map([[`${launchD.size}`, libpangleflippedC.size]]);
         libpangleflippedC = new Map([[`${libpangleflippedC.size}`, libpangleflippedC.size ^ launchD.size]]);
         scheduler9.set(`${trashx}`, (parseInt(`${heartR}`) - (trashx ? 3 : 1)));
      default_44a += `${parseInt(`${faviconC}`)}`;
      if (pangleX) {
         break;
      }
   } while ((2 == default_44a.length) && pangleX);

        appDispatch(sendChatMessage({
            message: comment,
            isPrivate: true,
        }));

      becomeS += "1";
   while ((4.26 / (Math.max(8, directY))) <= 2.95) {
      mergerM = hiad1.includes(`${libavcodecL}`);
      break;
   }
      suggestionl = new Map([[`${indicatorX}`, ((indicatorX ? 1 : 5))]]);
   let questO = privacyK ? !privacyK : privacyK;
   do {
      privacyK = !confirmationb;
      if (questO) {
         break;
      }
   } while (questO && ((4.77 + directY) > 5.77 || directY > 4.77));
   let bridgeo = 6502149 >= suggestionl.size;
   do {
      suggestionl = new Map([[`${indicatorX}`, ((relatedP ? 5 : 4) | (indicatorX ? 5 : 5))]]);
      if (bridgeo) {
         break;
      }
   } while (((suggestionl.size << (Math.min(Math.abs(4), 5))) < 2) && bridgeo);
      suggestionl.set(hiad1, ((confirmationb ? 5 : 5)));

        setComment('');

   let gradlewK = connectionJ.length <= 5180902;
   do {
       let telegramL: Array<any> = [String.fromCharCode(115,95,53,56,95,112,97,114,99,111,114,0), String.fromCharCode(108,105,115,116,101,100,95,51,95,51,0)];
       let combinedL = String.fromCharCode(113,95,55,53,95,114,101,99,101,112,116,105,111,110,0);
       let fillo = String.fromCharCode(107,95,57,50,95,100,101,113,117,111,116,101,0);
       let anytimeQ = 5.0;
       let historyP: Map<any, any> = new Map([[String.fromCharCode(106,95,54,50,95,111,112,101,110,115,115,108,118,0),555], [String.fromCharCode(115,109,106,112,101,103,95,110,95,55,56,0),185]]);
       let libfbY: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,111,110,95,103,95,55,48,0),704], [String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,95,114,95,49,56,0),352]]);
         fillo += "2";
      while (!combinedL.includes(`${anytimeQ}`)) {
          let sansk: Array<any> = [217, 459];
         combinedL = `${fillo.length - libfbY.size}`;
         sansk.push(sansk.length);
         break;
      }
       let benefith = true;
       let stylesi = true;
      while (5 <= telegramL.length || 1 <= (telegramL.length / (Math.max(5, 6)))) {
         benefith = stylesi;
         break;
      }
      while (1 >= (combinedL.length & 4) && 3 >= (4 & telegramL.length)) {
         combinedL += `${fillo.length}`;
         break;
      }
      if ((telegramL.length ^ combinedL.length) > 4 && 4 > (4 ^ combinedL.length)) {
         combinedL = `${((stylesi ? 1 : 3) | parseInt(`${anytimeQ}`))}`;
      }
         combinedL += "1";
      if ((historyP.size - telegramL.length) <= 5 && 5 <= (5 - historyP.size)) {
         telegramL.push(((stylesi ? 4 : 2) | historyP.size));
      }
      if (benefith && fillo.length >= 1) {
         fillo = `${1 & parseInt(`${anytimeQ}`)}`;
      }
      let libavutilz = combinedL == String.fromCharCode(119,102,101,95,97,117,54,102,117,108,0);
      do {
         combinedL = `${telegramL.length}`;
         if (libavutilz) {
            break;
         }
      } while (((historyP.size % (Math.max(2, combinedL.length))) < 4 && (historyP.size % 4) < 5) && libavutilz);
         combinedL += `${fillo.length | historyP.size}`;
      connectionJ.push((suggestionl.size / (Math.max(7, (privacyK ? 1 : 5)))));
      if (gradlewK) {
         break;
      }
   } while (((5 << (Math.min(2, hiad1.length))) < 4 && 5 < (hiad1.length << (Math.min(3, connectionJ.length)))) && gradlewK);
   let datad = 8766976.0 <= faviconC;
   do {
      faviconC += parseFloat(`${2}`);
      if (datad) {
         break;
      }
   } while (datad && (4.30 == faviconC));
   if (5 == (hiad1.length / (Math.max(1, parseInt(`${directY}`)))) || 3.89 == (directY / 1.97)) {
      hiad1 = "1";
   }
   let configureM = String.fromCharCode(120,99,104,104,51,54,111,102,0) == becomeS;
   do {
      becomeS += `${default_44a.length % (Math.max(2, 9))}`;
      if (configureM) {
         break;
      }
   } while (configureM && (2 <= (1 & becomeS.length)));
      confirmationb = connectionJ.includes(libavcodecL);
   while (4 <= becomeS.length) {
       let gmailw: Array<any> = [825, 742, 355];
         gmailw.push(gmailw.length & 1);
         gmailw.push(gmailw.length);
      if (3 > (gmailw.length ^ gmailw.length) || 4 > (gmailw.length ^ 3)) {
         gmailw = [1];
      }
      faviconC -= parseFloat(`${k_imagek.size}`);
      break;
   }
        Keyboard.dismiss();
    }, [isCommentValid, comment]);

    const onUserScroll = () => {
       let linkY = String.fromCharCode(98,101,108,108,95,119,95,51,49,0);
    let libflipper9 = String.fromCharCode(107,95,56,95,117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0);
    let clubE: Array<any> = [345, 714];
    let connectionI: Array<any> = [690, 301, 261];
    let mbridge1 = String.fromCharCode(101,95,57,56,95,115,99,116,112,99,111,110,110,0);
    let controlL = String.fromCharCode(98,97,99,107,119,97,114,100,95,121,95,53,55,0);
    let videojsT = 4.0;
    let gemfilee: Map<any, any> = new Map([[String.fromCharCode(101,95,50,50,95,105,110,116,101,114,108,97,99,101,100,0),144], [String.fromCharCode(112,114,105,111,114,105,116,105,101,115,95,120,95,56,52,0),750]]);
    let x_imagea = 5.0;
    let sellv = String.fromCharCode(101,95,57,48,95,109,117,120,0);
    let libglogm = 1.0;
    let orange3 = String.fromCharCode(119,95,55,55,95,102,117,110,99,116,105,111,110,115,0);
      videojsT /= Math.max(5, parseFloat(`${1 - mbridge1.length}`));
   while (!controlL.includes(`${gemfilee.size}`)) {
      controlL += `${connectionI.length - 1}`;
      break;
   }
   if (linkY != String.fromCharCode(121,0) || mbridge1 != String.fromCharCode(100,0)) {
      linkY += `${gemfilee.size}`;
   }
   let flyer4 = 8115117 <= controlL.length;
   do {
      controlL = `${gemfilee.size}`;
      if (flyer4) {
         break;
      }
   } while (flyer4 && (parseFloat(`${controlL.length}`) < videojsT));
   while (4 < (connectionI.length / 4)) {
       let networkJ = String.fromCharCode(114,116,112,95,103,95,53,56,0);
       let editz = String.fromCharCode(101,118,101,114,95,101,95,57,50,0);
       let reactr = 3;
       let window_iqt = String.fromCharCode(112,95,55,54,95,115,105,103,104,0);
      let windj = window_iqt.length <= 6092736;
      do {
         window_iqt = `${editz.length / (Math.max(window_iqt.length, 4))}`;
         if (windj) {
            break;
         }
      } while (windj && (2 < editz.length));
          let libruntimeexecutorz = 5.0;
          let librrcT = String.fromCharCode(115,112,101,99,115,95,104,95,57,55,0);
         editz = `${librrcT.length << (Math.min(Math.abs(3), 1))}`;
         libruntimeexecutorz += 2 >> (Math.min(Math.abs(parseInt(`${libruntimeexecutorz}`)), 4));
         librrcT = `${parseInt(`${libruntimeexecutorz}`) % (Math.max(parseInt(`${libruntimeexecutorz}`), 7))}`;
         reactr += reactr / (Math.max(window_iqt.length, 7));
         networkJ = "2";
      if (5 == (3 | networkJ.length) || 3 == (networkJ.length | reactr)) {
         reactr *= editz.length;
      }
      let componentregistryx = 8104530 <= networkJ.length;
      do {
         networkJ = `${networkJ.length}`;
         if (componentregistryx) {
            break;
         }
      } while (componentregistryx && (networkJ.length <= 5));
       let chinasame8 = String.fromCharCode(116,103,101,116,95,120,95,53,56,0);
       let whatsappf = 1;
       let sendU = 0;
      let launchera = sendU >= 7240637;
      do {
          let libfabricjniX = String.fromCharCode(115,95,53,56,95,115,99,116,112,99,111,110,110,0);
         sendU >>= Math.min(Math.abs(3 % (Math.max(10, libfabricjniX.length))), 1);
         if (launchera) {
            break;
         }
      } while (((sendU & networkJ.length) < 1) && launchera);
      if ((reactr / (Math.max(4, 5))) < 5) {
          let libreanimatedM: Array<any> = [599, 690, 526];
          let gesturesq = 4;
          let roomH: Array<any> = [486, 699];
          let dropdownK: Array<any> = [410, 374, 143];
          let nativeexv = String.fromCharCode(118,111,98,115,117,98,95,53,95,55,55,0);
         window_iqt = `${dropdownK.length / 3}`;
         libreanimatedM.push(gesturesq);
         gesturesq -= gesturesq - 3;
         roomH.push(3 >> (Math.min(3, roomH.length)));
         dropdownK = [2];
         nativeexv = `${3 << (Math.min(5, nativeexv.length))}`;
      }
      if (reactr < editz.length) {
          let gestureZ = String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,100,95,49,52,0);
         reactr *= window_iqt.length;
         gestureZ += `${gestureZ.length << (Math.min(2, gestureZ.length))}`;
      }
         editz += `${(String.fromCharCode(77,0) == networkJ ? chinasame8.length : networkJ.length)}`;
      linkY = `${1 << (Math.min(3, mbridge1.length))}`;
      break;
   }
   for (let m = 0; m < 1; m++) {
      x_imagea += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${x_imagea}`)), 2))}`);
   }
   if ((mbridge1.length | 2) == 2) {
      mbridge1 += `${(String.fromCharCode(113,0) == controlL ? controlL.length : parseInt(`${videojsT}`))}`;
   }
      controlL = `${linkY.length}`;
   while (!Array.from(gemfilee.keys()).includes(`${connectionI.length}`)) {
       let libjsijniprofilerW = String.fromCharCode(122,95,57,57,95,97,99,116,117,97,108,105,122,97,116,105,111,110,0);
       let terms5 = 3;
       let nextH = 0.0;
       let pingd = 1.0;
      let greyW = nextH >= 8029566.0;
      do {
         nextH += parseFloat(`${parseInt(`${nextH}`)}`);
         if (greyW) {
            break;
         }
      } while (greyW && ((nextH + 1.62) < 4.45 || (1.62 + pingd) < 2.100));
      let episodesR = nextH >= 5183935.0;
      do {
         nextH /= Math.max(parseFloat(`${3}`), 5);
         if (episodesR) {
            break;
         }
      } while (episodesR && (libjsijniprofilerW.length < 5));
      let xvodh = 9656711.0 >= nextH;
      do {
         nextH += parseFloat(`${parseInt(`${pingd}`)}`);
         if (xvodh) {
            break;
         }
      } while (xvodh && ((parseInt(`${nextH}`) * 1) >= 5 && 2.48 >= (nextH * 4.89)));
         terms5 -= libjsijniprofilerW.length ^ parseInt(`${pingd}`);
          let runtimeschedulerB = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,95,53,95,52,55,0);
          let r_countX = String.fromCharCode(99,98,117,102,95,51,95,51,51,0);
         terms5 -= libjsijniprofilerW.length - 3;
         runtimeschedulerB = `${(String.fromCharCode(75,0) == runtimeschedulerB ? runtimeschedulerB.length : r_countX.length)}`;
         r_countX += `${r_countX.length - runtimeschedulerB.length}`;
      let actionk = 9283977 <= libjsijniprofilerW.length;
      do {
         libjsijniprofilerW = `${libjsijniprofilerW.length}`;
         if (actionk) {
            break;
         }
      } while ((3.61 > (pingd / 4.9) && 4 > (2 & libjsijniprofilerW.length)) && actionk);
      for (let m = 0; m < 2; m++) {
         terms5 |= terms5;
      }
         terms5 &= parseInt(`${pingd}`) ^ parseInt(`${nextH}`);
         nextH -= parseFloat(`${parseInt(`${pingd}`) ^ 1}`);
          let popupu = 3.0;
         nextH -= parseFloat(`${libjsijniprofilerW.length}`);
         popupu /= Math.max(5, parseInt(`${popupu}`));
      let g_centerw = terms5 >= 8824018;
      do {
         terms5 %= Math.max(parseInt(`${nextH}`) * 1, 5);
         if (g_centerw) {
            break;
         }
      } while (g_centerw && (!libjsijniprofilerW.startsWith(`${terms5}`)));
      if ((terms5 % 2) == 1) {
         terms5 ^= (libjsijniprofilerW == String.fromCharCode(78,0) ? terms5 : libjsijniprofilerW.length);
      }
      gemfilee = new Map([[mbridge1, mbridge1.length & parseInt(`${x_imagea}`)]]);
      break;
   }
   while ((x_imagea - parseFloat(`${connectionI.length}`)) == 5.46 || 1 == (parseInt(`${x_imagea}`) - connectionI.length)) {
      x_imagea *= parseFloat(`${clubE.length | linkY.length}`);
      break;
   }
   for (let z = 0; z < 1; z++) {
      controlL = "3";
   }
   if (2 < mbridge1.length) {
      sellv += `${controlL.length / (Math.max(8, parseInt(`${videojsT}`)))}`;
   }
   while (sellv.endsWith(`${connectionI.length}`)) {
      connectionI = [1 - gemfilee.size];
      break;
   }
      mbridge1 += `${parseInt(`${videojsT}`) << (Math.min(Math.abs(parseInt(`${x_imagea}`)), 4))}`;
      linkY += `${clubE.length}`;
      videojsT *= parseFloat(`${linkY.length}`);
   for (let r = 0; r < 3; r++) {
       let hejiN = 3;
       let guide4: Array<any> = [500, 913];
       let launcherv: Array<any> = [321, 437];
       let f_counto = 3.0;
       let reducerj = 3.0;
         hejiN <<= Math.min(Math.abs(guide4.length ^ hejiN), 4);
         launcherv = [guide4.length & 2];
       let changev = String.fromCharCode(114,102,102,116,98,95,111,95,51,51,0);
      while ((parseFloat(`${guide4.length}`) + reducerj) <= 2.61 || (reducerj + 2.61) <= 5.49) {
         reducerj -= parseFloat(`${guide4.length}`);
         break;
      }
         f_counto -= changev.length + parseInt(`${reducerj}`);
       let customK: Array<any> = [String.fromCharCode(100,114,105,118,101,110,95,100,95,57,50,0), String.fromCharCode(97,116,116,101,109,112,116,95,108,95,50,56,0), String.fromCharCode(114,97,110,115,112,111,114,116,95,114,95,50,56,0)];
       let light7 = String.fromCharCode(106,95,50,54,95,98,111,120,98,108,117,114,0);
      let animationr = hejiN <= 9488980;
      do {
         hejiN %= Math.max(4, (light7 == String.fromCharCode(117,0) ? customK.length : light7.length));
         if (animationr) {
            break;
         }
      } while (animationr && ((3 + launcherv.length) == 1 && 4 == (launcherv.length + 3)));
       let verticalk: Array<any> = [701, 202, 150];
      if ((5 + customK.length) > 4 && 3 > (5 + customK.length)) {
         changev = `${parseInt(`${f_counto}`)}`;
      }
         verticalk = [guide4.length << (Math.min(customK.length, 5))];
      if (guide4.length == changev.length) {
          let activity3 = 5.0;
         changev = `${parseInt(`${activity3}`) - guide4.length}`;
      }
         customK.push(1 - customK.length);
         f_counto -= 3;
      let trophy2 = 9857771 >= customK.length;
      do {
          let rulesn = 4.0;
          let showv = String.fromCharCode(102,95,51,51,95,115,116,114,101,97,109,105,100,0);
         customK = [light7.length - showv.length];
         rulesn /= Math.max(1, parseFloat(`${parseInt(`${rulesn}`) + 1}`));
         showv += "1";
         if (trophy2) {
            break;
         }
      } while ((4 <= (customK.length | 5)) && trophy2);
      clubE.push(1 >> (Math.min(2, Math.abs(gemfilee.size))));
   }
      clubE.push(parseInt(`${x_imagea}`) ^ 2);
      gemfilee = new Map([[mbridge1, mbridge1.length]]);
      gemfilee = new Map([[`${gemfilee.size}`, gemfilee.size ^ clubE.length]]);

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
       let downloadedn = String.fromCharCode(119,95,50,51,95,99,111,114,101,105,109,97,103,101,0);
    let guidez: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,95,117,95,56,54,0),true ], [String.fromCharCode(115,95,55,56,95,116,119,111,108,111,111,112,0),true ], [String.fromCharCode(104,95,53,54,95,111,110,121,120,99,0),false ]]);
    let flyerf: Map<any, any> = new Map([[String.fromCharCode(99,111,97,114,115,101,95,114,95,51,52,0),191], [String.fromCharCode(116,95,56,55,95,99,111,109,112,108,101,116,101,100,0),369], [String.fromCharCode(108,105,98,109,95,57,95,50,48,0),970]]);
    let pointQ = String.fromCharCode(115,101,110,100,97,108,108,95,107,95,53,48,0);
    let upgradek = String.fromCharCode(115,116,100,105,110,116,95,109,95,50,48,0);
    let nterstitial1 = String.fromCharCode(115,95,49,52,95,99,111,108,108,105,100,105,110,103,0);
    let b_image8 = String.fromCharCode(98,106,101,99,116,95,53,95,54,53,0);
    let buffera: Map<any, any> = new Map([[String.fromCharCode(115,119,105,116,99,104,101,100,95,53,95,55,57,0),String.fromCharCode(109,117,108,116,105,112,108,121,95,49,95,50,55,0)], [String.fromCharCode(114,95,51,50,95,109,101,116,104,111,100,115,0),String.fromCharCode(98,117,102,115,112,97,99,101,95,117,95,56,54,0)], [String.fromCharCode(99,111,114,114,101,99,116,101,100,95,111,95,49,54,0),String.fromCharCode(105,95,52,56,95,115,117,103,103,101,115,116,0)]]);
    let activitya = String.fromCharCode(113,95,49,56,95,112,111,112,0);
    let yinit_2_C = String.fromCharCode(97,110,109,114,95,110,95,51,54,0);
      nterstitial1 = "2";
      yinit_2_C = `${guidez.size}`;
   let detaila = b_image8 == String.fromCharCode(122,112,108,122,97,114,114,116,0);
   do {
      b_image8 += `${3 & upgradek.length}`;
      if (detaila) {
         break;
      }
   } while ((4 > b_image8.length || 4 > nterstitial1.length) && detaila);
      yinit_2_C = `${activitya.length}`;
   while ((5 - guidez.size) >= 3) {
      flyerf.set(yinit_2_C, yinit_2_C.length);
      break;
   }
   let subsP = String.fromCharCode(100,99,97,0) == activitya;
   do {
      activitya = `${b_image8.length / (Math.max(1, 9))}`;
      if (subsP) {
         break;
      }
   } while (subsP && (yinit_2_C != String.fromCharCode(69,0)));
      pointQ = `${b_image8.length}`;
       let statisticsH = String.fromCharCode(105,110,118,115,98,111,120,95,98,95,57,54,0);
       let alertv = false;
       let other1: Map<any, any> = new Map([[String.fromCharCode(117,102,102,101,114,95,55,95,55,48,0),true ], [String.fromCharCode(116,95,57,55,95,97,100,106,117,115,109,101,110,116,115,0),false ]]);
         other1.set(`${alertv}`, (1 * (alertv ? 4 : 1)));
          let transferc = String.fromCharCode(118,109,112,114,105,110,116,102,95,99,95,55,51,0);
          let volumeO: Array<any> = [730, 984, 949];
         other1.set(`${alertv}`, 3);
         transferc = `${volumeO.length % (Math.max(3, transferc.length))}`;
         volumeO.push(1);
         other1 = new Map([[`${other1.size}`, other1.size]]);
      for (let e = 0; e < 3; e++) {
         alertv = other1.size == 100 || !alertv;
      }
         alertv = !statisticsH.startsWith(`${alertv}`);
      let acceptedN = other1.size >= 7305036;
      do {
          let materialZ = true;
         other1 = new Map([[statisticsH, ((materialZ ? 3 : 1))]]);
         if (acceptedN) {
            break;
         }
      } while ((3 >= (2 + other1.size) || other1.size >= 2) && acceptedN);
         alertv = statisticsH.includes(`${alertv}`);
          let mathZ = true;
         other1 = new Map([[`${alertv}`, 3]]);
         mathZ = (!mathZ ? mathZ : mathZ);
         alertv = statisticsH.length >= 93;
      guidez.set(b_image8, 1 * b_image8.length);

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
       let castingU = String.fromCharCode(98,117,116,116,111,110,115,95,57,95,56,55,0);
    let changez = 5.0;
    let base6: Array<any> = [764, 833, 925];
    let libffmpegkitn = 5.0;
    let loadingq = String.fromCharCode(97,117,116,111,95,103,95,56,53,0);
    let pointc = String.fromCharCode(110,97,117,116,105,99,97,108,95,109,95,55,49,0);
    let caste: Map<any, any> = new Map([[String.fromCharCode(102,95,54,57,95,115,117,98,109,105,116,0),760], [String.fromCharCode(105,95,55,48,95,100,110,111,119,0),964]]);
    let backgroundc = 5;
    let active9 = String.fromCharCode(115,113,108,105,116,101,114,98,117,95,118,95,50,54,0);
   let home5 = 7922706.0 <= changez;
   do {
      changez /= Math.max(4, 1);
      if (home5) {
         break;
      }
   } while (home5 && ((5.85 + changez) > 3.12 && (changez + 5.85) > 2.74));
      castingU += `${parseInt(`${libffmpegkitn}`) + parseInt(`${changez}`)}`;
   let bottomw = String.fromCharCode(108,108,117,106,116,51,121,120,121,100,0) == loadingq;
   do {
      loadingq = `${1 | parseInt(`${libffmpegkitn}`)}`;
      if (bottomw) {
         break;
      }
   } while (bottomw && (loadingq.length >= pointc.length));
      caste = new Map([[loadingq, pointc.length]]);

        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

      caste = new Map([[`${base6.length}`, castingU.length]]);
   for (let d = 0; d < 1; d++) {
      caste.set(loadingq, loadingq.length);
   }
      pointc = `${parseInt(`${changez}`) * caste.size}`;
      libffmpegkitn /= Math.max(parseFloat(`${pointc.length & parseInt(`${changez}`)}`), 4);

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });

   let savei = String.fromCharCode(104,51,115,0) == loadingq;
   do {
       let codegenk = false;
       let libmapbufferjni7: Map<any, any> = new Map([[String.fromCharCode(105,115,112,108,97,121,95,120,95,50,51,0),342], [String.fromCharCode(118,95,54,57,95,119,104,105,108,101,0),266]]);
       let libreanimatedK = 4.0;
          let change3 = String.fromCharCode(113,95,54,51,95,105,110,116,101,114,97,99,116,105,110,103,0);
          let searchr = 0;
          let clubT = 3;
         libmapbufferjni7.set(`${libreanimatedK}`, libmapbufferjni7.size % 3);
         change3 += `${clubT / 2}`;
         searchr -= clubT;
         codegenk = 15 > libmapbufferjni7.size;
      while (4 > (libmapbufferjni7.size / (Math.max(10, parseInt(`${libreanimatedK}`)))) || 3 > (libmapbufferjni7.size + 4)) {
         libreanimatedK -= parseInt(`${libreanimatedK}`) >> (Math.min(5, Math.abs(3)));
         break;
      }
      if (Array.from(libmapbufferjni7.keys()).includes(`${libreanimatedK}`)) {
         libreanimatedK *= libmapbufferjni7.size;
      }
         libreanimatedK -= ((codegenk ? 1 : 5) / (Math.max(1, 5)));
         codegenk = libmapbufferjni7.get(`${codegenk}`) == null;
      let weiboQ = libmapbufferjni7.size <= 8430797;
      do {
         libmapbufferjni7.set(`${codegenk}`, ((codegenk ? 5 : 5) * libmapbufferjni7.size));
         if (weiboQ) {
            break;
         }
      } while ((2 == (1 >> (Math.min(1, Math.abs(libmapbufferjni7.size)))) || 3 == (libmapbufferjni7.size ^ 1)) && weiboQ);
      let mbbannerB = 5855640 >= libmapbufferjni7.size;
      do {
          let armvak = String.fromCharCode(114,95,56,49,95,117,108,116,114,97,119,105,100,101,0);
         libmapbufferjni7.set(`${libreanimatedK}`, parseInt(`${libreanimatedK}`));
         armvak = "3";
         if (mbbannerB) {
            break;
         }
      } while (mbbannerB && ((libmapbufferjni7.size & 1) <= 2));
      let episodeg = libmapbufferjni7.size <= 5193106;
      do {
         libmapbufferjni7.set(`${libreanimatedK}`, ((codegenk ? 2 : 1) | parseInt(`${libreanimatedK}`)));
         if (episodeg) {
            break;
         }
      } while ((!codegenk) && episodeg);
      loadingq = `${castingU.length}`;
      if (savei) {
         break;
      }
   } while (savei && (pointc.startsWith(loadingq)));
      base6 = [loadingq.length >> (Math.min(5, base6.length))];
      libffmpegkitn *= parseFloat(`${caste.size - castingU.length}`);
   if (backgroundc >= 2) {
       let footballu = String.fromCharCode(100,95,53,52,95,97,112,97,114,97,109,115,0);
       let smallC = 1.0;
       let latnn = String.fromCharCode(100,95,51,56,95,112,111,112,112,101,100,0);
       let close0 = 5.0;
       let moduleq = false;
      while (!latnn.includes(footballu)) {
          let rightA = 1;
         latnn = `${rightA ^ 2}`;
         break;
      }
      while (moduleq) {
         moduleq = 39.0 > smallC;
         break;
      }
      let sharedL = String.fromCharCode(120,117,99,114,56,108,112,0) == footballu;
      do {
         footballu += `${((moduleq ? 1 : 5) >> (Math.min(Math.abs(parseInt(`${close0}`)), 2)))}`;
         if (sharedL) {
            break;
         }
      } while (sharedL && (2 >= (footballu.length ^ 1) || 4.5 >= (2.37 + close0)));
      while (moduleq) {
          let edit_ = 5;
          let textL = 0;
         moduleq = !moduleq;
         edit_ %= Math.max(2, 1);
         textL <<= Math.min(1, Math.abs(edit_ / (Math.max(1, 7))));
         break;
      }
       let scorea = 1.0;
       let controlsq = 2.0;
       let telemetryX = String.fromCharCode(99,111,99,111,97,95,49,95,52,49,0);
      if (!telemetryX.endsWith(`${smallC}`)) {
         telemetryX += `${telemetryX.length | 1}`;
      }
      let membershipb = 8023282.0 <= close0;
      do {
          let rightAZ = 1;
          let moreD = true;
          let tickedc = String.fromCharCode(118,95,52,50,95,112,114,111,98,97,98,105,108,105,116,121,0);
         close0 /= Math.max(parseFloat(`${parseInt(`${controlsq}`)}`), 1);
         rightAZ |= ((moreD ? 5 : 4) ^ rightAZ);
         moreD = 17 >= tickedc.length;
         tickedc = `${(tickedc.length + (moreD ? 4 : 3))}`;
         if (membershipb) {
            break;
         }
      } while (membershipb && (5.53 < close0));
      for (let h = 0; h < 1; h++) {
         controlsq -= parseFloat(`${parseInt(`${close0}`)}`);
      }
         latnn = "1";
         latnn = `${((moduleq ? 3 : 2) | telemetryX.length)}`;
      if (3 < (footballu.length << (Math.min(Math.abs(4), 2))) || 5.49 < (controlsq - 4.32)) {
         footballu = `${1 ^ latnn.length}`;
      }
       let robotoT = String.fromCharCode(122,95,55,49,95,114,101,116,0);
       let zhubol = String.fromCharCode(119,111,114,100,95,114,95,50,57,0);
         footballu = `${(latnn == String.fromCharCode(85,0) ? parseInt(`${controlsq}`) : latnn.length)}`;
         smallC -= parseFloat(`${parseInt(`${smallC}`) + 3}`);
      loadingq = `${2 ^ parseInt(`${libffmpegkitn}`)}`;
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
