import { useAppDispatch, useAppSelector, useSelector } from '@hooks/ww_catagory_neon';
import { setIsSportGuideShown } from '@redux/actions/ww_hash';
import { Divider } from '@rneui/base';
import { screenModel } from '@type/ww_jingdong_libavfilter';
import { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  Modal,
  Dimensions,
} from 'react-native';
import VipGuideModal from '../modal/ww_bdxadsdk_kick';
import { wwVertical } from '@redux/reducers/ww_related_kuaishou';
import { wwBodan } from '@models/ww_liveendmodallogo_awayteamfield';
import { wwEighteenShirt } from '@redux/ww_small';
interface wwIndexDice {
  timer: number; 
  onClickVip: (...args: any) => void;
  vipButtonText: string;
  containerStyle: ViewStyle;
}

const formatTimer = (numOfSeconds: number) => {
  const minutes = Math.floor(numOfSeconds / 60);
  const seconds = numOfSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const CountdownIndicator = ({
  timer,
  onClickVip,
  vipButtonText,
  containerStyle,
}: wwIndexDice) => {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window');
  const [visible, setVisible] = useState(true);
  const [refPosition, setRefPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const componentRef = useRef<View>(null); 
  const [vipGuideModal, setVipGuideModal] = useState(false);





  const userState = useSelector<wwVertical>('userReducer');
  const isVip = wwBodan.fakeIsVip(userState.user);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (screenState.isSportGuideShown == false && !isVip) {
      setTimeout(() => {
        setVipGuideModal(true);
        dispatch(setIsSportGuideShown(true));
      }, 1300);
    }
  }, [timer]);




  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
       let gpayL = 3.0;
    let vignette_: Map<any, any> = new Map([[String.fromCharCode(106,95,54,95,115,111,102,97,0),String.fromCharCode(99,95,51,95,99,97,99,104,101,0)], [String.fromCharCode(116,111,114,99,104,95,118,95,57,57,0),String.fromCharCode(112,95,54,53,95,97,112,112,114,111,120,105,109,97,116,105,111,110,0)], [String.fromCharCode(117,112,108,111,97,100,95,107,95,53,57,0),String.fromCharCode(107,101,121,95,53,95,56,53,0)]]);
    let reactL = String.fromCharCode(103,95,50,51,95,97,115,97,110,0);
    let clearW: Array<any> = [155, 965, 965];
    let bootsplashb = String.fromCharCode(107,95,51,57,95,100,101,99,111,100,101,102,0);
    let disconnectedlogof = 4.0;
    let controla = String.fromCharCode(114,97,112,105,100,106,115,111,110,95,115,95,53,55,0);
    let backgroundz = 4.0;
    let weibow: Map<any, any> = new Map([[String.fromCharCode(105,95,55,48,95,115,101,103,109,97,112,0),String.fromCharCode(97,112,112,114,111,118,101,100,95,104,95,55,49,0)], [String.fromCharCode(106,95,56,50,0),String.fromCharCode(98,117,108,107,95,97,95,57,56,0)]]);
   if (parseInt(`${disconnectedlogof}`) == controla.length) {
      controla = `${clearW.length}`;
   }
       let libsgcorei = 5.0;
       let libreanimatedf: Map<any, any> = new Map([[String.fromCharCode(121,95,52,56,95,98,97,115,101,100,0),false ], [String.fromCharCode(99,97,118,115,100,115,112,95,109,95,54,56,0),false ]]);
      let full4 = 8901735.0 >= libsgcorei;
      do {
          let confirmation2 = String.fromCharCode(115,97,102,101,115,116,97,99,107,95,114,95,50,57,0);
          let appsZ = String.fromCharCode(116,95,55,53,95,99,111,109,112,114,101,115,115,105,111,110,0);
          let mountingv = String.fromCharCode(100,101,97,100,108,111,99,107,101,100,95,97,95,49,54,0);
         libsgcorei *= parseFloat(`${parseInt(`${libsgcorei}`) >> (Math.min(Math.abs(3), 5))}`);
         confirmation2 = `${mountingv.length | 2}`;
         appsZ += `${confirmation2.length & appsZ.length}`;
         mountingv += `${confirmation2.length | 3}`;
         if (full4) {
            break;
         }
      } while ((4.18 == (5.22 - libsgcorei) || (5.22 - libsgcorei) == 1.62) && full4);
      for (let j = 0; j < 1; j++) {
         libreanimatedf = new Map([[`${libreanimatedf.size}`, parseInt(`${libsgcorei}`)]]);
      }
         libreanimatedf.set(`${libsgcorei}`, parseInt(`${libsgcorei}`));
          let moduleT = String.fromCharCode(114,111,119,105,100,95,118,95,49,49,0);
          let debug_ = 0.0;
          let description_23F: Array<any> = [726, 901];
         libsgcorei *= parseFloat(`${description_23F.length}`);
         moduleT = `${moduleT.length}`;
         debug_ *= parseFloat(`${moduleT.length}`);
         description_23F.push(3);
      let release_md_ = 9816917.0 <= libsgcorei;
      do {
          let castr = 4;
         libsgcorei /= Math.max(parseFloat(`${libreanimatedf.size % (Math.max(4, parseInt(`${libsgcorei}`)))}`), 2);
         castr *= castr & castr;
         if (release_md_) {
            break;
         }
      } while (release_md_ && (2 < (libreanimatedf.size & 1) || 1 < (libreanimatedf.size - parseInt(`${libsgcorei}`))));
      for (let p = 0; p < 1; p++) {
         libreanimatedf.set(`${libsgcorei}`, libreanimatedf.size << (Math.min(5, Math.abs(parseInt(`${libsgcorei}`)))));
      }
      disconnectedlogof *= parseFloat(`${3 + parseInt(`${disconnectedlogof}`)}`);
       let final_pnA = 0;
       let clocky = 4.0;
       let annerm = 1.0;
       let backwardC = 4.0;
       let overc = 0.0;
      while ((overc - 4.58) >= 3.14 || (4 * final_pnA) >= 1) {
          let handler3: Array<any> = [347, 88, 283];
          let final_2q9 = 2.0;
          let sigmobz = String.fromCharCode(99,111,111,108,100,111,119,110,95,98,95,50,48,0);
         overc += parseInt(`${backwardC}`);
         handler3 = [parseInt(`${final_2q9}`) | handler3.length];
         final_2q9 *= parseFloat(`${2 * sigmobz.length}`);
         sigmobz = `${parseInt(`${final_2q9}`)}`;
         break;
      }
      for (let f = 0; f < 3; f++) {
         final_pnA <<= Math.min(Math.abs(parseInt(`${overc}`)), 1);
      }
       let libruntimeexecutor0 = 3.0;
         clocky -= parseFloat(`${parseInt(`${clocky}`) | parseInt(`${annerm}`)}`);
          let halfn = 3.0;
         backwardC /= Math.max(3, parseInt(`${clocky}`));
         halfn -= parseFloat(`${parseInt(`${halfn}`)}`);
         libruntimeexecutor0 -= parseInt(`${backwardC}`);
         overc += parseInt(`${clocky}`);
      if (annerm == libruntimeexecutor0) {
         libruntimeexecutor0 -= 3 << (Math.min(Math.abs(parseInt(`${clocky}`)), 5));
      }
      gpayL *= 2 & parseInt(`${annerm}`);
      reactL = `${(String.fromCharCode(89,0) == bootsplashb ? bootsplashb.length : vignette_.size)}`;
   if (reactL != bootsplashb) {
      bootsplashb = `${controla.length}`;
   }

    if (componentRef && componentRef.current != null) {

   for (let w = 0; w < 2; w++) {
       let librrcG: Array<any> = [331, 913];
       let sheetA = 3.0;
       let sourceE = String.fromCharCode(108,101,97,118,101,95,111,95,53,52,0);
       let dragy = 3;
      let mimoG = librrcG.length >= 7330369;
      do {
         librrcG.push(parseInt(`${sheetA}`));
         if (mimoG) {
            break;
         }
      } while (mimoG && (librrcG.includes(sheetA)));
         sourceE += "1";
      let langkeya = sourceE.length <= 9140639;
      do {
          let setting8 = 1;
          let coreM = String.fromCharCode(98,95,51,56,95,112,114,101,99,105,115,105,111,110,0);
          let xvods = 5;
         sourceE = `${3 + coreM.length}`;
         setting8 |= xvods;
         coreM = `${setting8 % (Math.max(xvods, 5))}`;
         if (langkeya) {
            break;
         }
      } while (((1 | sourceE.length) > 5 || (sourceE.length | 1) > 2) && langkeya);
          let leagueS = 0.0;
          let largebrightness4 = 1.0;
         sheetA *= parseInt(`${sheetA}`);
         leagueS += parseFloat(`${1}`);
         largebrightness4 /= Math.max(parseFloat(`${parseInt(`${largebrightness4}`) & 2}`), 4);
      for (let m = 0; m < 2; m++) {
         librrcG.push(dragy / (Math.max(3, 5)));
      }
          let aboutN = String.fromCharCode(98,95,52,53,95,99,109,121,107,0);
          let singaporev: Array<any> = [709, 326];
         sourceE += `${sourceE.length}`;
         aboutN += "2";
         singaporev = [(String.fromCharCode(119,0) == aboutN ? singaporev.length : aboutN.length)];
          let reactnavigationU: Map<any, any> = new Map([[String.fromCharCode(107,101,114,110,101,100,95,100,95,53,55,0),503], [String.fromCharCode(104,97,115,120,95,113,95,55,56,0),772], [String.fromCharCode(99,116,120,95,56,95,56,56,0),251]]);
          let vietnamU = true;
         librrcG = [1];
         reactnavigationU = new Map([[`${reactnavigationU.size}`, (1 - (vietnamU ? 2 : 2))]]);
         vietnamU = reactnavigationU.size >= 27;
         librrcG.push(librrcG.length);
      while ((dragy % 4) == 3) {
         sourceE += `${librrcG.length}`;
         break;
      }
      for (let p = 0; p < 2; p++) {
          let pangleV = false;
          let scoreb = String.fromCharCode(117,95,56,57,95,98,117,99,107,101,116,115,0);
          let actionQ: Map<any, any> = new Map([[String.fromCharCode(111,95,53,55,95,99,114,97,115,104,0),737], [String.fromCharCode(100,101,100,117,112,101,95,108,95,54,53,0),73], [String.fromCharCode(121,95,55,48,95,114,101,115,0),643]]);
          let downloaderE = 0.0;
          let umengS = 4;
         dragy /= Math.max(1 & actionQ.size, 4);
         pangleV = (((!pangleV ? 36 : scoreb.length) & scoreb.length) <= 36);
         actionQ = new Map([[`${pangleV}`, ((pangleV ? 4 : 4) + parseInt(`${downloaderE}`))]]);
         downloaderE += parseInt(`${downloaderE}`);
         umengS |= parseInt(`${downloaderE}`) & scoreb.length;
      }
         sourceE = `${3 ^ librrcG.length}`;
      while ((1 ^ sourceE.length) < 2 && (sourceE.length ^ librrcG.length) < 1) {
         librrcG.push(3 | dragy);
         break;
      }
      reactL = `${clearW.length}`;
   }
   if (3 < reactL.length) {
      reactL = `${2 | parseInt(`${gpayL}`)}`;
   }
   while (3.80 < (gpayL / 4.3) || (4.3 + gpayL) < 2.12) {
      gpayL *= reactL.length / (Math.max(4, parseInt(`${gpayL}`)));
      break;
   }
       let eventsplasht = 3.0;
       let profileD = 4;
          let submitK = String.fromCharCode(109,115,109,112,101,103,95,118,95,54,50,0);
          let frame_vtE = String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,98,108,101,95,120,95,49,57,0);
          let targetK = 4;
         profileD |= parseInt(`${eventsplasht}`);
         submitK += `${frame_vtE.length + 2}`;
         frame_vtE += `${submitK.length}`;
         targetK |= submitK.length << (Math.min(Math.abs(2), 3));
          let mbnativeadvancedH = String.fromCharCode(117,95,56,57,95,101,103,117,108,97,114,0);
          let stringL = String.fromCharCode(109,105,110,95,113,95,54,49,0);
         profileD ^= profileD % (Math.max(2, parseInt(`${eventsplasht}`)));
         mbnativeadvancedH += `${stringL.length}`;
         stringL = `${stringL.length}`;
      for (let j = 0; j < 3; j++) {
         eventsplasht /= Math.max(5, parseFloat(`${parseInt(`${eventsplasht}`)}`));
      }
      let resultu = profileD <= 5462063;
      do {
         profileD /= Math.max(parseInt(`${eventsplasht}`), 5);
         if (resultu) {
            break;
         }
      } while (resultu && (eventsplasht <= 4.18));
          let bootr: Array<any> = [720, 77, 655];
          let livenodatabgimgv = 5.0;
         profileD -= 2;
         bootr.push(bootr.length);
         livenodatabgimgv += parseFloat(`${parseInt(`${livenodatabgimgv}`) % (Math.max(2, bootr.length))}`);
       let arrowI = true;
       let reviewO = true;
      controla += `${parseInt(`${eventsplasht}`)}`;
   for (let j = 0; j < 1; j++) {
       let baselinee = true;
       let libjsijniprofiler5 = String.fromCharCode(118,95,53,49,95,99,109,97,107,101,0);
       let uploady = 5.0;
       let fillz = String.fromCharCode(115,95,51,95,114,101,108,111,103,105,110,0);
         libjsijniprofiler5 += `${parseInt(`${uploady}`)}`;
         libjsijniprofiler5 = `${parseInt(`${uploady}`)}`;
          let downloaderq: Array<any> = [178, 327, 335];
          let iconeditD = 0;
          let backt = 0.0;
         fillz = `${(2 * (baselinee ? 5 : 5))}`;
         downloaderq.push(2);
         iconeditD <<= Math.min(Math.abs(parseInt(`${backt}`)), 1);
         backt /= Math.max(3, parseInt(`${backt}`) / (Math.max(10, downloaderq.length)));
         uploady /= Math.max(1, libjsijniprofiler5.length & fillz.length);
         fillz = `${(libjsijniprofiler5.length | (baselinee ? 2 : 2))}`;
      if (uploady == 2.73) {
         baselinee = (parseInt(`${uploady}`) - libjsijniprofiler5.length) <= 22;
      }
      let transfer7 = baselinee ? !baselinee : baselinee;
      do {
          let networkE = true;
         baselinee = uploady <= libjsijniprofiler5.length;
         networkE = !networkE || networkE;
         if (transfer7) {
            break;
         }
      } while (transfer7 && (baselinee));
      while (!baselinee) {
         baselinee = !baselinee;
         break;
      }
      while (2.5 >= uploady) {
         uploady /= Math.max((fillz == String.fromCharCode(53,0) ? (baselinee ? 4 : 5) : fillz.length), 2);
         break;
      }
      let custom8 = 6050918.0 <= uploady;
      do {
          let blackV = true;
          let anytimeh = String.fromCharCode(122,95,49,51,95,98,105,116,114,97,116,101,115,0);
         uploady -= ((baselinee ? 4 : 1));
         blackV = anytimeh == String.fromCharCode(74,0);
         anytimeh = `${anytimeh.length + anytimeh.length}`;
         if (custom8) {
            break;
         }
      } while (custom8 && (1.9 == uploady));
          let acopy_bcz = String.fromCharCode(119,95,51,54,95,104,107,100,102,0);
          let buildJ = true;
         uploady /= Math.max(acopy_bcz.length, 1);
         acopy_bcz = `${((buildJ ? 1 : 4))}`;
          let libfollyP = String.fromCharCode(115,115,114,99,95,103,95,49,51,0);
          let typesV = String.fromCharCode(115,95,53,52,95,98,97,115,101,0);
          let half_: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,97,98,108,101,95,116,95,51,53,0),String.fromCharCode(117,95,52,52,95,116,97,98,108,101,116,0)], [String.fromCharCode(102,105,108,116,101,114,103,114,97,112,104,95,110,95,53,49,0),String.fromCharCode(107,95,49,54,95,112,117,115,104,98,97,99,107,0)], [String.fromCharCode(108,105,98,115,97,109,112,108,101,95,122,95,55,0),String.fromCharCode(111,95,53,52,95,108,111,99,97,108,97,100,100,114,0)]]);
         libjsijniprofiler5 = `${((baselinee ? 3 : 2) >> (Math.min(Math.abs(2), 1)))}`;
         libfollyP += `${2 - half_.size}`;
         typesV = `${typesV.length * 1}`;
         half_ = new Map([[typesV, 2]]);
      vignette_ = new Map([[`${clearW.length}`, parseInt(`${disconnectedlogof}`) * 1]]);
   }
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {

   for (let r = 0; r < 3; r++) {
      controla += `${vignette_.size}`;
   }
      gpayL *= parseInt(`${disconnectedlogof}`) / 1;
   let klevinA = disconnectedlogof <= 8532251.0;
   do {
      disconnectedlogof *= parseFloat(`${1}`);
      if (klevinA) {
         break;
      }
   } while ((disconnectedlogof >= 2.2) && klevinA);
   if (5.92 <= (disconnectedlogof / 2.86) || (parseInt(`${disconnectedlogof}`) / (Math.max(controla.length, 7))) <= 4) {
      disconnectedlogof += parseFloat(`${parseInt(`${backgroundz}`) - bootsplashb.length}`);
   }
   while ((parseInt(`${disconnectedlogof}`) / 5) <= 4 || (disconnectedlogof / 4.19) <= 3.38) {
      disconnectedlogof -= parseFloat(`${parseInt(`${disconnectedlogof}`)}`);
      break;
   }
        console.log('Position:', { x, y, width, height, pageX, pageY });
        setRefPosition({ x: pageX, y: pageY, width: width, height: height });
      });
    }
  };
  return (
    <>

      <View
        style={containerStyle}
        onLayout={() => getPosition()}
        ref={componentRef}>
        <View style={{ ...styles.timerIndicatorContainer, marginLeft: screenState.isPlayerFullScreen ? 10 : 0 }}>
          <Text
            numberOfLines={1}
            style={{ ...styles.indicatorText, color: '#FFFFFF' }}>
            {timer >= 0 ? `试看${formatTimer(timer)}后结束` : '试看结束'}
          </Text>
          <Divider color="#FFFFFF33" orientation="vertical" width={1} />
          <TouchableOpacity onPress={onClickVip}>
            <Text
              numberOfLines={1}
              style={{ ...styles.indicatorText, color: '#FAC33D' }}>
              {vipButtonText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={vipGuideModal} transparent={true}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.8)' }}>
          <View
            style={{
              position: 'absolute',
              top: refPosition.y,
              left: refPosition.x,
            }}>
            <View style={{ ...styles.timerIndicatorContainer, marginLeft: screenState.isPlayerFullScreen ? 20 : 0 }}>
              <Text
                numberOfLines={1}
                style={{ ...styles.indicatorText, color: '#FFFFFF' }}>
                {timer >= 0 ? `试看${formatTimer(timer)}后结束` : '试看结束'}
              </Text>
              <Divider color="#FFFFFF33" orientation="vertical" width={1} />
              <TouchableOpacity onPress={onClickVip}>
                <Text
                  numberOfLines={1}
                  style={{ ...styles.indicatorText, color: '#FAC33D' }}>
                  {vipButtonText}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              position: 'absolute',
              top: refPosition.y + 30,
              left: 55,
            }}>
            <VipGuideModal
              contentTemplate={3}
              width="120%"
              isLeft={true}
              onClose={(value: boolean) => setVipGuideModal(value)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles: Record<string, ViewStyle | TextStyle> = {
  timerIndicatorContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    paddingVertical: 4,
    paddingHorizontal: 5,
    flex: 1,

  },
  indicatorText: {
    fontSize: 14,
  },
};

export default CountdownIndicator;
