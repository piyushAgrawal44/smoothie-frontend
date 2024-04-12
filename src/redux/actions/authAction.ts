import {
	FollowAndVisiters,
	User,
	followUnfollowUserFail,
	followUnfollowUserStart,
	followUnfollowUserSuccess,
	loadAllUserFail,
	loadAllUserStart,
	loadAllUserSuccess,
	loadSingleUserFail,
	loadSingleUserStart,
	loadSingleUserSuccess,
	loadUserDetailsFail,
	loadUserDetailsSuccess,
	loadUserFail,
	loadUserStart,
	loadUserSuccess,
	loginFail,
	loginStart,
	loginSuccess,
	signUpFail,
	signUpStart,
	signUpSuccess,
	updateMyProfileFail,
	updateMyProfileStart,
	updateMyProfileSuccess
} from "../reducers/authReducer"
import { Api } from "../store"
import axiosInstance from "../../interceptor/interceptor"

export const signUpApi =
	(firstName: string, lastName: string, email: string, password: string, confirmPassword: string) =>
	async (
		dispatch: (arg0: {
			payload: string | undefined
			type: "auth/signUpStart" | "auth/signUpSuccess" | "auth/signUpFail"
		}) => void
	) => {
		try {
			dispatch(signUpStart())
			const { data } = await axiosInstance.post(`${Api}/register`, {
				firstName,
				lastName,
				email,
				password,
				confirmPassword
			})

			dispatch(
				signUpSuccess({
					payload: data.message
				})
			)
		} catch (error) {
			dispatch(signUpFail())
		}
	}
export const loginApi =
	(email: string, password: string) =>
	async (
		dispatch: (arg0: {
			payload: string | undefined
			type: "auth/loginStart" | "auth/loginSuccess" | "auth/loginFail"
		}) => void
	) => {
		try {
			dispatch(loginStart())
			const { data } = await axiosInstance.post(`${Api}/login`, {
				email,
				password
			})
			localStorage.setItem("token", JSON.stringify(data.token))
			const token: string = JSON.parse(localStorage.getItem("token") as string)
			dispatch(loginSuccess(token))
		} catch (error) {
			dispatch(loginFail())
		}
	}

export const loadUserApi =
	() =>
	async (
		dispatch: (arg0: {
			payload: User | undefined
			type: "auth/loadUserStart" | "auth/loadUserSuccess" | "auth/loadUserFail"
		}) => void
	) => {
		try {
			dispatch(loadUserStart())
			const { data } = await axiosInstance.get("/me")
			dispatch(loadUserSuccess(data.user))
		} catch (error) {
			dispatch(loadUserFail())
		}
	}
export const loadUserDetailsApi =
	() =>
	async (
		dispatch: (arg0: {
			payload: User | undefined
			type: "auth/loadUserDetailsStart" | "auth/loadUserDetailsSuccess" | "auth/loadUserDetailsFail"
		}) => void
	) => {
		try {
			const { data } = await axiosInstance.get("/me")
			dispatch(loadUserDetailsSuccess(data.user))
		} catch (error) {
			dispatch(loadUserDetailsFail())
		}
	}

export const loadAllUserApi =
	(search?: string, limit?: number, page?: number) =>
	async (
		dispatch: (arg0: {
			payload: FollowAndVisiters[] | undefined
			type: "auth/loadAllUserStart" | "auth/loadAllUserSuccess" | "auth/loadAllUserFail"
		}) => void
	) => {
		try {
			dispatch(loadAllUserStart())
			const params: string = search
				? `${Api}/all-users?search=${search}&limit=${limit}&page=${page}`
				: `${Api}/all-users?limit=${limit}&page=${page}`
			const { data } = await axiosInstance.get(params)

			dispatch(loadAllUserSuccess(data.allUser))
		} catch (error) {
			dispatch(loadAllUserFail())
		}
	}
export const loadSingleUserApi =
	(id: string) =>
	async (
		dispatch: (arg0: {
			payload: User | undefined
			type: "auth/loadSingleUserStart" | "auth/loadSingleUserSuccess" | "auth/loadSingleUserFail"
		}) => void
	) => {
		try {
			dispatch(loadSingleUserStart())
			const { data } = await axiosInstance.get(`/user-details/${id}`)
			dispatch(loadSingleUserSuccess(data.allDetails))
		} catch (error) {
			dispatch(loadSingleUserFail())
		}
	}

export const followUnFollowUserApi =
	(userId: string) =>
	async (
		dispatch: (arg0: {
			type: "auth/followUnfollowUserStart" | "auth/followUnfollowUserSuccess" | "auth/followUnfollowUserFail"
		}) => void
	) => {
		try {
			dispatch(followUnfollowUserStart())
			await axiosInstance.post(`/followUnFollow/${userId}`)
			dispatch(followUnfollowUserSuccess())
		} catch (error) {
			dispatch(followUnfollowUserFail())
		}
	}

export const updateMyProfileApi =
	(firstName: string, lastName: string, email: string) =>
	async (
		dispatch: (arg0: {
			type: "auth/updateMyProfileStart" | "auth/updateMyProfileSuccess" | "auth/updateMyProfileFail"
		}) => void
	) => {
		try {
			dispatch(updateMyProfileStart())
			await axiosInstance.put(`/updateMyProfile`, {
				firstName,
				lastName,
				email
			})
			dispatch(updateMyProfileSuccess())
		} catch (error) {
			dispatch(updateMyProfileFail())
		}
	}
