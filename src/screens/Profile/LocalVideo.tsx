import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  RefreshControl,
  PermissionsAndroid,
  Platform,
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

export default ({navigation}: RootStackScreenProps<'本地视频'>) => {
  const [videos, setVideos] = useState<PhotoIdentifiersPage>();
  const [mapVideos, setMapVideos] = useState<Array<PhotoIdentifier['node']>>(
    [],
  );

  useEffect(() => {
    requestMediaLibraryPermission();
  }, []);

  useEffect(() => {
    mapVideosToLocal();
  }, [videos]);

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
            loadLocalVideo();
            break;
          case RESULTS.DENIED:
            console.log('Media library permission denied');
            request(
              isBelowAndroid12
                ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
                : PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
            ).then(value => {
              if (value === 'granted') {
                console.log('Media library permission granted');
                loadLocalVideo();
              } else {
                console.log('Media library permission denied');
              }
            });
            break;
          case RESULTS.UNAVAILABLE:
            console.log('Media library permission unavailable');
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
    });
    setVideos(getVideo);
  }

  function mapVideosToLocal() {
    console.log(videos);
    videos?.edges.flatMap(value => console.log(value));
  }

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="本地视频" />
    </ScreenContainer>
  );
};
