import {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {NoRecommend} from './mayi_gift_untick';
import {RecommendCard} from './mayi_homeicon';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import mayi_BingUnlock, {
  clearLiveRelatedStreams,
  hideControlAction,
  setVideoSource,
  updateVideoPropPipe,
  VideoPlayerActions,
} from '../../../../../pages/matchDetails/action';
import {Colors} from '../../../../../global/mayi_borderless_rocket';
import {liveRoomName} from '../../../../../utility/utils';
import {VideoLiveType} from '../../../../../global/mayi_green_build';

export const RecommendPanel = () => {
       let page_ = true;
    let leakcheckerI = 4.0;
    let cancelF = String.fromCharCode(107,95,55,48,95,98,101,104,97,118,105,111,114,115,0);
    let store9 = String.fromCharCode(110,95,50,95,100,105,97,108,111,103,117,101,0);
    let statisticsg = 5.0;
    let matchm = true;
    let canvasg = 0.0;
    let sportsO = String.fromCharCode(116,114,101,101,114,101,97,100,101,114,95,106,95,51,0);
    let mbnative6 = String.fromCharCode(109,95,50,57,95,97,115,115,101,114,116,105,111,110,0);
    let icontransferclubp = true;
    let codegenA = String.fromCharCode(115,95,53,57,95,119,97,105,116,101,114,0);
    let expandg = new Map([[String.fromCharCode(102,95,49,56,95,115,115,101,114,116,0),true ], [String.fromCharCode(100,99,97,100,99,116,95,121,95,57,0),true ], [String.fromCharCode(113,116,97,98,108,101,115,95,122,95,52,57,0),true ]]);
    let fullscreenminc = 2.0;
       let bgvipsporto = [String.fromCharCode(120,112,101,114,105,109,101,110,116,97,108,95,108,95,56,49,0), String.fromCharCode(109,118,99,111,109,112,111,110,101,110,116,95,112,95,52,54,0), String.fromCharCode(116,111,115,115,95,120,95,54,50,0)];
       let down3 = 2.0;
       let vipsportr = 4.0;
         down3 -= parseFloat(`${1}`);
          let leftv = true;
         down3 += parseFloat(`${parseInt(`${vipsportr}`)}`);
         leftv = (!leftv ? !leftv : !leftv);
         down3 /= Math.max(parseFloat(`${parseInt(`${down3}`)}`), 3);
         bgvipsporto.push(parseInt(`${vipsportr}`));
      do {
         vipsportr /= Math.max(3, 2);
         if (vipsportr == 1416594.0) {
            break;
         }
      } while ((vipsportr == 1416594.0) && ((bgvipsporto.length - vipsportr) < 1.47 || 2.18 < (1.47 - vipsportr)));
          let scorepopsound0 = 4.0;
         bgvipsporto = [1];
         scorepopsound0 /= Math.max(parseFloat(`${parseInt(`${scorepopsound0}`) / (Math.max(8, parseInt(`${scorepopsound0}`)))}`), 5);
         bgvipsporto = [bgvipsporto.length];
         vipsportr -= parseInt(`${vipsportr}`);
      if (!bgvipsporto.includes(vipsportr)) {
         vipsportr /= Math.max(4, bgvipsporto.length >> (Math.min(4, Math.abs(parseInt(`${vipsportr}`)))));
      }
      matchm = !icontransferclubp;

  const dispatch = useDispatch();
   for (let i = 0; i < 1; i++) {
      matchm = String.fromCharCode(53,0) == sportsO || mbnative6.length <= 44;
   }

  const navigation = useNavigation();
      matchm = 14 <= sportsO.length && 14 <= mbnative6.length;

  const liveRoomAction = new mayi_BingUnlock(dispatch);
       let nativel = String.fromCharCode(116,114,97,99,101,114,95,51,95,53,57,0);
       let constants7 = String.fromCharCode(105,109,97,103,101,114,111,116,97,116,101,95,103,95,56,50,0);
       let chinaa = [969, 383, 628];
       let playlistT = [221, 795, 674];
      if (nativel != String.fromCharCode(118,0)) {
          let files = String.fromCharCode(115,116,114,107,95,120,95,56,51,0);
          let stepx = 2.0;
          let baselineS = true;
          let elementsP = 2.0;
         constants7 += `${(nativel == String.fromCharCode(83,0) ? nativel.length : parseInt(`${stepx}`))}`;
         files += `${parseInt(`${elementsP}`) * 1}`;
         stepx -= files.length - 2;
         baselineS = (9 == ((!baselineS ? 9 : files.length) ^ files.length));
         elementsP -= parseFloat(`${files.length / 3}`);
      }
          let nextf = String.fromCharCode(99,111,110,115,116,114,117,99,116,95,105,95,50,54,0);
          let langkeyB = String.fromCharCode(113,95,54,49,95,120,99,101,112,116,105,111,110,0);
          let progressK = [157, 386, 284];
         playlistT.push(nativel.length);
         nextf += `${langkeyB.length}`;
         langkeyB += `${1 ^ langkeyB.length}`;
         progressK = [(nextf == String.fromCharCode(110,0) ? langkeyB.length : nextf.length)];
      do {
         constants7 = "1";
         if (constants7 == String.fromCharCode(57,118,50,114,49,113,114,112,0)) {
            break;
         }
      } while (((2 ^ constants7.length) < 5 || 2 < (chinaa.length ^ constants7.length)) && (constants7 == String.fromCharCode(57,118,50,114,49,113,114,112,0)));
      if (nativel.length == 1) {
         chinaa.push((constants7 == String.fromCharCode(53,0) ? constants7.length : nativel.length));
      }
       let libavfilterz = String.fromCharCode(104,95,54,50,95,107,101,121,105,100,0);
      icontransferclubp = cancelF.length == 60;

  const listLiveMatchDetails = useSelector(state => state.liveRoomMatchDetails);
      store9 = `${mbnative6.length & sportsO.length}`;

  const liveRelatedStreams = useSelector(state => state.liveRelatedStreams);
   while (3.91 == (canvasg + leakcheckerI) && (canvasg + 3.91) == 1.27) {
      leakcheckerI *= cancelF.length | parseInt(`${leakcheckerI}`);
      break;
   }


  const [isLoading, setIsLoading] = useState(false);
      leakcheckerI *= ((icontransferclubp ? 4 : 5));

  useEffect(() => {

   while (5 == cancelF.length) {
       let libglogN = 2.0;
      if ((libglogN / (Math.max(1.100, 8))) >= 2.71 || 3.36 >= (libglogN / 1.100)) {
          let models1 = String.fromCharCode(107,95,51,52,95,115,105,110,113,105,0);
          let materialT = String.fromCharCode(98,105,112,114,101,100,95,50,95,54,49,0);
          let expand2 = String.fromCharCode(120,95,55,95,100,114,97,103,103,105,110,103,0);
         libglogN *= parseFloat(`${1 + parseInt(`${libglogN}`)}`);
         models1 += `${models1.length}`;
         materialT += `${materialT.length}`;
         expand2 = `${(models1 == String.fromCharCode(120,0) ? expand2.length : models1.length)}`;
      }
         libglogN *= parseFloat(`${parseInt(`${libglogN}`)}`);
          let with_rH = [726, 403, 19];
          let changeo = true;
          let current1 = [377, 828, 226];
         libglogN /= Math.max(3, parseFloat(`${1 ^ current1.length}`));
         with_rH.push(with_rH.length >> (Math.min(Math.abs(1), 3)));
         changeo = !changeo || with_rH.length <= 45;
         current1 = [2];
      cancelF = `${(parseInt(`${canvasg}`) & (icontransferclubp ? 2 : 1))}`;
      break;
   }
    clearLiveRelatedStreams();
   if ((mbnative6.length + parseInt(`${leakcheckerI}`)) > 1 || (leakcheckerI + 3.68) > 4.75) {
       let sellE = 0.0;
       let zhubo2 = [431, 257, 198];
       let baselineG = 5;
       let alert7 = new Map([[String.fromCharCode(108,105,118,101,100,95,117,95,53,49,0),486], [String.fromCharCode(109,95,55,51,95,97,118,112,105,99,116,117,114,101,0),263], [String.fromCharCode(102,101,97,116,117,114,101,95,52,95,54,52,0),445]]);
       let weibo0 = String.fromCharCode(97,112,112,118,101,121,111,114,95,110,95,49,49,0);
          let video_ = String.fromCharCode(99,111,108,108,97,103,101,95,104,95,52,56,0);
         alert7[`${video_}`] = video_.length | 2;
      while (!Array.from(alert7.keys()).includes(`${sellE}`)) {
         sellE *= (parseFloat(`${String.fromCharCode(77,0) == weibo0 ? weibo0.length : baselineG}`));
         break;
      }
      for (let g = 0; g < 1; g++) {
         sellE -= parseFloat(`${3}`);
      }
         weibo0 += `${alert7.size - 2}`;
      while (3 == (alert7.size * zhubo2.length) || (3 * zhubo2.length) == 4) {
         alert7 = new Map([[`${alert7.size}`, alert7.size]]);
         break;
      }
       let malaysias = false;
       let ajaxr = true;
      for (let c = 0; c < 2; c++) {
         ajaxr = !weibo0.startsWith(`${malaysias}`);
      }
         sellE -= (parseFloat(`${parseInt(`${sellE}`) << (Math.min(4, Math.abs((malaysias ? 4 : 4))))}`));
      if (!zhubo2.includes(sellE)) {
          let abidetectk = [559, 55];
          let forwardY = String.fromCharCode(98,95,57,49,95,115,116,115,100,0);
          let reddownarrowp = 0;
          let basketballtrophyF = String.fromCharCode(115,95,57,49,95,116,104,114,111,116,116,108,101,0);
          let profilepicN = String.fromCharCode(114,108,111,116,116,105,101,99,111,109,109,111,110,95,112,95,53,53,0);
         zhubo2.push(abidetectk.length);
         abidetectk.push(reddownarrowp);
         forwardY = `${3 * profilepicN.length}`;
         reddownarrowp <<= Math.min(1, Math.abs(profilepicN.length >> (Math.min(4, Math.abs(reddownarrowp)))));
         basketballtrophyF = `${reddownarrowp & 2}`;
      }
      if ((zhubo2.length | 3) == 5) {
          let libimagepipelineV = String.fromCharCode(115,95,55,95,115,105,110,107,115,0);
          let yellowanimationlivel = 5.0;
          let cornerz = false;
          let collection2 = [386, 404];
          let previewo = String.fromCharCode(100,95,54,51,95,117,110,114,101,115,111,108,118,101,100,0);
         ajaxr = weibo0.length == 48;
         libimagepipelineV += `${libimagepipelineV.length ^ 3}`;
         yellowanimationlivel *= 3 - libimagepipelineV.length;
         cornerz = collection2.includes(yellowanimationlivel);
         collection2.push(collection2.length);
         previewo = "3";
      }
         sellE -= parseFloat(`${1 ^ baselineG}`);
      for (let n = 0; n < 1; n++) {
         zhubo2.push(((ajaxr ? 5 : 2)));
      }
      while (4 > (parseInt(`${sellE}`) + weibo0.length)) {
         weibo0 = `${(weibo0 == String.fromCharCode(68,0) ? (ajaxr ? 5 : 3) : weibo0.length)}`;
         break;
      }
          let eabafadfadddbafeddddeeefeaafX = 2;
          let iconfeedbackw = String.fromCharCode(115,117,98,116,105,116,108,101,95,49,95,52,55,0);
          let goallogo0 = [776, 452, 293];
         malaysias = (15 == ((!ajaxr ? 15 : zhubo2.length) + zhubo2.length));
         eabafadfadddbafeddddeeefeaafX <<= Math.min(4, Math.abs(iconfeedbackw.length << (Math.min(Math.abs(2), 2))));
         iconfeedbackw = `${(iconfeedbackw == String.fromCharCode(108,0) ? goallogo0.length : iconfeedbackw.length)}`;
         goallogo0 = [iconfeedbackw.length];
         malaysias = weibo0 == String.fromCharCode(72,0);
      leakcheckerI -= 1 + zhubo2.length;
   }

    getRelatedStreams();
   do {
      matchm = (icontransferclubp ? !matchm : !icontransferclubp);
      if (matchm ? !matchm : matchm) {
         break;
      }
   } while ((matchm || 2.15 < (statisticsg - 4.79)) && (matchm ? !matchm : matchm));

  }, [listLiveMatchDetails.id]);
   while (canvasg == 5.42) {
      sportsO += `${(mbnative6 == String.fromCharCode(90,0) ? mbnative6.length : (page_ ? 4 : 5))}`;
      break;
   }


  const getRelatedStreams = async () => {

      matchm = !matchm;
    setIsLoading(true);
       let singaporej = 0.0;
       let configurek = false;
       let nendr = 0;
      if (configurek || 3 > (nendr / 3)) {
         nendr *= 1;
      }
         nendr &= nendr;
      if (singaporej <= nendr) {
         nendr /= Math.max(1, parseInt(`${singaporej}`));
      }
      if (configurek) {
         configurek = !configurek;
      }
      while (!configurek) {
          let libjsijniprofilery = 3.0;
          let iconedit7 = 3;
          let indicatorF = String.fromCharCode(97,95,53,54,95,97,118,114,101,115,97,109,112,108,101,114,101,115,0);
          let catagoryJ = false;
          let manifestv = 4.0;
         singaporej += iconedit7 ^ 1;
         libjsijniprofilery -= ((catagoryJ ? 4 : 4) * parseInt(`${manifestv}`));
         iconedit7 %= Math.max(3, 1);
         indicatorF = `${parseInt(`${libjsijniprofilery}`) / (Math.max(3, 4))}`;
         catagoryJ = 32.97 >= libjsijniprofilery;
         manifestv /= Math.max(1 << (Math.min(1, Math.abs(parseInt(`${manifestv}`)))), 1);
         break;
      }
      if (configurek && 1 <= (nendr / 3)) {
         configurek = !configurek;
      }
      do {
         configurek = !configurek;
         if (configurek ? !configurek : configurek) {
            break;
         }
      } while (((5.16 / (Math.max(2, singaporej))) > 1.94) && (configurek ? !configurek : configurek));
      for (let s = 0; s < 1; s++) {
          let profile9 = [251, 526];
         configurek = (profile9.length * singaporej) == 75.48;
      }
          let bootd = 4.0;
          let modalV = String.fromCharCode(120,95,50,52,95,100,117,97,108,0);
         configurek = !configurek;
         bootd *= 3;
         modalV = `${parseInt(`${bootd}`) / 2}`;
      icontransferclubp = String.fromCharCode(122,0) == cancelF;

    await liveRoomAction.getRelatedStreams(listLiveMatchDetails.id);
      leakcheckerI *= sportsO.length >> (Math.min(Math.abs(1), 4));

    setTimeout(() => {

       let pathN = String.fromCharCode(109,117,108,116,105,112,108,101,120,95,105,95,51,50,0);
         pathN = `${3 >> (Math.min(4, pathN.length))}`;
         pathN += `${pathN.length}`;
         pathN = `${pathN.length}`;
      sportsO = `${(String.fromCharCode(97,0) == store9 ? store9.length : parseInt(`${canvasg}`))}`;
      setIsLoading(false);
   for (let e = 0; e < 1; e++) {
       let crown6 = String.fromCharCode(100,95,57,52,95,97,103,114,101,101,109,101,110,116,0);
       let cedbadcebfbfbfbcfecbcE = [542, 876];
       let crossj = new Map([[String.fromCharCode(120,104,116,109,108,95,110,95,54,51,0),false ], [String.fromCharCode(112,114,111,112,101,114,116,105,101,115,95,100,95,51,55,0),true ], [String.fromCharCode(122,95,51,54,95,101,120,112,114,101,115,115,0),false ]]);
       let memberL = String.fromCharCode(105,95,56,55,95,99,111,114,101,115,0);
       let smallz = String.fromCharCode(97,116,116,114,105,98,117,116,101,100,95,106,95,50,55,0);
      for (let a = 0; a < 3; a++) {
          let chatroombackgroundO = 2.0;
          let h_count_ = true;
         crown6 += "1";
         chatroombackgroundO *= parseFloat(`${2 | parseInt(`${chatroombackgroundO}`)}`);
         h_count_ = chatroombackgroundO > 3.33;
      }
          let baiduC = String.fromCharCode(101,95,54,52,95,116,119,105,110,118,113,0);
          let catagoryW = String.fromCharCode(100,105,115,109,105,115,115,105,110,103,95,52,95,49,52,0);
         smallz += "1";
         baiduC = `${(catagoryW == String.fromCharCode(67,0) ? baiduC.length : catagoryW.length)}`;
          let runtimeschedulerO = String.fromCharCode(98,95,55,56,95,115,97,102,97,114,121,0);
         cedbadcebfbfbfbcfecbcE.push(smallz.length);
         runtimeschedulerO += `${runtimeschedulerO.length}`;
         crossj = new Map([[smallz, smallz.length / (Math.max(7, crown6.length))]]);
         crown6 += `${crossj.size - 1}`;
          let dycreatorv = 0.0;
         memberL = `${cedbadcebfbfbfbcfecbcE.length | 1}`;
         dycreatorv -= parseFloat(`${parseInt(`${dycreatorv}`) - parseInt(`${dycreatorv}`)}`);
      for (let w = 0; w < 3; w++) {
          let resultd = String.fromCharCode(115,116,101,114,101,111,95,111,95,50,52,0);
          let u_positionO = 2;
          let videojss = String.fromCharCode(98,101,110,99,104,95,57,95,52,51,0);
         cedbadcebfbfbfbcfecbcE = [2];
         resultd = `${u_positionO - resultd.length}`;
         u_positionO *= 3;
         videojss += `${videojss.length}`;
      }
      while (crown6 != String.fromCharCode(79,0) || smallz == String.fromCharCode(115,0)) {
         crown6 = `${smallz.length}`;
         break;
      }
         memberL += `${smallz.length ^ memberL.length}`;
      for (let i = 0; i < 1; i++) {
          let moonQ = String.fromCharCode(97,95,52,49,95,99,97,108,99,117,108,97,116,101,0);
         crossj[`${cedbadcebfbfbfbcfecbcE.length}`] = crossj.size ^ 3;
         moonQ = `${moonQ.length >> (Math.min(Math.abs(2), 3))}`;
      }
          let clubq = [653, 358];
          let render7 = String.fromCharCode(110,101,97,114,95,105,95,52,57,0);
         crossj[memberL] = render7.length / (Math.max(memberL.length, 8));
         clubq.push(2 / (Math.max(7, clubq.length)));
         render7 = "1";
      if (!memberL.includes(`${cedbadcebfbfbfbcfecbcE.length}`)) {
         memberL += `${cedbadcebfbfbfbcfecbcE.length << (Math.min(4, Math.abs(crossj.size)))}`;
      }
      if ((cedbadcebfbfbfbcfecbcE.length % (Math.max(smallz.length, 4))) <= 3) {
          let sliderd = String.fromCharCode(100,95,56,57,95,98,105,111,109,101,116,114,121,0);
         smallz += `${smallz.length << (Math.min(Math.abs(1), 2))}`;
         sliderd += `${1 | sliderd.length}`;
      }
          let goallogod = String.fromCharCode(110,95,53,56,95,105,115,111,109,0);
         crown6 += `${(smallz == String.fromCharCode(87,0) ? smallz.length : cedbadcebfbfbfbcfecbcE.length)}`;
         goallogod = `${goallogod.length}`;
          let iconcalendarK = [352, 846, 457];
         memberL += `${iconcalendarK.length | 1}`;
      leakcheckerI /= Math.max(cedbadcebfbfbfbcfecbcE.length, 1);
   }

    });
   for (let z = 0; z < 1; z++) {
      page_ = canvasg < 88.30;
   }

  };
   for (let i = 0; i < 2; i++) {
      leakcheckerI *= 1 * parseInt(`${statisticsg}`);
   }


  const onMatchSelect = async match => {

   for (let v = 0; v < 1; v++) {
      matchm = String.fromCharCode(119,0) == mbnative6;
   }
    const matchId = match?.match_id;
       let huaweif = String.fromCharCode(104,95,52,52,95,99,108,101,97,114,105,110,103,0);
       let android1 = new Map([[String.fromCharCode(117,95,56,52,95,113,117,97,110,116,0),353], [String.fromCharCode(117,95,57,53,95,114,101,97,115,111,110,115,0),59]]);
       let icondefaultthumbnail4 = new Map([[String.fromCharCode(104,95,51,57,95,105,109,101,110,115,105,111,110,0),false ], [String.fromCharCode(104,95,51,55,95,108,101,97,115,116,0),false ]]);
      do {
         android1 = new Map([[`${icondefaultthumbnail4.size}`, (String.fromCharCode(102,0) == huaweif ? huaweif.length : icondefaultthumbnail4.size)]]);
         if (4410218 == android1.size) {
            break;
         }
      } while ((huaweif.includes(`${android1.size}`)) && (4410218 == android1.size));
       let halfw = 5.0;
      icontransferclubp = 68.85 > leakcheckerI;

    if (matchId) {

   while (!icontransferclubp && 3.20 >= (leakcheckerI + 2.40)) {
      leakcheckerI += parseInt(`${canvasg}`) >> (Math.min(5, Math.abs(2)));
      break;
   }
      const route = await liveRoomName(matchId);
      canvasg *= parseFloat(`${cancelF.length - parseInt(`${statisticsg}`)}`);

      dispatch(
        updateVideoPropPipe([
          VideoPlayerActions.setVideoSource(VideoLiveType.LIVE, match.src),
          VideoPlayerActions.hideControl,
          VideoPlayerActions.hideBottomSheet,
        ]),
      );
      canvasg /= Math.max(parseFloat(`${parseInt(`${canvasg}`) & 3}`), 4);

      navigation.navigate(route, {
        matchId,
      });
   do {
      page_ = (parseFloat(`${store9.length}`) + canvasg) > 59.21;
      if (page_ ? !page_ : page_) {
         break;
      }
   } while ((page_ ? !page_ : page_) && (!page_ || mbnative6.length < 1));

    }
  };
   while (icontransferclubp) {
       let serviceD = [557, 798];
       let confirmation0 = [651, 577, 38];
       let libglogN6 = new Map([[String.fromCharCode(107,95,49,53,95,115,117,98,116,114,97,99,116,109,111,100,0),false ], [String.fromCharCode(99,115,99,104,101,109,101,95,105,95,57,56,0),false ]]);
       let renderv = String.fromCharCode(97,95,55,52,95,101,118,101,114,121,98,111,100,121,0);
          let hnewsa = 1.0;
          let videocommonG = String.fromCharCode(106,95,51,54,95,101,108,108,105,111,116,116,0);
         renderv = `${libglogN6.size / (Math.max(4, renderv.length))}`;
         hnewsa /= Math.max(2, parseInt(`${hnewsa}`));
         videocommonG += `${videocommonG.length}`;
      if (!Array.from(libglogN6.values()).includes(serviceD.length)) {
         serviceD.push(confirmation0.length >> (Math.min(Math.abs(3), 4)));
      }
         serviceD.push(confirmation0.length);
      while ((serviceD.length + renderv.length) == 5) {
          let homeactiveZ = 3;
          let ping3 = String.fromCharCode(108,111,103,115,95,111,95,55,54,0);
         serviceD = [1];
         homeactiveZ += homeactiveZ ^ 2;
         ping3 += `${homeactiveZ}`;
         break;
      }
      do {
         libglogN6[`${confirmation0.length}`] = libglogN6.size & 2;
         if (762131 == libglogN6.size) {
            break;
         }
      } while ((762131 == libglogN6.size) && (renderv.includes(`${libglogN6.size}`)));
      for (let c = 0; c < 1; c++) {
         confirmation0 = [libglogN6.size << (Math.min(serviceD.length, 5))];
      }
       let eighteens = [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,95,109,95,57,49,0), String.fromCharCode(101,108,115,116,95,102,95,49,56,0)];
       let arrowrightwithtail6 = [385, 844, 677];
         confirmation0.push((renderv == String.fromCharCode(95,0) ? renderv.length : eighteens.length));
       let dplus4 = true;
      for (let l = 0; l < 3; l++) {
         renderv += "1";
      }
         confirmation0.push(2);
      do {
          let penaltyC = String.fromCharCode(100,111,99,108,105,115,116,115,95,113,95,50,48,0);
         libglogN6[`${dplus4}`] = ((dplus4 ? 4 : 1) + confirmation0.length);
         penaltyC += `${3 >> (Math.min(5, penaltyC.length))}`;
         if (libglogN6.size == 3897951) {
            break;
         }
      } while ((libglogN6.size == 3897951) && (1 >= (renderv.length + libglogN6.size)));
      canvasg -= (parseFloat(`${(page_ ? 5 : 2) ^ parseInt(`${leakcheckerI}`)}`));
      break;
   }

  return (
    <View style={styles.panel}>
      <FlatList
        style={styles.scrollContainer}
        data={
          liveRelatedStreams?.length % 2 === 1
            ? [...liveRelatedStreams, {}]
            : liveRelatedStreams
        }
        keyExtractor={stream => stream.match_id}
        renderItem={({item: stream}) => {
          return (
            <TouchableHighlight
              style={styles.card}
              onPress={() => onMatchSelect(stream)}>
              <RecommendCard data={stream} />
            </TouchableHighlight>
          );
   for (let w = 0; w < 1; w++) {
      store9 = "2";
   }

        }}
        numColumns={2}
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.footerText}>无更多推荐比赛</Text>
          </View>
        }
        ListEmptyComponent={
          isLoading ? null : (
            <NoRecommend onRefresh={() => getRelatedStreams()} />
          )
        }
      />
    </View>
  );
       let morey = 0.0;
       let circleH = String.fromCharCode(105,95,49,48,48,0);
       let modelX = 0.0;
          let colorsy = 3;
         modelX *= (parseFloat(`${String.fromCharCode(75,0) == circleH ? colorsy : circleH.length}`));
      while (3.12 <= (modelX + 1.18)) {
         circleH += `${parseInt(`${modelX}`)}`;
         break;
      }
      while ((2 / (Math.max(9, circleH.length))) > 2) {
          let libavdeviceR = 0.0;
          let libfileA = false;
          let moviesl = true;
          let chinaj = String.fromCharCode(99,111,110,102,101,116,116,105,95,53,95,56,51,0);
         modelX *= parseFloat(`${parseInt(`${modelX}`) ^ parseInt(`${libavdeviceR}`)}`);
         libavdeviceR -= (parseFloat(`${(libfileA ? 1 : 1)}`));
         libfileA = (moviesl ? libfileA : moviesl);
         chinaj = `${(chinaj == String.fromCharCode(69,0) ? chinaj.length : (moviesl ? 3 : 5))}`;
         break;
      }
         morey -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${modelX}`)), 5))}`);
       let libavdeviceN = 1.0;
      do {
         libavdeviceN *= parseFloat(`${3}`);
         if (1331131.0 == libavdeviceN) {
            break;
         }
      } while ((1331131.0 == libavdeviceN) && (modelX <= 2.69));
         libavdeviceN *= parseFloat(`${parseInt(`${modelX}`)}`);
       let checkboxV = new Map([[String.fromCharCode(105,103,110,111,114,101,100,95,49,95,54,56,0),113], [String.fromCharCode(102,95,53,49,95,110,101,105,103,104,98,111,117,114,0),423]]);
      for (let h = 0; h < 1; h++) {
         morey += parseFloat(`${1 * circleH.length}`);
      }
      leakcheckerI /= Math.max(circleH.length, 2);

};

const styles = StyleSheet.create({
  panel: {
    backgroundColor: 'transparent',
    color: 'white',
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 20,
    alignItems: 'center',
    
  },
  scrollContainer: {
    width: '100%',
    flex: 1,
  },
  cardContainer: {
    flex: 1,
  },
  card: {
    flex: 1,
  },
  footer: {
    flex: 0,
    margin: 10,
    alignItems: 'center',
  },
  footerText: {
    color: Colors.colorDarkGreyText,
  },
});
