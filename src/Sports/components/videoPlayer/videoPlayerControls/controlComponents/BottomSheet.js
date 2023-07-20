import RBSheet from 'react-native-raw-bottom-sheet';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useRef} from 'react';
import {RecommendPanel} from './recommend/RecommendPanel';
import {SwitchSourcePanel} from './SwitchSourcePanel';
import {IconCloseBorderLess} from '../../../../assets';
import {PanelType, ShowControlType} from '../../config';
import {Cast} from '../../../cast/Cast';
import {Colors} from '../../../../global/colors';
import {
  updateVideoPropPipe,
  VideoPlayerActions,
} from '../../../../screens/Sports/MatchDetails/action';

export const BottomSheet = () => {
  const {bottomSheet} = useSelector(state => state.videoPlayerControl);
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    if (bottomSheet?.title && !bottomSheet.type) {
      closeSheet();
    } else if (bottomSheet.type) {
      ref.current.open();
    }
  }, [bottomSheet]);

  if (!bottomSheet?.title) {
    // sheet totally closed
    return null;
  }

  const onClose = () => {
    // remove sheet after animation done
    dispatch(updateVideoPropPipe([VideoPlayerActions.hideBottomSheet]));
  };
  const closeSheet = async () => {
    // console.log('called close');
    ref.current.close();
  };
  return (
    <>
      <RBSheet
        ref={ref}
        height={bottomSheet.height}
        closeOnDragDown={false}
        closeOnPressMask={true}
        onClose={onClose}
        customStyles={{
          wrapper: {
            backgroundColor: Colors.colorBackgroundOpacity(0.5),
          },
          container: {
            flexDirection: 'column',
            padding: 10,
          },
          draggableIcon: {
            backgroundColor: 'grey',
            height: 30,
          },
        }}>
        {/* <LoginComponent onClose={() => refRBSheet.current.close()} /> */}
        <SafeAreaView style={styles.titleContainer}>
          <View style={styles.dragIcon}></View>
          <View>
            <Text style={styles.titleText}>{bottomSheet.title}</Text>
          </View>
          <TouchableOpacity
            onPress={closeSheet}
            style={styles.iconCloseWrapper}>
            <Image
              style={styles.iconClose}
              source={IconCloseBorderLess}></Image>
          </TouchableOpacity>
        </SafeAreaView>

        {bottomSheet.type === ShowControlType.Caster && <Cast />}
        {bottomSheet.type === PanelType.Recommend && <RecommendPanel />}
        {bottomSheet.type === PanelType.Switch && (
          <SwitchSourcePanel isBottom />
        )}
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  dragIcon: {
    width: '10%',
    height: 5,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: Colors.colorInactiveDot,
  },
  titleContainer: {
    flex: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconCloseWrapper: {
    position: 'absolute',
    top: 15,
    right: 0,
    zIndex: 10,
  },
  iconClose: {
    width: 30,
    height: 30,
    tintColor: 'black',
  },
});
