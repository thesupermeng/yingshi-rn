import { RootStackScreenProps } from "@type/yys_settings";
import ScreenContainer from "../../components/container/yys_executor_expand";
import TitleWithBackButtonHeader from "../../components/header/yys_anner_header";
import { Alert, Linking, Platform, Text, TouchableOpacity, View } from "react-native";
import AddIcon from '@static/images/add.svg';
import AlbumIcon from '@static/images/album.svg';
import { useTheme } from "@react-navigation/native";
import { yys_DetailWhistle } from "../../../routes/yys_become_bootsplash";
import { useCallback, useEffect, useState } from "react";
import Permissions, { PERMISSIONS, RESULTS, request, check } from "react-native-permissions";
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import { UploadResultOverlay } from "../../components/modal/uploadResultOverlay";
import { UploadProgressOverlay } from "../../components/modal/uploadProgressOverlay";
import { VIDEO_UPLOAD_DEFAULT_SIZE, VIDEO_UPLOAD_SPEED } from "@utility/yys_ajax_switch";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { showLoginAction } from "@redux/actions/yys_runtimescheduler";
import { yys_RelatedTooltips } from '@models/yys_project_pagination';

export const UploadVideo = ({
    route,
    navigation,
}: RootStackScreenProps<'uploadVideo'>) => {
    const defaultFileSize = VIDEO_UPLOAD_DEFAULT_SIZE;
    const uploadSpeed = VIDEO_UPLOAD_SPEED;

    const { textVariants, colors } = useTheme();
    const [isGrantPhotePermission, setGrantPhotePermission] = useState(false);
    const [videoSelected, setVideoSelected] = useState<Asset>();
    const [uploadProgress, setUploadProgress] = useState<number | undefined>();
    const [progressTimer, setProgressTimer] = useState<NodeJS.Timeout | undefined>();
    const [showSuccess, setShowSuccess] = useState(false);
    const dispatch = useAppDispatch();
    const userState = useSelector<yys_HejiCricket>('userReducer');

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
        yys_DetailWhistle.toName('uploadHistory');
    }

    const onUploadPress = async () => {
        if (yys_RelatedTooltips.isGuest(userState.user)) {
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

            if (result.assets) {
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
            <Text style={{
                ...textVariants.header,
                marginBottom: 20,
                textAlign: 'center',
                width: '70%',
            }}>
                暂无视频，您可以上传本地视频至随心看
            </Text>

            <TouchableOpacity onPress={onUploadPress} style={{
                backgroundColor: colors.primary,
                paddingHorizontal: 34,
                paddingVertical: 14,
                borderRadius: 50,
            }}>
                <Text>上传视频</Text>
            </TouchableOpacity>
        </View>);
    }, [textVariants, colors, userState]);

    const [hasPermission, setHasPermission] = useState<boolean>(false);

    const openSettingsAlert = useCallback(({title}: {title: string}) => {
      Alert.alert(title, '', [
        {
          isPreferred: true,
          style: 'default',
          text: 'Open Settings',
          onPress: () => Linking?.openSettings(),
        },
        {
          isPreferred: false,
          style: 'destructive',
          text: 'Cancel',
          onPress: () => {},
        },
      ]);
    }, []);
  
    const checkAndroidPermissions = useCallback(async () => {
      if (parseInt(Platform.Version as string, 10) >= 33) {
        const permissions = await Permissions.checkMultiple([
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
          PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
        ]);
        if (
          permissions[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
            Permissions.RESULTS.GRANTED &&
          permissions[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] ===
            Permissions.RESULTS.GRANTED
        ) {
          setHasPermission(true);
          return;
        }
        const res = await Permissions.requestMultiple([
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
          PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
        ]);
        if (
          res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
            Permissions.RESULTS.GRANTED &&
          res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] ===
            Permissions.RESULTS.GRANTED
        ) {
          setHasPermission(true);
        }
        if (
          res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
            Permissions.RESULTS.DENIED ||
          res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] === Permissions.RESULTS.DENIED
        ) {
          checkAndroidPermissions();
        }
        if (
          res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
            Permissions.RESULTS.BLOCKED ||
          res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] ===
            Permissions.RESULTS.BLOCKED
        ) {
          openSettingsAlert({
            title: 'Please allow access to your photos and videos from settings',
          });
        }
      } else {
        const permission = await Permissions.check(
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        );
        if (permission === Permissions.RESULTS.GRANTED) {
          setHasPermission(true);        
          return;
        }
        const res = await Permissions.request(
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        );
        if (res === Permissions.RESULTS.GRANTED) {
          setHasPermission(true);
        }
        if (res === Permissions.RESULTS.DENIED) {
          checkAndroidPermissions();
        }
        if (res === Permissions.RESULTS.BLOCKED) {
          openSettingsAlert({
            title: 'Please allow access to the photo library from settings',
          });
        }
      }
    }, [openSettingsAlert]);
  
    const checkPermission = useCallback(async () => {
      if (Platform.OS === 'ios') {
        const permission = await Permissions.check(PERMISSIONS.IOS.PHOTO_LIBRARY);
        if (permission === Permissions.RESULTS.GRANTED ||
            permission === Permissions.RESULTS.LIMITED) {
          setHasPermission(true);
          return;
        }
        const res = await Permissions.request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        if (res === Permissions.RESULTS.GRANTED ||
            res === Permissions.RESULTS.LIMITED) {
          setHasPermission(true);
        }
        if (res === Permissions.RESULTS.BLOCKED) {
          openSettingsAlert({
            title: 'Please allow access to the photo library from settings',
          });
        }
      } else if (Platform.OS === 'android') {
        checkAndroidPermissions();
      }
    }, [checkAndroidPermissions, openSettingsAlert]);
  
    useEffect(() => {
      checkPermission();
    }, [checkPermission]);
  

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
                <Text>允许访问相册</Text>
            </TouchableOpacity>
        </View>);
    }, [textVariants, colors]);

    useEffect(() => {
        if (uploadProgress !== undefined && uploadProgress >= 100) {
            clearInterval(progressTimer);

            setUploadProgress(undefined);
            setProgressTimer(undefined);

            setShowSuccess(true);

            setTimeout(() => {
                setShowSuccess(false);
            }, 2000);
        }
    }, [uploadProgress]);

    return (
        <ScreenContainer>
            <TitleWithBackButtonHeader
                title="上传视频"
                right={
                    <TouchableOpacity onPress={onCheckHistoryPress}>
                        <Text style={{ color: 'white' }}>
                            查看记录
                        </Text>
                    </TouchableOpacity>
                }
            />

            {isGrantPhotePermission
                ? <GrantedBody />
                : <UngrantedBody />
            }

            {uploadProgress !== undefined &&
                <UploadProgressOverlay
                    value={uploadProgress}
                />
            }

            {showSuccess &&
                <UploadResultOverlay

                />
            }
        </ScreenContainer>
    );
}

