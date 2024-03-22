import {Image, ImageBackground, Text, View} from 'react-native';
import {HomeTeamField, iconUser} from '../../../assets';
import Player from '../player';
import styles from './fgl_less_position';

const HomeTeam = props => {
       let combinev = 2.0;
    let phoneS = String.fromCharCode(112,95,54,56,95,116,114,97,110,0);
    let gemfileP = [869, 61, 459];
    let dangerj = String.fromCharCode(101,120,112,108,105,99,105,116,95,49,95,50,57,0);
    let favorite6 = 1.0;
    let screenX = new Map([[String.fromCharCode(121,95,52,56,95,122,111,111,109,0),String.fromCharCode(115,108,101,101,112,95,112,95,55,0)], [String.fromCharCode(98,107,116,114,95,51,95,53,53,0),String.fromCharCode(118,97,108,117,101,115,95,122,95,51,54,0)]]);
    let window_fN = 1;
    let formv = String.fromCharCode(108,95,50,52,95,108,105,110,101,98,114,101,97,107,0);
    let time_tA = false;
    let downloadery = 5;
    let routerY = String.fromCharCode(108,111,99,107,105,110,103,95,52,95,49,56,0);
    let firebase7 = [277, 727];
    let videoj = true;
    let zhuboE = false;
      combinev *= (parseFloat(`${formv == String.fromCharCode(102,0) ? screenX.size : formv.length}`));

  const {lineUp, netWorth} = props;
       let popup6 = String.fromCharCode(103,95,53,95,116,101,108,108,0);
      if (popup6.length < 1 && 1 < popup6.length) {
          let searchbar4 = [62, 175];
          let spec5 = String.fromCharCode(114,101,115,101,116,95,57,95,53,55,0);
          let tick0 = 3.0;
          let inviteN = 1;
          let showG = String.fromCharCode(114,95,50,52,95,114,116,112,119,0);
         popup6 = `${popup6.length & 2}`;
         searchbar4 = [inviteN & spec5.length];
         spec5 += `${inviteN}`;
         tick0 -= parseFloat(`${spec5.length}`);
         showG += `${1 * showG.length}`;
      }
          let handlerK = false;
         popup6 += `${popup6.length | 3}`;
         popup6 += `${popup6.length / 3}`;
      gemfileP = [2];



      const player = data => {
         return data.map(player => {
           return (
             <Player
               team="home"
               key={'homePlayer' + player.id}
               player={player}></Player>
           );
         });
       };
     
       const formation = data => {
         const shift = data.slice(1); // the first array is subsitution so need to slice
         return shift.map((row, idx) => {
           return (
             <View key={'homeRow' + idx} style={styles.playersRow}>
               {row.length > 0 && player(row)}
             </View>
           );
         });
       };
     
  return (
    <View style={styles.container}>
      {lineUp && formation(lineUp)}
      <View style={styles.netWorthContainer}>
        <Text style={styles.textPrice}>总身价: {netWorth}</Text>
      </View>
    </View>
  );
      combinev += (parseFloat(`${(time_tA ? 2 : 5) * parseInt(`${combinev}`)}`));

};
export default HomeTeam;
