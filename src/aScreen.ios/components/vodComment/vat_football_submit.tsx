import { useNavigation, useTheme } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "../common/gwi_with";
import { WQRReducer } from "@type/wpk_long";
import CommentIcon from '@static/images/comment.svg';
import { CommentCard } from "./qm_modal";

type DBLMorePoint = {
    comments: WQRReducer[],
    onlyShow?: number,
    showAllCommentBtn?: boolean,
    onCommentTap: () => void,
}

export const VodCommentBox = ({
    comments,
    onlyShow = 3,
    showAllCommentBtn,
    onCommentTap,
}: DBLMorePoint) => {
    const { colors, textVariants } = useTheme();
    const navigation = useNavigation();

    return (
        <View>
            <Text style={{ ...textVariants.bodyBold }}>
                影评 ({comments.length})
            </Text>
            { }
            {comments.length === 0 && (
                <View
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingVertical: 16,
                    }}
                >
                    <CommentIcon width={100} height={100} />
                    <Text style={{
                        ...textVariants.subBody,
                        color: colors.muted,
                        marginTop: 16,
                    }}>
                        暂无评论，快来发第一条评论吧
                    </Text>
                </View>
            )}

            { }
            {comments.slice(0, onlyShow).map((comment) => (
                <CommentCard
                    key={comment.douban_reviews_id}
                    commentItem={comment} />
            ))}

            {(showAllCommentBtn || comments.length > onlyShow) && (
                <TouchableOpacity activeOpacity={0.85}
                    onPress={onCommentTap}
                >
                    <View style={{ paddingVertical: 18, alignItems: 'center' }}>
                        <Text
                            style={{ ...textVariants.small, color: colors.primary, fontWeight: 'bold' }}
                        >
                            查看全部
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
}