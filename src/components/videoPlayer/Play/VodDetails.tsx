import { memo, useCallback, useMemo, useState } from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from '../../common/customFastImage';
import FavoriteButton from '../../../components/button/favoriteVodButton';
import { FavoriteSvg, SinaSvg, WechatSvg, QqSvg, PyqSvg } from '@static';

import { FavoriteVodReducerState } from '@redux';
import { useAppSelector } from '@hooks';
import { RootState } from '@redux';
import { useTheme } from '@react-navigation/native';

const definedValue = (val: any) => {
  if (val === undefined || val === null) {
    return '';
  }
  return val + ' ';
};

interface Props {
  adultMode: boolean;
  vod: any;
  handleOnShare: any;
}

const VodDetails = ({ adultMode, vod, handleOnShare }: Props) => {
  const { colors, spacing, textVariants } = useTheme();
  const vodFavouriteReducer: FavoriteVodReducerState = useAppSelector(
    ({ vodFavouritesReducer }: RootState) => vodFavouritesReducer,
  );
  const isFavorite = vodFavouriteReducer.favorites.some(
    x => x.vod_id === vod?.vod_id,
  );
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [actualNumberOfLines, setActualNumberOfLines] = useState(0);

  const handleTextLayout = useCallback((event: { nativeEvent: { lines: any } }) => {
    const { lines } = event.nativeEvent;
    setActualNumberOfLines(lines.length);
  }, []);

  return (
    <>
      <View style={styles.videoDescription}>
        {adultMode ? (
          <FastImage
            source={{ uri: vod?.vod_pic }}
            resizeMode={'cover'}
            style={{
              ...styles.descriptionImageHorizontal,
              ...styles.imageContainer,
            }}
            useFastImage={Platform.OS === 'android'}
          />
        ) : (
          <FastImage
            source={{ uri: vod?.vod_pic }}
            resizeMode={'cover'}
            style={{
              ...styles.descriptionImage,
              ...styles.imageContainer,
            }}
            useFastImage={Platform.OS === 'android'}
          />
        )}

        <View style={styles.descriptionContainer}>
          {vod && (
            <FavoriteButton
              initialState={isFavorite}
              vod={vod}
              leftIcon={
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: spacing.xxs,
                  }}>
                  <FavoriteSvg
                    width={18}
                    height={18}
                    style={{
                      color: isFavorite ? colors.primary : colors.muted,
                    }}
                  />
                  {isFavorite ? (
                    <Text
                      style={{
                        ...textVariants.subBody,
                        color: colors.primary,
                        paddingBottom: 3,
                      }}>
                      已收藏
                    </Text>
                  ) : (
                    <Text
                      style={{
                        ...textVariants.subBody,
                        color: colors.muted,
                        paddingBottom: 3,
                      }}>
                      收藏
                    </Text>
                  )}
                </View>
              }
            />
          )}
          <Text
            style={{ ...textVariants.subBody, color: colors.muted }}
            numberOfLines={2}>
            {`${definedValue(vod?.vod_year)}`}
            {`${definedValue(vod?.vod_area)}`}
            {`${definedValue(vod?.vod_class?.split(',').join(' '))}`}
          </Text>
          <Text style={{ ...textVariants.subBody, color: colors.muted }}>
            {`更新：${vod && !!vod?.vod_time_add
              ? new Date(vod?.vod_time_add * 1000)
                .toISOString()
                .slice(0, 10)
                .replace(/\//g, '-')
              : new Date().toISOString().slice(0, 10).replace(/\//g, '-')
              }`}
          </Text>
          {!adultMode && (
            <TouchableOpacity onPress={handleOnShare}>
              <View style={{ ...styles.share, gap: 10 }}>
                <Text
                  style={{
                    ...textVariants.subBody,
                    color: colors.muted,
                  }}>
                  分享：
                </Text>
                <WechatSvg />
                <PyqSvg />
                <SinaSvg />
                <QqSvg />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View>
        {!adultMode && (
          <Text style={styles.descriptionContainer2Text}>
            {`导演：${definedValue(vod?.vod_director)}${'\n'}` +
              `主演：${definedValue(vod?.vod_actor)}${'\n'}`}
          </Text>
        )}
        <TouchableOpacity
          onPress={() => {
            setIsCollapsed(!isCollapsed);
          }}>
          <View style={{ paddingBottom: 18 }}>
            <Text
              onTextLayout={handleTextLayout}
              style={styles.descriptionContainer2Text}
              numberOfLines={isCollapsed ? 2 : 20}>
              {`${definedValue(vod?.vod_content)}`}
            </Text>
          </View>
          <View style={{ paddingBottom: 0 }}>
            {isCollapsed && actualNumberOfLines >= 2 && (
              <FastImage
                style={{
                  flex: 1,
                  height: 12,
                  width: 14,
                  alignSelf: 'center',
                }}
                source={require('../../../static/images/down_arrow.png')}
                resizeMode={'contain'}
              />
            )}
            {!isCollapsed && actualNumberOfLines >= 2 && (
              <FastImage
                style={{
                  flex: 1,
                  height: 12,
                  width: 14,
                  alignSelf: 'center',
                }}
                source={require('../../../static/images/up_arrow.png')}
                resizeMode={'contain'}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  videoHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 50,
  },
  videoDescription: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  imageContainer: {
    flex: 2,
  },
  descriptionImage: {
    width: '100%',
    aspectRatio: 93 / 139,
    borderRadius: 10,
  },
  descriptionImageHorizontal: {
    width: '100%',
    aspectRatio: 120 / 72.5,
    borderRadius: 10,
  },
  descriptionContainer: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
  },
  descriptionContainerText: {
    fontSize: 17,
  },
  descriptionContainer2: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  descriptionContainer2Text: {
    color: '#9C9C9C',
    fontSize: 14,
  },
  share: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceApart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  episodeBtn: {
    borderRadius: 8,
  },
  episodeList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});

export default memo(VodDetails);
