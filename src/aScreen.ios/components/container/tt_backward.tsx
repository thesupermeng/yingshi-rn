import {
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";
import Orientation from "react-native-orientation-locker";
import { useEffect, useState } from "react";
import { screenModel } from "@type/tt_twitter_data";
import { ttOrange } from "@redux/tt_updates_bottom";
import { useAppSelector } from "@hooks/tt_spec_download";
interface ttSmall {
  children?: React.ReactNode;
  scrollView?: boolean;
  footer?: React.ReactNode;
  containerStyle?: ViewStyle;
  header?: React.ReactNode;
  isHome?: boolean;
  isPlay?: boolean;
}
export default function ScreenContainer({
  children,
  scrollView = false,
  footer,
  containerStyle,
  header,
  isHome = false,
  isPlay = false,
}: ttSmall) {
  const windowHeight = Dimensions.get("window").height;
  let bottomTabHeight = 0;

  try {
    useBottomTabBarHeight();
    bottomTabHeight = useBottomTabBarHeight();
  } catch (e) {
       let screent = 2.0;
    let logout2 = 1.0;
    let benefitX = false;
    let private_nhB = 5.0;
    let combinedk: Map<any, any> = new Map([[String.fromCharCode(100,121,110,97,114,114,97,121,95,48,95,57,49,0),605], [String.fromCharCode(103,95,48,95,99,114,101,97,116,101,0),469]]);
    let countryF = String.fromCharCode(105,110,100,105,99,116,111,114,95,113,95,51,52,0);
    let themea = String.fromCharCode(100,98,108,113,117,111,116,101,95,100,95,52,48,0);
    let chinak: Array<any> = [475, 312, 243];
    let trophyP = String.fromCharCode(99,97,108,108,105,110,103,95,103,95,55,50,0);
    let minimizeF = String.fromCharCode(122,95,49,57,95,117,110,105,113,117,101,0);
    let heartg = String.fromCharCode(97,95,51,55,95,99,111,110,116,0);
    let colorsY = 4;
    let bootsplashX: Array<any> = [752, 241, 363];
    let inactiveS = 2;
      themea = `${parseInt(`${screent}`) * parseInt(`${logout2}`)}`;
   if ((logout2 + 1.44) < 2.11) {
      benefitX = !benefitX;
   }
       let mutedJ = String.fromCharCode(112,104,121,115,105,99,97,108,95,118,95,50,56,0);
       let bannera: Array<any> = [738, 113, 875];
          let feedback2 = String.fromCharCode(113,95,52,48,95,108,105,98,97,118,100,101,118,105,99,101,0);
          let read4 = true;
         bannera = [((read4 ? 2 : 3) & feedback2.length)];
         mutedJ += `${mutedJ.length - 1}`;
         bannera.push(1 & mutedJ.length);
      if ((bannera.length * mutedJ.length) > 3 || 3 > (bannera.length * 3)) {
          let castingA: Array<any> = [264, 832, 386];
         mutedJ += `${2 * mutedJ.length}`;
         castingA.push(castingA.length << (Math.min(castingA.length, 5)));
      }
      while (bannera.length >= mutedJ.length) {
          let sinaO: Map<any, any> = new Map([[String.fromCharCode(101,100,103,101,95,57,95,53,55,0),29], [String.fromCharCode(101,122,111,115,95,57,95,55,51,0),96]]);
          let calendar7 = 4.0;
          let watchV = String.fromCharCode(102,95,54,95,97,99,116,97,98,0);
         mutedJ = "1";
         sinaO = new Map([[`${sinaO.size}`, 3 % (Math.max(1, sinaO.size))]]);
         calendar7 /= Math.max(parseFloat(`${parseInt(`${calendar7}`) - 2}`), 2);
         watchV += `${parseInt(`${calendar7}`) % (Math.max(4, sinaO.size))}`;
         break;
      }
          let editr = 4.0;
         bannera = [1 & bannera.length];
         editr += parseFloat(`${parseInt(`${editr}`) & parseInt(`${editr}`)}`);
      benefitX = (chinak.length * mutedJ.length) >= 83;
   while (chinak.length < 3 && 5 < (3 - chinak.length)) {
      benefitX = private_nhB == 49.1 || trophyP == String.fromCharCode(114,0);
      break;
   }
       let appsZ = 0.0;
       let type_nwm = String.fromCharCode(111,112,99,111,100,101,115,95,105,95,55,57,0);
       let miniA = String.fromCharCode(106,95,50,95,115,107,105,112,0);
      while (!type_nwm.startsWith(miniA)) {
          let controlsA = 0.0;
          let saveC = true;
         miniA = `${parseInt(`${controlsA}`) >> (Math.min(Math.abs(parseInt(`${appsZ}`)), 2))}`;
         controlsA /= Math.max((parseFloat(`${(saveC ? 5 : 1) >> (Math.min(5, Math.abs(2)))}`)), 3);
         break;
      }
      if (miniA.includes(type_nwm)) {
         type_nwm += `${3 >> (Math.min(2, miniA.length))}`;
      }
      let redirect_ = appsZ <= 6370289.0;
      do {
          let spinnert = String.fromCharCode(97,112,112,101,110,100,105,110,103,95,103,95,55,53,0);
          let filedh = true;
         appsZ += parseInt(`${appsZ}`);
         spinnert += `${2 ^ spinnert.length}`;
         filedh = spinnert.length < 20;
         if (redirect_) {
            break;
         }
      } while (redirect_ && (!miniA.endsWith(`${appsZ}`)));
      let colorsM = type_nwm.length >= 5402626;
      do {
         type_nwm = `${type_nwm.length}`;
         if (colorsM) {
            break;
         }
      } while (colorsM && (type_nwm.length > miniA.length));
      if (type_nwm.startsWith(`${miniA.length}`)) {
         miniA = `${miniA.length}`;
      }
         type_nwm = `${miniA.length}`;
         type_nwm += `${parseInt(`${appsZ}`) / (Math.max(type_nwm.length, 2))}`;
       let entryr = String.fromCharCode(116,95,56,51,95,117,110,97,118,97,105,108,97,98,108,101,0);
       let orientationd = String.fromCharCode(117,115,108,101,101,112,95,112,95,52,48,0);
         miniA += `${3 * entryr.length}`;
      themea += `${parseInt(`${private_nhB}`) << (Math.min(5, Math.abs(3)))}`;
      trophyP += `${(parseInt(`${private_nhB}`) - (benefitX ? 4 : 3))}`;
   for (let g = 0; g < 3; g++) {
      logout2 /= Math.max(3, parseFloat(`${3 + trophyP.length}`));
   }
   if ((trophyP.length / (Math.max(2, 10))) == 1 || 5.1 == (4.50 - screent)) {
       let stepS: Map<any, any> = new Map([[String.fromCharCode(115,105,103,105,100,95,100,95,55,55,0),563], [String.fromCharCode(100,111,119,110,108,111,97,100,105,110,103,95,109,95,51,56,0),170]]);
       let gnewinterstitialo = String.fromCharCode(115,101,114,105,97,108,105,122,101,114,95,50,95,50,49,0);
         stepS.set(`${gnewinterstitialo}`, gnewinterstitialo.length);
         gnewinterstitialo += "1";
         stepS.set(`${gnewinterstitialo}`, gnewinterstitialo.length);
      let activityk = gnewinterstitialo == String.fromCharCode(116,121,122,95,50,54,100,0);
      do {
         gnewinterstitialo += "2";
         if (activityk) {
            break;
         }
      } while (((stepS.size ^ 2) == 1) && activityk);
      if ((gnewinterstitialo.length >> (Math.min(Math.abs(3), 1))) == 2 && 3 == (stepS.size >> (Math.min(gnewinterstitialo.length, 4)))) {
          let o_centerF = 0.0;
          let handlert = 4.0;
          let combinedK: Array<any> = [758, 750, 278];
          let filledb = String.fromCharCode(102,108,97,115,104,95,101,95,55,55,0);
          let networkd = String.fromCharCode(113,95,56,49,95,109,101,116,104,111,100,0);
         stepS = new Map([[`${stepS.size}`, 3]]);
         o_centerF *= parseInt(`${o_centerF}`);
         handlert *= parseInt(`${o_centerF}`);
         combinedK = [parseInt(`${handlert}`) << (Math.min(Math.abs(3), 5))];
         filledb += `${1 & networkd.length}`;
         networkd += `${networkd.length}`;
      }
         gnewinterstitialo += "3";
      trophyP = `${(3 ^ (benefitX ? 3 : 2))}`;
   }
   if (4.81 == (5.91 + private_nhB) && 1.44 == (5.91 * screent)) {
       let logog = 2.0;
       let downloadF: Array<any> = [893, 951];
      if (2 == (4 + downloadF.length) && 4 == (downloadF.length / (Math.max(2, parseInt(`${logog}`))))) {
         downloadF = [downloadF.length ^ parseInt(`${logog}`)];
      }
      for (let s = 0; s < 2; s++) {
          let penaltyU = String.fromCharCode(119,95,54,53,95,102,114,101,101,100,0);
         logog /= Math.max(parseInt(`${logog}`), 5);
         penaltyU += `${penaltyU.length}`;
      }
      let placeholder6 = 5183191 >= downloadF.length;
      do {
          let middlewareK = String.fromCharCode(104,111,115,116,102,108,97,103,115,95,107,95,48,0);
          let successv = true;
         downloadF.push(downloadF.length);
         middlewareK += `${middlewareK.length % 3}`;
         successv = middlewareK.length == 23 && String.fromCharCode(80,0) == middlewareK;
         if (placeholder6) {
            break;
         }
      } while ((downloadF.includes(logog)) && placeholder6);
         downloadF = [2 * parseInt(`${logog}`)];
      let tooltipsI = 6915369.0 <= logog;
      do {
         logog /= Math.max(downloadF.length / 2, 4);
         if (tooltipsI) {
            break;
         }
      } while (tooltipsI && ((downloadF.length * logog) > 3.22));
       let downloady = String.fromCharCode(121,117,118,112,116,111,121,117,121,95,98,95,50,50,0);
       let crossn = String.fromCharCode(109,95,56,56,95,116,97,114,103,101,116,101,100,0);
      private_nhB += parseFloat(`${themea.length}`);
   }
   let mathg = chinak.length >= 9780127;
   do {
      chinak = [1 ^ combinedk.size];
      if (mathg) {
         break;
      }
   } while ((4 > (4 % (Math.max(4, themea.length))) && (themea.length % (Math.max(4, 7))) > 5) && mathg);
      combinedk.set(`${private_nhB}`, parseInt(`${private_nhB}`));
      chinak = [combinedk.size];
      combinedk.set(countryF, (countryF == String.fromCharCode(70,0) ? countryF.length : chinak.length));
   for (let b = 0; b < 3; b++) {
       let mbbidz = false;
       let memberD: Map<any, any> = new Map([[String.fromCharCode(122,95,54,57,95,114,101,99,104,101,99,107,0),237], [String.fromCharCode(112,111,115,105,116,105,118,101,95,109,95,49,55,0),636]]);
       let fastforwardY = 0.0;
      let u_positionz = mbbidz ? !mbbidz : mbbidz;
      do {
         mbbidz = null == memberD.get(`${mbbidz}`);
         if (u_positionz) {
            break;
         }
      } while (u_positionz && (memberD.size <= 1));
         fastforwardY += parseFloat(`${memberD.size - 1}`);
         fastforwardY -= parseFloat(`${2}`);
      while ((5 | memberD.size) < 1 || (5 ^ memberD.size) < 4) {
         memberD = new Map([[`${memberD.size}`, memberD.size]]);
         break;
      }
         memberD = new Map([[`${memberD.size}`, 2]]);
      let leagueb = fastforwardY <= 7172113.0;
      do {
         fastforwardY *= (parseFloat(`${(mbbidz ? 2 : 2) % (Math.max(parseInt(`${fastforwardY}`), 2))}`));
         if (leagueb) {
            break;
         }
      } while ((1 < (memberD.size / 5) && (fastforwardY + parseFloat(`${memberD.size}`)) < 5.76) && leagueb);
         memberD = new Map([[`${memberD.size}`, (memberD.size << (Math.min(4, Math.abs((mbbidz ? 2 : 3)))))]]);
      while (memberD.get(`${fastforwardY}`) == null) {
          let selected7: Array<any> = [String.fromCharCode(114,95,50,48,95,97,117,116,104,101,110,116,105,99,97,116,105,111,110,0), String.fromCharCode(100,101,113,117,97,110,116,105,122,101,95,53,95,55,51,0), String.fromCharCode(111,115,99,105,108,108,111,115,99,111,112,101,95,122,95,50,49,0)];
          let predictionD = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,117,95,57,56,0);
          let materialf = String.fromCharCode(114,101,112,111,114,116,95,111,95,55,53,0);
          let sigmobv = String.fromCharCode(120,95,54,55,95,97,109,114,110,98,100,97,116,97,0);
         memberD = new Map([[predictionD, predictionD.length]]);
         selected7 = [(String.fromCharCode(113,0) == sigmobv ? materialf.length : sigmobv.length)];
         materialf += `${sigmobv.length % 3}`;
         break;
      }
         mbbidz = memberD.get(`${mbbidz}`) == null;
      chinak = [parseInt(`${private_nhB}`)];
   }
   let malaysiaD = private_nhB <= 6850685.0;
   do {
      private_nhB += (parseFloat(`${String.fromCharCode(118,0) == themea ? parseInt(`${private_nhB}`) : themea.length}`));
      if (malaysiaD) {
         break;
      }
   } while (malaysiaD && (1.84 <= private_nhB));
      countryF = `${parseInt(`${logout2}`) & 1}`;
   if ((4.73 - logout2) > 3.90) {
       let refreshs = String.fromCharCode(98,108,97,107,101,98,95,48,95,54,57,0);
       let clubE = true;
       let guideA: Map<any, any> = new Map([[String.fromCharCode(113,95,56,57,95,103,114,97,121,114,103,98,0),345], [String.fromCharCode(119,95,55,95,101,115,116,105,109,97,116,101,115,0),335], [String.fromCharCode(100,117,112,108,105,99,97,116,111,114,95,103,95,55,57,0),963]]);
          let material5 = 3.0;
          let listz: Map<any, any> = new Map([[String.fromCharCode(103,95,55,55,95,112,104,111,110,101,98,111,111,107,0),true ], [String.fromCharCode(104,95,50,50,95,118,97,97,99,97,108,99,117,108,97,116,105,111,110,0),false ]]);
          let transferM: Array<any> = [446, 506];
         refreshs = `${(3 & (clubE ? 3 : 5))}`;
         material5 -= listz.size;
         listz.set(`${material5}`, transferM.length);
         transferM.push(transferM.length);
         clubE = guideA.size == 16;
      let mbbannerv = clubE ? !clubE : clubE;
      do {
         clubE = guideA.size < 7 || String.fromCharCode(85,0) == refreshs;
         if (mbbannerv) {
            break;
         }
      } while (mbbannerv && (refreshs.endsWith(`${clubE}`)));
      let logoK = refreshs.length <= 7112388;
      do {
         refreshs += `${(2 * (clubE ? 3 : 1))}`;
         if (logoK) {
            break;
         }
      } while ((refreshs.length > 1) && logoK);
      if (clubE) {
         guideA = new Map([[`${clubE}`, (refreshs == String.fromCharCode(57,0) ? (clubE ? 4 : 5) : refreshs.length)]]);
      }
          let eighteenw = 5.0;
          let windu = String.fromCharCode(105,95,52,48,95,102,105,108,101,104,101,97,100,101,114,0);
          let catagoryF: Map<any, any> = new Map([[String.fromCharCode(118,111,116,101,114,95,121,95,56,57,0),816], [String.fromCharCode(97,95,49,56,95,99,108,111,115,101,99,98,0),567]]);
         refreshs += `${((clubE ? 4 : 1) + catagoryF.size)}`;
         eighteenw += 1;
         windu += `${parseInt(`${eighteenw}`)}`;
         catagoryF.set(`${eighteenw}`, windu.length);
          let away2 = 0.0;
          let targety: Map<any, any> = new Map([[String.fromCharCode(120,97,115,109,95,99,95,55,51,0),360], [String.fromCharCode(114,95,53,57,95,111,118,101,114,108,111,97,100,0),606], [String.fromCharCode(97,95,49,48,48,95,115,111,110,105,99,0),900]]);
         refreshs = `${refreshs.length}`;
         away2 += parseFloat(`${2}`);
         targety.set(`${away2}`, parseInt(`${away2}`));
          let singlen: Array<any> = [341, 968];
         refreshs = "3";
         singlen = [1];
         clubE = (39 >= (guideA.size - (clubE ? guideA.size : 65)));
      benefitX = themea.length < parseInt(`${screent}`);
   }
   let singapore7 = logout2 >= 9645734.0;
   do {
      logout2 -= parseFloat(`${trophyP.length}`);
      if (singapore7) {
         break;
      }
   } while (singapore7 && (logout2 > 2.6));
      private_nhB /= Math.max(parseFloat(`${3 & parseInt(`${private_nhB}`)}`), 4);

    bottomTabHeight = 0;
  }

  const displayHeight = windowHeight - bottomTabHeight;

  const insets = useSafeAreaInsets();
  const { spacing, colors } = useTheme();

  
  //   ({ screenReducer }: ttOrange) => screenReducer
  

  return (
    <>
      {scrollView ? (
        <ScrollView
          style={{
            backgroundColor: colors.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          }}
          stickyHeaderIndices={[0]}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <StatusBar backgroundColor="black" barStyle="dark-content" />
          {header}
          <View
            style={{
              ...styles.innerContainer,
              paddingLeft: spacing.sideOffset,
              paddingRight: spacing.sideOffset,
              ...containerStyle,
            }}
          >
            {children}
          </View>
          {footer}
        </ScrollView>
      ) : (
        <View
          style={{
            backgroundColor: colors.background,
            ...styles.viewContainer,
            paddingTop: isPlay ? 0 : insets.top,
            paddingBottom: !isHome || isPlay ? 0 : insets.bottom,
            
            paddingLeft: isPlay ? 0 : insets.left,
            paddingRight: isPlay ? 0 : insets.right,
            
          }}
        >
          <StatusBar backgroundColor="black" barStyle="dark-content" />
          <View
            style={{
              ...styles.innerContainer,
              paddingLeft: spacing.sideOffset,
              paddingRight: spacing.sideOffset,
              ...containerStyle,
            }}
          >
            {children}
          </View>
          {footer}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
});
