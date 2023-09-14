import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import MainHeader from '../../../components/header/homeHeader';
import {useTheme} from '@react-navigation/native';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {VodPlaylistResponseType, VodTopicType} from '../../../types/ajaxTypes';
import VodPlaylist from '../../../components/playlist/vodPlaylist';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {API_DOMAIN, MATCH_API_DOMAIN} from '../../../utility/constants';
import Animated from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
// import { API } from './util';
import Api from '../../middleware/api';
import {Url} from '../../middleware/url';
import {formatMatchDate} from '../../utility/utils';
import {MatchDetailsType} from '../../types/matchTypes';
import MatchSchedule from '../../components/matchSchedule/MatchSchedule';
import MatchScheduleNav from '../../components/matchSchedule/MatchScheduleNav';
import NoConnection from './../../../components/common/noConnection';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import {userModel} from '../../../types/userType';
import {useAppSelector} from '../../../hooks/hooks';
import {RootState} from '../../../redux/store';
import {useDispatch} from 'react-redux';
import {showBecomeVip} from '../../../redux/actions/screenAction';
interface NavType {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

export default ({navigation}: BottomTabScreenProps<any>) => {
  const {textVariants, colors, spacing} = useTheme();
  const [isOffline, setIsOffline] = useState(false);
  const dispatch = useDispatch();

  const userState: userModel = useAppSelector(
    ({userReducer}: RootState) => userReducer,
  );

  const {data: navOptions} = useQuery({
    queryKey: ['matchesNavOptions'],
    queryFn: () =>
      Api.call(Url.sportTypes, {}, 'GET').then((res): NavType[] => {
        return res.data;
      }),
  });

  const matchTabs = useMemo(
    () =>
      navOptions?.map(x => ({
        id: x.ids[0],
        title: x.type,
        name: x.type,
      })),
    [navOptions],
  );

  const checkConnection = async () => {
    const state = await NetInfo.fetch();
    const offline = !(state.isConnected && state.isInternetReachable);
    setIsOffline(offline);
    // if (!offline) {
    //   handleRefresh();
    // }
  };

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        const offline = !(state.isConnected && state.isInternetReachable);
        setIsOffline(offline);
      },
    );

    return () => removeNetInfoSubscription();
  }, []);

  const [vipRemainingDay, setVipRemainingDay] = useState(0);
  useEffect(() => {
    // Assuming you have the two timestamps
    const date1Timestamp = userState.userCurrentTimestamp;
    const date2Timestamp = userState.userMemberExpired;

    // Convert Unix timestamps to milliseconds (multiply by 1000)
    const date1Milliseconds = Number(date1Timestamp) * 1000;
    const date2Milliseconds = Number(date2Timestamp) * 1000;

    // Calculate the time difference in milliseconds
    const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;

    // Calculate the time difference in days
    const timeDifferenceDays =
      timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);

    // Round the time difference to the nearest whole number
    //const roundedTimeDifferenceDays = Math.round(timeDifferenceDays);
    // Round up the time difference to the nearest whole number
    const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);

    // If the rounded difference is less than 0, set it to 0; otherwise, keep the rounded difference
    const result =
      roundedTimeDifferenceDays < 0 ? 0 : roundedTimeDifferenceDays;

    setVipRemainingDay(result);
  }, [userState.userCurrentTimestamp]);

  return (
    <ScreenContainer containerStyle={{paddingLeft: 0, paddingRight: 0}}>
      <View
        style={{
          backgroundColor: colors.background,
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset + 90,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 8,
        }}>
        <Text
          style={{
            ...textVariants.bigHeader,
            color: colors.text,
            fontSize: 22,
            ...styles.header,
          }}>
          体育
        </Text>

        <TouchableOpacity
          activeOpacity={
            Number(userState.userMemberExpired) <=
              Number(userState.userCurrentTimestamp) ||
            userState.userToken === ''
              ? 0.5
              : 1
          }
          onPress={() => {
            if (
              Number(userState.userMemberExpired) <=
                Number(userState.userCurrentTimestamp) ||
              userState.userToken === ''
            ) {
              dispatch(showBecomeVip());
            }
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#222327',
              paddingHorizontal: 10,
              borderRadius: 30,
              paddingVertical: 5,
              position: 'relative',
              top: 5,
            }}>
            <Image
              style={styles.iconStyle}
              source={require('../../../../static/images/profile/vipSport.png')}
            />

            {Number(userState.userMemberExpired) <=
              Number(userState.userCurrentTimestamp) ||
            userState.userToken === '' ? (
              <Text
                style={{
                  color: colors.text,
                  fontSize: 14,
                }}>
                成为VIP
              </Text>
            ) : (
              <Text
                style={{
                  color: colors.text,
                  fontSize: 14,
                }}>
                VIP {vipRemainingDay}天
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>

      {matchTabs && matchTabs.length > 0 && !isOffline && (
        <MatchScheduleNav tabList={matchTabs} />
      )}

      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  nav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 10,
  },
  iconStyle: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
});
