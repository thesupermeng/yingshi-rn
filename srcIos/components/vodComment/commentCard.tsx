import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FastImage from "../../components/common/customFastImage";
import { commentsType } from "../../types/ajaxTypes";

interface Props {
  commentItem: commentsType;
}

export const CommentCard = ({ commentItem }: Props) => {
  const { textVariants, colors } = useTheme();

  return (
    <View style={styles.container}>
      <FastImage
        style={{
          height: 40,
          width: 40,
          marginRight: 5,
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
        source={require("../../../static/images/profilePic.png")}
      />
      <View style={{ ...styles.commentContainer }}>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Text style={{ ...textVariants.bodyBold, flex: 1 }}>
            {commentItem.user_name}
          </Text>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={{ ...textVariants.small, textAlign: 'center' }}>
              举报
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={{ ...textVariants.small, textAlign: 'center' }}>
              拉黑
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{ ...textVariants.subBody, color: colors.muted }}
          numberOfLines={3}
        >
          {commentItem.user_review}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 15,
  },
  commentContainer: {
    flex: 5,
    gap: 5,
  },
  btnContainer: {
    backgroundColor: '#EF1F1F',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 1,
  }
})