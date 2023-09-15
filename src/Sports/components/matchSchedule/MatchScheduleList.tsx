import React, {memo, useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from './style';
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {formatMatchDate} from '../../utility/utils';
import store, {RootState} from '../../../redux/store';
// import FollowMatchAction from '../../redux/actions/followMatchAction';
import {MatchDetailsType} from '../../types/matchTypes';
// import {showToast} from '../../utility/toast';
import {Url} from '../../middleware/url';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import Api from '../../middleware/api';
import MatchSchedule from './MatchSchedule';
import EmptyList from '../../../components/common/emptyList';
import FastImage from 'react-native-fast-image';
import {screenModel} from '../../../types/screenType';
import {useAppSelector} from '../../../hooks/hooks';

interface Props {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
}

type FlatListType = {
  item: MatchDetailsType;
  index: number;
};

type MatchType = {
  date: string | undefined;
  data: MatchDetailsType | undefined;
};

type Matches = {
  headers: number[];
  data: MatchType[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
}: Props) => {
  const {colors, textVariants, spacing} = useTheme();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const latestListDate = useRef<Date | undefined>();

  const screenState: screenModel = useAppSelector(
    ({screenReducer}: RootState) => screenReducer,
  );

  const [matches, setMatches] = useState<Matches>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
    let url = '';
    if (matchTypeID !== -1) {
      url += `?sports_type=${matchTypeID}`;
    }
    if (url === '') {
      url = '?';
    }
    if (status !== -1) {
      url += `&status=${status}`;
    } else {
      url += `&is_live=${true}`;
    }
    if (latestListDate.current !== undefined) {
      try {
        url += `&date=${latestListDate.current.toISOString().split('T')[0]}`;
      } catch (e) {
        console.log('ERRORRR!!', e, latestListDate.current.toISOString());
      }
    }
    return Url.matches11 + url;
  };

  const {
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
    refetch,
    isFetching,
  } = useInfiniteQuery(
    ['matches', matchTypeID, `status=${status}`],
    () => Api.call(getUrl(), {}, 'GET'),
    {
      getNextPageParam: (lastPage, allPages) => {
        // return undefined
        if (lastPage === null || status < 2) {
          return undefined;
        }
        const nextPage =
          Object.keys(lastPage.data).length > 0
            ? allPages.length + 1
            : undefined;
        return nextPage;
      },
      onSuccess: res => {
        const data = res.pages[res.pages.length - 1].data;
        if (data !== undefined) {
          const dates = Object.keys(data);
          let lst: MatchType[] = matches.data;
          let headers = matches.headers;
          let count = matches.data.length;
          if (latestListDate.current === undefined) {
            latestListDate.current = new Date(dates[dates.length - 1]);
          }
          if (status <= 2) {
            latestListDate.current = new Date(
              latestListDate.current.getTime() + 86400000,
            );
          } else {
            latestListDate.current = new Date(
              latestListDate.current.getTime() - 86400000,
            );
          }
          for (const date of dates) {
            lst.push({date: formatMatchDate(date), data: undefined});
            headers.push(count);
            count += 1;
            data[date].forEach((element: MatchDetailsType) => {
              lst.push({date: undefined, data: element});
              count += 1;
            });
          }
          setMatches({
            headers: headers,
            data: lst,
          });
        }
      },
      cacheTime: 0,
      staleTime: 0,
    },
  );

  const Content = ({
    item,
    index,
  }: {
    item: {date: string | undefined; data: MatchDetailsType | undefined};
    index: number;
  }) => {
    return (
      <View style={{width: width}}>
        {item?.date !== undefined ? (
          <View
            style={{
              backgroundColor: colors.card2,
              padding: spacing.xs,
              paddingLeft: spacing.sideOffset,
            }}>
            <Text style={textVariants.header}>{item?.date}</Text>
          </View>
        ) : (
          item?.data !== undefined && (
            <MatchSchedule
              setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
              key={index}
              matchSche={item?.data}
            />
          )
        )}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {matches?.data !== undefined && matches.data.length > 0 ? (
        <FlatList
          data={matches.data}
          windowSize={3}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          renderItem={Content}
          onEndReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
          onEndReachedThreshold={0.9}
          stickyHeaderIndices={matches.headers}
        />
      ) : (
        <View style={{height: height}}>
          <View style={styles.buffering} />
        </View>
      )}

      <TouchableOpacity
        style={styles.refresh}
        onPress={() => {
          refetch();
        }}>
        <FastImage
          source={require('../../assets/images/IconRefresh.png')}
          style={{width: 25, height: 25}}
          resizeMode="contain"
        />
        <Text style={styles.refreshFont}>刷新</Text>
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
