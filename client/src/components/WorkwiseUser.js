import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/WorkwiseUser'
import React from 'react'
import { useState } from 'react'

const WorkwiseUser = (user) => {
	const { deleteUser } = useAppContext()
	const [userData, setUserData] = useState(user)
	console.log(userData.user._id)
	return (
		<Wrapper>
			<header>
				<div className='main-icon'>{userData.user.name.charAt(0)}</div>
				<div className='info'>
					<h5>{userData.user.name}</h5>
					<p>{userData.user.email}</p>
				</div>
				<footer>
					<div className='actions'>
						<button
							type='button'
							className='btn delete-btn'
							onClick={() => deleteUser(userData.user._id)}
						>
							Delete
						</button>
					</div>
				</footer>
			</header>
		</Wrapper>
	)
}

export default WorkwiseUser
