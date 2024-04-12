import SectionTitle from "../components/SectionTitle"
import Footer from "../components/Footer"
import BottomCTA from "../components/BottomCTA"
import CategoryCard from "../components/CategoryCard"
import { useEffect } from "react"
import { FollowAndVisiters } from "../redux/reducers/authReducer"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { loadAllUserApi } from "../redux/actions/authAction"
import { DotsLoader } from "../components/loaders/DotsLoader"

export default function SearchPage() {
	const { allUsers, loading }: { allUsers: FollowAndVisiters[]; loading: boolean } = useAppSelector((state) => state.auth)
	const { searchQuery, limit, page }: { searchQuery: string; limit: number; page: number } = useAppSelector(
		(state) => state.filter
	)
	const dispatch = useAppDispatch()
	useEffect(() => {
		if (!allUsers.length) dispatch(loadAllUserApi(searchQuery, limit, page))
	}, [dispatch, allUsers.length, searchQuery, limit, page])

	return (
		<>
			<div className="w-full bg-black text-gray-50 min-h-[calc(100vh-50px)] xm:min-h-screen ">
				<div className="bg-[#121212] rounded-md p-2 mt-2 sm:mb-16 relative">
					{
						<div className="mb-7">
							<div className="flex flex-wrap items-center justify-between">
								<SectionTitle text="Browse all" />
							</div>
							<div className="mt-2 relative w-full overflow-x-auto hide-scrollbar flex flex-nowrap sm:flex-wrap ">
								{loading ? (
									<div className="p-2 flex  justify-center items-center h-[200px] flex-wrap gap-4  w-full">
										<DotsLoader />
									</div>
								) : allUsers.length ? (
									allUsers.map((user: FollowAndVisiters, index: number) => {
										return <CategoryCard key={index} users={user} index={index} />
									})
								) : (
									<p className="text-center opacity-50 w-full">No User lists</p>
								)}
							</div>
						</div>
					}
					<Footer />
				</div>
				<BottomCTA />
			</div>
		</>
	)
}
