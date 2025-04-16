import { configureStore} from "@reduxjs/toolkit"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import helloReducer from './slices/helloSlice'
import apiReducer from './slices/apiSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    hello: helloReducer,
    api: apiReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store