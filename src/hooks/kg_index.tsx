import { TypedUseSelectorHook, useDispatch, useSelector as reduxUseSelector } from 'react-redux'
import type { PSmall, EPrivate } from '@redux/fj_prediction_thailand'

export const useAppDispatch: () => EPrivate = useDispatch
export const useAppSelector: TypedUseSelectorHook<PSmall> = reduxUseSelector

export function useSelector<T>(key: keyof PSmall): T {
    return reduxUseSelector<PSmall, T>(state => state[key] as T);
}
