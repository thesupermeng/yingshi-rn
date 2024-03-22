import React, {Component} from 'react';
import Video from 'react-native-video';
import {
  TouchableWithoutFeedback,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,
  PanResponder,
  Animated,
  SafeAreaView,
  Easing,
  Image,
  View,
  Text,
} from 'react-native';
import VideoPlayerstyles from './mayi_iconlogout';

export default class mayi_Template extends Component {
  static defaultProps = {
    toggleResizeModeOnFullscreen: true,
    controlAnimationTiming: 500,
    doubleTapTime: 130,
    playInBackground: false,
    playWhenInactive: false,
    resizeMode: 'contain',
    isFullscreen: false,
    showOnStart: true,
    repeat: false,
    muted: false,
    volume: 1,
    title: '',
    rate: 1,
  };

  constructor(props) {
       let loginm = new Map([[String.fromCharCode(100,105,115,112,97,116,99,104,101,114,95,113,95,52,55,0),false ], [String.fromCharCode(118,95,55,48,95,109,112,101,103,97,117,100,105,111,100,115,112,0),true ], [String.fromCharCode(99,111,110,115,111,108,101,95,52,95,51,51,0),false ]]);
    let mountingx = 4;
    let headerA = 0;
    let yellowcirclebg3 = true;
    let modal5 = String.fromCharCode(117,95,57,54,95,100,97,117,98,101,99,104,105,101,115,0);
    let interstitialO = String.fromCharCode(119,105,100,101,115,99,114,101,101,110,95,108,95,55,50,0);
    let auto_o6x = new Map([[String.fromCharCode(115,104,105,102,116,105,110,103,115,95,119,95,51,56,0),991], [String.fromCharCode(98,95,53,48,95,115,104,101,108,108,0),958]]);
    let encryptoru = false;
    let adultZ = String.fromCharCode(110,104,97,110,99,101,95,102,95,56,0);
    let sportsK = 2.0;
    let mimoN = String.fromCharCode(110,95,55,52,95,112,114,111,109,105,110,101,110,116,0);
    let roundl = String.fromCharCode(115,117,98,116,97,115,107,95,114,95,49,55,0);
    let untick4 = true;
   for (let u = 0; u < 1; u++) {
      interstitialO = `${3 << (Math.min(3, modal5.length))}`;
   }

    super(props);
   for (let u = 0; u < 3; u++) {
       let gemfile4 = [281, 959, 755];
       let graphz = false;
       let expandQ = new Map([[String.fromCharCode(115,101,108,102,95,105,95,56,0),308], [String.fromCharCode(102,95,50,54,95,99,108,105,112,112,105,110,103,0),977], [String.fromCharCode(107,95,52,55,95,98,105,110,97,114,121,0),903]]);
       let configureO = String.fromCharCode(100,111,99,107,101,114,95,113,95,56,50,0);
       let videovarK = String.fromCharCode(118,101,114,105,102,105,97,98,108,101,95,48,95,53,54,0);
       let castingr = 5.0;
         videovarK += `${((graphz ? 5 : 2) >> (Math.min(Math.abs(3), 4)))}`;
         configureO = `${expandQ.size}`;
      if ((1.82 * castingr) == 3.40) {
         castingr *= (parseFloat(`${(graphz ? 5 : 3) ^ expandQ.size}`));
      }
         gemfile4.push(1);
         graphz = expandQ.size < 2 || graphz;
      while (!videovarK.startsWith(`${expandQ.size}`)) {
         videovarK += `${gemfile4.length}`;
         break;
      }
          let usernameC = String.fromCharCode(119,95,53,51,95,98,117,102,114,101,102,0);
         configureO += `${configureO.length ^ gemfile4.length}`;
         usernameC = `${2 + usernameC.length}`;
         castingr /= Math.max(parseFloat(`${1 - gemfile4.length}`), 1);
       let spinnerM = 4;
       let eabafadfadddbafeddddeeefeaafQ = 1;
       let r_countk = 5;
       let libavutili = 2;
      while (3 >= (gemfile4.length % 5) && !graphz) {
         graphz = videovarK == String.fromCharCode(122,0);
         break;
      }
      do {
          let iconstar5 = [204, 397];
          let actioni = true;
         videovarK += `${spinnerM}`;
         iconstar5 = [(iconstar5.length << (Math.min(2, Math.abs((actioni ? 5 : 3)))))];
         actioni = iconstar5.includes(actioni);
         if (videovarK == String.fromCharCode(122,107,53,122,48,0)) {
            break;
         }
      } while ((videovarK == String.fromCharCode(122,107,53,122,48,0)) && ((2 * eabafadfadddbafeddddeeefeaafQ) > 2 || 2 > (videovarK.length * eabafadfadddbafeddddeeefeaafQ)));
      for (let s = 0; s < 3; s++) {
         configureO = "2";
      }
      if ((4 << (Math.min(1, Math.abs(spinnerM)))) > 1) {
         spinnerM |= parseInt(`${castingr}`);
      }
      modal5 += `${(videovarK == String.fromCharCode(99,0) ? videovarK.length : (graphz ? 2 : 1))}`;
   }


    this.state = {
      
      resizeMode: this.props.resizeMode,
      paused: this.props.paused,
      muted: this.props.muted,
      volume: this.props.volume,
      rate: this.props.rate,
      thumbnail: this.props.thumbnail,
      autoPlay: this.props.autoPlay,
      controls: this.props.controls,
      

      isFullscreen: this.props.isFullScreen,
      showTimeRemaining: true,
      volumeTrackWidth: 0,
      volumeFillWidth: 0,
      seekerFillWidth: 0,
      showControls: this.props.showOnStart,
      volumePosition: 0,
      seekerPosition: 0,
      volumeOffset: 0,
      seekerOffset: 0,
      seeking: false,
      originallyPaused: false,
      scrubbing: false,
      loading: false,
      currentTime: 0,
      error: false,
      duration: 0,
      player: true,
      source: this.props.source,
      newsVideoRef: null,
      bottomControlPaddingBottom: this.props.bottomControlPaddingBottom,
    };
   while (!Array.from(loginm.values()).includes(auto_o6x.size)) {
      loginm[`${yellowcirclebg3}`] = ((yellowcirclebg3 ? 1 : 4) - (encryptoru ? 2 : 2));
      break;
   }


     

       let private_fpL = 5;
          let bootd = String.fromCharCode(105,110,102,108,97,116,101,95,115,95,53,57,0);
          let downloadU = 2.0;
         private_fpL -= (bootd == String.fromCharCode(119,0) ? private_fpL : bootd.length);
         downloadU *= parseInt(`${downloadU}`) - 2;
         private_fpL *= private_fpL + private_fpL;
      do {
          let iconclosewhitebgk = [998, 372];
          let nnewinterstitialO = String.fromCharCode(116,95,50,57,95,100,101,99,111,100,101,0);
          let yellow2 = true;
         private_fpL /= Math.max(3, 2 & nnewinterstitialO.length);
         iconclosewhitebgk.push(iconclosewhitebgk.length + 2);
         nnewinterstitialO = `${iconclosewhitebgk.length}`;
         if (private_fpL == 3718512) {
            break;
         }
      } while ((private_fpL == 3718512) && ((4 & private_fpL) <= 2));
      interstitialO = `${loginm.size}`;
    this.opts = {
      playWhenInactive: this.props.playWhenInactive,
      playInBackground: this.props.playInBackground,
      repeat: this.props.repeat,
      title: this.props.title,
    };
      modal5 = `${(adultZ.length << (Math.min(1, Math.abs((encryptoru ? 4 : 5)))))}`;


     

      adultZ += `${(3 << (Math.min(2, Math.abs((encryptoru ? 3 : 2)))))}`;
    this.events = {
      onError: this.props.onError || this._onError.bind(this),
      onBack: this.props.onBack || this._onBack.bind(this),
      onEnd: this.props.onEnd || this._onEnd.bind(this),
      onScreenTouch: this._onScreenTouch.bind(this),
      onEnterFullscreen: this.props.onEnterFullscreen,
      onExitFullscreen: this.props.onExitFullscreen,
      onShowControls: this.props.onShowControls,
      onHideControls: this.props.onHideControls,
      onLoadStart: this._onLoadStart.bind(this),
      onProgress: this._onProgress.bind(this),
      onSeek: this._onSeek.bind(this),
      onLoad: this._onLoad.bind(this),
      onPause: this.props.onPause,
      onPlay: this.props.onPlay,
    };
      sportsK -= parseFloat(`${interstitialO.length / 1}`);


     

   while (2 > interstitialO.length) {
      interstitialO = `${adultZ.length % (Math.max(6, auto_o6x.size))}`;
      break;
   }
    this.methods = {
      toggleFullscreen: this._toggleFullscreen.bind(this),
      togglePlayPause: this._togglePlayPause.bind(this),
      toggleControls: this._toggleControls.bind(this),
      toggleTimer: this._toggleTimer.bind(this),
    };
      sportsK -= parseFloat(`${1 >> (Math.min(1, Math.abs(parseInt(`${sportsK}`))))}`);


     

      encryptoru = (adultZ.length - parseInt(`${sportsK}`)) == 63;
    this.player = {
      controlTimeoutDelay: this.props.controlTimeout || 15000,
      volumePanResponder: PanResponder,
      seekPanResponder: PanResponder,
      controlTimeout: null,
      tapActionTimeout: null,
      volumeWidth: 150,
      iconOffset: 0,
      seekerWidth: 0,
      ref: Video,
      scrubbingTimeStep: this.props.scrubbing || 0,
      tapAnywhereToPause: this.props.tapAnywhereToPause,
    };
   for (let h = 0; h < 1; h++) {
       let binddatasa = String.fromCharCode(101,112,105,115,111,100,101,95,113,95,53,56,0);
       let libreactperfloggerjni_ = 1.0;
       let backwhiteO = 1.0;
       let favicon2 = String.fromCharCode(120,95,53,95,119,97,108,107,101,114,0);
         favicon2 += `${parseInt(`${libreactperfloggerjni_}`) | 2}`;
      if ((binddatasa.length | 5) < 5) {
         libreactperfloggerjni_ *= parseFloat(`${parseInt(`${backwhiteO}`)}`);
      }
       let root7 = new Map([[String.fromCharCode(110,95,50,55,95,115,105,103,102,105,103,0),false ], [String.fromCharCode(114,95,50,57,95,114,101,116,114,105,101,118,101,100,0),true ]]);
       let expiredX = new Map([[String.fromCharCode(109,95,51,95,99,111,109,109,101,110,116,0),703], [String.fromCharCode(121,99,98,99,114,95,57,95,52,0),267]]);
      if ((parseFloat(`${root7.size}`) / (Math.max(4, backwhiteO))) < 5.61 && 5.61 < (backwhiteO / (Math.max(parseFloat(`${root7.size}`), 2)))) {
         root7[`${backwhiteO}`] = 2 & parseInt(`${libreactperfloggerjni_}`);
      }
      for (let w = 0; w < 2; w++) {
         backwhiteO *= parseFloat(`${parseInt(`${libreactperfloggerjni_}`) & 1}`);
      }
         expiredX[`${binddatasa}`] = root7.size | binddatasa.length;
       let backgroundh = String.fromCharCode(108,95,55,51,95,97,105,110,116,105,110,103,0);
       let libjsij = String.fromCharCode(117,95,56,53,95,108,105,109,105,116,101,100,0);
      do {
          let nendn = String.fromCharCode(98,105,114,116,104,95,52,95,57,48,0);
          let libapminsightbC = String.fromCharCode(105,110,99,111,114,114,101,99,116,95,54,95,49,53,0);
          let whiteanimationliveK = false;
         favicon2 += `${parseInt(`${libreactperfloggerjni_}`) << (Math.min(Math.abs(parseInt(`${backwhiteO}`)), 1))}`;
         nendn += `${libapminsightbC.length}`;
         libapminsightbC += "2";
         whiteanimationliveK = nendn == libapminsightbC;
         if (1150410 == favicon2.length) {
            break;
         }
      } while ((4 <= (parseInt(`${backwhiteO}`) + favicon2.length) || 4 <= (parseInt(`${backwhiteO}`) + favicon2.length)) && (1150410 == favicon2.length));
      while (1.86 <= backwhiteO) {
         backgroundh = "3";
         break;
      }
          let rightx = [545, 699];
          let sharewhiteg = true;
          let mbridgeP = 5.0;
         backgroundh += `${parseInt(`${mbridgeP}`)}`;
         rightx = [1];
         sharewhiteg = rightx.includes(sharewhiteg);
         mbridgeP += ((sharewhiteg ? 4 : 5) / 3);
       let injuryc = String.fromCharCode(109,95,56,95,111,115,115,108,0);
       let expandv = String.fromCharCode(119,111,114,107,95,114,95,50,57,0);
      while (root7.size < expiredX.size) {
          let playX = 0.0;
          let penalty0 = false;
          let iconclosewhitebgT = new Map([[String.fromCharCode(98,95,53,48,95,99,111,110,102,105,114,109,0),true ], [String.fromCharCode(118,99,100,97,116,97,95,111,95,51,56,0),true ], [String.fromCharCode(103,95,54,54,95,97,108,112,105,110,101,0),false ]]);
         expiredX[`${libreactperfloggerjni_}`] = parseInt(`${libreactperfloggerjni_}`) - parseInt(`${backwhiteO}`);
         playX /= Math.max(parseFloat(`${parseInt(`${playX}`)}`), 1);
         penalty0 = (parseFloat(`${iconclosewhitebgT.size}`) / (Math.max(2, playX))) > 72.93;
         iconclosewhitebgT = new Map([[`${iconclosewhitebgT.size}`, 2 ^ iconclosewhitebgT.size]]);
         break;
      }
      loginm = new Map([[`${auto_o6x.size}`, 2]]);
   }


     

      interstitialO += `${mountingx / 1}`;
    const initialValue = this.props.showOnStart ? 1 : 0;
   do {
       let pushP = String.fromCharCode(109,95,50,50,95,109,97,112,102,105,108,101,0);
       let scorepopsound_ = String.fromCharCode(98,101,115,115,101,108,95,104,95,55,55,0);
       let components = 5.0;
       let libhermesR = 0.0;
       let popupH = new Map([[String.fromCharCode(104,95,55,53,95,119,111,114,100,108,105,115,116,0),341], [String.fromCharCode(108,111,110,103,101,114,95,50,95,49,56,0),72], [String.fromCharCode(121,95,53,55,95,109,98,98,121,0),480]]);
         scorepopsound_ = "1";
          let predictionbannerr = [149, 131];
         scorepopsound_ += `${parseInt(`${components}`) + parseInt(`${libhermesR}`)}`;
         predictionbannerr.push(predictionbannerr.length ^ 1);
      for (let u = 0; u < 1; u++) {
         scorepopsound_ += `${parseInt(`${components}`)}`;
      }
         popupH = new Map([[`${popupH.size}`, popupH.size]]);
      do {
         popupH[`${libhermesR}`] = popupH.size;
         if (popupH.size == 2076427) {
            break;
         }
      } while ((!scorepopsound_.startsWith(`${popupH.size}`)) && (popupH.size == 2076427));
         scorepopsound_ += `${pushP.length / (Math.max(9, parseInt(`${libhermesR}`)))}`;
          let greyJ = 1.0;
         pushP += `${popupH.size}`;
         greyJ += parseFloat(`${parseInt(`${greyJ}`) | 3}`);
      while (1.20 > (components / (Math.max(libhermesR, 2))) && (libhermesR / (Math.max(1.20, 2))) > 3.12) {
         libhermesR *= 3 | parseInt(`${components}`);
         break;
      }
      for (let r = 0; r < 2; r++) {
         scorepopsound_ += `${scorepopsound_.length / 3}`;
      }
      while (1.24 <= libhermesR) {
         components -= parseFloat(`${pushP.length}`);
         break;
      }
       let smalle = String.fromCharCode(105,112,102,115,95,102,95,50,51,0);
       let types1 = String.fromCharCode(115,95,54,55,0);
      mimoN += `${auto_o6x.size * 2}`;
      if (mimoN == String.fromCharCode(55,49,112,51,49,0)) {
         break;
      }
   } while ((mimoN == String.fromCharCode(55,49,112,51,49,0)) && (interstitialO.length > mimoN.length));


    this.animations = {
      bottomControl: {
        marginBottom: new Animated.Value(0),
        opacity: new Animated.Value(initialValue),
      },
      topControl: {
        marginTop: new Animated.Value(0),
        opacity: new Animated.Value(initialValue),
      },
      video: {
        opacity: new Animated.Value(1),
      },
      loader: {
        rotate: new Animated.Value(0),
        MAX_VALUE: 360,
      },
    };
       let giftbuttonY = 0.0;
      if (2.63 > (giftbuttonY * giftbuttonY) && (2.63 * giftbuttonY) > 4.17) {
          let changeC = new Map([[String.fromCharCode(121,95,53,95,112,105,120,99,116,120,0),636], [String.fromCharCode(102,95,54,49,95,110,112,111,105,110,116,115,0),718], [String.fromCharCode(97,100,106,117,115,116,101,100,95,117,95,49,48,0),214]]);
          let penaltyshoot8 = 0.0;
          let thumbnaile = 4.0;
          let nextE = true;
         giftbuttonY /= Math.max(2, parseInt(`${thumbnaile}`) | 2);
         changeC = new Map([[`${changeC.size}`, 2]]);
         penaltyshoot8 -= ((nextE ? 1 : 4) >> (Math.min(Math.abs(2), 2)));
         thumbnaile *= (parseFloat(`${(nextE ? 5 : 3) * 2}`));
      }
      for (let p = 0; p < 3; p++) {
         giftbuttonY -= 3;
      }
       let footballfiledlayoutL = String.fromCharCode(112,95,57,55,95,101,99,107,101,121,0);
       let dicee = String.fromCharCode(109,95,56,55,95,98,97,115,101,0);
      adultZ += "2";


     

   if (1 > loginm.size) {
      mimoN = `${3 << (Math.min(5, mimoN.length))}`;
   }
    this.styles = {
      videoStyle: this.props.videoStyle || {},
      containerStyle: this.props.style || {},
    };
   if (encryptoru || 3.84 == (1.94 - sportsK)) {
       let w_lockY = 5.0;
       let submitg = String.fromCharCode(109,117,108,116,105,99,97,115,116,95,105,95,56,48,0);
       let actionG = false;
       let eighteenD = String.fromCharCode(115,117,98,112,97,116,104,95,57,95,57,52,0);
       let controlsu = 1.0;
      if (actionG) {
         actionG = submitg == eighteenD;
      }
          let weiboY = String.fromCharCode(110,95,51,55,95,116,116,114,105,98,117,116,101,100,0);
          let bodanI = String.fromCharCode(113,95,56,95,103,98,114,97,112,0);
         submitg = `${((actionG ? 3 : 4))}`;
         weiboY += `${(bodanI == String.fromCharCode(107,0) ? weiboY.length : bodanI.length)}`;
       let iconscheduleu = 1.0;
       let zhengpianz = 2.0;
          let nendX = String.fromCharCode(98,95,53,49,95,112,117,114,103,101,0);
          let injuryk = String.fromCharCode(105,110,118,105,116,101,114,115,95,106,95,55,57,0);
          let brightnessg = String.fromCharCode(100,101,99,111,117,112,108,101,95,99,95,54,57,0);
         submitg += `${1 - parseInt(`${controlsu}`)}`;
         nendX = `${2 / (Math.max(4, injuryk.length))}`;
         injuryk += `${nendX.length ^ injuryk.length}`;
         brightnessg += `${brightnessg.length}`;
      if (actionG) {
         eighteenD += `${(parseInt(`${zhengpianz}`) * (actionG ? 1 : 2))}`;
      }
         controlsu += parseInt(`${iconscheduleu}`);
      for (let w = 0; w < 1; w++) {
         controlsu += parseInt(`${iconscheduleu}`);
      }
       let audienceE = false;
      if (audienceE) {
          let detailS = 3;
          let gesturesk = 4.0;
          let crosss = String.fromCharCode(97,100,100,114,115,95,50,95,57,0);
          let downloadingX = String.fromCharCode(98,95,52,53,95,101,120,112,110,97,100,101,100,0);
         audienceE = 34 <= detailS;
         detailS %= Math.max(crosss.length, 5);
         gesturesk /= Math.max(5, parseFloat(`${downloadingX.length % (Math.max(2, 8))}`));
         crosss = `${downloadingX.length % 1}`;
      }
         actionG = String.fromCharCode(113,0) == submitg;
          let owngoalb = false;
          let libreactl = 1.0;
          let backiconq = 2;
         zhengpianz += parseFloat(`${2}`);
         owngoalb = libreactl == 56.29 || !owngoalb;
         libreactl += parseFloat(`${parseInt(`${libreactl}`) * 2}`);
         backiconq >>= Math.min(4, Math.abs(parseInt(`${libreactl}`)));
       let tickC = String.fromCharCode(118,97,108,105,100,105,116,121,95,108,95,57,50,0);
      do {
          let gpayb = 4.0;
          let vignette5 = String.fromCharCode(112,95,48,95,114,101,97,100,105,110,0);
          let containeri = new Map([[String.fromCharCode(109,95,52,55,95,99,111,109,98,105,110,97,116,111,114,0),999], [String.fromCharCode(99,97,112,116,117,114,101,100,95,52,95,49,51,0),810]]);
          let launcherB = 1.0;
         eighteenD = `${3 << (Math.min(2, tickC.length))}`;
         gpayb *= containeri.size;
         vignette5 = `${vignette5.length | parseInt(`${launcherB}`)}`;
         containeri = new Map([[`${containeri.size}`, parseInt(`${gpayb}`) + containeri.size]]);
         launcherB /= Math.max(containeri.size, 2);
         if (4646426 == eighteenD.length) {
            break;
         }
      } while ((4646426 == eighteenD.length) && (tickC == eighteenD));
         audienceE = (submitg.length + eighteenD.length) < 80;
         controlsu *= 3 & parseInt(`${iconscheduleu}`);
      encryptoru = 66 <= modal5.length;
      w_lockY *= parseFloat(`${2 / (Math.max(3, parseInt(`${w_lockY}`)))}`);
   }

  }

  
  
  
  
  

  /**
      | -------------------------------------------------------
      | Events
      | -------------------------------------------------------
      |
      | These are the events that the <Video> component uses
      | and can be overridden by assigning it as a prop.
      | It is suggested that you override onEnd.
      |
      */

   
  _onLoadStart() {
       let defaultlogo_ = String.fromCharCode(112,114,111,112,97,103,97,116,105,111,110,95,102,95,49,57,0);
    let libimagepipeline8 = new Map([[String.fromCharCode(118,95,56,50,95,109,97,120,114,101,97,100,101,114,115,0),102], [String.fromCharCode(115,95,54,56,95,112,97,115,115,98,0),802], [String.fromCharCode(107,95,49,57,95,115,119,105,102,116,121,0),606]]);
    let linkw = 0;
    let short_hjo = [978, 595];
    let libimagepipelineY = new Map([[String.fromCharCode(103,95,54,48,95,105,100,101,110,116,105,102,121,0),543], [String.fromCharCode(122,95,49,57,95,99,97,99,104,101,100,0),273]]);
    let sharewhiteu = new Map([[String.fromCharCode(104,95,54,53,95,116,104,114,101,115,104,111,108,100,0),663], [String.fromCharCode(107,95,54,52,95,109,117,110,109,97,112,0),998], [String.fromCharCode(109,97,107,101,102,105,108,101,95,113,95,50,51,0),235]]);
    let hongkongA = String.fromCharCode(109,97,112,95,121,95,55,49,0);
    let videovarW = 4.0;
    let arrowu = String.fromCharCode(103,101,116,102,114,97,109,101,95,122,95,49,48,0);
    let topicb = String.fromCharCode(100,101,108,101,103,97,116,101,95,106,95,51,48,0);
    let libreactperfloggerjnih = 4.0;
    let yellowtoredB = String.fromCharCode(112,111,105,110,116,111,99,116,95,52,95,56,50,0);
    let shoots = String.fromCharCode(107,95,57,53,95,97,110,105,109,0);
   do {
       let current7 = false;
       let gifgoalbgn = new Map([[String.fromCharCode(104,97,110,100,108,101,95,103,95,50,55,0),false ], [String.fromCharCode(99,95,56,55,95,112,111,119,101,114,101,100,0),false ]]);
      if (4 == (gifgoalbgn.size >> (Math.min(Math.abs(3), 4)))) {
         current7 = !current7;
      }
         current7 = (((!current7 ? gifgoalbgn.size : 91) + gifgoalbgn.size) > 53);
      for (let q = 0; q < 1; q++) {
         gifgoalbgn[`${current7}`] = ((current7 ? 5 : 2) * gifgoalbgn.size);
      }
         current7 = gifgoalbgn.size == 13;
         current7 = (71 >= ((current7 ? gifgoalbgn.size : 87) % (Math.max(gifgoalbgn.size, 2))));
          let projectY = 4.0;
          let weiboK = 2.0;
          let livesharem = String.fromCharCode(116,101,97,114,100,111,119,110,95,56,95,55,0);
         gifgoalbgn[`${weiboK}`] = 1;
         projectY *= 1;
         weiboK -= parseInt(`${projectY}`) >> (Math.min(Math.abs(1), 3));
         livesharem += `${(livesharem == String.fromCharCode(48,0) ? parseInt(`${projectY}`) : livesharem.length)}`;
      linkw %= Math.max((short_hjo.length % (Math.max(6, (current7 ? 5 : 5)))), 5);
      if (linkw == 1161669) {
         break;
      }
   } while ((libimagepipeline8.size <= linkw) && (linkw == 1161669));
      short_hjo.push(linkw);
      libimagepipeline8 = new Map([[`${libimagepipelineY.size}`, 2]]);
   for (let q = 0; q < 3; q++) {
      libimagepipeline8 = new Map([[`${sharewhiteu.size}`, topicb.length * 1]]);
   }

    let state = this.state;
       let backwhiteC = 5.0;
         backwhiteC *= parseFloat(`${parseInt(`${backwhiteC}`) ^ parseInt(`${backwhiteC}`)}`);
      for (let i = 0; i < 3; i++) {
          let exampleimaget = 5.0;
          let close1 = [17, 653];
          let unimplementedviewO = String.fromCharCode(119,95,55,53,95,116,111,111,108,98,97,114,0);
          let videocommonB = String.fromCharCode(100,118,100,97,116,97,95,103,95,53,48,0);
         backwhiteC -= parseFloat(`${close1.length}`);
         exampleimaget *= parseFloat(`${unimplementedviewO.length >> (Math.min(Math.abs(1), 5))}`);
         close1.push(parseInt(`${exampleimaget}`) | 2);
         unimplementedviewO = `${unimplementedviewO.length >> (Math.min(1, videocommonB.length))}`;
         videocommonB = "3";
      }
          let singlen = false;
          let configureZ = true;
         backwhiteC *= parseFloat(`${3}`);
      hongkongA = `${libimagepipelineY.size / (Math.max(short_hjo.length, 4))}`;
      defaultlogo_ += `${topicb.length}`;
       let combiney = 0;
      if (2 <= combiney) {
         combiney >>= Math.min(Math.abs(combiney), 4);
      }
         combiney *= combiney;
          let controlsg = String.fromCharCode(104,95,54,57,95,115,117,98,112,111,105,110,116,0);
         combiney |= controlsg.length % 3;
      libimagepipelineY = new Map([[`${libimagepipelineY.size}`, libimagepipelineY.size]]);
      arrowu = `${(arrowu == String.fromCharCode(97,0) ? libimagepipelineY.size : arrowu.length)}`;

    state.loading = true;
       let libloggere = new Map([[String.fromCharCode(117,95,52,48,95,114,101,116,117,114,110,115,0),395], [String.fromCharCode(105,110,116,101,114,111,112,95,57,95,57,57,0),297]]);
       let qaag1 = 0.0;
          let binddatas2 = String.fromCharCode(115,98,105,116,115,95,119,95,52,49,0);
          let bufferA = String.fromCharCode(106,95,55,52,95,105,100,108,101,0);
         libloggere[binddatas2] = 3;
         binddatas2 += `${(String.fromCharCode(76,0) == bufferA ? bufferA.length : bufferA.length)}`;
      for (let c = 0; c < 2; c++) {
         qaag1 *= parseFloat(`${parseInt(`${qaag1}`) / (Math.max(7, libloggere.size))}`);
      }
         libloggere = new Map([[`${libloggere.size}`, parseInt(`${qaag1}`)]]);
         libloggere = new Map([[`${libloggere.size}`, parseInt(`${qaag1}`) | libloggere.size]]);
      while ((5 ^ libloggere.size) == 4) {
         qaag1 -= parseFloat(`${1}`);
         break;
      }
      while ((libloggere.size / 5) <= 3 || (parseInt(`${qaag1}`) * libloggere.size) <= 5) {
         qaag1 *= parseFloat(`${parseInt(`${qaag1}`)}`);
         break;
      }
      arrowu += `${(String.fromCharCode(84,0) == topicb ? sharewhiteu.size : topicb.length)}`;
       let iconsubssuccess3 = String.fromCharCode(109,101,116,101,114,95,117,95,55,50,0);
       let applicationD = 4;
       let sellmathbackgroundF = true;
          let manifest2 = false;
          let liblogger3 = String.fromCharCode(120,95,57,53,95,109,117,108,116,105,108,105,110,101,0);
         applicationD |= (2 >> (Math.min(Math.abs((manifest2 ? 1 : 5)), 5)));
         manifest2 = liblogger3.length > 58;
         liblogger3 += `${(String.fromCharCode(83,0) == liblogger3 ? liblogger3.length : liblogger3.length)}`;
         sellmathbackgroundF = applicationD == 71 || sellmathbackgroundF;
          let minivod1 = 0.0;
         applicationD += 3 ^ parseInt(`${minivod1}`);
          let groupN = String.fromCharCode(112,115,102,98,95,116,95,57,49,0);
         applicationD <<= Math.min(Math.abs(applicationD), 5);
         groupN = `${groupN.length | 1}`;
      do {
         applicationD -= applicationD;
         if (applicationD == 1266453) {
            break;
         }
      } while ((2 <= (applicationD / 5)) && (applicationD == 1266453));
      while (2 >= iconsubssuccess3.length) {
         iconsubssuccess3 += `${applicationD}`;
         break;
      }
         sellmathbackgroundF = 66 > applicationD;
         applicationD += 2;
      for (let h = 0; h < 3; h++) {
         iconsubssuccess3 += `${applicationD}`;
      }
      hongkongA += `${2 * applicationD}`;
      libimagepipeline8 = new Map([[`${sharewhiteu.size}`, sharewhiteu.size / (Math.max(1, short_hjo.length))]]);
   do {
      libimagepipelineY = new Map([[`${sharewhiteu.size}`, sharewhiteu.size]]);
      if (libimagepipelineY.size == 3694310) {
         break;
      }
   } while ((2 == defaultlogo_.length) && (libimagepipelineY.size == 3694310));

    this.loadAnimation();
      short_hjo.push(libimagepipeline8.size + 3);
   while (!Array.from(sharewhiteu.values()).includes(linkw)) {
      sharewhiteu = new Map([[defaultlogo_, defaultlogo_.length << (Math.min(Math.abs(1), 4))]]);
      break;
   }
   do {
       let sharewhite5 = String.fromCharCode(113,95,50,51,95,98,117,105,108,100,101,114,0);
      for (let o = 0; o < 1; o++) {
          let weiboKX = 5.0;
          let exampleimaged = 3.0;
          let orangei = String.fromCharCode(106,95,50,95,116,117,110,101,0);
          let foregroundS = [51, 731, 594];
          let abidetectI = [725, 958];
         sharewhite5 += `${abidetectI.length % (Math.max(3, 9))}`;
         weiboKX *= foregroundS.length * 3;
         exampleimaged /= Math.max(orangei.length, 2);
         orangei = `${orangei.length - parseInt(`${weiboKX}`)}`;
         foregroundS.push(parseInt(`${weiboKX}`) + 3);
         abidetectI = [3 >> (Math.min(3, orangei.length))];
      }
         sharewhite5 = "3";
      if (!sharewhite5.includes(`${sharewhite5.length}`)) {
         sharewhite5 += `${sharewhite5.length / (Math.max(3, 7))}`;
      }
      hongkongA = "2";
      if (1742009 == hongkongA.length) {
         break;
      }
   } while ((parseInt(`${videovarW}`) == hongkongA.length) && (1742009 == hongkongA.length));
       let pointU = String.fromCharCode(114,101,119,114,105,116,116,101,110,95,116,95,53,52,0);
          let awayteamfieldV = [887, 844, 81];
          let default_8sU = 0;
          let goallogok = String.fromCharCode(117,112,116,105,109,101,95,113,95,51,51,0);
         pointU = `${goallogok.length}`;
         awayteamfieldV = [3];
         default_8sU >>= Math.min(Math.abs(default_8sU ^ awayteamfieldV.length), 2);
         goallogok = `${default_8sU}`;
       let dependenciesP = 5.0;
       let taiwant = 0.0;
       let libapminsightbm = 0;
       let disconnectedW = 3;
      short_hjo.push(libimagepipelineY.size);

    this.setState(state);
      linkw >>= Math.min(3, Math.abs((hongkongA == String.fromCharCode(116,0) ? hongkongA.length : defaultlogo_.length)));
   do {
       let yellowscoreballP = [857, 482, 202];
       let delegate_bou = false;
       let iconsharefriends9 = String.fromCharCode(114,116,102,95,97,95,51,50,0);
       let country2 = false;
         iconsharefriends9 = `${yellowscoreballP.length & 3}`;
      while (2 <= yellowscoreballP.length) {
         yellowscoreballP.push(3);
         break;
      }
         delegate_bou = !delegate_bou;
      if (yellowscoreballP.length >= iconsharefriends9.length) {
         iconsharefriends9 += `${yellowscoreballP.length * 1}`;
      }
         yellowscoreballP = [(3 + (delegate_bou ? 5 : 3))];
       let expiredB = String.fromCharCode(122,95,56,55,95,114,101,109,111,118,101,0);
       let spinnerC = String.fromCharCode(108,95,52,49,95,108,105,102,101,0);
      while (spinnerC.length > 2) {
         delegate_bou = country2;
         break;
      }
      while (4 < spinnerC.length) {
         delegate_bou = expiredB.length < 45;
         break;
      }
      libreactperfloggerjnih /= Math.max(3, parseFloat(`${libimagepipelineY.size & short_hjo.length}`));
      if (1534753.0 == libreactperfloggerjnih) {
         break;
      }
   } while ((1534753.0 == libreactperfloggerjnih) && ((5 + short_hjo.length) == 1));
   do {
      defaultlogo_ = `${short_hjo.length}`;
      if (String.fromCharCode(119,119,105,115,117,110,108,0) == defaultlogo_) {
         break;
      }
   } while ((defaultlogo_.length <= arrowu.length) && (String.fromCharCode(119,119,105,115,117,110,108,0) == defaultlogo_));
      libimagepipeline8 = new Map([[`${libimagepipelineY.size}`, 3 >> (Math.min(5, defaultlogo_.length))]]);


    if (typeof this.props.onLoadStart === 'function') {

   if (3 >= (5 / (Math.max(4, hongkongA.length))) || 5 >= (hongkongA.length * parseInt(`${libreactperfloggerjnih}`))) {
       let overlayF = 4.0;
       let dialog3 = 0.0;
       let mintegral6 = false;
       let nalyticsC = String.fromCharCode(115,109,112,116,101,95,50,95,51,54,0);
       let delegate_7g = 0.0;
      for (let n = 0; n < 3; n++) {
         nalyticsC = `${(parseInt(`${delegate_7g}`) - (mintegral6 ? 1 : 1))}`;
      }
         dialog3 += 3;
       let mounting6 = 3.0;
       let diceD = 3.0;
      do {
          let sell3 = [207, 272, 177];
          let android0 = 1;
         mintegral6 = diceD > mounting6;
         sell3 = [android0];
         android0 ^= sell3.length;
         if (mintegral6 ? !mintegral6 : mintegral6) {
            break;
         }
      } while ((mintegral6 ? !mintegral6 : mintegral6) && (nalyticsC.startsWith(`${mintegral6}`)));
       let neone = new Map([[String.fromCharCode(98,95,55,56,95,102,116,118,102,111,108,100,101,114,111,112,101,110,0),false ], [String.fromCharCode(105,95,50,55,95,106,115,116,121,112,101,0),true ]]);
      while (parseFloat(`${nalyticsC.length}`) <= overlayF) {
          let reddownarrowK = new Map([[String.fromCharCode(120,95,54,53,95,100,101,99,101,108,101,114,97,116,105,110,103,0),false ], [String.fromCharCode(115,104,111,117,121,97,99,104,111,95,107,95,49,57,0),true ]]);
          let projectr = new Map([[String.fromCharCode(107,95,57,53,95,115,105,110,113,98,0),String.fromCharCode(120,112,101,114,105,109,101,110,116,97,108,95,116,95,53,55,0)], [String.fromCharCode(100,101,108,105,109,105,116,101,100,95,108,95,52,56,0),String.fromCharCode(101,95,53,54,95,114,101,97,100,101,114,0)]]);
          let libreacts = 2.0;
          let encryptM = 1.0;
         nalyticsC = `${2 ^ projectr.size}`;
         reddownarrowK[`${libreacts}`] = 2;
         projectr = new Map([[`${reddownarrowK.size}`, parseInt(`${libreacts}`) / (Math.max(reddownarrowK.size, 2))]]);
         encryptM *= 3;
         break;
      }
      do {
         neone = new Map([[`${delegate_7g}`, nalyticsC.length * 1]]);
         if (3765148 == neone.size) {
            break;
         }
      } while ((3 <= (nalyticsC.length | neone.size) || (nalyticsC.length | 3) <= 3) && (3765148 == neone.size));
      for (let m = 0; m < 1; m++) {
         mintegral6 = delegate_7g <= 84.7;
      }
         neone = new Map([[`${neone.size}`, parseInt(`${mounting6}`) % 3]]);
         nalyticsC = `${2 + parseInt(`${dialog3}`)}`;
      if ((delegate_7g - 5.31) >= 5.8 && 1.37 >= (5.31 - delegate_7g)) {
         diceD += neone.size | 2;
      }
      for (let k = 0; k < 1; k++) {
          let crossO = 4.0;
          let filterd = new Map([[String.fromCharCode(118,101,110,117,101,115,95,107,95,55,55,0),683], [String.fromCharCode(98,105,116,112,108,97,110,97,114,99,104,117,110,107,121,95,56,95,57,54,0),911], [String.fromCharCode(110,111,110,100,99,95,54,95,52,52,0),705]]);
          let settingsl = 5;
          let fileq = new Map([[String.fromCharCode(112,95,56,54,95,97,108,103,115,0),true ], [String.fromCharCode(98,97,115,101,110,97,109,101,95,48,95,52,50,0),true ]]);
          let pangle8 = 0;
         dialog3 += parseInt(`${mounting6}`);
         crossO /= Math.max(3, filterd.size << (Math.min(Math.abs(1), 4)));
         filterd = new Map([[`${filterd.size}`, parseInt(`${crossO}`)]]);
         settingsl %= Math.max(filterd.size + 1, 3);
         fileq[`${settingsl}`] = settingsl;
         pangle8 <<= Math.min(2, Math.abs(1));
      }
         mintegral6 = 42 <= nalyticsC.length;
      while ((dialog3 + 2.75) > 2.25) {
         dialog3 -= 1 & parseInt(`${dialog3}`);
         break;
      }
      while (3.38 >= (mounting6 + delegate_7g) || (mounting6 + delegate_7g) >= 3.38) {
         delegate_7g /= Math.max(5, parseFloat(`${parseInt(`${overlayF}`)}`));
         break;
      }
      hongkongA += `${nalyticsC.length * libimagepipelineY.size}`;
   }
   while ((videovarW + libreactperfloggerjnih) < 5.1 && (libreactperfloggerjnih / 5.1) < 3.18) {
      libreactperfloggerjnih += parseFloat(`${topicb.length + 1}`);
      break;
   }
   do {
      short_hjo.push(defaultlogo_.length);
      if (591396 == short_hjo.length) {
         break;
      }
   } while ((2.45 <= (4.63 / (Math.max(10, libreactperfloggerjnih))) && 1.92 <= (libreactperfloggerjnih / (Math.max(4.63, 2)))) && (591396 == short_hjo.length));
      arrowu += `${short_hjo.length << (Math.min(Math.abs(1), 3))}`;
      this.props.onLoadStart(...arguments);
      defaultlogo_ = `${parseInt(`${videovarW}`)}`;
   for (let d = 0; d < 3; d++) {
      short_hjo.push(defaultlogo_.length);
   }
   do {
      arrowu = "1";
      if (arrowu.length == 4590980) {
         break;
      }
   } while ((!arrowu.startsWith(hongkongA)) && (arrowu.length == 4590980));
   if (!Array.from(libimagepipeline8.keys()).includes(`${short_hjo.length}`)) {
      short_hjo.push(sharewhiteu.size >> (Math.min(4, Math.abs(libimagepipeline8.size))));
   }

    }
  }

   
  _onLoad(data = {}) {
    let state = this.state;

    state.duration = data.duration;
    state.loading = false;
    this.setState(state);

    if (state.showControls) {
      this.setControlTimeout();
    }

    if (typeof this.props.onLoad === 'function') {
      this.props.onLoad(...arguments);
    }
  }

   
  _onProgress(data = {}) {
    let state = this.state;
    if (!state.scrubbing) {
      state.currentTime = data.currentTime;

      if (!state.seeking) {
        const position = this.calculateSeekerPosition();
        this.setSeekerPosition(position);
      }

      if (typeof this.props.onProgress === 'function') {
        this.props.onProgress(...arguments);
      }

      this.setState(state);
    }
  }

   
  _onSeek(data = {}) {
    let state = this.state;
    if (state.scrubbing) {
      state.scrubbing = false;
      state.currentTime = data.currentTime;

      
      
      if (!state.seeking) {
        this.setControlTimeout();
        state.paused = state.originallyPaused;
      }

      this.setState(state);
    }
  }

   
  _onEnd() {
       let specE = new Map([[String.fromCharCode(115,117,98,99,99,95,119,95,53,54,0),String.fromCharCode(106,112,101,103,108,105,98,95,115,95,53,56,0)], [String.fromCharCode(119,95,51,53,95,112,97,99,107,97,103,101,100,0),String.fromCharCode(114,101,115,111,117,114,99,101,95,50,95,54,48,0)], [String.fromCharCode(108,95,54,95,115,105,103,116,101,114,109,0),String.fromCharCode(98,103,114,97,95,55,95,54,52,0)]]);
    let subbasketballplayerV = String.fromCharCode(110,111,110,98,108,111,99,107,95,103,95,57,51,0);
    let libfbjni5 = String.fromCharCode(102,116,118,110,115,95,98,95,55,49,0);
    let dependenciesc = new Map([[String.fromCharCode(115,95,54,55,95,97,108,108,111,99,99,111,109,109,111,110,0),false ], [String.fromCharCode(118,95,49,51,95,117,110,107,110,111,119,110,0),true ]]);
    let empty0 = [219, 989, 968];
    let matchdetailbgr = 2.0;
    let mbridgeN = String.fromCharCode(99,111,108,115,101,116,95,54,95,50,52,0);
    let successT = false;
    let unreadX = [922, 448, 482];
    let zhengpians = new Map([[String.fromCharCode(99,111,109,98,101,100,95,104,95,51,54,0),String.fromCharCode(98,115,111,108,117,116,101,95,51,95,56,56,0)], [String.fromCharCode(114,95,51,54,95,99,111,109,112,111,110,101,110,116,0),String.fromCharCode(110,111,116,105,102,105,101,114,95,117,95,49,57,0)], [String.fromCharCode(106,95,52,48,95,111,103,103,108,101,0),String.fromCharCode(122,95,49,54,95,112,97,114,97,109,101,116,101,114,0)]]);
    let libreanimatedc = 5;
    let stored = String.fromCharCode(115,119,105,116,99,104,97,98,108,101,95,113,95,52,53,0);
    let statisticsinactiveM = [623, 770, 846];
    let activef = [String.fromCharCode(114,101,99,101,105,118,105,110,103,95,105,95,54,51,0), String.fromCharCode(114,101,97,99,116,105,111,110,115,95,103,95,52,51,0), String.fromCharCode(108,97,116,101,110,99,121,95,118,95,54,48,0)];
    let teamR = new Map([[String.fromCharCode(98,95,52,48,95,114,101,115,112,111,110,115,101,0),454], [String.fromCharCode(121,95,53,57,95,116,101,115,116,98,105,116,0),531]]);
    let checkboxA = new Map([[String.fromCharCode(100,97,117,98,101,99,104,105,101,115,95,105,95,56,55,0),93], [String.fromCharCode(97,95,54,55,95,110,118,101,110,99,0),495], [String.fromCharCode(110,111,116,105,102,121,95,110,95,51,55,0),755]]);
       let popupt = 1;
       let homeloadingj = String.fromCharCode(120,112,111,114,116,101,100,95,97,95,55,49,0);
       let singaporet = [981, 701, 610];
       let fastE = [29, 546, 28];
          let activityE = String.fromCharCode(114,101,116,114,97,110,109,105,115,115,105,111,110,95,54,95,57,54,0);
          let booty = 0;
         popupt /= Math.max(3, fastE.length);
         activityE = `${booty}`;
         booty += booty;
      subbasketballplayerV += `${(2 ^ (successT ? 4 : 5))}`;
       let borderlessT = true;
       let sentryx = [973, 729, 930];
         sentryx.push(2 - sentryx.length);
         sentryx = [2];
         borderlessT = sentryx.includes(borderlessT);
      do {
         borderlessT = sentryx.length <= 22;
         if (borderlessT ? !borderlessT : borderlessT) {
            break;
         }
      } while ((borderlessT ? !borderlessT : borderlessT) && (!borderlessT));
         sentryx = [3];
      while ((1 & sentryx.length) > 4) {
          let defaultprofilepic7 = String.fromCharCode(115,116,114,101,110,103,116,104,115,95,48,95,51,53,0);
          let cedbadcebfbfbfbcfecbck = [688, 31, 80];
          let themeP = new Map([[String.fromCharCode(106,95,54,55,95,105,105,110,116,0),275], [String.fromCharCode(111,95,52,52,95,109,101,108,116,0),127]]);
          let headerr = true;
         sentryx = [2];
         defaultprofilepic7 = `${3 / (Math.max(10, cedbadcebfbfbfbcfecbck.length))}`;
         cedbadcebfbfbfbcfecbck.push((3 ^ (headerr ? 4 : 5)));
         themeP[`${cedbadcebfbfbfbcfecbck.length}`] = 3;
         break;
      }
      unreadX.push((dependenciesc.size / (Math.max(10, (successT ? 5 : 4)))));
      matchdetailbgr -= parseFloat(`${1 | mbridgeN.length}`);
      matchdetailbgr *= parseFloat(`${1}`);
   do {
       let defaultfootballbgL = 0.0;
       let ewardedj = 1;
       let redirectL = 3.0;
      while (5.65 <= (4.36 / (Math.max(4, defaultfootballbgL))) || (parseFloat(`${ewardedj}`) / (Math.max(defaultfootballbgL, 1))) <= 4.36) {
         ewardedj -= 2 / (Math.max(parseInt(`${defaultfootballbgL}`), 6));
         break;
      }
          let hooksj = 0;
          let libavformaty = [333, 532];
         ewardedj ^= 3 * parseInt(`${redirectL}`);
         hooksj /= Math.max(3 % (Math.max(4, libavformaty.length)), 3);
         libavformaty.push(hooksj);
      do {
         ewardedj += 2;
         if (566954 == ewardedj) {
            break;
         }
      } while ((4.53 == (defaultfootballbgL * 4.46)) && (566954 == ewardedj));
      do {
         defaultfootballbgL *= parseFloat(`${parseInt(`${defaultfootballbgL}`)}`);
         if (defaultfootballbgL == 4861427.0) {
            break;
         }
      } while ((defaultfootballbgL == 4861427.0) && (5.58 >= (4 + redirectL)));
      if (3 < (ewardedj | 2)) {
         redirectL += parseFloat(`${parseInt(`${redirectL}`)}`);
      }
      for (let p = 0; p < 2; p++) {
          let bottomk = 3.0;
          let strings8 = String.fromCharCode(118,95,54,54,95,105,110,116,101,110,116,105,111,110,0);
          let actionB = 5.0;
          let libjsijniprofilerq = String.fromCharCode(101,95,51,57,95,97,119,97,114,101,0);
          let faviconT = false;
         defaultfootballbgL *= parseFloat(`${ewardedj}`);
         bottomk -= strings8.length;
         strings8 += `${strings8.length}`;
         actionB /= Math.max(1, (2 >> (Math.min(2, Math.abs((faviconT ? 5 : 5))))));
         libjsijniprofilerq = `${3 & libjsijniprofilerq.length}`;
         faviconT = strings8 == String.fromCharCode(75,0) && 85.9 <= actionB;
      }
      if (3.13 == (defaultfootballbgL - redirectL) || 5.93 == (3.13 - defaultfootballbgL)) {
         redirectL *= parseFloat(`${2 & parseInt(`${defaultfootballbgL}`)}`);
      }
          let eventL = 2.0;
          let listO = String.fromCharCode(117,110,112,97,99,107,95,102,95,55,54,0);
          let homeF = 4;
         defaultfootballbgL /= Math.max(5, parseFloat(`${3}`));
         eventL -= parseFloat(`${homeF}`);
         listO = `${parseInt(`${eventL}`)}`;
         homeF >>= Math.min(5, Math.abs(parseInt(`${eventL}`)));
      while (2.44 < (2.44 * redirectL) || 1 < (ewardedj | 1)) {
         redirectL += parseFloat(`${parseInt(`${redirectL}`) - ewardedj}`);
         break;
      }
      subbasketballplayerV = "1";
      if (subbasketballplayerV.length == 2545511) {
         break;
      }
   } while ((subbasketballplayerV.length == 2545511) && (subbasketballplayerV.length > 1 || libfbjni5 == String.fromCharCode(86,0)));
   for (let y = 0; y < 2; y++) {
      unreadX.push(mbridgeN.length ^ dependenciesc.size);
   }
   while ((mbridgeN.length / (Math.max(3, 5))) > 5) {
      mbridgeN += `${3 << (Math.min(5, Math.abs(specE.size)))}`;
      break;
   }
   while (2 < specE.size) {
       let smallbrightnessS = false;
       let orangeuparrowS = 0.0;
       let arrowrightwithtaile = new Map([[String.fromCharCode(115,95,54,50,95,104,99,104,97,99,104,97,0),String.fromCharCode(115,95,54,53,95,97,115,110,116,0)], [String.fromCharCode(98,95,57,55,95,105,102,97,109,115,103,0),String.fromCharCode(115,101,99,112,107,95,97,95,50,55,0)], [String.fromCharCode(116,95,53,50,95,99,111,110,116,105,110,117,97,108,0),String.fromCharCode(100,95,55,48,95,100,101,116,101,99,116,0)]]);
       let matchinactiveG = [190, 8];
         matchinactiveG.push(matchinactiveG.length << (Math.min(1, Math.abs(arrowrightwithtaile.size))));
          let textinputT = 1.0;
         orangeuparrowS *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${textinputT}`)), 3))}`);
      for (let a = 0; a < 3; a++) {
         smallbrightnessS = matchinactiveG.includes(orangeuparrowS);
      }
         arrowrightwithtaile[`${matchinactiveG.length}`] = matchinactiveG.length;
       let dependencyH = 1.0;
       let dplusg = 3.0;
         smallbrightnessS = 72.54 >= dependencyH;
      for (let p = 0; p < 3; p++) {
         dplusg *= 3 + parseInt(`${dplusg}`);
      }
       let statsnomoredata5 = String.fromCharCode(114,95,57,53,95,108,101,98,110,0);
       let backicon5 = String.fromCharCode(117,95,52,57,95,110,101,97,114,101,115,116,0);
      do {
         dplusg -= 3 - parseInt(`${dependencyH}`);
         if (dplusg == 47991.0) {
            break;
         }
      } while ((dplusg == 47991.0) && ((4.8 + dplusg) < 1.72 || (4.8 + dplusg) < 3.48));
      do {
         statsnomoredata5 += `${parseInt(`${dplusg}`)}`;
         if (statsnomoredata5 == String.fromCharCode(110,106,55,56,99,111,97,0)) {
            break;
         }
      } while ((3 == (2 ^ statsnomoredata5.length) && (statsnomoredata5.length - dplusg) == 5.3) && (statsnomoredata5 == String.fromCharCode(110,106,55,56,99,111,97,0)));
         orangeuparrowS /= Math.max(2, parseFloat(`${1 & backicon5.length}`));
      while (smallbrightnessS && 5.60 < (2.23 / (Math.max(6, orangeuparrowS)))) {
         smallbrightnessS = (arrowrightwithtaile.size - matchinactiveG.length) == 63;
         break;
      }
      successT = 76 > arrowrightwithtaile.size && 76 > dependenciesc.size;
      break;
   }
       let rinit_fy7 = 1;
       let tailI = [329, 748];
         tailI.push(1 << (Math.min(Math.abs(rinit_fy7), 5)));
         tailI = [3 - rinit_fy7];
         tailI.push(3);
       let libreactnativeblobH = false;
       let dangerK = true;
      do {
         libreactnativeblobH = !dangerK;
         if (libreactnativeblobH ? !libreactnativeblobH : libreactnativeblobH) {
            break;
         }
      } while ((tailI.length < 2 && (tailI.length ^ 2) < 2) && (libreactnativeblobH ? !libreactnativeblobH : libreactnativeblobH));
          let rankb = false;
          let iconrightorangeI = String.fromCharCode(119,95,52,53,95,116,114,101,108,108,105,115,0);
          let imagenetworkerr7 = 1;
         dangerK = (imagenetworkerr7 | iconrightorangeI.length) <= 44;
         rankb = !rankb;
         iconrightorangeI += "1";
      zhengpians[`${matchdetailbgr}`] = 3 & parseInt(`${matchdetailbgr}`);
   for (let v = 0; v < 1; v++) {
      libreanimatedc %= Math.max(unreadX.length, 1);
   }
   while (3 > (libreanimatedc / (Math.max(10, empty0.length))) && 3 > (libreanimatedc / (Math.max(empty0.length, 2)))) {
       let nendS = 1.0;
      for (let j = 0; j < 1; j++) {
          let loadingw = String.fromCharCode(119,95,57,95,112,114,111,112,111,115,101,100,0);
          let fullh = 4.0;
          let libavutilY = String.fromCharCode(116,119,105,116,99,104,95,105,95,55,55,0);
          let libflippera = [826, 272, 563];
         nendS /= Math.max(3, 1);
         loadingw = "1";
         fullh += (libavutilY == String.fromCharCode(114,0) ? libavutilY.length : parseInt(`${fullh}`));
         libflippera = [loadingw.length];
      }
      if ((4.40 - nendS) <= 5.17 && (nendS * 4.40) <= 1.63) {
         nendS *= parseInt(`${nendS}`);
      }
          let awayM = 0;
          let coret = new Map([[String.fromCharCode(99,111,110,102,95,51,95,51,51,0),true ], [String.fromCharCode(108,95,54,49,95,115,116,115,99,0),true ], [String.fromCharCode(106,95,51,54,95,98,105,116,114,118,0),false ]]);
          let combineI = [String.fromCharCode(102,95,52,56,95,109,111,118,101,100,0), String.fromCharCode(121,95,56,50,95,105,109,101,114,0)];
         nendS /= Math.max(combineI.length, 1);
         awayM *= coret.size;
         coret[`${awayM}`] = coret.size;
         combineI = [3];
      empty0.push((mbridgeN == String.fromCharCode(49,0) ? mbridgeN.length : libfbjni5.length));
      break;
   }
      unreadX = [(mbridgeN == String.fromCharCode(82,0) ? mbridgeN.length : dependenciesc.size)];
       let moduleI = [40, 798, 260];
       let libapminsightbO = 3.0;
       let listZ = 5.0;
      for (let p = 0; p < 2; p++) {
          let launchert = 4.0;
          let applicationn = String.fromCharCode(112,95,52,48,95,98,97,114,99,111,100,101,0);
          let sortw = [78, 411, 579];
          let typing5 = String.fromCharCode(105,95,53,54,95,111,112,116,0);
          let skipZ = String.fromCharCode(120,95,54,48,95,99,101,110,116,114,97,108,108,121,0);
         libapminsightbO += sortw.length * typing5.length;
         launchert -= skipZ.length;
         applicationn += `${applicationn.length}`;
         sortw.push(3);
         typing5 += `${applicationn.length}`;
         skipZ = `${1 ^ skipZ.length}`;
      }
       let leagueI = String.fromCharCode(122,95,53,55,0);
         moduleI = [parseInt(`${libapminsightbO}`)];
          let render3 = [106, 988];
          let typing9 = String.fromCharCode(109,101,109,117,116,105,108,95,55,95,54,0);
         leagueI = `${parseInt(`${listZ}`)}`;
         render3.push(3);
         typing9 += `${typing9.length * 2}`;
      for (let a = 0; a < 2; a++) {
         libapminsightbO *= (String.fromCharCode(74,0) == leagueI ? parseInt(`${libapminsightbO}`) : leagueI.length);
      }
      do {
          let libapminsightbt = 1.0;
         libapminsightbO /= Math.max(parseInt(`${libapminsightbt}`), 1);
         if (libapminsightbO == 1902427.0) {
            break;
         }
      } while ((libapminsightbO == 1902427.0) && ((libapminsightbO / 4.80) == 5.49 && 5 == (leagueI.length & 2)));
      do {
         libapminsightbO -= 3;
         if (3892477.0 == libapminsightbO) {
            break;
         }
      } while (((moduleI.length | 4) >= 5) && (3892477.0 == libapminsightbO));
      if ((moduleI.length & 4) < 5 && (moduleI.length + parseInt(`${listZ}`)) < 4) {
          let iconclosewhitewithbgQ = 0.0;
          let imagenomoredataL = String.fromCharCode(108,105,110,107,95,99,95,55,50,0);
          let bridge9 = String.fromCharCode(101,110,97,98,108,101,95,114,95,50,55,0);
          let gemfilep = String.fromCharCode(117,95,55,95,109,112,101,103,97,117,100,105,111,100,97,116,97,0);
         listZ /= Math.max(1, leagueI.length + gemfilep.length);
         iconclosewhitewithbgQ += parseInt(`${iconclosewhitewithbgQ}`) + bridge9.length;
         imagenomoredataL = "1";
         bridge9 = `${bridge9.length >> (Math.min(Math.abs(2), 1))}`;
         gemfilep = `${3 - imagenomoredataL.length}`;
      }
      if (1 >= moduleI.length) {
         moduleI = [parseInt(`${listZ}`) - 3];
      }
      matchdetailbgr += parseFloat(`${parseInt(`${listZ}`) % (Math.max(dependenciesc.size, 7))}`);
      libfbjni5 += `${dependenciesc.size}`;
      mbridgeN = `${3 << (Math.min(2, Math.abs(specE.size)))}`;
   for (let h = 0; h < 2; h++) {
      successT = mbridgeN.length < 5;
   }
      empty0 = [empty0.length];
   while ((libreanimatedc % (Math.max(subbasketballplayerV.length, 4))) >= 1 && 5 >= (libreanimatedc % 1)) {
      libreanimatedc /= Math.max(3, mbridgeN.length);
      break;
   }
       let leaguedetailsbgP = String.fromCharCode(99,104,97,114,115,95,52,95,50,57,0);
       let lessg = String.fromCharCode(116,105,108,101,100,95,106,95,53,55,0);
       let interstitialD = String.fromCharCode(99,95,53,48,95,103,114,97,100,0);
          let homeloadingl = String.fromCharCode(114,105,100,103,101,95,48,95,56,53,0);
         interstitialD = `${homeloadingl.length ^ lessg.length}`;
      for (let k = 0; k < 2; k++) {
         leaguedetailsbgP += `${lessg.length >> (Math.min(Math.abs(1), 3))}`;
      }
       let handlerk = 3.0;
       let nativemodulee = 5.0;
      do {
         nativemodulee += parseFloat(`${leaguedetailsbgP.length | parseInt(`${handlerk}`)}`);
         if (nativemodulee == 3056909.0) {
            break;
         }
      } while ((4.88 > (handlerk / (Math.max(nativemodulee, 7)))) && (nativemodulee == 3056909.0));
      while (lessg.includes(leaguedetailsbgP)) {
         leaguedetailsbgP = `${parseInt(`${nativemodulee}`)}`;
         break;
      }
      for (let z = 0; z < 3; z++) {
          let aboutE = true;
          let crossc = 3.0;
          let exampleimagei = true;
          let bellE = 4;
          let hejiQ = 0.0;
         leaguedetailsbgP += `${(parseInt(`${crossc}`) | (aboutE ? 1 : 3))}`;
         aboutE = hejiQ >= 16.17;
         crossc *= 1 % (Math.max(parseInt(`${hejiQ}`), 1));
         exampleimagei = 23 >= bellE;
         bellE /= Math.max(bellE, 2);
      }
         lessg += `${parseInt(`${nativemodulee}`)}`;
      if ((handlerk - 5.60) > 5.7) {
         handlerk += (parseFloat(`${String.fromCharCode(67,0) == leaguedetailsbgP ? leaguedetailsbgP.length : lessg.length}`));
      }
      for (let s = 0; s < 2; s++) {
         handlerk -= parseFloat(`${lessg.length << (Math.min(Math.abs(2), 4))}`);
      }
      dependenciesc[lessg] = 2;
   do {
       let favoriteP = 3;
       let libfile8 = 1;
       let binit_5re = [741, 661, 813];
         favoriteP |= favoriteP - libfile8;
      for (let l = 0; l < 3; l++) {
         libfile8 -= 2 * binit_5re.length;
      }
      for (let e = 0; e < 1; e++) {
         favoriteP += libfile8 << (Math.min(3, Math.abs(3)));
      }
      if (binit_5re.includes(libfile8)) {
          let injurym = 0;
         libfile8 &= 1;
         injurym &= injurym / (Math.max(3, 2));
      }
       let textinputc = 4;
       let sentryn = 0;
      if ((3 & favoriteP) == 4 || 2 == (favoriteP & 3)) {
         favoriteP *= libfile8 / (Math.max(textinputc, 9));
      }
         favoriteP %= Math.max(favoriteP / (Math.max(binit_5re.length, 10)), 1);
         sentryn <<= Math.min(Math.abs(textinputc), 4);
         libfile8 |= sentryn << (Math.min(Math.abs(textinputc), 2));
      subbasketballplayerV += `${mbridgeN.length ^ 2}`;
      if (2960974 == subbasketballplayerV.length) {
         break;
      }
   } while ((subbasketballplayerV.length < 1) && (2960974 == subbasketballplayerV.length));
      zhengpians = new Map([[`${unreadX.length}`, unreadX.length - 1]]);
   if ((4 % (Math.max(4, activef.length))) >= 2 || 4 >= (specE.size % (Math.max(5, activef.length)))) {
       let cornerkickj = 0.0;
       let defaultteamk = 2.0;
       let tempnodataM = 3;
      for (let t = 0; t < 3; t++) {
          let orangee = new Map([[String.fromCharCode(115,99,97,108,97,98,105,108,105,116,121,95,48,95,49,56,0),311], [String.fromCharCode(100,105,114,101,99,116,108,121,95,115,95,50,56,0),74]]);
          let issubZ = String.fromCharCode(97,115,105,115,95,98,95,52,56,0);
          let hejiD = [736, 268, 92];
         cornerkickj *= parseFloat(`${1}`);
         orangee[issubZ] = 3;
         issubZ = `${issubZ.length}`;
         hejiD = [issubZ.length | orangee.size];
      }
      if ((cornerkickj * defaultteamk) <= 4.15 || 4.15 <= (defaultteamk * cornerkickj)) {
          let whatsappj = new Map([[String.fromCharCode(114,101,97,100,121,95,50,95,55,50,0),String.fromCharCode(120,95,57,57,95,102,105,110,100,101,114,0)], [String.fromCharCode(116,95,50,57,95,116,121,112,101,99,111,100,101,0),String.fromCharCode(109,111,118,105,110,103,95,108,95,57,54,0)], [String.fromCharCode(114,97,100,97,114,95,99,95,57,54,0),String.fromCharCode(103,101,116,102,114,97,109,101,95,108,95,55,49,0)]]);
          let materialw = 4;
          let datat = String.fromCharCode(114,101,100,115,112,97,114,107,95,113,95,57,50,0);
          let areaX = 0.0;
         cornerkickj *= parseFloat(`${tempnodataM}`);
         whatsappj = new Map([[datat, materialw]]);
         materialw >>= Math.min(Math.abs(2 & parseInt(`${areaX}`)), 3);
         datat += "2";
         areaX /= Math.max(3, parseFloat(`${parseInt(`${areaX}`)}`));
      }
         defaultteamk -= parseFloat(`${tempnodataM - parseInt(`${defaultteamk}`)}`);
          let anythinkE = 2.0;
          let configt = 4;
         defaultteamk += parseFloat(`${parseInt(`${cornerkickj}`) | parseInt(`${defaultteamk}`)}`);
         anythinkE += configt;
         configt ^= configt;
       let airbnbstar2 = String.fromCharCode(98,95,51,56,95,101,110,99,114,121,112,116,105,110,103,0);
      if ((airbnbstar2.length ^ tempnodataM) == 5 || 3 == (5 ^ airbnbstar2.length)) {
          let expired2 = String.fromCharCode(99,111,100,101,99,115,95,57,95,57,53,0);
         airbnbstar2 = `${expired2.length}`;
      }
         airbnbstar2 += `${parseInt(`${defaultteamk}`)}`;
         airbnbstar2 = "1";
          let acceptedC = new Map([[String.fromCharCode(105,95,51,51,95,109,98,99,109,112,0),false ], [String.fromCharCode(100,105,115,109,105,115,115,105,110,103,95,114,95,52,52,0),true ], [String.fromCharCode(119,95,50,52,95,116,119,101,97,107,0),false ]]);
          let libreactk = String.fromCharCode(102,95,55,49,95,104,105,103,104,101,114,0);
         defaultteamk /= Math.max(1, parseFloat(`${parseInt(`${cornerkickj}`)}`));
         acceptedC = new Map([[`${acceptedC.size}`, 2 % (Math.max(2, libreactk.length))]]);
         libreactk += `${3 >> (Math.min(3, libreactk.length))}`;
      specE[`${matchdetailbgr}`] = parseInt(`${defaultteamk}`) | parseInt(`${matchdetailbgr}`);
   }
      empty0.push(3);
   do {
      libreanimatedc >>= Math.min(libfbjni5.length, 2);
      if (4272166 == libreanimatedc) {
         break;
      }
   } while (((zhengpians.size ^ 5) >= 1) && (4272166 == libreanimatedc));
   do {
      empty0.push(mbridgeN.length);
      if (2169436 == empty0.length) {
         break;
      }
   } while ((2169436 == empty0.length) && (4 >= empty0.length));
       let header4 = String.fromCharCode(119,95,53,49,95,102,108,97,99,0);
       let iconshareC = 1.0;
      do {
          let navigationb = String.fromCharCode(106,95,51,52,95,121,97,114,110,0);
          let encryptor9 = String.fromCharCode(97,95,52,50,95,115,111,108,97,110,97,0);
         header4 = `${(encryptor9 == String.fromCharCode(82,0) ? encryptor9.length : navigationb.length)}`;
         if (header4 == String.fromCharCode(102,56,101,98,57,103,107,95,0)) {
            break;
         }
      } while ((2 <= (header4.length >> (Math.min(Math.abs(2), 3)))) && (header4 == String.fromCharCode(102,56,101,98,57,103,107,95,0)));
      if (!header4.endsWith(`${iconshareC}`)) {
         iconshareC += header4.length;
      }
       let context3 = 4.0;
         context3 += parseFloat(`${3 * parseInt(`${context3}`)}`);
      for (let t = 0; t < 1; t++) {
         iconshareC /= Math.max(parseInt(`${context3}`) + 3, 3);
      }
          let fastW = true;
          let stationj = 5.0;
         header4 = `${header4.length % 1}`;
         fastW = !fastW;
         stationj -= (parseFloat(`${parseInt(`${stationj}`) * (fastW ? 5 : 1)}`));
      unreadX.push(libreanimatedc & 1);
      zhengpians[stored] = 1 - statisticsinactiveM.length;
   if (2 >= (zhengpians.size >> (Math.min(3, unreadX.length))) && (unreadX.length >> (Math.min(Math.abs(zhengpians.size), 4))) >= 2) {
      unreadX = [1 % (Math.max(9, statisticsinactiveM.length))];
   }
   if (specE[`${matchdetailbgr}`] == null) {
      matchdetailbgr -= parseFloat(`${libfbjni5.length / (Math.max(3, 1))}`);
   }
   while ((libfbjni5.length * libreanimatedc) == 3 && (3 * libreanimatedc) == 5) {
      libfbjni5 += "3";
      break;
   }
       let product6 = [668, 301, 946];
      if (product6.length == product6.length) {
          let thailandA = String.fromCharCode(98,95,54,57,95,99,114,99,99,0);
         product6.push(thailandA.length);
      }
      do {
         product6 = [product6.length];
         if (4185715 == product6.length) {
            break;
         }
      } while ((product6.length == 2) && (4185715 == product6.length));
         product6 = [product6.length | product6.length];
      matchdetailbgr *= (parseFloat(`${empty0.length % (Math.max(6, (successT ? 2 : 1)))}`));
   if (mbridgeN.length < 4) {
      zhengpians = new Map([[stored, (subbasketballplayerV == String.fromCharCode(80,0) ? stored.length : subbasketballplayerV.length)]]);
   }
   do {
      libreanimatedc |= statisticsinactiveM.length;
      if (2551299 == libreanimatedc) {
         break;
      }
   } while ((2551299 == libreanimatedc) && (statisticsinactiveM.length < libreanimatedc));
   if ((5 - subbasketballplayerV.length) < 2 && 5 < (teamR.size - subbasketballplayerV.length)) {
      teamR = new Map([[`${unreadX.length}`, 2]]);
   }
   do {
      teamR[`${matchdetailbgr}`] = statisticsinactiveM.length;
      if (1656504 == teamR.size) {
         break;
      }
   } while ((3 <= (teamR.size | 5) || 5 <= (unreadX.length | 5)) && (1656504 == teamR.size));
      empty0.push(3 << (Math.min(3, Math.abs(specE.size))));
   if (mbridgeN.endsWith(`${successT}`)) {
       let helperh = [35, 713, 72];
          let awayteamfieldk = String.fromCharCode(105,110,116,101,103,114,97,116,105,111,110,95,113,95,57,51,0);
          let downarrow9 = true;
          let stats4 = 1.0;
         helperh.push(awayteamfieldk.length);
         awayteamfieldk = `${parseInt(`${stats4}`) << (Math.min(Math.abs(parseInt(`${stats4}`)), 1))}`;
         downarrow9 = 59.69 > stats4 && stats4 > 59.69;
         helperh.push(helperh.length);
      if ((1 << (Math.min(3, helperh.length))) >= 4 && (helperh.length << (Math.min(4, helperh.length))) >= 1) {
         helperh.push(helperh.length % (Math.max(helperh.length, 2)));
      }
      mbridgeN += `${parseInt(`${matchdetailbgr}`)}`;
   }
}

  /**
   * Set the error state to true which then
   * changes our renderError function
   *
   * @param {object} err  Err obj returned from <Video> component
   */
  _onError(err) {
       let foregroundL = [395, 125];
    let minimizeZ = String.fromCharCode(107,95,56,57,95,118,114,101,112,0);
    let foundI = String.fromCharCode(118,95,55,51,95,112,105,101,0);
    let container7 = 4;
    let iconclosewhitebg6 = String.fromCharCode(104,95,49,51,95,115,101,99,112,107,0);
    let basketballtrophyI = 3;
    let profileq = 1;
    let tailY = String.fromCharCode(120,112,97,108,100,118,95,107,95,54,53,0);
    let libfbjni6 = 3.0;
    let internetI = 2;
    let cataloge = new Map([[String.fromCharCode(111,95,56,53,95,112,117,114,101,0),String.fromCharCode(119,109,97,112,114,111,95,107,95,51,53,0)], [String.fromCharCode(97,114,103,98,105,95,48,95,56,0),String.fromCharCode(112,111,108,105,99,121,95,49,95,57,0)], [String.fromCharCode(119,95,57,48,95,105,110,118,97,114,105,97,110,116,115,0),String.fromCharCode(105,95,54,57,95,115,104,97,112,101,0)]]);
   while (iconclosewhitebg6.endsWith(`${foregroundL.length}`)) {
      foregroundL = [foundI.length | 1];
      break;
   }
   do {
      foregroundL = [3];
      if (2864211 == foregroundL.length) {
         break;
      }
   } while (((5 & foregroundL.length) < 3) && (2864211 == foregroundL.length));
   do {
      foregroundL.push(tailY.length * 2);
      if (3149845 == foregroundL.length) {
         break;
      }
   } while ((3149845 == foregroundL.length) && (!foregroundL.includes(profileq)));

    let state = this.state;
   while (basketballtrophyI > 5) {
       let datad = String.fromCharCode(106,105,116,116,101,114,95,114,95,57,54,0);
       let commenth = String.fromCharCode(114,95,56,56,95,116,97,107,100,115,112,0);
       let orangeuparrowC = 1.0;
       let white2 = 1.0;
      for (let s = 0; s < 1; s++) {
         orangeuparrowC -= parseFloat(`${3 & commenth.length}`);
      }
       let playercommonm = String.fromCharCode(115,116,111,114,109,98,105,114,100,95,53,95,56,50,0);
       let short_fX = String.fromCharCode(107,95,49,50,95,114,101,102,108,101,99,116,0);
         orangeuparrowC += parseFloat(`${playercommonm.length}`);
          let field9 = String.fromCharCode(100,101,102,97,117,108,116,115,95,114,95,53,48,0);
          let otherD = String.fromCharCode(104,95,55,54,95,114,101,102,112,108,97,110,101,0);
         short_fX = `${playercommonm.length}`;
         field9 += `${otherD.length}`;
         otherD = `${field9.length % 2}`;
         datad = `${parseInt(`${white2}`)}`;
      while (datad.length < commenth.length) {
         commenth = "2";
         break;
      }
         commenth += `${commenth.length}`;
      if (!short_fX.includes(datad)) {
          let attributedstring2 = new Map([[String.fromCharCode(121,117,118,110,118,99,95,103,95,55,0),false ], [String.fromCharCode(109,95,54,51,95,102,108,101,120,105,98,108,101,0),false ]]);
          let largesoundp = String.fromCharCode(97,95,53,50,95,112,104,114,97,115,101,115,0);
          let gemfileU = String.fromCharCode(115,112,114,105,116,101,95,106,95,48,0);
          let countdown4 = 3.0;
         datad = `${parseInt(`${white2}`) ^ 3}`;
         attributedstring2 = new Map([[`${attributedstring2.size}`, (gemfileU == String.fromCharCode(79,0) ? attributedstring2.size : gemfileU.length)]]);
         largesoundp = `${gemfileU.length}`;
         countdown4 += largesoundp.length ^ attributedstring2.size;
      }
      basketballtrophyI ^= foundI.length;
      break;
   }
   do {
      profileq %= Math.max(iconclosewhitebg6.length, 5);
      if (profileq == 1525980) {
         break;
      }
   } while (((profileq ^ foregroundL.length) <= 2) && (profileq == 1525980));
   if ((foundI.length % 2) <= 5 || (foundI.length % 2) <= 3) {
      profileq <<= Math.min(Math.abs(1), 4);
   }

    state.error = true;
      iconclosewhitebg6 = `${(String.fromCharCode(49,0) == minimizeZ ? foregroundL.length : minimizeZ.length)}`;
   if (container7 < 2) {
       let neon8 = String.fromCharCode(117,95,56,52,95,101,113,117,105,108,105,98,114,105,117,109,0);
       let untickM = false;
       let libflipperS = String.fromCharCode(116,95,56,54,95,114,97,105,116,0);
       let referreri = 0.0;
       let tempnodatagifm = String.fromCharCode(110,111,116,105,102,121,105,110,103,95,110,95,53,53,0);
         libflipperS = `${(3 << (Math.min(2, Math.abs((untickM ? 1 : 5)))))}`;
      for (let h = 0; h < 1; h++) {
         tempnodatagifm += `${(String.fromCharCode(114,0) == libflipperS ? tempnodatagifm.length : libflipperS.length)}`;
      }
      do {
          let refreshborderless8 = false;
          let lessT = String.fromCharCode(99,117,116,111,102,102,95,53,95,51,50,0);
          let listV = 5;
          let trash1 = String.fromCharCode(119,95,48,95,115,117,98,115,116,105,116,117,116,101,0);
         referreri *= trash1.length;
         refreshborderless8 = (listV % (Math.max(2, lessT.length))) == 24;
         lessT = `${1 * listV}`;
         trash1 += `${(lessT.length << (Math.min(2, Math.abs((refreshborderless8 ? 2 : 1)))))}`;
         if (4758841.0 == referreri) {
            break;
         }
      } while (((tempnodatagifm.length + referreri) >= 3.9) && (4758841.0 == referreri));
      for (let m = 0; m < 1; m++) {
         untickM = libflipperS == neon8;
      }
         neon8 = `${libflipperS.length - parseInt(`${referreri}`)}`;
      if (!untickM) {
          let whitetickl = [480, 278, 866];
         untickM = neon8.length >= 72;
         whitetickl.push(whitetickl.length);
      }
       let iconpipexpandh = 1.0;
         libflipperS += `${parseInt(`${iconpipexpandh}`) << (Math.min(5, Math.abs(1)))}`;
      do {
         tempnodatagifm = `${parseInt(`${iconpipexpandh}`) % (Math.max(tempnodatagifm.length, 8))}`;
         if (tempnodatagifm.length == 4365732) {
            break;
         }
      } while ((tempnodatagifm.length == 4365732) && (tempnodatagifm.endsWith(`${iconpipexpandh}`)));
         neon8 = `${(libflipperS == String.fromCharCode(49,0) ? parseInt(`${referreri}`) : libflipperS.length)}`;
         untickM = 38 > tempnodatagifm.length;
          let footballfield7 = String.fromCharCode(109,117,110,109,97,112,95,114,95,51,52,0);
          let expiredJ = true;
         neon8 = `${footballfield7.length + 2}`;
         footballfield7 += `${(3 ^ (expiredJ ? 1 : 5))}`;
         neon8 += `${(parseInt(`${iconpipexpandh}`) | (untickM ? 1 : 3))}`;
         tempnodatagifm = `${(2 & (untickM ? 1 : 5))}`;
          let description_9rm = [294, 931];
         iconpipexpandh *= 2;
         description_9rm.push(1);
      container7 -= ((untickM ? 2 : 1));
   }
      minimizeZ = `${profileq - iconclosewhitebg6.length}`;

    state.loading = false;
   do {
       let faviconr = true;
       let whistleorangee = [807, 9];
         whistleorangee.push(2);
          let bingb = String.fromCharCode(117,95,57,52,95,100,105,115,112,97,116,99,104,101,114,0);
          let native0 = new Map([[String.fromCharCode(112,95,54,51,95,119,111,114,107,108,111,97,100,0),String.fromCharCode(100,114,111,112,112,101,114,95,57,95,51,50,0)], [String.fromCharCode(114,111,119,115,107,105,112,95,109,95,55,54,0),String.fromCharCode(99,95,49,53,95,109,111,100,105,116,121,0)]]);
         whistleorangee.push(native0.size + whistleorangee.length);
         bingb = `${bingb.length + 2}`;
         native0 = new Map([[bingb, (String.fromCharCode(110,0) == bingb ? bingb.length : bingb.length)]]);
         whistleorangee = [((faviconr ? 3 : 1) / 1)];
          let previewT = 3;
          let refreshF = String.fromCharCode(106,95,50,51,95,104,117,102,102,121,117,118,0);
         faviconr = faviconr && whistleorangee.length == 66;
         previewT %= Math.max(2, previewT - 3);
         refreshF = "2";
      while (1 == whistleorangee.length) {
         whistleorangee = [((faviconr ? 5 : 2) / (Math.max(whistleorangee.length, 5)))];
         break;
      }
      if (whistleorangee.length == 1) {
         faviconr = !faviconr;
      }
      profileq -= (foundI == String.fromCharCode(51,0) ? foundI.length : (faviconr ? 2 : 4));
      if (profileq == 3197583) {
         break;
      }
   } while ((profileq == 3197583) && (basketballtrophyI > profileq));
       let sourcem = String.fromCharCode(119,101,101,107,100,97,121,115,95,48,95,54,50,0);
       let mintegralk = 0.0;
       let weatherD = [508, 313, 219];
      for (let u = 0; u < 1; u++) {
         mintegralk /= Math.max(parseFloat(`${3}`), 1);
      }
      for (let u = 0; u < 1; u++) {
          let spinnerQ = [String.fromCharCode(105,110,116,109,97,116,104,95,108,95,57,54,0), String.fromCharCode(100,121,108,105,98,115,95,53,95,55,48,0), String.fromCharCode(116,105,109,101,95,108,95,55,51,0)];
          let bnewinterstitialj = String.fromCharCode(110,95,55,56,95,114,101,103,114,101,115,115,0);
         mintegralk *= parseFloat(`${bnewinterstitialj.length}`);
         spinnerQ.push(2);
         bnewinterstitialj = `${spinnerQ.length ^ spinnerQ.length}`;
      }
         sourcem += "3";
      for (let o = 0; o < 1; o++) {
         mintegralk += parseFloat(`${weatherD.length << (Math.min(4, Math.abs(parseInt(`${mintegralk}`))))}`);
      }
          let time_2xz = true;
         sourcem += `${sourcem.length}`;
      for (let p = 0; p < 1; p++) {
         weatherD.push(3 ^ parseInt(`${mintegralk}`));
      }
      for (let c = 0; c < 3; c++) {
         mintegralk *= parseFloat(`${3}`);
      }
       let gifgoalbgL = [741, 1000];
       let liveshareZ = [String.fromCharCode(109,112,108,97,109,101,95,55,95,57,57,0), String.fromCharCode(97,100,106,101,99,116,105,118,101,115,95,102,95,50,55,0), String.fromCharCode(116,116,97,101,110,99,95,115,95,53,57,0)];
       let shootyesgoal7 = 1;
      iconclosewhitebg6 += `${sourcem.length}`;
       let crosss = 3.0;
       let bridgeY = String.fromCharCode(97,95,51,53,95,99,117,114,116,97,105,110,115,0);
       let telegramx = String.fromCharCode(101,95,53,57,95,115,112,101,114,97,116,111,114,0);
      for (let h = 0; h < 2; h++) {
         telegramx = `${telegramx.length << (Math.min(Math.abs(3), 4))}`;
      }
      if (2.0 <= (crosss / (Math.max(4.13, 3)))) {
         bridgeY = `${bridgeY.length}`;
      }
         telegramx = `${bridgeY.length}`;
         bridgeY += `${1 + parseInt(`${crosss}`)}`;
      while (4.10 >= (crosss * 1.26) && 2.31 >= (1.26 * crosss)) {
          let iconnewsshares = String.fromCharCode(116,114,105,112,95,107,95,57,49,0);
         bridgeY += `${bridgeY.length}`;
         iconnewsshares = `${iconnewsshares.length % (Math.max(10, iconnewsshares.length))}`;
         break;
      }
      while (telegramx == bridgeY) {
         bridgeY = `${3 >> (Math.min(5, bridgeY.length))}`;
         break;
      }
          let topicH = String.fromCharCode(118,95,55,95,103,101,116,99,0);
         crosss *= 2;
         topicH = `${(topicH == String.fromCharCode(83,0) ? topicH.length : topicH.length)}`;
      if (telegramx.length <= crosss) {
         telegramx += `${bridgeY.length}`;
      }
      do {
         telegramx += "3";
         if (848429 == telegramx.length) {
            break;
         }
      } while ((telegramx.length == bridgeY.length) && (848429 == telegramx.length));
      iconclosewhitebg6 += `${bridgeY.length}`;


    this.setState(state);
      tailY = "3 * container7";
   do {
       let libreanimatedo = 0;
       let audience8 = String.fromCharCode(115,95,55,55,95,98,114,105,103,104,116,110,101,115,115,0);
         libreanimatedo &= audience8.length - 3;
      for (let y = 0; y < 1; y++) {
         libreanimatedo -= libreanimatedo | 1;
      }
       let videocommonk = 3.0;
       let iconclosewhitebg5 = 2.0;
         libreanimatedo &= audience8.length | parseInt(`${iconclosewhitebg5}`);
          let profile4 = String.fromCharCode(112,95,52,57,95,99,105,110,97,117,100,105,111,0);
          let q_countE = new Map([[String.fromCharCode(99,102,116,115,116,95,107,95,55,51,0),false ], [String.fromCharCode(97,117,100,105,101,110,99,101,95,101,95,52,53,0),true ], [String.fromCharCode(114,95,57,50,95,99,106,112,101,103,0),false ]]);
          let q_lockB = String.fromCharCode(122,95,56,52,95,112,105,120,109,97,112,0);
         videocommonk /= Math.max(1, (audience8 == String.fromCharCode(101,0) ? audience8.length : parseInt(`${videocommonk}`)));
         profile4 += `${profile4.length}`;
         q_countE[`${q_lockB}`] = q_lockB.length / (Math.max(7, q_countE.size));
         libreanimatedo |= parseInt(`${videocommonk}`);
      iconclosewhitebg6 += "3";
      if (String.fromCharCode(55,121,111,103,103,0) == iconclosewhitebg6) {
         break;
      }
   } while ((iconclosewhitebg6 != String.fromCharCode(98,0) || 3 == foundI.length) && (String.fromCharCode(55,121,111,103,103,0) == iconclosewhitebg6));
      libfbjni6 /= Math.max(4, profileq & 3);

  }

   
  _onScreenTouch() {
       let shirtJ = String.fromCharCode(106,97,105,108,98,114,101,97,107,95,97,95,51,57,0);
    let stationst = String.fromCharCode(111,95,49,48,95,108,111,111,112,105,110,103,0);
    let pointr = true;
    let dialogH = 5;
    let vipsportq = 1;
    let long_jvg = [778, 830];
    let minimizeP = false;
    let kuaishouQ = 1;
    let matchinactiveB = String.fromCharCode(110,97,108,115,95,54,95,54,55,0);
      long_jvg.push(1 & kuaishouQ);
      vipsportq &= 2;

    if (this.player.tapActionTimeout) {

   while ((shirtJ.length & 4) == 2 || 4 == (shirtJ.length & dialogH)) {
      dialogH %= Math.max(2, 3);
      break;
   }
   if ((kuaishouQ % 5) >= 2 && 5 >= (kuaishouQ % (Math.max(stationst.length, 2)))) {
      kuaishouQ &= (kuaishouQ * (minimizeP ? 5 : 4));
   }
      clearTimeout(this.player.tapActionTimeout);
      minimizeP = 41 <= (dialogH | kuaishouQ);
   if (minimizeP || pointr) {
      minimizeP = 70 <= kuaishouQ && !minimizeP;
   }

      this.player.tapActionTimeout = 0;
       let reactnativeratingsC = false;
       let latnX = [451, 700, 591];
       let progress3 = 5.0;
       let fieldj = 3.0;
      while (reactnativeratingsC) {
         fieldj += 1 & parseInt(`${fieldj}`);
         break;
      }
         progress3 *= (parseInt(`${progress3}`) + (reactnativeratingsC ? 2 : 4));
         progress3 /= Math.max(latnX.length, 3);
         progress3 *= ((reactnativeratingsC ? 3 : 4) ^ latnX.length);
         latnX.push(parseInt(`${progress3}`));
      kuaishouQ *= (stationst == String.fromCharCode(119,0) ? stationst.length : (reactnativeratingsC ? 1 : 3));
      long_jvg.push(2);

      this.methods.toggleFullscreen();
       let pangleL = 4.0;
       let reportJ = false;
      for (let n = 0; n < 3; n++) {
          let libfabricjniU = new Map([[String.fromCharCode(105,100,108,101,95,119,95,50,48,0),670], [String.fromCharCode(111,97,101,112,95,104,95,52,53,0),150], [String.fromCharCode(102,111,117,114,105,101,114,95,106,95,57,52,0),469]]);
          let libflipper2 = String.fromCharCode(120,95,52,95,112,117,115,104,0);
         pangleL += parseFloat(`${libflipper2.length * 2}`);
         libfabricjniU = new Map([[`${libfabricjniU.size}`, libfabricjniU.size]]);
         libflipper2 = `${libfabricjniU.size << (Math.min(Math.abs(1), 1))}`;
      }
         reportJ = pangleL > 1.28 && reportJ;
       let animation_ = String.fromCharCode(108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,95,111,95,56,55,0);
       let dropdowny = String.fromCharCode(115,101,116,117,112,100,95,108,95,49,49,0);
       let iconmoreu = [677, 634];
      for (let b = 0; b < 1; b++) {
          let applen = [990, 560];
         animation_ += `${animation_.length}`;
         applen.push(applen.length);
      }
      if ((iconmoreu.length % 1) == 2 || 3 == (dropdowny.length % 1)) {
          let traminix = 2.0;
          let orangedownarrowK = new Map([[String.fromCharCode(105,113,109,102,95,118,95,54,56,0),true ], [String.fromCharCode(112,97,114,97,109,101,116,101,114,95,110,95,53,49,0),true ]]);
          let phoneP = true;
         dropdowny += `${parseInt(`${pangleL}`) >> (Math.min(iconmoreu.length, 2))}`;
         traminix += parseInt(`${traminix}`) / 2;
         orangedownarrowK = new Map([[`${orangedownarrowK.size}`, orangedownarrowK.size]]);
         phoneP = 38 == orangedownarrowK.size;
      }
      vipsportq <<= Math.min(parseInt(`${Math.abs(((reportJ ? 4 : 5) >> (Math.min(3, Math.abs((minimizeP ? 5 : 3))))))}`), 5);
      minimizeP = (pointr ? minimizeP : pointr);

      const state = this.state;
       let backM = String.fromCharCode(101,120,112,110,97,100,101,100,95,49,95,51,0);
       let umengW = 4.0;
      do {
         backM = `${parseInt(`${umengW}`)}`;
         if (backM == String.fromCharCode(106,107,102,109,113,98,106,0)) {
            break;
         }
      } while ((backM == String.fromCharCode(106,107,102,109,113,98,106,0)) && (3.82 > (3.49 / (Math.max(8, umengW)))));
         umengW += parseFloat(`${parseInt(`${umengW}`)}`);
          let modalr = String.fromCharCode(118,97,114,108,101,110,95,100,95,56,56,0);
         umengW -= parseFloat(`${parseInt(`${umengW}`) / 1}`);
         modalr += `${(String.fromCharCode(69,0) == modalr ? modalr.length : modalr.length)}`;
         backM = `${parseInt(`${umengW}`)}`;
       let stationsy = String.fromCharCode(116,95,51,57,95,116,101,109,112,115,0);
       let whitetickc = String.fromCharCode(99,95,50,53,95,100,105,97,109,101,116,101,114,0);
       let clocka = String.fromCharCode(104,95,56,54,95,101,110,99,111,100,101,114,0);
      minimizeP = dialogH == 65;
       let agreementm = String.fromCharCode(115,97,108,115,97,95,49,95,50,49,0);
       let stylesW = 1.0;
       let photow = String.fromCharCode(114,97,114,105,116,121,95,109,95,56,50,0);
         stylesW -= photow.length;
      for (let m = 0; m < 1; m++) {
         stylesW -= parseInt(`${stylesW}`);
      }
         stylesW += photow.length * parseInt(`${stylesW}`);
          let becomeh = String.fromCharCode(122,101,114,111,115,95,122,95,48,0);
          let benefitw = true;
          let basketballplayerplaceholderz = 1.0;
         stylesW *= parseInt(`${basketballplayerplaceholderz}`) - 2;
         becomeh = "1";
         benefitw = becomeh.length > 16;
         basketballplayerplaceholderz *= (2 / (Math.max(3, (benefitw ? 2 : 5))));
      for (let s = 0; s < 3; s++) {
         agreementm += `${photow.length + 1}`;
      }
         stylesW -= photow.length;
      if (!agreementm.endsWith(`${stylesW}`)) {
         agreementm = `${2 - photow.length}`;
      }
         photow = `${photow.length % 1}`;
      if (2 > (parseInt(`${stylesW}`) / (Math.max(agreementm.length, 2)))) {
          let productZ = [155, 400, 217];
          let latn8 = new Map([[String.fromCharCode(104,101,118,109,97,115,107,95,56,95,54,49,0),660], [String.fromCharCode(98,95,52,53,95,115,116,114,117,99,116,117,114,101,115,0),850]]);
          let playercommonD = String.fromCharCode(97,99,99,101,108,101,114,97,116,101,95,49,95,55,52,0);
          let filterD = String.fromCharCode(114,101,115,117,109,101,100,95,111,95,53,48,0);
          let n_unlock8 = [632, 583, 609];
         agreementm += `${(String.fromCharCode(90,0) == agreementm ? agreementm.length : parseInt(`${stylesW}`))}`;
         productZ.push(3 << (Math.min(3, Math.abs(latn8.size))));
         latn8 = new Map([[`${n_unlock8.length}`, filterD.length]]);
         playercommonD += `${latn8.size}`;
         filterD = "2";
         n_unlock8 = [filterD.length];
      }
      minimizeP = (24 >= (agreementm.length / (Math.max(5, (pointr ? 24 : agreementm.length)))));

      if (state.showControls) {

       let libsentry3 = 0.0;
       let materialK = 5.0;
      for (let n = 0; n < 3; n++) {
         libsentry3 /= Math.max(parseInt(`${materialK}`), 3);
      }
      while ((materialK - libsentry3) > 2.100 && 2.100 > (materialK - libsentry3)) {
          let liblogger1 = new Map([[String.fromCharCode(117,95,50,49,95,115,101,99,0),127], [String.fromCharCode(99,95,53,48,95,114,108,111,116,116,105,101,0),779], [String.fromCharCode(97,99,102,102,95,53,95,55,49,0),896]]);
          let commonp = 5.0;
          let settings9 = String.fromCharCode(115,110,97,112,115,104,111,116,95,117,95,53,56,0);
          let bgvipsporto = 2;
          let navigationq = String.fromCharCode(114,112,114,111,98,101,95,120,95,54,55,0);
         libsentry3 -= liblogger1.size;
         liblogger1 = new Map([[settings9, 2]]);
         commonp -= bgvipsporto | 3;
         settings9 += `${parseInt(`${commonp}`)}`;
         bgvipsporto ^= settings9.length;
         navigationq = `${parseInt(`${commonp}`)}`;
         break;
      }
         libsentry3 *= 3 / (Math.max(1, parseInt(`${materialK}`)));
      for (let t = 0; t < 1; t++) {
          let googlee = 2.0;
          let libruntimeexecutorF = [212, 532];
          let issubO = new Map([[String.fromCharCode(110,95,56,54,95,114,101,109,111,118,105,110,103,0),632], [String.fromCharCode(120,95,57,48,95,97,116,114,97,99,116,97,98,0),329]]);
          let blacki = new Map([[String.fromCharCode(105,100,101,109,112,111,116,101,110,99,121,95,55,95,54,49,0),263], [String.fromCharCode(105,110,115,101,114,116,95,121,95,56,53,0),991]]);
         libsentry3 /= Math.max(3, libruntimeexecutorF.length ^ 1);
         googlee -= blacki.size >> (Math.min(4, Math.abs(parseInt(`${googlee}`))));
         libruntimeexecutorF.push(2);
         issubO[`${googlee}`] = parseInt(`${googlee}`) + 1;
         blacki = new Map([[`${blacki.size}`, issubO.size | 2]]);
      }
      for (let u = 0; u < 1; u++) {
         materialK /= Math.max(parseFloat(`${parseInt(`${materialK}`) & 2}`), 5);
      }
          let stationg = true;
          let cricketN = true;
          let submitc = new Map([[String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,95,53,95,56,55,0),false ], [String.fromCharCode(101,95,56,49,95,117,110,116,114,97,99,107,0),false ], [String.fromCharCode(116,109,109,98,114,95,108,95,49,0),true ]]);
         materialK -= (parseFloat(`${3 >> (Math.min(1, Math.abs((stationg ? 2 : 1))))}`));
         stationg = submitc.size >= 79;
         cricketN = (91 > (submitc.size - (!cricketN ? submitc.size : 100)));
      kuaishouQ ^= stationst.length;
   if (1 <= kuaishouQ) {
       let hongkong0 = [868, 368, 5];
       let sliderI = new Map([[String.fromCharCode(102,95,53,50,95,98,106,101,99,116,0),675], [String.fromCharCode(100,105,115,112,115,97,98,108,101,95,100,95,49,51,0),910], [String.fromCharCode(119,95,56,50,95,117,110,109,97,114,115,104,97,108,0),637]]);
       let footballfiledlayoutN = String.fromCharCode(112,97,112,101,114,95,120,95,55,56,0);
       let libimagepipelineC = new Map([[String.fromCharCode(100,105,105,110,95,120,95,54,0),true ], [String.fromCharCode(115,117,98,116,114,97,99,116,111,114,95,103,95,57,0),false ], [String.fromCharCode(109,95,50,51,95,112,97,99,101,114,0),false ]]);
      for (let h = 0; h < 1; h++) {
          let styles8 = 1.0;
          let pushH = String.fromCharCode(107,95,54,55,95,118,101,114,105,102,105,97,98,108,101,0);
          let cornerkickC = 0.0;
         footballfiledlayoutN = `${2 >> (Math.min(3, pushH.length))}`;
         styles8 *= parseInt(`${styles8}`) + 3;
         pushH += `${parseInt(`${styles8}`) % 1}`;
         cornerkickC *= parseInt(`${cornerkickC}`) * parseInt(`${styles8}`);
      }
      for (let c = 0; c < 3; c++) {
         hongkong0 = [1];
      }
      for (let o = 0; o < 1; o++) {
          let selectg = true;
         libimagepipelineC = new Map([[`${hongkong0.length}`, hongkong0.length]]);
      }
         hongkong0.push(footballfiledlayoutN.length / 2);
          let faste = 4;
         libimagepipelineC[`${faste}`] = footballfiledlayoutN.length / 1;
       let libfileN = String.fromCharCode(115,108,111,116,95,101,95,49,55,0);
       let clubJ = String.fromCharCode(100,121,110,98,117,102,95,102,95,50,50,0);
         clubJ += `${3 >> (Math.min(3, footballfiledlayoutN.length))}`;
       let homeloading0 = 2.0;
       let updatesK = 2.0;
      for (let b = 0; b < 3; b++) {
         sliderI = new Map([[`${hongkong0.length}`, footballfiledlayoutN.length]]);
      }
      for (let f = 0; f < 3; f++) {
         updatesK += libfileN.length - 2;
      }
         libimagepipelineC = new Map([[`${libimagepipelineC.size}`, libimagepipelineC.size]]);
         libimagepipelineC = new Map([[`${hongkong0.length}`, 1 / (Math.max(5, hongkong0.length))]]);
      kuaishouQ |= 1 ^ hongkong0.length;
   }
        this.resetControlTimeout();
      }
    } else {

   if (3 > shirtJ.length) {
       let iconmores = 2;
       let calendarq = String.fromCharCode(97,118,101,114,114,111,114,95,100,95,49,54,0);
       let mbjscommonw = 4;
       let shootp = String.fromCharCode(104,95,56,55,95,118,111,116,101,114,115,0);
          let contextI = new Map([[String.fromCharCode(102,95,51,50,95,115,108,105,99,101,99,111,110,116,101,120,116,0),true ], [String.fromCharCode(119,111,114,107,115,95,120,95,55,48,0),false ]]);
          let bingq = 0.0;
         mbjscommonw *= calendarq.length - contextI.size;
         contextI[`${bingq}`] = parseInt(`${bingq}`);
       let penaltyshootnogoalj = [String.fromCharCode(110,95,50,51,95,114,100,106,112,103,99,111,109,0), String.fromCharCode(117,95,49,48,95,110,115,117,112,112,111,114,116,101,100,0), String.fromCharCode(100,101,99,111,100,101,102,95,98,95,53,57,0)];
          let mbridgea = String.fromCharCode(116,114,101,101,99,111,100,101,114,95,101,95,50,56,0);
         shootp = `${shootp.length << (Math.min(1, Math.abs(mbjscommonw)))}`;
         mbridgea = "3";
       let gradlewM = String.fromCharCode(100,95,55,55,95,100,101,97,108,108,111,99,97,116,101,0);
       let router6 = String.fromCharCode(115,112,114,105,116,101,95,122,95,55,53,0);
      do {
         mbjscommonw /= Math.max(penaltyshootnogoalj.length, 5);
         if (mbjscommonw == 4123982) {
            break;
         }
      } while ((4 >= (gradlewM.length / 1) && (mbjscommonw / (Math.max(gradlewM.length, 7))) >= 1) && (mbjscommonw == 4123982));
      if (!router6.endsWith(`${penaltyshootnogoalj.length}`)) {
         penaltyshootnogoalj.push(router6.length);
      }
      for (let n = 0; n < 1; n++) {
         gradlewM = `${(String.fromCharCode(79,0) == shootp ? penaltyshootnogoalj.length : shootp.length)}`;
      }
         iconmores /= Math.max(calendarq.length >> (Math.min(Math.abs(2), 5)), 2);
      minimizeP = !pointr || 35 < mbjscommonw;
   }
       let turn9 = 1.0;
         turn9 -= parseFloat(`${parseInt(`${turn9}`)}`);
         turn9 += parseFloat(`${1}`);
      if (2.11 > (4.53 - turn9)) {
          let leaguedetailsbgE = 5;
          let iconadslinkY = false;
          let iconnotificationnews = [170, 181];
          let iconorientation1 = [359, 969];
          let photoV = String.fromCharCode(99,99,105,112,95,110,95,53,50,0);
         turn9 *= (parseFloat(`${(iconadslinkY ? 5 : 5) << (Math.min(iconnotificationnews.length, 1))}`));
         leaguedetailsbgE += iconorientation1.length & photoV.length;
         iconadslinkY = 23 >= photoV.length;
         iconnotificationnews.push(3 * iconorientation1.length);
      }
      minimizeP = 3 >= dialogH;
      this.player.tapActionTimeout = setTimeout(() => {

   if (shirtJ.length < 3) {
      minimizeP = shirtJ == String.fromCharCode(119,0);
   }
   if (pointr) {
      pointr = 57 == kuaishouQ;
   }
        const state = this.state;
       let textinpute = String.fromCharCode(121,95,56,57,95,115,116,101,114,101,111,0);
       let sheetC = [100, 690];
       let mintegralu = [133, 511];
          let taiwanY = String.fromCharCode(115,101,116,116,105,103,110,115,95,113,95,55,0);
          let iconadslinku = String.fromCharCode(115,116,114,102,116,105,109,101,95,51,95,50,55,0);
          let membership7 = String.fromCharCode(98,117,105,108,100,95,107,95,52,56,0);
         mintegralu.push(membership7.length);
         taiwanY += `${3 - taiwanY.length}`;
         iconadslinku = "2";
         membership7 += `${(iconadslinku == String.fromCharCode(81,0) ? taiwanY.length : iconadslinku.length)}`;
      do {
         textinpute = "1";
         if (String.fromCharCode(114,98,117,99,110,122,118,57,0) == textinpute) {
            break;
         }
      } while ((String.fromCharCode(114,98,117,99,110,122,118,57,0) == textinpute) && (2 >= (textinpute.length * 3)));
      minimizeP = minimizeP && long_jvg.length >= 69;
   for (let u = 0; u < 3; u++) {
      shirtJ = `${(matchinactiveB == String.fromCharCode(48,0) ? matchinactiveB.length : dialogH)}`;
   }

        if (this.player.tapAnywhereToPause && state.showControls) {

      dialogH <<= Math.min(1, Math.abs(1));
      matchinactiveB += `${shirtJ.length}`;
          this.methods.togglePlayPause();
   for (let a = 0; a < 1; a++) {
       let referrerW = 4;
       let relatedr = String.fromCharCode(122,95,55,54,95,101,110,102,111,114,99,101,0);
       let downloaded1 = 5.0;
       let neonB = String.fromCharCode(111,95,53,55,95,118,101,114,116,0);
      if ((1.34 + downloaded1) < 2.48) {
         neonB = "1";
      }
         downloaded1 /= Math.max(parseFloat(`${neonB.length / 1}`), 4);
         referrerW <<= Math.min(3, Math.abs(relatedr.length >> (Math.min(2, Math.abs(referrerW)))));
      if (1.26 == (3.67 * downloaded1)) {
         relatedr = `${relatedr.length << (Math.min(5, neonB.length))}`;
      }
      while (neonB.length >= parseInt(`${downloaded1}`)) {
         neonB = `${neonB.length - 1}`;
         break;
      }
         relatedr += `${neonB.length}`;
          let zoom8 = String.fromCharCode(112,117,115,104,95,112,95,57,56,0);
          let quest5 = String.fromCharCode(97,95,56,52,95,115,121,110,99,0);
         downloaded1 += (parseFloat(`${String.fromCharCode(111,0) == neonB ? referrerW : neonB.length}`));
         zoom8 = `${quest5.length}`;
         quest5 = `${quest5.length / (Math.max(7, zoom8.length))}`;
          let greyarrowupy = false;
          let previewj = String.fromCharCode(109,97,116,99,104,101,100,95,51,95,54,54,0);
          let libreactnativejnip = String.fromCharCode(97,97,117,100,105,111,95,120,95,54,52,0);
         relatedr += `${(relatedr.length & (greyarrowupy ? 5 : 5))}`;
         greyarrowupy = 45 <= previewj.length;
         previewj = `${previewj.length / 1}`;
         libreactnativejnip += `${libreactnativejnip.length}`;
         relatedr += `${relatedr.length}`;
         downloaded1 /= Math.max(parseFloat(`${2 % (Math.max(3, neonB.length))}`), 1);
          let shared9 = true;
          let iconarrowrightL = 3.0;
         neonB += "3";
         shared9 = 47.14 > iconarrowrightL;
         iconarrowrightL *= ((shared9 ? 4 : 2) ^ parseInt(`${iconarrowrightL}`));
         relatedr = `${(String.fromCharCode(119,0) == relatedr ? relatedr.length : parseInt(`${downloaded1}`))}`;
      vipsportq |= (String.fromCharCode(57,0) == neonB ? long_jvg.length : neonB.length);
   }
      kuaishouQ /= Math.max(1, 1);

          this.resetControlTimeout();
        } else {

      vipsportq -= 3;
      vipsportq <<= Math.min(2, Math.abs(kuaishouQ));
          this.methods.toggleControls();
       let iconwatchv = String.fromCharCode(105,95,54,95,98,97,99,107,100,114,111,112,0);
       let iconr = [779, 214, 438];
       let areav = 1.0;
      if (iconwatchv.startsWith(`${iconr.length}`)) {
         iconwatchv = `${parseInt(`${areav}`)}`;
      }
         areav /= Math.max(iconwatchv.length >> (Math.min(Math.abs(1), 5)), 5);
          let qaagN = 4.0;
          let login8 = 5.0;
          let activitys = String.fromCharCode(109,101,100,105,97,99,111,100,101,99,95,122,95,57,0);
         iconr = [iconwatchv.length + activitys.length];
         qaagN *= parseFloat(`${parseInt(`${login8}`)}`);
         activitys += `${3 * parseInt(`${login8}`)}`;
      while (4 <= iconr.length) {
         iconwatchv = `${iconwatchv.length >> (Math.min(3, Math.abs(parseInt(`${areav}`))))}`;
         break;
      }
         iconr = [iconr.length * 3];
      for (let s = 0; s < 3; s++) {
         iconwatchv += `${1 & parseInt(`${areav}`)}`;
      }
          let actionsA = [495, 211];
         iconwatchv += `${iconr.length + 1}`;
         actionsA = [3 / (Math.max(5, actionsA.length))];
      do {
         areav += (iconwatchv == String.fromCharCode(116,0) ? iconwatchv.length : parseInt(`${areav}`));
         if (4725833.0 == areav) {
            break;
         }
      } while ((iconr.length < areav) && (4725833.0 == areav));
       let dependenciesv = 1.0;
      shirtJ += `${((minimizeP ? 5 : 3) - 1)}`;
      long_jvg.push(kuaishouQ / 3);

        }
        this.player.tapActionTimeout = 0;
      dialogH >>= Math.min(Math.abs(2), 1);
      matchinactiveB = `${shirtJ.length}`;

      }, this.props.doubleTapTime);
   do {
      pointr = long_jvg.includes(vipsportq);
      if (pointr ? !pointr : pointr) {
         break;
      }
   } while ((pointr ? !pointr : pointr) && (!stationst.includes(`${pointr}`)));
   while ((shirtJ.length ^ long_jvg.length) < 5) {
       let foregroundT = 3.0;
       let q_playerG = String.fromCharCode(115,95,49,48,95,110,112,112,115,99,97,108,101,0);
       let footballfield2 = [392, 915];
       let bottomU = false;
         q_playerG += `${parseInt(`${foregroundT}`) >> (Math.min(2, Math.abs(2)))}`;
          let episodee = 4.0;
          let yellowanimationlive8 = String.fromCharCode(103,108,111,98,97,108,108,121,95,48,95,55,57,0);
          let side_ = new Map([[String.fromCharCode(106,95,49,53,95,112,114,101,118,101,110,116,115,0),false ], [String.fromCharCode(112,114,111,112,111,115,101,114,95,107,95,52,52,0),false ]]);
         q_playerG = `${((bottomU ? 4 : 2) << (Math.min(Math.abs(side_.size), 2)))}`;
         episodee *= (yellowanimationlive8 == String.fromCharCode(115,0) ? yellowanimationlive8.length : parseInt(`${episodee}`));
         side_ = new Map([[`${episodee}`, yellowanimationlive8.length % (Math.max(10, parseInt(`${episodee}`)))]]);
      if (!q_playerG.startsWith(`${footballfield2.length}`)) {
         footballfield2.push((String.fromCharCode(110,0) == q_playerG ? footballfield2.length : q_playerG.length));
      }
         foregroundT += parseInt(`${foregroundT}`);
         foregroundT -= ((bottomU ? 5 : 4) >> (Math.min(Math.abs(3), 2)));
       let helperq = String.fromCharCode(113,99,101,108,112,100,97,116,97,95,114,95,57,48,0);
       let libmapbufferjniW = String.fromCharCode(99,111,110,102,108,105,99,116,95,99,95,54,0);
         libmapbufferjniW = `${q_playerG.length}`;
       let mbridge1 = String.fromCharCode(102,95,49,95,116,105,110,121,0);
       let lightu = String.fromCharCode(105,115,122,101,114,111,95,118,95,50,57,0);
         libmapbufferjniW = `${lightu.length}`;
         footballfield2 = [2];
         helperq = `${libmapbufferjniW.length + 1}`;
      shirtJ += `${(stationst == String.fromCharCode(70,0) ? stationst.length : vipsportq)}`;
      break;
   }

    }
  }

   

   
  setControlTimeout() {
       let giftG = 0.0;
    let resenda = String.fromCharCode(109,95,55,50,95,116,114,101,101,115,0);
    let securitym = String.fromCharCode(110,97,109,101,95,108,95,50,0);
    let kuaishouU = 5.0;
    let analyticsW = new Map([[String.fromCharCode(114,101,103,117,108,97,114,95,103,95,54,0),String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,95,48,95,49,53,0)], [String.fromCharCode(101,95,55,50,95,102,105,114,101,98,97,115,101,0),String.fromCharCode(110,95,57,49,95,118,101,114,115,105,111,110,115,0)]]);
    let bodan5 = true;
    let launcherQ = String.fromCharCode(114,95,57,51,95,114,114,111,114,0);
    let connectionK = String.fromCharCode(97,98,98,114,95,104,95,54,49,0);
    let mime1 = [429, 343];
    let kickm = [183, 564];
    let iconstaru = String.fromCharCode(109,97,103,121,95,115,95,55,0);
   do {
      resenda = "3";
      if (String.fromCharCode(99,98,116,0) == resenda) {
         break;
      }
   } while ((String.fromCharCode(99,98,116,0) == resenda) && (5.74 > (giftG - 5.35) || 4.46 > (5.35 - giftG)));
      securitym = "1";
       let injuryp = 3;
       let whistle_ = [String.fromCharCode(98,95,49,56,95,115,99,111,112,101,105,100,0), String.fromCharCode(109,117,116,101,95,53,95,55,56,0), String.fromCharCode(113,95,51,57,95,115,107,101,119,0)];
         whistle_ = [3 + injuryp];
         whistle_ = [3];
      if (5 <= (whistle_.length & 3) && 3 <= (whistle_.length & injuryp)) {
         injuryp &= whistle_.length << (Math.min(Math.abs(3), 5));
      }
         injuryp *= injuryp;
      while (3 <= (injuryp % 5) && (injuryp % (Math.max(6, whistle_.length))) <= 5) {
         whistle_.push(2 % (Math.max(2, whistle_.length)));
         break;
      }
      do {
          let previewt = String.fromCharCode(101,120,99,101,101,100,105,110,103,95,51,95,49,54,0);
          let long_0h = String.fromCharCode(111,112,99,111,100,101,95,120,95,51,53,0);
          let delegate_opJ = 0;
         whistle_.push(injuryp);
         previewt += `${delegate_opJ}`;
         long_0h = `${previewt.length}`;
         delegate_opJ += long_0h.length >> (Math.min(Math.abs(2), 4));
         if (whistle_.length == 587518) {
            break;
         }
      } while ((!whistle_.includes(injuryp)) && (whistle_.length == 587518));
      connectionK = `${injuryp}`;
   if (3 == (1 >> (Math.min(1, resenda.length))) && (analyticsW.size >> (Math.min(Math.abs(1), 4))) == 5) {
       let icondefaultthumbnails = 4.0;
       let navigationh = [407, 159];
       let reactnativejsX = [String.fromCharCode(104,95,50,49,95,104,105,116,115,0), String.fromCharCode(113,95,56,49,95,115,101,116,116,97,98,108,101,0), String.fromCharCode(110,95,54,49,95,100,111,97,108,108,0)];
       let valuesI = new Map([[String.fromCharCode(97,100,108,101,114,95,98,95,57,0),170], [String.fromCharCode(112,95,49,55,95,112,114,101,115,101,110,99,101,0),885], [String.fromCharCode(111,95,50,53,95,109,97,107,101,99,121,103,119,105,110,112,107,103,0),749]]);
       let catagorym = [String.fromCharCode(112,114,111,112,115,95,113,95,52,48,0), String.fromCharCode(105,95,57,50,95,109,98,115,101,103,109,101,110,116,97,116,105,111,110,0), String.fromCharCode(122,95,49,57,95,108,97,116,105,110,0)];
       let window_537 = 1.0;
       let optionsQ = 3.0;
      do {
         reactnativejsX = [parseInt(`${window_537}`) % 2];
         if (2631938 == reactnativejsX.length) {
            break;
         }
      } while ((2631938 == reactnativejsX.length) && (2 == reactnativejsX.length));
       let promotionI = String.fromCharCode(101,110,99,111,100,101,114,95,122,95,53,48,0);
      if (window_537 == 5.31) {
          let minimizeS = String.fromCharCode(119,95,53,55,95,105,108,101,97,118,101,0);
         reactnativejsX.push(1);
         minimizeS += `${(minimizeS == String.fromCharCode(114,0) ? minimizeS.length : minimizeS.length)}`;
      }
         window_537 -= valuesI.size;
         window_537 /= Math.max(catagorym.length | parseInt(`${optionsQ}`), 4);
       let iconwatchnowK = String.fromCharCode(115,95,57,52,95,117,110,105,110,105,116,0);
       let libturbomodulejsijnih = String.fromCharCode(99,97,98,97,99,95,101,95,57,0);
      if (2 < (iconwatchnowK.length / 4) || (reactnativejsX.length / 4) < 1) {
         reactnativejsX = [libturbomodulejsijnih.length];
      }
      for (let u = 0; u < 2; u++) {
         promotionI += `${(String.fromCharCode(54,0) == libturbomodulejsijnih ? libturbomodulejsijnih.length : catagorym.length)}`;
      }
         icondefaultthumbnails += parseInt(`${window_537}`) & catagorym.length;
      while (libturbomodulejsijnih.endsWith(`${icondefaultthumbnails}`)) {
          let anytimef = 4.0;
          let backwardE = 5.0;
         icondefaultthumbnails /= Math.max(5, promotionI.length / 1);
         anytimef /= Math.max(parseInt(`${anytimef}`) ^ 3, 2);
         backwardE *= parseFloat(`${parseInt(`${anytimef}`) ^ parseInt(`${backwardE}`)}`);
         break;
      }
          let button1 = String.fromCharCode(102,95,50,48,0);
          let iconcalendarM = String.fromCharCode(115,111,97,98,111,114,116,95,106,95,56,57,0);
         iconwatchnowK += `${1 << (Math.min(4, catagorym.length))}`;
         button1 += `${iconcalendarM.length - button1.length}`;
         iconcalendarM += `${3 + iconcalendarM.length}`;
          let borderlessA = 1;
          let canvasx = new Map([[String.fromCharCode(113,95,49,49,95,99,104,101,99,107,101,114,0),String.fromCharCode(100,105,109,101,110,115,95,55,95,52,57,0)], [String.fromCharCode(109,95,49,52,95,105,100,101,110,116,105,116,105,121,0),String.fromCharCode(117,95,56,51,95,111,114,103,0)], [String.fromCharCode(105,95,56,50,95,115,104,97,112,101,115,0),String.fromCharCode(109,111,110,116,104,95,119,95,54,48,0)]]);
         reactnativejsX = [parseInt(`${window_537}`)];
         borderlessA %= Math.max(borderlessA * canvasx.size, 5);
         canvasx[`${borderlessA}`] = 1 << (Math.min(4, Math.abs(canvasx.size)));
         reactnativejsX = [reactnativejsX.length * 2];
         icondefaultthumbnails -= 2 << (Math.min(5, Math.abs(parseInt(`${optionsQ}`))));
      resenda += `${parseInt(`${icondefaultthumbnails}`) ^ 1}`;
      navigationh = [navigationh.length];
   }
   do {
       let privatechatbgF = new Map([[String.fromCharCode(99,111,110,116,111,117,114,115,95,112,95,56,51,0),785], [String.fromCharCode(108,95,56,51,95,97,102,116,101,114,0),125]]);
       let privilegeM = 5.0;
       let reddownarrowr = String.fromCharCode(103,114,111,117,112,115,95,98,95,57,52,0);
       let package__t = 5.0;
      while (5 == (5 % (Math.max(5, privatechatbgF.size)))) {
          let historyB = 0.0;
         privatechatbgF = new Map([[`${privatechatbgF.size}`, privatechatbgF.size]]);
         historyB /= Math.max(1, parseInt(`${historyB}`) ^ parseInt(`${historyB}`));
         break;
      }
       let libflipperi = 5;
         reddownarrowr = `${libflipperi}`;
         privatechatbgF = new Map([[`${package__t}`, parseInt(`${package__t}`) / (Math.max(6, reddownarrowr.length))]]);
      for (let o = 0; o < 2; o++) {
         privilegeM *= parseFloat(`${privatechatbgF.size}`);
      }
         reddownarrowr += `${parseInt(`${package__t}`) * privatechatbgF.size}`;
      do {
          let defaultlogo8 = 2;
          let sortH = new Map([[String.fromCharCode(102,105,120,116,117,114,101,115,95,112,95,51,49,0),261], [String.fromCharCode(113,95,54,52,95,111,117,114,0),736]]);
          let backwhite_ = 1.0;
         privatechatbgF[reddownarrowr] = parseInt(`${package__t}`) ^ reddownarrowr.length;
         defaultlogo8 <<= Math.min(2, Math.abs(parseInt(`${backwhite_}`)));
         sortH = new Map([[`${sortH.size}`, 1 >> (Math.min(5, Math.abs(defaultlogo8)))]]);
         backwhite_ -= sortH.size;
         if (privatechatbgF.size == 2256589) {
            break;
         }
      } while ((privatechatbgF.size == 2256589) && (Array.from(privatechatbgF.values()).includes(privilegeM)));
         privatechatbgF = new Map([[`${privatechatbgF.size}`, libflipperi % (Math.max(7, privatechatbgF.size))]]);
         libflipperi += libflipperi;
       let episodeo = new Map([[String.fromCharCode(110,111,100,101,115,95,103,95,52,50,0),692], [String.fromCharCode(120,95,57,53,95,105,110,116,101,114,112,111,108,97,116,97,98,108,101,0),809], [String.fromCharCode(106,95,52,53,95,103,114,97,112,104,0),229]]);
      do {
         privilegeM += parseFloat(`${privatechatbgF.size << (Math.min(4, Math.abs(parseInt(`${privilegeM}`))))}`);
         if (3328770.0 == privilegeM) {
            break;
         }
      } while ((reddownarrowr.length == 4) && (3328770.0 == privilegeM));
          let left_ = String.fromCharCode(115,112,97,116,105,97,108,95,118,95,51,49,0);
         privilegeM -= parseFloat(`${left_.length}`);
      securitym += `${((bodan5 ? 2 : 3) ^ analyticsW.size)}`;
      if (securitym == String.fromCharCode(117,104,110,107,53,99,53,48,116,0)) {
         break;
      }
   } while ((securitym == String.fromCharCode(117,104,110,107,53,99,53,48,116,0)) && (4 > (analyticsW.size / (Math.max(securitym.length, 3))) || (4 / (Math.max(3, analyticsW.size))) > 5));
       let predictiondefaultq = 2.0;
       let firebaseI = true;
       let selectionV = String.fromCharCode(109,117,108,116,105,99,97,115,116,101,100,95,107,95,57,51,0);
         predictiondefaultq -= (parseFloat(`${(firebaseI ? 1 : 3) >> (Math.min(Math.abs(parseInt(`${predictiondefaultq}`)), 1))}`));
       let awayiconF = new Map([[String.fromCharCode(99,95,52,95,97,99,111,100,101,99,0),618], [String.fromCharCode(102,95,51,51,95,99,108,111,115,105,110,103,0),89], [String.fromCharCode(99,95,53,53,95,118,97,114,105,110,116,115,0),729]]);
      do {
         awayiconF[`${predictiondefaultq}`] = 1;
         if (2184910 == awayiconF.size) {
            break;
         }
      } while ((4 > (5 ^ awayiconF.size)) && (2184910 == awayiconF.size));
      for (let u = 0; u < 2; u++) {
         firebaseI = null == awayiconF[`${firebaseI}`];
      }
      for (let z = 0; z < 2; z++) {
          let iconadslink6 = String.fromCharCode(99,97,108,101,110,100,97,114,95,111,95,54,51,0);
          let suggestion5 = 4.0;
          let onewinterstitialI = 4;
          let iconbackwhiteK = 4;
         predictiondefaultq += (parseFloat(`${awayiconF.size ^ (firebaseI ? 5 : 4)}`));
         iconadslink6 += `${iconbackwhiteK % (Math.max(iconadslink6.length, 6))}`;
         suggestion5 += parseFloat(`${3 >> (Math.min(1, iconadslink6.length))}`);
         onewinterstitialI /= Math.max(1, 1);
         iconbackwhiteK += 2;
      }
       let albumu = new Map([[String.fromCharCode(110,95,57,52,95,109,105,103,114,97,116,105,111,110,0),197], [String.fromCharCode(120,95,51,51,95,108,111,119,112,97,115,115,0),563]]);
       let teamG = new Map([[String.fromCharCode(121,95,55,50,95,100,105,115,112,0),String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,48,95,51,49,0)], [String.fromCharCode(105,110,112,99,98,95,98,95,55,53,0),String.fromCharCode(105,99,111,110,115,95,53,95,57,51,0)]]);
      if (Array.from(albumu.keys()).includes(`${awayiconF.size}`)) {
         albumu = new Map([[`${predictiondefaultq}`, parseInt(`${predictiondefaultq}`) / 1]]);
      }
      if (selectionV.length >= teamG.size) {
         selectionV = `${selectionV.length * 3}`;
      }
         predictiondefaultq += parseFloat(`${awayiconF.size}`);
      giftG /= Math.max(parseFloat(`${resenda.length % (Math.max(4, analyticsW.size))}`), 1);
       let libyogaO = true;
         libyogaO = (!libyogaO ? !libyogaO : !libyogaO);
      if (libyogaO) {
          let iconlogoutg = new Map([[String.fromCharCode(105,112,99,95,106,95,49,48,0),508], [String.fromCharCode(101,118,114,112,99,95,113,95,54,0),682]]);
          let utilsu = String.fromCharCode(118,95,57,54,95,99,117,114,114,0);
          let annerT = [400, 18, 369];
          let const_euu = [198, 584];
         libyogaO = const_euu.length == 69;
         iconlogoutg[`${annerT.length}`] = annerT.length;
         utilsu = `${annerT.length * 1}`;
         const_euu.push(iconlogoutg.size);
      }
      if (!libyogaO && !libyogaO) {
         libyogaO = !libyogaO;
      }
      bodan5 = (29 <= ((!bodan5 ? connectionK.length : 29) / (Math.max(connectionK.length, 1))));

    this.player.controlTimeout = setTimeout(() => {

   do {
       let scrollview9 = new Map([[String.fromCharCode(98,95,56,49,95,117,110,111,114,100,101,114,101,100,0),true ], [String.fromCharCode(120,95,49,55,95,98,101,110,101,97,116,104,0),false ], [String.fromCharCode(108,95,56,51,95,109,99,111,109,112,97,110,100,0),false ]]);
       let weathery = true;
      do {
         weathery = scrollview9[`${weathery}`] != null;
         if (weathery ? !weathery : weathery) {
            break;
         }
      } while ((scrollview9.size >= 2) && (weathery ? !weathery : weathery));
         scrollview9[`${weathery}`] = scrollview9.size;
          let descj = [447, 571, 73];
          let predictiondefault8 = new Map([[String.fromCharCode(115,95,51,50,95,101,120,99,108,117,100,101,0),435], [String.fromCharCode(97,95,51,49,95,115,105,103,105,110,116,0),623]]);
          let subtextX = String.fromCharCode(112,95,51,95,119,111,114,107,108,111,97,100,0);
         weathery = ((scrollview9.size + (!weathery ? 9 : scrollview9.size)) == 9);
         descj.push(2 | predictiondefault8.size);
         predictiondefault8 = new Map([[`${predictiondefault8.size}`, subtextX.length + predictiondefault8.size]]);
         subtextX += `${3 % (Math.max(7, descj.length))}`;
       let friendsD = String.fromCharCode(100,105,115,99,111,110,110,101,99,116,105,111,110,95,113,95,49,49,0);
       let homeactivex = String.fromCharCode(119,95,55,95,102,114,97,109,101,0);
      do {
         friendsD += `${homeactivex.length}`;
         if (friendsD == String.fromCharCode(119,105,109,109,102,54,117,97,0)) {
            break;
         }
      } while ((friendsD == String.fromCharCode(119,105,109,109,102,54,117,97,0)) && (!friendsD.endsWith(`${weathery}`)));
         friendsD += `${3 * friendsD.length}`;
      launcherQ = "1";
      if (String.fromCharCode(53,95,109,0) == launcherQ) {
         break;
      }
   } while ((securitym == launcherQ) && (String.fromCharCode(53,95,109,0) == launcherQ));
   while ((connectionK.length & analyticsW.size) >= 2 || (connectionK.length & analyticsW.size) >= 2) {
      analyticsW[`${kuaishouU}`] = 1 % (Math.max(8, parseInt(`${kuaishouU}`)));
      break;
   }
       let smallb = new Map([[String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,95,107,95,54,51,0),785], [String.fromCharCode(99,111,114,114,101,99,116,101,100,95,119,95,50,49,0),859]]);
       let hoveri = 2;
      do {
         hoveri &= smallb.size;
         if (hoveri == 2599316) {
            break;
         }
      } while ((smallb[`${hoveri}`] != null) && (hoveri == 2599316));
      if ((smallb.size & hoveri) > 5 && 5 > (hoveri & smallb.size)) {
         hoveri |= hoveri % (Math.max(smallb.size, 10));
      }
      do {
         hoveri -= 2;
         if (hoveri == 1714038) {
            break;
         }
      } while ((hoveri == 1714038) && (smallb[`${hoveri}`] == null));
       let viewsE = String.fromCharCode(122,95,51,55,95,115,101,103,100,97,116,97,0);
      if (smallb.size < 5) {
         smallb[viewsE] = hoveri & viewsE.length;
      }
         smallb = new Map([[`${smallb.size}`, smallb.size]]);
      bodan5 = analyticsW.size < parseInt(`${giftG}`);
   do {
       let down2 = 3.0;
       let tickY = true;
       let ewarded8 = String.fromCharCode(115,116,97,109,112,95,48,95,55,0);
      if (ewarded8.length >= 2) {
         ewarded8 = `${((tickY ? 1 : 5) * ewarded8.length)}`;
      }
         down2 *= 1 / (Math.max(parseInt(`${down2}`), 6));
      while (4.14 <= down2) {
         tickY = !tickY;
         break;
      }
          let update_iE = 3.0;
         ewarded8 = `${2 ^ ewarded8.length}`;
         update_iE -= parseInt(`${update_iE}`);
          let descc = String.fromCharCode(99,111,109,112,108,101,116,101,100,95,110,95,49,49,0);
         tickY = !tickY;
         descc = `${descc.length}`;
      while (tickY) {
         tickY = 16.22 > down2;
         break;
      }
      if (tickY) {
         tickY = (63 > ((!tickY ? 63 : ewarded8.length) * ewarded8.length));
      }
      if (!tickY) {
          let iconarrowrightwhitek = String.fromCharCode(109,95,56,55,95,118,99,97,99,100,97,116,97,0);
          let type_cQ = 3;
          let homeloadingJ = 0.0;
          let promotiona = new Map([[String.fromCharCode(116,101,110,115,105,111,110,95,114,95,57,0),String.fromCharCode(110,101,97,114,98,121,95,97,95,49,53,0)], [String.fromCharCode(97,100,100,98,108,107,95,106,95,49,48,48,0),String.fromCharCode(108,105,98,97,118,102,111,114,109,97,116,95,49,95,51,48,0)]]);
         down2 -= 3;
         iconarrowrightwhitek = `${parseInt(`${homeloadingJ}`) | 2}`;
         type_cQ &= promotiona.size;
         homeloadingJ += parseInt(`${homeloadingJ}`);
         promotiona[`${type_cQ}`] = promotiona.size;
      }
      if (3 >= ewarded8.length || !tickY) {
         tickY = ewarded8.includes(`${tickY}`);
      }
      connectionK = `${resenda.length * 2}`;
      if (connectionK.length == 3162748) {
         break;
      }
   } while ((connectionK.length == 3162748) && ((parseInt(`${kuaishouU}`) * connectionK.length) == 1));
       let libapminsightb1 = String.fromCharCode(116,95,51,57,95,109,101,109,110,114,0);
       let sidek = String.fromCharCode(101,120,116,101,110,100,101,100,95,106,95,49,53,0);
       let eighteenE = 5.0;
         eighteenE /= Math.max(parseFloat(`${libapminsightb1.length}`), 1);
      while (eighteenE < parseFloat(`${sidek.length}`)) {
          let iconbackwhiteQ = 2.0;
          let whiteanimationlivel = new Map([[String.fromCharCode(118,95,49,48,95,98,111,111,107,109,97,114,107,115,0),272], [String.fromCharCode(112,117,115,104,95,111,95,49,50,0),489], [String.fromCharCode(109,112,97,100,115,112,95,100,95,50,56,0),22]]);
          let iconrightorangeo = true;
          let submitL = new Map([[String.fromCharCode(114,95,51,49,95,98,111,117,110,100,97,114,105,101,115,0),String.fromCharCode(118,95,53,95,100,105,103,105,116,99,111,117,110,116,0)], [String.fromCharCode(116,95,53,53,95,99,111,110,116,101,110,116,108,101,115,115,0),String.fromCharCode(115,112,97,99,101,114,115,95,101,95,57,49,0)], [String.fromCharCode(121,95,52,56,95,112,97,115,115,112,111,114,116,0),String.fromCharCode(112,114,102,95,48,95,52,50,0)]]);
         sidek = "3";
         iconbackwhiteQ -= parseFloat(`${whiteanimationlivel.size}`);
         whiteanimationlivel = new Map([[`${submitL.size}`, parseInt(`${iconbackwhiteQ}`)]]);
         iconrightorangeo = whiteanimationlivel.size == 88 || iconrightorangeo;
         submitL[`${iconbackwhiteQ}`] = whiteanimationlivel.size ^ 1;
         break;
      }
       let predictiondefaultf = 1.0;
       let alert9 = 0.0;
      if (2.30 <= eighteenE) {
          let commentP = 1;
          let codegen9 = String.fromCharCode(100,95,49,57,95,111,111,108,98,97,114,0);
          let footballtrophyK = String.fromCharCode(112,95,50,53,95,109,117,108,116,105,112,97,114,116,0);
          let upgradeE = String.fromCharCode(115,95,54,55,95,101,116,97,0);
         eighteenE += parseFloat(`${1 * libapminsightb1.length}`);
         commentP /= Math.max(5, codegen9.length);
         codegen9 = "2";
         footballtrophyK = `${footballtrophyK.length << (Math.min(5, upgradeE.length))}`;
         upgradeE += "1";
      }
          let pointz = String.fromCharCode(122,111,111,109,95,108,95,53,57,0);
          let videocommon1 = new Map([[String.fromCharCode(101,95,53,53,95,99,104,105,108,100,114,101,110,0),false ], [String.fromCharCode(112,95,49,49,95,100,111,119,110,108,111,97,100,115,0),true ]]);
          let fullscreenmaxC = String.fromCharCode(114,101,112,108,97,99,101,115,95,119,95,49,50,0);
         sidek += `${2 >> (Math.min(5, Math.abs(parseInt(`${predictiondefaultf}`))))}`;
         pointz = `${3 * videocommon1.size}`;
         videocommon1[`${pointz}`] = pointz.length + videocommon1.size;
         fullscreenmaxC += "3";
      while (4.44 >= (4 - predictiondefaultf)) {
         eighteenE /= Math.max(5, parseFloat(`${2 & parseInt(`${eighteenE}`)}`));
         break;
      }
       let code0 = false;
      do {
         eighteenE /= Math.max(2, parseFloat(`${3}`));
         if (3125941.0 == eighteenE) {
            break;
         }
      } while (((eighteenE / (Math.max(4.12, 1))) <= 5.40) && (3125941.0 == eighteenE));
      for (let s = 0; s < 2; s++) {
         alert9 -= parseInt(`${predictiondefaultf}`) & 1;
      }
      analyticsW = new Map([[`${eighteenE}`, sidek.length]]);
      resenda += `${((bodan5 ? 3 : 2))}`;
   if ((analyticsW.size % (Math.max(1, 3))) <= 3 && bodan5) {
      bodan5 = resenda.length <= 58 && bodan5;
   }
      this._hideControls();
   for (let u = 0; u < 1; u++) {
      mime1.push((2 & (bodan5 ? 3 : 4)));
   }
      securitym = "2";
      launcherQ = `${2 * analyticsW.size}`;
      giftG -= parseFloat(`${mime1.length}`);
   while (5 == (securitym.length / 2)) {
      securitym = `${(securitym == String.fromCharCode(55,0) ? securitym.length : launcherQ.length)}`;
      break;
   }
      resenda += "1";
      launcherQ += `${(securitym == String.fromCharCode(121,0) ? securitym.length : parseInt(`${kuaishouU}`))}`;

    }, this.player.controlTimeoutDelay);
      resenda += `${mime1.length ^ 1}`;
   if (2 > (connectionK.length - mime1.length) || 1 > (2 - mime1.length)) {
      connectionK += `${parseInt(`${kuaishouU}`)}`;
   }
   if (securitym == String.fromCharCode(66,0)) {
      connectionK += `${1 + parseInt(`${giftG}`)}`;
   }
   if ((connectionK.length * 4) > 4 && (4 * mime1.length) > 2) {
      mime1.push(1 >> (Math.min(3, Math.abs(parseInt(`${giftG}`)))));
   }
   while (connectionK != launcherQ) {
      launcherQ += `${((bodan5 ? 3 : 3) % (Math.max(parseInt(`${giftG}`), 5)))}`;
      break;
   }
   while (resenda.length <= 2) {
       let report2 = 5;
       let gestureN = String.fromCharCode(112,99,109,119,98,95,57,95,56,56,0);
       let memberE = 4.0;
       let binddatas_ = 1;
       let iconclosewhitewithbg2 = 5;
         gestureN = `${binddatas_ % 3}`;
          let libruntimeexecutor4 = String.fromCharCode(99,111,111,107,105,101,95,57,95,49,48,48,0);
         gestureN += `${parseInt(`${memberE}`) << (Math.min(libruntimeexecutor4.length, 2))}`;
      while (1 >= (gestureN.length & iconclosewhitewithbg2) && 1 >= (gestureN.length & 1)) {
         gestureN += `${report2}`;
         break;
      }
      while (1 <= (gestureN.length << (Math.min(Math.abs(4), 3))) && 1 <= (4 << (Math.min(2, gestureN.length)))) {
         binddatas_ *= 2;
         break;
      }
      do {
         gestureN += "1 - iconclosewhitewithbg2";
         if (3622203 == gestureN.length) {
            break;
         }
      } while ((3622203 == gestureN.length) && ((1 - gestureN.length) == 1));
          let mbbidm = false;
          let episodeu = String.fromCharCode(100,95,56,52,95,104,97,108,102,102,108,111,97,116,0);
         binddatas_ %= Math.max(2, ((mbbidm ? 2 : 4)));
         mbbidm = episodeu.length <= episodeu.length;
      for (let x = 0; x < 2; x++) {
         binddatas_ >>= Math.min(Math.abs(2), 5);
      }
          let statst = 3.0;
         binddatas_ |= iconclosewhitewithbg2 & 1;
         statst /= Math.max(3, parseFloat(`${parseInt(`${statst}`) * 2}`));
      do {
         gestureN += `${gestureN.length + binddatas_}`;
         if (3209995 == gestureN.length) {
            break;
         }
      } while ((3209995 == gestureN.length) && (2 <= gestureN.length));
          let attributedstringR = 5.0;
          let mergerE = String.fromCharCode(103,114,111,101,115,116,108,95,50,95,57,51,0);
         gestureN = "3";
         attributedstringR /= Math.max(4, parseFloat(`${2 + mergerE.length}`));
         mergerE += `${mergerE.length | parseInt(`${attributedstringR}`)}`;
         gestureN += `${parseInt(`${memberE}`) - gestureN.length}`;
         memberE -= report2 ^ 3;
          let placementu = 3.0;
          let tumbnailw = String.fromCharCode(120,95,56,51,0);
          let iconbackwhite5 = 3.0;
         memberE -= 3;
         placementu -= parseInt(`${iconbackwhite5}`);
         tumbnailw += `${parseInt(`${placementu}`)}`;
         iconbackwhite5 += parseFloat(`${parseInt(`${iconbackwhite5}`) / (Math.max(5, parseInt(`${placementu}`)))}`);
          let signinupX = 1;
         memberE += parseInt(`${memberE}`) / (Math.max(gestureN.length, 2));
         signinupX %= Math.max(signinupX, 4);
       let libreactperfloggerjnip = false;
       let selectionr = true;
      resenda = `${2 * parseInt(`${giftG}`)}`;
      break;
   }
      resenda += `${parseInt(`${kuaishouU}`) ^ 1}`;

  }

   
  clearControlTimeout() {
       let switch_5x = [String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,95,111,95,55,0), String.fromCharCode(99,95,49,51,95,112,114,101,115,101,110,116,97,98,108,101,0)];
    let package_fm = [57, 83];
    let gmailO = 1.0;
    let libcrashsdkc = false;
    let detailsX = 1.0;
    let nendG = String.fromCharCode(113,95,55,50,95,119,101,98,112,0);
    let whiteF = new Map([[String.fromCharCode(108,95,53,54,95,108,111,103,105,99,0),String.fromCharCode(120,95,55,56,95,109,97,108,101,0)], [String.fromCharCode(98,95,55,95,119,105,116,104,100,114,97,119,0),String.fromCharCode(111,98,106,95,115,95,51,54,0)], [String.fromCharCode(100,105,109,95,105,95,51,57,0),String.fromCharCode(100,117,109,109,121,95,106,95,52,0)]]);
    let middle6 = 3.0;
    let hoveri = String.fromCharCode(113,95,55,56,95,114,116,99,99,0);
    let splashF = [515, 808, 401];
    let suggestion9 = 0.0;
    let predictionbutton0 = String.fromCharCode(109,95,51,52,95,113,117,101,117,101,100,0);
       let rulesU = 4;
         rulesU *= rulesU % (Math.max(1, rulesU));
      do {
         rulesU %= Math.max(rulesU, 4);
         if (rulesU == 1805155) {
            break;
         }
      } while ((2 > (4 * rulesU)) && (rulesU == 1805155));
         rulesU <<= Math.min(5, Math.abs(1));
      whiteF = new Map([[`${package_fm.length}`, parseInt(`${gmailO}`) ^ package_fm.length]]);
      hoveri = `${nendG.length * parseInt(`${detailsX}`)}`;
   if (switch_5x.length > hoveri.length) {
       let paginationV = 3;
       let logo1 = [953, 230, 662];
       let minivodn = 5.0;
       let mathR = [337, 399];
       let calendari = 4.0;
      while (1 <= (logo1.length & 2)) {
         logo1 = [paginationV];
         break;
      }
         mathR.push(3 * paginationV);
      while (1 <= (mathR.length + logo1.length) && 2 <= (logo1.length + 1)) {
         mathR.push(logo1.length >> (Math.min(Math.abs(1), 2)));
         break;
      }
      for (let u = 0; u < 1; u++) {
         logo1.push(paginationV);
      }
         logo1.push(2 + logo1.length);
       let fileb = String.fromCharCode(118,105,116,97,108,105,107,108,105,122,101,95,57,95,57,54,0);
      if (3 > (fileb.length - logo1.length) || 3 > (logo1.length - fileb.length)) {
         fileb += `${mathR.length ^ 2}`;
      }
      for (let s = 0; s < 3; s++) {
         minivodn += parseFloat(`${parseInt(`${minivodn}`) + 2}`);
      }
          let tailG = false;
          let settingsa = true;
          let leftC = new Map([[String.fromCharCode(120,107,101,101,112,95,98,95,50,53,0),706], [String.fromCharCode(98,108,111,119,102,105,115,104,95,51,95,53,55,0),388], [String.fromCharCode(98,95,50,50,95,109,105,110,105,109,105,122,101,100,0),565]]);
         calendari -= (String.fromCharCode(103,0) == fileb ? logo1.length : fileb.length);
         tailG = !tailG && !settingsa;
         settingsa = (tailG ? settingsa : tailG);
         leftC = new Map([[`${leftC.size}`, 1 | leftC.size]]);
       let playN = 2.0;
         mathR.push(2 / (Math.max(8, parseInt(`${minivodn}`))));
          let footballfiledlayoutw = 5.0;
          let bootsplashB = String.fromCharCode(115,116,114,101,110,103,116,104,115,95,121,95,52,50,0);
         minivodn -= parseFloat(`${3}`);
         footballfiledlayoutw /= Math.max(1, parseFloat(`${parseInt(`${footballfiledlayoutw}`)}`));
         bootsplashB += `${(String.fromCharCode(78,0) == bootsplashB ? bootsplashB.length : parseInt(`${footballfiledlayoutw}`))}`;
      do {
         logo1 = [mathR.length];
         if (447505 == logo1.length) {
            break;
         }
      } while ((447505 == logo1.length) && (minivodn <= 2.10));
      while (2 >= (fileb.length / (Math.max(6, mathR.length)))) {
         fileb += `${3 * paginationV}`;
         break;
      }
      if ((mathR.length ^ 2) > 3 && 2 > (mathR.length / (Math.max(2, 2)))) {
         mathR = [paginationV & logo1.length];
      }
      switch_5x.push(parseInt(`${minivodn}`));
   }
      nendG += `${parseInt(`${gmailO}`) / 1}`;
       let annerW = [931, 454];
      if (annerW.length > annerW.length) {
          let filterH = 2;
          let defaultteamT = String.fromCharCode(112,108,97,121,103,114,111,117,110,100,95,53,95,57,50,0);
          let matchdetailbgB = 4;
          let mbbannerV = 2.0;
          let libfbH = String.fromCharCode(101,95,54,57,95,98,121,116,101,99,111,100,101,118,116,97,98,0);
         annerW.push(3 | libfbH.length);
         filterH += filterH + parseInt(`${mbbannerV}`);
         defaultteamT += `${parseInt(`${mbbannerV}`)}`;
         matchdetailbgB *= parseInt(`${mbbannerV}`) << (Math.min(defaultteamT.length, 5));
         libfbH = `${1 / (Math.max(matchdetailbgB, 5))}`;
      }
      do {
          let suggestion7 = 4;
          let read5 = String.fromCharCode(97,95,54,50,95,116,122,102,105,108,101,0);
          let expiredx = 3.0;
          let arrowR = [624, 800];
          let cornershootX = true;
         annerW.push(2);
         suggestion7 >>= Math.min(Math.abs(3 - suggestion7), 3);
         read5 += "2";
         expiredx /= Math.max(arrowR.length, 2);
         arrowR = [suggestion7];
         cornershootX = 39 >= suggestion7;
         if (annerW.length == 547338) {
            break;
         }
      } while ((annerW.length == 547338) && ((annerW.length >> (Math.min(annerW.length, 5))) < 1));
         annerW = [annerW.length];
      detailsX *= parseFloat(`${parseInt(`${gmailO}`)}`);
      nendG = `${3 | parseInt(`${middle6}`)}`;
       let expandl = String.fromCharCode(110,95,55,53,95,112,97,103,101,110,117,109,98,101,114,0);
       let alert_ = String.fromCharCode(107,95,52,54,95,116,97,117,0);
         expandl = `${alert_.length}`;
      if (alert_ != String.fromCharCode(111,0) && expandl != String.fromCharCode(111,0)) {
         alert_ += `${(expandl == String.fromCharCode(51,0) ? expandl.length : alert_.length)}`;
      }
          let popup7 = 3.0;
          let umengt = new Map([[String.fromCharCode(99,97,118,115,118,105,100,101,111,95,100,95,50,55,0),String.fromCharCode(99,95,56,48,95,108,111,117,100,115,112,101,97,107,101,114,0)], [String.fromCharCode(104,95,54,52,95,116,104,114,101,97,100,105,110,103,0),String.fromCharCode(106,95,54,95,115,97,116,100,0)], [String.fromCharCode(110,95,49,55,95,114,101,100,105,114,101,99,116,0),String.fromCharCode(121,95,51,56,95,103,101,110,101,114,97,116,105,110,103,0)]]);
          let baiduP = [373, 14];
         alert_ += "1";
         popup7 *= baiduP.length;
         umengt = new Map([[`${baiduP.length}`, baiduP.length]]);
      do {
         alert_ += `${alert_.length / (Math.max(3, 9))}`;
         if (alert_.length == 2463567) {
            break;
         }
      } while ((4 == alert_.length) && (alert_.length == 2463567));
         alert_ += `${expandl.length}`;
         expandl += `${expandl.length ^ alert_.length}`;
      whiteF[`${splashF.length}`] = splashF.length >> (Math.min(package_fm.length, 3));
       let selectedq = false;
       let fullscreenmaxT = 4.0;
      if (3.55 < fullscreenmaxT) {
          let iconviewergif_ = new Map([[String.fromCharCode(100,111,119,110,115,104,105,102,116,95,55,95,55,50,0),String.fromCharCode(108,95,49,48,95,100,105,115,99,111,110,110,101,99,116,101,100,0)], [String.fromCharCode(111,95,52,51,95,105,108,98,99,0),String.fromCharCode(108,95,50,95,107,98,112,115,0)], [String.fromCharCode(99,97,110,99,101,108,101,100,95,104,95,49,55,0),String.fromCharCode(105,95,55,54,95,102,111,117,114,116,104,0)]]);
          let feedbacks = String.fromCharCode(108,95,56,55,95,115,97,109,112,108,105,110,103,0);
          let roomY = 1.0;
          let sourceC = 5.0;
          let iconschedules = false;
         selectedq = sourceC >= 99.97;
         iconviewergif_[`${iconschedules}`] = ((iconschedules ? 3 : 4) & parseInt(`${roomY}`));
         feedbacks += `${(feedbacks == String.fromCharCode(112,0) ? feedbacks.length : parseInt(`${roomY}`))}`;
         sourceC *= parseFloat(`${3 >> (Math.min(4, Math.abs(parseInt(`${roomY}`))))}`);
      }
      do {
         selectedq = !selectedq;
         if (selectedq ? !selectedq : selectedq) {
            break;
         }
      } while ((selectedq ? !selectedq : selectedq) && (!selectedq));
      if (selectedq || (fullscreenmaxT / 2.52) <= 2.64) {
         selectedq = !selectedq;
      }
          let controlu = false;
          let splashv = [689, 978];
         selectedq = ((splashv.length % (Math.max(1, (!controlu ? 21 : splashv.length)))) >= 21);
      do {
          let stationsh = false;
          let mini6 = [84, 663, 966];
          let nterstitialy = true;
         selectedq = mini6.includes(stationsh);
         stationsh = (!nterstitialy ? nterstitialy : nterstitialy);
         mini6.push(((nterstitialy ? 4 : 2) | (nterstitialy ? 4 : 5)));
         if (selectedq ? !selectedq : selectedq) {
            break;
         }
      } while ((!selectedq || 3.7 == (fullscreenmaxT + 3.57)) && (selectedq ? !selectedq : selectedq));
          let kick9 = 5.0;
         fullscreenmaxT *= parseFloat(`${3}`);
         kick9 /= Math.max(3, parseFloat(`${parseInt(`${kick9}`) / 1}`));
      switch_5x = [parseInt(`${gmailO}`)];
   while (!Array.from(whiteF.keys()).includes(`${gmailO}`)) {
      gmailO /= Math.max((parseFloat(`${(libcrashsdkc ? 3 : 3) - parseInt(`${middle6}`)}`)), 2);
      break;
   }
   if (3.39 > (2.63 * gmailO)) {
      hoveri += `${whiteF.size >> (Math.min(Math.abs(1), 5))}`;
   }
      hoveri = `${parseInt(`${detailsX}`)}`;
      suggestion9 *= (parseFloat(`${String.fromCharCode(100,0) == hoveri ? hoveri.length : parseInt(`${detailsX}`)}`));
   if (1 > (package_fm.length % 5)) {
       let xvods = 5.0;
       let internet1 = String.fromCharCode(97,95,51,95,101,103,114,101,115,115,0);
       let orangedownarrowI = 4;
       let android7 = String.fromCharCode(111,110,116,114,97,115,116,95,113,95,51,55,0);
      for (let j = 0; j < 2; j++) {
         orangedownarrowI %= Math.max(2 + orangedownarrowI, 2);
      }
         orangedownarrowI ^= parseInt(`${xvods}`);
         orangedownarrowI *= internet1.length >> (Math.min(5, Math.abs(orangedownarrowI)));
      while ((internet1.length | orangedownarrowI) <= 2 && 5 <= (orangedownarrowI | 2)) {
          let basketballB = String.fromCharCode(100,95,49,49,95,108,97,115,116,0);
          let heartQ = 2.0;
          let mountingc = 4.0;
         orangedownarrowI /= Math.max(4, parseInt(`${mountingc}`) | parseInt(`${xvods}`));
         basketballB = `${parseInt(`${heartQ}`)}`;
         heartQ += parseFloat(`${basketballB.length / 3}`);
         mountingc += parseFloat(`${basketballB.length}`);
         break;
      }
          let predictionbannere = new Map([[String.fromCharCode(105,102,110,115,95,122,95,52,0),false ], [String.fromCharCode(112,95,49,48,48,95,109,117,108,116,105,115,101,108,101,99,116,105,111,110,0),true ], [String.fromCharCode(117,115,97,98,108,101,95,109,95,53,56,0),true ]]);
          let shareb = String.fromCharCode(109,97,116,99,104,105,110,103,95,112,95,55,56,0);
         xvods /= Math.max(1, 2);
         predictionbannere[`${shareb}`] = predictionbannere.size;
         shareb += `${shareb.length}`;
         orangedownarrowI += (String.fromCharCode(119,0) == android7 ? parseInt(`${xvods}`) : android7.length);
          let renew0 = String.fromCharCode(110,99,114,121,112,116,105,111,110,95,101,95,48,0);
          let reactnativeultimatelistviewQ = false;
          let whatsappM = String.fromCharCode(106,95,53,49,95,105,110,115,101,114,116,101,114,0);
         internet1 = `${(internet1 == String.fromCharCode(75,0) ? (reactnativeultimatelistviewQ ? 1 : 4) : internet1.length)}`;
         renew0 = `${whatsappM.length ^ renew0.length}`;
         reactnativeultimatelistviewQ = whatsappM == String.fromCharCode(101,0);
      do {
          let schedulem = 5.0;
          let moden = String.fromCharCode(122,95,52,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,0);
          let confirmation7 = 1.0;
          let clearu = 1.0;
         android7 = `${parseInt(`${confirmation7}`) / (Math.max(4, parseInt(`${xvods}`)))}`;
         schedulem /= Math.max(parseInt(`${schedulem}`) >> (Math.min(moden.length, 3)), 4);
         moden = "3";
         confirmation7 /= Math.max(5, parseInt(`${schedulem}`));
         clearu -= moden.length + 3;
         if (2193950 == android7.length) {
            break;
         }
      } while ((android7.length <= 4) && (2193950 == android7.length));
      nendG = "3";
   }
      whiteF = new Map([[hoveri, hoveri.length]]);

    clearTimeout(this.player.controlTimeout);
   while ((3.50 * detailsX) >= 5.41) {
      detailsX -= (parseFloat(`${nendG == String.fromCharCode(50,0) ? nendG.length : package_fm.length}`));
      break;
   }
       let libfileo = String.fromCharCode(118,95,57,57,95,109,117,108,116,105,112,108,101,120,101,100,0);
      for (let j = 0; j < 3; j++) {
          let topon3 = 5.0;
          let sheetI = String.fromCharCode(102,95,55,56,95,100,117,109,0);
          let z_lockK = String.fromCharCode(107,95,57,56,95,99,111,110,110,105,110,112,117,116,0);
          let elementsQ = 1;
         libfileo += `${libfileo.length}`;
         topon3 /= Math.max(parseFloat(`${2 & parseInt(`${topon3}`)}`), 3);
         sheetI += `${parseInt(`${topon3}`)}`;
         z_lockK = `${parseInt(`${topon3}`) << (Math.min(z_lockK.length, 5))}`;
         elementsQ -= elementsQ;
      }
         libfileo = `${(String.fromCharCode(78,0) == libfileo ? libfileo.length : libfileo.length)}`;
       let libcxxcomponentsU = 3.0;
       let albumT = 5.0;
      gmailO += parseFloat(`${3}`);
       let entrye = 2;
      while ((entrye << (Math.min(Math.abs(1), 2))) < 1 && (1 << (Math.min(4, Math.abs(entrye)))) < 3) {
          let emojiheartB = 5;
          let homeicone = [591, 578, 80];
         entrye -= homeicone.length;
         emojiheartB += emojiheartB;
         homeicone.push(3 * emojiheartB);
         break;
      }
         entrye += entrye;
      do {
         entrye %= Math.max(entrye, 4);
         if (3023208 == entrye) {
            break;
         }
      } while (((entrye % (Math.max(entrye, 4))) <= 1 && 1 <= (entrye % (Math.max(entrye, 2)))) && (3023208 == entrye));
      suggestion9 *= parseFloat(`${parseInt(`${gmailO}`) / 1}`);
      nendG += "1";
       let downH = String.fromCharCode(97,95,54,56,95,110,111,110,0);
       let whatsappm = String.fromCharCode(105,114,99,97,109,95,118,95,53,57,0);
       let expandf = new Map([[String.fromCharCode(106,95,56,56,95,114,101,118,101,97,108,101,100,0),761], [String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,115,95,97,95,52,50,0),199], [String.fromCharCode(115,109,97,108,108,95,116,95,49,56,0),946]]);
       let tickedA = new Map([[String.fromCharCode(110,95,49,48,48,95,100,105,115,116,114,97,99,116,105,111,110,0),String.fromCharCode(114,95,49,56,0)], [String.fromCharCode(118,105,101,119,115,95,120,95,54,55,0),String.fromCharCode(108,111,103,108,101,118,101,108,95,104,95,51,52,0)]]);
      for (let g = 0; g < 2; g++) {
          let crossY = 3.0;
          let minivod_ = String.fromCharCode(118,112,115,104,97,114,101,100,95,109,95,54,48,0);
         expandf[`${expandf.size}`] = tickedA.size - expandf.size;
         crossY /= Math.max(parseFloat(`${1}`), 1);
         minivod_ = `${parseInt(`${crossY}`) << (Math.min(Math.abs(1), 1))}`;
      }
         downH += `${downH.length - expandf.size}`;
       let filer = 2;
         filer >>= Math.min(2, Math.abs((String.fromCharCode(121,0) == whatsappm ? filer : whatsappm.length)));
      do {
         whatsappm += "1";
         if (String.fromCharCode(112,103,115,118,105,113,107,99,100,51,0) == whatsappm) {
            break;
         }
      } while ((whatsappm.endsWith(`${filer}`)) && (String.fromCharCode(112,103,115,118,105,113,107,99,100,51,0) == whatsappm));
      libcrashsdkc = (parseInt(`${gmailO}`) + whatsappm.length) >= 65;
   if (2.78 < (detailsX * 4.58)) {
      detailsX /= Math.max(2, parseFloat(`${package_fm.length + 1}`));
   }
   if (4.12 <= (gmailO + parseFloat(`${switch_5x.length}`)) || (gmailO + parseFloat(`${switch_5x.length}`)) <= 4.12) {
      gmailO /= Math.max(parseFloat(`${whiteF.size}`), 2);
   }
   do {
      detailsX += (parseFloat(`${parseInt(`${detailsX}`) - (libcrashsdkc ? 3 : 5)}`));
      if (3373999.0 == detailsX) {
         break;
      }
   } while ((2.75 < (parseFloat(`${whiteF.size}`) - detailsX) || 1 < (parseInt(`${detailsX}`) - whiteF.size)) && (3373999.0 == detailsX));
   do {
      middle6 -= ((libcrashsdkc ? 2 : 2) % (Math.max(parseInt(`${middle6}`), 5)));
      if (middle6 == 95557.0) {
         break;
      }
   } while ((middle6 == 95557.0) && (3.54 > (middle6 * 5.7)));
      whiteF = new Map([[`${splashF.length}`, parseInt(`${gmailO}`)]]);
   do {
      hoveri += `${1 | nendG.length}`;
      if (hoveri.length == 2312572) {
         break;
      }
   } while ((middle6 >= hoveri.length) && (hoveri.length == 2312572));
       let greenQ = 3.0;
          let applicationr = String.fromCharCode(102,114,101,101,108,97,100,100,114,115,95,120,95,51,56,0);
          let videovar_ = 1;
         greenQ -= parseInt(`${greenQ}`) >> (Math.min(applicationr.length, 3));
         applicationr += `${videovar_ & videovar_}`;
      while (greenQ <= greenQ) {
          let brightness5 = [499, 81, 0];
          let darkC = false;
         greenQ += ((darkC ? 1 : 2) ^ parseInt(`${greenQ}`));
         brightness5 = [1];
         darkC = brightness5.length >= 37;
         break;
      }
      if (5.95 > (greenQ - greenQ) || 3.53 > (greenQ - 5.95)) {
          let sendk = 0;
          let kickb = String.fromCharCode(102,95,52,54,95,116,114,97,105,108,105,110,103,0);
          let agreementa = 0.0;
          let private_5V = String.fromCharCode(115,121,115,99,116,108,115,95,54,95,56,57,0);
          let liblogger1 = 3.0;
         greenQ += parseInt(`${greenQ}`);
         sendk |= 3 * parseInt(`${agreementa}`);
         kickb = `${kickb.length}`;
         agreementa *= parseFloat(`${3 + parseInt(`${agreementa}`)}`);
         private_5V += `${sendk / (Math.max(parseInt(`${liblogger1}`), 10))}`;
         liblogger1 *= parseFloat(`${parseInt(`${liblogger1}`)}`);
      }
      detailsX *= parseFloat(`${1 / (Math.max(parseInt(`${greenQ}`), 7))}`);
   while (3 <= (2 * hoveri.length)) {
      hoveri += `${whiteF.size}`;
      break;
   }
   for (let v = 0; v < 2; v++) {
      libcrashsdkc = (middle6 + splashF.length) < 3.71;
   }

  }

   
  resetControlTimeout() {
       let matchesw = 5.0;
    let reducerz = String.fromCharCode(116,105,99,107,105,110,103,95,114,95,52,52,0);
    let yellowtoredQ = true;
    let iconwatchnowg = new Map([[String.fromCharCode(119,109,118,100,97,116,97,95,100,95,56,0),116], [String.fromCharCode(119,95,56,54,95,100,105,114,101,99,116,105,111,110,0),130], [String.fromCharCode(111,95,53,57,95,115,121,110,99,109,97,114,107,101,114,0),33]]);
    let uimanagerm = String.fromCharCode(103,95,50,49,95,102,97,99,116,0);
    let libavformatm = false;
    let sortq = String.fromCharCode(100,95,49,48,48,95,114,101,100,101,108,101,103,97,116,101,0);
    let tail5 = true;
    let libtob2 = 2;
    let b_center8 = [383, 596, 240];
    let userj = new Map([[String.fromCharCode(115,121,115,99,116,108,95,109,95,53,57,0),String.fromCharCode(112,95,49,50,95,116,114,101,101,119,114,105,116,101,114,0)], [String.fromCharCode(112,97,103,101,114,95,104,95,56,48,0),String.fromCharCode(113,95,50,56,0)]]);
    let libhermes7 = String.fromCharCode(109,97,115,107,101,100,95,52,95,52,0);
   for (let t = 0; t < 2; t++) {
      iconwatchnowg[`${tail5}`] = (parseInt(`${matchesw}`) / (Math.max(4, (tail5 ? 2 : 4))));
   }
      sortq += `${(libtob2 - (libavformatm ? 4 : 5))}`;
   for (let t = 0; t < 3; t++) {
      libavformatm = 69 == iconwatchnowg.size || 69 == uimanagerm.length;
   }
   while ((matchesw * 1.17) < 4.82) {
      matchesw /= Math.max(libtob2 ^ 1, 5);
      break;
   }
       let iconmoreY = String.fromCharCode(119,95,56,52,95,112,108,117,114,97,108,105,122,97,116,105,111,110,0);
       let elementsQ = String.fromCharCode(121,95,48,95,101,118,101,110,108,121,0);
       let mergerB = String.fromCharCode(113,95,54,56,95,114,97,116,101,99,111,110,116,114,111,108,0);
         mergerB = `${elementsQ.length * 3}`;
         mergerB = `${iconmoreY.length << (Math.min(3, elementsQ.length))}`;
          let layoutt = 0;
         elementsQ += `${iconmoreY.length / (Math.max(elementsQ.length, 4))}`;
         layoutt -= layoutt;
          let iconclosewhitebgB = 3.0;
          let predictiondefaultI = String.fromCharCode(101,95,50,52,95,116,107,104,100,0);
          let configo = String.fromCharCode(114,101,97,100,98,105,116,115,95,105,95,55,48,0);
         elementsQ += `${(elementsQ == String.fromCharCode(102,0) ? elementsQ.length : iconmoreY.length)}`;
         iconclosewhitebgB -= parseFloat(`${configo.length + 3}`);
         predictiondefaultI = `${configo.length % 1}`;
         iconmoreY = `${iconmoreY.length & 2}`;
         iconmoreY += `${iconmoreY.length}`;
      for (let x = 0; x < 1; x++) {
          let iconnotificationnewF = 5;
          let sellmathbackground5 = 5.0;
         elementsQ += `${mergerB.length}`;
         iconnotificationnewF &= parseInt(`${sellmathbackground5}`);
         sellmathbackground5 -= parseFloat(`${parseInt(`${sellmathbackground5}`) >> (Math.min(1, Math.abs(iconnotificationnewF)))}`);
      }
         iconmoreY = `${elementsQ.length}`;
      while (elementsQ.length > 4) {
         elementsQ += `${mergerB.length}`;
         break;
      }
      reducerz = `${sortq.length & 1}`;
       let indexJ = 1.0;
       let interstitialZ = false;
       let internet6 = false;
      while (1.90 >= (5.29 * indexJ) && indexJ >= 5.29) {
         indexJ *= (parseFloat(`${parseInt(`${indexJ}`) >> (Math.min(3, Math.abs((interstitialZ ? 2 : 1))))}`));
         break;
      }
      if (!interstitialZ) {
         indexJ -= (parseFloat(`${(internet6 ? 3 : 1)}`));
      }
      uimanagerm += `${((tail5 ? 4 : 5) / 1)}`;
      reducerz += `${uimanagerm.length}`;
   for (let y = 0; y < 1; y++) {
       let graphicsp = new Map([[String.fromCharCode(105,95,57,56,95,118,111,116,101,114,0),963], [String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,101,95,49,48,0),947]]);
       let reminderN = String.fromCharCode(111,98,106,95,122,95,50,48,0);
       let hejiP = [499, 573, 847];
       let logoutE = false;
      do {
          let iconclosewhite9 = String.fromCharCode(115,95,49,95,105,115,115,117,105,110,103,0);
          let iconcalendarX = 1;
          let libreanimatedM = false;
         hejiP.push((iconclosewhite9 == String.fromCharCode(53,0) ? (libreanimatedM ? 1 : 3) : iconclosewhite9.length));
         iconcalendarX &= iconcalendarX - 2;
         if (2098567 == hejiP.length) {
            break;
         }
      } while ((2098567 == hejiP.length) && (2 == (4 / (Math.max(2, reminderN.length)))));
         reminderN = `${1 | hejiP.length}`;
      for (let y = 0; y < 1; y++) {
          let backwhite1 = String.fromCharCode(108,95,55,48,95,104,101,120,0);
          let foundB = 3;
          let libreactperfloggerjniK = 5.0;
         logoutE = backwhite1 == String.fromCharCode(72,0);
         backwhite1 = `${foundB << (Math.min(Math.abs(parseInt(`${libreactperfloggerjniK}`)), 1))}`;
         foundB >>= Math.min(4, Math.abs(foundB % (Math.max(3, parseInt(`${libreactperfloggerjniK}`)))));
      }
         graphicsp[`${hejiP.length}`] = 1 - hejiP.length;
          let productG = String.fromCharCode(103,95,53,51,95,104,111,108,100,115,0);
          let libruntimeexecutorJ = [207, 46, 592];
          let logoutA = 5.0;
         hejiP.push(parseInt(`${logoutA}`));
         productG = `${productG.length << (Math.min(Math.abs(3), 3))}`;
         libruntimeexecutorJ = [2];
         logoutA /= Math.max(1, parseFloat(`${3}`));
       let bingW = String.fromCharCode(102,97,118,101,100,95,52,95,51,49,0);
       let context6 = String.fromCharCode(110,95,49,49,95,97,116,99,104,0);
         graphicsp[`${logoutE}`] = ((logoutE ? 3 : 3));
      while (!logoutE) {
          let termsG = new Map([[String.fromCharCode(114,100,109,117,108,116,95,111,95,57,57,0),String.fromCharCode(110,97,118,105,103,97,116,101,95,111,95,57,54,0)], [String.fromCharCode(112,105,120,99,116,120,95,119,95,49,56,0),String.fromCharCode(118,95,49,51,95,115,109,100,109,0)]]);
          let logoutP = 5.0;
          let manifest5 = [String.fromCharCode(116,95,49,57,95,115,101,116,115,111,99,107,111,112,116,0), String.fromCharCode(114,101,117,115,97,98,108,101,95,122,95,56,57,0)];
          let leakcheckerW = 3.0;
         hejiP.push(parseInt(`${leakcheckerW}`) ^ 3);
         termsG[`${logoutP}`] = 3;
         logoutP += parseFloat(`${manifest5.length / 3}`);
         manifest5.push(2);
         leakcheckerW *= termsG.size;
         break;
      }
         reminderN += `${bingW.length}`;
       let graphY = false;
       let tempnodatas = false;
      do {
         reminderN += `${((graphY ? 2 : 4))}`;
         if (2201680 == reminderN.length) {
            break;
         }
      } while ((2201680 == reminderN.length) && ((graphicsp.size & reminderN.length) == 4 || (graphicsp.size & 4) == 4));
       let textlayoutmanager2 = false;
      sortq += `${((libavformatm ? 4 : 2) - (tail5 ? 1 : 3))}`;
   }
   while (Array.from(iconwatchnowg.keys()).includes(`${matchesw}`)) {
      iconwatchnowg[uimanagerm] = (uimanagerm == String.fromCharCode(84,0) ? uimanagerm.length : libtob2);
      break;
   }

    this.clearControlTimeout();
      matchesw *= reducerz.length;
   if (!tail5) {
      yellowtoredQ = reducerz == sortq;
   }
   for (let o = 0; o < 1; o++) {
      uimanagerm = `${(1 % (Math.max(4, (libavformatm ? 2 : 4))))}`;
   }
   while (uimanagerm.length == 4) {
       let regeng8 = 5;
       let libapminsightay = new Map([[String.fromCharCode(117,110,97,115,115,105,103,110,101,100,95,100,95,55,51,0),405], [String.fromCharCode(115,111,102,97,95,114,95,52,51,0),413], [String.fromCharCode(100,101,99,111,109,112,95,103,95,52,53,0),208]]);
       let transfer4 = new Map([[String.fromCharCode(115,104,111,114,116,101,110,95,109,95,54,49,0),175], [String.fromCharCode(115,95,53,55,95,97,99,101,115,115,111,114,121,0),460]]);
       let hoverF = new Map([[String.fromCharCode(114,101,112,108,97,121,101,114,95,105,95,56,55,0),false ], [String.fromCharCode(109,95,54,55,95,101,102,102,101,99,116,105,118,101,108,121,0),false ]]);
      while (libapminsightay.size <= hoverF.size) {
         hoverF = new Map([[`${hoverF.size}`, transfer4.size]]);
         break;
      }
      for (let j = 0; j < 1; j++) {
         regeng8 *= 3;
      }
      while (Array.from(libapminsightay.keys()).includes(`${hoverF.size}`)) {
         libapminsightay[`${regeng8}`] = libapminsightay.size;
         break;
      }
          let information9 = String.fromCharCode(112,95,52,53,95,114,102,102,116,105,0);
          let taiwanM = false;
          let icontransferclubH = true;
         transfer4[`${taiwanM}`] = 3 % (Math.max(5, transfer4.size));
         information9 += `${((icontransferclubH ? 2 : 3))}`;
         icontransferclubH = !information9.endsWith(`${icontransferclubH}`);
         libapminsightay[`${hoverF.size}`] = hoverF.size - 1;
      while (2 < (libapminsightay.size << (Math.min(Math.abs(2), 2)))) {
         libapminsightay[`${regeng8}`] = libapminsightay.size;
         break;
      }
       let libfbjniY = String.fromCharCode(119,95,50,53,95,115,116,115,99,0);
       let volumeZ = String.fromCharCode(100,95,48,95,97,112,112,101,110,100,0);
      do {
         volumeZ = `${hoverF.size}`;
         if (229447 == volumeZ.length) {
            break;
         }
      } while ((229447 == volumeZ.length) && (4 == libfbjniY.length));
         hoverF[`${regeng8}`] = 1;
      do {
         transfer4 = new Map([[`${transfer4.size}`, 3]]);
         if (transfer4.size == 4690327) {
            break;
         }
      } while ((5 > (regeng8 >> (Math.min(Math.abs(transfer4.size), 4)))) && (transfer4.size == 4690327));
       let codeg = 4;
      do {
          let phoneshareg = [String.fromCharCode(98,95,50,95,101,110,100,101,100,0), String.fromCharCode(97,114,99,104,105,116,101,99,116,117,114,101,95,106,95,55,56,0), String.fromCharCode(100,100,116,115,95,98,95,54,51,0)];
          let inactiveQ = String.fromCharCode(121,101,108,108,111,119,95,121,95,50,53,0);
          let iconarrowlefts = String.fromCharCode(114,101,105,110,115,101,114,116,95,115,95,54,48,0);
          let defaultfootballbg2 = false;
          let basketballawayteamx = String.fromCharCode(97,117,116,104,111,114,105,122,101,114,95,110,95,55,49,0);
         libfbjniY = "2";
         phoneshareg = [(inactiveQ == String.fromCharCode(101,0) ? inactiveQ.length : basketballawayteamx.length)];
         iconarrowlefts += `${phoneshareg.length + inactiveQ.length}`;
         defaultfootballbg2 = !defaultfootballbg2;
         basketballawayteamx = `${phoneshareg.length}`;
         if (libfbjniY.length == 1306879) {
            break;
         }
      } while ((libfbjniY.length == 1306879) && (1 <= volumeZ.length));
      uimanagerm = `${((tail5 ? 1 : 1) | libtob2)}`;
      break;
   }
      uimanagerm = `${(1 / (Math.max(10, (libavformatm ? 1 : 1))))}`;
      reducerz = "2";
      sortq = `${2 / (Math.max(9, parseInt(`${matchesw}`)))}`;
      reducerz = `${(sortq.length >> (Math.min(3, Math.abs((tail5 ? 3 : 4)))))}`;
   if ((1 >> (Math.min(3, reducerz.length))) < 4) {
       let hnewsI = String.fromCharCode(115,116,114,102,116,105,109,101,95,101,95,50,50,0);
       let giftbuttonv = [556, 915];
       let switch_ziS = String.fromCharCode(100,97,115,104,98,111,97,114,100,95,97,95,56,49,0);
       let icondefaultthumbnailp = [829, 290];
      for (let m = 0; m < 1; m++) {
         hnewsI = `${1 / (Math.max(2, switch_ziS.length))}`;
      }
          let weatherP = [926, 96, 395];
          let private_3R = 0.0;
         hnewsI = `${icondefaultthumbnailp.length}`;
         weatherP = [parseInt(`${private_3R}`) * 2];
         private_3R -= parseInt(`${private_3R}`) % 3;
      while (5 > (giftbuttonv.length | 3)) {
          let bing8 = String.fromCharCode(97,95,55,54,95,105,110,105,116,105,97,108,105,122,105,110,103,0);
          let sharewhites = new Map([[String.fromCharCode(105,110,103,101,110,105,101,110,116,95,100,95,51,49,0),411], [String.fromCharCode(115,95,56,53,95,103,97,105,110,115,0),805], [String.fromCharCode(118,95,52,49,95,108,105,98,115,112,101,101,120,0),887]]);
          let friendss = 4.0;
          let icondefaultthumbnail5 = String.fromCharCode(115,95,55,48,95,117,112,108,111,97,100,0);
          let leakcheckeru = [String.fromCharCode(119,95,53,50,95,101,118,114,99,0), String.fromCharCode(111,118,101,114,115,99,114,111,108,108,105,110,103,95,49,95,49,52,0), String.fromCharCode(117,110,115,97,118,101,95,119,95,49,52,0)];
         switch_ziS += `${sharewhites.size | 3}`;
         bing8 += `${leakcheckeru.length ^ 1}`;
         sharewhites[icondefaultthumbnail5] = 1;
         friendss -= (bing8 == String.fromCharCode(75,0) ? parseInt(`${friendss}`) : bing8.length);
         icondefaultthumbnail5 += `${(bing8 == String.fromCharCode(50,0) ? bing8.length : parseInt(`${friendss}`))}`;
         leakcheckeru.push(1 | bing8.length);
         break;
      }
      for (let w = 0; w < 1; w++) {
         giftbuttonv.push(2 + hnewsI.length);
      }
         giftbuttonv = [icondefaultthumbnailp.length & 3];
      do {
         icondefaultthumbnailp.push(switch_ziS.length + icondefaultthumbnailp.length);
         if (2749656 == icondefaultthumbnailp.length) {
            break;
         }
      } while ((2 < (giftbuttonv.length - 1)) && (2749656 == icondefaultthumbnailp.length));
       let cancel5 = String.fromCharCode(122,95,52,50,95,115,108,111,119,109,111,100,101,0);
       let live1 = String.fromCharCode(115,117,98,118,105,101,119,95,115,95,55,50,0);
      while ((hnewsI.length >> (Math.min(2, giftbuttonv.length))) == 4) {
          let gmail8 = [761, 484];
         giftbuttonv.push(giftbuttonv.length - 3);
         gmail8.push(gmail8.length);
         break;
      }
         switch_ziS = `${icondefaultthumbnailp.length ^ 3}`;
         switch_ziS = `${3 >> (Math.min(4, icondefaultthumbnailp.length))}`;
         switch_ziS += `${cancel5.length}`;
      for (let n = 0; n < 2; n++) {
         giftbuttonv = [hnewsI.length];
      }
      reducerz = `${sortq.length | hnewsI.length}`;
   }

    this.setControlTimeout();
      iconwatchnowg = new Map([[`${libavformatm}`, ((libavformatm ? 3 : 1))]]);
   for (let j = 0; j < 2; j++) {
       let greyc = true;
       let rocketo = new Map([[String.fromCharCode(122,95,50,53,95,97,114,99,104,101,116,121,112,101,0),true ], [String.fromCharCode(122,95,53,53,95,98,97,115,107,101,116,98,97,108,108,0),false ], [String.fromCharCode(106,95,49,53,95,103,101,116,0),true ]]);
          let tempE = String.fromCharCode(100,101,115,99,101,110,100,101,114,95,102,95,51,53,0);
          let playlist3 = String.fromCharCode(101,108,115,100,101,99,95,116,95,54,53,0);
         rocketo = new Map([[playlist3, ((greyc ? 5 : 3))]]);
         tempE += `${tempE.length}`;
         playlist3 += `${tempE.length & tempE.length}`;
          let teamX = String.fromCharCode(121,95,51,53,95,99,108,111,99,107,0);
          let libjsijniprofiler6 = false;
          let zhuboi = String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,115,95,57,95,55,56,0);
         greyc = 62 >= teamX.length && 62 >= rocketo.size;
         teamX += "2";
         libjsijniprofiler6 = zhuboi.length == 98;
         zhuboi = `${((libjsijniprofiler6 ? 2 : 4))}`;
      libtob2 %= Math.max(parseInt(`${matchesw}`) ^ iconwatchnowg.size, 2);
   }
       let indexE = [String.fromCharCode(105,110,118,101,114,116,95,112,95,50,52,0), String.fromCharCode(112,114,97,112,97,114,101,95,108,95,53,56,0), String.fromCharCode(110,95,50,52,95,99,97,110,111,110,0)];
          let otherO = [290, 280, 495];
          let bottomY = new Map([[String.fromCharCode(103,110,114,101,95,101,95,53,0),String.fromCharCode(103,95,52,56,95,98,105,103,105,110,116,0)], [String.fromCharCode(97,95,57,53,95,106,109,108,105,115,116,0),String.fromCharCode(116,105,109,101,117,116,105,108,115,95,49,95,49,48,0)], [String.fromCharCode(102,95,50,52,95,102,105,110,100,0),String.fromCharCode(107,105,116,116,121,95,48,95,56,54,0)]]);
         indexE.push(otherO.length * indexE.length);
         otherO.push(bottomY.size);
         bottomY[`${bottomY.size}`] = bottomY.size + bottomY.size;
         indexE.push(indexE.length / 2);
          let orientationX = false;
          let shielddoneN = true;
          let iconsharefriendsg = [String.fromCharCode(105,110,102,95,112,95,52,53,0), String.fromCharCode(103,95,52,52,95,112,97,115,116,0)];
         indexE = [1 >> (Math.min(5, iconsharefriendsg.length))];
         orientationX = (shielddoneN ? shielddoneN : shielddoneN);
      matchesw -= libtob2;
   do {
      sortq = "1";
      if (sortq == String.fromCharCode(109,114,52,0)) {
         break;
      }
   } while ((sortq == String.fromCharCode(109,114,52,0)) && ((sortq.length - matchesw) == 1.32 && (1.32 - matchesw) == 5.69));
   do {
      matchesw *= 1 * uimanagerm.length;
      if (3078760.0 == matchesw) {
         break;
      }
   } while ((3078760.0 == matchesw) && (matchesw >= 1.35));
      yellowtoredQ = 67 < b_center8.length;
   while (yellowtoredQ) {
      yellowtoredQ = !libavformatm;
      break;
   }
      reducerz = `${2 * parseInt(`${matchesw}`)}`;
      libavformatm = sortq.length >= 85;

  }

   
  hideControlAnimation() {
       let megaphone_ = 4;
    let modityu = 0;
    let catagoryG = String.fromCharCode(117,95,51,55,95,117,110,115,112,101,99,105,102,105,101,100,0);
    let dangerP = true;
    let whistleorange0 = String.fromCharCode(109,95,57,95,115,108,105,100,101,0);
    let cedbadcebfbfbfbcfecbcn = 2.0;
    let moviesI = String.fromCharCode(99,97,100,101,110,99,101,95,107,95,55,50,0);
    let launchK = [791, 606];
    let libimagepipeline8 = String.fromCharCode(108,95,55,51,95,112,97,99,107,101,116,104,101,97,100,101,114,0);
    let libfbo = String.fromCharCode(109,111,110,111,98,108,97,99,107,95,119,95,55,0);
    let iconsharefriendsy = true;
    let goalx = 1.0;
    let mbnativeadvancedn = String.fromCharCode(112,114,101,115,115,101,100,95,117,95,55,54,0);
    let liveshareH = 4;
    let libavcodeci = 5;
      mbnativeadvancedn += `${(megaphone_ & (dangerP ? 3 : 2))}`;
      goalx += 1 ^ whistleorange0.length;
      libfbo = `${3 & libimagepipeline8.length}`;

    Animated.parallel([
      Animated.timing(this.animations.topControl.opacity, {
        toValue: 0,
        duration: this.props.controlAnimationTiming,
        useNativeDriver: false,
      }),
      Animated.timing(this.animations.topControl.marginTop, {
        toValue: -100,
        duration: this.props.controlAnimationTiming,
        useNativeDriver: false,
      }),
      Animated.timing(this.animations.bottomControl.opacity, {
        toValue: 0,
        duration: this.props.controlAnimationTiming,
        useNativeDriver: false,
      }),
      Animated.timing(this.animations.bottomControl.marginBottom, {
        toValue: -100,
        duration: this.props.controlAnimationTiming,
        useNativeDriver: false,
      }),
    ]).start();
   do {
       let helpera = String.fromCharCode(115,95,54,49,95,117,100,112,0);
       let referrerx = new Map([[String.fromCharCode(116,108,117,116,95,101,95,54,51,0),530], [String.fromCharCode(102,95,51,57,95,109,115,101,112,115,110,114,0),252]]);
       let penaltyshootV = new Map([[String.fromCharCode(104,95,49,55,95,115,116,111,114,97,103,101,115,0),681], [String.fromCharCode(112,111,108,105,99,121,95,109,95,51,50,0),92]]);
       let iconqqh = String.fromCharCode(116,95,55,57,95,115,112,101,101,100,117,112,0);
          let iconY = [548, 633, 543];
         iconqqh = `${3 | penaltyshootV.size}`;
         iconY.push(1 - iconY.length);
         iconqqh = `${penaltyshootV.size * 3}`;
      for (let a = 0; a < 3; a++) {
         iconqqh = `${helpera.length ^ 3}`;
      }
      if ((penaltyshootV.size ^ 4) >= 2 || (4 ^ helpera.length) >= 2) {
         helpera = `${iconqqh.length % (Math.max(2, helpera.length))}`;
      }
          let nextr = 5.0;
          let libruntimeexecutorF = String.fromCharCode(105,109,112,108,95,106,95,53,48,0);
          let closei = false;
         referrerx[helpera] = referrerx.size;
         nextr -= 3 ^ parseInt(`${nextr}`);
         libruntimeexecutorF += `${((closei ? 3 : 2) & parseInt(`${nextr}`))}`;
         closei = libruntimeexecutorF.length < 65 || 35.30 < nextr;
      do {
          let bootsplashC = String.fromCharCode(105,95,53,57,95,99,116,120,105,100,120,105,110,99,0);
          let aboutG = String.fromCharCode(115,99,97,108,97,114,109,117,108,116,95,104,95,54,48,0);
         referrerx[`${helpera}`] = 1;
         bootsplashC = `${bootsplashC.length}`;
         aboutG = `${3 / (Math.max(7, bootsplashC.length))}`;
         if (referrerx.size == 914259) {
            break;
         }
      } while ((1 == (5 ^ iconqqh.length) && (referrerx.size ^ 5) == 3) && (referrerx.size == 914259));
      if (1 >= (helpera.length << (Math.min(Math.abs(2), 3))) || 2 >= (helpera.length << (Math.min(1, Math.abs(penaltyshootV.size))))) {
         penaltyshootV[iconqqh] = iconqqh.length ^ 3;
      }
      while (!iconqqh.startsWith(`${penaltyshootV.size}`)) {
          let mbbannerW = String.fromCharCode(114,101,99,114,101,97,116,101,95,52,95,50,50,0);
          let whistleoranger = 0;
          let icontransferclubI = String.fromCharCode(117,105,100,115,95,116,95,55,49,0);
          let reactnativeultimatelistviewi = 2.0;
          let tooltipsl = 1;
         penaltyshootV[`${penaltyshootV.size}`] = penaltyshootV.size - referrerx.size;
         mbbannerW += `${3 + whistleoranger}`;
         whistleoranger -= mbbannerW.length ^ 1;
         icontransferclubI += `${icontransferclubI.length}`;
         reactnativeultimatelistviewi += parseFloat(`${2}`);
         tooltipsl |= 2 - icontransferclubI.length;
         break;
      }
          let smallorangemanz = String.fromCharCode(98,95,51,49,95,115,105,98,108,105,110,103,115,0);
          let event5 = [132, 620, 945];
         iconqqh = `${(smallorangemanz == String.fromCharCode(107,0) ? smallorangemanz.length : event5.length)}`;
         helpera += `${referrerx.size | 2}`;
          let telemetry4 = true;
          let playlistV = String.fromCharCode(114,111,119,115,95,106,95,52,57,0);
          let resendp = 1.0;
         penaltyshootV = new Map([[`${telemetry4}`, ((telemetry4 ? 5 : 5) + 1)]]);
         playlistV = `${(String.fromCharCode(98,0) == playlistV ? parseInt(`${resendp}`) : playlistV.length)}`;
         resendp *= parseFloat(`${parseInt(`${resendp}`)}`);
       let predictionh = String.fromCharCode(105,95,50,55,95,100,105,115,97,112,112,101,97,114,105,110,103,0);
       let libloggery = String.fromCharCode(97,99,116,105,118,101,109,97,112,95,56,95,52,55,0);
      dangerP = megaphone_ <= 4;
      if (dangerP ? !dangerP : dangerP) {
         break;
      }
   } while ((!dangerP && libimagepipeline8.length > 4) && (dangerP ? !dangerP : dangerP));
   while (!catagoryG.endsWith(`${mbnativeadvancedn.length}`)) {
      catagoryG = "1";
      break;
   }
   do {
       let scorepopsoundX = 3.0;
       let filln = 1.0;
       let appst = new Map([[String.fromCharCode(120,95,49,57,95,114,116,112,0),false ], [String.fromCharCode(101,95,54,53,95,109,117,110,108,111,99,107,0),false ], [String.fromCharCode(121,95,52,50,95,115,105,120,116,97,112,0),true ]]);
       let circlev = String.fromCharCode(97,95,52,56,95,103,105,118,101,110,0);
          let gmailA = String.fromCharCode(113,95,50,48,95,109,111,110,107,101,121,115,97,117,100,105,111,0);
         circlev = `${parseInt(`${filln}`) - 2}`;
         gmailA += `${gmailA.length}`;
      for (let h = 0; h < 3; h++) {
         filln += 3 + parseInt(`${filln}`);
      }
          let libimagepipelinep = new Map([[String.fromCharCode(110,101,115,116,101,100,95,56,95,55,52,0),true ], [String.fromCharCode(116,119,111,109,95,97,95,55,50,0),true ], [String.fromCharCode(117,95,49,54,95,115,110,111,119,0),true ]]);
         scorepopsoundX += parseFloat(`${circlev.length}`);
         libimagepipelinep[`${libimagepipelinep.size}`] = libimagepipelinep.size % (Math.max(2, 9));
      do {
         scorepopsoundX += parseFloat(`${2}`);
         if (scorepopsoundX == 2478966.0) {
            break;
         }
      } while ((scorepopsoundX == 2478966.0) && (2.4 >= filln));
         scorepopsoundX *= parseFloat(`${circlev.length * parseInt(`${filln}`)}`);
      if (1 <= (parseInt(`${filln}`) / (Math.max(appst.size, 8)))) {
         filln *= appst.size | 2;
      }
         filln -= appst.size;
      while ((4 ^ circlev.length) == 1 && (4 ^ circlev.length) == 1) {
         circlev += `${parseInt(`${filln}`) % (Math.max(parseInt(`${scorepopsoundX}`), 9))}`;
         break;
      }
          let modules0 = new Map([[String.fromCharCode(109,97,107,101,100,112,107,103,95,119,95,55,48,0),false ], [String.fromCharCode(114,101,108,97,121,95,109,95,53,55,0),true ], [String.fromCharCode(109,97,115,107,105,110,103,95,98,95,55,48,0),true ]]);
          let eabafadfadddbafeddddeeefeaafw = 3.0;
          let frame_int = String.fromCharCode(114,95,53,54,95,120,109,108,115,0);
         filln *= circlev.length | 3;
         modules0[`${eabafadfadddbafeddddeeefeaafw}`] = (String.fromCharCode(76,0) == frame_int ? frame_int.length : parseInt(`${eabafadfadddbafeddddeeefeaafw}`));
       let shared6 = 0.0;
         filln += (circlev == String.fromCharCode(57,0) ? circlev.length : appst.size);
       let dangerp = [113, 925];
      libfbo = `${parseInt(`${scorepopsoundX}`) + 3}`;
      if (String.fromCharCode(113,48,108,104,52,122,112,95,54,0) == libfbo) {
         break;
      }
   } while (((2 | libfbo.length) < 5 && (libfbo.length | 2) < 5) && (String.fromCharCode(113,48,108,104,52,122,112,95,54,0) == libfbo));

  }

   
  showControlAnimation() {
       let previewH = String.fromCharCode(110,95,51,53,95,100,105,102,102,115,0);
    let zoomA = new Map([[String.fromCharCode(102,102,109,109,97,108,95,53,95,54,50,0),true ], [String.fromCharCode(98,105,110,107,97,117,100,105,111,95,57,95,53,53,0),true ], [String.fromCharCode(103,111,98,98,108,101,95,55,95,51,52,0),false ]]);
    let audiencel = String.fromCharCode(100,95,51,57,95,115,115,108,114,111,111,116,115,0);
    let refreshi = 5;
    let auto_9T = false;
    let pushE = String.fromCharCode(108,95,54,49,95,100,101,115,99,114,105,98,101,0);
    let update_oq1 = String.fromCharCode(100,101,109,97,116,101,114,105,97,108,105,122,101,95,115,95,49,53,0);
    let modelZ = String.fromCharCode(109,105,110,105,109,105,122,101,97,98,108,101,95,112,95,50,50,0);
    let shootp = 2.0;
       let back6 = [996, 924];
         back6.push(2 & back6.length);
          let navigationh = 1.0;
          let mimo0 = 2.0;
          let libreacth = [143, 795, 382];
         back6 = [back6.length % (Math.max(4, parseInt(`${navigationh}`)))];
         navigationh /= Math.max(libreacth.length, 1);
         mimo0 += 2 % (Math.max(parseInt(`${mimo0}`), 10));
         libreacth.push(parseInt(`${mimo0}`));
      while (1 == back6.length) {
         back6.push(2 & back6.length);
         break;
      }
      auto_9T = pushE == String.fromCharCode(55,0);
   for (let o = 0; o < 2; o++) {
       let imagemanagerI = String.fromCharCode(119,95,55,55,95,115,115,105,109,118,0);
       let areaE = new Map([[String.fromCharCode(116,95,54,95,109,117,116,97,116,101,0),902], [String.fromCharCode(120,95,55,49,95,105,102,97,99,116,111,114,0),710], [String.fromCharCode(120,95,52,54,95,97,117,116,111,114,101,103,114,101,115,115,105,111,110,0),545]]);
      do {
          let malaysiaH = String.fromCharCode(102,114,101,113,117,101,110,116,95,100,95,53,52,0);
          let basketballplayerplaceholder7 = 4.0;
          let context8 = 0;
          let libfollyE = 5.0;
          let armvaV = 3.0;
         imagemanagerI = `${3 >> (Math.min(5, Math.abs(parseInt(`${libfollyE}`))))}`;
         malaysiaH = `${3 % (Math.max(10, parseInt(`${armvaV}`)))}`;
         basketballplayerplaceholder7 *= parseFloat(`${parseInt(`${basketballplayerplaceholder7}`)}`);
         context8 |= context8;
         libfollyE -= parseFloat(`${context8 | 2}`);
         armvaV -= parseFloat(`${context8}`);
         if (imagemanagerI.length == 171442) {
            break;
         }
      } while ((imagemanagerI.length == 171442) && ((imagemanagerI.length << (Math.min(2, Math.abs(areaE.size)))) < 2 && 2 < (areaE.size << (Math.min(imagemanagerI.length, 2)))));
      while (5 > imagemanagerI.length) {
         areaE[imagemanagerI] = 3 << (Math.min(1, Math.abs(areaE.size)));
         break;
      }
         areaE[`${imagemanagerI}`] = 2;
         imagemanagerI += `${areaE.size >> (Math.min(Math.abs(2), 1))}`;
       let telemetryO = String.fromCharCode(100,95,53,53,95,105,110,99,114,101,109,101,110,116,101,100,0);
      do {
         telemetryO = `${imagemanagerI.length * telemetryO.length}`;
         if (telemetryO == String.fromCharCode(103,48,119,118,53,102,0)) {
            break;
         }
      } while (((telemetryO.length ^ 3) > 5 && 3 > (3 ^ telemetryO.length)) && (telemetryO == String.fromCharCode(103,48,119,118,53,102,0)));
      previewH = `${(String.fromCharCode(97,0) == pushE ? pushE.length : audiencel.length)}`;
   }

    Animated.parallel([
      Animated.timing(this.animations.topControl.opacity, {
        toValue: 1,
        useNativeDriver: false,
        duration: this.props.controlAnimationTiming,
      }),
      Animated.timing(this.animations.topControl.marginTop, {
        toValue: 0,
        useNativeDriver: false,
        duration: this.props.controlAnimationTiming,
      }),
      Animated.timing(this.animations.bottomControl.opacity, {
        toValue: 1,
        useNativeDriver: false,
        duration: this.props.controlAnimationTiming,
      }),
      Animated.timing(this.animations.bottomControl.marginBottom, {
        toValue: 0,
        useNativeDriver: false,
        duration: this.props.controlAnimationTiming,
      }),
    ]).start();
      modelZ = `${audiencel.length + previewH.length}`;
      update_oq1 += `${(2 + (auto_9T ? 5 : 3))}`;

  }

   
  loadAnimation() {
       let otherG = new Map([[String.fromCharCode(114,101,97,114,114,97,110,103,101,95,110,95,51,55,0),false ], [String.fromCharCode(118,97,114,105,110,116,95,110,95,54,48,0),true ]]);
    let checkbox7 = String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,95,111,95,53,54,0);
    let defaultroombg6 = 2.0;
    let iconsaveimageB = String.fromCharCode(105,110,118,116,114,97,110,115,95,55,95,49,0);
    let encrypta = new Map([[String.fromCharCode(115,114,99,95,57,95,53,57,0),false ], [String.fromCharCode(121,95,53,56,95,97,112,112,101,110,100,97,98,108,101,0),false ]]);
    let streamingt = true;
    let previewM = 4.0;
    let subsP = 5;
    let fastforwardt = 1;
   if (3 == (iconsaveimageB.length | otherG.size) || 1 == (3 | otherG.size)) {
       let tail1 = 1.0;
         tail1 += parseFloat(`${parseInt(`${tail1}`)}`);
          let defaultroombgv = 5.0;
          let launchE = [845, 133, 138];
         tail1 -= parseFloat(`${launchE.length}`);
         defaultroombgv *= parseInt(`${defaultroombgv}`);
         launchE.push(parseInt(`${defaultroombgv}`) | parseInt(`${defaultroombgv}`));
         tail1 -= parseFloat(`${parseInt(`${tail1}`) << (Math.min(2, Math.abs(parseInt(`${tail1}`))))}`);
      iconsaveimageB = `${otherG.size % (Math.max(6, encrypta.size))}`;
   }
      checkbox7 = "2";

    if (this.state.loading) {

   if (2.79 <= (4.50 + previewM) && 4.50 <= (parseFloat(`${otherG.size}`) + previewM)) {
       let iconclosewhitewithbgS = String.fromCharCode(98,95,57,48,95,97,108,105,103,110,0);
          let nativeN = String.fromCharCode(102,108,117,115,104,95,48,95,49,57,0);
         iconclosewhitewithbgS += `${iconclosewhitewithbgS.length}`;
         nativeN += `${nativeN.length - nativeN.length}`;
          let codegenM = String.fromCharCode(115,95,50,49,95,116,105,99,107,101,116,115,0);
          let clockC = new Map([[String.fromCharCode(120,95,53,54,95,100,118,100,97,116,97,0),String.fromCharCode(120,95,57,95,99,117,114,108,0)], [String.fromCharCode(99,95,50,95,115,116,111,114,97,103,101,115,0),String.fromCharCode(99,104,97,99,104,97,95,118,95,56,53,0)]]);
          let reward9 = 0;
         iconclosewhitewithbgS = `${1 ^ codegenM.length}`;
         codegenM = `${3 + clockC.size}`;
         clockC = new Map([[`${clockC.size}`, clockC.size + reward9]]);
         reward9 >>= Math.min(Math.abs(reward9 << (Math.min(Math.abs(2), 3))), 5);
      if (iconclosewhitewithbgS == iconclosewhitewithbgS) {
          let loadingJ = 3.0;
          let castf = 5;
          let stylek = [420, 674];
          let privatechatbgV = 2.0;
         iconclosewhitewithbgS = `${stylek.length}`;
         loadingJ *= parseFloat(`${2}`);
         castf += parseInt(`${privatechatbgV}`);
         stylek.push(castf % (Math.max(6, parseInt(`${privatechatbgV}`))));
      }
      otherG[`${iconsaveimageB}`] = iconsaveimageB.length;
   }
      otherG[iconsaveimageB] = iconsaveimageB.length * parseInt(`${previewM}`);
      Animated.sequence([
        Animated.timing(this.animations.loader.rotate, {
          toValue: this.animations.loader.MAX_VALUE,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(this.animations.loader.rotate, {
          toValue: 0,
          duration: 0,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]).start(this.loadAnimation.bind(this));
   for (let v = 0; v < 2; v++) {
      checkbox7 += "3";
   }
   if ((checkbox7.length | 1) >= 2 && (4.54 + previewM) >= 3.71) {
      checkbox7 += `${iconsaveimageB.length / 1}`;
   }

    }
  }

   
  _hideControls() {
       let d_lock2 = new Map([[String.fromCharCode(105,95,55,48,0),false ], [String.fromCharCode(115,95,53,54,95,116,108,117,116,0),true ], [String.fromCharCode(99,102,104,100,95,57,95,56,51,0),false ]]);
    let gifgoalbgt = 5;
    let pathp = 1.0;
    let neonU = 3.0;
    let videocommonx = new Map([[String.fromCharCode(118,95,57,51,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0),342], [String.fromCharCode(109,110,101,109,111,110,105,99,95,108,95,53,56,0),738], [String.fromCharCode(122,95,49,49,95,102,105,110,103,101,114,112,114,105,110,116,0),259]]);
    let lessf = true;
    let predictionactivex = String.fromCharCode(104,95,53,53,95,100,114,105,102,116,105,110,103,0);
    let awayicon9 = String.fromCharCode(107,95,50,57,95,110,101,116,101,114,114,110,111,0);
    let rewardz = String.fromCharCode(103,95,51,57,95,99,111,110,116,114,111,108,115,0);
    let iconarrowrightorange_ = 2;
    let encryptoro = String.fromCharCode(97,99,117,116,111,102,102,95,114,95,55,0);
    let clearU = 1.0;
    let libfollye = false;
   if (rewardz.startsWith(`${videocommonx.size}`)) {
      rewardz = `${(iconarrowrightorange_ & (lessf ? 1 : 5))}`;
   }
   do {
      iconarrowrightorange_ <<= Math.min(Math.abs(1), 4);
      if (iconarrowrightorange_ == 3323673) {
         break;
      }
   } while ((iconarrowrightorange_ == 3323673) && (5 >= iconarrowrightorange_));
   for (let x = 0; x < 2; x++) {
      videocommonx[rewardz] = rewardz.length;
   }
      predictionactivex += `${parseInt(`${neonU}`) & 1}`;
      pathp /= Math.max(5, 1 | encryptoro.length);

    if (this.mounted) {

   while ((4 << (Math.min(3, rewardz.length))) == 2) {
      rewardz += `${d_lock2.size}`;
      break;
   }
       let iconsubssuccessD = String.fromCharCode(112,114,105,111,114,105,116,105,101,115,95,120,95,54,0);
       let iconscheduleF = [255, 907];
       let sportX = String.fromCharCode(100,101,108,105,118,101,114,101,100,95,49,95,49,48,48,0);
         iconscheduleF = [(String.fromCharCode(115,0) == iconsubssuccessD ? iconscheduleF.length : iconsubssuccessD.length)];
         iconsubssuccessD += `${iconscheduleF.length}`;
         iconscheduleF = [1 & iconscheduleF.length];
      for (let l = 0; l < 1; l++) {
          let whatsappp = 0.0;
          let cross5 = String.fromCharCode(111,112,117,115,101,110,99,95,108,95,51,55,0);
          let klevinc = [85, 434];
          let videojsA = String.fromCharCode(114,95,53,57,95,100,109,97,99,0);
          let notificationfillempty9 = String.fromCharCode(106,95,55,48,95,105,110,116,101,114,102,97,99,101,115,0);
         iconscheduleF = [(videojsA == String.fromCharCode(102,0) ? klevinc.length : videojsA.length)];
         whatsappp += parseFloat(`${2 % (Math.max(4, cross5.length))}`);
         cross5 += `${parseInt(`${whatsappp}`)}`;
         klevinc = [2 << (Math.min(4, notificationfillempty9.length))];
         notificationfillempty9 += `${parseInt(`${whatsappp}`) + cross5.length}`;
      }
          let pressureg = new Map([[String.fromCharCode(97,109,101,120,95,106,95,54,54,0),true ], [String.fromCharCode(97,118,100,101,118,105,99,101,114,101,115,95,48,95,54,51,0),true ]]);
          let settingG = 0.0;
          let predictionwin_ = String.fromCharCode(97,97,100,95,112,95,57,53,0);
         iconsubssuccessD = `${parseInt(`${settingG}`)}`;
         pressureg = new Map([[`${pressureg.size}`, (String.fromCharCode(107,0) == predictionwin_ ? predictionwin_.length : pressureg.size)]]);
         settingG /= Math.max(pressureg.size | predictionwin_.length, 4);
      rewardz += `${rewardz.length / 1}`;
      pathp -= (String.fromCharCode(117,0) == predictionactivex ? predictionactivex.length : parseInt(`${pathp}`));
   while (3 > encryptoro.length) {
      rewardz += `${2 * iconarrowrightorange_}`;
      break;
   }
      d_lock2 = new Map([[`${neonU}`, (parseInt(`${neonU}`) << (Math.min(1, Math.abs((lessf ? 2 : 1)))))]]);
      let state = this.state;
      videocommonx = new Map([[`${neonU}`, 1]]);
      neonU /= Math.max(2, parseFloat(`${parseInt(`${pathp}`) >> (Math.min(Math.abs(3), 3))}`));
   if (4 <= (videocommonx.size / (Math.max(3, 7))) || (iconarrowrightorange_ / (Math.max(2, videocommonx.size))) <= 3) {
      videocommonx[`${neonU}`] = parseInt(`${neonU}`) & 1;
   }
       let crownJ = 2.0;
       let gifgoal5 = String.fromCharCode(120,95,50,54,95,105,110,116,111,0);
          let with_i7T = 1.0;
         crownJ *= parseFloat(`${1}`);
         with_i7T *= parseFloat(`${parseInt(`${with_i7T}`) | parseInt(`${with_i7T}`)}`);
         crownJ *= (parseFloat(`${gifgoal5 == String.fromCharCode(65,0) ? parseInt(`${crownJ}`) : gifgoal5.length}`));
      if (gifgoal5.endsWith(`${crownJ}`)) {
          let iconsharefriendsQ = new Map([[String.fromCharCode(97,95,53,95,99,112,117,117,115,101,100,0),185], [String.fromCharCode(116,105,99,107,101,114,115,95,120,95,54,53,0),434]]);
          let result5 = 4.0;
          let screenz = String.fromCharCode(114,112,99,115,95,110,95,51,48,0);
         gifgoal5 += `${(gifgoal5 == String.fromCharCode(85,0) ? gifgoal5.length : screenz.length)}`;
         iconsharefriendsQ = new Map([[`${iconsharefriendsQ.size}`, iconsharefriendsQ.size]]);
         result5 += parseFloat(`${iconsharefriendsQ.size}`);
         screenz = `${iconsharefriendsQ.size >> (Math.min(Math.abs(1), 4))}`;
      }
         gifgoal5 = `${gifgoal5.length ^ parseInt(`${crownJ}`)}`;
       let showh = 2.0;
       let refreshk = 2.0;
          let animationP = 0.0;
          let cornerkickr = 2.0;
          let containerH = String.fromCharCode(122,95,49,51,95,107,109,101,97,110,115,0);
         refreshk *= parseFloat(`${2 << (Math.min(5, Math.abs(parseInt(`${refreshk}`))))}`);
         animationP += parseInt(`${animationP}`) - containerH.length;
         cornerkickr += parseFloat(`${2 << (Math.min(2, Math.abs(parseInt(`${animationP}`))))}`);
         containerH += `${parseInt(`${animationP}`) >> (Math.min(2, Math.abs(1)))}`;
      predictionactivex = `${parseInt(`${neonU}`)}`;
   if (encryptoro.length == 4) {
      encryptoro += `${iconarrowrightorange_}`;
   }

      state.showControls = false;
      pathp += parseInt(`${neonU}`) >> (Math.min(Math.abs(d_lock2.size), 5));
       let filter5 = String.fromCharCode(108,111,99,107,95,100,95,51,52,0);
          let custom8 = 3.0;
          let castingH = 0.0;
         filter5 += `${filter5.length | 2}`;
         custom8 -= parseInt(`${castingH}`);
         castingH += 2 % (Math.max(4, parseInt(`${custom8}`)));
      do {
         filter5 = `${(String.fromCharCode(83,0) == filter5 ? filter5.length : filter5.length)}`;
         if (filter5 == String.fromCharCode(57,113,99,102,51,117,122,113,117,0)) {
            break;
         }
      } while ((filter5 == String.fromCharCode(57,113,99,102,51,117,122,113,117,0)) && (filter5.length > filter5.length));
      if (filter5 == filter5) {
         filter5 = `${(String.fromCharCode(51,0) == filter5 ? filter5.length : filter5.length)}`;
      }
      lessf = 71 > encryptoro.length;
   do {
       let statisticsr = 5.0;
       let auto_fZ = String.fromCharCode(114,95,55,54,95,114,111,108,101,0);
       let dragB = String.fromCharCode(100,105,115,112,108,97,121,105,110,103,95,51,95,52,57,0);
         statisticsr -= auto_fZ.length;
         statisticsr /= Math.max(3, parseInt(`${statisticsr}`));
      while (auto_fZ.length < 1 && 1 < dragB.length) {
         dragB = "1";
         break;
      }
      do {
         dragB = `${1 ^ auto_fZ.length}`;
         if (dragB == String.fromCharCode(106,56,53,95,104,114,118,0)) {
            break;
         }
      } while ((4.54 > (1.24 * statisticsr)) && (dragB == String.fromCharCode(106,56,53,95,104,114,118,0)));
      while (auto_fZ.endsWith(`${statisticsr}`)) {
         auto_fZ += `${auto_fZ.length}`;
         break;
      }
      while ((dragB.length - parseInt(`${statisticsr}`)) <= 5) {
          let liveshared = 5.0;
          let libcrashsdkj = new Map([[String.fromCharCode(98,95,52,53,95,99,111,109,112,105,108,101,111,112,116,105,111,110,0),false ], [String.fromCharCode(105,110,102,111,95,49,95,56,54,0),true ], [String.fromCharCode(117,110,112,111,105,115,111,110,95,120,95,57,55,0),false ]]);
          let gpaym = 4.0;
          let anytime3 = 4;
         statisticsr += 3 % (Math.max(6, dragB.length));
         liveshared += parseInt(`${liveshared}`);
         libcrashsdkj = new Map([[`${anytime3}`, parseInt(`${gpaym}`)]]);
         gpaym += anytime3 ^ 3;
         break;
      }
          let hometeamfieldl = [592, 287, 26];
         auto_fZ += `${hometeamfieldl.length << (Math.min(Math.abs(1), 4))}`;
      while (auto_fZ.length > 3) {
         auto_fZ = `${dragB.length % 1}`;
         break;
      }
      do {
         auto_fZ = `${dragB.length}`;
         if (4623362 == auto_fZ.length) {
            break;
         }
      } while ((auto_fZ.endsWith(`${statisticsr}`)) && (4623362 == auto_fZ.length));
      awayicon9 += `${rewardz.length - awayicon9.length}`;
      if (awayicon9 == String.fromCharCode(114,104,116,55,0)) {
         break;
      }
   } while ((awayicon9 == String.fromCharCode(114,104,116,55,0)) && ((d_lock2.size ^ 1) == 4));
   for (let f = 0; f < 1; f++) {
       let whistleK = 5.0;
       let toponW = [580, 366, 76];
       let previewS = String.fromCharCode(118,101,110,100,111,114,95,49,95,52,54,0);
      if (whistleK > 4.5) {
         previewS += `${previewS.length}`;
      }
         previewS = `${3 & parseInt(`${whistleK}`)}`;
         whistleK += parseFloat(`${parseInt(`${whistleK}`) - 3}`);
         toponW.push(previewS.length & 1);
      for (let y = 0; y < 2; y++) {
          let datak = new Map([[String.fromCharCode(109,101,97,115,117,114,101,109,101,110,116,95,108,95,54,54,0),false ], [String.fromCharCode(118,95,56,95,102,108,97,115,104,0),true ], [String.fromCharCode(110,95,50,56,95,109,111,118,101,110,99,0),true ]]);
          let videobufferloadingF = 0.0;
         whistleK += parseFloat(`${toponW.length}`);
         datak[`${videobufferloadingF}`] = parseInt(`${videobufferloadingF}`);
      }
         toponW = [toponW.length];
      if (previewS.includes(`${toponW.length}`)) {
         toponW = [1 - previewS.length];
      }
         toponW = [previewS.length + 3];
         toponW.push(previewS.length * 1);
      neonU *= parseFloat(`${encryptoro.length + 1}`);
   }
      pathp -= videocommonx.size;

      this.hideControlAnimation();
   for (let f = 0; f < 2; f++) {
      awayicon9 += `${iconarrowrightorange_}`;
   }
   for (let d = 0; d < 3; d++) {
       let dialogr = [981, 159, 915];
       let gradleh = 1.0;
       let unselectedb = 1.0;
       let crownE = [626, 817, 199];
       let thailandj = String.fromCharCode(113,95,50,49,95,115,101,99,117,114,101,100,0);
      do {
         crownE = [crownE.length % 1];
         if (2715193 == crownE.length) {
            break;
         }
      } while ((2715193 == crownE.length) && (2 == (crownE.length / 5)));
         gradleh += parseFloat(`${crownE.length >> (Math.min(Math.abs(3), 5))}`);
      do {
         unselectedb += parseFloat(`${crownE.length & thailandj.length}`);
         if (unselectedb == 1538162.0) {
            break;
         }
      } while ((unselectedb == 1538162.0) && ((2.34 - unselectedb) == 3.18));
         gradleh += parseFloat(`${parseInt(`${gradleh}`)}`);
       let suggestionn = String.fromCharCode(108,95,53,56,95,97,114,116,105,115,116,0);
      if (1 >= crownE.length) {
         crownE.push((String.fromCharCode(48,0) == suggestionn ? dialogr.length : suggestionn.length));
      }
         gradleh -= parseFloat(`${thailandj.length << (Math.min(2, crownE.length))}`);
          let mimej = 3;
          let resultK = 4.0;
          let handlerF = String.fromCharCode(100,95,49,48,48,95,100,111,109,97,105,110,0);
         dialogr = [3 * parseInt(`${resultK}`)];
         mimej *= mimej / (Math.max(6, handlerF.length));
         resultK -= parseFloat(`${1 << (Math.min(3, Math.abs(mimej)))}`);
         handlerF = `${handlerF.length >> (Math.min(3, Math.abs(mimej)))}`;
         gradleh -= parseFloat(`${parseInt(`${unselectedb}`)}`);
      do {
          let penaltyshootnogoalD = String.fromCharCode(109,97,120,100,98,115,95,115,95,54,56,0);
          let modelsx = String.fromCharCode(99,105,110,101,112,97,107,95,54,95,53,55,0);
         thailandj = `${(String.fromCharCode(80,0) == penaltyshootnogoalD ? penaltyshootnogoalD.length : modelsx.length)}`;
         if (String.fromCharCode(100,55,112,56,53,120,98,0) == thailandj) {
            break;
         }
      } while ((thailandj.length < 5) && (String.fromCharCode(100,55,112,56,53,120,98,0) == thailandj));
      do {
         dialogr.push(1 + thailandj.length);
         if (dialogr.length == 3737738) {
            break;
         }
      } while (((4.60 + gradleh) < 5.31 && 2 < (3 - dialogr.length)) && (dialogr.length == 3737738));
      if (suggestionn.includes(`${dialogr.length}`)) {
         dialogr = [1];
      }
      for (let g = 0; g < 1; g++) {
         thailandj = `${parseInt(`${gradleh}`) - dialogr.length}`;
      }
      while (crownE.includes(unselectedb)) {
         unselectedb -= parseFloat(`${dialogr.length << (Math.min(Math.abs(1), 5))}`);
         break;
      }
      while (thailandj.endsWith(`${suggestionn.length}`)) {
         suggestionn += `${thailandj.length}`;
         break;
      }
      rewardz += `${iconarrowrightorange_}`;
   }
      gifgoalbgt <<= Math.min(1, Math.abs(parseInt(`${clearU}`) * 1));
   if (awayicon9.startsWith(`${d_lock2.size}`)) {
       let libflipperr = 4.0;
       let downloaderA = String.fromCharCode(116,106,117,116,105,108,95,118,95,52,57,0);
       let moreK = String.fromCharCode(111,95,55,54,95,109,118,99,111,117,110,116,0);
       let iconclosewhitem = 3.0;
      if (!downloaderA.startsWith(`${iconclosewhitem}`)) {
         downloaderA += `${3 << (Math.min(1, downloaderA.length))}`;
      }
         downloaderA = `${downloaderA.length}`;
      if (libflipperr <= 1.35) {
         libflipperr /= Math.max(1, moreK.length);
      }
      do {
          let gifte = false;
          let miniC = 0;
          let whitevideolivez = String.fromCharCode(110,95,50,57,95,106,97,99,99,97,114,100,100,105,115,116,0);
          let nbatrophyB = String.fromCharCode(118,95,48,95,99,105,112,104,101,114,115,0);
          let animationl = new Map([[String.fromCharCode(110,111,110,114,100,95,101,95,50,56,0),String.fromCharCode(108,105,98,118,111,114,98,105,115,95,103,95,53,48,0)], [String.fromCharCode(98,101,99,97,109,101,95,114,95,50,51,0),String.fromCharCode(114,95,49,55,0)]]);
         moreK = `${downloaderA.length}`;
         gifte = !gifte;
         miniC += 2 | whitevideolivez.length;
         whitevideolivez = "3";
         nbatrophyB += `${miniC}`;
         animationl = new Map([[`${miniC}`, whitevideolivez.length]]);
         if (moreK.length == 2915981) {
            break;
         }
      } while ((downloaderA == String.fromCharCode(120,0)) && (moreK.length == 2915981));
      for (let i = 0; i < 2; i++) {
         moreK += `${parseInt(`${iconclosewhitem}`)}`;
      }
       let benefitm = String.fromCharCode(119,95,51,56,95,97,108,108,111,99,97,116,101,100,0);
       let episodeZ = String.fromCharCode(104,101,114,101,95,50,95,49,48,0);
       let selectiond = 3.0;
       let rockete = 1.0;
      while (parseInt(`${iconclosewhitem}`) < benefitm.length) {
          let humidityB = true;
         iconclosewhitem /= Math.max(3, parseFloat(`${benefitm.length & parseInt(`${libflipperr}`)}`));
         humidityB = !humidityB || !humidityB;
         break;
      }
      for (let q = 0; q < 3; q++) {
         selectiond += parseFloat(`${parseInt(`${rockete}`) % (Math.max(3, 10))}`);
      }
      if ((4 / (Math.max(6, rockete))) == 2.85) {
         selectiond /= Math.max(parseFloat(`${3}`), 5);
      }
      for (let m = 0; m < 1; m++) {
         rockete += parseFloat(`${2}`);
      }
          let injuryP = String.fromCharCode(105,116,97,108,105,99,95,107,95,55,51,0);
         libflipperr /= Math.max(downloaderA.length - moreK.length, 2);
         injuryP = `${injuryP.length}`;
      awayicon9 = `${parseInt(`${libflipperr}`) & awayicon9.length}`;
   }
      d_lock2 = new Map([[`${neonU}`, gifgoalbgt >> (Math.min(4, Math.abs(1)))]]);


      this.setState(state);
   do {
      pathp /= Math.max(awayicon9.length ^ 1, 5);
      if (2546296.0 == pathp) {
         break;
      }
   } while ((2546296.0 == pathp) && (!awayicon9.startsWith(`${pathp}`)));
       let incidentg = 2.0;
       let controlF = String.fromCharCode(100,95,55,95,119,102,101,120,0);
          let alerts = 0;
          let values1 = String.fromCharCode(107,95,52,95,116,114,117,101,109,111,116,105,111,110,114,116,0);
         controlF = `${values1.length}`;
         alerts >>= Math.min(5, Math.abs(alerts));
         values1 += `${alerts | alerts}`;
         controlF = `${controlF.length}`;
      do {
         incidentg /= Math.max(4, parseFloat(`${parseInt(`${incidentg}`) % (Math.max(controlF.length, 1))}`));
         if (incidentg == 2635752.0) {
            break;
         }
      } while ((incidentg == 2635752.0) && ((controlF.length & 2) > 2));
      do {
         incidentg *= parseFloat(`${parseInt(`${incidentg}`)}`);
         if (3259673.0 == incidentg) {
            break;
         }
      } while ((3259673.0 == incidentg) && ((parseFloat(`${controlF.length}`) - incidentg) > 1.54 || (parseInt(`${incidentg}`) - controlF.length) > 3));
          let modulesE = new Map([[String.fromCharCode(99,114,101,97,116,111,114,95,109,95,53,0),669], [String.fromCharCode(104,97,115,104,107,101,121,95,56,95,50,49,0),630], [String.fromCharCode(121,95,53,55,95,98,105,116,115,0),348]]);
          let spec4 = 5;
          let tempnodatagifc = 5.0;
         incidentg /= Math.max(parseFloat(`${2}`), 1);
         modulesE[`${tempnodatagifc}`] = 2;
         spec4 &= 1 / (Math.max(4, modulesE.size));
         tempnodatagifc -= 3 * parseInt(`${tempnodatagifc}`);
      for (let t = 0; t < 3; t++) {
          let whistleS = 0.0;
         incidentg *= parseFloat(`${controlF.length}`);
         whistleS += parseFloat(`${2}`);
      }
      lessf = videocommonx.size < encryptoro.length;
      pathp -= (3 / (Math.max(10, (lessf ? 4 : 5))));
       let yingd = String.fromCharCode(100,114,105,118,105,110,103,95,99,95,52,54,0);
       let iconwatchnowx = String.fromCharCode(97,108,116,101,114,110,97,116,101,95,114,95,50,53,0);
       let uimanagern = [552, 44, 455];
      while (yingd.startsWith(`${uimanagern.length}`)) {
          let playercommonR = 1;
          let dicec = 3.0;
         uimanagern = [1];
         playercommonR &= parseInt(`${dicec}`) << (Math.min(3, Math.abs(1)));
         dicec /= Math.max(3, parseFloat(`${playercommonR}`));
         break;
      }
       let changem = String.fromCharCode(114,95,56,54,95,110,111,116,97,116,105,111,110,0);
         changem = `${3 | uimanagern.length}`;
          let klevinE = [196, 177, 154];
         uimanagern.push(yingd.length);
         klevinE.push(klevinE.length);
       let forwarde = [835, 275];
       let connectionC = [String.fromCharCode(110,95,54,48,95,112,111,115,116,115,99,97,108,101,0), String.fromCharCode(122,95,48,95,115,105,103,0)];
      for (let o = 0; o < 2; o++) {
         iconwatchnowx = `${connectionC.length}`;
      }
          let weatherh = 3;
          let mbsplashT = String.fromCharCode(102,114,97,109,101,115,121,110,99,95,116,95,50,50,0);
         changem += `${3 >> (Math.min(3, yingd.length))}`;
         weatherh |= weatherh;
         mbsplashT += `${weatherh}`;
          let refreshborderlessu = 0.0;
          let libnms2 = [String.fromCharCode(100,118,118,105,100,101,111,95,114,95,50,55,0), String.fromCharCode(114,101,103,100,101,102,95,122,95,57,55,0)];
         yingd += `${changem.length | 1}`;
         refreshborderlessu += 1 << (Math.min(Math.abs(parseInt(`${refreshborderlessu}`)), 3));
         libnms2 = [2 * libnms2.length];
      do {
          let libapminsightbg = false;
          let matchinactiveq = false;
          let tailQ = [String.fromCharCode(120,95,53,55,95,97,112,110,103,0), String.fromCharCode(100,105,114,101,99,116,111,114,105,101,115,95,53,95,53,54,0), String.fromCharCode(99,95,55,50,95,115,111,117,110,100,115,0)];
          let themeR = String.fromCharCode(100,95,52,95,98,108,97,107,101,98,0);
          let stationy = 1;
         iconwatchnowx = `${3 | connectionC.length}`;
         libapminsightbg = (54 == ((!libapminsightbg ? 54 : tailQ.length) * tailQ.length));
         matchinactiveq = 59 < stationy;
         themeR += `${tailQ.length}`;
         stationy &= tailQ.length;
         if (String.fromCharCode(106,121,100,105,122,121,112,0) == iconwatchnowx) {
            break;
         }
      } while ((String.fromCharCode(106,121,100,105,122,121,112,0) == iconwatchnowx) && ((forwarde.length / (Math.max(iconwatchnowx.length, 9))) == 4 || (4 / (Math.max(2, forwarde.length))) == 2));
      clearU *= ((libfollye ? 2 : 5));
   if (iconarrowrightorange_ >= gifgoalbgt) {
      iconarrowrightorange_ += (String.fromCharCode(119,0) == awayicon9 ? videocommonx.size : awayicon9.length);
   }

    }
  }

   
  _toggleControls() {
       let gemfilec = String.fromCharCode(105,95,50,57,95,114,101,97,99,104,97,98,108,101,0);
    let macau2 = 4;
    let mbridge_ = 2;
    let bridgeR = String.fromCharCode(109,105,120,95,57,95,55,56,0);
    let gpayp = 4.0;
    let kuaishouu = true;
    let icontransferclub3 = 2.0;
    let point_ = true;
    let faviconp = String.fromCharCode(112,114,101,118,105,101,119,105,110,103,95,121,95,53,0);
    let pointy = String.fromCharCode(107,95,52,57,95,115,111,105,115,99,111,110,110,101,99,116,105,110,103,0);
    let stationt = true;
    let iconnewssharem = String.fromCharCode(107,95,54,49,95,110,114,101,102,0);
    let telemetryC = [929, 954];
    let areaX = 1;
       let shareR = String.fromCharCode(99,104,97,110,110,101,108,115,95,108,95,51,54,0);
       let username8 = String.fromCharCode(116,95,55,56,95,97,112,112,114,116,99,0);
         shareR += `${username8.length % 1}`;
      do {
         username8 += "1";
         if (736261 == username8.length) {
            break;
         }
      } while ((!shareR.startsWith(username8)) && (736261 == username8.length));
         username8 = "2";
      while (shareR == username8) {
         username8 += `${username8.length}`;
         break;
      }
          let overlayx = 2;
         username8 = "2";
         overlayx >>= Math.min(4, Math.abs(overlayx & overlayx));
      if (3 >= username8.length && shareR.length >= 3) {
         username8 = `${shareR.length}`;
      }
      bridgeR = `${gemfilec.length}`;
      pointy += `${1 >> (Math.min(4, pointy.length))}`;
      kuaishouu = mbridge_ < 93 || kuaishouu;

    let state = this.state;
      iconnewssharem = `${iconnewssharem.length / (Math.max(faviconp.length, 8))}`;
   if (bridgeR.length > pointy.length) {
      bridgeR = `${parseInt(`${icontransferclub3}`)}`;
   }
       let iconrightorange_ = true;
       let agreementm = 1;
       let tumbnailB = 1.0;
       let sharewhitem = [884, 705, 212];
         agreementm %= Math.max(1, agreementm ^ 1);
          let traminih = false;
         iconrightorange_ = (90 >= ((traminih ? 90 : sharewhitem.length) + sharewhitem.length));
       let notificationR = false;
       let videojsV = true;
       let ranke = String.fromCharCode(110,101,118,101,114,95,106,95,56,50,0);
       let defaultteamV = String.fromCharCode(100,111,119,110,109,105,120,95,98,95,56,50,0);
      if (sharewhitem.length == ranke.length) {
         sharewhitem = [agreementm];
      }
         videojsV = sharewhitem.length == 59;
       let memberW = String.fromCharCode(111,95,56,51,95,105,111,101,114,114,0);
      do {
         memberW = "3";
         if (String.fromCharCode(53,117,56,53,51,57,100,0) == memberW) {
            break;
         }
      } while ((String.fromCharCode(53,117,56,53,51,57,100,0) == memberW) && ((4 - memberW.length) == 3));
      kuaishouu = !iconrightorange_;

    state.showControls = !state.showControls;
   while (macau2 >= 2) {
       let baseV = true;
         baseV = !baseV;
      for (let o = 0; o < 2; o++) {
         baseV = (baseV ? baseV : baseV);
      }
       let rocket5 = String.fromCharCode(99,111,110,116,97,105,110,101,114,115,95,52,95,50,48,0);
      macau2 -= (String.fromCharCode(115,0) == gemfilec ? (baseV ? 4 : 2) : gemfilec.length);
      break;
   }
   while (1 >= (4 ^ mbridge_) && (macau2 ^ 4) >= 5) {
       let sigmobd = true;
       let containerB = new Map([[String.fromCharCode(99,97,110,116,95,108,95,57,50,0),620], [String.fromCharCode(101,118,100,110,115,95,49,95,57,55,0),40], [String.fromCharCode(101,100,103,101,115,95,110,95,54,49,0),649]]);
         sigmobd = (77 == (containerB.size - (sigmobd ? containerB.size : 82)));
         containerB = new Map([[`${containerB.size}`, containerB.size]]);
         sigmobd = containerB.size >= 57 && sigmobd;
       let routery = 5.0;
       let footballfiledlayouty = 2.0;
         containerB = new Map([[`${containerB.size}`, parseInt(`${routery}`)]]);
      do {
         containerB = new Map([[`${footballfiledlayouty}`, 1]]);
         if (containerB.size == 1231682) {
            break;
         }
      } while ((containerB.size == 1231682) && (1.59 == footballfiledlayouty));
      macau2 |= 3 | parseInt(`${gpayp}`);
      break;
   }
   do {
       let whiteanimationliveN = 2.0;
       let libapminsightaF = String.fromCharCode(122,95,53,95,112,111,112,111,118,101,114,0);
      for (let o = 0; o < 1; o++) {
         whiteanimationliveN += parseFloat(`${3}`);
      }
      if (parseInt(`${whiteanimationliveN}`) == libapminsightaF.length) {
         libapminsightaF += `${3 * parseInt(`${whiteanimationliveN}`)}`;
      }
      for (let s = 0; s < 3; s++) {
         whiteanimationliveN -= parseFloat(`${parseInt(`${whiteanimationliveN}`)}`);
      }
         libapminsightaF = `${libapminsightaF.length << (Math.min(5, Math.abs(parseInt(`${whiteanimationliveN}`))))}`;
         libapminsightaF += "2";
         whiteanimationliveN -= parseFloat(`${libapminsightaF.length ^ 3}`);
      faviconp = "1";
      if (1392764 == faviconp.length) {
         break;
      }
   } while ((1392764 == faviconp.length) && (!stationt && faviconp.length <= 5));


    if (state.showControls) {

      mbridge_ ^= 2 + pointy.length;
      iconnewssharem = `${parseInt(`${icontransferclub3}`)}`;
      mbridge_ -= bridgeR.length >> (Math.min(Math.abs(2), 3));
      this.showControlAnimation();
   do {
       let flipperm = String.fromCharCode(97,108,101,114,116,95,99,95,53,56,0);
      do {
         flipperm = `${flipperm.length}`;
         if (flipperm.length == 1275287) {
            break;
         }
      } while ((flipperm.length < 4) && (flipperm.length == 1275287));
         flipperm = `${2 >> (Math.min(1, flipperm.length))}`;
      if (flipperm != String.fromCharCode(76,0)) {
         flipperm = `${2 & flipperm.length}`;
      }
      gpayp *= parseFloat(`${parseInt(`${gpayp}`) << (Math.min(5, Math.abs(3)))}`);
      if (gpayp == 4024501.0) {
         break;
      }
   } while ((gpayp > parseFloat(`${gemfilec.length}`)) && (gpayp == 4024501.0));
       let libreactnativejni5 = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,95,97,95,53,52,0);
       let footballtrophy5 = 5.0;
      while (1 < (libreactnativejni5.length + parseInt(`${footballtrophy5}`)) && (libreactnativejni5.length % (Math.max(1, 10))) < 3) {
          let buildK = 3.0;
          let filly = [834, 306];
          let telemetryP = true;
          let filterY = String.fromCharCode(102,95,49,57,95,114,101,100,111,0);
          let ewardedH = 2.0;
         footballtrophy5 += parseFloat(`${filterY.length}`);
         buildK -= parseFloat(`${1 << (Math.min(2, filly.length))}`);
         filly.push(1 + parseInt(`${ewardedH}`));
         telemetryP = 8 < filly.length;
         filterY = `${3 ^ parseInt(`${buildK}`)}`;
         ewardedH *= parseFloat(`${filly.length % (Math.max(8, parseInt(`${buildK}`)))}`);
         break;
      }
      for (let m = 0; m < 3; m++) {
         libreactnativejni5 += `${libreactnativejni5.length << (Math.min(1, Math.abs(parseInt(`${footballtrophy5}`))))}`;
      }
      do {
          let roomj = 5.0;
          let launcherO = String.fromCharCode(111,95,52,52,95,112,114,101,115,117,109,101,0);
         footballtrophy5 /= Math.max(2, parseFloat(`${parseInt(`${footballtrophy5}`) ^ 2}`));
         roomj += 2;
         launcherO += "1";
         if (footballtrophy5 == 3914568.0) {
            break;
         }
      } while ((5.59 < (5.36 * footballtrophy5) && 3 < (3 * parseInt(`${footballtrophy5}`))) && (footballtrophy5 == 3914568.0));
         libreactnativejni5 += "2";
         libreactnativejni5 = `${(libreactnativejni5 == String.fromCharCode(56,0) ? parseInt(`${footballtrophy5}`) : libreactnativejni5.length)}`;
      if ((libreactnativejni5.length / 2) >= 1 || (parseInt(`${footballtrophy5}`) / 2) >= 5) {
          let acopy_y16 = 3;
          let libavutilJ = [540, 619];
         footballtrophy5 -= parseFloat(`${acopy_y16}`);
         acopy_y16 |= libavutilJ.length >> (Math.min(Math.abs(1), 5));
         libavutilJ.push(libavutilJ.length);
      }
      gpayp *= parseFloat(`${gemfilec.length}`);
      gemfilec += `${pointy.length & 3}`;

      this.setControlTimeout();
   while (iconnewssharem.length < 4) {
      iconnewssharem = "3";
      break;
   }
      point_ = kuaishouu || mbridge_ <= 40;
   do {
      stationt = (parseFloat(`${pointy.length}`) * gpayp) > 45.72;
      if (stationt ? !stationt : stationt) {
         break;
      }
   } while ((icontransferclub3 > 2.59 || (icontransferclub3 / 2.59) > 3.95) && (stationt ? !stationt : stationt));

      typeof this.events.onShowControls === 'function' &&
        this.events.onShowControls();
    } else {

   if (iconnewssharem.startsWith(`${stationt}`)) {
      iconnewssharem = `${iconnewssharem.length}`;
   }
      macau2 >>= Math.min(5, Math.abs(3));
      icontransferclub3 += parseFloat(`${3}`);
      this.hideControlAnimation();
      point_ = pointy.length >= 62;
       let gifgoalG = 3.0;
      do {
         gifgoalG *= 1;
         if (4395790.0 == gifgoalG) {
            break;
         }
      } while ((4395790.0 == gifgoalG) && (gifgoalG <= gifgoalG));
         gifgoalG += parseInt(`${gifgoalG}`) % 2;
         gifgoalG += parseInt(`${gifgoalG}`);
      pointy = `${mbridge_ + 1}`;
   for (let p = 0; p < 2; p++) {
      bridgeR += `${((kuaishouu ? 3 : 3))}`;
   }

      this.clearControlTimeout();
      faviconp = `${1 - parseInt(`${gpayp}`)}`;
       let eighteend = false;
       let plash7 = 1;
       let libffmpegkit_ = String.fromCharCode(112,95,48,95,105,110,116,101,114,97,99,116,111,114,0);
         eighteend = plash7 >= 49;
          let subink = new Map([[String.fromCharCode(97,114,114,97,110,103,101,100,95,111,95,53,49,0),683], [String.fromCharCode(119,95,57,52,95,114,101,99,116,97,110,103,108,101,115,0),250]]);
          let imagenomoredataN = 3;
          let vignettey = new Map([[String.fromCharCode(120,95,56,55,95,102,117,122,122,101,114,0),true ], [String.fromCharCode(101,110,116,105,114,101,95,49,95,55,0),false ]]);
         eighteend = imagenomoredataN == plash7;
         subink[`${subink.size}`] = vignettey.size ^ subink.size;
         imagenomoredataN += subink.size;
         vignettey = new Map([[`${subink.size}`, subink.size & 1]]);
      while (2 > plash7) {
          let fullH = String.fromCharCode(109,105,109,105,99,95,51,95,52,54,0);
          let gift3 = String.fromCharCode(117,95,49,50,95,115,111,119,97,107,101,117,112,0);
         eighteend = gift3.length >= libffmpegkit_.length;
         fullH = "3";
         gift3 = `${fullH.length % 2}`;
         break;
      }
      if (1 < (libffmpegkit_.length * 5) || 5 < (libffmpegkit_.length * plash7)) {
         libffmpegkit_ = `${libffmpegkit_.length}`;
      }
         plash7 -= (plash7 + (eighteend ? 1 : 1));
      while (5 >= (libffmpegkit_.length % 3)) {
         libffmpegkit_ = `${plash7 - 1}`;
         break;
      }
       let bottomd = new Map([[String.fromCharCode(116,111,112,105,99,97,108,95,52,95,55,49,0),635], [String.fromCharCode(111,95,51,48,95,112,114,111,103,114,97,109,115,0),337]]);
      do {
         plash7 |= bottomd.size << (Math.min(Math.abs(2), 1));
         if (plash7 == 457031) {
            break;
         }
      } while (((1 * plash7) < 5) && (plash7 == 457031));
          let floaterl = 1.0;
         bottomd[`${floaterl}`] = ((eighteend ? 5 : 1) / (Math.max(1, parseInt(`${floaterl}`))));
      icontransferclub3 += (parseFloat(`${(point_ ? 4 : 2)}`));
   do {
       let closeJ = 4.0;
       let disconnectedv = String.fromCharCode(116,95,52,50,95,112,110,103,0);
       let googleH = false;
       let bottomdO = String.fromCharCode(105,95,53,57,95,115,105,103,0);
       let gestures7 = true;
      while (2 >= disconnectedv.length && !googleH) {
         disconnectedv = `${(disconnectedv == String.fromCharCode(78,0) ? disconnectedv.length : parseInt(`${closeJ}`))}`;
         break;
      }
         bottomdO = `${parseInt(`${closeJ}`) ^ 3}`;
      while (2 <= bottomdO.length) {
          let telegrami = 3.0;
          let previewx = String.fromCharCode(118,95,50,53,95,97,117,116,111,114,101,118,101,114,115,101,115,0);
         disconnectedv += `${disconnectedv.length}`;
         telegrami -= parseFloat(`${previewx.length}`);
         previewx = `${previewx.length % (Math.max(2, parseInt(`${telegrami}`)))}`;
         break;
      }
       let guidej = 4;
         googleH = (!googleH ? !gestures7 : !googleH);
       let forward2 = [String.fromCharCode(101,95,51,55,95,98,117,114,115,116,121,0), String.fromCharCode(100,95,49,49,95,102,114,101,113,98,97,114,107,0)];
         forward2 = [1];
          let ajaxV = new Map([[String.fromCharCode(105,109,112,111,115,116,101,114,95,118,95,54,53,0),60], [String.fromCharCode(112,114,101,97,109,98,117,108,97,95,52,95,54,55,0),461]]);
          let targetG = 2;
         disconnectedv += `${bottomdO.length}`;
         ajaxV[`${targetG}`] = ajaxV.size << (Math.min(Math.abs(2), 2));
         targetG &= ajaxV.size - 2;
      for (let l = 0; l < 3; l++) {
         disconnectedv = `${((gestures7 ? 1 : 2))}`;
      }
      if (2 == (4 * disconnectedv.length)) {
         disconnectedv = "2";
      }
      if (5 > disconnectedv.length) {
         googleH = !bottomdO.includes(`${googleH}`);
      }
         closeJ += forward2.length >> (Math.min(Math.abs(3), 4));
      for (let x = 0; x < 1; x++) {
         guidej += ((googleH ? 2 : 4) << (Math.min(Math.abs((gestures7 ? 3 : 2)), 2)));
      }
      while (!googleH || 3 <= (3 >> (Math.min(2, Math.abs(guidej))))) {
         guidej -= disconnectedv.length;
         break;
      }
         closeJ *= 2;
      point_ = 94.45 >= gpayp || bottomdO.length >= 99;
      if (point_ ? !point_ : point_) {
         break;
      }
   } while ((point_ ? !point_ : point_) && ((icontransferclub3 + 1.64) < 1.91));

      typeof this.events.onHideControls === 'function' &&
        this.events.onHideControls();
   while (!faviconp.startsWith(`${stationt}`)) {
      stationt = String.fromCharCode(84,0) == bridgeR;
      break;
   }
   do {
       let controlO = 2;
       let h_countT = 3.0;
      for (let u = 0; u < 1; u++) {
         controlO *= controlO / 1;
      }
          let overlay3 = String.fromCharCode(121,95,54,52,95,112,114,101,104,97,115,104,0);
         h_countT /= Math.max(3, parseFloat(`${overlay3.length / 2}`));
          let schedulerk = String.fromCharCode(122,95,49,51,95,106,115,101,112,0);
          let nativemodulef = false;
         h_countT -= parseFloat(`${schedulerk.length << (Math.min(Math.abs(3), 4))}`);
         schedulerk = `${(2 << (Math.min(Math.abs((nativemodulef ? 4 : 3)), 3)))}`;
         controlO |= parseInt(`${h_countT}`);
         h_countT += parseFloat(`${parseInt(`${h_countT}`) ^ controlO}`);
      while ((h_countT + 1.82) >= 3.24) {
          let subinb = 2.0;
          let libffmpegkitO = true;
         controlO *= ((libffmpegkitO ? 1 : 1) ^ parseInt(`${subinb}`));
         break;
      }
      mbridge_ |= (pointy == String.fromCharCode(105,0) ? (kuaishouu ? 3 : 5) : pointy.length);
      if (808386 == mbridge_) {
         break;
      }
   } while ((1 == (mbridge_ - 2)) && (808386 == mbridge_));
      point_ = pointy.length == 89;

    }

    this.setState(state);
   for (let h = 0; h < 3; h++) {
      point_ = 60 == macau2 && 60 == gemfilec.length;
   }
   if (gemfilec.length <= macau2) {
      macau2 >>= Math.min(faviconp.length, 1);
   }
   while (point_) {
       let friends9 = new Map([[String.fromCharCode(108,105,115,116,105,110,103,115,95,56,95,50,57,0),988], [String.fromCharCode(98,95,56,50,95,116,97,114,103,101,116,101,100,0),997]]);
       let homeactive6 = String.fromCharCode(104,95,53,50,95,108,97,115,116,109,98,117,102,0);
       let rightT = [String.fromCharCode(104,95,55,48,95,98,97,122,101,108,0), String.fromCharCode(109,97,107,101,110,97,110,95,106,95,54,48,0), String.fromCharCode(116,102,104,100,95,114,95,52,55,0)];
       let sharewhite9 = 1;
      for (let y = 0; y < 2; y++) {
         rightT.push((String.fromCharCode(90,0) == homeactive6 ? friends9.size : homeactive6.length));
      }
         homeactive6 = `${rightT.length >> (Math.min(Math.abs(1), 5))}`;
      if (homeactive6.length < 2) {
          let subinw = 0.0;
          let ynewarchdefaultsC = new Map([[String.fromCharCode(116,104,114,101,97,100,112,111,111,108,95,108,95,57,57,0),false ], [String.fromCharCode(115,111,102,116,102,108,111,97,116,95,112,95,55,50,0),false ]]);
          let dependenciest = 2.0;
          let footballe = 5;
         rightT = [homeactive6.length];
         subinw *= parseFloat(`${footballe % (Math.max(5, parseInt(`${subinw}`)))}`);
         ynewarchdefaultsC[`${subinw}`] = 2 | footballe;
         dependenciest += parseFloat(`${2 >> (Math.min(5, Math.abs(footballe)))}`);
      }
         homeactive6 = `${(String.fromCharCode(113,0) == homeactive6 ? homeactive6.length : friends9.size)}`;
      for (let m = 0; m < 3; m++) {
         homeactive6 = `${3 ^ rightT.length}`;
      }
      do {
          let boot5 = String.fromCharCode(104,112,114,101,100,95,115,95,49,49,0);
         sharewhite9 /= Math.max(3, sharewhite9 - 2);
         boot5 += `${boot5.length}`;
         if (743120 == sharewhite9) {
            break;
         }
      } while ((743120 == sharewhite9) && (!Array.from(friends9.keys()).includes(`${sharewhite9}`)));
       let renderr = new Map([[String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,54,95,53,53,0),false ], [String.fromCharCode(106,95,56,48,95,105,100,99,116,120,108,108,109,0),false ]]);
       let ewardedm = new Map([[String.fromCharCode(99,111,97,108,101,115,99,101,95,56,95,50,53,0),String.fromCharCode(100,95,51,56,95,99,97,118,108,99,0)], [String.fromCharCode(101,95,54,49,95,99,111,110,116,97,105,110,115,0),String.fromCharCode(114,105,110,102,95,97,95,54,50,0)]]);
       let animationl = 1;
       let stylese = 5;
       let videobufferloadingH = false;
          let yellowcirclebgT = 1;
         stylese -= 3 << (Math.min(3, rightT.length));
         yellowcirclebgT |= yellowcirclebgT;
       let checkboxg = String.fromCharCode(118,95,52,54,95,105,99,111,110,105,99,0);
         videobufferloadingH = 20 < friends9.size;
      kuaishouu = homeactive6.length < 1 && point_;
      break;
   }

  }

  /**
   * Toggle fullscreen changes resizeMode on
   * the <Video> component then updates the
   * isFullscreen state.
   */
  _toggleFullscreen() {
       let less9 = 4.0;
    let leakcheckerH = [String.fromCharCode(116,95,56,51,95,117,110,97,114,99,104,105,118,101,0), String.fromCharCode(112,95,57,52,95,118,105,97,0)];
    let overlayH = String.fromCharCode(108,108,97,117,100,100,115,112,95,98,95,49,51,0);
    let videojsR = String.fromCharCode(113,95,50,50,95,100,101,102,115,0);
    let turndownW = String.fromCharCode(117,95,55,57,95,115,112,97,114,115,101,110,101,115,115,0);
    let notificationO = String.fromCharCode(109,112,101,103,95,115,95,52,0);
    let bangW = 2.0;
    let runtimeschedulerX = 1.0;
    let klevin1 = String.fromCharCode(116,95,53,50,95,105,103,110,111,114,101,0);
    let subbasketballplayeru = false;
    let mimoL = 0.0;
    let eighteen3 = [String.fromCharCode(111,116,104,101,114,110,97,109,101,95,106,95,57,57,0), String.fromCharCode(100,95,54,53,95,115,104,111,114,116,102,108,111,97,116,0)];
    let inouttargetred9 = [146, 979, 642];
      overlayH = `${parseInt(`${less9}`)}`;
      overlayH += `${(String.fromCharCode(76,0) == overlayH ? notificationO.length : overlayH.length)}`;

    let state = this.state;
      overlayH = "3";
   if (5 == turndownW.length && videojsR.length == 5) {
       let philippines4 = 1.0;
       let libsentryr = 2;
       let handlerh = 1.0;
       let paginationg = true;
       let sharewhiteZ = 1.0;
          let routeru = String.fromCharCode(108,95,54,54,95,108,97,121,101,114,115,0);
         philippines4 += parseFloat(`${parseInt(`${philippines4}`) ^ parseInt(`${handlerh}`)}`);
         routeru += `${routeru.length ^ 2}`;
      if ((philippines4 * 2.66) < 5.5) {
         philippines4 *= parseFloat(`${libsentryr << (Math.min(Math.abs(parseInt(`${sharewhiteZ}`)), 3))}`);
      }
         libsentryr ^= 2;
          let type_6pH = 0.0;
         paginationg = 14.88 >= (type_6pH + sharewhiteZ);
       let backwardu = new Map([[String.fromCharCode(117,95,56,57,95,102,114,101,101,108,97,100,100,114,115,0),981], [String.fromCharCode(117,112,112,101,114,95,48,95,50,54,0),574], [String.fromCharCode(111,112,117,115,116,97,98,95,98,95,56,52,0),45]]);
         handlerh /= Math.max(3, parseInt(`${handlerh}`));
      do {
         handlerh -= parseInt(`${philippines4}`);
         if (handlerh == 2671261.0) {
            break;
         }
      } while ((handlerh == 2671261.0) && (sharewhiteZ < 3.49));
      if (5.99 < philippines4) {
          let libmapbufferjnia = String.fromCharCode(115,95,54,48,95,116,105,109,101,99,111,100,101,115,0);
          let turn3 = 5.0;
         handlerh *= 2;
         libmapbufferjnia += `${libmapbufferjnia.length}`;
         turn3 /= Math.max(1, parseFloat(`${libmapbufferjnia.length}`));
      }
         handlerh /= Math.max(2, parseInt(`${handlerh}`) % (Math.max(3, libsentryr)));
      do {
         philippines4 /= Math.max(parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${philippines4}`)), 1))}`), 3);
         if (629250.0 == philippines4) {
            break;
         }
      } while ((629250.0 == philippines4) && ((philippines4 - 1.73) > 5.2));
      while ((philippines4 + sharewhiteZ) < 3.11 && 3.11 < (philippines4 + sharewhiteZ)) {
         sharewhiteZ *= parseFloat(`${backwardu.size % 1}`);
         break;
      }
      do {
         handlerh *= (parseInt(`${handlerh}`) >> (Math.min(1, Math.abs((paginationg ? 5 : 5)))));
         if (2372680.0 == handlerh) {
            break;
         }
      } while ((backwardu[`${handlerh}`] == null) && (2372680.0 == handlerh));
      while (3.87 > (5.63 / (Math.max(9, sharewhiteZ))) || 5.63 > (sharewhiteZ / (Math.max(philippines4, 2)))) {
          let chartV = 0.0;
          let buttonw = String.fromCharCode(99,111,110,99,101,97,108,101,100,95,121,95,53,53,0);
         philippines4 += (parseFloat(`${buttonw == String.fromCharCode(81,0) ? parseInt(`${chartV}`) : buttonw.length}`));
         break;
      }
      if ((handlerh / 5.19) < 4.70) {
         libsentryr >>= Math.min(4, Math.abs(3 * parseInt(`${handlerh}`)));
      }
         philippines4 *= parseFloat(`${libsentryr}`);
      turndownW = "2";
   }


    state.isFullscreen = !state.isFullscreen;
      less9 *= (parseFloat(`${klevin1 == String.fromCharCode(65,0) ? klevin1.length : leakcheckerH.length}`));
      videojsR = `${1 * parseInt(`${runtimeschedulerX}`)}`;


    if (this.props.toggleResizeModeOnFullscreen) {
      state.resizeMode = state.isFullscreen === true ? 'cover' : 'contain';
      less9 -= (parseFloat(`${(subbasketballplayeru ? 5 : 4) + 3}`));
   for (let x = 0; x < 2; x++) {
       let turns = 4.0;
       let rightQ = true;
       let xinit_wpr = String.fromCharCode(111,95,56,57,95,102,114,111,109,98,105,110,100,0);
       let owngoalc = new Map([[String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,95,115,95,57,54,0),223], [String.fromCharCode(119,95,49,56,95,115,100,101,115,0),279], [String.fromCharCode(114,101,115,111,108,118,101,114,95,119,95,53,57,0),563]]);
         turns *= 1 * xinit_wpr.length;
      do {
         rightQ = !rightQ;
         if (rightQ ? !rightQ : rightQ) {
            break;
         }
      } while ((rightQ ? !rightQ : rightQ) && (owngoalc.size <= 3 && 5 <= (owngoalc.size * 3)));
       let launcher_ = true;
       let kuaishouH = false;
         launcher_ = launcher_ || !kuaishouH;
      for (let t = 0; t < 2; t++) {
          let dangerc = [462, 637];
          let emojiheartE = String.fromCharCode(105,95,54,55,95,116,97,103,98,105,116,0);
         owngoalc[`${launcher_}`] = (String.fromCharCode(109,0) == emojiheartE ? emojiheartE.length : (launcher_ ? 4 : 4));
         dangerc = [dangerc.length >> (Math.min(Math.abs(2), 1))];
      }
         rightQ = (17 <= ((launcher_ ? 17 : xinit_wpr.length) / (Math.max(xinit_wpr.length, 1))));
         xinit_wpr = `${3 % (Math.max(5, parseInt(`${turns}`)))}`;
      if (launcher_ && 3 >= (owngoalc.size << (Math.min(Math.abs(5), 1)))) {
          let libavutilr = 2;
          let launch9 = 1.0;
          let signinup7 = 3;
         owngoalc = new Map([[`${kuaishouH}`, 3]]);
         libavutilr |= parseInt(`${launch9}`);
         launch9 += parseInt(`${launch9}`) & 1;
         signinup7 <<= Math.min(Math.abs(1), 2);
      }
         kuaishouH = String.fromCharCode(82,0) == xinit_wpr || owngoalc.size > 97;
      do {
          let audiencep = String.fromCharCode(113,117,97,110,116,105,122,101,100,95,120,95,54,56,0);
          let modulesx = new Map([[String.fromCharCode(111,95,54,49,95,99,104,101,99,107,101,100,0),String.fromCharCode(99,111,112,105,101,100,95,55,95,49,48,48,0)], [String.fromCharCode(113,95,49,54,95,105,110,115,116,97,108,108,97,116,105,111,110,115,0),String.fromCharCode(111,117,116,99,111,109,101,95,54,95,56,0)]]);
          let splashW = 1;
          let updatesy = String.fromCharCode(101,118,97,115,97,112,112,95,50,95,57,56,0);
         rightQ = owngoalc.size >= 12 && turns >= 96.44;
         audiencep = `${(updatesy == String.fromCharCode(102,0) ? modulesx.size : updatesy.length)}`;
         modulesx[`${splashW}`] = 1;
         splashW %= Math.max(splashW >> (Math.min(Math.abs(1), 3)), 1);
         if (rightQ ? !rightQ : rightQ) {
            break;
         }
      } while ((3.33 <= (turns / 2.64) && !rightQ) && (rightQ ? !rightQ : rightQ));
         owngoalc[`${kuaishouH}`] = 2;
      do {
         kuaishouH = (57 > ((!launcher_ ? owngoalc.size : 80) >> (Math.min(Math.abs(owngoalc.size), 3))));
         if (kuaishouH ? !kuaishouH : kuaishouH) {
            break;
         }
      } while ((kuaishouH ? !kuaishouH : kuaishouH) && ((owngoalc.size >> (Math.min(Math.abs(5), 3))) <= 1));
      notificationO = `${1 ^ notificationO.length}`;
   }

    }

    if (state.isFullscreen) {

       let arrowQ = String.fromCharCode(116,95,49,53,95,114,101,115,112,111,110,115,101,115,0);
       let homeplayert = String.fromCharCode(98,111,100,101,114,95,110,95,56,48,0);
       let combinedB = String.fromCharCode(99,97,110,116,95,120,95,50,55,0);
         homeplayert = "1";
      if (combinedB == String.fromCharCode(114,0) && homeplayert != String.fromCharCode(75,0)) {
          let iconshares = String.fromCharCode(106,95,48,0);
          let loadingZ = String.fromCharCode(99,117,114,114,101,110,116,108,121,95,51,95,56,53,0);
          let window_6tX = 4;
          let logouserS = 5.0;
         homeplayert += `${(combinedB == String.fromCharCode(65,0) ? parseInt(`${logouserS}`) : combinedB.length)}`;
         iconshares = `${iconshares.length}`;
         loadingZ += "2";
         window_6tX *= 1 >> (Math.min(3, loadingZ.length));
         logouserS += iconshares.length & window_6tX;
      }
         arrowQ = `${(String.fromCharCode(90,0) == homeplayert ? arrowQ.length : homeplayert.length)}`;
       let chatl = false;
          let zhengpianR = String.fromCharCode(99,95,57,51,95,102,111,117,114,120,0);
         combinedB = `${((chatl ? 1 : 3) | homeplayert.length)}`;
         zhengpianR += "2";
          let libjsijniprofilerA = String.fromCharCode(103,117,97,114,97,110,116,101,101,115,95,120,95,49,52,0);
          let libyogaM = true;
          let macauU = 0;
         combinedB += `${homeplayert.length}`;
         libjsijniprofilerA += "1";
         libyogaM = 56 >= macauU;
         macauU &= macauU;
      while (combinedB.length < 2) {
          let search4 = 0.0;
          let rules5 = false;
         homeplayert = `${(parseInt(`${search4}`) >> (Math.min(3, Math.abs((rules5 ? 1 : 5)))))}`;
         break;
      }
      do {
          let yellowcirclebge = String.fromCharCode(114,97,105,110,95,55,95,56,56,0);
         homeplayert = `${homeplayert.length - 2}`;
         yellowcirclebge = "3";
         if (homeplayert.length == 2284826) {
            break;
         }
      } while ((combinedB.length <= 3) && (homeplayert.length == 2284826));
         combinedB += `${combinedB.length % 3}`;
      overlayH += `${1 | parseInt(`${less9}`)}`;
   if (2.72 >= (parseFloat(`${videojsR.length}`) - less9)) {
      videojsR = `${klevin1.length * notificationO.length}`;
   }
      if (typeof this.events.onEnterFullscreen === 'function') {

      turndownW = `${leakcheckerH.length ^ parseInt(`${bangW}`)}`;
       let nterstitialh = String.fromCharCode(114,105,103,104,116,115,95,111,95,53,55,0);
       let applicationo = 3;
       let stationw = String.fromCharCode(105,95,52,49,95,119,104,105,116,101,0);
      while ((applicationo - nterstitialh.length) <= 1) {
         applicationo |= nterstitialh.length % (Math.max(2, 3));
         break;
      }
      if (applicationo == 2) {
          let fullscreenminr = 4;
          let matchinactiveQ = 5.0;
          let bangb = 0.0;
         applicationo |= (stationw == String.fromCharCode(66,0) ? stationw.length : fullscreenminr);
         fullscreenminr ^= 2 & parseInt(`${bangb}`);
         matchinactiveQ += parseFloat(`${parseInt(`${bangb}`)}`);
      }
          let networkR = 5;
         nterstitialh = `${3 ^ networkR}`;
       let kick9 = String.fromCharCode(101,95,50,48,95,115,101,116,102,105,101,108,100,0);
       let libapminsightbP = String.fromCharCode(118,95,52,55,95,102,114,105,99,116,105,111,110,0);
         libapminsightbP += `${3 + applicationo}`;
          let combinev = 5;
         libapminsightbP += `${applicationo}`;
         combinev <<= Math.min(4, Math.abs(combinev >> (Math.min(5, Math.abs(combinev)))));
      if (nterstitialh.length > applicationo) {
          let uploadC = String.fromCharCode(99,95,49,51,95,111,118,101,114,115,99,114,111,108,108,105,110,103,0);
          let pressure4 = String.fromCharCode(119,95,55,50,95,114,101,112,108,105,101,115,0);
          let holderF = 3;
          let spinner_ = 2.0;
          let untick9 = true;
         applicationo /= Math.max(libapminsightbP.length, 5);
         uploadC = `${pressure4.length * 3}`;
         pressure4 = `${holderF}`;
         holderF |= 2 % (Math.max(parseInt(`${spinner_}`), 8));
         spinner_ -= (uploadC == String.fromCharCode(116,0) ? (untick9 ? 5 : 1) : uploadC.length);
         untick9 = 70 >= uploadC.length;
      }
         nterstitialh += `${applicationo & 2}`;
      leakcheckerH.push(overlayH.length << (Math.min(Math.abs(2), 4)));
        this.events.onEnterFullscreen();
      } else {

       let foundf = String.fromCharCode(109,95,53,50,95,104,117,110,103,0);
       let data9 = [String.fromCharCode(118,111,116,101,114,115,95,110,95,54,49,0), String.fromCharCode(108,95,51,55,95,114,101,97,108,108,111,99,0), String.fromCharCode(117,95,50,95,98,108,105,116,0)];
       let otherI = [String.fromCharCode(97,95,50,50,95,99,108,97,117,115,101,115,0), String.fromCharCode(115,95,51,51,95,108,105,98,97,111,109,0)];
       let b_county = String.fromCharCode(97,95,56,95,103,101,109,102,105,108,101,0);
          let fileE = 4;
          let memberp = String.fromCharCode(116,95,50,55,95,98,117,108,108,101,116,115,0);
         data9.push(memberp.length);
         fileE |= fileE ^ 3;
         memberp += `${fileE}`;
      for (let e = 0; e < 2; e++) {
         data9 = [data9.length];
      }
         data9 = [(String.fromCharCode(72,0) == foundf ? data9.length : foundf.length)];
       let privatechatbgk = String.fromCharCode(97,110,103,101,95,106,95,55,0);
      do {
         otherI = [b_county.length];
         if (otherI.length == 4548315) {
            break;
         }
      } while ((otherI.length == 4548315) && ((otherI.length << (Math.min(Math.abs(1), 4))) < 3));
      do {
          let libreactnativeblobF = [577, 735, 327];
          let vietnamV = new Map([[String.fromCharCode(115,116,114,105,100,105,110,103,95,55,95,57,52,0),567], [String.fromCharCode(101,95,52,57,95,103,111,112,104,101,114,0),235], [String.fromCharCode(102,101,116,99,104,95,117,95,53,49,0),814]]);
          let librrcu = String.fromCharCode(118,95,54,53,95,111,112,101,114,97,116,105,110,103,0);
         data9.push(3 | vietnamV.size);
         libreactnativeblobF.push(libreactnativeblobF.length % (Math.max(librrcu.length, 2)));
         vietnamV = new Map([[`${libreactnativeblobF.length}`, 1 + librrcu.length]]);
         if (data9.length == 4839079) {
            break;
         }
      } while ((data9.length == 4839079) && (4 >= (b_county.length / 3) || 4 >= (3 / (Math.max(8, data9.length)))));
         b_county = `${privatechatbgk.length}`;
      do {
          let overlayx = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,97,116,97,95,109,95,52,53,0);
         data9 = [privatechatbgk.length >> (Math.min(Math.abs(1), 2))];
         overlayx = `${overlayx.length | overlayx.length}`;
         if (data9.length == 4263484) {
            break;
         }
      } while ((1 >= (data9.length * foundf.length)) && (data9.length == 4263484));
      leakcheckerH.push(otherI.length + 3);
       let arrowupl = 2.0;
       let overlay5 = [236, 738, 354];
       let heart9 = new Map([[String.fromCharCode(101,95,51,50,95,106,105,110,99,108,117,100,101,0),String.fromCharCode(114,101,115,117,108,117,116,105,111,110,95,121,95,55,57,0)], [String.fromCharCode(118,109,97,102,109,111,116,105,111,110,100,115,112,95,50,95,54,0),String.fromCharCode(112,97,99,107,101,116,95,112,95,54,56,0)], [String.fromCharCode(102,95,52,55,95,116,111,111,116,105,112,0),String.fromCharCode(111,95,57,52,95,98,108,111,99,107,100,115,112,0)]]);
         arrowupl -= 2 % (Math.max(1, heart9.size));
          let robotoc = new Map([[String.fromCharCode(100,95,52,48,95,114,101,99,111,114,100,105,110,103,0),56], [String.fromCharCode(100,105,97,108,105,110,103,95,97,95,57,54,0),168], [String.fromCharCode(116,105,108,101,115,95,102,95,53,50,0),168]]);
         overlay5.push(overlay5.length * 2);
         robotoc = new Map([[`${robotoc.size}`, robotoc.size]]);
         overlay5.push(3 - heart9.size);
      do {
         overlay5 = [2 << (Math.min(1, Math.abs(heart9.size)))];
         if (259301 == overlay5.length) {
            break;
         }
      } while ((3.80 <= (arrowupl / (Math.max(overlay5.length, 9))) || (overlay5.length / 3) <= 4) && (259301 == overlay5.length));
      while (heart9[`${overlay5.length}`] != null) {
         overlay5 = [heart9.size];
         break;
      }
      while (5 >= (heart9.size - parseInt(`${arrowupl}`)) && 5.75 >= (arrowupl - heart9.size)) {
         heart9[`${arrowupl}`] = overlay5.length + parseInt(`${arrowupl}`);
         break;
      }
       let adultF = 1;
         heart9 = new Map([[`${overlay5.length}`, parseInt(`${arrowupl}`) ^ 3]]);
         adultF %= Math.max(2, 2);
      less9 -= parseFloat(`${1 - overlayH.length}`);
        this.player.ref.presentFullscreenPlayer(true);
      }
    } else {

      overlayH += `${parseInt(`${less9}`) / 2}`;
       let templateprocessorb = [464, 271];
      for (let c = 0; c < 3; c++) {
          let backicon5 = 2.0;
         templateprocessorb.push(parseInt(`${backicon5}`) >> (Math.min(1, Math.abs(3))));
      }
      while ((templateprocessorb.length % (Math.max(2, 8))) == 3) {
          let componentq = String.fromCharCode(105,115,115,117,101,114,115,95,98,95,50,49,0);
         templateprocessorb.push(templateprocessorb.length);
         componentq += `${(String.fromCharCode(83,0) == componentq ? componentq.length : componentq.length)}`;
         break;
      }
       let downloadr = 5.0;
      videojsR = `${turndownW.length}`;
      if (typeof this.events.onExitFullscreen === 'function') {

       let dicek = [289, 689, 78];
       let reward3 = 0.0;
      while (parseInt(`${reward3}`) <= dicek.length) {
         reward3 *= parseInt(`${reward3}`);
         break;
      }
      for (let j = 0; j < 1; j++) {
          let traminiX = 3.0;
          let iconwatchnowr = String.fromCharCode(99,111,115,113,102,95,110,95,50,48,0);
          let handlerB = String.fromCharCode(108,110,110,105,100,95,56,95,57,55,0);
          let otherU = 2.0;
         dicek.push(parseInt(`${reward3}`));
         traminiX += parseFloat(`${3 / (Math.max(2, parseInt(`${otherU}`)))}`);
         iconwatchnowr += `${parseInt(`${otherU}`)}`;
         handlerB = "2";
      }
       let playercommonf = String.fromCharCode(97,115,98,100,95,122,95,56,56,0);
         dicek = [(playercommonf == String.fromCharCode(95,0) ? playercommonf.length : dicek.length)];
      do {
         playercommonf += `${parseInt(`${reward3}`) ^ playercommonf.length}`;
         if (String.fromCharCode(101,109,111,48,54,109,49,102,110,0) == playercommonf) {
            break;
         }
      } while ((1.56 <= (reward3 - 2.88)) && (String.fromCharCode(101,109,111,48,54,109,49,102,110,0) == playercommonf));
      do {
         dicek.push(2 * playercommonf.length);
         if (4090688 == dicek.length) {
            break;
         }
      } while ((2 <= (dicek.length * parseInt(`${reward3}`)) && (parseInt(`${reward3}`) * dicek.length) <= 2) && (4090688 == dicek.length));
      klevin1 += "3";
   for (let v = 0; v < 1; v++) {
       let crickett = String.fromCharCode(102,99,111,100,101,95,106,95,50,57,0);
       let playlistL = true;
       let libfbjni9 = 5.0;
       let sheet2 = 3.0;
         playlistL = 61.11 == sheet2;
      while (!playlistL || (4.93 + libfbjni9) < 2.16) {
         libfbjni9 += (String.fromCharCode(95,0) == crickett ? crickett.length : parseInt(`${libfbjni9}`));
         break;
      }
         libfbjni9 += (parseInt(`${libfbjni9}`) & (playlistL ? 5 : 2));
      for (let v = 0; v < 1; v++) {
         playlistL = libfbjni9 == 94.19;
      }
      for (let i = 0; i < 3; i++) {
          let promotionv = 1.0;
          let cornerf = 5.0;
          let android6 = true;
         crickett = `${((playlistL ? 3 : 4) / (Math.max(parseInt(`${libfbjni9}`), 1)))}`;
         promotionv *= parseFloat(`${parseInt(`${promotionv}`) | 2}`);
         cornerf -= parseFloat(`${3 * parseInt(`${cornerf}`)}`);
         android6 = 27.60 == cornerf;
      }
      overlayH += "2";
   }
        this.events.onExitFullscreen();
      } else {

      less9 -= parseFloat(`${parseInt(`${bangW}`)}`);
   do {
       let libavformatr = 1;
       let libcrashsdkM = String.fromCharCode(112,101,114,115,111,110,95,118,95,53,53,0);
       let alertN = [String.fromCharCode(100,105,97,108,108,101,100,95,54,95,56,51,0), String.fromCharCode(99,95,54,52,95,115,117,109,100,105,102,102,0)];
       let chinasamen = String.fromCharCode(113,115,99,97,108,101,113,112,95,111,95,51,57,0);
      while ((5 - libcrashsdkM.length) > 1) {
         alertN = [3];
         break;
      }
       let submitv = String.fromCharCode(107,95,52,53,95,99,111,108,111,114,109,97,116,114,105,120,0);
          let iconarrowrighti = new Map([[String.fromCharCode(98,95,54,55,95,115,99,97,110,105,110,100,101,120,0),471], [String.fromCharCode(109,95,56,53,95,99,116,105,109,101,0),203], [String.fromCharCode(114,101,99,104,117,110,107,95,104,95,51,0),532]]);
          let graphs = [97, 91, 757];
          let backiconi = [746, 765];
         chinasamen += `${iconarrowrighti.size}`;
         iconarrowrighti[`${backiconi.length}`] = backiconi.length;
         graphs.push(backiconi.length / (Math.max(graphs.length, 2)));
         submitv += `${alertN.length / (Math.max(2, 7))}`;
         submitv = `${(submitv == String.fromCharCode(113,0) ? libavformatr : submitv.length)}`;
          let mintegral5 = 3;
          let sansi = [String.fromCharCode(102,95,52,51,95,102,109,105,120,0), String.fromCharCode(97,116,114,97,99,100,97,116,97,95,101,95,53,49,0), String.fromCharCode(116,95,53,48,95,110,111,109,105,110,97,116,111,114,115,0)];
         chinasamen += `${(String.fromCharCode(108,0) == chinasamen ? mintegral5 : chinasamen.length)}`;
         mintegral5 -= 2;
         sansi.push(sansi.length + 3);
      do {
          let unimplementedviewf = String.fromCharCode(106,95,50,57,95,102,116,118,112,108,97,115,116,110,111,100,101,0);
          let morez = 0;
          let reward6 = new Map([[String.fromCharCode(113,95,55,57,95,99,97,110,118,97,115,0),false ], [String.fromCharCode(110,95,49,50,95,100,111,117,98,108,105,110,103,0),true ]]);
          let whatsapps = 4.0;
          let termso = 1.0;
         alertN = [3 & submitv.length];
         unimplementedviewf = `${morez}`;
         morez -= morez * reward6.size;
         reward6 = new Map([[unimplementedviewf, (unimplementedviewf == String.fromCharCode(87,0) ? unimplementedviewf.length : morez)]]);
         whatsapps -= parseFloat(`${2 * parseInt(`${whatsapps}`)}`);
         termso -= parseInt(`${termso}`) ^ 2;
         if (alertN.length == 211139) {
            break;
         }
      } while (((2 + libcrashsdkM.length) == 3 || 2 == (libcrashsdkM.length + alertN.length)) && (alertN.length == 211139));
      for (let m = 0; m < 1; m++) {
          let bootsplashC = String.fromCharCode(109,95,53,53,95,98,101,103,105,110,115,0);
          let handlerf = 2.0;
          let teamdetailsbgx = String.fromCharCode(109,117,108,116,105,112,108,105,101,114,95,105,95,52,55,0);
          let policyg = 4.0;
         alertN = [(chinasamen == String.fromCharCode(67,0) ? alertN.length : chinasamen.length)];
         bootsplashC = `${1 * bootsplashC.length}`;
         handlerf -= (String.fromCharCode(110,0) == teamdetailsbgx ? parseInt(`${handlerf}`) : teamdetailsbgx.length);
         policyg *= bootsplashC.length >> (Math.min(4, Math.abs(parseInt(`${handlerf}`))));
      }
      if (alertN.length == 5) {
          let casty = 2;
          let cornershootm = true;
          let emojiC = new Map([[String.fromCharCode(121,117,118,112,97,99,107,101,100,95,101,95,56,54,0),false ], [String.fromCharCode(112,108,117,114,97,108,105,122,101,100,95,122,95,50,56,0),true ], [String.fromCharCode(115,95,52,49,95,112,114,101,100,101,99,111,100,101,0),true ]]);
          let subtextx = 2;
         alertN.push(chinasamen.length ^ libavformatr);
         casty ^= emojiC.size;
         cornershootm = casty <= 86;
         emojiC[`${cornershootm}`] = 2;
         subtextx &= 3;
      }
         alertN = [alertN.length << (Math.min(libcrashsdkM.length, 2))];
         alertN = [2 / (Math.max(7, libavformatr))];
          let exampleimageg = String.fromCharCode(117,95,57,57,95,109,105,100,116,111,110,101,115,0);
         libcrashsdkM += `${exampleimageg.length}`;
      notificationO = "3";
      if (notificationO == String.fromCharCode(98,107,109,117,0)) {
         break;
      }
   } while ((1 == (notificationO.length / 1) && 2.69 == (less9 * parseFloat(`${notificationO.length}`))) && (notificationO == String.fromCharCode(98,107,109,117,0)));
        this.player.ref.presentFullscreenPlayer(false);
   for (let n = 0; n < 1; n++) {
      turndownW += `${((subbasketballplayeru ? 2 : 5) - parseInt(`${less9}`))}`;
   }
   for (let e = 0; e < 1; e++) {
       let privilegez = String.fromCharCode(108,97,100,100,101,114,115,116,101,112,95,115,95,52,49,0);
       let referrerh = 0;
       let fulld = new Map([[String.fromCharCode(119,95,52,53,0),788], [String.fromCharCode(112,95,52,53,95,110,101,119,114,111,119,0),300]]);
         fulld[privilegez] = (privilegez == String.fromCharCode(67,0) ? privilegez.length : referrerh);
          let commentY = String.fromCharCode(112,114,97,103,109,97,95,109,95,52,51,0);
         referrerh &= commentY.length;
       let macauE = new Map([[String.fromCharCode(103,114,111,117,112,110,97,109,101,115,95,52,95,55,49,0),String.fromCharCode(102,95,50,54,95,97,99,99,101,115,115,0)], [String.fromCharCode(101,95,52,50,95,110,101,119,108,105,110,101,115,0),String.fromCharCode(108,105,98,111,112,117,115,95,52,95,52,51,0)]]);
       let libhermesD = 5.0;
      for (let r = 0; r < 2; r++) {
         macauE = new Map([[`${fulld.size}`, privilegez.length % 2]]);
      }
      for (let x = 0; x < 3; x++) {
         macauE = new Map([[`${fulld.size}`, referrerh]]);
      }
          let collection5 = 5;
          let scheduler2 = new Map([[String.fromCharCode(101,110,99,111,100,105,110,103,95,114,95,53,0),101], [String.fromCharCode(101,95,55,52,95,120,102,97,99,101,0),707]]);
          let storeZ = String.fromCharCode(99,97,114,114,105,97,103,101,95,109,95,49,56,0);
         privilegez += `${macauE.size}`;
         collection5 ^= (storeZ == String.fromCharCode(50,0) ? storeZ.length : scheduler2.size);
         scheduler2 = new Map([[`${scheduler2.size}`, scheduler2.size & 3]]);
         macauE = new Map([[`${referrerh}`, privilegez.length * referrerh]]);
          let register_f_ = [308, 410];
          let smallorangemant = String.fromCharCode(97,95,49,53,95,115,117,98,109,118,0);
         fulld[`${macauE.size}`] = macauE.size & fulld.size;
         register_f_ = [(smallorangemant == String.fromCharCode(84,0) ? smallorangemant.length : register_f_.length)];
      leakcheckerH.push((3 / (Math.max(8, (subbasketballplayeru ? 4 : 3)))));
   }

      }
    }

    this.setState(state);
      mimoL -= 3 * parseInt(`${bangW}`);
       let cornerE = false;
       let playlistd = new Map([[String.fromCharCode(119,95,55,52,95,114,101,109,101,109,98,101,114,0),16], [String.fromCharCode(109,97,116,104,101,109,97,116,105,99,115,95,117,95,54,48,0),583], [String.fromCharCode(117,95,50,53,95,114,101,118,101,114,116,0),540]]);
      do {
         cornerE = !cornerE;
         if (cornerE ? !cornerE : cornerE) {
            break;
         }
      } while ((cornerE ? !cornerE : cornerE) && (5 >= (3 * playlistd.size)));
         cornerE = playlistd.size >= 99 && !cornerE;
       let iconpointscoreM = new Map([[String.fromCharCode(98,95,50,55,95,108,97,114,103,101,114,0),true ], [String.fromCharCode(109,117,114,109,117,114,95,106,95,51,48,0),true ]]);
       let backwhiteh = new Map([[String.fromCharCode(101,95,54,53,95,110,101,97,114,98,121,0),545], [String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,95,111,95,55,54,0),148], [String.fromCharCode(116,114,101,97,100,95,49,95,55,52,0),723]]);
         iconpointscoreM[`${iconpointscoreM.size}`] = playlistd.size ^ 1;
         playlistd[`${backwhiteh.size}`] = 2;
      for (let z = 0; z < 2; z++) {
         backwhiteh[`${backwhiteh.size}`] = backwhiteh.size;
      }
      runtimeschedulerX += 1 >> (Math.min(Math.abs(parseInt(`${bangW}`)), 5));

  }

  /**
   * Toggle playing state on <Video> component
   */
  _togglePlayPause() {
       let backiconH = new Map([[String.fromCharCode(105,95,55,48,95,115,112,105,110,0),140], [String.fromCharCode(113,95,51,95,112,105,110,110,101,100,0),583], [String.fromCharCode(112,101,114,95,109,95,53,0),568]]);
    let statsnomoredataD = new Map([[String.fromCharCode(109,95,52,55,95,100,99,116,120,100,99,0),true ], [String.fromCharCode(113,99,101,108,112,95,120,95,57,50,0),false ]]);
    let humidityk = true;
    let animationsa = 4;
    let splashC = String.fromCharCode(99,111,109,112,105,108,101,95,110,95,49,50,0);
    let whatsappv = true;
    let dycreator_ = String.fromCharCode(114,95,54,55,95,105,103,110,97,108,0);
    let faviconL = String.fromCharCode(100,114,97,103,103,97,98,108,101,95,98,95,53,53,0);
    let guideX = String.fromCharCode(119,95,53,55,95,115,117,112,101,114,110,111,100,101,115,0);
    let playlistT = String.fromCharCode(117,95,56,48,95,109,101,116,114,105,99,0);
    let predictionbuttonL = String.fromCharCode(101,110,99,111,100,105,110,103,98,95,120,95,54,49,0);
    let hongkongi = 3.0;
    let binddatasR = 2.0;
    let arrowup8 = String.fromCharCode(103,95,50,55,0);
    let data8 = String.fromCharCode(99,108,99,112,95,114,95,53,53,0);
      statsnomoredataD[`${backiconH.size}`] = 1 | backiconH.size;
   for (let j = 0; j < 3; j++) {
       let unselectedR = true;
       let liveshareq = String.fromCharCode(108,97,117,110,99,104,95,108,95,51,49,0);
       let stepz = String.fromCharCode(112,95,54,54,95,115,101,116,116,105,109,101,111,117,116,0);
         liveshareq += `${((unselectedR ? 1 : 5) & 1)}`;
         stepz += "3";
      faviconL += `${parseInt(`${hongkongi}`) / 3}`;
   }
       let closea = 4.0;
         closea /= Math.max(1, parseFloat(`${parseInt(`${closea}`)}`));
          let listR = 3.0;
          let productD = String.fromCharCode(97,114,103,118,95,100,95,50,55,0);
          let searchbarx = 1.0;
         closea *= parseFloat(`${2 | parseInt(`${closea}`)}`);
         listR -= 3 % (Math.max(3, parseInt(`${searchbarx}`)));
         productD += `${parseInt(`${searchbarx}`)}`;
         closea *= parseFloat(`${parseInt(`${closea}`) >> (Math.min(3, Math.abs(3)))}`);
      predictionbuttonL += `${1 & animationsa}`;
   for (let x = 0; x < 3; x++) {
      playlistT = "1";
   }

    let state = this.state;
      playlistT += `${playlistT.length & 1}`;
      animationsa *= 1;
   for (let x = 0; x < 2; x++) {
      statsnomoredataD[`${playlistT}`] = 3;
   }
   if (playlistT.length < 1 && !humidityk) {
       let chartE = String.fromCharCode(100,95,53,48,95,98,105,110,100,101,114,0);
       let middlewareB = String.fromCharCode(116,114,97,110,115,102,111,114,109,95,107,95,49,56,0);
       let blackm = String.fromCharCode(116,97,105,108,115,95,52,95,51,54,0);
       let defaultprofilepicw = String.fromCharCode(110,95,49,54,95,101,97,114,108,105,101,114,0);
      while (defaultprofilepicw != String.fromCharCode(102,0)) {
         chartE = `${middlewareB.length}`;
         break;
      }
      if (chartE.length <= middlewareB.length) {
          let viewsC = 4.0;
          let settingse = false;
          let whistleorangeN = String.fromCharCode(104,105,110,116,95,120,95,50,57,0);
          let homeplayern = String.fromCharCode(119,95,56,50,95,97,114,99,104,105,118,101,114,0);
          let backwhitew = 2;
         chartE = `${blackm.length & homeplayern.length}`;
         viewsC /= Math.max(2, parseInt(`${viewsC}`) / 2);
         settingse = backwhitew <= 98;
         whistleorangeN += `${((settingse ? 5 : 4) * backwhitew)}`;
         homeplayern += `${2 * parseInt(`${viewsC}`)}`;
      }
      do {
         chartE += `${(String.fromCharCode(101,0) == blackm ? middlewareB.length : blackm.length)}`;
         if (String.fromCharCode(105,55,121,0) == chartE) {
            break;
         }
      } while ((String.fromCharCode(105,55,121,0) == chartE) && (defaultprofilepicw.length == chartE.length));
         defaultprofilepicw += `${1 & middlewareB.length}`;
          let encryptW = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,102,95,105,95,53,54,0),865], [String.fromCharCode(113,95,57,48,95,109,112,101,103,118,105,100,101,111,0),579], [String.fromCharCode(120,95,50,49,95,99,114,97,122,121,116,105,109,101,0),585]]);
         middlewareB = `${1 * middlewareB.length}`;
         encryptW[`${encryptW.size}`] = encryptW.size;
      if (chartE.includes(middlewareB)) {
         chartE = `${(blackm == String.fromCharCode(90,0) ? blackm.length : defaultprofilepicw.length)}`;
      }
      while (!blackm.includes(`${defaultprofilepicw.length}`)) {
         blackm = `${1 - blackm.length}`;
         break;
      }
         middlewareB = `${blackm.length / 3}`;
       let spect = 1.0;
          let watchg = 1.0;
          let favicon_ = [String.fromCharCode(120,95,52,50,95,114,97,105,115,101,0), String.fromCharCode(102,95,53,52,0), String.fromCharCode(122,95,57,51,95,99,97,99,104,101,100,107,101,121,115,0)];
          let expiredH = 2.0;
         spect *= parseFloat(`${blackm.length << (Math.min(1, defaultprofilepicw.length))}`);
         watchg += parseFloat(`${favicon_.length}`);
         favicon_ = [1 ^ parseInt(`${watchg}`)];
         expiredH /= Math.max(4, parseFloat(`${favicon_.length / 2}`));
         chartE += "2";
      while (middlewareB.length > 5 || defaultprofilepicw == String.fromCharCode(66,0)) {
         middlewareB = `${(String.fromCharCode(87,0) == chartE ? chartE.length : parseInt(`${spect}`))}`;
         break;
      }
      playlistT = "3";
   }

    state.paused = !state.paused;
      whatsappv = (animationsa / (Math.max(splashC.length, 2))) <= 35;
       let downloade = true;
       let yellowanimationlivee = new Map([[String.fromCharCode(99,111,114,101,95,97,95,49,57,0),421], [String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,95,105,95,48,0),788]]);
       let backgroundf = false;
         yellowanimationlivee = new Map([[`${downloade}`, (2 / (Math.max((backgroundf ? 4 : 1), 2)))]]);
          let yellowO = [String.fromCharCode(103,95,51,52,95,114,101,103,100,101,102,0), String.fromCharCode(120,95,57,49,95,112,114,111,104,105,98,105,116,0)];
         backgroundf = yellowanimationlivee.size <= yellowO.length;
      for (let d = 0; d < 2; d++) {
          let soundQ = String.fromCharCode(121,95,56,56,95,99,111,110,118,101,114,116,101,100,0);
          let minimizeB = new Map([[String.fromCharCode(104,100,114,115,95,118,95,50,48,0),true ], [String.fromCharCode(117,95,49,48,95,111,109,112,114,101,115,115,111,114,0),true ], [String.fromCharCode(111,95,49,48,48,95,104,121,98,114,105,100,0),false ]]);
         backgroundf = (99 == ((downloade ? 99 : minimizeB.size) ^ minimizeB.size));
         soundQ = `${soundQ.length << (Math.min(soundQ.length, 4))}`;
      }
      if (5 >= yellowanimationlivee.size || 2 >= (yellowanimationlivee.size & 5)) {
          let overG = [769, 431];
          let suggestion5 = new Map([[String.fromCharCode(113,112,101,108,111,114,95,108,95,55,52,0),411], [String.fromCharCode(115,105,109,112,108,101,116,97,103,95,51,95,51,56,0),138], [String.fromCharCode(108,111,99,97,108,105,116,121,95,98,95,51,0),489]]);
         backgroundf = (backgroundf ? !downloade : !backgroundf);
         overG = [overG.length];
         suggestion5 = new Map([[`${suggestion5.size}`, overG.length]]);
      }
         yellowanimationlivee[`${backgroundf}`] = 1;
      if (!downloade) {
         backgroundf = !backgroundf;
      }
      do {
         downloade = yellowanimationlivee.size > 83;
         if (downloade ? !downloade : downloade) {
            break;
         }
      } while ((downloade || (5 << (Math.min(1, Math.abs(yellowanimationlivee.size)))) == 3) && (downloade ? !downloade : downloade));
      if ((yellowanimationlivee.size - 2) <= 5) {
         backgroundf = !downloade || yellowanimationlivee.size >= 3;
      }
      for (let h = 0; h < 2; h++) {
         downloade = (((!downloade ? 72 : yellowanimationlivee.size) | yellowanimationlivee.size) > 72);
      }
      guideX = "2";
       let usernameY = 5;
       let valuesz = String.fromCharCode(122,95,51,50,95,100,111,112,115,0);
       let morem = 5.0;
       let sharewhiteh = String.fromCharCode(117,110,107,110,111,119,110,115,95,101,95,50,55,0);
       let knewsk = String.fromCharCode(100,95,54,51,95,112,107,103,99,111,110,102,105,103,0);
      if (sharewhiteh.includes(`${morem}`)) {
         morem += parseInt(`${morem}`);
      }
         morem /= Math.max(usernameY, 1);
      while (knewsk.length <= 5 || 5 <= sharewhiteh.length) {
         sharewhiteh += `${3 >> (Math.min(5, sharewhiteh.length))}`;
         break;
      }
          let spinnero = 0.0;
          let iconfeedback2 = false;
         usernameY *= parseInt(`${morem}`);
         spinnero -= parseFloat(`${parseInt(`${spinnero}`) % 2}`);
         iconfeedback2 = spinnero > 24.60 && !iconfeedback2;
          let footballtrophyN = 3;
         usernameY *= (sharewhiteh == String.fromCharCode(95,0) ? sharewhiteh.length : parseInt(`${morem}`));
         footballtrophyN |= 2 << (Math.min(5, Math.abs(footballtrophyN)));
      if (sharewhiteh.includes(valuesz)) {
         valuesz = `${valuesz.length}`;
      }
      for (let a = 0; a < 1; a++) {
         usernameY /= Math.max(2 / (Math.max(5, valuesz.length)), 2);
      }
      if (!sharewhiteh.startsWith(valuesz)) {
         valuesz = `${knewsk.length}`;
      }
      statsnomoredataD = new Map([[`${statsnomoredataD.size}`, 2 | animationsa]]);
      faviconL += `${statsnomoredataD.size}`;


    if (state.paused) {

      splashC += `${parseInt(`${hongkongi}`)}`;
      guideX += `${((whatsappv ? 5 : 2) + parseInt(`${hongkongi}`))}`;
   do {
      statsnomoredataD[`${whatsappv}`] = 1;
      if (4333908 == statsnomoredataD.size) {
         break;
      }
   } while ((statsnomoredataD.size >= parseInt(`${hongkongi}`)) && (4333908 == statsnomoredataD.size));
      predictionbuttonL += `${statsnomoredataD.size / (Math.max(6, predictionbuttonL.length))}`;
      typeof this.events.onPause === 'function' && this.events.onPause();
    } else {

   while ((statsnomoredataD.size & backiconH.size) >= 4 && (backiconH.size & statsnomoredataD.size) >= 4) {
      backiconH[`${whatsappv}`] = splashC.length;
      break;
   }
      predictionbuttonL += `${parseInt(`${hongkongi}`) / (Math.max(arrowup8.length, 3))}`;
   do {
       let blackQ = String.fromCharCode(104,117,102,102,109,97,110,95,113,95,55,55,0);
       let langkeyN = new Map([[String.fromCharCode(104,95,50,53,95,115,101,101,100,0),373], [String.fromCharCode(110,95,51,50,95,109,117,110,108,111,99,107,0),649]]);
       let shootG = String.fromCharCode(119,114,105,116,101,114,95,101,95,52,55,0);
       let commentl = false;
         langkeyN = new Map([[shootG, (shootG == String.fromCharCode(95,0) ? (commentl ? 2 : 1) : shootG.length)]]);
         shootG += `${shootG.length * langkeyN.size}`;
      for (let n = 0; n < 2; n++) {
         blackQ = "2";
      }
      do {
         commentl = langkeyN.size <= 5 && commentl;
         if (commentl ? !commentl : commentl) {
            break;
         }
      } while ((commentl ? !commentl : commentl) && (!shootG.includes(`${commentl}`)));
      do {
         commentl = langkeyN.size < shootG.length;
         if (commentl ? !commentl : commentl) {
            break;
         }
      } while ((!blackQ.startsWith(`${commentl}`)) && (commentl ? !commentl : commentl));
          let related4 = new Map([[String.fromCharCode(112,114,111,109,111,116,105,110,103,95,107,95,54,57,0),733], [String.fromCharCode(97,100,100,114,95,97,95,56,51,0),852]]);
         commentl = shootG.length > blackQ.length;
         related4[`${related4.size}`] = related4.size | 3;
       let vipsportr = String.fromCharCode(100,95,53,49,95,99,111,108,114,0);
      do {
         vipsportr = `${blackQ.length % 2}`;
         if (3990744 == vipsportr.length) {
            break;
         }
      } while ((3990744 == vipsportr.length) && (shootG.endsWith(vipsportr)));
          let zhubor = 2;
          let subbasketballplayerK = [String.fromCharCode(118,95,57,52,95,102,102,109,109,97,108,0), String.fromCharCode(115,99,97,108,101,99,117,100,97,95,51,95,49,48,48,0)];
          let floatingL = 0.0;
         vipsportr = `${((commentl ? 3 : 4) * parseInt(`${floatingL}`))}`;
         zhubor |= 2 * subbasketballplayerK.length;
         subbasketballplayerK = [zhubor * 3];
         floatingL *= subbasketballplayerK.length;
      for (let u = 0; u < 2; u++) {
         shootG = `${(String.fromCharCode(52,0) == vipsportr ? (commentl ? 5 : 1) : vipsportr.length)}`;
      }
         blackQ += `${3 & blackQ.length}`;
         langkeyN[shootG] = ((commentl ? 1 : 1) % (Math.max(6, shootG.length)));
      faviconL = `${2 ^ guideX.length}`;
      if (String.fromCharCode(53,106,111,98,112,0) == faviconL) {
         break;
      }
   } while ((String.fromCharCode(53,106,111,98,112,0) == faviconL) && (faviconL.startsWith(`${binddatasR}`)));
   if (humidityk) {
      predictionbuttonL = `${2 << (Math.min(Math.abs(parseInt(`${binddatasR}`)), 4))}`;
   }
      typeof this.events.onPlay === 'function' &&
        this.events.onPlay(this.state.newsVideoRef);
   do {
      binddatasR *= animationsa % (Math.max(statsnomoredataD.size, 6));
      if (binddatasR == 1112700.0) {
         break;
      }
   } while ((binddatasR == 1112700.0) && (3.17 <= (binddatasR * animationsa)));
   for (let l = 0; l < 2; l++) {
      animationsa <<= Math.min(Math.abs(arrowup8.length ^ backiconH.size), 3);
   }
       let typesZ = String.fromCharCode(109,105,114,114,111,114,95,54,95,53,54,0);
          let moden = String.fromCharCode(98,95,53,50,95,97,117,120,100,97,116,97,0);
         typesZ += `${moden.length}`;
         typesZ += `${typesZ.length - 1}`;
         typesZ += `${(String.fromCharCode(112,0) == typesZ ? typesZ.length : typesZ.length)}`;
      statsnomoredataD[playlistT] = 1;
       let promotionO = 1.0;
       let thumbnailz = true;
      do {
          let weiboU = 3.0;
          let buildR = String.fromCharCode(99,97,114,111,117,115,101,108,95,97,95,54,52,0);
          let crown9 = String.fromCharCode(98,95,56,49,95,105,102,111,114,109,97,116,0);
          let servicet = false;
          let dialogc = String.fromCharCode(99,117,98,105,99,95,100,95,54,54,0);
         thumbnailz = dialogc.length == 80 && 80 == buildR.length;
         weiboU -= (parseFloat(`${crown9.length * (servicet ? 1 : 2)}`));
         buildR += `${parseInt(`${weiboU}`) - 3}`;
         crown9 += `${3 << (Math.min(Math.abs(parseInt(`${weiboU}`)), 2))}`;
         servicet = servicet && 30.36 == weiboU;
         dialogc += "2";
         if (thumbnailz ? !thumbnailz : thumbnailz) {
            break;
         }
      } while ((!thumbnailz) && (thumbnailz ? !thumbnailz : thumbnailz));
      for (let u = 0; u < 1; u++) {
         thumbnailz = 98.93 < promotionO;
      }
      if (promotionO > 1.34) {
         thumbnailz = promotionO < 26.96;
      }
      if (!thumbnailz || (1.60 - promotionO) > 2.78) {
         thumbnailz = promotionO == 16.90;
      }
         promotionO *= ((thumbnailz ? 4 : 1) << (Math.min(Math.abs(parseInt(`${promotionO}`)), 2)));
         thumbnailz = thumbnailz && 23.91 == promotionO;
      statsnomoredataD = new Map([[`${hongkongi}`, 3]]);

    }

    this.setState(state);
       let hejiw = [662, 311, 434];
       let showA = 0.0;
         hejiw = [hejiw.length % 2];
          let countdownl = new Map([[String.fromCharCode(114,101,102,101,116,99,104,95,107,95,49,48,0),453], [String.fromCharCode(99,95,54,49,95,98,111,117,110,99,105,110,101,115,115,0),405], [String.fromCharCode(97,112,112,114,111,112,114,105,97,116,101,95,55,95,55,48,0),442]]);
         hejiw.push(hejiw.length + 1);
         countdownl[`${countdownl.size}`] = 3;
      do {
         hejiw = [1];
         if (4718792 == hejiw.length) {
            break;
         }
      } while ((4718792 == hejiw.length) && ((parseInt(`${showA}`) - hejiw.length) >= 3 && (hejiw.length - parseInt(`${showA}`)) >= 3));
         showA *= parseInt(`${showA}`) / 2;
      if ((hejiw.length - showA) == 3.3) {
          let gifgoalv = 0.0;
          let attributedstringt = [371, 657, 348];
          let dycreatorI = 0.0;
          let searcht = String.fromCharCode(104,95,50,48,95,99,111,110,116,101,110,116,105,111,110,0);
          let iconscheduleQ = false;
         showA /= Math.max(1, 1);
         gifgoalv /= Math.max(3, 1);
         attributedstringt = [2 * parseInt(`${gifgoalv}`)];
         dycreatorI *= parseFloat(`${attributedstringt.length}`);
         searcht = `${attributedstringt.length}`;
         iconscheduleQ = iconscheduleQ || searcht.length == 66;
      }
         hejiw = [3];
      binddatasR -= 3;
   for (let j = 0; j < 2; j++) {
      animationsa >>= Math.min(Math.abs(2), 1);
   }
      guideX = `${3 << (Math.min(5, Math.abs(parseInt(`${hongkongi}`))))}`;
   if (dycreator_ != String.fromCharCode(76,0) && 5 < guideX.length) {
      dycreator_ = `${dycreator_.length}`;
   }

  }

   
  _toggleTimer() {
       let chinaS = String.fromCharCode(99,97,110,100,108,101,95,113,95,53,49,0);
    let statsk = 1.0;
    let kickg = String.fromCharCode(109,111,117,115,95,101,95,49,54,0);
    let rewardl = false;
    let heartT = 4.0;
    let carouselx = String.fromCharCode(100,95,49,49,95,99,104,111,115,101,110,0);
    let profileQ = new Map([[String.fromCharCode(98,97,114,114,101,116,116,95,121,95,52,53,0),false ], [String.fromCharCode(109,115,109,112,101,103,118,95,120,95,56,0),true ]]);
    let clearG = [109, 316, 316];
    let source2 = true;
    let airbnbstar8 = [636, 413, 13];
    let agreementX = true;
    let iconarrowrightorangeH = String.fromCharCode(112,97,110,100,105,110,103,95,121,95,55,57,0);
    let sharedm = [371, 883];
    let roundv = 3;
      source2 = airbnbstar8.includes(clearG[clearG - 1]);
      rewardl = (statsk / (Math.max(parseFloat(`${profileQ.size}`), 5))) < 92.29;
   while (!carouselx.startsWith(`${clearG.length}`)) {
       let iconarrowrightr = String.fromCharCode(108,95,49,56,95,112,111,115,116,98,111,120,0);
          let dependency_ = String.fromCharCode(114,101,102,99,111,117,110,116,101,100,111,98,106,101,99,116,95,105,95,49,50,0);
          let turndownX = [157, 729, 507];
         iconarrowrightr += `${iconarrowrightr.length}`;
         dependency_ += `${dependency_.length * 2}`;
         turndownX.push(1 | turndownX.length);
      while (iconarrowrightr == iconarrowrightr) {
         iconarrowrightr = `${2 - iconarrowrightr.length}`;
         break;
      }
         iconarrowrightr = `${(iconarrowrightr == String.fromCharCode(119,0) ? iconarrowrightr.length : iconarrowrightr.length)}`;
      carouselx += `${((source2 ? 4 : 5) % (Math.max(clearG.length, 10)))}`;
      break;
   }
   while (kickg.endsWith(`${agreementX}`)) {
      agreementX = carouselx == String.fromCharCode(116,0);
      break;
   }
      airbnbstar8.push(carouselx.length & chinaS.length);
       let predictionwinl = 5;
       let whiteanimationlivex = String.fromCharCode(101,120,116,101,110,100,95,98,95,51,49,0);
       let typingg = [680, 804];
      do {
         typingg.push(1);
         if (typingg.length == 4779011) {
            break;
         }
      } while ((typingg.length == 4779011) && (whiteanimationlivex.length == typingg.length));
      if (whiteanimationlivex.length == 5) {
         whiteanimationlivex += `${predictionwinl + 1}`;
      }
          let turns = String.fromCharCode(105,95,52,57,95,114,117,98,121,0);
          let pathN = 4.0;
         typingg.push(parseInt(`${pathN}`) % (Math.max(8, typingg.length)));
         turns = `${3 >> (Math.min(1, turns.length))}`;
         pathN -= turns.length;
         whiteanimationlivex += `${whiteanimationlivex.length}`;
      while (5 > (1 / (Math.max(8, whiteanimationlivex.length)))) {
         typingg.push(whiteanimationlivex.length);
         break;
      }
         typingg.push(whiteanimationlivex.length);
      for (let l = 0; l < 2; l++) {
         typingg = [1 >> (Math.min(1, typingg.length))];
      }
         whiteanimationlivex += `${predictionwinl}`;
          let muted4 = String.fromCharCode(98,105,119,103,116,95,115,95,49,49,0);
          let sellc = 1.0;
          let mimoL = 4.0;
         typingg.push(typingg.length);
         muted4 += `${3 % (Math.max(10, muted4.length))}`;
         sellc -= muted4.length * parseInt(`${mimoL}`);
         mimoL += parseFloat(`${3}`);
      airbnbstar8 = [3];
   if ((statsk / 1.66) >= 4.22 && statsk >= 1.66) {
      agreementX = clearG.length == 52;
   }
   while ((carouselx.length + parseInt(`${heartT}`)) <= 3 && 2.13 <= (parseFloat(`${carouselx.length}`) + heartT)) {
       let shielddoneQ = 4.0;
       let mountingD = 1.0;
       let sends = String.fromCharCode(99,95,56,49,95,102,98,100,101,118,0);
       let audienceU = true;
       let teamN = String.fromCharCode(109,95,49,49,95,112,110,103,100,115,112,0);
       let predictionbannersharedC = 0.0;
         sends += `${parseInt(`${shielddoneQ}`) / (Math.max(2, 3))}`;
      if (audienceU) {
         audienceU = sends.length > 26;
      }
          let themej = 5;
          let chartE = 5;
         mountingD += parseFloat(`${1}`);
         themej *= chartE | themej;
         chartE &= chartE & themej;
          let gmail6 = String.fromCharCode(112,95,51,56,95,115,110,97,112,0);
          let infoF = 4.0;
          let condensedA = String.fromCharCode(118,95,54,53,95,111,110,102,105,103,117,114,97,116,105,111,110,0);
         mountingD += parseFloat(`${parseInt(`${mountingD}`)}`);
         gmail6 += `${parseInt(`${infoF}`) << (Math.min(Math.abs(2), 1))}`;
         infoF -= 2 % (Math.max(6, condensedA.length));
         condensedA += `${gmail6.length << (Math.min(Math.abs(3), 4))}`;
       let profileg = 5;
      while (4.78 == (mountingD * 3.55) && 3.55 == mountingD) {
         audienceU = (sends.length >> (Math.min(5, teamN.length))) < 1;
         break;
      }
      if ((2.21 * shielddoneQ) == 5.49) {
          let defaultfootballbgP = 5.0;
          let zhubo5 = 0.0;
         shielddoneQ /= Math.max(3 / (Math.max(parseInt(`${predictionbannersharedC}`), 4)), 2);
         defaultfootballbgP += parseInt(`${zhubo5}`);
         zhubo5 += parseFloat(`${3 % (Math.max(2, parseInt(`${defaultfootballbgP}`)))}`);
      }
         shielddoneQ /= Math.max(2, profileg);
      for (let j = 0; j < 3; j++) {
         mountingD -= parseFloat(`${parseInt(`${mountingD}`) * 3}`);
      }
          let collectionz = 3;
          let spinnerF = new Map([[String.fromCharCode(101,95,56,48,95,115,104,105,109,109,101,114,0),63], [String.fromCharCode(99,111,100,101,95,56,95,52,55,0),184]]);
          let othere = new Map([[String.fromCharCode(112,111,116,105,115,105,111,110,95,52,95,57,51,0),522], [String.fromCharCode(115,95,54,50,95,106,100,99,111,101,102,99,116,0),549], [String.fromCharCode(101,95,56,56,95,112,114,101,108,111,97,100,101,100,0),727]]);
         predictionbannersharedC *= parseFloat(`${teamN.length}`);
         collectionz *= othere.size << (Math.min(Math.abs(1), 5));
         spinnerF = new Map([[`${spinnerF.size}`, spinnerF.size / 3]]);
         othere = new Map([[`${spinnerF.size}`, collectionz + spinnerF.size]]);
          let libsentry7 = 0.0;
          let contextG = String.fromCharCode(115,104,97,100,105,110,103,95,103,95,55,49,0);
         profileg ^= parseInt(`${shielddoneQ}`) ^ 1;
         libsentry7 += parseFloat(`${parseInt(`${libsentry7}`) + 2}`);
         contextG = `${contextG.length}`;
      for (let o = 0; o < 1; o++) {
          let cored = true;
          let formq = 3;
          let redscoreballb = [225, 798];
          let catalogB = new Map([[String.fromCharCode(115,119,102,104,97,115,104,95,55,95,50,50,0),false ], [String.fromCharCode(98,95,49,57,95,115,117,98,115,116,114,101,97,109,0),true ]]);
         predictionbannersharedC /= Math.max(1, parseFloat(`${2}`));
         cored = redscoreballb.length == catalogB.size;
         formq ^= catalogB.size >> (Math.min(redscoreballb.length, 4));
      }
      if ((profileg | sends.length) == 4 && (profileg | 4) == 4) {
         sends += `${sends.length}`;
      }
      if (mountingD > 2.90) {
         mountingD /= Math.max(parseFloat(`${parseInt(`${predictionbannersharedC}`) << (Math.min(3, Math.abs(3)))}`), 4);
      }
      heartT /= Math.max((parseFloat(`${(agreementX ? 1 : 1) % (Math.max(airbnbstar8.length, 7))}`)), 3);
      break;
   }
   do {
      source2 = (19 <= ((agreementX ? 19 : profileQ.size) << (Math.min(Math.abs(profileQ.size), 5))));
      if (source2 ? !source2 : source2) {
         break;
      }
   } while ((chinaS.length > 2 || source2) && (source2 ? !source2 : source2));
      rewardl = chinaS.length <= 3;
      kickg = `${(kickg == String.fromCharCode(89,0) ? parseInt(`${heartT}`) : kickg.length)}`;
      rewardl = 76 == profileQ.size;
   if (Array.from(profileQ.values()).includes(airbnbstar8.length)) {
       let reportQ = String.fromCharCode(105,95,52,53,95,110,97,117,116,105,99,97,108,0);
       let cancelT = String.fromCharCode(108,95,50,95,114,105,99,101,0);
       let tickY = [693, 216];
       let statsS = 2.0;
      do {
         tickY.push(tickY.length);
         if (tickY.length == 1783258) {
            break;
         }
      } while ((tickY.length > 3) && (tickY.length == 1783258));
       let faviconK = true;
       let orangeuparrowa = true;
          let aboutl = [464, 517];
          let predictionwins = String.fromCharCode(98,95,56,56,95,104,108,115,101,110,99,0);
          let iconpointscoreW = new Map([[String.fromCharCode(110,95,50,56,95,119,97,105,116,105,110,103,0),345], [String.fromCharCode(112,95,54,53,95,113,105,110,116,102,108,111,97,116,0),755], [String.fromCharCode(97,95,49,56,95,107,105,108,111,98,121,116,101,0),946]]);
         orangeuparrowa = !predictionwins.startsWith(`${orangeuparrowa}`);
         aboutl = [3];
         predictionwins = `${aboutl.length}`;
         iconpointscoreW = new Map([[`${iconpointscoreW.size}`, 2 * aboutl.length]]);
         faviconK = 70.4 == statsS;
         faviconK = 51 > tickY.length;
          let bellh = 1;
          let android0 = new Map([[String.fromCharCode(117,95,57,52,95,97,99,118,112,0),61], [String.fromCharCode(115,98,105,116,115,95,48,95,57,54,0),535], [String.fromCharCode(115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,95,108,95,49,49,0),390]]);
         statsS /= Math.max(parseFloat(`${android0.size - 3}`), 1);
         bellh -= bellh;
         android0 = new Map([[`${bellh}`, bellh ^ bellh]]);
         tickY.push(parseInt(`${statsS}`));
      for (let j = 0; j < 2; j++) {
         statsS /= Math.max(2, parseFloat(`${parseInt(`${statsS}`)}`));
      }
      for (let z = 0; z < 1; z++) {
         cancelT += `${2 | parseInt(`${statsS}`)}`;
      }
       let libavformatY = 0.0;
         cancelT = `${reportQ.length - 1}`;
      if (1 == (1 * tickY.length)) {
          let subsN = [String.fromCharCode(105,110,118,105,116,101,114,115,95,102,95,49,50,0), String.fromCharCode(114,116,115,112,99,111,100,101,115,95,111,95,53,55,0), String.fromCharCode(112,114,111,106,101,99,116,105,111,110,95,117,95,50,54,0)];
          let nalyticsC = String.fromCharCode(98,95,50,54,95,105,114,114,101,108,118,97,110,116,0);
         tickY.push(subsN.length | 3);
         subsN = [nalyticsC.length];
         nalyticsC += `${nalyticsC.length % (Math.max(3, 5))}`;
      }
      airbnbstar8.push(iconarrowrightorangeH.length << (Math.min(4, reportQ.length)));
   }

    
    
    
  }

   
  _onBack() {
       let selectH = String.fromCharCode(106,111,121,102,117,108,95,115,95,55,56,0);
    let footballB = String.fromCharCode(99,97,110,110,111,116,95,105,95,56,0);
    let questv = 4;
    let scrollviewD = new Map([[String.fromCharCode(106,95,53,56,95,100,101,112,114,101,99,105,97,116,101,100,104,0),850], [String.fromCharCode(114,95,52,54,95,112,97,107,116,0),494], [String.fromCharCode(102,111,114,101,109,97,110,95,105,95,49,48,48,0),977]]);
    let episodesC = String.fromCharCode(114,95,50,53,95,97,110,103,108,101,100,0);
    let configurem = String.fromCharCode(112,95,53,56,95,114,101,118,105,101,119,0);
    let penaltymatchiconF = [String.fromCharCode(110,95,53,51,95,99,111,109,112,0), String.fromCharCode(112,107,112,107,101,121,95,119,95,57,55,0), String.fromCharCode(122,95,56,49,95,109,101,116,101,114,0)];
    let pathL = 4.0;
    let downloadede = String.fromCharCode(102,114,97,109,101,113,117,101,117,101,95,101,95,57,52,0);
    let flipperg = [228, 222];
   if (penaltymatchiconF.includes(questv)) {
       let imagemanageri = new Map([[String.fromCharCode(97,95,51,54,95,97,110,97,110,100,97,110,0),44], [String.fromCharCode(106,95,55,56,95,109,117,108,116,105,101,110,100,0),355]]);
       let tnewsT = false;
       let disconnectedd = 0.0;
       let filedw = String.fromCharCode(110,111,114,109,97,108,105,115,101,95,112,95,53,50,0);
       let iconviewergifx = 0.0;
          let collectionH = String.fromCharCode(100,101,99,111,114,114,95,112,95,50,50,0);
          let downarrowW = 5;
          let libfbjniq = 1.0;
         disconnectedd -= parseFloat(`${collectionH.length & imagemanageri.size}`);
         collectionH += `${parseInt(`${libfbjniq}`)}`;
         downarrowW |= parseInt(`${libfbjniq}`) / (Math.max(1, downarrowW));
       let zoomA = 3;
       let stationk = String.fromCharCode(106,95,55,55,95,118,108,98,117,102,0);
       let libapminsightag = String.fromCharCode(99,97,108,99,119,95,104,95,52,55,0);
       let ajaxf = 4;
       let mbjscommonW = 1;
       let time__v = new Map([[String.fromCharCode(113,95,51,53,95,109,112,101,103,117,116,105,108,115,0),621], [String.fromCharCode(112,95,55,54,95,109,117,115,105,99,0),781], [String.fromCharCode(120,95,57,53,95,97,119,97,107,101,0),773]]);
          let networkO = false;
         iconviewergifx += ajaxf * 2;
         networkO = networkO || !networkO;
          let executorP = String.fromCharCode(122,95,49,50,95,108,100,105,115,116,0);
          let indicatork = new Map([[String.fromCharCode(103,101,110,115,95,116,95,52,0),301], [String.fromCharCode(112,95,54,49,95,99,111,108,120,0),308], [String.fromCharCode(98,95,55,49,95,101,115,116,105,109,97,116,105,111,110,0),695]]);
          let iconbackwhiteg = [String.fromCharCode(108,111,99,97,108,97,100,100,114,95,105,95,52,49,0), String.fromCharCode(112,95,51,50,95,104,101,118,99,100,115,112,0), String.fromCharCode(119,101,105,95,118,95,54,53,0)];
         libapminsightag = `${1 | parseInt(`${iconviewergifx}`)}`;
         executorP += `${indicatork.size}`;
         indicatork = new Map([[`${iconbackwhiteg.length}`, 3]]);
         iconbackwhiteg.push(1);
         zoomA |= filedw.length >> (Math.min(Math.abs(3), 2));
          let z_hashc = String.fromCharCode(114,95,49,48,48,95,101,110,99,111,100,105,110,103,0);
          let leaguedetailsbgb = [55, 248, 312];
         disconnectedd /= Math.max((parseFloat(`${(tnewsT ? 4 : 5) + parseInt(`${disconnectedd}`)}`)), 2);
         z_hashc += `${leaguedetailsbgb.length}`;
         leaguedetailsbgb = [z_hashc.length];
          let gestureD = 1.0;
          let rootl = [130, 706];
          let bootsplashb = new Map([[String.fromCharCode(99,95,51,54,95,117,110,98,111,117,110,100,0),119], [String.fromCharCode(101,95,56,53,95,101,99,116,97,110,103,108,101,0),311]]);
         time__v[`${mbjscommonW}`] = zoomA - mbjscommonW;
         gestureD += parseFloat(`${1 / (Math.max(2, rootl.length))}`);
         rootl.push(rootl.length);
         bootsplashb[`${gestureD}`] = rootl.length;
         time__v = new Map([[filedw, filedw.length << (Math.min(3, Math.abs(parseInt(`${disconnectedd}`))))]]);
       let libloggerK = 0.0;
       let small_ = false;
       let moduleb = String.fromCharCode(97,117,116,111,108,111,99,107,95,98,95,51,57,0);
       let gradlewq = String.fromCharCode(114,95,55,53,95,99,121,99,108,101,0);
       let teamI = String.fromCharCode(105,95,49,52,95,112,97,103,0);
       let bellt = String.fromCharCode(101,95,51,54,95,118,101,110,117,101,0);
      questv >>= Math.min(Math.abs(3), 4);
   }
   while (2 >= (questv + 4) && 2 >= (4 + configurem.length)) {
      questv += selectH.length;
      break;
   }
       let profilepicd = new Map([[String.fromCharCode(113,95,53,50,95,109,117,120,101,114,0),761], [String.fromCharCode(107,95,54,54,95,103,115,109,100,101,99,0),310]]);
       let selecteda = [991, 408, 434];
       let description_fB = [78, 879];
       let lightb = [731, 575, 492];
         description_fB.push(description_fB.length % (Math.max(4, lightb.length)));
      while (!lightb.includes(description_fB.length)) {
         description_fB.push(selecteda.length / 1);
         break;
      }
      for (let v = 0; v < 3; v++) {
         selecteda.push(lightb.length);
      }
      while ((5 & profilepicd.size) == 2 || 1 == (5 & selecteda.length)) {
          let footballtrophyw = new Map([[String.fromCharCode(117,95,51,95,116,114,97,110,115,102,101,114,114,101,100,0),String.fromCharCode(99,111,117,110,116,95,56,95,57,51,0)], [String.fromCharCode(112,114,101,115,117,98,109,105,116,95,111,95,56,57,0),String.fromCharCode(101,95,53,56,95,102,99,109,117,108,0)]]);
          let subinv = String.fromCharCode(111,95,54,53,95,99,108,111,99,107,119,105,115,101,0);
          let singaporez = new Map([[String.fromCharCode(112,95,56,54,95,109,101,115,104,0),false ], [String.fromCharCode(121,95,50,56,95,108,97,116,116,105,99,101,0),true ], [String.fromCharCode(99,111,110,100,105,116,105,111,110,115,95,53,95,54,57,0),false ]]);
          let flyerC = [String.fromCharCode(121,95,49,50,95,119,105,110,115,111,99,107,0), String.fromCharCode(115,101,113,117,101,110,99,101,114,95,102,95,52,48,0)];
         profilepicd[`${flyerC.length}`] = flyerC.length + 2;
         footballtrophyw[`${singaporez.size}`] = 3;
         subinv += `${subinv.length}`;
         singaporez = new Map([[`${footballtrophyw.size}`, (subinv == String.fromCharCode(71,0) ? footballtrophyw.size : subinv.length)]]);
         break;
      }
      do {
         lightb.push(profilepicd.size % (Math.max(lightb.length, 6)));
         if (1156972 == lightb.length) {
            break;
         }
      } while ((lightb.length > 3) && (1156972 == lightb.length));
         description_fB.push(selecteda.length);
         profilepicd[`${lightb.length}`] = lightb.length;
         lightb.push(lightb.length - selecteda.length);
      episodesC += `${questv}`;
      penaltymatchiconF.push(3);

    if (this.props.navigator && this.props.navigator.pop) {

       let libreactperfloggerjniK = [String.fromCharCode(100,117,112,101,100,95,116,95,52,48,0), String.fromCharCode(122,95,52,51,95,98,103,114,97,0)];
       let aboutW = 4.0;
       let singleK = 1.0;
         libreactperfloggerjniK.push(libreactperfloggerjniK.length - 1);
         singleK *= parseInt(`${aboutW}`);
      do {
          let emojiheart7 = 2.0;
          let iconviewergif8 = false;
         aboutW -= 2 ^ parseInt(`${aboutW}`);
         emojiheart7 -= ((iconviewergif8 ? 3 : 3) % (Math.max(parseInt(`${emojiheart7}`), 5)));
         iconviewergif8 = !iconviewergif8;
         if (2001034.0 == aboutW) {
            break;
         }
      } while ((2.94 >= (singleK * aboutW)) && (2001034.0 == aboutW));
         aboutW += 2 >> (Math.min(4, libreactperfloggerjniK.length));
         aboutW -= parseInt(`${aboutW}`);
      for (let g = 0; g < 3; g++) {
         aboutW *= 2 << (Math.min(Math.abs(parseInt(`${singleK}`)), 5));
      }
       let sharewhitet = String.fromCharCode(108,111,116,115,95,56,95,53,56,0);
       let hook3 = String.fromCharCode(115,111,102,116,116,104,114,101,115,104,95,50,95,49,49,0);
         aboutW /= Math.max(3 - hook3.length, 5);
          let libcxxcomponentsf = String.fromCharCode(106,95,56,49,95,115,121,115,99,116,108,115,0);
          let sheetZ = [399, 22, 599];
          let orangeE = 2.0;
         libreactperfloggerjniK = [1 - parseInt(`${aboutW}`)];
         libcxxcomponentsf = `${1 - parseInt(`${orangeE}`)}`;
         sheetZ = [3];
         orangeE += sheetZ.length;
      episodesC = `${libreactperfloggerjniK.length - 3}`;
   if (!footballB.endsWith(`${pathL}`)) {
       let brightnessN = [308, 821];
       let libjsil = true;
       let sports = 4.0;
       let huaweii = [String.fromCharCode(99,111,108,111,117,114,95,120,95,54,48,0), String.fromCharCode(102,95,56,56,95,115,101,116,116,105,116,108,101,0)];
       let reminder1 = [819, 941];
      do {
          let club9 = String.fromCharCode(100,95,57,56,95,119,97,114,110,105,110,103,0);
         sports -= 3;
         club9 += `${club9.length * club9.length}`;
         if (4566551.0 == sports) {
            break;
         }
      } while ((4566551.0 == sports) && (!libjsil));
      do {
         huaweii.push(reminder1.length | huaweii.length);
         if (4001502 == huaweii.length) {
            break;
         }
      } while (((sports * 3.37) > 3.8) && (4001502 == huaweii.length));
      while ((2.58 * sports) >= 3.38) {
          let release_4rk = 0;
          let projectv = String.fromCharCode(98,95,56,57,95,115,116,100,105,110,116,0);
         reminder1 = [brightnessN.length];
         release_4rk &= release_4rk;
         projectv = `${projectv.length}`;
         break;
      }
      while (1 >= (4 >> (Math.min(3, huaweii.length))) && (reminder1.length >> (Math.min(huaweii.length, 5))) >= 4) {
          let videobufferloadingQ = String.fromCharCode(103,95,55,48,95,115,108,102,0);
          let reddownarrow0 = 3;
         reminder1 = [reminder1.length ^ reddownarrow0];
         videobufferloadingQ += `${videobufferloadingQ.length}`;
         reddownarrow0 *= videobufferloadingQ.length | 1;
         break;
      }
      while (3 >= (5 | reminder1.length)) {
         huaweii.push(((libjsil ? 2 : 4) % (Math.max(2, 1))));
         break;
      }
      while (2 <= (reminder1.length & 1) || (brightnessN.length & 1) <= 3) {
          let customo = [463, 829, 990];
          let libfbjniN = String.fromCharCode(105,95,55,54,95,97,102,102,101,99,116,0);
          let nativej = new Map([[String.fromCharCode(112,95,57,57,95,115,105,103,110,97,108,0),725], [String.fromCharCode(106,95,52,57,95,115,97,116,105,115,102,105,101,100,0),634], [String.fromCharCode(97,112,105,95,105,95,49,51,0),468]]);
         reminder1 = [1 << (Math.min(2, Math.abs(nativej.size)))];
         customo = [(libfbjniN == String.fromCharCode(70,0) ? customo.length : libfbjniN.length)];
         nativej = new Map([[`${customo.length}`, libfbjniN.length * 1]]);
         break;
      }
      for (let f = 0; f < 1; f++) {
          let trashT = String.fromCharCode(102,115,105,122,101,95,119,95,54,52,0);
          let unreadg = 2;
          let blackX = 1.0;
          let cleark = 2;
         brightnessN = [brightnessN.length];
         trashT = `${parseInt(`${blackX}`)}`;
         unreadg /= Math.max(5, unreadg / 2);
         blackX /= Math.max(unreadg, 4);
         cleark &= unreadg;
      }
      do {
         libjsil = brightnessN.length <= 19;
         if (libjsil ? !libjsil : libjsil) {
            break;
         }
      } while ((brightnessN.length > 1 && (brightnessN.length - 1) > 2) && (libjsil ? !libjsil : libjsil));
      for (let g = 0; g < 1; g++) {
         sports /= Math.max(4, 2);
      }
      do {
         brightnessN = [2];
         if (brightnessN.length == 1609705) {
            break;
         }
      } while ((brightnessN.length == 1609705) && (3 == (brightnessN.length % (Math.max(reminder1.length, 4))) && 5 == (reminder1.length % (Math.max(3, 5)))));
      for (let q = 0; q < 2; q++) {
         reminder1 = [huaweii.length];
      }
      do {
         reminder1.push(parseInt(`${sports}`));
         if (3548754 == reminder1.length) {
            break;
         }
      } while ((4.31 <= (sports - 5.85) && (parseInt(`${sports}`) - reminder1.length) <= 4) && (3548754 == reminder1.length));
      while (5.37 > sports) {
         sports += 3 - brightnessN.length;
         break;
      }
      for (let b = 0; b < 1; b++) {
         sports += parseInt(`${sports}`);
      }
          let readw = 1.0;
          let matchinactiveo = 2.0;
         huaweii = [parseInt(`${readw}`) - parseInt(`${matchinactiveo}`)];
      footballB += `${(String.fromCharCode(83,0) == selectH ? reminder1.length : selectH.length)}`;
   }
   do {
      penaltymatchiconF.push((footballB == String.fromCharCode(72,0) ? footballB.length : questv));
      if (3575214 == penaltymatchiconF.length) {
         break;
      }
   } while ((3575214 == penaltymatchiconF.length) && (penaltymatchiconF.includes(pathL)));
   if ((selectH.length >> (Math.min(1, Math.abs(questv)))) >= 4) {
      selectH = `${parseInt(`${pathL}`)}`;
   }
      this.props.navigator.pop();
    } else {

   do {
      scrollviewD[configurem] = 2;
      if (scrollviewD.size == 144326) {
         break;
      }
   } while ((scrollviewD.size == 144326) && (3 <= (scrollviewD.size | 3) && 4 <= (3 | scrollviewD.size)));
       let textlayoutmanagerf = String.fromCharCode(99,111,109,112,97,114,95,102,95,56,51,0);
       let showE = true;
       let notificationfillempty6 = 0;
      do {
         showE = !showE;
         if (showE ? !showE : showE) {
            break;
         }
      } while ((showE ? !showE : showE) && ((1 | notificationfillempty6) > 1 && 1 > notificationfillempty6));
      while (!showE && 1 <= textlayoutmanagerf.length) {
         textlayoutmanagerf += "2 - notificationfillempty6";
         break;
      }
         showE = notificationfillempty6 == 99;
       let libavformat8 = 0.0;
       let yellowe = 3.0;
         showE = yellowe >= 86.16 || !showE;
         showE = 49.79 >= libavformat8;
         showE = textlayoutmanagerf.length == 75;
          let fastforwardt = String.fromCharCode(97,114,116,95,115,95,54,49,0);
          let qaag2 = 1.0;
         yellowe /= Math.max((notificationfillempty6 / (Math.max(1, (showE ? 3 : 2)))), 3);
         fastforwardt += `${parseInt(`${qaag2}`) & fastforwardt.length}`;
         qaag2 += fastforwardt.length;
      do {
          let relatedh = 3;
          let borderlessX = String.fromCharCode(97,95,50,50,95,102,97,105,108,117,114,101,115,0);
          let statsk = [String.fromCharCode(105,95,54,56,95,100,101,118,105,99,101,0), String.fromCharCode(111,95,51,55,95,101,120,112,111,114,116,0)];
          let redscoreball1 = String.fromCharCode(110,111,105,115,101,115,95,108,95,49,50,0);
         textlayoutmanagerf = "3 + notificationfillempty6";
         relatedh %= Math.max(4, 2);
         borderlessX = `${redscoreball1.length}`;
         statsk = [3];
         redscoreball1 = `${borderlessX.length / 3}`;
         if (textlayoutmanagerf.length == 1826036) {
            break;
         }
      } while ((textlayoutmanagerf.length == 1826036) && (4 < (3 - notificationfillempty6) && 3 < (notificationfillempty6 - textlayoutmanagerf.length)));
      questv %= Math.max(1, 2 + footballB.length);
   while ((questv % (Math.max(episodesC.length, 6))) > 3) {
      questv -= penaltymatchiconF.length;
      break;
   }
   while (episodesC != String.fromCharCode(86,0) || downloadede == String.fromCharCode(51,0)) {
       let launch_ = 4;
       let ewardedP = String.fromCharCode(108,111,111,112,95,57,95,53,0);
       let iconusero = String.fromCharCode(122,95,50,52,95,111,114,103,0);
         iconusero = `${(iconusero == String.fromCharCode(69,0) ? launch_ : iconusero.length)}`;
         iconusero = "1";
      downloadede = `${configurem.length}`;
      break;
   }
      console.warn(
        'Warning: _onBack requires navigator property to function. Either modify the onBack prop or pass a navigator prop',
      );
      penaltymatchiconF = [parseInt(`${pathL}`)];
   while (episodesC == String.fromCharCode(110,0) && downloadede.length >= 4) {
       let networkv = String.fromCharCode(112,95,56,49,95,116,101,115,116,110,101,116,0);
       let catalogg = 1.0;
       let clearl = 5;
       let penaltyshootnogoalD = new Map([[String.fromCharCode(110,101,103,111,116,105,97,116,101,100,95,98,95,51,53,0),String.fromCharCode(101,120,112,108,111,114,101,114,95,104,95,51,51,0)], [String.fromCharCode(97,95,56,50,95,109,118,100,97,116,97,0),String.fromCharCode(100,95,55,52,95,97,117,100,105,98,105,108,105,116,121,0)]]);
         networkv += `${clearl % (Math.max(penaltyshootnogoalD.size, 6))}`;
      do {
         catalogg /= Math.max(parseFloat(`${1}`), 5);
         if (2487601.0 == catalogg) {
            break;
         }
      } while ((4 >= (penaltyshootnogoalD.size * parseInt(`${catalogg}`)) && 4 >= (parseInt(`${catalogg}`) * penaltyshootnogoalD.size)) && (2487601.0 == catalogg));
          let bgvipxvod8 = String.fromCharCode(119,97,116,99,104,101,115,95,109,95,51,48,0);
         penaltyshootnogoalD[`${clearl}`] = parseInt(`${catalogg}`);
         bgvipxvod8 = `${3 ^ bgvipxvod8.length}`;
      do {
         penaltyshootnogoalD[`${catalogg}`] = networkv.length;
         if (3896058 == penaltyshootnogoalD.size) {
            break;
         }
      } while ((3896058 == penaltyshootnogoalD.size) && (4 <= (penaltyshootnogoalD.size + 5) && (clearl + penaltyshootnogoalD.size) <= 5));
         penaltyshootnogoalD[`${clearl}`] = networkv.length;
      for (let e = 0; e < 1; e++) {
          let awayiconN = new Map([[String.fromCharCode(98,114,111,119,115,101,95,50,95,50,0),693], [String.fromCharCode(109,100,104,100,95,108,95,56,48,0),770]]);
         catalogg /= Math.max(2, parseFloat(`${networkv.length}`));
         awayiconN = new Map([[`${awayiconN.size}`, 1]]);
      }
          let configureR = String.fromCharCode(115,109,107,97,95,49,95,56,50,0);
          let eventR = String.fromCharCode(99,95,51,52,95,110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,0);
          let reactu = true;
         catalogg -= parseFloat(`${eventR.length % (Math.max(1, 8))}`);
         configureR += `${((reactu ? 5 : 4) << (Math.min(configureR.length, 3)))}`;
         eventR += `${(configureR == String.fromCharCode(79,0) ? configureR.length : (reactu ? 4 : 3))}`;
      if (1 < (networkv.length >> (Math.min(Math.abs(5), 5)))) {
         penaltyshootnogoalD = new Map([[`${penaltyshootnogoalD.size}`, penaltyshootnogoalD.size]]);
      }
      do {
          let iconscheduleh = String.fromCharCode(116,95,54,48,95,112,97,115,115,112,104,114,97,115,101,0);
          let lnewinterstitial2 = String.fromCharCode(117,95,50,51,95,103,101,116,119,105,110,116,105,109,101,111,102,100,97,121,0);
          let sigmobE = 0.0;
          let libfbJ = String.fromCharCode(122,95,50,55,95,115,117,99,99,101,115,115,111,114,0);
         clearl |= (libfbJ == String.fromCharCode(101,0) ? libfbJ.length : lnewinterstitial2.length);
         iconscheduleh = `${iconscheduleh.length | parseInt(`${sigmobE}`)}`;
         lnewinterstitial2 = `${iconscheduleh.length >> (Math.min(Math.abs(3), 3))}`;
         sigmobE += 3 >> (Math.min(1, Math.abs(parseInt(`${sigmobE}`))));
         if (clearl == 3580293) {
            break;
         }
      } while ((clearl <= 2) && (clearl == 3580293));
          let viewere = 5.0;
          let libffmpegkity = true;
          let runtimescheduler3 = String.fromCharCode(110,101,97,114,98,121,95,55,95,53,49,0);
         catalogg /= Math.max(parseFloat(`${parseInt(`${catalogg}`)}`), 2);
         viewere /= Math.max(1, ((libffmpegkity ? 4 : 1) << (Math.min(Math.abs(parseInt(`${viewere}`)), 2))));
         libffmpegkity = !libffmpegkity;
         runtimescheduler3 = `${(parseInt(`${viewere}`) / (Math.max(5, (libffmpegkity ? 3 : 1))))}`;
          let securityX = String.fromCharCode(104,97,110,100,108,101,114,115,95,99,95,50,52,0);
         clearl *= (networkv == String.fromCharCode(90,0) ? networkv.length : penaltyshootnogoalD.size);
         securityX = "2";
       let weiboD = 3.0;
       let pushl = 5.0;
      downloadede += `${1 % (Math.max(2, questv))}`;
      break;
   }
   while (!footballB.includes(`${pathL}`)) {
      pathL -= parseFloat(`${2}`);
      break;
   }
      downloadede += `${questv >> (Math.min(1, Math.abs(1)))}`;

    }
  }

   
  calculateTime() {
       let largee = false;
    let handleru = 0.0;
    let defaultlogoW = 0.0;
    let stylesV = [String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,49,95,52,52,0), String.fromCharCode(118,97,114,121,105,110,103,95,105,95,57,57,0)];
    let closel = String.fromCharCode(104,95,51,95,110,117,109,115,0);
    let iconeditZ = 2.0;
    let selectedH = String.fromCharCode(120,95,51,53,95,115,119,105,116,99,104,101,100,0);
    let dependencyH = 5;
    let zoomd = String.fromCharCode(112,114,101,115,101,114,118,101,95,109,95,52,54,0);
    let checkboxG = false;
    let footballfieldm = true;
    let defaultfootballbg8 = [136, 921, 645];
   while ((1 | stylesV.length) == 2 || 3.46 == (defaultlogoW - parseFloat(`${stylesV.length}`))) {
      stylesV = [zoomd.length / 2];
      break;
   }
      handleru /= Math.max(3, parseFloat(`${2 * closel.length}`));
   do {
      iconeditZ -= parseFloat(`${3 * parseInt(`${handleru}`)}`);
      if (iconeditZ == 2683765.0) {
         break;
      }
   } while ((iconeditZ <= 5.12 && (iconeditZ / 5.12) <= 4.94) && (iconeditZ == 2683765.0));
   for (let u = 0; u < 3; u++) {
      largee = (34 > ((largee ? selectedH.length : 34) % (Math.max(selectedH.length, 5))));
   }
   if (dependencyH == defaultlogoW) {
      dependencyH >>= Math.min(4, Math.abs(dependencyH));
   }

    if (this.state.showTimeRemaining) {

       let sell_ = new Map([[String.fromCharCode(118,95,57,48,95,101,109,111,116,105,99,111,110,0),846], [String.fromCharCode(104,95,57,48,95,116,105,109,101,114,115,0),925], [String.fromCharCode(109,97,108,108,111,99,122,95,97,95,51,53,0),828]]);
       let policy7 = new Map([[String.fromCharCode(122,95,55,51,95,114,97,115,116,101,114,0),737], [String.fromCharCode(110,111,97,115,109,95,49,95,50,54,0),44], [String.fromCharCode(98,108,97,99,107,108,105,115,116,95,102,95,57,48,0),752]]);
      if (2 <= (policy7.size * 3) || (policy7.size * 3) <= 1) {
         policy7 = new Map([[`${sell_.size}`, policy7.size]]);
      }
          let bango = 2.0;
         sell_ = new Map([[`${sell_.size}`, sell_.size & 3]]);
         bango *= parseFloat(`${parseInt(`${bango}`) * 3}`);
       let basketballmatchdetailbg4 = 0.0;
       let entryR = 1.0;
      while ((parseFloat(`${policy7.size}`) / (Math.max(9, entryR))) < 3.92) {
         entryR -= parseFloat(`${parseInt(`${basketballmatchdetailbg4}`)}`);
         break;
      }
      for (let m = 0; m < 1; m++) {
          let merger1 = 0;
          let subsk = String.fromCharCode(100,95,52,55,95,114,97,119,118,105,100,101,111,0);
          let about0 = String.fromCharCode(121,95,54,48,95,114,101,106,101,99,116,105,111,110,0);
          let tickedm = 1.0;
         sell_[subsk] = parseInt(`${tickedm}`);
         merger1 %= Math.max((String.fromCharCode(72,0) == about0 ? merger1 : about0.length), 3);
         subsk = `${merger1 ^ about0.length}`;
         tickedm += merger1;
      }
         policy7[`${entryR}`] = policy7.size;
      closel = "1";
   while ((iconeditZ / 3.85) == 5.97) {
       let nendJ = 4;
       let a_titleP = String.fromCharCode(116,101,115,116,110,101,116,115,95,102,95,53,48,0);
          let b_managern = String.fromCharCode(112,95,49,50,95,100,101,113,117,97,110,116,0);
          let description_bvO = false;
         a_titleP += `${a_titleP.length / 1}`;
         b_managern = `${((description_bvO ? 1 : 5))}`;
         description_bvO = !description_bvO || b_managern.length < 52;
       let largesoundP = 5;
       let cornershooty = 0;
          let whiten = String.fromCharCode(117,95,51,95,114,101,115,111,108,118,105,110,103,0);
          let faviconI = 3;
         a_titleP += `${whiten.length >> (Math.min(1, Math.abs(nendJ)))}`;
         whiten += "2";
         faviconI *= faviconI;
      for (let k = 0; k < 1; k++) {
          let reminderM = String.fromCharCode(102,99,117,110,112,117,98,108,105,115,104,95,99,95,55,53,0);
          let halfB = String.fromCharCode(120,95,56,50,0);
          let statisticsinactiveE = String.fromCharCode(106,95,57,53,95,97,108,97,98,97,115,116,101,114,0);
          let iconlogoutx = String.fromCharCode(98,95,49,53,95,122,111,110,101,0);
         largesoundP ^= (String.fromCharCode(53,0) == statisticsinactiveE ? cornershooty : statisticsinactiveE.length);
         reminderM = `${halfB.length + iconlogoutx.length}`;
         halfB = `${iconlogoutx.length + halfB.length}`;
      }
         nendJ &= largesoundP - cornershooty;
      if (3 >= (cornershooty ^ largesoundP)) {
         cornershooty |= largesoundP / (Math.max(cornershooty, 6));
      }
      checkboxG = dependencyH < selectedH.length;
      break;
   }
       let smallbrightnessc = false;
      while (!smallbrightnessc) {
         smallbrightnessc = !smallbrightnessc;
         break;
      }
      for (let s = 0; s < 1; s++) {
          let username5 = String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,95,105,95,51,56,0);
          let downloaded6 = 2;
          let backiconV = String.fromCharCode(114,101,97,100,113,95,53,95,55,50,0);
         smallbrightnessc = downloaded6 >= backiconV.length;
         username5 = `${3 >> (Math.min(2, username5.length))}`;
         downloaded6 &= username5.length + username5.length;
      }
         smallbrightnessc = (smallbrightnessc ? smallbrightnessc : smallbrightnessc);
      selectedH = "3";
   do {
      largee = 37.81 < iconeditZ;
      if (largee ? !largee : largee) {
         break;
      }
   } while ((largee ? !largee : largee) && (iconeditZ >= 1.41));
   if (dependencyH < zoomd.length) {
       let phonej = String.fromCharCode(109,97,110,121,95,104,95,49,56,0);
       let floaterd = 5;
       let dropdown2 = [200, 219, 582];
       let greyb = true;
         greyb = 91 == floaterd || greyb;
         dropdown2.push(1);
      do {
         greyb = phonej == String.fromCharCode(69,0) && 88 == floaterd;
         if (greyb ? !greyb : greyb) {
            break;
         }
      } while (((4 << (Math.min(2, dropdown2.length))) > 5) && (greyb ? !greyb : greyb));
      if (!greyb) {
          let close3 = true;
          let sportS = 4.0;
         dropdown2 = [((close3 ? 3 : 3) / (Math.max(dropdown2.length, 3)))];
         close3 = sportS > 18.2;
         sportS /= Math.max(5, parseFloat(`${2 / (Math.max(4, parseInt(`${sportS}`)))}`));
      }
      if (!greyb) {
         greyb = phonej.length < dropdown2.length;
      }
       let gifgoalbgE = 5.0;
         dropdown2 = [phonej.length];
         floaterd >>= Math.min(4, Math.abs(parseInt(`${gifgoalbgE}`)));
         phonej = `${dropdown2.length >> (Math.min(5, Math.abs(floaterd)))}`;
      while (gifgoalbgE <= 1.64) {
         gifgoalbgE += parseFloat(`${3}`);
         break;
      }
         dropdown2 = [1 * phonej.length];
      for (let o = 0; o < 1; o++) {
         floaterd /= Math.max(parseInt(`${gifgoalbgE}`) ^ 2, 4);
      }
      dependencyH ^= 1;
   }
      const time = this.state.duration - this.state.currentTime;
   for (let r = 0; r < 2; r++) {
      closel = `${parseInt(`${defaultlogoW}`)}`;
   }
   if (largee) {
      largee = handleru == defaultlogoW;
   }
       let thumbnailn = false;
         thumbnailn = (!thumbnailn ? !thumbnailn : !thumbnailn);
         thumbnailn = !thumbnailn;
      if (thumbnailn) {
          let twitterA = String.fromCharCode(98,95,54,51,95,102,105,108,108,105,110,103,0);
          let dropdown1 = String.fromCharCode(97,100,116,115,95,121,95,52,48,0);
         thumbnailn = dropdown1 == String.fromCharCode(115,0);
         twitterA += "3";
         dropdown1 = "2";
      }
      largee = !largee;
      dependencyH &= 3;
      selectedH = `${zoomd.length * 3}`;

      return this.formatTime(time);
      dependencyH &= ((checkboxG ? 3 : 4) & parseInt(`${iconeditZ}`));
      largee = zoomd.startsWith(`${checkboxG}`);
      iconeditZ += parseFloat(`${parseInt(`${handleru}`) % (Math.max(parseInt(`${defaultlogoW}`), 1))}`);
      stylesV = [2 + parseInt(`${handleru}`)];
      checkboxG = 77 <= closel.length;

    }

    return this.formatTime(this.state.currentTime);
   while (!selectedH.startsWith(`${iconeditZ}`)) {
      iconeditZ -= (parseFloat(`${stylesV.length << (Math.min(3, Math.abs((checkboxG ? 2 : 4))))}`));
      break;
   }
   do {
      selectedH = `${2 ^ dependencyH}`;
      if (selectedH.length == 745872) {
         break;
      }
   } while ((checkboxG) && (selectedH.length == 745872));
   while ((defaultlogoW - 5.61) < 4.2) {
       let playercommons = 2.0;
       let reactnativeratingsn = 5.0;
       let qaag2 = String.fromCharCode(105,95,57,48,95,108,111,103,0);
       let notification5 = String.fromCharCode(105,95,54,49,95,108,97,112,112,101,100,0);
       let nativemodulej = false;
       let coree = 4;
          let minimizeo = String.fromCharCode(100,95,55,95,109,111,100,105,116,121,0);
          let checkboxh = String.fromCharCode(113,95,49,51,95,97,110,105,109,0);
          let statisticsinactive8 = [360, 866, 901];
         qaag2 += `${notification5.length}`;
         minimizeo += `${(String.fromCharCode(83,0) == checkboxh ? statisticsinactive8.length : checkboxh.length)}`;
         statisticsinactive8.push((String.fromCharCode(112,0) == minimizeo ? checkboxh.length : minimizeo.length));
         notification5 += `${notification5.length}`;
          let rewardd = true;
         notification5 = "1";
         rewardd = (rewardd ? !rewardd : rewardd);
         reactnativeratingsn -= (parseFloat(`${qaag2 == String.fromCharCode(107,0) ? notification5.length : qaag2.length}`));
      if (notification5.length >= 1) {
          let iconviewergifH = String.fromCharCode(97,114,116,119,111,114,107,95,105,95,53,53,0);
          let episodeM = new Map([[String.fromCharCode(101,116,104,101,114,95,54,95,57,56,0),422], [String.fromCharCode(101,95,49,48,48,95,100,112,97,103,101,0),598]]);
          let applicationw = String.fromCharCode(106,100,99,116,95,107,95,50,53,0);
          let liblogger8 = true;
          let greyarrowupn = false;
         notification5 = `${(iconviewergifH.length - (liblogger8 ? 5 : 2))}`;
         iconviewergifH += `${episodeM.size ^ 1}`;
         episodeM = new Map([[`${episodeM.size}`, 2 - episodeM.size]]);
         applicationw += `${(2 ^ (greyarrowupn ? 3 : 3))}`;
         liblogger8 = String.fromCharCode(84,0) == applicationw && episodeM.size < 50;
         greyarrowupn = applicationw.length <= 82;
      }
         notification5 += `${coree % (Math.max(qaag2.length, 10))}`;
      while (4.91 >= (playercommons * 5.65) || nativemodulej) {
          let splashQ = 3;
          let nendA = 0.0;
          let redirect5 = 5;
          let iconpipexpandA = 4;
         nativemodulej = nendA >= 12.41;
         splashQ <<= Math.min(Math.abs(iconpipexpandA), 5);
         nendA /= Math.max(2, parseFloat(`${redirect5}`));
         break;
      }
      do {
         reactnativeratingsn *= parseFloat(`${qaag2.length}`);
         if (4247924.0 == reactnativeratingsn) {
            break;
         }
      } while ((!notification5.endsWith(`${reactnativeratingsn}`)) && (4247924.0 == reactnativeratingsn));
      while ((5.84 + playercommons) <= 5.4 || (5.84 + playercommons) <= 2.15) {
          let expired3 = new Map([[String.fromCharCode(97,95,53,55,95,102,108,97,116,0),532], [String.fromCharCode(116,95,54,57,95,116,101,115,116,105,109,103,97,114,105,0),687]]);
          let gradleN = 4.0;
          let iconn = new Map([[String.fromCharCode(119,109,97,100,97,116,97,95,53,95,52,52,0),String.fromCharCode(114,101,115,112,111,110,115,101,95,109,95,51,57,0)], [String.fromCharCode(112,95,49,52,95,99,117,116,101,115,116,0),String.fromCharCode(107,95,53,51,95,112,108,117,103,103,101,100,0)], [String.fromCharCode(97,116,99,104,95,121,95,50,48,0),String.fromCharCode(121,95,50,57,95,115,116,105,99,107,101,114,115,0)]]);
          let indicatorV = new Map([[String.fromCharCode(112,95,56,48,95,117,121,118,121,116,111,121,117,118,0),764], [String.fromCharCode(118,95,50,50,95,102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,0),166], [String.fromCharCode(121,95,56,50,95,108,97,117,110,99,104,0),209]]);
          let classesp = String.fromCharCode(102,105,108,116,101,114,115,95,50,95,55,52,0);
         reactnativeratingsn -= parseFloat(`${1 ^ expired3.size}`);
         expired3 = new Map([[`${iconn.size}`, iconn.size]]);
         gradleN -= parseFloat(`${iconn.size}`);
         indicatorV[`${classesp}`] = 3 << (Math.min(5, Math.abs(iconn.size)));
         classesp = `${parseInt(`${gradleN}`)}`;
         break;
      }
       let libfileH = String.fromCharCode(118,99,101,110,99,95,117,95,53,49,0);
       let miniX = String.fromCharCode(108,111,97,100,120,95,118,95,53,51,0);
         notification5 = `${coree}`;
         coree ^= miniX.length << (Math.min(Math.abs(1), 5));
      for (let t = 0; t < 3; t++) {
         playercommons *= parseFloat(`${3}`);
      }
      while (libfileH.length == 4) {
         libfileH += "3";
         break;
      }
      defaultlogoW += parseFloat(`${qaag2.length}`);
      break;
   }
       let regengw = 3;
         regengw %= Math.max(2, regengw);
      do {
         regengw |= regengw ^ regengw;
         if (regengw == 2857238) {
            break;
         }
      } while ((regengw == 2857238) && (2 < (regengw >> (Math.min(1, Math.abs(regengw)))) && 1 < (regengw >> (Math.min(Math.abs(2), 2)))));
         regengw &= regengw;
      checkboxG = zoomd.includes(`${checkboxG}`);
   do {
       let store6 = String.fromCharCode(110,97,108,115,95,111,95,50,48,0);
       let subin5 = String.fromCharCode(112,95,56,53,95,98,101,99,111,109,101,0);
       let templateprocessorK = [752, 842, 475];
      if (store6.length >= 3) {
         store6 += `${store6.length / 2}`;
      }
         store6 = `${store6.length}`;
         subin5 = `${(String.fromCharCode(57,0) == store6 ? subin5.length : store6.length)}`;
         store6 = `${subin5.length}`;
         subin5 += `${templateprocessorK.length % 1}`;
         store6 = `${templateprocessorK.length}`;
       let configK = String.fromCharCode(103,101,110,101,114,97,116,101,100,95,48,95,57,54,0);
       let catalogK = String.fromCharCode(114,95,53,95,108,97,112,112,101,100,0);
      do {
         catalogK += `${subin5.length * 3}`;
         if (String.fromCharCode(113,112,99,0) == catalogK) {
            break;
         }
      } while ((catalogK.startsWith(`${templateprocessorK.length}`)) && (String.fromCharCode(113,112,99,0) == catalogK));
         catalogK += "1";
      checkboxG = largee;
      if (checkboxG ? !checkboxG : checkboxG) {
         break;
      }
   } while (((3.31 + iconeditZ) < 1.62) && (checkboxG ? !checkboxG : checkboxG));

  }

   
  formatTime(time = 0) {
    const symbol = this.state.showRemainingTime ? '-' : '';
    time = Math.min(Math.max(time, 0), this.state.duration);

    const formattedMinutes = Math.floor(time / 60).toFixed(0);
    const formattedSeconds = Math.floor(time % 60).toFixed(0);

    const formatSec =
      formattedSeconds < 10 ? '0' + formattedSeconds : formattedSeconds;

    return `${symbol}${formattedMinutes}:${formatSec}`;
  }

   
  setSeekerPosition(position = 0) {
    let state = this.state;
    position = this.constrainToSeekerMinMax(position);

    state.seekerFillWidth = position;
    state.seekerPosition = position;

    if (!state.seeking) {
      state.seekerOffset = position;
    }

    this.setState(state);
  }

   
  constrainToSeekerMinMax(val = 0) {
    if (val <= 0) {
      return 0;
    } else if (val >= this.player.seekerWidth) {
      return this.player.seekerWidth;
    }
    return val;
  }

   
  calculateSeekerPosition() {
       let componentm = 5.0;
    let libffmpegkitF = new Map([[String.fromCharCode(103,99,109,95,55,95,50,56,0),false ], [String.fromCharCode(115,95,57,50,95,112,111,115,116,102,105,120,0),true ], [String.fromCharCode(121,95,54,52,95,109,115,103,115,109,0),true ]]);
    let carousela = 5.0;
    let notifications = false;
    let smallorangeman2 = 0.0;
    let selected7 = String.fromCharCode(97,116,97,98,97,115,101,95,53,95,49,50,0);
    let iconshare6 = String.fromCharCode(118,97,100,100,113,95,105,95,55,0);
    let benefitJ = String.fromCharCode(100,97,116,101,116,105,109,101,95,104,95,57,56,0);
    let countryk = String.fromCharCode(109,97,110,97,103,101,114,95,114,95,57,56,0);
    let suggestionS = 2.0;
    let lighti = String.fromCharCode(117,95,55,54,95,101,115,115,97,103,101,0);
    let networkh = false;
    let projectr = 5.0;
      libffmpegkitF[`${carousela}`] = (selected7 == String.fromCharCode(85,0) ? selected7.length : parseInt(`${carousela}`));
   while (2 < (1 / (Math.max(4, countryk.length))) && 2.16 < (smallorangeman2 * parseFloat(`${countryk.length}`))) {
      countryk += "3";
      break;
   }
   if (Array.from(libffmpegkitF.keys()).includes(`${smallorangeman2}`)) {
       let combinedw = [617, 180, 554];
          let a_player9 = [133, 711];
          let saveL = 3.0;
          let teamQ = String.fromCharCode(100,116,100,102,95,54,95,50,49,0);
         combinedw.push(2 * a_player9.length);
         a_player9 = [teamQ.length];
         saveL -= (parseFloat(`${teamQ == String.fromCharCode(115,0) ? parseInt(`${saveL}`) : teamQ.length}`));
          let refreshv = [513, 887, 705];
          let gpayp = String.fromCharCode(112,95,52,53,95,117,110,112,114,101,109,117,108,116,105,112,108,121,0);
          let showE = String.fromCharCode(100,95,50,49,95,112,97,114,97,0);
         combinedw.push(refreshv.length);
         refreshv.push(1 >> (Math.min(4, showE.length)));
         gpayp += `${gpayp.length ^ 2}`;
         showE = `${showE.length | 2}`;
         combinedw = [combinedw.length];
      libffmpegkitF = new Map([[`${carousela}`, parseInt(`${carousela}`) & 3]]);
   }
   for (let q = 0; q < 3; q++) {
      countryk += `${parseInt(`${suggestionS}`)}`;
   }
   for (let l = 0; l < 1; l++) {
       let penaltys = 5.0;
       let defaultroombgD = String.fromCharCode(115,101,116,98,105,116,95,107,95,55,51,0);
       let arrowupD = String.fromCharCode(119,115,97,117,100,95,122,95,57,51,0);
       let short_rx1 = String.fromCharCode(97,105,102,102,95,55,95,51,53,0);
         arrowupD += `${arrowupD.length >> (Math.min(Math.abs(1), 4))}`;
      for (let z = 0; z < 3; z++) {
          let stationD = 0.0;
          let reactnavigationN = 3;
          let membershipN = 2.0;
          let feedbackT = 0;
         short_rx1 += "1";
         stationD -= reactnavigationN / (Math.max(feedbackT, 7));
         reactnavigationN |= reactnavigationN;
         membershipN *= feedbackT % (Math.max(2, parseInt(`${membershipN}`)));
      }
      do {
         penaltys *= 1;
         if (penaltys == 4377283.0) {
            break;
         }
      } while (((defaultroombgD.length * penaltys) >= 1.0) && (penaltys == 4377283.0));
         penaltys += short_rx1.length;
      while ((parseInt(`${penaltys}`) * arrowupD.length) == 5 && (arrowupD.length * penaltys) == 3.66) {
         arrowupD = `${defaultroombgD.length - arrowupD.length}`;
         break;
      }
      for (let n = 0; n < 2; n++) {
          let iconlogoutT = new Map([[String.fromCharCode(99,104,97,108,108,101,110,103,101,95,49,95,50,54,0),55], [String.fromCharCode(115,116,105,99,107,101,114,112,97,99,107,95,53,95,51,54,0),666], [String.fromCharCode(115,119,97,98,95,50,95,51,55,0),86]]);
          let libhermesV = String.fromCharCode(114,111,111,109,95,102,95,51,52,0);
         arrowupD += `${defaultroombgD.length ^ parseInt(`${penaltys}`)}`;
         iconlogoutT[`${libhermesV}`] = iconlogoutT.size;
         libhermesV = `${(String.fromCharCode(80,0) == libhermesV ? libhermesV.length : iconlogoutT.size)}`;
      }
       let xnewarchdefaultsG = String.fromCharCode(98,95,49,56,95,115,105,100,101,0);
       let team6 = String.fromCharCode(108,105,110,101,115,95,105,95,57,48,0);
         penaltys -= 3 + xnewarchdefaultsG.length;
         arrowupD = `${defaultroombgD.length - 3}`;
      if (!short_rx1.endsWith(`${penaltys}`)) {
          let gifgoalbgj = String.fromCharCode(102,95,50,50,95,98,108,97,99,107,0);
          let bootc = String.fromCharCode(97,98,108,95,97,95,50,51,0);
          let expandO = false;
          let humidityL = 5;
          let defaultlogoI = 3;
         short_rx1 += `${defaultlogoI << (Math.min(Math.abs(2), 4))}`;
         gifgoalbgj += "1";
         bootc = `${bootc.length + gifgoalbgj.length}`;
         expandO = !expandO;
         humidityL >>= Math.min(1, Math.abs(((expandO ? 2 : 4) * 3)));
         defaultlogoI >>= Math.min(Math.abs((String.fromCharCode(82,0) == gifgoalbgj ? gifgoalbgj.length : humidityL)), 2);
      }
      while (short_rx1.includes(`${penaltys}`)) {
         short_rx1 = `${xnewarchdefaultsG.length ^ team6.length}`;
         break;
      }
          let textlayoutmanagerP = new Map([[String.fromCharCode(112,101,114,99,101,110,116,95,52,95,52,56,0),504], [String.fromCharCode(99,95,54,52,95,121,117,118,121,117,118,0),939]]);
          let lessQ = 2.0;
          let turnP = [170, 574, 398];
         team6 = `${1 ^ short_rx1.length}`;
         textlayoutmanagerP = new Map([[`${turnP.length}`, 1 ^ turnP.length]]);
         lessQ -= parseInt(`${lessQ}`) / (Math.max(turnP.length, 8));
      smallorangeman2 *= parseFloat(`${3}`);
   }
       let greyC = String.fromCharCode(99,116,105,118,105,116,121,95,115,95,49,57,0);
       let long_iM = String.fromCharCode(109,105,110,105,109,105,122,101,95,119,95,53,54,0);
       let playercommonR = true;
      do {
         long_iM += `${long_iM.length}`;
         if (String.fromCharCode(57,118,50,48,100,0) == long_iM) {
            break;
         }
      } while ((String.fromCharCode(57,118,50,48,100,0) == long_iM) && (playercommonR));
      for (let x = 0; x < 3; x++) {
         playercommonR = long_iM.length <= 63;
      }
       let subbasketballplayerP = 0.0;
          let containerz = 2.0;
         long_iM += `${parseInt(`${subbasketballplayerP}`) / 2}`;
         containerz /= Math.max(parseInt(`${containerz}`), 5);
      if (!playercommonR) {
         playercommonR = greyC.length >= 76 && long_iM.length >= 76;
      }
      notifications = long_iM == benefitJ;
   for (let h = 0; h < 3; h++) {
      notifications = 45.68 <= suggestionS && notifications;
   }
      benefitJ = `${parseInt(`${suggestionS}`) & 3}`;
   do {
      lighti = "1";
      if (975000 == lighti.length) {
         break;
      }
   } while ((975000 == lighti.length) && ((suggestionS / 2.47) >= 2.7 && (4 | lighti.length) >= 2));
   if (libffmpegkitF.size == 5) {
      libffmpegkitF = new Map([[`${suggestionS}`, 3 / (Math.max(parseInt(`${suggestionS}`), 6))]]);
   }

    const percent = this.state.currentTime / this.state.duration;
    return this.player.seekerWidth * percent;
      libffmpegkitF = new Map([[`${smallorangeman2}`, parseInt(`${smallorangeman2}`) - selected7.length]]);
      benefitJ = "3";
   if (libffmpegkitF.size == 4) {
      libffmpegkitF = new Map([[selected7, (selected7.length - (notifications ? 1 : 3))]]);
   }
   while (countryk.length <= 4 || 4 <= lighti.length) {
       let sansw = true;
       let sheeto = 3;
       let sinax = true;
       let loadingi = false;
      if (!sansw) {
         sansw = loadingi;
      }
          let teamdetailsbgi = String.fromCharCode(112,95,52,48,95,115,101,116,116,105,109,101,111,117,116,0);
         loadingi = !sinax;
         teamdetailsbgi += `${3 % (Math.max(3, teamdetailsbgi.length))}`;
       let station3 = String.fromCharCode(101,116,104,111,100,95,110,95,49,57,0);
       let iconlogoutJ = String.fromCharCode(116,95,54,50,95,107,105,99,107,101,100,0);
          let emojiY = [String.fromCharCode(108,95,52,57,95,105,110,115,116,114,117,99,116,105,111,110,115,0), String.fromCharCode(118,95,56,54,95,104,101,99,111,0), String.fromCharCode(109,101,97,115,117,114,101,109,101,110,116,115,95,49,95,56,52,0)];
          let episodez = false;
         sheeto += 3;
         emojiY.push(3);
         episodez = emojiY.length <= 68;
      for (let v = 0; v < 1; v++) {
          let sigmobk = 5.0;
          let calendary = new Map([[String.fromCharCode(112,114,111,112,95,49,95,51,54,0),52], [String.fromCharCode(117,95,52,48,95,117,110,99,111,110,115,117,109,101,100,0),570]]);
         sinax = (13 < (iconlogoutJ.length & (sansw ? 13 : iconlogoutJ.length)));
         sigmobk /= Math.max(parseInt(`${sigmobk}`) >> (Math.min(Math.abs(3), 1)), 1);
         calendary = new Map([[`${calendary.size}`, calendary.size]]);
      }
      for (let v = 0; v < 1; v++) {
         sheeto <<= Math.min(station3.length, 5);
      }
         sinax = (sansw ? loadingi : sansw);
      if (!sinax) {
         loadingi = !sinax;
      }
         sheeto >>= Math.min(4, Math.abs(((loadingi ? 2 : 3))));
      if (3 <= (1 >> (Math.min(1, station3.length)))) {
          let ajaxS = false;
         station3 = `${(station3.length & (ajaxS ? 2 : 2))}`;
      }
          let eabafadfadddbafeddddeeefeaafK = String.fromCharCode(117,95,53,49,95,115,111,114,101,99,118,109,115,103,0);
          let turndownu = String.fromCharCode(112,108,97,121,95,99,95,50,0);
          let friendsl = 1.0;
         loadingi = 79 == station3.length;
         eabafadfadddbafeddddeeefeaafK += `${turndownu.length | 2}`;
         turndownu += `${turndownu.length}`;
         friendsl -= 3 << (Math.min(1, eabafadfadddbafeddddeeefeaafK.length));
      for (let w = 0; w < 2; w++) {
         iconlogoutJ += "1";
      }
      countryk = `${libffmpegkitF.size}`;
      break;
   }
   for (let a = 0; a < 3; a++) {
      carousela *= parseFloat(`${1}`);
   }
      libffmpegkitF[`${notifications}`] = (parseInt(`${componentm}`) / (Math.max(5, (notifications ? 1 : 4))));
      countryk += `${benefitJ.length}`;
   for (let p = 0; p < 1; p++) {
       let actionE = 0.0;
       let unread3 = true;
      for (let i = 0; i < 3; i++) {
         unread3 = !unread3;
      }
         actionE /= Math.max(parseFloat(`${parseInt(`${actionE}`) + 3}`), 5);
      while (actionE <= 4.60 || (4.60 + actionE) <= 5.33) {
         actionE *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${actionE}`)), 1))}`);
         break;
      }
         unread3 = !unread3;
      do {
         unread3 = 96.4 > actionE;
         if (unread3 ? !unread3 : unread3) {
            break;
         }
      } while ((!unread3) && (unread3 ? !unread3 : unread3));
      if (1.92 <= actionE || 5.88 <= (1.92 - actionE)) {
         unread3 = actionE <= 33.45 && !unread3;
      }
      iconshare6 += `${lighti.length}`;
   }
      libffmpegkitF = new Map([[`${libffmpegkitF.size}`, libffmpegkitF.size]]);
      libffmpegkitF = new Map([[`${suggestionS}`, benefitJ.length + parseInt(`${suggestionS}`)]]);

  }

   
  calculateTimeFromSeekerPosition() {
       let downK = 3.0;
    let showZ = [70, 598];
    let detailsh = 2.0;
    let rankS = 3.0;
    let tumbnailL = 0;
    let nterstitialv = String.fromCharCode(115,95,51,95,117,98,115,99,114,105,98,101,114,0);
    let iconclose7 = String.fromCharCode(116,105,109,101,115,99,97,108,101,95,107,95,49,48,48,0);
    let referrer2 = new Map([[String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,95,104,95,54,49,0),String.fromCharCode(97,120,112,95,99,95,52,55,0)], [String.fromCharCode(98,115,101,114,118,101,114,95,48,95,56,54,0),String.fromCharCode(115,99,97,109,95,101,95,53,55,0)], [String.fromCharCode(117,95,50,57,95,110,111,115,105,109,100,0),String.fromCharCode(103,95,56,56,95,102,114,97,110,100,0)]]);
      tumbnailL -= parseInt(`${detailsh}`);
   while ((tumbnailL % (Math.max(4, 5))) < 5) {
      tumbnailL += showZ.length - 1;
      break;
   }
      downK /= Math.max(showZ.length & nterstitialv.length, 1);
   for (let c = 0; c < 3; c++) {
       let pressureG = new Map([[String.fromCharCode(99,111,101,102,95,112,95,55,0),String.fromCharCode(118,95,55,54,95,100,114,97,119,101,114,0)], [String.fromCharCode(108,95,55,54,95,109,105,110,105,109,105,122,101,100,0),String.fromCharCode(100,114,105,118,101,114,95,106,95,57,50,0)], [String.fromCharCode(115,109,106,112,101,103,95,57,95,52,51,0),String.fromCharCode(114,101,99,116,97,110,103,117,108,97,114,95,51,95,55,57,0)]]);
       let assistI = 0;
       let predictionarrowo = 5;
      for (let v = 0; v < 1; v++) {
         pressureG = new Map([[`${predictionarrowo}`, 2]]);
      }
      do {
          let sentryJ = [387, 942];
         assistI &= 2;
         sentryJ = [3 + sentryJ.length];
         if (assistI == 3514088) {
            break;
         }
      } while ((assistI == 3514088) && (4 < (4 << (Math.min(3, Math.abs(assistI)))) || 4 < (assistI << (Math.min(Math.abs(pressureG.size), 2)))));
          let componentregistrye = 4.0;
          let auto_1qO = 3;
         predictionarrowo *= assistI;
         componentregistrye -= auto_1qO;
         auto_1qO >>= Math.min(Math.abs(1 - auto_1qO), 4);
      for (let g = 0; g < 3; g++) {
         assistI %= Math.max(4, assistI & pressureG.size);
      }
          let iconqqE = String.fromCharCode(115,97,118,101,105,95,115,95,57,55,0);
          let playlistf = new Map([[String.fromCharCode(97,95,49,50,95,113,112,101,103,0),150], [String.fromCharCode(105,115,115,101,116,117,103,105,100,95,101,95,56,54,0),429]]);
          let countdown9 = 5;
         assistI <<= Math.min(1, iconqqE.length);
         iconqqE = `${playlistf.size}`;
         playlistf[`${countdown9}`] = 1 + countdown9;
         predictionarrowo <<= Math.min(Math.abs(2), 3);
      for (let h = 0; h < 1; h++) {
         assistI %= Math.max(1, 3);
      }
      while (1 == assistI) {
          let updatesX = String.fromCharCode(110,112,97,116,99,104,101,115,95,122,95,55,54,0);
          let customr = 1;
          let profileactivec = 4.0;
          let buttonc = String.fromCharCode(100,111,119,110,115,97,109,112,108,101,100,95,50,95,54,54,0);
         predictionarrowo -= 2 * customr;
         updatesX = `${updatesX.length}`;
         customr &= 2 - parseInt(`${profileactivec}`);
         profileactivec += (String.fromCharCode(82,0) == updatesX ? updatesX.length : parseInt(`${profileactivec}`));
         buttonc += `${(buttonc == String.fromCharCode(69,0) ? buttonc.length : parseInt(`${profileactivec}`))}`;
         break;
      }
      do {
         predictionarrowo &= predictionarrowo;
         if (predictionarrowo == 4405024) {
            break;
         }
      } while ((!Array.from(pressureG.values()).includes(predictionarrowo)) && (predictionarrowo == 4405024));
      downK /= Math.max(5, showZ.length % 3);
   }
       let frame_13E = true;
       let regeng0 = String.fromCharCode(112,95,52,95,102,97,110,116,111,109,0);
      do {
          let iconq = false;
          let readT = 2.0;
          let zhengpian4 = false;
          let nodej = 1;
          let gesture7 = 5.0;
         frame_13E = zhengpian4;
         iconq = 92 >= nodej;
         readT *= parseFloat(`${3}`);
         nodej ^= parseInt(`${readT}`) & 1;
         gesture7 /= Math.max(3, parseFloat(`${1 >> (Math.min(Math.abs(nodej), 4))}`));
         if (frame_13E ? !frame_13E : frame_13E) {
            break;
         }
      } while ((frame_13E ? !frame_13E : frame_13E) && (!frame_13E));
      do {
         regeng0 += `${((frame_13E ? 2 : 4) / 1)}`;
         if (regeng0.length == 44519) {
            break;
         }
      } while ((regeng0.length == 44519) && (regeng0.length < 2));
          let page7 = 0;
         frame_13E = !frame_13E;
         page7 &= page7;
          let favicon0 = 5.0;
         regeng0 += `${((frame_13E ? 3 : 4))}`;
         favicon0 *= parseFloat(`${parseInt(`${favicon0}`) + 3}`);
       let gpayB = 0.0;
          let libflipperR = String.fromCharCode(121,95,54,56,95,112,114,111,116,111,99,111,108,115,0);
         frame_13E = gpayB == 28.55;
         libflipperR += `${(String.fromCharCode(87,0) == libflipperR ? libflipperR.length : libflipperR.length)}`;
      showZ = [regeng0.length];
      showZ.push(parseInt(`${downK}`));
      rankS *= parseInt(`${downK}`);

    const percent = this.state.seekerPosition / this.player.seekerWidth;
    return this.state.duration * percent;
   do {
       let condensedY = 5;
       let backA = new Map([[String.fromCharCode(99,97,114,100,97,110,111,95,120,95,57,48,0),627], [String.fromCharCode(108,105,98,111,112,117,115,95,112,95,53,52,0),417]]);
       let libreactnativeblobD = true;
       let iconsaveimage6 = String.fromCharCode(103,101,116,97,115,115,111,99,105,100,95,49,95,49,52,0);
          let k_titleb = 1.0;
         iconsaveimage6 += `${(condensedY + (libreactnativeblobD ? 1 : 4))}`;
         k_titleb += parseInt(`${k_titleb}`);
         condensedY *= condensedY >> (Math.min(1, Math.abs(3)));
         libreactnativeblobD = 100 >= iconsaveimage6.length || 100 >= backA.size;
          let main_zd = false;
         iconsaveimage6 += `${((main_zd ? 4 : 5))}`;
          let themeB = 2.0;
          let moren = 2;
         condensedY <<= Math.min(Math.abs(((libreactnativeblobD ? 5 : 4) / 2)), 3);
         themeB *= parseFloat(`${parseInt(`${themeB}`)}`);
         moren += parseInt(`${themeB}`) - moren;
      while (backA.size <= 5) {
         backA[`${condensedY}`] = 1 % (Math.max(8, condensedY));
         break;
      }
      if (backA[`${condensedY}`] != null) {
         backA[`${condensedY}`] = condensedY;
      }
         iconsaveimage6 += `${(2 & (libreactnativeblobD ? 4 : 3))}`;
       let iconwatchW = true;
       let bridgeu = false;
      if (iconwatchW && !libreactnativeblobD) {
         libreactnativeblobD = iconsaveimage6.includes(`${iconwatchW}`);
      }
      for (let o = 0; o < 3; o++) {
          let basketballtrophyH = [String.fromCharCode(110,95,49,48,48,95,101,120,116,101,110,100,101,101,0), String.fromCharCode(109,95,50,95,111,118,101,114,108,97,112,115,0), String.fromCharCode(112,114,101,102,101,114,101,110,99,101,115,95,52,95,53,53,0)];
          let mbjscommonx = new Map([[String.fromCharCode(105,110,110,100,101,114,95,54,95,49,50,0),969], [String.fromCharCode(120,95,49,53,95,100,105,97,109,101,116,101,114,0),863]]);
          let chinan = String.fromCharCode(99,111,117,110,116,101,114,95,119,95,55,53,0);
          let libflipperO = false;
          let awayd = 5;
         backA = new Map([[`${libreactnativeblobD}`, 2]]);
         basketballtrophyH = [basketballtrophyH.length];
         mbjscommonx[chinan] = basketballtrophyH.length / 2;
         chinan = `${awayd}`;
         libflipperO = mbjscommonx.size >= 9;
         awayd /= Math.max(1, 1);
      }
         bridgeu = 16 == backA.size;
      rankS += parseInt(`${rankS}`) << (Math.min(3, Math.abs(tumbnailL)));
      if (rankS == 4864501.0) {
         break;
      }
   } while ((rankS == 4864501.0) && ((tumbnailL / (Math.max(1, 3))) > 5 && (parseInt(`${rankS}`) * tumbnailL) > 1));
   for (let s = 0; s < 2; s++) {
      nterstitialv = `${parseInt(`${downK}`) / (Math.max(iconclose7.length, 1))}`;
   }
   do {
      detailsh -= iconclose7.length * 2;
      if (detailsh == 2243907.0) {
         break;
      }
   } while ((3 >= (5 / (Math.max(3, showZ.length))) && (1.38 - detailsh) >= 4.20) && (detailsh == 2243907.0));
   do {
      detailsh -= 1;
      if (detailsh == 2071673.0) {
         break;
      }
   } while ((detailsh == 2071673.0) && ((parseInt(`${detailsh}`) - tumbnailL) == 3 && (4.25 - detailsh) == 3.71));
      rankS += (String.fromCharCode(49,0) == nterstitialv ? nterstitialv.length : parseInt(`${rankS}`));
   for (let x = 0; x < 2; x++) {
      iconclose7 += `${parseInt(`${detailsh}`) ^ 3}`;
   }
   do {
       let scorepopsounda = String.fromCharCode(107,95,50,54,95,108,111,110,103,105,116,117,100,101,0);
       let successD = [41, 941, 239];
      while ((successD.length & scorepopsounda.length) <= 1 && 1 <= (scorepopsounda.length & successD.length)) {
          let grayX = String.fromCharCode(97,95,50,53,95,98,117,105,108,100,115,0);
         successD.push(scorepopsounda.length);
         grayX = `${(String.fromCharCode(57,0) == grayX ? grayX.length : grayX.length)}`;
         break;
      }
      for (let o = 0; o < 2; o++) {
         scorepopsounda = `${3 * successD.length}`;
      }
      if (scorepopsounda.startsWith(`${successD.length}`)) {
         scorepopsounda = `${successD.length >> (Math.min(Math.abs(3), 4))}`;
      }
      while (2 < scorepopsounda.length) {
          let canvasI = 3;
         successD = [3 >> (Math.min(Math.abs(canvasI), 2))];
         break;
      }
      if ((scorepopsounda.length >> (Math.min(Math.abs(3), 3))) <= 1 && 4 <= (successD.length >> (Math.min(Math.abs(3), 1)))) {
         successD = [1];
      }
          let privatechatbgF = String.fromCharCode(115,117,98,98,108,111,99,107,95,102,95,52,51,0);
          let episodeh = String.fromCharCode(115,105,110,103,108,101,95,52,95,52,51,0);
         scorepopsounda += `${privatechatbgF.length}`;
         privatechatbgF = `${episodeh.length - episodeh.length}`;
      showZ.push(3);
      if (showZ.length == 4368657) {
         break;
      }
   } while ((1 <= (showZ.length << (Math.min(Math.abs(2), 2))) || (nterstitialv.length << (Math.min(Math.abs(2), 1))) <= 5) && (showZ.length == 4368657));

  }

   
  seekTo(time = 0) {
    let state = this.state;
    state.currentTime = time;
    this.player.ref.seek(time);
    this.setState(state);
  }

   
  setVolumePosition(position = 0) {
    let state = this.state;
    position = this.constrainToVolumeMinMax(position);
    state.volumePosition = position + this.player.iconOffset;
    state.volumeFillWidth = position;

    state.volumeTrackWidth = this.player.volumeWidth - state.volumeFillWidth;

    if (state.volumeFillWidth < 0) {
      state.volumeFillWidth = 0;
    }

    if (state.volumeTrackWidth > 150) {
      state.volumeTrackWidth = 150;
    }

    this.setState(state);
  }

   
  constrainToVolumeMinMax(val = 0) {
    if (val <= 0) {
      return 0;
    } else if (val >= this.player.volumeWidth + 9) {
      return this.player.volumeWidth + 9;
    }
    return val;
  }

   
  calculateVolumeFromVolumePosition() {
       let rewardvideoJ = [String.fromCharCode(104,100,108,114,95,50,95,54,48,0), String.fromCharCode(112,95,49,51,95,112,104,121,115,105,99,97,108,0), String.fromCharCode(114,115,112,95,108,95,52,52,0)];
    let iconcalendarR = String.fromCharCode(105,95,56,56,95,110,97,110,112,97,0);
    let hometeamfieldI = 5.0;
    let default_6a = new Map([[String.fromCharCode(100,101,97,108,108,111,99,97,116,101,100,95,102,95,50,52,0),261], [String.fromCharCode(116,104,111,117,103,104,95,104,95,49,57,0),398]]);
    let mbridgeP = String.fromCharCode(107,95,51,52,95,104,111,114,105,122,111,110,116,97,108,108,121,0);
    let nativeF = String.fromCharCode(106,95,49,52,95,108,97,116,0);
    let iconstarJ = 0.0;
    let canvash = [132, 852];
    let bodan9 = new Map([[String.fromCharCode(115,104,111,116,95,52,95,57,54,0),false ], [String.fromCharCode(101,95,54,56,95,105,110,116,101,114,112,111,108,97,116,101,102,0),false ], [String.fromCharCode(114,95,56,48,95,100,97,117,98,101,99,104,105,101,115,0),true ]]);
    let ajaxm = false;
    let countryj = String.fromCharCode(118,109,97,102,109,111,116,105,111,110,95,52,95,52,53,0);
    let homeplayerC = 3.0;
    let projectF = 3.0;
    let predictionbannersharedl = 2;
    let sellmathbackground4 = [571, 275];
       let headerq = true;
       let iconpipexpandp = String.fromCharCode(97,95,52,57,95,114,116,109,112,100,104,0);
      while (!headerq) {
          let albumk = 1.0;
          let leaguel = 4;
          let greytickt = 0;
         headerq = (leaguel | greytickt) <= 78;
         albumk *= parseInt(`${albumk}`);
         leaguel >>= Math.min(2, Math.abs(3 * parseInt(`${albumk}`)));
         break;
      }
      while (iconpipexpandp.length == 2) {
          let combinedJ = String.fromCharCode(99,105,114,99,108,101,115,95,114,95,50,51,0);
          let logouser9 = String.fromCharCode(115,121,109,98,111,108,95,109,95,50,56,0);
          let layout6 = true;
          let alertK = String.fromCharCode(97,95,50,51,95,105,100,99,116,0);
         iconpipexpandp += `${logouser9.length ^ 1}`;
         combinedJ = "1";
         logouser9 = `${alertK.length * combinedJ.length}`;
         layout6 = (3 < (alertK.length & (layout6 ? 3 : alertK.length)));
         break;
      }
      if (iconpipexpandp.length == 2) {
         headerq = !headerq && iconpipexpandp.length > 21;
      }
         iconpipexpandp += `${iconpipexpandp.length % 2}`;
       let imagemanagery = true;
       let fastforward5 = false;
       let iconsetting9 = false;
      mbridgeP += `${(String.fromCharCode(68,0) == nativeF ? nativeF.length : parseInt(`${iconstarJ}`))}`;
      canvash.push(iconcalendarR.length);
   do {
      default_6a = new Map([[`${bodan9.size}`, bodan9.size]]);
      if (2523271 == default_6a.size) {
         break;
      }
   } while ((mbridgeP.startsWith(`${default_6a.size}`)) && (2523271 == default_6a.size));
      nativeF = `${mbridgeP.length}`;
   do {
      default_6a[`${iconstarJ}`] = parseInt(`${iconstarJ}`);
      if (251997 == default_6a.size) {
         break;
      }
   } while (((default_6a.size >> (Math.min(Math.abs(1), 1))) < 5 || (mbridgeP.length >> (Math.min(3, Math.abs(default_6a.size)))) < 1) && (251997 == default_6a.size));
   do {
      canvash.push((String.fromCharCode(84,0) == iconcalendarR ? default_6a.size : iconcalendarR.length));
      if (canvash.length == 983973) {
         break;
      }
   } while ((4 == (4 | canvash.length) && (mbridgeP.length | canvash.length) == 4) && (canvash.length == 983973));
       let floatingA = 4.0;
         floatingA -= parseFloat(`${parseInt(`${floatingA}`)}`);
          let placeholderv = 3;
          let release_bV = 0.0;
          let libjsinspector4 = 4;
         floatingA += parseFloat(`${libjsinspector4}`);
         placeholderv <<= Math.min(1, Math.abs(parseInt(`${release_bV}`) ^ 1));
         release_bV /= Math.max(1, parseFloat(`${placeholderv}`));
         libjsinspector4 <<= Math.min(4, Math.abs(1));
       let subsS = false;
      rewardvideoJ.push(3);
   for (let z = 0; z < 3; z++) {
      bodan9[`${iconstarJ}`] = canvash.length % 2;
   }
   for (let l = 0; l < 3; l++) {
       let owngoaln = String.fromCharCode(110,95,49,55,95,99,114,108,105,115,115,117,101,114,0);
       let reactnativejsr = String.fromCharCode(110,95,50,95,97,110,97,103,108,121,112,104,0);
         owngoaln += `${owngoaln.length}`;
      while (owngoaln != String.fromCharCode(50,0)) {
         reactnativejsr += `${owngoaln.length % 2}`;
         break;
      }
      if (owngoaln == reactnativejsr) {
         reactnativejsr = `${reactnativejsr.length}`;
      }
       let native1 = 0.0;
      while (!owngoaln.endsWith(`${reactnativejsr.length}`)) {
         reactnativejsr = `${1 / (Math.max(8, reactnativejsr.length))}`;
         break;
      }
         owngoaln = `${owngoaln.length * reactnativejsr.length}`;
      ajaxm = String.fromCharCode(113,0) == mbridgeP;
   }
   if (5.12 > homeplayerC) {
       let eighteenJ = String.fromCharCode(103,95,49,57,95,109,111,117,115,101,0);
       let anythinkh = String.fromCharCode(106,95,51,95,109,117,116,101,0);
       let guidea = String.fromCharCode(111,112,99,111,100,101,115,95,116,95,49,49,0);
       let twitterw = String.fromCharCode(108,105,115,116,110,101,114,115,95,115,95,57,51,0);
       let sportv = String.fromCharCode(111,95,57,55,95,115,105,102,102,0);
      for (let a = 0; a < 3; a++) {
         anythinkh = `${guidea.length / (Math.max(twitterw.length, 1))}`;
      }
          let feedbackR = 5.0;
         anythinkh += `${(String.fromCharCode(74,0) == guidea ? parseInt(`${feedbackR}`) : guidea.length)}`;
          let inouttargetredQ = String.fromCharCode(116,101,120,116,117,114,101,100,95,57,95,56,56,0);
         twitterw += "3";
         inouttargetredQ = `${inouttargetredQ.length - 2}`;
         guidea += `${eighteenJ.length}`;
      if (sportv.length >= 2 && twitterw == String.fromCharCode(97,0)) {
          let policyd = 2.0;
          let hoverl = 5.0;
         sportv += `${parseInt(`${policyd}`) | 3}`;
         policyd += parseFloat(`${parseInt(`${hoverl}`)}`);
      }
          let cnews9 = new Map([[String.fromCharCode(105,100,102,97,95,118,95,54,54,0),String.fromCharCode(105,95,52,52,95,99,114,101,97,116,111,114,0)], [String.fromCharCode(100,101,114,101,102,95,108,95,53,49,0),String.fromCharCode(109,101,97,115,117,114,101,114,95,108,95,57,0)]]);
          let informationm = false;
         anythinkh += `${twitterw.length >> (Math.min(5, Math.abs(cnews9.size)))}`;
         cnews9[`${informationm}`] = ((informationm ? 4 : 4));
       let smallorangemanM = 3.0;
       let bootV = 5.0;
         twitterw = `${parseInt(`${bootV}`) - 2}`;
       let showlessm = String.fromCharCode(115,95,56,56,95,99,105,114,99,117,108,97,114,0);
      for (let t = 0; t < 1; t++) {
         smallorangemanM /= Math.max(3, eighteenJ.length * 3);
      }
          let projectO = 2;
          let yellowcirclebgD = 2;
          let static__g5 = true;
         showlessm = `${parseInt(`${bootV}`) & projectO}`;
         projectO /= Math.max(4, 1);
         yellowcirclebgD -= yellowcirclebgD;
         static__g5 = !static__g5;
         anythinkh = `${showlessm.length}`;
      while (sportv.length <= 4) {
         bootV /= Math.max(5, eighteenJ.length * 1);
         break;
      }
      for (let q = 0; q < 2; q++) {
          let typesn = String.fromCharCode(113,95,49,95,112,111,108,105,99,105,101,115,0);
          let libfbjnie = 4.0;
          let modeQ = String.fromCharCode(109,95,53,52,95,108,111,99,97,108,105,122,97,98,108,101,0);
          let inactiveT = true;
          let unselectedI = 3;
         twitterw = `${(anythinkh == String.fromCharCode(55,0) ? anythinkh.length : modeQ.length)}`;
         typesn += `${unselectedI << (Math.min(2, Math.abs(3)))}`;
         libfbjnie *= parseFloat(`${1 - parseInt(`${libfbjnie}`)}`);
         modeQ = `${typesn.length}`;
         inactiveT = !inactiveT;
         unselectedI >>= Math.min(4, Math.abs(unselectedI + 2));
      }
         anythinkh += "3";
      iconstarJ *= parseFloat(`${3 ^ eighteenJ.length}`);
   }
      nativeF += "1";
   while (4 >= (parseInt(`${iconstarJ}`) + mbridgeP.length) && 4 >= (mbridgeP.length + parseInt(`${iconstarJ}`))) {
      mbridgeP = "1";
      break;
   }
       let filed9 = String.fromCharCode(114,95,49,49,95,103,101,116,0);
       let kuaishouq = String.fromCharCode(98,95,54,51,0);
       let greytickp = 0.0;
         kuaishouq += `${(String.fromCharCode(67,0) == kuaishouq ? kuaishouq.length : parseInt(`${greytickp}`))}`;
          let gesturec = String.fromCharCode(111,112,116,105,111,110,97,108,115,95,115,95,57,54,0);
          let album7 = 2;
         greytickp /= Math.max((parseFloat(`${filed9 == String.fromCharCode(54,0) ? filed9.length : album7}`)), 3);
         gesturec = `${(gesturec == String.fromCharCode(111,0) ? gesturec.length : gesturec.length)}`;
         album7 += gesturec.length + 2;
         kuaishouq = `${kuaishouq.length}`;
       let historym = 3.0;
      do {
         filed9 = `${2 * parseInt(`${greytickp}`)}`;
         if (filed9.length == 2481538) {
            break;
         }
      } while ((filed9.length == 2481538) && (filed9.length < 5));
         filed9 = `${(kuaishouq == String.fromCharCode(85,0) ? kuaishouq.length : parseInt(`${greytickp}`))}`;
      do {
         filed9 += `${(filed9 == String.fromCharCode(100,0) ? filed9.length : parseInt(`${historym}`))}`;
         if (filed9 == String.fromCharCode(99,113,54,107,109,113,104,117,0)) {
            break;
         }
      } while (((greytickp * 2.70) <= 3.59) && (filed9 == String.fromCharCode(99,113,54,107,109,113,104,117,0)));
         historym += filed9.length >> (Math.min(Math.abs(1), 5));
      while (!kuaishouq.endsWith(filed9)) {
          let analyticsY = [396, 137, 596];
         filed9 += `${3 | kuaishouq.length}`;
         analyticsY.push(analyticsY.length);
         break;
      }
      countryj = `${(kuaishouq == String.fromCharCode(102,0) ? kuaishouq.length : mbridgeP.length)}`;
      nativeF += `${bodan9.size}`;
      iconstarJ /= Math.max(2, parseFloat(`${parseInt(`${iconstarJ}`) / (Math.max(countryj.length, 4))}`));

    return this.state.volumePosition / this.player.volumeWidth;
       let libbufferW = 0.0;
       let iconfeedbacky = String.fromCharCode(101,110,99,114,121,112,116,95,98,95,50,51,0);
       let roundv = false;
      while (!iconfeedbacky.includes(`${libbufferW}`)) {
          let fullj = [117, 995];
          let moonz = String.fromCharCode(114,95,56,55,95,99,111,111,114,100,115,0);
          let iconviewergifn = String.fromCharCode(99,95,52,51,95,100,101,102,101,114,114,101,100,0);
          let inouttargetredR = String.fromCharCode(108,95,53,56,95,104,117,110,103,0);
         libbufferW *= inouttargetredR.length;
         fullj = [3];
         moonz = `${3 / (Math.max(9, moonz.length))}`;
         iconviewergifn = "1";
         inouttargetredR = "2";
         break;
      }
      do {
         iconfeedbacky += `${parseInt(`${libbufferW}`)}`;
         if (iconfeedbacky.length == 2863857) {
            break;
         }
      } while (((libbufferW - 3.100) >= 5.66) && (iconfeedbacky.length == 2863857));
         iconfeedbacky += `${2 + parseInt(`${libbufferW}`)}`;
          let whiteanimationliveU = new Map([[String.fromCharCode(99,95,52,50,95,99,108,97,117,115,101,115,0),761], [String.fromCharCode(113,95,52,48,95,105,110,115,116,97,108,108,115,0),740]]);
          let promotion5 = 4.0;
          let bellk = String.fromCharCode(97,112,109,116,101,115,116,95,98,95,56,57,0);
         iconfeedbacky += `${2 << (Math.min(2, bellk.length))}`;
         whiteanimationliveU[`${promotion5}`] = whiteanimationliveU.size & parseInt(`${promotion5}`);
         bellk = `${parseInt(`${promotion5}`) / (Math.max(3, 3))}`;
          let filedy = String.fromCharCode(106,95,57,54,95,105,110,116,102,108,111,97,116,0);
         libbufferW -= 1;
         filedy += `${filedy.length}`;
          let stylex = String.fromCharCode(109,97,110,105,112,117,108,97,116,101,95,100,95,57,49,0);
          let bgvipxvodm = 5.0;
          let temperaturen = true;
         iconfeedbacky = `${((roundv ? 3 : 5))}`;
         stylex += `${1 * parseInt(`${bgvipxvodm}`)}`;
         bgvipxvodm -= ((temperaturen ? 5 : 3) + 2);
         temperaturen = temperaturen || 5.91 >= bgvipxvodm;
      while (iconfeedbacky.endsWith(`${libbufferW}`)) {
          let notificationfillemptyn = 3;
          let sellC = [191, 740];
         libbufferW *= notificationfillemptyn & sellC.length;
         break;
      }
         iconfeedbacky += `${(parseInt(`${libbufferW}`) + (roundv ? 4 : 5))}`;
      while (iconfeedbacky.length <= 3) {
         libbufferW *= 2;
         break;
      }
      ajaxm = 63 < rewardvideoJ.length && iconfeedbacky == String.fromCharCode(57,0);
       let suggestionq = String.fromCharCode(101,120,116,114,101,109,101,95,112,95,53,48,0);
      for (let f = 0; f < 3; f++) {
         suggestionq = `${3 >> (Math.min(4, suggestionq.length))}`;
      }
      if (suggestionq == suggestionq) {
         suggestionq += `${suggestionq.length * suggestionq.length}`;
      }
         suggestionq += `${suggestionq.length * suggestionq.length}`;
      hometeamfieldI -= rewardvideoJ.length;
      countryj += `${predictionbannersharedl % (Math.max(1, countryj.length))}`;
   for (let w = 0; w < 2; w++) {
      homeplayerC -= parseInt(`${homeplayerC}`) * parseInt(`${projectF}`);
   }
      canvash.push(2 >> (Math.min(2, canvash.length)));
      hometeamfieldI -= canvash.length;
   do {
      canvash = [default_6a.size];
      if (canvash.length == 3894853) {
         break;
      }
   } while (((iconstarJ * 4.64) < 5.26 || 4.64 < (iconstarJ * parseFloat(`${canvash.length}`))) && (canvash.length == 3894853));
      iconcalendarR = `${predictionbannersharedl}`;
   if ((predictionbannersharedl | 4) <= 4 && ajaxm) {
      predictionbannersharedl *= countryj.length * canvash.length;
   }
       let ying2 = [805, 605, 617];
       let arrowM = [124, 342, 535];
         arrowM.push(3);
         arrowM.push(ying2.length);
         ying2 = [ying2.length];
          let megaphoneN = 1;
          let iconmorex = 0;
         arrowM.push(1);
         megaphoneN %= Math.max(4, megaphoneN ^ 1);
         iconmorex &= 3;
         arrowM = [1 << (Math.min(1, ying2.length))];
         ying2 = [ying2.length * 2];
      countryj = `${parseInt(`${projectF}`)}`;
   while (2.70 >= (4.48 - hometeamfieldI) && (hometeamfieldI + 4.48) >= 2.63) {
       let circle_ = true;
         circle_ = !circle_;
      for (let t = 0; t < 2; t++) {
         circle_ = (!circle_ ? !circle_ : !circle_);
      }
      for (let c = 0; c < 2; c++) {
         circle_ = (!circle_ ? circle_ : !circle_);
      }
      hometeamfieldI -= 2 & countryj.length;
      break;
   }
   while (mbridgeP == String.fromCharCode(49,0) || iconcalendarR == String.fromCharCode(105,0)) {
      iconcalendarR = `${bodan9.size}`;
      break;
   }
   do {
       let defaultplayerimge = true;
      if (defaultplayerimge || !defaultplayerimge) {
         defaultplayerimge = (defaultplayerimge ? !defaultplayerimge : !defaultplayerimge);
      }
         defaultplayerimge = !defaultplayerimge;
      if (!defaultplayerimge && defaultplayerimge) {
         defaultplayerimge = !defaultplayerimge;
      }
      canvash = [mbridgeP.length];
      if (canvash.length == 775927) {
         break;
      }
   } while ((canvash.length < default_6a.size) && (canvash.length == 775927));
       let awayB = String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,95,120,95,54,55,0);
       let predictionwinV = 1;
       let largeS = String.fromCharCode(114,101,103,101,116,95,48,95,51,53,0);
         largeS = `${awayB.length << (Math.min(Math.abs(1), 5))}`;
      do {
         largeS += `${3 >> (Math.min(3, awayB.length))}`;
         if (largeS.length == 1377795) {
            break;
         }
      } while ((largeS.length <= 2) && (largeS.length == 1377795));
         predictionwinV += awayB.length << (Math.min(Math.abs(2), 5));
      if ((5 + awayB.length) >= 1 || (awayB.length + predictionwinV) >= 5) {
         predictionwinV *= 2;
      }
      while (1 > awayB.length) {
         awayB += `${awayB.length}`;
         break;
      }
      while (predictionwinV == 4) {
         predictionwinV -= awayB.length;
         break;
      }
         awayB += `${(awayB == String.fromCharCode(102,0) ? awayB.length : predictionwinV)}`;
      while (largeS.length >= predictionwinV) {
         largeS = `${awayB.length}`;
         break;
      }
      for (let m = 0; m < 2; m++) {
          let theme8 = new Map([[String.fromCharCode(116,95,50,95,99,111,114,101,0),894], [String.fromCharCode(99,97,114,101,116,95,49,95,57,55,0),303]]);
          let catagory9 = 4.0;
         awayB += "2";
         theme8 = new Map([[`${theme8.size}`, 1]]);
         catagory9 += parseFloat(`${2 ^ theme8.size}`);
      }
      nativeF = `${bodan9.size}`;
      projectF /= Math.max(5, mbridgeP.length % 2);

  }

   
  calculateVolumePositionFromVolume() {
       let codes = true;
    let iconnewsshareq = [859, 684, 259];
    let iconnewsshare6 = 3.0;
    let alertr = 1.0;
    let gradle4 = [767, 414, 237];
    let profileactiveO = [121, 901, 878];
    let filterv = 2;
    let imagenetworkerrY = 2.0;
    let refreshG = [910, 779];
    let foregroundY = false;
    let grayC = 3.0;
    let tempnodatagifc = String.fromCharCode(102,95,54,57,95,102,114,111,110,116,115,105,100,101,0);
    let fileZ = 3.0;
    let sigmobm = 0.0;
    let reactnativejsW = 1;
      profileactiveO = [iconnewsshareq.length % (Math.max(3, filterv))];
      foregroundY = 16.41 == imagenetworkerrY;
      alertr /= Math.max(parseFloat(`${1}`), 4);
      iconnewsshare6 += parseInt(`${imagenetworkerrY}`) / 2;
       let cornern = true;
       let renewG = new Map([[String.fromCharCode(114,95,53,55,95,99,111,110,116,105,110,117,97,108,0),388], [String.fromCharCode(110,95,57,56,95,119,114,105,116,97,98,108,101,0),57]]);
      do {
          let smallm = 0.0;
          let gmailM = [630, 187];
          let statisticsg = String.fromCharCode(114,101,118,111,107,105,110,103,95,117,95,48,0);
          let downloadeds = String.fromCharCode(116,98,108,104,100,114,95,117,95,51,57,0);
         renewG[`${smallm}`] = parseInt(`${smallm}`);
         gmailM = [1 >> (Math.min(5, downloadeds.length))];
         statisticsg = `${gmailM.length % (Math.max(1, 7))}`;
         downloadeds = `${gmailM.length}`;
         if (4276874 == renewG.size) {
            break;
         }
      } while ((renewG.size < 5 && 3 < (5 & renewG.size)) && (4276874 == renewG.size));
      if (!cornern) {
          let router3 = [32, 810, 738];
          let modalA = 1.0;
         cornern = 4.62 == modalA;
         router3.push(router3.length / (Math.max(router3.length, 5)));
         modalA *= router3.length % (Math.max(6, router3.length));
      }
         cornern = (9 < ((!cornern ? 9 : renewG.size) ^ renewG.size));
       let animationsa = [String.fromCharCode(122,95,53,56,95,121,117,118,112,108,0), String.fromCharCode(104,95,55,55,95,114,101,99,101,110,116,108,121,0), String.fromCharCode(114,101,113,117,115,116,101,114,95,57,95,54,48,0)];
         cornern = animationsa.length >= 26;
         animationsa.push((renewG.size << (Math.min(3, Math.abs((cornern ? 3 : 2))))));
      alertr /= Math.max(3, parseFloat(`${filterv << (Math.min(Math.abs(parseInt(`${fileZ}`)), 2))}`));
   do {
      alertr -= parseFloat(`${2}`);
      if (3576244.0 == alertr) {
         break;
      }
   } while ((alertr >= 4.81) && (3576244.0 == alertr));
   while (2.96 > (iconnewsshare6 / (Math.max(3.58, 7))) || (profileactiveO.length << (Math.min(Math.abs(4), 1))) > 5) {
      profileactiveO.push(refreshG.length ^ 1);
      break;
   }
   do {
      iconnewsshareq = [parseInt(`${iconnewsshare6}`) >> (Math.min(1, Math.abs(2)))];
      if (iconnewsshareq.length == 156382) {
         break;
      }
   } while (((2 % (Math.max(1, iconnewsshareq.length))) <= 3 && (iconnewsshareq.length - parseInt(`${iconnewsshare6}`)) <= 2) && (iconnewsshareq.length == 156382));
      filterv /= Math.max(3, parseInt(`${alertr}`));
      fileZ += profileactiveO.length / (Math.max(2, 10));
       let latn8 = String.fromCharCode(102,95,50,54,95,115,116,101,112,115,0);
       let libreactperfloggerjniC = String.fromCharCode(110,111,116,105,99,101,95,111,95,49,49,0);
       let graphY = 4.0;
          let typingT = 3.0;
          let libjsi2 = String.fromCharCode(105,95,49,49,95,115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,0);
         libreactperfloggerjniC = `${parseInt(`${typingT}`)}`;
         libjsi2 += `${libjsi2.length}`;
      while (2.11 < graphY) {
         latn8 += `${parseInt(`${graphY}`)}`;
         break;
      }
       let fullscreenminS = new Map([[String.fromCharCode(119,97,108,107,116,104,114,111,117,103,104,95,109,95,54,52,0),824], [String.fromCharCode(97,95,54,52,95,105,115,115,101,116,117,103,105,100,0),841]]);
       let borderless4 = new Map([[String.fromCharCode(98,114,101,97,107,105,110,103,95,100,95,54,51,0),758], [String.fromCharCode(97,95,49,52,95,116,105,109,101,111,117,116,101,100,0),51], [String.fromCharCode(99,111,112,121,120,110,95,56,95,49,53,0),18]]);
      do {
          let episodesA = String.fromCharCode(119,95,51,54,95,108,111,103,109,111,110,111,0);
          let libreactnativeblobu = false;
          let signinupg = String.fromCharCode(110,95,57,51,95,109,105,103,114,97,116,105,110,103,0);
         borderless4[`${graphY}`] = 3;
         episodesA += `${2 << (Math.min(2, episodesA.length))}`;
         libreactnativeblobu = libreactnativeblobu || episodesA.length >= 42;
         signinupg += `${episodesA.length - 2}`;
         if (borderless4.size == 497687) {
            break;
         }
      } while ((borderless4.size == 497687) && (1 > (libreactperfloggerjniC.length >> (Math.min(5, Math.abs(borderless4.size)))) && (borderless4.size >> (Math.min(Math.abs(1), 1))) > 2));
         graphY -= libreactperfloggerjniC.length & parseInt(`${graphY}`);
       let sinaq = [3, 69];
         fullscreenminS = new Map([[`${borderless4.size}`, 3]]);
      do {
         libreactperfloggerjniC += "3";
         if (39657 == libreactperfloggerjniC.length) {
            break;
         }
      } while ((39657 == libreactperfloggerjniC.length) && (5 < libreactperfloggerjniC.length));
          let iconlogoutQ = [343, 704];
          let embed8 = new Map([[String.fromCharCode(115,121,110,99,115,97,102,101,95,98,95,50,0),true ], [String.fromCharCode(102,116,118,108,105,110,107,95,57,95,55,48,0),false ]]);
         graphY += sinaq.length & 3;
         iconlogoutQ = [iconlogoutQ.length];
         embed8[`${iconlogoutQ.length}`] = 3;
      grayC *= parseFloat(`${parseInt(`${iconnewsshare6}`)}`);
   while ((5.82 - grayC) < 4.92 || 5.49 < (iconnewsshare6 * 5.82)) {
      iconnewsshare6 -= 2;
      break;
   }
   while (3.33 == (alertr / (Math.max(2.79, 9))) && (alertr / (Math.max(imagenetworkerrY, 8))) == 2.79) {
       let pathn = 4.0;
       let iconarrowrightz = 1.0;
       let backwardi = String.fromCharCode(105,95,54,51,95,100,99,116,120,0);
      while (4.84 > iconarrowrightz) {
         pathn -= parseInt(`${pathn}`) * 2;
         break;
      }
         iconarrowrightz *= parseFloat(`${1 + parseInt(`${iconarrowrightz}`)}`);
      for (let z = 0; z < 3; z++) {
         iconarrowrightz *= parseFloat(`${3}`);
      }
      for (let y = 0; y < 3; y++) {
         backwardi = `${(String.fromCharCode(88,0) == backwardi ? backwardi.length : parseInt(`${pathn}`))}`;
      }
         iconarrowrightz -= parseFloat(`${parseInt(`${iconarrowrightz}`) & 1}`);
         iconarrowrightz /= Math.max(parseFloat(`${parseInt(`${pathn}`) ^ 2}`), 1);
      while (backwardi.length > parseInt(`${pathn}`)) {
          let icontransferclub1 = new Map([[String.fromCharCode(108,95,54,53,95,112,114,101,100,101,99,111,100,101,0),false ], [String.fromCharCode(98,95,53,55,95,109,111,110,116,104,115,0),true ], [String.fromCharCode(102,95,53,95,99,111,109,102,111,114,116,0),true ]]);
          let baseh = new Map([[String.fromCharCode(117,110,119,105,110,100,95,116,95,49,55,0),String.fromCharCode(108,95,56,49,95,99,111,111,108,100,111,119,110,115,0)], [String.fromCharCode(105,95,55,54,95,115,105,103,110,97,116,117,114,101,115,0),String.fromCharCode(104,105,115,116,111,103,114,97,109,95,55,95,57,50,0)], [String.fromCharCode(115,101,97,114,99,104,101,100,95,116,95,50,54,0),String.fromCharCode(99,97,108,108,115,95,108,95,53,57,0)]]);
          let defaultroombgW = String.fromCharCode(117,95,53,56,95,98,114,97,99,107,101,116,115,0);
          let chinasameS = String.fromCharCode(115,112,108,105,116,95,113,95,49,48,48,0);
          let matchesQ = new Map([[String.fromCharCode(104,95,54,53,95,112,114,111,112,97,103,97,116,101,0),67], [String.fromCharCode(108,95,52,50,95,105,103,110,111,114,101,115,0),934]]);
         backwardi = `${baseh.size ^ backwardi.length}`;
         icontransferclub1 = new Map([[`${icontransferclub1.size}`, defaultroombgW.length >> (Math.min(Math.abs(1), 4))]]);
         baseh = new Map([[`${matchesQ.size}`, chinasameS.length % (Math.max(3, 8))]]);
         defaultroombgW = `${matchesQ.size % 1}`;
         chinasameS = `${matchesQ.size % 1}`;
         break;
      }
      for (let e = 0; e < 3; e++) {
         backwardi = `${parseInt(`${iconarrowrightz}`) >> (Math.min(Math.abs(1), 2))}`;
      }
         backwardi += "1";
      imagenetworkerrY -= ((codes ? 1 : 2) << (Math.min(Math.abs(parseInt(`${fileZ}`)), 2)));
      break;
   }
      grayC += parseFloat(`${gradle4.length ^ profileactiveO.length}`);
      grayC -= (parseFloat(`${(foregroundY ? 2 : 5) / 1}`));
      grayC /= Math.max(5, parseFloat(`${parseInt(`${imagenetworkerrY}`)}`));
      filterv >>= Math.min(1, Math.abs(profileactiveO.length % 2));
       let predictionV = 4.0;
       let minimizej = String.fromCharCode(97,95,53,53,95,99,101,110,99,0);
         predictionV *= parseInt(`${predictionV}`);
       let valuesy = [66, 336, 904];
       let smallorangemane = [String.fromCharCode(100,95,50,55,95,112,114,101,0), String.fromCharCode(108,95,52,48,95,115,101,103,100,97,116,97,0), String.fromCharCode(117,95,54,48,95,117,116,102,108,101,110,0)];
      for (let j = 0; j < 1; j++) {
         minimizej += `${smallorangemane.length}`;
      }
      for (let h = 0; h < 2; h++) {
         minimizej = `${valuesy.length}`;
      }
      if (4 < (parseInt(`${predictionV}`) + smallorangemane.length)) {
          let largesound8 = 3;
         predictionV -= minimizej.length;
         largesound8 |= largesound8 / (Math.max(2, 1));
      }
         predictionV += 3 ^ parseInt(`${predictionV}`);
      iconnewsshare6 *= refreshG.length;

    return this.player.volumeWidth * this.state.volume;
      codes = gradle4.includes(foregroundY);
   for (let e = 0; e < 3; e++) {
       let largeT = 3.0;
      for (let m = 0; m < 1; m++) {
         largeT /= Math.max(parseFloat(`${parseInt(`${largeT}`) & 3}`), 3);
      }
      if (3.27 <= (4.33 + largeT) && 5.12 <= (4.33 - largeT)) {
         largeT *= parseFloat(`${parseInt(`${largeT}`) | parseInt(`${largeT}`)}`);
      }
          let condensedy = 0;
          let chart4 = false;
         largeT -= (parseFloat(`${(chart4 ? 3 : 4) % (Math.max(9, condensedy))}`));
      gradle4.push(2);
   }
      iconnewsshareq.push(gradle4.length);
   if (codes || (imagenetworkerrY + 4.67) < 1.70) {
      codes = alertr <= parseFloat(`${profileactiveO.length}`);
   }
      iconnewsshareq = [refreshG.length ^ 3];
      codes = refreshG.includes(fileZ);
      iconnewsshare6 *= 1 | parseInt(`${imagenetworkerrY}`);
   do {
       let issubh = true;
       let mbnativeadvancedD = 2;
       let philippines9 = 3;
         issubh = !issubh;
         philippines9 %= Math.max(4, philippines9);
      alertr += parseFloat(`${tempnodatagifc.length}`);
      if (4233170.0 == alertr) {
         break;
      }
   } while ((4233170.0 == alertr) && (3.34 < alertr));
      alertr += parseFloat(`${iconnewsshareq.length}`);
   while ((fileZ + 5.42) > 4.94 && 5.42 > fileZ) {
      fileZ *= parseInt(`${sigmobm}`) - parseInt(`${fileZ}`);
      break;
   }
      tempnodatagifc = `${refreshG.length}`;
       let fieldD = String.fromCharCode(116,104,105,99,107,95,49,95,57,57,0);
         fieldD += "1";
         fieldD += "1";
         fieldD = `${fieldD.length}`;
      sigmobm += filterv + 1;
   for (let g = 0; g < 1; g++) {
      profileactiveO.push(profileactiveO.length);
   }
   if ((imagenetworkerrY * 1.79) <= 4.65 && 2 <= (5 & tempnodatagifc.length)) {
       let libavformatz = false;
       let lightU = 1.0;
       let savel = true;
         savel = !savel;
      for (let r = 0; r < 3; r++) {
         libavformatz = savel && lightU >= 44.29;
      }
         lightU -= (parseFloat(`${(libavformatz ? 3 : 4) & parseInt(`${lightU}`)}`));
         lightU *= parseFloat(`${2 % (Math.max(10, parseInt(`${lightU}`)))}`);
      for (let z = 0; z < 2; z++) {
         libavformatz = (savel ? !libavformatz : savel);
      }
      do {
         lightU *= (parseFloat(`${parseInt(`${lightU}`) >> (Math.min(5, Math.abs((libavformatz ? 5 : 3))))}`));
         if (838787.0 == lightU) {
            break;
         }
      } while ((838787.0 == lightU) && (3.8 == lightU));
      while (!savel) {
         lightU -= (parseFloat(`${(libavformatz ? 5 : 1)}`));
         break;
      }
          let yellowB = String.fromCharCode(100,95,51,55,95,112,108,97,105,110,116,101,120,116,0);
          let libreactd = 4.0;
         libavformatz = !libavformatz;
         yellowB += `${yellowB.length}`;
         libreactd += (String.fromCharCode(117,0) == yellowB ? yellowB.length : parseInt(`${libreactd}`));
      do {
         libavformatz = lightU >= 93.27 && !libavformatz;
         if (libavformatz ? !libavformatz : libavformatz) {
            break;
         }
      } while ((libavformatz ? !libavformatz : libavformatz) && (!savel));
      tempnodatagifc = `${parseInt(`${fileZ}`) % (Math.max(4, parseInt(`${imagenetworkerrY}`)))}`;
   }
       let clubW = true;
          let minivodN = [566, 46, 28];
         clubW = minivodN.length == 47;
      do {
         clubW = (clubW ? clubW : !clubW);
         if (clubW ? !clubW : clubW) {
            break;
         }
      } while ((clubW) && (clubW ? !clubW : clubW));
         clubW = !clubW || clubW;
      grayC += (parseFloat(`${(foregroundY ? 1 : 3) + parseInt(`${alertr}`)}`));
      grayC += parseFloat(`${filterv - 1}`);
   while (4 <= (profileactiveO.length / (Math.max(gradle4.length, 9)))) {
      profileactiveO.push(((foregroundY ? 5 : 4) % (Math.max(parseInt(`${iconnewsshare6}`), 8))));
      break;
   }
       let combinedM = String.fromCharCode(115,111,102,97,95,106,95,57,56,0);
      for (let m = 0; m < 3; m++) {
          let applicationx = 1.0;
         combinedM = `${combinedM.length | parseInt(`${applicationx}`)}`;
      }
          let otherN = 3.0;
          let ewardedW = String.fromCharCode(97,98,117,102,102,101,114,115,105,110,107,95,101,95,49,52,0);
          let loading4 = String.fromCharCode(101,110,111,117,103,104,95,97,95,51,50,0);
         combinedM = `${loading4.length ^ 1}`;
         otherN += parseFloat(`${ewardedW.length}`);
         ewardedW = "3";
         loading4 = `${1 & ewardedW.length}`;
      do {
         combinedM += `${combinedM.length}`;
         if (876237 == combinedM.length) {
            break;
         }
      } while ((combinedM != combinedM) && (876237 == combinedM.length));
      foregroundY = codes;

  }

   

   
  UNSAFE_componentWillMount() {
       let vignetten = 0;
    let debugo = [156, 250, 163];
    let incidentQ = String.fromCharCode(97,95,55,50,95,105,99,99,112,0);
    let libreactnativebloba = [String.fromCharCode(107,95,54,52,95,115,116,121,108,101,0), String.fromCharCode(99,95,54,95,102,111,111,116,101,114,0), String.fromCharCode(117,95,51,49,95,99,97,110,99,101,108,101,100,0)];
    let switch_27A = 5;
    let stationW = false;
    let statsnomoredataq = true;
    let dycreatort = [696, 412, 428];
    let ready = [106, 744];
   for (let h = 0; h < 2; h++) {
       let preview0 = String.fromCharCode(115,116,97,99,107,116,114,97,99,101,95,57,95,49,50,0);
       let megaphonec = [600, 775];
       let modele = [388, 44];
       let librrcf = new Map([[String.fromCharCode(115,109,106,112,101,103,95,112,95,56,55,0),901], [String.fromCharCode(115,105,103,105,100,95,55,95,52,48,0),552], [String.fromCharCode(116,104,101,111,114,97,95,107,95,53,56,0),932]]);
       let reward6 = String.fromCharCode(112,114,105,110,116,95,97,95,52,55,0);
          let mintegral2 = 2.0;
          let backgroundp = String.fromCharCode(97,114,116,105,115,116,95,109,95,49,0);
         reward6 += `${parseInt(`${mintegral2}`)}`;
         mintegral2 -= parseFloat(`${backgroundp.length}`);
         backgroundp = `${backgroundp.length}`;
         preview0 = "2";
         modele = [megaphonec.length];
      while ((modele.length ^ 1) > 1) {
          let holderC = String.fromCharCode(99,95,52,54,95,97,110,110,111,117,110,99,101,0);
          let vietnamt = 1;
          let adultW = String.fromCharCode(98,95,50,50,95,110,97,110,111,98,101,110,99,104,109,97,114,107,0);
          let googleg = String.fromCharCode(117,109,98,114,101,108,108,97,95,110,95,50,56,0);
          let sportC = String.fromCharCode(97,95,56,53,95,116,105,109,101,105,110,102,111,114,99,101,0);
         modele = [(googleg == String.fromCharCode(53,0) ? reward6.length : googleg.length)];
         holderC += `${3 * adultW.length}`;
         vietnamt /= Math.max(5, vietnamt);
         adultW += `${vietnamt << (Math.min(sportC.length, 3))}`;
         sportC = `${holderC.length / 3}`;
         break;
      }
      while (preview0.startsWith(`${librrcf.size}`)) {
         librrcf[reward6] = 2 ^ reward6.length;
         break;
      }
       let rocket7 = [618, 914, 368];
      for (let q = 0; q < 1; q++) {
         librrcf[`${megaphonec.length}`] = megaphonec.length;
      }
         librrcf = new Map([[`${librrcf.size}`, megaphonec.length]]);
      if (megaphonec.length < reward6.length) {
         megaphonec.push((String.fromCharCode(72,0) == preview0 ? preview0.length : rocket7.length));
      }
      while (3 <= (1 | megaphonec.length) && 1 <= (1 | preview0.length)) {
         preview0 += "3";
         break;
      }
         preview0 = "2";
       let airbnbstary = String.fromCharCode(114,101,102,112,108,97,110,101,95,120,95,50,0);
       let analyticl = String.fromCharCode(114,101,109,117,120,95,50,95,56,0);
         reward6 = `${airbnbstary.length ^ analyticl.length}`;
      while ((librrcf.size % 3) <= 1) {
          let thumbnailL = [861, 36];
          let constantsC = new Map([[String.fromCharCode(116,95,57,50,95,108,111,111,107,117,112,0),69], [String.fromCharCode(102,95,50,57,95,103,114,101,121,115,0),748]]);
          let arrowC = 4;
          let penaltyK = 2.0;
          let filterq = String.fromCharCode(116,105,109,101,115,116,97,109,112,95,98,95,54,49,0);
         analyticl = "2";
         thumbnailL = [3 ^ constantsC.size];
         constantsC[`${penaltyK}`] = constantsC.size % 3;
         arrowC %= Math.max(thumbnailL.length, 3);
         penaltyK *= 1;
         filterq = "3";
         break;
      }
      do {
          let gestureO = String.fromCharCode(104,111,116,105,122,111,110,116,108,95,98,95,53,50,0);
          let gpayu = 0.0;
          let black0 = 1;
          let langkeyG = String.fromCharCode(102,95,54,95,114,111,116,111,0);
          let iconpointscoreX = 4.0;
         librrcf = new Map([[analyticl, 1 | analyticl.length]]);
         gestureO += `${langkeyG.length / (Math.max(2, 5))}`;
         gpayu /= Math.max(1, 3);
         black0 *= parseInt(`${iconpointscoreX}`);
         langkeyG = `${gestureO.length * 1}`;
         if (librrcf.size == 4850234) {
            break;
         }
      } while ((librrcf.size == 4850234) && (librrcf[`${rocket7.length}`] == null));
      switch_27A /= Math.max(3, modele.length >> (Math.min(Math.abs(2), 1)));
   }
       let changen = 2;
       let verticalJ = String.fromCharCode(109,117,108,97,100,100,95,113,95,55,53,0);
       let helperQ = new Map([[String.fromCharCode(114,95,56,50,95,105,110,116,101,114,112,111,108,97,116,101,100,0),String.fromCharCode(113,95,51,54,95,105,110,102,108,97,116,101,0)], [String.fromCharCode(100,95,51,55,95,100,97,116,97,108,0),String.fromCharCode(116,95,52,57,95,99,108,105,112,112,105,110,103,0)]]);
      if (!verticalJ.endsWith(`${helperQ.size}`)) {
         verticalJ += `${helperQ.size - verticalJ.length}`;
      }
      do {
          let slidern = 5.0;
         changen %= Math.max(1 << (Math.min(1, Math.abs(parseInt(`${slidern}`)))), 1);
         if (changen == 3402825) {
            break;
         }
      } while ((changen == 3402825) && ((5 * verticalJ.length) > 3 || 3 > (5 * changen)));
         verticalJ += `${changen << (Math.min(Math.abs(helperQ.size), 5))}`;
          let cedbadcebfbfbfbcfecbcE = 3;
          let basketballmatchdetailbg3 = String.fromCharCode(108,95,55,57,95,109,117,108,109,111,100,0);
          let tailc = new Map([[String.fromCharCode(112,95,50,57,95,111,117,116,108,105,110,107,0),650], [String.fromCharCode(107,95,55,50,95,114,101,99,101,105,118,105,110,103,0),7], [String.fromCharCode(105,110,100,105,99,97,116,111,114,95,114,95,53,51,0),251]]);
         changen |= changen;
         cedbadcebfbfbfbcfecbcE /= Math.max(5, tailc.size);
         basketballmatchdetailbg3 += "3";
         tailc[`${cedbadcebfbfbfbcfecbcE}`] = 1 | basketballmatchdetailbg3.length;
      if (1 == (verticalJ.length & helperQ.size) || 1 == (1 & helperQ.size)) {
         helperQ[`${changen}`] = helperQ.size;
      }
          let telemetrya = [82, 216, 425];
         helperQ = new Map([[`${changen}`, changen | 2]]);
         telemetrya.push(3);
      if (!verticalJ.includes(`${helperQ.size}`)) {
          let downloadery = true;
          let iconarrowleftG = 2;
          let crown8 = false;
          let heartF = String.fromCharCode(116,95,49,52,95,114,101,102,108,101,99,116,111,114,0);
         helperQ[`${iconarrowleftG}`] = helperQ.size;
         downloadery = !crown8;
         iconarrowleftG &= 1;
         heartF += `${(String.fromCharCode(83,0) == heartF ? heartF.length : (downloadery ? 1 : 1))}`;
      }
         helperQ[verticalJ] = (String.fromCharCode(118,0) == verticalJ ? verticalJ.length : helperQ.size);
          let libapminsightb5 = String.fromCharCode(108,105,98,115,97,109,112,108,101,95,121,95,55,50,0);
         changen *= 1 << (Math.min(1, Math.abs(changen)));
         libapminsightb5 += `${3 << (Math.min(4, libapminsightb5.length))}`;
      incidentQ = `${2 >> (Math.min(5, Math.abs(switch_27A)))}`;
   if (1 >= (libreactnativebloba.length + switch_27A) && 1 >= (libreactnativebloba.length + switch_27A)) {
      libreactnativebloba.push(2 << (Math.min(2, debugo.length)));
   }
   while (2 <= (1 & switch_27A) && 1 <= switch_27A) {
      switch_27A &= vignetten;
      break;
   }
      statsnomoredataq = stationW;
   if (3 >= libreactnativebloba.length) {
      switch_27A >>= Math.min(5, libreactnativebloba.length);
   }
      vignetten /= Math.max(switch_27A % (Math.max(2, 3)), 3);

    this.initSeekPanResponder();
   for (let x = 0; x < 3; x++) {
      switch_27A /= Math.max(3, 2);
   }
   while (3 >= (vignetten << (Math.min(Math.abs(5), 1))) && 5 >= vignetten) {
      vignetten |= 3 & vignetten;
      break;
   }
   if (5 > (vignetten + 1) || (1 + vignetten) > 4) {
      incidentQ = `${switch_27A | debugo.length}`;
   }
       let goallogoF = [833, 588];
       let libswresample_ = String.fromCharCode(121,95,49,53,95,108,117,116,100,0);
          let dropdownq = String.fromCharCode(110,97,118,105,103,97,116,101,100,95,104,95,55,49,0);
          let file3 = 4.0;
          let progressA = String.fromCharCode(122,95,57,57,95,114,101,115,117,108,116,105,110,103,0);
         libswresample_ += `${dropdownq.length ^ 3}`;
         dropdownq += `${2 % (Math.max(8, parseInt(`${file3}`)))}`;
         file3 += parseFloat(`${progressA.length}`);
         progressA += `${progressA.length / (Math.max(3, 10))}`;
      do {
          let colorsT = String.fromCharCode(102,97,99,101,115,95,50,95,56,48,0);
          let iconnewssharew = String.fromCharCode(120,95,50,48,95,118,101,114,105,102,105,101,100,0);
         libswresample_ += "2";
         colorsT += "3";
         iconnewssharew += `${2 + iconnewssharew.length}`;
         if (libswresample_ == String.fromCharCode(53,120,106,99,55,101,114,103,0)) {
            break;
         }
      } while ((2 > goallogoF.length) && (libswresample_ == String.fromCharCode(53,120,106,99,55,101,114,103,0)));
      for (let s = 0; s < 2; s++) {
         goallogoF = [(String.fromCharCode(120,0) == libswresample_ ? goallogoF.length : libswresample_.length)];
      }
          let libswscaleg = String.fromCharCode(120,95,51,49,95,99,111,109,98,105,0);
          let penaltyshoots = [983, 797, 961];
          let bingB = String.fromCharCode(105,102,111,114,119,97,114,100,95,113,95,56,53,0);
         goallogoF = [2 | libswresample_.length];
         libswscaleg = `${(String.fromCharCode(56,0) == libswscaleg ? penaltyshoots.length : libswscaleg.length)}`;
         penaltyshoots.push(1);
         bingB = `${bingB.length}`;
         goallogoF.push(libswresample_.length ^ goallogoF.length);
      do {
         goallogoF = [(libswresample_ == String.fromCharCode(53,0) ? libswresample_.length : goallogoF.length)];
         if (goallogoF.length == 2829779) {
            break;
         }
      } while ((!libswresample_.endsWith(`${goallogoF.length}`)) && (goallogoF.length == 2829779));
      incidentQ += `${switch_27A / (Math.max(libreactnativebloba.length, 6))}`;
      vignetten /= Math.max(debugo.length / 1, 5);
      libreactnativebloba = [dycreatort.length];
       let imagemanagerS = 1.0;
       let modity3 = String.fromCharCode(109,95,53,56,95,105,110,116,114,97,120,104,117,102,0);
          let settingsK = String.fromCharCode(104,114,101,97,100,95,109,95,53,0);
         modity3 = `${modity3.length << (Math.min(Math.abs(2), 4))}`;
         settingsK = `${settingsK.length}`;
       let runtimel = 4;
       let qnews6 = 5;
         runtimel >>= Math.min(5, Math.abs(3));
      while (3 >= (modity3.length << (Math.min(1, Math.abs(runtimel)))) && 2 >= (modity3.length << (Math.min(Math.abs(3), 4)))) {
         runtimel >>= Math.min(Math.abs(runtimel & qnews6), 3);
         break;
      }
       let bootl = [606, 197];
      do {
         runtimel -= qnews6;
         if (609398 == runtimel) {
            break;
         }
      } while ((609398 == runtimel) && (!modity3.startsWith(`${runtimel}`)));
      stationW = !statsnomoredataq;
      imagemanagerS *= 2;

    this.initVolumePanResponder();
   do {
      debugo = [((statsnomoredataq ? 5 : 5) % 3)];
      if (3464735 == debugo.length) {
         break;
      }
   } while (((vignetten + debugo.length) > 1 || (debugo.length + vignetten) > 1) && (3464735 == debugo.length));
      dycreatort = [3];
       let predictionbannersharedQ = 3;
       let modelsq = true;
       let libapminsightaH = String.fromCharCode(107,95,52,57,95,115,99,114,97,116,99,104,0);
         modelsq = !modelsq || 42 > predictionbannersharedQ;
      do {
         predictionbannersharedQ >>= Math.min(parseInt(`${Math.abs(((modelsq ? 5 : 4) / (Math.max(libapminsightaH.length, 6))))}`), 4);
         if (1528830 == predictionbannersharedQ) {
            break;
         }
      } while ((modelsq) && (1528830 == predictionbannersharedQ));
      do {
         modelsq = predictionbannersharedQ == 47;
         if (modelsq ? !modelsq : modelsq) {
            break;
         }
      } while ((modelsq ? !modelsq : modelsq) && (1 == libapminsightaH.length));
         modelsq = libapminsightaH.length >= 59;
      for (let d = 0; d < 2; d++) {
         libapminsightaH += `${libapminsightaH.length / 1}`;
      }
      vignetten <<= Math.min(1, Math.abs(2));
       let stringW = 5.0;
       let elements3 = String.fromCharCode(116,102,114,97,95,109,95,50,50,0);
       let currentL = String.fromCharCode(117,95,51,57,95,115,117,114,101,0);
         stringW += elements3.length | currentL.length;
      for (let v = 0; v < 3; v++) {
         stringW -= (String.fromCharCode(90,0) == currentL ? currentL.length : parseInt(`${stringW}`));
      }
       let iconwechatX = String.fromCharCode(101,95,51,51,95,114,101,115,104,117,102,102,108,101,0);
       let iconpointscoreA = String.fromCharCode(104,109,104,100,95,56,95,53,48,0);
      while (elements3 != String.fromCharCode(80,0)) {
         currentL = `${iconpointscoreA.length}`;
         break;
      }
         elements3 = `${1 >> (Math.min(4, currentL.length))}`;
          let renderP = String.fromCharCode(112,95,52,50,95,108,117,114,97,108,105,122,97,116,105,111,110,0);
          let androidm = 5.0;
         elements3 = "2";
         renderP += `${renderP.length - parseInt(`${androidm}`)}`;
         androidm /= Math.max((parseFloat(`${String.fromCharCode(69,0) == renderP ? parseInt(`${androidm}`) : renderP.length}`)), 1);
      for (let d = 0; d < 1; d++) {
         iconpointscoreA = `${parseInt(`${stringW}`) ^ 1}`;
      }
         currentL += "2";
          let holders = String.fromCharCode(108,105,98,97,118,99,111,100,101,99,95,109,95,49,52,0);
          let subsI = String.fromCharCode(106,95,55,52,95,103,97,112,0);
         iconpointscoreA += `${holders.length}`;
         holders = `${subsI.length / 1}`;
         subsI += "2";
      vignetten -= vignetten;
      vignetten >>= Math.min(Math.abs(debugo.length ^ 2), 1);
       let areaQ = String.fromCharCode(114,101,102,117,110,100,95,104,95,54,48,0);
       let giftbuttonG = [String.fromCharCode(103,105,103,97,98,121,116,101,115,95,97,95,55,49,0), String.fromCharCode(108,95,56,51,95,101,110,99,97,112,115,117,108,97,116,101,100,0), String.fromCharCode(121,95,49,57,95,98,115,105,122,101,0)];
       let hooksm = 4.0;
         areaQ = `${parseInt(`${hooksm}`)}`;
       let dragE = String.fromCharCode(109,97,116,104,101,115,95,104,95,52,54,0);
       let invitec = String.fromCharCode(111,98,106,99,95,108,95,56,56,0);
      for (let a = 0; a < 1; a++) {
          let projectr = 1.0;
         dragE = `${areaQ.length}`;
         projectr += parseFloat(`${2}`);
      }
         giftbuttonG = [3 * giftbuttonG.length];
      do {
         hooksm += (parseFloat(`${areaQ == String.fromCharCode(117,0) ? areaQ.length : giftbuttonG.length}`));
         if (hooksm == 3489109.0) {
            break;
         }
      } while ((4 == (giftbuttonG.length & 1) && (4.63 * hooksm) == 3.6) && (hooksm == 3489109.0));
         areaQ = `${areaQ.length}`;
         areaQ += `${areaQ.length}`;
         hooksm /= Math.max(parseFloat(`${areaQ.length}`), 4);
      if (areaQ.length < 4) {
          let linkI = 1;
         areaQ += `${2 ^ giftbuttonG.length}`;
         linkI >>= Math.min(4, Math.abs(3));
      }
      switch_27A <<= Math.min(dycreatort.length, 4);
   do {
      switch_27A <<= Math.min(5, Math.abs(2 << (Math.min(3, dycreatort.length))));
      if (switch_27A == 2339470) {
         break;
      }
   } while ((5 == (3 - switch_27A) && switch_27A == 3) && (switch_27A == 2339470));

  }

   
  UNSAFE_componentWillReceiveProps(nextProps) {
       let templateprocessors = String.fromCharCode(102,95,56,48,95,98,108,111,99,107,105,110,101,115,115,0);
    let iconlogout8 = new Map([[String.fromCharCode(100,101,112,111,115,105,116,95,113,95,57,49,0),702], [String.fromCharCode(98,95,57,54,95,100,111,109,97,105,110,0),837], [String.fromCharCode(105,95,50,55,95,109,97,108,108,111,99,122,0),693]]);
    let inouttargetredQ = String.fromCharCode(102,101,116,99,104,95,113,95,52,48,0);
    let foregroundV = [String.fromCharCode(105,102,97,99,101,95,55,95,49,50,0), String.fromCharCode(104,95,54,54,95,112,111,115,116,105,110,103,0)];
    let homeplayerh = [String.fromCharCode(105,110,102,105,110,105,116,121,95,107,95,51,54,0), String.fromCharCode(106,95,55,54,0), String.fromCharCode(108,95,51,52,95,98,119,114,105,116,101,0)];
    let information3 = String.fromCharCode(117,95,54,57,95,97,99,114,111,110,121,109,115,0);
    let package_cj = String.fromCharCode(97,99,116,117,97,108,108,121,95,49,95,50,56,0);
    let template_sG = 3.0;
    let footballtrophyA = String.fromCharCode(122,95,57,49,95,116,114,117,101,104,100,0);
    let trophyw = 3.0;
    let whiteanimationlive1 = String.fromCharCode(99,111,110,112,111,110,101,110,116,115,95,106,95,51,57,0);
    let static_iwY = String.fromCharCode(121,95,56,50,95,111,110,108,121,0);
    let graphicsj = String.fromCharCode(101,95,57,52,95,97,112,101,114,0);
    let station7 = true;
   for (let l = 0; l < 2; l++) {
       let untick9 = [92, 788, 102];
       let iconclosewhitewithbgp = 5.0;
       let libreactt = String.fromCharCode(105,95,54,52,95,115,108,97,110,116,0);
      if ((untick9.length % 5) >= 4) {
         untick9 = [untick9.length];
      }
      for (let x = 0; x < 2; x++) {
         iconclosewhitewithbgp *= libreactt.length & parseInt(`${iconclosewhitewithbgp}`);
      }
         iconclosewhitewithbgp *= parseInt(`${iconclosewhitewithbgp}`) << (Math.min(libreactt.length, 5));
          let iconviewergifD = true;
          let suggestion4 = 5.0;
         iconclosewhitewithbgp -= parseInt(`${iconclosewhitewithbgp}`) % 3;
         iconviewergifD = suggestion4 <= 32.36;
         suggestion4 /= Math.max((parseFloat(`${(iconviewergifD ? 2 : 2) >> (Math.min(Math.abs(parseInt(`${suggestion4}`)), 4))}`)), 1);
       let progressZ = 2.0;
      while ((iconclosewhitewithbgp * progressZ) > 5.12 && (iconclosewhitewithbgp * progressZ) > 5.12) {
          let carousel2 = String.fromCharCode(102,95,55,52,95,112,97,100,0);
          let membershipr = new Map([[String.fromCharCode(100,101,100,117,112,101,95,55,95,55,52,0),186], [String.fromCharCode(99,97,114,114,105,97,103,101,95,52,95,57,55,0),250]]);
          let debugR = String.fromCharCode(99,95,54,50,95,105,110,116,101,114,97,116,105,111,110,0);
         progressZ += parseFloat(`${libreactt.length}`);
         carousel2 = "3";
         membershipr[debugR] = 1;
         debugR += `${debugR.length / (Math.max(3, 3))}`;
         break;
      }
      while ((iconclosewhitewithbgp / (Math.max(1.90, 6))) > 4.60 || 1.90 > (untick9.length / (Math.max(9, iconclosewhitewithbgp)))) {
          let aboutf = new Map([[String.fromCharCode(98,95,49,52,95,109,105,100,116,111,110,101,115,0),943], [String.fromCharCode(107,95,54,53,95,115,117,98,109,118,0),49], [String.fromCharCode(107,95,57,49,95,112,97,112,101,114,115,0),490]]);
          let eact4 = String.fromCharCode(103,95,53,57,95,99,104,117,110,107,0);
          let libcxxcomponentsA = false;
         untick9.push(parseInt(`${progressZ}`) * libreactt.length);
         aboutf = new Map([[eact4, (3 & (libcxxcomponentsA ? 1 : 5))]]);
         eact4 += `${aboutf.size}`;
         libcxxcomponentsA = (((libcxxcomponentsA ? aboutf.size : 37) * aboutf.size) > 95);
         break;
      }
       let playlistG = String.fromCharCode(100,114,111,112,111,102,102,95,57,95,54,52,0);
          let shrinkT = new Map([[String.fromCharCode(119,95,54,53,95,98,105,116,115,116,114,105,110,103,0),662], [String.fromCharCode(104,97,109,98,117,114,103,101,114,95,114,95,55,57,0),686], [String.fromCharCode(117,95,50,55,95,103,101,116,98,105,116,0),597]]);
          let bang1 = 1.0;
          let android3 = new Map([[String.fromCharCode(113,95,52,56,95,116,101,114,109,105,110,97,116,105,110,103,0),152], [String.fromCharCode(107,95,50,52,95,102,105,108,108,112,0),905], [String.fromCharCode(121,95,56,48,95,100,105,115,97,98,108,101,100,0),919]]);
         progressZ *= parseFloat(`${parseInt(`${bang1}`)}`);
         shrinkT[`${shrinkT.size}`] = shrinkT.size << (Math.min(Math.abs(1), 1));
         bang1 *= android3.size;
         android3 = new Map([[`${shrinkT.size}`, shrinkT.size ^ 3]]);
      homeplayerh.push(inouttargetredQ.length);
   }
      foregroundV.push(3);
   if ((2 ^ iconlogout8.size) <= 2 && 1 <= (2 ^ iconlogout8.size)) {
      foregroundV = [parseInt(`${template_sG}`) - static_iwY.length];
   }
       let indicator7 = new Map([[String.fromCharCode(97,95,54,52,0),425], [String.fromCharCode(121,95,53,56,95,114,117,110,116,101,114,109,0),541]]);
       let libnms7 = 5.0;
       let bridgeW = 3.0;
      do {
         libnms7 += parseFloat(`${parseInt(`${bridgeW}`) + parseInt(`${libnms7}`)}`);
         if (libnms7 == 973351.0) {
            break;
         }
      } while ((libnms7 == 973351.0) && (indicator7[`${libnms7}`] != null));
         bridgeW -= parseFloat(`${indicator7.size}`);
         bridgeW *= parseFloat(`${indicator7.size * parseInt(`${bridgeW}`)}`);
      while ((5 ^ indicator7.size) <= 2 || (indicator7.size & 5) <= 4) {
         indicator7 = new Map([[`${indicator7.size}`, indicator7.size]]);
         break;
      }
          let predictionbannerA = 0.0;
         libnms7 -= parseFloat(`${parseInt(`${predictionbannerA}`)}`);
      do {
         libnms7 *= parseFloat(`${parseInt(`${libnms7}`) * parseInt(`${bridgeW}`)}`);
         if (libnms7 == 4041539.0) {
            break;
         }
      } while ((libnms7 == 4041539.0) && ((parseFloat(`${indicator7.size}`) * libnms7) <= 4.17));
      do {
          let historyX = new Map([[String.fromCharCode(104,101,97,100,112,104,111,110,101,95,115,95,54,51,0),String.fromCharCode(115,95,53,49,95,99,117,114,114,101,110,116,0)], [String.fromCharCode(104,95,50,50,95,105,110,116,101,114,118,97,108,0),String.fromCharCode(101,95,54,56,95,109,98,105,110,116,114,97,0)], [String.fromCharCode(110,101,116,101,114,114,110,111,95,120,95,56,52,0),String.fromCharCode(119,95,54,52,95,119,105,100,101,115,99,114,101,101,110,0)]]);
          let circleW = String.fromCharCode(100,117,109,112,101,114,95,114,95,56,48,0);
         indicator7 = new Map([[`${historyX.size}`, historyX.size]]);
         circleW = `${circleW.length + 2}`;
         if (indicator7.size == 4839642) {
            break;
         }
      } while ((!Array.from(indicator7.keys()).includes(`${libnms7}`)) && (indicator7.size == 4839642));
         libnms7 -= parseFloat(`${parseInt(`${bridgeW}`)}`);
      for (let s = 0; s < 3; s++) {
         bridgeW += parseFloat(`${parseInt(`${libnms7}`)}`);
      }
      foregroundV.push(2);

    if (this.state.paused !== nextProps.paused) {

      trophyw -= parseFloat(`${package_cj.length >> (Math.min(4, Math.abs(parseInt(`${trophyw}`))))}`);
       let interstitialw = String.fromCharCode(103,97,117,115,115,105,97,110,105,105,114,100,95,115,95,55,53,0);
         interstitialw += `${interstitialw.length}`;
      if (2 <= interstitialw.length) {
          let iconorientationL = 3.0;
          let default_vh = new Map([[String.fromCharCode(112,114,111,106,101,99,116,95,97,95,53,57,0),String.fromCharCode(115,104,111,114,116,108,121,95,99,95,53,51,0)], [String.fromCharCode(99,108,105,112,102,95,122,95,53,55,0),String.fromCharCode(103,114,97,112,104,113,108,95,104,95,50,56,0)], [String.fromCharCode(98,95,52,56,95,122,111,110,101,0),String.fromCharCode(119,95,55,55,95,103,114,97,109,115,0)]]);
          let awayteamfield3 = new Map([[String.fromCharCode(112,95,57,55,95,101,110,100,105,97,110,0),497], [String.fromCharCode(120,95,56,52,95,114,101,118,105,115,105,111,110,0),336], [String.fromCharCode(120,95,54,50,95,114,101,99,116,105,102,121,0),712]]);
         interstitialw += "2";
         iconorientationL += parseFloat(`${parseInt(`${iconorientationL}`)}`);
         default_vh[`${iconorientationL}`] = parseInt(`${iconorientationL}`);
         awayteamfield3 = new Map([[`${awayteamfield3.size}`, default_vh.size + 2]]);
      }
         interstitialw = `${interstitialw.length + 3}`;
      templateprocessors += `${1 & footballtrophyA.length}`;
       let clock_ = String.fromCharCode(97,95,53,50,95,107,101,114,110,101,108,0);
       let componenti = 4.0;
       let resultj = 5.0;
       let panglei = false;
         panglei = parseInt(`${resultj}`) < clock_.length;
       let whitevideoliveb = String.fromCharCode(116,115,97,110,95,121,95,51,0);
      while (!panglei) {
         panglei = 5.30 >= componenti || String.fromCharCode(70,0) == clock_;
         break;
      }
       let shootyesgoalh = 1;
       let gifgoalg = 0;
         componenti *= whitevideoliveb.length;
      for (let f = 0; f < 2; f++) {
          let anythinkl = [819, 141, 305];
          let libavutilv = String.fromCharCode(117,95,53,52,95,105,110,116,101,114,112,114,101,116,0);
          let nextK = new Map([[String.fromCharCode(115,95,50,57,95,116,117,108,115,105,0),189], [String.fromCharCode(98,95,56,54,95,112,97,99,107,101,116,115,0),743]]);
          let mailt = 4.0;
          let langkeyd = false;
         componenti -= libavutilv.length * 3;
         anythinkl.push(anythinkl.length | 2);
         libavutilv += `${parseInt(`${mailt}`) & 1}`;
         nextK = new Map([[`${mailt}`, ((langkeyd ? 4 : 3) % (Math.max(parseInt(`${mailt}`), 7)))]]);
      }
       let kick9 = 1;
       let viewerJ = 5;
          let r_managerm = 0;
          let flyer5 = 1.0;
          let navigationF = [331, 475, 204];
         gifgoalg *= r_managerm / 3;
         r_managerm -= parseInt(`${flyer5}`);
         flyer5 /= Math.max(3, parseFloat(`${1}`));
         navigationF.push(navigationF.length & parseInt(`${flyer5}`));
      template_sG += parseFloat(`${2 | parseInt(`${componenti}`)}`);
   do {
       let emojihearto = String.fromCharCode(97,108,111,99,95,112,95,52,57,0);
       let textinputt = String.fromCharCode(114,95,52,56,95,100,119,97,114,102,0);
       let commonq = new Map([[String.fromCharCode(108,95,49,52,95,115,112,101,101,100,104,113,0),String.fromCharCode(98,108,111,99,107,120,95,53,95,54,56,0)], [String.fromCharCode(99,95,55,54,95,104,111,115,116,0),String.fromCharCode(114,95,54,52,95,114,101,113,117,101,115,116,101,114,115,0)], [String.fromCharCode(107,109,101,97,110,115,95,110,95,54,51,0),String.fromCharCode(105,110,108,105,110,107,95,103,95,57,51,0)]]);
      if (!emojihearto.includes(`${commonq.size}`)) {
          let aboutG = 3;
          let defaultroombgh = [820, 304, 719];
          let floaterB = 4.0;
          let dropdownP = String.fromCharCode(114,101,99,111,109,112,111,115,101,95,117,95,54,53,0);
          let settingsr = String.fromCharCode(110,98,105,116,115,95,120,95,57,49,0);
         emojihearto += `${defaultroombgh.length}`;
         aboutG += settingsr.length;
         defaultroombgh = [3 * dropdownP.length];
         floaterB -= parseFloat(`${1 * aboutG}`);
         dropdownP += `${settingsr.length}`;
      }
         textinputt += "2";
      do {
         textinputt = `${commonq.size}`;
         if (2282265 == textinputt.length) {
            break;
         }
      } while ((2282265 == textinputt.length) && ((textinputt.length * commonq.size) == 1 || (commonq.size * textinputt.length) == 1));
      if (textinputt != String.fromCharCode(68,0) && emojihearto.length < 2) {
         textinputt += `${commonq.size}`;
      }
          let template_4g7 = String.fromCharCode(111,117,116,112,117,116,95,120,95,52,56,0);
          let internetJ = String.fromCharCode(110,101,103,111,116,105,97,116,101,100,95,101,95,57,0);
         commonq = new Map([[`${commonq.size}`, 1]]);
         template_4g7 += `${(template_4g7 == String.fromCharCode(112,0) ? internetJ.length : template_4g7.length)}`;
         internetJ += `${template_4g7.length}`;
      do {
          let pathX = true;
          let productd = 3.0;
          let liveh = new Map([[String.fromCharCode(102,101,116,99,104,95,115,95,50,51,0),String.fromCharCode(101,114,114,110,111,95,116,95,57,56,0)], [String.fromCharCode(111,95,50,95,98,105,110,100,105,110,103,0),String.fromCharCode(109,95,55,57,95,103,97,116,104,101,114,105,110,103,0)]]);
         textinputt = `${textinputt.length + 3}`;
         pathX = 49.14 < productd;
         productd /= Math.max(liveh.size % (Math.max(2, parseInt(`${productd}`))), 5);
         liveh[`${productd}`] = 1;
         if (textinputt.length == 2562072) {
            break;
         }
      } while ((emojihearto != textinputt) && (textinputt.length == 2562072));
         textinputt = `${commonq.size / (Math.max(textinputt.length, 1))}`;
         textinputt += "3";
         emojihearto = `${(String.fromCharCode(57,0) == textinputt ? commonq.size : textinputt.length)}`;
      template_sG -= parseFloat(`${textinputt.length}`);
      if (4391718.0 == template_sG) {
         break;
      }
   } while (((2.61 - template_sG) > 4.93 && (template_sG - 2.61) > 5.38) && (4391718.0 == template_sG));
      this.setState({
        paused: nextProps.paused,
      });
   if (1 == iconlogout8.size) {
       let internetR = [673, 501];
       let small8 = true;
       let tumbnailf = 4;
      while (!small8 || 2 >= (5 >> (Math.min(5, Math.abs(tumbnailf))))) {
          let predictionbannersharedI = new Map([[String.fromCharCode(109,95,52,53,95,110,110,109,111,100,0),true ], [String.fromCharCode(117,95,57,52,95,115,116,97,99,107,0),false ]]);
          let foundQ = [875, 235];
         small8 = 76 < internetR.length && foundQ.length < 76;
         predictionbannersharedI = new Map([[`${predictionbannersharedI.size}`, 2 ^ predictionbannersharedI.size]]);
         foundQ.push(2);
         break;
      }
          let robotoi = [610, 853, 969];
          let runtimeschedulerq = String.fromCharCode(100,101,99,108,105,110,101,95,100,95,54,0);
         tumbnailf &= internetR.length - 3;
         robotoi.push(runtimeschedulerq.length << (Math.min(Math.abs(3), 3)));
         runtimeschedulerq += `${robotoi.length * 3}`;
         tumbnailf /= Math.max(1, (tumbnailf ^ (small8 ? 3 : 3)));
      do {
         tumbnailf *= (internetR.length & (small8 ? 4 : 2));
         if (tumbnailf == 2975577) {
            break;
         }
      } while ((!internetR.includes(tumbnailf)) && (tumbnailf == 2975577));
      if ((internetR.length << (Math.min(Math.abs(1), 4))) <= 1 && !small8) {
         internetR.push((internetR.length >> (Math.min(3, Math.abs((small8 ? 3 : 5))))));
      }
         internetR.push(tumbnailf);
         internetR.push(tumbnailf);
       let faviconQ = [989, 687, 417];
          let footballc = [955, 802];
         tumbnailf %= Math.max(2 + tumbnailf, 1);
         footballc.push(2);
      iconlogout8[`${template_sG}`] = 2 | parseInt(`${template_sG}`);
   }
   if (4 < (4 << (Math.min(2, Math.abs(iconlogout8.size))))) {
      station7 = (graphicsj.length >> (Math.min(2, templateprocessors.length))) == 58;
   }
   if (whiteanimationlive1.startsWith(`${templateprocessors.length}`)) {
      templateprocessors += `${templateprocessors.length ^ whiteanimationlive1.length}`;
   }
   while (information3.length == 3) {
       let imagenomoredataF = String.fromCharCode(108,95,50,50,95,102,97,105,108,101,100,0);
      if (imagenomoredataF.length == imagenomoredataF.length) {
         imagenomoredataF = `${imagenomoredataF.length}`;
      }
      if (!imagenomoredataF.includes(`${imagenomoredataF.length}`)) {
          let static_a5 = String.fromCharCode(113,95,55,51,95,114,99,118,100,0);
          let sidem = [733, 544, 772];
          let memberv = [String.fromCharCode(99,102,115,116,114,101,97,109,95,112,95,51,55,0), String.fromCharCode(121,95,53,55,95,99,108,101,97,114,105,110,103,0), String.fromCharCode(104,95,53,52,95,119,111,114,107,108,111,97,100,0)];
          let smallbrightnessc = true;
          let sentryl = 0.0;
         imagenomoredataF += `${3 % (Math.max(7, parseInt(`${sentryl}`)))}`;
         static_a5 += `${memberv.length}`;
         sidem = [sidem.length];
         memberv = [memberv.length];
         smallbrightnessc = !smallbrightnessc && memberv.length == 91;
         sentryl += 1;
      }
      do {
         imagenomoredataF = `${(imagenomoredataF == String.fromCharCode(48,0) ? imagenomoredataF.length : imagenomoredataF.length)}`;
         if (String.fromCharCode(116,118,114,122,119,108,120,49,104,112,0) == imagenomoredataF) {
            break;
         }
      } while ((imagenomoredataF != imagenomoredataF) && (String.fromCharCode(116,118,114,122,119,108,120,49,104,112,0) == imagenomoredataF));
      information3 = `${package_cj.length}`;
      break;
   }

    }

    if (this.styles.videoStyle !== nextProps.videoStyle) {

   if (graphicsj.endsWith(`${foregroundV.length}`)) {
      graphicsj += `${inouttargetredQ.length}`;
   }
      graphicsj = "1";
   while ((iconlogout8.size / 1) < 1) {
      iconlogout8[`${foregroundV.length}`] = foregroundV.length;
      break;
   }
       let audiences = String.fromCharCode(100,101,114,105,118,101,95,48,95,55,50,0);
         audiences += `${audiences.length / 1}`;
         audiences += `${audiences.length}`;
      for (let m = 0; m < 1; m++) {
         audiences = "3";
      }
      template_sG -= parseFloat(`${whiteanimationlive1.length * 3}`);
      this.styles.videoStyle = nextProps.videoStyle;
       let binga = String.fromCharCode(111,95,52,50,95,117,110,114,101,118,101,114,115,101,100,0);
          let chartI = String.fromCharCode(122,95,52,52,95,114,101,113,117,101,115,116,101,114,115,0);
          let chinasameH = 3.0;
         binga += "2";
         chartI = `${(String.fromCharCode(110,0) == chartI ? parseInt(`${chinasameH}`) : chartI.length)}`;
         chinasameH *= parseInt(`${chinasameH}`);
      do {
          let logouserG = String.fromCharCode(116,95,50,48,95,101,110,118,105,114,111,110,109,101,110,116,0);
         binga += `${binga.length & 3}`;
         logouserG += `${logouserG.length & 3}`;
         if (String.fromCharCode(52,106,116,97,98,118,121,117,0) == binga) {
            break;
         }
      } while ((4 >= binga.length) && (String.fromCharCode(52,106,116,97,98,118,121,117,0) == binga));
      while (binga.length >= 2) {
          let iconarrowrightwhiteR = 5.0;
         binga = `${parseInt(`${iconarrowrightwhiteR}`)}`;
         break;
      }
      homeplayerh.push(templateprocessors.length);
   for (let p = 0; p < 1; p++) {
      graphicsj = `${information3.length}`;
   }
      graphicsj += `${parseInt(`${trophyw}`) >> (Math.min(whiteanimationlive1.length, 1))}`;
   if (foregroundV.length < 3) {
      station7 = String.fromCharCode(104,0) == whiteanimationlive1;
   }

    }

    if (this.styles.containerStyle !== nextProps.style) {

      foregroundV = [(package_cj == String.fromCharCode(56,0) ? package_cj.length : whiteanimationlive1.length)];
       let graphp = String.fromCharCode(116,104,114,101,115,104,111,108,100,101,100,95,118,95,56,55,0);
      do {
         graphp = `${graphp.length}`;
         if (graphp == String.fromCharCode(48,104,55,54,50,118,107,122,0)) {
            break;
         }
      } while ((graphp.length < 2) && (graphp == String.fromCharCode(48,104,55,54,50,118,107,122,0)));
      if (graphp.length <= 3) {
         graphp += `${graphp.length}`;
      }
          let materials = String.fromCharCode(112,101,114,115,111,110,115,95,101,95,52,53,0);
          let interstitialW = true;
         graphp = `${(String.fromCharCode(120,0) == graphp ? graphp.length : materials.length)}`;
         materials += `${(1 & (interstitialW ? 4 : 4))}`;
      station7 = iconlogout8.size > footballtrophyA.length;
      iconlogout8[information3] = package_cj.length & 2;
      homeplayerh.push(parseInt(`${trophyw}`));
      this.styles.containerStyle = nextProps.style;
       let matchesL = 3.0;
      do {
         matchesL -= parseFloat(`${parseInt(`${matchesL}`)}`);
         if (3429524.0 == matchesL) {
            break;
         }
      } while ((matchesL >= 2.1) && (3429524.0 == matchesL));
       let iconclosewhitewithbgp1 = false;
      do {
         iconclosewhitewithbgp1 = 3.45 >= matchesL;
         if (iconclosewhitewithbgp1 ? !iconclosewhitewithbgp1 : iconclosewhitewithbgp1) {
            break;
         }
      } while ((iconclosewhitewithbgp1 ? !iconclosewhitewithbgp1 : iconclosewhitewithbgp1) && (2.39 <= matchesL && 3.87 <= (2.39 + matchesL)));
      static_iwY = `${1 >> (Math.min(4, footballtrophyA.length))}`;
   do {
      iconlogout8[whiteanimationlive1] = whiteanimationlive1.length | 3;
      if (iconlogout8.size == 1934755) {
         break;
      }
   } while ((iconlogout8.size == 1934755) && (4 < (iconlogout8.size * 4) && 4 < (iconlogout8.size * inouttargetredQ.length)));
      inouttargetredQ += `${footballtrophyA.length + graphicsj.length}`;
   do {
      foregroundV = [(String.fromCharCode(57,0) == graphicsj ? graphicsj.length : (station7 ? 1 : 1))];
      if (2339635 == foregroundV.length) {
         break;
      }
   } while ((2339635 == foregroundV.length) && (3 == (3 << (Math.min(4, foregroundV.length)))));

    }
  }

   
  componentDidMount() {
       let linkp = new Map([[String.fromCharCode(108,95,52,49,95,101,99,107,101,121,0),true ], [String.fromCharCode(99,111,110,116,114,97,99,116,115,95,48,95,54,56,0),false ], [String.fromCharCode(100,101,116,101,114,109,105,110,97,98,108,101,95,52,95,50,49,0),false ]]);
    let libcrashsdkt = new Map([[String.fromCharCode(101,105,112,95,119,95,49,50,0),String.fromCharCode(108,95,50,52,95,101,120,97,99,116,108,121,0)], [String.fromCharCode(116,104,117,109,98,110,97,105,108,115,95,54,95,56,49,0),String.fromCharCode(117,95,51,48,95,99,102,102,116,105,0)], [String.fromCharCode(99,111,110,118,111,108,118,101,95,111,95,54,56,0),String.fromCharCode(98,101,108,111,119,95,108,95,57,49,0)]]);
    let penaltyshootp = [491, 798, 419];
    let faviconz = [578, 743, 626];
    let malaysiaB = 3.0;
    let banner1 = String.fromCharCode(112,97,114,115,101,100,95,52,95,51,53,0);
    let tempY = false;
    let singaporee = true;
    let miniQ = [595, 923];
    let materialt = new Map([[String.fromCharCode(110,111,110,98,108,111,99,107,95,103,95,54,56,0),431], [String.fromCharCode(110,95,57,49,95,111,102,102,115,101,116,115,105,122,101,0),638], [String.fromCharCode(99,111,108,108,95,102,95,52,55,0),597]]);
    let untickw = 5.0;
    let mergerk = 2.0;
    let rncoreb = [812, 734];
       let grayR = 3.0;
       let gpayz = 0.0;
       let crownf = 1;
         crownf >>= Math.min(Math.abs(parseInt(`${grayR}`) << (Math.min(3, Math.abs(3)))), 5);
      while (grayR < 2.45) {
         grayR -= parseFloat(`${parseInt(`${grayR}`) | 2}`);
         break;
      }
      if (2 >= crownf) {
          let nodej = String.fromCharCode(115,95,50,57,95,114,111,103,114,101,115,115,0);
          let saveS = [String.fromCharCode(102,109,97,100,100,95,55,95,55,48,0), String.fromCharCode(98,97,115,101,103,112,104,95,119,95,51,55,0)];
         crownf <<= Math.min(1, Math.abs(nodej.length - saveS.length));
      }
       let reactnativeultimatelistviewE = 0.0;
      do {
          let dplusa = [String.fromCharCode(119,95,53,50,95,98,121,116,101,99,111,100,101,118,116,97,98,0), String.fromCharCode(97,112,112,114,111,118,97,108,95,116,95,53,56,0), String.fromCharCode(119,95,51,52,95,114,101,116,117,114,110,0)];
         crownf *= dplusa.length;
         if (crownf == 1188109) {
            break;
         }
      } while (((5 - crownf) <= 4 || 4 <= (crownf >> (Math.min(Math.abs(5), 3)))) && (crownf == 1188109));
         grayR *= parseFloat(`${3 * parseInt(`${grayR}`)}`);
         grayR *= parseFloat(`${parseInt(`${reactnativeultimatelistviewE}`) | 3}`);
         reactnativeultimatelistviewE += parseInt(`${gpayz}`) * 3;
      do {
          let e_hashV = String.fromCharCode(100,95,49,53,95,113,114,99,111,100,101,0);
          let alerto = 2;
          let nalyticsg = 3.0;
          let profileJ = String.fromCharCode(119,95,50,51,95,100,101,99,111,109,112,97,110,100,0);
         reactnativeultimatelistviewE += parseInt(`${reactnativeultimatelistviewE}`) + 1;
         e_hashV += `${alerto | 3}`;
         alerto |= profileJ.length;
         nalyticsg *= parseFloat(`${e_hashV.length ^ profileJ.length}`);
         if (reactnativeultimatelistviewE == 1847539.0) {
            break;
         }
      } while ((1.98 < (crownf - reactnativeultimatelistviewE) && 2.46 < (1.98 - reactnativeultimatelistviewE)) && (reactnativeultimatelistviewE == 1847539.0));
      materialt = new Map([[`${libcrashsdkt.size}`, 2 * penaltyshootp.length]]);
   while ((5 << (Math.min(5, penaltyshootp.length))) == 4) {
      penaltyshootp.push(3);
      break;
   }
   for (let h = 0; h < 3; h++) {
      penaltyshootp.push(penaltyshootp.length - 3);
   }

    const position = this.calculateVolumePositionFromVolume();
   while (linkp[`${materialt.size}`] == null) {
       let homeiconR = new Map([[String.fromCharCode(112,95,50,57,95,98,105,110,98,110,0),false ], [String.fromCharCode(100,95,52,57,95,122,98,105,110,0),false ]]);
      do {
          let mailp = new Map([[String.fromCharCode(117,110,115,105,103,110,101,100,95,102,95,53,57,0),560], [String.fromCharCode(99,111,110,99,101,97,108,101,100,95,98,95,55,51,0),689]]);
         homeiconR = new Map([[`${mailp.size}`, mailp.size ^ 1]]);
         if (1280799 == homeiconR.size) {
            break;
         }
      } while ((1280799 == homeiconR.size) && (Array.from(homeiconR.keys()).includes(`${homeiconR.size}`)));
      do {
          let downarrowh = String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,95,103,95,57,49,0);
          let graphicsi = 2;
          let libavfilter5 = String.fromCharCode(109,95,57,48,0);
         homeiconR[`${graphicsi}`] = graphicsi >> (Math.min(Math.abs(3), 5));
         downarrowh = "3";
         libavfilter5 += `${2 + libavfilter5.length}`;
         if (2622836 == homeiconR.size) {
            break;
         }
      } while ((Array.from(homeiconR.values()).includes(homeiconR.size)) && (2622836 == homeiconR.size));
         homeiconR[`${homeiconR.size}`] = homeiconR.size | 3;
      linkp = new Map([[`${materialt.size}`, 3 + penaltyshootp.length]]);
      break;
   }
   if (3 >= faviconz.length) {
      libcrashsdkt = new Map([[`${tempY}`, banner1.length - 3]]);
   }
   for (let n = 0; n < 3; n++) {
      banner1 = "2";
   }

    let state = this.state;
   for (let k = 0; k < 2; k++) {
      miniQ.push((3 % (Math.max(9, (tempY ? 3 : 5)))));
   }
       let nativel = new Map([[String.fromCharCode(122,95,55,54,95,115,105,109,117,108,97,116,111,114,0),String.fromCharCode(97,117,116,111,103,101,110,95,54,95,49,50,0)], [String.fromCharCode(115,119,114,101,115,97,109,112,108,101,114,101,115,95,120,95,51,49,0),String.fromCharCode(99,101,108,108,97,117,116,111,95,48,95,49,49,0)], [String.fromCharCode(101,95,49,51,95,105,110,103,114,101,115,115,0),String.fromCharCode(97,95,51,48,95,104,101,114,109,105,116,101,0)]]);
       let holderg = new Map([[String.fromCharCode(110,95,57,49,95,108,111,99,97,108,105,122,97,116,105,111,110,0),449], [String.fromCharCode(116,95,52,52,95,115,119,105,122,122,108,105,110,103,0),811]]);
      do {
          let toponX = String.fromCharCode(105,95,50,49,95,99,117,108,115,104,105,102,116,0);
          let executorO = 0.0;
          let iconarrowrightorange8 = 2.0;
          let predictiondefaultD = [459, 389, 183];
         nativel[`${predictiondefaultD.length}`] = 3 ^ nativel.size;
         toponX = `${parseInt(`${executorO}`)}`;
         executorO *= (String.fromCharCode(95,0) == toponX ? toponX.length : parseInt(`${executorO}`));
         iconarrowrightorange8 *= parseFloat(`${toponX.length ^ parseInt(`${executorO}`)}`);
         predictiondefaultD.push(parseInt(`${executorO}`) | toponX.length);
         if (nativel.size == 3032489) {
            break;
         }
      } while (((holderg.size % (Math.max(9, nativel.size))) >= 1) && (nativel.size == 3032489));
      do {
         nativel[`${holderg.size}`] = holderg.size;
         if (nativel.size == 1951134) {
            break;
         }
      } while ((holderg.size < nativel.size) && (nativel.size == 1951134));
      while (4 == (nativel.size % (Math.max(holderg.size, 2))) && (4 % (Math.max(8, nativel.size))) == 2) {
          let libturbomodulejsijnih = new Map([[String.fromCharCode(101,115,99,97,112,101,95,117,95,50,0),String.fromCharCode(117,95,55,55,95,115,117,112,112,111,114,116,115,0)], [String.fromCharCode(112,111,110,103,95,104,95,52,54,0),String.fromCharCode(100,95,51,56,95,100,111,103,0)], [String.fromCharCode(110,95,52,49,95,109,117,108,116,105,112,108,101,114,115,0),String.fromCharCode(115,101,110,100,109,115,103,95,98,95,54,56,0)]]);
          let arrowrightwithtailM = [879, 987];
         holderg = new Map([[`${holderg.size}`, libturbomodulejsijnih.size]]);
         libturbomodulejsijnih = new Map([[`${arrowrightwithtailM.length}`, 1 / (Math.max(3, arrowrightwithtailM.length))]]);
         break;
      }
          let chinaF = 1.0;
          let chartH = true;
          let smallbrightnessC = 4.0;
         nativel = new Map([[`${chartH}`, parseInt(`${chinaF}`) + 1]]);
         chinaF -= parseInt(`${smallbrightnessC}`) >> (Math.min(4, Math.abs(parseInt(`${smallbrightnessC}`))));
         chartH = (smallbrightnessC - smallbrightnessC) > 5.52;
         holderg = new Map([[`${nativel.size}`, holderg.size - nativel.size]]);
      do {
          let libjsie = 5;
          let textinpute = String.fromCharCode(115,102,116,112,95,117,95,55,49,0);
          let showV = 4.0;
         holderg = new Map([[`${holderg.size}`, 3 / (Math.max(8, parseInt(`${showV}`)))]]);
         libjsie += libjsie >> (Math.min(textinpute.length, 2));
         textinpute = `${1 >> (Math.min(1, textinpute.length))}`;
         showV *= parseFloat(`${textinpute.length}`);
         if (3463037 == holderg.size) {
            break;
         }
      } while ((holderg[`${nativel.size}`] == null) && (3463037 == holderg.size));
      tempY = singaporee;
       let bootsplashs = new Map([[String.fromCharCode(103,95,57,51,95,112,117,108,108,113,117,111,116,101,0),String.fromCharCode(119,95,50,95,104,100,101,99,0)], [String.fromCharCode(121,111,117,114,95,98,95,53,56,0),String.fromCharCode(120,95,55,54,95,103,104,97,115,104,0)]]);
       let libcxxcomponentsE = new Map([[String.fromCharCode(115,117,98,112,97,114,116,105,116,105,111,110,95,103,95,52,48,0),916], [String.fromCharCode(114,95,50,51,95,103,114,97,112,104,0),438], [String.fromCharCode(116,95,50,49,95,99,114,111,119,100,105,110,0),965]]);
         bootsplashs[`${bootsplashs.size}`] = libcxxcomponentsE.size;
          let utilsZ = String.fromCharCode(100,105,115,116,114,97,99,116,105,111,110,95,115,95,56,57,0);
         libcxxcomponentsE = new Map([[`${bootsplashs.size}`, bootsplashs.size]]);
         utilsZ = `${utilsZ.length + 1}`;
          let handler7 = String.fromCharCode(118,95,50,95,114,101,113,117,105,114,101,109,101,110,116,0);
          let referrerp = 4.0;
         bootsplashs = new Map([[`${bootsplashs.size}`, 2]]);
         handler7 += `${parseInt(`${referrerp}`)}`;
         referrerp *= parseInt(`${referrerp}`);
       let matchdetailbg6 = 5.0;
       let package_sd = 3.0;
          let largesoundy = 3;
          let libreactq = [999, 130, 914];
         libcxxcomponentsE = new Map([[`${libcxxcomponentsE.size}`, 2]]);
         largesoundy %= Math.max(libreactq.length, 3);
         libreactq.push(largesoundy % 1);
      while (2.29 == matchdetailbg6) {
         package_sd /= Math.max(3, 4);
         break;
      }
      libcrashsdkt[`${miniQ.length}`] = miniQ.length;

    this.setVolumePosition(position);
   for (let l = 0; l < 1; l++) {
      singaporee = !tempY;
   }
   if ((banner1.length | faviconz.length) <= 4) {
      faviconz.push(linkp.size << (Math.min(Math.abs(2), 3)));
   }
       let routerg = 5.0;
       let editY = 2.0;
       let componentregistrys = String.fromCharCode(108,95,56,95,97,110,105,109,97,116,101,100,0);
       let package_n8 = 1.0;
      do {
         componentregistrys = `${parseInt(`${package_n8}`)}`;
         if (componentregistrys == String.fromCharCode(117,54,51,53,51,55,0)) {
            break;
         }
      } while ((componentregistrys == String.fromCharCode(117,54,51,53,51,55,0)) && (!componentregistrys.startsWith(`${editY}`)));
         editY *= parseFloat(`${parseInt(`${package_n8}`)}`);
      do {
          let buttonI = String.fromCharCode(109,105,103,114,97,116,101,100,95,49,95,54,57,0);
          let libfileK = [344, 24];
          let greyarrowup3 = 3.0;
         package_n8 += parseInt(`${routerg}`) ^ parseInt(`${greyarrowup3}`);
         buttonI = `${libfileK.length & buttonI.length}`;
         libfileK = [libfileK.length * 2];
         greyarrowup3 *= libfileK.length << (Math.min(buttonI.length, 2));
         if (package_n8 == 1040941.0) {
            break;
         }
      } while (((3.50 + package_n8) == 4.15) && (package_n8 == 1040941.0));
         package_n8 -= parseInt(`${package_n8}`);
      for (let c = 0; c < 3; c++) {
          let change9 = false;
         routerg *= (parseInt(`${package_n8}`) ^ (change9 ? 4 : 3));
      }
          let incidentG = 3.0;
          let pushE = new Map([[String.fromCharCode(115,95,56,51,95,99,111,110,115,117,109,112,116,105,111,110,0),true ], [String.fromCharCode(115,95,54,49,95,116,111,107,101,110,115,0),true ], [String.fromCharCode(112,114,101,112,101,110,100,95,121,95,50,49,0),true ]]);
         editY *= parseFloat(`${1 & pushE.size}`);
         incidentG *= parseFloat(`${2 / (Math.max(parseInt(`${incidentG}`), 7))}`);
         pushE = new Map([[`${incidentG}`, 3 >> (Math.min(Math.abs(parseInt(`${incidentG}`)), 5))]]);
      for (let i = 0; i < 2; i++) {
          let episodeI = true;
          let private_7y = 4.0;
          let mintegralv = true;
          let handlerp = true;
         routerg *= 3;
         episodeI = private_7y <= 4.76;
         private_7y /= Math.max(4, (parseFloat(`${parseInt(`${private_7y}`) >> (Math.min(2, Math.abs((handlerp ? 3 : 1))))}`)));
         mintegralv = !mintegralv || !handlerp;
      }
      while ((editY * routerg) == 1.22) {
         routerg -= parseInt(`${editY}`);
         break;
      }
      banner1 = `${parseInt(`${malaysiaB}`) / 3}`;

    state.volumeOffset = position;
       let reactp = String.fromCharCode(98,95,49,53,95,99,106,112,101,103,0);
       let controlsV = String.fromCharCode(122,95,55,55,95,114,101,117,112,108,111,97,100,101,100,0);
         reactp += `${controlsV.length / 3}`;
         reactp += `${reactp.length}`;
      if (controlsV != String.fromCharCode(87,0) && 2 > reactp.length) {
          let reportb = [905, 850, 342];
          let videocommonf = String.fromCharCode(106,95,57,50,95,118,101,114,116,105,99,97,108,108,121,0);
          let static_sC = String.fromCharCode(116,95,52,49,95,115,121,109,98,111,108,105,99,97,116,101,0);
         controlsV += "2";
         reportb.push(videocommonf.length >> (Math.min(Math.abs(1), 2)));
         videocommonf += `${(videocommonf == String.fromCharCode(122,0) ? videocommonf.length : static_sC.length)}`;
         static_sC += `${static_sC.length & 1}`;
      }
         reactp = `${controlsV.length}`;
      for (let i = 0; i < 2; i++) {
          let logol = 0.0;
          let auto_i5x = 1;
          let iconwechatG = 1;
          let unselectedY = [String.fromCharCode(118,95,53,50,95,99,97,110,99,101,108,108,105,110,103,0), String.fromCharCode(111,119,110,101,100,95,108,95,56,55,0), String.fromCharCode(110,95,48,95,111,118,112,97,103,101,0)];
         reactp = `${auto_i5x + reactp.length}`;
         logol -= iconwechatG;
         auto_i5x %= Math.max(2 | unselectedY.length, 2);
         iconwechatG ^= 2 ^ iconwechatG;
         unselectedY = [iconwechatG];
      }
         controlsV += `${controlsV.length}`;
      banner1 += `${((singaporee ? 4 : 3) / (Math.max(2, 3)))}`;
   while ((libcrashsdkt.size % 2) <= 4) {
      tempY = materialt.size >= 30;
      break;
   }
   while (5 <= (banner1.length / 3)) {
      banner1 += "1";
      break;
   }

    this.mounted = true;
   do {
      malaysiaB /= Math.max((parseFloat(`${1 >> (Math.min(1, Math.abs((singaporee ? 1 : 5))))}`)), 5);
      if (2511418.0 == malaysiaB) {
         break;
      }
   } while ((malaysiaB <= 1.54) && (2511418.0 == malaysiaB));
   for (let s = 0; s < 3; s++) {
      faviconz = [((tempY ? 2 : 5) * materialt.size)];
   }
   while (!banner1.includes(`${singaporee}`)) {
      singaporee = untickw >= materialt.size;
      break;
   }


    this.setState(state);
   if (!miniQ.includes(malaysiaB)) {
      miniQ.push(banner1.length << (Math.min(4, Math.abs(parseInt(`${untickw}`)))));
   }
   for (let m = 0; m < 3; m++) {
       let pangles = 1.0;
       let progress_ = [66, 631, 190];
       let castingd = String.fromCharCode(99,118,99,95,108,95,52,52,0);
         progress_.push(castingd.length + progress_.length);
       let sportsp = new Map([[String.fromCharCode(115,101,118,101,110,95,102,95,51,0),277], [String.fromCharCode(97,109,112,108,105,116,117,100,101,95,105,95,50,52,0),858]]);
      for (let i = 0; i < 2; i++) {
         pangles -= parseFloat(`${1 | sportsp.size}`);
      }
         progress_ = [3];
          let styleO = new Map([[String.fromCharCode(121,117,118,112,97,99,107,101,100,95,108,95,56,49,0),false ], [String.fromCharCode(113,95,51,49,95,112,97,114,116,105,99,105,112,97,116,105,110,103,0),true ], [String.fromCharCode(113,95,51,57,95,119,101,98,115,0),false ]]);
         progress_.push(2 * parseInt(`${pangles}`));
         styleO = new Map([[`${styleO.size}`, 1 + styleO.size]]);
          let modeW = 5.0;
          let member_ = [969, 901, 871];
          let hooksL = [380, 235, 185];
         pangles += parseFloat(`${2}`);
         modeW += parseFloat(`${2}`);
         member_.push(parseInt(`${modeW}`));
         hooksL.push(1);
          let gpayO = 0;
          let flipperU = new Map([[String.fromCharCode(104,95,54,52,95,101,109,117,108,97,116,105,111,110,0),665], [String.fromCharCode(108,95,50,57,95,102,105,110,100,101,112,0),835]]);
          let fillT = String.fromCharCode(116,114,97,110,115,112,111,114,116,115,95,112,95,53,48,0);
         castingd += `${3 << (Math.min(5, progress_.length))}`;
         gpayO ^= 1;
         flipperU = new Map([[fillT, 2 / (Math.max(6, fillT.length))]]);
      for (let e = 0; e < 2; e++) {
         pangles -= parseFloat(`${parseInt(`${pangles}`) + 2}`);
      }
      for (let f = 0; f < 2; f++) {
         progress_ = [2];
      }
      mergerk /= Math.max(parseFloat(`${2 - parseInt(`${pangles}`)}`), 2);
   }
   if (3 >= (materialt.size >> (Math.min(Math.abs(4), 4)))) {
      untickw -= 3;
   }

  }

   
  componentWillUnmount() {
       let form2 = String.fromCharCode(105,112,112,108,101,95,97,95,56,0);
    let encryptorn = true;
    let binddatasF = [String.fromCharCode(102,95,50,48,95,105,110,115,116,97,108,108,0), String.fromCharCode(110,95,52,55,95,106,115,111,110,114,112,99,0), String.fromCharCode(119,95,53,55,95,112,101,114,115,105,115,116,101,110,116,0)];
    let mathA = true;
    let exampleimageI = String.fromCharCode(115,97,108,116,95,98,95,52,55,0);
    let showl = 0.0;
    let libjsijniprofiler1 = 3.0;
    let libavfilter6 = 2.0;
    let filledh = String.fromCharCode(97,108,101,114,116,115,95,112,95,52,56,0);
    let libavcodecA = String.fromCharCode(107,95,54,52,95,115,111,114,101,99,101,105,118,101,0);
    let w_unlockR = true;
    let runtimew = true;
    let subbasketballplayerp = String.fromCharCode(106,95,52,52,95,110,105,100,110,105,115,116,0);
   for (let d = 0; d < 1; d++) {
      showl *= parseInt(`${libjsijniprofiler1}`);
   }
      mathA = filledh.length == 78;
   for (let v = 0; v < 3; v++) {
       let away3 = String.fromCharCode(108,95,49,52,95,100,105,115,97,98,108,101,115,0);
       let vignetteF = String.fromCharCode(100,101,98,108,111,99,107,95,55,95,50,51,0);
      for (let i = 0; i < 1; i++) {
          let anythink9 = 4.0;
          let iconbackwhiteh = [725, 865];
          let homeicon3 = String.fromCharCode(102,114,97,109,101,105,110,102,111,95,98,95,55,56,0);
          let libavformatP = 2.0;
         vignetteF = `${iconbackwhiteh.length ^ 3}`;
         anythink9 *= parseFloat(`${parseInt(`${libavformatP}`) ^ parseInt(`${anythink9}`)}`);
         iconbackwhiteh.push(2 & homeicon3.length);
         homeicon3 = `${1 & parseInt(`${anythink9}`)}`;
         libavformatP /= Math.max(parseInt(`${libavformatP}`), 1);
      }
         vignetteF = "3";
      do {
         away3 = `${(String.fromCharCode(57,0) == vignetteF ? vignetteF.length : away3.length)}`;
         if (String.fromCharCode(109,119,117,106,115,95,107,102,106,0) == away3) {
            break;
         }
      } while ((String.fromCharCode(109,119,117,106,115,95,107,102,106,0) == away3) && (!away3.startsWith(vignetteF)));
          let iconbackwhitek = 5.0;
          let holderw = String.fromCharCode(122,95,57,56,95,109,105,103,114,97,116,105,110,103,0);
          let episodesz = 0.0;
         away3 = `${parseInt(`${episodesz}`) % 1}`;
         iconbackwhitek -= 1 >> (Math.min(1, Math.abs(parseInt(`${iconbackwhitek}`))));
         holderw = `${(holderw == String.fromCharCode(95,0) ? parseInt(`${iconbackwhitek}`) : holderw.length)}`;
         episodesz -= holderw.length - 3;
      if (away3 != String.fromCharCode(87,0)) {
          let langa = 2;
          let time_c8 = String.fromCharCode(117,95,52,49,95,102,114,111,109,98,121,116,101,115,0);
          let whistle8 = true;
         vignetteF += `${vignetteF.length | langa}`;
         langa += 1;
         time_c8 = `${(String.fromCharCode(88,0) == time_c8 ? time_c8.length : (whistle8 ? 5 : 4))}`;
      }
      for (let a = 0; a < 2; a++) {
         away3 += `${(String.fromCharCode(84,0) == vignetteF ? away3.length : vignetteF.length)}`;
      }
      w_unlockR = form2 == String.fromCharCode(81,0) && 19 >= vignetteF.length;
   }
      encryptorn = (((w_unlockR ? 21 : filledh.length) ^ filledh.length) <= 21);
   if ((showl / (Math.max(exampleimageI.length, 4))) > 5.58 && (parseInt(`${showl}`) / (Math.max(4, 3))) > 1) {
      exampleimageI = `${libavcodecA.length}`;
   }
   do {
      w_unlockR = 26 < exampleimageI.length;
      if (w_unlockR ? !w_unlockR : w_unlockR) {
         break;
      }
   } while ((w_unlockR) && (w_unlockR ? !w_unlockR : w_unlockR));
   do {
      runtimew = String.fromCharCode(78,0) == filledh && libjsijniprofiler1 > 6.8;
      if (runtimew ? !runtimew : runtimew) {
         break;
      }
   } while ((libavcodecA.length <= 1) && (runtimew ? !runtimew : runtimew));
   while (1 >= filledh.length) {
       let logos = 4;
       let specJ = false;
       let alertl = String.fromCharCode(113,117,105,99,95,111,95,50,49,0);
       let floaterR = String.fromCharCode(116,111,107,104,122,95,101,95,55,56,0);
       let textl = [188, 382];
         specJ = textl.length < 1;
      if (logos <= 3) {
         logos ^= 3;
      }
         alertl += "2";
          let textlayoutmanagerY = [533, 965, 685];
         floaterR += `${textl.length}`;
         textlayoutmanagerY.push(textlayoutmanagerY.length);
       let close6 = String.fromCharCode(115,95,50,51,95,107,105,115,115,0);
       let faviconJ = 0;
         textl = [(3 & (specJ ? 3 : 4))];
      while (2 == (textl.length / (Math.max(5, 8))) || 2 == (textl.length / 5)) {
          let profileactiveJ = 3.0;
          let updatesm = [String.fromCharCode(117,95,57,53,95,119,101,108,99,104,0), String.fromCharCode(108,95,51,52,95,99,112,120,0), String.fromCharCode(111,95,52,49,95,115,116,114,107,0)];
          let handlerg = 2;
          let twitterO = String.fromCharCode(110,95,56,51,95,112,101,114,102,0);
          let albumq = 1;
         textl.push(close6.length ^ 1);
         profileactiveJ -= parseFloat(`${handlerg}`);
         updatesm.push(updatesm.length);
         handlerg &= handlerg + 1;
         twitterO = `${albumq << (Math.min(twitterO.length, 3))}`;
         albumq %= Math.max(4, 2 ^ twitterO.length);
         break;
      }
      do {
         floaterR += `${floaterR.length}`;
         if (floaterR.length == 147723) {
            break;
         }
      } while ((floaterR.length == 147723) && (close6 != String.fromCharCode(70,0)));
          let pingM = new Map([[String.fromCharCode(101,120,99,108,117,100,101,115,95,53,95,50,55,0),979], [String.fromCharCode(115,95,50,52,95,114,101,115,111,108,118,101,0),92], [String.fromCharCode(114,101,102,108,101,99,116,95,114,95,50,49,0),632]]);
         faviconJ %= Math.max(3, 3);
         pingM[`${pingM.size}`] = pingM.size;
      for (let j = 0; j < 2; j++) {
         floaterR = `${alertl.length}`;
      }
         logos += textl.length;
      if (textl.length == 3) {
         textl = [alertl.length];
      }
      if (5 >= (faviconJ ^ 5) && 5 >= (5 ^ faviconJ)) {
         faviconJ %= Math.max((close6 == String.fromCharCode(84,0) ? close6.length : textl.length), 5);
      }
      for (let d = 0; d < 1; d++) {
         floaterR = `${textl.length}`;
      }
      runtimew = !specJ;
      break;
   }
      libavfilter6 += ((encryptorn ? 1 : 2) << (Math.min(4, Math.abs((w_unlockR ? 5 : 5)))));
   for (let x = 0; x < 3; x++) {
      runtimew = (!encryptorn ? !w_unlockR : encryptorn);
   }
      libavfilter6 += filledh.length + 2;

    this.mounted = false;
      runtimew = !encryptorn;
      runtimew = libavcodecA.length < 74 || encryptorn;
      exampleimageI += `${((mathA ? 4 : 5) & (encryptorn ? 2 : 5))}`;
      encryptorn = filledh.includes(`${w_unlockR}`);
   do {
      showl += parseInt(`${libavfilter6}`) / (Math.max(filledh.length, 3));
      if (showl == 1270407.0) {
         break;
      }
   } while ((showl == 1270407.0) && (!libavcodecA.startsWith(`${showl}`)));
      form2 = `${2 - parseInt(`${libavfilter6}`)}`;
   do {
       let androidB = new Map([[String.fromCharCode(106,111,117,114,110,97,108,95,111,95,54,54,0),false ], [String.fromCharCode(102,95,52,55,95,114,101,99,111,103,110,105,116,105,111,110,0),false ]]);
       let mimeL = new Map([[String.fromCharCode(112,111,115,116,102,105,120,95,97,95,52,56,0),true ], [String.fromCharCode(104,95,49,54,95,102,111,117,114,120,109,0),true ]]);
       let moviesJ = 3.0;
          let orangedownarrowZ = String.fromCharCode(110,111,116,99,104,101,100,95,116,95,49,56,0);
         mimeL = new Map([[`${mimeL.size}`, mimeL.size]]);
         orangedownarrowZ += `${orangedownarrowZ.length}`;
          let philippinesb = String.fromCharCode(100,95,54,57,95,115,101,99,117,114,101,0);
          let termsM = 3;
          let codeq = 2;
         mimeL[`${moviesJ}`] = parseInt(`${moviesJ}`) + mimeL.size;
         philippinesb += `${termsM}`;
         codeq >>= Math.min(Math.abs(3), 5);
         mimeL[`${moviesJ}`] = 1 % (Math.max(2, parseInt(`${moviesJ}`)));
          let floater3 = true;
          let white2 = String.fromCharCode(101,120,112,111,114,116,95,97,95,49,54,0);
          let eventD = 0.0;
         moviesJ -= white2.length;
         floater3 = floater3 || eventD >= 38.85;
         white2 = `${(parseInt(`${eventD}`) * (floater3 ? 3 : 3))}`;
      while (4.44 == (moviesJ / (Math.max(1.84, 2)))) {
         mimeL = new Map([[`${androidB.size}`, androidB.size]]);
         break;
      }
         mimeL = new Map([[`${androidB.size}`, mimeL.size]]);
      do {
         mimeL = new Map([[`${mimeL.size}`, 1]]);
         if (697324 == mimeL.size) {
            break;
         }
      } while ((697324 == mimeL.size) && ((mimeL.size * parseInt(`${moviesJ}`)) <= 4));
         mimeL[`${moviesJ}`] = androidB.size;
         androidB = new Map([[`${mimeL.size}`, 1]]);
      binddatasF.push(filledh.length + parseInt(`${libjsijniprofiler1}`));
      if (3778356 == binddatasF.length) {
         break;
      }
   } while ((4 <= (binddatasF.length & 2) || (binddatasF.length & 2) <= 3) && (3778356 == binddatasF.length));
       let libjsib = [739, 596];
       let imagenomoredata9 = String.fromCharCode(113,112,105,115,95,54,95,54,56,0);
       let vignetteP = 1.0;
      if (4 >= (2 >> (Math.min(2, imagenomoredata9.length))) && 1 >= (imagenomoredata9.length >> (Math.min(Math.abs(2), 1)))) {
         imagenomoredata9 += `${(String.fromCharCode(80,0) == imagenomoredata9 ? imagenomoredata9.length : parseInt(`${vignetteP}`))}`;
      }
      for (let b = 0; b < 2; b++) {
         imagenomoredata9 = `${imagenomoredata9.length}`;
      }
          let untickc = [25, 781, 418];
          let moonM = String.fromCharCode(105,95,56,50,95,112,115,121,109,111,100,101,108,0);
          let flyerw = 3.0;
         libjsib.push(3);
         untickc.push(1);
         moonM += "1";
         flyerw /= Math.max(5, 3 & parseInt(`${flyerw}`));
         imagenomoredata9 = `${libjsib.length}`;
      do {
          let countryn = 5.0;
         imagenomoredata9 += `${libjsib.length << (Math.min(imagenomoredata9.length, 1))}`;
         countryn += parseFloat(`${parseInt(`${countryn}`) >> (Math.min(4, Math.abs(3)))}`);
         if (981963 == imagenomoredata9.length) {
            break;
         }
      } while ((981963 == imagenomoredata9.length) && ((vignetteP / 5.53) < 2.67 && 4.95 < (vignetteP / 5.53)));
          let hoverZ = 1.0;
         vignetteP /= Math.max(parseInt(`${hoverZ}`), 5);
         vignetteP -= 2 + libjsib.length;
         vignetteP *= libjsib.length >> (Math.min(imagenomoredata9.length, 3));
      while (2.34 == vignetteP) {
          let stationsj = true;
          let detailL = 3.0;
          let render9 = String.fromCharCode(98,95,54,49,95,119,109,118,100,97,116,97,0);
          let clubv = true;
         imagenomoredata9 = `${(parseInt(`${vignetteP}`) - (stationsj ? 1 : 5))}`;
         stationsj = render9.endsWith(`${clubv}`);
         detailL *= ((clubv ? 2 : 2) % (Math.max(2, parseInt(`${detailL}`))));
         render9 += `${((clubv ? 5 : 1))}`;
         break;
      }
      binddatasF.push(libjsib.length);
       let photoM = String.fromCharCode(113,95,56,95,99,108,111,115,101,100,0);
       let predictionarrowF = String.fromCharCode(114,101,106,101,99,116,95,116,95,51,53,0);
         photoM = `${1 - photoM.length}`;
      do {
          let imagesK = true;
          let owngoalc = new Map([[String.fromCharCode(105,100,99,116,120,100,99,95,107,95,54,55,0),true ], [String.fromCharCode(115,105,103,110,97,108,105,110,103,95,107,95,52,0),true ], [String.fromCharCode(99,95,54,95,105,110,118,97,108,105,100,97,116,101,100,0),false ]]);
          let suggestionr = String.fromCharCode(98,116,110,99,108,105,99,107,95,107,95,57,0);
         photoM += `${((imagesK ? 3 : 3) | predictionarrowF.length)}`;
         imagesK = suggestionr.length > 36 && 36 > owngoalc.size;
         owngoalc = new Map([[`${owngoalc.size}`, suggestionr.length * owngoalc.size]]);
         if (photoM.length == 972779) {
            break;
         }
      } while ((photoM.length == 972779) && (!photoM.includes(`${predictionarrowF.length}`)));
         photoM += "3";
          let auto_9vQ = String.fromCharCode(118,95,50,49,95,117,110,105,111,110,0);
         photoM += `${(String.fromCharCode(101,0) == photoM ? photoM.length : auto_9vQ.length)}`;
      for (let y = 0; y < 3; y++) {
         predictionarrowF += `${1 | predictionarrowF.length}`;
      }
      for (let g = 0; g < 3; g++) {
         photoM += `${(photoM == String.fromCharCode(79,0) ? photoM.length : predictionarrowF.length)}`;
      }
      binddatasF = [exampleimageI.length];
       let reactnavigation5 = String.fromCharCode(99,111,100,101,99,100,97,116,97,95,97,95,56,48,0);
         reactnavigation5 += `${reactnavigation5.length}`;
      while (reactnavigation5.length < 3) {
         reactnavigation5 = `${(reactnavigation5 == String.fromCharCode(85,0) ? reactnavigation5.length : reactnavigation5.length)}`;
         break;
      }
         reactnavigation5 = `${reactnavigation5.length}`;
      form2 = `${3 / (Math.max(9, exampleimageI.length))}`;
      libavfilter6 -= (1 & (w_unlockR ? 5 : 3));

    this.clearControlTimeout();
   if (binddatasF.length < 4 && (4 / (Math.max(8, binddatasF.length))) < 1) {
      mathA = 99.96 > libavfilter6 || form2 == String.fromCharCode(103,0);
   }
      filledh += `${(form2.length | (runtimew ? 1 : 3))}`;
      libavcodecA += `${libavcodecA.length | 1}`;
       let componentY = String.fromCharCode(109,111,100,101,109,95,102,95,57,0);
         componentY = "1";
      for (let z = 0; z < 2; z++) {
         componentY = `${componentY.length % (Math.max(2, componentY.length))}`;
      }
      while (!componentY.startsWith(`${componentY.length}`)) {
          let c_position5 = 4.0;
          let smallT = [438, 13, 326];
          let showlessK = 2.0;
          let iconwatchnowF = true;
          let unticke = 3;
         componentY = `${unticke << (Math.min(3, Math.abs(1)))}`;
         c_position5 += 2 / (Math.max(parseInt(`${c_position5}`), 7));
         smallT = [((iconwatchnowF ? 4 : 5) | smallT.length)];
         showlessK -= parseInt(`${showlessK}`) + 1;
         iconwatchnowF = showlessK > 3.9;
         unticke %= Math.max(4, ((iconwatchnowF ? 4 : 2) + parseInt(`${showlessK}`)));
         break;
      }
      libjsijniprofiler1 /= Math.max(3 * parseInt(`${showl}`), 1);
   do {
      runtimew = filledh == String.fromCharCode(101,0);
      if (runtimew ? !runtimew : runtimew) {
         break;
      }
   } while ((!filledh.endsWith(`${runtimew}`)) && (runtimew ? !runtimew : runtimew));
      form2 += `${form2.length}`;
      exampleimageI = `${parseInt(`${libjsijniprofiler1}`)}`;
       let middles = 3;
       let trophyr = String.fromCharCode(108,95,57,48,95,109,100,112,114,0);
      do {
         trophyr = `${3 << (Math.min(4, trophyr.length))}`;
         if (String.fromCharCode(97,111,109,100,0) == trophyr) {
            break;
         }
      } while ((String.fromCharCode(97,111,109,100,0) == trophyr) && (2 <= (middles ^ 5) && (middles ^ trophyr.length) <= 5));
         middles -= middles ^ trophyr.length;
          let countdownH = String.fromCharCode(112,114,105,111,114,105,116,121,113,95,111,95,57,55,0);
          let kick4 = false;
          let roomf = true;
         trophyr += `${1 | trophyr.length}`;
         countdownH += `${((kick4 ? 4 : 5) - 3)}`;
         kick4 = (kick4 ? !roomf : !kick4);
      if (3 < (5 & trophyr.length) && 5 < (middles & trophyr.length)) {
         middles += middles % (Math.max(4, trophyr.length));
      }
         trophyr = `${middles}`;
      if (trophyr.includes(`${middles}`)) {
         middles <<= Math.min(trophyr.length, 3);
      }
      w_unlockR = encryptorn;
       let splashu = 0;
       let layoutN = String.fromCharCode(97,116,111,109,105,99,111,112,115,95,97,95,55,55,0);
       let libcxxcomponentsh = 2.0;
         splashu -= layoutN.length;
         splashu >>= Math.min(Math.abs(layoutN.length + 1), 2);
         splashu &= parseInt(`${libcxxcomponentsh}`) | splashu;
         splashu <<= Math.min(Math.abs(parseInt(`${libcxxcomponentsh}`) | 3), 3);
         layoutN = `${parseInt(`${libcxxcomponentsh}`) % (Math.max(3, layoutN.length))}`;
      if ((libcxxcomponentsh + 1.84) <= 1.89) {
         layoutN = `${splashu}`;
      }
      if ((layoutN.length * splashu) == 3) {
         layoutN += "3";
      }
          let iconarrowrighth = [175, 425];
         libcxxcomponentsh *= splashu + iconarrowrighth.length;
          let pangleh = 1.0;
          let q_managerF = String.fromCharCode(118,105,101,119,115,95,117,95,57,55,0);
          let mappingw = 1.0;
         layoutN += `${(String.fromCharCode(78,0) == q_managerF ? parseInt(`${pangleh}`) : q_managerF.length)}`;
         pangleh *= parseFloat(`${parseInt(`${mappingw}`)}`);
      filledh = `${subbasketballplayerp.length}`;
      showl += parseInt(`${libjsijniprofiler1}`) >> (Math.min(3, Math.abs(2)));
       let fullscreenminE = String.fromCharCode(102,95,53,57,95,115,99,111,112,101,115,0);
       let filla = String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,99,95,52,53,0);
      if (fullscreenminE.includes(filla)) {
         filla = `${(String.fromCharCode(77,0) == fullscreenminE ? filla.length : fullscreenminE.length)}`;
      }
      if (5 > filla.length) {
         filla = `${fullscreenminE.length}`;
      }
      while (fullscreenminE.endsWith(`${filla.length}`)) {
         filla += `${(String.fromCharCode(120,0) == fullscreenminE ? filla.length : fullscreenminE.length)}`;
         break;
      }
          let member0 = String.fromCharCode(110,95,57,57,95,100,111,102,102,115,101,116,115,0);
          let collectionm = String.fromCharCode(97,118,114,101,115,97,109,112,108,101,114,101,115,95,114,95,55,52,0);
         filla = "2";
         member0 = `${member0.length}`;
         collectionm = `${collectionm.length % 1}`;
         filla = `${filla.length >> (Math.min(1, fullscreenminE.length))}`;
         filla = `${fullscreenminE.length & filla.length}`;
      showl /= Math.max(4, (filledh == String.fromCharCode(74,0) ? parseInt(`${showl}`) : filledh.length));

  }

   
  initSeekPanResponder() {
       let settingY = String.fromCharCode(118,99,111,119,112,116,114,95,116,95,56,48,0);
    let audiencen = String.fromCharCode(99,111,108,111,114,95,113,95,51,48,0);
    let faviconh = String.fromCharCode(112,114,111,103,114,101,115,105,118,101,95,110,95,54,56,0);
    let informationl = String.fromCharCode(103,101,110,115,95,107,95,57,48,0);
    let homeplayerV = 5.0;
    let shirtY = String.fromCharCode(104,112,97,114,97,109,115,95,112,95,52,48,0);
    let scrollview9 = [344, 277, 219];
    let sigmobv = new Map([[String.fromCharCode(108,105,98,114,97,114,105,101,115,95,101,95,49,55,0),853], [String.fromCharCode(115,120,110,101,116,95,117,95,55,54,0),879]]);
    let libfbK = 5.0;
    let greyarrowupv = 3.0;
    let libswscalex = String.fromCharCode(98,117,102,102,101,114,115,95,116,95,55,57,0);
    let projectO = [String.fromCharCode(117,95,52,49,95,115,99,114,111,108,108,101,100,0), String.fromCharCode(102,95,49,56,95,97,110,105,109,97,116,105,110,103,0)];
      faviconh += `${informationl.length * 1}`;

    this.player.seekPanResponder = PanResponder.create({
      
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,

       
      onPanResponderGrant: (evt, gestureState) => {
        let state = this.state;
      shirtY = `${faviconh.length}`;

        this.clearControlTimeout();
   while (shirtY.length < 5) {
       let twitterA = String.fromCharCode(102,111,114,109,97,116,117,95,111,95,51,54,0);
      do {
          let defaultfootballbg5 = [276, 946];
          let philippines1 = String.fromCharCode(102,108,97,115,104,105,110,103,95,51,95,51,55,0);
          let textinputR = String.fromCharCode(115,97,100,120,120,95,106,95,52,51,0);
         twitterA += "3";
         defaultfootballbg5 = [textinputR.length];
         philippines1 = `${(philippines1 == String.fromCharCode(88,0) ? philippines1.length : defaultfootballbg5.length)}`;
         textinputR = `${(philippines1 == String.fromCharCode(102,0) ? philippines1.length : textinputR.length)}`;
         if (twitterA.length == 2271965) {
            break;
         }
      } while ((3 >= twitterA.length) && (twitterA.length == 2271965));
      if (!twitterA.endsWith(twitterA)) {
          let render5 = String.fromCharCode(122,95,53,52,95,116,114,97,110,115,108,97,116,101,100,0);
          let iconnotificationnewm = String.fromCharCode(104,111,115,116,95,97,95,52,50,0);
          let armva9 = 2.0;
          let emojiV = new Map([[String.fromCharCode(117,95,50,54,95,115,99,111,112,101,100,0),String.fromCharCode(102,99,104,111,119,110,95,102,95,49,49,0)], [String.fromCharCode(117,95,50,95,109,98,99,109,112,0),String.fromCharCode(105,95,54,50,95,99,110,97,109,101,0)], [String.fromCharCode(97,112,112,108,101,95,118,95,57,48,0),String.fromCharCode(112,95,55,57,95,97,110,105,109,97,116,105,111,110,115,0)]]);
         twitterA += `${iconnotificationnewm.length << (Math.min(5, Math.abs(emojiV.size)))}`;
         render5 += `${parseInt(`${armva9}`)}`;
         iconnotificationnewm += `${render5.length | 3}`;
         armva9 *= parseFloat(`${render5.length & parseInt(`${armva9}`)}`);
         emojiV = new Map([[`${armva9}`, (render5 == String.fromCharCode(67,0) ? parseInt(`${armva9}`) : render5.length)]]);
      }
         twitterA = `${(String.fromCharCode(110,0) == twitterA ? twitterA.length : twitterA.length)}`;
      audiencen = `${shirtY.length}`;
      break;
   }

        const position = evt.nativeEvent.locationX;
      audiencen += `${faviconh.length}`;

        this.setSeekerPosition(position);
   for (let g = 0; g < 1; g++) {
      settingY = `${settingY.length}`;
   }

        state.seeking = true;
   if ((4 + faviconh.length) <= 3 || 2 <= (4 + faviconh.length)) {
      faviconh += `${informationl.length >> (Math.min(shirtY.length, 3))}`;
   }

        state.originallyPaused = state.paused;
      homeplayerV -= 2;

        state.scrubbing = false;
   for (let q = 0; q < 1; q++) {
      informationl += `${1 & informationl.length}`;
   }

        if (this.player.scrubbingTimeStep > 0) {

      shirtY = `${sigmobv.size ^ 2}`;
          state.paused = true;
   do {
      faviconh += "1";
      if (2569403 == faviconh.length) {
         break;
      }
   } while ((2569403 == faviconh.length) && (5 == (2 - faviconh.length) || 3 == (2 >> (Math.min(1, faviconh.length)))));

        }
        this.setState(state);
      audiencen += `${(settingY == String.fromCharCode(99,0) ? settingY.length : parseInt(`${homeplayerV}`))}`;

      },

       
      onPanResponderMove: (evt, gestureState) => {
        const position = this.state.seekerOffset + gestureState.dx;
   for (let i = 0; i < 2; i++) {
       let clubF = String.fromCharCode(108,95,50,57,95,109,111,110,103,111,0);
       let encrypt3 = [112, 850];
       let attributedstringw = String.fromCharCode(112,108,97,99,101,109,97,114,107,115,95,100,95,52,56,0);
       let basketballplayerplaceholderY = 5;
      for (let o = 0; o < 3; o++) {
         attributedstringw = `${attributedstringw.length >> (Math.min(5, Math.abs(basketballplayerplaceholderY)))}`;
      }
         basketballplayerplaceholderY &= attributedstringw.length;
         encrypt3.push(encrypt3.length & basketballplayerplaceholderY);
          let appsh = 0.0;
         encrypt3.push((attributedstringw == String.fromCharCode(119,0) ? parseInt(`${appsh}`) : attributedstringw.length));
         clubF = "1";
         encrypt3 = [encrypt3.length];
          let unreade = String.fromCharCode(117,112,115,97,109,112,108,101,95,107,95,54,50,0);
          let episodesh = String.fromCharCode(115,95,53,49,95,98,117,102,102,101,114,0);
          let yellowcirclebgM = new Map([[String.fromCharCode(101,98,117,114,95,120,95,49,48,48,0),551], [String.fromCharCode(97,95,57,95,99,117,115,116,111,109,105,122,101,114,0),861], [String.fromCharCode(108,95,50,48,95,100,101,108,116,97,115,0),732]]);
         attributedstringw = "3";
         unreade += `${3 * yellowcirclebgM.size}`;
         episodesh = "2";
         yellowcirclebgM[episodesh] = (episodesh == String.fromCharCode(121,0) ? episodesh.length : unreade.length);
         encrypt3.push((String.fromCharCode(48,0) == attributedstringw ? attributedstringw.length : encrypt3.length));
         encrypt3.push((attributedstringw == String.fromCharCode(104,0) ? attributedstringw.length : encrypt3.length));
          let hoverL = String.fromCharCode(119,101,108,99,104,95,100,95,53,52,0);
         basketballplayerplaceholderY -= 3 & clubF.length;
         hoverL += `${hoverL.length}`;
      for (let f = 0; f < 2; f++) {
         basketballplayerplaceholderY |= 1;
      }
         clubF += `${3 << (Math.min(2, encrypt3.length))}`;
      shirtY += `${parseInt(`${libfbK}`) / (Math.max(1, attributedstringw.length))}`;
   }

        this.setSeekerPosition(position);
   while (5 <= shirtY.length && 5 <= faviconh.length) {
       let bootsplasht = String.fromCharCode(114,95,54,52,95,101,120,101,99,117,116,101,100,0);
       let anytimea = new Map([[String.fromCharCode(99,111,100,101,95,48,95,54,52,0),true ], [String.fromCharCode(103,95,53,48,95,115,117,99,99,101,115,115,99,98,0),true ]]);
         bootsplasht = "3";
         bootsplasht = `${(String.fromCharCode(48,0) == bootsplasht ? bootsplasht.length : anytimea.size)}`;
      for (let u = 0; u < 3; u++) {
         anytimea = new Map([[`${anytimea.size}`, (bootsplasht == String.fromCharCode(103,0) ? bootsplasht.length : anytimea.size)]]);
      }
      for (let t = 0; t < 3; t++) {
         bootsplasht += `${bootsplasht.length}`;
      }
         bootsplasht += `${anytimea.size * 1}`;
      while (1 > bootsplasht.length) {
         bootsplasht += `${bootsplasht.length}`;
         break;
      }
      shirtY = `${(String.fromCharCode(51,0) == shirtY ? shirtY.length : scrollview9.length)}`;
      break;
   }

        let state = this.state;
       let e_lockh = String.fromCharCode(115,97,118,101,105,95,57,95,57,52,0);
       let inouttargetredj = String.fromCharCode(114,101,117,115,97,98,108,101,95,49,95,52,51,0);
          let fieldM = String.fromCharCode(106,95,57,49,95,116,104,114,109,97,116,0);
         e_lockh = `${e_lockh.length / 2}`;
         fieldM += `${fieldM.length >> (Math.min(fieldM.length, 2))}`;
      while (e_lockh.length <= inouttargetredj.length) {
          let iconcalendar9 = 4.0;
          let libfbjnia = String.fromCharCode(103,95,53,50,95,116,104,114,101,97,100,0);
          let libflipperi = 2.0;
          let popup2 = false;
         inouttargetredj = `${inouttargetredj.length << (Math.min(2, e_lockh.length))}`;
         iconcalendar9 -= (parseInt(`${libflipperi}`) | (popup2 ? 3 : 5));
         libfbjnia += `${((popup2 ? 1 : 3))}`;
         libflipperi *= parseFloat(`${libfbjnia.length}`);
         break;
      }
       let fileI = String.fromCharCode(109,95,57,54,95,116,101,115,116,105,109,103,97,114,105,0);
       let statisticsinactive5 = String.fromCharCode(118,116,97,103,95,115,95,57,0);
      for (let n = 0; n < 2; n++) {
          let wnewsL = String.fromCharCode(117,95,56,49,95,105,110,99,111,109,105,110,103,0);
          let next1 = 0.0;
          let crosso = 5;
          let homeplayerw = String.fromCharCode(109,95,57,53,95,114,101,97,108,108,111,99,97,116,101,0);
          let analyticsd = new Map([[String.fromCharCode(112,95,55,95,114,97,100,105,97,108,0),278], [String.fromCharCode(106,95,49,50,95,104,121,115,99,97,108,101,0),5], [String.fromCharCode(117,95,49,95,99,121,99,108,105,99,114,101,102,114,101,115,104,0),585]]);
         fileI += `${inouttargetredj.length}`;
         wnewsL += `${homeplayerw.length & 1}`;
         next1 *= parseFloat(`${parseInt(`${next1}`) | analyticsd.size}`);
         crosso &= homeplayerw.length >> (Math.min(Math.abs(1), 1));
         analyticsd[`${crosso}`] = wnewsL.length;
      }
         inouttargetredj += `${fileI.length % 1}`;
         inouttargetredj = `${e_lockh.length - fileI.length}`;
      shirtY = `${inouttargetredj.length}`;


        if (
          this.player.scrubbingTimeStep > 0 &&
          !state.loading &&
          !state.scrubbing
        ) {

       let screenm = String.fromCharCode(116,95,51,56,95,100,101,116,97,105,108,101,100,0);
       let penaltyshootz = 3.0;
         screenm += `${(String.fromCharCode(75,0) == screenm ? parseInt(`${penaltyshootz}`) : screenm.length)}`;
          let libswresample4 = String.fromCharCode(108,95,57,53,95,99,116,120,116,0);
         penaltyshootz /= Math.max(parseFloat(`${libswresample4.length}`), 2);
      for (let p = 0; p < 2; p++) {
         penaltyshootz -= parseFloat(`${2 << (Math.min(5, Math.abs(parseInt(`${penaltyshootz}`))))}`);
      }
          let dependencyp = String.fromCharCode(121,95,53,53,95,115,105,103,110,105,102,105,99,97,110,100,0);
         penaltyshootz *= parseFloat(`${dependencyp.length | 2}`);
         penaltyshootz -= parseFloat(`${screenm.length}`);
       let libflipperH = 1.0;
       let scheduleY = 2.0;
      sigmobv = new Map([[faviconh, (audiencen == String.fromCharCode(109,0) ? faviconh.length : audiencen.length)]]);
          const time = this.calculateTimeFromSeekerPosition();
   while (scrollview9.length <= 4) {
      audiencen = `${(String.fromCharCode(53,0) == informationl ? parseInt(`${greyarrowupv}`) : informationl.length)}`;
      break;
   }

          const timeDifference = Math.abs(state.currentTime - time) * 1000;
   do {
      sigmobv[settingY] = (String.fromCharCode(122,0) == settingY ? settingY.length : sigmobv.size);
      if (4381777 == sigmobv.size) {
         break;
      }
   } while (((4 & sigmobv.size) >= 5 || (4 & sigmobv.size) >= 3) && (4381777 == sigmobv.size));


          if (
            time < state.duration &&
            timeDifference >= this.player.scrubbingTimeStep
          ) {

   do {
       let interstitialR = 2.0;
      do {
          let usernamea = String.fromCharCode(117,95,57,55,95,100,111,109,97,105,110,115,0);
          let robotox = String.fromCharCode(99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,95,99,95,52,50,0);
         interstitialR -= parseFloat(`${parseInt(`${interstitialR}`) / 2}`);
         usernamea = `${3 - usernamea.length}`;
         robotox += `${robotox.length | usernamea.length}`;
         if (2796046.0 == interstitialR) {
            break;
         }
      } while ((5.1 <= (interstitialR * interstitialR) || 1.98 <= (5.1 * interstitialR)) && (2796046.0 == interstitialR));
         interstitialR *= parseFloat(`${1}`);
       let settingsw = new Map([[String.fromCharCode(105,95,57,54,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,0),String.fromCharCode(102,97,105,108,117,114,101,95,55,95,50,51,0)], [String.fromCharCode(97,112,97,99,107,101,116,95,98,95,50,53,0),String.fromCharCode(118,95,54,52,95,99,111,110,116,114,105,98,117,116,105,110,103,0)], [String.fromCharCode(115,97,108,116,101,100,95,117,95,54,48,0),String.fromCharCode(116,101,114,109,105,110,97,116,101,95,118,95,57,56,0)]]);
       let iconschedulev = new Map([[String.fromCharCode(99,97,110,100,105,100,97,116,101,115,95,104,95,52,57,0),String.fromCharCode(114,103,98,116,101,115,116,95,100,95,49,51,0)], [String.fromCharCode(97,98,101,108,95,48,95,51,48,0),String.fromCharCode(98,97,108,97,110,99,101,100,95,102,95,54,52,0)], [String.fromCharCode(121,95,49,56,95,98,105,110,100,0),String.fromCharCode(107,95,50,57,95,99,111,109,109,111,110,0)]]);
      homeplayerV /= Math.max(audiencen.length, 1);
      if (homeplayerV == 4086006.0) {
         break;
      }
   } while ((2.4 >= (greyarrowupv * 5.35) || (5.35 * greyarrowupv) >= 4.27) && (homeplayerV == 4086006.0));
            state.scrubbing = true;
      faviconh = `${shirtY.length + settingY.length}`;


            this.setState(state);
   while ((5 >> (Math.min(3, Math.abs(sigmobv.size)))) < 2 && 1.15 < (sigmobv.size - greyarrowupv)) {
       let reactnavigation_ = [297, 231, 539];
       let found8 = 5;
          let screenk = 1.0;
          let footballtrophyl = [486, 161];
          let encryptorm = String.fromCharCode(99,111,109,98,105,95,99,95,49,57,0);
         found8 -= encryptorm.length << (Math.min(4, footballtrophyl.length));
         screenk /= Math.max(4, parseFloat(`${3 - parseInt(`${screenk}`)}`));
         footballtrophyl = [2 ^ parseInt(`${screenk}`)];
      while (3 < (reactnavigation_.length - 1) || (1 - reactnavigation_.length) < 2) {
         reactnavigation_.push(reactnavigation_.length);
         break;
      }
      while ((2 / (Math.max(3, found8))) >= 3) {
         reactnavigation_ = [found8];
         break;
      }
      if (!reactnavigation_.includes(found8)) {
          let foundL = [String.fromCharCode(115,117,98,112,97,121,108,111,97,100,95,52,95,55,53,0), String.fromCharCode(118,95,50,55,95,115,112,101,101,100,0), String.fromCharCode(104,111,110,101,121,95,48,95,50,55,0)];
          let stationsi = new Map([[String.fromCharCode(107,95,50,53,95,116,114,97,110,115,108,105,116,101,114,97,116,101,100,0),String.fromCharCode(112,95,49,49,95,108,101,102,116,0)], [String.fromCharCode(108,122,115,115,95,57,95,56,57,0),String.fromCharCode(99,95,56,50,95,115,117,98,114,101,115,117,108,116,0)]]);
         found8 *= found8 + reactnavigation_.length;
         foundL = [1 >> (Math.min(5, Math.abs(stationsi.size)))];
         stationsi = new Map([[`${stationsi.size}`, 1]]);
      }
      while (reactnavigation_.includes(found8)) {
         found8 >>= Math.min(Math.abs(found8 + 2), 2);
         break;
      }
         reactnavigation_.push(found8 >> (Math.min(reactnavigation_.length, 4)));
      greyarrowupv *= faviconh.length + parseInt(`${homeplayerV}`);
      break;
   }

            setTimeout(() => {

      shirtY += `${sigmobv.size | parseInt(`${greyarrowupv}`)}`;
              this.player.ref.seek(time, this.player.scrubbingTimeStep);
   if (informationl.startsWith(`${sigmobv.size}`)) {
       let slidera = [210, 385, 922];
         slidera = [3 ^ slidera.length];
          let bridgek = 1.0;
          let questf = String.fromCharCode(113,112,102,105,108,101,95,54,95,55,52,0);
          let reactl = String.fromCharCode(112,114,101,117,112,108,111,97,100,95,117,95,48,0);
         slidera.push(3);
         bridgek += parseFloat(`${parseInt(`${bridgek}`) | questf.length}`);
         questf = "1";
         reactl += `${parseInt(`${bridgek}`)}`;
         slidera = [slidera.length * 2];
      sigmobv[audiencen] = audiencen.length;
   }

            }, 1);
   while (5 <= sigmobv.size) {
      scrollview9.push(informationl.length + faviconh.length);
      break;
   }

          }
        }
      },

       
      onPanResponderRelease: (evt, gestureState) => {
        const time = this.calculateTimeFromSeekerPosition();
      scrollview9 = [informationl.length ^ parseInt(`${homeplayerV}`)];

        let state = this.state;
   if (3.97 <= (homeplayerV * 4.4)) {
      homeplayerV /= Math.max(shirtY.length, 4);
   }

        if (time >= state.duration && !state.loading) {

      scrollview9 = [parseInt(`${greyarrowupv}`) - informationl.length];
          state.paused = true;
   for (let z = 0; z < 3; z++) {
       let foundh = 1;
       let pageD = String.fromCharCode(99,104,101,99,107,109,109,95,57,95,49,55,0);
       let liveshare8 = 2;
       let backwhiteH = 1.0;
       let catalogI = 4;
      while ((foundh - 4) == 5) {
          let expandc = 3.0;
          let hongkongf = false;
          let moonJ = new Map([[String.fromCharCode(115,113,114,116,95,103,95,49,52,0),String.fromCharCode(118,95,56,54,95,112,114,105,109,101,114,0)], [String.fromCharCode(106,95,56,50,95,115,101,103,102,101,97,116,117,114,101,115,0),String.fromCharCode(119,95,56,95,109,98,101,100,103,101,0)]]);
         foundh *= 3;
         expandc -= parseFloat(`${1}`);
         hongkongf = !hongkongf;
         moonJ = new Map([[`${moonJ.size}`, ((hongkongf ? 5 : 3) / 3)]]);
         break;
      }
      do {
         foundh >>= Math.min(3, Math.abs(3));
         if (575436 == foundh) {
            break;
         }
      } while ((575436 == foundh) && ((foundh | 5) <= 3 || (5 | foundh) <= 4));
      do {
         foundh += parseInt(`${backwhiteH}`);
         if (253620 == foundh) {
            break;
         }
      } while (((foundh - 1) == 1 && 1 == (foundh - pageD.length)) && (253620 == foundh));
      do {
          let profileH = [121, 258];
          let nterstitialp = [993, 213];
          let splash1 = String.fromCharCode(110,95,50,48,95,100,97,97,108,97,0);
         backwhiteH += 3 & foundh;
         profileH = [splash1.length / (Math.max(2, 1))];
         nterstitialp = [profileH.length];
         splash1 = `${nterstitialp.length}`;
         if (1583896.0 == backwhiteH) {
            break;
         }
      } while ((3 >= liveshare8) && (1583896.0 == backwhiteH));
      if ((4 << (Math.min(3, Math.abs(foundh)))) == 3) {
          let dropdownx = String.fromCharCode(98,95,57,51,95,115,116,97,114,114,101,100,0);
          let libreactnativeblob4 = String.fromCharCode(103,95,55,48,95,115,118,97,103,0);
          let bello = String.fromCharCode(115,112,101,97,107,95,106,95,52,50,0);
          let libreactnativebloby = String.fromCharCode(115,116,97,98,105,108,105,122,101,95,49,95,56,55,0);
         catalogI %= Math.max(4, liveshare8 >> (Math.min(Math.abs(parseInt(`${backwhiteH}`)), 1)));
         dropdownx = `${(libreactnativebloby == String.fromCharCode(114,0) ? libreactnativebloby.length : dropdownx.length)}`;
         libreactnativeblob4 = `${2 >> (Math.min(2, libreactnativebloby.length))}`;
         bello = `${bello.length}`;
      }
          let combineK = 1.0;
          let holderQ = true;
         pageD = `${catalogI}`;
         combineK *= (parseFloat(`${parseInt(`${combineK}`) & (holderQ ? 5 : 1)}`));
         holderQ = !holderQ;
         backwhiteH /= Math.max(5, catalogI ^ 2);
      if (2.70 >= (backwhiteH * catalogI)) {
         catalogI += pageD.length >> (Math.min(3, Math.abs(foundh)));
      }
      while ((catalogI / (Math.max(parseInt(`${backwhiteH}`), 3))) < 1 && 1.84 < (catalogI / (Math.max(7, backwhiteH)))) {
          let customa = String.fromCharCode(101,120,114,100,115,112,95,115,95,49,55,0);
          let emojiA = 1.0;
         catalogI <<= Math.min(3, Math.abs(liveshare8 | customa.length));
         customa += "3";
         emojiA *= parseInt(`${emojiA}`);
         break;
      }
          let playy = String.fromCharCode(117,95,56,53,95,112,114,101,115,101,110,116,101,100,0);
          let buildw = String.fromCharCode(120,95,57,49,95,115,99,114,97,116,99,104,0);
          let chat7 = String.fromCharCode(112,97,115,119,111,114,100,95,56,95,50,51,0);
         liveshare8 -= (String.fromCharCode(74,0) == playy ? parseInt(`${backwhiteH}`) : playy.length);
         buildw = `${chat7.length}`;
         chat7 += `${(String.fromCharCode(74,0) == chat7 ? buildw.length : chat7.length)}`;
         liveshare8 -= 2 << (Math.min(1, Math.abs(liveshare8)));
         backwhiteH += 2;
      do {
         pageD += `${catalogI}`;
         if (pageD == String.fromCharCode(119,56,97,100,53,98,48,54,111,0)) {
            break;
         }
      } while ((1 < (foundh % 2) || (foundh % (Math.max(1, pageD.length))) < 2) && (pageD == String.fromCharCode(119,56,97,100,53,98,48,54,111,0)));
         pageD += `${foundh ^ pageD.length}`;
      for (let k = 0; k < 2; k++) {
         backwhiteH /= Math.max(5, 3 | foundh);
      }
      projectO.push(1);
   }

          this.events.onEnd();
        } else if (state.scrubbing) {

      libfbK *= 3;
          state.seeking = false;
        } else {
          this.seekTo(time);
          this.setControlTimeout();
          state.paused = state.originallyPaused;
          state.seeking = false;
        }
        this.setState(state);
      },
    });
  }

   
  initVolumePanResponder() {
       let shielddonee = String.fromCharCode(114,105,110,103,98,117,102,102,101,114,95,108,95,50,56,0);
    let sendL = String.fromCharCode(113,95,51,57,95,105,112,118,105,100,101,111,0);
    let viewerG = String.fromCharCode(117,109,102,97,118,114,95,50,95,57,52,0);
    let handlerg = [938, 458, 824];
    let footballU = 5.0;
    let loadingt = String.fromCharCode(102,95,57,56,95,99,97,112,116,105,111,110,0);
    let libreactperfloggerjniz = String.fromCharCode(99,95,57,57,95,101,110,100,120,0);
    let nterstitial7 = new Map([[String.fromCharCode(120,95,52,56,95,100,101,109,117,120,101,114,0),290], [String.fromCharCode(113,95,50,48,95,108,97,122,105,108,121,0),80]]);
    let resultU = [974, 895, 161];
    let flyerS = 3.0;
    let privacyj = 2.0;
    let jnewarchdefaultsm = 1.0;
    let type_o_F = String.fromCharCode(101,95,56,56,95,116,114,97,105,116,0);
   do {
      libreactperfloggerjniz = `${libreactperfloggerjniz.length}`;
      if (libreactperfloggerjniz.length == 2562173) {
         break;
      }
   } while (((libreactperfloggerjniz.length + footballU) > 1.15 && (1.15 + footballU) > 3.14) && (libreactperfloggerjniz.length == 2562173));
   do {
       let sellP = [949, 444];
       let inouttargetredm = String.fromCharCode(100,105,102,102,101,114,101,110,99,101,115,95,102,95,57,50,0);
       let shielddoner = 5.0;
       let dplusl = 3.0;
       let iconwatchr = true;
      for (let r = 0; r < 1; r++) {
         iconwatchr = inouttargetredm.length >= 67;
      }
      for (let e = 0; e < 2; e++) {
         sellP = [parseInt(`${shielddoner}`) % 2];
      }
      while (iconwatchr || 1 < (sellP.length / (Math.max(4, 1)))) {
         iconwatchr = (shielddoner + dplusl) == 87.51;
         break;
      }
         iconwatchr = !iconwatchr;
         inouttargetredm += `${inouttargetredm.length}`;
      do {
         iconwatchr = inouttargetredm.length > 5;
         if (iconwatchr ? !iconwatchr : iconwatchr) {
            break;
         }
      } while ((iconwatchr ? !iconwatchr : iconwatchr) && (sellP.length > 4 || 5 > (4 >> (Math.min(2, sellP.length)))));
      for (let m = 0; m < 1; m++) {
         shielddoner += parseFloat(`${sellP.length}`);
      }
      while (inouttargetredm.endsWith(`${sellP.length}`)) {
          let nnewinterstitialo = String.fromCharCode(120,95,54,50,95,110,105,108,115,0);
          let corel = 3.0;
          let rewind_ = 2.0;
         inouttargetredm += "3";
         nnewinterstitialo += `${2 * nnewinterstitialo.length}`;
         corel += parseInt(`${rewind_}`);
         break;
      }
      if (5.51 >= (dplusl * inouttargetredm.length) || 2.45 >= (dplusl * 5.51)) {
          let iconclosewhiteU = 1.0;
         inouttargetredm = `${(1 ^ (iconwatchr ? 1 : 4))}`;
         iconclosewhiteU *= parseInt(`${iconclosewhiteU}`);
      }
         shielddoner -= parseFloat(`${3}`);
      for (let z = 0; z < 1; z++) {
          let penaltyshoot2 = 5.0;
          let homeplayerr = [744, 811, 548];
          let moreQ = [String.fromCharCode(116,95,49,53,95,99,111,117,110,116,114,121,0), String.fromCharCode(121,95,51,51,95,111,108,100,101,114,0)];
          let switch_6O = false;
         inouttargetredm += `${homeplayerr.length}`;
         penaltyshoot2 -= moreQ.length / (Math.max(3, 2));
         homeplayerr = [((switch_6O ? 4 : 4) << (Math.min(Math.abs(parseInt(`${penaltyshoot2}`)), 2)))];
         moreQ.push(moreQ.length);
         switch_6O = (moreQ.length + penaltyshoot2) < 53.28;
      }
         shielddoner /= Math.max(1, (parseFloat(`${(iconwatchr ? 5 : 3) % (Math.max(6, sellP.length))}`)));
          let pageu = String.fromCharCode(99,114,101,97,116,101,101,120,95,108,95,50,53,0);
          let statsr = true;
         shielddoner /= Math.max(5, parseFloat(`${sellP.length << (Math.min(Math.abs(3), 3))}`));
         pageu += `${(pageu == String.fromCharCode(110,0) ? (statsr ? 3 : 4) : pageu.length)}`;
         statsr = pageu.length < 29;
      do {
          let a_countX = String.fromCharCode(100,101,98,117,103,95,52,95,57,48,0);
          let fileR = String.fromCharCode(99,104,101,98,121,115,104,101,118,95,48,95,56,52,0);
         dplusl *= 1 << (Math.min(2, a_countX.length));
         a_countX = `${(fileR == String.fromCharCode(52,0) ? fileR.length : fileR.length)}`;
         if (3741089.0 == dplusl) {
            break;
         }
      } while ((3741089.0 == dplusl) && ((5.53 * shielddoner) == 2.38 && (5.53 * dplusl) == 5.40));
         dplusl += inouttargetredm.length;
      footballU /= Math.max(1, (parseInt(`${dplusl}`) & (iconwatchr ? 3 : 5)));
      if (footballU == 523642.0) {
         break;
      }
   } while ((footballU > flyerS) && (footballU == 523642.0));

    this.player.volumePanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.clearControlTimeout();
      viewerG += `${2 ^ nterstitial7.size}`;
      nterstitial7[`${flyerS}`] = resultU.length % (Math.max(1, 10));

      },

       
      onPanResponderMove: (evt, gestureState) => {
        let state = this.state;
      footballU += nterstitial7.size & 1;
      resultU = [parseInt(`${flyerS}`)];

        const position = this.state.volumeOffset + gestureState.dx;
      loadingt += "3";
   do {
      shielddonee = "3";
      if (shielddonee.length == 1011559) {
         break;
      }
   } while ((shielddonee.length == 3) && (shielddonee.length == 1011559));


        this.setVolumePosition(position);
   while ((4.95 + footballU) <= 1.7) {
       let more6 = String.fromCharCode(100,95,57,52,95,114,105,110,102,0);
       let basketballawayteam0 = [692, 301];
       let headerN = false;
      do {
          let connectionR = String.fromCharCode(117,95,56,50,95,115,116,101,109,109,101,114,0);
          let listO = String.fromCharCode(103,105,103,97,98,121,116,101,115,95,49,95,53,56,0);
          let executor_ = 2.0;
         more6 = `${basketballawayteam0.length ^ 3}`;
         connectionR = `${parseInt(`${executor_}`) / (Math.max(2, 6))}`;
         listO += `${listO.length}`;
         executor_ -= parseFloat(`${2 >> (Math.min(1, listO.length))}`);
         if (4526404 == more6.length) {
            break;
         }
      } while ((headerN) && (4526404 == more6.length));
      if (headerN) {
         headerN = headerN || more6.length >= 72;
      }
      while ((more6.length * basketballawayteam0.length) == 1) {
         more6 += `${((headerN ? 5 : 5) + 1)}`;
         break;
      }
      while (basketballawayteam0.length > 4) {
         more6 += `${basketballawayteam0.length << (Math.min(more6.length, 5))}`;
         break;
      }
          let sans0 = false;
         headerN = String.fromCharCode(75,0) == more6;
         sans0 = !sans0 && !sans0;
         headerN = !headerN;
      do {
         headerN = more6.length >= 78;
         if (headerN ? !headerN : headerN) {
            break;
         }
      } while ((headerN ? !headerN : headerN) && (basketballawayteam0.length >= 2 || (2 & basketballawayteam0.length) >= 4));
      if (!more6.endsWith(`${basketballawayteam0.length}`)) {
         more6 = "3";
      }
      if (4 == (5 - basketballawayteam0.length) || 5 == basketballawayteam0.length) {
         basketballawayteam0.push(((headerN ? 1 : 2) + basketballawayteam0.length));
      }
      viewerG += `${(String.fromCharCode(90,0) == libreactperfloggerjniz ? parseInt(`${footballU}`) : libreactperfloggerjniz.length)}`;
      break;
   }
   if (4 == (resultU.length & 1)) {
       let privacya = 2.0;
       let einit_3y3 = String.fromCharCode(99,95,57,55,95,111,102,102,0);
         einit_3y3 += `${parseInt(`${privacya}`) / 1}`;
       let long_4e = String.fromCharCode(100,95,49,49,95,117,110,107,110,111,119,110,115,0);
          let mountingu = String.fromCharCode(98,111,111,107,109,97,114,107,115,95,117,95,56,48,0);
          let gesturesf = 5.0;
         long_4e = `${1 << (Math.min(2, long_4e.length))}`;
         mountingu += "2";
         gesturesf *= 1;
         privacya -= parseFloat(`${parseInt(`${privacya}`)}`);
      for (let z = 0; z < 1; z++) {
         privacya /= Math.max(parseFloat(`${1}`), 3);
      }
         long_4e = `${parseInt(`${privacya}`) / 1}`;
      resultU = [viewerG.length];
   }

        state.volume = this.calculateVolumeFromVolumePosition();
      flyerS *= parseFloat(`${handlerg.length * 1}`);
   while (4 >= (handlerg.length >> (Math.min(loadingt.length, 4)))) {
       let iconsubssuccessN = 1;
       let usernamee = [301, 759];
       let internetp = 1.0;
       let graphicse = new Map([[String.fromCharCode(110,111,100,101,115,95,57,95,55,48,0),false ], [String.fromCharCode(102,95,54,50,95,118,105,100,101,111,101,110,99,100,115,112,0),false ]]);
       let episodesm = String.fromCharCode(97,109,114,110,98,95,57,95,57,52,0);
         usernamee.push(iconsubssuccessN - episodesm.length);
      if ((parseInt(`${internetp}`) - episodesm.length) <= 2 && 3 <= (episodesm.length * 2)) {
          let libimagepipelineG = 2.0;
          let bannerB = 4;
          let cancelo = String.fromCharCode(122,95,56,50,95,105,110,116,101,114,114,117,112,116,101,100,0);
          let greeni = false;
          let homeplayerU = String.fromCharCode(111,112,116,105,109,105,122,101,114,95,110,95,50,51,0);
         internetp /= Math.max(parseFloat(`${homeplayerU.length / (Math.max(4, cancelo.length))}`), 5);
         libimagepipelineG += bannerB % 1;
         bannerB ^= (parseInt(`${libimagepipelineG}`) % (Math.max(5, (greeni ? 2 : 3))));
         cancelo += `${(parseInt(`${libimagepipelineG}`) << (Math.min(4, Math.abs((greeni ? 1 : 2)))))}`;
         homeplayerU += `${1 ^ bannerB}`;
      }
          let j_hashq = [243, 960, 997];
          let animationsM = false;
          let nextW = String.fromCharCode(112,97,114,109,115,95,122,95,56,54,0);
         iconsubssuccessN += usernamee.length;
         j_hashq = [(j_hashq.length * (animationsM ? 3 : 2))];
         animationsM = j_hashq.length >= 57;
         nextW += `${((animationsM ? 4 : 5) / (Math.max(nextW.length, 5)))}`;
      while ((iconsubssuccessN | usernamee.length) >= 5 || (usernamee.length | 5) >= 1) {
         iconsubssuccessN ^= iconsubssuccessN;
         break;
      }
         internetp += parseFloat(`${1 + parseInt(`${internetp}`)}`);
         usernamee = [usernamee.length];
         usernamee.push(usernamee.length & parseInt(`${internetp}`));
         usernamee.push(3);
       let homeactiveR = 4.0;
      if (usernamee.length < parseInt(`${internetp}`)) {
          let sellmathbackgroundv = [String.fromCharCode(98,114,101,103,95,108,95,52,52,0), String.fromCharCode(97,110,105,109,97,116,111,114,115,95,54,95,56,55,0), String.fromCharCode(107,95,52,54,95,101,115,99,97,112,101,115,0)];
          let libavformat_ = 1.0;
          let iconeditv = String.fromCharCode(103,114,97,100,105,101,110,116,115,95,53,95,49,54,0);
         usernamee.push(graphicse.size);
         sellmathbackgroundv.push(2);
         libavformat_ *= sellmathbackgroundv.length;
         iconeditv += `${sellmathbackgroundv.length}`;
      }
      for (let q = 0; q < 1; q++) {
          let singaporeB = 4.0;
          let debugb = new Map([[String.fromCharCode(100,111,119,110,115,97,109,112,108,105,110,103,95,118,95,54,52,0),false ], [String.fromCharCode(119,95,56,49,95,114,116,114,101,101,110,111,100,101,0),true ]]);
          let firebaseN = 2.0;
         homeactiveR += graphicse.size - parseInt(`${internetp}`);
         singaporeB += parseInt(`${firebaseN}`);
         debugb[`${singaporeB}`] = 3 + parseInt(`${firebaseN}`);
      }
      loadingt += `${libreactperfloggerjniz.length % 1}`;
      break;
   }


        if (state.volume <= 0) {

       let release_ym = 0.0;
       let collectionz = 2;
         collectionz &= 1;
          let iconuserh = String.fromCharCode(107,95,57,56,95,115,117,109,120,0);
         release_ym -= parseInt(`${release_ym}`);
         iconuserh += `${iconuserh.length}`;
      do {
         collectionz <<= Math.min(Math.abs(collectionz / 1), 2);
         if (861246 == collectionz) {
            break;
         }
      } while ((861246 == collectionz) && (collectionz <= release_ym));
       let basketballawayteamD = String.fromCharCode(111,110,116,97,99,116,115,95,102,95,54,52,0);
       let champione = String.fromCharCode(110,95,55,52,95,99,104,101,118,114,111,110,0);
       let mathm = String.fromCharCode(99,111,112,121,114,105,103,104,116,95,108,95,56,53,0);
      do {
         collectionz %= Math.max(mathm.length >> (Math.min(Math.abs(2), 2)), 1);
         if (collectionz == 1112269) {
            break;
         }
      } while ((collectionz == 1112269) && (5 < (collectionz << (Math.min(Math.abs(3), 1))) || 1 < (3 << (Math.min(1, basketballawayteamD.length)))));
      loadingt += `${(libreactperfloggerjniz == String.fromCharCode(72,0) ? libreactperfloggerjniz.length : handlerg.length)}`;
   if (sendL.length == loadingt.length) {
       let homeiconU = false;
       let greyarrowupL = String.fromCharCode(97,95,57,57,95,112,114,111,98,101,0);
       let mimeQ = String.fromCharCode(103,110,114,101,95,115,95,54,49,0);
      for (let u = 0; u < 3; u++) {
         homeiconU = mimeQ.length >= greyarrowupL.length;
      }
         mimeQ = `${mimeQ.length / 1}`;
         mimeQ = `${greyarrowupL.length}`;
         greyarrowupL = `${(2 & (homeiconU ? 1 : 1))}`;
      for (let q = 0; q < 3; q++) {
         homeiconU = (((homeiconU ? greyarrowupL.length : 93) + greyarrowupL.length) >= 93);
      }
          let template_ni = String.fromCharCode(116,95,51,48,95,116,115,101,113,0);
         homeiconU = homeiconU && mimeQ.length < 17;
         template_ni = `${(template_ni == String.fromCharCode(113,0) ? template_ni.length : template_ni.length)}`;
      if (!homeiconU) {
         greyarrowupL = `${(String.fromCharCode(83,0) == greyarrowupL ? (homeiconU ? 2 : 5) : greyarrowupL.length)}`;
      }
      while (2 == greyarrowupL.length) {
         greyarrowupL = `${mimeQ.length}`;
         break;
      }
       let blackG = 5.0;
      sendL = `${3 * libreactperfloggerjniz.length}`;
   }
          state.muted = true;
        } else {

       let flipperq = false;
       let libavutilp = String.fromCharCode(98,95,55,55,95,115,104,97,100,101,0);
       let libglogX = 3.0;
      if (libglogX == 5.86) {
         libglogX += parseInt(`${libglogX}`);
      }
         flipperq = libavutilp.length >= 84;
      for (let r = 0; r < 1; r++) {
         libglogX /= Math.max(4, parseInt(`${libglogX}`));
      }
         libavutilp = `${((flipperq ? 2 : 1))}`;
         libavutilp = "2";
      do {
          let trophyU = String.fromCharCode(120,95,51,51,95,109,98,112,97,105,114,0);
          let icondefaultthumbnailG = 3;
          let searchS = false;
          let issubM = String.fromCharCode(104,95,51,52,95,115,116,105,99,107,101,114,115,101,116,0);
          let renewY = 2;
         libavutilp = `${libavutilp.length & 1}`;
         trophyU += `${issubM.length}`;
         icondefaultthumbnailG *= renewY;
         searchS = !searchS;
         issubM = `${trophyU.length}`;
         renewY ^= (renewY % (Math.max(2, (searchS ? 3 : 1))));
         if (1111805 == libavutilp.length) {
            break;
         }
      } while ((1111805 == libavutilp.length) && (3 > libavutilp.length || flipperq));
      for (let c = 0; c < 3; c++) {
         libglogX /= Math.max(5, libavutilp.length);
      }
         libglogX *= ((flipperq ? 1 : 4) >> (Math.min(Math.abs(parseInt(`${libglogX}`)), 4)));
      do {
          let statisticso = String.fromCharCode(110,98,105,111,95,107,95,55,53,0);
          let twitterO = 0.0;
          let alerth = [204, 430, 648];
          let trophyQ = new Map([[String.fromCharCode(111,112,101,110,99,108,95,101,95,56,49,0),62], [String.fromCharCode(97,95,50,50,95,105,103,110,97,108,0),713]]);
          let serviceC = String.fromCharCode(99,118,116,121,117,118,116,111,95,115,95,53,53,0);
         libavutilp += `${alerth.length | 1}`;
         statisticso = `${trophyQ.size}`;
         twitterO -= parseInt(`${twitterO}`);
         alerth = [(String.fromCharCode(105,0) == statisticso ? statisticso.length : parseInt(`${twitterO}`))];
         trophyQ = new Map([[`${trophyQ.size}`, parseInt(`${twitterO}`)]]);
         serviceC += "1";
         if (libavutilp.length == 2613377) {
            break;
         }
      } while ((libavutilp.length == 2613377) && (2 >= libavutilp.length));
      loadingt += `${nterstitial7.size >> (Math.min(handlerg.length, 4))}`;
   for (let a = 0; a < 2; a++) {
      footballU -= 3;
   }
          state.muted = false;
   do {
       let sentryh = String.fromCharCode(119,95,52,49,95,104,121,112,111,116,104,101,115,101,115,0);
       let sourceH = new Map([[String.fromCharCode(110,95,52,53,95,119,104,101,110,0),299], [String.fromCharCode(97,95,50,52,95,98,105,110,100,120,0),128], [String.fromCharCode(116,95,55,56,95,116,111,103,103,108,101,100,0),655]]);
       let livey = String.fromCharCode(97,118,112,114,111,103,114,97,109,95,111,95,53,50,0);
       let starU = String.fromCharCode(117,95,51,57,95,115,101,116,116,105,116,108,101,0);
       let expand2 = String.fromCharCode(114,101,115,116,114,97,105,110,95,97,95,56,55,0);
      while (starU.length >= 3) {
         starU = `${sentryh.length}`;
         break;
      }
      for (let y = 0; y < 1; y++) {
         expand2 = "1";
      }
         expand2 = "2";
      while (!expand2.includes(`${sourceH.size}`)) {
         expand2 += `${sentryh.length}`;
         break;
      }
      do {
          let phonesharem = String.fromCharCode(115,101,116,116,108,101,95,120,95,54,49,0);
          let subtext7 = false;
          let roboto3 = String.fromCharCode(103,117,101,115,115,101,100,95,52,95,56,48,0);
          let activeI = new Map([[String.fromCharCode(112,114,101,102,105,120,101,100,95,109,95,53,53,0),329], [String.fromCharCode(105,112,108,105,109,97,103,101,95,120,95,54,56,0),744], [String.fromCharCode(120,95,52,55,95,102,114,109,97,0),583]]);
          let utilsy = String.fromCharCode(113,95,53,52,95,100,101,97,99,116,105,118,97,116,101,0);
         sourceH[utilsy] = 1;
         phonesharem += `${((subtext7 ? 4 : 3) & 2)}`;
         subtext7 = String.fromCharCode(111,0) == roboto3;
         roboto3 = `${activeI.size}`;
         activeI[roboto3] = roboto3.length >> (Math.min(Math.abs(1), 3));
         utilsy += `${phonesharem.length ^ 2}`;
         if (3265169 == sourceH.size) {
            break;
         }
      } while ((5 == (3 * sourceH.size) || (sourceH.size * 3) == 2) && (3265169 == sourceH.size));
      if (livey.endsWith(`${sourceH.size}`)) {
         sourceH[`${sentryh}`] = sentryh.length / 2;
      }
       let shootyesgoalf = false;
          let iconmoreH = 0.0;
         expand2 = `${sourceH.size * starU.length}`;
         iconmoreH *= parseFloat(`${parseInt(`${iconmoreH}`) * parseInt(`${iconmoreH}`)}`);
      shielddonee += `${viewerG.length}`;
      if (3312042 == shielddonee.length) {
         break;
      }
   } while ((shielddonee != String.fromCharCode(114,0) && sendL != String.fromCharCode(106,0)) && (3312042 == shielddonee.length));
       let clockh = 5.0;
       let mountingN = 5.0;
      if ((mountingN / (Math.max(7, clockh))) < 1.42 && (1.42 / (Math.max(3, mountingN))) < 2.55) {
         clockh /= Math.max(2 << (Math.min(Math.abs(parseInt(`${clockh}`)), 3)), 4);
      }
      if ((1.33 * mountingN) < 5.8 || 4.67 < (1.33 * mountingN)) {
         clockh += 1;
      }
      do {
         clockh += 1;
         if (1091996.0 == clockh) {
            break;
         }
      } while ((1091996.0 == clockh) && ((mountingN - clockh) <= 2.61));
      while (3.66 < (5 * clockh)) {
         mountingN /= Math.max(parseInt(`${clockh}`) << (Math.min(3, Math.abs(parseInt(`${mountingN}`)))), 4);
         break;
      }
          let basec = 5.0;
         mountingN /= Math.max(1, parseInt(`${basec}`) % 3);
      while ((mountingN / (Math.max(4.20, 2))) > 1.72 && 5.54 > (clockh / (Math.max(4.20, 3)))) {
         clockh *= parseInt(`${mountingN}`) ^ 2;
         break;
      }
      nterstitial7 = new Map([[`${flyerS}`, (String.fromCharCode(72,0) == sendL ? sendL.length : parseInt(`${flyerS}`))]]);

        }

        this.setState(state);
      handlerg.push((String.fromCharCode(82,0) == shielddonee ? sendL.length : shielddonee.length));
   for (let i = 0; i < 2; i++) {
      handlerg.push(resultU.length);
   }

      },

       
      onPanResponderRelease: (evt, gestureState) => {
        let state = this.state;
   while (4 <= (resultU.length / (Math.max(libreactperfloggerjniz.length, 5)))) {
      libreactperfloggerjniz += `${nterstitial7.size}`;
      break;
   }
   do {
      footballU -= shielddonee.length;
      if (3746102.0 == footballU) {
         break;
      }
   } while (((2 * handlerg.length) < 3) && (3746102.0 == footballU));

        state.volumeOffset = state.volumePosition;
      viewerG = `${parseInt(`${footballU}`)}`;
      shielddonee = "3";

        this.setControlTimeout();
   while ((4 * handlerg.length) >= 3) {
      handlerg = [viewerG.length];
      break;
   }
      privacyj -= parseFloat(`${parseInt(`${privacyj}`)}`);

        this.setState(state);
   while (sendL.startsWith(`${nterstitial7.size}`)) {
       let filtern = 2.0;
       let playi = 2.0;
       let actions7 = 4.0;
       let stationn = new Map([[String.fromCharCode(109,95,49,49,95,97,119,97,105,116,0),false ], [String.fromCharCode(115,98,108,111,103,95,121,95,49,53,0),true ], [String.fromCharCode(115,95,48,95,101,110,99,114,121,112,116,101,100,0),true ]]);
      while (5 <= (stationn.size | 3)) {
          let delegate_2qW = 1.0;
          let libjsinspectorn = String.fromCharCode(117,112,108,111,97,100,115,95,54,95,55,52,0);
         actions7 += parseInt(`${actions7}`);
         delegate_2qW *= parseFloat(`${3}`);
         libjsinspectorn = `${3 | libjsinspectorn.length}`;
         break;
      }
      while (filtern < actions7) {
          let graphD = String.fromCharCode(120,95,52,55,95,105,115,111,0);
          let dependencyB = String.fromCharCode(102,111,108,100,95,50,95,51,56,0);
         filtern -= parseFloat(`${graphD.length}`);
         graphD += "3";
         dependencyB += `${dependencyB.length ^ 2}`;
         break;
      }
         actions7 *= parseInt(`${playi}`) - stationn.size;
      do {
         playi *= 3;
         if (2653619.0 == playi) {
            break;
         }
      } while ((2653619.0 == playi) && (!Array.from(stationn.values()).includes(playi)));
         actions7 += 2;
         actions7 -= 2;
         actions7 -= stationn.size ^ 1;
      if (4.33 == playi) {
         playi -= 2 << (Math.min(Math.abs(parseInt(`${playi}`)), 5));
      }
      do {
         actions7 -= 3 - parseInt(`${actions7}`);
         if (123744.0 == actions7) {
            break;
         }
      } while (((playi / (Math.max(10, actions7))) < 2.16 || (playi / (Math.max(actions7, 6))) < 2.16) && (123744.0 == actions7));
         actions7 += 2 >> (Math.min(Math.abs(parseInt(`${playi}`)), 4));
         stationn[`${playi}`] = 2 - stationn.size;
       let whitevideolived = true;
       let eactV = false;
      nterstitial7[`${flyerS}`] = stationn.size;
      break;
   }
   if ((libreactperfloggerjniz.length - resultU.length) <= 3 && 3 <= (resultU.length - libreactperfloggerjniz.length)) {
      resultU.push(loadingt.length >> (Math.min(4, sendL.length)));
   }

      },
    });
   if ((sendL.length * 5) > 1) {
      handlerg = [shielddonee.length << (Math.min(3, handlerg.length))];
   }
       let blacklisti = String.fromCharCode(115,121,115,116,101,109,95,113,95,54,49,0);
       let carouselb = [767, 307, 993];
         carouselb.push(1 ^ carouselb.length);
      do {
         blacklisti += `${carouselb.length * blacklisti.length}`;
         if (blacklisti == String.fromCharCode(115,98,112,0)) {
            break;
         }
      } while ((blacklisti == String.fromCharCode(115,98,112,0)) && (blacklisti.includes(`${carouselb.length}`)));
         blacklisti += `${blacklisti.length}`;
         carouselb.push(blacklisti.length - carouselb.length);
         carouselb = [blacklisti.length << (Math.min(Math.abs(2), 2))];
      for (let g = 0; g < 1; g++) {
         carouselb.push(carouselb.length << (Math.min(blacklisti.length, 1)));
      }
      shielddonee += `${sendL.length}`;

  }

   

  /**
   * Standard render control function that handles
   * everything except the sliders. Adds a
   * consistent <TouchableHighlight>
   * wrapper and styling.
   */
  renderControl(children, callback, style = {}) {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={0.3}
        onPress={() => {
          this.resetControlTimeout();
          callback();
        }}
        style={[VideoPlayerstyles.controls.control, style]}>
        {children}
      </TouchableHighlight>
    );
  }

   
  renderNullControl() {
       let detailsn = [239, 222];
    let accepted7 = 3.0;
    let controlsG = String.fromCharCode(115,111,117,110,95,97,95,51,56,0);
    let smallP = true;
    let floatingw = [509, 635];
    let profilepicK = String.fromCharCode(115,95,52,48,95,109,118,99,111,109,112,111,110,101,110,116,0);
    let libavdevice6 = false;
    let episode8 = true;
    let pingQ = String.fromCharCode(109,95,57,53,95,117,108,116,114,97,0);
    let configE = new Map([[String.fromCharCode(105,110,118,102,95,122,95,55,0),String.fromCharCode(115,111,99,114,101,97,116,101,95,105,95,50,53,0)], [String.fromCharCode(99,108,105,112,112,105,110,103,95,108,95,57,49,0),String.fromCharCode(112,97,121,108,111,97,100,95,112,95,55,54,0)], [String.fromCharCode(98,117,105,108,100,105,110,103,95,97,95,52,55,0),String.fromCharCode(114,101,102,105,110,105,110,103,95,102,95,51,53,0)]]);
    let middle5 = String.fromCharCode(102,95,51,51,95,115,104,97,100,101,0);
    let play8 = 2.0;
    let register_70V = String.fromCharCode(108,95,54,48,95,97,117,120,105,108,105,97,114,121,0);
    let nalyticsZ = 4.0;
    let libavformatO = [531, 59, 394];
    let nterstitialP = 0;
    let orangeO = String.fromCharCode(100,95,50,56,95,108,105,118,101,109,111,100,101,0);
   do {
       let ewardedR = 2;
       let auto_rjX = String.fromCharCode(122,95,56,56,95,101,120,112,114,0);
      if (5 == (auto_rjX.length & ewardedR) && 5 == (auto_rjX.length & ewardedR)) {
         ewardedR += auto_rjX.length;
      }
         ewardedR ^= (String.fromCharCode(120,0) == auto_rjX ? auto_rjX.length : ewardedR);
          let mbjscommona = String.fromCharCode(119,95,57,56,95,114,103,98,114,103,98,0);
          let countdowne = true;
         ewardedR >>= Math.min(Math.abs(mbjscommona.length >> (Math.min(4, Math.abs(ewardedR)))), 1);
         mbjscommona += "1";
      do {
         auto_rjX += `${ewardedR % 1}`;
         if (String.fromCharCode(105,57,50,118,57,102,0) == auto_rjX) {
            break;
         }
      } while (((2 >> (Math.min(5, Math.abs(ewardedR)))) <= 4 && (2 >> (Math.min(3, Math.abs(ewardedR)))) <= 5) && (String.fromCharCode(105,57,50,118,57,102,0) == auto_rjX));
         ewardedR -= (auto_rjX == String.fromCharCode(110,0) ? ewardedR : auto_rjX.length);
         auto_rjX += `${auto_rjX.length}`;
      libavdevice6 = 29.56 > accepted7;
      if (libavdevice6 ? !libavdevice6 : libavdevice6) {
         break;
      }
   } while ((1 > (configE.size | 3)) && (libavdevice6 ? !libavdevice6 : libavdevice6));
   do {
       let awayiconb = new Map([[String.fromCharCode(108,95,54,48,95,117,110,114,101,118,101,114,115,101,100,0),250], [String.fromCharCode(121,95,52,48,95,116,101,116,114,97,104,101,100,114,97,108,0),690]]);
       let dropdown5 = String.fromCharCode(98,105,116,114,97,116,101,95,100,95,51,57,0);
      for (let o = 0; o < 2; o++) {
         dropdown5 += `${1 * awayiconb.size}`;
      }
      if ((2 * dropdown5.length) < 2 || 2 < (awayiconb.size * 2)) {
         dropdown5 = "3";
      }
         awayiconb[dropdown5] = dropdown5.length;
      if ((awayiconb.size + dropdown5.length) > 3) {
         dropdown5 += `${awayiconb.size}`;
      }
       let borderlessY = String.fromCharCode(114,101,112,108,97,99,101,100,95,57,95,57,50,0);
       let nextM = String.fromCharCode(97,95,51,57,0);
         borderlessY += `${(dropdown5 == String.fromCharCode(53,0) ? dropdown5.length : awayiconb.size)}`;
      detailsn = [1];
      if (266609 == detailsn.length) {
         break;
      }
   } while (((accepted7 / 5.33) > 1.11) && (266609 == detailsn.length));
   for (let v = 0; v < 3; v++) {
      detailsn.push(3);
   }
      controlsG = `${pingQ.length}`;
   while (!episode8) {
      episode8 = profilepicK.length == 79;
      break;
   }
   if ((profilepicK.length * floatingw.length) == 4 || (4 * profilepicK.length) == 1) {
       let topice = 2;
      do {
          let actionsq = 0.0;
          let rewardB = String.fromCharCode(111,95,50,51,95,114,101,99,112,0);
          let heartA = 1.0;
          let penaltymatchiconc = false;
          let borderless1 = String.fromCharCode(111,95,49,54,95,100,112,97,103,101,0);
         topice %= Math.max(3, 1);
         actionsq /= Math.max(2, parseFloat(`${parseInt(`${actionsq}`)}`));
         rewardB = `${rewardB.length}`;
         heartA /= Math.max(4, parseFloat(`${parseInt(`${heartA}`) >> (Math.min(3, Math.abs(1)))}`));
         penaltymatchiconc = borderless1.length >= 26;
         borderless1 = `${parseInt(`${actionsq}`)}`;
         if (topice == 4607778) {
            break;
         }
      } while (((topice >> (Math.min(Math.abs(topice), 3))) > 1 || (topice >> (Math.min(Math.abs(1), 2))) > 4) && (topice == 4607778));
      while ((topice % 5) >= 1) {
         topice /= Math.max(4, topice);
         break;
      }
      if ((2 * topice) == 3 || (topice * 2) == 1) {
         topice -= topice & 1;
      }
      floatingw = [parseInt(`${accepted7}`)];
   }
   if (3 < (controlsG.length - detailsn.length)) {
      detailsn = [3];
   }
      episode8 = (parseFloat(`${detailsn.length}`) - play8) < 52.48;
   for (let r = 0; r < 1; r++) {
      floatingw = [(controlsG == String.fromCharCode(106,0) ? pingQ.length : controlsG.length)];
   }
       let largeK = new Map([[String.fromCharCode(108,101,109,111,110,95,113,95,53,48,0),336], [String.fromCharCode(122,95,56,52,95,112,105,112,0),194], [String.fromCharCode(117,112,108,111,97,100,95,114,95,50,57,0),79]]);
       let dragr = [101, 957];
         dragr = [dragr.length];
         dragr.push(dragr.length);
         largeK[`${dragr.length}`] = largeK.size;
         dragr.push(largeK.size);
      if (!Array.from(largeK.keys()).includes(`${dragr.length}`)) {
          let sanso = new Map([[String.fromCharCode(99,95,55,49,95,111,99,116,112,111,105,110,116,0),String.fromCharCode(101,110,99,111,100,105,110,103,115,95,50,95,52,56,0)], [String.fromCharCode(109,111,99,107,105,110,103,95,52,95,53,54,0),String.fromCharCode(98,95,53,50,95,111,98,115,101,114,118,97,116,105,111,110,115,0)]]);
         dragr.push(largeK.size / (Math.max(dragr.length, 9)));
         sanso[`${sanso.size}`] = sanso.size;
      }
       let libmapbufferjni4 = String.fromCharCode(108,95,48,95,101,118,101,110,116,115,0);
       let modelsZ = String.fromCharCode(99,105,114,99,108,101,100,95,53,95,51,49,0);
      profilepicK += `${(configE.size - (libavdevice6 ? 1 : 1))}`;
   if (configE.size >= profilepicK.length) {
      profilepicK += `${floatingw.length << (Math.min(profilepicK.length, 1))}`;
   }
   for (let t = 0; t < 3; t++) {
      middle5 = `${((libavdevice6 ? 3 : 5) | parseInt(`${nalyticsZ}`))}`;
   }
   if (4 == pingQ.length) {
      play8 -= parseFloat(`${detailsn.length >> (Math.min(3, Math.abs(parseInt(`${accepted7}`))))}`);
   }
      accepted7 *= (parseInt(`${nalyticsZ}`) + (smallP ? 4 : 2));
      nalyticsZ *= parseInt(`${nalyticsZ}`) / 3;
   if (!profilepicK.startsWith(`${libavdevice6}`)) {
       let libmapbufferjnik = String.fromCharCode(99,98,112,104,105,95,107,95,49,48,48,0);
       let streamingw = String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,115,95,119,95,53,51,0);
       let agreemente = 3.0;
       let with_yn = new Map([[String.fromCharCode(99,95,55,54,95,122,109,98,118,0),String.fromCharCode(105,110,102,111,108,100,101,114,95,53,95,49,52,0)], [String.fromCharCode(114,101,97,109,95,49,95,51,0),String.fromCharCode(116,115,99,99,100,97,116,97,95,100,95,51,52,0)], [String.fromCharCode(110,95,53,53,95,114,108,118,108,99,0),String.fromCharCode(99,95,54,49,95,104,101,118,99,100,101,99,0)]]);
          let thumbnail0 = String.fromCharCode(117,95,50,55,95,105,100,101,110,116,0);
         with_yn = new Map([[`${with_yn.size}`, streamingw.length]]);
         thumbnail0 = `${thumbnail0.length}`;
      do {
         libmapbufferjnik += `${libmapbufferjnik.length * 1}`;
         if (libmapbufferjnik == String.fromCharCode(49,104,99,52,119,120,98,50,114,50,0)) {
            break;
         }
      } while ((libmapbufferjnik == String.fromCharCode(49,104,99,52,119,120,98,50,114,50,0)) && ((3 << (Math.min(1, libmapbufferjnik.length))) > 2));
         streamingw = `${(libmapbufferjnik == String.fromCharCode(68,0) ? parseInt(`${agreemente}`) : libmapbufferjnik.length)}`;
      while (streamingw == libmapbufferjnik) {
         libmapbufferjnik += `${parseInt(`${agreemente}`)}`;
         break;
      }
          let stationi = String.fromCharCode(98,97,115,101,103,112,104,95,107,95,56,48,0);
          let renderY = String.fromCharCode(111,95,57,56,95,97,119,97,121,0);
          let inouttargetred9 = String.fromCharCode(120,95,51,53,95,103,101,110,101,114,97,116,101,0);
         agreemente -= parseFloat(`${inouttargetred9.length}`);
         stationi += `${renderY.length}`;
         renderY += `${stationi.length + 2}`;
         inouttargetred9 = `${renderY.length}`;
       let launcho = false;
       let rewardvideoO = true;
      for (let h = 0; h < 1; h++) {
         agreemente -= (parseFloat(`${(rewardvideoO ? 1 : 5)}`));
      }
      do {
          let airbnbstarZ = false;
          let sina3 = String.fromCharCode(99,111,100,101,114,95,119,95,49,48,0);
          let leaguedetailsbgs = [498, 129, 263];
          let cancelQ = new Map([[String.fromCharCode(106,111,105,110,105,110,103,95,98,95,49,48,48,0),true ], [String.fromCharCode(118,101,114,105,102,105,101,114,95,116,95,52,53,0),true ]]);
         with_yn = new Map([[`${cancelQ.size}`, 3]]);
         airbnbstarZ = sina3.length > leaguedetailsbgs.length;
         sina3 = "3";
         leaguedetailsbgs = [leaguedetailsbgs.length / (Math.max(7, sina3.length))];
         cancelQ = new Map([[sina3, ((airbnbstarZ ? 1 : 1) + sina3.length)]]);
         if (1471863 == with_yn.size) {
            break;
         }
      } while ((2 == (with_yn.size - 2)) && (1471863 == with_yn.size));
      while (!streamingw.endsWith(`${agreemente}`)) {
         agreemente *= parseFloat(`${2}`);
         break;
      }
          let favoritej = new Map([[String.fromCharCode(116,119,111,119,97,121,95,113,95,57,49,0),446], [String.fromCharCode(105,100,105,111,109,95,98,95,53,51,0),802], [String.fromCharCode(111,95,55,53,95,97,99,99,101,115,115,111,114,105,101,115,0),34]]);
         libmapbufferjnik = `${parseInt(`${agreemente}`) + 3}`;
         favoritej[`${favoritej.size}`] = favoritej.size + 3;
          let termsF = new Map([[String.fromCharCode(122,95,51,55,95,110,99,98,99,0),36], [String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,115,95,106,95,55,50,0),395]]);
         libmapbufferjnik = `${parseInt(`${agreemente}`) ^ 1}`;
         termsF[`${termsF.size}`] = termsF.size << (Math.min(Math.abs(3), 4));
       let baselinet = true;
       let iconP = true;
      libavdevice6 = (32 <= (controlsG.length - (!libavdevice6 ? 32 : controlsG.length)));
   }
       let flipperX = [5, 461];
      if ((flipperX.length ^ flipperX.length) > 4 && 2 > (flipperX.length ^ 4)) {
         flipperX = [1 ^ flipperX.length];
      }
      while (flipperX.includes(flipperX.length)) {
         flipperX.push(flipperX.length >> (Math.min(flipperX.length, 5)));
         break;
      }
          let mbsplashz = 2.0;
         flipperX = [flipperX.length];
         mbsplashz -= 1 + parseInt(`${mbsplashz}`);
      pingQ += `${detailsn.length}`;
       let codep = [847, 84, 631];
       let logouserJ = String.fromCharCode(103,95,50,53,95,117,118,118,101,114,116,105,99,97,108,0);
       let product7 = 0;
          let untickU = String.fromCharCode(115,101,103,109,101,110,116,97,116,105,111,110,95,48,95,56,49,0);
          let acceptedl = new Map([[String.fromCharCode(114,95,51,52,95,112,105,99,107,108,112,102,0),String.fromCharCode(115,101,116,99,116,120,95,99,95,56,55,0)], [String.fromCharCode(118,95,55,54,95,115,119,101,101,112,0),String.fromCharCode(106,95,56,95,108,117,109,105,110,97,110,99,101,0)]]);
         logouserJ = `${product7}`;
         untickU += `${1 * acceptedl.size}`;
         acceptedl = new Map([[`${acceptedl.size}`, 2]]);
         product7 <<= Math.min(2, Math.abs(codep.length / 1));
      if (5 == (logouserJ.length | codep.length) && (logouserJ.length | codep.length) == 5) {
         logouserJ = `${logouserJ.length / (Math.max(3, 8))}`;
      }
         logouserJ = `${codep.length >> (Math.min(Math.abs(1), 4))}`;
         logouserJ += "2";
         logouserJ += `${product7}`;
      do {
         logouserJ = `${(logouserJ == String.fromCharCode(70,0) ? logouserJ.length : codep.length)}`;
         if (1126689 == logouserJ.length) {
            break;
         }
      } while ((product7 >= logouserJ.length) && (1126689 == logouserJ.length));
       let huawei3 = true;
       let libruntimeexecutorb = true;
         libruntimeexecutorb = ((codep.length - (libruntimeexecutorb ? 75 : codep.length)) < 75);
      accepted7 /= Math.max(5, codep.length);
      configE = new Map([[`${play8}`, pingQ.length + 1]]);

    return <View style={[VideoPlayerstyles.controls.control]} />;
   if (1.37 > (accepted7 / (Math.max(detailsn.length, 10)))) {
      accepted7 += middle5.length;
   }
       let utilst = String.fromCharCode(120,95,49,54,95,108,105,98,115,114,116,0);
       let upgradeE = String.fromCharCode(119,95,55,49,95,106,100,109,97,105,110,99,116,0);
         utilst += `${(utilst == String.fromCharCode(84,0) ? upgradeE.length : utilst.length)}`;
         utilst = `${utilst.length - upgradeE.length}`;
          let whatsappc = 2;
         utilst = "1";
         whatsappc &= whatsappc * whatsappc;
          let umengH = 4.0;
          let listu = [443, 962];
         upgradeE = `${1 * listu.length}`;
         umengH += parseFloat(`${parseInt(`${umengH}`)}`);
         listu.push(parseInt(`${umengH}`) ^ parseInt(`${umengH}`));
      if (utilst == upgradeE) {
          let shrinkA = 0.0;
         upgradeE += `${upgradeE.length}`;
         shrinkA -= parseInt(`${shrinkA}`);
      }
       let kickl = new Map([[String.fromCharCode(101,110,99,105,112,104,101,114,95,97,95,54,57,0),525], [String.fromCharCode(100,95,55,50,95,110,97,99,107,0),791], [String.fromCharCode(110,95,51,52,95,115,117,98,109,105,116,0),485]]);
       let videok = new Map([[String.fromCharCode(115,110,105,112,112,101,116,95,116,95,56,56,0),true ], [String.fromCharCode(111,116,104,95,120,95,49,50,0),false ]]);
      episode8 = !episode8;
   while (1 > controlsG.length) {
      controlsG += `${1 | controlsG.length}`;
      break;
   }
   for (let t = 0; t < 2; t++) {
      controlsG = `${pingQ.length}`;
   }
   while (!middle5.endsWith(`${libavdevice6}`)) {
       let with_bbI = 0.0;
       let zhuboi = 2.0;
      while ((with_bbI + zhuboi) < 5.14) {
         with_bbI *= parseInt(`${with_bbI}`) * 1;
         break;
      }
      do {
         zhuboi /= Math.max(parseFloat(`${parseInt(`${with_bbI}`)}`), 3);
         if (780940.0 == zhuboi) {
            break;
         }
      } while ((2.67 == with_bbI) && (780940.0 == zhuboi));
      for (let j = 0; j < 3; j++) {
         with_bbI *= 2;
      }
      if ((2.59 * with_bbI) > 1.72 && (2.59 * with_bbI) > 2.72) {
         zhuboi -= parseFloat(`${3}`);
      }
       let libffmpegkitC = 0.0;
       let scoreg = 2.0;
      while (4.60 >= libffmpegkitC) {
          let editT = new Map([[String.fromCharCode(103,95,57,51,95,100,101,108,105,109,0),909], [String.fromCharCode(99,111,109,112,108,101,116,101,95,50,95,56,53,0),903]]);
          let appleR = 5.0;
          let liveshareh = String.fromCharCode(121,95,49,49,95,114,101,112,101,97,116,101,100,108,121,0);
          let historya = 0.0;
          let cornershootD = 1.0;
         with_bbI += parseInt(`${cornershootD}`);
         editT[`${historya}`] = 2;
         appleR /= Math.max(2, liveshareh.length << (Math.min(Math.abs(2), 3)));
         liveshareh = `${editT.size - parseInt(`${appleR}`)}`;
         historya /= Math.max(1, liveshareh.length ^ parseInt(`${historya}`));
         cornershootD *= parseInt(`${appleR}`) + 3;
         break;
      }
      middle5 = `${detailsn.length | middle5.length}`;
      break;
   }
       let libfabricjnih = new Map([[String.fromCharCode(103,95,51,48,95,115,118,113,101,110,99,0),544], [String.fromCharCode(112,105,120,101,108,102,111,114,109,97,116,95,100,95,49,48,0),470], [String.fromCharCode(97,95,54,52,95,115,99,116,101,0),450]]);
       let backwhiteX = new Map([[String.fromCharCode(101,95,49,53,95,115,105,110,103,108,101,0),971], [String.fromCharCode(122,95,53,52,95,112,114,105,110,116,101,100,0),895], [String.fromCharCode(111,95,55,55,95,99,108,103,101,116,0),415]]);
      if (4 < (backwhiteX.size & libfabricjnih.size)) {
          let gradlewN = 3;
          let stringsE = new Map([[String.fromCharCode(99,111,110,118,111,108,117,116,105,111,110,95,115,95,53,54,0),String.fromCharCode(116,104,101,114,101,117,109,95,98,95,50,54,0)], [String.fromCharCode(105,110,118,102,95,104,95,57,48,0),String.fromCharCode(104,95,50,57,95,114,103,98,0)], [String.fromCharCode(112,114,111,98,95,56,95,52,54,0),String.fromCharCode(115,95,54,57,95,116,104,114,101,115,104,111,108,100,0)]]);
          let templateprocessorB = true;
          let homeiconT = String.fromCharCode(114,101,99,111,114,100,115,95,111,95,54,56,0);
          let mathq = String.fromCharCode(97,112,116,120,95,48,95,54,50,0);
         libfabricjnih = new Map([[`${stringsE.size}`, libfabricjnih.size ^ stringsE.size]]);
         gradlewN &= 2 / (Math.max(gradlewN, 6));
         templateprocessorB = homeiconT.length > 67;
         homeiconT += `${(mathq == String.fromCharCode(108,0) ? gradlewN : mathq.length)}`;
      }
          let flipper_ = String.fromCharCode(115,97,100,120,95,99,95,55,48,0);
          let penaltyshootnogoalL = String.fromCharCode(111,95,52,50,95,109,97,112,115,0);
         backwhiteX[`${flipper_}`] = flipper_.length;
         penaltyshootnogoalL += `${3 & penaltyshootnogoalL.length}`;
         libfabricjnih = new Map([[`${libfabricjnih.size}`, libfabricjnih.size]]);
          let saveQ = String.fromCharCode(101,95,51,49,95,117,110,109,105,120,0);
         libfabricjnih = new Map([[`${libfabricjnih.size}`, 1 | backwhiteX.size]]);
         saveQ += `${3 + saveQ.length}`;
      while (3 == libfabricjnih.size) {
          let iconadslinkS = 5.0;
         backwhiteX[`${libfabricjnih.size}`] = 3;
         iconadslinkS /= Math.max(3, parseInt(`${iconadslinkS}`) ^ 1);
         break;
      }
      for (let z = 0; z < 2; z++) {
         libfabricjnih = new Map([[`${backwhiteX.size}`, libfabricjnih.size]]);
      }
      register_70V += `${controlsG.length | 1}`;
      configE[profilepicK] = profilepicK.length - 2;
   for (let b = 0; b < 3; b++) {
       let logoutT = 0;
       let gmaily = 4.0;
       let defaultroombga = String.fromCharCode(105,110,100,105,99,97,116,105,111,110,95,49,95,50,56,0);
       let chat3 = 4.0;
       let defaultlogoO = 0.0;
      if (5.31 == (parseFloat(`${logoutT}`) * chat3) && 5 == (5 & logoutT)) {
          let heart1 = 3.0;
          let philippinesY = 4.0;
          let recommendationo = new Map([[String.fromCharCode(107,95,56,56,95,106,111,105,110,0),String.fromCharCode(99,111,109,112,111,110,101,110,116,115,95,97,95,51,48,0)], [String.fromCharCode(106,95,55,57,95,98,114,117,115,104,0),String.fromCharCode(121,95,49,51,95,99,111,110,115,116,116,105,109,101,0)]]);
          let penalty1 = String.fromCharCode(116,111,109,111,114,114,111,119,95,101,95,49,50,0);
         logoutT *= 2;
         heart1 /= Math.max(5, parseFloat(`${recommendationo.size << (Math.min(3, Math.abs(parseInt(`${philippinesY}`))))}`));
         philippinesY += 1 / (Math.max(8, penalty1.length));
         recommendationo = new Map([[`${philippinesY}`, parseInt(`${heart1}`) & 1]]);
         penalty1 = "1";
      }
      if ((defaultroombga.length - parseInt(`${chat3}`)) > 3 && (parseFloat(`${defaultroombga.length}`) - chat3) > 5.60) {
         chat3 *= parseFloat(`${logoutT >> (Math.min(defaultroombga.length, 3))}`);
      }
       let storei = 3.0;
      while ((defaultlogoO - 2.13) > 3.14 && 2.13 > (storei - defaultlogoO)) {
          let ewardedO = String.fromCharCode(101,112,111,110,121,109,111,117,115,95,117,95,50,52,0);
         storei += parseInt(`${storei}`) % (Math.max(3, 10));
         ewardedO = `${ewardedO.length}`;
         break;
      }
      for (let i = 0; i < 3; i++) {
         defaultroombga += "2";
      }
      if (defaultroombga.length == 1) {
          let progress0 = String.fromCharCode(115,97,116,117,114,97,116,105,111,110,95,109,95,50,55,0);
          let notificationfillemptym = String.fromCharCode(98,95,57,54,95,102,112,99,0);
          let nalyticsr = 5;
          let fastforwardL = 0.0;
         defaultroombga += `${2 | parseInt(`${storei}`)}`;
         progress0 += `${parseInt(`${fastforwardL}`) >> (Math.min(Math.abs(3), 3))}`;
         notificationfillemptym += `${(progress0 == String.fromCharCode(51,0) ? progress0.length : parseInt(`${fastforwardL}`))}`;
         nalyticsr &= notificationfillemptym.length ^ 2;
      }
      while (1.61 > (defaultlogoO * 2.27) && 2.27 > (defaultlogoO * parseFloat(`${logoutT}`))) {
         defaultlogoO /= Math.max(parseFloat(`${3 + parseInt(`${chat3}`)}`), 5);
         break;
      }
          let reddownarrowB = String.fromCharCode(112,95,49,54,95,117,115,101,114,0);
          let desca = false;
          let subin_ = new Map([[String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,95,105,95,54,54,0),false ], [String.fromCharCode(110,95,56,0),false ]]);
         chat3 /= Math.max(parseFloat(`${parseInt(`${gmaily}`) ^ 2}`), 4);
         reddownarrowB = `${(reddownarrowB.length >> (Math.min(3, Math.abs((desca ? 2 : 4)))))}`;
         desca = !desca;
         subin_ = new Map([[`${subin_.size}`, ((desca ? 3 : 5) & 2)]]);
      while (chat3 == logoutT) {
         logoutT <<= Math.min(2, Math.abs(parseInt(`${gmaily}`)));
         break;
      }
         logoutT += parseInt(`${gmaily}`);
       let short_yog = [460, 568, 892];
         defaultlogoO /= Math.max(3, parseFloat(`${parseInt(`${gmaily}`)}`));
      do {
          let n_centerS = String.fromCharCode(114,95,55,53,95,111,117,116,108,105,110,101,0);
         logoutT %= Math.max(5, parseInt(`${storei}`));
         n_centerS = `${n_centerS.length}`;
         if (logoutT == 1367305) {
            break;
         }
      } while ((logoutT == 1367305) && (logoutT <= defaultroombga.length));
         short_yog = [2 / (Math.max(6, parseInt(`${chat3}`)))];
         storei -= defaultroombga.length << (Math.min(Math.abs(2), 4));
      middle5 += `${profilepicK.length}`;
   }
   if (episode8 || !smallP) {
      smallP = configE.size >= parseInt(`${play8}`);
   }
   while ((detailsn.length * parseInt(`${accepted7}`)) > 3) {
       let yingx = String.fromCharCode(122,95,51,53,95,112,114,105,110,116,101,114,0);
      for (let y = 0; y < 3; y++) {
         yingx += `${1 % (Math.max(6, yingx.length))}`;
      }
      while (yingx == String.fromCharCode(55,0)) {
         yingx += `${yingx.length % (Math.max(1, 6))}`;
         break;
      }
      for (let q = 0; q < 1; q++) {
         yingx += "2";
      }
      accepted7 -= configE.size & profilepicK.length;
      break;
   }
      libavdevice6 = accepted7 == middle5.length;
      middle5 = `${(pingQ.length | (libavdevice6 ? 2 : 5))}`;
      libavformatO = [detailsn.length + 2];
   for (let d = 0; d < 3; d++) {
       let roundC = 5;
       let predictionbutton3 = String.fromCharCode(97,114,116,105,99,108,101,115,95,114,95,57,49,0);
       let unreadn = 1.0;
      for (let y = 0; y < 3; y++) {
         predictionbutton3 = `${(predictionbutton3 == String.fromCharCode(48,0) ? predictionbutton3.length : roundC)}`;
      }
      for (let l = 0; l < 1; l++) {
          let libfollyt = String.fromCharCode(109,117,110,109,97,112,95,53,95,50,55,0);
         unreadn /= Math.max(3, 3);
         libfollyt += `${libfollyt.length & libfollyt.length}`;
      }
      do {
         predictionbutton3 = `${(String.fromCharCode(117,0) == predictionbutton3 ? parseInt(`${unreadn}`) : predictionbutton3.length)}`;
         if (String.fromCharCode(121,55,121,104,106,48,0) == predictionbutton3) {
            break;
         }
      } while ((String.fromCharCode(121,55,121,104,106,48,0) == predictionbutton3) && (predictionbutton3.length >= 3));
         predictionbutton3 = "1";
      while ((predictionbutton3.length - roundC) == 3 && 1 == (3 - predictionbutton3.length)) {
         predictionbutton3 = `${parseInt(`${unreadn}`)}`;
         break;
      }
       let yellowanimationliven = new Map([[String.fromCharCode(121,95,52,48,95,109,115,117,98,0),273], [String.fromCharCode(109,95,57,50,95,112,97,114,99,111,114,0),507], [String.fromCharCode(100,101,114,101,102,95,99,95,57,50,0),761]]);
      do {
          let whistleorangeR = String.fromCharCode(111,95,50,53,95,97,112,112,108,105,101,115,0);
          let combineg = new Map([[String.fromCharCode(102,114,101,113,95,107,95,54,54,0),76], [String.fromCharCode(97,95,50,95,112,97,99,107,0),766]]);
          let pointD = String.fromCharCode(115,95,55,52,95,99,111,117,110,116,114,121,0);
          let regengl = String.fromCharCode(113,95,55,56,95,114,116,112,100,101,99,0);
         roundC %= Math.max(3, parseInt(`${unreadn}`) % (Math.max(predictionbutton3.length, 5)));
         whistleorangeR += `${whistleorangeR.length / (Math.max(2, combineg.size))}`;
         combineg[`${pointD}`] = pointD.length - combineg.size;
         regengl += `${2 | pointD.length}`;
         if (2183107 == roundC) {
            break;
         }
      } while ((!Array.from(yellowanimationliven.values()).includes(roundC)) && (2183107 == roundC));
      do {
          let infoR = 3;
          let pushH = 2.0;
         yellowanimationliven = new Map([[`${unreadn}`, 3]]);
         infoR %= Math.max(parseInt(`${pushH}`), 4);
         pushH *= parseFloat(`${parseInt(`${pushH}`) + infoR}`);
         if (633786 == yellowanimationliven.size) {
            break;
         }
      } while ((633786 == yellowanimationliven.size) && (roundC < 2));
          let libfabricjniK = String.fromCharCode(114,101,115,105,103,110,95,118,95,54,52,0);
         unreadn /= Math.max(1, 2);
         libfabricjniK += `${libfabricjniK.length + 1}`;
      accepted7 += 1 + detailsn.length;
   }
      nterstitialP |= profilepicK.length + nterstitialP;
   if ((controlsG.length ^ libavformatO.length) >= 5 || (5 ^ controlsG.length) >= 4) {
      controlsG = `${((episode8 ? 3 : 5) + libavformatO.length)}`;
   }
       let containerM = String.fromCharCode(99,95,56,55,95,101,112,111,99,104,0);
       let stepq = true;
       let internetB = 5.0;
       let armvaB = 4.0;
         internetB -= containerM.length;
         internetB -= parseInt(`${armvaB}`);
      while (2.46 > (armvaB * 2.68) && 2.68 > armvaB) {
         stepq = containerM.length > 3 && !stepq;
         break;
      }
      if (1.90 >= (2.17 + armvaB) && 5.36 >= (2.17 + internetB)) {
         internetB -= ((stepq ? 1 : 2));
      }
      if ((containerM.length & 5) >= 2) {
          let gifgoalbgZ = 4.0;
          let minimizeO = String.fromCharCode(121,95,52,53,95,115,101,114,118,105,99,101,0);
          let colorsi = false;
          let libavfilterC = String.fromCharCode(118,95,49,52,95,108,111,119,100,101,108,97,121,0);
          let baselined = 0.0;
         containerM = `${minimizeO.length}`;
         gifgoalbgZ /= Math.max((parseFloat(`${(colorsi ? 2 : 2) % (Math.max(parseInt(`${gifgoalbgZ}`), 1))}`)), 3);
         minimizeO += `${(libavfilterC == String.fromCharCode(119,0) ? parseInt(`${gifgoalbgZ}`) : libavfilterC.length)}`;
         colorsi = !colorsi;
         baselined += libavfilterC.length & parseInt(`${baselined}`);
      }
      nterstitialP -= 3;
   do {
       let searchbarb = 0.0;
      for (let n = 0; n < 2; n++) {
         searchbarb /= Math.max(parseInt(`${searchbarb}`), 5);
      }
      do {
          let modelsB = false;
          let graph1 = String.fromCharCode(113,115,99,97,108,101,113,112,95,101,95,56,50,0);
          let iconqqQ = String.fromCharCode(109,97,112,112,105,110,103,95,54,95,57,50,0);
          let icondefaultthumbnaild = 1.0;
         searchbarb /= Math.max(2, ((modelsB ? 4 : 5) / (Math.max(parseInt(`${searchbarb}`), 2))));
         modelsB = icondefaultthumbnaild <= 54.43;
         graph1 += `${iconqqQ.length << (Math.min(2, Math.abs(parseInt(`${icondefaultthumbnaild}`))))}`;
         iconqqQ += `${graph1.length - 1}`;
         if (searchbarb == 3844438.0) {
            break;
         }
      } while ((searchbarb >= searchbarb) && (searchbarb == 3844438.0));
         searchbarb += 3 >> (Math.min(Math.abs(parseInt(`${searchbarb}`)), 4));
      floatingw = [profilepicK.length];
      if (floatingw.length == 3805257) {
         break;
      }
   } while ((floatingw.length == 3805257) && (episode8));
   for (let w = 0; w < 2; w++) {
       let tickedt = String.fromCharCode(119,115,118,113,97,95,116,95,55,57,0);
      for (let t = 0; t < 1; t++) {
         tickedt += `${tickedt.length}`;
      }
          let gmailK = new Map([[String.fromCharCode(117,110,112,97,99,107,101,100,95,99,95,57,55,0),358], [String.fromCharCode(102,95,53,50,95,100,115,100,112,99,109,0),963], [String.fromCharCode(120,118,109,99,95,99,95,54,48,0),401]]);
          let release_4dS = new Map([[String.fromCharCode(115,116,97,109,112,115,95,112,95,50,0),836], [String.fromCharCode(113,95,53,52,95,115,99,101,110,101,99,117,116,0),269]]);
          let darkJ = false;
         tickedt += `${2 + release_4dS.size}`;
         gmailK[`${gmailK.size}`] = gmailK.size % (Math.max(9, gmailK.size));
         release_4dS[`${gmailK.size}`] = gmailK.size | gmailK.size;
         tickedt += `${tickedt.length & 2}`;
      register_70V += `${configE.size & parseInt(`${nalyticsZ}`)}`;
   }

  }

   
  renderTopControls() {
       let leakcheckerh = String.fromCharCode(110,97,99,107,95,109,95,49,56,0);
    let long_uZ = new Map([[String.fromCharCode(122,95,51,52,95,114,101,102,99,111,117,110,116,101,114,0),74], [String.fromCharCode(117,95,49,52,95,97,112,115,0),16], [String.fromCharCode(104,119,102,114,97,109,101,95,56,95,54,55,0),533]]);
    let resendy = 4;
    let tailF = 2.0;
    let searchbar9 = false;
    let statsnomoredatai = String.fromCharCode(102,111,99,117,115,97,98,108,101,95,105,95,50,57,0);
    let u_imageI = String.fromCharCode(115,119,102,112,108,97,121,101,114,95,48,95,50,0);
    let downloadingk = String.fromCharCode(109,97,105,110,95,107,95,50,48,0);
    let cornerR = false;
      u_imageI += `${downloadingk.length * 3}`;
   do {
       let i_titleN = false;
       let taiwanE = new Map([[String.fromCharCode(108,111,117,112,101,95,51,95,57,49,0),451], [String.fromCharCode(104,95,52,49,95,103,101,110,99,98,0),503], [String.fromCharCode(100,101,102,97,117,108,95,117,95,51,56,0),358]]);
       let predictionO = 5.0;
       let goalj = 1.0;
       let libcrashsdkK = 1;
         taiwanE[`${goalj}`] = 1 << (Math.min(Math.abs(parseInt(`${goalj}`)), 3));
      if ((goalj - 3.37) < 4.35 && 3.37 < goalj) {
         goalj -= taiwanE.size / 1;
      }
      for (let a = 0; a < 2; a++) {
         i_titleN = !i_titleN;
      }
      while (taiwanE.size <= 1 && 4 <= (taiwanE.size << (Math.min(Math.abs(1), 3)))) {
         i_titleN = taiwanE.size == 6;
         break;
      }
      while (i_titleN) {
         i_titleN = 25.38 >= predictionO;
         break;
      }
      do {
          let sportsz = false;
          let telemetryr = 1;
          let ewarded_ = new Map([[String.fromCharCode(99,111,110,110,101,99,116,105,110,103,95,99,95,52,0),String.fromCharCode(118,120,119,111,114,107,115,95,121,95,49,0)], [String.fromCharCode(114,101,106,101,99,116,101,100,95,48,95,48,0),String.fromCharCode(118,97,108,105,100,97,116,101,95,103,95,54,57,0)]]);
          let backgroundw = false;
         goalj /= Math.max(libcrashsdkK, 5);
         sportsz = ewarded_[`${backgroundw}`] != null;
         telemetryr -= ((backgroundw ? 4 : 2));
         ewarded_[`${backgroundw}`] = 3 >> (Math.min(1, Math.abs(ewarded_.size)));
         if (goalj == 2227691.0) {
            break;
         }
      } while ((goalj == 2227691.0) && (3.64 <= (goalj + 5.31)));
       let templateprocessorn = String.fromCharCode(121,112,114,101,100,105,99,116,105,111,110,95,55,95,53,55,0);
       let libjsinspector1 = String.fromCharCode(97,100,97,112,116,97,116,105,111,110,115,101,116,95,121,95,53,0);
         templateprocessorn = `${templateprocessorn.length}`;
      for (let m = 0; m < 3; m++) {
         taiwanE[`${predictionO}`] = parseInt(`${predictionO}`);
      }
         templateprocessorn = `${(parseInt(`${predictionO}`) | (i_titleN ? 4 : 3))}`;
         predictionO += parseFloat(`${parseInt(`${goalj}`) + 1}`);
      while (2 >= (5 + taiwanE.size)) {
          let plust = new Map([[String.fromCharCode(117,95,56,48,95,100,117,114,97,116,105,111,110,115,0),864], [String.fromCharCode(117,116,105,109,101,95,56,95,52,52,0),437], [String.fromCharCode(109,95,51,52,95,99,109,97,107,101,0),858]]);
          let foreground8 = [296, 584, 986];
          let giftbuttona = false;
          let reportZ = String.fromCharCode(101,95,52,95,115,117,98,109,105,116,0);
         taiwanE[templateprocessorn] = ((i_titleN ? 3 : 1) / (Math.max(templateprocessorn.length, 7)));
         plust = new Map([[`${plust.size}`, 2 | plust.size]]);
         foreground8.push(1);
         giftbuttona = foreground8.includes(giftbuttona);
         reportZ = `${((giftbuttona ? 5 : 3))}`;
         break;
      }
         goalj += parseInt(`${predictionO}`);
       let nativemoduler = String.fromCharCode(108,95,53,49,95,97,112,116,120,0);
       let commentn = String.fromCharCode(102,95,56,48,95,117,116,112,117,116,0);
         taiwanE = new Map([[`${i_titleN}`, ((i_titleN ? 1 : 5) | 2)]]);
      u_imageI += `${libcrashsdkK * 2}`;
      if (String.fromCharCode(115,98,110,110,95,102,108,0) == u_imageI) {
         break;
      }
   } while ((u_imageI.length < 4) && (String.fromCharCode(115,98,110,110,95,102,108,0) == u_imageI));

    const backControl = this.props.disableBack
      ? this.renderNullControl()
      : this.renderBack();
    const volumeControl = this.props.disableVolume
      ? this.renderNullControl()
      : this.renderVolume();

    const videoTitle = this.renderVideoTitle();
   for (let p = 0; p < 3; p++) {
      searchbar9 = null != long_uZ[`${searchbar9}`];
   }
   for (let h = 0; h < 2; h++) {
      u_imageI = `${(resendy * (searchbar9 ? 1 : 5))}`;
   }


    return (
      <Animated.View
        style={[
          VideoPlayerstyles.controls.top,
          {
            opacity: this.animations.topControl.opacity,
            marginTop: this.animations.topControl.marginTop,
          },
        ]}>
        <ImageBackground
          source={require('./images/icons/filterSpinner.png')}
          style={[VideoPlayerstyles.controls.column]}
          imageStyle={[VideoPlayerstyles.controls.vignette]}>
          <SafeAreaView style={VideoPlayerstyles.controls.topControlGroup}>
            {backControl}
            <View style={VideoPlayerstyles.controls.pullRight}>
              { }
              {videoTitle}
            </View>
          </SafeAreaView>
        </ImageBackground>
      </Animated.View>
    );
   for (let m = 0; m < 2; m++) {
       let save7 = String.fromCharCode(103,95,57,51,95,106,115,111,110,114,112,99,0);
       let subin3 = 1;
      if (2 == (save7.length ^ 4) && (4 ^ subin3) == 3) {
          let libfbj = String.fromCharCode(115,116,97,116,117,115,111,114,95,105,95,57,55,0);
          let emoji5 = true;
          let libswscaleB = 4;
         subin3 &= 2 ^ libswscaleB;
         libfbj += `${((emoji5 ? 3 : 1))}`;
         emoji5 = libfbj.includes(`${emoji5}`);
         libswscaleB |= libfbj.length;
      }
      if (save7.length > subin3) {
         save7 += `${save7.length % (Math.max(2, 1))}`;
      }
      if (save7.length <= subin3) {
          let n_hasho = 5.0;
          let textlayoutmanagerA = String.fromCharCode(116,100,115,102,95,97,95,55,50,0);
          let actions7 = [92, 618];
         subin3 -= 1 + parseInt(`${n_hasho}`);
         n_hasho /= Math.max(3, parseFloat(`${3}`));
         textlayoutmanagerA = `${1 << (Math.min(4, textlayoutmanagerA.length))}`;
         actions7.push((textlayoutmanagerA == String.fromCharCode(85,0) ? textlayoutmanagerA.length : actions7.length));
      }
         save7 = `${3 % (Math.max(1, save7.length))}`;
      for (let o = 0; o < 3; o++) {
         subin3 >>= Math.min(3, Math.abs(3));
      }
         subin3 %= Math.max(subin3 ^ 3, 5);
      long_uZ[`${resendy}`] = 1;
   }
      tailF /= Math.max(3, downloadingk.length);

  }

   
  renderBack() {
       let recommendation7 = String.fromCharCode(98,95,56,49,95,99,104,111,112,0);
    let themek = [String.fromCharCode(113,95,52,55,95,112,97,103,101,108,105,115,116,0), String.fromCharCode(116,95,51,56,95,121,117,118,0)];
    let progressV = 1.0;
    let runtimeschedulere = String.fromCharCode(102,95,55,95,109,121,113,114,0);
    let gmail7 = String.fromCharCode(100,95,54,51,95,115,117,110,112,111,115,0);
    let filter5 = String.fromCharCode(115,116,105,99,107,121,95,52,95,55,56,0);
    let aboutr = 1.0;
    let ticko = 3.0;
    let libreanimatedw = true;
    let buildp = 3;
    let greyX = [551, 984];
    let albumD = new Map([[String.fromCharCode(114,101,115,104,97,112,101,95,55,95,52,0),String.fromCharCode(117,110,114,101,108,105,97,98,108,101,95,122,95,57,0)], [String.fromCharCode(114,101,109,101,109,98,101,114,101,100,95,111,95,49,56,0),String.fromCharCode(99,111,110,115,111,108,101,95,107,95,50,50,0)], [String.fromCharCode(109,95,53,48,95,100,120,116,111,114,121,0),String.fromCharCode(99,95,49,56,95,105,115,97,99,0)]]);
    let greyV = String.fromCharCode(100,101,115,104,97,107,101,95,100,95,50,50,0);
    let clockp = new Map([[String.fromCharCode(102,105,110,103,101,114,95,103,95,54,49,0),false ], [String.fromCharCode(111,118,101,114,108,97,121,105,110,103,95,57,95,53,51,0),false ], [String.fromCharCode(101,108,105,109,105,110,97,116,105,111,110,95,109,95,57,53,0),true ]]);
    let iconorientationO = 5;
      libreanimatedw = recommendation7.length > gmail7.length;
   if ((3.17 / (Math.max(4, ticko))) < 1.98 && 5 < (themek.length / (Math.max(8, parseInt(`${ticko}`))))) {
       let indicatorI = 2.0;
       let dialogs = String.fromCharCode(117,95,56,95,109,112,115,117,98,0);
       let downJ = String.fromCharCode(104,95,56,53,95,98,117,108,107,0);
       let casting0 = String.fromCharCode(120,95,49,95,99,104,117,110,107,115,0);
      if (2 >= (dialogs.length + 5) && (indicatorI * 5.38) >= 3.21) {
         indicatorI /= Math.max(4, (parseFloat(`${dialogs == String.fromCharCode(122,0) ? dialogs.length : downJ.length}`)));
      }
      while (!downJ.startsWith(`${casting0.length}`)) {
          let paginationX = 1;
          let gesturest = String.fromCharCode(117,110,102,111,114,109,97,116,116,101,100,95,105,95,50,57,0);
          let mbsplash0 = String.fromCharCode(108,101,102,116,109,111,115,116,95,56,95,50,48,0);
          let audienceY = [253, 970];
         downJ = "3";
         paginationX *= mbsplash0.length % (Math.max(gesturest.length, 6));
         gesturest = `${mbsplash0.length + audienceY.length}`;
         audienceY.push(3 - audienceY.length);
         break;
      }
          let sideR = String.fromCharCode(117,110,100,101,114,114,117,110,95,50,95,51,0);
         dialogs = `${casting0.length % 1}`;
         sideR = `${(String.fromCharCode(65,0) == sideR ? sideR.length : sideR.length)}`;
          let frame_nxP = String.fromCharCode(97,117,116,111,105,110,99,114,101,109,101,110,116,95,52,95,54,57,0);
          let trophyS = 5;
         dialogs += "1";
         frame_nxP = `${frame_nxP.length & trophyS}`;
         trophyS ^= trophyS;
      if (dialogs.length == 1) {
         dialogs = `${parseInt(`${indicatorI}`) % (Math.max(4, dialogs.length))}`;
      }
      do {
          let animationD = 2;
          let castF = new Map([[String.fromCharCode(110,95,55,54,95,104,97,110,100,0),567], [String.fromCharCode(98,95,54,52,95,111,98,115,101,114,118,101,114,115,0),547], [String.fromCharCode(115,95,56,49,95,109,117,108,116,105,112,108,121,105,110,103,0),952]]);
          let detailsG = 4.0;
          let libflipperi = 0.0;
         dialogs += `${1 >> (Math.min(5, dialogs.length))}`;
         animationD |= parseInt(`${detailsG}`) | 2;
         castF[`${libflipperi}`] = parseInt(`${libflipperi}`) << (Math.min(4, Math.abs(parseInt(`${detailsG}`))));
         if (dialogs == String.fromCharCode(49,107,50,48,99,50,56,48,121,0)) {
            break;
         }
      } while ((dialogs == String.fromCharCode(49,107,50,48,99,50,56,48,121,0)) && (4 >= dialogs.length));
         indicatorI += (parseFloat(`${String.fromCharCode(75,0) == dialogs ? parseInt(`${indicatorI}`) : dialogs.length}`));
         dialogs += `${dialogs.length}`;
          let mbsplashC = 1.0;
          let reportP = String.fromCharCode(110,95,55,51,95,109,115,103,115,109,100,101,99,0);
          let championF = 4.0;
         casting0 += `${(String.fromCharCode(117,0) == casting0 ? reportP.length : casting0.length)}`;
         mbsplashC -= parseFloat(`${parseInt(`${championF}`)}`);
         reportP = `${parseInt(`${championF}`) << (Math.min(Math.abs(parseInt(`${mbsplashC}`)), 4))}`;
      for (let e = 0; e < 3; e++) {
          let productU = String.fromCharCode(108,111,103,115,95,100,95,53,52,0);
          let china0 = true;
         downJ = `${2 << (Math.min(2, productU.length))}`;
         productU += "1";
      }
          let heji_ = [236, 934];
          let iconclosewhitebgS = 1.0;
          let downloadedD = String.fromCharCode(100,108,105,100,120,95,106,95,53,0);
         downJ = `${downJ.length / 3}`;
         heji_ = [downloadedD.length / 2];
         iconclosewhitebgS /= Math.max(parseFloat(`${2 << (Math.min(2, heji_.length))}`), 1);
         downloadedD += `${heji_.length / 3}`;
         indicatorI += (parseFloat(`${casting0 == String.fromCharCode(115,0) ? parseInt(`${indicatorI}`) : casting0.length}`));
      ticko /= Math.max(5, 1 >> (Math.min(4, recommendation7.length)));
   }
   while ((themek.length & runtimeschedulere.length) <= 1 && (runtimeschedulere.length & 1) <= 5) {
      runtimeschedulere = `${3 ^ recommendation7.length}`;
      break;
   }
      runtimeschedulere = "2";
   for (let q = 0; q < 3; q++) {
       let circleJ = 4;
       let weibor = [872, 918, 427];
      for (let q = 0; q < 3; q++) {
          let backwardk = String.fromCharCode(115,95,56,57,95,107,101,114,110,101,114,0);
          let shirtJ = [161, 658, 843];
         circleJ *= 1 >> (Math.min(Math.abs(circleJ), 1));
         backwardk += `${3 + shirtJ.length}`;
         shirtJ = [shirtJ.length << (Math.min(Math.abs(2), 2))];
      }
      for (let s = 0; s < 3; s++) {
          let infox = true;
          let iconarrowleftq = 3.0;
          let o_countj = 1.0;
          let guideH = 3;
          let textinputS = 2;
         weibor = [weibor.length ^ 1];
         infox = guideH <= 3 && 82.16 <= o_countj;
         iconarrowleftq -= textinputS;
         o_countj *= guideH | 3;
      }
       let iconarrowlefth = false;
          let photon = false;
          let iconshareH = false;
         weibor.push((3 >> (Math.min(5, Math.abs((iconarrowlefth ? 1 : 5))))));
         photon = iconshareH;
          let mbjscommon7 = 3;
          let sentryG = 5.0;
         weibor = [circleJ];
         mbjscommon7 >>= Math.min(Math.abs(parseInt(`${sentryG}`)), 2);
         sentryG -= parseFloat(`${mbjscommon7 | parseInt(`${sentryG}`)}`);
         iconarrowlefth = 48 <= circleJ;
      progressV -= greyX.length;
   }
       let code2 = 1;
       let notificationk = 0;
       let render4 = 3.0;
         code2 &= 2 * code2;
      if (2.78 > render4) {
          let feedback9 = String.fromCharCode(113,95,54,57,95,117,116,118,105,100,101,111,0);
         code2 ^= (feedback9 == String.fromCharCode(66,0) ? parseInt(`${render4}`) : feedback9.length);
      }
         notificationk ^= notificationk;
         notificationk |= notificationk - code2;
         render4 /= Math.max(2, 3 & notificationk);
         notificationk += 2;
      for (let e = 0; e < 3; e++) {
         notificationk <<= Math.min(4, Math.abs(2 % (Math.max(parseInt(`${render4}`), 2))));
      }
      for (let w = 0; w < 2; w++) {
         code2 >>= Math.min(Math.abs(3), 1);
      }
       let renderg = true;
      themek = [2];

    return this.renderControl(
      <Image
        source={require('./images/icons/huaweiHolder.png')}
        style={VideoPlayerstyles.controls.back}
      />,
      this.events.onBack,
      VideoPlayerstyles.controls.back,
    );
      runtimeschedulere = `${recommendation7.length}`;
      aboutr -= parseFloat(`${buildp + 2}`);
       let libavcodec9 = 0.0;
      while (4.45 == (libavcodec9 - 1.20)) {
         libavcodec9 -= parseFloat(`${parseInt(`${libavcodec9}`)}`);
         break;
      }
       let template_oyE = String.fromCharCode(108,115,119,115,117,116,105,108,115,95,101,95,49,0);
       let uploadF = String.fromCharCode(115,95,50,53,95,100,101,113,117,111,116,101,0);
      if (!template_oyE.startsWith(`${uploadF.length}`)) {
          let annerm = 1.0;
         uploadF += `${1 << (Math.min(4, Math.abs(parseInt(`${libavcodec9}`))))}`;
         annerm += parseFloat(`${3}`);
      }
      greyX.push(themek.length);
      libreanimatedw = String.fromCharCode(76,0) == filter5;
   if ((parseInt(`${ticko}`) - runtimeschedulere.length) <= 4 || 3 <= (4 - parseInt(`${ticko}`))) {
      runtimeschedulere = `${buildp}`;
   }
      themek = [1 & albumD.size];

  }

   
  renderVolume() {
       let streamingi = String.fromCharCode(100,95,49,53,95,115,121,115,108,111,103,0);
    let iconadslink4 = 1.0;
    let fcopy_jn = String.fromCharCode(115,101,109,105,98,111,108,100,95,106,95,50,48,0);
    let mintegralE = 4;
    let qaagC = 5.0;
    let currentQ = [391, 908];
    let crickete = [340, 308, 29];
    let downarrowC = 5.0;
    let reddownarrowi = [68, 233];
    let inactiveG = new Map([[String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,114,95,51,50,0),String.fromCharCode(115,117,98,115,116,105,116,117,116,101,95,97,95,54,48,0)], [String.fromCharCode(118,105,115,105,116,111,114,95,99,95,49,49,0),String.fromCharCode(112,101,114,112,101,110,100,105,99,117,108,97,114,95,48,95,53,51,0)]]);
    let basketballtrophyo = 1.0;
    let homeloading7 = 3.0;
       let leakchecker1 = String.fromCharCode(104,95,51,57,95,100,101,99,111,100,101,102,114,97,109,101,0);
         leakchecker1 += `${(String.fromCharCode(52,0) == leakchecker1 ? leakchecker1.length : leakchecker1.length)}`;
          let layout4 = String.fromCharCode(111,95,57,56,95,115,99,97,108,101,99,117,100,97,0);
          let kicky = 3.0;
         leakchecker1 = "2";
         layout4 = `${(String.fromCharCode(57,0) == layout4 ? parseInt(`${kicky}`) : layout4.length)}`;
         kicky -= 1 & layout4.length;
       let runtimeschedulerT = String.fromCharCode(112,114,111,114,101,115,100,115,112,95,103,95,55,52,0);
       let colorsr = String.fromCharCode(115,95,56,52,95,118,115,97,100,0);
      qaagC -= parseFloat(`${1}`);
   if (!currentQ.includes(iconadslink4)) {
       let orangeuparrowX = [101, 65];
       let tooltipsP = 5.0;
       let largesoundr = 0.0;
       let chatroombackgroundh = String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,95,52,95,52,51,0);
       let iconcalendarT = String.fromCharCode(98,95,51,49,95,122,117,108,117,0);
      if ((largesoundr / (Math.max(parseFloat(`${orangeuparrowX.length}`), 8))) <= 4.12 || 2.1 <= (largesoundr / 4.12)) {
         largesoundr -= parseFloat(`${parseInt(`${largesoundr}`) | parseInt(`${tooltipsP}`)}`);
      }
       let related7 = true;
      if (iconcalendarT.length > 1) {
         related7 = (tooltipsP - chatroombackgroundh.length) > 53.98;
      }
       let placeholderf = new Map([[String.fromCharCode(107,95,54,52,95,114,101,100,115,112,97,114,107,0),true ], [String.fromCharCode(104,97,115,104,100,101,115,116,114,111,121,95,101,95,50,50,0),true ], [String.fromCharCode(114,101,116,105,110,97,95,51,95,51,57,0),false ]]);
       let profileA = new Map([[String.fromCharCode(117,110,97,114,99,104,105,118,101,100,95,99,95,57,49,0),String.fromCharCode(112,95,55,48,95,116,105,109,101,117,116,105,108,115,0)], [String.fromCharCode(97,95,49,51,95,115,117,105,116,97,98,108,101,0),String.fromCharCode(117,95,53,95,109,97,110,117,97,108,108,121,0)], [String.fromCharCode(114,95,56,55,95,115,105,108,101,110,99,101,100,0),String.fromCharCode(114,95,55,48,95,110,105,107,111,110,0)]]);
      for (let h = 0; h < 1; h++) {
         profileA[iconcalendarT] = (iconcalendarT == String.fromCharCode(89,0) ? orangeuparrowX.length : iconcalendarT.length);
      }
      if (tooltipsP == 3.36 || (tooltipsP / 3.36) == 3.86) {
          let floatingA = String.fromCharCode(108,111,110,103,101,115,116,95,51,95,56,49,0);
          let buffero = true;
          let minimizeX = String.fromCharCode(117,95,49,48,48,95,114,101,103,105,115,116,101,114,115,0);
         related7 = String.fromCharCode(100,0) == floatingA;
         floatingA += `${(minimizeX == String.fromCharCode(48,0) ? minimizeX.length : (buffero ? 1 : 4))}`;
         buffero = ((minimizeX.length | (buffero ? 90 : minimizeX.length)) == 90);
      }
      do {
         placeholderf[`${orangeuparrowX.length}`] = 1;
         if (3129378 == placeholderf.size) {
            break;
         }
      } while ((3129378 == placeholderf.size) && (3 > (profileA.size | placeholderf.size) || 4 > (profileA.size | 3)));
       let dycreatorV = String.fromCharCode(108,95,52,51,95,115,117,98,116,114,97,99,116,109,111,100,0);
       let userR = String.fromCharCode(103,95,53,95,100,105,103,101,115,116,0);
      while (!chatroombackgroundh.endsWith(`${orangeuparrowX.length}`)) {
         orangeuparrowX.push(((related7 ? 3 : 5) + 3));
         break;
      }
         orangeuparrowX.push(((related7 ? 3 : 3)));
         profileA = new Map([[`${placeholderf.size}`, 1 ^ userR.length]]);
      do {
         dycreatorV = `${3 ^ orangeuparrowX.length}`;
         if (dycreatorV == String.fromCharCode(100,95,102,0)) {
            break;
         }
      } while ((dycreatorV == String.fromCharCode(100,95,102,0)) && (!userR.endsWith(dycreatorV)));
      while ((profileA.size * orangeuparrowX.length) == 3 && 1 == (profileA.size * 3)) {
          let membership3 = 3.0;
         orangeuparrowX = [(String.fromCharCode(79,0) == iconcalendarT ? dycreatorV.length : iconcalendarT.length)];
         membership3 /= Math.max(parseFloat(`${parseInt(`${membership3}`)}`), 3);
         break;
      }
          let reportl = 3.0;
          let orientationx = String.fromCharCode(99,111,109,112,108,101,116,101,100,95,50,95,53,57,0);
          let popupa = 2.0;
         largesoundr /= Math.max(5, parseFloat(`${orientationx.length}`));
         reportl -= parseFloat(`${3}`);
         orientationx += `${parseInt(`${popupa}`)}`;
         placeholderf = new Map([[`${largesoundr}`, 1 ^ iconcalendarT.length]]);
      iconadslink4 *= parseFloat(`${parseInt(`${tooltipsP}`)}`);
   }

    return (
      <View style={VideoPlayerstyles.volume.container}>
        <View
          style={[
            VideoPlayerstyles.volume.fill,
            {width: this.state.volumeFillWidth},
          ]}
        />
        <View
          style={[
            VideoPlayerstyles.volume.track,
            {width: this.state.volumeTrackWidth},
          ]}
        />
        <View
          style={[
            VideoPlayerstyles.volume.handle,
            {left: this.state.volumePosition},
          ]}
          {...this.player.volumePanResponder.panHandlers}>
          <Image
            style={VideoPlayerstyles.volume.icon}
            source={require('./images/icons/selectLibavcodecGifgoalbg.png')}
          />
        </View>
      </View>
    );
   for (let b = 0; b < 3; b++) {
      crickete.push(3 - currentQ.length);
   }
   if (downarrowC <= 4.40) {
      downarrowC -= parseInt(`${qaagC}`) ^ 2;
   }

  }
  
  renderVideoTitle() {
       let executorB = new Map([[String.fromCharCode(115,105,112,114,100,97,116,97,95,105,95,50,52,0),902], [String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,97,95,53,49,0),386], [String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,95,109,95,50,54,0),964]]);
    let frame_qeP = new Map([[String.fromCharCode(112,95,50,57,95,100,101,108,105,118,101,114,101,100,0),true ], [String.fromCharCode(99,95,55,53,95,109,105,109,101,0),true ]]);
    let auto_hV = new Map([[String.fromCharCode(101,109,112,105,114,105,99,97,108,108,121,95,110,95,51,52,0),607], [String.fromCharCode(121,95,51,95,115,105,109,117,108,116,97,110,101,111,117,115,0),742], [String.fromCharCode(114,105,110,103,116,111,110,101,115,95,119,95,50,56,0),437]]);
    let leagueG = String.fromCharCode(116,95,53,53,95,109,111,110,103,111,0);
    let ticko = 2;
    let sheetw = [String.fromCharCode(98,95,52,95,100,101,99,98,110,0), String.fromCharCode(102,95,57,55,95,98,98,117,102,0)];
    let pangle0 = new Map([[String.fromCharCode(108,95,52,55,95,115,105,98,108,105,110,103,115,0),275], [String.fromCharCode(114,101,115,97,109,112,108,101,114,95,119,95,51,52,0),793]]);
    let watchE = new Map([[String.fromCharCode(107,95,57,51,95,104,117,102,102,121,117,118,101,110,99,100,115,112,0),String.fromCharCode(101,120,116,114,97,100,97,116,97,112,115,101,116,115,95,97,95,53,57,0)], [String.fromCharCode(97,95,54,95,101,110,118,101,108,111,112,101,0),String.fromCharCode(101,95,53,56,95,115,101,114,105,97,108,105,122,101,100,0)]]);
    let gestures5 = true;
    let leaguedetailsbg4 = [String.fromCharCode(117,95,52,95,115,99,97,109,0), String.fromCharCode(110,95,56,53,95,108,111,99,108,0)];
    let libavformatM = 3.0;
    let icondefaultthumbnail7 = [String.fromCharCode(120,95,56,52,95,115,101,112,105,97,0), String.fromCharCode(100,95,57,55,95,101,115,99,97,112,101,115,0), String.fromCharCode(116,101,97,109,115,95,113,95,54,55,0)];
    let basea = [778, 539, 498];
    let footballtrophyX = true;
    let attributedstring6 = String.fromCharCode(101,95,56,54,95,115,105,103,118,101,114,0);
    let userD = false;
    let yellowcirclebg8 = String.fromCharCode(119,95,56,95,99,97,110,116,0);
      frame_qeP[`${sheetw.length}`] = 2;
   do {
      leaguedetailsbg4 = [3 - watchE.size];
      if (554353 == leaguedetailsbg4.length) {
         break;
      }
   } while ((554353 == leaguedetailsbg4.length) && (2 < (parseInt(`${libavformatM}`) + leaguedetailsbg4.length) || 5 < (leaguedetailsbg4.length << (Math.min(Math.abs(2), 2)))));
   do {
      libavformatM += icondefaultthumbnail7.length + 3;
      if (4542960.0 == libavformatM) {
         break;
      }
   } while ((2.5 <= (4.16 * libavformatM) && (leaguedetailsbg4.length * libavformatM) <= 4.16) && (4542960.0 == libavformatM));
   while (Array.from(frame_qeP.keys()).includes(`${ticko}`)) {
      ticko += ((gestures5 ? 4 : 1) % (Math.max(3, 8)));
      break;
   }
   while ((auto_hV.size + leagueG.length) <= 5 && 5 <= (auto_hV.size + 5)) {
       let signinupz = String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,95,115,95,54,52,0);
      do {
          let s_positionw = 2;
          let placeholderM = false;
          let imagemanager7 = false;
          let iconsharefriends6 = String.fromCharCode(112,95,55,49,95,115,121,110,116,104,101,115,105,122,101,114,0);
         signinupz += "1";
         s_positionw /= Math.max(iconsharefriends6.length, 5);
         placeholderM = (imagemanager7 ? !placeholderM : imagemanager7);
         iconsharefriends6 += `${s_positionw * 3}`;
         if (String.fromCharCode(51,122,119,98,118,121,0) == signinupz) {
            break;
         }
      } while ((String.fromCharCode(51,122,119,98,118,121,0) == signinupz) && (!signinupz.endsWith(signinupz)));
      do {
          let leakchecker3 = 1.0;
          let baseP = false;
          let time_1ci = String.fromCharCode(115,95,53,54,95,97,100,100,98,108,107,0);
          let typingR = 3;
          let dplusW = 4.0;
         signinupz += `${signinupz.length % 3}`;
         leakchecker3 -= parseFloat(`${2 * parseInt(`${leakchecker3}`)}`);
         baseP = typingR >= 100 && leakchecker3 >= 61.91;
         time_1ci += `${2 * parseInt(`${leakchecker3}`)}`;
         typingR -= parseInt(`${leakchecker3}`) & time_1ci.length;
         dplusW *= parseFloat(`${typingR}`);
         if (signinupz == String.fromCharCode(52,99,103,109,111,100,103,98,56,112,0)) {
            break;
         }
      } while ((signinupz == String.fromCharCode(52,99,103,109,111,100,103,98,56,112,0)) && (signinupz.length >= 5));
       let v_lock4 = [568, 226];
       let iconwatchh = [String.fromCharCode(100,95,54,53,95,114,101,99,111,109,98,105,110,101,0), String.fromCharCode(99,111,110,116,97,105,110,95,52,95,50,52,0), String.fromCharCode(99,111,110,116,97,105,110,95,54,95,57,48,0)];
      auto_hV[signinupz] = signinupz.length;
      break;
   }
      executorB[`${sheetw.length}`] = watchE.size + sheetw.length;

    return (
      <View style={VideoPlayerstyles.videotitle.container}>
        <Text style={VideoPlayerstyles.videotitle.title}>
          {this.state.videoTitle}
        </Text>
      </View>
    );
      pangle0 = new Map([[`${pangle0.size}`, ticko % 2]]);
      executorB[`${sheetw.length}`] = 2 >> (Math.min(2, sheetw.length));
   while (2 <= (leagueG.length | 5) && (leagueG.length | sheetw.length) <= 5) {
      sheetw = [icondefaultthumbnail7.length | parseInt(`${libavformatM}`)];
      break;
   }
      libavformatM += 1 * sheetw.length;
   for (let e = 0; e < 1; e++) {
       let filterB = [505, 880, 884];
       let holderp = String.fromCharCode(100,95,49,50,95,100,112,97,103,101,0);
          let cedbadcebfbfbfbcfecbco = 0;
         holderp = "1";
         cedbadcebfbfbfbcfecbco ^= 3;
         filterB.push(filterB.length);
         filterB.push(filterB.length * 3);
         filterB.push(2);
      while ((2 & filterB.length) == 4 && (filterB.length & 2) == 3) {
         filterB = [filterB.length % (Math.max(2, holderp.length))];
         break;
      }
      while ((4 / (Math.max(3, holderp.length))) > 2) {
         holderp = `${filterB.length | holderp.length}`;
         break;
      }
      gestures5 = (executorB.size - auto_hV.size) > 71;
   }
   if (2 < executorB.size || (executorB.size % 2) < 5) {
      executorB[`${watchE.size}`] = watchE.size;
   }

  }

   
  renderFullscreen() {
       let otherK = [String.fromCharCode(120,95,50,57,95,114,101,102,112,105,99,0), String.fromCharCode(100,101,115,105,114,101,100,95,116,95,53,54,0)];
    let clubv = true;
    let backwhitew = 3;
    let agreementK = 5.0;
    let zhuboq = 3;
    let iconviewergif6 = 2.0;
    let launcherM = new Map([[String.fromCharCode(105,110,105,116,115,109,111,116,105,111,110,95,114,95,57,0),92], [String.fromCharCode(102,95,49,55,95,115,117,98,118,105,100,101,111,0),652], [String.fromCharCode(117,95,50,52,95,100,105,114,112,0),1000]]);
    let profiler = new Map([[String.fromCharCode(102,97,97,110,100,99,116,95,98,95,55,55,0),String.fromCharCode(109,95,55,95,117,117,105,100,117,115,109,116,0)], [String.fromCharCode(104,95,54,52,95,105,110,116,101,114,120,121,0),String.fromCharCode(119,95,55,52,95,101,110,99,111,100,105,110,103,115,0)]]);
    let currentN = 5.0;
    let formt = String.fromCharCode(98,117,114,110,95,102,95,51,51,0);
    let homeg = String.fromCharCode(118,95,50,57,95,109,97,110,121,0);
      otherK = [zhuboq];
       let leagueS = 3.0;
       let libfbT = String.fromCharCode(115,112,101,101,100,104,113,95,109,95,55,49,0);
       let iconwatchH = true;
      if (!iconwatchH) {
         iconwatchH = libfbT.length <= 85;
      }
          let abidetects = 2.0;
          let previewb = 3.0;
          let libbufferq = 3;
         libfbT = `${(parseInt(`${previewb}`) << (Math.min(5, Math.abs((iconwatchH ? 1 : 4)))))}`;
         abidetects *= parseFloat(`${parseInt(`${abidetects}`)}`);
         previewb += libbufferq | 1;
         libbufferq -= libbufferq;
         iconwatchH = !iconwatchH;
      for (let n = 0; n < 3; n++) {
          let eabafadfadddbafeddddeeefeaafP = new Map([[String.fromCharCode(112,114,101,95,108,95,56,51,0),410], [String.fromCharCode(120,95,51,95,111,100,105,110,103,0),304]]);
          let umengg = String.fromCharCode(98,95,54,54,95,100,101,102,108,97,116,101,0);
          let huaweiF = new Map([[String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,102,95,56,48,0),false ], [String.fromCharCode(115,117,98,118,97,108,117,101,95,100,95,51,57,0),false ]]);
         libfbT = `${3 + eabafadfadddbafeddddeeefeaafP.size}`;
         eabafadfadddbafeddddeeefeaafP[umengg] = (String.fromCharCode(115,0) == umengg ? umengg.length : huaweiF.size);
         huaweiF[`${umengg}`] = 3;
      }
          let bangl = [244, 670, 55];
          let moreu = String.fromCharCode(100,105,97,108,108,101,100,95,108,95,53,49,0);
         leagueS -= bangl.length & 1;
         bangl.push((moreu == String.fromCharCode(76,0) ? moreu.length : moreu.length));
      for (let n = 0; n < 2; n++) {
          let greyarrowupm = 2.0;
          let libruntimeexecutorZ = [377, 52, 752];
          let reactnativejsd = false;
          let vipsportq = new Map([[String.fromCharCode(109,101,116,97,98,111,100,121,95,120,95,52,49,0),888], [String.fromCharCode(99,97,118,115,100,115,112,95,102,95,51,48,0),395], [String.fromCharCode(102,95,56,56,95,102,99,117,110,112,117,98,108,105,115,104,0),429]]);
          let rightY = 4.0;
         iconwatchH = !iconwatchH;
         greyarrowupm /= Math.max(libruntimeexecutorZ.length | parseInt(`${greyarrowupm}`), 2);
         libruntimeexecutorZ = [parseInt(`${greyarrowupm}`)];
         reactnativejsd = !reactnativejsd;
         vipsportq = new Map([[`${greyarrowupm}`, 3]]);
         rightY -= 3 - parseInt(`${rightY}`);
      }
         libfbT = `${libfbT.length - 2}`;
          let circleJ = [741, 243];
         leagueS /= Math.max(4, circleJ.length);
       let stylesR = new Map([[String.fromCharCode(102,105,118,101,95,55,95,57,54,0),false ], [String.fromCharCode(119,95,54,55,95,97,99,102,102,0),true ], [String.fromCharCode(117,95,52,95,117,117,105,100,117,115,109,116,0),false ]]);
       let defaultlogow = new Map([[String.fromCharCode(101,95,57,55,95,109,111,118,101,0),530], [String.fromCharCode(101,108,105,115,105,111,110,95,120,95,51,54,0),72], [String.fromCharCode(107,95,50,49,95,118,99,111,100,101,99,0),484]]);
      backwhitew ^= 3 % (Math.max(9, parseInt(`${leagueS}`)));

    let source =
      this.state.isFullscreen === true
        ? require('./images/icons/iconadslinkClassesFlipper.png')
        : require('./images/icons/gestureTick.png');
    return this.renderControl(
      <Image
        source={source}
        style={VideoPlayerstyles.controls.fullscreenIcon}
        resizeMode={'contain'}
      />,
      this.methods.toggleFullscreen,
      VideoPlayerstyles.controls.fullscreen,
    );
      otherK.push(zhuboq / 1);
   while (5 <= (launcherM.size << (Math.min(Math.abs(4), 2)))) {
      launcherM = new Map([[`${agreementK}`, zhuboq - 3]]);
      break;
   }

  }

   
  renderBottomControls() {
       let viewerz = 0.0;
    let smallm = String.fromCharCode(115,95,50,54,95,118,101,114,105,102,105,101,100,0);
    let cedbadcebfbfbfbcfecbce = false;
    let graphf = [String.fromCharCode(112,114,101,115,101,114,118,101,95,99,95,51,53,0), String.fromCharCode(115,116,115,115,95,103,95,56,51,0)];
    let libyogaM = String.fromCharCode(121,117,118,97,95,112,95,54,54,0);
    let predictionbannersharedm = String.fromCharCode(119,95,49,49,95,103,114,97,121,102,0);
    let basketballtrophyr = [String.fromCharCode(97,114,116,105,115,95,118,95,49,54,0), String.fromCharCode(118,95,52,49,95,117,112,115,104,105,102,116,0)];
    let championF = String.fromCharCode(111,95,49,53,95,114,105,103,104,116,109,111,115,116,0);
    let toponY = String.fromCharCode(122,95,53,49,95,115,108,97,118,101,115,0);
    let rncorem = [682, 908];
    let macau4 = 2;
   do {
       let networkY = new Map([[String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,100,95,50,95,55,54,0),String.fromCharCode(104,95,49,48,95,114,101,99,118,109,115,103,0)], [String.fromCharCode(99,111,109,98,105,95,51,95,49,0),String.fromCharCode(120,95,54,49,95,122,101,114,111,122,101,114,111,0)], [String.fromCharCode(100,97,112,112,95,110,95,57,51,0),String.fromCharCode(114,101,113,117,101,115,116,95,121,95,54,54,0)]]);
       let telemetryf = 5;
       let mutedE = 5;
         mutedE |= networkY.size;
      do {
         telemetryf ^= telemetryf;
         if (telemetryf == 2926516) {
            break;
         }
      } while (((mutedE % (Math.max(4, telemetryf))) >= 5) && (telemetryf == 2926516));
         telemetryf *= 3 >> (Math.min(1, Math.abs(mutedE)));
      if (1 > (2 >> (Math.min(3, Math.abs(mutedE)))) && (mutedE >> (Math.min(Math.abs(2), 5))) > 5) {
         telemetryf *= 2 << (Math.min(5, Math.abs(mutedE)));
      }
      do {
          let iconwatchz = 1;
         mutedE -= mutedE;
         iconwatchz ^= iconwatchz;
         if (4292367 == mutedE) {
            break;
         }
      } while ((4292367 == mutedE) && (Array.from(networkY.keys()).includes(`${mutedE}`)));
       let teamK = 3.0;
      do {
          let fastF = String.fromCharCode(103,114,111,117,112,101,100,95,114,95,54,56,0);
          let defaultteamW = 5.0;
          let uploadq = false;
         mutedE *= 2 / (Math.max(parseInt(`${teamK}`), 9));
         fastF = `${((uploadq ? 1 : 3) * parseInt(`${defaultteamW}`))}`;
         defaultteamW += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${defaultteamW}`)), 3))}`);
         uploadq = !uploadq;
         if (mutedE == 2229810) {
            break;
         }
      } while ((mutedE == 2229810) && ((teamK / 3.37) > 2.64));
      if (4 == (networkY.size - 2)) {
          let watchZ = String.fromCharCode(97,110,110,117,108,97,114,95,107,95,57,57,0);
          let awayiconY = String.fromCharCode(105,110,116,101,103,101,114,105,102,121,95,103,95,53,53,0);
         teamK -= awayiconY.length;
         watchZ += `${(String.fromCharCode(119,0) == watchZ ? watchZ.length : watchZ.length)}`;
         awayiconY += "1";
      }
      if (5 <= (telemetryf ^ 4)) {
          let forwardY = 1.0;
         networkY = new Map([[`${telemetryf}`, telemetryf]]);
         forwardY -= parseFloat(`${parseInt(`${forwardY}`) / 2}`);
      }
      graphf = [1];
      if (graphf.length == 2354810) {
         break;
      }
   } while ((5 < graphf.length) && (graphf.length == 2354810));

    const timerControl = this.props.disableTimer
      ? this.renderNullControl()
      : this.renderTimer();
    const seekbarControl = this.props.disableSeekbar
      ? this.renderNullControl()
      : this.renderSeekbar();
    const playPauseControl = this.props.disablePlayPause
      ? this.renderNullControl()
      : this.renderPlayPause();
    const fullscreenControl = this.props.disableFullscreen
      ? this.renderNullControl()
      : this.renderFullscreen();

    return (
      <Animated.View
        style={[
          VideoPlayerstyles.controls.bottom,
          {
            opacity: this.animations.bottomControl.opacity,
            marginBottom: this.animations.bottomControl.marginBottom,
            paddingBottom: this.state.bottomControlPaddingBottom,
          },
        ]}>
        <ImageBackground
          source={require('./images/icons/rightReddownarrowDownload.png')}
          style={[VideoPlayerstyles.controls.column]}
          imageStyle={[VideoPlayerstyles.controls.vignette]}>
          <SafeAreaView
            style={[
              VideoPlayerstyles.controls.row,
              VideoPlayerstyles.controls.bottomControlGroup,
            ]}>
            {playPauseControl}
            { }
            {seekbarControl}
            {timerControl}
            { }
          </SafeAreaView>
        </ImageBackground>
      </Animated.View>
    );
      predictionbannersharedm += `${graphf.length}`;

  }

   
  renderSeekbar() {
       let reactnativeultimatelistview7 = String.fromCharCode(99,95,51,51,95,99,111,114,114,117,112,116,101,100,0);
    let encryptorq = String.fromCharCode(119,111,114,115,116,95,57,95,51,49,0);
    let gray6 = false;
    let upgrade8 = 2.0;
    let subsH = String.fromCharCode(101,98,109,108,110,117,109,95,118,95,49,55,0);
    let stylesO = false;
    let rewardvideoT = [String.fromCharCode(121,101,108,108,111,119,95,117,95,54,0), String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,107,95,50,55,0)];
    let langb = new Map([[String.fromCharCode(121,95,55,53,95,115,117,98,118,105,101,119,101,114,0),false ], [String.fromCharCode(109,95,50,52,95,100,105,115,97,108,108,111,119,0),false ]]);
    let layoutp = false;
    let dropdownH = 1.0;
    let backL = 4.0;
    let icondefaultthumbnailB = String.fromCharCode(102,95,49,48,48,95,117,110,109,97,112,102,105,108,101,0);
    let feedbackv = String.fromCharCode(114,95,49,55,95,100,101,99,114,101,97,115,101,0);
    let launchU = new Map([[String.fromCharCode(98,95,50,49,95,97,118,100,99,116,0),false ], [String.fromCharCode(101,110,116,114,111,112,121,109,118,95,122,95,49,53,0),false ]]);
   for (let v = 0; v < 1; v++) {
      encryptorq = "2";
   }
   if (1.90 <= dropdownH) {
      reactnativeultimatelistview7 += `${(subsH.length | (gray6 ? 2 : 5))}`;
   }

    return (
      <View
        style={VideoPlayerstyles.seekbar.container}
        collapsable={false}
        {...this.player.seekPanResponder.panHandlers}>
        <View
          style={VideoPlayerstyles.seekbar.track}
          onLayout={event =>
            (this.player.seekerWidth = event.nativeEvent.layout.width)
          }
          pointerEvents={'none'}>
          <View
            style={[
              VideoPlayerstyles.seekbar.fill,
              {
                width: this.state.seekerFillWidth,
                backgroundColor: this.props.seekColor || '#FFF',
              },
            ]}
            pointerEvents={'none'}
          />
        </View>
        <View
          style={[
            VideoPlayerstyles.seekbar.handle,
            {left: this.state.seekerPosition},
          ]}
          pointerEvents={'none'}>
          <View
            style={[
              VideoPlayerstyles.seekbar.circle,
              {backgroundColor: this.props.seekColor || '#FFF'},
            ]}
            pointerEvents={'none'}
          />
        </View>
      </View>
    );
      gray6 = !stylesO && langb.size >= 41;
      upgrade8 += parseFloat(`${rewardvideoT.length}`);

  }

   
  renderPlayPause() {
       let long_emu = 4.0;
    let smallorangemanT = 4;
    let baseT = [909, 297, 98];
    let predictionbannersharedB = String.fromCharCode(99,108,111,115,101,95,108,95,51,48,0);
    let edita = [488, 838, 680];
    let modulesd = new Map([[String.fromCharCode(109,95,51,57,95,105,110,116,99,104,101,99,107,0),11], [String.fromCharCode(114,95,49,56,95,98,97,99,107,115,108,97,115,104,0),734], [String.fromCharCode(115,95,49,50,95,97,118,102,111,114,109,97,116,0),364]]);
    let weiboT = new Map([[String.fromCharCode(102,95,54,56,95,112,111,116,105,115,105,111,110,0),985], [String.fromCharCode(121,95,49,48,48,95,97,108,97,119,0),474], [String.fromCharCode(109,95,54,48,95,116,97,98,108,101,112,114,105,110,116,0),766]]);
    let helperi = 2.0;
    let savew = [752, 853, 359];
    let orangeuparrowC = String.fromCharCode(115,104,97,114,101,103,114,111,117,112,95,56,95,49,55,0);
    let iconmore2 = [532, 23];
    let update_gp2 = new Map([[String.fromCharCode(115,117,98,118,105,100,101,111,95,49,95,56,52,0),248], [String.fromCharCode(110,105,100,115,95,49,95,49,0),602]]);
    let subbasketballplayerS = String.fromCharCode(115,95,48,95,115,105,103,112,97,115,115,0);
    let homez = String.fromCharCode(114,101,99,112,95,112,95,53,54,0);
    let anythinkZ = [304, 999, 605];
    let action_ = [69, 939];
   if (edita.length < weiboT.size) {
      edita.push(parseInt(`${helperi}`));
   }
   for (let m = 0; m < 1; m++) {
      weiboT[`${helperi}`] = weiboT.size / 2;
   }
   for (let g = 0; g < 2; g++) {
      edita = [modulesd.size ^ 3];
   }
       let graphL = 4.0;
         graphL /= Math.max(2, parseFloat(`${1}`));
         graphL += parseFloat(`${parseInt(`${graphL}`)}`);
       let downloaderQ = String.fromCharCode(105,100,99,116,114,111,119,95,117,95,51,54,0);
       let shirtT = String.fromCharCode(98,97,100,103,101,115,95,118,95,50,48,0);
      edita.push(3 + parseInt(`${graphL}`));

    let source =
      this.state.paused === true
        ? require('./images/icons/signinupControl.png')
        : require('./images/icons/sportVideojsTramini.png');
    return this.renderControl(
      <Image
        source={source}
        style={VideoPlayerstyles.controls.playPauseIcon}
        resizeMode={'cover'}
      />,
      this.methods.togglePlayPause,
      VideoPlayerstyles.controls.playPause,
    );
      weiboT[`${smallorangemanT}`] = modulesd.size * smallorangemanT;
   if (update_gp2[`${smallorangemanT}`] == null) {
      update_gp2[`${iconmore2.length}`] = modulesd.size << (Math.min(iconmore2.length, 2));
   }
   do {
      weiboT[orangeuparrowC] = orangeuparrowC.length;
      if (408480 == weiboT.size) {
         break;
      }
   } while (((3 >> (Math.min(3, Math.abs(weiboT.size)))) > 2 && (3 >> (Math.min(1, baseT.length))) > 2) && (408480 == weiboT.size));
   while ((iconmore2.length / (Math.max(7, parseInt(`${helperi}`)))) == 4 || (iconmore2.length / (Math.max(4, parseInt(`${helperi}`)))) == 4) {
      iconmore2.push(modulesd.size % 1);
      break;
   }

  }

   
  renderTitle() {
       let register_4nr = 2.0;
    let register_hM = String.fromCharCode(108,101,110,95,121,95,50,57,0);
    let predictionactiveT = String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,112,95,49,0);
    let statisticsm = 4.0;
    let topon4 = true;
    let back0 = true;
    let otherU = 1.0;
      topon4 = otherU == 21.3;
      register_hM = `${register_hM.length}`;

    if (this.opts.title) {

       let template_e1N = [39, 879];
       let confirmationP = [String.fromCharCode(117,95,56,49,95,114,101,115,116,114,97,105,110,0), String.fromCharCode(119,95,51,49,95,98,101,99,111,109,101,0), String.fromCharCode(117,95,54,95,99,114,105,116,105,99,97,108,0)];
      do {
         confirmationP.push(2);
         if (confirmationP.length == 250245) {
            break;
         }
      } while ((confirmationP.length == 250245) && ((template_e1N.length / 5) <= 4));
          let z_playerq = String.fromCharCode(115,101,97,95,104,95,53,51,0);
         confirmationP = [confirmationP.length | 3];
         z_playerq = `${z_playerq.length}`;
      while (confirmationP.includes(template_e1N.length)) {
         template_e1N.push(confirmationP.length);
         break;
      }
      if (template_e1N.includes(confirmationP.length)) {
         confirmationP.push(3);
      }
         confirmationP = [confirmationP.length];
      if (3 >= (template_e1N.length - 4) || 4 >= (4 - confirmationP.length)) {
         template_e1N.push(template_e1N.length);
      }
      register_hM = `${3 / (Math.max(parseInt(`${register_4nr}`), 9))}`;
      back0 = statisticsm == 2.65 || !back0;
      return (
        <View
          style={[
            VideoPlayerstyles.controls.control,
            VideoPlayerstyles.controls.title,
          ]}>
          <Text
            style={[
              VideoPlayerstyles.controls.text,
              VideoPlayerstyles.controls.titleText,
            ]}
            numberOfLines={1}>
            {this.opts.title || ''}
          </Text>
        </View>
      );
      register_hM = `${parseInt(`${otherU}`)}`;
      statisticsm *= parseFloat(`${2 * register_hM.length}`);

    }

    return null;
       let teame = 5.0;
         teame -= parseFloat(`${parseInt(`${teame}`)}`);
      for (let h = 0; h < 3; h++) {
         teame /= Math.max(parseFloat(`${parseInt(`${teame}`) & parseInt(`${teame}`)}`), 5);
      }
      do {
         teame += parseFloat(`${parseInt(`${teame}`)}`);
         if (405734.0 == teame) {
            break;
         }
      } while ((405734.0 == teame) && (teame <= teame));
      register_hM = "1";
       let favoriteo = new Map([[String.fromCharCode(117,110,105,118,101,114,115,97,108,95,121,95,52,50,0),false ], [String.fromCharCode(101,95,49,54,95,121,117,118,112,0),false ]]);
       let smallorangemanB = true;
       let backwards = String.fromCharCode(100,101,105,110,118,101,114,116,95,100,95,49,57,0);
         smallorangemanB = favoriteo.size > 1;
       let homeloadingb = 4;
      while (favoriteo.size <= 4) {
         favoriteo[`${homeloadingb}`] = 3;
         break;
      }
      do {
          let weatherD = new Map([[String.fromCharCode(103,101,111,95,49,95,55,49,0),458], [String.fromCharCode(99,111,110,116,101,110,116,115,95,53,95,51,55,0),107]]);
          let reactnativejsz = 0.0;
          let predictionbuttonq = true;
         favoriteo[`${smallorangemanB}`] = ((smallorangemanB ? 2 : 4) - favoriteo.size);
         weatherD = new Map([[`${weatherD.size}`, weatherD.size]]);
         reactnativejsz += parseFloat(`${2}`);
         predictionbuttonq = 63.60 < reactnativejsz && !predictionbuttonq;
         if (favoriteo.size == 2349911) {
            break;
         }
      } while ((favoriteo.size == 2349911) && (!Array.from(favoriteo.keys()).includes(`${homeloadingb}`)));
      do {
         smallorangemanB = backwards.length == 93 || favoriteo.size == 93;
         if (smallorangemanB ? !smallorangemanB : smallorangemanB) {
            break;
         }
      } while ((smallorangemanB ? !smallorangemanB : smallorangemanB) && (favoriteo.size > 1));
          let iconviewergifx = String.fromCharCode(115,117,112,112,114,101,115,115,101,100,95,116,95,54,0);
          let mathu = false;
          let iconclosewhitebgP = 3;
         smallorangemanB = (iconclosewhitebgP & iconviewergifx.length) < 5;
         iconviewergifx += `${((mathu ? 2 : 5))}`;
          let downarrow6 = String.fromCharCode(99,95,54,48,95,99,111,110,100,117,99,116,111,114,0);
          let countdownT = new Map([[String.fromCharCode(110,105,100,108,110,95,114,95,49,57,0),277], [String.fromCharCode(110,101,118,101,114,95,118,95,53,50,0),274]]);
          let collectiony = new Map([[String.fromCharCode(115,115,108,95,108,95,51,50,0),String.fromCharCode(99,102,104,100,95,118,95,57,53,0)], [String.fromCharCode(106,95,49,57,95,99,118,105,100,0),String.fromCharCode(109,117,108,116,120,95,116,95,49,50,0)], [String.fromCharCode(101,105,103,104,116,115,118,120,95,97,95,56,52,0),String.fromCharCode(102,111,114,99,105,110,103,95,103,95,54,56,0)]]);
         homeloadingb ^= countdownT.size << (Math.min(Math.abs(1), 3));
         downarrow6 = `${collectiony.size}`;
         countdownT[`${downarrow6}`] = downarrow6.length;
         collectiony[`${downarrow6}`] = 2;
       let iconorientationL = String.fromCharCode(122,95,55,55,95,101,109,109,105,110,116,114,105,110,0);
       let short_4N = String.fromCharCode(110,95,54,56,95,115,117,98,102,105,108,101,0);
       let matchq = String.fromCharCode(112,95,57,52,0);
       let reducerf = String.fromCharCode(120,95,49,48,48,95,101,112,111,108,108,0);
      register_hM += `${parseInt(`${otherU}`) << (Math.min(Math.abs(1), 5))}`;

  }

   
  renderTimer() {
       let champion1 = 3.0;
    let libflipperd = 3;
    let modelsy = String.fromCharCode(114,95,53,49,95,101,110,117,109,118,97,108,117,101,0);
    let hooksn = 3.0;
    let blacklistf = 5.0;
    let vipsportw = String.fromCharCode(102,95,53,50,95,119,95,52,54,0);
    let chatI = [24, 626];
    let phoneshareO = 4.0;
    let flyerM = String.fromCharCode(99,111,118,101,114,101,100,95,110,95,57,55,0);
    let friendsB = 4.0;
    let type_jij = String.fromCharCode(102,95,51,53,95,116,105,108,116,0);
    let homeactivec = [544, 124];
    let soundX = [71, 525, 503];
    let iconsaveimagel = 1;
    let largeV = 0.0;
    let informationp = String.fromCharCode(110,116,102,115,95,54,95,54,52,0);
    let hookk = 2.0;
    let floater0 = String.fromCharCode(118,95,54,95,115,104,117,116,116,101,114,0);
   do {
       let sider = 2;
       let mapbufferW = true;
       let libffmpegkitn = new Map([[String.fromCharCode(98,95,50,55,95,113,117,101,114,121,0),312], [String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,118,101,95,97,95,54,48,0),25]]);
       let textinputM = false;
          let previewF = 3;
          let minimizes = 3;
          let middlewareE = true;
         mapbufferW = !mapbufferW;
         previewF |= minimizes;
         minimizes /= Math.max(minimizes, 2);
         middlewareE = !middlewareE;
      do {
         mapbufferW = libffmpegkitn[`${sider}`] != null;
         if (mapbufferW ? !mapbufferW : mapbufferW) {
            break;
         }
      } while ((5 == sider) && (mapbufferW ? !mapbufferW : mapbufferW));
       let actionM = String.fromCharCode(118,95,55,51,95,97,114,101,0);
       let interstitialD = String.fromCharCode(112,97,110,105,99,95,119,95,55,55,0);
      if (!interstitialD.includes(`${mapbufferW}`)) {
         mapbufferW = (actionM.length - sider) >= 8;
      }
      do {
         textinputM = !mapbufferW;
         if (textinputM ? !textinputM : textinputM) {
            break;
         }
      } while ((!actionM.includes(`${textinputM}`)) && (textinputM ? !textinputM : textinputM));
         textinputM = ((libffmpegkitn.size & (!textinputM ? libffmpegkitn.size : 35)) < 41);
      for (let x = 0; x < 2; x++) {
          let matches4 = String.fromCharCode(102,95,54,51,95,115,101,116,0);
         sider %= Math.max(((mapbufferW ? 2 : 4) * 2), 1);
         matches4 = `${matches4.length}`;
      }
      for (let l = 0; l < 3; l++) {
         mapbufferW = libffmpegkitn.size < 80;
      }
      if (!textinputM) {
         interstitialD += "3";
      }
      for (let f = 0; f < 3; f++) {
         actionM += `${((textinputM ? 1 : 3))}`;
      }
      for (let x = 0; x < 3; x++) {
         libffmpegkitn[`${textinputM}`] = 2 ^ interstitialD.length;
      }
          let libloggerU = 4;
          let holderN = 2.0;
         actionM += `${libffmpegkitn.size}`;
         libloggerU ^= libloggerU + 3;
         holderN *= parseFloat(`${parseInt(`${holderN}`)}`);
      soundX = [libffmpegkitn.size];
      if (soundX.length == 3192009) {
         break;
      }
   } while ((soundX.length == 3192009) && (phoneshareO == 4.55));
       let basketballplayerplaceholderu = String.fromCharCode(97,95,57,48,95,102,109,116,99,111,110,118,101,114,116,0);
       let checkbox2 = [54, 867, 653];
       let statsnomoredatal = 0.0;
      do {
         basketballplayerplaceholderu += `${basketballplayerplaceholderu.length << (Math.min(Math.abs(2), 3))}`;
         if (basketballplayerplaceholderu == String.fromCharCode(116,115,53,105,48,104,111,121,53,0)) {
            break;
         }
      } while ((5 < (1 ^ basketballplayerplaceholderu.length)) && (basketballplayerplaceholderu == String.fromCharCode(116,115,53,105,48,104,111,121,53,0)));
         checkbox2.push(1);
         checkbox2.push(basketballplayerplaceholderu.length ^ 1);
      do {
          let libimagepipelineq = 3.0;
         checkbox2 = [1];
         libimagepipelineq -= 3 | parseInt(`${libimagepipelineq}`);
         if (checkbox2.length == 3572397) {
            break;
         }
      } while ((checkbox2.length == 3572397) && ((checkbox2.length % 5) > 5));
      do {
         statsnomoredatal += basketballplayerplaceholderu.length;
         if (4307202.0 == statsnomoredatal) {
            break;
         }
      } while ((4307202.0 == statsnomoredatal) && (checkbox2.includes(statsnomoredatal)));
      do {
         statsnomoredatal -= parseInt(`${statsnomoredatal}`);
         if (statsnomoredatal == 2614401.0) {
            break;
         }
      } while ((statsnomoredatal == 2614401.0) && ((statsnomoredatal / (Math.max(10, checkbox2.length))) <= 4.100 && (parseInt(`${statsnomoredatal}`) / (Math.max(checkbox2.length, 10))) <= 2));
      for (let v = 0; v < 1; v++) {
         checkbox2.push(basketballplayerplaceholderu.length + 1);
      }
         checkbox2 = [3];
          let weibot = String.fromCharCode(117,95,50,51,95,118,112,100,115,112,0);
          let closec = String.fromCharCode(104,95,51,51,95,98,108,97,107,101,115,0);
          let configure7 = 0.0;
         basketballplayerplaceholderu += `${parseInt(`${statsnomoredatal}`) * weibot.length}`;
         weibot += `${(String.fromCharCode(95,0) == closec ? parseInt(`${configure7}`) : closec.length)}`;
         configure7 *= 2 << (Math.min(1, Math.abs(parseInt(`${configure7}`))));
      type_jij = "2";
   while ((hooksn + modelsy.length) < 5.77 || (4 >> (Math.min(1, modelsy.length))) < 3) {
      modelsy += `${vipsportw.length << (Math.min(1, Math.abs(iconsaveimagel)))}`;
      break;
   }
   do {
       let libfbjni2 = new Map([[String.fromCharCode(104,95,55,48,95,102,111,117,114,120,0),674], [String.fromCharCode(102,95,50,57,95,97,99,116,117,97,108,0),712], [String.fromCharCode(109,95,55,95,100,111,119,110,115,116,114,101,97,109,0),332]]);
       let countryO = 1.0;
       let awayiconE = 1.0;
       let tempZ = String.fromCharCode(100,112,114,105,110,116,95,113,95,51,53,0);
         awayiconE -= parseInt(`${countryO}`);
      if (5 > (5 % (Math.max(10, libfbjni2.size)))) {
         awayiconE += parseInt(`${countryO}`);
      }
         tempZ = `${parseInt(`${countryO}`)}`;
      while (awayiconE == 3.34) {
         awayiconE /= Math.max(parseInt(`${awayiconE}`) << (Math.min(5, Math.abs(parseInt(`${countryO}`)))), 1);
         break;
      }
      while (!tempZ.startsWith(`${awayiconE}`)) {
         tempZ = "3";
         break;
      }
      while (1 <= libfbjni2.size) {
         countryO /= Math.max(5, 1 % (Math.max(8, parseInt(`${countryO}`))));
         break;
      }
          let unreadl = 1.0;
         awayiconE *= 1;
         unreadl *= parseFloat(`${parseInt(`${unreadl}`)}`);
         countryO -= parseInt(`${countryO}`) << (Math.min(tempZ.length, 2));
          let gifgoal4 = [String.fromCharCode(109,95,55,52,0), String.fromCharCode(97,109,114,119,98,100,97,116,97,95,117,95,49,49,0)];
         countryO *= (tempZ == String.fromCharCode(103,0) ? tempZ.length : gifgoal4.length);
          let latnE = 5;
          let homeplayerS = [606, 948, 266];
         countryO += 1 * tempZ.length;
         latnE |= 2;
         homeplayerS = [latnE % (Math.max(homeplayerS.length, 10))];
      if (libfbjni2[`${countryO}`] == null) {
         libfbjni2 = new Map([[tempZ, 2 - tempZ.length]]);
      }
      for (let j = 0; j < 2; j++) {
         tempZ += `${libfbjni2.size << (Math.min(Math.abs(1), 4))}`;
      }
      homeactivec = [2];
      if (homeactivec.length == 3157090) {
         break;
      }
   } while ((parseInt(`${phoneshareO}`) >= homeactivec.length) && (homeactivec.length == 3157090));
   while (2 == (flyerM.length % 1)) {
      champion1 /= Math.max(homeactivec.length * 2, 2);
      break;
   }
   if ((modelsy.length & 2) == 1 || (soundX.length & 2) == 4) {
      soundX.push(3);
   }

    return this.renderControl(
      <Text style={VideoPlayerstyles.controls.timerText}>
        {this.calculateTime()}
      </Text>,
      this.methods.toggleTimer,
      VideoPlayerstyles.controls.timer,
    );
      phoneshareO -= parseFloat(`${1 >> (Math.min(4, modelsy.length))}`);
       let iconscheduleR = 5.0;
       let indexk = String.fromCharCode(111,95,52,52,95,113,117,97,110,116,105,122,101,114,0);
      while (indexk.startsWith(`${iconscheduleR}`)) {
         iconscheduleR -= 3 ^ parseInt(`${iconscheduleR}`);
         break;
      }
          let applicationV = String.fromCharCode(110,95,53,56,95,103,114,97,121,102,0);
          let actionsE = new Map([[String.fromCharCode(113,95,56,52,0),50], [String.fromCharCode(100,95,54,95,111,114,119,97,114,100,101,100,0),699], [String.fromCharCode(103,117,97,114,100,95,106,95,56,0),7]]);
         indexk += `${(indexk == String.fromCharCode(86,0) ? parseInt(`${iconscheduleR}`) : indexk.length)}`;
         applicationV += `${applicationV.length}`;
         actionsE[`${applicationV}`] = 2 / (Math.max(5, actionsE.size));
         indexk = `${1 & indexk.length}`;
      if ((3 * parseInt(`${iconscheduleR}`)) <= 5 || (indexk.length & 3) <= 3) {
         iconscheduleR *= 2 + parseInt(`${iconscheduleR}`);
      }
       let baselinej = 5.0;
       let nalyticsi = 1.0;
      if (4.86 < iconscheduleR) {
          let watchA = 5.0;
          let inouttargetredg = [103, 872, 852];
         iconscheduleR *= parseInt(`${nalyticsi}`);
         watchA += parseFloat(`${2}`);
         inouttargetredg = [inouttargetredg.length];
      }
      soundX.push(modelsy.length);
      libflipperd /= Math.max(type_jij.length / 1, 2);
   if (!soundX.includes(homeactivec.length)) {
      homeactivec.push(2 * parseInt(`${phoneshareO}`));
   }
      flyerM = `${type_jij.length}`;
      vipsportw = `${iconsaveimagel}`;

  }

   
  renderLoader() {
       let unreadP = 2.0;
    let subtextY = new Map([[String.fromCharCode(122,95,50,95,101,114,97,115,101,0),41], [String.fromCharCode(119,97,114,110,105,110,103,115,95,101,95,53,56,0),406]]);
    let math3 = [888, 460];
    let leftk = 2;
    let eabafadfadddbafeddddeeefeaafs = [759, 340];
    let klevin_ = String.fromCharCode(97,95,54,57,95,105,110,118,101,114,116,0);
    let morej = String.fromCharCode(115,95,54,56,95,97,105,110,116,105,110,103,0);
    let playlist7 = [461, 386];
    let middleT = true;
    let emptyP = 0.0;
    let basketballtrophyu = 3;
    let imagenomoredataG = [919, 481];
    let modalL = 4;
    let friendsw = 5;
    let libflipperw = String.fromCharCode(103,95,56,51,95,114,101,97,99,116,105,111,110,0);
    let helper1 = 2.0;
    let basketballiconF = false;
   while (playlist7.length > basketballtrophyu) {
      basketballtrophyu >>= Math.min(Math.abs(basketballtrophyu << (Math.min(5, Math.abs(3)))), 4);
      break;
   }
   while (basketballtrophyu > unreadP) {
      basketballtrophyu %= Math.max(playlist7.length - subtextY.size, 4);
      break;
   }

    if (this.state.loading) {

      subtextY = new Map([[`${emptyP}`, 1 + parseInt(`${emptyP}`)]]);
   for (let q = 0; q < 1; q++) {
      subtextY = new Map([[`${basketballtrophyu}`, 2]]);
   }
      return (
        <View style={VideoPlayerstyles.loader.container}>
          <Animated.Image
            source={require('./images/icons/productBuildTarget.png')}
            style={[
              VideoPlayerstyles.loader.icon,
              {
                transform: [
                  {
                    rotate: this.animations.loader.rotate.interpolate({
                      inputRange: [0, 360],
                      outputRange: ['0deg', '360deg'],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      );
       let homeplayerE = String.fromCharCode(105,116,115,101,108,102,95,50,95,49,49,0);
      if (homeplayerE.length < homeplayerE.length) {
         homeplayerE += "3";
      }
      for (let d = 0; d < 2; d++) {
         homeplayerE += `${(String.fromCharCode(57,0) == homeplayerE ? homeplayerE.length : homeplayerE.length)}`;
      }
       let modulesi = String.fromCharCode(115,101,116,115,97,114,95,112,95,53,57,0);
       let gemfiled = String.fromCharCode(107,105,116,95,54,95,49,54,0);
      eabafadfadddbafeddddeeefeaafs.push(modalL);
   if (2.95 > emptyP && (2.95 * emptyP) > 3.65) {
      middleT = (leftk * morej.length) < 30;
   }

    }
    return null;
      klevin_ = `${subtextY.size}`;
      morej += `${klevin_.length}`;

  }

  renderError() {
       let profilepic8 = true;
    let sharewhite3 = true;
    let nativeexX = [21, 775, 844];
    let nativel = new Map([[String.fromCharCode(122,95,52,53,95,100,105,115,99,0),188], [String.fromCharCode(109,95,53,50,0),681]]);
    let bangd = 4.0;
    let linkL = String.fromCharCode(104,113,97,100,115,112,95,48,95,57,55,0);
    let chatV = 0.0;
    let project_ = 1.0;
    let backU = [505, 15, 994];
    let inactiveL = String.fromCharCode(114,95,49,52,95,118,97,114,105,97,110,99,101,120,0);
   do {
      sharewhite3 = profilepic8;
      if (sharewhite3 ? !sharewhite3 : sharewhite3) {
         break;
      }
   } while ((profilepic8) && (sharewhite3 ? !sharewhite3 : sharewhite3));
      bangd /= Math.max(5, (parseFloat(`${(profilepic8 ? 3 : 1) * 3}`)));

    if (this.state.error) {

   if (3 == (nativeexX.length << (Math.min(linkL.length, 2))) && (3 << (Math.min(2, linkL.length))) == 2) {
       let valuesg = true;
       let castingk = 3.0;
       let bottomF = [492, 838];
         valuesg = !valuesg;
          let googleK = String.fromCharCode(118,111,119,101,108,95,112,95,53,53,0);
          let defaultlogoI = String.fromCharCode(118,101,110,99,95,110,95,55,49,0);
         castingk += (String.fromCharCode(81,0) == googleK ? parseInt(`${castingk}`) : googleK.length);
         defaultlogoI = `${defaultlogoI.length / (Math.max(6, defaultlogoI.length))}`;
          let libloggerf = 3.0;
          let historyH = String.fromCharCode(115,95,57,52,95,97,116,116,114,97,99,116,111,114,0);
         bottomF = [3 % (Math.max(8, parseInt(`${libloggerf}`)))];
         libloggerf -= parseFloat(`${historyH.length >> (Math.min(2, historyH.length))}`);
          let firebaseu = String.fromCharCode(115,99,116,112,117,116,105,108,95,49,95,52,55,0);
          let greyarrowupH = 0.0;
          let airbnbstark = 2;
         castingk /= Math.max(firebaseu.length & bottomF.length, 1);
         firebaseu += `${airbnbstark}`;
         greyarrowupH /= Math.max(parseFloat(`${1}`), 5);
         airbnbstark ^= 2 * parseInt(`${greyarrowupH}`);
      for (let x = 0; x < 2; x++) {
         valuesg = 26.84 > castingk || !valuesg;
      }
      while (valuesg) {
          let hookz = String.fromCharCode(117,95,54,52,95,115,105,103,118,101,114,0);
          let greyarrowupn = new Map([[String.fromCharCode(115,113,117,101,101,122,101,95,97,95,56,53,0),String.fromCharCode(109,101,97,115,117,114,101,100,95,109,95,50,0)], [String.fromCharCode(108,95,54,49,95,99,111,110,102,105,103,117,114,101,0),String.fromCharCode(105,116,115,101,108,102,95,54,95,49,49,0)], [String.fromCharCode(98,95,54,49,95,117,112,100,97,116,101,115,0),String.fromCharCode(110,95,48,95,114,101,101,110,99,114,121,112,116,0)]]);
          let scorep = 3.0;
          let iconscheduleq = true;
         castingk /= Math.max(1 / (Math.max(parseInt(`${castingk}`), 9)), 2);
         hookz = `${greyarrowupn.size << (Math.min(Math.abs(1), 2))}`;
         greyarrowupn = new Map([[`${scorep}`, 2 | parseInt(`${scorep}`)]]);
         iconscheduleq = scorep <= 66.100;
         break;
      }
         castingk -= (parseInt(`${castingk}`) - (valuesg ? 4 : 4));
         valuesg = parseInt(`${castingk}`) <= bottomF.length;
          let modules2 = 4;
          let defaultteamE = String.fromCharCode(115,117,101,108,111,95,120,95,57,55,0);
          let events = [673, 138, 361];
         bottomF = [bottomF.length];
         modules2 %= Math.max(4, defaultteamE.length);
         defaultteamE += `${modules2 ^ events.length}`;
         events = [events.length];
      linkL += `${bottomF.length}`;
   }
      bangd *= (parseFloat(`${(profilepic8 ? 2 : 4) & parseInt(`${bangd}`)}`));
      return (
        <SafeAreaView style={VideoPlayerstyles.error.container}>
          <TouchableOpacity onPress={() => this.reloadPlayer()}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('./images/icons/basketballAccepted.png')}
                style={VideoPlayerstyles.error.icon}
              />
              <Text style={VideoPlayerstyles.error.text}>影片加载失败</Text>
              <Text style={VideoPlayerstyles.error.text}>再次点击重新加载</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      );
      chatV /= Math.max(4, (parseFloat(`${(sharewhite3 ? 3 : 5) >> (Math.min(Math.abs(nativel.size), 5))}`)));
      backU.push(2);

    }
    return null;
       let giftbuttonj = 2.0;
          let dependenciesk = String.fromCharCode(112,95,54,54,95,119,105,114,101,102,114,97,109,101,0);
          let crownG = 2;
          let libimagepipelinea = 0.0;
         giftbuttonj += dependenciesk.length;
         dependenciesk += `${crownG * parseInt(`${libimagepipelinea}`)}`;
         crownG %= Math.max(2, 2);
         libimagepipelinea += parseFloat(`${parseInt(`${libimagepipelinea}`)}`);
          let listK = String.fromCharCode(101,95,50,53,95,102,111,114,101,103,114,111,117,110,100,0);
          let plusa = [String.fromCharCode(115,95,54,53,95,117,110,99,111,114,114,0), String.fromCharCode(115,117,109,120,95,57,95,57,51,0), String.fromCharCode(106,95,54,49,0)];
         giftbuttonj /= Math.max(2, parseInt(`${giftbuttonj}`));
         listK = `${plusa.length - listK.length}`;
         plusa.push(listK.length + 1);
      for (let n = 0; n < 3; n++) {
         giftbuttonj += 3 - parseInt(`${giftbuttonj}`);
      }
      linkL += `${parseInt(`${bangd}`) + 3}`;
   if (bangd >= 3.38) {
       let halfO = String.fromCharCode(98,116,110,95,56,95,53,57,0);
         halfO = `${halfO.length / (Math.max(2, 4))}`;
         halfO += `${halfO.length}`;
      for (let l = 0; l < 3; l++) {
         halfO += `${halfO.length | halfO.length}`;
      }
      bangd += parseFloat(`${parseInt(`${bangd}`)}`);
   }

  }

  async reloadPlayer() {
       let matchE = false;
    let libfollyf = String.fromCharCode(112,95,57,54,95,112,114,111,99,101,115,115,101,100,0);
    let matchdetailbgU = 5.0;
    let chartj = true;
    let lnewsE = new Map([[String.fromCharCode(97,103,103,114,101,103,97,116,101,115,95,48,95,50,53,0),161], [String.fromCharCode(105,105,114,102,105,108,116,101,114,95,108,95,55,0),117], [String.fromCharCode(117,110,101,100,105,116,97,98,108,101,95,99,95,49,54,0),424]]);
    let policyJ = 1;
    let readb = new Map([[String.fromCharCode(112,95,52,50,95,112,114,101,108,111,97,100,101,100,0),String.fromCharCode(121,95,52,53,95,98,105,100,105,114,0)], [String.fromCharCode(102,119,104,116,95,122,95,51,48,0),String.fromCharCode(105,95,50,48,95,115,100,101,115,0)], [String.fromCharCode(108,95,52,95,104,121,115,116,101,114,101,115,105,115,0),String.fromCharCode(116,95,54,49,95,111,112,116,105,109,105,122,101,114,0)]]);
    let sellz = String.fromCharCode(111,108,100,110,101,119,95,54,95,57,48,0);
    let mailH = String.fromCharCode(101,95,54,53,95,103,117,116,116,101,114,0);
    let whistleM = 1.0;
    let paginationO = [172, 717, 422];
    let feedbackP = new Map([[String.fromCharCode(122,95,48,95,99,117,100,97,117,112,108,111,97,100,0),795], [String.fromCharCode(99,97,112,95,119,95,51,51,0),108]]);
    let anewsZ = String.fromCharCode(112,97,114,97,109,101,116,114,105,122,101,100,95,108,95,52,50,0);
    let gifgoalbg8 = 3;
    let sinaT = String.fromCharCode(114,101,110,100,101,114,98,117,102,102,101,114,95,113,95,55,57,0);
    let statisticsn = 1;
   do {
      chartj = 57.63 < whistleM;
      if (chartj ? !chartj : chartj) {
         break;
      }
   } while (((5 + readb.size) >= 1) && (chartj ? !chartj : chartj));
      mailH += "1";
   for (let o = 0; o < 1; o++) {
       let logoutc = 3.0;
         logoutc *= parseInt(`${logoutc}`) + 2;
         logoutc *= parseInt(`${logoutc}`) / 3;
      for (let z = 0; z < 2; z++) {
         logoutc *= 1 | parseInt(`${logoutc}`);
      }
      readb[`${matchE}`] = policyJ - 3;
   }
      readb[sellz] = sellz.length;
       let footballtrophy4 = 3;
       let libavfilter7 = 4.0;
       let rocketM = 0.0;
         libavfilter7 += parseFloat(`${2}`);
      for (let u = 0; u < 1; u++) {
         footballtrophy4 >>= Math.min(Math.abs(1 >> (Math.min(Math.abs(parseInt(`${libavfilter7}`)), 3))), 2);
      }
         footballtrophy4 %= Math.max(parseInt(`${rocketM}`) / 2, 4);
         footballtrophy4 += footballtrophy4;
          let redirectR = 0;
         footballtrophy4 <<= Math.min(4, Math.abs(redirectR * parseInt(`${libavfilter7}`)));
      while (3.94 < (1.77 / (Math.max(2, libavfilter7))) || (footballtrophy4 / (Math.max(parseInt(`${libavfilter7}`), 8))) < 3) {
         libavfilter7 /= Math.max(1, parseFloat(`${2}`));
         break;
      }
         libavfilter7 -= parseFloat(`${parseInt(`${libavfilter7}`)}`);
      if (5.35 == (rocketM - libavfilter7)) {
         rocketM -= parseInt(`${rocketM}`) * 3;
      }
      for (let e = 0; e < 2; e++) {
         footballtrophy4 ^= parseInt(`${rocketM}`);
      }
      libfollyf += `${paginationO.length & 2}`;
   do {
       let agreementV = String.fromCharCode(108,108,100,98,105,110,105,116,95,113,95,54,53,0);
          let spinnerU = 5.0;
          let securityv = String.fromCharCode(118,97,105,108,97,98,105,108,105,116,121,95,56,95,56,48,0);
          let iconcalendard = true;
         agreementV = `${agreementV.length % 2}`;
         spinnerU -= 3 + parseInt(`${spinnerU}`);
         securityv = `${securityv.length}`;
         iconcalendard = 7.13 < spinnerU;
      do {
         agreementV += `${agreementV.length << (Math.min(agreementV.length, 2))}`;
         if (285800 == agreementV.length) {
            break;
         }
      } while ((agreementV.length >= agreementV.length) && (285800 == agreementV.length));
         agreementV += `${agreementV.length / (Math.max(3, agreementV.length))}`;
      matchE = null != readb[`${whistleM}`];
      if (matchE ? !matchE : matchE) {
         break;
      }
   } while ((matchE) && (matchE ? !matchE : matchE));
   do {
      matchE = !matchE || 85.27 > matchdetailbgU;
      if (matchE ? !matchE : matchE) {
         break;
      }
   } while ((2.9 == (5.50 * matchdetailbgU) || !matchE) && (matchE ? !matchE : matchE));
   if (!matchE) {
      sellz += `${((chartj ? 5 : 1) + 1)}`;
   }
      sellz = `${mailH.length}`;
      whistleM += (parseFloat(`${String.fromCharCode(95,0) == libfollyf ? libfollyf.length : sellz.length}`));
       let mbnativeadvancedA = 1.0;
      while (2.89 <= (mbnativeadvancedA * 3.14) && (3.14 * mbnativeadvancedA) <= 4.44) {
         mbnativeadvancedA += parseInt(`${mbnativeadvancedA}`) | parseInt(`${mbnativeadvancedA}`);
         break;
      }
      while ((2.11 + mbnativeadvancedA) < 5.49) {
          let popupC = 4.0;
          let guidea = true;
          let q_hashA = 5.0;
          let megaphoneu = 1.0;
         mbnativeadvancedA -= 2 & parseInt(`${mbnativeadvancedA}`);
         popupC -= parseInt(`${q_hashA}`) & parseInt(`${megaphoneu}`);
         guidea = megaphoneu <= 32.96;
         q_hashA *= parseFloat(`${parseInt(`${popupC}`) % 2}`);
         break;
      }
          let megaphoneX = 3;
         mbnativeadvancedA *= parseInt(`${mbnativeadvancedA}`) - megaphoneX;
      sellz += `${3 * parseInt(`${whistleM}`)}`;

    this.setState({source: null});
    this.setState({source: this.props.source, error: false});
  }

  async playVideo() {
       let notificationp = String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,95,50,95,57,55,0);
    let floating5 = new Map([[String.fromCharCode(117,95,54,53,95,112,97,114,116,105,116,105,111,110,105,110,103,0),415], [String.fromCharCode(100,101,118,105,99,101,95,106,95,52,56,0),143], [String.fromCharCode(103,95,51,56,95,110,99,111,109,105,110,103,0),613]]);
    let stepk = String.fromCharCode(98,95,54,55,95,112,103,105,100,120,0);
    let changep = new Map([[String.fromCharCode(97,95,51,52,95,112,114,101,102,101,114,0),true ], [String.fromCharCode(116,114,101,122,111,114,95,51,95,52,54,0),true ], [String.fromCharCode(117,95,55,53,95,100,101,115,112,105,108,108,0),false ]]);
    let searchR = String.fromCharCode(114,105,103,104,116,109,111,115,116,95,99,95,55,48,0);
    let sourcer = String.fromCharCode(115,105,109,117,108,97,116,101,100,95,116,95,51,56,0);
    let penaltymatchiconU = false;
    let trashL = 4.0;
    let smallbrightnessl = new Map([[String.fromCharCode(103,95,49,57,95,108,100,105,115,116,0),true ], [String.fromCharCode(116,105,109,101,95,114,95,53,49,0),false ], [String.fromCharCode(101,110,99,97,112,95,101,95,52,52,0),false ]]);
    let castingV = String.fromCharCode(107,95,50,95,112,114,111,116,101,99,116,111,114,0);
   for (let h = 0; h < 3; h++) {
       let reportT = [391, 287, 514];
       let disconnectedR = 3.0;
      do {
         reportT = [parseInt(`${disconnectedR}`)];
         if (1935718 == reportT.length) {
            break;
         }
      } while (((1.41 + disconnectedR) < 1.45 || (reportT.length >> (Math.min(Math.abs(4), 4))) < 2) && (1935718 == reportT.length));
          let penaltyE = new Map([[String.fromCharCode(118,105,122,105,101,114,95,114,95,51,0),821], [String.fromCharCode(100,105,114,112,95,111,95,55,57,0),54], [String.fromCharCode(105,95,51,50,95,115,101,99,116,105,111,110,115,0),581]]);
          let viewsk = [779, 24];
         reportT = [3];
         penaltyE[`${viewsk.length}`] = viewsk.length ^ 1;
         reportT.push(2);
      if (4.17 >= (disconnectedR * parseFloat(`${reportT.length}`))) {
          let cancelL = String.fromCharCode(108,95,50,95,110,111,114,109,97,108,105,122,97,116,105,111,110,0);
          let styleZ = 2.0;
          let memberx = [9, 335, 116];
         disconnectedR -= parseFloat(`${3 * parseInt(`${styleZ}`)}`);
         cancelL += `${3 + cancelL.length}`;
         styleZ -= 2;
         memberx.push(cancelL.length);
      }
       let checkboxv = new Map([[String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,57,95,52,56,0),String.fromCharCode(119,95,50,55,95,105,115,111,108,97,116,101,0)], [String.fromCharCode(100,105,115,99,111,110,116,105,103,117,111,117,115,95,53,95,51,51,0),String.fromCharCode(101,95,50,57,95,98,111,116,116,111,109,0)]]);
         disconnectedR += parseFloat(`${parseInt(`${disconnectedR}`)}`);
      searchR = "3";
   }
       let iconclosewhiteR = 3.0;
      for (let v = 0; v < 3; v++) {
          let update_59 = String.fromCharCode(97,116,116,101,109,116,115,95,121,95,55,56,0);
          let unreadB = String.fromCharCode(100,114,111,112,112,101,114,95,110,95,51,50,0);
          let chartk = [String.fromCharCode(101,95,51,57,95,117,110,99,97,99,104,101,100,0), String.fromCharCode(103,95,54,56,95,117,109,105,100,0)];
         iconclosewhiteR *= parseFloat(`${parseInt(`${iconclosewhiteR}`) >> (Math.min(Math.abs(2), 1))}`);
         update_59 = `${unreadB.length}`;
         unreadB = "2";
         chartk = [1 ^ update_59.length];
      }
      if (5.92 >= (4.35 + iconclosewhiteR) || 4.35 >= (iconclosewhiteR * iconclosewhiteR)) {
         iconclosewhiteR -= parseFloat(`${parseInt(`${iconclosewhiteR}`)}`);
      }
      for (let f = 0; f < 3; f++) {
         iconclosewhiteR += parseFloat(`${parseInt(`${iconclosewhiteR}`) << (Math.min(3, Math.abs(1)))}`);
      }
      stepk = `${((penaltymatchiconU ? 4 : 4))}`;
   while (sourcer != String.fromCharCode(116,0)) {
      notificationp += `${changep.size >> (Math.min(searchR.length, 1))}`;
      break;
   }
      searchR += `${notificationp.length}`;
   while ((floating5.size - 5) > 3) {
      floating5[notificationp] = (notificationp == String.fromCharCode(49,0) ? notificationp.length : changep.size);
      break;
   }
       let defaultplayerimg3 = 0.0;
       let binddatasB = [779, 707, 349];
       let sport6 = 1.0;
         binddatasB = [2 % (Math.max(3, binddatasB.length))];
         binddatasB = [parseInt(`${defaultplayerimg3}`)];
          let libcrashsdk5 = String.fromCharCode(99,104,97,114,115,95,110,95,54,0);
          let actionsP = 4;
          let viewerX = String.fromCharCode(114,101,116,114,105,101,100,95,119,95,49,48,48,0);
         defaultplayerimg3 -= parseInt(`${defaultplayerimg3}`);
         libcrashsdk5 += `${(libcrashsdk5 == String.fromCharCode(75,0) ? libcrashsdk5.length : actionsP)}`;
         actionsP &= (String.fromCharCode(101,0) == viewerX ? actionsP : viewerX.length);
          let volumep = true;
         sport6 += parseFloat(`${1 | binddatasB.length}`);
         volumep = !volumep;
          let shirty = 0.0;
         sport6 /= Math.max(parseFloat(`${1}`), 3);
         shirty -= parseFloat(`${1 ^ parseInt(`${shirty}`)}`);
      if (1.61 < sport6) {
          let iconsettingU = String.fromCharCode(114,95,54,53,95,103,101,116,111,112,116,0);
          let inviteg = true;
          let areaY = 1.0;
         sport6 += parseFloat(`${iconsettingU.length & 1}`);
         iconsettingU += `${parseInt(`${areaY}`) / 1}`;
         inviteg = !inviteg;
         areaY -= parseInt(`${areaY}`) - 3;
      }
      do {
         defaultplayerimg3 *= binddatasB.length - 3;
         if (4188929.0 == defaultplayerimg3) {
            break;
         }
      } while ((4188929.0 == defaultplayerimg3) && (binddatasB.includes(defaultplayerimg3)));
         defaultplayerimg3 -= parseInt(`${defaultplayerimg3}`) * 1;
      do {
          let largesoundh = [258, 445];
          let modulel = String.fromCharCode(115,95,54,48,95,109,118,104,100,0);
          let vipsportY = false;
          let greyB = new Map([[String.fromCharCode(107,95,52,51,95,97,117,116,111,114,101,115,105,122,101,115,0),401], [String.fromCharCode(120,95,49,52,95,117,105,100,0),100], [String.fromCharCode(114,95,57,56,95,118,112,100,115,112,0),466]]);
          let nodet = new Map([[String.fromCharCode(108,95,52,54,95,112,117,114,112,111,115,101,102,117,108,0),false ], [String.fromCharCode(116,95,49,48,95,99,104,97,108,108,101,110,103,101,0),false ], [String.fromCharCode(112,95,52,50,95,97,103,97,116,101,0),false ]]);
         binddatasB.push(3 % (Math.max(parseInt(`${defaultplayerimg3}`), 9)));
         largesoundh = [3];
         modulel += `${largesoundh.length}`;
         greyB[`${vipsportY}`] = ((vipsportY ? 4 : 5) | 2);
         nodet[`${vipsportY}`] = largesoundh.length;
         if (binddatasB.length == 36463) {
            break;
         }
      } while ((binddatasB.length == 36463) && (!binddatasB.includes(sport6)));
      changep[`${penaltymatchiconU}`] = 1 << (Math.min(Math.abs(parseInt(`${defaultplayerimg3}`)), 4));

    this.setState({player: false, paused: false});
    typeof this.events.onPlay === 'function' && this.events.onPlay();
   while (stepk == sourcer) {
      sourcer = "1";
      break;
   }
      searchR = "1";
   for (let m = 0; m < 3; m++) {
      stepk += `${changep.size}`;
   }
   if (1 >= changep.size) {
      stepk = `${(String.fromCharCode(75,0) == notificationp ? notificationp.length : floating5.size)}`;
   }
   for (let v = 0; v < 1; v++) {
       let dependenciesN = 0;
       let playH = 1.0;
      if (3 > (dependenciesN * 2) && (parseFloat(`${dependenciesN}`) / (Math.max(2, playH))) > 5.26) {
         dependenciesN += 1;
      }
         playH += parseFloat(`${parseInt(`${playH}`)}`);
      for (let t = 0; t < 2; t++) {
         playH *= parseFloat(`${parseInt(`${playH}`) / (Math.max(3, dependenciesN))}`);
      }
      if (1.20 == playH) {
          let encryptE = String.fromCharCode(106,95,55,51,95,117,121,118,121,116,111,121,117,118,0);
          let delegate_yb = [522, 353];
          let mbjscommonF = String.fromCharCode(98,95,53,53,95,100,101,109,111,0);
         dependenciesN %= Math.max(parseInt(`${playH}`), 3);
         encryptE += `${delegate_yb.length >> (Math.min(encryptE.length, 5))}`;
         delegate_yb = [delegate_yb.length * mbjscommonF.length];
         mbjscommonF = `${delegate_yb.length}`;
      }
      while ((1.66 + playH) > 4.92) {
         dependenciesN -= 1;
         break;
      }
         playH -= parseFloat(`${dependenciesN & 2}`);
      notificationp = `${(stepk.length * (penaltymatchiconU ? 4 : 5))}`;
   }
       let with_6cL = 1.0;
       let connectionM = String.fromCharCode(119,95,50,50,95,117,116,105,108,105,116,121,0);
       let videojsH = String.fromCharCode(97,95,51,56,95,100,105,115,116,114,105,98,117,116,105,111,110,0);
         connectionM = `${(connectionM == String.fromCharCode(109,0) ? parseInt(`${with_6cL}`) : connectionM.length)}`;
         connectionM = `${connectionM.length * 3}`;
      if ((parseFloat(`${connectionM.length}`) / (Math.max(3, with_6cL))) > 3.54 || 1 > (parseInt(`${with_6cL}`) / (Math.max(connectionM.length, 5)))) {
          let sentryB = String.fromCharCode(103,114,97,121,115,99,97,108,101,95,50,95,51,49,0);
          let goalH = String.fromCharCode(115,121,109,98,111,108,105,122,101,95,108,95,50,53,0);
          let audienceG = String.fromCharCode(119,95,49,57,95,99,111,100,101,115,116,114,101,97,109,0);
          let league1 = [String.fromCharCode(101,120,116,101,114,110,95,101,95,52,0), String.fromCharCode(106,95,53,54,95,116,111,100,97,121,115,0)];
         connectionM = `${audienceG.length | goalH.length}`;
         sentryB = "2";
         goalH = `${(sentryB == String.fromCharCode(67,0) ? league1.length : sentryB.length)}`;
         audienceG += `${(String.fromCharCode(67,0) == sentryB ? league1.length : sentryB.length)}`;
      }
      while (1 <= (4 & connectionM.length) || 1 <= (connectionM.length * 4)) {
         connectionM += `${3 << (Math.min(1, connectionM.length))}`;
         break;
      }
       let libreanimatedN = 1.0;
       let kickK = 5.0;
      for (let n = 0; n < 1; n++) {
         kickK *= parseFloat(`${parseInt(`${with_6cL}`)}`);
      }
       let downF = 1;
         videojsH = `${parseInt(`${libreanimatedN}`) >> (Math.min(2, Math.abs(parseInt(`${kickK}`))))}`;
          let minimize0 = false;
          let launchx = String.fromCharCode(113,95,50,49,95,104,111,108,108,111,119,0);
         with_6cL /= Math.max(1, parseFloat(`${connectionM.length / 1}`));
         minimize0 = !minimize0;
         launchx = `${((minimize0 ? 4 : 5) | launchx.length)}`;
      searchR = `${connectionM.length}`;

  }

   
  render() {
       let reminderW = 2.0;
    let vipsportB = [918, 0];
    let unimplementedview4 = 1.0;
    let leaguek = true;
    let alertJ = [133, 579, 570];
    let connectionT = 1;
    let icondefaultthumbnailu = new Map([[String.fromCharCode(97,95,52,53,95,117,110,119,105,110,100,0),584], [String.fromCharCode(117,116,105,108,115,95,49,95,54,57,0),822], [String.fromCharCode(100,101,99,101,108,101,114,97,116,105,111,110,95,98,95,49,48,0),758]]);
    let viewsH = String.fromCharCode(122,95,49,54,95,119,105,110,100,105,110,103,0);
   do {
      reminderW -= connectionT;
      if (reminderW == 618216.0) {
         break;
      }
   } while ((reminderW == 618216.0) && (3.95 >= (unimplementedview4 + reminderW)));

    return (
      <TouchableWithoutFeedback
        onPress={this.events.onScreenTouch}
        style={[
          VideoPlayerstyles.player.container,
          this.styles.containerStyle,
        ]}>
        <View
          style={[
            VideoPlayerstyles.player.container,
            this.styles.containerStyle,
          ]}
          ref={view => {

      icondefaultthumbnailu = new Map([[`${alertJ.length}`, alertJ.length << (Math.min(Math.abs(1), 5))]]);
            this.state.newsVideoRef = view;
   for (let u = 0; u < 3; u++) {
       let libreactnativeblobP = String.fromCharCode(104,95,52,57,95,99,97,110,99,101,108,108,101,100,0);
       let floaterY = String.fromCharCode(116,95,49,57,95,103,111,116,111,0);
       let success1 = 4.0;
       let profilepicC = 3;
       let binddatasV = 3.0;
      do {
         profilepicC &= parseInt(`${success1}`) / (Math.max(10, parseInt(`${binddatasV}`)));
         if (profilepicC == 279271) {
            break;
         }
      } while ((5 > (libreactnativeblobP.length | profilepicC)) && (profilepicC == 279271));
      do {
         binddatasV *= parseFloat(`${parseInt(`${success1}`)}`);
         if (3513499.0 == binddatasV) {
            break;
         }
      } while ((3513499.0 == binddatasV) && (1 <= profilepicC));
      if (3.98 <= success1) {
         floaterY += `${(floaterY == String.fromCharCode(104,0) ? floaterY.length : parseInt(`${success1}`))}`;
      }
       let imagenomoredataI = String.fromCharCode(106,95,51,49,95,115,108,97,118,101,0);
       let mintegralq = String.fromCharCode(114,101,115,105,103,110,95,106,95,56,55,0);
       let gifgoalbg6 = String.fromCharCode(118,95,53,55,95,97,99,99,117,114,97,99,121,0);
       let predictionactivei = String.fromCharCode(103,97,109,109,97,118,97,108,95,52,95,53,52,0);
          let sportL = 5.0;
          let mathj = new Map([[String.fromCharCode(116,95,54,52,95,100,101,115,99,0),String.fromCharCode(99,117,100,97,117,112,108,111,97,100,95,101,95,57,55,0)], [String.fromCharCode(102,95,56,55,95,111,108,107,97,100,111,116,0),String.fromCharCode(120,95,54,50,95,112,111,119,101,114,101,100,0)]]);
          let defaultlogoA = [266, 147, 523];
         libreactnativeblobP = `${imagenomoredataI.length + 1}`;
         sportL -= parseFloat(`${mathj.size}`);
         mathj[`${sportL}`] = 1;
         defaultlogoA.push(1 >> (Math.min(5, Math.abs(mathj.size))));
          let minit = String.fromCharCode(111,117,112,117,116,95,119,95,56,48,0);
         libreactnativeblobP = "2";
         minit = "2";
      for (let h = 0; h < 1; h++) {
         success1 *= parseFloat(`${floaterY.length >> (Math.min(gifgoalbg6.length, 1))}`);
      }
       let pagep = [604, 789];
         libreactnativeblobP = `${profilepicC ^ parseInt(`${binddatasV}`)}`;
          let reducero = 4.0;
         floaterY = `${1 + gifgoalbg6.length}`;
         reducero /= Math.max(3, parseFloat(`${parseInt(`${reducero}`)}`));
       let moret = String.fromCharCode(105,95,55,51,95,103,112,116,111,112,116,115,0);
         moret = `${parseInt(`${success1}`) >> (Math.min(2, Math.abs(profilepicC)))}`;
       let corner5 = String.fromCharCode(110,95,57,52,95,115,101,108,101,99,116,0);
      for (let v = 0; v < 1; v++) {
          let moreQ = String.fromCharCode(99,111,110,115,116,114,117,99,116,95,102,95,56,50,0);
          let pageP = [String.fromCharCode(102,95,57,95,100,105,115,99,117,115,115,105,111,110,0), String.fromCharCode(100,105,115,116,114,97,99,116,105,111,110,95,102,95,55,56,0), String.fromCharCode(98,95,49,50,95,102,102,97,116,0)];
         libreactnativeblobP = `${predictionactivei.length}`;
         moreQ += `${moreQ.length}`;
         pageP = [moreQ.length * 2];
      }
      icondefaultthumbnailu[`${binddatasV}`] = 3;
   }

          }}>
          <Video
            {...this.props}
            ref={videoPlayer => (this.player.ref = videoPlayer)}
            resizeMode={this.state.resizeMode}
            autoPlay={this.state.autoPlay}
            controls={this.state.controls}
            volume={this.state.volume}
            removeClippedSubviews={false}
            paused={this.state.paused}
            muted={this.state.muted}
            rate={this.state.rate}
            onLoadStart={this.events.onLoadStart}
            onProgress={this.events.onProgress}
            onError={this.events.onError}
            onLoad={this.events.onLoad}
            onEnd={this.events.onEnd}
            onSeek={this.events.onSeek}
            style={[VideoPlayerstyles.player.video, this.styles.videoStyle]}
            source={this.state.source}
            disableFullscreen={false}
          />

          {this.state.error ? this.renderError() : null}
          { }
          {this.state.error == false ? this.renderBottomControls() : null}
        </View>
      </TouchableWithoutFeedback>
    );
   do {
       let modityo = [184, 232, 220];
       let countdowna = 3.0;
       let saved = 5;
       let subtextF = 3.0;
      while (modityo.length >= 3) {
          let lessl = true;
          let holderP = true;
          let runtimeschedulerW = String.fromCharCode(101,95,56,50,95,102,114,101,101,109,0);
          let rewardvideov = String.fromCharCode(97,95,49,52,95,115,117,98,114,101,115,117,108,116,115,0);
          let castings = 3.0;
         countdowna /= Math.max(2, parseFloat(`${modityo.length + 3}`));
         lessl = rewardvideov.includes(`${castings}`);
         holderP = lessl;
         runtimeschedulerW = `${3 + runtimeschedulerW.length}`;
         rewardvideov += `${((holderP ? 2 : 1) & (lessl ? 5 : 4))}`;
         castings += (parseFloat(`${(holderP ? 1 : 1) & (lessl ? 2 : 3)}`));
         break;
      }
         countdowna *= parseFloat(`${1}`);
         saved <<= Math.min(5, Math.abs(3));
          let descc = 4;
          let floaterF = String.fromCharCode(104,95,52,54,95,109,118,101,99,0);
         subtextF *= descc >> (Math.min(Math.abs(1), 5));
         descc &= floaterF.length;
         floaterF += `${floaterF.length}`;
          let videovar3 = String.fromCharCode(115,105,102,102,95,100,95,51,50,0);
          let downloadedI = String.fromCharCode(116,95,54,95,112,114,101,115,101,116,115,0);
          let leakcheckerW = String.fromCharCode(110,97,118,105,103,97,116,101,95,54,95,57,55,0);
         subtextF -= 2 % (Math.max(saved, 9));
         videovar3 += `${(downloadedI == String.fromCharCode(116,0) ? downloadedI.length : videovar3.length)}`;
         leakcheckerW += `${(downloadedI == String.fromCharCode(53,0) ? videovar3.length : downloadedI.length)}`;
         subtextF += modityo.length;
         modityo = [parseInt(`${countdowna}`)];
         saved |= 2;
         subtextF *= parseInt(`${countdowna}`) + parseInt(`${subtextF}`);
      do {
         subtextF *= saved * 2;
         if (4038798.0 == subtextF) {
            break;
         }
      } while ((4038798.0 == subtextF) && (5 == (saved * 3) || 1.100 == (subtextF - 3.90)));
       let stepF = true;
      if (stepF) {
         subtextF -= 3 << (Math.min(Math.abs(parseInt(`${countdowna}`)), 4));
      }
      reminderW /= Math.max(2, icondefaultthumbnailu.size >> (Math.min(Math.abs(1), 5)));
      if (355954.0 == reminderW) {
         break;
      }
   } while ((leaguek) && (355954.0 == reminderW));

  }
}
