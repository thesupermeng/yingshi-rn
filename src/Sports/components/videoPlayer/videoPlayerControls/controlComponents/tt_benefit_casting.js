import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, View, Text, TouchableHighlight, Image} from 'react-native';
import {
  setVideoSource,
  updateVideoPropPipe,
  VideoPlayerActions,
} from '../../../../pages/matchDetails/action';
import {Colors} from '../../../../global/tt_umeng';
import {useLiveVideoSources} from '@hooks/useLiveVideoSources';
import {useAnimationVideoSources} from '@hooks/useAnimationVideoSources';
import {VideoLiveType} from '../../../../global/tt_libcrashsdk_spinner';
import {VideoLive, AnimationLive} from '../../../../../../static/sports';

export const SwitchSourcePanel = ({isBottom}) => {
  const styles = createStyles(isBottom);

  const dispatch = useDispatch();
  const liveVideoList = useLiveVideoSources();
  const animationVideoList = useAnimationVideoSources();
  const videoPlayerControl = useSelector(s => s.videoPlayerControl);

  
  
  
  
  
  
  
  

  const OptionGroup = ({title, titleImage, data, callback}) => {
    const isSelected = item => {
       let mutedr = 4.0;
    let bellg = 5.0;
    let backgroundU = true;
    let nterstitial5 = String.fromCharCode(105,95,57,56,95,101,99,116,97,110,103,108,101,0);
    let firebaseX = String.fromCharCode(119,95,56,56,95,117,116,116,111,110,0);
    let half0 = 5;
    let controlJ = String.fromCharCode(97,95,49,50,95,108,111,116,116,105,101,107,101,121,112,97,116,104,0);
    let schedulew = String.fromCharCode(121,95,50,53,95,115,111,117,114,99,101,99,108,105,112,0);
    let uploade = 3.0;
    let gesturej = String.fromCharCode(101,95,50,48,95,99,117,114,114,0);
    let nextE = [String.fromCharCode(112,97,117,115,101,95,103,95,53,50,0), String.fromCharCode(107,95,50,56,95,97,115,107,0)];
    let groupq = new Map([[String.fromCharCode(103,95,54,53,95,104,97,110,103,0),219], [String.fromCharCode(104,95,53,95,99,108,117,116,115,0),664]]);
    let malaysiaa = String.fromCharCode(103,95,50,51,95,99,97,114,111,117,115,101,108,0);
    let subsG = new Map([[String.fromCharCode(122,95,56,53,95,108,101,100,103,101,114,0),false ], [String.fromCharCode(103,101,116,97,115,115,111,99,105,100,0),false ]]);
   for (let s = 0; s < 3; s++) {
      bellg -= schedulew.length;
   }
   for (let j = 0; j < 2; j++) {
      bellg *= 1 << (Math.min(3, controlJ.length));
   }
   if (1 == schedulew.length) {
      schedulew += `${nterstitial5.length}`;
   }
      gesturej = `${parseInt(`${uploade}`)}`;
       let colorsk = 2.0;
       let becomeV = [String.fromCharCode(115,116,97,107,101,100,95,107,95,49,55,0), String.fromCharCode(106,95,53,95,115,97,118,101,114,0), String.fromCharCode(112,97,103,101,115,101,101,107,95,112,95,54,54,0)];
       let n_centerW = 1.0;
       let phoneH = 3.0;
       let expanda = [386, 884];
          let membershipD = String.fromCharCode(110,95,49,53,95,109,111,118,105,110,103,0);
         phoneH *= parseFloat(`${parseInt(`${colorsk}`)}`);
         membershipD = `${1 << (Math.min(4, membershipD.length))}`;
         colorsk /= Math.max(parseFloat(`${3}`), 4);
       let placeholderj = [String.fromCharCode(99,104,114,111,109,97,109,99,0), String.fromCharCode(97,99,116,111,114,115,95,49,95,56,51,0), String.fromCharCode(100,105,114,97,99,100,115,112,95,49,95,56,52,0)];
       let animationL = [90, 836];
          let tailt = [226, 412, 95];
          let gemfilew = 1;
         placeholderj = [parseInt(`${n_centerW}`)];
         tailt = [gemfilew];
         gemfilew &= 3;
      controlJ = `${firebaseX.length - parseInt(`${colorsk}`)}`;
      becomeV.push(1 << (Math.min(2, becomeV.length)));
   do {
      mutedr -= parseFloat(`${controlJ.length & half0}`);
      if (3805861.0 == mutedr) {
         break;
      }
   } while ((3805861.0 == mutedr) && ((5.99 + mutedr) >= 4.99));
       let notification7 = 0;
       let heartE = 4;
      for (let p = 0; p < 1; p++) {
         heartE |= notification7 & 1;
      }
       let darkj = [935, 857];
       let groupF = String.fromCharCode(101,114,112,105,99,95,114,95,49,49,0);
       let actionV = String.fromCharCode(97,95,54,49,95,114,101,102,105,100,0);
      if ((groupF.length | notification7) >= 5) {
         notification7 *= heartE;
      }
      for (let a = 0; a < 1; a++) {
         notification7 /= Math.max((String.fromCharCode(53,0) == actionV ? actionV.length : darkj.length), 4);
      }
         heartE %= Math.max(1, 2 | heartE);
      firebaseX = "1";
   do {
      mutedr -= parseFloat(`${schedulew.length}`);
      if (mutedr == 1453456.0) {
         break;
      }
   } while (((mutedr * 4.35) >= 1.19) && (mutedr == 1453456.0));
   if ((bellg / (Math.max(2.38, 10))) <= 2.2 || 4.32 <= (bellg / 2.38)) {
       let diceC = 2.0;
         diceC /= Math.max(parseFloat(`${2 - parseInt(`${diceC}`)}`), 1);
      if (4.21 < (diceC - diceC) && 1.24 < (diceC * 4.21)) {
          let searchbare = 3.0;
         diceC /= Math.max(5, parseFloat(`${parseInt(`${searchbare}`)}`));
      }
         diceC *= parseFloat(`${parseInt(`${diceC}`)}`);
      bellg *= parseInt(`${diceC}`) + firebaseX.length;
   }
   while (nterstitial5.length >= 3) {
      nterstitial5 = `${(String.fromCharCode(55,0) == firebaseX ? controlJ.length : firebaseX.length)}`;
      break;
   }
   do {
      bellg /= Math.max(1, gesturej.length << (Math.min(2, nextE.length)));
      if (bellg == 4580873.0) {
         break;
      }
   } while ((bellg == 4580873.0) && (3.60 <= (mutedr + bellg) || (mutedr + 3.60) <= 2.46));
      gesturej = `${gesturej.length}`;

      return [item.code, item.src].includes(videoPlayerControl.source);
   while (3 == nterstitial5.length) {
       let taiwanR = 5;
       let uploadz = String.fromCharCode(105,95,53,51,0);
       let matchv = String.fromCharCode(98,97,99,107,105,110,103,95,111,95,57,0);
         matchv = `${uploadz.length ^ matchv.length}`;
       let event2 = new Map([[String.fromCharCode(122,95,57,57,95,112,97,114,116,0),String.fromCharCode(104,95,49,55,95,117,108,116,114,97,119,105,100,101,0)], [String.fromCharCode(117,95,55,50,95,99,111,108,115,101,116,0),String.fromCharCode(119,95,54,54,95,114,101,108,97,116,101,100,0)], [String.fromCharCode(119,95,53,55,95,98,114,111,119,115,101,0),String.fromCharCode(113,95,50,49,95,104,101,118,99,100,101,99,0)]]);
       let promotionw = new Map([[String.fromCharCode(97,112,97,114,97,109,115,95,116,95,56,53,0),60], [String.fromCharCode(113,95,52,57,95,119,97,108,0),124], [String.fromCharCode(106,95,57,51,95,97,99,102,105,108,116,101,114,0),347]]);
          let areae = 5;
         event2[`${areae}`] = 1 >> (Math.min(5, Math.abs(areae)));
      for (let v = 0; v < 3; v++) {
         taiwanR &= uploadz.length + 1;
      }
         taiwanR /= Math.max(uploadz.length, 3);
         taiwanR ^= uploadz.length;
         taiwanR |= (matchv == String.fromCharCode(90,0) ? matchv.length : promotionw.size);
      do {
         matchv += `${taiwanR << (Math.min(Math.abs(3), 3))}`;
         if (matchv == String.fromCharCode(118,107,55,119,0)) {
            break;
         }
      } while ((matchv == String.fromCharCode(118,107,55,119,0)) && ((5 & matchv.length) >= 4));
      for (let y = 0; y < 1; y++) {
          let with_ved = 1.0;
          let networkK = String.fromCharCode(110,111,110,99,111,110,116,97,99,116,95,97,95,48,0);
          let xvodg = true;
          let disconnectedb = 1.0;
         matchv += `${event2.size}`;
         with_ved += parseFloat(`${2 ^ parseInt(`${disconnectedb}`)}`);
         networkK = `${3 % (Math.max(8, parseInt(`${with_ved}`)))}`;
         xvodg = !xvodg;
         disconnectedb -= parseFloat(`${1 / (Math.max(8, networkK.length))}`);
      }
      nterstitial5 = `${3 * groupq.size}`;
      break;
   }
   do {
      schedulew = `${firebaseX.length}`;
      if (4284849 == schedulew.length) {
         break;
      }
   } while ((gesturej == schedulew) && (4284849 == schedulew.length));
      backgroundU = nterstitial5.includes(`${bellg}`);
       let darkm = 1.0;
      do {
         darkm *= parseFloat(`${1 & parseInt(`${darkm}`)}`);
         if (darkm == 2347230.0) {
            break;
         }
      } while ((darkm == darkm) && (darkm == 2347230.0));
      while (darkm == darkm) {
         darkm -= parseFloat(`${1}`);
         break;
      }
      if ((darkm / (Math.max(4, 3))) <= 1.39) {
         darkm += parseFloat(`${parseInt(`${darkm}`)}`);
      }
      gesturej = "2";
      firebaseX = "1";
   if ((3.56 * mutedr) > 1.69) {
       let placementI = String.fromCharCode(100,95,49,51,95,110,105,101,108,115,97,100,100,0);
       let nativeexb = false;
       let f_positionU = new Map([[String.fromCharCode(109,95,52,56,95,102,117,110,99,116,105,111,110,0),String.fromCharCode(109,109,99,111,95,57,95,52,51,0)], [String.fromCharCode(112,97,110,111,114,97,109,97,95,97,95,53,48,0),String.fromCharCode(121,95,51,57,95,117,110,97,115,115,105,103,110,101,100,0)]]);
       let gradlez = new Map([[String.fromCharCode(98,111,120,101,100,95,113,95,55,51,0),16], [String.fromCharCode(102,95,53,56,95,112,97,115,115,119,111,114,100,0),244]]);
       let package_t1 = 0.0;
       let largew = 3.0;
         placementI += `${((nativeexb ? 1 : 2) >> (Math.min(Math.abs(3), 3)))}`;
       let unreadI = String.fromCharCode(112,117,108,115,101,115,95,48,95,55,49,0);
      if (5 > (unreadI.length - 2) || 4 > (unreadI.length % 2)) {
          let scoreR = String.fromCharCode(119,95,49,95,102,105,110,105,115,104,101,100,0);
          let forwardF = [487, 523];
         package_t1 -= parseFloat(`${parseInt(`${largew}`)}`);
         scoreR += `${scoreR.length}`;
         forwardF.push(scoreR.length);
      }
      for (let q = 0; q < 1; q++) {
          let chinasame1 = String.fromCharCode(115,104,111,119,119,97,118,101,115,95,52,95,52,48,0);
          let applicationZ = String.fromCharCode(117,110,112,117,98,108,105,115,104,95,108,95,51,0);
         f_positionU = new Map([[`${gradlez.size}`, gradlez.size * applicationZ.length]]);
         chinasame1 = `${chinasame1.length}`;
         applicationZ += `${chinasame1.length / 2}`;
      }
         nativeexb = (f_positionU.size / (Math.max(unreadI.length, 3))) >= 2;
         largew += (parseFloat(`${(nativeexb ? 2 : 4) | 3}`));
      for (let a = 0; a < 3; a++) {
         placementI = `${unreadI.length}`;
      }
      gesturej += `${controlJ.length}`;
   }
   while (5 == (half0 + firebaseX.length)) {
      firebaseX += `${((backgroundU ? 1 : 2))}`;
      break;
   }
   if (1 >= firebaseX.length && nterstitial5.length >= 1) {
      nterstitial5 += `${parseInt(`${bellg}`) + gesturej.length}`;
   }
   do {
      schedulew += `${controlJ.length / 3}`;
      if (String.fromCharCode(105,97,108,109,115,109,113,118,56,108,0) == schedulew) {
         break;
      }
   } while ((controlJ == String.fromCharCode(116,0)) && (String.fromCharCode(105,97,108,109,115,109,113,118,56,108,0) == schedulew));
   if (malaysiaa.includes(`${mutedr}`)) {
      malaysiaa += `${nextE.length}`;
   }
       let calendarJ = 2;
         calendarJ *= 1 * calendarJ;
       let incidentr = 0.0;
       let moviesr = 4.0;
      if ((calendarJ << (Math.min(Math.abs(5), 4))) < 1 && (calendarJ * 5) < 3) {
         incidentr -= parseFloat(`${parseInt(`${incidentr}`) % (Math.max(parseInt(`${moviesr}`), 8))}`);
      }
      schedulew = "2";
   for (let x = 0; x < 2; x++) {
      backgroundU = controlJ.length < 86 || 86 < half0;
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
       let tramini2 = String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,95,56,95,49,51,0);
    let mbnativeadvanceda = [String.fromCharCode(108,95,54,52,95,109,98,118,115,0), String.fromCharCode(101,120,112,111,110,101,110,116,115,95,112,95,54,48,0), String.fromCharCode(114,101,115,105,122,101,95,104,95,49,49,0)];
    let hearto = String.fromCharCode(121,95,56,49,95,97,110,97,108,121,115,105,115,0);
    let rulesI = 2.0;
    let context9 = true;
    let penaltyq = [95, 271, 367];
    let closeV = 5.0;
    let condensed5 = String.fromCharCode(110,105,107,111,110,95,118,95,55,56,0);
    let white4 = String.fromCharCode(114,95,49,55,95,111,117,116,102,105,108,101,0);
    let expired8 = [851, 26];
    let eventN = String.fromCharCode(97,100,97,112,116,101,100,95,122,95,55,52,0);
      closeV += parseFloat(`${white4.length}`);

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
   while ((mbnativeadvanceda.length >> (Math.min(white4.length, 3))) > 3) {
      mbnativeadvanceda.push((tramini2 == String.fromCharCode(104,0) ? (context9 ? 1 : 2) : tramini2.length));
      break;
   }

};
