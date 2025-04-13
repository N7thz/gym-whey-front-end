import { getCookie } from "cookies-next"
import { User } from "./user.api"
import { Authenticate } from "./authenticate.api"
import { Training } from "./trainings.api"
import axios from "axios"

const token = getCookie("token")

export const api = axios.create({
	baseURL: "http://localhost:3333/api",
	headers: {
		Authorization: `Bearer ${token}`,
	},
})

export const useHttp = () => {

	const user = new User()
	const authenticate = new Authenticate()
	const training = new Training()

	return {
		user,
		authenticate,
		training
	}
}