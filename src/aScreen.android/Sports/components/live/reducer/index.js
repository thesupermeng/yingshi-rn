import {createSlice} from '@reduxjs/toolkit';

export const liveRoom = createSlice({
  name: 'liveRoom',
  initialState: {},
  reducers: {
    setLiveRoom: (state, action) => {
      return (state = action.payload.liveRoom);
    },
  },
});

const reducer = {
  liveRoom: liveRoom.reducer,
};

export default reducer;
