import {configureStore, createSlice} from '@reduxjs/toolkit';

export const emojiList = createSlice({
  name: 'emojiList',
  initialState: [],
  reducers: {
    addEmoji: (state, action) => {
      return [...state, action.payload.emoji];
    },
    removeEmoji: (state, action) => {
      return state.filter(x => x.id !== action.payload);
    },
    updateEmoji: (state, action) => {
      const idx = state.findIndex(x => x.id === action.payload.id);
      state[idx].status = action.payload.status;
      return state;
    },
    clear: (state, _) => (state = []),
  },
});

export default store = configureStore({
  reducer: {
    emojiList: emojiList.reducer,
  },
});
