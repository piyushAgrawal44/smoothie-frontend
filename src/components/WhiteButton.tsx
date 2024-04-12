// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function WhiteButton(props: any) {
	return (
		<>
			{/* this button will always display in one line and trimmed the over flow text */}
			<button
				type="button"
				className={`min-w-[100px] max-w-full ${props.py} px-5 text-[12px] font-medium text-black transition-all bg-white hover:bg-gray-100 focus:bg-gray-100 hover:scale-105 focus:scale-105 rounded-[24px] truncate`}
			>
				{props.text}
			</button>
		</>
	)
}
WhiteButton.defaultProps = {
	py: "py-3"
}
