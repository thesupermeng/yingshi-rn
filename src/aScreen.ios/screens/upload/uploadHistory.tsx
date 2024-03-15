import { RootStackScreenProps } from "@type/yys_settings";
import ScreenContainer from "../../components/container/yys_executor_expand";
import TitleWithBackButtonHeader from "../../components/header/yys_anner_header";
import EmptyList from '../../components/common/yys_goal_utils';
import { useAppDispatch, useSelector } from "@hooks/yys_frame";
import { UploadStateType } from "@redux/reducers/uploadReducer";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UploadVideoType } from "@type/yys_libzeus";
import FastImage from '../../components/common/yys_vertical_collection';
import DefaultVideoThumbnail from '@static/images/defaultVideoThumbnail.svg';
import { useCallback, useMemo, useState } from "react";
import { useTheme } from "@react-navigation/native";
import CheckBoxSelected from "@static/images/progressChina.svg";
import CheckBoxUnselected from "@static/images/targetFeedback.svg";
import { Button } from "@rneui/themed";
import { removeUploadHistory } from "@redux/actions/uploadAction";

export const UploadHistory = ({
    route,
    navigation,
}: RootStackScreenProps<'uploadHistory'>) => {
    const { colors, textVariants, icons } = useTheme();
    const styles = useMemo(() => createStyles({ colors, textVariants }), [colors, textVariants]);

    const [isEditing, setEditing] = useState(false);
    const [videoSelected, setVideoSelected] = useState<number[]>([]);
    const dispatch = useAppDispatch();

    const uploadState = useSelector<UploadStateType>('uploadReducer');

    const onEditPress = () => {
        setEditing(!isEditing);

        if (!isEditing === false) {
            setVideoSelected([]);
        }
    }

    const onSelectVideo = (id: number) => {
        if (videoSelected.includes(id)) {
            setVideoSelected([
                ...videoSelected.filter((v) => v !== id),
            ])
        } else {
            setVideoSelected([
                ...videoSelected,
                id,
            ])
        }
    }

    const onRemovePress = () => {
        if (videoSelected.length <= 0) return;

        dispatch(removeUploadHistory(videoSelected));
        setVideoSelected([]);
    }

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
            {isEditing && (
                <TouchableOpacity
                    style={styles.checkbox}
                    onPress={() => onSelectVideo(item.id ?? -1)}
                >
                    {videoSelected.includes(item.id ?? -1) ? (
                        <CheckBoxSelected height={icons.sizes.m} width={icons.sizes.m} />
                    ) : (
                        <CheckBoxUnselected
                            height={icons.sizes.m}
                            width={icons.sizes.m}
                        />
                    )}
                </TouchableOpacity>
            )}

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
    }, [isEditing, videoSelected]);

    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader
                title="上传记录"
                right={
                    <TouchableOpacity onPress={onEditPress}>
                        {isEditing
                            ? <Text style={styles.cancelEditTxt}>取消</Text>
                            : <Text style={styles.editTxt}>编辑</Text>
                        }

                    </TouchableOpacity>
                }
            />

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

            {isEditing && (
                <View style={styles.deleteConfirmationModal}>
                    <Button
                        onPress={() => {
                            if (
                                videoSelected.length === 0 ||
                                videoSelected.length !== uploadState.uploadHistory.length
                            ) {
                                setVideoSelected(uploadState.uploadHistory.map(v => v.id ?? -1));
                            } else {
                                setVideoSelected([]);
                            }
                        }}
                        containerStyle={styles.confirmationBtn}
                        color={colors.card2}
                        titleStyle={{ ...textVariants.body, color: colors.muted }}
                    >
                        {videoSelected.length === 0 ||
                            videoSelected.length !== uploadState.uploadHistory.length
                            ? "全选"
                            : "取消全选"}
                    </Button>
                    <Button
                        onPress={onRemovePress}
                        containerStyle={styles.confirmationBtn}
                        color={videoSelected.length === 0 ? colors.card2 : colors.primary}
                        titleStyle={{
                            ...textVariants.body,
                            color:
                                videoSelected.length === 0 ? colors.muted : colors.background,
                        }}
                    >
                        删除
                    </Button>
                </View>
            )}
        </ScreenContainer>
    );
}

const createStyles = ({ colors, textVariants }: any) => StyleSheet.create({
    editTxt: {
        ...textVariants.body,
        color: colors.primary,
    },
    cancelEditTxt: {
        ...textVariants.body,
    },
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
    checkbox: {
        padding: 5,
        marginRight: 10,
        alignSelf: 'center',
    },
    deleteConfirmationModal: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8,
    },
    confirmationBtn: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        marginTop: 8,
    },
});
