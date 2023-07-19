import Api from '../../../../middleware/api';
import {Url} from '../../../../middleware/url';
import {
  liveRoom,
  liveRoomLineup,
  liveRoomUpdate,
  liveRoomMatchDetails,
  videoPlayerControl,
  liveRelatedStreams,
  adsList,
  videoAdsList,
  shareLink,
  matchId,
  matchProgram,
  cast,
  privateChatStatus,
} from '../reducer';
import {createShareLink} from '../../../../utility/utils';

export const setLiveRoom = list =>
  liveRoom.actions.setLiveRoom({liveRoom: list});

export const setLiveRoomUpdate = list =>
  liveRoomUpdate.actions.setLiveRoomUpdate({liveRoomUpdate: list});

export const setLiveRoomLineUp = list =>
  liveRoomLineup.actions.setLiveRoomLineUp({liveRoomLineUp: list});

export const setMatchDetails = list =>
  liveRoomMatchDetails.actions.setMatchDetails({liveRoomMatchDetails: list});

export const setLiveRelatedStreams = list =>
  liveRelatedStreams.actions.setLiveRelatedStreams({liveRelatedStreams: list});

export const clearLiveRelatedStreams = () =>
  liveRelatedStreams.actions.setLiveRelatedStreams({liveRelatedStreams: []});

export const setMatchProgram = list =>
  matchProgram.actions.setMatchProgram({matchProgram: list});

// videoPlayerControl
export const updateVideoPropPipe = props =>
  videoPlayerControl.actions.updateVideoPipe(props);
export const setVideoSource = (type, url) =>
  videoPlayerControl.actions.updateVideo({source: url, videoType: type});
export const setVideoFullScreen = val =>
  videoPlayerControl.actions.updateVideo({isFullScreen: val});
export const setVideoPlayerAction = val =>
  videoPlayerControl.actions.updateVideo({action: val});
export const setVideoControlProp = newProps =>
  videoPlayerControl.actions.updateVideo(newProps);
export const setVideoControlBottomPenalProp = prop =>
  videoPlayerControl.actions.updateBottomSheet(prop);
export const updateVideoShowControl = prop =>
  videoPlayerControl.actions.updateControl(prop);

export const VideoPlayerActions = {
  hideBottomSheet: {bottomSheet: {height: 0, title: '', type: ''}},
  hideControl: {
    showControl: {type: ''},
    rightPanel: {type: ''},
    bottomSheet: {type: ''},
  },
  setControl: prop => ({showControl: prop}),
  setVideoSource: (type, url) => ({source: url, videoType: type}),
  setRightPanel: prop => ({rightPanel: prop}),
  setBottomProp: prop => ({bottomSheet: prop}),
  setFullScreen: val => ({isFullScreen: val}),
};
export const hideControlAction = () =>
  videoPlayerControl.actions.updateControl({});
export const toggleVideoControlProp = prop =>
  videoPlayerControl.actions.toggleProp(prop);

export const updateVideoCast = prop => cast.actions.updateCast(prop);

export default class LiveRoomAction {
  constructor(dispatch, matchID) {
    this.dispatch = dispatch;
    this.matchID = matchID;
  }

  async getLiveRoomDetail(matchId) {
    const params = {id: matchId};
    const response = await Api.call(Url.liveRoomDetail, params, 'GET');
    const list = response?.data ?? [];
    // console.log('TESTTTTT', list);
    this.dispatch(setLiveRoom(list));
  }

  async getMatchDetails(matchId) {
    const params = {id: matchId};
    const response = await Api.call(Url.matchDetails, params, 'GET');
    const list = response?.data ?? [];
    this.dispatch(setMatchDetails(list));
    return response.data;
  }

  async getMatchUpdates(matchId) {
    const params = {id: matchId};
    const response = await Api.call(Url.matchUpdate, params, 'GET');
    const list = response?.data ?? [];
    this.dispatch(setLiveRoomUpdate(list));
  }

  async getMatchLineUp(matchId) {
    const params = {id: matchId};
    const response = await Api.call(Url.matchLineup, params, 'GET');
    const list = response?.data ?? [];
    this.dispatch(setLiveRoomLineUp(list));
  }

  async getRelatedStreams(matchId) {
    const params = {match_id: matchId};
    const response = await Api.call(Url.relatedStreams, params, 'GET');
    const list = response?.data ?? [];
    this.dispatch(setLiveRelatedStreams(list));
  }

  async getLiveRoomStatus(matchId) {
    const params = {id: matchId};
    const response = await Api.call(Url.liveRoomDetail, params, 'GET');
    const list = response?.data ?? [];
    return list?.status;
  }

  async sendGeneridLog(streamId) {
    const params = {action: 'stream', id: streamId};
    const response = await Api.call(Url.sendGenericLog, params);
    // console.log(response);
    return response.success;
    // const list = response?.data ?? [];
    // this.dispatch(setLiveRoom(list));
  }

  async deleteGeneridLog(streamId) {
    const params = {action: 'stream', id: streamId};
    const response = await Api.call(Url.deleteGenericLog, params, 'DELETE');
    // console.log(response);
    return response.success;
    // const list = response?.data ?? [];
    // this.dispatch(setLiveRoom(list));
  }

  async errorGeneridLog(streamId) {
    const params = {action: 'stream_error', id: streamId};
    const response = await Api.call(Url.sendGenericLog, params);
    return response.success;
    // const list = response?.data ?? [];
    // this.dispatch(setLiveRoom(list));
  }

  async watchDurationLog(match_id, stream_id, duration) {
    const params = {
      action: 'watch_duration',
      id: match_id,
      extra: {stream_id: stream_id, duration: Math.ceil(duration / 1000)},
    };
    console.log('send duration', params);
    await Api.call(Url.sendGenericLog, params);
  }

  async getAdsList() {
    const params = {page: 2};
    const response = await Api.call(Url.getAds, params, 'GET');
    const list = response.data ?? [];
    this.dispatch(adsList.actions.setAdsList({list}));
  }

  async getVideoAdsList() {
    const params = {page: 7};
    const response = await Api.call(Url.getAds, params, 'GET');
    const list = response.data ?? [];
    this.dispatch(videoAdsList.actions.setVideoAdsList({list}));
  }

  async clearVideoAdsList() {
    this.dispatch(videoAdsList.actions.setVideoAdsList({list: []}));
  }

  async getShareLink(matchId) {
    const link = await createShareLink('streams', matchId);
    if (link) {
      this.dispatch(shareLink.actions.setShareLink({shareLink: link}));
    }
    return link;
  }

  async setMatchID(matchID) {
    this.dispatch(matchId.actions.setMatchId({matchId: matchID}));
  }

  async getMatchPrograms(matchId) {
    const params = {id: matchId};
    const response = await Api.call(Url.getMatchProgram, params, 'GET');
    const list = response.data ?? [];
    this.dispatch(setMatchProgram(list));
    return response;
  }

  updateNewMessageStatus(value) {
    this.dispatch(privateChatStatus.actions.updatePrivateStatus(value));
  }
}
