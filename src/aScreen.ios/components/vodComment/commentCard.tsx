import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActionSheetIOS } from "react-native";
import FastImage from "react-native-fast-image";
import { CommentsType } from "@type/ajaxTypes";
import { CPopup } from "@utility/popup";
// import DefaultProfileIcon from "@static/images/default_profile.svg";
import { useAppDispatch } from "@hooks/hooks";
import { ReportBottomSheet } from "../bottomSheet/reportBottomSheet";

interface Props {
  commentItem: CommentsType;
}

enum ReportType {
  色情低俗 = '色情低俗',
  广告 = '广告',
  令人恶心 = '令人恶心',
  违纪违法 = '违纪违法',
  政治敏感 = '政治敏感',
}

export const CommentCard = ({ commentItem }: Props) => {
  const { textVariants, colors } = useTheme();
  const dispatch = useAppDispatch();

  const [showReportModel, setShowReportModel] = useState(false);

  const handlePress = async () => {
    setShowReportModel(true);
  };

  const onReportSubmit = (type: ReportType) => {
    setShowReportModel(false);
    console.log('type: ', type)
    setTimeout(() => {
      CPopup.showToast('我们将在24小时内处理您的请求，并在确认存在违规行为后才去适当的措施来处理相关内容。');
    }, 100);
  }

  return (
    <View style={styles.container}>
      {/* <DefaultProfileIcon
        width={42}
        height={42}
      /> */}
      <View style={{ ...styles.commentContainer }}>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Text style={{ ...textVariants.bodyBold, flex: 1 }}>
            {commentItem.user_name}
          </Text>
          <TouchableOpacity activeOpacity={0.85}
            onPress={handlePress}
            style={styles.btnContainer}>
            <Text style={{ ...textVariants.small, textAlign: 'center' }}>
              举报
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.85}
            onPress={() => CPopup.showToast("拉黑成功！已不能在接受对方的消息！")}
            style={styles.btnContainer}>
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

      <ReportBottomSheet
        isVisible={showReportModel}
        selections={Object.values(ReportType)}
        onButtonPress={(type) => onReportSubmit(type as ReportType)}
        onBackdropPress={() => setShowReportModel(false)}
        onCancelPress={() => setShowReportModel(false)}
      />
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