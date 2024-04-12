import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface FollowAndVisiters {
	profilePicture: {
		public_id: string | null
		url: string | null
	}
	_id: string
	firstName: string
	lastName: string
	email: string
}
export interface User {
	profilePicture: {
		public_id: string | null
		url: string | null
	}
	_id: string
	firstName: string
	lastName: string
	email: string
	follower: FollowAndVisiters[]
	following: FollowAndVisiters[]
	visited: FollowAndVisiters[]
	createdAt: string
	updatedAt: string
	albumCreation: Array<{
		albumImage: {
			public_id: string | null
			url: string | null
		}
		albumName: string
		uploadedSongs: string[]
		_id: string
	}>
}

export interface AuthPayload {
	loading: boolean
	followLoading: boolean
	isAuthenticated: boolean
	token: string
	user: User | null
	singleUser: User | null
	allUsers: User[]
	message: string | null
}

const initialState: AuthPayload = {
	token: JSON.parse(localStorage.getItem("token") as string) || "",
	loading: false,
	followLoading: false,
	isAuthenticated: false,
	user: null,
	singleUser: null,
	allUsers: [],
	message: null
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		// sign up
		signUpStart(state) {
			state.loading = true
			state.isAuthenticated = false
		},
		signUpSuccess(state, action) {
			state.loading = false
			state.message = action.payload
			state.isAuthenticated = true
		},
		signUpFail(state) {
			state.loading = false
			state.isAuthenticated = false
		},
		// login
		loginStart(state) {
			state.loading = true
			state.isAuthenticated = false
		},
		loginSuccess(state, action) {
			state.loading = false
			state.token = action.payload
			state.isAuthenticated = true
		},
		loginFail(state) {
			state.loading = false
			state.isAuthenticated = false
		},

		// logOut

		logOutSuccess(state, action) {
			state.loading = action.payload.loading
			state.isAuthenticated = action.payload.isAuthenticated
			state.user = action.payload.user
			state.token = action.payload.token
		},
		// loadUser
		loadUserStart(state) {
			state.loading = true
			state.isAuthenticated = true
		},
		loadUserSuccess(state, action: PayloadAction<User>) {
			state.loading = false
			state.user = action.payload
			state.isAuthenticated = true
		},
		loadUserFail(state) {
			state.loading = false
			state.isAuthenticated = false
		},
		// loadUserDetails
		loadUserDetailsStart(state) {
			state.loading = true
		},
		loadUserDetailsSuccess(state, action: PayloadAction<User>) {
			state.loading = false
			state.user = action.payload
		},
		loadUserDetailsFail(state) {
			state.loading = false
		},
		// loadAllUser
		loadAllUserStart(state) {
			state.loading = true
			state.allUsers = []
		},
		loadAllUserSuccess(state, action) {
			state.loading = false
			state.allUsers = action.payload
		},
		loadAllUserFail(state) {
			state.loading = false
			state.allUsers = []
		},
		// loadSingleUser
		loadSingleUserStart(state) {
			state.loading = true
			state.singleUser = null
		},
		loadSingleUserSuccess(state, action) {
			state.loading = false
			state.singleUser = action.payload
		},
		loadSingleUserFail(state) {
			state.loading = false
			state.singleUser = null
		},
		// followUnfollowUser
		followUnfollowUserStart(state) {
			state.followLoading = true
		},
		followUnfollowUserSuccess(state) {
			state.followLoading = false
		},
		followUnfollowUserFail(state) {
			state.followLoading = false
		},
		// updateMyProfileUser
		updateMyProfileStart(state) {
			state.followLoading = true
		},
		updateMyProfileSuccess(state) {
			state.followLoading = false
		},
		updateMyProfileFail(state) {
			state.followLoading = false
		}
	}
})

export const {
	signUpStart,
	signUpSuccess,
	signUpFail,
	loginStart,
	loginSuccess,
	loginFail,
	loadUserStart,
	loadUserSuccess,
	loadUserFail,
	loadUserDetailsStart,
	loadUserDetailsSuccess,
	loadUserDetailsFail,
	logOutSuccess,
	loadAllUserStart,
	loadAllUserSuccess,
	loadAllUserFail,
	loadSingleUserStart,
	loadSingleUserSuccess,
	loadSingleUserFail,
	followUnfollowUserStart,
	followUnfollowUserSuccess,
	followUnfollowUserFail,
	updateMyProfileStart,
	updateMyProfileSuccess,
	updateMyProfileFail
} = authSlice.actions

export default authSlice
