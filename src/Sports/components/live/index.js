import React, {useEffect, useState, useMemo} from 'react';

import {StatusBar, View} from 'react-native';
import styles from './style';
import EmptyDataPage from '../../components/emptyDataPage';
import Basic from '../../components/basicApp';
import ZhuboPage from './zhuboPage';

//components
import LiveVideo from '../../components/liveVideo';
import {ColumnTopAlignContainer} from '../../components/containers';
import SmallLiveTapBar from '../../components/smallLiveTapBar';
import LoginModal from '../../components/loginModal';
import {SafeAreaView} from 'react-native-safe-area-context';
import Orientation from 'react-native-orientation-locker';
import LiveEndModal from '../../components/liveEndModal';
import LoadingComponent from '../../components/loadingComponent';

//Redux
import reducer from './reducer';
import {Provider, useDispatch, useSelector} from 'react-redux';
import LiveRoomAction from './action';
import {configureStore} from '@reduxjs/toolkit';
import {useNavigation} from '@react-navigation/native';

const tabList = [
  {
    name: 'Zhubo',
    title: '线路',
    page: ZhuboPage,
    params: {},
  },
  {
    name: 'MatchDetail',
    title: '赛况',
    page: EmptyDataPage,
    params: {},
  },
  // {
  //   name: 'MatchSub',
  //   title: '订阅',
  //   page: Basic,
  //   params: {},
  // },
];

const Live = props => {
  console.log('route', props.route);
  const navigation = useNavigation();

  const onHandleBack = () => {
    navigation.goBack();
  };
  const matchID = props?.route?.params?.matchId;
  const streamID = props?.route?.params?.streamerId;
  // const streamID = props?.route?.params?.streamerId;
  const sheetRef = React.useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const liveRoomAction = new LiveRoomAction(dispatch);

  useEffect(() => {
    // liveRoomAction.getLiveRoomDetail('3003689021');
    liveRoomAction.getLiveRoomDetail(matchID);
  }, []);
  useEffect(() => {
    // Orientation.unlockAllOrientations();
    // return () => {
    Orientation.lockToPortrait();
    // };
  }, []);

  const listLive = useSelector(state => state.liveRoom);

  // console.log('listLIFEEEE', listLive?.);

  return (
    <SafeAreaView style={{flex: 1}}>
      {Object.keys(listLive).length > 0 ? (
        <ColumnTopAlignContainer background={'red'}>
          <LiveVideo
            liveData={listLive}
            fullScreen={props.fullScreen}
            streamID={streamID}
            setIsEnd={props.setIsEnd}
            setModalVisible={props.setModalVisible}
            changeFullscreen={props.changeFullscreen}></LiveVideo>

          {/* <TabNavigator></TabNavigator> */}
          <SmallLiveTapBar streamID={streamID} tabList={tabList} />
          {/* {modalVisible && <LoginModal refRBSheet={sheetRef} />} */}
        </ColumnTopAlignContainer>
      ) : (
        <LoadingComponent></LoadingComponent>
      )}
    </SafeAreaView>
  );
};

const FullscreenPlayer = props => {
  const matchID = props?.route?.params?.matchId;
  const streamID = props?.route?.params?.streamerId;
  const sheetRef = React.useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const liveRoomAction = new LiveRoomAction(dispatch);
  useEffect(() => {
    // liveRoomAction.getLiveRoomDetail('3003689021');
    liveRoomAction.getLiveRoomDetail(matchID);
  }, []);

  const listLive = useSelector(state => state.liveRoom);

  useEffect(() => {
    // Orientation.unlockAllOrientations();
    // return () => {
    Orientation.lockToLandscape();
    // };
  }, []);

  return (
    <View style={{flex: 1, display: 'flex', backgroundColor: 'black'}}>
      {Object.keys(listLive).length > 0 && (
        <LiveVideo
          liveData={listLive}
          fullScreen={props.fullScreen}
          streamID={streamID}
          setIsEnd={props.setIsEnd}
          setModalVisible={props.setModalVisible}
          changeFullscreen={props.changeFullscreen}></LiveVideo>
      )}
    </View>
  );
};

export default LivePage = ({route, navigation}) => {
  const store = useMemo(() => configureStore({reducer}), []);
  const [fullScreen, setFullScreen] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const matchID = route?.params?.matchId;
  const dispatch = useDispatch();
  const liveRoomAction = new LiveRoomAction(dispatch);
  var interval;
  // const navigation = useNavigation();

  const handleNavigate = () => {
    clearInterval(interval);
    Orientation.lockToPortrait();
    navigation.popToTop();
    navigation.navigate('All');
  };
  // console.log('AAAAAAAAAAAAAA', fullScreen);

  const changeFullscreen = () => {
    setFullScreen(!fullScreen);
    // console.log('change fullscreen', fullScreen);
  };

  return (
    <Provider store={store}>
      {fullScreen ? (
        <FullscreenPlayer
          route={route}
          fullScreen={fullScreen}
          setIsEnd={setIsEnd}
          setModalVisible={setModalVisible}
          changeFullscreen={changeFullscreen}
        />
      ) : (
        <Live
          route={route}
          fullScreen={fullScreen}
          setIsEnd={setIsEnd}
          setModalVisible={setModalVisible}
          changeFullscreen={changeFullscreen}
        />
      )}
      <LiveEndModal
        isOpen={modalVisible}
        closeModal={setModalVisible}
        handleNavigate={handleNavigate}></LiveEndModal>
      {/* <LoadingModal></LoadingModal> */}
    </Provider>
  );
};
