import { ChangeEvent } from "react"

type SearchFunction = (query: string) => void
type onKeyPress = (query: string) => void

export default function SearchBar({
	searchFunction,
	searchQuery,
	placeholder,
	onkeyPress
}: {
	searchFunction: SearchFunction
	searchQuery: string
	placeholder: string
	onkeyPress: onKeyPress
}) {
	return (
		<div className="relative group">
			<div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
				<svg
					className="w-4 h-4 text-[#a7a7a7] group-hover:text-gray-50"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
					/>
				</svg>
			</div>
			<input
				type="search"
				className="max-w-[200px] xm:max-w-[400px] shrink block p-3 ps-8 sm:ps-10 text-sm  border border-gray-900 focus:border-gray-50 hover:border-gray-600 rounded-[24px] bg-[#242424] text-gray-50 placeholder:text-[#a7a7a7] placeholder:text-[12px]"
				placeholder={placeholder}
				onKeyUp={(e) => onkeyPress(e.key)}
				onChange={(ele: ChangeEvent<HTMLInputElement>) => {
					searchFunction(ele.target.value)
				}}
				value={searchQuery}
			/>
		</div>
	)
}
