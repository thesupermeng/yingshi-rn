import {View, Image, Text} from 'react-native';
import {
  Goal,
  SubIn,
  SubOut,
  OwnGoal,
  Assist,
  PenaltyGoal,
  PenaltyShootNoGoal,
  CornerKick,
  YellowCard,
  RedCard,
  YellowToRedCard,
  VideoVAR,
  ShootYesGoal,
  ShootNoGoal,
} from '../../assets';
import styles from './wawa_hiad_iconnewchat';

const FootballIconComponent = ({showLessIcon = false}) => {
  return (
    <View style={styles.mainContainer}>
      {!showLessIcon ? (
        <View style={{marginLeft: "auto", marginRight: "auto", width: '90%'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={Goal} />
              <Text style={styles.imageText}>进球</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={ShootYesGoal} />
              <Text style={styles.imageText}>射正</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={ShootNoGoal} />
              <Text style={styles.imageText}>射偏</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={PenaltyGoal} />
              <Text style={styles.imageText}>点球</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={PenaltyShootNoGoal} />
              <Text style={styles.imageText}>点球未进</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={OwnGoal} />
              <Text style={styles.imageText}>乌龙球</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={Assist} />
              <Text style={styles.imageText}>助攻</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={CornerKick} />
              <Text style={styles.imageText}>角球</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={YellowCard} />
              <Text style={styles.imageText}>黄牌</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={RedCard} />
              <Text style={styles.imageText}>红牌</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={YellowToRedCard} />
              <Text style={styles.imageText}>红黄两变</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={SubIn} />
              <Text style={styles.imageText}>上场</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={SubOut} />
              <Text style={styles.imageText}>下场</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={VideoVAR} />
              <Text style={styles.imageText}>视频裁判</Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={{marginLeft: "auto", marginRight: "auto", width: '90%'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={Goal} />
              <Text style={styles.imageText}>进球</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={PenaltyGoal} />
              <Text style={styles.imageText}>点球</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={PenaltyShootNoGoal} />
              <Text style={styles.imageText}>点球未进</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={OwnGoal} />
              <Text style={styles.imageText}>乌龙球</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={Assist} />
              <Text style={styles.imageText}>助攻</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={YellowCard} />
              <Text style={styles.imageText}>黄牌</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={RedCard} />
              <Text style={styles.imageText}>红牌</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={YellowToRedCard} />
              <Text style={styles.imageText}>红黄两变</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={SubIn} />
              <Text style={styles.imageText}>上场</Text>
            </View>
            <View style={styles.imageDiv}>
              <Image style={styles.imageStyle} source={SubOut} />
              <Text style={styles.imageText}>下场</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default FootballIconComponent;
