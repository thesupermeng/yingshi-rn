import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActionSheetIOS } from "react-native";
import FastImage from "react-native-fast-image";
import { commentsType } from "../../types/ajaxTypes";
import { showToast } from "../../Sports/utility/toast";
import DefaultProfileIcon from "../../../static/images/default_profile.svg";
import { useAppDispatch } from "../../hooks/hooks";
import { showReportAction } from "../../redux/actions/screenAction";

interface Props {
  commentItem: commentsType;
}

export const CommentCard = ({commentItem}: Props) => {
  const {textVariants, colors} = useTheme();
  const dispatch = useAppDispatch();

  const handlePress = async () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['取消', '色情低俗', '广告', '令人恶心', '违纪违法', '政治敏感'],
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
        tintColor: colors.primary,
      },
      buttonIndex => {
        if (buttonIndex !== 0) {
          showToast("我们将在24小时内处理您的请求，并在确认存在违规行为后采取适当的措施来处理相关内容。")
        }
      },
    );
    
  };

  return (
    <View style={styles.container}>
      {/* <DefaultProfileIcon
        width={42}
        height={42}
      /> */}
      <View style={{...styles.commentContainer}}>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Text style={{...textVariants.bodyBold, flex: 1}}>
            {commentItem.user_name}
          </Text>
          <TouchableOpacity 
            onPress={handlePress}
            style={styles.btnContainer}>
            <Text style={{ ...textVariants.small, textAlign: 'center'}}>
              举报
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => showToast("拉黑成功！已不能在接受对方的消息！")}
            style={styles.btnContainer}>
            <Text style={{ ...textVariants.small, textAlign: 'center'}}>
              拉黑
            </Text>
          </TouchableOpacity>
        </View>
        
        <Text
          style={{ ...textVariants.subBody, color: colors.muted}}
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