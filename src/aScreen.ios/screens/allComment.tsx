import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackScreenProps } from "@type/navigationTypes";
import { CommentCard } from "../components/vodComment/commentCard";
import { CommentsType } from "@type/ajaxTypes";
import ScreenContainer from "../components/container/screenContainer";
import TitleWithBackButtonHeader from "../components/header/titleWithBackButtonHeader";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/hooks";
import { RootState } from "@redux/store";
import SubmitBtn from "@static/images/submitBtn.svg"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux/actions/screenAction";
import { CPopup } from "@utility/popup";
import { UserStateType } from "@redux/reducers/userReducer";
import { User } from "@models/user";

export const AllCommentScreen = ({ navigation, route }: RootStackScreenProps<"全部评论">) => {
  const { vod_id, vod_name, commentItems } = route.params;
  const { colors, textVariants, dark } = useTheme();
  const [comment, setComment] = useState('');
  const [allComment, setAllComment] = useState<CommentsType[] | undefined>([]);
  const userState = useSelector<UserStateType>('userReducer');
  const [isUpdated, setIsUpdated] = useState(false);
  const dispatch = useAppDispatch();

  const locCommentId = "userComment" + vod_id;
  const getLocalComments = async () => {
    try {
      const comments = await AsyncStorage.getItem(locCommentId);
      console.log("comments stored in local storage ", locCommentId);
      console.log(comments);

      if (comments !== null) {
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {
      console.log("error when retrieving local comments: ", error);
      return [];
    }
  };

  const storeUserComments = async () => {
    if (!comment) {
      return;
    }

    console.log('user comment', comment);
    try {
      const existingComments = await getLocalComments();
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      }
      existingComments.unshift(commmentObj);
      await AsyncStorage.setItem(locCommentId, JSON.stringify(existingComments));

      commentItems.unshift(commmentObj);
      setIsUpdated(!isUpdated);
      Keyboard.dismiss();
      CPopup.showToast("提交成功，我们将在24小时内进行审核！");

    } catch (error) {
      console.log("error when storing the comment into local storage: ", error);
    }
  };

  const renderItem = useCallback(
    ({ item, index }: { item: CommentsType, index: number }) => {
      return (
        <CommentCard
          key={index}
          commentItem={item}
        />
      );
    },
    [],
  );

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScreenContainer
        footer={
          <View style={{
            ...styles.commentContainer,
            backgroundColor: dark ? "#1d2023" : 'white',
            shadowColor: '#000000',
            shadowOpacity: 0.1,
            shadowRadius: 3,
          }}>
            <TextInput
              style={{
                ...styles.input,
                backgroundColor: dark ? "#FFFFFF1A" : '#D9D9D9',
                ...textVariants.body,
              }}
              onChangeText={setComment}
              placeholder={User.isLogin(userState.user) ? "请评论" : "请登录才进行评论"}
              editable={User.isLogin(userState.user)}
              placeholderTextColor={colors.muted}
              value={comment}
              maxLength={200}
              blurOnSubmit
            />

            {User.isLogin(userState.user) ? (
              <>
                <Text style={{ ...textVariants.body, color: comment.length === 200 ? colors.primary : colors.muted }}>
                  {comment.length}/200
                </Text>
                <TouchableOpacity activeOpacity={0.85}
                  onPress={() => {
                    setComment('');
                    storeUserComments();
                  }}
                >
                  <SubmitBtn fill={comment.length ? "#FAC33D" : "#3A3A3A"} />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity activeOpacity={0.85}
                onPress={() => dispatch(showLoginAction())}
              >
                <Text style={{ ...textVariants.body, color: colors.primary }}>
                  立即登录
                </Text>
              </TouchableOpacity>
            )}
          </View>
        }
      >
        <TitleWithBackButtonHeader
          title={vod_name + " - 全部评论 (" + commentItems.length + ")"}
          backBtnStyle={{
            left: 30,
          }}
        />

        <FlatList
          extraData={isUpdated}
          data={commentItems}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          removeClippedSubviews
          renderItem={renderItem}
        />
      </ScreenContainer>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  commentContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  input: {
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    flex: 3,
  },

});