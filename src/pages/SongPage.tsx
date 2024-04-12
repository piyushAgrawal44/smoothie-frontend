import SectionTitle from "../components/SectionTitle"
import Footer from "../components/Footer"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { useEffect, useState } from "react"
import { Song } from "../redux/reducers/songReducer"
import { allSongApi, listenSongApi } from "../redux/actions/songAction"
import { DotsLoader } from "../components/loaders/DotsLoader"

export default function SongPage() {
	const { searchQuery, limit, page }: { searchQuery: string; limit: number; page: number } = useAppSelector(
		(state) => state.filter
	)
	const { allSongs, loading }: { allSongs: Song[]; loading: boolean } = useAppSelector((state) => state.song)
	const [songUrl, setSongUrl] = useState<string>("")

	const dispatch = useAppDispatch()
	useEffect(() => {
		if (!allSongs.length) {
			dispatch(allSongApi(searchQuery, limit, page))
		}
	}, [dispatch, allSongs.length, searchQuery, limit, page])

	const clickOnSingleSong = async (song: Song) => {
		setSongUrl(song?.songs.url ? song?.songs?.url : "")
		if (song?._id) {
			dispatch(listenSongApi(song._id))
		}
		await dispatch(allSongApi(searchQuery, limit, page))
	}

	const transFormCharacter = (songName: string) => {
		let splitVal = songName.split(".mp3").join("").split("-").join(" ")
		splitVal = splitVal.charAt(0).toUpperCase() + splitVal.slice(1)
		return splitVal
	}

	return (
		<div className="bg-[#121212] rounded-md p-2 mt-2 sm:mb-16">
			<div className="mb-7">
				<div className="flex flex-wrap items-center justify-between">
					<SectionTitle text="Smoothie Playlist" />
				</div>
				<div className="flex flex-wrap gap-4 mt-2">
					{loading ? (
						<div className="p-2 flex  justify-center items-center h-[200px] flex-wrap gap-4  w-full">
							<DotsLoader />
						</div>
					) : allSongs.length ? (
						allSongs.map((song: Song) => {
							return (
								<div
									onClick={() => clickOnSingleSong(song)}
									key={song?._id}
									className="w-[200px] p-4 h-fit border"
								>
									<div className="w-full flex justify-center items-center">
										<img
											className="object-cover w-[150px] h-[150px]"
											src="https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE"
											alt=""
										/>
									</div>
									<div className="mt-2">
										<h6 className="text-sm font-medium line-clamp-1 opacity-50">
											{transFormCharacter(song?.songName)}
										</h6>
										<h6 className="text-sm font-medium line-clamp-1 opacity-50">
											{" "}
											Listen : {song?.listeningCount?.length}
										</h6>
									</div>
								</div>
							)
						})
					) : (
						<p className="text-center opacity-50 w-full">No Song lists</p>
					)}
					<audio autoPlay controls src={songUrl} className="w-full"></audio>
				</div>
			</div>
			<Footer />
		</div>
	)
}
