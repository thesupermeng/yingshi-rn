import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import MainHeader from '../../../components/header/homeHeader';
import {useTheme} from '@react-navigation/native';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {VodPlaylistResponseType, VodTopicType} from '../../../types/ajaxTypes';
import VodPlaylist from '../../../components/playlist/vodPlaylist';
import {BottomTabScreenProps, useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
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
import AdsBanner from '../../../ads/adsBanner';
interface NavType {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

export default ({navigation}: BottomTabScreenProps<any>) => {
  const {textVariants, colors, spacing} = useTheme();
  const [isOffline, setIsOffline] = useState(false);
  const {data: navOptions} = useQuery({
    queryKey: ['matchesNavOptions'],
    queryFn: () =>
      Api.call(Url.sportTypes, {}, 'GET').then((res): NavType[] => {
        return res.data;
      }),
  });
  const bottomTabHeight = useBottomTabBarHeight();

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

  return (
    <ScreenContainer containerStyle={{paddingLeft: 0, paddingRight: 0}}>
      <AdsBanner bottomTabHeight={bottomTabHeight} />
      <View
        style={{
          backgroundColor: colors.background,
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
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
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
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
});
