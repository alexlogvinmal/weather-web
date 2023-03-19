import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { menuReducer } from "./redux/reducers/menuSlice";
import {modalReducer} from "./redux/reducers/modalSlice";
import {weatherReducer} from "./redux/reducers/weatherSlice";
import {unitReducer} from "./redux/reducers/unitSlice";

const rootReducer = combineReducers({
    menuReducer,
    modalReducer,
    weatherReducer,
    unitReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']