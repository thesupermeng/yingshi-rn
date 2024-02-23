
export enum BackgroundActionEventType {
    ON_FIRST_BOOT = 'ON_FIRST_BOOT',
    ON_APP_BOOT = 'ON_APP_BOOT',
    LOGIN_WARINING_MODAL_SHOWN = 'LOGIN_WARINING_MODAL_SHOWN',
    VIP_PROMOTION_MODAL_SHOWN = 'VIP_PROMOTION_MODAL_SHOWN',
    VIP_PROMOTION_BOOT = 'VIP_PROMOTION_BOOT',
    VIP_PROMOTION_PURCHASE_UPDATE = 'VIP_PROMOTION_PURCHASE_UPDATE',
}

export type BackgroundActionType = {
    type: BackgroundActionEventType,
    payload?: any,
}

export type BackgroundType = {
    firstBoot: boolean,
    isLoginModalShown: boolean,
    isVipPromotionModalShown: boolean,
    vipPromotionCountdownStart: number,
    vipPromotionPurchaseNum: number,
    vipPromotionIntervel: NodeJS.Timeout | null,
}

const initialState: BackgroundType = {
    firstBoot: true,
    isLoginModalShown: false,
    isVipPromotionModalShown: false,
    vipPromotionCountdownStart: 0,
    vipPromotionPurchaseNum: 0,
    vipPromotionIntervel: null,
}

export const backgroundReducer = (state = initialState, action: BackgroundActionType): BackgroundType => {
    switch (action.type) {
        case BackgroundActionEventType.ON_FIRST_BOOT: {
            return {
                ...state,
                firstBoot: false,
            }
        }
        case BackgroundActionEventType.ON_APP_BOOT: {
            return {
                ...state,
                isLoginModalShown: false,
                isVipPromotionModalShown: false,
            }
        }
        case BackgroundActionEventType.LOGIN_WARINING_MODAL_SHOWN: {
            return {
                ...state,
                isLoginModalShown: true,
            }
        }
        case BackgroundActionEventType.VIP_PROMOTION_MODAL_SHOWN: {
            return {
                ...state,
                isVipPromotionModalShown: true,
            }
        }
        case BackgroundActionEventType.VIP_PROMOTION_BOOT: {
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
        case BackgroundActionEventType.VIP_PROMOTION_PURCHASE_UPDATE: {
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