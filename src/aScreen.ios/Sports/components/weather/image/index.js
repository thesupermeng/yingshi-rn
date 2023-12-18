import Humidity from './indicator/humidity.png';
import Pressure from './indicator/pressure.png';
import Temperature from './indicator/temperature.png';
import Wind from './indicator/wind.png';

export {Humidity, Pressure, Temperature, Wind};

export const weatherIndicatorImage = [
  {
    type: 0,
    name: '没有天气资料',
    background: require('./background/5.png'),
    icon: require('./icon/5.png'),
  },
  {
    type: 1,
    name: '局部有云',
    background: require('./background/1.png'),
    icon: require('./icon/1.png'),
  },
  {
    type: 2,
    name: '多云',
    background: require('./background/2.png'),
    icon: require('./icon/2.png'),
  },
  {
    type: 3,
    name: '局部有云/雨',
    background: require('./background/3.png'),
    icon: require('./icon/3.png'),
  },
  {
    type: 4,
    name: '雪',
    background: require('./background/4.png'),
    icon: require('./icon/4.png'),
  },
  {
    type: 5,
    name: '晴',
    background: require('./background/5.png'),
    icon: require('./icon/5.png'),
  },
  {
    type: 6,
    name: '阴有雨/局部有暴雨',
    background: require('./background/6.png'),
    icon: require('./icon/6.png'),
  },
  {
    type: 7,
    name: '阴',
    background: require('./background/7.png'),
    icon: require('./icon/7.png'),
  },
  {
    type: 8,
    name: '薄雾',
    background: require('./background/8.png'),
    icon: require('./icon/8.png'),
  },
  {
    type: 9,
    name: '阴有雨',
    background: require('./background/8.png'),
    icon: require('./icon/9.png'),
  },
  {
    type: 10,
    name: '多云有雨',
    background: require('./background/10.png'),
    icon: require('./icon/10.png'),
  },
  {
    type: 11,
    name: '多云有雨/局部有暴雷',
    background: require('./background/11.png'),
    icon: require('./icon/11.png'),
  },
  {
    type: 12,
    name: '多云有云/雨和暴雨',
    background: require('./background/12.png'),
    icon: require('./icon/12.png'),
  },
  {
    type: 13,
    name: '雾',
    background: require('./background/13.png'),
    icon: require('./icon/13.png'),
  },
];
