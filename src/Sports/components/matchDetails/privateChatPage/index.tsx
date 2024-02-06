import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, View } from "react-native"
import createStyles from "./style";
import { useAppDispatch, useSelector } from "@hooks/hooks";
import { CPressable, CTextInput } from "../../../../components/atoms";
import SendIcon from '@static/images/send.svg';
import SendFillIcon from '@static/images/send_filled.svg';
import { COMMENT_MAX_INPUT } from "@utility/constants";
import { LiveChatMessageType } from "@type/ajaxTypes";
import { ChatType } from "@redux/reducers/chatReducer";
import { joinChatRoom, leaveChatRoom, sendChatMessage } from "@redux/actions/chatAction";
import { Streamer } from "../../../types/matchTypes";
import { useTheme } from "@react-navigation/native";
import { Avatar } from "@rneui/base";
import { PrivateRoomHistoryType, PrivateRoomType } from "@type/chatTypes";
import { debounce } from "lodash";
import { UnreadCard } from "../../../../components/chat/unread";
import { UserStateType } from "@redux/reducers/userReducer";

type Props = {
    matchID: string,
    streamer: Streamer,
    sportType: string,
    onInputFocus?: (isFocus: boolean) => void,
}

const PrivateChatPage = ({
    matchID,
    streamer,
    sportType,
    onInputFocus,
}: Props) => {
    const PIN_YIN_ACCEPTED = 20;

    const { colors } = useTheme();
    const styles = useMemo(() => createStyles({ colors }), []);

    const chatState = useSelector<ChatType>('chatReducer');
    const userState = useSelector<UserStateType>('userReducer');
    const [comment, setComment] = useState('');
    const [historyChat, sethistoryChat] = useState<PrivateRoomHistoryType[]>([]);
    const [isCommentValid, setCommentValid] = useState(true);
    const chatFlatListRef = useRef<FlatList<PrivateRoomHistoryType> | null>(null);
    const isPinToBottom = useRef(true);
    const [numOfUnread, setNumOfUnread] = useState(0);
    const isLogin = userState.user !== null && userState.user.isLogin();

    const appDispatch = useAppDispatch();

    useEffect(() => {
        appDispatch(joinChatRoom({
            roomId: matchID,
            isPrivate: true,
            sportType: sportType,
        }));

        return () => {
            appDispatch(leaveChatRoom({
                isPrivate: true,
            }));
        }
    }, []);

    useEffect(() => {
        if (chatState.privateRoom !== null && historyChat.length === 0) {
            getHistory();
        }
    }, [chatState.privateRoom]);

    const getHistory = debounce(() => {
        const histories = chatState.privateRoomHistory?.filter(e => e.roomId === `private:${matchID}` && e.userId === chatState.userId);

        if (!histories || histories.length === 0) return;

        if (historyChat.length === 0) {
            sethistoryChat([histories[histories.length - 1]]);
        } else {
            const indexFound = histories.findIndex(e => e.joinDate === historyChat[0].joinDate);

            if (indexFound === -1 || (indexFound - 1) < 0) return;

            sethistoryChat(prev => [histories[indexFound - 1]].concat(prev));
        }
    }, 500);

    const renderChatGroup = useCallback(({ item }: { item: PrivateRoomType }) => {
        const groupDate = new Date(item.joinDate!);

        return (
            <View>
                {item.joinDate &&
                    <Text style={styles.chatGroupText}>
                        {groupDate.toISOString().slice(0, 10).replace('T', ' ').replace(/\//g, "-").concat(' ')}
                        {String(groupDate.getHours()).padStart(2, '0')}:
                        {String(groupDate.getMinutes()).padStart(2, '0')}
                    </Text>
                }
                <FlatList
                    keyExtractor={(item) => item.createAt}
                    data={item.messages}
                    renderItem={renderMessageItem}
                    style={styles.chatlistContainer}
                    ItemSeparatorComponent={renderSeparator}
                    scrollEnabled={false}
                />
            </View>
        );
    }, [chatState.userId]);

    const renderMessageItem = useCallback(({ item }: { item: LiveChatMessageType }) => {
        if (item.userId === chatState.userId) {
            return (
                <View style={styles.chatRightContainer}>
                    <View style={styles.chatTextRightContainer}>
                        <View style={styles.chatMessageRightContainer}>
                            <Text style={styles.chatText}>
                                {item.message}
                            </Text>
                        </View>

                        <View style={styles.chatTriangleRightContainer} />
                    </View>

                    <Avatar
                        source={false // put condition when user got profile pic
                            ? { uri: '' } // put user profile pic
                            : require("@static/images/profilePic.png")
                        }
                        avatarStyle={{
                            borderRadius: 100,
                        }}
                        containerStyle={{
                            marginLeft: 10,
                        }}
                    />
                </View>
            );
        }

        return (
            <View style={styles.chatLeftContainer}>
                <Avatar
                    source={streamer && streamer.avatar && streamer.avatar !== ''
                        ? { uri: streamer.avatar }
                        : require("@static/images/profilePic.png")
                    }
                    avatarStyle={{
                        borderRadius: 100,
                    }}
                    containerStyle={{
                        marginRight: 10,
                    }}
                />

                <View style={styles.chatTextLeftContainer}>
                    <View style={styles.chatTriangleLeftContainer} />

                    <View style={styles.chatMessageLeftContainer}>
                        <Text style={styles.chatText}>
                            {item.message}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }, [chatState.userId]);

    const renderSeparator = useCallback(() => (
        <View style={{ height: 10, }} />
    ), []);

    const onChangeComment = useCallback((value: any) => {
        if (value.length > (COMMENT_MAX_INPUT + PIN_YIN_ACCEPTED)) return;

        setComment(value);
        validateComment(value);
    }, []);

    const validateComment = useCallback((value: string) => {
        if (value.length <= COMMENT_MAX_INPUT) {
            setCommentValid(true);
            return;
        }

        setCommentValid(false);
    }, []);

    const onSubmitComment = useCallback(() => {
        if (comment.trim().length === 0 || !isCommentValid) return;

        appDispatch(sendChatMessage({
            message: comment,
            isPrivate: true,
        }));

        setComment('');
        Keyboard.dismiss();
    }, [isCommentValid, comment]);

    const onUserScroll = () => {
        if (isPinToBottom.current) isPinToBottom.current = false;
    }

    const onMomentumScrollEnd = (e: any) => {
        if (!isPinToBottom.current) {
            const currentYBottom = e.nativeEvent.contentOffset.y + e.nativeEvent.layoutMeasurement.height;

            if (Math.round(currentYBottom) === Math.round(e.nativeEvent.contentSize.height)) {
                isPinToBottom.current = true;
                setNumOfUnread(0);
            }
        }

        if (e.nativeEvent.contentOffset.y === 0) {
            getHistory();
        }
    }

    const onReconnect = () => {
        appDispatch(joinChatRoom({
            roomId: matchID,
            isPrivate: true,
            sportType: sportType,
        }));
    }

    const onFlatlistChange = (w: number, h: number) => {
        if (isPinToBottom.current && chatFlatListRef.current) {
            chatFlatListRef.current?.scrollToOffset({
                offset: h,
            });
        }
    }

    const onUnreadPress = () => {
        const maxLenght = chatState.liveRoom?.messages.length ?? 0;

        chatFlatListRef.current?.scrollToIndex({
            index: maxLenght !== 0 ? maxLenght - 1 : 0,
            viewPosition: 1,
        });
        setNumOfUnread(0);
    }

    useEffect(() => {
        if ((chatState.liveRoom?.messages.length ?? 0) > 0 && isPinToBottom.current == false) {
            setNumOfUnread(prev => prev + 1);
        }
    }, [chatState.liveRoom?.messages.length])

    return (
        <View style={styles.container}>
            <FlatList
                ref={ref => chatFlatListRef.current = ref}
                keyExtractor={(item) => item.joinDate!.toString()}
                data={historyChat.concat(chatState.privateRoom !== null
                    ? { ...chatState.privateRoom, userId: chatState.userId }
                    : []
                )}
                renderItem={renderChatGroup}
                style={styles.chatlistContainer}
                ItemSeparatorComponent={renderSeparator}
                onTouchStart={onUserScroll}
                onMomentumScrollEnd={onMomentumScrollEnd}
                onContentSizeChange={onFlatlistChange}
            />

            {!chatState.privateRoom === null &&
                <View style={styles.disconnectChatContainer}>
                    <Text style={styles.chatText}>
                        {'聊天室链接失败。'}
                    </Text>
                    <CPressable onPress={onReconnect}>
                        <Text style={styles.chatNameText}>
                            {'重新加载'}
                        </Text>
                    </CPressable>
                </View>
            }

            {numOfUnread > 0 &&
                <UnreadCard
                    text={numOfUnread}
                    onPress={onUnreadPress}
                    style={{
                        position: 'absolute',
                        bottom: 70,
                        left: 0,
                        right: 0,
                    }}
                />
            }

            <View style={styles.commentInputContainer}>
                <CTextInput
                    style={styles.commentInput}
                    placeholder={!isLogin ? '登入即可发言' : '发送消息'}
                    value={comment}
                    onChangeText={onChangeComment}
                    maxLength={COMMENT_MAX_INPUT + PIN_YIN_ACCEPTED}
                    disabled={!isLogin}
                    onFocus={() => {
                        if (onInputFocus) onInputFocus(true);
                    }}
                    onBlur={() => {
                        if (onInputFocus) onInputFocus(false);
                    }}
                />

                <Text style={isCommentValid ? styles.commentText : styles.commentInvalidText}>
                    {comment.length} / {COMMENT_MAX_INPUT}
                </Text>

                <CPressable onPress={onSubmitComment}>
                    {comment.trim().length > 0 && isCommentValid
                        ? <SendFillIcon />
                        : <SendIcon style={{ marginLeft: 5, marginRight: 5 }} />
                    }
                </CPressable>
            </View>
        </View>
    );
};

export default memo(PrivateChatPage);
