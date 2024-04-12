import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { loadSingleUserApi } from "../redux/actions/authAction"
import { useAppDispatch } from "../redux/store"

export default function SingleUser() {
	const { id } = useParams<{ id: string }>()
	const dispatch = useAppDispatch()
	useEffect(() => {
		if (id) {
			dispatch(loadSingleUserApi(id))
		}
	}, [dispatch, id])

	return (
		<>
			<div className="w-full bg-black text-gray-50 min-h-[calc(100vh-50px)] xm:min-h-screen ">hiii there</div>
		</>
	)
}
