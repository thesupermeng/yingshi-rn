import { TypedUseSelectorHook, useDispatch, useSelector as reduxUseSelector } from 'react-redux'
import type { wwEighteenShirt, wwAdultVolume } from '@redux/ww_small'

export const useAppDispatch: () => wwAdultVolume = useDispatch
export const useAppSelector: TypedUseSelectorHook<wwEighteenShirt> = reduxUseSelector

export function useSelector<T>(key: keyof wwEighteenShirt): T {
    return reduxUseSelector<wwEighteenShirt, T>(state => state[key] as T);
}
