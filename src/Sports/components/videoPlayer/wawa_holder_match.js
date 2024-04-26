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
import VideoPlayerstyles from './wawa_iconrefresh';

export default class wawaModity extends Component {
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
       let gdtadvO = String.fromCharCode(105,95,53,55,95,116,105,109,101,98,97,115,101,0);
    let statsp = new Map([[String.fromCharCode(104,95,57,51,95,106,97,105,108,98,114,101,97,107,0),216], [String.fromCharCode(115,105,114,105,95,100,95,57,57,0),226], [String.fromCharCode(109,95,52,54,95,114,97,99,105,110,103,0),403]]);
    let basketballdetailsbgv = true;
    let stationa = String.fromCharCode(103,101,116,120,115,115,101,95,118,95,49,50,0);
    let giftbuttonm = true;
    let routerm = new Map([[String.fromCharCode(115,95,57,95,114,101,102,0),true ], [String.fromCharCode(100,95,52,53,95,110,111,116,105,102,121,0),false ], [String.fromCharCode(113,95,52,57,95,105,110,102,111,114,109,0),true ]]);
    let librrcs = 5.0;
    let awayplayerE = new Map([[String.fromCharCode(113,95,50,51,95,98,97,107,101,100,0),145], [String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,95,121,95,51,57,0),590], [String.fromCharCode(102,95,56,51,95,115,116,114,111,107,101,115,0),544]]);
      gdtadvO = `${(gdtadvO == String.fromCharCode(85,0) ? (giftbuttonm ? 1 : 4) : gdtadvO.length)}`;

    super(props);
   if (gdtadvO.length == statsp.size) {
      gdtadvO += `${stationa.length}`;
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
      librrcs += (parseInt(`${librrcs}`) - (giftbuttonm ? 1 : 2));


     

   if (4 < (awayplayerE.size | gdtadvO.length)) {
      awayplayerE = new Map([[`${awayplayerE.size}`, parseInt(`${librrcs}`) << (Math.min(Math.abs(1), 1))]]);
   }
    this.opts = {
      playWhenInactive: this.props.playWhenInactive,
      playInBackground: this.props.playInBackground,
      repeat: this.props.repeat,
      title: this.props.title,
    };
   do {
      giftbuttonm = stationa.length > 62;
      if (giftbuttonm ? !giftbuttonm : giftbuttonm) {
         break;
      }
   } while ((!giftbuttonm) && (giftbuttonm ? !giftbuttonm : giftbuttonm));


     

      stationa += `${((basketballdetailsbgv ? 2 : 5) | awayplayerE.size)}`;
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
      giftbuttonm = 35.20 == librrcs;


     

       let iconarrowrightwhitey = String.fromCharCode(101,95,50,53,95,110,117,108,108,115,114,99,0);
       let handlerP = true;
       let shown = String.fromCharCode(115,95,50,51,95,99,108,97,109,112,101,100,0);
      if (shown.length >= 5) {
         shown = `${iconarrowrightwhitey.length}`;
      }
      for (let c = 0; c < 2; c++) {
         shown += `${shown.length}`;
      }
         shown += `${shown.length}`;
      while (3 <= iconarrowrightwhitey.length) {
         iconarrowrightwhitey = `${iconarrowrightwhitey.length}`;
         break;
      }
      do {
         handlerP = iconarrowrightwhitey.length <= 73;
         if (handlerP ? !handlerP : handlerP) {
            break;
         }
      } while ((!iconarrowrightwhitey.startsWith(`${handlerP}`)) && (handlerP ? !handlerP : handlerP));
      if (iconarrowrightwhitey.endsWith(`${handlerP}`)) {
         handlerP = shown.length >= iconarrowrightwhitey.length;
      }
         shown += `${(3 >> (Math.min(5, Math.abs((handlerP ? 3 : 4)))))}`;
      if (iconarrowrightwhitey.length >= 4 && 4 >= shown.length) {
         iconarrowrightwhitey = `${((handlerP ? 4 : 1) & shown.length)}`;
      }
      for (let l = 0; l < 2; l++) {
          let arrowdownD = 4.0;
          let less0 = 2.0;
         shown = "3";
         arrowdownD -= 1 * parseInt(`${less0}`);
         less0 /= Math.max(5, 3);
      }
      librrcs *= 1 / (Math.max(4, parseInt(`${librrcs}`)));
    this.methods = {
      toggleFullscreen: this._toggleFullscreen.bind(this),
      togglePlayPause: this._togglePlayPause.bind(this),
      toggleControls: this._toggleControls.bind(this),
      toggleTimer: this._toggleTimer.bind(this),
    };
      giftbuttonm = awayplayerE.size > 65;


     

       let emojiheartI = 5;
         emojiheartI &= 1 - emojiheartI;
      do {
          let vietnamX = 0.0;
          let predictionwin5 = String.fromCharCode(103,101,111,112,111,108,121,95,118,95,50,51,0);
          let blackd = String.fromCharCode(97,110,105,109,97,116,105,111,110,115,95,111,95,51,55,0);
          let fill2 = new Map([[String.fromCharCode(99,116,114,120,95,98,95,51,52,0),54], [String.fromCharCode(111,109,105,116,116,105,110,103,95,56,95,56,56,0),590]]);
          let proxyr = String.fromCharCode(117,110,100,101,114,95,118,95,57,52,0);
         emojiheartI %= Math.max(4, emojiheartI);
         vietnamX -= parseFloat(`${proxyr.length}`);
         predictionwin5 += `${2 >> (Math.min(1, Math.abs(parseInt(`${vietnamX}`))))}`;
         blackd += "3";
         fill2[proxyr] = proxyr.length >> (Math.min(Math.abs(1), 1));
         if (emojiheartI == 3354737) {
            break;
         }
      } while (((4 ^ emojiheartI) > 1) && (emojiheartI == 3354737));
      do {
          let libjsiX = String.fromCharCode(100,105,115,99,111,110,116,105,103,117,111,117,115,95,111,95,54,57,0);
          let g_lockJ = String.fromCharCode(107,95,51,54,95,106,105,103,103,108,101,0);
         emojiheartI *= g_lockJ.length / 3;
         libjsiX = `${libjsiX.length + 2}`;
         g_lockJ = `${libjsiX.length | 1}`;
         if (emojiheartI == 3079726) {
            break;
         }
      } while ((3 <= (emojiheartI - emojiheartI) && (emojiheartI - 3) <= 3) && (emojiheartI == 3079726));
      awayplayerE = new Map([[`${statsp.size}`, gdtadvO.length / 3]]);
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
   if (basketballdetailsbgv) {
       let temp1 = String.fromCharCode(117,110,108,111,97,100,95,115,95,48,0);
       let predictionC = String.fromCharCode(115,95,56,52,0);
       let bggradientN = true;
       let iconshareE = 4.0;
       let shirtu = String.fromCharCode(112,95,50,51,95,118,97,108,105,100,97,116,105,111,110,0);
      for (let p = 0; p < 2; p++) {
         iconshareE -= shirtu.length / (Math.max(3, 2));
      }
      for (let s = 0; s < 1; s++) {
         temp1 += `${3 / (Math.max(7, parseInt(`${iconshareE}`)))}`;
      }
          let sellmathbackgroundc = 3.0;
          let iconuserJ = 3.0;
          let ewarded9 = 5;
         iconshareE += ((bggradientN ? 4 : 2) | parseInt(`${iconuserJ}`));
         sellmathbackgroundc += 3 ^ parseInt(`${sellmathbackgroundc}`);
         iconuserJ /= Math.max(3, ewarded9);
         ewarded9 /= Math.max(parseInt(`${sellmathbackgroundc}`) | 1, 2);
      while (1 > (1 + parseInt(`${iconshareE}`)) && (temp1.length / 1) > 2) {
         temp1 = `${predictionC.length & 3}`;
         break;
      }
      for (let m = 0; m < 2; m++) {
          let less9 = [String.fromCharCode(102,95,56,57,95,99,108,117,115,116,101,114,115,0), String.fromCharCode(105,95,51,48,95,116,111,110,101,109,97,112,0)];
          let componentsh = String.fromCharCode(105,95,49,55,95,101,120,116,101,114,110,0);
          let middlebrightnessR = true;
          let libfabricjnin = 0;
          let issub1 = [33, 537, 71];
         iconshareE += libfabricjnin;
         less9.push((componentsh == String.fromCharCode(66,0) ? (middlebrightnessR ? 5 : 2) : componentsh.length));
         middlebrightnessR = (((middlebrightnessR ? 4 : issub1.length) - issub1.length) < 4);
         libfabricjnin *= ((middlebrightnessR ? 4 : 3) - 3);
      }
      for (let l = 0; l < 1; l++) {
         shirtu += "1";
      }
         temp1 += `${shirtu.length >> (Math.min(2, temp1.length))}`;
         iconshareE /= Math.max(2, 2);
         shirtu = "1";
      if ((iconshareE * 5.87) < 4.33 || bggradientN) {
          let imageactionliveM = 1.0;
          let libfabricjniQ = String.fromCharCode(118,95,50,52,95,115,117,98,100,105,118,105,115,105,111,110,0);
         bggradientN = libfabricjniQ.length > 3 && bggradientN;
         imageactionliveM -= parseInt(`${imageactionliveM}`) * parseInt(`${imageactionliveM}`);
         libfabricjniQ += `${parseInt(`${imageactionliveM}`) * 3}`;
      }
          let binddatasS = String.fromCharCode(102,105,101,108,100,95,103,95,54,48,0);
          let materialN = String.fromCharCode(113,95,54,52,95,99,111,97,108,101,115,99,101,0);
         bggradientN = 16 >= predictionC.length;
         binddatasS = "1";
         materialN = "2";
         temp1 = `${(shirtu == String.fromCharCode(107,0) ? parseInt(`${iconshareE}`) : shirtu.length)}`;
      for (let t = 0; t < 3; t++) {
         shirtu = `${(String.fromCharCode(107,0) == shirtu ? parseInt(`${iconshareE}`) : shirtu.length)}`;
      }
      do {
          let libreactnativeblobA = new Map([[String.fromCharCode(115,115,114,99,95,114,95,49,56,0),12], [String.fromCharCode(109,95,49,54,95,112,101,114,99,101,112,116,0),677]]);
          let icondefaultthumbnail9 = false;
         iconshareE *= temp1.length / (Math.max(9, libreactnativeblobA.size));
         libreactnativeblobA = new Map([[`${icondefaultthumbnail9}`, 3]]);
         if (1455115.0 == iconshareE) {
            break;
         }
      } while ((1455115.0 == iconshareE) && (!shirtu.startsWith(`${iconshareE}`)));
      while ((temp1.length * parseInt(`${iconshareE}`)) <= 4) {
          let routern = 5.0;
         temp1 = "3";
         routern *= parseInt(`${routern}`) >> (Math.min(Math.abs(parseInt(`${routern}`)), 3));
         break;
      }
      basketballdetailsbgv = !basketballdetailsbgv || shirtu.length > 48;
   }


     

      routerm = new Map([[`${routerm.size}`, routerm.size]]);
    const initialValue = this.props.showOnStart ? 1 : 0;
       let iconchatsendC = 4;
          let homeactiveC = String.fromCharCode(109,95,52,56,95,99,111,110,102,105,103,117,114,97,116,105,111,110,115,0);
          let stations1 = false;
          let megaphoney = String.fromCharCode(116,95,56,53,95,99,111,108,108,97,103,101,0);
         iconchatsendC <<= Math.min(3, Math.abs(3 << (Math.min(2, homeactiveC.length))));
         homeactiveC = `${megaphoney.length ^ 3}`;
         stations1 = megaphoney.length > megaphoney.length;
      if (2 < (1 << (Math.min(4, Math.abs(iconchatsendC)))) || 3 < (iconchatsendC << (Math.min(Math.abs(1), 1)))) {
          let videojsI = 0;
          let private_v0 = false;
          let anytimeQ = true;
         iconchatsendC &= ((private_v0 ? 4 : 1) >> (Math.min(Math.abs(iconchatsendC), 1)));
         videojsI -= 2;
         private_v0 = videojsI < 84 || !anytimeQ;
         anytimeQ = anytimeQ && 18 > videojsI;
      }
          let tooltipsV = String.fromCharCode(110,95,49,49,95,112,111,108,121,109,101,115,104,0);
          let userh = true;
          let stationt = 2;
         iconchatsendC |= (String.fromCharCode(57,0) == tooltipsV ? tooltipsV.length : iconchatsendC);
         userh = !userh;
         stationt += stationt >> (Math.min(1, Math.abs(2)));
      awayplayerE[`${basketballdetailsbgv}`] = (2 & (basketballdetailsbgv ? 2 : 4));


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
   for (let y = 0; y < 2; y++) {
       let shootnogoalx = [880, 322];
       let recommendation8 = false;
         shootnogoalx = [(shootnogoalx.length & (recommendation8 ? 1 : 5))];
         recommendation8 = shootnogoalx.length >= 91 || !recommendation8;
      awayplayerE[`${basketballdetailsbgv}`] = shootnogoalx.length;
   }


     

   for (let q = 0; q < 2; q++) {
       let windZ = 3.0;
       let whitebelld = 2.0;
       let jingdongG = false;
          let page5 = [243, 833];
          let screen4 = String.fromCharCode(117,109,102,97,118,114,95,111,95,50,55,0);
          let borderless8 = 3.0;
         windZ -= 1 >> (Math.min(Math.abs(parseInt(`${windZ}`)), 5));
         page5 = [page5.length ^ screen4.length];
         screen4 = `${parseInt(`${borderless8}`)}`;
         borderless8 += parseFloat(`${1 & parseInt(`${borderless8}`)}`);
          let a_hashb = 5.0;
          let langY = [321, 121];
         windZ -= parseInt(`${whitebelld}`) + 3;
         a_hashb *= parseFloat(`${langY.length}`);
         langY.push(langY.length << (Math.min(4, Math.abs(parseInt(`${a_hashb}`)))));
          let iconorientationf = false;
          let renderB = [335, 985, 854];
          let chatbotphoto2 = String.fromCharCode(117,95,51,48,95,98,117,105,108,116,105,110,0);
         whitebelld /= Math.max(5, parseFloat(`${3}`));
         iconorientationf = renderB.length > chatbotphoto2.length;
         renderB = [renderB.length % (Math.max(3, 7))];
         chatbotphoto2 = `${renderB.length + chatbotphoto2.length}`;
       let recommendatione = String.fromCharCode(100,95,53,49,95,112,97,103,101,99,111,117,110,116,0);
       let product8 = String.fromCharCode(113,95,49,50,95,99,111,110,118,111,108,118,101,0);
          let hometeamfieldS = String.fromCharCode(114,105,115,101,95,122,95,57,50,0);
          let librrcq = 0;
         recommendatione += `${1 ^ parseInt(`${windZ}`)}`;
         hometeamfieldS = `${(hometeamfieldS == String.fromCharCode(56,0) ? hometeamfieldS.length : librrcq)}`;
         librrcq += librrcq;
      while ((parseInt(`${whitebelld}`) * product8.length) == 1) {
         product8 = `${((jingdongG ? 2 : 3) + 1)}`;
         break;
      }
      for (let b = 0; b < 2; b++) {
         whitebelld -= parseFloat(`${3}`);
      }
          let paget = 5.0;
          let closeS = new Map([[String.fromCharCode(118,95,52,56,95,111,98,115,101,114,118,101,114,0),String.fromCharCode(98,97,115,105,115,95,107,95,49,51,0)], [String.fromCharCode(100,105,99,116,105,111,110,97,114,121,95,103,95,49,55,0),String.fromCharCode(99,111,109,112,111,115,101,114,95,103,95,51,0)], [String.fromCharCode(103,101,116,110,112,97,115,115,101,115,95,54,95,53,52,0),String.fromCharCode(122,95,53,48,95,114,101,115,111,108,118,101,0)]]);
          let iconwechatG = String.fromCharCode(99,111,110,116,114,111,108,108,101,100,95,108,95,49,56,0);
         product8 = `${product8.length}`;
         paget *= closeS.size | 3;
         closeS = new Map([[`${closeS.size}`, closeS.size]]);
         iconwechatG += `${iconwechatG.length % (Math.max(1, 7))}`;
         jingdongG = windZ > 16.29 || 16.29 > whitebelld;
      stationa += `${((giftbuttonm ? 2 : 3) & 1)}`;
   }
    this.styles = {
      videoStyle: this.props.videoStyle || {},
      containerStyle: this.props.style || {},
    };
       let tempnodataT = String.fromCharCode(115,101,97,114,99,104,95,116,95,53,48,0);
       let hongkongw = false;
       let rightU = String.fromCharCode(122,95,56,55,95,111,117,116,0);
         hongkongw = tempnodataT.length >= 57;
      for (let t = 0; t < 1; t++) {
         hongkongw = tempnodataT.length >= 39 && hongkongw;
      }
      do {
          let yellowcirclebg9 = String.fromCharCode(98,95,56,53,95,102,108,97,99,101,110,99,0);
         hongkongw = yellowcirclebg9 == rightU;
         if (hongkongw ? !hongkongw : hongkongw) {
            break;
         }
      } while ((!hongkongw || 1 < tempnodataT.length) && (hongkongw ? !hongkongw : hongkongw));
       let telemetryL = String.fromCharCode(98,95,56,48,95,98,105,116,101,120,97,99,116,110,101,115,115,0);
         telemetryL = `${rightU.length + 2}`;
         tempnodataT = "2";
         telemetryL += `${1 / (Math.max(9, telemetryL.length))}`;
      do {
          let libimagepipelineq = String.fromCharCode(109,100,97,121,95,53,95,52,54,0);
          let downloadeds = false;
         rightU = `${(1 - (hongkongw ? 2 : 3))}`;
         libimagepipelineq = `${3 << (Math.min(4, libimagepipelineq.length))}`;
         downloadeds = downloadeds && libimagepipelineq.length <= 33;
         if (rightU.length == 3712646) {
            break;
         }
      } while ((rightU.length == 3712646) && (rightU.startsWith(`${hongkongw}`)));
      while (telemetryL.length == 2 || tempnodataT.length == 2) {
         telemetryL += `${(String.fromCharCode(70,0) == telemetryL ? (hongkongw ? 2 : 5) : telemetryL.length)}`;
         break;
      }
      routerm = new Map([[`${statsp.size}`, (String.fromCharCode(80,0) == tempnodataT ? statsp.size : tempnodataT.length)]]);

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
       let basketballplayerplaceholderb = String.fromCharCode(114,95,50,53,95,100,105,115,99,111,110,110,101,99,116,101,100,0);
    let sortM = true;
    let renderg = true;
    let footballE = String.fromCharCode(107,95,53,48,95,97,110,103,108,101,115,0);
    let yellowscoreballL = false;
    let defaultteam3 = String.fromCharCode(98,95,50,55,95,113,117,97,114,116,0);
    let sansx = String.fromCharCode(104,95,57,53,95,116,105,109,101,98,97,115,101,0);
    let graphics9 = 1.0;
    let awayJ = [385, 203, 486];
    let layoutY = [165, 639, 516];
    let rncoreX = new Map([[String.fromCharCode(109,111,100,117,108,101,95,50,95,49,51,0),339], [String.fromCharCode(100,111,119,110,108,111,97,100,95,108,95,49,55,0),450], [String.fromCharCode(120,95,55,52,95,100,101,110,111,114,109,97,108,0),457]]);
    let sharev = new Map([[String.fromCharCode(99,108,97,109,112,95,51,95,56,50,0),448], [String.fromCharCode(97,114,103,117,109,101,110,116,95,113,95,56,54,0),740]]);
      renderg = (97 <= ((!renderg ? awayJ.length : 97) * awayJ.length));
   for (let o = 0; o < 1; o++) {
      awayJ = [layoutY.length];
   }
   for (let r = 0; r < 3; r++) {
       let logo_ = false;
       let analyticsk = 2;
       let tempG = new Map([[String.fromCharCode(100,97,118,115,95,120,95,52,55,0),true ], [String.fromCharCode(97,116,97,98,108,101,115,95,48,95,52,49,0),false ]]);
       let questj = 5.0;
         analyticsk /= Math.max(2, analyticsk / 2);
         analyticsk += 3;
      for (let w = 0; w < 1; w++) {
         tempG = new Map([[`${tempG.size}`, tempG.size | parseInt(`${questj}`)]]);
      }
      if ((4 - tempG.size) >= 3 && (4 - analyticsk) >= 4) {
          let teamn = 2;
          let unimplementedviewv = String.fromCharCode(98,95,49,55,95,101,120,99,101,112,116,105,111,110,115,0);
         tempG = new Map([[`${logo_}`, teamn]]);
         teamn ^= unimplementedviewv.length % (Math.max(2, 10));
         unimplementedviewv = `${unimplementedviewv.length % 3}`;
      }
       let libreanimatedb = 3.0;
      for (let u = 0; u < 2; u++) {
          let cast4 = String.fromCharCode(105,110,115,116,101,97,100,95,102,95,51,0);
          let klevinF = String.fromCharCode(118,95,55,48,95,97,108,103,111,114,0);
          let disconnectedv = String.fromCharCode(112,95,50,50,95,101,100,105,116,0);
          let penaltymatchiconQ = String.fromCharCode(109,95,49,55,95,103,114,97,112,104,99,121,99,108,101,115,0);
          let logoutl = 3.0;
         analyticsk /= Math.max((disconnectedv == String.fromCharCode(55,0) ? disconnectedv.length : parseInt(`${logoutl}`)), 1);
         cast4 = `${penaltymatchiconQ.length << (Math.min(Math.abs(3), 3))}`;
         klevinF = `${penaltymatchiconQ.length & klevinF.length}`;
         logoutl /= Math.max(5, parseFloat(`${1 << (Math.min(5, klevinF.length))}`));
      }
      do {
         libreanimatedb *= parseFloat(`${parseInt(`${libreanimatedb}`) | 2}`);
         if (2698325.0 == libreanimatedb) {
            break;
         }
      } while ((2.32 <= libreanimatedb) && (2698325.0 == libreanimatedb));
       let whatsappq = false;
       let resultj = true;
          let defaultbasketballbg8 = [176, 297];
         questj /= Math.max(5, 1);
         defaultbasketballbg8 = [3];
      while (5 <= analyticsk) {
          let downX = String.fromCharCode(106,95,56,48,95,101,114,108,101,0);
         logo_ = !resultj;
         downX = `${downX.length ^ downX.length}`;
         break;
      }
      if (!logo_) {
          let holderv = new Map([[String.fromCharCode(120,114,117,110,95,120,95,52,56,0),String.fromCharCode(105,95,52,56,95,107,101,121,110,97,109,101,0)], [String.fromCharCode(119,95,52,95,115,97,116,117,114,97,116,105,111,110,0),String.fromCharCode(108,95,57,55,95,103,114,97,98,98,101,114,0)], [String.fromCharCode(104,95,57,50,95,100,101,115,116,105,110,97,116,105,111,110,0),String.fromCharCode(98,95,57,95,116,111,112,115,0)]]);
          let huaweip = 0.0;
          let chatbotphotov = true;
          let analyticss = String.fromCharCode(122,95,51,52,95,117,110,101,109,98,101,100,0);
         logo_ = (analyticss.length % (Math.max(2, holderv.size))) > 97;
         holderv = new Map([[`${chatbotphotov}`, (parseInt(`${huaweip}`) * (chatbotphotov ? 1 : 3))]]);
         huaweip += parseInt(`${huaweip}`) & 2;
         analyticss += `${(parseInt(`${huaweip}`) - (chatbotphotov ? 2 : 1))}`;
      }
         resultj = null != tempG[`${questj}`];
      sortM = awayJ.length == 66;
   }
      sortM = ((sansx.length ^ (renderg ? 46 : sansx.length)) < 46);

    let state = this.state;
   while (awayJ.length == 2) {
      renderg = (parseInt(`${graphics9}`) / (Math.max(4, defaultteam3.length))) <= 38;
      break;
   }
      yellowscoreballL = rncoreX.size >= layoutY.length;
      sansx += `${1 >> (Math.min(5, awayJ.length))}`;
   while (!yellowscoreballL) {
      layoutY = [3];
      break;
   }

    state.loading = true;
      sansx = `${(awayJ.length - (renderg ? 4 : 1))}`;
       let sportsG = [124, 855];
       let emptyx = String.fromCharCode(115,95,54,52,95,109,109,120,101,120,116,0);
       let macau0 = 5.0;
         emptyx += `${parseInt(`${macau0}`) >> (Math.min(sportsG.length, 4))}`;
          let predictionbuttonf = 0.0;
          let setting9 = true;
         emptyx += `${sportsG.length >> (Math.min(Math.abs(1), 3))}`;
         predictionbuttonf /= Math.max(parseFloat(`${3 + parseInt(`${predictionbuttonf}`)}`), 3);
         setting9 = setting9 && 23.92 <= predictionbuttonf;
      while (4 > (emptyx.length | 2) && (emptyx.length | sportsG.length) > 2) {
          let basej = true;
          let projecty = String.fromCharCode(99,111,110,116,114,97,99,116,95,104,95,57,57,0);
         emptyx = `${(projecty == String.fromCharCode(100,0) ? projecty.length : emptyx.length)}`;
         basej = (basej ? !basej : basej);
         break;
      }
      if (emptyx.length >= 5) {
          let skipw = String.fromCharCode(100,95,57,55,95,101,105,112,118,0);
          let basketballawayteamq = 4.0;
          let rewardvideoa = 0.0;
          let floatingc = 3.0;
          let b_managerD = String.fromCharCode(109,97,103,110,105,116,117,100,101,115,95,55,95,55,50,0);
         emptyx = `${skipw.length}`;
         skipw = `${parseInt(`${rewardvideoa}`)}`;
         basketballawayteamq /= Math.max(parseInt(`${rewardvideoa}`) | 2, 5);
         floatingc -= parseInt(`${floatingc}`) >> (Math.min(3, Math.abs(1)));
         b_managerD += `${b_managerD.length * parseInt(`${basketballawayteamq}`)}`;
      }
       let nativeexI = 2.0;
       let dacccfaabfbcbadeebddcabacdffdbA = 4.0;
      for (let t = 0; t < 3; t++) {
         emptyx = `${1 >> (Math.min(Math.abs(parseInt(`${dacccfaabfbcbadeebddcabacdffdbA}`)), 3))}`;
      }
      do {
         emptyx = `${parseInt(`${nativeexI}`)}`;
         if (String.fromCharCode(109,122,102,108,95,103,118,0) == emptyx) {
            break;
         }
      } while ((String.fromCharCode(109,122,102,108,95,103,118,0) == emptyx) && ((sportsG.length * emptyx.length) > 2 || (2 * emptyx.length) > 2));
      if (4 <= emptyx.length) {
         macau0 *= parseFloat(`${parseInt(`${macau0}`) & 2}`);
      }
         emptyx = `${parseInt(`${nativeexI}`) & 3}`;
      rncoreX = new Map([[sansx, basketballplayerplaceholderb.length]]);
   do {
      defaultteam3 += `${rncoreX.size ^ defaultteam3.length}`;
      if (String.fromCharCode(120,122,117,55,103,122,50,106,0) == defaultteam3) {
         break;
      }
   } while ((!yellowscoreballL) && (String.fromCharCode(120,122,117,55,103,122,50,106,0) == defaultteam3));
   for (let z = 0; z < 2; z++) {
      renderg = basketballplayerplaceholderb.length >= 66;
   }

    this.loadAnimation();
       let helpern = String.fromCharCode(119,95,49,52,95,112,114,101,97,109,98,108,101,0);
         helpern += `${3 / (Math.max(3, helpern.length))}`;
          let mintegral7 = String.fromCharCode(115,95,52,55,95,115,104,105,102,116,101,100,0);
          let footballfieldB = false;
         helpern += `${(mintegral7.length | (footballfieldB ? 1 : 2))}`;
         helpern += `${helpern.length + helpern.length}`;
      awayJ = [basketballplayerplaceholderb.length];
       let vietnamV = 2.0;
      do {
          let smallK = String.fromCharCode(109,101,103,97,103,114,111,117,112,95,118,95,53,49,0);
          let basketballdetailsbgE = 1;
          let iconlogoutx = 4.0;
          let popupy = String.fromCharCode(108,111,99,97,108,101,115,95,115,95,57,51,0);
         vietnamV -= 2 * parseInt(`${vietnamV}`);
         smallK += `${parseInt(`${iconlogoutx}`) ^ smallK.length}`;
         basketballdetailsbgE <<= Math.min(Math.abs((popupy == String.fromCharCode(72,0) ? parseInt(`${iconlogoutx}`) : popupy.length)), 4);
         if (vietnamV == 1418410.0) {
            break;
         }
      } while ((3.99 < (vietnamV * 3.46) && (3.46 * vietnamV) < 1.60) && (vietnamV == 1418410.0));
      while ((4.25 * vietnamV) < 2.4 || (vietnamV + 4.25) < 4.5) {
         vietnamV -= 1;
         break;
      }
      if (vietnamV >= vietnamV) {
         vietnamV /= Math.max(parseInt(`${vietnamV}`), 4);
      }
      defaultteam3 += `${layoutY.length * 1}`;
       let giflivestreamingi = [887, 876];
       let libjsiU = 3.0;
          let searchbari = String.fromCharCode(116,114,97,105,116,95,54,95,54,56,0);
          let plashe = 3;
         libjsiU /= Math.max(parseFloat(`${searchbari.length >> (Math.min(Math.abs(3), 3))}`), 2);
         searchbari = `${1 | plashe}`;
         plashe %= Math.max(plashe, 5);
      while ((5.95 / (Math.max(3, libjsiU))) == 5.45 || 2.16 == (libjsiU / (Math.max(5.95, 9)))) {
         libjsiU *= parseFloat(`${2 | parseInt(`${libjsiU}`)}`);
         break;
      }
         libjsiU += parseFloat(`${1}`);
         libjsiU /= Math.max(parseFloat(`${parseInt(`${libjsiU}`)}`), 2);
         libjsiU /= Math.max(parseFloat(`${2 & giflivestreamingi.length}`), 5);
          let elementsy = new Map([[String.fromCharCode(114,95,52,56,95,99,104,111,111,115,101,0),true ], [String.fromCharCode(109,111,110,111,116,111,110,105,99,95,116,95,50,54,0),true ], [String.fromCharCode(113,95,57,51,95,104,101,108,100,0),true ]]);
         giflivestreamingi = [giflivestreamingi.length * parseInt(`${libjsiU}`)];
         elementsy = new Map([[`${elementsy.size}`, 3]]);
      rncoreX[`${libjsiU}`] = awayJ.length - 1;
   while ((1 + rncoreX.size) < 1 || (1 + rncoreX.size) < 5) {
      rncoreX = new Map([[defaultteam3, 2]]);
      break;
   }

    this.setState(state);
      sansx = `${parseInt(`${graphics9}`) & 3}`;
      defaultteam3 = `${rncoreX.size}`;
      graphics9 *= parseInt(`${graphics9}`) & 1;
       let typingT = 3;
       let configM = 4.0;
       let containerX = true;
         typingT %= Math.max(typingT, 5);
          let streaming9 = 1.0;
          let baiduadsw = 2.0;
          let signinup2 = String.fromCharCode(109,111,110,111,115,112,97,99,101,100,95,106,95,54,56,0);
         configM *= typingT >> (Math.min(4, Math.abs(2)));
         streaming9 /= Math.max(5, 3 - parseInt(`${baiduadsw}`));
         baiduadsw /= Math.max(parseFloat(`${parseInt(`${baiduadsw}`)}`), 5);
         signinup2 += `${parseInt(`${baiduadsw}`) + signinup2.length}`;
         configM += typingT % (Math.max(parseInt(`${configM}`), 6));
         typingT >>= Math.min(1, Math.abs(1));
          let matchg = new Map([[String.fromCharCode(122,114,101,111,114,100,101,114,95,111,95,54,0),287], [String.fromCharCode(122,95,56,52,95,100,101,110,105,97,108,0),671], [String.fromCharCode(112,104,121,115,105,99,97,108,95,106,95,52,50,0),661]]);
         configM /= Math.max(3, ((containerX ? 4 : 4) >> (Math.min(Math.abs(parseInt(`${configM}`)), 3))));
         matchg[`${matchg.size}`] = matchg.size;
         configM -= typingT;
          let matchdetailbgA = String.fromCharCode(118,95,56,54,95,99,101,108,116,0);
         configM /= Math.max((1 & (containerX ? 5 : 1)), 3);
         matchdetailbgA = `${matchdetailbgA.length / (Math.max(matchdetailbgA.length, 7))}`;
         configM *= 3 & typingT;
      if (2.32 < (configM - 2.9)) {
         containerX = configM >= 58.87;
      }
      awayJ = [(parseInt(`${configM}`) / (Math.max(4, (renderg ? 3 : 3))))];


    if (typeof this.props.onLoadStart === 'function') {

   if (graphics9 == layoutY.length) {
      layoutY.push(1);
   }
   do {
      footballE += "1";
      if (861947 == footballE.length) {
         break;
      }
   } while (((awayJ.length + footballE.length) == 1) && (861947 == footballE.length));
   do {
      graphics9 *= basketballplayerplaceholderb.length;
      if (40709.0 == graphics9) {
         break;
      }
   } while ((sortM || (1.48 - graphics9) < 4.45) && (40709.0 == graphics9));
   for (let p = 0; p < 3; p++) {
      basketballplayerplaceholderb = `${2 >> (Math.min(1, Math.abs(rncoreX.size)))}`;
   }
      this.props.onLoadStart(...arguments);
   if (renderg || !sortM) {
       let nbatrophyg = 1;
       let iconbellactivew = String.fromCharCode(117,95,53,51,95,108,97,103,97,114,105,116,104,114,97,99,0);
         iconbellactivew += `${nbatrophyg + 3}`;
      if ((nbatrophyg / (Math.max(iconbellactivew.length, 1))) <= 1 || (nbatrophyg / (Math.max(1, 4))) <= 4) {
         iconbellactivew += `${iconbellactivew.length & 2}`;
      }
          let release_6n = 2.0;
          let alertn = String.fromCharCode(99,95,49,48,95,115,105,100,101,0);
         nbatrophyg += nbatrophyg >> (Math.min(alertn.length, 1));
         release_6n *= parseFloat(`${parseInt(`${release_6n}`)}`);
         alertn = `${parseInt(`${release_6n}`) * 1}`;
      while (5 > (iconbellactivew.length & 1)) {
          let castingb = [838, 569];
          let preview5 = String.fromCharCode(99,108,97,105,109,95,114,95,51,56,0);
          let thumbnailS = 1.0;
         iconbellactivew = `${preview5.length << (Math.min(Math.abs(2), 2))}`;
         castingb = [3];
         preview5 = `${3 << (Math.min(3, castingb.length))}`;
         thumbnailS /= Math.max(4, parseFloat(`${2 & castingb.length}`));
         break;
      }
         nbatrophyg <<= Math.min(Math.abs(nbatrophyg / (Math.max(iconbellactivew.length, 1))), 3);
          let whitetickL = false;
         nbatrophyg &= nbatrophyg;
         whitetickL = !whitetickL && whitetickL;
      renderg = footballE.length > 71;
   }
      renderg = !renderg;
   if (basketballplayerplaceholderb.length > 3) {
      yellowscoreballL = footballE.length > sansx.length;
   }
   do {
       let traminik = String.fromCharCode(109,112,101,103,112,105,99,116,117,114,101,95,109,95,50,48,0);
       let executorB = String.fromCharCode(98,95,56,54,95,116,105,103,103,108,101,0);
       let albumg = 2.0;
       let roundR = String.fromCharCode(114,101,97,100,98,121,116,101,95,112,95,49,52,0);
          let sellmathbackgrounde = String.fromCharCode(120,95,49,48,95,99,108,97,122,122,0);
          let drage = 2.0;
          let dacccfaabfbcbadeebddcabacdffdb9 = 5;
         albumg *= 3 >> (Math.min(2, Math.abs(parseInt(`${albumg}`))));
         sellmathbackgrounde = `${sellmathbackgrounde.length % 3}`;
         drage /= Math.max(4, parseFloat(`${dacccfaabfbcbadeebddcabacdffdb9 ^ parseInt(`${drage}`)}`));
         dacccfaabfbcbadeebddcabacdffdb9 -= 1 + parseInt(`${drage}`);
       let reviewI = String.fromCharCode(100,99,116,95,120,95,52,52,0);
      while (traminik.length > parseInt(`${albumg}`)) {
          let photoS = 1.0;
         albumg /= Math.max(parseInt(`${albumg}`), 2);
         photoS += parseInt(`${photoS}`);
         break;
      }
      if (reviewI.length <= traminik.length) {
         reviewI = `${traminik.length}`;
      }
         reviewI = `${parseInt(`${albumg}`)}`;
      if (albumg > 2.9) {
         executorB = "3";
      }
      for (let u = 0; u < 1; u++) {
          let nativemodulen = false;
         albumg /= Math.max(3, executorB.length);
         nativemodulen = !nativemodulen;
      }
      do {
         executorB += "3";
         if (executorB.length == 1891431) {
            break;
         }
      } while ((executorB.length == 1891431) && (executorB.length > reviewI.length));
      for (let y = 0; y < 3; y++) {
         albumg /= Math.max(roundR.length, 4);
      }
       let downloaderC = 4.0;
         executorB = `${roundR.length}`;
         reviewI = `${(String.fromCharCode(55,0) == traminik ? parseInt(`${downloaderC}`) : traminik.length)}`;
      basketballplayerplaceholderb += `${parseInt(`${graphics9}`) % 3}`;
      if (4382223 == basketballplayerplaceholderb.length) {
         break;
      }
   } while ((4382223 == basketballplayerplaceholderb.length) && (5 < (basketballplayerplaceholderb.length & layoutY.length)));

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
       let xadsdkp = [431, 903];
    let hometeamfield6 = new Map([[String.fromCharCode(114,105,100,103,101,95,121,95,53,51,0),true ], [String.fromCharCode(102,95,55,51,95,115,99,97,110,110,101,114,0),true ]]);
    let orangeclockG = false;
    let greenarrowupJ = 3.0;
    let footballfieldl = new Map([[String.fromCharCode(101,95,55,54,95,115,119,97,112,112,97,98,108,101,0),String.fromCharCode(99,97,115,116,101,100,95,49,95,57,53,0)], [String.fromCharCode(100,95,50,51,95,115,101,115,115,105,111,110,115,0),String.fromCharCode(105,109,112,108,105,99,105,116,108,121,95,107,95,49,0)]]);
    let libswresampleN = 1;
    let notificationfillemptyN = [String.fromCharCode(118,97,99,117,117,109,95,97,95,56,50,0), String.fromCharCode(104,105,103,104,108,105,103,104,116,105,110,103,95,57,95,53,48,0), String.fromCharCode(97,95,52,55,95,116,105,109,101,99,111,100,101,0)];
    let configureR = 1.0;
    let classesQ = 1.0;
    let notificationfilledA = String.fromCharCode(115,119,105,116,99,104,97,98,108,101,95,48,95,51,49,0);
    let webviews = new Map([[String.fromCharCode(100,101,98,117,103,98,111,120,95,105,95,56,51,0),String.fromCharCode(97,102,116,101,114,95,56,95,55,57,0)], [String.fromCharCode(103,101,110,101,114,97,116,105,110,103,95,111,95,55,48,0),String.fromCharCode(115,109,111,111,116,104,110,101,115,115,95,49,95,50,0)]]);
    let nbatrophyo = String.fromCharCode(103,95,51,56,95,97,115,116,114,111,110,111,109,105,99,97,108,0);
    let pingb = 0;
    let uimanager_ = String.fromCharCode(115,111,114,101,99,118,109,115,103,95,110,95,49,51,0);
    let smallsoundp = false;
    let dangerT = 5;
   do {
      notificationfillemptyN.push(3);
      if (347650 == notificationfillemptyN.length) {
         break;
      }
   } while ((4 == (notificationfillemptyN.length & 2) && 2 == notificationfillemptyN.length) && (347650 == notificationfillemptyN.length));
   while ((xadsdkp.length / (Math.max(1, 8))) < 3) {
      orangeclockG = 65 > libswresampleN;
      break;
   }
      notificationfilledA = `${parseInt(`${greenarrowupJ}`) - xadsdkp.length}`;
      classesQ *= parseFloat(`${footballfieldl.size}`);
   if (2.89 > (classesQ * configureR)) {
      configureR *= parseInt(`${configureR}`);
   }
      webviews = new Map([[`${orangeclockG}`, 1 & libswresampleN]]);
      orangeclockG = hometeamfield6.size <= 4 && nbatrophyo == String.fromCharCode(51,0);
      hometeamfield6 = new Map([[`${libswresampleN}`, parseInt(`${configureR}`) << (Math.min(2, Math.abs(3)))]]);
      libswresampleN *= 1;
       let privatechatbgJ = 2.0;
       let sharewhiteR = String.fromCharCode(104,95,52,53,95,100,105,115,115,105,109,0);
      if (5 > (parseInt(`${privatechatbgJ}`) * sharewhiteR.length)) {
         privatechatbgJ /= Math.max(2, parseFloat(`${1 + sharewhiteR.length}`));
      }
         sharewhiteR += `${3 >> (Math.min(3, sharewhiteR.length))}`;
      do {
         privatechatbgJ -= parseFloat(`${parseInt(`${privatechatbgJ}`)}`);
         if (4259879.0 == privatechatbgJ) {
            break;
         }
      } while ((1.92 > privatechatbgJ) && (4259879.0 == privatechatbgJ));
         sharewhiteR = `${parseInt(`${privatechatbgJ}`) / 2}`;
      do {
         privatechatbgJ /= Math.max(4, (parseFloat(`${sharewhiteR == String.fromCharCode(57,0) ? sharewhiteR.length : parseInt(`${privatechatbgJ}`)}`)));
         if (3751004.0 == privatechatbgJ) {
            break;
         }
      } while (((5 ^ sharewhiteR.length) < 1 || (sharewhiteR.length - 5) < 3) && (3751004.0 == privatechatbgJ));
      while ((sharewhiteR.length ^ 5) < 3 && 2.31 < (parseFloat(`${sharewhiteR.length}`) * privatechatbgJ)) {
         privatechatbgJ -= (parseFloat(`${sharewhiteR == String.fromCharCode(69,0) ? parseInt(`${privatechatbgJ}`) : sharewhiteR.length}`));
         break;
      }
      footballfieldl = new Map([[`${greenarrowupJ}`, parseInt(`${greenarrowupJ}`) * 2]]);
   for (let f = 0; f < 1; f++) {
      nbatrophyo = "2";
   }
      configureR *= parseInt(`${greenarrowupJ}`);
   for (let h = 0; h < 1; h++) {
       let iconstarJ = String.fromCharCode(121,117,118,121,117,118,95,110,95,53,49,0);
       let bellF = String.fromCharCode(103,95,57,56,95,117,114,108,0);
         bellF += `${bellF.length}`;
      do {
         bellF = `${3 | iconstarJ.length}`;
         if (bellF.length == 1229549) {
            break;
         }
      } while ((bellF.length == 1229549) && (iconstarJ != String.fromCharCode(97,0) && 1 <= bellF.length));
          let headerN = 5.0;
          let entryj = [String.fromCharCode(114,101,118,105,101,119,115,95,121,95,55,51,0), String.fromCharCode(114,110,103,115,95,57,95,52,56,0)];
         iconstarJ = `${parseInt(`${headerN}`)}`;
         headerN *= parseFloat(`${entryj.length % (Math.max(entryj.length, 4))}`);
       let libimagepipelineD = new Map([[String.fromCharCode(116,95,57,53,95,111,105,100,0),27], [String.fromCharCode(115,116,97,99,107,95,109,95,52,49,0),380]]);
       let confirmationi = new Map([[String.fromCharCode(112,95,54,57,95,100,105,115,99,111,110,110,101,99,116,101,100,0),173], [String.fromCharCode(105,95,52,50,95,112,114,111,103,114,97,109,115,0),927], [String.fromCharCode(111,95,51,56,95,115,97,109,112,0),589]]);
         bellF = `${(String.fromCharCode(48,0) == iconstarJ ? libimagepipelineD.size : iconstarJ.length)}`;
          let basketballmatchdetailbgX = String.fromCharCode(98,95,57,95,115,112,101,108,108,0);
         bellF += `${iconstarJ.length}`;
         basketballmatchdetailbgX = `${2 | basketballmatchdetailbgX.length}`;
      configureR -= parseInt(`${classesQ}`);
   }
      notificationfilledA += `${notificationfillemptyN.length - nbatrophyo.length}`;
      footballfieldl[`${configureR}`] = parseInt(`${configureR}`) * 3;
       let gdtadvD = 0.0;
         gdtadvD -= parseFloat(`${parseInt(`${gdtadvD}`) % 3}`);
      if ((gdtadvD * gdtadvD) <= 1.57 || 4.60 <= (1.57 * gdtadvD)) {
          let xvodi = 1.0;
         gdtadvD *= parseFloat(`${parseInt(`${xvodi}`)}`);
      }
         gdtadvD -= parseFloat(`${parseInt(`${gdtadvD}`) >> (Math.min(2, Math.abs(1)))}`);
      footballfieldl = new Map([[`${gdtadvD}`, 1 & nbatrophyo.length]]);
       let mappingd = String.fromCharCode(120,95,49,53,95,99,101,108,112,0);
       let airbnbstarselectedt = String.fromCharCode(116,95,54,51,95,115,110,112,114,105,110,116,102,0);
       let cancelV = 5.0;
         mappingd = `${airbnbstarselectedt.length ^ mappingd.length}`;
         cancelV /= Math.max(parseFloat(`${3 & airbnbstarselectedt.length}`), 2);
      if (3 >= mappingd.length) {
         airbnbstarselectedt = `${parseInt(`${cancelV}`) << (Math.min(Math.abs(3), 1))}`;
      }
      do {
         airbnbstarselectedt += `${mappingd.length}`;
         if (airbnbstarselectedt.length == 2917190) {
            break;
         }
      } while ((3 > airbnbstarselectedt.length) && (airbnbstarselectedt.length == 2917190));
      do {
          let imagewatchlivec = false;
          let singapored = new Map([[String.fromCharCode(108,95,55,49,95,98,105,111,109,101,116,114,105,99,115,0),380], [String.fromCharCode(117,110,112,111,105,115,111,110,95,48,95,50,57,0),551], [String.fromCharCode(114,101,117,115,97,98,108,101,95,122,95,54,0),67]]);
          let vipsporty = 2.0;
         cancelV += parseFloat(`${3 << (Math.min(1, mappingd.length))}`);
         imagewatchlivec = null != singapored[`${imagewatchlivec}`];
         singapored = new Map([[`${singapored.size}`, singapored.size + parseInt(`${vipsporty}`)]]);
         vipsporty -= (parseFloat(`${parseInt(`${vipsporty}`) & (imagewatchlivec ? 5 : 3)}`));
         if (cancelV == 4056535.0) {
            break;
         }
      } while ((cancelV == 4056535.0) && (mappingd.length > 1));
      while (mappingd.length > airbnbstarselectedt.length) {
         airbnbstarselectedt += `${mappingd.length * 2}`;
         break;
      }
      do {
          let mbbid6 = [String.fromCharCode(118,115,114,99,95,57,95,49,49,0), String.fromCharCode(105,95,53,53,95,98,114,97,110,100,115,0)];
          let typingd = [398, 541, 965];
          let favoritek = [274, 603, 447];
          let minip = String.fromCharCode(102,95,52,54,0);
          let icondownimg6 = [String.fromCharCode(105,95,57,48,95,112,117,115,104,105,110,103,0), String.fromCharCode(98,95,55,54,95,112,111,114,116,97,108,0)];
         airbnbstarselectedt += "3";
         mbbid6 = [typingd.length - 3];
         typingd.push(icondownimg6.length >> (Math.min(favoritek.length, 3)));
         favoritek.push(2 >> (Math.min(4, minip.length)));
         minip += `${favoritek.length - mbbid6.length}`;
         icondownimg6 = [mbbid6.length];
         if (4075320 == airbnbstarselectedt.length) {
            break;
         }
      } while ((4075320 == airbnbstarselectedt.length) && (!airbnbstarselectedt.includes(`${cancelV}`)));
      if (airbnbstarselectedt != mappingd) {
         mappingd = "1";
      }
      do {
         mappingd += `${mappingd.length << (Math.min(5, airbnbstarselectedt.length))}`;
         if (mappingd.length == 3599061) {
            break;
         }
      } while ((!mappingd.endsWith(`${cancelV}`)) && (mappingd.length == 3599061));
      webviews[nbatrophyo] = webviews.size % 1;
      orangeclockG = webviews.size < 24;
   while (3 <= (nbatrophyo.length - webviews.size)) {
       let emptyx = 0.0;
       let turn_ = String.fromCharCode(109,95,54,49,95,99,111,109,112,97,114,0);
       let iconeditS = String.fromCharCode(113,117,97,114,116,101,114,95,51,95,56,0);
       let aboutp = 3.0;
      do {
          let stationsh = 2.0;
          let orientationG = 5.0;
          let sortw = new Map([[String.fromCharCode(106,117,115,116,105,102,121,95,100,95,51,51,0),true ], [String.fromCharCode(114,95,51,52,95,119,97,118,101,102,111,114,109,0),false ]]);
          let notificationQ = 4;
          let videobufferloadingZ = 0.0;
         emptyx += parseFloat(`${parseInt(`${emptyx}`) * notificationQ}`);
         stationsh /= Math.max(3, 4);
         orientationG += parseFloat(`${parseInt(`${videobufferloadingZ}`) % 1}`);
         sortw = new Map([[`${sortw.size}`, 3]]);
         notificationQ -= 1;
         videobufferloadingZ *= parseFloat(`${1 / (Math.max(3, parseInt(`${stationsh}`)))}`);
         if (emptyx == 474474.0) {
            break;
         }
      } while ((4.2 >= (emptyx + aboutp)) && (emptyx == 474474.0));
         turn_ += `${parseInt(`${emptyx}`)}`;
      while (aboutp > emptyx) {
         aboutp -= parseFloat(`${parseInt(`${emptyx}`) * 1}`);
         break;
      }
       let tempnodatagifr = 4;
          let stationm = String.fromCharCode(114,95,50,55,95,115,99,117,98,98,101,114,0);
         turn_ += `${3 / (Math.max(8, parseInt(`${aboutp}`)))}`;
         stationm = `${stationm.length % (Math.max(stationm.length, 4))}`;
       let schedulea = String.fromCharCode(109,95,51,49,95,100,105,115,109,105,115,115,0);
          let macau4 = String.fromCharCode(103,95,55,57,95,108,97,118,102,117,116,105,108,115,0);
         iconeditS = `${turn_.length}`;
         macau4 = `${macau4.length - macau4.length}`;
         tempnodatagifr -= schedulea.length;
          let statisticsinactiveH = new Map([[String.fromCharCode(99,108,111,115,101,95,100,95,56,52,0),String.fromCharCode(111,110,121,120,100,95,49,95,49,51,0)], [String.fromCharCode(112,95,53,52,95,112,114,105,118,97,116,101,0),String.fromCharCode(98,117,102,102,101,114,113,117,101,117,101,95,113,95,56,54,0)], [String.fromCharCode(99,111,109,112,97,114,105,115,111,110,95,98,95,55,49,0),String.fromCharCode(106,95,56,95,103,111,112,115,0)]]);
          let layoutj = [249, 643];
         turn_ = `${turn_.length >> (Math.min(Math.abs(1), 2))}`;
         statisticsinactiveH = new Map([[`${statisticsinactiveH.size}`, layoutj.length * statisticsinactiveH.size]]);
         layoutj.push(layoutj.length);
         aboutp *= (parseFloat(`${String.fromCharCode(51,0) == schedulea ? schedulea.length : parseInt(`${aboutp}`)}`));
      for (let x = 0; x < 2; x++) {
         emptyx *= parseFloat(`${iconeditS.length | schedulea.length}`);
      }
      for (let t = 0; t < 3; t++) {
          let notificationfillemptyNv = String.fromCharCode(108,95,55,52,95,112,97,105,110,116,0);
          let issub9 = [374, 688];
         aboutp += parseFloat(`${schedulea.length * iconeditS.length}`);
         notificationfillemptyNv += `${3 * issub9.length}`;
         issub9 = [(notificationfillemptyNv == String.fromCharCode(121,0) ? issub9.length : notificationfillemptyNv.length)];
      }
      nbatrophyo += `${xadsdkp.length}`;
      break;
   }
       let iconarrowleft6 = true;
       let clockz = String.fromCharCode(112,114,111,108,111,110,103,95,52,95,52,0);
         iconarrowleft6 = clockz.length == 90;
          let updatesy = String.fromCharCode(99,95,49,51,95,101,100,105,116,101,100,0);
          let tickedW = String.fromCharCode(118,95,56,52,95,106,117,108,105,97,110,0);
         clockz = "1";
         updatesy = `${1 & tickedW.length}`;
         tickedW += `${tickedW.length}`;
      if (1 < clockz.length) {
         iconarrowleft6 = clockz.length == 90;
      }
      do {
         clockz += `${(String.fromCharCode(55,0) == clockz ? clockz.length : (iconarrowleft6 ? 2 : 3))}`;
         if (String.fromCharCode(101,103,114,0) == clockz) {
            break;
         }
      } while ((clockz.length <= 3) && (String.fromCharCode(101,103,114,0) == clockz));
         iconarrowleft6 = clockz.length < 7;
      if (clockz.endsWith(`${iconarrowleft6}`)) {
          let schedule9 = 4.0;
          let dialogy = true;
          let push4 = String.fromCharCode(106,95,51,51,95,99,111,110,116,101,110,116,105,111,110,0);
          let libreanimatedV = true;
          let viewsL = 3.0;
         clockz = `${push4.length}`;
         schedule9 -= parseFloat(`${3 | parseInt(`${viewsL}`)}`);
         dialogy = schedule9 <= 38.65 && !dialogy;
         push4 = `${1 / (Math.max(parseInt(`${viewsL}`), 10))}`;
         libreanimatedV = !dialogy;
      }
      notificationfillemptyN.push(3);
      webviews = new Map([[`${hometeamfield6.size}`, hometeamfield6.size * 2]]);
   for (let t = 0; t < 3; t++) {
      notificationfilledA = `${(notificationfilledA == String.fromCharCode(56,0) ? notificationfilledA.length : hometeamfield6.size)}`;
   }
   while ((hometeamfield6.size * 5) <= 3) {
       let gifgoalk = [String.fromCharCode(97,95,49,50,95,104,119,102,114,97,109,101,0), String.fromCharCode(111,119,110,101,114,95,121,95,49,0)];
       let info9 = 3.0;
       let modityl = String.fromCharCode(114,101,116,117,114,110,115,95,104,95,54,54,0);
       let mbjscommon7 = new Map([[String.fromCharCode(111,95,56,95,109,97,115,115,0),108], [String.fromCharCode(112,95,50,55,95,97,108,112,104,97,110,117,109,101,114,105,99,115,0),670]]);
      while (3 >= mbjscommon7.size) {
         info9 += mbjscommon7.size % (Math.max(3, 1));
         break;
      }
      while (1 < gifgoalk.length) {
          let middlesoundX = 5.0;
          let iconpipexpanda = 4;
          let with_mpT = 2.0;
          let huaweiO = String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,100,95,51,95,57,48,0);
         gifgoalk = [modityl.length];
         middlesoundX += parseFloat(`${3}`);
         iconpipexpanda *= huaweiO.length;
         with_mpT *= (parseFloat(`${huaweiO == String.fromCharCode(55,0) ? parseInt(`${with_mpT}`) : huaweiO.length}`));
         break;
      }
      if (modityl.length == 3) {
          let q_positiona = 0.0;
          let dycreatorw = String.fromCharCode(104,95,50,52,95,112,114,111,98,108,101,109,115,0);
          let iconeditB = String.fromCharCode(117,95,56,49,95,112,97,114,97,108,108,101,108,0);
          let middlewarei = 4;
          let unfillL = 1.0;
         modityl = `${1 << (Math.min(5, iconeditB.length))}`;
         q_positiona *= parseFloat(`${1 * parseInt(`${unfillL}`)}`);
         dycreatorw = `${parseInt(`${unfillL}`) * 3}`;
         iconeditB = `${parseInt(`${q_positiona}`) * parseInt(`${unfillL}`)}`;
         middlewarei %= Math.max(3, dycreatorw.length);
      }
      if (4.59 > (2.55 + info9)) {
         info9 *= parseInt(`${info9}`) ^ gifgoalk.length;
      }
          let defaultroombgD = true;
         modityl = `${1 << (Math.min(1, Math.abs(mbjscommon7.size)))}`;
         defaultroombgD = (!defaultroombgD ? !defaultroombgD : !defaultroombgD);
         modityl += "2";
         gifgoalk.push(gifgoalk.length / (Math.max(3, parseInt(`${info9}`))));
      while (3.68 > (info9 / (Math.max(gifgoalk.length, 1))) || 2 > (parseInt(`${info9}`) / (Math.max(2, gifgoalk.length)))) {
         gifgoalk = [parseInt(`${info9}`)];
         break;
      }
      while ((mbjscommon7.size ^ 3) < 4) {
          let upgrade4 = true;
          let viewer6 = String.fromCharCode(100,117,114,97,116,105,111,110,115,95,49,95,51,48,0);
          let phoneM = String.fromCharCode(99,95,51,48,95,117,112,103,114,97,100,101,115,0);
         gifgoalk.push(1 * phoneM.length);
         upgrade4 = !upgrade4;
         viewer6 += `${((upgrade4 ? 5 : 1))}`;
         phoneM = `${(viewer6.length ^ (upgrade4 ? 5 : 2))}`;
         break;
      }
          let refreshborderlessZ = String.fromCharCode(121,95,57,54,95,108,101,97,121,0);
          let pause4 = 0.0;
         mbjscommon7[modityl] = 3 & parseInt(`${pause4}`);
         refreshborderlessZ += `${refreshborderlessZ.length / (Math.max(refreshborderlessZ.length, 2))}`;
         pause4 *= parseFloat(`${refreshborderlessZ.length + refreshborderlessZ.length}`);
         mbjscommon7 = new Map([[`${mbjscommon7.size}`, mbjscommon7.size % (Math.max(gifgoalk.length, 8))]]);
      do {
          let defaultplayerimgr = [682, 369, 15];
          let middlesound3 = 3.0;
          let sigmob4 = false;
          let incidentJ = 1.0;
          let complete9 = 4.0;
         mbjscommon7 = new Map([[modityl, parseInt(`${info9}`) ^ modityl.length]]);
         defaultplayerimgr.push(parseInt(`${incidentJ}`) >> (Math.min(4, Math.abs(3))));
         middlesound3 -= defaultplayerimgr.length;
         sigmob4 = middlesound3 > 66.88;
         incidentJ /= Math.max(parseFloat(`${parseInt(`${complete9}`)}`), 3);
         if (199296 == mbjscommon7.size) {
            break;
         }
      } while ((Array.from(mbjscommon7.values()).includes(info9)) && (199296 == mbjscommon7.size));
      notificationfilledA += `${parseInt(`${info9}`) ^ 2}`;
      break;
   }
   do {
       let projectc = String.fromCharCode(105,100,102,118,95,48,95,53,51,0);
       let hejir = 0;
      while (2 <= (projectc.length / (Math.max(5, 2)))) {
         hejir += projectc.length >> (Math.min(3, Math.abs(hejir)));
         break;
      }
         projectc += `${2 ^ projectc.length}`;
         hejir *= 2 >> (Math.min(3, projectc.length));
         projectc = `${projectc.length}`;
         hejir %= Math.max(1, hejir ^ projectc.length);
       let networkA = String.fromCharCode(122,95,56,56,95,115,116,114,116,111,100,0);
       let codegeny = String.fromCharCode(121,95,49,57,95,108,105,110,101,115,0);
      xadsdkp = [pingb];
      if (xadsdkp.length == 2513941) {
         break;
      }
   } while ((footballfieldl[`${xadsdkp.length}`] != null) && (xadsdkp.length == 2513941));
   if ((3 | webviews.size) <= 4 || (xadsdkp.length | 3) <= 4) {
       let stations7 = 1.0;
       let libmapbufferjni4 = String.fromCharCode(122,105,112,112,101,100,95,101,95,56,53,0);
       let rocketj = String.fromCharCode(121,95,56,52,95,103,101,110,102,105,108,101,115,0);
       let matchinactive3 = String.fromCharCode(121,95,55,57,95,111,100,100,0);
      for (let c = 0; c < 1; c++) {
         stations7 /= Math.max(1, parseInt(`${stations7}`) % (Math.max(matchinactive3.length, 6)));
      }
         rocketj += `${(String.fromCharCode(84,0) == libmapbufferjni4 ? libmapbufferjni4.length : parseInt(`${stations7}`))}`;
       let settingU = 3.0;
      if (matchinactive3 == libmapbufferjni4) {
          let leagueS = false;
          let nalyticsx = String.fromCharCode(118,95,49,54,95,121,117,118,114,103,98,97,0);
          let reviewP = false;
         libmapbufferjni4 = `${((reviewP ? 4 : 1) + 1)}`;
         leagueS = ((nalyticsx.length + (!leagueS ? nalyticsx.length : 82)) < 82);
         reviewP = leagueS;
      }
      do {
          let bottom8 = String.fromCharCode(116,97,103,97,118,114,95,52,95,57,0);
          let desc1 = String.fromCharCode(97,95,49,48,48,95,114,101,97,99,104,97,98,108,101,0);
          let mountingU = true;
         libmapbufferjni4 = `${1 >> (Math.min(3, libmapbufferjni4.length))}`;
         bottom8 += `${bottom8.length}`;
         desc1 += `${desc1.length >> (Math.min(bottom8.length, 5))}`;
         mountingU = desc1.length <= bottom8.length;
         if (libmapbufferjni4.length == 1604052) {
            break;
         }
      } while ((libmapbufferjni4.length == 1604052) && (stations7 <= 5.79));
      do {
         libmapbufferjni4 += `${libmapbufferjni4.length >> (Math.min(1, Math.abs(parseInt(`${stations7}`))))}`;
         if (libmapbufferjni4.length == 115557) {
            break;
         }
      } while (((libmapbufferjni4.length * parseInt(`${stations7}`)) > 4 && (libmapbufferjni4.length - 4) > 4) && (libmapbufferjni4.length == 115557));
         libmapbufferjni4 = `${rocketj.length << (Math.min(3, Math.abs(parseInt(`${settingU}`))))}`;
         libmapbufferjni4 += `${rocketj.length}`;
       let bellremindero = false;
       let arrowupV = true;
         bellremindero = String.fromCharCode(86,0) == matchinactive3;
         bellremindero = !bellremindero;
      do {
         bellremindero = String.fromCharCode(50,0) == matchinactive3;
         if (bellremindero ? !bellremindero : bellremindero) {
            break;
         }
      } while ((bellremindero ? !bellremindero : bellremindero) && (arrowupV));
      xadsdkp = [3 << (Math.min(Math.abs(parseInt(`${classesQ}`)), 5))];
   }
   if ((3 + xadsdkp.length) < 5) {
       let giftd = String.fromCharCode(115,98,103,112,95,50,95,50,52,0);
      while (!giftd.includes(`${giftd.length}`)) {
         giftd = `${giftd.length + giftd.length}`;
         break;
      }
         giftd += `${(giftd == String.fromCharCode(83,0) ? giftd.length : giftd.length)}`;
       let libhermesP = String.fromCharCode(109,95,54,48,95,111,118,101,114,117,115,101,0);
      libswresampleN *= 2 | nbatrophyo.length;
   }
      notificationfilledA += `${hometeamfield6.size | libswresampleN}`;
       let borderlessa = 5.0;
       let configure_ = 3.0;
      while (5.57 > configure_) {
         configure_ /= Math.max(parseFloat(`${parseInt(`${configure_}`) - 2}`), 2);
         break;
      }
         configure_ *= parseFloat(`${parseInt(`${borderlessa}`) ^ 3}`);
       let qnewinterstitial3 = 5.0;
       let streaming6 = 3.0;
      if ((qnewinterstitial3 - borderlessa) >= 1.94) {
          let homeQ = 1.0;
          let iconclosewhitewithbgB = 4.0;
          let clockr = 2.0;
          let graphP = 0.0;
         qnewinterstitial3 *= parseFloat(`${parseInt(`${clockr}`) | parseInt(`${iconclosewhitewithbgB}`)}`);
         homeQ += parseInt(`${graphP}`);
         iconclosewhitewithbgB += parseInt(`${homeQ}`) & 1;
         clockr *= parseInt(`${graphP}`) % 3;
      }
      while (configure_ <= qnewinterstitial3) {
         configure_ /= Math.max(parseFloat(`${2 - parseInt(`${streaming6}`)}`), 2);
         break;
      }
      while ((borderlessa - 4.50) <= 2.18) {
          let watchnowbgw = String.fromCharCode(105,110,115,116,95,106,95,51,0);
          let mbbannerB = new Map([[String.fromCharCode(116,95,54,95,100,112,110,97,109,101,0),false ], [String.fromCharCode(102,95,51,50,95,100,99,113,117,97,110,116,0),true ]]);
         borderlessa /= Math.max(1, 1 - mbbannerB.size);
         watchnowbgw = `${watchnowbgw.length}`;
         mbbannerB[watchnowbgw] = watchnowbgw.length * 1;
         break;
      }
      orangeclockG = libswresampleN <= 99;
   while (footballfieldl.size > 5 || 3 > (footballfieldl.size - 5)) {
       let basketballdetailsbgM = 0.0;
       let iconarrowrightblackZ = String.fromCharCode(119,101,98,99,97,109,95,121,95,51,52,0);
       let libcxxcomponentsr = String.fromCharCode(118,95,51,57,95,102,105,111,0);
         libcxxcomponentsr += `${(iconarrowrightblackZ == String.fromCharCode(105,0) ? iconarrowrightblackZ.length : parseInt(`${basketballdetailsbgM}`))}`;
         iconarrowrightblackZ = `${1 * libcxxcomponentsr.length}`;
         iconarrowrightblackZ += `${iconarrowrightblackZ.length}`;
         libcxxcomponentsr = "1";
          let default_wv = String.fromCharCode(108,95,53,56,95,115,116,114,105,99,116,0);
          let cornerkicka = 5.0;
         iconarrowrightblackZ = `${parseInt(`${cornerkicka}`)}`;
         default_wv = `${default_wv.length}`;
         cornerkicka -= parseFloat(`${1}`);
      for (let b = 0; b < 1; b++) {
         basketballdetailsbgM += parseFloat(`${parseInt(`${basketballdetailsbgM}`)}`);
      }
      do {
          let layoute = String.fromCharCode(116,95,51,50,95,100,99,109,112,0);
          let form4 = String.fromCharCode(98,95,53,95,107,112,115,0);
          let viewerU = String.fromCharCode(120,95,55,57,95,112,114,111,116,101,99,116,105,111,110,0);
          let iconbellF = new Map([[String.fromCharCode(109,101,97,115,117,114,101,109,101,110,116,95,114,95,53,57,0),false ], [String.fromCharCode(98,105,110,116,101,120,116,95,100,95,51,0),false ], [String.fromCharCode(102,95,52,56,95,111,102,102,108,105,110,101,0),true ]]);
         libcxxcomponentsr = `${libcxxcomponentsr.length}`;
         layoute = `${iconbellF.size & form4.length}`;
         form4 = `${form4.length | 3}`;
         viewerU = `${form4.length}`;
         iconbellF[`${viewerU}`] = iconbellF.size << (Math.min(viewerU.length, 2));
         if (libcxxcomponentsr == String.fromCharCode(115,100,111,53,57,0)) {
            break;
         }
      } while ((libcxxcomponentsr == String.fromCharCode(115,100,111,53,57,0)) && (!iconarrowrightblackZ.includes(libcxxcomponentsr)));
          let manifest2 = false;
          let searchbarQ = new Map([[String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,95,115,95,57,54,0),753], [String.fromCharCode(111,95,53,52,95,101,120,101,99,117,116,111,114,0),417]]);
          let reactnativejsW = new Map([[String.fromCharCode(112,95,51,50,95,116,105,114,101,100,0),302], [String.fromCharCode(101,110,99,108,111,115,105,110,103,95,108,95,50,49,0),193], [String.fromCharCode(113,95,49,49,95,101,115,99,97,112,101,100,0),449]]);
         basketballdetailsbgM += parseFloat(`${2 & reactnativejsW.size}`);
         manifest2 = (16 <= (searchbarQ.size - (!manifest2 ? 16 : searchbarQ.size)));
         reactnativejsW[`${manifest2}`] = ((manifest2 ? 3 : 2) | 3);
      if (2.58 < basketballdetailsbgM) {
          let vipsporta = 3.0;
          let logoute = 4;
         libcxxcomponentsr = `${parseInt(`${basketballdetailsbgM}`) % 1}`;
         vipsporta *= parseFloat(`${parseInt(`${vipsporta}`) - 2}`);
         logoute >>= Math.min(1, Math.abs(parseInt(`${vipsporta}`) >> (Math.min(5, Math.abs(logoute)))));
      }
      footballfieldl[`${orangeclockG}`] = 2 + xadsdkp.length;
      break;
   }
      notificationfillemptyN.push(uimanager_.length);
      uimanager_ = `${parseInt(`${greenarrowupJ}`) % 2}`;
   do {
       let yellowtoredN = [768, 537, 184];
         yellowtoredN.push(yellowtoredN.length);
         yellowtoredN = [3];
      do {
         yellowtoredN = [2];
         if (2387149 == yellowtoredN.length) {
            break;
         }
      } while ((2387149 == yellowtoredN.length) && (yellowtoredN.length < yellowtoredN.length));
      xadsdkp.push(3);
      if (xadsdkp.length == 746965) {
         break;
      }
   } while ((xadsdkp.length == 746965) && (2 >= (xadsdkp.length - 1) || !smallsoundp));
      smallsoundp = configureR > 73.61;
   while (!Array.from(footballfieldl.values()).includes(webviews.size)) {
       let libsgcoreK = 0.0;
       let kickR = true;
       let greenarrowupe = String.fromCharCode(115,99,97,109,95,56,95,57,48,0);
       let penaltyshootnogoalz = String.fromCharCode(108,97,116,105,110,95,99,95,50,54,0);
         greenarrowupe += `${3 / (Math.max(4, penaltyshootnogoalz.length))}`;
          let holdery = String.fromCharCode(100,95,50,51,95,110,115,116,97,110,116,0);
          let whitetickh = String.fromCharCode(98,95,48,0);
          let relatedv = [663, 445, 839];
         libsgcoreK -= parseFloat(`${greenarrowupe.length}`);
         holdery += `${holdery.length}`;
         whitetickh += `${whitetickh.length * 3}`;
         relatedv.push(whitetickh.length);
       let pingd = [781, 165];
       let specP = [984, 823, 513];
         greenarrowupe = `${pingd.length ^ specP.length}`;
      do {
         libsgcoreK += parseFloat(`${parseInt(`${libsgcoreK}`)}`);
         if (libsgcoreK == 3888985.0) {
            break;
         }
      } while ((parseFloat(`${greenarrowupe.length}`) < libsgcoreK) && (libsgcoreK == 3888985.0));
         penaltyshootnogoalz += `${parseInt(`${libsgcoreK}`)}`;
         pingd.push(((kickR ? 1 : 4)));
         specP.push(3);
      if (2 > penaltyshootnogoalz.length) {
         pingd = [specP.length / (Math.max(2, greenarrowupe.length))];
      }
         specP.push(specP.length << (Math.min(3, Math.abs(parseInt(`${libsgcoreK}`)))));
          let backiconmaskc = String.fromCharCode(100,95,54,95,98,115,111,108,117,116,101,0);
          let mimoj = false;
         kickR = penaltyshootnogoalz.length > greenarrowupe.length;
         backiconmaskc = `${(backiconmaskc.length - (mimoj ? 5 : 1))}`;
         mimoj = !mimoj;
         kickR = penaltyshootnogoalz.length >= pingd.length;
      footballfieldl = new Map([[`${footballfieldl.size}`, notificationfilledA.length]]);
      break;
   }
   while (5 > (2 / (Math.max(4, pingb))) || (pingb / (Math.max(xadsdkp.length, 8))) > 2) {
      xadsdkp.push(parseInt(`${greenarrowupJ}`));
      break;
   }
   while (!orangeclockG) {
      orangeclockG = 37.13 < classesQ || 80 < xadsdkp.length;
      break;
   }
      nbatrophyo += `${(String.fromCharCode(76,0) == nbatrophyo ? nbatrophyo.length : parseInt(`${greenarrowupJ}`))}`;
   do {
      classesQ += parseFloat(`${webviews.size}`);
      if (2271855.0 == classesQ) {
         break;
      }
   } while ((!Array.from(hometeamfield6.keys()).includes(`${classesQ}`)) && (2271855.0 == classesQ));
      notificationfilledA = `${1 << (Math.min(4, Math.abs(hometeamfield6.size)))}`;
      notificationfilledA = `${parseInt(`${greenarrowupJ}`) ^ 2}`;
   do {
      notificationfillemptyN.push(1);
      if (notificationfillemptyN.length == 3376736) {
         break;
      }
   } while ((notificationfilledA.includes(`${notificationfillemptyN.length}`)) && (notificationfillemptyN.length == 3376736));
   while (2.17 >= (pingb - greenarrowupJ)) {
      pingb <<= Math.min(3, Math.abs(parseInt(`${configureR}`) << (Math.min(4, Math.abs(1)))));
      break;
   }
      nbatrophyo = `${2 * footballfieldl.size}`;
   do {
       let nodee = [String.fromCharCode(103,95,55,57,95,99,111,108,111,114,115,0), String.fromCharCode(114,95,53,52,95,97,119,97,107,101,0), String.fromCharCode(109,99,111,109,112,97,110,100,95,55,95,55,57,0)];
       let rewardvideo8 = [947, 699];
       let mbbannerI = 5;
         mbbannerI <<= Math.min(1, Math.abs(1));
      while ((2 | mbbannerI) >= 2 || (mbbannerI | nodee.length) >= 2) {
         nodee.push(1 - nodee.length);
         break;
      }
          let refresha = String.fromCharCode(98,117,105,108,100,101,114,95,105,95,54,0);
          let attributedstringk = String.fromCharCode(121,95,54,49,95,117,110,98,105,110,100,0);
          let executorb = String.fromCharCode(105,115,99,111,118,101,114,95,49,95,49,49,0);
         rewardvideo8 = [refresha.length / 2];
         refresha += `${attributedstringk.length + executorb.length}`;
         attributedstringk = `${attributedstringk.length}`;
         executorb += `${attributedstringk.length}`;
      for (let a = 0; a < 2; a++) {
         nodee = [nodee.length];
      }
       let reactnativeratingsQ = 1.0;
      if (reactnativeratingsQ == 2.71) {
         reactnativeratingsQ += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${reactnativeratingsQ}`)), 3))}`);
      }
          let progressT = new Map([[String.fromCharCode(112,95,54,53,95,118,97,114,121,0),String.fromCharCode(100,114,97,119,108,105,110,101,95,53,95,51,50,0)], [String.fromCharCode(122,95,52,95,105,97,116,0),String.fromCharCode(110,116,115,115,95,103,95,57,48,0)]]);
          let libtan1 = String.fromCharCode(101,118,111,108,118,101,95,117,95,51,50,0);
         nodee = [3 / (Math.max(10, nodee.length))];
         progressT = new Map([[`${progressT.size}`, progressT.size ^ 3]]);
         libtan1 = `${progressT.size / 2}`;
      if (3.99 == (reactnativeratingsQ + parseFloat(`${mbbannerI}`)) && 2 == (mbbannerI ^ 3)) {
         mbbannerI <<= Math.min(Math.abs(3), 1);
      }
          let catagoryx = 2.0;
         reactnativeratingsQ -= parseFloat(`${nodee.length}`);
         catagoryx /= Math.max(3, parseInt(`${catagoryx}`));
      classesQ /= Math.max(parseFloat(`${webviews.size}`), 4);
      if (classesQ == 3290320.0) {
         break;
      }
   } while ((classesQ == 3290320.0) && (parseFloat(`${uimanager_.length}`) <= classesQ));
      smallsoundp = 86 == dangerT;
   while ((classesQ / 1.28) > 3.51 || (1.28 * configureR) > 5.25) {
      configureR -= webviews.size ^ hometeamfield6.size;
      break;
   }
   for (let d = 0; d < 2; d++) {
       let logouserQ = [714, 807];
       let statisticsC = String.fromCharCode(104,95,56,53,95,99,111,100,101,99,114,97,119,0);
       let webview2 = String.fromCharCode(109,95,52,51,95,108,105,116,101,114,97,108,0);
       let uploadh = 0.0;
       let foundU = 4;
          let iconadslinkL = 0.0;
         uploadh /= Math.max(4, statisticsC.length);
         iconadslinkL *= 2;
      while (1 > (logouserQ.length * foundU)) {
          let fastf = 3;
          let homeloading5 = String.fromCharCode(111,95,55,54,95,116,101,109,112,115,0);
          let ewardedM = 1.0;
          let long_r9s = String.fromCharCode(110,95,56,55,95,115,117,98,116,121,112,101,0);
          let imagenomoredataX = String.fromCharCode(114,97,112,112,101,114,95,54,95,51,55,0);
         logouserQ = [imagenomoredataX.length * parseInt(`${ewardedM}`)];
         fastf <<= Math.min(Math.abs((homeloading5 == String.fromCharCode(77,0) ? fastf : homeloading5.length)), 2);
         ewardedM += fastf / (Math.max(long_r9s.length, 1));
         long_r9s = `${long_r9s.length}`;
         imagenomoredataX = "3";
         break;
      }
         logouserQ = [parseInt(`${uploadh}`) | 2];
         webview2 = `${logouserQ.length ^ statisticsC.length}`;
          let rankU = String.fromCharCode(110,95,51,57,95,121,97,108,101,0);
          let dependency8 = [140, 704, 678];
         statisticsC += "2";
         rankU = `${rankU.length + 1}`;
         dependency8.push(rankU.length);
      for (let g = 0; g < 3; g++) {
         logouserQ = [2];
      }
          let huaweiG = 3.0;
         statisticsC += `${webview2.length - statisticsC.length}`;
         huaweiG *= parseFloat(`${parseInt(`${huaweiG}`)}`);
      while (!webview2.endsWith(`${foundU}`)) {
          let iconrefresh2 = String.fromCharCode(102,95,57,55,95,112,111,115,116,112,111,110,101,0);
          let renew0 = 3;
          let plashR = true;
          let stringsn = String.fromCharCode(115,97,108,116,115,95,114,95,51,54,0);
          let suboutJ = 4.0;
         foundU -= statisticsC.length | 2;
         iconrefresh2 = `${iconrefresh2.length + 1}`;
         renew0 *= 1 & iconrefresh2.length;
         stringsn = "1";
         suboutJ *= iconrefresh2.length;
         break;
      }
      do {
         logouserQ.push(3 & logouserQ.length);
         if (logouserQ.length == 645111) {
            break;
         }
      } while (((logouserQ.length | 3) <= 1) && (logouserQ.length == 645111));
         foundU -= foundU >> (Math.min(5, Math.abs(3)));
      while ((webview2.length % 4) == 2) {
         webview2 += `${webview2.length}`;
         break;
      }
      while ((foundU - parseInt(`${uploadh}`)) >= 3 && (5.22 - uploadh) >= 5.41) {
         foundU *= 2;
         break;
      }
      do {
         statisticsC += `${(statisticsC == String.fromCharCode(57,0) ? statisticsC.length : logouserQ.length)}`;
         if (String.fromCharCode(118,97,50,109,0) == statisticsC) {
            break;
         }
      } while ((String.fromCharCode(118,97,50,109,0) == statisticsC) && ((statisticsC.length + 5) <= 2));
       let turnU = 4.0;
          let modulesg = String.fromCharCode(122,95,55,55,95,117,110,114,101,108,105,97,98,108,101,0);
          let iconnointernetP = false;
         turnU += (statisticsC == String.fromCharCode(110,0) ? statisticsC.length : logouserQ.length);
         modulesg = `${(String.fromCharCode(122,0) == modulesg ? (iconnointernetP ? 5 : 5) : modulesg.length)}`;
         iconnointernetP = modulesg.length >= 82;
      smallsoundp = uimanager_.length == pingb;
   }
   while (smallsoundp) {
      smallsoundp = uimanager_.length == hometeamfield6.size;
      break;
   }
   if ((hometeamfield6.size ^ 3) < 1 && orangeclockG) {
      hometeamfield6[`${greenarrowupJ}`] = parseInt(`${greenarrowupJ}`) - 1;
   }
       let uploadO = String.fromCharCode(116,95,54,50,95,115,99,114,117,98,98,105,110,103,0);
       let bangL = true;
      while (uploadO.length > 2) {
          let iconarrowrightq = 2.0;
          let basketballplayerplaceholdere = [901, 903];
          let libfbL = 0.0;
          let internetw = 0.0;
         uploadO += `${basketballplayerplaceholdere.length / 1}`;
         iconarrowrightq /= Math.max(1, 3);
         basketballplayerplaceholdere.push(parseInt(`${libfbL}`));
         internetw *= parseInt(`${iconarrowrightq}`);
         break;
      }
       let iconnewsshareS = 1.0;
       let scrollviewg = 5.0;
          let basketballmatchdetailbg_ = String.fromCharCode(108,111,103,100,98,95,122,95,53,51,0);
         scrollviewg += parseInt(`${scrollviewg}`) - uploadO.length;
         basketballmatchdetailbg_ += "1";
      while (iconnewsshareS > 2.77) {
          let playlist0 = String.fromCharCode(115,95,54,54,95,114,101,102,100,117,112,101,0);
          let downloadedO = String.fromCharCode(115,104,97,100,101,114,115,95,122,95,49,52,0);
          let shrinkl = String.fromCharCode(112,95,54,51,95,97,100,100,105,110,103,0);
         iconnewsshareS += parseInt(`${scrollviewg}`);
         playlist0 = `${playlist0.length}`;
         downloadedO = `${3 << (Math.min(5, downloadedO.length))}`;
         shrinkl += `${shrinkl.length}`;
         break;
      }
      while (1.90 <= (scrollviewg / (Math.max(4.88, 2)))) {
         scrollviewg += parseInt(`${iconnewsshareS}`) ^ 3;
         break;
      }
         scrollviewg -= ((bangL ? 3 : 1) & parseInt(`${iconnewsshareS}`));
      classesQ *= parseFloat(`${3}`);
   if (3 > (libswresampleN >> (Math.min(Math.abs(5), 5)))) {
       let wifirouterl = 2.0;
       let libimagepipelineF = String.fromCharCode(113,95,54,56,95,118,105,122,105,101,114,0);
       let eactX = new Map([[String.fromCharCode(108,95,54,50,95,105,110,100,101,111,100,97,116,97,0),647], [String.fromCharCode(107,95,57,51,95,116,105,103,103,108,101,0),205], [String.fromCharCode(119,95,54,54,95,107,101,121,110,97,109,101,0),87]]);
         libimagepipelineF = `${libimagepipelineF.length}`;
      for (let l = 0; l < 2; l++) {
         wifirouterl += 3 & parseInt(`${wifirouterl}`);
      }
          let iconnewchat3 = new Map([[String.fromCharCode(116,95,51,95,98,111,111,115,116,101,100,0),202], [String.fromCharCode(98,111,117,110,99,105,110,103,95,97,95,49,57,0),524], [String.fromCharCode(114,97,105,110,95,52,95,53,53,0),252]]);
         libimagepipelineF += "1";
         iconnewchat3 = new Map([[`${iconnewchat3.size}`, iconnewchat3.size]]);
          let largee = 2.0;
          let libavcodecV = false;
          let statsnomoredataN = String.fromCharCode(116,105,112,95,99,95,52,49,0);
         wifirouterl += 2 ^ eactX.size;
         largee += (2 % (Math.max(10, (libavcodecV ? 2 : 1))));
         libavcodecV = statsnomoredataN.length == 40;
         statsnomoredataN = `${((libavcodecV ? 1 : 1) | parseInt(`${largee}`))}`;
      while (eactX[`${wifirouterl}`] != null) {
         eactX[`${wifirouterl}`] = eactX.size >> (Math.min(Math.abs(1), 5));
         break;
      }
          let backiconmask0 = String.fromCharCode(114,95,54,53,95,109,111,100,105,102,105,101,100,0);
          let typesW = String.fromCharCode(100,97,116,97,100,105,114,95,109,95,55,53,0);
          let n_title7 = String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,95,98,95,51,53,0);
         libimagepipelineF = `${n_title7.length << (Math.min(Math.abs(3), 4))}`;
         backiconmask0 = `${backiconmask0.length ^ typesW.length}`;
         typesW = `${backiconmask0.length}`;
         n_title7 += `${backiconmask0.length}`;
      do {
         libimagepipelineF += `${parseInt(`${wifirouterl}`) + 2}`;
         if (libimagepipelineF.length == 1822429) {
            break;
         }
      } while (((1 >> (Math.min(2, Math.abs(eactX.size)))) >= 5) && (libimagepipelineF.length == 1822429));
      do {
          let greyarrowupw = false;
          let y_unlockG = 3.0;
         libimagepipelineF = `${parseInt(`${y_unlockG}`) / (Math.max(eactX.size, 9))}`;
         greyarrowupw = (greyarrowupw ? greyarrowupw : !greyarrowupw);
         y_unlockG += (parseFloat(`${1 ^ (greyarrowupw ? 5 : 4)}`));
         if (2686374 == libimagepipelineF.length) {
            break;
         }
      } while ((eactX.size < libimagepipelineF.length) && (2686374 == libimagepipelineF.length));
         libimagepipelineF += `${libimagepipelineF.length | eactX.size}`;
      notificationfillemptyN = [hometeamfield6.size];
   }
   for (let p = 0; p < 3; p++) {
      smallsoundp = String.fromCharCode(70,0) == uimanager_;
   }
       let eighteenU = String.fromCharCode(119,95,55,52,95,105,110,115,116,114,117,99,116,105,111,110,115,0);
       let plusc = String.fromCharCode(115,95,52,55,95,100,101,103,114,97,100,97,116,105,111,110,0);
       let release_0nw = 1;
      if (4 > plusc.length) {
         plusc += `${plusc.length | 1}`;
      }
          let iconarrowleft0 = 3;
          let crownf = String.fromCharCode(122,95,51,53,95,117,110,109,111,118,101,100,0);
          let libtanz = false;
         release_0nw ^= plusc.length;
         iconarrowleft0 += 2 | iconarrowleft0;
         crownf = `${iconarrowleft0}`;
         libtanz = iconarrowleft0 < 35;
         eighteenU = `${plusc.length >> (Math.min(2, Math.abs(release_0nw)))}`;
      if (!plusc.includes(eighteenU)) {
         eighteenU = `${release_0nw & 2}`;
      }
       let leftH = 3;
         leftH += 2 >> (Math.min(4, eighteenU.length));
      for (let g = 0; g < 1; g++) {
         release_0nw ^= 3 & plusc.length;
      }
      if ((2 & release_0nw) <= 5 && 2 <= (2 & release_0nw)) {
          let iconcalendarZ = 5.0;
         release_0nw <<= Math.min(Math.abs((plusc == String.fromCharCode(104,0) ? plusc.length : leftH)), 5);
         iconcalendarZ /= Math.max(1, parseFloat(`${parseInt(`${iconcalendarZ}`)}`));
      }
         eighteenU = "3";
      xadsdkp = [hometeamfield6.size % 1];
   for (let w = 0; w < 3; w++) {
       let predictiondefaultX = true;
       let darkV = new Map([[String.fromCharCode(105,110,118,105,116,101,114,95,112,95,50,56,0),String.fromCharCode(104,95,55,55,95,99,111,108,114,0)], [String.fromCharCode(102,95,57,48,95,107,101,121,115,112,101,99,0),String.fromCharCode(111,114,105,103,105,110,115,95,119,95,53,55,0)], [String.fromCharCode(116,95,56,48,95,115,101,101,107,105,110,103,0),String.fromCharCode(101,95,54,57,95,98,97,99,107,101,100,0)]]);
       let ewarded1 = 5.0;
          let loadingspinnerz = new Map([[String.fromCharCode(105,95,49,95,115,117,98,102,105,101,108,100,115,0),String.fromCharCode(107,95,52,55,95,114,110,110,111,105,115,101,0)], [String.fromCharCode(111,99,117,109,101,110,116,95,116,95,52,48,0),String.fromCharCode(119,95,56,48,95,116,114,117,101,0)], [String.fromCharCode(111,95,50,56,95,115,117,110,115,101,116,0),String.fromCharCode(99,97,114,114,105,97,103,101,95,103,95,56,53,0)]]);
          let fcdaebecbcbafcdfceaaeccfeacdbI = 0;
         ewarded1 -= parseFloat(`${darkV.size - 3}`);
         loadingspinnerz = new Map([[`${loadingspinnerz.size}`, fcdaebecbcbafcdfceaaeccfeacdbI]]);
         fcdaebecbcbafcdfceaaeccfeacdbI >>= Math.min(Math.abs(fcdaebecbcbafcdfceaaeccfeacdbI), 3);
      if (!predictiondefaultX) {
         ewarded1 -= parseFloat(`${parseInt(`${ewarded1}`)}`);
      }
          let iconeyet = new Map([[String.fromCharCode(115,112,111,105,108,101,114,115,95,55,95,54,52,0),false ], [String.fromCharCode(115,105,109,112,108,101,119,114,105,116,101,95,54,95,51,56,0),false ]]);
          let giftbuttonO = String.fromCharCode(97,99,99,117,109,117,108,97,116,111,114,95,100,95,56,50,0);
          let libreactp = String.fromCharCode(109,117,108,116,105,116,97,98,108,101,95,55,95,52,56,0);
         ewarded1 += parseFloat(`${3 & parseInt(`${ewarded1}`)}`);
         iconeyet[giftbuttonO] = libreactp.length >> (Math.min(Math.abs(2), 2));
         giftbuttonO = `${iconeyet.size | libreactp.length}`;
         darkV[`${predictiondefaultX}`] = (darkV.size * (predictiondefaultX ? 1 : 1));
      if (predictiondefaultX) {
         predictiondefaultX = !predictiondefaultX || darkV.size > 97;
      }
      if ((ewarded1 - parseFloat(`${darkV.size}`)) >= 3.18 || (3.18 - ewarded1) >= 1.15) {
          let streamingP = String.fromCharCode(105,110,99,114,101,109,101,110,116,97,108,95,107,95,57,51,0);
          let incidenti = false;
          let distl = 5.0;
          let awayteamfieldt = [513, 784];
         darkV[`${ewarded1}`] = parseInt(`${ewarded1}`) % 2;
         streamingP += `${((incidenti ? 3 : 1) & parseInt(`${distl}`))}`;
         incidenti = distl <= parseFloat(`${awayteamfieldt.length}`);
         awayteamfieldt.push((parseInt(`${distl}`) + (incidenti ? 5 : 1)));
      }
          let iconbackwhiteX = String.fromCharCode(101,95,56,53,95,110,101,97,114,115,101,116,0);
          let defaultbasketballbgR = new Map([[String.fromCharCode(101,100,105,116,105,110,103,95,121,95,49,0),345], [String.fromCharCode(100,95,53,52,95,99,97,108,99,0),393]]);
         ewarded1 *= parseFloat(`${parseInt(`${ewarded1}`)}`);
         iconbackwhiteX += `${iconbackwhiteX.length / (Math.max(10, defaultbasketballbgR.size))}`;
         defaultbasketballbgR[iconbackwhiteX] = (String.fromCharCode(83,0) == iconbackwhiteX ? defaultbasketballbgR.size : iconbackwhiteX.length);
         predictiondefaultX = darkV.size <= 5;
         ewarded1 *= (parseFloat(`${(predictiondefaultX ? 5 : 2) % (Math.max(parseInt(`${ewarded1}`), 9))}`));
      hometeamfield6[nbatrophyo] = ((orangeclockG ? 3 : 3) - nbatrophyo.length);
   }
}

  /**
   * Set the error state to true which then
   * changes our renderError function
   *
   * @param {object} err  Err obj returned from <Video> component
   */
  _onError(err) {
       let u_position3 = String.fromCharCode(100,95,57,49,95,99,111,109,109,117,116,101,0);
    let renderH = new Map([[String.fromCharCode(104,95,50,54,95,101,120,104,97,117,115,116,105,118,101,0),897], [String.fromCharCode(107,95,51,95,100,105,115,99,111,118,101,114,101,100,0),552], [String.fromCharCode(105,110,111,100,101,115,95,54,95,53,52,0),74]]);
    let iconcalendarP = 4;
    let fullscreenminL = String.fromCharCode(111,95,57,48,95,115,101,99,116,111,114,0);
    let vietnamH = 3.0;
    let awayiconJ = [747, 17];
    let logout7 = new Map([[String.fromCharCode(102,101,116,99,104,95,110,95,56,52,0),421], [String.fromCharCode(114,95,51,49,95,120,114,117,110,0),444]]);
    let stats8 = 0.0;
    let typingloadinga = [620, 565];
    let submitD = String.fromCharCode(98,95,57,49,95,99,97,108,99,119,0);
   while ((3.62 - vietnamH) >= 5.11) {
      fullscreenminL += `${iconcalendarP}`;
      break;
   }
   for (let h = 0; h < 2; h++) {
       let shrink4 = 0.0;
       let scorepopsoundF = 0.0;
       let resultz = String.fromCharCode(116,95,49,51,95,100,111,119,110,115,97,109,112,108,101,0);
      if (scorepopsoundF > 5.27) {
          let mcopy_54e = 1;
          let footballtrophyS = new Map([[String.fromCharCode(113,95,57,55,95,99,111,109,109,105,116,0),164], [String.fromCharCode(117,95,52,49,95,116,119,105,116,99,104,0),804]]);
          let eyeopenL = new Map([[String.fromCharCode(105,95,50,52,95,110,105,115,116,112,0),500], [String.fromCharCode(109,100,99,118,95,56,95,50,49,0),489]]);
          let nativemoduleW = 2.0;
         scorepopsoundF += parseFloat(`${1}`);
         mcopy_54e &= 1 & eyeopenL.size;
         footballtrophyS = new Map([[`${eyeopenL.size}`, eyeopenL.size]]);
         nativemoduleW *= 2;
      }
      do {
         resultz = `${(resultz == String.fromCharCode(84,0) ? resultz.length : parseInt(`${shrink4}`))}`;
         if (4603243 == resultz.length) {
            break;
         }
      } while ((4603243 == resultz.length) && (4 < (resultz.length / (Math.max(4, 9))) || (resultz.length + shrink4) < 3.42));
       let main_bj = String.fromCharCode(119,95,55,48,95,101,114,114,111,114,115,0);
      if (main_bj == resultz) {
         resultz += "1";
      }
      while ((shrink4 / 4.95) >= 1.76 && 2.86 >= (4.95 / (Math.max(10, shrink4)))) {
          let feedbackG = 0.0;
          let connectionp = 0.0;
          let shirt2 = new Map([[String.fromCharCode(103,95,55,52,95,115,104,97,114,101,100,0),764], [String.fromCharCode(118,95,51,53,95,114,101,112,108,97,99,101,115,0),8], [String.fromCharCode(105,110,116,101,103,114,97,116,101,100,95,49,95,50,51,0),446]]);
          let clearo = String.fromCharCode(115,108,111,112,101,95,98,95,55,49,0);
          let iconrefresh1 = String.fromCharCode(104,95,50,57,95,104,111,115,116,112,111,114,116,102,105,108,101,0);
         resultz += `${parseInt(`${connectionp}`)}`;
         feedbackG /= Math.max(1, 3);
         shirt2[`${feedbackG}`] = 2;
         clearo += `${parseInt(`${feedbackG}`)}`;
         iconrefresh1 = `${iconrefresh1.length << (Math.min(2, Math.abs(parseInt(`${feedbackG}`))))}`;
         break;
      }
      do {
          let mbjscommon4 = [String.fromCharCode(97,108,97,98,97,115,116,101,114,95,116,95,49,0), String.fromCharCode(114,95,54,53,95,115,105,122,105,110,103,0)];
          let telegramP = String.fromCharCode(110,105,98,98,108,101,95,121,95,49,49,0);
          let readv = String.fromCharCode(113,117,97,108,105,102,121,95,104,95,52,50,0);
         shrink4 += parseInt(`${shrink4}`) / 3;
         mbjscommon4.push(3);
         telegramP += `${(readv == String.fromCharCode(107,0) ? mbjscommon4.length : readv.length)}`;
         if (shrink4 == 4519808.0) {
            break;
         }
      } while ((shrink4 == 4519808.0) && (4.73 == (shrink4 / (Math.max(5.46, 8)))));
      if (!main_bj.endsWith(`${shrink4}`)) {
         shrink4 /= Math.max(1 << (Math.min(Math.abs(parseInt(`${shrink4}`)), 5)), 2);
      }
      if ((main_bj.length % (Math.max(2, 4))) > 3) {
         main_bj += `${main_bj.length}`;
      }
         scorepopsoundF += parseFloat(`${main_bj.length}`);
      awayiconJ = [(fullscreenminL == String.fromCharCode(100,0) ? fullscreenminL.length : logout7.size)];
   }
       let giflivestreamingg = [641, 564, 567];
       let plashE = [199, 454];
       let libjsinspectorV = String.fromCharCode(99,95,53,49,95,104,97,100,111,119,115,0);
         giflivestreamingg = [plashE.length];
       let nativemoduleA = 0.0;
          let iconcurrentmatchS = false;
         nativemoduleA /= Math.max(3, parseFloat(`${giflivestreamingg.length}`));
         iconcurrentmatchS = (!iconcurrentmatchS ? !iconcurrentmatchS : !iconcurrentmatchS);
          let adultJ = String.fromCharCode(99,95,49,56,95,97,108,108,112,97,115,115,0);
          let selectedG = String.fromCharCode(114,95,51,95,109,105,110,117,115,0);
          let homeactiveF = String.fromCharCode(105,95,55,57,95,100,97,116,97,108,0);
         plashE = [libjsinspectorV.length];
         adultJ += `${adultJ.length}`;
         selectedG = `${adultJ.length ^ 3}`;
         homeactiveF = `${homeactiveF.length % 1}`;
      if ((1 << (Math.min(5, plashE.length))) > 3 || (plashE.length << (Math.min(libjsinspectorV.length, 3))) > 1) {
          let spinnerC = 2.0;
          let redcirclebgL = 4;
          let rocketW = String.fromCharCode(100,101,109,111,95,97,95,51,51,0);
          let previeww = String.fromCharCode(118,111,116,101,100,95,97,95,49,49,0);
          let uimanager6 = String.fromCharCode(111,95,51,54,95,115,121,110,99,104,114,111,110,105,122,101,0);
         libjsinspectorV = `${(String.fromCharCode(105,0) == libjsinspectorV ? rocketW.length : libjsinspectorV.length)}`;
         spinnerC -= (previeww == String.fromCharCode(104,0) ? previeww.length : redcirclebgL);
         redcirclebgL ^= redcirclebgL ^ 1;
         rocketW = `${(uimanager6 == String.fromCharCode(51,0) ? uimanager6.length : previeww.length)}`;
      }
      while ((plashE.length >> (Math.min(giflivestreamingg.length, 2))) == 1) {
         plashE = [3];
         break;
      }
      if (!plashE.includes(nativemoduleA)) {
         plashE.push(giflivestreamingg.length * libjsinspectorV.length);
      }
          let sharemodal_ = String.fromCharCode(108,95,56,48,95,100,101,114,101,102,0);
          let entry0 = [String.fromCharCode(115,95,50,57,95,98,115,119,97,112,100,115,112,0), String.fromCharCode(104,111,114,105,122,111,110,116,97,108,108,121,95,56,95,54,50,0), String.fromCharCode(101,108,115,100,101,99,95,98,95,55,55,0)];
          let predictionbuttony = 4;
         libjsinspectorV = `${2 % (Math.max(predictionbuttony, 3))}`;
         sharemodal_ = "3";
         entry0 = [entry0.length];
         predictionbuttony ^= entry0.length * sharemodal_.length;
      do {
         libjsinspectorV = `${libjsinspectorV.length >> (Math.min(4, plashE.length))}`;
         if (String.fromCharCode(105,57,114,0) == libjsinspectorV) {
            break;
         }
      } while ((!libjsinspectorV.startsWith(`${nativemoduleA}`)) && (String.fromCharCode(105,57,114,0) == libjsinspectorV));
      fullscreenminL += `${giflivestreamingg.length}`;
       let brightnessp = new Map([[String.fromCharCode(121,95,55,53,95,100,105,115,112,97,116,99,104,105,110,103,0),false ], [String.fromCharCode(99,111,100,101,119,111,114,100,95,102,95,53,54,0),true ]]);
       let currentd = String.fromCharCode(114,97,109,112,95,48,95,57,52,0);
      for (let n = 0; n < 3; n++) {
         brightnessp[currentd] = currentd.length;
      }
          let strc = String.fromCharCode(116,95,55,52,95,102,108,101,120,0);
          let fullscreenmin1 = 4.0;
          let accepteda = [String.fromCharCode(116,112,101,108,100,115,112,95,52,95,49,51,0), String.fromCharCode(121,95,56,52,95,122,111,110,101,115,0)];
         brightnessp = new Map([[currentd, (String.fromCharCode(102,0) == strc ? strc.length : currentd.length)]]);
         fullscreenmin1 += parseFloat(`${accepteda.length}`);
         accepteda.push(accepteda.length << (Math.min(Math.abs(3), 1)));
         currentd = `${brightnessp.size}`;
         brightnessp[`${currentd}`] = 1;
      if (2 < brightnessp.size) {
         brightnessp[currentd] = brightnessp.size;
      }
      while (currentd.includes(`${brightnessp.size}`)) {
         currentd = `${(String.fromCharCode(95,0) == currentd ? brightnessp.size : currentd.length)}`;
         break;
      }
      u_position3 += `${(fullscreenminL == String.fromCharCode(74,0) ? parseInt(`${vietnamH}`) : fullscreenminL.length)}`;

    let state = this.state;
   if (2 > (iconcalendarP >> (Math.min(u_position3.length, 3))) || (2 >> (Math.min(2, Math.abs(iconcalendarP)))) > 3) {
      iconcalendarP &= (u_position3 == String.fromCharCode(72,0) ? u_position3.length : renderH.size);
   }
      awayiconJ.push(2 ^ renderH.size);
      u_position3 = `${awayiconJ.length}`;
   if (awayiconJ.length < fullscreenminL.length) {
       let privilegeH = String.fromCharCode(115,117,98,109,111,100,101,108,115,95,111,95,54,50,0);
       let disconnectede = 2;
          let sheetE = [String.fromCharCode(104,95,51,48,95,100,101,112,114,101,99,97,116,105,111,110,115,0), String.fromCharCode(120,95,53,56,95,112,97,97,100,0), String.fromCharCode(104,99,108,114,95,100,95,56,0)];
          let iconscheduley = String.fromCharCode(117,95,52,50,95,100,111,118,101,0);
         privilegeH += "1";
         sheetE = [1 & sheetE.length];
         iconscheduley = `${(String.fromCharCode(55,0) == iconscheduley ? iconscheduley.length : sheetE.length)}`;
         privilegeH = `${privilegeH.length % (Math.max(2, 7))}`;
          let imagemanagerQ = new Map([[String.fromCharCode(103,114,97,110,117,108,101,112,111,115,95,54,95,50,49,0),103], [String.fromCharCode(119,95,56,57,95,109,117,108,116,105,116,97,98,108,101,0),385]]);
          let crownd = false;
         privilegeH = `${disconnectede}`;
         imagemanagerQ = new Map([[`${imagemanagerQ.size}`, (imagemanagerQ.size + (crownd ? 2 : 2))]]);
         crownd = !crownd;
       let iconshareZ = String.fromCharCode(115,121,109,101,118,101,110,95,109,95,55,49,0);
       let textinputP = String.fromCharCode(102,95,54,52,95,109,105,115,115,105,110,103,0);
      if (2 == textinputP.length) {
         iconshareZ = "1";
      }
      do {
         iconshareZ = `${textinputP.length}`;
         if (iconshareZ == String.fromCharCode(112,51,118,108,109,0)) {
            break;
         }
      } while ((iconshareZ.endsWith(textinputP)) && (iconshareZ == String.fromCharCode(112,51,118,108,109,0)));
      fullscreenminL = "3";
   }

    state.error = true;
   do {
       let buttonU = false;
       let bingg = String.fromCharCode(117,95,54,53,95,112,117,108,108,0);
      while (buttonU || bingg.length >= 1) {
          let internetq = [54, 74, 853];
          let greyarrowupw = 4.0;
          let wcopy_n2x = new Map([[String.fromCharCode(114,95,57,95,117,117,105,100,117,115,109,116,0),80], [String.fromCharCode(105,110,116,112,95,53,95,55,52,0),591], [String.fromCharCode(101,95,49,55,95,116,105,110,116,0),34]]);
          let commone = String.fromCharCode(115,95,49,51,95,97,118,112,107,116,0);
          let shirt1 = 3.0;
         buttonU = bingg.includes(`${greyarrowupw}`);
         internetq.push((commone == String.fromCharCode(119,0) ? wcopy_n2x.size : commone.length));
         greyarrowupw -= parseFloat(`${1 | internetq.length}`);
         wcopy_n2x = new Map([[`${wcopy_n2x.size}`, commone.length]]);
         shirt1 -= parseFloat(`${wcopy_n2x.size}`);
         break;
      }
         buttonU = bingg.length <= 59;
         bingg += `${bingg.length - 2}`;
          let cancel0 = 4.0;
          let penaltyT = 5.0;
          let inouttargetyellowi = String.fromCharCode(108,95,50,55,95,111,112,101,110,101,100,0);
         buttonU = (((buttonU ? bingg.length : 11) << (Math.min(bingg.length, 4))) >= 11);
         cancel0 -= parseFloat(`${parseInt(`${penaltyT}`)}`);
         penaltyT -= inouttargetyellowi.length;
         inouttargetyellowi += `${parseInt(`${penaltyT}`)}`;
      do {
         buttonU = !buttonU;
         if (buttonU ? !buttonU : buttonU) {
            break;
         }
      } while ((buttonU ? !buttonU : buttonU) && (2 == bingg.length));
         buttonU = bingg.includes(`${buttonU}`);
      fullscreenminL += `${((buttonU ? 4 : 2))}`;
      if (4901664 == fullscreenminL.length) {
         break;
      }
   } while ((4 <= (iconcalendarP * fullscreenminL.length) || 1 <= (4 * fullscreenminL.length)) && (4901664 == fullscreenminL.length));
   for (let l = 0; l < 3; l++) {
      vietnamH /= Math.max(3 & awayiconJ.length, 4);
   }
      renderH[u_position3] = u_position3.length % 2;
   do {
      vietnamH -= 2 & fullscreenminL.length;
      if (vietnamH == 914123.0) {
         break;
      }
   } while ((5.44 > (3.9 * vietnamH)) && (vietnamH == 914123.0));

    state.loading = false;
      awayiconJ = [2];
   do {
      iconcalendarP <<= Math.min(fullscreenminL.length, 4);
      if (iconcalendarP == 1051622) {
         break;
      }
   } while ((!awayiconJ.includes(iconcalendarP)) && (iconcalendarP == 1051622));
   while (!awayiconJ.includes(stats8)) {
      awayiconJ.push(logout7.size);
      break;
   }
      vietnamH /= Math.max(2, 1);


    this.setState(state);
   do {
      iconcalendarP &= awayiconJ.length & parseInt(`${stats8}`);
      if (iconcalendarP == 1080372) {
         break;
      }
   } while ((!Array.from(renderH.keys()).includes(`${iconcalendarP}`)) && (iconcalendarP == 1080372));
      u_position3 = `${parseInt(`${stats8}`) % (Math.max(parseInt(`${vietnamH}`), 2))}`;
       let iconbello = String.fromCharCode(102,95,56,57,95,100,117,109,112,101,114,0);
       let logoutS = String.fromCharCode(113,95,54,49,95,103,97,116,105,110,103,0);
      do {
          let twitterk = String.fromCharCode(103,114,97,110,117,108,97,114,105,116,121,95,101,95,55,53,0);
          let sharedF = new Map([[String.fromCharCode(102,114,97,109,101,100,95,115,95,50,51,0),831], [String.fromCharCode(102,111,110,116,99,111,110,102,105,103,95,57,95,53,52,0),953], [String.fromCharCode(100,117,114,97,116,105,111,110,95,108,95,53,0),572]]);
          let strF = new Map([[String.fromCharCode(106,95,53,49,95,97,116,111,109,105,99,97,108,108,121,0),552], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,95,54,95,52,0),704]]);
          let toponG = [755, 441];
          let morec = String.fromCharCode(108,98,108,95,106,95,52,51,0);
         logoutS += `${sharedF.size}`;
         twitterk = `${strF.size}`;
         sharedF = new Map([[`${toponG.length}`, twitterk.length + toponG.length]]);
         strF = new Map([[`${toponG.length}`, toponG.length]]);
         morec += `${3 << (Math.min(3, toponG.length))}`;
         if (2056729 == logoutS.length) {
            break;
         }
      } while ((2056729 == logoutS.length) && (iconbello == logoutS));
      if (!logoutS.startsWith(iconbello)) {
         logoutS += `${(String.fromCharCode(75,0) == iconbello ? logoutS.length : iconbello.length)}`;
      }
         iconbello = `${logoutS.length}`;
      for (let o = 0; o < 2; o++) {
         iconbello += "3";
      }
         iconbello = `${iconbello.length / 2}`;
      do {
          let libswresamplef = String.fromCharCode(110,95,49,57,95,115,116,111,114,105,110,103,0);
          let smallbrightnessQ = [632, 612, 529];
          let ksadf = 4;
          let e_animationb = [709, 346];
          let sidef = false;
         iconbello += "2";
         libswresamplef += "2";
         smallbrightnessQ = [ksadf];
         ksadf %= Math.max(3, (String.fromCharCode(82,0) == libswresamplef ? libswresamplef.length : ksadf));
         e_animationb.push(1 * e_animationb.length);
         sidef = sidef || 24 < ksadf;
         if (987767 == iconbello.length) {
            break;
         }
      } while ((987767 == iconbello.length) && (iconbello.length > 2 && logoutS != String.fromCharCode(90,0)));
      u_position3 += `${u_position3.length >> (Math.min(3, Math.abs(iconcalendarP)))}`;
   do {
      fullscreenminL = "2";
      if (fullscreenminL == String.fromCharCode(115,52,106,95,0)) {
         break;
      }
   } while (((awayiconJ.length >> (Math.min(Math.abs(2), 4))) >= 2 && (2 >> (Math.min(1, fullscreenminL.length))) >= 2) && (fullscreenminL == String.fromCharCode(115,52,106,95,0)));

  }

   
  _onScreenTouch() {
       let bufferl = 3.0;
    let baiduadsO = 0.0;
    let bang5 = false;
    let temp_ = 4.0;
    let selectC = true;
    let rewindx = true;
    let libcxxcomponentsw = [804, 968];
    let more6 = 4;
    let launcherL = true;
    let analyticsO = String.fromCharCode(101,95,49,52,95,115,104,111,114,116,0);
    let iconnewchatv = new Map([[String.fromCharCode(116,109,99,100,95,109,95,56,51,0),String.fromCharCode(98,95,56,95,109,111,100,101,114,110,0)], [String.fromCharCode(109,95,49,51,95,97,114,105,116,104,0),String.fromCharCode(120,95,51,52,95,112,111,119,101,114,102,117,108,0)], [String.fromCharCode(112,114,105,109,95,103,95,50,48,0),String.fromCharCode(109,95,51,95,116,114,97,100,105,116,105,111,110,97,108,0)]]);
    let e_viewV = 1;
      temp_ /= Math.max(3, 2 / (Math.max(10, analyticsO.length)));
   if (bang5) {
       let iconarrowrightorange3 = String.fromCharCode(108,95,56,51,95,97,114,109,116,104,0);
         iconarrowrightorange3 = "1";
      while (iconarrowrightorange3.length < iconarrowrightorange3.length) {
         iconarrowrightorange3 += `${iconarrowrightorange3.length ^ 3}`;
         break;
      }
      while (iconarrowrightorange3 == String.fromCharCode(80,0) || 3 > iconarrowrightorange3.length) {
         iconarrowrightorange3 = `${iconarrowrightorange3.length >> (Math.min(iconarrowrightorange3.length, 5))}`;
         break;
      }
      temp_ -= 3;
   }

    if (this.player.tapActionTimeout) {

   do {
      iconnewchatv = new Map([[`${baiduadsO}`, 3 % (Math.max(10, parseInt(`${baiduadsO}`)))]]);
      if (iconnewchatv.size == 2384762) {
         break;
      }
   } while ((iconnewchatv.size == 2384762) && (!rewindx || 3 == (iconnewchatv.size ^ 5)));
   if (analyticsO.length <= parseInt(`${temp_}`)) {
       let back0 = 2.0;
       let questiconH = true;
       let twitterX = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,95,110,95,54,48,0);
       let rewardvideos = [352, 190];
       let awayteamfieldw = 5.0;
      if (!twitterX.startsWith(`${questiconH}`)) {
         twitterX = `${(rewardvideos.length + (questiconH ? 5 : 4))}`;
      }
      do {
         awayteamfieldw -= parseInt(`${back0}`) - 1;
         if (3756262.0 == awayteamfieldw) {
            break;
         }
      } while ((1 <= (5 ^ rewardvideos.length)) && (3756262.0 == awayteamfieldw));
      for (let h = 0; h < 3; h++) {
          let foundh = false;
         twitterX = "2";
         foundh = !foundh;
      }
         back0 /= Math.max(5, parseFloat(`${rewardvideos.length >> (Math.min(Math.abs(3), 3))}`));
         back0 -= parseFloat(`${2 * parseInt(`${back0}`)}`);
         back0 += parseFloat(`${rewardvideos.length << (Math.min(Math.abs(3), 4))}`);
      if (2 > (5 * rewardvideos.length) && 1 > (rewardvideos.length * 5)) {
         twitterX = `${parseInt(`${back0}`) >> (Math.min(4, Math.abs(1)))}`;
      }
      while (parseInt(`${awayteamfieldw}`) == rewardvideos.length) {
          let countryE = String.fromCharCode(114,95,52,55,95,98,114,111,107,101,110,0);
          let libfbjnid = new Map([[String.fromCharCode(114,117,110,95,118,95,52,56,0),true ], [String.fromCharCode(109,95,54,56,95,115,117,98,102,105,108,101,0),false ], [String.fromCharCode(113,95,57,57,95,109,106,112,101,103,97,0),false ]]);
          let signinupN = 4.0;
         rewardvideos.push((parseInt(`${back0}`) * (questiconH ? 1 : 2)));
         countryE += `${libfbjnid.size % (Math.max(9, parseInt(`${signinupN}`)))}`;
         libfbjnid = new Map([[`${libfbjnid.size}`, parseInt(`${signinupN}`) / (Math.max(2, libfbjnid.size))]]);
         break;
      }
      if (1 > twitterX.length) {
         twitterX += `${twitterX.length | 3}`;
      }
      for (let m = 0; m < 1; m++) {
         back0 *= parseFloat(`${rewardvideos.length * 2}`);
      }
         rewardvideos = [(parseInt(`${back0}`) - (questiconH ? 1 : 2))];
         rewardvideos.push(parseInt(`${back0}`));
         rewardvideos = [twitterX.length];
         twitterX += `${parseInt(`${back0}`)}`;
      if (1 <= (rewardvideos.length & 1)) {
         rewardvideos = [1];
      }
      analyticsO += `${parseInt(`${back0}`)}`;
   }
      clearTimeout(this.player.tapActionTimeout);
       let libavutilX = false;
       let pingA = String.fromCharCode(100,101,103,114,101,101,115,95,110,95,52,53,0);
         pingA += `${pingA.length >> (Math.min(Math.abs(3), 5))}`;
         libavutilX = pingA.length > 73;
      for (let g = 0; g < 3; g++) {
          let arrowup4 = 4.0;
          let issub1 = String.fromCharCode(117,110,109,97,116,99,104,101,100,95,120,95,55,50,0);
         libavutilX = 84.82 < arrowup4;
         arrowup4 *= parseFloat(`${issub1.length * 3}`);
         issub1 = `${(String.fromCharCode(53,0) == issub1 ? issub1.length : issub1.length)}`;
      }
      for (let q = 0; q < 1; q++) {
         libavutilX = pingA.length < 11;
      }
         libavutilX = pingA.endsWith(`${libavutilX}`);
         libavutilX = !libavutilX;
      baiduadsO -= parseFloat(`${parseInt(`${temp_}`) % 2}`);
   while (!bang5) {
       let fillc = String.fromCharCode(102,95,52,52,95,105,110,116,114,97,120,104,117,102,0);
       let disconnectedlogoh = String.fromCharCode(102,99,112,117,98,108,105,115,104,95,99,95,50,48,0);
      if (5 >= fillc.length) {
          let sportsl = [503, 867];
          let imagenomoredataL = new Map([[String.fromCharCode(112,95,52,56,95,99,100,120,108,0),true ], [String.fromCharCode(111,95,55,52,95,100,101,110,121,0),true ]]);
          let defaultprofilepicd = String.fromCharCode(97,105,109,100,95,97,95,54,51,0);
         disconnectedlogoh += `${fillc.length}`;
         sportsl = [imagenomoredataL.size];
         imagenomoredataL = new Map([[`${imagenomoredataL.size}`, imagenomoredataL.size << (Math.min(Math.abs(1), 4))]]);
         defaultprofilepicd += `${defaultprofilepicd.length >> (Math.min(4, sportsl.length))}`;
      }
      do {
          let with_2kq = String.fromCharCode(108,111,99,108,95,48,95,51,55,0);
         fillc = `${with_2kq.length % (Math.max(10, disconnectedlogoh.length))}`;
         if (String.fromCharCode(115,105,114,101,52,114,107,104,95,115,0) == fillc) {
            break;
         }
      } while ((1 == fillc.length) && (String.fromCharCode(115,105,114,101,52,114,107,104,95,115,0) == fillc));
       let emojig = String.fromCharCode(112,116,115,101,115,95,121,95,52,50,0);
         emojig += "3";
      do {
         emojig += `${fillc.length}`;
         if (emojig.length == 3529904) {
            break;
         }
      } while ((emojig.length < fillc.length) && (emojig.length == 3529904));
          let privilegej = [490, 175];
         emojig = "1";
         privilegej.push(privilegej.length + privilegej.length);
      bang5 = temp_ <= 96.66;
      break;
   }

      this.player.tapActionTimeout = 0;
      analyticsO = `${1 ^ parseInt(`${temp_}`)}`;
   while (rewindx) {
       let connectiona = 4.0;
       let libjsiU = String.fromCharCode(102,105,114,101,98,97,115,101,95,118,95,55,49,0);
       let iconfeedbackB = String.fromCharCode(99,117,114,118,101,95,121,95,51,50,0);
       let greenarrowupI = String.fromCharCode(111,95,54,52,95,105,109,97,103,101,121,117,118,99,111,110,102,105,103,0);
      do {
         iconfeedbackB = "2";
         if (iconfeedbackB == String.fromCharCode(53,102,113,55,0)) {
            break;
         }
      } while ((!greenarrowupI.startsWith(iconfeedbackB)) && (iconfeedbackB == String.fromCharCode(53,102,113,55,0)));
         libjsiU += `${libjsiU.length}`;
      if (iconfeedbackB != String.fromCharCode(121,0) && 5 >= greenarrowupI.length) {
          let untickO = [804, 113];
         greenarrowupI = `${parseInt(`${connectiona}`) >> (Math.min(untickO.length, 1))}`;
      }
       let modulesk = String.fromCharCode(111,95,53,52,95,109,97,120,114,101,97,100,101,114,115,0);
       let weatherE = String.fromCharCode(99,97,112,116,117,114,101,114,95,122,95,57,0);
         weatherE = `${(String.fromCharCode(70,0) == modulesk ? parseInt(`${connectiona}`) : modulesk.length)}`;
      if (libjsiU.length >= 4) {
         libjsiU += `${parseInt(`${connectiona}`)}`;
      }
         greenarrowupI += `${iconfeedbackB.length + 3}`;
          let matchesp = 1.0;
         iconfeedbackB += "3";
         matchesp -= parseFloat(`${2}`);
      for (let j = 0; j < 1; j++) {
         connectiona -= 3;
      }
      for (let b = 0; b < 3; b++) {
         modulesk += `${greenarrowupI.length}`;
      }
      while (greenarrowupI.length > libjsiU.length) {
         libjsiU += `${modulesk.length}`;
         break;
      }
          let defaultlogou = String.fromCharCode(111,95,50,51,95,115,99,97,108,101,115,0);
          let favoriteH = [443, 281];
          let score9 = 3;
         modulesk += `${weatherE.length}`;
         defaultlogou = `${favoriteH.length}`;
         favoriteH = [score9 & 2];
         score9 ^= defaultlogou.length >> (Math.min(Math.abs(1), 3));
      bang5 = 44 > analyticsO.length;
      break;
   }

      this.methods.toggleFullscreen();
   do {
       let yellowredcard5 = [900, 898];
       let redcirclebgt = new Map([[String.fromCharCode(115,101,99,117,114,105,116,121,95,103,95,55,57,0),298], [String.fromCharCode(103,95,50,52,95,97,108,108,111,119,97,110,99,101,0),13]]);
       let predictionarrowR = [String.fromCharCode(114,95,53,56,95,115,111,108,105,100,99,111,108,111,114,0), String.fromCharCode(109,95,56,53,95,99,100,99,105,0)];
       let main_fT = [273, 631, 205];
      for (let i = 0; i < 2; i++) {
         redcirclebgt[`${yellowredcard5.length}`] = predictionarrowR.length;
      }
         predictionarrowR = [main_fT.length];
      do {
         yellowredcard5 = [predictionarrowR.length * 2];
         if (yellowredcard5.length == 4724105) {
            break;
         }
      } while (((yellowredcard5.length - main_fT.length) < 5) && (yellowredcard5.length == 4724105));
         redcirclebgt[`${main_fT.length}`] = 2;
       let arrowrightR = String.fromCharCode(115,109,105,108,105,110,103,95,116,95,53,55,0);
       let upgradeA = String.fromCharCode(98,95,54,49,95,100,101,108,101,116,105,111,110,115,0);
      launcherL = ((yellowredcard5.length * (!bang5 ? yellowredcard5.length : 37)) > 37);
      if (launcherL ? !launcherL : launcherL) {
         break;
      }
   } while ((5.47 > baiduadsO) && (launcherL ? !launcherL : launcherL));
      bufferl *= ((bang5 ? 2 : 3) % (Math.max(parseInt(`${bufferl}`), 6)));

      const state = this.state;
      launcherL = bang5;
       let saveQ = [357, 495, 784];
       let sendl = 0;
          let greeng = [String.fromCharCode(119,95,54,53,95,117,115,101,97,103,101,0), String.fromCharCode(115,99,114,111,108,108,105,110,103,95,110,95,52,48,0), String.fromCharCode(106,95,56,50,95,99,111,99,103,0)];
         sendl /= Math.max(2, saveQ.length);
         greeng = [2];
      do {
          let launcher7 = String.fromCharCode(109,95,56,55,0);
         saveQ.push(3 | saveQ.length);
         launcher7 = `${3 ^ launcher7.length}`;
         if (saveQ.length == 2886049) {
            break;
         }
      } while ((2 < saveQ.length) && (saveQ.length == 2886049));
      while (3 >= saveQ.length) {
         saveQ.push(saveQ.length * 3);
         break;
      }
      do {
         sendl *= 1 ^ saveQ.length;
         if (4812777 == sendl) {
            break;
         }
      } while ((4812777 == sendl) && (3 >= (sendl - saveQ.length)));
      if (saveQ.includes(sendl)) {
         saveQ.push(saveQ.length - 2);
      }
      do {
          let libsentryL = 0.0;
          let bggradientw = 1.0;
          let combinedH = new Map([[String.fromCharCode(112,95,49,51,95,102,105,110,97,108,100,0),true ], [String.fromCharCode(119,101,98,109,105,100,115,95,50,95,53,56,0),true ]]);
          let shielddones = true;
          let become6 = new Map([[String.fromCharCode(116,95,54,57,95,97,117,116,111,99,111,114,114,0),891], [String.fromCharCode(115,95,56,50,95,109,100,99,118,0),298], [String.fromCharCode(104,95,55,56,95,105,110,118,105,116,101,0),311]]);
         sendl %= Math.max(parseInt(`${bggradientw}`) + sendl, 5);
         libsentryL *= 2 - become6.size;
         bggradientw *= combinedH.size;
         combinedH = new Map([[`${combinedH.size}`, combinedH.size << (Math.min(Math.abs(2), 5))]]);
         become6[`${libsentryL}`] = 3;
         if (3598271 == sendl) {
            break;
         }
      } while ((3598271 == sendl) && ((saveQ.length * 3) == 2 && (saveQ.length * sendl) == 3));
      bang5 = iconnewchatv[`${baiduadsO}`] == null;

      if (state.showControls) {

   if (!bang5 && 2.26 < (baiduadsO * 5.77)) {
      baiduadsO -= parseFloat(`${3}`);
   }
      libcxxcomponentsw = [more6 + 1];
        this.resetControlTimeout();
      }
    } else {

   while (1.47 >= bufferl) {
       let orientationL = 4.0;
       let gradlew4 = 2.0;
       let fcdaebecbcbafcdfceaaeccfeacdbn = 5.0;
       let minimizeR = String.fromCharCode(115,95,53,56,95,114,97,110,100,111,109,0);
       let placeholderF = 1.0;
          let gray8 = [697, 922, 645];
         gradlew4 += parseInt(`${gradlew4}`) & parseInt(`${placeholderF}`);
         gray8.push(gray8.length % 3);
      if (4.94 > gradlew4) {
          let upgradeO = String.fromCharCode(102,97,118,101,100,95,120,95,55,51,0);
          let loadingspinnerE = false;
          let screenz = String.fromCharCode(108,95,55,50,95,115,109,111,111,116,104,105,110,103,0);
          let auto_z98 = String.fromCharCode(98,97,115,101,112,111,105,110,116,95,53,95,55,51,0);
          let policyf = String.fromCharCode(116,114,101,97,116,95,118,95,54,56,0);
         gradlew4 *= upgradeO.length ^ 3;
         upgradeO += `${auto_z98.length}`;
         loadingspinnerE = policyf == String.fromCharCode(103,0);
         screenz += `${policyf.length}`;
         auto_z98 = `${screenz.length}`;
      }
       let latny = String.fromCharCode(115,95,53,51,95,112,107,99,115,0);
       let predictionwina = String.fromCharCode(121,95,54,49,95,121,117,118,112,108,0);
      if (placeholderF >= 3.31) {
          let speca = false;
          let vertical8 = new Map([[String.fromCharCode(110,101,105,103,104,98,111,117,114,115,95,108,95,54,51,0),String.fromCharCode(117,95,56,48,95,115,105,112,114,100,97,116,97,0)], [String.fromCharCode(114,101,109,105,110,100,101,114,115,95,97,95,54,50,0),String.fromCharCode(115,121,109,98,111,108,105,99,97,116,97,98,108,101,95,51,95,50,57,0)], [String.fromCharCode(102,95,56,49,95,111,116,104,101,114,119,105,115,101,0),String.fromCharCode(116,105,109,101,108,105,110,101,115,95,97,95,48,0)]]);
          let moon7 = 5.0;
          let middlewared = 2.0;
         gradlew4 /= Math.max(((speca ? 4 : 5) % (Math.max(parseInt(`${moon7}`), 4))), 5);
         speca = middlewared > vertical8.size;
         vertical8[`${middlewared}`] = 2 << (Math.min(1, Math.abs(parseInt(`${middlewared}`))));
         moon7 += 2;
      }
          let cancelA = 1;
          let iconnointernetV = 2.0;
         fcdaebecbcbafcdfceaaeccfeacdbn -= 3 >> (Math.min(Math.abs(parseInt(`${placeholderF}`)), 2));
         cancelA <<= Math.min(Math.abs(1 << (Math.min(Math.abs(cancelA), 1))), 2);
         iconnointernetV += cancelA & 3;
      if (5.64 == (5.44 * fcdaebecbcbafcdfceaaeccfeacdbn) || 3.98 == (gradlew4 * 5.44)) {
         gradlew4 *= predictionwina.length;
      }
         fcdaebecbcbafcdfceaaeccfeacdbn *= (minimizeR == String.fromCharCode(81,0) ? minimizeR.length : parseInt(`${fcdaebecbcbafcdfceaaeccfeacdbn}`));
      while (3 == predictionwina.length) {
         predictionwina = `${(latny == String.fromCharCode(55,0) ? predictionwina.length : latny.length)}`;
         break;
      }
         latny = `${3 << (Math.min(Math.abs(parseInt(`${gradlew4}`)), 3))}`;
         orientationL -= parseInt(`${gradlew4}`);
          let changep = 0.0;
          let codem = 4.0;
          let with_57P = 3;
         fcdaebecbcbafcdfceaaeccfeacdbn += parseInt(`${changep}`) - parseInt(`${placeholderF}`);
         changep += with_57P;
         codem /= Math.max(parseFloat(`${parseInt(`${codem}`)}`), 5);
         with_57P <<= Math.min(1, Math.abs(2 ^ with_57P));
      if (minimizeR.endsWith(`${placeholderF}`)) {
         placeholderF -= parseFloat(`${2}`);
      }
         placeholderF += parseFloat(`${parseInt(`${fcdaebecbcbafcdfceaaeccfeacdbn}`) << (Math.min(latny.length, 1))}`);
      if (2.27 < (fcdaebecbcbafcdfceaaeccfeacdbn * 1.18) || 1.18 < (fcdaebecbcbafcdfceaaeccfeacdbn * orientationL)) {
         orientationL += parseInt(`${gradlew4}`);
      }
         minimizeR = `${(String.fromCharCode(105,0) == predictionwina ? predictionwina.length : parseInt(`${fcdaebecbcbafcdfceaaeccfeacdbn}`))}`;
      bufferl += ((launcherL ? 2 : 5) >> (Math.min(Math.abs(parseInt(`${orientationL}`)), 3)));
      break;
   }
   do {
      more6 *= 1;
      if (1314107 == more6) {
         break;
      }
   } while ((1314107 == more6) && (more6 > e_viewV));
      this.player.tapActionTimeout = setTimeout(() => {

   if (bufferl <= e_viewV) {
      bufferl += (analyticsO == String.fromCharCode(101,0) ? analyticsO.length : (rewindx ? 5 : 1));
   }
   if (launcherL) {
      selectC = 76.80 < bufferl || !selectC;
   }
        const state = this.state;
   for (let p = 0; p < 1; p++) {
      iconnewchatv[`${e_viewV}`] = iconnewchatv.size;
   }
   do {
      more6 *= more6 >> (Math.min(2, Math.abs(2)));
      if (more6 == 2743701) {
         break;
      }
   } while (((3 ^ more6) == 1 && (iconnewchatv.size ^ 3) == 1) && (more6 == 2743701));

        if (this.player.tapAnywhereToPause && state.showControls) {

       let megaphonej = false;
       let build9 = String.fromCharCode(113,95,55,50,95,99,111,101,102,102,115,0);
         build9 += `${((megaphonej ? 5 : 2))}`;
      do {
          let jingdongr = new Map([[String.fromCharCode(110,95,54,56,95,105,110,112,117,116,116,101,109,0),String.fromCharCode(104,111,115,116,115,95,109,95,49,52,0)], [String.fromCharCode(105,95,51,53,95,106,112,101,103,100,115,112,0),String.fromCharCode(109,101,114,103,101,100,95,109,95,50,52,0)]]);
          let iconwatch1 = true;
          let iconarrowrightwhitex = true;
         megaphonej = iconwatch1;
         jingdongr = new Map([[`${jingdongr.size}`, 2]]);
         iconarrowrightwhitex = (14 > ((iconarrowrightwhitex ? 14 : jingdongr.size) ^ jingdongr.size));
         if (megaphonej ? !megaphonej : megaphonej) {
            break;
         }
      } while ((!megaphonej) && (megaphonej ? !megaphonej : megaphonej));
      if (megaphonej) {
         megaphonej = (98 <= (build9.length + (megaphonej ? 98 : build9.length)));
      }
         megaphonej = !build9.startsWith(`${megaphonej}`);
      if (!megaphonej || build9.length <= 4) {
          let photo9 = 1.0;
          let nativeP = 5.0;
          let binddatasS = 2;
          let reactnavigationm = 4.0;
          let bgvipxvodN = 0;
         megaphonej = (reactnavigationm - photo9) > 35.63;
         photo9 /= Math.max(4, parseFloat(`${binddatasS ^ parseInt(`${nativeP}`)}`));
         nativeP -= parseFloat(`${2 % (Math.max(parseInt(`${nativeP}`), 2))}`);
         binddatasS <<= Math.min(Math.abs(2), 3);
         reactnavigationm /= Math.max(5, parseFloat(`${binddatasS ^ 2}`));
         bgvipxvodN -= 2;
      }
         megaphonej = !megaphonej;
      temp_ += more6;
   if ((more6 + 3) >= 2 && 4 >= (more6 + 3)) {
       let pointG = new Map([[String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,95,110,95,55,49,0),459], [String.fromCharCode(105,115,112,111,115,97,98,108,101,95,121,95,49,55,0),189]]);
       let basketballplayerplaceholder3 = true;
       let iconclosewhitewithbge = new Map([[String.fromCharCode(98,114,97,99,107,101,116,95,118,95,52,0),922], [String.fromCharCode(113,95,55,57,95,99,111,115,113,105,0),833]]);
       let iconpointscorex = 5.0;
       let logousery = 3.0;
         basketballplayerplaceholder3 = (iconclosewhitewithbge.size | pointG.size) < 13;
      for (let w = 0; w < 2; w++) {
          let pingr = 0;
          let ewardedr = String.fromCharCode(110,95,57,54,95,109,101,110,117,0);
          let rewind4 = String.fromCharCode(99,95,55,52,95,115,117,98,101,120,112,114,0);
         basketballplayerplaceholder3 = pointG.size >= 65;
         pingr ^= (rewind4 == String.fromCharCode(51,0) ? ewardedr.length : rewind4.length);
         ewardedr = "1";
      }
       let reminderw = false;
       let fieldm = true;
       let send_ = 0.0;
       let libhermesi = 2.0;
       let orangeclockZ = String.fromCharCode(99,95,53,57,95,115,117,98,114,97,110,103,101,0);
       let playlisto = String.fromCharCode(102,95,49,48,95,99,117,116,111,117,116,0);
          let currentA = 0.0;
          let defaultfootballbgY = String.fromCharCode(120,95,49,49,95,119,97,108,108,112,97,112,101,114,0);
         iconclosewhitewithbge = new Map([[`${pointG.size}`, 3]]);
         currentA *= (parseFloat(`${String.fromCharCode(102,0) == defaultfootballbgY ? parseInt(`${currentA}`) : defaultfootballbgY.length}`));
      while ((1.53 - iconpointscorex) == 5.37) {
         pointG[playlisto] = (playlisto == String.fromCharCode(85,0) ? playlisto.length : parseInt(`${libhermesi}`));
         break;
      }
      while (Array.from(pointG.values()).includes(libhermesi)) {
         pointG = new Map([[`${reminderw}`, parseInt(`${logousery}`) % 3]]);
         break;
      }
      more6 <<= Math.min(5, parseInt(`${Math.abs(((launcherL ? 5 : 1) >> (Math.min(libcxxcomponentsw.length, 4))))}`));
   }
          this.methods.togglePlayPause();
      rewindx = analyticsO.startsWith(`${launcherL}`);
      launcherL = more6 >= temp_;

          this.resetControlTimeout();
        } else {

   do {
      iconnewchatv = new Map([[`${libcxxcomponentsw.length}`, parseInt(`${bufferl}`) << (Math.min(4, Math.abs(2)))]]);
      if (iconnewchatv.size == 619174) {
         break;
      }
   } while ((iconnewchatv.size == 619174) && (Array.from(iconnewchatv.values()).includes(e_viewV)));
   while (analyticsO.length < 2) {
      iconnewchatv = new Map([[`${baiduadsO}`, 3]]);
      break;
   }
          this.methods.toggleControls();
   for (let i = 0; i < 1; i++) {
      selectC = (!launcherL ? bang5 : !launcherL);
   }
   if (!launcherL) {
       let component4 = [677, 773];
       let foundj = String.fromCharCode(101,122,111,115,95,53,95,52,50,0);
       let telemetryJ = 2.0;
         component4 = [2 & parseInt(`${telemetryJ}`)];
      if (!component4.includes(telemetryJ)) {
         component4 = [component4.length / (Math.max(10, foundj.length))];
      }
         foundj += `${parseInt(`${telemetryJ}`)}`;
         component4.push(foundj.length / (Math.max(3, 7)));
       let renewx = false;
       let actiont = String.fromCharCode(109,97,110,116,105,115,115,97,95,105,95,50,57,0);
       let rank4 = String.fromCharCode(113,95,55,57,95,105,110,105,116,104,0);
      while (telemetryJ >= 5.7) {
          let station8 = 2;
         foundj = `${rank4.length}`;
         station8 -= 2 & station8;
         break;
      }
      if (5 < foundj.length && renewx) {
         foundj = `${parseInt(`${telemetryJ}`) / 2}`;
      }
          let bgvipsportA = new Map([[String.fromCharCode(115,111,119,97,107,101,117,112,95,102,95,53,57,0),702], [String.fromCharCode(119,105,116,104,95,50,95,52,49,0),267], [String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,95,121,95,57,0),754]]);
          let becomeB = String.fromCharCode(102,111,108,100,95,53,95,57,51,0);
         renewx = (((!renewx ? 19 : foundj.length) >> (Math.min(foundj.length, 3))) > 19);
         bgvipsportA[becomeB] = 1 << (Math.min(4, becomeB.length));
      launcherL = bang5;
   }

        }
        this.player.tapActionTimeout = 0;
      rewindx = temp_ >= 35.10;
      more6 -= 1 & parseInt(`${bufferl}`);

      }, this.props.doubleTapTime);
      bang5 = iconnewchatv.size < 33;
   if (iconnewchatv.size <= 1) {
       let eighteeny = 0.0;
       let iconstar4 = 0.0;
       let rulesa = String.fromCharCode(115,111,108,117,116,105,111,110,95,119,95,53,49,0);
      if (rulesa.length == 1) {
         rulesa += `${parseInt(`${eighteeny}`)}`;
      }
          let weatherJ = new Map([[String.fromCharCode(104,99,108,114,95,104,95,54,0),false ], [String.fromCharCode(111,95,55,55,95,103,110,114,101,0),true ], [String.fromCharCode(99,95,49,57,95,105,110,102,108,105,103,104,116,0),true ]]);
          let sinaI = String.fromCharCode(109,95,50,55,95,102,102,112,114,111,98,101,0);
         eighteeny -= rulesa.length;
         weatherJ = new Map([[`${weatherJ.size}`, weatherJ.size - sinaI.length]]);
         sinaI = `${sinaI.length}`;
         rulesa = `${(String.fromCharCode(51,0) == rulesa ? rulesa.length : parseInt(`${iconstar4}`))}`;
         rulesa += `${3 + rulesa.length}`;
         rulesa += `${parseInt(`${eighteeny}`)}`;
      iconnewchatv[`${bang5}`] = (parseInt(`${temp_}`) << (Math.min(5, Math.abs((bang5 ? 2 : 5)))));
   }

    }
  }

   

   
  setControlTimeout() {
       let icondownimgF = String.fromCharCode(114,95,54,95,99,114,111,115,115,102,97,100,101,0);
    let profileframeH = String.fromCharCode(98,105,110,100,120,95,111,95,49,0);
    let rank9 = 4.0;
    let uploadi = String.fromCharCode(122,95,51,56,95,99,111,110,110,101,99,116,105,111,110,99,98,0);
    let trophyW = 5.0;
    let matchesS = String.fromCharCode(104,111,116,111,95,54,95,57,50,0);
    let shrinkX = [505, 395, 704];
    let airbnbstarselectedO = 0.0;
    let tempb = 2.0;
   if ((uploadi.length & 2) == 1 && (uploadi.length | 2) == 2) {
      uploadi = `${shrinkX.length >> (Math.min(Math.abs(3), 5))}`;
   }
   while (1 >= shrinkX.length) {
      matchesS += `${profileframeH.length ^ matchesS.length}`;
      break;
   }
      trophyW -= parseFloat(`${uploadi.length * 1}`);
   for (let j = 0; j < 1; j++) {
       let matchactives = 1.0;
       let layoutM = String.fromCharCode(98,95,52,50,95,115,105,120,116,97,112,0);
       let bingz = String.fromCharCode(102,95,52,53,95,98,110,108,101,0);
       let scorepopsoundG = [517, 78];
      do {
          let smallg = String.fromCharCode(115,116,105,112,112,101,100,95,98,95,53,57,0);
         matchactives -= parseFloat(`${layoutM.length}`);
         smallg += `${smallg.length}`;
         if (matchactives == 883960.0) {
            break;
         }
      } while ((matchactives == 883960.0) && (3 >= (5 / (Math.max(1, bingz.length))) || (bingz.length / (Math.max(1, parseInt(`${matchactives}`)))) >= 5));
          let libhermesh = String.fromCharCode(111,95,49,54,95,115,109,111,111,116,104,110,101,115,115,0);
         matchactives *= parseFloat(`${parseInt(`${matchactives}`)}`);
         libhermesh = "1";
      while ((scorepopsoundG.length / (Math.max(9, parseInt(`${matchactives}`)))) > 5 || (matchactives / (Math.max(3.31, 9))) > 1.94) {
         matchactives += parseFloat(`${1}`);
         break;
      }
       let defaultfootballbgd = false;
       let episodeq = String.fromCharCode(112,114,111,99,101,115,115,105,110,103,95,100,95,51,49,0);
         bingz += `${bingz.length}`;
          let buildQ = 2;
          let basef = 1.0;
          let libfbH = 1;
         bingz = `${layoutM.length}`;
         buildQ >>= Math.min(2, Math.abs(buildQ));
         basef -= parseFloat(`${3}`);
         libfbH <<= Math.min(Math.abs(1 << (Math.min(Math.abs(buildQ), 4))), 1);
      while (matchactives < 4.3) {
         bingz += `${((defaultfootballbgd ? 2 : 3))}`;
         break;
      }
      do {
          let successh = String.fromCharCode(117,95,54,56,0);
          let iconviewerK = String.fromCharCode(115,117,98,116,114,97,99,116,105,111,110,95,109,95,56,53,0);
          let icontransferclubT = String.fromCharCode(109,95,52,55,95,120,106,112,101,103,0);
         bingz += "3";
         successh = `${icontransferclubT.length}`;
         iconviewerK = `${iconviewerK.length}`;
         icontransferclubT += `${(successh == String.fromCharCode(101,0) ? iconviewerK.length : successh.length)}`;
         if (String.fromCharCode(107,49,108,54,56,57,102,50,104,107,0) == bingz) {
            break;
         }
      } while (((bingz.length | 2) < 4) && (String.fromCharCode(107,49,108,54,56,57,102,50,104,107,0) == bingz));
         defaultfootballbgd = ((bingz.length << (Math.min(5, Math.abs((defaultfootballbgd ? 34 : bingz.length))))) >= 34);
         bingz += `${1 ^ scorepopsoundG.length}`;
      for (let r = 0; r < 1; r++) {
         scorepopsoundG.push((bingz == String.fromCharCode(79,0) ? scorepopsoundG.length : bingz.length));
      }
      profileframeH += `${layoutM.length}`;
   }
       let launchs = String.fromCharCode(112,95,48,95,111,111,117,114,97,0);
      for (let y = 0; y < 2; y++) {
          let placeholderK = 5.0;
          let crownO = String.fromCharCode(114,95,53,54,95,99,105,110,101,112,97,107,0);
         launchs += `${crownO.length}`;
         placeholderK *= parseInt(`${placeholderK}`);
         crownO += "1";
      }
       let executorV = new Map([[String.fromCharCode(104,95,49,48,95,114,101,115,116,0),669], [String.fromCharCode(103,111,116,95,100,95,51,50,0),667], [String.fromCharCode(116,95,54,50,95,116,105,108,101,109,107,97,0),996]]);
          let cornerY = 1.0;
          let iconmegaphone5 = new Map([[String.fromCharCode(97,95,52,95,100,101,112,101,110,100,101,110,99,105,101,115,0),303], [String.fromCharCode(115,116,114,116,97,103,95,117,95,53,49,0),74], [String.fromCharCode(105,95,56,54,95,97,110,97,108,121,115,105,115,0),55]]);
          let matchesu = String.fromCharCode(101,95,54,55,95,117,114,108,99,111,110,116,101,120,116,0);
         launchs = `${2 >> (Math.min(2, Math.abs(executorV.size)))}`;
         cornerY += parseInt(`${cornerY}`) >> (Math.min(Math.abs(3), 3));
         iconmegaphone5[`${cornerY}`] = 2;
         matchesu = `${(matchesu == String.fromCharCode(110,0) ? matchesu.length : iconmegaphone5.size)}`;
      uploadi = `${1 | parseInt(`${trophyW}`)}`;
       let benefito = new Map([[String.fromCharCode(104,95,57,49,95,113,116,115,0),String.fromCharCode(111,95,49,48,48,95,97,108,108,114,103,98,0)], [String.fromCharCode(112,95,53,55,95,98,97,99,107,103,114,111,117,110,100,105,110,103,0),String.fromCharCode(109,105,110,105,109,97,108,108,121,95,97,95,50,49,0)]]);
       let uploadR = String.fromCharCode(97,95,51,50,95,112,99,98,105,110,102,111,0);
       let qnewinterstitialE = String.fromCharCode(105,95,51,53,95,115,97,116,0);
      do {
          let dragcloses = new Map([[String.fromCharCode(101,97,114,108,105,101,114,95,54,95,57,48,0),false ], [String.fromCharCode(103,95,55,53,95,97,103,97,116,101,0),true ], [String.fromCharCode(98,95,49,48,48,95,99,108,103,101,116,0),true ]]);
         benefito = new Map([[uploadR, 3 << (Math.min(5, qnewinterstitialE.length))]]);
         dragcloses[`${dragcloses.size}`] = dragcloses.size;
         if (1221844 == benefito.size) {
            break;
         }
      } while ((1221844 == benefito.size) && (uploadR.endsWith(`${benefito.size}`)));
      if (3 > (1 & uploadR.length) || 5 > (1 & benefito.size)) {
         uploadR = `${1 | qnewinterstitialE.length}`;
      }
          let questicons = [486, 715];
         uploadR = `${benefito.size | 2}`;
         questicons = [questicons.length / (Math.max(8, questicons.length))];
      while ((benefito.size >> (Math.min(Math.abs(3), 4))) > 5) {
         uploadR += `${(String.fromCharCode(72,0) == qnewinterstitialE ? benefito.size : qnewinterstitialE.length)}`;
         break;
      }
         uploadR = `${uploadR.length}`;
       let emptyF = String.fromCharCode(119,95,57,49,95,118,100,112,97,117,0);
      do {
         qnewinterstitialE += `${qnewinterstitialE.length * 3}`;
         if (1604367 == qnewinterstitialE.length) {
            break;
         }
      } while ((1604367 == qnewinterstitialE.length) && (1 == qnewinterstitialE.length));
         emptyF += `${qnewinterstitialE.length % (Math.max(1, 4))}`;
      do {
         benefito[uploadR] = uploadR.length >> (Math.min(Math.abs(3), 2));
         if (747054 == benefito.size) {
            break;
         }
      } while ((747054 == benefito.size) && (!qnewinterstitialE.startsWith(`${benefito.size}`)));
      shrinkX.push((icondownimgF == String.fromCharCode(84,0) ? uploadR.length : icondownimgF.length));

    this.player.controlTimeout = setTimeout(() => {

   for (let o = 0; o < 2; o++) {
      profileframeH += `${icondownimgF.length}`;
   }
   for (let t = 0; t < 1; t++) {
       let indicator0 = false;
       let lessg = 0;
       let mbridged = new Map([[String.fromCharCode(101,95,55,51,0),String.fromCharCode(104,95,49,49,95,99,104,101,99,107,115,117,109,115,0)], [String.fromCharCode(99,111,108,111,114,115,112,97,99,101,100,115,112,95,120,95,56,50,0),String.fromCharCode(113,95,52,50,95,102,101,116,99,104,101,115,0)]]);
       let hongkongW = String.fromCharCode(113,95,49,52,95,100,105,118,105,100,101,100,0);
      if (indicator0) {
         lessg &= mbridged.size ^ hongkongW.length;
      }
         mbridged = new Map([[`${mbridged.size}`, mbridged.size]]);
          let eactR = 1.0;
         indicator0 = hongkongW.length >= lessg;
         eactR *= 2;
      do {
          let selecth = [643, 856, 841];
          let yellowO = String.fromCharCode(99,111,114,114,101,108,97,116,101,95,109,95,53,50,0);
          let loginsuccessu = 5.0;
          let routero = String.fromCharCode(118,95,51,48,95,114,101,97,100,0);
         mbridged = new Map([[`${lessg}`, 3]]);
         selecth.push(yellowO.length | 3);
         yellowO = `${parseInt(`${loginsuccessu}`) + 3}`;
         loginsuccessu *= parseInt(`${loginsuccessu}`);
         routero = `${3 ^ parseInt(`${loginsuccessu}`)}`;
         if (3191778 == mbridged.size) {
            break;
         }
      } while ((3191778 == mbridged.size) && (!indicator0));
          let dialogk = 4.0;
          let iconwatchB = 0;
          let foundF = String.fromCharCode(97,95,56,52,95,117,110,105,99,111,100,101,0);
         indicator0 = parseFloat(`${mbridged.size}`) < dialogk;
         dialogk += (parseFloat(`${String.fromCharCode(70,0) == foundF ? foundF.length : iconwatchB}`));
         iconwatchB %= Math.max(foundF.length | 3, 1);
      if (mbridged.size == 2) {
         indicator0 = (mbridged.size ^ hongkongW.length) == 30;
      }
         lessg *= mbridged.size;
      if ((lessg * 1) <= 4 || 3 <= (mbridged.size * 1)) {
          let valuesw = [718, 515];
          let injuryx = String.fromCharCode(100,95,56,95,99,97,108,99,117,108,97,116,105,110,103,0);
          let defaultpredictionprofile5 = 3.0;
         lessg <<= Math.min(Math.abs(((indicator0 ? 4 : 3) | 2)), 3);
         valuesw = [injuryx.length << (Math.min(Math.abs(1), 1))];
         injuryx = `${valuesw.length}`;
         defaultpredictionprofile5 += parseFloat(`${parseInt(`${defaultpredictionprofile5}`) - injuryx.length}`);
      }
         lessg ^= 2;
       let z_image8 = [869, 956, 955];
       let bufferz = [750, 974, 178];
      for (let h = 0; h < 3; h++) {
         lessg >>= Math.min(Math.abs(3 ^ z_image8.length), 3);
      }
      if (4 >= (1 & lessg)) {
          let libreactperfloggerjniF = false;
         lessg %= Math.max(((indicator0 ? 5 : 5) / (Math.max(8, lessg))), 1);
         libreactperfloggerjniF = !libreactperfloggerjniF;
      }
      icondownimgF += `${icondownimgF.length * 2}`;
   }
      shrinkX = [uploadi.length ^ parseInt(`${rank9}`)];
   if ((parseInt(`${rank9}`) / (Math.max(profileframeH.length, 2))) >= 3 && 3 >= (parseInt(`${rank9}`) / (Math.max(7, profileframeH.length)))) {
      rank9 += parseFloat(`${uploadi.length}`);
   }
   do {
      shrinkX.push(parseInt(`${rank9}`) * 3);
      if (shrinkX.length == 418411) {
         break;
      }
   } while ((shrinkX.length == 418411) && (profileframeH.includes(`${shrinkX.length}`)));
   for (let c = 0; c < 1; c++) {
       let libtanE = true;
      for (let w = 0; w < 2; w++) {
          let updatesA = String.fromCharCode(102,108,97,99,101,110,99,95,112,95,49,48,0);
          let latn1 = 0.0;
          let arrowR = String.fromCharCode(118,112,109,116,95,101,95,53,51,0);
          let dependencyB = false;
         libtanE = !libtanE || 49.76 <= latn1;
         updatesA = `${((dependencyB ? 4 : 2))}`;
         latn1 -= updatesA.length | 1;
         arrowR += `${((dependencyB ? 1 : 3))}`;
      }
      while (!libtanE && libtanE) {
          let delegate_69 = String.fromCharCode(107,95,55,52,95,98,114,97,110,99,104,0);
          let livesharex = 5;
          let iconpipshrinkR = [556, 930];
          let iconorientationH = String.fromCharCode(108,95,53,49,95,118,105,101,119,0);
          let homeloading_ = String.fromCharCode(119,104,101,110,95,108,95,54,53,0);
         libtanE = homeloading_ == String.fromCharCode(84,0);
         delegate_69 = `${delegate_69.length}`;
         livesharex &= 2 % (Math.max(livesharex, 4));
         iconpipshrinkR.push(3);
         iconorientationH += `${delegate_69.length}`;
         homeloading_ = `${iconpipshrinkR.length * 1}`;
         break;
      }
       let footballfield7 = new Map([[String.fromCharCode(100,105,118,105,100,101,114,95,53,95,52,55,0),20], [String.fromCharCode(114,105,100,95,100,95,57,50,0),85], [String.fromCharCode(99,95,49,53,95,104,97,115,104,100,101,115,116,114,111,121,0),331]]);
       let bangw = new Map([[String.fromCharCode(109,95,51,53,95,114,101,106,101,99,116,105,111,110,115,0),422], [String.fromCharCode(103,101,116,115,116,114,95,105,95,55,55,0),880], [String.fromCharCode(114,101,102,112,116,114,95,111,95,57,51,0),682]]);
      icondownimgF = `${icondownimgF.length % 3}`;
   }
      this._hideControls();
   while (profileframeH.length <= 5) {
      matchesS += `${parseInt(`${airbnbstarselectedO}`)}`;
      break;
   }
   while (uploadi != String.fromCharCode(122,0)) {
      icondownimgF = "3";
      break;
   }
      rank9 /= Math.max((parseFloat(`${String.fromCharCode(51,0) == profileframeH ? profileframeH.length : shrinkX.length}`)), 3);
   if (!uploadi.includes(`${shrinkX.length}`)) {
       let halffieldimageH = String.fromCharCode(119,101,98,95,100,95,56,49,0);
       let gesturei = true;
       let flipperj = 3.0;
       let iconmore4 = [String.fromCharCode(98,117,116,116,101,114,102,108,105,101,115,95,105,95,57,55,0), String.fromCharCode(102,105,108,101,112,97,116,104,95,102,95,53,53,0)];
          let successg = 0.0;
          let overC = String.fromCharCode(100,105,97,99,114,105,116,105,99,95,110,95,57,55,0);
          let middlewareH = new Map([[String.fromCharCode(122,95,55,55,95,99,111,112,121,120,0),String.fromCharCode(100,95,57,55,95,105,110,102,111,0)], [String.fromCharCode(117,95,54,56,95,101,115,116,105,109,97,116,101,0),String.fromCharCode(100,95,49,95,97,108,103,111,114,105,116,104,109,115,0)], [String.fromCharCode(116,104,105,114,116,121,95,117,95,53,51,0),String.fromCharCode(97,95,56,56,95,100,99,116,101,108,101,109,0)]]);
         flipperj *= parseFloat(`${2 >> (Math.min(4, halffieldimageH.length))}`);
         successg *= parseFloat(`${3 / (Math.max(6, middlewareH.size))}`);
         overC += `${overC.length & 1}`;
         middlewareH[`${overC}`] = (String.fromCharCode(103,0) == overC ? middlewareH.size : overC.length);
      if (!gesturei) {
         gesturei = !gesturei;
      }
      do {
         iconmore4.push(iconmore4.length);
         if (iconmore4.length == 48161) {
            break;
         }
      } while ((iconmore4.length == 48161) && ((1 ^ iconmore4.length) > 5 && 4 > (iconmore4.length ^ 1)));
      if ((3.84 * flipperj) > 5.69 || flipperj > 3.84) {
         flipperj /= Math.max(5, (parseFloat(`${(gesturei ? 2 : 3) - 2}`)));
      }
      while ((halffieldimageH.length * parseInt(`${flipperj}`)) >= 4) {
          let heartj = [222, 618];
          let closea = new Map([[String.fromCharCode(98,108,105,110,100,105,110,103,95,118,95,50,57,0),69], [String.fromCharCode(102,117,110,99,95,121,95,51,54,0),286]]);
          let b_unlock6 = new Map([[String.fromCharCode(108,95,55,54,95,116,105,101,114,0),false ], [String.fromCharCode(115,116,97,116,105,111,110,97,114,105,116,121,95,112,95,51,0),false ]]);
         flipperj /= Math.max(parseFloat(`${halffieldimageH.length}`), 5);
         heartj.push(heartj.length);
         closea[`${heartj.length}`] = heartj.length | 1;
         b_unlock6 = new Map([[`${closea.size}`, heartj.length]]);
         break;
      }
         flipperj /= Math.max(3, parseFloat(`${parseInt(`${flipperj}`)}`));
          let heartL = String.fromCharCode(115,116,115,99,95,99,95,55,57,0);
          let binddatasp = new Map([[String.fromCharCode(115,99,113,117,101,114,121,95,99,95,53,52,0),306], [String.fromCharCode(111,95,52,95,115,99,105,105,0),487], [String.fromCharCode(118,95,52,51,95,102,114,101,113,117,101,110,116,0),382]]);
         iconmore4.push(((gesturei ? 5 : 3)));
         heartL = `${1 * binddatasp.size}`;
         binddatasp = new Map([[`${binddatasp.size}`, heartL.length | 1]]);
       let statisticsinactivef = 5.0;
         iconmore4.push((1 + (gesturei ? 4 : 2)));
      do {
         statisticsinactivef += parseFloat(`${3 / (Math.max(parseInt(`${flipperj}`), 1))}`);
         if (statisticsinactivef == 22057.0) {
            break;
         }
      } while ((statisticsinactivef == 22057.0) && (4 < (iconmore4.length >> (Math.min(Math.abs(2), 1))) && (2.21 - statisticsinactivef) < 4.36));
         flipperj -= parseFloat(`${3 + parseInt(`${flipperj}`)}`);
          let reactnavigationO = 5.0;
         flipperj += (parseFloat(`${(gesturei ? 5 : 3) / (Math.max(parseInt(`${flipperj}`), 8))}`));
         reactnavigationO /= Math.max(2, parseFloat(`${parseInt(`${reactnavigationO}`) ^ parseInt(`${reactnavigationO}`)}`));
      shrinkX = [matchesS.length];
   }
      airbnbstarselectedO -= parseFloat(`${2 & matchesS.length}`);
      trophyW -= parseFloat(`${parseInt(`${airbnbstarselectedO}`) / (Math.max(parseInt(`${rank9}`), 5))}`);

    }, this.player.controlTimeoutDelay);
   for (let t = 0; t < 1; t++) {
      uploadi += `${matchesS.length * icondownimgF.length}`;
   }
      airbnbstarselectedO -= parseFloat(`${3}`);
   while ((3 + profileframeH.length) == 3 || 1 == (3 >> (Math.min(5, profileframeH.length)))) {
      profileframeH += `${1 | parseInt(`${airbnbstarselectedO}`)}`;
      break;
   }
      profileframeH += `${2 - uploadi.length}`;
      uploadi = `${shrinkX.length * parseInt(`${airbnbstarselectedO}`)}`;
   do {
      uploadi += `${shrinkX.length * 2}`;
      if (2992889 == uploadi.length) {
         break;
      }
   } while ((2992889 == uploadi.length) && (icondownimgF == uploadi));

  }

   
  clearControlTimeout() {
       let penaltygoal9 = false;
    let bingw = String.fromCharCode(114,117,110,110,105,110,103,95,105,95,54,50,0);
    let relatedl = 0.0;
    let awayiconl = String.fromCharCode(111,110,101,119,97,121,95,112,95,50,0);
    let iconbelli = 1.0;
    let constantsS = String.fromCharCode(102,95,54,55,95,103,114,97,121,114,103,98,0);
    let windG = true;
    let renewG = new Map([[String.fromCharCode(102,95,57,48,95,114,103,98,97,108,101,0),false ], [String.fromCharCode(115,117,98,112,114,111,99,101,115,115,95,57,95,52,53,0),false ]]);
    let filledU = 4;
    let playershirtN = 0.0;
    let league8 = String.fromCharCode(114,95,56,56,95,112,101,105,114,115,0);
   if (constantsS.length < 5) {
       let inouttargetyellowA = String.fromCharCode(121,95,49,48,95,99,111,110,116,114,97,105,110,116,115,0);
       let scheduleW = 3.0;
       let ajaxM = String.fromCharCode(101,110,116,105,116,101,115,95,48,95,53,53,0);
       let libyoga2 = String.fromCharCode(110,95,53,50,95,104,97,110,100,115,104,97,107,101,0);
      while (libyoga2.includes(ajaxM)) {
          let bridgey = 3.0;
          let mapbufferL = 5.0;
          let upgradev = String.fromCharCode(109,97,100,101,95,109,95,55,50,0);
          let mbbannerD = String.fromCharCode(117,95,54,55,95,115,95,55,53,0);
          let awayplayerw = 4;
         ajaxM = `${(ajaxM == String.fromCharCode(56,0) ? ajaxM.length : parseInt(`${scheduleW}`))}`;
         bridgey -= awayplayerw;
         mapbufferL += parseFloat(`${mbbannerD.length >> (Math.min(5, Math.abs(parseInt(`${bridgey}`))))}`);
         upgradev = "3";
         mbbannerD += "1";
         awayplayerw -= 2 - mbbannerD.length;
         break;
      }
         ajaxM += `${ajaxM.length % (Math.max(3, libyoga2.length))}`;
         ajaxM = `${parseInt(`${scheduleW}`) >> (Math.min(Math.abs(2), 3))}`;
       let small3 = 0.0;
       let internetF = 3.0;
         inouttargetyellowA = `${parseInt(`${small3}`)}`;
      if (ajaxM == String.fromCharCode(66,0) && libyoga2 == String.fromCharCode(48,0)) {
         libyoga2 += `${3 & inouttargetyellowA.length}`;
      }
         internetF /= Math.max(parseFloat(`${inouttargetyellowA.length}`), 2);
         internetF -= (parseFloat(`${libyoga2 == String.fromCharCode(51,0) ? ajaxM.length : libyoga2.length}`));
         libyoga2 = `${(String.fromCharCode(103,0) == ajaxM ? ajaxM.length : libyoga2.length)}`;
       let predictionactiveY = new Map([[String.fromCharCode(116,121,112,101,95,111,95,52,50,0),329], [String.fromCharCode(116,104,111,117,115,97,110,100,115,95,51,95,53,50,0),49]]);
      if (4.64 > (internetF / 2.53)) {
         internetF -= parseFloat(`${parseInt(`${internetF}`) - 1}`);
      }
       let const_hK = String.fromCharCode(110,95,50,54,95,97,114,114,0);
       let mergerP = String.fromCharCode(100,117,115,116,95,119,95,49,52,0);
      iconbelli *= parseFloat(`${1 ^ parseInt(`${relatedl}`)}`);
   }
   for (let z = 0; z < 1; z++) {
      relatedl *= parseFloat(`${bingw.length}`);
   }
      constantsS = `${renewG.size}`;
   do {
      penaltygoal9 = awayiconl == String.fromCharCode(105,0);
      if (penaltygoal9 ? !penaltygoal9 : penaltygoal9) {
         break;
      }
   } while ((3 <= awayiconl.length && !penaltygoal9) && (penaltygoal9 ? !penaltygoal9 : penaltygoal9));
      windG = !windG;
       let modulesN = String.fromCharCode(100,95,54,57,95,99,104,97,110,0);
       let abidetectC = String.fromCharCode(108,101,116,116,101,114,95,97,95,49,55,0);
       let refreshborderlesse = String.fromCharCode(99,117,114,114,101,110,116,95,56,95,51,52,0);
      if (abidetectC == String.fromCharCode(80,0)) {
         refreshborderlesse += `${abidetectC.length}`;
      }
      do {
         refreshborderlesse += `${(refreshborderlesse == String.fromCharCode(54,0) ? abidetectC.length : refreshborderlesse.length)}`;
         if (refreshborderlesse.length == 3292245) {
            break;
         }
      } while ((refreshborderlesse.length == 3292245) && (refreshborderlesse.length <= 5));
      if (abidetectC.startsWith(`${modulesN.length}`)) {
          let searchbarx = 2;
          let libreanimateds = String.fromCharCode(105,110,116,114,97,95,53,95,55,53,0);
         modulesN += `${abidetectC.length}`;
         searchbarx |= (libreanimateds == String.fromCharCode(87,0) ? libreanimateds.length : searchbarx);
      }
      do {
          let libzeusR = 1.0;
          let mergerZ = String.fromCharCode(116,104,101,105,114,95,101,95,53,48,0);
         abidetectC = `${mergerZ.length}`;
         libzeusR -= parseInt(`${libzeusR}`);
         mergerZ = `${parseInt(`${libzeusR}`)}`;
         if (abidetectC == String.fromCharCode(49,51,56,51,0)) {
            break;
         }
      } while ((!refreshborderlesse.startsWith(abidetectC)) && (abidetectC == String.fromCharCode(49,51,56,51,0)));
         abidetectC += `${(modulesN == String.fromCharCode(72,0) ? modulesN.length : abidetectC.length)}`;
         refreshborderlesse = "2";
      do {
         modulesN += `${modulesN.length}`;
         if (String.fromCharCode(120,109,112,57,114,122,115,0) == modulesN) {
            break;
         }
      } while ((String.fromCharCode(120,109,112,57,114,122,115,0) == modulesN) && (modulesN.length >= 3));
         abidetectC += `${abidetectC.length | 1}`;
      while (refreshborderlesse.includes(`${abidetectC.length}`)) {
         refreshborderlesse = `${modulesN.length / (Math.max(5, refreshborderlesse.length))}`;
         break;
      }
      renewG[`${penaltygoal9}`] = bingw.length;
      constantsS += `${(parseInt(`${relatedl}`) >> (Math.min(1, Math.abs((windG ? 5 : 4)))))}`;
       let singaporeu = 5;
      for (let x = 0; x < 3; x++) {
         singaporeu &= singaporeu + singaporeu;
      }
      if ((4 * singaporeu) == 4 && 2 == (4 * singaporeu)) {
         singaporeu /= Math.max(singaporeu, 3);
      }
          let expandH = false;
          let helperG = new Map([[String.fromCharCode(109,100,97,116,101,95,51,95,50,53,0),761], [String.fromCharCode(122,95,51,50,95,99,97,108,99,119,0),765], [String.fromCharCode(108,111,116,116,105,101,107,101,121,112,97,116,104,95,97,95,50,54,0),498]]);
          let gifgoalp = [517, 189, 313];
         singaporeu += 1;
         expandH = (helperG.size ^ gifgoalp.length) < 20;
         helperG[`${gifgoalp.length}`] = gifgoalp.length;
      awayiconl = `${filledU}`;
      windG = awayiconl == constantsS;
      renewG = new Map([[constantsS, constantsS.length - parseInt(`${relatedl}`)]]);
   while (!bingw.includes(`${awayiconl.length}`)) {
       let crownT = String.fromCharCode(98,95,56,55,95,117,108,108,115,99,114,101,101,110,0);
       let starR = [904, 648, 15];
       let backE = new Map([[String.fromCharCode(108,101,97,118,105,110,103,95,113,95,56,0),875], [String.fromCharCode(99,95,49,95,100,101,112,101,110,100,0),732], [String.fromCharCode(110,111,104,101,97,100,101,114,95,49,95,53,50,0),479]]);
       let humidity5 = [585, 472, 791];
      do {
         crownT = "3";
         if (3301467 == crownT.length) {
            break;
         }
      } while ((3301467 == crownT.length) && (1 < starR.length));
      while (2 >= (backE.size | starR.length) || 4 >= (2 | backE.size)) {
         starR = [backE.size];
         break;
      }
         humidity5 = [2 ^ crownT.length];
      if (crownT.length >= 5) {
         crownT += `${starR.length >> (Math.min(Math.abs(1), 3))}`;
      }
      while (!crownT.startsWith(`${backE.size}`)) {
         crownT += `${starR.length >> (Math.min(Math.abs(2), 4))}`;
         break;
      }
         backE[crownT] = crownT.length / (Math.max(2, 9));
         humidity5 = [backE.size & crownT.length];
         starR.push(1 * backE.size);
      if (!Array.from(backE.values()).includes(humidity5.length)) {
         backE = new Map([[`${starR.length}`, crownT.length]]);
      }
         crownT = `${backE.size}`;
      do {
         humidity5.push(1);
         if (1050468 == humidity5.length) {
            break;
         }
      } while ((!Array.from(backE.keys()).includes(`${humidity5.length}`)) && (1050468 == humidity5.length));
      for (let b = 0; b < 3; b++) {
         crownT = `${2 + crownT.length}`;
      }
      awayiconl += `${(bingw == String.fromCharCode(76,0) ? starR.length : bingw.length)}`;
      break;
   }
   do {
       let ajax3 = [886, 8];
       let storel = String.fromCharCode(113,95,53,49,95,112,114,111,120,121,0);
       let historyb = false;
       let searchbar5 = String.fromCharCode(99,97,116,97,108,111,103,95,122,95,56,52,0);
         historyb = ajax3.length >= storel.length;
      do {
         historyb = storel.length > 85;
         if (historyb ? !historyb : historyb) {
            break;
         }
      } while ((!historyb && storel.length > 4) && (historyb ? !historyb : historyb));
       let defaultfootballbgf = String.fromCharCode(115,117,115,112,101,110,100,101,100,95,119,95,54,51,0);
       let tempnodatagifu = String.fromCharCode(107,95,51,51,95,114,101,118,105,115,105,111,110,0);
      do {
         ajax3 = [(String.fromCharCode(102,0) == tempnodatagifu ? tempnodatagifu.length : (historyb ? 2 : 4))];
         if (2566874 == ajax3.length) {
            break;
         }
      } while ((ajax3.length <= 4) && (2566874 == ajax3.length));
      while (defaultfootballbgf.length < searchbar5.length) {
         searchbar5 = `${ajax3.length}`;
         break;
      }
         storel += `${storel.length % (Math.max(2, 7))}`;
      do {
         tempnodatagifu += `${ajax3.length & 3}`;
         if (1190128 == tempnodatagifu.length) {
            break;
         }
      } while ((5 > tempnodatagifu.length) && (1190128 == tempnodatagifu.length));
      do {
         defaultfootballbgf += `${tempnodatagifu.length | searchbar5.length}`;
         if (defaultfootballbgf.length == 1439650) {
            break;
         }
      } while ((defaultfootballbgf.length == 1439650) && (5 <= defaultfootballbgf.length && storel.length <= 5));
      awayiconl += `${3 >> (Math.min(3, storel.length))}`;
      if (awayiconl.length == 1716733) {
         break;
      }
   } while ((awayiconl.length == 1716733) && (5 < awayiconl.length));
       let baiduadsM = new Map([[String.fromCharCode(106,95,54,49,95,117,116,116,111,110,0),String.fromCharCode(113,95,50,54,95,98,101,101,110,0)], [String.fromCharCode(107,95,55,52,95,100,105,115,116,111,114,116,105,111,110,0),String.fromCharCode(99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,95,51,95,57,0)], [String.fromCharCode(104,95,51,95,104,119,100,101,118,105,99,101,0),String.fromCharCode(112,111,105,110,116,111,99,116,95,51,95,56,51,0)]]);
       let appleU = String.fromCharCode(104,95,56,53,95,99,111,110,99,97,116,0);
         appleU = `${baiduadsM.size}`;
      if (!appleU.includes(`${baiduadsM.size}`)) {
         appleU += "3";
      }
         appleU = `${(String.fromCharCode(110,0) == appleU ? baiduadsM.size : appleU.length)}`;
      do {
         appleU += "1";
         if (appleU.length == 4616853) {
            break;
         }
      } while (((1 << (Math.min(1, Math.abs(baiduadsM.size)))) == 3 || (appleU.length << (Math.min(5, Math.abs(baiduadsM.size)))) == 1) && (appleU.length == 4616853));
       let componentregistryu = [487, 144, 389];
      while (baiduadsM[`${componentregistryu.length}`] != null) {
         componentregistryu = [baiduadsM.size];
         break;
      }
      constantsS = `${baiduadsM.size}`;

    clearTimeout(this.player.controlTimeout);
   if (3 >= bingw.length) {
      filledU += 3 >> (Math.min(Math.abs(parseInt(`${iconbelli}`)), 1));
   }
   for (let i = 0; i < 3; i++) {
       let macau7 = 4.0;
       let settingU = 3;
       let templateprocessor8 = String.fromCharCode(100,101,97,108,108,111,99,97,116,101,100,95,50,95,49,52,0);
          let yellow5 = String.fromCharCode(107,95,52,57,95,107,105,115,115,0);
          let productw = [269, 714, 463];
         settingU ^= (yellow5 == String.fromCharCode(78,0) ? yellow5.length : productw.length);
          let jingdongo = new Map([[String.fromCharCode(120,95,57,49,95,108,111,99,97,116,105,111,110,115,0),true ], [String.fromCharCode(114,101,97,108,116,105,109,101,95,53,95,56,51,0),true ], [String.fromCharCode(108,95,49,95,108,111,103,108,101,118,101,108,0),true ]]);
         templateprocessor8 += `${settingU / (Math.max(7, parseInt(`${macau7}`)))}`;
         jingdongo[`${jingdongo.size}`] = jingdongo.size;
      while (1 <= (templateprocessor8.length ^ 5)) {
         templateprocessor8 = `${settingU}`;
         break;
      }
          let vietnam3 = String.fromCharCode(97,108,108,111,119,95,98,95,55,55,0);
          let chatbotphotok = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,100,95,113,95,56,52,0);
         templateprocessor8 = `${(String.fromCharCode(48,0) == templateprocessor8 ? vietnam3.length : templateprocessor8.length)}`;
         vietnam3 = `${(chatbotphotok == String.fromCharCode(117,0) ? chatbotphotok.length : chatbotphotok.length)}`;
          let viewsi = [694, 685];
          let appsD = 1.0;
         macau7 *= parseFloat(`${parseInt(`${appsD}`) % (Math.max(parseInt(`${macau7}`), 10))}`);
         viewsi.push(viewsi.length);
         appsD -= parseFloat(`${viewsi.length % (Math.max(10, viewsi.length))}`);
       let imagenomoredatax = 2.0;
       let entryi = 5.0;
      while (1 < settingU) {
          let googled = String.fromCharCode(118,97,114,105,110,116,95,105,95,49,55,0);
         templateprocessor8 = `${(googled == String.fromCharCode(50,0) ? googled.length : parseInt(`${entryi}`))}`;
         break;
      }
      do {
         entryi *= parseInt(`${macau7}`);
         if (247716.0 == entryi) {
            break;
         }
      } while ((247716.0 == entryi) && (imagenomoredatax < 3.1));
          let androidR = 3.0;
          let reminderZ = 4.0;
          let downloadedq = 2.0;
         settingU <<= Math.min(1, Math.abs(parseInt(`${reminderZ}`)));
         androidR -= parseInt(`${androidR}`) & parseInt(`${downloadedq}`);
         downloadedq *= parseFloat(`${parseInt(`${downloadedq}`) | 1}`);
      relatedl /= Math.max(parseFloat(`${constantsS.length - bingw.length}`), 3);
   }
       let productv = String.fromCharCode(106,95,54,95,102,105,110,105,115,104,0);
       let iconviewergif9 = String.fromCharCode(100,111,97,108,108,95,106,95,49,48,48,0);
       let awayiconC = [String.fromCharCode(104,95,49,57,95,114,105,100,0), String.fromCharCode(99,111,114,114,95,97,95,55,56,0), String.fromCharCode(116,95,52,55,95,99,111,112,121,102,100,0)];
         awayiconC = [awayiconC.length & 3];
         iconviewergif9 = `${productv.length % 1}`;
          let libavdeviceR = 1.0;
         iconviewergif9 += `${productv.length << (Math.min(Math.abs(3), 4))}`;
         libavdeviceR *= parseFloat(`${parseInt(`${libavdeviceR}`) % (Math.max(parseInt(`${libavdeviceR}`), 9))}`);
      do {
         productv += "3";
         if (String.fromCharCode(102,116,117,106,56,120,0) == productv) {
            break;
         }
      } while ((2 <= (awayiconC.length << (Math.min(Math.abs(5), 3)))) && (String.fromCharCode(102,116,117,106,56,120,0) == productv));
          let pauseG = String.fromCharCode(119,95,56,56,95,98,97,115,105,115,0);
         iconviewergif9 = `${(String.fromCharCode(100,0) == iconviewergif9 ? awayiconC.length : iconviewergif9.length)}`;
         pauseG = `${pauseG.length / 2}`;
      for (let o = 0; o < 2; o++) {
          let chartS = String.fromCharCode(112,95,56,51,95,116,105,108,116,0);
          let iconnewsshareA = String.fromCharCode(114,101,111,114,100,101,114,101,100,95,54,95,53,54,0);
          let sided = String.fromCharCode(109,97,107,101,95,49,95,54,55,0);
         iconviewergif9 += `${3 * iconviewergif9.length}`;
         chartS += `${iconnewsshareA.length}`;
         iconnewsshareA = `${2 % (Math.max(8, sided.length))}`;
         sided += `${iconnewsshareA.length}`;
      }
         awayiconC = [productv.length];
          let footballtrophyp = false;
          let searchbar0 = String.fromCharCode(122,95,50,56,95,104,97,115,104,107,101,121,0);
         productv = `${(String.fromCharCode(84,0) == productv ? awayiconC.length : productv.length)}`;
         footballtrophyp = (((footballtrophyp ? 100 : searchbar0.length) / (Math.max(searchbar0.length, 8))) > 100);
         iconviewergif9 = `${awayiconC.length}`;
      awayiconl = `${productv.length / 1}`;
   if (windG) {
      iconbelli -= parseFloat(`${renewG.size}`);
   }
   if (5 >= (awayiconl.length | 2) && 4 >= (awayiconl.length - 2)) {
       let applew = false;
       let imagewatchlive_ = 5.0;
       let libffmpegkitP = String.fromCharCode(104,95,52,53,95,113,116,97,98,108,101,0);
      if (applew && 3.57 == (imagewatchlive_ / 4.39)) {
         applew = !applew;
      }
      for (let c = 0; c < 3; c++) {
          let placeholderO = String.fromCharCode(118,109,97,102,109,111,116,105,111,110,95,102,95,51,53,0);
          let philippinesw = 3;
          let mintegrali = 3;
         imagewatchlive_ *= (placeholderO == String.fromCharCode(66,0) ? libffmpegkitP.length : placeholderO.length);
         philippinesw -= mintegrali;
      }
      while (5 < (libffmpegkitP.length << (Math.min(Math.abs(4), 3))) || 4 < (4 + libffmpegkitP.length)) {
         imagewatchlive_ += parseInt(`${imagewatchlive_}`) & 2;
         break;
      }
      do {
          let loadingspinnerv = String.fromCharCode(115,95,49,95,104,108,105,116,0);
          let backiconmaskP = 2;
         imagewatchlive_ /= Math.max(((applew ? 1 : 5)), 3);
         loadingspinnerv = `${loadingspinnerv.length}`;
         backiconmaskP %= Math.max(5, 3 >> (Math.min(5, loadingspinnerv.length)));
         if (imagewatchlive_ == 3153841.0) {
            break;
         }
      } while ((imagewatchlive_ == 3153841.0) && (3 < (5 ^ libffmpegkitP.length)));
          let bannerx = String.fromCharCode(101,97,115,121,95,112,95,56,54,0);
          let mbbanner4 = new Map([[String.fromCharCode(117,99,104,97,114,95,121,95,53,51,0),552], [String.fromCharCode(102,95,52,52,95,101,100,105,116,0),360]]);
         imagewatchlive_ -= bannerx.length / (Math.max(3, 10));
         bannerx += `${mbbanner4.size + 1}`;
         mbbanner4[`${mbbanner4.size}`] = mbbanner4.size;
      relatedl /= Math.max((parseFloat(`${(windG ? 3 : 2) >> (Math.min(Math.abs(2), 3))}`)), 4);
   }
       let nativemoduleL = false;
       let guidea = 1.0;
          let banner6 = String.fromCharCode(112,99,98,105,110,102,111,95,119,95,50,53,0);
         guidea /= Math.max(parseFloat(`${1 * parseInt(`${guidea}`)}`), 4);
         banner6 = `${2 * banner6.length}`;
         guidea += parseFloat(`${1 * parseInt(`${guidea}`)}`);
         nativemoduleL = 46.45 == guidea;
      if (!nativemoduleL) {
         guidea -= (parseFloat(`${(nativemoduleL ? 4 : 1) + parseInt(`${guidea}`)}`));
      }
      if (!nativemoduleL) {
         nativemoduleL = guidea > 85.11;
      }
          let firebasem = String.fromCharCode(99,104,97,114,103,101,95,56,95,50,49,0);
          let bgvipsportL = [558, 260, 235];
          let webviewO = [String.fromCharCode(120,95,57,53,95,115,117,112,101,114,0), String.fromCharCode(115,101,108,101,99,116,105,110,103,95,111,95,56,52,0), String.fromCharCode(115,95,57,48,95,116,111,110,101,0)];
         nativemoduleL = webviewO.includes(bgvipsportL[bgvipsportL - 1]);
         firebasem = "3";
      penaltygoal9 = !nativemoduleL;
   if (awayiconl.length < filledU) {
       let settingsq = 3.0;
       let typesh = [153, 88];
      do {
         settingsq *= parseFloat(`${typesh.length % (Math.max(1, 4))}`);
         if (2209020.0 == settingsq) {
            break;
         }
      } while ((2209020.0 == settingsq) && (parseFloat(`${typesh.length}`) <= settingsq));
          let predictionactiveM = String.fromCharCode(99,111,110,118,101,114,115,97,116,105,111,110,95,104,95,51,52,0);
          let giftbuttonm = 5.0;
          let bellreminderM = String.fromCharCode(116,97,98,108,101,108,105,109,95,114,95,49,0);
         settingsq /= Math.max(1, parseFloat(`${predictionactiveM.length}`));
         predictionactiveM = `${parseInt(`${giftbuttonm}`)}`;
         giftbuttonm += parseFloat(`${2 & bellreminderM.length}`);
         bellreminderM += `${bellreminderM.length}`;
         typesh = [typesh.length];
       let security7 = 0;
       let refreshs = 1;
      for (let k = 0; k < 1; k++) {
         typesh.push(typesh.length - parseInt(`${settingsq}`));
      }
         typesh = [1 * parseInt(`${settingsq}`)];
      filledU %= Math.max(1, 1);
   }
      awayiconl = `${renewG.size}`;
      windG = constantsS.length == 56;
   if (filledU > renewG.size) {
       let v_hashu = new Map([[String.fromCharCode(114,95,54,54,95,116,104,114,101,101,100,111,115,116,114,0),153], [String.fromCharCode(118,95,51,56,95,105,101,110,116,114,121,0),178], [String.fromCharCode(112,95,48,95,120,109,108,115,0),829]]);
         v_hashu[`${v_hashu.size}`] = v_hashu.size;
          let hearte = 0.0;
          let termsn = new Map([[String.fromCharCode(122,95,52,53,95,115,109,106,112,101,103,0),167], [String.fromCharCode(102,95,51,51,95,113,112,98,105,116,115,0),256]]);
          let n_centerb = String.fromCharCode(112,95,53,95,116,109,105,120,0);
         v_hashu[`${hearte}`] = 3;
         hearte /= Math.max(3, parseFloat(`${termsn.size}`));
         termsn = new Map([[`${termsn.size}`, 1 + n_centerb.length]]);
         n_centerb += `${termsn.size / (Math.max(n_centerb.length, 5))}`;
      for (let v = 0; v < 3; v++) {
          let baseh = 4.0;
          let logor = 2.0;
          let smallv = String.fromCharCode(112,114,111,100,117,99,116,95,119,95,48,0);
          let styleC = String.fromCharCode(108,105,118,101,109,111,100,101,95,106,95,57,49,0);
         v_hashu[smallv] = (String.fromCharCode(85,0) == smallv ? smallv.length : parseInt(`${baseh}`));
         baseh /= Math.max(5, (styleC == String.fromCharCode(82,0) ? parseInt(`${logor}`) : styleC.length));
         logor *= parseInt(`${logor}`) - styleC.length;
      }
      renewG[`${iconbelli}`] = 1;
   }
   for (let v = 0; v < 1; v++) {
      renewG = new Map([[`${penaltygoal9}`, ((penaltygoal9 ? 4 : 1) >> (Math.min(Math.abs((windG ? 5 : 4)), 5)))]]);
   }
   while ((2 << (Math.min(1, constantsS.length))) > 1) {
      relatedl += parseFloat(`${3}`);
      break;
   }
      penaltygoal9 = bingw.length > 82;

  }

   
  resetControlTimeout() {
       let iconorientationY = String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,95,117,95,51,51,0);
    let yellowcirclebgY = false;
    let ballf = false;
    let action3 = 0.0;
    let libloggerg = true;
    let calendarq = 1.0;
    let star6 = false;
    let smallr = String.fromCharCode(105,112,112,108,101,95,54,95,52,55,0);
    let predictionl = [639, 390, 968];
    let iconcalendarE = String.fromCharCode(100,111,117,98,108,105,110,103,95,118,95,53,51,0);
      yellowcirclebgY = iconorientationY.startsWith(`${star6}`);
      calendarq -= parseFloat(`${2}`);
       let securityF = 3;
      while (securityF <= 1) {
         securityF |= securityF;
         break;
      }
      while ((securityF - securityF) == 3) {
          let libruntimeexecutorl = new Map([[String.fromCharCode(116,115,114,95,57,95,52,57,0),String.fromCharCode(102,115,112,112,95,119,95,56,53,0)], [String.fromCharCode(98,95,54,52,95,99,111,108,111,114,101,100,0),String.fromCharCode(97,118,102,105,108,116,101,114,114,101,115,95,116,95,57,52,0)]]);
         securityF &= 3;
         libruntimeexecutorl = new Map([[`${libruntimeexecutorl.size}`, 1 + libruntimeexecutorl.size]]);
         break;
      }
         securityF *= securityF;
      action3 *= 3 & securityF;
      libloggerg = iconorientationY == smallr;
      star6 = ballf || !star6;
   for (let f = 0; f < 3; f++) {
       let yellowvideoliveS = String.fromCharCode(105,110,99,114,101,109,101,110,116,97,108,95,55,95,51,50,0);
       let quest0 = [String.fromCharCode(111,95,56,55,95,103,122,105,112,112,101,100,0), String.fromCharCode(98,95,54,50,95,116,105,109,105,110,103,0)];
       let libsgcoreh = 1;
      while (libsgcoreh > 1) {
          let usernamee = String.fromCharCode(104,95,50,50,95,97,100,115,103,97,115,0);
          let libavutilI = new Map([[String.fromCharCode(116,100,115,99,95,103,95,53,48,0),380], [String.fromCharCode(114,95,53,48,95,99,117,101,115,0),620], [String.fromCharCode(118,95,56,48,95,98,103,112,104,99,104,101,99,107,0),622]]);
         quest0 = [2];
         usernamee += `${usernamee.length / (Math.max(6, libavutilI.size))}`;
         libavutilI[usernamee] = libavutilI.size & 2;
         break;
      }
         quest0 = [libsgcoreh << (Math.min(Math.abs(1), 3))];
      if (yellowvideoliveS.length >= 3) {
          let yellowd = String.fromCharCode(98,97,114,99,111,100,101,95,112,95,55,56,0);
          let layoutK = String.fromCharCode(102,95,55,49,95,98,97,99,107,103,114,111,117,110,100,105,110,103,0);
         quest0 = [libsgcoreh ^ 1];
         yellowd = "3";
         layoutK += `${(layoutK == String.fromCharCode(103,0) ? layoutK.length : yellowd.length)}`;
      }
      for (let q = 0; q < 2; q++) {
         libsgcoreh >>= Math.min(3, Math.abs(libsgcoreh));
      }
       let chartT = 2;
       let statisticsactiveH = 4;
      if (2 < (statisticsactiveH / (Math.max(5, 4))) && (5 / (Math.max(2, quest0.length))) < 3) {
          let stores = 0.0;
          let networkV = 2;
          let stepl = 0.0;
          let kuaishou8 = [938, 739];
          let footballfieldx = [750, 629, 843];
         quest0.push(networkV + parseInt(`${stores}`));
         stores -= parseFloat(`${footballfieldx.length + parseInt(`${stepl}`)}`);
         networkV &= footballfieldx.length;
         stepl += parseInt(`${stepl}`) + 3;
         kuaishou8 = [3 | footballfieldx.length];
      }
      for (let o = 0; o < 2; o++) {
          let icondefaultthumbnailL = [711, 678];
         yellowvideoliveS += `${yellowvideoliveS.length / (Math.max(5, quest0.length))}`;
         icondefaultthumbnailL = [icondefaultthumbnailL.length];
      }
       let clockg = false;
       let imagenomoredata8 = true;
         statisticsactiveH >>= Math.min(Math.abs(libsgcoreh), 3);
      libloggerg = !libloggerg;
   }
   for (let k = 0; k < 3; k++) {
       let fileP = 0.0;
       let yellowanimationlivej = true;
      if (fileP < 5.83) {
         yellowanimationlivej = !yellowanimationlivej;
      }
       let videocommon3 = String.fromCharCode(101,95,51,51,95,99,117,114,108,121,0);
       let moonA = String.fromCharCode(115,105,109,117,108,97,116,101,100,95,48,95,50,52,0);
      for (let o = 0; o < 3; o++) {
          let overlayv = true;
         moonA = `${moonA.length}`;
      }
      for (let y = 0; y < 1; y++) {
         yellowanimationlivej = !yellowanimationlivej || videocommon3.length <= 22;
      }
         fileP += videocommon3.length % (Math.max(moonA.length, 3));
         yellowanimationlivej = moonA == videocommon3;
      action3 += 3;
   }

    this.clearControlTimeout();
   do {
      calendarq /= Math.max((parseFloat(`${(yellowcirclebgY ? 5 : 2) | parseInt(`${action3}`)}`)), 4);
      if (4517050.0 == calendarq) {
         break;
      }
   } while ((yellowcirclebgY) && (4517050.0 == calendarq));
      star6 = (yellowcirclebgY ? !ballf : yellowcirclebgY);
      smallr = `${parseInt(`${action3}`)}`;
   if (1 <= smallr.length) {
      predictionl = [((star6 ? 4 : 1) << (Math.min(iconorientationY.length, 3)))];
   }
      star6 = 63.62 <= action3;
   for (let b = 0; b < 3; b++) {
      libloggerg = star6 && smallr.length <= 10;
   }
       let inouttargetredX = false;
       let dplus_ = String.fromCharCode(113,95,56,56,95,109,115,117,98,0);
       let previewP = String.fromCharCode(106,95,52,52,95,97,116,111,110,0);
      do {
         dplus_ += "2";
         if (dplus_ == String.fromCharCode(113,104,54,98,107,103,50,120,111,110,0)) {
            break;
         }
      } while ((dplus_ == String.fromCharCode(113,104,54,98,107,103,50,120,111,110,0)) && (1 >= dplus_.length || !inouttargetredX));
          let paget = true;
         inouttargetredX = previewP.length <= 5 && !inouttargetredX;
         paget = (!paget ? paget : !paget);
          let mbridgew = 3.0;
          let pausec = new Map([[String.fromCharCode(104,105,100,105,110,103,95,104,95,55,56,0),231], [String.fromCharCode(108,95,53,49,95,116,105,107,101,114,0),425]]);
         dplus_ = `${1 - pausec.size}`;
         mbridgew += parseFloat(`${3 * parseInt(`${mbridgew}`)}`);
         pausec[`${mbridgew}`] = 1 + parseInt(`${mbridgew}`);
          let otherX = String.fromCharCode(97,110,99,101,115,116,114,121,95,122,95,51,55,0);
          let main_ba = String.fromCharCode(110,95,50,52,95,115,105,108,107,0);
          let kick1 = 0;
         dplus_ = `${((inouttargetredX ? 1 : 4))}`;
         otherX = "1";
         main_ba += `${(String.fromCharCode(65,0) == main_ba ? otherX.length : main_ba.length)}`;
         kick1 += main_ba.length;
         dplus_ = "2";
      while (3 == previewP.length || inouttargetredX) {
          let footballfieldL = true;
          let membershipY = String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,115,95,103,95,52,55,0);
          let commentC = String.fromCharCode(101,95,50,55,95,98,108,97,107,101,0);
          let turndownJ = 4;
          let rankB = new Map([[String.fromCharCode(117,95,51,52,95,115,116,97,107,101,100,0),114], [String.fromCharCode(120,95,51,54,95,101,120,99,101,101,100,101,100,0),467]]);
         previewP += `${((inouttargetredX ? 2 : 4))}`;
         footballfieldL = 41 <= membershipY.length;
         membershipY = "1";
         commentC = `${commentC.length}`;
         turndownJ += 3;
         rankB = new Map([[`${rankB.size}`, rankB.size]]);
         break;
      }
          let window_3_b = 0.0;
          let configure5 = String.fromCharCode(102,105,116,115,95,103,95,54,56,0);
         previewP += "2";
         window_3_b -= parseInt(`${window_3_b}`) >> (Math.min(Math.abs(1), 2));
         configure5 = `${1 & parseInt(`${window_3_b}`)}`;
         inouttargetredX = dplus_.endsWith(`${inouttargetredX}`);
         inouttargetredX = (57 < ((!inouttargetredX ? previewP.length : 57) / (Math.max(2, previewP.length))));
      star6 = !smallr.startsWith(`${inouttargetredX}`);

    this.setControlTimeout();
   do {
      iconorientationY = `${parseInt(`${action3}`) % (Math.max(smallr.length, 9))}`;
      if (String.fromCharCode(102,50,56,101,120,0) == iconorientationY) {
         break;
      }
   } while ((iconorientationY.includes(`${smallr.length}`)) && (String.fromCharCode(102,50,56,101,120,0) == iconorientationY));
      smallr = `${parseInt(`${action3}`) - predictionl.length}`;
   while ((calendarq - 1.77) == 2.74 && !libloggerg) {
      calendarq *= parseFloat(`${3}`);
      break;
   }
       let basketballmatchdetailbgB = 2.0;
       let condensedE = new Map([[String.fromCharCode(110,95,49,52,95,99,97,108,99,117,108,97,116,111,114,0),384], [String.fromCharCode(115,111,102,116,116,104,114,101,115,104,95,110,95,55,48,0),271], [String.fromCharCode(116,101,120,116,117,114,101,100,95,122,95,49,57,0),933]]);
       let membership_ = new Map([[String.fromCharCode(112,114,105,111,114,105,116,105,101,115,95,51,95,50,0),String.fromCharCode(109,95,52,49,95,100,105,115,109,105,115,115,101,100,0)], [String.fromCharCode(115,116,114,116,97,103,95,109,95,57,55,0),String.fromCharCode(102,95,57,53,95,100,111,99,115,0)], [String.fromCharCode(112,105,112,101,108,105,110,101,95,110,95,52,0),String.fromCharCode(102,95,56,54,95,112,111,115,105,116,105,111,110,115,0)]]);
       let nativeexi = String.fromCharCode(103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,95,107,95,57,56,0);
         membership_ = new Map([[`${condensedE.size}`, parseInt(`${basketballmatchdetailbgB}`) ^ 2]]);
          let constantsm = 3.0;
          let filterl = 3.0;
         condensedE[`${basketballmatchdetailbgB}`] = membership_.size % (Math.max(2, parseInt(`${basketballmatchdetailbgB}`)));
         constantsm /= Math.max(3, parseFloat(`${parseInt(`${constantsm}`) << (Math.min(1, Math.abs(2)))}`));
         filterl -= parseInt(`${constantsm}`);
         condensedE = new Map([[`${membership_.size}`, 1 % (Math.max(10, nativeexi.length))]]);
      for (let y = 0; y < 2; y++) {
          let whistleorangev = 5.0;
         basketballmatchdetailbgB /= Math.max(1, parseFloat(`${3}`));
         whistleorangev *= parseFloat(`${3}`);
      }
      for (let m = 0; m < 2; m++) {
         nativeexi = `${1 & nativeexi.length}`;
      }
         condensedE[nativeexi] = 2;
      if ((nativeexi.length & membership_.size) == 5) {
         membership_ = new Map([[`${basketballmatchdetailbgB}`, 3 % (Math.max(3, nativeexi.length))]]);
      }
      for (let a = 0; a < 2; a++) {
         basketballmatchdetailbgB -= parseFloat(`${parseInt(`${basketballmatchdetailbgB}`)}`);
      }
      predictionl = [((libloggerg ? 1 : 4) / (Math.max(8, (ballf ? 4 : 1))))];
   while ((4 - predictionl.length) <= 2) {
       let matchu = String.fromCharCode(118,95,54,48,95,118,112,105,116,120,102,109,0);
      do {
          let yellowvideoliveZ = false;
          let arrowselectdownr = String.fromCharCode(103,95,50,49,95,111,109,112,111,115,101,0);
          let homeloadingJ = String.fromCharCode(109,95,52,56,95,109,98,102,105,108,116,101,114,0);
          let iconsaveimageO = 4.0;
         matchu += `${((yellowvideoliveZ ? 2 : 5) * 2)}`;
         yellowvideoliveZ = 27 > homeloadingJ.length;
         arrowselectdownr += `${homeloadingJ.length >> (Math.min(4, Math.abs(parseInt(`${iconsaveimageO}`))))}`;
         iconsaveimageO *= homeloadingJ.length * arrowselectdownr.length;
         if (String.fromCharCode(120,108,105,118,95,110,108,55,55,54,0) == matchu) {
            break;
         }
      } while ((matchu.length <= 4) && (String.fromCharCode(120,108,105,118,95,110,108,55,55,54,0) == matchu));
      for (let n = 0; n < 2; n++) {
         matchu = `${matchu.length | 1}`;
      }
         matchu += `${(matchu == String.fromCharCode(115,0) ? matchu.length : matchu.length)}`;
      predictionl = [parseInt(`${calendarq}`)];
      break;
   }
   do {
      smallr = `${predictionl.length}`;
      if (4050447 == smallr.length) {
         break;
      }
   } while ((smallr.length >= 1) && (4050447 == smallr.length));
   do {
      action3 += 3;
      if (action3 == 200671.0) {
         break;
      }
   } while ((action3 == 200671.0) && ((action3 / 1.87) >= 2.30));

  }

   
  hideControlAnimation() {
       let mutedx = String.fromCharCode(119,95,56,49,95,116,114,97,110,115,112,111,115,101,120,0);
    let othermatchdetailbgt = String.fromCharCode(115,95,52,50,95,102,100,101,99,0);
    let logouserk = 4;
    let hongkongH = String.fromCharCode(109,95,49,51,95,118,101,114,105,102,105,101,100,0);
    let updates4 = 2.0;
    let yellowanimationliveO = false;
    let componentb = 1;
    let networkM = String.fromCharCode(101,103,97,99,121,95,113,95,50,55,0);
    let gifgoal8 = 2;
    let specz = String.fromCharCode(115,104,111,119,119,97,118,101,115,95,101,95,57,54,0);
      hongkongH += `${mutedx.length % 2}`;
   while (yellowanimationliveO || mutedx.length >= 1) {
       let customr = 5.0;
       let yellowredcardd = [284, 724, 502];
       let holders = 1.0;
       let ping9 = 0;
       let viewerF = false;
      while (!yellowredcardd.includes(holders)) {
          let disconnectedlogof = 2;
          let saveL = 3;
          let greytickd = 4.0;
         yellowredcardd = [parseInt(`${greytickd}`) << (Math.min(1, Math.abs(3)))];
         disconnectedlogof %= Math.max(1, saveL);
         saveL <<= Math.min(4, Math.abs(disconnectedlogof));
         greytickd *= parseFloat(`${saveL & 2}`);
         break;
      }
          let greyarrowupD = 1.0;
          let aboutu = 2;
          let analyticsI = String.fromCharCode(122,95,57,49,95,105,110,112,117,116,121,0);
         viewerF = ping9 > 59;
         greyarrowupD += aboutu;
         aboutu <<= Math.min(4, Math.abs(1 & analyticsI.length));
         analyticsI += `${analyticsI.length / 3}`;
      if ((holders * 4.32) >= 5.38 && 4.32 >= (holders * parseFloat(`${ping9}`))) {
         holders += (parseFloat(`${(viewerF ? 1 : 4) / (Math.max(parseInt(`${customr}`), 6))}`));
      }
      if ((holders / 1.9) < 1.7) {
         holders *= parseFloat(`${3 ^ parseInt(`${holders}`)}`);
      }
      if ((customr - holders) == 5.73) {
         customr /= Math.max(3, 5);
      }
      while ((1 | ping9) >= 1 && viewerF) {
          let statsnomoredatad = String.fromCharCode(97,117,116,111,114,101,109,111,118,101,95,112,95,49,51,0);
          let apps2 = [String.fromCharCode(103,95,56,57,95,117,110,105,118,101,114,115,97,108,0), String.fromCharCode(112,105,101,95,119,95,55,56,0), String.fromCharCode(121,95,49,57,95,119,101,98,112,97,103,101,0)];
         viewerF = statsnomoredatad.length >= 8 && 8 >= ping9;
         statsnomoredatad = `${apps2.length}`;
         apps2.push(apps2.length << (Math.min(Math.abs(3), 1)));
         break;
      }
      if ((2 - ping9) > 2 || ping9 > 2) {
          let whitebellr = 0.0;
          let filedD = String.fromCharCode(121,95,56,49,95,108,97,121,111,117,116,0);
          let progressU = [223, 147, 638];
          let combinedV = 3.0;
          let usernameg = String.fromCharCode(114,101,99,116,97,110,103,108,101,115,95,113,95,54,51,0);
         viewerF = ping9 < usernameg.length;
         whitebellr *= parseFloat(`${filedD.length / (Math.max(1, 9))}`);
         filedD = "1";
         progressU.push(parseInt(`${combinedV}`) ^ progressU.length);
         combinedV /= Math.max(4, filedD.length - 2);
         usernameg += `${filedD.length >> (Math.min(4, progressU.length))}`;
      }
         holders /= Math.max(4, parseFloat(`${parseInt(`${customr}`) & 2}`));
         ping9 &= yellowredcardd.length | parseInt(`${holders}`);
      if (4.46 >= customr) {
         yellowredcardd.push((parseInt(`${customr}`) & (viewerF ? 4 : 2)));
      }
         customr -= ping9;
      do {
         customr *= 1 % (Math.max(10, yellowredcardd.length));
         if (customr == 3478773.0) {
            break;
         }
      } while ((customr == 3478773.0) && (viewerF));
      while ((ping9 | 3) == 2 && !viewerF) {
          let filterv = String.fromCharCode(114,95,57,56,95,114,101,99,118,102,114,111,109,0);
          let ready = [523, 604, 307];
         viewerF = String.fromCharCode(98,0) == filterv;
         filterv = "1";
         ready.push(1);
         break;
      }
      while (customr < 5.25) {
          let fullQ = String.fromCharCode(112,95,51,54,95,100,118,98,115,117,98,0);
         holders /= Math.max(5, parseFloat(`${yellowredcardd.length}`));
         fullQ = `${(String.fromCharCode(67,0) == fullQ ? fullQ.length : fullQ.length)}`;
         break;
      }
         viewerF = yellowredcardd.length == 23;
      yellowanimationliveO = !hongkongH.endsWith(`${customr}`);
      break;
   }

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
   while (mutedx.startsWith(`${othermatchdetailbgt.length}`)) {
      othermatchdetailbgt += `${hongkongH.length ^ othermatchdetailbgt.length}`;
      break;
   }
   for (let f = 0; f < 1; f++) {
      networkM = `${3 - othermatchdetailbgt.length}`;
   }

  }

   
  showControlAnimation() {
       let singlel = 4.0;
    let imagemanagerL = 3.0;
    let referrerg = new Map([[String.fromCharCode(122,95,55,54,95,100,109,97,98,117,102,0),710], [String.fromCharCode(119,95,52,51,95,111,110,101,111,102,0),603]]);
    let foundy = String.fromCharCode(103,95,54,56,95,99,111,110,110,101,99,116,0);
    let suboutL = [838, 307];
    let iconlogout1 = String.fromCharCode(99,95,48,95,114,101,115,101,116,0);
    let codek = String.fromCharCode(119,95,49,53,95,112,111,112,117,112,115,0);
    let libavfilterz = [313, 972];
      iconlogout1 = `${codek.length}`;
   do {
      foundy = "1";
      if (foundy == String.fromCharCode(119,118,109,102,52,0)) {
         break;
      }
   } while (((imagemanagerL / 2.96) >= 4.66) && (foundy == String.fromCharCode(119,118,109,102,52,0)));

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
      imagemanagerL -= parseFloat(`${foundy.length & parseInt(`${singlel}`)}`);
      iconlogout1 += `${parseInt(`${imagemanagerL}`)}`;

  }

   
  loadAnimation() {
       let predictionarroww = 2.0;
    let halffieldimager = [String.fromCharCode(112,111,108,113,97,95,121,95,51,53,0), String.fromCharCode(99,95,56,55,95,112,117,116,98,121,116,101,0), String.fromCharCode(122,95,54,48,95,109,97,99,104,105,110,101,0)];
    let catalogn = 0.0;
    let libpangleflippedb = String.fromCharCode(99,95,55,95,100,105,114,0);
    let sliderN = new Map([[String.fromCharCode(119,95,53,52,95,117,116,118,105,100,101,111,100,115,112,0),852], [String.fromCharCode(99,95,52,55,95,107,101,121,103,101,110,0),16], [String.fromCharCode(102,97,105,108,117,114,101,95,116,95,51,57,0),796]]);
    let statisticsinactives = String.fromCharCode(121,95,57,54,95,103,116,101,115,116,0);
    let stara = 0.0;
    let castinga = 3;
    let desc9 = String.fromCharCode(120,95,51,95,99,97,112,97,98,105,108,105,116,121,0);
    let changeZ = 5;
    let rulese = String.fromCharCode(100,95,50,95,119,102,101,120,0);
      halffieldimager = [castinga % (Math.max(1, parseInt(`${catalogn}`)))];
   for (let d = 0; d < 1; d++) {
      halffieldimager.push(libpangleflippedb.length % (Math.max(10, desc9.length)));
   }
       let roundh = 0.0;
       let iconshare8 = 4.0;
      if (2.98 < (5.64 + roundh)) {
          let reddownarrow3 = [String.fromCharCode(114,101,99,111,114,100,97,98,108,101,95,50,95,52,55,0), String.fromCharCode(97,99,99,95,48,95,56,57,0)];
          let watchg = 5.0;
          let borderlessV = new Map([[String.fromCharCode(120,95,52,54,95,114,101,102,105,110,101,0),42], [String.fromCharCode(98,95,53,56,95,99,111,109,112,114,101,115,115,101,100,0),277], [String.fromCharCode(97,116,116,97,99,107,95,119,95,54,50,0),946]]);
          let libswscaleP = true;
          let sliderJ = String.fromCharCode(112,114,105,118,97,116,101,95,121,95,49,49,0);
         roundh -= (parseFloat(`${(libswscaleP ? 4 : 5) / (Math.max(borderlessV.size, 8))}`));
         reddownarrow3 = [1];
         watchg -= parseFloat(`${1}`);
         borderlessV = new Map([[sliderJ, parseInt(`${watchg}`)]]);
         libswscaleP = watchg == parseFloat(`${reddownarrow3.length}`);
         sliderJ = `${(String.fromCharCode(71,0) == sliderJ ? parseInt(`${watchg}`) : sliderJ.length)}`;
      }
      for (let r = 0; r < 2; r++) {
         roundh *= parseFloat(`${parseInt(`${iconshare8}`)}`);
      }
      desc9 = `${castinga * 1}`;

    if (this.state.loading) {

   for (let b = 0; b < 1; b++) {
      catalogn -= parseFloat(`${2}`);
   }
   for (let x = 0; x < 3; x++) {
      changeZ |= parseInt(`${stara}`);
   }
       let langS = 5.0;
          let libreactperfloggerjniD = String.fromCharCode(115,116,97,114,116,101,100,95,120,95,55,52,0);
          let libsentryG = true;
          let searchu = [731, 577];
         langS *= parseFloat(`${parseInt(`${langS}`)}`);
         libreactperfloggerjniD = `${((libsentryG ? 2 : 1))}`;
         libsentryG = (libreactperfloggerjniD.length & searchu.length) >= 100;
         searchu = [1];
         langS -= parseFloat(`${2 * parseInt(`${langS}`)}`);
         langS += parseFloat(`${parseInt(`${langS}`)}`);
      libpangleflippedb = `${2 % (Math.max(5, sliderN.size))}`;
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
   do {
      desc9 = `${parseInt(`${catalogn}`) & 3}`;
      if (desc9.length == 3924107) {
         break;
      }
   } while ((desc9.length == 3924107) && ((changeZ | desc9.length) > 2));
      statisticsinactives = `${castinga}`;
      changeZ |= 1;

    }
  }

   
  _hideControls() {
       let vietnamz = false;
    let unimplementedviewf = String.fromCharCode(98,95,50,95,111,118,101,114,104,101,97,100,0);
    let libreactperfloggerjnih = String.fromCharCode(97,100,97,112,116,101,100,95,117,95,54,0);
    let detailso = String.fromCharCode(114,101,105,109,112,111,114,116,95,114,95,52,50,0);
    let update_o5m = 3.0;
    let googlel = 5.0;
    let shirtN = 5;
   do {
       let smallbrightnesse = 1.0;
       let arrowdowni = false;
       let awayplayerb = 0;
       let subtextz = 4;
       let weatherM = [78, 410, 385];
       let libavutilV = [320, 599];
         libavutilV = [3];
      for (let f = 0; f < 3; f++) {
          let final_ryw = 1.0;
          let reactnativejsG = 1.0;
         libavutilV = [awayplayerb + parseInt(`${smallbrightnesse}`)];
         final_ryw /= Math.max(3, 3);
         reactnativejsG += parseFloat(`${parseInt(`${final_ryw}`)}`);
      }
         awayplayerb *= awayplayerb;
      while (libavutilV.includes(weatherM.length)) {
         weatherM.push(1);
         break;
      }
          let iconclosewhitebgH = [265, 133, 194];
          let router6 = 5.0;
         weatherM.push(1 - parseInt(`${smallbrightnesse}`));
         iconclosewhitebgH.push(1 + iconclosewhitebgH.length);
         router6 += iconclosewhitebgH.length % 3;
      if ((subtextz & libavutilV.length) == 2 && 1 == (subtextz & 2)) {
         libavutilV.push(weatherM.length);
      }
      if (1 == (awayplayerb + subtextz) || 4 == (awayplayerb + 1)) {
         subtextz <<= Math.min(Math.abs((parseInt(`${smallbrightnesse}`) * (arrowdowni ? 1 : 2))), 1);
      }
      while (weatherM.includes(subtextz)) {
          let graphicsJ = new Map([[String.fromCharCode(97,112,112,97,114,101,110,116,95,55,95,53,55,0),109], [String.fromCharCode(99,111,109,112,108,101,116,101,100,95,112,95,56,48,0),698], [String.fromCharCode(114,95,50,53,95,97,99,99,114,117,101,0),265]]);
          let privacy_ = String.fromCharCode(117,95,56,48,95,100,101,99,114,101,102,0);
          let clockT = [396, 142, 311];
          let homeinactiveA = 0.0;
         weatherM = [parseInt(`${smallbrightnesse}`)];
         graphicsJ[`${privacy_}`] = 3;
         privacy_ = `${parseInt(`${homeinactiveA}`) / (Math.max(clockT.length, 4))}`;
         clockT.push(privacy_.length);
         homeinactiveA -= parseFloat(`${parseInt(`${homeinactiveA}`) | 2}`);
         break;
      }
      do {
          let airbnbstarselectedE = false;
          let notificationfillemptyr = String.fromCharCode(110,116,114,111,95,57,95,51,51,0);
          let emojiheartN = 1.0;
          let dycreatorW = new Map([[String.fromCharCode(117,114,118,101,95,121,95,49,52,0),false ], [String.fromCharCode(111,95,54,56,95,112,114,111,99,101,115,115,111,114,0),false ], [String.fromCharCode(118,115,110,112,114,105,110,116,102,95,111,95,57,50,0),true ]]);
         subtextz ^= dycreatorW.size % (Math.max(3, libavutilV.length));
         airbnbstarselectedE = notificationfillemptyr.length <= 82;
         notificationfillemptyr += "2";
         emojiheartN *= ((airbnbstarselectedE ? 4 : 3));
         dycreatorW = new Map([[`${airbnbstarselectedE}`, parseInt(`${emojiheartN}`) + 1]]);
         if (733322 == subtextz) {
            break;
         }
      } while ((733322 == subtextz) && (1 == subtextz));
         awayplayerb &= weatherM.length & 3;
          let morez = String.fromCharCode(110,95,52,54,95,115,99,97,108,97,114,0);
          let executorP = String.fromCharCode(112,108,117,114,97,108,105,122,101,100,95,57,95,52,50,0);
         subtextz &= (executorP == String.fromCharCode(75,0) ? subtextz : executorP.length);
         morez += `${(morez == String.fromCharCode(97,0) ? morez.length : morez.length)}`;
      update_o5m += parseFloat(`${unimplementedviewf.length}`);
      if (update_o5m == 1726981.0) {
         break;
      }
   } while ((update_o5m == 1726981.0) && (!vietnamz));
   if (shirtN <= googlel) {
       let privilegeN = 0;
       let attributedstringM = [33, 760];
       let rocketi = String.fromCharCode(99,97,110,99,101,108,108,101,100,95,116,95,57,50,0);
       let libjsinspectorT = true;
       let expiredh = String.fromCharCode(102,111,110,116,115,105,122,101,95,117,95,50,57,0);
      while (expiredh.includes(`${libjsinspectorT}`)) {
         expiredh += `${(rocketi == String.fromCharCode(107,0) ? rocketi.length : attributedstringM.length)}`;
         break;
      }
          let station9 = new Map([[String.fromCharCode(119,95,52,50,95,115,101,115,115,105,111,110,115,0),String.fromCharCode(109,95,52,54,95,106,115,111,110,0)], [String.fromCharCode(104,97,114,100,119,97,114,101,95,118,95,51,55,0),String.fromCharCode(116,95,52,56,95,53,95,49,0)]]);
          let subtextu = 3.0;
         privilegeN >>= Math.min(Math.abs(1), 3);
         station9[`${subtextu}`] = parseInt(`${subtextu}`) / (Math.max(4, station9.size));
       let imageactionlivek = String.fromCharCode(103,115,116,114,105,110,103,95,121,95,49,50,0);
       let refreshborderlessn = String.fromCharCode(101,95,57,53,95,111,112,101,110,115,115,108,118,0);
         expiredh = "1";
       let interstitialm = 2;
         rocketi = `${expiredh.length}`;
      if ((imageactionlivek.length << (Math.min(Math.abs(2), 5))) > 5 && (2 << (Math.min(4, attributedstringM.length))) > 2) {
          let shirtE = String.fromCharCode(112,95,53,52,95,112,114,111,98,97,98,105,108,105,116,105,101,115,0);
          let basketballicon9 = 0.0;
          let usernameW = 0.0;
          let windW = 0.0;
          let buildL = [529, 818];
         imageactionlivek = `${(imageactionlivek == String.fromCharCode(120,0) ? imageactionlivek.length : interstitialm)}`;
         shirtE += `${buildL.length * 1}`;
         basketballicon9 /= Math.max(parseFloat(`${2}`), 1);
         usernameW += parseInt(`${basketballicon9}`);
         windW *= parseInt(`${usernameW}`);
         buildL = [2 >> (Math.min(Math.abs(parseInt(`${basketballicon9}`)), 1))];
      }
         libjsinspectorT = rocketi.endsWith(`${libjsinspectorT}`);
         rocketi += `${((libjsinspectorT ? 3 : 2) & interstitialm)}`;
      for (let n = 0; n < 3; n++) {
         attributedstringM.push(3);
      }
          let target0 = new Map([[String.fromCharCode(105,112,99,95,115,95,49,56,0),false ], [String.fromCharCode(100,95,56,56,95,112,101,114,109,105,115,115,105,111,110,115,0),true ], [String.fromCharCode(104,95,52,56,95,116,114,97,115,104,111,108,100,0),false ]]);
         interstitialm >>= Math.min(Math.abs(3), 5);
         target0[`${target0.size}`] = target0.size;
         expiredh += `${expiredh.length % (Math.max(2, 7))}`;
      for (let u = 0; u < 2; u++) {
         rocketi = `${(privilegeN >> (Math.min(4, Math.abs((libjsinspectorT ? 3 : 1)))))}`;
      }
       let sellH = [936, 260, 545];
         interstitialm %= Math.max(3, rocketi.length);
      googlel *= parseFloat(`${unimplementedviewf.length ^ parseInt(`${update_o5m}`)}`);
   }
   while (shirtN >= 4) {
      shirtN -= 2 & detailso.length;
      break;
   }

    if (this.mounted) {

   if (5 > (detailso.length % 5)) {
       let mnews0 = new Map([[String.fromCharCode(118,105,115,105,116,111,114,95,57,95,53,51,0),String.fromCharCode(105,110,115,116,114,117,109,101,110,116,97,116,105,111,110,95,119,95,50,57,0)], [String.fromCharCode(113,95,51,56,95,100,105,112,111,115,97,98,108,101,0),String.fromCharCode(117,110,115,117,112,112,111,114,116,101,100,95,108,95,56,56,0)], [String.fromCharCode(103,95,51,55,95,119,105,110,101,114,114,110,111,0),String.fromCharCode(99,111,108,117,109,110,115,95,120,95,54,50,0)]]);
       let yellow0 = String.fromCharCode(103,114,97,110,116,95,105,95,53,55,0);
       let topont = 1.0;
      for (let z = 0; z < 1; z++) {
          let whitevideoliveu = 0.0;
         topont /= Math.max(parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${whitevideoliveu}`)), 4))}`), 3);
      }
      for (let j = 0; j < 3; j++) {
         yellow0 += `${2 + yellow0.length}`;
      }
       let read8 = [189, 949, 307];
       let libturbomodulejsijni1 = [String.fromCharCode(97,95,51,52,95,112,108,97,110,97,114,116,111,121,117,121,0), String.fromCharCode(116,97,105,108,115,95,122,95,52,53,0), String.fromCharCode(119,97,116,99,104,95,97,95,53,48,0)];
         yellow0 += `${mnews0.size - 3}`;
       let verticale = 2;
      for (let p = 0; p < 1; p++) {
         yellow0 += `${verticale}`;
      }
         libturbomodulejsijni1 = [1 - read8.length];
      for (let y = 0; y < 1; y++) {
          let indexb = 2.0;
          let predictionarrowm = false;
         yellow0 += `${((predictionarrowm ? 1 : 2) / (Math.max(10, parseInt(`${indexb}`))))}`;
      }
      for (let k = 0; k < 2; k++) {
          let whitevideoliveV = false;
          let turndown4 = 4;
          let constantsC = 4.0;
         topont += parseFloat(`${2 | libturbomodulejsijni1.length}`);
         whitevideoliveV = !whitevideoliveV;
         turndown4 %= Math.max(parseInt(`${constantsC}`) ^ 1, 2);
         constantsC += parseInt(`${constantsC}`) >> (Math.min(5, Math.abs(3)));
      }
      detailso += "1";
   }
   for (let b = 0; b < 1; b++) {
      detailso = `${parseInt(`${update_o5m}`) | 3}`;
   }
      vietnamz = detailso.length < 68;
      let state = this.state;
   if (unimplementedviewf == String.fromCharCode(88,0)) {
      detailso += `${(String.fromCharCode(115,0) == detailso ? detailso.length : parseInt(`${update_o5m}`))}`;
   }
      update_o5m *= parseFloat(`${shirtN}`);
      libreactperfloggerjnih = `${(String.fromCharCode(118,0) == detailso ? shirtN : detailso.length)}`;

      state.showControls = false;
   do {
      vietnamz = !vietnamz;
      if (vietnamz ? !vietnamz : vietnamz) {
         break;
      }
   } while ((vietnamz ? !vietnamz : vietnamz) && (detailso.length == 3 && vietnamz));
   if (2.90 > googlel) {
      unimplementedviewf += `${parseInt(`${update_o5m}`) | parseInt(`${googlel}`)}`;
   }
   if (libreactperfloggerjnih.length <= 1) {
       let unfillQ = 3.0;
       let d_playerN = String.fromCharCode(104,95,57,52,95,115,104,111,119,119,97,118,101,115,112,105,99,0);
       let main_qB = String.fromCharCode(122,95,57,57,95,116,114,116,97,98,108,101,0);
       let soundT = String.fromCharCode(113,95,49,50,95,114,101,118,97,108,105,100,97,116,101,0);
       let prediction3 = String.fromCharCode(118,105,111,108,97,116,105,111,110,95,55,95,54,0);
      do {
          let backiconmaskd = String.fromCharCode(101,95,51,55,0);
         prediction3 = `${(prediction3 == String.fromCharCode(56,0) ? prediction3.length : d_playerN.length)}`;
         backiconmaskd = `${(backiconmaskd == String.fromCharCode(71,0) ? backiconmaskd.length : backiconmaskd.length)}`;
         if (String.fromCharCode(57,117,55,103,113,53,0) == prediction3) {
            break;
         }
      } while ((String.fromCharCode(57,117,55,103,113,53,0) == prediction3) && (1.6 >= (unfillQ / (Math.max(5, prediction3.length))) && 2 >= (parseInt(`${unfillQ}`) / (Math.max(prediction3.length, 7)))));
      if (!soundT.endsWith(main_qB)) {
         soundT = `${prediction3.length + 3}`;
      }
       let policym = 3.0;
          let codeg = false;
         main_qB += `${soundT.length}`;
         codeg = !codeg;
      do {
          let containerW = 0.0;
         d_playerN += `${3 * parseInt(`${unfillQ}`)}`;
         containerW += 3;
         if (String.fromCharCode(115,95,114,48,97,50,100,54,52,109,0) == d_playerN) {
            break;
         }
      } while ((String.fromCharCode(115,95,114,48,97,50,100,54,52,109,0) == d_playerN) && ((unfillQ * 3.46) == 2.63 && (3.46 * unfillQ) == 5.88));
      if (prediction3 != String.fromCharCode(86,0)) {
         d_playerN = `${main_qB.length}`;
      }
      for (let j = 0; j < 3; j++) {
         policym *= prediction3.length << (Math.min(Math.abs(1), 1));
      }
          let rocketl = String.fromCharCode(105,95,56,52,95,97,118,102,109,116,0);
          let iconscheduleW = 5.0;
          let iconnewchatI = 0.0;
         main_qB = `${parseInt(`${policym}`)}`;
         rocketl = `${1 << (Math.min(Math.abs(parseInt(`${iconnewchatI}`)), 1))}`;
         iconscheduleW *= parseFloat(`${parseInt(`${iconnewchatI}`)}`);
         prediction3 = `${d_playerN.length}`;
         policym -= (String.fromCharCode(79,0) == d_playerN ? d_playerN.length : soundT.length);
      while (1 > (1 ^ soundT.length) && (1 + soundT.length) > 5) {
          let awayicon2 = 1.0;
          let libfby = true;
          let taiwanm = 5.0;
          let guided = String.fromCharCode(112,114,111,112,101,114,121,95,121,95,53,55,0);
         unfillQ /= Math.max(parseInt(`${taiwanm}`) / (Math.max(guided.length, 6)), 1);
         awayicon2 *= (parseFloat(`${(libfby ? 3 : 2) % (Math.max(parseInt(`${awayicon2}`), 10))}`));
         libfby = !libfby;
         taiwanm /= Math.max(parseFloat(`${parseInt(`${awayicon2}`) & 2}`), 1);
         guided += `${(parseInt(`${awayicon2}`) / (Math.max(1, (libfby ? 1 : 4))))}`;
         break;
      }
      do {
         prediction3 = `${(String.fromCharCode(69,0) == prediction3 ? prediction3.length : parseInt(`${unfillQ}`))}`;
         if (String.fromCharCode(110,52,51,100,0) == prediction3) {
            break;
         }
      } while ((String.fromCharCode(110,52,51,100,0) == prediction3) && (2 >= (prediction3.length / (Math.max(2, 10))) || (policym * 2.42) >= 1.52));
         main_qB = `${(main_qB == String.fromCharCode(71,0) ? parseInt(`${unfillQ}`) : main_qB.length)}`;
         soundT += `${prediction3.length}`;
       let homeactiveo = String.fromCharCode(105,95,52,50,95,114,101,109,105,120,105,110,103,0);
      unimplementedviewf = `${prediction3.length}`;
   }

      this.hideControlAnimation();
       let hookY = 2;
       let uimanagery = String.fromCharCode(106,111,98,95,50,95,51,54,0);
          let armvaR = String.fromCharCode(98,108,97,99,107,95,113,95,52,54,0);
          let logousery = 5;
          let predictionactive4 = String.fromCharCode(99,95,56,51,95,100,111,99,107,101,114,0);
         hookY |= 3;
         armvaR = `${logousery << (Math.min(Math.abs(2), 1))}`;
         logousery <<= Math.min(3, Math.abs((String.fromCharCode(117,0) == predictionactive4 ? predictionactive4.length : logousery)));
      for (let x = 0; x < 3; x++) {
         hookY /= Math.max(2 - hookY, 2);
      }
      for (let h = 0; h < 2; h++) {
         hookY >>= Math.min(uimanagery.length, 2);
      }
      while (1 < (hookY - uimanagery.length)) {
         hookY -= (uimanagery == String.fromCharCode(98,0) ? uimanagery.length : hookY);
         break;
      }
       let greyr = String.fromCharCode(98,101,110,99,104,109,97,114,107,95,101,95,51,55,0);
       let profileactiveH = String.fromCharCode(105,110,99,111,109,105,110,103,95,117,95,50,54,0);
      while (profileactiveH == greyr) {
         greyr += `${greyr.length % 1}`;
         break;
      }
      shirtN ^= unimplementedviewf.length;
      libreactperfloggerjnih += `${3 ^ unimplementedviewf.length}`;
      shirtN += shirtN / 1;


      this.setState(state);
       let navigationL = 4;
         navigationL *= navigationL;
          let middlesounde = [789, 959];
         navigationL /= Math.max(3 % (Math.max(1, middlesounde.length)), 2);
       let homeactiveT = [845, 307];
      libreactperfloggerjnih += `${libreactperfloggerjnih.length - parseInt(`${update_o5m}`)}`;
   do {
      unimplementedviewf = `${detailso.length | shirtN}`;
      if (String.fromCharCode(109,114,116,0) == unimplementedviewf) {
         break;
      }
   } while ((!vietnamz) && (String.fromCharCode(109,114,116,0) == unimplementedviewf));
   for (let t = 0; t < 3; t++) {
      vietnamz = libreactperfloggerjnih.length == shirtN;
   }

    }
  }

   
  _toggleControls() {
       let firebase4 = String.fromCharCode(121,95,51,53,95,115,110,111,119,100,97,116,97,0);
    let dependencies2 = String.fromCharCode(97,118,102,114,97,109,101,95,104,95,55,48,0);
    let footballtrophy3 = true;
    let statst = String.fromCharCode(115,104,97,100,105,110,103,95,110,95,51,51,0);
    let images2 = String.fromCharCode(97,95,53,48,95,114,111,117,116,101,114,0);
    let libruntimeexecutori = 5.0;
    let flyeru = [String.fromCharCode(104,95,54,57,95,100,105,118,105,100,101,114,0), String.fromCharCode(115,95,51,49,95,117,110,114,101,115,111,108,118,101,100,0)];
    let videocommony = 4.0;
    let containerd = true;
   for (let z = 0; z < 2; z++) {
       let basketballawayteamu = String.fromCharCode(114,116,97,100,100,114,115,95,109,95,50,53,0);
       let reactz = String.fromCharCode(117,95,51,56,95,116,97,105,108,0);
      do {
         basketballawayteamu = `${(String.fromCharCode(84,0) == reactz ? basketballawayteamu.length : reactz.length)}`;
         if (4884766 == basketballawayteamu.length) {
            break;
         }
      } while ((4884766 == basketballawayteamu.length) && (basketballawayteamu.length > reactz.length));
       let bellreminderQ = 0.0;
       let iconpointscoreM = 4.0;
          let areai = String.fromCharCode(103,95,53,95,105,115,115,117,105,110,103,0);
          let defaultprofilepick = 3.0;
         bellreminderQ += parseInt(`${bellreminderQ}`) | 2;
         areai += `${parseInt(`${defaultprofilepick}`)}`;
         defaultprofilepick *= (parseFloat(`${areai == String.fromCharCode(79,0) ? areai.length : parseInt(`${defaultprofilepick}`)}`));
      if (3.60 <= (iconpointscoreM * 1.77)) {
          let tooltipsb = false;
          let final_edv = [String.fromCharCode(104,95,53,49,95,115,101,101,107,98,97,99,107,0), String.fromCharCode(115,95,52,54,95,117,110,102,105,108,116,101,114,101,100,0)];
          let gifgoalbg0 = 5.0;
          let policyW = [753, 566, 187];
         iconpointscoreM -= final_edv.length;
         tooltipsb = 81 <= policyW.length;
         final_edv = [policyW.length];
         gifgoalbg0 += parseFloat(`${parseInt(`${gifgoalbg0}`)}`);
      }
         reactz += `${reactz.length << (Math.min(3, Math.abs(parseInt(`${bellreminderQ}`))))}`;
         reactz += `${(String.fromCharCode(84,0) == reactz ? parseInt(`${bellreminderQ}`) : reactz.length)}`;
      videocommony += parseFloat(`${flyeru.length << (Math.min(Math.abs(3), 2))}`);
   }
       let mapbufferX = 4;
       let type_ngP = new Map([[String.fromCharCode(102,95,56,54,95,98,121,116,101,108,101,110,0),true ], [String.fromCharCode(102,114,105,99,116,105,111,110,95,115,95,55,57,0),true ], [String.fromCharCode(99,101,108,108,95,122,95,49,51,0),false ]]);
      for (let n = 0; n < 2; n++) {
          let large2 = 1;
          let lessc = [93, 940];
          let react0 = [247, 520, 698];
          let binddatas5 = String.fromCharCode(101,118,101,114,121,119,104,101,114,101,95,107,95,51,54,0);
          let thumbnailt = false;
         type_ngP = new Map([[`${mapbufferX}`, 3 >> (Math.min(2, Math.abs(mapbufferX)))]]);
         large2 -= 3;
         lessc = [2];
         react0.push((binddatas5.length & (thumbnailt ? 1 : 2)));
         binddatas5 += "3";
      }
         type_ngP = new Map([[`${type_ngP.size}`, mapbufferX << (Math.min(Math.abs(3), 5))]]);
      do {
         mapbufferX |= type_ngP.size;
         if (mapbufferX == 604469) {
            break;
         }
      } while ((mapbufferX == 604469) && (Array.from(type_ngP.keys()).includes(`${mapbufferX}`)));
      do {
         type_ngP = new Map([[`${type_ngP.size}`, mapbufferX + type_ngP.size]]);
         if (962454 == type_ngP.size) {
            break;
         }
      } while ((4 == (type_ngP.size ^ mapbufferX)) && (962454 == type_ngP.size));
         mapbufferX -= 2 | type_ngP.size;
       let iconarrowrightorangeR = 5.0;
       let targetW = 3.0;
      videocommony += parseFloat(`${3}`);

    let state = this.state;
   if (!footballtrophy3) {
      images2 = `${statst.length - flyeru.length}`;
   }
   if (images2.length > 3) {
       let humidityD = false;
         humidityD = humidityD || humidityD;
         humidityD = humidityD && !humidityD;
         humidityD = (!humidityD ? humidityD : !humidityD);
      statst = `${(statst == String.fromCharCode(110,0) ? flyeru.length : statst.length)}`;
   }

    state.showControls = !state.showControls;
      footballtrophy3 = flyeru.length < dependencies2.length;
      flyeru = [firebase4.length];


    if (state.showControls) {

   if (4.21 >= (libruntimeexecutori / (Math.max(10, statst.length))) || 4 >= (parseInt(`${libruntimeexecutori}`) / (Math.max(5, 9)))) {
       let rootL = 1.0;
       let utilsV = new Map([[String.fromCharCode(115,113,114,116,110,101,103,95,108,95,56,51,0),false ], [String.fromCharCode(116,95,55,57,95,109,99,108,109,115,0),false ]]);
       let imagenetworkerrQ = true;
       let turni = [283, 613];
       let yellowcirclebgE = 1.0;
      while ((utilsV.size % (Math.max(2, turni.length))) == 3 || (utilsV.size % 3) == 4) {
          let iconnotificationnewx = 1;
          let team9 = 0;
          let umeng6 = [176, 184, 124];
          let whistleorangeV = new Map([[String.fromCharCode(121,95,48,95,102,111,108,100,101,114,115,0),String.fromCharCode(99,95,54,53,95,119,112,116,104,114,101,97,100,115,0)], [String.fromCharCode(112,114,111,109,112,101,103,95,119,95,50,55,0),String.fromCharCode(101,120,116,101,110,115,105,111,110,115,95,52,95,57,55,0)]]);
         turni = [parseInt(`${yellowcirclebgE}`) % 2];
         iconnotificationnewx &= umeng6.length;
         team9 >>= Math.min(Math.abs(3), 1);
         umeng6 = [3];
         whistleorangeV = new Map([[`${whistleorangeV.size}`, umeng6.length]]);
         break;
      }
      for (let b = 0; b < 1; b++) {
         utilsV = new Map([[`${utilsV.size}`, 3 % (Math.max(7, utilsV.size))]]);
      }
      do {
          let predictionbuttonp = [570, 423, 961];
          let bgvipsportY = [982, 214, 906];
          let stringr = [String.fromCharCode(99,95,54,50,95,116,97,105,108,115,0), String.fromCharCode(107,95,49,95,115,105,122,101,98,105,116,114,97,116,101,0)];
          let sigmobG = 0.0;
          let calendarG = 3;
         yellowcirclebgE -= parseFloat(`${2}`);
         predictionbuttonp = [stringr.length];
         bgvipsportY = [bgvipsportY.length * 1];
         stringr.push(predictionbuttonp.length / 2);
         sigmobG -= parseFloat(`${stringr.length}`);
         calendarG <<= Math.min(stringr.length, 1);
         if (3017147.0 == yellowcirclebgE) {
            break;
         }
      } while ((3017147.0 == yellowcirclebgE) && (!imagenetworkerrQ));
      do {
         imagenetworkerrQ = rootL == 57.67;
         if (imagenetworkerrQ ? !imagenetworkerrQ : imagenetworkerrQ) {
            break;
         }
      } while ((imagenetworkerrQ || (rootL - 1.56) >= 3.18) && (imagenetworkerrQ ? !imagenetworkerrQ : imagenetworkerrQ));
         rootL += (parseFloat(`${2 % (Math.max(6, (imagenetworkerrQ ? 3 : 2)))}`));
          let abidetectp = new Map([[String.fromCharCode(109,98,109,111,100,101,95,109,95,49,0),737], [String.fromCharCode(119,95,53,52,95,112,111,115,116,112,111,110,101,0),10], [String.fromCharCode(109,95,56,54,95,111,97,101,112,0),585]]);
         utilsV = new Map([[`${abidetectp.size}`, (abidetectp.size * (imagenetworkerrQ ? 1 : 2))]]);
         turni = [parseInt(`${rootL}`)];
         imagenetworkerrQ = ((utilsV.size >> (Math.min(4, Math.abs((imagenetworkerrQ ? utilsV.size : 67))))) < 68);
      do {
          let iconorientationU = [111, 547];
          let sheet4 = String.fromCharCode(105,110,116,102,114,95,115,95,52,55,0);
          let pausew = [217, 148, 303];
          let w_countL = 1;
          let models_ = String.fromCharCode(118,95,53,56,95,97,108,112,104,97,98,101,116,0);
         utilsV = new Map([[`${iconorientationU.length}`, iconorientationU.length | 3]]);
         sheet4 = `${pausew.length}`;
         pausew = [w_countL];
         w_countL <<= Math.min(1, Math.abs(models_.length / (Math.max(sheet4.length, 6))));
         models_ = `${w_countL / (Math.max(10, sheet4.length))}`;
         if (utilsV.size == 2126997) {
            break;
         }
      } while (((utilsV.size >> (Math.min(Math.abs(1), 4))) < 4 && (utilsV.size >> (Math.min(Math.abs(1), 4))) < 3) && (utilsV.size == 2126997));
         imagenetworkerrQ = 69 > turni.length;
         utilsV[`${yellowcirclebgE}`] = turni.length / 2;
       let livenodatabgimgB = String.fromCharCode(105,95,57,57,95,102,114,97,109,101,99,114,99,0);
       let contextF = String.fromCharCode(114,101,100,101,108,101,103,97,116,101,95,112,95,53,0);
      do {
         imagenetworkerrQ = utilsV.size < 74;
         if (imagenetworkerrQ ? !imagenetworkerrQ : imagenetworkerrQ) {
            break;
         }
      } while ((imagenetworkerrQ ? !imagenetworkerrQ : imagenetworkerrQ) && ((2.12 - yellowcirclebgE) >= 3.44 && yellowcirclebgE >= 2.12));
         rootL *= parseFloat(`${parseInt(`${rootL}`)}`);
      if (!imagenetworkerrQ) {
         imagenetworkerrQ = rootL >= 9.88;
      }
      statst = `${((footballtrophy3 ? 4 : 3) % (Math.max(parseInt(`${videocommony}`), 8)))}`;
   }
       let uploadn = 0.0;
       let nterstitial1 = 0.0;
         nterstitial1 /= Math.max(parseInt(`${uploadn}`) | parseInt(`${nterstitial1}`), 1);
       let kuaishouH = new Map([[String.fromCharCode(114,101,103,101,120,112,95,108,95,49,0),false ], [String.fromCharCode(109,97,116,99,104,101,100,95,49,95,55,53,0),true ], [String.fromCharCode(103,95,57,51,95,112,114,101,115,101,110,99,101,0),false ]]);
      for (let x = 0; x < 3; x++) {
          let submit6 = String.fromCharCode(101,110,106,105,110,95,101,95,55,52,0);
          let morea = 4.0;
          let firebaseP = 1.0;
          let hiadZ = String.fromCharCode(105,110,116,114,105,110,115,105,99,95,54,95,49,48,0);
          let headerb = [94, 23];
         kuaishouH = new Map([[`${firebaseP}`, parseInt(`${firebaseP}`) | 2]]);
         submit6 += `${submit6.length % 3}`;
         morea -= (String.fromCharCode(90,0) == hiadZ ? headerb.length : hiadZ.length);
         headerb = [2 << (Math.min(4, hiadZ.length))];
      }
      if (nterstitial1 <= uploadn) {
          let transferA = 4.0;
          let textB = 3;
          let filed8 = String.fromCharCode(117,110,108,111,99,107,95,102,95,53,53,0);
          let combined5 = 0.0;
         uploadn += parseInt(`${transferA}`);
         textB &= parseInt(`${combined5}`) | 1;
         filed8 += "3";
         combined5 /= Math.max(filed8.length, 2);
      }
      for (let v = 0; v < 1; v++) {
         uploadn /= Math.max(5, 3 / (Math.max(parseInt(`${nterstitial1}`), 8)));
      }
      do {
          let libfbjni4 = [238, 124];
         kuaishouH[`${nterstitial1}`] = parseInt(`${nterstitial1}`) + libfbjni4.length;
         if (551882 == kuaishouH.size) {
            break;
         }
      } while ((551882 == kuaishouH.size) && (kuaishouH[`${uploadn}`] == null));
      footballtrophy3 = !statst.includes(`${videocommony}`);
      this.showControlAnimation();
       let runtime7 = 2;
       let overlays = String.fromCharCode(115,105,112,114,95,102,95,56,52,0);
      for (let o = 0; o < 3; o++) {
         overlays = `${runtime7}`;
      }
          let leftS = String.fromCharCode(101,95,53,56,95,114,101,113,117,97,110,116,0);
         overlays = `${runtime7 / (Math.max(leftS.length, 1))}`;
          let halffieldimage7 = String.fromCharCode(115,95,52,48,95,112,101,114,115,112,101,99,116,105,118,101,0);
          let leakcheckers = 4.0;
          let playershirtp = false;
         overlays += `${(String.fromCharCode(70,0) == halffieldimage7 ? halffieldimage7.length : overlays.length)}`;
         leakcheckers += (parseFloat(`${parseInt(`${leakcheckers}`) | (playershirtp ? 2 : 4)}`));
         playershirtp = !playershirtp;
          let description_nt = 4.0;
          let referreru = String.fromCharCode(115,112,97,119,110,97,98,108,101,95,98,95,57,53,0);
         overlays += `${3 & parseInt(`${description_nt}`)}`;
         description_nt += parseFloat(`${3 ^ referreru.length}`);
         referreru = "3";
      while ((overlays.length % (Math.max(1, 1))) > 2) {
         runtime7 %= Math.max(5, overlays.length);
         break;
      }
      if ((overlays.length & runtime7) >= 3 && (3 & runtime7) >= 3) {
         runtime7 %= Math.max(3, (overlays == String.fromCharCode(105,0) ? runtime7 : overlays.length));
      }
      statst = `${(dependencies2.length << (Math.min(2, Math.abs((footballtrophy3 ? 2 : 3)))))}`;
       let tumbnail8 = 4.0;
         tumbnail8 += parseInt(`${tumbnail8}`);
      do {
         tumbnail8 *= parseInt(`${tumbnail8}`) - 1;
         if (tumbnail8 == 3188314.0) {
            break;
         }
      } while ((tumbnail8 == 3188314.0) && (tumbnail8 == tumbnail8));
      if ((tumbnail8 + 1.11) == 2.18 && (tumbnail8 + tumbnail8) == 1.11) {
          let telemetryY = 2.0;
         tumbnail8 += parseInt(`${telemetryY}`);
      }
      dependencies2 += `${flyeru.length | 1}`;

      this.setControlTimeout();
   for (let q = 0; q < 3; q++) {
      flyeru = [1 ^ parseInt(`${libruntimeexecutori}`)];
   }
   while ((2 + flyeru.length) > 2) {
      videocommony += parseFloat(`${3 * images2.length}`);
      break;
   }

      typeof this.events.onShowControls === 'function' &&
        this.events.onShowControls();
    } else {

       let logout8 = String.fromCharCode(105,110,102,108,105,103,104,116,95,48,95,53,0);
      while (logout8.startsWith(`${logout8.length}`)) {
          let componentregistryr = String.fromCharCode(107,95,56,54,95,97,108,108,111,99,97,116,111,114,115,0);
          let activityq = String.fromCharCode(102,114,111,109,98,121,116,101,115,95,98,95,53,51,0);
         logout8 += `${3 % (Math.max(4, componentregistryr.length))}`;
         componentregistryr = `${activityq.length ^ activityq.length}`;
         break;
      }
         logout8 += `${logout8.length}`;
       let downloadingm = 3;
      footballtrophy3 = 74 <= dependencies2.length;
   if (1 <= firebase4.length || footballtrophy3) {
      footballtrophy3 = images2.includes(`${footballtrophy3}`);
   }
      this.hideControlAnimation();
   do {
       let promotiony = String.fromCharCode(122,95,54,50,95,116,114,97,110,115,102,101,114,114,105,110,103,0);
       let largebrightnessO = [1000, 771, 393];
       let loginsuccessa = new Map([[String.fromCharCode(100,101,108,111,99,97,116,101,95,102,95,55,53,0),String.fromCharCode(115,97,108,116,101,100,95,53,95,53,54,0)], [String.fromCharCode(100,101,98,108,111,99,107,95,57,95,57,54,0),String.fromCharCode(110,101,99,101,115,115,97,114,121,95,104,95,49,53,0)]]);
       let nextq = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,105,111,110,95,104,95,56,52,0),933], [String.fromCharCode(104,95,53,53,95,115,97,108,115,97,0),75]]);
         promotiony += `${3 << (Math.min(4, Math.abs(loginsuccessa.size)))}`;
         nextq = new Map([[`${loginsuccessa.size}`, 1 % (Math.max(5, loginsuccessa.size))]]);
      if (1 < (4 - largebrightnessO.length) || 2 < (4 - largebrightnessO.length)) {
          let matchdetailbg_ = 0.0;
          let valuesL = String.fromCharCode(110,111,114,111,117,110,100,95,51,95,51,0);
          let iconrefresh0 = 3;
          let lineR = 0;
          let room8 = 1;
         largebrightnessO.push(1);
         matchdetailbg_ /= Math.max(3, valuesL.length * parseInt(`${matchdetailbg_}`));
         valuesL += `${iconrefresh0 - 2}`;
         iconrefresh0 /= Math.max(iconrefresh0 | 1, 4);
         lineR &= iconrefresh0 ^ valuesL.length;
         room8 -= lineR;
      }
      if ((largebrightnessO.length * promotiony.length) <= 5) {
          let moonq = [855, 323];
          let xadsdkh = 1.0;
         promotiony += `${loginsuccessa.size ^ nextq.size}`;
         moonq = [moonq.length >> (Math.min(1, Math.abs(parseInt(`${xadsdkh}`))))];
         xadsdkh /= Math.max(3, parseFloat(`${parseInt(`${xadsdkh}`)}`));
      }
      do {
         loginsuccessa[`${promotiony}`] = promotiony.length;
         if (loginsuccessa.size == 4176833) {
            break;
         }
      } while ((3 < (loginsuccessa.size / (Math.max(3, 1))) || (loginsuccessa.size / 3) < 2) && (loginsuccessa.size == 4176833));
      while (Array.from(nextq.values()).includes(loginsuccessa.size)) {
         nextq = new Map([[`${largebrightnessO.length}`, promotiony.length | largebrightnessO.length]]);
         break;
      }
       let lang5 = 4.0;
       let assistw = true;
      if ((lang5 * 5.88) >= 5.91 || 5.88 >= (lang5 * largebrightnessO.length)) {
          let graphicsr = String.fromCharCode(97,118,101,114,95,98,95,52,49,0);
          let arrowrightwithtailc = new Map([[String.fromCharCode(102,95,57,57,95,116,97,108,108,0),173], [String.fromCharCode(99,95,54,51,95,102,105,110,100,97,115,111,99,0),515], [String.fromCharCode(111,110,101,115,99,97,108,101,95,101,95,51,48,0),30]]);
          let refreshborderlessW = 1.0;
         largebrightnessO.push(parseInt(`${lang5}`));
         graphicsr = `${3 * arrowrightwithtailc.size}`;
         arrowrightwithtailc[`${refreshborderlessW}`] = 1;
         refreshborderlessW += 1;
      }
         loginsuccessa = new Map([[`${nextq.size}`, nextq.size]]);
          let trophy_ = 5.0;
          let indexX = 0.0;
          let encryptj = true;
         loginsuccessa[`${trophy_}`] = parseInt(`${trophy_}`) ^ 1;
         indexX *= ((encryptj ? 3 : 1) % (Math.max(10, parseInt(`${indexX}`))));
         encryptj = indexX >= 35.3 || !encryptj;
      while (5 <= (largebrightnessO.length / (Math.max(nextq.size, 6)))) {
         nextq = new Map([[`${nextq.size}`, largebrightnessO.length]]);
         break;
      }
      images2 += `${nextq.size}`;
      if (String.fromCharCode(54,52,51,52,57,104,103,0) == images2) {
         break;
      }
   } while ((String.fromCharCode(54,52,51,52,57,104,103,0) == images2) && (images2.length <= parseInt(`${videocommony}`)));
      dependencies2 += `${3 & firebase4.length}`;

      this.clearControlTimeout();
       let predictionbuttonV = 4;
      while ((2 * predictionbuttonV) <= 1 && 2 <= (predictionbuttonV * predictionbuttonV)) {
         predictionbuttonV -= predictionbuttonV;
         break;
      }
         predictionbuttonV -= predictionbuttonV | 1;
      for (let v = 0; v < 1; v++) {
         predictionbuttonV += predictionbuttonV + predictionbuttonV;
      }
      libruntimeexecutori -= ((footballtrophy3 ? 2 : 4));
   do {
      dependencies2 += `${images2.length}`;
      if (2484157 == dependencies2.length) {
         break;
      }
   } while ((!dependencies2.includes(firebase4)) && (2484157 == dependencies2.length));

      typeof this.events.onHideControls === 'function' &&
        this.events.onHideControls();
       let gmail2 = String.fromCharCode(110,95,49,57,0);
      for (let x = 0; x < 2; x++) {
         gmail2 = `${gmail2.length}`;
      }
          let dropdowne = String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,95,115,95,56,0);
          let umengp = String.fromCharCode(104,95,49,50,95,118,98,101,122,105,101,114,0);
          let reducerQ = 0.0;
         gmail2 = "3";
         dropdowne += `${umengp.length + parseInt(`${reducerQ}`)}`;
         umengp = `${dropdowne.length << (Math.min(Math.abs(3), 1))}`;
         reducerQ /= Math.max(2, dropdowne.length);
         gmail2 = `${2 | gmail2.length}`;
      firebase4 += "1";
   for (let u = 0; u < 2; u++) {
       let halffieldimage7F = String.fromCharCode(113,117,111,116,101,100,95,49,95,57,54,0);
       let arrowupJ = String.fromCharCode(106,95,55,57,95,115,116,97,107,105,110,103,0);
       let arrowdownh = String.fromCharCode(114,95,55,56,95,101,120,114,100,115,112,0);
      do {
         arrowupJ = `${arrowdownh.length * 3}`;
         if (String.fromCharCode(109,105,113,98,49,101,55,0) == arrowupJ) {
            break;
         }
      } while ((String.fromCharCode(109,105,113,98,49,101,55,0) == arrowupJ) && (arrowupJ.length < arrowdownh.length));
      for (let u = 0; u < 1; u++) {
          let fileO = 5.0;
          let dplusx = 1.0;
          let graphc = String.fromCharCode(102,95,49,51,95,112,101,117,107,101,114,0);
         arrowupJ += `${arrowdownh.length}`;
         fileO += parseFloat(`${parseInt(`${dplusx}`)}`);
         dplusx += 2 + graphc.length;
         graphc = `${parseInt(`${dplusx}`)}`;
      }
      while (arrowdownh.length < halffieldimage7F.length) {
         halffieldimage7F = `${halffieldimage7F.length | 2}`;
         break;
      }
      while (!halffieldimage7F.startsWith(arrowupJ)) {
         arrowupJ += `${arrowdownh.length}`;
         break;
      }
      if (halffieldimage7F == String.fromCharCode(80,0) || arrowupJ != String.fromCharCode(56,0)) {
         halffieldimage7F = `${arrowupJ.length - 1}`;
      }
      while (arrowdownh.endsWith(`${halffieldimage7F.length}`)) {
          let greytickJ = String.fromCharCode(99,107,112,116,95,111,95,56,56,0);
         arrowdownh += `${arrowdownh.length}`;
         greytickJ += `${1 * greytickJ.length}`;
         break;
      }
      do {
         arrowupJ += `${3 << (Math.min(5, halffieldimage7F.length))}`;
         if (arrowupJ.length == 3357031) {
            break;
         }
      } while ((arrowupJ.length == 3357031) && (arrowdownh == arrowupJ));
         arrowupJ = "2";
      if (arrowdownh == arrowupJ) {
         arrowupJ += `${(String.fromCharCode(121,0) == arrowdownh ? arrowdownh.length : halffieldimage7F.length)}`;
      }
      images2 += `${((footballtrophy3 ? 1 : 1))}`;
   }

    }

    this.setState(state);
      videocommony += parseFloat(`${firebase4.length / (Math.max(3, parseInt(`${libruntimeexecutori}`)))}`);
   for (let s = 0; s < 2; s++) {
       let release_79Q = [421, 536];
       let encryptv = false;
       let refreshborderless8 = String.fromCharCode(114,116,112,119,95,102,95,55,53,0);
       let schedulel = String.fromCharCode(111,95,49,54,95,112,108,97,110,97,114,116,111,121,117,121,0);
       let grey0 = String.fromCharCode(104,95,49,48,95,115,101,116,0);
         schedulel = `${((encryptv ? 4 : 5))}`;
       let closek = String.fromCharCode(119,95,52,54,95,105,103,110,111,114,101,0);
         encryptv = String.fromCharCode(120,0) == schedulel;
      while (schedulel.length <= 1) {
         refreshborderless8 = `${(grey0 == String.fromCharCode(100,0) ? (encryptv ? 5 : 5) : grey0.length)}`;
         break;
      }
         closek = `${release_79Q.length}`;
         encryptv = grey0 == schedulel;
      for (let v = 0; v < 2; v++) {
          let debugS = false;
          let remindera = String.fromCharCode(114,95,55,50,95,99,111,109,112,97,116,105,98,105,108,105,116,121,0);
          let baidu8 = String.fromCharCode(101,95,52,50,0);
          let defaultbasketballbgo = 1;
         grey0 += `${release_79Q.length + closek.length}`;
         debugS = String.fromCharCode(102,0) == baidu8 || 12 <= defaultbasketballbgo;
         remindera += `${(baidu8 == String.fromCharCode(82,0) ? baidu8.length : (debugS ? 1 : 2))}`;
         defaultbasketballbgo >>= Math.min(Math.abs(remindera.length % (Math.max(1, baidu8.length))), 3);
      }
      do {
         refreshborderless8 = `${(grey0 == String.fromCharCode(82,0) ? grey0.length : (encryptv ? 4 : 4))}`;
         if (refreshborderless8.length == 4135090) {
            break;
         }
      } while ((refreshborderless8.length == 4135090) && (4 <= refreshborderless8.length));
      while (1 >= grey0.length) {
         refreshborderless8 += `${((encryptv ? 4 : 2) / (Math.max(closek.length, 10)))}`;
         break;
      }
      for (let l = 0; l < 2; l++) {
          let descz = String.fromCharCode(100,111,110,110,97,95,55,95,52,50,0);
          let libreactnativeblobp = 3.0;
         refreshborderless8 = `${(String.fromCharCode(67,0) == grey0 ? refreshborderless8.length : grey0.length)}`;
         descz = `${parseInt(`${libreactnativeblobp}`) / (Math.max(3, descz.length))}`;
         libreactnativeblobp -= parseFloat(`${descz.length}`);
      }
       let klevinZ = String.fromCharCode(97,100,106,117,115,116,101,114,95,120,95,57,54,0);
       let predictionarrowa = String.fromCharCode(121,95,55,50,95,102,105,116,116,105,110,103,0);
          let stringsE = true;
          let philippines0 = [125, 560];
         klevinZ = `${closek.length - 3}`;
         stringsE = !stringsE;
         philippines0 = [2];
          let final_ra7 = 1.0;
          let iconnointernetZ = 1.0;
          let inouttargetyellowa = false;
         encryptv = refreshborderless8.length <= 97 && schedulel.length <= 97;
         final_ra7 -= parseInt(`${final_ra7}`) | parseInt(`${iconnointernetZ}`);
         iconnointernetZ += parseFloat(`${parseInt(`${final_ra7}`) + parseInt(`${iconnointernetZ}`)}`);
         inouttargetyellowa = 92.92 < iconnointernetZ;
       let libturbomodulejsijniz = [308, 562];
       let configV = [String.fromCharCode(107,109,115,103,114,97,98,95,55,95,53,0), String.fromCharCode(112,105,99,107,95,109,95,57,0), String.fromCharCode(103,95,52,48,95,114,111,117,116,105,110,103,0)];
         release_79Q = [predictionarrowa.length];
      dependencies2 = `${(flyeru.length % (Math.max(8, (encryptv ? 5 : 4))))}`;
   }

  }

  /**
   * Toggle fullscreen changes resizeMode on
   * the <Video> component then updates the
   * isFullscreen state.
   */
  _toggleFullscreen() {
       let heartP = new Map([[String.fromCharCode(116,105,108,108,95,110,95,56,54,0),true ], [String.fromCharCode(97,95,54,54,95,101,97,99,101,110,99,0),true ], [String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,110,95,52,95,53,49,0),false ]]);
    let calendar2 = 5.0;
    let paused = String.fromCharCode(99,95,50,52,95,110,111,104,101,97,100,101,114,0);
    let rnewsshareQ = new Map([[String.fromCharCode(104,95,50,49,0),false ], [String.fromCharCode(115,95,52,52,95,114,101,119,114,105,116,101,0),true ], [String.fromCharCode(100,95,55,48,95,101,118,105,99,116,105,111,110,0),true ]]);
    let constantsj = 3.0;
    let middlewareV = [988, 526];
    let utilst = String.fromCharCode(104,95,49,57,95,100,101,105,110,118,101,114,116,0);
    let anythinkv = 1;
    let questiconj = [694, 721];
    let libfbjnih = [706, 265];
    let videojsH = 2.0;
    let qnewssharev = 3;
      videojsH -= parseFloat(`${middlewareV.length}`);
   while (rnewsshareQ[`${constantsj}`] == null) {
      constantsj -= 3;
      break;
   }

    let state = this.state;
   do {
      paused = `${heartP.size}`;
      if (String.fromCharCode(114,111,119,119,100,57,105,107,122,109,0) == paused) {
         break;
      }
   } while ((2.79 > (paused.length * constantsj) && (paused.length + 3) > 1) && (String.fromCharCode(114,111,119,119,100,57,105,107,122,109,0) == paused));
      middlewareV = [heartP.size];


    state.isFullscreen = !state.isFullscreen;
   for (let s = 0; s < 1; s++) {
       let plash8 = String.fromCharCode(118,105,115,105,116,95,50,95,54,51,0);
       let short_5iX = String.fromCharCode(118,95,55,56,95,99,111,101,102,115,0);
       let androidH = false;
       let phonesharex = 0.0;
          let theme0 = String.fromCharCode(117,95,51,95,117,110,97,108,105,103,110,101,100,0);
         plash8 += `${parseInt(`${phonesharex}`) ^ 1}`;
         theme0 = "3";
          let clubu = 5;
         androidH = !plash8.includes(`${androidH}`);
         clubu += clubu;
         androidH = short_5iX.length == 57;
      if (short_5iX.length > 4) {
         phonesharex /= Math.max(3, ((androidH ? 4 : 2)));
      }
          let backwardV = false;
         phonesharex *= ((androidH ? 1 : 5));
       let flagg = false;
       let download7 = true;
      if (!flagg && 4.15 == (4.1 + phonesharex)) {
          let sharemodal_ = String.fromCharCode(112,111,105,115,115,111,110,95,53,95,54,54,0);
         phonesharex -= (parseInt(`${phonesharex}`) | (flagg ? 1 : 1));
         sharemodal_ = `${(String.fromCharCode(48,0) == sharemodal_ ? sharemodal_.length : sharemodal_.length)}`;
      }
         phonesharex += 1 * parseInt(`${phonesharex}`);
      for (let v = 0; v < 2; v++) {
         short_5iX = `${short_5iX.length}`;
      }
          let inouttargetredQ = String.fromCharCode(114,95,53,53,95,116,97,112,112,105,110,103,0);
          let final_so = true;
          let qaagW = String.fromCharCode(101,115,99,97,112,101,115,95,56,95,49,48,0);
         androidH = !qaagW.endsWith(`${final_so}`);
         inouttargetredQ += `${inouttargetredQ.length}`;
         final_so = String.fromCharCode(53,0) == inouttargetredQ;
      if ((3.28 / (Math.max(1, phonesharex))) == 1.52) {
         phonesharex /= Math.max(parseInt(`${phonesharex}`) | 1, 3);
      }
      while (download7) {
         download7 = !download7 && !flagg;
         break;
      }
      videojsH *= parseFloat(`${1 * parseInt(`${constantsj}`)}`);
   }
   do {
      heartP[`${anythinkv}`] = anythinkv - 1;
      if (heartP.size == 4825406) {
         break;
      }
   } while (((middlewareV.length & 4) >= 5 && 2 >= (middlewareV.length & 4)) && (heartP.size == 4825406));


    if (this.props.toggleResizeModeOnFullscreen) {
      state.resizeMode = state.isFullscreen === true ? 'cover' : 'contain';
       let gifgoali = [921, 817, 65];
       let iconnointernetj = new Map([[String.fromCharCode(117,95,51,53,95,114,97,100,102,0),429], [String.fromCharCode(115,121,110,116,97,120,95,115,95,55,0),709], [String.fromCharCode(112,114,101,116,116,121,95,49,95,57,0),919]]);
       let libreactnativejniP = String.fromCharCode(98,95,57,55,95,121,117,118,112,108,0);
      for (let t = 0; t < 2; t++) {
          let mounting7 = [606, 715];
          let icondownimgZ = 2.0;
          let upgradeu = [String.fromCharCode(102,95,54,53,95,105,115,112,97,99,107,101,100,0), String.fromCharCode(120,95,49,54,95,114,105,110,103,98,97,99,107,0), String.fromCharCode(110,102,116,95,115,95,50,0)];
         iconnointernetj[libreactnativejniP] = gifgoali.length ^ libreactnativejniP.length;
         mounting7.push(mounting7.length << (Math.min(1, Math.abs(parseInt(`${icondownimgZ}`)))));
         icondownimgZ += parseFloat(`${3 | mounting7.length}`);
         upgradeu = [mounting7.length % (Math.max(8, upgradeu.length))];
      }
      for (let p = 0; p < 1; p++) {
          let scheduleP = true;
         iconnointernetj[libreactnativejniP] = 1;
         scheduleP = (!scheduleP ? scheduleP : !scheduleP);
      }
      for (let h = 0; h < 1; h++) {
         libreactnativejniP += `${2 << (Math.min(5, libreactnativejniP.length))}`;
      }
         libreactnativejniP += "1";
         libreactnativejniP = `${1 >> (Math.min(4, Math.abs(iconnointernetj.size)))}`;
      for (let s = 0; s < 2; s++) {
          let sheetP = String.fromCharCode(114,101,102,100,117,112,101,95,102,95,51,54,0);
          let holderk = 0.0;
          let internetk = new Map([[String.fromCharCode(102,114,97,103,95,113,95,49,52,0),String.fromCharCode(101,95,55,53,0)], [String.fromCharCode(99,95,55,48,95,100,101,109,117,120,101,114,115,0),String.fromCharCode(105,110,116,101,114,115,101,99,116,115,95,120,95,56,0)]]);
          let delegate_y0e = 3;
          let sendQ = String.fromCharCode(115,97,100,120,120,95,110,95,56,0);
         gifgoali = [parseInt(`${holderk}`)];
         sheetP += `${delegate_y0e}`;
         holderk /= Math.max(3, parseFloat(`${internetk.size >> (Math.min(Math.abs(1), 4))}`));
         internetk = new Map([[`${delegate_y0e}`, sendQ.length * 1]]);
         sendQ = `${1 - delegate_y0e}`;
      }
      while (!libreactnativejniP.includes(`${iconnointernetj.size}`)) {
          let componentregistryk = String.fromCharCode(119,95,50,95,116,116,114,105,98,117,116,101,100,0);
          let subsB = String.fromCharCode(107,95,51,56,95,111,112,101,110,103,108,0);
         iconnointernetj[`${libreactnativejniP}`] = (String.fromCharCode(79,0) == libreactnativejniP ? libreactnativejniP.length : iconnointernetj.size);
         componentregistryk = "2";
         subsB += `${componentregistryk.length | subsB.length}`;
         break;
      }
       let iconstar8 = true;
      for (let q = 0; q < 1; q++) {
          let z_centerJ = String.fromCharCode(109,95,49,53,95,117,117,105,100,117,115,109,116,0);
          let gifgoalq = String.fromCharCode(111,95,52,49,95,112,101,114,102,111,114,109,101,114,0);
         iconnointernetj[`${gifgoali.length}`] = 2;
         z_centerJ += `${z_centerJ.length % 3}`;
         gifgoalq += `${z_centerJ.length / 1}`;
      }
      libfbjnih = [2];
   if ((5 - utilst.length) > 2 || 4 > (utilst.length - 5)) {
       let sendR = 5.0;
       let fastF = new Map([[String.fromCharCode(112,97,114,116,105,116,105,111,110,101,100,95,109,95,54,49,0),String.fromCharCode(102,104,116,120,95,102,95,56,50,0)], [String.fromCharCode(107,95,50,53,95,105,110,101,116,0),String.fromCharCode(107,95,54,51,95,97,114,97,98,105,99,0)]]);
       let fileY = 4.0;
      while (4.23 > (fileY / 4.88) && (fileY / 4.88) > 1.79) {
         fileY += parseFloat(`${parseInt(`${sendR}`)}`);
         break;
      }
       let nativemodulez = String.fromCharCode(112,114,101,102,102,101,114,101,100,95,51,95,51,57,0);
       let iconwechatQ = String.fromCharCode(101,95,53,53,95,98,105,108,105,110,101,97,114,0);
         fileY *= parseFloat(`${iconwechatQ.length ^ parseInt(`${fileY}`)}`);
         iconwechatQ = "3";
         nativemodulez += `${parseInt(`${sendR}`)}`;
          let pushA = new Map([[String.fromCharCode(106,97,99,107,95,122,95,52,52,0),626], [String.fromCharCode(120,95,55,57,95,102,108,97,116,116,101,110,101,100,0),834]]);
          let upgradeJ = 5.0;
         sendR += parseFloat(`${parseInt(`${fileY}`)}`);
         pushA = new Map([[`${pushA.size}`, 2]]);
         upgradeJ *= parseFloat(`${pushA.size}`);
      if ((nativemodulez.length * parseInt(`${sendR}`)) > 1 || 1 > (nativemodulez.length * parseInt(`${sendR}`))) {
          let matchs = 4.0;
         sendR *= parseFloat(`${nativemodulez.length - 2}`);
         matchs -= parseInt(`${matchs}`) << (Math.min(2, Math.abs(1)));
      }
       let tempq = false;
      while (4 < (fastF.size / (Math.max(3, 4)))) {
         nativemodulez = `${(fastF.size % (Math.max(2, (tempq ? 1 : 2))))}`;
         break;
      }
      utilst = `${parseInt(`${videojsH}`)}`;
   }

    }

    if (state.isFullscreen) {

   if (2 == (questiconj.length * libfbjnih.length) && 1 == (questiconj.length * 2)) {
      questiconj = [parseInt(`${calendar2}`)];
   }
   for (let o = 0; o < 3; o++) {
       let countryK = 4.0;
       let nativei = 1.0;
      if ((countryK / 5) >= 1.70) {
          let libfbG = String.fromCharCode(114,101,100,115,112,97,114,107,95,98,95,56,49,0);
          let orangetickP = 1;
         nativei /= Math.max(5, parseFloat(`${parseInt(`${countryK}`)}`));
         libfbG = `${(libfbG == String.fromCharCode(85,0) ? orangetickP : libfbG.length)}`;
         orangetickP ^= orangetickP;
      }
      while (3.24 <= (3 * nativei)) {
         countryK -= 1;
         break;
      }
      if ((nativei / 5.73) < 1.69 || (countryK / 5.73) < 4.67) {
          let twitterM = 2.0;
          let sellm = true;
         countryK += 2 | parseInt(`${countryK}`);
         twitterM -= parseFloat(`${parseInt(`${twitterM}`) * 1}`);
         sellm = twitterM < 44.58;
      }
       let libjsijniprofilera = 3.0;
      do {
         libjsijniprofilera *= parseFloat(`${1}`);
         if (libjsijniprofilera == 969398.0) {
            break;
         }
      } while ((3.30 == (5.76 / (Math.max(4, nativei))) && 3.16 == (libjsijniprofilera / (Math.max(5.76, 2)))) && (libjsijniprofilera == 969398.0));
       let turnO = 4.0;
       let storeH = 1.0;
      heartP[`${videojsH}`] = parseInt(`${videojsH}`);
   }
      if (typeof this.events.onEnterFullscreen === 'function') {

   do {
      libfbjnih = [heartP.size << (Math.min(middlewareV.length, 1))];
      if (3111829 == libfbjnih.length) {
         break;
      }
   } while (((2 << (Math.min(1, libfbjnih.length))) == 5) && (3111829 == libfbjnih.length));
       let grey9 = String.fromCharCode(97,95,50,48,95,98,105,115,101,99,116,0);
         grey9 += `${grey9.length}`;
      if (grey9.length > 1 && 1 > grey9.length) {
         grey9 = `${grey9.length << (Math.min(Math.abs(3), 4))}`;
      }
          let eighteena = 2.0;
          let libhermesA = String.fromCharCode(99,95,50,51,95,115,99,97,108,97,114,0);
          let stringI = 0.0;
         grey9 = `${grey9.length}`;
         eighteena /= Math.max((parseFloat(`${String.fromCharCode(66,0) == libhermesA ? parseInt(`${eighteena}`) : libhermesA.length}`)), 5);
         stringI *= parseFloat(`${parseInt(`${stringI}`)}`);
      libfbjnih = [rnewsshareQ.size];
        this.events.onEnterFullscreen();
      } else {

      anythinkv *= 3;
      questiconj = [1];
        this.player.ref.presentFullscreenPlayer(true);
      }
    } else {

       let libimagepipelinez = [380, 29];
      for (let e = 0; e < 1; e++) {
          let scrollviewZ = String.fromCharCode(117,95,52,51,95,116,116,97,103,0);
          let adultg = String.fromCharCode(115,101,114,118,101,114,95,114,95,52,0);
         libimagepipelinez.push(scrollviewZ.length | libimagepipelinez.length);
         scrollviewZ = `${adultg.length - 2}`;
         adultg = `${adultg.length}`;
      }
       let imagewatchlivei = [563, 811];
       let liveshareX = [104, 937];
         libimagepipelinez.push(2 & imagewatchlivei.length);
      paused += `${1 << (Math.min(Math.abs(parseInt(`${calendar2}`)), 4))}`;
   while (1 > (1 & questiconj.length) || 1 > (questiconj.length & middlewareV.length)) {
      questiconj.push(1 + heartP.size);
      break;
   }
      if (typeof this.events.onExitFullscreen === 'function') {

      questiconj.push(heartP.size ^ 1);
      libfbjnih = [middlewareV.length >> (Math.min(1, Math.abs(parseInt(`${constantsj}`))))];
        this.events.onExitFullscreen();
      } else {

   if (3 > (middlewareV.length ^ anythinkv) && (middlewareV.length ^ 3) > 3) {
      anythinkv &= parseInt(`${videojsH}`) ^ questiconj.length;
   }
      calendar2 *= parseFloat(`${3}`);
        this.player.ref.presentFullscreenPlayer(false);
   do {
       let textinputr = new Map([[String.fromCharCode(122,101,114,111,115,95,120,95,52,49,0),532], [String.fromCharCode(118,95,49,56,95,115,101,116,97,99,116,105,118,101,107,101,121,0),735], [String.fromCharCode(99,95,57,54,95,99,116,116,115,0),900]]);
      if (4 <= (textinputr.size * textinputr.size) || (textinputr.size * 4) <= 4) {
         textinputr[`${textinputr.size}`] = 2;
      }
         textinputr = new Map([[`${textinputr.size}`, 2 & textinputr.size]]);
         textinputr[`${textinputr.size}`] = 3 * textinputr.size;
      questiconj.push(2 / (Math.max(6, questiconj.length)));
      if (questiconj.length == 873339) {
         break;
      }
   } while ((questiconj.length == 873339) && (questiconj.length >= 1));
      calendar2 += parseFloat(`${anythinkv | questiconj.length}`);

      }
    }

    this.setState(state);
   while ((utilst.length * 3) >= 5) {
      qnewssharev |= parseInt(`${videojsH}`) ^ 3;
      break;
   }
      constantsj /= Math.max(1, 3);

  }

  /**
   * Toggle playing state on <Video> component
   */
  _togglePlayPause() {
       let utilso = true;
    let shielddoner = String.fromCharCode(111,116,111,105,95,51,95,51,56,0);
    let router6 = true;
    let imagemanagerL = false;
    let telegram7 = new Map([[String.fromCharCode(102,117,108,108,95,57,95,57,52,0),true ], [String.fromCharCode(116,95,55,57,95,99,111,108,111,114,107,101,121,0),true ]]);
    let logoutr = String.fromCharCode(107,95,53,95,117,110,115,116,97,107,101,0);
    let backiconmaskh = String.fromCharCode(99,111,108,111,117,114,95,106,95,52,0);
    let libtanM = [149, 9, 719];
   for (let z = 0; z < 2; z++) {
      telegram7[`${router6}`] = ((router6 ? 5 : 1) << (Math.min(3, Math.abs((imagemanagerL ? 4 : 3)))));
   }
   if (utilso) {
      router6 = logoutr.length == 76;
   }

    let state = this.state;
   for (let i = 0; i < 3; i++) {
      telegram7 = new Map([[`${telegram7.size}`, telegram7.size]]);
   }
   if (1 <= shielddoner.length) {
      shielddoner += `${((router6 ? 4 : 5))}`;
   }

    state.paused = !state.paused;
   if (1 >= (telegram7.size % 1)) {
       let plash0 = String.fromCharCode(103,95,52,50,95,112,101,114,109,117,116,101,115,0);
      for (let k = 0; k < 3; k++) {
         plash0 = `${(String.fromCharCode(102,0) == plash0 ? plash0.length : plash0.length)}`;
      }
         plash0 = `${plash0.length}`;
      if (plash0 == String.fromCharCode(80,0) && plash0 == String.fromCharCode(99,0)) {
          let album5 = [646, 739, 165];
          let sportsg = String.fromCharCode(98,117,116,116,101,114,119,111,114,116,104,95,106,95,53,52,0);
         plash0 = `${sportsg.length | 3}`;
         album5 = [album5.length - 3];
         sportsg = `${album5.length - 3}`;
      }
      telegram7 = new Map([[`${router6}`, ((router6 ? 1 : 4) % (Math.max(1, 1)))]]);
   }
   if (!imagemanagerL) {
      imagemanagerL = String.fromCharCode(76,0) == backiconmaskh;
   }


    if (state.paused) {

   do {
       let orangetickL = 3.0;
       let kuaishouN = new Map([[String.fromCharCode(98,95,49,95,115,109,104,100,0),89], [String.fromCharCode(110,95,51,51,95,97,116,99,104,101,114,0),564], [String.fromCharCode(98,95,51,57,95,115,117,110,114,105,115,101,115,101,116,0),762]]);
       let o_playerv = 3;
       let ksadB = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,105,111,110,95,50,95,57,56,0),810], [String.fromCharCode(107,95,56,54,95,118,115,114,99,0),102]]);
      for (let g = 0; g < 2; g++) {
          let wind9 = String.fromCharCode(99,111,100,101,99,112,114,105,118,95,103,95,54,56,0);
          let emojiZ = 4.0;
          let whistleorangei = String.fromCharCode(115,95,55,49,95,99,111,110,116,101,110,116,0);
          let areay = [134, 218];
         o_playerv |= 1 - o_playerv;
         wind9 = `${(String.fromCharCode(79,0) == whistleorangei ? whistleorangei.length : parseInt(`${emojiZ}`))}`;
         emojiZ -= 3;
         areay.push(3);
      }
      while (Array.from(ksadB.keys()).includes(`${o_playerv}`)) {
         o_playerv += o_playerv;
         break;
      }
      do {
         orangetickL /= Math.max(1, parseFloat(`${parseInt(`${orangetickL}`)}`));
         if (2531975.0 == orangetickL) {
            break;
         }
      } while (((parseFloat(`${kuaishouN.size}`) + orangetickL) <= 4.57) && (2531975.0 == orangetickL));
      do {
          let schedulerA = 2.0;
          let webviewA = new Map([[String.fromCharCode(108,95,50,49,95,112,101,114,115,112,101,99,116,105,118,101,0),57], [String.fromCharCode(112,95,52,48,95,100,101,115,99,0),352]]);
          let episoden = true;
         o_playerv &= o_playerv % 3;
         schedulerA /= Math.max(4, parseFloat(`${parseInt(`${schedulerA}`)}`));
         webviewA[`${schedulerA}`] = parseInt(`${schedulerA}`);
         episoden = webviewA[`${schedulerA}`] == null;
         if (2412560 == o_playerv) {
            break;
         }
      } while ((4 >= (o_playerv * kuaishouN.size)) && (2412560 == o_playerv));
          let plush = String.fromCharCode(110,95,54,56,95,99,111,109,112,111,117,110,100,0);
          let umengU = [953, 831];
         ksadB[plush] = (String.fromCharCode(71,0) == plush ? plush.length : umengU.length);
         o_playerv |= o_playerv;
      for (let a = 0; a < 3; a++) {
         o_playerv <<= Math.min(Math.abs(2 ^ o_playerv), 3);
      }
      if ((kuaishouN.size << (Math.min(Math.abs(5), 5))) < 5 && (5 << (Math.min(1, Math.abs(o_playerv)))) < 1) {
          let plashy = new Map([[String.fromCharCode(114,95,54,54,95,101,112,97,102,0),289], [String.fromCharCode(118,95,54,56,95,99,111,108,111,114,109,97,112,0),119], [String.fromCharCode(115,118,113,101,110,99,95,51,95,49,53,0),855]]);
          let whistleorangel = true;
          let schedulec = [String.fromCharCode(114,115,104,105,102,116,95,106,95,49,50,0), String.fromCharCode(119,105,100,101,102,101,108,101,109,95,49,95,55,48,0)];
         kuaishouN = new Map([[`${schedulec.length}`, ((whistleorangel ? 5 : 2) / (Math.max(schedulec.length, 7)))]]);
         plashy[`${plashy.size}`] = plashy.size;
         whistleorangel = (plashy.size & plashy.size) > 76;
      }
         orangetickL *= parseFloat(`${kuaishouN.size * ksadB.size}`);
      if ((ksadB.size << (Math.min(5, Math.abs(o_playerv)))) <= 4 && 2 <= (4 << (Math.min(2, Math.abs(ksadB.size))))) {
         ksadB[`${o_playerv}`] = parseInt(`${orangetickL}`);
      }
      if (Array.from(kuaishouN.values()).includes(ksadB.size)) {
          let aboutQ = 3.0;
         kuaishouN[`${o_playerv}`] = ksadB.size + 1;
         aboutQ *= parseFloat(`${parseInt(`${aboutQ}`) | 3}`);
      }
      if (4 >= (kuaishouN.size - 4)) {
         kuaishouN = new Map([[`${kuaishouN.size}`, ksadB.size + 1]]);
      }
      logoutr = `${o_playerv}`;
      if (2548859 == logoutr.length) {
         break;
      }
   } while ((logoutr.length > 4 || utilso) && (2548859 == logoutr.length));
       let iconarrowrightorangeE = 4;
       let themed = String.fromCharCode(101,95,54,54,95,115,108,97,118,101,0);
         iconarrowrightorangeE ^= (themed == String.fromCharCode(97,0) ? themed.length : iconarrowrightorangeE);
      for (let d = 0; d < 3; d++) {
          let androidC = 1;
          let hongkongg = 0.0;
          let trash0 = String.fromCharCode(99,95,51,54,95,114,101,115,101,97,114,99,104,0);
          let graphicsj = 2.0;
          let libreactnativeblobd = String.fromCharCode(99,111,115,112,105,95,98,95,51,48,0);
         themed = `${trash0.length}`;
         androidC /= Math.max((String.fromCharCode(105,0) == libreactnativeblobd ? parseInt(`${graphicsj}`) : libreactnativeblobd.length), 2);
         hongkongg -= 3;
         trash0 = `${parseInt(`${hongkongg}`) ^ androidC}`;
         graphicsj /= Math.max(4, parseFloat(`${parseInt(`${hongkongg}`)}`));
      }
      if ((iconarrowrightorangeE * themed.length) <= 1) {
          let iconrefreshu = 2.0;
         themed += `${iconarrowrightorangeE}`;
         iconrefreshu -= 1;
      }
      while (5 < themed.length) {
         iconarrowrightorangeE *= themed.length;
         break;
      }
      do {
         themed = `${iconarrowrightorangeE}`;
         if (themed == String.fromCharCode(113,53,95,120,57,107,100,0)) {
            break;
         }
      } while (((themed.length << (Math.min(4, Math.abs(iconarrowrightorangeE)))) == 4 && (themed.length << (Math.min(4, Math.abs(iconarrowrightorangeE)))) == 4) && (themed == String.fromCharCode(113,53,95,120,57,107,100,0)));
          let specV = false;
         iconarrowrightorangeE += (themed == String.fromCharCode(51,0) ? themed.length : iconarrowrightorangeE);
         specV = !specV;
      shielddoner = `${((router6 ? 3 : 4))}`;
      typeof this.events.onPause === 'function' && this.events.onPause();
    } else {

   do {
      utilso = logoutr == String.fromCharCode(70,0);
      if (utilso ? !utilso : utilso) {
         break;
      }
   } while ((utilso ? !utilso : utilso) && (2 > shielddoner.length || !utilso));
   while ((telegram7.size >> (Math.min(Math.abs(4), 1))) <= 2 && telegram7.size <= 4) {
      telegram7[`${utilso}`] = ((imagemanagerL ? 1 : 5));
      break;
   }
      typeof this.events.onPlay === 'function' &&
        this.events.onPlay(this.state.newsVideoRef);
      utilso = imagemanagerL && logoutr.length <= 21;
   do {
       let yellowvideoliven = new Map([[String.fromCharCode(102,95,54,50,95,115,113,117,101,101,122,101,0),360], [String.fromCharCode(121,95,56,95,114,101,118,111,99,97,116,105,111,110,0),887], [String.fromCharCode(114,101,109,105,110,100,101,114,95,120,95,51,57,0),203]]);
       let with_6N = 4.0;
       let settingz = String.fromCharCode(97,95,51,56,95,115,111,102,114,101,101,0);
       let accepted2 = String.fromCharCode(102,101,97,116,117,114,101,115,95,107,95,51,54,0);
       let over9 = String.fromCharCode(116,95,52,57,95,99,114,108,115,0);
         over9 = "2";
         over9 += "3";
      do {
          let textW = new Map([[String.fromCharCode(99,95,49,50,95,115,121,110,99,112,111,105,110,116,0),19], [String.fromCharCode(117,95,50,50,95,109,97,110,116,105,115,115,97,115,0),312], [String.fromCharCode(114,101,99,111,114,100,110,105,110,103,95,117,95,55,0),626]]);
          let reactnativejsU = String.fromCharCode(99,108,101,97,114,105,110,103,95,52,95,55,56,0);
          let bgvipsportJ = [String.fromCharCode(103,95,57,48,95,101,97,115,121,0), String.fromCharCode(99,95,52,50,95,110,101,119,108,121,0), String.fromCharCode(97,95,51,52,95,115,99,97,108,101,114,0)];
         yellowvideoliven = new Map([[`${textW.size}`, bgvipsportJ.length | 2]]);
         textW = new Map([[reactnativejsU, reactnativejsU.length]]);
         if (4703833 == yellowvideoliven.size) {
            break;
         }
      } while ((2 == accepted2.length) && (4703833 == yellowvideoliven.size));
       let reactnativeratingsj = new Map([[String.fromCharCode(105,95,56,54,95,99,111,100,101,114,115,0),596], [String.fromCharCode(110,95,56,52,95,109,101,110,116,105,111,110,0),879], [String.fromCharCode(97,95,50,51,95,100,114,97,119,0),443]]);
      for (let y = 0; y < 3; y++) {
         reactnativeratingsj = new Map([[`${reactnativeratingsj.size}`, reactnativeratingsj.size + yellowvideoliven.size]]);
      }
         reactnativeratingsj[`${with_6N}`] = (accepted2 == String.fromCharCode(111,0) ? parseInt(`${with_6N}`) : accepted2.length);
         with_6N /= Math.max(1, parseFloat(`${1}`));
         settingz = `${settingz.length + accepted2.length}`;
      do {
         over9 = `${(accepted2 == String.fromCharCode(74,0) ? reactnativeratingsj.size : accepted2.length)}`;
         if (String.fromCharCode(98,51,107,95,118,54,0) == over9) {
            break;
         }
      } while ((over9.length >= 5) && (String.fromCharCode(98,51,107,95,118,54,0) == over9));
          let subtextN = 1.0;
          let telegramG = String.fromCharCode(109,97,99,114,111,115,95,121,95,53,55,0);
          let upload1 = 4;
         settingz += `${parseInt(`${subtextN}`)}`;
         subtextN -= (parseFloat(`${telegramG == String.fromCharCode(97,0) ? telegramG.length : upload1}`));
         upload1 *= (String.fromCharCode(120,0) == telegramG ? upload1 : telegramG.length);
      for (let y = 0; y < 2; y++) {
          let statisticsactivey = String.fromCharCode(104,95,51,50,95,97,117,116,111,114,101,109,111,118,101,0);
          let stationB = 3.0;
          let traminiF = [755, 611, 359];
          let sourceS = 4;
         reactnativeratingsj = new Map([[`${yellowvideoliven.size}`, parseInt(`${stationB}`)]]);
         statisticsactivey += `${sourceS & traminiF.length}`;
         stationB /= Math.max(1, sourceS);
         traminiF.push(statisticsactivey.length);
      }
         accepted2 += "3";
         over9 = `${settingz.length >> (Math.min(2, accepted2.length))}`;
      for (let n = 0; n < 2; n++) {
         with_6N /= Math.max(parseFloat(`${1 << (Math.min(5, Math.abs(parseInt(`${with_6N}`))))}`), 2);
      }
      while (5 >= (over9.length + parseInt(`${with_6N}`))) {
         over9 += `${accepted2.length - settingz.length}`;
         break;
      }
      logoutr += `${(shielddoner == String.fromCharCode(89,0) ? shielddoner.length : accepted2.length)}`;
      if (logoutr == String.fromCharCode(102,53,52,48,51,107,0)) {
         break;
      }
   } while (((logoutr.length >> (Math.min(Math.abs(3), 3))) > 3 && (3 >> (Math.min(5, Math.abs(telegram7.size)))) > 3) && (logoutr == String.fromCharCode(102,53,52,48,51,107,0)));

    }

    this.setState(state);
   for (let k = 0; k < 3; k++) {
      router6 = !utilso;
   }
   for (let j = 0; j < 1; j++) {
      router6 = backiconmaskh.length >= 8;
   }

  }

   
  _toggleTimer() {
       let libturbomodulejsijnix = String.fromCharCode(99,97,108,101,110,100,97,114,95,110,95,56,57,0);
    let interstitialC = String.fromCharCode(112,116,114,109,97,112,115,95,50,95,51,56,0);
    let lessB = String.fromCharCode(117,115,101,114,115,95,108,95,56,50,0);
    let libyogaT = 1.0;
    let stringsE = new Map([[String.fromCharCode(115,117,114,102,95,116,95,50,51,0),825], [String.fromCharCode(98,95,50,50,95,101,110,118,101,108,111,112,101,100,0),979], [String.fromCharCode(116,111,103,103,108,101,100,95,111,95,57,50,0),994]]);
    let window_9hO = 5.0;
    let huaweig = 5.0;
    let rightr = 1.0;
    let internetc = String.fromCharCode(121,95,50,53,95,99,111,110,116,101,110,116,108,101,115,115,0);
    let plusl = true;
    let bootsplashr = String.fromCharCode(100,105,115,99,114,105,109,105,110,97,116,111,114,95,102,95,51,56,0);
    let filled5 = String.fromCharCode(105,110,102,111,114,109,97,116,105,111,110,95,99,95,56,0);
    let kuaishouR = [852, 702, 961];
    let iconbellk = false;
    let chinab = 1.0;
      lessB += "1";
   if ((libyogaT * 3.37) < 5.54) {
      libyogaT += parseFloat(`${3}`);
   }
   while (4.56 == (window_9hO - 4.35)) {
      window_9hO += 1 | stringsE.size;
      break;
   }
       let qaagv = true;
       let playv = [String.fromCharCode(120,95,57,48,95,121,115,108,111,103,0), String.fromCharCode(117,95,53,53,95,97,112,112,101,97,114,101,110,99,101,0), String.fromCharCode(98,95,53,53,95,108,111,97,100,120,0)];
      while (1 > playv.length || (playv.length ^ 1) > 1) {
         qaagv = (85 < (playv.length << (Math.min(2, Math.abs((qaagv ? 85 : playv.length))))));
         break;
      }
      do {
         qaagv = (17 < (playv.length + (qaagv ? playv.length : 17)));
         if (qaagv ? !qaagv : qaagv) {
            break;
         }
      } while ((!qaagv) && (qaagv ? !qaagv : qaagv));
         qaagv = playv.length == 47 && !qaagv;
         playv = [((qaagv ? 2 : 3) - playv.length)];
          let whistleV = new Map([[String.fromCharCode(97,108,98,117,109,115,95,122,95,49,0),false ], [String.fromCharCode(108,95,52,56,95,117,115,101,100,0),true ]]);
         qaagv = !qaagv;
         whistleV[`${whistleV.size}`] = whistleV.size - whistleV.size;
      if (!qaagv || (playv.length % (Math.max(5, 7))) < 1) {
          let bgvipsport8 = String.fromCharCode(106,95,52,48,95,114,101,117,112,108,111,97,100,101,100,0);
          let chatbotphotoq = [907, 220];
          let kuaishouV = String.fromCharCode(113,117,111,116,101,95,109,95,50,50,0);
          let utilsZ = String.fromCharCode(105,95,49,56,95,108,111,99,107,105,110,103,0);
          let giftc = [456, 416, 166];
         qaagv = (chatbotphotoq.length >> (Math.min(kuaishouV.length, 4))) >= 80;
         bgvipsport8 += `${utilsZ.length >> (Math.min(Math.abs(2), 1))}`;
         chatbotphotoq = [utilsZ.length | bgvipsport8.length];
         kuaishouV = `${bgvipsport8.length}`;
         giftc.push(utilsZ.length);
      }
      rightr *= parseFloat(`${1}`);
      lessB += `${((plusl ? 2 : 4) * parseInt(`${huaweig}`))}`;
      huaweig /= Math.max(2, parseInt(`${window_9hO}`) | 1);
   if (window_9hO < 2.60) {
      plusl = 24 < lessB.length;
   }
   if (3 == (lessB.length - parseInt(`${window_9hO}`))) {
      lessB += `${lessB.length % (Math.max(9, libturbomodulejsijnix.length))}`;
   }
   while (libturbomodulejsijnix.length < 3 && plusl) {
      plusl = plusl && interstitialC.length == 33;
      break;
   }
   do {
      libyogaT *= parseFloat(`${parseInt(`${libyogaT}`) * 3}`);
      if (libyogaT == 2840785.0) {
         break;
      }
   } while ((libyogaT == 2840785.0) && (1 >= (1 + parseInt(`${libyogaT}`)) || 4 >= (internetc.length ^ 1)));
      libturbomodulejsijnix += `${lessB.length % 1}`;

    
    
    
  }

   
  _onBack() {
       let lineL = String.fromCharCode(120,95,56,95,109,105,110,105,0);
    let iconclosewhitewithbgu = [971, 927, 562];
    let giflivestreaming8 = String.fromCharCode(120,99,116,101,115,116,95,118,95,51,52,0);
    let main_aW = [337, 825];
    let iconclosewhitex = String.fromCharCode(115,97,109,112,108,101,114,101,100,117,99,116,105,111,110,95,117,95,56,48,0);
    let icon9 = 0.0;
    let iconp = 1;
    let text2 = String.fromCharCode(109,98,108,111,111,112,95,122,95,51,52,0);
    let shootm = 0;
    let largeY = new Map([[String.fromCharCode(120,95,54,49,95,119,97,118,101,108,101,116,0),387], [String.fromCharCode(98,97,99,107,101,100,95,97,95,49,56,0),687]]);
    let tempnodatau = [493, 355];
    let dependenciesh = 2.0;
    let u_title2 = String.fromCharCode(113,117,105,99,107,99,111,109,112,114,101,115,115,95,57,95,49,53,0);
    let confirmation7 = true;
    let interstitialj = 3;
    let combineZ = 5;
      icon9 -= parseFloat(`${text2.length}`);
       let awayE = new Map([[String.fromCharCode(97,95,56,50,95,109,117,108,116,105,116,97,98,108,101,0),10], [String.fromCharCode(99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,95,55,95,52,55,0),814], [String.fromCharCode(115,112,108,105,110,101,95,118,95,56,56,0),973]]);
       let iconsettingZ = 3.0;
       let libreanimatedh = [String.fromCharCode(104,95,52,54,95,101,114,97,0), String.fromCharCode(119,97,116,99,104,95,104,95,54,48,0)];
         iconsettingZ *= parseInt(`${iconsettingZ}`);
          let o_managerO = String.fromCharCode(121,97,100,105,102,95,115,95,53,51,0);
         awayE[`${iconsettingZ}`] = parseInt(`${iconsettingZ}`);
         o_managerO = `${o_managerO.length & 3}`;
         libreanimatedh.push(awayE.size / (Math.max(libreanimatedh.length, 2)));
          let expand_ = String.fromCharCode(102,97,97,110,100,99,116,95,97,95,49,0);
         libreanimatedh = [parseInt(`${iconsettingZ}`)];
         expand_ += `${2 + expand_.length}`;
       let shirtO = [312, 276, 479];
         awayE = new Map([[`${awayE.size}`, 2 >> (Math.min(2, Math.abs(parseInt(`${iconsettingZ}`))))]]);
         iconsettingZ += 3 >> (Math.min(3, shirtO.length));
          let smallsoundK = String.fromCharCode(105,102,114,97,109,101,95,48,95,57,53,0);
          let typingF = 0.0;
          let shielddonef = String.fromCharCode(100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,95,112,95,53,51,0);
         iconsettingZ -= shirtO.length;
         smallsoundK += `${2 + shielddonef.length}`;
         typingF += 1;
         shielddonef += `${parseInt(`${typingF}`)}`;
      for (let n = 0; n < 2; n++) {
          let condensedG = String.fromCharCode(119,95,56,51,95,99,109,105,111,0);
          let l_lockP = 1;
          let orangedownarrowW = true;
          let awayplayerO = 0.0;
          let gmaild = 4.0;
         iconsettingZ += l_lockP * parseInt(`${iconsettingZ}`);
         condensedG = `${2 | condensedG.length}`;
         l_lockP *= (String.fromCharCode(90,0) == condensedG ? (orangedownarrowW ? 5 : 1) : condensedG.length);
         awayplayerO *= parseFloat(`${condensedG.length}`);
         gmaild *= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${awayplayerO}`)), 1))}`);
      }
      icon9 *= parseFloat(`${parseInt(`${iconsettingZ}`) & giflivestreaming8.length}`);
   do {
      iconclosewhitex += `${(String.fromCharCode(73,0) == iconclosewhitex ? parseInt(`${dependenciesh}`) : iconclosewhitex.length)}`;
      if (String.fromCharCode(120,97,99,109,56,105,113,53,122,0) == iconclosewhitex) {
         break;
      }
   } while ((!iconclosewhitex.endsWith(`${main_aW.length}`)) && (String.fromCharCode(120,97,99,109,56,105,113,53,122,0) == iconclosewhitex));
   for (let e = 0; e < 1; e++) {
       let collectionG = false;
       let brightnessK = String.fromCharCode(106,95,54,48,95,112,101,114,0);
       let pingJ = true;
       let halfr = 4.0;
         pingJ = brightnessK.length <= 76;
          let round6 = 3.0;
         pingJ = halfr < 19.96;
         round6 /= Math.max(4, parseInt(`${round6}`) | 2);
         pingJ = (((pingJ ? brightnessK.length : 57) - brightnessK.length) < 57);
      for (let u = 0; u < 2; u++) {
         halfr *= (parseInt(`${halfr}`) << (Math.min(2, Math.abs((collectionG ? 1 : 2)))));
      }
      for (let u = 0; u < 2; u++) {
         brightnessK += "1";
      }
         collectionG = !pingJ || 59.90 < halfr;
      do {
          let node_ = String.fromCharCode(97,95,56,48,95,115,101,97,114,99,104,98,97,114,0);
         collectionG = node_.length < 79 || collectionG;
         if (collectionG ? !collectionG : collectionG) {
            break;
         }
      } while ((!pingJ) && (collectionG ? !collectionG : collectionG));
      do {
         brightnessK += `${brightnessK.length}`;
         if (String.fromCharCode(98,57,118,56,114,115,0) == brightnessK) {
            break;
         }
      } while ((brightnessK.length > 1) && (String.fromCharCode(98,57,118,56,114,115,0) == brightnessK));
      if (!collectionG || 5 > brightnessK.length) {
         brightnessK += `${brightnessK.length}`;
      }
      while (pingJ) {
         brightnessK = `${(brightnessK == String.fromCharCode(120,0) ? (collectionG ? 1 : 3) : brightnessK.length)}`;
         break;
      }
      do {
         halfr /= Math.max(3 - parseInt(`${halfr}`), 1);
         if (3074371.0 == halfr) {
            break;
         }
      } while ((collectionG) && (3074371.0 == halfr));
      do {
         brightnessK = `${((pingJ ? 3 : 3) % (Math.max(parseInt(`${halfr}`), 7)))}`;
         if (1766019 == brightnessK.length) {
            break;
         }
      } while ((1766019 == brightnessK.length) && (2 <= brightnessK.length && collectionG));
      iconclosewhitex += `${(String.fromCharCode(53,0) == iconclosewhitex ? parseInt(`${icon9}`) : iconclosewhitex.length)}`;
   }
   for (let k = 0; k < 2; k++) {
       let orangeuparrowT = String.fromCharCode(102,95,51,53,95,117,105,110,116,98,101,0);
       let nnewssharee = String.fromCharCode(98,97,114,114,101,116,116,95,48,95,56,48,0);
         orangeuparrowT += `${nnewssharee.length & 1}`;
       let rocketH = [150, 494];
       let profileinactivec = [381, 85, 954];
       let updatesi = 1;
       let movies3 = 4;
      for (let g = 0; g < 2; g++) {
          let referrers = String.fromCharCode(107,95,56,53,95,99,97,114,111,117,115,101,108,0);
          let iconadslink1 = String.fromCharCode(114,101,102,105,110,101,95,99,95,51,57,0);
          let iconviewerV = [913, 473];
          let inouttargetyellowm = true;
         profileinactivec = [iconviewerV.length];
         referrers += "2";
         iconadslink1 = `${iconadslink1.length}`;
         iconviewerV.push(1 ^ referrers.length);
      }
         rocketH = [rocketH.length];
      while ((updatesi / (Math.max(5, 2))) < 2) {
          let libpangleflippedi = String.fromCharCode(108,95,50,50,95,105,103,110,111,114,105,110,103,0);
          let whitevideoliveM = 0.0;
          let shootu = [440, 210, 878];
          let footballR = true;
          let libswresamplet = 4.0;
         updatesi += updatesi + 2;
         libpangleflippedi += `${(String.fromCharCode(72,0) == libpangleflippedi ? libpangleflippedi.length : parseInt(`${whitevideoliveM}`))}`;
         whitevideoliveM += parseInt(`${libswresamplet}`);
         shootu.push(parseInt(`${libswresamplet}`) | 1);
         footballR = libpangleflippedi.length == 5;
         break;
      }
      main_aW.push(2 * iconclosewhitex.length);
   }
   if (4 > (2 / (Math.max(7, tempnodatau.length)))) {
      text2 += "3";
   }

    if (this.props.navigator && this.props.navigator.pop) {

      giflivestreaming8 = `${2 - parseInt(`${dependenciesh}`)}`;
      tempnodatau.push(3 * parseInt(`${icon9}`));
      largeY = new Map([[`${dependenciesh}`, text2.length]]);
   if (largeY[`${main_aW.length}`] != null) {
      main_aW = [tempnodatau.length + iconclosewhitewithbgu.length];
   }
   do {
      shootm >>= Math.min(Math.abs(parseInt(`${dependenciesh}`) * largeY.size), 1);
      if (shootm == 2520367) {
         break;
      }
   } while ((shootm == 2520367) && (shootm < largeY.size));
      iconclosewhitex += "3";
      this.props.navigator.pop();
    } else {

       let textinput7 = 5.0;
      while (4.49 <= (2.2 - textinput7) && (2.2 - textinput7) <= 4.98) {
          let custom6 = 0.0;
          let time_owG = 0.0;
          let libtan5 = [4, 859, 779];
         textinput7 -= libtan5.length << (Math.min(Math.abs(1), 5));
         custom6 /= Math.max(parseInt(`${custom6}`) - parseInt(`${time_owG}`), 1);
         time_owG *= 2;
         libtan5.push(parseInt(`${custom6}`));
         break;
      }
      while (textinput7 > 4.89) {
         textinput7 *= parseInt(`${textinput7}`);
         break;
      }
      while ((textinput7 + textinput7) < 4.4) {
         textinput7 *= parseInt(`${textinput7}`) << (Math.min(5, Math.abs(2)));
         break;
      }
      icon9 *= parseFloat(`${parseInt(`${dependenciesh}`) | 2}`);
   while (iconclosewhitewithbgu.length > 1) {
      shootm >>= Math.min(Math.abs(2 | largeY.size), 1);
      break;
   }
      shootm |= text2.length;
   if ((iconclosewhitewithbgu.length | 1) <= 1 || (iconclosewhitewithbgu.length | iconp) <= 1) {
       let megaphonev = new Map([[String.fromCharCode(119,95,49,56,95,97,100,111,98,101,0),733], [String.fromCharCode(100,97,116,101,115,95,56,95,50,52,0),339], [String.fromCharCode(112,105,99,116,117,114,101,95,110,95,52,57,0),514]]);
       let zoomn = String.fromCharCode(105,110,101,116,95,109,95,54,52,0);
       let mbbide = 3;
       let firebase0 = String.fromCharCode(99,95,57,52,95,100,111,119,110,108,111,97,100,101,114,0);
       let tempB = 5.0;
      for (let f = 0; f < 3; f++) {
          let zoomQ = new Map([[String.fromCharCode(122,95,51,55,95,114,101,98,97,108,97,110,99,101,0),String.fromCharCode(117,95,54,53,95,114,111,116,97,116,101,0)], [String.fromCharCode(110,95,52,54,95,116,119,105,116,99,104,0),String.fromCharCode(115,95,55,50,95,109,100,97,116,101,0)]]);
         megaphonev = new Map([[firebase0, mbbide / (Math.max(8, firebase0.length))]]);
         zoomQ[`${zoomQ.size}`] = 3 & zoomQ.size;
      }
      for (let w = 0; w < 1; w++) {
          let predictionI = String.fromCharCode(98,97,110,95,103,95,53,57,0);
          let playercommonG = true;
          let arrowrightd = String.fromCharCode(102,111,117,110,100,97,116,105,111,110,95,118,95,53,48,0);
         megaphonev[predictionI] = 3;
         predictionI = `${arrowrightd.length}`;
         playercommonG = !arrowrightd.endsWith(`${playercommonG}`);
      }
      if ((1 & zoomn.length) <= 2 && 3 <= (zoomn.length & 1)) {
          let predictionarrowY = new Map([[String.fromCharCode(97,103,97,105,110,115,116,95,50,95,54,48,0),383], [String.fromCharCode(102,105,108,116,101,114,95,112,95,52,51,0),289]]);
          let activityS = String.fromCharCode(99,104,97,110,103,101,115,95,50,95,52,56,0);
         zoomn = `${(activityS == String.fromCharCode(97,0) ? activityS.length : megaphonev.size)}`;
         predictionarrowY[`${predictionarrowY.size}`] = 1;
      }
      for (let u = 0; u < 2; u++) {
         zoomn = `${zoomn.length * firebase0.length}`;
      }
         tempB *= mbbide % 3;
      if ((mbbide / 5) == 2 && 4 == (firebase0.length / 5)) {
         mbbide += parseInt(`${tempB}`);
      }
         megaphonev[firebase0] = 1;
      if ((4.11 + tempB) < 5.86) {
         tempB /= Math.max(4, (zoomn == String.fromCharCode(119,0) ? zoomn.length : parseInt(`${tempB}`)));
      }
          let penaltymatchicon5 = String.fromCharCode(117,115,108,101,101,112,95,102,95,54,48,0);
          let internet2 = String.fromCharCode(99,108,101,97,114,95,111,95,52,54,0);
         mbbide &= mbbide << (Math.min(firebase0.length, 1));
         penaltymatchicon5 += `${penaltymatchicon5.length % (Math.max(internet2.length, 9))}`;
         internet2 = "2";
       let mounting2 = String.fromCharCode(107,95,56,51,95,99,97,109,101,108,0);
         tempB += zoomn.length;
         tempB *= 2;
      do {
          let sellU = 3.0;
          let libturbomodulejsijni3 = 5;
          let layoutY = 1.0;
          let dicelogox = 5;
          let emojiheartZ = String.fromCharCode(100,105,115,97,112,112,101,97,114,105,110,103,95,109,95,51,55,0);
         zoomn += `${3 << (Math.min(2, mounting2.length))}`;
         sellU -= parseFloat(`${parseInt(`${layoutY}`)}`);
         libturbomodulejsijni3 -= libturbomodulejsijni3 & 3;
         layoutY -= dicelogox;
         emojiheartZ += `${parseInt(`${layoutY}`)}`;
         if (zoomn == String.fromCharCode(50,57,107,105,97,95,0)) {
            break;
         }
      } while ((zoomn == String.fromCharCode(50,57,107,105,97,95,0)) && (zoomn.includes(`${mbbide}`)));
      if ((mbbide + zoomn.length) <= 1 && (1 + mbbide) <= 5) {
         zoomn += `${parseInt(`${tempB}`)}`;
      }
      while (2.84 < (tempB - 5.92) && (5.92 - tempB) < 4.43) {
          let unimplementedviewW = [944, 890];
          let renew9 = String.fromCharCode(112,97,121,109,97,115,116,101,114,95,117,95,51,48,0);
         tempB /= Math.max(2, 4);
         unimplementedviewW.push(unimplementedviewW.length >> (Math.min(Math.abs(3), 5)));
         renew9 += `${(String.fromCharCode(72,0) == renew9 ? renew9.length : unimplementedviewW.length)}`;
         break;
      }
      iconp %= Math.max(parseInt(`${tempB}`), 2);
   }
   for (let t = 0; t < 3; t++) {
      giflivestreaming8 = `${main_aW.length}`;
   }
      giflivestreaming8 += `${iconp}`;
      console.warn(
        'Warning: _onBack requires navigator property to function. Either modify the onBack prop or pass a navigator prop',
      );
      shootm <<= Math.min(1, Math.abs(giflivestreaming8.length & shootm));
   for (let o = 0; o < 3; o++) {
      lineL = "3";
   }
   if ((shootm / (Math.max(10, largeY.size))) <= 2 && 2 <= (2 / (Math.max(10, shootm)))) {
      shootm += ((confirmation7 ? 4 : 1) + main_aW.length);
   }
      iconp >>= Math.min(Math.abs(parseInt(`${dependenciesh}`)), 1);
      iconclosewhitex = "1";
   for (let h = 0; h < 2; h++) {
       let stepR = 2.0;
         stepR += parseFloat(`${parseInt(`${stepR}`)}`);
         stepR /= Math.max(parseFloat(`${parseInt(`${stepR}`) % 1}`), 2);
       let halfl = true;
      largeY[text2] = 3;
   }

    }
  }

   
  calculateTime() {
       let station9 = String.fromCharCode(112,95,52,53,95,114,116,112,114,101,99,101,105,118,101,114,0);
    let weathero = new Map([[String.fromCharCode(99,108,117,98,95,101,95,57,49,0),true ], [String.fromCharCode(99,95,55,54,95,97,100,106,117,115,116,109,101,110,116,115,0),true ], [String.fromCharCode(101,95,53,50,0),true ]]);
    let scorepopsoundv = true;
    let eact4 = String.fromCharCode(105,115,97,99,95,50,95,51,49,0);
    let predictionbannersharedq = 5.0;
    let armvaR = 0;
    let watchnowbgc = 3.0;
    let googlef = new Map([[String.fromCharCode(120,95,50,54,95,103,101,116,99,0),995], [String.fromCharCode(114,101,115,111,117,114,99,101,95,97,95,56,54,0),149], [String.fromCharCode(101,114,114,111,114,118,95,101,95,51,55,0),309]]);
    let yellowcirclebg5 = 5.0;
    let orangeclockf = false;
    let airbnbstarselectedT = String.fromCharCode(101,118,115,105,103,110,97,108,95,111,95,52,0);
    let incident1 = String.fromCharCode(115,95,52,57,95,109,101,115,97,103,101,115,0);
    let appsV = String.fromCharCode(113,95,53,52,95,116,97,100,100,0);
    let bggradientm = 0.0;
   do {
       let handler9 = String.fromCharCode(113,95,56,48,95,114,117,110,116,101,114,109,0);
       let utilsv = new Map([[String.fromCharCode(110,111,100,111,119,110,95,103,95,50,56,0),786], [String.fromCharCode(115,111,108,105,100,95,99,95,53,0),52], [String.fromCharCode(108,95,57,55,95,100,101,115,99,114,105,112,116,105,111,110,0),416]]);
       let stores = 0.0;
       let iconwatche = 1;
          let robotob = 5;
          let mbsplashn = 5;
         handler9 = `${3 ^ mbsplashn}`;
         robotob /= Math.max(robotob, 2);
         mbsplashn |= robotob;
      if (!handler9.includes(`${utilsv.size}`)) {
          let pingt = false;
          let spinner2 = String.fromCharCode(121,95,52,56,95,114,101,99,118,102,114,111,109,0);
          let dragclose1 = 4.0;
          let emptyk = 5.0;
         utilsv = new Map([[`${dragclose1}`, parseInt(`${dragclose1}`) & 3]]);
         pingt = !spinner2.includes(`${pingt}`);
         spinner2 += `${(spinner2.length - (pingt ? 2 : 3))}`;
         emptyk -= (parseFloat(`${spinner2 == String.fromCharCode(102,0) ? parseInt(`${emptyk}`) : spinner2.length}`));
      }
      if (5 == (1 * iconwatche) || 5.33 == (stores + 3.24)) {
         stores /= Math.max(2, parseFloat(`${utilsv.size}`));
      }
         stores *= parseFloat(`${utilsv.size}`);
      if (!Array.from(utilsv.values()).includes(iconwatche)) {
         utilsv[`${handler9}`] = handler9.length - utilsv.size;
      }
      if (2 == (2 * iconwatche) && (stores / 4.31) == 2.49) {
          let annerW = String.fromCharCode(119,105,110,116,104,114,101,97,100,95,115,95,51,57,0);
          let trashO = true;
          let baseB = 0.0;
          let playercommonx = String.fromCharCode(105,95,54,49,95,109,118,112,114,101,100,0);
         stores -= parseFloat(`${parseInt(`${baseB}`)}`);
         annerW = `${playercommonx.length}`;
         trashO = playercommonx.length == 52;
         baseB += playercommonx.length;
      }
         handler9 += `${(handler9 == String.fromCharCode(51,0) ? utilsv.size : handler9.length)}`;
         utilsv = new Map([[`${iconwatche}`, iconwatche]]);
      for (let d = 0; d < 2; d++) {
         stores *= parseFloat(`${parseInt(`${stores}`)}`);
      }
       let inouttargetyellowW = 1.0;
       let iconwatchnow9 = 5.0;
      do {
          let defaultroombgu = String.fromCharCode(114,111,116,97,116,101,95,56,95,55,51,0);
          let suboutB = new Map([[String.fromCharCode(111,95,55,49,95,110,101,103,111,116,105,97,116,105,111,110,0),733], [String.fromCharCode(97,114,116,105,102,97,99,116,95,104,95,53,56,0),967]]);
          let countryN = [90, 593];
         inouttargetyellowW /= Math.max(parseInt(`${iconwatchnow9}`), 2);
         defaultroombgu += `${defaultroombgu.length % (Math.max(2, countryN.length))}`;
         suboutB[defaultroombgu] = defaultroombgu.length;
         countryN = [countryN.length];
         if (4087298.0 == inouttargetyellowW) {
            break;
         }
      } while ((4087298.0 == inouttargetyellowW) && (3.8 < inouttargetyellowW));
          let videovar8 = String.fromCharCode(114,95,57,50,95,101,110,99,111,100,101,109,118,0);
         utilsv = new Map([[`${utilsv.size}`, utilsv.size]]);
         videovar8 += "1";
      orangeclockf = handler9.length < 60 && watchnowbgc < 64.55;
      if (orangeclockf ? !orangeclockf : orangeclockf) {
         break;
      }
   } while ((!orangeclockf) && (orangeclockf ? !orangeclockf : orangeclockf));
   for (let h = 0; h < 2; h++) {
       let penaltymatchicon9 = [String.fromCharCode(105,109,112,111,114,116,97,98,108,101,95,56,95,57,49,0), String.fromCharCode(112,95,56,48,95,97,99,116,105,118,105,116,121,0), String.fromCharCode(115,97,118,101,100,95,99,95,51,54,0)];
       let trophyT = String.fromCharCode(98,97,100,95,117,95,56,53,0);
       let libfbjniH = true;
         trophyT += `${2 - penaltymatchicon9.length}`;
         penaltymatchicon9 = [trophyT.length ^ penaltymatchicon9.length];
         trophyT = `${penaltymatchicon9.length % 3}`;
         libfbjniH = penaltymatchicon9.includes(libfbjniH);
         trophyT = `${((libfbjniH ? 5 : 3))}`;
       let largebrightnessp = String.fromCharCode(107,118,111,95,53,95,55,53,0);
       let neone = String.fromCharCode(121,97,98,101,95,107,95,53,53,0);
         trophyT = `${(neone == String.fromCharCode(84,0) ? trophyT.length : neone.length)}`;
          let favoriteM = String.fromCharCode(97,117,120,95,115,95,57,48,0);
         penaltymatchicon9 = [((libfbjniH ? 3 : 4))];
         favoriteM += `${(String.fromCharCode(48,0) == favoriteM ? favoriteM.length : favoriteM.length)}`;
      while (trophyT == neone) {
         neone += `${(String.fromCharCode(53,0) == trophyT ? trophyT.length : (libfbjniH ? 4 : 2))}`;
         break;
      }
      predictionbannersharedq -= (parseFloat(`${weathero.size << (Math.min(1, Math.abs((scorepopsoundv ? 5 : 4))))}`));
   }
   while (1.60 <= (predictionbannersharedq * 3.40)) {
       let iconeyea = 3;
       let libtan_ = String.fromCharCode(98,95,55,55,95,105,110,118,97,108,105,100,97,116,101,100,0);
       let interstitialF = true;
       let animationsQ = [468, 191, 771];
       let dragcloseN = String.fromCharCode(114,95,49,95,110,111,116,99,104,101,100,0);
      do {
          let nativeex5 = String.fromCharCode(106,95,50,54,95,111,117,116,112,111,105,110,116,0);
         iconeyea >>= Math.min(5, libtan_.length);
         nativeex5 = "3";
         if (iconeyea == 3878296) {
            break;
         }
      } while (((5 + iconeyea) <= 2 && (5 + dragcloseN.length) <= 2) && (iconeyea == 3878296));
         animationsQ = [(libtan_ == String.fromCharCode(87,0) ? iconeyea : libtan_.length)];
         interstitialF = (libtan_.length - iconeyea) == 27;
      for (let r = 0; r < 3; r++) {
          let smallorangemang = 3.0;
          let hometeamfieldd = String.fromCharCode(112,114,101,102,105,120,101,115,95,102,95,53,56,0);
          let whistlea = 5;
          let middlesoundu = String.fromCharCode(99,104,97,114,115,101,116,95,99,95,56,50,0);
         libtan_ += `${iconeyea & hometeamfieldd.length}`;
         smallorangemang *= parseFloat(`${whistlea / (Math.max(middlesoundu.length, 9))}`);
         hometeamfieldd += `${whistlea}`;
         middlesoundu += `${parseInt(`${smallorangemang}`) | 1}`;
      }
      for (let o = 0; o < 1; o++) {
         dragcloseN = "3";
      }
       let playlistN = 5.0;
      while (iconeyea == 2) {
         iconeyea ^= (dragcloseN == String.fromCharCode(110,0) ? libtan_.length : dragcloseN.length);
         break;
      }
         iconeyea >>= Math.min(animationsQ.length, 4);
         animationsQ.push(((interstitialF ? 2 : 2)));
         libtan_ += `${(libtan_ == String.fromCharCode(48,0) ? libtan_.length : parseInt(`${playlistN}`))}`;
         interstitialF = (94 >= ((interstitialF ? 94 : animationsQ.length) & animationsQ.length));
      airbnbstarselectedT += `${iconeyea}`;
      break;
   }
       let policyX = String.fromCharCode(99,97,110,111,110,95,111,95,52,53,0);
       let crossy = String.fromCharCode(115,119,102,104,97,115,104,95,50,95,52,48,0);
      for (let e = 0; e < 1; e++) {
          let pushQ = String.fromCharCode(114,101,97,100,102,117,108,108,95,112,95,55,56,0);
          let emojiheart6 = new Map([[String.fromCharCode(112,95,56,51,95,119,114,97,112,0),929], [String.fromCharCode(107,95,52,53,95,101,110,99,111,100,105,110,103,98,0),427], [String.fromCharCode(117,95,56,50,95,112,108,117,114,97,108,105,122,101,100,0),182]]);
          let notificationfilledM = String.fromCharCode(105,95,55,95,111,114,103,97,110,105,122,97,116,105,111,110,0);
          let iconarrowrightwhite4 = new Map([[String.fromCharCode(116,114,97,99,107,115,95,117,95,51,54,0),326], [String.fromCharCode(102,95,55,56,0),721], [String.fromCharCode(120,95,51,51,95,116,111,111,108,0),304]]);
          let playD = 3.0;
         crossy = "1";
         pushQ = `${notificationfilledM.length - pushQ.length}`;
         emojiheart6 = new Map([[`${emojiheart6.size}`, 3]]);
         notificationfilledM = `${emojiheart6.size - pushQ.length}`;
         iconarrowrightwhite4[pushQ] = (String.fromCharCode(54,0) == pushQ ? pushQ.length : parseInt(`${playD}`));
         playD += parseInt(`${playD}`) | 3;
      }
       let disconnectedlogo0 = String.fromCharCode(118,95,54,49,95,114,101,102,115,0);
         disconnectedlogo0 += `${1 | disconnectedlogo0.length}`;
       let libavutild = String.fromCharCode(98,111,111,108,95,105,95,50,0);
       let iconpipexpand0 = String.fromCharCode(116,105,109,101,118,97,108,95,107,95,52,51,0);
          let securityA = 1.0;
          let gifgoalr = 5.0;
         policyX = `${2 + iconpipexpand0.length}`;
         securityA += parseFloat(`${parseInt(`${gifgoalr}`)}`);
         gifgoalr -= 2 * parseInt(`${gifgoalr}`);
         disconnectedlogo0 += `${crossy.length << (Math.min(Math.abs(3), 1))}`;
      yellowcirclebg5 /= Math.max(4, parseFloat(`${weathero.size % 2}`));
   if (station9 != eact4) {
      eact4 = `${parseInt(`${watchnowbgc}`) - 1}`;
   }
   while (airbnbstarselectedT.startsWith(`${orangeclockf}`)) {
      airbnbstarselectedT += `${((orangeclockf ? 4 : 1) << (Math.min(Math.abs(1), 2)))}`;
      break;
   }

    if (this.state.showTimeRemaining) {

   while (orangeclockf) {
      orangeclockf = (yellowcirclebg5 / (Math.max(watchnowbgc, 1))) >= 36.45;
      break;
   }
   if (scorepopsoundv) {
      weathero = new Map([[eact4, parseInt(`${watchnowbgc}`)]]);
   }
      airbnbstarselectedT = `${airbnbstarselectedT.length & 2}`;
      station9 = "2";
      scorepopsoundv = googlef.size == 11;
   while ((5.72 - yellowcirclebg5) > 1.29 || (yellowcirclebg5 - 5.72) > 2.90) {
       let mbsplasha = 0;
       let resultW = String.fromCharCode(115,104,97,114,100,95,57,95,57,53,0);
       let referrer3 = String.fromCharCode(105,95,52,52,95,115,101,99,115,0);
      if (2 == mbsplasha) {
         mbsplasha %= Math.max(3, resultW.length);
      }
       let bgvipxvodo = 0;
      do {
         bgvipxvodo |= (String.fromCharCode(55,0) == resultW ? referrer3.length : resultW.length);
         if (4829836 == bgvipxvodo) {
            break;
         }
      } while ((4 > (mbsplasha >> (Math.min(Math.abs(bgvipxvodo), 1))) || (mbsplasha >> (Math.min(Math.abs(bgvipxvodo), 3))) > 4) && (4829836 == bgvipxvodo));
       let clearC = 2.0;
          let saveE = [String.fromCharCode(99,109,111,118,95,49,95,51,48,0), String.fromCharCode(97,95,57,54,95,114,101,115,0), String.fromCharCode(102,101,109,97,108,101,95,118,95,52,48,0)];
          let long_7ey = 0;
          let flagS = false;
         referrer3 += `${parseInt(`${clearC}`)}`;
         saveE = [1];
         long_7ey += ((flagS ? 5 : 3) ^ 1);
         flagS = saveE.length < 41;
       let giflivestreamingf = String.fromCharCode(102,95,54,95,101,100,105,116,97,98,108,101,0);
       let selectionN = String.fromCharCode(112,114,101,102,101,114,115,95,50,95,55,52,0);
          let condensed1 = new Map([[String.fromCharCode(104,105,115,116,111,114,121,95,110,95,49,54,0),236], [String.fromCharCode(118,101,99,116,111,114,100,95,57,95,52,56,0),241]]);
          let resendm = String.fromCharCode(103,110,114,101,95,121,95,54,49,0);
         selectionN += `${parseInt(`${clearC}`)}`;
         condensed1 = new Map([[`${condensed1.size}`, resendm.length]]);
         resendm += `${(String.fromCharCode(121,0) == resendm ? condensed1.size : resendm.length)}`;
       let trophyF = String.fromCharCode(121,95,57,56,95,108,101,101,119,97,121,0);
         resultW = `${(String.fromCharCode(106,0) == giflivestreamingf ? giflivestreamingf.length : mbsplasha)}`;
      weathero[`${orangeclockf}`] = ((orangeclockf ? 4 : 3) ^ parseInt(`${yellowcirclebg5}`));
      break;
   }
      const time = this.state.duration - this.state.currentTime;
      weathero = new Map([[eact4, eact4.length | parseInt(`${watchnowbgc}`)]]);
   for (let r = 0; r < 1; r++) {
      incident1 += `${((scorepopsoundv ? 5 : 2))}`;
   }
   for (let y = 0; y < 2; y++) {
      armvaR <<= Math.min(Math.abs((String.fromCharCode(100,0) == airbnbstarselectedT ? airbnbstarselectedT.length : parseInt(`${yellowcirclebg5}`))), 5);
   }
   do {
      orangeclockf = 5 < incident1.length;
      if (orangeclockf ? !orangeclockf : orangeclockf) {
         break;
      }
   } while ((orangeclockf ? !orangeclockf : orangeclockf) && (scorepopsoundv));
   while (googlef[`${yellowcirclebg5}`] == null) {
       let searchQ = 2.0;
       let scorepopsound7 = String.fromCharCode(102,95,56,50,95,98,97,107,101,100,0);
       let configureW = 4.0;
       let hooksp = String.fromCharCode(117,110,105,110,105,116,95,119,95,54,55,0);
      if ((parseInt(`${configureW}`) / (Math.max(scorepopsound7.length, 10))) <= 1 || (scorepopsound7.length | 1) <= 2) {
         scorepopsound7 = `${hooksp.length | parseInt(`${searchQ}`)}`;
      }
         configureW /= Math.max(parseFloat(`${parseInt(`${searchQ}`)}`), 2);
      do {
         configureW += parseFloat(`${parseInt(`${configureW}`) * 2}`);
         if (configureW == 1567170.0) {
            break;
         }
      } while ((configureW == 1567170.0) && (2.41 >= (configureW - parseFloat(`${hooksp.length}`)) || (configureW - 2.41) >= 2.53));
         searchQ -= parseFloat(`${parseInt(`${searchQ}`)}`);
      if (3 > (parseInt(`${searchQ}`) + hooksp.length) || (hooksp.length + parseInt(`${searchQ}`)) > 3) {
         hooksp = "1";
      }
         configureW += parseFloat(`${scorepopsound7.length}`);
      while (5.35 < searchQ) {
         searchQ += parseFloat(`${2}`);
         break;
      }
          let libreactperfloggerjni4 = 3;
          let mbnativeI = [723, 713];
         searchQ += parseFloat(`${scorepopsound7.length << (Math.min(4, Math.abs(parseInt(`${configureW}`))))}`);
         libreactperfloggerjni4 &= 2 & libreactperfloggerjni4;
         mbnativeI.push(3);
      if (scorepopsound7.endsWith(`${searchQ}`)) {
         scorepopsound7 += `${scorepopsound7.length}`;
      }
      do {
         searchQ += (parseFloat(`${scorepopsound7 == String.fromCharCode(73,0) ? scorepopsound7.length : parseInt(`${configureW}`)}`));
         if (searchQ == 3662098.0) {
            break;
         }
      } while ((scorepopsound7.includes(`${searchQ}`)) && (searchQ == 3662098.0));
         configureW += parseFloat(`${parseInt(`${searchQ}`) / (Math.max(8, scorepopsound7.length))}`);
       let unselectedl = 0.0;
      googlef = new Map([[`${orangeclockf}`, ((orangeclockf ? 3 : 1) >> (Math.min(Math.abs(2), 4)))]]);
      break;
   }
   if (eact4.length == incident1.length) {
      incident1 += `${parseInt(`${predictionbannersharedq}`) >> (Math.min(1, Math.abs(3)))}`;
   }

      return this.formatTime(time);
      eact4 = `${parseInt(`${yellowcirclebg5}`)}`;
   do {
      orangeclockf = scorepopsoundv;
      if (orangeclockf ? !orangeclockf : orangeclockf) {
         break;
      }
   } while ((orangeclockf) && (orangeclockf ? !orangeclockf : orangeclockf));
       let selectedm = String.fromCharCode(105,95,50,53,95,99,111,110,103,0);
      while (selectedm.length <= 5 && selectedm.length <= 5) {
         selectedm += "3";
         break;
      }
          let injuryC = 1;
          let benefitQ = String.fromCharCode(103,95,53,95,103,117,101,115,115,0);
         selectedm += `${3 + benefitQ.length}`;
         injuryC <<= Math.min(Math.abs(injuryC), 1);
         benefitQ = `${injuryC}`;
         selectedm += `${2 << (Math.min(1, selectedm.length))}`;
      orangeclockf = incident1 == airbnbstarselectedT;
   while (2 == weathero.size) {
      scorepopsoundv = String.fromCharCode(83,0) == airbnbstarselectedT;
      break;
   }
   do {
       let lights = 4;
       let stepV = 0;
         stepV /= Math.max(1 ^ stepV, 1);
      for (let m = 0; m < 3; m++) {
         lights -= stepV / (Math.max(2, 10));
      }
         lights ^= stepV;
         lights += 3;
       let airbnbstarselected9 = [812, 456, 104];
       let qaag2 = [String.fromCharCode(108,105,116,116,108,101,95,105,95,55,55,0), String.fromCharCode(114,119,110,100,95,121,95,53,49,0), String.fromCharCode(113,117,97,108,105,102,105,101,114,115,95,52,95,56,56,0)];
         stepV >>= Math.min(1, Math.abs(stepV << (Math.min(1, Math.abs(3)))));
      predictionbannersharedq *= parseFloat(`${parseInt(`${watchnowbgc}`)}`);
      if (predictionbannersharedq == 4753628.0) {
         break;
      }
   } while ((predictionbannersharedq == 4753628.0) && (2.7 < (predictionbannersharedq + 2.61)));
   do {
      weathero[`${predictionbannersharedq}`] = eact4.length ^ parseInt(`${predictionbannersharedq}`);
      if (weathero.size == 3859415) {
         break;
      }
   } while ((orangeclockf) && (weathero.size == 3859415));

    }

    return this.formatTime(this.state.currentTime);
   do {
      station9 = "1";
      if (2070389 == station9.length) {
         break;
      }
   } while ((2070389 == station9.length) && (yellowcirclebg5 > 1.66));
   for (let e = 0; e < 3; e++) {
      predictionbannersharedq /= Math.max(5, parseFloat(`${station9.length}`));
   }
   while (1 == station9.length) {
       let iconsaveimages = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,95,53,95,50,54,0);
       let sports1 = 3.0;
       let desc_ = 3;
       let goallogoJ = [511, 573];
       let vipsportE = String.fromCharCode(109,105,100,110,105,103,104,116,95,113,95,51,51,0);
         sports1 -= parseFloat(`${desc_}`);
      while (1.76 == sports1) {
         desc_ |= vipsportE.length;
         break;
      }
      while (goallogoJ.length > parseInt(`${sports1}`)) {
         sports1 -= parseFloat(`${iconsaveimages.length}`);
         break;
      }
          let dependencies9 = String.fromCharCode(107,95,54,54,95,99,101,110,99,0);
         iconsaveimages += `${desc_}`;
         dependencies9 = `${dependencies9.length - 3}`;
      do {
         goallogoJ = [2 % (Math.max(1, desc_))];
         if (goallogoJ.length == 1732211) {
            break;
         }
      } while ((goallogoJ.length == 1732211) && (vipsportE.startsWith(`${goallogoJ.length}`)));
      if (3 >= goallogoJ.length) {
         goallogoJ.push(iconsaveimages.length + desc_);
      }
         desc_ <<= Math.min(3, Math.abs(desc_ << (Math.min(5, Math.abs(1)))));
         desc_ |= (vipsportE == String.fromCharCode(115,0) ? vipsportE.length : iconsaveimages.length);
         goallogoJ.push(iconsaveimages.length * vipsportE.length);
         goallogoJ = [vipsportE.length];
      if (vipsportE.length <= desc_) {
          let switch_lk = 1;
          let gifgoalO = [835, 548, 330];
          let footballfieldx = String.fromCharCode(107,101,121,102,114,97,109,101,115,95,114,95,55,50,0);
         desc_ ^= iconsaveimages.length / 3;
         switch_lk %= Math.max(3, 1);
         gifgoalO = [gifgoalO.length / 2];
         footballfieldx = "3";
      }
      for (let n = 0; n < 2; n++) {
          let dependencyu = String.fromCharCode(98,95,50,56,95,100,114,105,102,116,105,110,103,0);
          let airbnbstarP = false;
          let championy = String.fromCharCode(101,95,52,48,95,99,102,102,116,102,0);
          let giftbuttonr = true;
          let prediction8 = String.fromCharCode(113,95,56,50,95,105,112,113,102,0);
         goallogoJ = [(2 / (Math.max(3, (giftbuttonr ? 4 : 4))))];
         dependencyu = "1";
         airbnbstarP = prediction8.length == 22;
         championy = `${dependencyu.length}`;
         giftbuttonr = 97 <= dependencyu.length;
         prediction8 = `${championy.length}`;
      }
      while (sports1 <= 5.52) {
         iconsaveimages = `${2 - iconsaveimages.length}`;
         break;
      }
         iconsaveimages += `${desc_ % (Math.max(parseInt(`${sports1}`), 9))}`;
      do {
          let backwhite2 = [125, 997];
          let appsL = 3;
          let playlistS = String.fromCharCode(112,97,103,101,115,95,104,95,56,54,0);
         desc_ |= 2;
         backwhite2.push(playlistS.length);
         appsL %= Math.max(backwhite2.length & appsL, 1);
         playlistS += `${playlistS.length >> (Math.min(Math.abs(2), 2))}`;
         if (desc_ == 3262023) {
            break;
         }
      } while ((!iconsaveimages.includes(`${desc_}`)) && (desc_ == 3262023));
      station9 += `${weathero.size + station9.length}`;
      break;
   }
      predictionbannersharedq *= (parseFloat(`${incident1 == String.fromCharCode(118,0) ? incident1.length : (orangeclockf ? 4 : 1)}`));
      yellowcirclebg5 += parseFloat(`${airbnbstarselectedT.length >> (Math.min(1, Math.abs(googlef.size)))}`);
       let halfA = 0.0;
       let countdownD = new Map([[String.fromCharCode(100,95,50,57,95,115,117,99,99,101,115,115,102,117,108,108,121,0),100], [String.fromCharCode(120,112,114,118,95,53,95,52,50,0),587], [String.fromCharCode(118,95,57,53,95,114,100,109,117,108,116,0),378]]);
      if ((1.79 - halfA) == 5.41) {
         countdownD[`${halfA}`] = countdownD.size;
      }
      if (countdownD.size >= 1) {
         countdownD = new Map([[`${countdownD.size}`, 3]]);
      }
         halfA -= parseInt(`${halfA}`) % (Math.max(countdownD.size, 3));
      do {
         countdownD = new Map([[`${countdownD.size}`, countdownD.size]]);
         if (countdownD.size == 4481456) {
            break;
         }
      } while ((countdownD.size == 4481456) && (countdownD[`${halfA}`] == null));
      if (countdownD[`${halfA}`] == null) {
          let icon9 = [String.fromCharCode(112,105,120,101,108,117,116,105,108,115,95,53,95,51,55,0), String.fromCharCode(99,95,54,53,95,115,105,122,101,115,0), String.fromCharCode(115,101,99,111,110,100,95,55,95,51,52,0)];
          let weather7 = [458, 223, 82];
          let wifirouterH = String.fromCharCode(110,105,100,108,110,95,51,95,57,53,0);
         countdownD = new Map([[`${weather7.length}`, (wifirouterH == String.fromCharCode(89,0) ? wifirouterH.length : weather7.length)]]);
         icon9.push(icon9.length % 1);
      }
      do {
          let viewsC = false;
         countdownD = new Map([[`${countdownD.size}`, ((viewsC ? 4 : 5) | 1)]]);
         if (countdownD.size == 1517688) {
            break;
         }
      } while ((countdownD.size == 3) && (countdownD.size == 1517688));
      orangeclockf = countdownD[`${armvaR}`] != null;

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
       let utilsA = String.fromCharCode(110,115,117,112,112,111,114,116,101,100,95,49,95,54,53,0);
    let sellf = new Map([[String.fromCharCode(103,95,57,50,95,105,100,119,116,0),266], [String.fromCharCode(99,111,108,108,97,112,115,105,110,103,95,119,95,57,55,0),119], [String.fromCharCode(97,95,52,50,95,97,116,111,102,0),210]]);
    let mbnativeadvanced9 = String.fromCharCode(122,95,54,57,0);
    let basketballp = 1.0;
    let agreementl = 1;
    let iconcurrentmatchl = String.fromCharCode(98,97,99,107,115,112,97,99,101,95,52,95,55,52,0);
    let librrcw = [487, 911];
    let componentregistryT = 4.0;
   do {
       let lcopy_aO = new Map([[String.fromCharCode(109,112,101,103,97,117,100,105,111,95,100,95,57,56,0),354], [String.fromCharCode(112,95,54,53,95,99,97,110,0),754]]);
       let episodeM = String.fromCharCode(110,95,55,56,95,115,105,110,103,108,101,116,97,98,108,101,0);
       let iconclosewhitebgP = [212, 505, 79];
       let middleh = 5.0;
          let predictionZ = 4.0;
          let selecth = [471, 35, 391];
          let penaltyshootnogoaln = 4;
         iconclosewhitebgP = [lcopy_aO.size % (Math.max(2, episodeM.length))];
         predictionZ += parseInt(`${predictionZ}`);
         selecth = [2 | selecth.length];
         penaltyshootnogoaln >>= Math.min(1, Math.abs(2 + selecth.length));
          let librrcH = false;
         middleh -= ((librrcH ? 4 : 3) % 3);
         lcopy_aO = new Map([[`${lcopy_aO.size}`, 2 << (Math.min(3, Math.abs(lcopy_aO.size)))]]);
         iconclosewhitebgP.push(parseInt(`${middleh}`));
         iconclosewhitebgP.push(3 ^ lcopy_aO.size);
      while (episodeM.length == 1) {
          let iconsharefriends5 = false;
          let securitya = 1.0;
          let flyerT = String.fromCharCode(106,117,108,105,97,110,95,48,95,49,50,0);
         lcopy_aO[`${episodeM}`] = episodeM.length;
         iconsharefriends5 = securitya > flyerT.length;
         securitya -= ((iconsharefriends5 ? 3 : 2) | parseInt(`${securitya}`));
         flyerT += `${((iconsharefriends5 ? 3 : 2))}`;
         break;
      }
      do {
         iconclosewhitebgP = [3 * iconclosewhitebgP.length];
         if (iconclosewhitebgP.length == 3122652) {
            break;
         }
      } while ((episodeM.length > iconclosewhitebgP.length) && (iconclosewhitebgP.length == 3122652));
         iconclosewhitebgP.push(iconclosewhitebgP.length);
      if (4 < (episodeM.length | 2) && (parseInt(`${middleh}`) * 2) < 4) {
          let success7 = 3.0;
         middleh *= 2 >> (Math.min(3, iconclosewhitebgP.length));
         success7 += parseInt(`${success7}`);
      }
      for (let q = 0; q < 3; q++) {
          let hooksz = String.fromCharCode(106,95,49,55,95,101,110,117,109,0);
          let notificationgrayq = String.fromCharCode(102,105,116,116,101,100,95,113,95,54,57,0);
          let clearn = 4.0;
          let iconclosewhitebgs = 1.0;
         iconclosewhitebgP = [iconclosewhitebgP.length + 1];
         hooksz += `${3 | parseInt(`${iconclosewhitebgs}`)}`;
         notificationgrayq = `${parseInt(`${clearn}`) % (Math.max(3, 5))}`;
         clearn += 3 * parseInt(`${iconclosewhitebgs}`);
      }
         episodeM = `${parseInt(`${middleh}`) % (Math.max(1, iconclosewhitebgP.length))}`;
         episodeM = `${episodeM.length}`;
      agreementl &= lcopy_aO.size;
      if (agreementl == 2368237) {
         break;
      }
   } while ((agreementl < basketballp) && (agreementl == 2368237));
   do {
      librrcw.push(1);
      if (librrcw.length == 1172124) {
         break;
      }
   } while ((librrcw.length == 1172124) && (2.71 > (basketballp + librrcw.length) && (parseInt(`${basketballp}`) + librrcw.length) > 2));
   for (let g = 0; g < 1; g++) {
      librrcw = [3];
   }
      mbnativeadvanced9 += `${parseInt(`${basketballp}`) ^ mbnativeadvanced9.length}`;
      sellf = new Map([[`${sellf.size}`, 3 % (Math.max(3, parseInt(`${basketballp}`)))]]);
   for (let f = 0; f < 3; f++) {
      mbnativeadvanced9 = `${parseInt(`${basketballp}`)}`;
   }
   while ((iconcurrentmatchl.length + librrcw.length) < 4 && (4 + librrcw.length) < 5) {
      iconcurrentmatchl += "2";
      break;
   }

    const percent = this.state.currentTime / this.state.duration;
    return this.player.seekerWidth * percent;
      sellf = new Map([[`${sellf.size}`, sellf.size >> (Math.min(librrcw.length, 4))]]);
   if (basketballp >= librrcw.length) {
      basketballp *= (iconcurrentmatchl == String.fromCharCode(75,0) ? iconcurrentmatchl.length : parseInt(`${basketballp}`));
   }
   for (let p = 0; p < 2; p++) {
      sellf = new Map([[`${sellf.size}`, (String.fromCharCode(88,0) == mbnativeadvanced9 ? mbnativeadvanced9.length : sellf.size)]]);
   }
      iconcurrentmatchl = `${iconcurrentmatchl.length}`;
   do {
      utilsA += `${parseInt(`${componentregistryT}`)}`;
      if (utilsA == String.fromCharCode(112,110,121,57,115,0)) {
         break;
      }
   } while ((utilsA == String.fromCharCode(112,110,121,57,115,0)) && (!iconcurrentmatchl.startsWith(utilsA)));
   if (2 == (sellf.size * librrcw.length) && 2 == (sellf.size * librrcw.length)) {
      librrcw = [utilsA.length / 3];
   }
   do {
      componentregistryT /= Math.max(1, 1);
      if (componentregistryT == 4124005.0) {
         break;
      }
   } while ((componentregistryT == 4124005.0) && (4 >= librrcw.length));

  }

   
  calculateTimeFromSeekerPosition() {
       let teamY = new Map([[String.fromCharCode(112,107,103,99,111,110,102,105,103,95,113,95,55,0),String.fromCharCode(107,95,51,95,109,98,101,100,116,108,115,0)], [String.fromCharCode(115,109,112,116,101,98,97,114,115,95,115,95,55,51,0),String.fromCharCode(112,95,56,51,95,99,111,109,112,97,114,0)]]);
    let buffer2 = 1;
    let whitetickX = String.fromCharCode(101,95,56,52,95,104,97,118,105,110,103,0);
    let skipi = 3.0;
    let macau9 = 4;
    let styleY = String.fromCharCode(113,95,54,51,95,112,97,116,99,104,0);
    let orangeF = String.fromCharCode(98,95,48,95,114,111,103,114,101,115,115,0);
    let screenm = String.fromCharCode(106,95,56,57,95,108,97,116,101,115,116,0);
    let flipperb = String.fromCharCode(115,101,116,116,105,110,103,115,95,116,95,54,51,0);
    let otherW = 3.0;
    let imageactionlive0 = String.fromCharCode(109,95,51,57,95,115,101,97,114,99,104,0);
    let brightnessc = String.fromCharCode(108,101,110,103,116,104,95,114,95,51,52,0);
    let left5 = 3;
   if ((macau9 | 4) > 4) {
      flipperb += `${macau9 + 2}`;
   }
       let refreshH = String.fromCharCode(100,95,52,52,95,115,97,109,112,0);
       let iconadslinkZ = String.fromCharCode(112,105,120,101,108,102,108,111,97,116,95,97,95,51,51,0);
       let config2 = 0;
          let clearY = [329, 765];
          let gradlewl = 4;
          let matches2 = String.fromCharCode(114,101,115,105,115,116,97,110,99,101,95,117,95,55,50,0);
         refreshH += `${config2}`;
         clearY.push(matches2.length & 2);
         gradlewl -= matches2.length;
      if (5 < (config2 & refreshH.length) || (5 & refreshH.length) < 4) {
          let becomem = String.fromCharCode(100,95,53,50,95,115,99,97,108,97,114,0);
          let iconbellT = new Map([[String.fromCharCode(118,95,52,56,95,115,101,99,116,105,111,110,115,0),String.fromCharCode(109,97,106,111,114,95,104,95,56,53,0)], [String.fromCharCode(110,95,49,48,95,99,97,108,99,0),String.fromCharCode(102,95,49,54,95,116,111,103,103,108,101,0)], [String.fromCharCode(116,95,53,55,95,109,105,110,114,0),String.fromCharCode(117,118,109,118,95,99,95,54,56,0)]]);
          let mbbid6 = new Map([[String.fromCharCode(102,95,53,95,116,111,98,105,116,0),String.fromCharCode(99,121,99,108,101,99,108,111,99,107,95,97,95,53,51,0)], [String.fromCharCode(122,95,50,52,95,115,108,105,100,101,0),String.fromCharCode(115,116,97,98,105,108,105,122,97,116,105,111,110,95,108,95,54,57,0)]]);
          let bdxadsdka = [746, 591];
         config2 += config2 + 2;
         becomem += `${2 / (Math.max(2, mbbid6.size))}`;
         iconbellT[becomem] = bdxadsdka.length >> (Math.min(becomem.length, 5));
         mbbid6 = new Map([[`${mbbid6.size}`, becomem.length]]);
         bdxadsdka = [2 + mbbid6.size];
      }
         iconadslinkZ = `${refreshH.length}`;
         iconadslinkZ += "3";
      for (let m = 0; m < 3; m++) {
         config2 ^= config2 | 2;
      }
       let libreanimatedC = 1.0;
       let redcirclebgS = 4.0;
          let fcdaebecbcbafcdfceaaeccfeacdbJ = true;
         iconadslinkZ += `${iconadslinkZ.length}`;
         fcdaebecbcbafcdfceaaeccfeacdbJ = !fcdaebecbcbafcdfceaaeccfeacdbJ || fcdaebecbcbafcdfceaaeccfeacdbJ;
         config2 >>= Math.min(Math.abs(parseInt(`${redcirclebgS}`) / (Math.max(2, 7))), 4);
         config2 /= Math.max(3, (String.fromCharCode(74,0) == refreshH ? refreshH.length : parseInt(`${libreanimatedC}`)));
      imageactionlive0 = `${screenm.length / (Math.max(1, 7))}`;
   do {
      whitetickX += `${(String.fromCharCode(74,0) == imageactionlive0 ? parseInt(`${skipi}`) : imageactionlive0.length)}`;
      if (whitetickX == String.fromCharCode(54,114,104,95,99,101,113,117,100,0)) {
         break;
      }
   } while ((whitetickX == String.fromCharCode(54,114,104,95,99,101,113,117,100,0)) && (whitetickX.length > 2));
      orangeF = `${styleY.length}`;
   if (3 >= (macau9 + whitetickX.length)) {
      macau9 += orangeF.length % (Math.max(3, 7));
   }
      screenm += `${(String.fromCharCode(78,0) == imageactionlive0 ? imageactionlive0.length : screenm.length)}`;
   while (orangeF == whitetickX) {
      whitetickX = `${buffer2 - whitetickX.length}`;
      break;
   }
   do {
      whitetickX += "3";
      if (whitetickX.length == 2201414) {
         break;
      }
   } while ((whitetickX.startsWith(styleY)) && (whitetickX.length == 2201414));
   for (let q = 0; q < 3; q++) {
       let libruntimeexecutorR = 0.0;
       let selectS = String.fromCharCode(105,95,51,95,115,116,114,105,100,105,110,103,0);
       let latnT = String.fromCharCode(101,95,50,51,95,101,108,115,116,0);
      while (selectS.startsWith(`${libruntimeexecutorR}`)) {
         libruntimeexecutorR *= parseFloat(`${parseInt(`${libruntimeexecutorR}`)}`);
         break;
      }
      while (3 > selectS.length) {
         selectS += `${(String.fromCharCode(120,0) == latnT ? latnT.length : parseInt(`${libruntimeexecutorR}`))}`;
         break;
      }
       let disconnectedY = 2.0;
       let commentb = 1.0;
      while (!latnT.endsWith(`${libruntimeexecutorR}`)) {
          let libjsijniprofilerK = 1;
          let soundc = 2;
          let airbnbstarselectedK = 3;
          let shareblack9 = 4;
         latnT = `${1 >> (Math.min(2, Math.abs(soundc)))}`;
         libjsijniprofilerK -= 3;
         soundc *= libjsijniprofilerK >> (Math.min(Math.abs(2), 2));
         airbnbstarselectedK += airbnbstarselectedK << (Math.min(3, Math.abs(shareblack9)));
         shareblack9 -= 1 - airbnbstarselectedK;
         break;
      }
          let chartd = String.fromCharCode(113,95,54,50,95,115,121,115,114,97,110,100,0);
          let footballfiledlayoutl = String.fromCharCode(119,104,101,116,104,101,114,95,120,95,56,50,0);
          let downQ = false;
         latnT = `${chartd.length % (Math.max(4, latnT.length))}`;
         chartd = `${(footballfiledlayoutl.length << (Math.min(2, Math.abs((downQ ? 5 : 4)))))}`;
         footballfiledlayoutl = `${footballfiledlayoutl.length % (Math.max(2, 2))}`;
      for (let o = 0; o < 1; o++) {
          let acceptedE = 1.0;
         latnT += `${selectS.length}`;
         acceptedE += parseFloat(`${1}`);
      }
         disconnectedY -= parseFloat(`${parseInt(`${libruntimeexecutorR}`) / 1}`);
         selectS = `${selectS.length << (Math.min(latnT.length, 3))}`;
         disconnectedY /= Math.max(parseFloat(`${parseInt(`${libruntimeexecutorR}`)}`), 4);
      screenm += `${teamY.size + macau9}`;
   }
   if (5 > screenm.length) {
      brightnessc += `${orangeF.length}`;
   }

    const percent = this.state.seekerPosition / this.player.seekerWidth;
    return this.state.duration * percent;
       let canvasU = String.fromCharCode(112,95,51,53,95,100,98,105,0);
         canvasU = `${canvasU.length ^ canvasU.length}`;
      for (let z = 0; z < 1; z++) {
          let notificationfillemptyu = 2.0;
         canvasU += `${1 | parseInt(`${notificationfillemptyu}`)}`;
      }
      if (!canvasU.includes(`${canvasU.length}`)) {
         canvasU = `${canvasU.length ^ 1}`;
      }
      styleY += `${2 >> (Math.min(1, Math.abs(teamY.size)))}`;
      styleY += `${parseInt(`${otherW}`) - 2}`;
       let videovarO = String.fromCharCode(112,111,108,121,103,111,110,95,101,95,55,57,0);
      if (!videovarO.endsWith(`${videovarO.length}`)) {
          let modelu = String.fromCharCode(99,111,110,116,97,105,110,105,110,103,95,105,95,49,0);
          let entryF = new Map([[String.fromCharCode(119,95,55,51,95,102,105,114,115,116,112,97,115,115,0),933], [String.fromCharCode(116,114,97,110,115,102,101,114,114,105,110,103,95,107,95,55,55,0),171]]);
          let containerM = String.fromCharCode(117,110,98,108,111,99,107,105,110,103,95,101,95,55,53,0);
          let defaultprofilepicw = new Map([[String.fromCharCode(118,95,54,57,95,108,105,98,97,118,117,116,105,108,0),true ], [String.fromCharCode(119,95,52,51,95,100,101,114,101,103,105,115,116,101,114,0),true ], [String.fromCharCode(111,95,50,57,95,105,109,112,108,105,99,105,116,0),true ]]);
         videovarO += `${2 + containerM.length}`;
         modelu += `${entryF.size}`;
         entryF[modelu] = entryF.size;
         containerM = "3";
         defaultprofilepicw[modelu] = 2;
      }
          let shielddoneP = String.fromCharCode(107,95,49,57,95,111,98,115,101,114,118,101,100,0);
          let disconnectedb = String.fromCharCode(103,95,51,51,95,109,97,99,101,120,97,109,112,108,101,0);
         videovarO += `${videovarO.length >> (Math.min(shielddoneP.length, 5))}`;
         shielddoneP += `${disconnectedb.length}`;
         disconnectedb += `${disconnectedb.length}`;
         videovarO += `${videovarO.length % (Math.max(videovarO.length, 3))}`;
      imageactionlive0 = `${whitetickX.length / (Math.max(3, 6))}`;
   if (1 >= (imageactionlive0.length >> (Math.min(Math.abs(1), 4))) && 1 >= (macau9 >> (Math.min(Math.abs(1), 4)))) {
       let vipsportq = String.fromCharCode(100,95,52,50,95,100,99,115,99,116,112,0);
       let connectionv = String.fromCharCode(100,95,57,54,95,99,111,100,105,110,103,0);
       let backwhitea = 0.0;
       let iconnewchate = 5.0;
      do {
         connectionv += `${vipsportq.length / 1}`;
         if (String.fromCharCode(107,118,105,112,55,0) == connectionv) {
            break;
         }
      } while ((connectionv.length > vipsportq.length) && (String.fromCharCode(107,118,105,112,55,0) == connectionv));
         vipsportq += `${parseInt(`${iconnewchate}`) * 1}`;
      while ((vipsportq.length + parseInt(`${iconnewchate}`)) < 3) {
         iconnewchate -= parseInt(`${backwhitea}`) - connectionv.length;
         break;
      }
      if ((backwhitea / (Math.max(1, 5))) <= 4.25) {
         iconnewchate += 2 / (Math.max(parseInt(`${iconnewchate}`), 8));
      }
      do {
         connectionv = "1";
         if (String.fromCharCode(111,111,95,109,118,0) == connectionv) {
            break;
         }
      } while ((String.fromCharCode(111,111,95,109,118,0) == connectionv) && (vipsportq.endsWith(`${connectionv.length}`)));
      do {
         iconnewchate += 1 + parseInt(`${backwhitea}`);
         if (iconnewchate == 754706.0) {
            break;
         }
      } while ((1 <= (connectionv.length - parseInt(`${iconnewchate}`)) || 2 <= (1 - parseInt(`${iconnewchate}`))) && (iconnewchate == 754706.0));
      for (let j = 0; j < 1; j++) {
          let iconuserk = String.fromCharCode(110,111,100,101,115,101,116,95,121,95,51,57,0);
         backwhitea -= parseFloat(`${vipsportq.length}`);
         iconuserk = `${iconuserk.length}`;
      }
       let flagd = new Map([[String.fromCharCode(97,98,105,95,116,95,56,54,0),true ], [String.fromCharCode(113,117,97,114,116,95,118,95,56,54,0),false ]]);
       let watchc = new Map([[String.fromCharCode(115,99,114,101,101,110,99,97,115,116,95,106,95,54,52,0),true ], [String.fromCharCode(115,95,57,53,95,112,114,111,112,111,115,101,0),false ], [String.fromCharCode(118,95,53,57,95,115,116,114,105,100,105,110,103,0),true ]]);
         watchc = new Map([[`${watchc.size}`, 3]]);
      for (let l = 0; l < 3; l++) {
         watchc = new Map([[`${flagd.size}`, 2 & flagd.size]]);
      }
         watchc = new Map([[`${watchc.size}`, watchc.size << (Math.min(connectionv.length, 2))]]);
      do {
          let umeng9 = 4;
          let long_lR = String.fromCharCode(119,97,110,116,95,106,95,52,48,0);
         backwhitea *= parseFloat(`${3}`);
         umeng9 += long_lR.length << (Math.min(Math.abs(1), 2));
         long_lR = `${long_lR.length}`;
         if (635773.0 == backwhitea) {
            break;
         }
      } while ((635773.0 == backwhitea) && (4.15 >= (5 * iconnewchate)));
      macau9 |= parseInt(`${iconnewchate}`);
   }
       let cancelT = 1.0;
      if ((cancelT * 3.2) < 2.24 || (cancelT + cancelT) < 3.2) {
          let libffmpegkitV = new Map([[String.fromCharCode(112,95,49,56,95,104,101,97,112,0),String.fromCharCode(108,111,111,112,105,110,103,95,55,95,54,55,0)], [String.fromCharCode(118,95,51,57,95,114,105,100,103,101,0),String.fromCharCode(110,111,109,105,110,97,108,95,114,95,56,49,0)], [String.fromCharCode(99,108,97,105,109,101,100,95,53,95,53,55,0),String.fromCharCode(111,102,102,101,114,95,51,95,55,55,0)]]);
          let carousell = String.fromCharCode(108,95,54,50,95,112,114,101,116,101,110,100,0);
          let privileges = [String.fromCharCode(114,97,100,102,103,95,114,95,52,49,0), String.fromCharCode(120,95,48,95,102,105,101,108,100,115,0), String.fromCharCode(107,95,53,57,95,122,105,103,122,97,103,0)];
         cancelT /= Math.max(3, 4);
         libffmpegkitV = new Map([[`${libffmpegkitV.size}`, carousell.length]]);
         carousell = `${3 ^ privileges.length}`;
         privileges = [privileges.length];
      }
         cancelT *= 3;
          let promotion_ = false;
         cancelT -= parseInt(`${cancelT}`) - 2;
         promotion_ = promotion_ || promotion_;
      skipi += 3 & macau9;
   do {
      brightnessc = `${2 - imageactionlive0.length}`;
      if (String.fromCharCode(107,50,108,120,53,99,102,50,53,114,0) == brightnessc) {
         break;
      }
   } while ((String.fromCharCode(107,50,108,120,53,99,102,50,53,114,0) == brightnessc) && (2 > (1 % (Math.max(6, brightnessc.length))) && (1 << (Math.min(2, brightnessc.length))) > 3));
   do {
      flipperb += "1";
      if (String.fromCharCode(56,97,57,0) == flipperb) {
         break;
      }
   } while ((String.fromCharCode(56,97,57,0) == flipperb) && ((2.50 * otherW) <= 1.94 || 3.36 <= (2.50 * otherW)));
       let userx = String.fromCharCode(112,111,115,116,95,101,95,57,55,0);
       let teamdetailsbgD = 1.0;
      for (let m = 0; m < 1; m++) {
         userx = `${parseInt(`${teamdetailsbgD}`) + 2}`;
      }
      if (5 < userx.length) {
         teamdetailsbgD /= Math.max(2, 2 >> (Math.min(4, userx.length)));
      }
          let countdowng = String.fromCharCode(118,109,110,99,95,48,95,49,48,0);
          let native6 = 2.0;
          let logousert = 0;
         teamdetailsbgD /= Math.max(1, parseInt(`${native6}`) - logousert);
         countdowng = "1";
         native6 += (String.fromCharCode(86,0) == countdowng ? countdowng.length : countdowng.length);
         teamdetailsbgD -= userx.length - parseInt(`${teamdetailsbgD}`);
         teamdetailsbgD /= Math.max(3, parseInt(`${teamdetailsbgD}`));
          let iconnewchatA = new Map([[String.fromCharCode(105,95,54,54,95,116,105,109,101,119,97,105,116,0),671], [String.fromCharCode(116,95,53,55,95,108,97,110,100,115,99,97,112,101,0),93], [String.fromCharCode(122,95,52,49,95,115,101,103,0),24]]);
          let e_locky = String.fromCharCode(119,101,101,107,100,97,121,115,95,111,95,57,49,0);
          let foregroundO = true;
         teamdetailsbgD *= 3;
         iconnewchatA = new Map([[`${foregroundO}`, e_locky.length]]);
         e_locky += `${(iconnewchatA.size % (Math.max(3, (foregroundO ? 5 : 1))))}`;
      screenm += `${styleY.length}`;
   if ((2 - buffer2) == 1 || 4 == (2 - buffer2)) {
       let defaultprofilepics = false;
       let zhuboq = [790, 707];
      if (zhuboq.length > 5 && (zhuboq.length - 5) > 3) {
         defaultprofilepics = zhuboq.includes(defaultprofilepics);
      }
         zhuboq = [(2 << (Math.min(2, Math.abs((defaultprofilepics ? 1 : 2)))))];
      if (zhuboq.length >= 5) {
          let untickL = [375, 186];
          let shirtw = 0.0;
          let smallbrightness6 = 2.0;
         zhuboq = [parseInt(`${shirtw}`)];
         untickL = [2];
         smallbrightness6 -= parseInt(`${smallbrightness6}`) - 1;
      }
         zhuboq.push(1);
      if (defaultprofilepics || 3 >= (zhuboq.length >> (Math.min(Math.abs(4), 3)))) {
         zhuboq = [zhuboq.length / (Math.max(1, 7))];
      }
         zhuboq.push(1);
      buffer2 |= orangeF.length;
   }
   do {
       let scheduleq = 3.0;
       let stepJ = String.fromCharCode(100,114,97,103,95,119,95,57,51,0);
       let modelsD = 0.0;
          let delegate_yya = String.fromCharCode(99,111,108,111,114,113,117,97,110,116,95,115,95,51,49,0);
         modelsD -= stepJ.length;
         delegate_yya += `${3 / (Math.max(10, delegate_yya.length))}`;
      for (let b = 0; b < 3; b++) {
         modelsD *= stepJ.length + parseInt(`${scheduleq}`);
      }
      while (4 <= (parseInt(`${modelsD}`) * stepJ.length) && (parseInt(`${modelsD}`) * 4) <= 4) {
         modelsD *= parseInt(`${scheduleq}`);
         break;
      }
          let searchbarZ = true;
          let commentV = 1.0;
          let downarrowR = true;
         stepJ += `${(String.fromCharCode(106,0) == stepJ ? stepJ.length : parseInt(`${modelsD}`))}`;
         searchbarZ = !downarrowR;
         commentV *= (parseFloat(`${(searchbarZ ? 4 : 1) & parseInt(`${commentV}`)}`));
         downarrowR = !downarrowR;
      for (let r = 0; r < 1; r++) {
          let arrowrightwithtailL = String.fromCharCode(98,95,52,56,95,115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,0);
          let righte = true;
          let iconcurrentmatchY = new Map([[String.fromCharCode(114,111,120,121,95,113,95,53,0),956], [String.fromCharCode(97,95,56,50,95,97,110,115,119,101,114,0),388], [String.fromCharCode(115,95,49,53,95,101,113,117,105,118,97,108,101,110,99,101,0),370]]);
         scheduleq += parseFloat(`${parseInt(`${modelsD}`) % 3}`);
         arrowrightwithtailL += `${((righte ? 2 : 5) | 2)}`;
         righte = iconcurrentmatchY.size > 36;
         iconcurrentmatchY[arrowrightwithtailL] = (3 << (Math.min(4, Math.abs((righte ? 2 : 3)))));
      }
      for (let i = 0; i < 2; i++) {
         scheduleq *= parseFloat(`${3 + stepJ.length}`);
      }
      if ((parseFloat(`${stepJ.length}`) - scheduleq) <= 1.71 && 4.40 <= (scheduleq - 1.71)) {
         scheduleq += parseFloat(`${parseInt(`${modelsD}`)}`);
      }
      while (modelsD > 4.69) {
          let submity = [927, 309, 88];
          let release_9tS = true;
         stepJ += `${1 + parseInt(`${modelsD}`)}`;
         submity.push(((release_9tS ? 1 : 1) / 1));
         release_9tS = submity.length > 70;
         break;
      }
      while (2 > (4 - stepJ.length)) {
          let righto = 4;
          let textlayoutmanager_ = 2;
         scheduleq += parseFloat(`${parseInt(`${modelsD}`)}`);
         righto &= 3 - righto;
         textlayoutmanager_ |= righto * textlayoutmanager_;
         break;
      }
      buffer2 <<= Math.min(Math.abs(3 % (Math.max(1, whitetickX.length))), 4);
      if (523046 == buffer2) {
         break;
      }
   } while ((523046 == buffer2) && (5 <= (buffer2 >> (Math.min(flipperb.length, 5)))));

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
       let roundE = false;
    let predictionlosst = 1.0;
    let iconarrowrightO = 5.0;
    let dnewarchdefaultsk = 2;
    let iconwatchV = false;
    let iconnotificationnewH = 4.0;
    let private_47H = [76, 94, 324];
    let rulesh = String.fromCharCode(112,111,115,116,114,111,116,97,116,101,95,57,95,52,0);
    let calendar8 = String.fromCharCode(111,112,116,105,109,117,109,95,110,95,53,56,0);
    let temperaturef = 1.0;
    let nodeS = 1.0;
    let sellmathbackgroundr = true;
    let ajaxc = false;
    let mode7 = String.fromCharCode(108,111,103,95,103,95,55,48,0);
      roundE = predictionlosst <= 87.66 || 23 <= private_47H.length;
      predictionlosst += 3;
      roundE = 99.88 <= iconnotificationnewH && 99.88 <= iconarrowrightO;
   do {
      iconarrowrightO += parseInt(`${iconarrowrightO}`) << (Math.min(Math.abs(2), 3));
      if (3308286.0 == iconarrowrightO) {
         break;
      }
   } while ((3308286.0 == iconarrowrightO) && ((calendar8.length + iconarrowrightO) > 3.27 || (calendar8.length + iconarrowrightO) > 3.27));
      temperaturef *= 2;
      iconwatchV = private_47H.includes(iconarrowrightO);
      predictionlosst *= parseInt(`${iconarrowrightO}`);
      rulesh = "3";
   while (5 >= (1 >> (Math.min(5, private_47H.length)))) {
       let annerq = 2;
       let downloadz = false;
       let upload0 = String.fromCharCode(103,101,110,101,114,105,99,95,102,95,52,55,0);
       let settingsl = String.fromCharCode(100,105,114,101,99,116,105,111,110,95,118,95,51,51,0);
       let androids = 1.0;
      do {
         androids *= upload0.length;
         if (androids == 22715.0) {
            break;
         }
      } while (((androids / (Math.max(3, upload0.length))) > 3.25) && (androids == 22715.0));
      do {
         settingsl = `${upload0.length}`;
         if (235106 == settingsl.length) {
            break;
         }
      } while ((androids >= settingsl.length) && (235106 == settingsl.length));
      for (let v = 0; v < 2; v++) {
         androids *= annerq * 1;
      }
      if (!downloadz) {
         downloadz = upload0.length >= 74;
      }
      while (annerq <= 5) {
         downloadz = settingsl.length >= parseInt(`${androids}`);
         break;
      }
      if ((5 | annerq) < 1) {
          let gemfileD = true;
          let helperZ = String.fromCharCode(104,105,103,104,95,57,95,51,0);
         downloadz = upload0.length >= 98;
         gemfileD = (74 >= ((gemfileD ? 74 : helperZ.length) % (Math.max(6, helperZ.length))));
      }
          let kicko = new Map([[String.fromCharCode(114,98,115,112,95,99,95,56,52,0),721], [String.fromCharCode(114,101,115,105,122,101,95,55,95,52,54,0),86], [String.fromCharCode(106,95,55,52,95,101,109,117,101,100,103,101,0),883]]);
         androids -= annerq;
         kicko = new Map([[`${kicko.size}`, 2 + kicko.size]]);
      do {
         downloadz = String.fromCharCode(107,0) == settingsl;
         if (downloadz ? !downloadz : downloadz) {
            break;
         }
      } while (((annerq & 2) > 3 && downloadz) && (downloadz ? !downloadz : downloadz));
      do {
         upload0 = `${(settingsl == String.fromCharCode(48,0) ? annerq : settingsl.length)}`;
         if (String.fromCharCode(99,48,120,53,97,104,105,57,103,0) == upload0) {
            break;
         }
      } while ((!upload0.startsWith(`${downloadz}`)) && (String.fromCharCode(99,48,120,53,97,104,105,57,103,0) == upload0));
      if (1 == (settingsl.length * parseInt(`${androids}`)) || 5.99 == (settingsl.length * androids)) {
         androids += (2 & (downloadz ? 1 : 1));
      }
      if (2 <= (upload0.length * 3)) {
         upload0 = "3";
      }
          let footballtrophyH = [537, 340];
          let leagueL = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,111,114,95,122,95,51,53,0);
         downloadz = (settingsl.length & annerq) <= 78;
         footballtrophyH.push((leagueL == String.fromCharCode(107,0) ? leagueL.length : footballtrophyH.length));
          let defaultplayerimgg = String.fromCharCode(121,95,52,52,95,102,99,102,115,0);
          let sharemodalY = 0;
         downloadz = upload0.length < 41;
         defaultplayerimgg = `${sharemodalY / 2}`;
         sharemodalY *= sharemodalY;
      for (let o = 0; o < 1; o++) {
         upload0 += `${annerq}`;
      }
          let cornerkickr = false;
          let matchesd = 3.0;
          let bgvipxvodu = true;
         androids -= ((cornerkickr ? 2 : 3) / (Math.max(4, parseInt(`${matchesd}`))));
         cornerkickr = bgvipxvodu;
         matchesd *= ((bgvipxvodu ? 5 : 4));
      private_47H = [private_47H.length & 1];
      break;
   }
       let volumea = 5;
       let styleO = String.fromCharCode(114,116,108,95,57,95,50,50,0);
       let over6 = 1.0;
      do {
         over6 += (parseFloat(`${String.fromCharCode(88,0) == styleO ? parseInt(`${over6}`) : styleO.length}`));
         if (4393023.0 == over6) {
            break;
         }
      } while ((2 == volumea) && (4393023.0 == over6));
      for (let l = 0; l < 1; l++) {
          let downarrow_ = new Map([[String.fromCharCode(108,105,98,120,95,97,95,56,55,0),String.fromCharCode(118,95,48,95,98,102,108,121,0)], [String.fromCharCode(97,95,54,55,95,102,102,106,110,105,0),String.fromCharCode(110,95,49,52,95,98,114,101,97,107,105,110,103,0)], [String.fromCharCode(112,97,103,101,104,97,115,104,95,118,95,53,52,0),String.fromCharCode(112,117,110,99,116,117,97,116,105,111,110,95,101,95,50,53,0)]]);
         styleO = `${parseInt(`${over6}`) & downarrow_.size}`;
      }
         styleO += `${volumea << (Math.min(Math.abs(parseInt(`${over6}`)), 5))}`;
      for (let w = 0; w < 3; w++) {
         styleO = `${parseInt(`${over6}`) * 3}`;
      }
      if (styleO.length < 1) {
         styleO += `${styleO.length * volumea}`;
      }
         volumea %= Math.max(5, styleO.length);
          let promotioni = [String.fromCharCode(100,101,118,101,108,111,112,101,114,95,104,95,49,52,0), String.fromCharCode(114,95,49,53,95,100,101,115,112,105,108,108,0)];
         styleO = `${volumea / 3}`;
         promotioni = [3];
      while (2.51 == (4.51 - over6)) {
         volumea <<= Math.min(4, Math.abs(2));
         break;
      }
      while (styleO.startsWith(`${over6}`)) {
         over6 /= Math.max(3, parseFloat(`${3 + parseInt(`${over6}`)}`));
         break;
      }
      calendar8 = `${3 * styleO.length}`;
      iconnotificationnewH /= Math.max(parseFloat(`${parseInt(`${predictionlosst}`)}`), 2);
       let charth = String.fromCharCode(112,95,50,56,95,117,110,101,115,99,97,112,105,110,103,0);
       let textH = String.fromCharCode(117,115,101,114,95,54,95,56,53,0);
      if (charth.length == textH.length) {
          let libavfilterX = String.fromCharCode(104,95,56,55,95,112,114,111,112,111,114,116,105,111,110,0);
          let subsn = 0.0;
          let libavformatH = String.fromCharCode(98,95,51,53,95,97,116,116,114,105,98,115,0);
          let placeholder6 = 2.0;
          let trashV = String.fromCharCode(116,97,110,115,105,103,95,113,95,55,54,0);
         charth += `${(libavfilterX == String.fromCharCode(112,0) ? libavfilterX.length : parseInt(`${subsn}`))}`;
         subsn -= parseInt(`${placeholder6}`) << (Math.min(Math.abs(1), 5));
         libavformatH += `${(libavformatH == String.fromCharCode(69,0) ? parseInt(`${placeholder6}`) : libavformatH.length)}`;
         trashV = `${parseInt(`${placeholder6}`) % (Math.max(6, libavformatH.length))}`;
      }
          let iconnointernetJ = new Map([[String.fromCharCode(110,95,54,57,95,97,110,103,117,108,97,114,0),289], [String.fromCharCode(104,95,52,56,95,115,101,115,115,111,110,0),735], [String.fromCharCode(118,95,49,49,95,99,114,111,119,100,105,110,0),313]]);
          let yellowscoreball1 = String.fromCharCode(108,95,49,48,95,112,97,110,105,99,0);
         charth += `${(yellowscoreball1 == String.fromCharCode(49,0) ? iconnointernetJ.size : yellowscoreball1.length)}`;
          let countdownZ = false;
          let homeplayert = new Map([[String.fromCharCode(112,114,105,109,97,114,121,95,102,95,57,52,0),true ], [String.fromCharCode(112,98,108,111,99,107,115,95,110,95,56,49,0),false ], [String.fromCharCode(99,95,56,49,95,116,105,109,101,115,116,97,109,112,101,100,0),true ]]);
         charth += `${((countdownZ ? 2 : 2) & 2)}`;
         countdownZ = homeplayert.size <= homeplayert.size;
          let watchnowbg3 = true;
         textH = `${(charth == String.fromCharCode(107,0) ? textH.length : charth.length)}`;
         watchnowbg3 = !watchnowbg3;
         charth += `${charth.length}`;
         textH = `${charth.length}`;
      nodeS *= parseFloat(`${3 % (Math.max(parseInt(`${iconarrowrightO}`), 10))}`);
   for (let s = 0; s < 3; s++) {
      rulesh = "2";
   }
   while (2 <= (2 + rulesh.length) || (rulesh.length + private_47H.length) <= 2) {
       let splashL = 0.0;
       let historyr = [947, 943];
       let xvodD = [52, 939, 187];
      while (3.35 < splashL) {
          let imagenetworkerrn = 5;
         historyr.push(3);
         imagenetworkerrn &= 2;
         break;
      }
      do {
         historyr = [xvodD.length % 3];
         if (historyr.length == 3610930) {
            break;
         }
      } while ((5 >= (xvodD.length % 1)) && (historyr.length == 3610930));
      do {
         xvodD.push(1);
         if (2531767 == xvodD.length) {
            break;
         }
      } while ((2531767 == xvodD.length) && (4 >= (4 ^ xvodD.length)));
      while (xvodD.includes(historyr.length)) {
         historyr = [1];
         break;
      }
      do {
         historyr = [parseInt(`${splashL}`) + historyr.length];
         if (2119843 == historyr.length) {
            break;
         }
      } while ((!xvodD.includes(historyr.length)) && (2119843 == historyr.length));
      if ((historyr.length / 2) > 3) {
         historyr = [xvodD.length / 1];
      }
          let productC = false;
          let clear2 = String.fromCharCode(103,114,101,97,116,101,114,95,54,95,52,49,0);
          let tooltipsS = String.fromCharCode(121,95,53,50,95,104,100,108,114,0);
         historyr = [((productC ? 1 : 4))];
         productC = String.fromCharCode(90,0) == clear2;
         clear2 = `${1 | clear2.length}`;
         tooltipsS = "3";
         xvodD.push(historyr.length & 2);
         xvodD = [3 / (Math.max(3, historyr.length))];
      rulesh = `${((iconwatchV ? 3 : 4) | parseInt(`${splashL}`))}`;
      break;
   }
       let shared1 = String.fromCharCode(98,105,116,114,97,116,101,95,107,95,55,55,0);
      if (shared1 != String.fromCharCode(57,0) && 2 <= shared1.length) {
         shared1 = `${shared1.length}`;
      }
          let quests = 5.0;
          let lineA = [844, 738, 99];
          let p_managerl = String.fromCharCode(114,111,98,117,115,116,95,98,95,50,52,0);
         shared1 = "1";
         quests -= parseFloat(`${p_managerl.length ^ lineA.length}`);
         lineA.push(p_managerl.length % 1);
         shared1 += "1";
      private_47H = [(1 << (Math.min(Math.abs((sellmathbackgroundr ? 2 : 5)), 1)))];
   for (let d = 0; d < 3; d++) {
      nodeS /= Math.max(parseFloat(`${parseInt(`${predictionlosst}`)}`), 5);
   }

    return this.state.volumePosition / this.player.volumeWidth;
      rulesh += `${parseInt(`${iconnotificationnewH}`)}`;
   if (predictionlosst < 2.78) {
      iconnotificationnewH /= Math.max(5, parseFloat(`${private_47H.length}`));
   }
   for (let f = 0; f < 2; f++) {
      private_47H.push(calendar8.length & parseInt(`${temperaturef}`));
   }
   for (let v = 0; v < 2; v++) {
      rulesh += `${2 << (Math.min(2, private_47H.length))}`;
   }
      iconwatchV = temperaturef > iconarrowrightO;
   for (let t = 0; t < 3; t++) {
      rulesh += "2";
   }
   for (let n = 0; n < 3; n++) {
       let statisticsactive6 = [14, 730];
       let brightnessM = String.fromCharCode(101,95,49,54,95,99,97,108,105,110,103,0);
       let classesD = new Map([[String.fromCharCode(101,120,97,109,112,108,101,95,114,95,54,52,0),256], [String.fromCharCode(112,97,99,107,97,103,101,100,95,104,95,52,49,0),397]]);
       let defaultlogoC = String.fromCharCode(105,95,51,52,95,100,105,116,104,101,114,0);
       let dropdownH = 5.0;
      while (4.62 > (dropdownH / 2.87) || 4 > (defaultlogoC.length - 5)) {
         defaultlogoC = `${classesD.size | 2}`;
         break;
      }
         statisticsactive6.push(defaultlogoC.length ^ classesD.size);
          let delegate_94 = 1.0;
         statisticsactive6.push(parseInt(`${delegate_94}`) * parseInt(`${dropdownH}`));
      if ((statisticsactive6.length ^ brightnessM.length) < 5 && 5 < (5 ^ statisticsactive6.length)) {
         statisticsactive6.push((defaultlogoC == String.fromCharCode(83,0) ? statisticsactive6.length : defaultlogoC.length));
      }
         defaultlogoC += `${parseInt(`${dropdownH}`) | 2}`;
          let settingP = String.fromCharCode(99,95,53,54,95,116,100,108,115,0);
          let statsg = [13, 254, 819];
          let default_9tc = 2;
         statisticsactive6 = [1];
         settingP = `${default_9tc}`;
         statsg = [statsg.length / (Math.max(1, 3))];
         default_9tc += 2;
      for (let d = 0; d < 1; d++) {
         defaultlogoC += `${statisticsactive6.length + 3}`;
      }
      do {
         dropdownH /= Math.max(2 << (Math.min(Math.abs(parseInt(`${dropdownH}`)), 5)), 3);
         if (3844277.0 == dropdownH) {
            break;
         }
      } while ((classesD[`${dropdownH}`] != null) && (3844277.0 == dropdownH));
      if ((dropdownH / (Math.max(5, statisticsactive6.length))) <= 2.30 || 2.30 <= (dropdownH / (Math.max(statisticsactive6.length, 6)))) {
         dropdownH -= statisticsactive6.length;
      }
      for (let w = 0; w < 2; w++) {
          let iconsaveimageq = 4.0;
          let floateri = String.fromCharCode(114,111,117,110,100,100,115,95,53,95,55,48,0);
          let emptyu = 3.0;
         brightnessM = "3";
         iconsaveimageq *= parseInt(`${iconsaveimageq}`) << (Math.min(Math.abs(parseInt(`${emptyu}`)), 2));
         floateri = `${parseInt(`${iconsaveimageq}`)}`;
         emptyu -= floateri.length >> (Math.min(Math.abs(2), 3));
      }
          let rnewsshare7 = 4;
          let profileA = 1.0;
          let membershipj = true;
         defaultlogoC = `${((membershipj ? 2 : 4))}`;
         rnewsshare7 += rnewsshare7 & 2;
         profileA -= parseFloat(`${parseInt(`${profileA}`) & rnewsshare7}`);
         membershipj = rnewsshare7 == parseInt(`${profileA}`);
      for (let a = 0; a < 2; a++) {
         brightnessM += `${defaultlogoC.length}`;
      }
      if (defaultlogoC.startsWith(`${dropdownH}`)) {
         defaultlogoC += `${defaultlogoC.length}`;
      }
      do {
         statisticsactive6 = [2 - parseInt(`${dropdownH}`)];
         if (statisticsactive6.length == 4066882) {
            break;
         }
      } while ((!brightnessM.endsWith(`${statisticsactive6.length}`)) && (statisticsactive6.length == 4066882));
      while (!brightnessM.endsWith(`${classesD.size}`)) {
         brightnessM += `${defaultlogoC.length}`;
         break;
      }
      sellmathbackgroundr = dnewarchdefaultsk > parseInt(`${temperaturef}`);
   }
   for (let j = 0; j < 3; j++) {
      roundE = 31 > calendar8.length;
   }
       let modityV = String.fromCharCode(116,105,107,101,114,95,118,95,55,48,0);
       let matchdetailbgM = String.fromCharCode(108,95,55,55,95,105,115,110,111,116,116,97,112,0);
       let unimplementedviewI = String.fromCharCode(105,110,115,101,114,116,105,111,110,95,110,95,51,51,0);
          let cnews_ = String.fromCharCode(97,110,97,108,111,103,95,122,95,49,49,0);
         matchdetailbgM = `${matchdetailbgM.length}`;
         cnews_ += `${cnews_.length << (Math.min(Math.abs(2), 1))}`;
      for (let r = 0; r < 2; r++) {
         matchdetailbgM = "3";
      }
      do {
         modityV += `${matchdetailbgM.length}`;
         if (modityV == String.fromCharCode(102,57,108,50,55,51,117,107,122,0)) {
            break;
         }
      } while ((modityV == String.fromCharCode(102,57,108,50,55,51,117,107,122,0)) && (modityV.length <= unimplementedviewI.length));
      if (3 <= matchdetailbgM.length && 3 <= unimplementedviewI.length) {
          let teamI = String.fromCharCode(114,101,115,101,116,95,116,95,55,48,0);
          let matchactivea = new Map([[String.fromCharCode(109,112,105,98,110,95,118,95,57,55,0),959], [String.fromCharCode(110,95,50,53,95,114,108,105,110,101,0),287], [String.fromCharCode(109,111,100,101,99,111,110,116,95,98,95,49,57,0),913]]);
         matchdetailbgM = `${3 - matchactivea.size}`;
         teamI += `${teamI.length - teamI.length}`;
         matchactivea = new Map([[teamI, teamI.length]]);
      }
          let awayteamfieldM = String.fromCharCode(109,97,115,107,105,110,103,95,103,95,55,54,0);
          let iconwatchnowY = String.fromCharCode(115,101,97,114,99,104,105,110,103,95,51,95,50,0);
          let loadingL = String.fromCharCode(111,95,49,53,0);
         matchdetailbgM = `${matchdetailbgM.length}`;
         awayteamfieldM += "1";
         iconwatchnowY += `${loadingL.length}`;
         loadingL = `${3 * iconwatchnowY.length}`;
          let defaultpredictionprofileN = 0.0;
         matchdetailbgM = `${(String.fromCharCode(113,0) == modityV ? modityV.length : parseInt(`${defaultpredictionprofileN}`))}`;
       let icondownimg3 = false;
       let skip0 = true;
         skip0 = (matchdetailbgM.length & unimplementedviewI.length) <= 4;
         skip0 = !icondownimg3 || skip0;
      predictionlosst += parseInt(`${iconnotificationnewH}`) * 3;
   if (calendar8.includes(`${iconnotificationnewH}`)) {
      calendar8 += `${parseInt(`${iconnotificationnewH}`)}`;
   }
   while (3 == (rulesh.length * 2) || (dnewarchdefaultsk * 2) == 2) {
      dnewarchdefaultsk <<= Math.min(2, Math.abs(2 - parseInt(`${predictionlosst}`)));
      break;
   }
      nodeS /= Math.max(2, parseFloat(`${parseInt(`${iconarrowrightO}`) * 2}`));
      private_47H.push(parseInt(`${iconnotificationnewH}`));
   do {
       let customy = true;
       let iconqqZ = 0.0;
       let launchg = 1.0;
       let views9 = [342, 459, 369];
       let countdownk = true;
         views9 = [(views9.length / (Math.max(1, (customy ? 4 : 1))))];
          let rightA = String.fromCharCode(117,110,111,114,100,101,114,101,100,95,49,95,51,51,0);
          let fill6 = new Map([[String.fromCharCode(99,114,99,99,95,105,95,51,55,0),607], [String.fromCharCode(105,95,57,50,95,102,105,110,97,108,108,121,0),943]]);
          let chartQ = [812, 982];
         views9 = [1];
         rightA = `${chartQ.length | rightA.length}`;
         fill6[`${chartQ.length}`] = chartQ.length;
         countdownk = views9.length == 41;
      while (customy) {
          let wifirouterv = String.fromCharCode(116,95,50,51,95,114,101,99,111,110,110,101,99,116,105,110,103,0);
          let executorV = String.fromCharCode(101,95,53,51,95,114,103,98,121,117,118,0);
          let profileframeR = false;
          let u_lockn = new Map([[String.fromCharCode(114,95,49,50,95,117,101,102,97,0),717], [String.fromCharCode(99,116,111,114,95,122,95,57,0),687], [String.fromCharCode(115,116,97,121,95,108,95,54,51,0),273]]);
          let crownD = 0.0;
         launchg *= ((profileframeR ? 2 : 2));
         wifirouterv += `${executorV.length / 3}`;
         executorV = `${u_lockn.size}`;
         profileframeR = (crownD / (Math.max(u_lockn.size, 1))) >= 44.96;
         crownD += parseInt(`${crownD}`) >> (Math.min(Math.abs(3), 3));
         break;
      }
      if (views9.length < launchg) {
         views9.push(1 >> (Math.min(3, views9.length)));
      }
          let dependencyw = String.fromCharCode(106,95,51,55,95,118,111,116,101,0);
          let redscoreballu = new Map([[String.fromCharCode(116,95,55,52,95,100,101,109,97,110,103,108,101,0),String.fromCharCode(117,95,49,56,95,110,111,114,109,97,108,105,122,101,114,0)], [String.fromCharCode(112,111,108,121,95,53,95,51,0),String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,95,110,95,57,0)], [String.fromCharCode(109,95,49,51,95,108,111,111,112,98,114,101,97,107,0),String.fromCharCode(109,117,108,116,105,102,114,97,109,101,95,106,95,53,55,0)]]);
         views9.push((String.fromCharCode(72,0) == dependencyw ? dependencyw.length : parseInt(`${iconqqZ}`)));
         redscoreballu = new Map([[`${redscoreballu.size}`, redscoreballu.size]]);
      if (3 == (views9.length << (Math.min(Math.abs(3), 3))) && 5.5 == (5.50 + launchg)) {
          let giftbuttonY = 2.0;
          let turnz = 1.0;
          let chartr = new Map([[String.fromCharCode(105,95,57,56,95,109,97,105,110,110,101,116,0),String.fromCharCode(102,105,114,101,119,97,108,108,95,51,95,51,49,0)], [String.fromCharCode(98,111,114,100,101,114,108,101,115,115,95,113,95,52,53,0),String.fromCharCode(114,95,49,55,95,115,121,110,99,119,111,114,100,115,0)], [String.fromCharCode(111,95,51,56,95,115,105,110,100,101,120,0),String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,95,57,95,49,51,0)]]);
         views9.push((parseInt(`${turnz}`) / (Math.max(4, (countdownk ? 1 : 4)))));
         giftbuttonY -= parseInt(`${giftbuttonY}`);
         turnz *= 1;
         chartr[`${giftbuttonY}`] = parseInt(`${giftbuttonY}`) - chartr.size;
      }
      while (1.23 <= (iconqqZ + launchg) && 3.89 <= (1.23 + launchg)) {
         launchg += (parseInt(`${launchg}`) ^ (countdownk ? 1 : 2));
         break;
      }
          let yellowtoredo = [804, 628, 43];
         views9 = [parseInt(`${launchg}`) % (Math.max(9, parseInt(`${iconqqZ}`)))];
         yellowtoredo.push(yellowtoredo.length * 1);
         countdownk = views9.length < 66;
         iconqqZ *= 3 | parseInt(`${iconqqZ}`);
         iconqqZ /= Math.max(3, 3);
         views9.push(1 / (Math.max(parseInt(`${iconqqZ}`), 9)));
          let whistleorangeA = String.fromCharCode(97,109,117,108,116,105,95,57,95,50,51,0);
          let securityx = String.fromCharCode(118,95,53,50,95,115,117,109,97,114,121,0);
          let rewardG = String.fromCharCode(110,111,97,115,109,95,103,95,56,57,0);
         countdownk = !countdownk;
         whistleorangeA = `${1 & whistleorangeA.length}`;
         securityx = `${3 & whistleorangeA.length}`;
         rewardG = `${(securityx == String.fromCharCode(57,0) ? securityx.length : whistleorangeA.length)}`;
      do {
          let iconwechatJ = 2.0;
          let basketballmatchdetailbga = String.fromCharCode(104,95,55,52,95,99,111,108,111,114,101,100,0);
         views9 = [1 & parseInt(`${iconqqZ}`)];
         iconwechatJ += parseInt(`${iconwechatJ}`) / (Math.max(4, basketballmatchdetailbga.length));
         basketballmatchdetailbga += `${basketballmatchdetailbga.length * 3}`;
         if (views9.length == 2671824) {
            break;
         }
      } while ((!countdownk || 4 > (views9.length + 5)) && (views9.length == 2671824));
      ajaxc = 58.14 == iconqqZ;
      if (ajaxc ? !ajaxc : ajaxc) {
         break;
      }
   } while ((ajaxc ? !ajaxc : ajaxc) && ((iconarrowrightO - 2.52) <= 5.11));
       let iconmegaphoneZ = new Map([[String.fromCharCode(105,95,57,48,95,101,120,112,101,114,105,109,101,110,116,0),267], [String.fromCharCode(103,101,111,99,111,100,101,95,57,95,55,55,0),891], [String.fromCharCode(107,95,53,52,95,97,117,116,111,103,101,110,0),527]]);
         iconmegaphoneZ[`${iconmegaphoneZ.size}`] = iconmegaphoneZ.size / (Math.max(2, 1));
          let l_hashj = 3.0;
          let showQ = 0.0;
         iconmegaphoneZ = new Map([[`${iconmegaphoneZ.size}`, iconmegaphoneZ.size - 1]]);
         l_hashj *= 1;
         showQ /= Math.max(1 ^ parseInt(`${showQ}`), 4);
         iconmegaphoneZ[`${iconmegaphoneZ.size}`] = iconmegaphoneZ.size * 1;
      iconarrowrightO *= parseInt(`${iconarrowrightO}`);
      iconwatchV = 25.95 > nodeS && !ajaxc;

  }

   
  calculateVolumePositionFromVolume() {
       let libsgcoreq = 0.0;
    let mailS = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,101,110,99,95,54,95,57,50,0);
    let huaweiY = 2;
    let matchinactivec = new Map([[String.fromCharCode(101,120,101,99,117,116,111,114,95,120,95,53,57,0),false ], [String.fromCharCode(117,114,108,95,115,95,52,56,0),true ], [String.fromCharCode(117,95,52,51,95,116,105,109,101,108,105,109,105,116,0),true ]]);
    let singlee = String.fromCharCode(108,95,57,54,95,99,116,108,111,117,116,112,117,116,0);
    let gmailK = String.fromCharCode(99,108,111,115,117,114,101,95,113,95,51,56,0);
    let subbasketballplayerR = 0.0;
    let dycreatorl = 4.0;
    let x_viewj = String.fromCharCode(109,110,101,109,111,110,105,99,95,110,95,52,51,0);
    let inouttargetyellow8 = String.fromCharCode(97,110,116,105,97,108,105,97,115,105,110,103,95,111,95,54,55,0);
    let iconwechatK = String.fromCharCode(110,105,100,111,98,106,95,111,95,53,57,0);
    let giflivestreaming4 = [String.fromCharCode(111,98,109,99,95,55,95,55,57,0), String.fromCharCode(107,95,50,95,114,101,98,117,99,107,101,116,0), String.fromCharCode(116,95,55,51,95,115,98,108,111,103,0)];
    let usernameT = true;
    let redscoreballK = String.fromCharCode(101,120,112,111,110,101,110,116,105,97,116,105,111,110,95,113,95,56,52,0);
    let register_a2h = String.fromCharCode(116,95,56,50,95,112,97,116,99,104,115,101,116,0);
    let imagemanagere = String.fromCharCode(108,105,115,116,105,110,103,95,105,95,57,51,0);
    let activityA = 0;
   while (inouttargetyellow8.endsWith(`${matchinactivec.size}`)) {
       let applicationS = String.fromCharCode(121,95,56,50,95,121,117,118,114,103,98,0);
       let hookD = 0.0;
       let dependencyU = 5.0;
       let leaguedetailsbgQ = String.fromCharCode(97,108,101,114,116,95,108,95,52,57,0);
       let profileframea = new Map([[String.fromCharCode(115,99,104,101,100,117,108,105,110,103,95,98,95,53,52,0),310], [String.fromCharCode(100,98,112,97,103,101,95,100,95,55,49,0),617], [String.fromCharCode(115,99,97,108,97,114,95,115,95,54,57,0),315]]);
      do {
          let headers = String.fromCharCode(119,95,51,49,95,112,114,101,118,105,111,117,115,108,121,0);
         profileframea[headers] = headers.length;
         if (2106388 == profileframea.size) {
            break;
         }
      } while ((profileframea[`${dependencyU}`] == null) && (2106388 == profileframea.size));
         dependencyU -= parseFloat(`${applicationS.length}`);
      do {
         profileframea[leaguedetailsbgQ] = 1;
         if (2127910 == profileframea.size) {
            break;
         }
      } while ((2127910 == profileframea.size) && (profileframea.size >= 1));
      do {
          let mathW = true;
          let starI = String.fromCharCode(116,97,112,102,105,108,116,101,114,95,117,95,56,57,0);
          let predictiondefaultx = 2.0;
          let minivodI = String.fromCharCode(105,110,116,101,114,95,113,95,54,55,0);
         applicationS += "3";
         mathW = (98 == ((mathW ? starI.length : 98) % (Math.max(starI.length, 2))));
         predictiondefaultx /= Math.max(starI.length << (Math.min(1, minivodI.length)), 4);
         minivodI += "1";
         if (String.fromCharCode(103,52,52,49,57,0) == applicationS) {
            break;
         }
      } while ((String.fromCharCode(103,52,52,49,57,0) == applicationS) && ((hookD + 3.51) == 3.64));
      if (1 <= (applicationS.length % 1)) {
         hookD += parseFloat(`${3 >> (Math.min(4, Math.abs(profileframea.size)))}`);
      }
          let webviewa = String.fromCharCode(118,95,55,50,95,114,103,98,0);
          let libjsinspectorI = 3;
         hookD *= parseFloat(`${1}`);
         webviewa += `${1 | libjsinspectorI}`;
         libjsinspectorI *= libjsinspectorI;
      do {
         dependencyU /= Math.max(2, parseFloat(`${parseInt(`${hookD}`)}`));
         if (2588528.0 == dependencyU) {
            break;
         }
      } while ((2588528.0 == dependencyU) && (profileframea.size <= 1));
          let defaultplayerimgG = 5.0;
         profileframea = new Map([[`${defaultplayerimgG}`, parseInt(`${dependencyU}`)]]);
         hookD += parseFloat(`${applicationS.length}`);
         dependencyU *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${hookD}`)), 1))}`);
         dependencyU -= parseFloat(`${1 << (Math.min(5, applicationS.length))}`);
      for (let a = 0; a < 1; a++) {
          let predictionbannersharedu = false;
          let arrowupi = 1;
          let root7 = String.fromCharCode(110,95,54,49,95,119,105,116,104,105,110,0);
          let onewinterstitialK = new Map([[String.fromCharCode(105,95,49,49,95,99,111,112,105,101,115,0),590], [String.fromCharCode(117,110,101,120,112,101,99,116,101,100,95,97,95,52,57,0),121], [String.fromCharCode(112,111,115,116,114,101,113,117,101,115,116,95,57,95,50,54,0),155]]);
         dependencyU *= parseFloat(`${2}`);
         predictionbannersharedu = 36 >= root7.length;
         arrowupi >>= Math.min(Math.abs(root7.length >> (Math.min(5, Math.abs(onewinterstitialK.size)))), 3);
         onewinterstitialK = new Map([[`${onewinterstitialK.size}`, 2]]);
      }
          let issubK = 1.0;
          let fieldh = String.fromCharCode(120,95,52,50,95,113,117,101,115,116,105,111,110,115,0);
          let historyo = [String.fromCharCode(115,95,57,95,118,97,114,105,97,98,108,101,0), String.fromCharCode(112,117,108,115,101,95,53,95,57,56,0), String.fromCharCode(100,105,112,111,115,97,98,108,101,95,56,95,51,51,0)];
         applicationS = `${2 | parseInt(`${dependencyU}`)}`;
         issubK /= Math.max(1, parseFloat(`${historyo.length % 3}`));
         fieldh = "1";
         historyo = [fieldh.length];
         applicationS = `${parseInt(`${dependencyU}`) | 2}`;
      do {
          let predictionloss3 = [807, 844, 662];
          let profileN = new Map([[String.fromCharCode(120,95,57,57,95,115,116,111,114,101,120,0),387], [String.fromCharCode(101,95,51,50,95,122,108,105,98,112,114,105,109,101,0),787], [String.fromCharCode(101,113,117,97,108,115,95,48,95,50,50,0),400]]);
          let tnewssharew = [String.fromCharCode(103,95,50,56,95,98,97,99,107,105,110,103,0), String.fromCharCode(99,95,50,48,95,97,116,114,97,99,100,97,116,97,0), String.fromCharCode(118,95,50,52,95,100,101,115,116,105,110,97,116,105,111,110,115,0)];
         applicationS += `${parseInt(`${hookD}`) ^ applicationS.length}`;
         predictionloss3.push(1);
         profileN[`${tnewssharew.length}`] = tnewssharew.length | profileN.size;
         if (applicationS == String.fromCharCode(48,106,116,107,119,121,112,97,0)) {
            break;
         }
      } while ((!applicationS.includes(`${profileframea.size}`)) && (applicationS == String.fromCharCode(48,106,116,107,119,121,112,97,0)));
      matchinactivec = new Map([[`${huaweiY}`, 2 - huaweiY]]);
      break;
   }
      singlee += `${(String.fromCharCode(80,0) == x_viewj ? x_viewj.length : matchinactivec.size)}`;
      huaweiY -= huaweiY;
      gmailK += `${x_viewj.length}`;
       let yellow7 = String.fromCharCode(101,120,99,101,112,116,95,52,95,50,0);
       let country1 = [591, 475, 112];
       let elementsS = [753, 213, 964];
      while (2 <= (elementsS.length - country1.length) || 2 <= (elementsS.length - country1.length)) {
          let rewardw = String.fromCharCode(109,95,51,55,95,112,111,108,108,105,110,103,0);
          let cornerU = [21, 152];
         country1.push(1 - rewardw.length);
         rewardw += `${2 + cornerU.length}`;
         cornerU.push(cornerU.length);
         break;
      }
      do {
         elementsS.push(yellow7.length);
         if (1249957 == elementsS.length) {
            break;
         }
      } while ((1249957 == elementsS.length) && (yellow7.endsWith(`${elementsS.length}`)));
      do {
          let yellowcirclebgD = String.fromCharCode(118,99,97,99,100,97,116,97,95,51,95,55,55,0);
          let videobufferloadingM = 1.0;
          let notificationg = String.fromCharCode(98,95,54,54,95,117,110,97,118,97,105,108,97,98,101,0);
          let forwardz = String.fromCharCode(99,95,53,56,95,100,101,102,97,117,108,0);
         country1.push((forwardz == String.fromCharCode(106,0) ? forwardz.length : notificationg.length));
         yellowcirclebgD = `${yellowcirclebgD.length + parseInt(`${videobufferloadingM}`)}`;
         videobufferloadingM /= Math.max(1 % (Math.max(4, parseInt(`${videobufferloadingM}`))), 3);
         notificationg += `${yellowcirclebgD.length * 1}`;
         if (2404804 == country1.length) {
            break;
         }
      } while ((2404804 == country1.length) && (yellow7.length >= country1.length));
          let catalogv = false;
          let circleu = String.fromCharCode(103,95,55,49,95,97,115,115,112,111,114,116,0);
          let fullscreenmin1 = 0;
         elementsS.push(1);
         catalogv = (98 > (circleu.length >> (Math.min(2, Math.abs((!catalogv ? circleu.length : 98))))));
         fullscreenmin1 >>= Math.min(Math.abs(3), 3);
      while (2 >= (yellow7.length + 1) || (elementsS.length + 1) >= 4) {
         elementsS.push(1);
         break;
      }
      if (!yellow7.includes(`${country1.length}`)) {
          let indicatorm = new Map([[String.fromCharCode(109,95,54,95,112,114,101,99,0),386], [String.fromCharCode(117,95,51,48,95,108,111,119,98,100,0),48]]);
          let s_manager1 = new Map([[String.fromCharCode(101,108,115,95,97,95,52,52,0),461], [String.fromCharCode(118,95,52,53,95,97,100,115,0),476], [String.fromCharCode(105,95,55,53,95,110,105,99,101,0),114]]);
         yellow7 = `${(String.fromCharCode(77,0) == yellow7 ? s_manager1.size : yellow7.length)}`;
         indicatorm = new Map([[`${indicatorm.size}`, indicatorm.size]]);
         s_manager1[`${indicatorm.size}`] = indicatorm.size;
      }
      do {
          let clockT = String.fromCharCode(108,95,51,52,95,97,99,116,105,118,97,116,105,111,110,0);
          let singaporeq = 1;
          let androidF = String.fromCharCode(116,95,50,54,95,105,122,101,114,111,0);
          let iconeyea = String.fromCharCode(112,114,111,109,111,95,57,95,57,48,0);
          let airbnbstarv = 0.0;
         country1.push(country1.length << (Math.min(clockT.length, 4)));
         clockT = `${singaporeq % 2}`;
         singaporeq &= 3;
         androidF = "1";
         iconeyea += `${(String.fromCharCode(72,0) == androidF ? androidF.length : iconeyea.length)}`;
         airbnbstarv -= parseInt(`${airbnbstarv}`);
         if (2806707 == country1.length) {
            break;
         }
      } while ((1 < (country1.length / 3)) && (2806707 == country1.length));
         yellow7 = `${1 * elementsS.length}`;
         country1.push(yellow7.length);
      singlee += "2";
      singlee += `${giflivestreaming4.length | iconwechatK.length}`;
   while (x_viewj.length > 5 && inouttargetyellow8 != String.fromCharCode(87,0)) {
       let sliderM = 5;
       let dependenciesF = 5.0;
       let singlet = [358, 615];
       let iconsharefriends7 = 2;
       let iconuserB = 1.0;
         singlet = [singlet.length + iconsharefriends7];
       let config2 = true;
         sliderM -= 3 % (Math.max(parseInt(`${iconuserB}`), 7));
          let reactnativejs0 = 2;
          let time_lg = String.fromCharCode(111,110,101,111,102,95,118,95,56,0);
         iconuserB *= parseFloat(`${singlet.length}`);
         reactnativejs0 /= Math.max(2, 3);
         time_lg += "3 | reactnativejs0";
      for (let n = 0; n < 2; n++) {
          let goals = true;
          let greenarrowupe = 2.0;
          let videoH = new Map([[String.fromCharCode(116,95,53,53,95,115,117,98,98,97,110,100,0),String.fromCharCode(103,95,57,54,95,114,112,114,111,98,101,0)], [String.fromCharCode(117,110,99,111,109,112,97,99,116,95,109,95,55,0),String.fromCharCode(110,95,49,48,48,95,98,101,104,97,118,105,111,114,115,0)], [String.fromCharCode(110,95,55,53,95,115,116,111,114,105,110,103,0),String.fromCharCode(98,105,115,101,99,116,95,56,95,51,50,0)]]);
          let sheetB = 4.0;
         iconsharefriends7 -= parseInt(`${sheetB}`);
         goals = greenarrowupe >= 59.88 || goals;
         greenarrowupe += (parseFloat(`${parseInt(`${greenarrowupe}`) >> (Math.min(3, Math.abs((goals ? 2 : 5))))}`));
         videoH = new Map([[`${videoH.size}`, videoH.size]]);
      }
          let confirmationl = 4;
         iconuserB -= parseFloat(`${confirmationl}`);
      do {
         singlet.push(parseInt(`${iconuserB}`));
         if (singlet.length == 440737) {
            break;
         }
      } while ((singlet.length == 440737) && (2 < (singlet.length / 2)));
      do {
          let iconcalendarU = false;
          let fastP = [586, 404, 239];
          let basketballhometeamA = true;
          let history0 = [29, 278, 657];
         dependenciesF /= Math.max(parseFloat(`${3}`), 1);
         iconcalendarU = (33 < ((!basketballhometeamA ? 33 : history0.length) % (Math.max(history0.length, 8))));
         fastP = [3];
         basketballhometeamA = history0.length >= 81;
         if (dependenciesF == 1262399.0) {
            break;
         }
      } while ((dependenciesF == 1262399.0) && (1 > (singlet.length + parseInt(`${dependenciesF}`)) || (parseFloat(`${singlet.length}`) + dependenciesF) > 1.52));
         sliderM += parseInt(`${dependenciesF}`);
       let predictionwin2 = String.fromCharCode(115,95,50,49,95,112,114,101,112,97,114,101,100,0);
       let sortC = String.fromCharCode(98,95,49,95,105,110,116,101,114,97,99,116,105,110,103,0);
          let mbnativeE = String.fromCharCode(108,97,114,103,101,95,116,95,52,54,0);
          let textinputt = 1.0;
         dependenciesF -= parseFloat(`${mbnativeE.length * 3}`);
         mbnativeE += `${3 + parseInt(`${textinputt}`)}`;
         textinputt *= parseInt(`${textinputt}`);
         iconsharefriends7 += singlet.length & 3;
          let ksado = 2.0;
          let runtimeschedulerJ = 3.0;
          let successM = 4.0;
         sliderM &= 3;
         ksado /= Math.max(2, parseInt(`${successM}`));
         runtimeschedulerJ -= parseInt(`${successM}`);
      while (!config2 && (3 * sliderM) == 2) {
         config2 = 98 > singlet.length;
         break;
      }
          let iconwatchY = true;
         dependenciesF /= Math.max(2, parseFloat(`${sortC.length}`));
         iconwatchY = !iconwatchY;
      x_viewj += `${2 ^ singlet.length}`;
      break;
   }
   while ((dycreatorl / (Math.max(5.71, 5))) <= 1.28 || 5 <= (singlee.length / 2)) {
      dycreatorl /= Math.max(parseFloat(`${3 * parseInt(`${libsgcoreq}`)}`), 2);
      break;
   }
   if (gmailK == iconwechatK) {
       let release_fA = String.fromCharCode(110,101,120,116,95,122,95,49,51,0);
       let bgvipxvodH = String.fromCharCode(117,95,53,53,0);
       let shirtl = [622, 64, 748];
      do {
          let shielddoneH = new Map([[String.fromCharCode(115,97,102,101,115,116,97,99,107,95,122,95,51,54,0),219], [String.fromCharCode(111,95,49,49,95,97,117,100,105,111,100,115,112,0),895]]);
         bgvipxvodH += `${shirtl.length * 3}`;
         shielddoneH = new Map([[`${shielddoneH.size}`, shielddoneH.size ^ 3]]);
         if (4286811 == bgvipxvodH.length) {
            break;
         }
      } while ((bgvipxvodH.length > 5) && (4286811 == bgvipxvodH.length));
      while ((shirtl.length >> (Math.min(Math.abs(4), 1))) > 2 || 3 > (release_fA.length >> (Math.min(Math.abs(4), 4)))) {
          let encryptl = String.fromCharCode(106,95,51,55,95,100,111,119,110,108,111,97,100,101,100,0);
         shirtl.push(3);
         encryptl = `${encryptl.length * encryptl.length}`;
         break;
      }
      for (let v = 0; v < 1; v++) {
          let klevinM = 0.0;
          let nativeY = String.fromCharCode(98,117,102,102,101,114,95,52,95,56,49,0);
         bgvipxvodH = `${nativeY.length}`;
         klevinM += parseInt(`${klevinM}`);
         nativeY += `${parseInt(`${klevinM}`) - 1}`;
      }
          let orangedownarrowW = 4.0;
          let librrcq = String.fromCharCode(114,101,112,117,98,108,105,115,104,95,119,95,49,55,0);
          let suggestionp = String.fromCharCode(97,117,116,111,99,104,101,99,107,112,111,105,110,116,95,99,95,49,0);
         shirtl.push(3);
         orangedownarrowW /= Math.max(3, parseFloat(`${3}`));
         librrcq = `${librrcq.length}`;
         suggestionp += `${parseInt(`${orangedownarrowW}`)}`;
          let playercommonX = 2.0;
         bgvipxvodH = `${release_fA.length}`;
         playercommonX -= parseFloat(`${parseInt(`${playercommonX}`) + 2}`);
          let iconrefreshf = new Map([[String.fromCharCode(110,95,50,49,95,101,114,118,101,114,0),970], [String.fromCharCode(114,116,112,112,108,97,121,95,120,95,51,0),687]]);
          let notificationfillemptyF = 1.0;
          let footballfield9 = 2;
         bgvipxvodH = `${shirtl.length}`;
         iconrefreshf = new Map([[`${iconrefreshf.size}`, 1 - iconrefreshf.size]]);
         notificationfillemptyF += footballfield9;
         footballfield9 *= 3;
       let iconsharev = [156, 819];
         bgvipxvodH += `${shirtl.length / (Math.max(1, iconsharev.length))}`;
         iconsharev.push((String.fromCharCode(87,0) == bgvipxvodH ? bgvipxvodH.length : iconsharev.length));
      iconwechatK += `${giflivestreaming4.length ^ release_fA.length}`;
   }
      matchinactivec[`${inouttargetyellow8}`] = inouttargetyellow8.length | 3;
   do {
      singlee = `${1 << (Math.min(4, mailS.length))}`;
      if (3417288 == singlee.length) {
         break;
      }
   } while ((mailS.length <= singlee.length) && (3417288 == singlee.length));
   if (3 < giflivestreaming4.length) {
       let chatroombackground1 = String.fromCharCode(115,112,101,99,105,102,105,99,97,116,105,111,110,95,52,95,50,0);
         chatroombackground1 += `${(chatroombackground1 == String.fromCharCode(110,0) ? chatroombackground1.length : chatroombackground1.length)}`;
          let basketballdetailsbgK = 3.0;
          let storek = String.fromCharCode(97,99,102,105,108,116,101,114,95,48,95,55,53,0);
         chatroombackground1 = "3";
         basketballdetailsbgK -= parseFloat(`${storek.length}`);
         storek = `${(String.fromCharCode(102,0) == storek ? storek.length : parseInt(`${basketballdetailsbgK}`))}`;
       let giftE = String.fromCharCode(116,95,49,56,95,109,97,121,0);
      mailS += `${parseInt(`${subbasketballplayerR}`)}`;
   }
      usernameT = 40 >= giflivestreaming4.length;
      gmailK += `${mailS.length * singlee.length}`;
   do {
      libsgcoreq += parseInt(`${subbasketballplayerR}`) << (Math.min(Math.abs(parseInt(`${libsgcoreq}`)), 5));
      if (1017440.0 == libsgcoreq) {
         break;
      }
   } while ((1017440.0 == libsgcoreq) && (inouttargetyellow8.length > 5));
      inouttargetyellow8 += `${(x_viewj == String.fromCharCode(104,0) ? x_viewj.length : inouttargetyellow8.length)}`;
      gmailK = `${parseInt(`${dycreatorl}`)}`;
   do {
      matchinactivec = new Map([[singlee, 2 + singlee.length]]);
      if (matchinactivec.size == 781559) {
         break;
      }
   } while ((matchinactivec.size == 781559) && (3 == (2 + matchinactivec.size) && (huaweiY + matchinactivec.size) == 2));

    return this.player.volumeWidth * this.state.volume;
       let rewardvideo0 = String.fromCharCode(108,95,56,49,95,112,111,115,115,105,98,108,101,0);
       let baiduadsC = new Map([[String.fromCharCode(114,95,53,51,95,99,97,112,115,0),String.fromCharCode(97,114,107,101,114,95,52,95,55,57,0)], [String.fromCharCode(97,95,52,57,95,111,110,101,111,102,0),String.fromCharCode(107,108,97,121,116,110,95,56,95,52,0)]]);
       let iconnointernet2 = [String.fromCharCode(119,104,105,116,101,108,105,115,116,101,100,95,49,95,50,53,0), String.fromCharCode(121,95,55,51,95,115,99,114,111,108,108,101,100,0), String.fromCharCode(122,95,56,95,116,105,112,0)];
      for (let q = 0; q < 2; q++) {
          let basketballmatchdetailbgx = 4;
          let hnewssharea = String.fromCharCode(114,95,50,52,95,116,101,109,112,108,97,116,101,115,0);
          let valuesm = String.fromCharCode(122,95,57,57,95,100,98,105,0);
          let themeB = 5.0;
          let iconpointscore5 = true;
         iconnointernet2.push((rewardvideo0 == String.fromCharCode(90,0) ? rewardvideo0.length : iconnointernet2.length));
         basketballmatchdetailbgx |= ((iconpointscore5 ? 4 : 2) % (Math.max(basketballmatchdetailbgx, 7)));
         hnewssharea = "2";
         valuesm += `${((iconpointscore5 ? 2 : 2) % (Math.max(valuesm.length, 9)))}`;
         themeB *= parseFloat(`${basketballmatchdetailbgx - 1}`);
      }
         iconnointernet2 = [2];
          let middlesoundd = true;
          let become6 = String.fromCharCode(120,95,49,50,95,110,111,114,109,0);
          let iconsettingC = String.fromCharCode(100,95,57,54,95,115,116,114,116,121,112,101,0);
         baiduadsC = new Map([[become6, (String.fromCharCode(89,0) == iconsettingC ? iconsettingC.length : become6.length)]]);
         middlesoundd = (middlesoundd ? middlesoundd : !middlesoundd);
      do {
         baiduadsC = new Map([[`${baiduadsC.size}`, 3 << (Math.min(2, rewardvideo0.length))]]);
         if (baiduadsC.size == 3459700) {
            break;
         }
      } while ((baiduadsC.size == 3459700) && (5 > (iconnointernet2.length / (Math.max(3, baiduadsC.size))) && 5 > (baiduadsC.size / (Math.max(8, iconnointernet2.length)))));
       let sheetE = new Map([[String.fromCharCode(104,95,55,54,95,102,102,118,108,0),915], [String.fromCharCode(113,95,51,51,95,110,111,116,105,102,105,101,100,0),396], [String.fromCharCode(111,110,116,111,95,112,95,55,57,0),671]]);
       let iconwechatc = new Map([[String.fromCharCode(99,111,110,102,105,103,117,114,101,100,95,115,95,51,49,0),false ], [String.fromCharCode(108,95,50,52,95,97,112,112,101,110,100,97,108,108,0),false ], [String.fromCharCode(114,114,116,114,95,56,95,51,51,0),true ]]);
         sheetE[rewardvideo0] = baiduadsC.size - rewardvideo0.length;
          let bdxadsdk5 = [941, 407, 931];
         rewardvideo0 += `${baiduadsC.size * 3}`;
         bdxadsdk5.push(1 & bdxadsdk5.length);
      for (let r = 0; r < 1; r++) {
         sheetE = new Map([[`${sheetE.size}`, sheetE.size >> (Math.min(Math.abs(2), 3))]]);
      }
      while (5 == (rewardvideo0.length >> (Math.min(4, Math.abs(baiduadsC.size))))) {
         baiduadsC[rewardvideo0] = baiduadsC.size | 3;
         break;
      }
      matchinactivec = new Map([[rewardvideo0, (1 & (usernameT ? 3 : 2))]]);
      huaweiY /= Math.max((String.fromCharCode(103,0) == inouttargetyellow8 ? gmailK.length : inouttargetyellow8.length), 3);
   do {
       let sellmathbackground7 = [104, 937, 653];
      for (let s = 0; s < 2; s++) {
         sellmathbackground7.push(sellmathbackground7.length + 2);
      }
       let yellowvideolive0 = String.fromCharCode(115,112,97,110,95,103,95,52,52,0);
       let nativeN = String.fromCharCode(111,118,101,114,108,97,112,115,95,51,95,55,48,0);
         yellowvideolive0 = "1";
      gmailK = `${(String.fromCharCode(54,0) == mailS ? sellmathbackground7.length : mailS.length)}`;
      if (gmailK.length == 2628162) {
         break;
      }
   } while ((1 > gmailK.length) && (gmailK.length == 2628162));
       let expandM = 5.0;
      for (let p = 0; p < 2; p++) {
         expandM += parseFloat(`${parseInt(`${expandM}`)}`);
      }
         expandM -= parseFloat(`${parseInt(`${expandM}`) ^ parseInt(`${expandM}`)}`);
          let libavutilE = new Map([[String.fromCharCode(106,95,49,95,115,115,101,100,105,102,102,0),450], [String.fromCharCode(103,95,49,54,95,112,114,105,109,105,116,105,118,101,0),595]]);
         expandM *= parseFloat(`${parseInt(`${expandM}`)}`);
         libavutilE = new Map([[`${libavutilE.size}`, 3 - libavutilE.size]]);
      singlee = `${parseInt(`${expandM}`) / 3}`;
       let arrowselectdowns = false;
       let sinit_pfu = String.fromCharCode(97,95,49,54,95,97,100,106,117,115,116,0);
       let vipsport_ = String.fromCharCode(110,95,57,51,95,116,114,97,110,115,112,111,115,101,0);
          let largebrightnessk = [String.fromCharCode(112,95,54,51,95,114,102,116,102,115,117,98,0), String.fromCharCode(98,95,56,95,115,112,97,99,101,0), String.fromCharCode(100,105,97,108,111,103,117,101,95,115,95,54,51,0)];
          let fullr = new Map([[String.fromCharCode(117,95,49,52,0),String.fromCharCode(119,95,57,52,95,100,101,108,97,121,97,98,108,101,0)], [String.fromCharCode(119,95,55,53,95,100,101,98,108,111,99,107,0),String.fromCharCode(97,99,116,105,118,105,116,121,95,101,95,57,53,0)], [String.fromCharCode(114,101,115,116,95,114,95,49,0),String.fromCharCode(97,105,110,116,95,107,95,54,53,0)]]);
          let closef = 2;
         sinit_pfu = `${largebrightnessk.length}`;
         largebrightnessk = [closef];
         fullr = new Map([[`${fullr.size}`, 1]]);
         closef >>= Math.min(1, Math.abs(fullr.size));
         sinit_pfu = `${sinit_pfu.length}`;
          let libglogu = 2.0;
         sinit_pfu = `${vipsport_.length - sinit_pfu.length}`;
         libglogu += parseFloat(`${parseInt(`${libglogu}`) * 1}`);
         vipsport_ = `${(2 - (arrowselectdowns ? 4 : 3))}`;
       let runtime8 = String.fromCharCode(109,95,50,55,95,100,115,116,114,0);
         vipsport_ = `${((arrowselectdowns ? 4 : 2) + vipsport_.length)}`;
          let ballT = 2.0;
          let h_countc = String.fromCharCode(111,95,55,49,95,97,112,109,116,101,115,116,0);
         vipsport_ = "2";
         ballT *= parseInt(`${ballT}`);
         h_countc += "1";
      if (!arrowselectdowns && 1 > sinit_pfu.length) {
         sinit_pfu += `${((arrowselectdowns ? 1 : 5) >> (Math.min(Math.abs(2), 3)))}`;
      }
         vipsport_ += `${sinit_pfu.length}`;
      matchinactivec[x_viewj] = x_viewj.length;
       let gemfileV = 3.0;
       let emojic = 3.0;
       let iconeye3 = String.fromCharCode(116,114,105,103,103,101,114,101,100,95,117,95,56,48,0);
       let stringR = String.fromCharCode(101,97,99,115,95,106,95,53,56,0);
         emojic += parseFloat(`${2}`);
      do {
         gemfileV -= parseFloat(`${iconeye3.length}`);
         if (3738057.0 == gemfileV) {
            break;
         }
      } while ((3738057.0 == gemfileV) && ((emojic * 1.49) <= 1.11 || 1.3 <= (gemfileV * 1.49)));
         stringR = `${1 | iconeye3.length}`;
          let networkB = false;
          let hiadb = 5.0;
         emojic += parseFloat(`${parseInt(`${emojic}`) ^ 1}`);
         networkB = hiadb <= 5.7;
         hiadb += (parseFloat(`${parseInt(`${hiadb}`) & (networkB ? 1 : 2)}`));
         gemfileV /= Math.max(parseFloat(`${parseInt(`${emojic}`)}`), 1);
      giflivestreaming4 = [singlee.length];
       let dycreatorH = String.fromCharCode(105,100,101,109,112,111,116,101,110,99,121,95,116,95,50,56,0);
       let airbnbstar_ = new Map([[String.fromCharCode(113,105,110,116,102,108,111,97,116,95,50,95,53,49,0),854], [String.fromCharCode(105,110,118,97,114,105,97,110,116,115,95,52,95,55,49,0),205]]);
      do {
         airbnbstar_[dycreatorH] = 3;
         if (airbnbstar_.size == 3002740) {
            break;
         }
      } while ((3 <= (airbnbstar_.size >> (Math.min(dycreatorH.length, 1))) || 3 <= (airbnbstar_.size >> (Math.min(dycreatorH.length, 4)))) && (airbnbstar_.size == 3002740));
         airbnbstar_[`${dycreatorH}`] = (dycreatorH == String.fromCharCode(52,0) ? airbnbstar_.size : dycreatorH.length);
         dycreatorH += `${dycreatorH.length}`;
         airbnbstar_ = new Map([[`${airbnbstar_.size}`, (dycreatorH == String.fromCharCode(72,0) ? dycreatorH.length : airbnbstar_.size)]]);
         airbnbstar_[`${dycreatorH}`] = 1;
      while (airbnbstar_.size > dycreatorH.length) {
         airbnbstar_[dycreatorH] = dycreatorH.length;
         break;
      }
      giflivestreaming4.push(1 ^ mailS.length);
      usernameT = subbasketballplayerR >= 56.85;
   do {
       let libtanY = false;
         libtanY = !libtanY || libtanY;
      for (let d = 0; d < 2; d++) {
          let bottomX = String.fromCharCode(112,111,108,121,95,49,95,54,56,0);
          let imagemanagerv = 5.0;
          let floatingN = 3;
         libtanY = bottomX == String.fromCharCode(103,0);
         bottomX = `${3 * floatingN}`;
         imagemanagerv += parseFloat(`${floatingN}`);
      }
      while (libtanY || !libtanY) {
          let fillE = 0;
          let w_imagew = false;
         libtanY = w_imagew;
         fillE -= 3 ^ fillE;
         break;
      }
      giflivestreaming4 = [1];
      if (giflivestreaming4.length == 2861493) {
         break;
      }
   } while ((3 < mailS.length) && (giflivestreaming4.length == 2861493));
      iconwechatK = `${(String.fromCharCode(109,0) == gmailK ? giflivestreaming4.length : gmailK.length)}`;
   for (let p = 0; p < 3; p++) {
      dycreatorl += parseFloat(`${3 - parseInt(`${dycreatorl}`)}`);
   }
   if (usernameT) {
      usernameT = singlee.length >= 28;
   }
   do {
      giflivestreaming4 = [2];
      if (giflivestreaming4.length == 2741110) {
         break;
      }
   } while ((giflivestreaming4.length == 2741110) && ((5 * giflivestreaming4.length) == 1));
   for (let o = 0; o < 2; o++) {
      libsgcoreq += inouttargetyellow8.length;
   }
      iconwechatK += `${parseInt(`${subbasketballplayerR}`)}`;
   while (singlee.length < 1) {
       let wifirouterp = 4.0;
      do {
          let issubl = new Map([[String.fromCharCode(116,105,109,115,116,97,109,112,95,56,95,49,48,48,0),String.fromCharCode(113,95,50,55,95,112,114,111,108,111,110,103,0)], [String.fromCharCode(97,117,100,105,111,100,97,116,97,95,54,95,54,51,0),String.fromCharCode(115,111,119,97,107,101,117,112,95,121,95,54,57,0)], [String.fromCharCode(111,95,55,52,0),String.fromCharCode(122,95,55,50,95,116,114,97,110,115,108,97,116,101,0)]]);
          let binddatasS = 3;
          let foregroundG = new Map([[String.fromCharCode(114,95,57,50,95,97,114,114,97,121,0),143], [String.fromCharCode(98,95,49,50,95,112,101,117,107,101,114,0),476], [String.fromCharCode(107,95,49,53,95,110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,0),615]]);
          let whistle6 = 5;
          let iconedit1 = 1.0;
         wifirouterp += parseInt(`${iconedit1}`);
         issubl[`${whistle6}`] = whistle6;
         binddatasS &= issubl.size;
         foregroundG[`${whistle6}`] = 2 / (Math.max(10, whistle6));
         iconedit1 -= parseFloat(`${whistle6 * foregroundG.size}`);
         if (wifirouterp == 1061035.0) {
            break;
         }
      } while ((wifirouterp == 1061035.0) && ((5.97 - wifirouterp) == 1.100 || (wifirouterp - wifirouterp) == 5.97));
         wifirouterp += 3;
          let showmoreA = [13, 330, 328];
         wifirouterp *= showmoreA.length + 3;
      gmailK = `${iconwechatK.length}`;
      break;
   }
      usernameT = (matchinactivec.size + mailS.length) == 48;
   while (!inouttargetyellow8.includes(`${matchinactivec.size}`)) {
      inouttargetyellow8 = `${(x_viewj == String.fromCharCode(115,0) ? huaweiY : x_viewj.length)}`;
      break;
   }

  }

   

   
  UNSAFE_componentWillMount() {
       let libimagepipelineu = new Map([[String.fromCharCode(101,95,54,57,95,112,114,101,112,97,114,101,0),false ], [String.fromCharCode(110,95,49,55,95,97,117,116,104,111,114,105,122,101,100,0),true ], [String.fromCharCode(109,95,55,52,95,109,111,110,116,103,111,109,101,114,121,0),true ]]);
    let iconclosewhite4 = String.fromCharCode(99,95,53,52,95,116,114,101,101,0);
    let penaltygoalJ = new Map([[String.fromCharCode(109,97,108,108,111,99,122,95,53,95,51,52,0),34], [String.fromCharCode(112,95,54,51,95,112,111,115,116,0),669]]);
    let predictionbanneru = true;
    let predictionbannersharedY = 2;
    let reducers = 2.0;
    let greenarrowupE = false;
    let guideA = String.fromCharCode(99,111,110,102,105,103,117,114,101,95,108,95,51,53,0);
    let iconuserV = new Map([[String.fromCharCode(98,95,56,49,95,108,111,99,97,116,105,111,110,115,0),989], [String.fromCharCode(116,95,50,51,95,115,101,116,100,97,114,0),622], [String.fromCharCode(117,112,100,97,116,105,110,103,95,99,95,51,50,0),15]]);
    let stepL = 2.0;
    let iconbells = new Map([[String.fromCharCode(100,105,115,99,111,110,116,105,103,117,111,117,115,95,117,95,54,49,0),499], [String.fromCharCode(107,95,49,56,95,115,99,104,101,100,117,108,101,100,0),884], [String.fromCharCode(100,95,53,56,95,109,112,108,97,109,101,0),106]]);
    let agreement0 = new Map([[String.fromCharCode(121,117,118,110,118,99,95,53,95,51,56,0),String.fromCharCode(119,95,54,55,95,117,105,110,116,98,101,0)], [String.fromCharCode(101,120,112,97,110,100,97,98,108,101,95,50,95,51,54,0),String.fromCharCode(100,95,57,53,95,105,110,116,101,114,102,97,99,101,115,0)], [String.fromCharCode(112,97,105,114,115,95,111,95,51,51,0),String.fromCharCode(109,95,56,95,112,97,117,115,101,0)]]);
    let telegraml = String.fromCharCode(98,95,57,57,95,99,101,110,116,114,97,108,105,116,121,0);
    let iconeyek = false;
    let scheduleo = false;
       let libavutilF = new Map([[String.fromCharCode(116,114,97,110,115,97,99,116,105,111,110,115,95,50,95,53,52,0),true ], [String.fromCharCode(117,95,57,57,95,111,116,111,98,0),false ], [String.fromCharCode(98,95,56,48,95,102,114,97,109,101,112,111,111,108,0),true ]]);
       let telemetryR = String.fromCharCode(98,95,56,48,95,110,111,116,105,102,105,99,97,116,111,110,115,0);
       let rules5 = 4;
      for (let c = 0; c < 1; c++) {
         rules5 >>= Math.min(1, Math.abs(libavutilF.size << (Math.min(Math.abs(2), 3))));
      }
      do {
         libavutilF[`${rules5}`] = libavutilF.size;
         if (1411322 == libavutilF.size) {
            break;
         }
      } while ((2 <= (5 & libavutilF.size)) && (1411322 == libavutilF.size));
      while (4 <= (rules5 >> (Math.min(Math.abs(5), 4))) || (rules5 >> (Math.min(Math.abs(5), 4))) <= 3) {
          let moviesM = 1.0;
          let fcdaebecbcbafcdfceaaeccfeacdb7 = String.fromCharCode(118,95,55,56,95,109,112,111,115,0);
          let shareblackn = 0.0;
         rules5 /= Math.max(5, 1);
         moviesM /= Math.max(2, 5);
         fcdaebecbcbafcdfceaaeccfeacdb7 = `${parseInt(`${shareblackn}`) / (Math.max(3, 10))}`;
         shareblackn += parseFloat(`${parseInt(`${moviesM}`) & 1}`);
         break;
      }
      do {
          let reactnativeultimatelistviewD = String.fromCharCode(115,117,112,112,114,101,115,115,105,111,110,95,100,95,53,49,0);
          let j_animationF = [670, 297];
          let smallg = 4;
         telemetryR = "2";
         reactnativeultimatelistviewD += "3";
         j_animationF = [1];
         smallg |= j_animationF.length;
         if (telemetryR.length == 798737) {
            break;
         }
      } while ((1 <= (libavutilF.size % (Math.max(telemetryR.length, 9))) && (telemetryR.length % 1) <= 3) && (telemetryR.length == 798737));
      for (let o = 0; o < 3; o++) {
         telemetryR += "1";
      }
      for (let m = 0; m < 3; m++) {
         telemetryR += `${libavutilF.size % (Math.max(telemetryR.length, 7))}`;
      }
         telemetryR = `${libavutilF.size}`;
         telemetryR = `${(String.fromCharCode(102,0) == telemetryR ? rules5 : telemetryR.length)}`;
       let colors9 = 5.0;
       let strings3 = 2.0;
      greenarrowupE = 11 == predictionbannersharedY;
      iconclosewhite4 += "1";
      greenarrowupE = parseInt(`${stepL}`) < iconuserV.size;
   for (let a = 0; a < 3; a++) {
       let detailsW = String.fromCharCode(104,95,52,50,95,117,116,120,111,0);
       let baseT = [399, 143];
       let iconarrowrightO = String.fromCharCode(109,101,110,117,95,112,95,49,57,0);
       let unselectedl = 3;
       let homep = 5;
         iconarrowrightO += `${iconarrowrightO.length ^ 2}`;
          let libreactnativejniA = 5;
          let flyerr = 1.0;
          let tumbnaill = 0;
         unselectedl &= homep;
         libreactnativejniA &= 2 & libreactnativejniA;
         flyerr *= parseInt(`${flyerr}`);
         tumbnaill <<= Math.min(Math.abs(parseInt(`${flyerr}`)), 4);
         detailsW += `${detailsW.length}`;
      while ((detailsW.length >> (Math.min(4, Math.abs(unselectedl)))) > 5 || 3 > (5 >> (Math.min(5, detailsW.length)))) {
         unselectedl ^= 2 | homep;
         break;
      }
      while ((3 & unselectedl) <= 5 || 5 <= (unselectedl & 3)) {
         unselectedl /= Math.max(2, homep);
         break;
      }
      for (let m = 0; m < 3; m++) {
         homep |= iconarrowrightO.length + unselectedl;
      }
      do {
         iconarrowrightO = `${unselectedl ^ iconarrowrightO.length}`;
         if (iconarrowrightO.length == 1401422) {
            break;
         }
      } while ((iconarrowrightO.length == 1401422) && ((4 >> (Math.min(3, iconarrowrightO.length))) == 2));
         baseT.push(detailsW.length);
      if (5 == (detailsW.length & 4) || (4 & detailsW.length) == 5) {
         detailsW += `${iconarrowrightO.length % 1}`;
      }
         homep += 2 * iconarrowrightO.length;
      while ((homep << (Math.min(Math.abs(unselectedl), 4))) == 2) {
         unselectedl <<= Math.min(detailsW.length, 4);
         break;
      }
      do {
         unselectedl -= unselectedl;
         if (unselectedl == 3881830) {
            break;
         }
      } while ((1 >= (unselectedl * iconarrowrightO.length)) && (unselectedl == 3881830));
          let iconorientationl = 5;
          let plashg = [303, 628];
          let penaltyshootnogoalI = 4.0;
         iconarrowrightO += `${unselectedl * parseInt(`${penaltyshootnogoalI}`)}`;
         iconorientationl += 1 % (Math.max(iconorientationl, 10));
         plashg = [2 & iconorientationl];
         penaltyshootnogoalI -= parseFloat(`${plashg.length}`);
          let dragcloseI = new Map([[String.fromCharCode(97,114,103,120,95,57,95,56,52,0),704], [String.fromCharCode(116,109,109,98,110,95,112,95,55,56,0),536]]);
          let iconuser6 = false;
          let foregroundp = 2;
         unselectedl ^= baseT.length;
         dragcloseI[`${foregroundp}`] = foregroundp % (Math.max(5, dragcloseI.size));
         iconuser6 = (((!iconuser6 ? dragcloseI.size : 6) % (Math.max(1, dragcloseI.size))) <= 53);
         detailsW = `${(String.fromCharCode(66,0) == iconarrowrightO ? homep : iconarrowrightO.length)}`;
      greenarrowupE = libimagepipelineu.size > agreement0.size;
   }
   if (!predictionbanneru && 2 >= (predictionbannersharedY | 2)) {
       let arrowrightwithtailT = [694, 992];
       let gradle4 = false;
       let bottomh = String.fromCharCode(100,95,53,51,95,98,97,99,107,101,100,0);
         gradle4 = arrowrightwithtailT.length == 94;
      do {
         gradle4 = arrowrightwithtailT.length >= 84;
         if (gradle4 ? !gradle4 : gradle4) {
            break;
         }
      } while ((gradle4 ? !gradle4 : gradle4) && (arrowrightwithtailT.length < 5));
         bottomh = `${((gradle4 ? 5 : 2) | arrowrightwithtailT.length)}`;
          let penaltymatchiconY = String.fromCharCode(116,95,52,57,0);
          let right8 = 4.0;
         bottomh = `${(penaltymatchiconY == String.fromCharCode(71,0) ? (gradle4 ? 1 : 4) : penaltymatchiconY.length)}`;
         right8 += parseFloat(`${2}`);
       let lessE = String.fromCharCode(106,95,54,52,95,111,118,101,114,108,97,121,0);
       let alertS = String.fromCharCode(115,117,105,116,101,95,57,95,57,48,0);
         bottomh = "1";
      for (let y = 0; y < 2; y++) {
         gradle4 = (lessE.length * alertS.length) < 92;
      }
      do {
          let scrollviewv = 5.0;
          let stringss = 3.0;
          let remindery = String.fromCharCode(103,95,52,56,95,112,97,114,116,121,0);
         lessE += `${(alertS == String.fromCharCode(118,0) ? parseInt(`${stringss}`) : alertS.length)}`;
         scrollviewv -= 2 << (Math.min(4, Math.abs(parseInt(`${scrollviewv}`))));
         stringss -= (remindery == String.fromCharCode(111,0) ? remindery.length : parseInt(`${scrollviewv}`));
         if (lessE.length == 2753774) {
            break;
         }
      } while ((lessE.length == 2753774) && (4 > (3 - lessE.length) || (arrowrightwithtailT.length - 3) > 5));
         gradle4 = bottomh.length <= 78 && gradle4;
      predictionbanneru = gradle4;
   }
   for (let v = 0; v < 1; v++) {
       let twittere = 2.0;
       let successl = String.fromCharCode(104,97,114,101,95,117,95,54,49,0);
       let mailV = new Map([[String.fromCharCode(101,95,53,53,95,115,101,103,109,97,112,0),878], [String.fromCharCode(97,116,114,97,99,116,97,98,95,53,95,57,54,0),203], [String.fromCharCode(103,95,50,50,95,112,108,97,110,101,115,0),209]]);
       let register_waR = [59, 340];
      do {
         mailV[`${twittere}`] = mailV.size;
         if (mailV.size == 1512452) {
            break;
         }
      } while ((1 == (mailV.size - 5)) && (mailV.size == 1512452));
          let screenb = 4;
          let viewsU = String.fromCharCode(108,95,54,55,95,107,101,121,112,97,116,104,0);
          let homej = 2;
         register_waR.push(2 - parseInt(`${twittere}`));
         screenb %= Math.max(2, 5);
         viewsU += `${homej ^ 2}`;
         homej <<= Math.min(Math.abs(homej - 1), 1);
      while (Array.from(mailV.keys()).includes(`${register_waR.length}`)) {
         mailV = new Map([[`${twittere}`, successl.length]]);
         break;
      }
         successl += `${3 + successl.length}`;
         successl += `${(successl == String.fromCharCode(90,0) ? successl.length : parseInt(`${twittere}`))}`;
         mailV[`${twittere}`] = register_waR.length;
      while (register_waR.length >= successl.length) {
         register_waR = [(String.fromCharCode(100,0) == successl ? parseInt(`${twittere}`) : successl.length)];
         break;
      }
       let eactB = [512, 698];
         eactB = [register_waR.length % (Math.max(successl.length, 4))];
         successl = "3";
       let countryt = 3.0;
         twittere += parseInt(`${twittere}`) & successl.length;
      greenarrowupE = register_waR.length >= mailV.size;
   }
      iconbells[`${guideA}`] = 2;
      greenarrowupE = predictionbanneru || penaltygoalJ.size == 64;
       let holderC = false;
       let imageactionlivec = new Map([[String.fromCharCode(117,110,102,105,108,116,101,114,101,100,95,113,95,50,56,0),149], [String.fromCharCode(100,117,115,116,95,121,95,51,54,0),605]]);
          let modulei = [String.fromCharCode(121,95,53,51,95,108,111,99,111,0), String.fromCharCode(104,95,54,50,95,97,112,112,114,111,118,97,108,0)];
          let dependenciesF = String.fromCharCode(110,111,116,105,99,101,95,109,95,57,53,0);
          let bgvipxvodm = true;
         holderC = !holderC && imageactionlivec.size > 11;
         modulei = [1];
         dependenciesF += `${((bgvipxvodm ? 5 : 2) + 2)}`;
         bgvipxvodm = modulei.length == dependenciesF.length;
       let refreshv = false;
          let adultZ = String.fromCharCode(112,105,120,101,108,115,95,115,95,51,51,0);
          let rewind3 = 1.0;
         imageactionlivec = new Map([[adultZ, adultZ.length]]);
         rewind3 -= parseInt(`${rewind3}`);
      while (imageactionlivec.size >= 2) {
         imageactionlivec[`${refreshv}`] = ((refreshv ? 4 : 4) / 1);
         break;
      }
       let middlesoundi = String.fromCharCode(115,117,98,115,116,97,116,101,95,98,95,55,0);
       let questt = String.fromCharCode(114,95,52,54,0);
      while (questt.startsWith(`${imageactionlivec.size}`)) {
         imageactionlivec[`${holderC}`] = ((holderC ? 3 : 2) & imageactionlivec.size);
         break;
      }
      agreement0[`${iconclosewhite4}`] = iconclosewhite4.length;
   if ((stepL * 5.59) < 4.7) {
      iconuserV = new Map([[`${penaltygoalJ.size}`, penaltygoalJ.size]]);
   }
   while (1 > (agreement0.size + iconbells.size) && (1 + agreement0.size) > 5) {
      iconbells = new Map([[`${penaltygoalJ.size}`, 3 + penaltygoalJ.size]]);
      break;
   }
      penaltygoalJ = new Map([[`${reducers}`, 3 | parseInt(`${stepL}`)]]);

    this.initSeekPanResponder();
      iconuserV = new Map([[`${stepL}`, parseInt(`${stepL}`) << (Math.min(guideA.length, 3))]]);
   if (!predictionbanneru) {
      penaltygoalJ = new Map([[`${iconuserV.size}`, iconuserV.size]]);
   }
      libimagepipelineu[`${predictionbanneru}`] = ((predictionbanneru ? 3 : 4) + parseInt(`${stepL}`));
   for (let y = 0; y < 3; y++) {
      penaltygoalJ[`${stepL}`] = 2 - parseInt(`${stepL}`);
   }
   for (let b = 0; b < 3; b++) {
      predictionbannersharedY += 2;
   }
      stepL *= libimagepipelineu.size;
      iconclosewhite4 = `${3 ^ iconclosewhite4.length}`;
   for (let r = 0; r < 3; r++) {
      penaltygoalJ[`${greenarrowupE}`] = iconuserV.size;
   }
   for (let z = 0; z < 3; z++) {
      agreement0[`${iconclosewhite4}`] = 1;
   }
      stepL /= Math.max((iconclosewhite4 == String.fromCharCode(89,0) ? guideA.length : iconclosewhite4.length), 4);
       let libpangleflippeds = 3.0;
      while (libpangleflippeds <= libpangleflippeds) {
         libpangleflippeds *= parseFloat(`${parseInt(`${libpangleflippeds}`)}`);
         break;
      }
          let downarrow2 = String.fromCharCode(116,101,120,105,100,101,112,95,106,95,54,48,0);
         libpangleflippeds -= parseFloat(`${2}`);
         downarrow2 = "3";
      while (1.87 > (libpangleflippeds + 5.49) || 5.49 > (libpangleflippeds + libpangleflippeds)) {
         libpangleflippeds /= Math.max(4, parseFloat(`${parseInt(`${libpangleflippeds}`) * 3}`));
         break;
      }
      iconuserV[`${predictionbannersharedY}`] = libimagepipelineu.size;
      greenarrowupE = libimagepipelineu.size <= 67;

    this.initVolumePanResponder();
      libimagepipelineu[`${iconbells.size}`] = 2 * iconbells.size;
      predictionbanneru = iconuserV.size > 36;
      iconuserV[`${iconclosewhite4}`] = iconbells.size >> (Math.min(iconclosewhite4.length, 5));
      iconbells = new Map([[`${agreement0.size}`, 1]]);
   for (let w = 0; w < 2; w++) {
      iconuserV[`${libimagepipelineu.size}`] = libimagepipelineu.size;
   }
       let yellowtoredA = String.fromCharCode(98,95,54,52,95,115,119,102,112,108,97,121,101,114,0);
       let liveC = 2.0;
      do {
         liveC /= Math.max(parseInt(`${liveC}`), 5);
         if (3120257.0 == liveC) {
            break;
         }
      } while ((yellowtoredA.length == 5) && (3120257.0 == liveC));
      for (let i = 0; i < 2; i++) {
          let whitebellr = String.fromCharCode(105,95,53,48,95,108,111,110,103,110,111,105,115,101,0);
          let promotionO = String.fromCharCode(120,95,52,57,95,115,112,101,114,97,116,111,114,0);
          let selectiony = String.fromCharCode(115,117,98,109,105,116,116,101,100,95,107,95,52,56,0);
          let smallE = 1.0;
          let uimanagerq = false;
         liveC += yellowtoredA.length;
         whitebellr = "1";
         promotionO += `${(String.fromCharCode(90,0) == promotionO ? promotionO.length : selectiony.length)}`;
         selectiony = `${selectiony.length}`;
         smallE *= parseFloat(`${whitebellr.length}`);
         uimanagerq = 21 >= promotionO.length;
      }
         liveC -= yellowtoredA.length;
         yellowtoredA = `${parseInt(`${liveC}`)}`;
      do {
         yellowtoredA += `${yellowtoredA.length}`;
         if (yellowtoredA.length == 2249286) {
            break;
         }
      } while ((!yellowtoredA.includes(`${liveC}`)) && (yellowtoredA.length == 2249286));
       let subtextd = 2.0;
       let iconwatchnowQ = 1.0;
      penaltygoalJ = new Map([[`${iconbells.size}`, 3 * iconbells.size]]);
   for (let b = 0; b < 2; b++) {
      libimagepipelineu = new Map([[`${libimagepipelineu.size}`, 2 + libimagepipelineu.size]]);
   }
       let uploadZ = 4.0;
       let acceptedg = String.fromCharCode(97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,95,116,95,57,51,0);
       let mutedm = false;
         uploadZ *= parseFloat(`${parseInt(`${uploadZ}`) - acceptedg.length}`);
         acceptedg += `${parseInt(`${uploadZ}`)}`;
          let selectedi = [212, 215];
          let humidityb = String.fromCharCode(104,95,52,53,95,97,118,97,116,97,114,115,0);
         mutedm = !mutedm && 58.28 < uploadZ;
         selectedi = [selectedi.length];
         humidityb += `${selectedi.length / 1}`;
         uploadZ *= (parseFloat(`${(mutedm ? 3 : 2)}`));
      for (let r = 0; r < 2; r++) {
         acceptedg += `${3 >> (Math.min(Math.abs(parseInt(`${uploadZ}`)), 1))}`;
      }
      while (2 <= (acceptedg.length - 3)) {
         acceptedg = `${parseInt(`${uploadZ}`)}`;
         break;
      }
          let backiconmaskh = 2.0;
          let yellowvideolivea = false;
         acceptedg += `${parseInt(`${uploadZ}`) / 2}`;
         backiconmaskh *= parseInt(`${backiconmaskh}`) | 1;
         yellowvideolivea = !yellowvideolivea;
      if (5 < (acceptedg.length | 5)) {
          let moduleP = 2.0;
          let iconnointernetW = String.fromCharCode(120,95,49,51,95,115,97,109,112,108,101,0);
          let proxyE = 0.0;
         uploadZ *= parseFloat(`${parseInt(`${moduleP}`)}`);
         moduleP -= parseInt(`${proxyE}`) + 1;
         iconnointernetW += `${(iconnointernetW == String.fromCharCode(104,0) ? parseInt(`${proxyE}`) : iconnointernetW.length)}`;
      }
         uploadZ /= Math.max(parseFloat(`${1 + acceptedg.length}`), 5);
      predictionbannersharedY |= ((greenarrowupE ? 4 : 5));
   while ((iconbells.size * 1) <= 1 && 4 <= (1 * agreement0.size)) {
       let shareblackQ = new Map([[String.fromCharCode(118,100,101,98,117,103,95,52,95,51,0),String.fromCharCode(121,95,51,50,95,118,109,110,99,0)], [String.fromCharCode(121,95,53,52,95,111,112,116,103,114,111,117,112,0),String.fromCharCode(108,95,56,56,95,109,101,115,97,103,101,115,0)], [String.fromCharCode(115,95,50,51,95,100,101,110,121,0),String.fromCharCode(106,95,57,49,95,97,112,112,114,111,120,105,109,97,116,101,0)]]);
       let questW = 1;
       let inviteL = 3.0;
         inviteL *= parseFloat(`${questW}`);
          let penaltyshootnogoal4 = false;
          let launcherE = [366, 422, 513];
          let firebase_ = true;
         questW >>= Math.min(1, Math.abs(1));
         penaltyshootnogoal4 = firebase_ || !penaltyshootnogoal4;
         launcherE.push(((firebase_ ? 1 : 1) & 1));
          let fcdaebecbcbafcdfceaaeccfeacdbr = [541, 940, 694];
          let layoutb = 5.0;
          let iconcloseM = String.fromCharCode(101,95,56,53,95,118,120,119,111,114,107,115,0);
         inviteL *= parseFloat(`${3 + iconcloseM.length}`);
         fcdaebecbcbafcdfceaaeccfeacdbr = [parseInt(`${layoutb}`) ^ 3];
         layoutb += parseInt(`${layoutb}`) << (Math.min(fcdaebecbcbafcdfceaaeccfeacdbr.length, 2));
         iconcloseM += `${fcdaebecbcbafcdfceaaeccfeacdbr.length}`;
      do {
         inviteL /= Math.max(5, parseFloat(`${shareblackQ.size | questW}`));
         if (inviteL == 3378712.0) {
            break;
         }
      } while ((5.89 <= (inviteL * 3.49) || 2 <= (4 ^ questW)) && (inviteL == 3378712.0));
         inviteL += parseFloat(`${1 & questW}`);
          let reddownarrowP = true;
          let predictiona = new Map([[String.fromCharCode(99,111,100,101,99,95,53,95,55,51,0),290], [String.fromCharCode(110,112,97,116,99,104,101,115,95,102,95,57,54,0),520]]);
         questW ^= ((reddownarrowP ? 5 : 1) ^ parseInt(`${inviteL}`));
         reddownarrowP = predictiona.size == 97;
         predictiona = new Map([[`${predictiona.size}`, 2]]);
      if (1 <= questW) {
          let acceptedF = String.fromCharCode(113,95,49,56,95,104,116,109,108,115,117,98,116,105,116,108,101,115,0);
          let popupt = String.fromCharCode(100,95,57,55,95,110,105,100,108,110,0);
          let videobufferloading1 = String.fromCharCode(99,111,110,102,105,103,117,114,101,95,117,95,51,54,0);
          let predictiondefault2 = String.fromCharCode(97,108,105,103,110,95,115,95,56,57,0);
         questW ^= acceptedF.length % (Math.max(9, parseInt(`${inviteL}`)));
         acceptedF = `${popupt.length << (Math.min(Math.abs(3), 4))}`;
         popupt = `${predictiondefault2.length}`;
         videobufferloading1 = `${predictiondefault2.length}`;
      }
         questW ^= shareblackQ.size | questW;
         questW -= 3 / (Math.max(2, shareblackQ.size));
      agreement0 = new Map([[`${shareblackQ.size}`, shareblackQ.size]]);
      break;
   }
   if (iconbells.size >= 2) {
      reducers -= (parseFloat(`${libimagepipelineu.size * (predictionbanneru ? 3 : 2)}`));
   }
   for (let q = 0; q < 1; q++) {
       let basketballplayerplaceholder5 = String.fromCharCode(112,114,101,101,109,112,116,105,118,101,95,115,95,56,55,0);
       let libglogV = new Map([[String.fromCharCode(98,95,55,48,95,97,108,108,101,116,0),985], [String.fromCharCode(112,97,114,97,103,114,97,112,104,95,49,95,51,48,0),834], [String.fromCharCode(114,95,51,53,95,105,110,118,111,107,101,114,0),670]]);
       let snewarchdefaultsY = new Map([[String.fromCharCode(106,95,56,48,95,115,105,110,99,0),702], [String.fromCharCode(105,95,49,49,95,105,110,115,116,97,110,116,105,97,116,101,0),376], [String.fromCharCode(113,95,55,50,95,118,105,111,108,97,116,105,111,110,0),884]]);
      while (basketballplayerplaceholder5.includes(`${snewarchdefaultsY.size}`)) {
         basketballplayerplaceholder5 = `${libglogV.size & snewarchdefaultsY.size}`;
         break;
      }
      do {
         snewarchdefaultsY = new Map([[`${libglogV.size}`, basketballplayerplaceholder5.length]]);
         if (snewarchdefaultsY.size == 3319600) {
            break;
         }
      } while ((snewarchdefaultsY.size == 3319600) && (5 < (snewarchdefaultsY.size >> (Math.min(basketballplayerplaceholder5.length, 1))) || (basketballplayerplaceholder5.length >> (Math.min(5, Math.abs(snewarchdefaultsY.size)))) < 5));
         basketballplayerplaceholder5 += `${basketballplayerplaceholder5.length | libglogV.size}`;
       let downloaderN = 4.0;
       let video1 = 2.0;
      for (let q = 0; q < 2; q++) {
          let fieldu = [538, 424];
          let libcxxcomponentsH = String.fromCharCode(112,95,57,52,95,112,114,111,116,111,0);
          let debugv = 5.0;
         snewarchdefaultsY = new Map([[`${snewarchdefaultsY.size}`, snewarchdefaultsY.size | parseInt(`${downloaderN}`)]]);
         fieldu.push(3 - parseInt(`${debugv}`));
         libcxxcomponentsH = `${libcxxcomponentsH.length | parseInt(`${debugv}`)}`;
      }
      libimagepipelineu = new Map([[`${iconbells.size}`, basketballplayerplaceholder5.length]]);
   }
   for (let n = 0; n < 2; n++) {
      predictionbanneru = agreement0.size == 37;
   }

  }

   
  UNSAFE_componentWillReceiveProps(nextProps) {
       let crownU = String.fromCharCode(99,111,110,118,101,114,103,101,110,99,101,95,119,95,56,53,0);
    let leaguedetailsbg8 = 1.0;
    let fastforwardg = new Map([[String.fromCharCode(112,114,111,100,117,99,116,115,95,97,95,51,50,0),759], [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,102,95,51,95,50,51,0),555], [String.fromCharCode(112,111,115,116,97,108,95,108,95,52,0),78]]);
    let assetsA = 3.0;
    let componentF = 0;
    let applicationQ = 1;
    let whitesmalltickg = 1.0;
       let schedulerN = [197, 987];
      if (2 < (schedulerN.length | schedulerN.length)) {
         schedulerN = [2];
      }
         schedulerN = [schedulerN.length];
      do {
          let reddownarrowt = false;
          let static_cn = 5;
          let awayb = String.fromCharCode(107,95,57,54,95,115,100,116,112,0);
         schedulerN.push(static_cn & awayb.length);
         reddownarrowt = reddownarrowt && !reddownarrowt;
         static_cn /= Math.max(2, 4);
         if (schedulerN.length == 218336) {
            break;
         }
      } while ((schedulerN.length == 218336) && ((schedulerN.length >> (Math.min(Math.abs(1), 4))) == 4 && 4 == (schedulerN.length >> (Math.min(Math.abs(1), 5)))));
      componentF -= 2 ^ parseInt(`${leaguedetailsbg8}`);
   while (3 >= (3 >> (Math.min(4, crownU.length)))) {
      assetsA += parseFloat(`${componentF % (Math.max(parseInt(`${leaguedetailsbg8}`), 1))}`);
      break;
   }

    if (this.state.paused !== nextProps.paused) {

   do {
       let iconrefresh7 = 0;
       let pingF = false;
       let directy = String.fromCharCode(119,95,50,48,95,118,101,114,116,105,99,97,108,0);
      for (let h = 0; h < 2; h++) {
          let change8 = String.fromCharCode(100,101,115,101,108,101,99,116,101,100,95,54,95,53,57,0);
          let pauses = 1;
         pingF = pauses <= 31 || String.fromCharCode(89,0) == directy;
         change8 = "3";
         pauses %= Math.max(change8.length, 1);
      }
      do {
         directy += `${(directy == String.fromCharCode(115,0) ? (pingF ? 1 : 3) : directy.length)}`;
         if (String.fromCharCode(115,114,49,111,0) == directy) {
            break;
         }
      } while ((String.fromCharCode(115,114,49,111,0) == directy) && (directy.endsWith(`${pingF}`)));
         directy = `${(String.fromCharCode(95,0) == directy ? (pingF ? 2 : 1) : directy.length)}`;
         pingF = iconrefresh7 <= 97 || !pingF;
         iconrefresh7 -= 2 << (Math.min(Math.abs(iconrefresh7), 1));
         directy += "2";
      while (directy.length > iconrefresh7) {
         iconrefresh7 >>= Math.min(4, Math.abs((iconrefresh7 ^ (pingF ? 1 : 3))));
         break;
      }
      do {
          let statsnomoredatag = 2.0;
          let predictionbuttonN = 2.0;
          let subsc = true;
         iconrefresh7 ^= parseInt(`${predictionbuttonN}`);
         statsnomoredatag -= parseFloat(`${3 - parseInt(`${statsnomoredatag}`)}`);
         predictionbuttonN *= ((subsc ? 1 : 2) - parseInt(`${statsnomoredatag}`));
         subsc = !subsc;
         if (iconrefresh7 == 500788) {
            break;
         }
      } while ((iconrefresh7 == 500788) && ((iconrefresh7 / 5) < 2));
      while (directy.startsWith(`${pingF}`)) {
         directy += `${iconrefresh7}`;
         break;
      }
      leaguedetailsbg8 += parseFloat(`${parseInt(`${assetsA}`) * 1}`);
      if (leaguedetailsbg8 == 52753.0) {
         break;
      }
   } while ((leaguedetailsbg8 == 52753.0) && (leaguedetailsbg8 == componentF));
   for (let z = 0; z < 2; z++) {
      leaguedetailsbg8 -= parseFloat(`${fastforwardg.size}`);
   }
      this.setState({
        paused: nextProps.paused,
      });
      whitesmalltickg /= Math.max(parseFloat(`${1 * crownU.length}`), 5);
       let loginZ = 3.0;
       let window_bZ = [353, 579];
       let iconbellm = 4;
         window_bZ.push(parseInt(`${loginZ}`) & 2);
      if ((window_bZ.length % 4) == 3 || (window_bZ.length % (Math.max(1, iconbellm))) == 4) {
         window_bZ = [1 * parseInt(`${loginZ}`)];
      }
         window_bZ.push(iconbellm & parseInt(`${loginZ}`));
      if (1 == (4 + window_bZ.length)) {
         window_bZ.push(iconbellm);
      }
         iconbellm += 3;
         window_bZ = [parseInt(`${loginZ}`)];
      if (window_bZ.length <= loginZ) {
         window_bZ = [3 >> (Math.min(Math.abs(iconbellm), 4))];
      }
       let backwhiteZ = true;
       let xvodz = false;
      if (backwhiteZ) {
         iconbellm <<= Math.min(4, Math.abs(3 | window_bZ.length));
      }
      leaguedetailsbg8 *= parseFloat(`${2 / (Math.max(2, parseInt(`${assetsA}`)))}`);

    }

    if (this.styles.videoStyle !== nextProps.videoStyle) {

       let mathU = [45, 172];
       let iconmoreH = String.fromCharCode(97,114,101,113,117,101,115,116,95,110,95,56,57,0);
       let reward7 = String.fromCharCode(109,111,100,97,108,108,121,95,49,95,56,53,0);
          let footballfiledlayoutT = String.fromCharCode(118,95,56,51,95,101,109,101,114,103,101,110,99,121,0);
         iconmoreH = `${reward7.length}`;
         footballfiledlayoutT = "1";
       let statisticsactive6 = 2.0;
       let greenarrowupP = 5.0;
         greenarrowupP *= 3 >> (Math.min(4, mathU.length));
          let shrinkg = String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,100,95,101,95,53,55,0);
         statisticsactive6 -= reward7.length / (Math.max(2, 8));
         shrinkg += "1";
      for (let l = 0; l < 2; l++) {
          let iconclosewhitebgd = String.fromCharCode(97,95,57,50,95,112,98,108,111,99,107,115,0);
          let iconpointscoreO = [986, 173, 127];
          let calendaru = String.fromCharCode(99,97,108,105,98,114,97,116,101,100,95,110,95,50,53,0);
          let iconnotificationnewg = [613, 413];
         statisticsactive6 -= calendaru.length;
         iconclosewhitebgd = `${iconpointscoreO.length}`;
         iconpointscoreO.push(2);
         calendaru += `${iconpointscoreO.length | iconnotificationnewg.length}`;
         iconnotificationnewg = [iconnotificationnewg.length];
      }
      if (5 < (2 / (Math.max(9, reward7.length)))) {
         mathU.push(1);
      }
       let disconnectedZ = 1.0;
       let moonj = 3.0;
         mathU = [3];
      while ((5.29 - moonj) == 1.55 || (5.29 - disconnectedZ) == 4.41) {
          let searchbarl = String.fromCharCode(115,105,109,112,108,105,102,121,95,101,95,51,49,0);
          let streamingy = [String.fromCharCode(114,95,56,49,95,100,105,109,115,0), String.fromCharCode(103,95,55,53,95,100,101,99,111,114,97,116,101,0), String.fromCharCode(109,97,100,101,95,55,95,57,50,0)];
          let yellowredcard0 = 3.0;
          let contextV = String.fromCharCode(119,95,55,54,0);
         moonj /= Math.max(contextV.length, 3);
         searchbarl += `${streamingy.length}`;
         streamingy = [searchbarl.length];
         yellowredcard0 *= parseFloat(`${3 % (Math.max(1, parseInt(`${yellowredcard0}`)))}`);
         contextV += `${parseInt(`${yellowredcard0}`) << (Math.min(1, Math.abs(1)))}`;
         break;
      }
      whitesmalltickg -= parseFloat(`${parseInt(`${assetsA}`) >> (Math.min(iconmoreH.length, 1))}`);
   for (let l = 0; l < 2; l++) {
       let tnewarchdefaultsr = String.fromCharCode(108,105,98,119,101,98,112,95,117,95,57,48,0);
       let iconarrowrightorangee = new Map([[String.fromCharCode(100,101,110,105,97,108,95,54,95,51,48,0),586], [String.fromCharCode(99,111,110,118,101,114,115,105,111,110,95,52,95,49,53,0),740], [String.fromCharCode(104,101,97,114,98,101,97,116,95,56,95,56,57,0),323]]);
      for (let w = 0; w < 3; w++) {
         iconarrowrightorangee = new Map([[`${iconarrowrightorangee.size}`, 2 / (Math.max(8, iconarrowrightorangee.size))]]);
      }
       let icondefaultthumbnailM = false;
       let baiduads_ = 5.0;
      if (tnewarchdefaultsr.length > 2) {
         tnewarchdefaultsr = `${1 ^ tnewarchdefaultsr.length}`;
      }
         iconarrowrightorangee[`${icondefaultthumbnailM}`] = tnewarchdefaultsr.length;
          let exampleimageC = String.fromCharCode(104,111,108,108,111,119,95,51,95,54,53,0);
         baiduads_ -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${baiduads_}`)), 3))}`);
         exampleimageC += `${exampleimageC.length}`;
      leaguedetailsbg8 /= Math.max(5, parseFloat(`${parseInt(`${assetsA}`)}`));
   }
      this.styles.videoStyle = nextProps.videoStyle;
   do {
      applicationQ -= fastforwardg.size ^ applicationQ;
      if (822896 == applicationQ) {
         break;
      }
   } while ((822896 == applicationQ) && (fastforwardg[`${applicationQ}`] != null));
       let wifirouterz = String.fromCharCode(104,95,50,56,95,109,116,97,102,0);
       let bellreminderx = [String.fromCharCode(99,115,114,105,100,95,49,95,57,56,0), String.fromCharCode(100,115,99,112,95,111,95,54,54,0), String.fromCharCode(118,95,52,49,95,116,111,111,108,98,97,114,0)];
       let sellmathbackgroundh = 5.0;
         wifirouterz += "1";
      while (4 > (wifirouterz.length ^ 5) || 5 > (5 ^ bellreminderx.length)) {
          let encryptg = 5.0;
         wifirouterz = `${bellreminderx.length >> (Math.min(3, Math.abs(parseInt(`${sellmathbackgroundh}`))))}`;
         encryptg += parseFloat(`${1 % (Math.max(7, parseInt(`${encryptg}`)))}`);
         break;
      }
         wifirouterz += `${wifirouterz.length % 1}`;
          let smalls = false;
         sellmathbackgroundh /= Math.max(parseFloat(`${parseInt(`${sellmathbackgroundh}`) + 3}`), 4);
         smalls = !smalls;
          let read4 = String.fromCharCode(105,100,105,111,109,95,51,95,51,54,0);
          let elements0 = false;
         wifirouterz = `${wifirouterz.length + parseInt(`${sellmathbackgroundh}`)}`;
         read4 += `${((elements0 ? 2 : 1))}`;
         elements0 = !elements0;
         wifirouterz = `${wifirouterz.length}`;
         bellreminderx = [parseInt(`${sellmathbackgroundh}`) & 3];
          let libavcodecJ = String.fromCharCode(102,105,108,108,101,100,95,54,95,49,51,0);
          let footballH = new Map([[String.fromCharCode(99,111,109,112,111,115,101,105,95,105,95,55,52,0),true ], [String.fromCharCode(97,108,116,114,101,102,95,110,95,53,52,0),false ], [String.fromCharCode(102,105,108,116,95,97,95,57,56,0),true ]]);
          let vietnam9 = true;
         wifirouterz += `${2 | footballH.size}`;
         libavcodecJ += `${2 ^ libavcodecJ.length}`;
         footballH[libavcodecJ] = libavcodecJ.length;
      for (let v = 0; v < 3; v++) {
         sellmathbackgroundh *= parseFloat(`${1 >> (Math.min(4, wifirouterz.length))}`);
      }
      crownU = `${parseInt(`${whitesmalltickg}`)}`;

    }

    if (this.styles.containerStyle !== nextProps.style) {

      leaguedetailsbg8 += parseFloat(`${crownU.length}`);
   while (assetsA <= componentF) {
      assetsA *= parseFloat(`${fastforwardg.size}`);
      break;
   }
      this.styles.containerStyle = nextProps.style;
       let buttonj = 2.0;
       let dacccfaabfbcbadeebddcabacdffdb9 = [322, 18, 226];
       let form5 = String.fromCharCode(104,95,50,52,95,118,97,114,105,97,100,105,99,0);
         dacccfaabfbcbadeebddcabacdffdb9.push(dacccfaabfbcbadeebddcabacdffdb9.length);
      while (!form5.startsWith(`${buttonj}`)) {
         form5 += `${parseInt(`${buttonj}`) + 1}`;
         break;
      }
         form5 += `${(String.fromCharCode(78,0) == form5 ? form5.length : dacccfaabfbcbadeebddcabacdffdb9.length)}`;
         dacccfaabfbcbadeebddcabacdffdb9 = [form5.length];
       let subin3 = String.fromCharCode(97,114,103,95,99,95,49,0);
       let iconarrowleftd = String.fromCharCode(105,108,111,103,95,113,95,55,53,0);
      crownU = `${parseInt(`${assetsA}`) % (Math.max(9, parseInt(`${buttonj}`)))}`;
      applicationQ += parseInt(`${leaguedetailsbg8}`) + crownU.length;

    }
  }

   
  componentDidMount() {
       let miniX = String.fromCharCode(97,110,115,119,101,114,95,122,95,54,48,0);
    let libimagepipelineX = 4.0;
    let libavcodecc = [664, 39];
    let matchdetailbg6 = String.fromCharCode(114,101,97,100,95,104,95,56,54,0);
    let countryZ = 2.0;
    let libcxxcomponentsP = 4.0;
    let n_image6 = true;
    let modec = false;
    let whatsappx = 5.0;
    let modulez = String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,95,52,95,49,51,0);
      libcxxcomponentsP /= Math.max((parseFloat(`${(modec ? 1 : 5) ^ parseInt(`${countryZ}`)}`)), 4);
   for (let u = 0; u < 3; u++) {
      matchdetailbg6 += `${2 * parseInt(`${countryZ}`)}`;
   }
   do {
      countryZ += parseInt(`${libimagepipelineX}`);
      if (896722.0 == countryZ) {
         break;
      }
   } while ((2.36 > (2.82 / (Math.max(9, countryZ))) && (libimagepipelineX / 2.82) > 2.89) && (896722.0 == countryZ));

    const position = this.calculateVolumePositionFromVolume();
      modec = libavcodecc.length == 57 || libimagepipelineX == 100.85;
      countryZ += parseInt(`${libcxxcomponentsP}`);
   while ((libimagepipelineX - 2.9) > 1.96 && (2.9 - libcxxcomponentsP) > 3.51) {
       let libfbC = String.fromCharCode(110,95,49,55,95,114,101,99,101,110,116,101,114,0);
          let viewerH = 3.0;
          let libavcodecA = 5.0;
         libfbC += `${libfbC.length}`;
         viewerH /= Math.max(1, parseInt(`${libavcodecA}`) & 3);
         libavcodecA -= parseFloat(`${parseInt(`${viewerH}`)}`);
       let icondownimgF = true;
         libfbC += `${((icondownimgF ? 2 : 2) % (Math.max(libfbC.length, 8)))}`;
      libimagepipelineX *= (String.fromCharCode(50,0) == matchdetailbg6 ? matchdetailbg6.length : (n_image6 ? 5 : 3));
      break;
   }

    let state = this.state;
   do {
       let profileinactivec = 4.0;
       let libzeusS = 1;
       let inactiveS = [733, 89];
       let long_uuY = new Map([[String.fromCharCode(102,95,55,95,116,101,115,115,101,108,97,116,111,114,0),true ], [String.fromCharCode(101,95,53,57,95,112,114,101,108,111,97,100,0),false ]]);
       let bottomX = false;
      if (inactiveS.length <= 1) {
          let friendsX = new Map([[String.fromCharCode(112,114,101,100,105,99,116,105,111,110,115,95,109,95,52,52,0),911], [String.fromCharCode(115,101,97,114,99,104,95,116,95,52,48,0),731], [String.fromCharCode(122,95,50,54,95,114,101,97,108,108,121,0),522]]);
          let abouth = 2.0;
          let graphicsi = 0;
          let yellowvideolives = 5.0;
         inactiveS.push(2);
         friendsX[`${graphicsi}`] = 2;
         abouth /= Math.max(5, parseFloat(`${parseInt(`${yellowvideolives}`) ^ graphicsi}`));
         yellowvideolives /= Math.max(3, 2);
      }
          let chatroombackgroundW = false;
          let static_1vt = String.fromCharCode(121,95,57,54,95,100,101,97,99,116,0);
          let tails = 1.0;
         bottomX = 6 >= inactiveS.length && 6 >= libzeusS;
         chatroombackgroundW = 11.98 > tails;
         static_1vt += `${(static_1vt.length | (chatroombackgroundW ? 2 : 3))}`;
         tails *= (String.fromCharCode(95,0) == static_1vt ? static_1vt.length : (chatroombackgroundW ? 1 : 5));
         libzeusS <<= Math.min(1, Math.abs(libzeusS / 2));
          let pathK = true;
          let sharewhiteD = new Map([[String.fromCharCode(103,95,57,54,95,120,99,101,112,116,105,111,110,0),String.fromCharCode(100,105,115,112,111,115,101,95,57,95,56,57,0)], [String.fromCharCode(101,118,101,114,121,111,110,101,95,50,95,49,54,0),String.fromCharCode(100,95,50,50,95,112,97,114,97,108,108,97,120,0)], [String.fromCharCode(99,95,49,49,95,114,101,101,110,97,98,108,101,0),String.fromCharCode(99,97,99,104,101,115,95,113,95,57,55,0)]]);
         libzeusS /= Math.max(((pathK ? 5 : 1)), 3);
         pathK = 48 > sharewhiteD.size;
         sharewhiteD = new Map([[`${sharewhiteD.size}`, sharewhiteD.size]]);
         long_uuY = new Map([[`${profileinactivec}`, libzeusS]]);
          let resendz = new Map([[String.fromCharCode(99,95,52,52,95,111,112,101,110,115,115,108,118,0),741], [String.fromCharCode(104,95,54,53,95,109,98,101,100,103,101,0),982], [String.fromCharCode(117,95,50,57,95,112,114,111,98,97,98,105,108,105,116,105,101,115,0),174]]);
          let gmailf = true;
          let delegate_zg = String.fromCharCode(111,95,53,49,95,107,117,107,105,0);
         libzeusS %= Math.max(1, resendz.size - 3);
         resendz[delegate_zg] = delegate_zg.length;
         gmailf = delegate_zg == String.fromCharCode(97,0);
         bottomX = (long_uuY.size ^ inactiveS.length) >= 41;
      while ((3.11 + profileinactivec) > 4.32 || 5.54 > (profileinactivec + 3.11)) {
         libzeusS %= Math.max(((bottomX ? 3 : 2) % (Math.max(parseInt(`${profileinactivec}`), 8))), 5);
         break;
      }
         inactiveS.push(((bottomX ? 1 : 5) - 1));
      if ((profileinactivec / (Math.max(parseFloat(`${inactiveS.length}`), 7))) >= 4.70 && (inactiveS.length / (Math.max(2, parseInt(`${profileinactivec}`)))) >= 1) {
         profileinactivec += parseFloat(`${long_uuY.size << (Math.min(inactiveS.length, 1))}`);
      }
       let predictionz = 0.0;
       let editp = 3.0;
          let sharewhiteN = 1.0;
          let ginit__f = [843, 539];
         bottomX = predictionz == 64.61 || 48 == inactiveS.length;
         sharewhiteN += parseInt(`${sharewhiteN}`) >> (Math.min(ginit__f.length, 2));
         ginit__f.push(3 >> (Math.min(4, ginit__f.length)));
         inactiveS = [1];
          let settingB = String.fromCharCode(101,95,57,54,95,105,109,112,108,0);
         inactiveS = [parseInt(`${predictionz}`) % (Math.max(long_uuY.size, 7))];
         settingB += `${settingB.length / (Math.max(6, settingB.length))}`;
      do {
          let logof = 5;
          let libffmpegkitO = 1.0;
          let snewsshare4 = false;
         libzeusS /= Math.max(5, ((bottomX ? 2 : 1) | parseInt(`${editp}`)));
         logof -= logof >> (Math.min(5, Math.abs(2)));
         libffmpegkitO += 2;
         snewsshare4 = 19.58 >= libffmpegkitO && !snewsshare4;
         if (2732996 == libzeusS) {
            break;
         }
      } while ((2732996 == libzeusS) && (libzeusS >= 2));
      libavcodecc = [matchdetailbg6.length];
      if (1370995 == libavcodecc.length) {
         break;
      }
   } while ((5 <= (libavcodecc.length >> (Math.min(matchdetailbg6.length, 5))) || 1 <= (matchdetailbg6.length >> (Math.min(Math.abs(5), 4)))) && (1370995 == libavcodecc.length));
       let nodeP = String.fromCharCode(98,111,120,95,103,95,53,49,0);
       let heartv = 4;
       let downloadingD = 4.0;
         downloadingD += parseFloat(`${1 / (Math.max(2, heartv))}`);
         heartv %= Math.max(5, (nodeP == String.fromCharCode(51,0) ? heartv : nodeP.length));
      for (let m = 0; m < 1; m++) {
          let moduleG = String.fromCharCode(103,95,54,55,95,101,120,112,97,110,100,0);
          let controls_ = 3.0;
          let borderlessd = String.fromCharCode(114,101,111,114,100,101,114,105,110,103,95,114,95,50,55,0);
          let chinaj = String.fromCharCode(98,95,57,57,95,114,101,99,105,100,0);
         heartv &= moduleG.length % 2;
         moduleG = `${chinaj.length}`;
         controls_ /= Math.max(chinaj.length, 2);
         borderlessd += `${parseInt(`${controls_}`)}`;
      }
         heartv &= heartv;
      while (3 == (nodeP.length | heartv) && 2 == (3 | heartv)) {
         nodeP += `${heartv}`;
         break;
      }
      for (let t = 0; t < 3; t++) {
         nodeP += `${heartv | 3}`;
      }
         downloadingD += parseFloat(`${nodeP.length | 3}`);
      do {
          let brightnessD = String.fromCharCode(100,114,97,119,97,98,108,101,95,99,95,55,50,0);
         downloadingD *= parseFloat(`${parseInt(`${downloadingD}`) ^ nodeP.length}`);
         brightnessD = `${2 >> (Math.min(5, brightnessD.length))}`;
         if (downloadingD == 4262830.0) {
            break;
         }
      } while ((downloadingD == 4262830.0) && (1.61 < (parseFloat(`${heartv}`) + downloadingD) || (parseInt(`${downloadingD}`) + heartv) < 5));
       let runtimeschedulerk = 0.0;
       let downP = 3.0;
      modec = heartv < libavcodecc.length;
   while ((4.65 * libimagepipelineX) >= 3.80) {
      n_image6 = modec;
      break;
   }

    this.setVolumePosition(position);
   do {
      modec = libavcodecc.includes(modec);
      if (modec ? !modec : modec) {
         break;
      }
   } while (((libimagepipelineX / (Math.max(5.94, 4))) > 1.91 && modec) && (modec ? !modec : modec));
   do {
      matchdetailbg6 += `${miniX.length | parseInt(`${libimagepipelineX}`)}`;
      if (String.fromCharCode(103,102,101,104,117,104,112,0) == matchdetailbg6) {
         break;
      }
   } while ((5 >= (4 * libavcodecc.length) || 4 >= (matchdetailbg6.length * libavcodecc.length)) && (String.fromCharCode(103,102,101,104,117,104,112,0) == matchdetailbg6));
   do {
      n_image6 = 16.62 < (libimagepipelineX / (Math.max(libcxxcomponentsP, 10)));
      if (n_image6 ? !n_image6 : n_image6) {
         break;
      }
   } while ((n_image6 ? !n_image6 : n_image6) && (2.94 < libcxxcomponentsP));

    state.volumeOffset = position;
       let filledf = 3;
       let scrollviewa = [541, 270];
          let matchesT = [String.fromCharCode(116,101,120,116,95,120,95,50,56,0), String.fromCharCode(115,99,97,110,115,116,97,116,117,115,95,106,95,49,53,0)];
          let exampleimageB = new Map([[String.fromCharCode(108,111,111,112,105,110,103,95,109,95,55,52,0),true ], [String.fromCharCode(109,95,55,53,95,106,107,101,110,99,0),true ], [String.fromCharCode(115,95,54,52,95,99,104,105,110,0),false ]]);
          let loginsuccesss = String.fromCharCode(116,101,115,116,105,109,103,105,110,116,95,108,95,56,50,0);
         filledf |= 1 % (Math.max(8, matchesT.length));
         matchesT = [loginsuccesss.length];
         exampleimageB[`${loginsuccesss}`] = exampleimageB.size - loginsuccesss.length;
      if (scrollviewa.includes(filledf)) {
         filledf /= Math.max(1, 2);
      }
         scrollviewa = [3 | filledf];
      if (scrollviewa.length == filledf) {
          let footballtrophyw = String.fromCharCode(104,95,55,53,95,115,97,118,101,112,111,105,110,116,0);
         scrollviewa = [footballtrophyw.length ^ scrollviewa.length];
      }
         filledf |= 1 - filledf;
          let homeloadingw = String.fromCharCode(104,97,115,104,116,97,98,108,101,95,120,95,57,50,0);
          let dice7 = [String.fromCharCode(114,97,110,100,101,110,95,117,95,53,54,0), String.fromCharCode(102,99,102,115,95,121,95,54,51,0)];
          let referrere = String.fromCharCode(100,97,118,115,95,111,95,57,49,0);
         filledf /= Math.max(3, dice7.length * referrere.length);
         homeloadingw = `${homeloadingw.length << (Math.min(homeloadingw.length, 1))}`;
         dice7 = [homeloadingw.length / 2];
      libimagepipelineX += parseInt(`${whatsappx}`) << (Math.min(3, Math.abs(2)));
   for (let g = 0; g < 2; g++) {
      countryZ += (String.fromCharCode(49,0) == matchdetailbg6 ? matchdetailbg6.length : libavcodecc.length);
   }
   while ((2 & miniX.length) == 1) {
      libcxxcomponentsP -= parseFloat(`${3 & miniX.length}`);
      break;
   }

    this.mounted = true;
   do {
      libavcodecc.push((String.fromCharCode(69,0) == miniX ? (modec ? 5 : 1) : miniX.length));
      if (3788337 == libavcodecc.length) {
         break;
      }
   } while ((3788337 == libavcodecc.length) && ((parseInt(`${whatsappx}`) / (Math.max(libavcodecc.length, 5))) < 3 || 3 < (parseInt(`${whatsappx}`) / (Math.max(libavcodecc.length, 9)))));
   while (matchdetailbg6.length < 1) {
      n_image6 = modulez.length < 39;
      break;
   }
   if (modulez.endsWith(`${libimagepipelineX}`)) {
       let weatherD = [818, 592, 806];
         weatherD = [1];
       let weibo0 = 2;
       let gradlex = 1;
          let championF = 3.0;
          let telegramS = String.fromCharCode(99,111,110,118,101,120,95,113,95,49,57,0);
          let hooks7 = 1.0;
         weibo0 += telegramS.length << (Math.min(Math.abs(2), 4));
         championF *= 1 + parseInt(`${championF}`);
         telegramS = `${parseInt(`${championF}`) | 2}`;
         hooks7 -= parseInt(`${hooks7}`) * parseInt(`${championF}`);
      libimagepipelineX *= 2 << (Math.min(4, Math.abs(parseInt(`${libcxxcomponentsP}`))));
   }


    this.setState(state);
       let lightU = new Map([[String.fromCharCode(99,111,110,100,101,110,115,97,98,108,101,95,109,95,53,50,0),43], [String.fromCharCode(116,105,100,121,95,116,95,57,56,0),281], [String.fromCharCode(117,95,55,49,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,0),667]]);
          let ballf = String.fromCharCode(109,111,100,117,108,101,109,97,112,95,52,95,53,55,0);
         lightU[`${ballf}`] = 2 << (Math.min(2, Math.abs(lightU.size)));
         lightU[`${lightU.size}`] = lightU.size;
         lightU = new Map([[`${lightU.size}`, lightU.size % (Math.max(1, 4))]]);
      whatsappx *= ((n_image6 ? 4 : 3));
   do {
      modec = libcxxcomponentsP <= 68.77;
      if (modec ? !modec : modec) {
         break;
      }
   } while ((modulez.length > 5) && (modec ? !modec : modec));
      libcxxcomponentsP /= Math.max(parseFloat(`${1}`), 5);

  }

   
  componentWillUnmount() {
       let sortf = 5.0;
    let result9 = 2;
    let mbjscommonD = 2.0;
    let holderm = new Map([[String.fromCharCode(98,95,51,55,95,115,117,98,106,101,99,116,105,118,101,115,0),false ], [String.fromCharCode(115,95,53,49,95,108,104,115,0),false ]]);
    let stationf = 1.0;
    let y_managerk = [418, 640, 612];
    let subtexti = [211, 911];
    let shootnogoal5 = 3;
    let footballfields = new Map([[String.fromCharCode(114,101,97,100,109,101,95,100,95,51,50,0),36], [String.fromCharCode(108,109,100,98,95,117,95,56,55,0),320], [String.fromCharCode(97,108,116,105,118,101,99,95,55,95,51,55,0),231]]);
    let homeP = String.fromCharCode(99,98,115,110,105,100,95,52,95,50,53,0);
    let anytimeI = 0.0;
    let sourceZ = String.fromCharCode(116,95,50,57,95,110,111,116,101,115,0);
    let middlesoundC = String.fromCharCode(121,95,55,48,95,115,117,98,99,111,101,102,115,0);
    let unreadK = String.fromCharCode(113,95,57,52,95,109,111,100,117,108,97,116,101,0);
    let abidetectK = String.fromCharCode(101,110,108,97,114,103,101,95,49,95,56,53,0);
    let iconviewerC = String.fromCharCode(99,95,50,51,95,115,117,112,112,111,114,116,0);
    let specg = String.fromCharCode(107,95,57,57,95,104,97,114,101,0);
       let gifgoalbgL = new Map([[String.fromCharCode(98,108,97,110,107,95,99,95,52,0),338], [String.fromCharCode(118,95,49,54,95,100,101,116,101,114,109,105,110,105,115,116,105,99,0),888]]);
       let wifirouterV = 1.0;
         gifgoalbgL = new Map([[`${gifgoalbgL.size}`, gifgoalbgL.size]]);
      while (3.54 >= (parseFloat(`${gifgoalbgL.size}`) - wifirouterV) && 1.26 >= (wifirouterV - 3.54)) {
         wifirouterV /= Math.max(parseFloat(`${parseInt(`${wifirouterV}`) >> (Math.min(Math.abs(gifgoalbgL.size), 3))}`), 1);
         break;
      }
      for (let z = 0; z < 1; z++) {
         gifgoalbgL[`${wifirouterV}`] = parseInt(`${wifirouterV}`);
      }
          let jingdong9 = String.fromCharCode(116,104,114,101,101,115,116,97,116,101,95,114,95,50,52,0);
          let libflipperM = new Map([[String.fromCharCode(97,99,116,105,118,97,116,111,114,95,120,95,55,56,0),309], [String.fromCharCode(99,111,115,105,103,110,97,116,111,114,121,95,117,95,51,52,0),341], [String.fromCharCode(118,95,50,56,95,112,114,97,112,97,114,101,0),114]]);
         gifgoalbgL[`${wifirouterV}`] = gifgoalbgL.size;
         jingdong9 += `${jingdong9.length}`;
         libflipperM = new Map([[`${libflipperM.size}`, jingdong9.length]]);
         wifirouterV *= parseFloat(`${gifgoalbgL.size ^ parseInt(`${wifirouterV}`)}`);
      for (let s = 0; s < 2; s++) {
         wifirouterV *= parseFloat(`${gifgoalbgL.size - parseInt(`${wifirouterV}`)}`);
      }
      anytimeI *= homeP.length + 3;
   for (let e = 0; e < 3; e++) {
      holderm[sourceZ] = y_managerk.length;
   }
   while ((footballfields.size - 5) == 2 || (footballfields.size - 5) == 5) {
       let hometeamfieldr = String.fromCharCode(106,95,51,51,95,114,101,115,105,115,116,97,110,99,101,0);
       let libloggerH = false;
      while (!hometeamfieldr.includes(`${libloggerH}`)) {
          let libcrashsdkH = 1;
          let watchnowbg7 = new Map([[String.fromCharCode(112,101,114,115,105,115,116,101,110,99,101,95,99,95,50,56,0),true ], [String.fromCharCode(100,111,110,97,116,101,95,119,95,52,53,0),false ]]);
         libloggerH = !libloggerH;
         libcrashsdkH *= libcrashsdkH * watchnowbg7.size;
         watchnowbg7 = new Map([[`${watchnowbg7.size}`, 2]]);
         break;
      }
       let loadingspinnerz = true;
       let detailsK = false;
      for (let w = 0; w < 1; w++) {
         loadingspinnerz = hometeamfieldr.includes(`${loadingspinnerz}`);
      }
      do {
          let defaultplayerimgu = String.fromCharCode(115,95,57,53,95,105,110,100,105,114,101,99,116,0);
          let mbnativeadvanced3 = new Map([[String.fromCharCode(105,115,109,101,109,115,101,116,95,99,95,52,55,0),311], [String.fromCharCode(108,101,97,100,105,110,103,95,107,95,54,51,0),671], [String.fromCharCode(121,95,49,95,100,101,99,108,97,114,101,100,0),600]]);
          let frame_pl = String.fromCharCode(120,95,53,56,95,98,105,116,118,101,99,116,111,114,0);
          let o_imageR = true;
         libloggerH = loadingspinnerz;
         defaultplayerimgu = `${frame_pl.length}`;
         mbnativeadvanced3[`${o_imageR}`] = 1;
         frame_pl += `${defaultplayerimgu.length}`;
         if (libloggerH ? !libloggerH : libloggerH) {
            break;
         }
      } while ((hometeamfieldr.length < 2 || !libloggerH) && (libloggerH ? !libloggerH : libloggerH));
         hometeamfieldr += "3";
      if (!libloggerH || 5 < hometeamfieldr.length) {
         hometeamfieldr = `${(2 ^ (detailsK ? 1 : 3))}`;
      }
      homeP = "3";
      break;
   }
   for (let w = 0; w < 2; w++) {
      footballfields = new Map([[`${y_managerk.length}`, parseInt(`${stationf}`)]]);
   }
       let checkboxS = [877, 58, 549];
      if ((checkboxS.length % 4) > 4 || (checkboxS.length % (Math.max(9, checkboxS.length))) > 4) {
          let trashB = String.fromCharCode(103,95,50,51,95,99,97,108,108,115,0);
          let profilepicS = 5.0;
          let screeni = [313, 590, 700];
          let successj = 3.0;
         checkboxS.push(parseInt(`${profilepicS}`));
         trashB = `${trashB.length << (Math.min(Math.abs(2), 3))}`;
         screeni = [screeni.length];
         successj /= Math.max(1, parseFloat(`${parseInt(`${successj}`) + screeni.length}`));
      }
          let profileactive1 = String.fromCharCode(116,114,97,115,104,111,108,100,95,110,95,49,52,0);
         checkboxS.push(checkboxS.length);
         profileactive1 = `${profileactive1.length - profileactive1.length}`;
          let mbnative9 = 0.0;
          let gdtadvK = String.fromCharCode(116,95,52,56,95,115,121,110,111,110,121,109,115,0);
          let moduleU = [256, 594, 555];
         checkboxS.push(gdtadvK.length);
         mbnative9 += parseFloat(`${2}`);
         gdtadvK = `${parseInt(`${mbnative9}`)}`;
         moduleU.push(moduleU.length);
      homeP = `${y_managerk.length}`;
       let iconmoreb = false;
       let mbnativeadvancedh = String.fromCharCode(118,95,54,49,95,114,111,117,110,100,110,101,115,115,0);
       let countryu = [43, 195, 607];
          let emoji4 = [String.fromCharCode(104,95,51,55,95,115,116,97,99,107,0), String.fromCharCode(106,95,52,56,95,112,104,121,115,0), String.fromCharCode(113,95,50,53,95,112,114,111,112,97,103,97,116,101,0)];
          let paginationz = String.fromCharCode(110,111,116,99,104,101,100,95,115,95,55,56,0);
         countryu.push((String.fromCharCode(115,0) == paginationz ? paginationz.length : (iconmoreb ? 4 : 3)));
         emoji4.push(1 >> (Math.min(5, emoji4.length)));
      while (mbnativeadvancedh.length <= 4) {
         mbnativeadvancedh += `${((iconmoreb ? 2 : 2))}`;
         break;
      }
          let reactnativeratingsb = true;
          let combineh = new Map([[String.fromCharCode(110,95,50,56,95,114,108,111,116,116,105,101,99,111,109,109,111,110,0),false ], [String.fromCharCode(108,97,103,97,114,105,116,104,114,97,99,95,53,95,52,54,0),false ]]);
          let basketballplayerplaceholdere = 0.0;
         countryu.push(3 & combineh.size);
         reactnativeratingsb = 82.56 < basketballplayerplaceholdere || 82.56 < basketballplayerplaceholdere;
         combineh = new Map([[`${basketballplayerplaceholdere}`, parseInt(`${basketballplayerplaceholdere}`)]]);
      if ((1 ^ countryu.length) >= 5) {
         iconmoreb = mbnativeadvancedh.endsWith(`${iconmoreb}`);
      }
         mbnativeadvancedh = `${((iconmoreb ? 1 : 1) % (Math.max(countryu.length, 10)))}`;
      if (!mbnativeadvancedh.startsWith(`${iconmoreb}`)) {
          let mathL = String.fromCharCode(97,95,50,95,97,121,111,117,116,0);
          let iconarrowrightblackG = [451, 900, 320];
          let libavdevice6 = new Map([[String.fromCharCode(98,97,103,101,95,118,95,50,56,0),431], [String.fromCharCode(116,101,114,109,105,110,97,116,105,110,103,95,119,95,55,49,0),511], [String.fromCharCode(101,95,57,48,95,102,105,110,105,115,104,0),162]]);
         iconmoreb = countryu.length == libavdevice6.size;
         mathL += `${iconarrowrightblackG.length | 1}`;
         iconarrowrightblackG = [iconarrowrightblackG.length];
         libavdevice6 = new Map([[`${iconarrowrightblackG.length}`, iconarrowrightblackG.length]]);
      }
      do {
         mbnativeadvancedh = `${mbnativeadvancedh.length}`;
         if (4393991 == mbnativeadvancedh.length) {
            break;
         }
      } while ((mbnativeadvancedh.length <= countryu.length) && (4393991 == mbnativeadvancedh.length));
          let liveendmodallogoG = [String.fromCharCode(105,95,52,50,95,112,114,101,115,117,109,101,0), String.fromCharCode(112,111,116,105,115,105,111,110,95,121,95,56,56,0)];
          let moviesh = new Map([[String.fromCharCode(112,114,101,105,110,105,116,95,53,95,49,54,0),true ], [String.fromCharCode(99,95,54,57,95,115,101,116,116,105,110,103,0),false ], [String.fromCharCode(108,111,110,95,99,95,49,52,0),false ]]);
         iconmoreb = (moviesh.size >> (Math.min(3, liveendmodallogoG.length))) >= 1;
         countryu = [(3 & (iconmoreb ? 5 : 1))];
      homeP += `${2 >> (Math.min(Math.abs(parseInt(`${sortf}`)), 1))}`;
       let container4 = String.fromCharCode(98,105,103,110,117,109,95,104,95,53,55,0);
         container4 += `${container4.length | 3}`;
          let subtextY = 4.0;
          let nterstitialP = 2;
         container4 = `${nterstitialP}`;
         subtextY /= Math.max(parseFloat(`${parseInt(`${subtextY}`)}`), 5);
         nterstitialP %= Math.max(3, 4);
      if (!container4.startsWith(container4)) {
          let whatsappB = [989, 291];
          let reddownarrowx = 1.0;
         container4 += `${whatsappB.length >> (Math.min(2, Math.abs(parseInt(`${reddownarrowx}`))))}`;
      }
      anytimeI -= parseInt(`${sortf}`) * 3;
       let greyarrowupm = 2.0;
      do {
          let smallorangemanX = String.fromCharCode(104,95,54,57,95,119,101,105,103,104,116,112,0);
          let issubP = String.fromCharCode(105,110,105,116,105,97,116,101,100,95,118,95,54,52,0);
          let overlayf = 4.0;
         greyarrowupm /= Math.max(4, parseFloat(`${parseInt(`${overlayf}`)}`));
         smallorangemanX += `${3 << (Math.min(2, issubP.length))}`;
         issubP += "3";
         overlayf /= Math.max(issubP.length, 5);
         if (2198585.0 == greyarrowupm) {
            break;
         }
      } while ((2198585.0 == greyarrowupm) && (greyarrowupm < 2.14));
      do {
          let whitesmalltickw = 2.0;
         greyarrowupm /= Math.max(parseFloat(`${parseInt(`${greyarrowupm}`) << (Math.min(3, Math.abs(2)))}`), 3);
         whitesmalltickw += parseInt(`${whitesmalltickw}`);
         if (3655880.0 == greyarrowupm) {
            break;
         }
      } while ((1.98 >= (greyarrowupm * 2.21)) && (3655880.0 == greyarrowupm));
         greyarrowupm *= parseFloat(`${parseInt(`${greyarrowupm}`) % (Math.max(parseInt(`${greyarrowupm}`), 5))}`);
      holderm = new Map([[`${footballfields.size}`, parseInt(`${greyarrowupm}`) / (Math.max(3, 5))]]);
   if (4 <= (footballfields.size * 5) || 5 <= (footballfields.size * y_managerk.length)) {
       let libimagepipelineO = 4.0;
       let fullscreenminD = String.fromCharCode(117,110,99,111,100,101,100,95,120,95,56,54,0);
       let listL = 2.0;
       let paginationS = 3.0;
       let handlerl = new Map([[String.fromCharCode(115,121,115,99,116,108,95,104,95,49,53,0),false ], [String.fromCharCode(107,95,56,50,95,115,116,121,108,0),true ], [String.fromCharCode(121,117,118,114,103,98,97,95,102,95,55,52,0),true ]]);
         paginationS /= Math.max(3, parseFloat(`${fullscreenminD.length}`));
       let dangerx = 0.0;
          let streaming4 = new Map([[String.fromCharCode(99,95,53,48,95,103,97,117,103,101,0),629], [String.fromCharCode(117,95,57,55,95,115,116,100,105,110,116,0),630], [String.fromCharCode(102,97,115,116,116,101,115,116,95,114,95,53,56,0),530]]);
          let whistleq = new Map([[String.fromCharCode(113,95,53,95,108,111,116,116,105,101,109,111,100,101,108,0),485], [String.fromCharCode(122,95,55,55,95,98,105,116,101,120,97,99,116,0),519]]);
         dangerx -= parseInt(`${libimagepipelineO}`);
         streaming4 = new Map([[`${whistleq.size}`, whistleq.size >> (Math.min(Math.abs(2), 4))]]);
         listL += 2;
      while ((4 % (Math.max(6, fullscreenminD.length))) > 2) {
         fullscreenminD += `${fullscreenminD.length >> (Math.min(5, Math.abs(parseInt(`${libimagepipelineO}`))))}`;
         break;
      }
      for (let a = 0; a < 2; a++) {
         listL *= parseInt(`${paginationS}`);
      }
      do {
         dangerx += parseInt(`${paginationS}`);
         if (508861.0 == dangerx) {
            break;
         }
      } while ((1.92 >= (dangerx / (Math.max(1.55, 5))) || (dangerx / (Math.max(handlerl.size, 3))) >= 1.55) && (508861.0 == dangerx));
         paginationS *= parseFloat(`${3 / (Math.max(7, parseInt(`${listL}`)))}`);
      for (let m = 0; m < 2; m++) {
         dangerx += handlerl.size;
      }
      for (let x = 0; x < 2; x++) {
          let modey = 0.0;
          let firebasef = 5.0;
          let penaltyshootnogoalx = 5.0;
          let graphicsx = String.fromCharCode(107,112,115,95,118,95,54,54,0);
         libimagepipelineO += (String.fromCharCode(104,0) == graphicsx ? parseInt(`${libimagepipelineO}`) : graphicsx.length);
         modey /= Math.max(1, parseFloat(`${parseInt(`${firebasef}`) ^ parseInt(`${penaltyshootnogoalx}`)}`));
         firebasef *= parseFloat(`${3 & parseInt(`${modey}`)}`);
         penaltyshootnogoalx += parseFloat(`${parseInt(`${modey}`)}`);
      }
       let iconcurrentmatch3 = 5.0;
      for (let b = 0; b < 3; b++) {
          let rankM = String.fromCharCode(104,95,57,52,95,102,97,120,99,111,109,112,114,0);
          let mimoh = [323, 207];
          let history5 = 5.0;
         paginationS /= Math.max(parseFloat(`${parseInt(`${iconcurrentmatch3}`)}`), 1);
         rankM += `${mimoh.length}`;
         mimoh = [3 & parseInt(`${history5}`)];
         history5 += parseFloat(`${rankM.length & parseInt(`${history5}`)}`);
      }
       let defaultplayerimgW = String.fromCharCode(104,102,121,117,95,112,95,51,48,0);
       let filledz = String.fromCharCode(99,104,101,99,107,115,116,114,105,100,101,95,116,95,53,53,0);
      do {
         dangerx *= (filledz == String.fromCharCode(55,0) ? filledz.length : parseInt(`${listL}`));
         if (dangerx == 1946702.0) {
            break;
         }
      } while ((dangerx == 1946702.0) && (Array.from(handlerl.values()).includes(dangerx)));
       let d_imageP = true;
      footballfields[`${anytimeI}`] = 1;
   }
      anytimeI -= 2 | subtexti.length;
      result9 &= shootnogoal5;

    this.mounted = false;
   while ((5 ^ homeP.length) <= 2) {
      sortf -= parseInt(`${sortf}`) - 3;
      break;
   }
      y_managerk.push(parseInt(`${mbjscommonD}`) ^ homeP.length);
      stationf += parseFloat(`${homeP.length}`);
   if (4.33 == (1.40 + sortf) && 2 == (3 + parseInt(`${sortf}`))) {
      sourceZ = "3";
   }
      shootnogoal5 &= y_managerk.length;
      sourceZ += `${middlesoundC.length - parseInt(`${mbjscommonD}`)}`;
   if ((sourceZ.length + y_managerk.length) <= 3) {
      y_managerk = [holderm.size << (Math.min(Math.abs(2), 1))];
   }
      stationf *= parseFloat(`${parseInt(`${sortf}`) << (Math.min(1, Math.abs(result9)))}`);
   do {
      sourceZ += `${parseInt(`${anytimeI}`)}`;
      if (2775466 == sourceZ.length) {
         break;
      }
   } while ((2775466 == sourceZ.length) && (sourceZ.length <= 4));
      result9 &= unreadK.length << (Math.min(Math.abs(3), 1));
   do {
      homeP += `${unreadK.length}`;
      if (String.fromCharCode(97,121,103,0) == homeP) {
         break;
      }
   } while ((homeP.endsWith(`${y_managerk.length}`)) && (String.fromCharCode(97,121,103,0) == homeP));

    this.clearControlTimeout();
      sortf -= subtexti.length;
   while (shootnogoal5 == unreadK.length) {
       let homeplayer4 = new Map([[String.fromCharCode(99,111,100,105,110,103,116,121,112,101,95,100,95,57,55,0),false ], [String.fromCharCode(119,111,114,107,105,110,103,95,48,95,51,49,0),false ]]);
       let stylesN = 5;
       let wifirouter2 = String.fromCharCode(114,95,56,56,95,111,116,111,115,0);
       let positionfieldI = [String.fromCharCode(101,95,57,48,95,115,119,97,112,0), String.fromCharCode(104,101,105,103,104,116,115,95,110,95,56,52,0), String.fromCharCode(99,95,49,56,95,97,112,112,108,105,101,115,0)];
       let anytimea = String.fromCharCode(105,100,99,116,120,95,103,95,50,52,0);
      while (wifirouter2.startsWith(`${anytimea.length}`)) {
          let gpayU = String.fromCharCode(99,111,110,115,116,116,105,109,101,95,115,95,51,52,0);
          let whiteanimationliveK = 4.0;
         wifirouter2 += `${parseInt(`${whiteanimationliveK}`)}`;
         gpayU = `${gpayU.length}`;
         whiteanimationliveK += parseFloat(`${2 % (Math.max(10, gpayU.length))}`);
         break;
      }
      for (let n = 0; n < 2; n++) {
         stylesN /= Math.max(2, wifirouter2.length);
      }
          let largesoundx = [String.fromCharCode(108,101,118,105,110,115,111,110,95,102,95,56,50,0), String.fromCharCode(99,95,51,51,95,97,108,108,111,99,97,116,111,114,0), String.fromCharCode(97,118,102,111,114,109,97,116,95,103,95,53,53,0)];
          let eventsplashf = [String.fromCharCode(115,101,97,114,99,104,97,98,108,101,95,54,95,51,0), String.fromCharCode(111,117,114,95,116,95,51,52,0)];
         positionfieldI = [1 ^ stylesN];
         largesoundx = [3 - largesoundx.length];
         eventsplashf = [1];
      do {
         positionfieldI = [stylesN - 3];
         if (1502888 == positionfieldI.length) {
            break;
         }
      } while ((1 >= positionfieldI.length) && (1502888 == positionfieldI.length));
      for (let z = 0; z < 2; z++) {
         stylesN %= Math.max(positionfieldI.length, 1);
      }
      while (3 <= (stylesN << (Math.min(positionfieldI.length, 1))) && (positionfieldI.length << (Math.min(Math.abs(3), 5))) <= 2) {
         stylesN += 1;
         break;
      }
         wifirouter2 += `${stylesN}`;
         stylesN >>= Math.min(2, Math.abs(2 | positionfieldI.length));
      do {
         wifirouter2 = `${stylesN}`;
         if (wifirouter2.length == 4691028) {
            break;
         }
      } while ((wifirouter2.endsWith(`${positionfieldI.length}`)) && (wifirouter2.length == 4691028));
         stylesN += homeplayer4.size / (Math.max(9, wifirouter2.length));
          let libfabricjnil = 3;
          let minimizen = String.fromCharCode(122,95,55,57,95,97,117,100,105,116,105,110,103,0);
          let iconclosewhitebgW = [743, 624, 243];
         stylesN >>= Math.min(4, Math.abs(libfabricjnil | homeplayer4.size));
         libfabricjnil -= (String.fromCharCode(85,0) == minimizen ? minimizen.length : iconclosewhitebgW.length);
         iconclosewhitebgW.push(iconclosewhitebgW.length);
         stylesN %= Math.max(wifirouter2.length, 2);
       let libreanimatedv = 0.0;
      for (let x = 0; x < 1; x++) {
          let termsn = true;
          let whitebellG = [770, 139, 25];
         homeplayer4 = new Map([[`${positionfieldI.length}`, anytimea.length >> (Math.min(Math.abs(3), 5))]]);
         termsn = whitebellG.length >= 25;
         whitebellG.push((whitebellG.length - (termsn ? 2 : 3)));
      }
      if (wifirouter2.length == anytimea.length) {
         wifirouter2 += "3";
      }
      shootnogoal5 >>= Math.min(2, Math.abs(2 & homeP.length));
      break;
   }
       let backg = String.fromCharCode(111,95,54,95,115,97,110,105,116,105,122,101,0);
       let bridgeU = true;
       let injuryz = String.fromCharCode(99,95,49,48,95,110,111,105,110,100,101,120,0);
      for (let n = 0; n < 1; n++) {
          let weibox = String.fromCharCode(114,101,99,111,103,110,105,122,101,95,117,95,50,55,0);
          let reactV = false;
          let episodesT = new Map([[String.fromCharCode(106,95,56,48,95,112,97,103,101,108,105,115,116,0),false ], [String.fromCharCode(116,101,120,116,95,104,95,49,50,0),false ], [String.fromCharCode(113,95,57,57,95,110,97,118,105,103,97,116,105,111,110,0),false ]]);
         injuryz += `${backg.length & 2}`;
         weibox = `${(episodesT.size ^ (reactV ? 2 : 1))}`;
         reactV = episodesT.size == 22 && !reactV;
      }
         bridgeU = backg.length > 68;
          let expandp = 4.0;
          let modules7 = String.fromCharCode(114,95,54,54,95,98,111,100,105,101,115,0);
         backg += `${backg.length}`;
         expandp += parseFloat(`${parseInt(`${expandp}`)}`);
         modules7 = `${modules7.length}`;
         bridgeU = !injuryz.includes(`${bridgeU}`);
         bridgeU = !bridgeU;
          let feedbacki = String.fromCharCode(114,101,103,117,108,97,116,101,95,114,95,57,57,0);
          let footballfiledlayout8 = [138, 44, 55];
          let matchactiver = 0.0;
         backg += "2";
         feedbacki += `${footballfiledlayout8.length}`;
         footballfiledlayout8 = [(feedbacki == String.fromCharCode(81,0) ? footballfiledlayout8.length : feedbacki.length)];
         matchactiver *= 3 >> (Math.min(5, Math.abs(parseInt(`${matchactiver}`))));
      do {
         injuryz = `${injuryz.length | 3}`;
         if (injuryz == String.fromCharCode(53,95,120,121,118,112,53,120,113,0)) {
            break;
         }
      } while ((bridgeU) && (injuryz == String.fromCharCode(53,95,120,121,118,112,53,120,113,0)));
         bridgeU = injuryz.length >= 47;
         bridgeU = (74 == ((bridgeU ? injuryz.length : 74) * injuryz.length));
      anytimeI += parseInt(`${anytimeI}`) ^ 3;
       let time_t3 = [240, 937, 80];
       let canvasP = true;
      do {
         time_t3.push((time_t3.length >> (Math.min(5, Math.abs((canvasP ? 5 : 4))))));
         if (957906 == time_t3.length) {
            break;
         }
      } while ((957906 == time_t3.length) && ((time_t3.length << (Math.min(Math.abs(3), 1))) > 4 || time_t3.length > 3));
       let coreT = 0.0;
       let crownL = 4.0;
         coreT -= ((canvasP ? 5 : 1) & parseInt(`${crownL}`));
         coreT /= Math.max(4, 1 << (Math.min(Math.abs(parseInt(`${crownL}`)), 3)));
         canvasP = ((time_t3.length * (!canvasP ? 64 : time_t3.length)) < 64);
          let cornershootg = String.fromCharCode(99,108,97,115,115,95,121,95,57,49,0);
          let videovar7 = false;
         crownL += (cornershootg == String.fromCharCode(80,0) ? parseInt(`${coreT}`) : cornershootg.length);
         videovar7 = !videovar7;
      holderm = new Map([[`${y_managerk.length}`, 2 << (Math.min(5, y_managerk.length))]]);
   if ((middlesoundC.length - 4) >= 4) {
      stationf += parseFloat(`${subtexti.length}`);
   }
       let libyogaO = new Map([[String.fromCharCode(104,95,50,56,95,99,117,101,112,111,105,110,116,0),String.fromCharCode(98,95,53,56,95,99,97,105,112,0)], [String.fromCharCode(117,95,55,95,97,117,116,111,109,97,116,105,99,97,108,108,121,0),String.fromCharCode(117,108,112,105,110,102,111,95,99,95,49,48,0)], [String.fromCharCode(108,111,116,116,105,101,109,111,100,101,108,95,105,95,56,56,0),String.fromCharCode(116,111,100,112,95,113,95,56,52,0)]]);
       let containerA = new Map([[String.fromCharCode(111,95,50,56,95,104,105,103,104,108,105,103,104,116,0),893], [String.fromCharCode(112,114,101,115,115,105,110,103,95,97,95,55,55,0),961]]);
       let singaporeB = [660, 135, 335];
         containerA = new Map([[`${containerA.size}`, singaporeB.length]]);
          let previewz = [String.fromCharCode(114,101,113,117,101,115,116,101,114,115,95,54,95,51,53,0), String.fromCharCode(114,97,110,115,102,111,114,109,101,114,95,101,95,54,52,0), String.fromCharCode(100,101,114,101,103,105,115,116,101,114,95,104,95,57,49,0)];
          let calendard = new Map([[String.fromCharCode(102,95,54,50,95,109,118,104,100,0),String.fromCharCode(115,95,53,54,95,115,99,111,112,101,0)], [String.fromCharCode(100,95,51,56,95,105,110,116,101,114,115,112,101,114,115,101,100,0),String.fromCharCode(107,101,121,119,111,114,100,95,99,95,53,48,0)]]);
         libyogaO[`${containerA.size}`] = 1;
         previewz = [calendard.size * previewz.length];
         calendard[`${previewz.length}`] = previewz.length - calendard.size;
       let eyeclosed = String.fromCharCode(117,110,99,114,111,112,112,101,100,95,100,95,57,57,0);
       let application7 = String.fromCharCode(100,101,99,95,114,95,54,52,0);
       let homeO = 3;
       let minij = String.fromCharCode(117,95,53,54,95,99,111,110,110,101,99,116,111,114,0);
       let firebaser = new Map([[String.fromCharCode(121,95,52,49,95,113,100,101,108,116,97,0),String.fromCharCode(116,105,99,107,101,114,95,48,95,50,49,0)], [String.fromCharCode(112,95,53,54,95,114,116,97,100,100,114,115,0),String.fromCharCode(104,95,55,56,95,112,111,115,116,112,111,110,101,0)], [String.fromCharCode(101,110,104,97,110,99,101,114,95,50,95,57,55,0),String.fromCharCode(109,97,100,101,98,121,95,111,95,55,49,0)]]);
          let basketballmatchdetailbgY = new Map([[String.fromCharCode(119,95,54,50,95,116,114,97,110,115,102,101,114,114,97,98,108,101,0),902], [String.fromCharCode(120,95,52,55,95,109,97,103,105,99,121,117,118,0),137], [String.fromCharCode(118,95,54,48,95,117,110,98,111,117,110,100,0),527]]);
          let xvodS = [172, 377, 651];
         homeO <<= Math.min(4, Math.abs(containerA.size << (Math.min(5, Math.abs(homeO)))));
         basketballmatchdetailbgY[`${xvodS.length}`] = xvodS.length;
       let iconsaveimagen = 5;
       let webvieww = 2;
      if (homeO > 3) {
          let awayteamfieldC = 2.0;
          let g_playeru = 3.0;
          let hooksK = String.fromCharCode(101,95,53,50,95,108,105,98,99,111,100,101,99,0);
         firebaser[eyeclosed] = 2;
         awayteamfieldC /= Math.max(4, 1 + hooksK.length);
         g_playeru += parseInt(`${awayteamfieldC}`);
         hooksK += `${parseInt(`${awayteamfieldC}`)}`;
      }
      result9 <<= Math.min(Math.abs(parseInt(`${anytimeI}`)), 3);
      anytimeI += 1 - sourceZ.length;
      sourceZ += "3";
   do {
       let sport5 = new Map([[String.fromCharCode(99,95,49,54,95,115,116,114,105,112,112,101,100,0),474], [String.fromCharCode(104,95,51,49,95,112,104,97,115,101,0),820], [String.fromCharCode(98,95,55,55,95,109,105,120,105,110,0),257]]);
       let twitter9 = String.fromCharCode(112,101,97,107,95,117,95,56,51,0);
       let penaltyshootnogoalC = 5;
      for (let i = 0; i < 1; i++) {
          let rankp = 0.0;
          let register_vxT = [String.fromCharCode(112,97,115,116,101,108,95,111,95,55,57,0), String.fromCharCode(105,115,115,117,101,114,95,107,95,56,55,0)];
         twitter9 = `${twitter9.length}`;
         rankp -= parseFloat(`${parseInt(`${rankp}`)}`);
         register_vxT.push(parseInt(`${rankp}`));
      }
         sport5[`${twitter9}`] = 1;
         twitter9 = `${sport5.size - 2}`;
         twitter9 = `${2 << (Math.min(5, Math.abs(penaltyshootnogoalC)))}`;
         penaltyshootnogoalC &= twitter9.length ^ 2;
          let shootyesgoald = 1;
         sport5 = new Map([[twitter9, 1 & penaltyshootnogoalC]]);
         shootyesgoald &= shootyesgoald - shootyesgoald;
         penaltyshootnogoalC |= sport5.size - 3;
      if (3 > (sport5.size + twitter9.length) && (twitter9.length + sport5.size) > 3) {
          let leakcheckerL = false;
          let matchdetailbgh = String.fromCharCode(99,102,101,110,99,95,49,95,57,48,0);
          let datab = String.fromCharCode(114,95,56,55,95,109,97,107,101,0);
          let telemetryk = String.fromCharCode(115,97,118,105,110,103,95,112,95,54,51,0);
         twitter9 = `${telemetryk.length}`;
         leakcheckerL = matchdetailbgh.startsWith(`${leakcheckerL}`);
         matchdetailbgh = `${1 | matchdetailbgh.length}`;
         datab += `${(String.fromCharCode(117,0) == matchdetailbgh ? (leakcheckerL ? 1 : 3) : matchdetailbgh.length)}`;
         telemetryk = `${((leakcheckerL ? 2 : 4) % (Math.max(matchdetailbgh.length, 10)))}`;
      }
          let iconeyeu = 2;
         penaltyshootnogoalC ^= 3;
         iconeyeu &= 1 % (Math.max(6, iconeyeu));
      anytimeI += subtexti.length | sport5.size;
      if (4845373.0 == anytimeI) {
         break;
      }
   } while ((1.68 <= anytimeI) && (4845373.0 == anytimeI));
   for (let t = 0; t < 3; t++) {
       let basketballtrophyc = String.fromCharCode(107,95,53,52,95,112,108,97,110,0);
       let rewardY = 1;
       let area_ = 2;
       let react4 = 1.0;
      do {
         basketballtrophyc = `${(String.fromCharCode(117,0) == basketballtrophyc ? basketballtrophyc.length : area_)}`;
         if (basketballtrophyc == String.fromCharCode(55,52,49,99,105,99,118,0)) {
            break;
         }
      } while ((basketballtrophyc == String.fromCharCode(55,52,49,99,105,99,118,0)) && (react4 >= basketballtrophyc.length));
         react4 /= Math.max(2, 3);
      do {
         react4 += 1 + area_;
         if (1760691.0 == react4) {
            break;
         }
      } while ((1.82 > (rewardY - react4)) && (1760691.0 == react4));
         area_ %= Math.max(3, area_ << (Math.min(2, Math.abs(2))));
      for (let y = 0; y < 3; y++) {
         react4 *= rewardY + basketballtrophyc.length;
      }
          let taiwano = String.fromCharCode(118,111,105,99,101,95,52,95,52,53,0);
         react4 /= Math.max(4, parseInt(`${react4}`));
         taiwano = `${taiwano.length}`;
      if (4 <= (5 + rewardY)) {
         rewardY >>= Math.min(Math.abs(rewardY), 1);
      }
      for (let e = 0; e < 2; e++) {
         basketballtrophyc += `${(String.fromCharCode(105,0) == basketballtrophyc ? basketballtrophyc.length : rewardY)}`;
      }
      if (4.95 < (react4 * 5.52) && 2 < (2 / (Math.max(4, area_)))) {
          let resultB = new Map([[String.fromCharCode(115,111,108,105,100,105,116,121,95,117,95,52,57,0),String.fromCharCode(111,95,52,50,95,117,105,100,115,0)], [String.fromCharCode(97,110,103,108,101,100,95,114,95,57,54,0),String.fromCharCode(117,95,53,51,95,102,109,97,99,0)]]);
          let redgoalQ = 1.0;
         react4 -= 2;
         resultB[`${redgoalQ}`] = 1;
         redgoalQ /= Math.max(3, resultB.size);
      }
      while ((basketballtrophyc.length | area_) < 5 && (area_ | basketballtrophyc.length) < 5) {
         area_ *= parseInt(`${react4}`) % (Math.max(6, area_));
         break;
      }
         rewardY <<= Math.min(Math.abs(2 / (Math.max(10, basketballtrophyc.length))), 2);
      do {
         area_ ^= parseInt(`${react4}`);
         if (3115708 == area_) {
            break;
         }
      } while (((5 + rewardY) > 4) && (3115708 == area_));
      stationf -= parseFloat(`${2 + subtexti.length}`);
   }
   do {
      sortf *= shootnogoal5;
      if (798968.0 == sortf) {
         break;
      }
   } while ((798968.0 == sortf) && (footballfields[`${sortf}`] != null));

  }

   
  initSeekPanResponder() {
       let mbnativev = String.fromCharCode(112,111,105,115,111,110,95,101,95,56,57,0);
    let skipr = 3;
    let vipsportv = String.fromCharCode(122,95,49,56,95,97,101,115,110,105,0);
    let dropdownc = 3.0;
    let livenodatabgimg5 = String.fromCharCode(114,101,100,117,99,116,105,111,110,115,95,49,95,56,54,0);
    let unfillu = 5;
    let libreactnativejnib = String.fromCharCode(103,95,51,49,95,98,97,114,0);
    let final_bF = false;
    let modityF = String.fromCharCode(98,95,54,54,95,99,104,97,110,103,101,114,0);
    let penaltymatchiconb = 3;
    let fcdaebecbcbafcdfceaaeccfeacdbQ = new Map([[String.fromCharCode(106,95,54,95,112,105,120,102,109,116,0),String.fromCharCode(100,105,114,97,99,100,115,112,95,97,95,50,55,0)], [String.fromCharCode(97,95,52,48,95,109,112,101,103,118,105,100,101,111,0),String.fromCharCode(100,95,53,95,114,101,100,114,97,119,0)], [String.fromCharCode(99,111,110,118,101,114,116,105,98,108,101,95,106,95,53,54,0),String.fromCharCode(97,95,50,56,95,109,111,100,105,102,105,101,100,0)]]);
    let typingF = 4.0;
   do {
      unfillu &= ((final_bF ? 4 : 5) % (Math.max(2, 5)));
      if (unfillu == 448168) {
         break;
      }
   } while ((unfillu == 448168) && (2 > (5 >> (Math.min(1, Math.abs(unfillu)))) && !final_bF));

    this.player.seekPanResponder = PanResponder.create({
      
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,

       
      onPanResponderGrant: (evt, gestureState) => {
        let state = this.state;
       let zhubo9 = 1.0;
         zhubo9 *= parseInt(`${zhubo9}`) | 1;
         zhubo9 += 1 << (Math.min(Math.abs(parseInt(`${zhubo9}`)), 1));
      for (let h = 0; h < 3; h++) {
          let fillL = 5;
          let combineX = 2;
          let aboutX = 1.0;
         zhubo9 += 3 % (Math.max(8, combineX));
         fillL /= Math.max(5, 3);
         combineX *= 3 | fillL;
         aboutX /= Math.max(2, parseInt(`${aboutX}`));
      }
      dropdownc /= Math.max(skipr / (Math.max(unfillu, 4)), 3);

        this.clearControlTimeout();
      skipr -= parseInt(`${dropdownc}`);

        const position = evt.nativeEvent.locationX;
   do {
       let inactivev = new Map([[String.fromCharCode(97,114,99,95,110,95,57,50,0),305], [String.fromCharCode(118,95,55,57,95,98,114,117,115,104,0),378]]);
       let mathF = String.fromCharCode(114,101,99,101,105,118,101,100,95,115,95,50,56,0);
      while (mathF.length < inactivev.size) {
         mathF = `${mathF.length}`;
         break;
      }
         inactivev = new Map([[`${inactivev.size}`, 2]]);
      do {
          let greenarrowupc = String.fromCharCode(115,108,111,119,100,111,119,110,95,108,95,52,56,0);
          let next1 = 5.0;
          let listB = String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,95,108,95,57,55,0);
          let expiredW = 4.0;
         mathF = `${inactivev.size * 3}`;
         greenarrowupc = `${parseInt(`${expiredW}`) ^ parseInt(`${next1}`)}`;
         next1 *= parseFloat(`${parseInt(`${expiredW}`) ^ listB.length}`);
         listB = "1";
         if (mathF == String.fromCharCode(95,105,113,98,98,0)) {
            break;
         }
      } while ((5 >= (inactivev.size % 1) || 1 >= (inactivev.size % (Math.max(7, mathF.length)))) && (mathF == String.fromCharCode(95,105,113,98,98,0)));
      if (5 < (mathF.length & inactivev.size)) {
          let iconnotificationnewz = true;
         mathF += `${inactivev.size / (Math.max(mathF.length, 7))}`;
         iconnotificationnewz = (!iconnotificationnewz ? !iconnotificationnewz : iconnotificationnewz);
      }
      do {
         inactivev[mathF] = inactivev.size;
         if (3302413 == inactivev.size) {
            break;
         }
      } while ((5 < inactivev.size) && (3302413 == inactivev.size));
      while ((mathF.length ^ inactivev.size) >= 1) {
         mathF += `${inactivev.size}`;
         break;
      }
      vipsportv += `${3 >> (Math.min(4, mathF.length))}`;
      if (String.fromCharCode(107,99,57,54,106,120,57,113,112,111,0) == vipsportv) {
         break;
      }
   } while ((String.fromCharCode(107,99,57,54,106,120,57,113,112,111,0) == vipsportv) && (libreactnativejnib != String.fromCharCode(52,0) && vipsportv.length >= 3));

        this.setSeekerPosition(position);
   if (5 > (3 + skipr)) {
      skipr *= (String.fromCharCode(105,0) == libreactnativejnib ? skipr : libreactnativejnib.length);
   }

        state.seeking = true;
      skipr |= livenodatabgimg5.length;

        state.originallyPaused = state.paused;
   if (mbnativev.length == 4) {
      vipsportv = `${(vipsportv == String.fromCharCode(77,0) ? skipr : vipsportv.length)}`;
   }

        state.scrubbing = false;
       let largesoundO = [512, 363, 213];
       let loadingi = 3.0;
         loadingi /= Math.max(parseFloat(`${largesoundO.length & 1}`), 4);
         loadingi += parseFloat(`${parseInt(`${loadingi}`)}`);
          let iconwatchc = String.fromCharCode(122,95,57,50,95,109,105,110,105,109,105,122,101,100,0);
         loadingi -= parseFloat(`${2 << (Math.min(1, largesoundO.length))}`);
         iconwatchc += `${iconwatchc.length}`;
      if (largesoundO.length == 1) {
          let iconnotificationnewO = 4;
         loadingi /= Math.max(1, parseFloat(`${iconnotificationnewO | 2}`));
      }
      do {
         largesoundO = [3];
         if (largesoundO.length == 1495956) {
            break;
         }
      } while (((parseInt(`${loadingi}`) * largesoundO.length) >= 5) && (largesoundO.length == 1495956));
      while ((4.25 + loadingi) <= 1.48 && (loadingi + 4.25) <= 1.19) {
         loadingi += parseFloat(`${largesoundO.length}`);
         break;
      }
      skipr *= libreactnativejnib.length << (Math.min(2, Math.abs(skipr)));

        if (this.player.scrubbingTimeStep > 0) {

   while ((1 % (Math.max(7, livenodatabgimg5.length))) >= 1) {
      livenodatabgimg5 += `${skipr}`;
      break;
   }
          state.paused = true;
      skipr += vipsportv.length;

        }
        this.setState(state);
       let window_8Q = 2.0;
       let notificationD = 5.0;
       let y_centerP = new Map([[String.fromCharCode(114,97,105,110,95,98,95,50,48,0),734], [String.fromCharCode(116,95,55,51,95,97,99,99,117,114,97,99,121,0),289], [String.fromCharCode(122,95,57,56,95,115,116,114,101,101,116,0),990]]);
       let leaguedetailsbgr = 4;
       let wifirouterI = 1;
         y_centerP = new Map([[`${y_centerP.size}`, 1 ^ y_centerP.size]]);
         y_centerP[`${leaguedetailsbgr}`] = wifirouterI / 1;
       let statisticsT = 0.0;
       let bellI = 0.0;
      for (let j = 0; j < 2; j++) {
         leaguedetailsbgr |= parseInt(`${statisticsT}`);
      }
          let gifgoal9 = String.fromCharCode(114,116,114,105,109,95,106,95,57,53,0);
         notificationD += (parseFloat(`${gifgoal9 == String.fromCharCode(74,0) ? parseInt(`${window_8Q}`) : gifgoal9.length}`));
      for (let e = 0; e < 1; e++) {
         leaguedetailsbgr >>= Math.min(2, Math.abs(3 >> (Math.min(5, Math.abs(parseInt(`${window_8Q}`))))));
      }
          let viewer4 = String.fromCharCode(121,95,53,49,95,115,116,114,102,0);
          let bggradientH = 0.0;
          let statistics8 = new Map([[String.fromCharCode(97,99,99,101,108,101,114,97,116,101,100,95,114,95,51,57,0),398], [String.fromCharCode(118,105,115,105,98,105,116,121,95,50,95,50,52,0),811], [String.fromCharCode(98,95,51,50,95,108,105,103,104,116,0),640]]);
         wifirouterI -= parseInt(`${bggradientH}`);
         viewer4 = `${(String.fromCharCode(109,0) == viewer4 ? statistics8.size : viewer4.length)}`;
         statistics8 = new Map([[`${statistics8.size}`, (viewer4 == String.fromCharCode(74,0) ? statistics8.size : viewer4.length)]]);
         leaguedetailsbgr %= Math.max(1 * y_centerP.size, 3);
      unfillu |= libreactnativejnib.length;

      },

       
      onPanResponderMove: (evt, gestureState) => {
        const position = this.state.seekerOffset + gestureState.dx;
      unfillu -= unfillu;

        this.setSeekerPosition(position);
       let steps = [480, 65];
         steps.push(steps.length);
      while (steps.length <= 4) {
          let telemetryO = String.fromCharCode(100,112,99,109,95,98,95,56,52,0);
         steps.push(steps.length / 1);
         telemetryO = `${telemetryO.length | telemetryO.length}`;
         break;
      }
          let dplusC = 1.0;
          let product8 = String.fromCharCode(99,111,110,99,101,97,108,101,100,95,107,95,49,54,0);
          let whitetickd = String.fromCharCode(110,95,53,56,95,115,112,97,99,101,114,0);
         steps = [1];
         dplusC -= 2;
         product8 = `${whitetickd.length & product8.length}`;
         whitetickd = `${product8.length | whitetickd.length}`;
      final_bF = String.fromCharCode(99,0) == mbnativev || 53.87 >= dropdownc;

        let state = this.state;
   do {
      livenodatabgimg5 = `${(String.fromCharCode(122,0) == vipsportv ? livenodatabgimg5.length : vipsportv.length)}`;
      if (livenodatabgimg5 == String.fromCharCode(99,102,98,97,103,97,113,119,56,111,0)) {
         break;
      }
   } while ((1 >= livenodatabgimg5.length) && (livenodatabgimg5 == String.fromCharCode(99,102,98,97,103,97,113,119,56,111,0)));


        if (
          this.player.scrubbingTimeStep > 0 &&
          !state.loading &&
          !state.scrubbing
        ) {

   while (final_bF) {
      final_bF = 6 < livenodatabgimg5.length || String.fromCharCode(106,0) == libreactnativejnib;
      break;
   }
          const time = this.calculateTimeFromSeekerPosition();
   if (mbnativev != livenodatabgimg5) {
      livenodatabgimg5 = `${skipr | libreactnativejnib.length}`;
   }

          const timeDifference = Math.abs(state.currentTime - time) * 1000;
   do {
      vipsportv = `${vipsportv.length}`;
      if (196374 == vipsportv.length) {
         break;
      }
   } while ((modityF == vipsportv) && (196374 == vipsportv.length));


          if (
            time < state.duration &&
            timeDifference >= this.player.scrubbingTimeStep
          ) {

   do {
      dropdownc -= skipr;
      if (dropdownc == 4505499.0) {
         break;
      }
   } while ((3 == mbnativev.length) && (dropdownc == 4505499.0));
            state.scrubbing = true;
   do {
      vipsportv += `${livenodatabgimg5.length}`;
      if (vipsportv == String.fromCharCode(53,104,121,51,114,114,119,117,117,0)) {
         break;
      }
   } while ((4 <= (3 << (Math.min(1, vipsportv.length))) || 3.90 <= (dropdownc * vipsportv.length)) && (vipsportv == String.fromCharCode(53,104,121,51,114,114,119,117,117,0)));


            this.setState(state);
   for (let v = 0; v < 1; v++) {
       let iconpointscorel = 0;
       let catagory_ = new Map([[String.fromCharCode(100,101,102,108,97,116,101,95,107,95,49,56,0),259], [String.fromCharCode(97,95,51,57,95,99,111,117,108,100,0),930]]);
       let expand2 = new Map([[String.fromCharCode(101,95,54,50,95,116,105,110,105,116,0),983], [String.fromCharCode(100,114,97,103,95,113,95,52,51,0),244], [String.fromCharCode(97,95,50,56,95,104,111,116,0),756]]);
       let middlebrightnessx = 1;
         expand2 = new Map([[`${catagory_.size}`, catagory_.size >> (Math.min(Math.abs(2), 2))]]);
      for (let i = 0; i < 2; i++) {
         catagory_[`${iconpointscorel}`] = 3 - iconpointscorel;
      }
          let time_k0b = 2;
          let iconarrowrighth = String.fromCharCode(120,102,111,114,109,101,100,95,110,95,49,55,0);
          let mbnativeadvancedq = 2.0;
         catagory_[`${middlebrightnessx}`] = middlebrightnessx & 3;
         time_k0b -= (String.fromCharCode(48,0) == iconarrowrighth ? iconarrowrighth.length : time_k0b);
         mbnativeadvancedq /= Math.max(4, parseFloat(`${time_k0b}`));
      for (let f = 0; f < 2; f++) {
          let stringz = 1.0;
          let referrerb = new Map([[String.fromCharCode(112,111,97,95,106,95,54,52,0),244], [String.fromCharCode(116,95,55,51,95,97,98,111,114,116,97,98,108,101,0),282]]);
         expand2[`${middlebrightnessx}`] = middlebrightnessx;
         stringz -= parseFloat(`${2}`);
         referrerb = new Map([[`${referrerb.size}`, referrerb.size % (Math.max(2, 3))]]);
      }
      do {
         catagory_[`${expand2.size}`] = catagory_.size ^ 1;
         if (catagory_.size == 3347654) {
            break;
         }
      } while ((Array.from(catagory_.keys()).includes(`${iconpointscorel}`)) && (catagory_.size == 3347654));
       let with_nyE = true;
      do {
          let countryQ = String.fromCharCode(115,95,54,56,95,105,110,116,101,114,115,112,101,114,115,101,0);
          let gmailB = [670, 292, 243];
          let theme6 = String.fromCharCode(100,101,99,111,114,114,95,102,95,52,50,0);
          let eyecloseA = String.fromCharCode(117,118,104,111,114,105,122,111,110,116,97,108,95,54,95,55,49,0);
         expand2 = new Map([[eyecloseA, middlebrightnessx]]);
         countryQ = "2";
         gmailB.push(gmailB.length);
         theme6 += `${theme6.length}`;
         eyecloseA += `${gmailB.length << (Math.min(theme6.length, 4))}`;
         if (2008245 == expand2.size) {
            break;
         }
      } while ((expand2.size > middlebrightnessx) && (2008245 == expand2.size));
      if ((iconpointscorel ^ expand2.size) >= 5) {
          let inouttargetyellow8 = false;
          let usernameG = String.fromCharCode(114,95,53,48,95,115,111,100,105,115,99,111,110,110,101,99,116,0);
          let mounting8 = 1.0;
         iconpointscorel /= Math.max(parseInt(`${mounting8}`) & usernameG.length, 5);
         inouttargetyellow8 = !inouttargetyellow8;
         usernameG = "1";
      }
      do {
          let calendarD = String.fromCharCode(114,101,110,100,105,116,105,111,110,95,100,95,54,56,0);
         iconpointscorel >>= Math.min(calendarD.length, 5);
         if (1884422 == iconpointscorel) {
            break;
         }
      } while ((1884422 == iconpointscorel) && ((iconpointscorel - 2) == 5 || 4 == (iconpointscorel - 2)));
      do {
         with_nyE = (((!with_nyE ? catagory_.size : 28) + catagory_.size) > 71);
         if (with_nyE ? !with_nyE : with_nyE) {
            break;
         }
      } while ((with_nyE ? !with_nyE : with_nyE) && ((iconpointscorel & 3) <= 2));
      do {
          let turnY = 4.0;
          let sportsh = String.fromCharCode(113,115,116,101,112,95,105,95,50,49,0);
          let filedi = 4.0;
          let defaultfootballbgJ = 1.0;
          let matchactiveG = 3.0;
         expand2 = new Map([[`${with_nyE}`, middlebrightnessx]]);
         turnY /= Math.max(parseFloat(`${parseInt(`${turnY}`) / (Math.max(1, 10))}`), 5);
         sportsh = `${sportsh.length}`;
         filedi -= 1 | sportsh.length;
         defaultfootballbgJ /= Math.max(4, parseInt(`${filedi}`));
         matchactiveG -= parseInt(`${matchactiveG}`) - parseInt(`${filedi}`);
         if (2631100 == expand2.size) {
            break;
         }
      } while (((expand2.size | 2) == 4) && (2631100 == expand2.size));
       let frame_eB = String.fromCharCode(109,95,54,55,95,100,101,99,111,109,112,114,101,115,115,111,114,0);
      mbnativev += "3";
   }

            setTimeout(() => {

      unfillu -= (mbnativev == String.fromCharCode(81,0) ? mbnativev.length : modityF.length);
              this.player.ref.seek(time, this.player.scrubbingTimeStep);
   if (!libreactnativejnib.endsWith(`${final_bF}`)) {
      final_bF = (dropdownc / (Math.max(livenodatabgimg5.length, 9))) > 85.50;
   }

            }, 1);
   for (let w = 0; w < 2; w++) {
      modityF = `${mbnativev.length / 2}`;
   }

          }
        }
      },

       
      onPanResponderRelease: (evt, gestureState) => {
        const time = this.calculateTimeFromSeekerPosition();
   if (!modityF.endsWith(`${unfillu}`)) {
      modityF = `${parseInt(`${dropdownc}`)}`;
   }

        let state = this.state;
   while (4.75 < (penaltymatchiconb / (Math.max(dropdownc, 6))) || (dropdownc / 4.75) < 3.60) {
      dropdownc /= Math.max(1, 3);
      break;
   }

        if (time >= state.duration && !state.loading) {

   for (let y = 0; y < 3; y++) {
      vipsportv = `${vipsportv.length}`;
   }
          state.paused = true;
      libreactnativejnib += "3";

          this.events.onEnd();
        } else if (state.scrubbing) {

   if (5.23 <= dropdownc) {
      modityF = `${1 & unfillu}`;
   }
          state.seeking = false;
        } else {

   for (let t = 0; t < 3; t++) {
      livenodatabgimg5 = `${penaltymatchiconb << (Math.min(libreactnativejnib.length, 2))}`;
   }
          this.seekTo(time);
   for (let w = 0; w < 1; w++) {
      modityF = `${livenodatabgimg5.length}`;
   }

          this.setControlTimeout();
       let iconmegaphonex = [334, 950];
       let libavcodecO = 0.0;
          let icondefaultthumbnailw = [431, 228];
          let suggestionZ = String.fromCharCode(115,95,55,95,108,117,116,100,0);
         iconmegaphonex.push(parseInt(`${libavcodecO}`));
         icondefaultthumbnailw = [icondefaultthumbnailw.length - 1];
         suggestionZ = `${suggestionZ.length}`;
      if (4.38 <= (libavcodecO * parseFloat(`${iconmegaphonex.length}`)) && (4 * iconmegaphonex.length) <= 3) {
         libavcodecO += parseFloat(`${parseInt(`${libavcodecO}`)}`);
      }
      do {
         libavcodecO *= parseFloat(`${parseInt(`${libavcodecO}`) + iconmegaphonex.length}`);
         if (libavcodecO == 3273633.0) {
            break;
         }
      } while ((3 < (5 ^ iconmegaphonex.length)) && (libavcodecO == 3273633.0));
      for (let l = 0; l < 2; l++) {
         iconmegaphonex = [1];
      }
         iconmegaphonex = [iconmegaphonex.length];
      while (1 == iconmegaphonex.length) {
         iconmegaphonex = [parseInt(`${libavcodecO}`)];
         break;
      }
      mbnativev = `${iconmegaphonex.length}`;

          state.paused = state.originallyPaused;
   if (3.5 == (livenodatabgimg5.length / (Math.max(8, dropdownc))) || 3 == (parseInt(`${dropdownc}`) / 3)) {
      livenodatabgimg5 += `${mbnativev.length}`;
   }

          state.seeking = false;
   if (mbnativev.startsWith(`${libreactnativejnib.length}`)) {
      libreactnativejnib += `${((final_bF ? 1 : 1) & modityF.length)}`;
   }

        }
        this.setState(state);
   while (5 < penaltymatchiconb) {
       let optionsw = new Map([[String.fromCharCode(119,95,51,50,95,114,101,115,116,111,114,97,116,105,111,110,0),972], [String.fromCharCode(116,111,111,108,99,104,97,105,110,95,100,95,52,55,0),955], [String.fromCharCode(103,95,53,54,95,97,100,100,109,111,100,0),611]]);
       let static_uN = true;
       let matchactivec = String.fromCharCode(101,95,49,48,95,111,108,100,0);
       let rulesb = 3.0;
       let datao = false;
      do {
         static_uN = matchactivec.startsWith(`${rulesb}`);
         if (static_uN ? !static_uN : static_uN) {
            break;
         }
      } while ((static_uN ? !static_uN : static_uN) && (datao));
       let videovarK = String.fromCharCode(117,110,98,108,111,99,107,95,101,95,54,54,0);
         optionsw = new Map([[`${optionsw.size}`, (String.fromCharCode(90,0) == matchactivec ? matchactivec.length : optionsw.size)]]);
      while (1 <= (3 / (Math.max(5, optionsw.size))) && optionsw.size <= 3) {
         static_uN = (matchactivec.length + videovarK.length) >= 18;
         break;
      }
      do {
         static_uN = optionsw.size == 32;
         if (static_uN ? !static_uN : static_uN) {
            break;
         }
      } while ((static_uN && 2 <= matchactivec.length) && (static_uN ? !static_uN : static_uN));
         optionsw = new Map([[`${rulesb}`, ((datao ? 5 : 4) << (Math.min(Math.abs(parseInt(`${rulesb}`)), 4)))]]);
         rulesb /= Math.max(2 / (Math.max(10, matchactivec.length)), 4);
      do {
         static_uN = optionsw.size >= 78;
         if (static_uN ? !static_uN : static_uN) {
            break;
         }
      } while ((static_uN ? !static_uN : static_uN) && (!static_uN || videovarK.length <= 4));
         datao = datao || 19.14 < rulesb;
         rulesb *= optionsw.size;
         videovarK = `${((datao ? 1 : 2) * parseInt(`${rulesb}`))}`;
       let tickS = String.fromCharCode(103,114,97,100,105,101,110,116,95,105,95,54,48,0);
          let gifgoalbgh = 1.0;
          let awayplayeri = 2;
         videovarK += `${videovarK.length}`;
         gifgoalbgh /= Math.max(parseFloat(`${parseInt(`${gifgoalbgh}`) + 3}`), 5);
         awayplayeri ^= awayplayeri;
          let homet = 0;
          let arrowrightwithtailp = String.fromCharCode(104,95,53,57,95,109,121,114,110,100,0);
         rulesb += (arrowrightwithtailp == String.fromCharCode(103,0) ? arrowrightwithtailp.length : (datao ? 3 : 1));
         homet >>= Math.min(2, Math.abs(homet));
          let videovarp = 0.0;
          let agreementH = String.fromCharCode(113,95,50,55,95,108,111,103,109,111,110,111,0);
          let subbasketballplayer2 = new Map([[String.fromCharCode(102,95,50,51,95,117,110,114,111,117,110,100,101,100,0),667], [String.fromCharCode(102,108,97,116,116,101,110,101,100,95,55,95,49,48,48,0),64], [String.fromCharCode(115,116,114,102,95,55,95,49,53,0),500]]);
         videovarK += `${((datao ? 5 : 2) - parseInt(`${rulesb}`))}`;
         videovarp /= Math.max(2, parseFloat(`${parseInt(`${videovarp}`) - 3}`));
         agreementH = "2";
         subbasketballplayer2[`${videovarp}`] = parseInt(`${videovarp}`) * subbasketballplayer2.size;
      penaltymatchiconb -= modityF.length;
      break;
   }

      },
    });
      libreactnativejnib += `${(String.fromCharCode(74,0) == libreactnativejnib ? libreactnativejnib.length : skipr)}`;

  }

   
  initVolumePanResponder() {
       let benefitV = String.fromCharCode(118,95,53,56,95,97,110,115,119,101,114,0);
    let interstitial8 = 2;
    let hiadI = 3;
    let basketballdetailsbgA = String.fromCharCode(97,114,102,113,95,106,95,49,51,0);
    let default_0lM = String.fromCharCode(106,95,53,54,95,100,107,101,121,0);
    let constantsT = 4;
    let iconbellG = [413, 93, 780];
    let pointE = 1.0;
    let questiconF = 5.0;
    let flyerj = String.fromCharCode(114,97,116,101,115,95,110,95,49,50,0);
   for (let y = 0; y < 2; y++) {
      interstitial8 -= hiadI % 3;
   }

    this.player.volumePanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.clearControlTimeout();
       let appsW = String.fromCharCode(109,95,53,54,95,115,111,99,107,0);
       let halfI = String.fromCharCode(99,97,99,104,101,115,95,51,95,49,53,0);
       let libreactperfloggerjnih = [489, 822, 879];
       let condensedj = new Map([[String.fromCharCode(99,101,110,99,95,99,95,50,54,0),874], [String.fromCharCode(114,117,110,115,95,117,95,51,50,0),828]]);
       let update_io = new Map([[String.fromCharCode(104,95,55,52,95,109,101,109,98,101,114,0),606], [String.fromCharCode(100,112,110,97,109,101,95,50,95,49,50,0),64], [String.fromCharCode(112,95,56,54,95,110,111,97,108,108,111,99,0),566]]);
         update_io[appsW] = appsW.length;
      while (3 == (update_io.size % (Math.max(appsW.length, 1))) || (appsW.length % 3) == 1) {
         update_io[halfI] = (halfI == String.fromCharCode(109,0) ? update_io.size : halfI.length);
         break;
      }
         update_io[halfI] = libreactperfloggerjnih.length + halfI.length;
      do {
          let gifgoal2 = new Map([[String.fromCharCode(108,95,52,52,95,109,97,107,101,102,105,108,101,0),627], [String.fromCharCode(115,117,98,115,101,116,95,122,95,50,55,0),600], [String.fromCharCode(113,95,53,48,95,102,105,108,101,115,0),224]]);
          let bdxadsdkF = String.fromCharCode(121,95,53,55,95,104,97,110,103,117,112,0);
          let statisticsactivek = String.fromCharCode(107,95,54,51,95,100,101,99,111,100,101,0);
          let showlessZ = String.fromCharCode(105,95,55,56,95,114,116,115,112,0);
          let airbnbstarj = 2.0;
         update_io = new Map([[`${gifgoal2.size}`, libreactperfloggerjnih.length / 3]]);
         gifgoal2 = new Map([[bdxadsdkF, (showlessZ == String.fromCharCode(82,0) ? showlessZ.length : bdxadsdkF.length)]]);
         statisticsactivek = "1";
         airbnbstarj += parseFloat(`${showlessZ.length ^ 3}`);
         if (3575069 == update_io.size) {
            break;
         }
      } while ((3575069 == update_io.size) && (5 <= libreactperfloggerjnih.length));
         condensedj[`${libreactperfloggerjnih.length}`] = condensedj.size | 2;
          let rewindh = 0.0;
         appsW += "1";
         rewindh += parseFloat(`${parseInt(`${rewindh}`)}`);
         halfI = `${appsW.length / (Math.max(3, 6))}`;
          let renewh = 1;
          let iconcalendar9 = 0.0;
         update_io = new Map([[appsW, renewh | appsW.length]]);
         renewh -= parseInt(`${iconcalendar9}`) - parseInt(`${iconcalendar9}`);
      benefitV += `${1 % (Math.max(8, flyerj.length))}`;

      },

       
      onPanResponderMove: (evt, gestureState) => {
        let state = this.state;
   for (let e = 0; e < 3; e++) {
      questiconF /= Math.max(5, parseFloat(`${3}`));
   }

        const position = this.state.volumeOffset + gestureState.dx;
   do {
       let themeb = String.fromCharCode(114,95,49,55,95,108,105,98,118,101,114,115,105,111,110,0);
         themeb = `${(themeb == String.fromCharCode(55,0) ? themeb.length : themeb.length)}`;
      do {
         themeb = `${(String.fromCharCode(65,0) == themeb ? themeb.length : themeb.length)}`;
         if (String.fromCharCode(56,116,118,0) == themeb) {
            break;
         }
      } while ((themeb == String.fromCharCode(118,0) || themeb == String.fromCharCode(50,0)) && (String.fromCharCode(56,116,118,0) == themeb));
       let rocketm = 3;
       let iconsaveimageg = 5;
      pointE += iconbellG.length - 1;
      if (2076849.0 == pointE) {
         break;
      }
   } while (((1.97 * pointE) == 2.80 && (constantsT * parseInt(`${pointE}`)) == 1) && (2076849.0 == pointE));


        this.setVolumePosition(position);
      interstitial8 ^= parseInt(`${questiconF}`);

        state.volume = this.calculateVolumeFromVolumePosition();
      questiconF *= parseFloat(`${flyerj.length + 2}`);


        if (state.volume <= 0) {

       let policyP = String.fromCharCode(110,95,50,52,95,115,116,121,108,101,115,0);
       let predictionbuttono = [623, 715];
       let anythinkP = 4.0;
          let statisticsj = String.fromCharCode(109,95,53,57,95,111,110,101,115,99,97,108,101,0);
          let loginN = String.fromCharCode(99,95,52,51,95,118,111,116,101,115,0);
         predictionbuttono = [1];
         statisticsj = `${(String.fromCharCode(119,0) == loginN ? statisticsj.length : loginN.length)}`;
          let downloadb = 2.0;
         anythinkP -= parseInt(`${downloadb}`);
         anythinkP /= Math.max(policyP.length + 2, 2);
      for (let g = 0; g < 2; g++) {
          let routerR = 1.0;
         anythinkP /= Math.max(1, predictionbuttono.length);
         routerR *= parseFloat(`${3}`);
      }
      for (let r = 0; r < 1; r++) {
         anythinkP *= 2;
      }
          let mounting2 = 2.0;
          let trashi = new Map([[String.fromCharCode(99,95,52,95,103,101,116,112,101,101,114,97,100,100,114,0),502], [String.fromCharCode(104,97,115,104,116,97,103,115,95,119,95,57,54,0),384]]);
          let iconnewsshareE = 0.0;
         anythinkP /= Math.max(4, 3);
         mounting2 /= Math.max(4, parseInt(`${mounting2}`));
         trashi[`${iconnewsshareE}`] = 2;
         iconnewsshareE += parseFloat(`${parseInt(`${mounting2}`) & 2}`);
          let handlerf = String.fromCharCode(103,100,111,99,95,107,95,49,52,0);
          let iconadslink2 = 2.0;
          let areaf = String.fromCharCode(110,95,48,95,119,101,98,114,116,99,0);
         policyP += `${predictionbuttono.length}`;
         handlerf = "2";
         iconadslink2 /= Math.max(parseFloat(`${parseInt(`${iconadslink2}`)}`), 2);
         areaf += `${2 - handlerf.length}`;
      if (predictionbuttono.length <= anythinkP) {
          let liveshare2 = String.fromCharCode(111,103,103,101,114,95,116,95,51,52,0);
          let iconnotificationnewB = String.fromCharCode(99,95,51,56,95,108,115,112,115,0);
          let selectionU = true;
         predictionbuttono = [liveshare2.length];
         liveshare2 = `${(String.fromCharCode(85,0) == iconnotificationnewB ? iconnotificationnewB.length : (selectionU ? 3 : 2))}`;
         selectionU = iconnotificationnewB.length == 88 || selectionU;
      }
      if (predictionbuttono.length <= 4) {
          let hnewarchdefaultsa = String.fromCharCode(119,101,105,103,104,116,101,100,95,52,95,55,50,0);
         predictionbuttono.push(predictionbuttono.length);
         hnewarchdefaultsa += `${hnewarchdefaultsa.length}`;
      }
      flyerj += `${policyP.length}`;
          state.muted = true;
        } else {

   if (benefitV != String.fromCharCode(122,0)) {
      default_0lM += `${(benefitV == String.fromCharCode(114,0) ? benefitV.length : parseInt(`${pointE}`))}`;
   }
          state.muted = false;
   while (!flyerj.startsWith(`${questiconF}`)) {
      questiconF *= parseFloat(`${constantsT}`);
      break;
   }

        }

        this.setState(state);
      questiconF *= parseFloat(`${3 & parseInt(`${pointE}`)}`);

      },

       
      onPanResponderRelease: (evt, gestureState) => {
        let state = this.state;
      interstitial8 -= (flyerj == String.fromCharCode(114,0) ? flyerj.length : parseInt(`${pointE}`));

        state.volumeOffset = state.volumePosition;
   while ((hiadI & interstitial8) < 2) {
      hiadI /= Math.max(flyerj.length * parseInt(`${pointE}`), 1);
      break;
   }

        this.setControlTimeout();
   for (let a = 0; a < 1; a++) {
      basketballdetailsbgA = `${hiadI / (Math.max(interstitial8, 6))}`;
   }

        this.setState(state);
       let combinede = String.fromCharCode(115,116,114,101,97,109,95,117,95,53,0);
       let anytimez = 3;
         anytimez &= 2;
      if (4 < (anytimez | 2) && (2 | combinede.length) < 5) {
          let megaphoneS = String.fromCharCode(111,95,54,55,95,117,110,102,108,97,116,116,101,110,101,100,0);
          let auto_o8 = new Map([[String.fromCharCode(104,101,97,114,116,95,99,95,52,55,0),710], [String.fromCharCode(99,97,108,99,119,95,105,95,50,55,0),38]]);
          let defaultteamn = [432, 940, 575];
          let iconwatchnowT = String.fromCharCode(120,109,108,115,95,48,95,57,57,0);
         combinede += `${combinede.length}`;
         megaphoneS = `${3 ^ defaultteamn.length}`;
         auto_o8 = new Map([[`${auto_o8.size}`, 1]]);
         defaultteamn = [defaultteamn.length & 3];
         iconwatchnowT += `${3 | megaphoneS.length}`;
      }
         anytimez >>= Math.min(1, combinede.length);
       let yingb = 5.0;
       let switch_fL = 4.0;
      if (3 >= (combinede.length | 1)) {
          let updatesG = String.fromCharCode(98,105,116,112,108,97,110,97,114,99,104,117,110,107,121,95,114,95,51,55,0);
         combinede += `${anytimez}`;
         updatesG = `${(String.fromCharCode(119,0) == updatesG ? updatesG.length : updatesG.length)}`;
      }
      if ((anytimez + yingb) > 3.61 && 3.61 > (anytimez + yingb)) {
          let projecth = 5;
          let u_player0 = String.fromCharCode(118,95,53,51,95,102,117,110,103,105,98,108,101,115,0);
          let headerx = 4.0;
         yingb *= combinede.length * parseInt(`${headerx}`);
         projecth <<= Math.min(1, Math.abs(u_player0.length / 2));
         u_player0 += `${u_player0.length ^ 1}`;
         headerx += (parseFloat(`${u_player0 == String.fromCharCode(102,0) ? u_player0.length : projecth}`));
      }
      interstitial8 *= flyerj.length % (Math.max(1, iconbellG.length));

      },
    });
   if ((flyerj.length - hiadI) <= 3 || 3 <= (hiadI - flyerj.length)) {
       let tempe = String.fromCharCode(105,115,112,108,97,121,95,111,95,53,56,0);
       let largesound2 = String.fromCharCode(115,109,97,108,108,101,115,116,95,115,95,51,53,0);
       let awayicond = 2.0;
      do {
         largesound2 = `${tempe.length}`;
         if (largesound2.length == 2385690) {
            break;
         }
      } while ((largesound2.length == 2385690) && (5.92 < (parseFloat(`${largesound2.length}`) - awayicond)));
      do {
          let predictionactivey = String.fromCharCode(102,114,101,113,117,101,110,99,121,95,116,95,55,48,0);
          let signinupp = new Map([[String.fromCharCode(110,95,53,56,95,100,114,97,103,0),false ], [String.fromCharCode(103,95,49,95,99,111,110,116,97,105,110,101,114,115,0),false ], [String.fromCharCode(107,95,56,54,95,99,117,116,0),true ]]);
          let zhengpianC = 4.0;
          let greyF = [277, 376, 535];
          let b_center_ = String.fromCharCode(119,95,51,49,95,114,101,99,111,114,100,97,98,108,101,0);
         awayicond -= parseFloat(`${2 - signinupp.size}`);
         predictionactivey += "3";
         signinupp[predictionactivey] = predictionactivey.length;
         zhengpianC *= greyF.length & 2;
         greyF = [greyF.length - predictionactivey.length];
         b_center_ += `${(String.fromCharCode(103,0) == predictionactivey ? predictionactivey.length : parseInt(`${zhengpianC}`))}`;
         if (2614249.0 == awayicond) {
            break;
         }
      } while ((5 >= (3 + parseInt(`${awayicond}`)) || (parseInt(`${awayicond}`) + largesound2.length) >= 3) && (2614249.0 == awayicond));
      if (largesound2.length == 3) {
          let paginationp = String.fromCharCode(110,101,119,114,111,119,95,107,95,54,57,0);
          let gesturew = String.fromCharCode(114,111,119,95,120,95,56,56,0);
          let teamO = 5;
          let store3 = String.fromCharCode(99,105,110,118,105,100,101,111,95,49,95,48,0);
          let screeng = 3;
         tempe += `${1 & parseInt(`${awayicond}`)}`;
         paginationp = `${2 / (Math.max(3, screeng))}`;
         gesturew = `${store3.length}`;
         teamO -= 1;
         store3 = `${teamO}`;
         screeng -= 3 / (Math.max(2, store3.length));
      }
          let iconnointernetw = String.fromCharCode(97,117,120,105,108,105,97,114,121,95,115,95,51,55,0);
          let security4 = 1.0;
         largesound2 += `${iconnointernetw.length ^ tempe.length}`;
         iconnointernetw = `${parseInt(`${security4}`)}`;
          let sortq = [953, 94, 744];
          let androidC = String.fromCharCode(114,95,53,56,95,114,101,115,112,111,110,115,101,115,0);
          let iconpipshrinkd = 4.0;
         awayicond /= Math.max(5, parseFloat(`${tempe.length}`));
         sortq.push(2);
         androidC += `${androidC.length}`;
         iconpipshrinkd += parseFloat(`${androidC.length}`);
         tempe = `${parseInt(`${awayicond}`)}`;
      while (!tempe.includes(`${awayicond}`)) {
         awayicond /= Math.max(5, parseFloat(`${2}`));
         break;
      }
         tempe = "3";
          let shrink4 = String.fromCharCode(118,97,108,115,95,102,95,51,49,0);
          let logind = [787, 880];
         largesound2 = `${logind.length / (Math.max(3, 5))}`;
         shrink4 += `${1 << (Math.min(5, shrink4.length))}`;
         logind = [shrink4.length - shrink4.length];
      hiadI |= 1 & tempe.length;
   }

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
       let predictionm = String.fromCharCode(113,95,54,49,95,102,117,122,122,0);
    let elements6 = String.fromCharCode(100,95,55,57,95,97,100,100,114,115,0);
    let sharewhiteh = String.fromCharCode(99,95,51,50,95,99,111,109,112,108,105,99,97,116,105,111,110,0);
    let reminder3 = 5.0;
    let hookN = String.fromCharCode(99,108,97,122,122,95,97,95,50,55,0);
    let predictionbuttonr = String.fromCharCode(114,101,99,117,114,115,105,118,101,108,121,95,103,95,56,56,0);
    let lcopy_21R = true;
    let e_hashV = 2.0;
    let clocky = 3.0;
    let yellowcirclebgy = String.fromCharCode(114,101,115,104,117,102,102,108,101,95,102,95,54,55,0);
   for (let h = 0; h < 1; h++) {
      predictionbuttonr = `${1 * parseInt(`${reminder3}`)}`;
   }
   if (!sharewhiteh.startsWith(`${lcopy_21R}`)) {
      lcopy_21R = 100.13 > e_hashV;
   }
      elements6 += `${1 % (Math.max(parseInt(`${reminder3}`), 1))}`;
   if ((parseFloat(`${sharewhiteh.length}`) - e_hashV) < 3.14) {
       let refreshborderlessa = 1;
       let foregroundg = false;
      for (let w = 0; w < 1; w++) {
         refreshborderlessa %= Math.max(((foregroundg ? 2 : 5) | refreshborderlessa), 3);
      }
      while (!foregroundg && (5 - refreshborderlessa) < 4) {
         foregroundg = 58 <= refreshborderlessa || foregroundg;
         break;
      }
         refreshborderlessa |= 2 << (Math.min(Math.abs(refreshborderlessa), 4));
         foregroundg = !foregroundg && refreshborderlessa <= 9;
      do {
         refreshborderlessa &= 3;
         if (refreshborderlessa == 4286653) {
            break;
         }
      } while ((refreshborderlessa == 4286653) && (5 == (refreshborderlessa / (Math.max(3, 6))) && foregroundg));
      if (!foregroundg) {
          let libreactperfloggerjniu = new Map([[String.fromCharCode(106,95,49,56,95,117,108,116,105,0),832], [String.fromCharCode(114,101,115,121,110,99,95,102,95,55,54,0),595]]);
          let nbatrophy_ = String.fromCharCode(101,95,54,54,95,119,104,97,116,0);
          let str5 = false;
         refreshborderlessa <<= Math.min(2, Math.abs(2));
         libreactperfloggerjniu = new Map([[`${libreactperfloggerjniu.size}`, (libreactperfloggerjniu.size * (str5 ? 4 : 3))]]);
         nbatrophy_ += `${libreactperfloggerjniu.size}`;
      }
      sharewhiteh = `${3 | predictionm.length}`;
   }
      predictionbuttonr = `${sharewhiteh.length}`;
   if ((5.100 / (Math.max(3, e_hashV))) <= 5.32 && e_hashV <= 5.100) {
       let become1 = new Map([[String.fromCharCode(98,101,99,97,109,101,95,118,95,55,0),487], [String.fromCharCode(103,108,121,112,104,95,103,95,54,56,0),291]]);
      do {
         become1 = new Map([[`${become1.size}`, become1.size]]);
         if (1265247 == become1.size) {
            break;
         }
      } while ((1265247 == become1.size) && (2 <= become1.size));
      if ((become1.size + 1) == 2 || 5 == (1 + become1.size)) {
         become1[`${become1.size}`] = 1;
      }
         become1[`${become1.size}`] = become1.size - 2;
      lcopy_21R = reminder3 == parseFloat(`${predictionbuttonr.length}`);
   }
       let macauI = 1;
      for (let t = 0; t < 3; t++) {
         macauI |= macauI % (Math.max(8, macauI));
      }
      if (1 >= (macauI | 4)) {
          let tooltipsa = String.fromCharCode(115,117,98,105,109,97,103,101,95,51,95,50,55,0);
          let incidenti = [478, 926, 601];
          let progressO = 4;
         macauI ^= incidenti.length | macauI;
         tooltipsa += `${tooltipsa.length << (Math.min(Math.abs(3), 1))}`;
         incidenti = [progressO];
         progressO -= tooltipsa.length;
      }
         macauI %= Math.max(macauI, 3);
      clocky /= Math.max(parseFloat(`${parseInt(`${e_hashV}`) & 3}`), 1);
       let screenA = new Map([[String.fromCharCode(118,95,56,95,100,111,119,110,109,105,120,0),true ], [String.fromCharCode(113,95,52,52,95,114,117,108,101,98,111,111,107,0),true ]]);
       let chat0 = String.fromCharCode(117,110,114,101,99,111,103,95,97,95,54,54,0);
       let penaltyp = true;
      while (chat0.length < 5 && penaltyp) {
          let cornerS = String.fromCharCode(102,95,57,95,111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0);
         chat0 += `${((penaltyp ? 3 : 1))}`;
         cornerS += `${cornerS.length / (Math.max(1, 7))}`;
         break;
      }
         screenA[chat0] = chat0.length - 1;
         chat0 = `${((penaltyp ? 2 : 4) ^ 2)}`;
         chat0 += `${chat0.length * 1}`;
       let connectionx = 0.0;
       let invitej = 2.0;
      do {
          let predictionbannershared1 = [String.fromCharCode(112,101,101,114,105,100,95,52,95,49,56,0), String.fromCharCode(104,97,114,100,119,97,114,101,95,108,95,54,52,0)];
          let modef = 3.0;
          let iconlogoutr = String.fromCharCode(97,98,115,116,95,53,95,55,54,0);
         chat0 += `${(chat0 == String.fromCharCode(98,0) ? predictionbannershared1.length : chat0.length)}`;
         predictionbannershared1 = [iconlogoutr.length];
         modef += parseFloat(`${1}`);
         iconlogoutr += `${(String.fromCharCode(113,0) == iconlogoutr ? parseInt(`${modef}`) : iconlogoutr.length)}`;
         if (chat0.length == 2914944) {
            break;
         }
      } while ((chat0.length == 2914944) && (!penaltyp && 3 == chat0.length));
         invitej /= Math.max(parseFloat(`${screenA.size}`), 1);
         invitej *= parseFloat(`${chat0.length}`);
      do {
         invitej += (parseFloat(`${(penaltyp ? 1 : 5) << (Math.min(Math.abs(3), 2))}`));
         if (353276.0 == invitej) {
            break;
         }
      } while ((5.70 <= invitej) && (353276.0 == invitej));
      reminder3 *= (parseFloat(`${String.fromCharCode(107,0) == yellowcirclebgy ? predictionm.length : yellowcirclebgy.length}`));
   if (clocky == e_hashV) {
      clocky += parseFloat(`${1}`);
   }
      yellowcirclebgy = `${parseInt(`${e_hashV}`) ^ predictionbuttonr.length}`;
   do {
      lcopy_21R = sharewhiteh.length >= yellowcirclebgy.length;
      if (lcopy_21R ? !lcopy_21R : lcopy_21R) {
         break;
      }
   } while ((lcopy_21R ? !lcopy_21R : lcopy_21R) && (5.96 < (e_hashV - 4.51)));
      lcopy_21R = sharewhiteh.length == elements6.length;
      hookN = `${hookN.length - 1}`;

    return <View style={[VideoPlayerstyles.controls.control]} />;
   while (hookN.length > parseInt(`${e_hashV}`)) {
       let becomeD = 0.0;
       let gifgoal2 = 3;
       let carouseli = String.fromCharCode(109,117,120,101,114,115,95,109,95,49,55,0);
       let basketballtrophyn = new Map([[String.fromCharCode(100,95,55,53,95,98,95,50,55,0),String.fromCharCode(98,105,116,109,97,112,95,109,95,53,50,0)], [String.fromCharCode(97,95,55,55,95,99,104,114,111,109,97,104,111,108,100,0),String.fromCharCode(98,108,111,111,109,95,121,95,49,49,0)], [String.fromCharCode(105,109,112,108,105,101,115,95,48,95,53,51,0),String.fromCharCode(121,95,49,95,116,114,97,105,108,0)]]);
       let annerp = [String.fromCharCode(115,95,51,52,95,114,101,115,97,109,112,108,101,107,104,122,0), String.fromCharCode(97,95,49,57,95,114,117,110,115,0), String.fromCharCode(100,95,57,52,95,109,115,103,115,109,0)];
      while (2 >= (carouseli.length >> (Math.min(1, Math.abs(basketballtrophyn.size))))) {
         basketballtrophyn[carouseli] = (carouseli == String.fromCharCode(113,0) ? gifgoal2 : carouseli.length);
         break;
      }
          let zoomf = String.fromCharCode(106,95,49,54,95,97,97,99,112,115,0);
          let subtext3 = new Map([[String.fromCharCode(113,95,51,0),true ], [String.fromCharCode(110,95,56,48,0),true ], [String.fromCharCode(101,95,49,51,95,111,102,102,115,99,114,101,101,110,0),false ]]);
          let libavdeviceD = 1.0;
         becomeD *= (parseFloat(`${zoomf == String.fromCharCode(104,0) ? subtext3.size : zoomf.length}`));
         subtext3 = new Map([[`${libavdeviceD}`, parseInt(`${libavdeviceD}`) << (Math.min(5, Math.abs(parseInt(`${libavdeviceD}`))))]]);
      do {
         annerp.push(2 + basketballtrophyn.size);
         if (3990103 == annerp.length) {
            break;
         }
      } while ((3990103 == annerp.length) && (parseFloat(`${annerp.length}`) > becomeD));
          let vietnam9 = 2.0;
          let iconwatchnowO = 3.0;
          let yingw = [730, 753];
         carouseli += `${parseInt(`${becomeD}`) % 2}`;
         vietnam9 -= yingw.length << (Math.min(5, Math.abs(parseInt(`${iconwatchnowO}`))));
         iconwatchnowO -= parseFloat(`${parseInt(`${vietnam9}`)}`);
         yingw.push(yingw.length + parseInt(`${vietnam9}`));
      for (let y = 0; y < 3; y++) {
         gifgoal2 *= (carouseli == String.fromCharCode(89,0) ? carouseli.length : gifgoal2);
      }
         becomeD *= parseFloat(`${carouseli.length}`);
      if (3 == (3 - carouseli.length) && 3 == (3 - carouseli.length)) {
         annerp = [parseInt(`${becomeD}`) | 1];
      }
      do {
         annerp.push(annerp.length);
         if (4822403 == annerp.length) {
            break;
         }
      } while ((4822403 == annerp.length) && (1 == (basketballtrophyn.size << (Math.min(4, annerp.length)))));
          let assistu = [750, 994];
         annerp = [gifgoal2];
         assistu = [assistu.length];
      for (let z = 0; z < 3; z++) {
         carouseli += `${gifgoal2 << (Math.min(5, Math.abs(2)))}`;
      }
          let agreemente = [620, 5, 319];
         becomeD += parseFloat(`${1}`);
         agreemente.push(agreemente.length + agreemente.length);
       let profilepic6 = 0;
       let scoreZ = 4;
         becomeD /= Math.max(5, parseFloat(`${basketballtrophyn.size | profilepic6}`));
       let orangedownarrows = true;
          let predictionL = String.fromCharCode(105,95,50,53,95,97,118,101,114,97,103,101,115,0);
         scoreZ += 1;
         predictionL += `${(predictionL == String.fromCharCode(101,0) ? predictionL.length : predictionL.length)}`;
      e_hashV += parseFloat(`${yellowcirclebgy.length}`);
      break;
   }
   for (let f = 0; f < 1; f++) {
      predictionm += `${2 / (Math.max(9, parseInt(`${reminder3}`)))}`;
   }
       let nalyticsl = 5.0;
          let positionfieldP = [312, 288, 429];
         nalyticsl -= 3 ^ positionfieldP.length;
         nalyticsl += parseInt(`${nalyticsl}`);
         nalyticsl += 1;
      reminder3 -= parseFloat(`${parseInt(`${clocky}`) | parseInt(`${e_hashV}`)}`);
      hookN = `${parseInt(`${e_hashV}`)}`;
       let layoutn = String.fromCharCode(108,95,53,51,95,115,117,98,115,97,109,112,108,101,0);
       let friendsY = new Map([[String.fromCharCode(115,95,50,50,95,110,101,120,116,0),998], [String.fromCharCode(105,115,108,111,119,95,120,95,52,56,0),71]]);
       let homei = new Map([[String.fromCharCode(100,98,108,112,95,110,95,54,48,0),840], [String.fromCharCode(100,95,57,52,95,112,114,111,114,101,115,100,115,112,0),99], [String.fromCharCode(112,114,105,118,97,116,101,95,113,95,49,48,0),64]]);
          let redgoal1 = 2;
         friendsY = new Map([[`${friendsY.size}`, friendsY.size]]);
         redgoal1 *= 3 + redgoal1;
      if ((homei.size / 1) < 3) {
         homei[layoutn] = homei.size / (Math.max(layoutn.length, 6));
      }
         friendsY[`${friendsY.size}`] = 2 >> (Math.min(3, Math.abs(friendsY.size)));
         friendsY[`${layoutn}`] = homei.size / (Math.max(3, 7));
       let feedbackJ = String.fromCharCode(114,105,98,98,111,110,95,107,95,52,55,0);
       let users = String.fromCharCode(98,105,111,109,101,116,114,105,99,95,97,95,49,53,0);
      if (5 >= (friendsY.size + 4)) {
         friendsY[`${layoutn}`] = layoutn.length;
      }
       let redgoal2 = [305, 745, 165];
       let mountingb = [504, 899, 225];
          let gradle5 = 4.0;
          let lineY = true;
         feedbackJ += `${(String.fromCharCode(102,0) == feedbackJ ? feedbackJ.length : redgoal2.length)}`;
         gradle5 -= parseFloat(`${parseInt(`${gradle5}`) ^ 3}`);
         lineY = !lineY;
          let faviconY = new Map([[String.fromCharCode(101,95,48,95,97,112,112,101,110,100,99,104,97,114,0),false ], [String.fromCharCode(114,95,55,57,95,115,115,121,98,0),true ], [String.fromCharCode(116,111,109,105,99,95,105,95,52,55,0),false ]]);
          let basketballtrophyw = String.fromCharCode(115,111,117,114,99,101,115,95,113,95,55,55,0);
         redgoal2.push(feedbackJ.length);
         faviconY[`${basketballtrophyw}`] = basketballtrophyw.length - 1;
      hookN += "2";
       let commentd = 4.0;
       let nbatrophyH = new Map([[String.fromCharCode(109,101,109,99,109,112,95,109,95,55,56,0),true ], [String.fromCharCode(119,95,55,52,95,114,114,116,114,0),false ]]);
      do {
         nbatrophyH = new Map([[`${nbatrophyH.size}`, parseInt(`${commentd}`)]]);
         if (nbatrophyH.size == 3515492) {
            break;
         }
      } while ((nbatrophyH.size == 3515492) && (nbatrophyH[`${commentd}`] != null));
      do {
         commentd -= parseFloat(`${parseInt(`${commentd}`)}`);
         if (3815154.0 == commentd) {
            break;
         }
      } while ((3815154.0 == commentd) && (4.25 < (parseFloat(`${nbatrophyH.size}`) + commentd) || (nbatrophyH.size + parseInt(`${commentd}`)) < 3));
      for (let t = 0; t < 3; t++) {
         nbatrophyH = new Map([[`${nbatrophyH.size}`, 2]]);
      }
         commentd -= parseFloat(`${2}`);
         nbatrophyH[`${commentd}`] = parseInt(`${commentd}`);
         nbatrophyH = new Map([[`${nbatrophyH.size}`, parseInt(`${commentd}`) / 1]]);
      reminder3 /= Math.max(parseFloat(`${sharewhiteh.length}`), 3);
   do {
      predictionm = `${elements6.length << (Math.min(4, Math.abs(parseInt(`${reminder3}`))))}`;
      if (String.fromCharCode(103,119,118,0) == predictionm) {
         break;
      }
   } while ((String.fromCharCode(103,119,118,0) == predictionm) && (lcopy_21R || predictionm.length >= 5));
       let downloadingo = 2.0;
       let pangle5 = true;
         downloadingo += parseInt(`${downloadingo}`) * 1;
         downloadingo += (parseInt(`${downloadingo}`) % (Math.max(4, (pangle5 ? 2 : 2))));
       let infod = String.fromCharCode(101,109,111,106,105,115,95,120,95,52,53,0);
       let details2 = String.fromCharCode(112,97,115,115,105,118,101,95,112,95,55,57,0);
      while (pangle5) {
         details2 += "3";
         break;
      }
         pangle5 = String.fromCharCode(115,0) == infod || 15 <= details2.length;
      do {
         details2 = `${1 + parseInt(`${downloadingo}`)}`;
         if (details2 == String.fromCharCode(112,100,106,0)) {
            break;
         }
      } while ((5.67 == (downloadingo - 2.0)) && (details2 == String.fromCharCode(112,100,106,0)));
      predictionm += `${((lcopy_21R ? 1 : 2) + parseInt(`${reminder3}`))}`;
   for (let k = 0; k < 2; k++) {
      e_hashV += parseFloat(`${elements6.length}`);
   }
   for (let u = 0; u < 2; u++) {
       let iconwatchnowr = 2.0;
       let heartJ = 5.0;
       let renderS = 2;
         renderS ^= 3 / (Math.max(renderS, 5));
         iconwatchnowr /= Math.max(4, parseFloat(`${parseInt(`${heartJ}`) - 1}`));
      do {
         heartJ -= parseFloat(`${2}`);
         if (4841016.0 == heartJ) {
            break;
         }
      } while ((3.24 > (parseFloat(`${renderS}`) * heartJ) && 4.64 > (heartJ * 3.24)) && (4841016.0 == heartJ));
          let fcdaebecbcbafcdfceaaeccfeacdbS = String.fromCharCode(105,110,116,105,95,122,95,54,0);
          let foundr = true;
         renderS -= parseInt(`${iconwatchnowr}`);
         fcdaebecbcbafcdfceaaeccfeacdbS += `${((foundr ? 5 : 4) / 3)}`;
         foundr = !foundr && fcdaebecbcbafcdfceaaeccfeacdbS.length > 20;
      if (1.49 <= heartJ) {
         heartJ += parseFloat(`${1 | parseInt(`${iconwatchnowr}`)}`);
      }
      for (let h = 0; h < 2; h++) {
         iconwatchnowr += parseFloat(`${parseInt(`${iconwatchnowr}`) + 2}`);
      }
      while ((parseInt(`${heartJ}`) - renderS) >= 2 && 4 >= (renderS << (Math.min(Math.abs(2), 3)))) {
         heartJ /= Math.max(parseFloat(`${parseInt(`${heartJ}`) << (Math.min(4, Math.abs(2)))}`), 5);
         break;
      }
         heartJ += parseFloat(`${parseInt(`${heartJ}`) ^ 2}`);
         heartJ *= parseFloat(`${3}`);
      predictionbuttonr = `${(String.fromCharCode(80,0) == sharewhiteh ? sharewhiteh.length : (lcopy_21R ? 5 : 1))}`;
   }
       let defaultroombgr = String.fromCharCode(98,95,49,50,95,99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,0);
       let whistleorange2 = [781, 324, 59];
       let mbjscommonh = true;
      while (whistleorange2.length == 3) {
         whistleorange2 = [defaultroombgr.length / (Math.max(1, 3))];
         break;
      }
         whistleorange2 = [(defaultroombgr.length - (mbjscommonh ? 2 : 3))];
         defaultroombgr += `${defaultroombgr.length}`;
         whistleorange2.push(1);
         whistleorange2 = [whistleorange2.length];
          let policyX = 5;
         defaultroombgr += `${(String.fromCharCode(78,0) == defaultroombgr ? (mbjscommonh ? 2 : 2) : defaultroombgr.length)}`;
         policyX >>= Math.min(4, Math.abs(policyX));
       let questM = 1;
      do {
         whistleorange2 = [(1 ^ (mbjscommonh ? 2 : 4))];
         if (whistleorange2.length == 1646099) {
            break;
         }
      } while ((!defaultroombgr.includes(`${whistleorange2.length}`)) && (whistleorange2.length == 1646099));
         whistleorange2.push(questM | 1);
      reminder3 += (parseFloat(`${yellowcirclebgy == String.fromCharCode(89,0) ? yellowcirclebgy.length : (mbjscommonh ? 2 : 5)}`));
   for (let z = 0; z < 1; z++) {
       let clearj = String.fromCharCode(101,114,114,111,114,115,95,54,95,51,50,0);
       let iconarrowrightblackZ = String.fromCharCode(99,111,109,112,97,114,101,95,98,95,53,53,0);
         clearj = `${clearj.length % 3}`;
      while (1 >= iconarrowrightblackZ.length) {
          let resendU = 1.0;
          let backiconZ = false;
         iconarrowrightblackZ += `${iconarrowrightblackZ.length}`;
         resendU += parseInt(`${resendU}`);
         backiconZ = resendU <= 72.10 && resendU <= 72.10;
         break;
      }
         iconarrowrightblackZ += `${clearj.length}`;
      do {
         iconarrowrightblackZ += `${(iconarrowrightblackZ == String.fromCharCode(114,0) ? iconarrowrightblackZ.length : clearj.length)}`;
         if (String.fromCharCode(50,95,108,56,95,105,112,0) == iconarrowrightblackZ) {
            break;
         }
      } while ((clearj.length < iconarrowrightblackZ.length) && (String.fromCharCode(50,95,108,56,95,105,112,0) == iconarrowrightblackZ));
      if (!iconarrowrightblackZ.includes(clearj)) {
         iconarrowrightblackZ += "2";
      }
      for (let l = 0; l < 1; l++) {
         clearj += `${(String.fromCharCode(102,0) == iconarrowrightblackZ ? clearj.length : iconarrowrightblackZ.length)}`;
      }
      elements6 = `${iconarrowrightblackZ.length * clearj.length}`;
   }
   if (lcopy_21R) {
      e_hashV *= (parseFloat(`${String.fromCharCode(75,0) == elements6 ? elements6.length : parseInt(`${e_hashV}`)}`));
   }

  }

   
  renderTopControls() {
       let libpangleflippedF = String.fromCharCode(116,95,54,57,95,105,110,112,111,115,0);
    let footballfieldf = String.fromCharCode(119,95,51,48,95,101,120,99,101,112,116,0);
    let fullL = 2.0;
    let nbatrophy3 = new Map([[String.fromCharCode(99,111,109,112,108,105,97,110,116,95,105,95,50,48,0),322], [String.fromCharCode(115,95,49,56,95,120,100,99,97,109,0),739]]);
    let unselected9 = [466, 80];
    let submitc = 3;
    let imagewatchliveg = false;
    let progressg = 2;
    let catalogG = 0.0;
    let reactnativejsu = String.fromCharCode(110,95,49,51,95,112,97,110,111,114,97,109,97,0);
    let l_titleK = true;
    let executor4 = 1.0;
    let bridgeK = String.fromCharCode(100,95,56,48,95,99,111,109,109,105,116,0);
    let dragO = String.fromCharCode(119,95,57,57,95,114,101,112,111,114,116,115,0);
    let sharedN = [883, 666, 133];
      libpangleflippedF = `${nbatrophy3.size * progressg}`;
   for (let w = 0; w < 1; w++) {
       let statisticsactiveA = String.fromCharCode(115,104,105,109,109,101,114,95,103,95,52,51,0);
       let logouser3 = 0;
      do {
         logouser3 >>= Math.min(Math.abs(logouser3), 4);
         if (logouser3 == 1983153) {
            break;
         }
      } while (((logouser3 - 1) < 2) && (logouser3 == 1983153));
         logouser3 |= statisticsactiveA.length;
         statisticsactiveA = `${1 / (Math.max(9, statisticsactiveA.length))}`;
         logouser3 &= (String.fromCharCode(101,0) == statisticsactiveA ? statisticsactiveA.length : logouser3);
       let minivodx = String.fromCharCode(115,95,49,57,95,114,101,102,105,110,101,100,0);
      for (let e = 0; e < 2; e++) {
         logouser3 &= 3;
      }
      fullL -= progressg | 2;
   }

    const backControl = this.props.disableBack
      ? this.renderNullControl()
      : this.renderBack();
    const volumeControl = this.props.disableVolume
      ? this.renderNullControl()
      : this.renderVolume();

    const videoTitle = this.renderVideoTitle();
   do {
      progressg %= Math.max(3, 3);
      if (2453785 == progressg) {
         break;
      }
   } while ((2453785 == progressg) && ((progressg - 5) <= 3 || 5 <= (progressg % 5)));
      reactnativejsu += `${3 | progressg}`;


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
          source={require('./images/icons/weatherReactnativeratingsFavorite.png')}
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
      catalogG += parseFloat(`${progressg & 1}`);
   if (imagewatchliveg) {
       let predictionactiveH = new Map([[String.fromCharCode(105,95,55,53,95,112,108,97,105,110,116,101,120,116,0),String.fromCharCode(117,95,52,49,95,110,111,110,110,117,108,108,98,117,102,102,101,114,0)], [String.fromCharCode(103,95,55,50,95,97,117,116,104,111,114,115,0),String.fromCharCode(118,95,57,57,95,97,118,105,97,108,97,98,108,101,0)], [String.fromCharCode(98,101,110,101,97,116,104,95,102,95,52,52,0),String.fromCharCode(102,117,122,122,95,100,95,49,49,0)]]);
      while ((predictionactiveH.size & 1) < 4) {
         predictionactiveH = new Map([[`${predictionactiveH.size}`, predictionactiveH.size % (Math.max(1, 9))]]);
         break;
      }
      do {
         predictionactiveH[`${predictionactiveH.size}`] = 2 % (Math.max(5, predictionactiveH.size));
         if (predictionactiveH.size == 2896975) {
            break;
         }
      } while ((predictionactiveH.size == 2896975) && (3 <= (predictionactiveH.size << (Math.min(3, Math.abs(predictionactiveH.size)))) && (predictionactiveH.size << (Math.min(1, Math.abs(predictionactiveH.size)))) <= 3));
          let rendert = [234, 813];
          let libreanimatedW = true;
         predictionactiveH = new Map([[`${predictionactiveH.size}`, predictionactiveH.size ^ rendert.length]]);
         rendert.push(1);
      imagewatchliveg = imagewatchliveg && progressg > 78;
   }

  }

   
  renderBack() {
       let lang9 = String.fromCharCode(101,95,48,95,99,111,111,114,100,105,110,97,116,101,115,0);
    let dacccfaabfbcbadeebddcabacdffdb1 = 1;
    let armvan = [575, 866];
    let rulesx = String.fromCharCode(113,95,54,48,95,104,97,98,108,101,0);
    let changeF = 4.0;
    let gmailj = true;
    let iconeditb = new Map([[String.fromCharCode(99,102,116,109,100,108,95,108,95,55,53,0),223], [String.fromCharCode(104,95,51,50,95,112,114,101,118,105,101,119,101,100,0),717]]);
    let iconsharex = String.fromCharCode(97,99,99,117,109,117,108,97,116,101,95,111,95,50,53,0);
    let statisticsactive_ = String.fromCharCode(114,95,53,51,95,99,104,111,115,101,110,0);
      dacccfaabfbcbadeebddcabacdffdb1 /= Math.max(4, 2 + iconeditb.size);
      iconsharex += "2";
      iconsharex = `${dacccfaabfbcbadeebddcabacdffdb1}`;
       let live2 = String.fromCharCode(122,95,54,53,95,109,115,118,115,0);
      while (live2 == live2) {
          let regengV = 2;
         live2 = `${live2.length}`;
         regengV |= regengV;
         break;
      }
      do {
         live2 = `${live2.length | 3}`;
         if (live2 == String.fromCharCode(102,53,55,118,0)) {
            break;
         }
      } while ((live2.length == 3) && (live2 == String.fromCharCode(102,53,55,118,0)));
      if (1 == live2.length) {
         live2 = `${live2.length}`;
      }
      armvan = [1 | lang9.length];

    return this.renderControl(
      <Image
        source={require('./images/icons/catalogRender.png')}
        style={VideoPlayerstyles.controls.back}
      />,
      this.events.onBack,
      VideoPlayerstyles.controls.back,
    );
      iconeditb[`${gmailj}`] = ((gmailj ? 4 : 3) + iconeditb.size);
   while (3 < (5 | lang9.length)) {
      dacccfaabfbcbadeebddcabacdffdb1 *= lang9.length;
      break;
   }
   if (5 < lang9.length) {
      lang9 += `${armvan.length / (Math.max(4, rulesx.length))}`;
   }
      lang9 = `${dacccfaabfbcbadeebddcabacdffdb1}`;

  }

   
  renderVolume() {
       let rncoree = new Map([[String.fromCharCode(115,95,55,55,95,117,115,101,114,0),89], [String.fromCharCode(114,108,111,116,116,105,101,99,111,109,109,111,110,95,121,95,53,52,0),717], [String.fromCharCode(113,95,50,48,0),784]]);
    let specZ = 4.0;
    let grayJ = 0.0;
    let detailz = false;
    let servicej = [818, 128, 42];
    let turndownF = String.fromCharCode(107,101,121,104,97,115,104,95,114,95,56,53,0);
    let aboutO = true;
    let combinedq = [497, 813];
    let mbbid4 = String.fromCharCode(106,95,56,49,95,99,101,110,116,101,114,101,100,0);
    let matchinactiveL = String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,95,48,95,51,51,0);
    let libjsinspectork = false;
    let profilepicL = new Map([[String.fromCharCode(99,95,55,55,95,105,118,115,101,116,117,112,0),916], [String.fromCharCode(104,95,54,50,95,100,114,111,112,120,0),254]]);
    let manifestr = String.fromCharCode(101,95,55,57,95,101,120,112,101,114,105,109,101,110,116,97,108,0);
    let redscoreballC = String.fromCharCode(112,95,54,50,95,108,115,112,102,108,112,99,0);
    let suboutG = String.fromCharCode(99,116,105,109,101,115,116,97,109,112,95,105,95,54,51,0);
    let ewardedW = true;
       let orangeclockh = 5;
       let yellowredcardi = new Map([[String.fromCharCode(116,95,56,54,95,120,114,101,115,0),false ], [String.fromCharCode(121,95,53,56,95,109,101,108,116,0),false ]]);
       let rooms = String.fromCharCode(100,111,99,116,111,116,97,108,95,112,95,50,51,0);
         rooms = "3";
      for (let k = 0; k < 1; k++) {
         orangeclockh /= Math.max(orangeclockh, 4);
      }
         yellowredcardi = new Map([[`${yellowredcardi.size}`, 3]]);
       let anytimex = 2;
         yellowredcardi = new Map([[`${anytimex}`, 3]]);
          let halffieldimageZ = String.fromCharCode(116,101,116,114,97,104,101,100,114,97,108,95,57,95,49,52,0);
         yellowredcardi[halffieldimageZ] = halffieldimageZ.length;
          let transferu = String.fromCharCode(111,95,50,51,95,112,114,111,120,121,0);
          let dependency9 = [String.fromCharCode(97,95,56,55,95,103,114,111,117,112,0), String.fromCharCode(113,117,97,114,116,122,95,109,95,54,57,0), String.fromCharCode(97,110,97,108,121,115,105,115,95,122,95,52,51,0)];
          let sharewhitec = new Map([[String.fromCharCode(119,105,116,110,101,115,115,95,104,95,57,49,0),String.fromCharCode(97,108,112,104,97,101,120,116,114,97,99,116,95,108,95,54,50,0)], [String.fromCharCode(118,95,51,53,95,109,97,121,0),String.fromCharCode(122,95,49,56,95,118,108,99,115,112,101,99,0)], [String.fromCharCode(100,105,115,99,97,114,100,101,100,95,103,95,52,53,0),String.fromCharCode(121,95,50,54,95,109,117,108,120,0)]]);
         anytimex |= transferu.length | dependency9.length;
         transferu += `${sharewhitec.size}`;
         dependency9 = [sharewhitec.size];
       let matchdetailbgx = 4.0;
       let suboutY = 3.0;
       let interstitialQ = String.fromCharCode(114,95,50,49,0);
      servicej.push(3);
   do {
      servicej.push((String.fromCharCode(103,0) == mbbid4 ? servicej.length : mbbid4.length));
      if (servicej.length == 3974251) {
         break;
      }
   } while (((4 | servicej.length) == 4) && (servicej.length == 3974251));

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
            source={require('./images/icons/feedbackRefreshborderless.png')}
          />
        </View>
      </View>
    );
   while (3.25 > (grayJ / 4.26) || 4.26 > (grayJ / (Math.max(servicej.length, 4)))) {
      servicej.push(mbbid4.length | 3);
      break;
   }
   do {
       let gradlej = 2.0;
       let iconuserd = [88, 126, 739];
       let iconnotificationnewr = 5.0;
       let imageactionlivei = String.fromCharCode(113,95,50,48,95,98,114,101,97,100,0);
       let latn9 = new Map([[String.fromCharCode(97,99,111,100,101,99,95,51,95,49,48,48,0),String.fromCharCode(103,95,56,50,95,116,97,110,115,105,103,0)], [String.fromCharCode(97,97,99,100,101,99,116,97,98,95,111,95,50,49,0),String.fromCharCode(104,95,49,51,95,101,120,112,111,115,117,114,101,0)], [String.fromCharCode(122,105,103,122,97,103,95,122,95,55,48,0),String.fromCharCode(117,110,109,105,120,95,102,95,53,0)]]);
      while ((imageactionlivei.length / (Math.max(3, 3))) > 3) {
          let typingloading6 = String.fromCharCode(99,109,97,112,95,118,95,56,53,0);
          let bootsplashb = String.fromCharCode(116,119,105,99,101,95,104,95,52,0);
          let types9 = true;
          let relatedv = String.fromCharCode(116,95,54,53,95,109,97,110,121,0);
         imageactionlivei = `${parseInt(`${iconnotificationnewr}`)}`;
         typingloading6 += `${relatedv.length * 1}`;
         bootsplashb += `${(String.fromCharCode(99,0) == bootsplashb ? typingloading6.length : bootsplashb.length)}`;
         types9 = (69 <= ((types9 ? typingloading6.length : 69) * typingloading6.length));
         relatedv += `${3 >> (Math.min(3, relatedv.length))}`;
         break;
      }
       let langb = 2.0;
       let libfollyv = 3;
       let basketballtrophya = 3;
       let roomw = 1.0;
       let canvasf = 0.0;
         roomw += 1;
         iconuserd = [3 ^ parseInt(`${canvasf}`)];
          let defaultbasketballbgz = 5.0;
          let valuesT = 5.0;
          let main_h0 = 4;
         imageactionlivei = `${parseInt(`${defaultbasketballbgz}`) << (Math.min(5, Math.abs(basketballtrophya)))}`;
         defaultbasketballbgz += parseFloat(`${parseInt(`${valuesT}`) + 2}`);
         valuesT *= parseFloat(`${main_h0}`);
         main_h0 <<= Math.min(Math.abs(main_h0), 1);
      if (2.72 <= (iconnotificationnewr * roomw)) {
          let usernamew = String.fromCharCode(119,95,54,52,95,115,99,111,112,101,115,0);
          let whistleU = new Map([[String.fromCharCode(122,95,55,49,95,97,99,99,117,114,97,116,101,0),326], [String.fromCharCode(112,95,54,54,95,97,100,97,112,116,97,116,105,111,110,0),667]]);
         iconnotificationnewr *= parseFloat(`${1}`);
         usernamew += `${usernamew.length}`;
         whistleU[usernamew] = whistleU.size;
      }
         libfollyv <<= Math.min(Math.abs(2 >> (Math.min(Math.abs(parseInt(`${roomw}`)), 4))), 2);
         roomw /= Math.max(3, 1);
      do {
         basketballtrophya %= Math.max(5, libfollyv & parseInt(`${iconnotificationnewr}`));
         if (basketballtrophya == 2169841) {
            break;
         }
      } while ((2 == basketballtrophya) && (basketballtrophya == 2169841));
      servicej = [1 ^ servicej.length];
      gradlej /= Math.max(3, parseInt(`${gradlej}`) & parseInt(`${gradlej}`));
      if (servicej.length == 855341) {
         break;
      }
   } while ((!libjsinspectork || (servicej.length * 5) < 4) && (servicej.length == 855341));

  }
  
  renderVideoTitle() {
       let hoverc = [463, 322];
    let assetsr = [String.fromCharCode(110,95,56,56,95,119,105,110,100,105,110,103,0), String.fromCharCode(112,95,55,49,95,97,118,111,112,116,105,111,110,115,0)];
    let watchh = 3.0;
    let exampleimageT = String.fromCharCode(120,95,57,48,95,101,110,117,109,101,114,97,116,101,0);
    let inviteK = 5.0;
    let k_unlockf = String.fromCharCode(115,101,97,108,97,110,116,95,119,95,50,54,0);
    let rocketo = String.fromCharCode(100,95,54,50,95,97,99,107,110,111,119,108,101,100,103,101,0);
    let catalogR = 5.0;
    let orangeclockE = 2;
    let giftb = 5;
    let headerA = String.fromCharCode(114,101,112,114,101,115,101,110,116,115,95,103,95,55,48,0);
    let pressurex = 5.0;
    let unselectedZ = String.fromCharCode(101,95,53,51,95,98,114,105,100,103,101,97,98,108,101,0);
       let emojiJ = new Map([[String.fromCharCode(107,95,49,49,95,115,105,103,110,108,101,0),73], [String.fromCharCode(100,114,97,119,105,110,103,95,57,95,53,50,0),91], [String.fromCharCode(114,97,116,105,111,110,97,108,95,48,95,53,48,0),686]]);
         emojiJ = new Map([[`${emojiJ.size}`, 3]]);
         emojiJ = new Map([[`${emojiJ.size}`, 3]]);
      if (5 > (emojiJ.size % (Math.max(1, emojiJ.size)))) {
          let memberU = 2.0;
          let point7 = [438, 110];
          let exampleimageA = String.fromCharCode(116,104,101,114,101,95,54,95,51,56,0);
          let viewsw = String.fromCharCode(102,97,105,108,101,100,95,115,95,49,51,0);
         emojiJ = new Map([[`${emojiJ.size}`, point7.length >> (Math.min(Math.abs(1), 5))]]);
         memberU -= parseFloat(`${viewsw.length * exampleimageA.length}`);
         point7.push(exampleimageA.length);
         viewsw = `${exampleimageA.length}`;
      }
      catalogR /= Math.max(1, parseInt(`${watchh}`));
   for (let m = 0; m < 3; m++) {
      watchh += 3 | giftb;
   }
   while ((k_unlockf.length + hoverc.length) <= 1 && (k_unlockf.length + 1) <= 3) {
      k_unlockf = `${(rocketo == String.fromCharCode(97,0) ? parseInt(`${pressurex}`) : rocketo.length)}`;
      break;
   }
      hoverc = [3 * parseInt(`${inviteK}`)];
   if ((1.41 - pressurex) > 2.85 || 4.66 > (catalogR - 1.41)) {
       let predictionbuttong = 4;
       let soundO = String.fromCharCode(101,118,101,114,121,98,111,100,121,95,98,95,53,54,0);
       let iconarrowrightblackw = 3.0;
       let baseA = 3.0;
       let mini5 = true;
         soundO += `${predictionbuttong}`;
      if ((3.31 / (Math.max(6, iconarrowrightblackw))) <= 5.18) {
         iconarrowrightblackw += parseFloat(`${1 - parseInt(`${baseA}`)}`);
      }
          let awayteamfield9 = false;
         mini5 = predictionbuttong > parseInt(`${baseA}`);
         awayteamfield9 = !awayteamfield9;
      do {
         predictionbuttong <<= Math.min(3, Math.abs(2 & parseInt(`${baseA}`)));
         if (2516636 == predictionbuttong) {
            break;
         }
      } while (((soundO.length % 3) >= 3 && 3 >= (soundO.length % (Math.max(3, 7)))) && (2516636 == predictionbuttong));
      if ((baseA - 5.0) > 5.22) {
         baseA -= parseFloat(`${predictionbuttong}`);
      }
         soundO += `${parseInt(`${baseA}`)}`;
         predictionbuttong /= Math.max(2, 2);
      do {
         baseA *= parseFloat(`${3 | parseInt(`${iconarrowrightblackw}`)}`);
         if (baseA == 4876348.0) {
            break;
         }
      } while ((2 < (soundO.length >> (Math.min(Math.abs(4), 1)))) && (baseA == 4876348.0));
          let send9 = new Map([[String.fromCharCode(97,95,55,48,95,116,111,103,103,108,101,100,0),49], [String.fromCharCode(115,117,98,100,101,109,117,120,101,114,95,50,95,55,49,0),63], [String.fromCharCode(105,110,116,101,114,120,95,56,95,57,52,0),5]]);
          let default_8G = true;
         mini5 = send9.size < 26;
         send9 = new Map([[`${default_8G}`, ((default_8G ? 2 : 4) | 2)]]);
          let actionk = String.fromCharCode(117,95,57,55,0);
          let expandI = 0.0;
          let profilepich = String.fromCharCode(102,111,117,114,95,112,95,52,53,0);
         baseA /= Math.max(parseFloat(`${2 | parseInt(`${expandI}`)}`), 5);
         actionk += "3";
         expandI /= Math.max(profilepich.length, 5);
         profilepich = "3";
      if (predictionbuttong == 3) {
         mini5 = 64 <= soundO.length;
      }
      for (let w = 0; w < 1; w++) {
         baseA *= parseFloat(`${parseInt(`${iconarrowrightblackw}`) & 2}`);
      }
         baseA -= parseFloat(`${2 | parseInt(`${baseA}`)}`);
          let turndownG = 5.0;
          let videox = 5.0;
         baseA *= (parseFloat(`${(mini5 ? 4 : 3) >> (Math.min(Math.abs(parseInt(`${turndownG}`)), 2))}`));
         turndownG *= parseFloat(`${2}`);
         videox -= 3;
      for (let v = 0; v < 3; v++) {
         predictionbuttong <<= Math.min(4, Math.abs(2));
      }
      pressurex *= parseInt(`${baseA}`);
   }
   while (!rocketo.includes(`${pressurex}`)) {
       let greyz = 5.0;
       let macaui = new Map([[String.fromCharCode(120,95,54,55,95,101,97,114,108,121,0),27], [String.fromCharCode(104,95,49,55,95,97,108,103,115,0),664], [String.fromCharCode(112,105,99,116,121,112,101,95,116,95,57,48,0),580]]);
       let bangP = String.fromCharCode(116,97,103,103,101,114,95,98,95,56,49,0);
      do {
         macaui = new Map([[`${greyz}`, bangP.length / 1]]);
         if (1075241 == macaui.size) {
            break;
         }
      } while (((bangP.length >> (Math.min(Math.abs(4), 3))) == 3) && (1075241 == macaui.size));
      for (let l = 0; l < 1; l++) {
         greyz /= Math.max(parseFloat(`${parseInt(`${greyz}`) % (Math.max(bangP.length, 7))}`), 3);
      }
          let langkeyq = String.fromCharCode(102,105,108,101,115,95,119,95,49,55,0);
          let description_iz9 = String.fromCharCode(99,111,110,102,105,103,95,120,95,57,57,0);
          let pressuree = String.fromCharCode(102,102,106,110,105,95,56,95,49,48,0);
         macaui[bangP] = 1 * bangP.length;
         langkeyq += `${(langkeyq == String.fromCharCode(76,0) ? pressuree.length : langkeyq.length)}`;
         description_iz9 = `${(pressuree == String.fromCharCode(110,0) ? pressuree.length : langkeyq.length)}`;
       let defaultroombgu = String.fromCharCode(103,101,110,99,98,95,101,95,57,57,0);
       let arrowdownj = String.fromCharCode(111,95,49,53,95,112,117,98,108,105,115,104,97,98,108,101,0);
      do {
         greyz *= parseFloat(`${parseInt(`${greyz}`)}`);
         if (2191440.0 == greyz) {
            break;
         }
      } while ((2191440.0 == greyz) && (macaui[`${greyz}`] != null));
          let usernameI = String.fromCharCode(101,95,53,51,95,112,117,98,107,101,121,104,97,115,104,0);
          let previewa = String.fromCharCode(117,95,51,55,95,101,110,118,105,114,111,110,109,101,110,116,0);
         defaultroombgu = `${defaultroombgu.length | macaui.size}`;
         usernameI += "1";
         previewa = `${usernameI.length + previewa.length}`;
       let reactnativejsp = String.fromCharCode(111,95,57,55,95,108,97,121,111,121,116,0);
       let main_ve = String.fromCharCode(99,95,57,51,95,105,110,116,101,114,97,99,116,105,111,110,115,0);
       let whitebell9 = String.fromCharCode(115,109,111,111,116,104,108,121,95,102,95,52,49,0);
       let founde = String.fromCharCode(113,116,97,98,108,101,115,95,111,95,52,49,0);
      if (macaui.size <= reactnativejsp.length) {
          let halfR = String.fromCharCode(101,120,116,114,97,112,111,108,97,116,111,114,95,116,95,51,56,0);
          let long_mA = 0.0;
         macaui = new Map([[halfR, (String.fromCharCode(82,0) == main_ve ? halfR.length : main_ve.length)]]);
         long_mA /= Math.max(5, 2 & parseInt(`${long_mA}`));
      }
      rocketo = `${assetsr.length}`;
      break;
   }
   do {
      pressurex *= 1;
      if (pressurex == 4557495.0) {
         break;
      }
   } while ((pressurex == 4557495.0) && (5.82 == (2.32 + pressurex) && 2 == (1 - assetsr.length)));

    return (
      <View style={VideoPlayerstyles.videotitle.container}>
        <Text style={VideoPlayerstyles.videotitle.title}>
          {this.state.videoTitle}
        </Text>
      </View>
    );
   if (2 == (giftb + 5) && 2 == (giftb + 5)) {
      orangeclockE %= Math.max(3, 4);
   }
       let wifirouterF = 5.0;
       let bootsplashl = new Map([[String.fromCharCode(103,95,49,50,95,117,112,100,97,116,101,100,0),243], [String.fromCharCode(111,95,57,50,95,112,101,114,105,111,100,105,99,0),562], [String.fromCharCode(117,110,114,101,103,105,115,116,101,114,101,100,95,56,95,57,52,0),682]]);
       let middlesoundA = true;
      if (Array.from(bootsplashl.values()).includes(wifirouterF)) {
         bootsplashl = new Map([[`${middlesoundA}`, ((middlesoundA ? 4 : 1) % (Math.max(2, parseInt(`${wifirouterF}`))))]]);
      }
      for (let c = 0; c < 3; c++) {
         middlesoundA = wifirouterF == 97.40 && 97 == bootsplashl.size;
      }
         bootsplashl = new Map([[`${bootsplashl.size}`, bootsplashl.size ^ 1]]);
      do {
          let applicationl = 2.0;
          let corner9 = 0.0;
         wifirouterF -= 3;
         applicationl /= Math.max(5, 3 - parseInt(`${corner9}`));
         corner9 -= parseInt(`${applicationl}`) & parseInt(`${corner9}`);
         if (2871375.0 == wifirouterF) {
            break;
         }
      } while ((wifirouterF == 1.67 && (wifirouterF - 1.67) == 2.96) && (2871375.0 == wifirouterF));
          let chatbotphotoe = String.fromCharCode(103,95,52,54,95,110,111,109,105,110,97,116,101,0);
         middlesoundA = !middlesoundA || bootsplashl.size <= 47;
         chatbotphotoe += "2";
      do {
         middlesoundA = wifirouterF < 19.68;
         if (middlesoundA ? !middlesoundA : middlesoundA) {
            break;
         }
      } while ((3.21 < wifirouterF || 5.71 < (3.21 / (Math.max(1, wifirouterF)))) && (middlesoundA ? !middlesoundA : middlesoundA));
         bootsplashl[`${middlesoundA}`] = 1;
       let flag6 = false;
      if (!middlesoundA) {
         middlesoundA = flag6 || !middlesoundA;
      }
      catalogR *= parseInt(`${wifirouterF}`) * 2;
      catalogR /= Math.max((String.fromCharCode(82,0) == k_unlockf ? k_unlockf.length : parseInt(`${inviteK}`)), 1);
      catalogR /= Math.max(2, 2 * headerA.length);
       let valuesH = String.fromCharCode(104,95,56,51,95,97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,0);
       let catalogo = 1;
       let entryP = 4.0;
       let notificationgrayN = 5.0;
      do {
         entryP += (parseFloat(`${String.fromCharCode(116,0) == valuesH ? parseInt(`${notificationgrayN}`) : valuesH.length}`));
         if (4410537.0 == entryP) {
            break;
         }
      } while (((4 - notificationgrayN) > 2.86) && (4410537.0 == entryP));
          let chatbotphoto4 = false;
          let viewsS = String.fromCharCode(99,111,110,97,110,102,105,108,101,95,48,95,55,48,0);
         valuesH += `${(viewsS == String.fromCharCode(111,0) ? viewsS.length : parseInt(`${entryP}`))}`;
         chatbotphoto4 = (!chatbotphoto4 ? chatbotphoto4 : chatbotphoto4);
          let profileframes = String.fromCharCode(113,122,98,105,110,95,116,95,54,50,0);
          let user5 = [795, 443];
          let downU = false;
         valuesH += `${profileframes.length}`;
         profileframes = `${1 ^ user5.length}`;
         user5 = [user5.length ^ user5.length];
      while (2 <= (3 & catalogo)) {
          let launcherY = 0;
         entryP += parseFloat(`${2 - valuesH.length}`);
         launcherY *= launcherY - 1;
         break;
      }
      for (let q = 0; q < 1; q++) {
          let flyerk = 1.0;
          let orangetickL = [906, 189, 47];
          let searchy = String.fromCharCode(99,117,116,95,49,95,52,50,0);
          let phonen = 5.0;
         entryP *= parseFloat(`${orangetickL.length + parseInt(`${phonen}`)}`);
         flyerk += searchy.length ^ 1;
         orangetickL.push(3 * parseInt(`${flyerk}`));
         searchy += "3";
         phonen /= Math.max(parseFloat(`${searchy.length + parseInt(`${flyerk}`)}`), 3);
      }
      watchh -= headerA.length;
      hoverc = [2 + k_unlockf.length];
   while (3 >= (orangeclockE % 2)) {
      orangeclockE *= 3 & giftb;
      break;
   }

  }

   
  renderFullscreen() {
       let favoritew = 2.0;
    let const_rE = String.fromCharCode(110,95,56,54,95,115,107,105,112,112,97,98,108,101,0);
    let share8 = String.fromCharCode(99,111,114,114,101,108,97,116,105,111,110,95,108,95,53,0);
    let reactnativeratingsp = [948, 503, 742];
    let greenarrowupa = String.fromCharCode(114,101,113,117,115,116,101,114,95,55,95,51,54,0);
    let upgradet = 3.0;
    let configuree = true;
    let basketballdetailsbg4 = String.fromCharCode(108,95,52,56,95,99,117,114,114,114,101,110,116,0);
    let largebrightnessz = String.fromCharCode(97,118,100,99,116,95,105,95,53,56,0);
   if (2 >= (reactnativeratingsp.length % 5) && 5 >= reactnativeratingsp.length) {
      configuree = reactnativeratingsp.length <= 97;
   }
      favoritew /= Math.max(2, parseInt(`${upgradet}`) >> (Math.min(3, Math.abs(1))));

    let source =
      this.state.isFullscreen === true
        ? require('./images/icons/predictionarrowIcon.png')
        : require('./images/icons/defaultfootballbgConstantsCombined.png');
    return this.renderControl(
      <Image
        source={source}
        style={VideoPlayerstyles.controls.fullscreenIcon}
        resizeMode={'contain'}
      />,
      this.methods.toggleFullscreen,
      VideoPlayerstyles.controls.fullscreen,
    );
   do {
       let iconnointernetg = false;
       let rules5 = false;
       let eventsplashC = String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,95,48,95,48,0);
      for (let t = 0; t < 1; t++) {
          let changem = String.fromCharCode(117,95,56,57,95,115,104,97,112,101,0);
          let countdown_ = 0;
          let agreement7 = String.fromCharCode(101,109,117,108,97,116,101,95,107,95,53,52,0);
          let interstitialJ = [822, 92, 443];
          let libsentryv = String.fromCharCode(112,95,50,49,95,100,101,102,105,110,101,100,0);
         rules5 = !eventsplashC.includes(`${iconnointernetg}`);
         changem = `${agreement7.length}`;
         countdown_ -= libsentryv.length | 1;
         agreement7 = `${countdown_ / (Math.max(5, agreement7.length))}`;
         interstitialJ = [2 + countdown_];
         libsentryv += "2";
      }
      while (iconnointernetg) {
         rules5 = !iconnointernetg;
         break;
      }
          let backiconmaskB = true;
         eventsplashC += `${((backiconmaskB ? 4 : 3))}`;
      for (let m = 0; m < 1; m++) {
         iconnointernetg = ((eventsplashC.length ^ (!rules5 ? eventsplashC.length : 39)) < 39);
      }
          let redscoreballw = String.fromCharCode(102,95,49,49,95,98,97,108,97,110,99,101,115,0);
          let mountingb = String.fromCharCode(100,95,49,55,95,110,101,97,114,101,114,0);
         iconnointernetg = mountingb.length <= 9 && !rules5;
         redscoreballw += `${redscoreballw.length}`;
         mountingb = `${(String.fromCharCode(54,0) == redscoreballw ? redscoreballw.length : redscoreballw.length)}`;
          let readQ = String.fromCharCode(103,101,110,101,114,97,108,105,115,101,100,95,51,95,56,50,0);
         eventsplashC = `${3 << (Math.min(4, eventsplashC.length))}`;
         readQ += `${readQ.length}`;
      for (let i = 0; i < 2; i++) {
         rules5 = eventsplashC.startsWith(`${iconnointernetg}`);
      }
       let foundG = 0.0;
      while ((foundG - 5.0) > 4.68 && rules5) {
          let fullscreenminu = String.fromCharCode(99,95,53,55,95,118,111,119,101,108,0);
          let overlayq = 3.0;
          let topicf = new Map([[String.fromCharCode(100,114,97,119,117,116,105,108,115,95,99,95,53,48,0),String.fromCharCode(100,95,56,55,95,112,117,116,105,110,116,0)], [String.fromCharCode(105,95,57,53,95,105,110,116,114,97,120,100,115,112,0),String.fromCharCode(116,95,50,95,99,111,112,121,0)]]);
          let refreshj = String.fromCharCode(99,101,114,116,115,95,54,95,51,51,0);
          let iconcurrentmatchY = 1.0;
         rules5 = (topicf.size - iconcurrentmatchY) >= 27.70;
         fullscreenminu += `${parseInt(`${overlayq}`) << (Math.min(Math.abs(1), 2))}`;
         overlayq /= Math.max(4, 1 + fullscreenminu.length);
         topicf = new Map([[fullscreenminu, fullscreenminu.length]]);
         refreshj += `${parseInt(`${overlayq}`) * fullscreenminu.length}`;
         iconcurrentmatchY *= 3 | fullscreenminu.length;
         break;
      }
      const_rE += `${const_rE.length}`;
      if (1666010 == const_rE.length) {
         break;
      }
   } while ((1666010 == const_rE.length) && (share8.length < 5));
      upgradet /= Math.max(1, 1);

  }

   
  renderBottomControls() {
       let giflivestreamingU = 1.0;
    let stringP = 2.0;
    let referrerI = new Map([[String.fromCharCode(111,95,49,95,110,101,120,116,0),221], [String.fromCharCode(119,95,55,52,95,104,121,112,111,116,104,101,115,101,115,0),557]]);
    let iconcurrentmatchH = String.fromCharCode(116,101,115,116,98,114,105,100,103,101,95,118,95,52,55,0);
    let basketballiconV = 3.0;
    let assist6 = 1.0;
    let station4 = String.fromCharCode(115,109,111,111,116,104,95,100,95,56,56,0);
    let libflipper_ = new Map([[String.fromCharCode(97,118,118,115,95,117,95,53,52,0),false ], [String.fromCharCode(121,95,50,57,95,117,110,114,101,109,111,118,97,98,108,101,0),false ], [String.fromCharCode(106,95,54,48,95,112,97,99,107,101,116,105,122,97,116,105,111,110,0),false ]]);
    let bgvipxvod9 = String.fromCharCode(111,114,105,101,110,116,95,50,95,57,49,0);
    let baiduT = [589, 39];
    let downloaderR = String.fromCharCode(114,101,115,117,108,116,95,100,95,55,57,0);
    let footballD = String.fromCharCode(97,99,99,101,110,116,95,97,95,50,56,0);
    let stationsW = true;
    let videocommon_ = String.fromCharCode(109,111,100,101,110,97,109,101,95,97,95,52,49,0);
    let final_nbT = [637, 179, 887];
   while ((downloaderR.length & 5) <= 2 && (downloaderR.length >> (Math.min(Math.abs(5), 1))) <= 3) {
      downloaderR += "2";
      break;
   }
   for (let l = 0; l < 3; l++) {
       let iconcloseX = true;
       let arrowupV = false;
       let iconviewergifT = String.fromCharCode(109,95,53,49,95,117,110,99,108,101,115,0);
       let gifgoalbgL = 2.0;
       let gray_ = String.fromCharCode(120,95,56,53,95,110,101,103,0);
         gifgoalbgL *= parseFloat(`${gray_.length}`);
      if (arrowupV || !iconcloseX) {
         iconcloseX = iconcloseX && gray_.length < 16;
      }
         iconviewergifT += "3";
         iconviewergifT = `${parseInt(`${gifgoalbgL}`)}`;
          let iconorientationH = [428, 487, 299];
          let flipperG = true;
          let darkW = new Map([[String.fromCharCode(102,95,54,56,95,119,97,116,99,104,101,100,0),202], [String.fromCharCode(118,95,53,52,95,111,112,101,110,0),671], [String.fromCharCode(116,104,111,117,103,104,95,113,95,56,52,0),743]]);
         iconcloseX = null == darkW[`${flipperG}`];
         iconorientationH = [iconorientationH.length];
         flipperG = iconorientationH.length == 31;
      do {
         iconcloseX = gray_.length <= 70;
         if (iconcloseX ? !iconcloseX : iconcloseX) {
            break;
         }
      } while ((iconcloseX ? !iconcloseX : iconcloseX) && (iconcloseX));
         gray_ += `${gray_.length}`;
          let componento = String.fromCharCode(119,95,56,50,95,119,105,100,101,115,99,114,101,101,110,0);
         iconcloseX = String.fromCharCode(49,0) == gray_;
         componento += `${2 & componento.length}`;
         gifgoalbgL -= parseFloat(`${gray_.length}`);
         gray_ = `${parseInt(`${gifgoalbgL}`) % 1}`;
          let iconpipexpandb = 3;
         gray_ = `${(2 * (iconcloseX ? 2 : 5))}`;
         iconpipexpandb *= 3 * iconpipexpandb;
      if (iconviewergifT.length >= 4 && arrowupV) {
         arrowupV = gifgoalbgL >= 44.69 && iconviewergifT == String.fromCharCode(65,0);
      }
         gifgoalbgL *= (parseFloat(`${3 * (iconcloseX ? 5 : 4)}`));
         arrowupV = iconviewergifT.length > parseInt(`${gifgoalbgL}`);
      while (3 == (4 ^ iconviewergifT.length) && (gifgoalbgL * parseFloat(`${iconviewergifT.length}`)) == 3.63) {
         gifgoalbgL += parseFloat(`${1}`);
         break;
      }
      footballD += `${1 * station4.length}`;
   }

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
          source={require('./images/icons/middlebrightnessFootballfieldLibjsijniprofiler.png')}
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
   while (5.55 == (basketballiconV * 1.97) && 1.97 == (basketballiconV * stringP)) {
      stringP += parseInt(`${basketballiconV}`) + 2;
      break;
   }
   do {
      iconcurrentmatchH += `${parseInt(`${assist6}`)}`;
      if (iconcurrentmatchH == String.fromCharCode(57,120,108,115,107,0)) {
         break;
      }
   } while (((parseInt(`${stringP}`) / (Math.max(iconcurrentmatchH.length, 6))) == 5 && 4 == (parseInt(`${stringP}`) / 5)) && (iconcurrentmatchH == String.fromCharCode(57,120,108,115,107,0)));

  }

   
  renderSeekbar() {
       let smallsound8 = 3.0;
    let confirmationS = new Map([[String.fromCharCode(118,105,115,105,98,105,108,105,116,121,95,98,95,51,49,0),136], [String.fromCharCode(117,95,49,55,95,108,111,99,97,108,101,0),409]]);
    let dangerQ = String.fromCharCode(104,105,103,104,95,112,95,49,51,0);
    let dicelogoz = false;
    let iconarrowrightw = 2;
    let acceptedw = 2.0;
    let iconarrowleftz = 4.0;
    let moditye = String.fromCharCode(99,95,50,48,95,116,114,97,110,115,117,112,112,0);
    let checkboxY = String.fromCharCode(100,111,99,115,105,122,101,95,117,95,54,52,0);
    let liveendmodallogoA = 5.0;
    let basketballv = new Map([[String.fromCharCode(107,95,50,95,108,105,99,101,110,115,101,0),935], [String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,95,108,95,55,52,0),959]]);
    let iconpipexpandR = String.fromCharCode(99,111,100,101,98,108,111,99,107,115,95,49,95,55,53,0);
      confirmationS[`${liveendmodallogoA}`] = parseInt(`${liveendmodallogoA}`) * 1;

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
   if (3 < (iconarrowrightw * 2)) {
       let basketballhometeams = String.fromCharCode(113,95,53,51,95,99,108,111,115,101,115,0);
       let navigationE = 1.0;
       let arrow2 = 2.0;
       let areao = String.fromCharCode(111,95,52,51,95,108,111,117,100,110,101,115,115,0);
       let nativemodule_ = String.fromCharCode(115,116,97,116,117,115,95,120,95,52,54,0);
      for (let t = 0; t < 2; t++) {
         arrow2 /= Math.max(4, parseFloat(`${areao.length & 2}`));
      }
         basketballhometeams = `${parseInt(`${navigationE}`) | areao.length}`;
       let reactnativeultimatelistviewr = 4.0;
          let mbbidp = 3.0;
          let redcirclebgW = 3.0;
         nativemodule_ += "3";
         mbbidp -= parseInt(`${redcirclebgW}`) ^ parseInt(`${mbbidp}`);
         redcirclebgW /= Math.max(parseFloat(`${parseInt(`${mbbidp}`)}`), 3);
       let circlee = 1.0;
         arrow2 += parseFloat(`${nativemodule_.length}`);
      if (parseInt(`${navigationE}`) == areao.length) {
          let armvao = 3;
          let rocketX = false;
          let previewB = 2.0;
          let refreshborderlessA = 4;
         areao = `${refreshborderlessA << (Math.min(4, Math.abs(2)))}`;
         armvao <<= Math.min(4, Math.abs(parseInt(`${previewB}`)));
         rocketX = !rocketX;
         previewB -= (armvao << (Math.min(2, Math.abs((rocketX ? 1 : 3)))));
         refreshborderlessA <<= Math.min(4, Math.abs(3 >> (Math.min(Math.abs(parseInt(`${previewB}`)), 1))));
      }
         areao += "1";
       let twitterX = 4.0;
       let middlebrightnessZ = 1.0;
      if ((1.97 * arrow2) < 5.27 && (reactnativeultimatelistviewr / 1.97) < 1.23) {
         arrow2 -= parseFloat(`${parseInt(`${navigationE}`)}`);
      }
      while (!basketballhometeams.endsWith(`${arrow2}`)) {
          let activity_ = String.fromCharCode(105,110,116,101,114,108,97,99,101,95,50,95,51,50,0);
          let owngoalj = 4.0;
          let airbnbstarh = 2;
          let nativeexE = 5;
         arrow2 /= Math.max(parseFloat(`${activity_.length | basketballhometeams.length}`), 4);
         activity_ += `${parseInt(`${owngoalj}`) & 1}`;
         owngoalj *= parseInt(`${owngoalj}`);
         airbnbstarh |= 1 - nativeexE;
         nativeexE /= Math.max(1, 3 >> (Math.min(4, Math.abs(nativeexE))));
         break;
      }
       let stylesp = new Map([[String.fromCharCode(117,95,51,52,95,99,104,97,115,101,0),901], [String.fromCharCode(120,95,49,57,95,115,117,98,102,114,97,109,101,115,0),266], [String.fromCharCode(101,95,51,50,95,117,110,99,111,109,112,97,99,116,0),635]]);
       let temperatureo = new Map([[String.fromCharCode(109,97,112,112,101,114,95,98,95,57,0),907], [String.fromCharCode(100,95,51,56,95,116,116,97,100,115,112,0),45], [String.fromCharCode(118,95,56,57,95,105,109,109,117,116,97,98,108,101,0),594]]);
      do {
          let page1 = String.fromCharCode(109,95,56,56,95,115,121,110,111,110,121,109,0);
          let historyz = [244, 566, 160];
         circlee -= areao.length | 2;
         page1 = "1";
         historyz.push(page1.length);
         if (circlee == 4859996.0) {
            break;
         }
      } while ((circlee == 4859996.0) && (Array.from(stylesp.values()).includes(circlee)));
      while (basketballhometeams.startsWith(`${stylesp.size}`)) {
         basketballhometeams = `${basketballhometeams.length >> (Math.min(3, Math.abs(parseInt(`${circlee}`))))}`;
         break;
      }
      liveendmodallogoA -= (parseFloat(`${moditye == String.fromCharCode(122,0) ? areao.length : moditye.length}`));
   }

  }

   
  renderPlayPause() {
       let collectioni = [234, 69];
    let cornerd = false;
    let whiteanimationlive7 = false;
    let predictionlossv = String.fromCharCode(120,95,55,95,116,121,112,105,110,103,0);
    let typingX = 5.0;
    let typingj = String.fromCharCode(98,97,99,107,112,116,114,95,98,95,53,57,0);
    let emojihearta = 3.0;
    let eventsplash0 = String.fromCharCode(115,95,55,50,95,108,97,103,97,114,105,116,104,114,97,99,0);
    let predictionlossg = String.fromCharCode(97,112,112,95,51,95,52,51,0);
    let mbridgeR = 2.0;
    let dependenciesu = [763, 688, 803];
    let binddatasW = String.fromCharCode(97,103,97,105,110,95,115,95,52,54,0);
    let sellmathbackgroundE = 0.0;
   if (mbridgeR < emojihearta) {
      emojihearta -= parseFloat(`${2 - eventsplash0.length}`);
   }
   for (let e = 0; e < 2; e++) {
      typingj += `${parseInt(`${mbridgeR}`) - 2}`;
   }
   do {
      emojihearta *= parseFloat(`${2}`);
      if (emojihearta == 3919501.0) {
         break;
      }
   } while ((emojihearta == 3919501.0) && (2.97 < emojihearta));

    let source =
      this.state.paused === true
        ? require('./images/icons/whatsappCornerkickFcdaebecbcbafcdfceaaeccfeacdb.png')
        : require('./images/icons/refreshStringsLibjsi.png');
    return this.renderControl(
      <Image
        source={source}
        style={VideoPlayerstyles.controls.playPauseIcon}
        resizeMode={'cover'}
      />,
      this.methods.togglePlayPause,
      VideoPlayerstyles.controls.playPause,
    );
   while (2.46 == typingX) {
      typingX -= (parseFloat(`${eventsplash0 == String.fromCharCode(115,0) ? dependenciesu.length : eventsplash0.length}`));
      break;
   }
   if (!dependenciesu.includes(mbridgeR)) {
       let transfer_ = 1.0;
          let backgroundl = String.fromCharCode(110,95,53,57,95,112,97,114,116,105,99,105,112,97,116,105,111,110,0);
          let flagC = 0.0;
          let unimplementedviewQ = [71, 601];
         transfer_ += parseFloat(`${backgroundl.length >> (Math.min(3, Math.abs(parseInt(`${transfer_}`))))}`);
         backgroundl = `${parseInt(`${flagC}`)}`;
         flagC += unimplementedviewQ.length;
         unimplementedviewQ = [parseInt(`${flagC}`)];
         transfer_ *= parseFloat(`${parseInt(`${transfer_}`) << (Math.min(Math.abs(parseInt(`${transfer_}`)), 2))}`);
         transfer_ += parseFloat(`${parseInt(`${transfer_}`)}`);
      mbridgeR *= (parseFloat(`${(cornerd ? 4 : 5) % (Math.max(3, parseInt(`${transfer_}`)))}`));
   }
   do {
       let bootsplashH = String.fromCharCode(104,95,55,50,95,114,101,97,100,109,101,0);
       let previewQ = String.fromCharCode(116,95,54,53,95,112,114,111,109,111,116,101,0);
       let uimanager0 = 4;
       let textZ = false;
      do {
         bootsplashH = `${uimanager0 * 1}`;
         if (bootsplashH.length == 4665808) {
            break;
         }
      } while ((bootsplashH.includes(`${uimanager0}`)) && (bootsplashH.length == 4665808));
      while (bootsplashH.length == 2) {
         uimanager0 *= 3;
         break;
      }
         textZ = !previewQ.endsWith(`${textZ}`);
      if (2 < (5 & uimanager0)) {
          let iconrefresh7 = String.fromCharCode(115,95,53,55,95,118,112,109,116,0);
          let traminif = String.fromCharCode(98,105,116,118,101,99,115,95,56,95,50,53,0);
          let calendar0 = 3;
         uimanager0 -= iconrefresh7.length * calendar0;
         iconrefresh7 = "1";
         traminif = `${(traminif == String.fromCharCode(97,0) ? traminif.length : traminif.length)}`;
      }
         previewQ = `${((textZ ? 3 : 2))}`;
      while (bootsplashH.length > previewQ.length) {
          let fillX = String.fromCharCode(108,95,50,50,95,99,111,110,115,116,114,97,105,110,116,0);
          let redirectS = 5;
          let nodeF = [String.fromCharCode(115,95,54,54,95,114,101,118,105,115,105,111,110,0), String.fromCharCode(98,95,53,95,105,110,105,118,105,116,101,100,0)];
         bootsplashH += `${fillX.length}`;
         fillX += `${redirectS}`;
         redirectS |= 2;
         nodeF.push(2);
         break;
      }
      for (let g = 0; g < 3; g++) {
         bootsplashH = `${((textZ ? 4 : 2) % (Math.max(uimanager0, 1)))}`;
      }
      if ((uimanager0 + 2) >= 1) {
         uimanager0 /= Math.max(4, 3);
      }
      if (2 >= (uimanager0 << (Math.min(Math.abs(2), 1)))) {
         uimanager0 -= 2 ^ bootsplashH.length;
      }
      do {
          let showmore1 = 0;
          let iconarrowleft7 = [118, 76];
          let notificationT = 4.0;
          let iconpointscorew = String.fromCharCode(118,95,52,52,95,116,105,99,107,115,0);
          let terms5 = [String.fromCharCode(111,95,56,48,95,119,105,110,100,111,119,0), String.fromCharCode(113,95,51,49,95,116,101,120,116,117,114,101,100,115,112,0)];
         previewQ += "2";
         showmore1 *= terms5.length;
         iconarrowleft7.push(3);
         notificationT /= Math.max(1, parseFloat(`${showmore1}`));
         iconpointscorew += `${iconpointscorew.length / (Math.max(7, showmore1))}`;
         terms5.push(2);
         if (previewQ == String.fromCharCode(112,49,113,116,107,102,100,101,103,0)) {
            break;
         }
      } while ((bootsplashH != String.fromCharCode(56,0) && previewQ == String.fromCharCode(107,0)) && (previewQ == String.fromCharCode(112,49,113,116,107,102,100,101,103,0)));
          let whiteanimationliver = String.fromCharCode(120,95,53,52,95,104,111,116,0);
          let connectionn = String.fromCharCode(112,95,55,48,95,97,110,111,116,104,101,114,0);
          let awayiconf = 0.0;
         previewQ = `${connectionn.length}`;
         whiteanimationliver += "1";
         connectionn += `${whiteanimationliver.length ^ 1}`;
         awayiconf -= 1;
          let m_titlea = [329, 502];
         textZ = previewQ == String.fromCharCode(89,0);
         m_titlea = [m_titlea.length];
      emojihearta /= Math.max((parseFloat(`${parseInt(`${emojihearta}`) % (Math.max(6, (cornerd ? 4 : 1)))}`)), 5);
      if (1248000.0 == emojihearta) {
         break;
      }
   } while ((2.64 > (5.43 * emojihearta) && 5.43 > (parseFloat(`${predictionlossg.length}`) * emojihearta)) && (1248000.0 == emojihearta));

  }

   
  renderTitle() {
       let trophyj = String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,54,95,57,51,0);
    let qaagW = String.fromCharCode(112,95,53,55,95,114,108,111,116,116,105,101,99,111,109,109,111,110,0);
    let roomI = new Map([[String.fromCharCode(112,105,120,108,101,116,95,115,95,54,56,0),888], [String.fromCharCode(100,105,97,103,111,110,97,108,95,116,95,52,56,0),385]]);
    let predictionactivec = String.fromCharCode(106,95,51,48,95,115,105,108,101,110,99,101,100,0);
    let selectq = new Map([[String.fromCharCode(118,95,52,48,95,115,112,101,101,120,0),704], [String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,103,95,54,56,0),491]]);
    let overc = 1;
    let z_centerS = String.fromCharCode(105,110,115,101,114,116,105,111,110,115,95,113,95,49,49,0);
    let iconbell7 = 4.0;
    let macauC = String.fromCharCode(116,95,51,56,95,100,101,97,99,116,0);
   while (qaagW.endsWith(`${selectq.size}`)) {
      qaagW = `${overc}`;
      break;
   }
   for (let n = 0; n < 1; n++) {
       let baiduadsb = 3.0;
       let l_animationL = String.fromCharCode(100,101,109,111,95,103,95,55,53,0);
       let homeloadingP = String.fromCharCode(104,95,56,95,109,105,120,0);
       let cross8 = [442, 76, 886];
          let searchbarN = 0.0;
         cross8 = [2 | cross8.length];
         searchbarN /= Math.max(1, parseFloat(`${1 - parseInt(`${searchbarN}`)}`));
      for (let n = 0; n < 2; n++) {
         l_animationL = `${parseInt(`${baiduadsb}`) - 1}`;
      }
         l_animationL += `${homeloadingP.length}`;
         homeloadingP += `${cross8.length}`;
      do {
         homeloadingP += "2";
         if (2296320 == homeloadingP.length) {
            break;
         }
      } while ((2296320 == homeloadingP.length) && (3 < (homeloadingP.length << (Math.min(Math.abs(5), 5)))));
         baiduadsb *= l_animationL.length - parseInt(`${baiduadsb}`);
         homeloadingP = "3";
      for (let z = 0; z < 1; z++) {
         homeloadingP = `${(homeloadingP == String.fromCharCode(88,0) ? homeloadingP.length : parseInt(`${baiduadsb}`))}`;
      }
         l_animationL = "2";
         baiduadsb -= l_animationL.length;
         cross8 = [(homeloadingP == String.fromCharCode(102,0) ? homeloadingP.length : cross8.length)];
         l_animationL = `${homeloadingP.length ^ l_animationL.length}`;
      predictionactivec = `${(String.fromCharCode(88,0) == qaagW ? qaagW.length : parseInt(`${baiduadsb}`))}`;
   }

    if (this.opts.title) {

   if (!z_centerS.endsWith(`${qaagW.length}`)) {
      z_centerS = `${(String.fromCharCode(107,0) == qaagW ? qaagW.length : predictionactivec.length)}`;
   }
      trophyj += `${1 << (Math.min(1, Math.abs(overc)))}`;
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
   do {
      overc ^= 2 << (Math.min(1, qaagW.length));
      if (overc == 2887990) {
         break;
      }
   } while ((overc < 5) && (overc == 2887990));
   while ((z_centerS.length / (Math.max(10, overc))) == 5 && (z_centerS.length / (Math.max(3, overc))) == 5) {
      overc -= selectq.size + 2;
      break;
   }

    }

    return null;
      z_centerS = "1";
   for (let f = 0; f < 1; f++) {
      qaagW += `${(String.fromCharCode(54,0) == z_centerS ? z_centerS.length : predictionactivec.length)}`;
   }

  }

   
  renderTimer() {
       let regengt = String.fromCharCode(103,95,49,49,0);
    let configureh = 5.0;
    let mathH = new Map([[String.fromCharCode(116,101,108,95,48,95,55,48,0),919], [String.fromCharCode(112,114,101,116,99,104,95,48,95,56,0),841], [String.fromCharCode(108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,95,105,95,53,52,0),213]]);
    let basketballplayerplaceholdery = 2;
    let orangej = String.fromCharCode(105,95,57,48,95,105,110,102,117,114,97,0);
    let questiconO = 2.0;
    let sigmobS = String.fromCharCode(98,95,52,95,112,104,114,97,115,101,115,0);
    let rewardH = String.fromCharCode(118,95,57,95,99,104,105,108,108,0);
   while (1 > orangej.length) {
      mathH[sigmobS] = 3;
      break;
   }
       let defaultlogom = String.fromCharCode(112,117,98,105,99,95,121,95,54,50,0);
         defaultlogom = `${defaultlogom.length & 1}`;
         defaultlogom = `${defaultlogom.length}`;
         defaultlogom = `${defaultlogom.length}`;
      orangej = `${basketballplayerplaceholdery ^ 1}`;
      questiconO -= sigmobS.length;
   do {
      sigmobS += `${parseInt(`${configureh}`)}`;
      if (String.fromCharCode(116,116,114,0) == sigmobS) {
         break;
      }
   } while ((sigmobS.length <= rewardH.length) && (String.fromCharCode(116,116,114,0) == sigmobS));
      questiconO -= (String.fromCharCode(67,0) == orangej ? sigmobS.length : orangej.length);

    return this.renderControl(
      <Text style={VideoPlayerstyles.controls.timerText}>
        {this.calculateTime()}
      </Text>,
      this.methods.toggleTimer,
      VideoPlayerstyles.controls.timer,
    );
   do {
       let awayteamfieldY = 2.0;
       let predictionarrowr = String.fromCharCode(116,114,105,97,110,103,108,101,95,114,95,52,53,0);
         awayteamfieldY /= Math.max(parseFloat(`${predictionarrowr.length - parseInt(`${awayteamfieldY}`)}`), 2);
         awayteamfieldY *= parseFloat(`${predictionarrowr.length >> (Math.min(Math.abs(1), 3))}`);
      while (1.45 > (3.56 / (Math.max(10, awayteamfieldY)))) {
         predictionarrowr = `${parseInt(`${awayteamfieldY}`)}`;
         break;
      }
          let libjsijniprofilerh = new Map([[String.fromCharCode(102,95,51,95,117,110,108,105,109,105,116,101,100,0),String.fromCharCode(110,95,54,50,95,97,118,100,101,118,105,99,101,0)], [String.fromCharCode(105,95,49,52,95,97,99,99,114,117,101,100,0),String.fromCharCode(97,95,53,52,95,108,117,109,97,0)], [String.fromCharCode(108,95,54,53,95,99,117,98,105,99,0),String.fromCharCode(97,95,55,52,95,101,120,99,108,117,100,101,100,0)]]);
          let footballfielde = [210, 637, 887];
         predictionarrowr += `${(predictionarrowr == String.fromCharCode(118,0) ? libjsijniprofilerh.size : predictionarrowr.length)}`;
         libjsijniprofilerh[`${footballfielde.length}`] = footballfielde.length;
       let borderlessk = [String.fromCharCode(98,95,57,54,95,99,111,97,108,101,115,99,101,0), String.fromCharCode(97,98,117,115,101,95,102,95,51,51,0)];
      do {
          let topicm = new Map([[String.fromCharCode(117,112,99,97,108,108,95,101,95,53,53,0),String.fromCharCode(110,95,55,55,95,98,99,100,117,105,110,116,0)], [String.fromCharCode(114,95,48,95,118,97,114,109,97,115,107,0),String.fromCharCode(105,114,97,110,100,95,107,95,50,52,0)]]);
          let selectionk = 2.0;
          let transferU = 1.0;
          let minimizeV = String.fromCharCode(117,95,50,56,95,108,111,111,112,115,0);
         predictionarrowr = `${parseInt(`${awayteamfieldY}`)}`;
         topicm = new Map([[`${transferU}`, 2 << (Math.min(2, minimizeV.length))]]);
         selectionk /= Math.max(parseInt(`${transferU}`) ^ 3, 2);
         minimizeV += "3";
         if (predictionarrowr == String.fromCharCode(112,116,108,52,122,54,0)) {
            break;
         }
      } while ((predictionarrowr == String.fromCharCode(112,116,108,52,122,54,0)) && (4 >= (4 << (Math.min(5, borderlessk.length))) || 5 >= (borderlessk.length << (Math.min(Math.abs(4), 5)))));
      configureh -= (String.fromCharCode(71,0) == regengt ? regengt.length : orangej.length);
      if (configureh == 1734917.0) {
         break;
      }
   } while ((configureh == 1734917.0) && (1 == (sigmobS.length - parseInt(`${configureh}`)) && 1 == (1 * sigmobS.length)));
      orangej = `${mathH.size}`;
      mathH[rewardH] = 2;
       let favicons = 3.0;
       let iconviewergif8 = String.fromCharCode(121,95,53,51,95,100,101,99,111,100,101,114,105,110,105,116,0);
      for (let k = 0; k < 2; k++) {
         favicons += parseFloat(`${iconviewergif8.length}`);
      }
          let scorepopsound9 = false;
          let recommendationt = 4;
         favicons /= Math.max(4, parseFloat(`${2}`));
         scorepopsound9 = 56 >= recommendationt || scorepopsound9;
         recommendationt |= ((scorepopsound9 ? 5 : 4) & recommendationt);
         favicons -= parseFloat(`${2 | iconviewergif8.length}`);
          let round6 = String.fromCharCode(108,95,50,53,95,112,117,98,105,99,0);
          let unimplementedviewk = String.fromCharCode(99,104,97,114,99,111,110,118,95,110,95,50,51,0);
          let videovarK = false;
         favicons /= Math.max(parseFloat(`${unimplementedviewk.length & iconviewergif8.length}`), 5);
         round6 = `${(round6.length & (videovarK ? 2 : 2))}`;
         unimplementedviewk += `${(round6 == String.fromCharCode(57,0) ? (videovarK ? 2 : 2) : round6.length)}`;
      if ((3.38 + favicons) <= 5.75) {
         favicons += parseFloat(`${3}`);
      }
         favicons += parseFloat(`${parseInt(`${favicons}`) | 3}`);
      questiconO *= parseInt(`${configureh}`);
       let whatsappj = 4.0;
         whatsappj += 2 >> (Math.min(Math.abs(parseInt(`${whatsappj}`)), 3));
          let crossn = 2.0;
          let matches5 = 1.0;
          let tailY = 1.0;
         whatsappj /= Math.max(2, parseInt(`${matches5}`) + 2);
         crossn /= Math.max(parseFloat(`${parseInt(`${tailY}`)}`), 2);
         matches5 *= parseFloat(`${parseInt(`${crossn}`)}`);
         tailY /= Math.max(2, 3);
      while (2.71 >= (4.99 * whatsappj)) {
         whatsappj *= parseInt(`${whatsappj}`) + parseInt(`${whatsappj}`);
         break;
      }
      basketballplayerplaceholdery >>= Math.min(2, Math.abs(parseInt(`${configureh}`)));

  }

   
  renderLoader() {
       let libpangleflippedp = [529, 211, 456];
    let setting6 = [714, 288];
    let goallogoR = 3;
    let layout9 = 0;
    let playercommonp = String.fromCharCode(116,95,57,53,95,121,118,116,111,117,121,118,121,0);
    let iconmegaphoneu = String.fromCharCode(97,95,49,48,48,95,116,120,116,0);
    let leaguep = String.fromCharCode(115,105,116,101,109,97,112,95,111,95,51,52,0);
   while (5 >= goallogoR) {
       let lineo = String.fromCharCode(100,105,97,103,110,111,115,116,105,99,115,95,51,95,55,48,0);
       let pagination6 = false;
          let resendW = 5;
         pagination6 = !pagination6;
         resendW -= resendW | resendW;
         lineo += `${lineo.length}`;
          let privatechatbgH = 5;
         lineo = "3";
         privatechatbgH %= Math.max(3, 1 - privatechatbgH);
         lineo = `${(lineo == String.fromCharCode(68,0) ? (pagination6 ? 2 : 2) : lineo.length)}`;
         pagination6 = (91 > ((!pagination6 ? lineo.length : 91) << (Math.min(lineo.length, 3))));
      while (lineo.endsWith(`${pagination6}`)) {
         lineo = `${lineo.length}`;
         break;
      }
      goallogoR %= Math.max(((pagination6 ? 1 : 4) % (Math.max(5, layout9))), 3);
      break;
   }
      goallogoR ^= 1 | goallogoR;

    if (this.state.loading) {

       let librrcf = new Map([[String.fromCharCode(105,110,116,101,114,110,97,108,95,117,95,49,53,0),String.fromCharCode(109,95,48,95,102,105,114,115,116,108,121,0)], [String.fromCharCode(106,95,50,52,95,118,112,105,110,116,114,97,112,114,101,100,0),String.fromCharCode(109,97,110,105,112,117,108,97,116,111,114,95,109,95,56,51,0)], [String.fromCharCode(121,95,56,55,95,97,98,117,102,102,101,114,115,105,110,107,0),String.fromCharCode(98,95,55,50,95,121,117,118,99,111,110,102,105,103,105,109,97,103,101,0)]]);
       let runtimeK = 5.0;
       let reminder6 = 1.0;
         runtimeK += librrcf.size << (Math.min(Math.abs(3), 1));
          let middleL = false;
         reminder6 += parseInt(`${reminder6}`) + 3;
         middleL = (middleL ? middleL : middleL);
      if (librrcf[`${runtimeK}`] != null) {
          let vipsportE = true;
          let gift0 = 1.0;
         librrcf[`${gift0}`] = parseInt(`${gift0}`);
         vipsportE = (vipsportE ? vipsportE : !vipsportE);
      }
      for (let o = 0; o < 3; o++) {
         runtimeK -= parseInt(`${runtimeK}`);
      }
      do {
          let layoutC = 5.0;
          let icontransferclubF = 0.0;
         runtimeK += parseInt(`${reminder6}`) >> (Math.min(Math.abs(2), 2));
         layoutC -= parseFloat(`${parseInt(`${icontransferclubF}`) >> (Math.min(Math.abs(parseInt(`${layoutC}`)), 1))}`);
         icontransferclubF *= parseInt(`${layoutC}`);
         if (2451895.0 == runtimeK) {
            break;
         }
      } while ((2451895.0 == runtimeK) && (3.58 == reminder6));
         reminder6 += 3 & parseInt(`${runtimeK}`);
      for (let w = 0; w < 2; w++) {
         runtimeK -= librrcf.size + parseInt(`${runtimeK}`);
      }
         runtimeK /= Math.max(librrcf.size, 2);
      if (2 <= librrcf.size) {
         librrcf[`${runtimeK}`] = librrcf.size / (Math.max(9, parseInt(`${runtimeK}`)));
      }
      goallogoR |= (String.fromCharCode(102,0) == playercommonp ? goallogoR : playercommonp.length);
      goallogoR >>= Math.min(Math.abs((String.fromCharCode(54,0) == leaguep ? setting6.length : leaguep.length)), 5);
      return (
        <View style={VideoPlayerstyles.loader.container}>
          <Animated.Image
            source={require('./images/icons/jingdongCross.png')}
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
      iconmegaphoneu = `${layout9 * 1}`;
   do {
      setting6.push(layout9 + 3);
      if (3523088 == setting6.length) {
         break;
      }
   } while ((3523088 == setting6.length) && (!setting6.includes(goallogoR)));

    }
    return null;
   for (let w = 0; w < 1; w++) {
       let empty4 = 2.0;
       let iconwatchc = String.fromCharCode(100,95,55,51,95,99,109,97,99,0);
         iconwatchc = "1";
         empty4 -= parseInt(`${empty4}`) | iconwatchc.length;
      if (iconwatchc.length < 4) {
         empty4 /= Math.max((String.fromCharCode(48,0) == iconwatchc ? iconwatchc.length : parseInt(`${empty4}`)), 3);
      }
          let singleO = [String.fromCharCode(106,95,49,49,0), String.fromCharCode(116,105,109,101,111,117,116,95,112,95,50,51,0)];
         iconwatchc = `${parseInt(`${empty4}`) ^ 2}`;
         singleO = [1 - singleO.length];
         empty4 *= parseInt(`${empty4}`) + 3;
         iconwatchc += `${(iconwatchc == String.fromCharCode(121,0) ? parseInt(`${empty4}`) : iconwatchc.length)}`;
      iconmegaphoneu = `${(iconmegaphoneu == String.fromCharCode(52,0) ? iconmegaphoneu.length : playercommonp.length)}`;
   }
      setting6 = [1 | libpangleflippedp.length];

  }

  renderError() {
       let iconclosewhitewithbg3 = String.fromCharCode(102,114,97,109,101,105,110,102,111,95,51,95,56,0);
    let t_playerU = String.fromCharCode(105,110,115,117,102,102,105,99,105,101,110,116,95,53,95,53,48,0);
    let yellowtored6 = 4.0;
    let notificationfillemptyw = 0.0;
    let fielde = 0.0;
    let bgvipsporti = 5;
    let iconpointscorev = true;
    let profilepic7 = 5.0;
    let foreground3 = String.fromCharCode(98,97,110,100,95,114,95,53,55,0);
    let defaultroombg8 = 4.0;
    let bggradientY = String.fromCharCode(114,101,112,114,101,112,97,114,101,95,49,95,49,48,0);
    let toponi = String.fromCharCode(115,105,103,104,95,113,95,53,52,0);
    let injuryE = true;
    let mbridgeJ = String.fromCharCode(105,110,115,116,95,100,95,49,55,0);
    let classesL = 3.0;
   do {
      fielde += ((iconpointscorev ? 5 : 4) * parseInt(`${profilepic7}`));
      if (269704.0 == fielde) {
         break;
      }
   } while (((fielde - 2.40) > 2.26) && (269704.0 == fielde));
   for (let n = 0; n < 3; n++) {
      bgvipsporti <<= Math.min(4, Math.abs(parseInt(`${notificationfillemptyw}`)));
   }

    if (this.state.error) {

   for (let c = 0; c < 1; c++) {
       let morev = String.fromCharCode(102,95,57,50,0);
       let shootnogoalo = 1.0;
       let basketballtrophys = String.fromCharCode(99,95,49,49,95,102,114,97,109,101,105,110,102,111,0);
       let feedbacky = 2;
      if (morev.length < parseInt(`${shootnogoalo}`)) {
         morev = `${feedbacky & basketballtrophys.length}`;
      }
      for (let w = 0; w < 3; w++) {
          let turndownz = 1.0;
          let sportI = String.fromCharCode(99,95,54,56,95,112,114,111,112,111,114,116,105,111,110,97,108,0);
         basketballtrophys += `${parseInt(`${shootnogoalo}`)}`;
         turndownz -= parseInt(`${turndownz}`) << (Math.min(Math.abs(1), 2));
         sportI += `${sportI.length + parseInt(`${turndownz}`)}`;
      }
          let grayb = 0.0;
         shootnogoalo -= parseFloat(`${feedbacky - basketballtrophys.length}`);
         grayb += parseFloat(`${parseInt(`${grayb}`) + 3}`);
      for (let s = 0; s < 2; s++) {
         morev = `${(String.fromCharCode(111,0) == basketballtrophys ? basketballtrophys.length : feedbacky)}`;
      }
       let iconpipshrinkL = new Map([[String.fromCharCode(112,97,115,115,112,104,114,97,115,101,95,101,95,49,55,0),String.fromCharCode(118,95,56,48,95,100,105,114,110,97,109,101,0)], [String.fromCharCode(107,95,50,57,95,115,117,98,98,108,111,99,107,0),String.fromCharCode(116,95,52,53,95,99,97,110,99,101,108,108,97,116,105,111,110,0)]]);
       let defaultbasketballbgt = 3;
       let refresha = 4;
      for (let g = 0; g < 3; g++) {
         defaultbasketballbgt %= Math.max(3, 1 & iconpipshrinkL.size);
      }
          let membershipp = 4.0;
         basketballtrophys += `${iconpipshrinkL.size}`;
         membershipp -= parseFloat(`${3}`);
      if (refresha == 3) {
         refresha *= (morev == String.fromCharCode(77,0) ? morev.length : feedbacky);
      }
         feedbacky &= 3;
         defaultbasketballbgt += morev.length & parseInt(`${shootnogoalo}`);
      do {
         defaultbasketballbgt &= iconpipshrinkL.size;
         if (3048491 == defaultbasketballbgt) {
            break;
         }
      } while ((2 <= (morev.length << (Math.min(3, Math.abs(defaultbasketballbgt)))) || (morev.length << (Math.min(Math.abs(2), 3))) <= 2) && (3048491 == defaultbasketballbgt));
      iconclosewhitewithbg3 += `${parseInt(`${fielde}`) % 2}`;
   }
   while (bgvipsporti == fielde) {
       let homeinactiveP = String.fromCharCode(115,116,114,101,101,116,95,114,95,57,0);
       let yellowanimationliveJ = 4.0;
       let iconfeedback5 = String.fromCharCode(103,95,53,51,95,97,99,117,116,111,102,102,0);
       let analyticsj = 0.0;
       let target1 = 4.0;
      while (2.62 >= (analyticsj - iconfeedback5.length)) {
         iconfeedback5 += `${parseInt(`${yellowanimationliveJ}`) % (Math.max(parseInt(`${analyticsj}`), 7))}`;
         break;
      }
         yellowanimationliveJ -= parseInt(`${yellowanimationliveJ}`);
      if (3.91 < target1) {
         analyticsj *= 3;
      }
          let matchinactivem = String.fromCharCode(108,95,56,53,95,100,113,117,111,116,101,0);
          let positionfield1 = String.fromCharCode(107,95,54,51,95,112,111,115,101,0);
          let pageQ = false;
         yellowanimationliveJ -= 1 - iconfeedback5.length;
         matchinactivem = `${(positionfield1 == String.fromCharCode(116,0) ? positionfield1.length : (pageQ ? 2 : 4))}`;
         pageQ = (74 < (matchinactivem.length << (Math.min(5, Math.abs((!pageQ ? matchinactivem.length : 74))))));
          let constantsP = true;
         target1 /= Math.max(4, parseFloat(`${parseInt(`${analyticsj}`) * 3}`));
         constantsP = (!constantsP ? constantsP : constantsP);
      for (let h = 0; h < 1; h++) {
         target1 /= Math.max(1, parseFloat(`${homeinactiveP.length}`));
      }
         target1 += parseFloat(`${parseInt(`${yellowanimationliveJ}`)}`);
         target1 += parseFloat(`${parseInt(`${analyticsj}`)}`);
         iconfeedback5 += `${parseInt(`${analyticsj}`) & parseInt(`${target1}`)}`;
      for (let j = 0; j < 3; j++) {
          let teamdetailsbgH = 2.0;
          let moonf = [569, 787];
          let yellow8 = [497, 723, 84];
         target1 -= parseFloat(`${parseInt(`${analyticsj}`)}`);
         teamdetailsbgH *= parseInt(`${teamdetailsbgH}`) & 3;
         moonf = [parseInt(`${teamdetailsbgH}`) % (Math.max(moonf.length, 2))];
         yellow8 = [parseInt(`${teamdetailsbgH}`) % (Math.max(yellow8.length, 5))];
      }
       let blackr = 2.0;
       let icontransferclubY = 1.0;
       let coreK = String.fromCharCode(104,112,101,108,95,104,95,55,52,0);
      if (homeinactiveP != String.fromCharCode(102,0)) {
         coreK = `${parseInt(`${target1}`)}`;
      }
      for (let k = 0; k < 2; k++) {
         iconfeedback5 += `${parseInt(`${blackr}`) << (Math.min(Math.abs(parseInt(`${analyticsj}`)), 1))}`;
      }
      do {
         target1 *= parseFloat(`${3}`);
         if (1449868.0 == target1) {
            break;
         }
      } while ((1449868.0 == target1) && (target1 == 5.80));
      bgvipsporti += parseInt(`${yellowanimationliveJ}`);
      break;
   }
      return (
        <SafeAreaView style={VideoPlayerstyles.error.container}>
          <TouchableOpacity onPress={() => this.reloadPlayer()}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('./images/icons/sendLessUpgrade.png')}
                style={VideoPlayerstyles.error.icon}
              />
              <Text style={VideoPlayerstyles.error.text}>影片加载失败</Text>
              <Text style={VideoPlayerstyles.error.text}>再次点击重新加载</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      );
   while (profilepic7 <= yellowtored6) {
      yellowtored6 += parseFloat(`${foreground3.length}`);
      break;
   }
       let inouttargetredg = new Map([[String.fromCharCode(115,122,97,98,111,95,122,95,56,48,0),String.fromCharCode(122,95,51,49,95,113,109,98,108,0)], [String.fromCharCode(118,95,52,52,95,99,114,101,97,116,111,114,0),String.fromCharCode(121,95,55,54,95,99,111,109,112,114,101,115,115,0)], [String.fromCharCode(115,117,112,101,114,110,111,100,101,95,112,95,55,50,0),String.fromCharCode(115,97,102,97,114,121,95,103,95,57,55,0)]]);
         inouttargetredg[`${inouttargetredg.size}`] = inouttargetredg.size;
      if (inouttargetredg.size < 3) {
          let libjsijniprofilerI = 1.0;
          let filterP = new Map([[String.fromCharCode(97,118,103,98,108,117,114,95,113,95,50,53,0),String.fromCharCode(117,95,53,51,95,116,114,97,110,115,102,101,114,97,98,108,101,0)], [String.fromCharCode(107,95,56,54,95,116,116,114,105,98,117,116,101,100,0),String.fromCharCode(118,101,99,116,95,98,95,53,51,0)]]);
          let drag_ = 0.0;
          let typingloadingV = String.fromCharCode(100,101,116,101,99,116,105,110,103,95,54,95,54,49,0);
          let manifestX = 5.0;
         inouttargetredg[`${drag_}`] = parseInt(`${drag_}`);
         libjsijniprofilerI += filterP.size >> (Math.min(Math.abs(3), 2));
         filterP = new Map([[`${filterP.size}`, 1 - filterP.size]]);
         typingloadingV += "2";
         manifestX /= Math.max(filterP.size / 3, 5);
      }
       let iconedito = 5.0;
       let privilege2 = 4.0;
      fielde /= Math.max(5, t_playerU.length / (Math.max(iconclosewhitewithbg3.length, 3)));

    }
    return null;
      t_playerU += `${parseInt(`${profilepic7}`)}`;
   do {
      bgvipsporti |= (iconclosewhitewithbg3 == String.fromCharCode(95,0) ? iconclosewhitewithbg3.length : parseInt(`${yellowtored6}`));
      if (bgvipsporti == 2096530) {
         break;
      }
   } while ((1.93 > (bgvipsporti + notificationfillemptyw)) && (bgvipsporti == 2096530));

  }

  async reloadPlayer() {
       let internetQ = false;
    let anytimes = true;
    let storex = String.fromCharCode(121,95,56,56,95,115,117,98,109,118,0);
    let vietnami = true;
    let philippinesU = 2.0;
    let whitetickG = new Map([[String.fromCharCode(103,116,101,115,116,95,107,95,53,55,0),String.fromCharCode(98,97,99,107,98,114,111,117,110,100,95,99,95,55,52,0)], [String.fromCharCode(114,101,97,114,95,110,95,56,54,0),String.fromCharCode(122,95,49,54,95,118,112,100,115,112,0)]]);
    let update_vpQ = [523, 228, 616];
    let whitetick0 = String.fromCharCode(115,104,111,119,95,52,95,51,55,0);
    let private_ku4 = 2.0;
    let trophyQ = new Map([[String.fromCharCode(112,95,57,50,95,103,117,105,100,101,0),true ], [String.fromCharCode(99,101,110,116,114,101,95,100,95,50,48,0),true ], [String.fromCharCode(108,95,55,55,95,118,101,110,100,111,114,0),true ]]);
    let streamings = 4.0;
    let sharemodalt = new Map([[String.fromCharCode(99,111,110,115,116,114,97,105,110,101,100,95,101,95,55,51,0),888], [String.fromCharCode(120,109,108,95,106,95,49,57,0),894]]);
   if (5 < whitetickG.size && 3 < (5 / (Math.max(6, whitetickG.size)))) {
      vietnami = (18 == ((vietnami ? update_vpQ.length : 18) << (Math.min(update_vpQ.length, 5))));
   }
   while ((whitetick0.length | 3) <= 3) {
       let defaultlogoV = true;
       let sharemodalb = false;
         defaultlogoV = sharemodalb;
         defaultlogoV = (defaultlogoV ? sharemodalb : defaultlogoV);
         sharemodalb = (defaultlogoV ? !sharemodalb : !defaultlogoV);
          let ewardedo = new Map([[String.fromCharCode(110,111,110,98,108,111,99,107,105,110,103,95,98,95,51,55,0),614], [String.fromCharCode(115,112,97,110,115,95,119,95,55,56,0),182]]);
          let orangetickZ = 1;
          let othermatchdetailbgR = 4;
         sharemodalb = null != ewardedo[`${othermatchdetailbgR}`];
         ewardedo[`${orangetickZ}`] = 2;
         orangetickZ &= 3;
      for (let n = 0; n < 3; n++) {
          let privacyI = [String.fromCharCode(100,120,110,100,99,95,105,95,57,51,0), String.fromCharCode(111,112,117,115,102,105,108,101,95,115,95,55,56,0)];
          let spinnerW = new Map([[String.fromCharCode(119,95,57,56,95,101,97,103,97,105,110,0),825], [String.fromCharCode(100,105,102,102,120,95,53,95,56,50,0),318]]);
          let gmailj = String.fromCharCode(117,110,105,119,103,116,95,104,95,50,57,0);
          let mapbuffer2 = 4.0;
         sharemodalb = privacyI.length < 93 || 93 < spinnerW.size;
         privacyI.push((gmailj == String.fromCharCode(119,0) ? parseInt(`${mapbuffer2}`) : gmailj.length));
         spinnerW = new Map([[gmailj, 1 ^ parseInt(`${mapbuffer2}`)]]);
      }
      for (let h = 0; h < 2; h++) {
         defaultlogoV = !sharemodalb;
      }
      philippinesU -= parseFloat(`${parseInt(`${philippinesU}`) * parseInt(`${streamings}`)}`);
      break;
   }
   while (storex.length >= 1) {
      storex += `${parseInt(`${private_ku4}`)}`;
      break;
   }
   do {
      private_ku4 /= Math.max(1, (parseFloat(`${(vietnami ? 1 : 2) % (Math.max(parseInt(`${private_ku4}`), 9))}`)));
      if (3040072.0 == private_ku4) {
         break;
      }
   } while ((3040072.0 == private_ku4) && ((private_ku4 / 3.36) >= 3.62 || private_ku4 >= 3.36));
   for (let u = 0; u < 1; u++) {
      anytimes = (internetQ ? anytimes : internetQ);
   }
   while (trophyQ[`${update_vpQ.length}`] == null) {
      update_vpQ.push((String.fromCharCode(57,0) == storex ? storex.length : trophyQ.size));
      break;
   }
   do {
      update_vpQ = [(whitetick0 == String.fromCharCode(79,0) ? whitetickG.size : whitetick0.length)];
      if (517085 == update_vpQ.length) {
         break;
      }
   } while ((517085 == update_vpQ.length) && (2 > (update_vpQ.length % 2) || (2.9 * philippinesU) > 5.29));
   if ((storex.length << (Math.min(4, Math.abs(whitetickG.size)))) > 4 && 4 > (whitetickG.size << (Math.min(storex.length, 3)))) {
       let cancel7 = 0.0;
       let icontransferclubc = String.fromCharCode(120,105,112,104,95,100,95,52,51,0);
       let selected0 = new Map([[String.fromCharCode(99,111,117,108,100,95,104,95,53,48,0),657], [String.fromCharCode(99,117,115,116,111,109,105,122,101,95,101,95,57,0),108]]);
      do {
         selected0 = new Map([[`${selected0.size}`, 3]]);
         if (selected0.size == 2324289) {
            break;
         }
      } while ((selected0.size == 2324289) && (selected0.size < icontransferclubc.length));
      do {
         icontransferclubc = `${selected0.size + 2}`;
         if (icontransferclubc.length == 112853) {
            break;
         }
      } while ((icontransferclubc.length == 112853) && (selected0.size <= icontransferclubc.length));
      if ((selected0.size + icontransferclubc.length) == 3) {
         selected0[icontransferclubc] = icontransferclubc.length - selected0.size;
      }
      while (!icontransferclubc.startsWith(`${selected0.size}`)) {
         selected0 = new Map([[`${cancel7}`, icontransferclubc.length + 3]]);
         break;
      }
      if (icontransferclubc.startsWith(`${selected0.size}`)) {
         icontransferclubc = `${icontransferclubc.length / 1}`;
      }
          let predictionwin8 = 4.0;
         cancel7 /= Math.max(icontransferclubc.length >> (Math.min(3, Math.abs(parseInt(`${cancel7}`)))), 5);
         predictionwin8 -= parseFloat(`${parseInt(`${predictionwin8}`) + 2}`);
      if (!Array.from(selected0.keys()).includes(`${cancel7}`)) {
         cancel7 /= Math.max(icontransferclubc.length, 5);
      }
         selected0[`${cancel7}`] = 1 >> (Math.min(4, icontransferclubc.length));
      do {
          let playe = 0.0;
          let assetsJ = 0.0;
         cancel7 += parseInt(`${cancel7}`) & 2;
         playe += parseFloat(`${parseInt(`${assetsJ}`) << (Math.min(1, Math.abs(3)))}`);
         assetsJ /= Math.max(1, parseFloat(`${2 ^ parseInt(`${playe}`)}`));
         if (cancel7 == 134674.0) {
            break;
         }
      } while ((1.99 == (5.1 * cancel7) && (4 * parseInt(`${cancel7}`)) == 3) && (cancel7 == 134674.0));
      whitetickG = new Map([[`${philippinesU}`, 3 + icontransferclubc.length]]);
   }
   if ((parseInt(`${private_ku4}`) / (Math.max(update_vpQ.length, 6))) < 5 || 4.97 < (private_ku4 / (Math.max(parseFloat(`${update_vpQ.length}`), 4)))) {
      private_ku4 /= Math.max(1, (parseFloat(`${(vietnami ? 2 : 2) % (Math.max(4, storex.length))}`)));
   }

    this.setState({source: null});
    this.setState({source: this.props.source, error: false});
  }

  async playVideo() {
       let goalR = String.fromCharCode(118,95,51,48,95,112,104,112,0);
    let dangerp = true;
    let stringV = [String.fromCharCode(114,101,109,97,112,95,117,95,52,57,0), String.fromCharCode(100,118,118,105,100,101,111,95,113,95,57,0), String.fromCharCode(100,95,49,54,95,99,108,111,99,107,100,114,105,102,116,0)];
    let scorepopsoundb = String.fromCharCode(117,95,55,53,95,98,111,117,110,100,115,112,101,99,105,102,105,99,0);
    let historye = [407, 165, 242];
    let homeactivem = String.fromCharCode(111,110,118,101,114,115,97,116,105,111,110,95,110,95,53,50,0);
    let dependencyf = String.fromCharCode(105,100,97,116,95,111,95,51,57,0);
    let iconchatsendr = true;
    let iconbellactive3 = 0.0;
    let iconedit1 = String.fromCharCode(112,117,114,103,101,95,104,95,56,56,0);
    let vipsportI = 5.0;
      iconchatsendr = (homeactivem.length >> (Math.min(3, scorepopsoundb.length))) < 3;
   if (2 <= scorepopsoundb.length || !iconchatsendr) {
      scorepopsoundb = `${parseInt(`${iconbellactive3}`)}`;
   }
      iconchatsendr = homeactivem.includes(`${iconchatsendr}`);
      stringV = [3];
       let libsgcore3 = [457, 765, 68];
       let executorx = 3;
       let inactivev = String.fromCharCode(116,101,108,101,103,114,97,112,104,95,99,95,56,51,0);
         executorx %= Math.max(executorx / (Math.max(1, inactivev.length)), 3);
       let downarrowR = true;
       let rankF = new Map([[String.fromCharCode(107,95,51,49,95,120,103,97,115,0),415], [String.fromCharCode(113,95,49,52,95,114,108,112,0),383], [String.fromCharCode(103,101,116,115,111,99,107,97,100,100,114,95,49,95,52,56,0),249]]);
       let shirtD = new Map([[String.fromCharCode(101,110,99,114,121,112,116,101,100,95,107,95,55,56,0),960], [String.fromCharCode(112,95,50,52,95,109,105,120,105,110,0),96], [String.fromCharCode(99,98,115,110,105,100,95,48,95,52,48,0),596]]);
      do {
         executorx += 1 ^ inactivev.length;
         if (1321707 == executorx) {
            break;
         }
      } while ((1321707 == executorx) && (3 < (rankF.size - 3) || (executorx - rankF.size) < 3));
          let iconshareC = 4;
          let orangetick5 = String.fromCharCode(110,95,52,57,95,97,108,112,104,97,108,101,115,115,0);
          let themex = 5.0;
         downarrowR = 43.9 == themex;
         iconshareC >>= Math.min(orangetick5.length, 4);
         orangetick5 += `${(orangetick5 == String.fromCharCode(69,0) ? iconshareC : orangetick5.length)}`;
         themex /= Math.max(parseFloat(`${orangetick5.length + 2}`), 3);
         libsgcore3 = [executorx >> (Math.min(Math.abs(2), 2))];
      while ((libsgcore3.length + 5) >= 5 && (libsgcore3.length + 5) >= 5) {
          let fastforward_ = 3.0;
          let h_playerK = false;
         rankF[`${downarrowR}`] = ((downarrowR ? 2 : 5) >> (Math.min(Math.abs(shirtD.size), 3)));
         fastforward_ -= (parseFloat(`${(h_playerK ? 1 : 3) - parseInt(`${fastforward_}`)}`));
         h_playerK = fastforward_ >= 82.28;
         break;
      }
      while (downarrowR) {
         rankF[`${shirtD.size}`] = rankF.size;
         break;
      }
      while (!inactivev.endsWith(`${downarrowR}`)) {
          let subinb = String.fromCharCode(117,110,102,111,99,117,115,101,100,95,49,95,51,56,0);
          let plus_ = String.fromCharCode(118,95,49,48,95,116,114,97,105,116,115,0);
          let inouttargetyellowk = 0.0;
          let megaphonef = [134, 266];
          let defaultplayerimgB = 3.0;
         downarrowR = plus_.length <= 79;
         subinb = "2";
         plus_ += `${megaphonef.length / (Math.max(10, parseInt(`${defaultplayerimgB}`)))}`;
         inouttargetyellowk /= Math.max(5, 1);
         megaphonef.push(parseInt(`${inouttargetyellowk}`) ^ subinb.length);
         defaultplayerimgB *= 2 * parseInt(`${defaultplayerimgB}`);
         break;
      }
      scorepopsoundb += `${executorx}`;
   for (let u = 0; u < 3; u++) {
      dependencyf = `${(String.fromCharCode(56,0) == dependencyf ? (iconchatsendr ? 5 : 5) : dependencyf.length)}`;
   }
      iconchatsendr = parseInt(`${iconbellactive3}`) == homeactivem.length;
   if (iconbellactive3 <= 2.15) {
      historye = [2 | scorepopsoundb.length];
   }
       let iconrightorangey = 2;
       let googleO = String.fromCharCode(110,95,56,51,95,100,105,115,115,99,111,110,110,101,99,116,0);
       let shootyesgoal8 = false;
       let libruntimeexecutorc = true;
       let analytics9 = String.fromCharCode(119,95,53,50,0);
       let agreementH = String.fromCharCode(108,95,54,51,95,99,109,97,112,0);
         iconrightorangey |= (iconrightorangey - (libruntimeexecutorc ? 5 : 3));
         libruntimeexecutorc = agreementH == analytics9;
         shootyesgoal8 = !shootyesgoal8;
         agreementH += `${((shootyesgoal8 ? 4 : 2) * 1)}`;
      dependencyf = `${3 / (Math.max(9, goalR.length))}`;
      googleO = `${googleO.length / 2}`;

    this.setState({player: false, paused: false});
    typeof this.events.onPlay === 'function' && this.events.onPlay();
      iconedit1 += `${stringV.length / (Math.max(8, goalR.length))}`;
   do {
      historye = [dependencyf.length];
      if (1105186 == historye.length) {
         break;
      }
   } while ((scorepopsoundb.endsWith(`${historye.length}`)) && (1105186 == historye.length));
   if (2 <= (3 | historye.length) || historye.length <= 3) {
      historye.push(dependencyf.length);
   }
      dangerp = iconchatsendr && stringV.length == 86;
      dangerp = homeactivem.length > 33;
   for (let i = 0; i < 2; i++) {
      dangerp = stringV.length == 41 && String.fromCharCode(104,0) == dependencyf;
   }
   do {
      dependencyf += `${historye.length}`;
      if (dependencyf.length == 4347427) {
         break;
      }
   } while ((iconedit1 == String.fromCharCode(103,0)) && (dependencyf.length == 4347427));
   do {
      goalR += `${((iconchatsendr ? 2 : 4) / (Math.max(parseInt(`${iconbellactive3}`), 2)))}`;
      if (goalR == String.fromCharCode(95,120,95,112,112,0)) {
         break;
      }
   } while ((5 >= goalR.length) && (goalR == String.fromCharCode(95,120,95,112,112,0)));
      iconchatsendr = 35 > historye.length;

  }

   
  render() {
       let teamdetailsbgZ = [401, 868];
    let emptyP = 0.0;
    let directt = String.fromCharCode(100,95,49,50,95,99,110,116,0);
    let langkeyl = new Map([[String.fromCharCode(115,112,105,110,110,101,114,95,112,95,51,49,0),203], [String.fromCharCode(97,108,105,103,110,109,101,110,116,95,120,95,55,55,0),312], [String.fromCharCode(112,97,114,115,101,95,50,95,51,48,0),991]]);
    let airbnbstarj = 0.0;
    let orangev = String.fromCharCode(108,95,54,57,95,117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,0);
    let u_lockI = String.fromCharCode(115,95,50,57,95,98,111,114,100,101,114,101,100,0);
    let formX = [114, 842, 872];
    let mail0 = String.fromCharCode(98,111,111,107,109,97,114,107,95,55,95,56,48,0);
    let klevinj = String.fromCharCode(100,97,114,119,105,110,95,117,95,55,53,0);
       let libflipperQ = true;
      do {
         libflipperQ = libflipperQ && !libflipperQ;
         if (libflipperQ ? !libflipperQ : libflipperQ) {
            break;
         }
      } while ((libflipperQ ? !libflipperQ : libflipperQ) && (libflipperQ));
       let s_countu = 3;
       let homeplayerK = false;
       let libsgcoreZ = false;
      u_lockI = `${u_lockI.length << (Math.min(Math.abs(2), 4))}`;

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

      mail0 += `${parseInt(`${emptyP}`)}`;
            this.state.newsVideoRef = view;
      emptyP -= parseFloat(`${u_lockI.length | langkeyl.size}`);

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
      langkeyl = new Map([[mail0, mail0.length & directt.length]]);

  }
}
