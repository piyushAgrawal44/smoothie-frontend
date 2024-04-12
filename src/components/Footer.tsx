import { Link } from "react-router-dom"

export default function Footer() {
	return (
		<>
			<div className="px-2">
				<div className="mx-auto text-gray-50">
					<div className="mt-10 flex flex-wrap gap-6 sm:gap-0  lg:gap-[24px]">
						<div className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-18px)] ">
							<h6 className="text-sm font-medium ">Company</h6>

							<div className="flex flex-col gap-2 mt-4">
								<a href="#about" className="text-sm sm:text-[12px] text-[#a7a7a7]">
									About Us
								</a>
								<a href="#about" className="text-sm sm:text-[12px] text-[#a7a7a7]">
									Contact Us
								</a>
								<a href="#about" className="text-sm sm:text-[12px] text-[#a7a7a7]">
									Services
								</a>
								<a href="#about" className="text-sm sm:text-[12px] text-[#a7a7a7]">
									Work Samples
								</a>
							</div>
						</div>

						<div className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-18px)] ">
							<h6 className="text-sm font-medium ">Community</h6>

							<div className="flex flex-col gap-2 mt-4">
								<a href="#about" className="text-sm sm:text-[12px] text-[#a7a7a7]">
									For Artist
								</a>
								<a href="#about" className="text-sm sm:text-[12px] text-[#a7a7a7]">
									Developers
								</a>
								<a href="#about" className="text-sm sm:text-[12px] text-[#a7a7a7]">
									Advertising
								</a>
								<a href="#about" className="text-sm sm:text-[12px] text-[#a7a7a7]">
									Investor
								</a>
							</div>
						</div>

						<div className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-18px)] ">
							<h6 className="text-sm font-medium ">Useful links</h6>

							<div className="flex flex-col gap-2 mt-4">
								<a href="#about" className="text-sm sm:text-[12px] text-[#a7a7a7]">
									Support
								</a>
								<a href="#about" className="text-sm sm:text-[12px] text-[#a7a7a7]">
									Download App
								</a>
							</div>
						</div>
						<div className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-18px)] ">
							<div className="flex gap-2 mt-2">
								<Link
									to="/"
									className="bg-[#292929] hover:bg-[#727272] w-10 h-10 p-2 rounded-full text-gray-50 text-center"
								>
									<i className="bi bi-instagram"></i>
								</Link>
								<Link
									to="/"
									className="bg-[#292929] hover:bg-[#727272] w-10 h-10 p-2 rounded-full text-gray-50 text-center"
								>
									<i className="bi bi-twitter"></i>
								</Link>
								<Link
									to="/"
									className="bg-[#292929] hover:bg-[#727272] w-10 h-10 p-2 rounded-full text-gray-50 text-center"
								>
									<i className="bi bi-youtube"></i>
								</Link>
							</div>
						</div>
					</div>

					<hr className="border-none my-5 lg:mt-10 bg-[#3e3e3e] h-[0.5px]" />
					<div className="block lg:hidden">
						<div className="flex flex-wrap lg:hidden gap-2 text-[12px] text-[#a7a7a7]">
							<span className="">Legal</span>
							<span className="">Privacy Center</span>
							<span className="">Privacy police</span>
							<span className="">Cookies</span>
							<span className="">About Ads</span>
							<span className="">Accessibility</span>
							<span className="">&copy; {new Date().getFullYear()} Smoothie UB</span>
						</div>

						<div className="w-fit cursor-pointer mt-2 rounded-[24px] px-2 py-1 text-[12px] border-[0.5px] hover:border-[1.4px] border-gray-300 hover:border-gray-100">
							<i className="bi bi-globe"></i> English
						</div>
					</div>
					<p className="hidden lg:block text-gray-300 text-sm my-10">&copy; {new Date().getFullYear()} Smoothie UB</p>
				</div>
			</div>
		</>
	)
}
