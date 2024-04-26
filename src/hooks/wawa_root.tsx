import { TypedUseSelectorHook, useDispatch, useSelector as reduxUseSelector } from 'react-redux'
import type { wawaIconsubssuccess, wawaLibavfilter } from '@redux/wawa_bgvipsport_spinner'

export const useAppDispatch: () => wawaLibavfilter = useDispatch
export const useAppSelector: TypedUseSelectorHook<wawaIconsubssuccess> = reduxUseSelector

export function useSelector<T>(key: keyof wawaIconsubssuccess): T {
    return reduxUseSelector<wawaIconsubssuccess, T>(state => state[key] as T);
}
