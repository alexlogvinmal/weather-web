import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import {bindActionCreators} from "redux";
import * as AllActions from './action'

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
    const dispatch = useDispatch()

    return {...bindActionCreators(AllActions, dispatch), dispatch}
}