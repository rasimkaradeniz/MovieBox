import Yup from "./validation"

export const RegisterSchema = Yup.object().shape({
	email: Yup.string()
		.required()
		.email(),
	password: Yup.string()
		.required()
})
