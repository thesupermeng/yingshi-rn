
export enum BQHalffieldimageApps {
    BQReactnativejsHalf = 'ON_FIRST_BOOT',
    BQMerger = 'ON_APP_BOOT',
    BQRoboto = 'LOGIN_WARINING_MODAL_SHOWN',
    BQDplus = 'VIP_PROMOTION_MODAL_SHOWN',
    BQBang = 'VIP_PROMOTION_BOOT',
    BQPhoto = 'VIP_PROMOTION_PURCHASE_UPDATE',
}

export type mayi_Settings = {
    type: BQHalffieldimageApps,
    payload?: any,
}

export type mayi_CircleImage = {
    firstBoot: boolean,
    isLoginModalShown: boolean,
    isVipPromotionModalShown: boolean,
    vipPromotionCountdownStart: number,
    vipPromotionPurchaseNum: number,
    vipPromotionIntervel: NodeJS.Timeout | null,
}

const initialState: mayi_CircleImage = {
    firstBoot: true,
    isLoginModalShown: false,
    isVipPromotionModalShown: false,
    vipPromotionCountdownStart: 0,
    vipPromotionPurchaseNum: 0,
    vipPromotionIntervel: null,
}

export const backgroundReducer = (state = initialState, action: mayi_Settings): mayi_CircleImage => {
    switch (action.type) {
        case BQHalffieldimageApps.BQReactnativejsHalf: {
            return {
                ...state,
                firstBoot: false,
            }
        }
        case BQHalffieldimageApps.BQMerger: {
            return {
                ...state,
                isLoginModalShown: false,
                isVipPromotionModalShown: false,
            }
        }
        case BQHalffieldimageApps.BQRoboto: {
            return {
                ...state,
                isLoginModalShown: true,
            }
        }
        case BQHalffieldimageApps.BQDplus: {
            return {
                ...state,
                isVipPromotionModalShown: true,
            }
        }
        case BQHalffieldimageApps.BQBang: {
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
        case BQHalffieldimageApps.BQPhoto: {
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