import { useAppDispatch, useAppSelector, useSelector } from '@hooks/wawa_root';
import { setIsSportGuideShown } from '@redux/actions/wawa_related';
import { Divider } from '@rneui/base';
import { screenModel } from '@type/wawa_rules';
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
import VipGuideModal from '../modal/wawa_iconpipshrink';
import { wawaPhoneControls } from '@redux/reducers/wawa_umeng';
import { wawaLibglog } from '@models/wawa_refreshborderless_found';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';
interface wawaAwayShow {
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
}: wawaAwayShow) => {
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





  const userState = useSelector<wawaPhoneControls>('userReducer');
  const isVip = wawaLibglog.fakeIsVip(userState.user);

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
       let backwhiteh = 5.0;
    let matchdetailbgg = String.fromCharCode(111,95,51,95,99,111,110,103,0);
    let philippinesL = String.fromCharCode(107,95,57,48,95,116,104,114,101,97,100,0);
    let shootnogoalk = 1.0;
    let teamdetailsbgQ = String.fromCharCode(101,95,54,49,95,101,120,112,111,110,101,110,116,115,0);
    let chatroombackgroundC = 3;
    let libzeusT = String.fromCharCode(99,97,110,111,110,105,99,97,108,95,55,95,54,48,0);
    let moduleT = false;
   for (let h = 0; h < 2; h++) {
      libzeusT = `${philippinesL.length << (Math.min(3, libzeusT.length))}`;
   }
   if ((2.38 + backwhiteh) > 4.52) {
      teamdetailsbgQ += `${libzeusT.length}`;
   }
   let carouselg = String.fromCharCode(57,120,54,114,101,120,55,108,117,57,0) == teamdetailsbgQ;
   do {
      teamdetailsbgQ += `${1 % (Math.max(10, philippinesL.length))}`;
      if (carouselg) {
         break;
      }
   } while (carouselg && ((1 & teamdetailsbgQ.length) < 1 && (teamdetailsbgQ.length & 1) < 4));
   for (let s = 0; s < 3; s++) {
       let statisticsinactiveB: Array<any> = [893, 570];
       let turndownI = String.fromCharCode(104,95,52,50,95,108,101,110,103,116,104,115,0);
       let logoutJ = String.fromCharCode(102,95,56,50,95,118,108,98,117,102,0);
          let issub9 = 4;
          let homeloadingA = String.fromCharCode(112,114,101,100,105,99,116,120,95,104,95,55,57,0);
          let wifirouterT = true;
         turndownI = `${issub9}`;
         issub9 *= homeloadingA.length;
         homeloadingA = `${homeloadingA.length & 2}`;
      if (turndownI == logoutJ) {
          let mutedC = false;
          let sharewhitet = 3.0;
         logoutJ = `${turndownI.length}`;
         mutedC = sharewhitet >= 2.49;
         sharewhitet -= (parseFloat(`${(mutedC ? 2 : 4) << (Math.min(Math.abs(parseInt(`${sharewhitet}`)), 3))}`));
      }
          let userE = String.fromCharCode(101,95,56,50,0);
         logoutJ += `${turndownI.length & statisticsinactiveB.length}`;
         userE += `${1 - userE.length}`;
         statisticsinactiveB.push(turndownI.length << (Math.min(3, statisticsinactiveB.length)));
         turndownI += `${3 << (Math.min(1, turndownI.length))}`;
         statisticsinactiveB.push(statisticsinactiveB.length + 2);
         turndownI = `${turndownI.length}`;
      for (let j = 0; j < 3; j++) {
         logoutJ = `${logoutJ.length - statisticsinactiveB.length}`;
      }
          let defaultpredictionprofilex: Map<any, any> = new Map([[String.fromCharCode(118,105,100,101,111,95,106,95,55,53,0),720], [String.fromCharCode(122,95,53,0),938], [String.fromCharCode(114,105,110,100,101,120,95,50,95,51,57,0),648]]);
          let gradle7 = 0.0;
         logoutJ = `${logoutJ.length - 2}`;
         defaultpredictionprofilex = new Map([[`${defaultpredictionprofilex.size}`, defaultpredictionprofilex.size - 2]]);
         gradle7 -= parseFloat(`${parseInt(`${gradle7}`)}`);
      libzeusT = `${parseInt(`${shootnogoalk}`)}`;
   }
   let whiteanimationlivea = philippinesL == String.fromCharCode(110,121,56,52,120,119,52,99,110,0);
   do {
      philippinesL = `${libzeusT.length}`;
      if (whiteanimationlivea) {
         break;
      }
   } while (whiteanimationlivea && (philippinesL.length < 3));

    if (componentRef && componentRef.current != null) {

   while (!philippinesL.endsWith(teamdetailsbgQ)) {
      philippinesL += `${matchdetailbgg.length >> (Math.min(1, philippinesL.length))}`;
      break;
   }
   if (matchdetailbgg == teamdetailsbgQ) {
      teamdetailsbgQ += `${(matchdetailbgg == String.fromCharCode(71,0) ? matchdetailbgg.length : chatroombackgroundC)}`;
   }
      shootnogoalk /= Math.max(3, 1);
   while (teamdetailsbgQ.endsWith(philippinesL)) {
      philippinesL = `${chatroombackgroundC & 1}`;
      break;
   }
   for (let c = 0; c < 3; c++) {
       let iconclosewhitebgT = false;
       let emojiO: Map<any, any> = new Map([[String.fromCharCode(115,105,116,101,95,104,95,49,55,0),667], [String.fromCharCode(103,95,56,49,95,97,105,102,102,0),280]]);
       let completeM = String.fromCharCode(102,95,53,51,95,115,101,101,110,0);
       let modeB = String.fromCharCode(115,111,117,110,100,115,95,110,95,53,0);
       let attributedstringM: Array<any> = [569, 432, 283];
      let libmapbufferjnio = 8491749 >= emojiO.size;
      do {
          let singleP = 4.0;
          let cornerd = String.fromCharCode(106,95,56,48,95,115,116,114,101,116,99,104,97,98,108,101,0);
          let vipsporth = 2.0;
         emojiO.set(cornerd, 3 | parseInt(`${singleP}`));
         singleP += parseInt(`${vipsporth}`);
         cornerd = `${parseInt(`${vipsporth}`)}`;
         if (libmapbufferjnio) {
            break;
         }
      } while ((emojiO.size > 1) && libmapbufferjnio);
      while (completeM.length > modeB.length) {
          let penaltygoalT = 0.0;
          let foregrounds = 5.0;
          let icontransferclubL = String.fromCharCode(97,108,112,110,95,52,95,57,53,0);
         modeB = `${modeB.length}`;
         penaltygoalT += 3;
         foregrounds /= Math.max(3, 3);
         icontransferclubL = `${icontransferclubL.length ^ 2}`;
         break;
      }
      while (completeM.length <= 4 && !iconclosewhitebgT) {
          let utilsF = 5;
         iconclosewhitebgT = completeM.length <= 41;
         utilsF >>= Math.min(2, Math.abs(3 + utilsF));
         break;
      }
      let malaysiaz = modeB.length <= 9158381;
      do {
         modeB = `${attributedstringM.length}`;
         if (malaysiaz) {
            break;
         }
      } while ((!modeB.startsWith(`${iconclosewhitebgT}`)) && malaysiaz);
      for (let f = 0; f < 1; f++) {
          let lightw = 2.0;
         completeM = `${(modeB == String.fromCharCode(113,0) ? modeB.length : attributedstringM.length)}`;
         lightw /= Math.max(4, parseFloat(`${parseInt(`${lightw}`) + parseInt(`${lightw}`)}`));
      }
          let mutedD = true;
         completeM = "2";
         mutedD = (mutedD ? mutedD : mutedD);
      while (3 < (modeB.length & 3) && 2 < (modeB.length & 3)) {
         attributedstringM.push(1 + emojiO.size);
         break;
      }
         emojiO.set(`${iconclosewhitebgT}`, 2 * modeB.length);
       let modeQ = String.fromCharCode(97,100,100,105,116,105,111,110,97,108,95,53,95,51,55,0);
       let graphicsw = String.fromCharCode(106,95,49,52,95,100,105,116,104,101,114,0);
      if (emojiO.get(`${attributedstringM.length}`) != null) {
          let filledW = String.fromCharCode(108,111,111,107,117,112,95,121,95,49,48,48,0);
          let redscoreball2: Map<any, any> = new Map([[String.fromCharCode(105,110,99,108,117,100,101,100,95,100,95,54,49,0),711], [String.fromCharCode(109,101,100,105,117,109,116,104,114,101,115,104,95,103,95,54,56,0),368]]);
         emojiO = new Map([[`${attributedstringM.length}`, attributedstringM.length + 1]]);
         filledW += `${filledW.length}`;
         redscoreball2.set(filledW, (filledW == String.fromCharCode(77,0) ? redscoreball2.size : filledW.length));
      }
         modeB += `${2 % (Math.max(3, modeQ.length))}`;
      while (5 == completeM.length && graphicsw == String.fromCharCode(85,0)) {
          let filledw = 5.0;
         graphicsw = "1";
         filledw *= parseInt(`${filledw}`);
         break;
      }
      for (let g = 0; g < 2; g++) {
          let commentX: Array<any> = [832, 228, 82];
         graphicsw = `${(String.fromCharCode(87,0) == graphicsw ? graphicsw.length : attributedstringM.length)}`;
         commentX = [commentX.length];
      }
      for (let x = 0; x < 2; x++) {
         iconclosewhitebgT = completeM.length <= 87;
      }
         modeQ += `${(String.fromCharCode(57,0) == completeM ? attributedstringM.length : completeM.length)}`;
      shootnogoalk /= Math.max(1, (completeM == String.fromCharCode(51,0) ? completeM.length : parseInt(`${shootnogoalk}`)));
   }
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {

   for (let x = 0; x < 1; x++) {
      backwhiteh += libzeusT.length & teamdetailsbgQ.length;
   }
   if ((philippinesL.length + shootnogoalk) > 4.79 && 4.79 > (philippinesL.length + shootnogoalk)) {
       let successr = 2;
       let eventg: Map<any, any> = new Map([[String.fromCharCode(98,114,101,110,100,101,114,95,119,95,48,0),true ], [String.fromCharCode(114,97,105,116,95,106,95,55,49,0),true ]]);
       let detailY: Map<any, any> = new Map([[String.fromCharCode(113,95,50,55,95,100,114,111,112,0),String.fromCharCode(111,95,53,55,95,100,105,103,101,115,116,98,121,110,97,109,101,0)], [String.fromCharCode(115,95,53,53,0),String.fromCharCode(121,95,57,50,95,112,97,99,107,101,116,101,100,0)], [String.fromCharCode(106,95,55,0),String.fromCharCode(116,104,101,114,101,95,57,95,56,54,0)]]);
      while (1 <= (detailY.size % (Math.max(3, eventg.size))) && (1 % (Math.max(5, eventg.size))) <= 3) {
         detailY.set(`${successr}`, successr - eventg.size);
         break;
      }
          let review0 = String.fromCharCode(114,95,53,54,95,112,111,115,116,112,114,111,99,114,101,115,0);
          let nodem = false;
         successr &= successr + 3;
         review0 += `${(review0.length ^ (nodem ? 1 : 3))}`;
         nodem = !nodem;
      for (let p = 0; p < 3; p++) {
          let whitetickf: Map<any, any> = new Map([[String.fromCharCode(112,105,101,95,108,95,55,48,0),true ], [String.fromCharCode(103,95,51,49,95,115,104,111,117,108,100,0),true ]]);
          let borderlessh = String.fromCharCode(117,95,55,48,95,114,101,115,111,117,114,99,101,115,0);
          let componentV = String.fromCharCode(111,95,56,48,95,118,105,115,117,97,108,0);
          let long_3pZ = 4.0;
         successr *= (String.fromCharCode(87,0) == componentV ? parseInt(`${long_3pZ}`) : componentV.length);
         whitetickf.set(borderlessh, borderlessh.length & 2);
         long_3pZ *= (borderlessh == String.fromCharCode(75,0) ? borderlessh.length : whitetickf.size);
      }
          let target2: Array<any> = [260, 176, 587];
          let iconmegaphonep: Array<any> = [905, 960, 439];
         detailY = new Map([[`${detailY.size}`, 2]]);
         target2 = [target2.length];
         iconmegaphonep.push(target2.length >> (Math.min(Math.abs(2), 4)));
          let arrowrightwithtailF: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,112,95,53,48,0),true ], [String.fromCharCode(113,95,54,48,95,101,100,105,116,97,98,108,101,0),false ], [String.fromCharCode(99,111,114,114,101,99,116,95,50,95,49,52,0),false ]]);
          let filedm = 0.0;
          let basketballplayerplaceholdery = String.fromCharCode(118,95,49,54,95,97,109,114,119,98,100,101,99,0);
         eventg.set(`${filedm}`, 1);
         arrowrightwithtailF.set(basketballplayerplaceholdery, basketballplayerplaceholdery.length | 3);
         filedm /= Math.max(2, arrowrightwithtailF.size);
      while (eventg.get(`${successr}`) != null) {
         eventg.set(`${detailY.size}`, detailY.size ^ eventg.size);
         break;
      }
          let libglogS: Map<any, any> = new Map([[String.fromCharCode(114,101,118,105,101,119,95,102,95,53,48,0),String.fromCharCode(120,99,98,103,114,97,98,95,51,95,49,55,0)], [String.fromCharCode(107,95,52,56,95,104,101,97,100,112,104,111,110,101,115,0),String.fromCharCode(97,95,56,48,0)], [String.fromCharCode(112,97,112,101,114,95,52,95,52,0),String.fromCharCode(98,95,54,50,95,99,101,108,102,0)]]);
          let promotion9: Array<any> = [660, 188, 667];
         detailY.set(`${successr}`, 2 % (Math.max(10, detailY.size)));
         libglogS = new Map([[`${libglogS.size}`, promotion9.length]]);
         promotion9 = [libglogS.size];
      while (Array.from(detailY.keys()).includes(`${eventg.size}`)) {
         detailY = new Map([[`${eventg.size}`, successr / (Math.max(eventg.size, 4))]]);
         break;
      }
      for (let r = 0; r < 3; r++) {
          let stringsT = String.fromCharCode(113,95,51,51,95,116,114,97,99,101,114,0);
          let mbridgeJ = String.fromCharCode(104,95,53,51,95,97,100,100,109,111,100,0);
          let pointj: Array<any> = [794, 594];
          let thumbnailg: Array<any> = [962, 377, 103];
          let termsB = String.fromCharCode(122,95,54,95,112,97,115,116,101,0);
         eventg.set(`${stringsT}`, (String.fromCharCode(69,0) == stringsT ? stringsT.length : detailY.size));
         mbridgeJ = `${2 * termsB.length}`;
         pointj.push(termsB.length);
         thumbnailg.push(pointj.length);
      }
      shootnogoalk /= Math.max(2 | parseInt(`${backwhiteh}`), 4);
   }
   let playershirt3 = matchdetailbgg.length >= 5063443;
   do {
      matchdetailbgg += `${matchdetailbgg.length << (Math.min(philippinesL.length, 4))}`;
      if (playershirt3) {
         break;
      }
   } while (playershirt3 && (teamdetailsbgQ != matchdetailbgg));
       let buffer5 = true;
      while (buffer5) {
          let taiwanw = 3;
         buffer5 = 32 == taiwanw;
         break;
      }
       let imagewatchlive6 = 4.0;
       let const_nP = 2.0;
       let reducera = String.fromCharCode(100,97,109,112,95,112,95,54,48,0);
       let homeloadingj = String.fromCharCode(108,95,50,56,95,114,101,115,105,103,110,105,110,103,0);
      matchdetailbgg = `${((moduleT ? 1 : 3) % 1)}`;
       let vignettek: Map<any, any> = new Map([[String.fromCharCode(101,118,100,110,115,95,103,95,53,50,0),String.fromCharCode(102,111,114,103,111,116,95,49,95,51,49,0)], [String.fromCharCode(121,95,55,54,95,117,110,102,114,101,101,122,101,0),String.fromCharCode(109,111,100,101,99,111,115,116,115,95,48,95,56,52,0)]]);
       let umengh = 0.0;
       let humidity2 = 1.0;
         umengh += parseFloat(`${parseInt(`${umengh}`)}`);
       let iconsharefriends3: Map<any, any> = new Map([[String.fromCharCode(99,95,56,57,95,99,104,97,112,116,101,114,0),621], [String.fromCharCode(98,95,49,95,100,101,115,105,114,101,100,0),148], [String.fromCharCode(111,112,101,110,103,108,95,55,95,52,51,0),420]]);
       let libimagepipelineE: Map<any, any> = new Map([[String.fromCharCode(111,95,52,53,95,116,114,97,105,108,105,110,103,0),false ], [String.fromCharCode(117,112,103,114,97,100,101,115,95,57,95,51,52,0),false ]]);
      for (let z = 0; z < 3; z++) {
          let signinupH: Array<any> = [456, 41];
          let iconschedule4 = 2.0;
          let baselineD: Array<any> = [233, 67];
          let libturbomodulejsijniu = String.fromCharCode(100,111,110,97,116,101,95,48,95,52,48,0);
         iconsharefriends3 = new Map([[`${libimagepipelineE.size}`, signinupH.length >> (Math.min(Math.abs(1), 3))]]);
         signinupH.push(parseInt(`${iconschedule4}`) >> (Math.min(Math.abs(3), 3)));
         iconschedule4 -= parseFloat(`${baselineD.length - parseInt(`${iconschedule4}`)}`);
         baselineD = [parseInt(`${iconschedule4}`)];
         libturbomodulejsijniu = "2";
      }
         libimagepipelineE = new Map([[`${libimagepipelineE.size}`, iconsharefriends3.size]]);
          let reactnavigation_ = true;
          let countdownD = String.fromCharCode(111,112,101,114,97,116,111,114,115,95,114,95,49,48,0);
         umengh *= parseFloat(`${countdownD.length}`);
          let iconpointscoreS = false;
         libimagepipelineE = new Map([[`${libimagepipelineE.size}`, (libimagepipelineE.size * (iconpointscoreS ? 2 : 4))]]);
      if (4 > (vignettek.size >> (Math.min(Math.abs(libimagepipelineE.size), 4))) && (4 >> (Math.min(2, Math.abs(vignettek.size)))) > 3) {
         libimagepipelineE = new Map([[`${iconsharefriends3.size}`, libimagepipelineE.size + 1]]);
      }
      if (humidity2 == vignettek.size) {
         vignettek.set(`${humidity2}`, 2 * vignettek.size);
      }
       let networkh = String.fromCharCode(105,95,49,48,95,99,111,112,121,99,111,111,107,101,114,0);
       let homeactivet = String.fromCharCode(106,95,57,52,95,112,114,101,118,105,111,117,115,0);
      teamdetailsbgQ += `${parseInt(`${shootnogoalk}`) / 3}`;
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
