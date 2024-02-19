
export enum KMWMbnativeContainer {
    KMWHeji = 'ON_APP_BOOT',
    KMWDisconnectedGreytick = 'LOGIN_WARINING_MODAL_SHOWN',
    KMWSchedulerUnselected = 'VIP_PROMOTION_MODAL_SHOWN',
    KMWMegaphoneRoot = 'VIP_PROMOTION_BOOT',
    KMWNextScorepopsound = 'VIP_PROMOTION_PURCHASE_UPDATE',
}

export type yysPhoneDycreator = {
    type: KMWMbnativeContainer,
    payload?: any,
}

export type yysAgreement = {
    isLoginModalShown: boolean,
    isVipPromotionModalShown: boolean,
    vipPromotionCountdownStart: number,
    vipPromotionPurchaseNum: number,
    vipPromotionIntervel: NodeJS.Timeout | null,
}

const initialState: yysAgreement = {
    isLoginModalShown: false,
    isVipPromotionModalShown: false,
    vipPromotionCountdownStart: 0,
    vipPromotionPurchaseNum: 0,
    vipPromotionIntervel: null,
}

export const backgroundReducer = (state = initialState, action: yysPhoneDycreator): yysAgreement => {
    switch (action.type) {
        case KMWMbnativeContainer.KMWHeji: {
            return {
                ...state,
                isLoginModalShown: false,
                isVipPromotionModalShown: false,
            }
        }
        case KMWMbnativeContainer.KMWDisconnectedGreytick: {
            return {
                ...state,
                isLoginModalShown: true,
            }
        }
        case KMWMbnativeContainer.KMWSchedulerUnselected: {
            return {
                ...state,
                isVipPromotionModalShown: true,
            }
        }
        case KMWMbnativeContainer.KMWMegaphoneRoot: {
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
        case KMWMbnativeContainer.KMWNextScorepopsound: {
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