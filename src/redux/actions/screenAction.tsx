// dont use constants first to prevent conflict in other file
type screenAction = {
  screenAction: string;
};

export const changeScreenAction = (action: screenAction) => ({
  type: 'change_screen_action',
  payload: action,
});

export const removeScreenAction = () => ({
  type: 'remove_screen_action',
});
