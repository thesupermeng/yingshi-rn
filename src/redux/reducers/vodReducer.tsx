import {
    ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, PLAY_VOD, TOGGLE_VOD_FAVORITES,
    TOGGLE_PLAYLIST_FAVORITES, VIEW_PLAYLIST, ADD_VOD_TO_HISTORY, CLEAR_HISTORY, REMOVE_VOD_HISTORY, SELECT_MINI_VOD_COLLECTION_ITEM
} from "../../utility/constants"
import { FavoriteVodActionType, VodActionType, VodPlaylistActionType } from "../../types/actionTypes"
import { VodTopicType, VodType } from "../../types/ajaxTypes"

export interface VodRecordType extends VodType {
    timeWatched: number,
    recordedAt: Date,
    episodeWatched: number,
    isAdultVideo?: boolean,
}
interface PlayVodType {
    vod: VodRecordType | null,
}

export interface VodReducerState {
    history: Array<VodRecordType>,
    playVod: PlayVodType,
}

const initialState: VodReducerState = {
    history: [],
    playVod: {
        vod: null,
    },
}

export function vodReducer(state = initialState, action: VodActionType) {
    const firstPayloadItemWithTimestamp: VodRecordType = {
        ...action.payload?.[0],
        recordedAt: new Date(),
        timeWatched: action.timeWatched === undefined ? 0 : action.timeWatched,
        episodeWatched: action.episodeWatched === undefined ? 0 : action.episodeWatched,
    };

    switch (action.type) {
        case PLAY_VOD: {
            let play = state.history.find(vod => vod.vod_id === firstPayloadItemWithTimestamp.vod_id);
            if (play === undefined) {
                play = firstPayloadItemWithTimestamp;
            }

            delete play.isAdultVideo;

            return {
                ...state,
                playVod: {
                    vod: play
                }
            };
        }
        case CLEAR_HISTORY:
            return {
                ...state,
                history: []
            };
        case ADD_VOD_TO_HISTORY: {
            firstPayloadItemWithTimestamp.isAdultVideo = action.isAdultVideo === undefined ? false : action.isAdultVideo;
 
            const hst = state.history.filter(vod => vod.vod_id !== firstPayloadItemWithTimestamp.vod_id);
            hst.unshift(firstPayloadItemWithTimestamp);
            return {
                ...state, history: hst
            };
        }
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

type FavouriteVodType = {
    playMode?: 'adult' | 'normal'
} & VodType

export interface FavoriteVodReducerState {
    favorites: Array<FavouriteVodType>,
}

const initialFavoriteState: FavoriteVodReducerState = {
    favorites: [],
}

export function vodFavouritesReducer(state = initialFavoriteState, action: FavoriteVodActionType) {
    switch (action.type) {
        case ADD_VOD_TO_FAVORITES: {
            return {
                ...state, favorites: state.favorites.concat(action.payload)
            };
        }
        case REMOVE_VOD_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(vod => vod.vod_id !== action.payload.vod_id),
            };
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