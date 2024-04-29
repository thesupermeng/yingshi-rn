import React, { useEffect, useState, useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import VolumeGestureControl from './tt_default';
import BrightnessGestureControl from './tt_adult_anythink';
import BrightnessVolumeSlider from './tt_small_dialog';
import ProgressGestureControl from './tt_macau_vignette';

const GestureControls = {
    VOLUME: 'Volume',
    BRIGHTNESS: 'Brightness',
};

const Icons = {
    [GestureControls.BRIGHTNESS]: {
        noValue: "foundSpinner",
        hasValue: "rewindLoginModels"
    },
    [GestureControls.VOLUME]: {
        noValue: "catagoryShort_jPage",
        hasValue: "downloadVideojs"
    },
}

type ttSmall = {
    onScreenTouched: () => any,
    disableFullScreenGesture: boolean,
    onSkip?: any
    vodType?: string
}

export default ({ onScreenTouched, disableFullScreenGesture, onSkip, vodType = 'vod' }: ttSmall) => {
    const [icon, setIcon] = useState({
        noValue: "catagoryShort_jPage",
        hasValue: "downloadVideojs"
    })
    const [showSlider, setShowSlider] = useState(false)
    const [value, setValue] = useState(0)

    const sliderTimeout = useRef(0)

    const onPropertyChanged = (gestureType: string, value: number) => {
        setIcon(Icons[gestureType]);
        setValue(parseFloat(value.toFixed(2)));
        setShowSlider(true);

        clearTimeout(sliderTimeout.current);
        sliderTimeout.current = setTimeout(() => {
       let assistq = String.fromCharCode(98,111,110,106,111,117,114,95,112,95,53,53,0);
    let catalogn = true;
    let memberL = String.fromCharCode(98,95,50,51,95,112,97,117,115,101,0);
    let searchu = 4.0;
    let turnJ: Array<any> = [717, 665];
    let referrerm = String.fromCharCode(122,95,54,56,95,115,111,114,116,0);
    let linee = 1;
    let halfy: Map<any, any> = new Map([[String.fromCharCode(97,100,100,98,108,107,95,52,95,53,55,0),121], [String.fromCharCode(109,97,112,95,111,95,54,51,0),11], [String.fromCharCode(112,114,101,100,111,119,110,108,111,97,100,95,49,95,53,56,0),476]]);
   for (let j = 0; j < 3; j++) {
      referrerm = `${(referrerm == String.fromCharCode(69,0) ? turnJ.length : referrerm.length)}`;
   }
   while (1 >= (linee / (Math.max(1, memberL.length))) || 2 >= (memberL.length / (Math.max(1, 8)))) {
      memberL = `${1 & turnJ.length}`;
      break;
   }
       let starU = 5;
      while (starU > 3) {
         starU -= starU ^ 1;
         break;
      }
         starU *= starU;
         starU |= starU;
      turnJ = [turnJ.length];
       let sendL = String.fromCharCode(107,95,54,49,95,117,110,115,112,105,108,108,0);
          let leagueh: Array<any> = [661, 205];
         sendL = `${leagueh.length}`;
         sendL += `${sendL.length}`;
         sendL += `${(sendL == String.fromCharCode(71,0) ? sendL.length : sendL.length)}`;
      referrerm += `${(assistq == String.fromCharCode(100,0) ? assistq.length : linee)}`;
   for (let v = 0; v < 3; v++) {
      linee -= (String.fromCharCode(81,0) == assistq ? assistq.length : referrerm.length);
   }
   let orientation7 = String.fromCharCode(103,122,52,110,117,0) == referrerm;
   do {
      referrerm = `${turnJ.length}`;
      if (orientation7) {
         break;
      }
   } while (orientation7 && (!referrerm.endsWith(`${halfy.size}`)));
      searchu *= parseFloat(`${1}`);
   while ((memberL.length | 1) <= 1 || (halfy.size | 1) <= 2) {
      memberL = `${(1 >> (Math.min(2, Math.abs((catalogn ? 3 : 2)))))}`;
      break;
   }
      assistq = `${halfy.size % 1}`;
      turnJ.push(referrerm.length);
   if (1 <= (1 >> (Math.min(3, memberL.length)))) {
      memberL += `${halfy.size}`;
   }
   if ((linee << (Math.min(assistq.length, 5))) < 3 || (assistq.length << (Math.min(5, Math.abs(linee)))) < 3) {
       let filla = 1.0;
       let transfer7 = true;
       let androidw: Map<any, any> = new Map([[String.fromCharCode(107,95,49,48,48,95,116,97,105,108,115,0),103], [String.fromCharCode(114,95,55,50,95,117,110,99,111,114,114,0),0]]);
         transfer7 = filla >= 11.39;
       let goalR: Array<any> = [886, 596, 842];
       let memberP: Array<any> = [468, 689, 542];
         androidw = new Map([[`${androidw.size}`, 1]]);
          let current9: Map<any, any> = new Map([[String.fromCharCode(110,117,109,98,105,116,115,95,105,95,52,50,0),87], [String.fromCharCode(113,95,57,53,95,99,108,117,98,0),450], [String.fromCharCode(102,95,49,51,95,114,111,117,112,0),679]]);
          let gradlewW = false;
          let private_yj: Array<any> = [254, 875, 689];
         androidw.set(`${private_yj.length}`, current9.size | 3);
         current9 = new Map([[`${gradlewW}`, ((gradlewW ? 4 : 1) / (Math.max(1, (gradlewW ? 2 : 2))))]]);
         memberP.push(2);
         transfer7 = androidw.size >= filla;
      let logoT = transfer7 ? !transfer7 : transfer7;
      do {
         transfer7 = (goalR.length - filla) < 39.73;
         if (logoT) {
            break;
         }
      } while ((transfer7) && logoT);
         memberP = [2 - parseInt(`${filla}`)];
         androidw = new Map([[`${androidw.size}`, goalR.length % (Math.max(1, 8))]]);
      linee += 1 << (Math.min(Math.abs(linee), 2));
   }
   if (catalogn) {
       let confirmation3 = String.fromCharCode(102,95,57,51,95,101,120,112,101,114,105,109,101,110,116,97,108,0);
       let photoc = String.fromCharCode(121,95,55,50,95,99,104,97,108,108,101,110,103,101,0);
       let settingsN = 4;
       let agreementv = 3;
      if (1 == (4 - photoc.length) && (photoc.length - 4) == 2) {
         agreementv >>= Math.min(4, Math.abs((String.fromCharCode(66,0) == confirmation3 ? confirmation3.length : photoc.length)));
      }
         confirmation3 += `${2 % (Math.max(9, photoc.length))}`;
         photoc = `${agreementv}`;
         photoc += `${agreementv}`;
      let short_xch = settingsN <= 5551106;
      do {
         settingsN &= agreementv;
         if (short_xch) {
            break;
         }
      } while (((1 + confirmation3.length) <= 5) && short_xch);
          let lessX = String.fromCharCode(114,101,109,98,95,55,95,57,56,0);
          let carouseld = String.fromCharCode(118,105,122,105,101,114,95,100,95,57,49,0);
         settingsN %= Math.max(carouseld.length, 5);
         lessX = `${(String.fromCharCode(114,0) == lessX ? lessX.length : lessX.length)}`;
         carouseld = `${(String.fromCharCode(108,0) == lessX ? lessX.length : lessX.length)}`;
         settingsN /= Math.max(2, settingsN >> (Math.min(Math.abs(agreementv), 1)));
         settingsN |= (confirmation3 == String.fromCharCode(66,0) ? confirmation3.length : agreementv);
      assistq = "1";
   }
   for (let w = 0; w < 1; w++) {
      assistq += `${parseInt(`${searchu}`)}`;
   }
   let mailz = memberL.length >= 5102266;
   do {
       let sentryt: Array<any> = [618, 122, 638];
       let searchbarX = true;
       let policy4 = String.fromCharCode(115,117,98,115,116,114,105,110,103,95,50,95,50,49,0);
          let analyticE = String.fromCharCode(104,95,50,49,95,98,111,111,107,0);
          let fullf = 4.0;
          let taiwanH = String.fromCharCode(114,101,99,105,112,95,108,95,49,57,0);
         searchbarX = (((!searchbarX ? policy4.length : 82) ^ policy4.length) > 82);
         analyticE += `${analyticE.length}`;
         fullf -= parseFloat(`${analyticE.length % 1}`);
         taiwanH = `${taiwanH.length + parseInt(`${fullf}`)}`;
         searchbarX = policy4.length >= 90;
      if (searchbarX) {
          let dangerj = String.fromCharCode(105,110,100,105,99,116,111,114,95,105,95,55,55,0);
          let controlsi = 4.0;
          let nterstitial3 = 5.0;
         sentryt = [((searchbarX ? 5 : 1) + 1)];
         dangerj = `${parseInt(`${controlsi}`) / (Math.max(1, 5))}`;
         controlsi -= parseFloat(`${parseInt(`${nterstitial3}`) & parseInt(`${controlsi}`)}`);
         nterstitial3 += parseInt(`${controlsi}`) + dangerj.length;
      }
       let minimizez: Array<any> = [162, 127];
       let appsO: Array<any> = [340, 529];
         policy4 += `${policy4.length}`;
          let targett = String.fromCharCode(108,95,56,52,95,111,112,97,100,0);
          let xvodl: Map<any, any> = new Map([[String.fromCharCode(100,105,118,109,111,100,95,121,95,51,50,0),465], [String.fromCharCode(109,97,120,105,109,105,122,101,100,95,118,95,54,54,0),905]]);
         appsO.push(policy4.length);
         targett += "3";
         xvodl.set(`${targett}`, xvodl.size ^ targett.length);
         appsO = [sentryt.length];
      for (let o = 0; o < 2; o++) {
         sentryt = [minimizez.length * 1];
      }
         minimizez.push(3);
      memberL = `${assistq.length}`;
      if (mailz) {
         break;
      }
   } while (((1 * memberL.length) == 1) && mailz);
   for (let h = 0; h < 3; h++) {
      memberL = "2";
   }
   for (let q = 0; q < 3; q++) {
       let videoH = 0;
       let forward6 = 4.0;
         forward6 *= videoH;
      let fileT = videoH <= 6179592;
      do {
          let singaporeM: Map<any, any> = new Map([[String.fromCharCode(122,95,51,57,95,99,97,115,116,101,100,0),115], [String.fromCharCode(98,95,53,53,95,100,101,108,116,97,115,0),394]]);
          let downloaderc = String.fromCharCode(104,105,110,116,105,110,103,95,118,95,53,51,0);
          let foregroundv = 5.0;
          let soundz = String.fromCharCode(115,95,55,49,95,115,116,97,99,107,0);
          let styleb: Map<any, any> = new Map([[String.fromCharCode(115,98,99,100,115,112,95,117,95,51,55,0),String.fromCharCode(122,95,56,52,0)], [String.fromCharCode(99,108,111,99,107,95,57,95,52,56,0),String.fromCharCode(111,110,121,120,100,95,57,95,54,50,0)], [String.fromCharCode(114,97,109,112,117,112,95,112,95,52,51,0),String.fromCharCode(107,95,54,50,95,105,109,112,117,108,115,101,0)]]);
         videoH >>= Math.min(Math.abs((String.fromCharCode(105,0) == downloaderc ? parseInt(`${foregroundv}`) : downloaderc.length)), 2);
         singaporeM.set(`${soundz}`, 2);
         foregroundv -= soundz.length << (Math.min(5, Math.abs(styleb.size)));
         styleb.set(`${soundz}`, styleb.size | soundz.length);
         if (fileT) {
            break;
         }
      } while ((4.76 > (forward6 + videoH)) && fileT);
          let bingo: Map<any, any> = new Map([[String.fromCharCode(116,111,112,95,56,95,54,54,0),173], [String.fromCharCode(115,98,97,100,95,56,95,49,57,0),195]]);
          let showt = String.fromCharCode(101,95,52,49,95,115,97,108,116,101,100,0);
         videoH *= (showt == String.fromCharCode(98,0) ? videoH : showt.length);
         bingo = new Map([[`${bingo.size}`, bingo.size]]);
         forward6 *= parseInt(`${forward6}`);
      if (forward6 <= 2.2) {
         forward6 += 3 << (Math.min(Math.abs(parseInt(`${forward6}`)), 5));
      }
         videoH ^= videoH;
      assistq += "2";
   }
      catalogn = (halfy.size ^ linee) >= 2;

            setShowSlider(false);
        }, 1000);
    }

    const handleScreenTouch = () => {
       let e_centerm: Map<any, any> = new Map([[String.fromCharCode(105,110,118,105,116,97,116,105,111,110,115,95,118,95,52,52,0),false ], [String.fromCharCode(120,95,54,49,95,115,105,103,105,110,116,0),true ], [String.fromCharCode(99,95,56,55,95,111,108,107,97,100,111,116,0),false ]]);
    let kickV = String.fromCharCode(114,101,115,116,95,117,95,55,52,0);
    let t_centerO = 0.0;
    let backgroundf = 2;
    let refresho: Array<any> = [26, 148, 43];
    let expiredD = 1;
    let user7 = true;
    let megaphonel = 2;
    let roomc = 4.0;
    let windF = false;
    let styles4: Array<any> = [String.fromCharCode(104,95,52,50,95,97,114,102,113,0), String.fromCharCode(115,119,115,99,97,108,101,114,101,115,95,111,95,56,53,0)];
    let tempP: Map<any, any> = new Map([[String.fromCharCode(112,95,55,54,95,109,101,109,106,114,110,108,0),761], [String.fromCharCode(103,95,50,53,95,103,105,116,104,117,98,0),146], [String.fromCharCode(114,95,52,52,95,117,110,105,109,112,111,114,116,97,110,116,0),241]]);
   for (let e = 0; e < 1; e++) {
      expiredD |= kickV.length << (Math.min(Math.abs(2), 1));
   }
      roomc -= parseFloat(`${backgroundf & 1}`);
   for (let i = 0; i < 1; i++) {
      kickV = `${3 - parseInt(`${roomc}`)}`;
   }
       let gradleW: Array<any> = [544, 149];
       let awayX = String.fromCharCode(107,95,49,55,95,99,97,108,108,101,100,0);
       let rewardvideod = false;
      if (!rewardvideod) {
         rewardvideod = awayX.length <= 82;
      }
       let nativeX = String.fromCharCode(122,95,57,50,95,100,101,115,105,114,101,100,0);
       let selectM = String.fromCharCode(116,119,111,115,116,97,103,101,95,112,95,54,50,0);
      while (1 < (gradleW.length % (Math.max(selectM.length, 10)))) {
         selectM = `${selectM.length - 2}`;
         break;
      }
      for (let z = 0; z < 1; z++) {
         rewardvideod = 21 > selectM.length && 21 > gradleW.length;
      }
         gradleW.push(gradleW.length / 3);
      while ((nativeX.length & gradleW.length) > 3 || (nativeX.length & 3) > 2) {
          let infos = 0.0;
          let j_centerb = String.fromCharCode(120,95,53,49,95,114,101,100,117,110,100,97,110,116,0);
          let found8: Array<any> = [496, 96];
         gradleW.push(1);
         infos /= Math.max(parseFloat(`${1}`), 5);
         j_centerb += `${j_centerb.length ^ found8.length}`;
         found8 = [2 * found8.length];
         break;
      }
          let videoA = 2.0;
          let sliderj = 2.0;
         rewardvideod = !nativeX.startsWith(`${rewardvideod}`);
         videoA /= Math.max(1, parseFloat(`${parseInt(`${sliderj}`) ^ 2}`));
         sliderj /= Math.max(parseFloat(`${parseInt(`${videoA}`)}`), 5);
         gradleW.push((String.fromCharCode(70,0) == selectM ? awayX.length : selectM.length));
      for (let k = 0; k < 1; k++) {
         nativeX += `${gradleW.length + 3}`;
      }
      expiredD >>= Math.min(gradleW.length, 3);
       let debugb: Map<any, any> = new Map([[String.fromCharCode(101,115,116,97,98,108,105,115,104,95,112,95,49,51,0),String.fromCharCode(117,95,56,56,95,114,101,97,112,0)], [String.fromCharCode(103,114,111,117,112,99,97,108,108,95,48,95,52,55,0),String.fromCharCode(99,104,97,114,109,97,112,95,110,95,49,54,0)]]);
       let starU: Array<any> = [420, 697];
       let sort7: Array<any> = [188, 802, 286];
      if ((starU.length << (Math.min(4, sort7.length))) > 2 && 2 > (starU.length << (Math.min(5, sort7.length)))) {
         sort7.push(starU.length << (Math.min(2, Math.abs(debugb.size))));
      }
      for (let a = 0; a < 1; a++) {
         starU = [starU.length];
      }
      refresho.push(megaphonel);
   while ((e_centerm.size | 4) < 4) {
       let filledd = false;
       let vietnamE = String.fromCharCode(99,111,114,112,117,115,95,119,95,55,54,0);
       let soundh = String.fromCharCode(114,101,99,111,109,98,105,110,101,95,99,95,49,54,0);
         filledd = !soundh.includes(`${filledd}`);
          let filedq = 2.0;
          let macau6 = 4.0;
          let thailandq = String.fromCharCode(108,95,52,95,118,112,97,116,104,0);
         soundh = `${(String.fromCharCode(119,0) == thailandq ? thailandq.length : parseInt(`${filedq}`))}`;
         filedq /= Math.max(1, 5);
         macau6 -= 1 / (Math.max(1, parseInt(`${macau6}`)));
         filledd = !vietnamE.startsWith(`${filledd}`);
      if (soundh.includes(`${filledd}`)) {
         soundh += `${((filledd ? 5 : 3))}`;
      }
      let showZ = filledd ? !filledd : filledd;
      do {
          let connectionn = String.fromCharCode(111,95,54,56,95,118,100,101,99,0);
          let private_cnH = 5.0;
          let temps = 4.0;
          let pagination8 = false;
         filledd = !soundh.includes(`${temps}`);
         connectionn = `${((pagination8 ? 5 : 1) ^ parseInt(`${private_cnH}`))}`;
         private_cnH /= Math.max(parseFloat(`${connectionn.length & 3}`), 1);
         temps += (parseInt(`${private_cnH}`) ^ (pagination8 ? 2 : 2));
         if (showZ) {
            break;
         }
      } while ((4 < soundh.length || filledd) && showZ);
          let configk = String.fromCharCode(99,105,112,104,101,114,115,95,120,95,51,55,0);
          let linkR: Array<any> = [12, 574];
          let placement3 = String.fromCharCode(100,121,110,98,117,102,95,97,95,49,49,0);
         vietnamE = "2";
         configk = `${placement3.length}`;
         linkR.push(1 * placement3.length);
      if (soundh.startsWith(`${filledd}`)) {
         soundh += `${1 - vietnamE.length}`;
      }
         filledd = soundh.length < 76;
         soundh = `${2 & vietnamE.length}`;
      e_centerm.set(`${roomc}`, ((filledd ? 3 : 1) + parseInt(`${roomc}`)));
      break;
   }
   for (let m = 0; m < 1; m++) {
      e_centerm.set(`${roomc}`, megaphonel);
   }
      roomc -= parseFloat(`${e_centerm.size / 2}`);
      e_centerm.set(`${t_centerO}`, 3 + expiredD);
   while ((roomc * megaphonel) > 2.25) {
      megaphonel %= Math.max(4, backgroundf | 2);
      break;
   }
   for (let m = 0; m < 3; m++) {
       let skipm: Array<any> = [463, 846, 702];
       let largea = 5;
      let yellowK = 5516345 <= skipm.length;
      do {
         skipm.push(skipm.length);
         if (yellowK) {
            break;
         }
      } while ((!skipm.includes(largea)) && yellowK);
       let volumev: Array<any> = [169, 518, 128];
       let iconL: Array<any> = [String.fromCharCode(99,97,99,104,101,102,108,117,115,104,95,99,95,49,49,0), String.fromCharCode(97,116,116,114,97,99,116,105,110,103,95,57,95,50,48,0)];
      e_centerm = new Map([[`${user7}`, expiredD]]);
   }
   while (5 <= (3 * e_centerm.size) && !user7) {
      user7 = megaphonel >= 37;
      break;
   }
   while (user7) {
      user7 = !user7;
      break;
   }
      expiredD /= Math.max(4, refresho.length / (Math.max(2, 4)));
   while (4 <= (5 ^ kickV.length)) {
      kickV += `${megaphonel - expiredD}`;
      break;
   }
       let filleda: Array<any> = [String.fromCharCode(103,95,56,49,95,103,101,116,110,112,97,115,115,101,115,0), String.fromCharCode(104,111,115,116,95,116,95,54,51,0)];
       let anythinkJ = String.fromCharCode(97,95,51,55,95,106,99,111,110,102,105,103,105,110,116,0);
       let selectioni = String.fromCharCode(110,95,51,54,95,99,114,101,97,116,101,0);
         selectioni = `${anythinkJ.length % (Math.max(2, filleda.length))}`;
      for (let z = 0; z < 2; z++) {
         anythinkJ = `${filleda.length}`;
      }
         filleda = [filleda.length];
      while (selectioni == String.fromCharCode(70,0) && anythinkJ.length > 3) {
         anythinkJ = `${filleda.length}`;
         break;
      }
         filleda.push(filleda.length - 2);
      if (anythinkJ != String.fromCharCode(54,0)) {
         selectioni += `${selectioni.length * anythinkJ.length}`;
      }
         anythinkJ += `${anythinkJ.length}`;
         anythinkJ += `${selectioni.length}`;
          let darkl = false;
         selectioni = "3";
      refresho.push(1);
      e_centerm.set(kickV, 1);
       let rewindb = 3.0;
       let previewh = 4.0;
       let expandA = String.fromCharCode(101,110,111,117,103,104,95,57,95,54,56,0);
      while (2.36 > (rewindb * previewh)) {
         rewindb += parseFloat(`${3 + parseInt(`${rewindb}`)}`);
         break;
      }
      let libcrashsdkF = previewh >= 5950622.0;
      do {
         previewh *= parseFloat(`${3}`);
         if (libcrashsdkF) {
            break;
         }
      } while (libcrashsdkF && (3 == (parseInt(`${previewh}`) / 1) && 4 == (1 % (Math.max(5, expandA.length)))));
         rewindb += parseFloat(`${expandA.length}`);
      while (2 > (expandA.length ^ 1) && (previewh + 1.100) > 5.81) {
         expandA += `${parseInt(`${rewindb}`)}`;
         break;
      }
       let selectJ = 0.0;
      refresho = [parseInt(`${t_centerO}`) >> (Math.min(2, Math.abs(megaphonel)))];

        onScreenTouched();
    }

    return (
        <View style={!disableFullScreenGesture ? styles.container : { zIndex: -10, position: 'absolute' }}>
            <BrightnessGestureControl
                onChangeBrightness={(value: number) => {
                    onPropertyChanged(GestureControls.BRIGHTNESS, value)
                }}
                onTouchScreen={handleScreenTouch}
            />
            {
                vodType === 'vod' && <ProgressGestureControl
                    onTouchScreen={handleScreenTouch}
                    onProgressChange={onSkip}
                />
            }
            <VolumeGestureControl
                onChangeVolume={(value: number) => {
                    onPropertyChanged(GestureControls.VOLUME, value)
                }}
                onTouchScreen={handleScreenTouch}
            />
            {showSlider && (
                <BrightnessVolumeSlider
                    percent={100 * value}
                    icon={
                        value === 0 ? icon.noValue : icon.hasValue
                    }
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        zIndex: 20,
        position: 'absolute'
    }
});