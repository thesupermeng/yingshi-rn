import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatchType } from '../redux/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector