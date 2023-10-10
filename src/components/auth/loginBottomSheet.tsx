import React, {
  useState,
  useMemo,
  RefObject,
  memo,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {VodEpisodeListType, VodEpisodeType} from '../../types/ajaxTypes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {GestureHandlerRootView, FlatList} from 'react-native-gesture-handler';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import SortAscIcon from '../../static/images/sortAsc.svg';
import SortDescIcon from '../../static/images/sortDesc.svg';
import FastImage from 'react-native-fast-image';
import {useQuery} from '@tanstack/react-query';
import {
  selectMiniVodCollection,
  setFromMiniVodCollection,
} from '../../redux/actions/miniVodActions';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from '../../utility/constants';
import {
  CollectionResponseType,
  MiniVideoCollectionItem,
} from '../../types/ajaxTypes';
import {getMinuteSecond} from '../../utility/helper';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {RootState} from '../../redux/store';
import {MiniVodReducerState} from '../../redux/reducers/miniVodReducer';
import {Login} from '../profile/login';
import {
  resetBottomSheetForm,
  showRegisterAction,
} from '../../redux/actions/screenAction';
interface Props {
  sheetRef?: RefObject<BottomSheetMethods>;
  displayMode?: string;
}

function LoginBottomSheet({sheetRef, displayMode}: Props) {
  const dispatch = useAppDispatch();
  const scrollRef = useRef<any>();
  const [snapPoints, setSnapPoints] = useState([1, 330]); // Initial snap points
  const renderBackdrop = useCallback(
    (
      props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps,
    ) => <BottomSheetBackdrop {...props} />,
    [],
  );

  //state for child
  const [email, setEmail] = useState('');

  return (
    <BottomSheet
      ref={sheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={index => {
        if (index) {
          dispatch(resetBottomSheetForm());
        }
        Keyboard.dismiss();
      }}
      backdropComponent={renderBackdrop}
      backgroundStyle={{
        backgroundColor: '#171717',
      }}
      handleIndicatorStyle={{
        backgroundColor: '#414040',
        width: 50,
      }}
      onClose={() => {
        setEmail('');
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, flexDirection: 'column-reverse'}}>
        <Login
          setEmail={setEmail}
          email={email}
          dismiss={() => {}}
          goToRegister={() => {
            dispatch(showRegisterAction());
          }}
        />
      </KeyboardAvoidingView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    height: '100%',
  },
  episodeList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'flex-start',
    paddingLeft: 10,
  },
  bottomSheetItem: {
    width: '100%',
    marginVertical: 1,
    padding: 7,
    // paddingVertical: 8,
    borderRadius: 6,
    flex: 1,
  },
  selectedBottomSheetItem: {
    backgroundColor: '#303030',
  },
  notSelected: {},
});

export default memo(LoginBottomSheet);
