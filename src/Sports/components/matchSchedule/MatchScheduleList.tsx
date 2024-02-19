import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './style';
import { TouchableOpacity } from 'react-native';
import { formatMatchDate } from '../../utility/utils';
import { RootState } from '@redux';
// import FollowMatchAction from '@redux';
import { MatchDetailsType } from '../../types/matchTypes';
// import {showToast} from '../../utility/toast';
import { Url } from '../../middleware/url';
import { useInfiniteQuery } from '@tanstack/react-query';
import Api from '../../middleware/api';
import MatchSchedule from './MatchSchedule';
// import FastImage from 'react-native-fast-image';
import FastImage from '../../../components/common/customFastImage';
import { TOPON_BANNER_HEIGHT } from '@utility';

interface Props {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?: boolean
}

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
  bgDark = false
}: Props) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

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
    // if (latestListDate.current !== undefined) {
    //   try {
    //     url += `&date=${latestListDate.current.toISOString().split('T')[0]}`;
    //   } catch (e) {
    //     console.log('ERRORRR!!', e, latestListDate.current.toISOString());
    //   }
    // }
    return Url.matches11 + url;
  };

  const url = getUrl();

  const fetchData = useCallback(async () => {
    const data = (await Api.call(url, {}, 'GET')).data

    if (data !== undefined) {
      const dates = Object.keys(data);
      let lst: MatchType[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;
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
        const dateDate = new Date(date)
        const now = new Date()
        const sevenDaysBefore = new Date(now.valueOf() - 7 * 24 * 60 * 60 * 1000)
        const sevenDaysAfter = new Date(now.valueOf() + 7 * 24 * 60 * 60 * 1000)

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);
        count += 1;
        data[date].forEach((element: MatchDetailsType) => {
          lst.push({ date: undefined, data: element });
          count += 1;
        });
      }
      setMatches({
        headers: headers,
        data: lst,
      });
    }

  }, [])

  useEffect(() => {
    fetchData().then()
  }, [])

  const Content = useCallback(({
    item,
    index,
  }: {
    item: { date: string | undefined; data: MatchDetailsType | undefined };
    index: number;
  }) => {
    return (
      <View style={{ width: width }}>
        {item?.date !== undefined ? (
          <View
            style={{
              backgroundColor: bgDark ? '#0c0c0c' : colors.card2,
              padding: spacing.xs,
              paddingLeft: spacing.sideOffset,
            }}>
            <Text style={textVariants.header}>{item?.date}</Text>
          </View>
        ) : (
          item?.data !== undefined && (
            <>

              <MatchSchedule
                bgDark={true}
                setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                key={index}
                matchSche={item?.data}
              />
            </>
          )
        )}
      </View>
    );
  }, []);

  const handleRefresh = () => {
    setShowLoading(true)
    flatlistRef?.current?.scrollToOffset({ animated: false, offset: 0 })
    setTimeout(() => {
      setShowLoading(false)
    }, 1000)
  }

  return (
    <View style={{ flex: 1 }}>
      {matches?.data !== undefined && matches.data.length > 0 ? (
        <FlatList
          ref={flatlistRef}
          data={matches.data}
          windowSize={3}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          renderItem={Content}
          // onEndReached={() => {
          //   if (hasNextPage) {
          //     setFetchNext(true);
          //     fetchNextPage();
          //   }
          // }}
          onEndReachedThreshold={0.9}
          stickyHeaderIndices={matches.headers}
          ListFooterComponent={<View style={{ paddingTop: TOPON_BANNER_HEIGHT + 20 }} />}
        />
      ) : (
        <View style={{ height: height }}>
          <View style={styles.buffering} />
        </View>
      )}

      {showLoading && <View style={{
        position: 'absolute',
        backgroundColor: colors.background,
        zIndex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <FastImage
          source={require('../../../../static/images/loading-spinner.gif')}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>}

      <TouchableOpacity
        style={styles.refresh}
        onPress={() => {
          fetchData();
          handleRefresh();
        }}>
        <FastImage
          source={require('../../assets/images/IconRefresh.png')}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
