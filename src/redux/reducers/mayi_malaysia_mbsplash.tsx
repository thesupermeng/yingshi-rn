import { mayi_Libswscale } from "@type/mayi_green"

export enum OMMGesture {
    OMMSigninupWeibo = 'SAVE_UPLOAD_HISTORY',
    OMMHooksHumidity = 'REMOVE_UPLOAD_HISTORY',
}

type mayi_PredictionwinService = {
    type: OMMGesture,
    payload?: any,
}

export type mayi_ConnectionIconuser = {
    uploadHistory: mayi_Libswscale[]
}

const initialState: mayi_ConnectionIconuser = {
    uploadHistory: [],
}

export const uploadReducer = (state = initialState, action: mayi_PredictionwinService): mayi_ConnectionIconuser => {
    switch (action.type) {
        case OMMGesture.OMMSigninupWeibo: {
            const newVideo: mayi_Libswscale = action.payload;

            let biggestId = 0;

            state.uploadHistory.forEach((video) => {
                if ((video?.id ?? 0) > biggestId) {
                    biggestId = video.id ?? 0;
                }
            });

            newVideo.id = biggestId + 1;
            newVideo.createAt = new Date().toString();
            newVideo.status = 'pending';

            return {
                ...state,
                uploadHistory: [newVideo, ...state.uploadHistory],
            }
        }
        case OMMGesture.OMMHooksHumidity: {
            const ids: number[] = action.payload;

            let uploadHistory = state.uploadHistory;

            if (ids.length > 0) {
                uploadHistory = state.uploadHistory.filter((video) => !ids.includes(video?.id ?? -1));
            }

            return {
                ...state,
                uploadHistory: uploadHistory,
            }
        }
        default: return state;
    }
}