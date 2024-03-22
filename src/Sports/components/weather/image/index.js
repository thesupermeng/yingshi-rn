import Humidity from './indicator/default_59PlayPing.png';
import Pressure from './indicator/rightFoundMath.png';
import Temperature from './indicator/emptyMinimize.png';
import Wind from './indicator/sendGestures.png';

export {Humidity, Pressure, Temperature, Wind};

export const weatherIndicatorImage = [
  {
    type: 0,
    name: '没有天气资料',
    background: require('./background/changeStore.png'),
    icon: require('./icon/changeStore.png'),
  },
  {
    type: 1,
    name: '局部有云',
    background: require('./background/backgroundGoalSheet.png'),
    icon: require('./icon/backgroundGoalSheet.png'),
  },
  {
    type: 2,
    name: '多云',
    background: require('./background/taiwanPlaceholderFeedback.png'),
    icon: require('./icon/taiwanPlaceholderFeedback.png'),
  },
  {
    type: 3,
    name: '局部有云/雨',
    background: require('./background/appleSpinner.png'),
    icon: require('./icon/appleSpinner.png'),
  },
  {
    type: 4,
    name: '雪',
    background: require('./background/backwardKick.png'),
    icon: require('./icon/backwardKick.png'),
  },
  {
    type: 5,
    name: '晴',
    background: require('./background/changeStore.png'),
    icon: require('./icon/changeStore.png'),
  },
  {
    type: 6,
    name: '阴有雨/局部有暴雨',
    background: require('./background/indexDescription_caAssist.png'),
    icon: require('./icon/indexDescription_caAssist.png'),
  },
  {
    type: 7,
    name: '阴',
    background: require('./background/customSearch.png'),
    icon: require('./icon/customSearch.png'),
  },
  {
    type: 8,
    name: '薄雾',
    background: require('./background/backgroundNotificationSentry.png'),
    icon: require('./icon/backgroundNotificationSentry.png'),
  },
  {
    type: 9,
    name: '阴有雨',
    background: require('./background/backgroundNotificationSentry.png'),
    icon: require('./icon/trashEventTwitter.png'),
  },
  {
    type: 10,
    name: '多云有雨',
    background: require('./background/dangerKickMatch.png'),
    icon: require('./icon/dangerKickMatch.png'),
  },
  {
    type: 11,
    name: '多云有雨/局部有暴雷',
    background: require('./background/settingsTurnSplash.png'),
    icon: require('./icon/settingsTurnSplash.png'),
  },
  {
    type: 12,
    name: '多云有云/雨和暴雨',
    background: require('./background/countryPenaltyMembership.png'),
    icon: require('./icon/countryPenaltyMembership.png'),
  },
  {
    type: 13,
    name: '雾',
    background: require('./background/liveMalaysiaContext.png'),
    icon: require('./icon/liveMalaysiaContext.png'),
  },
];
