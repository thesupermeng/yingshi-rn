import {useState} from 'react';
import {BrightnessControl} from './BrightnessControl';
import {VolumeControl} from './VolumeControl';
import {PopSlider} from './PopSlider';
import {
  LargeBrightness,
  MiddleBrightness,
  SmallBrightness,
} from '../../../../../assets';
import {LargeSound, MiddleSound, SmallSound} from '../../../../../assets';
import {useRef} from 'react';

export const SliderControlType = {
  Brightness: 'B',
  Volume: 'V',
};

const Icons = {
  [SliderControlType.Brightness]: {
    small: SmallBrightness,
    middle: MiddleBrightness,
    large: LargeBrightness,
  },
  [SliderControlType.Volume]: {
    small: SmallSound,
    middle: MiddleSound,
    large: LargeSound,
  },
};
const SliderControl = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [icon, setIcon] = useState({});
  const sliderTimeout = useRef(0);
  const [value, setValue] = useState(0);

  const onChange = (type, val) => {
    setIcon(Icons[type]);
    setValue(val);
    setShowSlider(true);

    clearTimeout(sliderTimeout.current);
    sliderTimeout.current = setTimeout(() => {
      setShowSlider(false);
    }, 3000);
  };
  return (
    <>
      <BrightnessControl
        onChange={val => {
          onChange(SliderControlType.Brightness, val);
        }}
      />
      <VolumeControl
        onChange={val => {
          onChange(SliderControlType.Volume, val);
        }}
      />
      {showSlider && (
        <PopSlider
          percent={100 * value}
          icon={
            value === 0 ? icon.small : value === 1 ? icon.large : icon.middle
          }
        />
      )}
    </>
  );
};
export default SliderControl;
