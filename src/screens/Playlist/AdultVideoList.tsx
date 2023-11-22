import React, {useEffect, useRef, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import {RootStackScreenProps} from '../../types/navigationTypes';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {RootState} from '../../redux/store';

import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import {VodRecordType, VodReducerState} from '../../redux/reducers/vodReducer';
import {removeVodsFromHistory, playVod} from '../../redux/actions/vodActions';
import VodHistoryCard from '../../components/vod/vodHistoryCard';
import CheckBoxSelected from '../../../static/images/checkbox_selected.svg';
import CheckBoxUnselected from '../../../static/images/checkbox_unselected.svg';
import {AdultVodType, VodType} from '../../types/ajaxTypes';
import {Button} from '@rneui/themed';
import ConfirmationModal from '../../components/modal/confirmationModal';
import VodLiveStationListVertical from '../../components/vod/vodLiveStationListVertical';
import EmptyList from '../../components/common/emptyList';
import {ScrollView} from 'react-native-gesture-handler';
import FastImage from '../../components/common/customFastImage';
import {API_DOMAIN_TEST} from '../../utility/constants';

type AdultVodReturnType = {
  data: {
    List: Array<AdultVodType>;
    TotalPageCount: number;
  };
};



export default ({navigation, route}: RootStackScreenProps<'午夜场剧情'>) => {
  const [adultVodData, setAdultVodData] = useState<AdultVodType[]>([]);
  const {colors, textVariants, spacing, icons} = useTheme();
  const [page, setPage] = useState(1);
  const totalPageCount = useRef<number>(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetching, setIsFetching] = useState(false);


  const fetchVod = async (page: number) => {
    const data: AdultVodReturnType = await (
      await fetch(
        `${API_DOMAIN_TEST}svod/v1/vod?` +
          new URLSearchParams({
            page: page.toString(),
            limit: '10',
            class: route.params.class
          }),
      )
    ).json();
    return data.data;
  };

  const fetchNextPage = async () => {
    if (page >= totalPageCount.current) {
      setHasNextPage(false);
      return;
    } else {
      setHasNextPage(true);
    }
    setIsFetching(true);
    const vodData = await fetchVod(page);
    const data = vodData.List;
    setIsFetching(false);

    setAdultVodData(curr => [...curr, ...data]);
    setPage(page => page + 1);
  };

  const renderItem = ({item, index}: {item: AdultVodType; index: number}) => (
    <View
      style={{
        width: '48%',
        padding: 5,
        flex: 1,
      }}>
      <TouchableOpacity
        key={item.vod_id}
        style={styles.cardItem}
        onPress={() => {
          console.debug('vod pressed', item.vod_name);
        }}>
        <FastImage
          style={{flex: 1, borderRadius: 10}}
          source={{
            uri: item.vod_pic,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
        }}>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {item.vod_name}
        </Text>
      </View>
    </View>
  );

  useEffect(() => {
    fetchVod(page).then(data => {
      totalPageCount.current = data.TotalPageCount;
      setAdultVodData(curr => [...curr, ...data.List]);
      setPage(page => page + 1);
    });
  }, []);

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title={route.params.class}
        headerStyle={{marginBottom: spacing.m}}
      />
      <View>
        <FlatList
          data={adultVodData}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{justifyContent: 'space-evenly'}}
          onEndReached={fetchNextPage}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{...styles.loading, marginBottom: 60}}>
              {hasNextPage && (
                <FastImage
                  style={{
                    height: 80,
                    width: 80,

                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={require('../../../static/images/loading-spinner.gif')}
                  resizeMode={'contain'}
                />
              )}
              {!isFetching && page !== 1 && !hasNextPage && (
                <Text
                  style={{
                    ...textVariants.subBody,
                    color: colors.muted,
                    paddingTop: 12,
                  }}>
                  已经到底了
                </Text>
              )}
            </View>
          }
        />
      </View>
    </ScreenContainer>
  );
};

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
    backgroundColor: 'red',
  },
  cardItem: {
    // width: '100%', // Take up 48% of the available width (2 items per row with spacing)
    aspectRatio: 130 / 80,
    borderRadius: 10,
    // overflow: 'hidden', // Ensure content stays within borders
    // backgroundColor: 'green',
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  cardTitle: {
    color: '#FFF',
    textAlign: 'center',
  },
});
