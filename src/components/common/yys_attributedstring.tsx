import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "@react-navigation/native";

import { memo } from "react";
import { ImageStyle } from "react-native-fast-image";
import FastImage from "../common/yys_vertical_collection";
interface yys_ConfigureUimanager {
  uri?: any;
  source?: number;
  index: number;
  isLast?: boolean;
}

function SplashCard({ uri, source, index, isLast = false }: yys_ConfigureUimanager) {
  const { colors, textVariants, spacing } = useTheme();
  const [isLoadImg, setLoadImg] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center' }}>
      {/* <Text style={{color:'#ffffff'}}>asdasdsdas</Text> */}
      <FastImage
        key={`slider-${index}`}
        style={styles.image}
        source={source ?? {
          uri: uri
        }}
        resizeMode={"cover"}
        onLoadStart={() => setLoadImg(true)}
        onLoadEnd={() => setLoadImg(false)}
      />
      {isLoadImg &&
        <FastImage
          style={{ position: 'absolute', alignSelf: 'center', width: 80, height: 80 }}
          source={require('@static/images/cancelSigmobLibzeus.gif')}
          resizeMode={'contain'}
          useFastImage={true}
        />
      }
    </View>
  );
}

export default memo(SplashCard);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
