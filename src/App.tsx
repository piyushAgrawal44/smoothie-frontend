import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import { useEffect } from "react"
import { loadUserApi } from "./redux/actions/authAction"
import { useAppDispatch, useAppSelector } from "./redux/store"
import SingleUser from "./pages/singleUser"
import { ToastContainer } from "react-toastify"
import FollowingPage from "./pages/FollowingPage"
import FollowerPage from "./pages/FollowerPage"
import VisitersPage from "./pages/VisitersPage"
import SongPage from "./pages/SongPage"
import MyProfile from "./pages/MyProfile"
import SubscriptionPage from "./pages/SubscriptionPage"

function App() {
	const dispatch = useAppDispatch()
	const { token }: { token: string } = useAppSelector((state) => state.auth)

	useEffect(() => {
		if (token) {
			dispatch(loadUserApi())
		}
	}, [dispatch, token])

	return (
		<>
			<div className="max-w-screen-2xl mx-auto max-h-screen overflow-y-auto custom_scrollbar" id="main_id">
				<ToastContainer />
				<Router basename="/">
					<Routes>
						<Route path="/" element={<HomePage />}>
							<Route path="song" element={<SongPage />} />
							<Route path="search" element={<SearchPage />} />
							<Route path="following" element={<FollowingPage />} />
							<Route path="follower" element={<FollowerPage />} />
							<Route path="visiters" element={<VisitersPage />} />
							<Route path="/users/:id" element={<SingleUser />} />
							<Route path="/my-profile" element={<MyProfile />} />
							<Route path="/subscription" element={<SubscriptionPage />} />
						</Route>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignupPage />} />
					</Routes>
				</Router>
			</div>
		</>
	)
}

export default App
