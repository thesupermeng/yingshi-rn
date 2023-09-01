// dont use constants first to prevent conflict in other file

export const changeScreenAction = (action: string) => ({
  type: 'change_screen_action',
  payload: action,
});

export const removeScreenAction = () => ({
  type: 'remove_screen_action',
});
