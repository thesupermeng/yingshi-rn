
export enum NKFieldAnimations {
    NKPolicyAnimations = 'ON_FIRST_BOOT',
    NKChampion = 'ON_APP_BOOT',
    NKUntickAnalytic = 'LOGIN_WARINING_MODAL_SHOWN',
    NKZhuboSchedule = 'VIP_PROMOTION_MODAL_SHOWN',
    NKHalfFiled = 'VIP_PROMOTION_BOOT',
    NKInviteLibsentry = 'VIP_PROMOTION_PURCHASE_UPDATE',
}

export type yys_Root = {
    type: NKFieldAnimations,
    payload?: any,
}

export type yys_Chinasame = {
    firstBoot: boolean,
    isLoginModalShown: boolean,
    isVipPromotionModalShown: boolean,
    vipPromotionCountdownStart: number,
    vipPromotionPurchaseNum: number,
    vipPromotionIntervel: NodeJS.Timeout | null,
}

const initialState: yys_Chinasame = {
    firstBoot: true,
    isLoginModalShown: false,
    isVipPromotionModalShown: false,
    vipPromotionCountdownStart: 0,
    vipPromotionPurchaseNum: 0,
    vipPromotionIntervel: null,
}

export const backgroundReducer = (state = initialState, action: yys_Root): yys_Chinasame => {
    switch (action.type) {
        case NKFieldAnimations.NKPolicyAnimations: {
            return {
                ...state,
                firstBoot: false,
            }
        }
        case NKFieldAnimations.NKChampion: {
            return {
                ...state,
                isLoginModalShown: false,
                isVipPromotionModalShown: false,
            }
        }
        case NKFieldAnimations.NKUntickAnalytic: {
            return {
                ...state,
                isLoginModalShown: true,
            }
        }
        case NKFieldAnimations.NKZhuboSchedule: {
            return {
                ...state,
                isVipPromotionModalShown: true,
            }
        }
        case NKFieldAnimations.NKHalfFiled: {
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
        case NKFieldAnimations.NKInviteLibsentry: {
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