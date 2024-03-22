import {useAppDispatch, useAppSelector, useSelector} from '@hooks/kg_index';
import {setIsSportGuideShown} from '@redux/actions/a_switch';
import {Divider} from '@rneui/base';
import {screenModel} from '@type/nb_shared_target';
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
import VipGuideModal from '../modal/n_header_membership';
import { HDTGesturesList } from '@redux/reducers/f_gmail';
import {KWConstants} from '@models/kl_sheet';
import { PSmall } from '@redux/fj_prediction_thailand';
interface XFillButton {
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
}: XFillButton) => {
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

  



  const userState = useSelector<HDTGesturesList>('userReducer');
  const isVip = KWConstants.isVip(userState.user);
  
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
       let buttonV = 1.0;
    let questm = String.fromCharCode(97,99,100,99,0);
    let routerR = String.fromCharCode(105,119,104,116,0);
    let taiwanM: Array<any> = [424, 691, 641];
    let delegate_m23 = String.fromCharCode(114,101,99,101,105,118,101,114,115,0);
    let reducer2 = 1.0;
    let dialog1 = 1.0;
      routerR = `${3 ^ delegate_m23.length}`;
      taiwanM = [(questm == String.fromCharCode(112,0) ? taiwanM.length : questm.length)];
   if ((reducer2 / (Math.max(1, buttonV))) >= 1.85) {
       let brightnessD = 5;
       let dropdownk = String.fromCharCode(105,110,116,114,110,108,95,98,95,54,48,0);
       let circle0: Array<any> = [String.fromCharCode(100,100,114,97,110,103,101,0), String.fromCharCode(116,101,115,116,99,108,101,97,110,0)];
      let pointZ = circle0.length >= 5302618;
      do {
         circle0.push(brightnessD);
         if (pointZ) {
            break;
         }
      } while (pointZ && (circle0.length <= dropdownk.length));
          let pointY = String.fromCharCode(120,103,97,115,0);
         dropdownk += "2";
         pointY += `${pointY.length << (Math.min(Math.abs(2), 1))}`;
         circle0.push(circle0.length);
      for (let v = 0; v < 3; v++) {
          let redirect2 = 0.0;
          let tempn = String.fromCharCode(111,119,110,101,114,115,0);
         dropdownk = "1";
         redirect2 -= parseFloat(`${parseInt(`${redirect2}`) - tempn.length}`);
         tempn = `${2 + tempn.length}`;
      }
       let buttont = String.fromCharCode(115,101,110,100,97,108,108,0);
       let tickedn = String.fromCharCode(105,115,102,105,110,105,116,101,95,54,95,49,48,48,0);
      let firebasew = buttont == String.fromCharCode(107,55,106,118,103,53,103,56,110,0);
      do {
         buttont += "3";
         if (firebasew) {
            break;
         }
      } while (firebasew && (tickedn != buttont));
      for (let y = 0; y < 3; y++) {
         circle0.push((String.fromCharCode(82,0) == buttont ? buttont.length : brightnessD));
      }
      let background3 = 5277829 >= circle0.length;
      do {
         circle0.push(3);
         if (background3) {
            break;
         }
      } while ((dropdownk.length < circle0.length) && background3);
       let statisticsd = 1;
      buttonV += parseFloat(`${circle0.length}`);
   }
   while ((routerR.length / 2) >= 3 || 2 >= (2 - routerR.length)) {
      dialog1 -= parseInt(`${reducer2}`);
      break;
   }
      dialog1 -= parseInt(`${buttonV}`);

    if (componentRef && componentRef.current != null) {

      taiwanM = [2];
   for (let z = 0; z < 2; z++) {
      questm += `${taiwanM.length % 3}`;
   }
   if (!delegate_m23.endsWith(`${taiwanM.length}`)) {
      delegate_m23 += `${parseInt(`${reducer2}`)}`;
   }
   if (taiwanM.length <= 3) {
      delegate_m23 = `${1 ^ taiwanM.length}`;
   }
       let modalY = 2.0;
       let privacya = String.fromCharCode(116,104,114,109,97,116,0);
       let commone = String.fromCharCode(115,99,104,101,100,117,108,101,0);
          let gemfileX = String.fromCharCode(105,100,99,116,99,111,108,0);
          let tempI = String.fromCharCode(103,109,97,116,99,104,0);
          let favoriteg = 4.0;
         privacya += `${parseInt(`${modalY}`) >> (Math.min(commone.length, 1))}`;
         gemfileX = `${gemfileX.length}`;
         tempI += `${gemfileX.length & 2}`;
         favoriteg /= Math.max(parseFloat(`${3 & parseInt(`${favoriteg}`)}`), 5);
       let closes: Array<any> = [String.fromCharCode(116,120,104,97,115,104,0), String.fromCharCode(105,102,111,114,119,97,114,100,0), String.fromCharCode(100,108,105,115,116,0)];
       let closeU: Array<any> = [847, 876];
      while (2.93 >= (modalY + 4.68) && 4 >= (commone.length + parseInt(`${modalY}`))) {
          let dropdownM: Array<any> = [662, 468];
          let appleh: Array<any> = [711, 831, 119];
          let select0 = 5.0;
          let rightK = false;
          let photou = String.fromCharCode(115,108,111,116,0);
         modalY += (parseFloat(`${String.fromCharCode(79,0) == commone ? closes.length : commone.length}`));
         dropdownM.push((String.fromCharCode(82,0) == photou ? photou.length : appleh.length));
         appleh = [appleh.length / (Math.max(3, dropdownM.length))];
         select0 /= Math.max(3, 3);
         rightK = appleh.includes(rightK);
         break;
      }
          let placeholderM = String.fromCharCode(100,99,116,101,108,101,109,0);
         commone += `${closes.length << (Math.min(commone.length, 5))}`;
         placeholderM += `${(String.fromCharCode(116,0) == placeholderM ? placeholderM.length : placeholderM.length)}`;
          let volumeZ: Map<any, any> = new Map([[String.fromCharCode(115,105,110,113,98,95,114,95,49,0),95], [String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,0),373]]);
         privacya += `${closes.length / (Math.max(5, parseInt(`${modalY}`)))}`;
         volumeZ.set(`${volumeZ.size}`, volumeZ.size << (Math.min(Math.abs(2), 3)));
      if (commone.length == privacya.length) {
         commone += `${parseInt(`${modalY}`) & 1}`;
      }
       let historym = 3.0;
       let twitterF = true;
       let xcopy_tX = false;
       let becomeI = 5.0;
      dialog1 /= Math.max(parseInt(`${reducer2}`), 1);
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {

   while (!routerR.startsWith(`${taiwanM.length}`)) {
       let unselected7 = 0.0;
       let modalN: Array<any> = [264, 715];
       let trashK = 2;
       let submit8 = String.fromCharCode(108,105,110,107,105,110,103,0);
      for (let m = 0; m < 1; m++) {
          let pingx = 0;
         modalN = [1];
         pingx ^= pingx | pingx;
      }
      let matchesm = 6940483 >= trashK;
      do {
         trashK -= (String.fromCharCode(104,0) == submit8 ? submit8.length : trashK);
         if (matchesm) {
            break;
         }
      } while (matchesm && ((trashK * modalN.length) >= 3 && 1 >= (3 * modalN.length)));
         modalN.push(modalN.length / 1);
       let selection8: Map<any, any> = new Map([[String.fromCharCode(101,102,102,101,99,105,116,118,101,108,121,0),473], [String.fromCharCode(120,95,49,56,0),275], [String.fromCharCode(102,105,108,101,110,97,109,101,0),866]]);
       let membershipj: Map<any, any> = new Map([[String.fromCharCode(105,100,99,116,100,115,112,0),539], [String.fromCharCode(116,97,108,108,95,53,95,57,57,0),523], [String.fromCharCode(100,101,115,114,111,121,0),299]]);
      if (modalN.length >= 5) {
          let infol = String.fromCharCode(98,121,116,101,115,104,117,109,97,110,0);
          let rulesW = 3.0;
          let ticke = 2.0;
         modalN.push(submit8.length);
         infol += `${1 ^ parseInt(`${ticke}`)}`;
         rulesW *= parseFloat(`${infol.length}`);
         ticke -= (parseFloat(`${String.fromCharCode(68,0) == infol ? infol.length : parseInt(`${rulesW}`)}`));
      }
      while ((membershipj.size - unselected7) <= 5.77) {
         membershipj = new Map([[`${selection8.size}`, membershipj.size]]);
         break;
      }
          let fastc: Map<any, any> = new Map([[String.fromCharCode(114,97,119,100,101,99,0),true ], [String.fromCharCode(117,110,105,113,117,101,100,0),true ], [String.fromCharCode(118,97,108,117,101,0),false ]]);
          let sounde = false;
         modalN.push(1 / (Math.max(4, selection8.size)));
         fastc.set(`${fastc.size}`, fastc.size);
         sounde = (fastc.size ^ fastc.size) <= 70;
      let moduleV = submit8 == String.fromCharCode(112,116,118,102,113,101,0);
      do {
         submit8 = `${trashK}`;
         if (moduleV) {
            break;
         }
      } while ((2 >= (submit8.length % (Math.max(9, membershipj.size)))) && moduleV);
      for (let q = 0; q < 2; q++) {
          let h_playerP: Array<any> = [713, 654];
          let minivodt = 4.0;
         selection8.set(`${trashK}`, 2 * trashK);
         h_playerP = [h_playerP.length];
         minivodt *= h_playerP.length - parseInt(`${minivodt}`);
      }
      for (let h = 0; h < 2; h++) {
          let signinupl: Map<any, any> = new Map([[String.fromCharCode(115,108,105,99,101,0),707], [String.fromCharCode(109,97,116,99,104,101,114,0),183], [String.fromCharCode(110,111,110,113,117,111,116,101,100,0),501]]);
          let k_titlen = String.fromCharCode(117,110,112,97,99,107,0);
         selection8 = new Map([[`${modalN.length}`, modalN.length | 2]]);
         signinupl = new Map([[`${signinupl.size}`, 3]]);
         k_titlen = `${signinupl.size - k_titlen.length}`;
      }
      for (let u = 0; u < 1; u++) {
         modalN.push(selection8.size);
      }
         modalN = [2 ^ trashK];
      routerR = "3";
      break;
   }
   while (!delegate_m23.includes(`${taiwanM.length}`)) {
      taiwanM = [3];
      break;
   }
   while (!delegate_m23.includes(`${taiwanM.length}`)) {
      delegate_m23 += `${1 & parseInt(`${buttonV}`)}`;
      break;
   }
   if (buttonV > parseFloat(`${questm.length}`)) {
      buttonV *= parseFloat(`${questm.length}`);
   }
   while (1.44 <= (buttonV - parseFloat(`${questm.length}`))) {
       let floaterd = String.fromCharCode(114,101,99,111,114,100,101,114,0);
       let headerB = false;
       let stringd = String.fromCharCode(103,114,105,100,0);
       let trashB = String.fromCharCode(101,112,115,118,0);
          let delegate_nu = String.fromCharCode(108,105,98,97,118,102,111,114,109,97,116,0);
         headerB = String.fromCharCode(110,0) == floaterd;
         delegate_nu = `${delegate_nu.length}`;
         floaterd += `${stringd.length}`;
         floaterd += `${(trashB == String.fromCharCode(119,0) ? trashB.length : stringd.length)}`;
       let selectedp = String.fromCharCode(110,101,116,105,115,114,0);
       let container3 = String.fromCharCode(115,117,114,101,0);
      let fullq = String.fromCharCode(112,118,121,101,98,112,57,107,56,0) == trashB;
      do {
         trashB = `${((headerB ? 5 : 5))}`;
         if (fullq) {
            break;
         }
      } while ((5 >= trashB.length) && fullq);
      for (let q = 0; q < 1; q++) {
          let switch_wg = String.fromCharCode(99,95,57,53,95,105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,0);
          let ewardedu = true;
          let progress3 = String.fromCharCode(102,114,101,111,112,101,110,0);
         floaterd = `${2 ^ stringd.length}`;
         switch_wg = `${switch_wg.length << (Math.min(Math.abs(3), 3))}`;
         ewardedu = !switch_wg.includes(`${ewardedu}`);
         progress3 += `${switch_wg.length << (Math.min(Math.abs(2), 4))}`;
      }
       let becomeT = String.fromCharCode(100,95,50,53,95,110,117,109,101,114,105,102,121,0);
         container3 = `${((headerB ? 5 : 1) << (Math.min(Math.abs(3), 4)))}`;
      if (trashB != becomeT) {
          let j_lockS = String.fromCharCode(119,104,101,116,104,101,114,0);
         becomeT = `${becomeT.length - 1}`;
         j_lockS += `${(j_lockS == String.fromCharCode(122,0) ? j_lockS.length : j_lockS.length)}`;
      }
      let recommendationk = String.fromCharCode(97,56,49,115,113,115,98,114,105,54,0) == becomeT;
      do {
         becomeT = `${selectedp.length - 3}`;
         if (recommendationk) {
            break;
         }
      } while (recommendationk && (trashB == becomeT));
      let large8 = 7954976 >= container3.length;
      do {
         container3 += `${((headerB ? 2 : 2))}`;
         if (large8) {
            break;
         }
      } while (large8 && (2 == container3.length));
         stringd = `${trashB.length}`;
      questm = `${((headerB ? 1 : 1) - parseInt(`${dialog1}`))}`;
      break;
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
