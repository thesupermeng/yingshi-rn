import React, { useEffect, useState } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackScreenProps } from "../types/navigationTypes";
import { CommentCard } from "../components/vodComment/commentCard";
import { commentsType } from "../types/ajaxTypes";
import ScreenContainer from "../components/container/screenContainer";
import TitleWithBackButtonHeader from "../components/header/titleWithBackButtonHeader";
import { useTheme } from "@react-navigation/native";
import { userModel } from "../types/userType";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { RootState } from "../redux/store";
import SubmitBtn from "../../static/images/submitBtn.svg"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "../redux/actions/screenAction";


export const AllCommentScreen = ({ navigation, route }: RootStackScreenProps<"全部评论">) => {
  const { vod_douban_id, vod_name, commentItems } = route.params;
  const { colors, textVariants, } = useTheme();
  const [comment, setComment] = useState('');
  const [allComment, setAllComment] = useState<commentsType[] | undefined>([]);
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );
  const [isUpdated, setIsUpdated] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScreenContainer
      // footer={
      //   <View style={{ ...styles.commentContainer, backgroundColor: '#1D2023' }}>
      //     <TextInput
      //       style={{
      //         ...styles.input,
      //         backgroundColor: '#FFFFFF1A',
      //         ...textVariants.body,
      //       }}
      //       onChangeText={setComment}
      //       placeholder={userState.userToken !== '' ? "请评论" : "请登录才进行评论"}
      //       editable={userState.userToken !== ''}
      //       placeholderTextColor={colors.muted}
      //       value={comment}
      //       maxLength={200}
      //       blurOnSubmit
      //     />

      //     {userState.userToken !== '' ? (
      //       <>
      //         <Text style={{ ...textVariants.body, color: comment.length === 200 ? colors.primary : colors.muted }}>
      //           {comment.length}/200
      //         </Text>
      //         <TouchableOpacity
      //           onPress={() => {
      //             setComment('');
      //             storeUserComments();
      //           }}
      //         >
      //           <SubmitBtn fill={comment.length ? "#FAC33D" : "#3A3A3A"} />
      //         </TouchableOpacity>
      //       </>
      //     ) : (
      //       <TouchableOpacity
      //         onPress={() => dispatch(showLoginAction())}
      //       >
      //         <Text style={{ ...textVariants.body, color: colors.primary }}>
      //           立即登录
      //         </Text>
      //       </TouchableOpacity>                  
      //     )}
      //   </View>
      // }
      >
        <TitleWithBackButtonHeader
          title={vod_name + " - 全部评论 (" + commentItems.length + ")"}
          backBtnStyle={{
            left: 30,
          }}
        />

        <FlatList
          data={commentItems}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }: { item: commentsType, index: number }) => {
            return (
              <CommentCard
                key={index}
                commentItem={item}
              />
            );
          }}
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