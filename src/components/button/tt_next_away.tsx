import {useAppDispatch, useAppSelector, useSelector} from '@hooks/tt_spec_download';
import {setIsSportGuideShown} from '@redux/actions/tt_copy_heji';
import {Divider} from '@rneui/base';
import {screenModel} from '@type/tt_twitter_data';
import {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  Modal,
  Dimensions,
} from 'react-native';
import VipGuideModal from '../modal/tt_pangle';
import { ttGoal } from '@redux/reducers/tt_selected';
import {ttFast} from '@models/tt_stations_right';
import { ttOrange } from '@redux/tt_updates_bottom';
interface ttSmall {
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
}: ttSmall) => {
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

  



  const userState = useSelector<ttGoal>('userReducer');
  const isVip = ttFast.isVip(userState.user);
  
  const screenState: screenModel = useAppSelector(
    ({screenReducer}) => screenReducer,
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
       let wcopy_qm = true;
    let d_playera = 0.0;
    let bannerB = 1.0;
    let headerH: Array<any> = [695, 480, 871];
    let materials = String.fromCharCode(104,95,56,57,95,100,101,108,97,0);
    let volume6: Array<any> = [496, 38, 66];
    let fastQ: Map<any, any> = new Map([[String.fromCharCode(108,97,98,101,108,110,115,95,108,95,56,48,0),471], [String.fromCharCode(107,95,57,48,0),896], [String.fromCharCode(121,95,52,95,118,111,116,101,114,0),980]]);
    let anytimek = 0.0;
    let pageP = 2.0;
    let crownR = false;
      wcopy_qm = volume6.length == 38;
   while ((3 | materials.length) == 4 || 1 == (3 << (Math.min(3, materials.length)))) {
      materials += `${headerH.length % (Math.max(volume6.length, 10))}`;
      break;
   }
       let goalp = String.fromCharCode(100,95,50,55,95,115,112,105,108,108,115,105,122,101,0);
       let memberE: Map<any, any> = new Map([[String.fromCharCode(121,95,55,54,95,114,101,100,101,109,112,116,105,111,110,0),String.fromCharCode(98,105,116,112,108,97,110,97,114,99,104,117,110,107,121,95,119,95,55,50,0)], [String.fromCharCode(108,95,50,57,95,109,111,98,105,117,115,0),String.fromCharCode(113,95,55,49,95,108,111,103,103,101,114,115,0)], [String.fromCharCode(104,111,108,101,95,104,95,55,51,0),String.fromCharCode(108,105,110,101,115,105,122,101,95,97,95,53,57,0)]]);
       let soundl = 2.0;
      for (let g = 0; g < 2; g++) {
          let feedbacko = 4.0;
          let configO = String.fromCharCode(98,107,116,114,95,55,95,49,52,0);
         soundl *= parseInt(`${soundl}`);
         feedbacko += parseFloat(`${parseInt(`${feedbacko}`)}`);
         configO = `${parseInt(`${feedbacko}`)}`;
      }
          let u_countI = String.fromCharCode(114,101,115,97,109,112,95,114,95,53,55,0);
         memberE.set(u_countI, (String.fromCharCode(121,0) == u_countI ? goalp.length : u_countI.length));
      if (!Array.from(memberE.keys()).includes(`${soundl}`)) {
         soundl /= Math.max(memberE.size, 4);
      }
          let package_iM = String.fromCharCode(101,95,55,50,95,105,112,118,0);
          let trash3 = 5;
         soundl -= parseInt(`${soundl}`);
         package_iM += `${package_iM.length}`;
         trash3 += package_iM.length;
         soundl -= goalp.length + 3;
      let upload7 = memberE.size <= 7271723;
      do {
          let halfD = 0.0;
          let update_plm = String.fromCharCode(110,116,101,114,102,97,99,101,95,111,95,52,55,0);
          let hoverA: Map<any, any> = new Map([[String.fromCharCode(109,111,116,105,111,110,95,100,95,48,0),442], [String.fromCharCode(112,104,114,97,115,101,95,122,95,53,53,0),204]]);
          let temperatureV = false;
          let stations_: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,115,116,101,114,95,114,95,54,57,0),String.fromCharCode(116,95,52,50,95,110,99,114,121,112,116,105,111,110,0)], [String.fromCharCode(108,105,98,111,112,101,110,106,112,101,103,95,52,95,56,51,0),String.fromCharCode(111,95,49,51,95,100,118,100,115,117,98,0)]]);
         memberE = new Map([[goalp, parseInt(`${soundl}`) / (Math.max(9, goalp.length))]]);
         halfD += parseFloat(`${hoverA.size}`);
         update_plm += `${(update_plm == String.fromCharCode(81,0) ? update_plm.length : parseInt(`${halfD}`))}`;
         hoverA = new Map([[`${hoverA.size}`, (update_plm == String.fromCharCode(50,0) ? hoverA.size : update_plm.length)]]);
         temperatureV = stations_.get(`${temperatureV}`) != null;
         stations_.set(`${halfD}`, parseInt(`${halfD}`));
         if (upload7) {
            break;
         }
      } while (upload7 && (soundl > 2.56));
      for (let h = 0; h < 2; h++) {
         goalp += `${2 % (Math.max(10, memberE.size))}`;
      }
      while ((3 << (Math.min(1, goalp.length))) < 3) {
         memberE.set(goalp, goalp.length);
         break;
      }
         soundl /= Math.max(5, parseInt(`${soundl}`));
      bannerB *= parseFloat(`${headerH.length << (Math.min(Math.abs(1), 3))}`);
   let gpayk = 8723635 <= fastQ.size;
   do {
      fastQ = new Map([[`${fastQ.size}`, parseInt(`${bannerB}`)]]);
      if (gpayk) {
         break;
      }
   } while (gpayk && ((5 << (Math.min(3, Math.abs(fastQ.size)))) > 5 && fastQ.size > 5));
      bannerB /= Math.max(4, parseFloat(`${2 & parseInt(`${d_playera}`)}`));

    if (componentRef && componentRef.current != null) {

   for (let y = 0; y < 1; y++) {
       let strO = 2;
       let submitM = String.fromCharCode(105,116,101,114,95,104,95,49,48,48,0);
       let navigationE = String.fromCharCode(101,95,54,56,95,115,112,100,105,102,0);
       let infoq = false;
       let constantsX = String.fromCharCode(98,97,114,114,101,116,116,95,117,95,57,49,0);
         infoq = (navigationE.length + submitM.length) < 1;
      let react4 = constantsX.length <= 5088590;
      do {
          let sinae = String.fromCharCode(109,95,50,55,95,110,117,109,101,114,105,99,0);
          let crossG = true;
          let video9 = 0.0;
          let selectedH: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,111,95,110,95,49,50,0),String.fromCharCode(118,108,105,110,101,95,55,95,50,56,0)], [String.fromCharCode(118,101,114,105,102,105,101,114,95,55,95,53,51,0),String.fromCharCode(110,97,110,111,112,98,95,110,95,55,49,0)]]);
         constantsX += `${sinae.length * 2}`;
         sinae += `${3 * parseInt(`${video9}`)}`;
         crossG = 35.13 > video9 && selectedH.size > 10;
         selectedH = new Map([[`${selectedH.size}`, selectedH.size]]);
         if (react4) {
            break;
         }
      } while ((navigationE.length == constantsX.length) && react4);
         infoq = !infoq;
         strO |= strO;
      let assistM = String.fromCharCode(51,113,108,120,115,117,0) == navigationE;
      do {
         navigationE += `${(2 & (infoq ? 3 : 2))}`;
         if (assistM) {
            break;
         }
      } while (assistM && (3 < submitM.length));
      while (!constantsX.includes(`${infoq}`)) {
          let chartk = 4.0;
         infoq = chartk >= 24.67;
         break;
      }
          let zhubo8 = String.fromCharCode(99,111,117,110,116,113,117,97,110,116,95,114,95,50,57,0);
         strO *= 1;
         zhubo8 = `${zhubo8.length}`;
      let spect = String.fromCharCode(49,49,120,118,117,103,114,54,0) == submitM;
      do {
         submitM = `${submitM.length % (Math.max(navigationE.length, 4))}`;
         if (spect) {
            break;
         }
      } while ((!submitM.startsWith(`${strO}`)) && spect);
      let phonel = infoq ? !infoq : infoq;
      do {
         infoq = submitM.length < strO;
         if (phonel) {
            break;
         }
      } while (phonel && (infoq));
       let stringh = 0;
       let sportsM = 0;
         navigationE = `${submitM.length << (Math.min(2, Math.abs(sportsM)))}`;
      for (let m = 0; m < 1; m++) {
          let hook3: Array<any> = [180, 964, 60];
          let redirectJ = 5.0;
         navigationE += `${constantsX.length}`;
         hook3 = [parseInt(`${redirectJ}`)];
         redirectJ -= parseInt(`${redirectJ}`);
      }
         strO /= Math.max(4, 1);
         sportsM &= 2;
         stringh ^= navigationE.length;
      fastQ.set(submitM, strO + 1);
   }
   while (5 <= (parseInt(`${bannerB}`) + materials.length)) {
      materials = `${fastQ.size}`;
      break;
   }
   let carouselI = 9868723 >= headerH.length;
   do {
      headerH.push(materials.length & volume6.length);
      if (carouselI) {
         break;
      }
   } while (carouselI && (3 == (3 / (Math.max(6, materials.length)))));
   let renewv = 5571249.0 >= d_playera;
   do {
       let trash8 = String.fromCharCode(114,103,98,105,95,115,95,54,53,0);
         trash8 += `${trash8.length ^ trash8.length}`;
       let with_q9: Map<any, any> = new Map([[String.fromCharCode(108,95,54,51,95,102,111,99,117,115,97,98,108,101,0),306], [String.fromCharCode(106,95,52,53,95,114,101,108,99,116,120,0),902]]);
         trash8 += `${with_q9.size >> (Math.min(trash8.length, 4))}`;
      d_playera -= parseFloat(`${3 - fastQ.size}`);
      if (renewv) {
         break;
      }
   } while (renewv && (3.81 >= (d_playera - 5.68) || (5.68 - d_playera) >= 4.24));
   let minimizeb = fastQ.size >= 6319035;
   do {
       let navigationq = String.fromCharCode(106,95,50,49,95,112,108,105,115,116,0);
       let videojsr = String.fromCharCode(104,95,56,53,95,108,111,103,103,101,114,0);
       let soundL: Map<any, any> = new Map([[String.fromCharCode(100,95,54,56,95,115,101,110,116,0),String.fromCharCode(98,95,55,49,95,109,111,100,101,115,0)], [String.fromCharCode(97,108,97,114,109,95,113,95,56,50,0),String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,95,102,95,54,48,0)], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,99,95,54,50,0),String.fromCharCode(100,101,108,101,103,97,116,101,95,117,95,56,48,0)]]);
          let hoverr = 5;
         videojsr += `${soundL.size ^ 2}`;
         hoverr += hoverr << (Math.min(2, Math.abs(hoverr)));
         soundL = new Map([[`${soundL.size}`, (navigationq == String.fromCharCode(74,0) ? navigationq.length : soundL.size)]]);
      if (videojsr.length < 4) {
         videojsr = "3";
      }
         videojsr += `${(String.fromCharCode(107,0) == navigationq ? navigationq.length : videojsr.length)}`;
          let orientation2 = 1.0;
         videojsr = `${parseInt(`${orientation2}`) * soundL.size}`;
       let heartU = 1.0;
       let logoO = 2.0;
      let containeri = 6583392.0 >= logoO;
      do {
         logoO += videojsr.length;
         if (containeri) {
            break;
         }
      } while (containeri && (videojsr.includes(`${logoO}`)));
         logoO += soundL.size;
         logoO *= navigationq.length;
      fastQ.set(`${bannerB}`, 2 * volume6.length);
      if (minimizeb) {
         break;
      }
   } while (minimizeb && (fastQ.get(`${volume6.length}`) != null));
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {

       let customU = String.fromCharCode(105,110,111,100,101,115,95,120,95,50,49,0);
      for (let q = 0; q < 1; q++) {
         customU += `${customU.length & customU.length}`;
      }
      if (customU != String.fromCharCode(68,0)) {
         customU = `${customU.length | 1}`;
      }
      while (customU.includes(`${customU.length}`)) {
         customU += `${customU.length}`;
         break;
      }
      d_playera += parseFloat(`${2}`);
   if (d_playera == 5.91 || (5.91 + d_playera) == 1.49) {
      d_playera /= Math.max(parseFloat(`${1 - fastQ.size}`), 5);
   }
      bannerB += parseFloat(`${1}`);
      materials = `${parseInt(`${d_playera}`) - 3}`;
   if ((fastQ.size | 3) >= 4 || (d_playera + 5.22) >= 3.45) {
      d_playera /= Math.max(parseFloat(`${fastQ.size}`), 5);
   }
        console.log('Position:', {x, y, width, height, pageX, pageY});
        setRefPosition({x: pageX, y: pageY, width: width, height: height});
      });
    }
  };
  return (
    <>
 
      <View
        style={containerStyle}
        onLayout={() => getPosition()}
        ref={componentRef}>
        <View style={{...styles.timerIndicatorContainer, marginLeft: screenState.isPlayerFullScreen ? 10 : 0}}>
          <Text
            numberOfLines={1}
            style={{...styles.indicatorText, color: '#FFFFFF'}}>
            {timer >= 0 ? `试看${formatTimer(timer)}后结束` : '试看结束'}
          </Text>
          <Divider color="#FFFFFF33" orientation="vertical" width={1} />
          <TouchableOpacity onPress={onClickVip}>
            <Text
              numberOfLines={1}
              style={{...styles.indicatorText, color: '#FAC33D'}}>
              {vipButtonText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={vipGuideModal} transparent={true}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.8)'}}>
        <View
        style={{
          position: 'absolute',
          top: refPosition.y ,
          left: refPosition.x ,
        }}>
        <View style={{...styles.timerIndicatorContainer, marginLeft: screenState.isPlayerFullScreen ? 20 : 0}}>
          <Text
            numberOfLines={1}
            style={{...styles.indicatorText, color: '#FFFFFF'}}>
            {timer >= 0 ? `试看${formatTimer(timer)}后结束` : '试看结束'}
          </Text>
          <Divider color="#FFFFFF33" orientation="vertical" width={1} />
          <TouchableOpacity onPress={onClickVip}>
            <Text
              numberOfLines={1}
              style={{...styles.indicatorText, color: '#FAC33D'}}>
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
