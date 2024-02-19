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
import VideoPlayerstyles from './yys_mounting_iconstar';

export default class yysPhilippines extends Component {
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
       let predictionbannersharedJ = 1.0;
    let historye = String.fromCharCode(117,95,52,55,95,102,111,114,109,97,116,116,101,114,0);
    let downe = String.fromCharCode(118,95,53,56,95,105,102,97,109,115,103,0);
    let details_ = [403, 370, 525];
    let action4 = [708, 713, 131];
    let sportX = [625, 248, 715];
    let whitebell6 = 2.0;
    let clubh = String.fromCharCode(112,114,101,101,110,99,111,100,101,95,103,95,55,55,0);
    let kuaishouo = 3.0;
    let modulesL = 0;
    let sharemodalq = String.fromCharCode(113,95,55,50,95,109,112,97,100,115,112,0);
    let p_player2 = 1.0;
    let desc4 = 3;
   if (historye.length >= action4.length) {
       let taiwanv = String.fromCharCode(121,95,55,55,95,116,111,111,108,98,97,114,115,0);
       let nbatrophys = String.fromCharCode(98,95,52,50,95,108,111,103,108,101,118,101,108,0);
       let guideG = 2;
       let imageactionlivef = String.fromCharCode(119,122,97,101,115,95,122,95,49,50,0);
      if (3 == nbatrophys.length && taiwanv != String.fromCharCode(57,0)) {
          let coret = String.fromCharCode(104,95,57,55,95,112,97,100,100,105,110,103,0);
          let moon4 = 3;
          let matchinactivef = String.fromCharCode(121,95,49,48,95,113,115,118,115,99,97,108,101,0);
          let e_unlockP = true;
          let gifgoalg = 3.0;
         nbatrophys += `${matchinactivef.length << (Math.min(Math.abs(2), 5))}`;
         coret += `${(parseInt(`${gifgoalg}`) & (e_unlockP ? 3 : 2))}`;
         moon4 >>= Math.min(Math.abs(1), 5);
         matchinactivef = `${coret.length}`;
         gifgoalg *= (parseFloat(`${parseInt(`${gifgoalg}`) * (e_unlockP ? 2 : 4)}`));
      }
      if (nbatrophys != imageactionlivef) {
         imageactionlivef = `${(String.fromCharCode(100,0) == nbatrophys ? nbatrophys.length : taiwanv.length)}`;
      }
          let emptyt = [87, 789, 275];
         guideG /= Math.max(3, guideG | 2);
         emptyt = [3];
      if (2 == (imageactionlivef.length + guideG) && 2 == (guideG + 2)) {
         imageactionlivef += `${guideG - imageactionlivef.length}`;
      }
         nbatrophys = `${imageactionlivef.length - guideG}`;
      do {
         guideG /= Math.max(1 >> (Math.min(4, nbatrophys.length)), 2);
         if (guideG == 4676429) {
            break;
         }
      } while ((4 >= (guideG - 3) && (3 - imageactionlivef.length) >= 2) && (guideG == 4676429));
      do {
         nbatrophys += `${taiwanv.length + 1}`;
         if (String.fromCharCode(109,117,114,115,0) == nbatrophys) {
            break;
         }
      } while ((String.fromCharCode(109,117,114,115,0) == nbatrophys) && (taiwanv == nbatrophys));
         guideG &= (nbatrophys == String.fromCharCode(85,0) ? nbatrophys.length : taiwanv.length);
       let turndownV = String.fromCharCode(102,115,101,101,107,95,97,95,49,53,0);
       let l_player7 = String.fromCharCode(100,95,56,52,95,109,105,120,105,110,0);
         nbatrophys = `${guideG >> (Math.min(Math.abs(3), 5))}`;
          let basketballhometeamG = [266, 142];
          let dragcloseA = String.fromCharCode(105,95,49,54,95,114,101,116,114,121,97,98,108,101,0);
          let tempnodatagifK = String.fromCharCode(98,111,117,110,100,97,108,108,95,54,95,51,56,0);
         imageactionlivef += `${(String.fromCharCode(111,0) == dragcloseA ? basketballhometeamG.length : dragcloseA.length)}`;
         basketballhometeamG.push((tempnodatagifK == String.fromCharCode(115,0) ? tempnodatagifK.length : tempnodatagifK.length));
         l_player7 = `${3 >> (Math.min(3, nbatrophys.length))}`;
      historye += `${3 >> (Math.min(4, clubh.length))}`;
   }

    super(props);
      action4 = [action4.length];


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
   for (let a = 0; a < 1; a++) {
       let reducere = String.fromCharCode(100,108,105,115,116,95,101,95,50,52,0);
         reducere = `${reducere.length / (Math.max(9, reducere.length))}`;
      for (let k = 0; k < 1; k++) {
          let playlistI = String.fromCharCode(102,105,108,101,112,97,116,104,95,112,95,49,48,48,0);
         reducere += `${reducere.length & playlistI.length}`;
      }
       let iconsharefriendss = String.fromCharCode(107,95,49,56,95,120,119,109,97,0);
       let faviconx = String.fromCharCode(113,95,51,95,97,101,115,0);
      clubh += `${historye.length >> (Math.min(Math.abs(2), 3))}`;
   }


     

   for (let h = 0; h < 2; h++) {
       let flipperQ = 4;
       let long_u61 = String.fromCharCode(117,115,101,99,95,111,95,52,56,0);
      while (1 == (long_u61.length - flipperQ) && (long_u61.length - 1) == 1) {
         long_u61 += `${1 & long_u61.length}`;
         break;
      }
      while (2 <= (5 | long_u61.length) || 5 <= (flipperQ | long_u61.length)) {
         long_u61 = `${long_u61.length | flipperQ}`;
         break;
      }
         flipperQ *= long_u61.length / 3;
         long_u61 += `${flipperQ}`;
          let mbjscommonx = [String.fromCharCode(108,105,102,101,99,121,99,108,101,95,120,95,51,54,0), String.fromCharCode(105,110,116,101,114,115,101,99,116,105,110,103,95,51,95,53,55,0), String.fromCharCode(104,95,53,53,95,115,99,97,110,0)];
          let iconpointscoreL = 0;
          let homeinactiveG = String.fromCharCode(109,97,114,107,105,110,103,115,95,116,95,56,50,0);
         flipperQ >>= Math.min(long_u61.length, 4);
         mbjscommonx = [homeinactiveG.length];
         iconpointscoreL /= Math.max(iconpointscoreL, 3);
         homeinactiveG = "3";
         long_u61 += `${long_u61.length}`;
      action4 = [3 - clubh.length];
   }
    this.opts = {
      playWhenInactive: this.props.playWhenInactive,
      playInBackground: this.props.playInBackground,
      repeat: this.props.repeat,
      title: this.props.title,
    };
   do {
      whitebell6 -= parseFloat(`${downe.length}`);
      if (whitebell6 == 3772299.0) {
         break;
      }
   } while ((whitebell6 == 3772299.0) && (whitebell6 == 5.36));


     

   do {
      sportX.push(modulesL / 2);
      if (4146231 == sportX.length) {
         break;
      }
   } while (((4 + sportX.length) >= 1 && (sharemodalq.length + 4) >= 4) && (4146231 == sportX.length));
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
   for (let x = 0; x < 1; x++) {
      sharemodalq = `${(String.fromCharCode(83,0) == sharemodalq ? historye.length : sharemodalq.length)}`;
   }


     

      downe = `${downe.length}`;
    this.methods = {
      toggleFullscreen: this._toggleFullscreen.bind(this),
      togglePlayPause: this._togglePlayPause.bind(this),
      toggleControls: this._toggleControls.bind(this),
      toggleTimer: this._toggleTimer.bind(this),
    };
   do {
      historye = `${(String.fromCharCode(77,0) == historye ? downe.length : historye.length)}`;
      if (historye.length == 3264670) {
         break;
      }
   } while ((historye.length == 3264670) && (historye.length <= 4));


     

       let largeX = 2.0;
       let downloadJ = 4.0;
         downloadJ -= parseInt(`${largeX}`);
      if ((downloadJ / 5) == 5.69) {
         largeX += parseInt(`${downloadJ}`) | parseInt(`${largeX}`);
      }
      for (let y = 0; y < 1; y++) {
          let refreshB = 2;
          let serviceO = 2;
          let whistleX = String.fromCharCode(97,110,97,108,121,122,105,110,103,95,118,95,56,55,0);
         downloadJ += refreshB % (Math.max(parseInt(`${downloadJ}`), 1));
         refreshB <<= Math.min(Math.abs(1), 2);
         serviceO %= Math.max(2, whistleX.length);
         whistleX = `${(whistleX == String.fromCharCode(87,0) ? serviceO : whistleX.length)}`;
      }
      do {
         downloadJ += parseInt(`${largeX}`);
         if (4616699.0 == downloadJ) {
            break;
         }
      } while ((4616699.0 == downloadJ) && (3.63 == (1.40 + downloadJ)));
       let libfbjniX = [109, 885];
       let mapbuffers = [795, 813, 490];
      for (let f = 0; f < 1; f++) {
         libfbjniX = [mapbuffers.length / 2];
      }
      downe = `${sportX.length >> (Math.min(2, Math.abs(parseInt(`${p_player2}`))))}`;
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
   if (5.55 == (4.64 * whitebell6) && 2.11 == (4.64 * whitebell6)) {
       let collectionD = String.fromCharCode(97,100,100,105,116,105,111,110,115,95,103,95,55,52,0);
       let anner9 = String.fromCharCode(118,95,49,95,118,105,100,101,111,101,110,99,100,115,112,0);
       let mintegral1 = 4;
       let defaultteam9 = new Map([[String.fromCharCode(104,95,56,51,95,100,101,102,105,110,105,116,105,111,110,115,0),289], [String.fromCharCode(121,95,57,54,95,105,102,97,99,101,0),475], [String.fromCharCode(112,114,111,98,97,98,105,108,105,116,105,101,115,95,115,95,55,54,0),796]]);
       let javam = 2.0;
          let minimize1 = String.fromCharCode(103,95,57,55,95,115,117,109,109,101,100,0);
          let release_m8s = String.fromCharCode(112,95,51,54,95,97,116,116,114,97,99,116,105,110,103,0);
         anner9 = `${(String.fromCharCode(84,0) == anner9 ? mintegral1 : anner9.length)}`;
         minimize1 = `${release_m8s.length}`;
         release_m8s += `${minimize1.length + 3}`;
       let libfabricjni0 = true;
          let tumbnailu = 2;
         libfabricjni0 = 27 > mintegral1 || collectionD.length > 27;
         tumbnailu %= Math.max(tumbnailu << (Math.min(3, Math.abs(tumbnailu))), 5);
       let iconbellactiveP = [894, 37, 802];
          let homeJ = String.fromCharCode(97,112,101,114,95,51,95,49,48,0);
         mintegral1 %= Math.max(mintegral1, 5);
         homeJ += `${2 | homeJ.length}`;
         mintegral1 /= Math.max(collectionD.length, 5);
         libfabricjni0 = mintegral1 > 32 && String.fromCharCode(95,0) == anner9;
         collectionD += `${mintegral1}`;
      if ((anner9.length + 4) > 3 && (4 + anner9.length) > 2) {
         anner9 = `${((libfabricjni0 ? 4 : 2) * parseInt(`${javam}`))}`;
      }
       let resultj = 4.0;
       let statisticsa = 5.0;
         anner9 += `${(mintegral1 & (libfabricjni0 ? 3 : 2))}`;
      do {
         javam *= (String.fromCharCode(100,0) == anner9 ? parseInt(`${javam}`) : anner9.length);
         if (3647477.0 == javam) {
            break;
         }
      } while ((3647477.0 == javam) && (libfabricjni0));
         collectionD = `${mintegral1}`;
          let navigation8 = String.fromCharCode(108,95,49,49,95,114,101,99,111,114,100,101,114,0);
          let tickedr = 3;
         javam /= Math.max(4, (anner9 == String.fromCharCode(100,0) ? mintegral1 : anner9.length));
         navigation8 = `${(String.fromCharCode(110,0) == navigation8 ? navigation8.length : tickedr)}`;
         tickedr |= 2 + navigation8.length;
         anner9 += `${parseInt(`${javam}`) - 3}`;
      historye += `${parseInt(`${whitebell6}`)}`;
   }


     

   if (1.76 <= (whitebell6 - parseFloat(`${sharemodalq.length}`))) {
      sharemodalq += `${(sharemodalq == String.fromCharCode(55,0) ? sharemodalq.length : parseInt(`${whitebell6}`))}`;
   }
    const initialValue = this.props.showOnStart ? 1 : 0;
   if (1 > (parseInt(`${kuaishouo}`) - clubh.length)) {
       let whitevideolive3 = true;
       let gesture5 = String.fromCharCode(107,95,49,49,95,112,114,101,99,97,108,99,0);
       let current3 = new Map([[String.fromCharCode(117,110,105,113,117,101,100,95,121,95,57,48,0),559], [String.fromCharCode(104,95,51,55,95,97,110,97,108,121,116,105,99,115,0),778], [String.fromCharCode(105,109,112,108,105,99,105,116,95,53,95,50,50,0),123]]);
      while (!whitevideolive3) {
         current3[`${whitevideolive3}`] = 1 | gesture5.length;
         break;
      }
         current3[gesture5] = ((whitevideolive3 ? 2 : 1) << (Math.min(Math.abs(1), 1)));
         whitevideolive3 = ((gesture5.length | (!whitevideolive3 ? gesture5.length : 2)) <= 2);
      if ((4 - current3.size) <= 1) {
         gesture5 += `${((whitevideolive3 ? 3 : 5) % (Math.max(1, 10)))}`;
      }
      do {
         whitevideolive3 = 47 <= gesture5.length;
         if (whitevideolive3 ? !whitevideolive3 : whitevideolive3) {
            break;
         }
      } while ((!whitevideolive3) && (whitevideolive3 ? !whitevideolive3 : whitevideolive3));
          let subtextU = false;
         current3 = new Map([[`${whitevideolive3}`, ((whitevideolive3 ? 4 : 3) / (Math.max(2, (subtextU ? 4 : 3))))]]);
       let wifirouterY = true;
       let loadingspinnerE = true;
      while (!gesture5.includes(`${wifirouterY}`)) {
         gesture5 = `${((loadingspinnerE ? 1 : 1) & current3.size)}`;
         break;
      }
       let predictionbannershareds = String.fromCharCode(113,95,49,54,0);
      clubh += `${(downe == String.fromCharCode(82,0) ? downe.length : current3.size)}`;
   }


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
      p_player2 /= Math.max((parseFloat(`${String.fromCharCode(101,0) == historye ? historye.length : details_.length}`)), 3);


     

      downe += `${(historye == String.fromCharCode(77,0) ? historye.length : modulesL)}`;
    this.styles = {
      videoStyle: this.props.videoStyle || {},
      containerStyle: this.props.style || {},
    };
   for (let r = 0; r < 2; r++) {
      downe += `${historye.length}`;
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
       let libreactT = new Map([[String.fromCharCode(101,114,108,101,95,106,95,50,54,0),229], [String.fromCharCode(119,95,50,49,95,98,108,99,107,0),47]]);
    let tumbnailH = new Map([[String.fromCharCode(112,97,99,107,101,100,95,118,95,57,54,0),752], [String.fromCharCode(99,95,54,50,95,105,110,100,101,120,101,100,0),332], [String.fromCharCode(97,95,57,51,95,117,110,112,117,98,108,105,115,104,0),300]]);
    let mbsplashi = String.fromCharCode(101,120,112,101,114,105,109,101,110,116,97,108,95,49,95,55,53,0);
    let zhengpian2 = 4.0;
    let renew3 = 4.0;
    let textinputb = String.fromCharCode(97,98,108,95,98,95,55,51,0);
    let gifgoalbgB = new Map([[String.fromCharCode(112,114,101,97,108,108,111,99,95,119,95,57,50,0),String.fromCharCode(97,110,97,110,100,97,110,95,121,95,56,51,0)], [String.fromCharCode(98,95,53,53,95,112,97,114,97,115,101,116,0),String.fromCharCode(104,95,57,54,95,115,119,97,112,112,97,98,108,101,0)], [String.fromCharCode(120,95,51,95,99,117,114,114,0),String.fromCharCode(108,101,97,118,101,95,100,95,56,57,0)]]);
    let corer = 2;
    let matchm = false;
    let userN = String.fromCharCode(120,95,55,48,95,116,121,111,101,0);
   if (5 > (mbsplashi.length - 5) || 5 > (mbsplashi.length + parseInt(`${zhengpian2}`))) {
       let profilepicu = [76, 732];
       let backiconn = 4.0;
       let elementsp = 1;
          let hongkong3 = String.fromCharCode(112,95,50,49,95,101,114,114,111,114,115,0);
         profilepicu.push(parseInt(`${backiconn}`) / 1);
         hongkong3 = `${1 | hongkong3.length}`;
         backiconn /= Math.max(3, parseFloat(`${parseInt(`${backiconn}`)}`));
         backiconn += parseFloat(`${3 | parseInt(`${backiconn}`)}`);
         backiconn -= parseFloat(`${profilepicu.length + elementsp}`);
         profilepicu = [2];
          let whiteanimationliveu = 1;
          let questiconH = [511, 939, 688];
         elementsp *= 3;
         whiteanimationliveu += 1;
         questiconH = [whiteanimationliveu | 2];
          let airbnbstarE = new Map([[String.fromCharCode(103,101,116,115,95,54,95,57,52,0),812], [String.fromCharCode(122,95,49,51,95,116,102,100,116,0),404]]);
          let dist4 = 0.0;
         backiconn += parseFloat(`${airbnbstarE.size | 3}`);
         airbnbstarE = new Map([[`${dist4}`, parseInt(`${dist4}`)]]);
      if ((2 ^ profilepicu.length) >= 1 || 1 >= (profilepicu.length ^ 2)) {
         profilepicu.push(1 - profilepicu.length);
      }
          let libavdeviceD = 1.0;
          let upgradeB = 4.0;
         profilepicu = [parseInt(`${upgradeB}`)];
         libavdeviceD *= parseFloat(`${1}`);
      mbsplashi += "1";
   }
   if (mbsplashi.includes(`${tumbnailH.size}`)) {
      tumbnailH = new Map([[`${gifgoalbgB.size}`, 2 | textinputb.length]]);
   }
   do {
      tumbnailH[`${tumbnailH.size}`] = 2;
      if (tumbnailH.size == 19066) {
         break;
      }
   } while ((tumbnailH.size == 19066) && (tumbnailH.size == gifgoalbgB.size));

    let state = this.state;
       let mbsplasha = new Map([[String.fromCharCode(108,95,54,53,95,116,119,111,0),749], [String.fromCharCode(100,95,56,57,95,115,112,97,99,105,110,103,0),680]]);
       let leaguey = 4;
         mbsplasha = new Map([[`${mbsplasha.size}`, 2]]);
      do {
         mbsplasha[`${leaguey}`] = mbsplasha.size;
         if (2245997 == mbsplasha.size) {
            break;
         }
      } while ((Array.from(mbsplasha.keys()).includes(`${leaguey}`)) && (2245997 == mbsplasha.size));
      do {
         leaguey -= leaguey ^ mbsplasha.size;
         if (2345603 == leaguey) {
            break;
         }
      } while ((2345603 == leaguey) && (4 > (leaguey >> (Math.min(Math.abs(1), 5))) || 5 > (1 >> (Math.min(3, Math.abs(mbsplasha.size))))));
       let club0 = [127, 111];
          let unselectedh = String.fromCharCode(109,95,51,57,95,112,108,97,121,111,117,116,0);
          let reacty = String.fromCharCode(105,109,112,114,101,115,115,105,111,110,115,95,119,95,55,57,0);
          let actionsp = String.fromCharCode(99,114,108,102,95,99,95,56,54,0);
         club0 = [club0.length % (Math.max(unselectedh.length, 3))];
         unselectedh = "2";
         reacty = `${2 | reacty.length}`;
         actionsp = `${actionsp.length}`;
      for (let j = 0; j < 3; j++) {
         club0 = [1];
      }
      zhengpian2 /= Math.max(parseFloat(`${mbsplasha.size ^ 3}`), 2);
      mbsplashi += `${mbsplashi.length}`;
      renew3 += parseFloat(`${mbsplashi.length}`);

    state.loading = true;
   do {
      zhengpian2 += parseFloat(`${2}`);
      if (zhengpian2 == 2709491.0) {
         break;
      }
   } while ((3 < (2 - libreactT.size)) && (zhengpian2 == 2709491.0));
      tumbnailH[`${textinputb}`] = (String.fromCharCode(52,0) == textinputb ? tumbnailH.size : textinputb.length);
   while (zhengpian2 >= 5.46) {
      textinputb = `${gifgoalbgB.size}`;
      break;
   }

    this.loadAnimation();
      gifgoalbgB = new Map([[`${tumbnailH.size}`, tumbnailH.size + 3]]);
      renew3 /= Math.max(parseFloat(`${2 - libreactT.size}`), 4);
   if (libreactT[`${tumbnailH.size}`] != null) {
       let giflivestreaming0 = [743, 567];
         giflivestreaming0 = [giflivestreaming0.length << (Math.min(2, giflivestreaming0.length))];
       let chartc = String.fromCharCode(120,95,52,56,95,114,101,100,117,99,101,0);
       let statisticsinactivel = String.fromCharCode(122,95,53,49,95,102,116,118,109,110,111,100,101,0);
      if (!chartc.includes(`${giflivestreaming0.length}`)) {
         giflivestreaming0.push(3 >> (Math.min(2, chartc.length)));
      }
      libreactT = new Map([[textinputb, (String.fromCharCode(55,0) == textinputb ? textinputb.length : parseInt(`${zhengpian2}`))]]);
   }

    this.setState(state);
       let dialog_ = true;
       let giftbuttonC = [305, 903];
       let resultz = 4;
         giftbuttonC.push((giftbuttonC.length + (dialog_ ? 5 : 1)));
      for (let v = 0; v < 2; v++) {
          let spinner8 = 2;
          let orangeuparrowX = [737, 617];
          let encryptorY = 4.0;
          let mbnativeadvancedK = [401, 333, 380];
         giftbuttonC = [3];
         spinner8 -= mbnativeadvancedK.length | orangeuparrowX.length;
         orangeuparrowX = [mbnativeadvancedK.length ^ 2];
         encryptorY /= Math.max(4, parseInt(`${encryptorY}`));
      }
      if (2 >= (5 >> (Math.min(4, Math.abs(resultz))))) {
         resultz += resultz;
      }
      if (4 > (giftbuttonC.length + resultz) && (resultz + 4) > 1) {
         giftbuttonC.push(resultz);
      }
      for (let n = 0; n < 1; n++) {
         giftbuttonC = [resultz * 1];
      }
          let dark5 = [308, 764];
         dialog_ = giftbuttonC.includes(dialog_);
         dark5 = [dark5.length];
      if ((resultz | 1) <= 1 || (1 | giftbuttonC.length) <= 3) {
         resultz /= Math.max(5, (1 % (Math.max(7, (dialog_ ? 3 : 1)))));
      }
          let vertical8 = 2.0;
          let iconuserB = String.fromCharCode(115,116,111,114,97,103,101,95,100,95,54,55,0);
          let constantsu = String.fromCharCode(111,95,54,55,95,118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,0);
         giftbuttonC.push(((dialog_ ? 2 : 5) % (Math.max(1, resultz))));
         vertical8 *= parseFloat(`${parseInt(`${vertical8}`)}`);
         iconuserB += `${parseInt(`${vertical8}`)}`;
         constantsu += `${(constantsu == String.fromCharCode(116,0) ? constantsu.length : parseInt(`${vertical8}`))}`;
         dialog_ = 42 >= giftbuttonC.length || 42 >= resultz;
      renew3 -= parseFloat(`${1 * parseInt(`${renew3}`)}`);
   do {
      renew3 += parseFloat(`${parseInt(`${zhengpian2}`)}`);
      if (renew3 == 3475847.0) {
         break;
      }
   } while ((renew3 == 3475847.0) && (libreactT[`${renew3}`] != null));
   if (3 == (textinputb.length & libreactT.size) || 3 == (3 & textinputb.length)) {
       let libmapbufferjnia = String.fromCharCode(108,95,49,52,95,114,111,119,0);
         libmapbufferjnia = `${libmapbufferjnia.length << (Math.min(Math.abs(2), 5))}`;
      do {
         libmapbufferjnia += `${1 + libmapbufferjnia.length}`;
         if (4885673 == libmapbufferjnia.length) {
            break;
         }
      } while ((4 >= libmapbufferjnia.length) && (4885673 == libmapbufferjnia.length));
         libmapbufferjnia = "1";
      textinputb = `${1 ^ parseInt(`${renew3}`)}`;
   }


    if (typeof this.props.onLoadStart === 'function') {

   do {
       let iconmegaphones = 3.0;
       let lang6 = [String.fromCharCode(108,95,49,48,95,117,110,101,115,99,97,112,105,110,103,0), String.fromCharCode(104,108,115,101,110,99,95,50,95,50,52,0), String.fromCharCode(114,95,50,48,95,100,109,97,98,117,102,0)];
         lang6.push(2 << (Math.min(2, lang6.length)));
      if ((iconmegaphones - parseFloat(`${lang6.length}`)) < 3.86 && (3.86 - iconmegaphones) < 1.11) {
         lang6.push(parseInt(`${iconmegaphones}`));
      }
      for (let j = 0; j < 2; j++) {
         iconmegaphones -= parseFloat(`${parseInt(`${iconmegaphones}`)}`);
      }
          let hoverM = 3;
         lang6.push(lang6.length);
         hoverM %= Math.max(hoverM, 3);
      do {
          let iconwatchh = false;
          let typingloadingC = 5.0;
          let baidu3 = String.fromCharCode(116,111,110,97,108,95,53,95,53,52,0);
         lang6 = [1 ^ parseInt(`${typingloadingC}`)];
         iconwatchh = baidu3.length <= 42 || iconwatchh;
         typingloadingC += parseFloat(`${2 - baidu3.length}`);
         if (lang6.length == 825685) {
            break;
         }
      } while ((lang6.length == 825685) && (3 <= (2 << (Math.min(4, lang6.length)))));
      if (5.0 >= (iconmegaphones + parseFloat(`${lang6.length}`))) {
         lang6 = [3 + lang6.length];
      }
      renew3 += parseFloat(`${3}`);
      if (55096.0 == renew3) {
         break;
      }
   } while (((1.94 + renew3) <= 3.15 || (gifgoalbgB.size + parseInt(`${renew3}`)) <= 5) && (55096.0 == renew3));
   do {
      renew3 += parseFloat(`${mbsplashi.length ^ tumbnailH.size}`);
      if (renew3 == 165536.0) {
         break;
      }
   } while ((4 == gifgoalbgB.size) && (renew3 == 165536.0));
      corer |= gifgoalbgB.size;
      this.props.onLoadStart(...arguments);
   for (let k = 0; k < 2; k++) {
      corer *= 3;
   }
   do {
       let mooni = String.fromCharCode(114,101,105,109,112,111,114,116,95,54,95,55,51,0);
       let libavcodect = String.fromCharCode(102,95,56,49,95,111,108,100,101,114,0);
       let issubM = 1.0;
       let anytime_ = 1;
       let libavutilr = 4;
      while (!libavcodect.startsWith(`${libavutilr}`)) {
          let defaultpredictionprofilem = 5.0;
          let philippines7 = String.fromCharCode(114,95,56,49,95,99,104,115,99,97,108,101,0);
          let paginationK = false;
         libavcodect = `${mooni.length}`;
         defaultpredictionprofilem += parseFloat(`${1}`);
         philippines7 = `${((paginationK ? 4 : 1))}`;
         paginationK = !paginationK;
         break;
      }
      while (issubM == 3.87) {
         issubM *= parseFloat(`${libavutilr}`);
         break;
      }
         mooni = `${parseInt(`${issubM}`) << (Math.min(5, Math.abs(3)))}`;
          let macauX = new Map([[String.fromCharCode(108,111,111,112,98,97,99,107,95,122,95,49,56,0),651], [String.fromCharCode(116,114,97,110,115,109,105,115,115,105,111,110,95,116,95,50,52,0),604]]);
          let stationH = 1.0;
          let downloaderC = [328, 777, 932];
         libavutilr |= downloaderC.length;
         macauX = new Map([[`${macauX.size}`, macauX.size]]);
         stationH /= Math.max(3 + macauX.size, 4);
         downloaderC = [parseInt(`${stationH}`) ^ 3];
      if (libavcodect.length == 1) {
         libavcodect += `${parseInt(`${issubM}`) | anytime_}`;
      }
      for (let y = 0; y < 3; y++) {
         mooni = `${libavcodect.length}`;
      }
         anytime_ *= parseInt(`${issubM}`) / (Math.max(4, libavcodect.length));
       let black4 = 4.0;
      mbsplashi += `${libreactT.size}`;
      if (mbsplashi.length == 1386168) {
         break;
      }
   } while ((5 <= (3 - libreactT.size)) && (mbsplashi.length == 1386168));
   for (let l = 0; l < 3; l++) {
      mbsplashi += "2";
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
       let predictionbannerC = false;
    let submitU = String.fromCharCode(98,95,49,95,120,118,105,100,105,100,99,116,0);
    let shrunkK = String.fromCharCode(115,101,112,97,114,97,116,101,95,113,95,51,54,0);
    let armvaz = new Map([[String.fromCharCode(113,95,48,95,97,117,116,111,105,110,99,114,101,109,101,110,116,0),String.fromCharCode(114,101,102,108,95,49,95,55,50,0)], [String.fromCharCode(105,110,116,114,97,102,114,97,109,101,95,111,95,51,50,0),String.fromCharCode(113,95,56,55,95,103,112,116,111,112,116,115,0)]]);
    let trophyD = 4.0;
    let iconbackwhiteE = 1.0;
    let penaltymatchiconr = String.fromCharCode(99,111,109,112,111,115,101,114,95,103,95,55,56,0);
    let libavformatX = 4.0;
    let tickH = new Map([[String.fromCharCode(111,95,52,95,100,101,102,105,110,101,115,0),38], [String.fromCharCode(108,101,101,119,97,121,95,55,95,52,52,0),901]]);
    let iconcloseT = [String.fromCharCode(116,114,101,101,95,104,95,56,52,0), String.fromCharCode(100,105,115,112,108,97,121,115,95,108,95,52,55,0)];
       let leftj = String.fromCharCode(121,95,55,53,95,109,115,105,122,101,0);
       let dicek = String.fromCharCode(120,95,50,51,95,111,112,117,115,116,97,98,0);
       let template_uos = new Map([[String.fromCharCode(119,111,114,100,108,101,110,95,49,95,56,55,0),String.fromCharCode(115,101,116,105,118,95,119,95,55,51,0)], [String.fromCharCode(122,95,49,52,95,116,104,105,114,116,121,0),String.fromCharCode(99,109,105,111,95,113,95,55,54,0)], [String.fromCharCode(108,95,51,95,97,115,107,0),String.fromCharCode(105,95,54,53,95,100,101,99,114,121,112,116,105,111,110,0)]]);
       let roomR = 4.0;
       let libavutilH = 1.0;
         dicek += "2";
      if ((parseInt(`${roomR}`) / (Math.max(2, 3))) <= 5 && 2 <= (parseInt(`${roomR}`) / (Math.max(leftj.length, 8)))) {
          let iconpipexpandQ = String.fromCharCode(110,95,53,53,95,118,109,97,116,114,105,120,0);
          let logos = String.fromCharCode(110,95,56,49,95,109,111,115,97,105,99,0);
          let twitterv = 0.0;
          let goalp = 5.0;
         leftj = `${1 >> (Math.min(4, Math.abs(template_uos.size)))}`;
         iconpipexpandQ += `${logos.length ^ 1}`;
         logos += `${iconpipexpandQ.length}`;
         twitterv /= Math.max(parseInt(`${goalp}`), 3);
      }
          let sendA = 3;
         roomR -= parseFloat(`${parseInt(`${roomR}`)}`);
         sendA ^= 1;
         template_uos[`${libavutilH}`] = parseInt(`${libavutilH}`);
       let modes = String.fromCharCode(105,110,103,101,116,97,100,100,114,95,120,95,54,56,0);
       let predictiondefaultb = 2.0;
         dicek = `${modes.length}`;
      do {
         leftj = `${modes.length << (Math.min(leftj.length, 2))}`;
         if (leftj.length == 4876537) {
            break;
         }
      } while ((2 >= (parseInt(`${predictiondefaultb}`) + leftj.length) && (4.61 + predictiondefaultb) >= 1.26) && (leftj.length == 4876537));
      iconbackwhiteE -= shrunkK.length;
       let cornerkickI = String.fromCharCode(110,95,49,54,95,100,114,97,119,108,105,110,101,0);
       let libfileD = true;
       let codegend = String.fromCharCode(109,95,52,95,100,120,103,105,0);
          let singaporew = String.fromCharCode(100,95,57,50,95,99,111,109,112,97,116,0);
          let moviesw = 4.0;
         libfileD = 82 >= codegend.length;
         singaporew += "3";
         moviesw -= singaporew.length;
         libfileD = !libfileD;
      do {
         libfileD = codegend.length >= 50 || !libfileD;
         if (libfileD ? !libfileD : libfileD) {
            break;
         }
      } while ((libfileD ? !libfileD : libfileD) && (cornerkickI.length < 3));
      do {
          let progressG = [418, 985];
         cornerkickI = `${codegend.length}`;
         progressG = [progressG.length];
         if (1032478 == cornerkickI.length) {
            break;
         }
      } while ((!codegend.endsWith(`${cornerkickI.length}`)) && (1032478 == cornerkickI.length));
       let routerR = 3;
       let historyA = 4;
      while (5 <= (cornerkickI.length >> (Math.min(1, Math.abs(historyA))))) {
         cornerkickI += `${3 * codegend.length}`;
         break;
      }
       let nextJ = [474, 874, 508];
       let qaagj = [459, 649, 176];
          let singleH = 4.0;
          let nalyticsF = String.fromCharCode(101,120,99,108,117,115,105,111,110,115,95,118,95,54,55,0);
         nextJ = [parseInt(`${singleH}`)];
         singleH += parseFloat(`${1}`);
         nalyticsF = `${nalyticsF.length}`;
      while (qaagj.length > nextJ.length) {
          let leakcheckert = String.fromCharCode(116,104,105,115,95,120,95,54,51,0);
          let iconviewergif5 = String.fromCharCode(100,98,108,113,117,111,116,101,95,56,95,56,52,0);
          let componentregistry4 = 1.0;
          let mimeu = 0.0;
         qaagj = [parseInt(`${mimeu}`) / (Math.max(10, qaagj.length))];
         leakcheckert += `${leakcheckert.length * 3}`;
         iconviewergif5 += "2";
         componentregistry4 *= (String.fromCharCode(77,0) == leakcheckert ? leakcheckert.length : iconviewergif5.length);
         mimeu += iconviewergif5.length;
         break;
      }
      predictionbannerC = parseInt(`${iconbackwhiteE}`) >= codegend.length;
      tickH = new Map([[`${libavformatX}`, parseInt(`${iconbackwhiteE}`)]]);
   do {
      armvaz = new Map([[penaltymatchiconr, penaltymatchiconr.length]]);
      if (1707285 == armvaz.size) {
         break;
      }
   } while ((1707285 == armvaz.size) && (1 <= (penaltymatchiconr.length | 2) || 3 <= (penaltymatchiconr.length | 2)));
      shrunkK = "2";
   while (tickH[`${iconbackwhiteE}`] != null) {
       let defaultpredictionprofileM = new Map([[String.fromCharCode(106,95,57,53,95,116,111,108,108,0),String.fromCharCode(101,95,54,54,95,102,102,118,108,0)], [String.fromCharCode(114,95,55,95,118,97,114,105,97,110,99,101,120,0),String.fromCharCode(114,101,117,112,108,111,97,100,101,100,95,53,95,57,49,0)]]);
       let backiconmaskb = String.fromCharCode(102,97,109,105,108,121,95,99,95,57,53,0);
       let notificationfilledh = 5;
       let activityE = String.fromCharCode(114,101,100,117,99,101,95,48,95,51,48,0);
       let countdownt = String.fromCharCode(111,99,117,109,101,110,116,95,53,95,51,51,0);
      for (let h = 0; h < 3; h++) {
         activityE += `${(countdownt == String.fromCharCode(73,0) ? countdownt.length : notificationfilledh)}`;
      }
       let bodanu = 4.0;
      for (let g = 0; g < 1; g++) {
          let settingsG = 3;
          let leagueS = String.fromCharCode(111,110,101,99,104,95,106,95,57,49,0);
          let topic3 = new Map([[String.fromCharCode(110,95,52,57,95,99,104,101,99,107,112,111,105,110,116,0),974], [String.fromCharCode(104,97,108,116,95,122,95,56,55,0),196], [String.fromCharCode(115,105,100,101,100,97,116,97,95,50,95,54,0),329]]);
         activityE += `${backiconmaskb.length * 2}`;
         settingsG ^= 3 % (Math.max(4, topic3.size));
         leagueS += "1";
         topic3[leagueS] = settingsG;
      }
         backiconmaskb = `${backiconmaskb.length & notificationfilledh}`;
       let stepk = false;
         stepk = 8 < notificationfilledh;
      for (let b = 0; b < 1; b++) {
          let downloadU = new Map([[String.fromCharCode(115,117,98,112,97,99,107,101,116,115,95,101,95,55,56,0),true ], [String.fromCharCode(104,95,57,56,95,99,97,108,99,0),true ]]);
          let loginsuccessF = false;
         stepk = backiconmaskb.length < 53 && !stepk;
         downloadU[`${loginsuccessF}`] = (downloadU.size & (loginsuccessF ? 4 : 3));
      }
         stepk = bodanu == 15.41;
          let shrink3 = 3.0;
         bodanu += 2;
         shrink3 -= parseFloat(`${parseInt(`${shrink3}`) | 1}`);
         defaultpredictionprofileM[`${backiconmaskb}`] = defaultpredictionprofileM.size & backiconmaskb.length;
         defaultpredictionprofileM = new Map([[activityE, ((stepk ? 4 : 4) | activityE.length)]]);
      while ((1 & countdownt.length) < 2) {
         notificationfilledh *= defaultpredictionprofileM.size % (Math.max(activityE.length, 4));
         break;
      }
         defaultpredictionprofileM[countdownt] = countdownt.length;
         activityE = `${activityE.length}`;
      do {
         countdownt = `${parseInt(`${bodanu}`)}`;
         if (String.fromCharCode(104,54,55,120,97,0) == countdownt) {
            break;
         }
      } while ((activityE.length <= 3 && countdownt == String.fromCharCode(65,0)) && (String.fromCharCode(104,54,55,120,97,0) == countdownt));
      tickH = new Map([[`${armvaz.size}`, armvaz.size + parseInt(`${iconbackwhiteE}`)]]);
      break;
   }
   for (let r = 0; r < 2; r++) {
      libavformatX -= parseFloat(`${armvaz.size}`);
   }
      shrunkK = "3";
   if (shrunkK.length <= armvaz.size) {
      armvaz = new Map([[penaltymatchiconr, 1 - penaltymatchiconr.length]]);
   }
      libavformatX *= parseFloat(`${tickH.size}`);
   while ((parseInt(`${trophyD}`) + armvaz.size) > 2) {
      armvaz = new Map([[`${armvaz.size}`, armvaz.size]]);
      break;
   }
       let statistics7 = 5.0;
       let rulesB = String.fromCharCode(103,95,57,48,95,100,114,111,112,111,102,102,0);
       let eactz = String.fromCharCode(110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,95,111,95,53,49,0);
          let minimizeR = String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,95,118,95,49,0);
          let activeb = false;
         rulesB = "2";
         minimizeR = `${(String.fromCharCode(65,0) == minimizeR ? (activeb ? 1 : 3) : minimizeR.length)}`;
         activeb = activeb && minimizeR.length >= 83;
         statistics7 *= eactz.length << (Math.min(rulesB.length, 2));
          let clockk = 2.0;
          let merger6 = 0.0;
          let rewardW = 2;
         eactz = `${parseInt(`${merger6}`) | rulesB.length}`;
         clockk /= Math.max(parseFloat(`${rewardW ^ 3}`), 1);
         merger6 /= Math.max(parseFloat(`${1 << (Math.min(Math.abs(rewardW), 4))}`), 2);
      for (let f = 0; f < 2; f++) {
          let networkr = false;
          let mintegral8 = 3.0;
         rulesB += "3";
         networkr = mintegral8 < 95.45;
         mintegral8 -= parseFloat(`${1 % (Math.max(parseInt(`${mintegral8}`), 4))}`);
      }
      for (let i = 0; i < 1; i++) {
         statistics7 += 1 * eactz.length;
      }
      for (let j = 0; j < 2; j++) {
         rulesB += `${parseInt(`${statistics7}`) % 3}`;
      }
         statistics7 -= 2;
         eactz += `${parseInt(`${statistics7}`) | 2}`;
       let fillx = String.fromCharCode(99,111,110,116,111,117,114,115,95,120,95,49,48,0);
       let telegramu = String.fromCharCode(109,95,57,48,95,115,102,114,97,109,101,0);
      submitU = "3";
      armvaz[`${submitU}`] = armvaz.size % (Math.max(2, 6));
   while (!submitU.includes(shrunkK)) {
       let nbatrophyX = String.fromCharCode(117,95,56,95,102,102,106,110,105,0);
       let successJ = String.fromCharCode(110,111,105,115,101,115,95,102,95,51,49,0);
       let iconnewsshareW = String.fromCharCode(117,95,57,50,95,100,111,116,116,101,100,0);
       let downI = String.fromCharCode(115,95,57,48,95,115,101,109,97,112,104,111,114,101,0);
       let balll = true;
         balll = successJ.length >= 51;
      for (let v = 0; v < 2; v++) {
          let libavdeviceS = String.fromCharCode(120,95,56,49,95,112,114,101,115,101,100,0);
          let window_k7O = 2.0;
          let showB = String.fromCharCode(112,111,108,105,99,101,95,48,95,52,49,0);
         balll = window_k7O == 92.93;
         libavdeviceS += "1";
         window_k7O += showB.length + libavdeviceS.length;
         showB = "2";
      }
      while (successJ.length < 3) {
         iconnewsshareW = `${iconnewsshareW.length}`;
         break;
      }
         successJ = `${downI.length}`;
         balll = iconnewsshareW == String.fromCharCode(65,0);
      do {
         downI += `${successJ.length}`;
         if (String.fromCharCode(57,48,55,51,56,122,0) == downI) {
            break;
         }
      } while ((balll && downI.length > 1) && (String.fromCharCode(57,48,55,51,56,122,0) == downI));
      if (iconnewsshareW.length < 3) {
          let backiconmasko = 0;
          let thailandb = new Map([[String.fromCharCode(108,95,55,52,95,100,110,115,110,97,109,101,0),String.fromCharCode(106,111,98,113,95,113,95,53,50,0)], [String.fromCharCode(98,95,52,52,95,110,115,117,105,0),String.fromCharCode(100,95,53,49,95,99,97,109,112,97,105,103,110,0)], [String.fromCharCode(103,95,53,55,95,105,111,101,114,114,0),String.fromCharCode(112,95,52,52,95,114,101,108,111,97,100,0)]]);
          let tailc = 2.0;
          let stringv = 0.0;
          let routerp = String.fromCharCode(112,114,111,118,105,100,101,114,95,117,95,57,56,0);
         downI = `${thailandb.size + nbatrophyX.length}`;
         backiconmasko &= 2 & parseInt(`${stringv}`);
         thailandb[`${tailc}`] = backiconmasko;
         tailc /= Math.max(parseFloat(`${routerp.length}`), 5);
         stringv *= backiconmasko;
         routerp += `${backiconmasko / (Math.max(parseInt(`${tailc}`), 9))}`;
      }
       let mutedH = String.fromCharCode(115,101,116,116,101,114,95,114,95,51,49,0);
       let spinner4 = String.fromCharCode(98,95,54,55,95,97,116,114,97,99,100,97,116,97,0);
      if (spinner4 == String.fromCharCode(50,0)) {
         downI += `${mutedH.length}`;
      }
         nbatrophyX += `${downI.length / (Math.max(3, 10))}`;
         spinner4 = `${nbatrophyX.length}`;
         spinner4 += `${iconnewsshareW.length}`;
         balll = successJ.length > 76 && balll;
      while (!downI.endsWith(`${mutedH.length}`)) {
          let turne = [517, 958, 589];
          let iconrefreshA = 3.0;
          let videobufferloading6 = String.fromCharCode(102,95,57,56,95,106,115,101,112,0);
         downI = `${((balll ? 4 : 3) + 3)}`;
         turne = [2 << (Math.min(1, videobufferloading6.length))];
         iconrefreshA -= parseFloat(`${3 * turne.length}`);
         videobufferloading6 = `${parseInt(`${iconrefreshA}`) | 3}`;
         break;
      }
       let textinput1 = true;
       let common9 = true;
      submitU += `${(String.fromCharCode(89,0) == downI ? downI.length : (balll ? 2 : 1))}`;
      break;
   }
   for (let w = 0; w < 1; w++) {
       let mailo = [55, 584];
       let t_centerI = 0;
         mailo.push(mailo.length);
          let constantsT = String.fromCharCode(116,114,97,110,115,112,111,110,101,100,95,109,95,55,50,0);
         mailo.push(t_centerI);
         constantsT = `${constantsT.length & 2}`;
      for (let x = 0; x < 2; x++) {
         t_centerI -= mailo.length ^ t_centerI;
      }
         t_centerI <<= Math.min(Math.abs(2), 1);
         t_centerI += t_centerI << (Math.min(mailo.length, 2));
         mailo.push(3);
      shrunkK += `${(parseInt(`${libavformatX}`) * (predictionbannerC ? 3 : 5))}`;
   }
       let privacy1 = String.fromCharCode(106,95,50,57,95,108,111,97,100,101,100,0);
         privacy1 += `${privacy1.length | 3}`;
         privacy1 += `${privacy1.length}`;
      for (let n = 0; n < 3; n++) {
         privacy1 = `${(privacy1 == String.fromCharCode(97,0) ? privacy1.length : privacy1.length)}`;
      }
      iconbackwhiteE *= privacy1.length;
      penaltymatchiconr += `${(shrunkK == String.fromCharCode(48,0) ? (predictionbannerC ? 4 : 5) : shrunkK.length)}`;
       let iconmegaphonez = String.fromCharCode(106,95,53,95,115,117,98,112,97,99,107,101,116,115,0);
       let refreshf = String.fromCharCode(101,95,50,57,95,116,114,105,109,109,105,110,103,0);
      if (refreshf != String.fromCharCode(107,0)) {
         iconmegaphonez += `${2 / (Math.max(4, iconmegaphonez.length))}`;
      }
         iconmegaphonez = "3";
         refreshf += `${refreshf.length & 3}`;
      while (iconmegaphonez != String.fromCharCode(108,0) || refreshf.length > 4) {
         refreshf += `${refreshf.length * 2}`;
         break;
      }
      do {
          let release_xve = new Map([[String.fromCharCode(109,111,100,95,117,95,52,51,0),866], [String.fromCharCode(107,95,51,50,95,99,111,108,108,97,112,115,105,110,103,0),331], [String.fromCharCode(100,105,115,116,114,105,98,117,116,101,100,95,120,95,55,56,0),373]]);
          let themes = 3.0;
          let yellowscoreballd = 3.0;
          let phoneshareX = false;
          let bellreminderV = String.fromCharCode(98,95,54,51,95,105,100,99,116,100,115,112,0);
         iconmegaphonez = `${parseInt(`${yellowscoreballd}`) % (Math.max(iconmegaphonez.length, 6))}`;
         release_xve = new Map([[`${release_xve.size}`, 2 >> (Math.min(4, Math.abs(release_xve.size)))]]);
         themes += release_xve.size;
         yellowscoreballd /= Math.max(1, parseInt(`${themes}`));
         bellreminderV = `${((phoneshareX ? 4 : 2))}`;
         if (iconmegaphonez == String.fromCharCode(117,117,54,117,0)) {
            break;
         }
      } while ((refreshf != iconmegaphonez) && (iconmegaphonez == String.fromCharCode(117,117,54,117,0)));
       let descn = [String.fromCharCode(99,117,108,102,114,101,113,95,115,95,57,54,0), String.fromCharCode(97,95,55,56,95,110,117,109,101,114,105,102,121,0), String.fromCharCode(101,120,97,109,105,110,101,95,121,95,56,56,0)];
       let defaultbasketballbg6 = [191, 571];
      libavformatX += parseFloat(`${1}`);
   do {
       let stringE = 0.0;
          let tumbnailK = [442, 174, 72];
          let latnp = new Map([[String.fromCharCode(107,95,56,95,103,114,97,110,117,108,97,114,105,116,121,0),93], [String.fromCharCode(105,100,101,110,116,105,102,105,101,100,95,105,95,52,57,0),414], [String.fromCharCode(122,95,54,48,95,121,98,114,105,0),114]]);
         stringE -= parseFloat(`${3}`);
         tumbnailK = [latnp.size << (Math.min(Math.abs(2), 3))];
         latnp = new Map([[`${latnp.size}`, 1]]);
      if (5.31 == (3.4 - stringE) || (stringE / 3.4) == 4.47) {
          let styleg = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,95,52,95,55,53,0);
          let actionW = String.fromCharCode(114,97,110,115,102,111,114,109,95,114,95,54,49,0);
          let splashy = 4.0;
          let logoutH = new Map([[String.fromCharCode(106,117,115,116,95,113,95,55,0),706], [String.fromCharCode(108,95,55,57,0),133], [String.fromCharCode(99,114,101,97,116,111,114,95,54,95,56,53,0),242]]);
          let phoneW = String.fromCharCode(100,117,114,97,116,105,111,110,95,100,95,53,51,0);
         stringE /= Math.max(parseFloat(`${logoutH.size >> (Math.min(Math.abs(1), 3))}`), 4);
         styleg += `${(String.fromCharCode(104,0) == phoneW ? phoneW.length : styleg.length)}`;
         actionW += `${phoneW.length}`;
         splashy *= parseFloat(`${phoneW.length}`);
         logoutH = new Map([[phoneW, (actionW == String.fromCharCode(84,0) ? phoneW.length : actionW.length)]]);
      }
      while (2.10 <= (stringE - 1.8)) {
         stringE -= parseFloat(`${parseInt(`${stringE}`)}`);
         break;
      }
      penaltymatchiconr += `${parseInt(`${trophyD}`)}`;
      if (String.fromCharCode(119,53,49,57,114,109,112,0) == penaltymatchiconr) {
         break;
      }
   } while ((String.fromCharCode(119,53,49,57,114,109,112,0) == penaltymatchiconr) && (1.75 >= (parseFloat(`${penaltymatchiconr.length}`) * libavformatX)));
   if (5.67 < (trophyD * 5.51) && (trophyD / (Math.max(5.51, 2))) < 2.28) {
      trophyD -= tickH.size;
   }
   if (shrunkK.length >= 3) {
       let debugH = [784, 945];
       let clockc = false;
       let penaltyshootnogoalo = String.fromCharCode(102,117,122,122,101,114,115,95,55,95,54,48,0);
       let issubM = 3;
       let singleE = String.fromCharCode(101,120,112,108,105,99,105,116,101,108,121,95,102,95,53,54,0);
         debugH.push((penaltyshootnogoalo.length << (Math.min(4, Math.abs((clockc ? 2 : 1))))));
         debugH.push(3);
      do {
         clockc = 54 > issubM;
         if (clockc ? !clockc : clockc) {
            break;
         }
      } while ((5 > (5 & debugH.length)) && (clockc ? !clockc : clockc));
         debugH = [issubM];
      do {
          let iconbellactiveR = String.fromCharCode(116,101,108,108,97,114,95,114,95,52,54,0);
          let leakcheckerL = new Map([[String.fromCharCode(111,95,57,52,95,112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,0),String.fromCharCode(97,95,49,53,95,116,104,111,117,115,97,110,100,115,0)], [String.fromCharCode(106,95,55,50,95,118,101,99,116,0),String.fromCharCode(117,110,105,113,117,101,108,121,95,120,95,50,55,0)]]);
          let shootv = 1;
          let langkeyr = [345, 778, 652];
         singleE += `${leakcheckerL.size * singleE.length}`;
         iconbellactiveR = `${langkeyr.length >> (Math.min(Math.abs(2), 1))}`;
         leakcheckerL[`${shootv}`] = shootv;
         langkeyr = [1];
         if (String.fromCharCode(118,52,116,118,100,118,0) == singleE) {
            break;
         }
      } while ((String.fromCharCode(118,52,116,118,100,118,0) == singleE) && (4 <= singleE.length));
      for (let z = 0; z < 2; z++) {
          let predictionactive6 = 2;
         singleE += `${(String.fromCharCode(82,0) == penaltyshootnogoalo ? debugH.length : penaltyshootnogoalo.length)}`;
         predictionactive6 &= predictionactive6;
      }
          let homeloadingO = String.fromCharCode(100,101,102,108,105,99,107,101,114,95,54,95,57,48,0);
          let buildS = String.fromCharCode(100,105,115,112,97,116,99,104,105,110,103,95,103,95,50,50,0);
         singleE = `${issubM % 1}`;
         homeloadingO = `${buildS.length - homeloadingO.length}`;
         buildS = `${buildS.length}`;
      while (clockc) {
          let f_playerf = 3.0;
          let animationsF = 1.0;
         singleE = `${issubM & singleE.length}`;
         f_playerf /= Math.max(1, 2);
         animationsF -= parseInt(`${f_playerf}`);
         break;
      }
      for (let d = 0; d < 3; d++) {
          let otherZ = false;
          let largebrightnessR = String.fromCharCode(120,95,56,50,95,97,112,101,114,0);
          let private_31h = 1.0;
          let iconshareC = String.fromCharCode(109,99,111,114,101,95,55,95,56,50,0);
         clockc = (9 >= (singleE.length & (!otherZ ? 9 : singleE.length)));
         otherZ = !largebrightnessR.endsWith(`${private_31h}`);
         largebrightnessR = "1";
         private_31h /= Math.max(2, parseInt(`${private_31h}`) ^ largebrightnessR.length);
         iconshareC = "2";
      }
         singleE += `${issubM}`;
         clockc = (singleE.length + debugH.length) <= 21;
      if (singleE.length < 1) {
         issubM |= (issubM - (clockc ? 1 : 2));
      }
      if (penaltyshootnogoalo.length < 1) {
         penaltyshootnogoalo = `${issubM}`;
      }
          let moviesP = 4.0;
         issubM <<= Math.min(debugH.length, 3);
         moviesP /= Math.max(5, parseFloat(`${parseInt(`${moviesP}`)}`));
         singleE += "3";
      tickH = new Map([[`${libavformatX}`, parseInt(`${libavformatX}`) * 2]]);
   }
       let clearf = 5.0;
       let checkboxi = String.fromCharCode(111,112,117,115,108,97,99,105,110,103,95,54,95,53,53,0);
       let downloadedH = String.fromCharCode(109,95,52,49,95,99,114,101,97,116,105,110,103,0);
      do {
          let models9 = 1.0;
          let castingZ = 1;
          let topon3 = String.fromCharCode(107,95,49,49,95,115,111,99,107,101,116,115,0);
          let profilepic3 = String.fromCharCode(108,111,97,100,95,109,95,56,53,0);
          let executorW = String.fromCharCode(111,99,116,112,111,105,110,116,95,118,95,53,0);
         checkboxi = `${(topon3 == String.fromCharCode(79,0) ? topon3.length : parseInt(`${models9}`))}`;
         models9 *= parseFloat(`${3}`);
         castingZ /= Math.max(profilepic3.length >> (Math.min(2, Math.abs(castingZ))), 1);
         profilepic3 += "1";
         executorW += `${profilepic3.length * 3}`;
         if (checkboxi == String.fromCharCode(48,103,100,119,49,106,95,0)) {
            break;
         }
      } while ((checkboxi == String.fromCharCode(48,103,100,119,49,106,95,0)) && (downloadedH.length < 5));
       let spinnerd = String.fromCharCode(117,110,98,108,111,99,107,105,110,103,95,104,95,57,57,0);
       let zhubou = String.fromCharCode(108,111,116,116,105,101,95,48,95,52,56,0);
      while (4 <= (1 & spinnerd.length) || (clearf * parseFloat(`${spinnerd.length}`)) <= 4.28) {
          let libavfilter8 = [101, 752, 229];
          let teamdetailsbge = String.fromCharCode(114,111,117,110,100,95,48,95,54,53,0);
          let middlesound7 = true;
         spinnerd = `${(String.fromCharCode(104,0) == spinnerd ? parseInt(`${clearf}`) : spinnerd.length)}`;
         libavfilter8 = [libavfilter8.length ^ teamdetailsbge.length];
         teamdetailsbge = `${(String.fromCharCode(49,0) == teamdetailsbge ? teamdetailsbge.length : libavfilter8.length)}`;
         middlesound7 = !middlesound7;
         break;
      }
      if (2 > downloadedH.length) {
         downloadedH += `${zhubou.length}`;
      }
          let roundz = 1.0;
          let sheet5 = String.fromCharCode(109,97,103,110,105,116,117,100,101,115,95,111,95,57,57,0);
         clearf *= parseFloat(`${1}`);
         roundz += (sheet5 == String.fromCharCode(110,0) ? sheet5.length : parseInt(`${roundz}`));
         downloadedH = `${spinnerd.length}`;
      if (checkboxi != spinnerd) {
         spinnerd = "2";
      }
         spinnerd = "3";
      for (let i = 0; i < 3; i++) {
          let successK = String.fromCharCode(100,114,105,118,101,114,95,106,95,54,53,0);
          let debugm = new Map([[String.fromCharCode(108,108,97,117,100,100,115,112,95,106,95,53,50,0),true ], [String.fromCharCode(117,95,49,57,95,110,117,108,108,112,97,99,107,101,116,0),true ]]);
          let scheduleM = new Map([[String.fromCharCode(107,95,52,51,95,108,101,118,105,110,115,111,110,0),false ], [String.fromCharCode(115,101,116,116,105,103,110,115,95,117,95,55,50,0),false ], [String.fromCharCode(114,101,108,97,121,95,115,95,50,0),false ]]);
          let cornerb = true;
         downloadedH += `${(parseInt(`${clearf}`) | (cornerb ? 3 : 3))}`;
         successK += `${debugm.size * scheduleM.size}`;
         debugm[successK] = successK.length;
         scheduleM = new Map([[`${scheduleM.size}`, scheduleM.size % (Math.max(successK.length, 10))]]);
         cornerb = debugm.size == 93 && successK.length == 93;
      }
      tickH = new Map([[`${trophyD}`, parseInt(`${trophyD}`)]]);
   while (!predictionbannerC) {
       let iconwatchD = String.fromCharCode(120,95,54,52,95,97,99,99,101,115,115,111,114,0);
       let showmoref = 0.0;
       let refreshborderlessJ = 4;
       let sellB = String.fromCharCode(115,112,111,105,108,101,114,95,50,95,53,50,0);
       let mail_ = false;
         mail_ = 56.22 <= showmoref;
      while (4 == (sellB.length * parseInt(`${showmoref}`))) {
          let nterstitial2 = String.fromCharCode(114,95,54,56,95,118,111,116,101,100,0);
          let incidentm = 3.0;
          let description_hw6 = false;
          let hooksn = new Map([[String.fromCharCode(109,95,56,56,95,115,109,105,108,105,101,115,0),552], [String.fromCharCode(118,95,56,55,95,103,114,105,100,0),152]]);
         sellB += `${((description_hw6 ? 5 : 2) % (Math.max((mail_ ? 4 : 2), 7)))}`;
         nterstitial2 += `${hooksn.size}`;
         incidentm -= parseFloat(`${nterstitial2.length / (Math.max(1, 7))}`);
         description_hw6 = 58.22 < incidentm;
         hooksn[`${incidentm}`] = 3;
         break;
      }
      if ((parseInt(`${showmoref}`) * sellB.length) < 2) {
         sellB += `${(refreshborderlessJ / (Math.max(10, (mail_ ? 5 : 1))))}`;
      }
         refreshborderlessJ |= sellB.length;
         sellB = `${iconwatchD.length << (Math.min(Math.abs(1), 3))}`;
         sellB = `${iconwatchD.length / 1}`;
      if (mail_) {
          let greenarrowup2 = String.fromCharCode(99,111,110,102,105,103,117,114,101,95,105,95,55,49,0);
          let iconarrowrightorangey = new Map([[String.fromCharCode(122,95,55,51,95,109,117,108,116,105,99,97,115,116,0),899], [String.fromCharCode(116,121,112,101,100,101,102,95,116,95,50,52,0),829]]);
         refreshborderlessJ |= 2 - refreshborderlessJ;
         greenarrowup2 = `${(greenarrowup2 == String.fromCharCode(115,0) ? iconarrowrightorangey.size : greenarrowup2.length)}`;
         iconarrowrightorangey = new Map([[`${iconarrowrightorangey.size}`, greenarrowup2.length << (Math.min(Math.abs(3), 4))]]);
      }
      while (2 <= iconwatchD.length) {
         refreshborderlessJ -= sellB.length;
         break;
      }
         iconwatchD += "3";
         sellB = `${((mail_ ? 2 : 3) & iconwatchD.length)}`;
      while (!iconwatchD.includes(`${showmoref}`)) {
          let greytickp = 5.0;
          let mergerL = 4.0;
          let injuryP = String.fromCharCode(101,95,53,51,95,108,111,99,97,108,101,0);
          let largesoundV = String.fromCharCode(112,97,115,115,101,100,95,101,95,54,49,0);
          let applicationl = String.fromCharCode(101,120,99,105,116,97,116,105,111,110,95,116,95,51,57,0);
         showmoref *= parseFloat(`${parseInt(`${greytickp}`) - sellB.length}`);
         greytickp *= parseFloat(`${parseInt(`${mergerL}`) - 3}`);
         mergerL /= Math.max(applicationl.length % 2, 4);
         injuryP += `${(String.fromCharCode(103,0) == injuryP ? injuryP.length : parseInt(`${mergerL}`))}`;
         largesoundV = `${2 >> (Math.min(2, injuryP.length))}`;
         applicationl += `${(String.fromCharCode(107,0) == largesoundV ? largesoundV.length : applicationl.length)}`;
         break;
      }
      for (let s = 0; s < 1; s++) {
         iconwatchD += `${parseInt(`${showmoref}`) << (Math.min(Math.abs(1), 1))}`;
      }
         mail_ = iconwatchD.length < 15;
      do {
          let reddownarrowK = String.fromCharCode(97,114,114,111,119,95,54,95,52,56,0);
         mail_ = !mail_;
         reddownarrowK = `${reddownarrowK.length | 3}`;
         if (mail_ ? !mail_ : mail_) {
            break;
         }
      } while ((sellB.length < 5) && (mail_ ? !mail_ : mail_));
      if (sellB != String.fromCharCode(49,0)) {
         iconwatchD = `${2 >> (Math.min(2, sellB.length))}`;
      }
      predictionbannerC = 58 < refreshborderlessJ;
      break;
   }
       let kuaishout = 3.0;
       let orientationM = String.fromCharCode(98,115,105,122,101,95,52,95,56,48,0);
       let malaysia1 = String.fromCharCode(100,115,100,112,99,109,95,118,95,53,54,0);
         malaysia1 = `${1 | orientationM.length}`;
      for (let x = 0; x < 1; x++) {
         orientationM = `${parseInt(`${kuaishout}`) % (Math.max(7, orientationM.length))}`;
      }
      while ((orientationM.length - parseInt(`${kuaishout}`)) == 1 || (kuaishout - parseFloat(`${orientationM.length}`)) == 1.13) {
         orientationM = `${(malaysia1 == String.fromCharCode(71,0) ? malaysia1.length : orientationM.length)}`;
         break;
      }
         orientationM += `${3 & orientationM.length}`;
          let cornerl = [865, 537, 102];
          let dataD = false;
         malaysia1 += `${parseInt(`${kuaishout}`)}`;
         cornerl = [cornerl.length];
         dataD = dataD && cornerl.length <= 100;
      iconbackwhiteE *= tickH.size;
   if (penaltymatchiconr.length >= submitU.length) {
       let gradlewa = 4.0;
       let halfl = true;
       let clock6 = String.fromCharCode(107,95,56,51,95,102,108,97,116,116,101,110,101,100,0);
          let bridgeR = new Map([[String.fromCharCode(118,95,50,55,95,114,101,100,111,0),String.fromCharCode(98,111,111,108,101,97,110,95,104,95,51,48,0)], [String.fromCharCode(102,95,55,56,95,115,116,109,116,0),String.fromCharCode(111,95,48,95,119,101,98,115,111,99,107,101,116,0)], [String.fromCharCode(113,95,57,57,95,99,111,108,99,111,108,0),String.fromCharCode(113,95,55,55,95,109,101,109,98,101,114,115,0)]]);
          let gemfileg = 0.0;
         clock6 = `${bridgeR.size | 1}`;
         bridgeR = new Map([[`${gemfileg}`, parseInt(`${gemfileg}`) >> (Math.min(3, Math.abs(parseInt(`${gemfileg}`))))]]);
          let sportsd = true;
         halfl = 89.10 > gradlewa || clock6 == String.fromCharCode(71,0);
         sportsd = (!sportsd ? sportsd : sportsd);
       let runtimeschedulerR = String.fromCharCode(114,111,117,110,100,101,100,110,101,115,115,95,112,95,53,0);
      do {
         gradlewa /= Math.max(2, clock6.length + 1);
         if (2602609.0 == gradlewa) {
            break;
         }
      } while ((2602609.0 == gradlewa) && (halfl));
         gradlewa /= Math.max(4, clock6.length);
      do {
         clock6 = `${clock6.length}`;
         if (4697168 == clock6.length) {
            break;
         }
      } while ((4697168 == clock6.length) && (clock6.length == 1));
      while (runtimeschedulerR == clock6) {
          let privatechatbgY = false;
          let fullX = new Map([[String.fromCharCode(108,95,51,54,95,100,101,113,117,97,110,116,105,122,101,114,0),304], [String.fromCharCode(120,95,52,52,95,116,114,97,110,115,99,116,105,111,110,0),39], [String.fromCharCode(116,95,57,50,95,106,115,101,112,0),757]]);
          let profileactivev = String.fromCharCode(97,114,114,97,121,115,95,116,95,51,49,0);
         clock6 = `${((privatechatbgY ? 3 : 1) / 3)}`;
         privatechatbgY = (profileactivev.length >> (Math.min(3, Math.abs(fullX.size)))) <= 2;
         fullX[`${profileactivev}`] = 3;
         break;
      }
         clock6 = `${(runtimeschedulerR == String.fromCharCode(56,0) ? runtimeschedulerR.length : (halfl ? 5 : 1))}`;
         runtimeschedulerR += `${2 >> (Math.min(3, runtimeschedulerR.length))}`;
      submitU = `${parseInt(`${libavformatX}`) / (Math.max(shrunkK.length, 7))}`;
   }
   for (let e = 0; e < 1; e++) {
      submitU = `${((predictionbannerC ? 5 : 4))}`;
   }
      iconcloseT = [2];
      submitU += `${(String.fromCharCode(56,0) == shrunkK ? penaltymatchiconr.length : shrunkK.length)}`;
      armvaz[`${iconbackwhiteE}`] = parseInt(`${iconbackwhiteE}`);
       let predictionarrowK = true;
      for (let d = 0; d < 2; d++) {
         predictionarrowK = !predictionarrowK;
      }
      do {
          let baidun = String.fromCharCode(100,101,99,111,100,101,114,115,95,56,95,55,52,0);
          let regenge = 1.0;
         predictionarrowK = baidun == String.fromCharCode(75,0);
         baidun += "1";
         regenge /= Math.max(2, 5);
         if (predictionarrowK ? !predictionarrowK : predictionarrowK) {
            break;
         }
      } while ((predictionarrowK ? !predictionarrowK : predictionarrowK) && (!predictionarrowK));
      do {
         predictionarrowK = !predictionarrowK;
         if (predictionarrowK ? !predictionarrowK : predictionarrowK) {
            break;
         }
      } while ((predictionarrowK ? !predictionarrowK : predictionarrowK) && (predictionarrowK));
      tickH[shrunkK] = tickH.size;
   do {
       let tickedz = String.fromCharCode(122,95,54,54,95,112,114,101,102,97,99,101,0);
       let modules1 = String.fromCharCode(119,95,57,95,116,105,99,107,101,114,0);
       let minimize5 = String.fromCharCode(102,95,50,50,95,104,97,108,102,0);
       let gradlewU = String.fromCharCode(106,95,53,55,95,105,115,115,117,101,114,0);
       let runtime3 = 1.0;
      for (let a = 0; a < 1; a++) {
          let nalyticsu = String.fromCharCode(109,95,56,52,95,115,116,111,114,97,98,108,101,0);
         tickedz += `${tickedz.length | parseInt(`${runtime3}`)}`;
         nalyticsu = `${2 + nalyticsu.length}`;
      }
       let iconpointscoreD = false;
      if (gradlewU.length > 1) {
          let iconpointscorez = String.fromCharCode(99,95,49,48,48,95,110,117,108,108,0);
          let awayplayerP = new Map([[String.fromCharCode(118,95,57,49,95,100,99,116,120,100,99,0),true ], [String.fromCharCode(115,99,97,110,95,54,95,55,49,0),false ], [String.fromCharCode(100,95,53,57,95,100,121,110,97,109,105,99,0),true ]]);
         gradlewU += `${2 >> (Math.min(1, modules1.length))}`;
         iconpointscorez = `${awayplayerP.size}`;
         awayplayerP[`${iconpointscorez}`] = awayplayerP.size + 1;
      }
      do {
         modules1 = `${gradlewU.length}`;
         if (modules1.length == 1509218) {
            break;
         }
      } while ((modules1.length == 1509218) && (modules1.startsWith(minimize5)));
      do {
         gradlewU = `${modules1.length | parseInt(`${runtime3}`)}`;
         if (947176 == gradlewU.length) {
            break;
         }
      } while ((4 == minimize5.length) && (947176 == gradlewU.length));
       let baiduadsQ = 4;
       let calendart = 1;
      while (4.58 >= (1.61 / (Math.max(1, runtime3))) && 1 >= (baiduadsQ / (Math.max(3, parseInt(`${runtime3}`))))) {
         baiduadsQ %= Math.max(minimize5.length, 4);
         break;
      }
      do {
         baiduadsQ >>= Math.min(1, Math.abs(baiduadsQ));
         if (baiduadsQ == 1171014) {
            break;
         }
      } while ((1 == (4 + baiduadsQ) && 4 == (baiduadsQ + calendart)) && (baiduadsQ == 1171014));
      do {
         calendart &= ((iconpointscoreD ? 3 : 4));
         if (217499 == calendart) {
            break;
         }
      } while ((217499 == calendart) && (iconpointscoreD));
      while (minimize5.length < modules1.length) {
          let login6 = String.fromCharCode(119,95,54,48,95,115,104,101,101,116,0);
          let defaultplayerimgp = String.fromCharCode(116,104,114,101,97,100,115,108,105,99,101,95,116,95,54,54,0);
          let libglogS = 3;
         modules1 = `${(minimize5 == String.fromCharCode(70,0) ? minimize5.length : gradlewU.length)}`;
         login6 = `${libglogS * 2}`;
         defaultplayerimgp = `${libglogS}`;
         break;
      }
      if (modules1 == String.fromCharCode(83,0)) {
         gradlewU = `${((iconpointscoreD ? 2 : 2) % (Math.max(baiduadsQ, 9)))}`;
      }
          let predictionwinQ = 1.0;
         minimize5 += `${1 << (Math.min(5, minimize5.length))}`;
         predictionwinQ -= parseFloat(`${parseInt(`${predictionwinQ}`)}`);
         iconpointscoreD = gradlewU.startsWith(`${baiduadsQ}`);
      while (baiduadsQ == 4 || 2 == (baiduadsQ << (Math.min(Math.abs(4), 2)))) {
         iconpointscoreD = minimize5.startsWith(`${runtime3}`);
         break;
      }
         iconpointscoreD = 40 == minimize5.length;
      predictionbannerC = predictionbannerC || shrunkK.length >= 67;
      if (predictionbannerC ? !predictionbannerC : predictionbannerC) {
         break;
      }
   } while ((predictionbannerC) && (predictionbannerC ? !predictionbannerC : predictionbannerC));
   do {
       let roots = String.fromCharCode(119,95,49,55,95,102,105,114,101,0);
       let plusC = 3.0;
       let largesoundl = new Map([[String.fromCharCode(108,95,53,54,95,100,101,116,101,114,109,105,110,97,98,108,101,0),String.fromCharCode(102,95,57,57,95,118,101,114,115,105,111,110,0)], [String.fromCharCode(118,95,53,50,95,99,104,115,99,97,108,101,0),String.fromCharCode(99,95,52,51,95,110,111,116,105,99,101,0)], [String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,95,50,95,52,50,0),String.fromCharCode(118,95,54,95,102,114,105,101,110,100,108,121,0)]]);
      do {
         plusC /= Math.max(1, parseFloat(`${largesoundl.size << (Math.min(Math.abs(1), 3))}`));
         if (plusC == 1786597.0) {
            break;
         }
      } while ((plusC == 1786597.0) && (Array.from(largesoundl.values()).includes(plusC)));
      while (4.15 >= (plusC / (Math.max(1.79, 2)))) {
         plusC += parseFloat(`${roots.length << (Math.min(5, Math.abs(largesoundl.size)))}`);
         break;
      }
         roots = `${roots.length ^ 1}`;
       let lessq = [547, 706];
          let combinedv = String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,108,95,50,0);
         plusC *= parseFloat(`${largesoundl.size}`);
         combinedv = `${combinedv.length % 2}`;
      for (let k = 0; k < 1; k++) {
          let mimej = new Map([[String.fromCharCode(109,95,49,54,95,113,99,101,108,112,0),902], [String.fromCharCode(112,114,111,100,117,99,116,115,95,103,95,53,0),70], [String.fromCharCode(97,115,105,110,107,95,109,95,51,0),88]]);
          let fillU = new Map([[String.fromCharCode(99,102,102,116,98,95,50,95,57,49,0),208], [String.fromCharCode(100,105,118,105,100,101,114,95,115,95,50,49,0),140], [String.fromCharCode(97,95,57,95,112,114,101,115,101,116,115,0),124]]);
          let libtobZ = [String.fromCharCode(110,116,102,115,95,115,95,52,56,0), String.fromCharCode(110,95,56,48,95,102,111,114,109,97,116,0)];
          let liveshareb = new Map([[String.fromCharCode(100,113,117,111,116,101,95,51,95,56,0),false ], [String.fromCharCode(112,95,52,53,95,112,117,98,108,105,115,104,97,98,108,101,0),true ]]);
         plusC *= parseFloat(`${lessq.length}`);
         mimej[`${libtobZ.length}`] = libtobZ.length;
         fillU = new Map([[`${liveshareb.size}`, libtobZ.length << (Math.min(4, Math.abs(liveshareb.size)))]]);
      }
          let userQ = 1.0;
          let circleN = false;
          let basketballhometeamo = 0.0;
         largesoundl[`${basketballhometeamo}`] = largesoundl.size - 3;
         userQ += (parseFloat(`${(circleN ? 2 : 2) % (Math.max(parseInt(`${userQ}`), 6))}`));
         circleN = circleN || userQ < 8.2;
         basketballhometeamo -= ((circleN ? 3 : 1) ^ parseInt(`${userQ}`));
      if (4 == (2 << (Math.min(3, Math.abs(largesoundl.size))))) {
         largesoundl[`${lessq.length}`] = largesoundl.size;
      }
      for (let m = 0; m < 1; m++) {
         plusC += parseFloat(`${largesoundl.size}`);
      }
      libavformatX /= Math.max((parseFloat(`${2 * (predictionbannerC ? 4 : 3)}`)), 3);
      if (1954525.0 == libavformatX) {
         break;
      }
   } while ((!Array.from(tickH.values()).includes(libavformatX)) && (1954525.0 == libavformatX));
   while (iconbackwhiteE == iconcloseT.length) {
      iconbackwhiteE *= penaltymatchiconr.length;
      break;
   }
   do {
       let rightF = 1.0;
       let mime6 = 4.0;
       let injuryk = 4.0;
       let shielddoneJ = 0.0;
         mime6 /= Math.max(5, parseFloat(`${parseInt(`${rightF}`) | parseInt(`${injuryk}`)}`));
         injuryk += parseFloat(`${3}`);
          let privacyR = new Map([[String.fromCharCode(101,118,97,108,117,97,116,101,100,95,122,95,53,56,0),String.fromCharCode(108,95,53,48,95,112,114,101,101,109,112,104,0)], [String.fromCharCode(117,95,53,56,95,115,104,117,116,116,105,110,103,0),String.fromCharCode(115,117,109,95,55,95,55,50,0)]]);
         mime6 *= parseFloat(`${2 ^ parseInt(`${injuryk}`)}`);
         privacyR = new Map([[`${privacyR.size}`, 1 << (Math.min(1, Math.abs(privacyR.size)))]]);
       let gesturesr = String.fromCharCode(115,98,111,120,95,113,95,52,0);
       let baiduo = String.fromCharCode(99,117,115,116,111,109,105,122,101,114,95,54,95,51,0);
      if (rightF == 1.51) {
         gesturesr = `${baiduo.length}`;
      }
      if (baiduo == String.fromCharCode(48,0)) {
         gesturesr += `${(String.fromCharCode(72,0) == baiduo ? parseInt(`${injuryk}`) : baiduo.length)}`;
      }
       let defaultbasketballbgt = new Map([[String.fromCharCode(115,116,114,109,95,105,95,50,48,0),true ], [String.fromCharCode(97,115,121,110,99,104,114,111,110,111,117,115,108,121,95,99,95,50,49,0),false ], [String.fromCharCode(98,95,50,52,95,97,112,112,118,101,121,111,114,0),true ]]);
         shielddoneJ -= parseInt(`${rightF}`);
         defaultbasketballbgt[baiduo] = baiduo.length;
         defaultbasketballbgt = new Map([[`${defaultbasketballbgt.size}`, parseInt(`${shielddoneJ}`)]]);
         baiduo = "2";
      for (let p = 0; p < 1; p++) {
         injuryk /= Math.max(parseFloat(`${gesturesr.length | 1}`), 2);
      }
      libavformatX -= parseFloat(`${parseInt(`${mime6}`) % 3}`);
      if (132056.0 == libavformatX) {
         break;
      }
   } while ((parseFloat(`${iconcloseT.length}`) <= libavformatX) && (132056.0 == libavformatX));
   for (let x = 0; x < 1; x++) {
      tickH[`${predictionbannerC}`] = 3;
   }
   while (shrunkK.length > submitU.length) {
      submitU += `${parseInt(`${trophyD}`) / (Math.max(8, iconcloseT.length))}`;
      break;
   }
      submitU += `${armvaz.size / 2}`;
      iconbackwhiteE *= 1;
   do {
       let dplusy = 2.0;
       let reactnativejs8 = 2.0;
       let defaultlogoV = String.fromCharCode(104,95,55,52,95,115,113,108,105,116,101,112,97,103,101,114,0);
      do {
         dplusy /= Math.max(1, 5);
         if (dplusy == 4217084.0) {
            break;
         }
      } while ((4 == (parseInt(`${dplusy}`) / (Math.max(defaultlogoV.length, 5))) || 4.27 == (dplusy / 5.36)) && (dplusy == 4217084.0));
         dplusy -= 2;
         defaultlogoV += `${parseInt(`${dplusy}`)}`;
      if ((defaultlogoV.length % (Math.max(4, 6))) > 3 && (4 * parseInt(`${dplusy}`)) > 1) {
          let launcherr = true;
          let iconshareD = new Map([[String.fromCharCode(121,95,50,50,95,115,99,97,110,115,0),231], [String.fromCharCode(105,102,111,114,119,97,114,100,95,105,95,54,49,0),216]]);
          let indexo = 1.0;
          let fillw = [933, 465, 418];
          let libreactnativeblobn = String.fromCharCode(101,95,57,50,95,105,116,101,114,97,116,105,111,110,0);
         defaultlogoV += `${((launcherr ? 3 : 5) / 1)}`;
         launcherr = indexo <= 59.25;
         iconshareD = new Map([[`${iconshareD.size}`, parseInt(`${indexo}`) / (Math.max(4, iconshareD.size))]]);
         fillw.push(2);
         libreactnativeblobn += `${fillw.length}`;
      }
      for (let s = 0; s < 1; s++) {
         reactnativejs8 /= Math.max(parseInt(`${dplusy}`), 5);
      }
          let cancelz = String.fromCharCode(110,95,56,52,95,112,108,97,116,102,111,114,109,0);
          let layout6 = 5;
         dplusy -= parseInt(`${dplusy}`) >> (Math.min(3, Math.abs(1)));
         cancelz = "2";
         layout6 -= 3 | cancelz.length;
         reactnativejs8 += defaultlogoV.length;
         reactnativejs8 -= defaultlogoV.length << (Math.min(3, Math.abs(parseInt(`${dplusy}`))));
       let weiboc = String.fromCharCode(100,95,56,57,95,115,101,116,99,98,0);
      penaltymatchiconr += `${parseInt(`${trophyD}`) / 2}`;
      if (penaltymatchiconr == String.fromCharCode(103,103,104,118,116,108,120,103,0)) {
         break;
      }
   } while ((4.44 == (3.77 - iconbackwhiteE)) && (penaltymatchiconr == String.fromCharCode(103,103,104,118,116,108,120,103,0)));
      tickH = new Map([[`${armvaz.size}`, parseInt(`${libavformatX}`)]]);
      iconbackwhiteE /= Math.max(3, tickH.size);
}

  /**
   * Set the error state to true which then
   * changes our renderError function
   *
   * @param {object} err  Err obj returned from <Video> component
   */
  _onError(err) {
       let downloaded1 = String.fromCharCode(115,95,50,50,0);
    let sentryS = String.fromCharCode(114,101,108,99,116,120,95,110,95,55,0);
    let sportd = 3.0;
    let goallogoq = new Map([[String.fromCharCode(106,95,55,52,95,104,101,97,100,112,104,111,110,101,0),33], [String.fromCharCode(105,100,99,116,100,115,112,95,104,95,50,57,0),703]]);
    let shrunkx = String.fromCharCode(99,111,110,115,117,109,97,98,108,101,95,104,95,56,55,0);
    let libsentry_ = 4.0;
    let mimeb = String.fromCharCode(116,104,114,111,116,116,108,105,110,103,95,119,95,54,52,0);
    let nnewssharet = 5.0;
    let arrowselectdownS = String.fromCharCode(108,95,55,54,95,116,121,112,101,115,101,116,116,101,114,0);
    let iconuser5 = new Map([[String.fromCharCode(110,95,49,48,48,95,115,101,101,107,116,97,98,108,101,0),125], [String.fromCharCode(116,95,50,48,95,100,99,97,100,97,116,97,0),771], [String.fromCharCode(105,110,116,105,95,115,95,50,51,0),752]]);
       let middleZ = 3;
       let episodes9 = String.fromCharCode(119,95,55,54,95,118,111,99,97,98,0);
      if (!episodes9.startsWith(`${middleZ}`)) {
         episodes9 += `${episodes9.length}`;
      }
         middleZ |= (episodes9 == String.fromCharCode(112,0) ? episodes9.length : middleZ);
      do {
         episodes9 += `${(String.fromCharCode(108,0) == episodes9 ? middleZ : episodes9.length)}`;
         if (1668112 == episodes9.length) {
            break;
         }
      } while (((episodes9.length - 2) <= 3 && 2 <= (episodes9.length - middleZ)) && (1668112 == episodes9.length));
       let bangt = 4;
      if ((middleZ >> (Math.min(3, Math.abs(bangt)))) > 1 && 4 > (bangt >> (Math.min(Math.abs(1), 1)))) {
         middleZ &= 3;
      }
      for (let f = 0; f < 3; f++) {
         middleZ += episodes9.length ^ 1;
      }
      sentryS = "3";
   for (let f = 0; f < 1; f++) {
      goallogoq[`${sportd}`] = mimeb.length + parseInt(`${sportd}`);
   }
      sentryS = `${parseInt(`${nnewssharet}`)}`;
   do {
      sentryS += `${parseInt(`${libsentry_}`) | sentryS.length}`;
      if (String.fromCharCode(100,99,107,57,99,104,119,0) == sentryS) {
         break;
      }
   } while ((downloaded1.length >= 4 || sentryS == String.fromCharCode(122,0)) && (String.fromCharCode(100,99,107,57,99,104,119,0) == sentryS));

    let state = this.state;
      mimeb = "2";
   do {
      goallogoq = new Map([[`${goallogoq.size}`, parseInt(`${nnewssharet}`)]]);
      if (goallogoq.size == 3999958) {
         break;
      }
   } while (((5 & goallogoq.size) == 4 && (goallogoq.size & mimeb.length) == 5) && (goallogoq.size == 3999958));
      goallogoq = new Map([[`${nnewssharet}`, 3 + parseInt(`${libsentry_}`)]]);
   do {
      goallogoq[`${sportd}`] = parseInt(`${sportd}`);
      if (goallogoq.size == 3050879) {
         break;
      }
   } while ((1 < (goallogoq.size & 2)) && (goallogoq.size == 3050879));

    state.error = true;
       let dplusn = new Map([[String.fromCharCode(118,95,55,52,95,99,111,114,110,101,114,115,0),String.fromCharCode(99,111,109,112,97,114,101,102,95,102,95,55,50,0)], [String.fromCharCode(112,108,97,105,110,95,55,95,56,48,0),String.fromCharCode(114,97,119,101,110,99,95,114,95,48,0)]]);
       let collectiont = 0.0;
      if ((parseInt(`${collectiont}`) / (Math.max(10, dplusn.size))) <= 5 && (5 + dplusn.size) <= 2) {
         collectiont += parseFloat(`${parseInt(`${collectiont}`)}`);
      }
          let imagenetworkerr5 = 2.0;
          let cancelL = String.fromCharCode(100,101,108,101,103,97,116,101,95,51,95,57,48,0);
         dplusn = new Map([[cancelL, 2]]);
         imagenetworkerr5 -= parseInt(`${imagenetworkerr5}`) & 2;
         cancelL = `${parseInt(`${imagenetworkerr5}`)}`;
       let icondefaultthumbnailG = String.fromCharCode(116,95,56,57,95,102,116,118,98,108,97,110,107,0);
       let mbsplashg = String.fromCharCode(112,111,111,108,115,95,110,95,55,56,0);
      if (icondefaultthumbnailG == mbsplashg) {
         mbsplashg += `${parseInt(`${collectiont}`) % 3}`;
      }
      while (1 >= (mbsplashg.length - parseInt(`${collectiont}`)) && 5.46 >= (collectiont - 5.39)) {
         collectiont *= parseFloat(`${mbsplashg.length >> (Math.min(Math.abs(2), 4))}`);
         break;
      }
      if (mbsplashg.length < parseInt(`${collectiont}`)) {
          let gifgoalbgH = 5.0;
          let eyecloseH = String.fromCharCode(108,95,52,49,95,101,108,105,115,116,0);
          let iconsetting0 = 0.0;
          let dangerY = 5.0;
          let whiteanimationlivek = String.fromCharCode(113,95,52,56,95,105,115,112,111,115,97,98,108,101,0);
         collectiont /= Math.max(parseFloat(`${2 * mbsplashg.length}`), 1);
         gifgoalbgH += 1;
         eyecloseH = `${(whiteanimationlivek == String.fromCharCode(107,0) ? whiteanimationlivek.length : eyecloseH.length)}`;
         iconsetting0 *= parseFloat(`${parseInt(`${dangerY}`)}`);
      }
      mimeb += "1";
      mimeb = `${goallogoq.size + 1}`;
      sentryS += `${sentryS.length * parseInt(`${libsentry_}`)}`;
      sentryS += `${parseInt(`${nnewssharet}`) / 1}`;

    state.loading = false;
   if ((parseInt(`${nnewssharet}`) + arrowselectdownS.length) > 2) {
       let statisticsactiveF = [String.fromCharCode(102,95,51,51,95,109,101,109,115,121,115,0), String.fromCharCode(97,108,105,103,110,105,110,103,95,50,95,55,52,0)];
      for (let p = 0; p < 1; p++) {
          let spinnerh = String.fromCharCode(102,95,57,54,95,114,101,115,101,101,107,0);
          let reactnavigationo = 0.0;
          let injurya = String.fromCharCode(113,95,53,54,95,118,115,105,110,107,0);
         statisticsactiveF.push(injurya.length);
         spinnerh += `${parseInt(`${reactnavigationo}`)}`;
         reactnavigationo -= spinnerh.length >> (Math.min(Math.abs(2), 3));
         injurya += `${(spinnerh == String.fromCharCode(82,0) ? spinnerh.length : parseInt(`${reactnavigationo}`))}`;
      }
         statisticsactiveF = [2 | statisticsactiveF.length];
      for (let s = 0; s < 2; s++) {
         statisticsactiveF.push(statisticsactiveF.length + statisticsactiveF.length);
      }
      nnewssharet /= Math.max(2 - parseInt(`${sportd}`), 4);
   }
      arrowselectdownS += "2";
       let gmailp = String.fromCharCode(103,95,49,48,48,95,109,101,116,97,100,97,116,97,115,101,116,0);
       let informationX = 3.0;
          let homeiconR = 2;
          let wind7 = true;
         gmailp += `${((wind7 ? 1 : 4) % (Math.max(homeiconR, 4)))}`;
      if (parseInt(`${informationX}`) <= gmailp.length) {
          let arrowdownG = false;
         informationX *= (parseFloat(`${(arrowdownG ? 4 : 3) & 2}`));
      }
          let iconsaveimageh = new Map([[String.fromCharCode(115,117,105,116,101,115,95,49,95,51,56,0),718], [String.fromCharCode(112,114,111,112,111,115,101,95,115,95,49,57,0),650], [String.fromCharCode(103,95,50,50,95,113,115,118,100,101,99,0),624]]);
          let iconnewchat1 = new Map([[String.fromCharCode(116,95,53,53,95,114,116,99,119,101,98,0),708], [String.fromCharCode(122,95,57,95,101,97,103,97,105,110,0),498], [String.fromCharCode(105,95,49,56,95,110,101,111,110,0),926]]);
         gmailp = "1";
         iconsaveimageh[`${iconsaveimageh.size}`] = iconsaveimageh.size;
         iconnewchat1[`${iconsaveimageh.size}`] = 1 >> (Math.min(1, Math.abs(iconnewchat1.size)));
      while ((gmailp.length % (Math.max(3, 9))) > 1) {
         informationX -= parseFloat(`${1}`);
         break;
      }
         informationX *= parseFloat(`${gmailp.length | 2}`);
      if (gmailp.startsWith(`${informationX}`)) {
         informationX -= parseFloat(`${gmailp.length - 1}`);
      }
      arrowselectdownS += `${downloaded1.length}`;
   while (2.87 > (nnewssharet - sportd)) {
      nnewssharet *= iconuser5.size & mimeb.length;
      break;
   }


    this.setState(state);
   do {
      sentryS += `${parseInt(`${libsentry_}`)}`;
      if (sentryS == String.fromCharCode(121,118,57,0)) {
         break;
      }
   } while ((3 <= arrowselectdownS.length) && (sentryS == String.fromCharCode(121,118,57,0)));
       let mapbufferd = 2.0;
       let updates2 = new Map([[String.fromCharCode(114,101,100,117,99,116,105,111,110,115,95,105,95,53,52,0),String.fromCharCode(117,110,105,113,117,101,100,95,49,95,52,57,0)], [String.fromCharCode(101,95,55,53,95,102,99,104,111,119,110,0),String.fromCharCode(115,105,110,103,108,101,95,108,95,55,51,0)], [String.fromCharCode(107,95,55,49,95,115,104,97,112,101,115,0),String.fromCharCode(98,95,55,48,95,100,99,97,100,101,99,0)]]);
       let runtimeN = String.fromCharCode(105,95,52,95,106,101,114,114,111,114,0);
      for (let m = 0; m < 2; m++) {
          let videocommonN = [948, 729, 246];
         runtimeN = `${parseInt(`${mapbufferd}`)}`;
         videocommonN.push(3 + videocommonN.length);
      }
       let dycreatorV = String.fromCharCode(115,112,114,105,116,101,95,55,95,51,57,0);
          let backiconmasky = String.fromCharCode(117,117,105,100,117,115,109,116,95,115,95,53,54,0);
          let shareblack3 = String.fromCharCode(99,111,108,111,114,109,97,112,95,115,95,54,51,0);
         mapbufferd /= Math.max(5, parseInt(`${mapbufferd}`) >> (Math.min(shareblack3.length, 2)));
         backiconmasky = `${backiconmasky.length >> (Math.min(backiconmasky.length, 1))}`;
         shareblack3 += `${backiconmasky.length % 2}`;
         runtimeN = `${(runtimeN == String.fromCharCode(73,0) ? dycreatorV.length : runtimeN.length)}`;
          let downarrowb = false;
          let defaultteam1 = String.fromCharCode(102,95,54,95,121,101,108,108,111,119,0);
          let a_centerU = 5.0;
         dycreatorV += `${(dycreatorV.length >> (Math.min(5, Math.abs((downarrowb ? 1 : 5)))))}`;
         downarrowb = 72 > defaultteam1.length;
         defaultteam1 += `${defaultteam1.length}`;
         a_centerU += parseFloat(`${2}`);
       let servicer = 4;
      do {
         runtimeN += `${servicer}`;
         if (runtimeN == String.fromCharCode(104,53,120,101,51,0)) {
            break;
         }
      } while ((runtimeN.length < 2) && (runtimeN == String.fromCharCode(104,53,120,101,51,0)));
      do {
          let redgoalb = String.fromCharCode(115,95,55,50,95,97,110,99,105,108,108,97,114,121,0);
          let react1 = [763, 484];
          let actionu = [369, 803];
          let mini4 = 5.0;
         dycreatorV += "1";
         redgoalb = `${react1.length % (Math.max(6, redgoalb.length))}`;
         react1.push(3 / (Math.max(2, redgoalb.length)));
         actionu = [actionu.length >> (Math.min(3, react1.length))];
         mini4 *= parseFloat(`${3}`);
         if (1970264 == dycreatorV.length) {
            break;
         }
      } while ((1970264 == dycreatorV.length) && ((updates2.size ^ dycreatorV.length) <= 5 || 3 <= (dycreatorV.length ^ 5)));
          let shirt7 = 5.0;
          let panglew = 4;
         dycreatorV += `${runtimeN.length >> (Math.min(5, dycreatorV.length))}`;
         shirt7 *= parseInt(`${shirt7}`);
         panglew += 2;
      nnewssharet /= Math.max(2, 2);
   for (let c = 0; c < 3; c++) {
      iconuser5[mimeb] = sentryS.length;
   }
   if (mimeb.includes(`${arrowselectdownS.length}`)) {
      mimeb = "3";
   }

  }

   
  _onScreenTouch() {
       let aboutQ = 5;
    let moonG = String.fromCharCode(101,120,105,116,95,56,95,49,53,0);
    let iconnointernet_ = 5;
    let activityJ = [201, 981, 897];
    let inouttargetyellowf = [889, 336, 531];
    let profileinactiveb = [791, 123];
    let iconZ = String.fromCharCode(114,101,118,97,108,105,100,97,116,101,100,95,117,95,52,49,0);
    let mintegralb = false;
    let paginationO = 2.0;
    let iconmoren = true;
    let fast2 = 5.0;
    let homeiconW = String.fromCharCode(99,95,50,49,95,100,116,115,109,0);
    let basketballawayteamX = new Map([[String.fromCharCode(106,95,55,53,95,115,116,97,116,0),false ], [String.fromCharCode(115,109,111,111,116,104,105,110,103,95,107,95,53,51,0),true ]]);
       let arrowdownV = String.fromCharCode(101,120,99,105,116,97,116,105,111,110,95,99,95,49,0);
       let styleL = String.fromCharCode(110,95,49,95,108,104,97,115,104,0);
       let castP = 2.0;
         arrowdownV += `${styleL.length}`;
      if (arrowdownV != styleL) {
          let videocommon7 = String.fromCharCode(117,95,53,52,95,99,111,100,101,99,114,97,119,0);
          let typingloadingN = String.fromCharCode(104,95,49,55,95,116,97,98,0);
          let gpay9 = String.fromCharCode(101,95,52,49,95,115,111,117,110,100,0);
         styleL = `${videocommon7.length << (Math.min(styleL.length, 2))}`;
         videocommon7 += `${1 + gpay9.length}`;
         typingloadingN += "1";
         gpay9 = "2";
      }
          let switch_2mK = 4.0;
         castP -= parseFloat(`${1 << (Math.min(3, arrowdownV.length))}`);
         switch_2mK -= parseFloat(`${parseInt(`${switch_2mK}`)}`);
         castP /= Math.max(2, parseFloat(`${styleL.length >> (Math.min(3, Math.abs(parseInt(`${castP}`))))}`));
      do {
         arrowdownV = `${styleL.length << (Math.min(Math.abs(2), 1))}`;
         if (arrowdownV == String.fromCharCode(116,102,56,106,48,97,110,109,105,0)) {
            break;
         }
      } while ((styleL != String.fromCharCode(86,0) && arrowdownV != String.fromCharCode(55,0)) && (arrowdownV == String.fromCharCode(116,102,56,106,48,97,110,109,105,0)));
      while (styleL != String.fromCharCode(66,0)) {
         arrowdownV += `${styleL.length}`;
         break;
      }
         arrowdownV += `${arrowdownV.length - parseInt(`${castP}`)}`;
       let rightK = false;
      do {
         arrowdownV = `${((rightK ? 3 : 5))}`;
         if (858976 == arrowdownV.length) {
            break;
         }
      } while ((858976 == arrowdownV.length) && (arrowdownV.includes(`${rightK}`)));
      moonG = `${(iconZ.length % (Math.max(5, (mintegralb ? 2 : 1))))}`;
   if (1 <= profileinactiveb.length) {
       let play7 = 1;
       let indicatorS = String.fromCharCode(98,95,54,55,95,99,111,111,107,100,97,116,97,0);
       let libnmsM = String.fromCharCode(104,107,100,102,95,102,95,55,0);
       let logouser3 = [660, 314, 620];
       let classese = String.fromCharCode(117,95,53,95,118,112,111,105,110,116,0);
         libnmsM += `${libnmsM.length}`;
          let colorsg = 1.0;
         libnmsM += `${logouser3.length}`;
         colorsg -= 2;
      if (libnmsM.endsWith(`${play7}`)) {
         play7 &= 1 % (Math.max(1, play7));
      }
      while (libnmsM == String.fromCharCode(80,0)) {
         classese = `${logouser3.length % 2}`;
         break;
      }
      for (let s = 0; s < 1; s++) {
          let constantsR = String.fromCharCode(98,95,52,55,95,112,98,107,100,102,0);
          let switch_a0 = 4.0;
          let checkboxF = true;
          let plusF = 0.0;
         logouser3 = [3];
         constantsR += `${((checkboxF ? 5 : 3) ^ parseInt(`${switch_a0}`))}`;
         switch_a0 -= parseInt(`${switch_a0}`) + 3;
         checkboxF = !checkboxF && 28.43 <= plusF;
         plusF -= parseFloat(`${constantsR.length >> (Math.min(3, Math.abs(parseInt(`${switch_a0}`))))}`);
      }
          let incidentp = 2.0;
         libnmsM = `${indicatorS.length}`;
         incidentp -= parseFloat(`${parseInt(`${incidentp}`) << (Math.min(Math.abs(parseInt(`${incidentp}`)), 5))}`);
          let reducer2 = false;
          let ballv = String.fromCharCode(100,95,54,53,95,103,97,105,110,99,0);
         play7 -= indicatorS.length / (Math.max(2, 7));
         reducer2 = reducer2 || ballv.length == 98;
         ballv += "1";
         play7 |= logouser3.length - classese.length;
      while (1 <= (play7 << (Math.min(logouser3.length, 4)))) {
         logouser3.push(1 ^ indicatorS.length);
         break;
      }
         libnmsM = `${classese.length % (Math.max(8, logouser3.length))}`;
          let attributedstringM = String.fromCharCode(108,95,56,53,95,104,97,114,100,99,111,100,101,100,0);
          let point9 = 2;
          let defaultplayerimgU = String.fromCharCode(111,95,56,51,95,97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,0);
         play7 >>= Math.min(Math.abs(point9 | indicatorS.length), 1);
         attributedstringM = `${attributedstringM.length - defaultplayerimgU.length}`;
         point9 <<= Math.min(5, Math.abs((attributedstringM == String.fromCharCode(85,0) ? attributedstringM.length : defaultplayerimgU.length)));
         libnmsM = `${classese.length % (Math.max(1, 5))}`;
          let iconsettingp = 0.0;
          let p_hashf = String.fromCharCode(115,117,98,116,114,97,99,116,105,110,103,95,98,95,55,52,0);
          let analytic_ = true;
         libnmsM += `${(String.fromCharCode(73,0) == libnmsM ? logouser3.length : libnmsM.length)}`;
         iconsettingp *= (parseFloat(`${(analytic_ ? 2 : 4)}`));
         p_hashf = `${(1 | (analytic_ ? 4 : 3))}`;
      do {
         classese = "3";
         if (classese == String.fromCharCode(95,100,50,121,49,100,108,0)) {
            break;
         }
      } while ((classese == String.fromCharCode(95,100,50,121,49,100,108,0)) && (classese.length == 2));
      for (let p = 0; p < 2; p++) {
         play7 ^= 3 - libnmsM.length;
      }
      profileinactiveb.push(indicatorS.length);
   }

    if (this.player.tapActionTimeout) {

      profileinactiveb.push(2 & aboutQ);
      moonG = `${2 | aboutQ}`;
      clearTimeout(this.player.tapActionTimeout);
      inouttargetyellowf = [aboutQ - 3];
   if (!moonG.startsWith(`${paginationO}`)) {
      paginationO += aboutQ >> (Math.min(Math.abs(1), 5));
   }

      this.player.tapActionTimeout = 0;
       let changeB = new Map([[String.fromCharCode(105,114,114,101,108,101,118,97,110,116,95,104,95,51,53,0),275], [String.fromCharCode(108,101,118,105,110,115,111,110,95,122,95,55,48,0),716]]);
         changeB[`${changeB.size}`] = changeB.size;
         changeB[`${changeB.size}`] = changeB.size * changeB.size;
         changeB[`${changeB.size}`] = changeB.size ^ changeB.size;
      inouttargetyellowf.push(aboutQ | 3);
   do {
      inouttargetyellowf = [iconnointernet_];
      if (inouttargetyellowf.length == 3766127) {
         break;
      }
   } while ((5 <= aboutQ) && (inouttargetyellowf.length == 3766127));

      this.methods.toggleFullscreen();
   if (4 > (5 << (Math.min(3, homeiconW.length)))) {
       let libapminsightai = String.fromCharCode(108,111,110,103,101,115,116,95,107,95,57,55,0);
         libapminsightai += `${(String.fromCharCode(113,0) == libapminsightai ? libapminsightai.length : libapminsightai.length)}`;
      do {
         libapminsightai += `${2 << (Math.min(2, libapminsightai.length))}`;
         if (libapminsightai == String.fromCharCode(103,97,117,114,110,103,56,0)) {
            break;
         }
      } while ((libapminsightai == String.fromCharCode(103,97,117,114,110,103,56,0)) && (libapminsightai.length <= libapminsightai.length));
      while (libapminsightai.startsWith(`${libapminsightai.length}`)) {
         libapminsightai += `${libapminsightai.length}`;
         break;
      }
      homeiconW = `${activityJ.length - 2}`;
   }
   do {
      homeiconW += "2";
      if (4071686 == homeiconW.length) {
         break;
      }
   } while ((4071686 == homeiconW.length) && (homeiconW.length == 4));

      const state = this.state;
       let tumbnailf = String.fromCharCode(99,104,97,105,110,101,100,95,57,95,51,51,0);
       let largeQ = true;
       let penaltyshoot9 = 5.0;
      while (1 <= tumbnailf.length) {
         largeQ = !tumbnailf.startsWith(`${largeQ}`);
         break;
      }
      do {
         penaltyshoot9 *= parseFloat(`${tumbnailf.length}`);
         if (penaltyshoot9 == 1862755.0) {
            break;
         }
      } while ((penaltyshoot9 == 1862755.0) && ((penaltyshoot9 * 4.54) >= 1.11 && (parseInt(`${penaltyshoot9}`) * tumbnailf.length) >= 3));
       let predictionf = 0.0;
      do {
         largeQ = penaltyshoot9 == parseFloat(`${tumbnailf.length}`);
         if (largeQ ? !largeQ : largeQ) {
            break;
         }
      } while ((largeQ ? !largeQ : largeQ) && ((5.18 - penaltyshoot9) >= 2.75));
         largeQ = !largeQ || predictionf < 95.24;
      for (let f = 0; f < 1; f++) {
          let iconschedulem = true;
          let connectionM = true;
         penaltyshoot9 *= parseFloat(`${parseInt(`${penaltyshoot9}`) % 3}`);
         iconschedulem = !connectionM;
         connectionM = (iconschedulem ? !connectionM : iconschedulem);
      }
      do {
          let whatsappR = new Map([[String.fromCharCode(116,105,116,108,116,101,95,57,95,50,49,0),String.fromCharCode(115,99,97,110,95,115,95,49,56,0)], [String.fromCharCode(97,95,49,48,48,95,99,108,117,115,116,101,114,0),String.fromCharCode(115,108,105,112,112,97,103,101,115,95,51,95,56,56,0)], [String.fromCharCode(114,101,116,114,105,101,114,95,114,95,56,50,0),String.fromCharCode(103,95,53,50,95,108,111,119,99,111,109,112,0)]]);
          let rootv = false;
         predictionf /= Math.max(4, tumbnailf.length);
         whatsappR[`${rootv}`] = whatsappR.size;
         if (1261335.0 == predictionf) {
            break;
         }
      } while ((1261335.0 == predictionf) && (4.96 > (predictionf - 4.29)));
          let statsK = String.fromCharCode(114,95,54,51,95,109,112,115,117,98,0);
          let animationi = String.fromCharCode(106,95,54,55,95,108,105,98,109,0);
          let subbasketballplayerg = false;
         tumbnailf = `${(parseInt(`${penaltyshoot9}`) * (largeQ ? 4 : 3))}`;
         statsK += `${(String.fromCharCode(112,0) == animationi ? animationi.length : statsK.length)}`;
         subbasketballplayerg = (animationi.length * statsK.length) < 92;
         tumbnailf += `${((largeQ ? 1 : 4) << (Math.min(Math.abs(parseInt(`${predictionf}`)), 2)))}`;
      activityJ = [2];
      aboutQ &= 2;

      if (state.showControls) {

       let mbjscommonT = true;
       let iconmegaphoneK = String.fromCharCode(117,95,55,56,95,100,105,115,112,108,97,121,0);
       let iconbellactiveY = new Map([[String.fromCharCode(111,112,116,105,109,105,122,101,100,95,51,95,52,54,0),String.fromCharCode(115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,95,97,95,57,50,0)], [String.fromCharCode(116,95,55,52,95,114,101,97,100,111,110,108,121,0),String.fromCharCode(102,101,109,97,108,101,95,119,95,53,54,0)], [String.fromCharCode(117,95,54,51,95,112,115,97,0),String.fromCharCode(119,95,51,56,95,116,109,105,120,0)]]);
      while (iconbellactiveY.size > iconmegaphoneK.length) {
          let iconclosef = true;
          let livenodatabgimg4 = String.fromCharCode(122,95,56,51,95,108,115,112,112,111,108,121,102,0);
          let reducerU = [887, 426, 806];
         iconmegaphoneK += `${((mbjscommonT ? 2 : 2) | 1)}`;
         iconclosef = !iconclosef;
         livenodatabgimg4 = `${((iconclosef ? 4 : 1) % (Math.max(reducerU.length, 8)))}`;
         reducerU.push(reducerU.length);
         break;
      }
         iconbellactiveY[`${iconmegaphoneK}`] = (iconmegaphoneK == String.fromCharCode(120,0) ? iconmegaphoneK.length : iconbellactiveY.size);
      do {
         mbjscommonT = iconmegaphoneK.length == 5;
         if (mbjscommonT ? !mbjscommonT : mbjscommonT) {
            break;
         }
      } while ((mbjscommonT ? !mbjscommonT : mbjscommonT) && (!mbjscommonT));
      do {
         iconmegaphoneK = `${3 * iconmegaphoneK.length}`;
         if (iconmegaphoneK.length == 758731) {
            break;
         }
      } while ((iconmegaphoneK.length == 758731) && ((iconmegaphoneK.length * iconbellactiveY.size) == 2));
      while (iconmegaphoneK.endsWith(`${mbjscommonT}`)) {
          let update_7yR = 5;
          let green0 = 2.0;
         iconmegaphoneK += `${update_7yR + 2}`;
         update_7yR *= parseInt(`${green0}`) >> (Math.min(4, Math.abs(3)));
         green0 /= Math.max(parseFloat(`${parseInt(`${green0}`)}`), 2);
         break;
      }
          let sharemodalF = String.fromCharCode(98,112,117,116,115,95,106,95,50,54,0);
          let videobufferloading7 = String.fromCharCode(111,95,53,54,95,100,101,103,114,97,100,101,100,0);
          let iconarrowright_ = 0.0;
         iconbellactiveY = new Map([[`${iconarrowright_}`, iconmegaphoneK.length | 2]]);
         sharemodalF = `${videobufferloading7.length}`;
         videobufferloading7 = `${3 << (Math.min(1, videobufferloading7.length))}`;
         iconarrowright_ *= parseFloat(`${videobufferloading7.length + sharemodalF.length}`);
       let telemetryx = String.fromCharCode(99,104,97,112,95,100,95,56,0);
         telemetryx += `${telemetryx.length}`;
      if ((iconmegaphoneK.length * 5) > 1) {
         iconmegaphoneK = `${iconbellactiveY.size % (Math.max(2, 10))}`;
      }
      iconZ = `${aboutQ ^ 1}`;
      moonG += `${(moonG == String.fromCharCode(87,0) ? moonG.length : inouttargetyellowf.length)}`;
        this.resetControlTimeout();
      }
    } else {

       let libavdevice1 = 3.0;
       let expands = 2.0;
       let mbsplashw = new Map([[String.fromCharCode(115,116,101,109,109,101,114,95,49,95,56,48,0),String.fromCharCode(109,95,56,53,95,117,110,97,115,115,105,103,110,101,100,0)], [String.fromCharCode(122,95,55,50,95,118,111,119,101,108,0),String.fromCharCode(100,105,97,108,111,103,117,101,95,51,95,48,0)], [String.fromCharCode(97,95,56,95,115,97,116,117,114,97,116,101,0),String.fromCharCode(101,95,51,52,0)]]);
       let logouserT = String.fromCharCode(98,95,53,55,95,98,97,114,99,111,100,101,0);
       let assistw = String.fromCharCode(110,95,53,95,116,119,101,97,107,115,0);
          let headerI = String.fromCharCode(115,111,108,105,100,99,111,108,111,114,95,50,95,53,53,0);
          let baiduadss = 2;
         assistw += `${1 << (Math.min(5, Math.abs(baiduadss)))}`;
         headerI = "2";
         baiduadss >>= Math.min(1, Math.abs(3));
      while (mbsplashw.size <= logouserT.length) {
         mbsplashw = new Map([[logouserT, logouserT.length >> (Math.min(5, Math.abs(parseInt(`${libavdevice1}`))))]]);
         break;
      }
       let splasho = String.fromCharCode(100,95,53,56,95,112,114,111,103,114,101,115,105,118,101,0);
      do {
         mbsplashw[assistw] = logouserT.length | assistw.length;
         if (2294908 == mbsplashw.size) {
            break;
         }
      } while ((2294908 == mbsplashw.size) && ((mbsplashw.size % (Math.max(4, 7))) > 4 && 3 > (mbsplashw.size - 4)));
       let whistleorangeN = [273, 123];
         expands /= Math.max(parseFloat(`${3}`), 1);
         splasho += `${mbsplashw.size}`;
          let libnmsQ = String.fromCharCode(99,95,50,51,95,109,101,110,116,105,111,110,0);
          let q_imageP = new Map([[String.fromCharCode(117,95,50,54,95,115,101,101,100,101,100,0),744], [String.fromCharCode(121,95,49,95,120,99,104,103,0),810]]);
         logouserT = `${mbsplashw.size * 1}`;
         libnmsQ += `${q_imageP.size}`;
         q_imageP = new Map([[`${q_imageP.size}`, q_imageP.size - 2]]);
      homeiconW += `${(mbsplashw.size | (mintegralb ? 1 : 1))}`;
       let whitevideoliveZ = 5;
       let photo_ = 3.0;
      if (whitevideoliveZ <= 1) {
         photo_ *= parseFloat(`${whitevideoliveZ}`);
      }
      while ((whitevideoliveZ + photo_) == 4.46) {
          let sliderX = String.fromCharCode(102,102,109,97,108,95,49,95,57,51,0);
          let chinay = String.fromCharCode(115,99,97,108,101,95,50,95,52,57,0);
         photo_ += parseFloat(`${2}`);
         sliderX = `${sliderX.length + 3}`;
         chinay = `${chinay.length}`;
         break;
      }
      iconnointernet_ *= 3 * parseInt(`${fast2}`);
      this.player.tapActionTimeout = setTimeout(() => {

      fast2 *= aboutQ / 3;
      iconZ = "2";
        const state = this.state;
   while (4 < (inouttargetyellowf.length | activityJ.length)) {
      activityJ = [1 | aboutQ];
      break;
   }
      moonG += `${iconnointernet_}`;

        if (this.player.tapAnywhereToPause && state.showControls) {

   do {
       let stationsU = new Map([[String.fromCharCode(117,95,57,48,95,109,117,108,116,105,112,108,105,101,100,0),true ], [String.fromCharCode(107,95,51,48,95,115,108,111,119,100,111,119,110,0),true ], [String.fromCharCode(113,95,53,54,95,110,97,109,101,115,101,114,118,101,114,0),false ]]);
       let baselinet = 3.0;
       let statisticsinactiveO = String.fromCharCode(112,97,99,107,105,110,103,95,113,95,57,53,0);
       let libruntimeexecutorZ = String.fromCharCode(114,101,108,97,116,105,118,101,95,100,95,54,52,0);
         baselinet += parseFloat(`${stationsU.size << (Math.min(1, Math.abs(parseInt(`${baselinet}`))))}`);
         libruntimeexecutorZ = "1";
      do {
         statisticsinactiveO = `${parseInt(`${baselinet}`)}`;
         if (statisticsinactiveO == String.fromCharCode(110,112,108,49,117,122,52,110,0)) {
            break;
         }
      } while ((statisticsinactiveO == String.fromCharCode(110,112,108,49,117,122,52,110,0)) && (baselinet >= parseFloat(`${statisticsinactiveO.length}`)));
         stationsU[`${baselinet}`] = 3;
      do {
          let iconrefreshs = new Map([[String.fromCharCode(104,95,51,95,99,104,97,112,116,101,114,115,0),25], [String.fromCharCode(98,105,116,108,105,110,101,99,104,117,110,107,121,95,115,95,51,56,0),372], [String.fromCharCode(114,97,110,100,95,98,95,49,49,0),761]]);
         stationsU = new Map([[`${stationsU.size}`, stationsU.size]]);
         iconrefreshs = new Map([[`${iconrefreshs.size}`, iconrefreshs.size]]);
         if (4536552 == stationsU.size) {
            break;
         }
      } while ((Array.from(stationsU.values()).includes(baselinet)) && (4536552 == stationsU.size));
      if (2 < (statisticsinactiveO.length - parseInt(`${baselinet}`))) {
         statisticsinactiveO += `${parseInt(`${baselinet}`)}`;
      }
       let entryz = 0;
      while (1 <= (statisticsinactiveO.length * 4)) {
         baselinet -= parseFloat(`${parseInt(`${baselinet}`) % 1}`);
         break;
      }
      if ((4 << (Math.min(2, libruntimeexecutorZ.length))) >= 2) {
         baselinet += parseFloat(`${2}`);
      }
      for (let u = 0; u < 1; u++) {
          let backwhiteB = [435, 191];
          let r_imageK = String.fromCharCode(111,95,57,48,95,97,112,102,115,0);
          let nalytics3 = 5;
          let infoG = 1.0;
         libruntimeexecutorZ += `${stationsU.size + entryz}`;
         backwhiteB = [parseInt(`${infoG}`)];
         r_imageK = "1";
         nalytics3 &= nalytics3;
         infoG -= 2;
      }
      if (Array.from(stationsU.values()).includes(baselinet)) {
         baselinet += parseFloat(`${libruntimeexecutorZ.length & entryz}`);
      }
      for (let g = 0; g < 3; g++) {
         stationsU = new Map([[`${stationsU.size}`, parseInt(`${baselinet}`)]]);
      }
      paginationO /= Math.max(iconZ.length - 1, 4);
      if (3296858.0 == paginationO) {
         break;
      }
   } while ((3296858.0 == paginationO) && (5.74 <= paginationO));
   for (let r = 0; r < 2; r++) {
      inouttargetyellowf.push(2 << (Math.min(Math.abs(iconnointernet_), 2)));
   }
          this.methods.togglePlayPause();
   if (fast2 <= basketballawayteamX.size) {
      fast2 -= activityJ.length % (Math.max(6, iconZ.length));
   }
      aboutQ -= inouttargetyellowf.length;

          this.resetControlTimeout();
        } else {

      mintegralb = (parseInt(`${fast2}`) - iconZ.length) >= 79;
      moonG += `${aboutQ ^ 1}`;
          this.methods.toggleControls();
      activityJ.push(parseInt(`${paginationO}`));
   if (!moonG.endsWith(`${iconmoren}`)) {
      iconmoren = 72 < basketballawayteamX.size;
   }

        }
        this.player.tapActionTimeout = 0;
   do {
      homeiconW += `${aboutQ}`;
      if (String.fromCharCode(120,57,122,106,0) == homeiconW) {
         break;
      }
   } while ((String.fromCharCode(120,57,122,106,0) == homeiconW) && (homeiconW.length > basketballawayteamX.size));
   if (mintegralb) {
       let runtimeschedulerh = 4.0;
       let spinnerZ = [String.fromCharCode(100,95,53,95,101,110,100,0), String.fromCharCode(103,95,53,50,95,101,110,104,97,110,99,101,109,101,110,116,115,0), String.fromCharCode(114,100,101,108,116,97,95,113,95,56,54,0)];
       let event2 = 1;
         spinnerZ.push(spinnerZ.length >> (Math.min(4, Math.abs(event2))));
         event2 += spinnerZ.length;
         runtimeschedulerh *= spinnerZ.length / (Math.max(3, 5));
      for (let h = 0; h < 3; h++) {
         spinnerZ = [2];
      }
      do {
          let combineD = String.fromCharCode(105,95,52,56,95,114,101,99,116,97,110,103,108,101,115,0);
          let kinit_6uf = String.fromCharCode(98,101,103,105,110,95,120,95,49,54,0);
          let largesoundL = new Map([[String.fromCharCode(99,111,109,112,97,114,101,114,115,95,100,95,52,54,0),true ], [String.fromCharCode(113,110,111,115,95,49,95,54,53,0),true ]]);
         event2 += (String.fromCharCode(50,0) == combineD ? spinnerZ.length : combineD.length);
         kinit_6uf = "2";
         largesoundL = new Map([[`${largesoundL.size}`, kinit_6uf.length]]);
         if (event2 == 2269683) {
            break;
         }
      } while ((event2 == 2269683) && (2 > (spinnerZ.length / 2) && 3 > (event2 / 2)));
          let dependencyf = String.fromCharCode(98,114,105,100,103,101,95,51,95,55,48,0);
         runtimeschedulerh += event2;
         dependencyf += `${dependencyf.length}`;
      for (let i = 0; i < 2; i++) {
          let selectionS = 3.0;
          let navigation6 = String.fromCharCode(108,111,116,115,95,104,95,56,48,0);
          let hooksR = 3.0;
          let largesound4 = 3;
         runtimeschedulerh -= navigation6.length;
         selectionS += 3;
         navigation6 = `${parseInt(`${selectionS}`) * parseInt(`${hooksR}`)}`;
         hooksR *= parseFloat(`${3}`);
         largesound4 >>= Math.min(Math.abs(2 / (Math.max(1, largesound4))), 1);
      }
         runtimeschedulerh += event2;
      for (let z = 0; z < 1; z++) {
         event2 += 3;
      }
      activityJ.push(2);
   }

      }, this.props.doubleTapTime);
      iconmoren = 66.13 < paginationO;
       let notificationfilledG = 3.0;
       let backwhiteF = String.fromCharCode(117,95,56,55,95,99,104,117,110,107,0);
      while (backwhiteF.endsWith(`${notificationfilledG}`)) {
          let nativeexw = [671, 449];
         notificationfilledG *= backwhiteF.length - nativeexw.length;
         break;
      }
      for (let p = 0; p < 3; p++) {
         notificationfilledG += (String.fromCharCode(55,0) == backwhiteF ? parseInt(`${notificationfilledG}`) : backwhiteF.length);
      }
       let forwardp = 0.0;
       let areaV = 5.0;
      if ((backwhiteF.length - parseInt(`${forwardp}`)) < 3 && 3 < (backwhiteF.length - parseInt(`${forwardp}`))) {
          let hearto = String.fromCharCode(116,95,55,56,95,103,99,109,0);
          let logout2 = String.fromCharCode(118,95,52,95,112,108,97,121,101,114,0);
          let castL = String.fromCharCode(115,105,103,110,97,108,115,95,57,95,54,57,0);
          let zhengpian0 = 2.0;
          let libfbjniR = 5;
         backwhiteF = `${3 << (Math.min(3, castL.length))}`;
         hearto = `${logout2.length >> (Math.min(hearto.length, 1))}`;
         logout2 = `${logout2.length + 3}`;
         castL += `${hearto.length / (Math.max(9, logout2.length))}`;
         zhengpian0 *= (parseFloat(`${String.fromCharCode(113,0) == logout2 ? hearto.length : logout2.length}`));
         libfbjniR <<= Math.min(2, Math.abs(1 >> (Math.min(3, Math.abs(libfbjniR)))));
      }
      if (notificationfilledG <= forwardp) {
         notificationfilledG *= backwhiteF.length - 3;
      }
         backwhiteF += "2";
      iconZ = `${aboutQ}`;

    }
  }

   

   
  setControlTimeout() {
       let link8 = [769, 519, 315];
    let routerK = String.fromCharCode(99,111,110,115,117,109,112,116,105,111,110,95,49,95,50,48,0);
    let reducer_ = 5;
    let middlebrightnessC = 3.0;
    let memberY = String.fromCharCode(102,101,116,99,104,101,100,95,122,95,49,49,0);
    let dependencyn = String.fromCharCode(100,116,100,102,95,106,95,54,53,0);
    let thumbnailJ = String.fromCharCode(98,108,101,101,100,95,100,95,50,54,0);
    let downloadedi = [773, 37];
    let emoji8 = String.fromCharCode(121,95,52,48,95,105,99,111,110,105,102,105,101,100,0);
    let telemetryM = 3;
    let calendarC = new Map([[String.fromCharCode(99,95,52,56,95,113,116,97,98,108,101,115,0),19], [String.fromCharCode(111,110,108,121,95,56,95,49,51,0),451]]);
    let iconf = new Map([[String.fromCharCode(114,101,99,116,115,95,48,95,53,51,0),String.fromCharCode(101,109,101,114,103,101,110,99,121,95,103,95,49,0)], [String.fromCharCode(97,108,103,95,114,95,57,54,0),String.fromCharCode(100,105,115,112,95,48,95,50,48,0)], [String.fromCharCode(117,95,57,48,95,108,111,99,97,108,105,122,97,98,108,101,0),String.fromCharCode(97,115,115,101,109,98,108,101,114,95,118,95,49,53,0)]]);
   if ((emoji8.length | link8.length) > 2) {
      emoji8 = `${thumbnailJ.length}`;
   }
      link8 = [downloadedi.length / (Math.max(memberY.length, 5))];
   do {
      emoji8 = `${reducer_ | 1}`;
      if (4450020 == emoji8.length) {
         break;
      }
   } while ((5 < (3 & telemetryM) && 3 < (telemetryM & emoji8.length)) && (4450020 == emoji8.length));
   do {
      emoji8 += "1";
      if (String.fromCharCode(99,115,106,97,52,102,112,52,100,0) == emoji8) {
         break;
      }
   } while ((routerK == String.fromCharCode(75,0)) && (String.fromCharCode(99,115,106,97,52,102,112,52,100,0) == emoji8));
   do {
       let scrollviewf = String.fromCharCode(117,110,114,111,108,108,101,100,95,113,95,56,56,0);
      while (scrollviewf.includes(scrollviewf)) {
         scrollviewf = "2";
         break;
      }
          let popupQ = [982, 843];
          let fillG = String.fromCharCode(108,101,114,112,114,103,98,95,98,95,50,53,0);
          let defaultteamr = [801, 299];
         scrollviewf = `${fillG.length}`;
         popupQ = [popupQ.length & defaultteamr.length];
         fillG += `${2 | defaultteamr.length}`;
          let footballd = new Map([[String.fromCharCode(97,95,56,48,95,112,114,111,112,111,115,101,100,0),String.fromCharCode(120,95,55,55,95,98,117,105,108,100,101,114,0)], [String.fromCharCode(105,95,54,53,95,100,105,103,105,116,0),String.fromCharCode(99,104,97,110,103,101,95,102,95,53,56,0)]]);
          let libturbomodulejsijni9 = 0.0;
          let sentryG = false;
         scrollviewf = `${3 - scrollviewf.length}`;
         footballd = new Map([[`${libturbomodulejsijni9}`, 1 | parseInt(`${libturbomodulejsijni9}`)]]);
         sentryG = 82.89 < libturbomodulejsijni9;
      telemetryM >>= Math.min(3, Math.abs(downloadedi.length ^ reducer_));
      if (269967 == telemetryM) {
         break;
      }
   } while (((3 / (Math.max(3, telemetryM))) < 4) && (269967 == telemetryM));
      link8.push(1);
      memberY += `${(thumbnailJ == String.fromCharCode(49,0) ? thumbnailJ.length : link8.length)}`;
      emoji8 += `${memberY.length}`;

    this.player.controlTimeout = setTimeout(() => {

   while (2 < (memberY.length ^ 4) && (4 ^ memberY.length) < 5) {
       let side9 = 2;
       let reminders = new Map([[String.fromCharCode(115,116,117,98,98,101,100,95,110,95,54,52,0),339], [String.fromCharCode(120,95,48,95,112,97,115,116,101,108,0),575], [String.fromCharCode(97,117,116,111,98,97,110,104,95,56,95,53,50,0),401]]);
       let u_unlocks = 1;
          let dragclosew = new Map([[String.fromCharCode(118,95,50,56,95,118,101,114,121,0),true ], [String.fromCharCode(114,101,103,105,115,116,101,114,115,95,98,95,56,52,0),false ], [String.fromCharCode(119,97,115,116,101,100,95,104,95,55,52,0),false ]]);
         side9 += 3 | reminders.size;
         dragclosew = new Map([[`${dragclosew.size}`, 1 + dragclosew.size]]);
      while (u_unlocks < 3) {
          let graphicsr = String.fromCharCode(99,111,108,108,101,99,116,105,111,110,115,95,104,95,57,55,0);
         u_unlocks ^= reminders.size - u_unlocks;
         graphicsr = "1";
         break;
      }
         u_unlocks /= Math.max(2, side9);
      do {
          let libjsik = 2.0;
          let leaguedetailsbge = [670, 398];
          let hejiI = false;
          let iconlogoutS = 2;
          let downloader1 = String.fromCharCode(105,109,97,103,101,114,111,116,97,116,101,95,113,95,56,51,0);
         side9 &= 1;
         libjsik += parseFloat(`${3}`);
         leaguedetailsbge = [leaguedetailsbge.length << (Math.min(4, Math.abs(iconlogoutS)))];
         hejiI = !hejiI;
         iconlogoutS ^= ((hejiI ? 5 : 3) & 2);
         downloader1 += "1";
         if (384958 == side9) {
            break;
         }
      } while (((side9 + u_unlocks) < 1) && (384958 == side9));
      do {
          let predictionarrowc = 0.0;
          let orientationv = String.fromCharCode(114,101,115,112,111,110,100,115,95,110,95,49,51,0);
          let imagewatchliveT = 5.0;
          let modelsC = 3;
         side9 -= 3;
         predictionarrowc += parseFloat(`${3}`);
         orientationv += `${parseInt(`${imagewatchliveT}`) ^ 2}`;
         imagewatchliveT *= modelsC / (Math.max(2, 7));
         modelsC *= 3 % (Math.max(3, parseInt(`${predictionarrowc}`)));
         if (1362549 == side9) {
            break;
         }
      } while ((1362549 == side9) && (reminders.size > 2));
      if (Array.from(reminders.values()).includes(side9)) {
         reminders = new Map([[`${reminders.size}`, reminders.size | u_unlocks]]);
      }
          let libmapbufferjni2 = true;
          let lcopy_yyR = 5;
          let settings5 = 4.0;
         u_unlocks &= lcopy_yyR;
         libmapbufferjni2 = !libmapbufferjni2;
         settings5 -= parseFloat(`${2 - parseInt(`${settings5}`)}`);
       let predictionarrowT = String.fromCharCode(97,115,110,116,95,104,95,53,56,0);
       let animations9 = String.fromCharCode(99,97,108,99,117,108,97,116,101,95,113,95,56,51,0);
      do {
          let send0 = new Map([[String.fromCharCode(107,95,50,50,95,120,109,108,0),105], [String.fromCharCode(108,95,50,56,95,112,114,101,100,105,99,116,0),383], [String.fromCharCode(100,101,102,101,114,114,105,110,103,95,111,95,49,48,0),751]]);
          let upgrade0 = String.fromCharCode(105,95,56,55,0);
          let smallQ = [901, 8];
          let tempnodatagifZ = 4;
         predictionarrowT = `${send0.size & 2}`;
         send0[`${tempnodatagifZ}`] = 1;
         upgrade0 += `${upgrade0.length * tempnodatagifZ}`;
         smallQ.push(2 >> (Math.min(4, upgrade0.length)));
         if (String.fromCharCode(103,98,109,113,113,56,103,0) == predictionarrowT) {
            break;
         }
      } while ((String.fromCharCode(103,98,109,113,113,56,103,0) == predictionarrowT) && ((predictionarrowT.length * side9) == 5));
      memberY = `${memberY.length}`;
      break;
   }
   while ((2.31 + middlebrightnessC) > 2.45) {
      telemetryM |= 2 | dependencyn.length;
      break;
   }
   do {
       let jcopy_9mi = String.fromCharCode(118,95,55,50,95,110,105,107,111,110,0);
       let basketballmatchdetailbgL = String.fromCharCode(116,95,57,48,95,98,114,111,97,100,99,97,115,116,105,110,103,0);
       let libcxxcomponents2 = 2.0;
      for (let x = 0; x < 2; x++) {
         basketballmatchdetailbgL = `${jcopy_9mi.length & 3}`;
      }
      while (basketballmatchdetailbgL.startsWith(jcopy_9mi)) {
          let long_lo = [String.fromCharCode(119,105,110,97,114,109,95,53,95,52,54,0), String.fromCharCode(118,95,57,55,95,98,105,110,107,100,97,116,97,0)];
          let bellreminderY = String.fromCharCode(109,95,50,57,95,99,97,114,101,102,117,108,108,121,0);
          let loadingspinner7 = String.fromCharCode(99,105,118,105,108,95,51,95,56,51,0);
          let optionsk = 4.0;
         basketballmatchdetailbgL = "1";
         long_lo.push(bellreminderY.length);
         bellreminderY = `${bellreminderY.length}`;
         loadingspinner7 = `${loadingspinner7.length}`;
         optionsk *= loadingspinner7.length - 2;
         break;
      }
      if (basketballmatchdetailbgL.includes(`${jcopy_9mi.length}`)) {
         basketballmatchdetailbgL += `${parseInt(`${libcxxcomponents2}`)}`;
      }
      do {
         basketballmatchdetailbgL += `${parseInt(`${libcxxcomponents2}`) * basketballmatchdetailbgL.length}`;
         if (String.fromCharCode(122,121,118,0) == basketballmatchdetailbgL) {
            break;
         }
      } while ((basketballmatchdetailbgL.length == 5) && (String.fromCharCode(122,121,118,0) == basketballmatchdetailbgL));
       let volumeZ = new Map([[String.fromCharCode(108,95,49,52,95,116,114,117,101,104,100,0),169], [String.fromCharCode(109,111,110,111,115,112,97,99,101,100,95,98,95,56,0),89], [String.fromCharCode(108,111,99,97,116,101,100,95,103,95,50,52,0),173]]);
       let anytimeI = new Map([[String.fromCharCode(102,95,56,49,95,99,97,110,99,101,108,97,98,108,101,0),false ], [String.fromCharCode(119,95,51,48,95,112,114,101,100,105,99,116,105,111,110,0),false ], [String.fromCharCode(109,102,114,97,95,56,95,52,50,0),true ]]);
       let saved = 1;
      for (let m = 0; m < 2; m++) {
         jcopy_9mi += "3";
      }
          let traminif = String.fromCharCode(105,95,53,48,95,108,117,116,121,117,118,0);
          let backwhiteh = 1;
          let trophy6 = String.fromCharCode(115,117,98,112,111,105,110,116,101,114,95,52,95,57,50,0);
         anytimeI = new Map([[`${libcxxcomponents2}`, saved + 2]]);
         traminif = "2";
         backwhiteh ^= 1 >> (Math.min(4, Math.abs(backwhiteh)));
         trophy6 += `${traminif.length + backwhiteh}`;
          let halffieldimage_ = String.fromCharCode(98,101,114,114,105,101,115,95,57,95,51,49,0);
          let pointZ = new Map([[String.fromCharCode(115,95,50,95,115,111,102,116,102,108,111,97,116,0),976], [String.fromCharCode(97,100,100,111,112,95,121,95,55,52,0),396], [String.fromCharCode(114,101,112,108,97,121,101,100,95,121,95,56,49,0),725]]);
          let editm = 1;
         volumeZ[`${libcxxcomponents2}`] = parseInt(`${libcxxcomponents2}`) - 2;
         halffieldimage_ = `${halffieldimage_.length + 1}`;
         pointZ[`${halffieldimage_}`] = pointZ.size;
         editm <<= Math.min(2, Math.abs(pointZ.size / (Math.max(1, halffieldimage_.length))));
      telemetryM |= basketballmatchdetailbgL.length / (Math.max(1, parseInt(`${libcxxcomponents2}`)));
      if (380630 == telemetryM) {
         break;
      }
   } while ((telemetryM <= emoji8.length) && (380630 == telemetryM));
   do {
      downloadedi.push(telemetryM);
      if (downloadedi.length == 3713347) {
         break;
      }
   } while ((3 >= (emoji8.length % (Math.max(3, 2)))) && (downloadedi.length == 3713347));
   if (dependencyn != memberY) {
      memberY = `${dependencyn.length}`;
   }
   if (dependencyn.length > 5) {
       let gradlewe = String.fromCharCode(121,95,57,55,95,116,111,116,97,108,115,0);
       let apple2 = String.fromCharCode(115,108,111,119,101,115,116,95,112,95,53,51,0);
       let iconnewssharey = 1.0;
       let penaltymatchicon9 = 3.0;
          let applicationi = String.fromCharCode(112,115,121,109,111,100,101,108,95,108,95,49,48,0);
         iconnewssharey /= Math.max(2 ^ parseInt(`${iconnewssharey}`), 2);
         applicationi = `${applicationi.length & 3}`;
         iconnewssharey *= 1;
       let leakcheckerc = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,97,98,108,101,95,113,95,57,50,0),String.fromCharCode(100,95,50,53,95,118,109,97,112,115,105,110,0)], [String.fromCharCode(117,110,102,114,101,101,122,101,95,57,95,52,52,0),String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,95,99,95,51,50,0)]]);
       let math_ = 5.0;
      while ((parseInt(`${iconnewssharey}`) - apple2.length) <= 1 || 2 <= (1 - parseInt(`${iconnewssharey}`))) {
          let whistleu = 1;
          let graphicsz = 5.0;
          let injuryP = 1;
          let greenq = String.fromCharCode(121,98,108,111,99,107,95,119,95,57,51,0);
         iconnewssharey -= parseInt(`${graphicsz}`);
         whistleu -= greenq.length;
         injuryP /= Math.max(3, whistleu);
         greenq = `${injuryP}`;
         break;
      }
         iconnewssharey *= parseInt(`${penaltymatchicon9}`);
      do {
          let gifgoalbgm = [268, 85];
          let defaultprofilepicl = String.fromCharCode(110,101,105,103,104,98,111,117,114,115,95,98,95,52,49,0);
          let ying8 = 0;
         math_ -= 3;
         gifgoalbgm = [1 ^ defaultprofilepicl.length];
         defaultprofilepicl += `${gifgoalbgm.length}`;
         ying8 *= gifgoalbgm.length;
         if (math_ == 602196.0) {
            break;
         }
      } while ((math_ == 602196.0) && ((parseInt(`${math_}`) + leakcheckerc.size) <= 4 && 5.55 <= (2.65 + math_)));
         gradlewe += `${1 - apple2.length}`;
      while ((gradlewe.length << (Math.min(Math.abs(3), 4))) < 5 || (gradlewe.length | 3) < 3) {
         gradlewe = `${parseInt(`${math_}`) & leakcheckerc.size}`;
         break;
      }
      do {
         iconnewssharey -= 1;
         if (iconnewssharey == 3225887.0) {
            break;
         }
      } while ((iconnewssharey == 3225887.0) && (math_ < 3.75));
       let castingx = String.fromCharCode(115,116,101,112,115,105,122,101,95,122,95,53,53,0);
      for (let t = 0; t < 1; t++) {
          let indicatorI = false;
          let tempnodatac = new Map([[String.fromCharCode(110,95,51,95,99,111,110,102,105,103,117,114,101,0),String.fromCharCode(112,108,117,103,103,101,100,95,57,95,52,48,0)], [String.fromCharCode(100,95,51,95,97,99,99,101,112,116,97,98,108,101,0),String.fromCharCode(97,115,115,112,111,114,116,95,50,95,53,0)]]);
         castingx += `${castingx.length | 1}`;
         indicatorI = tempnodatac.size >= 43 || indicatorI;
         tempnodatac = new Map([[`${tempnodatac.size}`, 1 ^ tempnodatac.size]]);
      }
      telemetryM %= Math.max(apple2.length << (Math.min(4, Math.abs(telemetryM))), 3);
   }
   if (5 >= (dependencyn.length * parseInt(`${middlebrightnessC}`)) && (parseInt(`${middlebrightnessC}`) * dependencyn.length) >= 5) {
      dependencyn = `${emoji8.length}`;
   }
      emoji8 = "2";
      this._hideControls();
   do {
       let dropdownn = new Map([[String.fromCharCode(112,114,101,100,105,99,116,111,114,95,48,95,51,48,0),224], [String.fromCharCode(117,95,53,53,95,110,115,101,103,109,101,110,116,115,0),408], [String.fromCharCode(100,111,117,98,108,101,115,115,116,114,95,101,95,54,51,0),737]]);
       let launchert = true;
       let iconarrowrightblack8 = String.fromCharCode(99,108,101,97,114,95,48,95,57,56,0);
       let bgvipxvodc = String.fromCharCode(109,95,50,52,95,115,101,103,119,105,116,0);
       let libruntimeexecutori = String.fromCharCode(118,101,99,116,111,114,100,95,100,95,51,53,0);
      do {
         bgvipxvodc += `${libruntimeexecutori.length ^ 3}`;
         if (String.fromCharCode(117,49,104,56,49,114,110,95,0) == bgvipxvodc) {
            break;
         }
      } while ((String.fromCharCode(117,49,104,56,49,114,110,95,0) == bgvipxvodc) && (!bgvipxvodc.includes(libruntimeexecutori)));
       let logoutO = String.fromCharCode(101,95,56,49,95,99,111,97,114,115,101,0);
       let footballfiledlayoutg = 3;
      do {
         footballfiledlayoutg ^= 2 % (Math.max(8, logoutO.length));
         if (2025081 == footballfiledlayoutg) {
            break;
         }
      } while ((3 == footballfiledlayoutg) && (2025081 == footballfiledlayoutg));
         logoutO = `${(libruntimeexecutori == String.fromCharCode(48,0) ? libruntimeexecutori.length : iconarrowrightblack8.length)}`;
          let watchnowbgQ = 1;
         launchert = dropdownn.size == 20;
         watchnowbgQ %= Math.max(5, watchnowbgQ);
      if (5 > (dropdownn.size & 1)) {
         launchert = dropdownn.size > iconarrowrightblack8.length;
      }
       let baiduadsy = 5;
       let iconarrowrightwhite4 = 1;
          let sorts = String.fromCharCode(106,95,52,56,95,109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,0);
          let iconwechat4 = [String.fromCharCode(115,112,108,105,110,101,95,114,95,51,0), String.fromCharCode(109,95,50,54,95,98,121,116,101,99,111,100,101,0), String.fromCharCode(115,95,49,48,95,102,116,118,108,105,110,107,0)];
          let detailsc = String.fromCharCode(115,116,97,114,116,114,101,101,95,114,95,56,51,0);
         bgvipxvodc = `${footballfiledlayoutg | 2}`;
         sorts += `${iconwechat4.length}`;
         iconwechat4 = [(sorts == String.fromCharCode(82,0) ? iconwechat4.length : sorts.length)];
         detailsc = `${(sorts == String.fromCharCode(97,0) ? sorts.length : iconwechat4.length)}`;
         logoutO += `${3 << (Math.min(Math.abs(baiduadsy), 4))}`;
         libruntimeexecutori += `${baiduadsy | libruntimeexecutori.length}`;
         iconarrowrightwhite4 <<= Math.min(2, Math.abs(iconarrowrightwhite4));
      while (baiduadsy > 3) {
         bgvipxvodc = `${bgvipxvodc.length ^ logoutO.length}`;
         break;
      }
         dropdownn = new Map([[`${launchert}`, baiduadsy]]);
      if ((libruntimeexecutori.length >> (Math.min(Math.abs(5), 4))) > 5) {
          let controlsh = String.fromCharCode(98,95,54,52,95,115,116,97,99,107,101,100,0);
          let datab = true;
         libruntimeexecutori = `${(iconarrowrightblack8 == String.fromCharCode(88,0) ? iconarrowrightblack8.length : iconarrowrightwhite4)}`;
         controlsh += `${controlsh.length}`;
         datab = controlsh.length >= 86 || datab;
      }
      calendarC = new Map([[`${launchert}`, 3]]);
      if (calendarC.size == 2122791) {
         break;
      }
   } while ((5 >= (5 ^ calendarC.size)) && (calendarC.size == 2122791));
   for (let t = 0; t < 2; t++) {
       let backward3 = String.fromCharCode(119,95,50,56,95,109,97,100,100,0);
      if (5 == backward3.length) {
         backward3 = "1";
      }
      do {
          let homeinactiveU = 1.0;
          let faviconO = new Map([[String.fromCharCode(107,98,105,116,95,122,95,56,55,0),true ], [String.fromCharCode(120,95,52,95,116,114,105,109,0),true ], [String.fromCharCode(119,95,52,49,95,117,116,117,114,101,0),true ]]);
         backward3 += `${2 >> (Math.min(4, backward3.length))}`;
         homeinactiveU -= parseFloat(`${parseInt(`${homeinactiveU}`) / 2}`);
         faviconO[`${homeinactiveU}`] = faviconO.size;
         if (backward3 == String.fromCharCode(104,101,115,95,95,0)) {
            break;
         }
      } while ((!backward3.endsWith(backward3)) && (backward3 == String.fromCharCode(104,101,115,95,95,0)));
          let textd = 2.0;
          let filledC = [823, 186, 670];
          let telegramb = String.fromCharCode(121,95,55,49,95,99,111,108,108,101,99,116,105,111,110,0);
         backward3 += "1";
         textd += filledC.length;
         filledC = [telegramb.length];
         telegramb += `${1 - parseInt(`${textd}`)}`;
      link8.push((String.fromCharCode(87,0) == memberY ? memberY.length : downloadedi.length));
   }
   while (downloadedi.length == routerK.length) {
       let iconviewero = String.fromCharCode(117,110,105,110,105,116,105,97,108,105,122,101,100,95,100,95,49,52,0);
       let predictionbanner6 = String.fromCharCode(122,95,51,53,95,105,110,116,114,101,97,100,119,114,105,116,101,0);
         predictionbanner6 = `${predictionbanner6.length}`;
      if (!iconviewero.startsWith(`${predictionbanner6.length}`)) {
          let videobufferloading5 = 4;
         predictionbanner6 = `${predictionbanner6.length}`;
         videobufferloading5 <<= Math.min(Math.abs(videobufferloading5), 4);
      }
          let defaultteamF = 5.0;
         predictionbanner6 = `${parseInt(`${defaultteamF}`) - iconviewero.length}`;
      if (3 <= iconviewero.length) {
         iconviewero += `${iconviewero.length & predictionbanner6.length}`;
      }
      do {
         predictionbanner6 += `${predictionbanner6.length}`;
         if (String.fromCharCode(122,118,54,119,52,103,57,0) == predictionbanner6) {
            break;
         }
      } while ((String.fromCharCode(122,118,54,119,52,103,57,0) == predictionbanner6) && (iconviewero.endsWith(`${predictionbanner6.length}`)));
         predictionbanner6 += `${predictionbanner6.length | 1}`;
      routerK = "2";
      break;
   }
   for (let v = 0; v < 2; v++) {
      reducer_ *= 3;
   }
   do {
      link8 = [memberY.length ^ calendarC.size];
      if (link8.length == 175215) {
         break;
      }
   } while ((1 < (5 << (Math.min(4, emoji8.length)))) && (link8.length == 175215));
   if (routerK.startsWith(`${link8.length}`)) {
       let arrowselectdownD = 5.0;
       let assetsw = 2.0;
       let baiduads4 = String.fromCharCode(115,95,53,0);
       let acceptedx = String.fromCharCode(108,97,110,103,117,97,103,101,95,104,95,50,0);
      if ((arrowselectdownD + 3.18) > 3.99 || (3.18 + arrowselectdownD) > 5.57) {
         assetsw += 2 | parseInt(`${arrowselectdownD}`);
      }
       let incidentL = 2;
       let const_6jK = 0;
         assetsw += acceptedx.length >> (Math.min(Math.abs(2), 2));
      do {
          let modelsW = String.fromCharCode(99,95,56,49,95,109,112,101,103,97,117,100,105,111,100,97,116,97,0);
          let ajaxG = false;
          let lightt = 4.0;
          let downq = String.fromCharCode(115,116,114,101,114,114,111,114,95,99,95,51,56,0);
         acceptedx += `${baiduads4.length - 2}`;
         modelsW += `${1 + downq.length}`;
         ajaxG = !ajaxG || 97.7 < lightt;
         lightt *= parseFloat(`${1 ^ parseInt(`${lightt}`)}`);
         downq = `${(parseInt(`${lightt}`) - (ajaxG ? 4 : 1))}`;
         if (String.fromCharCode(50,49,48,114,0) == acceptedx) {
            break;
         }
      } while (((acceptedx.length / 5) == 1) && (String.fromCharCode(50,49,48,114,0) == acceptedx));
          let rncorer = String.fromCharCode(120,95,53,54,95,104,111,110,101,121,0);
          let orangetickZ = [889, 719, 777];
         const_6jK += incidentL | acceptedx.length;
         rncorer += `${rncorer.length}`;
         orangetickZ = [rncorer.length * orangetickZ.length];
         const_6jK <<= Math.min(5, Math.abs(incidentL << (Math.min(2, Math.abs(1)))));
      do {
         baiduads4 = `${parseInt(`${arrowselectdownD}`) | 3}`;
         if (4463766 == baiduads4.length) {
            break;
         }
      } while (((1.85 * arrowselectdownD) >= 4.93) && (4463766 == baiduads4.length));
      for (let r = 0; r < 1; r++) {
         assetsw *= parseInt(`${arrowselectdownD}`);
      }
         assetsw /= Math.max(acceptedx.length & incidentL, 1);
          let temperatureh = true;
         assetsw += (acceptedx == String.fromCharCode(56,0) ? acceptedx.length : incidentL);
         temperatureh = !temperatureh;
          let containerG = [306, 381];
          let viewsH = [547, 231, 772];
          let setting4 = String.fromCharCode(115,117,99,104,95,98,95,50,51,0);
         const_6jK ^= const_6jK;
         containerG = [viewsH.length >> (Math.min(containerG.length, 4))];
         viewsH.push(2);
         setting4 += `${2 ^ setting4.length}`;
      if (!acceptedx.endsWith(`${const_6jK}`)) {
         const_6jK *= (baiduads4 == String.fromCharCode(87,0) ? baiduads4.length : const_6jK);
      }
      routerK = `${thumbnailJ.length}`;
   }
   if ((dependencyn.length * 3) >= 4 || (reducer_ * 3) >= 4) {
      dependencyn += `${telemetryM}`;
   }
       let lineW = new Map([[String.fromCharCode(99,95,50,49,95,100,111,117,98,108,101,115,0),false ], [String.fromCharCode(121,95,52,49,95,111,112,115,99,97,108,101,0),true ], [String.fromCharCode(101,95,50,50,95,100,101,105,110,105,116,0),true ]]);
         lineW = new Map([[`${lineW.size}`, 3]]);
      if (Array.from(lineW.values()).includes(lineW.size)) {
         lineW[`${lineW.size}`] = lineW.size + 1;
      }
         lineW = new Map([[`${lineW.size}`, lineW.size / (Math.max(4, lineW.size))]]);
      middlebrightnessC *= (routerK == String.fromCharCode(55,0) ? telemetryM : routerK.length);

    }, this.player.controlTimeoutDelay);
      downloadedi = [(memberY == String.fromCharCode(95,0) ? thumbnailJ.length : memberY.length)];
   if (5.55 > (middlebrightnessC * reducer_)) {
       let moduleM = 5.0;
      if (2.21 <= moduleM) {
         moduleM -= parseFloat(`${parseInt(`${moduleM}`) | 1}`);
      }
      while (1.41 <= (moduleM * 1.24) || 1.19 <= (moduleM * 1.24)) {
          let selectC = 1;
          let whistleorangeS = String.fromCharCode(111,114,100,101,114,95,101,95,49,52,0);
          let transferG = 2;
         moduleM -= parseFloat(`${whistleorangeS.length}`);
         selectC += transferG;
         whistleorangeS = `${selectC}`;
         break;
      }
      while ((moduleM / 3) == 4.4) {
          let overlayN = 5.0;
         moduleM -= parseFloat(`${parseInt(`${overlayN}`)}`);
         break;
      }
      middlebrightnessC -= (String.fromCharCode(117,0) == dependencyn ? dependencyn.length : parseInt(`${moduleM}`));
   }
   for (let m = 0; m < 2; m++) {
      memberY = `${downloadedi.length}`;
   }
   while (memberY.length <= thumbnailJ.length) {
       let emptyu = 0;
       let penaltymatchiconQ = 5.0;
       let videobufferloadingq = String.fromCharCode(115,112,97,99,101,95,56,95,52,49,0);
          let goallogo3 = String.fromCharCode(113,95,57,49,95,109,111,100,101,0);
          let iconarrowrightblackm = false;
         videobufferloadingq += `${goallogo3.length - 3}`;
         goallogo3 = `${(2 & (iconarrowrightblackm ? 4 : 1))}`;
      for (let o = 0; o < 3; o++) {
         penaltymatchiconQ += parseFloat(`${parseInt(`${penaltymatchiconQ}`)}`);
      }
      if ((videobufferloadingq.length % (Math.max(3, emptyu))) <= 5 || (emptyu % 5) <= 1) {
         emptyu ^= parseInt(`${penaltymatchiconQ}`) >> (Math.min(videobufferloadingq.length, 4));
      }
      while (!videobufferloadingq.includes(`${emptyu}`)) {
         emptyu ^= videobufferloadingq.length;
         break;
      }
         emptyu += emptyu - videobufferloadingq.length;
      while (2 < (5 / (Math.max(2, parseInt(`${penaltymatchiconQ}`)))) || 1 < (videobufferloadingq.length % 5)) {
          let editF = [String.fromCharCode(108,95,57,57,95,99,105,114,99,117,108,97,116,105,110,103,0), String.fromCharCode(118,95,49,95,116,104,117,109,98,0), String.fromCharCode(99,111,110,118,101,114,115,97,116,105,111,110,95,119,95,56,53,0)];
          let areaM = [String.fromCharCode(116,95,52,51,95,114,101,115,105,122,101,0), String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,95,117,95,55,57,0)];
          let pressurem = 3.0;
          let unreadQ = 4.0;
         penaltymatchiconQ += parseFloat(`${parseInt(`${unreadQ}`) * parseInt(`${pressurem}`)}`);
         editF = [editF.length & areaM.length];
         areaM.push(3);
         pressurem /= Math.max(parseFloat(`${1}`), 3);
         unreadQ -= areaM.length;
         break;
      }
         videobufferloadingq += `${parseInt(`${penaltymatchiconQ}`)}`;
          let arrowright4 = 1.0;
         emptyu %= Math.max(3, emptyu);
         arrowright4 += parseInt(`${arrowright4}`) << (Math.min(Math.abs(parseInt(`${arrowright4}`)), 5));
      if (2 > emptyu) {
         penaltymatchiconQ += parseFloat(`${parseInt(`${penaltymatchiconQ}`)}`);
      }
      memberY = `${videobufferloadingq.length >> (Math.min(Math.abs(1), 3))}`;
      break;
   }
       let umengj = [704, 23];
       let gifty = 0.0;
       let bufferT = String.fromCharCode(115,105,109,112,108,105,102,105,101,100,95,48,95,53,53,0);
      while (3.10 < (parseFloat(`${umengj.length}`) * gifty)) {
         gifty -= parseFloat(`${3}`);
         break;
      }
      do {
          let clubJ = String.fromCharCode(99,116,105,109,101,115,116,97,109,112,95,122,95,57,53,0);
          let imagenomoredataT = String.fromCharCode(104,95,55,52,95,112,114,105,109,101,115,0);
          let smallO = String.fromCharCode(101,95,49,54,95,108,105,98,114,97,114,105,101,115,0);
          let langkeyx = String.fromCharCode(121,95,53,51,95,97,100,97,112,116,101,114,115,0);
          let send8 = false;
         gifty -= parseFloat(`${1}`);
         clubJ = `${(String.fromCharCode(122,0) == smallO ? langkeyx.length : smallO.length)}`;
         imagenomoredataT = `${((send8 ? 2 : 1) + imagenomoredataT.length)}`;
         langkeyx += `${(String.fromCharCode(111,0) == langkeyx ? langkeyx.length : smallO.length)}`;
         send8 = imagenomoredataT.length == 72 || clubJ == String.fromCharCode(115,0);
         if (gifty == 1061988.0) {
            break;
         }
      } while (((bufferT.length + parseInt(`${gifty}`)) == 5 && (parseFloat(`${bufferT.length}`) + gifty) == 1.7) && (gifty == 1061988.0));
      if (4 > (umengj.length >> (Math.min(Math.abs(1), 4)))) {
         gifty -= parseFloat(`${umengj.length}`);
      }
         gifty -= (parseFloat(`${String.fromCharCode(110,0) == bufferT ? parseInt(`${gifty}`) : bufferT.length}`));
          let playershirtb = String.fromCharCode(100,95,55,52,95,116,101,120,116,109,111,118,115,117,98,0);
         umengj = [parseInt(`${gifty}`)];
         playershirtb += `${3 ^ playershirtb.length}`;
          let footballtrophyM = 5;
         umengj = [umengj.length / 3];
         footballtrophyM ^= footballtrophyM;
         gifty -= parseFloat(`${1 + umengj.length}`);
      if ((bufferT.length | 2) > 4) {
          let movies_ = String.fromCharCode(108,95,54,55,95,100,101,110,111,105,115,105,110,103,0);
          let rulesl = String.fromCharCode(104,95,55,48,95,111,112,101,114,97,116,111,114,115,0);
          let forwardR = 0;
          let borderlessc = String.fromCharCode(116,95,51,49,95,102,105,110,100,0);
          let emptyJ = String.fromCharCode(105,115,116,115,95,102,95,52,48,0);
         umengj.push(bufferT.length & 3);
         movies_ = `${emptyJ.length}`;
         rulesl += `${forwardR}`;
         forwardR >>= Math.min(emptyJ.length, 5);
         borderlessc = "1";
      }
         gifty *= parseFloat(`${2}`);
      thumbnailJ += `${reducer_}`;
      calendarC = new Map([[`${link8.length}`, link8.length & 1]]);
   while (1 > (parseInt(`${middlebrightnessC}`) / (Math.max(dependencyn.length, 8)))) {
       let closev = new Map([[String.fromCharCode(113,95,55,51,95,115,109,105,108,101,0),197], [String.fromCharCode(106,95,55,48,95,97,115,115,111,99,105,97,116,105,111,110,0),395]]);
       let actionb = String.fromCharCode(101,95,55,55,95,100,97,115,104,101,110,99,0);
       let nalyticsb = 5.0;
          let stationsT = new Map([[String.fromCharCode(114,101,99,111,110,110,101,99,116,101,100,95,98,95,52,48,0),283], [String.fromCharCode(114,101,109,101,109,98,101,114,101,100,95,116,95,52,54,0),817], [String.fromCharCode(97,95,49,51,95,117,116,102,108,101,110,0),667]]);
         closev[`${actionb}`] = actionb.length % 1;
         stationsT[`${stationsT.size}`] = stationsT.size;
         nalyticsb *= parseFloat(`${parseInt(`${nalyticsb}`) & 3}`);
       let skipk = 5.0;
      while ((parseInt(`${nalyticsb}`) * actionb.length) <= 2) {
          let arrowupe = 5.0;
          let fullu = false;
         actionb = `${((fullu ? 2 : 1) >> (Math.min(Math.abs(parseInt(`${nalyticsb}`)), 1)))}`;
         arrowupe /= Math.max(parseInt(`${arrowupe}`), 1);
         fullu = arrowupe == arrowupe;
         break;
      }
       let hooks3 = String.fromCharCode(116,114,105,108,105,110,101,97,114,95,100,95,53,48,0);
       let window_71t = String.fromCharCode(102,95,49,48,48,95,97,110,110,101,120,98,0);
          let reactnavigationk = String.fromCharCode(103,114,111,101,115,116,108,95,114,95,56,55,0);
          let buildW = 3;
          let sentryj = String.fromCharCode(103,95,49,55,95,111,112,115,99,97,108,101,0);
         closev[`${skipk}`] = actionb.length;
         reactnavigationk = `${(String.fromCharCode(78,0) == reactnavigationk ? reactnavigationk.length : buildW)}`;
         buildW %= Math.max(1 + buildW, 5);
         sentryj = `${reactnavigationk.length + buildW}`;
      do {
         skipk *= closev.size;
         if (466864.0 == skipk) {
            break;
         }
      } while ((466864.0 == skipk) && (2 < (hooks3.length + 5)));
      while (closev.size <= 4) {
          let defaultfootballbgD = 4.0;
          let modelsI = String.fromCharCode(110,119,105,115,101,95,108,95,57,55,0);
         closev[`${defaultfootballbgD}`] = parseInt(`${defaultfootballbgD}`) - window_71t.length;
         modelsI += `${(String.fromCharCode(86,0) == modelsI ? modelsI.length : modelsI.length)}`;
         break;
      }
      for (let u = 0; u < 3; u++) {
         closev = new Map([[window_71t, parseInt(`${nalyticsb}`)]]);
      }
      middlebrightnessC *= (String.fromCharCode(104,0) == emoji8 ? parseInt(`${middlebrightnessC}`) : emoji8.length);
      break;
   }
      middlebrightnessC *= downloadedi.length + 1;

  }

   
  clearControlTimeout() {
       let whitetickf = String.fromCharCode(122,95,56,56,95,102,111,108,100,101,114,0);
    let defaultfootballbgh = new Map([[String.fromCharCode(114,95,49,48,95,112,101,110,100,105,110,103,0),613], [String.fromCharCode(116,111,112,105,99,97,108,95,115,95,54,55,0),434], [String.fromCharCode(117,110,98,111,110,100,101,100,95,106,95,56,49,0),679]]);
    let dycreatorc = 5.0;
    let attributedstringa = 1;
    let profilepicD = 0;
    let modityd = true;
    let libavfilter5 = false;
    let backwhite7 = String.fromCharCode(116,104,117,109,98,110,97,105,108,95,54,95,57,56,0);
    let model = 5;
    let libreactnativejni1 = String.fromCharCode(103,95,51,50,95,109,111,122,106,112,101,103,0);
      libavfilter5 = !libavfilter5;
      dycreatorc += parseFloat(`${whitetickf.length}`);
   while (!modityd) {
       let imagemanagerX = String.fromCharCode(111,95,55,49,95,112,97,103,105,110,103,0);
       let serviceU = 3.0;
       let libtobZ = false;
         serviceU -= 1 ^ parseInt(`${serviceU}`);
          let progressd = [730, 256, 528];
          let modes = String.fromCharCode(98,95,57,48,95,101,120,99,108,117,100,105,110,103,0);
         libtobZ = (progressd.length / (Math.max(modes.length, 10))) < 33;
          let nalyticsN = false;
         imagemanagerX += `${((libtobZ ? 4 : 2) * imagemanagerX.length)}`;
         nalyticsN = !nalyticsN;
      do {
         serviceU *= (String.fromCharCode(84,0) == imagemanagerX ? parseInt(`${serviceU}`) : imagemanagerX.length);
         if (3919715.0 == serviceU) {
            break;
         }
      } while ((3919715.0 == serviceU) && (!libtobZ && 3.61 >= (serviceU - 1.4)));
      for (let h = 0; h < 2; h++) {
          let verticals = 0.0;
         libtobZ = (parseFloat(`${imagemanagerX.length}`) * verticals) == 38.84;
      }
      if (libtobZ || (serviceU + 5.35) > 5.70) {
         serviceU /= Math.max(parseInt(`${serviceU}`), 2);
      }
         libtobZ = String.fromCharCode(51,0) == imagemanagerX;
      while (!libtobZ) {
         libtobZ = 64.6 >= serviceU;
         break;
      }
      if (!libtobZ) {
         libtobZ = serviceU >= imagemanagerX.length;
      }
      libavfilter5 = !libavfilter5;
      break;
   }
      dycreatorc *= parseFloat(`${3 << (Math.min(2, Math.abs(defaultfootballbgh.size)))}`);
   do {
       let mountingQ = String.fromCharCode(115,95,50,55,95,118,105,103,110,101,116,116,105,110,103,0);
       let downloadedx = 3;
         downloadedx -= downloadedx;
         mountingQ += `${mountingQ.length / (Math.max(2, downloadedx))}`;
      while (downloadedx > 5) {
         mountingQ += `${1 << (Math.min(3, Math.abs(downloadedx)))}`;
         break;
      }
      for (let t = 0; t < 3; t++) {
         downloadedx %= Math.max(downloadedx % 1, 2);
      }
         downloadedx ^= mountingQ.length;
          let fullscreenminO = String.fromCharCode(122,95,55,50,95,100,111,99,116,111,116,97,108,0);
          let iconwechatH = 4;
          let tailg = false;
         mountingQ = `${3 + mountingQ.length}`;
         fullscreenminO = `${iconwechatH}`;
         iconwechatH %= Math.max(2, 2);
         tailg = fullscreenminO.length >= 40;
      dycreatorc -= parseFloat(`${3 << (Math.min(3, backwhite7.length))}`);
      if (2452834.0 == dycreatorc) {
         break;
      }
   } while ((2452834.0 == dycreatorc) && (3 < (2 ^ backwhite7.length) && 2 < (backwhite7.length - parseInt(`${dycreatorc}`))));
   do {
      modityd = whitetickf.length < 11;
      if (modityd ? !modityd : modityd) {
         break;
      }
   } while ((!modityd) && (modityd ? !modityd : modityd));
       let fastforwardB = 2;
       let imageactionlivef = String.fromCharCode(109,112,101,103,117,116,105,108,115,95,97,95,49,49,0);
       let pathz = String.fromCharCode(100,95,49,48,95,113,115,118,100,101,99,0);
       let footballfiledlayouth = new Map([[String.fromCharCode(108,111,116,116,105,101,109,111,100,101,108,95,48,95,57,51,0),false ], [String.fromCharCode(99,114,101,97,116,101,100,95,110,95,50,51,0),true ], [String.fromCharCode(110,95,50,50,95,118,97,114,108,101,110,0),true ]]);
       let inactiveB = new Map([[String.fromCharCode(115,117,98,112,111,105,110,116,101,114,95,56,95,54,52,0),497], [String.fromCharCode(97,114,109,118,116,101,95,97,95,53,48,0),444], [String.fromCharCode(113,95,50,57,95,101,118,101,114,121,98,111,100,121,0),85]]);
      for (let i = 0; i < 3; i++) {
         inactiveB = new Map([[`${footballfiledlayouth.size}`, pathz.length - 1]]);
      }
      do {
          let commonQ = String.fromCharCode(120,95,52,51,95,99,108,97,105,109,115,0);
          let iconsaveimageW = 1.0;
          let eyeopenN = String.fromCharCode(112,114,101,115,101,108,101,99,116,95,112,95,56,53,0);
         pathz = `${2 | inactiveB.size}`;
         commonQ += `${eyeopenN.length}`;
         iconsaveimageW += parseInt(`${iconsaveimageW}`) % 2;
         eyeopenN = "3";
         if (pathz == String.fromCharCode(97,52,55,113,118,110,0)) {
            break;
         }
      } while (((inactiveB.size >> (Math.min(Math.abs(1), 5))) <= 4) && (pathz == String.fromCharCode(97,52,55,113,118,110,0)));
          let iconcloseq = [816, 365];
          let serviceJ = 0.0;
         imageactionlivef += "1";
         iconcloseq.push(1 / (Math.max(8, parseInt(`${serviceJ}`))));
         serviceJ *= parseFloat(`${parseInt(`${serviceJ}`) << (Math.min(iconcloseq.length, 3))}`);
          let friendso = 4;
         imageactionlivef += `${inactiveB.size % (Math.max(2, 8))}`;
         friendso -= 3;
         pathz += `${imageactionlivef.length | inactiveB.size}`;
      while (4 >= (fastforwardB / 3)) {
         imageactionlivef += "1";
         break;
      }
      do {
         footballfiledlayouth = new Map([[imageactionlivef, 3 | imageactionlivef.length]]);
         if (footballfiledlayouth.size == 373548) {
            break;
         }
      } while ((2 < inactiveB.size) && (footballfiledlayouth.size == 373548));
      for (let m = 0; m < 2; m++) {
         imageactionlivef = `${1 + fastforwardB}`;
      }
      dycreatorc -= (parseFloat(`${(libavfilter5 ? 2 : 3)}`));
   while (libavfilter5) {
      attributedstringa |= 1;
      break;
   }
   do {
      libavfilter5 = whitetickf == String.fromCharCode(78,0);
      if (libavfilter5 ? !libavfilter5 : libavfilter5) {
         break;
      }
   } while ((libavfilter5 ? !libavfilter5 : libavfilter5) && (4 >= (profilepicD >> (Math.min(Math.abs(4), 1)))));
   if (modityd) {
       let logot = [17, 543, 547];
          let iconsetting1 = String.fromCharCode(111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,95,101,95,51,49,0);
          let detailsQ = String.fromCharCode(111,118,101,114,118,105,101,119,95,119,95,50,55,0);
         logot = [logot.length];
         iconsetting1 += `${detailsQ.length}`;
         detailsQ = `${(iconsetting1 == String.fromCharCode(101,0) ? iconsetting1.length : detailsQ.length)}`;
         logot.push(1);
       let gmail8 = 1;
       let combineQ = 5;
      modityd = 68 == profilepicD;
   }
       let weatherX = [String.fromCharCode(104,105,115,116,111,103,114,97,109,95,98,95,57,54,0), String.fromCharCode(105,95,51,55,95,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0)];
       let progressg = [649, 735, 718];
       let lines = String.fromCharCode(117,110,98,111,120,95,113,95,49,53,0);
      do {
          let tempnodatagifR = 4.0;
          let redscoreballJ = [354, 265, 141];
          let completeI = String.fromCharCode(116,95,53,54,95,99,111,100,101,99,112,97,114,0);
          let xvodu = String.fromCharCode(112,114,101,115,115,117,114,101,95,109,95,55,48,0);
         lines = "3";
         tempnodatagifR *= parseFloat(`${redscoreballJ.length}`);
         redscoreballJ.push(completeI.length / 3);
         completeI = `${(completeI == String.fromCharCode(50,0) ? completeI.length : redscoreballJ.length)}`;
         xvodu += `${(xvodu == String.fromCharCode(84,0) ? completeI.length : xvodu.length)}`;
         if (2577777 == lines.length) {
            break;
         }
      } while ((2577777 == lines.length) && (lines.length <= 1));
          let selectedO = new Map([[String.fromCharCode(114,101,109,111,118,101,103,114,97,105,110,95,121,95,53,50,0),706], [String.fromCharCode(118,95,52,57,95,117,112,115,101,114,116,0),497]]);
         lines += `${weatherX.length % 2}`;
         selectedO[`${selectedO.size}`] = 2 ^ selectedO.size;
       let backwhiteF = String.fromCharCode(119,95,56,50,95,115,105,109,112,108,105,102,121,0);
       let calendar2 = String.fromCharCode(99,97,112,95,110,95,51,57,0);
         backwhiteF = `${progressg.length}`;
         lines = `${weatherX.length | 3}`;
      for (let z = 0; z < 3; z++) {
          let ajaxS = String.fromCharCode(112,108,97,121,101,100,95,119,95,53,52,0);
          let minimizeQ = String.fromCharCode(108,97,116,95,103,95,51,55,0);
          let tempnodataX = String.fromCharCode(104,95,49,56,95,99,111,110,110,101,99,116,105,118,105,116,121,0);
          let crowng = new Map([[String.fromCharCode(116,104,114,101,97,100,115,95,109,95,51,53,0),792], [String.fromCharCode(99,105,110,97,117,100,105,111,95,120,95,49,55,0),320]]);
         lines += `${(calendar2 == String.fromCharCode(109,0) ? ajaxS.length : calendar2.length)}`;
         ajaxS += `${2 / (Math.max(10, minimizeQ.length))}`;
         minimizeQ = `${minimizeQ.length}`;
         tempnodataX += `${2 + tempnodataX.length}`;
         crowng[`${tempnodataX}`] = tempnodataX.length * crowng.size;
      }
      for (let x = 0; x < 2; x++) {
          let backiconf = new Map([[String.fromCharCode(105,95,52,49,95,103,101,116,110,112,97,115,115,101,115,0),false ], [String.fromCharCode(115,99,97,110,110,105,110,103,95,121,95,49,48,0),false ], [String.fromCharCode(115,105,103,115,95,121,95,52,51,0),false ]]);
          let sided = 5.0;
         progressg = [(String.fromCharCode(87,0) == backwhiteF ? backwhiteF.length : progressg.length)];
         backiconf[`${sided}`] = parseInt(`${sided}`) / (Math.max(2, 9));
      }
         progressg = [calendar2.length];
         progressg = [lines.length % (Math.max(3, 5))];
      attributedstringa >>= Math.min(3, Math.abs(profilepicD ^ 3));

    clearTimeout(this.player.controlTimeout);
       let iconclosewhitewithbgN = [936, 748];
       let appleQ = String.fromCharCode(99,95,50,51,95,100,111,99,0);
         appleQ = `${iconclosewhitewithbgN.length ^ appleQ.length}`;
         iconclosewhitewithbgN.push(3);
      for (let d = 0; d < 2; d++) {
         appleQ += "2";
      }
         iconclosewhitewithbgN = [1];
         iconclosewhitewithbgN = [appleQ.length << (Math.min(1, iconclosewhitewithbgN.length))];
       let settingsJ = new Map([[String.fromCharCode(117,110,109,97,114,115,104,97,108,95,107,95,52,55,0),138], [String.fromCharCode(99,104,97,105,110,105,100,95,102,95,51,51,0),2]]);
      defaultfootballbgh = new Map([[`${attributedstringa}`, attributedstringa + 1]]);
      modityd = model > 41;
   do {
      backwhite7 += `${backwhite7.length / (Math.max(2, 10))}`;
      if (4295949 == backwhite7.length) {
         break;
      }
   } while ((4295949 == backwhite7.length) && (4 <= (defaultfootballbgh.size | 4)));
   for (let w = 0; w < 2; w++) {
      model %= Math.max(4, backwhite7.length | parseInt(`${dycreatorc}`));
   }
       let networkT = String.fromCharCode(115,95,51,56,95,102,117,100,103,101,0);
       let redcirclebgZ = new Map([[String.fromCharCode(97,99,99,101,108,101,114,97,116,101,95,108,95,52,56,0),833], [String.fromCharCode(101,95,52,51,95,104,97,115,104,116,97,103,115,0),316]]);
      do {
         redcirclebgZ = new Map([[`${redcirclebgZ.size}`, networkT.length % 3]]);
         if (redcirclebgZ.size == 2436170) {
            break;
         }
      } while ((redcirclebgZ.size == 2436170) && (networkT.length >= 2));
      for (let t = 0; t < 2; t++) {
         redcirclebgZ = new Map([[`${redcirclebgZ.size}`, (String.fromCharCode(114,0) == networkT ? networkT.length : redcirclebgZ.size)]]);
      }
         redcirclebgZ = new Map([[`${redcirclebgZ.size}`, 2]]);
      for (let i = 0; i < 2; i++) {
         networkT = `${1 >> (Math.min(4, networkT.length))}`;
      }
         networkT += `${redcirclebgZ.size}`;
      if (networkT.endsWith(`${redcirclebgZ.size}`)) {
          let static_ojT = false;
          let iconclosewhitebgO = 4.0;
         networkT = `${3 >> (Math.min(1, networkT.length))}`;
         static_ojT = iconclosewhitebgO == 45.11;
         iconclosewhitebgO += 2 % (Math.max(10, parseInt(`${iconclosewhitebgO}`)));
      }
      dycreatorc *= (parseFloat(`${profilepicD / (Math.max(10, (modityd ? 2 : 1)))}`));
   if ((1 | backwhite7.length) < 2) {
       let combineU = false;
       let inouttargetredq = String.fromCharCode(114,95,54,55,95,116,111,108,101,114,97,110,99,101,0);
       let configureG = false;
       let iconrightorangeb = String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,109,97,103,105,99,95,98,95,52,49,0);
      while (3 >= inouttargetredq.length) {
         iconrightorangeb = `${(String.fromCharCode(101,0) == inouttargetredq ? inouttargetredq.length : (configureG ? 4 : 4))}`;
         break;
      }
         combineU = !configureG || iconrightorangeb.length > 64;
          let iconwechatr = String.fromCharCode(106,95,52,53,95,105,110,116,101,102,97,99,101,0);
          let actionj = String.fromCharCode(116,95,53,57,95,116,101,120,116,98,111,120,0);
         combineU = 44 < actionj.length || String.fromCharCode(103,0) == iconwechatr;
       let libreactI = 4.0;
      do {
         configureG = (((!configureG ? iconrightorangeb.length : 3) | iconrightorangeb.length) >= 3);
         if (configureG ? !configureG : configureG) {
            break;
         }
      } while ((configureG) && (configureG ? !configureG : configureG));
          let infoo = 3;
         iconrightorangeb = "1";
         infoo -= infoo;
      if (1 >= (iconrightorangeb.length ^ 4) && (iconrightorangeb.length * parseInt(`${libreactI}`)) >= 4) {
         iconrightorangeb += `${iconrightorangeb.length | 3}`;
      }
      do {
         configureG = parseFloat(`${iconrightorangeb.length}`) == libreactI;
         if (configureG ? !configureG : configureG) {
            break;
         }
      } while ((4 < inouttargetredq.length) && (configureG ? !configureG : configureG));
      if (5.89 < libreactI) {
          let orangeclockF = String.fromCharCode(110,95,51,49,95,115,108,111,112,101,0);
          let mathw = new Map([[String.fromCharCode(122,95,50,56,95,114,101,98,97,115,101,0),String.fromCharCode(98,114,101,97,100,95,53,95,52,53,0)], [String.fromCharCode(114,97,115,116,101,114,105,122,101,95,106,95,52,49,0),String.fromCharCode(114,101,116,114,97,110,115,109,105,116,95,116,95,50,55,0)], [String.fromCharCode(104,114,115,115,95,50,95,55,49,0),String.fromCharCode(106,95,50,53,95,98,101,97,116,105,110,103,0)]]);
          let leftu = true;
          let libfbjnib = new Map([[String.fromCharCode(112,114,101,104,101,97,116,95,108,95,54,57,0),String.fromCharCode(109,95,57,52,95,111,118,101,114,119,114,105,116,101,0)], [String.fromCharCode(100,101,115,99,114,95,52,95,54,55,0),String.fromCharCode(102,95,49,57,95,98,117,109,112,0)], [String.fromCharCode(98,117,116,116,101,114,102,108,105,101,115,95,98,95,52,48,0),String.fromCharCode(118,120,119,111,114,107,115,95,97,95,50,50,0)]]);
         libreactI /= Math.max((parseFloat(`${String.fromCharCode(114,0) == inouttargetredq ? inouttargetredq.length : (leftu ? 1 : 4)}`)), 5);
         orangeclockF = `${libfbjnib.size + mathw.size}`;
         mathw = new Map([[`${mathw.size}`, (orangeclockF == String.fromCharCode(52,0) ? orangeclockF.length : mathw.size)]]);
         leftu = libfbjnib.size >= mathw.size;
      }
      while (iconrightorangeb.length == 4 && !combineU) {
         iconrightorangeb += `${iconrightorangeb.length}`;
         break;
      }
          let dependenciesB = 0.0;
          let movies5 = false;
         combineU = ((iconrightorangeb.length << (Math.min(5, Math.abs((configureG ? iconrightorangeb.length : 7))))) > 7);
         dependenciesB /= Math.max(1, ((movies5 ? 2 : 5) / (Math.max(parseInt(`${dependenciesB}`), 9))));
         movies5 = dependenciesB >= 67.69 && !movies5;
         combineU = libreactI <= 50.85;
      backwhite7 += `${((configureG ? 4 : 3) ^ 1)}`;
   }
   for (let e = 0; e < 2; e++) {
      backwhite7 = `${((libavfilter5 ? 2 : 4))}`;
   }
   while (!libavfilter5) {
       let gifgoalbgD = String.fromCharCode(112,105,120,101,108,115,95,112,95,57,57,0);
       let animationsO = String.fromCharCode(119,97,105,116,101,114,95,54,95,56,50,0);
       let completeP = false;
       let scrollviewb = [316, 303, 579];
       let libreactnativeblobd = true;
      for (let v = 0; v < 3; v++) {
         libreactnativeblobd = scrollviewb.length >= 29 || completeP;
      }
       let orientationU = false;
          let iconrefreshG = String.fromCharCode(100,101,99,111,109,112,95,107,95,49,49,0);
         animationsO += `${gifgoalbgD.length}`;
         iconrefreshG += `${1 | iconrefreshG.length}`;
         animationsO += `${((libreactnativeblobd ? 3 : 5))}`;
      for (let l = 0; l < 1; l++) {
         scrollviewb = [scrollviewb.length + 3];
      }
          let privacyF = String.fromCharCode(102,105,108,116,101,114,95,49,95,52,52,0);
         gifgoalbgD += `${((completeP ? 5 : 1) % 1)}`;
         privacyF += "1";
         libreactnativeblobd = gifgoalbgD.length >= animationsO.length;
      for (let t = 0; t < 1; t++) {
         animationsO += `${gifgoalbgD.length}`;
      }
      if (animationsO.includes(`${libreactnativeblobd}`)) {
         libreactnativeblobd = !animationsO.endsWith(`${completeP}`);
      }
          let mbnativeX = new Map([[String.fromCharCode(119,97,118,101,115,95,99,95,53,50,0),String.fromCharCode(108,95,52,95,108,115,112,100,108,112,99,0)], [String.fromCharCode(113,95,56,57,95,109,108,111,99,107,0),String.fromCharCode(103,95,54,57,95,103,101,111,116,97,103,115,0)]]);
         orientationU = animationsO.length == 53;
         mbnativeX[`${mbnativeX.size}`] = mbnativeX.size;
          let recommendationP = false;
         scrollviewb = [((libreactnativeblobd ? 1 : 4) - (orientationU ? 3 : 4))];
         recommendationP = !recommendationP;
       let iconlogoutT = String.fromCharCode(101,95,55,95,114,117,108,101,98,111,111,107,0);
       let predictionbannershared4 = String.fromCharCode(112,101,114,102,111,114,109,105,110,103,95,112,95,54,50,0);
       let caste = 3.0;
       let encryptorY = 3.0;
          let penalty3 = true;
          let streamingN = String.fromCharCode(112,114,105,109,105,116,105,118,101,95,121,95,53,56,0);
         caste -= 1;
         penalty3 = streamingN.endsWith(`${penalty3}`);
         streamingN += `${streamingN.length}`;
         libreactnativeblobd = !libreactnativeblobd && encryptorY <= 45.69;
      libavfilter5 = parseFloat(`${scrollviewb.length}`) <= dycreatorc;
      break;
   }
      dycreatorc *= parseFloat(`${1 | defaultfootballbgh.size}`);
      libavfilter5 = model >= 25 && !libavfilter5;
   if (whitetickf != String.fromCharCode(78,0)) {
      backwhite7 += `${defaultfootballbgh.size}`;
   }

  }

   
  resetControlTimeout() {
       let tooltipsu = false;
    let notificatione = String.fromCharCode(110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,95,103,95,53,56,0);
    let reducerL = String.fromCharCode(116,114,101,101,119,114,105,116,101,114,95,57,95,57,54,0);
    let libapminsightbU = 3.0;
    let matchinactive2 = String.fromCharCode(115,104,111,119,119,97,118,101,115,112,105,99,95,113,95,49,48,0);
    let ncopy_v0 = false;
    let sans2 = String.fromCharCode(115,105,109,117,108,97,116,105,111,110,95,57,95,50,50,0);
    let nterstitialc = true;
    let homeplayerq = 2.0;
    let stringY = String.fromCharCode(98,95,57,48,0);
    let dialogS = [637, 808, 420];
       let whitel = String.fromCharCode(98,97,115,101,117,114,108,95,112,95,54,52,0);
         whitel = `${whitel.length}`;
         whitel += `${whitel.length}`;
      while (whitel == String.fromCharCode(84,0) || 1 >= whitel.length) {
         whitel += `${(String.fromCharCode(71,0) == whitel ? whitel.length : whitel.length)}`;
         break;
      }
      nterstitialc = sans2.length > 100;
   while (matchinactive2.includes(`${sans2.length}`)) {
       let shareM = 1;
       let iconwatchnowL = 1;
       let nativeo = [520, 578];
       let robotoJ = String.fromCharCode(103,97,117,115,115,105,97,110,105,105,114,100,95,97,95,54,52,0);
       let libswscaleq = String.fromCharCode(107,95,56,57,95,110,101,101,100,101,100,0);
      for (let h = 0; h < 1; h++) {
          let greenQ = 1;
         shareM -= (robotoJ == String.fromCharCode(87,0) ? robotoJ.length : nativeo.length);
         greenQ -= greenQ % (Math.max(greenQ, 8));
      }
         nativeo = [libswscaleq.length << (Math.min(5, robotoJ.length))];
      for (let y = 0; y < 1; y++) {
          let applicationZ = 1.0;
         libswscaleq = "2";
         applicationZ /= Math.max(parseFloat(`${3 / (Math.max(parseInt(`${applicationZ}`), 2))}`), 4);
      }
      for (let f = 0; f < 2; f++) {
          let modulesy = 4.0;
         nativeo = [nativeo.length];
         modulesy -= parseFloat(`${3}`);
      }
         shareM /= Math.max(2, shareM % (Math.max(8, iconwatchnowL)));
          let libglogY = 1.0;
          let streamingJ = String.fromCharCode(118,95,49,53,95,110,101,103,0);
          let backiconv = false;
         shareM += 3 & parseInt(`${libglogY}`);
         libglogY += parseFloat(`${2}`);
         streamingJ += "1";
      do {
         robotoJ = `${2 << (Math.min(1, nativeo.length))}`;
         if (robotoJ.length == 4196298) {
            break;
         }
      } while ((nativeo.length >= 1) && (robotoJ.length == 4196298));
      do {
         iconwatchnowL >>= Math.min(Math.abs(iconwatchnowL), 5);
         if (iconwatchnowL == 2079432) {
            break;
         }
      } while ((5 == (robotoJ.length % 1) && (iconwatchnowL % (Math.max(robotoJ.length, 9))) == 1) && (iconwatchnowL == 2079432));
      sans2 = `${((tooltipsu ? 5 : 4) / (Math.max(parseInt(`${libapminsightbU}`), 4)))}`;
      break;
   }
   for (let s = 0; s < 3; s++) {
      matchinactive2 += `${((tooltipsu ? 5 : 5))}`;
   }
   if (parseFloat(`${matchinactive2.length}`) < homeplayerq) {
      matchinactive2 += `${((ncopy_v0 ? 2 : 3) >> (Math.min(Math.abs(1), 2)))}`;
   }
   for (let k = 0; k < 1; k++) {
      homeplayerq -= (parseFloat(`${3 - (tooltipsu ? 1 : 4)}`));
   }
   while (!ncopy_v0) {
      nterstitialc = notificatione.length <= 31;
      break;
   }
       let orangeclockD = new Map([[String.fromCharCode(115,111,109,101,116,104,105,110,103,95,48,95,51,49,0),531], [String.fromCharCode(98,95,49,95,105,100,99,116,120,100,99,0),475], [String.fromCharCode(115,97,100,120,95,109,95,55,56,0),971]]);
       let vietnamJ = 5;
         vietnamJ <<= Math.min(Math.abs(vietnamJ >> (Math.min(Math.abs(orangeclockD.size), 3))), 1);
      for (let a = 0; a < 3; a++) {
         vietnamJ ^= 1 ^ orangeclockD.size;
      }
          let logoY = false;
          let pageR = false;
         vietnamJ >>= Math.min(5, Math.abs(vietnamJ));
         logoY = (!logoY ? !pageR : logoY);
         pageR = (!logoY ? pageR : logoY);
          let link8 = new Map([[String.fromCharCode(108,95,50,51,95,97,117,116,111,114,101,118,101,114,115,101,115,0),String.fromCharCode(110,95,56,57,95,101,110,117,109,101,114,97,116,101,0)], [String.fromCharCode(114,101,97,99,116,105,111,110,115,95,56,95,56,50,0),String.fromCharCode(109,101,109,115,104,105,112,95,54,95,54,52,0)]]);
          let emptya = String.fromCharCode(115,107,105,112,112,97,98,108,101,95,51,95,48,0);
         vietnamJ >>= Math.min(2, Math.abs(3 ^ vietnamJ));
         link8[emptya] = link8.size << (Math.min(emptya.length, 4));
          let libfileT = [String.fromCharCode(99,108,110,112,97,115,115,95,55,95,54,55,0), String.fromCharCode(119,95,50,57,95,115,116,97,99,107,0), String.fromCharCode(100,95,55,55,95,112,114,101,115,101,110,116,97,98,108,101,0)];
          let rewardK = 1.0;
          let whitesmallticky = String.fromCharCode(114,101,111,114,100,101,114,105,110,103,95,100,95,56,0);
         orangeclockD[`${vietnamJ}`] = 3 * vietnamJ;
         libfileT.push((String.fromCharCode(72,0) == whitesmallticky ? whitesmallticky.length : parseInt(`${rewardK}`)));
         rewardK += parseFloat(`${2 >> (Math.min(4, whitesmallticky.length))}`);
          let const_5tc = 1.0;
         vietnamJ &= orangeclockD.size;
         const_5tc /= Math.max(3, parseInt(`${const_5tc}`) ^ parseInt(`${const_5tc}`));
      ncopy_v0 = vietnamJ >= libapminsightbU;
       let orangeclock0 = 4;
       let homeactiveI = false;
      while (!homeactiveI) {
          let datam = String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,95,116,95,49,50,0);
          let actionsb = String.fromCharCode(121,95,56,51,95,115,99,97,108,97,114,0);
          let middlesoundc = true;
          let minimizea = new Map([[String.fromCharCode(100,105,102,102,101,114,101,110,99,101,95,119,95,53,51,0),661], [String.fromCharCode(102,111,114,99,101,100,95,117,95,57,49,0),813], [String.fromCharCode(105,95,49,55,95,97,117,116,104,107,101,121,0),215]]);
          let defaultpredictionprofiled = [114, 420];
         orangeclock0 *= 2;
         datam = `${((middlesoundc ? 2 : 3))}`;
         actionsb += `${datam.length ^ actionsb.length}`;
         middlesoundc = (defaultpredictionprofiled.length / (Math.max(minimizea.size, 10))) >= 87;
         minimizea[actionsb] = actionsb.length;
         defaultpredictionprofiled = [((middlesoundc ? 1 : 5) % 1)];
         break;
      }
      do {
          let predictiondefaults = 3.0;
          let filtert = String.fromCharCode(109,95,51,56,95,109,105,100,108,0);
         orangeclock0 &= orangeclock0;
         predictiondefaults /= Math.max(4, parseFloat(`${2 & filtert.length}`));
         filtert = `${filtert.length + parseInt(`${predictiondefaults}`)}`;
         if (3033515 == orangeclock0) {
            break;
         }
      } while ((3033515 == orangeclock0) && (!homeactiveI));
         homeactiveI = 17 == orangeclock0;
         homeactiveI = !homeactiveI;
      while (3 <= (1 & orangeclock0)) {
          let orangeA = [353, 750, 417];
          let whitetickM = new Map([[String.fromCharCode(106,95,57,54,95,98,97,110,100,105,110,103,0),479], [String.fromCharCode(116,95,53,56,95,117,110,97,114,99,104,105,118,101,100,0),706]]);
         homeactiveI = ((orangeA.length + (homeactiveI ? 77 : orangeA.length)) <= 77);
         whitetickM = new Map([[`${whitetickM.size}`, 3]]);
         break;
      }
      while (5 == (orangeclock0 >> (Math.min(Math.abs(2), 3)))) {
          let langL = String.fromCharCode(102,117,110,110,121,95,98,95,53,52,0);
          let bellreminder9 = String.fromCharCode(109,95,54,48,95,119,101,120,112,97,110,100,0);
          let yellowtoredv = new Map([[String.fromCharCode(109,97,116,99,104,101,115,95,118,95,57,53,0),674], [String.fromCharCode(97,118,114,101,115,97,109,112,108,101,95,114,95,57,57,0),469], [String.fromCharCode(121,95,56,56,95,97,100,108,101,114,0),750]]);
         homeactiveI = 66 > orangeclock0 || 66 > langL.length;
         langL += `${yellowtoredv.size - bellreminder9.length}`;
         bellreminder9 += `${bellreminder9.length}`;
         yellowtoredv = new Map([[`${yellowtoredv.size}`, 3]]);
         break;
      }
      ncopy_v0 = reducerL.length <= 17;

    this.clearControlTimeout();
   do {
       let dycreator5 = true;
       let smallsoundk = String.fromCharCode(121,95,51,57,95,114,101,109,111,118,97,108,0);
       let selectiony = 1;
       let matchdetailbgt = String.fromCharCode(100,105,116,97,110,99,101,95,116,95,56,55,0);
         smallsoundk += `${matchdetailbgt.length}`;
      while (matchdetailbgt.length > 5 && !dycreator5) {
         dycreator5 = !dycreator5;
         break;
      }
      do {
         matchdetailbgt += "1";
         if (matchdetailbgt.length == 185962) {
            break;
         }
      } while ((2 < (matchdetailbgt.length - 3) || 3 < (selectiony - matchdetailbgt.length)) && (matchdetailbgt.length == 185962));
          let predictiondefaulti = [72, 526];
          let chatbotphotoK = String.fromCharCode(102,101,116,99,104,101,100,95,116,95,55,51,0);
         smallsoundk = `${chatbotphotoK.length}`;
         predictiondefaulti.push(predictiondefaulti.length);
         chatbotphotoK += `${predictiondefaulti.length}`;
      while (5 < (selectiony >> (Math.min(Math.abs(3), 2))) || 3 < (selectiony >> (Math.min(Math.abs(3), 3)))) {
         selectiony &= 2 << (Math.min(Math.abs(selectiony), 2));
         break;
      }
         dycreator5 = smallsoundk.length >= 59;
      while (matchdetailbgt.length < 4) {
          let codeW = 0.0;
          let danger3 = true;
         dycreator5 = codeW == 23.8 || !danger3;
         break;
      }
          let componentq = new Map([[String.fromCharCode(100,111,117,98,108,101,115,95,114,95,49,54,0),691], [String.fromCharCode(98,111,120,101,100,95,115,95,56,55,0),981]]);
          let penaltyo = false;
         selectiony -= 3;
         componentq[`${penaltyo}`] = (2 ^ (penaltyo ? 5 : 5));
      do {
         matchdetailbgt = `${(smallsoundk == String.fromCharCode(106,0) ? smallsoundk.length : (dycreator5 ? 5 : 1))}`;
         if (matchdetailbgt == String.fromCharCode(112,122,116,0)) {
            break;
         }
      } while ((3 == selectiony) && (matchdetailbgt == String.fromCharCode(112,122,116,0)));
          let subbasketballplayer6 = 0.0;
         matchdetailbgt = `${parseInt(`${subbasketballplayer6}`) ^ selectiony}`;
          let armvan = String.fromCharCode(114,95,49,49,95,98,114,105,100,103,101,97,98,108,101,0);
         dycreator5 = smallsoundk.length >= 58;
         armvan += `${armvan.length << (Math.min(Math.abs(3), 1))}`;
      do {
         selectiony >>= Math.min(Math.abs(selectiony ^ 2), 2);
         if (1864051 == selectiony) {
            break;
         }
      } while ((1864051 == selectiony) && ((matchdetailbgt.length % 3) > 3 || (matchdetailbgt.length % 3) > 3));
      nterstitialc = nterstitialc || homeplayerq == 35.50;
      if (nterstitialc ? !nterstitialc : nterstitialc) {
         break;
      }
   } while ((nterstitialc ? !nterstitialc : nterstitialc) && ((3.61 - libapminsightbU) == 3.80 && nterstitialc));
      libapminsightbU /= Math.max(2, (sans2.length >> (Math.min(3, Math.abs((ncopy_v0 ? 4 : 4))))));
   do {
      notificatione += `${2 % (Math.max(3, parseInt(`${libapminsightbU}`)))}`;
      if (String.fromCharCode(110,113,95,53,119,49,0) == notificatione) {
         break;
      }
   } while ((4.83 == (homeplayerq / (Math.max(2.12, 10)))) && (String.fromCharCode(110,113,95,53,119,49,0) == notificatione));
       let sheetg = false;
       let libavfiltery = true;
       let basketballiconR = 0.0;
          let inactiveY = 3;
          let sharewhiteT = true;
         libavfiltery = sheetg && !libavfiltery;
         inactiveY ^= inactiveY % 3;
         sharewhiteT = !sharewhiteT;
         libavfiltery = basketballiconR >= 20.48 && libavfiltery;
      for (let r = 0; r < 1; r++) {
         sheetg = !sheetg;
      }
          let favicon7 = 5.0;
          let tempnodatagifa = 4.0;
         basketballiconR /= Math.max(5, (parseInt(`${basketballiconR}`) | (sheetg ? 2 : 2)));
         favicon7 -= parseFloat(`${1}`);
         tempnodatagifa += parseInt(`${favicon7}`) | 1;
          let signinupj = 1;
          let greyw = 2.0;
          let sortY = String.fromCharCode(102,111,117,114,115,113,117,97,114,101,95,109,95,55,55,0);
         sheetg = libavfiltery || basketballiconR <= 45.18;
         signinupj <<= Math.min(Math.abs(2), 1);
         greyw += parseFloat(`${signinupj % 2}`);
         sortY = `${sortY.length}`;
          let projectO = new Map([[String.fromCharCode(100,111,110,97,116,101,95,108,95,55,53,0),860], [String.fromCharCode(99,97,116,97,108,111,103,95,104,95,52,57,0),271]]);
          let smallbrightnessy = String.fromCharCode(102,105,110,100,101,112,95,121,95,51,50,0);
         libavfiltery = 76.100 == basketballiconR;
         projectO = new Map([[`${projectO.size}`, (smallbrightnessy == String.fromCharCode(84,0) ? smallbrightnessy.length : projectO.size)]]);
         libavfiltery = (!sheetg ? !libavfiltery : sheetg);
          let libapminsightb6 = new Map([[String.fromCharCode(109,111,118,101,110,99,95,54,95,57,52,0),152], [String.fromCharCode(105,110,100,105,114,101,99,116,95,117,95,52,53,0),41], [String.fromCharCode(121,95,57,49,95,115,116,97,116,105,115,116,105,99,0),867]]);
          let sortS = 3.0;
          let defaultbasketballbg0 = String.fromCharCode(109,95,54,50,95,108,111,116,116,105,101,109,111,100,101,108,0);
         sheetg = libavfiltery;
         libapminsightb6 = new Map([[`${libapminsightb6.size}`, 3]]);
         sortS /= Math.max(parseFloat(`${2}`), 3);
         defaultbasketballbg0 = `${parseInt(`${sortS}`) | 1}`;
      for (let i = 0; i < 1; i++) {
         sheetg = !libavfiltery && basketballiconR <= 88.14;
      }
      nterstitialc = 23.80 >= libapminsightbU;
   do {
       let zoomi = String.fromCharCode(101,95,53,52,95,112,101,114,99,101,112,116,0);
       let componentregistry3 = String.fromCharCode(114,95,57,95,100,101,99,108,105,110,101,100,0);
       let chatroombackgroundR = 1.0;
         componentregistry3 += `${(zoomi == String.fromCharCode(83,0) ? zoomi.length : parseInt(`${chatroombackgroundR}`))}`;
          let sansQ = [String.fromCharCode(97,114,111,117,110,100,95,122,95,56,55,0), String.fromCharCode(115,116,97,116,101,112,95,122,95,55,55,0), String.fromCharCode(114,117,110,110,101,114,95,100,95,51,0)];
          let muted0 = true;
         componentregistry3 += "2";
         sansQ = [sansQ.length + 3];
         muted0 = !muted0;
         zoomi = `${componentregistry3.length}`;
         zoomi += "1";
      if (zoomi.length < componentregistry3.length) {
         zoomi += `${parseInt(`${chatroombackgroundR}`) & zoomi.length}`;
      }
      reducerL += "2";
      if (3166066 == reducerL.length) {
         break;
      }
   } while ((3166066 == reducerL.length) && (reducerL.length == 3));
   do {
      nterstitialc = notificatione.length > 42 || !tooltipsu;
      if (nterstitialc ? !nterstitialc : nterstitialc) {
         break;
      }
   } while ((nterstitialc ? !nterstitialc : nterstitialc) && (homeplayerq > 5.4));
   do {
      notificatione = `${2 % (Math.max(1, sans2.length))}`;
      if (3482617 == notificatione.length) {
         break;
      }
   } while ((reducerL.startsWith(notificatione)) && (3482617 == notificatione.length));
      matchinactive2 = `${((tooltipsu ? 2 : 5))}`;

    this.setControlTimeout();
   while ((3.80 - homeplayerq) == 2.15 || homeplayerq == 3.80) {
       let appleQ = String.fromCharCode(111,95,51,55,95,112,114,101,118,105,101,119,105,110,103,0);
       let holdera = 5.0;
       let castV = String.fromCharCode(116,105,101,114,115,95,55,95,55,50,0);
       let libreactH = 1.0;
      while (4 >= appleQ.length) {
         appleQ = "2";
         break;
      }
       let assistH = String.fromCharCode(115,101,101,107,97,98,108,101,95,104,95,55,52,0);
       let shareblackg = String.fromCharCode(109,111,100,109,95,57,95,50,57,0);
      while (2 == shareblackg.length) {
          let teamdetailsbgr = String.fromCharCode(121,95,57,52,95,106,105,110,99,108,117,100,101,0);
          let anewsW = [506, 798, 308];
          let redgoalU = String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,95,120,95,52,54,0);
          let forward2 = 4.0;
         assistH += `${(String.fromCharCode(114,0) == assistH ? assistH.length : parseInt(`${libreactH}`))}`;
         teamdetailsbgr = `${teamdetailsbgr.length}`;
         anewsW = [anewsW.length / (Math.max(3, 10))];
         redgoalU = `${teamdetailsbgr.length % (Math.max(4, anewsW.length))}`;
         forward2 /= Math.max(parseFloat(`${3}`), 4);
         break;
      }
         assistH += "2";
      do {
         libreactH /= Math.max(3, 1);
         if (libreactH == 2609966.0) {
            break;
         }
      } while (((parseInt(`${libreactH}`) + appleQ.length) <= 3) && (libreactH == 2609966.0));
          let eactZ = 3.0;
          let with_wW = String.fromCharCode(106,95,55,48,95,115,122,97,98,111,115,0);
         libreactH *= (String.fromCharCode(70,0) == shareblackg ? shareblackg.length : parseInt(`${holdera}`));
         eactZ += parseFloat(`${1}`);
         with_wW += `${(String.fromCharCode(66,0) == with_wW ? with_wW.length : parseInt(`${eactZ}`))}`;
          let reactr = new Map([[String.fromCharCode(99,108,97,117,115,101,95,115,95,51,57,0),820], [String.fromCharCode(109,98,102,105,108,116,101,114,95,99,95,55,56,0),846], [String.fromCharCode(108,111,99,97,108,101,95,120,95,49,51,0),100]]);
          let shootP = String.fromCharCode(111,112,101,114,97,116,105,111,110,115,95,52,95,51,54,0);
          let mbridgek = 4.0;
         holdera -= appleQ.length + parseInt(`${libreactH}`);
         reactr = new Map([[`${reactr.size}`, shootP.length]]);
         shootP = `${2 % (Math.max(6, parseInt(`${mbridgek}`)))}`;
         mbridgek /= Math.max(parseFloat(`${shootP.length}`), 1);
      if ((shareblackg.length + holdera) > 3.16) {
          let f_playerP = 4.0;
          let viewerX = String.fromCharCode(99,95,56,52,95,116,114,97,105,116,0);
          let trophyg = 0;
          let moon4 = [279, 768, 597];
         holdera /= Math.max((String.fromCharCode(66,0) == castV ? castV.length : trophyg), 2);
         f_playerP *= parseFloat(`${1}`);
         viewerX = `${moon4.length}`;
         trophyg |= parseInt(`${f_playerP}`);
         moon4.push((String.fromCharCode(79,0) == viewerX ? parseInt(`${f_playerP}`) : viewerX.length));
      }
         assistH += `${parseInt(`${libreactH}`) + 1}`;
         castV += `${2 | appleQ.length}`;
      if (holdera >= 1.99) {
         libreactH += appleQ.length | assistH.length;
      }
       let y_manager2 = String.fromCharCode(114,101,113,117,101,115,116,101,100,95,102,95,50,55,0);
       let topon1 = String.fromCharCode(112,95,57,48,95,112,104,111,116,111,115,0);
      homeplayerq /= Math.max(parseFloat(`${stringY.length}`), 4);
      break;
   }
      sans2 = `${((tooltipsu ? 1 : 1) >> (Math.min(stringY.length, 3)))}`;
   do {
      notificatione = `${((nterstitialc ? 5 : 5) % (Math.max((ncopy_v0 ? 5 : 4), 2)))}`;
      if (String.fromCharCode(122,52,113,102,112,122,102,117,52,0) == notificatione) {
         break;
      }
   } while ((matchinactive2 != notificatione) && (String.fromCharCode(122,52,113,102,112,122,102,117,52,0) == notificatione));
   for (let v = 0; v < 2; v++) {
       let optionso = String.fromCharCode(112,111,108,121,103,111,110,95,51,95,51,51,0);
       let manifestl = 5;
      for (let h = 0; h < 3; h++) {
          let thumbnailJ = [299, 821];
          let wifirouter_ = new Map([[String.fromCharCode(111,95,50,51,95,97,116,111,109,105,99,115,0),false ], [String.fromCharCode(105,110,115,116,97,110,116,95,122,95,55,51,0),false ]]);
          let whitesmalltickz = String.fromCharCode(114,101,99,111,110,110,101,99,116,95,108,95,55,55,0);
          let recommendationY = new Map([[String.fromCharCode(99,95,56,49,95,97,112,112,114,111,112,114,105,97,116,101,0),String.fromCharCode(107,95,50,48,95,114,102,116,98,115,117,98,0)], [String.fromCharCode(101,95,49,53,95,108,105,102,101,116,105,109,101,0),String.fromCharCode(112,95,53,53,95,97,99,101,115,115,111,114,121,0)], [String.fromCharCode(105,95,56,55,95,99,117,114,108,121,0),String.fromCharCode(99,95,53,54,95,99,111,114,101,105,109,97,103,101,0)]]);
          let gmail3 = [602, 903];
         optionso = `${wifirouter_.size * 2}`;
         thumbnailJ.push(3 & gmail3.length);
         wifirouter_ = new Map([[`${recommendationY.size}`, 2]]);
         whitesmalltickz += "3";
         recommendationY = new Map([[`${recommendationY.size}`, whitesmalltickz.length >> (Math.min(Math.abs(3), 4))]]);
         gmail3.push(2);
      }
      if (!optionso.startsWith(`${manifestl}`)) {
         manifestl /= Math.max(5, manifestl ^ optionso.length);
      }
         manifestl |= optionso.length & manifestl;
         manifestl -= optionso.length * manifestl;
         manifestl /= Math.max(optionso.length >> (Math.min(5, Math.abs(manifestl))), 2);
          let iconfeedbackm = 3.0;
         manifestl &= manifestl;
         iconfeedbackm /= Math.max(2, parseFloat(`${parseInt(`${iconfeedbackm}`)}`));
      notificatione += `${(optionso.length * (ncopy_v0 ? 2 : 2))}`;
   }
      nterstitialc = !nterstitialc && matchinactive2.length <= 41;
      stringY += `${matchinactive2.length}`;
       let countdownO = 2;
       let bottoml = String.fromCharCode(103,101,116,104,111,115,116,98,121,110,97,109,101,95,106,95,55,54,0);
       let assists = String.fromCharCode(111,97,101,112,95,107,95,57,54,0);
          let area3 = 0;
          let whistlez = 4.0;
         bottoml += `${countdownO}`;
         area3 ^= parseInt(`${whistlez}`);
         whistlez /= Math.max(3 * parseInt(`${whistlez}`), 4);
          let defaultbasketballbgC = String.fromCharCode(119,95,54,51,95,113,122,98,105,110,0);
          let libapminsightaW = String.fromCharCode(101,95,51,0);
          let largeB = String.fromCharCode(113,117,97,110,116,115,95,114,95,53,54,0);
         assists += `${1 & assists.length}`;
         defaultbasketballbgC += "1";
         libapminsightaW += `${libapminsightaW.length * largeB.length}`;
         largeB += `${libapminsightaW.length}`;
      while ((4 - bottoml.length) >= 3 && (countdownO - 4) >= 1) {
         countdownO <<= Math.min(Math.abs(1 | assists.length), 5);
         break;
      }
       let iconbellactive7 = [398, 229];
       let chartj = [821, 911];
         iconbellactive7 = [assists.length * 1];
      if (2 <= (iconbellactive7.length % (Math.max(6, chartj.length)))) {
         chartj = [chartj.length];
      }
      do {
          let modelsP = false;
          let modal5 = String.fromCharCode(103,95,49,56,95,115,109,97,114,116,0);
          let cornerkickO = new Map([[String.fromCharCode(121,95,52,57,95,102,105,110,100,0),String.fromCharCode(117,95,53,95,99,111,110,118,101,114,115,105,111,110,115,0)], [String.fromCharCode(115,112,101,101,100,104,113,95,102,95,53,56,0),String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,95,109,95,50,52,0)], [String.fromCharCode(114,111,102,105,108,101,95,110,95,50,49,0),String.fromCharCode(105,95,50,53,95,118,109,104,100,0)]]);
          let neon6 = String.fromCharCode(97,110,116,105,97,108,105,97,115,105,110,103,95,119,95,56,51,0);
         bottoml += `${(String.fromCharCode(81,0) == assists ? iconbellactive7.length : assists.length)}`;
         modelsP = cornerkickO.size <= neon6.length;
         modal5 += "3";
         cornerkickO = new Map([[`${cornerkickO.size}`, neon6.length]]);
         if (bottoml == String.fromCharCode(101,120,118,95,0)) {
            break;
         }
      } while ((chartj.length == 2) && (bottoml == String.fromCharCode(101,120,118,95,0)));
         countdownO -= iconbellactive7.length | 1;
      nterstitialc = countdownO >= 39;
   if ((5 + notificatione.length) > 3 && 4 > (parseInt(`${homeplayerq}`) / 5)) {
       let libhermes1 = 1.0;
       let membershipX = false;
       let yellowtoredg = new Map([[String.fromCharCode(115,117,98,116,121,112,101,95,101,95,56,54,0),String.fromCharCode(100,114,97,103,95,56,95,52,55,0)], [String.fromCharCode(100,95,53,57,95,121,117,118,109,111,110,111,0),String.fromCharCode(116,100,108,116,95,98,95,50,53,0)], [String.fromCharCode(100,95,55,48,95,115,112,108,97,115,104,0),String.fromCharCode(122,95,51,51,95,97,110,97,110,100,97,110,0)]]);
      for (let t = 0; t < 3; t++) {
          let mbbannerz = String.fromCharCode(122,95,52,48,95,101,109,112,116,121,0);
          let icondownimgy = new Map([[String.fromCharCode(121,95,50,56,95,100,110,111,119,0),true ], [String.fromCharCode(116,101,109,112,95,103,95,57,0),false ]]);
         membershipX = 9 == yellowtoredg.size;
         mbbannerz = `${2 >> (Math.min(1, Math.abs(icondownimgy.size)))}`;
         icondownimgy = new Map([[`${icondownimgy.size}`, 3 >> (Math.min(5, mbbannerz.length))]]);
      }
         membershipX = !membershipX && yellowtoredg.size >= 45;
      for (let l = 0; l < 3; l++) {
          let backf = String.fromCharCode(102,95,57,95,97,99,104,105,101,118,101,100,0);
          let telegramG = String.fromCharCode(102,95,49,49,95,117,112,112,101,114,99,97,115,101,0);
         libhermes1 /= Math.max(parseFloat(`${telegramG.length}`), 5);
         backf += `${(String.fromCharCode(54,0) == backf ? backf.length : backf.length)}`;
         telegramG = `${backf.length}`;
      }
      do {
          let elementsV = 5.0;
          let phoneshareO = String.fromCharCode(98,105,110,100,101,114,95,51,95,57,52,0);
          let greenarrowupu = [703, 207];
          let livenodatabgimgp = [764, 530, 788];
         yellowtoredg = new Map([[`${yellowtoredg.size}`, yellowtoredg.size ^ parseInt(`${elementsV}`)]]);
         elementsV -= parseFloat(`${phoneshareO.length}`);
         phoneshareO += `${greenarrowupu.length ^ 1}`;
         greenarrowupu = [3 | greenarrowupu.length];
         livenodatabgimgp.push(1);
         if (yellowtoredg.size == 3252662) {
            break;
         }
      } while (((yellowtoredg.size % 1) >= 4 || !membershipX) && (yellowtoredg.size == 3252662));
      for (let y = 0; y < 1; y++) {
         libhermes1 += (parseFloat(`${(membershipX ? 2 : 1) << (Math.min(Math.abs(parseInt(`${libhermes1}`)), 1))}`));
      }
      do {
         libhermes1 /= Math.max(parseFloat(`${3}`), 4);
         if (libhermes1 == 4709507.0) {
            break;
         }
      } while ((libhermes1 == 4709507.0) && (5 <= (yellowtoredg.size >> (Math.min(Math.abs(5), 4))) || 5 <= (parseInt(`${libhermes1}`) / (Math.max(2, yellowtoredg.size)))));
      if (libhermes1 == 3.72 && (libhermes1 / 3.72) == 4.57) {
         libhermes1 += parseFloat(`${3 | yellowtoredg.size}`);
      }
          let righti = true;
         membershipX = 70.32 <= libhermes1 || !righti;
       let libgloge = String.fromCharCode(115,116,114,114,101,115,101,116,95,52,95,49,51,0);
      notificatione = `${parseInt(`${homeplayerq}`)}`;
   }

  }

   
  hideControlAnimation() {
       let encryptY = 2;
    let alertk = true;
    let filede = String.fromCharCode(113,116,114,108,101,95,108,95,52,55,0);
    let taiwanz = String.fromCharCode(109,95,52,57,95,115,101,101,107,98,97,99,107,0);
    let informationW = String.fromCharCode(120,95,55,50,95,101,110,97,98,108,101,100,0);
    let iconorientationK = String.fromCharCode(99,95,49,49,95,104,105,103,104,115,0);
    let subinN = String.fromCharCode(105,95,55,51,95,105,110,116,101,114,118,97,108,0);
    let phoneshareF = 2.0;
    let binddatasf = String.fromCharCode(122,95,55,52,95,105,110,118,111,107,101,114,0);
    let bgvipxvodH = true;
    let homex = [977, 563];
    let arrowrightwithtailw = String.fromCharCode(109,115,114,108,101,95,120,95,57,49,0);
    let iconmegaphoneX = String.fromCharCode(103,95,56,95,108,111,111,112,0);
      taiwanz = `${binddatasf.length % 3}`;
   while (5 >= (parseInt(`${phoneshareF}`) - 5) || (binddatasf.length + 5) >= 1) {
      phoneshareF += informationW.length;
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
   do {
      iconorientationK += `${iconorientationK.length}`;
      if (String.fromCharCode(119,53,102,108,0) == iconorientationK) {
         break;
      }
   } while ((String.fromCharCode(119,53,102,108,0) == iconorientationK) && (informationW == iconorientationK));
   do {
      iconorientationK = `${2 ^ filede.length}`;
      if (String.fromCharCode(105,48,110,116,116,115,0) == iconorientationK) {
         break;
      }
   } while ((iconorientationK.endsWith(`${phoneshareF}`)) && (String.fromCharCode(105,48,110,116,116,115,0) == iconorientationK));

  }

   
  showControlAnimation() {
       let gmailG = 5.0;
    let profileactive_ = 4.0;
    let goal4 = true;
    let profileframen = String.fromCharCode(97,95,56,55,95,114,101,115,101,116,0);
    let toponp = [636, 855, 513];
    let sideD = 5;
    let nextt = new Map([[String.fromCharCode(116,95,50,53,95,114,117,98,98,101,114,0),199], [String.fromCharCode(99,97,110,111,110,105,99,97,108,105,122,101,100,95,100,95,52,55,0),992]]);
    let malaysiam = false;
    let disconnectedx = false;
   for (let f = 0; f < 1; f++) {
       let libcrashsdkW = 2.0;
       let mail7 = new Map([[String.fromCharCode(98,97,115,101,103,112,104,95,52,95,57,51,0),633], [String.fromCharCode(119,95,55,50,95,110,97,118,105,103,97,116,105,111,110,0),22], [String.fromCharCode(109,116,97,102,95,98,95,54,52,0),821]]);
       let manifesta = 5;
       let predictiondefault6 = [443, 609];
       let shrunkL = new Map([[String.fromCharCode(120,95,57,53,95,116,114,121,0),953], [String.fromCharCode(116,95,53,51,0),517], [String.fromCharCode(117,95,57,48,95,112,114,111,118,105,115,105,111,110,0),765]]);
         mail7 = new Map([[`${predictiondefault6.length}`, 1 | predictiondefault6.length]]);
         predictiondefault6.push(2 | mail7.size);
      if ((manifesta + parseInt(`${libcrashsdkW}`)) >= 2 || (2 + manifesta) >= 5) {
          let predictionbannersharedc = String.fromCharCode(97,98,98,114,95,98,95,52,48,0);
          let basketballplayerplaceholderw = String.fromCharCode(111,118,101,114,114,105,100,101,95,106,95,55,49,0);
          let circlef = 5;
          let notificationfilledn = 5;
         manifesta |= 3 << (Math.min(2, predictionbannersharedc.length));
         predictionbannersharedc += "1";
         basketballplayerplaceholderw = `${2 + circlef}`;
         circlef /= Math.max(basketballplayerplaceholderw.length, 4);
         notificationfilledn |= 2;
      }
          let yellowcirclebgr = String.fromCharCode(98,95,50,95,105,110,115,116,97,110,116,105,97,116,105,111,110,0);
          let clubE = true;
         predictiondefault6.push(parseInt(`${libcrashsdkW}`) - 3);
         yellowcirclebgr = "1";
         clubE = !clubE && yellowcirclebgr.length <= 59;
          let cornerr = false;
          let team1 = 1;
          let statisticsactiveR = true;
         mail7 = new Map([[`${predictiondefault6.length}`, predictiondefault6.length]]);
         cornerr = !statisticsactiveR;
         team1 /= Math.max(team1, 1);
         manifesta += predictiondefault6.length + shrunkL.size;
      do {
         mail7 = new Map([[`${shrunkL.size}`, 2]]);
         if (mail7.size == 2517863) {
            break;
         }
      } while ((mail7.size < 4) && (mail7.size == 2517863));
          let utilsz = String.fromCharCode(100,101,112,108,111,121,109,101,110,116,95,110,95,49,55,0);
          let classesP = String.fromCharCode(108,105,115,116,95,120,95,56,55,0);
         shrunkL[`${libcrashsdkW}`] = parseInt(`${libcrashsdkW}`);
         utilsz = `${classesP.length}`;
         classesP = `${utilsz.length}`;
       let penaltygoal8 = String.fromCharCode(108,111,103,105,115,116,105,99,95,108,95,56,48,0);
       let nativeexW = String.fromCharCode(100,101,99,111,114,97,116,101,95,110,95,57,56,0);
      for (let w = 0; w < 2; w++) {
          let animationv = String.fromCharCode(114,101,112,111,95,118,95,49,0);
          let penaltyy = 5.0;
         shrunkL = new Map([[`${mail7.size}`, mail7.size % (Math.max(2, 4))]]);
         animationv = "1";
         penaltyy /= Math.max(parseInt(`${penaltyy}`), 3);
      }
      if (Array.from(mail7.keys()).includes(`${libcrashsdkW}`)) {
          let googleY = String.fromCharCode(105,118,102,101,110,99,95,111,95,49,52,0);
          let inviteH = String.fromCharCode(117,95,55,53,95,112,97,103,101,110,117,109,98,101,114,0);
          let target5 = String.fromCharCode(115,119,97,112,95,109,95,57,50,0);
          let textinputE = 5.0;
         libcrashsdkW /= Math.max(5, parseFloat(`${shrunkL.size}`));
         googleY += `${3 >> (Math.min(3, inviteH.length))}`;
         inviteH += `${target5.length}`;
         target5 = `${inviteH.length << (Math.min(googleY.length, 3))}`;
         textinputE -= 2;
      }
      for (let e = 0; e < 3; e++) {
         shrunkL[nativeexW] = shrunkL.size % (Math.max(3, 6));
      }
      for (let h = 0; h < 1; h++) {
          let iconschedulej = 0.0;
          let whitesmalltick3 = 5.0;
         penaltygoal8 = `${predictiondefault6.length >> (Math.min(Math.abs(2), 3))}`;
         iconschedulej -= parseFloat(`${1 % (Math.max(parseInt(`${whitesmalltick3}`), 3))}`);
         whitesmalltick3 *= parseFloat(`${3}`);
      }
         libcrashsdkW *= parseFloat(`${1 % (Math.max(parseInt(`${libcrashsdkW}`), 6))}`);
      do {
         shrunkL[`${manifesta}`] = 1 | parseInt(`${libcrashsdkW}`);
         if (4557235 == shrunkL.size) {
            break;
         }
      } while ((2 < (shrunkL.size / 4)) && (4557235 == shrunkL.size));
      profileframen = `${parseInt(`${profileactive_}`) * sideD}`;
   }
      toponp.push(toponp.length);

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
   while (profileactive_ < 1.43) {
      profileactive_ *= 2;
      break;
   }
      malaysiam = !goal4;

  }

   
  loadAnimation() {
       let mapbuffer4 = [921, 711];
    let volume4 = String.fromCharCode(99,111,109,112,111,115,101,105,95,115,95,54,48,0);
    let servicel = String.fromCharCode(121,115,108,111,103,95,54,95,50,57,0);
    let ewardedt = [String.fromCharCode(99,95,53,49,95,115,117,99,99,101,101,100,0), String.fromCharCode(107,95,51,56,95,115,116,114,101,116,99,104,0)];
    let specZ = String.fromCharCode(113,95,57,95,100,115,117,98,101,120,112,0);
    let whitevideolives = 3;
    let armvaR = String.fromCharCode(102,114,101,101,109,95,121,95,49,50,0);
    let fullx = String.fromCharCode(115,97,109,112,108,101,99,112,121,95,111,95,54,56,0);
    let valuess = [1000, 77, 201];
    let serviceQ = [571, 195, 72];
    let arrowrightW = String.fromCharCode(112,95,55,50,95,102,117,108,108,115,99,114,101,101,110,0);
    let greytickc = String.fromCharCode(102,116,114,117,110,99,97,116,101,95,53,95,53,50,0);
    let typinga = 5;
    let twitterw = new Map([[String.fromCharCode(107,105,110,103,95,114,95,54,53,0),String.fromCharCode(100,95,53,53,95,120,99,98,103,114,97,98,0)], [String.fromCharCode(121,117,118,121,97,95,99,95,56,57,0),String.fromCharCode(103,95,51,95,99,111,109,112,111,115,105,116,105,111,110,0)], [String.fromCharCode(98,97,99,107,103,114,111,117,110,100,105,110,103,95,117,95,54,51,0),String.fromCharCode(115,105,112,114,100,97,116,97,95,101,95,51,51,0)]]);
    let orangedownarrowI = new Map([[String.fromCharCode(99,108,111,99,107,119,105,115,101,95,108,95,50,55,0),876], [String.fromCharCode(111,95,52,56,95,116,119,105,99,101,0),760]]);
       let iconbelld = new Map([[String.fromCharCode(122,95,49,48,48,95,111,112,116,105,109,105,115,109,0),String.fromCharCode(117,95,57,53,95,110,111,110,122,101,114,111,0)], [String.fromCharCode(101,95,52,53,95,112,114,111,98,105,110,103,0),String.fromCharCode(122,95,56,50,95,99,97,112,116,117,114,101,114,0)], [String.fromCharCode(117,95,54,52,95,101,110,99,111,100,105,110,103,0),String.fromCharCode(116,95,57,55,95,116,119,111,108,111,111,112,0)]]);
       let goallogoG = String.fromCharCode(108,105,98,120,95,122,95,48,0);
      if (3 > (goallogoG.length + 3)) {
         iconbelld[goallogoG] = iconbelld.size - 2;
      }
      do {
         iconbelld[`${goallogoG}`] = goallogoG.length;
         if (iconbelld.size == 321279) {
            break;
         }
      } while ((iconbelld.size == 321279) && ((iconbelld.size << (Math.min(Math.abs(5), 2))) >= 3));
         iconbelld = new Map([[`${iconbelld.size}`, 3 << (Math.min(2, Math.abs(iconbelld.size)))]]);
         iconbelld = new Map([[`${iconbelld.size}`, goallogoG.length % (Math.max(2, 8))]]);
       let yellowscoreballu = String.fromCharCode(113,95,56,57,95,102,105,101,108,100,115,0);
       let component_ = String.fromCharCode(103,101,116,108,97,121,111,117,116,95,121,95,56,53,0);
         yellowscoreballu += `${(component_ == String.fromCharCode(80,0) ? yellowscoreballu.length : component_.length)}`;
      volume4 += "1";
   if (specZ.includes(`${ewardedt.length}`)) {
      ewardedt = [valuess.length];
   }
   do {
      valuess.push(valuess.length | 1);
      if (1965052 == valuess.length) {
         break;
      }
   } while (((valuess.length << (Math.min(fullx.length, 1))) < 5 && (fullx.length << (Math.min(Math.abs(5), 3))) < 5) && (1965052 == valuess.length));

    if (this.state.loading) {

   do {
       let xvodG = String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,95,114,95,54,49,0);
       let penaltyshootp = String.fromCharCode(114,101,102,111,99,117,115,95,110,95,57,49,0);
      if (penaltyshootp == String.fromCharCode(73,0)) {
         xvodG = `${2 / (Math.max(10, xvodG.length))}`;
      }
          let logino = String.fromCharCode(102,111,114,109,97,116,117,95,49,95,53,56,0);
         penaltyshootp = "2";
         logino = `${2 * logino.length}`;
      if (xvodG.length >= 1) {
         penaltyshootp += `${(xvodG == String.fromCharCode(67,0) ? xvodG.length : penaltyshootp.length)}`;
      }
         xvodG += `${penaltyshootp.length % 2}`;
          let volumeV = 3.0;
          let yellowcirclebga = new Map([[String.fromCharCode(106,95,51,48,95,114,101,99,105,112,105,101,110,116,0),405], [String.fromCharCode(116,114,97,99,107,95,106,95,57,50,0),987]]);
          let goallogoq = new Map([[String.fromCharCode(97,99,114,111,115,115,95,120,95,56,50,0),888], [String.fromCharCode(99,111,109,102,111,114,116,95,51,95,56,49,0),474]]);
         xvodG += `${goallogoq.size}`;
         volumeV += parseFloat(`${yellowcirclebga.size * 2}`);
         yellowcirclebga[`${volumeV}`] = parseInt(`${volumeV}`) / (Math.max(yellowcirclebga.size, 9));
         goallogoq = new Map([[`${yellowcirclebga.size}`, yellowcirclebga.size | parseInt(`${volumeV}`)]]);
       let vignette5 = String.fromCharCode(113,95,53,54,95,109,97,105,108,99,104,105,109,112,0);
      fullx = `${(fullx == String.fromCharCode(85,0) ? fullx.length : serviceQ.length)}`;
      if (fullx.length == 652704) {
         break;
      }
   } while ((fullx.length == 652704) && (volume4 != fullx));
   for (let j = 0; j < 3; j++) {
      ewardedt.push(whitevideolives);
   }
   if (2 > volume4.length) {
      volume4 = `${servicel.length}`;
   }
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
      specZ += `${ewardedt.length}`;
      if (specZ == String.fromCharCode(95,114,112,54,50,55,113,111,53,50,0)) {
         break;
      }
   } while ((specZ == String.fromCharCode(95,114,112,54,50,55,113,111,53,50,0)) && ((1 >> (Math.min(1, ewardedt.length))) >= 4));
   do {
      armvaR += `${volume4.length | mapbuffer4.length}`;
      if (3644478 == armvaR.length) {
         break;
      }
   } while ((3644478 == armvaR.length) && (!armvaR.startsWith(`${valuess.length}`)));
   do {
      ewardedt = [specZ.length ^ valuess.length];
      if (ewardedt.length == 2159649) {
         break;
      }
   } while ((4 <= (3 * serviceQ.length)) && (ewardedt.length == 2159649));

    }
  }

   
  _hideControls() {
       let incidentq = 2.0;
    let chatbotphotoX = new Map([[String.fromCharCode(102,95,50,50,95,114,101,106,111,105,110,0),643], [String.fromCharCode(114,95,52,56,95,109,97,116,99,104,0),98], [String.fromCharCode(113,95,56,48,95,112,105,99,116,111,114,0),369]]);
    let goallogo5 = String.fromCharCode(106,95,54,50,95,116,114,97,110,115,108,105,116,101,114,97,116,105,111,110,0);
    let libhermesM = 3;
    let subinH = String.fromCharCode(114,95,52,49,95,114,101,99,111,114,100,105,110,103,99,111,110,110,0);
    let libavfilter5 = [255, 413];
    let settingd = String.fromCharCode(98,95,49,53,95,114,101,115,116,111,114,101,0);
    let logouserB = false;
    let mbbannerE = 3.0;
    let more_ = 1.0;
      incidentq /= Math.max(2, parseFloat(`${chatbotphotoX.size}`));
   if (2 > subinH.length) {
       let iconarrowrightn = 3.0;
       let episodesM = false;
      for (let y = 0; y < 2; y++) {
         iconarrowrightn *= (parseFloat(`${(episodesM ? 2 : 2) - parseInt(`${iconarrowrightn}`)}`));
      }
      do {
         episodesM = !episodesM;
         if (episodesM ? !episodesM : episodesM) {
            break;
         }
      } while ((episodesM ? !episodesM : episodesM) && (episodesM));
      for (let b = 0; b < 1; b++) {
          let strJ = 2;
          let zhengpianY = true;
          let libreanimatedB = new Map([[String.fromCharCode(112,95,54,48,95,114,101,116,114,105,101,114,0),737], [String.fromCharCode(118,97,100,107,104,122,95,54,95,54,51,0),798]]);
          let exampleimageL = [145, 645];
         iconarrowrightn *= parseFloat(`${exampleimageL.length + parseInt(`${iconarrowrightn}`)}`);
         strJ /= Math.max(libreanimatedB.size, 3);
         zhengpianY = libreanimatedB[`${zhengpianY}`] == null;
         exampleimageL = [strJ];
      }
         iconarrowrightn += parseFloat(`${1 ^ parseInt(`${iconarrowrightn}`)}`);
         iconarrowrightn /= Math.max(1, parseFloat(`${parseInt(`${iconarrowrightn}`) + 3}`));
         episodesM = !episodesM;
      subinH = `${2 + parseInt(`${incidentq}`)}`;
   }
      mbbannerE /= Math.max(3 | goallogo5.length, 3);
   for (let j = 0; j < 1; j++) {
      incidentq += parseFloat(`${parseInt(`${incidentq}`) * 3}`);
   }

    if (this.mounted) {

       let largel = String.fromCharCode(100,105,118,105,100,111,114,115,95,53,95,52,52,0);
         largel = `${largel.length & largel.length}`;
       let episodesy = [510, 968];
      do {
         episodesy.push(episodesy.length % 2);
         if (3759368 == episodesy.length) {
            break;
         }
      } while ((3759368 == episodesy.length) && (5 == (largel.length * episodesy.length) || (5 * episodesy.length) == 1));
      goallogo5 += `${(String.fromCharCode(97,0) == largel ? largel.length : chatbotphotoX.size)}`;
   do {
      libavfilter5.push(subinH.length);
      if (libavfilter5.length == 3450760) {
         break;
      }
   } while ((2 > libavfilter5.length) && (libavfilter5.length == 3450760));
   for (let p = 0; p < 1; p++) {
      settingd += `${settingd.length + 3}`;
   }
       let balls = true;
       let libruntimeexecutorW = 1;
       let iconclosewhitewithbgX = 5;
         libruntimeexecutorW -= ((balls ? 5 : 3) >> (Math.min(Math.abs(libruntimeexecutorW), 2)));
         libruntimeexecutorW += iconclosewhitewithbgX;
      logouserB = (libhermesM * libavfilter5.length) >= 83;
      let state = this.state;
   do {
      libhermesM |= libavfilter5.length << (Math.min(Math.abs(1), 1));
      if (1496551 == libhermesM) {
         break;
      }
   } while ((1496551 == libhermesM) && ((parseInt(`${incidentq}`) * libhermesM) == 2 && (2 << (Math.min(4, Math.abs(libhermesM)))) == 5));
      subinH = "2";
   do {
       let promotionx = String.fromCharCode(103,95,50,52,95,104,97,115,104,116,97,103,0);
       let bottomo = 1.0;
       let countdownL = String.fromCharCode(118,95,52,95,113,100,109,99,0);
       let telemetryB = String.fromCharCode(97,95,51,51,95,100,111,99,108,105,115,116,0);
      while (4 <= telemetryB.length) {
         countdownL += `${telemetryB.length}`;
         break;
      }
      for (let k = 0; k < 1; k++) {
         countdownL += `${telemetryB.length ^ 1}`;
      }
       let fullv = String.fromCharCode(113,95,51,49,95,111,102,102,101,114,0);
         promotionx = `${2 + promotionx.length}`;
          let combine8 = false;
         fullv = `${parseInt(`${bottomo}`) << (Math.min(telemetryB.length, 4))}`;
         combine8 = combine8 || !combine8;
      for (let d = 0; d < 2; d++) {
         promotionx += "3";
      }
          let checkboxB = String.fromCharCode(115,95,54,56,95,112,116,105,111,110,115,0);
          let smallsoundp = false;
          let whitetickK = 1.0;
         fullv = `${countdownL.length}`;
         checkboxB = `${3 * parseInt(`${whitetickK}`)}`;
         smallsoundp = smallsoundp || whitetickK == 86.43;
         telemetryB = `${(countdownL == String.fromCharCode(75,0) ? countdownL.length : telemetryB.length)}`;
      while (countdownL.includes(promotionx)) {
         countdownL = `${3 ^ telemetryB.length}`;
         break;
      }
      do {
          let inouttargetyellowj = new Map([[String.fromCharCode(111,108,100,101,114,95,50,95,53,49,0),883], [String.fromCharCode(106,95,57,49,95,109,97,107,101,99,121,103,119,105,110,112,107,103,0),559]]);
         telemetryB += `${telemetryB.length >> (Math.min(4, Math.abs(parseInt(`${bottomo}`))))}`;
         inouttargetyellowj = new Map([[`${inouttargetyellowj.size}`, inouttargetyellowj.size % (Math.max(inouttargetyellowj.size, 5))]]);
         if (telemetryB == String.fromCharCode(117,107,110,57,117,107,49,101,109,0)) {
            break;
         }
      } while ((!fullv.endsWith(telemetryB)) && (telemetryB == String.fromCharCode(117,107,110,57,117,107,49,101,109,0)));
          let login6 = 3.0;
          let recommendationL = true;
         telemetryB = `${parseInt(`${bottomo}`)}`;
         login6 -= (parseInt(`${login6}`) * (recommendationL ? 4 : 4));
         recommendationL = !recommendationL;
      if ((bottomo / (Math.max(promotionx.length, 8))) > 3.8) {
         promotionx += "1";
      }
      chatbotphotoX[settingd] = settingd.length ^ 3;
      if (2319173 == chatbotphotoX.size) {
         break;
      }
   } while ((2 > (3 | goallogo5.length)) && (2319173 == chatbotphotoX.size));
   for (let i = 0; i < 1; i++) {
      logouserB = 24.31 == mbbannerE;
   }

      state.showControls = false;
   if (4.59 == (mbbannerE + 4.57) || 4.57 == mbbannerE) {
      mbbannerE -= ((logouserB ? 5 : 2));
   }
      chatbotphotoX = new Map([[`${libavfilter5.length}`, 2]]);
   if (settingd == subinH) {
       let downloadedf = false;
       let selection5 = String.fromCharCode(112,101,114,99,101,110,116,105,108,101,95,114,95,55,50,0);
       let arrowrightwithtailC = 5.0;
       let relatedj = 1;
      if ((5.25 - arrowrightwithtailC) == 2.64) {
         arrowrightwithtailC += selection5.length;
      }
          let moduleso = new Map([[String.fromCharCode(117,110,99,108,101,115,95,111,95,55,0),false ], [String.fromCharCode(99,100,97,116,101,95,111,95,53,50,0),false ], [String.fromCharCode(116,95,56,51,95,102,117,108,102,105,108,108,101,100,0),true ]]);
          let downarrow0 = String.fromCharCode(112,95,53,51,95,98,105,100,105,114,0);
         selection5 = `${relatedj}`;
         moduleso = new Map([[`${moduleso.size}`, 2 + downarrow0.length]]);
         downarrow0 += `${downarrow0.length}`;
         downloadedf = (arrowrightwithtailC - relatedj) == 55;
      do {
         downloadedf = !downloadedf;
         if (downloadedf ? !downloadedf : downloadedf) {
            break;
         }
      } while ((downloadedf ? !downloadedf : downloadedf) && (downloadedf && selection5.length == 5));
          let loginK = new Map([[String.fromCharCode(109,97,99,95,50,95,49,49,0),871], [String.fromCharCode(109,121,113,114,95,121,95,50,50,0),707], [String.fromCharCode(99,114,108,105,115,115,117,101,114,95,116,95,51,49,0),758]]);
          let type_0zv = String.fromCharCode(100,117,114,105,110,103,95,106,95,54,53,0);
          let injurye = 2.0;
         selection5 += `${type_0zv.length}`;
         loginK[`${injurye}`] = parseInt(`${injurye}`) % (Math.max(loginK.size, 2));
         type_0zv = `${parseInt(`${injurye}`)}`;
          let libreactu = String.fromCharCode(115,117,98,115,101,116,95,48,95,55,0);
          let vignetteV = 2.0;
          let imagenetworkerrq = String.fromCharCode(119,97,108,108,97,112,101,114,115,95,105,95,52,55,0);
         arrowrightwithtailC += imagenetworkerrq.length + 1;
         libreactu = `${parseInt(`${vignetteV}`) >> (Math.min(Math.abs(3), 2))}`;
         vignetteV /= Math.max(libreactu.length + parseInt(`${vignetteV}`), 4);
         imagenetworkerrq += `${libreactu.length}`;
         relatedj += (parseInt(`${arrowrightwithtailC}`) * (downloadedf ? 3 : 5));
          let chinasameT = String.fromCharCode(119,105,110,100,111,119,101,100,95,55,95,50,52,0);
          let weatheri = 4.0;
          let scheduler8 = String.fromCharCode(116,114,97,110,95,48,95,55,57,0);
         arrowrightwithtailC *= scheduler8.length & 3;
         chinasameT += `${(chinasameT == String.fromCharCode(97,0) ? chinasameT.length : parseInt(`${weatheri}`))}`;
         weatheri /= Math.max(chinasameT.length, 3);
         scheduler8 = "2";
      while (1 == selection5.length) {
         arrowrightwithtailC *= relatedj | 2;
         break;
      }
         selection5 = `${relatedj}`;
      do {
         relatedj <<= Math.min(Math.abs(selection5.length % (Math.max(2, 8))), 3);
         if (relatedj == 33086) {
            break;
         }
      } while ((relatedj == 33086) && (relatedj >= 5));
       let nativeX = 3;
       let c_center6 = 3;
      subinH += `${1 * chatbotphotoX.size}`;
   }
   for (let b = 0; b < 2; b++) {
      logouserB = (chatbotphotoX.size - libavfilter5.length) <= 48;
   }

      this.hideControlAnimation();
       let arrowselectdown5 = 0.0;
      while ((arrowselectdown5 * arrowselectdown5) > 2.91 || 2.91 > (arrowselectdown5 * arrowselectdown5)) {
         arrowselectdown5 += 3 & parseInt(`${arrowselectdown5}`);
         break;
      }
      while (arrowselectdown5 > 4.37) {
         arrowselectdown5 -= parseInt(`${arrowselectdown5}`) | 2;
         break;
      }
         arrowselectdown5 *= parseInt(`${arrowselectdown5}`);
      libhermesM *= 1;
      subinH = `${parseInt(`${mbbannerE}`)}`;
   do {
      chatbotphotoX[settingd] = 3;
      if (4637810 == chatbotphotoX.size) {
         break;
      }
   } while (((chatbotphotoX.size + mbbannerE) <= 2.69 || (chatbotphotoX.size & 2) <= 1) && (4637810 == chatbotphotoX.size));
      settingd = "3";


      this.setState(state);
      libhermesM ^= 3 >> (Math.min(2, settingd.length));
       let iconeye5 = String.fromCharCode(112,116,114,115,95,56,95,52,51,0);
      do {
         iconeye5 += `${iconeye5.length - iconeye5.length}`;
         if (iconeye5.length == 1047877) {
            break;
         }
      } while ((iconeye5.length < 5 && iconeye5 == String.fromCharCode(112,0)) && (iconeye5.length == 1047877));
       let release_5G = 2;
         release_5G <<= Math.min(2, Math.abs(release_5G));
      libavfilter5 = [1];
       let viewerF = new Map([[String.fromCharCode(109,105,110,111,114,95,50,95,56,52,0),false ], [String.fromCharCode(121,95,50,48,95,97,117,100,105,98,105,108,105,116,121,0),false ]]);
       let liblogger7 = 2.0;
      for (let z = 0; z < 2; z++) {
         viewerF = new Map([[`${viewerF.size}`, viewerF.size << (Math.min(2, Math.abs(parseInt(`${liblogger7}`))))]]);
      }
          let modulesU = String.fromCharCode(118,95,50,54,95,117,110,100,111,116,116,101,100,0);
         viewerF = new Map([[`${liblogger7}`, modulesU.length]]);
          let iconpipshrinkb = String.fromCharCode(110,95,56,52,95,116,105,109,101,105,110,102,111,0);
          let verticall = 0.0;
         liblogger7 *= parseFloat(`${iconpipshrinkb.length - 1}`);
         iconpipshrinkb += "1";
         verticall -= parseFloat(`${parseInt(`${verticall}`) & 1}`);
      do {
          let videok = new Map([[String.fromCharCode(99,95,49,53,95,99,97,99,104,101,100,107,101,121,115,0),420], [String.fromCharCode(101,95,53,53,95,114,97,119,0),911], [String.fromCharCode(119,95,56,54,95,112,111,108,121,103,111,110,0),601]]);
          let descX = 5.0;
         liblogger7 += parseFloat(`${parseInt(`${descX}`)}`);
         videok[`${videok.size}`] = videok.size * videok.size;
         if (741907.0 == liblogger7) {
            break;
         }
      } while ((!Array.from(viewerF.keys()).includes(`${liblogger7}`)) && (741907.0 == liblogger7));
      while ((viewerF.size & 2) >= 4 || 4 >= (2 << (Math.min(3, Math.abs(viewerF.size))))) {
         viewerF[`${liblogger7}`] = 1 << (Math.min(5, Math.abs(viewerF.size)));
         break;
      }
      do {
         viewerF[`${liblogger7}`] = 1 ^ parseInt(`${liblogger7}`);
         if (viewerF.size == 2724061) {
            break;
         }
      } while ((viewerF.size == 2724061) && (viewerF[`${liblogger7}`] != null));
      subinH += `${3 * viewerF.size}`;
      goallogo5 += `${settingd.length}`;

    }
  }

   
  _toggleControls() {
       let delegate_tm = 1.0;
    let stationk = String.fromCharCode(117,116,103,111,105,110,103,95,110,95,50,55,0);
    let redirectT = 4.0;
    let yingX = String.fromCharCode(112,95,50,54,95,97,110,105,109,97,116,101,115,0);
    let whitetickN = String.fromCharCode(102,105,116,116,105,110,103,95,52,95,54,55,0);
    let sendT = 4.0;
    let mapping8 = [439, 125];
    let template_st3 = new Map([[String.fromCharCode(119,100,108,116,95,50,95,49,48,48,0),401], [String.fromCharCode(115,108,105,99,101,116,121,112,101,95,111,95,51,51,0),97]]);
    let iconsubssuccess1 = String.fromCharCode(99,111,110,116,114,111,108,101,114,115,95,117,95,51,55,0);
    let feedbackr = String.fromCharCode(106,95,52,55,95,118,108,99,111,100,101,99,0);
    let mbnativeadvanced7 = String.fromCharCode(102,95,50,56,95,101,109,117,108,97,116,111,114,0);
    let release_9b = String.fromCharCode(100,95,55,52,95,100,97,98,97,115,101,0);
    let basketballk = 1;
    let filledO = String.fromCharCode(100,101,115,99,112,114,105,112,116,105,111,110,95,100,95,56,57,0);
    let sheetO = [104, 922];
   do {
      redirectT *= (String.fromCharCode(55,0) == feedbackr ? feedbackr.length : template_st3.size);
      if (redirectT == 1204445.0) {
         break;
      }
   } while ((!Array.from(template_st3.keys()).includes(`${redirectT}`)) && (redirectT == 1204445.0));
      mapping8 = [stationk.length >> (Math.min(3, Math.abs(parseInt(`${redirectT}`))))];

    let state = this.state;
   for (let t = 0; t < 2; t++) {
       let footballfieldn = String.fromCharCode(112,97,99,107,97,103,101,115,95,122,95,53,53,0);
       let otherq = 4;
       let gemfile_ = false;
       let matchdetailbgx = String.fromCharCode(103,97,112,108,101,115,115,95,98,95,53,48,0);
       let statisticsactive7 = false;
         footballfieldn = `${(matchdetailbgx == String.fromCharCode(107,0) ? (statisticsactive7 ? 4 : 5) : matchdetailbgx.length)}`;
      for (let v = 0; v < 1; v++) {
         otherq %= Math.max(footballfieldn.length, 3);
      }
         statisticsactive7 = (42 >= (footballfieldn.length & (gemfile_ ? footballfieldn.length : 42)));
         gemfile_ = statisticsactive7 || 43 <= otherq;
         gemfile_ = statisticsactive7;
         matchdetailbgx = `${footballfieldn.length << (Math.min(2, Math.abs(otherq)))}`;
          let fullscreenminZ = 4.0;
          let bgvipsporte = [537, 42, 584];
         otherq /= Math.max(2, bgvipsporte.length * 1);
         fullscreenminZ += parseInt(`${fullscreenminZ}`);
         bgvipsporte = [1];
      if (statisticsactive7) {
         statisticsactive7 = footballfieldn == String.fromCharCode(68,0) && 98 <= otherq;
      }
      while (statisticsactive7) {
         otherq -= (matchdetailbgx == String.fromCharCode(122,0) ? matchdetailbgx.length : otherq);
         break;
      }
      for (let i = 0; i < 2; i++) {
         matchdetailbgx = `${(matchdetailbgx.length | (statisticsactive7 ? 2 : 4))}`;
      }
      if (1 < matchdetailbgx.length) {
          let whitebello = String.fromCharCode(101,108,108,105,112,116,105,99,95,109,95,53,52,0);
          let vietnamE = [407, 323];
         gemfile_ = 63 >= vietnamE.length && whitebello.length >= 63;
      }
      while (!gemfile_) {
          let subins = String.fromCharCode(111,103,103,108,101,95,100,95,56,51,0);
          let logout6 = String.fromCharCode(118,97,114,108,101,110,103,116,104,95,56,95,50,54,0);
          let iconsharefriendsN = [String.fromCharCode(97,95,49,48,48,95,114,101,109,111,118,101,0), String.fromCharCode(114,95,52,52,95,97,116,114,97,99,116,97,98,0), String.fromCharCode(97,118,115,115,95,99,95,53,0)];
          let dplush = String.fromCharCode(122,95,51,49,95,110,111,110,98,108,111,99,107,0);
          let pingj = 3.0;
         matchdetailbgx = `${logout6.length}`;
         subins = `${parseInt(`${pingj}`) * 2}`;
         logout6 += `${1 - iconsharefriendsN.length}`;
         iconsharefriendsN.push(3 + parseInt(`${pingj}`));
         dplush += `${1 - subins.length}`;
         break;
      }
          let reactnativejsb = String.fromCharCode(119,114,105,116,116,101,110,95,56,95,52,50,0);
          let interstitialN = new Map([[String.fromCharCode(115,117,109,120,95,105,95,56,49,0),String.fromCharCode(99,111,110,116,114,111,108,108,101,114,95,118,95,54,54,0)], [String.fromCharCode(108,95,50,49,95,105,110,115,101,114,116,0),String.fromCharCode(119,101,98,115,111,99,107,101,116,95,117,95,55,57,0)], [String.fromCharCode(98,97,103,95,55,95,57,50,0),String.fromCharCode(116,95,50,55,95,105,110,116,114,111,100,117,99,116,105,111,110,0)]]);
          let favicon8 = String.fromCharCode(118,95,50,49,95,101,120,99,104,97,110,103,101,115,0);
         matchdetailbgx += `${matchdetailbgx.length}`;
         reactnativejsb = `${1 * interstitialN.size}`;
         interstitialN = new Map([[`${interstitialN.size}`, 3]]);
         favicon8 = `${favicon8.length - interstitialN.size}`;
      for (let p = 0; p < 1; p++) {
          let notificationfilledE = new Map([[String.fromCharCode(105,110,100,105,99,97,116,101,100,95,113,95,52,51,0),753], [String.fromCharCode(109,111,110,116,104,115,95,106,95,52,0),767], [String.fromCharCode(100,95,53,57,95,110,97,109,101,116,111,105,110,100,101,120,0),407]]);
          let humidityb = 3.0;
         otherq >>= Math.min(Math.abs(footballfieldn.length >> (Math.min(Math.abs(3), 4))), 3);
         notificationfilledE = new Map([[`${notificationfilledE.size}`, parseInt(`${humidityb}`)]]);
         humidityb += parseFloat(`${parseInt(`${humidityb}`)}`);
      }
         matchdetailbgx = `${((gemfile_ ? 5 : 5))}`;
      mapping8 = [matchdetailbgx.length];
   }
       let fullscreenminc = 2;
       let animationsg = 1.0;
       let inactiveX = 3.0;
         fullscreenminc ^= fullscreenminc;
      do {
          let bangC = true;
          let containerN = String.fromCharCode(112,97,115,115,119,111,114,100,95,102,95,57,49,0);
         animationsg += parseFloat(`${parseInt(`${inactiveX}`)}`);
         bangC = containerN.endsWith(`${bangC}`);
         containerN += `${(1 | (bangC ? 4 : 5))}`;
         if (1765514.0 == animationsg) {
            break;
         }
      } while ((1765514.0 == animationsg) && (fullscreenminc < 3));
      yingX = `${yingX.length}`;

    state.showControls = !state.showControls;
   do {
       let iconbackwhiteG = String.fromCharCode(117,95,57,52,95,116,105,110,116,0);
       let taiwanv = 3.0;
       let scorepopsoundr = String.fromCharCode(120,95,49,55,95,118,97,110,99,0);
       let eactf = String.fromCharCode(115,121,110,99,119,111,114,100,115,95,98,95,49,53,0);
         scorepopsoundr += `${iconbackwhiteG.length}`;
      for (let x = 0; x < 3; x++) {
          let libfb9 = 4.0;
          let footballfield1 = [176, 322];
          let favoriteg = 5.0;
          let playlisto = String.fromCharCode(112,95,54,95,110,98,105,116,115,0);
         taiwanv *= parseFloat(`${eactf.length >> (Math.min(Math.abs(2), 5))}`);
         libfb9 /= Math.max(5, parseFloat(`${3 << (Math.min(2, footballfield1.length))}`));
         footballfield1.push(parseInt(`${favoriteg}`) >> (Math.min(4, Math.abs(3))));
         favoriteg *= playlisto.length;
         playlisto = "2";
      }
         eactf += `${(String.fromCharCode(120,0) == scorepopsoundr ? parseInt(`${taiwanv}`) : scorepopsoundr.length)}`;
         iconbackwhiteG = `${parseInt(`${taiwanv}`) & 2}`;
      do {
         eactf += `${parseInt(`${taiwanv}`) << (Math.min(eactf.length, 4))}`;
         if (String.fromCharCode(106,115,48,112,0) == eactf) {
            break;
         }
      } while ((iconbackwhiteG == String.fromCharCode(106,0)) && (String.fromCharCode(106,115,48,112,0) == eactf));
         scorepopsoundr = "1";
          let elementsr = 4;
          let policyQ = String.fromCharCode(121,95,56,51,95,109,105,108,105,111,110,115,0);
          let areaT = String.fromCharCode(109,117,108,116,105,112,108,101,120,95,50,95,56,50,0);
         iconbackwhiteG = `${elementsr << (Math.min(Math.abs(3), 4))}`;
         elementsr %= Math.max(1 / (Math.max(2, areaT.length)), 2);
         policyQ += `${policyQ.length >> (Math.min(Math.abs(1), 2))}`;
         areaT += `${policyQ.length ^ areaT.length}`;
      while (5 >= (parseInt(`${taiwanv}`) * iconbackwhiteG.length)) {
          let backwardF = String.fromCharCode(114,101,100,105,114,101,99,116,95,110,95,50,52,0);
          let footballfiledlayout3 = [591, 404];
          let moduleso = String.fromCharCode(116,95,51,51,95,115,107,105,112,105,110,116,114,97,0);
         taiwanv *= parseFloat(`${backwardF.length}`);
         backwardF += `${moduleso.length % (Math.max(3, 3))}`;
         footballfiledlayout3 = [2 | moduleso.length];
         break;
      }
      while (5.62 <= (parseFloat(`${iconbackwhiteG.length}`) - taiwanv)) {
         taiwanv -= parseFloat(`${2 >> (Math.min(3, iconbackwhiteG.length))}`);
         break;
      }
         scorepopsoundr += `${iconbackwhiteG.length}`;
         taiwanv *= parseFloat(`${iconbackwhiteG.length}`);
      while (2 >= iconbackwhiteG.length) {
          let homem = String.fromCharCode(98,114,101,97,107,111,117,116,95,109,95,56,57,0);
          let morew = new Map([[String.fromCharCode(108,105,115,116,105,110,103,95,105,95,49,48,48,0),547], [String.fromCharCode(113,95,57,57,95,115,116,111,114,121,98,111,97,114,100,0),137], [String.fromCharCode(114,111,117,112,95,110,95,56,50,0),436]]);
          let infol = 0.0;
          let schedulery = 5;
         iconbackwhiteG += `${parseInt(`${infol}`) >> (Math.min(Math.abs(3), 2))}`;
         homem = `${morew.size}`;
         morew = new Map([[`${morew.size}`, morew.size]]);
         infol *= parseFloat(`${schedulery}`);
         schedulery <<= Math.min(2, Math.abs((String.fromCharCode(99,0) == homem ? morew.size : homem.length)));
         break;
      }
      sendT /= Math.max(5, parseFloat(`${scorepopsoundr.length}`));
      if (sendT == 2505253.0) {
         break;
      }
   } while (((sendT + redirectT) > 4.75) && (sendT == 2505253.0));
   for (let f = 0; f < 3; f++) {
      mbnativeadvanced7 = `${stationk.length / 1}`;
   }


    if (state.showControls) {

   if (feedbackr == iconsubssuccess1) {
      iconsubssuccess1 += `${stationk.length}`;
   }
      yingX = `${2 ^ parseInt(`${delegate_tm}`)}`;
      this.showControlAnimation();
       let gifgoaln = String.fromCharCode(104,95,52,53,95,114,101,99,101,105,118,101,114,115,0);
       let largesoundt = new Map([[String.fromCharCode(117,110,115,104,105,102,116,95,122,95,55,57,0),720], [String.fromCharCode(115,101,99,111,110,100,97,114,121,95,105,95,56,54,0),581]]);
         largesoundt[gifgoaln] = 3 / (Math.max(4, gifgoaln.length));
      for (let k = 0; k < 3; k++) {
         largesoundt = new Map([[`${largesoundt.size}`, (gifgoaln == String.fromCharCode(75,0) ? gifgoaln.length : largesoundt.size)]]);
      }
         gifgoaln = `${(gifgoaln == String.fromCharCode(99,0) ? largesoundt.size : gifgoaln.length)}`;
      while (!gifgoaln.includes(`${largesoundt.size}`)) {
         largesoundt = new Map([[`${largesoundt.size}`, (gifgoaln == String.fromCharCode(87,0) ? largesoundt.size : gifgoaln.length)]]);
         break;
      }
      do {
         gifgoaln += `${3 ^ largesoundt.size}`;
         if (gifgoaln.length == 4851540) {
            break;
         }
      } while ((gifgoaln.length == largesoundt.size) && (gifgoaln.length == 4851540));
       let ajaxk = String.fromCharCode(119,95,56,51,95,115,116,117,102,102,0);
       let dataY = String.fromCharCode(113,95,50,52,95,101,120,112,111,115,117,114,101,0);
      feedbackr = `${yingX.length}`;
       let indexA = 4;
       let controlG = 4;
       let controlL = 2.0;
      while (2.39 < controlL) {
         controlG %= Math.max(parseInt(`${controlL}`) * 1, 3);
         break;
      }
         indexA += 3;
          let mapbufferg = 2.0;
         controlG -= parseInt(`${controlL}`);
         mapbufferg /= Math.max(5, parseFloat(`${parseInt(`${mapbufferg}`)}`));
         controlL -= parseFloat(`${controlG << (Math.min(Math.abs(parseInt(`${controlL}`)), 1))}`);
      do {
         controlL /= Math.max(2, parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${controlL}`)), 4))}`));
         if (controlL == 3338784.0) {
            break;
         }
      } while (((indexA * controlL) < 1.41) && (controlL == 3338784.0));
      for (let v = 0; v < 2; v++) {
         controlG |= controlG;
      }
      for (let k = 0; k < 2; k++) {
         indexA &= indexA;
      }
      for (let g = 0; g < 1; g++) {
         indexA -= controlG;
      }
      while (indexA < controlL) {
         indexA |= 1;
         break;
      }
      sendT /= Math.max(1, parseFloat(`${parseInt(`${redirectT}`)}`));

      this.setControlTimeout();
   if (5 == (3 ^ whitetickN.length) || 2.97 == (redirectT + whitetickN.length)) {
      redirectT += 3;
   }
   for (let j = 0; j < 3; j++) {
      whitetickN += `${(whitetickN == String.fromCharCode(65,0) ? parseInt(`${redirectT}`) : whitetickN.length)}`;
   }

      typeof this.events.onShowControls === 'function' &&
        this.events.onShowControls();
    } else {

      whitetickN = `${2 << (Math.min(3, mapping8.length))}`;
   do {
      sendT *= parseFloat(`${3 * stationk.length}`);
      if (2294633.0 == sendT) {
         break;
      }
   } while (((sendT - 1.71) > 1.47) && (2294633.0 == sendT));
      this.hideControlAnimation();
   for (let f = 0; f < 1; f++) {
       let penaltymatchiconU = String.fromCharCode(98,95,57,54,95,97,99,116,111,114,115,0);
       let z_count_ = [String.fromCharCode(100,111,119,110,115,116,114,101,97,109,95,107,95,54,51,0), String.fromCharCode(116,95,52,50,95,114,116,114,101,101,0)];
       let iconmegaphoneE = new Map([[String.fromCharCode(97,98,103,114,95,121,95,57,54,0),30], [String.fromCharCode(111,114,97,110,103,101,95,109,95,57,51,0),231]]);
      if (2 < (penaltymatchiconU.length - iconmegaphoneE.size) || (iconmegaphoneE.size - 2) < 2) {
          let clearP = 5;
          let handlert = [550, 481];
         iconmegaphoneE[`${clearP}`] = handlert.length ^ clearP;
      }
      while (Array.from(iconmegaphoneE.values()).includes(z_count_.length)) {
         iconmegaphoneE[`${z_count_.length}`] = z_count_.length - iconmegaphoneE.size;
         break;
      }
         penaltymatchiconU += `${iconmegaphoneE.size % (Math.max(penaltymatchiconU.length, 3))}`;
          let brightnessr = String.fromCharCode(104,95,53,48,95,118,97,97,99,97,108,99,117,108,97,116,105,111,110,0);
          let tooltipsm = 4.0;
          let zhengpianR = true;
         z_count_.push((penaltymatchiconU == String.fromCharCode(85,0) ? penaltymatchiconU.length : z_count_.length));
         brightnessr = `${brightnessr.length << (Math.min(4, Math.abs(parseInt(`${tooltipsm}`))))}`;
         tooltipsm += parseFloat(`${3}`);
         zhengpianR = !zhengpianR;
         penaltymatchiconU = `${1 & penaltymatchiconU.length}`;
      for (let g = 0; g < 1; g++) {
         penaltymatchiconU = "3";
      }
         z_count_ = [2 | penaltymatchiconU.length];
      do {
          let mbnativeE = String.fromCharCode(106,95,52,95,115,117,98,102,114,97,109,101,0);
          let s_playerL = new Map([[String.fromCharCode(110,95,54,51,95,115,116,97,116,105,111,110,97,114,121,0),false ], [String.fromCharCode(104,105,101,114,97,114,99,104,121,95,115,95,55,51,0),false ], [String.fromCharCode(99,111,109,112,101,110,115,97,116,101,95,107,95,51,53,0),true ]]);
          let mappingK = 1.0;
          let clubO = String.fromCharCode(111,114,100,101,114,95,119,95,56,52,0);
         iconmegaphoneE = new Map([[penaltymatchiconU, 2 / (Math.max(4, mbnativeE.length))]]);
         mbnativeE = `${parseInt(`${mappingK}`)}`;
         s_playerL[`${mappingK}`] = 3;
         clubO += `${2 - parseInt(`${mappingK}`)}`;
         if (2563019 == iconmegaphoneE.size) {
            break;
         }
      } while ((1 >= (3 * iconmegaphoneE.size) || (penaltymatchiconU.length * iconmegaphoneE.size) >= 3) && (2563019 == iconmegaphoneE.size));
      for (let p = 0; p < 1; p++) {
         penaltymatchiconU = `${iconmegaphoneE.size}`;
      }
      mbnativeadvanced7 = `${feedbackr.length & 3}`;
   }
      mbnativeadvanced7 = "2";

      this.clearControlTimeout();
   if ((5.57 - sendT) <= 3.3) {
      sendT -= parseFloat(`${1}`);
   }
      stationk += `${parseInt(`${redirectT}`) * parseInt(`${delegate_tm}`)}`;

      typeof this.events.onHideControls === 'function' &&
        this.events.onHideControls();
   do {
      stationk += `${2 & iconsubssuccess1.length}`;
      if (1162566 == stationk.length) {
         break;
      }
   } while ((2.44 > delegate_tm) && (1162566 == stationk.length));
       let nbatrophyA = String.fromCharCode(97,117,116,111,98,97,110,104,95,119,95,57,50,0);
       let shootp = true;
       let playv = 5;
      if (playv >= 5) {
          let search9 = String.fromCharCode(120,95,57,54,95,98,105,111,0);
          let submitO = 2.0;
          let jinit_g9v = String.fromCharCode(108,105,98,110,100,105,95,99,95,54,48,0);
          let huawei6 = true;
         shootp = nbatrophyA == search9;
         search9 += `${(1 % (Math.max(8, (huawei6 ? 1 : 3))))}`;
         submitO -= 1;
         jinit_g9v += `${1 ^ parseInt(`${submitO}`)}`;
         huawei6 = submitO <= 77.94 || !huawei6;
      }
      if (1 < nbatrophyA.length) {
         shootp = (((!shootp ? nbatrophyA.length : 37) % (Math.max(8, nbatrophyA.length))) <= 37);
      }
         playv /= Math.max(3, 3);
          let livenodatabgimg4 = [655, 396, 179];
         nbatrophyA += `${nbatrophyA.length + playv}`;
         livenodatabgimg4 = [livenodatabgimg4.length];
      while (3 > playv) {
         playv %= Math.max(4, playv);
         break;
      }
         playv *= 3 * playv;
         shootp = (((!shootp ? nbatrophyA.length : 21) + nbatrophyA.length) == 21);
      if (playv <= 5) {
         playv -= 3 - nbatrophyA.length;
      }
         nbatrophyA = `${nbatrophyA.length << (Math.min(Math.abs(3), 5))}`;
      iconsubssuccess1 = `${feedbackr.length}`;

    }

    this.setState(state);
   for (let z = 0; z < 1; z++) {
       let ruleso = 2.0;
       let imagewatchliveQ = 1;
       let qaaga = 1.0;
       let with_rs = [String.fromCharCode(121,117,121,116,111,121,118,95,57,95,49,52,0), String.fromCharCode(99,104,101,99,107,95,97,95,49,55,0), String.fromCharCode(113,95,50,54,95,101,120,99,105,116,97,116,105,111,110,0)];
       let turndownl = new Map([[String.fromCharCode(121,95,53,53,95,114,100,111,112,116,0),240], [String.fromCharCode(109,95,51,51,95,118,114,101,99,116,0),203], [String.fromCharCode(100,114,105,102,116,95,121,95,50,57,0),930]]);
         with_rs.push(3);
      if (!Array.from(turndownl.keys()).includes(`${with_rs.length}`)) {
          let inouttargetredm = new Map([[String.fromCharCode(115,112,111,116,108,105,103,104,116,95,50,95,56,51,0),true ], [String.fromCharCode(103,95,53,54,95,110,111,116,105,102,105,99,97,116,105,111,110,0),true ]]);
         with_rs.push(2);
         inouttargetredm = new Map([[`${inouttargetredm.size}`, inouttargetredm.size + 1]]);
      }
          let eactt = String.fromCharCode(122,95,56,56,95,115,99,104,117,110,99,107,0);
          let mbnativeQ = 4.0;
         with_rs.push(parseInt(`${mbnativeQ}`));
         eactt += `${eactt.length ^ eactt.length}`;
         mbnativeQ -= 3;
         qaaga += 3;
         ruleso -= with_rs.length;
      while (turndownl.size <= with_rs.length) {
         turndownl[`${qaaga}`] = turndownl.size << (Math.min(Math.abs(2), 4));
         break;
      }
      if ((2.40 / (Math.max(7, ruleso))) < 2.49) {
         imagewatchliveQ *= parseInt(`${ruleso}`);
      }
          let clockO = true;
          let usernameX = 1;
         ruleso += parseInt(`${ruleso}`);
         clockO = !clockO;
         usernameX &= 2;
          let matche = 2;
         with_rs.push(matche << (Math.min(with_rs.length, 5)));
      for (let p = 0; p < 2; p++) {
          let pauseo = String.fromCharCode(102,111,117,114,99,99,115,95,106,95,50,0);
          let quest2 = 0;
          let selecto = 0.0;
          let service_ = new Map([[String.fromCharCode(109,115,109,112,101,103,100,97,116,97,95,98,95,50,0),String.fromCharCode(119,95,50,56,95,98,97,99,107,103,114,111,117,110,100,115,0)], [String.fromCharCode(100,95,55,52,95,99,111,110,102,101,116,116,105,0),String.fromCharCode(117,95,55,50,95,109,112,108,97,109,101,0)]]);
         with_rs = [turndownl.size];
         pauseo = `${quest2 >> (Math.min(pauseo.length, 4))}`;
         quest2 &= service_.size % 3;
         selecto += pauseo.length;
         service_ = new Map([[`${quest2}`, 1 * parseInt(`${selecto}`)]]);
      }
         imagewatchliveQ *= imagewatchliveQ ^ 3;
      if (5 > (parseInt(`${ruleso}`) + with_rs.length)) {
         with_rs = [with_rs.length];
      }
       let lessC = new Map([[String.fromCharCode(109,97,103,105,99,95,114,95,51,57,0),314], [String.fromCharCode(112,95,55,57,95,109,117,116,101,100,0),745]]);
          let predictionbuttonz = [316, 378];
          let footballtrophyz = new Map([[String.fromCharCode(113,95,54,54,95,98,108,97,107,101,0),643], [String.fromCharCode(110,95,55,52,95,105,110,100,101,102,105,110,105,116,101,0),735]]);
         with_rs.push(2 * turndownl.size);
         predictionbuttonz.push(2 ^ footballtrophyz.size);
         footballtrophyz[`${predictionbuttonz.length}`] = 3;
      while (!with_rs.includes(ruleso)) {
          let rewind6 = String.fromCharCode(100,114,105,118,101,114,95,120,95,49,57,0);
          let iconschedulex = true;
         ruleso /= Math.max(5, imagewatchliveQ);
         rewind6 = `${((iconschedulex ? 5 : 1))}`;
         iconschedulex = rewind6.length < 86;
         break;
      }
      yingX += "3";
   }
   if (stationk.includes(`${mapping8.length}`)) {
      stationk += `${parseInt(`${delegate_tm}`)}`;
   }

  }

  /**
   * Toggle fullscreen changes resizeMode on
   * the <Video> component then updates the
   * isFullscreen state.
   */
  _toggleFullscreen() {
       let giftP = 2.0;
    let smallorangemanb = String.fromCharCode(118,95,52,56,95,116,114,97,110,115,112,111,114,116,0);
    let time_qzC = String.fromCharCode(100,95,53,54,95,99,111,110,115,116,113,112,0);
    let iconrightorangeS = new Map([[String.fromCharCode(99,117,114,116,97,105,110,115,95,120,95,57,51,0),552], [String.fromCharCode(115,117,98,109,111,100,101,108,95,110,95,56,55,0),917], [String.fromCharCode(121,95,53,48,95,102,115,105,122,101,0),226]]);
    let statisticsinactiveF = 5.0;
    let buildM = String.fromCharCode(115,117,98,106,95,116,95,49,51,0);
    let kuaishouC = 4;
    let iconeditK = 2.0;
    let cricketI = 5;
    let iconwatchnowY = String.fromCharCode(104,95,53,57,95,99,100,120,108,0);
    let m_lock_ = [139, 693, 13];
   for (let g = 0; g < 1; g++) {
      cricketI ^= 3 & smallorangemanb.length;
   }
   for (let d = 0; d < 3; d++) {
      iconrightorangeS[buildM] = iconrightorangeS.size;
   }

    let state = this.state;
      buildM += `${(smallorangemanb == String.fromCharCode(79,0) ? parseInt(`${statisticsinactiveF}`) : smallorangemanb.length)}`;
   for (let y = 0; y < 1; y++) {
      buildM = "3";
   }


    state.isFullscreen = !state.isFullscreen;
   while (iconrightorangeS.size < 1) {
      statisticsinactiveF /= Math.max(5, cricketI | smallorangemanb.length);
      break;
   }
      cricketI >>= Math.min(5, Math.abs(3 - kuaishouC));


    if (this.props.toggleResizeModeOnFullscreen) {
      state.resizeMode = state.isFullscreen === true ? 'cover' : 'contain';
      time_qzC = `${cricketI}`;
   do {
      iconwatchnowY += `${(String.fromCharCode(83,0) == time_qzC ? time_qzC.length : iconrightorangeS.size)}`;
      if (iconwatchnowY == String.fromCharCode(113,57,53,56,99,0)) {
         break;
      }
   } while (((iconwatchnowY.length << (Math.min(Math.abs(1), 4))) < 2 || (cricketI << (Math.min(Math.abs(1), 4))) < 5) && (iconwatchnowY == String.fromCharCode(113,57,53,56,99,0)));

    }

    if (state.isFullscreen) {

      cricketI *= buildM.length & parseInt(`${iconeditK}`);
   if (statisticsinactiveF == 1.7) {
       let iconnotificationneww = String.fromCharCode(102,105,110,100,95,100,95,56,49,0);
      for (let j = 0; j < 2; j++) {
         iconnotificationneww = `${(iconnotificationneww == String.fromCharCode(53,0) ? iconnotificationneww.length : iconnotificationneww.length)}`;
      }
         iconnotificationneww += `${iconnotificationneww.length ^ 2}`;
       let combined1 = 5.0;
       let chart6 = 4.0;
      statisticsinactiveF -= smallorangemanb.length + 2;
   }
      if (typeof this.events.onEnterFullscreen === 'function') {

   do {
      giftP *= buildM.length;
      if (giftP == 1786976.0) {
         break;
      }
   } while ((time_qzC.length < parseInt(`${giftP}`)) && (giftP == 1786976.0));
      cricketI /= Math.max(5, 3 | kuaishouC);
        this.events.onEnterFullscreen();
      } else {

   while (kuaishouC <= 4) {
       let entryi = new Map([[String.fromCharCode(109,95,51,54,95,104,117,101,115,0),246], [String.fromCharCode(98,95,52,57,95,101,110,113,117,101,117,101,100,0),808], [String.fromCharCode(115,99,97,110,110,105,110,103,95,53,95,54,57,0),894]]);
          let long_qU = String.fromCharCode(110,95,56,95,115,119,105,116,99,104,0);
         entryi[long_qU] = 1 >> (Math.min(5, Math.abs(entryi.size)));
      while (1 > (3 - entryi.size) && 3 > (entryi.size - 3)) {
         entryi[`${entryi.size}`] = entryi.size + entryi.size;
         break;
      }
       let n_lockW = String.fromCharCode(112,95,54,51,95,101,120,116,101,110,100,101,100,0);
      statisticsinactiveF -= 3;
      break;
   }
       let private_vk = 2.0;
       let eyeopenE = 4.0;
       let mbnativeadvancedJ = String.fromCharCode(116,101,120,105,100,101,112,95,53,95,52,50,0);
         eyeopenE += parseFloat(`${parseInt(`${eyeopenE}`) / 3}`);
      while (private_vk < 5.84) {
         mbnativeadvancedJ = "1";
         break;
      }
          let referrerr = String.fromCharCode(110,117,109,98,101,114,115,95,53,95,49,55,0);
          let sansh = 2;
          let iconeyec = new Map([[String.fromCharCode(107,95,55,54,95,112,105,120,102,109,116,0),String.fromCharCode(102,95,55,55,95,118,114,108,101,0)], [String.fromCharCode(115,116,114,112,116,105,109,101,95,53,95,50,0),String.fromCharCode(110,95,57,54,0)]]);
         private_vk /= Math.max(parseInt(`${eyeopenE}`), 5);
         referrerr += `${sansh}`;
         sansh /= Math.max(5, 3);
         iconeyec = new Map([[`${iconeyec.size}`, 3]]);
         eyeopenE -= parseFloat(`${parseInt(`${private_vk}`)}`);
      for (let i = 0; i < 2; i++) {
         mbnativeadvancedJ += `${2 ^ mbnativeadvancedJ.length}`;
      }
      while ((parseFloat(`${mbnativeadvancedJ.length}`) / (Math.max(1, eyeopenE))) < 3.57 || (3 + mbnativeadvancedJ.length) < 1) {
         eyeopenE += parseFloat(`${mbnativeadvancedJ.length}`);
         break;
      }
      if (2 <= mbnativeadvancedJ.length) {
          let collectionc = 5.0;
          let giftbuttonu = 2;
          let tooltipsy = [99, 865];
          let minimize8 = 3.0;
         mbnativeadvancedJ = `${tooltipsy.length / (Math.max(2, 5))}`;
         collectionc -= 1 << (Math.min(Math.abs(parseInt(`${collectionc}`)), 1));
         giftbuttonu >>= Math.min(Math.abs(giftbuttonu), 2);
         tooltipsy.push(parseInt(`${minimize8}`) - giftbuttonu);
         minimize8 += parseInt(`${collectionc}`);
      }
       let sharemodalv = [844, 488, 361];
       let dycreatorh = [339, 490];
      while ((dycreatorh.length - sharemodalv.length) >= 2 && (2 - dycreatorh.length) >= 4) {
          let tempnodataG = String.fromCharCode(100,105,109,109,105,110,103,95,98,95,53,0);
          let long_b4 = [368, 779];
          let brightnessX = false;
          let smallsoundq = [501, 377];
          let profile4 = String.fromCharCode(113,95,50,50,95,115,101,103,102,101,97,116,117,114,101,0);
         dycreatorh = [dycreatorh.length + 3];
         tempnodataG += `${((brightnessX ? 4 : 4) | long_b4.length)}`;
         long_b4.push((String.fromCharCode(111,0) == tempnodataG ? tempnodataG.length : long_b4.length));
         brightnessX = profile4.length >= long_b4.length;
         smallsoundq = [long_b4.length - 3];
         profile4 += `${tempnodataG.length + smallsoundq.length}`;
         break;
      }
      iconrightorangeS[`${iconwatchnowY}`] = 3 / (Math.max(6, iconrightorangeS.size));
        this.player.ref.presentFullscreenPlayer(true);
      }
    } else {

   while (parseInt(`${iconeditK}`) > iconwatchnowY.length) {
       let shareg = 3.0;
       let halffieldimageL = new Map([[String.fromCharCode(115,116,111,114,97,103,101,115,95,48,95,57,55,0),698], [String.fromCharCode(110,111,110,110,117,108,108,95,110,95,54,48,0),705]]);
          let castU = String.fromCharCode(101,110,99,108,111,115,105,110,103,95,102,95,50,49,0);
         shareg += 2;
         castU += `${(String.fromCharCode(119,0) == castU ? castU.length : castU.length)}`;
         shareg += parseInt(`${shareg}`);
      for (let t = 0; t < 3; t++) {
         halffieldimageL = new Map([[`${halffieldimageL.size}`, parseInt(`${shareg}`) + 1]]);
      }
          let private_kW = 3.0;
         shareg *= parseInt(`${private_kW}`) % 3;
      if (Array.from(halffieldimageL.keys()).includes(`${shareg}`)) {
          let smalls = String.fromCharCode(122,95,56,53,95,97,99,116,105,118,97,116,111,114,0);
         shareg += halffieldimageL.size;
         smalls = `${2 * smalls.length}`;
      }
      for (let n = 0; n < 3; n++) {
         shareg /= Math.max(halffieldimageL.size + 1, 1);
      }
      iconeditK *= parseFloat(`${1 - iconrightorangeS.size}`);
      break;
   }
   while (1 >= (1 | smallorangemanb.length)) {
      iconeditK /= Math.max(1, parseFloat(`${kuaishouC}`));
      break;
   }
      if (typeof this.events.onExitFullscreen === 'function') {

   if (kuaishouC < 2) {
      kuaishouC *= parseInt(`${statisticsinactiveF}`) ^ 1;
   }
       let eighteenR = [529, 90, 904];
       let controlsO = String.fromCharCode(114,101,112,101,97,116,101,114,95,122,95,49,51,0);
       let internetn = [317, 573, 698];
      while ((1 << (Math.min(3, internetn.length))) < 4 || 1 < (1 << (Math.min(4, internetn.length)))) {
         internetn = [controlsO.length << (Math.min(3, internetn.length))];
         break;
      }
      do {
         controlsO += `${3 * controlsO.length}`;
         if (controlsO == String.fromCharCode(108,114,52,57,48,0)) {
            break;
         }
      } while ((1 <= (4 / (Math.max(3, controlsO.length)))) && (controlsO == String.fromCharCode(108,114,52,57,48,0)));
      for (let j = 0; j < 3; j++) {
         controlsO = `${controlsO.length | 1}`;
      }
         internetn.push(eighteenR.length);
         controlsO += `${controlsO.length & eighteenR.length}`;
          let iconpipshrinkS = String.fromCharCode(115,101,110,115,111,114,95,113,95,54,56,0);
         eighteenR = [internetn.length % 2];
         iconpipshrinkS += `${(String.fromCharCode(107,0) == iconpipshrinkS ? iconpipshrinkS.length : iconpipshrinkS.length)}`;
       let defaultbasketballbgn = 3;
       let greyarrowup_ = 5;
          let kuaishouB = 4;
          let libcxxcomponentsH = String.fromCharCode(104,100,110,111,100,101,95,116,95,51,56,0);
          let expand6 = 2;
         defaultbasketballbgn += controlsO.length / 2;
         kuaishouB <<= Math.min(4, Math.abs(2));
         libcxxcomponentsH = "1";
         expand6 >>= Math.min(2, Math.abs(libcxxcomponentsH.length * kuaishouB));
         eighteenR.push(eighteenR.length);
      giftP *= parseInt(`${statisticsinactiveF}`);
        this.events.onExitFullscreen();
      } else {

   do {
      buildM = `${2 & iconwatchnowY.length}`;
      if (3026355 == buildM.length) {
         break;
      }
   } while ((3026355 == buildM.length) && ((1 & buildM.length) >= 5 || (1 & buildM.length) >= 2));
      buildM = `${1 & parseInt(`${statisticsinactiveF}`)}`;
        this.player.ref.presentFullscreenPlayer(false);
   do {
       let overu = 1;
       let catagoryL = 5;
       let colorsw = String.fromCharCode(111,95,52,50,0);
      if ((1 * catagoryL) > 4) {
         catagoryL |= 2;
      }
      while (catagoryL >= overu) {
          let hookU = 5.0;
         overu += 3 << (Math.min(Math.abs(overu), 4));
         hookU *= parseFloat(`${parseInt(`${hookU}`) - 1}`);
         break;
      }
      if ((colorsw.length << (Math.min(Math.abs(5), 1))) < 1 && (5 << (Math.min(1, colorsw.length))) < 1) {
          let audienceR = true;
          let libreanimatedX = 0.0;
          let modeI = new Map([[String.fromCharCode(97,95,51,49,95,109,117,108,116,105,112,108,101,114,0),349], [String.fromCharCode(114,101,115,101,114,118,101,95,121,95,55,49,0),711]]);
         colorsw += `${(colorsw == String.fromCharCode(66,0) ? (audienceR ? 1 : 3) : colorsw.length)}`;
         audienceR = modeI.size == 6;
         libreanimatedX += parseFloat(`${2}`);
         modeI = new Map([[`${modeI.size}`, modeI.size % 1]]);
      }
      do {
          let expiredU = String.fromCharCode(106,95,57,50,95,116,104,101,0);
          let hookQ = String.fromCharCode(113,95,56,51,95,98,97,110,100,119,105,100,116,104,0);
         overu &= overu - expiredU.length;
         expiredU += `${hookQ.length << (Math.min(Math.abs(1), 4))}`;
         hookQ = `${hookQ.length & 3}`;
         if (3278729 == overu) {
            break;
         }
      } while ((3278729 == overu) && (2 >= overu));
      while ((2 - catagoryL) < 1 && 2 < (2 - colorsw.length)) {
         colorsw += `${catagoryL - overu}`;
         break;
      }
      for (let d = 0; d < 2; d++) {
         catagoryL &= (colorsw == String.fromCharCode(75,0) ? catagoryL : colorsw.length);
      }
      for (let v = 0; v < 2; v++) {
         colorsw = `${catagoryL << (Math.min(Math.abs(overu), 5))}`;
      }
          let basketballhometeamE = String.fromCharCode(112,95,55,95,102,114,97,103,109,101,110,116,115,0);
          let reactL = 2.0;
         catagoryL <<= Math.min(4, Math.abs(overu));
         basketballhometeamE += "2";
         reactL *= (String.fromCharCode(67,0) == basketballhometeamE ? basketballhometeamE.length : parseInt(`${reactL}`));
       let graphicsF = 0.0;
      buildM += `${catagoryL % 1}`;
      if (String.fromCharCode(115,54,98,113,107,0) == buildM) {
         break;
      }
   } while ((String.fromCharCode(115,54,98,113,107,0) == buildM) && (!buildM.endsWith(`${iconeditK}`)));
      buildM += `${cricketI * 3}`;

      }
    }

    this.setState(state);
       let mountingH = String.fromCharCode(115,116,114,105,100,101,95,53,95,55,53,0);
       let paginationy = 4.0;
       let const_87 = String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,95,52,95,52,57,0);
       let lightx = String.fromCharCode(116,114,105,109,109,101,100,95,98,95,54,50,0);
         mountingH = `${parseInt(`${paginationy}`)}`;
       let statisticsw = String.fromCharCode(120,95,56,56,95,115,117,115,112,101,110,100,0);
       let pauseC = 2.0;
       let dialog8 = String.fromCharCode(98,95,54,55,95,100,98,108,105,110,116,0);
       let gcopy_7hF = String.fromCharCode(116,101,115,116,110,101,116,115,95,114,95,53,55,0);
          let imagewatchlivej = String.fromCharCode(115,119,105,102,116,99,95,104,95,54,57,0);
         dialog8 += `${3 - parseInt(`${paginationy}`)}`;
         imagewatchlivej += `${imagewatchlivej.length}`;
      cricketI += iconrightorangeS.size >> (Math.min(4, Math.abs(parseInt(`${statisticsinactiveF}`))));
      smallorangemanb = `${time_qzC.length}`;

  }

  /**
   * Toggle playing state on <Video> component
   */
  _togglePlayPause() {
       let libfabricjniI = String.fromCharCode(115,101,109,97,110,116,105,99,95,101,95,54,49,0);
    let dependenciesw = String.fromCharCode(111,95,56,50,95,101,120,112,108,105,99,105,116,101,108,121,0);
    let pluse = 4.0;
    let commente = true;
    let greyticko = String.fromCharCode(105,110,100,101,118,115,95,49,95,54,54,0);
    let borderlessi = String.fromCharCode(122,95,50,49,95,101,118,112,111,114,116,0);
    let internetj = [270, 142];
    let libfbR = [646, 830];
    let kickw = new Map([[String.fromCharCode(102,95,54,52,95,116,114,105,97,110,103,108,101,115,0),47], [String.fromCharCode(119,95,56,50,95,100,105,102,102,101,114,0),453], [String.fromCharCode(105,112,108,105,109,97,103,101,95,51,95,52,51,0),754]]);
    let canvasC = 5;
    let libswscale7 = [883, 816];
   for (let s = 0; s < 2; s++) {
      libfabricjniI += `${parseInt(`${pluse}`) + 2}`;
   }
       let iconrefresh5 = new Map([[String.fromCharCode(112,97,115,115,98,95,53,95,56,49,0),921], [String.fromCharCode(113,95,51,48,95,100,105,116,104,101,114,0),956]]);
       let hejiz = String.fromCharCode(115,95,56,55,95,99,111,110,115,117,109,101,114,0);
      while (4 == iconrefresh5.size) {
         hejiz = `${hejiz.length * 3}`;
         break;
      }
       let predictionlossL = 4;
      for (let x = 0; x < 1; x++) {
         hejiz += `${(String.fromCharCode(102,0) == hejiz ? hejiz.length : predictionlossL)}`;
      }
          let eighteenR = 0.0;
          let hover_ = String.fromCharCode(105,95,55,48,95,110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,0);
         hejiz += `${(hover_ == String.fromCharCode(52,0) ? hover_.length : predictionlossL)}`;
         eighteenR += parseFloat(`${2}`);
       let inouttargetyellowj = new Map([[String.fromCharCode(103,95,49,48,95,109,97,100,100,0),894], [String.fromCharCode(109,95,51,56,0),906], [String.fromCharCode(109,118,115,97,100,95,105,95,56,0),662]]);
      while (hejiz.length <= 3) {
          let suboutf = new Map([[String.fromCharCode(119,95,51,50,95,114,110,103,0),133], [String.fromCharCode(115,99,97,108,105,110,103,95,107,95,52,57,0),410]]);
          let zhubos = String.fromCharCode(118,95,55,49,95,97,100,106,97,99,101,110,116,0);
         hejiz += `${hejiz.length / (Math.max(1, 10))}`;
         suboutf[zhubos] = 2 - suboutf.size;
         zhubos += `${(String.fromCharCode(72,0) == zhubos ? suboutf.size : zhubos.length)}`;
         break;
      }
      dependenciesw = `${parseInt(`${pluse}`) % 3}`;
   for (let t = 0; t < 1; t++) {
      libfbR.push(internetj.length ^ parseInt(`${pluse}`));
   }

    let state = this.state;
       let baselineD = 1;
       let detailsA = new Map([[String.fromCharCode(115,95,52,49,95,112,97,99,107,101,116,112,101,101,107,0),713], [String.fromCharCode(105,95,57,55,95,99,109,105,111,0),375], [String.fromCharCode(115,116,115,99,95,98,95,54,53,0),773]]);
       let refreshw = String.fromCharCode(111,114,103,95,55,95,56,49,0);
         detailsA = new Map([[`${detailsA.size}`, detailsA.size]]);
      for (let c = 0; c < 1; c++) {
         baselineD |= detailsA.size + refreshw.length;
      }
      do {
         refreshw += `${refreshw.length}`;
         if (refreshw == String.fromCharCode(51,52,50,52,121,115,106,110,114,0)) {
            break;
         }
      } while ((refreshw == String.fromCharCode(51,52,50,52,121,115,106,110,114,0)) && (2 < (baselineD & refreshw.length) && 2 < (2 & refreshw.length)));
      for (let q = 0; q < 1; q++) {
          let libglogf = String.fromCharCode(120,95,53,50,0);
         baselineD /= Math.max(4, 3);
         libglogf += `${libglogf.length & 3}`;
      }
         refreshw += `${(String.fromCharCode(53,0) == refreshw ? refreshw.length : baselineD)}`;
         baselineD %= Math.max(detailsA.size % (Math.max(2, 3)), 3);
         refreshw = `${detailsA.size}`;
      do {
          let mbridget = 4.0;
          let assistn = 1.0;
          let splashS = new Map([[String.fromCharCode(97,95,54,57,95,114,101,118,101,114,98,0),false ], [String.fromCharCode(114,101,118,101,114,98,95,54,95,50,56,0),false ]]);
         detailsA[`${assistn}`] = parseInt(`${assistn}`) + parseInt(`${mbridget}`);
         mbridget /= Math.max(splashS.size % (Math.max(2, 5)), 5);
         if (2715437 == detailsA.size) {
            break;
         }
      } while ((2715437 == detailsA.size) && (4 > baselineD));
      while ((detailsA.size ^ refreshw.length) >= 5 && (refreshw.length ^ 5) >= 1) {
         detailsA = new Map([[`${detailsA.size}`, 2 | refreshw.length]]);
         break;
      }
      greyticko += `${detailsA.size - borderlessi.length}`;
      libfbR = [libfabricjniI.length | 2];
   while (3 < borderlessi.length) {
       let clockx = 1;
       let defaultfootballbgn = String.fromCharCode(119,95,56,95,119,111,114,107,97,114,111,117,110,100,0);
       let y_managerL = false;
         defaultfootballbgn += `${clockx}`;
      for (let p = 0; p < 2; p++) {
         y_managerL = !y_managerL && defaultfootballbgn.length <= 53;
      }
      if (!y_managerL) {
         defaultfootballbgn += `${(String.fromCharCode(114,0) == defaultfootballbgn ? defaultfootballbgn.length : clockx)}`;
      }
         defaultfootballbgn = "2";
       let casting7 = false;
         clockx %= Math.max(((y_managerL ? 4 : 2)), 4);
         casting7 = defaultfootballbgn.length < 10 && y_managerL;
       let defaultplayerimgp = String.fromCharCode(99,97,110,110,111,116,95,99,95,49,56,0);
       let shareblacke = String.fromCharCode(109,95,52,48,95,114,101,109,111,118,101,0);
      while (casting7 || !y_managerL) {
         y_managerL = !y_managerL;
         break;
      }
      internetj.push(2 | borderlessi.length);
      break;
   }

    state.paused = !state.paused;
      dependenciesw += `${libfabricjniI.length}`;
   for (let b = 0; b < 3; b++) {
       let expandN = true;
       let imagemanagerS = new Map([[String.fromCharCode(111,95,50,54,95,116,99,109,105,0),27], [String.fromCharCode(99,95,49,53,95,112,108,117,115,0),691]]);
       let eighteen7 = String.fromCharCode(97,117,116,111,102,105,120,95,100,95,54,50,0);
         eighteen7 += `${eighteen7.length}`;
      if (!expandN) {
         imagemanagerS[`${expandN}`] = imagemanagerS.size;
      }
          let confirmations = 0.0;
          let mimoN = 4;
         eighteen7 = `${1 << (Math.min(1, Math.abs(imagemanagerS.size)))}`;
         confirmations *= 1;
         mimoN %= Math.max(mimoN, 4);
         expandN = imagemanagerS.size >= 79;
      if (!expandN) {
         eighteen7 = `${imagemanagerS.size}`;
      }
         eighteen7 = `${2 >> (Math.min(5, Math.abs(imagemanagerS.size)))}`;
      while (expandN) {
         expandN = eighteen7.startsWith(`${expandN}`);
         break;
      }
         imagemanagerS[eighteen7] = imagemanagerS.size;
         eighteen7 = `${eighteen7.length}`;
      pluse -= (borderlessi.length & (commente ? 4 : 5));
   }
      commente = pluse <= 14.42;


    if (state.paused) {

       let arrowrightwithtaile = 1.0;
       let imagenomoredataT = 1;
      while (2.53 <= arrowrightwithtaile) {
         arrowrightwithtaile -= imagenomoredataT;
         break;
      }
      while ((imagenomoredataT * arrowrightwithtaile) <= 5.90) {
          let greytickE = 5.0;
          let ccdfbdabcabbbedbQ = false;
          let yellowvideoliveR = [132, 4, 137];
         imagenomoredataT >>= Math.min(Math.abs(imagenomoredataT / (Math.max(parseInt(`${greytickE}`), 8))), 4);
         greytickE -= yellowvideoliveR.length & 2;
         ccdfbdabcabbbedbQ = !ccdfbdabcabbbedbQ;
         yellowvideoliveR = [((ccdfbdabcabbbedbQ ? 3 : 3) | yellowvideoliveR.length)];
         break;
      }
      while (arrowrightwithtaile >= imagenomoredataT) {
         imagenomoredataT *= imagenomoredataT;
         break;
      }
       let hoverW = String.fromCharCode(115,104,105,102,116,115,95,118,95,51,49,0);
      for (let i = 0; i < 1; i++) {
         hoverW += `${hoverW.length ^ parseInt(`${arrowrightwithtaile}`)}`;
      }
         arrowrightwithtaile -= (String.fromCharCode(77,0) == hoverW ? imagenomoredataT : hoverW.length);
      internetj.push(libfabricjniI.length >> (Math.min(Math.abs(1), 5)));
      pluse *= 3 & borderlessi.length;
       let floatinge = String.fromCharCode(107,95,54,52,95,115,104,97,108,108,111,119,0);
       let gradlewe = String.fromCharCode(115,95,55,48,95,109,105,110,115,0);
         floatinge = `${floatinge.length}`;
          let policyh = 1.0;
          let awayiconG = 3;
         floatinge += `${gradlewe.length}`;
         policyh /= Math.max(2, awayiconG);
         awayiconG += parseInt(`${policyh}`) % 3;
          let exampleimageP = false;
          let chartg = String.fromCharCode(120,95,50,53,95,115,121,110,99,112,111,105,110,116,0);
          let type_4vR = String.fromCharCode(107,95,53,95,115,104,111,117,121,97,99,104,111,0);
         gradlewe += "2";
         exampleimageP = chartg == String.fromCharCode(52,0);
         chartg = `${type_4vR.length}`;
         type_4vR = `${chartg.length}`;
          let vipsportv = false;
          let clubv = String.fromCharCode(112,95,56,51,95,97,99,108,114,0);
         gradlewe += `${((vipsportv ? 4 : 2))}`;
         vipsportv = clubv.length == clubv.length;
         floatinge = `${floatinge.length}`;
       let chartE = String.fromCharCode(97,110,105,109,97,116,101,115,95,116,95,53,54,0);
      commente = 50 > libfbR.length && kickw.size > 50;
      typeof this.events.onPause === 'function' && this.events.onPause();
    } else {

   do {
       let megaphoneP = String.fromCharCode(118,115,110,112,114,105,110,116,102,95,53,95,55,0);
       let whitebellY = String.fromCharCode(105,110,108,105,103,104,116,95,51,95,55,49,0);
      do {
         megaphoneP = `${megaphoneP.length % 2}`;
         if (megaphoneP.length == 4288099) {
            break;
         }
      } while ((megaphoneP.length == 4288099) && (megaphoneP.endsWith(whitebellY)));
          let gemfile6 = new Map([[String.fromCharCode(100,101,99,105,109,97,116,101,95,122,95,57,0),693], [String.fromCharCode(119,105,110,100,111,119,105,110,103,95,122,95,57,48,0),109], [String.fromCharCode(101,110,116,101,114,105,110,103,95,104,95,50,53,0),135]]);
          let iconnointernetr = 1.0;
          let mintegralT = [223, 229];
         whitebellY = `${(String.fromCharCode(85,0) == megaphoneP ? whitebellY.length : megaphoneP.length)}`;
         gemfile6[`${iconnointernetr}`] = 2 * mintegralT.length;
         iconnointernetr -= gemfile6.size;
         mintegralT = [gemfile6.size];
         megaphoneP = `${whitebellY.length / (Math.max(2, 5))}`;
      if (megaphoneP.endsWith(whitebellY)) {
         whitebellY = `${(megaphoneP == String.fromCharCode(68,0) ? megaphoneP.length : whitebellY.length)}`;
      }
      for (let h = 0; h < 2; h++) {
         whitebellY += "1";
      }
      do {
          let expandr = [String.fromCharCode(101,95,55,54,95,116,101,120,101,108,0), String.fromCharCode(97,95,48,95,115,117,98,115,101,113,117,101,110,99,101,0), String.fromCharCode(97,95,55,55,95,115,116,97,98,108,101,0)];
          let dycreator3 = 2.0;
          let arrowselectdown9 = [853, 288];
         whitebellY = `${parseInt(`${dycreator3}`)}`;
         expandr = [3];
         dycreator3 -= parseFloat(`${2 - expandr.length}`);
         arrowselectdown9 = [2];
         if (2308684 == whitebellY.length) {
            break;
         }
      } while ((megaphoneP.length < 4) && (2308684 == whitebellY.length));
      borderlessi = `${((commente ? 1 : 3) << (Math.min(Math.abs(1), 5)))}`;
      if (4303270 == borderlessi.length) {
         break;
      }
   } while ((4303270 == borderlessi.length) && (borderlessi.length > libfbR.length));
      libfbR = [2];
       let goallogoY = 0;
       let forwardv = [443, 214];
       let injury6 = 2;
      if (3 == (4 + forwardv.length) || (forwardv.length + 4) == 5) {
         forwardv.push(2 - goallogoY);
      }
         forwardv.push(3 & goallogoY);
       let baiduI = new Map([[String.fromCharCode(108,105,102,101,99,121,99,108,101,95,115,95,49,57,0),874], [String.fromCharCode(119,95,52,52,95,109,101,100,105,97,0),804], [String.fromCharCode(113,95,54,55,95,99,99,105,116,116,0),538]]);
       let subbasketballplayerg = new Map([[String.fromCharCode(109,101,109,98,101,114,115,95,99,95,54,54,0),759], [String.fromCharCode(115,116,101,108,108,97,114,95,100,95,49,49,0),458]]);
      do {
          let libavformatZ = 0.0;
          let updatesg = String.fromCharCode(99,104,101,99,107,115,116,114,105,100,101,95,100,95,49,52,0);
          let iconarrowrightorange9 = new Map([[String.fromCharCode(100,105,109,101,110,115,95,98,95,49,56,0),272], [String.fromCharCode(115,95,52,95,102,114,97,109,101,110,117,109,0),717], [String.fromCharCode(108,111,99,97,108,101,95,102,95,53,57,0),672]]);
         baiduI = new Map([[`${baiduI.size}`, 3 << (Math.min(2, Math.abs(baiduI.size)))]]);
         libavformatZ += parseFloat(`${parseInt(`${libavformatZ}`) - iconarrowrightorange9.size}`);
         updatesg += `${iconarrowrightorange9.size}`;
         if (648574 == baiduI.size) {
            break;
         }
      } while ((1 <= (baiduI.size / 3)) && (648574 == baiduI.size));
      while (!Array.from(baiduI.values()).includes(goallogoY)) {
          let shrinkQ = 2.0;
          let gpayq = 2;
          let iconnotificationnewu = 1;
          let winit_zdf = true;
         baiduI = new Map([[`${forwardv.length}`, parseInt(`${shrinkQ}`)]]);
         shrinkQ *= iconnotificationnewu;
         gpayq -= 2;
         iconnotificationnewu *= (iconnotificationnewu / (Math.max(10, (winit_zdf ? 2 : 5))));
         winit_zdf = 15 >= gpayq;
         break;
      }
      while (1 < (subbasketballplayerg.size ^ 1) || 5 < (1 ^ forwardv.length)) {
         forwardv.push(1);
         break;
      }
      do {
          let homeiconJ = 0.0;
          let inouttargetredM = String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,95,101,95,49,50,0);
         goallogoY >>= Math.min(2, Math.abs(inouttargetredM.length >> (Math.min(2, Math.abs(baiduI.size)))));
         homeiconJ /= Math.max(4, parseFloat(`${2 ^ parseInt(`${homeiconJ}`)}`));
         inouttargetredM += `${parseInt(`${homeiconJ}`)}`;
         if (goallogoY == 541011) {
            break;
         }
      } while ((goallogoY == 541011) && ((1 % (Math.max(1, goallogoY))) < 1));
      do {
          let foreground6 = String.fromCharCode(102,95,57,57,95,100,101,99,111,114,97,116,111,114,115,0);
          let iconnotificationnew9 = String.fromCharCode(98,95,57,57,95,101,105,112,118,0);
          let episodesQ = false;
          let defaultprofilepicl = String.fromCharCode(115,95,54,95,98,114,105,100,103,101,100,0);
         forwardv = [3];
         foreground6 = `${(defaultprofilepicl == String.fromCharCode(114,0) ? defaultprofilepicl.length : (episodesQ ? 4 : 4))}`;
         iconnotificationnew9 = `${foreground6.length >> (Math.min(Math.abs(3), 4))}`;
         if (forwardv.length == 3068330) {
            break;
         }
      } while ((3 <= (subbasketballplayerg.size % 5)) && (forwardv.length == 3068330));
      for (let z = 0; z < 3; z++) {
          let baiduadss = 0.0;
          let cornerkickc = true;
          let nendh = 3.0;
          let auto_c_M = [401, 580];
          let mbridgev = 0;
         baiduI[`${cornerkickc}`] = 3;
         baiduadss += parseFloat(`${1}`);
         nendh /= Math.max(parseFloat(`${parseInt(`${baiduadss}`) << (Math.min(1, Math.abs(1)))}`), 1);
         auto_c_M.push(mbridgev - auto_c_M.length);
         mbridgev &= parseInt(`${nendh}`) - parseInt(`${baiduadss}`);
      }
      commente = libfbR.includes(injury6);
      typeof this.events.onPlay === 'function' &&
        this.events.onPlay(this.state.newsVideoRef);
   do {
      dependenciesw += `${(greyticko == String.fromCharCode(114,0) ? greyticko.length : (commente ? 1 : 4))}`;
      if (dependenciesw == String.fromCharCode(50,54,121,122,122,51,105,118,114,100,0)) {
         break;
      }
   } while ((dependenciesw == String.fromCharCode(50,54,121,122,122,51,105,118,114,100,0)) && (borderlessi == dependenciesw));
       let iconbellr = String.fromCharCode(109,117,116,101,95,57,95,52,52,0);
       let membershipu = [String.fromCharCode(110,111,116,105,99,101,95,97,95,51,55,0), String.fromCharCode(115,95,52,57,95,116,114,105,97,110,103,108,101,0)];
       let imagemanagerk = String.fromCharCode(114,97,99,105,110,103,95,99,95,56,55,0);
      do {
         membershipu.push((iconbellr == String.fromCharCode(78,0) ? iconbellr.length : membershipu.length));
         if (2642034 == membershipu.length) {
            break;
         }
      } while ((2 <= (iconbellr.length * membershipu.length) || 2 <= (iconbellr.length * membershipu.length)) && (2642034 == membershipu.length));
      do {
         imagemanagerk += `${imagemanagerk.length}`;
         if (4323345 == imagemanagerk.length) {
            break;
         }
      } while ((4323345 == imagemanagerk.length) && (!imagemanagerk.startsWith(`${iconbellr.length}`)));
         imagemanagerk = `${iconbellr.length}`;
       let relatedr = String.fromCharCode(113,95,54,52,95,112,114,102,0);
         imagemanagerk = `${membershipu.length * iconbellr.length}`;
       let iconchatsendB = 0.0;
       let currenta = 2.0;
      do {
         relatedr = `${membershipu.length}`;
         if (893954 == relatedr.length) {
            break;
         }
      } while ((iconbellr.length > relatedr.length) && (893954 == relatedr.length));
         relatedr += `${1 - parseInt(`${iconchatsendB}`)}`;
      for (let k = 0; k < 1; k++) {
         iconchatsendB -= 1 + imagemanagerk.length;
      }
      dependenciesw += `${iconbellr.length}`;
   if ((5 | kickw.size) < 2 && 5 < (kickw.size | borderlessi.length)) {
       let long_zbz = [601, 303];
       let championw = String.fromCharCode(119,97,118,114,101,97,100,101,114,95,110,95,54,56,0);
       let bings = 4.0;
       let inouttargetyellow5 = String.fromCharCode(112,114,101,100,101,102,105,110,101,100,95,99,95,53,0);
         bings *= parseFloat(`${1 / (Math.max(5, long_zbz.length))}`);
      do {
         bings -= parseFloat(`${inouttargetyellow5.length >> (Math.min(Math.abs(3), 3))}`);
         if (bings == 3139295.0) {
            break;
         }
      } while (((championw.length << (Math.min(Math.abs(5), 1))) <= 5) && (bings == 3139295.0));
         championw = `${(championw == String.fromCharCode(108,0) ? parseInt(`${bings}`) : championw.length)}`;
         bings *= parseFloat(`${3}`);
      for (let n = 0; n < 2; n++) {
         long_zbz.push(inouttargetyellow5.length ^ championw.length);
      }
       let foregroundy = 2;
       let qnewsc = 3;
       let icondownimgl = true;
         qnewsc /= Math.max(4, 3);
         bings += parseFloat(`${foregroundy % (Math.max(qnewsc, 6))}`);
      for (let h = 0; h < 1; h++) {
         foregroundy <<= Math.min(Math.abs(3), 1);
      }
       let whatsappA = 2.0;
       let alerty = 0.0;
      if ((parseInt(`${alerty}`) + qnewsc) <= 3 && 5.57 <= (qnewsc + alerty)) {
         qnewsc -= (inouttargetyellow5 == String.fromCharCode(78,0) ? inouttargetyellow5.length : foregroundy);
      }
      kickw = new Map([[`${bings}`, 2]]);
   }

    }

    this.setState(state);
      libfabricjniI = `${1 & libfbR.length}`;
      libfabricjniI += `${(libfbR.length - (commente ? 3 : 2))}`;
   if (borderlessi == String.fromCharCode(112,0)) {
       let catagoryN = 4.0;
      while (3.57 < (catagoryN - catagoryN) && 3.57 < (catagoryN - catagoryN)) {
         catagoryN *= parseInt(`${catagoryN}`) / 2;
         break;
      }
      do {
         catagoryN *= 2 | parseInt(`${catagoryN}`);
         if (236002.0 == catagoryN) {
            break;
         }
      } while ((4.44 >= (catagoryN - catagoryN) || 1.17 >= (4.44 - catagoryN)) && (236002.0 == catagoryN));
         catagoryN -= parseInt(`${catagoryN}`);
      libfabricjniI = "2";
   }

  }

   
  _toggleTimer() {
       let vietnamF = new Map([[String.fromCharCode(98,97,100,103,101,95,112,95,53,55,0),479], [String.fromCharCode(117,95,56,57,95,109,121,115,101,108,102,0),269]]);
    let redgoalL = 4.0;
    let agreementM = false;
    let nterstitialg = String.fromCharCode(117,95,57,52,95,99,111,110,102,105,103,117,114,101,0);
    let privacyC = String.fromCharCode(106,112,101,103,116,114,97,110,95,105,95,49,56,0);
    let refreshborderlessm = false;
    let gifgoalbg7 = String.fromCharCode(112,108,97,121,108,105,115,116,95,110,95,53,51,0);
    let libfbjnin = 2;
    let iconcalendarQ = false;
    let modulesu = [289, 583];
      redgoalL /= Math.max(parseFloat(`${1}`), 4);
      privacyC += "1";
      vietnamF[`${agreementM}`] = ((agreementM ? 5 : 2) - 3);
      agreementM = 27.24 == redgoalL;
   while (refreshborderlessm) {
       let countdown6 = String.fromCharCode(119,101,101,107,95,103,95,54,50,0);
       let componentT = 0;
       let volumeW = String.fromCharCode(110,95,52,48,95,114,97,110,107,115,0);
       let loginsuccessn = String.fromCharCode(101,95,55,52,95,97,118,105,100,0);
         componentT %= Math.max(1, 3 * componentT);
          let codet = String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,121,95,53,53,0);
          let promotione = String.fromCharCode(111,95,50,53,95,115,112,101,97,107,101,114,0);
         componentT <<= Math.min(4, Math.abs(1));
         codet = `${2 & promotione.length}`;
         promotione = `${codet.length}`;
      while (loginsuccessn == String.fromCharCode(119,0) && 5 > volumeW.length) {
         volumeW = `${1 << (Math.min(3, loginsuccessn.length))}`;
         break;
      }
      if (countdown6 != String.fromCharCode(73,0)) {
         volumeW = "3";
      }
         loginsuccessn = `${(countdown6 == String.fromCharCode(89,0) ? volumeW.length : countdown6.length)}`;
          let liveendmodallogoB = false;
          let ajaxI = [60, 52, 842];
         componentT >>= Math.min(2, Math.abs(3 | componentT));
         liveendmodallogoB = liveendmodallogoB && ajaxI.length < 91;
         ajaxI.push(((liveendmodallogoB ? 2 : 3) >> (Math.min(ajaxI.length, 1))));
       let video8 = 5.0;
       let halffieldimageV = 1.0;
      if (volumeW.length > 1) {
          let constantsT = true;
          let miniQ = String.fromCharCode(102,95,55,52,95,99,114,108,100,0);
          let interstitialT = new Map([[String.fromCharCode(121,95,52,55,95,105,100,101,97,108,0),29], [String.fromCharCode(112,97,99,101,114,95,111,95,50,56,0),242]]);
          let componentregistryd = String.fromCharCode(97,99,108,114,95,111,95,55,50,0);
          let whistleorangej = 1.0;
         volumeW += `${parseInt(`${video8}`)}`;
         constantsT = !constantsT;
         miniQ = `${1 ^ parseInt(`${whistleorangej}`)}`;
         interstitialT[`${constantsT}`] = 2 + interstitialT.size;
         componentregistryd = `${miniQ.length}`;
         whistleorangej -= parseFloat(`${1}`);
      }
         volumeW = `${parseInt(`${halffieldimageV}`)}`;
      for (let j = 0; j < 2; j++) {
         loginsuccessn += `${parseInt(`${video8}`)}`;
      }
      if ((parseInt(`${halffieldimageV}`) + countdown6.length) >= 4 || (countdown6.length + 4) >= 4) {
          let resultF = new Map([[String.fromCharCode(121,117,118,109,112,101,103,95,97,95,54,52,0),417], [String.fromCharCode(115,112,108,105,116,116,101,114,95,100,95,50,0),614], [String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,115,95,117,95,57,49,0),123]]);
         halffieldimageV += 3;
         resultF = new Map([[`${resultF.size}`, resultF.size / 3]]);
      }
      while (5 > (countdown6.length + componentT)) {
         countdown6 += `${parseInt(`${halffieldimageV}`) >> (Math.min(Math.abs(parseInt(`${video8}`)), 3))}`;
         break;
      }
      gifgoalbg7 = `${loginsuccessn.length | 1}`;
      break;
   }
   if (privacyC == nterstitialg) {
       let collectionA = String.fromCharCode(117,110,112,97,99,107,95,103,95,56,56,0);
       let googlea = 4.0;
       let icontransferclubo = String.fromCharCode(118,95,57,49,95,117,110,115,112,101,99,105,102,105,101,100,0);
       let spinnerI = 5.0;
         googlea -= parseFloat(`${3 - icontransferclubo.length}`);
      for (let m = 0; m < 1; m++) {
         googlea /= Math.max(1, parseFloat(`${3 & parseInt(`${googlea}`)}`));
      }
         icontransferclubo += `${collectionA.length}`;
         googlea += parseFloat(`${icontransferclubo.length + 1}`);
      while (4 <= (1 << (Math.min(4, icontransferclubo.length)))) {
          let emojiheartX = [String.fromCharCode(122,101,114,111,101,100,95,56,95,54,0), String.fromCharCode(115,112,114,105,110,103,95,54,95,51,0)];
          let iconschedule5 = 1;
          let eyeclosen = false;
         icontransferclubo = `${parseInt(`${googlea}`)}`;
         emojiheartX.push(iconschedule5 << (Math.min(2, Math.abs(2))));
         iconschedule5 -= 3;
         eyeclosen = (iconschedule5 >> (Math.min(emojiheartX.length, 2))) <= 56;
         break;
      }
         googlea *= parseFloat(`${2 | collectionA.length}`);
      if (!icontransferclubo.endsWith(collectionA)) {
          let anytimet = [String.fromCharCode(108,111,99,97,108,97,100,100,114,95,121,95,57,54,0), String.fromCharCode(120,95,55,57,95,103,114,97,121,97,0), String.fromCharCode(100,99,116,101,108,101,109,95,103,95,49,52,0)];
         collectionA = `${parseInt(`${spinnerI}`) - 1}`;
         anytimet.push(anytimet.length + 1);
      }
      while (icontransferclubo.startsWith(`${spinnerI}`)) {
         icontransferclubo += `${icontransferclubo.length}`;
         break;
      }
      for (let c = 0; c < 2; c++) {
          let homeloadingO = new Map([[String.fromCharCode(98,95,52,95,112,114,111,116,111,99,111,108,115,0),357], [String.fromCharCode(120,95,53,51,95,115,97,110,105,116,105,122,101,100,0),768]]);
         googlea *= (parseFloat(`${String.fromCharCode(75,0) == icontransferclubo ? icontransferclubo.length : parseInt(`${spinnerI}`)}`));
         homeloadingO[`${homeloadingO.size}`] = homeloadingO.size % (Math.max(1, homeloadingO.size));
      }
         icontransferclubo += `${icontransferclubo.length}`;
      do {
         googlea *= (parseFloat(`${String.fromCharCode(87,0) == icontransferclubo ? parseInt(`${spinnerI}`) : icontransferclubo.length}`));
         if (googlea == 616121.0) {
            break;
         }
      } while ((4 < collectionA.length) && (googlea == 616121.0));
         googlea /= Math.max(4, parseFloat(`${2}`));
      nterstitialg += `${parseInt(`${redgoalL}`)}`;
   }
   if (nterstitialg.length >= 4) {
      nterstitialg += `${vietnamF.size}`;
   }
   do {
       let selectedv = new Map([[String.fromCharCode(119,95,52,48,95,117,110,98,111,120,0),674], [String.fromCharCode(114,116,109,112,99,114,121,112,116,95,52,95,53,50,0),111]]);
       let internet9 = 4;
         selectedv[`${internet9}`] = 3;
      while (selectedv[`${internet9}`] == null) {
          let canvasJ = [758, 838];
          let template_rM = String.fromCharCode(111,95,53,57,95,116,97,112,112,101,100,0);
          let baiduX = String.fromCharCode(105,115,112,108,97,121,95,114,95,52,51,0);
          let whitetickp = 0.0;
         selectedv[`${internet9}`] = canvasJ.length;
         canvasJ.push(baiduX.length / (Math.max(1, 10)));
         template_rM = `${baiduX.length}`;
         whitetickp += parseFloat(`${parseInt(`${whitetickp}`)}`);
         break;
      }
         internet9 ^= internet9;
          let sheetc = [703, 851, 12];
          let chatbotphotoQ = String.fromCharCode(115,104,111,119,110,95,109,95,57,55,0);
          let roundn = String.fromCharCode(112,97,114,95,117,95,50,55,0);
         internet9 >>= Math.min(Math.abs(2), 4);
         sheetc.push((roundn == String.fromCharCode(108,0) ? roundn.length : sheetc.length));
         chatbotphotoQ = `${roundn.length * chatbotphotoQ.length}`;
      for (let e = 0; e < 3; e++) {
         internet9 *= 3 * internet9;
      }
      if (2 > (internet9 % (Math.max(selectedv.size, 10))) || 2 > (internet9 % (Math.max(selectedv.size, 5)))) {
         internet9 %= Math.max(selectedv.size - 1, 3);
      }
      libfbjnin ^= gifgoalbg7.length >> (Math.min(Math.abs(2), 2));
      if (libfbjnin == 2043270) {
         break;
      }
   } while ((5 > (libfbjnin & nterstitialg.length)) && (libfbjnin == 2043270));

    
    
    
  }

   
  _onBack() {
       let statisticsactiveZ = String.fromCharCode(107,95,50,54,95,100,105,115,109,105,115,115,101,100,0);
    let debugG = String.fromCharCode(100,101,108,97,116,101,100,95,121,95,56,56,0);
    let static_wiQ = true;
    let matchn = 0.0;
    let episodesU = [115, 189];
    let nextA = String.fromCharCode(109,95,55,95,112,101,114,109,0);
    let saveA = 1;
    let crownl = 5.0;
    let awayiconi = String.fromCharCode(98,95,50,55,95,104,97,114,109,111,110,105,99,0);
    let libyogaE = 5.0;
    let friendsX = true;
    let hearts = String.fromCharCode(106,95,49,52,95,99,112,111,115,0);
    let stationS = true;
    let cross8 = false;
    let window_0V = [831, 394, 284];
      debugG += `${((static_wiQ ? 3 : 4) << (Math.min(Math.abs(saveA), 2)))}`;
      awayiconi += `${nextA.length}`;
      statisticsactiveZ = `${nextA.length}`;
   while (hearts == debugG) {
      debugG += `${(nextA == String.fromCharCode(72,0) ? parseInt(`${matchn}`) : nextA.length)}`;
      break;
   }
   for (let t = 0; t < 2; t++) {
      static_wiQ = 82 > debugG.length;
   }
       let predictionbuttonl = 1;
       let nterstitialz = 4.0;
       let downarrowu = String.fromCharCode(104,95,53,57,95,102,108,101,120,105,98,108,101,0);
          let videojsE = String.fromCharCode(97,110,105,109,97,116,111,114,115,95,104,95,50,50,0);
         nterstitialz *= parseFloat(`${2}`);
         videojsE = `${videojsE.length / (Math.max(videojsE.length, 1))}`;
      while ((4.46 + nterstitialz) <= 2.1) {
         nterstitialz += parseFloat(`${predictionbuttonl << (Math.min(downarrowu.length, 2))}`);
         break;
      }
      do {
          let greytick8 = 4.0;
          let miniw = 3.0;
         nterstitialz *= parseFloat(`${2 - predictionbuttonl}`);
         greytick8 /= Math.max(parseFloat(`${3 - parseInt(`${greytick8}`)}`), 5);
         miniw *= 2;
         if (2758252.0 == nterstitialz) {
            break;
         }
      } while ((2758252.0 == nterstitialz) && ((4.58 - nterstitialz) <= 4.92));
      for (let x = 0; x < 2; x++) {
          let libreanimatedP = String.fromCharCode(122,95,57,48,95,111,102,102,101,115,116,0);
          let info9 = 4;
          let bodanL = String.fromCharCode(122,95,53,48,95,111,117,116,98,111,120,0);
         nterstitialz += parseFloat(`${parseInt(`${nterstitialz}`) >> (Math.min(5, Math.abs(3)))}`);
         libreanimatedP = `${info9 + 3}`;
         info9 /= Math.max(2, libreanimatedP.length * 1);
         bodanL = `${bodanL.length + 1}`;
      }
         nterstitialz /= Math.max(parseFloat(`${downarrowu.length * 1}`), 1);
      while (4 < (5 & predictionbuttonl) || (predictionbuttonl / (Math.max(parseInt(`${nterstitialz}`), 5))) < 5) {
          let orangeclockX = String.fromCharCode(98,97,115,101,117,114,108,95,111,95,51,57,0);
          let detailv = String.fromCharCode(115,95,50,50,95,102,108,116,112,0);
          let othermatchdetailbg6 = String.fromCharCode(114,116,109,112,99,114,121,112,116,95,54,95,50,51,0);
          let half4 = new Map([[String.fromCharCode(117,110,112,97,99,107,95,110,95,49,50,0),968], [String.fromCharCode(112,95,50,55,95,115,101,114,105,97,108,105,122,101,100,0),208], [String.fromCharCode(122,95,54,57,95,104,105,115,116,0),741]]);
         nterstitialz -= parseFloat(`${half4.size}`);
         orangeclockX += `${othermatchdetailbg6.length}`;
         detailv += `${(detailv == String.fromCharCode(90,0) ? detailv.length : othermatchdetailbg6.length)}`;
         half4[othermatchdetailbg6] = 2 | orangeclockX.length;
         break;
      }
      while (predictionbuttonl <= 2) {
         predictionbuttonl *= predictionbuttonl & 3;
         break;
      }
         predictionbuttonl |= 2 - predictionbuttonl;
          let arrowselectdown1 = String.fromCharCode(111,95,53,48,95,112,111,108,105,99,121,0);
         nterstitialz *= parseFloat(`${3}`);
         arrowselectdown1 += `${arrowselectdown1.length - 1}`;
      statisticsactiveZ += `${statisticsactiveZ.length}`;

    if (this.props.navigator && this.props.navigator.pop) {

      libyogaE -= statisticsactiveZ.length;
      nextA = `${awayiconi.length + parseInt(`${libyogaE}`)}`;
   do {
      static_wiQ = hearts.length >= 98;
      if (static_wiQ ? !static_wiQ : static_wiQ) {
         break;
      }
   } while ((saveA >= 4) && (static_wiQ ? !static_wiQ : static_wiQ));
   if (!awayiconi.startsWith(`${friendsX}`)) {
       let expiredV = 1.0;
       let mimeL = [516, 762, 620];
       let cornerkick8 = 5;
       let iconnotificationnewI = String.fromCharCode(115,97,98,101,114,95,107,95,54,54,0);
          let backwhiteN = String.fromCharCode(105,95,48,95,122,101,114,111,98,108,111,98,0);
          let e_count8 = [String.fromCharCode(97,99,100,101,99,95,49,95,56,0), String.fromCharCode(110,97,116,105,118,101,95,122,95,52,56,0), String.fromCharCode(112,95,56,57,95,115,112,108,105,99,101,0)];
         expiredV -= parseFloat(`${cornerkick8}`);
         backwhiteN = `${backwhiteN.length ^ e_count8.length}`;
         e_count8.push(e_count8.length % 2);
      while (mimeL.length > 3) {
         expiredV -= parseFloat(`${cornerkick8 << (Math.min(1, Math.abs(2)))}`);
         break;
      }
       let favoriteL = String.fromCharCode(109,112,99,104,117,102,102,95,113,95,54,53,0);
          let predictiondefault3 = String.fromCharCode(112,104,111,110,101,98,111,111,107,95,114,95,56,50,0);
          let indicatorb = String.fromCharCode(116,100,115,102,95,99,95,52,0);
         expiredV += parseFloat(`${mimeL.length}`);
         predictiondefault3 += "1";
         indicatorb += `${indicatorb.length}`;
         iconnotificationnewI = "2";
      do {
         mimeL = [mimeL.length * iconnotificationnewI.length];
         if (549106 == mimeL.length) {
            break;
         }
      } while (((1 + mimeL.length) >= 4) && (549106 == mimeL.length));
      do {
          let animationse = String.fromCharCode(121,95,55,53,95,108,105,98,121,117,118,0);
         cornerkick8 >>= Math.min(3, Math.abs(2 & mimeL.length));
         animationse += `${animationse.length % 1}`;
         if (cornerkick8 == 4162099) {
            break;
         }
      } while ((cornerkick8 == 4162099) && ((cornerkick8 / 3) >= 2 || 3 >= (cornerkick8 / (Math.max(3, 10)))));
      if (3.11 >= (expiredV + 2.30) || 4 >= (iconnotificationnewI.length % (Math.max(3, 4)))) {
          let blackD = 2;
          let banner5 = 2.0;
          let grayd = [138, 25, 520];
          let humidityN = 5.0;
          let whitetickp = true;
         iconnotificationnewI += "3";
         blackD %= Math.max(4, parseInt(`${humidityN}`) % 1);
         banner5 /= Math.max(2, 2 >> (Math.min(Math.abs(parseInt(`${banner5}`)), 5)));
         grayd = [3 / (Math.max(parseInt(`${humidityN}`), 2))];
         whitetickp = 19 > blackD;
      }
      do {
          let logoutG = new Map([[String.fromCharCode(115,116,97,116,101,102,117,108,95,105,95,57,48,0),941], [String.fromCharCode(111,98,116,97,105,110,95,100,95,54,50,0),299]]);
          let awayteamfieldX = String.fromCharCode(119,95,49,57,95,98,108,97,99,107,115,0);
          let libruntimeexecutorV = 5.0;
          let showlessK = String.fromCharCode(100,99,97,100,115,112,95,51,95,54,48,0);
          let containerm = 5.0;
         iconnotificationnewI += `${logoutG.size % (Math.max(3, parseInt(`${libruntimeexecutorV}`)))}`;
         logoutG = new Map([[showlessK, 2 ^ awayteamfieldX.length]]);
         awayteamfieldX = `${parseInt(`${containerm}`)}`;
         libruntimeexecutorV *= (parseFloat(`${showlessK == String.fromCharCode(87,0) ? parseInt(`${containerm}`) : showlessK.length}`));
         if (23572 == iconnotificationnewI.length) {
            break;
         }
      } while ((4 <= (iconnotificationnewI.length >> (Math.min(3, Math.abs(cornerkick8))))) && (23572 == iconnotificationnewI.length));
       let searchk = 3.0;
         cornerkick8 |= 1;
         searchk -= parseFloat(`${1}`);
      awayiconi = `${saveA / 1}`;
   }
      episodesU = [(2 >> (Math.min(4, Math.abs((friendsX ? 2 : 5)))))];
      nextA += `${((static_wiQ ? 5 : 4) % (Math.max(1, hearts.length)))}`;
      this.props.navigator.pop();
    } else {

       let path_ = String.fromCharCode(109,95,50,48,95,116,111,110,101,115,0);
       let scorepopsoundF = String.fromCharCode(109,95,51,48,95,109,117,108,116,105,112,108,101,120,101,100,0);
       let buttont = false;
       let modely = String.fromCharCode(97,95,57,49,95,117,99,111,110,115,116,0);
       let bgvipxvodv = String.fromCharCode(122,95,52,49,95,102,111,110,116,115,0);
      for (let q = 0; q < 2; q++) {
         modely += `${(scorepopsoundF == String.fromCharCode(111,0) ? (buttont ? 2 : 4) : scorepopsoundF.length)}`;
      }
         bgvipxvodv = `${((buttont ? 2 : 5) & modely.length)}`;
      for (let s = 0; s < 1; s++) {
         bgvipxvodv = "2";
      }
       let crownE = 4;
       let iconmegaphonet = 4;
      if (iconmegaphonet > 3) {
          let iconmegaphoneQ = false;
          let anythinkx = 2.0;
          let chinaX = 1.0;
          let annerE = 1;
          let libavdeviceH = String.fromCharCode(107,95,55,49,95,117,118,108,99,0);
         crownE *= modely.length | 3;
         iconmegaphoneQ = iconmegaphoneQ || 41.79 < chinaX;
         anythinkx -= 3 ^ annerE;
         chinaX += parseFloat(`${1 | parseInt(`${chinaX}`)}`);
         annerE ^= ((iconmegaphoneQ ? 3 : 2) | parseInt(`${anythinkx}`));
         libavdeviceH = "3";
      }
      for (let f = 0; f < 3; f++) {
         crownE %= Math.max(1 << (Math.min(3, bgvipxvodv.length)), 2);
      }
      if (4 < (bgvipxvodv.length | crownE) && 4 < (bgvipxvodv.length | crownE)) {
         bgvipxvodv = `${(scorepopsoundF == String.fromCharCode(97,0) ? scorepopsoundF.length : modely.length)}`;
      }
          let smallorangemans = new Map([[String.fromCharCode(110,111,109,101,109,95,100,95,57,0),729], [String.fromCharCode(111,100,100,95,55,95,51,57,0),191], [String.fromCharCode(115,117,98,110,111,100,101,95,101,95,56,56,0),16]]);
          let ccdfbdabcabbbedbz = true;
          let minit_bzJ = true;
         modely = `${3 ^ bgvipxvodv.length}`;
         smallorangemans[`${ccdfbdabcabbbedbz}`] = ((ccdfbdabcabbbedbz ? 4 : 5) + 1);
         minit_bzJ = smallorangemans[`${ccdfbdabcabbbedbz}`] == null;
      stationS = 49 == saveA;
      path_ += `${(String.fromCharCode(115,0) == path_ ? path_.length : path_.length)}`;
       let libturbomodulejsijniq = 4.0;
       let favorite8 = new Map([[String.fromCharCode(101,95,52,54,95,99,111,109,112,111,115,105,116,105,111,110,0),887], [String.fromCharCode(111,115,116,97,114,95,119,95,52,54,0),731]]);
       let whitebell8 = 5.0;
      while (3.26 <= (libturbomodulejsijniq / (Math.max(whitebell8, 3)))) {
          let orangeclockR = String.fromCharCode(115,101,113,95,105,95,57,51,0);
          let libswscalef = false;
         whitebell8 *= parseInt(`${whitebell8}`) % (Math.max(5, favorite8.size));
         orangeclockR = "1";
         libswscalef = orangeclockR.length <= 39;
         break;
      }
         whitebell8 += 2;
      do {
         libturbomodulejsijniq += parseFloat(`${parseInt(`${libturbomodulejsijniq}`) * 2}`);
         if (libturbomodulejsijniq == 4846630.0) {
            break;
         }
      } while ((libturbomodulejsijniq == 4846630.0) && (2.23 < (libturbomodulejsijniq - 4.12)));
      while ((whitebell8 + 1) > 1.44) {
         libturbomodulejsijniq /= Math.max(5, parseFloat(`${1}`));
         break;
      }
         libturbomodulejsijniq /= Math.max(parseFloat(`${favorite8.size | 2}`), 2);
       let launcher1 = String.fromCharCode(97,116,111,110,95,113,95,54,51,0);
       let pushy = 1;
       let hookso = 5;
      do {
         pushy += launcher1.length ^ hookso;
         if (pushy == 340382) {
            break;
         }
      } while ((pushy == 340382) && ((2 >> (Math.min(4, Math.abs(hookso)))) < 2));
       let loadinge = String.fromCharCode(99,95,52,48,95,105,110,100,101,112,101,110,100,101,110,99,101,0);
      debugG += `${((friendsX ? 3 : 4) / (Math.max(saveA, 4)))}`;
   if (nextA.length <= 3) {
       let indicator6 = new Map([[String.fromCharCode(112,97,110,105,99,95,49,95,50,0),292], [String.fromCharCode(108,95,50,51,95,112,114,101,100,105,99,116,111,114,0),583]]);
       let basketballhometeamv = false;
       let static_dr = String.fromCharCode(110,95,51,54,95,114,101,97,99,104,0);
       let libtobq = String.fromCharCode(110,95,49,57,95,99,111,111,107,105,101,0);
       let valuesg = 0;
      do {
          let crossz = String.fromCharCode(105,95,56,57,95,100,101,99,111,117,112,108,101,0);
          let grapht = [String.fromCharCode(122,95,56,57,95,109,111,109,101,110,116,97,114,121,0), String.fromCharCode(115,101,99,112,107,95,112,95,49,48,48,0)];
          let clear6 = 3.0;
          let predictionarrowb = new Map([[String.fromCharCode(104,95,55,50,95,108,122,115,115,0),String.fromCharCode(109,95,52,48,95,114,101,115,105,103,110,105,110,103,0)], [String.fromCharCode(115,112,111,105,108,101,114,115,95,49,95,50,54,0),String.fromCharCode(98,95,57,54,95,99,111,110,118,101,114,116,0)], [String.fromCharCode(116,114,97,110,115,112,111,114,116,95,50,95,52,51,0),String.fromCharCode(102,111,114,109,97,116,116,101,100,95,116,95,53,57,0)]]);
         libtobq += `${predictionarrowb.size}`;
         crossz += "2";
         grapht = [3];
         clear6 /= Math.max(2, parseFloat(`${1 - grapht.length}`));
         predictionarrowb[`${clear6}`] = crossz.length;
         if (libtobq == String.fromCharCode(48,50,101,119,57,120,56,98,48,100,0)) {
            break;
         }
      } while ((libtobq == String.fromCharCode(48,50,101,119,57,120,56,98,48,100,0)) && (libtobq.endsWith(static_dr)));
      while (!basketballhometeamv) {
          let bodanX = String.fromCharCode(112,95,57,57,95,121,97,108,101,0);
          let otherC = new Map([[String.fromCharCode(105,110,100,101,110,116,101,100,95,57,95,51,56,0),true ], [String.fromCharCode(111,95,50,49,95,98,114,101,97,107,115,0),true ]]);
         static_dr = `${((basketballhometeamv ? 4 : 1) << (Math.min(Math.abs(valuesg), 2)))}`;
         bodanX = `${(bodanX == String.fromCharCode(120,0) ? bodanX.length : otherC.size)}`;
         otherC = new Map([[`${otherC.size}`, bodanX.length]]);
         break;
      }
      do {
         libtobq = `${indicator6.size}`;
         if (libtobq.length == 952230) {
            break;
         }
      } while (((valuesg >> (Math.min(Math.abs(4), 3))) < 3 || (valuesg >> (Math.min(Math.abs(4), 3))) < 1) && (libtobq.length == 952230));
      if ((valuesg - indicator6.size) <= 2 && (2 - valuesg) <= 2) {
         valuesg <<= Math.min(1, Math.abs(((basketballhometeamv ? 4 : 4))));
      }
      while (5 <= static_dr.length) {
         basketballhometeamv = (valuesg % (Math.max(indicator6.size, 5))) < 9;
         break;
      }
         valuesg |= 3;
         valuesg /= Math.max(((basketballhometeamv ? 2 : 2)), 1);
         basketballhometeamv = indicator6.size == 51;
         libtobq += `${libtobq.length}`;
         libtobq += `${indicator6.size}`;
       let yellowcirclebgH = true;
       let selectionB = true;
         static_dr += `${indicator6.size}`;
         basketballhometeamv = valuesg > 9;
          let libavformatc = [744, 293, 554];
          let downloaderp = 2.0;
         static_dr = `${static_dr.length}`;
         libavformatc.push(2);
         downloaderp += parseFloat(`${1}`);
      if (static_dr.length > 2) {
          let episodeW = false;
          let moon1 = String.fromCharCode(99,95,55,54,95,112,117,114,112,111,115,101,0);
          let executork = String.fromCharCode(108,105,98,115,119,114,101,115,97,109,112,108,101,95,50,95,51,51,0);
         basketballhometeamv = episodeW && moon1.length <= 79;
         episodeW = executork.length <= 98;
         moon1 = `${executork.length}`;
      }
      friendsX = (!static_wiQ ? !basketballhometeamv : static_wiQ);
   }
   if (5 >= (parseInt(`${libyogaE}`) * episodesU.length) || (libyogaE * 4.12) >= 5.19) {
      episodesU = [parseInt(`${libyogaE}`)];
   }
       let n_unlockZ = 2.0;
       let controls6 = 0.0;
       let downloadede = String.fromCharCode(106,111,98,113,95,104,95,54,0);
      do {
          let goalQ = true;
         controls6 /= Math.max(parseFloat(`${downloadede.length}`), 3);
         if (controls6 == 3989488.0) {
            break;
         }
      } while (((downloadede.length % (Math.max(2, 10))) == 2 || 2.91 == (parseFloat(`${downloadede.length}`) - controls6)) && (controls6 == 3989488.0));
      if (downloadede.includes(`${controls6}`)) {
         controls6 += (parseFloat(`${String.fromCharCode(65,0) == downloadede ? parseInt(`${controls6}`) : downloadede.length}`));
      }
          let dragcloseR = [String.fromCharCode(100,95,53,51,95,111,112,101,110,115,115,108,99,111,110,102,0), String.fromCharCode(98,95,52,53,95,117,118,108,99,0), String.fromCharCode(122,95,49,53,95,115,116,114,116,111,105,110,116,0)];
         downloadede = `${downloadede.length * parseInt(`${controls6}`)}`;
         dragcloseR = [dragcloseR.length % (Math.max(1, 6))];
      do {
          let runtimeschedulert = 0.0;
         controls6 *= parseFloat(`${downloadede.length / (Math.max(1, 8))}`);
         runtimeschedulert += parseFloat(`${3}`);
         if (4097074.0 == controls6) {
            break;
         }
      } while ((n_unlockZ >= 2.95) && (4097074.0 == controls6));
       let notificationfillemptyg = false;
       let icontransferclubo = false;
      do {
         icontransferclubo = n_unlockZ > 45.20;
         if (icontransferclubo ? !icontransferclubo : icontransferclubo) {
            break;
         }
      } while ((!icontransferclubo) && (icontransferclubo ? !icontransferclubo : icontransferclubo));
      for (let p = 0; p < 1; p++) {
         controls6 /= Math.max(5, (parseFloat(`${(notificationfillemptyg ? 4 : 4) * parseInt(`${n_unlockZ}`)}`)));
      }
          let libsentry8 = [708, 833, 781];
          let graphicsx = 2.0;
         n_unlockZ -= (parseFloat(`${3 - (icontransferclubo ? 5 : 2)}`));
         libsentry8.push(libsentry8.length);
         graphicsx /= Math.max(libsentry8.length, 3);
      do {
          let z_playerb = true;
          let commonm = String.fromCharCode(105,95,53,55,95,100,101,99,111,100,101,100,0);
          let agreementc = String.fromCharCode(102,95,55,51,95,101,110,116,105,114,101,108,121,0);
          let about4 = 2.0;
         controls6 *= parseFloat(`${parseInt(`${controls6}`) * 3}`);
         z_playerb = !z_playerb;
         commonm = `${agreementc.length * 1}`;
         agreementc = "2";
         about4 *= agreementc.length * 3;
         if (controls6 == 2508219.0) {
            break;
         }
      } while ((2.94 == controls6) && (controls6 == 2508219.0));
      episodesU = [3];
      debugG += `${(String.fromCharCode(111,0) == awayiconi ? parseInt(`${libyogaE}`) : awayiconi.length)}`;
      console.warn(
        'Warning: _onBack requires navigator property to function. Either modify the onBack prop or pass a navigator prop',
      );
   for (let v = 0; v < 1; v++) {
       let hongkongE = 0;
       let lessM = false;
       let componentx = String.fromCharCode(118,95,55,95,104,109,97,99,108,105,115,116,0);
       let iconmegaphonev = 1.0;
       let minivodZ = String.fromCharCode(112,95,52,54,95,115,109,115,0);
      while (2.87 <= (iconmegaphonev * 4.69) || 5 <= (5 ^ minivodZ.length)) {
          let whitevideoliveI = [901, 701, 885];
          let foundI = [819, 750, 77];
         minivodZ = `${((lessM ? 3 : 4))}`;
         whitevideoliveI.push(1 / (Math.max(9, foundI.length)));
         foundI = [3];
         break;
      }
      if (lessM) {
          let reddownarrowS = new Map([[String.fromCharCode(97,95,52,95,99,111,114,114,101,99,116,105,110,103,0),844], [String.fromCharCode(104,95,51,95,115,101,103,109,97,112,0),979]]);
          let awayteamfieldS = [153, 122];
          let renderJ = false;
         lessM = 22 < awayteamfieldS.length;
         reddownarrowS = new Map([[`${reddownarrowS.size}`, 2 << (Math.min(2, Math.abs(reddownarrowS.size)))]]);
         awayteamfieldS = [(reddownarrowS.size << (Math.min(2, Math.abs((renderJ ? 3 : 4)))))];
      }
          let suggestionv = 2;
          let successx = 2.0;
          let typingC = 3.0;
         minivodZ += `${parseInt(`${typingC}`) ^ parseInt(`${iconmegaphonev}`)}`;
         suggestionv &= parseInt(`${successx}`) - 3;
         successx /= Math.max(1 << (Math.min(Math.abs(suggestionv), 2)), 1);
         typingC *= parseInt(`${successx}`);
       let aboutZ = 1.0;
       let refreshborderlessZ = [311, 260];
      while (minivodZ.length == 5 || !lessM) {
         minivodZ = `${parseInt(`${aboutZ}`)}`;
         break;
      }
          let mathG = String.fromCharCode(97,95,53,57,95,100,105,97,99,114,105,116,105,99,0);
          let javan = 0.0;
          let targetB = 5.0;
         componentx = `${parseInt(`${javan}`) * 3}`;
         mathG = `${parseInt(`${targetB}`)}`;
         javan /= Math.max(4, parseFloat(`${mathG.length}`));
         targetB -= 3 | parseInt(`${targetB}`);
          let suggestionn = String.fromCharCode(106,95,56,56,95,115,116,114,105,110,103,105,102,121,0);
          let rncoreK = String.fromCharCode(117,95,55,50,95,115,117,98,111,98,106,101,99,116,0);
          let pauseR = String.fromCharCode(114,95,53,54,95,100,105,115,99,114,105,109,105,110,97,116,111,114,0);
         componentx = `${(String.fromCharCode(119,0) == minivodZ ? minivodZ.length : hongkongE)}`;
         suggestionn = `${suggestionn.length ^ rncoreK.length}`;
         rncoreK = `${rncoreK.length - 3}`;
         pauseR += `${(String.fromCharCode(99,0) == suggestionn ? rncoreK.length : suggestionn.length)}`;
      if (minivodZ.length < hongkongE) {
         minivodZ = `${3 ^ minivodZ.length}`;
      }
      for (let x = 0; x < 1; x++) {
         lessM = minivodZ.length >= 43;
      }
      do {
          let homeactive0 = true;
          let twitterG = 1;
          let streamingJ = 0;
          let reward4 = true;
         hongkongE |= 2 & twitterG;
         homeactive0 = 80 <= streamingJ && !reward4;
         twitterG += ((homeactive0 ? 2 : 2) / 2);
         streamingJ <<= Math.min(1, Math.abs(2));
         if (2726720 == hongkongE) {
            break;
         }
      } while ((2726720 == hongkongE) && (!lessM));
         hongkongE *= (String.fromCharCode(105,0) == minivodZ ? parseInt(`${aboutZ}`) : minivodZ.length);
       let countdownI = 3.0;
      while (1 == hongkongE) {
          let minimizef = 0.0;
         countdownI += parseInt(`${minimizef}`);
         break;
      }
          let placeholderz = [348, 843];
          let redgoalO = String.fromCharCode(99,95,52,51,95,122,117,108,117,0);
          let imagesZ = String.fromCharCode(120,95,55,48,95,99,111,109,112,97,114,97,116,111,114,0);
         countdownI -= placeholderz.length;
         placeholderz.push((String.fromCharCode(79,0) == imagesZ ? imagesZ.length : redgoalO.length));
         redgoalO = `${2 * imagesZ.length}`;
      awayiconi += "2";
   }
   if (hearts.length > 5) {
      hearts = `${parseInt(`${libyogaE}`) << (Math.min(3, Math.abs(1)))}`;
   }
   do {
      crownl -= episodesU.length ^ 1;
      if (crownl == 3732877.0) {
         break;
      }
   } while ((crownl == 3732877.0) && (2.61 == (crownl / 1.98)));
      episodesU = [3];
      matchn -= parseFloat(`${statisticsactiveZ.length / (Math.max(2, 10))}`);
       let goalh = new Map([[String.fromCharCode(97,117,116,111,102,105,120,95,105,95,51,49,0),false ], [String.fromCharCode(99,111,110,116,105,110,117,111,117,115,95,117,95,55,57,0),true ]]);
         goalh[`${goalh.size}`] = 1 << (Math.min(4, Math.abs(goalh.size)));
       let nativeW = String.fromCharCode(110,111,115,105,109,100,95,120,95,50,53,0);
       let runtimed = String.fromCharCode(100,101,99,111,100,101,114,105,110,105,116,95,49,95,53,49,0);
      while ((nativeW.length >> (Math.min(3, Math.abs(goalh.size)))) < 2 || 3 < (goalh.size >> (Math.min(Math.abs(2), 2)))) {
          let linit_6i = String.fromCharCode(112,111,108,121,108,105,110,101,95,106,95,50,56,0);
          let chatbotphoto8 = 1.0;
          let template_1gU = new Map([[String.fromCharCode(113,95,54,56,0),378], [String.fromCharCode(115,108,117,114,112,95,113,95,56,51,0),782]]);
          let gemfileQ = 3.0;
          let libfbO = String.fromCharCode(117,95,50,53,95,119,97,105,116,0);
         nativeW = `${linit_6i.length % 1}`;
         linit_6i += `${parseInt(`${chatbotphoto8}`)}`;
         chatbotphoto8 *= parseFloat(`${libfbO.length - parseInt(`${gemfileQ}`)}`);
         template_1gU[`${chatbotphoto8}`] = template_1gU.size;
         gemfileQ /= Math.max(3, 1 ^ parseInt(`${gemfileQ}`));
         libfbO = `${(libfbO == String.fromCharCode(88,0) ? libfbO.length : template_1gU.size)}`;
         break;
      }
      episodesU.push(hearts.length);

    }
  }

   
  calculateTime() {
       let executorH = String.fromCharCode(117,95,50,56,95,101,115,112,111,110,100,101,114,0);
    let dropdownb = new Map([[String.fromCharCode(112,95,49,53,95,105,110,115,101,114,116,115,0),639], [String.fromCharCode(114,95,50,51,0),794], [String.fromCharCode(109,111,100,105,102,105,101,114,95,54,95,56,55,0),30]]);
    let u_imageO = 5.0;
    let iconmegaphoneW = String.fromCharCode(114,101,113,117,101,115,116,95,110,95,54,48,0);
    let mintegralc = [642, 388, 652];
    let unreadc = 5.0;
    let noded = String.fromCharCode(101,95,54,51,95,100,101,105,110,116,0);
    let giflivestreamingh = [622, 108];
    let goallogox = 1.0;
    let redcirclebg0 = new Map([[String.fromCharCode(111,98,106,101,99,116,105,118,101,95,111,95,57,50,0),String.fromCharCode(105,95,54,56,95,97,97,115,99,0)], [String.fromCharCode(97,95,50,50,95,100,105,109,101,110,115,0),String.fromCharCode(115,95,52,50,95,112,101,110,99,105,108,0)], [String.fromCharCode(117,114,98,103,95,52,95,50,49,0),String.fromCharCode(101,95,57,52,95,111,112,97,113,117,101,0)]]);
    let ccdfbdabcabbbedbH = String.fromCharCode(118,95,55,48,95,119,114,105,116,101,97,108,105,103,110,0);
       let privilegeu = String.fromCharCode(112,95,56,51,0);
       let sharewhitei = String.fromCharCode(105,95,51,57,95,100,101,98,117,103,103,105,110,103,0);
      if (privilegeu.length > 1) {
         privilegeu = `${sharewhitei.length * privilegeu.length}`;
      }
      for (let d = 0; d < 1; d++) {
          let bango = String.fromCharCode(116,95,49,95,112,114,101,116,99,104,0);
          let other3 = 5.0;
          let logoF = String.fromCharCode(112,108,97,121,103,114,111,117,110,100,95,55,95,56,49,0);
          let customw = 5.0;
          let rocket2 = [782, 301, 548];
         privilegeu = "1";
         bango = "3";
         other3 += (bango == String.fromCharCode(121,0) ? bango.length : parseInt(`${customw}`));
         logoF += `${parseInt(`${other3}`) >> (Math.min(bango.length, 3))}`;
         customw += parseFloat(`${3 << (Math.min(2, rocket2.length))}`);
         rocket2 = [rocket2.length << (Math.min(Math.abs(2), 1))];
      }
      while (sharewhitei.length <= 1) {
         sharewhitei = `${sharewhitei.length}`;
         break;
      }
         sharewhitei += `${sharewhitei.length}`;
         sharewhitei += `${2 % (Math.max(9, sharewhitei.length))}`;
      while (privilegeu.length < 2) {
         sharewhitei += `${(privilegeu == String.fromCharCode(77,0) ? privilegeu.length : sharewhitei.length)}`;
         break;
      }
      unreadc *= dropdownb.size >> (Math.min(mintegralc.length, 4));
   do {
      giflivestreamingh.push(ccdfbdabcabbbedbH.length);
      if (4503965 == giflivestreamingh.length) {
         break;
      }
   } while (((unreadc / (Math.max(5.42, 4))) >= 3.87) && (4503965 == giflivestreamingh.length));
      goallogox *= parseFloat(`${executorH.length | iconmegaphoneW.length}`);
   for (let s = 0; s < 2; s++) {
      ccdfbdabcabbbedbH = `${executorH.length}`;
   }
   if (ccdfbdabcabbbedbH == noded) {
      noded = `${noded.length}`;
   }
   for (let l = 0; l < 1; l++) {
      ccdfbdabcabbbedbH += `${mintegralc.length}`;
   }

    if (this.state.showTimeRemaining) {

   while ((5 | dropdownb.size) < 5 || (5 | dropdownb.size) < 5) {
      noded = "3";
      break;
   }
      unreadc /= Math.max(mintegralc.length, 1);
       let awayplayerS = 0.0;
       let stationsd = 3.0;
       let refreshI = [839, 870];
      while (5 <= (parseInt(`${awayplayerS}`) / (Math.max(9, refreshI.length)))) {
         awayplayerS /= Math.max(2, 2 + parseInt(`${awayplayerS}`));
         break;
      }
         awayplayerS *= parseInt(`${stationsd}`) % (Math.max(2, refreshI.length));
      do {
          let redcirclebgZ = 1.0;
          let dicelogoc = new Map([[String.fromCharCode(104,95,56,56,95,115,108,111,116,0),115], [String.fromCharCode(101,95,49,55,95,108,105,103,104,116,110,101,115,115,0),23]]);
         refreshI = [1 >> (Math.min(2, Math.abs(parseInt(`${awayplayerS}`))))];
         redcirclebgZ -= parseFloat(`${2}`);
         dicelogoc[`${redcirclebgZ}`] = 2;
         if (refreshI.length == 2024356) {
            break;
         }
      } while ((refreshI.includes(stationsd)) && (refreshI.length == 2024356));
      for (let w = 0; w < 3; w++) {
          let countdown4 = String.fromCharCode(101,113,117,97,108,95,52,95,56,49,0);
          let watchnowbgt = 5;
          let iconlogoutV = 5;
         awayplayerS += 3 >> (Math.min(Math.abs(parseInt(`${awayplayerS}`)), 2));
         countdown4 += `${iconlogoutV * 3}`;
         watchnowbgt <<= Math.min(Math.abs((String.fromCharCode(117,0) == countdown4 ? countdown4.length : watchnowbgt)), 5);
         iconlogoutV <<= Math.min(1, Math.abs(watchnowbgt));
      }
         awayplayerS -= parseInt(`${stationsd}`) << (Math.min(1, Math.abs(1)));
      if ((stationsd / (Math.max(4.76, 8))) <= 2.88) {
          let zhengpianU = false;
          let libturbomodulejsijnis = 0;
          let librrcA = String.fromCharCode(115,116,114,116,97,103,95,113,95,54,52,0);
          let short_u8e = true;
         stationsd -= parseInt(`${stationsd}`);
         zhengpianU = libturbomodulejsijnis >= 21;
         libturbomodulejsijnis >>= Math.min(Math.abs((librrcA.length + (short_u8e ? 3 : 2))), 1);
         librrcA += `${libturbomodulejsijnis | 2}`;
         short_u8e = libturbomodulejsijnis == 24 || !short_u8e;
      }
      if (4.72 > (stationsd / (Math.max(refreshI.length, 5)))) {
         stationsd += 1 + refreshI.length;
      }
      while (1 <= refreshI.length) {
         awayplayerS /= Math.max(parseInt(`${stationsd}`), 1);
         break;
      }
         stationsd += 2;
      noded += `${ccdfbdabcabbbedbH.length >> (Math.min(iconmegaphoneW.length, 2))}`;
       let native5 = String.fromCharCode(103,95,51,53,95,112,108,97,105,110,0);
       let c_unlock_ = true;
       let mbbidS = new Map([[String.fromCharCode(122,95,57,52,95,109,109,99,116,120,0),String.fromCharCode(117,95,50,53,95,101,109,101,114,103,101,110,99,121,0)], [String.fromCharCode(103,95,55,49,95,109,110,101,109,111,110,105,99,0),String.fromCharCode(99,104,97,105,110,101,100,95,48,95,51,49,0)]]);
         c_unlock_ = 22 <= mbbidS.size;
       let miniE = 4.0;
       let weibo4 = 2.0;
      if (2 > native5.length) {
          let mbnativeW = String.fromCharCode(120,95,55,55,95,99,111,110,102,0);
          let graphicsr = 1;
          let default_nS = [276, 736, 969];
          let twittern = false;
          let eventC = new Map([[String.fromCharCode(108,111,103,95,52,95,52,54,0),String.fromCharCode(98,95,50,53,95,103,114,97,121,102,0)], [String.fromCharCode(98,114,101,97,107,95,99,95,49,51,0),String.fromCharCode(119,95,50,48,95,109,105,100,116,111,110,101,115,0)], [String.fromCharCode(99,95,50,53,95,102,111,114,103,101,116,0),String.fromCharCode(111,95,56,49,95,119,100,101,99,0)]]);
         native5 += `${((c_unlock_ ? 5 : 4))}`;
         mbnativeW += `${eventC.size}`;
         graphicsr %= Math.max(graphicsr & 1, 3);
         default_nS = [1 * eventC.size];
         twittern = (eventC.size / (Math.max(9, mbnativeW.length))) >= 77;
      }
      if ((2.27 + weibo4) <= 1.88) {
         weibo4 -= parseInt(`${miniE}`) & mbbidS.size;
      }
          let transferg = new Map([[String.fromCharCode(110,95,49,48,95,109,111,109,101,110,116,115,0),482], [String.fromCharCode(99,110,116,95,112,95,50,55,0),63], [String.fromCharCode(97,108,101,114,116,115,95,51,95,50,56,0),275]]);
          let paginationj = String.fromCharCode(119,95,52,95,108,106,112,101,103,0);
         miniE -= 3 >> (Math.min(4, Math.abs(parseInt(`${miniE}`))));
         transferg = new Map([[`${transferg.size}`, transferg.size | 2]]);
         paginationj += `${transferg.size}`;
          let videocommons = 4.0;
         native5 = `${mbbidS.size | 3}`;
         videocommons *= 2 << (Math.min(Math.abs(parseInt(`${videocommons}`)), 2));
      do {
         weibo4 -= native5.length;
         if (4584008.0 == weibo4) {
            break;
         }
      } while ((4584008.0 == weibo4) && (!c_unlock_));
         weibo4 /= Math.max(5, 2 << (Math.min(Math.abs(parseInt(`${weibo4}`)), 2)));
       let libfabricjni0 = 1.0;
      unreadc -= mbbidS.size;
   do {
       let send_ = String.fromCharCode(112,111,114,116,101,114,95,120,95,57,55,0);
         send_ = `${send_.length << (Math.min(Math.abs(2), 2))}`;
      while (send_ == send_) {
         send_ = `${send_.length}`;
         break;
      }
         send_ = `${send_.length * send_.length}`;
      mintegralc = [1 << (Math.min(1, Math.abs(parseInt(`${goallogox}`))))];
      if (mintegralc.length == 4794300) {
         break;
      }
   } while ((mintegralc.length == 4794300) && ((mintegralc.length | noded.length) >= 3 && (3 | mintegralc.length) >= 3));
      u_imageO *= 1 - iconmegaphoneW.length;
      const time = this.state.duration - this.state.currentTime;
      iconmegaphoneW += `${(String.fromCharCode(101,0) == noded ? noded.length : parseInt(`${unreadc}`))}`;
      mintegralc = [ccdfbdabcabbbedbH.length - 3];
      executorH = `${ccdfbdabcabbbedbH.length << (Math.min(Math.abs(1), 3))}`;
      iconmegaphoneW += "2";
      mintegralc = [parseInt(`${unreadc}`) + 3];
   for (let a = 0; a < 2; a++) {
      ccdfbdabcabbbedbH = `${(executorH == String.fromCharCode(98,0) ? ccdfbdabcabbbedbH.length : executorH.length)}`;
   }

      return this.formatTime(time);
   while (4 < mintegralc.length) {
      mintegralc.push((String.fromCharCode(48,0) == iconmegaphoneW ? iconmegaphoneW.length : parseInt(`${goallogox}`)));
      break;
   }
   while (giflivestreamingh.length > parseInt(`${unreadc}`)) {
       let imagemanager0 = 4;
         imagemanager0 /= Math.max(imagemanager0 * imagemanager0, 1);
      if (3 <= imagemanager0) {
         imagemanager0 *= 2;
      }
          let dycreatorY = new Map([[String.fromCharCode(115,101,108,101,99,116,111,114,95,112,95,49,56,0),228], [String.fromCharCode(112,110,105,101,108,115,95,104,95,52,50,0),896], [String.fromCharCode(114,101,99,116,97,110,103,117,108,97,114,95,99,95,56,50,0),885]]);
         imagemanager0 |= 2 >> (Math.min(4, Math.abs(dycreatorY.size)));
      giflivestreamingh.push(1);
      break;
   }
   for (let b = 0; b < 1; b++) {
      dropdownb = new Map([[`${giflivestreamingh.length}`, giflivestreamingh.length]]);
   }
      giflivestreamingh.push(parseInt(`${goallogox}`));
       let benefitD = String.fromCharCode(97,95,55,55,95,98,114,111,97,100,99,97,115,116,105,110,103,0);
      for (let t = 0; t < 3; t++) {
         benefitD += `${3 & benefitD.length}`;
      }
         benefitD += `${benefitD.length}`;
      if (benefitD != String.fromCharCode(66,0) || benefitD == String.fromCharCode(75,0)) {
         benefitD += "1";
      }
      iconmegaphoneW = `${benefitD.length}`;
       let brightnesst = 2.0;
       let reward8 = 3;
       let containerS = String.fromCharCode(105,95,52,54,95,100,114,101,102,0);
          let reactnativejsC = 4;
         reward8 >>= Math.min(Math.abs(2 ^ parseInt(`${brightnesst}`)), 3);
         reactnativejsC &= reactnativejsC + reactnativejsC;
         reward8 *= reward8 % 2;
      do {
         reward8 -= reward8;
         if (reward8 == 4900906) {
            break;
         }
      } while ((reward8 == 4900906) && (containerS.length <= reward8));
         containerS += `${containerS.length & 2}`;
       let package_2P = false;
       let gesturesR = true;
         gesturesR = (brightnesst + containerS.length) >= 18.100;
      do {
         gesturesR = !gesturesR;
         if (gesturesR ? !gesturesR : gesturesR) {
            break;
         }
      } while ((gesturesR ? !gesturesR : gesturesR) && (!gesturesR || 5 >= containerS.length));
         gesturesR = 9 == reward8;
      do {
          let station4 = new Map([[String.fromCharCode(100,121,97,100,105,99,95,54,95,53,55,0),true ], [String.fromCharCode(122,95,53,56,95,115,112,101,99,105,102,105,101,100,0),true ], [String.fromCharCode(111,95,56,56,95,101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,0),true ]]);
          let mbbannerW = false;
          let iconsharefriendsJ = String.fromCharCode(98,105,116,100,101,112,116,104,95,116,95,57,54,0);
         package_2P = (parseInt(`${brightnesst}`) - iconsharefriendsJ.length) >= 94;
         station4[`${mbbannerW}`] = ((mbbannerW ? 3 : 3) & station4.size);
         iconsharefriendsJ = `${((mbbannerW ? 2 : 2) | 3)}`;
         if (package_2P ? !package_2P : package_2P) {
            break;
         }
      } while ((package_2P) && (package_2P ? !package_2P : package_2P));
      dropdownb = new Map([[`${redcirclebg0.size}`, 3 - redcirclebg0.size]]);

    }

    return this.formatTime(this.state.currentTime);
   if (1 == executorH.length || noded != String.fromCharCode(101,0)) {
       let injury1 = 2.0;
       let basketballhometeamx = String.fromCharCode(112,114,105,110,116,111,117,116,95,55,95,54,50,0);
      while ((injury1 - 2.47) <= 5.49) {
         injury1 -= parseFloat(`${basketballhometeamx.length}`);
         break;
      }
          let emojiheartq = String.fromCharCode(112,111,115,101,95,118,95,49,51,0);
          let baiduH = 4;
         injury1 -= parseFloat(`${emojiheartq.length}`);
         emojiheartq = `${baiduH - 3}`;
         baiduH <<= Math.min(Math.abs(baiduH), 4);
      if ((basketballhometeamx.length - 5) <= 3) {
          let black_ = String.fromCharCode(112,101,114,99,101,112,116,117,97,108,95,99,95,51,55,0);
          let umengv = String.fromCharCode(103,105,118,101,110,95,109,95,57,48,0);
          let descA = String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,100,95,52,57,0);
         basketballhometeamx += `${(String.fromCharCode(114,0) == descA ? descA.length : basketballhometeamx.length)}`;
         black_ = `${umengv.length}`;
         umengv += `${2 - umengv.length}`;
      }
      if (4 > basketballhometeamx.length) {
         injury1 -= (parseFloat(`${basketballhometeamx == String.fromCharCode(110,0) ? basketballhometeamx.length : parseInt(`${injury1}`)}`));
      }
         injury1 /= Math.max(3, parseFloat(`${basketballhometeamx.length * parseInt(`${injury1}`)}`));
      for (let z = 0; z < 3; z++) {
          let typing1 = [80, 28];
          let bangh = new Map([[String.fromCharCode(112,95,51,52,95,116,105,110,116,0),true ], [String.fromCharCode(117,95,52,49,95,99,111,110,115,105,115,116,101,110,99,121,0),false ]]);
          let window_0x = new Map([[String.fromCharCode(114,101,113,115,116,97,116,101,95,112,95,51,50,0),658], [String.fromCharCode(104,95,53,95,105,116,115,101,108,102,0),941], [String.fromCharCode(103,95,49,56,95,104,97,115,104,101,114,0),79]]);
          let heartK = 3;
         basketballhometeamx += `${typing1.length / (Math.max(2, 8))}`;
         typing1 = [3];
         bangh[`${heartK}`] = window_0x.size;
         window_0x = new Map([[`${bangh.size}`, window_0x.size]]);
         heartK /= Math.max(window_0x.size, 5);
      }
      noded = `${mintegralc.length + 3}`;
   }
   while (u_imageO <= 3.26) {
      u_imageO *= (String.fromCharCode(83,0) == noded ? ccdfbdabcabbbedbH.length : noded.length);
      break;
   }
   for (let d = 0; d < 1; d++) {
       let megaphoneI = String.fromCharCode(107,95,50,56,95,110,101,97,114,0);
       let regengX = [16, 129];
       let libtobD = 1.0;
      if (regengX.length < parseInt(`${libtobD}`)) {
         regengX = [regengX.length];
      }
         libtobD *= parseFloat(`${parseInt(`${libtobD}`)}`);
      for (let e = 0; e < 1; e++) {
         regengX.push(regengX.length << (Math.min(Math.abs(3), 3)));
      }
      for (let o = 0; o < 3; o++) {
          let orangeE = 1.0;
          let pingW = 1.0;
          let homeinactiveh = 2.0;
          let iconbellactiveO = 2.0;
         megaphoneI += `${megaphoneI.length + 2}`;
         orangeE *= parseFloat(`${3}`);
         pingW += parseFloat(`${1}`);
         homeinactiveh /= Math.max(5, 3 / (Math.max(1, parseInt(`${homeinactiveh}`))));
         iconbellactiveO *= parseInt(`${homeinactiveh}`);
      }
          let zoom9 = 2;
          let moong = [178, 590, 206];
          let sliderh = true;
         regengX = [zoom9 | 3];
         zoom9 += moong.length;
         moong = [(moong.length + (sliderh ? 4 : 5))];
         libtobD *= parseFloat(`${parseInt(`${libtobD}`) - 2}`);
      do {
         regengX.push(megaphoneI.length - 1);
         if (3551842 == regengX.length) {
            break;
         }
      } while ((!regengX.includes(libtobD)) && (3551842 == regengX.length));
          let bottomU = 5.0;
          let cornershooth = String.fromCharCode(99,95,51,57,95,114,103,98,105,0);
         regengX = [cornershooth.length];
         bottomU += parseInt(`${bottomU}`);
         cornershooth += `${parseInt(`${bottomU}`) >> (Math.min(5, Math.abs(3)))}`;
          let playS = [146, 504, 460];
          let bgvipsport7 = 3;
          let iconeyex = [257, 932, 908];
         regengX = [playS.length];
         playS.push(bgvipsport7 << (Math.min(5, Math.abs(2))));
         bgvipsport7 += iconeyex.length / 3;
         iconeyex.push(3 | bgvipsport7);
      noded += `${parseInt(`${u_imageO}`) - 1}`;
   }
   do {
      executorH += `${mintegralc.length}`;
      if (executorH == String.fromCharCode(103,116,105,49,112,106,0)) {
         break;
      }
   } while ((executorH == String.fromCharCode(103,116,105,49,112,106,0)) && (3 > giflivestreamingh.length));
   if (5 > (3 << (Math.min(2, noded.length))) && (noded.length - u_imageO) > 2.62) {
      noded = `${giflivestreamingh.length ^ redcirclebg0.size}`;
   }
   while ((iconmegaphoneW.length * u_imageO) <= 3.27 && (3.27 * u_imageO) <= 3.82) {
      iconmegaphoneW += `${executorH.length}`;
      break;
   }

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
       let modulesU = false;
    let basketballdetailsbgW = 4.0;
    let teamh = String.fromCharCode(115,105,103,115,108,111,116,95,118,95,57,50,0);
    let yellowanimationliveU = true;
    let manifest6 = new Map([[String.fromCharCode(112,95,54,49,95,97,100,103,114,111,117,112,0),229], [String.fromCharCode(102,111,117,114,99,99,95,115,95,53,53,0),326]]);
    let baselinel = true;
    let turnU = String.fromCharCode(100,98,105,115,95,54,95,51,55,0);
    let tumbnailj = 5;
    let iconnewssharey = [String.fromCharCode(121,95,54,55,95,97,108,108,111,119,101,100,0), String.fromCharCode(112,95,51,51,95,114,101,115,117,109,101,0), String.fromCharCode(97,108,112,104,97,95,117,95,53,53,0)];
    let profileinactiveI = String.fromCharCode(106,95,52,55,95,99,111,109,98,105,110,97,116,111,114,0);
    let watchl = true;
    let anytimeh = String.fromCharCode(118,111,105,99,101,115,95,53,95,52,56,0);
    let pathI = 5.0;
    let controls4 = 2;
      basketballdetailsbgW *= parseFloat(`${2 + turnU.length}`);
       let runtimescheduler2 = new Map([[String.fromCharCode(118,95,49,51,95,98,97,115,105,99,0),String.fromCharCode(113,95,54,52,0)], [String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,95,103,95,54,57,0),String.fromCharCode(114,101,118,111,107,97,98,108,101,95,51,95,49,56,0)]]);
       let frame_2zK = 1;
       let shareblack6 = 5.0;
      do {
         frame_2zK += parseInt(`${shareblack6}`) << (Math.min(Math.abs(2), 4));
         if (545657 == frame_2zK) {
            break;
         }
      } while ((frame_2zK > 2) && (545657 == frame_2zK));
          let playlistT = String.fromCharCode(110,111,116,105,102,105,101,114,95,99,95,55,51,0);
          let minig = String.fromCharCode(115,95,53,57,95,108,111,103,111,117,116,0);
         shareblack6 /= Math.max(parseFloat(`${parseInt(`${shareblack6}`)}`), 2);
         playlistT += `${playlistT.length & 1}`;
         minig = `${minig.length}`;
      do {
         runtimescheduler2 = new Map([[`${shareblack6}`, 3 * frame_2zK]]);
         if (2629167 == runtimescheduler2.size) {
            break;
         }
      } while ((2629167 == runtimescheduler2.size) && ((runtimescheduler2.size >> (Math.min(1, Math.abs(frame_2zK)))) == 4 && (frame_2zK >> (Math.min(Math.abs(4), 3))) == 4));
       let libhermesA = 2.0;
       let connectionG = 5.0;
       let read5 = [528, 722];
       let buttonP = [770, 228, 750];
      if (runtimescheduler2[`${shareblack6}`] != null) {
         runtimescheduler2 = new Map([[`${read5.length}`, read5.length % 3]]);
      }
      for (let l = 0; l < 1; l++) {
         shareblack6 -= parseFloat(`${2}`);
      }
         read5 = [3 - frame_2zK];
      while (buttonP.includes(libhermesA)) {
         libhermesA += 2 / (Math.max(5, read5.length));
         break;
      }
      iconnewssharey = [runtimescheduler2.size | 1];
       let defaultprofilepic0 = false;
       let predictionwink = String.fromCharCode(109,111,117,115,95,97,95,56,50,0);
       let libfbP = String.fromCharCode(115,109,118,106,112,101,103,95,98,95,50,55,0);
      while (1 < predictionwink.length && libfbP != String.fromCharCode(82,0)) {
         predictionwink += `${1 - predictionwink.length}`;
         break;
      }
       let castw = [580, 743, 228];
       let subss = [346, 383, 730];
          let topicA = 4;
          let rncoreF = [669, 561];
         castw = [castw.length];
         topicA %= Math.max(2 / (Math.max(topicA, 1)), 1);
         rncoreF = [rncoreF.length];
         subss.push(subss.length);
      for (let k = 0; k < 3; k++) {
          let gmailD = false;
          let dropdown8 = [385, 47];
          let gmail1 = 5.0;
          let modeQ = true;
         defaultprofilepic0 = castw.length < 79;
         gmailD = gmailD || dropdown8.length == 85;
         dropdown8 = [((gmailD ? 4 : 4) & parseInt(`${gmail1}`))];
         gmail1 -= ((modeQ ? 3 : 2));
         modeQ = (((modeQ ? dropdown8.length : 98) + dropdown8.length) > 98);
      }
       let templateprocessorc = 0.0;
       let toponu = 5.0;
      while (!defaultprofilepic0 || 5.83 == (4.83 - templateprocessorc)) {
         defaultprofilepic0 = 4 <= subss.length || templateprocessorc <= 29.46;
         break;
      }
      while (!subss.includes(toponu)) {
         subss = [(String.fromCharCode(111,0) == predictionwink ? castw.length : predictionwink.length)];
         break;
      }
          let j_view8 = String.fromCharCode(117,95,49,54,95,103,101,110,101,114,97,116,101,100,0);
         subss.push((libfbP == String.fromCharCode(90,0) ? libfbP.length : (defaultprofilepic0 ? 5 : 3)));
         j_view8 += `${j_view8.length}`;
      manifest6 = new Map([[predictionwink, predictionwink.length]]);
       let x_hashi = String.fromCharCode(109,95,51,55,95,97,118,120,115,121,110,116,104,0);
       let update_c47 = String.fromCharCode(103,114,101,121,115,95,119,95,57,51,0);
      do {
         update_c47 = `${update_c47.length | x_hashi.length}`;
         if (update_c47.length == 2532104) {
            break;
         }
      } while ((update_c47.length == 2532104) && (update_c47 != String.fromCharCode(74,0) && x_hashi == String.fromCharCode(72,0)));
         update_c47 += `${1 >> (Math.min(2, update_c47.length))}`;
      for (let i = 0; i < 1; i++) {
         update_c47 += "2";
      }
      if (x_hashi != String.fromCharCode(107,0) || update_c47.length == 3) {
          let libfileV = String.fromCharCode(119,95,53,48,95,109,101,116,104,111,100,0);
          let notificationfilledj = [String.fromCharCode(110,111,109,105,110,97,108,95,57,95,52,55,0), String.fromCharCode(114,95,57,95,112,111,119,116,97,98,108,101,0)];
          let gradlewL = String.fromCharCode(97,95,50,49,95,99,111,110,110,101,99,116,101,100,0);
         x_hashi = `${x_hashi.length - 1}`;
         libfileV += `${(libfileV == String.fromCharCode(74,0) ? libfileV.length : notificationfilledj.length)}`;
         notificationfilledj = [gradlewL.length & 3];
         gradlewL = `${libfileV.length}`;
      }
          let loadingspinnerD = 0.0;
          let shrinkO = new Map([[String.fromCharCode(116,95,55,48,95,109,101,100,105,97,115,0),String.fromCharCode(103,101,111,116,97,103,115,95,121,95,54,0)], [String.fromCharCode(101,95,54,95,102,101,116,99,104,101,100,0),String.fromCharCode(99,104,97,112,116,101,114,115,95,118,95,52,55,0)], [String.fromCharCode(103,95,54,48,95,111,99,116,112,111,105,110,116,0),String.fromCharCode(115,116,111,114,101,102,114,97,109,101,95,112,95,50,56,0)]]);
          let activityg = 4.0;
         update_c47 += `${parseInt(`${loadingspinnerD}`) ^ 3}`;
         loadingspinnerD /= Math.max(shrinkO.size, 4);
         shrinkO = new Map([[`${shrinkO.size}`, parseInt(`${activityg}`)]]);
         activityg *= parseFloat(`${1}`);
          let fullscreenmaxH = String.fromCharCode(101,95,52,56,95,97,100,109,105,110,0);
         x_hashi = `${3 - update_c47.length}`;
         fullscreenmaxH += `${1 - fullscreenmaxH.length}`;
      teamh += `${(1 ^ (watchl ? 3 : 4))}`;
   if (tumbnailj == teamh.length) {
      tumbnailj |= parseInt(`${basketballdetailsbgW}`);
   }
   if (turnU.startsWith(`${watchl}`)) {
       let progressj = String.fromCharCode(115,117,110,118,101,114,95,51,95,49,49,0);
       let imageactionliveY = 4.0;
       let gpayH = 4.0;
      while (gpayH == imageactionliveY) {
         gpayH -= parseFloat(`${parseInt(`${imageactionliveY}`)}`);
         break;
      }
         gpayH *= parseFloat(`${progressj.length ^ parseInt(`${gpayH}`)}`);
      do {
         gpayH *= parseFloat(`${parseInt(`${imageactionliveY}`) - parseInt(`${gpayH}`)}`);
         if (gpayH == 628615.0) {
            break;
         }
      } while ((gpayH == 628615.0) && (gpayH <= 3.69));
      while ((progressj.length * imageactionliveY) < 1.24 || 4 < (1 ^ progressj.length)) {
          let crownB = 3;
          let defaultteamq = String.fromCharCode(99,114,101,97,116,101,95,102,95,56,49,0);
          let sliderO = String.fromCharCode(118,112,114,105,110,116,102,95,99,95,53,53,0);
          let recommendation5 = String.fromCharCode(112,111,111,108,115,95,101,95,57,56,0);
          let holderH = 0.0;
         imageactionliveY /= Math.max(recommendation5.length, 5);
         crownB >>= Math.min(2, Math.abs(parseInt(`${holderH}`) | 1));
         defaultteamq = `${2 * defaultteamq.length}`;
         sliderO = `${sliderO.length}`;
         recommendation5 += `${defaultteamq.length}`;
         holderH += 3 % (Math.max(6, sliderO.length));
         break;
      }
      do {
          let iconsettings = 5.0;
          let clear8 = 1;
          let singleB = String.fromCharCode(116,114,97,102,95,100,95,52,54,0);
         progressj = `${(singleB == String.fromCharCode(74,0) ? clear8 : singleB.length)}`;
         iconsettings -= parseInt(`${iconsettings}`);
         clear8 /= Math.max(1 >> (Math.min(Math.abs(parseInt(`${iconsettings}`)), 2)), 3);
         if (1256959 == progressj.length) {
            break;
         }
      } while ((1256959 == progressj.length) && (progressj.length == parseInt(`${imageactionliveY}`)));
       let loadingS = 1;
         imageactionliveY -= 1;
       let rounds = [String.fromCharCode(106,95,57,51,95,111,98,106,99,0), String.fromCharCode(105,100,105,111,109,95,105,95,49,50,0), String.fromCharCode(114,103,98,97,121,99,111,99,103,95,49,95,49,55,0)];
       let icontransferclubt = [String.fromCharCode(110,95,49,55,95,121,101,108,108,111,119,0), String.fromCharCode(120,95,54,57,95,102,105,102,97,0)];
      if ((rounds.length | 1) == 1 && (loadingS | rounds.length) == 1) {
         loadingS &= rounds.length & parseInt(`${gpayH}`);
      }
      turnU += `${((baselinel ? 5 : 4) & profileinactiveI.length)}`;
   }
      manifest6 = new Map([[`${basketballdetailsbgW}`, (turnU == String.fromCharCode(103,0) ? turnU.length : parseInt(`${basketballdetailsbgW}`))]]);
      profileinactiveI = `${iconnewssharey.length}`;
   if (!turnU.startsWith(`${baselinel}`)) {
      turnU = `${((watchl ? 4 : 4))}`;
   }
   while (5 == (tumbnailj | 5) || 5 == tumbnailj) {
      tumbnailj += tumbnailj >> (Math.min(iconnewssharey.length, 1));
      break;
   }
      teamh += `${(parseInt(`${basketballdetailsbgW}`) << (Math.min(1, Math.abs((yellowanimationliveU ? 1 : 2)))))}`;

    const percent = this.state.currentTime / this.state.duration;
    return this.player.seekerWidth * percent;
   for (let w = 0; w < 3; w++) {
      teamh += "2";
   }
   do {
      profileinactiveI += `${teamh.length}`;
      if (profileinactiveI == String.fromCharCode(50,57,119,0)) {
         break;
      }
   } while ((modulesU && profileinactiveI.length > 5) && (profileinactiveI == String.fromCharCode(50,57,119,0)));
      baselinel = String.fromCharCode(103,0) == profileinactiveI;
      yellowanimationliveU = profileinactiveI.length > 72;
      yellowanimationliveU = !baselinel;
   if (!yellowanimationliveU && teamh.length < 2) {
      teamh += `${1 << (Math.min(Math.abs(parseInt(`${basketballdetailsbgW}`)), 3))}`;
   }
       let basketballplayerplaceholderG = false;
       let ncopy_9xq = String.fromCharCode(110,97,109,101,115,101,114,118,101,114,95,97,95,52,53,0);
       let l_countk = String.fromCharCode(108,95,52,54,95,108,105,115,116,115,0);
      while (4 < ncopy_9xq.length) {
         ncopy_9xq = "3";
         break;
      }
         ncopy_9xq += `${l_countk.length / 3}`;
      for (let o = 0; o < 3; o++) {
         ncopy_9xq += `${l_countk.length * 1}`;
      }
          let r_player6 = new Map([[String.fromCharCode(98,95,53,54,95,108,105,98,115,112,101,101,120,0),String.fromCharCode(100,101,99,114,101,102,95,111,95,56,57,0)], [String.fromCharCode(114,101,109,111,118,101,95,116,95,54,51,0),String.fromCharCode(115,101,116,116,105,110,103,95,120,95,55,50,0)], [String.fromCharCode(106,95,53,48,95,100,101,112,101,110,100,0),String.fromCharCode(114,95,57,54,95,114,101,97,100,115,0)]]);
          let setting0 = String.fromCharCode(104,95,57,0);
         ncopy_9xq = "2";
         r_player6 = new Map([[`${r_player6.size}`, 3]]);
         setting0 = `${setting0.length}`;
         l_countk = "1";
       let photoU = [205, 546];
          let photoK = true;
         basketballplayerplaceholderG = ncopy_9xq.length == l_countk.length;
         photoK = !photoK;
       let iconeyes = String.fromCharCode(109,97,105,110,110,101,116,115,95,55,95,50,52,0);
      for (let t = 0; t < 2; t++) {
         ncopy_9xq = `${photoU.length / (Math.max(2, 5))}`;
      }
      basketballdetailsbgW += parseFloat(`${manifest6.size + profileinactiveI.length}`);
      manifest6[teamh] = 2;
      teamh += `${profileinactiveI.length}`;
       let confirmationY = true;
       let typesJ = false;
      for (let m = 0; m < 1; m++) {
         confirmationY = (confirmationY ? typesJ : !confirmationY);
      }
      do {
         typesJ = confirmationY && !typesJ;
         if (typesJ ? !typesJ : typesJ) {
            break;
         }
      } while ((typesJ ? !typesJ : typesJ) && (!confirmationY));
          let calendari = String.fromCharCode(117,95,55,56,95,99,111,118,101,114,105,110,103,0);
          let mergerL = String.fromCharCode(115,116,111,114,121,98,111,97,114,100,95,55,95,52,0);
         confirmationY = mergerL.length == 95;
         calendari = `${3 | calendari.length}`;
         mergerL += `${calendari.length << (Math.min(2, calendari.length))}`;
         confirmationY = (confirmationY ? typesJ : confirmationY);
      for (let p = 0; p < 3; p++) {
         typesJ = (typesJ ? confirmationY : typesJ);
      }
          let middlebrightnessy = new Map([[String.fromCharCode(112,105,99,107,109,111,100,101,95,107,95,52,57,0),563], [String.fromCharCode(97,117,116,111,114,101,103,114,101,115,115,105,111,110,95,100,95,52,0),460]]);
          let eact2 = String.fromCharCode(106,95,57,50,95,115,99,104,101,100,117,108,101,0);
         typesJ = eact2.length == 98;
         middlebrightnessy = new Map([[`${middlebrightnessy.size}`, 3 & middlebrightnessy.size]]);
         eact2 = `${middlebrightnessy.size}`;
      modulesU = teamh.length < 48;
   if (watchl) {
       let elementsg = 0.0;
      do {
          let imagenetworkerr4 = 5.0;
          let chatroombackgroundj = 2.0;
          let mimen = 3.0;
          let predictionarrowT = 2;
          let canvasL = String.fromCharCode(116,95,53,57,95,114,101,112,111,0);
         elementsg /= Math.max(3, 3 - parseInt(`${mimen}`));
         imagenetworkerr4 /= Math.max(parseFloat(`${canvasL.length + parseInt(`${chatroombackgroundj}`)}`), 1);
         chatroombackgroundj -= 2;
         mimen += parseInt(`${imagenetworkerr4}`) % (Math.max(canvasL.length, 2));
         predictionarrowT &= (String.fromCharCode(80,0) == canvasL ? canvasL.length : parseInt(`${chatroombackgroundj}`));
         if (2485233.0 == elementsg) {
            break;
         }
      } while ((4.3 <= (elementsg + 4.31) && 5.76 <= (elementsg + 4.31)) && (2485233.0 == elementsg));
      do {
         elementsg *= parseInt(`${elementsg}`);
         if (elementsg == 1824018.0) {
            break;
         }
      } while ((elementsg == 1824018.0) && ((2.55 - elementsg) <= 1.88 && (elementsg - 2.55) <= 2.87));
          let gifgoall = 3.0;
         elementsg /= Math.max(4, parseInt(`${elementsg}`) >> (Math.min(3, Math.abs(3))));
         gifgoall *= parseFloat(`${parseInt(`${gifgoall}`)}`);
      watchl = 63.25 < elementsg;
   }

  }

   
  calculateTimeFromSeekerPosition() {
       let historym = String.fromCharCode(112,115,110,114,95,112,95,50,56,0);
    let linkh = new Map([[String.fromCharCode(106,95,49,54,95,100,114,111,112,111,102,102,0),941], [String.fromCharCode(97,99,99,101,115,115,105,98,105,108,105,116,121,95,110,95,48,0),196]]);
    let mimof = String.fromCharCode(102,95,54,56,95,117,110,97,108,105,103,110,0);
    let policyL = new Map([[String.fromCharCode(101,120,112,105,114,105,110,103,95,120,95,57,50,0),788], [String.fromCharCode(105,110,117,115,101,95,112,95,55,52,0),328]]);
    let entryG = String.fromCharCode(112,95,54,52,95,114,101,113,117,101,115,116,105,110,103,0);
    let splashr = String.fromCharCode(99,108,97,117,115,101,115,95,51,95,52,49,0);
    let controlZ = 1.0;
    let downloadp = false;
    let models3 = 5.0;
    let stylesx = 5.0;
    let arrowj = 3.0;
    let leagueW = new Map([[String.fromCharCode(116,95,51,57,95,99,111,109,112,97,110,121,0),true ], [String.fromCharCode(105,100,119,116,95,57,95,52,50,0),false ]]);
    let configy = new Map([[String.fromCharCode(110,95,57,49,95,114,101,99,97,108,99,117,108,97,116,101,0),String.fromCharCode(114,101,115,104,97,112,101,95,111,95,55,50,0)], [String.fromCharCode(114,97,105,115,101,95,100,95,55,54,0),String.fromCharCode(119,95,55,52,95,112,107,116,104,100,114,0)]]);
    let iconpipexpandq = new Map([[String.fromCharCode(120,95,55,55,95,117,110,98,108,111,99,107,105,110,103,0),190], [String.fromCharCode(113,95,51,50,95,100,101,99,111,100,101,0),697]]);
    let moon5 = true;
    let code6 = String.fromCharCode(104,95,49,50,95,98,114,111,119,110,0);
      models3 /= Math.max(5, parseFloat(`${2 & entryG.length}`));
   while ((linkh.size - 4) < 5) {
      linkh = new Map([[`${stylesx}`, (entryG == String.fromCharCode(74,0) ? parseInt(`${stylesx}`) : entryG.length)]]);
      break;
   }
      linkh[`${models3}`] = 3 + parseInt(`${models3}`);
   for (let w = 0; w < 1; w++) {
      policyL[`${arrowj}`] = 3;
   }
       let guideS = 4.0;
       let actionsq = true;
       let actionsO = String.fromCharCode(105,110,100,101,110,116,95,114,95,57,52,0);
          let textN = 3.0;
         guideS += parseInt(`${guideS}`) % 3;
         textN *= 2;
      while (actionsO.includes(`${guideS}`)) {
         guideS -= 3 | parseInt(`${guideS}`);
         break;
      }
      for (let x = 0; x < 3; x++) {
         actionsO = `${((actionsq ? 1 : 5) & actionsO.length)}`;
      }
          let hometeamfieldz = 4;
          let backwardI = 1;
          let logouseru = 2;
         actionsq = !actionsq && actionsO.length > 73;
         hometeamfieldz >>= Math.min(1, Math.abs(1 << (Math.min(3, Math.abs(hometeamfieldz)))));
         backwardI &= logouseru << (Math.min(Math.abs(2), 4));
         logouseru >>= Math.min(2, Math.abs(3 + logouseru));
      for (let g = 0; g < 2; g++) {
         actionsO += `${parseInt(`${guideS}`) >> (Math.min(5, Math.abs(1)))}`;
      }
       let backicony = [649, 918];
       let tempnodatagif_ = [557, 6];
         backicony.push(backicony.length);
         guideS -= 3;
          let cornerkickH = [String.fromCharCode(103,95,56,48,95,116,111,111,98,105,103,0), String.fromCharCode(112,97,110,111,114,97,109,97,95,103,95,49,51,0), String.fromCharCode(120,95,49,48,48,95,104,97,110,103,117,112,0)];
          let launchC = 4.0;
         guideS /= Math.max(5, parseInt(`${launchC}`));
         cornerkickH = [1 % (Math.max(3, cornerkickH.length))];
         launchC /= Math.max(cornerkickH.length, 2);
      stylesx -= parseInt(`${arrowj}`);
   if ((splashr.length % 1) >= 1) {
      splashr += `${parseInt(`${models3}`) + entryG.length}`;
   }
      models3 += parseFloat(`${linkh.size * parseInt(`${stylesx}`)}`);
   while (3.59 <= (arrowj - 4.65) || 3 <= (parseInt(`${arrowj}`) - leagueW.size)) {
      leagueW = new Map([[`${leagueW.size}`, parseInt(`${models3}`) - 3]]);
      break;
   }
      controlZ /= Math.max(1, parseFloat(`${2}`));
   if ((stylesx / (Math.max(2.57, 1))) == 5.91 && 4.73 == (stylesx / (Math.max(2.57, 2)))) {
       let libreactK = String.fromCharCode(119,95,56,48,95,98,111,117,110,100,105,110,103,0);
       let completeE = [175, 712, 783];
       let philippinesX = 2.0;
          let icondownimgd = new Map([[String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,100,95,48,95,57,49,0),796], [String.fromCharCode(108,111,99,97,116,101,100,95,106,95,52,48,0),63], [String.fromCharCode(115,116,115,100,95,102,95,57,48,0),103]]);
          let description_pC = String.fromCharCode(102,105,114,101,95,54,95,57,49,0);
         completeE = [(String.fromCharCode(52,0) == libreactK ? parseInt(`${philippinesX}`) : libreactK.length)];
         icondownimgd[`${description_pC}`] = icondownimgd.size;
         description_pC += `${icondownimgd.size}`;
          let const_weq = 3.0;
          let goal6 = false;
         completeE.push(completeE.length % (Math.max(3, 2)));
         const_weq += parseInt(`${const_weq}`);
         goal6 = const_weq == 48.64;
      if (philippinesX <= 2.8) {
         philippinesX -= parseFloat(`${1}`);
      }
          let placeholdere = String.fromCharCode(99,95,56,53,95,97,117,116,111,97,114,99,104,105,118,101,0);
          let phonesharem = 5.0;
         libreactK = "2";
         placeholdere += `${(String.fromCharCode(99,0) == placeholdere ? placeholdere.length : parseInt(`${phonesharem}`))}`;
         phonesharem *= parseFloat(`${3}`);
         philippinesX /= Math.max(parseFloat(`${parseInt(`${philippinesX}`) / 2}`), 1);
      linkh = new Map([[mimof, ((downloadp ? 3 : 5) / 1)]]);
   }
      leagueW[`${stylesx}`] = 1 | leagueW.size;
       let strz = String.fromCharCode(116,105,109,101,111,117,116,95,117,95,53,56,0);
       let iconchatsendL = 4.0;
      if (iconchatsendL == 2.58) {
         strz += "2";
      }
      for (let c = 0; c < 2; c++) {
          let baiduT = String.fromCharCode(103,95,50,55,95,101,103,117,108,97,114,0);
          let forwardm = true;
          let roomQ = String.fromCharCode(99,104,101,99,107,95,98,95,55,49,0);
         iconchatsendL += (parseFloat(`${(forwardm ? 3 : 2) / 1}`));
         baiduT = `${baiduT.length}`;
         forwardm = String.fromCharCode(71,0) == roomQ;
         roomQ += `${baiduT.length}`;
      }
          let point2 = 3.0;
          let viewerB = 0.0;
         iconchatsendL += parseFloat(`${parseInt(`${point2}`)}`);
         viewerB /= Math.max(3, parseFloat(`${1 / (Math.max(6, parseInt(`${viewerB}`)))}`));
      for (let g = 0; g < 3; g++) {
          let upgradeR = 2.0;
          let default_6C = 4.0;
          let arear = [String.fromCharCode(112,108,97,110,97,114,116,111,117,121,118,121,95,121,95,55,51,0), String.fromCharCode(97,116,116,114,105,98,117,116,101,115,95,104,95,53,48,0)];
          let yellowvideoliveh = [950, 867, 930];
          let subbasketballplayer1 = [String.fromCharCode(113,95,49,49,95,117,108,112,102,101,99,0), String.fromCharCode(97,115,115,111,99,105,97,116,101,95,50,95,53,54,0)];
         iconchatsendL += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${default_6C}`)), 1))}`);
         upgradeR += yellowvideoliveh.length;
         default_6C += parseFloat(`${yellowvideoliveh.length}`);
         arear.push(parseInt(`${upgradeR}`) + yellowvideoliveh.length);
         subbasketballplayer1.push(1);
      }
      for (let f = 0; f < 1; f++) {
          let ajaxo = 0.0;
          let eact4 = 4.0;
          let smallorangemanA = new Map([[String.fromCharCode(105,95,51,55,95,97,112,112,101,110,100,99,104,97,114,0),518], [String.fromCharCode(108,122,111,120,95,115,95,50,48,0),441], [String.fromCharCode(116,95,57,49,95,110,111,100,101,115,0),168]]);
          let rulest = String.fromCharCode(99,111,108,114,97,109,95,120,95,55,57,0);
         strz += `${smallorangemanA.size}`;
         ajaxo += parseInt(`${eact4}`) << (Math.min(3, Math.abs(1)));
         eact4 += rulest.length << (Math.min(Math.abs(1), 5));
         smallorangemanA = new Map([[rulest, 2 / (Math.max(4, parseInt(`${eact4}`)))]]);
      }
      do {
         iconchatsendL *= parseFloat(`${parseInt(`${iconchatsendL}`) / (Math.max(3, 1))}`);
         if (iconchatsendL == 3389006.0) {
            break;
         }
      } while ((iconchatsendL >= 2.41) && (iconchatsendL == 3389006.0));
      models3 /= Math.max(parseFloat(`${parseInt(`${controlZ}`) % (Math.max(6, historym.length))}`), 3);

    const percent = this.state.seekerPosition / this.player.seekerWidth;
    return this.state.duration * percent;
   if (linkh[`${controlZ}`] != null) {
      linkh = new Map([[`${policyL.size}`, mimof.length / (Math.max(3, policyL.size))]]);
   }
      arrowj /= Math.max(parseFloat(`${3 ^ policyL.size}`), 3);
   while (!entryG.startsWith(`${policyL.size}`)) {
      policyL = new Map([[`${policyL.size}`, policyL.size]]);
      break;
   }
   for (let t = 0; t < 1; t++) {
       let libffmpegkitb = String.fromCharCode(114,102,112,115,95,102,95,54,0);
       let libreactnativeblobI = new Map([[String.fromCharCode(98,95,56,52,95,99,97,110,99,101,108,97,116,105,111,110,0),true ], [String.fromCharCode(103,95,55,56,95,97,112,112,101,97,114,97,110,99,101,0),true ], [String.fromCharCode(118,99,104,113,95,57,95,56,53,0),true ]]);
      while ((libffmpegkitb.length & libreactnativeblobI.size) >= 1) {
         libreactnativeblobI[`${libffmpegkitb}`] = (libffmpegkitb == String.fromCharCode(115,0) ? libffmpegkitb.length : libreactnativeblobI.size);
         break;
      }
          let airbnbstarO = String.fromCharCode(117,100,112,108,105,116,101,95,50,95,54,49,0);
          let predictionbanner2 = 3.0;
          let greenarrowupH = new Map([[String.fromCharCode(97,100,111,98,101,95,50,95,50,51,0),668], [String.fromCharCode(108,105,109,105,116,97,116,105,111,110,95,120,95,55,51,0),925]]);
         libreactnativeblobI = new Map([[`${greenarrowupH.size}`, libreactnativeblobI.size]]);
         airbnbstarO += "3";
         predictionbanner2 *= (airbnbstarO == String.fromCharCode(70,0) ? airbnbstarO.length : parseInt(`${predictionbanner2}`));
         greenarrowupH[airbnbstarO] = 1;
         libreactnativeblobI = new Map([[`${libreactnativeblobI.size}`, 3]]);
         libreactnativeblobI[`${libffmpegkitb}`] = libffmpegkitb.length % (Math.max(2, 5));
      while ((libreactnativeblobI.size << (Math.min(libffmpegkitb.length, 3))) >= 2 && 1 >= (2 << (Math.min(5, Math.abs(libreactnativeblobI.size))))) {
         libffmpegkitb = `${1 * libffmpegkitb.length}`;
         break;
      }
       let twitterA = [193, 656];
      leagueW[`${entryG}`] = (String.fromCharCode(51,0) == entryG ? configy.size : entryG.length);
   }
       let holderz = String.fromCharCode(114,101,99,118,95,52,95,56,51,0);
      if (!holderz.startsWith(`${holderz.length}`)) {
         holderz += `${holderz.length / 3}`;
      }
      while (holderz.endsWith(`${holderz.length}`)) {
         holderz = `${holderz.length}`;
         break;
      }
          let bell8 = false;
          let awayteamfieldw = [937, 672];
          let navigationu = String.fromCharCode(115,116,114,110,99,97,115,101,99,109,112,95,56,95,55,50,0);
         holderz = `${2 + awayteamfieldw.length}`;
         bell8 = 71 <= navigationu.length;
         awayteamfieldw = [navigationu.length];
      entryG = `${((downloadp ? 1 : 5) + leagueW.size)}`;
   do {
      stylesx -= leagueW.size;
      if (stylesx == 2194583.0) {
         break;
      }
   } while ((stylesx == 2194583.0) && (5.67 >= (stylesx - 3.46)));
       let iconsettingF = String.fromCharCode(102,95,55,54,95,102,97,120,99,111,109,112,114,0);
      for (let r = 0; r < 2; r++) {
         iconsettingF = `${iconsettingF.length ^ iconsettingF.length}`;
      }
      while (iconsettingF != iconsettingF) {
          let telegramB = new Map([[String.fromCharCode(99,95,56,51,95,98,105,110,107,97,117,100,105,111,0),String.fromCharCode(105,115,115,117,101,100,95,48,95,53,54,0)], [String.fromCharCode(119,95,50,56,95,112,114,101,115,101,110,116,101,100,0),String.fromCharCode(122,95,53,95,112,114,101,104,101,97,116,0)], [String.fromCharCode(119,95,53,49,95,117,110,115,99,97,108,101,100,0),String.fromCharCode(101,120,105,115,116,97,110,99,101,95,54,95,51,52,0)]]);
          let streamingI = String.fromCharCode(101,99,111,109,112,114,101,115,115,111,114,95,101,95,52,55,0);
          let resultL = String.fromCharCode(99,111,109,98,95,121,95,56,49,0);
          let imagesO = false;
          let mappingw = String.fromCharCode(110,95,49,49,95,112,97,116,99,104,115,101,116,0);
         iconsettingF += `${streamingI.length * 3}`;
         telegramB[mappingw] = telegramB.size;
         streamingI += "3";
         resultL += `${telegramB.size}`;
         mappingw = `${(mappingw.length % (Math.max(4, (imagesO ? 5 : 4))))}`;
         break;
      }
       let playlistJ = String.fromCharCode(108,95,50,53,95,101,120,112,101,99,116,115,0);
       let codegenR = String.fromCharCode(109,95,50,52,95,119,104,105,116,101,115,112,97,99,101,0);
      arrowj *= parseFloat(`${splashr.length}`);
      models3 /= Math.max(2, (parseFloat(`${String.fromCharCode(103,0) == mimof ? mimof.length : policyL.size}`)));
   for (let x = 0; x < 2; x++) {
      historym = `${((downloadp ? 1 : 1) / 2)}`;
   }
   do {
      configy = new Map([[`${leagueW.size}`, 3]]);
      if (4437271 == configy.size) {
         break;
      }
   } while ((controlZ == 4.87) && (4437271 == configy.size));
      policyL[`${historym}`] = iconpipexpandq.size;
   do {
       let searchB = String.fromCharCode(117,95,52,53,95,102,117,100,103,101,0);
       let iconbackwhiteZ = true;
       let filledI = String.fromCharCode(110,95,51,55,95,115,101,97,108,101,100,0);
       let annery = 2.0;
       let membership3 = 2.0;
          let whitevideolivel = true;
          let mbjscommonf = 4.0;
          let activityj = String.fromCharCode(103,111,112,104,101,114,95,120,95,54,56,0);
         annery -= searchB.length;
         whitevideolivel = !whitevideolivel && 36.76 == mbjscommonf;
         mbjscommonf -= ((whitevideolivel ? 1 : 4) / (Math.max(parseInt(`${mbjscommonf}`), 8)));
         activityj = `${((whitevideolivel ? 3 : 1))}`;
          let questk = 1.0;
         iconbackwhiteZ = (66 == (searchB.length >> (Math.min(1, Math.abs((!iconbackwhiteZ ? searchB.length : 66))))));
         questk += parseInt(`${questk}`) << (Math.min(1, Math.abs(2)));
          let weibor = 2;
          let benefit2 = [896, 405];
         membership3 -= parseFloat(`${benefit2.length << (Math.min(Math.abs(3), 4))}`);
         weibor *= weibor + weibor;
         benefit2.push(3);
      for (let l = 0; l < 2; l++) {
          let overb = String.fromCharCode(102,95,54,53,95,114,101,103,105,115,116,101,114,101,100,0);
          let imagemanageri = 2.0;
         filledI = "1";
         overb = `${parseInt(`${imagemanageri}`)}`;
         imagemanageri += (parseFloat(`${String.fromCharCode(89,0) == overb ? overb.length : parseInt(`${imagemanageri}`)}`));
      }
       let shrunk2 = [String.fromCharCode(115,104,97,112,101,115,95,109,95,56,54,0), String.fromCharCode(100,95,54,55,95,102,105,110,0), String.fromCharCode(100,105,115,112,97,116,99,104,101,100,95,107,95,56,53,0)];
       let rewardvideoF = [951, 769, 470];
      if (3.63 <= annery) {
         iconbackwhiteZ = filledI == String.fromCharCode(48,0);
      }
      for (let x = 0; x < 3; x++) {
         annery += ((iconbackwhiteZ ? 1 : 2));
      }
      do {
          let shootB = String.fromCharCode(117,95,52,49,95,112,114,111,103,114,97,109,0);
          let historyT = 1;
          let textlayoutmanagerZ = new Map([[String.fromCharCode(112,95,49,57,95,112,103,109,120,0),99], [String.fromCharCode(98,105,116,114,118,99,111,110,106,95,53,95,56,54,0),254], [String.fromCharCode(103,95,50,52,95,98,101,103,117,110,0),307]]);
         shrunk2 = [rewardvideoF.length];
         shootB += `${3 << (Math.min(2, Math.abs(textlayoutmanagerZ.size)))}`;
         historyT %= Math.max(historyT - 1, 5);
         textlayoutmanagerZ[`${historyT}`] = textlayoutmanagerZ.size;
         if (shrunk2.length == 1124567) {
            break;
         }
      } while ((shrunk2.length == 1124567) && (4 > (parseInt(`${membership3}`) - shrunk2.length) || 3 > (4 | shrunk2.length)));
      while ((annery * 2.53) >= 3.29 && !iconbackwhiteZ) {
         annery += 2;
         break;
      }
         filledI = `${3 << (Math.min(Math.abs(parseInt(`${membership3}`)), 2))}`;
         membership3 *= parseFloat(`${2}`);
          let heartN = String.fromCharCode(107,95,49,51,95,116,101,110,115,105,111,110,0);
         rewardvideoF.push(searchB.length * filledI.length);
         heartN += `${3 + heartN.length}`;
      for (let k = 0; k < 2; k++) {
          let predictionbannersharedl = 0.0;
         rewardvideoF.push(2);
         predictionbannersharedl -= parseInt(`${predictionbannersharedl}`);
      }
      while (membership3 <= 5.15) {
         shrunk2.push(3);
         break;
      }
         rewardvideoF = [((iconbackwhiteZ ? 2 : 3) & filledI.length)];
      configy = new Map([[`${annery}`, 1]]);
      if (configy.size == 3156902) {
         break;
      }
   } while ((!Array.from(configy.values()).includes(leagueW.size)) && (configy.size == 3156902));

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
       let libhermesm = String.fromCharCode(98,95,54,50,95,102,105,108,101,112,97,116,104,0);
    let scrollview0 = 4.0;
    let bootsplashv = String.fromCharCode(120,95,54,54,95,107,101,121,104,97,115,104,0);
    let questE = 1;
    let halffieldimage8 = 4.0;
    let greya = [589, 374];
    let libfabricjniW = 2.0;
    let philippinesQ = 4.0;
    let predictionbannersharedC = String.fromCharCode(107,112,115,95,120,95,53,48,0);
    let main_xl = String.fromCharCode(100,105,115,116,114,97,99,116,105,111,110,95,111,95,49,51,0);
    let updatesX = [2, 49];
    let commonV = new Map([[String.fromCharCode(115,95,49,56,95,111,110,121,120,100,0),762], [String.fromCharCode(122,95,52,95,99,97,112,105,116,97,108,105,122,101,0),102]]);
   for (let m = 0; m < 1; m++) {
      questE /= Math.max(predictionbannersharedC.length - 1, 4);
   }
      libfabricjniW /= Math.max(4, 3 >> (Math.min(1, libhermesm.length)));
      halffieldimage8 -= parseInt(`${scrollview0}`);
       let imagemanagerD = String.fromCharCode(103,95,57,95,114,117,101,0);
       let renderr = new Map([[String.fromCharCode(103,114,97,112,104,113,108,95,121,95,54,54,0),String.fromCharCode(115,95,57,48,95,108,105,110,107,101,100,0)], [String.fromCharCode(122,95,50,51,95,116,101,116,114,97,104,101,100,114,97,108,0),String.fromCharCode(100,101,97,100,95,98,95,57,48,0)]]);
       let iconsaveimagec = String.fromCharCode(116,120,116,111,98,106,95,98,95,57,54,0);
         imagemanagerD += `${iconsaveimagec.length & 2}`;
      if (renderr.size >= imagemanagerD.length) {
          let minimize3 = String.fromCharCode(101,120,112,111,110,101,110,116,115,95,106,95,55,51,0);
          let basketballhometeamP = String.fromCharCode(98,95,53,53,95,105,110,100,105,110,103,0);
          let iconrightorangev = String.fromCharCode(114,95,55,57,95,101,110,104,97,110,99,101,0);
          let liveshareH = 2.0;
          let usernameg = 0.0;
         imagemanagerD = "2";
         minimize3 += `${parseInt(`${liveshareH}`)}`;
         basketballhometeamP += `${1 ^ minimize3.length}`;
         iconrightorangev = `${parseInt(`${liveshareH}`) / (Math.max(iconrightorangev.length, 2))}`;
         usernameg += 3;
      }
         renderr[`${imagemanagerD}`] = 2;
      if (5 >= (iconsaveimagec.length ^ 3)) {
          let videovark = String.fromCharCode(122,95,54,95,108,115,112,112,111,108,121,102,0);
          let animationsf = false;
          let o_managerV = String.fromCharCode(117,95,54,56,95,108,111,99,97,108,0);
          let gemfileb = 0;
          let defaultpredictionprofile2 = 5;
         renderr = new Map([[`${renderr.size}`, renderr.size]]);
         videovark += `${(String.fromCharCode(69,0) == o_managerV ? defaultpredictionprofile2 : o_managerV.length)}`;
         animationsf = 45 > o_managerV.length;
         gemfileb += ((animationsf ? 2 : 1));
         defaultpredictionprofile2 ^= 3 + gemfileb;
      }
         renderr[`${imagemanagerD}`] = (String.fromCharCode(116,0) == imagemanagerD ? renderr.size : imagemanagerD.length);
      if (3 >= (renderr.size + 4) || (renderr.size + imagemanagerD.length) >= 4) {
          let termsb = String.fromCharCode(113,95,50,52,95,99,104,117,110,107,0);
          let iconsaveimageO = 0;
          let clock4 = true;
          let mountingu = String.fromCharCode(103,108,111,98,97,108,115,95,119,95,57,55,0);
          let b_unlockC = 2.0;
         imagemanagerD += `${1 ^ parseInt(`${b_unlockC}`)}`;
         termsb = `${termsb.length << (Math.min(Math.abs(1), 4))}`;
         iconsaveimageO &= (String.fromCharCode(68,0) == termsb ? iconsaveimageO : termsb.length);
         clock4 = (iconsaveimageO << (Math.min(termsb.length, 3))) < 40;
         mountingu += `${((clock4 ? 5 : 5))}`;
         b_unlockC += (parseFloat(`${(clock4 ? 3 : 3) + 1}`));
      }
      while (4 == iconsaveimagec.length && 4 == imagemanagerD.length) {
         imagemanagerD += `${renderr.size % (Math.max(imagemanagerD.length, 7))}`;
         break;
      }
         renderr[`${imagemanagerD}`] = (imagemanagerD == String.fromCharCode(87,0) ? renderr.size : imagemanagerD.length);
          let mbbannery = [String.fromCharCode(99,111,110,110,105,110,112,117,116,95,98,95,49,54,0), String.fromCharCode(114,95,52,95,98,97,115,101,100,0)];
         renderr = new Map([[`${renderr.size}`, renderr.size]]);
         mbbannery = [mbbannery.length >> (Math.min(Math.abs(2), 2))];
      philippinesQ /= Math.max(5, renderr.size + imagemanagerD.length);
   while ((scrollview0 * greya.length) > 1.54) {
       let iconuserV = 4.0;
       let sortA = String.fromCharCode(98,114,97,110,99,104,95,114,95,55,51,0);
       let roomj = [826, 185, 902];
       let videocommonA = [19, 906];
       let mailE = String.fromCharCode(104,95,56,48,95,115,117,105,116,101,115,0);
      if (mailE.includes(sortA)) {
         mailE += "3";
      }
      if (mailE.length == 3) {
         iconuserV -= parseInt(`${iconuserV}`);
      }
         iconuserV += 1 / (Math.max(6, videocommonA.length));
       let orangeuparrowN = String.fromCharCode(107,95,57,49,95,97,97,97,97,0);
         mailE += `${videocommonA.length % (Math.max(orangeuparrowN.length, 10))}`;
       let backwhitez = 5.0;
       let emptyw = false;
          let pingO = String.fromCharCode(114,114,116,114,95,51,95,50,56,0);
          let backwhiteN = String.fromCharCode(112,114,101,102,105,120,95,117,95,56,50,0);
         videocommonA = [pingO.length + 2];
         pingO += `${3 << (Math.min(2, backwhiteN.length))}`;
         backwhiteN = `${backwhiteN.length >> (Math.min(Math.abs(3), 4))}`;
         videocommonA.push(3);
      for (let e = 0; e < 2; e++) {
         sortA = `${roomj.length}`;
      }
         emptyw = 86 == videocommonA.length;
      for (let r = 0; r < 3; r++) {
          let builda = false;
          let predictionbutton4 = new Map([[String.fromCharCode(108,95,52,51,95,115,112,97,114,115,101,0),325], [String.fromCharCode(115,121,110,99,112,111,105,110,116,95,105,95,49,48,48,0),761], [String.fromCharCode(119,100,101,99,95,109,95,50,53,0),525]]);
         iconuserV -= videocommonA.length;
         builda = predictionbutton4.size >= 8;
         predictionbutton4 = new Map([[`${predictionbutton4.size}`, ((builda ? 1 : 4) / 2)]]);
      }
          let l_imager = true;
          let nend0 = [String.fromCharCode(97,99,99,117,114,97,116,101,95,49,95,54,0), String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,115,95,52,95,51,48,0), String.fromCharCode(101,99,114,101,100,95,98,95,57,48,0)];
          let libbufferl = 0;
         orangeuparrowN += `${videocommonA.length % (Math.max(3, roomj.length))}`;
         l_imager = nend0.length < libbufferl;
         nend0 = [2 + nend0.length];
         libbufferl ^= 3;
      for (let e = 0; e < 1; e++) {
         videocommonA.push((String.fromCharCode(75,0) == sortA ? videocommonA.length : sortA.length));
      }
          let halffieldimage0 = [String.fromCharCode(99,97,99,104,101,100,107,101,121,115,95,102,95,57,52,0), String.fromCharCode(120,95,53,52,95,97,98,115,108,0)];
          let hongkongi = new Map([[String.fromCharCode(114,101,99,111,118,101,114,121,95,110,95,53,55,0),true ], [String.fromCharCode(99,97,110,99,101,108,101,100,95,117,95,50,56,0),false ], [String.fromCharCode(116,95,52,54,95,114,111,102,105,108,101,0),true ]]);
         emptyw = sortA.length >= 42 || videocommonA.length >= 42;
         halffieldimage0 = [halffieldimage0.length];
         hongkongi[`${halffieldimage0.length}`] = halffieldimage0.length >> (Math.min(2, Math.abs(hongkongi.size)));
      scrollview0 += parseInt(`${philippinesQ}`) | libhermesm.length;
      break;
   }
   while (libfabricjniW <= greya.length) {
      greya.push(parseInt(`${libfabricjniW}`) << (Math.min(4, Math.abs(3))));
      break;
   }
   for (let a = 0; a < 1; a++) {
      philippinesQ /= Math.max(3 + questE, 1);
   }
       let gemfileG = String.fromCharCode(116,119,105,100,100,108,101,95,115,95,56,49,0);
       let minimize5 = [284, 463];
       let combinedg = new Map([[String.fromCharCode(106,95,56,51,95,98,105,110,115,0),String.fromCharCode(98,105,103,110,117,109,95,117,95,52,55,0)], [String.fromCharCode(103,114,101,101,100,121,95,57,95,55,49,0),String.fromCharCode(103,114,97,112,104,113,108,95,105,95,53,0)]]);
      for (let w = 0; w < 1; w++) {
         minimize5 = [3];
      }
         minimize5.push(minimize5.length);
          let away3 = String.fromCharCode(114,101,102,112,97,115,115,95,53,95,48,0);
          let defaultfootballbgl = false;
         combinedg[gemfileG] = ((defaultfootballbgl ? 5 : 4));
         away3 += `${2 >> (Math.min(4, away3.length))}`;
         defaultfootballbgl = away3.length < 4;
       let libswresampleV = String.fromCharCode(112,97,121,108,111,97,100,115,95,122,95,55,51,0);
       let statisticsactivec = String.fromCharCode(101,95,51,48,0);
          let libturbomodulejsijni5 = new Map([[String.fromCharCode(97,100,100,95,120,95,53,56,0),169], [String.fromCharCode(101,120,108,117,100,101,100,95,118,95,57,55,0),968]]);
          let commentv = true;
          let eyeopenn = new Map([[String.fromCharCode(101,97,103,97,105,110,95,115,95,51,55,0),640], [String.fromCharCode(98,111,117,110,99,101,95,52,95,50,53,0),145], [String.fromCharCode(101,95,51,55,95,115,101,103,102,101,97,116,117,114,101,115,0),230]]);
         minimize5.push(1);
         libturbomodulejsijni5[`${commentv}`] = libturbomodulejsijni5.size / 3;
         eyeopenn[`${commentv}`] = 1;
      for (let v = 0; v < 1; v++) {
         gemfileG += `${gemfileG.length - 2}`;
      }
      for (let z = 0; z < 2; z++) {
         minimize5 = [statisticsactivec.length | libswresampleV.length];
      }
      do {
         gemfileG = `${combinedg.size}`;
         if (String.fromCharCode(99,51,109,106,54,99,0) == gemfileG) {
            break;
         }
      } while (((gemfileG.length + 1) == 1 || (gemfileG.length + minimize5.length) == 1) && (String.fromCharCode(99,51,109,106,54,99,0) == gemfileG));
         combinedg[gemfileG] = 2;
      halffieldimage8 -= 2;
       let predictionbannerF = 3.0;
       let dataN = String.fromCharCode(103,95,55,48,95,108,105,98,97,118,99,111,100,101,99,0);
          let middlebrightnessy = String.fromCharCode(112,95,55,56,95,97,116,99,104,101,114,0);
          let fast6 = 2.0;
         predictionbannerF += (String.fromCharCode(82,0) == dataN ? dataN.length : middlebrightnessy.length);
         middlebrightnessy += `${parseInt(`${fast6}`) | parseInt(`${fast6}`)}`;
       let hometeamfieldq = false;
          let expiredE = String.fromCharCode(115,95,53,50,95,105,110,116,101,103,114,97,108,0);
          let verticale = [250, 31];
         hometeamfieldq = 33 == dataN.length;
         expiredE = `${2 & verticale.length}`;
         verticale.push((expiredE == String.fromCharCode(86,0) ? expiredE.length : verticale.length));
      if (!hometeamfieldq) {
         predictionbannerF *= dataN.length + parseInt(`${predictionbannerF}`);
      }
         dataN = `${2 / (Math.max(parseInt(`${predictionbannerF}`), 6))}`;
      do {
         dataN += `${(parseInt(`${predictionbannerF}`) ^ (hometeamfieldq ? 1 : 1))}`;
         if (String.fromCharCode(113,48,53,108,0) == dataN) {
            break;
         }
      } while ((String.fromCharCode(113,48,53,108,0) == dataN) && (!dataN.includes(`${hometeamfieldq}`)));
      questE >>= Math.min(Math.abs(3), 1);
      philippinesQ -= 3;
   do {
       let favicon2 = new Map([[String.fromCharCode(105,109,112,108,95,99,95,53,50,0),40], [String.fromCharCode(119,105,114,101,102,114,97,109,101,95,103,95,49,55,0),835]]);
       let typingloadingR = 5.0;
       let humiditys = String.fromCharCode(114,95,55,55,95,116,101,120,116,117,114,101,100,115,112,0);
       let sentryg = String.fromCharCode(111,95,57,54,95,118,101,114,105,102,105,97,116,105,111,110,0);
      for (let j = 0; j < 3; j++) {
          let largebrightnessw = 2.0;
          let gift2 = String.fromCharCode(105,95,51,49,95,109,111,100,105,102,105,101,114,115,0);
          let datak = 3.0;
         favicon2 = new Map([[`${datak}`, (gift2 == String.fromCharCode(66,0) ? parseInt(`${datak}`) : gift2.length)]]);
         largebrightnessw -= parseFloat(`${3}`);
      }
         typingloadingR *= parseFloat(`${sentryg.length * 2}`);
      do {
         sentryg = `${(String.fromCharCode(90,0) == humiditys ? humiditys.length : sentryg.length)}`;
         if (String.fromCharCode(117,113,121,111,51,120,54,110,103,99,0) == sentryg) {
            break;
         }
      } while ((String.fromCharCode(117,113,121,111,51,120,54,110,103,99,0) == sentryg) && (sentryg.length == 3));
      if (!humiditys.startsWith(`${typingloadingR}`)) {
         humiditys += `${(String.fromCharCode(56,0) == sentryg ? favicon2.size : sentryg.length)}`;
      }
      for (let a = 0; a < 3; a++) {
         sentryg = `${favicon2.size}`;
      }
      for (let p = 0; p < 1; p++) {
         sentryg = `${humiditys.length}`;
      }
      for (let v = 0; v < 3; v++) {
         sentryg = `${3 << (Math.min(4, sentryg.length))}`;
      }
      do {
          let awayicony = 2;
          let homeicon_ = 4.0;
          let tempnodatagifY = true;
         humiditys += `${awayicony}`;
         awayicony += (parseInt(`${homeicon_}`) ^ (tempnodatagifY ? 5 : 5));
         homeicon_ /= Math.max(parseFloat(`${parseInt(`${homeicon_}`) * 1}`), 3);
         tempnodatagifY = 14.90 <= homeicon_;
         if (humiditys.length == 404242) {
            break;
         }
      } while (((humiditys.length * 4) < 5 && 4.26 < (typingloadingR / 3.62)) && (humiditys.length == 404242));
         favicon2[`${typingloadingR}`] = 2;
         sentryg += `${favicon2.size}`;
      for (let x = 0; x < 2; x++) {
         typingloadingR /= Math.max(4, parseFloat(`${2 & favicon2.size}`));
      }
      if ((humiditys.length << (Math.min(Math.abs(3), 1))) > 1 && (humiditys.length | 3) > 4) {
          let interstitialr = new Map([[String.fromCharCode(99,95,53,49,95,97,117,116,104,101,110,116,105,99,97,116,101,0),true ], [String.fromCharCode(120,95,55,57,95,100,101,116,97,99,104,101,100,0),true ]]);
          let libreactnativejniK = new Map([[String.fromCharCode(98,95,55,53,95,100,101,115,101,108,101,99,116,101,100,0),627], [String.fromCharCode(109,115,109,112,101,103,100,97,116,97,95,120,95,51,51,0),640]]);
          let register_s83 = 3.0;
          let encryptoru = String.fromCharCode(119,95,50,56,95,112,105,120,101,108,102,108,111,97,116,0);
         humiditys += `${libreactnativejniK.size / (Math.max(sentryg.length, 5))}`;
         interstitialr = new Map([[`${register_s83}`, encryptoru.length]]);
         libreactnativejniK[`${register_s83}`] = parseInt(`${register_s83}`);
         encryptoru = `${parseInt(`${register_s83}`)}`;
      }
      libhermesm = `${parseInt(`${scrollview0}`)}`;
      if (4237923 == libhermesm.length) {
         break;
      }
   } while ((4237923 == libhermesm.length) && (!libhermesm.startsWith(`${scrollview0}`)));
      philippinesQ *= 3;
   if (2 > predictionbannersharedC.length) {
       let dicef = true;
       let singapore3 = 1.0;
       let d_hashQ = 5;
       let libapminsightbQ = String.fromCharCode(108,95,53,52,95,107,108,97,121,116,110,0);
      for (let o = 0; o < 2; o++) {
         singapore3 += libapminsightbQ.length ^ d_hashQ;
      }
         singapore3 += d_hashQ + 3;
       let ajaxS = [531, 37];
      if (!dicef) {
          let selectedr = String.fromCharCode(115,116,111,114,101,120,95,106,95,57,48,0);
          let ewardeds = 3;
          let shareP = false;
          let penaltyb = String.fromCharCode(116,95,54,57,95,99,111,110,118,0);
         dicef = penaltyb.length > 85;
         selectedr = `${3 << (Math.min(3, selectedr.length))}`;
         ewardeds += (selectedr == String.fromCharCode(74,0) ? selectedr.length : ewardeds);
         shareP = !shareP;
         penaltyb += `${ewardeds * 2}`;
      }
       let pointy = String.fromCharCode(115,112,101,99,105,102,105,101,114,115,95,54,95,54,49,0);
      if (libapminsightbQ.startsWith(`${singapore3}`)) {
         libapminsightbQ += `${1 - parseInt(`${singapore3}`)}`;
      }
      while ((d_hashQ | 2) <= 3 || (d_hashQ | 2) <= 4) {
          let launcher6 = String.fromCharCode(122,95,54,53,95,103,101,116,110,97,109,101,105,110,102,111,0);
          let largeF = new Map([[String.fromCharCode(104,95,51,49,95,110,111,111,112,0),853], [String.fromCharCode(114,101,97,115,109,95,53,95,57,50,0),889]]);
          let productZ = [779, 250, 257];
         libapminsightbQ = `${largeF.size - 3}`;
         launcher6 = `${productZ.length}`;
         largeF[launcher6] = 2;
         productZ.push(3);
         break;
      }
          let downloadedY = false;
          let resendH = String.fromCharCode(122,95,56,54,95,120,102,97,99,101,0);
          let bellreminderb = String.fromCharCode(116,95,50,49,95,101,110,100,105,97,110,110,101,115,115,0);
         dicef = !pointy.endsWith(`${dicef}`);
         downloadedY = !downloadedY;
         resendH += "2";
         bellreminderb = `${3 | resendH.length}`;
      do {
         d_hashQ |= ((dicef ? 3 : 1) - 1);
         if (d_hashQ == 623273) {
            break;
         }
      } while ((pointy.length <= 2) && (d_hashQ == 623273));
         pointy = `${ajaxS.length}`;
         d_hashQ -= d_hashQ;
         libapminsightbQ += `${d_hashQ * 1}`;
      scrollview0 += 1;
   }
   if ((questE / (Math.max(greya.length, 9))) == 5) {
      questE /= Math.max(1, 5);
   }

    return this.state.volumePosition / this.player.volumeWidth;
      bootsplashv = `${parseInt(`${scrollview0}`) - 2}`;
      libhermesm = `${(String.fromCharCode(120,0) == libhermesm ? libhermesm.length : predictionbannersharedC.length)}`;
      libfabricjniW /= Math.max(1, parseInt(`${scrollview0}`));
      bootsplashv = `${parseInt(`${scrollview0}`) & libhermesm.length}`;
       let gmailR = 5.0;
       let logoA = 3;
       let y_imagef = [222, 796, 769];
       let routerz = [104, 288];
       let reactnavigationh = String.fromCharCode(109,95,51,53,95,116,114,97,110,115,112,111,114,116,115,0);
      do {
         logoA -= parseInt(`${gmailR}`) ^ y_imagef.length;
         if (logoA == 206788) {
            break;
         }
      } while ((logoA == 206788) && (1 < (logoA ^ 3)));
          let unselectedA = [43, 814, 596];
          let canvasl = String.fromCharCode(106,95,56,54,95,100,97,116,97,0);
          let cricketJ = String.fromCharCode(105,110,112,117,116,120,95,117,95,50,0);
         gmailR -= logoA;
         unselectedA.push(3);
         canvasl = `${canvasl.length}`;
         cricketJ = `${cricketJ.length}`;
      if (!routerz.includes(gmailR)) {
         gmailR /= Math.max(parseInt(`${gmailR}`) % 1, 4);
      }
       let libsentrys = String.fromCharCode(122,95,57,50,95,116,97,103,103,101,100,0);
       let mail5 = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,95,111,95,57,51,0);
          let leaguea = String.fromCharCode(115,116,97,99,107,115,95,99,95,54,57,0);
          let ewardedG = String.fromCharCode(99,95,56,56,95,119,111,114,107,97,114,111,117,110,100,0);
          let paginationC = false;
         y_imagef.push(reactnavigationh.length >> (Math.min(Math.abs(1), 2)));
         leaguea += `${(leaguea.length / (Math.max(2, (paginationC ? 1 : 2))))}`;
         ewardedG = `${(leaguea.length >> (Math.min(4, Math.abs((paginationC ? 5 : 1)))))}`;
      if (2 > routerz.length) {
          let overn = 5;
          let gradlew1 = 1.0;
          let hometeamfieldg = 5;
          let aboutq = String.fromCharCode(118,95,49,56,95,100,101,97,99,116,105,118,97,116,105,110,103,0);
          let whitesmalltickm = String.fromCharCode(98,108,101,101,100,95,54,95,50,49,0);
         routerz.push(1 * logoA);
         overn /= Math.max(aboutq.length / (Math.max(1, 7)), 2);
         gradlew1 -= parseFloat(`${whitesmalltickm.length ^ hometeamfieldg}`);
         hometeamfieldg >>= Math.min(4, Math.abs(aboutq.length + 1));
         whitesmalltickm = "1";
      }
         mail5 += `${logoA}`;
      libfabricjniW -= libhermesm.length << (Math.min(1, y_imagef.length));
      libfabricjniW += parseInt(`${halffieldimage8}`);
       let nativeC = 5;
       let nnewarchdefaultsH = String.fromCharCode(108,95,51,57,95,97,114,114,97,121,115,105,122,101,0);
       let predictionwinR = String.fromCharCode(115,95,51,54,95,103,117,97,114,97,110,116,101,101,0);
      do {
         nativeC -= predictionwinR.length;
         if (376112 == nativeC) {
            break;
         }
      } while ((nativeC <= 2) && (376112 == nativeC));
         nnewarchdefaultsH = `${nativeC}`;
          let dataV = String.fromCharCode(102,108,97,116,116,101,110,95,99,95,49,56,0);
         nnewarchdefaultsH += `${predictionwinR.length & 3}`;
         dataV = `${(dataV == String.fromCharCode(101,0) ? dataV.length : dataV.length)}`;
      for (let q = 0; q < 1; q++) {
         nativeC -= 1 ^ nativeC;
      }
      while (!nnewarchdefaultsH.endsWith(predictionwinR)) {
          let countdownp = 1;
          let executorA = String.fromCharCode(97,108,108,114,103,98,95,54,95,55,48,0);
          let expired2 = String.fromCharCode(100,101,113,117,111,116,101,95,54,95,53,52,0);
         nnewarchdefaultsH = `${nnewarchdefaultsH.length}`;
         countdownp %= Math.max(expired2.length % 2, 5);
         executorA += `${executorA.length - expired2.length}`;
         break;
      }
      philippinesQ *= 2 * bootsplashv.length;
   while (libfabricjniW == questE) {
      questE %= Math.max(4, questE);
      break;
   }
   for (let f = 0; f < 2; f++) {
       let libavformaty = 1;
       let crickets = 3.0;
       let homeactiveT = String.fromCharCode(115,107,105,110,95,54,95,53,54,0);
          let sansN = false;
          let componentregistryC = String.fromCharCode(99,95,53,48,95,101,114,114,111,114,0);
          let bangr = String.fromCharCode(105,95,57,57,95,102,105,108,101,104,101,97,100,101,114,0);
         crickets -= parseInt(`${crickets}`) & componentregistryC.length;
         sansN = bangr.length == 78 || !sansN;
         componentregistryC = `${(1 + (sansN ? 3 : 1))}`;
         bangr = `${((sansN ? 4 : 1))}`;
      if ((4.21 / (Math.max(2, crickets))) >= 2.36 && 4.21 >= (crickets / (Math.max(2, libavformaty)))) {
         libavformaty ^= parseInt(`${crickets}`);
      }
      while ((4 >> (Math.min(2, homeactiveT.length))) == 4 && (homeactiveT.length >> (Math.min(4, Math.abs(libavformaty)))) == 4) {
         homeactiveT += `${parseInt(`${crickets}`)}`;
         break;
      }
          let baiduO = String.fromCharCode(115,97,109,112,95,53,95,51,52,0);
         crickets -= 2;
         baiduO += `${baiduO.length | baiduO.length}`;
      for (let e = 0; e < 3; e++) {
         homeactiveT += `${homeactiveT.length | 2}`;
      }
         homeactiveT += `${parseInt(`${crickets}`)}`;
      while ((libavformaty % (Math.max(5, 3))) < 1) {
         libavformaty %= Math.max(parseInt(`${crickets}`) & 3, 5);
         break;
      }
      while (2.32 >= (crickets - 5.78) || (libavformaty + 3) >= 5) {
          let libsentryQ = 1.0;
         crickets /= Math.max(libavformaty - 1, 4);
         libsentryQ -= 1;
         break;
      }
         crickets -= parseInt(`${crickets}`) << (Math.min(5, Math.abs(1)));
      scrollview0 += 3 + greya.length;
   }
   if (1.96 > (scrollview0 + questE)) {
      questE -= questE;
   }
       let i_managerp = new Map([[String.fromCharCode(98,95,52,51,95,104,105,103,104,105,103,104,116,0),String.fromCharCode(114,117,110,115,95,120,95,56,49,0)], [String.fromCharCode(100,111,112,115,95,97,95,57,55,0),String.fromCharCode(105,110,116,101,114,108,101,97,118,101,100,95,103,95,55,54,0)], [String.fromCharCode(115,95,56,55,95,117,105,100,0),String.fromCharCode(117,100,112,95,52,95,51,51,0)]]);
       let stationn = true;
       let countdownR = [776, 203, 182];
      do {
         i_managerp = new Map([[`${i_managerp.size}`, 2]]);
         if (i_managerp.size == 3039035) {
            break;
         }
      } while ((i_managerp.size == 3039035) && ((4 | countdownR.length) == 4 && (i_managerp.size | countdownR.length) == 4));
      if ((i_managerp.size & 3) > 5) {
         stationn = null == i_managerp[`${stationn}`];
      }
      for (let a = 0; a < 1; a++) {
          let showD = true;
          let matcheso = String.fromCharCode(108,97,117,110,99,104,95,106,95,49,54,0);
          let historyj = String.fromCharCode(115,95,56,56,95,105,110,115,101,114,116,101,114,0);
         stationn = !showD;
         showD = matcheso.length < historyj.length;
         matcheso += "2";
         historyj += `${matcheso.length}`;
      }
         countdownR.push(countdownR.length);
      do {
         stationn = !stationn;
         if (stationn ? !stationn : stationn) {
            break;
         }
      } while ((stationn ? !stationn : stationn) && ((countdownR.length ^ 5) >= 1));
      for (let h = 0; h < 1; h++) {
         stationn = i_managerp.size >= 47;
      }
      do {
          let mailX = 5.0;
         countdownR.push(countdownR.length % 1);
         mailX *= parseFloat(`${3}`);
         if (3630648 == countdownR.length) {
            break;
         }
      } while ((2 < (i_managerp.size >> (Math.min(2, countdownR.length)))) && (3630648 == countdownR.length));
         countdownR.push((3 * (stationn ? 4 : 5)));
       let combiney = [286, 464];
      libfabricjniW += 2;
       let modelX = String.fromCharCode(104,101,120,98,121,116,101,95,56,95,57,48,0);
          let bodanM = [756, 690, 776];
          let a_centerL = String.fromCharCode(99,111,109,109,105,116,116,101,100,95,121,95,53,50,0);
          let headerp = 4.0;
         modelX += `${bodanM.length}`;
         bodanM.push(3 ^ parseInt(`${headerp}`));
         a_centerL += `${(a_centerL == String.fromCharCode(117,0) ? parseInt(`${headerp}`) : a_centerL.length)}`;
      do {
         modelX += `${modelX.length}`;
         if (modelX == String.fromCharCode(53,54,116,121,102,121,118,55,0)) {
            break;
         }
      } while ((modelX.endsWith(`${modelX.length}`)) && (modelX == String.fromCharCode(53,54,116,121,102,121,118,55,0)));
          let traminiK = String.fromCharCode(112,97,105,110,116,95,50,95,53,51,0);
          let iconX = false;
          let defaultpredictionprofile7 = String.fromCharCode(115,95,51,54,95,110,109,109,105,110,116,114,105,110,0);
         modelX += `${traminiK.length}`;
         traminiK = `${defaultpredictionprofile7.length + 3}`;
         iconX = (defaultpredictionprofile7.length | defaultpredictionprofile7.length) > 6;
      halffieldimage8 /= Math.max(1, 3);
      greya.push(parseInt(`${halffieldimage8}`) - 3);
   while (bootsplashv.includes(`${questE}`)) {
      bootsplashv += `${3 | parseInt(`${libfabricjniW}`)}`;
      break;
   }

  }

   
  calculateVolumePositionFromVolume() {
       let penaltyshootC = String.fromCharCode(99,95,49,53,95,101,118,100,110,115,0);
    let nendw = 5.0;
    let macauw = true;
    let liver = 3.0;
    let distO = 3.0;
    let casto = 1;
    let ynewarchdefaultsp = String.fromCharCode(117,95,53,51,95,117,110,114,101,103,105,115,116,101,114,101,100,0);
    let savex = String.fromCharCode(117,118,97,114,105,110,116,95,108,95,56,56,0);
    let routeri = 0.0;
       let valuess = [279, 113, 873];
       let ocopy_m_ = String.fromCharCode(111,95,49,56,95,97,117,116,111,99,111,114,114,101,99,116,105,111,110,0);
       let private_b8R = true;
      for (let s = 0; s < 3; s++) {
         ocopy_m_ = `${(ocopy_m_.length & (private_b8R ? 2 : 2))}`;
      }
         valuess = [2 + valuess.length];
          let inactiveq = new Map([[String.fromCharCode(97,118,100,101,118,105,99,101,114,101,115,95,98,95,57,51,0),String.fromCharCode(111,95,55,53,95,117,110,122,116,101,108,108,0)], [String.fromCharCode(105,115,97,99,95,54,95,53,49,0),String.fromCharCode(97,95,53,49,95,97,117,116,104,114,111,114,105,122,97,116,105,111,110,0)]]);
          let downloading9 = String.fromCharCode(118,95,57,49,95,115,101,114,118,105,99,101,0);
          let middle2 = new Map([[String.fromCharCode(103,110,111,95,55,95,55,57,0),String.fromCharCode(102,95,57,57,95,114,101,108,101,118,97,110,116,0)], [String.fromCharCode(100,114,97,103,103,97,98,108,101,95,51,95,56,48,0),String.fromCharCode(112,105,120,99,116,120,95,52,95,51,57,0)], [String.fromCharCode(113,95,54,54,95,115,99,114,101,101,110,112,114,101,115,115,111,0),String.fromCharCode(114,97,109,112,95,48,95,50,52,0)]]);
         valuess.push(valuess.length);
         inactiveq[downloading9] = downloading9.length;
         middle2 = new Map([[`${middle2.size}`, 2 + middle2.size]]);
         private_b8R = (valuess.length << (Math.min(ocopy_m_.length, 4))) <= 34;
       let giftB = String.fromCharCode(99,111,110,102,108,105,99,116,95,98,95,56,0);
       let libhermesV = String.fromCharCode(110,95,57,52,95,111,102,102,0);
      if (ocopy_m_.length > 5) {
         ocopy_m_ = `${ocopy_m_.length}`;
      }
       let suggestionX = String.fromCharCode(120,95,56,49,95,112,111,105,110,116,99,98,98,0);
         private_b8R = private_b8R && suggestionX.length <= 45;
          let plashA = false;
          let libavdevicet = 3;
         giftB += `${((plashA ? 2 : 1) >> (Math.min(ocopy_m_.length, 3)))}`;
         plashA = 17 == (libavdevicet / (Math.max(2, libavdevicet)));
      distO /= Math.max(ynewarchdefaultsp.length, 1);
   do {
       let shrunkK = 5;
       let backiconmaskn = new Map([[String.fromCharCode(110,116,111,108,111,103,121,95,102,95,55,50,0),false ], [String.fromCharCode(116,97,103,103,101,114,95,52,95,49,0),true ], [String.fromCharCode(100,111,99,108,105,115,116,115,95,98,95,57,56,0),false ]]);
       let homeloadingP = String.fromCharCode(116,101,109,112,111,114,97,114,105,108,121,95,112,95,50,55,0);
       let arrowselectdowns = String.fromCharCode(115,105,108,101,110,99,101,95,52,95,51,53,0);
       let videobufferloadingG = 4;
      for (let p = 0; p < 2; p++) {
         homeloadingP = `${homeloadingP.length}`;
      }
      while (homeloadingP.includes(`${backiconmaskn.size}`)) {
         homeloadingP += `${3 << (Math.min(3, Math.abs(shrunkK)))}`;
         break;
      }
         backiconmaskn = new Map([[arrowselectdowns, arrowselectdowns.length * 2]]);
       let scorepopsoundj = new Map([[String.fromCharCode(120,95,55,50,95,115,117,98,116,97,115,107,0),String.fromCharCode(110,101,97,114,101,110,100,95,104,95,57,52,0)], [String.fromCharCode(116,105,109,101,98,97,115,101,95,57,95,54,53,0),String.fromCharCode(103,95,52,55,95,112,114,101,115,115,101,115,0)], [String.fromCharCode(99,108,101,97,110,101,100,95,101,95,49,52,0),String.fromCharCode(119,95,50,49,95,119,101,98,109,101,110,99,0)]]);
       let sharemodalE = new Map([[String.fromCharCode(111,95,57,51,95,115,108,105,99,101,115,0),String.fromCharCode(118,95,51,52,95,115,101,113,117,101,110,99,101,114,0)], [String.fromCharCode(109,97,115,107,95,53,95,55,57,0),String.fromCharCode(111,95,53,48,95,100,116,109,102,0)], [String.fromCharCode(115,95,52,95,112,114,111,116,111,99,111,108,115,0),String.fromCharCode(100,101,102,105,110,101,95,103,95,51,56,0)]]);
      do {
         videobufferloadingG %= Math.max(homeloadingP.length >> (Math.min(Math.abs(2), 3)), 2);
         if (3972400 == videobufferloadingG) {
            break;
         }
      } while ((3972400 == videobufferloadingG) && ((videobufferloadingG << (Math.min(4, Math.abs(shrunkK)))) <= 1 && (1 << (Math.min(3, Math.abs(shrunkK)))) <= 2));
          let huaweiL = 0.0;
          let ccdfbdabcabbbedbB = new Map([[String.fromCharCode(121,95,51,52,95,99,111,112,121,0),132], [String.fromCharCode(112,95,50,54,95,99,108,105,99,107,0),834], [String.fromCharCode(122,95,49,53,95,114,111,117,116,101,114,0),980]]);
          let libturbomodulejsijniB = [51, 330];
         shrunkK %= Math.max(libturbomodulejsijniB.length, 1);
         huaweiL -= parseFloat(`${ccdfbdabcabbbedbB.size}`);
         ccdfbdabcabbbedbB = new Map([[`${ccdfbdabcabbbedbB.size}`, parseInt(`${huaweiL}`)]]);
         libturbomodulejsijniB.push(parseInt(`${huaweiL}`));
      while ((scorepopsoundj.size << (Math.min(Math.abs(1), 3))) > 1 && (1 << (Math.min(2, Math.abs(scorepopsoundj.size)))) > 1) {
         scorepopsoundj[arrowselectdowns] = 2 % (Math.max(10, arrowselectdowns.length));
         break;
      }
       let emojiheartY = String.fromCharCode(106,95,49,56,95,103,101,116,101,110,118,0);
         shrunkK |= 1 + scorepopsoundj.size;
      if ((videobufferloadingG / 5) <= 2 || (videobufferloadingG / (Math.max(9, backiconmaskn.size))) <= 5) {
         videobufferloadingG |= 2 | backiconmaskn.size;
      }
      while (homeloadingP.length >= sharemodalE.size) {
         homeloadingP = `${videobufferloadingG}`;
         break;
      }
      do {
         scorepopsoundj[`${videobufferloadingG}`] = videobufferloadingG;
         if (scorepopsoundj.size == 2376554) {
            break;
         }
      } while ((scorepopsoundj.size == 2376554) && ((arrowselectdowns.length - 5) == 4));
      for (let b = 0; b < 3; b++) {
          let dragcloseX = false;
          let other4 = String.fromCharCode(105,110,116,101,114,118,97,108,115,95,103,95,57,52,0);
         shrunkK += ((dragcloseX ? 2 : 1) | videobufferloadingG);
         dragcloseX = String.fromCharCode(52,0) == other4;
         other4 += `${other4.length << (Math.min(other4.length, 4))}`;
      }
      do {
          let inouttargetyellowE = 5.0;
          let coreP = 5.0;
         videobufferloadingG *= 2 - parseInt(`${coreP}`);
         inouttargetyellowE -= parseFloat(`${parseInt(`${inouttargetyellowE}`) & parseInt(`${inouttargetyellowE}`)}`);
         coreP += parseInt(`${inouttargetyellowE}`) * 1;
         if (videobufferloadingG == 295927) {
            break;
         }
      } while ((videobufferloadingG == 295927) && (shrunkK > 4));
      if (Array.from(scorepopsoundj.values()).includes(backiconmaskn.size)) {
         scorepopsoundj[`${videobufferloadingG}`] = videobufferloadingG & sharemodalE.size;
      }
      ynewarchdefaultsp = `${backiconmaskn.size & casto}`;
      if (String.fromCharCode(101,103,53,108,122,51,114,114,0) == ynewarchdefaultsp) {
         break;
      }
   } while ((ynewarchdefaultsp.length <= 1 && !macauw) && (String.fromCharCode(101,103,53,108,122,51,114,114,0) == ynewarchdefaultsp));
      casto *= parseInt(`${distO}`);
      liver += parseFloat(`${2}`);
   for (let o = 0; o < 3; o++) {
      macauw = ynewarchdefaultsp.length == 23;
   }
      macauw = liver >= 81.70;
       let scorey = new Map([[String.fromCharCode(97,99,101,115,115,111,114,121,95,119,95,53,48,0),true ], [String.fromCharCode(120,95,55,54,95,100,105,102,102,115,0),false ]]);
       let privacyl = String.fromCharCode(110,95,52,50,95,112,114,102,0);
         scorey[privacyl] = privacyl.length;
      for (let o = 0; o < 2; o++) {
         scorey[`${privacyl}`] = 1 % (Math.max(2, scorey.size));
      }
         scorey[`${privacyl}`] = 3;
      do {
          let leftE = 2.0;
          let downloader_ = String.fromCharCode(107,95,55,51,95,100,101,115,116,114,111,121,105,110,103,0);
          let e_centern = 5.0;
          let fullscreenmaxu = 5.0;
          let foundR = String.fromCharCode(118,95,53,48,95,98,101,110,101,102,105,99,105,97,114,121,0);
         scorey[`${fullscreenmaxu}`] = parseInt(`${e_centern}`);
         leftE *= parseFloat(`${foundR.length >> (Math.min(4, Math.abs(parseInt(`${leftE}`))))}`);
         downloader_ += `${parseInt(`${leftE}`)}`;
         fullscreenmaxu *= parseInt(`${leftE}`) + foundR.length;
         if (scorey.size == 2031766) {
            break;
         }
      } while ((scorey.size == 2031766) && (4 > scorey.size));
      while (4 <= (privacyl.length >> (Math.min(Math.abs(1), 2))) || 5 <= (scorey.size >> (Math.min(Math.abs(1), 5)))) {
         privacyl += `${scorey.size}`;
         break;
      }
          let debugj = String.fromCharCode(115,95,49,49,95,109,100,99,118,0);
         privacyl += `${scorey.size * privacyl.length}`;
         debugj = "1";
      penaltyshootC += `${parseInt(`${distO}`)}`;
       let logint = 4.0;
       let greenarrowupt = String.fromCharCode(112,105,120,101,108,102,108,111,97,116,95,50,95,52,57,0);
       let twitterH = new Map([[String.fromCharCode(116,95,56,48,95,112,107,116,104,100,114,0),479], [String.fromCharCode(100,95,49,48,48,95,105,103,110,101,116,116,101,0),321]]);
         twitterH = new Map([[`${twitterH.size}`, greenarrowupt.length << (Math.min(5, Math.abs(twitterH.size)))]]);
         greenarrowupt += `${parseInt(`${logint}`) ^ greenarrowupt.length}`;
         twitterH = new Map([[`${twitterH.size}`, twitterH.size]]);
          let gmailX = new Map([[String.fromCharCode(115,97,110,105,116,105,122,101,114,95,55,95,52,51,0),String.fromCharCode(103,109,97,116,99,104,95,108,95,49,55,0)], [String.fromCharCode(101,95,55,48,95,118,97,97,112,105,0),String.fromCharCode(117,115,101,97,103,101,95,120,95,52,56,0)]]);
         logint -= parseFloat(`${parseInt(`${logint}`) >> (Math.min(greenarrowupt.length, 4))}`);
         gmailX = new Map([[`${gmailX.size}`, gmailX.size * gmailX.size]]);
         greenarrowupt = "2";
          let window_car = String.fromCharCode(107,95,56,56,95,112,114,111,98,97,98,105,108,105,116,105,101,115,0);
          let javaR = 4;
          let promotione = String.fromCharCode(116,119,111,112,111,105,110,116,95,104,95,56,53,0);
         logint /= Math.max(2, parseFloat(`${twitterH.size}`));
         window_car += `${window_car.length * promotione.length}`;
         javaR ^= promotione.length;
      while (!greenarrowupt.startsWith(`${twitterH.size}`)) {
          let predictionarrowR = 2.0;
         twitterH = new Map([[`${twitterH.size}`, parseInt(`${logint}`) | twitterH.size]]);
         predictionarrowR *= parseInt(`${predictionarrowR}`);
         break;
      }
         greenarrowupt = "2";
         greenarrowupt = "2";
      macauw = ynewarchdefaultsp.length == 96;
   if (1.59 < (distO - 4.63)) {
      casto -= penaltyshootC.length;
   }
      savex = `${parseInt(`${distO}`) % 2}`;
      nendw *= parseFloat(`${penaltyshootC.length}`);

    return this.player.volumeWidth * this.state.volume;
       let libjsinspectorO = String.fromCharCode(105,110,105,116,97,108,105,122,101,95,115,95,51,48,0);
          let regeng3 = String.fromCharCode(105,95,55,53,95,100,101,112,101,110,100,101,110,99,105,101,115,0);
          let countdownA = 4.0;
          let eactV = 0.0;
         libjsinspectorO = `${(libjsinspectorO == String.fromCharCode(116,0) ? libjsinspectorO.length : regeng3.length)}`;
         regeng3 = `${parseInt(`${countdownA}`)}`;
         eactV -= parseFloat(`${parseInt(`${countdownA}`)}`);
         libjsinspectorO += `${libjsinspectorO.length}`;
         libjsinspectorO = "1";
      nendw -= (parseFloat(`${String.fromCharCode(75,0) == savex ? (macauw ? 3 : 4) : savex.length}`));
   if ((1 - casto) >= 5 || (distO * 4.89) >= 5.83) {
      casto += (savex == String.fromCharCode(83,0) ? savex.length : parseInt(`${nendw}`));
   }
      macauw = 21 <= casto;
   while (liver >= nendw) {
      liver += (parseFloat(`${casto << (Math.min(5, Math.abs((macauw ? 4 : 1))))}`));
      break;
   }
   do {
      macauw = macauw || 58 > casto;
      if (macauw ? !macauw : macauw) {
         break;
      }
   } while ((macauw ? !macauw : macauw) && (2.65 == (liver + 1.55) && 1.55 == liver));
   while (!penaltyshootC.includes(`${casto}`)) {
      casto += penaltyshootC.length + ynewarchdefaultsp.length;
      break;
   }
   for (let e = 0; e < 1; e++) {
      ynewarchdefaultsp += `${parseInt(`${distO}`) - 3}`;
   }
   if ((casto + 2) >= 1) {
      casto <<= Math.min(Math.abs(2), 2);
   }
   if (3 > savex.length) {
      savex = `${penaltyshootC.length}`;
   }
   for (let a = 0; a < 2; a++) {
       let emoji1 = String.fromCharCode(101,110,117,109,101,114,97,116,101,95,104,95,49,50,0);
       let stationsC = String.fromCharCode(104,111,108,100,101,114,95,54,95,50,49,0);
      do {
         emoji1 += `${emoji1.length}`;
         if (872426 == emoji1.length) {
            break;
         }
      } while ((stationsC.length <= emoji1.length) && (872426 == emoji1.length));
       let middlesoundk = new Map([[String.fromCharCode(110,101,119,101,115,116,95,117,95,56,54,0),String.fromCharCode(97,112,112,118,101,121,111,114,95,106,95,55,49,0)], [String.fromCharCode(115,108,111,119,101,115,116,95,111,95,53,55,0),String.fromCharCode(114,95,56,54,95,98,101,105,110,103,0)]]);
       let anythinkl = 4;
       let analyticJ = 0;
      for (let c = 0; c < 2; c++) {
         stationsC = `${stationsC.length | 3}`;
      }
          let baiduadsb = 3.0;
         middlesoundk = new Map([[emoji1, 3]]);
         baiduadsb *= 2 * parseInt(`${baiduadsb}`);
         emoji1 += `${emoji1.length}`;
      savex += `${casto}`;
   }
   do {
      liver += parseFloat(`${parseInt(`${distO}`)}`);
      if (liver == 1746911.0) {
         break;
      }
   } while ((liver == 2.87) && (liver == 1746911.0));

  }

   

   
  UNSAFE_componentWillMount() {
       let nnewarchdefaults0 = String.fromCharCode(106,95,51,95,118,112,100,101,99,0);
    let eventi = new Map([[String.fromCharCode(119,95,49,49,95,104,97,110,100,0),572], [String.fromCharCode(118,95,50,95,109,115,109,112,101,103,118,0),317], [String.fromCharCode(103,95,54,53,95,114,101,109,111,118,97,108,115,0),699]]);
    let base1 = String.fromCharCode(104,95,49,52,95,97,112,112,114,111,118,101,100,0);
    let linet = 5;
    let rewind3 = 2;
    let whitetickc = [156, 643, 384];
    let yellowtoredN = 2;
    let arrowdown9 = true;
    let shirtc = new Map([[String.fromCharCode(100,114,97,119,95,108,95,52,54,0),386], [String.fromCharCode(112,95,50,53,95,109,117,108,116,105,99,97,115,116,0),628], [String.fromCharCode(107,95,56,52,95,118,108,111,103,0),99]]);
   for (let z = 0; z < 3; z++) {
       let scorej = String.fromCharCode(104,95,51,54,95,98,97,99,107,103,114,111,117,110,100,105,110,103,0);
       let type_bt = false;
       let minivodd = 3;
       let zhengpianj = String.fromCharCode(103,114,97,112,104,95,108,95,56,0);
          let agreementi = [139, 868, 732];
         zhengpianj += `${(2 - (type_bt ? 1 : 5))}`;
         agreementi.push(agreementi.length + agreementi.length);
      if (zhengpianj.length > 3) {
         zhengpianj = `${(scorej.length & (type_bt ? 4 : 5))}`;
      }
         minivodd %= Math.max(((type_bt ? 3 : 4) - minivodd), 2);
         minivodd ^= minivodd >> (Math.min(zhengpianj.length, 4));
         type_bt = !type_bt;
         minivodd /= Math.max(1, (scorej.length + (type_bt ? 1 : 3)));
      if (3 >= zhengpianj.length && type_bt) {
         type_bt = zhengpianj.startsWith(`${minivodd}`);
      }
      if (!type_bt) {
         scorej = "1";
      }
          let defaultteami = [940, 136];
         scorej = `${scorej.length & 3}`;
         defaultteami.push(defaultteami.length * defaultteami.length);
         type_bt = 1 <= scorej.length;
         scorej += `${zhengpianj.length / (Math.max(2, 4))}`;
         type_bt = (zhengpianj.length / (Math.max(10, minivodd))) == 46;
      whitetickc.push(1);
   }
   while (5 >= (rewind3 % 4) || arrowdown9) {
      arrowdown9 = !base1.endsWith(`${arrowdown9}`);
      break;
   }
   if (3 >= (whitetickc.length - 2) || 5 >= (2 - rewind3)) {
       let libfabricjniE = new Map([[String.fromCharCode(119,95,49,95,99,109,97,115,107,0),true ], [String.fromCharCode(118,105,101,119,95,100,95,55,53,0),false ], [String.fromCharCode(112,111,108,121,109,101,115,104,95,109,95,55,52,0),false ]]);
       let private_r7i = String.fromCharCode(98,101,103,117,110,95,53,95,56,49,0);
       let xvodx = false;
          let iconstar4 = String.fromCharCode(97,95,53,55,95,119,104,97,116,0);
          let scheduleo = 0;
         private_r7i = `${iconstar4.length >> (Math.min(Math.abs(1), 3))}`;
         iconstar4 += `${scheduleo}`;
         private_r7i += `${private_r7i.length}`;
      do {
          let helper3 = String.fromCharCode(100,101,109,111,116,101,95,110,95,54,49,0);
          let cornerB = String.fromCharCode(115,110,97,112,95,118,95,53,51,0);
         libfabricjniE[`${xvodx}`] = 1;
         helper3 = `${helper3.length + cornerB.length}`;
         cornerB = `${helper3.length}`;
         if (libfabricjniE.size == 1349526) {
            break;
         }
      } while ((libfabricjniE.size == 1349526) && (1 >= (private_r7i.length - 3)));
          let phoneshareZ = false;
          let fullscreenminu = String.fromCharCode(101,110,116,101,114,95,103,95,50,55,0);
         xvodx = !xvodx;
         phoneshareZ = fullscreenminu.length > 18;
         fullscreenminu += `${((phoneshareZ ? 3 : 2) ^ 2)}`;
      for (let i = 0; i < 3; i++) {
         libfabricjniE = new Map([[`${libfabricjniE.size}`, libfabricjniE.size]]);
      }
         private_r7i = `${private_r7i.length}`;
          let flagM = 5.0;
          let filez = String.fromCharCode(120,95,56,49,95,108,117,97,0);
         xvodx = null != libfabricjniE[`${flagM}`];
         flagM -= filez.length;
         filez = `${1 | filez.length}`;
         private_r7i += `${(3 * (xvodx ? 5 : 4))}`;
      if (private_r7i.length < 2) {
         xvodx = private_r7i.startsWith(`${xvodx}`);
      }
      whitetickc.push(3);
   }
   do {
       let libcrashsdkI = false;
      if (!libcrashsdkI) {
         libcrashsdkI = !libcrashsdkI;
      }
         libcrashsdkI = !libcrashsdkI || !libcrashsdkI;
      if (libcrashsdkI || libcrashsdkI) {
          let gifgoalD = String.fromCharCode(114,101,110,100,101,114,95,51,95,57,0);
          let reminderR = 3.0;
          let g_viewL = [457, 180, 130];
         libcrashsdkI = gifgoalD.includes(`${reminderR}`);
         gifgoalD = `${1 & g_viewL.length}`;
         reminderR /= Math.max(parseFloat(`${2}`), 2);
      }
      eventi = new Map([[`${arrowdown9}`, ((arrowdown9 ? 3 : 4))]]);
      if (eventi.size == 512965) {
         break;
      }
   } while ((!base1.startsWith(`${eventi.size}`)) && (eventi.size == 512965));
   if (!whitetickc.includes(linet)) {
      linet %= Math.max(whitetickc.length & 2, 2);
   }
      arrowdown9 = rewind3 < 95;
   while ((base1.length + 2) == 4) {
      base1 += `${rewind3 & nnewarchdefaults0.length}`;
      break;
   }
      linet >>= Math.min(parseInt(`${Math.abs((3 % (Math.max(1, (arrowdown9 ? 1 : 3)))))}`), 5);

    this.initSeekPanResponder();
       let strF = false;
          let iconcurrentmatch7 = String.fromCharCode(101,95,53,54,95,105,116,101,114,97,116,101,0);
          let cancelv = [339, 464, 544];
          let homeicono = String.fromCharCode(114,95,53,95,107,101,121,102,114,97,109,101,0);
         strF = !strF && cancelv.length >= 62;
         iconcurrentmatch7 = "2";
         cancelv.push(iconcurrentmatch7.length - 2);
         homeicono += "2";
      while (!strF) {
         strF = (strF ? !strF : !strF);
         break;
      }
         strF = !strF;
      eventi = new Map([[`${eventi.size}`, base1.length * 2]]);
   do {
      nnewarchdefaults0 = `${3 * nnewarchdefaults0.length}`;
      if (String.fromCharCode(114,101,115,53,48,101,106,105,100,98,0) == nnewarchdefaults0) {
         break;
      }
   } while ((String.fromCharCode(114,101,115,53,48,101,106,105,100,98,0) == nnewarchdefaults0) && (nnewarchdefaults0.length > eventi.size));
   while (yellowtoredN >= linet) {
      linet >>= Math.min(nnewarchdefaults0.length, 4);
      break;
   }
   while (5 >= (eventi.size % 4)) {
      arrowdown9 = nnewarchdefaults0.endsWith(`${yellowtoredN}`);
      break;
   }
      nnewarchdefaults0 += "1";
   while (4 <= (rewind3 / (Math.max(3, base1.length))) && (base1.length / (Math.max(4, 3))) <= 5) {
      rewind3 ^= 2 / (Math.max(10, rewind3));
      break;
   }
   if (2 >= (1 ^ rewind3)) {
      linet /= Math.max(2, rewind3 / (Math.max(linet, 5)));
   }
      base1 += `${((arrowdown9 ? 4 : 3))}`;

    this.initVolumePanResponder();
      whitetickc = [3];
   do {
      arrowdown9 = !arrowdown9;
      if (arrowdown9 ? !arrowdown9 : arrowdown9) {
         break;
      }
   } while ((arrowdown9 || (yellowtoredN << (Math.min(Math.abs(3), 5))) >= 3) && (arrowdown9 ? !arrowdown9 : arrowdown9));
   do {
       let serviceM = 4;
       let penaltymatchiconw = 3.0;
       let indicatorx = 4.0;
       let matchactivea = String.fromCharCode(114,95,49,48,0);
       let sort3 = new Map([[String.fromCharCode(98,95,56,56,95,118,112,100,115,112,0),475], [String.fromCharCode(119,95,51,49,0),745], [String.fromCharCode(117,95,52,53,95,97,99,100,115,112,0),920]]);
      if (5.32 < indicatorx) {
         penaltymatchiconw -= parseFloat(`${parseInt(`${indicatorx}`)}`);
      }
         serviceM <<= Math.min(2, Math.abs(parseInt(`${indicatorx}`)));
      for (let b = 0; b < 2; b++) {
         matchactivea += `${parseInt(`${indicatorx}`) & 3}`;
      }
      do {
         matchactivea += `${serviceM}`;
         if (1744259 == matchactivea.length) {
            break;
         }
      } while ((1744259 == matchactivea.length) && ((matchactivea.length >> (Math.min(Math.abs(5), 2))) >= 2 || (penaltymatchiconw / (Math.max(parseFloat(`${matchactivea.length}`), 1))) >= 2.68));
         sort3 = new Map([[matchactivea, matchactivea.length + 3]]);
         serviceM >>= Math.min(Math.abs(parseInt(`${penaltymatchiconw}`) % (Math.max(parseInt(`${indicatorx}`), 8))), 3);
      while ((indicatorx - 2.89) <= 4.22 && 1.60 <= (indicatorx + 2.89)) {
         indicatorx += parseFloat(`${parseInt(`${penaltymatchiconw}`) * 2}`);
         break;
      }
          let libreactnativeblobN = 0.0;
          let manifestB = false;
         penaltymatchiconw /= Math.max(4, parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${penaltymatchiconw}`)), 3))}`));
         libreactnativeblobN -= parseFloat(`${1 ^ parseInt(`${libreactnativeblobN}`)}`);
         manifestB = !manifestB;
      while (3.29 == (penaltymatchiconw - 4.16)) {
         penaltymatchiconw *= parseFloat(`${parseInt(`${indicatorx}`) % 2}`);
         break;
      }
         penaltymatchiconw /= Math.max(2, parseFloat(`${2 * sort3.size}`));
      while (matchactivea.length == 5) {
         sort3 = new Map([[`${sort3.size}`, sort3.size >> (Math.min(4, Math.abs(serviceM)))]]);
         break;
      }
      yellowtoredN >>= Math.min(Math.abs(1 - linet), 5);
      if (yellowtoredN == 210709) {
         break;
      }
   } while ((yellowtoredN == 210709) && (whitetickc.length <= yellowtoredN));
      nnewarchdefaults0 += `${(String.fromCharCode(57,0) == base1 ? whitetickc.length : base1.length)}`;
      rewind3 |= ((arrowdown9 ? 1 : 3) / (Math.max(3, 1)));
       let bingZ = 1.0;
       let appsh = false;
          let analyticV = String.fromCharCode(109,105,110,111,114,95,117,95,52,54,0);
         bingZ /= Math.max(2, parseFloat(`${parseInt(`${bingZ}`) - 1}`));
         analyticV += `${2 + analyticV.length}`;
         appsh = appsh && bingZ > 60.95;
      while (!appsh && (bingZ - 5.17) > 5.82) {
          let basketballdetailsbgV = [49, 67, 459];
          let const_jE = String.fromCharCode(106,115,105,109,100,99,112,117,95,49,95,49,48,0);
          let backiconQ = 1;
          let defaultplayerimg4 = String.fromCharCode(110,95,55,50,95,114,103,98,121,117,118,0);
         appsh = !appsh;
         basketballdetailsbgV = [basketballdetailsbgV.length | backiconQ];
         const_jE = `${const_jE.length}`;
         backiconQ %= Math.max((const_jE == String.fromCharCode(70,0) ? defaultplayerimg4.length : const_jE.length), 3);
         defaultplayerimg4 += `${backiconQ}`;
         break;
      }
         bingZ *= parseFloat(`${1 % (Math.max(2, parseInt(`${bingZ}`)))}`);
          let contextP = false;
         bingZ *= (parseFloat(`${(contextP ? 5 : 2) ^ (appsh ? 1 : 2)}`));
      for (let q = 0; q < 3; q++) {
         bingZ += parseFloat(`${parseInt(`${bingZ}`) % 3}`);
      }
      rewind3 *= nnewarchdefaults0.length;
   while ((4 + linet) == 1) {
      base1 = "3";
      break;
   }
   for (let h = 0; h < 1; h++) {
      whitetickc.push(whitetickc.length);
   }

  }

   
  UNSAFE_componentWillReceiveProps(nextProps) {
       let iconclosewhiteb = String.fromCharCode(102,95,52,52,95,105,116,101,109,0);
    let mailU = new Map([[String.fromCharCode(114,95,54,51,95,99,111,110,102,105,103,117,114,97,116,105,110,0),false ], [String.fromCharCode(99,95,55,95,103,114,97,100,0),false ], [String.fromCharCode(99,111,110,115,117,109,101,100,95,115,95,56,57,0),false ]]);
    let umengd = 1;
    let greenarrowupp = true;
    let renewM = new Map([[String.fromCharCode(101,120,115,115,95,49,95,52,48,0),71], [String.fromCharCode(107,95,53,48,95,115,117,98,115,116,114,105,110,103,115,0),520], [String.fromCharCode(97,98,117,115,101,95,50,95,55,49,0),403]]);
    let benefit2 = String.fromCharCode(110,95,57,95,99,108,101,97,110,0);
    let completeQ = [String.fromCharCode(109,95,57,55,95,113,117,97,110,116,105,122,101,100,0), String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,95,105,95,53,57,0), String.fromCharCode(110,97,118,105,95,110,95,49,50,0)];
    let logoutc = 2.0;
    let sharemodalB = 5.0;
    let binddatasE = new Map([[String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,118,101,95,119,95,52,55,0),499], [String.fromCharCode(111,95,54,54,95,103,101,116,115,111,99,107,97,100,100,114,0),69], [String.fromCharCode(99,111,100,101,98,111,111,107,95,102,95,49,54,0),712]]);
    let questiconZ = 2.0;
    let icondefaultthumbnailL = false;
    let stepb = 1.0;
    let typingloading2 = 1;
   if (!iconclosewhiteb.endsWith(`${questiconZ}`)) {
      questiconZ /= Math.max(5, (parseFloat(`${(icondefaultthumbnailL ? 3 : 3) * parseInt(`${logoutc}`)}`)));
   }
      greenarrowupp = String.fromCharCode(117,0) == iconclosewhiteb;
      logoutc += parseFloat(`${2}`);
   for (let h = 0; h < 2; h++) {
       let logo5 = String.fromCharCode(108,97,110,103,115,95,99,95,54,50,0);
       let arrowH = false;
       let ying9 = true;
       let whiteanimationliveY = new Map([[String.fromCharCode(116,95,51,48,95,115,117,98,100,97,116,97,0),false ], [String.fromCharCode(98,95,51,55,95,99,111,114,114,101,99,116,105,110,103,0),false ]]);
       let neonc = String.fromCharCode(104,95,49,51,95,99,111,110,110,101,99,116,111,114,0);
         logo5 += `${((ying9 ? 3 : 5) + 1)}`;
      for (let m = 0; m < 2; m++) {
          let nendQ = 0.0;
          let sharemodalm = String.fromCharCode(119,95,49,57,95,99,104,111,111,115,105,110,103,0);
          let logob = [644, 819];
         arrowH = neonc.includes(`${nendQ}`);
         nendQ += parseFloat(`${3 << (Math.min(2, sharemodalm.length))}`);
         sharemodalm = `${1 - logob.length}`;
         logob = [sharemodalm.length];
      }
      for (let m = 0; m < 3; m++) {
         neonc += "2";
      }
      for (let k = 0; k < 2; k++) {
         whiteanimationliveY = new Map([[`${ying9}`, (2 / (Math.max(5, (ying9 ? 5 : 5))))]]);
      }
       let fillF = true;
       let paginationA = true;
         logo5 += `${((fillF ? 5 : 3) - (ying9 ? 4 : 5))}`;
      for (let w = 0; w < 3; w++) {
         arrowH = logo5.length >= 85;
      }
      for (let q = 0; q < 3; q++) {
          let basketballplayerplaceholder3 = String.fromCharCode(116,95,55,54,95,104,97,108,100,99,108,117,116,115,114,99,0);
          let middlebrightnessz = String.fromCharCode(116,95,52,48,95,104,97,110,103,0);
          let robotom = 0.0;
          let activityN = [865, 891];
          let mbnativej = 2.0;
         fillF = whiteanimationliveY.size <= 91;
         basketballplayerplaceholder3 += `${basketballplayerplaceholder3.length ^ 2}`;
         middlebrightnessz = `${basketballplayerplaceholder3.length}`;
         robotom -= parseFloat(`${3 >> (Math.min(3, Math.abs(parseInt(`${robotom}`))))}`);
         activityN.push(3);
         mbnativej += parseFloat(`${basketballplayerplaceholder3.length % (Math.max(middlebrightnessz.length, 4))}`);
      }
      do {
          let benefite = String.fromCharCode(112,95,49,56,95,101,110,99,111,100,101,100,112,111,105,110,116,0);
          let zhuboh = String.fromCharCode(115,109,104,100,95,50,95,57,53,0);
          let libjsinspectorO = 3.0;
         whiteanimationliveY = new Map([[neonc, neonc.length ^ 2]]);
         benefite = `${zhuboh.length}`;
         zhuboh += "1";
         libjsinspectorO += parseFloat(`${benefite.length}`);
         if (whiteanimationliveY.size == 24061) {
            break;
         }
      } while (((4 << (Math.min(4, Math.abs(whiteanimationliveY.size)))) == 5) && (whiteanimationliveY.size == 24061));
         whiteanimationliveY = new Map([[`${paginationA}`, ((paginationA ? 2 : 1))]]);
       let arrowupH = false;
       let selectionD = true;
      binddatasE[logo5] = 3 & whiteanimationliveY.size;
   }

    if (this.state.paused !== nextProps.paused) {

      binddatasE = new Map([[`${icondefaultthumbnailL}`, iconclosewhiteb.length]]);
   do {
      binddatasE = new Map([[benefit2, 2 - benefit2.length]]);
      if (4364733 == binddatasE.size) {
         break;
      }
   } while ((binddatasE.size > mailU.size) && (4364733 == binddatasE.size));
      renewM[iconclosewhiteb] = 3;
   for (let s = 0; s < 2; s++) {
      benefit2 = `${umengd}`;
   }
      this.setState({
        paused: nextProps.paused,
      });
      benefit2 += "2";
   while (4.50 <= (stepb - parseFloat(`${iconclosewhiteb.length}`)) && 5 <= (iconclosewhiteb.length % 2)) {
       let register_cv = new Map([[String.fromCharCode(110,95,50,51,95,98,101,108,111,119,0),574], [String.fromCharCode(97,99,99,101,110,116,95,109,95,55,48,0),723]]);
       let videocommon_ = true;
       let librrcF = String.fromCharCode(116,104,101,111,114,97,95,55,95,53,55,0);
       let buildo = 5.0;
       let iconsubssuccessw = [787, 727];
          let gifta = String.fromCharCode(108,95,50,51,95,105,116,101,114,0);
         register_cv[librrcF] = gifta.length;
         videocommon_ = videocommon_ || buildo < 77.34;
      do {
          let navigationZ = String.fromCharCode(120,95,52,54,95,110,111,105,115,101,115,0);
          let targetk = 0;
         register_cv[`${videocommon_}`] = 3;
         navigationZ = `${1 ^ targetk}`;
         targetk >>= Math.min(4, Math.abs(targetk));
         if (register_cv.size == 2063389) {
            break;
         }
      } while ((!librrcF.startsWith(`${register_cv.size}`)) && (register_cv.size == 2063389));
      for (let r = 0; r < 3; r++) {
         librrcF += `${(register_cv.size * (videocommon_ ? 1 : 4))}`;
      }
       let serviceG = String.fromCharCode(112,97,105,114,105,110,103,95,56,95,55,0);
       let orange_ = String.fromCharCode(107,95,56,49,95,105,102,110,115,0);
          let paget = String.fromCharCode(97,112,116,120,104,100,95,114,95,56,53,0);
         orange_ = `${librrcF.length - parseInt(`${buildo}`)}`;
         paget = `${paget.length % (Math.max(paget.length, 2))}`;
       let iconnotificationnew8 = String.fromCharCode(99,104,101,99,107,105,110,103,95,121,95,52,56,0);
       let ewardedz = String.fromCharCode(107,95,54,95,102,111,114,116,104,0);
      while (!ewardedz.includes(`${register_cv.size}`)) {
          let penaltyb = [972, 800];
          let eyecloseH = [223, 9];
          let largebrightnessW = 1.0;
          let iconchatsendC = false;
          let profileframeQ = [744, 567];
         ewardedz = `${iconnotificationnew8.length * eyecloseH.length}`;
         penaltyb = [3];
         eyecloseH = [3 + profileframeQ.length];
         largebrightnessW *= parseFloat(`${profileframeQ.length}`);
         break;
      }
      if (4 < (iconnotificationnew8.length ^ register_cv.size)) {
         iconnotificationnew8 += `${((videocommon_ ? 2 : 5) + 2)}`;
      }
      do {
         serviceG += `${serviceG.length % (Math.max(2, 2))}`;
         if (String.fromCharCode(120,120,119,116,108,120,114,53,0) == serviceG) {
            break;
         }
      } while ((String.fromCharCode(120,120,119,116,108,120,114,53,0) == serviceG) && (serviceG.includes(`${iconnotificationnew8.length}`)));
         serviceG += `${register_cv.size ^ parseInt(`${buildo}`)}`;
      if (ewardedz.endsWith(`${iconsubssuccessw.length}`)) {
         ewardedz += "1";
      }
       let vieweri = [548, 590];
       let defaultbasketballbge = [861, 530];
          let policyD = String.fromCharCode(117,112,115,101,114,116,95,119,95,51,48,0);
          let networkR = 3;
         iconnotificationnew8 = `${2 & parseInt(`${buildo}`)}`;
         policyD += `${(policyD == String.fromCharCode(90,0) ? policyD.length : networkR)}`;
         networkR %= Math.max(3 * policyD.length, 3);
      do {
          let release_92l = 0.0;
          let penaltygoald = 5.0;
          let videojs8 = String.fromCharCode(99,109,115,103,95,53,95,55,48,0);
          let baselineJ = 4.0;
         vieweri.push(2);
         release_92l += parseFloat(`${parseInt(`${penaltygoald}`)}`);
         videojs8 = "1";
         baselineJ += parseInt(`${penaltygoald}`) << (Math.min(Math.abs(parseInt(`${baselineJ}`)), 1));
         if (3095916 == vieweri.length) {
            break;
         }
      } while ((3095916 == vieweri.length) && (5 < (3 & librrcF.length)));
      stepb += parseFloat(`${2}`);
      break;
   }
   do {
      completeQ.push(((icondefaultthumbnailL ? 5 : 4)));
      if (164535 == completeQ.length) {
         break;
      }
   } while ((binddatasE[`${completeQ.length}`] == null) && (164535 == completeQ.length));
      iconclosewhiteb = `${3 * parseInt(`${logoutc}`)}`;

    }

    if (this.styles.videoStyle !== nextProps.videoStyle) {

   do {
      icondefaultthumbnailL = 68 <= benefit2.length;
      if (icondefaultthumbnailL ? !icondefaultthumbnailL : icondefaultthumbnailL) {
         break;
      }
   } while (((completeQ.length % 3) > 3 && completeQ.length > 3) && (icondefaultthumbnailL ? !icondefaultthumbnailL : icondefaultthumbnailL));
   do {
       let pushB = String.fromCharCode(102,116,115,116,111,107,95,99,95,53,56,0);
       let settingsI = String.fromCharCode(111,95,49,52,95,114,116,97,100,100,114,115,0);
       let catagory9 = 2.0;
       let agreementg = String.fromCharCode(115,99,111,112,101,100,95,113,95,52,48,0);
          let nbatrophyr = new Map([[String.fromCharCode(99,95,49,50,95,114,101,97,100,105,110,0),String.fromCharCode(109,105,110,105,109,97,95,50,95,57,0)], [String.fromCharCode(111,95,54,55,95,99,111,108,111,114,0),String.fromCharCode(115,105,103,115,95,117,95,51,51,0)], [String.fromCharCode(114,101,116,97,105,110,115,95,121,95,51,54,0),String.fromCharCode(98,95,54,49,95,97,112,105,0)]]);
          let libreactnativejni7 = String.fromCharCode(109,105,110,95,56,95,55,50,0);
          let sliderW = [495, 920];
         settingsI += `${libreactnativejni7.length << (Math.min(1, sliderW.length))}`;
         nbatrophyr[`${nbatrophyr.size}`] = nbatrophyr.size + nbatrophyr.size;
         libreactnativejni7 += `${nbatrophyr.size}`;
         pushB = `${parseInt(`${catagory9}`) % (Math.max(agreementg.length, 5))}`;
      if (!agreementg.endsWith(`${catagory9}`)) {
         agreementg += `${parseInt(`${catagory9}`) >> (Math.min(Math.abs(1), 1))}`;
      }
      if (pushB == agreementg) {
         agreementg = `${parseInt(`${catagory9}`) + settingsI.length}`;
      }
      while (agreementg.startsWith(`${catagory9}`)) {
         catagory9 /= Math.max(parseFloat(`${1}`), 3);
         break;
      }
       let cornershootC = 1.0;
       let hongkongJ = 1.0;
      do {
          let schedulerq = String.fromCharCode(97,108,97,99,100,115,112,95,57,95,57,50,0);
          let loginsuccesse = 5.0;
          let circlej = false;
         cornershootC -= parseFloat(`${2}`);
         schedulerq = `${schedulerq.length / (Math.max(2, 8))}`;
         loginsuccesse /= Math.max((parseFloat(`${(circlej ? 1 : 3)}`)), 3);
         if (cornershootC == 3072407.0) {
            break;
         }
      } while ((cornershootC == 3072407.0) && ((parseInt(`${cornershootC}`) * settingsI.length) >= 1));
         settingsI = `${settingsI.length * 2}`;
          let airbnbstarselectedG = 1.0;
          let targetu = 1;
         pushB = `${parseInt(`${airbnbstarselectedG}`) >> (Math.min(Math.abs(parseInt(`${hongkongJ}`)), 2))}`;
         airbnbstarselectedG += targetu << (Math.min(Math.abs(targetu), 5));
       let libfbjnix = 2.0;
      while (2.20 < (2 * hongkongJ)) {
         libfbjnix *= parseFloat(`${parseInt(`${cornershootC}`) - 1}`);
         break;
      }
          let modeQ = new Map([[String.fromCharCode(116,95,51,55,95,109,98,101,100,0),50], [String.fromCharCode(105,109,105,113,95,106,95,52,57,0),260]]);
          let imageactionlived = 0.0;
          let znewsshareA = 4.0;
         cornershootC /= Math.max(parseFloat(`${3 ^ parseInt(`${libfbjnix}`)}`), 1);
         modeQ = new Map([[`${modeQ.size}`, parseInt(`${imageactionlived}`) << (Math.min(Math.abs(modeQ.size), 4))]]);
         imageactionlived *= 2;
         znewsshareA += parseInt(`${imageactionlived}`);
      benefit2 += `${agreementg.length % (Math.max(8, mailU.size))}`;
      if (2218035 == benefit2.length) {
         break;
      }
   } while (((parseInt(`${sharemodalB}`) / (Math.max(benefit2.length, 7))) <= 4 || 5 <= (4 & benefit2.length)) && (2218035 == benefit2.length));
      completeQ = [renewM.size | benefit2.length];
      completeQ = [2];
      this.styles.videoStyle = nextProps.videoStyle;
      benefit2 = `${umengd - parseInt(`${sharemodalB}`)}`;
      renewM = new Map([[`${renewM.size}`, renewM.size % 1]]);
   do {
      greenarrowupp = completeQ.length == 76;
      if (greenarrowupp ? !greenarrowupp : greenarrowupp) {
         break;
      }
   } while ((!greenarrowupp) && (greenarrowupp ? !greenarrowupp : greenarrowupp));
      questiconZ -= parseFloat(`${3 << (Math.min(5, Math.abs(renewM.size)))}`);

    }

    if (this.styles.containerStyle !== nextProps.style) {

      mailU[`${stepb}`] = parseInt(`${stepb}`) * iconclosewhiteb.length;
   for (let r = 0; r < 3; r++) {
      greenarrowupp = iconclosewhiteb.length <= parseInt(`${logoutc}`);
   }
      completeQ = [umengd];
      umengd += 3;
      this.styles.containerStyle = nextProps.style;
   do {
      iconclosewhiteb = "3";
      if (iconclosewhiteb == String.fromCharCode(97,111,104,114,100,105,56,99,118,111,0)) {
         break;
      }
   } while ((iconclosewhiteb.length <= umengd) && (iconclosewhiteb == String.fromCharCode(97,111,104,114,100,105,56,99,118,111,0)));
   do {
       let wind7 = new Map([[String.fromCharCode(116,119,111,95,108,95,51,55,0),275], [String.fromCharCode(106,95,57,95,105,110,116,114,97,112,114,101,100,0),678]]);
       let libmapbufferjni1 = String.fromCharCode(99,104,97,110,103,101,115,101,116,95,109,95,50,48,0);
         libmapbufferjni1 = "2";
         libmapbufferjni1 = `${wind7.size}`;
      if (2 <= wind7.size) {
          let mbbidt = 4.0;
          let eyeopenF = String.fromCharCode(111,95,54,55,95,117,110,108,105,110,107,0);
          let arrowdownp = String.fromCharCode(112,95,52,95,97,114,102,113,0);
          let encrypt5 = 2.0;
          let googleY = String.fromCharCode(100,108,114,114,95,103,95,50,52,0);
         wind7[`${encrypt5}`] = (googleY == String.fromCharCode(73,0) ? parseInt(`${encrypt5}`) : googleY.length);
         mbbidt -= 1 * eyeopenF.length;
         eyeopenF = "1";
         arrowdownp += `${eyeopenF.length}`;
      }
      while ((3 * wind7.size) > 1) {
          let smallsound1 = [892, 464];
         libmapbufferjni1 = `${wind7.size / 2}`;
         smallsound1 = [smallsound1.length | smallsound1.length];
         break;
      }
         libmapbufferjni1 = `${3 | libmapbufferjni1.length}`;
         wind7 = new Map([[`${wind7.size}`, wind7.size]]);
      completeQ = [2 ^ wind7.size];
      if (2087248 == completeQ.length) {
         break;
      }
   } while ((2087248 == completeQ.length) && (icondefaultthumbnailL));
      questiconZ *= parseFloat(`${benefit2.length}`);
      stepb -= parseFloat(`${mailU.size}`);

    }
  }

   
  componentDidMount() {
       let whatsappr = 3.0;
    let reactnavigationB = [String.fromCharCode(120,95,53,54,95,115,99,97,110,120,0), String.fromCharCode(110,101,115,116,95,50,95,52,53,0)];
    let scheduleZ = String.fromCharCode(97,117,116,104,114,111,114,105,122,97,116,105,111,110,95,56,95,55,56,0);
    let iconarrowleftX = new Map([[String.fromCharCode(111,118,101,114,108,97,121,105,110,103,95,115,95,53,48,0),648], [String.fromCharCode(99,111,110,116,105,110,117,101,95,121,95,54,52,0),572]]);
    let bootsplash6 = String.fromCharCode(120,95,53,49,95,99,117,116,101,115,116,0);
    let countryS = String.fromCharCode(112,95,57,48,95,119,99,104,97,114,0);
    let bellreminderw = String.fromCharCode(99,111,117,110,116,105,110,103,95,107,95,50,51,0);
    let rewardvideoM = [26, 874, 270];
    let iconchatsendg = 4;
    let bgvipsportd = String.fromCharCode(120,95,52,52,95,101,108,115,116,0);
    let reactnavigationBL = String.fromCharCode(109,97,103,110,105,116,117,100,101,95,116,95,49,48,0);
    let dicelogoj = String.fromCharCode(109,101,116,104,111,100,95,49,95,56,51,0);
    let overlayA = String.fromCharCode(100,115,116,95,97,95,54,48,0);
    let typingV = String.fromCharCode(108,95,55,56,95,101,120,99,108,117,115,105,111,110,115,0);
      reactnavigationB.push((bellreminderw == String.fromCharCode(85,0) ? bellreminderw.length : scheduleZ.length));
   for (let s = 0; s < 1; s++) {
      bgvipsportd += `${reactnavigationBL.length / (Math.max(1, 3))}`;
   }
      iconarrowleftX = new Map([[bgvipsportd, (String.fromCharCode(98,0) == scheduleZ ? bgvipsportd.length : scheduleZ.length)]]);
      iconarrowleftX[bgvipsportd] = (bgvipsportd == String.fromCharCode(86,0) ? reactnavigationBL.length : bgvipsportd.length);

    const position = this.calculateVolumePositionFromVolume();
      bellreminderw = "1";
   for (let r = 0; r < 1; r++) {
      bellreminderw += `${bgvipsportd.length}`;
   }
      reactnavigationBL += `${2 % (Math.max(8, bootsplash6.length))}`;
   for (let r = 0; r < 1; r++) {
       let pushd = true;
       let changeO = true;
       let classesV = true;
         pushd = !classesV;
       let codegen8 = String.fromCharCode(117,105,110,116,95,104,95,52,49,0);
      do {
          let datat = new Map([[String.fromCharCode(117,95,57,57,95,98,121,116,101,115,104,117,109,97,110,0),342], [String.fromCharCode(103,100,105,103,114,97,98,95,104,95,52,51,0),733]]);
         changeO = !codegen8.startsWith(`${changeO}`);
         datat[`${datat.size}`] = 1 * datat.size;
         if (changeO ? !changeO : changeO) {
            break;
         }
      } while ((changeO || classesV) && (changeO ? !changeO : changeO));
         codegen8 = "3";
         changeO = (!pushd ? changeO : pushd);
      for (let s = 0; s < 2; s++) {
         changeO = (pushd ? !classesV : !pushd);
      }
      for (let o = 0; o < 1; o++) {
          let typingloadingW = 5.0;
          let playercommonI = String.fromCharCode(115,95,56,53,95,115,112,100,105,102,0);
         changeO = codegen8.length == 9;
         typingloadingW *= parseInt(`${typingloadingW}`);
         playercommonI += `${(playercommonI == String.fromCharCode(57,0) ? playercommonI.length : parseInt(`${typingloadingW}`))}`;
      }
       let matchE = String.fromCharCode(99,95,54,52,95,101,120,112,111,115,117,114,101,0);
      for (let u = 0; u < 2; u++) {
         codegen8 += "1";
      }
      bellreminderw = `${(String.fromCharCode(106,0) == bgvipsportd ? bgvipsportd.length : (changeO ? 3 : 5))}`;
   }

    let state = this.state;
   if ((2 | bellreminderw.length) > 4 || (2 | bellreminderw.length) > 1) {
      bellreminderw = `${bootsplash6.length}`;
   }
   if (3 >= (1 | bellreminderw.length) || (whatsappr * bellreminderw.length) >= 3.26) {
      whatsappr *= 3;
   }
       let shielddoneP = false;
       let kicka = String.fromCharCode(118,95,50,54,95,115,99,97,108,101,115,0);
       let unimplementedviewS = String.fromCharCode(102,95,53,55,95,116,97,99,107,0);
         kicka = `${((shielddoneP ? 5 : 4))}`;
      do {
         kicka += `${kicka.length - 3}`;
         if (kicka == String.fromCharCode(118,55,101,0)) {
            break;
         }
      } while ((kicka.length <= unimplementedviewS.length) && (kicka == String.fromCharCode(118,55,101,0)));
      if (kicka.length == 1 && !shielddoneP) {
         shielddoneP = !shielddoneP && kicka.length >= 13;
      }
      for (let n = 0; n < 3; n++) {
          let subsf = 2.0;
          let singapore8 = 2.0;
          let sigmobp = 5.0;
         shielddoneP = !shielddoneP;
         subsf *= parseInt(`${singapore8}`);
         sigmobp *= parseFloat(`${2}`);
      }
      if (unimplementedviewS.length <= kicka.length) {
          let downloadingj = String.fromCharCode(112,108,97,116,102,111,114,109,95,103,95,51,52,0);
          let videovarf = String.fromCharCode(116,109,112,108,95,99,95,51,48,0);
          let defaultpredictionprofileO = [435, 318];
          let champion7 = String.fromCharCode(116,114,105,103,103,101,114,95,99,95,51,55,0);
         unimplementedviewS = "1";
         downloadingj += `${defaultpredictionprofileO.length | 1}`;
         videovarf = `${(champion7 == String.fromCharCode(100,0) ? downloadingj.length : champion7.length)}`;
         defaultpredictionprofileO = [videovarf.length];
      }
      do {
         kicka += `${((shielddoneP ? 4 : 5))}`;
         if (kicka.length == 2999348) {
            break;
         }
      } while ((5 < unimplementedviewS.length) && (kicka.length == 2999348));
      do {
          let yellowtoredA = String.fromCharCode(114,101,108,111,97,100,105,110,103,95,116,95,55,49,0);
          let successs = String.fromCharCode(107,95,50,51,95,112,114,101,115,117,98,109,105,116,0);
         kicka = `${(yellowtoredA == String.fromCharCode(71,0) ? yellowtoredA.length : unimplementedviewS.length)}`;
         successs += "3";
         if (String.fromCharCode(52,104,52,112,113,106,95,111,0) == kicka) {
            break;
         }
      } while ((unimplementedviewS.length >= 1) && (String.fromCharCode(52,104,52,112,113,106,95,111,0) == kicka));
       let applex = String.fromCharCode(119,95,56,49,95,97,118,99,105,110,116,114,97,0);
       let grayC = String.fromCharCode(111,95,54,56,95,110,101,101,100,0);
      if (kicka.length >= 2) {
          let code5 = String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,95,51,95,49,51,0);
          let awayc = String.fromCharCode(120,95,54,50,95,110,118,99,0);
          let weiboj = 4.0;
         kicka = `${(kicka.length ^ (shielddoneP ? 5 : 4))}`;
         code5 = `${parseInt(`${weiboj}`)}`;
         awayc = `${code5.length}`;
         weiboj -= parseInt(`${weiboj}`) & 3;
      }
      reactnavigationBL += `${bootsplash6.length ^ 2}`;
   if (bgvipsportd.length == reactnavigationBL.length) {
       let libapminsightb5 = new Map([[String.fromCharCode(108,95,52,54,95,99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,0),628], [String.fromCharCode(99,111,110,110,101,99,116,105,111,110,99,98,95,107,95,55,51,0),485]]);
          let iconviewergifG = String.fromCharCode(115,101,103,105,116,101,114,95,118,95,51,50,0);
          let options2 = 0.0;
          let loginsuccesss = String.fromCharCode(112,95,51,52,95,116,114,97,99,107,115,0);
         libapminsightb5 = new Map([[`${options2}`, 1 - parseInt(`${options2}`)]]);
         iconviewergifG += `${loginsuccesss.length}`;
         loginsuccesss += `${iconviewergifG.length & loginsuccesss.length}`;
      do {
         libapminsightb5 = new Map([[`${libapminsightb5.size}`, 1 | libapminsightb5.size]]);
         if (libapminsightb5.size == 4578348) {
            break;
         }
      } while ((libapminsightb5.size == 4578348) && (libapminsightb5.size == 5));
          let fillJ = String.fromCharCode(116,111,107,101,110,105,122,101,114,95,50,95,57,56,0);
         libapminsightb5 = new Map([[`${libapminsightb5.size}`, fillJ.length]]);
      reactnavigationBL += `${3 ^ bootsplash6.length}`;
   }

    this.setVolumePosition(position);
      countryS = `${rewardvideoM.length + 1}`;
      scheduleZ = `${scheduleZ.length << (Math.min(5, Math.abs(iconchatsendg)))}`;
      whatsappr += bellreminderw.length;
       let encryptk = 4.0;
       let iconusere = String.fromCharCode(118,109,97,102,95,50,95,49,54,0);
      do {
         iconusere = `${(iconusere == String.fromCharCode(89,0) ? iconusere.length : parseInt(`${encryptk}`))}`;
         if (String.fromCharCode(118,48,53,114,50,108,99,0) == iconusere) {
            break;
         }
      } while ((String.fromCharCode(118,48,53,114,50,108,99,0) == iconusere) && ((iconusere.length % 5) >= 1 && (encryptk / (Math.max(parseFloat(`${iconusere.length}`), 1))) >= 5.50));
         encryptk *= (parseFloat(`${iconusere == String.fromCharCode(95,0) ? iconusere.length : parseInt(`${encryptk}`)}`));
         encryptk -= parseFloat(`${2}`);
          let light1 = String.fromCharCode(104,95,53,56,95,112,111,115,101,115,0);
         iconusere = `${parseInt(`${encryptk}`)}`;
         light1 += `${light1.length}`;
          let backwhiteh = false;
          let reactnativeratingsH = 2;
          let android3 = 0.0;
         iconusere = `${reactnativeratingsH + parseInt(`${encryptk}`)}`;
         backwhiteh = android3 > 47.64;
         reactnativeratingsH &= ((backwhiteh ? 3 : 5) | parseInt(`${android3}`));
      do {
         iconusere = `${iconusere.length}`;
         if (iconusere.length == 3900158) {
            break;
         }
      } while ((iconusere.length == 3900158) && (!iconusere.endsWith(`${encryptk}`)));
      reactnavigationB = [iconchatsendg];

    state.volumeOffset = position;
      iconchatsendg <<= Math.min(5, reactnavigationBL.length);
   if (1 == (bootsplash6.length ^ 5) || (5 ^ bootsplash6.length) == 5) {
      iconchatsendg *= countryS.length * 2;
   }
   do {
      rewardvideoM.push(2);
      if (rewardvideoM.length == 3997145) {
         break;
      }
   } while (((rewardvideoM.length - 3) <= 1 && (3 - reactnavigationB.length) <= 3) && (rewardvideoM.length == 3997145));
      iconarrowleftX[bootsplash6] = 1 + iconchatsendg;

    this.mounted = true;
   do {
      countryS = `${(String.fromCharCode(122,0) == reactnavigationBL ? reactnavigationBL.length : parseInt(`${whatsappr}`))}`;
      if (4315920 == countryS.length) {
         break;
      }
   } while (((countryS.length | 1) > 5) && (4315920 == countryS.length));
       let leaguedetailsbgf = 4.0;
      while (leaguedetailsbgf >= 5.62) {
         leaguedetailsbgf /= Math.max(parseInt(`${leaguedetailsbgf}`), 5);
         break;
      }
      while ((leaguedetailsbgf / 2.43) <= 5.19) {
         leaguedetailsbgf /= Math.max(2, parseInt(`${leaguedetailsbgf}`) << (Math.min(3, Math.abs(parseInt(`${leaguedetailsbgf}`)))));
         break;
      }
         leaguedetailsbgf *= parseInt(`${leaguedetailsbgf}`);
      reactnavigationB = [iconchatsendg];
   if ((iconarrowleftX.size / (Math.max(1, 8))) == 5) {
      overlayA += `${dicelogoj.length}`;
   }
      iconchatsendg /= Math.max(2, (bgvipsportd == String.fromCharCode(84,0) ? iconchatsendg : bgvipsportd.length));


    this.setState(state);
       let floatingi = String.fromCharCode(104,95,51,55,95,115,101,108,101,99,116,105,111,110,115,0);
       let suboutK = String.fromCharCode(98,95,52,56,95,116,105,99,107,101,114,115,0);
       let libfollyd = 4.0;
      do {
         suboutK = `${suboutK.length}`;
         if (String.fromCharCode(53,114,109,53,103,48,114,50,116,111,0) == suboutK) {
            break;
         }
      } while ((suboutK.length == floatingi.length) && (String.fromCharCode(53,114,109,53,103,48,114,50,116,111,0) == suboutK));
          let traminiM = 0;
          let optionsm = true;
         suboutK = `${(String.fromCharCode(50,0) == floatingi ? floatingi.length : (optionsm ? 2 : 5))}`;
         traminiM &= traminiM >> (Math.min(Math.abs(traminiM), 3));
         optionsm = traminiM == traminiM;
      if ((parseInt(`${libfollyd}`) / (Math.max(3, suboutK.length))) <= 4 || (parseInt(`${libfollyd}`) / (Math.max(8, suboutK.length))) <= 4) {
          let china6 = true;
          let whistleorange1 = 5;
          let benefita = true;
         suboutK = `${(parseInt(`${libfollyd}`) / (Math.max(7, (china6 ? 5 : 5))))}`;
         china6 = benefita;
         whistleorange1 %= Math.max(1, (whistleorange1 ^ (benefita ? 3 : 3)));
      }
      for (let a = 0; a < 1; a++) {
         floatingi += `${3 >> (Math.min(1, suboutK.length))}`;
      }
         libfollyd -= parseFloat(`${suboutK.length}`);
       let showmoreY = 5.0;
       let libturbomodulejsijnic = 1.0;
      for (let r = 0; r < 1; r++) {
         showmoreY *= parseFloat(`${parseInt(`${libturbomodulejsijnic}`)}`);
      }
      if ((floatingi.length - 2) <= 5) {
         libfollyd /= Math.max(5, parseFloat(`${2}`));
      }
          let javaw = false;
          let iconorientationK = String.fromCharCode(120,95,50,49,95,104,97,97,114,0);
         libturbomodulejsijnic -= parseFloat(`${1 ^ parseInt(`${libturbomodulejsijnic}`)}`);
         javaw = iconorientationK.length > 69 || javaw;
         iconorientationK += `${(String.fromCharCode(118,0) == iconorientationK ? (javaw ? 2 : 4) : iconorientationK.length)}`;
      bootsplash6 += `${parseInt(`${whatsappr}`) % 3}`;
   for (let v = 0; v < 2; v++) {
      countryS += `${scheduleZ.length}`;
   }
      reactnavigationB = [1 * reactnavigationBL.length];
   for (let y = 0; y < 2; y++) {
       let gifgoalbgV = String.fromCharCode(103,101,116,97,117,120,118,97,108,95,119,95,57,51,0);
       let dplus1 = new Map([[String.fromCharCode(105,95,56,95,115,116,105,99,107,101,114,0),1000], [String.fromCharCode(108,95,49,55,95,100,112,110,97,109,101,0),700]]);
       let const_rgW = false;
      while ((3 >> (Math.min(3, Math.abs(dplus1.size)))) > 5 || 3 > dplus1.size) {
         dplus1 = new Map([[`${dplus1.size}`, gifgoalbgV.length]]);
         break;
      }
      if (4 > gifgoalbgV.length && !const_rgW) {
          let libturbomodulejsijnij = new Map([[String.fromCharCode(106,95,52,53,95,99,111,109,112,97,114,105,115,111,110,0),false ], [String.fromCharCode(98,119,103,116,95,55,95,52,0),true ]]);
          let optionsz = new Map([[String.fromCharCode(107,95,54,52,95,104,111,108,101,0),48], [String.fromCharCode(112,95,56,54,95,114,103,101,110,0),159]]);
          let yellowscoreballz = false;
          let carouselu = 1.0;
         const_rgW = yellowscoreballz;
         libturbomodulejsijnij[`${carouselu}`] = 2;
         optionsz[`${carouselu}`] = parseInt(`${carouselu}`) / 1;
      }
      for (let w = 0; w < 2; w++) {
          let giftA = new Map([[String.fromCharCode(108,95,52,50,95,115,101,113,117,101,110,99,101,115,0),String.fromCharCode(110,95,54,49,95,109,111,118,101,0)], [String.fromCharCode(99,104,97,110,103,105,110,103,95,49,95,53,57,0),String.fromCharCode(112,97,116,104,95,100,95,51,56,0)], [String.fromCharCode(112,111,108,121,109,111,100,95,53,95,50,57,0),String.fromCharCode(110,97,118,105,103,97,116,105,111,110,98,97,114,95,105,95,55,49,0)]]);
          let ccdfbdabcabbbedbB = new Map([[String.fromCharCode(97,95,57,95,100,114,98,103,0),164], [String.fromCharCode(110,111,110,110,117,108,108,95,97,95,52,56,0),529], [String.fromCharCode(106,95,51,51,95,109,101,109,110,0),702]]);
          let iconbellr = String.fromCharCode(98,117,103,115,95,102,95,53,0);
         dplus1[`${const_rgW}`] = ccdfbdabcabbbedbB.size;
         giftA[`${iconbellr}`] = (iconbellr == String.fromCharCode(111,0) ? giftA.size : iconbellr.length);
         ccdfbdabcabbbedbB[`${iconbellr}`] = (iconbellr == String.fromCharCode(108,0) ? iconbellr.length : giftA.size);
      }
      do {
          let orangeM = true;
          let main_t7 = 4.0;
          let libjsi6 = String.fromCharCode(114,101,115,101,114,118,101,100,95,111,95,56,50,0);
          let fullscreenmaxs = [String.fromCharCode(100,111,109,97,105,110,115,95,50,95,54,52,0), String.fromCharCode(100,101,99,108,97,114,101,95,54,95,54,48,0)];
         const_rgW = dplus1.size <= 34;
         orangeM = (81 < ((orangeM ? 81 : libjsi6.length) % (Math.max(libjsi6.length, 9))));
         main_t7 /= Math.max(5, parseFloat(`${parseInt(`${main_t7}`) & 3}`));
         fullscreenmaxs = [(String.fromCharCode(51,0) == libjsi6 ? libjsi6.length : parseInt(`${main_t7}`))];
         if (const_rgW ? !const_rgW : const_rgW) {
            break;
         }
      } while ((const_rgW ? !const_rgW : const_rgW) && (5 == (dplus1.size | 3)));
       let libyogau = 1;
       let gifgoalbgX = 0;
         gifgoalbgX %= Math.max(libyogau, 2);
         libyogau &= libyogau - dplus1.size;
          let javag = false;
          let informationa = [421, 406];
          let detailsq = String.fromCharCode(100,95,49,55,95,99,111,108,108,101,99,116,97,98,108,101,0);
         gifgoalbgX >>= Math.min(3, Math.abs(detailsq.length / 3));
         javag = !javag;
         informationa = [(1 + (javag ? 3 : 1))];
         detailsq = "2";
      for (let b = 0; b < 2; b++) {
         dplus1 = new Map([[`${dplus1.size}`, 3]]);
      }
      rewardvideoM.push(reactnavigationB.length ^ bellreminderw.length);
   }

  }

   
  componentWillUnmount() {
       let long_3L = 3;
    let uimanagerk = false;
    let componentregistry4 = String.fromCharCode(114,101,108,101,118,97,110,116,95,48,95,56,48,0);
    let whitesmalltick0 = true;
    let iconpointscorez = String.fromCharCode(117,95,49,48,48,95,112,117,116,105,110,116,0);
    let imagewatchliveq = false;
    let loginsuccessG = 3.0;
    let componentN = String.fromCharCode(119,95,50,57,95,111,114,103,0);
    let philippines_ = new Map([[String.fromCharCode(100,101,99,114,121,112,116,101,100,95,107,95,53,53,0),475], [String.fromCharCode(99,101,110,116,114,97,108,105,116,121,95,97,95,54,53,0),113], [String.fromCharCode(100,105,115,99,117,115,115,95,101,95,56,52,0),649]]);
    let verticalU = String.fromCharCode(106,95,53,55,95,109,111,118,101,115,0);
    let calendare = String.fromCharCode(103,101,110,115,95,120,95,52,53,0);
    let streaming8 = String.fromCharCode(117,95,57,95,108,111,103,100,98,0);
       let lessu = new Map([[String.fromCharCode(99,95,51,55,95,111,102,102,101,114,101,100,0),false ], [String.fromCharCode(107,95,57,50,95,119,100,108,116,0),true ]]);
      while ((lessu.size >> (Math.min(Math.abs(5), 1))) > 5 && 2 > (lessu.size >> (Math.min(Math.abs(5), 2)))) {
         lessu[`${lessu.size}`] = lessu.size - 3;
         break;
      }
         lessu[`${lessu.size}`] = 1 & lessu.size;
          let basketballtrophyD = 5.0;
          let sellmathbackgrounde = String.fromCharCode(105,95,56,55,95,99,104,101,99,107,105,110,103,0);
          let whitevideolivex = [175, 276, 526];
         lessu = new Map([[`${lessu.size}`, lessu.size]]);
         basketballtrophyD /= Math.max(5, parseFloat(`${whitevideolivex.length}`));
         sellmathbackgrounde += `${(String.fromCharCode(77,0) == sellmathbackgrounde ? sellmathbackgrounde.length : parseInt(`${basketballtrophyD}`))}`;
         whitevideolivex = [whitevideolivex.length + sellmathbackgrounde.length];
      componentN = `${lessu.size % 1}`;
   for (let v = 0; v < 2; v++) {
       let sinav = 3.0;
       let rocketB = [321, 612];
       let iconwatchnow6 = true;
       let disconnectedlogoU = [134, 604, 573];
       let fastforwardT = String.fromCharCode(97,95,54,95,97,99,114,111,115,115,0);
       let teamp = 3;
       let uimanagerX = 2;
      if (1 > fastforwardT.length || iconwatchnow6) {
         fastforwardT = "3";
      }
      do {
         rocketB.push(3 / (Math.max(4, disconnectedlogoU.length)));
         if (2642835 == rocketB.length) {
            break;
         }
      } while ((fastforwardT.startsWith(`${rocketB.length}`)) && (2642835 == rocketB.length));
      for (let h = 0; h < 2; h++) {
         sinav -= parseFloat(`${3}`);
      }
      for (let p = 0; p < 1; p++) {
          let detailw = 0.0;
          let nativeexC = String.fromCharCode(105,112,108,105,109,97,103,101,95,115,95,50,49,0);
          let iconarrowrightorangeZ = String.fromCharCode(98,121,114,121,95,117,95,54,0);
          let usernamew = new Map([[String.fromCharCode(122,95,55,57,95,97,100,106,117,115,116,109,101,110,116,115,0),true ], [String.fromCharCode(100,101,115,116,114,111,121,105,110,103,95,122,95,56,54,0),true ], [String.fromCharCode(115,116,116,115,95,109,95,51,56,0),true ]]);
          let dangerC = 5.0;
         teamp <<= Math.min(Math.abs(3), 4);
         detailw *= usernamew.size - parseInt(`${dangerC}`);
         nativeexC += `${usernamew.size}`;
         iconarrowrightorangeZ = `${parseInt(`${dangerC}`) + 3}`;
      }
         sinav += parseFloat(`${uimanagerX ^ 1}`);
         rocketB.push(disconnectedlogoU.length % 1);
      while ((sinav - parseFloat(`${rocketB.length}`)) >= 4.76) {
         rocketB.push(disconnectedlogoU.length | teamp);
         break;
      }
      if ((4 << (Math.min(3, fastforwardT.length))) >= 4) {
         fastforwardT = `${(uimanagerX ^ (iconwatchnow6 ? 4 : 5))}`;
      }
         uimanagerX *= 1;
         teamp %= Math.max(3, uimanagerX + 1);
      if (4 <= (4 + fastforwardT.length)) {
          let moreo = String.fromCharCode(109,118,115,101,116,95,115,95,49,0);
         teamp <<= Math.min(2, Math.abs(1 | disconnectedlogoU.length));
         moreo += `${2 % (Math.max(4, moreo.length))}`;
      }
      do {
         disconnectedlogoU.push(2 / (Math.max(parseInt(`${sinav}`), 4)));
         if (disconnectedlogoU.length == 3462342) {
            break;
         }
      } while ((disconnectedlogoU.length == 3462342) && (1 >= (uimanagerX | disconnectedlogoU.length)));
         disconnectedlogoU.push(rocketB.length % (Math.max(10, disconnectedlogoU.length)));
          let filedb = new Map([[String.fromCharCode(105,95,50,56,95,109,117,108,116,105,115,116,101,112,0),253], [String.fromCharCode(103,95,50,53,95,101,110,100,112,111,105,110,116,0),680], [String.fromCharCode(108,95,50,50,0),951]]);
          let hometeamfieldv = String.fromCharCode(97,99,114,111,115,115,102,97,100,101,95,102,95,57,49,0);
         sinav *= parseFloat(`${1 & filedb.size}`);
         filedb = new Map([[hometeamfieldv, hometeamfieldv.length]]);
      whitesmalltick0 = componentN.startsWith(`${uimanagerk}`);
   }
       let playershirto = 1.0;
       let graphR = String.fromCharCode(112,95,55,54,95,100,105,97,99,114,105,116,105,99,0);
       let middlebrightnesss = true;
       let graphicsl = true;
       let alertJ = false;
      for (let t = 0; t < 1; t++) {
          let lineJ = false;
          let register_bfu = 2.0;
          let bottomT = [881, 78];
         graphR += "1";
         lineJ = bottomT.includes(lineJ);
         register_bfu *= (parseFloat(`${parseInt(`${register_bfu}`) & (lineJ ? 5 : 4)}`));
         bottomT = [3 & parseInt(`${register_bfu}`)];
      }
         graphR = `${((middlebrightnesss ? 4 : 4))}`;
          let windm = String.fromCharCode(117,95,49,54,0);
          let zhuboI = String.fromCharCode(112,105,120,101,108,98,117,102,102,101,114,95,48,95,49,50,0);
         graphR = `${(3 | (graphicsl ? 5 : 3))}`;
         windm = "1";
         zhuboI += `${(zhuboI == String.fromCharCode(109,0) ? zhuboI.length : windm.length)}`;
          let styleb = new Map([[String.fromCharCode(117,95,53,50,95,101,109,112,116,121,0),429], [String.fromCharCode(101,95,51,50,95,118,97,97,112,105,0),766]]);
         graphicsl = (parseFloat(`${graphR.length}`) + playershirto) > 80.3;
         styleb = new Map([[`${styleb.size}`, 3 + styleb.size]]);
          let ticked9 = 0.0;
         playershirto /= Math.max(3, parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${ticked9}`)), 5))}`));
       let backwardH = [331, 508, 893];
       let shootyesgoalQ = [String.fromCharCode(117,95,51,57,95,97,112,112,101,97,114,101,100,0), String.fromCharCode(115,95,50,52,95,112,114,111,112,111,115,101,100,0)];
         middlebrightnesss = graphicsl;
      for (let b = 0; b < 2; b++) {
          let awayW = new Map([[String.fromCharCode(100,99,97,100,101,99,95,106,95,55,0),false ], [String.fromCharCode(113,99,101,108,112,100,97,116,97,95,120,95,56,53,0),true ]]);
          let lineP = false;
          let types9 = 1.0;
         backwardH.push(2);
         awayW = new Map([[`${awayW.size}`, awayW.size | 2]]);
         lineP = (awayW.size - parseInt(`${types9}`)) < 44;
         types9 *= parseFloat(`${3}`);
      }
      whitesmalltick0 = String.fromCharCode(112,0) == verticalU;
      componentregistry4 = `${2 ^ parseInt(`${loginsuccessG}`)}`;
       let shootnogoalc = [656, 815];
      if ((shootnogoalc.length / (Math.max(shootnogoalc.length, 1))) > 2 || (shootnogoalc.length / 2) > 1) {
         shootnogoalc.push(shootnogoalc.length % (Math.max(6, shootnogoalc.length)));
      }
      do {
         shootnogoalc.push(2);
         if (shootnogoalc.length == 898062) {
            break;
         }
      } while ((shootnogoalc.length == 898062) && ((shootnogoalc.length - 2) > 4 || (shootnogoalc.length - 2) > 4));
         shootnogoalc = [shootnogoalc.length];
      imagewatchliveq = uimanagerk;
   for (let e = 0; e < 2; e++) {
       let filla = 5;
       let default_64V = 4;
       let router8 = [376, 964, 165];
       let penaltyN = 4;
         filla -= filla & default_64V;
       let analyticsO = 4.0;
      do {
          let dplusF = new Map([[String.fromCharCode(117,95,55,55,95,101,109,105,116,116,101,100,0),String.fromCharCode(109,118,99,111,109,112,111,110,101,110,116,95,51,95,50,0)], [String.fromCharCode(99,111,114,111,117,116,105,110,101,95,111,95,56,56,0),String.fromCharCode(98,95,57,95,99,111,110,115,116,114,97,105,110,116,115,0)]]);
          let loginsuccessA = 0.0;
          let gestureE = String.fromCharCode(98,101,110,105,103,110,95,99,95,52,50,0);
          let moviesC = false;
          let iconadslinkL = false;
         analyticsO -= parseFloat(`${gestureE.length}`);
         dplusF = new Map([[`${moviesC}`, ((moviesC ? 1 : 3))]]);
         loginsuccessA += (parseFloat(`${(moviesC ? 2 : 4) & 1}`));
         gestureE += `${dplusF.size}`;
         iconadslinkL = (moviesC ? iconadslinkL : moviesC);
         if (analyticsO == 4501140.0) {
            break;
         }
      } while ((3.67 >= analyticsO) && (analyticsO == 4501140.0));
      if (penaltyN <= analyticsO) {
          let iconplayp = 5;
          let root4 = 1.0;
          let style9 = false;
         penaltyN /= Math.max(4, iconplayp);
         iconplayp %= Math.max(((style9 ? 2 : 2) + parseInt(`${root4}`)), 1);
         root4 -= parseInt(`${root4}`) * 2;
         style9 = 60.48 < root4;
      }
         default_64V -= parseInt(`${analyticsO}`) / (Math.max(router8.length, 3));
      while (2 >= (4 >> (Math.min(5, Math.abs(default_64V))))) {
         filla *= parseInt(`${analyticsO}`);
         break;
      }
         filla -= 2;
         penaltyN /= Math.max(1, 2 - default_64V);
      verticalU += `${(String.fromCharCode(69,0) == verticalU ? verticalU.length : (whitesmalltick0 ? 2 : 5))}`;
   }
       let stationH = String.fromCharCode(120,109,108,101,115,99,97,112,101,95,105,95,55,55,0);
      do {
         stationH += `${stationH.length & 1}`;
         if (String.fromCharCode(51,122,122,97,112,57,48,101,121,0) == stationH) {
            break;
         }
      } while ((String.fromCharCode(51,122,122,97,112,57,48,101,121,0) == stationH) && (stationH.length <= stationH.length));
         stationH += `${stationH.length - 1}`;
      for (let t = 0; t < 1; t++) {
         stationH = `${stationH.length % (Math.max(1, 10))}`;
      }
      philippines_[componentregistry4] = 1 - componentregistry4.length;
      componentregistry4 += `${1 % (Math.max(parseInt(`${loginsuccessG}`), 4))}`;
   for (let w = 0; w < 2; w++) {
       let checkboxv = String.fromCharCode(105,110,116,101,114,105,116,101,109,95,114,95,56,54,0);
       let statisticsinactiveL = 3;
       let iconarrowright0 = true;
       let greyarrowupy = new Map([[String.fromCharCode(106,95,57,48,95,116,101,115,115,101,108,97,116,101,0),295], [String.fromCharCode(112,95,48,95,115,111,108,118,101,100,0),946]]);
       let textB = String.fromCharCode(115,99,101,110,97,114,105,111,95,99,95,53,55,0);
       let nativemoduled = 5;
          let holder1 = String.fromCharCode(115,105,108,101,110,116,108,121,95,52,95,52,48,0);
          let countryk = 3;
         checkboxv = `${3 << (Math.min(5, Math.abs(greyarrowupy.size)))}`;
         holder1 += `${3 << (Math.min(3, Math.abs(countryk)))}`;
         countryk ^= (holder1 == String.fromCharCode(106,0) ? countryk : holder1.length);
      if (!iconarrowright0) {
         iconarrowright0 = (statisticsinactiveL * textB.length) < 71;
      }
      do {
          let dark8 = 1.0;
          let routerw = true;
          let bottom3 = [String.fromCharCode(99,97,108,108,105,110,103,95,115,95,52,51,0), String.fromCharCode(102,95,53,50,95,116,111,100,97,121,0)];
         statisticsinactiveL %= Math.max(4, statisticsinactiveL);
         dark8 *= parseInt(`${dark8}`) >> (Math.min(4, Math.abs(3)));
         routerw = bottom3.length > 56;
         bottom3 = [1 | parseInt(`${dark8}`)];
         if (statisticsinactiveL == 688442) {
            break;
         }
      } while ((2 == (5 >> (Math.min(3, textB.length)))) && (statisticsinactiveL == 688442));
      for (let n = 0; n < 1; n++) {
         greyarrowupy = new Map([[`${statisticsinactiveL}`, statisticsinactiveL]]);
      }
          let whiteanimationlivec = true;
          let dialogn = String.fromCharCode(109,117,108,115,117,98,95,119,95,53,54,0);
          let typinga = new Map([[String.fromCharCode(97,108,103,111,114,105,116,104,109,115,95,97,95,50,52,0),12], [String.fromCharCode(104,100,108,114,95,105,95,56,0),971], [String.fromCharCode(118,97,114,105,110,116,115,95,100,95,55,50,0),748]]);
         greyarrowupy = new Map([[`${whiteanimationlivec}`, (textB.length << (Math.min(1, Math.abs((whiteanimationlivec ? 3 : 4)))))]]);
         dialogn += `${typinga.size}`;
         typinga[`${dialogn}`] = dialogn.length * 2;
      while ((checkboxv.length | 4) <= 5) {
         statisticsinactiveL -= nativemoduled ^ textB.length;
         break;
      }
      do {
         textB += `${textB.length >> (Math.min(3, Math.abs(statisticsinactiveL)))}`;
         if (textB == String.fromCharCode(52,108,117,97,110,102,114,120,0)) {
            break;
         }
      } while ((!textB.startsWith(`${iconarrowright0}`)) && (textB == String.fromCharCode(52,108,117,97,110,102,114,120,0)));
          let sharem = String.fromCharCode(109,105,115,117,115,101,95,111,95,52,48,0);
          let pangleD = String.fromCharCode(102,114,101,101,100,111,109,95,122,95,52,57,0);
          let halffieldimageb = true;
         nativemoduled &= 1 << (Math.min(4, checkboxv.length));
         sharem = `${sharem.length}`;
         pangleD = `${(pangleD.length * (halffieldimageb ? 4 : 1))}`;
      if (2 >= (2 + nativemoduled) || 4 >= (2 + nativemoduled)) {
          let videobufferloadingk = 4.0;
         statisticsinactiveL *= (String.fromCharCode(88,0) == checkboxv ? statisticsinactiveL : checkboxv.length);
         videobufferloadingk -= parseFloat(`${parseInt(`${videobufferloadingk}`) % (Math.max(parseInt(`${videobufferloadingk}`), 8))}`);
      }
      while (4 == statisticsinactiveL) {
         statisticsinactiveL += (textB == String.fromCharCode(105,0) ? textB.length : nativemoduled);
         break;
      }
         statisticsinactiveL <<= Math.min(Math.abs(((iconarrowright0 ? 3 : 3) | textB.length)), 1);
          let chatbotphotoM = String.fromCharCode(102,109,116,115,95,103,95,53,53,0);
          let zoom5 = String.fromCharCode(105,95,53,57,95,115,116,114,105,110,103,98,117,102,102,101,114,0);
          let predictionwinr = String.fromCharCode(112,95,50,54,95,114,101,109,111,118,105,110,103,0);
         iconarrowright0 = !iconarrowright0;
         chatbotphotoM = `${predictionwinr.length}`;
         zoom5 += `${predictionwinr.length + zoom5.length}`;
         greyarrowupy = new Map([[`${statisticsinactiveL}`, 3]]);
      do {
         textB = `${2 * textB.length}`;
         if (String.fromCharCode(54,107,49,117,103,0) == textB) {
            break;
         }
      } while ((String.fromCharCode(54,107,49,117,103,0) == textB) && (1 > textB.length));
      imagewatchliveq = null != philippines_[`${whitesmalltick0}`];
   }

    this.mounted = false;
   do {
      verticalU = `${3 * iconpointscorez.length}`;
      if (354458 == verticalU.length) {
         break;
      }
   } while ((componentregistry4 == verticalU) && (354458 == verticalU.length));
      long_3L %= Math.max(5, componentregistry4.length | 1);
      iconpointscorez = `${(verticalU == String.fromCharCode(109,0) ? (uimanagerk ? 4 : 2) : verticalU.length)}`;
   for (let t = 0; t < 3; t++) {
      iconpointscorez += `${(parseInt(`${loginsuccessG}`) + (imagewatchliveq ? 4 : 3))}`;
   }
      iconpointscorez += `${long_3L}`;
   if (whitesmalltick0 && !uimanagerk) {
      whitesmalltick0 = iconpointscorez.length <= componentregistry4.length;
   }
      streaming8 = `${(String.fromCharCode(50,0) == componentregistry4 ? philippines_.size : componentregistry4.length)}`;
      verticalU += `${(componentN == String.fromCharCode(57,0) ? componentN.length : philippines_.size)}`;
   while (uimanagerk) {
       let miniC = [875, 202, 888];
      do {
          let productc = String.fromCharCode(105,95,54,0);
          let basketballq = 4.0;
          let ajaxX = String.fromCharCode(100,105,115,97,112,112,101,97,114,95,114,95,53,52,0);
         miniC.push(parseInt(`${basketballq}`));
         productc = `${productc.length}`;
         basketballq /= Math.max(parseFloat(`${ajaxX.length}`), 3);
         ajaxX += `${productc.length + ajaxX.length}`;
         if (3899227 == miniC.length) {
            break;
         }
      } while ((3899227 == miniC.length) && (miniC.includes(miniC.length)));
         miniC.push(miniC.length % (Math.max(10, miniC.length)));
       let style9a = [303, 100, 398];
      loginsuccessG -= componentN.length & long_3L;
      break;
   }

    this.clearControlTimeout();
      imagewatchliveq = (loginsuccessG + componentN.length) <= 91.70;
   if (long_3L >= loginsuccessG) {
       let type_v8J = 3.0;
       let countdowno = String.fromCharCode(117,110,115,117,112,112,111,114,116,101,100,95,117,95,54,55,0);
       let network3 = String.fromCharCode(112,108,117,114,97,108,105,122,101,100,95,117,95,55,55,0);
       let inviteo = 1.0;
       let redgoal2 = 3.0;
      if (!countdowno.includes(`${inviteo}`)) {
         countdowno = `${(countdowno == String.fromCharCode(101,0) ? countdowno.length : parseInt(`${redgoal2}`))}`;
      }
         redgoal2 *= parseFloat(`${1}`);
          let pushH = new Map([[String.fromCharCode(112,97,100,100,101,100,95,109,95,53,53,0),true ], [String.fromCharCode(117,110,102,108,97,116,116,101,110,101,100,95,108,95,56,56,0),false ]]);
          let combinedj = String.fromCharCode(100,95,53,53,95,116,101,115,116,105,109,103,97,114,105,0);
         countdowno = `${countdowno.length % 3}`;
         pushH = new Map([[`${pushH.size}`, combinedj.length | 2]]);
         combinedj = `${pushH.size}`;
          let arrowrightwithtail_ = [721, 138, 334];
          let refreshB = 4.0;
          let iconclosewhite3 = String.fromCharCode(121,95,55,51,95,107,98,112,115,0);
         countdowno = `${1 >> (Math.min(4, Math.abs(parseInt(`${type_v8J}`))))}`;
         arrowrightwithtail_ = [iconclosewhite3.length / 1];
         refreshB /= Math.max(4, parseFloat(`${parseInt(`${refreshB}`) * 3}`));
         iconclosewhite3 += `${arrowrightwithtail_.length >> (Math.min(5, Math.abs(parseInt(`${refreshB}`))))}`;
      for (let t = 0; t < 1; t++) {
          let libswresamplec = String.fromCharCode(102,95,57,95,112,99,97,99,104,101,0);
          let bgvipsportM = String.fromCharCode(115,117,98,99,111,110,116,101,110,116,115,95,52,95,52,0);
          let modal_ = new Map([[String.fromCharCode(103,95,51,56,95,118,114,97,115,116,101,114,0),true ], [String.fromCharCode(98,95,50,52,95,115,117,98,116,114,97,99,116,0),false ]]);
          let whitevideolivef = new Map([[String.fromCharCode(102,97,115,116,95,57,95,49,53,0),String.fromCharCode(109,107,118,109,117,120,101,114,117,116,105,108,95,97,95,53,53,0)], [String.fromCharCode(122,95,53,52,95,120,105,112,104,108,97,99,105,110,103,0),String.fromCharCode(111,118,101,114,117,115,101,95,49,95,57,54,0)], [String.fromCharCode(117,110,112,117,98,108,105,115,104,95,97,95,56,48,0),String.fromCharCode(101,95,56,56,95,111,112,97,99,105,116,121,0)]]);
          let downm = String.fromCharCode(122,95,52,57,95,100,111,120,121,103,101,110,0);
         countdowno += `${3 * modal_.size}`;
         libswresamplec += `${3 >> (Math.min(5, downm.length))}`;
         bgvipsportM = "1";
         modal_[bgvipsportM] = bgvipsportM.length & 1;
         whitevideolivef[bgvipsportM] = 3 >> (Math.min(3, bgvipsportM.length));
         downm = `${3 | bgvipsportM.length}`;
      }
      for (let c = 0; c < 3; c++) {
          let listi = [String.fromCharCode(97,99,99,101,115,115,105,98,108,101,95,103,95,56,48,0), String.fromCharCode(98,95,57,49,95,99,104,107,108,105,115,116,0)];
          let libfollya = false;
          let subinh = String.fromCharCode(122,102,114,101,101,95,108,95,57,51,0);
          let libglogs = String.fromCharCode(108,95,57,49,95,117,118,114,100,0);
          let anythinkD = String.fromCharCode(114,101,102,105,110,105,110,103,95,118,95,50,48,0);
         inviteo += parseInt(`${inviteo}`);
         listi.push(listi.length);
         libfollya = subinh == String.fromCharCode(90,0);
         subinh = `${anythinkD.length * 1}`;
         libglogs += `${((libfollya ? 2 : 3) | libglogs.length)}`;
         anythinkD += `${anythinkD.length}`;
      }
         inviteo -= 1;
      if (countdowno.length >= 5) {
         redgoal2 -= parseFloat(`${parseInt(`${inviteo}`)}`);
      }
         network3 += `${parseInt(`${redgoal2}`)}`;
      while (!countdowno.includes(`${type_v8J}`)) {
          let livenodatabgimgz = [790, 628];
         countdowno += `${parseInt(`${redgoal2}`) * parseInt(`${type_v8J}`)}`;
         livenodatabgimgz.push(livenodatabgimgz.length << (Math.min(Math.abs(3), 5)));
         break;
      }
      for (let s = 0; s < 2; s++) {
         inviteo -= 2 * parseInt(`${type_v8J}`);
      }
       let chartT = 3.0;
         chartT += countdowno.length;
         redgoal2 -= parseFloat(`${countdowno.length ^ 1}`);
      do {
          let libcxxcomponents2 = 4.0;
          let modalF = false;
         chartT -= parseInt(`${redgoal2}`) << (Math.min(3, Math.abs(parseInt(`${type_v8J}`))));
         libcxxcomponents2 -= parseFloat(`${parseInt(`${libcxxcomponents2}`) << (Math.min(5, Math.abs(3)))}`);
         modalF = !modalF;
         if (chartT == 2499290.0) {
            break;
         }
      } while ((1.86 >= (chartT * inviteo)) && (chartT == 2499290.0));
      loginsuccessG /= Math.max(4, 2);
   }
   do {
       let whistleorangeh = false;
       let auto_z5 = 2.0;
       let eyeopenq = new Map([[String.fromCharCode(115,112,114,105,116,101,115,95,99,95,55,54,0),583], [String.fromCharCode(111,95,57,52,95,97,116,116,105,98,117,116,101,0),357]]);
       let short_zjZ = 1.0;
       let bing5 = String.fromCharCode(115,112,97,99,105,110,103,115,95,120,95,51,57,0);
      if (eyeopenq[`${auto_z5}`] == null) {
         eyeopenq[`${whistleorangeh}`] = ((whistleorangeh ? 3 : 3) % (Math.max(4, eyeopenq.size)));
      }
         bing5 += `${parseInt(`${auto_z5}`)}`;
          let sort1 = String.fromCharCode(110,111,116,95,99,95,56,56,0);
         bing5 += `${eyeopenq.size - bing5.length}`;
         sort1 = `${sort1.length + sort1.length}`;
       let leaguedetailsbg8 = String.fromCharCode(99,97,118,101,97,116,95,117,95,53,51,0);
      for (let v = 0; v < 3; v++) {
         leaguedetailsbg8 += `${parseInt(`${auto_z5}`) / 3}`;
      }
       let defaultteamT = 0.0;
       let catagory_ = 5.0;
       let fasth = String.fromCharCode(120,95,53,55,95,107,97,105,115,101,114,0);
         whistleorangeh = 9.86 >= auto_z5;
      if ((catagory_ / (Math.max(2, short_zjZ))) > 5.35 && (catagory_ / (Math.max(short_zjZ, 2))) > 5.35) {
         short_zjZ -= (parseFloat(`${bing5 == String.fromCharCode(67,0) ? parseInt(`${defaultteamT}`) : bing5.length}`));
      }
          let reminderK = 3.0;
          let libavformat4 = 2;
         short_zjZ /= Math.max(parseFloat(`${3 / (Math.max(1, parseInt(`${auto_z5}`)))}`), 5);
         reminderK += parseFloat(`${1}`);
         libavformat4 >>= Math.min(4, Math.abs(1));
       let league_ = String.fromCharCode(114,95,55,95,121,121,121,121,0);
         catagory_ *= fasth.length >> (Math.min(Math.abs(3), 4));
      do {
         defaultteamT /= Math.max(3, bing5.length);
         if (4687083.0 == defaultteamT) {
            break;
         }
      } while ((short_zjZ <= 4.80) && (4687083.0 == defaultteamT));
      while (whistleorangeh) {
          let mappingY = 3;
          let orientations = String.fromCharCode(101,95,51,54,95,100,111,99,116,111,116,97,108,0);
          let clubV = 4.0;
          let leakcheckerJ = 2.0;
         whistleorangeh = 11 >= (mappingY * catagory_);
         mappingY /= Math.max(2, (String.fromCharCode(71,0) == orientations ? orientations.length : parseInt(`${leakcheckerJ}`)));
         clubV += parseFloat(`${parseInt(`${clubV}`) - 3}`);
         leakcheckerJ /= Math.max(3 + orientations.length, 5);
         break;
      }
         whistleorangeh = (fasth.length | league_.length) > 19;
      iconpointscorez = "3";
      if (String.fromCharCode(113,113,95,0) == iconpointscorez) {
         break;
      }
   } while ((imagewatchliveq || iconpointscorez.length > 2) && (String.fromCharCode(113,113,95,0) == iconpointscorez));
   if (4 > (3 << (Math.min(5, verticalU.length)))) {
      philippines_[iconpointscorez] = iconpointscorez.length / 3;
   }
   while (loginsuccessG >= 2.9) {
      whitesmalltick0 = imagewatchliveq;
      break;
   }
   if (5 <= (parseInt(`${loginsuccessG}`) + componentN.length)) {
      componentN += `${(verticalU.length >> (Math.min(1, Math.abs((imagewatchliveq ? 3 : 2)))))}`;
   }
   do {
       let bangn = false;
       let loadingspinnerK = false;
       let matchK = String.fromCharCode(98,95,49,52,95,115,100,101,115,0);
         loadingspinnerK = !loadingspinnerK;
         loadingspinnerK = !matchK.startsWith(`${loadingspinnerK}`);
          let anewsT = [236, 701, 744];
          let basketballtrophyo = [842, 433];
          let weather2 = String.fromCharCode(97,95,53,48,95,108,105,110,107,115,0);
         bangn = matchK == weather2;
         anewsT.push(basketballtrophyo.length);
         basketballtrophyo = [3];
         weather2 = `${basketballtrophyo.length}`;
       let mbnativeI = [String.fromCharCode(112,114,111,109,111,116,101,100,95,114,95,49,52,0), String.fromCharCode(100,117,114,97,116,105,111,110,95,97,95,55,51,0), String.fromCharCode(102,111,114,95,110,95,55,0)];
       let mime4 = [94, 954];
      while ((mbnativeI.length % 2) <= 4 || 4 <= (mime4.length % 2)) {
          let filey = [String.fromCharCode(109,95,56,52,95,108,101,114,112,0), String.fromCharCode(109,115,101,112,115,110,114,95,56,95,52,0), String.fromCharCode(114,101,100,101,108,105,118,101,114,121,95,106,95,55,0)];
          let forwardq = String.fromCharCode(101,114,111,100,101,95,122,95,56,53,0);
          let questA = 1.0;
         mbnativeI.push(1 & matchK.length);
         filey = [(String.fromCharCode(111,0) == forwardq ? forwardq.length : parseInt(`${questA}`))];
         questA /= Math.max(5, parseFloat(`${filey.length}`));
         break;
      }
      do {
         mime4.push((1 ^ (bangn ? 5 : 5)));
         if (mime4.length == 1786357) {
            break;
         }
      } while ((mime4.length == 1786357) && (!bangn));
         mbnativeI = [((bangn ? 3 : 3) >> (Math.min(matchK.length, 2)))];
          let light9 = 2.0;
         loadingspinnerK = 10 <= matchK.length;
         light9 /= Math.max(parseFloat(`${parseInt(`${light9}`) << (Math.min(3, Math.abs(2)))}`), 1);
      for (let a = 0; a < 3; a++) {
         loadingspinnerK = mime4.includes(bangn);
      }
      whitesmalltick0 = (componentN.length * parseInt(`${loginsuccessG}`)) >= 23;
      if (whitesmalltick0 ? !whitesmalltick0 : whitesmalltick0) {
         break;
      }
   } while ((whitesmalltick0 ? !whitesmalltick0 : whitesmalltick0) && (calendare.startsWith(`${whitesmalltick0}`)));
   while (!iconpointscorez.startsWith(`${imagewatchliveq}`)) {
      iconpointscorez += `${(String.fromCharCode(70,0) == verticalU ? calendare.length : verticalU.length)}`;
      break;
   }
       let iconwatchF = new Map([[String.fromCharCode(112,95,50,57,95,101,115,112,111,110,100,101,114,0),925], [String.fromCharCode(105,109,112,111,114,116,97,98,108,101,95,57,95,55,56,0),480], [String.fromCharCode(106,95,50,55,95,100,101,108,115,117,112,101,114,0),144]]);
       let singaporeT = false;
      while (singaporeT) {
         singaporeT = null != iconwatchF[`${singaporeT}`];
         break;
      }
      do {
         singaporeT = iconwatchF.size <= 81 && singaporeT;
         if (singaporeT ? !singaporeT : singaporeT) {
            break;
         }
      } while ((singaporeT ? !singaporeT : singaporeT) && (iconwatchF.size <= 4 && 4 <= (4 * iconwatchF.size)));
      for (let y = 0; y < 1; y++) {
         iconwatchF = new Map([[`${iconwatchF.size}`, (iconwatchF.size + (singaporeT ? 5 : 1))]]);
      }
          let moon7 = String.fromCharCode(116,95,50,95,115,105,122,101,114,0);
         iconwatchF = new Map([[moon7, ((singaporeT ? 3 : 5) / (Math.max(2, moon7.length)))]]);
         iconwatchF = new Map([[`${iconwatchF.size}`, (3 >> (Math.min(1, Math.abs((singaporeT ? 2 : 4)))))]]);
         iconwatchF = new Map([[`${iconwatchF.size}`, ((singaporeT ? 4 : 3) >> (Math.min(Math.abs(3), 3)))]]);
      iconpointscorez += `${parseInt(`${loginsuccessG}`)}`;

  }

   
  initSeekPanResponder() {
       let airbnbstarselected0 = 3;
    let owngoalT = String.fromCharCode(102,112,109,98,95,98,95,49,0);
    let backiconmaskG = [String.fromCharCode(116,95,56,95,103,101,115,116,117,114,101,0), String.fromCharCode(105,110,108,105,110,101,100,95,48,95,53,56,0), String.fromCharCode(122,95,49,95,102,105,110,110,101,121,0)];
    let megaphoneB = String.fromCharCode(113,95,50,52,95,112,111,105,110,116,0);
    let awayteamfieldu = false;
    let time_7w = 1;
    let memberl = new Map([[String.fromCharCode(122,95,52,54,95,120,118,109,99,0),636], [String.fromCharCode(105,99,99,112,95,56,95,53,52,0),361]]);
    let liney = [String.fromCharCode(107,95,54,55,0), String.fromCharCode(120,95,52,95,97,99,99,117,109,117,108,97,116,101,0), String.fromCharCode(110,95,50,53,95,117,110,105,120,0)];
   while (3 >= (owngoalT.length ^ airbnbstarselected0) && 1 >= (3 ^ airbnbstarselected0)) {
      owngoalT = `${backiconmaskG.length}`;
      break;
   }

    this.player.seekPanResponder = PanResponder.create({
      
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,

       
      onPanResponderGrant: (evt, gestureState) => {
        let state = this.state;
      megaphoneB += `${megaphoneB.length << (Math.min(Math.abs(1), 4))}`;

        this.clearControlTimeout();
   if (3 == airbnbstarselected0) {
      airbnbstarselected0 %= Math.max(4, 3 & owngoalT.length);
   }

        const position = evt.nativeEvent.locationX;
   do {
      backiconmaskG.push(time_7w);
      if (3835167 == backiconmaskG.length) {
         break;
      }
   } while ((3835167 == backiconmaskG.length) && (3 > (5 + backiconmaskG.length) && (5 + owngoalT.length) > 4));

        this.setSeekerPosition(position);
   if (liney.length > owngoalT.length) {
      liney = [memberl.size % (Math.max(owngoalT.length, 10))];
   }

        state.seeking = true;
       let ajaxl = String.fromCharCode(122,102,114,101,101,95,54,95,55,50,0);
         ajaxl = `${ajaxl.length}`;
          let plus2 = 5.0;
          let halfL = new Map([[String.fromCharCode(115,95,51,48,95,99,108,97,105,109,101,100,0),19], [String.fromCharCode(114,101,99,116,97,110,103,117,108,97,114,95,117,95,51,51,0),755], [String.fromCharCode(99,104,97,110,103,101,95,107,95,49,48,0),258]]);
         ajaxl += `${parseInt(`${plus2}`) - halfL.size}`;
         ajaxl = `${ajaxl.length}`;
      memberl = new Map([[megaphoneB, ((awayteamfieldu ? 4 : 3))]]);

        state.originallyPaused = state.paused;
      time_7w %= Math.max(4, ((awayteamfieldu ? 3 : 3) / (Math.max(1, 4))));

        state.scrubbing = false;
      time_7w += airbnbstarselected0;

        if (this.player.scrubbingTimeStep > 0) {

   do {
      megaphoneB = `${((awayteamfieldu ? 3 : 2) | time_7w)}`;
      if (megaphoneB.length == 1564851) {
         break;
      }
   } while ((owngoalT == megaphoneB) && (megaphoneB.length == 1564851));
          state.paused = true;
   do {
      owngoalT = `${(time_7w >> (Math.min(1, Math.abs((awayteamfieldu ? 3 : 5)))))}`;
      if (835559 == owngoalT.length) {
         break;
      }
   } while ((5 == (owngoalT.length ^ 5)) && (835559 == owngoalT.length));

        }
        this.setState(state);
   for (let w = 0; w < 1; w++) {
      owngoalT = `${owngoalT.length % (Math.max(3, 1))}`;
   }

      },

       
      onPanResponderMove: (evt, gestureState) => {
        const position = this.state.seekerOffset + gestureState.dx;
   for (let g = 0; g < 3; g++) {
       let gifgoalbgh = 3.0;
       let textlayoutmanagery = 4.0;
       let acceptedp = 3.0;
       let plashc = 3;
         plashc /= Math.max(1, 4);
      for (let t = 0; t < 3; t++) {
          let w_managerM = 2.0;
          let middle3 = 0.0;
          let usernamee = 0.0;
          let windY = true;
          let foregroundM = 4;
         gifgoalbgh /= Math.max(parseInt(`${usernamee}`), 2);
         w_managerM *= 3;
         middle3 -= foregroundM + 3;
         windY = 52.71 == middle3;
         foregroundM &= 1;
      }
         acceptedp *= parseInt(`${textlayoutmanagery}`) * 1;
         gifgoalbgh *= 1;
         acceptedp += plashc * 1;
      while (4.52 == (acceptedp * 2.8) || 4.59 == (2.8 * textlayoutmanagery)) {
         acceptedp *= parseInt(`${gifgoalbgh}`);
         break;
      }
      while (2.78 <= (textlayoutmanagery * gifgoalbgh) && 2.17 <= (2.78 * gifgoalbgh)) {
         textlayoutmanagery -= parseFloat(`${plashc + 2}`);
         break;
      }
      while ((acceptedp + 1.17) >= 4.33 || (textlayoutmanagery + 1.17) >= 4.1) {
         textlayoutmanagery /= Math.max(3, parseFloat(`${2 & parseInt(`${acceptedp}`)}`));
         break;
      }
      while (2 <= (plashc + 2) || (1.17 / (Math.max(1, acceptedp))) <= 3.45) {
          let iconnewchatt = 5;
          let clockw = false;
          let penaltygoalt = [String.fromCharCode(97,110,105,109,97,108,115,95,99,95,50,50,0), String.fromCharCode(120,95,49,95,116,115,97,110,0)];
         acceptedp *= 3 ^ parseInt(`${acceptedp}`);
         iconnewchatt &= iconnewchatt;
         clockw = clockw || penaltygoalt.length > 59;
         penaltygoalt = [penaltygoalt.length];
         break;
      }
          let g_centerS = String.fromCharCode(107,95,50,52,95,115,101,103,100,97,116,97,0);
          let diceM = false;
         acceptedp -= parseInt(`${gifgoalbgh}`) | 1;
         g_centerS = `${(g_centerS.length << (Math.min(2, Math.abs((diceM ? 2 : 3)))))}`;
         diceM = g_centerS.length < 69 && !diceM;
      if (2.74 <= (textlayoutmanagery + 5.61) || (textlayoutmanagery * 5.61) <= 4.86) {
         textlayoutmanagery += parseFloat(`${3 / (Math.max(parseInt(`${gifgoalbgh}`), 1))}`);
      }
      if (2.23 <= (textlayoutmanagery - acceptedp)) {
          let policyj = String.fromCharCode(118,98,101,122,105,101,114,95,120,95,50,49,0);
         acceptedp /= Math.max(parseInt(`${gifgoalbgh}`) | 3, 3);
         policyj = `${(String.fromCharCode(78,0) == policyj ? policyj.length : policyj.length)}`;
      }
      awayteamfieldu = awayteamfieldu || owngoalT.length >= 32;
   }

        this.setSeekerPosition(position);
   for (let y = 0; y < 1; y++) {
      airbnbstarselected0 %= Math.max((String.fromCharCode(110,0) == owngoalT ? airbnbstarselected0 : owngoalT.length), 5);
   }

        let state = this.state;
      owngoalT = "2";


        if (
          this.player.scrubbingTimeStep > 0 &&
          !state.loading &&
          !state.scrubbing
        ) {

      awayteamfieldu = 35 == memberl.size;
          const time = this.calculateTimeFromSeekerPosition();
   do {
      memberl[`${time_7w}`] = time_7w;
      if (memberl.size == 4559358) {
         break;
      }
   } while ((5 == (memberl.size * liney.length) || (5 * liney.length) == 4) && (memberl.size == 4559358));

          const timeDifference = Math.abs(state.currentTime - time) * 1000;
       let libjsijniprofilerh = String.fromCharCode(97,95,56,57,95,99,111,110,118,101,114,115,97,116,105,111,110,0);
       let libruntimeexecutorr = String.fromCharCode(100,95,54,53,95,114,115,116,110,0);
       let liveshareI = 4.0;
      while (libruntimeexecutorr.startsWith(`${liveshareI}`)) {
         libruntimeexecutorr = `${libruntimeexecutorr.length * libjsijniprofilerh.length}`;
         break;
      }
         libruntimeexecutorr = "1";
         liveshareI += (parseFloat(`${String.fromCharCode(114,0) == libruntimeexecutorr ? parseInt(`${liveshareI}`) : libruntimeexecutorr.length}`));
      for (let u = 0; u < 2; u++) {
         libruntimeexecutorr += `${libruntimeexecutorr.length + 2}`;
      }
      for (let p = 0; p < 3; p++) {
          let historyf = new Map([[String.fromCharCode(113,95,49,48,48,95,100,101,99,111,109,112,111,115,101,0),String.fromCharCode(97,95,54,55,95,116,101,108,101,109,101,116,114,121,0)], [String.fromCharCode(112,95,57,57,95,114,101,99,117,114,115,105,111,110,0),String.fromCharCode(106,97,99,111,98,105,97,110,95,52,95,56,54,0)], [String.fromCharCode(103,95,53,95,108,105,109,105,116,97,116,105,111,110,0),String.fromCharCode(121,95,55,50,95,110,111,116,103,101,116,0)]]);
          let indexJ = new Map([[String.fromCharCode(109,95,55,49,95,112,114,111,112,101,114,0),482], [String.fromCharCode(109,101,110,116,105,111,110,95,122,95,51,51,0),165]]);
          let adultl = [972, 91, 35];
         libruntimeexecutorr = `${adultl.length << (Math.min(1, Math.abs(indexJ.size)))}`;
         historyf = new Map([[`${historyf.size}`, 1 ^ historyf.size]]);
         indexJ = new Map([[`${historyf.size}`, historyf.size >> (Math.min(Math.abs(1), 2))]]);
      }
         libruntimeexecutorr = `${parseInt(`${liveshareI}`)}`;
      while (libruntimeexecutorr.length > libjsijniprofilerh.length) {
         libjsijniprofilerh += `${3 | libruntimeexecutorr.length}`;
         break;
      }
       let smallsoundS = String.fromCharCode(105,110,116,108,95,102,95,50,48,0);
       let contextc = String.fromCharCode(108,95,50,55,95,98,101,122,105,101,114,0);
         libruntimeexecutorr = `${parseInt(`${liveshareI}`)}`;
      owngoalT += "2";


          if (
            time < state.duration &&
            timeDifference >= this.player.scrubbingTimeStep
          ) {

      time_7w |= (megaphoneB == String.fromCharCode(105,0) ? megaphoneB.length : (awayteamfieldu ? 5 : 3));
            state.scrubbing = true;
   do {
      backiconmaskG.push(2 << (Math.min(2, Math.abs(memberl.size))));
      if (3187335 == backiconmaskG.length) {
         break;
      }
   } while ((3187335 == backiconmaskG.length) && (awayteamfieldu));


            this.setState(state);
   while (owngoalT.length >= 2) {
      owngoalT = `${memberl.size}`;
      break;
   }

            setTimeout(() => {

      memberl = new Map([[`${memberl.size}`, 2 ^ backiconmaskG.length]]);
              this.player.ref.seek(time, this.player.scrubbingTimeStep);
      megaphoneB += `${megaphoneB.length + 1}`;

            }, 1);
      backiconmaskG = [((awayteamfieldu ? 4 : 3) + backiconmaskG.length)];

          }
        }
      },

       
      onPanResponderRelease: (evt, gestureState) => {
        const time = this.calculateTimeFromSeekerPosition();
      backiconmaskG.push(2 & backiconmaskG.length);

        let state = this.state;
   do {
       let sharedY = String.fromCharCode(99,101,110,116,114,101,95,118,95,55,0);
       let inouttargetredt = [505, 974];
       let matchinactivet = String.fromCharCode(107,95,52,55,95,98,105,116,114,97,116,101,0);
      for (let a = 0; a < 1; a++) {
          let bootsplash5 = [307, 915];
         matchinactivet = `${bootsplash5.length}`;
      }
      while (sharedY.startsWith(`${inouttargetredt.length}`)) {
          let sigmob2 = String.fromCharCode(114,95,50,55,95,100,97,97,108,97,0);
          let h_unlockf = String.fromCharCode(102,105,108,116,101,114,102,110,95,102,95,56,48,0);
          let penaltygoalV = String.fromCharCode(105,109,112,114,105,110,116,95,57,95,51,52,0);
         sharedY = `${inouttargetredt.length}`;
         sigmob2 = `${sigmob2.length}`;
         h_unlockf = `${(String.fromCharCode(71,0) == penaltygoalV ? penaltygoalV.length : sigmob2.length)}`;
         break;
      }
         inouttargetredt.push(matchinactivet.length);
         matchinactivet += `${sharedY.length % 1}`;
          let defaultlogoz = String.fromCharCode(110,95,57,52,95,114,101,112,108,105,101,115,0);
         inouttargetredt = [1 + inouttargetredt.length];
         defaultlogoz += `${defaultlogoz.length}`;
      do {
          let container1 = String.fromCharCode(113,112,102,105,108,101,95,112,95,51,55,0);
         sharedY += `${(String.fromCharCode(105,0) == sharedY ? container1.length : sharedY.length)}`;
         if (sharedY.length == 4256598) {
            break;
         }
      } while ((5 > (inouttargetredt.length - 5) || (sharedY.length - 5) > 1) && (sharedY.length == 4256598));
      do {
         inouttargetredt.push(inouttargetredt.length >> (Math.min(matchinactivet.length, 4)));
         if (3338074 == inouttargetredt.length) {
            break;
         }
      } while ((3338074 == inouttargetredt.length) && (2 < (matchinactivet.length ^ 5)));
      if (inouttargetredt.length >= 1) {
         inouttargetredt.push((String.fromCharCode(67,0) == matchinactivet ? inouttargetredt.length : matchinactivet.length));
      }
      if (4 >= matchinactivet.length) {
         matchinactivet = `${inouttargetredt.length}`;
      }
      owngoalT += `${airbnbstarselected0}`;
      if (1482424 == owngoalT.length) {
         break;
      }
   } while ((2 > (airbnbstarselected0 - owngoalT.length) && 2 > (airbnbstarselected0 - owngoalT.length)) && (1482424 == owngoalT.length));

        if (time >= state.duration && !state.loading) {

   for (let s = 0; s < 1; s++) {
       let chatroombackgroundT = new Map([[String.fromCharCode(113,95,54,95,119,104,101,114,101,0),true ], [String.fromCharCode(110,95,50,51,95,115,116,111,114,101,100,0),true ]]);
       let penaltyshootnogoalU = [264, 889, 797];
      do {
         penaltyshootnogoalU.push(3);
         if (1626893 == penaltyshootnogoalU.length) {
            break;
         }
      } while ((1626893 == penaltyshootnogoalU.length) && (3 < (chatroombackgroundT.size ^ penaltyshootnogoalU.length) && 1 < (chatroombackgroundT.size ^ 3)));
      for (let c = 0; c < 1; c++) {
          let yellowredcard2 = String.fromCharCode(97,99,99,117,109,117,108,97,116,101,95,106,95,57,51,0);
         penaltyshootnogoalU.push(yellowredcard2.length);
      }
          let shootyesgoalg = 4.0;
          let x_titled = new Map([[String.fromCharCode(97,118,103,115,97,100,95,99,95,49,0),false ], [String.fromCharCode(97,110,97,108,111,103,95,107,95,53,52,0),true ], [String.fromCharCode(115,105,103,104,95,107,95,56,53,0),true ]]);
         chatroombackgroundT = new Map([[`${penaltyshootnogoalU.length}`, 3 | penaltyshootnogoalU.length]]);
         shootyesgoalg -= parseInt(`${shootyesgoalg}`);
         x_titled[`${shootyesgoalg}`] = x_titled.size;
          let pathr = false;
          let tramini0 = String.fromCharCode(102,116,118,108,105,110,107,95,109,95,56,54,0);
         penaltyshootnogoalU.push(penaltyshootnogoalU.length + 3);
         pathr = pathr && tramini0.length > 5;
         tramini0 += `${(tramini0 == String.fromCharCode(95,0) ? tramini0.length : (pathr ? 5 : 4))}`;
      do {
         penaltyshootnogoalU.push(chatroombackgroundT.size);
         if (4581088 == penaltyshootnogoalU.length) {
            break;
         }
      } while ((chatroombackgroundT[`${penaltyshootnogoalU.length}`] == null) && (4581088 == penaltyshootnogoalU.length));
      while (chatroombackgroundT[`${penaltyshootnogoalU.length}`] == null) {
          let untick2 = false;
          let loadingN = String.fromCharCode(101,95,51,48,95,98,105,116,100,101,112,116,104,0);
          let roundC = String.fromCharCode(105,103,110,111,114,101,95,122,95,57,54,0);
          let backicon7 = String.fromCharCode(108,95,53,48,95,117,110,116,105,108,0);
          let delegate_fwR = String.fromCharCode(100,111,99,108,105,115,116,115,95,57,95,53,53,0);
         penaltyshootnogoalU.push((String.fromCharCode(108,0) == loadingN ? loadingN.length : (untick2 ? 1 : 3)));
         untick2 = backicon7.length >= 91;
         roundC += `${backicon7.length}`;
         delegate_fwR = `${3 - backicon7.length}`;
         break;
      }
      airbnbstarselected0 ^= time_7w;
   }
          state.paused = true;
      awayteamfieldu = memberl.size >= megaphoneB.length;

          this.events.onEnd();
        } else if (state.scrubbing) {

   do {
      backiconmaskG.push(((awayteamfieldu ? 4 : 2)));
      if (backiconmaskG.length == 1789411) {
         break;
      }
   } while ((backiconmaskG.length == 1789411) && (!awayteamfieldu));
          state.seeking = false;
        } else {

      liney = [2];
          this.seekTo(time);
      megaphoneB = `${2 ^ liney.length}`;

          this.setControlTimeout();
   if ((backiconmaskG.length << (Math.min(Math.abs(5), 1))) <= 2 || backiconmaskG.length <= 5) {
      backiconmaskG.push(2);
   }

          state.paused = state.originallyPaused;
   do {
      owngoalT = "1";
      if (3276848 == owngoalT.length) {
         break;
      }
   } while ((3276848 == owngoalT.length) && ((airbnbstarselected0 >> (Math.min(Math.abs(4), 2))) > 4 || 4 > (airbnbstarselected0 >> (Math.min(owngoalT.length, 5)))));

          state.seeking = false;
        }
        this.setState(state);
      },
    });
  }

   
  initVolumePanResponder() {
       let bottom1 = new Map([[String.fromCharCode(101,95,57,95,101,118,100,110,115,0),687], [String.fromCharCode(101,105,103,104,116,115,118,120,95,112,95,50,55,0),85], [String.fromCharCode(115,104,111,114,116,108,121,95,122,95,56,55,0),980]]);
    let storet = 2;
    let shootyesgoalq = String.fromCharCode(101,95,49,49,95,98,117,105,108,116,0);
    let pressure1 = String.fromCharCode(98,114,111,97,100,99,97,115,116,105,110,103,95,102,95,53,0);
    let floating4 = 4.0;
    let rulesO = String.fromCharCode(102,95,51,53,95,105,100,101,110,116,105,102,105,101,100,0);
    let icondownimgf = [854, 792, 582];
    let static_rjX = String.fromCharCode(103,95,50,54,95,109,120,112,101,103,0);
    let shareblackE = String.fromCharCode(104,95,55,50,95,99,105,114,99,0);
    let graphU = String.fromCharCode(107,95,57,57,95,112,111,108,108,0);
      storet %= Math.max(3 >> (Math.min(2, rulesO.length)), 3);

    this.player.volumePanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.clearControlTimeout();
   while ((2.74 - floating4) >= 3.67) {
      floating4 *= shootyesgoalq.length % (Math.max(pressure1.length, 8));
      break;
   }

      },

       
      onPanResponderMove: (evt, gestureState) => {
        let state = this.state;
       let downloadj = new Map([[String.fromCharCode(114,101,109,105,120,105,110,103,95,53,95,56,57,0),800], [String.fromCharCode(106,95,54,55,95,114,101,118,105,115,105,111,110,0),159]]);
       let shareD = String.fromCharCode(103,97,115,95,119,95,53,54,0);
      for (let m = 0; m < 2; m++) {
         shareD = `${shareD.length}`;
      }
          let n_imagel = String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,95,119,95,53,0);
          let graphics9 = String.fromCharCode(108,97,121,115,95,98,95,56,48,0);
          let package_xf4 = 2;
         shareD = `${(shareD == String.fromCharCode(95,0) ? graphics9.length : shareD.length)}`;
         n_imagel = `${(n_imagel == String.fromCharCode(79,0) ? package_xf4 : n_imagel.length)}`;
         graphics9 += `${package_xf4}`;
      do {
          let fillb = String.fromCharCode(122,95,51,55,95,113,117,111,116,101,115,0);
          let scrollviewR = new Map([[String.fromCharCode(109,97,110,105,112,117,108,97,116,101,95,118,95,48,0),String.fromCharCode(116,95,55,57,95,105,110,115,112,101,99,116,0)], [String.fromCharCode(115,97,110,105,116,121,95,101,95,57,50,0),String.fromCharCode(105,109,112,117,108,115,101,95,115,95,57,55,0)]]);
          let holderl = new Map([[String.fromCharCode(101,120,112,114,101,115,115,95,57,95,56,51,0),String.fromCharCode(120,108,97,98,101,108,119,105,100,116,104,95,104,95,52,56,0)], [String.fromCharCode(112,95,54,53,95,98,111,117,110,99,101,0),String.fromCharCode(115,104,97,114,112,101,110,95,100,95,50,56,0)], [String.fromCharCode(101,120,116,109,97,112,95,122,95,53,54,0),String.fromCharCode(122,95,56,52,95,118,105,115,97,0)]]);
          let mergerf = 4.0;
         shareD = `${3 % (Math.max(3, parseInt(`${mergerf}`)))}`;
         fillb = `${fillb.length}`;
         scrollviewR = new Map([[`${holderl.size}`, holderl.size]]);
         mergerf /= Math.max(3, scrollviewR.size);
         if (String.fromCharCode(97,101,51,102,105,0) == shareD) {
            break;
         }
      } while ((String.fromCharCode(97,101,51,102,105,0) == shareD) && (shareD.length >= 5));
      while (1 <= (downloadj.size << (Math.min(shareD.length, 3)))) {
          let megaphonet = 0.0;
          let matchactiveJ = 5.0;
          let configureJ = String.fromCharCode(97,118,101,114,97,103,101,95,117,95,54,54,0);
         shareD = `${2 + downloadj.size}`;
         megaphonet -= 2;
         matchactiveJ *= 1 - configureJ.length;
         configureJ += `${configureJ.length | parseInt(`${megaphonet}`)}`;
         break;
      }
         shareD = `${2 / (Math.max(10, downloadj.size))}`;
         shareD += `${shareD.length / 2}`;
      pressure1 += `${(String.fromCharCode(121,0) == shootyesgoalq ? shootyesgoalq.length : icondownimgf.length)}`;

        const position = this.state.volumeOffset + gestureState.dx;
       let feedbackE = String.fromCharCode(102,117,115,101,95,111,95,51,0);
         feedbackE = `${1 ^ feedbackE.length}`;
          let referrerj = true;
         feedbackE = "1";
      while (feedbackE == feedbackE) {
          let langI = String.fromCharCode(115,116,117,102,102,110,100,95,121,95,49,48,0);
          let upgradeS = 4.0;
          let gemfileG = String.fromCharCode(99,97,116,99,104,115,105,103,110,97,108,95,99,95,57,52,0);
          let shielddone9 = false;
          let reactnativeultimatelistviewi = 2;
         feedbackE = `${((shielddone9 ? 1 : 5) >> (Math.min(feedbackE.length, 5)))}`;
         langI += `${parseInt(`${upgradeS}`)}`;
         upgradeS -= (parseFloat(`${String.fromCharCode(50,0) == gemfileG ? gemfileG.length : reactnativeultimatelistviewi}`));
         shielddone9 = gemfileG.includes(`${reactnativeultimatelistviewi}`);
         break;
      }
      rulesO = `${(pressure1 == String.fromCharCode(105,0) ? storet : pressure1.length)}`;


        this.setVolumePosition(position);
      static_rjX += `${bottom1.size}`;

        state.volume = this.calculateVolumeFromVolumePosition();
      shareblackE = `${shootyesgoalq.length}`;


        if (state.volume <= 0) {

   if (shareblackE.length >= parseInt(`${floating4}`)) {
      shareblackE = `${1 >> (Math.min(Math.abs(storet), 3))}`;
   }
          state.muted = true;
        } else {

      shareblackE = `${pressure1.length}`;
          state.muted = false;
   while (3 >= (storet ^ bottom1.size) || (3 ^ storet) >= 3) {
       let otherg = String.fromCharCode(100,95,56,49,95,118,105,115,105,98,105,108,105,116,121,0);
       let renewS = 3.0;
       let base4 = 5.0;
       let circle9 = 3.0;
      for (let t = 0; t < 2; t++) {
         base4 /= Math.max(3, parseFloat(`${parseInt(`${circle9}`) % 2}`));
      }
         otherg += "3";
       let singaporet = 3;
      while (4 > (5 + otherg.length)) {
          let textlayoutmanagerB = [133, 848, 464];
         renewS += parseFloat(`${parseInt(`${renewS}`) % (Math.max(6, textlayoutmanagerB.length))}`);
         break;
      }
         otherg = `${(otherg == String.fromCharCode(86,0) ? otherg.length : parseInt(`${renewS}`))}`;
      storet ^= shootyesgoalq.length / 3;
      break;
   }

        }

        this.setState(state);
   if (shareblackE == String.fromCharCode(56,0)) {
      pressure1 = "2";
   }

      },

       
      onPanResponderRelease: (evt, gestureState) => {
        let state = this.state;
      shootyesgoalq += `${bottom1.size}`;

        state.volumeOffset = state.volumePosition;
   while (5 <= (icondownimgf.length * rulesO.length) && 5 <= (5 * rulesO.length)) {
      icondownimgf = [storet];
      break;
   }

        this.setControlTimeout();
      shareblackE = `${pressure1.length}`;

        this.setState(state);
   for (let j = 0; j < 3; j++) {
       let iconadslink0 = String.fromCharCode(98,105,110,107,95,108,95,54,49,0);
      if (iconadslink0 == iconadslink0) {
         iconadslink0 += `${iconadslink0.length | 2}`;
      }
      for (let g = 0; g < 3; g++) {
          let about4 = true;
          let footballfield9 = 4;
         iconadslink0 += `${footballfield9}`;
         about4 = (!about4 ? !about4 : about4);
         footballfield9 &= 3;
      }
          let homeloadingN = String.fromCharCode(107,95,52,49,95,115,117,112,112,108,101,109,101,110,116,97,108,0);
          let r_hashX = 2.0;
          let ccdfbdabcabbbedb4 = 4;
         iconadslink0 = `${iconadslink0.length - 3}`;
         homeloadingN += `${homeloadingN.length}`;
         r_hashX *= parseFloat(`${parseInt(`${r_hashX}`) & ccdfbdabcabbbedb4}`);
         ccdfbdabcabbbedb4 *= homeloadingN.length / (Math.max(8, parseInt(`${r_hashX}`)));
      icondownimgf = [bottom1.size];
   }

      },
    });
      rulesO += "2";

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
       let pointC = new Map([[String.fromCharCode(99,95,53,50,95,99,111,109,109,105,115,115,105,111,110,0),true ], [String.fromCharCode(104,95,50,54,95,98,105,110,97,114,121,0),true ]]);
    let eactv = 1.0;
    let privilegeo = new Map([[String.fromCharCode(115,95,49,57,95,101,120,116,101,110,115,105,98,108,101,0),817], [String.fromCharCode(115,95,53,49,95,104,97,118,105,110,103,0),14], [String.fromCharCode(97,95,55,56,95,102,101,101,100,0),777]]);
    let orangeuparrowD = String.fromCharCode(117,95,56,54,95,97,97,102,99,0);
    let cleare = String.fromCharCode(103,101,116,110,97,109,101,105,110,102,111,95,120,95,57,53,0);
    let networkj = String.fromCharCode(102,115,105,122,101,95,105,95,49,56,0);
    let mimoq = 5.0;
    let redgoall = 1;
    let airbnbstarU = 4.0;
    let aboutR = String.fromCharCode(118,95,57,49,95,105,110,115,112,101,99,116,97,98,108,101,0);
    let iconarrowrightorange3 = new Map([[String.fromCharCode(110,95,49,54,95,99,111,112,121,0),String.fromCharCode(98,95,53,54,95,100,110,115,110,97,109,101,0)], [String.fromCharCode(122,95,51,52,95,116,119,105,110,118,113,0),String.fromCharCode(119,109,97,118,111,105,99,101,95,118,95,50,54,0)], [String.fromCharCode(112,105,110,110,101,100,95,115,95,49,0),String.fromCharCode(111,108,107,97,100,111,116,95,116,95,49,52,0)]]);
    let audiencef = [520, 409, 75];
    let downloaderl = String.fromCharCode(114,101,97,110,97,108,121,122,101,95,56,95,56,50,0);
    let encryptE = 3;
    let backwardb = String.fromCharCode(100,105,115,112,108,97,121,95,114,95,50,52,0);
    let actionsG = 4;
    let orangel = true;
   if ((airbnbstarU / (Math.max(4.63, 7))) >= 1.39 || (4.63 / (Math.max(3, airbnbstarU))) >= 3.84) {
      redgoall -= (orangeuparrowD == String.fromCharCode(78,0) ? privilegeo.size : orangeuparrowD.length);
   }
   do {
      airbnbstarU /= Math.max(1, (parseFloat(`${String.fromCharCode(80,0) == cleare ? pointC.size : cleare.length}`)));
      if (3546309.0 == airbnbstarU) {
         break;
      }
   } while ((3546309.0 == airbnbstarU) && (5 <= audiencef.length));
      airbnbstarU += parseFloat(`${3}`);
   for (let a = 0; a < 3; a++) {
      cleare = "2";
   }
   while ((eactv + 1.79) < 2.45) {
      cleare += `${1 + privilegeo.size}`;
      break;
   }
   do {
      mimoq /= Math.max(5, 1 << (Math.min(5, Math.abs(pointC.size))));
      if (4419043.0 == mimoq) {
         break;
      }
   } while ((4419043.0 == mimoq) && ((mimoq / 1.38) == 1.50 && 1.38 == (redgoall / (Math.max(mimoq, 7)))));
      airbnbstarU += parseFloat(`${2 << (Math.min(2, Math.abs(privilegeo.size)))}`);
      orangeuparrowD += `${orangeuparrowD.length}`;
   for (let d = 0; d < 2; d++) {
      mimoq /= Math.max(3, 1);
   }
      networkj = `${parseInt(`${eactv}`)}`;
   while (4 <= orangeuparrowD.length) {
      pointC = new Map([[`${audiencef.length}`, audiencef.length % (Math.max(3, 9))]]);
      break;
   }
      privilegeo = new Map([[`${privilegeo.size}`, parseInt(`${eactv}`) | 1]]);
   for (let k = 0; k < 3; k++) {
      mimoq += 3 ^ parseInt(`${mimoq}`);
   }
   while (2 >= networkj.length) {
      cleare += `${redgoall / 3}`;
      break;
   }
   while ((iconarrowrightorange3.size - networkj.length) > 1 || 1 > (iconarrowrightorange3.size - networkj.length)) {
       let penaltygoalc = String.fromCharCode(117,95,54,56,95,116,114,105,97,110,103,108,101,0);
       let iconpipshrinkt = 5;
       let iconeye7 = String.fromCharCode(99,111,110,115,116,97,110,116,115,95,115,95,51,49,0);
       let issubP = new Map([[String.fromCharCode(98,95,52,48,95,105,116,120,102,109,0),true ], [String.fromCharCode(97,95,54,56,95,98,108,111,99,107,100,115,112,0),false ], [String.fromCharCode(112,114,101,99,95,103,95,57,52,0),true ]]);
       let shooty = String.fromCharCode(98,95,50,95,111,98,115,101,114,118,101,114,115,0);
      do {
          let iconqqj = String.fromCharCode(116,95,56,53,95,109,105,109,105,99,0);
         shooty += `${iconpipshrinkt % 2}`;
         iconqqj = `${iconqqj.length * 2}`;
         if (shooty == String.fromCharCode(102,108,118,48,0)) {
            break;
         }
      } while ((1 <= (iconpipshrinkt % 1) && (iconpipshrinkt % 1) <= 2) && (shooty == String.fromCharCode(102,108,118,48,0)));
         issubP[iconeye7] = 2;
      do {
         iconeye7 = `${1 + shooty.length}`;
         if (iconeye7 == String.fromCharCode(117,56,113,113,56,0)) {
            break;
         }
      } while ((iconeye7 == String.fromCharCode(117,56,113,113,56,0)) && (4 == (iconeye7.length & issubP.size) || (issubP.size & iconeye7.length) == 4));
       let xvodc = 4.0;
      for (let h = 0; h < 1; h++) {
          let whistleG = new Map([[String.fromCharCode(115,117,98,114,97,110,103,101,115,95,98,95,50,54,0),405], [String.fromCharCode(120,95,53,48,95,114,101,99,111,114,100,115,0),774]]);
          let chinasamei = [886, 932];
          let defaultpredictionprofiler = 0;
          let favicond = false;
         penaltygoalc = `${whistleG.size}`;
         whistleG = new Map([[`${chinasamei.length}`, ((favicond ? 4 : 1) | 1)]]);
         chinasamei.push((defaultpredictionprofiler ^ (favicond ? 3 : 1)));
         defaultpredictionprofiler |= 3;
      }
         iconeye7 = "2";
      while (1 > (iconeye7.length << (Math.min(Math.abs(4), 5))) || (4 << (Math.min(2, iconeye7.length))) > 1) {
         issubP[iconeye7] = iconeye7.length | iconpipshrinkt;
         break;
      }
         xvodc -= parseFloat(`${3}`);
          let loginn = String.fromCharCode(97,112,112,115,95,54,95,49,50,0);
          let playlistW = true;
          let airbnbstarselected5 = false;
         penaltygoalc = "1";
         loginn += `${((playlistW ? 2 : 4) << (Math.min(loginn.length, 4)))}`;
         playlistW = loginn.includes(`${playlistW}`);
         airbnbstarselected5 = !playlistW || loginn.length == 42;
       let mbbanner5 = 5.0;
       let mergerJ = 4.0;
      if ((shooty.length * parseInt(`${mergerJ}`)) < 2) {
         mergerJ += parseFloat(`${3}`);
      }
          let greenE = String.fromCharCode(115,95,54,52,95,116,117,114,110,0);
          let basketballicont = String.fromCharCode(99,114,111,108,108,95,119,95,56,48,0);
         penaltygoalc = `${shooty.length}`;
         greenE = "3";
         basketballicont += `${greenE.length}`;
         iconpipshrinkt %= Math.max(iconeye7.length << (Math.min(1, Math.abs(iconpipshrinkt))), 4);
      while ((xvodc + mbbanner5) > 4.55 || 3.88 > (4.55 - mbbanner5)) {
         mbbanner5 *= parseFloat(`${parseInt(`${xvodc}`)}`);
         break;
      }
         mergerJ /= Math.max(3, parseFloat(`${iconeye7.length << (Math.min(Math.abs(2), 1))}`));
      networkj += `${(String.fromCharCode(109,0) == cleare ? cleare.length : parseInt(`${mimoq}`))}`;
      break;
   }
   if (1 >= (downloaderl.length % 2) || (2 % (Math.max(9, downloaderl.length))) >= 2) {
      downloaderl = `${2 / (Math.max(8, encryptE))}`;
   }
       let scheduleu = true;
       let homeloadingb = true;
       let greyA = String.fromCharCode(103,101,110,101,114,97,116,105,110,103,95,56,95,56,0);
         homeloadingb = !scheduleu;
      while (homeloadingb && !scheduleu) {
         homeloadingb = scheduleu;
         break;
      }
      while (!homeloadingb) {
          let play7 = new Map([[String.fromCharCode(122,95,56,54,95,105,116,117,110,101,115,0),870], [String.fromCharCode(109,95,55,57,95,114,101,105,110,100,101,120,0),283]]);
          let basketballplayerplaceholderS = [249, 701];
          let gemfile8 = 2.0;
          let redscoreballn = [862, 195];
          let libreanimatedE = true;
         homeloadingb = play7.size == 79;
         play7[`${gemfile8}`] = parseInt(`${gemfile8}`) - 3;
         basketballplayerplaceholderS = [parseInt(`${gemfile8}`) / 2];
         redscoreballn.push(redscoreballn.length);
         libreanimatedE = basketballplayerplaceholderS.includes(gemfile8);
         break;
      }
         greyA += `${greyA.length}`;
          let executor5 = false;
          let canvasd = 1.0;
         greyA = `${(String.fromCharCode(110,0) == greyA ? greyA.length : (scheduleu ? 2 : 5))}`;
         executor5 = !executor5;
         canvasd *= (parseFloat(`${(executor5 ? 1 : 4) | parseInt(`${canvasd}`)}`));
          let bang2 = String.fromCharCode(100,111,97,108,108,95,109,95,57,48,0);
          let giftbuttonf = 1;
          let aboutW = true;
         homeloadingb = greyA.length <= 61;
         bang2 = `${bang2.length}`;
         giftbuttonf |= ((aboutW ? 3 : 1) * giftbuttonf);
      do {
         homeloadingb = scheduleu || greyA.length < 30;
         if (homeloadingb ? !homeloadingb : homeloadingb) {
            break;
         }
      } while ((homeloadingb ? !homeloadingb : homeloadingb) && (!homeloadingb));
         greyA = `${greyA.length}`;
      do {
         homeloadingb = (!scheduleu ? homeloadingb : scheduleu);
         if (homeloadingb ? !homeloadingb : homeloadingb) {
            break;
         }
      } while ((homeloadingb ? !homeloadingb : homeloadingb) && (scheduleu && !homeloadingb));
      pointC[`${airbnbstarU}`] = (parseInt(`${airbnbstarU}`) * (homeloadingb ? 1 : 3));
   for (let k = 0; k < 1; k++) {
      aboutR += `${(String.fromCharCode(71,0) == networkj ? cleare.length : networkj.length)}`;
   }

    return <View style={[VideoPlayerstyles.controls.control]} />;
   if (1.21 >= (airbnbstarU - 3.27)) {
       let linkH = 2.0;
       let awayplayer9 = new Map([[String.fromCharCode(105,95,51,51,95,99,108,111,115,101,99,98,0),String.fromCharCode(103,95,51,48,95,109,98,97,102,102,0)], [String.fromCharCode(106,95,50,95,112,101,114,99,101,110,116,105,108,101,0),String.fromCharCode(109,101,116,97,100,97,116,97,115,95,52,95,49,57,0)]]);
       let langkey8 = String.fromCharCode(103,97,116,104,101,114,105,110,103,95,56,95,54,51,0);
      if ((awayplayer9.size + 1) < 4 || (langkey8.length + 1) < 4) {
         awayplayer9[`${linkH}`] = 2;
      }
         awayplayer9 = new Map([[langkey8, langkey8.length ^ 2]]);
      if (!langkey8.startsWith(`${awayplayer9.size}`)) {
          let elementsC = new Map([[String.fromCharCode(100,95,54,50,95,107,101,101,112,105,110,103,0),563], [String.fromCharCode(121,95,56,56,95,115,112,108,105,116,116,101,114,0),827], [String.fromCharCode(112,95,51,95,115,119,105,102,116,0),932]]);
          let tickO = new Map([[String.fromCharCode(106,95,49,49,95,111,98,115,101,114,118,101,114,0),709], [String.fromCharCode(116,95,53,51,95,115,99,111,114,101,115,0),25]]);
         awayplayer9 = new Map([[`${tickO.size}`, tickO.size & langkey8.length]]);
         elementsC[`${elementsC.size}`] = elementsC.size;
      }
      do {
         awayplayer9[langkey8] = 3 - awayplayer9.size;
         if (awayplayer9.size == 3922401) {
            break;
         }
      } while (((2 - awayplayer9.size) >= 4 || (2 - langkey8.length) >= 4) && (awayplayer9.size == 3922401));
       let benefitX = false;
       let halfB = false;
          let eighteenZ = String.fromCharCode(115,119,115,99,97,108,101,114,101,115,95,54,95,57,0);
         halfB = eighteenZ.startsWith(`${halfB}`);
         awayplayer9 = new Map([[`${awayplayer9.size}`, 3]]);
      do {
          let reminderE = new Map([[String.fromCharCode(115,109,97,99,107,101,114,95,112,95,54,51,0),String.fromCharCode(112,97,114,97,108,108,97,120,95,112,95,51,50,0)], [String.fromCharCode(99,95,55,52,95,116,101,109,112,0),String.fromCharCode(119,95,57,95,111,103,103,118,111,114,98,105,115,0)]]);
          let whitetickc = String.fromCharCode(98,95,53,54,95,102,108,97,115,104,0);
         awayplayer9 = new Map([[`${halfB}`, 2 >> (Math.min(2, whitetickc.length))]]);
         reminderE = new Map([[`${reminderE.size}`, 1]]);
         whitetickc += `${reminderE.size}`;
         if (25093 == awayplayer9.size) {
            break;
         }
      } while ((25093 == awayplayer9.size) && (awayplayer9.size > 3));
         langkey8 += `${awayplayer9.size >> (Math.min(Math.abs(3), 3))}`;
      orangeuparrowD = `${encryptE % 3}`;
   }
   for (let c = 0; c < 2; c++) {
      audiencef.push(privilegeo.size + aboutR.length);
   }
      audiencef.push(1);
      pointC = new Map([[downloaderl, parseInt(`${eactv}`)]]);
   while (audiencef.length <= 5) {
      mimoq -= parseInt(`${airbnbstarU}`) / (Math.max(6, downloaderl.length));
      break;
   }
      orangeuparrowD += `${aboutR.length}`;
      pointC[downloaderl] = downloaderl.length % 3;
   do {
      orangeuparrowD += `${(aboutR == String.fromCharCode(119,0) ? parseInt(`${mimoq}`) : aboutR.length)}`;
      if (2107034 == orangeuparrowD.length) {
         break;
      }
   } while ((downloaderl.endsWith(`${orangeuparrowD.length}`)) && (2107034 == orangeuparrowD.length));
   for (let q = 0; q < 3; q++) {
      audiencef = [iconarrowrightorange3.size];
   }
   while (4.90 >= (mimoq * privilegeo.size) || (mimoq * 4.90) >= 1.99) {
      mimoq -= redgoall;
      break;
   }
       let fastG = [751, 195];
         fastG.push(fastG.length | fastG.length);
      for (let r = 0; r < 2; r++) {
          let mailz = 2;
          let package_je = 0.0;
          let updates9 = String.fromCharCode(122,95,56,48,95,97,110,105,109,97,116,101,100,0);
         fastG.push(3);
         mailz += mailz * 1;
         package_je += parseFloat(`${mailz / (Math.max(updates9.length, 2))}`);
         updates9 = `${mailz}`;
      }
         fastG.push(fastG.length);
      aboutR += "3";
      privilegeo[networkj] = networkj.length & cleare.length;
      mimoq /= Math.max(2, 2);
       let imagewatchlive6 = 2.0;
       let livesharef = true;
         livesharef = 27.48 > imagewatchlive6;
      if (1.56 <= (imagewatchlive6 + 2.0) || !livesharef) {
         imagewatchlive6 *= ((livesharef ? 2 : 4) % (Math.max(1, parseInt(`${imagewatchlive6}`))));
      }
         imagewatchlive6 /= Math.max((parseInt(`${imagewatchlive6}`) - (livesharef ? 1 : 5)), 4);
      if ((2.69 - imagewatchlive6) < 5.53 || imagewatchlive6 < 2.69) {
         livesharef = imagewatchlive6 > 67.80;
      }
       let form3 = new Map([[String.fromCharCode(106,95,51,49,95,99,111,110,115,101,99,117,116,105,118,101,0),String.fromCharCode(114,95,55,57,95,115,99,104,101,109,101,0)], [String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,95,106,95,49,57,0),String.fromCharCode(115,107,101,119,95,54,95,50,48,0)]]);
         form3[`${imagewatchlive6}`] = form3.size;
      redgoall -= privilegeo.size;
      audiencef = [2];
      aboutR += `${orangeuparrowD.length}`;
   for (let p = 0; p < 3; p++) {
      downloaderl = `${2 | privilegeo.size}`;
   }
   for (let n = 0; n < 1; n++) {
      mimoq += 3 >> (Math.min(2, Math.abs(iconarrowrightorange3.size)));
   }

  }

   
  renderTopControls() {
       let components6 = true;
    let profilepicj = 5;
    let gpayM = 3.0;
    let dependencyI = 1.0;
    let basketballicont = [896, 945];
    let middle5 = String.fromCharCode(118,102,114,101,101,95,122,95,49,48,48,0);
    let attributedstringW = 2.0;
    let fullscreenminE = 5;
    let libfbjniI = true;
    let iconstarc = 0.0;
    let routerr = String.fromCharCode(120,95,48,95,116,98,117,102,0);
    let footballtrophyJ = true;
    let redcirclebgZ = true;
   for (let b = 0; b < 3; b++) {
      profilepicj %= Math.max(4, ((footballtrophyJ ? 2 : 3) & fullscreenminE));
   }
       let shielddoneU = String.fromCharCode(109,101,100,105,117,109,95,54,95,51,0);
       let nendR = 5.0;
       let clockM = true;
      for (let w = 0; w < 3; w++) {
         shielddoneU = `${(parseInt(`${nendR}`) + (clockM ? 2 : 1))}`;
      }
         nendR += (parseInt(`${nendR}`) << (Math.min(2, Math.abs((clockM ? 1 : 5)))));
         shielddoneU = `${((clockM ? 1 : 2))}`;
      do {
         clockM = 36.63 >= nendR && clockM;
         if (clockM ? !clockM : clockM) {
            break;
         }
      } while ((clockM ? !clockM : clockM) && (!clockM));
      for (let f = 0; f < 3; f++) {
         nendR += 3;
      }
       let positionfieldN = [289, 854];
       let libimagepipelineg = [258, 510, 721];
      for (let o = 0; o < 2; o++) {
         nendR -= (shielddoneU == String.fromCharCode(80,0) ? (clockM ? 1 : 3) : shielddoneU.length);
      }
      while (libimagepipelineg.length < 5) {
         clockM = shielddoneU == String.fromCharCode(65,0);
         break;
      }
      while (clockM || shielddoneU.length <= 5) {
          let toponf = String.fromCharCode(104,95,51,49,95,98,108,97,107,101,98,0);
          let hongkonge = String.fromCharCode(109,101,109,111,114,121,98,117,102,102,101,114,95,105,95,57,55,0);
          let orangeclockr = String.fromCharCode(120,95,55,52,95,115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,0);
          let utilsy = String.fromCharCode(113,117,97,110,116,95,107,95,55,57,0);
         shielddoneU = `${toponf.length % (Math.max(3, utilsy.length))}`;
         toponf += `${1 - hongkonge.length}`;
         hongkonge += `${(String.fromCharCode(52,0) == orangeclockr ? orangeclockr.length : hongkonge.length)}`;
         utilsy += `${2 >> (Math.min(5, orangeclockr.length))}`;
         break;
      }
      profilepicj -= ((libfbjniI ? 4 : 2));

    const backControl = this.props.disableBack
      ? this.renderNullControl()
      : this.renderBack();
    const volumeControl = this.props.disableVolume
      ? this.renderNullControl()
      : this.renderVolume();

    const videoTitle = this.renderVideoTitle();
   for (let j = 0; j < 3; j++) {
      routerr += `${middle5.length}`;
   }
   if (3 == (middle5.length - parseInt(`${gpayM}`))) {
      gpayM -= parseFloat(`${3 ^ middle5.length}`);
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
          source={require('./images/icons/vipsportReactnativeultimatelistviewLight.png')}
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
      basketballicont.push(routerr.length);
      profilepicj /= Math.max(3 & routerr.length, 4);

  }

   
  renderBack() {
       let iconarrowrightw = 4;
    let tooltipsZ = 5;
    let profilepicd = 2.0;
    let otherr = String.fromCharCode(102,95,52,55,95,109,105,110,109,97,120,0);
    let zhengpianZ = String.fromCharCode(99,102,116,98,115,117,98,95,107,95,53,0);
    let mbbida = String.fromCharCode(112,95,51,50,95,114,97,116,105,111,0);
    let roundf = String.fromCharCode(115,112,101,101,100,117,112,95,117,95,56,57,0);
    let paginationl = String.fromCharCode(100,95,52,95,101,108,101,109,0);
    let iconrefresh1 = new Map([[String.fromCharCode(115,104,97,112,101,95,50,95,54,48,0),327], [String.fromCharCode(105,95,49,95,113,115,111,114,116,0),721]]);
    let libcrashsdkz = String.fromCharCode(115,108,111,112,101,95,116,95,53,56,0);
    let mutedL = 2.0;
    let profileinactiveB = new Map([[String.fromCharCode(116,95,51,49,95,112,108,97,110,101,100,0),310], [String.fromCharCode(100,95,57,49,95,99,111,117,110,116,105,110,103,0),924]]);
    let encryptA = String.fromCharCode(105,110,115,101,114,116,95,118,95,52,57,0);
      roundf += "3";
       let x_countT = 2.0;
       let rocketQ = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,101,100,95,104,95,52,49,0);
       let grey6 = false;
       let debugd = true;
       let yellowvideolivev = false;
      do {
         debugd = (42 <= ((!grey6 ? rocketQ.length : 42) + rocketQ.length));
         if (debugd ? !debugd : debugd) {
            break;
         }
      } while ((!debugd) && (debugd ? !debugd : debugd));
         debugd = (debugd ? grey6 : debugd);
          let logoutx = 5.0;
          let icondefaultthumbnailm = String.fromCharCode(116,95,51,50,95,99,111,110,115,111,108,101,0);
         rocketQ = `${((grey6 ? 1 : 4))}`;
         logoutx *= 3 & parseInt(`${logoutx}`);
         icondefaultthumbnailm += `${(icondefaultthumbnailm == String.fromCharCode(109,0) ? parseInt(`${logoutx}`) : icondefaultthumbnailm.length)}`;
         rocketQ += `${rocketQ.length << (Math.min(Math.abs(1), 5))}`;
      profileinactiveB = new Map([[mbbida, (mbbida == String.fromCharCode(53,0) ? tooltipsZ : mbbida.length)]]);
      x_countT -= parseFloat(`${parseInt(`${x_countT}`)}`);
      zhengpianZ += `${3 - iconrefresh1.size}`;
   do {
       let yingC = 5.0;
       let private_39 = 3;
       let arrowrightg = String.fromCharCode(120,95,52,53,95,99,104,97,110,103,101,103,114,111,117,112,0);
      do {
         yingC /= Math.max(1, parseFloat(`${2}`));
         if (2919446.0 == yingC) {
            break;
         }
      } while ((2919446.0 == yingC) && (yingC >= 5.38));
         private_39 *= 3;
      do {
         arrowrightg = "3";
         if (arrowrightg == String.fromCharCode(50,48,57,0)) {
            break;
         }
      } while ((arrowrightg == String.fromCharCode(50,48,57,0)) && ((parseInt(`${yingC}`) / 3) < 2 || (parseFloat(`${arrowrightg.length}`) / (Math.max(2, yingC))) < 4.85));
      for (let g = 0; g < 2; g++) {
         private_39 *= (arrowrightg == String.fromCharCode(95,0) ? private_39 : arrowrightg.length);
      }
         private_39 /= Math.max(2, 1);
      for (let f = 0; f < 3; f++) {
         yingC -= parseFloat(`${parseInt(`${yingC}`)}`);
      }
      if ((private_39 - 3) == 2) {
         private_39 |= (arrowrightg == String.fromCharCode(109,0) ? arrowrightg.length : private_39);
      }
         private_39 /= Math.max(1 % (Math.max(3, parseInt(`${yingC}`))), 5);
          let statsnomoredatac = true;
          let historyv = false;
          let paginationm = true;
         arrowrightg = `${((statsnomoredatac ? 1 : 4) - (historyv ? 3 : 3))}`;
         statsnomoredatac = !paginationm;
         historyv = paginationm;
      mutedL -= parseFloat(`${2}`);
      if (124409.0 == mutedL) {
         break;
      }
   } while ((Array.from(profileinactiveB.values()).includes(mutedL)) && (124409.0 == mutedL));
       let owngoald = String.fromCharCode(114,95,56,53,95,115,109,111,111,116,104,110,101,115,115,0);
       let yellowvideolivec = new Map([[String.fromCharCode(119,95,55,57,95,109,97,112,112,105,110,103,115,0),String.fromCharCode(99,95,54,56,95,115,111,98,105,110,100,0)], [String.fromCharCode(102,95,56,55,95,100,110,115,110,97,109,101,0),String.fromCharCode(119,95,53,95,115,119,97,112,112,101,100,0)], [String.fromCharCode(113,95,54,95,114,101,112,108,105,101,115,0),String.fromCharCode(105,95,57,52,95,120,112,114,118,0)]]);
      do {
         owngoald = `${yellowvideolivec.size}`;
         if (2807630 == owngoald.length) {
            break;
         }
      } while ((2807630 == owngoald.length) && (1 > (owngoald.length % 1) || 1 > (yellowvideolivec.size % (Math.max(owngoald.length, 6)))));
      while (owngoald.length >= 4) {
         yellowvideolivec = new Map([[`${yellowvideolivec.size}`, owngoald.length * yellowvideolivec.size]]);
         break;
      }
      do {
         owngoald += `${owngoald.length - yellowvideolivec.size}`;
         if (owngoald.length == 4733127) {
            break;
         }
      } while ((owngoald.length == 4733127) && ((3 & yellowvideolivec.size) < 5 && 3 < (yellowvideolivec.size & owngoald.length)));
       let signinupq = String.fromCharCode(120,95,57,50,95,119,97,116,99,104,101,100,0);
       let navigationf = String.fromCharCode(97,115,99,101,110,100,105,110,103,95,106,95,53,0);
          let vietnamv = String.fromCharCode(106,95,53,57,95,102,114,101,101,0);
         owngoald += "2";
         vietnamv += `${2 << (Math.min(2, vietnamv.length))}`;
          let becomeA = 4.0;
         owngoald = "1";
         becomeA /= Math.max(2, parseInt(`${becomeA}`));
      zhengpianZ = `${profileinactiveB.size}`;
      profilepicd += paginationl.length;

    return this.renderControl(
      <Image
        source={require('./images/icons/gpayIncident.png')}
        style={VideoPlayerstyles.controls.back}
      />,
      this.events.onBack,
      VideoPlayerstyles.controls.back,
    );
       let foundC = new Map([[String.fromCharCode(121,95,50,57,95,102,111,114,109,97,116,117,0),821], [String.fromCharCode(117,110,117,115,101,100,95,110,95,51,53,0),658]]);
       let androidt = String.fromCharCode(120,98,105,110,95,104,95,54,50,0);
          let manifestT = 3.0;
          let downloadingp = 1;
          let topics = [570, 268, 99];
         androidt = "2";
         manifestT /= Math.max(parseInt(`${manifestT}`), 5);
         downloadingp += parseInt(`${manifestT}`);
         topics.push(downloadingp);
      for (let n = 0; n < 2; n++) {
         androidt = `${foundC.size}`;
      }
       let leftO = [String.fromCharCode(113,95,52,52,95,117,116,102,0), String.fromCharCode(115,109,97,108,108,95,112,95,50,49,0)];
         androidt += `${androidt.length}`;
      while (2 <= (leftO.length / (Math.max(3, androidt.length))) && (leftO.length / (Math.max(2, 3))) <= 2) {
          let iconarrowleftF = new Map([[String.fromCharCode(114,95,56,52,95,114,101,100,100,105,116,0),String.fromCharCode(97,117,116,104,107,101,121,95,113,95,52,50,0)], [String.fromCharCode(104,95,52,57,95,108,97,98,101,108,101,100,0),String.fromCharCode(115,101,114,105,102,95,102,95,55,50,0)], [String.fromCharCode(106,95,54,52,95,99,114,105,116,105,99,97,108,0),String.fromCharCode(112,95,54,57,95,109,99,111,109,112,0)]]);
         androidt = `${leftO.length / 3}`;
         iconarrowleftF[`${iconarrowleftF.size}`] = 1;
         break;
      }
      do {
          let updateso = false;
          let profilel = 5;
          let h_hash1 = [17, 659, 183];
          let iconschedulec = true;
         foundC[`${iconschedulec}`] = ((iconschedulec ? 3 : 5) % 2);
         updateso = h_hash1.length == profilel;
         profilel |= 2;
         h_hash1 = [(h_hash1.length & (updateso ? 1 : 3))];
         if (771199 == foundC.size) {
            break;
         }
      } while ((771199 == foundC.size) && ((androidt.length / 5) <= 3 && (foundC.size / (Math.max(androidt.length, 5))) <= 5));
      libcrashsdkz += `${profileinactiveB.size | 3}`;
      mutedL *= parseFloat(`${iconarrowrightw}`);
   if (5 > (iconrefresh1.size / 2) && (zhengpianZ.length / 2) > 4) {
      zhengpianZ = `${(roundf == String.fromCharCode(54,0) ? roundf.length : libcrashsdkz.length)}`;
   }
      iconrefresh1 = new Map([[`${profileinactiveB.size}`, 3 * profileinactiveB.size]]);
   for (let w = 0; w < 3; w++) {
       let teamdetailsbgd = 0.0;
       let networkz = 5.0;
       let largesound1 = [109, 192, 682];
       let bootsplashk = new Map([[String.fromCharCode(107,95,54,54,95,111,112,117,115,116,97,98,0),584], [String.fromCharCode(115,117,112,101,114,119,105,110,100,111,119,95,107,95,50,48,0),467]]);
      if (largesound1.length < 4) {
         largesound1 = [2 - parseInt(`${teamdetailsbgd}`)];
      }
         bootsplashk = new Map([[`${bootsplashk.size}`, 1]]);
      do {
         teamdetailsbgd /= Math.max(4, bootsplashk.size + 3);
         if (2040116.0 == teamdetailsbgd) {
            break;
         }
      } while ((2040116.0 == teamdetailsbgd) && (networkz >= 3.84));
      do {
          let private_piP = String.fromCharCode(115,105,110,117,115,111,105,100,97,108,95,112,95,53,50,0);
         bootsplashk[private_piP] = largesound1.length;
         if (775684 == bootsplashk.size) {
            break;
         }
      } while ((775684 == bootsplashk.size) && (bootsplashk[`${largesound1.length}`] != null));
      while ((bootsplashk.size % (Math.max(5, 2))) > 5 && 1 > (largesound1.length % (Math.max(5, 9)))) {
         bootsplashk = new Map([[`${networkz}`, parseInt(`${teamdetailsbgd}`) ^ parseInt(`${networkz}`)]]);
         break;
      }
         networkz /= Math.max(parseFloat(`${3 * parseInt(`${teamdetailsbgd}`)}`), 1);
      if (1.21 <= (1.17 * teamdetailsbgd)) {
         largesound1.push(3 + parseInt(`${networkz}`));
      }
          let codeW = [String.fromCharCode(117,112,99,111,109,105,110,103,95,102,95,54,53,0), String.fromCharCode(102,109,97,99,95,97,95,52,0), String.fromCharCode(116,104,101,109,101,95,55,95,54,55,0)];
          let imageactionliveO = String.fromCharCode(103,95,50,95,115,116,114,105,100,0);
         largesound1 = [bootsplashk.size];
         codeW.push(imageactionliveO.length * codeW.length);
         imageactionliveO = `${2 & imageactionliveO.length}`;
         teamdetailsbgd -= parseInt(`${networkz}`) / 3;
          let notificationgrayu = [281, 969, 248];
          let shoott = false;
          let encryptD = 2.0;
         networkz -= parseFloat(`${notificationgrayu.length}`);
         notificationgrayu.push(parseInt(`${encryptD}`) + 1);
         shoott = !shoott;
         encryptD /= Math.max((parseFloat(`${(shoott ? 3 : 3) / (Math.max(parseInt(`${encryptD}`), 4))}`)), 4);
         largesound1.push(parseInt(`${teamdetailsbgd}`));
      if (!Array.from(bootsplashk.keys()).includes(`${networkz}`)) {
          let libbuffer1 = 2;
         bootsplashk = new Map([[`${bootsplashk.size}`, bootsplashk.size]]);
         libbuffer1 &= libbuffer1;
      }
      paginationl = `${1 << (Math.min(3, libcrashsdkz.length))}`;
   }
   if (1 == (5 % (Math.max(2, tooltipsZ)))) {
      iconarrowrightw %= Math.max(4, (String.fromCharCode(76,0) == paginationl ? profileinactiveB.size : paginationl.length));
   }

  }

   
  renderVolume() {
       let renderW = 5;
    let rewindA = String.fromCharCode(118,95,56,54,95,118,101,99,116,111,114,0);
    let desce = String.fromCharCode(114,100,118,111,95,110,95,52,55,0);
    let libcrashsdkO = false;
    let notificationfilledr = String.fromCharCode(97,118,111,105,100,95,57,95,57,53,0);
    let expandc = true;
    let shootnogoal4 = true;
    let modalu = 0;
    let privilegeb = String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,95,98,95,49,57,0);
    let shootR = String.fromCharCode(108,95,55,49,95,118,111,105,99,101,115,0);
       let reactnativeultimatelistviewi = String.fromCharCode(100,114,105,118,101,110,95,109,95,52,0);
       let middlebrightnessD = String.fromCharCode(117,115,116,111,109,95,98,95,52,50,0);
       let libcxxcomponentso = 3.0;
          let libfabricjni1 = 4.0;
          let libimagepipelineS = [String.fromCharCode(119,95,55,49,95,102,97,97,110,100,99,116,0), String.fromCharCode(119,95,55,49,0), String.fromCharCode(115,111,98,101,108,95,57,95,54,57,0)];
          let faviconm = new Map([[String.fromCharCode(120,95,57,54,95,113,117,111,116,101,0),598], [String.fromCharCode(109,101,114,103,101,95,107,95,55,0),464]]);
         libcxxcomponentso *= (parseFloat(`${String.fromCharCode(116,0) == reactnativeultimatelistviewi ? faviconm.size : reactnativeultimatelistviewi.length}`));
         libfabricjni1 /= Math.max(5, parseInt(`${libfabricjni1}`) / (Math.max(libimagepipelineS.length, 10)));
         libimagepipelineS = [1];
         faviconm = new Map([[`${libimagepipelineS.length}`, libimagepipelineS.length]]);
      while (4.43 == (parseFloat(`${middlebrightnessD.length}`) - libcxxcomponentso)) {
          let basketballtrophyH = [712, 819, 748];
          let entryb = String.fromCharCode(120,95,57,55,95,102,97,115,116,101,115,116,0);
          let halfO = String.fromCharCode(98,95,54,54,95,115,105,103,110,112,111,115,116,0);
         libcxxcomponentso += parseFloat(`${basketballtrophyH.length + 2}`);
         basketballtrophyH = [halfO.length];
         entryb = `${1 | halfO.length}`;
         break;
      }
         libcxxcomponentso *= (parseFloat(`${middlebrightnessD == String.fromCharCode(50,0) ? middlebrightnessD.length : parseInt(`${libcxxcomponentso}`)}`));
         libcxxcomponentso /= Math.max(1, parseFloat(`${reactnativeultimatelistviewi.length & 1}`));
      if (5 > middlebrightnessD.length) {
         middlebrightnessD = `${middlebrightnessD.length / (Math.max(reactnativeultimatelistviewi.length, 1))}`;
      }
       let settingsm = false;
       let securityc = true;
         libcxxcomponentso *= parseFloat(`${1}`);
         reactnativeultimatelistviewi += `${(String.fromCharCode(69,0) == middlebrightnessD ? parseInt(`${libcxxcomponentso}`) : middlebrightnessD.length)}`;
          let renders = 2;
          let taiwanz = String.fromCharCode(122,95,49,48,95,97,109,111,117,110,116,115,0);
          let iconnewchatE = new Map([[String.fromCharCode(117,105,100,95,53,95,55,48,0),317], [String.fromCharCode(111,110,101,111,102,115,95,110,95,55,52,0),859], [String.fromCharCode(99,95,56,50,95,110,101,119,101,114,0),287]]);
         settingsm = taiwanz.length > 31;
         renders += renders;
         taiwanz = `${renders >> (Math.min(Math.abs(iconnewchatE.size), 1))}`;
         iconnewchatE[`${renders}`] = 1;
      desce = `${parseInt(`${libcxxcomponentso}`) >> (Math.min(5, Math.abs(3)))}`;
   do {
      libcrashsdkO = rewindA.endsWith(`${libcrashsdkO}`);
      if (libcrashsdkO ? !libcrashsdkO : libcrashsdkO) {
         break;
      }
   } while ((expandc) && (libcrashsdkO ? !libcrashsdkO : libcrashsdkO));

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
            source={require('./images/icons/countdownIconplayActive.png')}
          />
        </View>
      </View>
    );
      libcrashsdkO = rewindA == String.fromCharCode(79,0);
   while ((modalu * 4) >= 4 && (4 * notificationfilledr.length) >= 5) {
      modalu += ((expandc ? 4 : 5));
      break;
   }

  }
  
  renderVideoTitle() {
       let iconclosewhitebgA = new Map([[String.fromCharCode(103,95,57,54,95,99,104,97,105,110,101,100,0),399], [String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,95,113,95,51,54,0),609], [String.fromCharCode(100,97,116,97,100,105,114,95,109,95,53,57,0),565]]);
    let statsU = new Map([[String.fromCharCode(108,95,49,55,95,115,112,97,99,101,114,0),String.fromCharCode(112,95,53,52,95,99,111,115,116,115,0)], [String.fromCharCode(114,100,99,111,115,116,95,120,95,52,50,0),String.fromCharCode(115,95,53,56,95,99,111,114,100,122,0)], [String.fromCharCode(116,104,101,110,97,98,108,101,95,98,95,49,52,0),String.fromCharCode(105,95,57,55,95,97,97,99,112,115,121,0)]]);
    let iconsubssuccessD = [417, 124];
    let login_ = false;
    let sheet1 = 3;
    let arrowselectdownP = 1.0;
    let eventk = String.fromCharCode(98,97,115,105,99,115,95,106,95,53,55,0);
    let iconpointscore2 = new Map([[String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,115,95,116,95,50,56,0),954], [String.fromCharCode(117,115,117,98,95,100,95,49,51,0),408], [String.fromCharCode(121,95,53,57,95,108,105,115,116,101,110,101,114,115,0),359]]);
    let lessp = new Map([[String.fromCharCode(103,95,56,53,95,105,110,116,114,112,0),756], [String.fromCharCode(99,97,110,100,108,101,95,111,95,52,52,0),78], [String.fromCharCode(102,97,118,111,114,105,116,101,95,49,95,50,0),703]]);
    let iconclosewhitebga = String.fromCharCode(102,95,56,48,95,97,117,116,111,98,97,110,104,0);
    let redirectd = String.fromCharCode(121,112,114,101,100,105,99,116,105,111,110,95,111,95,52,48,0);
      statsU[`${lessp.size}`] = 1 % (Math.max(10, iconpointscore2.size));
   for (let y = 0; y < 2; y++) {
      statsU = new Map([[iconclosewhitebga, (iconclosewhitebga == String.fromCharCode(117,0) ? (login_ ? 1 : 1) : iconclosewhitebga.length)]]);
   }
      arrowselectdownP -= iconclosewhitebgA.size & iconclosewhitebga.length;
   for (let j = 0; j < 2; j++) {
      iconclosewhitebga += `${iconclosewhitebgA.size}`;
   }
   while (iconclosewhitebga.length <= eventk.length) {
      iconclosewhitebga = `${iconpointscore2.size << (Math.min(Math.abs(1), 3))}`;
      break;
   }

    return (
      <View style={VideoPlayerstyles.videotitle.container}>
        <Text style={VideoPlayerstyles.videotitle.title}>
          {this.state.videoTitle}
        </Text>
      </View>
    );
      eventk += `${iconclosewhitebgA.size | eventk.length}`;
   do {
       let memberm = [150, 700, 511];
       let configc = false;
       let libreact2 = String.fromCharCode(110,101,115,116,101,100,95,101,95,56,55,0);
      if (!libreact2.endsWith(`${configc}`)) {
         configc = !configc;
      }
          let clockN = String.fromCharCode(108,95,57,51,95,112,117,108,115,101,0);
          let apple3 = String.fromCharCode(105,95,49,48,95,100,117,114,98,105,110,0);
          let phonesharek = true;
         configc = libreact2.length >= 63 && configc;
         clockN += `${apple3.length}`;
         apple3 = `${apple3.length & 1}`;
         phonesharek = ((apple3.length << (Math.min(4, Math.abs((phonesharek ? apple3.length : 48))))) >= 48);
         memberm = [((configc ? 4 : 3))];
       let libfbjnip = String.fromCharCode(99,95,50,95,110,111,105,115,101,115,0);
       let kuaishouX = String.fromCharCode(108,105,115,116,101,110,101,114,115,95,110,95,50,53,0);
      if (!configc && libfbjnip.length <= 1) {
         configc = libreact2.length <= 35;
      }
      do {
         configc = memberm.includes(configc);
         if (configc ? !configc : configc) {
            break;
         }
      } while ((configc && libreact2.length <= 3) && (configc ? !configc : configc));
         configc = !kuaishouX.includes(`${configc}`);
       let castingO = new Map([[String.fromCharCode(104,95,52,53,95,112,108,97,110,0),528], [String.fromCharCode(115,116,97,114,115,95,113,95,54,50,0),989], [String.fromCharCode(112,105,110,110,101,100,95,117,95,57,55,0),723]]);
      if ((memberm.length - kuaishouX.length) <= 2) {
         kuaishouX += `${memberm.length}`;
      }
      lessp = new Map([[`${statsU.size}`, libreact2.length]]);
      if (lessp.size == 2044662) {
         break;
      }
   } while ((lessp.size == 2044662) && (!Array.from(lessp.values()).includes(sheet1)));
   for (let d = 0; d < 3; d++) {
       let iconorientationp = false;
       let iconplay3 = String.fromCharCode(100,105,115,109,105,115,115,95,113,95,52,52,0);
         iconorientationp = !iconorientationp;
          let settingsp = 4.0;
         iconorientationp = !iconorientationp && iconplay3.length <= 83;
         settingsp *= parseFloat(`${1}`);
          let mountinge = String.fromCharCode(97,95,52,49,95,105,109,112,111,114,116,101,100,0);
          let mbnative8 = 1;
         iconorientationp = !iconorientationp;
         mountinge += `${mbnative8 ^ mountinge.length}`;
         mbnative8 += mbnative8 / 1;
      if (iconplay3.length <= 2 || iconorientationp) {
         iconplay3 += "2";
      }
      for (let a = 0; a < 1; a++) {
         iconplay3 = `${((iconorientationp ? 4 : 1))}`;
      }
      while (iconplay3.startsWith(`${iconorientationp}`)) {
         iconplay3 = `${((iconorientationp ? 5 : 3))}`;
         break;
      }
      eventk += `${iconpointscore2.size / (Math.max(iconplay3.length, 2))}`;
   }
      iconclosewhitebgA[`${sheet1}`] = 3;
   do {
       let libyogav = String.fromCharCode(101,120,112,108,105,99,105,116,95,51,95,49,49,0);
       let middlesoundx = 1;
       let moon1 = 5.0;
      for (let z = 0; z < 3; z++) {
         middlesoundx -= libyogav.length;
      }
      do {
          let predictionbuttonK = 2;
          let matcht = String.fromCharCode(119,95,57,49,95,98,111,116,116,111,109,0);
          let gesturesX = 0;
          let langM = 2;
         moon1 -= middlesoundx % (Math.max(3, 9));
         predictionbuttonK >>= Math.min(5, Math.abs(gesturesX & 3));
         matcht += `${langM}`;
         gesturesX |= 3 - langM;
         if (2049855.0 == moon1) {
            break;
         }
      } while ((4 >= (4 + middlesoundx) || (4.71 - moon1) >= 2.84) && (2049855.0 == moon1));
         libyogav = `${middlesoundx / (Math.max(1, 10))}`;
          let grayz = 5.0;
          let graphicsp = String.fromCharCode(114,95,48,95,114,101,118,111,107,101,100,0);
         moon1 *= 2 * libyogav.length;
         grayz *= parseFloat(`${graphicsp.length >> (Math.min(3, Math.abs(parseInt(`${grayz}`))))}`);
         graphicsp += "3";
         middlesoundx >>= Math.min(Math.abs(3), 1);
      while (middlesoundx <= moon1) {
         middlesoundx %= Math.max(parseInt(`${moon1}`) ^ 2, 3);
         break;
      }
      do {
         middlesoundx <<= Math.min(Math.abs(middlesoundx % (Math.max(2, parseInt(`${moon1}`)))), 1);
         if (middlesoundx == 633811) {
            break;
         }
      } while (((middlesoundx % (Math.max(libyogav.length, 2))) < 1 || (libyogav.length % (Math.max(1, 6))) < 3) && (middlesoundx == 633811));
      while (libyogav.length >= 4) {
         libyogav += `${parseInt(`${moon1}`)}`;
         break;
      }
       let greenarrowupF = true;
       let play_ = true;
      statsU[`${sheet1}`] = 3;
      if (3381570 == statsU.size) {
         break;
      }
   } while ((1 < (1 << (Math.min(4, Math.abs(statsU.size))))) && (3381570 == statsU.size));

  }

   
  renderFullscreen() {
       let mbsplash8 = 5.0;
    let zhengpianN = new Map([[String.fromCharCode(102,114,101,101,112,95,105,95,57,54,0),746], [String.fromCharCode(97,95,57,48,95,111,103,103,100,101,99,0),301], [String.fromCharCode(118,95,55,53,95,99,97,118,112,0),67]]);
    let storee = false;
    let matchinactiveG = 2.0;
    let textlayoutmanagery = String.fromCharCode(105,110,102,101,114,101,100,95,112,95,55,50,0);
    let temperature9 = String.fromCharCode(117,110,97,114,99,104,105,118,101,95,49,95,49,53,0);
    let whitevideoliveB = 4.0;
    let typingloading0 = 5.0;
    let ajaxD = 1;
    let redgoale = new Map([[String.fromCharCode(99,104,97,110,110,101,108,115,95,114,95,55,56,0),false ], [String.fromCharCode(121,95,53,56,95,116,98,117,102,0),false ], [String.fromCharCode(112,95,51,57,0),false ]]);
    let circleb = 2;
    let xvodQ = String.fromCharCode(112,95,57,51,95,112,114,111,118,105,100,105,110,103,0);
    let usernamed = String.fromCharCode(114,95,56,52,95,108,111,111,112,105,110,103,0);
       let borderlessB = String.fromCharCode(111,110,116,114,111,108,115,95,110,95,57,54,0);
       let nativemoduleH = true;
      while (!nativemoduleH) {
          let eactQ = 3;
          let league8 = 3.0;
          let h_manager0 = false;
         borderlessB = `${(borderlessB.length >> (Math.min(3, Math.abs((h_manager0 ? 1 : 3)))))}`;
         eactQ <<= Math.min(Math.abs(parseInt(`${league8}`) << (Math.min(4, Math.abs(eactQ)))), 2);
         league8 /= Math.max(parseFloat(`${parseInt(`${league8}`)}`), 3);
         h_manager0 = league8 <= 39.84;
         break;
      }
      while (!nativemoduleH) {
         borderlessB = `${borderlessB.length}`;
         break;
      }
         nativemoduleH = borderlessB.length > 26;
      do {
         borderlessB = `${((nativemoduleH ? 3 : 3) % (Math.max(borderlessB.length, 6)))}`;
         if (borderlessB.length == 2863118) {
            break;
         }
      } while ((borderlessB.length == 2863118) && (borderlessB.length > 3));
         nativemoduleH = !nativemoduleH;
         nativemoduleH = !nativemoduleH && borderlessB.length == 97;
      zhengpianN[`${nativemoduleH}`] = zhengpianN.size;
      typingloading0 += parseFloat(`${zhengpianN.size}`);
   do {
       let iconnointernetE = [473, 814];
       let subsq = 4.0;
       let defaultteamN = String.fromCharCode(99,121,99,108,101,99,108,111,99,107,95,117,95,53,49,0);
         subsq *= parseFloat(`${parseInt(`${subsq}`) >> (Math.min(defaultteamN.length, 4))}`);
      if (!defaultteamN.endsWith(`${iconnointernetE.length}`)) {
         defaultteamN += `${3 - iconnointernetE.length}`;
      }
          let baselinee = String.fromCharCode(117,95,49,53,95,97,109,101,120,0);
          let imagemanagerp = 1.0;
          let baiduV = String.fromCharCode(108,117,114,97,108,105,122,97,116,105,111,110,95,113,95,49,55,0);
         iconnointernetE = [2 << (Math.min(2, iconnointernetE.length))];
         baselinee = `${baiduV.length >> (Math.min(baselinee.length, 2))}`;
         imagemanagerp /= Math.max(2, 2 & baiduV.length);
          let gradleN = [855, 281, 752];
          let cornerI = 1;
         defaultteamN += `${parseInt(`${subsq}`)}`;
         gradleN = [3];
         cornerI /= Math.max(gradleN.length | 1, 2);
         subsq /= Math.max(parseFloat(`${iconnointernetE.length}`), 1);
      for (let j = 0; j < 2; j++) {
          let upgradez = 5.0;
          let hoverQ = String.fromCharCode(100,95,57,52,95,99,97,108,99,117,108,97,116,101,100,0);
          let eact7 = String.fromCharCode(105,110,105,116,97,99,107,95,98,95,49,51,0);
          let animationsM = String.fromCharCode(101,110,100,105,97,110,110,101,115,115,95,104,95,52,51,0);
          let homeloading2 = 0.0;
         defaultteamN += `${parseInt(`${upgradez}`) | 1}`;
         upgradez *= (hoverQ == String.fromCharCode(88,0) ? hoverQ.length : parseInt(`${homeloading2}`));
         eact7 += "3";
         animationsM = `${parseInt(`${homeloading2}`) & 3}`;
      }
         iconnointernetE.push(parseInt(`${subsq}`));
          let grayT = 4.0;
         defaultteamN = `${parseInt(`${grayT}`)}`;
       let gift5 = 5.0;
      storee = redgoale[`${typingloading0}`] == null;
      if (storee ? !storee : storee) {
         break;
      }
   } while ((storee ? !storee : storee) && (!storee));

    let source =
      this.state.isFullscreen === true
        ? require('./images/icons/libhermesMegaphone.png')
        : require('./images/icons/greytickValues.png');
    return this.renderControl(
      <Image
        source={source}
        style={VideoPlayerstyles.controls.fullscreenIcon}
        resizeMode={'contain'}
      />,
      this.methods.toggleFullscreen,
      VideoPlayerstyles.controls.fullscreen,
    );
      whitevideoliveB += ((storee ? 4 : 2) & 2);
   for (let n = 0; n < 3; n++) {
      redgoale[textlayoutmanagery] = temperature9.length & 3;
   }
       let megaphoneh = [456, 452];
         megaphoneh = [megaphoneh.length & 3];
         megaphoneh = [3];
      if ((5 * megaphoneh.length) >= 1 || 2 >= (megaphoneh.length * 5)) {
         megaphoneh = [megaphoneh.length * 1];
      }
      zhengpianN[`${ajaxD}`] = zhengpianN.size % 3;

  }

   
  renderBottomControls() {
       let k_unlockg = false;
    let elementsH = String.fromCharCode(103,117,105,100,115,95,56,95,50,51,0);
    let banner4 = String.fromCharCode(100,95,54,56,95,121,114,121,105,0);
    let sharedQ = String.fromCharCode(105,112,109,111,118,105,101,95,121,95,57,49,0);
    let mathR = 0.0;
    let viewerP = String.fromCharCode(103,95,52,56,95,118,101,114,115,105,111,110,101,100,0);
    let mapbuffert = String.fromCharCode(98,105,103,103,101,115,116,95,106,95,55,49,0);
    let baidug = String.fromCharCode(107,95,49,53,95,102,105,108,116,0);
       let activey = 1.0;
          let controlsL = String.fromCharCode(99,104,117,110,107,115,95,121,95,57,50,0);
          let slider_ = true;
          let loadingK = false;
         activey /= Math.max(2, parseFloat(`${parseInt(`${activey}`) * controlsL.length}`));
         controlsL += `${((loadingK ? 4 : 3))}`;
         slider_ = !loadingK;
       let libreactg = 5;
       let cancelo = 5;
      for (let r = 0; r < 1; r++) {
          let membershipU = [269, 66];
          let loadingz = String.fromCharCode(97,95,56,54,95,105,100,102,118,0);
          let gnewsshared = String.fromCharCode(121,95,51,56,95,119,97,116,99,104,100,111,103,0);
          let frame_yq = new Map([[String.fromCharCode(105,95,57,56,95,115,107,105,112,112,97,98,108,101,0),String.fromCharCode(120,95,52,56,95,102,117,114,116,104,101,114,0)], [String.fromCharCode(116,105,108,108,95,106,95,48,0),String.fromCharCode(106,95,51,48,95,113,99,101,108,112,0)]]);
          let eyeopenl = 1;
         activey -= parseFloat(`${2}`);
         membershipU.push(eyeopenl);
         loadingz = `${(String.fromCharCode(78,0) == loadingz ? loadingz.length : eyeopenl)}`;
         gnewsshared = `${eyeopenl}`;
         frame_yq[`${loadingz}`] = frame_yq.size;
      }
      elementsH += `${parseInt(`${activey}`)}`;

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
          source={require('./images/icons/homeiconCode.png')}
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
      viewerP = `${mapbuffert.length - 2}`;

  }

   
  renderSeekbar() {
       let areal = [145, 939];
    let movies6 = new Map([[String.fromCharCode(114,103,98,114,103,98,95,51,95,52,49,0),858], [String.fromCharCode(102,114,97,109,101,112,111,111,108,95,105,95,50,48,0),915]]);
    let halffieldimage_ = 3.0;
    let gpayQ = 1.0;
    let libjsijniprofilery = new Map([[String.fromCharCode(115,97,118,101,95,115,95,57,56,0),String.fromCharCode(114,97,112,105,100,95,106,95,57,0)], [String.fromCharCode(100,95,56,51,95,100,105,115,112,108,97,121,105,110,103,0),String.fromCharCode(99,104,101,99,107,108,105,110,101,95,104,95,50,49,0)]]);
    let yellowvideoliveX = false;
    let suggestionO = 2.0;
    let weathery = [481, 815];
    let listu = 0.0;
    let refreshborderless8 = 2.0;
    let nendM = new Map([[String.fromCharCode(115,99,104,101,109,101,95,114,95,54,52,0),829], [String.fromCharCode(100,111,103,95,120,95,56,53,0),166], [String.fromCharCode(104,101,108,100,95,121,95,51,48,0),959]]);
    let minimizeX = [String.fromCharCode(97,95,57,56,95,116,101,120,116,97,116,116,114,0), String.fromCharCode(110,97,110,95,49,95,57,56,0)];
      movies6 = new Map([[`${suggestionO}`, parseInt(`${suggestionO}`) / 2]]);
   for (let x = 0; x < 3; x++) {
       let shrunkH = String.fromCharCode(115,95,53,48,95,98,117,105,108,100,99,111,110,102,0);
       let mappingk = true;
       let baiduadsL = 1.0;
       let cornerkickh = [String.fromCharCode(109,95,50,57,95,102,105,110,97,108,105,115,101,114,0), String.fromCharCode(98,95,54,49,95,110,101,116,119,111,114,107,0), String.fromCharCode(110,95,50,49,95,112,97,114,97,109,101,116,114,105,122,101,100,0)];
       let whitei = new Map([[String.fromCharCode(114,101,115,111,108,118,105,110,103,95,116,95,55,53,0),String.fromCharCode(101,120,99,104,97,110,103,101,115,95,120,95,54,0)], [String.fromCharCode(113,95,57,55,95,112,101,114,109,105,115,115,105,111,110,115,0),String.fromCharCode(112,97,105,114,115,95,114,95,53,48,0)]]);
      while (3 == (5 << (Math.min(3, shrunkH.length)))) {
         cornerkickh.push(3);
         break;
      }
      for (let h = 0; h < 3; h++) {
         mappingk = whitei.size >= 6;
      }
      while (4 >= shrunkH.length) {
         shrunkH += `${whitei.size}`;
         break;
      }
          let themek = 0.0;
          let senda = String.fromCharCode(101,95,55,53,95,109,105,110,115,0);
          let indexD = new Map([[String.fromCharCode(99,95,55,55,95,112,97,103,101,115,0),209], [String.fromCharCode(114,95,51,56,95,99,111,110,116,114,105,98,0),917]]);
         mappingk = String.fromCharCode(95,0) == senda;
         themek += parseFloat(`${parseInt(`${themek}`)}`);
         senda = `${indexD.size / 2}`;
         indexD[`${themek}`] = 1 % (Math.max(7, parseInt(`${themek}`)));
         baiduadsL *= (3 << (Math.min(5, Math.abs((mappingk ? 5 : 2)))));
         cornerkickh.push(3);
         whitei = new Map([[shrunkH, (shrunkH.length / (Math.max(3, (mappingk ? 2 : 4))))]]);
         shrunkH += `${3 << (Math.min(1, Math.abs(whitei.size)))}`;
       let whitet = 2;
          let trashM = 5.0;
          let bellreminderm = String.fromCharCode(113,95,53,48,95,109,101,109,122,101,114,111,0);
          let profilen = new Map([[String.fromCharCode(109,97,112,115,116,114,105,110,103,95,108,95,55,53,0),true ], [String.fromCharCode(108,111,99,97,108,97,100,100,114,95,115,95,57,56,0),false ]]);
         whitet &= (parseInt(`${trashM}`) >> (Math.min(1, Math.abs((mappingk ? 1 : 1)))));
         trashM -= profilen.size + 1;
         bellreminderm += `${(String.fromCharCode(73,0) == bellreminderm ? bellreminderm.length : profilen.size)}`;
      for (let r = 0; r < 3; r++) {
         cornerkickh.push((String.fromCharCode(98,0) == shrunkH ? shrunkH.length : whitei.size));
      }
         shrunkH += `${1 >> (Math.min(1, Math.abs(whitei.size)))}`;
         cornerkickh.push(1);
         cornerkickh.push(2 - whitei.size);
      if ((2 + whitet) > 3) {
          let umengm = new Map([[String.fromCharCode(99,111,110,118,95,115,95,49,53,0),518], [String.fromCharCode(117,112,115,104,105,102,116,101,100,95,104,95,52,50,0),520]]);
          let iconarrowrightorangeZ = new Map([[String.fromCharCode(103,95,49,95,112,97,110,101,108,0),92], [String.fromCharCode(97,99,116,105,111,110,95,117,95,57,52,0),595]]);
         baiduadsL += 1;
         umengm = new Map([[`${umengm.size}`, umengm.size]]);
         iconarrowrightorangeZ = new Map([[`${iconarrowrightorangeZ.size}`, umengm.size & iconarrowrightorangeZ.size]]);
      }
      yellowvideoliveX = (baiduadsL * weathery.length) >= 36.92;
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
   if (!yellowvideoliveX || 4 >= (4 + areal.length)) {
      areal = [movies6.size & 2];
   }
   if (5.51 == (halffieldimage_ + 2.87) || (halffieldimage_ + movies6.size) == 2.87) {
      halffieldimage_ += libjsijniprofilery.size - weathery.length;
   }

  }

   
  renderPlayPause() {
       let faviconv = String.fromCharCode(101,95,54,51,95,109,105,109,101,0);
    let middlebrightnessn = [840, 11];
    let applicationU = true;
    let libmapbufferjnic = true;
    let icondefaultthumbnailu = String.fromCharCode(97,117,116,111,99,104,101,99,107,112,111,105,110,116,95,51,95,56,51,0);
    let renderv = 3.0;
    let alertd = String.fromCharCode(115,105,103,110,97,98,108,101,95,109,95,52,55,0);
    let watchO = String.fromCharCode(121,95,50,56,95,116,114,97,99,107,101,114,0);
    let taiwan1 = String.fromCharCode(108,95,50,56,95,112,101,114,105,111,100,0);
    let stepj = String.fromCharCode(99,116,114,108,95,104,95,50,54,0);
    let kuaishouS = 2.0;
    let foundO = 0;
      taiwan1 += `${watchO.length}`;
   while (faviconv.length >= 3) {
      faviconv += `${parseInt(`${renderv}`) & 1}`;
      break;
   }
      applicationU = !libmapbufferjnic;

    let source =
      this.state.paused === true
        ? require('./images/icons/classesHongkong.png')
        : require('./images/icons/crossBasketballhometeam.png');
    return this.renderControl(
      <Image
        source={source}
        style={VideoPlayerstyles.controls.playPauseIcon}
        resizeMode={'cover'}
      />,
      this.methods.togglePlayPause,
      VideoPlayerstyles.controls.playPause,
    );
   do {
       let tempB = String.fromCharCode(121,95,56,57,95,115,104,111,114,116,108,121,0);
       let middlebrightnessr = String.fromCharCode(102,95,54,95,99,111,112,121,118,0);
       let dicelogoI = [520, 903];
         dicelogoI.push(middlebrightnessr.length % (Math.max(2, 5)));
          let rewindQ = 1;
          let middlesound6 = [477, 867];
         dicelogoI.push((tempB == String.fromCharCode(74,0) ? middlesound6.length : tempB.length));
         rewindQ >>= Math.min(Math.abs(1), 4);
         middlesound6 = [rewindQ];
       let arrowdownk = String.fromCharCode(104,95,49,49,95,116,114,97,99,107,101,114,0);
         arrowdownk = `${arrowdownk.length}`;
      do {
         tempB = `${(middlebrightnessr == String.fromCharCode(99,0) ? tempB.length : middlebrightnessr.length)}`;
         if (String.fromCharCode(57,114,122,48,122,108,104,122,0) == tempB) {
            break;
         }
      } while ((arrowdownk.startsWith(`${tempB.length}`)) && (String.fromCharCode(57,114,122,48,122,108,104,122,0) == tempB));
          let chatroombackgroundy = new Map([[String.fromCharCode(117,110,98,108,117,114,95,113,95,51,51,0),true ], [String.fromCharCode(113,95,57,57,95,115,119,102,112,108,97,121,101,114,0),false ]]);
          let iconrightorange_ = new Map([[String.fromCharCode(103,105,102,115,95,110,95,53,56,0),166], [String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,95,122,95,55,51,0),60], [String.fromCharCode(113,95,57,51,95,111,117,116,102,105,108,101,115,0),526]]);
         arrowdownk += `${(arrowdownk == String.fromCharCode(80,0) ? chatroombackgroundy.size : arrowdownk.length)}`;
         chatroombackgroundy = new Map([[`${iconrightorange_.size}`, iconrightorange_.size]]);
          let gesturesp = new Map([[String.fromCharCode(102,95,55,51,95,105,110,112,108,105,99,105,116,101,108,121,0),51], [String.fromCharCode(98,95,53,53,95,108,108,118,105,100,100,115,112,0),580], [String.fromCharCode(103,97,105,110,115,95,120,95,53,48,0),384]]);
          let orangeclockz = String.fromCharCode(102,102,105,111,95,117,95,56,57,0);
          let backF = true;
         tempB += `${orangeclockz.length}`;
         gesturesp = new Map([[`${gesturesp.size}`, gesturesp.size ^ 2]]);
         orangeclockz = `${(gesturesp.size | (backF ? 5 : 2))}`;
      do {
         dicelogoI.push(middlebrightnessr.length + 2);
         if (4131180 == dicelogoI.length) {
            break;
         }
      } while (((1 + tempB.length) < 1 && 1 < (dicelogoI.length + tempB.length)) && (4131180 == dicelogoI.length));
      while ((3 << (Math.min(1, dicelogoI.length))) > 5 && 3 > (dicelogoI.length << (Math.min(middlebrightnessr.length, 4)))) {
         dicelogoI.push(tempB.length / 1);
         break;
      }
      taiwan1 += `${tempB.length / (Math.max(1, 9))}`;
      if (String.fromCharCode(97,121,102,95,57,0) == taiwan1) {
         break;
      }
   } while ((String.fromCharCode(97,121,102,95,57,0) == taiwan1) && (alertd != taiwan1));
      middlebrightnessn = [faviconv.length << (Math.min(Math.abs(1), 3))];
       let green6 = 3.0;
       let casts = String.fromCharCode(119,95,54,52,95,99,97,110,99,101,108,108,97,116,105,111,110,0);
       let gifgoalbgd = String.fromCharCode(111,95,54,55,95,97,108,112,104,97,110,117,109,101,114,105,99,115,0);
      for (let e = 0; e < 3; e++) {
         green6 += casts.length;
      }
         casts += `${(gifgoalbgd == String.fromCharCode(54,0) ? parseInt(`${green6}`) : gifgoalbgd.length)}`;
      do {
         green6 += (gifgoalbgd == String.fromCharCode(115,0) ? gifgoalbgd.length : parseInt(`${green6}`));
         if (green6 == 3926434.0) {
            break;
         }
      } while ((1 == (casts.length + parseInt(`${green6}`)) && (1 + casts.length) == 1) && (green6 == 3926434.0));
          let turnW = 5.0;
          let release_i4H = String.fromCharCode(114,95,52,48,95,101,100,103,101,0);
         casts = `${2 ^ parseInt(`${turnW}`)}`;
         turnW += 3;
         release_i4H = `${release_i4H.length}`;
      while (gifgoalbgd.length < casts.length) {
          let chatbotphotoj = String.fromCharCode(121,95,57,51,95,97,107,97,114,111,115,0);
          let membership9 = String.fromCharCode(121,98,114,105,95,116,95,52,0);
         casts += `${parseInt(`${green6}`) - casts.length}`;
         chatbotphotoj = `${chatbotphotoj.length}`;
         membership9 += "3";
         break;
      }
         green6 *= parseInt(`${green6}`);
         casts = "3";
      while (casts.length < gifgoalbgd.length) {
          let guideg = 3.0;
          let projectS = String.fromCharCode(121,95,50,49,95,115,101,99,117,114,101,100,0);
          let libfileE = 2.0;
         gifgoalbgd = `${3 & projectS.length}`;
         guideg -= parseInt(`${libfileE}`) % (Math.max(8, parseInt(`${guideg}`)));
         projectS = "1";
         libfileE /= Math.max(2, parseInt(`${guideg}`));
         break;
      }
         green6 += parseInt(`${green6}`);
      icondefaultthumbnailu = `${1 | icondefaultthumbnailu.length}`;

  }

   
  renderTitle() {
       let countryF = true;
    let combineV = String.fromCharCode(115,95,50,48,95,111,108,107,97,100,111,116,0);
    let loadingq = 2;
    let formI = 0.0;
    let dragQ = String.fromCharCode(112,114,105,109,97,114,105,101,115,95,118,95,56,53,0);
    let defaultpredictionprofileG = [147, 4];
    let room6 = [String.fromCharCode(108,111,99,107,105,110,103,95,118,95,56,54,0), String.fromCharCode(106,95,49,51,95,114,101,115,116,114,105,99,116,0)];
    let bggradientH = 2;
    let greenarrowup4 = 4.0;
    let footballtrophyl = new Map([[String.fromCharCode(114,95,50,54,95,109,101,109,98,101,114,115,104,105,112,0),322], [String.fromCharCode(115,97,102,97,114,121,95,54,95,49,48,0),976]]);
    let backwhites = 4.0;
   do {
       let signinupS = new Map([[String.fromCharCode(101,110,99,111,100,101,114,115,95,111,95,52,51,0),false ], [String.fromCharCode(110,117,109,101,114,105,99,97,108,95,107,95,53,0),false ]]);
      do {
         signinupS[`${signinupS.size}`] = signinupS.size * 1;
         if (3851285 == signinupS.size) {
            break;
         }
      } while ((Array.from(signinupS.keys()).includes(`${signinupS.size}`)) && (3851285 == signinupS.size));
         signinupS[`${signinupS.size}`] = signinupS.size & 1;
      do {
          let iconorientationr = String.fromCharCode(104,95,49,50,95,103,97,109,101,115,0);
          let iconsaveimagey = 3;
          let footballtrophyn = String.fromCharCode(111,110,101,115,95,120,95,52,54,0);
         signinupS = new Map([[`${signinupS.size}`, footballtrophyn.length]]);
         iconorientationr += `${iconorientationr.length / 2}`;
         iconsaveimagey &= iconsaveimagey;
         footballtrophyn = "1";
         if (4324533 == signinupS.size) {
            break;
         }
      } while ((2 >= (signinupS.size << (Math.min(Math.abs(4), 3))) || 5 >= (signinupS.size << (Math.min(Math.abs(4), 4)))) && (4324533 == signinupS.size));
      combineV += `${bggradientH >> (Math.min(room6.length, 5))}`;
      if (4190694 == combineV.length) {
         break;
      }
   } while ((combineV.includes(`${loadingq}`)) && (4190694 == combineV.length));
   if ((2 % (Math.max(10, loadingq))) == 5) {
       let configureZ = String.fromCharCode(100,95,55,56,95,108,111,103,109,111,110,111,0);
       let predictionbannera = 3.0;
       let hometeamfieldw = String.fromCharCode(115,111,117,110,100,115,95,49,95,51,54,0);
       let chinar = 5;
       let bannern = 2.0;
      if (4 > chinar) {
         chinar |= chinar + hometeamfieldw.length;
      }
       let teamdetailsbg5 = 1.0;
      for (let s = 0; s < 3; s++) {
         teamdetailsbg5 *= (parseFloat(`${configureZ == String.fromCharCode(56,0) ? parseInt(`${predictionbannera}`) : configureZ.length}`));
      }
       let abidetectq = 4;
       let terms2 = 0;
      do {
         predictionbannera *= (String.fromCharCode(66,0) == hometeamfieldw ? hometeamfieldw.length : chinar);
         if (2138860.0 == predictionbannera) {
            break;
         }
      } while ((2138860.0 == predictionbannera) && (4 <= chinar));
         configureZ = `${parseInt(`${bannern}`) | 1}`;
      for (let t = 0; t < 1; t++) {
         configureZ = `${(configureZ == String.fromCharCode(120,0) ? configureZ.length : abidetectq)}`;
      }
      while (configureZ.endsWith(`${teamdetailsbg5}`)) {
          let nbatrophy6 = 4.0;
          let wifirouterB = String.fromCharCode(116,95,56,55,95,110,101,119,116,101,107,0);
          let placeholderr = String.fromCharCode(97,95,50,54,95,116,106,117,116,105,108,0);
          let renewb = 5.0;
         teamdetailsbg5 -= parseFloat(`${abidetectq}`);
         nbatrophy6 *= placeholderr.length;
         wifirouterB += `${wifirouterB.length}`;
         placeholderr += `${(wifirouterB == String.fromCharCode(115,0) ? wifirouterB.length : placeholderr.length)}`;
         renewb *= 1;
         break;
      }
         teamdetailsbg5 += parseFloat(`${parseInt(`${predictionbannera}`)}`);
      if (1 <= abidetectq) {
         terms2 >>= Math.min(4, Math.abs(3));
      }
      do {
          let headerc = String.fromCharCode(114,95,55,57,95,105,102,111,114,109,97,116,0);
          let whitevideolivej = 3.0;
          let combine0 = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,104,95,52,51,0);
          let statsnomoredatae = 2.0;
         predictionbannera *= 3;
         headerc = `${parseInt(`${statsnomoredatae}`) << (Math.min(combine0.length, 5))}`;
         whitevideolivej *= parseFloat(`${parseInt(`${statsnomoredatae}`)}`);
         combine0 += `${parseInt(`${statsnomoredatae}`)}`;
         if (predictionbannera == 2055930.0) {
            break;
         }
      } while ((predictionbannera <= 3.55) && (predictionbannera == 2055930.0));
      for (let j = 0; j < 3; j++) {
          let temp5 = 0.0;
          let buildp = true;
          let libbufferj = 3.0;
          let qaagI = false;
          let combined_ = 4.0;
         predictionbannera *= parseInt(`${predictionbannera}`);
         temp5 *= (parseFloat(`${(buildp ? 4 : 2) >> (Math.min(Math.abs(parseInt(`${libbufferj}`)), 2))}`));
         buildp = 60.3 == libbufferj;
         qaagI = 60.18 == (temp5 - libbufferj);
         combined_ += 3 & parseInt(`${temp5}`);
      }
       let robotoA = String.fromCharCode(99,95,49,54,95,109,97,100,101,98,121,0);
      do {
         terms2 -= abidetectq;
         if (3182135 == terms2) {
            break;
         }
      } while (((terms2 << (Math.min(Math.abs(3), 5))) == 3) && (3182135 == terms2));
      for (let h = 0; h < 3; h++) {
         hometeamfieldw += `${abidetectq / (Math.max(robotoA.length, 8))}`;
      }
      combineV += `${parseInt(`${predictionbannera}`)}`;
   }

    if (this.opts.title) {

      defaultpredictionprofileG = [bggradientH / (Math.max(defaultpredictionprofileG.length, 2))];
   for (let u = 0; u < 3; u++) {
      loadingq %= Math.max(2, dragQ.length ^ bggradientH);
   }
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
      formI -= parseFloat(`${1 / (Math.max(4, bggradientH))}`);
       let whitetickY = 3.0;
       let libreact0 = 4.0;
       let sentryf = String.fromCharCode(107,95,57,95,112,97,116,104,115,0);
      for (let u = 0; u < 1; u++) {
         sentryf = "3";
      }
         libreact0 /= Math.max(parseFloat(`${1 | parseInt(`${whitetickY}`)}`), 5);
      if (2.1 <= (1.55 - libreact0) && (1.55 - libreact0) <= 4.2) {
         libreact0 -= parseFloat(`${parseInt(`${whitetickY}`) ^ 1}`);
      }
          let signinupn = [515, 327, 106];
          let thailandh = false;
         libreact0 += (parseFloat(`${(thailandh ? 5 : 3) >> (Math.min(Math.abs(parseInt(`${libreact0}`)), 4))}`));
         signinupn = [2 >> (Math.min(1, signinupn.length))];
         thailandh = signinupn.length >= signinupn.length;
          let collectiono = true;
          let windI = String.fromCharCode(103,97,112,115,95,116,95,57,53,0);
         sentryf = `${1 ^ parseInt(`${libreact0}`)}`;
         collectiono = windI.endsWith(`${collectiono}`);
         windI += `${windI.length}`;
      while ((sentryf.length - whitetickY) < 5.61) {
         sentryf = `${1 >> (Math.min(Math.abs(parseInt(`${whitetickY}`)), 1))}`;
         break;
      }
      while ((sentryf.length ^ 2) <= 4) {
         sentryf = `${parseInt(`${whitetickY}`) - parseInt(`${libreact0}`)}`;
         break;
      }
      while (4 == (1 + sentryf.length) || 1 == (sentryf.length - parseInt(`${libreact0}`))) {
          let country5 = [618, 206, 210];
          let fullG = 5;
         sentryf = `${country5.length & fullG}`;
         break;
      }
         libreact0 += (parseFloat(`${String.fromCharCode(66,0) == sentryf ? parseInt(`${libreact0}`) : sentryf.length}`));
      room6 = [parseInt(`${greenarrowup4}`) / 3];

    }

    return null;
   for (let s = 0; s < 2; s++) {
       let popupZ = String.fromCharCode(105,110,116,101,114,102,97,99,101,115,95,56,95,49,56,0);
       let foregroundF = true;
      do {
          let google3 = String.fromCharCode(99,95,50,51,95,120,112,111,114,116,101,100,0);
         foregroundF = popupZ.length > 53;
         google3 = `${google3.length}`;
         if (foregroundF ? !foregroundF : foregroundF) {
            break;
         }
      } while ((foregroundF ? !foregroundF : foregroundF) && (foregroundF));
      for (let n = 0; n < 3; n++) {
         foregroundF = !foregroundF;
      }
         foregroundF = foregroundF && popupZ.length <= 7;
      if (!foregroundF) {
         foregroundF = popupZ.startsWith(`${foregroundF}`);
      }
      if (!foregroundF) {
         foregroundF = !popupZ.startsWith(`${foregroundF}`);
      }
      do {
         popupZ = `${(String.fromCharCode(70,0) == popupZ ? popupZ.length : (foregroundF ? 2 : 1))}`;
         if (4494600 == popupZ.length) {
            break;
         }
      } while ((4494600 == popupZ.length) && (!popupZ.endsWith(`${foregroundF}`)));
      room6 = [((countryF ? 3 : 2) + room6.length)];
   }
       let liblogger5 = true;
         liblogger5 = (!liblogger5 ? liblogger5 : liblogger5);
         liblogger5 = liblogger5 || !liblogger5;
      for (let v = 0; v < 3; v++) {
         liblogger5 = (liblogger5 ? liblogger5 : liblogger5);
      }
      defaultpredictionprofileG = [1 >> (Math.min(Math.abs(parseInt(`${formI}`)), 1))];

  }

   
  renderTimer() {
       let emojihearty = new Map([[String.fromCharCode(98,108,111,99,107,115,99,97,110,95,57,95,52,0),false ], [String.fromCharCode(105,95,52,54,95,114,102,116,102,115,117,98,0),true ]]);
    let catalog_ = [814, 260, 193];
    let textinputW = [String.fromCharCode(121,95,52,51,95,114,101,97,108,108,111,99,0), String.fromCharCode(122,95,54,54,95,114,117,110,108,111,111,112,0)];
    let blackh = new Map([[String.fromCharCode(102,105,108,116,101,114,105,110,103,95,117,95,57,50,0),992], [String.fromCharCode(100,95,53,56,95,118,101,114,116,105,99,97,108,108,121,0),90], [String.fromCharCode(102,116,115,116,111,107,95,97,95,57,50,0),731]]);
    let redirectp = String.fromCharCode(105,95,56,54,95,97,114,101,97,115,0);
    let matchactivej = String.fromCharCode(104,95,55,49,95,100,99,97,109,97,116,104,0);
    let modelS = 5.0;
    let themeR = String.fromCharCode(117,95,57,55,95,112,105,99,107,105,110,116,101,114,0);
    let searchZ = [531, 270];
    let homeloadingF = 3.0;
    let executorF = new Map([[String.fromCharCode(99,95,56,51,95,116,114,105,97,108,0),863], [String.fromCharCode(111,95,49,56,95,105,97,116,0),809], [String.fromCharCode(111,95,57,56,95,112,105,112,101,108,105,110,101,115,0),842]]);
    let basketballplayerplaceholderb = 3.0;
    let gradlewX = 2;
    let hometeamfieldh = String.fromCharCode(115,95,52,57,95,105,110,116,101,114,97,116,105,111,110,0);
   do {
       let moreC = 0.0;
         moreC *= parseInt(`${moreC}`);
         moreC *= 2 | parseInt(`${moreC}`);
          let anythinku = String.fromCharCode(102,117,122,122,101,114,95,48,95,55,51,0);
          let alertD = new Map([[String.fromCharCode(115,116,97,110,100,97,114,100,115,95,99,95,56,56,0),true ], [String.fromCharCode(116,104,114,101,97,100,103,114,111,117,112,95,110,95,54,0),false ], [String.fromCharCode(113,95,55,56,95,116,114,97,110,115,109,105,115,115,105,111,110,0),false ]]);
          let playr = String.fromCharCode(118,95,54,55,95,116,105,103,103,108,101,0);
         moreC *= playr.length / (Math.max(8, alertD.size));
         anythinku += `${2 - anythinku.length}`;
         alertD[anythinku] = 3;
      emojihearty[`${catalog_.length}`] = textinputW.length * 1;
      if (emojihearty.size == 65051) {
         break;
      }
   } while ((2 < (searchZ.length - 3)) && (emojihearty.size == 65051));
   do {
       let eventu = true;
       let mimop = String.fromCharCode(101,95,56,57,95,97,100,97,112,116,115,0);
      while (5 > mimop.length && eventu) {
         mimop = `${(mimop == String.fromCharCode(85,0) ? (eventu ? 5 : 2) : mimop.length)}`;
         break;
      }
          let reactnativejsB = 5;
          let subs5 = 5.0;
          let giflivestreaming9 = 0.0;
         eventu = (reactnativejsB / (Math.max(giflivestreaming9, 6))) < 66;
         reactnativejsB %= Math.max(3, parseInt(`${subs5}`));
         eventu = !eventu;
         eventu = !eventu;
      if (eventu) {
         mimop = `${mimop.length}`;
      }
         eventu = (19 < ((!eventu ? 19 : mimop.length) + mimop.length));
      searchZ.push((String.fromCharCode(54,0) == themeR ? parseInt(`${modelS}`) : themeR.length));
      if (searchZ.length == 563331) {
         break;
      }
   } while ((searchZ.includes(homeloadingF)) && (searchZ.length == 563331));
       let list0 = new Map([[String.fromCharCode(105,115,115,117,105,110,103,95,106,95,52,52,0),946], [String.fromCharCode(118,95,57,49,95,112,97,114,97,115,101,116,0),850], [String.fromCharCode(110,111,116,105,99,101,115,95,98,95,51,48,0),121]]);
      while (4 <= list0.size) {
          let streamingv = [String.fromCharCode(116,95,55,55,95,97,116,116,114,97,99,116,105,110,103,0), String.fromCharCode(117,110,112,97,100,100,101,100,95,119,95,49,51,0)];
          let fileda = 0.0;
         list0[`${streamingv.length}`] = streamingv.length;
         fileda *= parseFloat(`${parseInt(`${fileda}`) - 2}`);
         break;
      }
      while (5 == (4 + list0.size) && (list0.size + list0.size) == 4) {
          let static_bM = 3.0;
          let redcirclebgA = 4.0;
          let pingV = [341, 684, 373];
          let championJ = String.fromCharCode(103,95,54,54,95,101,110,99,111,100,97,98,108,101,0);
          let hejiQ = 4;
         list0[`${static_bM}`] = pingV.length + 2;
         static_bM *= 2;
         redcirclebgA -= parseFloat(`${championJ.length}`);
         pingV.push(championJ.length ^ 2);
         hejiQ *= (String.fromCharCode(113,0) == championJ ? championJ.length : hejiQ);
         break;
      }
         list0 = new Map([[`${list0.size}`, 3 - list0.size]]);
      redirectp = "3";
      catalog_.push(textinputW.length);
      modelS -= parseFloat(`${executorF.size - 2}`);
      modelS -= (parseFloat(`${matchactivej == String.fromCharCode(53,0) ? parseInt(`${modelS}`) : matchactivej.length}`));

    return this.renderControl(
      <Text style={VideoPlayerstyles.controls.timerText}>
        {this.calculateTime()}
      </Text>,
      this.methods.toggleTimer,
      VideoPlayerstyles.controls.timer,
    );
   for (let d = 0; d < 3; d++) {
      textinputW.push(blackh.size);
   }
      textinputW = [executorF.size];
      themeR += `${catalog_.length - themeR.length}`;
   if ((emojihearty.size << (Math.min(1, Math.abs(executorF.size)))) >= 4) {
      emojihearty[`${modelS}`] = 1;
   }
   for (let e = 0; e < 2; e++) {
      matchactivej += `${1 * matchactivej.length}`;
   }
   if (1 <= (themeR.length << (Math.min(Math.abs(1), 5))) && 1 <= (themeR.length - parseInt(`${homeloadingF}`))) {
      themeR += `${searchZ.length}`;
   }

  }

   
  renderLoader() {
       let moviesL = 0;
    let membershipr = 0.0;
    let langW = String.fromCharCode(105,95,50,95,99,111,110,102,105,103,117,114,97,98,108,101,0);
    let iconwatchnow2 = 2.0;
    let libreanimated0 = 5.0;
    let smallorangemant = String.fromCharCode(111,95,49,50,95,109,111,100,101,108,115,0);
    let penaltyshootf = new Map([[String.fromCharCode(111,114,116,104,111,103,111,110,97,108,105,122,101,95,114,95,53,50,0),857], [String.fromCharCode(109,105,110,116,95,52,95,57,52,0),704], [String.fromCharCode(106,114,110,108,95,51,95,52,0),713]]);
    let executorE = 3.0;
    let bgvipxvodm = String.fromCharCode(103,95,49,51,95,117,112,115,97,109,112,108,101,0);
    let iconrightorangec = String.fromCharCode(111,95,52,55,95,104,100,99,100,0);
    let defaultprofilepicZ = String.fromCharCode(108,95,56,48,95,107,102,114,109,0);
    let largebrightnessV = new Map([[String.fromCharCode(99,95,56,57,95,105,101,110,116,114,121,0),586], [String.fromCharCode(97,95,56,48,95,118,111,114,100,105,112,108,111,109,0),557]]);
       let watchE = String.fromCharCode(104,115,99,97,108,101,95,102,95,51,55,0);
       let modeN = 4.0;
       let penaltymatchicon6 = [201, 965];
         watchE += `${watchE.length}`;
       let plashw = new Map([[String.fromCharCode(108,97,116,101,115,116,95,120,95,52,52,0),769], [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,95,121,95,51,48,0),444]]);
         modeN /= Math.max(3, watchE.length);
      while ((plashw.size >> (Math.min(Math.abs(4), 3))) < 5 || (plashw.size << (Math.min(Math.abs(4), 2))) < 4) {
          let team_ = String.fromCharCode(109,111,100,105,102,121,95,106,95,49,53,0);
          let selectedI = [188, 543, 453];
          let leaguedetailsbgE = [String.fromCharCode(118,95,55,95,118,99,114,101,97,116,101,0), String.fromCharCode(103,95,55,48,95,115,97,109,112,108,101,99,112,121,0)];
          let bellL = 2.0;
          let downloadingZ = 5.0;
         plashw = new Map([[`${leaguedetailsbgE.length}`, 3]]);
         team_ = `${selectedI.length | 3}`;
         selectedI.push(parseInt(`${downloadingZ}`) - 3);
         leaguedetailsbgE = [(team_ == String.fromCharCode(107,0) ? parseInt(`${downloadingZ}`) : team_.length)];
         bellL += 1 << (Math.min(2, selectedI.length));
         break;
      }
       let mbbidv = String.fromCharCode(115,95,57,51,95,109,117,108,116,0);
       let libfollyY = String.fromCharCode(114,97,119,100,101,99,95,56,95,53,52,0);
      do {
          let manifestI = [String.fromCharCode(116,95,51,50,95,101,110,99,111,100,105,110,103,115,0), String.fromCharCode(104,119,99,111,110,102,105,103,95,52,95,55,48,0), String.fromCharCode(103,95,49,56,95,115,116,97,116,105,115,116,105,99,0)];
          let zhengpianD = String.fromCharCode(119,95,54,52,95,99,111,100,101,115,0);
          let n_positionR = String.fromCharCode(101,110,113,117,101,117,101,100,95,57,95,52,49,0);
          let basketballl = String.fromCharCode(109,112,111,115,95,102,95,49,50,0);
          let cancelQ = String.fromCharCode(105,95,52,57,95,105,110,100,97,116,97,0);
         penaltymatchicon6.push(1 | basketballl.length);
         manifestI.push(2 << (Math.min(5, zhengpianD.length)));
         zhengpianD += `${cancelQ.length | 2}`;
         n_positionR += `${cancelQ.length}`;
         basketballl = `${2 + n_positionR.length}`;
         if (penaltymatchicon6.length == 3330625) {
            break;
         }
      } while ((parseInt(`${modeN}`) < penaltymatchicon6.length) && (penaltymatchicon6.length == 3330625));
         modeN += penaltymatchicon6.length << (Math.min(4, Math.abs(parseInt(`${modeN}`))));
       let unreadv = String.fromCharCode(111,95,52,57,95,97,115,115,101,109,98,108,101,0);
       let iconeditm = String.fromCharCode(102,108,105,112,95,119,95,55,55,0);
      for (let c = 0; c < 2; c++) {
         watchE += `${libfollyY.length}`;
      }
      moviesL <<= Math.min(1, Math.abs(parseInt(`${executorE}`) | parseInt(`${iconwatchnow2}`)));
      executorE /= Math.max(3, 4);

    if (this.state.loading) {

   do {
       let favoritez = new Map([[String.fromCharCode(115,116,114,111,107,101,114,95,56,95,54,49,0),866], [String.fromCharCode(111,95,54,56,95,103,97,116,101,100,0),795]]);
       let nativeex2 = [611, 232];
          let ruleso = String.fromCharCode(98,95,54,56,95,115,101,112,105,97,0);
         favoritez[`${nativeex2.length}`] = nativeex2.length;
         ruleso += `${ruleso.length}`;
      do {
         favoritez = new Map([[`${favoritez.size}`, favoritez.size ^ 2]]);
         if (1352597 == favoritez.size) {
            break;
         }
      } while ((5 == (nativeex2.length * 4) && 1 == (favoritez.size * 4)) && (1352597 == favoritez.size));
      langW += `${favoritez.size >> (Math.min(Math.abs(1), 2))}`;
      if (1392800 == langW.length) {
         break;
      }
   } while ((1392800 == langW.length) && (5 >= langW.length));
   do {
      bgvipxvodm += `${parseInt(`${executorE}`)}`;
      if (String.fromCharCode(116,110,49,57,122,111,108,114,107,121,0) == bgvipxvodm) {
         break;
      }
   } while ((String.fromCharCode(116,110,49,57,122,111,108,114,107,121,0) == bgvipxvodm) && (2.7 <= iconwatchnow2));
      return (
        <View style={VideoPlayerstyles.loader.container}>
          <Animated.Image
            source={require('./images/icons/bggradientVideojs.png')}
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
   do {
       let scorepopsoundl = String.fromCharCode(112,114,101,115,117,109,101,95,109,95,49,51,0);
       let launchO = 4.0;
       let imagenomoredataH = 5;
       let defaultplayerimgo = 0.0;
       let regengC = new Map([[String.fromCharCode(109,95,57,57,95,115,101,116,98,105,116,115,0),651], [String.fromCharCode(110,95,56,49,95,97,115,99,98,110,0),912], [String.fromCharCode(101,120,112,111,115,117,114,101,95,56,95,55,55,0),235]]);
      if (Array.from(regengC.values()).includes(imagenomoredataH)) {
          let shielddoneS = 0.0;
          let about0 = String.fromCharCode(112,95,52,57,95,110,101,119,115,0);
          let predictionbuttonJ = String.fromCharCode(105,116,115,101,108,102,95,52,95,52,57,0);
          let detailW = String.fromCharCode(102,117,110,99,95,122,95,55,52,0);
          let reactnavigationA = [String.fromCharCode(118,109,115,108,95,114,95,57,0), String.fromCharCode(105,95,57,95,105,110,105,116,105,97,108,108,121,0), String.fromCharCode(109,95,57,52,95,109,97,116,114,105,99,101,115,0)];
         regengC = new Map([[`${shielddoneS}`, imagenomoredataH * parseInt(`${shielddoneS}`)]]);
         about0 += `${reactnavigationA.length * 2}`;
         predictionbuttonJ += `${about0.length >> (Math.min(Math.abs(2), 4))}`;
         detailW = `${detailW.length * predictionbuttonJ.length}`;
         reactnavigationA.push(reactnavigationA.length);
      }
          let policys = 1;
          let icon5 = 5;
         defaultplayerimgo *= parseFloat(`${1 >> (Math.min(2, Math.abs(imagenomoredataH)))}`);
         policys ^= 3 - icon5;
         icon5 ^= icon5 + 2;
       let whitesmalltickU = new Map([[String.fromCharCode(102,95,52,48,95,109,97,105,110,102,117,110,99,0),String.fromCharCode(100,105,115,109,105,115,115,97,108,95,118,95,49,54,0)], [String.fromCharCode(108,95,52,55,95,119,101,98,112,97,103,101,115,0),String.fromCharCode(122,95,50,56,95,111,112,117,115,116,97,98,0)], [String.fromCharCode(102,111,117,114,99,99,95,104,95,55,48,0),String.fromCharCode(119,95,52,48,95,112,117,98,108,105,115,104,101,114,115,0)]]);
      do {
         imagenomoredataH |= (String.fromCharCode(111,0) == scorepopsoundl ? regengC.size : scorepopsoundl.length);
         if (imagenomoredataH == 3596737) {
            break;
         }
      } while ((imagenomoredataH == 3596737) && (imagenomoredataH < defaultplayerimgo));
      do {
         imagenomoredataH ^= whitesmalltickU.size % (Math.max(6, imagenomoredataH));
         if (imagenomoredataH == 1630416) {
            break;
         }
      } while ((imagenomoredataH == 1630416) && ((scorepopsoundl.length / (Math.max(2, imagenomoredataH))) >= 5));
      while ((launchO + 5.44) == 4.7 && 2.96 == (defaultplayerimgo + 5.44)) {
          let macaus = 0.0;
         launchO *= 2;
         macaus -= parseFloat(`${3 ^ parseInt(`${macaus}`)}`);
         break;
      }
         defaultplayerimgo += parseFloat(`${imagenomoredataH}`);
          let renderB = new Map([[String.fromCharCode(100,101,99,108,105,110,101,95,106,95,53,51,0),48], [String.fromCharCode(114,95,49,54,95,105,100,108,105,115,116,0),392], [String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,95,52,95,49,57,0),814]]);
         defaultplayerimgo += parseFloat(`${scorepopsoundl.length}`);
         renderB = new Map([[`${renderB.size}`, renderB.size & 3]]);
         defaultplayerimgo /= Math.max(parseFloat(`${3 % (Math.max(10, parseInt(`${launchO}`)))}`), 1);
         regengC[`${launchO}`] = whitesmalltickU.size;
      do {
          let typesN = false;
         launchO -= 3;
         typesN = !typesN;
         if (2161688.0 == launchO) {
            break;
         }
      } while ((2161688.0 == launchO) && (launchO < 3.94));
         whitesmalltickU[`${launchO}`] = whitesmalltickU.size;
      for (let m = 0; m < 2; m++) {
         regengC[`${launchO}`] = scorepopsoundl.length >> (Math.min(5, Math.abs(parseInt(`${launchO}`))));
      }
      do {
          let redgoalA = 3.0;
         imagenomoredataH <<= Math.min(Math.abs(regengC.size << (Math.min(Math.abs(3), 2))), 4);
         redgoalA /= Math.max(parseFloat(`${2}`), 4);
         if (819478 == imagenomoredataH) {
            break;
         }
      } while ((819478 == imagenomoredataH) && (3 < imagenomoredataH));
         whitesmalltickU = new Map([[`${regengC.size}`, whitesmalltickU.size << (Math.min(Math.abs(2), 2))]]);
      smallorangemant += `${bgvipxvodm.length}`;
      if (4844093 == smallorangemant.length) {
         break;
      }
   } while ((smallorangemant.endsWith(`${libreanimated0}`)) && (4844093 == smallorangemant.length));
   while (3 <= smallorangemant.length || langW != String.fromCharCode(73,0)) {
       let photoM = String.fromCharCode(103,95,49,54,95,114,101,116,114,121,97,98,108,101,0);
       let iconadslinkG = 1.0;
       let handler6 = 4.0;
       let tumbnailT = 1.0;
          let loadingY = 2.0;
         iconadslinkG += parseFloat(`${parseInt(`${handler6}`)}`);
         loadingY /= Math.max(parseFloat(`${parseInt(`${loadingY}`)}`), 3);
       let yellowscoreballJ = 5.0;
       let hooksy = 4.0;
       let assets7 = [587, 238, 628];
      if ((iconadslinkG - yellowscoreballJ) > 1.74) {
         yellowscoreballJ -= assets7.length;
      }
         hooksy -= 2;
         tumbnailT *= parseFloat(`${1}`);
      for (let i = 0; i < 1; i++) {
         hooksy += 1 & assets7.length;
      }
         photoM += `${parseInt(`${hooksy}`) - parseInt(`${handler6}`)}`;
      for (let o = 0; o < 3; o++) {
          let gemfile3 = String.fromCharCode(111,95,55,56,95,115,117,112,112,114,101,115,115,111,114,0);
          let libsentryT = 0.0;
          let sharedG = String.fromCharCode(110,117,109,101,114,97,108,95,98,95,55,55,0);
         iconadslinkG /= Math.max(3, parseFloat(`${gemfile3.length & 1}`));
         gemfile3 += `${sharedG.length ^ 1}`;
         libsentryT *= (parseFloat(`${String.fromCharCode(74,0) == sharedG ? parseInt(`${libsentryT}`) : sharedG.length}`));
      }
          let nalyticst = String.fromCharCode(104,95,54,54,95,115,97,118,101,115,116,97,116,101,0);
         yellowscoreballJ *= parseInt(`${tumbnailT}`) ^ 3;
         nalyticst = "3";
      if (3.46 > (2.95 + yellowscoreballJ)) {
         yellowscoreballJ *= parseInt(`${handler6}`);
      }
      do {
         hooksy -= parseInt(`${tumbnailT}`);
         if (2945842.0 == hooksy) {
            break;
         }
      } while ((2 <= assets7.length) && (2945842.0 == hooksy));
      langW = "2";
      break;
   }

    }
    return null;
   for (let c = 0; c < 1; c++) {
      membershipr += parseFloat(`${smallorangemant.length - langW.length}`);
   }
   if (parseFloat(`${smallorangemant.length}`) >= membershipr) {
      smallorangemant += `${parseInt(`${libreanimated0}`) >> (Math.min(Math.abs(1), 2))}`;
   }

  }

  renderError() {
       let vipsportS = 1.0;
    let runtimeschedulerE = true;
    let heartC = true;
    let libjsinspectorw = true;
    let bottom5 = String.fromCharCode(118,95,55,53,95,112,97,114,97,115,101,116,0);
    let user4 = new Map([[String.fromCharCode(98,95,51,56,95,99,100,102,116,0),248], [String.fromCharCode(116,97,112,112,105,110,103,95,103,95,57,48,0),543], [String.fromCharCode(97,100,116,115,95,53,95,51,54,0),791]]);
    let sideJ = String.fromCharCode(115,101,99,116,111,114,95,115,95,57,56,0);
    let latnd = false;
    let prediction7 = 3.0;
   while (sideJ.endsWith(`${libjsinspectorw}`)) {
      sideJ += `${((runtimeschedulerE ? 1 : 1))}`;
      break;
   }
      bottom5 += "1";

    if (this.state.error) {

   do {
      user4 = new Map([[`${libjsinspectorw}`, ((heartC ? 2 : 1) << (Math.min(3, Math.abs((libjsinspectorw ? 4 : 3)))))]]);
      if (4892042 == user4.size) {
         break;
      }
   } while ((vipsportS <= parseFloat(`${user4.size}`)) && (4892042 == user4.size));
   do {
      user4 = new Map([[`${heartC}`, ((heartC ? 2 : 1) + parseInt(`${vipsportS}`))]]);
      if (1207609 == user4.size) {
         break;
      }
   } while ((Array.from(user4.keys()).includes(`${vipsportS}`)) && (1207609 == user4.size));
      return (
        <SafeAreaView style={VideoPlayerstyles.error.container}>
          <TouchableOpacity onPress={() => this.reloadPlayer()}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('./images/icons/leaguedetailsbgGraphics.png')}
                style={VideoPlayerstyles.error.icon}
              />
              <Text style={VideoPlayerstyles.error.text}>影片加载失败</Text>
              <Text style={VideoPlayerstyles.error.text}>再次点击重新加载</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      );
   while (user4.size <= parseInt(`${vipsportS}`)) {
      user4 = new Map([[`${user4.size}`, user4.size & 2]]);
      break;
   }
      vipsportS *= parseFloat(`${parseInt(`${vipsportS}`) / 2}`);

    }
    return null;
      sideJ = `${user4.size}`;
   do {
       let greyarrowupv = [String.fromCharCode(97,117,100,105,101,110,99,101,95,97,95,57,55,0), String.fromCharCode(101,120,105,115,116,115,95,55,95,52,49,0)];
       let confirmation3 = false;
       let debugs = [558, 341, 878];
       let profileframeo = 1;
       let shootL = 3;
      while (5 > (1 | debugs.length) || (profileframeo | debugs.length) > 1) {
         profileframeo -= ((confirmation3 ? 2 : 5) >> (Math.min(Math.abs(1), 4)));
         break;
      }
       let lnewsshareB = String.fromCharCode(116,114,101,120,95,119,95,51,54,0);
          let mimeQ = 1;
         confirmation3 = !confirmation3;
         mimeQ %= Math.max(mimeQ, 1);
         debugs = [debugs.length];
      if (shootL >= debugs.length) {
         debugs = [2];
      }
      for (let g = 0; g < 3; g++) {
         greyarrowupv.push(2 / (Math.max(shootL, 2)));
      }
          let jnewsshareb = String.fromCharCode(97,109,114,119,98,100,97,116,97,95,98,95,53,51,0);
          let disconnectedb = [659, 325, 348];
         lnewsshareB = `${profileframeo}`;
         jnewsshareb = `${disconnectedb.length | jnewsshareb.length}`;
         disconnectedb = [jnewsshareb.length << (Math.min(Math.abs(3), 3))];
      do {
         shootL <<= Math.min(Math.abs(1), 4);
         if (718167 == shootL) {
            break;
         }
      } while ((2 <= (shootL % 5) && 5 <= (shootL % 5)) && (718167 == shootL));
      for (let v = 0; v < 1; v++) {
         debugs.push((2 ^ (confirmation3 ? 2 : 5)));
      }
      for (let n = 0; n < 2; n++) {
          let specQ = [725, 54, 670];
         confirmation3 = String.fromCharCode(70,0) == lnewsshareB;
         specQ = [3];
      }
         greyarrowupv = [3 - shootL];
      sideJ = "3";
      if (sideJ == String.fromCharCode(51,111,102,105,106,109,0)) {
         break;
      }
   } while ((libjsinspectorw) && (sideJ == String.fromCharCode(51,111,102,105,106,109,0)));

  }

  async reloadPlayer() {
       let eyecloseG = String.fromCharCode(98,95,51,57,95,115,101,103,109,101,110,116,97,116,105,111,110,0);
    let gemfileX = [String.fromCharCode(103,95,56,55,95,105,109,109,117,116,97,98,108,101,0), String.fromCharCode(109,117,108,114,101,115,95,53,95,55,0)];
    let largesoundf = 3;
    let servicey = String.fromCharCode(99,111,108,111,99,97,116,101,100,95,56,95,51,50,0);
    let basketballtrophys = 2;
    let sans_ = true;
    let modules4 = String.fromCharCode(116,114,97,110,115,108,97,116,111,110,95,51,95,53,56,0);
    let bannerc = [String.fromCharCode(111,98,115,101,114,118,101,114,115,95,111,95,53,51,0), String.fromCharCode(117,95,49,56,95,102,105,116,122,0)];
    let libreactnativeblob1 = [String.fromCharCode(112,95,53,50,95,105,110,116,101,110,116,115,0), String.fromCharCode(99,95,56,95,112,114,117,110,101,0), String.fromCharCode(116,95,52,52,95,109,105,115,115,0)];
    let catalog5 = new Map([[String.fromCharCode(105,95,48,95,118,115,110,112,114,105,110,116,102,0),true ], [String.fromCharCode(109,105,110,105,109,117,109,95,50,95,51,54,0),true ]]);
    let gemfilek = new Map([[String.fromCharCode(110,95,49,54,95,99,108,105,112,112,101,100,0),381], [String.fromCharCode(109,97,107,101,116,97,114,98,97,108,108,95,108,95,55,53,0),203], [String.fromCharCode(99,95,55,48,95,118,97,114,105,97,110,116,115,0),372]]);
   for (let i = 0; i < 3; i++) {
      eyecloseG += `${basketballtrophys}`;
   }
   for (let m = 0; m < 1; m++) {
       let point4 = 4;
       let animationsK = 3.0;
       let iconnewchatA = String.fromCharCode(97,97,99,101,110,99,100,115,112,95,97,95,50,57,0);
       let langkeyH = String.fromCharCode(105,110,100,105,99,97,116,111,114,95,112,95,50,50,0);
       let gradlewX = false;
         gradlewX = point4 <= langkeyH.length;
         point4 >>= Math.min(Math.abs(3 | parseInt(`${animationsK}`)), 2);
      if (3.63 <= (point4 - animationsK)) {
         point4 /= Math.max(4, parseInt(`${animationsK}`));
      }
         iconnewchatA = `${langkeyH.length | point4}`;
      for (let m = 0; m < 3; m++) {
          let whitevideoliveA = String.fromCharCode(121,95,56,51,95,116,97,98,108,101,0);
          let relatedQ = String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,95,98,95,49,56,0);
          let xnewsT = [922, 853, 427];
          let neonx = String.fromCharCode(104,105,101,114,95,102,95,52,55,0);
          let iconeyeI = [408, 18, 515];
         point4 /= Math.max(iconeyeI.length >> (Math.min(2, Math.abs(parseInt(`${animationsK}`)))), 5);
         whitevideoliveA += `${whitevideoliveA.length}`;
         relatedQ = `${relatedQ.length + 1}`;
         xnewsT = [whitevideoliveA.length];
         neonx = `${(relatedQ == String.fromCharCode(69,0) ? relatedQ.length : xnewsT.length)}`;
         iconeyeI = [neonx.length << (Math.min(4, relatedQ.length))];
      }
         langkeyH = `${(String.fromCharCode(122,0) == langkeyH ? point4 : langkeyH.length)}`;
         langkeyH = `${(point4 + (gradlewX ? 3 : 3))}`;
         animationsK += 3;
         iconnewchatA += `${parseInt(`${animationsK}`) << (Math.min(2, Math.abs(3)))}`;
         animationsK -= ((gradlewX ? 5 : 5) ^ point4);
      do {
         animationsK += point4;
         if (663171.0 == animationsK) {
            break;
         }
      } while ((663171.0 == animationsK) && (4.41 < animationsK));
          let combined5 = true;
          let anythinkd = String.fromCharCode(106,95,56,50,95,109,97,114,107,115,0);
         point4 &= iconnewchatA.length;
         combined5 = anythinkd.includes(`${combined5}`);
         anythinkd += `${anythinkd.length}`;
      for (let c = 0; c < 1; c++) {
         point4 &= 2;
      }
      while (iconnewchatA.length < 2) {
         iconnewchatA = `${point4 * iconnewchatA.length}`;
         break;
      }
          let storeU = 3.0;
         point4 |= iconnewchatA.length;
         storeU += parseFloat(`${3}`);
      gemfileX = [2 * bannerc.length];
   }
       let template_utR = String.fromCharCode(122,95,52,49,95,99,97,110,99,101,108,108,101,114,0);
       let hookC = String.fromCharCode(98,115,111,108,117,116,101,95,112,95,49,56,0);
       let successD = new Map([[String.fromCharCode(116,101,120,105,100,101,112,95,51,95,52,50,0),101], [String.fromCharCode(117,95,53,56,95,110,111,114,109,97,108,105,122,101,114,0),206], [String.fromCharCode(114,101,102,105,110,101,114,95,120,95,53,50,0),983]]);
      while (template_utR != String.fromCharCode(67,0)) {
         hookC += `${(hookC == String.fromCharCode(117,0) ? successD.size : hookC.length)}`;
         break;
      }
      if (!hookC.endsWith(`${successD.size}`)) {
         successD[`${template_utR}`] = successD.size;
      }
         successD = new Map([[`${successD.size}`, 2 + successD.size]]);
      while ((successD.size & 4) == 5 && 4 == (template_utR.length & successD.size)) {
         successD = new Map([[template_utR, 3 + template_utR.length]]);
         break;
      }
      if (4 < (successD.size + 2) && 5 < (hookC.length + 2)) {
          let x_lockT = true;
         hookC += `${(hookC == String.fromCharCode(78,0) ? hookC.length : successD.size)}`;
         x_lockT = !x_lockT || x_lockT;
      }
          let stations6 = 3.0;
         hookC += `${parseInt(`${stations6}`) ^ successD.size}`;
         successD[`${hookC}`] = successD.size;
      do {
         successD[template_utR] = 3;
         if (1257783 == successD.size) {
            break;
         }
      } while ((template_utR.startsWith(`${successD.size}`)) && (1257783 == successD.size));
         hookC += "1";
      modules4 = `${1 >> (Math.min(5, gemfileX.length))}`;
   do {
      largesoundf *= 2;
      if (largesoundf == 2752388) {
         break;
      }
   } while ((2 == largesoundf) && (largesoundf == 2752388));
      basketballtrophys -= (String.fromCharCode(66,0) == eyecloseG ? bannerc.length : eyecloseG.length);
       let homeinactiveW = String.fromCharCode(115,104,111,114,116,115,95,119,95,54,54,0);
       let umengM = 5;
       let modal9 = 0;
      for (let o = 0; o < 1; o++) {
          let profileinactiveQ = [654, 368, 649];
          let loginc = [String.fromCharCode(99,97,108,108,105,115,116,111,95,122,95,57,55,0), String.fromCharCode(98,105,108,105,110,95,114,95,56,51,0)];
          let unreadE = 3.0;
         umengM |= homeinactiveW.length | 3;
         profileinactiveQ.push(parseInt(`${unreadE}`) / (Math.max(1, profileinactiveQ.length)));
         loginc = [1];
         unreadE /= Math.max(parseInt(`${unreadE}`) % (Math.max(2, loginc.length)), 5);
      }
      if (3 == (2 & modal9) && (homeinactiveW.length & modal9) == 2) {
          let stationY = 0.0;
          let sheetp = new Map([[String.fromCharCode(104,95,51,49,95,99,111,108,108,97,112,115,105,110,103,0),String.fromCharCode(109,117,108,97,100,100,95,121,95,52,54,0)], [String.fromCharCode(116,116,97,103,95,101,95,53,57,0),String.fromCharCode(103,95,57,49,95,115,99,114,101,101,110,115,104,111,116,0)]]);
          let promotionZ = String.fromCharCode(105,100,101,110,116,105,116,121,95,56,95,50,0);
          let tooltipsG = 2;
          let mbbidH = String.fromCharCode(109,95,49,49,95,114,97,100,105,120,0);
         homeinactiveW += "2";
         stationY /= Math.max(parseFloat(`${2}`), 3);
         sheetp = new Map([[`${stationY}`, 2]]);
         promotionZ += "3";
         tooltipsG *= promotionZ.length;
         mbbidH = `${mbbidH.length}`;
      }
      do {
         umengM ^= homeinactiveW.length;
         if (umengM == 237974) {
            break;
         }
      } while ((umengM == 237974) && (!homeinactiveW.startsWith(`${umengM}`)));
          let styleC = 0.0;
          let yellowscoreballC = [308, 105];
         umengM %= Math.max(homeinactiveW.length, 1);
         styleC *= parseFloat(`${parseInt(`${styleC}`) - 1}`);
         yellowscoreballC = [yellowscoreballC.length / 3];
      for (let p = 0; p < 2; p++) {
         umengM += 2;
      }
         homeinactiveW += `${modal9}`;
         umengM >>= Math.min(Math.abs(modal9), 5);
         homeinactiveW = "2";
      if ((umengM << (Math.min(Math.abs(4), 2))) <= 5 || (umengM << (Math.min(Math.abs(4), 4))) <= 1) {
          let orangeclocko = String.fromCharCode(115,113,117,97,114,101,100,95,107,95,49,55,0);
         umengM /= Math.max(2, orangeclocko.length);
      }
      eyecloseG = `${umengM}`;
   do {
      eyecloseG = "3";
      if (70345 == eyecloseG.length) {
         break;
      }
   } while ((70345 == eyecloseG.length) && (4 > eyecloseG.length));
   do {
       let backgroundD = String.fromCharCode(104,95,55,50,95,102,114,97,103,109,101,110,116,115,0);
       let lineo = 1;
       let membershipJ = String.fromCharCode(99,95,52,95,119,105,100,116,104,115,0);
       let linkj = String.fromCharCode(99,111,110,100,105,116,105,111,110,97,108,95,99,95,50,56,0);
       let membership7 = false;
      if (backgroundD.endsWith(`${linkj.length}`)) {
          let kickz = [String.fromCharCode(106,95,53,48,95,115,101,114,105,97,108,105,122,101,0), String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,95,55,95,52,49,0), String.fromCharCode(102,108,97,103,115,95,102,95,52,52,0)];
          let largebrightnessX = [13, 226];
          let predictionlossg = [223, 648];
          let circlek = true;
          let imagewatchliveY = true;
         backgroundD += "3";
         kickz = [((imagewatchliveY ? 2 : 1) / 1)];
         largebrightnessX = [(largebrightnessX.length ^ (imagewatchliveY ? 1 : 1))];
         predictionlossg = [predictionlossg.length];
         circlek = largebrightnessX.length > 33;
      }
          let playF = 4.0;
          let blackN = new Map([[String.fromCharCode(116,104,114,101,115,104,111,108,100,115,95,121,95,51,51,0),false ], [String.fromCharCode(118,97,114,105,97,98,108,101,115,95,106,95,51,55,0),true ]]);
         linkj += "3";
         playF /= Math.max(2 >> (Math.min(1, Math.abs(parseInt(`${playF}`)))), 1);
         blackN[`${playF}`] = parseInt(`${playF}`);
          let loadingu = String.fromCharCode(116,101,120,105,100,101,112,95,108,95,55,55,0);
          let statisticsl = 1;
          let stationsD = false;
         membershipJ = `${loadingu.length ^ 2}`;
         loadingu = `${2 + statisticsl}`;
         statisticsl += 1;
      while (!membership7 || 1 == linkj.length) {
          let mintegralK = [460, 934, 697];
          let currentM = new Map([[String.fromCharCode(119,95,55,51,95,118,105,101,119,115,0),116], [String.fromCharCode(119,95,53,52,95,99,111,110,99,97,116,100,101,99,0),804]]);
         linkj += "2";
         mintegralK = [currentM.size - mintegralK.length];
         currentM[`${mintegralK.length}`] = currentM.size & mintegralK.length;
         break;
      }
      do {
         membershipJ += `${lineo / (Math.max(1, 6))}`;
         if (4653858 == membershipJ.length) {
            break;
         }
      } while ((4653858 == membershipJ.length) && (backgroundD == String.fromCharCode(101,0)));
         membershipJ += `${2 + linkj.length}`;
         backgroundD += `${3 << (Math.min(2, membershipJ.length))}`;
         membershipJ = `${backgroundD.length}`;
         lineo /= Math.max(4, (linkj == String.fromCharCode(88,0) ? linkj.length : (membership7 ? 5 : 2)));
      for (let l = 0; l < 2; l++) {
          let sentry9 = false;
          let eyeclose9 = String.fromCharCode(122,95,57,57,95,99,111,97,108,101,115,99,101,0);
          let typesY = String.fromCharCode(118,97,97,112,105,95,114,95,53,50,0);
          let neonE = new Map([[String.fromCharCode(114,95,54,52,95,99,104,101,99,107,109,109,0),163], [String.fromCharCode(118,95,51,50,95,116,97,112,0),244], [String.fromCharCode(99,97,112,112,101,100,95,49,95,55,0),85]]);
         lineo *= (String.fromCharCode(57,0) == eyeclose9 ? eyeclose9.length : (sentry9 ? 4 : 3));
         sentry9 = (typesY.length + neonE.size) > 91;
         typesY += `${typesY.length - 1}`;
         neonE = new Map([[`${neonE.size}`, 3]]);
      }
       let filtere = new Map([[String.fromCharCode(99,114,101,97,116,111,114,95,48,95,57,50,0),4], [String.fromCharCode(109,101,103,101,100,95,117,95,55,57,0),995]]);
       let imagenomoredatax = new Map([[String.fromCharCode(103,101,116,117,114,108,99,111,110,116,101,120,116,95,122,95,55,0),150], [String.fromCharCode(104,95,52,53,95,104,101,97,118,121,0),434]]);
      while (!membership7) {
          let rulesD = String.fromCharCode(102,102,112,114,111,98,101,95,99,95,50,54,0);
          let orangeticka = 5;
         membership7 = rulesD.length < filtere.size;
         rulesD += `${2 + orangeticka}`;
         orangeticka += orangeticka;
         break;
      }
         membershipJ = `${((membership7 ? 5 : 4))}`;
      for (let m = 0; m < 3; m++) {
         lineo &= imagenomoredatax.size * backgroundD.length;
      }
      for (let o = 0; o < 3; o++) {
          let iconclosewhitewithbgd = String.fromCharCode(111,95,52,54,95,115,121,109,101,118,101,110,0);
          let floatingw = String.fromCharCode(109,105,110,116,95,110,95,53,48,0);
          let subsl = true;
         filtere[floatingw] = floatingw.length & iconclosewhitewithbgd.length;
         iconclosewhitewithbgd += `${((subsl ? 3 : 1) & 2)}`;
      }
      gemfileX = [lineo];
      if (4021777 == gemfileX.length) {
         break;
      }
   } while ((2 <= (modules4.length % 1) && (1 % (Math.max(8, gemfileX.length))) <= 2) && (4021777 == gemfileX.length));

    this.setState({source: null});
    this.setState({source: this.props.source, error: false});
  }

  async playVideo() {
       let canvas6 = false;
    let taiwand = false;
    let nterstitialH = 2;
    let sharewhitea = 1.0;
    let containerm = String.fromCharCode(105,95,53,53,0);
    let libreanimateda = 4.0;
    let gray6 = String.fromCharCode(97,110,105,109,97,116,101,95,48,95,50,54,0);
    let tempnodatagif_ = String.fromCharCode(114,95,54,57,95,103,122,105,112,112,101,100,0);
    let eighteenm = 4.0;
    let usernames = new Map([[String.fromCharCode(112,97,99,107,101,116,105,122,97,116,105,111,110,95,51,95,56,49,0),false ], [String.fromCharCode(106,95,56,56,95,105,110,105,116,101,110,99,0),true ], [String.fromCharCode(111,102,111,114,109,97,116,95,99,95,53,52,0),false ]]);
    let iconmegaphoneO = String.fromCharCode(114,101,112,101,97,116,101,114,95,97,95,51,55,0);
    let search3 = 4;
    let anythinkP = 2.0;
    let kick3 = [812, 563, 956];
    let libavcodecq = String.fromCharCode(119,95,54,55,95,109,111,99,107,0);
   if (containerm.length <= 5) {
      canvas6 = 98 == usernames.size;
   }
       let miniQ = String.fromCharCode(116,114,97,110,115,105,116,95,121,95,52,50,0);
       let greyW = [188, 813];
      for (let w = 0; w < 2; w++) {
         greyW = [(miniQ == String.fromCharCode(100,0) ? miniQ.length : greyW.length)];
      }
      for (let z = 0; z < 2; z++) {
          let member0 = String.fromCharCode(100,101,115,116,114,117,99,116,95,115,95,54,56,0);
          let windi = String.fromCharCode(112,95,57,57,95,99,111,110,115,111,110,97,110,116,0);
          let dropdownS = String.fromCharCode(118,97,114,105,110,116,115,95,50,95,55,0);
         miniQ += "2";
         member0 += `${member0.length}`;
         windi += `${(member0 == String.fromCharCode(67,0) ? windi.length : member0.length)}`;
         dropdownS = `${dropdownS.length % 2}`;
      }
      for (let e = 0; e < 2; e++) {
         greyW.push(1);
      }
         greyW = [greyW.length * miniQ.length];
          let t_titlee = String.fromCharCode(102,97,118,111,114,105,116,101,95,107,95,54,51,0);
         greyW = [miniQ.length ^ 2];
         t_titlee = `${t_titlee.length & t_titlee.length}`;
      while (3 >= (greyW.length / 3) && 2 >= (miniQ.length / 3)) {
          let streamingn = new Map([[String.fromCharCode(114,95,56,48,95,114,97,116,101,0),451], [String.fromCharCode(106,95,50,51,95,102,111,115,115,105,108,0),72]]);
          let iconsaveimageq = 5.0;
          let user9 = 3;
          let smallbrightnessY = 3.0;
         miniQ = `${2 - streamingn.size}`;
         streamingn[`${iconsaveimageq}`] = parseInt(`${smallbrightnessY}`) | parseInt(`${iconsaveimageq}`);
         user9 %= Math.max(2, user9 | parseInt(`${smallbrightnessY}`));
         break;
      }
      usernames[`${sharewhitea}`] = greyW.length - 1;
   if (taiwand) {
      taiwand = (parseInt(`${sharewhitea}`) - containerm.length) > 50;
   }
   do {
      canvas6 = 80.64 <= libreanimateda && String.fromCharCode(74,0) == iconmegaphoneO;
      if (canvas6 ? !canvas6 : canvas6) {
         break;
      }
   } while ((canvas6 ? !canvas6 : canvas6) && (canvas6));
      eighteenm -= parseFloat(`${3}`);
      iconmegaphoneO = `${parseInt(`${eighteenm}`) ^ 2}`;
       let overC = 3;
       let livenodatabgimgf = String.fromCharCode(105,95,53,48,95,111,116,111,102,0);
       let o_lockr = 1;
         overC |= overC;
      if ((livenodatabgimgf.length - overC) == 4) {
         overC -= livenodatabgimgf.length;
      }
         overC <<= Math.min(5, Math.abs(o_lockr));
         o_lockr %= Math.max(1 + livenodatabgimgf.length, 3);
         overC *= livenodatabgimgf.length / 3;
         o_lockr >>= Math.min(Math.abs(o_lockr), 2);
      for (let y = 0; y < 2; y++) {
         livenodatabgimgf += `${overC}`;
      }
         o_lockr |= 1 | overC;
         o_lockr <<= Math.min(3, livenodatabgimgf.length);
      sharewhitea -= parseFloat(`${2 | overC}`);
   if ((nterstitialH - tempnodatagif_.length) <= 4 || 4 <= (tempnodatagif_.length - nterstitialH)) {
      nterstitialH <<= Math.min(1, gray6.length);
   }
   while (usernames.size > containerm.length) {
      usernames[gray6] = gray6.length;
      break;
   }
   for (let f = 0; f < 1; f++) {
      taiwand = gray6.length < 85 || eighteenm < 17.24;
   }

    this.setState({player: false, paused: false});
    typeof this.events.onPlay === 'function' && this.events.onPlay();
   if (containerm.length < gray6.length) {
      gray6 = `${gray6.length}`;
   }
   for (let x = 0; x < 1; x++) {
      nterstitialH &= 1;
   }
      usernames[iconmegaphoneO] = iconmegaphoneO.length;
   do {
      search3 |= containerm.length;
      if (search3 == 4764502) {
         break;
      }
   } while ((search3 == 4764502) && ((1 + search3) >= 2 && 2.81 >= (1.68 / (Math.max(9, libreanimateda)))));
      gray6 += `${nterstitialH * search3}`;
      usernames = new Map([[`${eighteenm}`, 3]]);
       let iconqqN = [737, 155];
       let networkW = true;
       let predictionm = String.fromCharCode(118,100,115,111,95,108,95,51,55,0);
          let constantsi = new Map([[String.fromCharCode(118,112,105,110,116,114,97,112,114,101,100,95,54,95,57,54,0),String.fromCharCode(116,101,120,116,98,101,95,107,95,55,49,0)], [String.fromCharCode(101,110,99,111,100,101,100,115,116,114,101,97,109,95,120,95,56,57,0),String.fromCharCode(109,111,100,117,108,101,109,97,112,95,98,95,49,0)]]);
         predictionm = "1";
         constantsi = new Map([[`${constantsi.size}`, 3]]);
      while (iconqqN.length == 2) {
          let b_managerl = 2;
         iconqqN = [(predictionm == String.fromCharCode(72,0) ? predictionm.length : b_managerl)];
         break;
      }
          let downloading8 = [446, 777];
          let whitesmalltickq = [616, 763, 166];
          let logouserl = String.fromCharCode(103,95,51,57,95,109,101,109,100,117,112,0);
         networkW = 18 >= downloading8.length || whitesmalltickq.length >= 18;
         downloading8 = [1];
         whitesmalltickq.push(logouserl.length / (Math.max(3, 3)));
         networkW = predictionm.length >= 34;
         predictionm = `${((networkW ? 4 : 4) << (Math.min(Math.abs(3), 2)))}`;
      while (!networkW) {
         iconqqN.push(((networkW ? 4 : 3)));
         break;
      }
         networkW = ((iconqqN.length << (Math.min(5, Math.abs((networkW ? iconqqN.length : 28))))) < 28);
         iconqqN = [predictionm.length];
         networkW = (((networkW ? predictionm.length : 53) % (Math.max(predictionm.length, 9))) >= 53);
      nterstitialH <<= Math.min(Math.abs(((taiwand ? 5 : 3) * parseInt(`${eighteenm}`))), 2);
      iconmegaphoneO += `${((taiwand ? 3 : 5) % 3)}`;
   do {
      containerm = `${3 - usernames.size}`;
      if (containerm == String.fromCharCode(106,54,105,122,95,0)) {
         break;
      }
   } while (((4.0 + eighteenm) <= 1.72 || 2 <= (containerm.length & 5)) && (containerm == String.fromCharCode(106,54,105,122,95,0)));
   for (let y = 0; y < 2; y++) {
      libreanimateda *= 3;
   }

  }

   
  render() {
       let loadingspinnerk = new Map([[String.fromCharCode(101,109,111,114,121,95,105,95,57,52,0),837], [String.fromCharCode(100,101,99,114,101,102,95,50,95,51,53,0),501]]);
    let whiteticko = 5.0;
    let friendsu = String.fromCharCode(99,108,97,117,115,101,115,95,57,95,55,55,0);
    let balld = String.fromCharCode(114,95,53,48,95,109,111,100,101,0);
    let policyr = new Map([[String.fromCharCode(104,117,101,115,95,104,95,55,57,0),false ], [String.fromCharCode(101,95,53,48,95,106,111,117,114,110,97,108,0),true ], [String.fromCharCode(100,101,108,101,116,101,100,95,99,95,53,55,0),false ]]);
    let kuaishou1 = true;
    let pushd = String.fromCharCode(116,95,55,49,95,118,111,105,99,101,115,0);
    let smallA = String.fromCharCode(98,95,54,55,95,116,114,97,110,115,105,116,0);
    let weiboW = String.fromCharCode(109,95,49,50,95,117,110,105,120,0);
    let fullI = 4.0;
    let logoutM = new Map([[String.fromCharCode(119,105,116,104,105,110,95,103,95,51,56,0),String.fromCharCode(97,108,97,109,111,102,105,114,101,95,50,95,56,0)], [String.fromCharCode(104,95,56,48,95,115,117,98,104,101,97,100,101,114,0),String.fromCharCode(99,108,97,109,112,95,99,95,56,0)], [String.fromCharCode(105,95,50,53,95,99,111,110,118,101,114,103,101,110,99,101,0),String.fromCharCode(109,95,54,48,95,98,121,114,121,105,0)]]);
    let libtobQ = [367, 846];
    let libswscaleO = [String.fromCharCode(114,101,99,97,108,99,117,108,97,116,105,111,110,95,48,95,49,56,0), String.fromCharCode(113,95,55,54,95,99,111,110,115,116,114,97,105,110,116,115,0), String.fromCharCode(97,95,52,50,95,116,105,109,101,108,105,110,101,115,0)];
    let rewindC = String.fromCharCode(120,95,55,54,95,105,110,112,117,116,115,0);
    let neonx = String.fromCharCode(100,101,102,115,95,102,95,52,48,0);
    let sportsc = String.fromCharCode(111,95,53,57,95,119,95,53,51,0);
    let iconwatchnowk = false;
    let iconarrowrightwhite0 = 4;
       let knewsn = String.fromCharCode(112,97,114,97,109,99,104,97,110,103,101,95,121,95,56,55,0);
       let pingg = new Map([[String.fromCharCode(113,99,101,108,112,100,97,116,97,95,120,95,50,48,0),false ], [String.fromCharCode(105,95,54,52,95,115,116,114,105,107,101,0),true ], [String.fromCharCode(102,102,116,112,97,99,107,95,114,95,51,52,0),false ]]);
       let textinputT = [640, 70, 897];
         knewsn += `${textinputT.length}`;
      while (pingg[`${textinputT.length}`] != null) {
          let confirmation6 = 3;
          let gemfileW = 3.0;
          let loginK = String.fromCharCode(99,111,101,102,102,115,95,52,95,56,53,0);
         textinputT = [pingg.size];
         confirmation6 %= Math.max(4, confirmation6 * 2);
         gemfileW /= Math.max(parseInt(`${gemfileW}`) - 3, 5);
         loginK = "2";
         break;
      }
      do {
         textinputT.push(pingg.size);
         if (textinputT.length == 1290035) {
            break;
         }
      } while ((textinputT.length == 1290035) && (!Array.from(pingg.values()).includes(textinputT.length)));
         knewsn += `${textinputT.length + pingg.size}`;
          let eyecloseP = true;
          let arrowE = String.fromCharCode(109,95,52,49,95,97,109,111,117,110,116,115,0);
         textinputT = [pingg.size];
         eyecloseP = arrowE == arrowE;
      do {
         pingg[`${knewsn}`] = pingg.size;
         if (pingg.size == 623359) {
            break;
         }
      } while ((pingg.size == 623359) && ((pingg.size / 2) == 3));
          let libavdeviceR = String.fromCharCode(119,95,52,52,95,114,101,99,97,108,99,0);
          let listn = 5.0;
          let updatesG = String.fromCharCode(97,117,116,111,109,97,116,105,99,95,57,95,51,55,0);
         pingg[libavdeviceR] = updatesG.length;
         libavdeviceR = `${parseInt(`${listn}`)}`;
         pingg = new Map([[`${pingg.size}`, 3 - textinputT.length]]);
      for (let v = 0; v < 3; v++) {
         pingg[`${textinputT.length}`] = textinputT.length % 1;
      }
      pushd = `${smallA.length ^ 3}`;
      pushd = `${(weiboW == String.fromCharCode(87,0) ? (kuaishou1 ? 5 : 2) : weiboW.length)}`;

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

   while ((3 & policyr.size) < 3 || (parseInt(`${whiteticko}`) / (Math.max(policyr.size, 6))) < 3) {
      policyr = new Map([[`${kuaishou1}`, ((kuaishou1 ? 1 : 3))]]);
      break;
   }
      friendsu = `${balld.length}`;
            this.state.newsVideoRef = view;
   if (1 < (parseInt(`${whiteticko}`) / (Math.max(loadingspinnerk.size, 8))) || (1 - loadingspinnerk.size) < 3) {
      whiteticko -= parseFloat(`${policyr.size | 2}`);
   }
   do {
      kuaishou1 = parseInt(`${fullI}`) <= libtobQ.length;
      if (kuaishou1 ? !kuaishou1 : kuaishou1) {
         break;
      }
   } while ((4.99 == whiteticko) && (kuaishou1 ? !kuaishou1 : kuaishou1));

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
      logoutM[`${pushd}`] = pushd.length;
   for (let k = 0; k < 1; k++) {
      logoutM = new Map([[pushd, 3 % (Math.max(4, parseInt(`${whiteticko}`)))]]);
   }

  }
}
