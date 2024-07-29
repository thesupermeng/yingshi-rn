import { useNavigation, useTheme } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "../common/customFastImage";
import { CommentsType } from "@type/ajaxTypes";
import CommentIcon from '@static/images/comment.svg';
import { CommentCard } from "./commentCard";

type VodCommentBoxProps = {
    comments: CommentsType[],
    commentLength?: number,
    onlyShow?: number,
    showAllCommentBtn?: boolean,
    onCommentTap: () => void,
}

export const VodCommentBox = ({
    comments,
    commentLength,
    onlyShow = 3,
    showAllCommentBtn,
    onCommentTap,
}: VodCommentBoxProps) => {
    const { colors, textVariants } = useTheme();
    const navigation = useNavigation();

    return (
        <View>
            <Text style={{ ...textVariants.body }}>
                影评 ({commentLength ?? comments.length})
            </Text>
            {/* ========== no comment ========== */}
            {comments.length === 0 && (
                <View
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingVertical: 16,
                    }}
                >
                    <CommentIcon />
                    <Text style={{
                        ...textVariants.subBody,
                        color: colors.muted,
                        marginTop: 16,
                    }}>
                        暂无评论，快来发第一条评论吧
                    </Text>
                </View>
            )}

            {/* ========== has comment ========== */}
            {comments.slice(0, onlyShow).map((comment) => (
                <CommentCard
                    key={comment.douban_reviews_id}
                    commentItem={comment} />
            ))}

            {(showAllCommentBtn || comments.length > onlyShow) && (
                <TouchableOpacity
                    onPress={onCommentTap}
                >
                    <View style={{ paddingVertical: 18, alignItems: 'center' }}>
                        <Text
                            style={{ ...textVariants.small, color: colors.primary }}
                        >
                            查看全部
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
}