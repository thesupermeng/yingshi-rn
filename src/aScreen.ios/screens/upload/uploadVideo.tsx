import ScreenContainer from "../../components/container/screenContainer";
import { Alert, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddIcon from '@static/images/add.svg';
import AlbumIcon from '@static/images/album.svg';
import { useTheme } from "@react-navigation/native";
import { CRouter } from "../../../routes/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import Permissions, { PERMISSIONS, RESULTS, request, check } from "react-native-permissions";
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import { UploadResultOverlay } from "../../components/modal/uploadResultOverlay";
import { UploadProgressOverlay } from "../../components/modal/uploadProgressOverlay";
import { VIDEO_UPLOAD_DEFAULT_SIZE, VIDEO_UPLOAD_SPEED } from "@utility/constants";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/hooks";
import { UserStateType } from "@redux/reducers/userReducer";
import { showLoginAction } from "@redux/actions/screenAction";
import { User } from '@models/user';
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export const UploadVideo = ({ navigation }: BottomTabScreenProps<any>) => {
    const defaultFileSize = VIDEO_UPLOAD_DEFAULT_SIZE;
    const uploadSpeed = VIDEO_UPLOAD_SPEED;

    const { textVariants, colors, dark } = useTheme();
    const styles = useMemo(() => createStyles({ colors }), [colors]);

    const [isGrantPhotePermission, setGrantPhotePermission] = useState(false);
    const [videoSelected, setVideoSelected] = useState<Asset>();
    const [uploadProgress, setUploadProgress] = useState<number | undefined>();
    const [progressTimer, setProgressTimer] = useState<NodeJS.Timeout | undefined>();
    const [showSuccess, setShowSuccess] = useState(false);
    const dispatch = useAppDispatch();
    const userState = useSelector<UserStateType>('userReducer');

    useEffect(() => {
        if (Platform.OS === 'ios') {
            check(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {
                if (result == RESULTS.GRANTED) {
                    setGrantPhotePermission(true);
                } else {
                    // setGrantPhotePermission(false);
                    onRequestPermissiobPress();
                }
            });
        }
    }, []);

    const onCheckHistoryPress = () => {
        CRouter.toName('uploadHistory');
    }

    const onUploadPress = async () => {
        if (User.isGuest(userState.user)) {
            dispatch(showLoginAction());
            return;
        }

        try {
            setVideoSelected(undefined);

            const result = await launchImageLibrary({
                mediaType: 'video',
                selectionLimit: 1,
            });

            if (result.errorMessage) {
                throw result.errorMessage;
            }

            if (result.assets && result.assets.length > 0) {
                setVideoSelected(result.assets[0]);
                setUploadProgress(0);

                const percentagePerSecond = 100 / ((result.assets[0].fileSize ?? defaultFileSize) / uploadSpeed);


                const uploadTimer = setInterval(() => {
                    setUploadProgress(prev => {
                        return (prev ?? 0) + percentagePerSecond
                    });
                }, 1000);

                setProgressTimer(uploadTimer);
            }

        } catch (e: any) {

        }
    }

    const onRequestPermissiobPress = () => {
        if (Platform.OS === 'ios') {
            request(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {
                if (result == RESULTS.GRANTED) {
                    setGrantPhotePermission(true);
                } else {

                    setGrantPhotePermission(false);
                    Alert.alert(
                        '需要权限',
                        '要启用此功能，请在设置中授予权限。',
                        [
                            { text: '取消', onPress: () => console.log('取消按下'), style: 'cancel' },
                            { text: '打开设置', onPress: () => Linking.openSettings() }
                        ],
                        { cancelable: false }
                    );

                }
            });
        }
    }

    const GrantedBody = useCallback(() => {
        return (<View style={{
            width: '100%',
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <AddIcon width={70} height={70} style={{
                marginBottom: 20,
                color: colors.button,
            }} />
            <Text style={{
                ...textVariants.header,
                marginBottom: 20,
                textAlign: 'center',
            }}>
                点击上传视频
            </Text>
            {/* <Text style={{
                ...textVariants.header,
                marginBottom: 20,
                textAlign: 'center',
                width: '70%',
            }}>
                暂无视频，您可以上传本地视频至随心看
            </Text> */}

            <TouchableOpacity onPress={onUploadPress} style={{
                backgroundColor: colors.primary,
                paddingHorizontal: 34,
                paddingVertical: 14,
                borderRadius: 50,
            }}>
                <Text style={{ color: dark ? 'black' : 'white' }}>上传视频</Text>
            </TouchableOpacity>
        </View>);
    }, [textVariants, colors, userState]);

    const UngrantedBody = useCallback(() => {
        return (<View style={{
            width: '100%',
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <AlbumIcon width={70} height={70} style={{
                marginBottom: 20,
                color: colors.button,
            }} />
            <Text style={{
                ...textVariants.header,
                marginBottom: 20,
                textAlign: 'center',
            }}>
                相册访问权限
            </Text>
            <Text style={{
                ...textVariants.subBody,
                marginBottom: 26,
                textAlign: 'center',
                width: '70%',
            }}>
                您还没有开启相册权限，开启后就能访问相册里的视频或上传视频
            </Text>

            <TouchableOpacity onPress={onRequestPermissiobPress} style={{
                backgroundColor: colors.primary,
                paddingHorizontal: 34,
                paddingVertical: 14,
                borderRadius: 50,
            }}>
                <Text style={{ color: dark ? 'black' : 'white' }}>允许访问相册</Text>
            </TouchableOpacity>
        </View>);
    }, [textVariants, colors]);

    useEffect(() => {
        if (uploadProgress !== undefined && uploadProgress >= 100) {
            clearInterval(progressTimer);

            setUploadProgress(undefined);
            setProgressTimer(undefined);

            CRouter.toName('uploadVideoPreview', {
                params: {
                    assets: videoSelected,
                },
            });

            // setShowSuccess(true);

            // setTimeout(() => {
            //     setShowSuccess(false);

            //     yys_DetailWhistle.toName('uploadVideoPreview', {
            //         params: {
            //             assets: videoSelected,
            //         },
            //     });
            // }, 2000);
        }
    }, [uploadProgress]);

    return (
        <ScreenContainer>
            <View style={styles.titleTextContainer}>
                <Text style={{ ...textVariants.bigHeader, ...styles.titleText }}>上传视频</Text>

                <TouchableOpacity onPress={onCheckHistoryPress}>
                    <Text style={{ color: colors.text }}>
                        查看记录
                    </Text>
                </TouchableOpacity>
            </View>

            {isGrantPhotePermission
                ? <GrantedBody />
                : <UngrantedBody />
            }

            {uploadProgress !== undefined &&
                <UploadProgressOverlay
                    value={uploadProgress}
                    backgroundColor={'#ffffffaa'}
                />
            }

            {/* {showSuccess &&
                <UploadResultOverlay

                />
            } */}
        </ScreenContainer>
    );
}

const createStyles = ({ colors }: any) => StyleSheet.create({
    titleTextContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 20,
        paddingRight: 0,
        zIndex: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleText: {
        color: colors.text,
        fontSize: 20,
    },
});