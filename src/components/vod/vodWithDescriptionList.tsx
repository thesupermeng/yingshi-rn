import React, { useCallback, useEffect, useState } from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';

import {VodType} from '../../types/ajaxTypes';
import {useAppDispatch} from '../../hooks/hooks';
import FavoriteVodCard from './favoriteVodCard';
import {playVod} from '../../redux/actions/vodActions';

interface Props {
  vodList: Array<VodType>;
}

type FlatListType = {
  item: VodType;
};

export default ({vodList}: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {spacing, textVariants, colors} = useTheme();

  const renderItem = useCallback( // optimisation as per documentation
    ({item}: FlatListType) => (
      <FavoriteVodCard
        hideFavoriteButton={true}
        vod={item}
        onPress={() => {
          dispatch(playVod(item));
          navigation.navigate('播放', {vod_id: item.vod_id});
        }}
      />
    ), []
  )

  if (vodList.length > 0) { // under normal condition, render the flatlist
    return (
      <View>
          <FlatList
            data={vodList}
            contentContainerStyle={{paddingBottom: 200}}
            renderItem={renderItem}
            ListFooterComponent={
              <View style={{...styles.loading, marginBottom: 100}}>
                <Text
                  style={{
                    ...textVariants.subBody,
                    color: colors.muted,
                    paddingTop: 12,
                    paddingBottom: 20,
                  }}>
                  没有更多了
                </Text>
              </View>
            }
            keyExtractor={(item, index)=>index.toString()} // optimisation as per documentation
            initialNumToRender={5} // optimisation as per documentation
            removeClippedSubviews={true} // optimisation as per documentation
          />
      </View>
    );
  } else { // else dont render anything at all
    return <></>
  }

};

const styles = StyleSheet.create({
  noMore: {
    textAlign: 'center',
    marginTop: 30,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
