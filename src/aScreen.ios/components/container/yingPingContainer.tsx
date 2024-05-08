import { useFocusEffect, useNavigation, useTheme } from "@react-navigation/native";
import React, { useCallback, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image";
import Logo from '@static/images/ying_ping_logo.svg';
import { useAppDispatch } from "@hooks/hooks";
import { playVod } from "@redux/actions/vodActions";
import { Vod } from "@models";
import { VodCommentBox } from "../vodComment";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  vod: Vod;
  width: number;
  imgRatio: number;
  isSlide: boolean;
}

export const YingPingContainer = ({ vod, width, imgRatio, isSlide }: Props) => {
  const { colors, textVariants, spacing } = useTheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [comments, setComments] = useState<any[]>([]);
  const [localComments, setLocalComments] = useState<any[]>([]);
  const pTagRegex = /(<p>|<\/p>)/g;

  const handleOnPress = () => {
    dispatch(playVod(vod));
    navigation.navigate('播放IOS', {
      vod_id: vod.vod_id,
    });
  }

  const getLocalComments = async () => {
    try {
      const locCommentId = "userComment" + vod.vod_id;

      const comments = await AsyncStorage.getItem(locCommentId);

      if (comments !== null) {
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {
      console.log("error when retrieving local comments: ", error);
      return [];
    }
  };

  useFocusEffect(useCallback(() => {
    getLocalComments().then((result: any[]) => {
      if (result && result.length > 0) {
        setLocalComments(result);
        setComments([...result, ...vod?.douban_reviews]);
        return;
      }
      setComments(vod?.douban_reviews ?? []);
    });
  }, []));

  return (
    <>
      {isSlide ? (
        <TouchableOpacity
          style={styles.slideVideoDescription}
          onPress={handleOnPress}
        >
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', }}>
            <Logo width={30} height={31} />
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
          <View style={{ gap: 3 }}>
            <Text style={{ ...textVariants.bodyBold }}>
              {vod.vod_name}
            </Text>
            <Text style={{ ...textVariants.subBody, color: colors.muted }}>
              {vod.type_name}
            </Text>
          </View>
          <View style={{ marginTop: 10, }}>
            <VodCommentBox
              comments={comments}
              commentLength={vod?.total_douban_review + localComments.length}
              onlyShow={2}
              showAllCommentBtn={true}
              onCommentTap={() => {
                navigation.navigate("全部评论", {
                  vod_id: vod.vod_id,
                  vod_name: vod.vod_name,
                  vod_douban_id: vod?.vod_douban_id,
                });
              }}
            />
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
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', }}>
              <Logo width={30} height={31} />
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