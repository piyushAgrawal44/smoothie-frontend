import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import BottomCTA from "../components/BottomCTA"
import { useEffect } from "react"

export default function HomePage() {
	const navigate = useNavigate()
	useEffect(() => {
		const accessToken: string = JSON.parse(localStorage.getItem("token") as string)
		if (!accessToken) {
			navigate("/login")
		}
	}, [navigate])
	useEffect(() => {
		if (location.pathname === "/") {
			navigate("/song")
		}
	}, [navigate])

	return (
		<>
			<div className="w-full bg-black text-gray-50 min-h-screen ">
				<div className="relative  flex flex-wrap">
					<Sidebar active="home" />
					<div className="p-2 min-h-screen w-full lg:w-[80%] lg:ml-[20%]">
						<Navbar />
						<Outlet />
					</div>
				</div>
				<BottomCTA />
			</div>
		</>
	)
}
