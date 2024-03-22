
export enum BStationsPrivate {
    BAreaClose = 'ON_FIRST_BOOT',
    BNotification = 'ON_APP_BOOT',
    BMutedSearch = 'LOGIN_WARINING_MODAL_SHOWN',
    BDownload = 'VIP_PROMOTION_MODAL_SHOWN',
    BTumbnailShoot = 'VIP_PROMOTION_BOOT',
    BClubPing = 'VIP_PROMOTION_PURCHASE_UPDATE',
}

export type CUpdatesOverlay = {
    type: BStationsPrivate,
    payload?: any,
}

export type OUWeiboOverlay = {
    firstBoot: boolean,
    isLoginModalShown: boolean,
    isVipPromotionModalShown: boolean,
    vipPromotionCountdownStart: number,
    vipPromotionPurchaseNum: number,
    vipPromotionIntervel: NodeJS.Timeout | null,
}

const initialState: OUWeiboOverlay = {
    firstBoot: true,
    isLoginModalShown: false,
    isVipPromotionModalShown: false,
    vipPromotionCountdownStart: 0,
    vipPromotionPurchaseNum: 0,
    vipPromotionIntervel: null,
}

export const backgroundReducer = (state = initialState, action: CUpdatesOverlay): OUWeiboOverlay => {
    switch (action.type) {
        case BStationsPrivate.BAreaClose: {
            return {
                ...state,
                firstBoot: false,
            }
        }
        case BStationsPrivate.BNotification: {
            return {
                ...state,
                isLoginModalShown: false,
                isVipPromotionModalShown: false,
            }
        }
        case BStationsPrivate.BMutedSearch: {
            return {
                ...state,
                isLoginModalShown: true,
            }
        }
        case BStationsPrivate.BDownload: {
            return {
                ...state,
                isVipPromotionModalShown: true,
            }
        }
        case BStationsPrivate.BTumbnailShoot: {
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
        case BStationsPrivate.BClubPing: {
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