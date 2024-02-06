import React from "react";
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
import FastImage from "../common/customFastImage";
interface Props {
  uri?: any;
  source?: number;
  index: number;
  isLast?: boolean;
}

function SplashCard({ uri, source, index, isLast = false }: Props) {
  const { colors, textVariants, spacing } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      {/* <Text style={{color:'#ffffff'}}>asdasdsdas</Text> */}
      <FastImage
        key={`slider-${index}`}
        style={styles.image}
        source={source ?? {
          uri: uri
        }}
        resizeMode={"cover"}
        useFastImage={true}
      ></FastImage>
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
