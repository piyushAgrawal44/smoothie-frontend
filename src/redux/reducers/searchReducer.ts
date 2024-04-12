import { createSlice } from "@reduxjs/toolkit"

const initialState: { searchQuery: string; limit: number; page: number } = {
	searchQuery: "",
	limit: 10,
	page: 1
}

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		filterStart(state, action) {
			state.searchQuery = action.payload.searchQuery
			state.limit = action.payload.limit
			state.page = action.payload.page
		}
	}
})

export const { filterStart } = filterSlice.actions
export default filterSlice
