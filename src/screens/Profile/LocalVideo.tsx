import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  RefreshControl,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import {RootStackScreenProps} from '@type/navigationTypes';
import {PERMISSIONS, request, check, RESULTS} from 'react-native-permissions';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import {
  CameraRoll,
  PhotoIdentifier,
  PhotoIdentifiersPage,
} from '@react-native-camera-roll/camera-roll';
import {Button} from 'react-native';

export default ({navigation}: RootStackScreenProps<'本地视频'>) => {
  const [videos, setVideos] = useState<PhotoIdentifiersPage>();
  const [mapVideos, setMapVideos] = useState<Array<PhotoIdentifier>>([]);
  const [editMode, setEditMode] = useState(false);
  const [permissionGrated, setPermissionGrated] = useState(false);
  const [deleteList, setDeleteList] = useState<String>();

  useEffect(() => {
    requestMediaLibraryPermission();
  }, []);

  useEffect(() => {
    mapVideosToLocal();
  }, [videos != undefined]);

  async function requestPermission() {
    const isBelowAndroid12 = Number(Platform.Version) <= 32 ? true : false;

    request(
      isBelowAndroid12
        ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
        : PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
    ).then(value => {
      if (value === 'granted') {
        console.log('Media library permission granted');
        setPermissionGrated(true);
        loadLocalVideo();
      } else {
        console.log('Media library permission denied');
      }
    });
  }

  async function requestMediaLibraryPermission() {
    const isBelowAndroid12 = Number(Platform.Version) <= 32 ? true : false;
    try {
      check(
        isBelowAndroid12
          ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
          : PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
      ).then(value => {
        switch (value) {
          case RESULTS.GRANTED:
            console.log('Media library permission granted');
            setPermissionGrated(true);
            loadLocalVideo();
            break;
          case RESULTS.DENIED:
            console.log('Media library permission denied');
            setPermissionGrated(false);
            // request(
            //   isBelowAndroid12
            //     ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
            //     : PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
            // ).then(value => {
            //   if (value === 'granted') {
            //     console.log('Media library permission granted');
            //     loadLocalVideo();
            //   } else {
            //     console.log('Media library permission denied');
            //   }
            // });
            break;
          case RESULTS.UNAVAILABLE:
            console.log('Media library permission unavailable');
            setPermissionGrated(false);
            break;
        }
      });
    } catch (err) {
      console.warn(err);
    }
  }

  async function loadLocalVideo() {
    const getVideo = await CameraRoll.getPhotos({
      first: 10,
      assetType: 'Videos',
      include: [
        'filename',
        'fileSize',
        'fileExtension',
        'location',
        'imageSize',
        'playableDuration',
        'orientation',
      ],
    });
    setVideos(getVideo);
  }

  function mapVideosToLocal() {
    // console.log(videos);
    const newArray = videos?.edges.flat();
    // console.log(newArray);
    setMapVideos(newArray ?? []);
  }

  function formatBytes(bytes: number | null, decimals = 2) {
    if (bytes === null) return;
    if (!+bytes) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

  const renderItem = ({
    index,
    item,
  }: {
    index: number;
    item: PhotoIdentifier;
  }) => {
    console.log(item);
    return (
      <View style={{padding: 20}}>
        <TouchableOpacity onPress={() => setEditMode(true)}>
          {/* <Text style={{color: 'white'}}>{`video[${index}]`}</Text> */}
          <Text style={{color: 'white'}}>{item.node?.image?.filename}</Text>
          <Text style={{color: 'white'}}>
            {formatBytes(item.node?.image?.fileSize, 2)}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="本地视频"
        right={
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: 'white'}}>编辑</Text>
          </TouchableOpacity>
        }
      />
      {permissionGrated ? (
        <FlatList
          // initialNumToRender={3}
          // maxToRenderPerBatch={3}
          // windowSize={5}
          data={mapVideos}
          renderItem={renderItem}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'grey', fontSize: 16, fontWeight: 'bold'}}>
            相册访问权限
          </Text>
          <Text style={{color: 'grey', textAlign: 'center'}}>
            您还没有开启相册访问权限，开启后就能访问相册里的视频和上传视频
          </Text>
          <Button onPress={() => requestPermission()} title="允许访问相册" />
        </View>
      )}
    </ScreenContainer>
  );
};
