import SectionTitle from "../components/SectionTitle"
import Footer from "../components/Footer"
import BottomCTA from "../components/BottomCTA"
import CategoryCard from "../components/CategoryCard"
import { FollowAndVisiters, User } from "../redux/reducers/authReducer"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

export default function FollowingPage() {
	const { user, loading }: { user: User | null; loading: boolean } = useSelector((state: RootState) => state.auth)

	return (
		<>
			<div className="w-full bg-black text-gray-50 min-h-[calc(100vh-50px)] xm:min-h-screen ">
				<div className="bg-[#121212] rounded-md p-2 mt-2 sm:mb-16 relative">
					{!loading && (
						<div className="mb-7">
							<div className="flex flex-wrap items-center justify-between">
								<SectionTitle text="Browse all" />
							</div>
							<div className="mt-2 relative w-full overflow-x-auto hide-scrollbar flex flex-nowrap sm:flex-wrap ">
								{user && user?.following.length ? (
									user?.following.map((user: FollowAndVisiters, index: number) => {
										return <CategoryCard key={index} users={user} index={index} />
									})
								) : (
									<p className="text-center opacity-50 w-full">No Following lists</p>
								)}
							</div>
						</div>
					)}
					<Footer />
				</div>
				<BottomCTA />
			</div>
		</>
	)
}
