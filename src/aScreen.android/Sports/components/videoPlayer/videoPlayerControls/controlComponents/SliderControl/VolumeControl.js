import {ControlTemplate} from './ControlTemplate';
import SystemSetting from 'react-native-system-setting';

const levels = 10;

export const VolumeControl = ({onChange}) => {
  const setDeviceVolume = async val => {
    if (isNaN(val)) {
      return;
    }
    const curVal = await SystemSetting.getVolume();
    let newVal = val > 0 ? curVal + 1 / levels : curVal - 1 / levels;
    newVal = Math.max(0, newVal);
    newVal = Math.min(1, newVal);
    onChange(newVal);
    SystemSetting.setVolume(newVal);
    return;
  };
  return <ControlTemplate updateSysVal={setDeviceVolume} style={{right: 10}} />;
};
