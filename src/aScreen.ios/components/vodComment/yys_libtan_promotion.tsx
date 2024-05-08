import { useNavigation, useTheme } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "../common/yys_vertical_collection";
import { yys_InviteAway } from "@type/yys_libzeus";
import CommentIcon from '@static/images/debugWeiboGoogle.svg';
import { CommentCard } from "./yys_qaag";

type yys_ThemeSuccess = {
    comments: yys_InviteAway[],
    onlyShow?: number,
    onCommentTap: () => void,
}

export const VodCommentBox = ({
    comments,
    onlyShow = 3,
    onCommentTap,
}: yys_ThemeSuccess) => {
    const { colors, textVariants } = useTheme();
    const navigation = useNavigation();

    return (
        <View>
            <Text style={{ ...textVariants.body }}>
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

            { }
            {comments.slice(0, onlyShow).map((comment) => (
                <CommentCard
                    key={comment.douban_reviews_id}
                    commentItem={comment} />
            ))}

            {comments.length > onlyShow && (
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