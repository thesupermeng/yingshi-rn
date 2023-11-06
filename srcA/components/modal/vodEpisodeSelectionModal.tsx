import React, {
  useState,
  useMemo,
  memo,
  useEffect,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {VodEpisodeListType} from '../../types/ajaxTypes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SortAscIcon from '../../../static/images/sortAsc.svg';
import SortDescIcon from '../../../static/images/sortDesc.svg';
import BottomSheet from '../bottomSheet/bottomSheet';

interface Props {
  onConfirm: any;
  onCancel: any;
  episodes?: VodEpisodeListType;
  activeEpisode?: number;
  rangeSize?: number;
  isVisible: boolean; 
  handleClose: any;
}
function VodEpisodeSelectionModal({
  onConfirm,
  onCancel,
  episodes,
  isVisible,
  handleClose, 
  activeEpisode = 0,
  rangeSize = 50,
}: Props) {
  const {colors, textVariants, spacing} = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const [sortBy, setSortBy] = useState('asc');
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(activeEpisode / EPISODE_RANGE_SIZE),
  );
  const showEpisodeRangeStart = useMemo(
    () => currentIndex * EPISODE_RANGE_SIZE,
    [activeEpisode, currentIndex],
  );
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        episodes
          ? episodes.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE,
      ),
    [episodes, showEpisodeRangeStart],
  );
  const displayEpisodes = useMemo(() => {
    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd,
    );
    if (sortBy === 'desc') {
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  // set current index to 0 when vod changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeEpisode]);

  const sort = () => {
    if (sortBy === 'asc') {
      setSortBy('desc');
    } else {
      setSortBy('asc');
    }
  };

  return (
    <BottomSheet 
      isVisible={isVisible}
      onBackdropPress={handleClose}
      containerStyle={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        gap: spacing.m,
        alignItems: 'center',
      }}
      height='50%'
    >
      <View style={styles.episodeList}>
        <Text
          style={{
            ...styles.btn,
            ...textVariants.header
          }}>
          {`${showEpisodeRangeStart+1}-${showEpisodeRangeEnd} 集`}
        </Text>
        <TouchableOpacity style={styles.sortBtn} onPress={sort}>
          <View style={{paddingTop: 4}}>
            {sortBy === 'asc' ? <SortAscIcon /> : <SortDescIcon />}
          </View>
          <Text
            style={{
              textAlign: 'center',
              ...textVariants.header,
              color: colors.muted,
              fontSize: 15,
            }}>
            顺序
          </Text>
        </TouchableOpacity>
      </View>
      {(displayEpisodes && isVisible) &&
      <ScrollView
        contentContainerStyle={{
          ...styles.episodeList,
          paddingBottom: insets.bottom,
        }}>
        {displayEpisodes?.map((ep, idx) => (
          <TouchableOpacity
            key={`expand-${idx}`}
            onPress={() => {
              onConfirm(ep.nid);
              onCancel();
            }}>
            <View
              style={{
                backgroundColor:
                  ep.nid === activeEpisode ? colors.primary : colors.search,
                padding: spacing.s,
                minWidth: 60,
                marginRight: 'auto',
                marginBottom: spacing.s,
                borderRadius: 8,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 13,
                  textAlign: 'center',
                  fontWeight: '500',
                  color:
                    ep.nid === activeEpisode ? colors.selected : colors.muted,
                }}>
                {`${ep.name}`}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      }
    </BottomSheet>
  );
}

export default memo(VodEpisodeSelectionModal);

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  btn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  episodeList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'flex-start',
    paddingLeft: 8,
    marginBottom: 14,
  },
  sortBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
