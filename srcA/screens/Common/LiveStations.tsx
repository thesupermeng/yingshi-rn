import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import {RootStackScreenProps} from '../../types/navigationTypes';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {RootState} from '@redux/store';

import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import {VodRecordType, VodReducerState} from '@redux/reducers/vodReducer';
import {removeVodsFromHistory, playVod} from '@redux/actions/vodActions';
import VodHistoryCard from '../../components/vod/vodHistoryCard';
import CheckBoxSelected from '@static/images/checkbox_selected.svg';
import CheckBoxUnselected from '@static/images/checkbox_unselected.svg';
import {VodType} from '../../types/ajaxTypes';
import {Button} from '@rneui/themed';
import ConfirmationModal from '../../components/modal/confirmationModal';
import VodLiveStationListVertical from '../../components/vod/vodLiveStationListVertical';
import EmptyList from '../../components/common/emptyList';
import {ScrollView} from 'react-native-gesture-handler';

type FlatListType = {
  item: VodRecordType;
};
export default ({navigation, route}: RootStackScreenProps<'电视台列表'>) => {
  const {liveStationItemList} = route.params;
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: VodReducerState = useAppSelector(
    ({vodReducer}: RootState) => vodReducer,
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<VodType>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: VodType) => {
    const filtered = removeHistory.filter(x => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };
  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="电视台"
        headerStyle={{marginBottom: spacing.m}}
      />
      <ScrollView style={{marginBottom: spacing.xl}}>
        {liveStationItemList != undefined && liveStationItemList.length > 0 && (
          <View
            style={{
              ...styles.descriptionContainer,
              gap: spacing.m,
              alignItems: 'center',
            }}>
            <VodLiveStationListVertical
              itemList={liveStationItemList}
              itemsPerRow={2}
              numOfRows={100}
            />
          </View>
        )}
        {/* {
                    history && history.length === 0 &&
                    <EmptyList description='暂无播放历史' />
                } */}
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 1,
  },
});
