import { TypedUseSelectorHook, useDispatch, useSelector as reduxUseSelector } from 'react-redux'
import type { RootState, AppDispatchType } from '@redux/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = reduxUseSelector

export function useSelector<T>(key: keyof RootState): T {
    return reduxUseSelector<RootState, T>(state => state[key] as T);
}
