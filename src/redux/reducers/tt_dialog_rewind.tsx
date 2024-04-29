
export enum NLine {
    NTheme = 'ON_FIRST_BOOT',
    NReportLarge = 'ON_APP_BOOT',
    NDataPlaylist = 'LOGIN_WARINING_MODAL_SHOWN',
    NOver = 'VIP_PROMOTION_MODAL_SHOWN',
    NCalendar = 'VIP_PROMOTION_BOOT',
    NSheet = 'VIP_PROMOTION_PURCHASE_UPDATE',
}

export type ttMintegral = {
    type: NLine,
    payload?: any,
}

export type ttEntry = {
    firstBoot: boolean,
    isLoginModalShown: boolean,
    isVipPromotionModalShown: boolean,
    vipPromotionCountdownStart: number,
    vipPromotionPurchaseNum: number,
    vipPromotionIntervel: NodeJS.Timeout | null,
}

const initialState: ttEntry = {
    firstBoot: true,
    isLoginModalShown: false,
    isVipPromotionModalShown: false,
    vipPromotionCountdownStart: 0,
    vipPromotionPurchaseNum: 0,
    vipPromotionIntervel: null,
}

export const backgroundReducer = (state = initialState, action: ttMintegral): ttEntry => {
    switch (action.type) {
        case NLine.NTheme: {
            return {
                ...state,
                firstBoot: false,
            }
        }
        case NLine.NReportLarge: {
            return {
                ...state,
                isLoginModalShown: false,
                isVipPromotionModalShown: false,
            }
        }
        case NLine.NDataPlaylist: {
            return {
                ...state,
                isLoginModalShown: true,
            }
        }
        case NLine.NOver: {
            return {
                ...state,
                isVipPromotionModalShown: true,
            }
        }
        case NLine.NCalendar: {
            if (action.payload?.interval && state.vipPromotionIntervel) {
                clearInterval(state.vipPromotionIntervel);
            }

            return {
                ...state,
                vipPromotionCountdownStart: action.payload?.start ?? state.vipPromotionCountdownStart,
                vipPromotionPurchaseNum: action.payload?.purchase ?? state.vipPromotionPurchaseNum,
                vipPromotionIntervel: action.payload?.interval ?? state.vipPromotionIntervel,
            }
        }
        case NLine.NSheet: {
            return {
                ...state,
                vipPromotionPurchaseNum: (state.vipPromotionPurchaseNum < action.payload)
                    ? action.payload
                    : state.vipPromotionPurchaseNum,
            }
        }
        default: return state;
    }
}