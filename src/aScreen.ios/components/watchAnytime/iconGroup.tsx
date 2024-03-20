import { FlatList, StyleSheet, Text, View } from "react-native";
import CommentIcon from '@static/images/comment.svg';
import BlacklistIcon from '@static/images/blacklist.svg';
import ReportIcon from '@static/images/report.svg';
import { TouchableOpacity } from "react-native-gesture-handler";
import { CPopup } from "@utility/popup";
import { CBottomSheet } from "../../components/atoms";
import { useMemo, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { ReportBottomSheet } from "../bottomSheet/reportBottomSheet";
import { CRouter } from "../../../routes/router";

enum ReportType {
    色情低俗 = '色情低俗',
    广告 = '广告',
    令人恶心 = '令人恶心',
    违纪违法 = '违纪违法',
    政治敏感 = '政治敏感',
}

type Props = {
    vodId: string,
    vodName: string,
    comments?: {
        douban_reviews: any[],
        total_review: number,
    },
}

export const IconGroup = ({
    vodId,
    vodName,
    comments,
}: Props) => {
    const { colors, textVariants } = useTheme();
    const styles = useMemo(() => createStyles({ colors }), [colors]);

    const [showReportModel, setShowReportModel] = useState(false);

    const onCommentPress = () => {
        CRouter.toName('全部评论', {
            params: {
                vod_id: vodId,
                vod_name: vodName,
                commentItems: comments?.douban_reviews ?? [],
            },
        });
    }

    const onBlackListPress = () => {
        CPopup.showToast('拉黑成功，已不再为您推荐此类内容');
    }

    const onReportPress = () => {
        setShowReportModel(true);
    }

    const onReportSubmit = (type: ReportType) => {
        setShowReportModel(false);
        console.log('type: ', type)
        setTimeout(() => {
            CPopup.showToast('我们将在24小时内处理您的请求，并在确认存在违规行为后才去适当的措施来处理相关内容。');
        }, 100);
    }

    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity onPress={onCommentPress} style={styles.iconBtn}>
                <CommentIcon {...styles.icon} />
                <Text style={{ ...textVariants.small, ...styles.iconText }}>{comments?.total_review ?? 0}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onBlackListPress} style={styles.iconBtn}>
                <BlacklistIcon {...styles.icon} />
                <Text style={{ ...textVariants.small, ...styles.iconText }}>拉黑</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onReportPress} style={styles.iconBtn}>
                <ReportIcon {...styles.icon} />
                <Text style={{ ...textVariants.small, ...styles.iconText }}>举报</Text>
            </TouchableOpacity>

            <ReportBottomSheet
                isVisible={showReportModel}
                selections={Object.values(ReportType)}
                onButtonPress={(type) => onReportSubmit(type as ReportType)}
                onBackdropPress={() => setShowReportModel(false)}
                onCancelPress={() => setShowReportModel(false)}
            />
        </View>
    );
}

const createStyles = ({ colors }: any) => StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 999,
    },
    iconBtn: {
        marginBottom: 10,
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        color: "white",
    },
    iconText: {
        textAlign: 'center',
    }
});
