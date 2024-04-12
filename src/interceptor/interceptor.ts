import axios from "axios"
import { Api } from "../redux/store"
import { toast } from "react-toastify"

const axiosInstance = axios.create({
	baseURL: Api
})

axiosInstance.interceptors.request.use(
	(config) => {
		const token: string = JSON.parse(localStorage.getItem("token") as string)
		if (token && config.headers) {
			config.headers.Authorization = token ? `${token}` : ""
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)
axiosInstance.interceptors.response.use(
	(response) => {
		const method = response?.config?.method?.toUpperCase() // Get HTTP method
		if (method === "POST" || method === "DELETE" || method === "PUT") {
			toast.success(response?.data?.message, { autoClose: 1000 })
		}
		return response
	},
	(error) => {
		toast.success(error?.response?.data?.message, { autoClose: 2000 })
		return Promise.reject(error)
	}
)

export default axiosInstance
