
export enum XFCopy {
    XFShared = 'ON_FIRST_BOOT',
    XFInvite = 'ON_APP_BOOT',
    XFArrowupIconarrowrightorange = 'LOGIN_WARINING_MODAL_SHOWN',
    XFStreaming = 'VIP_PROMOTION_MODAL_SHOWN',
    XFSmallbrightness = 'VIP_PROMOTION_BOOT',
    XFPositionfieldImagewatchlive = 'VIP_PROMOTION_PURCHASE_UPDATE',
}

export type wawaLibmapbufferjni = {
    type: XFCopy,
    payload?: any,
}

export type wawaLibhermes = {
    firstBoot: boolean,
    isLoginModalShown: boolean,
    isVipPromotionModalShown: boolean,
    vipPromotionCountdownStart: number,
    vipPromotionPurchaseNum: number,
    vipPromotionIntervel: NodeJS.Timeout | null,
}

const initialState: wawaLibhermes = {
    firstBoot: true,
    isLoginModalShown: false,
    isVipPromotionModalShown: false,
    vipPromotionCountdownStart: 0,
    vipPromotionPurchaseNum: 0,
    vipPromotionIntervel: null,
}

export const backgroundReducer = (state = initialState, action: wawaLibmapbufferjni): wawaLibhermes => {
    switch (action.type) {
        case XFCopy.XFShared: {
            return {
                ...state,
                firstBoot: false,
            }
        }
        case XFCopy.XFInvite: {
            return {
                ...state,
                isLoginModalShown: false,
                isVipPromotionModalShown: false,
            }
        }
        case XFCopy.XFArrowupIconarrowrightorange: {
            return {
                ...state,
                isLoginModalShown: true,
            }
        }
        case XFCopy.XFStreaming: {
            return {
                ...state,
                isVipPromotionModalShown: true,
            }
        }
        case XFCopy.XFSmallbrightness: {
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
        case XFCopy.XFPositionfieldImagewatchlive: {
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