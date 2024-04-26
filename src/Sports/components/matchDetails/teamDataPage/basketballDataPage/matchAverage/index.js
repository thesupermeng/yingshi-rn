import {View, Text, Image, ImageBackground} from 'react-native';
import {AwayIcon, HomeIcon} from '../../../../../assets';
import styles from './wawa_hiad_iconnewchat';

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
       let short__O = 4.0;
    let mbnativeadvanced6 = [936, 705, 24];
    let rewardvideo0 = new Map([[String.fromCharCode(110,95,51,95,110,118,99,0),true ], [String.fromCharCode(101,114,114,108,111,103,95,100,95,52,50,0),false ], [String.fromCharCode(105,95,52,57,95,115,116,97,116,101,112,0),false ]]);
    let libsentryK = String.fromCharCode(104,95,52,48,95,101,110,116,105,116,105,116,121,0);
    let catagoryR = String.fromCharCode(120,95,57,55,95,112,114,101,115,101,108,101,99,116,0);
    let incidentx = new Map([[String.fromCharCode(115,97,118,101,100,95,116,95,50,54,0),251], [String.fromCharCode(114,101,102,108,101,99,116,105,111,110,95,56,95,50,56,0),123], [String.fromCharCode(97,95,51,48,95,104,111,116,0),714]]);
    let currentf = 2.0;
    let orangeK = true;
    let baselineG = new Map([[String.fromCharCode(100,101,99,105,112,104,101,114,95,55,95,56,0),String.fromCharCode(108,95,57,57,95,104,108,105,110,101,0)], [String.fromCharCode(114,101,103,101,110,101,114,97,116,101,95,55,95,51,52,0),String.fromCharCode(98,105,112,114,101,100,95,120,95,49,48,48,0)], [String.fromCharCode(101,118,97,108,95,55,95,53,53,0),String.fromCharCode(104,95,53,57,95,117,97,110,0)]]);
    let related1 = false;
    let changei = 1;
    let ping0 = 0.0;
    let orangeH = [33, 878, 998];
    let viewsY = 1.0;
    let securityZ = String.fromCharCode(106,95,49,48,95,108,111,99,97,108,108,121,0);
       let iconqqX = [String.fromCharCode(116,100,115,102,95,115,95,50,57,0), String.fromCharCode(122,95,57,49,95,117,110,100,101,114,114,117,110,0)];
       let basketballawayteam1 = String.fromCharCode(115,104,111,114,116,101,114,95,53,95,49,52,0);
         iconqqX.push(basketballawayteam1.length << (Math.min(1, iconqqX.length)));
         iconqqX.push(iconqqX.length);
      for (let x = 0; x < 1; x++) {
         basketballawayteam1 += `${2 + basketballawayteam1.length}`;
      }
      while ((basketballawayteam1.length | iconqqX.length) > 3) {
         iconqqX = [basketballawayteam1.length >> (Math.min(1, iconqqX.length))];
         break;
      }
      if ((1 + iconqqX.length) >= 2 || 1 >= (basketballawayteam1.length + iconqqX.length)) {
         basketballawayteam1 = `${basketballawayteam1.length}`;
      }
      if (3 >= (iconqqX.length / (Math.max(basketballawayteam1.length, 8)))) {
         iconqqX = [iconqqX.length << (Math.min(basketballawayteam1.length, 5))];
      }
      currentf -= mbnativeadvanced6.length - 3;
   for (let i = 0; i < 1; i++) {
      mbnativeadvanced6 = [3 % (Math.max(6, changei))];
   }
   do {
      related1 = (((!related1 ? 28 : incidentx.size) & incidentx.size) <= 28);
      if (related1 ? !related1 : related1) {
         break;
      }
   } while ((related1 ? !related1 : related1) && (orangeK || !related1));
   for (let j = 0; j < 2; j++) {
       let dice8 = true;
       let chinasame_ = 1.0;
      while (dice8) {
         chinasame_ -= parseFloat(`${parseInt(`${chinasame_}`) * 2}`);
         break;
      }
      do {
         chinasame_ /= Math.max(parseFloat(`${3 % (Math.max(parseInt(`${chinasame_}`), 9))}`), 2);
         if (3330075.0 == chinasame_) {
            break;
         }
      } while ((3330075.0 == chinasame_) && (dice8));
      for (let h = 0; h < 2; h++) {
         dice8 = chinasame_ <= 16.83 || dice8;
      }
      while ((2.52 + chinasame_) < 4.13) {
          let bggradientR = 3.0;
          let cornershootv = 0;
          let iconmorej = String.fromCharCode(116,95,52,57,95,112,97,114,116,105,116,105,111,110,0);
          let abidetectG = [String.fromCharCode(120,95,52,54,95,115,113,108,105,116,101,0), String.fromCharCode(101,95,56,52,95,120,112,117,98,0), String.fromCharCode(114,101,99,118,102,114,111,109,95,53,95,52,57,0)];
          let t_managerK = String.fromCharCode(101,95,57,95,100,105,99,116,0);
         dice8 = abidetectG.includes(chinasame_);
         bggradientR *= parseFloat(`${iconmorej.length}`);
         cornershootv -= (t_managerK == String.fromCharCode(81,0) ? t_managerK.length : parseInt(`${bggradientR}`));
         iconmorej = `${1 | t_managerK.length}`;
         abidetectG = [(t_managerK == String.fromCharCode(52,0) ? cornershootv : t_managerK.length)];
         break;
      }
         chinasame_ *= parseFloat(`${parseInt(`${chinasame_}`) ^ 2}`);
       let backgroundk = true;
      catagoryR += `${parseInt(`${currentf}`) % 1}`;
   }
      mbnativeadvanced6 = [2];
   for (let n = 0; n < 2; n++) {
      currentf += rewardvideo0.size & 1;
   }
      changei &= changei % (Math.max(libsentryK.length, 1));
      changei ^= mbnativeadvanced6.length & 3;
      currentf -= (incidentx.size >> (Math.min(4, Math.abs((related1 ? 4 : 1)))));
      short__O *= rewardvideo0.size;
       let loadinga = String.fromCharCode(103,101,110,115,95,118,95,49,57,0);
       let goalk = 5.0;
       let airbnbstarselectedU = String.fromCharCode(104,107,100,102,95,121,95,54,50,0);
          let m_title9 = String.fromCharCode(115,117,98,111,98,106,101,99,116,95,99,95,49,48,48,0);
         loadinga += `${(m_title9 == String.fromCharCode(98,0) ? airbnbstarselectedU.length : m_title9.length)}`;
      while (loadinga.startsWith(`${goalk}`)) {
         goalk *= (parseFloat(`${String.fromCharCode(70,0) == airbnbstarselectedU ? loadinga.length : airbnbstarselectedU.length}`));
         break;
      }
       let rncores = String.fromCharCode(107,95,53,51,95,100,105,115,116,114,105,98,117,116,101,100,0);
       let exampleimage7 = String.fromCharCode(98,117,114,110,95,99,95,48,0);
      while (rncores != String.fromCharCode(85,0)) {
          let overlayW = 5;
         loadinga = `${3 % (Math.max(8, parseInt(`${goalk}`)))}`;
         overlayW >>= Math.min(Math.abs(overlayW), 5);
         break;
      }
          let membership6 = 5.0;
          let zhubo_ = String.fromCharCode(104,101,105,103,104,116,115,95,50,95,50,57,0);
         airbnbstarselectedU += `${2 & airbnbstarselectedU.length}`;
         membership6 += 1;
         zhubo_ = `${3 / (Math.max(2, zhubo_.length))}`;
         goalk *= (parseFloat(`${String.fromCharCode(76,0) == loadinga ? loadinga.length : rncores.length}`));
         rncores = `${loadinga.length / 1}`;
          let delegate_pI = true;
         airbnbstarselectedU += `${(1 >> (Math.min(5, Math.abs((delegate_pI ? 5 : 2)))))}`;
      if (!airbnbstarselectedU.endsWith(rncores)) {
         rncores += "3";
      }
      catagoryR = `${airbnbstarselectedU.length}`;
      baselineG = new Map([[`${currentf}`, 3 << (Math.min(Math.abs(parseInt(`${currentf}`)), 3))]]);
   if (3.1 > (2.18 + ping0) || (2.18 + ping0) > 2.51) {
      catagoryR += `${baselineG.size}`;
   }
   if (changei > 5) {
      changei <<= Math.min(5, Math.abs(1));
   }
       let searchG = 0.0;
       let pushc = 3.0;
       let overlaym = String.fromCharCode(115,98,103,112,95,53,95,50,53,0);
          let darkg = String.fromCharCode(105,95,54,53,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0);
          let middlen = String.fromCharCode(106,95,56,56,95,111,112,99,111,100,101,0);
         searchG += 1;
         darkg = `${(darkg == String.fromCharCode(70,0) ? darkg.length : middlen.length)}`;
         middlen = `${middlen.length % 1}`;
      for (let j = 0; j < 3; j++) {
          let basketballplayerplaceholderp = new Map([[String.fromCharCode(112,95,55,50,95,99,111,110,100,117,99,116,111,114,0),227], [String.fromCharCode(108,105,98,107,118,97,122,97,97,114,95,98,95,57,50,0),54], [String.fromCharCode(113,95,53,53,95,99,104,101,99,107,105,110,103,0),281]]);
          let huaweip = String.fromCharCode(108,111,110,103,98,105,103,95,120,95,52,0);
          let adultX = [828, 734];
          let imagenetworkerrH = 5;
         pushc -= 1;
         basketballplayerplaceholderp = new Map([[`${adultX.length}`, 2 << (Math.min(3, huaweip.length))]]);
         huaweip += "3";
         adultX.push(imagenetworkerrH & huaweip.length);
         imagenetworkerrH /= Math.max(3, 4);
      }
      if ((searchG + overlaym.length) >= 5.69 && (4 + parseInt(`${searchG}`)) >= 1) {
         searchG += parseInt(`${searchG}`) << (Math.min(Math.abs(2), 2));
      }
         searchG /= Math.max(3, 1);
         searchG *= parseInt(`${pushc}`) - 3;
      while ((searchG / (Math.max(10, pushc))) == 1.79 && (1.79 / (Math.max(9, pushc))) == 1.95) {
         pushc *= overlaym.length + 3;
         break;
      }
      for (let i = 0; i < 2; i++) {
         overlaym += `${parseInt(`${pushc}`)}`;
      }
         pushc /= Math.max(parseInt(`${pushc}`) % (Math.max(3, 5)), 2);
       let transfer1 = String.fromCharCode(116,95,54,53,95,114,101,112,108,105,99,97,116,101,0);
       let agreement9 = String.fromCharCode(111,112,101,114,97,116,105,110,103,95,101,95,52,56,0);
      changei -= (String.fromCharCode(74,0) == catagoryR ? parseInt(`${short__O}`) : catagoryR.length);
   while ((currentf / (Math.max(incidentx.size, 8))) > 3.76) {
       let orangeclockj = false;
       let awaym = false;
       let gradlewT = 4.0;
       let orangeuparrowO = true;
       let collectionO = true;
         collectionO = orangeclockj;
         gradlewT /= Math.max(5, 2 ^ parseInt(`${gradlewT}`));
      if (!awaym) {
         awaym = !orangeuparrowO;
      }
         collectionO = orangeclockj && !collectionO;
         orangeclockj = (orangeclockj ? !collectionO : !orangeclockj);
      while (awaym) {
          let common2 = String.fromCharCode(98,95,57,56,95,119,97,114,110,0);
          let mbnativeadvancedV = String.fromCharCode(99,111,100,101,99,115,95,53,95,49,48,48,0);
          let fullD = new Map([[String.fromCharCode(114,101,105,115,115,117,101,95,56,95,50,55,0),452], [String.fromCharCode(110,95,56,49,95,105,100,115,117,98,116,121,112,101,0),782], [String.fromCharCode(107,95,48,95,100,114,101,102,0),393]]);
          let yellowY = String.fromCharCode(112,115,100,115,112,95,56,95,49,0);
         awaym = common2.length < 84;
         common2 = `${fullD.size & 2}`;
         mbnativeadvancedV += `${mbnativeadvancedV.length}`;
         fullD = new Map([[mbnativeadvancedV, (String.fromCharCode(52,0) == yellowY ? yellowY.length : mbnativeadvancedV.length)]]);
         break;
      }
      if (awaym && orangeclockj) {
         awaym = !collectionO;
      }
      if (!orangeclockj || !collectionO) {
         collectionO = !orangeclockj;
      }
      currentf /= Math.max(2, ((awaym ? 2 : 3) * parseInt(`${short__O}`)));
      break;
   }

    return (Number(data1) / (Number(data1) + Number(data2))) * 100;
      catagoryR = `${rewardvideo0.size}`;
   while (Array.from(incidentx.keys()).includes(`${ping0}`)) {
       let fullscreenmax_ = String.fromCharCode(117,95,51,54,95,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0);
       let roundU = String.fromCharCode(102,105,110,95,116,95,51,53,0);
      if (3 < fullscreenmax_.length) {
         roundU += `${(roundU == String.fromCharCode(112,0) ? fullscreenmax_.length : roundU.length)}`;
      }
       let libavfilterm = 0.0;
       let connectionB = 0.0;
      for (let g = 0; g < 2; g++) {
         connectionB *= fullscreenmax_.length + roundU.length;
      }
          let sendW = 4.0;
          let middle6 = 4;
          let smallorangeman9 = [665, 339];
         fullscreenmax_ = "1";
         sendW *= smallorangeman9.length;
         middle6 += 2 * parseInt(`${sendW}`);
         smallorangeman9.push(parseInt(`${sendW}`) + middle6);
      while (3.14 == (3.11 * connectionB)) {
          let rocketV = [String.fromCharCode(111,95,54,49,95,111,119,110,101,114,115,104,105,112,0), String.fromCharCode(102,95,53,95,97,99,116,117,97,108,105,122,101,100,0)];
          let accepted7 = String.fromCharCode(102,116,121,112,95,51,95,53,48,0);
          let iconwechatv = 3;
         connectionB -= fullscreenmax_.length % (Math.max(4, roundU.length));
         rocketV.push(iconwechatv << (Math.min(accepted7.length, 1)));
         accepted7 = `${accepted7.length >> (Math.min(4, rocketV.length))}`;
         iconwechatv >>= Math.min(5, accepted7.length);
         break;
      }
      while (fullscreenmax_.length < libavfilterm) {
          let paginationZ = 4.0;
          let readS = String.fromCharCode(105,95,56,50,95,108,101,118,105,110,115,111,110,0);
          let lightN = String.fromCharCode(103,95,51,53,95,109,97,105,108,0);
         libavfilterm /= Math.max(roundU.length % 3, 4);
         paginationZ += parseFloat(`${parseInt(`${paginationZ}`) | readS.length}`);
         readS += `${readS.length & 1}`;
         lightN = `${readS.length}`;
         break;
      }
      incidentx[catagoryR] = (catagoryR == String.fromCharCode(88,0) ? catagoryR.length : libsentryK.length);
      break;
   }
      related1 = !orangeK && currentf <= 19.67;
   do {
       let penaltymatchiconH = true;
       let largej = 1.0;
       let refreshR = new Map([[String.fromCharCode(116,114,97,118,101,108,95,120,95,57,56,0),false ], [String.fromCharCode(109,115,103,95,100,95,51,54,0),false ], [String.fromCharCode(108,111,119,99,111,109,112,95,105,95,57,52,0),true ]]);
         largej *= parseFloat(`${parseInt(`${largej}`) >> (Math.min(4, Math.abs(2)))}`);
         largej /= Math.max(4, (parseFloat(`${(penaltymatchiconH ? 4 : 1) ^ parseInt(`${largej}`)}`)));
      if ((parseFloat(`${refreshR.size}`) + largej) > 2.26 && (parseFloat(`${refreshR.size}`) + largej) > 2.26) {
         largej *= parseFloat(`${2}`);
      }
      while (penaltymatchiconH) {
         refreshR[`${largej}`] = refreshR.size;
         break;
      }
         refreshR = new Map([[`${largej}`, ((penaltymatchiconH ? 3 : 2) >> (Math.min(Math.abs(parseInt(`${largej}`)), 5)))]]);
      if (!Array.from(refreshR.values()).includes(largej)) {
         largej /= Math.max(1, (parseFloat(`${(penaltymatchiconH ? 3 : 1) - parseInt(`${largej}`)}`)));
      }
      do {
          let iconstare = 0.0;
          let b_playerL = [String.fromCharCode(116,111,117,99,104,95,122,95,56,53,0), String.fromCharCode(99,100,106,112,101,103,95,98,95,57,49,0), String.fromCharCode(102,95,55,48,95,115,117,98,115,101,103,109,101,110,116,0)];
         refreshR = new Map([[`${penaltymatchiconH}`, parseInt(`${largej}`) / 3]]);
         iconstare += parseFloat(`${b_playerL.length}`);
         b_playerL = [1];
         if (refreshR.size == 4568249) {
            break;
         }
      } while ((!Array.from(refreshR.keys()).includes(`${largej}`)) && (refreshR.size == 4568249));
          let libsentrya = new Map([[String.fromCharCode(103,114,97,100,102,117,110,95,116,95,52,57,0),true ], [String.fromCharCode(113,95,57,51,95,112,111,115,116,99,111,100,101,0),false ], [String.fromCharCode(99,114,97,115,104,108,121,116,105,99,115,95,98,95,52,56,0),false ]]);
          let ewardedo = [685, 178, 401];
         penaltymatchiconH = !penaltymatchiconH;
         libsentrya = new Map([[`${libsentrya.size}`, libsentrya.size]]);
         ewardedo = [ewardedo.length + 1];
         penaltymatchiconH = 11.98 > largej && !penaltymatchiconH;
      changei -= rewardvideo0.size - 2;
      if (changei == 85251) {
         break;
      }
   } while ((changei == 85251) && (3 == changei));
   for (let u = 0; u < 1; u++) {
      rewardvideo0[`${short__O}`] = (parseInt(`${short__O}`) | (orangeK ? 4 : 3));
   }
      currentf /= Math.max(incidentx.size, 4);
      changei ^= 1;
   do {
       let textlayoutmanagerK = 5;
       let showmorez = 5;
          let icondownimg6 = String.fromCharCode(114,117,98,98,101,114,95,111,95,56,0);
          let default_s6u = String.fromCharCode(105,110,116,120,120,95,52,95,56,48,0);
          let arrowselectdownx = [String.fromCharCode(98,95,57,53,95,109,111,109,101,110,116,97,114,121,0), String.fromCharCode(122,95,50,95,112,111,108,121,108,105,110,101,0), String.fromCharCode(121,95,53,51,95,99,111,109,112,111,110,101,110,116,115,0)];
         showmorez <<= Math.min(2, Math.abs(1 >> (Math.min(Math.abs(textlayoutmanagerK), 3))));
         icondownimg6 += `${icondownimg6.length}`;
         default_s6u += `${icondownimg6.length}`;
         arrowselectdownx.push(icondownimg6.length ^ default_s6u.length);
      if ((showmorez / 2) <= 5 || 4 <= (2 / (Math.max(3, textlayoutmanagerK)))) {
         showmorez *= showmorez / 3;
      }
      orangeK = libsentryK.length >= 43 || 43 >= catagoryR.length;
      if (orangeK ? !orangeK : orangeK) {
         break;
      }
   } while ((orangeK) && (orangeK ? !orangeK : orangeK));
   if ((1 << (Math.min(5, orangeH.length))) == 3 || orangeH.length == 1) {
       let yellowtored2 = [393, 40];
       let libfollyy = true;
       let iconbellm = 5.0;
      for (let h = 0; h < 1; h++) {
         yellowtored2 = [yellowtored2.length & parseInt(`${iconbellm}`)];
      }
      for (let w = 0; w < 3; w++) {
          let fullo = String.fromCharCode(119,95,49,48,95,115,116,97,108,101,0);
          let mapbufferz = [124, 633];
          let gesturea = 5.0;
         yellowtored2 = [((libfollyy ? 4 : 4) / 3)];
         fullo = `${mapbufferz.length}`;
         mapbufferz = [(fullo == String.fromCharCode(109,0) ? fullo.length : parseInt(`${gesturea}`))];
         gesturea /= Math.max(2, 2);
      }
       let middlew = new Map([[String.fromCharCode(106,95,49,54,95,105,109,112,114,101,115,115,105,111,110,0),829], [String.fromCharCode(109,111,117,115,101,95,119,95,55,0),899], [String.fromCharCode(114,114,116,114,95,107,95,52,54,0),164]]);
      do {
         libfollyy = yellowtored2.includes(libfollyy);
         if (libfollyy ? !libfollyy : libfollyy) {
            break;
         }
      } while ((libfollyy ? !libfollyy : libfollyy) && ((iconbellm * 5.4) < 1.52 || iconbellm < 5.4));
         middlew[`${libfollyy}`] = middlew.size;
      while (middlew[`${yellowtored2.length}`] == null) {
         yellowtored2 = [3 - middlew.size];
         break;
      }
         libfollyy = (middlew.size - iconbellm) <= 37.0;
         libfollyy = !libfollyy;
         yellowtored2 = [((libfollyy ? 3 : 2) << (Math.min(Math.abs(3), 5)))];
      orangeH.push(yellowtored2.length / (Math.max(1, 2)));
   }
      orangeH.push((libsentryK == String.fromCharCode(122,0) ? libsentryK.length : orangeH.length));
      currentf /= Math.max(5, parseInt(`${short__O}`));
       let renderc = String.fromCharCode(99,111,109,112,108,101,116,105,111,110,115,95,104,95,54,48,0);
       let rewardy = String.fromCharCode(110,111,102,105,116,105,99,97,116,105,111,110,95,105,95,56,51,0);
       let basketballmatchdetailbgi = [744, 702, 181];
      for (let t = 0; t < 2; t++) {
         renderc += `${basketballmatchdetailbgi.length}`;
      }
          let orangedownarrowI = String.fromCharCode(99,95,50,54,95,119,114,111,110,103,0);
          let redgoalA = new Map([[String.fromCharCode(114,101,102,99,111,117,110,116,95,105,95,51,49,0),false ], [String.fromCharCode(115,121,115,105,110,102,111,95,103,95,51,49,0),false ], [String.fromCharCode(109,108,111,99,107,95,109,95,49,49,0),false ]]);
          let templateprocessor7 = String.fromCharCode(122,95,50,52,95,108,98,108,0);
         basketballmatchdetailbgi.push((String.fromCharCode(67,0) == templateprocessor7 ? templateprocessor7.length : renderc.length));
         orangedownarrowI += `${1 - redgoalA.size}`;
         redgoalA[orangedownarrowI] = redgoalA.size;
         basketballmatchdetailbgi = [rewardy.length];
       let whitetickt = String.fromCharCode(115,95,54,50,95,99,111,100,101,98,111,111,107,115,0);
          let largeD = [760, 282, 923];
          let webviewq = true;
          let baiduadsl = true;
         basketballmatchdetailbgi.push(3 >> (Math.min(4, whitetickt.length)));
         largeD.push(3);
         webviewq = !baiduadsl;
      while (renderc.length > 3) {
         rewardy = `${rewardy.length / 3}`;
         break;
      }
       let searchbarr = 1;
      for (let j = 0; j < 3; j++) {
          let iconrefreshH = new Map([[String.fromCharCode(114,95,54,50,95,114,101,115,99,104,101,100,117,108,101,0),399], [String.fromCharCode(108,105,115,116,115,95,100,95,52,54,0),90], [String.fromCharCode(105,102,110,115,95,48,95,53,51,0),303]]);
          let privacyO = String.fromCharCode(107,95,54,57,95,99,111,109,112,97,116,0);
          let logoM = String.fromCharCode(106,112,101,103,99,111,109,112,95,101,95,49,0);
          let selectionf = String.fromCharCode(106,95,56,52,95,115,97,110,105,116,121,0);
         whitetickt = `${(renderc == String.fromCharCode(119,0) ? iconrefreshH.size : renderc.length)}`;
         iconrefreshH = new Map([[selectionf, 2 * selectionf.length]]);
         privacyO += `${selectionf.length / (Math.max(2, 1))}`;
         logoM = `${logoM.length}`;
      }
         searchbarr <<= Math.min(Math.abs(3), 1);
      ping0 += 2 | catagoryR.length;
   for (let w = 0; w < 2; w++) {
      orangeK = 96 == changei;
   }
      orangeK = changei >= 21 && rewardvideo0.size >= 21;
   do {
       let arrowrightwithtailZ = String.fromCharCode(101,95,52,53,95,109,105,108,108,105,115,101,99,111,110,100,115,0);
       let application0 = [366, 548, 462];
       let controlz = false;
      if (arrowrightwithtailZ.length >= 2) {
         arrowrightwithtailZ += "3";
      }
         application0.push(application0.length - 1);
         arrowrightwithtailZ = `${application0.length}`;
      for (let v = 0; v < 1; v++) {
         application0 = [((controlz ? 2 : 3) % (Math.max(arrowrightwithtailZ.length, 3)))];
      }
         controlz = 26 <= arrowrightwithtailZ.length;
         controlz = arrowrightwithtailZ == String.fromCharCode(73,0);
      for (let u = 0; u < 2; u++) {
         application0 = [2];
      }
          let defaultroombga = 3.0;
          let type_rhG = new Map([[String.fromCharCode(101,113,117,101,115,116,95,113,95,53,50,0),592], [String.fromCharCode(104,97,114,100,99,111,100,101,100,95,106,95,57,53,0),669]]);
         controlz = defaultroombga == 67.50;
         defaultroombga *= type_rhG.size;
         type_rhG[`${type_rhG.size}`] = type_rhG.size * 1;
         application0.push(arrowrightwithtailZ.length);
      related1 = (incidentx.size >> (Math.min(4, application0.length))) <= 26;
      if (related1 ? !related1 : related1) {
         break;
      }
   } while ((related1 ? !related1 : related1) && (5.51 > (5.11 - short__O)));
   if ((baselineG.size - 2) < 5 || baselineG.size < 2) {
       let albumK = [584, 619];
       let iconcalendarj = String.fromCharCode(101,95,51,57,95,97,116,104,0);
       let turndownk = [439, 278];
       let upgrade7 = String.fromCharCode(99,97,98,97,99,95,54,95,53,55,0);
          let eventsplashZ = String.fromCharCode(100,95,51,56,95,104,117,102,102,121,117,118,0);
         turndownk.push(eventsplashZ.length + 3);
      if (iconcalendarj.length >= upgrade7.length) {
         iconcalendarj = `${(String.fromCharCode(53,0) == iconcalendarj ? iconcalendarj.length : albumK.length)}`;
      }
         iconcalendarj += `${1 * iconcalendarj.length}`;
          let minimizem = 0.0;
         upgrade7 = `${iconcalendarj.length ^ turndownk.length}`;
         minimizem /= Math.max(5, parseFloat(`${parseInt(`${minimizem}`)}`));
      while (upgrade7.includes(`${turndownk.length}`)) {
         turndownk = [1 - albumK.length];
         break;
      }
         turndownk = [turndownk.length + 2];
          let viewsj = 4.0;
         albumK = [parseInt(`${viewsj}`) & upgrade7.length];
      do {
         iconcalendarj += `${turndownk.length}`;
         if (3089094 == iconcalendarj.length) {
            break;
         }
      } while ((3 < (2 & iconcalendarj.length) && 2 < (iconcalendarj.length & turndownk.length)) && (3089094 == iconcalendarj.length));
          let confirmationj = String.fromCharCode(100,120,116,121,95,107,95,56,0);
          let dicelogo6 = true;
         turndownk.push((upgrade7 == String.fromCharCode(99,0) ? upgrade7.length : albumK.length));
         confirmationj = `${confirmationj.length}`;
         dicelogo6 = (((dicelogo6 ? confirmationj.length : 33) % (Math.max(confirmationj.length, 1))) >= 33);
         iconcalendarj += `${albumK.length}`;
         turndownk.push(3 + albumK.length);
      for (let h = 0; h < 2; h++) {
          let sidei = false;
         albumK = [2];
      }
      orangeK = albumK.includes(orangeK);
   }

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
