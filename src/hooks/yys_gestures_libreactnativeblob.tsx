import { TypedUseSelectorHook, useDispatch, useSelector as reduxUseSelector } from 'react-redux'
import type { yysIconclosewhiteBaiduads, yysThemeShrunk } from '@redux'

export const useAppDispatch: () => yysThemeShrunk = useDispatch
export const useAppSelector: TypedUseSelectorHook<yysIconclosewhiteBaiduads> = reduxUseSelector

export function useSelector<T>(key: keyof yysIconclosewhiteBaiduads): T {
    return reduxUseSelector<yysIconclosewhiteBaiduads, T>(state => state[key] as T);
}
