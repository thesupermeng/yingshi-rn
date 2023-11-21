import React, {useEffect, useState} from 'react';
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
import FastImage from '../../components/common/customFastImage'

type FlatListType = {
  item: VodRecordType;
};

type AdultVodReturnType = {
  data: {
    List: Array<AdultVodType>
  }
}

const fetchVod = async (page: number) => {
  const data: AdultVodReturnType = await (await fetch('https://testapi.yingshi.tv/svod/v1/vod?' + new URLSearchParams({
    page: page.toString(), 
    limit: '50'
  }))).json()
  return data.data
}

export default ({navigation, route}: RootStackScreenProps<'午夜场剧情'>) => {
  const [adultVodData, setAdultVodData] = useState<AdultVodType[]>([])
  const {colors, textVariants, spacing, icons} = useTheme();
  const [page, setPage] = useState(1)

  const renderItem = ({item, index}: {item:AdultVodType, index: number}) => (
    <View
      style={{
        width:"48%",
        padding: 5, 
        flex: 1
      }}
    >

    <TouchableOpacity
      key={item.vod_id}
      style={styles.cardItem}
      onPress={() => {
        console.debug('vod pressed', item.vod_name)
      }}
    >
      <FastImage
          style={{flex: 1, borderRadius: 10}}
          source={{
            uri: item.vod_pic_thumb
          }}
        />
    </TouchableOpacity>
    <View
      style={{
        width: '100%'
      }}
    >
      <Text
        style={styles.cardTitle}
        numberOfLines={2}
      >{item.vod_name}</Text>

    </View>
    </View>

  )


  useEffect(() => {
    fetchVod(page)
      .then((data) => {
        setAdultVodData([...adultVodData, ...data.List])
        setPage(page => page + 1)
      })
  }, [])

  
  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="午夜场剧情"
        headerStyle={{marginBottom: spacing.m}}
      />
      <View>
        <FlatList
          data={adultVodData}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{justifyContent:'space-evenly'}}
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
    backgroundColor: 'red'
  },
  cardItem: {
    // width: '100%', // Take up 48% of the available width (2 items per row with spacing)
    aspectRatio: 130 / 80,
    borderRadius: 10,
    // overflow: 'hidden', // Ensure content stays within borders
    backgroundColor: 'green', 
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
