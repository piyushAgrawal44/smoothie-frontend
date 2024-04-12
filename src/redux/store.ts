import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./reducers/authReducer"
import filterSlice from "./reducers/searchReducer"
import songSlice from "./reducers/songReducer"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		song: songSlice.reducer,
		filter: filterSlice.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const Api: string = "https://music-app-backend-two.vercel.app/api/v1"
export const token: string = JSON.parse(localStorage.getItem("token") as string)
