import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import createStyles from "./tt_with_success";
import { useAppDispatch, useSelector } from "@hooks/tt_spec_download";
import { CPressable, CTextInput } from "../../../../components/atoms";
import SendIcon from '@static/images/detailStatisticsBell.svg';
import SendFillIcon from '@static/images/skipHandlerGradlew.svg';
import { COMMENT_MAX_INPUT } from "@utility/tt_trophy_cross";
import { ttResult } from "@type/tt_line_borderless";
import { ttConfirmationTail } from "@redux/reducers/tt_dycreator_reactnativejs";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux/actions/tt_string";
import { ttReport } from "../../../types/tt_zhubo";
import { useTheme } from "@react-navigation/native";
import { Avatar } from "@rneui/base";
import { ttAccepted, ttPrivateMini } from "@type/tt_down";
import { debounce } from "lodash";
import { UnreadCard } from "../../../../components/chat/tt_layout_alert";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";

type ttSmall = {
    matchID: string,
    streamer: ttReport,
    sportType: string,
    onInputFocus?: (isFocus: boolean) => void,
}

const PrivateChatPage = ({
    matchID,
    streamer,
    sportType,
    onInputFocus,
}: ttSmall) => {
    const PIN_YIN_ACCEPTED = 20;

    const { colors } = useTheme();
    const styles = useMemo(() => createStyles({ colors }), []);

    const chatState = useSelector<ttConfirmationTail>('chatReducer');
    const userState = useSelector<ttGoal>('userReducer');
    const [comment, setComment] = useState('');
    const [historyChat, sethistoryChat] = useState<ttAccepted[]>([]);
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<ttAccepted> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = ttFast.isLogin(userState.user);

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
       let area9 = 3.0;
    let suggestionN = 2.0;
    let sharedV = 4;
    let agreementa = 3.0;
    let invite1 = 4.0;
    let eighteenp: Map<any, any> = new Map([[String.fromCharCode(120,95,54,49,95,117,118,97,114,105,110,116,0),String.fromCharCode(118,95,49,55,95,105,100,102,118,0)], [String.fromCharCode(109,101,110,117,95,116,95,51,0),String.fromCharCode(119,109,97,118,111,105,99,101,95,112,95,53,49,0)]]);
    let circleK = 4.0;
    let infoh = 0;
    let sheets = String.fromCharCode(100,101,102,101,114,114,101,114,95,110,95,49,49,0);
    let control_: Map<any, any> = new Map([[String.fromCharCode(108,111,103,103,105,110,103,95,98,95,56,56,0),340], [String.fromCharCode(115,117,98,102,114,97,109,101,95,109,95,55,52,0),92], [String.fromCharCode(97,112,102,115,95,99,95,50,52,0),679]]);
    let whistleH: Array<any> = [String.fromCharCode(111,114,105,103,105,110,115,95,115,95,49,49,0), String.fromCharCode(116,104,114,101,97,100,112,111,111,108,95,48,95,54,0), String.fromCharCode(114,101,97,100,105,110,95,101,95,48,0)];
    let container0 = 2.0;
    let filedk = false;
    let volumeR: Array<any> = [String.fromCharCode(110,95,51,57,95,104,113,97,100,115,112,0), String.fromCharCode(100,97,115,104,101,115,95,57,95,55,0), String.fromCharCode(106,95,53,56,95,116,114,105,110,103,0)];
       let closeq = 0.0;
      if ((closeq * 2.23) >= 2.26 || 5.97 >= (2.23 - closeq)) {
         closeq -= parseInt(`${closeq}`);
      }
      let sourceb = 7087909.0 <= closeq;
      do {
         closeq -= parseInt(`${closeq}`);
         if (sourceb) {
            break;
         }
      } while (sourceb && ((closeq - 2.56) == 5.55 && 4.61 == (closeq - 2.56)));
         closeq /= Math.max(4, parseInt(`${closeq}`) * parseInt(`${closeq}`));
      whistleH.push(infoh + 3);
      circleK += parseFloat(`${parseInt(`${area9}`)}`);
      circleK /= Math.max(5, parseFloat(`${parseInt(`${circleK}`)}`));
       let bannerH = String.fromCharCode(99,111,109,109,105,116,95,57,95,57,52,0);
      while (!bannerH.startsWith(bannerH)) {
         bannerH += `${(String.fromCharCode(97,0) == bannerH ? bannerH.length : bannerH.length)}`;
         break;
      }
          let transferZ: Array<any> = [110, 988, 233];
         bannerH += `${transferZ.length >> (Math.min(bannerH.length, 1))}`;
          let mbsplashW = 4;
          let moduleQ = String.fromCharCode(97,108,108,121,117,118,95,118,95,55,48,0);
         bannerH += `${bannerH.length * mbsplashW}`;
         mbsplashW ^= moduleQ.length % (Math.max(moduleQ.length, 8));
      agreementa *= parseFloat(`${1 % (Math.max(1, infoh))}`);

        const histories = chatState.privateRoomHistory?.filter(e => e.roomId === `private:${matchID}` && e.userId === chatState.userId);

      sheets = `${sheets.length ^ 1}`;
      sharedV %= Math.max(3, 3 + parseInt(`${circleK}`));
   for (let u = 0; u < 2; u++) {
      sheets = `${parseInt(`${agreementa}`) << (Math.min(1, Math.abs(infoh)))}`;
   }
   while ((5 * infoh) == 3) {
      whistleH.push(sheets.length % 2);
      break;
   }

        if (!histories || histories.length === 0) return;

   for (let o = 0; o < 3; o++) {
      eighteenp.set(`${invite1}`, parseInt(`${invite1}`));
   }
       let foundY: Array<any> = [870, 632, 270];
       let taiwanc = String.fromCharCode(114,101,119,97,114,100,115,95,98,95,57,51,0);
       let fileL: Array<any> = [553, 751, 323];
          let inactive1 = false;
          let minivod6: Array<any> = [441, 738];
          let launch2 = true;
         fileL = [taiwanc.length];
         inactive1 = !inactive1;
         minivod6 = [(3 - (inactive1 ? 5 : 1))];
         launch2 = !inactive1;
      if (2 == (taiwanc.length << (Math.min(Math.abs(3), 4))) && 3 == (fileL.length << (Math.min(taiwanc.length, 1)))) {
         fileL.push(taiwanc.length / 3);
      }
      if ((taiwanc.length & 3) < 2 && (3 & taiwanc.length) < 3) {
         taiwanc += `${taiwanc.length}`;
      }
      let floatingf = String.fromCharCode(111,110,110,109,115,101,0) == taiwanc;
      do {
         taiwanc += `${taiwanc.length * fileL.length}`;
         if (floatingf) {
            break;
         }
      } while (floatingf && ((taiwanc.length ^ 4) == 1));
         foundY = [3];
      for (let q = 0; q < 3; q++) {
         fileL.push(taiwanc.length % 2);
      }
         foundY = [foundY.length];
         taiwanc = `${taiwanc.length}`;
      let sportsT = 5731830 >= foundY.length;
      do {
         foundY = [taiwanc.length | fileL.length];
         if (sportsT) {
            break;
         }
      } while ((fileL.includes(foundY.length)) && sportsT);
      eighteenp.set(`${area9}`, 3);
      control_.set(`${container0}`, 3 / (Math.max(3, parseInt(`${agreementa}`))));
      control_.set(`${area9}`, parseInt(`${circleK}`));

        if (historyChat.length === 0) {

      suggestionN /= Math.max(parseFloat(`${parseInt(`${area9}`) & 1}`), 1);
   while (sharedV == invite1) {
      invite1 *= 1 + control_.size;
      break;
   }
      control_.set(`${area9}`, 3 >> (Math.min(Math.abs(infoh), 1)));
   for (let q = 0; q < 3; q++) {
      control_.set(`${sharedV}`, eighteenp.size + sharedV);
   }
            sethistoryChat([histories[histories.length - 1]]);
        } else {

       let floaterH = 1;
       let stationsd = 2;
       let bottomx = String.fromCharCode(110,95,57,56,95,112,117,108,108,113,117,111,116,101,0);
         floaterH *= stationsd % (Math.max(1, 4));
      for (let s = 0; s < 1; s++) {
         stationsd += (String.fromCharCode(87,0) == bottomx ? bottomx.length : stationsd);
      }
      for (let i = 0; i < 3; i++) {
         stationsd /= Math.max(3 | bottomx.length, 5);
      }
          let miniT = String.fromCharCode(99,111,100,101,99,112,97,114,95,110,95,53,53,0);
          let referrerP = String.fromCharCode(106,95,53,53,95,97,114,101,115,0);
          let frame_j32 = String.fromCharCode(117,95,49,54,95,114,97,116,105,111,110,97,108,0);
         bottomx += `${miniT.length ^ stationsd}`;
         miniT = `${referrerP.length}`;
         referrerP += `${2 - frame_j32.length}`;
         frame_j32 += `${frame_j32.length % 2}`;
         stationsd %= Math.max(1 * bottomx.length, 3);
         stationsd ^= 1 / (Math.max(3, bottomx.length));
       let dropdownV = String.fromCharCode(116,103,99,97,108,108,115,95,113,95,56,57,0);
       let actionsZ = String.fromCharCode(109,105,100,95,100,95,53,54,0);
      while (!actionsZ.startsWith(`${dropdownV.length}`)) {
          let math8: Array<any> = [839, 503];
          let soundU = 1.0;
         actionsZ = `${stationsd}`;
         math8 = [2];
         soundU *= math8.length * parseInt(`${soundU}`);
         break;
      }
      if (!bottomx.startsWith(`${dropdownV.length}`)) {
         bottomx += `${bottomx.length << (Math.min(Math.abs(3), 1))}`;
      }
      control_.set(`${filedk}`, infoh);
      agreementa -= parseFloat(`${whistleH.length}`);
   while ((eighteenp.size ^ 4) < 2 && 5.55 < (area9 * parseFloat(`${eighteenp.size}`))) {
      area9 -= parseFloat(`${2}`);
      break;
   }
   if ((circleK / (Math.max(3, invite1))) < 1.34 && (circleK / (Math.max(invite1, 6))) < 1.34) {
      invite1 *= parseInt(`${agreementa}`);
   }
            const indexFound = histories.findIndex(e => e.joinDate === historyChat[0].joinDate);

      whistleH.push(control_.size);
      circleK -= parseFloat(`${parseInt(`${agreementa}`) * sharedV}`);
      whistleH.push(2 + parseInt(`${circleK}`));
   if (!Array.from(control_.values()).includes(whistleH.length)) {
      whistleH = [control_.size];
   }

            if (indexFound === -1 || (indexFound - 1) < 0) return;

   if (5.7 > (3 * invite1)) {
      agreementa /= Math.max(parseFloat(`${2}`), 4);
   }
   for (let t = 0; t < 1; t++) {
      sharedV += infoh;
   }
      filedk = container0 < 80.85;
   while ((3.21 - invite1) < 2.17) {
       let commentD = String.fromCharCode(102,95,54,50,95,109,98,109,111,100,101,0);
       let taiwan4 = 1.0;
         taiwan4 -= 3;
      if (1.70 == taiwan4) {
          let becomeC = 4.0;
          let fillK = String.fromCharCode(121,95,50,50,95,105,109,112,117,108,115,101,0);
          let humidityZ = String.fromCharCode(112,105,118,111,116,95,120,95,57,53,0);
         commentD += "1";
         becomeC -= parseFloat(`${3}`);
         fillK += "2";
         humidityZ += `${humidityZ.length}`;
      }
      if (commentD.length <= 4) {
         commentD += `${parseInt(`${taiwan4}`)}`;
      }
      for (let n = 0; n < 3; n++) {
         taiwan4 *= (String.fromCharCode(73,0) == commentD ? parseInt(`${taiwan4}`) : commentD.length);
      }
         commentD = `${commentD.length & 1}`;
         commentD += "2";
      filedk = infoh > parseInt(`${circleK}`);
      break;
   }

            sethistoryChat(prev => [histories[indexFound - 1]].concat(prev));
        }
    }, 500);

    const renderChatGroup = useCallback(({ item }: { item: ttPrivateMini }) => {
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

    const renderMessageItem = useCallback(({ item }: { item: ttResult }) => {
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
                            : require("@static/images/projectTumbnailMbsplash.png")
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
                        : require("@static/images/projectTumbnailMbsplash.png")
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
       let downloadingk = String.fromCharCode(116,95,55,51,95,99,108,101,97,114,118,105,100,101,111,100,97,116,97,0);
    let rightA = 1;
    let const_28l = 5.0;
    let commonV: Array<any> = [543, 358, 858];
    let onewsU = true;
    let singleN = 4.0;
    let drag8 = 2.0;
    let utilsS = String.fromCharCode(105,95,49,56,0);
    let datal: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,101,114,115,95,53,95,49,48,0),true ], [String.fromCharCode(119,95,53,55,95,118,115,121,110,99,0),false ]]);
    let auto_lhx = 2;
    let mintegralo = true;
    let routerO = false;
    let acceptedf = String.fromCharCode(107,95,49,48,95,109,111,110,116,104,115,0);
    let collectionf: Map<any, any> = new Map([[String.fromCharCode(118,115,117,98,113,95,50,95,53,55,0),String.fromCharCode(100,101,102,105,110,101,115,95,109,95,54,48,0)], [String.fromCharCode(113,95,52,57,95,114,115,99,99,0),String.fromCharCode(105,95,50,49,0)], [String.fromCharCode(108,97,115,116,110,111,100,101,95,118,95,53,53,0),String.fromCharCode(109,97,114,107,105,110,103,95,57,95,52,57,0)]]);
    let vignetteV: Array<any> = [String.fromCharCode(120,95,52,50,95,98,115,119,97,112,0), String.fromCharCode(97,109,114,119,98,100,101,99,95,55,95,56,54,0), String.fromCharCode(103,95,50,57,95,115,117,112,101,114,118,105,101,119,0)];
      datal.set(`${rightA}`, rightA << (Math.min(Math.abs(3), 5)));
   let pointw = datal.size >= 4975951;
   do {
       let footballw = String.fromCharCode(109,100,99,118,95,101,95,57,53,0);
       let playlistn = String.fromCharCode(121,95,57,54,95,102,105,110,100,97,115,111,99,0);
       let detailsJ = 1;
       let applicationL = 2;
       let connectionM = 5.0;
         detailsJ *= 2;
          let membershipb = 4.0;
          let floatingW: Array<any> = [String.fromCharCode(111,116,104,101,114,119,105,115,101,95,99,95,51,53,0), String.fromCharCode(108,105,98,120,95,54,95,52,55,0), String.fromCharCode(105,103,110,101,116,116,101,95,109,95,51,55,0)];
         playlistn = `${detailsJ}`;
         membershipb -= 1;
         floatingW.push(parseInt(`${membershipb}`) % 2);
         playlistn = "3";
         detailsJ %= Math.max(1, footballw.length);
         connectionM *= parseFloat(`${3}`);
      let gesturej = 5858212 <= applicationL;
      do {
          let lineF = 0.0;
          let whatsapp4 = String.fromCharCode(99,95,56,53,95,105,110,118,101,114,115,105,111,110,0);
          let goalw = String.fromCharCode(114,101,103,105,115,116,101,114,95,118,95,49,49,0);
          let panglei = 5.0;
          let fillU = 4;
         applicationL += parseInt(`${connectionM}`) * 1;
         lineF += (String.fromCharCode(90,0) == whatsapp4 ? fillU : whatsapp4.length);
         goalw = `${(String.fromCharCode(68,0) == goalw ? goalw.length : parseInt(`${panglei}`))}`;
         panglei -= goalw.length;
         fillU += 2 & parseInt(`${lineF}`);
         if (gesturej) {
            break;
         }
      } while ((applicationL == footballw.length) && gesturej);
      let securityt = String.fromCharCode(48,51,107,109,97,99,110,0) == playlistn;
      do {
         playlistn += `${footballw.length * playlistn.length}`;
         if (securityt) {
            break;
         }
      } while ((3 == (playlistn.length - 3) || (playlistn.length - detailsJ) == 3) && securityt);
          let teamz = String.fromCharCode(119,95,49,51,95,121,105,101,108,100,0);
          let blacklistt: Map<any, any> = new Map([[String.fromCharCode(120,95,49,49,95,115,104,97,114,101,0),866], [String.fromCharCode(111,112,101,110,95,48,95,57,51,0),719], [String.fromCharCode(114,101,118,111,107,101,95,50,95,51,54,0),802]]);
          let main_rY = 4.0;
         playlistn = `${applicationL | 3}`;
         teamz += `${blacklistt.size / (Math.max(3, 7))}`;
         blacklistt.set(`${teamz}`, blacklistt.size * teamz.length);
         main_rY -= parseFloat(`${teamz.length | blacklistt.size}`);
      for (let c = 0; c < 2; c++) {
         footballw = `${1 | applicationL}`;
      }
          let gesturei = 2.0;
          let emojip = 2.0;
         footballw += `${parseInt(`${connectionM}`)}`;
         gesturei += parseFloat(`${parseInt(`${emojip}`) + parseInt(`${gesturei}`)}`);
         emojip /= Math.max(parseFloat(`${parseInt(`${emojip}`) | 3}`), 3);
         detailsJ &= 1 << (Math.min(4, Math.abs(detailsJ)));
       let google0: Map<any, any> = new Map([[String.fromCharCode(100,101,108,101,103,97,116,101,95,55,95,49,51,0),730], [String.fromCharCode(120,95,57,51,95,98,99,104,101,99,107,0),862], [String.fromCharCode(113,95,49,54,95,103,97,105,110,115,0),987]]);
       let infou: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,112,101,100,95,116,95,49,48,48,0),321], [String.fromCharCode(115,117,98,115,101,116,95,119,95,56,52,0),183]]);
      let chatC = String.fromCharCode(49,121,51,109,105,116,100,0) == footballw;
      do {
         footballw = `${parseInt(`${connectionM}`)}`;
         if (chatC) {
            break;
         }
      } while ((!footballw.startsWith(`${playlistn.length}`)) && chatC);
      for (let r = 0; r < 2; r++) {
         applicationL |= detailsJ;
      }
      if (3 > infou.size) {
          let selectI = String.fromCharCode(118,95,50,48,95,101,120,116,114,97,99,116,0);
          let emojik = String.fromCharCode(121,105,101,108,100,95,50,95,50,55,0);
          let movies6 = String.fromCharCode(100,98,111,111,108,104,117,102,102,95,107,95,51,48,0);
          let detailo = String.fromCharCode(99,95,53,95,97,108,105,103,110,101,114,0);
         playlistn += `${selectI.length | 2}`;
         selectI += `${emojik.length + movies6.length}`;
         emojik = `${movies6.length}`;
         detailo += `${movies6.length}`;
      }
      datal.set(utilsS, datal.size);
      if (pointw) {
         break;
      }
   } while (pointw && (2 >= (datal.size >> (Math.min(Math.abs(4), 1))) || (singleN * 2.24) >= 4.96));
      datal.set(`${drag8}`, 2 << (Math.min(Math.abs(parseInt(`${drag8}`)), 5)));
   let single5 = downloadingk.length >= 7630752;
   do {
      downloadingk += `${downloadingk.length >> (Math.min(Math.abs(1), 5))}`;
      if (single5) {
         break;
      }
   } while (((5 / (Math.max(9, downloadingk.length))) >= 5 && (drag8 - downloadingk.length) >= 1.69) && single5);
   let time_q3e = 8621289 <= auto_lhx;
   do {
      auto_lhx |= parseInt(`${singleN}`);
      if (time_q3e) {
         break;
      }
   } while ((4.38 <= (const_28l / (Math.max(4.15, 7)))) && time_q3e);

        if (comment.trim().length === 0 || !isCommentValid) return;

       let leftO = String.fromCharCode(119,95,53,51,95,103,108,111,98,97,108,108,121,0);
       let umengz = 3.0;
         umengz += parseFloat(`${1 & leftO.length}`);
         umengz *= parseFloat(`${3}`);
         leftO += `${parseInt(`${umengz}`) * 1}`;
         leftO = "3";
      while (2 > (5 ^ leftO.length)) {
         umengz -= parseFloat(`${2 * parseInt(`${umengz}`)}`);
         break;
      }
         umengz /= Math.max(parseFloat(`${parseInt(`${umengz}`) / (Math.max(leftO.length, 4))}`), 2);
      mintegralo = auto_lhx < parseInt(`${drag8}`);
   let commentl = utilsS == String.fromCharCode(113,101,97,52,115,52,107,97,0);
   do {
      utilsS = `${2 << (Math.min(1, Math.abs(datal.size)))}`;
      if (commentl) {
         break;
      }
   } while ((utilsS.length > 4) && commentl);
   while (3 >= downloadingk.length) {
       let mbridgeU = 2.0;
       let constantss = 1.0;
          let googleE = String.fromCharCode(117,95,57,51,95,109,111,110,105,116,111,114,105,110,103,0);
          let componentU = String.fromCharCode(110,101,101,100,115,95,117,95,56,50,0);
          let downloadedS = String.fromCharCode(108,95,51,54,95,98,108,117,114,108,101,115,115,0);
         mbridgeU /= Math.max((parseFloat(`${downloadedS == String.fromCharCode(69,0) ? downloadedS.length : componentU.length}`)), 4);
         googleE = `${googleE.length >> (Math.min(2, googleE.length))}`;
         componentU += `${(String.fromCharCode(50,0) == googleE ? googleE.length : googleE.length)}`;
          let notificationo = String.fromCharCode(97,95,56,50,95,111,112,101,114,97,116,105,111,110,0);
         mbridgeU /= Math.max(parseFloat(`${2 % (Math.max(9, parseInt(`${constantss}`)))}`), 2);
         notificationo = `${notificationo.length >> (Math.min(Math.abs(3), 5))}`;
      while (4.8 == (1.63 / (Math.max(5, constantss))) || 1.63 == (mbridgeU / (Math.max(8, constantss)))) {
          let iconQ = true;
          let telegram9 = String.fromCharCode(103,95,53,52,95,105,110,100,101,120,0);
         mbridgeU *= (parseFloat(`${telegram9.length - (iconQ ? 2 : 1)}`));
         break;
      }
      for (let r = 0; r < 1; r++) {
          let bodanI: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,110,100,101,100,95,115,95,48,0),false ], [String.fromCharCode(99,95,56,57,95,117,110,104,105,100,101,0),true ]]);
          let inactivei = String.fromCharCode(104,95,54,51,95,99,114,108,100,112,0);
          let moduleo = String.fromCharCode(99,104,114,111,109,97,95,120,95,51,52,0);
          let areaO = String.fromCharCode(97,110,103,108,101,115,95,99,95,55,52,0);
          let stringF = String.fromCharCode(99,121,117,118,95,101,95,56,56,0);
         constantss -= parseFloat(`${areaO.length}`);
         bodanI = new Map([[moduleo, inactivei.length]]);
         inactivei = "3";
         moduleo += `${inactivei.length}`;
         areaO += "3";
         stringF += `${stringF.length ^ 1}`;
      }
      for (let v = 0; v < 2; v++) {
         constantss -= parseFloat(`${parseInt(`${mbridgeU}`) + 3}`);
      }
      for (let d = 0; d < 2; d++) {
         constantss += parseFloat(`${parseInt(`${mbridgeU}`)}`);
      }
      rightA %= Math.max(2 * parseInt(`${drag8}`), 5);
      break;
   }
       let lessN = String.fromCharCode(114,97,108,102,100,97,116,97,95,108,95,50,50,0);
       let analyticr = 1;
       let loadingE = false;
      if (4 >= lessN.length && !loadingE) {
          let successS = String.fromCharCode(118,95,54,54,95,115,114,99,0);
          let stationd = 2.0;
         loadingE = !loadingE;
         successS = `${parseInt(`${stationd}`)}`;
         stationd *= 1 * successS.length;
      }
      for (let g = 0; g < 3; g++) {
          let viewerY = 1;
          let suggestions = 1;
         analyticr -= suggestions;
         viewerY %= Math.max(1, 3);
      }
      for (let j = 0; j < 2; j++) {
         loadingE = loadingE && lessN.length <= 3;
      }
       let shootE: Array<any> = [184, 99];
      while (loadingE && (shootE.length % (Math.max(5, 9))) < 1) {
         loadingE = (shootE.length >> (Math.min(lessN.length, 1))) == 84;
         break;
      }
      let temp8 = 9274166 >= analyticr;
      do {
          let countdown0 = 4.0;
         analyticr >>= Math.min(shootE.length, 2);
         countdown0 *= parseInt(`${countdown0}`) >> (Math.min(3, Math.abs(2)));
         if (temp8) {
            break;
         }
      } while (temp8 && (4 > (3 + lessN.length)));
          let termsC: Map<any, any> = new Map([[String.fromCharCode(102,95,56,50,95,100,114,97,103,0),811], [String.fromCharCode(114,95,56,50,95,103,108,107,0),227], [String.fromCharCode(115,119,97,112,112,101,100,95,99,95,54,52,0),402]]);
         lessN += `${3 - lessN.length}`;
         termsC.set(`${termsC.size}`, 1 * termsC.size);
      let thailandF = 6932161 >= analyticr;
      do {
          let soundx = String.fromCharCode(100,97,116,97,99,101,110,116,101,114,95,115,95,50,57,0);
          let container9 = String.fromCharCode(105,112,118,95,107,95,53,51,0);
          let loginB = 4.0;
          let dplusL = String.fromCharCode(114,101,102,117,110,100,95,119,95,55,48,0);
         analyticr |= container9.length;
         soundx += `${soundx.length | 2}`;
         container9 += `${3 % (Math.max(3, soundx.length))}`;
         loginB *= (dplusL == String.fromCharCode(89,0) ? soundx.length : dplusL.length);
         if (thailandF) {
            break;
         }
      } while (thailandF && (lessN.length <= 1));
      for (let t = 0; t < 2; t++) {
          let constantsv = 0.0;
          let native3: Map<any, any> = new Map([[String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,95,111,95,49,48,48,0),467], [String.fromCharCode(100,101,97,100,95,53,95,55,52,0),123]]);
          let countdownR: Array<any> = [892, 41, 250];
          let indexr = 0.0;
          let statst = 4.0;
         lessN += `${shootE.length + lessN.length}`;
         constantsv /= Math.max(5, parseFloat(`${3}`));
         native3.set(`${countdownR.length}`, native3.size << (Math.min(countdownR.length, 4)));
         indexr -= parseFloat(`${parseInt(`${constantsv}`) - 3}`);
         statst -= 1 ^ parseInt(`${statst}`);
      }
      singleN -= (parseFloat(`${(mintegralo ? 4 : 1)}`));
   if (!utilsS.includes(`${datal.size}`)) {
      datal.set(`${const_28l}`, parseInt(`${const_28l}`) & 3);
   }

        appDispatch(sendChatMessage({
            message: comment,
            isPrivate: true,
        }));

      const_28l *= 2;
   for (let g = 0; g < 2; g++) {
      utilsS = `${(downloadingk == String.fromCharCode(72,0) ? parseInt(`${singleN}`) : downloadingk.length)}`;
   }
      utilsS = `${3 ^ rightA}`;
       let downloaderf = 0.0;
       let shareR = String.fromCharCode(100,105,115,112,95,113,95,55,53,0);
       let read2 = String.fromCharCode(121,95,55,55,95,115,98,115,112,108,105,116,0);
         shareR = `${read2.length + 1}`;
      let nativeex0 = String.fromCharCode(105,111,101,111,0) == shareR;
      do {
         shareR += "1";
         if (nativeex0) {
            break;
         }
      } while (((shareR.length / 2) >= 5 || 2 >= (2 >> (Math.min(3, shareR.length)))) && nativeex0);
         read2 += `${shareR.length}`;
          let rounda = 0.0;
          let modelsW = String.fromCharCode(102,95,49,52,95,115,121,115,99,116,108,115,0);
          let containerq = 4.0;
         read2 += `${parseInt(`${containerq}`)}`;
         rounda -= 2;
         modelsW += `${(modelsW == String.fromCharCode(108,0) ? parseInt(`${rounda}`) : modelsW.length)}`;
         containerq *= (parseFloat(`${String.fromCharCode(120,0) == modelsW ? parseInt(`${rounda}`) : modelsW.length}`));
         downloaderf /= Math.max(4, parseFloat(`${shareR.length}`));
          let readU = false;
          let condensedA = String.fromCharCode(100,115,116,114,95,121,95,49,57,0);
         shareR = `${parseInt(`${downloaderf}`)}`;
         readU = condensedA.endsWith(`${readU}`);
         condensedA += `${((readU ? 5 : 3) / 3)}`;
      if (1.46 < downloaderf) {
         downloaderf /= Math.max(parseFloat(`${1}`), 3);
      }
      for (let m = 0; m < 2; m++) {
          let foundy = String.fromCharCode(120,95,54,95,118,109,115,108,0);
          let colorsx: Map<any, any> = new Map([[String.fromCharCode(107,95,51,53,95,99,111,110,116,105,110,117,101,115,0),484], [String.fromCharCode(110,95,50,50,95,99,111,109,112,97,110,100,0),368], [String.fromCharCode(99,95,50,52,95,99,111,112,121,100,97,116,97,0),616]]);
          let skip4 = 0.0;
          let promotion_: Map<any, any> = new Map([[String.fromCharCode(105,95,49,54,95,99,112,117,102,108,97,103,115,0),249], [String.fromCharCode(97,101,115,116,97,98,95,112,95,50,48,0),101], [String.fromCharCode(113,95,57,95,101,110,115,0),748]]);
         shareR += `${colorsx.size}`;
         foundy = `${parseInt(`${skip4}`) / 3}`;
         colorsx = new Map([[`${promotion_.size}`, (foundy == String.fromCharCode(87,0) ? foundy.length : promotion_.size)]]);
         skip4 += parseFloat(`${promotion_.size}`);
      }
          let policyc: Array<any> = [764, 162];
          let zoom5: Array<any> = [835, 652, 556];
          let closeB = 1.0;
         downloaderf -= parseFloat(`${zoom5.length % 1}`);
         policyc = [1];
         zoom5 = [parseInt(`${closeB}`)];
         closeB -= parseFloat(`${1}`);
      auto_lhx -= parseInt(`${singleN}`);
      downloadingk += `${(utilsS == String.fromCharCode(121,0) ? commonV.length : utilsS.length)}`;

        setComment('');

   for (let a = 0; a < 1; a++) {
       let cornerb = 3;
       let hoveru = 3.0;
      for (let s = 0; s < 3; s++) {
          let macauJ = String.fromCharCode(104,95,57,52,95,98,105,103,103,101,115,116,0);
          let firebaseB = 4;
         cornerb -= cornerb;
         macauJ += `${macauJ.length}`;
         firebaseB <<= Math.min(Math.abs(2), 1);
      }
         hoveru -= parseFloat(`${cornerb * 3}`);
      while (cornerb > 2) {
         hoveru -= parseFloat(`${2 & cornerb}`);
         break;
      }
      while (4 == (cornerb & 4) && 4 == (cornerb - parseInt(`${hoveru}`))) {
          let chatT = String.fromCharCode(101,95,50,56,95,100,115,100,112,99,109,0);
          let progressE = 0;
          let animation3 = false;
          let volume4 = String.fromCharCode(101,120,101,99,117,116,105,110,103,95,48,95,50,54,0);
          let favoriteS = 3;
         cornerb += 1;
         chatT = `${(chatT.length >> (Math.min(2, Math.abs((animation3 ? 5 : 2)))))}`;
         progressE /= Math.max(3, 2);
         animation3 = ((chatT.length - (animation3 ? 62 : chatT.length)) == 62);
         volume4 = `${volume4.length | 2}`;
         favoriteS &= progressE;
         break;
      }
          let matchesa: Map<any, any> = new Map([[String.fromCharCode(108,101,97,118,101,95,105,95,55,53,0),773], [String.fromCharCode(99,95,56,48,95,104,101,120,98,121,116,101,0),450]]);
          let condensedo: Map<any, any> = new Map([[String.fromCharCode(116,117,110,110,101,108,95,107,95,49,48,48,0),880], [String.fromCharCode(111,100,105,110,103,95,48,95,54,49,0),945], [String.fromCharCode(118,95,54,55,95,108,97,117,110,99,104,0),0]]);
         cornerb %= Math.max(3, 3);
         matchesa = new Map([[`${matchesa.size}`, matchesa.size]]);
         condensedo.set(`${condensedo.size}`, matchesa.size);
      for (let p = 0; p < 1; p++) {
         hoveru += parseFloat(`${cornerb % 2}`);
      }
      datal = new Map([[downloadingk, (downloadingk == String.fromCharCode(69,0) ? (mintegralo ? 4 : 2) : downloadingk.length)]]);
   }
      const_28l /= Math.max(((mintegralo ? 2 : 1) - parseInt(`${const_28l}`)), 2);
   if (!commonV.includes(auto_lhx)) {
      commonV.push(commonV.length);
   }
      rightA ^= 3;
       let photoz: Array<any> = [151, 560];
       let roundu = 0;
          let memberW = 4.0;
         roundu &= 3 >> (Math.min(Math.abs(roundu), 1));
         memberW -= parseFloat(`${3 + parseInt(`${memberW}`)}`);
         photoz.push(photoz.length | roundu);
      downloadingk += `${parseInt(`${drag8}`)}`;
        Keyboard.dismiss();
    }, [isCommentValid, comment]);

    const onUserScroll = () => {
       let chartF = 0;
    let sendX = String.fromCharCode(111,95,53,48,95,114,101,115,117,108,117,116,105,111,110,0);
    let fullc = 1.0;
    let lightr = String.fromCharCode(114,101,101,108,95,118,95,49,53,0);
    let score7 = 3;
    let tooltips5: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,99,111,100,101,99,95,106,95,53,50,0),148], [String.fromCharCode(100,105,115,112,108,97,121,95,102,95,54,0),315], [String.fromCharCode(105,100,101,109,112,111,116,101,110,99,121,95,116,95,55,49,0),965]]);
    let small6: Map<any, any> = new Map([[String.fromCharCode(99,117,115,116,111,109,105,122,101,114,95,116,95,54,48,0),217], [String.fromCharCode(108,111,99,97,116,101,100,95,98,95,51,57,0),666], [String.fromCharCode(105,110,116,101,110,115,105,116,121,95,105,95,51,51,0),224]]);
    let playlisto = false;
    let logoa = String.fromCharCode(106,95,50,52,95,115,101,101,107,105,110,103,0);
    let downloadedA = 5.0;
    let themeT = 0;
    let common7: Array<any> = [String.fromCharCode(120,95,50,52,95,114,101,102,112,105,99,0), String.fromCharCode(103,101,110,101,114,97,116,101,95,53,95,53,56,0)];
      lightr = `${sendX.length}`;
      lightr = `${chartF >> (Math.min(sendX.length, 2))}`;
      logoa += `${small6.size % 2}`;
      small6 = new Map([[lightr, (String.fromCharCode(49,0) == lightr ? lightr.length : score7)]]);
      tooltips5 = new Map([[`${playlisto}`, (lightr.length ^ (playlisto ? 2 : 3))]]);
   if (Array.from(small6.keys()).includes(`${downloadedA}`)) {
      downloadedA -= parseFloat(`${tooltips5.size}`);
   }
      small6 = new Map([[sendX, parseInt(`${downloadedA}`) ^ sendX.length]]);
      lightr += "3";
   for (let e = 0; e < 3; e++) {
       let handlerb = String.fromCharCode(119,95,55,53,95,102,108,101,120,102,101,99,0);
      for (let d = 0; d < 2; d++) {
          let predictionU = 4.0;
         handlerb = `${handlerb.length}`;
         predictionU += parseFloat(`${parseInt(`${predictionU}`)}`);
      }
      let greyN = 6874643 <= handlerb.length;
      do {
         handlerb += "3";
         if (greyN) {
            break;
         }
      } while (greyN && (handlerb.includes(`${handlerb.length}`)));
      if (1 < handlerb.length) {
         handlerb += "2";
      }
      logoa = `${parseInt(`${downloadedA}`) / 3}`;
   }
      logoa += `${3 >> (Math.min(2, Math.abs(tooltips5.size)))}`;
   if (3 < (score7 + tooltips5.size) || 3 < (score7 + tooltips5.size)) {
       let moduleL = String.fromCharCode(101,95,51,52,95,111,98,106,101,99,116,0);
       let filterV = 2;
       let hoverH = String.fromCharCode(115,95,53,54,95,98,105,114,116,104,0);
       let bufferN = 1.0;
         moduleL = `${parseInt(`${bufferN}`) ^ 2}`;
         filterV <<= Math.min(Math.abs(hoverH.length | 1), 5);
      if ((filterV >> (Math.min(moduleL.length, 5))) == 4 || 4 == (filterV >> (Math.min(moduleL.length, 5)))) {
         filterV /= Math.max(2 & parseInt(`${bufferN}`), 1);
      }
       let animationT: Array<any> = [411, 809];
      for (let h = 0; h < 1; h++) {
         hoverH += `${parseInt(`${bufferN}`)}`;
      }
      if (4.15 == (bufferN * 2.67)) {
         moduleL = `${(String.fromCharCode(69,0) == moduleL ? parseInt(`${bufferN}`) : moduleL.length)}`;
      }
      while (!hoverH.includes(`${bufferN}`)) {
          let type_vA = String.fromCharCode(112,95,54,50,95,112,114,111,100,117,99,116,0);
          let mailv = 0;
          let rankU = String.fromCharCode(114,95,53,57,95,112,114,102,0);
          let detailsi = 2.0;
         hoverH = `${animationT.length ^ parseInt(`${detailsi}`)}`;
         type_vA += `${(rankU == String.fromCharCode(85,0) ? type_vA.length : rankU.length)}`;
         mailv >>= Math.min(1, Math.abs(mailv));
         detailsi += 2 % (Math.max(3, mailv));
         break;
      }
      let predictionF = 6874005 >= hoverH.length;
      do {
         hoverH = `${3 ^ filterV}`;
         if (predictionF) {
            break;
         }
      } while (predictionF && (hoverH.length == 1));
      while (1.5 <= (animationT.length / (Math.max(5, bufferN))) || (animationT.length / (Math.max(1, bufferN))) <= 1.5) {
          let membership1 = 0.0;
         animationT = [parseInt(`${membership1}`)];
         break;
      }
      while (!moduleL.endsWith(`${animationT.length}`)) {
         animationT.push(filterV);
         break;
      }
       let loadingz = 4.0;
       let inactiveh = 5.0;
      if (!animationT.includes(inactiveh)) {
          let sigmobF: Map<any, any> = new Map([[String.fromCharCode(111,95,53,50,95,102,114,97,109,101,110,117,109,0),String.fromCharCode(111,95,55,95,114,116,106,112,101,103,0)], [String.fromCharCode(97,115,110,116,95,49,95,53,52,0),String.fromCharCode(98,97,99,107,119,97,114,100,95,103,95,54,54,0)]]);
          let faviconw = String.fromCharCode(112,95,57,48,95,97,114,103,120,0);
         inactiveh += parseFloat(`${parseInt(`${bufferN}`)}`);
         sigmobF.set(`${faviconw}`, faviconw.length);
      }
      score7 |= 2 * tooltips5.size;
   }
   for (let s = 0; s < 1; s++) {
       let reminderN: Map<any, any> = new Map([[String.fromCharCode(114,95,52,53,95,118,109,100,118,105,100,101,111,0),459], [String.fromCharCode(119,114,105,116,116,101,110,95,111,95,53,49,0),206], [String.fromCharCode(109,100,99,118,95,107,95,51,56,0),194]]);
       let circlee: Map<any, any> = new Map([[String.fromCharCode(98,110,109,112,105,95,97,95,56,53,0),true ], [String.fromCharCode(110,95,52,56,95,98,121,116,101,115,0),true ]]);
         reminderN.set(`${reminderN.size}`, reminderN.size);
         circlee = new Map([[`${reminderN.size}`, reminderN.size & circlee.size]]);
         reminderN = new Map([[`${reminderN.size}`, 1 + circlee.size]]);
         reminderN.set(`${reminderN.size}`, circlee.size % 3);
       let transferV = false;
       let linkX = 3.0;
      score7 <<= Math.min(Math.abs(small6.size), 5);
   }
   if (2 < (sendX.length << (Math.min(1, Math.abs(chartF))))) {
      chartF &= lightr.length ^ sendX.length;
   }
   let backgroundd = playlisto ? !playlisto : playlisto;
   do {
       let updates5 = String.fromCharCode(117,95,51,49,95,111,118,101,114,108,97,112,112,101,100,0);
       let slider2: Array<any> = [272, 140, 634];
       let mbnativeL = 1.0;
       let kuaishoua = String.fromCharCode(99,97,114,100,105,110,97,108,105,116,121,95,101,95,50,50,0);
      let pingL = 5741044 >= updates5.length;
      do {
         updates5 += `${(String.fromCharCode(79,0) == kuaishoua ? kuaishoua.length : updates5.length)}`;
         if (pingL) {
            break;
         }
      } while (((4 - updates5.length) <= 5 && (parseFloat(`${updates5.length}`) * mbnativeL) <= 1.18) && pingL);
         slider2 = [slider2.length & 1];
       let chartB: Array<any> = [1000, 475, 178];
       let robotoA: Array<any> = [997, 11, 504];
          let groupe: Array<any> = [568, 902, 575];
         robotoA.push(1);
         groupe = [groupe.length];
      while (4 >= (chartB.length / 2)) {
          let borderlessh = String.fromCharCode(109,95,55,54,95,102,114,111,122,101,110,0);
          let robotoy = String.fromCharCode(119,95,56,51,95,104,117,102,102,121,117,118,100,115,112,0);
          let langj = String.fromCharCode(100,95,55,48,95,103,117,97,114,100,0);
          let photoH: Map<any, any> = new Map([[String.fromCharCode(108,95,53,56,95,108,111,110,103,109,117,108,97,119,0),350], [String.fromCharCode(113,95,57,50,95,115,101,97,114,99,104,0),471]]);
          let homeq = String.fromCharCode(116,105,116,108,101,95,111,95,53,54,0);
         chartB.push(1);
         borderlessh = "2";
         robotoy += "1";
         langj += "2";
         photoH.set(langj, 1);
         homeq += "3";
         break;
      }
      let style6 = robotoA.length >= 7454244;
      do {
         robotoA = [kuaishoua.length];
         if (style6) {
            break;
         }
      } while (style6 && ((robotoA.length % (Math.max(slider2.length, 2))) < 2));
      if (robotoA.includes(chartB.length)) {
          let navigationj: Array<any> = [43, 112];
         chartB = [kuaishoua.length];
         navigationj = [navigationj.length >> (Math.min(Math.abs(2), 5))];
      }
         mbnativeL -= parseFloat(`${1 & kuaishoua.length}`);
       let backH = String.fromCharCode(121,95,53,53,95,100,101,99,111,109,112,111,115,101,105,0);
       let dangerN = String.fromCharCode(114,95,50,57,95,116,114,105,109,0);
          let about7 = String.fromCharCode(121,95,52,51,95,100,98,105,115,0);
          let clearl = 0;
         kuaishoua += `${about7.length * 1}`;
         about7 += "2";
         clearl <<= Math.min(4, Math.abs(clearl));
      let profileM = dangerN.length >= 7317208;
      do {
          let sendL = 2;
          let bellH: Map<any, any> = new Map([[String.fromCharCode(112,114,105,111,114,105,116,105,101,115,95,118,95,54,50,0),706], [String.fromCharCode(105,110,99,114,101,109,101,110,116,101,100,95,49,95,49,48,48,0),56], [String.fromCharCode(112,108,97,121,101,100,95,101,95,54,55,0),596]]);
         dangerN = `${backH.length - 1}`;
         sendL ^= bellH.size & 2;
         bellH = new Map([[`${bellH.size}`, bellH.size]]);
         if (profileM) {
            break;
         }
      } while (((dangerN.length * 5) == 2 || (5 * dangerN.length) == 1) && profileM);
         kuaishoua += "1";
      playlisto = 79 == (chartF - themeT);
      if (backgroundd) {
         break;
      }
   } while (backgroundd && (!logoa.startsWith(`${playlisto}`)));
       let largeH = true;
       let canvas0 = 1.0;
       let downu: Map<any, any> = new Map([[String.fromCharCode(117,95,54,95,101,120,99,101,112,116,0),49], [String.fromCharCode(99,95,48,95,98,117,116,116,101,114,102,108,105,101,115,0),698], [String.fromCharCode(112,111,105,115,115,111,110,95,115,95,49,51,0),403]]);
      while (5.94 >= (4.95 / (Math.max(6, canvas0)))) {
         canvas0 /= Math.max(3, parseFloat(`${parseInt(`${canvas0}`)}`));
         break;
      }
         largeH = 65.47 >= canvas0;
         largeH = canvas0 < 22.7 || !largeH;
      while (!largeH || 3.37 >= (canvas0 / (Math.max(4.50, 9)))) {
         canvas0 -= parseFloat(`${2 & downu.size}`);
         break;
      }
       let manifest1 = String.fromCharCode(107,95,53,55,95,115,105,103,110,97,108,105,110,103,0);
       let hover7 = String.fromCharCode(102,101,101,100,98,97,99,107,95,108,95,49,48,48,0);
      for (let f = 0; f < 1; f++) {
         manifest1 = `${((largeH ? 4 : 2) << (Math.min(hover7.length, 1)))}`;
      }
         largeH = largeH || canvas0 < 13.7;
      if ((4.76 / (Math.max(1, canvas0))) > 2.22 && 5 > (parseInt(`${canvas0}`) / (Math.max(manifest1.length, 8)))) {
          let nterstitialO = 2;
          let productB = String.fromCharCode(112,95,53,57,95,115,99,111,112,101,105,100,0);
          let kuaishouS = String.fromCharCode(119,95,54,95,111,117,116,108,105,101,114,0);
          let downQ = String.fromCharCode(121,95,53,51,95,99,101,110,116,114,111,105,100,115,0);
          let topic1 = 0.0;
         canvas0 -= parseFloat(`${parseInt(`${topic1}`) - productB.length}`);
         nterstitialO /= Math.max(5, nterstitialO + 1);
         productB += `${nterstitialO}`;
         kuaishouS += `${2 << (Math.min(4, Math.abs(nterstitialO)))}`;
         downQ = `${downQ.length / 3}`;
         topic1 += kuaishouS.length - 3;
      }
          let macauq: Map<any, any> = new Map([[String.fromCharCode(100,105,97,108,105,110,103,95,54,95,56,55,0),3], [String.fromCharCode(111,95,52,49,95,114,101,99,116,105,102,121,0),436]]);
          let stationsJ: Map<any, any> = new Map([[String.fromCharCode(97,95,55,53,95,117,110,104,105,103,104,108,105,103,104,116,0),true ], [String.fromCharCode(97,116,114,97,99,116,97,98,95,110,95,50,53,0),false ]]);
         canvas0 /= Math.max(1, parseFloat(`${hover7.length & stationsJ.size}`));
         macauq = new Map([[`${macauq.size}`, macauq.size ^ macauq.size]]);
         stationsJ.set(`${macauq.size}`, 3);
      themeT |= 2;
   for (let c = 0; c < 3; c++) {
      lightr += `${((playlisto ? 3 : 2) & parseInt(`${fullc}`))}`;
   }
   let tempW = 5680648 <= score7;
   do {
      score7 >>= Math.min(Math.abs(2 - sendX.length), 5);
      if (tempW) {
         break;
      }
   } while (((downloadedA - 3.89) <= 2.100 && 4 <= (score7 - parseInt(`${downloadedA}`))) && tempW);
   for (let a = 0; a < 2; a++) {
      fullc *= parseFloat(`${1}`);
   }
       let debugb = 0.0;
       let activeB = 0.0;
         debugb -= parseFloat(`${parseInt(`${activeB}`)}`);
         activeB /= Math.max(3, parseInt(`${debugb}`));
         activeB /= Math.max(parseInt(`${activeB}`) - parseInt(`${debugb}`), 5);
      for (let k = 0; k < 3; k++) {
          let downloadedO: Map<any, any> = new Map([[String.fromCharCode(110,95,55,95,112,97,116,99,104,0),true ], [String.fromCharCode(99,117,114,116,97,105,110,95,103,95,52,52,0),true ]]);
          let playercommonH = 2.0;
          let readd = String.fromCharCode(113,95,54,55,95,115,121,110,99,104,114,111,110,105,122,101,114,0);
          let closeR = String.fromCharCode(114,101,97,100,95,98,95,55,52,0);
         activeB += parseInt(`${playercommonH}`);
         downloadedO.set(readd, 1 << (Math.min(5, readd.length)));
         playercommonH += parseFloat(`${3}`);
         closeR = `${closeR.length}`;
      }
      if ((activeB - 4.38) == 2.94) {
          let leaguej = String.fromCharCode(105,95,55,56,95,110,97,109,101,116,111,105,110,100,101,120,0);
          let verticalw = 4.0;
          let sheet6 = 2.0;
         activeB += parseInt(`${activeB}`) + parseInt(`${sheet6}`);
         leaguej = `${leaguej.length - 3}`;
         verticalw -= 3 ^ leaguej.length;
         sheet6 -= parseFloat(`${parseInt(`${verticalw}`)}`);
      }
      let rewardvideoG = activeB <= 5519259.0;
      do {
         activeB *= parseInt(`${debugb}`);
         if (rewardvideoG) {
            break;
         }
      } while ((debugb >= 3.68) && rewardvideoG);
      score7 &= 3;
   if (score7 >= 3) {
      playlisto = fullc == 73.54 && chartF == 81;
   }

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
       let styleh = 5;
    let anews7 = true;
    let backwardJ = 3.0;
    let bridgeS = String.fromCharCode(97,118,115,117,98,116,105,116,108,101,95,111,95,56,48,0);
    let activeM = String.fromCharCode(121,95,54,54,95,99,111,100,101,119,111,114,100,0);
    let room5 = true;
    let gesturey = true;
    let moonR = String.fromCharCode(119,95,57,54,95,109,105,120,0);
    let mbsplashS = 1.0;
    let rewindG = 0.0;
    let xvodE = 0;
    let mathN = true;
       let mailK = String.fromCharCode(115,100,97,108,108,111,99,120,95,111,95,53,54,0);
      for (let q = 0; q < 3; q++) {
         mailK += `${mailK.length}`;
      }
      let reducer9 = 7043417 >= mailK.length;
      do {
         mailK = `${mailK.length}`;
         if (reducer9) {
            break;
         }
      } while (reducer9 && (mailK.length <= mailK.length));
          let eventE = 1;
         mailK = `${eventE}`;
      bridgeS = `${parseInt(`${rewindG}`)}`;
       let plusF = String.fromCharCode(120,118,97,103,95,51,95,51,56,0);
       let mapping4 = 0.0;
       let emojiP = 4.0;
       let downloadedu = 3;
       let networkl = 0;
         plusF = `${networkl}`;
      for (let x = 0; x < 2; x++) {
          let fieldQ: Array<any> = [274, 85];
         emojiP += plusF.length >> (Math.min(3, Math.abs(parseInt(`${mapping4}`))));
         fieldQ.push(1);
      }
      while (!plusF.endsWith(`${emojiP}`)) {
         plusF = `${parseInt(`${emojiP}`) << (Math.min(4, Math.abs(1)))}`;
         break;
      }
         downloadedu %= Math.max(4, 2 % (Math.max(parseInt(`${emojiP}`), 9)));
      for (let w = 0; w < 3; w++) {
         emojiP /= Math.max(5, parseInt(`${mapping4}`) / (Math.max(8, parseInt(`${emojiP}`))));
      }
         mapping4 -= 3 & plusF.length;
       let zhengpiano = 0.0;
       let matchesU = 5.0;
      gesturey = activeM.length == 1;
      xvodE |= styleh / (Math.max(activeM.length, 2));
   for (let n = 0; n < 3; n++) {
       let mintegraly: Array<any> = [475, 742];
       let bridgef = 5.0;
       let cornerT = 0;
       let gradler: Map<any, any> = new Map([[String.fromCharCode(100,101,108,116,97,113,95,98,95,56,51,0),784], [String.fromCharCode(112,105,101,99,101,119,105,115,101,95,103,95,55,49,0),840], [String.fromCharCode(119,114,97,112,112,101,114,95,104,95,49,0),170]]);
      for (let q = 0; q < 1; q++) {
         bridgef /= Math.max(parseFloat(`${cornerT & 3}`), 3);
      }
         mintegraly.push(cornerT);
         cornerT |= gradler.size % 3;
       let time_mjW: Array<any> = [String.fromCharCode(100,95,56,57,95,117,99,111,110,115,116,0), String.fromCharCode(121,95,50,52,95,114,101,101,110,116,114,97,110,116,0)];
       let selectionu: Array<any> = [13, 107];
      for (let w = 0; w < 2; w++) {
         cornerT ^= 3 * time_mjW.length;
      }
      if (selectionu.length < mintegraly.length) {
         selectionu = [1];
      }
         cornerT >>= Math.min(4, Math.abs(parseInt(`${bridgef}`) + cornerT));
          let switch_acv = 4;
         gradler.set(`${time_mjW.length}`, 2);
         switch_acv %= Math.max(switch_acv % 1, 5);
         bridgef *= parseFloat(`${selectionu.length}`);
      if (1.29 > (bridgef - parseFloat(`${gradler.size}`)) || 4 > (gradler.size | 5)) {
          let cored = String.fromCharCode(99,104,97,114,108,101,110,95,109,95,51,52,0);
          let bingn = 5.0;
          let long_4M = String.fromCharCode(98,105,116,112,108,97,110,101,95,55,95,55,50,0);
          let stringso = String.fromCharCode(101,114,114,111,114,115,95,112,95,53,53,0);
         gradler.set(`${cored}`, 3);
         cored += `${stringso.length}`;
         bingn -= parseInt(`${bingn}`) + long_4M.length;
         long_4M += `${long_4M.length * parseInt(`${bingn}`)}`;
         stringso += `${(long_4M == String.fromCharCode(88,0) ? long_4M.length : stringso.length)}`;
      }
      for (let t = 0; t < 1; t++) {
          let temperaturef = 0;
          let bellN: Array<any> = [669, 87];
         bridgef /= Math.max(parseFloat(`${temperaturef}`), 5);
         temperaturef &= 1 / (Math.max(10, bellN.length));
         bellN = [bellN.length ^ 3];
      }
         bridgef -= parseFloat(`${time_mjW.length - selectionu.length}`);
      anews7 = !gesturey;
   }
   let projectZ = 8834152 >= xvodE;
   do {
      xvodE -= bridgeS.length;
      if (projectZ) {
         break;
      }
   } while (((5 | xvodE) == 2) && projectZ);
       let alertY = String.fromCharCode(116,107,104,100,95,99,95,57,57,0);
       let heartE = 1.0;
       let rightM = String.fromCharCode(98,111,117,110,99,101,95,110,95,49,57,0);
         alertY = `${2 ^ parseInt(`${heartE}`)}`;
      if (1.97 > (heartE * 3.58) || (heartE * 3.58) > 4.65) {
          let incidentJ = 5;
          let matchs: Map<any, any> = new Map([[String.fromCharCode(100,105,103,105,116,95,117,95,49,49,0),String.fromCharCode(105,110,116,101,102,97,99,101,95,111,95,54,49,0)], [String.fromCharCode(101,95,51,55,95,101,110,99,111,100,101,100,102,114,97,109,101,0),String.fromCharCode(121,95,50,55,95,100,111,119,110,108,111,97,100,97,98,108,101,0)]]);
          let circle_: Map<any, any> = new Map([[String.fromCharCode(99,95,49,50,95,115,117,98,115,101,103,109,101,110,116,0),397], [String.fromCharCode(116,95,54,52,95,116,105,103,103,108,101,0),766], [String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,95,117,95,52,0),652]]);
          let bodanR: Array<any> = [842, 513, 894];
         heartE /= Math.max(5, rightM.length / (Math.max(2, 1)));
         incidentJ %= Math.max(bodanR.length, 5);
         matchs.set(`${circle_.size}`, 2);
         circle_.set(`${circle_.size}`, 2 << (Math.min(3, Math.abs(circle_.size))));
         bodanR = [3 >> (Math.min(2, bodanR.length))];
      }
         heartE -= (String.fromCharCode(49,0) == rightM ? parseInt(`${heartE}`) : rightM.length);
         alertY = `${rightM.length / 3}`;
      if (2.2 < (heartE - alertY.length)) {
         alertY = `${rightM.length}`;
      }
      let group6 = String.fromCharCode(49,105,49,54,119,48,105,0) == alertY;
      do {
          let detailF = String.fromCharCode(118,95,54,56,95,115,117,105,116,97,98,108,101,0);
          let component0 = String.fromCharCode(112,95,50,51,95,116,105,109,101,103,109,0);
          let componentz = String.fromCharCode(100,105,97,109,111,110,100,95,54,95,52,49,0);
          let philippinesU: Map<any, any> = new Map([[String.fromCharCode(122,95,51,50,95,112,114,101,118,105,101,119,112,112,0),351], [String.fromCharCode(99,111,109,112,108,105,97,110,116,95,118,95,49,48,0),975]]);
          let disconnecteda = 4.0;
         alertY = "1";
         detailF = `${parseInt(`${disconnecteda}`)}`;
         component0 += `${detailF.length << (Math.min(3, Math.abs(parseInt(`${disconnecteda}`))))}`;
         componentz += `${philippinesU.size}`;
         philippinesU.set(component0, component0.length);
         if (group6) {
            break;
         }
      } while ((rightM != alertY) && group6);
         rightM += `${rightM.length}`;
      if (alertY.length >= heartE) {
         alertY += `${alertY.length}`;
      }
      if (2 <= (5 - parseInt(`${heartE}`)) || 5 <= (alertY.length - parseInt(`${heartE}`))) {
         heartE += parseInt(`${heartE}`) - rightM.length;
      }
      bridgeS += `${moonR.length / (Math.max(2, 7))}`;
   if (xvodE >= rewindG) {
      rewindG *= 3 & parseInt(`${backwardJ}`);
   }
   for (let s = 0; s < 1; s++) {
      xvodE *= 3 * parseInt(`${backwardJ}`);
   }
      activeM += "3";

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
       let updatesB = String.fromCharCode(105,110,112,117,116,115,95,103,95,57,48,0);
    let chinasameL = 3;
    let playlistY = String.fromCharCode(98,97,115,107,101,116,98,97,108,108,95,119,95,53,48,0);
    let prediction5 = String.fromCharCode(100,101,112,95,105,95,54,0);
    let reportd: Map<any, any> = new Map([[String.fromCharCode(114,95,50,50,95,115,97,100,120,120,0),String.fromCharCode(100,95,50,52,95,112,101,114,109,105,116,116,101,100,0)], [String.fromCharCode(99,111,110,99,117,114,114,101,110,116,95,115,95,51,57,0),String.fromCharCode(110,95,49,55,95,108,101,110,0)]]);
    let turnf = String.fromCharCode(122,95,55,56,95,118,97,108,105,100,97,116,105,111,110,115,0);
    let type_l8: Array<any> = [String.fromCharCode(103,95,55,95,97,117,116,104,111,114,105,122,97,116,105,111,110,115,0), String.fromCharCode(115,116,114,108,101,110,95,118,95,52,50,0), String.fromCharCode(109,105,99,95,119,95,53,55,0)];
    let memberN = String.fromCharCode(118,95,50,54,95,114,101,110,100,101,114,97,98,108,101,0);
    let grayO = 2.0;
    let zhubo2 = 2.0;
    let sigmobM = String.fromCharCode(111,95,50,56,95,111,110,116,97,99,116,115,0);
    let livej = 4.0;
       let crossn = String.fromCharCode(100,118,98,115,117,98,95,104,95,50,49,0);
       let episodesV = 5.0;
      let minivodY = String.fromCharCode(56,121,99,102,104,101,0) == crossn;
      do {
          let f_countS = false;
          let activeR = 1.0;
         crossn += "2";
         f_countS = !f_countS;
         activeR -= parseFloat(`${2 % (Math.max(parseInt(`${activeR}`), 9))}`);
         if (minivodY) {
            break;
         }
      } while ((crossn.length < 5) && minivodY);
         episodesV += parseInt(`${episodesV}`);
      while (episodesV > 5.10) {
          let clearp = String.fromCharCode(119,95,51,55,95,97,103,101,110,116,0);
         crossn = `${2 % (Math.max(7, crossn.length))}`;
         clearp += `${clearp.length & clearp.length}`;
         break;
      }
      for (let f = 0; f < 2; f++) {
         episodesV /= Math.max(3 % (Math.max(10, parseInt(`${episodesV}`))), 3);
      }
       let regeng3: Array<any> = [String.fromCharCode(115,95,56,53,95,117,110,116,114,117,115,116,101,100,0), String.fromCharCode(114,97,109,112,95,105,95,49,0), String.fromCharCode(112,111,105,110,116,111,99,116,95,114,95,54,55,0)];
       let user0: Array<any> = [String.fromCharCode(109,95,50,52,95,108,101,114,116,0), String.fromCharCode(118,95,57,49,95,101,116,105,109,101,0), String.fromCharCode(100,101,116,97,105,108,101,100,95,56,95,54,56,0)];
      let overp = String.fromCharCode(114,117,121,109,51,101,0) == crossn;
      do {
          let privacyN = String.fromCharCode(102,114,111,109,98,121,116,101,115,95,57,95,51,54,0);
          let o_viewz = String.fromCharCode(113,95,56,95,102,105,108,101,116,105,109,101,0);
          let minimizeE = String.fromCharCode(98,98,111,120,95,104,95,53,51,0);
         crossn = "3";
         privacyN += `${o_viewz.length * minimizeE.length}`;
         o_viewz = `${minimizeE.length << (Math.min(privacyN.length, 1))}`;
         if (overp) {
            break;
         }
      } while (((crossn.length ^ user0.length) > 1 && (crossn.length ^ user0.length) > 1) && overp);
      prediction5 += `${(playlistY == String.fromCharCode(74,0) ? parseInt(`${episodesV}`) : playlistY.length)}`;
      chinasameL /= Math.max(5, chinasameL);
   if (turnf.length == memberN.length) {
      turnf += `${reportd.size}`;
   }
   while (!memberN.endsWith(`${grayO}`)) {
      memberN += `${parseInt(`${zhubo2}`) >> (Math.min(memberN.length, 1))}`;
      break;
   }
   let saveq = 8026071 <= prediction5.length;
   do {
       let roomy = String.fromCharCode(116,95,48,95,115,110,97,112,112,121,0);
       let topic3: Array<any> = [71, 768, 562];
       let clockE = true;
      let closeR = clockE ? !clockE : clockE;
      do {
          let righti: Map<any, any> = new Map([[String.fromCharCode(99,95,54,48,95,105,110,100,105,114,101,99,116,0),false ], [String.fromCharCode(117,118,108,99,95,108,95,54,48,0),true ]]);
          let headerO: Array<any> = [775, 407, 308];
          let dangero = String.fromCharCode(112,114,101,115,101,100,95,108,95,53,53,0);
          let minik = 4.0;
          let drag7 = 5.0;
         clockE = !clockE;
         righti.set(`${headerO.length}`, 1);
         headerO.push(headerO.length);
         dangero = "1";
         minik -= 1;
         drag7 /= Math.max(2, 3);
         if (closeR) {
            break;
         }
      } while (closeR && (clockE || 2 == (topic3.length | 3)));
      for (let b = 0; b < 1; b++) {
          let zhuboA = String.fromCharCode(99,97,112,105,116,97,108,105,122,97,116,105,111,110,95,114,95,55,49,0);
          let temperatureD = 1.0;
          let mathA: Map<any, any> = new Map([[String.fromCharCode(116,114,105,110,103,95,122,95,50,57,0),793], [String.fromCharCode(112,114,117,110,105,110,103,95,112,95,52,53,0),863]]);
         roomy += `${1 * mathA.size}`;
         zhuboA = `${parseInt(`${temperatureD}`)}`;
         temperatureD -= parseFloat(`${zhuboA.length << (Math.min(Math.abs(2), 4))}`);
         mathA = new Map([[zhuboA, 1]]);
      }
         topic3.push(((clockE ? 3 : 2) ^ topic3.length));
       let layoutT: Array<any> = [336, 771, 533];
       let downloadU: Array<any> = [931, 352];
      let ewardedS = 8163401 <= roomy.length;
      do {
         roomy += `${((clockE ? 1 : 3) - roomy.length)}`;
         if (ewardedS) {
            break;
         }
      } while (ewardedS && (downloadU.length > roomy.length));
         topic3 = [topic3.length];
       let baiduQ = String.fromCharCode(104,100,115,112,95,48,95,54,48,0);
         downloadU.push(roomy.length / (Math.max(1, 3)));
      let membershipp = downloadU.length >= 6997237;
      do {
         downloadU = [downloadU.length % 2];
         if (membershipp) {
            break;
         }
      } while (membershipp && ((3 >> (Math.min(3, downloadU.length))) < 3));
      prediction5 += `${memberN.length}`;
      if (saveq) {
         break;
      }
   } while ((updatesB != String.fromCharCode(119,0)) && saveq);

        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

      turnf += "2";
   let catalogA = 7176947 >= sigmobM.length;
   do {
      sigmobM += `${prediction5.length}`;
      if (catalogA) {
         break;
      }
   } while ((!turnf.startsWith(sigmobM)) && catalogA);
       let activitys = 2.0;
       let side5 = 4;
       let auto_6O = String.fromCharCode(116,95,52,95,116,119,111,115,0);
         activitys -= parseFloat(`${side5}`);
      if (!auto_6O.startsWith(`${side5}`)) {
          let kickl = String.fromCharCode(99,114,111,112,112,101,100,95,103,95,53,50,0);
          let zhengpiani = 5.0;
         side5 &= 3 / (Math.max(5, parseInt(`${activitys}`)));
         kickl = `${(String.fromCharCode(49,0) == kickl ? parseInt(`${zhengpiani}`) : kickl.length)}`;
         zhengpiani *= parseFloat(`${kickl.length}`);
      }
         side5 <<= Math.min(2, Math.abs(auto_6O.length & 2));
      let videot = activitys <= 6247558.0;
      do {
         activitys *= (parseFloat(`${String.fromCharCode(103,0) == auto_6O ? auto_6O.length : side5}`));
         if (videot) {
            break;
         }
      } while (videot && (3 >= (auto_6O.length % (Math.max(3, 9))) || (auto_6O.length + parseInt(`${activitys}`)) >= 3));
      while (5.89 >= (activitys + 4.11)) {
          let manifestq = 4.0;
          let bannerd = String.fromCharCode(113,95,52,55,95,97,108,112,104,97,101,120,116,114,97,99,116,0);
          let playercommonn = 1.0;
          let apple8 = 1;
          let temperatureDj = false;
         activitys -= parseFloat(`${2 | parseInt(`${playercommonn}`)}`);
         manifestq -= parseFloat(`${parseInt(`${manifestq}`) * 2}`);
         bannerd += `${apple8 + 1}`;
         playercommonn *= parseFloat(`${3 | parseInt(`${manifestq}`)}`);
         apple8 <<= Math.min(bannerd.length, 4);
         temperatureDj = String.fromCharCode(95,0) == bannerd;
         break;
      }
          let hoverB: Array<any> = [90, 684];
          let small9: Map<any, any> = new Map([[String.fromCharCode(99,95,57,51,95,100,114,97,119,97,98,108,101,115,0),895], [String.fromCharCode(98,95,51,48,95,102,114,97,109,101,112,97,99,107,0),283], [String.fromCharCode(102,95,52,51,95,114,116,102,0),791]]);
         side5 |= hoverB.length / (Math.max(auto_6O.length, 9));
         hoverB = [small9.size * 2];
         small9 = new Map([[`${small9.size}`, small9.size >> (Math.min(Math.abs(small9.size), 2))]]);
      for (let a = 0; a < 1; a++) {
         side5 ^= side5;
      }
          let recommendationJ = 4.0;
          let white8: Array<any> = [37, 319, 605];
          let module7 = String.fromCharCode(98,117,102,102,101,114,115,95,108,95,53,0);
         side5 <<= Math.min(4, Math.abs(2));
         recommendationJ += parseFloat(`${3}`);
         white8.push(parseInt(`${recommendationJ}`) << (Math.min(5, Math.abs(3))));
         module7 = `${1 % (Math.max(3, module7.length))}`;
      if (4 > (auto_6O.length + 5) && 3 > (side5 + 5)) {
         side5 >>= Math.min(Math.abs(auto_6O.length / (Math.max(2, 3))), 4);
      }
      turnf = `${2 | prediction5.length}`;
   for (let y = 0; y < 1; y++) {
      memberN = `${memberN.length}`;
   }
   while (!sigmobM.endsWith(`${type_l8.length}`)) {
      type_l8.push(2);
      break;
   }

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });

   for (let h = 0; h < 3; h++) {
      playlistY += `${prediction5.length}`;
   }
   for (let a = 0; a < 1; a++) {
       let upgradeg = 0.0;
       let product4 = false;
       let traminip: Array<any> = [128, 351, 540];
       let controlf = 4.0;
         upgradeg -= (parseFloat(`${traminip.length + (product4 ? 5 : 1)}`));
         upgradeg *= (parseFloat(`${(product4 ? 3 : 1) - parseInt(`${upgradeg}`)}`));
      if (4 == traminip.length) {
         product4 = traminip.length > 68;
      }
      if (traminip.length > 1) {
         controlf *= 3 / (Math.max(4, traminip.length));
      }
      for (let j = 0; j < 1; j++) {
          let style1 = false;
          let style_ = String.fromCharCode(98,95,56,48,95,115,116,97,116,117,115,101,115,0);
          let activem = 2.0;
         controlf *= ((style1 ? 5 : 2) << (Math.min(Math.abs(parseInt(`${controlf}`)), 1)));
         style1 = !style_.endsWith(`${activem}`);
         style_ += `${parseInt(`${activem}`)}`;
      }
      while (4.7 < (3.15 * upgradeg)) {
          let mbnativeG = String.fromCharCode(102,108,97,99,100,115,112,95,106,95,50,48,0);
          let homet = String.fromCharCode(121,95,50,54,95,115,112,108,105,116,116,101,114,0);
         upgradeg += parseFloat(`${1}`);
         mbnativeG = `${(String.fromCharCode(48,0) == homet ? homet.length : mbnativeG.length)}`;
         break;
      }
      if (1 == (parseInt(`${controlf}`) + traminip.length)) {
          let gpayx = 1;
          let tickedD = String.fromCharCode(116,103,115,95,116,95,56,51,0);
         controlf -= parseInt(`${controlf}`) + gpayx;
         gpayx |= (String.fromCharCode(55,0) == tickedD ? tickedD.length : tickedD.length);
      }
          let telegrami = 5.0;
         product4 = 51.16 > controlf || 51.16 > telegrami;
      if ((upgradeg + controlf) >= 4.89 && 3.93 >= (controlf + 4.89)) {
          let tickm = 5.0;
          let hoverO: Array<any> = [958, 947, 289];
         upgradeg *= parseFloat(`${2 | parseInt(`${tickm}`)}`);
         tickm -= parseFloat(`${hoverO.length | 3}`);
         hoverO.push(3);
      }
       let trophy_ = String.fromCharCode(102,95,57,49,95,105,110,116,0);
       let awayZ = String.fromCharCode(119,95,51,55,95,97,116,116,97,99,107,0);
          let username0: Map<any, any> = new Map([[String.fromCharCode(113,95,49,55,95,105,110,118,105,116,97,116,105,111,110,115,0),279], [String.fromCharCode(122,95,56,50,95,115,104,114,117,110,107,0),562], [String.fromCharCode(99,111,109,112,111,115,105,116,105,111,110,95,116,95,50,48,0),2]]);
          let iconb = String.fromCharCode(102,95,55,50,95,112,114,101,99,97,108,99,117,108,97,116,101,0);
          let circlex = String.fromCharCode(116,101,97,114,95,114,95,55,49,0);
         upgradeg -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${controlf}`)), 1))}`);
         username0 = new Map([[`${username0.size}`, username0.size]]);
         iconb = `${circlex.length}`;
         circlex = `${circlex.length}`;
       let moviest = 4.0;
      playlistY = `${((product4 ? 4 : 3) % (Math.max(turnf.length, 4)))}`;
   }
       let taiwanE = 1;
       let tumbnails = String.fromCharCode(115,97,102,97,114,121,95,97,95,50,52,0);
       let penaltyl = String.fromCharCode(108,111,99,107,95,49,95,56,56,0);
         tumbnails = `${penaltyl.length}`;
         tumbnails = `${taiwanE}`;
      let sinab = tumbnails.length >= 8983343;
      do {
         tumbnails += `${taiwanE}`;
         if (sinab) {
            break;
         }
      } while (((taiwanE / (Math.max(tumbnails.length, 4))) == 2 && (2 / (Math.max(2, tumbnails.length))) == 4) && sinab);
         taiwanE %= Math.max(3, 3);
      if (penaltyl.startsWith(`${taiwanE}`)) {
          let mbnativeQ = String.fromCharCode(114,95,50,54,95,116,116,97,99,104,109,101,110,116,0);
          let hejiv = String.fromCharCode(111,112,116,105,111,110,95,104,95,55,55,0);
          let pageJ = String.fromCharCode(114,105,110,103,98,117,102,102,101,114,95,117,95,51,52,0);
         taiwanE -= tumbnails.length % 2;
         mbnativeQ = `${pageJ.length / 3}`;
         hejiv += `${mbnativeQ.length | 2}`;
         pageJ = `${3 ^ hejiv.length}`;
      }
         penaltyl += `${taiwanE}`;
       let progressv: Map<any, any> = new Map([[String.fromCharCode(108,111,110,95,52,95,50,54,0),false ], [String.fromCharCode(105,95,57,55,95,112,97,110,101,115,0),true ], [String.fromCharCode(108,111,111,112,115,95,106,95,57,48,0),false ]]);
       let logop: Map<any, any> = new Map([[String.fromCharCode(100,95,49,56,95,119,114,105,116,101,99,98,0),String.fromCharCode(100,99,115,116,114,95,119,95,49,55,0)], [String.fromCharCode(115,117,109,100,105,102,102,95,116,95,54,49,0),String.fromCharCode(113,95,50,55,95,115,101,101,110,0)], [String.fromCharCode(103,101,111,107,101,121,95,101,95,56,0),String.fromCharCode(98,95,51,54,95,112,114,101,116,99,104,0)]]);
         progressv.set(tumbnails, 2);
      if ((2 >> (Math.min(1, Math.abs(taiwanE)))) == 3 && 3 == (2 >> (Math.min(4, Math.abs(taiwanE))))) {
          let serviceK: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,108,95,55,95,52,50,0),String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,95,119,95,49,54,0)], [String.fromCharCode(115,116,114,116,111,107,95,122,95,56,0),String.fromCharCode(114,101,103,100,101,102,95,103,95,51,50,0)], [String.fromCharCode(109,95,49,53,95,115,116,97,99,107,101,100,0),String.fromCharCode(99,111,100,101,114,115,95,107,95,50,0)]]);
         logop = new Map([[`${logop.size}`, penaltyl.length]]);
         serviceK = new Map([[`${serviceK.size}`, 2 & serviceK.size]]);
      }
      reportd = new Map([[`${reportd.size}`, reportd.size + 3]]);
   let subsd = 9215985 <= chinasameL;
   do {
       let mintegral6 = false;
       let connectionv = 3.0;
       let kick0 = 5.0;
         connectionv -= parseInt(`${connectionv}`) % 3;
       let p_playerO: Map<any, any> = new Map([[String.fromCharCode(116,95,50,95,109,101,97,115,117,114,101,100,0),912], [String.fromCharCode(119,112,101,110,100,105,110,103,95,114,95,51,50,0),369], [String.fromCharCode(101,110,115,117,114,101,95,50,95,49,51,0),708]]);
       let moreO: Map<any, any> = new Map([[String.fromCharCode(116,114,101,101,95,117,95,50,56,0),183], [String.fromCharCode(115,117,98,116,101,114,109,95,119,95,55,55,0),174], [String.fromCharCode(100,95,55,52,95,114,116,112,112,108,97,121,0),577]]);
          let minimizef = String.fromCharCode(117,95,50,95,103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,0);
          let close5 = String.fromCharCode(114,95,52,53,95,114,103,98,116,111,0);
         mintegral6 = 33 < minimizef.length || String.fromCharCode(115,0) == close5;
       let fullr: Array<any> = [663, 882, 256];
      for (let q = 0; q < 2; q++) {
         fullr = [parseInt(`${kick0}`)];
      }
         fullr.push(parseInt(`${connectionv}`));
         mintegral6 = fullr.includes(kick0);
      if (4 > (parseInt(`${connectionv}`) / (Math.max(10, p_playerO.size))) && 3 > (p_playerO.size * 4)) {
          let sort8 = String.fromCharCode(100,97,114,119,105,110,95,50,95,50,50,0);
         connectionv *= sort8.length & 3;
      }
          let materialv = 1.0;
          let championj: Array<any> = [537, 791, 339];
         kick0 *= parseFloat(`${2 << (Math.min(3, Math.abs(p_playerO.size)))}`);
         materialv /= Math.max(3, parseFloat(`${parseInt(`${materialv}`)}`));
         championj = [1];
      chinasameL <<= Math.min(Math.abs((String.fromCharCode(105,0) == playlistY ? type_l8.length : playlistY.length)), 4);
      if (subsd) {
         break;
      }
   } while (subsd && (!playlistY.startsWith(`${chinasameL}`)));
   if (3 == updatesB.length || playlistY == String.fromCharCode(73,0)) {
       let ewarded4 = true;
       let arrowG = 2.0;
       let hongkongd = String.fromCharCode(116,104,114,101,115,104,95,114,95,57,51,0);
       let untickl = 0.0;
         ewarded4 = arrowG > 1.37 && ewarded4;
      let anythinkk = hongkongd.length >= 6142571;
      do {
         hongkongd = `${1 / (Math.max(9, parseInt(`${arrowG}`)))}`;
         if (anythinkk) {
            break;
         }
      } while ((hongkongd.length > parseInt(`${arrowG}`)) && anythinkk);
      if (4.41 < (arrowG + untickl)) {
         untickl /= Math.max(parseFloat(`${parseInt(`${arrowG}`)}`), 1);
      }
      for (let r = 0; r < 2; r++) {
          let singaporeX = 4;
          let commentx = String.fromCharCode(118,95,51,56,95,111,112,101,114,97,116,111,114,0);
         arrowG += parseInt(`${untickl}`);
         singaporeX -= singaporeX / (Math.max(commentx.length, 4));
         commentx += `${singaporeX << (Math.min(commentx.length, 1))}`;
      }
         untickl *= (parseFloat(`${String.fromCharCode(121,0) == hongkongd ? parseInt(`${arrowG}`) : hongkongd.length}`));
         ewarded4 = 71.1 > untickl;
         hongkongd = `${hongkongd.length & parseInt(`${untickl}`)}`;
         hongkongd += `${parseInt(`${untickl}`)}`;
      updatesB += `${1 & playlistY.length}`;
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
