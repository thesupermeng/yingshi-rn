import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {hideControlAction} from '../../../../../pages/matchDetails/action';
import {showToast} from '../../../../../utility/toast';
import {ShowControlType} from '../../../config';
import {showControlAction} from '../../../util/util';
import {PanAreaVertical} from './PanAreaVertical';

export const ControlTemplate = ({updateSysVal, style = {}}) => {
  const videoPlayerControl = useSelector(state => state.videoPlayerControl);
  const dispatch = useDispatch();
  const onPress = () => {
    if (videoPlayerControl.isLocked) {
      // when screen is locked
      dispatch(showControlAction(ShowControlType.Locker));
      showToast('请先解除屏幕锁定');
    } else if (!videoPlayerControl.showControl?.type) {
      // when no control is showing
      dispatch(showControlAction(ShowControlType.TopBottom));
    } else {
      // hide current control
      dispatch(hideControlAction());
    }
  };
  const onChange = d => {
    console.log('change d', d);
    updateSysVal(d);
  };
  return (
    <>
      <View style={[styles.container, style]}>
        <PanAreaVertical step={10} onPress={onPress} onChange={onChange} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '20%',
    bottom: '25%',
    width: '25%',
  },
});
