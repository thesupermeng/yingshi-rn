import { RootStackScreenProps } from "@type/navigationTypes";
import ScreenContainer from "../../components/container/screenContainer";
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { CRouter } from "../../../routes/router";
import { useEffect, useMemo, useState } from "react";
import { UploadResultOverlay } from "../../components/modal/uploadResultOverlay";
import { UploadProgressOverlay } from "../../components/modal/uploadProgressOverlay";
import { VIDEO_UPLOAD_DEFAULT_SIZE, VIDEO_UPLOAD_SPEED } from "@utility/constants";
import { useAppDispatch } from "@hooks/hooks";
import { createThumbnail } from 'react-native-create-thumbnail';
import ConfirmationModal from "../../components/modal/confirmationModal";
import { CTextInput } from "@iosScreen/components/atoms";
import FastImage from '../../components/common/customFastImage';
import DefaultVideoThumbnail from '@static/images/defaultVideoThumbnail.svg';
import { saveUploadHistory } from "@redux/actions/uploadAction";

export const UploadVideoPreview = ({
    route,
    navigation,
}: RootStackScreenProps<'uploadVideoPreview'>) => {
    const defaultFileSize = VIDEO_UPLOAD_DEFAULT_SIZE;
    const uploadSpeed = VIDEO_UPLOAD_SPEED;

    const { textVariants, colors } = useTheme();
    const styles = useMemo(() => createStyles({ colors, textVariants }), [colors, textVariants]);
    const [uploadAssets, _] = useState(route.params.assets);

    const [showBackModel, setShowBackModel] = useState(false);

    const [videoTitle, setVideoTitle] = useState('');
    const [videoTitleErrMsg, setVideoTitleErrMsg] = useState<string>();
    const [videoThumbnail, setVideoThumbnail] = useState<string>();
    const [uploadProgress, setUploadProgress] = useState<number | undefined>();
    const [progressTimer, setProgressTimer] = useState<NodeJS.Timeout | undefined>();
    const [showSuccess, setShowSuccess] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        generateThumbnail();
    }, [uploadAssets]);

    const generateThumbnail = async () => {
        try {
            const response = await createThumbnail({
                url: uploadAssets.uri ?? '',
                timeStamp: 10000, // 1 second
            })

            if (response) {
                setVideoThumbnail(response.path);
            } else {
                setVideoThumbnail(undefined);
            }
        } catch (e: any) {
            setVideoThumbnail(undefined);
        }
    }

    const onUploadPress = async () => {
        if (videoTitle === undefined || videoTitle === '') {
            setVideoTitleErrMsg('请填写标题');
            return;
        } else {
            setVideoTitleErrMsg(undefined);
        }

        try {
            // setUploadProgress(0);

            // const percentagePerSecond = 100 / ((uploadAssets.fileSize ?? defaultFileSize) / uploadSpeed);

            // const uploadTimer = setInterval(() => {
            //     setUploadProgress(prev => {
            //         return (prev ?? 0) + percentagePerSecond
            //     });
            // }, 1000);

            // setProgressTimer(uploadTimer);

            dispatch(saveUploadHistory({
                title: videoTitle,
                thumbnail: videoThumbnail ?? '',
            }));

            setShowSuccess(true);

            setTimeout(() => {
                setShowSuccess(false);
                CRouter.back();
            }, 2000);

        } catch (e: any) {

        }
    }

    const onBackPress = () => {
        setShowBackModel(true);
    }

    const onConfirmBackPress = () => {
        setShowBackModel(false);
        CRouter.back();
    }

    const onVideoTitleChange = (value: string) => {
        setVideoTitle(value);
    }

    // useEffect(() => {
    //     if (uploadProgress !== undefined && uploadProgress >= 100) {
    //         clearInterval(progressTimer);

    //         dispatch(saveUploadHistory({
    //             title: videoTitle,
    //             thumbnail: videoThumbnail ?? '',
    //         }));

    //         setUploadProgress(undefined);
    //         setProgressTimer(undefined);

    //         setShowSuccess(true);

    //         setTimeout(() => {
    //             setShowSuccess(false);
    //             yys_DetailWhistle.back();
    //         }, 2000);
    //     }
    // }, [uploadProgress]);

    return (
        <ScreenContainer containerStyle={styles.container}>
            <TitleWithBackButtonHeader
                title="发布视频"
                onBack={onBackPress}
                right={
                    <TouchableOpacity onPress={onUploadPress}>
                        <Text style={styles.confirmBtnText}>发布</Text>
                    </TouchableOpacity>
                }
            />

            <CTextInput
                style={{
                    ...styles.input,
                    ...textVariants.body,
                }}
                showErrorStyle={videoTitleErrMsg !== undefined ? true : false}
                onChangeText={onVideoTitleChange}
                placeholder="添加标题说点什么..."
                placeholderTextColor={colors.muted}
                value={videoTitle}
                multiline={true}
                maxLength={500}
            />

            {videoTitleErrMsg &&
                <Text style={styles.errMsgText}>* {videoTitleErrMsg}</Text>
            }

            {videoThumbnail && videoThumbnail !== '' && false
                ? <FastImage
                    useFastImage={true}
                    style={styles.thumbnail}
                    resizeMode={"contain"}
                    source={{
                        uri: videoThumbnail,
                    }}
                />
                : <DefaultVideoThumbnail style={styles.thumbnail} />
            }

            {/* <View style={{ flex: 1, }} />

            <TouchableOpacity onPress={onUploadPress} style={styles.confirmBtn}>
                <Text style={styles.confirmBtnText}>
                    发布
                </Text>
            </TouchableOpacity> */}

            {uploadProgress !== undefined &&
                <UploadProgressOverlay
                    value={uploadProgress}
                />
            }

            {showSuccess &&
                <UploadResultOverlay />
            }

            <ConfirmationModal
                isVisible={showBackModel}
                title={'放弃发布'}
                subtitle={'您是否确认放弃本次发布？'}
                onConfirm={onConfirmBackPress}
                onCancel={() => setShowBackModel(false)}
            />
        </ScreenContainer>
    );
}

const createStyles = ({ colors, textVariants }: any) => StyleSheet.create({
    container: {
        paddingBottom: 30,
    },
    input: {
        height: 180,
        paddingHorizontal: 20,
        paddingVertical: 16,
        flex: undefined,
        marginTop: 30,
    },
    errMsgText: {
        marginTop: 10,
        color: 'red',
    },
    thumbnail: {
        marginTop: 30,
        width: '50%',
        borderRadius: 16,
        aspectRatio: 16 / 9,
    },
    confirmBtn: {
        bottom: 0,
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 8,
    },
    confirmBtnText: {
        ...textVariants.body,
        color: colors.primary,
        textAlign: 'center',
    },
});