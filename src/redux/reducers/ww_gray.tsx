
export enum CSShortSina {
    CSPlus = 'ON_FIRST_BOOT',
    CSStringKlevin = 'ON_APP_BOOT',
    CSTempnodatagif = 'LOGIN_WARINING_MODAL_SHOWN',
    CSAbidetect = 'VIP_PROMOTION_MODAL_SHOWN',
    CSIconwechat = 'VIP_PROMOTION_BOOT',
    CSMiniGdtadv = 'VIP_PROMOTION_PURCHASE_UPDATE',
}

export type wwModal = {
    type: CSShortSina,
    payload?: any,
}

export type wwAwayteamfield = {
    firstBoot: boolean,
    isLoginModalShown: boolean,
    isVipPromotionModalShown: boolean,
    vipPromotionCountdownStart: number,
    vipPromotionPurchaseNum: number,
    vipPromotionIntervel: NodeJS.Timeout | null,
}

const initialState: wwAwayteamfield = {
    firstBoot: true,
    isLoginModalShown: false,
    isVipPromotionModalShown: false,
    vipPromotionCountdownStart: 0,
    vipPromotionPurchaseNum: 0,
    vipPromotionIntervel: null,
}

export const backgroundReducer = (state = initialState, action: wwModal): wwAwayteamfield => {
    switch (action.type) {
        case CSShortSina.CSPlus: {
            return {
                ...state,
                firstBoot: false,
            }
        }
        case CSShortSina.CSStringKlevin: {
            return {
                ...state,
                isLoginModalShown: false,
                isVipPromotionModalShown: false,
            }
        }
        case CSShortSina.CSTempnodatagif: {
            return {
                ...state,
                isLoginModalShown: true,
            }
        }
        case CSShortSina.CSAbidetect: {
            return {
                ...state,
                isVipPromotionModalShown: true,
            }
        }
        case CSShortSina.CSIconwechat: {
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
        case CSShortSina.CSMiniGdtadv: {
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