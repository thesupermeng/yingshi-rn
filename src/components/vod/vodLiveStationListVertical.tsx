import React, { useCallback, useEffect, useMemo, memo, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { useNavigation, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/navigationTypes';
import { playVod } from '@redux/actions/vodActions';
import { useAppDispatch } from '@hooks/hooks';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import VodTopicFilter from '../../components/vod/vodTopicFilter';
import VodCard from '../../components/vod/vodCard';
import DownArrow from '@static/images/arrow_down_yellow.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
// import FastImage from 'react-native-fast-image';
import FastImage from '../common/customFastImage';
import { LiveTVStationItem } from '@type/ajaxTypes';

interface Props {
  itemList: Array<LiveTVStationItem>;
  itemsPerRow?: number;
  numOfRows?: number;
  selectedItem?: LiveTVStationItem;
}

export default function VodLiveStationListVertical({
  itemList,
  itemsPerRow = 2,
  numOfRows = 4,
  selectedItem,
}: Props) {
  const { textVariants, colors, spacing, icons } = useTheme();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  let items = itemList.slice(0, itemsPerRow * numOfRows);

  if (selectedItem) {
    items = items.filter(i => i.id !== selectedItem.id);
  }

  const renderItems = () => {
    const rows = [];
    for (let i = 0; i < items.length; i += itemsPerRow) {
      const rowItems = items.slice(i, i + itemsPerRow);
      const row = (
        <View key={i} style={{ ...styles.cardRow, gap: 10 }}>
          {rowItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardItem}
              onPress={() => {
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 750);

                navigation.navigate('电视台播放', {
                  liveStationItemList: itemList,
                  liveStationItem: item,
                });
              }}>
              <FastImage
                style={{ flex: 1, borderRadius: 10 }}
                source={{
                  uri: item.live_station_img_url.charAt(0) == '/' ? 'https://xiangkantv.net' + item.live_station_img_url : item.live_station_img_url,
                  priority: 'normal',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      );
      rows.push(row);
    }
    return rows;
  };
  return (
    <>
      {!isLoading && (
        <>
          <View style={styles.container}>{renderItems()}</View>
          <View style={{ ...styles.loading }}>
            <Text
              style={{
                ...textVariants.subBody,
                color: colors.muted,
                marginBottom: 20,
              }}>
              已经到底了
            </Text>
          </View>
        </>
      )}

      {isLoading && (
        <View style={{ ...styles.loading, paddingTop: 20 }}>
          <FastImage
            style={{ height: 80, width: 80 }}
            source={require('@static/images/loading-spinner.gif')}
            resizeMode={"contain"}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute items evenly in the row
    marginBottom: 10, // Add spacing between rows
  },
  cardItem: {
    width: '48%', // Take up 48% of the available width (2 items per row with spacing)
    aspectRatio: 130 / 80,
    borderRadius: 10,
    overflow: 'hidden', // Ensure content stays within borders
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
