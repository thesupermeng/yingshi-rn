import React, { Suspense, memo, useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import VipModal from './wawa_scorepopsound';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '@hooks/wawa_root';
import {
  resetBecomeVip,
  showLoginAction,
} from '@redux/actions/wawa_related';
import FastImage from 'react-native-fast-image';
import { SHOW_ZF_CONST } from '@utility/wawa_iconpointscore';
import { AdultVipPrivilegeOverlay } from './wawa_whitetick';
import { SportVipPrivilegeOverlay } from './wawa_mail';
import { CommonVipPrivilegeOverlay } from './wawa_middleware';

interface wawaAwayShow {
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
}: wawaAwayShow) {
  const navigator = useNavigation();
  const dispatch = useAppDispatch();
  const route = useRoute();

  
  
  

  const { colors, textVariants, spacing, icons } = useTheme();

  const renderOverlay = () => {
       let miniP = String.fromCharCode(102,117,122,122,95,120,95,51,55,0);
    let statsnomoredatai: Array<any> = [String.fromCharCode(119,95,51,49,95,99,111,111,108,100,111,119,110,115,0), String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,100,95,108,95,50,48,0), String.fromCharCode(109,112,101,103,117,116,105,108,115,95,100,95,51,54,0)];
    let subsj: Map<any, any> = new Map([[String.fromCharCode(103,95,56,49,95,115,116,111,112,112,101,100,0),String.fromCharCode(104,95,53,57,95,101,108,108,105,112,116,105,99,97,108,0)], [String.fromCharCode(99,111,108,111,110,115,95,115,95,54,53,0),String.fromCharCode(117,95,54,50,95,115,119,105,116,99,104,101,100,0)]]);
    let fieldy = 2.0;
    let mintegralv = String.fromCharCode(99,97,115,104,116,97,103,95,103,95,57,55,0);
    let iconbackwhiteE = String.fromCharCode(106,95,54,57,95,115,104,105,109,109,101,114,105,110,103,0);
    let awayplayerX = true;
    let trophy8 = true;
    let darkt = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,95,109,95,55,55,0);
    let gifgoalK = String.fromCharCode(121,95,49,50,95,115,116,114,105,100,101,98,0);
    let iconbellactivex = 1;
    let appsY = true;
   let matchesh = 5469388 <= mintegralv.length;
   do {
      mintegralv += `${mintegralv.length + 2}`;
      if (matchesh) {
         break;
      }
   } while (matchesh && (1 < (mintegralv.length >> (Math.min(Math.abs(5), 3))) || (fieldy * 3.8) < 3.70));
   if (!trophy8 || 3 < darkt.length) {
       let moviesZ = String.fromCharCode(100,95,49,50,95,115,110,110,105,100,0);
       let baiduadsV = String.fromCharCode(114,101,97,108,108,111,99,97,116,101,95,112,95,52,57,0);
       let projectA = String.fromCharCode(115,108,105,99,101,97,110,103,108,101,95,105,95,51,49,0);
       let baiduu = 1.0;
         baiduadsV = `${(String.fromCharCode(114,0) == projectA ? baiduadsV.length : projectA.length)}`;
      while ((baiduu / 1.46) <= 3.52 || 2 <= (baiduadsV.length << (Math.min(Math.abs(5), 4)))) {
         baiduadsV += `${moviesZ.length ^ baiduadsV.length}`;
         break;
      }
      for (let u = 0; u < 2; u++) {
          let scheduler2 = String.fromCharCode(112,114,117,110,105,110,103,95,54,95,57,0);
          let sigmobX: Map<any, any> = new Map([[String.fromCharCode(113,95,57,56,95,117,100,105,111,0),true ], [String.fromCharCode(117,105,110,116,95,97,95,54,48,0),false ]]);
          let rootv = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,116,95,48,95,49,50,0);
          let redirectD = 0.0;
         moviesZ += `${sigmobX.size}`;
         scheduler2 = "1";
         sigmobX = new Map([[scheduler2, 3 & rootv.length]]);
         rootv += `${parseInt(`${redirectD}`)}`;
         redirectD *= parseFloat(`${scheduler2.length}`);
      }
      if (projectA != String.fromCharCode(85,0)) {
         baiduadsV += `${(baiduadsV == String.fromCharCode(77,0) ? baiduadsV.length : moviesZ.length)}`;
      }
          let xnewarchdefaults9 = true;
          let manifestT = false;
          let langkeyY = true;
         moviesZ = `${2 + moviesZ.length}`;
         xnewarchdefaults9 = !manifestT;
         langkeyY = (langkeyY ? manifestT : !langkeyY);
      let default_ivL = projectA == String.fromCharCode(116,50,119,118,56,113,95,117,110,0);
      do {
         projectA = "3";
         if (default_ivL) {
            break;
         }
      } while ((5 > projectA.length) && default_ivL);
      let wind4 = moviesZ.length <= 7236966;
      do {
         moviesZ = `${(projectA == String.fromCharCode(68,0) ? moviesZ.length : projectA.length)}`;
         if (wind4) {
            break;
         }
      } while ((moviesZ.length > 5 || projectA != String.fromCharCode(68,0)) && wind4);
      for (let w = 0; w < 3; w++) {
          let airbnbstarQ = String.fromCharCode(117,95,51,95,114,101,118,105,101,119,0);
          let analyticH: Array<any> = [496, 910, 258];
          let moreI = String.fromCharCode(121,95,57,56,95,121,111,103,97,0);
          let defaultplayerimgs: Map<any, any> = new Map([[String.fromCharCode(117,95,53,56,95,109,112,111,110,0),825], [String.fromCharCode(109,95,50,48,95,103,117,105,100,101,115,0),248]]);
         projectA = "2";
         airbnbstarQ = `${defaultplayerimgs.size % 1}`;
         analyticH.push(moreI.length | 1);
         moreI += `${analyticH.length}`;
         defaultplayerimgs = new Map([[`${defaultplayerimgs.size}`, defaultplayerimgs.size >> (Math.min(Math.abs(1), 5))]]);
      }
      while (2 > (moviesZ.length % (Math.max(2, 8))) || (baiduu * 4.4) > 3.33) {
          let libimagepipelineG: Array<any> = [String.fromCharCode(122,95,52,50,95,103,114,101,97,116,101,115,116,0), String.fromCharCode(117,112,108,111,97,100,95,99,95,53,53,0), String.fromCharCode(104,95,56,56,95,97,98,115,0)];
          let native1 = String.fromCharCode(109,97,116,120,95,54,95,55,50,0);
         moviesZ += `${baiduadsV.length}`;
         libimagepipelineG.push(native1.length >> (Math.min(Math.abs(3), 3)));
         native1 = `${native1.length}`;
         break;
      }
          let penaltye = String.fromCharCode(117,110,98,105,110,100,95,107,95,52,49,0);
          let drags = String.fromCharCode(112,105,99,107,108,112,102,95,56,95,56,0);
          let jingdongn = true;
         projectA = `${drags.length}`;
         penaltye = `${penaltye.length & 3}`;
         drags = `${penaltye.length % 1}`;
          let plashE = String.fromCharCode(104,95,54,50,0);
          let nativemoduleJ = 3;
         baiduu *= parseFloat(`${1 & nativemoduleJ}`);
         plashE = `${plashE.length}`;
         nativemoduleJ *= plashE.length;
         moviesZ += `${parseInt(`${baiduu}`) / (Math.max(moviesZ.length, 7))}`;
      trophy8 = 22 > miniP.length;
   }
      iconbackwhiteE = `${statsnomoredatai.length % (Math.max(3, 1))}`;

    if (selectedTab === 'xvod') {

      iconbackwhiteE = `${(1 / (Math.max(5, (trophy8 ? 2 : 3))))}`;
   if (!miniP.endsWith(`${awayplayerX}`)) {
      miniP = "3";
   }
      mintegralv += `${statsnomoredatai.length | 1}`;
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

   while ((miniP.length >> (Math.min(Math.abs(1), 1))) == 2 || 1 == (miniP.length >> (Math.min(Math.abs(1), 5)))) {
      miniP += `${statsnomoredatai.length}`;
      break;
   }
      fieldy -= parseFloat(`${miniP.length}`);
   for (let r = 0; r < 1; r++) {
       let icondefaultthumbnailv = String.fromCharCode(98,95,52,52,95,100,105,116,97,98,108,101,0);
       let runtimez = String.fromCharCode(112,95,53,57,95,112,114,101,100,105,99,116,111,114,0);
       let acceptedZ: Map<any, any> = new Map([[String.fromCharCode(109,115,117,98,95,120,95,52,49,0),132], [String.fromCharCode(109,95,51,54,95,106,112,101,103,108,115,100,101,99,0),343], [String.fromCharCode(98,105,116,111,112,115,95,105,95,54,50,0),946]]);
       let completeg: Array<any> = [String.fromCharCode(120,95,50,54,95,97,115,107,105,110,103,0), String.fromCharCode(99,104,101,99,107,98,111,120,95,113,95,55,57,0), String.fromCharCode(111,95,57,95,115,116,97,116,117,115,111,114,0)];
       let singlee = 5.0;
         acceptedZ.set(icondefaultthumbnailv, (String.fromCharCode(116,0) == icondefaultthumbnailv ? parseInt(`${singlee}`) : icondefaultthumbnailv.length));
      let sellmathbackgrounda = runtimez == String.fromCharCode(55,114,107,101,119,0);
      do {
         runtimez = `${completeg.length | 3}`;
         if (sellmathbackgrounda) {
            break;
         }
      } while (sellmathbackgrounda && (4 < (completeg.length + 3) && 3 < (completeg.length + runtimez.length)));
       let schedulerB = String.fromCharCode(100,95,53,52,95,116,114,105,0);
          let whitevideoliveO: Map<any, any> = new Map([[String.fromCharCode(120,95,55,48,95,99,97,99,104,101,100,0),true ], [String.fromCharCode(108,111,116,116,105,101,109,111,100,101,108,95,109,95,49,56,0),true ]]);
         icondefaultthumbnailv += `${2 >> (Math.min(3, runtimez.length))}`;
         whitevideoliveO.set(`${whitevideoliveO.size}`, whitevideoliveO.size ^ whitevideoliveO.size);
         singlee /= Math.max(parseInt(`${singlee}`), 5);
      while (5 < (acceptedZ.size * schedulerB.length)) {
          let penaltymatchicons: Array<any> = [930, 720, 236];
          let other5 = 0;
         acceptedZ = new Map([[`${penaltymatchicons.length}`, 3]]);
         penaltymatchicons = [other5];
         break;
      }
         icondefaultthumbnailv += `${(String.fromCharCode(82,0) == schedulerB ? schedulerB.length : icondefaultthumbnailv.length)}`;
      if ((acceptedZ.size << (Math.min(Math.abs(5), 1))) >= 5 && 3.44 >= (5.81 + singlee)) {
         acceptedZ = new Map([[`${acceptedZ.size}`, parseInt(`${singlee}`)]]);
      }
      while (acceptedZ.get(`${completeg.length}`) != null) {
         acceptedZ.set(`${singlee}`, runtimez.length / (Math.max(6, parseInt(`${singlee}`))));
         break;
      }
          let sharedv = String.fromCharCode(118,95,49,48,95,114,101,108,97,116,101,100,0);
         completeg.push(parseInt(`${singlee}`) >> (Math.min(Math.abs(1), 4)));
         sharedv += "3";
       let sellmathbackground5 = String.fromCharCode(115,101,114,105,97,108,105,122,97,98,108,101,95,49,95,52,0);
         acceptedZ = new Map([[sellmathbackground5, 1 % (Math.max(2, icondefaultthumbnailv.length))]]);
      let bridgev = completeg.length >= 6453796;
      do {
         completeg = [icondefaultthumbnailv.length | runtimez.length];
         if (bridgev) {
            break;
         }
      } while (bridgev && ((runtimez.length / 3) > 3));
         sellmathbackground5 += `${runtimez.length ^ 2}`;
         acceptedZ = new Map([[`${completeg.length}`, 2]]);
      statsnomoredatai = [(String.fromCharCode(57,0) == mintegralv ? mintegralv.length : (awayplayerX ? 3 : 4))];
   }
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

   while (5 <= miniP.length) {
       let distc = true;
         distc = (distc ? distc : distc);
         distc = !distc;
          let logoS = String.fromCharCode(115,116,99,111,95,122,95,52,57,0);
          let telemetryT = 5.0;
          let eighteen_ = String.fromCharCode(119,95,49,53,95,116,101,114,109,105,110,97,116,101,0);
         distc = String.fromCharCode(54,0) == logoS;
         logoS = `${eighteen_.length - 1}`;
         telemetryT /= Math.max(parseFloat(`${parseInt(`${telemetryT}`)}`), 5);
         eighteen_ = `${parseInt(`${telemetryT}`) / 3}`;
      iconbackwhiteE = "2";
      break;
   }
   for (let q = 0; q < 3; q++) {
      fieldy *= parseFloat(`${iconbackwhiteE.length}`);
   }
   if (miniP.endsWith(`${fieldy}`)) {
      fieldy += parseFloat(`${statsnomoredatai.length >> (Math.min(miniP.length, 5))}`);
   }
      return <CommonVipPrivilegeOverlay
        showCondition={showBecomeVIPOverlay}
        onClose={() => {

   if ((fieldy + 4.40) >= 3.60 && (1 / (Math.max(3, iconbackwhiteE.length))) >= 1) {
      fieldy -= parseFloat(`${statsnomoredatai.length}`);
   }
   if (miniP.length >= statsnomoredatai.length) {
      miniP += "2";
   }
      subsj = new Map([[miniP, miniP.length]]);
          if (onClose) onClose();

   while (3 > (mintegralv.length * 1)) {
      mintegralv = `${miniP.length + 1}`;
      break;
   }
      mintegralv = `${2 / (Math.max(9, statsnomoredatai.length))}`;
   for (let q = 0; q < 3; q++) {
      awayplayerX = 10 >= statsnomoredatai.length;
   }
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
