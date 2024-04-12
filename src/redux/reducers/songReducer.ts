import { createSlice } from "@reduxjs/toolkit"

export interface Song {
	_id?: string
	songName: string
	songs: {
		public_id: string | null
		url: string | null
	}
	listeningCount: string[]
}

export interface SongPayload {
	loading: boolean
	albumLoading: boolean
	song: Song | null
	allSongs: Song[]
}

const initialState: SongPayload = {
	loading: false,
	albumLoading: false,
	song: null,
	allSongs: []
}
const songSlice = createSlice({
	name: "song",
	initialState,
	reducers: {
		// create album
		createAlbumStart(state) {
			state.albumLoading = true
		},
		createAlbumSuccess(state) {
			state.albumLoading = false
		},
		createAlbumFail(state) {
			state.albumLoading = false
		},
		// all song
		allSongStart(state) {
			state.loading = true
		},
		allSongSuccess(state, action) {
			state.loading = false
			state.allSongs = action.payload
		},
		allSongFail(state) {
			state.loading = false
			state.allSongs = []
		},
		// listen song
		listenSongStart(state) {
			state.loading = true
		},
		listenSongSuccess(state) {
			state.loading = false
		},
		listenSongFail(state) {
			state.loading = false
		}
	}
})

export const {
	createAlbumStart,
	createAlbumSuccess,
	createAlbumFail,
	allSongStart,
	allSongSuccess,
	allSongFail,
	listenSongStart,
	listenSongSuccess,
	listenSongFail
} = songSlice.actions
export default songSlice
