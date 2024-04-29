import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import { useAppDispatch, useSelector } from "@hooks/tt_spec_download";
import { CPressable, CTextInput } from "../../../../components/atoms";
import SendIcon from '@static/images/detailStatisticsBell.svg';
import SendFillIcon from '@static/images/skipHandlerGradlew.svg';
import { CHAT_BOX_MAX_ITEM, CHAT_SEND_COOLDOWN, COMMENT_MAX_INPUT } from "@utility/tt_trophy_cross";
import { ttResult } from "@type/tt_line_borderless";
import { ttModuleNewinterstitial } from "../../../../api/tt_sheet";
import { ttConfirmationTail } from "@redux/reducers/tt_dycreator_reactnativejs";
import { useQuery } from "@tanstack/react-query";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux/actions/tt_string";
import { Avatar } from "@rneui/base";
import { useIsFocused, useTheme } from "@react-navigation/native";

import createStyles from "./tt_with_success";
import { ttReport } from "../../../types/tt_zhubo";
import { UnreadCard } from "../../../../components/chat/tt_layout_alert";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";

type ttSmall = {
    matchID: string,
    streamer: ttReport,
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
}: ttSmall) => {
    const { colors } = useTheme();

    const styles = useMemo(() => createStyles({
        colors,
    }), [colors]);

    const PIN_YIN_ACCEPTED = 20;

    const chatState = useSelector<ttConfirmationTail>('chatReducer');
    const userState = useSelector<ttGoal>('userReducer');
    const [cooldownTimeout, setCooldownTimeout] = useState<NodeJS.Timeout | null>(null);
    const [comment, setComment] = useState('');
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<ttResult> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = ttFast.isLogin(userState.user);

    const appDispatch = useAppDispatch();

    const { data: chats } = useQuery({
        queryKey: ['liveChats', matchID],
        queryFn: () => ttModuleNewinterstitial.getStreamerPinMsg(),
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

    const renderItem = useCallback(({ item }: { item: ttResult }) => {
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
       let android6 = 4;
    let tickedq = String.fromCharCode(119,95,55,55,95,111,112,116,105,109,105,122,101,0);
    let icone = 4.0;
    let hongkong2 = String.fromCharCode(115,117,109,109,101,100,95,99,95,55,55,0);
    let questj = 5;
    let downloadedH = String.fromCharCode(103,95,53,50,95,115,116,114,101,97,109,105,100,0);
    let str8 = true;
    let networkR: Array<any> = [764, 689, 524];
    let details1 = String.fromCharCode(97,112,112,108,105,101,114,95,54,95,53,52,0);
    let connectionF = true;
   for (let z = 0; z < 1; z++) {
      hongkong2 = `${hongkong2.length}`;
   }
      tickedq = `${tickedq.length}`;

        if (comment.trim().length === 0 || !isCommentValid) return;

      android6 |= (downloadedH.length & (str8 ? 3 : 4));
   while (hongkong2.endsWith(`${str8}`)) {
      str8 = tickedq.startsWith(`${icone}`);
      break;
   }

        if (cooldownTimeout !== null) {

      questj *= 3 / (Math.max(2, questj));
       let rankL = String.fromCharCode(99,108,111,117,100,95,56,95,55,50,0);
       let lessG = 1;
          let activeJ = 3.0;
          let firebaseA = 4.0;
         rankL = `${lessG << (Math.min(rankL.length, 4))}`;
         activeJ *= 3 << (Math.min(Math.abs(parseInt(`${activeJ}`)), 2));
         firebaseA -= parseFloat(`${parseInt(`${firebaseA}`) ^ parseInt(`${activeJ}`)}`);
          let actionst = String.fromCharCode(110,95,53,51,95,100,97,114,119,105,110,0);
          let anythink8 = String.fromCharCode(108,95,50,55,95,101,120,99,101,112,116,105,111,110,0);
         lessG -= actionst.length;
         actionst = "3";
         anythink8 += `${(String.fromCharCode(51,0) == anythink8 ? anythink8.length : anythink8.length)}`;
          let watcho: Map<any, any> = new Map([[String.fromCharCode(109,95,53,54,95,100,101,116,101,99,116,105,110,103,0),String.fromCharCode(108,97,98,101,108,110,115,95,56,95,56,0)], [String.fromCharCode(119,105,100,101,102,101,108,101,109,95,102,95,56,50,0),String.fromCharCode(122,95,56,57,95,100,101,112,116,104,0)], [String.fromCharCode(109,101,109,98,101,114,95,105,95,57,55,0),String.fromCharCode(105,113,109,102,95,51,95,54,52,0)]]);
         lessG -= 2 | watcho.size;
      let episoden = lessG >= 8581506;
      do {
         lessG %= Math.max(4, 1 ^ rankL.length);
         if (episoden) {
            break;
         }
      } while (episoden && ((rankL.length % (Math.max(4, 10))) > 2 && (lessG % 4) > 2));
         lessG /= Math.max(2, lessG >> (Math.min(rankL.length, 3)));
         lessG &= rankL.length;
      hongkong2 = `${networkR.length}`;
            return;
        }

        appDispatch(sendChatMessage({
            message: comment,
        }));

   let twitterk = questj <= 6358891;
   do {
      questj <<= Math.min(2, tickedq.length);
      if (twitterk) {
         break;
      }
   } while ((questj == icone) && twitterk);
   while (downloadedH.endsWith(`${str8}`)) {
       let downloadj = 5;
          let otherX = String.fromCharCode(110,111,110,110,117,108,108,95,99,95,55,0);
         downloadj /= Math.max(2, 3);
         otherX = `${otherX.length | otherX.length}`;
       let constantsp: Array<any> = [10, 895, 349];
          let groupt = 3;
         downloadj += constantsp.length;
         groupt >>= Math.min(Math.abs(groupt & 3), 2);
      str8 = !str8;
      break;
   }

        setCooldownTimeout(setTimeout(() => {

   let downloadQ = questj <= 4976738;
   do {
       let playM = 2.0;
       let save2 = 4.0;
      let chinaw = 9650436.0 >= save2;
      do {
         save2 /= Math.max(parseFloat(`${parseInt(`${playM}`)}`), 3);
         if (chinaw) {
            break;
         }
      } while (chinaw && (save2 > playM));
      while ((save2 - 4.16) <= 4.2) {
         save2 += parseFloat(`${parseInt(`${playM}`)}`);
         break;
      }
      let securityf = playM >= 5122811.0;
      do {
         playM -= parseFloat(`${3 | parseInt(`${playM}`)}`);
         if (securityf) {
            break;
         }
      } while ((3.88 >= (1.52 - save2) || 1.19 >= (1.52 - save2)) && securityf);
          let abouth = 5.0;
         playM -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${abouth}`)), 5))}`);
       let uploado = 3;
      for (let a = 0; a < 3; a++) {
          let dicef = 2.0;
          let update_gW = 4;
          let q_centerD = 5.0;
         save2 /= Math.max(parseFloat(`${parseInt(`${dicef}`)}`), 2);
         update_gW *= parseInt(`${q_centerD}`);
         q_centerD -= parseFloat(`${update_gW & parseInt(`${q_centerD}`)}`);
      }
      questj %= Math.max(downloadedH.length, 5);
      if (downloadQ) {
         break;
      }
   } while (downloadQ && ((hongkong2.length + 5) == 5 && 2 == (5 + hongkong2.length)));
      downloadedH += `${questj >> (Math.min(tickedq.length, 4))}`;
            setCooldownTimeout(null);
        }, CHAT_SEND_COOLDOWN * 1000));

   let selectionN = questj >= 6026373;
   do {
       let down2 = 5;
       let confirmationJ: Map<any, any> = new Map([[String.fromCharCode(112,95,56,57,95,116,104,114,101,115,104,111,108,100,101,100,0),false ], [String.fromCharCode(106,95,50,51,95,100,111,108,98,121,0),false ], [String.fromCharCode(115,113,108,95,109,95,54,56,0),false ]]);
       let teamP = 5;
         confirmationJ.set(`${down2}`, confirmationJ.size);
          let signinupP = 3.0;
          let buffer2 = String.fromCharCode(120,95,54,57,95,109,97,120,105,109,105,122,101,100,0);
         teamP -= down2;
         signinupP /= Math.max(1, parseFloat(`${buffer2.length << (Math.min(Math.abs(3), 1))}`));
         buffer2 += `${3 ^ buffer2.length}`;
      for (let r = 0; r < 1; r++) {
         down2 %= Math.max(4, teamP & confirmationJ.size);
      }
         confirmationJ = new Map([[`${confirmationJ.size}`, teamP]]);
      for (let m = 0; m < 2; m++) {
         confirmationJ.set(`${down2}`, down2 % (Math.max(teamP, 4)));
      }
         teamP >>= Math.min(5, Math.abs(confirmationJ.size));
         teamP ^= confirmationJ.size << (Math.min(Math.abs(3), 1));
          let storeE: Array<any> = [840, 926, 577];
          let stylen = String.fromCharCode(98,101,104,105,110,100,95,49,95,54,55,0);
         down2 *= 3 ^ confirmationJ.size;
         storeE = [stylen.length * 1];
         stylen += `${storeE.length}`;
      if (3 >= (down2 % (Math.max(confirmationJ.size, 4))) && 1 >= (down2 % 3)) {
         confirmationJ.set(`${down2}`, down2);
      }
      questj |= parseInt(`${icone}`) * 2;
      if (selectionN) {
         break;
      }
   } while ((hongkong2.length <= 1) && selectionN);
   let membershipD = str8 ? !str8 : str8;
   do {
      str8 = !tickedq.startsWith(`${str8}`);
      if (membershipD) {
         break;
      }
   } while ((downloadedH.length > 1) && membershipD);

        setComment('');

      downloadedH += `${networkR.length}`;
      questj ^= downloadedH.length;
        Keyboard.dismiss();
    }, [isCommentValid, comment, cooldownTimeout]);

    const onUserScroll = () => {
       let soundO = 2.0;
    let friendsg = String.fromCharCode(105,95,57,56,0);
    let clubn = false;
    let pathn = 2;
    let singlem = 3.0;
    let typesx = 1.0;
    let short_n8W = 4.0;
    let frame_9x = 1.0;
    let tickF = String.fromCharCode(99,97,108,108,101,100,95,97,95,49,51,0);
    let foregroundf = true;
   while (clubn && 4 >= friendsg.length) {
      clubn = friendsg.length <= parseInt(`${typesx}`);
      break;
   }
   let flyerR = typesx >= 5484878.0;
   do {
      typesx /= Math.max(3, parseFloat(`${parseInt(`${typesx}`)}`));
      if (flyerR) {
         break;
      }
   } while (flyerR && ((friendsg.length | 3) < 2 || 1 < (friendsg.length * 3)));
       let fastb = 3.0;
       let crossB = 1.0;
       let rewardvideoU = 5.0;
          let androidt: Map<any, any> = new Map([[String.fromCharCode(115,101,116,116,108,105,110,103,95,111,95,53,50,0),777], [String.fromCharCode(110,101,97,114,98,121,95,103,95,54,52,0),16]]);
          let tickedI = 3.0;
          let mappinge: Array<any> = [String.fromCharCode(114,95,51,53,95,115,101,101,110,0), String.fromCharCode(113,95,54,95,112,107,112,107,101,121,0), String.fromCharCode(108,95,51,54,95,117,110,101,100,105,116,97,98,108,101,0)];
         crossB += 1 ^ parseInt(`${fastb}`);
         androidt.set(`${tickedI}`, mappinge.length | parseInt(`${tickedI}`));
         mappinge = [3];
          let videojsg: Map<any, any> = new Map([[String.fromCharCode(114,95,55,56,95,101,121,99,104,97,105,110,0),166], [String.fromCharCode(114,117,110,95,53,95,56,51,0),563]]);
          let texty = true;
         fastb -= 1 - parseInt(`${crossB}`);
         videojsg.set(`${texty}`, videojsg.size << (Math.min(Math.abs(2), 1)));
         crossB *= parseInt(`${rewardvideoU}`);
      for (let f = 0; f < 1; f++) {
         fastb *= parseInt(`${rewardvideoU}`);
      }
       let whistlei: Map<any, any> = new Map([[String.fromCharCode(120,95,51,53,95,97,108,97,114,109,0),605], [String.fromCharCode(121,100,97,121,95,112,95,50,52,0),353], [String.fromCharCode(102,117,108,102,105,108,108,95,54,95,49,54,0),315]]);
         rewardvideoU -= parseFloat(`${parseInt(`${rewardvideoU}`)}`);
          let mini5 = 4.0;
          let circle9 = String.fromCharCode(121,95,54,55,95,107,101,101,112,97,108,105,118,101,0);
         whistlei = new Map([[`${fastb}`, (circle9 == String.fromCharCode(95,0) ? circle9.length : parseInt(`${fastb}`))]]);
         mini5 /= Math.max(4, parseFloat(`${parseInt(`${mini5}`) / (Math.max(parseInt(`${mini5}`), 7))}`));
      let typesq = 6616939.0 <= fastb;
      do {
          let becomeX: Array<any> = [68, 864];
          let episodeso: Map<any, any> = new Map([[String.fromCharCode(107,95,49,53,95,117,110,98,111,110,100,101,100,0),388], [String.fromCharCode(110,117,109,98,105,116,115,95,49,95,51,49,0),469]]);
          let launcherI = String.fromCharCode(105,95,53,50,95,99,118,116,121,117,118,116,111,0);
          let update_7rP = 3.0;
          let unselected6: Array<any> = [382, 747, 535];
         fastb /= Math.max(1, episodeso.size);
         becomeX = [parseInt(`${update_7rP}`)];
         episodeso.set(`${becomeX.length}`, becomeX.length);
         launcherI = `${launcherI.length}`;
         update_7rP /= Math.max(parseFloat(`${unselected6.length * 3}`), 4);
         unselected6 = [becomeX.length];
         if (typesq) {
            break;
         }
      } while (((fastb + crossB) >= 2.22 || (2.22 + crossB) >= 5.45) && typesq);
      let langkeyH = fastb >= 9015535.0;
      do {
         fastb /= Math.max(5, parseInt(`${rewardvideoU}`));
         if (langkeyH) {
            break;
         }
      } while (langkeyH && ((fastb / 3.67) == 3.69));
      singlem -= parseFloat(`${parseInt(`${fastb}`)}`);
   if (soundO <= 4.50) {
      friendsg += `${parseInt(`${singlem}`) / 3}`;
   }
      soundO /= Math.max(2, parseFloat(`${3 | parseInt(`${typesx}`)}`));
       let reactnativejsw = 4;
       let bridge5 = String.fromCharCode(97,95,51,54,95,112,105,99,116,111,114,0);
       let eventd: Map<any, any> = new Map([[String.fromCharCode(114,101,99,118,102,114,111,109,95,120,95,51,48,0),524], [String.fromCharCode(105,95,51,53,95,106,105,110,99,108,117,100,101,0),872], [String.fromCharCode(118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,95,117,95,54,54,0),977]]);
      for (let l = 0; l < 2; l++) {
         bridge5 += `${1 >> (Math.min(5, Math.abs(eventd.size)))}`;
      }
         reactnativejsw *= bridge5.length;
          let apple3 = String.fromCharCode(98,117,114,115,116,121,95,105,95,53,57,0);
         reactnativejsw <<= Math.min(4, Math.abs((bridge5 == String.fromCharCode(53,0) ? reactnativejsw : bridge5.length)));
         apple3 += `${apple3.length * 1}`;
          let zhengpiant = String.fromCharCode(120,104,116,109,108,95,54,95,55,50,0);
          let mbnativeadvancedU = String.fromCharCode(103,95,51,57,95,97,119,97,107,101,0);
         eventd = new Map([[bridge5, bridge5.length]]);
         zhengpiant += `${1 & mbnativeadvancedU.length}`;
         mbnativeadvancedU += `${zhengpiant.length ^ mbnativeadvancedU.length}`;
         bridge5 += `${eventd.size / (Math.max(7, reactnativejsw))}`;
         reactnativejsw -= eventd.size;
      let suggestion1 = bridge5.length <= 8570085;
      do {
         bridge5 += `${reactnativejsw}`;
         if (suggestion1) {
            break;
         }
      } while (suggestion1 && (bridge5.includes(`${eventd.size}`)));
      if (3 >= reactnativejsw) {
         bridge5 = `${eventd.size}`;
      }
         eventd = new Map([[`${reactnativejsw}`, reactnativejsw + 2]]);
      pathn *= 3 + bridge5.length;
      friendsg = `${((clubn ? 3 : 1) >> (Math.min(Math.abs(parseInt(`${singlem}`)), 1)))}`;
       let libcrashsdk_ = String.fromCharCode(100,95,55,57,95,109,111,99,107,101,100,0);
       let matchesI: Map<any, any> = new Map([[String.fromCharCode(114,95,55,55,95,97,112,112,101,97,114,101,100,0),794], [String.fromCharCode(119,95,53,50,95,121,111,117,114,0),770]]);
       let reminderR = false;
      if (3 > (matchesI.size ^ 3)) {
         matchesI.set(libcrashsdk_, libcrashsdk_.length);
      }
       let analyticH = 4.0;
       let untickC = String.fromCharCode(114,111,108,101,95,112,95,55,51,0);
       let analyticsL = String.fromCharCode(109,101,109,100,117,112,95,109,95,51,53,0);
      if (!untickC.endsWith(`${reminderR}`)) {
          let launchs: Array<any> = [857, 140, 903];
          let downloadJ = String.fromCharCode(121,95,55,48,95,100,99,98,122,108,0);
          let math4 = 0.0;
          let bootsplash2 = String.fromCharCode(111,95,52,57,95,101,108,101,118,97,116,101,0);
          let detailsu = String.fromCharCode(112,108,97,99,101,109,101,110,116,95,102,95,51,54,0);
         reminderR = untickC == libcrashsdk_;
         launchs.push(downloadJ.length & launchs.length);
         downloadJ += `${1 - launchs.length}`;
         math4 += detailsu.length * 2;
         bootsplash2 += `${downloadJ.length & 2}`;
         detailsu = `${detailsu.length}`;
      }
      let zoomk = 6685428 <= matchesI.size;
      do {
          let areaX: Array<any> = [557, 890, 871];
          let settingb = 0.0;
          let inactiveY = String.fromCharCode(108,95,50,49,95,99,104,117,110,107,0);
         matchesI.set(`${reminderR}`, (matchesI.size | (reminderR ? 4 : 5)));
         areaX = [parseInt(`${settingb}`) << (Math.min(inactiveY.length, 1))];
         settingb *= parseInt(`${settingb}`) >> (Math.min(areaX.length, 4));
         inactiveY += "1";
         if (zoomk) {
            break;
         }
      } while (zoomk && (reminderR));
      while (analyticsL.length >= 5) {
          let brightnessi = String.fromCharCode(98,105,119,103,116,95,103,95,49,54,0);
          let megaphonen: Array<any> = [111, 188, 734];
          let upgradeW = String.fromCharCode(104,95,51,53,95,111,112,116,97,114,103,0);
         libcrashsdk_ = `${(upgradeW == String.fromCharCode(100,0) ? parseInt(`${analyticH}`) : upgradeW.length)}`;
         brightnessi = `${brightnessi.length}`;
         megaphonen.push(megaphonen.length * 2);
         break;
      }
      while (2.88 == analyticH) {
         analyticH *= parseFloat(`${parseInt(`${analyticH}`) * 2}`);
         break;
      }
      for (let l = 0; l < 2; l++) {
         analyticH *= parseFloat(`${untickC.length}`);
      }
       let short_oeo = String.fromCharCode(99,95,51,56,95,99,113,117,101,117,101,0);
       let playt = String.fromCharCode(115,95,49,56,95,115,117,99,104,0);
      soundO += parseFloat(`${1}`);
      soundO *= parseFloat(`${1 - pathn}`);
   if (3 > (friendsg.length >> (Math.min(Math.abs(3), 4)))) {
      typesx -= parseFloat(`${parseInt(`${short_n8W}`) & 3}`);
   }
       let sortY = String.fromCharCode(106,95,54,57,95,100,97,116,101,116,105,109,101,0);
       let videox = String.fromCharCode(116,119,111,115,99,97,108,101,95,99,95,51,57,0);
      for (let o = 0; o < 1; o++) {
         videox = `${videox.length + sortY.length}`;
      }
      let historyz = 9660780 >= sortY.length;
      do {
         sortY += `${2 + sortY.length}`;
         if (historyz) {
            break;
         }
      } while ((videox == sortY) && historyz);
      let rightY = String.fromCharCode(98,48,107,0) == sortY;
      do {
         sortY = `${sortY.length * 2}`;
         if (rightY) {
            break;
         }
      } while (rightY && (!videox.startsWith(sortY)));
      for (let u = 0; u < 3; u++) {
         sortY += `${videox.length}`;
      }
      for (let q = 0; q < 1; q++) {
          let sideF = 0.0;
          let bello = String.fromCharCode(112,95,56,51,95,112,114,111,112,115,0);
         sortY += `${videox.length}`;
         sideF /= Math.max(2, parseFloat(`${1}`));
         bello += "1";
      }
          let materialZ = 1.0;
         videox += "3";
         materialZ -= parseInt(`${materialZ}`) ^ parseInt(`${materialZ}`);
      friendsg += "2";
       let windT = 1.0;
         windT *= parseFloat(`${parseInt(`${windT}`) + 3}`);
         windT += parseFloat(`${parseInt(`${windT}`)}`);
       let promotionh: Map<any, any> = new Map([[String.fromCharCode(112,114,111,106,101,99,116,105,111,110,115,95,55,95,51,52,0),true ], [String.fromCharCode(103,95,54,95,105,119,104,116,0),false ], [String.fromCharCode(101,95,49,51,95,114,101,102,114,101,115,104,0),false ]]);
      typesx -= parseFloat(`${3}`);
   while (1.40 == (typesx / 5.17) && 5.17 == (typesx / (Math.max(8, parseFloat(`${friendsg.length}`))))) {
      typesx -= parseFloat(`${parseInt(`${singlem}`)}`);
      break;
   }
   while (1 <= pathn) {
      pathn %= Math.max(5, parseInt(`${short_n8W}`) * friendsg.length);
      break;
   }
   while (!friendsg.endsWith(`${soundO}`)) {
      soundO *= parseFloat(`${3 * parseInt(`${singlem}`)}`);
      break;
   }
       let downloadY = 2.0;
       let fastP: Array<any> = [String.fromCharCode(112,114,111,118,105,100,105,110,103,95,99,95,53,54,0), String.fromCharCode(98,97,100,114,101,113,95,49,95,57,0), String.fromCharCode(120,98,105,110,95,104,95,55,56,0)];
         fastP = [parseInt(`${downloadY}`)];
      while (!fastP.includes(downloadY)) {
         fastP.push(parseInt(`${downloadY}`) ^ 1);
         break;
      }
         downloadY += parseFloat(`${fastP.length}`);
         fastP.push(parseInt(`${downloadY}`));
      while (3.65 > (downloadY - 5.71) || (5.71 - downloadY) > 4.35) {
         fastP = [parseInt(`${downloadY}`) << (Math.min(fastP.length, 1))];
         break;
      }
      while (5.70 <= (downloadY / (Math.max(parseFloat(`${fastP.length}`), 4))) && (downloadY / (Math.max(6, parseFloat(`${fastP.length}`)))) <= 5.70) {
          let chath: Map<any, any> = new Map([[String.fromCharCode(112,114,101,109,117,108,116,105,112,108,105,101,100,95,122,95,55,51,0),319], [String.fromCharCode(120,95,55,54,95,99,111,108,108,101,99,116,111,114,0),544], [String.fromCharCode(101,120,108,117,100,101,100,95,53,95,55,0),809]]);
          let down1: Array<any> = [381, 764];
         fastP.push(1 & chath.size);
         chath = new Map([[`${down1.length}`, down1.length]]);
         break;
      }
      friendsg = "3";

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
       let backp = false;
    let constantsV = 4;
    let side9 = 1.0;
    let launcherZ: Map<any, any> = new Map([[String.fromCharCode(102,102,112,108,97,121,95,106,95,56,56,0),833], [String.fromCharCode(115,95,52,48,95,110,112,117,116,0),262]]);
    let filedC: Map<any, any> = new Map([[String.fromCharCode(104,95,53,57,95,115,108,105,112,112,97,103,101,115,0),String.fromCharCode(105,100,99,116,120,95,54,95,50,56,0)], [String.fromCharCode(102,95,49,48,48,95,107,101,121,103,101,110,0),String.fromCharCode(105,95,53,56,95,112,117,98,108,105,115,104,0)], [String.fromCharCode(118,105,115,105,116,111,114,95,49,95,48,0),String.fromCharCode(100,95,57,57,95,109,118,101,120,0)]]);
    let submitv = String.fromCharCode(106,95,57,57,95,115,104,105,101,108,100,0);
    let brightnessW = 4.0;
    let dark1: Array<any> = [369, 582];
    let brightnessn = 5;
      launcherZ = new Map([[`${filedC.size}`, filedC.size]]);
   if (5 >= (5 & launcherZ.size) || 5 >= (constantsV & launcherZ.size)) {
       let schedule8 = 3;
       let nextH: Array<any> = [378, 670, 793];
       let clearC = 5;
      while (4 < (clearC % 1)) {
         clearC *= 2;
         break;
      }
         nextH.push(1 - schedule8);
      if (nextH.length >= 3) {
          let default_0v = false;
          let small3 = String.fromCharCode(112,95,50,57,95,100,116,115,109,0);
          let score7 = 5.0;
          let robotoI = String.fromCharCode(121,95,56,48,95,117,110,99,111,110,115,117,109,101,100,0);
          let shootH = String.fromCharCode(118,95,55,52,95,108,111,99,107,97,98,108,101,0);
         nextH = [robotoI.length];
         default_0v = !default_0v;
         small3 = `${((default_0v ? 2 : 4) & parseInt(`${score7}`))}`;
         score7 -= parseFloat(`${3}`);
         robotoI += `${parseInt(`${score7}`) << (Math.min(Math.abs(3), 4))}`;
         shootH = `${shootH.length & 3}`;
      }
          let type_9z: Array<any> = [653, 795, 237];
         clearC -= nextH.length;
         type_9z = [type_9z.length];
      for (let q = 0; q < 3; q++) {
         clearC ^= nextH.length;
      }
         clearC <<= Math.min(Math.abs(nextH.length & 2), 1);
      let flipperV = schedule8 >= 5948446;
      do {
         schedule8 ^= schedule8;
         if (flipperV) {
            break;
         }
      } while (flipperV && (schedule8 <= 5));
          let smallW = String.fromCharCode(102,97,108,108,111,102,102,95,120,95,57,50,0);
          let lined = String.fromCharCode(97,95,49,53,95,100,108,114,114,0);
          let fieldQ = 0.0;
         schedule8 *= 1 * clearC;
         smallW = `${smallW.length}`;
         lined += `${lined.length % (Math.max(6, parseInt(`${fieldQ}`)))}`;
         fieldQ *= parseFloat(`${2 % (Math.max(3, lined.length))}`);
         nextH.push(schedule8 & 3);
      constantsV &= parseInt(`${side9}`) << (Math.min(Math.abs(1), 1));
   }
      backp = null != launcherZ.get(`${side9}`);
   while (2.15 == (side9 - 4.67) || 4.67 == (side9 * brightnessW)) {
       let blackj = String.fromCharCode(116,111,110,101,109,97,112,95,122,95,55,55,0);
       let klevinc = 4.0;
       let middled = String.fromCharCode(102,101,97,116,117,114,101,115,95,119,95,54,48,0);
         klevinc -= middled.length * 2;
      while (!blackj.startsWith(middled)) {
          let faviconZ: Array<any> = [272, 92, 626];
         blackj = `${2 >> (Math.min(5, faviconZ.length))}`;
         break;
      }
          let foundR: Array<any> = [672, 725];
          let mbnativeadvancedL = 1.0;
          let select4 = 5.0;
         middled += `${blackj.length}`;
         foundR = [2];
         mbnativeadvancedL += parseInt(`${select4}`) >> (Math.min(3, Math.abs(2)));
         select4 += parseFloat(`${parseInt(`${mbnativeadvancedL}`)}`);
      if (2 >= middled.length) {
         middled += `${(String.fromCharCode(76,0) == blackj ? middled.length : blackj.length)}`;
      }
         klevinc += blackj.length;
         middled = `${3 + blackj.length}`;
      let rewardvideor = middled.length >= 9624133;
      do {
         middled = `${parseInt(`${klevinc}`) ^ 2}`;
         if (rewardvideor) {
            break;
         }
      } while (rewardvideor && (!blackj.endsWith(middled)));
      while (middled != String.fromCharCode(70,0) || blackj != String.fromCharCode(89,0)) {
         middled = `${middled.length}`;
         break;
      }
      while ((blackj.length % 1) < 5) {
          let cornerS = true;
          let playy = 0;
          let line0 = 0.0;
          let leftw = String.fromCharCode(98,95,55,51,95,102,111,114,101,103,114,111,117,110,100,0);
          let agreementb = 0;
         blackj = `${agreementb}`;
         cornerS = playy >= 45;
         playy |= 3 ^ parseInt(`${line0}`);
         line0 += parseFloat(`${playy}`);
         leftw = `${(3 | (cornerS ? 4 : 5))}`;
         agreementb *= playy;
         break;
      }
      side9 *= 2;
      break;
   }
   if (5.41 <= (side9 + 2)) {
      brightnessW *= (parseFloat(`${submitv.length * (backp ? 2 : 3)}`));
   }
      filedC = new Map([[`${brightnessW}`, submitv.length]]);

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
       let phoneB = String.fromCharCode(118,95,57,54,95,114,101,112,108,97,121,0);
    let lefts = String.fromCharCode(98,95,49,53,95,102,105,103,104,116,101,114,115,0);
    let layoutk = String.fromCharCode(115,112,100,105,102,95,48,95,51,50,0);
    let mbbidY = true;
    let downloaded6: Map<any, any> = new Map([[String.fromCharCode(109,115,101,112,115,110,114,95,51,95,53,56,0),425], [String.fromCharCode(99,111,114,101,115,95,120,95,57,52,0),499], [String.fromCharCode(111,95,53,56,95,115,101,99,111,110,100,97,114,121,0),601]]);
    let rewardvideoL = 3;
    let robotoe = 3.0;
    let loading8 = 3;
    let clubq: Array<any> = [512, 839];
    let dycreatort = 2;
    let telegramt = 3.0;
    let pauseC: Array<any> = [String.fromCharCode(115,117,98,115,101,108,101,99,116,95,104,95,55,54,0), String.fromCharCode(109,115,103,95,56,95,49,0)];
    let stru = String.fromCharCode(101,120,112,111,114,116,95,113,95,53,48,0);
       let mutedR = 5.0;
         mutedR += 3;
      for (let n = 0; n < 2; n++) {
          let bodanb: Array<any> = [151, 497, 752];
          let mbjscommonJ = 1.0;
          let greyb = 3.0;
         mutedR /= Math.max(3 & parseInt(`${mutedR}`), 3);
         bodanb = [bodanb.length & parseInt(`${mbjscommonJ}`)];
         mbjscommonJ -= 1;
         greyb += parseInt(`${mbjscommonJ}`);
      }
       let z_unlockC: Map<any, any> = new Map([[String.fromCharCode(112,114,111,118,105,100,101,115,95,49,95,53,55,0),false ], [String.fromCharCode(104,95,53,53,95,105,115,116,114,101,97,109,119,114,97,112,112,101,114,0),false ]]);
       let countdownM: Map<any, any> = new Map([[String.fromCharCode(120,95,55,95,112,101,115,113,0),true ], [String.fromCharCode(102,105,116,116,105,110,103,95,48,95,57,54,0),false ]]);
      rewardvideoL /= Math.max(1 ^ downloaded6.size, 5);
       let regeng_ = 1.0;
       let confirmationo: Array<any> = [String.fromCharCode(111,118,101,114,115,99,114,111,108,108,95,98,95,53,48,0), String.fromCharCode(117,97,100,100,95,112,95,56,54,0), String.fromCharCode(99,111,118,97,108,101,110,116,95,105,95,49,52,0)];
       let area9: Map<any, any> = new Map([[String.fromCharCode(101,95,55,55,95,99,97,114,101,116,0),String.fromCharCode(120,95,52,54,95,102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,0)], [String.fromCharCode(112,97,110,95,102,95,54,53,0),String.fromCharCode(99,98,112,104,105,95,97,95,49,52,0)], [String.fromCharCode(116,105,109,105,110,103,115,95,48,95,56,49,0),String.fromCharCode(102,108,111,119,95,109,95,51,52,0)]]);
      if (confirmationo.includes(regeng_)) {
          let bcopy_9y = String.fromCharCode(97,95,52,55,95,114,97,100,102,103,0);
          let vietnamZ: Map<any, any> = new Map([[String.fromCharCode(99,95,52,55,95,114,101,108,111,97,100,105,110,103,0),true ], [String.fromCharCode(119,95,56,48,95,109,98,117,118,101,114,114,111,114,0),false ]]);
          let areay = 3;
          let halfY = 3.0;
         confirmationo.push(parseInt(`${regeng_}`) | area9.size);
         bcopy_9y += `${2 * vietnamZ.size}`;
         vietnamZ.set(`${bcopy_9y}`, bcopy_9y.length + 1);
         areay *= areay + bcopy_9y.length;
         halfY *= parseFloat(`${1 + areay}`);
      }
          let sliderQ = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,95,98,95,49,50,0);
          let gradlewX: Map<any, any> = new Map([[String.fromCharCode(108,95,49,53,95,113,112,101,108,111,114,0),978], [String.fromCharCode(103,95,50,53,95,109,112,100,98,0),341], [String.fromCharCode(114,101,97,100,105,110,105,116,95,104,95,51,50,0),13]]);
         confirmationo.push(confirmationo.length + gradlewX.size);
         sliderQ += `${sliderQ.length}`;
         gradlewX = new Map([[sliderQ, 1]]);
         area9.set(`${confirmationo.length}`, 2 | area9.size);
         area9.set(`${confirmationo.length}`, confirmationo.length);
      while (2.53 >= (regeng_ - 3.25)) {
          let iconc = true;
          let contextL = String.fromCharCode(111,95,53,48,95,112,114,101,102,101,114,0);
          let liveM = String.fromCharCode(114,95,54,55,95,99,111,110,116,97,105,110,97,98,108,101,0);
         regeng_ -= parseFloat(`${confirmationo.length}`);
         iconc = !contextL.includes(`${iconc}`);
         contextL = `${((iconc ? 2 : 2) / (Math.max(1, 7)))}`;
         liveM = `${(String.fromCharCode(78,0) == liveM ? (iconc ? 2 : 2) : liveM.length)}`;
         break;
      }
       let applei = String.fromCharCode(100,95,53,95,109,97,112,115,105,122,101,0);
       let gmailf = String.fromCharCode(116,114,117,115,116,101,100,95,108,95,50,52,0);
      for (let l = 0; l < 2; l++) {
         area9.set(`${confirmationo.length}`, confirmationo.length);
      }
         gmailf += `${(String.fromCharCode(104,0) == gmailf ? parseInt(`${regeng_}`) : gmailf.length)}`;
          let layoutU = String.fromCharCode(101,95,50,48,95,109,101,109,98,101,114,115,104,105,112,0);
          let searchbarj = 1.0;
         gmailf = "2";
         layoutU += `${layoutU.length}`;
         searchbarj += 3 + parseInt(`${searchbarj}`);
      rewardvideoL <<= Math.min(Math.abs(loading8 / 2), 3);
   if (!Array.from(downloaded6.keys()).includes(`${robotoe}`)) {
      downloaded6 = new Map([[`${downloaded6.size}`, 3 + downloaded6.size]]);
   }
       let stringo: Map<any, any> = new Map([[String.fromCharCode(109,95,49,49,95,112,97,114,97,0),506], [String.fromCharCode(105,110,99,114,101,109,101,110,116,97,108,95,120,95,54,55,0),692]]);
       let update_uzu = 5.0;
         stringo = new Map([[`${stringo.size}`, parseInt(`${update_uzu}`) ^ stringo.size]]);
         stringo = new Map([[`${stringo.size}`, 1]]);
          let mailo: Array<any> = [397, 419];
         update_uzu /= Math.max(parseFloat(`${3 >> (Math.min(3, Math.abs(parseInt(`${update_uzu}`))))}`), 4);
         mailo.push(mailo.length + 3);
         update_uzu -= parseFloat(`${2}`);
      while (stringo.get(`${update_uzu}`) == null) {
         update_uzu *= parseFloat(`${stringo.size}`);
         break;
      }
       let rewardt: Map<any, any> = new Map([[String.fromCharCode(112,114,111,100,117,99,116,115,95,105,95,49,48,0),179], [String.fromCharCode(101,110,116,105,116,121,95,53,95,51,50,0),190]]);
      clubq = [((mbbidY ? 3 : 1))];
      rewardvideoL -= (phoneB == String.fromCharCode(108,0) ? (mbbidY ? 5 : 5) : phoneB.length);

        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

       let macauH = true;
          let vietnamA = String.fromCharCode(114,95,57,52,95,116,114,120,116,0);
          let accepted9 = 5;
         macauH = 24 == accepted9;
         vietnamA += `${vietnamA.length}`;
         accepted9 ^= vietnamA.length + vietnamA.length;
      for (let c = 0; c < 1; c++) {
          let aboutw = String.fromCharCode(121,95,51,53,95,99,111,108,114,97,109,0);
          let floaterg = String.fromCharCode(121,114,121,105,95,53,95,55,52,0);
         macauH = !macauH;
         aboutw += `${floaterg.length}`;
         floaterg += `${floaterg.length / (Math.max(1, aboutw.length))}`;
      }
      for (let k = 0; k < 1; k++) {
          let vietnamW = String.fromCharCode(99,97,110,110,111,116,95,107,95,50,56,0);
          let umengq: Array<any> = [566, 306];
         macauH = !macauH || vietnamW.length == 47;
         vietnamW += `${umengq.length ^ 1}`;
         umengq = [1];
      }
      rewardvideoL >>= Math.min(clubq.length, 5);
   while ((pauseC.length - lefts.length) > 2 && (pauseC.length - 2) > 2) {
      lefts += `${1 ^ parseInt(`${robotoe}`)}`;
      break;
   }
      clubq = [rewardvideoL >> (Math.min(4, Math.abs(dycreatort)))];
      phoneB = `${(downloaded6.size - (mbbidY ? 2 : 1))}`;
       let sounde = 3.0;
       let telegramz = String.fromCharCode(109,95,53,55,95,99,111,114,114,117,112,116,101,100,0);
       let bingx = 1.0;
         bingx /= Math.max(3, 1 + parseInt(`${sounde}`));
      if ((sounde / (Math.max(parseFloat(`${telegramz.length}`), 8))) < 3.87 || (sounde / 3.87) < 5.21) {
         telegramz += `${telegramz.length}`;
      }
       let plashA: Map<any, any> = new Map([[String.fromCharCode(111,103,103,105,110,103,95,56,95,49,49,0),510], [String.fromCharCode(99,111,110,100,105,116,105,111,110,97,108,95,105,95,55,54,0),574], [String.fromCharCode(108,95,51,52,95,116,114,101,101,115,0),791]]);
      while (5.20 < (bingx * sounde) && (bingx * 5.20) < 1.11) {
          let condensede = 0.0;
          let upgradeC = 0.0;
          let screenW = 2.0;
         bingx += telegramz.length * 2;
         condensede -= parseFloat(`${parseInt(`${screenW}`) + 3}`);
         upgradeC += 3;
         screenW /= Math.max(parseInt(`${screenW}`) * parseInt(`${condensede}`), 4);
         break;
      }
      while (Array.from(plashA.values()).includes(bingx)) {
         bingx /= Math.max(telegramz.length / (Math.max(3, plashA.size)), 2);
         break;
      }
      for (let k = 0; k < 2; k++) {
         telegramz += `${parseInt(`${bingx}`)}`;
      }
          let detailw = false;
          let gesturesH: Map<any, any> = new Map([[String.fromCharCode(117,95,51,52,95,104,113,120,100,115,112,0),String.fromCharCode(115,105,103,110,117,109,95,98,95,57,52,0)], [String.fromCharCode(108,95,56,50,95,116,97,115,107,115,0),String.fromCharCode(108,101,114,112,114,103,98,95,104,95,49,57,0)]]);
         telegramz += `${plashA.size + 3}`;
         detailw = null == gesturesH.get(`${detailw}`);
         gesturesH = new Map([[`${gesturesH.size}`, gesturesH.size ^ 1]]);
         bingx *= telegramz.length;
         sounde -= parseFloat(`${3 - telegramz.length}`);
      phoneB += `${parseInt(`${bingx}`) * 2}`;

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });

       let referrer4 = String.fromCharCode(98,95,56,54,95,108,97,110,103,0);
       let frame_02 = 3.0;
         referrer4 += `${referrer4.length}`;
      if (3.13 >= (frame_02 - 1.59) || (2 * referrer4.length) >= 5) {
          let rewardE = String.fromCharCode(116,105,114,101,100,95,101,95,52,0);
          let sansf: Array<any> = [12, 388];
          let activityQ: Array<any> = [325, 456];
         referrer4 += `${sansf.length - referrer4.length}`;
         rewardE += `${rewardE.length}`;
         sansf.push(rewardE.length);
         activityQ = [activityQ.length + 1];
      }
      for (let r = 0; r < 3; r++) {
         referrer4 += `${(referrer4 == String.fromCharCode(95,0) ? referrer4.length : parseInt(`${frame_02}`))}`;
      }
      while (1 > (parseInt(`${frame_02}`) / (Math.max(referrer4.length, 8))) || 4 > (referrer4.length - 1)) {
         frame_02 += parseFloat(`${parseInt(`${frame_02}`) % (Math.max(referrer4.length, 1))}`);
         break;
      }
      for (let x = 0; x < 2; x++) {
         referrer4 = `${referrer4.length | 1}`;
      }
          let popupC = 2.0;
         referrer4 += `${1 >> (Math.min(1, Math.abs(parseInt(`${popupC}`))))}`;
      telegramt *= parseFloat(`${3}`);
      rewardvideoL >>= Math.min(5, parseInt(`${Math.abs(((mbbidY ? 4 : 3) >> (Math.min(lefts.length, 1))))}`));
      mbbidY = (downloaded6.size - parseInt(`${robotoe}`)) >= 98;
      mbbidY = dycreatort >= downloaded6.size;
   let episode0 = 5572540.0 >= telegramt;
   do {
      telegramt -= parseFloat(`${3 ^ clubq.length}`);
      if (episode0) {
         break;
      }
   } while (episode0 && (3 > (parseInt(`${telegramt}`) / (Math.max(4, clubq.length))) && 4 > (3 % (Math.max(10, clubq.length)))));
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
                            : require("@static/images/projectTumbnailMbsplash.png")
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
