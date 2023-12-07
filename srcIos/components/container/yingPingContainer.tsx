import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image";
import { VodType } from "../../types/ajaxTypes";
import Logo from '../../../static/images/ying_ping_logo.svg';
import { useAppDispatch } from "../../hooks/hooks";
import { playVod } from "@redux/actions/vodActions";

interface Props {
  vod: VodType;
  width: number;
  imgRatio: number;
  isSlide: boolean;
}

export const YingPingContainer = ({vod, width, imgRatio, isSlide}: Props) => {
  const { colors, textVariants, spacing } = useTheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const pTagRegex = /(<p>|<\/p>)/g;
  
  const handleOnPress = () => {
    dispatch(playVod(vod));
    navigation.navigate('播放', {
        vod_id: vod.vod_id,
    });
  }

  return (
    <>
    {isSlide ? (
      <TouchableOpacity 
        style={styles.slideVideoDescription}
        onPress={handleOnPress}
      >
        <View style={{flexDirection: 'row', gap: 8, alignItems: 'center', }}>
          <Logo/>
          <Text style={{ ...textVariants.body }}>
            官方推荐
          </Text>
        </View>
        <Text
          style={{ ...textVariants.subBody, color: colors.muted }}
          numberOfLines={5}
        >
          {vod?.vod_content?.replace(pTagRegex, "")}
        </Text>
        <View 
          style={{
            width: width - spacing.sideOffset - spacing.sideOffset, 
            height: (width - spacing.sideOffset - spacing.sideOffset) / imgRatio,
          }}
        >
          <FastImage
            source={{ uri: 'https://yingshi.tv/' + vod.vod_pic_slide }}
            resizeMode={"cover"}
            style={styles.slideImage}
          />
        </View>
        <View style={{gap: 3}}>
          <Text style={{ ...textVariants.bodyBold }}>
            {vod.vod_name}
          </Text>
          <Text style={{ ...textVariants.subBody, color: colors.muted }}>
            {vod.type_name}
          </Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity 
        style={styles.videoDescription}
        onPress={handleOnPress}
      >
        <FastImage
          source={{ uri: vod.vod_pic }}
          resizeMode={"cover"}
          style={{
            ...styles.descriptionImage,
            ...styles.imageContainer,
          }}
        />
        <View style={styles.descriptionContainer}>
          <View style={{flexDirection: 'row', gap: 8, alignItems: 'center', }}>
            <Logo/>
            <Text style={{ ...textVariants.body }}>
              官方推荐
            </Text>
          </View>
          <Text style={{ ...textVariants.bodyBold }}>
            {vod.vod_name}
          </Text>
          <Text style={{ ...textVariants.subBody, color: colors.muted }}>
            {vod.type_name}
          </Text>
          <Text
            style={{ ...textVariants.subBody, color: colors.muted }}
            numberOfLines={3}
          >
            {vod?.vod_content?.replace(pTagRegex, "")}
          </Text>
        </View>
      </TouchableOpacity>
    )}
    </>
  )
}

const styles = StyleSheet.create({
  slideVideoDescription: {
    flexDirection: "column",
    width: "100%",
    gap: 10,
    marginBottom: 15,
  },
  videoDescription: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
  imageContainer: {
    flex: 2,
  },
  descriptionImage: {
    width: "100%",
    aspectRatio: 93 / 139,
    borderRadius: 10,
  },
  slideImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  descriptionContainer: {
    flex: 5,
    flexDirection: "column",
    gap: 5,
    paddingLeft: 12,
  },
});