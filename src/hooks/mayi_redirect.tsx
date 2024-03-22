import { TypedUseSelectorHook, useDispatch, useSelector as reduxUseSelector } from 'react-redux'
import type { mayi_Libapminsightb, mayi_MiddleThailand } from '@redux/mayi_live_tumbnail'

export const useAppDispatch: () => mayi_MiddleThailand = useDispatch
export const useAppSelector: TypedUseSelectorHook<mayi_Libapminsightb> = reduxUseSelector

export function useSelector<T>(key: keyof mayi_Libapminsightb): T {
    return reduxUseSelector<mayi_Libapminsightb, T>(state => state[key] as T);
}
