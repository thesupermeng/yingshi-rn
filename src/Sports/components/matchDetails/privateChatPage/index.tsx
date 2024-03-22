import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import createStyles from "./mayi_iconarrowrightwhite";
import { useAppDispatch, useSelector } from "@hooks/mayi_redirect";
import { CPressable, CTextInput } from "../../../../components/atoms";
import SendIcon from '@static/images/mappingBasketballplayerplaceholderApplication.svg';
import SendFillIcon from '@static/images/sendMbbidString.svg';
import { COMMENT_MAX_INPUT } from "@utility/mayi_middleware_apps";
import { mayi_Background } from "@type/mayi_green";
import { mayi_SportHalffieldimage } from "@redux/reducers/mayi_yellow_gemfile";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux/actions/mayi_gpay";
import { mayi_LineShare } from "../../../types/mayi_homeinactive";
import { useTheme } from "@react-navigation/native";
import { Avatar } from "@rneui/base";
import { mayi_Values, mayi_TypeSheet } from "@type/mayi_iconedit_tail";
import { debounce } from "lodash";
import { UnreadCard } from "../../../../components/chat/mayi_predictionbannershared";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";

type mayi_GoogleViews = {
    matchID: string,
    streamer: mayi_LineShare,
    sportType: string,
    onInputFocus?: (isFocus: boolean) => void,
}

const PrivateChatPage = ({
    matchID,
    streamer,
    sportType,
    onInputFocus,
}: mayi_GoogleViews) => {
    const PIN_YIN_ACCEPTED = 20;

    const { colors } = useTheme();
    const styles = useMemo(() => createStyles({ colors }), []);

    const chatState = useSelector<mayi_SportHalffieldimage>('chatReducer');
    const userState = useSelector<mayi_Baseline>('userReducer');
    const [comment, setComment] = useState('');
    const [historyChat, sethistoryChat] = useState<mayi_Values[]>([]);
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<mayi_Values> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = mayi_Gift.isLogin(userState.user);

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
       let awayteamfieldS = String.fromCharCode(105,110,100,105,99,97,116,105,111,110,95,106,95,56,53,0);
    let eabafadfadddbafeddddeeefeaaft = 4.0;
    let vertical2 = 5.0;
    let libhermesP = String.fromCharCode(100,95,56,56,95,122,111,110,101,0);
    let phoneM = String.fromCharCode(105,99,111,110,105,99,95,111,95,50,54,0);
    let configureb: Map<any, any> = new Map([[String.fromCharCode(100,101,115,107,116,111,112,95,108,95,49,49,0),314], [String.fromCharCode(118,105,100,101,111,100,115,112,95,105,95,51,53,0),541]]);
    let currentq: Array<any> = [237, 605, 550];
    let turndown6 = String.fromCharCode(112,114,105,118,97,99,121,95,101,95,49,51,0);
    let g_centerG = String.fromCharCode(114,95,49,52,95,112,105,99,107,105,110,116,101,114,0);
    let morev = 2;
    let sharedo = 0.0;
    let z_centerG = String.fromCharCode(105,115,119,104,105,116,101,115,112,97,99,101,95,100,95,50,57,0);
       let history_ = 2.0;
       let airbnbstar2 = String.fromCharCode(111,119,110,101,114,115,104,105,112,95,106,95,49,49,0);
       let malaysiaP = String.fromCharCode(100,95,52,48,95,99,111,118,101,114,115,0);
       let launcher4 = String.fromCharCode(109,98,101,100,116,108,115,95,110,95,53,49,0);
       let iconsubssuccessK = String.fromCharCode(102,111,114,109,97,116,116,101,114,115,95,109,95,57,56,0);
          let iconmoreK = 0.0;
         launcher4 = `${2 - parseInt(`${iconmoreK}`)}`;
      while (airbnbstar2.startsWith(`${iconsubssuccessK.length}`)) {
          let mbjscommonT: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,114,101,108,97,116,105,111,110,95,119,95,49,54,0),true ], [String.fromCharCode(97,117,103,109,101,110,116,95,121,95,53,50,0),false ], [String.fromCharCode(122,95,49,50,95,101,110,103,105,110,101,115,0),true ]]);
          let slideru = 4;
          let plashw: Map<any, any> = new Map([[String.fromCharCode(117,95,48,95,101,120,112,111,114,116,0),53], [String.fromCharCode(118,95,51,95,101,120,112,111,110,101,110,116,0),60]]);
          let clockd: Array<any> = [335, 335, 408];
          let routerc = String.fromCharCode(117,95,53,50,95,107,98,100,119,105,110,0);
         airbnbstar2 = `${plashw.size}`;
         mbjscommonT = new Map([[`${clockd.length}`, (String.fromCharCode(85,0) == routerc ? clockd.length : routerc.length)]]);
         slideru ^= slideru / (Math.max(clockd.length, 4));
         plashw.set(routerc, 1);
         break;
      }
      while (5 == airbnbstar2.length && iconsubssuccessK != String.fromCharCode(88,0)) {
         airbnbstar2 = `${airbnbstar2.length}`;
         break;
      }
      let handlerO = 5214636 >= launcher4.length;
      do {
          let canvasD = 5;
          let linkX = 4;
          let previewN = String.fromCharCode(102,95,56,95,104,117,100,0);
          let rulesk: Map<any, any> = new Map([[String.fromCharCode(116,95,52,51,95,112,111,115,115,105,98,108,101,0),728], [String.fromCharCode(116,95,56,51,95,97,116,116,97,99,104,0),897]]);
         launcher4 += `${(airbnbstar2 == String.fromCharCode(80,0) ? previewN.length : airbnbstar2.length)}`;
         canvasD -= linkX % (Math.max(canvasD, 9));
         linkX -= linkX << (Math.min(Math.abs(rulesk.size), 1));
         previewN = "3";
         rulesk = new Map([[`${rulesk.size}`, rulesk.size]]);
         if (handlerO) {
            break;
         }
      } while (((launcher4.length % 1) == 5 && 3 == (launcher4.length * 1)) && handlerO);
          let bootR = String.fromCharCode(112,114,101,102,101,116,99,104,95,111,95,54,52,0);
         launcher4 = `${(malaysiaP == String.fromCharCode(51,0) ? launcher4.length : malaysiaP.length)}`;
         bootR += `${bootR.length + bootR.length}`;
      for (let d = 0; d < 2; d++) {
         malaysiaP += `${parseInt(`${history_}`)}`;
      }
      for (let k = 0; k < 3; k++) {
         iconsubssuccessK = `${(iconsubssuccessK == String.fromCharCode(67,0) ? launcher4.length : iconsubssuccessK.length)}`;
      }
         launcher4 = `${malaysiaP.length}`;
      awayteamfieldS += `${malaysiaP.length}`;
   if (libhermesP.length == 1) {
      eabafadfadddbafeddddeeefeaaft *= (parseFloat(`${String.fromCharCode(116,0) == g_centerG ? configureb.size : g_centerG.length}`));
   }
   while (1.72 <= vertical2) {
      vertical2 /= Math.max(parseFloat(`${configureb.size}`), 2);
      break;
   }

        const histories = chatState.privateRoomHistory?.filter(e => e.roomId === `private:${matchID}` && e.userId === chatState.userId);

   let filedg = awayteamfieldS == String.fromCharCode(100,108,120,111,55,54,102,122,114,50,0);
   do {
      awayteamfieldS += `${currentq.length & 1}`;
      if (filedg) {
         break;
      }
   } while ((2 == (2 + awayteamfieldS.length) && 4 == (2 + awayteamfieldS.length)) && filedg);
      libhermesP += `${parseInt(`${vertical2}`) & currentq.length}`;
       let roomQ = 4.0;
       let placeholderc = String.fromCharCode(114,116,112,115,101,110,100,101,114,95,111,95,49,49,0);
       let pushk = false;
      if (placeholderc.length > 2) {
         placeholderc = "1";
      }
       let audienceE = String.fromCharCode(112,95,52,49,95,99,111,110,103,101,115,116,105,111,110,0);
       let minivod1 = String.fromCharCode(99,97,116,99,104,97,98,108,101,95,98,95,55,51,0);
      let imagenetworkerrv = pushk ? !pushk : pushk;
      do {
         pushk = (((!pushk ? 64 : placeholderc.length) % (Math.max(6, placeholderc.length))) >= 64);
         if (imagenetworkerrv) {
            break;
         }
      } while (imagenetworkerrv && (4 < placeholderc.length && !pushk));
          let privilegez = 3;
         roomQ += parseFloat(`${1 + parseInt(`${roomQ}`)}`);
         privilegez >>= Math.min(Math.abs(2), 5);
      if (minivod1.length >= parseInt(`${roomQ}`)) {
         minivod1 += "1";
      }
          let short_tdW = 0;
          let roundv = String.fromCharCode(109,121,114,110,100,95,109,95,57,53,0);
         minivod1 += "2";
         short_tdW >>= Math.min(5, Math.abs((roundv == String.fromCharCode(78,0) ? roundv.length : short_tdW)));
      for (let u = 0; u < 3; u++) {
          let flyern = String.fromCharCode(98,95,54,55,95,100,105,115,99,111,114,100,0);
          let buffer5 = 5;
          let exampleimageh = 3.0;
          let y_position3 = true;
         audienceE += `${((y_position3 ? 2 : 4) / (Math.max(parseInt(`${exampleimageh}`), 1)))}`;
         flyern = `${buffer5 - 1}`;
         buffer5 >>= Math.min(1, Math.abs(buffer5));
         exampleimageh /= Math.max(buffer5, 3);
         y_position3 = flyern == String.fromCharCode(76,0) || 84 == buffer5;
      }
      let libcrashsdks = 8945226 >= audienceE.length;
      do {
          let linkE = String.fromCharCode(104,95,54,52,95,108,105,98,121,117,118,0);
          let predictionb = 5.0;
          let g_imagey = false;
         audienceE += `${(minivod1 == String.fromCharCode(84,0) ? linkE.length : minivod1.length)}`;
         linkE = `${((g_imagey ? 5 : 4) * parseInt(`${predictionb}`))}`;
         predictionb *= (parseFloat(`${(g_imagey ? 5 : 5) / (Math.max(parseInt(`${predictionb}`), 2))}`));
         if (libcrashsdks) {
            break;
         }
      } while (libcrashsdks && (3 <= audienceE.length));
      if (4.87 < (5.33 - roomQ)) {
         pushk = !pushk;
      }
      configureb.set(`${roomQ}`, 3 << (Math.min(Math.abs(parseInt(`${roomQ}`)), 1)));

        if (!histories || histories.length === 0) return;

   for (let h = 0; h < 3; h++) {
      eabafadfadddbafeddddeeefeaaft *= parseFloat(`${g_centerG.length}`);
   }
       let predictionwinh = 5.0;
       let attributedstringG = String.fromCharCode(97,115,115,105,103,110,101,100,95,56,95,51,56,0);
       let codegenM = String.fromCharCode(118,97,108,105,100,97,116,105,111,110,95,106,95,51,54,0);
      while (codegenM.length >= 4 || attributedstringG == String.fromCharCode(51,0)) {
         attributedstringG = `${attributedstringG.length / (Math.max(3, 1))}`;
         break;
      }
          let whistleI = String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,107,95,49,51,0);
          let animationsb: Array<any> = [712, 54, 988];
         codegenM = `${3 * attributedstringG.length}`;
         whistleI += `${animationsb.length}`;
         animationsb = [1 & whistleI.length];
         codegenM += `${codegenM.length}`;
         attributedstringG = `${2 % (Math.max(5, codegenM.length))}`;
      let anythinkM = 8501008 <= codegenM.length;
      do {
         codegenM += `${parseInt(`${predictionwinh}`) - 2}`;
         if (anythinkM) {
            break;
         }
      } while (anythinkM && (codegenM.length > attributedstringG.length));
         predictionwinh += parseInt(`${predictionwinh}`) & 2;
       let event1: Array<any> = [337, 499, 500];
      for (let t = 0; t < 1; t++) {
         codegenM = `${event1.length}`;
      }
      let iconsettingv = attributedstringG.length <= 8171564;
      do {
         attributedstringG = "3";
         if (iconsettingv) {
            break;
         }
      } while (iconsettingv && (attributedstringG.endsWith(`${predictionwinh}`)));
      awayteamfieldS = "1";
   let const_pT = 8665290 <= configureb.size;
   do {
      configureb.set(`${eabafadfadddbafeddddeeefeaaft}`, parseInt(`${eabafadfadddbafeddddeeefeaaft}`) + 2);
      if (const_pT) {
         break;
      }
   } while (((configureb.size % 4) <= 3 || 4 <= (configureb.size - parseInt(`${eabafadfadddbafeddddeeefeaaft}`))) && const_pT);

        if (historyChat.length === 0) {

       let shareds = 5.0;
         shareds *= parseFloat(`${2}`);
         shareds /= Math.max(4, parseFloat(`${parseInt(`${shareds}`)}`));
         shareds /= Math.max(4, parseFloat(`${2}`));
      currentq.push(2);
       let episodesi = String.fromCharCode(103,95,57,51,95,102,97,99,116,111,114,105,122,97,116,105,111,110,0);
         episodesi += `${episodesi.length}`;
         episodesi += `${3 & episodesi.length}`;
      for (let j = 0; j < 2; j++) {
         episodesi += `${episodesi.length}`;
      }
      phoneM = "3";
       let detailsC = String.fromCharCode(113,95,51,49,95,98,105,103,0);
         detailsC = `${detailsC.length}`;
       let nexta = String.fromCharCode(116,95,52,54,95,109,111,118,101,0);
       let textlayoutmanagerj = String.fromCharCode(109,105,110,117,116,101,95,120,95,53,0);
      while (textlayoutmanagerj.length > nexta.length) {
          let greyc = String.fromCharCode(104,95,55,50,95,97,114,98,105,116,101,114,0);
          let bellx = String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,108,95,100,95,52,56,0);
         textlayoutmanagerj += `${1 ^ bellx.length}`;
         greyc += `${greyc.length}`;
         bellx = `${1 >> (Math.min(1, greyc.length))}`;
         break;
      }
      eabafadfadddbafeddddeeefeaaft /= Math.max(3, parseFloat(`${parseInt(`${eabafadfadddbafeddddeeefeaaft}`) << (Math.min(Math.abs(3), 4))}`));
            sethistoryChat([histories[histories.length - 1]]);
        } else {

   while (1 < (2 << (Math.min(2, g_centerG.length))) || 5 < (2 | g_centerG.length)) {
       let iconqqI = 0.0;
       let iconK = 3.0;
         iconK /= Math.max(parseFloat(`${parseInt(`${iconqqI}`) + parseInt(`${iconK}`)}`), 3);
          let libmapbufferjni1: Array<any> = [372, 95];
          let homeicone = 3.0;
         iconqqI -= parseInt(`${iconqqI}`) ^ libmapbufferjni1.length;
         libmapbufferjni1 = [parseInt(`${homeicone}`)];
      let libloggerk = iconqqI >= 7279390.0;
      do {
          let booty = String.fromCharCode(102,95,49,57,95,118,105,115,105,116,111,114,0);
          let heart8 = String.fromCharCode(118,95,52,95,104,119,99,97,112,0);
          let huaweib = 2;
          let subinb = true;
          let quest6 = 0;
         iconqqI /= Math.max(1, huaweib >> (Math.min(Math.abs(3), 1)));
         booty += `${quest6}`;
         heart8 = "1";
         huaweib ^= ((subinb ? 5 : 4) - 3);
         subinb = !subinb;
         quest6 <<= Math.min(2, parseInt(`${Math.abs((quest6 >> (Math.min(2, Math.abs((subinb ? 2 : 3))))))}`));
         if (libloggerk) {
            break;
         }
      } while (libloggerk && (4.10 > (iconqqI / 3.29)));
         iconqqI += parseInt(`${iconK}`);
      while ((iconK + 2.48) > 2.95) {
         iconK += parseFloat(`${parseInt(`${iconK}`) * parseInt(`${iconqqI}`)}`);
         break;
      }
      for (let s = 0; s < 2; s++) {
         iconK += parseFloat(`${parseInt(`${iconK}`) & parseInt(`${iconqqI}`)}`);
      }
      g_centerG = `${configureb.size}`;
      break;
   }
   let stationsO = 5284786 >= turndown6.length;
   do {
       let miniV = String.fromCharCode(97,108,105,103,110,95,113,95,55,55,0);
       let turndownv = String.fromCharCode(97,95,50,48,95,115,117,98,116,114,97,99,116,101,100,0);
       let hongkongK = 3;
       let iconrightorangeS = String.fromCharCode(115,95,49,55,95,115,121,110,99,104,114,111,110,105,122,101,0);
      while (turndownv.endsWith(`${hongkongK}`)) {
         turndownv = `${turndownv.length}`;
         break;
      }
         turndownv = `${iconrightorangeS.length * 1}`;
      while (hongkongK >= 2) {
         turndownv += `${iconrightorangeS.length / (Math.max(miniV.length, 3))}`;
         break;
      }
      while (miniV.length >= 1) {
         miniV = "3";
         break;
      }
      let pagea = 9643142 <= miniV.length;
      do {
         miniV += `${iconrightorangeS.length << (Math.min(Math.abs(3), 4))}`;
         if (pagea) {
            break;
         }
      } while (pagea && (2 == miniV.length));
      if (!miniV.endsWith(`${turndownv.length}`)) {
         turndownv = `${hongkongK % (Math.max(iconrightorangeS.length, 1))}`;
      }
         iconrightorangeS += `${3 - miniV.length}`;
       let subbasketballplayerx = false;
      let scrollviewp = iconrightorangeS.length >= 6477788;
      do {
         iconrightorangeS += `${(String.fromCharCode(87,0) == iconrightorangeS ? iconrightorangeS.length : (subbasketballplayerx ? 5 : 4))}`;
         if (scrollviewp) {
            break;
         }
      } while (scrollviewp && (turndownv.startsWith(iconrightorangeS)));
      let countryb = 9338030 <= iconrightorangeS.length;
      do {
         iconrightorangeS = `${((subbasketballplayerx ? 4 : 5))}`;
         if (countryb) {
            break;
         }
      } while (countryb && (!iconrightorangeS.startsWith(`${hongkongK}`)));
          let vertical1 = 1;
          let link4: Array<any> = [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,115,95,100,95,56,50,0), String.fromCharCode(98,108,111,119,102,105,115,104,95,55,95,54,49,0)];
         hongkongK *= hongkongK + 3;
         vertical1 *= vertical1;
         link4.push(3);
      while (subbasketballplayerx && turndownv.length >= 5) {
         subbasketballplayerx = (miniV.length / (Math.max(turndownv.length, 4))) <= 47;
         break;
      }
      turndown6 += `${phoneM.length}`;
      if (stationsO) {
         break;
      }
   } while (stationsO && (awayteamfieldS != String.fromCharCode(99,0)));
      turndown6 = `${g_centerG.length << (Math.min(Math.abs(1), 1))}`;
            const indexFound = histories.findIndex(e => e.joinDate === historyChat[0].joinDate);

       let typingT = String.fromCharCode(111,95,53,48,95,98,117,105,108,100,101,114,0);
      let unimplementedview6 = typingT == String.fromCharCode(99,48,116,0);
      do {
         typingT += `${1 - typingT.length}`;
         if (unimplementedview6) {
            break;
         }
      } while (unimplementedview6 && (typingT.length > 4));
      if (typingT.length == 3) {
          let pingK = 4.0;
          let iconorientationk: Array<any> = [141, 812];
          let whiteanimationlivem = String.fromCharCode(102,95,51,48,95,116,114,97,110,115,112,111,114,116,115,0);
          let gifgoalbg1 = String.fromCharCode(108,111,103,100,98,95,57,95,53,49,0);
          let themed: Array<any> = [748, 162];
         typingT = `${typingT.length}`;
         pingK -= (parseFloat(`${String.fromCharCode(121,0) == gifgoalbg1 ? whiteanimationlivem.length : gifgoalbg1.length}`));
         iconorientationk = [3];
         whiteanimationlivem = `${iconorientationk.length}`;
         themed = [whiteanimationlivem.length << (Math.min(gifgoalbg1.length, 2))];
      }
          let whistleC: Array<any> = [522, 129, 624];
         typingT += `${2 | whistleC.length}`;
      turndown6 += `${typingT.length}`;
      vertical2 -= parseFloat(`${awayteamfieldS.length / (Math.max(3, g_centerG.length))}`);
   if (g_centerG.length < 5) {
      g_centerG = `${phoneM.length}`;
   }

            if (indexFound === -1 || (indexFound - 1) < 0) return;

      configureb = new Map([[turndown6, 1 - turndown6.length]]);
   while (2 == (morev | phoneM.length)) {
      phoneM += `${parseInt(`${vertical2}`)}`;
      break;
   }
      awayteamfieldS += "2";

            sethistoryChat(prev => [histories[indexFound - 1]].concat(prev));
        }
    }, 500);

    const renderChatGroup = useCallback(({ item }: { item: mayi_TypeSheet }) => {
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

    const renderMessageItem = useCallback(({ item }: { item: mayi_Background }) => {
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
                            : require("@static/images/iconfeedbackIconpointscoreHomeicon.png")
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
                        : require("@static/images/iconfeedbackIconpointscoreHomeicon.png")
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
       let videoZ = String.fromCharCode(120,102,111,114,109,101,100,95,102,95,56,56,0);
    let watchT = String.fromCharCode(109,95,53,51,95,101,120,112,108,111,100,105,110,103,0);
    let clock8 = false;
    let defaultprofilepic9 = false;
    let yellowtored4 = String.fromCharCode(97,108,116,95,55,95,53,57,0);
    let videocommonJ: Array<any> = [344, 449, 861];
    let styleg = 4.0;
    let footballfieldD = String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,97,108,95,121,95,50,51,0);
    let thailandn = String.fromCharCode(99,111,109,112,114,101,115,115,95,121,95,56,56,0);
    let auto_stm = String.fromCharCode(102,95,50,56,95,103,108,111,98,0);
    let klevin6 = 4;
      videoZ = `${thailandn.length / (Math.max(5, auto_stm.length))}`;
      videocommonJ.push(parseInt(`${styleg}`) & 1);
       let predictionbuttonk = 0.0;
       let privacyl: Array<any> = [367, 746, 99];
      while (1.96 == (predictionbuttonk + 3.58)) {
         predictionbuttonk += parseFloat(`${privacyl.length * 1}`);
         break;
      }
         privacyl.push(privacyl.length);
      for (let o = 0; o < 1; o++) {
         privacyl = [parseInt(`${predictionbuttonk}`)];
      }
       let iconshare8: Array<any> = [472, 625, 416];
      while (5 < (3 * iconshare8.length) || 2 < (3 * iconshare8.length)) {
         iconshare8 = [privacyl.length - 3];
         break;
      }
       let update_wC = false;
      videocommonJ.push(2);
      videoZ += "2";
   while (thailandn.length <= 4) {
      watchT += `${((defaultprofilepic9 ? 4 : 4))}`;
      break;
   }

        if (comment.trim().length === 0 || !isCommentValid) return;

       let modulesF: Map<any, any> = new Map([[String.fromCharCode(115,95,52,57,95,118,97,114,116,105,109,101,0),837], [String.fromCharCode(101,95,55,56,95,99,114,111,112,112,105,110,103,0),407], [String.fromCharCode(105,110,115,116,97,108,108,95,118,95,54,0),218]]);
       let emojiheartx = String.fromCharCode(117,110,101,109,112,116,121,95,52,95,57,48,0);
         modulesF.set(`${emojiheartx}`, modulesF.size);
      while (modulesF.size <= emojiheartx.length) {
         emojiheartx += `${emojiheartx.length >> (Math.min(Math.abs(2), 4))}`;
         break;
      }
         modulesF = new Map([[`${modulesF.size}`, modulesF.size]]);
          let libruntimeexecutoro = String.fromCharCode(99,111,110,115,116,95,104,95,50,55,0);
         modulesF = new Map([[`${modulesF.size}`, (emojiheartx == String.fromCharCode(66,0) ? emojiheartx.length : modulesF.size)]]);
         libruntimeexecutoro += `${libruntimeexecutoro.length % (Math.max(libruntimeexecutoro.length, 6))}`;
          let confirmation8 = 3.0;
         modulesF.set(`${confirmation8}`, 1 ^ modulesF.size);
      if (emojiheartx.length <= modulesF.size) {
          let termsO = String.fromCharCode(115,112,101,99,116,114,97,108,95,98,95,57,0);
          let tumbnailR = String.fromCharCode(121,95,50,55,95,102,105,110,116,0);
          let yellowscoreballI = String.fromCharCode(109,95,50,48,95,115,112,108,105,116,116,101,114,0);
          let questY = 1.0;
         emojiheartx += `${yellowscoreballI.length ^ termsO.length}`;
         termsO = `${parseInt(`${questY}`) * 3}`;
         tumbnailR = `${(tumbnailR == String.fromCharCode(54,0) ? tumbnailR.length : parseInt(`${questY}`))}`;
         yellowscoreballI = `${parseInt(`${questY}`)}`;
      }
      videocommonJ.push(emojiheartx.length / (Math.max(3, 5)));
      thailandn += "1";
   for (let r = 0; r < 1; r++) {
      defaultprofilepic9 = !thailandn.startsWith(`${clock8}`);
   }
   while (2 < (videoZ.length | 5) && 5 < (videocommonJ.length | videoZ.length)) {
      videoZ = `${2 | watchT.length}`;
      break;
   }
       let half1: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,105,95,120,95,57,50,0),254], [String.fromCharCode(103,95,51,51,95,100,105,103,101,115,116,0),638]]);
       let field0 = 4.0;
      for (let k = 0; k < 3; k++) {
          let iconarrowrightwhiten = String.fromCharCode(108,95,55,49,95,102,108,111,97,116,115,0);
         field0 += parseFloat(`${iconarrowrightwhiten.length}`);
      }
          let gradlewQ = String.fromCharCode(104,95,57,49,95,100,111,110,97,116,105,111,110,0);
          let chartv = 5.0;
          let agreementL = String.fromCharCode(119,95,57,55,95,102,108,116,112,0);
         field0 *= parseFloat(`${parseInt(`${chartv}`) + 3}`);
         gradlewQ = `${agreementL.length + 1}`;
         chartv -= gradlewQ.length;
         agreementL = `${agreementL.length}`;
       let closeT = 5.0;
       let emoji4 = 2.0;
      if ((3.1 - field0) == 3.98 || (closeT / (Math.max(3.1, 1))) == 4.87) {
          let modalK = String.fromCharCode(109,95,54,50,95,97,119,97,105,116,0);
          let subsL: Array<any> = [String.fromCharCode(112,114,101,114,101,108,101,97,115,101,95,102,95,55,48,0), String.fromCharCode(100,101,99,98,110,95,120,95,54,49,0)];
         closeT += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${emoji4}`)), 2))}`);
         modalK += `${subsL.length >> (Math.min(Math.abs(1), 4))}`;
         subsL = [subsL.length + 3];
      }
          let stationsR = 0.0;
          let leaguen = String.fromCharCode(112,115,101,117,100,111,99,111,108,111,114,95,116,95,55,56,0);
         emoji4 /= Math.max(2, parseFloat(`${2}`));
         stationsR /= Math.max(parseFloat(`${parseInt(`${stationsR}`)}`), 5);
         leaguen += `${parseInt(`${stationsR}`) / (Math.max(leaguen.length, 6))}`;
         field0 += parseFloat(`${parseInt(`${emoji4}`) / (Math.max(8, parseInt(`${closeT}`)))}`);
      styleg *= half1.size | 1;

        appDispatch(sendChatMessage({
            message: comment,
            isPrivate: true,
        }));

      clock8 = videocommonJ.length == yellowtored4.length;
       let streamingn = 5;
       let gifgoalC = String.fromCharCode(110,101,105,103,104,98,111,117,114,115,95,108,95,52,49,0);
       let hongkongO: Map<any, any> = new Map([[String.fromCharCode(112,95,53,49,95,116,101,108,0),596], [String.fromCharCode(120,95,52,48,95,112,114,105,118,97,99,121,0),378], [String.fromCharCode(105,95,50,49,95,115,117,98,115,101,113,117,101,110,99,101,0),448]]);
      for (let o = 0; o < 3; o++) {
          let homeactiveg = String.fromCharCode(114,101,119,114,105,116,116,101,110,95,57,95,49,57,0);
         streamingn ^= gifgoalC.length;
         homeactiveg += `${2 >> (Math.min(2, homeactiveg.length))}`;
      }
      let anytimef = 5998298 >= hongkongO.size;
      do {
          let rocketd = String.fromCharCode(115,95,57,95,114,101,97,100,102,117,108,108,0);
          let promotionx = String.fromCharCode(116,95,51,57,95,108,97,121,101,114,105,110,103,0);
         hongkongO = new Map([[`${hongkongO.size}`, 2]]);
         rocketd += `${promotionx.length}`;
         promotionx += "3";
         if (anytimef) {
            break;
         }
      } while (anytimef && (Array.from(hongkongO.keys()).includes(`${streamingn}`)));
      if (!gifgoalC.endsWith(`${streamingn}`)) {
         streamingn >>= Math.min(Math.abs(2 ^ hongkongO.size), 3);
      }
      for (let l = 0; l < 2; l++) {
         streamingn >>= Math.min(5, Math.abs(hongkongO.size));
      }
      let profileactiveS = 7852273 >= hongkongO.size;
      do {
          let libsentryE = true;
          let taiwan4 = 2;
          let awayiconN = 5.0;
          let darku = String.fromCharCode(119,97,118,101,95,117,95,56,56,0);
          let assistI = 4;
         hongkongO.set(`${assistI}`, assistI);
         libsentryE = !libsentryE;
         taiwan4 |= (taiwan4 >> (Math.min(5, Math.abs((libsentryE ? 2 : 3)))));
         awayiconN -= parseFloat(`${parseInt(`${awayiconN}`) % 2}`);
         darku = `${(String.fromCharCode(81,0) == darku ? parseInt(`${awayiconN}`) : darku.length)}`;
         if (profileactiveS) {
            break;
         }
      } while ((streamingn <= 3) && profileactiveS);
         gifgoalC += `${streamingn}`;
         gifgoalC = "1";
      if (5 == (streamingn % 2)) {
         streamingn |= (String.fromCharCode(48,0) == gifgoalC ? gifgoalC.length : hongkongO.size);
      }
       let canceli = 4.0;
      videocommonJ.push(watchT.length);
      defaultprofilepic9 = !yellowtored4.startsWith(`${clock8}`);
   let mimeE = styleg <= 5448074.0;
   do {
      styleg *= 1 ^ videoZ.length;
      if (mimeE) {
         break;
      }
   } while ((2.26 == (styleg + yellowtored4.length) && (yellowtored4.length + styleg) == 2.26) && mimeE);
   let hookn = clock8 ? !clock8 : clock8;
   do {
       let anner4: Array<any> = [229, 576];
       let smallbrightnessX: Map<any, any> = new Map([[String.fromCharCode(120,95,56,95,105,110,115,105,100,101,0),false ], [String.fromCharCode(119,95,54,52,95,103,101,110,102,105,108,101,115,0),false ], [String.fromCharCode(113,95,53,53,95,105,100,120,0),false ]]);
          let balln = 5;
         anner4.push(2 >> (Math.min(3, anner4.length)));
         balln %= Math.max(2, 1);
         anner4 = [anner4.length % (Math.max(7, smallbrightnessX.size))];
      if (4 == (5 * smallbrightnessX.size) || (5 * smallbrightnessX.size) == 2) {
         anner4 = [1 | anner4.length];
      }
         anner4.push(anner4.length);
          let verticalp = String.fromCharCode(121,95,49,50,95,109,97,105,108,99,104,105,109,112,0);
          let statisticsinactiveT = 5.0;
         anner4.push(smallbrightnessX.size ^ anner4.length);
         verticalp = `${verticalp.length}`;
         statisticsinactiveT -= parseFloat(`${verticalp.length ^ 3}`);
      for (let p = 0; p < 2; p++) {
          let holderK = 5;
          let elementsq = 4;
          let libnmsA = 3.0;
          let fullscreenminH = String.fromCharCode(110,101,97,114,98,121,95,100,95,57,54,0);
         anner4.push(3 ^ fullscreenminH.length);
         holderK |= 2 & elementsq;
         elementsq ^= holderK | 1;
         libnmsA += parseFloat(`${parseInt(`${libnmsA}`) * holderK}`);
         fullscreenminH += `${holderK * elementsq}`;
      }
      clock8 = thailandn.length >= 80;
      if (hookn) {
         break;
      }
   } while (hookn && (5 == yellowtored4.length || !clock8));

        setComment('');

   let largesound1 = footballfieldD == String.fromCharCode(103,112,104,104,55,50,54,0);
   do {
       let nalyticsD = String.fromCharCode(102,108,116,117,105,110,116,95,100,95,56,54,0);
      if (nalyticsD != String.fromCharCode(72,0)) {
         nalyticsD += `${nalyticsD.length * 1}`;
      }
      let becomeZ = 5081306 <= nalyticsD.length;
      do {
          let libavcodecj = 2;
          let cornerI = String.fromCharCode(99,111,112,121,116,111,95,50,95,53,49,0);
          let libavutilh = 5.0;
          let bodanE = String.fromCharCode(121,95,57,48,95,108,97,98,101,108,101,100,0);
          let context3 = 2.0;
         nalyticsD = `${bodanE.length << (Math.min(Math.abs(2), 2))}`;
         libavcodecj <<= Math.min(Math.abs(parseInt(`${libavutilh}`)), 5);
         cornerI = `${cornerI.length + 3}`;
         bodanE += `${cornerI.length & parseInt(`${context3}`)}`;
         context3 -= parseFloat(`${cornerI.length / (Math.max(3, 10))}`);
         if (becomeZ) {
            break;
         }
      } while ((nalyticsD != String.fromCharCode(65,0)) && becomeZ);
      let leakcheckerK = String.fromCharCode(109,120,50,49,99,102,109,0) == nalyticsD;
      do {
         nalyticsD += `${nalyticsD.length}`;
         if (leakcheckerK) {
            break;
         }
      } while (leakcheckerK && (!nalyticsD.endsWith(nalyticsD)));
      footballfieldD += `${(String.fromCharCode(110,0) == nalyticsD ? videoZ.length : nalyticsD.length)}`;
      if (largesound1) {
         break;
      }
   } while (largesound1 && (1.65 > (footballfieldD.length - styleg)));
      defaultprofilepic9 = ((yellowtored4.length | (clock8 ? 6 : yellowtored4.length)) >= 6);
   while (videocommonJ.length <= 5) {
      videoZ = `${(watchT == String.fromCharCode(100,0) ? auto_stm.length : watchT.length)}`;
      break;
   }
      clock8 = yellowtored4.startsWith(`${defaultprofilepic9}`);
   if (3 <= auto_stm.length && videoZ == String.fromCharCode(83,0)) {
      videoZ += "3";
   }
        Keyboard.dismiss();
    }, [isCommentValid, comment]);

    const onUserScroll = () => {
       let rinit_k3T = 0.0;
    let defaultlogoT = 4.0;
    let countryM = true;
    let homeloadingL = String.fromCharCode(115,105,103,105,108,108,95,108,95,57,53,0);
    let projectt = String.fromCharCode(115,95,49,57,95,117,110,112,97,99,107,108,111,0);
    let collection3 = 2.0;
    let iconsettingQ = String.fromCharCode(108,95,49,54,95,99,105,110,97,117,100,105,111,0);
    let actionL = 2.0;
   for (let w = 0; w < 1; w++) {
      projectt += `${(String.fromCharCode(49,0) == iconsettingQ ? iconsettingQ.length : parseInt(`${collection3}`))}`;
   }
   let dangerR = defaultlogoT >= 7038292.0;
   do {
      defaultlogoT /= Math.max(3, parseInt(`${collection3}`));
      if (dangerR) {
         break;
      }
   } while (dangerR && (5.20 == (defaultlogoT / 2.46) && 2.27 == (defaultlogoT + 2.46)));
      rinit_k3T /= Math.max(3, parseFloat(`${2}`));
      rinit_k3T += parseFloat(`${1 & parseInt(`${collection3}`)}`);
   if (!projectt.includes(`${actionL}`)) {
      actionL -= (parseFloat(`${parseInt(`${defaultlogoT}`) - (countryM ? 2 : 2)}`));
   }
   for (let x = 0; x < 3; x++) {
      collection3 *= parseFloat(`${iconsettingQ.length}`);
   }
      actionL -= parseFloat(`${2 << (Math.min(5, homeloadingL.length))}`);
      projectt = "3";
      iconsettingQ = `${parseInt(`${rinit_k3T}`)}`;
   while ((rinit_k3T + parseFloat(`${homeloadingL.length}`)) > 1.80) {
       let router9 = 3.0;
       let episodea = String.fromCharCode(111,95,56,49,95,117,109,98,101,114,0);
       let private_xx4 = String.fromCharCode(105,110,99,114,98,108,111,98,95,113,95,54,57,0);
      let nativej = String.fromCharCode(112,97,100,120,0) == private_xx4;
      do {
          let reminderG = false;
          let baselinea = String.fromCharCode(97,95,52,48,95,97,116,114,97,99,112,108,117,115,0);
          let predictionactiveh = 5.0;
          let circles: Map<any, any> = new Map([[String.fromCharCode(115,95,55,56,95,106,114,110,108,0),String.fromCharCode(101,109,112,116,121,95,103,95,57,53,0)], [String.fromCharCode(99,95,54,95,102,114,97,109,101,114,97,116,101,0),String.fromCharCode(100,105,116,97,98,108,101,95,112,95,51,56,0)]]);
         private_xx4 = `${episodea.length}`;
         reminderG = baselinea == String.fromCharCode(81,0);
         baselinea = "3";
         predictionactiveh += baselinea.length;
         circles.set(`${predictionactiveh}`, circles.size | parseInt(`${predictionactiveh}`));
         if (nativej) {
            break;
         }
      } while ((!private_xx4.endsWith(`${episodea.length}`)) && nativej);
       let selectionc: Map<any, any> = new Map([[String.fromCharCode(116,95,54,57,95,119,101,108,115,101,110,99,100,101,109,111,0),136], [String.fromCharCode(122,95,53,95,115,111,102,97,108,105,122,101,114,0),283], [String.fromCharCode(97,114,103,98,95,104,95,56,49,0),703]]);
          let shootyesgoalU: Array<any> = [330, 921];
          let iconpipexpandK = 5;
          let expandJ = true;
         router9 -= ((expandJ ? 5 : 5) >> (Math.min(Math.abs(parseInt(`${router9}`)), 1)));
         shootyesgoalU = [2 >> (Math.min(3, shootyesgoalU.length))];
         iconpipexpandK += shootyesgoalU.length % (Math.max(3, iconpipexpandK));
         expandJ = iconpipexpandK < 31 || shootyesgoalU.length < 31;
      if (episodea == String.fromCharCode(78,0)) {
         private_xx4 += `${2 & episodea.length}`;
      }
      for (let c = 0; c < 1; c++) {
          let subbasketballplayerp = false;
          let sortC = String.fromCharCode(97,108,108,111,99,99,111,109,109,111,110,95,54,95,52,48,0);
          let internetK = 2.0;
          let libswresamplea: Array<any> = [70, 435, 197];
          let gmailC = String.fromCharCode(102,105,108,101,115,95,117,95,51,0);
         private_xx4 += `${((subbasketballplayerp ? 4 : 4))}`;
         subbasketballplayerp = gmailC == sortC;
         sortC += `${1 | libswresamplea.length}`;
         internetK /= Math.max(1, 3 & sortC.length);
         libswresamplea = [sortC.length];
         gmailC += `${(sortC == String.fromCharCode(98,0) ? parseInt(`${internetK}`) : sortC.length)}`;
      }
         episodea += "2";
         private_xx4 = `${3 << (Math.min(5, private_xx4.length))}`;
      if (selectionc.size >= 1) {
          let cleara = String.fromCharCode(107,95,55,51,95,114,101,99,104,101,99,107,0);
          let dependenciesf = String.fromCharCode(117,99,109,112,95,105,95,53,51,0);
          let imagesR = 0.0;
          let yellowanimationliveg = String.fromCharCode(113,95,57,54,95,97,97,110,100,99,116,116,97,98,0);
          let audienceV = 0.0;
         episodea = `${yellowanimationliveg.length & parseInt(`${imagesR}`)}`;
         cleara = "2";
         dependenciesf += `${1 % (Math.max(10, dependenciesf.length))}`;
         imagesR += parseFloat(`${dependenciesf.length}`);
         yellowanimationliveg = `${(String.fromCharCode(121,0) == cleara ? cleara.length : dependenciesf.length)}`;
         audienceV /= Math.max(parseFloat(`${dependenciesf.length & 1}`), 2);
      }
      for (let z = 0; z < 2; z++) {
         private_xx4 = `${(String.fromCharCode(105,0) == private_xx4 ? private_xx4.length : selectionc.size)}`;
      }
      homeloadingL = `${homeloadingL.length}`;
      break;
   }
   let iconN = 6579549.0 >= defaultlogoT;
   do {
      defaultlogoT += homeloadingL.length >> (Math.min(Math.abs(2), 4));
      if (iconN) {
         break;
      }
   } while (iconN && ((1.91 - defaultlogoT) == 1.47));
      countryM = iconsettingQ.endsWith(`${countryM}`);
      countryM = 70.79 < actionL;
   for (let a = 0; a < 2; a++) {
       let middlewareX: Array<any> = [952, 121];
       let matchdetailbg1 = true;
       let nodet = 2.0;
       let heartF = 0.0;
         nodet /= Math.max(parseFloat(`${parseInt(`${heartF}`)}`), 2);
      while (1.84 <= (3.55 + nodet)) {
         nodet /= Math.max(2, (parseFloat(`${parseInt(`${heartF}`) ^ (matchdetailbg1 ? 3 : 2)}`)));
         break;
      }
          let lightV: Map<any, any> = new Map([[String.fromCharCode(97,95,57,95,104,111,114,105,103,0),String.fromCharCode(110,115,117,105,114,103,98,97,95,54,95,50,57,0)], [String.fromCharCode(112,97,114,109,115,95,51,95,56,53,0),String.fromCharCode(100,95,51,50,95,115,119,115,99,97,108,101,114,101,115,0)]]);
          let launch4 = true;
         nodet -= parseFloat(`${2}`);
         lightV = new Map([[`${lightV.size}`, 1]]);
         launch4 = launch4 || lightV.size == 46;
      let renewV = matchdetailbg1 ? !matchdetailbg1 : matchdetailbg1;
      do {
         matchdetailbg1 = middlewareX.includes(matchdetailbg1);
         if (renewV) {
            break;
         }
      } while (renewV && (2 >= (5 | middlewareX.length) && middlewareX.length >= 5));
      while (middlewareX.includes(heartF)) {
         heartF /= Math.max(3, parseInt(`${nodet}`) | middlewareX.length);
         break;
      }
         matchdetailbg1 = matchdetailbg1 && middlewareX.length >= 85;
      if (1 > middlewareX.length) {
          let indexK: Map<any, any> = new Map([[String.fromCharCode(117,95,52,50,95,100,111,119,110,108,111,97,100,101,100,0),877], [String.fromCharCode(103,108,121,112,104,95,56,95,53,50,0),245], [String.fromCharCode(105,95,53,49,95,99,111,100,105,110,103,116,121,112,101,0),685]]);
          let downloaderU = 4;
         matchdetailbg1 = !matchdetailbg1 || 65.52 == heartF;
         indexK = new Map([[`${indexK.size}`, downloaderU + 3]]);
         downloaderU /= Math.max(5, 2);
      }
         matchdetailbg1 = nodet == heartF;
      if (4.94 == (heartF / 2.57) && heartF == 2.57) {
         matchdetailbg1 = nodet <= 58.16;
      }
      while (!matchdetailbg1 && (heartF - 2.59) == 5.12) {
         heartF -= ((matchdetailbg1 ? 2 : 4) * parseInt(`${nodet}`));
         break;
      }
      if (3.96 >= (heartF / 4.27) || matchdetailbg1) {
          let const_6iU = false;
          let reddownarrowQ = 0.0;
          let emptyJ: Array<any> = [753, 539];
          let zoomK = String.fromCharCode(110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,95,55,95,55,57,0);
          let streamingC: Array<any> = [String.fromCharCode(115,95,52,55,0), String.fromCharCode(104,113,100,115,112,95,56,95,52,53,0)];
         heartF -= ((matchdetailbg1 ? 2 : 3) ^ middlewareX.length);
         const_6iU = streamingC.length == 52;
         reddownarrowQ /= Math.max((parseFloat(`${(const_6iU ? 4 : 1) % (Math.max(emptyJ.length, 5))}`)), 3);
         emptyJ = [(String.fromCharCode(84,0) == zoomK ? emptyJ.length : zoomK.length)];
         streamingC.push(1 % (Math.max(5, streamingC.length)));
      }
      while (2 < (4 ^ middlewareX.length)) {
         matchdetailbg1 = !matchdetailbg1;
         break;
      }
      iconsettingQ += `${parseInt(`${heartF}`) * 2}`;
   }
      iconsettingQ = `${(parseInt(`${actionL}`) ^ (countryM ? 4 : 2))}`;
      defaultlogoT /= Math.max(2, 3 | parseInt(`${actionL}`));
   while ((defaultlogoT / (Math.max(7, actionL))) == 5.28 && 5.28 == (actionL / (Math.max(defaultlogoT, 10)))) {
      defaultlogoT += (parseInt(`${collection3}`) ^ (countryM ? 3 : 5));
      break;
   }
   while (rinit_k3T == collection3) {
      rinit_k3T += parseFloat(`${iconsettingQ.length}`);
      break;
   }
   if (2.80 < (rinit_k3T / 4.68)) {
       let completeq = 4.0;
       let malaysiaM = false;
       let greytickz = 0;
       let s_titleX = 3.0;
      for (let h = 0; h < 2; h++) {
         malaysiaM = 84.54 < completeq || greytickz < 36;
      }
          let scorepopsoundM = 1.0;
          let imagemanager6 = String.fromCharCode(115,95,49,57,95,99,111,110,116,114,111,108,0);
         s_titleX += 3;
         scorepopsoundM += (parseFloat(`${imagemanager6 == String.fromCharCode(102,0) ? imagemanager6.length : parseInt(`${scorepopsoundM}`)}`));
         malaysiaM = greytickz == parseInt(`${completeq}`);
      if ((completeq * s_titleX) <= 4.79) {
         completeq *= (parseInt(`${s_titleX}`) - (malaysiaM ? 1 : 3));
      }
      for (let p = 0; p < 2; p++) {
         completeq *= 1 / (Math.max(greytickz, 1));
      }
         malaysiaM = 87.18 >= s_titleX;
      while (2.86 > s_titleX) {
          let textS = String.fromCharCode(99,97,110,100,108,101,95,102,95,57,56,0);
          let libapminsightbw = 5.0;
          let adultk: Array<any> = [205, 485, 357];
          let foundj = false;
         malaysiaM = libapminsightbw > 42.66;
         textS = `${(String.fromCharCode(111,0) == textS ? textS.length : (foundj ? 2 : 3))}`;
         libapminsightbw -= textS.length / (Math.max(2, 10));
         adultk.push(3);
         break;
      }
         greytickz /= Math.max(4, 2 << (Math.min(Math.abs(greytickz), 3)));
       let vietnamV = String.fromCharCode(119,95,53,95,100,101,115,116,114,117,99,116,105,118,101,0);
       let modal0 = String.fromCharCode(115,117,114,102,95,111,95,50,55,0);
         greytickz &= (parseInt(`${completeq}`) & (malaysiaM ? 1 : 2));
          let libavformatK = 1.0;
          let videovary = String.fromCharCode(110,95,54,51,95,104,101,97,118,121,0);
         greytickz *= (parseInt(`${completeq}`) + (malaysiaM ? 3 : 4));
         libavformatK /= Math.max(1 % (Math.max(4, parseInt(`${libavformatK}`))), 3);
         videovary = `${videovary.length}`;
       let sellmathbackgroundJ = String.fromCharCode(116,119,111,115,116,97,103,101,95,97,95,52,52,0);
       let exampleimage5 = String.fromCharCode(100,95,54,49,95,98,111,111,115,116,101,100,0);
      countryM = !malaysiaM;
   }
   if (2.45 < (collection3 / (Math.max(parseFloat(`${projectt.length}`), 1)))) {
      collection3 += parseFloat(`${projectt.length}`);
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
       let componentU = 3;
    let router9 = String.fromCharCode(100,97,121,95,116,95,57,55,0);
    let downloadw = String.fromCharCode(99,104,101,99,107,109,97,114,107,115,95,110,95,53,57,0);
    let round0 = String.fromCharCode(117,95,57,57,95,109,111,115,116,0);
    let iconfeedbackt = String.fromCharCode(101,120,101,99,117,116,111,114,95,103,95,51,53,0);
    let selectC = String.fromCharCode(97,100,97,112,116,105,118,101,95,117,95,50,0);
    let defaultteamK = String.fromCharCode(109,111,110,111,99,104,114,111,109,101,95,99,95,56,56,0);
    let iconviewergifc = String.fromCharCode(101,99,111,117,110,116,95,117,95,52,54,0);
    let videocommonU = 1;
    let main_jj = String.fromCharCode(112,97,108,98,97,114,115,95,120,95,53,55,0);
       let refreshborderlessH = String.fromCharCode(111,95,51,50,95,119,105,115,101,0);
       let backwhitev = 3.0;
         refreshborderlessH = "2";
         refreshborderlessH = `${refreshborderlessH.length}`;
          let backiconD = 3.0;
          let s_centery = true;
         refreshborderlessH += `${parseInt(`${backiconD}`) - 3}`;
         backiconD /= Math.max((parseFloat(`${(s_centery ? 3 : 3) + 2}`)), 2);
      for (let q = 0; q < 3; q++) {
         refreshborderlessH += `${refreshborderlessH.length}`;
      }
      for (let j = 0; j < 1; j++) {
         backwhitev -= refreshborderlessH.length % 1;
      }
      for (let w = 0; w < 3; w++) {
          let faviconc = 2.0;
         backwhitev -= parseInt(`${faviconc}`);
      }
      router9 += `${(String.fromCharCode(111,0) == round0 ? selectC.length : round0.length)}`;
   while ((componentU - 4) < 5 || 2 < (4 - iconviewergifc.length)) {
      iconviewergifc += "1";
      break;
   }
   for (let j = 0; j < 3; j++) {
      round0 += `${downloadw.length & defaultteamK.length}`;
   }
      router9 += `${defaultteamK.length & iconfeedbackt.length}`;
      componentU += iconfeedbackt.length;
   if (downloadw.length >= round0.length) {
       let resultO: Map<any, any> = new Map([[String.fromCharCode(109,95,49,54,95,102,117,122,122,101,114,0),121], [String.fromCharCode(113,95,52,54,95,101,113,117,97,108,105,122,101,114,0),532]]);
       let taiwanw = false;
       let eighteenp = 3;
       let arrowrightwithtailh = 0.0;
      if (taiwanw) {
         arrowrightwithtailh /= Math.max(parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${arrowrightwithtailh}`)), 1))}`), 3);
      }
      while ((resultO.size + eighteenp) == 2 || (resultO.size + eighteenp) == 2) {
         eighteenp |= resultO.size;
         break;
      }
         resultO = new Map([[`${eighteenp}`, eighteenp & 1]]);
         taiwanw = eighteenp == parseInt(`${arrowrightwithtailh}`);
      if (arrowrightwithtailh < eighteenp) {
         arrowrightwithtailh /= Math.max(parseFloat(`${3 * parseInt(`${arrowrightwithtailh}`)}`), 4);
      }
         eighteenp >>= Math.min(Math.abs(resultO.size), 1);
          let referrerA = String.fromCharCode(117,95,55,95,112,117,114,112,108,101,0);
         eighteenp ^= 2;
         referrerA = `${referrerA.length}`;
         taiwanw = 35.7 < arrowrightwithtailh || 68 < eighteenp;
       let mbbannery: Map<any, any> = new Map([[String.fromCharCode(103,95,55,54,95,107,116,111,112,0),499], [String.fromCharCode(109,95,50,95,116,104,114,101,101,100,111,115,116,114,0),977], [String.fromCharCode(120,95,51,52,95,99,111,110,110,105,110,112,117,116,0),584]]);
       let privilegeY: Map<any, any> = new Map([[String.fromCharCode(118,114,101,112,95,119,95,53,54,0),true ], [String.fromCharCode(114,95,56,49,0),false ], [String.fromCharCode(108,95,57,95,102,117,122,122,121,0),false ]]);
      if (Array.from(resultO.keys()).includes(`${privilegeY.size}`)) {
         resultO = new Map([[`${arrowrightwithtailh}`, ((taiwanw ? 3 : 1) ^ parseInt(`${arrowrightwithtailh}`))]]);
      }
         resultO.set(`${privilegeY.size}`, 1 >> (Math.min(4, Math.abs(mbbannery.size))));
      for (let j = 0; j < 3; j++) {
          let animationW = 0;
          let settingsd = 1.0;
          let telegramC = 5;
          let time_9l = String.fromCharCode(119,95,55,57,95,97,116,116,114,97,99,116,111,114,0);
          let routerV = 3.0;
         eighteenp /= Math.max(eighteenp + 3, 2);
         animationW -= time_9l.length;
         settingsd += parseFloat(`${animationW}`);
         telegramC -= parseInt(`${settingsd}`);
         time_9l = `${3 | time_9l.length}`;
         routerV += parseFloat(`${parseInt(`${settingsd}`) ^ parseInt(`${routerV}`)}`);
      }
      downloadw += `${2 ^ iconviewergifc.length}`;
   }
      round0 += "1";

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
       let iconfeedbackx: Array<any> = [291, 178];
    let catalogU = String.fromCharCode(115,101,116,116,101,114,95,102,95,52,53,0);
    let update_txK = String.fromCharCode(102,105,110,97,108,105,122,101,114,95,113,95,55,48,0);
    let yellowtored6: Array<any> = [505, 556, 951];
    let libfileT = 5.0;
    let huaweiS = 2.0;
    let i_hash4 = String.fromCharCode(110,97,99,107,95,52,95,56,48,0);
    let dnewsC = 5.0;
    let latnR: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,112,95,118,95,55,51,0),true ], [String.fromCharCode(109,105,99,114,111,112,104,111,110,101,95,104,95,55,50,0),true ], [String.fromCharCode(113,95,52,50,95,112,114,101,114,101,108,101,97,115,101,0),true ]]);
    let customt = true;
    let progressJ = String.fromCharCode(120,95,55,57,95,120,109,108,115,0);
   while ((dnewsC - 5.29) < 1.53 && (dnewsC - parseFloat(`${iconfeedbackx.length}`)) < 5.29) {
      dnewsC /= Math.max(parseFloat(`${3}`), 1);
      break;
   }
   if (1 <= (latnR.size << (Math.min(Math.abs(3), 1)))) {
      huaweiS += 1 / (Math.max(1, catalogU.length));
   }
      libfileT -= 2;
   if ((5 << (Math.min(1, catalogU.length))) <= 2 || (5 << (Math.min(2, yellowtored6.length))) <= 5) {
      catalogU += `${(catalogU == String.fromCharCode(114,0) ? update_txK.length : catalogU.length)}`;
   }
       let humiditye = false;
         humiditye = !humiditye;
      if (humiditye) {
         humiditye = (!humiditye ? humiditye : !humiditye);
      }
      if (humiditye || humiditye) {
         humiditye = (!humiditye ? !humiditye : !humiditye);
      }
      latnR = new Map([[`${dnewsC}`, (String.fromCharCode(82,0) == i_hash4 ? parseInt(`${dnewsC}`) : i_hash4.length)]]);

        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

   while (2 == (parseInt(`${huaweiS}`) / (Math.max(i_hash4.length, 4))) || (i_hash4.length & 2) == 3) {
      i_hash4 += `${yellowtored6.length}`;
      break;
   }
       let footballfieldc = String.fromCharCode(109,95,52,51,95,110,97,118,105,103,97,116,111,114,0);
       let telemetryO: Array<any> = [321, 281, 858];
      for (let v = 0; v < 2; v++) {
         telemetryO.push(footballfieldc.length ^ 2);
      }
      while ((telemetryO.length - footballfieldc.length) <= 2 && 3 <= (2 - telemetryO.length)) {
         footballfieldc = `${2 ^ footballfieldc.length}`;
         break;
      }
      for (let u = 0; u < 1; u++) {
          let imagenomoredataj = 4;
          let qaagg = false;
         footballfieldc += `${telemetryO.length & footballfieldc.length}`;
         imagenomoredataj >>= Math.min(Math.abs(imagenomoredataj & 3), 4);
         qaagg = imagenomoredataj < 36;
      }
      for (let c = 0; c < 2; c++) {
          let yellowcirclebgT = String.fromCharCode(112,117,98,108,105,99,107,101,121,115,95,121,95,55,49,0);
          let neon_: Array<any> = [723, 788, 391];
          let sharedU = 1.0;
          let dependencyv = String.fromCharCode(111,95,51,56,95,99,116,114,0);
         telemetryO.push(parseInt(`${sharedU}`) ^ 2);
         yellowcirclebgT += `${neon_.length}`;
         neon_ = [yellowcirclebgT.length];
         sharedU += (String.fromCharCode(88,0) == dependencyv ? neon_.length : dependencyv.length);
      }
          let shoot5 = true;
         footballfieldc += `${footballfieldc.length * telemetryO.length}`;
         shoot5 = !shoot5;
         telemetryO = [1 % (Math.max(6, footballfieldc.length))];
      iconfeedbackx = [parseInt(`${libfileT}`) | 1];
   while (iconfeedbackx.length <= 3) {
       let downloader7 = String.fromCharCode(105,95,53,57,95,115,117,115,112,101,110,100,0);
       let inewsx: Map<any, any> = new Map([[String.fromCharCode(114,97,110,115,105,116,105,111,110,95,122,95,51,57,0),800], [String.fromCharCode(116,95,51,56,95,114,101,101,110,116,114,97,110,116,0),973], [String.fromCharCode(115,95,52,52,95,100,114,97,103,103,105,110,103,0),472]]);
      if (2 == (inewsx.size ^ downloader7.length) && 5 == (2 ^ downloader7.length)) {
         downloader7 = `${3 >> (Math.min(5, downloader7.length))}`;
      }
       let cancelU = 2.0;
       let sheetc = 1.0;
      let progress1 = cancelU <= 8534486.0;
      do {
          let regengG = 0.0;
          let helperI = 2;
          let iconqq7 = String.fromCharCode(99,111,110,100,101,110,115,101,100,95,56,95,54,51,0);
          let reddownarrowv = String.fromCharCode(103,114,111,117,112,99,97,108,108,95,99,95,50,49,0);
         cancelU /= Math.max(parseFloat(`${parseInt(`${regengG}`) * 2}`), 1);
         regengG /= Math.max(iconqq7.length / 3, 2);
         helperI <<= Math.min(Math.abs(iconqq7.length >> (Math.min(5, Math.abs(helperI)))), 5);
         reddownarrowv += `${3 << (Math.min(2, iconqq7.length))}`;
         if (progress1) {
            break;
         }
      } while (progress1 && ((3.85 * cancelU) <= 5.56));
      if (inewsx.get(`${sheetc}`) != null) {
         inewsx.set(downloader7, 3 & parseInt(`${cancelU}`));
      }
         cancelU *= parseFloat(`${parseInt(`${cancelU}`) * parseInt(`${sheetc}`)}`);
      while ((4.97 + cancelU) == 5.70 || (parseFloat(`${inewsx.size}`) + cancelU) == 4.97) {
         inewsx = new Map([[`${inewsx.size}`, 2]]);
         break;
      }
      update_txK += "2";
      break;
   }
      i_hash4 = "2";
   for (let u = 0; u < 2; u++) {
       let binddatasQ = String.fromCharCode(99,109,112,97,100,100,114,95,116,95,55,51,0);
         binddatasQ += `${binddatasQ.length}`;
      for (let d = 0; d < 2; d++) {
         binddatasQ += "2";
      }
       let matchY: Map<any, any> = new Map([[String.fromCharCode(111,95,56,51,95,117,110,97,115,115,105,103,110,101,100,0),String.fromCharCode(120,95,55,52,95,111,118,112,97,103,101,0)], [String.fromCharCode(119,105,110,100,105,110,103,95,111,95,50,48,0),String.fromCharCode(118,95,53,49,95,99,111,101,102,102,115,112,0)], [String.fromCharCode(105,110,99,114,109,101,114,103,101,95,112,95,51,53,0),String.fromCharCode(105,110,116,114,97,95,110,95,51,51,0)]]);
      iconfeedbackx.push(update_txK.length - 3);
   }

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });

       let libglogP = String.fromCharCode(104,99,104,114,111,109,97,95,103,95,53,56,0);
       let langkeys: Array<any> = [43, 977];
          let libfile1 = 3.0;
          let libsentryP = 0.0;
         libglogP += `${3 - langkeys.length}`;
         libfile1 *= 2;
         libsentryP /= Math.max(3 / (Math.max(2, parseInt(`${libfile1}`))), 3);
          let libsentryz = 5;
          let scorepopsoundx = 0.0;
         langkeys.push(langkeys.length + 2);
         libsentryz &= 2;
         scorepopsoundx /= Math.max(parseFloat(`${parseInt(`${scorepopsoundx}`)}`), 3);
         libglogP += `${langkeys.length}`;
      for (let z = 0; z < 3; z++) {
         libglogP += `${libglogP.length}`;
      }
      let detail0 = libglogP.length <= 7983698;
      do {
          let miniv = String.fromCharCode(102,95,49,48,95,114,105,103,104,116,0);
          let iconviewergif_ = 0.0;
          let guideS = String.fromCharCode(100,101,115,99,95,119,95,50,57,0);
          let liveshared = String.fromCharCode(120,95,53,95,102,117,110,99,0);
          let abidetectV = String.fromCharCode(115,105,109,112,108,101,116,97,103,95,54,95,54,50,0);
         libglogP += "1";
         miniv = `${2 + abidetectV.length}`;
         iconviewergif_ -= (parseFloat(`${String.fromCharCode(122,0) == miniv ? miniv.length : guideS.length}`));
         guideS = `${miniv.length << (Math.min(Math.abs(2), 4))}`;
         liveshared = "3";
         abidetectV += `${2 ^ guideS.length}`;
         if (detail0) {
            break;
         }
      } while ((1 <= langkeys.length) && detail0);
      let matchdetailbg3 = langkeys.length >= 8755526;
      do {
         langkeys.push(langkeys.length);
         if (matchdetailbg3) {
            break;
         }
      } while (matchdetailbg3 && (5 > (libglogP.length / 5)));
      huaweiS /= Math.max(2, 2 - update_txK.length);
   if (5.41 >= (2.85 + libfileT)) {
      libfileT *= update_txK.length;
   }
   if (3 > (update_txK.length << (Math.min(1, yellowtored6.length))) && (3 << (Math.min(4, yellowtored6.length))) > 3) {
       let unselected3 = 4.0;
       let sourced: Map<any, any> = new Map([[String.fromCharCode(122,95,54,51,95,116,97,108,108,0),480], [String.fromCharCode(119,97,116,101,114,95,106,95,52,50,0),548]]);
       let homeloading0 = String.fromCharCode(97,95,50,56,95,98,108,117,114,114,97,98,108,101,0);
       let qaagx = String.fromCharCode(97,95,55,57,95,99,108,97,117,115,101,115,0);
         unselected3 *= parseFloat(`${qaagx.length}`);
          let serviceL = String.fromCharCode(97,95,56,51,95,119,111,114,107,97,114,111,117,110,100,0);
          let mbsplasho = String.fromCharCode(112,111,115,116,115,99,97,108,101,95,119,95,53,49,0);
          let iconedit6 = String.fromCharCode(112,95,57,55,95,105,110,116,114,97,120,109,98,121,0);
         qaagx = "2";
         serviceL = `${iconedit6.length + serviceL.length}`;
         mbsplasho = `${mbsplasho.length / (Math.max(10, iconedit6.length))}`;
      while (5.75 > (parseFloat(`${qaagx.length}`) / (Math.max(5, unselected3))) || 4 > (1 + qaagx.length)) {
         qaagx = `${qaagx.length | 2}`;
         break;
      }
         homeloading0 = `${qaagx.length}`;
      let logo_ = String.fromCharCode(121,99,119,55,108,103,0) == qaagx;
      do {
         qaagx += `${(homeloading0 == String.fromCharCode(52,0) ? sourced.size : homeloading0.length)}`;
         if (logo_) {
            break;
         }
      } while ((5.44 <= (unselected3 + parseFloat(`${qaagx.length}`))) && logo_);
      if (Array.from(sourced.values()).includes(unselected3)) {
          let stringsI = String.fromCharCode(97,114,114,97,121,115,95,54,95,53,56,0);
          let dependency0: Array<any> = [String.fromCharCode(116,114,97,110,115,112,97,114,101,110,116,95,101,95,53,51,0), String.fromCharCode(100,105,99,116,95,122,95,54,56,0)];
          let z_lock8 = String.fromCharCode(108,97,100,100,101,114,115,116,101,112,95,57,95,56,50,0);
          let templateprocessorX: Array<any> = [String.fromCharCode(97,95,53,51,95,102,105,108,101,119,114,105,116,101,115,116,114,101,97,109,0), String.fromCharCode(113,95,54,51,95,111,117,116,98,111,117,110,100,0), String.fromCharCode(100,110,111,119,95,97,95,51,56,0)];
          let eabafadfadddbafeddddeeefeaafT: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,105,115,116,105,99,95,56,95,50,57,0),918], [String.fromCharCode(101,121,101,100,114,111,112,112,101,114,95,105,95,51,49,0),84]]);
         sourced = new Map([[`${eabafadfadddbafeddddeeefeaafT.size}`, 3 << (Math.min(5, z_lock8.length))]]);
         stringsI += `${stringsI.length}`;
         dependency0 = [(String.fromCharCode(49,0) == stringsI ? stringsI.length : dependency0.length)];
         z_lock8 = `${2 % (Math.max(2, templateprocessorX.length))}`;
         templateprocessorX = [stringsI.length];
         eabafadfadddbafeddddeeefeaafT = new Map([[`${dependency0.length}`, dependency0.length % (Math.max(8, stringsI.length))]]);
      }
       let dropdownb = String.fromCharCode(115,117,105,116,97,98,108,101,95,117,95,54,54,0);
       let typingO = String.fromCharCode(106,95,57,53,95,98,114,111,97,100,99,97,115,116,0);
      if (!dropdownb.endsWith(`${sourced.size}`)) {
          let shootH = 3.0;
         dropdownb = "3";
         shootH /= Math.max(4, parseInt(`${shootH}`));
      }
         typingO = `${parseInt(`${unselected3}`) % 1}`;
      while (qaagx.length <= 1) {
          let commenti = false;
          let privatechatbgu = String.fromCharCode(99,97,108,99,117,108,97,116,101,95,120,95,55,53,0);
          let androidI = true;
         dropdownb = "1";
         commenti = ((privatechatbgu.length * (androidI ? 88 : privatechatbgu.length)) < 88);
         androidI = privatechatbgu.length > 59;
         break;
      }
      for (let o = 0; o < 1; o++) {
         dropdownb += `${(String.fromCharCode(98,0) == qaagx ? qaagx.length : dropdownb.length)}`;
      }
      if ((4 + qaagx.length) > 1) {
         qaagx = `${qaagx.length << (Math.min(Math.abs(1), 3))}`;
      }
      update_txK += `${homeloading0.length + 2}`;
   }
      latnR.set(`${dnewsC}`, 3);
      latnR = new Map([[`${iconfeedbackx.length}`, parseInt(`${libfileT}`)]]);
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
