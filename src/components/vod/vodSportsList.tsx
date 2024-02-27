import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useCallback,
} from 'react';
import {StyleSheet, TouchableOpacity, Image, ViewStyle} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {VodType} from '@type/ajaxTypes';
import {LiveTVStationItem} from '@type/ajaxTypes';
import VodCard from './vodCard';
import {useAppDispatch} from '@hooks/hooks';
import {playVod} from '@redux/actions/vodActions';
import {VodRecordType} from '@redux/reducers/vodReducer';
import {FlatList} from 'react-native-gesture-handler';
import Api from '../../Sports/middleware/api';
import {Url} from '../../Sports/middleware/url';
import {MatchDetailsType} from '../../Sports/types/matchTypes';
import VodSportCard from './vodSportsCard';
import UmengAnalytics from '../../../Umeng/UmengAnalytics';

interface Props {
  params?: any[];
  horizontal?: boolean;
  sportList?: Array<MatchDetailsType>;
  matchTypeID?: number;
  status?: number;
  isRefreshing?: boolean;
}

type SportType = {
  item: MatchDetailsType;
  index: number;
};

export default function VodSportsList(
  {horizontal = true, sportList = [], matchTypeID, status, isRefreshing}: Props,
  ref: any,
) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const liveRef = useRef<FlatList>(null);

  const resetListPositionHandler = () => {
    liveRef?.current?.scrollToIndex({
      index: 0,
      animated: false,
    });
  };

  useEffect(() => {
    if (isRefreshing == false) {
      resetListPositionHandler(); //children function of interest
    }
  }, [isRefreshing]);

  const matchClicked = (matchID: number) => {
    navigation.navigate('体育详情', {
      matchId: matchID === null ? undefined : matchID,
    });

    // ========== for analytics - start ==========
    UmengAnalytics.sportClicksAnalytics();
    // ========== for analytics - end ==========
  };

  const renderSportCard = useCallback(({item, index}: SportType) => {
    return (
      <VodSportCard
        match_details={item}
        onPress={() => matchClicked(item?.id)}
      />
    );
  }, []);

  return (
    <FlatList
      ref={liveRef}
      data={sportList}
      initialScrollIndex={0}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderSportCard}
    />
  );
}

const styles = StyleSheet.create({});
