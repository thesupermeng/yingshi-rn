import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/xif_layout';
import { useAppDispatch } from '@hooks/kg_index';
import VodCard from '../../components/vod/qee_dice';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { XVSScoreDark } from '@type/wpk_long';
import { disableAdultMode, enableAdultMode } from '@redux/actions/a_switch';


interface XFillButton {
    vods: Array<XVSScoreDark>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: () => any,
    playerMode?: 'normal' | 'adult'
}

function VodListVerticalVip({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress, playerMode='normal' }: XFillButton) {
    const { textVariants, colors, spacing, icons } = useTheme();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const [cardsPerRow, setCardsPerRow] = useState(3);
    const [marginRight, setMarginRight] = useState(5);
    const [cardWidth, setCardWidth] = useState(3);
    const [cardHeight, setCardHeight] = useState(5);

    const width = Math.min(Dimensions.get('window').width, Dimensions.get('window').height);

    useEffect(() => {
        calculateDimensions;
    }, []);

    const calculateDimensions = useMemo(() => {
       let checkbox_ = String.fromCharCode(99,95,49,51,95,115,97,102,101,115,116,97,99,107,0);
    let analytici = String.fromCharCode(115,102,114,97,109,101,95,109,95,50,51,0);
    let verticalt = String.fromCharCode(100,95,51,57,95,97,112,112,118,101,121,111,114,0);
    let fill9 = String.fromCharCode(105,95,49,95,99,113,117,101,117,101,0);
    let untick8 = String.fromCharCode(115,111,117,110,100,115,95,105,95,49,48,0);
    let handlerI = 4.0;
    let field_ = String.fromCharCode(115,105,122,101,95,120,95,53,54,0);
   while (1.7 == handlerI) {
      field_ += `${verticalt.length}`;
      break;
   }
       let forwardr: Map<any, any> = new Map([[String.fromCharCode(102,95,50,50,95,118,105,100,101,111,115,116,114,101,97,109,0),String.fromCharCode(116,95,55,55,95,114,97,116,101,99,111,110,116,114,111,108,0)], [String.fromCharCode(104,95,56,57,95,99,111,100,101,102,0),String.fromCharCode(112,95,53,49,95,102,114,111,110,116,115,105,100,101,0)], [String.fromCharCode(104,97,118,105,110,103,95,55,95,54,53,0),String.fromCharCode(100,105,115,112,108,97,121,95,100,95,50,50,0)]]);
       let collectionW = false;
      if (collectionW) {
         collectionW = null == forwardr.get(`${collectionW}`);
      }
         collectionW = forwardr.size <= 17 || collectionW;
          let register_cF: Array<any> = [86, 187];
          let danger_ = String.fromCharCode(107,95,57,50,95,118,112,100,115,112,0);
         collectionW = forwardr.size > 96 || collectionW;
         register_cF.push(3 & danger_.length);
         danger_ = `${register_cF.length}`;
      let uploadb = 9652712 >= forwardr.size;
      do {
         forwardr.set(`${collectionW}`, ((collectionW ? 1 : 4) >> (Math.min(Math.abs(forwardr.size), 4))));
         if (uploadb) {
            break;
         }
      } while (uploadb && (!collectionW));
       let frame_rbB: Array<any> = [683, 128];
       let adultD: Array<any> = [84, 94, 999];
      let incidentM = frame_rbB.length <= 9499833;
      do {
         frame_rbB = [frame_rbB.length << (Math.min(Math.abs(3), 3))];
         if (incidentM) {
            break;
         }
      } while (incidentM && (3 == (frame_rbB.length % (Math.max(adultD.length, 6))) && 3 == (adultD.length % 3)));
      fill9 = `${fill9.length & verticalt.length}`;

        const PADDING = 8;

   for (let r = 0; r < 1; r++) {
      verticalt = `${analytici.length}`;
   }
      field_ += `${fill9.length}`;
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

   if (3 >= (4 + analytici.length) || 4.89 >= (analytici.length - handlerI)) {
       let goalK = 0;
       let shrinkb = 4.0;
      if (shrinkb <= 2.74) {
         shrinkb *= goalK;
      }
      while (goalK <= 2) {
         goalK <<= Math.min(3, Math.abs(goalK + parseInt(`${shrinkb}`)));
         break;
      }
         goalK <<= Math.min(4, Math.abs(goalK | parseInt(`${shrinkb}`)));
       let soundt = true;
         soundt = 16.75 <= shrinkb && 5 <= goalK;
          let streamingx: Array<any> = [131, 788];
         soundt = !soundt;
         streamingx = [streamingx.length / (Math.max(3, streamingx.length))];
      handlerI *= parseInt(`${handlerI}`);
   }
      verticalt += `${untick8.length}`;
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

      fill9 += `${checkbox_.length}`;
   for (let j = 0; j < 2; j++) {
      verticalt += `${verticalt.length}`;
   }
        let cardWidth = Math.min(160, Math.floor(maxWidth)) ;

      analytici = `${2 + fill9.length}`;
   let bufferY = untick8 == String.fromCharCode(107,105,122,0);
   do {
      untick8 = "3";
      if (bufferY) {
         break;
      }
   } while ((checkbox_.includes(`${untick8.length}`)) && bufferY);
        const cardHeight = heightToWidthRatio * cardWidth;

   while (3 == field_.length) {
      field_ += "2";
      break;
   }
   while (verticalt.startsWith(checkbox_)) {
      verticalt = `${fill9.length >> (Math.min(untick8.length, 2))}`;
      break;
   }
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

      untick8 = `${3 >> (Math.min(2, verticalt.length))}`;
   if (fill9.endsWith(`${field_.length}`)) {
       let langkey8 = String.fromCharCode(112,114,105,111,114,105,116,121,113,95,104,95,57,0);
       let floatero = String.fromCharCode(104,97,115,104,116,97,103,115,95,120,95,51,0);
         floatero += `${floatero.length << (Math.min(langkey8.length, 3))}`;
      let mapping4 = floatero.length >= 6465574;
      do {
          let kickp = 5;
          let guide3 = String.fromCharCode(103,95,51,51,95,109,117,108,120,0);
          let downloadingD = 0;
         floatero += `${downloadingD + 1}`;
         kickp %= Math.max(2 * guide3.length, 5);
         guide3 += `${kickp | 2}`;
         downloadingD += 1 - guide3.length;
         if (mapping4) {
            break;
         }
      } while (mapping4 && (floatero.length >= 4));
      let o_unlockO = 9421815 >= langkey8.length;
      do {
         langkey8 += `${langkey8.length}`;
         if (o_unlockO) {
            break;
         }
      } while (o_unlockO && (floatero != String.fromCharCode(110,0)));
      let linkJ = floatero.length <= 8410451;
      do {
         floatero = `${floatero.length}`;
         if (linkJ) {
            break;
         }
      } while (linkJ && (4 <= langkey8.length));
         langkey8 += `${floatero.length | langkey8.length}`;
         langkey8 = `${langkey8.length ^ floatero.length}`;
      fill9 = `${floatero.length - checkbox_.length}`;
   }
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

   let malaysiaA = String.fromCharCode(49,103,99,120,121,0) == verticalt;
   do {
      verticalt = `${2 ^ analytici.length}`;
      if (malaysiaA) {
         break;
      }
   } while ((verticalt == String.fromCharCode(69,0) && untick8.length == 1) && malaysiaA);
   while (fill9 == String.fromCharCode(81,0)) {
       let currentL: Array<any> = [259, 852];
       let time_v2 = String.fromCharCode(105,100,99,116,108,108,109,95,52,95,54,49,0);
          let dataM: Map<any, any> = new Map([[String.fromCharCode(97,95,56,48,95,108,105,98,101,118,101,110,116,0),166], [String.fromCharCode(100,95,56,50,95,99,111,112,105,101,115,0),460], [String.fromCharCode(108,95,54,57,95,111,97,117,116,104,0),370]]);
          let connection3 = String.fromCharCode(113,95,54,56,95,99,111,115,116,105,0);
         time_v2 += `${dataM.size << (Math.min(Math.abs(3), 1))}`;
         dataM = new Map([[connection3, 3 | connection3.length]]);
      if (!time_v2.includes(`${currentL.length}`)) {
         currentL.push(currentL.length >> (Math.min(Math.abs(1), 1)));
      }
         currentL = [(String.fromCharCode(104,0) == time_v2 ? currentL.length : time_v2.length)];
      while (4 > currentL.length) {
         currentL.push(time_v2.length >> (Math.min(2, currentL.length)));
         break;
      }
      for (let r = 0; r < 3; r++) {
         currentL.push((time_v2 == String.fromCharCode(95,0) ? time_v2.length : currentL.length));
      }
       let scorek = 4;
      untick8 = `${time_v2.length - fill9.length}`;
      break;
   }
        if (BTN_MARGIN_RIGHT > 16) {

      checkbox_ += "3";
      analytici = `${(analytici == String.fromCharCode(48,0) ? field_.length : analytici.length)}`;
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

      analytici += `${untick8.length / (Math.max(1, 7))}`;
      analytici = `${untick8.length % (Math.max(2, 10))}`;
            BTN_MARGIN_RIGHT = 16;

   for (let z = 0; z < 1; z++) {
      analytici = `${analytici.length + 2}`;
   }
      verticalt += `${field_.length}`;
            cardWidth += Math.floor(excess / CARDS_PER_ROW)  
        }

        setCardsPerRow(CARDS_PER_ROW);

   let profilec = fill9 == String.fromCharCode(108,54,121,57,51,107,108,112,121,0);
   do {
       let commentR: Array<any> = [501, 647, 475];
       let inviteY: Array<any> = [362, 849, 563];
       let crownZ = String.fromCharCode(99,95,50,49,95,99,111,100,101,115,0);
       let darkY = 5;
       let settingp = 2;
      while (settingp >= 4) {
          let delegate_ell = 2.0;
          let sell7 = String.fromCharCode(97,95,55,57,95,120,99,111,100,101,0);
          let currentV = 2;
          let router0 = String.fromCharCode(102,111,114,101,105,103,110,95,108,95,54,0);
         inviteY.push(1 | currentV);
         delegate_ell += router0.length;
         sell7 = `${router0.length & 3}`;
         currentV &= parseInt(`${delegate_ell}`);
         break;
      }
         inviteY.push(crownZ.length << (Math.min(Math.abs(2), 1)));
      let greyb = commentR.length >= 8639868;
      do {
         commentR = [settingp >> (Math.min(2, Math.abs(1)))];
         if (greyb) {
            break;
         }
      } while ((3 >= (5 << (Math.min(3, commentR.length))) && (commentR.length << (Math.min(5, Math.abs(settingp)))) >= 5) && greyb);
          let pressureA = String.fromCharCode(114,95,50,49,95,105,110,116,101,114,115,112,101,114,115,101,0);
          let subsf = false;
         commentR = [settingp % (Math.max(pressureA.length, 9))];
         pressureA = "1";
         commentR = [settingp - 2];
          let play7 = String.fromCharCode(105,95,56,50,95,115,101,114,105,97,108,105,122,101,114,0);
          let icon1 = 5.0;
          let grayY = 2;
         commentR = [grayY];
         play7 = `${(play7 == String.fromCharCode(50,0) ? parseInt(`${icon1}`) : play7.length)}`;
         icon1 /= Math.max(3, parseFloat(`${play7.length ^ parseInt(`${icon1}`)}`));
      for (let o = 0; o < 3; o++) {
         crownZ = "2";
      }
         settingp *= settingp << (Math.min(commentR.length, 3));
      while (4 >= (darkY / (Math.max(8, commentR.length))) || 4 >= (darkY / (Math.max(4, 2)))) {
         commentR = [settingp];
         break;
      }
         commentR = [crownZ.length];
         crownZ += `${2 * crownZ.length}`;
         darkY &= darkY ^ settingp;
       let confirmationG: Array<any> = [175, 534, 156];
      let referrere = commentR.length >= 5710440;
      do {
          let lesso: Array<any> = [String.fromCharCode(113,95,55,48,95,115,111,102,116,102,108,111,97,116,0), String.fromCharCode(99,109,97,115,107,95,113,95,53,51,0)];
          let langF: Array<any> = [666, 295, 781];
          let link5 = String.fromCharCode(116,111,111,108,98,97,114,115,95,117,95,48,0);
         commentR.push(darkY ^ crownZ.length);
         lesso.push((link5 == String.fromCharCode(86,0) ? link5.length : langF.length));
         langF = [1];
         if (referrere) {
            break;
         }
      } while ((4 <= (5 | confirmationG.length)) && referrere);
      if ((commentR.length | 1) <= 3 && (1 | commentR.length) <= 1) {
         darkY >>= Math.min(Math.abs(3), 5);
      }
      fill9 = `${inviteY.length >> (Math.min(Math.abs(3), 1))}`;
      if (profilec) {
         break;
      }
   } while ((field_.length == 5) && profilec);
   while (4 < field_.length) {
      field_ = `${(verticalt == String.fromCharCode(99,0) ? field_.length : verticalt.length)}`;
      break;
   }
        setMarginRight(BTN_MARGIN_RIGHT);

   while ((1.22 + handlerI) == 1.4) {
      handlerI /= Math.max(1, 1 / (Math.max(1, analytici.length)));
      break;
   }
   while (!untick8.startsWith(`${fill9.length}`)) {
      fill9 += `${verticalt.length * untick8.length}`;
      break;
   }
        setCardWidth(cardWidth - 10);

      verticalt = `${untick8.length}`;
   while (fill9 != String.fromCharCode(108,0)) {
      analytici = `${analytici.length}`;
      break;
   }
        setCardHeight(cardHeight);
    }, []);
    
    const vodMapItem = (vod: any, idx: any) => (
        <VodCard
            key={`${vod.vod_id}`}
            vod_name={vod?.vod_name}
            vod_pic={vod?.vod_pic}
            showInfo={vod?.vod_remarks}
            vodImageStyle={{
                width: cardWidth,
                height: cardHeight,
                marginRight: (idx % cardsPerRow) === cardsPerRow - 1 ? 0 : marginRight,
            }}
            vodCardContainerStyle={{
                marginBottom: Math.min(marginRight, 14)
            }}
            onPress={() => {
                if(onPress){
                    onPress();
                }
                dispatch(playVod(vod));
                navigation.navigate('播放', {
                    vod_id: vod?.vod_id,
                    player_mode: playerMode
                });
                
                
            }}
            index={idx}
        />
    )
    
    return (
        <View style={styles.vodList}>
            {
                vods &&
                vods.slice(0, numOfRows * cardsPerRow).map(vodMapItem)
            }
        </View>
    )
}

export default memo(VodListVerticalVip);

const styles = StyleSheet.create({
    vodList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})