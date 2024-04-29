import React, { Suspense, memo, useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import VipModal from './tt_expired_upgrade';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '@hooks/tt_spec_download';
import {
  resetBecomeVip,
  showLoginAction,
} from '@redux/actions/tt_copy_heji';
import FastImage from 'react-native-fast-image';
import { SHOW_ZF_CONST } from '@utility/tt_trophy_cross';
import { AdultVipPrivilegeOverlay } from './tt_material';
import { SportVipPrivilegeOverlay } from './tt_screen';
import { CommonVipPrivilegeOverlay } from './tt_popup';

interface ttSmall {
  showBecomeVIPOverlay: boolean;
  setShowBecomeVIPOverlay: any;
  isJustClose?: boolean;
  selectedTab: 'sport' | 'xvod' | 'common',
  onClose?: () => void,
}

function ExpiredOverlay({
  showBecomeVIPOverlay = false,
  setShowBecomeVIPOverlay,
  isJustClose,
  selectedTab,
  onClose,
}: ttSmall) {
  const navigator = useNavigation();
  const dispatch = useAppDispatch();
  const route = useRoute();

  
  
  

  const { colors, textVariants, spacing, icons } = useTheme();

  const renderOverlay = () => {
       let pangleV: Array<any> = [String.fromCharCode(97,114,109,118,95,122,95,50,53,0), String.fromCharCode(101,109,105,116,116,101,100,95,118,95,57,49,0)];
    let moviesw = String.fromCharCode(109,95,51,52,95,110,111,116,105,102,121,105,110,103,0);
    let handlerb = String.fromCharCode(120,95,52,48,95,98,105,116,118,101,99,116,111,114,0);
    let closeU = 2.0;
    let mbsplash3: Array<any> = [193, 624];
    let subsE = false;
    let philippinesP = 1.0;
    let about9 = String.fromCharCode(99,95,57,57,95,97,117,100,105,111,103,101,110,0);
    let u_playerm = String.fromCharCode(102,111,114,103,111,116,116,101,110,95,114,95,49,51,0);
    let infos: Map<any, any> = new Map([[String.fromCharCode(98,95,49,55,95,97,115,99,101,110,116,0),String.fromCharCode(122,95,56,55,95,99,111,108,108,0)], [String.fromCharCode(119,114,105,116,101,105,110,105,116,95,99,95,49,52,0),String.fromCharCode(117,115,101,115,95,116,95,52,51,0)]]);
      pangleV.push(infos.size * moviesw.length);
   for (let p = 0; p < 2; p++) {
      mbsplash3.push(parseInt(`${closeU}`) * u_playerm.length);
   }
      u_playerm += `${(u_playerm == String.fromCharCode(76,0) ? u_playerm.length : parseInt(`${philippinesP}`))}`;
   let saveP = 5421093 <= handlerb.length;
   do {
      handlerb = `${moviesw.length}`;
      if (saveP) {
         break;
      }
   } while (saveP && ((5 ^ mbsplash3.length) >= 5 || 2 >= (handlerb.length ^ 5)));

    if (selectedTab === 'xvod') {

      about9 += `${infos.size ^ 1}`;
   while (4 <= (moviesw.length * 5) && 4.60 <= (closeU + parseFloat(`${moviesw.length}`))) {
      closeU -= parseFloat(`${pangleV.length / (Math.max(handlerb.length, 5))}`);
      break;
   }
   for (let i = 0; i < 2; i++) {
      closeU -= parseFloat(`${u_playerm.length}`);
   }
   if (parseInt(`${philippinesP}`) >= u_playerm.length) {
       let mbbid5 = 4;
      while ((mbbid5 + mbbid5) <= 3) {
         mbbid5 %= Math.max(mbbid5, 1);
         break;
      }
          let championS: Map<any, any> = new Map([[String.fromCharCode(104,95,54,51,95,114,101,111,115,0),781], [String.fromCharCode(97,108,108,111,119,115,95,108,95,53,52,0),639]]);
          let resendt = false;
          let soundg = 1;
         mbbid5 |= mbbid5 * soundg;
         championS.set(`${resendt}`, 1 - championS.size);
         soundg -= ((resendt ? 5 : 2) % (Math.max(championS.size, 3)));
      let dialog2 = mbbid5 >= 7846001;
      do {
          let vietnamI = String.fromCharCode(101,120,112,95,53,95,53,57,0);
          let showx = 4.0;
          let overlayd = String.fromCharCode(119,95,49,95,97,115,115,101,115,115,109,101,110,116,0);
          let fully = 3.0;
          let volumeI = 2.0;
         mbbid5 *= 3;
         vietnamI = `${parseInt(`${volumeI}`)}`;
         showx *= parseFloat(`${parseInt(`${volumeI}`)}`);
         overlayd += `${overlayd.length ^ 3}`;
         fully += parseFloat(`${1}`);
         if (dialog2) {
            break;
         }
      } while (dialog2 && ((2 - mbbid5) <= 2 && 2 <= (mbbid5 - mbbid5)));
      u_playerm = `${2 << (Math.min(4, Math.abs(parseInt(`${closeU}`))))}`;
   }
      return (
        <AdultVipPrivilegeOverlay
          showCondition={showBecomeVIPOverlay}
          onClose={() => {
            if (onClose) onClose();
            setShowBecomeVIPOverlay(false);
          }}
        />
      );
    } else if (selectedTab === 'sport') {

       let arean = String.fromCharCode(118,105,111,108,101,110,99,101,95,98,95,52,48,0);
         arean += `${arean.length}`;
         arean = `${arean.length & 3}`;
         arean = `${arean.length}`;
      subsE = !subsE;
       let list3: Array<any> = [483, 635];
       let megaphoneZ = String.fromCharCode(104,95,53,56,95,112,108,97,99,101,115,0);
      let hookx = 6346713 >= list3.length;
      do {
          let schedule6 = 2.0;
         list3.push(1 % (Math.max(6, parseInt(`${schedule6}`))));
         if (hookx) {
            break;
         }
      } while (hookx && (list3.length > 5));
      let modelsd = megaphoneZ.length <= 5588455;
      do {
         megaphoneZ += `${list3.length}`;
         if (modelsd) {
            break;
         }
      } while ((megaphoneZ.length <= list3.length) && modelsd);
          let types3 = true;
          let androidi: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,111,110,95,56,95,57,51,0),false ], [String.fromCharCode(102,111,114,99,101,100,95,49,95,55,49,0),false ], [String.fromCharCode(112,99,109,117,95,99,95,54,57,0),false ]]);
         megaphoneZ += `${((types3 ? 2 : 3) | androidi.size)}`;
      for (let y = 0; y < 3; y++) {
          let verticalD: Array<any> = [61, 591, 109];
         list3.push(3);
         verticalD = [verticalD.length >> (Math.min(Math.abs(3), 4))];
      }
         list3.push(megaphoneZ.length);
      let securityB = 8085612 >= list3.length;
      do {
         list3.push(megaphoneZ.length);
         if (securityB) {
            break;
         }
      } while (securityB && ((list3.length << (Math.min(megaphoneZ.length, 5))) < 3 || (list3.length << (Math.min(megaphoneZ.length, 2))) < 3));
      closeU *= (parseFloat(`${1 << (Math.min(2, Math.abs((subsE ? 2 : 1))))}`));
      pangleV.push((String.fromCharCode(71,0) == about9 ? about9.length : u_playerm.length));
      mbsplash3.push(handlerb.length);
      return (
        <SportVipPrivilegeOverlay
          showCondition={showBecomeVIPOverlay}
          onClose={({ isAutoClose }) => {
            if (!isAutoClose && onClose) onClose();
            setShowBecomeVIPOverlay(false);
          }}
        />
      );
    } else if (selectedTab === 'common') {

      u_playerm = `${parseInt(`${closeU}`) << (Math.min(Math.abs(2), 5))}`;
      subsE = (37 < (mbsplash3.length - (subsE ? 37 : mbsplash3.length)));
   while ((1 - infos.size) == 2 && 4 == (1 & infos.size)) {
      infos = new Map([[handlerb, handlerb.length]]);
      break;
   }
      handlerb = `${(u_playerm == String.fromCharCode(100,0) ? parseInt(`${philippinesP}`) : u_playerm.length)}`;
      return <CommonVipPrivilegeOverlay
        showCondition={showBecomeVIPOverlay}
        onClose={() => {

   for (let b = 0; b < 2; b++) {
      infos.set(handlerb, 2 & handlerb.length);
   }
      philippinesP += about9.length;
      subsE = 75 == mbsplash3.length || handlerb == String.fromCharCode(76,0);
       let applew = 5.0;
       let zhengpianh = 4.0;
       let catagoryp = String.fromCharCode(107,95,50,57,95,115,116,97,116,105,111,110,97,114,121,0);
         zhengpianh -= parseInt(`${applew}`) ^ catagoryp.length;
      while (applew == 3.63) {
         zhengpianh -= (String.fromCharCode(49,0) == catagoryp ? catagoryp.length : parseInt(`${zhengpianh}`));
         break;
      }
       let with_azP = String.fromCharCode(118,95,52,48,95,118,109,100,118,105,100,101,111,0);
       let closeT = String.fromCharCode(109,97,121,95,111,95,50,55,0);
         with_azP = `${2 + parseInt(`${applew}`)}`;
      while (4 == with_azP.length) {
          let predictionW = 3;
          let langz = 4;
          let policyw = 1.0;
         closeT = `${langz}`;
         predictionW %= Math.max(2, parseInt(`${policyw}`) % 1);
         langz >>= Math.min(4, Math.abs(parseInt(`${policyw}`)));
         break;
      }
      if (catagoryp.length == applew) {
         catagoryp += `${parseInt(`${applew}`)}`;
      }
      if (closeT == with_azP) {
          let action7 = true;
         with_azP = `${(catagoryp == String.fromCharCode(110,0) ? catagoryp.length : (action7 ? 5 : 4))}`;
      }
       let singlev = String.fromCharCode(106,95,53,50,95,118,115,116,97,116,115,0);
       let humidityP = String.fromCharCode(108,95,50,52,95,112,105,112,101,0);
         catagoryp += `${1 * catagoryp.length}`;
      handlerb = `${1 + pangleV.length}`;
          if (onClose) onClose();

      subsE = infos.size >= mbsplash3.length;
      subsE = handlerb.length >= 76;
       let description_hoY = String.fromCharCode(108,95,56,52,95,114,102,116,98,115,117,98,0);
          let expandQ = String.fromCharCode(110,101,97,114,101,114,95,97,95,55,55,0);
         description_hoY += "1";
         expandQ += `${expandQ.length}`;
          let manifestd: Array<any> = [987, 749];
          let orientation_: Array<any> = [312, 175, 918];
         description_hoY = `${2 << (Math.min(2, manifestd.length))}`;
         manifestd = [orientation_.length + 2];
         orientation_.push(orientation_.length);
          let infod: Array<any> = [203, 859, 943];
          let black2 = String.fromCharCode(99,104,101,99,107,95,56,95,49,57,0);
         description_hoY = `${description_hoY.length}`;
         infod = [(black2 == String.fromCharCode(104,0) ? infod.length : black2.length)];
      mbsplash3 = [parseInt(`${philippinesP}`) << (Math.min(pangleV.length, 5))];
   let privilegeo = about9.length >= 8184771;
   do {
      about9 = `${(1 % (Math.max(2, (subsE ? 5 : 1))))}`;
      if (privilegeo) {
         break;
      }
   } while (privilegeo && (!about9.includes(`${infos.size}`)));
          setShowBecomeVIPOverlay(false);
        }}
      />
    }
  };


  return (
    <>
      {showBecomeVIPOverlay && (
        <View
          style={{
            height: '100%',
            width: '100%',
            
            position: 'absolute',
            zIndex: 1000,
          }}>
          {renderOverlay()}
        </View>
      )}
    </>
  );
}

export default ExpiredOverlay

const styles = StyleSheet.create({
  closeBtnContainer: {
    height: 20,
    width: 20,
    marginTop: -20,
    marginRight: -10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(201, 201, 201, 0.3)',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 10,
    paddingTop: 25,
    paddingBottom: 10,
  },

  btn: {
    backgroundColor: '#FAC33D',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  }
})
