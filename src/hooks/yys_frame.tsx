import { TypedUseSelectorHook, useDispatch, useSelector as reduxUseSelector } from 'react-redux'
import type { yys_MintegralLibavdevice, yys_FootballBackground } from '@redux/yys_sport_shrink'

export const useAppDispatch: () => yys_FootballBackground = useDispatch
export const useAppSelector: TypedUseSelectorHook<yys_MintegralLibavdevice> = reduxUseSelector

export function useSelector<T>(key: keyof yys_MintegralLibavdevice): T {
    return reduxUseSelector<yys_MintegralLibavdevice, T>(state => state[key] as T);
}
