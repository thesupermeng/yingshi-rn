import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import {useTheme} from '@react-navigation/native';
import {useAppSelector} from '../../hooks/hooks';
import {RootState} from '../../redux/store';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import FavoritePlaylistButton from '../../components/button/favoritePlaylistButton';
import {RootStackScreenProps} from '../../types/navigationTypes';
import VodWithDescriptionList from '../../components/vod/vodWithDescriptionList';

export default ({navigation}: RootStackScreenProps<'PlaylistDetail'>) => {
  const {textVariants, colors, spacing} = useTheme();
  const playlistReducer = useAppSelector(
    ({vodPlaylistReducer}: RootState) => vodPlaylistReducer,
  );
  const playlist = playlistReducer?.playlistDetails?.playlist;
  return (
    <>
      <ScreenContainer>
        <TitleWithBackButtonHeader
          title={playlist?.topic_name}
          headerStyle={{marginBottom: spacing.s}}
        />
        {playlist && (
          <View style={{gap: spacing.s, paddingBottom: 50}}>
            <View style={styles.header}>
              <Text
                numberOfLines={3}
                style={{
                  ...textVariants.small,
                  color: colors.text,
                  flex: 1,
                  marginRight: spacing.l,
                }}>
                {playlist?.topic_blurb}
              </Text>
              {/* <FavoritePlaylistButton playlist={playlist} /> */}
            </View>
            <Text
              style={{
                ...textVariants.small,
              }}>{`(共${playlist.vod_list.length}部)`}</Text>
            <VodWithDescriptionList vodList={playlist.vod_list} />
          </View>
        )}
      </ScreenContainer>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
