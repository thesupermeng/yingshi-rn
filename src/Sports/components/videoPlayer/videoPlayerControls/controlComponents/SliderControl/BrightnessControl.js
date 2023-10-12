import {ControlTemplate} from './ControlTemplate';
import SystemSetting from 'react-native-system-setting';

const levels = 10;
export const BrightnessControl = ({onChange}) => {
  const setDeviceBrightness = async val => {
    if (isNaN(val)) {
      return;
    }
    const curVal = await SystemSetting.getAppBrightness();
    let newVal = val > 0 ? curVal + 1 / levels : curVal - 1 / levels;
    newVal = Math.max(0, newVal);
    newVal = Math.min(1, newVal);
    onChange(newVal);
    // await SystemSetting.setAppBrightness(newVal);
    SystemSetting.setAppBrightness(newVal);
    return;
  };
  return (
    <ControlTemplate updateSysVal={setDeviceBrightness} style={{left: 10}} />
  );
};
