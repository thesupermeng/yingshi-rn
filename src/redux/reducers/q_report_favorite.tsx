import { QRWModulePosition } from "@type/wpk_long"

export enum DHPenaltyWhatsapp {
    DHMember = 'SAVE_UPLOAD_HISTORY',
    DHProject = 'REMOVE_UPLOAD_HISTORY',
}

type XILAnalytic = {
    type: DHPenaltyWhatsapp,
    payload?: any,
}

export type GDiceLogin = {
    uploadHistory: QRWModulePosition[]
}

const initialState: GDiceLogin = {
    uploadHistory: [],
}

export const uploadReducer = (state = initialState, action: XILAnalytic): GDiceLogin => {
    switch (action.type) {
        case DHPenaltyWhatsapp.DHMember: {
            const newVideo: QRWModulePosition = action.payload;

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
        case DHPenaltyWhatsapp.DHProject: {
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