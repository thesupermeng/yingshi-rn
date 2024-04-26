import { useNavigation, useTheme } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "../common/wawa_iconarrowrightblack";
import { wawaMintegralLibmapbufferjni } from "@type/wawa_gradlew";
import CommentIcon from '@static/images/modulesEditArmva.svg';
import { CommentCard } from "./wawa_backward_iconpipshrink";

type wawaIconshare = {
    comments: wawaMintegralLibmapbufferjni[],
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
}: wawaIconshare) => {
    const { colors, textVariants } = useTheme();
    const navigation = useNavigation();

    return (
        <View>
            <Text style={{ ...textVariants.body }}>
                影评 ({commentLength ?? comments.length})
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