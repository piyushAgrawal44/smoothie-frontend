import { Link } from "react-router-dom"
import { useAppSelector } from "../redux/store"
import WhiteButton from "./WhiteButton"

export default function BottomCTA() {
	const { isAuthenticated }: { isAuthenticated: boolean } = useAppSelector((state) => state.auth)
	return (
		<>
			<div className="hidden lg:block bg-gradient-to-r from-[#ae2896] to-[#519af4] fixed w-[calc(100%-12px)] left-[6px] bottom-2 p-2 z-20">
				<div className="flex gap-2 justify-between items-center">
					<div className="text-[12px] font-medium">
						<p>Preview of spotify</p>
						<p className="line-clamp-2">
							Signup to get unlimited songs and podcast with occasional ads. No credit card required.
						</p>
					</div>
					<Link to={isAuthenticated ? "/subscription" : "/signup"} className="shrink-0">
						<WhiteButton text={isAuthenticated ? "Buy Subscription" : "Signup for free"} />
					</Link>
				</div>
			</div>
		</>
	)
}
