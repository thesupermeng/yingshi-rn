import {createSlice} from '@reduxjs/toolkit';
import {ShowControlTimeoutDuration} from '../../../../components/videoPlayer/config';
import {mergeDeep} from '../../../../utility/utils';

export const liveRoom = createSlice({
  name: 'liveRoom',
  initialState: {},
  reducers: {
    setLiveRoom: (state, action) => {
      // console.log('reducer123123', action.payload);
      return (state = action.payload.liveRoom);
    },
  },
});

export const liveRoomUpdate = createSlice({
  name: 'liveRoomUpdate',
  initialState: {},
  reducers: {
    setLiveRoomUpdate: (state, action) => {
      return (state = action.payload.liveRoomUpdate);
    },
  },
});
export const liveRoomLineup = createSlice({
  name: 'liveRoomLineup',
  initialState: {},
  reducers: {
    setLiveRoomLineUp: (state, action) => {
      return (state = action.payload.liveRoomLineUp);
    },
  },
});

export const liveRoomMatchDetails = createSlice({
  name: 'liveRoomMatchDetails',
  initialState: {},
  reducers: {
    setMatchDetails: (state, action) => {
      return (state = action.payload.liveRoomMatchDetails);
    },
  },
});

export const liveRelatedStreams = createSlice({
  name: 'liveRelatedStreams',
  initialState: {liveRelatedStreams: []},
  reducers: {
    setLiveRelatedStreams: (state, action) => {
      return (state = action.payload.liveRelatedStreams);
    },
  },
});

export const videoPlayerControl = createSlice({
  name: 'videoPlayerControl',
  initialState: {
    matchId: '',
    isFullScreen: false,
    source: '',
    videoType: '',
    resizeMode: 'contain',
    isPaused: false,
    isLocked: false,
    rightPanel: {},
    bottomSheet: {},
    showControl: {
      type: '',
      timeout: 0,
    },
    action: '',
  },
  reducers: {
    setSource: (state, action) => {
      state.source = action.payload;
    },
    setVideoType: (state, action) => {
      state.videoType = action.payload;
    },
    updateVideoPipe: (state, action) => {
      (action.payload || []).forEach(obj => {
        state = mergeDeep(state, obj);
      });
    },
    updateVideo: (state, action) => {
      state = {...state, ...action.payload};
      return state;
    },
    toggleProp: (state, action) => {
      key = action.payload;
      state = {...state};
      state[key] = !state[key];
      return state;
    },
    updateBottomSheet: (state, action) => {
      state = {...state, bottomSheet: action.payload};
      return state;
    },
    updateControl: (state, action) => {
      state = {...state, showControl: action.payload};
      return state;
    },
    showControl: (state, action = {}) => {
      console.log('action', action);
      const {type} = action.payload || {};
      state = {
        ...state,
        showControl: {
          type: type || state.showControl.type || '',
          timeout: new Date().getTime() + ShowControlTimeoutDuration,
        },
      };
      return state;
    },
  },
});

export const cast = createSlice({
  name: 'cast',
  initialState: {
    deviceList: [],
    isSearching: false,
    status: '',
    deviceName: '',
    lastCastInfo: {
      matchId: '',
      source: '',
    },
    showFloater: false,
  },
  reducers: {
    updateCast: (state, action) => (state = {...state, ...action.payload}),
  },
});
export const adsList = createSlice({
  name: 'adsList',
  initialState: [],
  reducers: {
    setAdsList: (state, action) => (state = action.payload.list),
  },
});

export const videoAdsList = createSlice({
  name: 'videoAdsList',
  initialState: [],
  reducers: {
    setVideoAdsList: (state, action) => (state = action.payload.list),
  },
});

export const shareLink = createSlice({
  name: 'shareLink',
  initialState: '',
  reducers: {
    setShareLink: (state, action) => (state = action.payload.shareLink),
  },
});

export const matchId = createSlice({
  name: 'matchId',
  initialState: '',
  reducers: {
    setMatchId: (state, action) => (state = action.payload.matchId),
  },
});

export const matchProgram = createSlice({
  name: 'matchProgram',
  initialState: '',
  reducers: {
    setMatchProgram: (state, action) => (state = action.payload.matchProgram),
  },
});

export const privateChatStatus = createSlice({
  name: 'privateChatStatus',
  initialState: {isNewMessage: false},
  reducers: {
    updatePrivateStatus: (state, action) => {
      state.isNewMessage = action.payload.isNewMessage;
      return state;
    },
  },
});

const reducer = {
  liveRoom: liveRoom.reducer,
  liveRoomUpdate: liveRoomUpdate.reducer,
  liveRoomLineup: liveRoomLineup.reducer,
  liveRoomMatchDetails: liveRoomMatchDetails.reducer,
  videoPlayerControl: videoPlayerControl.reducer,
  liveRelatedStreams: liveRelatedStreams.reducer,
  adsList: adsList.reducer,
  videoAdsList: videoAdsList.reducer,
  shareLink: shareLink.reducer,
  matchId: matchId.reducer,
  matchProgram: matchProgram.reducer,
  cast: cast.reducer,
  privateChatStatus: privateChatStatus.reducer,
};

export default reducer;
