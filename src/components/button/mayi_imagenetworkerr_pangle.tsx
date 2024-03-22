import {useAppDispatch, useAppSelector, useSelector} from '@hooks/mayi_redirect';
import {setIsSportGuideShown} from '@redux/actions/mayi_iconorientation_chatroombackground';
import {Divider} from '@rneui/base';
import {screenModel} from '@type/mayi_libfolly_inouttargetred';
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
import VipGuideModal from '../modal/mayi_profilepic_iconpointscore';
import { mayi_Baseline } from '@redux/reducers/mayi_chatroombackground_unlock';
import {mayi_Gift} from '@models/mayi_libjsinspector';
import { mayi_Libapminsightb } from '@redux/mayi_live_tumbnail';
interface mayi_GoogleViews {
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
}: mayi_GoogleViews) => {
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

  



  const userState = useSelector<mayi_Baseline>('userReducer');
  const isVip = mayi_Gift.isVip(userState.user);
  
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
       let defaultteam7 = String.fromCharCode(117,95,50,48,95,111,112,101,110,115,101,97,0);
    let policyd = String.fromCharCode(121,95,53,49,95,100,105,114,101,99,116,105,111,110,97,108,0);
    let predictionbannerj: Array<any> = [String.fromCharCode(114,97,105,115,101,95,118,95,57,57,0), String.fromCharCode(119,95,55,54,95,114,101,112,111,114,116,0), String.fromCharCode(110,95,52,55,95,97,115,115,101,109,98,108,101,100,0)];
    let inouttargetredH = String.fromCharCode(108,111,116,116,105,101,95,57,95,50,54,0);
    let chatroombackgroundA = String.fromCharCode(111,114,105,103,105,110,115,95,57,95,49,56,0);
    let zhubo5 = String.fromCharCode(112,101,114,115,111,110,95,119,95,57,55,0);
    let ewardedE = 5.0;
    let textY = 5.0;
    let modalv: Map<any, any> = new Map([[String.fromCharCode(100,114,111,112,95,102,95,55,54,0),String.fromCharCode(97,95,56,53,95,105,110,115,105,100,101,0)], [String.fromCharCode(106,95,49,50,0),String.fromCharCode(98,101,116,116,101,114,95,121,95,57,54,0)]]);
    let linkg: Array<any> = [850, 805];
    let stationsP = String.fromCharCode(116,95,53,57,95,108,97,121,101,114,115,0);
   for (let z = 0; z < 1; z++) {
      defaultteam7 = `${3 ^ inouttargetredH.length}`;
   }
      chatroombackgroundA = `${defaultteam7.length}`;
      chatroombackgroundA = `${2 & chatroombackgroundA.length}`;
   while ((zhubo5.length ^ predictionbannerj.length) > 4 || 3 > (zhubo5.length ^ 4)) {
       let showlessL = true;
      while (!showlessL) {
         showlessL = !showlessL;
         break;
      }
         showlessL = !showlessL;
         showlessL = showlessL || showlessL;
      zhubo5 = `${inouttargetredH.length / (Math.max(defaultteam7.length, 6))}`;
      break;
   }
      predictionbannerj.push(chatroombackgroundA.length);
      predictionbannerj.push(3);

    if (componentRef && componentRef.current != null) {

   let downloadedZ = textY <= 6921694.0;
   do {
      textY += parseFloat(`${modalv.size}`);
      if (downloadedZ) {
         break;
      }
   } while ((!inouttargetredH.endsWith(`${textY}`)) && downloadedZ);
      policyd += "2";
   for (let b = 0; b < 1; b++) {
       let eighteen0 = false;
       let launchH = true;
       let libyogaq = true;
          let targetA = String.fromCharCode(98,95,51,56,95,116,97,114,103,101,116,115,0);
          let iconscheduley = false;
         eighteen0 = !launchH && !eighteen0;
         targetA += `${(targetA.length & (iconscheduley ? 5 : 4))}`;
         iconscheduley = targetA.length < 28;
          let vipsporti: Map<any, any> = new Map([[String.fromCharCode(112,97,103,101,99,111,117,110,116,95,52,95,49,56,0),774], [String.fromCharCode(115,116,114,99,109,112,95,114,95,54,56,0),883], [String.fromCharCode(100,97,116,97,116,121,112,101,115,95,105,95,50,57,0),89]]);
          let xvodp = String.fromCharCode(119,95,51,53,95,115,105,122,101,108,101,115,115,0);
         libyogaq = !libyogaq;
         vipsporti.set(`${xvodp}`, vipsporti.size ^ xvodp.length);
      while (launchH) {
         launchH = !libyogaq;
         break;
      }
         launchH = !libyogaq && !launchH;
         eighteen0 = !libyogaq && !launchH;
      if (!launchH) {
         launchH = (!eighteen0 ? libyogaq : !eighteen0);
      }
          let stylesb: Array<any> = [180, 106];
          let renderh = true;
         launchH = !eighteen0;
         stylesb = [stylesb.length / (Math.max(1, 6))];
         renderh = (71 == (stylesb.length - (!renderh ? stylesb.length : 71)));
         libyogaq = (!libyogaq ? !launchH : !libyogaq);
      if (launchH) {
         launchH = libyogaq;
      }
      inouttargetredH += `${3 & predictionbannerj.length}`;
   }
      chatroombackgroundA = `${chatroombackgroundA.length / 1}`;
       let iconx = 0.0;
         iconx *= parseFloat(`${parseInt(`${iconx}`) | 1}`);
      while (2.35 < (1 / (Math.max(1, iconx)))) {
         iconx -= parseFloat(`${parseInt(`${iconx}`)}`);
         break;
      }
      while (iconx == 5.45) {
         iconx -= parseFloat(`${parseInt(`${iconx}`) * parseInt(`${iconx}`)}`);
         break;
      }
      textY += parseFloat(`${linkg.length}`);
      defaultteam7 += `${zhubo5.length | parseInt(`${ewardedE}`)}`;
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {

   if (policyd.endsWith(`${defaultteam7.length}`)) {
       let leaguee = String.fromCharCode(106,95,57,49,95,98,117,114,110,0);
       let preview2 = String.fromCharCode(99,111,110,110,101,99,116,95,107,95,51,55,0);
         preview2 = `${preview2.length % 3}`;
      let coreG = 5196373 >= leaguee.length;
      do {
          let clubn = 5.0;
          let stylesn: Array<any> = [String.fromCharCode(110,95,53,52,95,109,101,115,115,97,103,105,110,103,0), String.fromCharCode(118,101,99,115,95,118,95,53,49,0), String.fromCharCode(117,95,54,50,95,97,117,116,111,114,111,116,97,116,101,0)];
         leaguee = `${stylesn.length}`;
         clubn -= parseInt(`${clubn}`) ^ 1;
         stylesn.push(parseInt(`${clubn}`));
         if (coreG) {
            break;
         }
      } while (coreG && (preview2 != String.fromCharCode(65,0)));
          let placeholdern = 0;
          let textE = String.fromCharCode(118,95,49,48,48,95,117,118,104,111,114,105,122,111,110,116,97,108,0);
          let pointA = true;
         preview2 += `${leaguee.length}`;
         placeholdern %= Math.max(textE.length, 2);
         textE += `${(String.fromCharCode(77,0) == textE ? textE.length : placeholdern)}`;
         pointA = textE.startsWith(`${placeholdern}`);
      if (4 > preview2.length) {
         leaguee += `${preview2.length}`;
      }
      if (leaguee == preview2) {
         preview2 += `${leaguee.length}`;
      }
       let modalD: Array<any> = [134, 523];
      policyd += `${preview2.length - leaguee.length}`;
   }
   let traminiD = 6205958 <= zhubo5.length;
   do {
      zhubo5 = `${(String.fromCharCode(98,0) == chatroombackgroundA ? chatroombackgroundA.length : zhubo5.length)}`;
      if (traminiD) {
         break;
      }
   } while (traminiD && (chatroombackgroundA.length >= 5));
       let telemetry1: Map<any, any> = new Map([[String.fromCharCode(99,111,110,97,110,102,105,108,101,95,54,95,53,56,0),796], [String.fromCharCode(109,95,53,56,95,116,119,105,100,100,108,101,115,0),777], [String.fromCharCode(114,101,118,97,108,105,100,97,116,101,95,51,95,57,50,0),476]]);
       let listL = 3.0;
       let z_centerL: Array<any> = [979, 587];
      for (let s = 0; s < 1; s++) {
         telemetry1.set(`${listL}`, parseInt(`${listL}`) ^ z_centerL.length);
      }
      while (3.30 == (listL * telemetry1.size) || 1 == (5 + telemetry1.size)) {
          let orientationt = String.fromCharCode(104,95,50,54,95,109,97,116,99,104,105,110,102,111,0);
          let emojiheartl = String.fromCharCode(105,95,56,50,95,115,105,100,120,0);
          let trophy0: Array<any> = [418, 588, 851];
          let iconarrowrightw = false;
         telemetry1 = new Map([[emojiheartl, (emojiheartl == String.fromCharCode(66,0) ? emojiheartl.length : parseInt(`${listL}`))]]);
         orientationt += `${((iconarrowrightw ? 1 : 3) & 1)}`;
         trophy0.push(orientationt.length);
         iconarrowrightw = !iconarrowrightw && orientationt.length == 69;
         break;
      }
       let libsentryc = 1;
       let yellowscoreballl: Map<any, any> = new Map([[String.fromCharCode(97,95,50,50,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0),109], [String.fromCharCode(97,120,112,95,98,95,56,54,0),810], [String.fromCharCode(115,99,97,108,97,114,112,114,111,100,117,99,116,95,53,95,51,0),48]]);
      while (4 > (libsentryc >> (Math.min(Math.abs(4), 2)))) {
         libsentryc *= 2 / (Math.max(9, telemetry1.size));
         break;
      }
      textY += (parseFloat(`${String.fromCharCode(71,0) == zhubo5 ? defaultteam7.length : zhubo5.length}`));
      ewardedE += parseFloat(`${inouttargetredH.length}`);
       let vietnamr = false;
       let source8 = String.fromCharCode(103,95,51,55,95,98,105,116,97,108,108,111,99,0);
       let inouttargetredq = 1;
       let thumbnailM = 5;
      let invite8 = inouttargetredq <= 6892332;
      do {
         inouttargetredq >>= Math.min(Math.abs(inouttargetredq), 5);
         if (invite8) {
            break;
         }
      } while ((source8.length >= inouttargetredq) && invite8);
         inouttargetredq *= 2 * source8.length;
         thumbnailM <<= Math.min(Math.abs(3), 3);
         inouttargetredq %= Math.max(source8.length >> (Math.min(5, Math.abs(thumbnailM))), 3);
       let leakcheckerB = 3.0;
      defaultteam7 += `${1 - parseInt(`${ewardedE}`)}`;
      vietnamr = !vietnamr;
   if ((parseInt(`${textY}`) * defaultteam7.length) < 2 || (defaultteam7.length * parseInt(`${textY}`)) < 2) {
      defaultteam7 += `${defaultteam7.length}`;
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
