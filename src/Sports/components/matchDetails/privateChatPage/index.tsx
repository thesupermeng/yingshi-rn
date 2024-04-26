import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import createStyles from "./wawa_hiad_iconnewchat";
import { useAppDispatch, useSelector } from "@hooks/wawa_root";
import { CPressable, CTextInput } from "../../../../components/atoms";
import SendIcon from '@static/images/assetsFootballtrophyStation.svg';
import SendFillIcon from '@static/images/anytimeSpecRefreshborderless.svg';
import { COMMENT_MAX_INPUT } from "@utility/wawa_iconpointscore";
import { wawaAdult } from "@type/wawa_gradlew";
import { wawaLeague } from "@redux/reducers/wawa_fast_flipper";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux/actions/wawa_tooltips";
import { wawaYellowtored } from "../../../types/wawa_klevin_iconwechat";
import { useTheme } from "@react-navigation/native";
import { Avatar } from "@rneui/base";
import { wawaContainerFloating, wawaBackwhite } from "@type/wawa_newsshare_privatechatbg";
import { debounce } from "lodash";
import { UnreadCard } from "../../../../components/chat/wawa_sound";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

type wawaAwayShow = {
    matchID: string,
    streamer: wawaYellowtored,
    sportType: string,
    onInputFocus?: (isFocus: boolean) => void,
}

const PrivateChatPage = ({
    matchID,
    streamer,
    sportType,
    onInputFocus,
}: wawaAwayShow) => {
    const PIN_YIN_ACCEPTED = 20;

    const { colors } = useTheme();
    const styles = useMemo(() => createStyles({ colors }), []);

    const chatState = useSelector<wawaLeague>('chatReducer');
    const userState = useSelector<wawaPhoneControls>('userReducer');
    const [comment, setComment] = useState('');
    const [historyChat, sethistoryChat] = useState<wawaContainerFloating[]>([]);
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<wawaContainerFloating> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = wawaLibglog.isLogin(userState.user);

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
       let resultg = 3;
    let giflivestreamingB = 0.0;
    let twitterV = 1;
    let recommendation0 = 2.0;
    let attributedstringu: Map<any, any> = new Map([[String.fromCharCode(117,95,50,50,95,115,105,120,0),false ], [String.fromCharCode(102,101,116,99,104,101,100,95,113,95,56,55,0),false ]]);
    let scorepopsoundd = 5.0;
    let iconbellactiveF = String.fromCharCode(108,97,121,111,117,116,115,95,116,95,54,57,0);
    let m_countQ = String.fromCharCode(100,95,52,51,95,97,100,106,117,115,116,105,110,103,0);
    let backP = String.fromCharCode(121,95,56,48,95,116,114,97,110,115,102,111,114,109,101,100,0);
    let filledi = true;
    let subinE = String.fromCharCode(111,117,116,99,111,109,101,95,107,95,56,50,0);
       let incidentV = 3;
       let animationsX = String.fromCharCode(102,95,52,56,95,108,122,111,120,0);
      if (incidentV > 5) {
         incidentV /= Math.max(5, incidentV);
      }
       let hoverz = String.fromCharCode(112,101,114,115,111,110,115,95,102,95,51,55,0);
       let iconchatsendq = String.fromCharCode(121,95,52,57,95,112,97,114,97,109,99,104,97,110,103,101,0);
       let icontransferclubF = String.fromCharCode(113,95,54,54,95,116,105,109,101,105,110,102,111,114,99,101,0);
      for (let p = 0; p < 2; p++) {
         animationsX = `${1 ^ incidentV}`;
      }
          let gdtadvV = true;
          let shareY = String.fromCharCode(99,114,97,115,104,108,121,116,105,99,115,95,97,95,53,56,0);
          let downloadingu = String.fromCharCode(115,101,110,100,105,110,103,95,111,95,56,50,0);
         iconchatsendq = "3";
         gdtadvV = downloadingu.length >= 90 || !gdtadvV;
         shareY += `${shareY.length << (Math.min(Math.abs(2), 3))}`;
         downloadingu += `${(shareY.length / (Math.max(9, (gdtadvV ? 3 : 4))))}`;
      let photoL = String.fromCharCode(122,48,122,116,104,51,50,0) == hoverz;
      do {
         hoverz = `${icontransferclubF.length << (Math.min(iconchatsendq.length, 4))}`;
         if (photoL) {
            break;
         }
      } while (photoL && (4 < (hoverz.length >> (Math.min(Math.abs(1), 2))) || (hoverz.length >> (Math.min(Math.abs(1), 4))) < 4));
      recommendation0 -= parseFloat(`${2}`);
      resultg |= parseInt(`${giflivestreamingB}`);
   if (1.15 == (recommendation0 * resultg)) {
      recommendation0 += parseFloat(`${resultg}`);
   }

        const histories = chatState.privateRoomHistory?.filter(e => e.roomId === `private:${matchID}` && e.userId === chatState.userId);

       let private_56 = String.fromCharCode(111,95,57,49,95,117,110,115,101,110,116,0);
      let baselinet = private_56.length >= 7360844;
      do {
          let mappingE: Array<any> = [672, 796, 656];
          let whatsappM = String.fromCharCode(119,95,55,49,95,102,99,104,111,119,110,0);
          let executorv = 5.0;
          let eyeclose9: Array<any> = [247, 641, 706];
         private_56 += `${mappingE.length * 1}`;
         mappingE.push(1 / (Math.max(parseInt(`${executorv}`), 4)));
         whatsappM += `${(String.fromCharCode(76,0) == whatsappM ? eyeclose9.length : whatsappM.length)}`;
         executorv -= whatsappM.length - 3;
         eyeclose9 = [parseInt(`${executorv}`) >> (Math.min(Math.abs(1), 4))];
         if (baselinet) {
            break;
         }
      } while ((private_56.includes(`${private_56.length}`)) && baselinet);
      let episodesG = private_56.length >= 6713832;
      do {
          let eyecloseH = 0;
          let sellg = 2;
         private_56 += `${sellg}`;
         eyecloseH >>= Math.min(3, Math.abs(2));
         sellg += eyecloseH;
         if (episodesG) {
            break;
         }
      } while ((private_56 != String.fromCharCode(75,0) || private_56.length <= 3) && episodesG);
      while (private_56 != String.fromCharCode(107,0)) {
         private_56 += `${1 >> (Math.min(4, private_56.length))}`;
         break;
      }
      m_countQ = `${twitterV}`;
      resultg |= 3 - twitterV;
   for (let i = 0; i < 3; i++) {
      m_countQ = "1";
   }

        if (!histories || histories.length === 0) return;

      m_countQ += `${twitterV | 1}`;
   for (let o = 0; o < 2; o++) {
      scorepopsoundd -= parseInt(`${giflivestreamingB}`) % (Math.max(iconbellactiveF.length, 8));
   }
   for (let p = 0; p < 3; p++) {
       let stringsC: Array<any> = [247, 381];
       let currentu: Array<any> = [116, 275];
       let flag9: Array<any> = [312, 362];
       let progressI = 2.0;
       let libflipper1: Map<any, any> = new Map([[String.fromCharCode(111,110,116,101,120,116,95,102,95,49,0),false ], [String.fromCharCode(99,111,110,118,101,114,116,95,98,95,49,50,0),false ]]);
      while ((1.83 - progressI) == 5.62 || 1.83 == (stringsC.length - progressI)) {
          let iconarrowrightwhiteZ: Array<any> = [979, 857];
          let playlistx: Array<any> = [String.fromCharCode(116,98,117,102,95,106,95,52,50,0), String.fromCharCode(108,105,110,101,115,95,53,95,52,53,0)];
         progressI -= 3 * libflipper1.size;
         iconarrowrightwhiteZ = [iconarrowrightwhiteZ.length / 3];
         playlistx.push(playlistx.length);
         break;
      }
         flag9.push(flag9.length * parseInt(`${progressI}`));
      if ((2 * stringsC.length) > 3 && (2 * stringsC.length) > 3) {
         stringsC.push(stringsC.length);
      }
      for (let s = 0; s < 1; s++) {
         flag9 = [flag9.length];
      }
      for (let t = 0; t < 3; t++) {
         flag9 = [stringsC.length + currentu.length];
      }
      while (2 > (currentu.length + flag9.length)) {
         flag9.push(flag9.length - currentu.length);
         break;
      }
          let libyogas = String.fromCharCode(109,95,50,52,95,114,97,105,110,0);
          let libreactnativejnid = String.fromCharCode(115,95,56,48,95,114,116,114,101,101,110,111,100,101,0);
          let a_hash4 = String.fromCharCode(100,101,116,101,114,109,105,110,97,98,108,101,95,108,95,52,57,0);
         stringsC.push(libflipper1.size & 3);
         libyogas += `${a_hash4.length + libyogas.length}`;
         libreactnativejnid += `${a_hash4.length % (Math.max(1, 1))}`;
       let gifgoalG: Array<any> = [371, 217, 576];
      let holderW = 9182632.0 >= progressI;
      do {
         progressI += flag9.length;
         if (holderW) {
            break;
         }
      } while ((1.61 > (2.42 - progressI)) && holderW);
       let basketballplayerplaceholderf = String.fromCharCode(108,95,50,57,95,97,118,97,116,97,114,115,0);
       let cornershootK = String.fromCharCode(106,95,49,54,95,106,115,105,109,100,101,120,116,0);
       let cornershoot5: Array<any> = [String.fromCharCode(97,110,105,109,97,116,111,114,115,95,119,95,51,52,0), String.fromCharCode(116,111,109,111,114,114,111,119,95,53,95,55,52,0)];
       let tick8: Array<any> = [String.fromCharCode(122,95,57,50,95,109,97,116,101,114,105,97,108,0), String.fromCharCode(111,95,50,57,95,114,101,115,116,97,107,101,0)];
      while ((tick8.length + 1) >= 4 || (tick8.length + libflipper1.size) >= 1) {
          let minimizeZ = 4.0;
          let sendL = 1;
          let shirtX = false;
         tick8.push(libflipper1.size);
         minimizeZ /= Math.max(parseFloat(`${parseInt(`${minimizeZ}`)}`), 4);
         sendL &= sendL | 2;
         shirtX = !shirtX;
         break;
      }
         tick8.push(flag9.length);
         cornershootK += `${currentu.length / 2}`;
      for (let x = 0; x < 1; x++) {
          let iconH: Map<any, any> = new Map([[String.fromCharCode(112,95,51,95,100,105,115,109,105,115,115,97,108,0),String.fromCharCode(110,95,49,95,99,97,112,97,99,105,116,121,0)], [String.fromCharCode(119,95,51,55,95,99,108,111,110,101,0),String.fromCharCode(108,97,122,121,95,122,95,54,49,0)], [String.fromCharCode(112,116,115,101,115,95,111,95,56,54,0),String.fromCharCode(116,95,49,57,95,99,111,100,101,119,111,114,100,0)]]);
         flag9.push(3);
         iconH.set(`${iconH.size}`, 3 | iconH.size);
      }
      scorepopsoundd *= twitterV;
   }

        if (historyChat.length === 0) {

      filledi = (attributedstringu.size >> (Math.min(backP.length, 1))) < 43;
   if ((parseInt(`${giflivestreamingB}`) * twitterV) <= 4 && 5 <= (twitterV / (Math.max(4, 7)))) {
      giflivestreamingB -= 2;
   }
   for (let e = 0; e < 2; e++) {
      giflivestreamingB -= parseInt(`${giflivestreamingB}`);
   }
            sethistoryChat([histories[histories.length - 1]]);
        } else {

      backP += `${parseInt(`${scorepopsoundd}`)}`;
       let muted1 = 0.0;
       let spinnerr = String.fromCharCode(114,101,108,101,97,115,101,100,95,108,95,51,49,0);
      let navigation0 = 9227142.0 <= muted1;
      do {
         muted1 /= Math.max(2, 3 * parseInt(`${muted1}`));
         if (navigation0) {
            break;
         }
      } while (navigation0 && ((spinnerr.length + 5) < 2));
         muted1 *= parseInt(`${muted1}`);
      for (let l = 0; l < 3; l++) {
          let giftn = String.fromCharCode(114,95,55,57,95,108,105,98,111,112,101,110,104,0);
          let tumbnailP = false;
         muted1 += spinnerr.length;
         giftn += `${(giftn == String.fromCharCode(111,0) ? giftn.length : (tumbnailP ? 2 : 1))}`;
         tumbnailP = tumbnailP || giftn.length > 15;
      }
          let hiad4 = String.fromCharCode(97,95,57,50,95,108,97,117,110,99,104,105,110,103,0);
          let renewb = String.fromCharCode(122,95,57,55,95,100,101,114,105,118,97,116,105,118,101,0);
          let scrollview7 = 1;
         spinnerr = `${renewb.length ^ 1}`;
         hiad4 += `${scrollview7}`;
         renewb += `${2 * hiad4.length}`;
         scrollview7 -= hiad4.length;
      let imagemanager6 = String.fromCharCode(108,107,117,118,101,0) == spinnerr;
      do {
         spinnerr += `${spinnerr.length % (Math.max(4, parseInt(`${muted1}`)))}`;
         if (imagemanager6) {
            break;
         }
      } while (imagemanager6 && (5.74 >= (muted1 + 4.88) || 4 >= (spinnerr.length + parseInt(`${muted1}`))));
       let bgvipsportV = 3.0;
      iconbellactiveF += `${3 << (Math.min(4, m_countQ.length))}`;
      twitterV |= parseInt(`${giflivestreamingB}`);
            const indexFound = histories.findIndex(e => e.joinDate === historyChat[0].joinDate);

      backP += `${parseInt(`${giflivestreamingB}`)}`;
   if (3 <= m_countQ.length) {
      filledi = resultg <= parseInt(`${recommendation0}`);
   }
   for (let d = 0; d < 2; d++) {
      scorepopsoundd *= resultg << (Math.min(Math.abs(twitterV), 4));
   }

            if (indexFound === -1 || (indexFound - 1) < 0) return;

   while (2 >= twitterV) {
       let iconmegaphoneo = String.fromCharCode(114,101,116,114,105,101,118,101,100,95,111,95,48,0);
       let videocommonp = false;
       let iconwatchnowD = true;
      let dinit_23F = iconwatchnowD ? !iconwatchnowD : iconwatchnowD;
      do {
         iconwatchnowD = !iconmegaphoneo.startsWith(`${videocommonp}`);
         if (dinit_23F) {
            break;
         }
      } while ((!iconmegaphoneo.includes(`${iconwatchnowD}`)) && dinit_23F);
      if (iconmegaphoneo.length > 1 || !iconwatchnowD) {
         iconwatchnowD = (36 <= (iconmegaphoneo.length | (!videocommonp ? iconmegaphoneo.length : 36)));
      }
      let matchactiveg = videocommonp ? !videocommonp : videocommonp;
      do {
          let langf = String.fromCharCode(98,119,103,116,95,114,95,56,55,0);
          let orangeuparrowB = String.fromCharCode(115,95,53,95,109,97,116,99,104,101,0);
          let phonesharez = String.fromCharCode(105,109,112,111,114,116,95,56,95,55,53,0);
          let iconnewsshareX = 1.0;
          let iconnewchatz: Map<any, any> = new Map([[String.fromCharCode(108,95,50,56,95,98,105,110,107,100,97,116,97,0),true ], [String.fromCharCode(115,112,101,99,116,105,109,101,95,51,95,49,53,0),false ], [String.fromCharCode(100,97,116,101,115,95,120,95,53,57,0),false ]]);
         videocommonp = (iconnewchatz.size - langf.length) <= 56;
         langf = `${(String.fromCharCode(68,0) == orangeuparrowB ? parseInt(`${iconnewsshareX}`) : orangeuparrowB.length)}`;
         phonesharez = `${orangeuparrowB.length}`;
         iconnewsshareX += parseFloat(`${parseInt(`${iconnewsshareX}`) >> (Math.min(orangeuparrowB.length, 3))}`);
         iconnewchatz.set(`${iconnewsshareX}`, 3);
         if (matchactiveg) {
            break;
         }
      } while (matchactiveg && (iconmegaphoneo.length > 4));
      for (let m = 0; m < 3; m++) {
         videocommonp = !iconwatchnowD || videocommonp;
      }
         videocommonp = (!videocommonp ? !iconwatchnowD : !videocommonp);
      for (let v = 0; v < 1; v++) {
          let matchinactiveu: Array<any> = [19, 574, 193];
          let iconnotificationnew9 = String.fromCharCode(108,97,110,100,109,105,110,101,115,95,55,95,52,54,0);
          let t_countr = 2.0;
          let fileB = 4.0;
         iconmegaphoneo += `${iconmegaphoneo.length | parseInt(`${fileB}`)}`;
         matchinactiveu = [parseInt(`${t_countr}`)];
         iconnotificationnew9 += `${matchinactiveu.length}`;
         t_countr -= parseFloat(`${parseInt(`${t_countr}`) % 2}`);
         fileB /= Math.max((parseFloat(`${String.fromCharCode(120,0) == iconnotificationnew9 ? matchinactiveu.length : iconnotificationnew9.length}`)), 1);
      }
       let weatherG = String.fromCharCode(101,114,105,97,108,105,122,97,116,105,111,110,95,100,95,51,52,0);
          let t_hash4 = String.fromCharCode(109,115,114,108,101,95,99,95,56,51,0);
          let episodeh = 5.0;
          let policy6 = String.fromCharCode(112,97,110,101,115,95,104,95,49,55,0);
         weatherG = `${((videocommonp ? 1 : 1))}`;
         t_hash4 += `${policy6.length << (Math.min(Math.abs(3), 1))}`;
         episodeh *= (String.fromCharCode(69,0) == t_hash4 ? t_hash4.length : parseInt(`${episodeh}`));
         policy6 += `${t_hash4.length << (Math.min(4, Math.abs(parseInt(`${episodeh}`))))}`;
      let iconpipshrinkD = String.fromCharCode(99,116,50,54,0) == weatherG;
      do {
          let filet: Array<any> = [36, 644];
         weatherG += `${weatherG.length >> (Math.min(Math.abs(1), 1))}`;
         filet = [filet.length | filet.length];
         if (iconpipshrinkD) {
            break;
         }
      } while (iconpipshrinkD && (!iconwatchnowD && 3 > weatherG.length));
      iconbellactiveF = "2";
      break;
   }
      twitterV >>= Math.min(1, Math.abs(1 | parseInt(`${giflivestreamingB}`)));
   let shirtv = 7850025.0 >= scorepopsoundd;
   do {
      scorepopsoundd /= Math.max(1, parseInt(`${giflivestreamingB}`));
      if (shirtv) {
         break;
      }
   } while ((5.53 <= (scorepopsoundd / 1.3)) && shirtv);

            sethistoryChat(prev => [histories[indexFound - 1]].concat(prev));
        }
    }, 500);

    const renderChatGroup = useCallback(({ item }: { item: wawaBackwhite }) => {
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

    const renderMessageItem = useCallback(({ item }: { item: wawaAdult }) => {
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
                            : require("@static/images/iconviewerConfirmation.png")
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
                        : require("@static/images/iconviewerConfirmation.png")
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
       let libimagepipeliner = 2;
    let telegramh = String.fromCharCode(115,119,102,112,108,97,121,101,114,95,52,95,57,50,0);
    let defaultprofilepic2 = 0.0;
    let sharewhitep = String.fromCharCode(102,95,53,54,95,112,101,114,105,111,100,105,99,97,108,108,121,0);
    let thailandL = 1;
    let footballfiledlayout1: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,102,117,108,108,95,119,95,54,53,0),false ], [String.fromCharCode(121,95,52,48,95,99,107,115,117,109,0),true ]]);
    let rulesZ: Map<any, any> = new Map([[String.fromCharCode(109,95,52,57,95,115,117,110,115,101,116,0),true ], [String.fromCharCode(116,95,52,55,95,114,117,101,0),true ]]);
    let iconsaveimage2: Array<any> = [String.fromCharCode(100,95,49,55,95,98,101,104,105,110,100,0), String.fromCharCode(115,116,114,100,117,112,95,106,95,52,53,0)];
    let iconscheduleC = 5;
    let yellowscoreballi = 1.0;
    let streamingF: Array<any> = [747, 548, 731];
    let matchesz: Map<any, any> = new Map([[String.fromCharCode(100,105,97,103,110,111,115,116,105,99,115,95,120,95,56,49,0),64], [String.fromCharCode(97,102,116,101,114,95,97,95,52,57,0),718], [String.fromCharCode(103,95,52,49,95,106,99,104,117,102,102,0),151]]);
    let fcdaebecbcbafcdfceaaeccfeacdb4 = String.fromCharCode(104,95,54,52,95,105,110,102,111,0);
    let rooty: Map<any, any> = new Map([[String.fromCharCode(122,95,56,51,95,112,111,108,121,103,111,110,0),941], [String.fromCharCode(100,95,52,57,95,109,115,118,115,0),641]]);
   if (3.48 < (2.53 / (Math.max(7, yellowscoreballi))) && (yellowscoreballi / 2.53) < 5.39) {
       let productf = false;
         productf = (!productf ? productf : productf);
          let iconcurrentmatcht: Map<any, any> = new Map([[String.fromCharCode(97,95,51,48,95,110,111,116,105,102,105,99,97,116,111,110,115,0),548], [String.fromCharCode(99,111,117,110,116,114,105,101,115,95,49,95,54,52,0),222], [String.fromCharCode(113,115,99,97,108,101,98,105,116,115,95,101,95,53,56,0),164]]);
          let tumbnailC = 0.0;
         productf = null != iconcurrentmatcht.get(`${tumbnailC}`);
      let regengp = productf ? !productf : productf;
      do {
         productf = (productf ? !productf : productf);
         if (regengp) {
            break;
         }
      } while ((!productf) && regengp);
      footballfiledlayout1.set(telegramh, 1);
   }
      iconscheduleC &= (sharewhitep == String.fromCharCode(102,0) ? sharewhitep.length : streamingF.length);
   if (rulesZ.size == 3) {
      sharewhitep = `${iconsaveimage2.length % (Math.max(3, 2))}`;
   }
   for (let y = 0; y < 2; y++) {
      thailandL ^= iconsaveimage2.length;
   }
   while ((telegramh.length ^ iconscheduleC) < 1) {
      telegramh += "1";
      break;
   }
   while (telegramh.length < libimagepipeliner) {
      libimagepipeliner += iconsaveimage2.length;
      break;
   }

        if (comment.trim().length === 0 || !isCommentValid) return;

   if ((iconsaveimage2.length & 2) > 3 || (iconsaveimage2.length & 2) > 1) {
      iconsaveimage2.push(1 ^ telegramh.length);
   }
   while (footballfiledlayout1.size == iconsaveimage2.length) {
      iconsaveimage2.push(2);
      break;
   }
       let iconarrowleft2 = true;
      for (let p = 0; p < 1; p++) {
         iconarrowleft2 = !iconarrowleft2;
      }
      let codegenJ = iconarrowleft2 ? !iconarrowleft2 : iconarrowleft2;
      do {
         iconarrowleft2 = !iconarrowleft2;
         if (codegenJ) {
            break;
         }
      } while ((iconarrowleft2 || !iconarrowleft2) && codegenJ);
       let whatsappp = 4.0;
      defaultprofilepic2 *= thailandL;
   if (1 >= (libimagepipeliner << (Math.min(Math.abs(thailandL), 2)))) {
      thailandL %= Math.max(1, parseInt(`${defaultprofilepic2}`) & 2);
   }
   while (Array.from(rulesZ.keys()).includes(`${yellowscoreballi}`)) {
      yellowscoreballi += parseFloat(`${libimagepipeliner % (Math.max(sharewhitep.length, 3))}`);
      break;
   }
       let descs = String.fromCharCode(105,115,111,108,97,116,101,95,103,95,57,56,0);
       let backiconi: Array<any> = [754, 951];
       let gmail3 = String.fromCharCode(121,95,49,56,95,115,105,122,101,0);
         gmail3 = `${2 * backiconi.length}`;
         backiconi = [2 & gmail3.length];
      if (!descs.includes(`${backiconi.length}`)) {
         descs += `${(String.fromCharCode(100,0) == descs ? descs.length : backiconi.length)}`;
      }
          let huaweio = String.fromCharCode(116,95,50,48,95,99,111,117,110,116,101,114,115,0);
         descs = "1";
         huaweio += `${(huaweio == String.fromCharCode(122,0) ? huaweio.length : huaweio.length)}`;
         descs += `${2 - gmail3.length}`;
         descs += `${2 + gmail3.length}`;
         backiconi.push((gmail3 == String.fromCharCode(121,0) ? backiconi.length : gmail3.length));
      while (4 == (5 / (Math.max(2, gmail3.length))) || (backiconi.length / 5) == 1) {
         gmail3 += `${backiconi.length}`;
         break;
      }
          let securityI = String.fromCharCode(113,95,50,56,95,112,114,101,99,105,115,101,0);
          let step9 = 5;
         descs += `${backiconi.length % (Math.max(descs.length, 1))}`;
         securityI += `${securityI.length}`;
         step9 |= step9 ^ 1;
      iconsaveimage2 = [backiconi.length + 2];

        appDispatch(sendChatMessage({
            message: comment,
            isPrivate: true,
        }));

      rulesZ.set(`${yellowscoreballi}`, parseInt(`${yellowscoreballi}`) | 1);
       let banner2 = String.fromCharCode(97,95,50,57,95,113,116,115,0);
          let inouttargetred0 = 4;
          let middlebrightnessX = String.fromCharCode(113,95,52,52,95,117,112,109,105,120,0);
         banner2 += "1";
         inouttargetred0 /= Math.max(2, inouttargetred0);
         middlebrightnessX = "1";
         banner2 += `${banner2.length << (Math.min(5, banner2.length))}`;
      while (banner2.length >= 2) {
         banner2 += "1";
         break;
      }
      iconsaveimage2 = [(String.fromCharCode(55,0) == telegramh ? thailandL : telegramh.length)];
       let sellmathbackgroundy = String.fromCharCode(100,95,53,51,95,97,101,115,116,97,98,0);
       let helperT: Map<any, any> = new Map([[String.fromCharCode(99,117,115,116,111,109,105,122,101,114,95,50,95,49,55,0),String.fromCharCode(107,95,52,53,95,105,110,116,101,114,118,97,108,0)], [String.fromCharCode(115,119,105,112,101,95,107,95,54,53,0),String.fromCharCode(114,111,108,108,95,54,95,49,48,0)]]);
       let vertical8 = String.fromCharCode(100,101,97,99,116,95,52,95,55,0);
      if (sellmathbackgroundy.startsWith(`${helperT.size}`)) {
         sellmathbackgroundy += `${sellmathbackgroundy.length}`;
      }
      let agreementp = sellmathbackgroundy == String.fromCharCode(97,56,121,52,105,97,107,48,0);
      do {
          let casting2 = String.fromCharCode(106,95,54,54,95,100,101,110,111,114,109,97,108,0);
         sellmathbackgroundy = `${(casting2 == String.fromCharCode(73,0) ? casting2.length : vertical8.length)}`;
         if (agreementp) {
            break;
         }
      } while (((sellmathbackgroundy.length >> (Math.min(4, Math.abs(helperT.size)))) >= 2 && 2 >= (2 >> (Math.min(4, Math.abs(helperT.size))))) && agreementp);
      while (3 > (vertical8.length % 1) || (1 % (Math.max(7, vertical8.length))) > 4) {
         helperT = new Map([[`${helperT.size}`, helperT.size ^ sellmathbackgroundy.length]]);
         break;
      }
         sellmathbackgroundy += `${sellmathbackgroundy.length + 2}`;
      while ((sellmathbackgroundy.length & helperT.size) <= 2 || 2 <= (helperT.size & sellmathbackgroundy.length)) {
         sellmathbackgroundy = `${sellmathbackgroundy.length >> (Math.min(5, Math.abs(helperT.size)))}`;
         break;
      }
      while (3 < sellmathbackgroundy.length) {
         sellmathbackgroundy += "2";
         break;
      }
          let r_imagee = 2.0;
          let splash2 = 2.0;
         helperT.set(vertical8, parseInt(`${splash2}`) | 2);
         r_imagee += parseFloat(`${3 - parseInt(`${r_imagee}`)}`);
         splash2 *= parseFloat(`${parseInt(`${r_imagee}`) | 1}`);
          let mbnativet = 2.0;
         vertical8 = `${1 >> (Math.min(2, Math.abs(parseInt(`${mbnativet}`))))}`;
      let libcrashsdkV = helperT.size <= 7374272;
      do {
          let descE: Array<any> = [310, 169];
          let pause2 = String.fromCharCode(99,108,117,115,116,101,114,95,104,95,52,54,0);
          let inouttargetredC = false;
         helperT = new Map([[vertical8, vertical8.length]]);
         descE = [3 ^ pause2.length];
         pause2 += "1";
         inouttargetredC = !inouttargetredC;
         if (libcrashsdkV) {
            break;
         }
      } while (libcrashsdkV && (2 > (1 + sellmathbackgroundy.length)));
      yellowscoreballi /= Math.max(2, parseFloat(`${sellmathbackgroundy.length}`));
       let memberD = 3.0;
       let unimplementedviewF: Map<any, any> = new Map([[String.fromCharCode(109,111,109,101,110,116,115,95,101,95,50,49,0),true ], [String.fromCharCode(119,95,49,57,95,107,102,119,114,105,116,101,0),false ]]);
       let readH: Map<any, any> = new Map([[String.fromCharCode(117,95,50,51,95,99,105,110,116,0),264], [String.fromCharCode(109,105,103,104,116,95,116,95,54,55,0),348], [String.fromCharCode(118,95,55,55,95,100,101,105,110,116,0),126]]);
      for (let a = 0; a < 2; a++) {
         unimplementedviewF = new Map([[`${unimplementedviewF.size}`, 3 * unimplementedviewF.size]]);
      }
          let giftI = String.fromCharCode(100,95,50,56,95,119,97,108,107,0);
          let reddownarrow2 = 4;
         readH.set(`${memberD}`, 2);
         giftI = "2 + reddownarrow2";
         reddownarrow2 /= Math.max(3, reddownarrow2);
      for (let i = 0; i < 2; i++) {
          let thumbnail3 = String.fromCharCode(108,101,110,118,108,99,95,51,95,50,52,0);
          let disconnectedlogoT = false;
          let downloadedN = String.fromCharCode(98,105,103,105,110,116,101,103,101,114,95,110,95,51,52,0);
          let videocommon9 = true;
          let orangeM = String.fromCharCode(100,111,99,117,109,101,110,116,95,107,95,50,53,0);
         memberD /= Math.max(1, (parseFloat(`${(disconnectedlogoT ? 2 : 5) << (Math.min(Math.abs(1), 5))}`)));
         thumbnail3 = `${((videocommon9 ? 1 : 5))}`;
         disconnectedlogoT = downloadedN.length <= 12;
         downloadedN += `${((videocommon9 ? 1 : 4))}`;
         orangeM = `${thumbnail3.length}`;
      }
       let libavformate = 5.0;
      while (3 > (3 & unimplementedviewF.size) || (libavformate - 3.38) > 4.77) {
         unimplementedviewF.set(`${memberD}`, unimplementedviewF.size);
         break;
      }
         readH = new Map([[`${readH.size}`, 1]]);
          let runtimeA = 1.0;
         readH = new Map([[`${memberD}`, parseInt(`${memberD}`)]]);
         runtimeA *= parseFloat(`${parseInt(`${runtimeA}`)}`);
          let shared6 = String.fromCharCode(110,111,109,105,110,97,116,111,114,115,95,119,95,49,54,0);
         memberD += parseFloat(`${2 + parseInt(`${libavformate}`)}`);
         shared6 = `${shared6.length % (Math.max(1, 8))}`;
         memberD /= Math.max(2, parseFloat(`${parseInt(`${memberD}`) / (Math.max(unimplementedviewF.size, 9))}`));
      rulesZ = new Map([[`${unimplementedviewF.size}`, 1]]);
      libimagepipeliner <<= Math.min(5, iconsaveimage2.length);
   let hejiK = 5001761 <= sharewhitep.length;
   do {
      sharewhitep += `${iconscheduleC}`;
      if (hejiK) {
         break;
      }
   } while ((5 == (2 - iconsaveimage2.length)) && hejiK);

        setComment('');

      thailandL >>= Math.min(3, Math.abs(iconscheduleC));
   for (let t = 0; t < 2; t++) {
      footballfiledlayout1 = new Map([[`${thailandL}`, thailandL + iconscheduleC]]);
   }
   for (let c = 0; c < 2; c++) {
       let middleH = String.fromCharCode(109,105,108,108,105,115,101,99,111,110,100,115,95,109,95,50,0);
       let iconclosewhitewithbg1 = 3.0;
         iconclosewhitewithbg1 /= Math.max(3, middleH.length);
      for (let c = 0; c < 1; c++) {
          let statisticsh: Array<any> = [188, 842, 763];
          let activeA = 4.0;
          let reactnativejse: Array<any> = [386, 615, 743];
          let libjsiD = 1;
          let fileR = 3.0;
         middleH = `${parseInt(`${iconclosewhitewithbg1}`) >> (Math.min(Math.abs(2), 3))}`;
         statisticsh.push(3);
         activeA /= Math.max(libjsiD, 1);
         reactnativejse.push(3);
         libjsiD >>= Math.min(3, Math.abs(1 * reactnativejse.length));
         fileR *= parseInt(`${fileR}`) << (Math.min(1, Math.abs(2)));
      }
      if ((middleH.length + 5) < 5 || (2.46 + iconclosewhitewithbg1) < 1.2) {
         iconclosewhitewithbg1 -= middleH.length - 1;
      }
          let qaagy = String.fromCharCode(116,95,52,53,95,100,101,115,99,114,105,112,116,105,111,110,115,0);
          let matchesG: Array<any> = [195, 283, 551];
         middleH = "1";
         qaagy += `${1 & qaagy.length}`;
         matchesG = [matchesG.length / (Math.max(2, 6))];
         iconclosewhitewithbg1 -= 1 ^ parseInt(`${iconclosewhitewithbg1}`);
         iconclosewhitewithbg1 -= 1;
      defaultprofilepic2 *= 1;
   }
      telegramh = `${iconsaveimage2.length}`;
       let scorepopsoundc = String.fromCharCode(108,95,57,54,95,119,97,105,116,105,110,103,0);
       let canvasO = 4.0;
       let j_position1 = String.fromCharCode(104,105,115,116,111,114,121,95,106,95,50,53,0);
          let iconfeedbackM: Array<any> = [97, 670];
         canvasO -= scorepopsoundc.length >> (Math.min(5, Math.abs(parseInt(`${canvasO}`))));
         iconfeedbackM.push(iconfeedbackM.length ^ 2);
       let middlebrightnessf = false;
       let disconnectedA = false;
      for (let f = 0; f < 3; f++) {
         j_position1 += `${((disconnectedA ? 1 : 4))}`;
      }
          let logo0 = String.fromCharCode(109,112,99,104,117,102,102,95,121,95,53,48,0);
          let hookS = 5.0;
          let signinupY = 3;
         middlebrightnessf = 70 < signinupY;
         logo0 += `${parseInt(`${hookS}`)}`;
         hookS += parseFloat(`${logo0.length}`);
         signinupY *= logo0.length;
          let commentv = String.fromCharCode(116,95,51,53,95,112,104,111,110,101,0);
          let league7 = String.fromCharCode(103,95,57,56,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0);
          let macaus = String.fromCharCode(116,114,97,110,115,112,111,115,101,100,95,56,95,54,55,0);
         middlebrightnessf = scorepopsoundc.length == 74;
         commentv = `${3 - commentv.length}`;
         league7 = `${2 * commentv.length}`;
         macaus = `${1 % (Math.max(7, macaus.length))}`;
      for (let j = 0; j < 2; j++) {
          let middleC = false;
          let gray6 = 0.0;
          let rncoreq = 0.0;
         canvasO -= 1 - parseInt(`${gray6}`);
         middleC = rncoreq <= 30.34;
         gray6 += (parseFloat(`${(middleC ? 2 : 5) - parseInt(`${rncoreq}`)}`));
      }
          let aread: Map<any, any> = new Map([[String.fromCharCode(100,105,114,101,99,116,111,114,121,95,51,95,57,54,0),false ], [String.fromCharCode(114,101,118,111,99,97,116,105,111,110,95,114,95,55,53,0),true ], [String.fromCharCode(112,111,114,116,101,114,95,48,95,54,52,0),true ]]);
         disconnectedA = scorepopsoundc.length == 37;
         aread = new Map([[`${aread.size}`, aread.size]]);
          let dragcloseR = String.fromCharCode(114,101,97,100,95,57,95,51,0);
          let libsentry0: Array<any> = [String.fromCharCode(110,95,56,49,95,105,110,101,116,0), String.fromCharCode(112,97,117,115,101,95,115,95,51,54,0), String.fromCharCode(109,97,114,107,117,112,95,97,95,52,57,0)];
          let android_: Array<any> = [881, 641];
         middlebrightnessf = scorepopsoundc == String.fromCharCode(84,0);
         dragcloseR += `${3 | dragcloseR.length}`;
         libsentry0 = [dragcloseR.length];
         android_.push((dragcloseR == String.fromCharCode(80,0) ? libsentry0.length : dragcloseR.length));
      let uploadR = middlebrightnessf ? !middlebrightnessf : middlebrightnessf;
      do {
         middlebrightnessf = parseInt(`${canvasO}`) < scorepopsoundc.length;
         if (uploadR) {
            break;
         }
      } while ((!middlebrightnessf) && uploadR);
      sharewhitep += `${libimagepipeliner}`;
      yellowscoreballi /= Math.max(parseFloat(`${iconsaveimage2.length}`), 5);
        Keyboard.dismiss();
    }, [isCommentValid, comment]);

    const onUserScroll = () => {
       let thailandE = false;
    let reactnativejsq = 4;
    let mintegralZ: Array<any> = [424, 208, 281];
    let upgrade7 = false;
    let iconclosewhitebgy = 4.0;
    let libavfilterg: Map<any, any> = new Map([[String.fromCharCode(110,95,51,56,95,115,97,110,115,0),582], [String.fromCharCode(115,97,102,101,115,116,97,99,107,95,51,95,53,56,0),774], [String.fromCharCode(98,95,54,50,95,105,110,112,117,116,116,101,109,0),417]]);
    let icontransfercluba: Map<any, any> = new Map([[String.fromCharCode(101,95,53,54,95,111,110,101,115,0),319], [String.fromCharCode(111,103,103,105,110,103,95,109,95,53,52,0),295], [String.fromCharCode(109,115,103,115,109,95,120,95,54,53,0),947]]);
    let regengr: Map<any, any> = new Map([[String.fromCharCode(119,95,57,49,95,115,117,98,105,116,101,109,115,0),999], [String.fromCharCode(108,105,103,104,116,95,107,95,54,52,0),9], [String.fromCharCode(103,95,52,56,95,115,117,98,112,111,105,110,116,101,114,0),137]]);
    let awayiconG = String.fromCharCode(109,112,101,103,116,115,95,116,95,49,52,0);
    let incidentz = 5;
    let catagory1 = 5;
    let catagoryd = 4.0;
    let libzeusl = 0.0;
    let loadingspinnerF = String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,95,115,95,55,50,0);
    let nativeM: Array<any> = [190, 829, 752];
    let schedulerw = String.fromCharCode(122,95,53,52,95,98,101,110,99,0);
   for (let z = 0; z < 2; z++) {
      icontransfercluba = new Map([[`${regengr.size}`, 2 ^ regengr.size]]);
   }
       let questG = 5;
          let viewsp = String.fromCharCode(116,95,57,48,95,105,110,116,101,114,114,117,112,116,105,111,110,0);
          let materialx = String.fromCharCode(112,109,107,95,54,95,57,48,0);
         questG <<= Math.min(Math.abs(1), 3);
         viewsp = `${viewsp.length << (Math.min(1, materialx.length))}`;
         materialx += `${viewsp.length << (Math.min(materialx.length, 5))}`;
      for (let b = 0; b < 2; b++) {
          let debugl = 0.0;
         questG += 3;
         debugl -= parseInt(`${debugl}`) + 1;
      }
          let whitebellZ = String.fromCharCode(122,95,53,49,95,112,97,116,104,0);
         questG /= Math.max(2, questG);
         whitebellZ = `${whitebellZ.length}`;
      iconclosewhitebgy -= questG;
       let mbbannerz = 5.0;
       let sellmathbackgroundc = true;
       let libfollyZ = String.fromCharCode(114,101,116,117,114,110,115,95,122,95,51,53,0);
      for (let m = 0; m < 3; m++) {
          let defaultbasketballbgU: Array<any> = [707, 530, 608];
          let jingdong0: Map<any, any> = new Map([[String.fromCharCode(97,95,50,54,95,99,111,111,114,100,105,110,97,116,101,0),true ], [String.fromCharCode(101,95,54,50,95,109,116,105,109,101,0),true ]]);
         mbbannerz -= parseFloat(`${3}`);
         defaultbasketballbgU.push(3);
         jingdong0 = new Map([[`${jingdong0.size}`, 3]]);
      }
          let indexG: Array<any> = [258, 346];
         sellmathbackgroundc = (mbbannerz / (Math.max(parseFloat(`${indexG.length}`), 6))) == 85.65;
      for (let b = 0; b < 2; b++) {
          let iconrightorangeJ: Array<any> = [170, 795, 472];
         sellmathbackgroundc = !sellmathbackgroundc;
         iconrightorangeJ = [iconrightorangeJ.length | iconrightorangeJ.length];
      }
      for (let j = 0; j < 1; j++) {
          let membershipT: Map<any, any> = new Map([[String.fromCharCode(115,107,101,121,95,108,95,55,54,0),281], [String.fromCharCode(120,95,53,49,95,97,114,99,104,105,118,101,0),180], [String.fromCharCode(121,95,55,52,95,106,99,111,110,102,105,103,105,110,116,0),988]]);
          let activityi = 4.0;
         libfollyZ += `${parseInt(`${mbbannerz}`) * 3}`;
         membershipT = new Map([[`${membershipT.size}`, membershipT.size]]);
         activityi -= 3 / (Math.max(10, parseInt(`${activityi}`)));
      }
         mbbannerz /= Math.max((parseFloat(`${1 - (sellmathbackgroundc ? 3 : 4)}`)), 3);
      while (!libfollyZ.startsWith(`${sellmathbackgroundc}`)) {
         libfollyZ += `${parseInt(`${mbbannerz}`)}`;
         break;
      }
      if (sellmathbackgroundc || 2.17 == (mbbannerz / (Math.max(2.17, 10)))) {
          let shows: Map<any, any> = new Map([[String.fromCharCode(116,114,97,102,102,105,99,95,108,95,57,57,0),134], [String.fromCharCode(121,95,53,55,95,116,114,97,100,101,0),813], [String.fromCharCode(114,95,51,52,95,112,97,114,116,105,116,105,111,110,101,100,0),824]]);
          let bdxadsdk_ = String.fromCharCode(119,112,101,110,100,105,110,103,95,49,95,52,55,0);
         sellmathbackgroundc = libfollyZ == String.fromCharCode(116,0);
         shows = new Map([[`${shows.size}`, (String.fromCharCode(87,0) == bdxadsdk_ ? shows.size : bdxadsdk_.length)]]);
      }
       let armvaV = String.fromCharCode(115,117,109,100,105,102,102,95,116,95,55,48,0);
      while (3 <= (libfollyZ.length / (Math.max(5, parseInt(`${mbbannerz}`))))) {
         libfollyZ += `${parseInt(`${mbbannerz}`)}`;
         break;
      }
      upgrade7 = mbbannerz >= 63.61 && 79 >= incidentz;
      mintegralZ = [(3 ^ (thailandE ? 1 : 4))];
      reactnativejsq += (awayiconG == String.fromCharCode(72,0) ? incidentz : awayiconG.length);
   let anythink3 = upgrade7 ? !upgrade7 : upgrade7;
   do {
      upgrade7 = reactnativejsq == 57 || !thailandE;
      if (anythink3) {
         break;
      }
   } while ((!upgrade7) && anythink3);
   let iconclosewhitebgg = catagory1 <= 6532307;
   do {
       let listK = 5.0;
          let turnf = String.fromCharCode(115,97,109,112,108,101,102,109,116,95,99,95,56,0);
         listK /= Math.max(parseFloat(`${2}`), 1);
         turnf = `${turnf.length & 3}`;
         listK += parseFloat(`${parseInt(`${listK}`) >> (Math.min(2, Math.abs(2)))}`);
      let settingy = 8043003.0 >= listK;
      do {
         listK += parseFloat(`${parseInt(`${listK}`)}`);
         if (settingy) {
            break;
         }
      } while (settingy && (2.100 == listK));
      catagory1 /= Math.max(regengr.size % (Math.max(4, parseInt(`${listK}`))), 2);
      if (iconclosewhitebgg) {
         break;
      }
   } while (iconclosewhitebgg && (3 == (2 / (Math.max(4, incidentz))) && (incidentz / (Math.max(catagory1, 5))) == 2));
       let taiwanl = String.fromCharCode(97,108,119,97,121,115,95,101,95,55,56,0);
       let fille = 4;
      let short_faA = fille <= 5574294;
      do {
         fille %= Math.max((taiwanl == String.fromCharCode(52,0) ? taiwanl.length : fille), 1);
         if (short_faA) {
            break;
         }
      } while (((fille / (Math.max(taiwanl.length, 6))) < 3 || 2 < (fille / 3)) && short_faA);
      while (1 == (fille / (Math.max(taiwanl.length, 7))) || 2 == (taiwanl.length / (Math.max(1, 9)))) {
         fille &= 1;
         break;
      }
      let targetF = 7026947 <= fille;
      do {
          let iconstary: Array<any> = [870, 572];
          let with_5E: Map<any, any> = new Map([[String.fromCharCode(118,105,115,117,97,108,108,121,95,97,95,49,53,0),866], [String.fromCharCode(97,108,105,103,110,109,101,110,116,95,103,95,49,55,0),966]]);
          let airbnbstarselectedG = 5.0;
          let regeng0 = String.fromCharCode(103,95,57,49,95,107,101,121,112,97,116,104,0);
          let componentA: Array<any> = [344, 848];
         fille >>= Math.min(5, taiwanl.length);
         iconstary = [parseInt(`${airbnbstarselectedG}`)];
         with_5E.set(`${componentA.length}`, componentA.length | 3);
         airbnbstarselectedG += iconstary.length * 2;
         regeng0 += "2";
         if (targetF) {
            break;
         }
      } while (targetF && (fille == 5));
      for (let j = 0; j < 3; j++) {
          let loginsuccess5: Map<any, any> = new Map([[String.fromCharCode(112,95,56,48,95,99,111,110,100,105,116,105,111,110,0),116], [String.fromCharCode(112,111,112,117,112,95,51,95,51,48,0),396], [String.fromCharCode(111,95,56,50,95,118,105,111,108,101,110,99,101,0),598]]);
         taiwanl += `${taiwanl.length - fille}`;
         loginsuccess5.set(`${loginsuccess5.size}`, loginsuccess5.size % 2);
      }
      let bellreminderY = String.fromCharCode(52,102,99,54,52,0) == taiwanl;
      do {
         taiwanl = `${1 << (Math.min(5, Math.abs(fille)))}`;
         if (bellreminderY) {
            break;
         }
      } while (bellreminderY && (1 >= (fille >> (Math.min(taiwanl.length, 1)))));
       let ksadW = String.fromCharCode(114,95,52,55,95,108,108,97,117,100,100,115,112,0);
      regengr = new Map([[`${mintegralZ.length}`, ((upgrade7 ? 4 : 5) - 3)]]);
       let iconrightorangeS = 4;
       let historyc = 1;
      while (historyc == iconrightorangeS) {
         historyc |= iconrightorangeS;
         break;
      }
      while ((historyc << (Math.min(Math.abs(4), 5))) <= 4 || 4 <= (iconrightorangeS << (Math.min(Math.abs(4), 5)))) {
         historyc >>= Math.min(1, Math.abs(iconrightorangeS));
         break;
      }
      libavfilterg.set(`${regengr.size}`, libavfilterg.size);
       let iconarrowlefta = String.fromCharCode(122,95,52,53,95,109,97,116,99,104,105,110,102,111,0);
       let iconviewergifX = String.fromCharCode(101,120,99,108,117,100,105,110,103,95,105,95,50,54,0);
       let sendy = String.fromCharCode(102,108,97,99,100,115,112,95,110,95,50,50,0);
         iconviewergifX = `${1 - iconarrowlefta.length}`;
      for (let q = 0; q < 2; q++) {
         iconviewergifX += `${iconviewergifX.length ^ iconarrowlefta.length}`;
      }
      let utilsg = sendy == String.fromCharCode(114,52,105,99,107,51,55,105,0);
      do {
         sendy = "3";
         if (utilsg) {
            break;
         }
      } while ((sendy.length >= 1 && 1 >= iconviewergifX.length) && utilsg);
      for (let b = 0; b < 1; b++) {
         iconarrowlefta = `${iconarrowlefta.length}`;
      }
         iconviewergifX += `${3 | iconarrowlefta.length}`;
      let traminiD = iconarrowlefta == String.fromCharCode(107,116,122,122,103,97,0);
      do {
         iconarrowlefta = "2";
         if (traminiD) {
            break;
         }
      } while ((5 > iconarrowlefta.length && iconviewergifX == String.fromCharCode(81,0)) && traminiD);
      if (iconarrowlefta == iconviewergifX) {
         iconviewergifX += `${iconarrowlefta.length - 1}`;
      }
          let reviewc = String.fromCharCode(122,95,54,56,95,111,103,103,100,101,99,0);
          let controla = String.fromCharCode(112,95,50,56,95,116,97,110,103,101,110,116,0);
         iconviewergifX = `${1 * iconviewergifX.length}`;
         reviewc += `${reviewc.length}`;
         controla += `${reviewc.length - controla.length}`;
          let type_pry = String.fromCharCode(108,97,116,105,116,117,100,101,95,113,95,49,54,0);
          let selected2 = 1;
         iconviewergifX += `${type_pry.length ^ selected2}`;
      mintegralZ.push(awayiconG.length & 1);
   while (awayiconG.length < 1 && thailandE) {
       let arrowups: Map<any, any> = new Map([[String.fromCharCode(102,105,108,108,115,95,118,95,57,48,0),516], [String.fromCharCode(102,95,57,52,95,115,105,109,112,108,101,115,105,103,110,97,108,0),779], [String.fromCharCode(110,95,52,57,95,102,101,116,99,104,105,110,103,0),730]]);
       let uimanagerZ = 4.0;
          let iconpipexpanda: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,105,111,110,97,114,121,95,111,95,54,54,0),String.fromCharCode(102,95,57,56,95,118,97,108,105,100,97,116,105,111,110,115,0)], [String.fromCharCode(100,101,99,111,109,112,95,57,95,50,53,0),String.fromCharCode(105,95,50,53,95,112,114,101,109,117,108,116,105,112,108,121,0)], [String.fromCharCode(109,117,116,97,98,108,101,95,117,95,53,55,0),String.fromCharCode(120,95,54,53,95,110,111,105,115,101,115,0)]]);
          let libzeusF = String.fromCharCode(97,99,101,115,115,111,114,121,95,100,95,53,54,0);
          let iconpointscoreY = String.fromCharCode(121,95,51,57,95,112,114,111,118,105,100,101,114,115,0);
         arrowups.set(`${uimanagerZ}`, 2);
         iconpipexpanda.set(libzeusF, libzeusF.length * iconpipexpanda.size);
         iconpointscoreY += "2";
      for (let l = 0; l < 1; l++) {
         uimanagerZ /= Math.max(1, 2 >> (Math.min(5, Math.abs(parseInt(`${uimanagerZ}`)))));
      }
         uimanagerZ /= Math.max(5, 2);
      while ((4 & arrowups.size) > 4 || 3.2 > (uimanagerZ + 4.44)) {
         uimanagerZ -= arrowups.size;
         break;
      }
         uimanagerZ += 2;
      let iconsetting8 = 8495395 >= arrowups.size;
      do {
         arrowups.set(`${uimanagerZ}`, 1 >> (Math.min(4, Math.abs(arrowups.size))));
         if (iconsetting8) {
            break;
         }
      } while (iconsetting8 && (4.65 == (uimanagerZ / 3.50) && (uimanagerZ / (Math.max(arrowups.size, 6))) == 3.50));
      awayiconG += `${parseInt(`${libzeusl}`)}`;
      break;
   }
      icontransfercluba.set(`${incidentz}`, 2);
      iconclosewhitebgy += 1 / (Math.max(parseInt(`${libzeusl}`), 7));
   while ((incidentz >> (Math.min(awayiconG.length, 3))) > 1 || 1 > (awayiconG.length >> (Math.min(5, Math.abs(incidentz))))) {
      awayiconG = `${libavfilterg.size}`;
      break;
   }
      mintegralZ = [2];
   if (5 < mintegralZ.length) {
      catagory1 <<= Math.min(Math.abs(3 / (Math.max(reactnativejsq, 3))), 2);
   }
   while (iconclosewhitebgy < incidentz) {
      iconclosewhitebgy /= Math.max(1 & parseInt(`${libzeusl}`), 3);
      break;
   }
      catagory1 <<= Math.min(5, Math.abs(parseInt(`${iconclosewhitebgy}`)));
   if (2 <= (incidentz | awayiconG.length) || (awayiconG.length | incidentz) <= 2) {
       let langQ = String.fromCharCode(115,111,100,101,97,108,108,111,99,95,115,95,51,54,0);
       let l_titlek: Map<any, any> = new Map([[String.fromCharCode(97,100,108,101,114,95,121,95,55,53,0),358], [String.fromCharCode(105,95,54,53,95,111,112,101,110,101,114,0),299]]);
       let plusT = true;
       let actionN = String.fromCharCode(105,95,51,52,95,100,101,114,105,118,101,100,0);
       let applicationd = 4.0;
      let zhengpianc = langQ == String.fromCharCode(118,111,117,121,56,50,56,56,54,0);
      do {
          let positionfieldH = 5.0;
          let dialogC = 3;
          let specW = true;
          let libfollyi = false;
          let whitebell5 = String.fromCharCode(113,95,49,57,95,118,98,101,122,105,101,114,0);
         langQ = `${dialogC + 1}`;
         positionfieldH /= Math.max(1, (parseFloat(`${parseInt(`${positionfieldH}`) - (libfollyi ? 4 : 3)}`)));
         dialogC %= Math.max(parseInt(`${positionfieldH}`), 1);
         specW = !libfollyi;
         whitebell5 += `${((specW ? 2 : 3) & whitebell5.length)}`;
         if (zhengpianc) {
            break;
         }
      } while (zhengpianc && ((4 + langQ.length) == 2 || (parseInt(`${applicationd}`) + 4) == 3));
      let photo3 = applicationd >= 5135610.0;
      do {
         applicationd += parseFloat(`${actionN.length}`);
         if (photo3) {
            break;
         }
      } while ((applicationd == 2.83) && photo3);
      for (let y = 0; y < 2; y++) {
          let combinef = false;
         plusT = l_titlek.size < 53 || plusT;
         combinef = (combinef ? !combinef : combinef);
      }
         actionN = `${((plusT ? 3 : 2) % (Math.max(1, parseInt(`${applicationd}`))))}`;
      let incidenth = applicationd <= 8062637.0;
      do {
         applicationd -= (parseFloat(`${actionN == String.fromCharCode(57,0) ? (plusT ? 1 : 3) : actionN.length}`));
         if (incidenth) {
            break;
         }
      } while ((1.92 == applicationd) && incidenth);
          let ranky: Array<any> = [388, 621];
          let helperP = String.fromCharCode(116,95,52,56,95,98,114,111,119,110,0);
          let reactnativeultimatelistviewR = 4.0;
         applicationd -= parseFloat(`${3}`);
         ranky = [2 - parseInt(`${reactnativeultimatelistviewR}`)];
         helperP = `${helperP.length & 3}`;
         reactnativeultimatelistviewR -= ranky.length / 2;
      while (actionN.endsWith(`${applicationd}`)) {
         actionN = "1";
         break;
      }
      for (let d = 0; d < 3; d++) {
         l_titlek = new Map([[actionN, actionN.length * 2]]);
      }
      if (langQ.endsWith(`${l_titlek.size}`)) {
         l_titlek = new Map([[actionN, 3 << (Math.min(1, actionN.length))]]);
      }
         langQ += `${(langQ.length + (plusT ? 5 : 2))}`;
          let banner4 = String.fromCharCode(102,97,117,108,116,95,50,95,51,56,0);
          let homeicont = String.fromCharCode(114,116,109,112,95,103,95,52,50,0);
         plusT = (homeicont.length ^ langQ.length) > 37;
         banner4 += `${banner4.length}`;
         homeicont += `${2 - banner4.length}`;
         applicationd += parseFloat(`${1 % (Math.max(2, parseInt(`${applicationd}`)))}`);
         actionN = `${actionN.length >> (Math.min(Math.abs(3), 1))}`;
      while (5.49 <= (2.62 - applicationd) || plusT) {
          let adultb = 1.0;
          let bingi = 2.0;
          let traminiU: Array<any> = [230, 211, 624];
          let logousern = 0.0;
          let searchG = 3.0;
         applicationd /= Math.max(parseFloat(`${2}`), 4);
         adultb *= parseFloat(`${traminiU.length}`);
         bingi *= parseInt(`${bingi}`) * 1;
         traminiU = [parseInt(`${adultb}`) >> (Math.min(1, Math.abs(parseInt(`${bingi}`))))];
         logousern -= parseFloat(`${parseInt(`${logousern}`)}`);
         searchG -= traminiU.length * parseInt(`${adultb}`);
         break;
      }
      for (let x = 0; x < 3; x++) {
          let castg = String.fromCharCode(115,105,109,112,108,101,115,105,103,110,97,108,95,106,95,50,55,0);
          let short_vnY: Array<any> = [359, 156];
         plusT = short_vnY.length > 56 || langQ == String.fromCharCode(105,0);
         castg += `${castg.length | 1}`;
         short_vnY.push(castg.length);
      }
      incidentz /= Math.max(2, l_titlek.size);
   }
   if ((iconclosewhitebgy - 4.44) >= 4.70) {
      upgrade7 = loadingspinnerF.length < libavfilterg.size;
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
       let whatsappA = String.fromCharCode(113,95,49,55,95,117,110,115,97,118,101,100,0);
    let updatesh = String.fromCharCode(99,111,109,112,108,101,109,101,110,116,95,97,95,53,49,0);
    let zhuboY = String.fromCharCode(100,118,97,117,100,105,111,95,105,95,49,51,0);
    let rocketT = String.fromCharCode(109,100,97,116,101,95,107,95,57,54,0);
    let statisticsactiveo = false;
    let nterstitials: Array<any> = [81, 502, 766];
    let footballfieldQ = false;
    let iconuserf: Map<any, any> = new Map([[String.fromCharCode(101,120,99,108,117,100,105,110,103,95,55,95,52,55,0),782], [String.fromCharCode(100,101,108,105,118,101,114,95,120,95,55,54,0),234]]);
    let iconsaveimageg = String.fromCharCode(113,117,105,99,95,105,95,57,51,0);
    let bggradiento: Array<any> = [627, 154];
    let awayplayerG: Map<any, any> = new Map([[String.fromCharCode(117,95,51,48,95,119,114,105,116,101,108,111,99,107,0),610], [String.fromCharCode(98,119,114,105,116,101,95,107,95,49,0),123]]);
   if (!updatesh.endsWith(rocketT)) {
       let targetl = String.fromCharCode(98,95,56,55,95,115,116,105,99,107,101,114,115,101,116,0);
       let indicatorP = 0;
       let emptyB = 2.0;
       let philippinesk = String.fromCharCode(119,95,50,95,109,111,100,110,112,102,0);
      let megaphone9 = philippinesk.length >= 6260747;
      do {
         philippinesk = `${targetl.length * parseInt(`${emptyB}`)}`;
         if (megaphone9) {
            break;
         }
      } while (megaphone9 && ((5 & philippinesk.length) >= 2));
       let tempnodatagifr = 5.0;
         emptyB += parseFloat(`${2 - parseInt(`${tempnodatagifr}`)}`);
         tempnodatagifr /= Math.max(3 << (Math.min(Math.abs(parseInt(`${emptyB}`)), 3)), 1);
      if (tempnodatagifr == 5.13) {
          let iconadslinkw: Map<any, any> = new Map([[String.fromCharCode(110,111,114,109,97,108,105,115,101,95,56,95,57,55,0),636], [String.fromCharCode(119,95,54,56,95,99,117,114,108,121,0),960], [String.fromCharCode(112,114,111,114,101,115,100,101,99,95,53,95,49,51,0),250]]);
          let link9 = String.fromCharCode(100,101,108,116,97,95,109,95,49,50,0);
         philippinesk += `${(String.fromCharCode(76,0) == link9 ? link9.length : iconadslinkw.size)}`;
      }
      while (emptyB >= parseFloat(`${targetl.length}`)) {
         emptyB -= parseFloat(`${targetl.length}`);
         break;
      }
       let zhubof = String.fromCharCode(99,104,97,110,103,101,108,111,103,95,109,95,50,49,0);
         targetl += `${indicatorP}`;
       let reducer1 = 2.0;
       let iconbellactivel = 0.0;
      for (let c = 0; c < 2; c++) {
          let j_animationD = 2.0;
          let plasht = String.fromCharCode(97,95,52,57,95,97,109,114,119,98,100,101,99,0);
          let settingi = String.fromCharCode(112,95,54,53,95,115,99,105,105,0);
          let inactiver: Array<any> = [642, 526];
         emptyB += (parseFloat(`${String.fromCharCode(110,0) == targetl ? targetl.length : inactiver.length}`));
         j_animationD *= settingi.length | 2;
         plasht = `${settingi.length << (Math.min(Math.abs(2), 3))}`;
         inactiver = [settingi.length >> (Math.min(plasht.length, 2))];
      }
         zhubof = `${1 | parseInt(`${emptyB}`)}`;
      let iconsaveimagee = 8467701.0 >= reducer1;
      do {
         reducer1 *= targetl.length - parseInt(`${reducer1}`);
         if (iconsaveimagee) {
            break;
         }
      } while ((zhubof.includes(`${reducer1}`)) && iconsaveimagee);
      updatesh += "3";
   }
       let lightC = 0.0;
      if (lightC >= lightC) {
         lightC /= Math.max(parseInt(`${lightC}`) ^ 3, 2);
      }
         lightC /= Math.max(parseInt(`${lightC}`), 5);
         lightC += parseInt(`${lightC}`) - parseInt(`${lightC}`);
      nterstitials = [updatesh.length];
      bggradiento = [nterstitials.length - 1];
   let entryd = footballfieldQ ? !footballfieldQ : footballfieldQ;
   do {
      footballfieldQ = (iconuserf.size & nterstitials.length) >= 89;
      if (entryd) {
         break;
      }
   } while (entryd && (awayplayerG.size <= 4));
   let iconplay0 = String.fromCharCode(113,52,105,111,52,113,109,53,98,0) == whatsappA;
   do {
      whatsappA += `${rocketT.length}`;
      if (iconplay0) {
         break;
      }
   } while ((!whatsappA.startsWith(`${footballfieldQ}`)) && iconplay0);
   let previewE = 7132316 <= iconsaveimageg.length;
   do {
      iconsaveimageg += `${zhuboY.length >> (Math.min(1, rocketT.length))}`;
      if (previewE) {
         break;
      }
   } while ((updatesh.startsWith(iconsaveimageg)) && previewE);
      updatesh = `${updatesh.length | 3}`;
      iconuserf.set(updatesh, updatesh.length % 3);
   if (iconsaveimageg.endsWith(`${rocketT.length}`)) {
      iconsaveimageg = "3";
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
       let loadingspinnerv = true;
    let projectT: Array<any> = [660, 83];
    let subtext0 = String.fromCharCode(112,97,114,115,101,114,115,95,53,95,57,0);
    let whitetick9 = 5.0;
    let liveh = String.fromCharCode(99,111,108,111,110,95,108,95,55,57,0);
    let refreshd = false;
    let schedulerZ = String.fromCharCode(98,95,52,54,0);
    let reactnativeratingse = 2;
    let static_mhd = String.fromCharCode(106,95,51,52,95,101,110,99,114,121,112,116,105,110,103,0);
    let policyL = 0;
    let elementsZ: Map<any, any> = new Map([[String.fromCharCode(102,117,122,122,105,110,103,95,110,95,51,0),true ], [String.fromCharCode(121,111,102,102,115,101,116,95,102,95,55,52,0),true ]]);
    let aread: Array<any> = [739, 780];
    let profilepich = String.fromCharCode(120,95,50,54,95,109,105,115,99,0);
       let phonex = 5;
         phonex -= phonex - 2;
      let pointF = 8063214 >= phonex;
      do {
          let arrowup4 = 3.0;
         phonex ^= parseInt(`${arrowup4}`) / 3;
         if (pointF) {
            break;
         }
      } while (pointF && (1 <= (3 << (Math.min(3, Math.abs(phonex))))));
       let championL = String.fromCharCode(102,95,50,53,95,121,117,118,110,118,99,0);
       let nterstitialQ = String.fromCharCode(106,95,51,49,95,99,97,112,112,101,100,0);
      static_mhd += `${static_mhd.length >> (Math.min(Math.abs(3), 3))}`;
      whitetick9 /= Math.max(3 << (Math.min(3, schedulerZ.length)), 4);
   if ((whitetick9 + subtext0.length) > 5.92 && 5 > (parseInt(`${whitetick9}`) + subtext0.length)) {
       let placeholderS = false;
       let static_fs: Array<any> = [446, 671, 363];
         placeholderS = !placeholderS;
       let predictionarrowJ = false;
       let libjsijniprofiler_ = false;
          let with_a0y = String.fromCharCode(104,95,52,52,95,101,109,112,116,121,0);
          let weibop = String.fromCharCode(115,95,50,56,95,104,97,109,98,117,114,103,101,114,0);
          let episodes = 1;
         predictionarrowJ = predictionarrowJ && !libjsijniprofiler_;
         with_a0y = `${weibop.length}`;
         weibop += `${(weibop == String.fromCharCode(81,0) ? weibop.length : episodes)}`;
         episodes |= (weibop == String.fromCharCode(75,0) ? with_a0y.length : weibop.length);
         static_fs = [2];
       let baiduadsr = String.fromCharCode(105,110,116,101,103,114,97,116,101,100,95,111,95,53,56,0);
      while (predictionarrowJ) {
         predictionarrowJ = (((predictionarrowJ ? 72 : baiduadsr.length) % (Math.max(baiduadsr.length, 10))) < 72);
         break;
      }
      subtext0 = `${reactnativeratingse - 2}`;
   }
   let pathj = 7979554.0 >= whitetick9;
   do {
      whitetick9 -= policyL - elementsZ.size;
      if (pathj) {
         break;
      }
   } while ((3.76 >= (whitetick9 * 4.60)) && pathj);
      projectT.push(static_mhd.length & reactnativeratingse);
   while (5 <= projectT.length) {
       let gifgoalI = false;
       let androidd = String.fromCharCode(102,117,108,108,121,95,51,95,55,50,0);
      while (!gifgoalI) {
         gifgoalI = !androidd.startsWith(`${gifgoalI}`);
         break;
      }
      let dplusm = String.fromCharCode(112,113,57,114,0) == androidd;
      do {
         androidd = `${androidd.length}`;
         if (dplusm) {
            break;
         }
      } while (dplusm && (!androidd.endsWith(`${gifgoalI}`)));
      let iconcurrentmatchU = gifgoalI ? !gifgoalI : gifgoalI;
      do {
          let headera = String.fromCharCode(118,101,110,117,101,115,95,117,95,49,48,0);
          let league7: Array<any> = [921, 151];
         gifgoalI = league7.length < 27;
         headera += `${(String.fromCharCode(54,0) == headera ? headera.length : headera.length)}`;
         league7.push(headera.length * 2);
         if (iconcurrentmatchU) {
            break;
         }
      } while (iconcurrentmatchU && (androidd.includes(`${gifgoalI}`)));
          let statisticsJ = 3;
          let resultl = String.fromCharCode(117,116,105,108,105,116,105,101,115,95,57,95,50,57,0);
          let sound_ = false;
         androidd += `${(resultl.length & (sound_ ? 4 : 2))}`;
         statisticsJ /= Math.max(4, 1 * statisticsJ);
         resultl += `${statisticsJ % 2}`;
      if (gifgoalI) {
          let renewX: Array<any> = [997, 531];
          let d_animationF = 5;
         gifgoalI = 18 <= renewX.length || d_animationF <= 18;
      }
          let refreshborderless_ = 1;
         androidd += `${((gifgoalI ? 1 : 3) * refreshborderless_)}`;
      projectT = [3 * reactnativeratingse];
      break;
   }
      aread = [parseInt(`${whitetick9}`) / (Math.max(aread.length, 10))];
   for (let d = 0; d < 1; d++) {
      static_mhd = "1";
   }

        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

   for (let y = 0; y < 2; y++) {
      projectT.push(2 | subtext0.length);
   }
   while (!loadingspinnerv) {
      liveh += `${parseInt(`${whitetick9}`) | aread.length}`;
      break;
   }
      whitetick9 += subtext0.length + 2;
   for (let d = 0; d < 2; d++) {
      loadingspinnerv = liveh.length < aread.length;
   }
       let zhuboN = 0.0;
       let setting3 = 3;
       let penaltygoalQ = String.fromCharCode(118,111,116,101,114,95,119,95,56,55,0);
         setting3 -= (penaltygoalQ == String.fromCharCode(82,0) ? penaltygoalQ.length : setting3);
      let penaltyshoot4 = zhuboN >= 8061868.0;
      do {
          let klevinE = String.fromCharCode(118,95,50,57,95,101,113,117,101,115,116,0);
          let calendarT: Map<any, any> = new Map([[String.fromCharCode(112,95,49,48,95,108,101,97,102,110,111,100,101,0),String.fromCharCode(106,112,101,103,99,111,109,112,95,109,95,54,57,0)], [String.fromCharCode(115,95,53,56,95,118,109,97,112,115,105,110,0),String.fromCharCode(102,116,118,109,110,111,100,101,95,51,95,52,49,0)]]);
          let x_title2 = String.fromCharCode(97,98,115,111,108,117,116,101,95,111,95,56,50,0);
         zhuboN += 2 + setting3;
         klevinE += `${(klevinE == String.fromCharCode(111,0) ? klevinE.length : calendarT.size)}`;
         calendarT.set(x_title2, 2 | klevinE.length);
         x_title2 += `${3 + calendarT.size}`;
         if (penaltyshoot4) {
            break;
         }
      } while ((4 == (5 >> (Math.min(4, penaltygoalQ.length)))) && penaltyshoot4);
      for (let v = 0; v < 1; v++) {
         setting3 &= setting3;
      }
         setting3 *= setting3 >> (Math.min(penaltygoalQ.length, 2));
         penaltygoalQ += `${setting3}`;
         setting3 <<= Math.min(1, Math.abs(2));
         zhuboN /= Math.max(4, setting3 ^ penaltygoalQ.length);
          let infoi = 1.0;
         setting3 ^= setting3 >> (Math.min(penaltygoalQ.length, 3));
         infoi /= Math.max(3, parseInt(`${infoi}`) ^ 1);
      let sansx = setting3 >= 6551884;
      do {
         setting3 |= 1;
         if (sansx) {
            break;
         }
      } while ((3 == (setting3 / 1)) && sansx);
      policyL %= Math.max(3, ((loadingspinnerv ? 5 : 4) / 3));
   for (let p = 0; p < 2; p++) {
      schedulerZ = `${reactnativeratingse}`;
   }
      schedulerZ = `${liveh.length | projectT.length}`;
      elementsZ.set(`${whitetick9}`, (subtext0 == String.fromCharCode(120,0) ? parseInt(`${whitetick9}`) : subtext0.length));

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });

   for (let u = 0; u < 3; u++) {
       let benefitZ = String.fromCharCode(100,101,105,110,105,116,95,121,95,53,51,0);
       let catalog0 = 4.0;
      for (let i = 0; i < 3; i++) {
          let librrcw = 3.0;
          let n_animationo = String.fromCharCode(109,97,105,110,95,54,95,52,53,0);
          let textlayoutmanagerb = String.fromCharCode(105,116,117,110,101,115,95,110,95,49,52,0);
          let notificationg = 0;
          let questicone = String.fromCharCode(116,101,114,109,105,110,97,108,95,117,95,56,57,0);
         benefitZ += `${(String.fromCharCode(77,0) == textlayoutmanagerb ? parseInt(`${librrcw}`) : textlayoutmanagerb.length)}`;
         librrcw -= parseFloat(`${n_animationo.length | 1}`);
         n_animationo += `${2 ^ questicone.length}`;
         notificationg %= Math.max(3, 2);
         questicone = `${(String.fromCharCode(57,0) == n_animationo ? n_animationo.length : questicone.length)}`;
      }
          let graphW = 4.0;
          let progress9 = true;
         benefitZ = `${((progress9 ? 5 : 4) + parseInt(`${graphW}`))}`;
         benefitZ += `${benefitZ.length / 2}`;
         benefitZ = `${3 & parseInt(`${catalog0}`)}`;
       let mbjscommonA = String.fromCharCode(104,95,54,50,95,110,105,115,116,0);
       let updatesC = String.fromCharCode(101,95,54,56,95,112,114,111,118,105,100,101,100,0);
         catalog0 -= updatesC.length;
      static_mhd += "3";
   }
      reactnativeratingse <<= Math.min(Math.abs(reactnativeratingse >> (Math.min(Math.abs(1), 5))), 3);
      elementsZ = new Map([[`${projectT.length}`, parseInt(`${whitetick9}`)]]);
      projectT = [1 & projectT.length];
   if (whitetick9 == liveh.length) {
      whitetick9 += static_mhd.length ^ elementsZ.size;
   }
       let iconnointernetR = 4.0;
       let corei = String.fromCharCode(114,101,97,100,108,110,95,56,95,51,49,0);
      let scrollviewU = 7567727.0 >= iconnointernetR;
      do {
         iconnointernetR /= Math.max(parseInt(`${iconnointernetR}`) & corei.length, 4);
         if (scrollviewU) {
            break;
         }
      } while (scrollviewU && ((corei.length * iconnointernetR) >= 5.10 || (corei.length * iconnointernetR) >= 5.10));
         iconnointernetR *= 3;
      while (4 <= corei.length) {
         iconnointernetR *= 2;
         break;
      }
      if (5 == (parseInt(`${iconnointernetR}`) * corei.length) && (parseInt(`${iconnointernetR}`) * 5) == 4) {
         corei += `${corei.length * parseInt(`${iconnointernetR}`)}`;
      }
          let mimo1 = 5.0;
         corei += `${parseInt(`${iconnointernetR}`) & parseInt(`${mimo1}`)}`;
         corei = "3";
      loadingspinnerv = elementsZ.size == schedulerZ.length;
       let canvasw = 4.0;
       let iconpointscoreU = 0;
       let iconnewchat1 = 1;
          let libturbomodulejsijnie: Array<any> = [370, 999];
          let dropdownu = String.fromCharCode(108,105,98,109,95,102,95,52,56,0);
         canvasw -= libturbomodulejsijnie.length / (Math.max(2, 10));
         libturbomodulejsijnie = [dropdownu.length];
         dropdownu = `${2 / (Math.max(8, dropdownu.length))}`;
         iconpointscoreU -= 3 - iconnewchat1;
      policyL *= schedulerZ.length & reactnativeratingse;
   if (!refreshd) {
      refreshd = static_mhd.length > projectT.length;
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
