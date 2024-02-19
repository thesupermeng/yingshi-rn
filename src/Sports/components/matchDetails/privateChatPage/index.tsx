import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import createStyles from "./yys_nbatrophy";
import { useAppDispatch, useSelector } from "@hooks";
import { CPressable, CTextInput } from "../../../../components/atoms";
import { SendSvg, SendFilledSvg } from '@static';
import { COMMENT_MAX_INPUT } from "@utility";
import { yysEyeopen } from "@type";
import { yysForward } from "@redux";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux";
import { yysCasting } from "../../../types/yys_history_plash";
import { useTheme } from "@react-navigation/native";
import { Avatar } from "@rneui/base";
import { yysBecome, yysAjax } from "@type";
import { debounce } from "lodash";
import { UnreadCard } from "../../../../components/chat/yys_iconnointernet";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";

type yysIconarrowrightorangeStation = {
    matchID: string,
    streamer: yysCasting,
    sportType: string,
    onInputFocus?: (isFocus: boolean) => void,
}

const PrivateChatPage = ({
    matchID,
    streamer,
    sportType,
    onInputFocus,
}: yysIconarrowrightorangeStation) => {
    const PIN_YIN_ACCEPTED = 20;

    const { colors } = useTheme();
    const styles = useMemo(() => createStyles({ colors }), []);

    const chatState = useSelector<yysForward>('chatReducer');
    const userState = useSelector<yysIconplaySuggestion>('userReducer');
    const [comment, setComment] = useState('');
    const [historyChat, sethistoryChat] = useState<yysBecome[]>([]);
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<yysBecome> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = yysIconstar.isLogin(userState.user);

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
       let kuaishouW = String.fromCharCode(115,101,108,102,95,102,95,57,55,0);
    let iconpipexpandN = String.fromCharCode(122,95,52,55,95,112,115,104,0);
    let main_ky = String.fromCharCode(98,108,111,99,107,115,105,122,101,95,110,95,50,54,0);
    let completeI = 2.0;
    let penaltyshoota = 0.0;
    let homeiconR = 3;
    let defaultprofilepicf: Map<any, any> = new Map([[String.fromCharCode(97,108,101,114,116,115,95,106,95,57,55,0),419], [String.fromCharCode(100,105,115,116,111,114,116,105,111,110,95,122,95,49,49,0),96], [String.fromCharCode(109,97,105,110,102,117,110,99,95,98,95,50,50,0),402]]);
    let searchb = 3.0;
   if ((iconpipexpandN.length / (Math.max(5, 5))) <= 2) {
      iconpipexpandN = `${3 | defaultprofilepicf.size}`;
   }
       let shareblackH: Array<any> = [227, 979, 173];
       let serviceO = 0.0;
       let cricketJ = false;
         cricketJ = shareblackH.length >= 1 || !cricketJ;
         shareblackH = [parseInt(`${serviceO}`) % 2];
      for (let m = 0; m < 2; m++) {
         serviceO *= 2 + parseInt(`${serviceO}`);
      }
         serviceO += parseInt(`${serviceO}`) << (Math.min(shareblackH.length, 2));
         shareblackH = [((cricketJ ? 2 : 2) / (Math.max(1, shareblackH.length)))];
      while (!cricketJ) {
         cricketJ = serviceO <= 99.91 || cricketJ;
         break;
      }
         serviceO += shareblackH.length;
         serviceO += ((cricketJ ? 2 : 1) + parseInt(`${serviceO}`));
      while (4.61 >= (5.35 + serviceO) && 3 >= (shareblackH.length + 4)) {
          let shrunky = 3;
          let ballx = 3.0;
         shareblackH.push(((cricketJ ? 4 : 3) | parseInt(`${ballx}`)));
         shrunky += shrunky * shrunky;
         ballx *= parseFloat(`${shrunky}`);
         break;
      }
      defaultprofilepicf = new Map([[`${penaltyshoota}`, iconpipexpandN.length | parseInt(`${penaltyshoota}`)]]);
   for (let i = 0; i < 2; i++) {
      main_ky += `${iconpipexpandN.length}`;
   }

        const histories = chatState.privateRoomHistory?.filter(e => e.roomId === `private:${matchID}` && e.userId === chatState.userId);

   if (4.36 < (completeI + 4.42) && 4.42 < (parseFloat(`${kuaishouW.length}`) + completeI)) {
       let codegenU = String.fromCharCode(117,95,54,49,95,109,112,101,103,0);
         codegenU += `${codegenU.length % (Math.max(10, codegenU.length))}`;
      let collectiond = codegenU == String.fromCharCode(120,52,50,101,0);
      do {
         codegenU = `${3 - codegenU.length}`;
         if (collectiond) {
            break;
         }
      } while ((codegenU != String.fromCharCode(50,0)) && collectiond);
      let lightY = String.fromCharCode(99,49,117,52,116,122,102,97,122,0) == codegenU;
      do {
         codegenU = "1";
         if (lightY) {
            break;
         }
      } while (lightY && (codegenU.length > codegenU.length));
      kuaishouW += `${parseInt(`${searchb}`) + codegenU.length}`;
   }
       let frame__6R = 0.0;
       let vignettew = 0.0;
      if ((4.28 * vignettew) < 5.62 && 4.32 < (frame__6R - 4.28)) {
         frame__6R /= Math.max(parseInt(`${vignettew}`), 5);
      }
          let libapminsightaL = String.fromCharCode(97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,95,122,95,55,51,0);
         vignettew += 1 + libapminsightaL.length;
      searchb *= parseFloat(`${parseInt(`${completeI}`)}`);
   for (let f = 0; f < 3; f++) {
       let iconarrowrightwhite6 = String.fromCharCode(106,95,51,52,95,103,108,111,98,97,108,116,101,109,0);
       let telegramf = String.fromCharCode(107,105,110,103,95,122,95,53,54,0);
       let homeiconi = 4;
       let frame_wfm = 1.0;
       let buildd = 1.0;
      for (let a = 0; a < 2; a++) {
         telegramf = `${homeiconi ^ parseInt(`${buildd}`)}`;
      }
      if (buildd > telegramf.length) {
          let valueso = 3.0;
          let emoji7 = 4.0;
         buildd += 2 * parseInt(`${buildd}`);
         valueso += parseFloat(`${1 + parseInt(`${emoji7}`)}`);
         emoji7 *= parseInt(`${valueso}`);
      }
       let topicp: Array<any> = [String.fromCharCode(109,97,102,113,95,51,95,57,54,0), String.fromCharCode(105,95,57,53,95,119,105,116,104,105,110,0), String.fromCharCode(115,97,110,100,98,111,120,95,97,95,52,48,0)];
       let watchnowbge: Array<any> = [304, 276, 406];
         homeiconi &= 3;
      if (4 < (topicp.length - 3) && 3 < (topicp.length - homeiconi)) {
          let themeu = String.fromCharCode(109,111,100,97,108,108,121,95,118,95,57,51,0);
          let referrerc = String.fromCharCode(109,95,56,57,95,115,117,98,116,108,101,0);
          let libglogQ = 4.0;
          let iconwatchnowK = 3.0;
         homeiconi <<= Math.min(4, Math.abs(1));
         themeu += `${referrerc.length | 2}`;
         referrerc += `${themeu.length | 3}`;
         libglogQ *= parseFloat(`${parseInt(`${iconwatchnowK}`) & 1}`);
         iconwatchnowK /= Math.max(parseFloat(`${parseInt(`${iconwatchnowK}`) * 1}`), 3);
      }
      if ((5 * homeiconi) <= 1) {
         homeiconi -= iconarrowrightwhite6.length >> (Math.min(1, topicp.length));
      }
      if ((5 << (Math.min(5, iconarrowrightwhite6.length))) > 5 || 5 > (iconarrowrightwhite6.length | 5)) {
         iconarrowrightwhite6 = `${topicp.length / (Math.max(iconarrowrightwhite6.length, 2))}`;
      }
      while (4.90 < (frame_wfm - 2.81) && (buildd - 2.81) < 2.94) {
         frame_wfm += 3 >> (Math.min(Math.abs(parseInt(`${frame_wfm}`)), 5));
         break;
      }
         homeiconi |= parseInt(`${buildd}`) + 2;
         iconarrowrightwhite6 += `${3 << (Math.min(Math.abs(parseInt(`${buildd}`)), 2))}`;
       let halffieldimage4 = String.fromCharCode(116,95,53,49,95,112,114,101,100,105,99,116,120,0);
       let settingsK = String.fromCharCode(106,95,56,95,98,97,99,107,101,110,100,0);
         watchnowbge.push((String.fromCharCode(109,0) == iconarrowrightwhite6 ? telegramf.length : iconarrowrightwhite6.length));
          let popupL = String.fromCharCode(98,95,55,56,95,116,101,120,116,117,114,101,100,115,112,101,110,99,0);
         frame_wfm -= (halffieldimage4 == String.fromCharCode(122,0) ? topicp.length : halffieldimage4.length);
         popupL = `${popupL.length % (Math.max(popupL.length, 8))}`;
         settingsK += `${settingsK.length | homeiconi}`;
      if (watchnowbge.length == 2) {
         watchnowbge.push(parseInt(`${frame_wfm}`));
      }
      main_ky += `${1 / (Math.max(7, homeiconR))}`;
   }

        if (!histories || histories.length === 0) return;

   let iconplayi = 7895722.0 <= penaltyshoota;
   do {
      penaltyshoota -= parseInt(`${searchb}`);
      if (iconplayi) {
         break;
      }
   } while (iconplayi && (3.11 < (iconpipexpandN.length - penaltyshoota) || (3.11 - penaltyshoota) < 3.39));
       let orangeclockG = 5.0;
       let defaultteamV: Array<any> = [978, 166, 931];
       let phoneshareE: Array<any> = [String.fromCharCode(116,95,53,49,95,114,116,115,112,0), String.fromCharCode(106,95,53,56,95,101,112,111,108,108,0), String.fromCharCode(100,95,57,53,95,99,111,100,101,102,0)];
          let telegramc = 3.0;
         defaultteamV = [defaultteamV.length & phoneshareE.length];
         telegramc -= parseFloat(`${parseInt(`${telegramc}`) & parseInt(`${telegramc}`)}`);
      iconpipexpandN = `${main_ky.length & 2}`;
      orangeclockG -= 1;
   if ((completeI * penaltyshoota) < 4.77 && (penaltyshoota + 4.77) < 3.75) {
      penaltyshoota -= 1 << (Math.min(3, main_ky.length));
   }

        if (historyChat.length === 0) {

   if (kuaishouW.length <= homeiconR) {
      kuaishouW = `${(main_ky == String.fromCharCode(82,0) ? defaultprofilepicf.size : main_ky.length)}`;
   }
      iconpipexpandN += `${parseInt(`${completeI}`) >> (Math.min(main_ky.length, 2))}`;
   if ((defaultprofilepicf.size % (Math.max(main_ky.length, 7))) > 1 || 4 > (1 % (Math.max(4, main_ky.length)))) {
      defaultprofilepicf = new Map([[`${completeI}`, parseInt(`${completeI}`) % 1]]);
   }
            sethistoryChat([histories[histories.length - 1]]);
        } else {

      penaltyshoota /= Math.max(1, parseInt(`${completeI}`));
      searchb -= parseFloat(`${parseInt(`${completeI}`)}`);
   for (let d = 0; d < 1; d++) {
      homeiconR <<= Math.min(Math.abs(1), 5);
   }
            const indexFound = histories.findIndex(e => e.joinDate === historyChat[0].joinDate);

   for (let e = 0; e < 3; e++) {
      defaultprofilepicf = new Map([[iconpipexpandN, parseInt(`${searchb}`) & iconpipexpandN.length]]);
   }
   for (let g = 0; g < 1; g++) {
      searchb += parseFloat(`${parseInt(`${completeI}`) / 2}`);
   }
      homeiconR >>= Math.min(3, Math.abs(2));

            if (indexFound === -1 || (indexFound - 1) < 0) return;

      main_ky += `${1 + parseInt(`${penaltyshoota}`)}`;
      main_ky = `${parseInt(`${penaltyshoota}`)}`;
   for (let z = 0; z < 3; z++) {
      kuaishouW = `${parseInt(`${searchb}`) & homeiconR}`;
   }

            sethistoryChat(prev => [histories[indexFound - 1]].concat(prev));
        }
    }, 500);

    const renderChatGroup = useCallback(({ item }: { item: yysAjax }) => {
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

    const renderMessageItem = useCallback(({ item }: { item: yysEyeopen }) => {
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
                            : require("../../../../../static/images/loadingspinnerPlaylist.png")
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
                        : require("../../../../../static/images/loadingspinnerPlaylist.png")
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
       let apple6: Array<any> = [86, 12];
    let starh: Map<any, any> = new Map([[String.fromCharCode(103,95,49,56,95,111,112,101,110,103,108,0),137], [String.fromCharCode(110,95,57,52,95,118,97,108,117,101,115,0),394], [String.fromCharCode(116,111,111,108,95,101,95,56,53,0),762]]);
    let iconviewerM = 3.0;
    let render8 = true;
    let lightn = String.fromCharCode(122,101,114,111,98,108,111,98,95,48,95,50,56,0);
    let minivodu = false;
    let statsnomoredataR = String.fromCharCode(98,110,104,101,120,95,97,95,51,51,0);
    let libfbjniv = String.fromCharCode(114,97,116,105,110,103,95,120,95,49,48,0);
    let libfileQ = String.fromCharCode(117,95,53,48,95,113,112,101,108,0);
    let expirede: Array<any> = [481, 722, 449];
    let videoU = 1.0;
    let ewarded5 = 4.0;
       let awayplayerm = false;
       let w_manager8: Array<any> = [935, 187];
       let tramini6 = String.fromCharCode(120,109,108,95,52,95,51,56,0);
         tramini6 = `${(String.fromCharCode(68,0) == tramini6 ? w_manager8.length : tramini6.length)}`;
          let libhermesi: Array<any> = [String.fromCharCode(119,95,51,56,95,100,114,105,102,116,0), String.fromCharCode(99,108,111,115,101,115,95,54,95,53,56,0)];
         w_manager8.push(tramini6.length);
         libhermesi.push(3 & libhermesi.length);
      if ((w_manager8.length / 5) < 2 || awayplayerm) {
          let videobufferloading1: Array<any> = [String.fromCharCode(103,95,54,52,95,101,110,115,0), String.fromCharCode(99,111,110,100,95,105,95,56,56,0), String.fromCharCode(112,95,50,55,95,112,111,115,116,105,111,110,0)];
          let indicatord = 4.0;
          let libyogaa = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,105,111,110,95,109,95,51,55,0);
          let reddownarrowR = false;
         w_manager8.push((String.fromCharCode(122,0) == libyogaa ? (reddownarrowR ? 5 : 3) : libyogaa.length));
         videobufferloading1 = [videobufferloading1.length];
         indicatord -= parseInt(`${indicatord}`);
         reddownarrowR = indicatord == 6.81 || videobufferloading1.length == 39;
      }
      let iconclose2 = tramini6.length >= 9060482;
      do {
         tramini6 += `${tramini6.length}`;
         if (iconclose2) {
            break;
         }
      } while (iconclose2 && (!tramini6.includes(`${awayplayerm}`)));
      for (let v = 0; v < 1; v++) {
         awayplayerm = ((w_manager8.length * (awayplayerm ? 3 : w_manager8.length)) == 3);
      }
          let megaphoneU = String.fromCharCode(99,111,109,112,97,114,101,112,111,119,95,109,95,50,55,0);
          let settingE = String.fromCharCode(100,95,52,55,95,100,101,115,99,114,105,112,116,105,111,110,0);
         w_manager8 = [1 + megaphoneU.length];
         megaphoneU += `${settingE.length}`;
         settingE = `${settingE.length}`;
         tramini6 = `${(w_manager8.length - (awayplayerm ? 3 : 1))}`;
         tramini6 += `${tramini6.length * 2}`;
       let libreactnativeblobX: Map<any, any> = new Map([[String.fromCharCode(120,95,49,50,95,112,111,114,116,101,114,0),String.fromCharCode(97,95,53,50,95,115,97,102,97,114,121,0)], [String.fromCharCode(114,95,55,57,0),String.fromCharCode(116,111,103,103,108,105,110,103,95,120,95,50,51,0)]]);
      lightn += `${2 * parseInt(`${videoU}`)}`;
      libfileQ = `${expirede.length & 1}`;
   if (!render8) {
      render8 = 20 <= apple6.length;
   }
   if (!statsnomoredataR.startsWith(`${libfileQ.length}`)) {
       let vignetteB = 5;
       let videon = 5.0;
      if (5.49 == videon) {
         vignetteB += 3;
      }
      while ((vignetteB % (Math.max(2, 6))) > 3) {
         vignetteB ^= vignetteB << (Math.min(4, Math.abs(1)));
         break;
      }
          let owngoalG = 1.0;
          let contextj = 0.0;
          let pauseX: Array<any> = [String.fromCharCode(115,117,109,109,101,100,95,107,95,50,53,0), String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,101,95,52,57,0)];
         videon *= parseFloat(`${2}`);
         owngoalG *= parseInt(`${contextj}`);
         contextj -= parseFloat(`${3}`);
         pauseX = [parseInt(`${owngoalG}`)];
      let arrowrightwithtailK = vignetteB >= 4966527;
      do {
          let latnX: Map<any, any> = new Map([[String.fromCharCode(120,95,56,57,95,115,112,111,116,0),103], [String.fromCharCode(119,95,50,51,95,99,111,108,99,111,108,0),116], [String.fromCharCode(115,116,114,116,111,108,108,95,108,95,54,0),146]]);
          let mountingD: Array<any> = [122, 535, 806];
         vignetteB ^= latnX.size;
         latnX = new Map([[`${mountingD.length}`, 1]]);
         mountingD = [3];
         if (arrowrightwithtailK) {
            break;
         }
      } while (arrowrightwithtailK && (5 >= (4 | vignetteB)));
      let modityr = videon <= 8327967.0;
      do {
         videon *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${videon}`)), 5))}`);
         if (modityr) {
            break;
         }
      } while ((2.93 == (videon / (Math.max(6, vignetteB)))) && modityr);
          let balll = false;
         vignetteB ^= vignetteB;
         balll = !balll;
      statsnomoredataR = "3";
   }
   let overlayo = lightn == String.fromCharCode(50,112,101,54,48,49,112,116,57,55,0);
   do {
       let edita = String.fromCharCode(115,116,97,110,100,97,108,111,110,101,95,100,95,57,55,0);
       let livesharex = 2;
         edita = `${livesharex}`;
         livesharex *= edita.length;
      for (let k = 0; k < 1; k++) {
         edita += "3";
      }
      while ((edita.length - livesharex) <= 1 || (1 - livesharex) <= 3) {
         edita += `${edita.length}`;
         break;
      }
       let assetsz: Array<any> = [234, 303, 879];
       let combinew: Array<any> = [641, 497];
          let shareblack5: Map<any, any> = new Map([[String.fromCharCode(101,95,52,56,95,109,111,100,101,0),313], [String.fromCharCode(110,95,53,52,95,99,108,111,115,101,0),180]]);
          let floaterC = true;
          let usernameX = String.fromCharCode(118,95,53,95,104,101,97,114,116,98,101,97,116,0);
         livesharex <<= Math.min(Math.abs(shareblack5.size + 2), 1);
         shareblack5.set(usernameX, (usernameX == String.fromCharCode(120,0) ? usernameX.length : (floaterC ? 3 : 1)));
         floaterC = !floaterC;
      lightn += `${(parseInt(`${videoU}`) | (render8 ? 4 : 1))}`;
      if (overlayo) {
         break;
      }
   } while (overlayo && (2 == statsnomoredataR.length && lightn == String.fromCharCode(84,0)));

        if (comment.trim().length === 0 || !isCommentValid) return;

   if (!statsnomoredataR.includes(`${minivodu}`)) {
      statsnomoredataR = `${((render8 ? 1 : 2) | parseInt(`${videoU}`))}`;
   }
      minivodu = iconviewerM < 12.92;
   for (let u = 0; u < 3; u++) {
      starh = new Map([[libfbjniv, (String.fromCharCode(87,0) == libfbjniv ? libfbjniv.length : (minivodu ? 1 : 5))]]);
   }
       let greytickj = String.fromCharCode(109,95,49,52,95,119,101,105,103,104,116,0);
          let assets_ = String.fromCharCode(109,97,102,113,95,110,95,52,54,0);
          let historyR = String.fromCharCode(112,114,101,115,99,97,108,101,95,106,95,55,50,0);
         greytickj = "1";
         assets_ = `${assets_.length}`;
         historyR = `${(assets_ == String.fromCharCode(82,0) ? assets_.length : historyR.length)}`;
      if (greytickj.length >= 5) {
         greytickj += "3";
      }
         greytickj += `${greytickj.length}`;
      iconviewerM *= (parseFloat(`${lightn == String.fromCharCode(105,0) ? starh.size : lightn.length}`));
   for (let u = 0; u < 1; u++) {
       let clocka = String.fromCharCode(116,104,114,111,119,95,115,95,51,57,0);
       let neonR = String.fromCharCode(100,105,115,116,112,111,105,110,116,95,53,95,53,52,0);
       let countdownL = 1.0;
      if ((parseInt(`${countdownL}`) * 3) >= 2 || (3 + neonR.length) >= 1) {
          let downarrowN = 0;
          let analyticsH = String.fromCharCode(100,95,51,48,95,109,98,102,105,108,116,101,114,0);
          let largebrightnessq = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,105,110,103,95,116,95,53,0);
          let iconarrowrightorangeM = 0;
         countdownL /= Math.max(parseFloat(`${downarrowN | 2}`), 4);
         downarrowN += 3 * iconarrowrightorangeM;
         analyticsH += `${iconarrowrightorangeM}`;
         largebrightnessq += `${2 ^ analyticsH.length}`;
      }
          let homeactiveQ = 5;
          let libtobB = 4;
          let termsQ = String.fromCharCode(99,95,50,55,95,118,116,97,98,0);
         neonR += `${(neonR == String.fromCharCode(56,0) ? parseInt(`${countdownL}`) : neonR.length)}`;
         homeactiveQ >>= Math.min(2, Math.abs(libtobB));
         termsQ = `${homeactiveQ % 3}`;
          let cross_ = String.fromCharCode(100,95,51,53,95,98,111,117,110,100,115,112,101,99,105,102,105,99,0);
          let minimize4 = 5;
         neonR += `${(String.fromCharCode(122,0) == clocka ? cross_.length : clocka.length)}`;
         cross_ += `${minimize4}`;
         countdownL /= Math.max(parseFloat(`${1}`), 5);
         countdownL -= parseFloat(`${parseInt(`${countdownL}`)}`);
      if (clocka.length <= 1 && neonR != String.fromCharCode(100,0)) {
          let placeholderZ = 4.0;
         neonR = `${clocka.length & parseInt(`${placeholderZ}`)}`;
      }
      while (clocka.startsWith(`${countdownL}`)) {
         countdownL -= parseFloat(`${clocka.length}`);
         break;
      }
         countdownL += parseFloat(`${neonR.length}`);
      let casting_ = clocka == String.fromCharCode(120,120,115,0);
      do {
          let vignettet = String.fromCharCode(116,95,50,48,95,100,117,114,98,105,110,0);
          let imageactionliveD: Map<any, any> = new Map([[String.fromCharCode(120,95,54,56,95,99,114,101,97,116,101,101,120,0),9], [String.fromCharCode(105,95,54,48,95,104,105,103,104,108,105,103,104,116,97,98,108,101,0),972], [String.fromCharCode(110,95,56,49,95,114,115,97,122,0),890]]);
         clocka += `${imageactionliveD.size}`;
         vignettet = `${(vignettet == String.fromCharCode(108,0) ? vignettet.length : vignettet.length)}`;
         imageactionliveD.set(vignettet, vignettet.length & vignettet.length);
         if (casting_) {
            break;
         }
      } while ((3 >= clocka.length) && casting_);
      libfbjniv = `${libfileQ.length}`;
   }

        appDispatch(sendChatMessage({
            message: comment,
            isPrivate: true,
        }));

       let savem = String.fromCharCode(114,95,54,48,95,111,117,114,0);
       let downloaderY = 3.0;
       let headerm = String.fromCharCode(118,95,50,53,95,111,110,108,121,0);
          let vignetted: Array<any> = [54, 563, 51];
          let userG = 5.0;
          let delegate_a8N = 0.0;
         downloaderY /= Math.max(2, parseInt(`${userG}`) | 2);
         vignetted.push(vignetted.length);
         userG += 2;
         delegate_a8N += parseFloat(`${parseInt(`${delegate_a8N}`) % (Math.max(vignetted.length, 7))}`);
       let gifte = String.fromCharCode(114,101,112,111,114,116,115,95,104,95,55,55,0);
       let renderL = String.fromCharCode(112,105,120,101,108,102,111,114,109,97,116,95,54,95,51,54,0);
          let specm = String.fromCharCode(97,95,50,53,95,97,115,115,111,99,105,97,116,101,100,0);
         renderL += "2";
         specm = `${specm.length}`;
      if (!savem.includes(`${headerm.length}`)) {
          let predictionactiveD = String.fromCharCode(100,101,112,101,110,100,115,95,108,95,56,49,0);
         headerm += `${gifte.length / (Math.max(renderL.length, 3))}`;
         predictionactiveD += `${predictionactiveD.length | predictionactiveD.length}`;
      }
      if (!renderL.endsWith(gifte)) {
         renderL += `${renderL.length - savem.length}`;
      }
      let topone = headerm == String.fromCharCode(115,52,112,120,113,115,52,109,0);
      do {
         headerm += `${gifte.length * headerm.length}`;
         if (topone) {
            break;
         }
      } while (topone && (headerm.endsWith(savem)));
      while (gifte.startsWith(renderL)) {
         gifte = `${3 * parseInt(`${downloaderY}`)}`;
         break;
      }
      while (1 == savem.length) {
         savem = `${renderL.length << (Math.min(Math.abs(1), 3))}`;
         break;
      }
      let reactnativejsQ = 6911964 <= headerm.length;
      do {
         headerm = `${2 / (Math.max(2, renderL.length))}`;
         if (reactnativejsQ) {
            break;
         }
      } while (reactnativejsQ && (!gifte.endsWith(headerm)));
      iconviewerM /= Math.max(parseFloat(`${3}`), 1);
       let predictionwinS = 5.0;
      if ((predictionwinS + 4.50) >= 5.62 || 4.50 >= (predictionwinS + predictionwinS)) {
         predictionwinS += parseFloat(`${parseInt(`${predictionwinS}`)}`);
      }
      if (5.21 >= predictionwinS) {
         predictionwinS -= parseFloat(`${parseInt(`${predictionwinS}`)}`);
      }
         predictionwinS *= parseFloat(`${1}`);
      libfbjniv = `${((minivodu ? 4 : 1) >> (Math.min(expirede.length, 3)))}`;
      apple6.push((String.fromCharCode(74,0) == statsnomoredataR ? statsnomoredataR.length : libfileQ.length));
   let iconarrowleftu = 9419075 <= starh.size;
   do {
       let auto_ing = 5;
       let assistp = 4.0;
       let anytimev = String.fromCharCode(113,95,53,49,95,105,109,101,110,115,105,111,110,0);
       let encryptorx = String.fromCharCode(100,95,53,53,95,112,114,101,116,119,105,100,100,108,101,0);
       let page3: Map<any, any> = new Map([[String.fromCharCode(97,116,116,97,99,104,109,101,110,116,95,108,95,53,52,0),String.fromCharCode(119,95,57,54,95,118,97,108,117,101,0)], [String.fromCharCode(113,95,50,57,95,99,114,101,97,116,101,100,0),String.fromCharCode(109,97,105,110,112,97,103,101,95,57,95,52,57,0)]]);
      while (anytimev.length <= 2) {
         assistp *= parseFloat(`${page3.size >> (Math.min(encryptorx.length, 4))}`);
         break;
      }
      while ((anytimev.length << (Math.min(Math.abs(3), 1))) == 3 && (anytimev.length << (Math.min(3, Math.abs(page3.size)))) == 3) {
         anytimev += `${anytimev.length / (Math.max(9, encryptorx.length))}`;
         break;
      }
       let settingsF: Map<any, any> = new Map([[String.fromCharCode(108,97,110,100,115,99,97,112,101,95,110,95,56,55,0),897], [String.fromCharCode(109,111,110,111,95,105,95,52,53,0),468]]);
      if (!anytimev.endsWith(`${page3.size}`)) {
         anytimev += `${2 / (Math.max(2, encryptorx.length))}`;
      }
      let w_countR = String.fromCharCode(100,102,111,97,107,54,97,110,102,53,0) == encryptorx;
      do {
          let whitetickE: Array<any> = [150, 251];
         encryptorx = `${3 | anytimev.length}`;
         whitetickE = [2];
         if (w_countR) {
            break;
         }
      } while ((4 <= (settingsF.size << (Math.min(Math.abs(3), 5))) || 1 <= (3 << (Math.min(4, Math.abs(settingsF.size))))) && w_countR);
      let servicer = 4988551.0 >= assistp;
      do {
          let libfbG = 5.0;
          let v_centerK: Array<any> = [584, 801, 447];
         assistp /= Math.max(parseFloat(`${page3.size}`), 4);
         libfbG /= Math.max(parseFloat(`${2 % (Math.max(8, v_centerK.length))}`), 2);
         v_centerK = [2 >> (Math.min(Math.abs(parseInt(`${libfbG}`)), 4))];
         if (servicer) {
            break;
         }
      } while (servicer && ((5 - anytimev.length) <= 5));
         assistp -= parseFloat(`${1 ^ encryptorx.length}`);
      while (settingsF.get(`${assistp}`) != null) {
         assistp *= (parseFloat(`${anytimev == String.fromCharCode(71,0) ? anytimev.length : page3.size}`));
         break;
      }
      for (let o = 0; o < 2; o++) {
         encryptorx = `${anytimev.length}`;
      }
         encryptorx += `${auto_ing}`;
      while (2 > (page3.size % (Math.max(7, encryptorx.length))) || 5 > (encryptorx.length % 2)) {
         encryptorx = `${encryptorx.length}`;
         break;
      }
      starh.set(lightn, 3 & statsnomoredataR.length);
      if (iconarrowleftu) {
         break;
      }
   } while (iconarrowleftu && (4 > starh.size));
   while ((videoU - parseFloat(`${expirede.length}`)) >= 3.9 && (expirede.length & 3) >= 5) {
      expirede = [2];
      break;
   }

        setComment('');

       let regengn: Map<any, any> = new Map([[String.fromCharCode(119,95,52,95,102,99,112,117,98,108,105,115,104,0),287], [String.fromCharCode(114,95,51,48,95,99,117,114,116,97,105,110,115,0),81]]);
       let rooth = 1;
       let iconnewchatt = 1;
      if (regengn.get(`${rooth}`) != null) {
          let sharemodals = 0;
          let renderl = String.fromCharCode(119,95,49,51,95,115,112,101,99,105,102,105,99,97,116,105,111,110,0);
          let subtextg = String.fromCharCode(119,95,54,95,110,111,100,111,119,110,0);
         rooth &= renderl.length;
         sharemodals >>= Math.min(Math.abs((String.fromCharCode(109,0) == subtextg ? subtextg.length : sharemodals)), 5);
         renderl += `${(subtextg == String.fromCharCode(86,0) ? subtextg.length : sharemodals)}`;
      }
       let libreactnativeblob_ = 2.0;
         rooth &= rooth >> (Math.min(Math.abs(1), 4));
      let acceptedf = rooth <= 8494600;
      do {
         rooth /= Math.max(3, iconnewchatt);
         if (acceptedf) {
            break;
         }
      } while (acceptedf && (5 < (5 - iconnewchatt) && (5 - rooth) < 4));
          let greyticks = String.fromCharCode(99,101,110,116,114,111,105,100,115,95,50,95,49,52,0);
         rooth <<= Math.min(Math.abs(parseInt(`${libreactnativeblob_}`) % 2), 1);
         greyticks = `${2 - greyticks.length}`;
         rooth <<= Math.min(Math.abs(2), 4);
       let whistleR = 3.0;
      for (let u = 0; u < 1; u++) {
         libreactnativeblob_ *= parseFloat(`${regengn.size + 2}`);
      }
      for (let e = 0; e < 3; e++) {
          let overS: Array<any> = [209, 587, 257];
          let placeholder0 = 1.0;
         rooth >>= Math.min(Math.abs(iconnewchatt), 5);
         overS.push(3);
         placeholder0 -= parseInt(`${placeholder0}`);
      }
      render8 = libfileQ.startsWith(`${rooth}`);
   let weibom = 6130681.0 >= videoU;
   do {
      videoU += (parseFloat(`${String.fromCharCode(50,0) == lightn ? starh.size : lightn.length}`));
      if (weibom) {
         break;
      }
   } while (weibom && ((4 * parseInt(`${videoU}`)) > 5 && (lightn.length % (Math.max(4, 7))) > 3));
   let manifestc = starh.size >= 5506883;
   do {
       let penaltygoal4 = 1;
       let otherq = false;
       let orangetickc = String.fromCharCode(109,95,51,54,95,119,101,98,109,105,100,115,0);
       let libreactnativeblobD: Array<any> = [String.fromCharCode(116,95,50,49,95,110,116,114,111,0), String.fromCharCode(112,95,56,52,95,112,104,111,116,111,0), String.fromCharCode(103,95,53,54,95,114,101,99,101,112,116,105,111,110,0)];
      for (let v = 0; v < 2; v++) {
          let yellowscoreballr = 3.0;
          let greenarrowupU = 3;
          let playq = true;
          let othermatchdetailbgk: Array<any> = [278, 447];
          let countdownr = true;
         orangetickc += `${orangetickc.length}`;
         yellowscoreballr /= Math.max(3, 4);
         greenarrowupU %= Math.max(parseInt(`${yellowscoreballr}`), 1);
         playq = 11.78 < yellowscoreballr;
         othermatchdetailbgk.push(othermatchdetailbgk.length);
         countdownr = othermatchdetailbgk.length >= 81;
      }
          let vinit_lm = String.fromCharCode(117,115,116,111,109,95,115,95,51,57,0);
          let singaporea = 4;
          let libglogd: Map<any, any> = new Map([[String.fromCharCode(105,115,112,97,116,99,104,95,107,95,49,48,48,0),636], [String.fromCharCode(103,95,53,49,95,109,101,109,97,108,105,103,110,0),157]]);
         libreactnativeblobD.push((orangetickc.length * (otherq ? 5 : 2)));
         vinit_lm = `${singaporea << (Math.min(Math.abs(2), 4))}`;
         singaporea *= 3 | singaporea;
         libglogd.set(`${singaporea}`, libglogd.size + 1);
      let sportr = libreactnativeblobD.length <= 5549509;
      do {
          let login9 = String.fromCharCode(99,97,116,99,104,115,105,103,110,97,108,95,111,95,55,53,0);
          let textinput1 = String.fromCharCode(98,95,51,49,95,97,117,116,104,111,114,105,116,121,0);
         libreactnativeblobD.push(login9.length - 1);
         login9 += `${textinput1.length - 3}`;
         textinput1 += `${textinput1.length - 3}`;
         if (sportr) {
            break;
         }
      } while (sportr && (libreactnativeblobD.length <= 1));
      for (let i = 0; i < 1; i++) {
         penaltygoal4 += (orangetickc == String.fromCharCode(66,0) ? orangetickc.length : libreactnativeblobD.length);
      }
         orangetickc = "2";
         otherq = 29 < orangetickc.length;
      for (let a = 0; a < 2; a++) {
         orangetickc += `${orangetickc.length | libreactnativeblobD.length}`;
      }
      let policyB = 8191206 <= penaltygoal4;
      do {
          let readQ: Array<any> = [661, 91];
          let baiduadsI: Map<any, any> = new Map([[String.fromCharCode(97,99,99,111,114,100,105,110,103,95,53,95,50,56,0),String.fromCharCode(114,101,115,97,109,112,95,117,95,51,0)], [String.fromCharCode(97,95,55,57,95,119,117,110,100,101,102,0),String.fromCharCode(114,101,99,97,108,99,95,48,95,49,49,0)]]);
          let chartM = false;
          let index6 = true;
          let iconwatchnowP = true;
         penaltygoal4 >>= Math.min(parseInt(`${Math.abs(((otherq ? 2 : 5) / (Math.max(penaltygoal4, 1))))}`), 5);
         readQ = [1];
         baiduadsI.set(`${index6}`, (3 * (index6 ? 5 : 5)));
         chartM = readQ.length > 39 && baiduadsI.size > 39;
         iconwatchnowP = (chartM ? !index6 : chartM);
         if (policyB) {
            break;
         }
      } while (policyB && (4 <= (libreactnativeblobD.length * 1) || (libreactnativeblobD.length * penaltygoal4) <= 1));
         penaltygoal4 %= Math.max((orangetickc == String.fromCharCode(87,0) ? penaltygoal4 : orangetickc.length), 3);
      while (5 < (4 % (Math.max(10, orangetickc.length)))) {
          let videocommon2 = false;
          let scorepopsoundv = 2;
          let libfabricjni4 = String.fromCharCode(102,114,97,109,101,99,114,99,95,107,95,54,53,0);
         orangetickc += `${((otherq ? 1 : 3) | (videocommon2 ? 5 : 2))}`;
         videocommon2 = (scorepopsoundv & libfabricjni4.length) < 63;
         scorepopsoundv %= Math.max(5, 2);
         libfabricjni4 += `${(String.fromCharCode(105,0) == libfabricjni4 ? libfabricjni4.length : scorepopsoundv)}`;
         break;
      }
      if (orangetickc.length >= 1) {
         otherq = !otherq;
      }
          let livesharem = String.fromCharCode(109,111,100,105,102,105,101,114,95,102,95,51,55,0);
         otherq = (89 > (livesharem.length % (Math.max(1, (!otherq ? 89 : livesharem.length)))));
      starh = new Map([[lightn, (lightn == String.fromCharCode(107,0) ? parseInt(`${videoU}`) : lightn.length)]]);
      if (manifestc) {
         break;
      }
   } while ((!Array.from(starh.values()).includes(apple6.length)) && manifestc);
   if (libfileQ.length <= 4) {
       let arrowselectdownL: Array<any> = [655, 48, 798];
       let videojsK = String.fromCharCode(109,118,115,97,100,95,114,95,55,54,0);
         arrowselectdownL = [(videojsK == String.fromCharCode(121,0) ? videojsK.length : arrowselectdownL.length)];
      for (let c = 0; c < 1; c++) {
          let javaa = String.fromCharCode(119,116,118,102,105,108,101,95,118,95,53,0);
          let libreacte = 0.0;
          let sortq = 0;
         arrowselectdownL = [2];
         javaa = `${(String.fromCharCode(104,0) == javaa ? javaa.length : parseInt(`${libreacte}`))}`;
         libreacte -= parseInt(`${libreacte}`);
         sortq <<= Math.min(Math.abs(javaa.length >> (Math.min(Math.abs(3), 1))), 2);
      }
         videojsK += "2";
         videojsK = `${3 ^ videojsK.length}`;
         arrowselectdownL.push(arrowselectdownL.length * videojsK.length);
      while (5 <= (2 | videojsK.length)) {
          let whitebellN = 0.0;
          let productM = String.fromCharCode(106,95,53,49,95,112,114,105,110,116,118,97,108,0);
          let shootyesgoalN = true;
         arrowselectdownL.push(videojsK.length >> (Math.min(2, Math.abs(parseInt(`${whitebellN}`)))));
         whitebellN /= Math.max(3, parseFloat(`${productM.length}`));
         productM = `${((shootyesgoalN ? 2 : 1) >> (Math.min(productM.length, 3)))}`;
         break;
      }
      statsnomoredataR = "1";
   }
       let invitef = 5;
       let datah = false;
       let rocket_ = 3.0;
         datah = !datah;
         datah = (rocket_ + invitef) >= 19;
      if ((invitef % 2) < 5) {
         invitef |= (invitef % (Math.max(3, (datah ? 5 : 4))));
      }
      if (3 >= (invitef % (Math.max(5, 5)))) {
          let homeactiveN = String.fromCharCode(102,105,110,97,108,105,122,101,114,95,105,95,52,56,0);
          let pangle7: Map<any, any> = new Map([[String.fromCharCode(100,95,49,52,95,97,99,111,108,111,114,115,0),85], [String.fromCharCode(118,95,54,54,95,116,114,97,110,115,108,97,116,101,0),350]]);
          let thailandO = 2;
          let exampleimageV = String.fromCharCode(115,101,103,105,100,95,107,95,51,50,0);
         datah = pangle7.size <= 26;
         homeactiveN = `${thailandO & exampleimageV.length}`;
         pangle7 = new Map([[`${thailandO}`, exampleimageV.length ^ thailandO]]);
      }
       let footbally = String.fromCharCode(117,110,114,101,102,99,111,117,110,116,95,53,95,49,48,48,0);
      for (let c = 0; c < 3; c++) {
         invitef += (parseInt(`${rocket_}`) >> (Math.min(1, Math.abs((datah ? 1 : 2)))));
      }
         invitef += ((datah ? 2 : 1) ^ footbally.length);
      let v_unlockX = invitef >= 7826495;
      do {
          let whitetickG = 5;
          let lightT = 0.0;
          let emptyH: Array<any> = [String.fromCharCode(119,95,55,95,110,111,99,104,101,99,107,0), String.fromCharCode(115,98,97,100,95,120,95,49,54,0)];
          let macauR = false;
         invitef %= Math.max(1, 3 >> (Math.min(Math.abs(parseInt(`${lightT}`)), 5)));
         whitetickG <<= Math.min(Math.abs(2 ^ emptyH.length), 2);
         lightT -= (parseFloat(`${(macauR ? 1 : 3) * whitetickG}`));
         emptyH = [3];
         if (v_unlockX) {
            break;
         }
      } while (((rocket_ + invitef) == 4.91) && v_unlockX);
          let tempw = String.fromCharCode(112,114,101,100,105,99,116,105,111,110,115,95,102,95,57,48,0);
         datah = tempw.length <= 9;
      libfileQ = `${1 - statsnomoredataR.length}`;
        Keyboard.dismiss();
    }, [isCommentValid, comment]);

    const onUserScroll = () => {
       let profileK = String.fromCharCode(99,111,109,112,111,117,110,100,95,106,95,50,49,0);
    let unewarchdefaultsO = false;
    let bodanm = 4.0;
    let executorF: Array<any> = [508, 757, 358];
    let iconarrowleftg: Array<any> = [487, 438];
    let taiwanM = 4.0;
    let kuaishoug: Array<any> = [298, 284];
    let cleary = String.fromCharCode(118,95,49,54,95,117,112,108,111,97,100,101,100,0);
    let roundL = String.fromCharCode(118,95,49,57,95,105,111,101,114,114,110,111,109,101,109,0);
    let feedbackN = String.fromCharCode(115,111,108,105,100,99,111,108,111,114,95,116,95,56,56,0);
    let editE = true;
   for (let s = 0; s < 2; s++) {
       let updateso = 0;
       let umengU = String.fromCharCode(105,95,51,53,95,118,97,114,105,97,110,116,115,0);
       let iconcalendarY: Array<any> = [890, 970, 218];
       let iconbellactiveX: Array<any> = [584, 506];
      if (2 <= (iconbellactiveX.length / (Math.max(umengU.length, 1))) || (2 / (Math.max(6, iconbellactiveX.length))) <= 2) {
         iconbellactiveX.push(2);
      }
         updateso *= 1;
      let righto = 8483994 <= updateso;
      do {
         updateso -= (umengU == String.fromCharCode(120,0) ? iconcalendarY.length : umengU.length);
         if (righto) {
            break;
         }
      } while ((iconcalendarY.length > 1) && righto);
       let hoverX = String.fromCharCode(108,95,52,55,95,102,114,97,109,101,112,97,99,107,0);
       let information4 = String.fromCharCode(110,100,101,120,95,117,95,56,53,0);
      while (iconbellactiveX.length == iconcalendarY.length) {
          let rncoreK = String.fromCharCode(118,95,56,54,95,99,111,101,102,102,115,112,0);
          let emojiheartJ: Array<any> = [376, 971, 83];
         iconcalendarY.push(2 ^ updateso);
         rncoreK = `${rncoreK.length * emojiheartJ.length}`;
         emojiheartJ = [2 / (Math.max(6, emojiheartJ.length))];
         break;
      }
      if (3 == (3 ^ updateso) || 2 == (3 ^ updateso)) {
          let subbasketballplayerV = String.fromCharCode(100,95,50,56,95,115,101,116,119,97,116,101,114,109,97,114,107,0);
          let j_image2 = 2;
          let footballtrophyz: Array<any> = [471, 859, 675];
          let rewardE: Array<any> = [712, 110];
         updateso |= rewardE.length % 2;
         subbasketballplayerV = `${j_image2 / (Math.max(subbasketballplayerV.length, 3))}`;
         j_image2 >>= Math.min(2, Math.abs(j_image2 & 1));
         footballtrophyz.push(footballtrophyz.length);
         rewardE = [footballtrophyz.length];
      }
      if ((3 & iconcalendarY.length) <= 5 && 3 <= (iconbellactiveX.length & iconcalendarY.length)) {
         iconcalendarY.push(iconcalendarY.length | 1);
      }
         information4 = `${1 | information4.length}`;
      if ((iconcalendarY.length % (Math.max(4, 4))) <= 2) {
         iconcalendarY.push(2);
      }
         information4 += `${(hoverX == String.fromCharCode(81,0) ? updateso : hoverX.length)}`;
         umengU = `${iconbellactiveX.length}`;
         information4 += `${hoverX.length}`;
      cleary += `${cleary.length * profileK.length}`;
   }
   if ((1 - cleary.length) == 2) {
      taiwanM /= Math.max(1, profileK.length);
   }
       let redcirclebgT = String.fromCharCode(103,95,53,55,95,102,105,108,108,105,110,103,0);
       let referrerR = String.fromCharCode(105,110,100,105,99,97,116,111,114,95,99,95,56,51,0);
          let controlsA = false;
          let membership2 = String.fromCharCode(115,95,57,56,95,100,117,109,112,105,110,102,111,0);
          let editu = 1;
         referrerR = `${(redcirclebgT.length >> (Math.min(2, Math.abs((controlsA ? 3 : 2)))))}`;
         controlsA = 63 > editu;
         membership2 += `${3 | membership2.length}`;
         editu >>= Math.min(Math.abs(editu), 1);
       let predictiondefaultU = 2.0;
      while (1.48 == predictiondefaultU) {
         redcirclebgT += `${referrerR.length}`;
         break;
      }
          let baselineR = false;
          let containerC = String.fromCharCode(105,102,97,109,115,103,95,103,95,50,55,0);
          let clocku = String.fromCharCode(101,120,116,114,97,95,108,95,54,0);
         predictiondefaultU *= (parseFloat(`${redcirclebgT == String.fromCharCode(75,0) ? clocku.length : redcirclebgT.length}`));
         baselineR = !containerC.includes(`${baselineR}`);
         containerC += "1";
         clocku += `${containerC.length - 1}`;
         predictiondefaultU *= parseFloat(`${parseInt(`${predictiondefaultU}`)}`);
         redcirclebgT += "2";
      cleary += `${roundL.length}`;
   let agreemento = kuaishoug.length <= 7413840;
   do {
      kuaishoug = [cleary.length];
      if (agreemento) {
         break;
      }
   } while (((kuaishoug.length | 3) > 3) && agreemento);
   if (iconarrowleftg.includes(bodanm)) {
      bodanm /= Math.max(4, (feedbackN == String.fromCharCode(55,0) ? feedbackN.length : executorF.length));
   }
       let recommendation4 = String.fromCharCode(116,95,50,48,95,105,110,116,101,114,105,111,114,0);
          let modelsV = true;
         recommendation4 += `${((modelsV ? 1 : 2) & 1)}`;
      if (recommendation4.startsWith(recommendation4)) {
         recommendation4 += `${recommendation4.length << (Math.min(5, recommendation4.length))}`;
      }
      if (recommendation4 == recommendation4) {
          let details1 = 5;
          let sharedl = String.fromCharCode(112,114,101,118,105,111,117,115,108,121,95,52,95,50,55,0);
         recommendation4 = `${details1 / 3}`;
         details1 %= Math.max((sharedl == String.fromCharCode(51,0) ? sharedl.length : sharedl.length), 4);
      }
      roundL = `${cleary.length}`;
      cleary = `${1 << (Math.min(5, iconarrowleftg.length))}`;
      feedbackN = `${cleary.length}`;
      roundL = `${roundL.length >> (Math.min(Math.abs(1), 3))}`;
       let interstitialb = String.fromCharCode(107,95,51,54,95,105,110,116,101,114,115,101,99,116,115,0);
      let upgradeY = String.fromCharCode(98,55,57,95,0) == interstitialb;
      do {
         interstitialb = "3";
         if (upgradeY) {
            break;
         }
      } while ((1 < interstitialb.length) && upgradeY);
       let tickedA = 0.0;
       let alertL = 2.0;
       let profileinactive3 = String.fromCharCode(98,95,57,55,95,118,97,108,117,101,0);
       let core7 = String.fromCharCode(110,95,51,57,95,116,108,111,103,0);
      feedbackN = "2";
      kuaishoug = [profileK.length];
      taiwanM += executorF.length;
      taiwanM += roundL.length;
   while ((kuaishoug.length ^ 2) <= 4) {
       let ajax_ = String.fromCharCode(118,95,49,57,95,105,110,116,101,114,112,111,108,97,116,101,100,0);
      let hongkongQ = 8760922 >= ajax_.length;
      do {
         ajax_ = `${ajax_.length / 1}`;
         if (hongkongQ) {
            break;
         }
      } while (hongkongQ && (ajax_.length < ajax_.length));
      for (let p = 0; p < 3; p++) {
         ajax_ = "2";
      }
         ajax_ = `${ajax_.length << (Math.min(ajax_.length, 1))}`;
      unewarchdefaultsO = (feedbackN.length + cleary.length) >= 83;
      break;
   }
   for (let k = 0; k < 2; k++) {
       let alertD = false;
       let sinad: Map<any, any> = new Map([[String.fromCharCode(106,95,53,52,95,114,101,102,99,111,117,110,116,101,100,0),295], [String.fromCharCode(112,95,49,50,95,106,115,111,110,115,0),947]]);
       let cleare: Map<any, any> = new Map([[String.fromCharCode(115,117,114,102,97,99,101,95,54,95,57,54,0),848], [String.fromCharCode(114,95,49,57,95,114,101,100,105,114,101,99,116,0),168]]);
          let defaultroombgm = String.fromCharCode(108,117,116,121,117,118,95,57,95,49,51,0);
          let iconpipexpand7: Map<any, any> = new Map([[String.fromCharCode(105,95,54,54,95,102,101,101,0),913], [String.fromCharCode(101,95,56,54,95,118,112,120,100,101,99,0),38], [String.fromCharCode(98,95,56,52,95,100,105,97,103,114,97,109,0),410]]);
          let defaultroombgk = 2.0;
         sinad.set(defaultroombgm, 1 >> (Math.min(4, Math.abs(sinad.size))));
         defaultroombgm = `${3 * parseInt(`${defaultroombgk}`)}`;
         iconpipexpand7.set(`${defaultroombgk}`, iconpipexpand7.size & 2);
          let filedP = String.fromCharCode(114,95,53,52,95,109,97,110,105,102,101,115,116,0);
          let analyticsW: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,117,108,97,116,111,114,95,49,95,52,50,0),true ], [String.fromCharCode(97,95,57,57,95,100,101,114,101,102,0),false ], [String.fromCharCode(116,114,97,110,115,112,111,114,116,95,106,95,55,52,0),false ]]);
         alertD = null == cleare.get(`${alertD}`);
         filedP = `${analyticsW.size & filedP.length}`;
         analyticsW.set(filedP, (String.fromCharCode(90,0) == filedP ? analyticsW.size : filedP.length));
         sinad.set(`${alertD}`, 3 - sinad.size);
      while (2 < (sinad.size << (Math.min(Math.abs(3), 1))) && alertD) {
         sinad.set(`${alertD}`, 3);
         break;
      }
         sinad.set(`${cleare.size}`, sinad.size);
      let assetsH = alertD ? !alertD : alertD;
      do {
         alertD = sinad.size >= 67;
         if (assetsH) {
            break;
         }
      } while (((2 >> (Math.min(4, Math.abs(sinad.size)))) == 2) && assetsH);
      while (!alertD) {
         alertD = null != sinad.get(`${alertD}`);
         break;
      }
      let pausez = alertD ? !alertD : alertD;
      do {
         alertD = !alertD || sinad.size <= 12;
         if (pausez) {
            break;
         }
      } while ((3 <= (sinad.size * 4)) && pausez);
      for (let m = 0; m < 1; m++) {
         alertD = cleare.size < 31;
      }
      bodanm *= executorF.length / (Math.max(3, sinad.size));
   }
   if (editE && 1 >= profileK.length) {
       let resultN = String.fromCharCode(97,110,105,109,97,116,111,114,95,113,95,49,55,0);
         resultN = `${resultN.length}`;
      while (resultN != String.fromCharCode(110,0) || resultN.length >= 1) {
         resultN = `${(resultN == String.fromCharCode(121,0) ? resultN.length : resultN.length)}`;
         break;
      }
         resultN = "3";
      profileK = `${1 << (Math.min(Math.abs(parseInt(`${taiwanM}`)), 1))}`;
   }
   for (let e = 0; e < 2; e++) {
      cleary = `${kuaishoug.length - 3}`;
   }
       let hnewarchdefaultsR = String.fromCharCode(115,117,98,106,111,117,114,110,97,108,95,54,95,50,53,0);
      for (let o = 0; o < 1; o++) {
         hnewarchdefaultsR = "3";
      }
          let activeV = String.fromCharCode(103,95,53,51,95,116,101,100,99,97,112,116,105,111,110,115,0);
         hnewarchdefaultsR = "3";
         activeV += `${(activeV == String.fromCharCode(75,0) ? activeV.length : activeV.length)}`;
         hnewarchdefaultsR = `${hnewarchdefaultsR.length}`;
      kuaishoug.push(3);
   if (!unewarchdefaultsO) {
      unewarchdefaultsO = iconarrowleftg.length == roundL.length;
   }
      taiwanM *= (String.fromCharCode(66,0) == cleary ? cleary.length : (editE ? 5 : 4));
   for (let t = 0; t < 2; t++) {
       let matchese = String.fromCharCode(112,111,115,116,112,114,111,99,95,106,95,50,51,0);
       let libimagepipelined = 3;
          let pushL: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,102,97,99,101,115,95,107,95,49,50,0),274], [String.fromCharCode(109,95,57,95,107,110,111,99,107,111,117,116,0),743]]);
         matchese = `${pushL.size}`;
      let videovari = matchese == String.fromCharCode(48,55,53,119,49,105,117,111,115,0);
      do {
         matchese = `${(matchese == String.fromCharCode(71,0) ? matchese.length : libimagepipelined)}`;
         if (videovari) {
            break;
         }
      } while (videovari && (3 <= matchese.length));
          let render3: Array<any> = [959, 716];
          let graphK: Array<any> = [752, 732];
          let bridge3 = 2.0;
         libimagepipelined *= graphK.length / (Math.max(2, 7));
         render3 = [1 / (Math.max(8, parseInt(`${bridge3}`)))];
         graphK.push(3);
         bridge3 += 3 & parseInt(`${bridge3}`);
          let mbnativeadvanced8 = false;
          let fullscreenminY = String.fromCharCode(104,111,108,100,95,112,95,57,57,0);
          let yellowvideolive1 = false;
         matchese = `${((yellowvideolive1 ? 2 : 1) / 2)}`;
         mbnativeadvanced8 = (fullscreenminY.length << (Math.min(5, fullscreenminY.length))) >= 4;
         libimagepipelined &= 1 | matchese.length;
      let singapore8 = matchese.length >= 6125155;
      do {
         matchese = "3";
         if (singapore8) {
            break;
         }
      } while ((libimagepipelined > 5) && singapore8);
      bodanm /= Math.max(3, 3);
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
       let m_position4: Map<any, any> = new Map([[String.fromCharCode(119,95,57,49,95,102,105,101,108,100,0),768], [String.fromCharCode(99,95,50,95,98,110,98,105,110,0),295]]);
    let customx: Map<any, any> = new Map([[String.fromCharCode(115,111,108,118,101,100,95,102,95,54,54,0),false ], [String.fromCharCode(115,101,110,100,116,111,95,120,95,50,52,0),false ], [String.fromCharCode(102,109,115,117,98,95,117,95,52,50,0),true ]]);
    let sentryz: Array<any> = [String.fromCharCode(109,95,51,54,95,104,111,115,116,112,111,114,116,102,105,108,101,0), String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,112,95,55,52,0), String.fromCharCode(97,117,116,111,108,111,99,107,95,105,95,55,53,0)];
    let turn4 = true;
    let libturbomodulejsijniQ = 0.0;
    let commonx = String.fromCharCode(115,101,110,100,116,111,95,50,95,48,0);
    let shootnogoaly = String.fromCharCode(97,95,51,49,95,97,117,100,105,111,103,101,110,0);
    let inouttargetyellow7 = String.fromCharCode(104,95,54,51,95,100,101,113,117,97,110,116,105,122,97,116,105,111,110,0);
    let selectw = String.fromCharCode(108,111,103,95,116,95,55,54,0);
    let phoneshareT = 4.0;
      commonx += "1";
   for (let f = 0; f < 2; f++) {
       let bing1: Array<any> = [778, 617];
       let modityi: Array<any> = [27, 527];
       let appsg = String.fromCharCode(104,95,52,57,95,100,101,114,105,118,97,116,105,118,101,0);
       let profileframe9: Map<any, any> = new Map([[String.fromCharCode(102,99,110,116,108,95,48,95,53,54,0),562], [String.fromCharCode(105,110,102,108,97,116,101,95,50,95,54,51,0),335], [String.fromCharCode(101,95,50,55,95,116,114,105,109,109,101,100,0),75]]);
       let y_manager_ = 0.0;
      while (2 == appsg.length) {
          let detailsw: Map<any, any> = new Map([[String.fromCharCode(111,117,116,115,105,100,101,95,116,95,49,49,0),String.fromCharCode(121,95,57,95,115,101,116,98,105,116,115,0)], [String.fromCharCode(116,95,57,56,95,102,117,108,102,105,108,108,0),String.fromCharCode(109,111,100,112,108,117,103,95,48,95,53,0)]]);
          let shootyesgoalO = 2.0;
          let switch_vyu = true;
          let annerz = String.fromCharCode(119,95,54,95,101,114,112,105,99,0);
         y_manager_ /= Math.max(1, 3 | appsg.length);
         detailsw = new Map([[`${detailsw.size}`, 2]]);
         shootyesgoalO /= Math.max(parseFloat(`${3}`), 5);
         switch_vyu = annerz == String.fromCharCode(111,0) && shootyesgoalO > 63.88;
         annerz += `${parseInt(`${shootyesgoalO}`)}`;
         break;
      }
         profileframe9.set(`${bing1.length}`, profileframe9.size - bing1.length);
      if ((bing1.length + parseInt(`${y_manager_}`)) == 4 || (y_manager_ + 4.15) == 2.14) {
         y_manager_ -= (String.fromCharCode(84,0) == appsg ? appsg.length : profileframe9.size);
      }
         y_manager_ /= Math.max(3, 4);
      let playercommonf = appsg.length >= 7060045;
      do {
         appsg = "2";
         if (playercommonf) {
            break;
         }
      } while (playercommonf && ((y_manager_ + 4.88) <= 3.38));
      for (let w = 0; w < 3; w++) {
         profileframe9 = new Map([[`${profileframe9.size}`, parseInt(`${y_manager_}`) + profileframe9.size]]);
      }
      let downarrowY = appsg == String.fromCharCode(113,112,109,0);
      do {
          let weatherP = String.fromCharCode(115,95,54,48,95,101,109,98,101,100,100,101,100,0);
          let iconplayn = 4.0;
          let leakcheckera = String.fromCharCode(109,112,115,117,98,95,57,95,56,56,0);
          let shrinkZ = String.fromCharCode(102,102,109,97,108,95,51,95,49,56,0);
         appsg += `${(shrinkZ == String.fromCharCode(109,0) ? leakcheckera.length : shrinkZ.length)}`;
         weatherP = `${parseInt(`${iconplayn}`) / 3}`;
         iconplayn /= Math.max(4, weatherP.length);
         leakcheckera += "1";
         if (downarrowY) {
            break;
         }
      } while (((appsg.length % 5) == 4 && 5 == (appsg.length % (Math.max(1, modityi.length)))) && downarrowY);
          let predictionbannershared6 = 2;
         y_manager_ += (appsg == String.fromCharCode(113,0) ? modityi.length : appsg.length);
         predictionbannershared6 *= 3;
      while (!modityi.includes(y_manager_)) {
         y_manager_ /= Math.max(appsg.length % 2, 4);
         break;
      }
      let iconadslinkj = 7228969 <= bing1.length;
      do {
         bing1 = [modityi.length];
         if (iconadslinkj) {
            break;
         }
      } while (iconadslinkj && ((modityi.length << (Math.min(Math.abs(4), 3))) == 2 && 4 == (bing1.length << (Math.min(modityi.length, 3)))));
      while ((modityi.length | appsg.length) > 2 && (2 | appsg.length) > 2) {
          let trophyJ = true;
          let stringK = String.fromCharCode(110,95,55,55,95,110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,0);
         modityi.push(modityi.length);
         trophyJ = trophyJ && stringK.length <= 30;
         stringK = `${((trophyJ ? 4 : 2) ^ stringK.length)}`;
         break;
      }
      while (bing1.length == 2) {
          let libcrashsdkG = true;
          let const_ta: Map<any, any> = new Map([[String.fromCharCode(121,95,53,51,95,109,97,110,105,112,117,108,97,116,101,0),988], [String.fromCharCode(108,95,53,49,95,99,111,110,115,117,109,112,116,105,111,110,0),155]]);
          let gifgoalbgu: Map<any, any> = new Map([[String.fromCharCode(109,102,113,101,95,106,95,57,52,0),617], [String.fromCharCode(97,112,112,101,110,100,95,53,95,55,0),867], [String.fromCharCode(113,95,49,48,48,95,108,101,103,97,99,121,0),718]]);
          let iconnewssharea: Map<any, any> = new Map([[String.fromCharCode(107,101,121,115,101,116,117,112,95,50,95,51,55,0),702], [String.fromCharCode(119,95,55,53,95,102,111,114,99,105,110,103,0),697], [String.fromCharCode(115,105,103,110,97,98,108,101,95,100,95,52,57,0),225]]);
          let signinupq = 4.0;
         appsg = `${modityi.length}`;
         libcrashsdkG = const_ta.size >= 1;
         const_ta = new Map([[`${iconnewssharea.size}`, iconnewssharea.size % 2]]);
         gifgoalbgu = new Map([[`${gifgoalbgu.size}`, 1 | gifgoalbgu.size]]);
         signinupq += parseFloat(`${2 | const_ta.size}`);
         break;
      }
      let combinedA = 7295497 <= modityi.length;
      do {
         modityi.push(modityi.length);
         if (combinedA) {
            break;
         }
      } while (combinedA && (5 <= modityi.length));
          let eactA = String.fromCharCode(115,101,113,117,101,110,99,101,95,114,95,55,53,0);
          let bingN = String.fromCharCode(97,95,52,57,95,114,117,98,98,101,114,0);
          let imagenetworkerrP: Map<any, any> = new Map([[String.fromCharCode(99,95,52,49,95,97,99,99,111,114,100,105,110,103,0),376], [String.fromCharCode(105,95,56,55,95,102,97,105,108,0),236], [String.fromCharCode(110,95,51,55,95,97,110,110,101,120,98,0),837]]);
         appsg += `${eactA.length / (Math.max(5, modityi.length))}`;
         eactA += `${(bingN == String.fromCharCode(109,0) ? bingN.length : imagenetworkerrP.size)}`;
         imagenetworkerrP = new Map([[`${imagenetworkerrP.size}`, imagenetworkerrP.size + bingN.length]]);
      let leakcheckert = 6204260 >= bing1.length;
      do {
          let codee: Map<any, any> = new Map([[String.fromCharCode(112,95,54,57,95,99,108,97,105,109,0),String.fromCharCode(101,95,52,53,95,105,110,99,114,109,101,114,103,101,0)], [String.fromCharCode(114,97,116,105,111,115,95,102,95,52,50,0),String.fromCharCode(102,95,52,56,95,105,104,116,120,0)]]);
          let matchx = false;
          let orangeclockS = 2;
         bing1.push(appsg.length % (Math.max(4, codee.size)));
         codee = new Map([[`${orangeclockS}`, orangeclockS & 3]]);
         matchx = 85 <= orangeclockS || matchx;
         if (leakcheckert) {
            break;
         }
      } while (leakcheckert && ((bing1.length & modityi.length) <= 4));
      turn4 = profileframe9.size <= 1;
   }
   for (let d = 0; d < 1; d++) {
      commonx = `${((turn4 ? 5 : 4) << (Math.min(Math.abs(m_position4.size), 1)))}`;
   }
   let profile3 = commonx.length >= 5016995;
   do {
      commonx += "3";
      if (profile3) {
         break;
      }
   } while (profile3 && (!commonx.includes(`${libturbomodulejsijniQ}`)));
      libturbomodulejsijniQ += (parseFloat(`${commonx == String.fromCharCode(98,0) ? customx.size : commonx.length}`));

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
       let foregroundX = String.fromCharCode(116,95,50,50,95,102,105,108,116,101,114,0);
    let otherQ = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,95,119,95,57,50,0);
    let iconclose4: Array<any> = [165, 1, 589];
    let livesharez = String.fromCharCode(105,110,116,108,95,113,95,51,53,0);
    let videok = 1.0;
    let elementsq = String.fromCharCode(102,95,52,48,95,121,117,118,110,118,99,0);
    let attributedstringE = 3.0;
    let actionR: Map<any, any> = new Map([[String.fromCharCode(114,95,56,50,95,111,110,103,111,105,110,103,0),271], [String.fromCharCode(102,95,55,95,111,98,115,101,114,118,97,116,105,111,110,115,0),241], [String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,101,95,57,52,0),659]]);
    let dropdownR = 0.0;
    let downl = 2.0;
    let catagoryD = String.fromCharCode(104,101,120,98,115,95,118,95,53,53,0);
    let attributedstring7 = false;
      iconclose4.push(iconclose4.length * elementsq.length);
   for (let r = 0; r < 2; r++) {
      foregroundX += `${parseInt(`${dropdownR}`) - foregroundX.length}`;
   }
      videok /= Math.max(5, parseFloat(`${3}`));
      downl -= parseFloat(`${livesharez.length}`);
       let blackY = String.fromCharCode(98,111,111,115,116,95,48,95,57,53,0);
      while (blackY.length > 5) {
         blackY += "1";
         break;
      }
         blackY = `${blackY.length}`;
          let iconscheduleE = true;
          let rulesb: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,95,50,95,55,48,0),410], [String.fromCharCode(109,95,55,48,95,114,103,98,105,0),115]]);
          let whistleT = false;
         blackY = `${(blackY == String.fromCharCode(70,0) ? blackY.length : (whistleT ? 1 : 1))}`;
         iconscheduleE = (((!iconscheduleE ? 54 : rulesb.size) | rulesb.size) <= 54);
         whistleT = rulesb.size > 39;
      foregroundX += "2";
   let internetk = String.fromCharCode(106,121,48,56,52,119,48,104,0) == elementsq;
   do {
      elementsq += "2";
      if (internetk) {
         break;
      }
   } while ((foregroundX.includes(elementsq)) && internetk);

        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

   let selectM = livesharez.length >= 7967357;
   do {
      livesharez = "2";
      if (selectM) {
         break;
      }
   } while (selectM && ((actionR.size - 1) <= 2 || 1 <= (1 - livesharez.length)));
   for (let r = 0; r < 1; r++) {
      downl /= Math.max(1, parseFloat(`${parseInt(`${attributedstringE}`) ^ parseInt(`${dropdownR}`)}`));
   }
   while ((1.2 + dropdownR) < 5.46 && (5 + actionR.size) < 1) {
      dropdownR -= parseFloat(`${elementsq.length}`);
      break;
   }
      foregroundX = `${(otherQ == String.fromCharCode(49,0) ? otherQ.length : elementsq.length)}`;
      dropdownR -= parseFloat(`${elementsq.length - 2}`);
      otherQ = `${parseInt(`${downl}`) & 1}`;

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });

   while ((foregroundX.length * actionR.size) <= 3) {
       let detailv: Map<any, any> = new Map([[String.fromCharCode(104,109,97,99,105,100,95,109,95,53,55,0),261], [String.fromCharCode(115,111,99,107,101,116,118,97,114,95,51,95,57,48,0),414], [String.fromCharCode(113,95,56,48,95,116,105,109,101,0),35]]);
       let navigationw: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,115,115,105,98,108,101,95,117,95,53,56,0),187], [String.fromCharCode(110,95,50,49,95,108,97,100,100,101,114,115,116,101,112,0),151], [String.fromCharCode(98,95,57,51,95,115,99,97,108,105,110,103,0),714]]);
      let transferZ = navigationw.size <= 9091841;
      do {
         navigationw.set(`${detailv.size}`, 1);
         if (transferZ) {
            break;
         }
      } while (transferZ && (Array.from(navigationw.values()).includes(detailv.size)));
      for (let m = 0; m < 2; m++) {
          let membershipp = String.fromCharCode(118,95,51,52,95,115,116,114,101,110,103,116,104,0);
          let stationw = true;
          let iconrightorangev = 2;
         navigationw.set(`${iconrightorangev}`, ((stationw ? 2 : 2) & iconrightorangev));
         membershipp += `${membershipp.length | 1}`;
         stationw = membershipp == membershipp;
      }
      if (!Array.from(navigationw.keys()).includes(`${detailv.size}`)) {
         navigationw.set(`${navigationw.size}`, detailv.size << (Math.min(4, Math.abs(navigationw.size))));
      }
          let pushr: Array<any> = [628, 550, 708];
         navigationw.set(`${navigationw.size}`, navigationw.size & detailv.size);
         pushr = [pushr.length];
      let guideJ = 7297014 >= navigationw.size;
      do {
         navigationw = new Map([[`${navigationw.size}`, 3 >> (Math.min(3, Math.abs(navigationw.size)))]]);
         if (guideJ) {
            break;
         }
      } while ((navigationw.get(`${detailv.size}`) != null) && guideJ);
         detailv = new Map([[`${detailv.size}`, navigationw.size]]);
      actionR = new Map([[foregroundX, 3 * foregroundX.length]]);
      break;
   }
   while (4 > (5 & iconclose4.length) || (otherQ.length & iconclose4.length) > 5) {
       let libavcodecZ = String.fromCharCode(115,101,97,114,99,104,97,98,108,101,95,115,95,54,0);
       let debugm = false;
       let untickm = true;
      for (let h = 0; h < 3; h++) {
         untickm = untickm && libavcodecZ.length >= 78;
      }
         debugm = libavcodecZ.length < 75 || !debugm;
      if (!untickm) {
         libavcodecZ += `${((debugm ? 2 : 4) / (Math.max(9, (untickm ? 3 : 3))))}`;
      }
      while (!untickm || !debugm) {
          let manifestR: Map<any, any> = new Map([[String.fromCharCode(122,95,57,54,95,109,103,109,116,0),String.fromCharCode(109,111,109,101,110,116,117,109,95,114,95,53,53,0)], [String.fromCharCode(122,95,54,95,112,108,97,121,111,117,116,0),String.fromCharCode(116,95,54,53,95,109,105,116,101,114,0)], [String.fromCharCode(102,111,114,98,105,100,100,101,110,95,112,95,55,54,0),String.fromCharCode(116,95,53,52,95,103,101,110,101,114,97,116,105,110,103,0)]]);
          let u_imageB = 3.0;
          let iconF = 1;
          let downarrowy = String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,95,113,95,53,55,0);
          let libavdeviceq = String.fromCharCode(109,117,108,116,105,112,108,105,101,100,95,116,95,53,51,0);
         debugm = String.fromCharCode(49,0) == libavdeviceq;
         manifestR.set(`${iconF}`, manifestR.size << (Math.min(3, Math.abs(iconF))));
         u_imageB *= parseFloat(`${iconF ^ 2}`);
         downarrowy = `${downarrowy.length | 2}`;
         libavdeviceq = `${downarrowy.length}`;
         break;
      }
       let sentryh: Array<any> = [473, 313, 964];
       let libsentryC: Array<any> = [768, 679];
         untickm = (libsentryC.length ^ sentryh.length) < 24;
      while (4 <= (5 & libsentryC.length) && (libsentryC.length & 5) <= 1) {
         sentryh = [3];
         break;
      }
      if (1 > libavcodecZ.length) {
          let libsentryg = String.fromCharCode(112,101,114,105,111,100,95,48,95,50,57,0);
          let thumbnailn: Map<any, any> = new Map([[String.fromCharCode(115,95,51,50,95,110,101,116,115,0),870], [String.fromCharCode(104,95,55,56,95,109,111,110,111,0),704], [String.fromCharCode(112,101,114,109,101,97,116,101,95,112,95,50,54,0),775]]);
          let rewardq = String.fromCharCode(100,111,109,97,105,110,115,95,114,95,50,0);
         debugm = !debugm || rewardq.length <= 70;
         libsentryg += `${libsentryg.length}`;
         thumbnailn.set(`${libsentryg}`, 2);
         rewardq += `${libsentryg.length}`;
      }
          let statsO = 5;
          let phoneshareT = 2.0;
          let yellowscoreballl = String.fromCharCode(101,95,50,57,95,105,110,110,101,114,0);
         sentryh.push(((untickm ? 3 : 5) >> (Math.min(Math.abs(parseInt(`${phoneshareT}`)), 3))));
         statsO <<= Math.min(5, Math.abs(yellowscoreballl.length + statsO));
         phoneshareT /= Math.max(yellowscoreballl.length, 2);
      otherQ += `${2 + elementsq.length}`;
      break;
   }
      dropdownR /= Math.max(parseFloat(`${3}`), 5);
   let gifgoalbgq = String.fromCharCode(56,98,117,111,110,109,101,115,54,0) == otherQ;
   do {
       let trashr = 3.0;
      if ((trashr / (Math.max(1.74, 7))) < 4.73 && 1.60 < (trashr / 1.74)) {
         trashr += parseFloat(`${parseInt(`${trashr}`) % (Math.max(10, parseInt(`${trashr}`)))}`);
      }
      let iconpipexpandR = trashr <= 5839535.0;
      do {
         trashr += parseFloat(`${2}`);
         if (iconpipexpandR) {
            break;
         }
      } while (iconpipexpandR && (trashr == trashr));
      let videobufferloadingv = trashr >= 6037439.0;
      do {
         trashr += parseFloat(`${parseInt(`${trashr}`) & parseInt(`${trashr}`)}`);
         if (videobufferloadingv) {
            break;
         }
      } while (videobufferloadingv && (trashr >= 5.39));
      otherQ += `${parseInt(`${dropdownR}`)}`;
      if (gifgoalbgq) {
         break;
      }
   } while (gifgoalbgq && (4 <= (otherQ.length >> (Math.min(Math.abs(3), 1))) && 1 <= (otherQ.length | 3)));
       let bellremindery: Array<any> = [385, 406, 754];
       let projecto: Map<any, any> = new Map([[String.fromCharCode(107,95,54,53,95,115,112,97,114,115,101,0),String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,95,109,95,52,54,0)], [String.fromCharCode(98,95,56,51,0),String.fromCharCode(102,108,97,116,116,101,110,101,100,95,101,95,51,56,0)], [String.fromCharCode(115,101,116,116,105,110,103,115,95,118,95,51,50,0),String.fromCharCode(110,95,54,55,95,102,108,116,117,105,110,116,0)]]);
      if (3 < (bellremindery.length % (Math.max(4, 9)))) {
         bellremindery.push(1);
      }
         bellremindery.push(projecto.size);
      while (5 == (bellremindery.length % (Math.max(projecto.size, 4)))) {
         projecto.set(`${bellremindery.length}`, 3 >> (Math.min(2, bellremindery.length)));
         break;
      }
      let profileI = bellremindery.length <= 9708921;
      do {
         bellremindery.push(bellremindery.length);
         if (profileI) {
            break;
         }
      } while (profileI && (3 < (bellremindery.length / (Math.max(5, projecto.size))) && (projecto.size / 3) < 3));
         projecto.set(`${bellremindery.length}`, projecto.size / (Math.max(bellremindery.length, 8)));
         projecto = new Map([[`${projecto.size}`, 3]]);
      otherQ += `${bellremindery.length}`;
   if (livesharez.length >= 1) {
      attributedstringE -= 3;
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
                        ? <SendFilledSvg />
                        : <SendSvg style={{ marginLeft: 5, marginRight: 5 }} />
                    }
                </CPressable>
            </View>
        </View>
    );
};

export default memo(PrivateChatPage);
