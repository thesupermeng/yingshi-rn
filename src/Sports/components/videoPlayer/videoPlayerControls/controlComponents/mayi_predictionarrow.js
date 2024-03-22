import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, View, Text, TouchableHighlight, Image} from 'react-native';
import {
  setVideoSource,
  updateVideoPropPipe,
  VideoPlayerActions,
} from '../../../../pages/matchDetails/action';
import {Colors} from '../../../../global/mayi_borderless_rocket';
import {useLiveVideoSources} from '@hooks/useLiveVideoSources';
import {useAnimationVideoSources} from '@hooks/useAnimationVideoSources';
import {VideoLiveType} from '../../../../global/mayi_green_build';
import {VideoLive, AnimationLive} from '../../../../assets';

export const SwitchSourcePanel = ({isBottom}) => {
  const styles = createStyles(isBottom);

  const dispatch = useDispatch();
  const liveVideoList = useLiveVideoSources();
  const animationVideoList = useAnimationVideoSources();
  const videoPlayerControl = useSelector(s => s.videoPlayerControl);

  
  
  
  
  
  
  
  

  const OptionGroup = ({title, titleImage, data, callback}) => {
    const isSelected = item => {
       let reactf = String.fromCharCode(115,112,104,101,114,105,99,97,108,95,112,95,51,51,0);
    let owngoalY = String.fromCharCode(112,95,49,57,95,102,102,109,97,108,0);
    let c_viewj = String.fromCharCode(110,97,116,105,111,110,97,108,95,116,95,51,53,0);
    let homeloadingJ = new Map([[String.fromCharCode(110,95,56,54,95,99,111,110,116,0),310], [String.fromCharCode(102,95,55,0),431]]);
    let predictionbuttonj = [String.fromCharCode(115,105,109,112,108,101,114,101,97,100,95,55,95,57,51,0), String.fromCharCode(114,101,103,101,116,95,55,95,56,55,0), String.fromCharCode(115,119,97,112,112,101,100,95,55,95,51,52,0)];
    let onewarchdefaultsp = false;
    let sliderG = String.fromCharCode(114,101,119,114,105,116,116,101,110,95,49,95,52,49,0);
    let giftQ = 3.0;
    let libruntimeexecutorL = String.fromCharCode(100,99,97,100,97,116,97,95,97,95,54,57,0);
    let bodanM = false;
    let gesturem = [String.fromCharCode(108,117,109,98,101,114,106,97,99,107,95,108,95,53,55,0), String.fromCharCode(115,97,118,101,112,111,105,110,116,115,95,117,95,50,50,0)];
      sliderG += `${homeloadingJ.size}`;
   while (!libruntimeexecutorL.endsWith(`${sliderG.length}`)) {
      libruntimeexecutorL += `${predictionbuttonj.length}`;
      break;
   }
   while (!c_viewj.endsWith(`${predictionbuttonj.length}`)) {
      predictionbuttonj = [parseInt(`${giftQ}`)];
      break;
   }
      giftQ -= (parseFloat(`${(onewarchdefaultsp ? 5 : 2) * predictionbuttonj.length}`));
      libruntimeexecutorL += `${2 << (Math.min(4, c_viewj.length))}`;
   do {
      owngoalY += `${(String.fromCharCode(118,0) == libruntimeexecutorL ? owngoalY.length : libruntimeexecutorL.length)}`;
      if (owngoalY == String.fromCharCode(108,100,120,0)) {
         break;
      }
   } while ((owngoalY.length <= reactf.length) && (owngoalY == String.fromCharCode(108,100,120,0)));
      sliderG = `${c_viewj.length}`;
   do {
      libruntimeexecutorL += `${predictionbuttonj.length | 1}`;
      if (libruntimeexecutorL.length == 2519865) {
         break;
      }
   } while ((libruntimeexecutorL.length == 2519865) && (owngoalY == String.fromCharCode(115,0)));
      owngoalY = "1";
   if (5 == (2 >> (Math.min(5, libruntimeexecutorL.length)))) {
       let hooks2 = 5.0;
      while (3.22 < (hooks2 * 2)) {
         hooks2 *= parseInt(`${hooks2}`) & 3;
         break;
      }
         hooks2 *= parseInt(`${hooks2}`) + parseInt(`${hooks2}`);
         hooks2 -= 2;
      predictionbuttonj.push((c_viewj == String.fromCharCode(67,0) ? c_viewj.length : (onewarchdefaultsp ? 2 : 5)));
   }
   if (2 <= owngoalY.length) {
      owngoalY += `${3 - sliderG.length}`;
   }
      homeloadingJ = new Map([[`${homeloadingJ.size}`, 3]]);
      homeloadingJ = new Map([[`${homeloadingJ.size}`, predictionbuttonj.length >> (Math.min(Math.abs(2), 2))]]);

      return [item.code, item.src].includes(videoPlayerControl.source);
   for (let w = 0; w < 3; w++) {
      predictionbuttonj.push(sliderG.length | reactf.length);
   }
      c_viewj += `${sliderG.length / (Math.max(libruntimeexecutorL.length, 4))}`;
   do {
       let dependency7 = new Map([[String.fromCharCode(112,111,116,105,115,105,111,110,95,103,95,52,57,0),true ], [String.fromCharCode(110,111,110,122,101,114,111,95,114,95,52,56,0),false ], [String.fromCharCode(101,95,51,55,95,110,101,103,111,116,105,97,116,101,100,0),true ]]);
       let iconmore2 = String.fromCharCode(116,95,50,49,95,112,108,97,121,98,97,99,107,0);
       let scorepopsoundG = String.fromCharCode(104,99,115,99,97,108,101,95,98,95,52,55,0);
       let libswresample1 = new Map([[String.fromCharCode(112,111,108,108,105,110,103,95,50,95,57,51,0),String.fromCharCode(116,111,112,105,99,115,95,55,95,53,49,0)], [String.fromCharCode(99,95,54,48,95,110,111,109,105,110,97,108,0),String.fromCharCode(98,95,52,55,95,115,117,98,115,101,116,0)]]);
      for (let v = 0; v < 1; v++) {
         libswresample1 = new Map([[`${libswresample1.size}`, libswresample1.size]]);
      }
      for (let r = 0; r < 2; r++) {
          let dependenciesO = [211, 184];
         iconmore2 += `${scorepopsoundG.length - 2}`;
         dependenciesO = [dependenciesO.length];
      }
       let historyD = false;
       let libreanimatedj = false;
          let orangedownarrow6 = 3.0;
          let mbbannerZ = new Map([[String.fromCharCode(104,95,49,56,95,105,110,116,114,111,100,117,99,116,105,111,110,0),483], [String.fromCharCode(99,95,56,51,95,98,101,122,105,101,114,0),497]]);
          let iconviewergifc = [895, 241, 591];
         iconmore2 += `${libswresample1.size * 1}`;
         orangedownarrow6 += 3;
         mbbannerZ[`${orangedownarrow6}`] = mbbannerZ.size;
         iconviewergifc.push(parseInt(`${orangedownarrow6}`));
      do {
          let gemfileZ = new Map([[String.fromCharCode(98,105,110,95,57,95,57,48,0),65], [String.fromCharCode(117,110,115,111,108,118,101,100,95,109,95,51,49,0),850]]);
          let traminiK = true;
          let iconcalendark = String.fromCharCode(99,95,51,52,95,105,100,99,116,99,111,108,0);
          let imagesA = 5.0;
          let baseline5 = new Map([[String.fromCharCode(108,111,119,95,100,95,57,55,0),872], [String.fromCharCode(100,95,51,53,95,99,111,109,109,105,116,116,101,114,0),813], [String.fromCharCode(100,95,53,52,95,110,101,108,108,121,109,111,115,101,114,0),575]]);
         libreanimatedj = gemfileZ.size >= 65 || 65 >= libswresample1.size;
         gemfileZ = new Map([[`${traminiK}`, 3]]);
         iconcalendark += `${parseInt(`${imagesA}`) + 1}`;
         imagesA -= parseFloat(`${1 << (Math.min(4, Math.abs(parseInt(`${imagesA}`))))}`);
         baseline5 = new Map([[`${baseline5.size}`, ((traminiK ? 4 : 2) >> (Math.min(Math.abs(baseline5.size), 5)))]]);
         if (libreanimatedj ? !libreanimatedj : libreanimatedj) {
            break;
         }
      } while ((!libreanimatedj) && (libreanimatedj ? !libreanimatedj : libreanimatedj));
          let greytickM = String.fromCharCode(105,110,116,109,97,116,104,95,118,95,57,54,0);
          let page1 = String.fromCharCode(97,99,101,108,112,95,54,95,50,49,0);
          let successO = 1.0;
         historyD = 13.4 < successO || historyD;
         greytickM = "1";
         page1 = `${page1.length}`;
         successO *= greytickM.length | page1.length;
      if (!historyD || 1 == scorepopsoundG.length) {
         historyD = iconmore2.length <= dependency7.size;
      }
      while ((libswresample1.size % (Math.max(2, 3))) <= 5 && 2 <= libswresample1.size) {
          let gray_ = 4.0;
          let libsentryt = 5.0;
          let profileS = String.fromCharCode(100,95,55,50,95,114,101,115,117,108,116,115,0);
          let expiredM = 5.0;
          let zhuboX = String.fromCharCode(117,95,53,48,95,97,100,97,112,116,111,114,0);
         historyD = 79.70 >= libsentryt;
         gray_ *= (String.fromCharCode(49,0) == profileS ? parseInt(`${expiredM}`) : profileS.length);
         libsentryt /= Math.max(zhuboX.length / (Math.max(2, 6)), 3);
         expiredM -= parseFloat(`${profileS.length}`);
         zhuboX = `${profileS.length}`;
         break;
      }
      for (let k = 0; k < 3; k++) {
         scorepopsoundG += `${((historyD ? 1 : 5))}`;
      }
         iconmore2 = `${((historyD ? 2 : 4) / 1)}`;
      while (scorepopsoundG.length > 2) {
         scorepopsoundG += `${dependency7.size}`;
         break;
      }
      do {
         libswresample1[`${iconmore2}`] = 2;
         if (libswresample1.size == 1885846) {
            break;
         }
      } while ((libswresample1.size == 1885846) && (!historyD || (libswresample1.size & 3) > 1));
      sliderG = `${libswresample1.size}`;
      if (String.fromCharCode(108,112,102,117,113,121,105,56,0) == sliderG) {
         break;
      }
   } while ((String.fromCharCode(108,112,102,117,113,121,105,56,0) == sliderG) && (sliderG.endsWith(`${giftQ}`)));
      libruntimeexecutorL += `${3 | parseInt(`${giftQ}`)}`;
      libruntimeexecutorL = `${reactf.length}`;
      bodanM = (owngoalY.length ^ predictionbuttonj.length) >= 1;
      sliderG += `${c_viewj.length}`;
      c_viewj = `${owngoalY.length * 1}`;
      c_viewj += `${homeloadingJ.size >> (Math.min(libruntimeexecutorL.length, 1))}`;
   if (onewarchdefaultsp && 3 >= sliderG.length) {
      onewarchdefaultsp = bodanM || reactf.length >= 64;
   }
      onewarchdefaultsp = (owngoalY.length + predictionbuttonj.length) < 76;
      sliderG += `${homeloadingJ.size}`;
   for (let o = 0; o < 3; o++) {
       let data4 = 3;
       let scoreG = [617, 288];
       let buffer9 = 0.0;
          let mimeV = String.fromCharCode(111,95,56,50,95,104,109,97,99,108,105,115,116,0);
          let defaultteamp = String.fromCharCode(107,105,99,107,101,114,95,51,95,53,51,0);
         scoreG.push(mimeV.length & parseInt(`${buffer9}`));
         mimeV += `${defaultteamp.length | 1}`;
         defaultteamp += `${defaultteamp.length}`;
      do {
         scoreG.push(data4);
         if (17873 == scoreG.length) {
            break;
         }
      } while (((data4 | 3) > 2 && 5 > (3 | data4)) && (17873 == scoreG.length));
         scoreG = [data4 + 3];
      for (let u = 0; u < 1; u++) {
          let elementsX = [260, 460];
          let securityw = new Map([[String.fromCharCode(97,100,114,109,95,53,95,54,53,0),String.fromCharCode(99,117,114,116,97,105,110,95,51,95,55,52,0)], [String.fromCharCode(121,95,51,56,95,99,111,108,105,110,101,97,114,0),String.fromCharCode(103,95,56,95,104,111,115,116,112,111,114,116,102,105,108,101,0)]]);
          let c_titleU = true;
          let libreactnativejnid = String.fromCharCode(97,99,118,112,95,54,95,50,48,0);
          let yellowcirclebgd = true;
         buffer9 -= ((c_titleU ? 2 : 2) ^ 2);
         elementsX.push(3 << (Math.min(5, elementsX.length)));
         securityw = new Map([[`${securityw.size}`, 1 ^ securityw.size]]);
         c_titleU = elementsX.length > 100;
         libreactnativejnid = "2";
      }
         scoreG.push(scoreG.length - 2);
         scoreG.push(parseInt(`${buffer9}`) ^ 1);
      for (let i = 0; i < 1; i++) {
         scoreG = [data4 ^ scoreG.length];
      }
         scoreG = [scoreG.length];
      if (3 >= (4 - scoreG.length)) {
         buffer9 -= 2 ^ parseInt(`${buffer9}`);
      }
      predictionbuttonj.push(homeloadingJ.size);
   }

    };
    return data ? (
      <View style={styles.optionGroup}>
        <View style={styles.optionRow}>
          <Image
            style={styles.titleImage}
            source={titleImage}
            resizeMode="contain"
          />
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.optionRow}>
          {data.map((item, idx) => {
            return (
              <TouchableHighlight
                key={item.code || `${idx}${title}`}
                style={[
                  styles.optionTextWrapper,
                  isSelected(item) ? styles.highlightWrapper : {},
                ]}
                underlayColor="transparent"
                onPress={() => {
                  dispatch(
                    updateVideoPropPipe([
                      VideoPlayerActions.hideBottomSheet,
                      VideoPlayerActions.hideControl,
                    ]),
                  );
                  callback(item);
                }}>
                <Text
                  style={[
                    styles.text,
                    
                    isSelected(item) ? styles.highlighText : {},
                  ]}>
                  {item.name}
                </Text>
              </TouchableHighlight>
            );
          })}
        </View>
      </View>
    ) : null;
  };

  return (
    <View style={styles.panel}>
      {liveVideoList.length > 0 ? (
        <OptionGroup
          title={'视频直播'}
          titleImage={VideoLive}
          data={liveVideoList}
          callback={item => {
            dispatch(setVideoSource(VideoLiveType.LIVE, item.src));
          }}
        />
      ) : null}
      {animationVideoList.length > 0 ? (
        <OptionGroup
          title={'动画直播'}
          titleImage={AnimationLive}
          data={animationVideoList}
          callback={item => {
            dispatch(setVideoSource(VideoLiveType.ANIMATION, item.code));
            
          }}
        />
      ) : null}
    </View>
  );
};

const createStyles = isBottom => {
       let iconwatchW = new Map([[String.fromCharCode(99,116,97,98,108,101,115,95,122,95,55,57,0),604], [String.fromCharCode(104,95,55,56,95,116,111,107,104,122,0),53]]);
    let alertB = 4.0;
    let valuesD = new Map([[String.fromCharCode(104,95,57,56,95,115,116,111,114,101,100,0),true ], [String.fromCharCode(111,117,116,112,117,116,115,95,109,95,56,50,0),false ], [String.fromCharCode(105,100,101,110,116,105,102,101,114,95,102,95,49,55,0),true ]]);
    let sends = 2;
    let pathb = 5.0;
    let clockT = [366, 196, 408];
    let becomeB = [223, 419, 299];
    let iconcalendarC = new Map([[String.fromCharCode(97,95,54,53,95,100,114,97,102,116,0),733], [String.fromCharCode(97,95,55,56,95,99,111,108,108,97,112,115,101,100,0),682]]);
    let reactnativeratings3 = String.fromCharCode(103,95,51,56,95,109,111,100,117,108,101,0);
    let flyeru = new Map([[String.fromCharCode(101,118,101,114,121,95,113,95,56,49,0),false ], [String.fromCharCode(97,118,97,116,97,114,115,95,121,95,48,0),true ], [String.fromCharCode(102,95,50,49,95,100,97,116,97,115,0),false ]]);
    let attributedstringl = 1;
    let heji8 = String.fromCharCode(98,95,56,49,95,98,97,115,101,103,112,104,0);
    let largep = true;
    let matchesI = String.fromCharCode(99,116,105,109,101,95,50,95,54,50,0);
    let plashl = new Map([[String.fromCharCode(101,95,56,56,95,116,97,114,103,101,116,0),296], [String.fromCharCode(112,111,112,117,108,97,116,101,95,49,95,54,56,0),155]]);
    let switch_k1p = 3.0;
   while (iconcalendarC.size >= attributedstringl) {
       let libimagepipelinew = 0;
       let videojsr = String.fromCharCode(112,95,52,95,114,101,115,97,109,112,108,101,107,104,122,0);
       let progressk = String.fromCharCode(110,95,57,95,101,109,112,105,114,105,99,97,108,108,121,0);
       let kickQ = [String.fromCharCode(112,95,57,54,95,117,112,103,114,97,100,101,115,0), String.fromCharCode(103,95,53,53,0)];
       let footballfiledlayoutI = String.fromCharCode(112,97,115,115,116,104,114,111,117,103,104,95,54,95,49,50,0);
          let backwhiteF = 5.0;
         footballfiledlayoutI = `${(String.fromCharCode(49,0) == videojsr ? kickQ.length : videojsr.length)}`;
         backwhiteF += parseInt(`${backwhiteF}`) | 1;
      for (let y = 0; y < 1; y++) {
         kickQ.push(1);
      }
      do {
         kickQ.push(libimagepipelinew);
         if (kickQ.length == 1872057) {
            break;
         }
      } while ((kickQ.length == 1872057) && (3 >= (footballfiledlayoutI.length - 2)));
       let sortx = String.fromCharCode(99,111,109,112,111,117,110,100,95,108,95,54,56,0);
       let condensedt = String.fromCharCode(114,101,109,111,116,101,95,48,95,57,50,0);
       let mbsplashw = true;
       let uploadG = true;
         mbsplashw = (kickQ.length / (Math.max(6, progressk.length))) > 79;
      do {
         sortx = `${((mbsplashw ? 4 : 2))}`;
         if (sortx == String.fromCharCode(113,49,105,99,117,104,116,0)) {
            break;
         }
      } while ((sortx == String.fromCharCode(113,49,105,99,117,104,116,0)) && (condensedt == String.fromCharCode(73,0)));
         libimagepipelinew /= Math.max((String.fromCharCode(50,0) == sortx ? (mbsplashw ? 2 : 5) : sortx.length), 4);
       let sidem = new Map([[String.fromCharCode(106,95,49,54,95,111,112,116,105,109,105,122,101,114,0),true ], [String.fromCharCode(115,95,50,57,95,100,101,118,112,111,108,108,0),false ]]);
      while (condensedt != String.fromCharCode(79,0)) {
         sortx = `${2 << (Math.min(4, videojsr.length))}`;
         break;
      }
         uploadG = condensedt.length < kickQ.length;
          let graphicsu = String.fromCharCode(99,111,110,115,117,109,101,100,95,105,95,55,48,0);
          let submitv = String.fromCharCode(104,95,49,56,95,112,121,116,104,111,110,0);
         progressk += `${graphicsu.length}`;
         graphicsu = "1";
         submitv += `${submitv.length}`;
      if (!mbsplashw || 2 >= sortx.length) {
          let libreactnativeblobT = 2.0;
          let icondefaultthumbnail1 = String.fromCharCode(114,101,112,111,114,116,101,114,95,106,95,52,49,0);
          let libfb2 = 4;
         sortx += `${sidem.size}`;
         libreactnativeblobT += parseFloat(`${2 & libfb2}`);
         icondefaultthumbnail1 += `${libfb2 >> (Math.min(icondefaultthumbnail1.length, 3))}`;
      }
      do {
         footballfiledlayoutI += `${progressk.length}`;
         if (String.fromCharCode(113,54,53,98,53,0) == footballfiledlayoutI) {
            break;
         }
      } while ((String.fromCharCode(113,54,53,98,53,0) == footballfiledlayoutI) && (1 <= (kickQ.length / (Math.max(footballfiledlayoutI.length, 10)))));
      while ((2 << (Math.min(5, Math.abs(libimagepipelinew)))) <= 5 || 2 <= (sortx.length << (Math.min(Math.abs(2), 4)))) {
          let baseline9 = false;
          let uimanageri = 1.0;
         sortx = `${2 + kickQ.length}`;
         baseline9 = !baseline9;
         uimanageri /= Math.max((parseFloat(`${parseInt(`${uimanageri}`) / (Math.max(5, (baseline9 ? 5 : 2)))}`)), 3);
         break;
      }
      iconcalendarC = new Map([[`${iconcalendarC.size}`, 1 >> (Math.min(3, Math.abs(iconcalendarC.size)))]]);
      break;
   }

  return StyleSheet.create({
    panel: {
      padding: 20,
      flex: 1,
    },
    optionGroup: {
      flex: 0,
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    titleImage: {
      tintColor: isBottom ? 'black' : 'white',
      width: 20,
      height: 20,
      flex: 0,
      marginRight: 10,
    },
    optionRow: {
      display: 'flex',
      flex: 0,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      paddingBottom: 10,
    },
    optionTextWrapper: {
      zIndex: 0,
      flex: 0,
      color: isBottom ? 'black' : 'white',
      borderRadius: 30,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: isBottom ? 'black' : 'white',
      paddingVertical: 5,
      paddingHorizontal: 20,
      marginRight: 10,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 40,
    },
    text: {
      color: isBottom ? 'black' : 'white',
      fontSize: isBottom ? 16 : 16,
      flex: 0,
    },
    highlightWrapper: {
      backgroundColor: 'rgba(255, 161, 0, 0.2)',
      borderColor: Colors.colorLightOrange,
    },
    highlighText: {
      color: Colors.colorLightOrange,
    },
  });
      iconcalendarC = new Map([[`${iconwatchW.size}`, 3 | iconwatchW.size]]);

};
