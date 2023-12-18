import React, {useEffect, useState} from 'react';

import {View, Image, Text} from 'react-native';

//components
import {
  ColumnTopAlignContainer,
  ColumnBottomAlignContainer,
  RowLeftAlignContainer,
  ColumnCenterAlignContainer,
} from '../../../components/containers';
import Drawer from '../drawer';

//image
import {Zhubo, SmallOrangeMan} from '../../../assets';

//style
import styles from './style';
import {useNavigation} from '@react-navigation/native';

//redux
import {useDispatch, useSelector} from 'react-redux';

const ZhuboPage = props => {
  // console.log('ZHUBO param props page 123123', props?.route?.params?.streamID);
  const streamID = props?.route?.params?.streamID;
  const navigation = useNavigation();
  const [drawerVisible, setDrawerVisible] = useState(false);
  // let drawerVisible = true;
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      setDrawerVisible(!drawerVisible);
      console.log(drawerVisible);
    });
    return unsubscribe;
  }, [navigation, drawerVisible]);

  const listLive = useSelector(state => state.liveRoom);
  const [streamData, setStreamData] = useState();
  const streamsData = listLive?.streams;

  useEffect(() => {
    const streamsDataArrayData = streamsData?.map(index => {
      if (index?.streamer_id == streamID) {
        setStreamData(index);
      }

      return streamsDataArrayData;
    });
  }, [streamsData]);
  // console.log('take data', streamData);
  return (
    <ColumnTopAlignContainer style={styles.mainContainer}>
      {/* {drawerVisible && (
        <Drawer
          drawerVisible={drawerVisible}
          setDrawerVisible={setDrawerVisible}></Drawer>
      )} */}

      <RowLeftAlignContainer>
        <View>
          <Image
            style={styles.zhuboImage}
            source={
              streamData?.streamer?.avatar
                ? {uri: streamData?.streamer?.avatar}
                : Zhubo
            }></Image>
          <View style={styles.onLive}>
            <Text style={styles.onLiveText}>直播中</Text>
          </View>
        </View>

        <View style={styles.titleContainer}>
          <View style={styles.titleBox}>
            <Text style={styles.zhuboTitle}>
              {streamData?.streamer?.nickname}
            </Text>
            <Image
              resizeMode="stretch"
              style={styles.smallImageLogo}
              source={SmallOrangeMan}></Image>
          </View>

          {/* <Text
            style={
              styles.subscribeNumber
            }>{`订阅人数:${streamData?.streamer?.subscribed}`}</Text> */}
        </View>
      </RowLeftAlignContainer>
      {/* <View style={{flex: 1, backgroundColor: 'red'}}></View> */}
    </ColumnTopAlignContainer>
  );
};

export default ZhuboPage;
