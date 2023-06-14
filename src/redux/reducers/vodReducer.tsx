import { ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, PLAY_VOD, TOGGLE_VOD_FAVORITES, 
    TOGGLE_PLAYLIST_FAVORITES, VIEW_PLAYLIST, ADD_VOD_TO_HISTORY, CLEAR_HISTORY, REMOVE_VOD_HISTORY } from "../../constants"
import { VodActionType, VodPlaylistActionType } from "../../types/actionTypes"
import { VodTopicType, VodType } from "../../types/ajaxTypes"

export interface VodRecordType extends VodType {
    timeWatched: number,
    recordedAt: Date
}
interface PlayVodType {
    vod: VodRecordType | null,
    isFavorite: boolean
}

export interface VodReducerState {
    favorites: Array<VodRecordType>,
    history: Array<VodRecordType>,
    playVod: PlayVodType,
}

const initialState: VodReducerState = {
    favorites: [],
    history: [],
    playVod: {
        vod: null,
        isFavorite: true
    }
}

export function vodReducer(state = initialState, action: VodActionType) {
    const firstPayloadItemWithTimestamp: VodRecordType = {
        ...action.payload?.[0],
        recordedAt: new Date(),
        timeWatched: action.timeWatched === undefined ? 0 : action.timeWatched
    };
    switch (action.type) {
        case PLAY_VOD: {
            let play = state.history.find(vod => vod.vod_id === firstPayloadItemWithTimestamp.vod_id);
            if (play === undefined) {
                play = firstPayloadItemWithTimestamp;
            } 
            return {
                ...state,
                playVod: {
                    vod: play,
                    isFavorite: state.favorites.some(x => x.vod_id === firstPayloadItemWithTimestamp.vod_id)
                }
            };
        }
        case CLEAR_HISTORY:
            return {
                ...state,
                history: []
            };
        case ADD_VOD_TO_HISTORY: {
            return {
                ...state, history: [firstPayloadItemWithTimestamp, ...state.history.filter(vod => vod.vod_id !== firstPayloadItemWithTimestamp.vod_id)]
            };
        }
        case TOGGLE_VOD_FAVORITES: {
            let new_fav = [];
            let isVodFavorite = false;
            if (state.favorites.some(vod => vod.vod_id === firstPayloadItemWithTimestamp.vod_id)) {
                new_fav = state.favorites.filter(vod => vod.vod_id !== firstPayloadItemWithTimestamp.vod_id);
            } else {
                new_fav = [firstPayloadItemWithTimestamp, ...state.favorites];
                isVodFavorite = true;
            }
            return {
                ...state, favorites: new_fav, playVod: {
                    vod: firstPayloadItemWithTimestamp,
                    isFavorite: isVodFavorite
                }
            };
        }
        case ADD_VOD_TO_FAVORITES: { 
            return {
                ...state, favorites: [firstPayloadItemWithTimestamp, ...state.favorites], playVod: {
                    vod: firstPayloadItemWithTimestamp,
                    isFavorite: true
                }
            };
        }
        case REMOVE_VOD_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(vod => vod.vod_id !== firstPayloadItemWithTimestamp.vod_id),
                playVod: {
                    vod: firstPayloadItemWithTimestamp,
                    isFavorite: false
                }
            };
        case REMOVE_VOD_HISTORY: {
            return {
                ...state,
                history: state.history.filter(vod => !action.payload.includes(vod))
            };
        }
        default:
            return state
    }
}

export interface VodPlaylistReducerState {
    playlistFavorites: Array<VodTopicType>,
    playlistDetails: {
        playlist: VodTopicType | null,
        isFavorite: boolean
    }
}

const vodFavPlaylistInit: VodPlaylistReducerState = {
    playlistFavorites: [],
    playlistDetails: {
        playlist: null,
        isFavorite: false
    }
}

export function vodPlaylistReducer(state = vodFavPlaylistInit, action: VodPlaylistActionType) {
    switch (action.type) {
        case TOGGLE_PLAYLIST_FAVORITES: {
            let new_fav = state.playlistFavorites.filter(playlist => playlist.topic_id !== action.payload.topic_id);
            let isFavorite = false;
            if (new_fav.length === state.playlistFavorites.length) {
                new_fav = [action.payload, ...state.playlistFavorites];
                isFavorite = true;
            }
            return {
                ...state, playlistFavorites: new_fav, playlistDetails: {
                    playlist: action.payload,
                    isFavorite: isFavorite
                }
            };
        }
        case VIEW_PLAYLIST:
            return {
                ...state,
                playlistDetails: {
                    playlist: action.payload,
                    isFavorite: state.playlistFavorites.some(x => x.topic_id === action.payload.topic_id)
                }
            };
        default:
            return state
    }
}