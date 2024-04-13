export default function SectionTitle({text}: {text:string}) {
	return (
		<>
			<h5 className="font-semibold text-lg xm:text-xl hover:underline cursor-pointer">{text}</h5>
		</>
	)
}
