import { useRef } from "react"
import { Link } from "react-router-dom"
import WhiteButton from "./WhiteButton"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { User } from "../redux/reducers/authReducer"
// import quizmingoLogo from '../../images/quizmingo-logo.png';
export default function Sidebar(props: any) {
	const { user }: { user: User | null } = useSelector((state: RootState) => state.auth)
	const mainMenu = useRef<HTMLDivElement>(null)
	const openMainMenu = () => {
		if (mainMenu.current) {
			mainMenu.current.classList.toggle("right-[-100%]")
			mainMenu.current.classList.toggle("right-[0%]")
		}
	}

	return (
		<>
			{props.active !== "search" && (
				<nav className="bg-[#121212] block lg:hidden sticky top-0 z-20 w-full">
					<div className="flex flex-wrap items-center justify-between mx-auto p-4 overflow-x-hidden">
						<Link to="/" replace={true} className="flex items-center gap-1">
							<span className="text-2xl md:text-3xl font-semibold whitespace-nowrap" title="Smoothie">
								<i className="bi bi-music-note-list"></i>
							</span>
						</Link>
						<div className="flex items-center">
							<Link to="/search" className={`flex items-center lg:text-lg rounded  pl-1 text-gray-50 mr-3`}>
								<span className="select-none text-[16px] md:text-[24px]">
									<i className="bi bi-search"></i>
								</span>
							</Link>
							<div className="mr-3">
								<WhiteButton text="Open App" py="py-2" />
							</div>
							<button
								type="button"
								onClick={openMainMenu}
								className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg hover:text-gray-600 ring-1 ring-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className="w-5 h-5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 17 14"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M1 1h15M1 7h15M1 13h15"
									/>
								</svg>
							</button>
						</div>

						<div
							className="fixed w-full h-screen bg-black p-2 transition-all  top-0 right-[-100%] z-50  block overflow-y-auto custom_scrollbar"
							ref={mainMenu}
						>
							<div className="flex justify-end my-2">
								<button
									className="text-gray-50 text-lg"
									onClick={() => {
										openMainMenu()
									}}
								>
									<i className="bi bi-x-lg"></i>
								</button>
							</div>
							<ul className="font-medium flex flex-col p-4 mt-4 rounded-lg bg-[#242424]">
								<li className="mb-5">
									<Link
										to="/"
										replace={true}
										className={`flex items-center lg:text-lg rounded  pl-1 text-gray-50 font-semibold  hover:text-gray-50 `}
									>
										<span className="text-[16px] md:text-[14px]">Log in</span>
									</Link>
								</li>
								<li className="">
									<Link
										to="/"
										replace={true}
										className={`flex items-center lg:text-lg rounded  pl-1 text-gray-50 font-semibold  hover:text-gray-50 `}
									>
										<span className="text-[16px] md:text-[14px]">Sign up</span>
									</Link>
								</li>

								<div className="w-[10px] ml-1 bg-white h-[2px] my-8"></div>

								<li className="mb-5">
									<Link
										to="/"
										replace={true}
										className={`flex items-center lg:text-lg rounded  pl-1 text-gray-50 font-semibold  hover:text-gray-50 `}
									>
										<span className="text-[16px] md:text-[14px]">Premium</span>
									</Link>
								</li>
								<li className="mb-5">
									<Link
										to="/"
										replace={true}
										className={`flex items-center lg:text-lg rounded  pl-1 text-gray-50 font-semibold  hover:text-gray-50 `}
									>
										<span className="text-[16px] md:text-[14px]">Help</span>
									</Link>
								</li>
								<li className="mb-5">
									<Link
										to="/"
										replace={true}
										className={`flex items-center lg:text-lg rounded  pl-1 text-gray-50 font-semibold  hover:text-gray-50 `}
									>
										<span className="text-[16px] md:text-[14px]">Download</span>
									</Link>
								</li>
								<li className="mb-5">
									<Link
										to="/"
										replace={true}
										className={`flex items-center lg:text-lg rounded  pl-1 text-gray-50 font-semibold  hover:text-gray-50 `}
									>
										<span className="text-[16px] md:text-[14px]">Privacy</span>
									</Link>
								</li>
								<li className="">
									<Link
										to="/"
										replace={true}
										className={`flex items-center lg:text-lg rounded  pl-1 text-gray-50 font-semibold  hover:text-gray-50 `}
									>
										<span className="text-[16px] md:text-[14px]">Terms</span>
									</Link>
								</li>
							</ul>

							<div className="mt-10">
								<div className="flex items-center justify-between text-[#a7a7a7] hover:text-gray-50 focus:text-gray-50 cursor-pointer">
									<p className="self-center  text-lg font-medium whitespace-nowrap ">
										<span>
											<i className="bi bi-journal-bookmark"></i>
										</span>
										&nbsp;&nbsp; <span>Your Library</span>
									</p>
									<span className="mt-1">
										<i className="bi bi-plus-lg"></i>
									</span>
								</div>

								<div className="relative my-3  flex flex-wrap items-center justify-between">
									<div className="p-0 mb-5 sm:mb-0 sm:p-2  w-full sm:w-[50%]  lg:w-[33%] ">
										<div className="bg-[#242424] rounded-md py-4 px-5 w-full">
											<h6 className="text-sm font-medium">Create your first playlist</h6>
											<p className="text-[10px] mt-1">It's easy we will help you</p>
											<div className="mt-3">
												<WhiteButton
													onClick={() => {
														console.log("button clicked")
													}}
													py="py-1"
													text="Create Playlist"
												/>
											</div>
										</div>
									</div>
									<div className="p-0 mb-5 sm:mb-0 sm:p-2  w-full sm:w-[50%]  lg:w-[33%]">
										<div className="bg-[#242424] rounded-md py-4 px-5">
											<h6 className="text-sm font-medium">Let's find some podcasts to follow</h6>
											<p className="text-[10px] mt-1">We will keep you update on new episodes</p>
											<div className="mt-3">
												<WhiteButton
													onClick={() => {
														console.log("button clicked")
													}}
													py="py-1"
													text="Browse podcast"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			)}

			<div className="fixed h-screen max-h-[calc(100vh-64px)] overflow-y-auto hide-scrollbar z-10 hidden lg:block lg:w-[20%] lg:max-w-[307px] pl-2 pt-2">
				<nav className="bg-[#121212] rounded-md ">
					<div className="p-4">
						<Link to="/song" className="flex items-center gap-1">
							<span className="text-2xl md:text-3xl font-semibold whitespace-nowrap">
								<i className="bi bi-music-note-list"></i>
							</span>
							<span className="md:text-xl  font-semibold whitespace-nowrap ">Smoothie</span>
						</Link>

						<div className="mt-3 h-full">
							<ul className="font-normal">
								<li className="mb-5">
									<Link
										to="/song"
										replace={true}
										className={`flex items-center lg:text-lg rounded  pl-1 ${props.active === "home" ? "text-gray-50  font-semibold" : "text-[#a7a7a7]"}  hover:text-gray-50 `}
									>
										<span className="select-none text-[16px] md:text-[24px]">
											<i
												className={`bi ${props.active === "home" ? "bi-house-door-fill" : "bi-house-door"}`}
											></i>
										</span>
										&nbsp;&nbsp;&nbsp; <span className="text-[16px] md:text-[14px]">Home</span>
									</Link>
								</li>
								<li className="mb-5">
									<Link
										to="/search"
										className={`flex items-center lg:text-lg rounded  pl-1 ${props.active === "search" ? "text-gray-50" : "text-[#a7a7a7]"}  hover:text-gray-50 `}
									>
										<span className="select-none text-[16px] md:text-[24px]">
											<i className={`bi ${props.active === "search" ? "bi-search" : "bi-search"}`}></i>
										</span>
										&nbsp;&nbsp;&nbsp; <span className="text-[16px] md:text-[14px]">Search</span>
									</Link>
								</li>
								<li className="mb-5">
									<Link
										to="/following"
										replace={true}
										className={`flex items-center lg:text-lg rounded  pl-1 ${props.active === "home" ? "text-gray-50  font-semibold" : "text-[#a7a7a7]"}  hover:text-gray-50 `}
									>
										<span className="select-none text-[16px] md:text-[24px]"></span>&nbsp;&nbsp;&nbsp;{" "}
										<span className="text-[16px] md:text-[14px]">
											Following &nbsp; {user?.following.length}
										</span>
									</Link>
								</li>
								<li className="mb-5">
									<Link
										to="/follower"
										replace={true}
										className={`flex items-center lg:text-lg rounded  pl-1 ${props.active === "home" ? "text-gray-50  font-semibold" : "text-[#a7a7a7]"}  hover:text-gray-50 `}
									>
										<span className="select-none text-[16px] md:text-[24px]"></span>&nbsp;&nbsp;&nbsp;{" "}
										<span className="text-[16px] md:text-[14px]">
											Follower &nbsp; {user?.follower.length}
										</span>
									</Link>
								</li>
								<li className="mb-5">
									<Link
										to="/visiters"
										replace={true}
										className={`flex items-center lg:text-lg rounded  pl-1 ${props.active === "home" ? "text-gray-50  font-semibold" : "text-[#a7a7a7]"}  hover:text-gray-50 `}
									>
										<span className="select-none text-[16px] md:text-[24px]"></span>&nbsp;&nbsp;&nbsp;{" "}
										<span className="text-[16px] md:text-[14px]">
											Visiters &nbsp; {user?.visited?.length}
										</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<nav className="bg-[#121212] rounded-md mt-5">
					<div className="p-4">
						<div className="flex items-center justify-between text-[#a7a7a7] hover:text-gray-50 focus:text-gray-50 cursor-pointer">
							<p className="self-center  text-lg font-medium whitespace-nowrap ">
								<span>
									<i className="bi bi-journal-bookmark"></i>
								</span>
								&nbsp;&nbsp; <span>Your Library</span>
							</p>
							<span className="mt-1">
								<i className="bi bi-plus-lg"></i>
							</span>
						</div>

						<div className="relative my-3 max-h-[136px] overflow-y-auto  custom_scrollbar">
							<ul>
								<li className="mb-5">
									<div className="bg-[#242424] rounded-md py-4 px-5">
										<h6 className="text-sm font-medium">Create your first playlist</h6>
										<p className="text-[10px] mt-1">It's easy we will help you</p>
										<div className="mt-3">
											<WhiteButton
												onClick={() => {
													console.log("button clicked")
												}}
												py="py-1"
												text="Create Playlist"
											/>
										</div>
									</div>
								</li>

								<li className="mb-5">
									<div className="bg-[#242424] rounded-md py-4 px-5">
										<h6 className="text-sm font-medium">Let's find some podcasts to follow</h6>
										<p className="text-[10px] mt-1">We will keep you update on new episodes</p>
										<div className="mt-3">
											<WhiteButton
												onClick={() => {
													console.log("button clicked")
												}}
												py="py-1"
												text="Browse podcast"
											/>
										</div>
									</div>
								</li>
							</ul>
						</div>

						<div className="flex flex-wrap gap-2 text-[8px] text-[#a7a7a7]">
							<span className="">Legal</span>
							<span className="">Privacy Center</span>
							<span className="">Privacy police</span>
							<span className="">Cookies</span>
							<span className="">About Ads</span>
							<span className="">Accessibility</span>
						</div>

						<div className="w-fit cursor-pointer mt-2 rounded-[24px] px-2 py-1 text-[12px] border-[0.5px] hover:border-[1.4px] border-gray-300 hover:border-gray-100">
							<i className="bi bi-globe"></i> English
						</div>
					</div>
				</nav>
			</div>
		</>
	)
}

Sidebar.defaultProps = {
	active: ""
}
