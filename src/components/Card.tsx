export default function Card({
	songName,
	songs,
	listeningCount
}: {
	songName: string
	songs: { url: string }
	listeningCount: string[]
}) {
	console.log(songs.url)

	return (
		<>
			<div
				className={`top-0 block min-w-[200px]  w-full xm:w-[50%] xm:min-w-[50%] sm:w-[33%] sm:min-w-[33%] md:w-[25%] md:min-w-[25%] lg:w-[20%] lg:min-w-[20%] p-2`}
			>
				<div className="relative group overflow-hidden cursor-pointer max-w-full p-3 bg-[#181818] hover:bg-[#282828] rounded-md ">
					<div className="max-w-full p-3 rounded-md">
						<div className="relative overflow-hidden cursor-pointer ">
							{songs?.url && <audio controls src={songs?.url}></audio>}
							{/* <img className={`w-full ${props.image_rounded ? 'rounded-full' : 'rounded-md'}`} src={props.image.thumbnail} alt="song_thumbnail" /> */}
							<div className="absolute top-[-100%] xm:group-hover:top-0 transition-all left-0 w-full h-full flex justify-end items-end p-2 bg-[]">
								<div className="cursor-pointer rounded-full w-10 h-10 p-2 bg-green-400 text-black text-center">
									<i className="bi bi-play-fill"></i>
								</div>
							</div>
						</div>

						<div className="mt-2">
							<h6 className="text-sm font-medium line-clamp-1">{songName}</h6>
							<h6 className="text-sm font-medium line-clamp-1">{listeningCount.length}</h6>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
