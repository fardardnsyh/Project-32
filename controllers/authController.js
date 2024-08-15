import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'

const register = async (req, res) => {
	const { name, email, password, isAdmin } = req.body

	if (!name || !email || !password) {
		throw new BadRequestError('Did you miss an input?')
	}

	const userAlreadyExists = await User.findOne({ email })
	if (userAlreadyExists) {
		throw new BadRequestError('Email already in use')
	}

	const user = await User.create({ name, email, password, isAdmin })
	const token = user.createJWT()
	res.status(StatusCodes.CREATED).json({
		user: {
			email: user.email,
			location: user.location,
			name: user.name,
			isAdmin: user.isAdmin,
		},
		token,
		location: user.location,
	})
}

const login = async (req, res) => {
	const { email, password } = req.body
	if (!email || !password) {
		throw new BadRequestError('Did you forget an input?')
	}
	const user = await User.findOne({ email }).select('+password')
	if (!user) {
		throw new UnAuthenticatedError('Invalid credentials')
	}
	const isPasswordCorrect = await user.comparePassword(password)
	if (!isPasswordCorrect) {
		throw new UnAuthenticatedError('Invalid credentials')
	}
	const token = user.createJWT()
	user.password = undefined
	res.status(StatusCodes.OK).json({
		user,
		token,
	})
}

const updateUser = async (req, res) => {
	const { email, name, location } = req.body
	if (!email || !name || !location) {
		throw new BadRequestError('Oops.. did you forget an input?')
	}
	const user = await User.findOne({ _id: req.user.userId })

	user.email = email
	user.name = name
	user.location = location

	await user.save()

	const token = user.createJWT()
	res.status(StatusCodes.OK).json({
		user,
		token,
		location: user.location,
	})
}

export { register, login, updateUser }
