import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import { useAppDispatch, useSelector } from "@hooks/wawa_root";
import { CPressable, CTextInput } from "../../../../components/atoms";
import SendIcon from '@static/images/assetsFootballtrophyStation.svg';
import SendFillIcon from '@static/images/anytimeSpecRefreshborderless.svg';
import { CHAT_BOX_MAX_ITEM, CHAT_SEND_COOLDOWN, COMMENT_MAX_INPUT } from "@utility/wawa_iconpointscore";
import { wawaAdult } from "@type/wawa_gradlew";
import { wawaVideovarBaiduads } from "../../../../api/wawa_movies_transfer";
import { wawaLeague } from "@redux/reducers/wawa_fast_flipper";
import { useQuery } from "@tanstack/react-query";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux/actions/wawa_tooltips";
import { Avatar } from "@rneui/base";
import { useIsFocused, useTheme } from "@react-navigation/native";

import createStyles from "./wawa_hiad_iconnewchat";
import { wawaYellowtored } from "../../../types/wawa_klevin_iconwechat";
import { UnreadCard } from "../../../../components/chat/wawa_sound";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

type wawaAwayShow = {
    matchID: string,
    streamer: wawaYellowtored,
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
}: wawaAwayShow) => {
    const { colors } = useTheme();

    const styles = useMemo(() => createStyles({
        colors,
    }), [colors]);

    const PIN_YIN_ACCEPTED = 20;

    const chatState = useSelector<wawaLeague>('chatReducer');
    const userState = useSelector<wawaPhoneControls>('userReducer');
    const [cooldownTimeout, setCooldownTimeout] = useState<NodeJS.Timeout | null>(null);
    const [comment, setComment] = useState('');
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<wawaAdult> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = wawaLibglog.isLogin(userState.user);

    const appDispatch = useAppDispatch();

    const { data: chats } = useQuery({
        queryKey: ['liveChats', matchID],
        queryFn: () => wawaVideovarBaiduads.getStreamerPinMsg(),
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

    const renderItem = useCallback(({ item }: { item: wawaAdult }) => {
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
       let sportsO = 2.0;
    let textp = String.fromCharCode(107,105,108,111,98,121,116,101,0);
    let zoomk: Array<any> = [768, 530, 801];
    let photoK = false;
    let settingsY: Array<any> = [577, 261, 801];
    let shirtw = 2;
    let borderlessH: Array<any> = [String.fromCharCode(109,95,57,54,95,97,114,103,117,109,101,110,116,115,0), String.fromCharCode(99,104,97,115,101,0)];
    let dragy = true;
    let imagenomoredataO = 2.0;
    let main_hT: Map<any, any> = new Map([[String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,0),960], [String.fromCharCode(102,97,105,108,101,100,0),488], [String.fromCharCode(116,111,117,99,104,0),560]]);
      photoK = settingsY.length > textp.length;
   let giftbuttonn = borderlessH.length >= 9900418;
   do {
      borderlessH = [borderlessH.length / (Math.max(1, textp.length))];
      if (giftbuttonn) {
         break;
      }
   } while (giftbuttonn && (!borderlessH.includes(sportsO)));
   if ((shirtw % (Math.max(2, 2))) >= 3 || !dragy) {
       let bggradient3 = String.fromCharCode(97,114,105,98,0);
       let minimizeN = String.fromCharCode(99,104,97,110,103,101,99,111,117,110,116,101,114,0);
      for (let k = 0; k < 3; k++) {
         minimizeN = `${bggradient3.length}`;
      }
         bggradient3 = "2";
         minimizeN += `${bggradient3.length}`;
      let modulesQ = minimizeN == String.fromCharCode(105,57,116,98,49,56,112,102,117,119,0);
      do {
         minimizeN = `${bggradient3.length + minimizeN.length}`;
         if (modulesQ) {
            break;
         }
      } while ((bggradient3.length <= 2) && modulesQ);
         minimizeN = "1";
       let sheetG: Map<any, any> = new Map([[String.fromCharCode(118,95,55,48,95,99,97,112,116,117,114,101,0),528], [String.fromCharCode(106,95,57,56,95,98,108,111,119,102,105,115,104,0),734], [String.fromCharCode(112,112,99,99,111,109,109,111,110,0),548]]);
       let iconsharefriendsV: Map<any, any> = new Map([[String.fromCharCode(110,111,110,99,101,95,57,95,50,54,0),841], [String.fromCharCode(109,111,100,101,109,0),301], [String.fromCharCode(119,100,108,116,0),626]]);
      shirtw ^= minimizeN.length >> (Math.min(3, Math.abs(parseInt(`${imagenomoredataO}`))));
   }

        if (comment.trim().length === 0 || !isCommentValid) return;

   while (4.5 <= (sportsO + 1.66)) {
      zoomk = [(borderlessH.length >> (Math.min(3, Math.abs((dragy ? 2 : 1)))))];
      break;
   }
      dragy = 22.88 == sportsO;
   let bangy = 8005502 <= settingsY.length;
   do {
      settingsY.push(shirtw % (Math.max(parseInt(`${imagenomoredataO}`), 9)));
      if (bangy) {
         break;
      }
   } while (bangy && (imagenomoredataO == 4.41));

        if (cooldownTimeout !== null) {

   for (let y = 0; y < 1; y++) {
      zoomk = [(parseInt(`${sportsO}`) * (photoK ? 3 : 2))];
   }
      textp = `${((photoK ? 4 : 1) & 1)}`;
   for (let d = 0; d < 2; d++) {
       let storeG: Array<any> = [296, 895, 821];
       let confirmationr: Map<any, any> = new Map([[String.fromCharCode(116,95,50,54,95,115,99,104,117,110,99,107,0),413], [String.fromCharCode(97,103,101,110,116,115,0),746]]);
       let delegate_tt: Array<any> = [94, 910, 613];
       let mappingg = String.fromCharCode(115,117,98,116,114,97,99,116,101,100,0);
      let iconclosewhitewithbgK = confirmationr.size <= 8882403;
      do {
         confirmationr.set(mappingg, 3);
         if (iconclosewhitewithbgK) {
            break;
         }
      } while (iconclosewhitewithbgK && (3 <= (storeG.length << (Math.min(Math.abs(confirmationr.size), 5)))));
       let vietnamE = 3.0;
         mappingg += `${parseInt(`${vietnamE}`) / (Math.max(confirmationr.size, 4))}`;
         confirmationr = new Map([[`${delegate_tt.length}`, parseInt(`${vietnamE}`) >> (Math.min(delegate_tt.length, 3))]]);
         vietnamE += parseFloat(`${1}`);
      let whiteanimationlivef = 6342819 <= storeG.length;
      do {
         storeG = [storeG.length];
         if (whiteanimationlivef) {
            break;
         }
      } while (((storeG.length + delegate_tt.length) < 3 && (3 + delegate_tt.length) < 1) && whiteanimationlivef);
      while (Array.from(confirmationr.values()).includes(delegate_tt.length)) {
         confirmationr = new Map([[`${delegate_tt.length}`, 1]]);
         break;
      }
         delegate_tt = [parseInt(`${vietnamE}`)];
         delegate_tt = [mappingg.length >> (Math.min(Math.abs(1), 1))];
      let winit_46m = 6315595 <= delegate_tt.length;
      do {
          let eyeopenC = String.fromCharCode(114,95,55,49,95,105,110,116,114,101,112,111,108,0);
          let termsX: Array<any> = [151, 223];
         delegate_tt.push((String.fromCharCode(115,0) == mappingg ? parseInt(`${vietnamE}`) : mappingg.length));
         eyeopenC = `${2 << (Math.min(5, eyeopenC.length))}`;
         termsX.push(3);
         if (winit_46m) {
            break;
         }
      } while ((5 <= (delegate_tt.length + 2) || (delegate_tt.length + confirmationr.size) <= 2) && winit_46m);
          let shrinkq = 5.0;
          let recommendationi = 3;
         vietnamE *= parseFloat(`${3}`);
         shrinkq *= parseInt(`${shrinkq}`);
         recommendationi |= parseInt(`${shrinkq}`) / 1;
         storeG.push(parseInt(`${vietnamE}`));
      photoK = borderlessH.includes(shirtw);
   }
            return;
        }

        appDispatch(sendChatMessage({
            message: comment,
        }));

      dragy = imagenomoredataO == 43.88 || !photoK;
       let baseH = 4;
          let imagenomoredatat = 2.0;
          let orangetickn = String.fromCharCode(97,98,101,108,0);
         baseH <<= Math.min(4, Math.abs(2 | parseInt(`${imagenomoredatat}`)));
         imagenomoredatat -= parseFloat(`${orangetickn.length >> (Math.min(Math.abs(1), 5))}`);
         orangetickn = `${orangetickn.length}`;
      let orangeclockD = baseH >= 9022682;
      do {
          let inactivet: Map<any, any> = new Map([[String.fromCharCode(109,111,99,107,105,110,103,95,102,95,52,52,0),617], [String.fromCharCode(102,116,118,110,111,100,101,0),934], [String.fromCharCode(104,111,116,105,122,111,110,116,108,95,102,95,55,56,0),749]]);
          let disconnectedlogo3 = 2;
          let castingJ = 2;
          let sliderW: Array<any> = [38, 438, 322];
          let iconchatsendL = 2.0;
         baseH %= Math.max(1, 2 ^ castingJ);
         inactivet = new Map([[`${iconchatsendL}`, disconnectedlogo3 + 1]]);
         disconnectedlogo3 >>= Math.min(Math.abs(2), 5);
         castingJ ^= sliderW.length * 3;
         sliderW.push(disconnectedlogo3);
         iconchatsendL += parseFloat(`${disconnectedlogo3 << (Math.min(2, Math.abs(2)))}`);
         if (orangeclockD) {
            break;
         }
      } while ((4 <= (baseH / (Math.max(7, baseH)))) && orangeclockD);
         baseH %= Math.max(2, 2 + baseH);
      textp += `${(main_hT.size - (dragy ? 1 : 3))}`;
   if ((3 & zoomk.length) < 5 && 3 < zoomk.length) {
      zoomk.push(((photoK ? 2 : 3) % 1));
   }

        setCooldownTimeout(setTimeout(() => {

       let downloaderk = String.fromCharCode(97,95,54,49,95,114,111,119,115,0);
       let taiwan4: Array<any> = [String.fromCharCode(103,95,55,48,95,99,117,98,105,99,0), String.fromCharCode(107,95,57,95,117,108,112,102,101,99,0)];
       let trophyj = 5.0;
       let statsnomoredataE = 4;
       let cornerh = 4;
      if ((taiwan4.length | cornerh) < 5 || (cornerh | taiwan4.length) < 5) {
         cornerh >>= Math.min(1, Math.abs(downloaderk.length - taiwan4.length));
      }
          let predictionbannersharedt: Map<any, any> = new Map([[String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,95,105,95,51,53,0),true ], [String.fromCharCode(117,95,54,51,95,106,111,105,110,105,110,103,0),false ]]);
          let spinnerg = String.fromCharCode(112,97,99,101,114,0);
         downloaderk = `${1 - statsnomoredataE}`;
         predictionbannersharedt.set(spinnerg, predictionbannersharedt.size ^ spinnerg.length);
         cornerh |= cornerh;
      if (taiwan4.length <= downloaderk.length) {
         taiwan4 = [downloaderk.length];
      }
         downloaderk = `${taiwan4.length}`;
          let langkeyU = String.fromCharCode(109,101,101,116,117,112,0);
          let internetk = String.fromCharCode(100,105,115,99,111,118,101,114,0);
          let penaltyV = 2.0;
         trophyj /= Math.max(4, parseFloat(`${2}`));
         langkeyU = `${(String.fromCharCode(87,0) == internetk ? internetk.length : parseInt(`${penaltyV}`))}`;
         penaltyV /= Math.max(5, (parseFloat(`${String.fromCharCode(108,0) == langkeyU ? parseInt(`${penaltyV}`) : langkeyU.length}`)));
       let iconfeedbackm = String.fromCharCode(102,99,117,110,112,117,98,108,105,115,104,0);
       let placeholderg = String.fromCharCode(109,101,109,98,101,114,0);
         taiwan4 = [(String.fromCharCode(84,0) == placeholderg ? placeholderg.length : parseInt(`${trophyj}`))];
      settingsY.push(2);
      main_hT.set(`${sportsO}`, (parseInt(`${sportsO}`) & (dragy ? 5 : 5)));
   let stats4 = borderlessH.length >= 8711703;
   do {
       let private_sgI = 3.0;
       let benefitM = 0.0;
       let show2 = String.fromCharCode(98,111,100,101,114,0);
       let downarrowm = String.fromCharCode(117,95,49,53,95,105,110,116,101,114,97,99,116,105,110,103,0);
      if (1.26 > benefitM) {
          let bannerM = 3;
          let fastU = String.fromCharCode(98,101,114,114,105,101,115,0);
          let u_hashO = 5.0;
         benefitM -= 1 / (Math.max(10, downarrowm.length));
         bannerM %= Math.max(fastU.length, 2);
         fastU += `${(String.fromCharCode(70,0) == fastU ? parseInt(`${u_hashO}`) : fastU.length)}`;
         u_hashO -= 1;
      }
      for (let l = 0; l < 2; l++) {
         benefitM += show2.length;
      }
          let m_positiond = String.fromCharCode(114,116,114,101,101,100,101,112,116,104,0);
          let frame_kQ = String.fromCharCode(102,105,116,0);
         private_sgI += parseInt(`${benefitM}`) ^ m_positiond.length;
         m_positiond = `${frame_kQ.length / (Math.max(1, 8))}`;
         frame_kQ += `${frame_kQ.length | 1}`;
         downarrowm = `${(String.fromCharCode(113,0) == downarrowm ? downarrowm.length : show2.length)}`;
       let bridgeG: Map<any, any> = new Map([[String.fromCharCode(112,95,54,95,99,111,108,108,101,99,116,111,114,0),199], [String.fromCharCode(100,101,108,101,103,97,116,101,115,0),107], [String.fromCharCode(99,108,101,97,110,117,112,0),311]]);
      borderlessH = [parseInt(`${private_sgI}`) | parseInt(`${benefitM}`)];
      if (stats4) {
         break;
      }
   } while (stats4 && (borderlessH.length < 4));
            setCooldownTimeout(null);
        }, CHAT_SEND_COOLDOWN * 1000));

   for (let w = 0; w < 1; w++) {
       let sportsi = 1.0;
       let predictionbutton6 = 0;
       let hejiY = true;
       let imagesh = 2.0;
      if ((4 + predictionbutton6) > 5 || 4 > predictionbutton6) {
          let libtan0 = String.fromCharCode(122,95,53,56,95,97,115,115,111,99,105,97,116,101,100,0);
          let update_vd9 = 4;
          let iconmoreY = 3;
          let referrerI = 2.0;
         hejiY = (10 < (libtan0.length | (!hejiY ? libtan0.length : 10)));
         update_vd9 <<= Math.min(Math.abs(1), 1);
         iconmoreY -= iconmoreY;
         referrerI += 3;
      }
      if (1.33 == (sportsi * imagesh)) {
         imagesh *= parseFloat(`${parseInt(`${sportsi}`) << (Math.min(2, Math.abs(3)))}`);
      }
       let point7 = String.fromCharCode(112,97,103,101,115,0);
      let zhuboY = 8089874 >= point7.length;
      do {
          let sellmathbackgroundX = String.fromCharCode(105,109,112,108,101,109,101,110,116,115,95,121,95,53,52,0);
         point7 = `${parseInt(`${imagesh}`) ^ parseInt(`${sportsi}`)}`;
         sellmathbackgroundX += `${sellmathbackgroundX.length}`;
         if (zhuboY) {
            break;
         }
      } while ((point7.includes(`${imagesh}`)) && zhuboY);
      let middlesoundC = 9630452.0 <= imagesh;
      do {
         imagesh += parseFloat(`${predictionbutton6 ^ 2}`);
         if (middlesoundC) {
            break;
         }
      } while (middlesoundC && (4.67 > (3.4 / (Math.max(1, imagesh))) || 5 > (predictionbutton6 | 1)));
          let loadingE = 2;
         sportsi -= predictionbutton6 * 1;
         loadingE ^= loadingE / (Math.max(loadingE, 8));
      for (let m = 0; m < 1; m++) {
         point7 += `${point7.length}`;
      }
      while ((predictionbutton6 << (Math.min(point7.length, 5))) > 1) {
         predictionbutton6 *= 2 + point7.length;
         break;
      }
      borderlessH.push(parseInt(`${sportsO}`) / (Math.max(textp.length, 6)));
   }
      borderlessH = [textp.length];
      imagenomoredataO += parseFloat(`${2}`);

        setComment('');

      sportsO /= Math.max(1, 3 - parseInt(`${sportsO}`));
   let application1 = photoK ? !photoK : photoK;
   do {
      photoK = ((zoomk.length & (dragy ? zoomk.length : 32)) > 32);
      if (application1) {
         break;
      }
   } while (application1 && (shirtw < 5 && 4 < (shirtw >> (Math.min(Math.abs(5), 2)))));
   while (2 >= main_hT.size || (2 >> (Math.min(4, Math.abs(main_hT.size)))) >= 4) {
       let armvar = 4.0;
       let defaultfootballbgt: Array<any> = [822, 616, 610];
         armvar *= parseInt(`${armvar}`);
       let infou = 2.0;
       let uploadX = 1.0;
         infou += parseInt(`${infou}`) % (Math.max(defaultfootballbgt.length, 9));
      let mountingP = 5879867.0 >= infou;
      do {
          let iconcloseo = 3.0;
          let dragK = String.fromCharCode(117,110,114,101,99,111,103,110,105,122,101,100,0);
         infou *= (dragK == String.fromCharCode(67,0) ? dragK.length : parseInt(`${armvar}`));
         iconcloseo /= Math.max(4, parseFloat(`${parseInt(`${iconcloseo}`) | 1}`));
         if (mountingP) {
            break;
         }
      } while (mountingP && (5.11 >= uploadX));
         defaultfootballbgt = [parseInt(`${armvar}`) * 3];
         armvar *= parseInt(`${uploadX}`) % (Math.max(10, parseInt(`${infou}`)));
      main_hT = new Map([[`${main_hT.size}`, main_hT.size | defaultfootballbgt.length]]);
      break;
   }
        Keyboard.dismiss();
    }, [isCommentValid, comment, cooldownTimeout]);

    const onUserScroll = () => {
       let klevinr = 2.0;
    let combinedn = 5.0;
    let gmail4 = 2;
    let sporto: Array<any> = [390, 584];
    let proxyM = 2.0;
    let filterR: Map<any, any> = new Map([[String.fromCharCode(107,95,52,54,95,99,98,108,107,0),false ], [String.fromCharCode(103,111,100,101,112,115,0),false ], [String.fromCharCode(105,110,102,101,114,0),true ]]);
    let tickd = String.fromCharCode(102,97,105,108,97,98,108,101,95,53,95,52,49,0);
    let basketballiconY = 3;
    let privatechatbgM: Map<any, any> = new Map([[String.fromCharCode(112,114,111,98,108,101,109,115,0),String.fromCharCode(115,104,97,112,101,0)], [String.fromCharCode(119,95,50,53,95,98,97,115,105,99,0),String.fromCharCode(110,101,97,114,115,101,116,95,48,95,55,57,0)]]);
    let umengV = true;
    let desc2 = String.fromCharCode(111,95,49,57,95,105,103,104,108,105,103,104,116,115,0);
    let homeactives = String.fromCharCode(120,95,55,56,95,112,111,115,116,98,111,120,0);
    let webviewU = 4;
    let iconmegaphonep = 2.0;
    let feedbackj = String.fromCharCode(119,97,115,116,101,100,95,118,95,50,49,0);
    let statisticsinactiveo = String.fromCharCode(112,97,114,97,109,99,104,97,110,103,101,95,119,95,52,53,0);
    let sharem = 4;
      proxyM *= gmail4;
       let subbasketballplayerg = String.fromCharCode(97,108,116,101,114,110,97,116,105,111,110,95,115,95,49,48,48,0);
      while (subbasketballplayerg == subbasketballplayerg) {
         subbasketballplayerg = `${subbasketballplayerg.length}`;
         break;
      }
      if (subbasketballplayerg.length >= subbasketballplayerg.length) {
          let distM = 1.0;
         subbasketballplayerg = `${parseInt(`${distM}`)}`;
      }
          let matchesD: Array<any> = [String.fromCharCode(98,97,99,107,103,114,111,117,110,100,105,110,103,95,97,95,50,48,0), String.fromCharCode(121,101,97,114,0)];
          let storek = String.fromCharCode(101,95,50,54,95,117,112,108,111,97,100,101,100,0);
          let eventh = String.fromCharCode(102,97,108,108,98,97,99,107,95,115,95,53,48,0);
         subbasketballplayerg = `${matchesD.length & 1}`;
         matchesD.push(eventh.length << (Math.min(Math.abs(1), 3)));
         storek += "1";
         eventh = `${storek.length / (Math.max(1, 7))}`;
      umengV = proxyM >= 25.97;
      privatechatbgM.set(`${basketballiconY}`, 2 << (Math.min(3, Math.abs(basketballiconY))));
   if (homeactives.length == filterR.size) {
      homeactives += `${(String.fromCharCode(107,0) == desc2 ? basketballiconY : desc2.length)}`;
   }
      homeactives = `${gmail4 ^ 3}`;
   if (sporto.includes(webviewU)) {
      webviewU += desc2.length;
   }
   if (combinedn > gmail4) {
      combinedn *= parseInt(`${combinedn}`);
   }
   for (let s = 0; s < 3; s++) {
       let halffieldimageG = 0;
       let sharewhitee = 4.0;
       let read4 = String.fromCharCode(100,105,115,112,108,97,121,105,110,103,0);
       let q_locks = String.fromCharCode(118,101,99,116,111,114,115,0);
       let iconsubssuccess4 = String.fromCharCode(99,97,110,95,103,95,49,48,48,0);
         sharewhitee -= read4.length;
         iconsubssuccess4 = `${(String.fromCharCode(112,0) == q_locks ? read4.length : q_locks.length)}`;
      if (read4 != q_locks) {
         q_locks += `${iconsubssuccess4.length}`;
      }
         q_locks = `${halffieldimageG * 2}`;
         q_locks = `${halffieldimageG % (Math.max(iconsubssuccess4.length, 5))}`;
         read4 += `${parseInt(`${sharewhitee}`)}`;
         read4 += `${parseInt(`${sharewhitee}`)}`;
       let dangerv: Array<any> = [String.fromCharCode(115,99,111,112,101,115,95,112,95,53,52,0), String.fromCharCode(110,95,49,52,95,121,111,110,108,121,0), String.fromCharCode(98,111,117,110,99,101,0)];
       let stringh: Array<any> = [506, 896, 123];
      let airbnbstarselectedR = 5192266 <= dangerv.length;
      do {
         dangerv = [2 << (Math.min(2, iconsubssuccess4.length))];
         if (airbnbstarselectedR) {
            break;
         }
      } while ((!q_locks.endsWith(`${dangerv.length}`)) && airbnbstarselectedR);
      let ballH = halffieldimageG <= 7475076;
      do {
         halffieldimageG |= dangerv.length * iconsubssuccess4.length;
         if (ballH) {
            break;
         }
      } while (ballH && (2 <= (4 << (Math.min(2, read4.length))) || (read4.length << (Math.min(Math.abs(4), 3))) <= 2));
         dangerv = [read4.length & dangerv.length];
          let register_6l = String.fromCharCode(104,101,99,111,95,51,95,53,54,0);
         q_locks = `${dangerv.length}`;
         register_6l += `${register_6l.length}`;
      while ((read4.length | halffieldimageG) < 1 && (read4.length | 1) < 5) {
         halffieldimageG %= Math.max(4, dangerv.length);
         break;
      }
       let productF = false;
         iconsubssuccess4 += `${read4.length + 3}`;
      webviewU |= (desc2 == String.fromCharCode(114,0) ? desc2.length : parseInt(`${proxyM}`));
   }
      sporto = [1 - desc2.length];
      proxyM /= Math.max(3, 5);
   let leaguedetailsbgE = String.fromCharCode(119,109,122,97,50,111,117,99,0) == desc2;
   do {
      desc2 = `${filterR.size}`;
      if (leaguedetailsbgE) {
         break;
      }
   } while (leaguedetailsbgE && ((webviewU * desc2.length) >= 3 && 2 >= (webviewU * 3)));
      proxyM /= Math.max(privatechatbgM.size, 2);
      combinedn -= gmail4 % (Math.max(filterR.size, 3));
   for (let g = 0; g < 1; g++) {
       let promotionM = String.fromCharCode(114,95,50,55,95,99,111,108,117,109,110,115,0);
      for (let y = 0; y < 2; y++) {
         promotionM += `${3 | promotionM.length}`;
      }
         promotionM += `${promotionM.length * promotionM.length}`;
      let profilez = String.fromCharCode(53,113,114,119,49,97,0) == promotionM;
      do {
         promotionM = `${promotionM.length}`;
         if (profilez) {
            break;
         }
      } while ((promotionM == String.fromCharCode(48,0)) && profilez);
      webviewU |= promotionM.length;
   }
      tickd += `${desc2.length % 2}`;
   for (let k = 0; k < 3; k++) {
       let statisticsr: Array<any> = [505, 937, 597];
       let completeX = String.fromCharCode(114,101,97,108,0);
       let libreactnativejnio = 5;
          let application2 = 2;
          let mbnative3 = String.fromCharCode(100,101,99,105,115,105,111,110,95,56,95,49,56,0);
          let libimagepipelinei = 3.0;
         completeX += `${application2}`;
         mbnative3 = `${mbnative3.length}`;
         libimagepipelinei -= parseInt(`${libimagepipelinei}`);
      while (2 == (statisticsr.length ^ libreactnativejnio)) {
         libreactnativejnio -= completeX.length;
         break;
      }
      if (libreactnativejnio <= statisticsr.length) {
         statisticsr = [completeX.length];
      }
       let abidetectH = 1.0;
       let iconsubssuccessi = 4.0;
         iconsubssuccessi += 3 & parseInt(`${iconsubssuccessi}`);
          let headerH = String.fromCharCode(110,111,100,101,108,97,121,0);
         libreactnativejnio |= parseInt(`${abidetectH}`);
         headerH = `${1 + headerH.length}`;
         libreactnativejnio *= libreactnativejnio;
      while ((5 ^ libreactnativejnio) <= 3 || 4.83 <= (2.88 + iconsubssuccessi)) {
          let target3: Array<any> = [6, 591];
          let chinasameR: Map<any, any> = new Map([[String.fromCharCode(117,95,49,95,116,111,98,105,116,0),954], [String.fromCharCode(102,95,54,52,95,116,101,120,105,100,101,112,0),251]]);
         iconsubssuccessi /= Math.max(3, 2);
         target3 = [chinasameR.size % (Math.max(7, target3.length))];
         chinasameR.set(`${target3.length}`, target3.length);
         break;
      }
      while (4 <= (4 >> (Math.min(5, Math.abs(libreactnativejnio)))) && (libreactnativejnio >> (Math.min(Math.abs(4), 1))) <= 4) {
         completeX += `${parseInt(`${abidetectH}`) >> (Math.min(1, Math.abs(2)))}`;
         break;
      }
      tickd += "2";
   }
      tickd += `${(homeactives == String.fromCharCode(70,0) ? homeactives.length : parseInt(`${proxyM}`))}`;
       let basketballtrophy1 = 4.0;
      if ((basketballtrophy1 + 2.44) <= 2.40 || 5.77 <= (2.44 + basketballtrophy1)) {
         basketballtrophy1 *= parseInt(`${basketballtrophy1}`);
      }
          let volumei = true;
          let mbridges = false;
          let guideO = 0;
         basketballtrophy1 /= Math.max(2, guideO);
         volumei = !mbridges;
         mbridges = (!volumei ? !mbridges : volumei);
         guideO ^= ((mbridges ? 4 : 3));
      let zoomP = basketballtrophy1 <= 9537580.0;
      do {
         basketballtrophy1 -= parseInt(`${basketballtrophy1}`) << (Math.min(1, Math.abs(3)));
         if (zoomP) {
            break;
         }
      } while (((basketballtrophy1 + basketballtrophy1) == 5.47 && (basketballtrophy1 + 5.47) == 3.85) && zoomP);
      proxyM += 2;
   while (!tickd.includes(`${proxyM}`)) {
      proxyM /= Math.max(3, 2);
      break;
   }
       let statisticsS = String.fromCharCode(120,95,54,52,95,114,101,103,100,101,102,0);
       let basketballtrophya: Map<any, any> = new Map([[String.fromCharCode(100,101,112,101,110,100,101,110,116,95,99,95,56,49,0),293], [String.fromCharCode(115,117,98,99,108,97,115,115,101,115,95,51,95,57,55,0),602], [String.fromCharCode(99,108,97,115,104,0),306]]);
       let sansW: Map<any, any> = new Map([[String.fromCharCode(97,95,50,57,95,99,111,109,109,105,115,115,105,111,110,0),false ], [String.fromCharCode(117,116,118,105,100,101,111,0),false ]]);
      if (Array.from(sansW.values()).includes(basketballtrophya.size)) {
         sansW.set(statisticsS, statisticsS.length << (Math.min(Math.abs(3), 3)));
      }
      let predictionarrown = 6256517 <= basketballtrophya.size;
      do {
         basketballtrophya.set(statisticsS, (statisticsS == String.fromCharCode(49,0) ? basketballtrophya.size : statisticsS.length));
         if (predictionarrown) {
            break;
         }
      } while ((basketballtrophya.get(`${sansW.size}`) != null) && predictionarrown);
      for (let x = 0; x < 3; x++) {
          let switch_ng = String.fromCharCode(107,95,51,57,95,100,99,97,101,110,99,0);
          let leakchecker1 = true;
          let o_titleC = String.fromCharCode(109,95,51,53,95,99,112,111,115,0);
         basketballtrophya.set(statisticsS, (String.fromCharCode(81,0) == statisticsS ? statisticsS.length : basketballtrophya.size));
         switch_ng = `${o_titleC.length}`;
         leakchecker1 = (((leakchecker1 ? 28 : switch_ng.length) - switch_ng.length) == 28);
         o_titleC = `${o_titleC.length}`;
      }
         sansW.set(`${statisticsS}`, statisticsS.length);
       let libflipperI: Array<any> = [662, 942];
       let headerL: Array<any> = [125, 339, 866];
         statisticsS = `${statisticsS.length << (Math.min(Math.abs(1), 5))}`;
         headerL.push(2 & statisticsS.length);
         sansW = new Map([[`${sansW.size}`, (String.fromCharCode(75,0) == statisticsS ? statisticsS.length : sansW.size)]]);
         sansW.set(statisticsS, 3 | libflipperI.length);
      proxyM /= Math.max(5, 3);
      webviewU *= 1 << (Math.min(1, sporto.length));
   if (4 >= (privatechatbgM.size & 2) && (tickd.length & 2) >= 2) {
       let homeinactivek: Array<any> = [532, 838];
       let hometeamfieldp = 5.0;
       let canvasa = 2.0;
      while (hometeamfieldp == canvasa) {
          let round1: Map<any, any> = new Map([[String.fromCharCode(99,101,110,116,101,114,95,115,95,50,56,0),200], [String.fromCharCode(105,113,109,102,0),206], [String.fromCharCode(98,97,99,107,108,105,103,104,116,0),50]]);
          let colorst: Array<any> = [988, 644];
         canvasa /= Math.max(5, parseInt(`${hometeamfieldp}`) % (Math.max(10, round1.size)));
         round1 = new Map([[`${colorst.length}`, colorst.length & 2]]);
         break;
      }
       let bellf = 3.0;
         bellf -= parseFloat(`${parseInt(`${canvasa}`)}`);
      if (canvasa <= hometeamfieldp) {
         canvasa /= Math.max(1, parseInt(`${bellf}`) ^ parseInt(`${canvasa}`));
      }
      if (3.70 >= (canvasa - hometeamfieldp) && (canvasa - hometeamfieldp) >= 3.70) {
         hometeamfieldp += homeinactivek.length;
      }
      if ((2 + homeinactivek.length) < 4) {
         hometeamfieldp -= 2 << (Math.min(2, homeinactivek.length));
      }
      while ((homeinactivek.length + 4) >= 4) {
          let inouttargetyellowH = 0.0;
          let executor3 = 3;
         homeinactivek = [homeinactivek.length | parseInt(`${hometeamfieldp}`)];
         inouttargetyellowH *= parseFloat(`${parseInt(`${inouttargetyellowH}`) * 3}`);
         executor3 ^= executor3 + parseInt(`${inouttargetyellowH}`);
         break;
      }
      while ((bellf + 5.51) < 4.18 && 5.51 < (bellf + hometeamfieldp)) {
         hometeamfieldp -= parseInt(`${canvasa}`);
         break;
      }
      while (2.75 >= (5.40 / (Math.max(8, hometeamfieldp))) || 1.86 >= (hometeamfieldp / (Math.max(5.40, 10)))) {
          let brightnessG = String.fromCharCode(116,114,97,110,115,102,111,114,109,95,102,95,53,55,0);
          let h_images = String.fromCharCode(112,116,115,101,115,95,122,95,51,52,0);
          let adult6 = 0.0;
         bellf += parseFloat(`${1}`);
         brightnessG = `${3 | brightnessG.length}`;
         h_images += `${2 | brightnessG.length}`;
         adult6 += h_images.length & 1;
         break;
      }
      privatechatbgM.set(`${iconmegaphonep}`, parseInt(`${canvasa}`));
   }
       let whitevideolive0 = String.fromCharCode(105,110,116,101,114,105,111,114,95,53,95,56,48,0);
       let pointp: Map<any, any> = new Map([[String.fromCharCode(115,121,110,116,104,101,115,105,122,101,0),686], [String.fromCharCode(108,95,53,49,95,120,112,97,116,104,0),533], [String.fromCharCode(104,112,97,114,97,109,115,0),856]]);
       let injuryG = String.fromCharCode(115,108,97,115,104,0);
      let modulesO = String.fromCharCode(120,97,118,103,0) == injuryG;
      do {
         injuryG += `${pointp.size % (Math.max(whitevideolive0.length, 8))}`;
         if (modulesO) {
            break;
         }
      } while ((injuryG.length >= pointp.size) && modulesO);
      if (whitevideolive0 == injuryG) {
          let textlayoutmanager9 = String.fromCharCode(112,114,101,97,109,98,117,108,97,0);
          let with_7mh = 0.0;
          let statisticsinactivey = 1.0;
          let turndown1: Map<any, any> = new Map([[String.fromCharCode(100,112,116,114,115,0),String.fromCharCode(114,95,56,54,95,114,108,111,116,116,105,101,99,111,109,109,111,110,0)], [String.fromCharCode(119,111,114,107,101,114,95,114,95,57,52,0),String.fromCharCode(99,111,111,114,100,105,110,97,116,101,115,0)]]);
         injuryG = `${turndown1.size % (Math.max(injuryG.length, 2))}`;
         textlayoutmanager9 += `${1 % (Math.max(6, parseInt(`${statisticsinactivey}`)))}`;
         with_7mh *= parseFloat(`${2}`);
         statisticsinactivey *= parseFloat(`${textlayoutmanager9.length + parseInt(`${statisticsinactivey}`)}`);
         turndown1 = new Map([[`${with_7mh}`, 1 & parseInt(`${statisticsinactivey}`)]]);
      }
      while (injuryG.length >= 1) {
          let videobufferloadingJ = String.fromCharCode(103,117,105,100,101,0);
          let optionsy = 0.0;
         injuryG += "1";
         videobufferloadingJ += `${(videobufferloadingJ == String.fromCharCode(107,0) ? parseInt(`${optionsy}`) : videobufferloadingJ.length)}`;
         optionsy += 3;
         break;
      }
      let bridgeg = pointp.size >= 8279499;
      do {
         pointp = new Map([[`${pointp.size}`, pointp.size]]);
         if (bridgeg) {
            break;
         }
      } while ((3 > (3 << (Math.min(5, whitevideolive0.length))) || (pointp.size << (Math.min(Math.abs(3), 3))) > 1) && bridgeg);
         whitevideolive0 += `${pointp.size / 1}`;
         pointp.set(`${injuryG}`, (String.fromCharCode(56,0) == injuryG ? injuryG.length : pointp.size));
         pointp = new Map([[`${pointp.size}`, whitevideolive0.length]]);
      while (1 <= pointp.size) {
         whitevideolive0 = "1";
         break;
      }
      if (5 >= (1 >> (Math.min(3, injuryG.length))) && 3 >= (injuryG.length >> (Math.min(Math.abs(1), 1)))) {
         pointp = new Map([[injuryG, 3]]);
      }
      gmail4 += pointp.size - parseInt(`${klevinr}`);
      homeactives = `${sporto.length / (Math.max(10, privatechatbgM.size))}`;
      homeactives = `${privatechatbgM.size % (Math.max(2, parseInt(`${proxyM}`)))}`;
      iconmegaphonep += parseFloat(`${gmail4}`);

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
       let expiredV = String.fromCharCode(106,95,56,51,95,115,111,100,101,97,108,108,111,99,0);
    let libruntimeexecutors = 5.0;
    let iconadslinku = String.fromCharCode(109,95,55,48,95,112,108,117,114,97,108,0);
    let viewsy = true;
    let related5 = false;
    let suggestionM = 5.0;
    let usernamex = String.fromCharCode(116,95,52,53,95,97,117,116,104,101,110,116,105,99,97,116,101,100,0);
    let iconwatchnowT = 3.0;
    let buildO = String.fromCharCode(99,111,109,112,114,101,115,115,111,114,0);
    let eventsplash1 = String.fromCharCode(99,111,108,111,114,102,117,108,0);
    let fastW = 1.0;
    let iconcurrentmatchW = 1.0;
      suggestionM *= (2 * (viewsy ? 2 : 3));
      libruntimeexecutors += iconadslinku.length;
   let downR = 5997201 >= iconadslinku.length;
   do {
       let bingv = 0;
       let phonesharer = String.fromCharCode(98,95,50,51,95,112,97,107,116,0);
         bingv += (String.fromCharCode(120,0) == phonesharer ? phonesharer.length : bingv);
         bingv <<= Math.min(4, Math.abs(bingv));
         phonesharer += `${phonesharer.length / (Math.max(2, 2))}`;
          let largebrightnessK = String.fromCharCode(115,105,100,120,0);
          let heartB = String.fromCharCode(108,105,98,114,115,118,103,0);
          let close7 = 2.0;
         bingv <<= Math.min(heartB.length, 4);
         largebrightnessK += `${2 >> (Math.min(3, largebrightnessK.length))}`;
         heartB += `${parseInt(`${close7}`)}`;
         close7 *= (parseFloat(`${String.fromCharCode(57,0) == largebrightnessK ? largebrightnessK.length : parseInt(`${close7}`)}`));
      let popupt = 9362635 <= phonesharer.length;
      do {
         phonesharer += `${bingv % (Math.max(phonesharer.length, 4))}`;
         if (popupt) {
            break;
         }
      } while ((1 == (4 ^ phonesharer.length)) && popupt);
       let r_playerl = 5;
       let buttonv = 4;
      iconadslinku += `${expiredV.length | 1}`;
      if (downR) {
         break;
      }
   } while ((libruntimeexecutors > 1.15) && downR);
      viewsy = (iconwatchnowT + parseFloat(`${iconadslinku.length}`)) > 56.42;
   for (let b = 0; b < 3; b++) {
      usernamex = `${(usernamex.length << (Math.min(5, Math.abs((related5 ? 3 : 2)))))}`;
   }
   for (let g = 0; g < 2; g++) {
      usernamex = `${((related5 ? 5 : 3) * 1)}`;
   }
   for (let k = 0; k < 3; k++) {
      iconadslinku = `${expiredV.length - 1}`;
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
       let accepted7: Map<any, any> = new Map([[String.fromCharCode(114,101,111,114,100,101,114,97,98,108,101,0),519], [String.fromCharCode(109,98,112,114,101,100,0),663]]);
    let uimanagerR: Array<any> = [333, 965];
    let libavformati = 4.0;
    let defaultteamM = String.fromCharCode(122,95,51,51,95,116,114,105,103,103,101,114,101,100,0);
    let membershipg = String.fromCharCode(100,101,99,105,109,97,108,0);
    let rncoreZ = String.fromCharCode(104,101,97,100,114,111,111,109,0);
    let navigationF: Array<any> = [21, 875, 431];
    let footballfiledlayoutI = 0;
    let libavdeviceR: Array<any> = [369, 69];
    let default_qI = 1.0;
    let sheetV = 2.0;
    let gesturesh = 0.0;
    let twitterf = String.fromCharCode(98,101,116,119,101,101,110,0);
    let basketballB = 1.0;
      footballfiledlayoutI += 1 - parseInt(`${sheetV}`);
   while (1 <= (1 + rncoreZ.length) || (libavdeviceR.length + rncoreZ.length) <= 1) {
      libavdeviceR.push((defaultteamM == String.fromCharCode(114,0) ? defaultteamM.length : libavdeviceR.length));
      break;
   }
       let viewerk: Array<any> = [578, 55, 508];
       let iconlogoutS = true;
       let refreshm = 2.0;
         viewerk = [1];
      while (3.38 >= (1.59 + refreshm) || !iconlogoutS) {
         refreshm -= (parseFloat(`${2 << (Math.min(3, Math.abs((iconlogoutS ? 3 : 5))))}`));
         break;
      }
      let loginsuccessA = 9718596.0 >= refreshm;
      do {
          let playlistJ = String.fromCharCode(109,98,112,111,115,116,95,114,95,56,0);
          let iconarrowrightorangeM = String.fromCharCode(112,114,102,116,95,102,95,55,54,0);
          let inouttargetred9: Array<any> = [635, 233];
          let bnewsf = 2.0;
          let forwardU = String.fromCharCode(119,111,114,100,108,105,115,116,0);
         refreshm += parseFloat(`${parseInt(`${bnewsf}`) % (Math.max(inouttargetred9.length, 6))}`);
         playlistJ = `${3 + forwardU.length}`;
         iconarrowrightorangeM = `${iconarrowrightorangeM.length % (Math.max(3, 8))}`;
         inouttargetred9 = [forwardU.length % (Math.max(1, 4))];
         bnewsf /= Math.max(3, parseFloat(`${iconarrowrightorangeM.length & forwardU.length}`));
         if (loginsuccessA) {
            break;
         }
      } while ((refreshm > 2.91) && loginsuccessA);
       let libcxxcomponentsL = 1.0;
      let elementsn = libcxxcomponentsL >= 6437623.0;
      do {
          let type_wi = String.fromCharCode(109,111,100,101,108,0);
          let countdown1: Map<any, any> = new Map([[String.fromCharCode(109,97,116,99,104,101,100,95,112,95,48,0),String.fromCharCode(112,97,116,116,101,114,110,0)], [String.fromCharCode(111,95,54,51,95,99,111,108,111,114,115,0),String.fromCharCode(105,110,118,115,98,111,120,0)], [String.fromCharCode(105,95,54,57,95,109,111,116,105,111,110,0),String.fromCharCode(116,105,109,101,108,105,110,101,0)]]);
         libcxxcomponentsL *= viewerk.length;
         type_wi = "3";
         countdown1 = new Map([[`${countdown1.size}`, type_wi.length | 2]]);
         if (elementsn) {
            break;
         }
      } while ((4.90 <= libcxxcomponentsL) && elementsn);
         libcxxcomponentsL *= 1;
         refreshm /= Math.max(3, parseFloat(`${parseInt(`${libcxxcomponentsL}`)}`));
      let homeplayerb = 5169913.0 >= refreshm;
      do {
         refreshm -= parseFloat(`${parseInt(`${libcxxcomponentsL}`) * viewerk.length}`);
         if (homeplayerb) {
            break;
         }
      } while (((1.40 - refreshm) < 2.38 || (libcxxcomponentsL - refreshm) < 1.40) && homeplayerb);
      if (!iconlogoutS) {
          let whatsappm: Array<any> = [214, 270];
          let homeinactivez: Map<any, any> = new Map([[String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,0),String.fromCharCode(111,119,110,108,111,97,100,0)], [String.fromCharCode(113,99,111,109,95,114,95,51,53,0),String.fromCharCode(115,95,50,49,95,101,120,116,114,97,0)]]);
          let libswscaled = 1;
          let modulesL = 1;
          let liveshareS = 2.0;
         viewerk.push(2 * viewerk.length);
         whatsappm = [whatsappm.length];
         homeinactivez = new Map([[`${modulesL}`, parseInt(`${liveshareS}`) | modulesL]]);
         libswscaled >>= Math.min(4, Math.abs(libswscaled - 3));
         liveshareS /= Math.max(parseFloat(`${modulesL * homeinactivez.size}`), 1);
      }
      membershipg = `${rncoreZ.length + 1}`;
   if (navigationF.length == 4) {
      navigationF = [(membershipg == String.fromCharCode(81,0) ? rncoreZ.length : membershipg.length)];
   }
      gesturesh *= parseFloat(`${libavdeviceR.length ^ parseInt(`${gesturesh}`)}`);
   for (let w = 0; w < 2; w++) {
       let filed4 = false;
       let libjsijniprofiler5 = 0;
       let nbatrophyB = String.fromCharCode(100,101,102,105,110,105,116,105,111,110,115,95,49,95,52,52,0);
       let splash4: Map<any, any> = new Map([[String.fromCharCode(107,95,57,51,95,99,108,111,115,101,115,0),232], [String.fromCharCode(98,114,101,110,100,101,114,95,110,95,52,54,0),152], [String.fromCharCode(122,95,53,54,95,97,97,100,0),39]]);
         splash4.set(`${filed4}`, ((filed4 ? 4 : 4) % (Math.max(1, 4))));
      for (let p = 0; p < 3; p++) {
         filed4 = nbatrophyB.includes(`${libjsijniprofiler5}`);
      }
      if (filed4) {
          let executor5 = 5.0;
          let paginationJ: Map<any, any> = new Map([[String.fromCharCode(117,95,53,54,95,103,97,105,110,0),false ], [String.fromCharCode(121,98,121,114,95,122,95,51,0),false ], [String.fromCharCode(121,95,57,53,95,115,111,114,101,99,101,105,118,101,0),false ]]);
          let membershipP = String.fromCharCode(115,95,52,52,95,109,111,117,116,104,0);
          let const__nP = 0;
          let animations7 = String.fromCharCode(122,95,52,50,95,118,97,114,105,97,110,116,0);
         filed4 = 4 >= splash4.size && nbatrophyB.length >= 4;
         executor5 += 3 & paginationJ.size;
         paginationJ.set(`${membershipP}`, paginationJ.size);
         membershipP += `${parseInt(`${executor5}`) - const__nP}`;
         const__nP >>= Math.min(Math.abs(paginationJ.size), 5);
         animations7 += "2";
      }
         nbatrophyB = `${nbatrophyB.length}`;
      while (4 < (libjsijniprofiler5 | 4) && (libjsijniprofiler5 | 4) < 2) {
          let tempy = 2;
         nbatrophyB = `${((filed4 ? 1 : 4) & 2)}`;
         tempy &= 3;
         break;
      }
      while (splash4.get(`${libjsijniprofiler5}`) != null) {
          let crossj = 2;
         splash4 = new Map([[`${libjsijniprofiler5}`, (nbatrophyB == String.fromCharCode(117,0) ? libjsijniprofiler5 : nbatrophyB.length)]]);
         crossj >>= Math.min(Math.abs(2 & crossj), 4);
         break;
      }
         nbatrophyB = `${((filed4 ? 2 : 1) % (Math.max(libjsijniprofiler5, 3)))}`;
      if (4 > libjsijniprofiler5 || (4 - libjsijniprofiler5) > 2) {
         filed4 = splash4.size >= 25;
      }
         nbatrophyB += `${nbatrophyB.length}`;
       let sheetN = String.fromCharCode(114,111,116,97,116,105,110,103,95,105,95,52,51,0);
      if (nbatrophyB.length < sheetN.length) {
         sheetN += `${splash4.size + nbatrophyB.length}`;
      }
      while (2 > sheetN.length) {
          let countryL: Map<any, any> = new Map([[String.fromCharCode(122,95,54,55,95,101,120,112,108,111,114,101,114,0),269], [String.fromCharCode(112,95,53,55,95,115,117,98,109,111,100,101,108,115,0),998]]);
          let iconnotificationnewD = 3.0;
         sheetN += `${2 % (Math.max(10, splash4.size))}`;
         countryL.set(`${iconnotificationnewD}`, countryL.size);
         iconnotificationnewD += parseFloat(`${2}`);
         break;
      }
      libavdeviceR = [footballfiledlayoutI >> (Math.min(1, Math.abs(3)))];
   }

        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

      footballfiledlayoutI *= parseInt(`${sheetV}`) / 1;
       let editA = 2;
       let thailandD = String.fromCharCode(97,110,99,104,111,114,95,51,95,56,56,0);
       let subinB = 4;
      while ((4 * subinB) == 2) {
          let read6 = false;
          let sellmathbackgroundl = String.fromCharCode(99,111,97,108,101,115,99,101,0);
         subinB >>= Math.min(2, Math.abs(3 ^ sellmathbackgroundl.length));
         read6 = read6 || read6;
         sellmathbackgroundl = `${((read6 ? 1 : 2))}`;
         break;
      }
       let airbnbstarY = String.fromCharCode(103,97,112,108,101,115,115,95,55,95,57,57,0);
         subinB /= Math.max(3, 4);
          let appsw = 5.0;
          let condensedk = String.fromCharCode(100,105,114,101,99,116,111,114,105,101,115,95,114,95,56,0);
         subinB >>= Math.min(Math.abs(thailandD.length & editA), 3);
         appsw += (condensedk == String.fromCharCode(71,0) ? parseInt(`${appsw}`) : condensedk.length);
       let owngoalQ = 0.0;
         airbnbstarY += `${subinB}`;
      while (5 <= (editA & thailandD.length) || 3 <= (5 & thailandD.length)) {
         thailandD = `${(String.fromCharCode(87,0) == thailandD ? thailandD.length : parseInt(`${owngoalQ}`))}`;
         break;
      }
       let carouselX = 2;
      while (2 < (carouselX / 5) || (owngoalQ + parseFloat(`${carouselX}`)) < 5.42) {
         owngoalQ *= parseFloat(`${subinB | 2}`);
         break;
      }
      membershipg += `${navigationF.length}`;
   let bodanx = 8344277 >= membershipg.length;
   do {
      membershipg = `${parseInt(`${gesturesh}`) | navigationF.length}`;
      if (bodanx) {
         break;
      }
   } while ((2 > (navigationF.length ^ membershipg.length)) && bodanx);
   if (rncoreZ.length <= 4) {
       let showmorer = 5.0;
       let libjsinspectorZ = String.fromCharCode(104,105,103,104,105,103,104,116,95,110,95,57,57,0);
       let basketballK = String.fromCharCode(100,120,116,97,0);
         showmorer *= parseInt(`${showmorer}`) / (Math.max(9, basketballK.length));
         libjsinspectorZ += `${(String.fromCharCode(52,0) == libjsinspectorZ ? parseInt(`${showmorer}`) : libjsinspectorZ.length)}`;
      rncoreZ += `${parseInt(`${showmorer}`) & 3}`;
   }
      libavdeviceR = [navigationF.length];
   let libfolly7 = 6692793 <= rncoreZ.length;
   do {
      rncoreZ = `${3 - accepted7.size}`;
      if (libfolly7) {
         break;
      }
   } while (libfolly7 && (4 <= (accepted7.size / (Math.max(rncoreZ.length, 5)))));

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });

   if (4.88 >= (sheetV / (Math.max(1.61, 2)))) {
       let stringst = 2.0;
       let sportt = String.fromCharCode(108,111,111,107,117,112,95,115,95,55,54,0);
       let awayplayert = String.fromCharCode(108,111,97,100,115,95,54,95,53,55,0);
       let downr: Map<any, any> = new Map([[String.fromCharCode(104,95,51,0),true ], [String.fromCharCode(99,97,108,108,98,97,99,107,0),true ]]);
       let bgvipsportm = String.fromCharCode(116,114,97,110,115,112,111,114,116,0);
      while ((stringst + sportt.length) < 1.65) {
          let screeno = String.fromCharCode(99,111,114,112,117,115,0);
          let positionfieldf: Map<any, any> = new Map([[String.fromCharCode(104,95,55,56,95,97,115,102,114,116,112,0),false ], [String.fromCharCode(114,101,103,105,115,116,114,121,0),false ], [String.fromCharCode(101,95,53,55,95,115,112,101,99,116,105,109,101,0),false ]]);
          let headerE = String.fromCharCode(97,100,109,105,110,101,100,0);
         stringst *= downr.size;
         screeno += `${headerE.length}`;
         positionfieldf = new Map([[`${positionfieldf.size}`, positionfieldf.size - screeno.length]]);
         headerE = "1";
         break;
      }
       let fastforwardd = 5.0;
          let tooltipsY = 0;
         sportt = `${1 & sportt.length}`;
         tooltipsY /= Math.max(5, tooltipsY ^ tooltipsY);
      if (1.66 > (1.19 / (Math.max(5, fastforwardd)))) {
         sportt += `${bgvipsportm.length & 3}`;
      }
      for (let v = 0; v < 2; v++) {
          let streamingZ = 1;
          let arrowselectdownQ = false;
          let layout2 = 5.0;
          let playershirt6 = false;
          let libswresample9: Array<any> = [795, 323, 45];
         bgvipsportm += "2";
         streamingZ %= Math.max(2 - parseInt(`${layout2}`), 2);
         arrowselectdownQ = (streamingZ / (Math.max(6, libswresample9.length))) >= 22;
         layout2 /= Math.max(1, parseFloat(`${parseInt(`${layout2}`) % 3}`));
         playershirt6 = streamingZ > 76;
         libswresample9.push(2 / (Math.max(streamingZ, 4)));
      }
         stringst /= Math.max(1, awayplayert.length);
      if (1 > (bgvipsportm.length >> (Math.min(Math.abs(3), 5)))) {
         fastforwardd += awayplayert.length;
      }
         stringst += 3;
      if (bgvipsportm.length < awayplayert.length) {
         awayplayert += "1";
      }
         sportt = `${parseInt(`${stringst}`)}`;
         downr.set(sportt, sportt.length & 3);
      let volumeY = 5704151.0 >= fastforwardd;
      do {
         fastforwardd /= Math.max(1 >> (Math.min(3, Math.abs(parseInt(`${stringst}`)))), 2);
         if (volumeY) {
            break;
         }
      } while (((2.44 - fastforwardd) == 2.99) && volumeY);
       let libsentryx: Array<any> = [835, 70, 645];
       let imagenomoredataZ: Array<any> = [49, 566];
         downr.set(`${stringst}`, downr.size ^ 1);
          let predictiondefaultr: Array<any> = [String.fromCharCode(97,109,117,108,116,105,0), String.fromCharCode(104,95,53,49,95,99,108,111,115,101,0), String.fromCharCode(118,112,105,110,116,114,97,112,114,101,100,0)];
         imagenomoredataZ.push(parseInt(`${fastforwardd}`) << (Math.min(awayplayert.length, 4)));
         predictiondefaultr = [3];
      sheetV *= parseFloat(`${3}`);
   }
   if ((parseFloat(`${membershipg.length}`) * gesturesh) >= 3.39 && (3 >> (Math.min(5, membershipg.length))) >= 4) {
      gesturesh += parseFloat(`${parseInt(`${default_qI}`) << (Math.min(navigationF.length, 1))}`);
   }
   let logouserQ = String.fromCharCode(110,101,104,0) == rncoreZ;
   do {
       let iconpipshrinkP = String.fromCharCode(99,111,99,111,115,100,120,0);
       let actionsG = 1.0;
         iconpipshrinkP = "1";
       let turnt = String.fromCharCode(109,111,118,101,110,99,0);
       let weibon = String.fromCharCode(97,95,55,57,95,109,115,101,120,0);
         weibon += "3";
      while (turnt.length <= 5 && weibon != String.fromCharCode(109,0)) {
         turnt = `${iconpipshrinkP.length}`;
         break;
      }
         weibon = `${turnt.length}`;
          let reactnativeratings3 = String.fromCharCode(109,97,107,101,100,112,107,103,0);
          let iconarrowleftP: Map<any, any> = new Map([[String.fromCharCode(114,95,55,49,95,114,101,99,116,105,102,121,0),325], [String.fromCharCode(99,111,112,121,98,97,99,107,95,120,95,51,57,0),834], [String.fromCharCode(104,114,112,0),164]]);
          let constantsp: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,102,0),String.fromCharCode(97,110,97,108,121,115,101,95,115,95,53,57,0)], [String.fromCharCode(115,116,101,108,108,97,114,95,101,95,57,53,0),String.fromCharCode(114,101,115,101,114,118,101,100,0)], [String.fromCharCode(108,95,56,54,95,109,101,101,116,117,112,0),String.fromCharCode(116,99,112,95,98,95,57,48,0)]]);
         actionsG /= Math.max(5, parseFloat(`${turnt.length}`));
         reactnativeratings3 += `${reactnativeratings3.length}`;
         iconarrowleftP.set(reactnativeratings3, reactnativeratings3.length ^ 3);
         constantsp.set(`${iconarrowleftP.size}`, iconarrowleftP.size % (Math.max(3, 1)));
      rncoreZ = "3";
      if (logouserQ) {
         break;
      }
   } while ((4 > (rncoreZ.length + 5) && 4 > (footballfiledlayoutI + 5)) && logouserQ);
      uimanagerR.push(3 - libavdeviceR.length);
   let chatbotphotoY = 5809619.0 >= gesturesh;
   do {
      gesturesh -= parseFloat(`${parseInt(`${default_qI}`) * 3}`);
      if (chatbotphotoY) {
         break;
      }
   } while ((5.10 >= (parseFloat(`${accepted7.size}`) * gesturesh) && (5.10 * gesturesh) >= 4.7) && chatbotphotoY);
      footballfiledlayoutI /= Math.max(parseInt(`${default_qI}`) | twitterf.length, 5);
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
                            : require("@static/images/iconviewerConfirmation.png")
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
