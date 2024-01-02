import {Image, ImageBackground, Text, View} from 'react-native';
import {
  Humidity,
  Pressure,
  Temperature,
  weatherIndicatorImage,
  Wind,
} from './image/index';
import styles from './styles';

const Weather = props => {
  const {weather, venue} = props;
  // console.log('venue', venue);

  const type = weather?.weather; // 天气种类

  const weatherImg = weatherIndicatorImage.find(x => x.type === type);
  const defaultWeather = weatherIndicatorImage[0];

  const weatherName = weatherImg?.name ? weatherImg.name : defaultWeather.name;
  const icon = weatherImg?.icon ? weatherImg.icon : defaultWeather.icon; // 天气图标
  const background = weatherImg?.background
    ? weatherImg.background
    : defaultWeather.background; // 天气背景

  // 指标组件
  const Indicator = props => {
    const {icon, label, status} = props;
    return (
      <View style={styles.indicatorContainer}>
        <View style={styles.indicatorImageContainer}>
          <Image
            style={{width: 16, height: 16}}
            source={icon}
            resizeMode="contain"></Image>
          <View
            style={{
              display: 'flex',
              paddingLeft: 4,
            }}>
            <Text style={styles.textIndicator} numberOfLines={2}>
              {label}: {status}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{padding: 14}}>
      <ImageBackground
        style={styles.imageBackgroundContainer}
        source={background}
        imageStyle={{borderRadius: 3}}>
        <View style={styles.weatherType}>
          <View style={styles.weatherImageContainer}>
            <Image
              style={{width: 26, height: 26}}
              resizeMode="contain"
              source={icon}></Image>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingLeft: 4,
              }}>
              <Text numberOfLines={2} style={styles.textIcon}>
                {weatherName}
              </Text>
            </View>
          </View>
          {venue && (
            <View style={styles.venueContainer}>
              <Text style={styles.textVenue}>{venue?.name_zh}</Text>
            </View>
          )}
        </View>
        <View style={styles.weatherStat}>
          <Indicator
            icon={Humidity}
            label="湿度"
            status={weather?.humidity}></Indicator>
          <Indicator
            icon={Wind}
            label="风速"
            status={weather?.wind}></Indicator>
        </View>
        <View style={styles.weatherStat}>
          <Indicator
            icon={Temperature}
            label="温度"
            status={weather?.temperature}></Indicator>
          <Indicator
            icon={Pressure}
            label="气压"
            status={weather?.pressure}></Indicator>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Weather;
