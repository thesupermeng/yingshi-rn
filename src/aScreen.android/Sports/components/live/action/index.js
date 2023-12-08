import Api from '../../../middleware/api';
import {Url} from '../../../middleware/url';
import {liveRoom} from '../reducer';

export const setLiveRoom = list =>
  liveRoom.actions.setLiveRoom({liveRoom: list});

export default class LiveRoomAction {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  async getLiveRoomDetail(matchId) {
    const params = {id: matchId};
    const response = await Api.call(Url.liveRoomDetail, params, 'GET');
    const list = response?.data ?? [];
    this.dispatch(setLiveRoom(list));
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
    console.log(response);
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
    await Api.call(Url.sendGenericLog, params);
  }
}
