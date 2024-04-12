import Navbar from "../components/Navbar"
import { FormEvent, useEffect, useState } from "react"
import { signUpApi } from "../redux/actions/authAction"
import { token, useAppDispatch } from "../redux/store"
import { useNavigate } from "react-router-dom"

export default function SignupPage() {
	const [firstName, setFirstName] = useState<string>("")
	const [lastName, setLastName] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [confirmPassword, setConfirmPassword] = useState<string>("")

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (token) {
			navigate("/")
		}
	}, [navigate])

	const signUp = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(signUpApi(firstName, lastName, email, password, confirmPassword))
	}
	return (
		<>
			<div className="w-full bg-black text-gray-50 min-h-[calc(100vh-50px)] xm:min-h-screen ">
				<div className="relative  flex flex-wrap">
					<div className="p-2 min-h-screen w-full ">
						<Navbar />
						<div className="w-full p-2.5 flex justify-center">
							<div className="max-w-96">
								<h3 className="my-2.5 text-2xl font-bold">Signup, and Feel Smoothie</h3>
								<form onSubmit={signUp}>
									<div className="mb-2.5">
										<label htmlFor="" className="text-sm font-semibold mb-2">
											First Name
										</label>
										<input
											required
											onChange={(e) => setFirstName(e.target.value)}
											type="text"
											className="block w-full bg-transparent p-2.5 rounded-md border "
											placeholder="Raghuwansi Ram"
										/>
									</div>
									<div className="mb-2.5">
										<label htmlFor="" className="text-sm font-semibold mb-2">
											Last Name
										</label>
										<input
											required
											onChange={(e) => setLastName(e.target.value)}
											type="text"
											className="block w-full bg-transparent p-2.5 rounded-md border "
											placeholder="Raghuwansi Ram"
										/>
									</div>
									<div className="mb-2.5">
										<label htmlFor="" className="text-sm font-semibold mb-2">
											Email
										</label>
										<input
											required
											onChange={(e) => setEmail(e.target.value)}
											type="email"
											className="block w-full bg-transparent p-2.5 rounded-md border "
											placeholder="name@domain.com"
										/>
									</div>

									<div className="mb-2.5">
										<label htmlFor="" className="text-sm font-semibold mb-2">
											Password
										</label>
										<input
											required
											onChange={(e) => setPassword(e.target.value)}
											type="password"
											className="block w-full bg-transparent p-2.5 rounded-md border "
											placeholder="******"
										/>
									</div>
									<div className="mb-2.5">
										<label htmlFor="" className="text-sm font-semibold mb-2">
											Password
										</label>
										<input
											required
											onChange={(e) => setConfirmPassword(e.target.value)}
											type="password"
											className="block w-full bg-transparent p-2.5 rounded-md border "
											placeholder="******"
										/>
									</div>

									<div className="my-2.5">
										<button
											type="submit"
											className={`w-full py-3 px-5 text-[12px] font-medium text-black transition-all bg-white hover:bg-gray-100 focus:bg-gray-100 hover:scale-105 focus:scale-105 rounded-[24px] truncate`}
											onClick={() => {}}
										>
											Sign Up
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
