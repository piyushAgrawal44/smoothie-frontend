import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { User, logOutSuccess } from "../redux/reducers/authReducer"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { loadAllUserApi } from "../redux/actions/authAction"
import { filterStart } from "../redux/reducers/searchReducer"
import SearchBar from "../utils/searchBar"
import { allSongApi } from "../redux/actions/songAction"

export default function Navbar() {
	const { isAuthenticated, user, token }: { isAuthenticated: boolean; user: User | null; token: string } = useAppSelector(
		(state) => state.auth
	)
	const { searchQuery, limit, page }: { searchQuery: string; limit: number; page: number } = useAppSelector(
		(state) => state.filter
	)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const location = useLocation()

	const logoutHandler = async () => {
		localStorage.removeItem("token")
		const payload = {
			loading: false,
			isAuthenticated: false,
			user: null,
			token: ""
		}
		await dispatch(logOutSuccess(payload))
		navigate("/login")
	}

	const searchFunction = (val: string) => {
		const payload: { searchQuery: string; limit: number; page: number } = { searchQuery: val, limit, page }
		dispatch(filterStart(payload))
	}

	const onkeyPress = (key: string) => {
		if (key === "Backspace" && !searchQuery && location.pathname === "/search") {
			dispatch(loadAllUserApi(searchQuery, limit, page))
		} else if (key === "Backspace" && !searchQuery && location.pathname === "/song") {
			dispatch(allSongApi(searchQuery, limit, page))
		}
	}

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			if (searchQuery && location.pathname === "/search") {
				dispatch(loadAllUserApi(searchQuery, limit, page))
			} else if (searchQuery && location.pathname === "/song") {
				dispatch(allSongApi(searchQuery, limit, page))
			}
		}, 1000)
		return () => clearTimeout(timeOutId)
		// eslint-disable-next-line
	}, [searchQuery, token])

	return (
		<>
			<div
				className={`w-full overflow-x-hidden sticky z-10  lg:flex top-0  items-center justify-between px-2 py-2 bg-[#000000]`}
			>
				<div className={`w-full lg:w-fit flex items-center justify-between gap-2`}>
					{location.pathname === "/song" && (
						<SearchBar
							searchFunction={searchFunction}
							searchQuery={searchQuery}
							placeholder="Search songs"
							onkeyPress={onkeyPress}
						/>
					)}
					{location.pathname === "/search" && (
						<SearchBar
							searchFunction={searchFunction}
							searchQuery={searchQuery}
							placeholder="Search User"
							onkeyPress={onkeyPress}
						/>
					)}
				</div>

				<div className="hidden lg:flex items-center gap-5 ">
					{isAuthenticated ? (
						<>
							<Link to={`/my-profile`}>
								<p className="py-2 text-[15px] opacity-50">Hello, {user?.firstName && user?.firstName}</p>
							</Link>
							<div onClick={logoutHandler}>
								<p>logout</p>
							</div>
						</>
					) : (
						<>
							<Link to={"/signup"}>
								<p className="text-[14px] opacity-50">Sign up</p>
							</Link>
							<Link to={"/login"}>
								<button className="py-1 px-2 rounded-full bg-white text-black">Login</button>
							</Link>
						</>
					)}
				</div>
			</div>
		</>
	)
}
