import { wawaGesture } from "@type/wawa_gradlew"

export enum VChart {
    VMegaphoneInit = 'SAVE_UPLOAD_HISTORY',
    VLivenodatabgimg = 'REMOVE_UPLOAD_HISTORY',
}

type wawaLibfbjniUser = {
    type: VChart,
    payload?: any,
}

export type wawaIndicatorPredictionbutton = {
    uploadHistory: wawaGesture[]
}

const initialState: wawaIndicatorPredictionbutton = {
    uploadHistory: [],
}

export const uploadReducer = (state = initialState, action: wawaLibfbjniUser): wawaIndicatorPredictionbutton => {
    switch (action.type) {
        case VChart.VMegaphoneInit: {
            const newVideo: wawaGesture = action.payload;

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
        case VChart.VLivenodatabgimg: {
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