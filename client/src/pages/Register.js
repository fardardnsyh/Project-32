import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

// Default state
const initialState = {
	name: '',
	email: '',
	password: '',
	isMember: true,
}

const Register = () => {
	const navigate = useNavigate()
	const [values, setValues] = useState(initialState)
	const { user, isLoading, showAlert, displayAlert, setupUser } =
		useAppContext()

	// spread out curr values, then set the control to opposite
	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember })
	}

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	const onSubmit = (e) => {
		e.preventDefault()
		const { name, email, password, isMember } = values
		if (!email || !password || (!isMember && !name)) {
			displayAlert()
			return
		}
		const currentUser = { name, email, password }
		if (isMember) {
			setupUser({
				currentUser,
				endPoint: 'login',
				alertText: 'Login Successful! Redirecting...',
			})
		} else {
			setupUser({
				currentUser,
				endPoint: 'register',
				alertText: 'User Created! Redirecting...',
			})
		}
	}

	// in the dependency arr it shows that it will be invoked in init render + each time user or nav changes
	useEffect(() => {
		if (user) {
			setTimeout(() => {
				navigate('/')
			}, 3000)
		}
	}, [user, navigate])

	return (
		<Wrapper className='full-page'>
			<form className='form' onSubmit={onSubmit}>
				<Logo />
				<h3>{values.isMember ? 'Login' : 'Register'}</h3>
				{showAlert && <Alert />}
				{!values.isMember && (
					<FormRow
						type='text'
						name='name'
						value={values.name}
						handleChange={handleChange}
					/>
				)}
				<FormRow
					type='email'
					name='email'
					value={values.email}
					handleChange={handleChange}
				/>
				<FormRow
					type='password'
					name='password'
					value={values.password}
					handleChange={handleChange}
				/>
				<button
					type='submit'
					className='btn btn-block'
					disabled={isLoading}
				>
					Submit
				</button>
				<p>
					{values.isMember
						? 'Not a member yet?'
						: 'Already a member?'}
					<button
						type='button'
						onClick={toggleMember}
						className='member-btn'
					>
						{values.isMember ? 'Register' : 'Login'}
					</button>
				</p>
			</form>
		</Wrapper>
	)
}

export default Register
