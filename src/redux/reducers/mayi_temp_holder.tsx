import {
    ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, PLAY_VOD, TOGGLE_VOD_FAVORITES,
    TOGGLE_PLAYLIST_FAVORITES, VIEW_PLAYLIST, ADD_VOD_TO_HISTORY, CLEAR_HISTORY, REMOVE_VOD_HISTORY, SELECT_MINI_VOD_COLLECTION_ITEM
} from "@utility/mayi_middleware_apps"
import { mayi_LibapminsightaPlayer, mayi_PromotionComponent, mayi_DownDefaultfootballbg } from "@type/mayi_analytic_half"
import { mayi_Runtime, mayi_EmptyGradle } from "@type/mayi_green"

export interface mayi_FileBrightness extends mayi_EmptyGradle {
    timeWatched: number,
    recordedAt: Date,
    episodeWatched: number,
    isAdultVideo?: boolean,
    vodSourceId: number | undefined
}
interface mayi_Basketballawayteam {
    vod: mayi_FileBrightness | null,
}

export interface mayi_Middleware {
    history: Array<mayi_FileBrightness>,
    playVod: mayi_Basketballawayteam,
}

const initialState: mayi_Middleware = {
    history: [],
    playVod: {
        vod: null,
    },
}

export function vodReducer(state = initialState, action: mayi_PromotionComponent) {
    const firstPayloadItemWithTimestamp: mayi_FileBrightness = {
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
        default:
            return state
    }
}

type mayi_Qaag = {
    playMode?: 'adult' | 'normal'
} & mayi_EmptyGradle

export interface mayi_Full {
    favorites: Array<mayi_Qaag>,
}

const initialFavoriteState: mayi_Full = {
    favorites: [],
}

export function vodFavouritesReducer(state = initialFavoriteState, action: mayi_LibapminsightaPlayer) {
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


export interface mayi_Defaultlogo {
    playlistFavorites: Array<mayi_Runtime>,
    playlistDetails: {
        playlist: mayi_Runtime | null,
        isFavorite: boolean
    }
}

const vodFavPlaylistInit: mayi_Defaultlogo = {
    playlistFavorites: [],
    playlistDetails: {
        playlist: null,
        isFavorite: false
    }
}

export function vodPlaylistReducer(state = vodFavPlaylistInit, action: mayi_DownDefaultfootballbg) {
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