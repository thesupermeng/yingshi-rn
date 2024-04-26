import {
    ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, PLAY_VOD, TOGGLE_VOD_FAVORITES,
    TOGGLE_PLAYLIST_FAVORITES, VIEW_PLAYLIST, ADD_VOD_TO_HISTORY, CLEAR_HISTORY, REMOVE_VOD_HISTORY, SELECT_MINI_VOD_COLLECTION_ITEM
} from "@utility/ww_icon"
import { wwLibreactnativeblob, wwStationsConstants, wwVideovar } from "@type/ww_bang"
import { wwFirebase, wwControl } from "@type/ww_dycreator_result"

export enum SUFloatingManifest {
    SUJingdong = 'ON_VIEW_SHORT_VOD',
}

export interface wwYellowredcardRelease extends wwControl {
    timeWatched: number,
    recordedAt: Date,
    episodeWatched: number,
    isAdultVideo?: boolean,
    vodSourceId: number | undefined
}
interface wwMoonPush {
    vod: wwYellowredcardRelease | null,
}

export interface wwMbjscommon {
    history: Array<wwYellowredcardRelease>,
    playVod: wwMoonPush,
    totalShortVodView: number,
}

const initialState: wwMbjscommon = {
    history: [],
    playVod: {
        vod: null,
    },
    totalShortVodView: 0,
}

export function vodReducer(state = initialState, action: wwStationsConstants) {
    const firstPayloadItemWithTimestamp: wwYellowredcardRelease = {
        ...action.payload?.[0],
        recordedAt: new Date(),
        timeWatched: action.timeWatched === undefined ? 0 : action.timeWatched,
        episodeWatched: action.episodeWatched === undefined ? 0 : action.episodeWatched,
        vodSourceId: action.vodSourceId
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
                    vod: {
                        ...play,
                        episodeWatched: action.episodeWatched ?? play.episodeWatched,
                        vodSourceId: action.vodSourceId ?? play.vodSourceId,
                        timeWatched: action.timeWatched ?? play.timeWatched
                    }
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
        case SUFloatingManifest.SUJingdong: {
            return {
                ...state,
                totalShortVodView: (state.totalShortVodView ?? 0) + 1,
            }
        }
        default:
            return state
    }
}

type wwIconrefreshIconwatchnow = {
    playMode?: 'adult' | 'normal'
} & wwControl

export interface wwBang {
    favorites: Array<wwIconrefreshIconwatchnow>,
}

const initialFavoriteState: wwBang = {
    favorites: [],
}

export function vodFavouritesReducer(state = initialFavoriteState, action: wwLibreactnativeblob) {
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


export interface wwIconsaveimage {
    playlistFavorites: Array<wwFirebase>,
    playlistDetails: {
        playlist: wwFirebase | null,
        isFavorite: boolean
    }
}

const vodFavPlaylistInit: wwIconsaveimage = {
    playlistFavorites: [],
    playlistDetails: {
        playlist: null,
        isFavorite: false
    }
}

export function vodPlaylistReducer(state = vodFavPlaylistInit, action: wwVideovar) {
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