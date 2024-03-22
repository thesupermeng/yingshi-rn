import {VideoLiveType} from '../../global/wd_group_recommendation';

export const AnimationDuration = 300;
export const AnimationHeight = 400;
export const ShowControlTimeoutDuration = 4000;
export const CommonAnimationProp = {
  useNativeDriver: false,
  duration: AnimationDuration,
};
export const PanelType = {
  Switch: 1,
  Recommend: 2,
  Stat: 3,
};

export const ShowControlType = {
  Main: 1,
  TopBottom: 2,
  SwitchSourcePanel: 3,
  RecommendPanel: 4,
  LiveStat: 5,
  Right: 6,
  Locker: 7,
  Caster: 8,
};
const commonBtns = ['PLAYPAUSE', 'BACK', PanelType.Switch];
const liveOnlyButtons = [PanelType.Recommend, PanelType.Stat];

export const ControlButtons = Object.fromEntries(
  [...commonBtns, ...liveOnlyButtons].map(a => [a, true]),
);

export const ShowControlsButtons = {
  [VideoLiveType.LIVE]: Object.fromEntries(
    [...commonBtns, ...liveOnlyButtons].map(a => [a, true]),
  ),
  [VideoLiveType.ANIMATION]: Object.fromEntries(
    [...commonBtns].map(a => [a, true]),
  ),
};

export const CastingStatus = {
  Casting: 1,
  Casted: 2,
  Error: 3,
  NotCasting: 4,
};

export const CASTING_WAITING_TIME = 7000;
// console.log('ControlButtons', ShowControlsButtons);
