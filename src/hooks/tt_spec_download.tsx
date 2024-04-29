import { TypedUseSelectorHook, useDispatch, useSelector as reduxUseSelector } from 'react-redux'
import type { ttOrange, ttBaidu } from '@redux/tt_updates_bottom'

export const useAppDispatch: () => ttBaidu = useDispatch
export const useAppSelector: TypedUseSelectorHook<ttOrange> = reduxUseSelector

export function useSelector<T>(key: keyof ttOrange): T {
    return reduxUseSelector<ttOrange, T>(state => state[key] as T);
}
