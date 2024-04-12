import { FollowAndVisiters, User } from "../redux/reducers/authReducer"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { followUnFollowUserApi, loadUserDetailsApi } from "../redux/actions/authAction"
import { useLocation, useNavigate } from "react-router-dom"

export default function CategoryCard({ users, index }: { users: FollowAndVisiters; index: number }) {
	const { user }: { user: User | null } = useAppSelector((state) => state.auth)
	const userContainingId: boolean =
		user?.following?.some((followedUser: FollowAndVisiters) => followedUser._id === users._id) ?? false
	const location = useLocation()

	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const darkColors = [
		"bg-[#8400e7]",
		"bg-[#e13300]",
		"bg-[#00432c]",
		"bg-[#a56752]",
		"bg-[#8e66ac]",
		"bg-[#b02897]",
		"bg-[#dc148c]",
		"bg-[#1e3264]",
		"bg-[#777777]",
		"bg-[#1e3264]"
	]
	const darkColors_2 = [
		"bg-[#a56752]",
		"bg-[#00432c]",
		"bg-[#e13300]",
		"bg-[#8400e7]",
		"bg-[#1e3264]",
		"bg-[#dc148c]",
		"bg-[#8e66ac]",
		"bg-[#b02897]",
		"bg-[#1e3264]",
		"bg-[#777777]"
	]

	const followUser = async () => {
		await dispatch(followUnFollowUserApi(users?._id))
		await dispatch(loadUserDetailsApi())
	}

	const navigateUrl = () => {
		navigate(`/users/${users._id}`)
	}
	// Select the color at the random index
	const randomColor = darkColors[index % darkColors.length]
	const randomColor_2 = darkColors_2[index % darkColors_2.length]
	return (
		<div
			className={`top-0 block min-w-[180px] w-full xm:min-w-[50%] xm:w-[50%] sm:min-w-[33%] sm:w-[33%] md:min-w-[20%] md:w-[20%] p-2`}
		>
			<div
				className={`relative overflow-hidden cursor-pointer max-w-full h-[170px] p-3 ${randomColor} text-gray-50 rounded-md `}
			>
				{users?.profilePicture?.url ? (
					<img
						onClick={navigateUrl}
						className="absolute top-[4px] left-[10px] w-[70px] h-[70px] rounded-full"
						src={users?.profilePicture?.url}
						alt="song_thumbnail"
					/>
				) : (
					<div
						onClick={navigateUrl}
						className={` bg-opacity-50 flex justify-center ${randomColor_2} items-center bg w-[70px] h-[70px] text-[22px] rounded-full`}
					>
						{" "}
						{users?.firstName.charAt(0).toUpperCase()}{" "}
					</div>
				)}
				<h6 onClick={navigateUrl} className="absolute bottom-14 font-semibold text-lg line-clamp-2">
					{users?.firstName.charAt(0).toUpperCase() + users?.firstName.slice(1).toLowerCase()}{" "}
					{users?.lastName.charAt(0).toUpperCase() + users?.lastName.slice(1).toLowerCase()}
				</h6>
				{location.pathname !== "/visiters" && (
					<button onClick={followUser} className="absolute bottom-2 right-2 py-1 px-2 bg-white rounded-full text-black">
						{" "}
						{!userContainingId ? "follow" : "Unfollow"}{" "}
					</button>
				)}
			</div>
		</div>
	)
}
