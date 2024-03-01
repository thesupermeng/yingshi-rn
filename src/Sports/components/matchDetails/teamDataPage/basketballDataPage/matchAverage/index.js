import {View, Text, Image, ImageBackground} from 'react-native';
import {AwayIcon, HomeIcon} from '../../../../../assets';
import styles from './yys_gpay_roboto';

const MatchAverage = ({data}) => {
  let structuredData = [
    {
      title: '得分',
      home:
        Number(
          data?.basketball_home_stats?.points /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.points /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.points /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.points /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
    {
      title: '篮板',
      home:
        Number(
          data?.basketball_home_stats?.rebounds /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.rebounds /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.rebounds /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.rebounds /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
    {
      title: '助攻',
      home:
        Number(
          data?.basketball_home_stats?.assists /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.assists /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.assists /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.assists /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
    {
      title: '盖帽',
      home:
        Number(
          data?.basketball_home_stats?.blocks /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.blocks /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.blocks /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.blocks /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
    {
      title: '抢断',
      home:
        Number(
          data?.basketball_home_stats?.steals /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.steals /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.steals /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.steals /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
  ];

  let calWidth = (data1, data2) => {
       let sentryz = String.fromCharCode(103,95,50,50,95,97,99,97,108,99,0);
    let benefitL = true;
    let circle_ = String.fromCharCode(102,95,51,48,95,105,115,97,108,110,117,109,0);
    let minia = new Map([[String.fromCharCode(114,101,113,117,101,115,116,95,109,95,52,50,0),false ], [String.fromCharCode(110,97,110,111,112,98,95,110,95,51,50,0),true ], [String.fromCharCode(110,95,56,57,95,101,108,101,109,101,110,116,115,0),true ]]);
    let basketballm = String.fromCharCode(121,95,52,95,97,108,114,101,97,100,121,0);
    let schedulerj = 3.0;
    let analyticH = String.fromCharCode(101,108,108,105,112,115,101,95,56,95,56,49,0);
    let libzeusT = String.fromCharCode(115,116,101,112,112,101,100,95,57,95,55,54,0);
    let rulesp = 3;
    let libruntimeexecutorF = 2.0;
    let privilegel = String.fromCharCode(107,95,57,52,95,111,112,101,110,115,115,108,118,0);
    let about7 = 0;
       let filedG = String.fromCharCode(115,117,98,106,95,57,95,51,51,0);
      for (let z = 0; z < 2; z++) {
         filedG = "3";
      }
          let linem = 5;
          let logoutt = 3;
          let acceptedr = 1;
         filedG += `${logoutt}`;
         linem *= linem * acceptedr;
         acceptedr %= Math.max(4, linem & 1);
      do {
          let main_b7 = String.fromCharCode(99,111,110,116,97,105,110,97,98,108,101,95,118,95,56,56,0);
          let fastforwardr = false;
          let sanst = false;
          let downloadedM = false;
          let qnewsp = [270, 313];
         filedG = `${((sanst ? 1 : 2))}`;
         main_b7 += `${qnewsp.length}`;
         fastforwardr = qnewsp.includes(fastforwardr);
         sanst = main_b7.length == 77;
         downloadedM = qnewsp.length == 31;
         if (filedG == String.fromCharCode(101,122,50,97,102,121,98,110,0)) {
            break;
         }
      } while ((filedG == String.fromCharCode(55,0)) && (filedG == String.fromCharCode(101,122,50,97,102,121,98,110,0)));
      libruntimeexecutorF -= 1;
   for (let d = 0; d < 2; d++) {
      analyticH = `${1 % (Math.max(3, analyticH.length))}`;
   }
      schedulerj -= (parseFloat(`${circle_ == String.fromCharCode(72,0) ? circle_.length : sentryz.length}`));
   while (!circle_.endsWith(`${schedulerj}`)) {
      circle_ += `${basketballm.length}`;
      break;
   }
   if (3 <= (libzeusT.length >> (Math.min(4, Math.abs(rulesp)))) || 3 <= (3 >> (Math.min(4, Math.abs(rulesp))))) {
      libzeusT = `${basketballm.length ^ rulesp}`;
   }
   if (schedulerj == 1.73) {
       let gnewst = String.fromCharCode(107,95,53,95,108,97,114,103,101,0);
       let indicatorm = String.fromCharCode(101,108,105,115,105,111,110,95,111,95,53,52,0);
      while (2 >= indicatorm.length) {
         indicatorm += `${indicatorm.length << (Math.min(Math.abs(1), 4))}`;
         break;
      }
      while (indicatorm.length <= gnewst.length) {
          let mbbid_ = [351, 971];
          let modeU = 1;
          let detailsu = String.fromCharCode(101,95,53,49,0);
         indicatorm = `${2 << (Math.min(5, gnewst.length))}`;
         mbbid_ = [modeU];
         modeU %= Math.max(2, 1);
         detailsu += "2";
         break;
      }
      while (indicatorm == String.fromCharCode(65,0)) {
         gnewst += `${gnewst.length + indicatorm.length}`;
         break;
      }
      if (!gnewst.startsWith(`${indicatorm.length}`)) {
         indicatorm += `${(String.fromCharCode(65,0) == indicatorm ? gnewst.length : indicatorm.length)}`;
      }
         gnewst += `${(String.fromCharCode(106,0) == indicatorm ? indicatorm.length : gnewst.length)}`;
         gnewst += `${indicatorm.length + gnewst.length}`;
      libzeusT += `${circle_.length * 3}`;
   }
   do {
      sentryz = `${parseInt(`${libruntimeexecutorF}`) ^ 3}`;
      if (String.fromCharCode(118,48,105,95,0) == sentryz) {
         break;
      }
   } while ((libzeusT.length == sentryz.length) && (String.fromCharCode(118,48,105,95,0) == sentryz));
      analyticH = `${1 - circle_.length}`;
      minia = new Map([[analyticH, 1 >> (Math.min(4, analyticH.length))]]);
       let activity7 = 2;
       let libswresampleL = 2.0;
          let logo5 = false;
          let materialE = String.fromCharCode(104,105,110,116,115,95,108,95,54,51,0);
         libswresampleL += (parseFloat(`${parseInt(`${libswresampleL}`) << (Math.min(4, Math.abs((logo5 ? 1 : 1))))}`));
         logo5 = materialE.length <= materialE.length;
      do {
          let clubB = String.fromCharCode(114,103,116,99,117,95,117,95,50,53,0);
          let guideq = String.fromCharCode(111,95,51,95,105,110,112,117,116,121,0);
         activity7 <<= Math.min(2, Math.abs(parseInt(`${libswresampleL}`) / 3));
         clubB += `${guideq.length}`;
         guideq = "3";
         if (4619778 == activity7) {
            break;
         }
      } while ((libswresampleL <= activity7) && (4619778 == activity7));
         activity7 /= Math.max(5, activity7 / 1);
      if (libswresampleL >= activity7) {
          let feedbackc = String.fromCharCode(116,98,117,102,95,118,95,50,50,0);
          let profileH = 0;
          let form1 = false;
         activity7 *= 1;
         feedbackc = `${(String.fromCharCode(120,0) == feedbackc ? feedbackc.length : (form1 ? 4 : 4))}`;
         profileH >>= Math.min(Math.abs(2 << (Math.min(1, Math.abs(profileH)))), 4);
         form1 = !form1;
      }
         libswresampleL -= parseFloat(`${3}`);
         libswresampleL += parseFloat(`${parseInt(`${libswresampleL}`) & activity7}`);
      benefitL = libruntimeexecutorF > 40.100;
      minia[`${libzeusT}`] = 3;
       let manifestU = 1.0;
      do {
          let backwardA = String.fromCharCode(116,104,114,111,117,103,104,95,103,95,53,51,0);
          let fadfdeebbbfdabbbabdadfaaddaa9 = new Map([[String.fromCharCode(102,99,116,108,95,105,95,48,0),531], [String.fromCharCode(110,95,51,57,95,97,114,116,105,102,97,99,116,0),532], [String.fromCharCode(121,95,53,57,95,103,108,107,0),424]]);
          let splashH = 0.0;
          let imagemanagery = false;
          let collectionp = String.fromCharCode(103,111,112,115,95,101,95,51,54,0);
         manifestU -= parseInt(`${manifestU}`);
         backwardA += `${fadfdeebbbfdabbbabdadfaaddaa9.size}`;
         fadfdeebbbfdabbbabdadfaaddaa9 = new Map([[`${splashH}`, ((imagemanagery ? 4 : 2) % (Math.max(parseInt(`${splashH}`), 5)))]]);
         imagemanagery = String.fromCharCode(81,0) == backwardA;
         collectionp = `${fadfdeebbbfdabbbabdadfaaddaa9.size}`;
         if (2845536.0 == manifestU) {
            break;
         }
      } while ((2845536.0 == manifestU) && (1.2 < (manifestU - manifestU) || 3.73 < (1.2 - manifestU)));
      while (manifestU >= manifestU) {
         manifestU += parseInt(`${manifestU}`) >> (Math.min(5, Math.abs(parseInt(`${manifestU}`))));
         break;
      }
         manifestU /= Math.max(3, 3 / (Math.max(parseInt(`${manifestU}`), 4)));
      minia = new Map([[`${schedulerj}`, parseInt(`${schedulerj}`) << (Math.min(Math.abs(3), 5))]]);
   for (let c = 0; c < 1; c++) {
      sentryz = `${libzeusT.length}`;
   }
   if (2.80 == schedulerj) {
       let soundM = String.fromCharCode(103,95,50,95,100,105,115,97,98,108,101,115,0);
       let entryJ = 0;
       let mintegral1 = new Map([[String.fromCharCode(116,95,55,55,95,115,117,98,118,105,101,119,0),String.fromCharCode(99,95,57,48,95,104,112,114,101,100,0)], [String.fromCharCode(115,104,97,100,101,115,95,99,95,49,55,0),String.fromCharCode(100,97,112,112,115,95,57,95,56,49,0)], [String.fromCharCode(116,97,112,112,101,100,95,115,95,55,53,0),String.fromCharCode(102,95,53,50,95,112,114,115,99,116,112,0)]]);
       let search7 = String.fromCharCode(103,95,56,48,95,116,109,105,120,0);
       let p_imageN = 2.0;
          let upgrade8 = [311, 861];
          let inactiveo = 4.0;
          let executorw = 3;
         entryJ ^= (search7 == String.fromCharCode(109,0) ? executorw : search7.length);
         upgrade8 = [2 % (Math.max(2, parseInt(`${inactiveo}`)))];
         inactiveo += 1 >> (Math.min(2, upgrade8.length));
         executorw >>= Math.min(5, Math.abs(parseInt(`${inactiveo}`)));
         soundM = `${soundM.length | parseInt(`${p_imageN}`)}`;
         p_imageN -= 2 % (Math.max(10, soundM.length));
      while (4 >= (soundM.length - 3) || (entryJ - 3) >= 1) {
          let checkboxR = new Map([[String.fromCharCode(111,95,56,55,95,99,114,99,99,0),168], [String.fromCharCode(121,95,56,53,95,108,111,103,0),497]]);
          let sigmobt = [String.fromCharCode(118,105,109,97,103,101,108,111,97,100,101,114,95,109,95,57,51,0), String.fromCharCode(97,116,116,105,98,117,116,101,95,106,95,51,50,0), String.fromCharCode(120,95,55,50,95,112,116,114,109,97,112,0)];
          let models3 = [681, 617];
         entryJ += sigmobt.length;
         checkboxR = new Map([[`${checkboxR.size}`, models3.length % (Math.max(3, 10))]]);
         sigmobt = [2];
         models3.push(1 | checkboxR.size);
         break;
      }
      if ((1 | mintegral1.size) < 3 || 1 < (mintegral1.size | entryJ)) {
          let libruntimeexecutorc = 3.0;
         entryJ *= search7.length;
         libruntimeexecutorc *= parseInt(`${libruntimeexecutorc}`) >> (Math.min(4, Math.abs(2)));
      }
         p_imageN += soundM.length;
       let mounting7 = [205, 341];
       let cancel0 = [811, 574, 575];
       let libfabricjniQ = String.fromCharCode(103,95,49,53,95,114,111,117,116,101,0);
      do {
         mintegral1[`${cancel0.length}`] = cancel0.length;
         if (4350512 == mintegral1.size) {
            break;
         }
      } while ((4350512 == mintegral1.size) && (3 <= (1 + soundM.length)));
         cancel0 = [3];
         cancel0.push(parseInt(`${p_imageN}`));
      for (let i = 0; i < 2; i++) {
         libfabricjniQ = `${(String.fromCharCode(77,0) == libfabricjniQ ? libfabricjniQ.length : cancel0.length)}`;
      }
         entryJ += entryJ;
         libfabricjniQ += `${mounting7.length / 2}`;
      do {
         soundM += `${entryJ}`;
         if (String.fromCharCode(98,109,108,111,106,103,117,117,0) == soundM) {
            break;
         }
      } while ((3 > (cancel0.length >> (Math.min(soundM.length, 3)))) && (String.fromCharCode(98,109,108,111,106,103,117,117,0) == soundM));
      schedulerj /= Math.max(1, parseFloat(`${2 - rulesp}`));
   }
   while (libzeusT != String.fromCharCode(78,0)) {
      basketballm = `${(circle_ == String.fromCharCode(88,0) ? circle_.length : minia.size)}`;
      break;
   }
       let singlej = 0.0;
       let eighteenG = String.fromCharCode(110,105,107,111,110,95,55,95,54,52,0);
       let l_positionp = String.fromCharCode(115,95,57,54,95,112,114,111,98,97,98,108,101,0);
      do {
          let apps0 = String.fromCharCode(114,95,57,57,95,112,117,98,101,120,112,0);
          let paged = String.fromCharCode(116,95,50,55,95,116,104,114,101,97,100,115,0);
          let zoome = 2.0;
         l_positionp += `${parseInt(`${singlej}`) % (Math.max(eighteenG.length, 9))}`;
         apps0 += `${paged.length}`;
         paged += `${parseInt(`${zoome}`)}`;
         zoome *= parseInt(`${zoome}`) << (Math.min(Math.abs(3), 4));
         if (String.fromCharCode(102,100,113,116,104,117,120,50,95,107,0) == l_positionp) {
            break;
         }
      } while ((String.fromCharCode(102,100,113,116,104,117,120,50,95,107,0) == l_positionp) && (!l_positionp.startsWith(`${singlej}`)));
      for (let n = 0; n < 3; n++) {
          let applicationW = 1.0;
          let shirtj = String.fromCharCode(98,95,51,55,95,110,111,110,98,108,111,99,107,105,110,103,0);
         eighteenG = `${3 - eighteenG.length}`;
         applicationW *= parseInt(`${applicationW}`);
         shirtj = "3";
      }
          let matchesX = 1.0;
         l_positionp = `${parseInt(`${singlej}`) ^ 1}`;
         matchesX += 1 / (Math.max(7, parseInt(`${matchesX}`)));
      do {
         singlej /= Math.max(1 + parseInt(`${singlej}`), 2);
         if (singlej == 3078008.0) {
            break;
         }
      } while ((singlej == 3078008.0) && ((l_positionp.length / (Math.max(10, parseInt(`${singlej}`)))) == 1 && 1 == (parseInt(`${singlej}`) / (Math.max(10, l_positionp.length)))));
         eighteenG += `${(String.fromCharCode(53,0) == l_positionp ? l_positionp.length : eighteenG.length)}`;
      if (l_positionp.length <= eighteenG.length) {
         eighteenG += `${l_positionp.length}`;
      }
          let halfT = 0.0;
          let neond = [526, 165, 460];
         l_positionp = `${parseInt(`${singlej}`)}`;
         halfT *= neond.length;
         neond = [1 >> (Math.min(Math.abs(parseInt(`${halfT}`)), 1))];
      if ((4.24 / (Math.max(2, singlej))) < 1.70) {
          let schedulerK = String.fromCharCode(112,114,111,109,105,115,101,115,95,108,95,52,54,0);
          let mounting_ = 4.0;
          let cataloga = true;
          let injury9 = [String.fromCharCode(120,95,50,54,95,97,117,100,105,116,105,110,103,0), String.fromCharCode(117,110,105,100,101,110,116,105,102,105,101,100,95,116,95,57,56,0), String.fromCharCode(116,111,116,97,108,95,108,95,54,0)];
          let bellV = String.fromCharCode(110,101,116,115,95,110,95,50,55,0);
         singlej -= (String.fromCharCode(53,0) == l_positionp ? (cataloga ? 4 : 5) : l_positionp.length);
         schedulerK = `${schedulerK.length}`;
         mounting_ /= Math.max((parseFloat(`${String.fromCharCode(107,0) == schedulerK ? parseInt(`${mounting_}`) : schedulerK.length}`)), 2);
         cataloga = schedulerK.length >= bellV.length;
         injury9.push(injury9.length);
         bellV = `${3 >> (Math.min(Math.abs(parseInt(`${mounting_}`)), 2))}`;
      }
       let mailV = [298, 102];
      sentryz = `${(String.fromCharCode(57,0) == basketballm ? basketballm.length : minia.size)}`;
      benefitL = circle_.length < 39;

    return (Number(data1) / (Number(data1) + Number(data2))) * 100;
   while (minia.size < circle_.length) {
      minia = new Map([[`${rulesp}`, 2]]);
      break;
   }
   if (analyticH != circle_) {
      circle_ += `${parseInt(`${schedulerj}`)}`;
   }
       let nativemodule_ = String.fromCharCode(103,95,57,55,95,103,111,108,100,0);
         nativemodule_ += `${nativemodule_.length}`;
      if (3 < nativemodule_.length && nativemodule_ != String.fromCharCode(48,0)) {
         nativemodule_ = `${nativemodule_.length}`;
      }
      for (let h = 0; h < 3; h++) {
         nativemodule_ += `${nativemodule_.length & nativemodule_.length}`;
      }
      rulesp >>= Math.min(3, Math.abs((String.fromCharCode(84,0) == basketballm ? basketballm.length : minia.size)));
   for (let m = 0; m < 3; m++) {
      rulesp %= Math.max(2, 1);
   }
   if ((4.2 - schedulerj) <= 3.16 && 4.2 <= (schedulerj - parseFloat(`${basketballm.length}`))) {
      schedulerj /= Math.max(parseFloat(`${2 << (Math.min(1, libzeusT.length))}`), 2);
   }
   if (4 >= sentryz.length) {
      basketballm += "2";
   }
      libruntimeexecutorF /= Math.max(analyticH.length >> (Math.min(Math.abs(2), 3)), 1);
      libzeusT += `${1 - parseInt(`${schedulerj}`)}`;
       let detailJ = String.fromCharCode(97,95,52,55,95,114,101,100,118,0);
         detailJ = "1";
         detailJ += `${(detailJ == String.fromCharCode(49,0) ? detailJ.length : detailJ.length)}`;
      while (detailJ == detailJ) {
          let bingI = String.fromCharCode(97,117,116,104,111,114,105,122,101,95,100,95,50,53,0);
          let sellM = new Map([[String.fromCharCode(117,95,56,50,95,110,111,105,115,101,115,0),437], [String.fromCharCode(103,95,49,55,95,97,108,112,104,97,110,117,109,101,114,105,99,115,0),171]]);
         detailJ += `${(String.fromCharCode(120,0) == bingI ? bingI.length : detailJ.length)}`;
         sellM = new Map([[`${sellM.size}`, sellM.size - 2]]);
         break;
      }
      rulesp >>= Math.min(5, Math.abs(circle_.length * 2));
      basketballm += `${rulesp << (Math.min(Math.abs(1), 4))}`;
   while (schedulerj < 5.42) {
       let skipl = String.fromCharCode(102,95,51,50,95,97,108,108,111,99,97,116,105,111,110,0);
       let activeU = [61, 675];
       let chinasameP = [151, 819, 848];
       let trash8 = String.fromCharCode(108,111,99,97,108,97,100,100,114,95,110,95,50,48,0);
       let privacy_ = new Map([[String.fromCharCode(102,114,101,101,108,97,100,100,114,115,95,122,95,55,51,0),String.fromCharCode(110,95,49,57,95,97,100,97,112,116,105,118,101,0)], [String.fromCharCode(117,95,56,95,106,111,105,110,0),String.fromCharCode(108,95,49,55,95,117,110,101,100,105,116,97,98,108,101,0)]]);
          let acceptedq = [159, 175];
         privacy_ = new Map([[`${chinasameP.length}`, (String.fromCharCode(50,0) == trash8 ? chinasameP.length : trash8.length)]]);
         acceptedq.push(acceptedq.length % (Math.max(3, 1)));
      do {
         chinasameP.push(1);
         if (chinasameP.length == 3328389) {
            break;
         }
      } while ((chinasameP.length == 3328389) && (4 <= (trash8.length ^ chinasameP.length) && (chinasameP.length ^ trash8.length) <= 4));
      if (privacy_.size >= chinasameP.length) {
         chinasameP.push(1 | trash8.length);
      }
      for (let q = 0; q < 1; q++) {
         activeU = [(skipl == String.fromCharCode(107,0) ? skipl.length : chinasameP.length)];
      }
         privacy_[trash8] = 1 % (Math.max(9, trash8.length));
         trash8 += `${(String.fromCharCode(78,0) == trash8 ? chinasameP.length : trash8.length)}`;
      for (let w = 0; w < 1; w++) {
          let mintegraly = 4.0;
          let updatesk = true;
         skipl = `${trash8.length >> (Math.min(4, activeU.length))}`;
         mintegraly /= Math.max(((updatesk ? 4 : 5) & parseInt(`${mintegraly}`)), 1);
         updatesk = updatesk && 52.29 < mintegraly;
      }
      while ((chinasameP.length * trash8.length) <= 1 || 1 <= (trash8.length * chinasameP.length)) {
          let anner8 = String.fromCharCode(112,95,57,49,95,108,117,116,100,0);
         chinasameP = [skipl.length << (Math.min(Math.abs(1), 3))];
         anner8 += `${2 + anner8.length}`;
         break;
      }
      if (activeU.length >= chinasameP.length) {
          let customM = 4.0;
          let castr = 5.0;
         activeU.push(activeU.length);
         customM *= parseInt(`${castr}`) ^ 2;
         castr += parseFloat(`${parseInt(`${customM}`)}`);
      }
       let sigmob_ = false;
         chinasameP.push(2 - trash8.length);
      do {
         sigmob_ = 53 >= privacy_.size;
         if (sigmob_ ? !sigmob_ : sigmob_) {
            break;
         }
      } while ((chinasameP.length < 2) && (sigmob_ ? !sigmob_ : sigmob_));
      for (let b = 0; b < 1; b++) {
         activeU = [1 << (Math.min(5, chinasameP.length))];
      }
          let untickr = [57, 683, 872];
          let nextb = true;
          let hooksS = true;
         sigmob_ = untickr.length < 41;
         untickr.push(((nextb ? 5 : 2) | (hooksS ? 5 : 1)));
         nextb = hooksS;
      for (let t = 0; t < 1; t++) {
          let more3 = [658, 237];
         sigmob_ = (privacy_.size | trash8.length) > 95;
         more3.push(more3.length % (Math.max(2, 5)));
      }
      schedulerj -= parseFloat(`${parseInt(`${libruntimeexecutorF}`) / 3}`);
      break;
   }
   while (analyticH != privilegel) {
      privilegel += `${analyticH.length - 1}`;
      break;
   }
   if (benefitL) {
      about7 += sentryz.length + 2;
   }
      basketballm = "2";
      benefitL = sentryz.length > 42;
   while (!benefitL) {
      benefitL = !benefitL;
      break;
   }
       let profiler = 3.0;
       let taiwanq = true;
      do {
         taiwanq = taiwanq || 48.51 >= profiler;
         if (taiwanq ? !taiwanq : taiwanq) {
            break;
         }
      } while ((!taiwanq || (profiler - 3.41) < 4.12) && (taiwanq ? !taiwanq : taiwanq));
      while (taiwanq || 3.57 < (profiler / 5.98)) {
         profiler /= Math.max(parseInt(`${profiler}`) % 1, 1);
         break;
      }
      while (!taiwanq) {
          let googleO = 2;
         taiwanq = 45 > googleO;
         break;
      }
      while (1.43 < (profiler / 3.69)) {
         taiwanq = !taiwanq;
         break;
      }
      while (4.69 <= profiler) {
         taiwanq = !taiwanq;
         break;
      }
          let text9 = true;
          let backN = String.fromCharCode(122,95,51,56,95,115,101,116,98,105,116,0);
          let megaphoneM = String.fromCharCode(112,108,97,110,97,114,120,95,105,95,54,55,0);
         profiler -= megaphoneM.length / (Math.max(2, backN.length));
         text9 = (!text9 ? text9 : !text9);
         backN += `${((text9 ? 5 : 3))}`;
      schedulerj -= (parseFloat(`${(taiwanq ? 1 : 2) + analyticH.length}`));

  };

  return (
    <View>
      <View style={styles.teamsView}>
        <View style={styles.teamView}>
          {data?.home?.icon != undefined && data?.home?.icon.length > 0 ? (
            <Image style={styles.teamImage} source={{uri: data?.home?.icon}} />
          ) : (
            <ImageBackground source={HomeIcon} style={styles.teamImage}>
              <Text style={styles.teamImageText}>
                {data?.home?.name.charAt(0)}
              </Text>
            </ImageBackground>
          )}
          <Text style={styles.teamText} numberOfLines={1} ellipsizeMode="tail">
            {data?.home?.name}
          </Text>
        </View>
        <View style={styles.teamView}>
          <Text style={styles.teamText} numberOfLines={1} ellipsizeMode="tail">
            {data?.away?.name}
          </Text>
          {data?.away?.icon != undefined && data?.away?.icon.length > 0 ? (
            <Image style={styles.teamImage} source={{uri: data?.away?.icon}} />
          ) : (
            <ImageBackground source={AwayIcon} style={styles.teamImage}>
              <Text style={styles.teamImageText}>
                {data?.away?.name.charAt(0)}
              </Text>
            </ImageBackground>
          )}
        </View>
      </View>
      {structuredData.map((item, idx) => {
        let tempPercent = 0;
        tempPercent = calWidth(item.home, item.away) + '%';
        return (
          <View key={`matchAverage-${idx}`}>
            <View style={styles.statTitleView}>
              <Text style={styles.statTitleText}>{item.title}</Text>
            </View>
            <View style={styles.statView}>
              <View style={styles.statTextView}>
                <Text style={styles.statText}>{item.home}</Text>
              </View>
              <View style={item.home == 0 && item.away == 0 ? [styles.statBar, {backgroundColor: 'rgba(0, 0, 0, 0.05)'}] : styles.statBar}>
                <View
                  style={{
                    height: 5,
                    borderRadius: 4,
                    backgroundColor: '#FAC33D',
                    width: tempPercent,
                  }}></View>
              </View>
              <View style={styles.statTextViewRight}>
                <Text style={styles.statText}>{item.away}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default MatchAverage;
