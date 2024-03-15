import { RootStackScreenProps } from "@type/yys_settings";
import ScreenContainer from "../../components/container/yys_executor_expand";
import TitleWithBackButtonHeader from "../../components/header/yys_anner_header";
import EmptyList from '../../components/common/yys_goal_utils';
import { useSelector } from "@hooks/yys_frame";
import { UploadStateType } from "@redux/reducers/uploadReducer";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { UploadVideoType } from "@type/yys_libzeus";
import FastImage from '../../components/common/yys_vertical_collection';
import DefaultVideoThumbnail from '@static/images/defaultVideoThumbnail.svg';
import { useCallback, useMemo } from "react";
import { useTheme } from "@react-navigation/native";

export const UploadHistory = ({
    route,
    navigation,
}: RootStackScreenProps<'uploadHistory'>) => {
    const { colors, textVariants } = useTheme();
    const styles = useMemo(() => createStyles({ colors, textVariants }), [colors, textVariants]);

    const uploadState = useSelector<UploadStateType>('uploadReducer');

    const renderItem = useCallback(({
        item,
        index,
    }: {
        item: UploadVideoType,
        index: number,
    }) => {
        const date = new Date(item.createAt ?? '');
        const dateStr = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear().toString().padStart(2, '0')}`;

        return <View style={styles.itemContainer}>
            {item.thumbnail && item.thumbnail !== ''
                ? <FastImage
                    useFastImage={true}
                    style={styles.thumbnail}
                    resizeMode={"contain"}
                    source={{
                        uri: item.thumbnail,
                    }}
                />
                : <DefaultVideoThumbnail style={styles.thumbnail} />

            }

            <View style={styles.descriptionContainer}>
                <Text style={styles.titleText}>{item.title}</Text>

                <View style={styles.metaDataContainer}>
                    <Text style={styles.timeText}>
                        {dateStr}
                    </Text>
                    <Text style={styles.statusText}>
                        {item.status === 'pending'
                            ? '审核中'
                            : ''}
                    </Text>
                </View>
            </View>
        </View>
    }, []);

    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader title="上传记录" />

            {uploadState.uploadHistory.length > 0
                ? <FlatList
                    data={uploadState.uploadHistory}
                    renderItem={renderItem}
                    style={{
                        paddingVertical: 10,
                    }}
                />
                : <EmptyList description="暂无上传成功视频" />
            }

        </ScreenContainer>
    );
}

const createStyles = ({ colors, textVariants }: any) => StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 14,
    },
    thumbnail: {
        width: 140,
        aspectRatio: 16 / 9,
        marginRight: 14,
        borderRadius: 10,
    },
    descriptionContainer: {
        flex: 1,
        paddingBottom: 4,
    },
    titleText: {
        ...textVariants.body,
        flex: 1,
    },
    metaDataContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    timeText: {
        ...textVariants.subbody,
        color: colors.muted,
    },
    statusText: {
        ...textVariants.body,
        color: colors.primary,
    },
});
