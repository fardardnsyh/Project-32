import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'
import Loading from './Loading'
import WorkwiseUser from './WorkwiseUser'
import Wrapper from '../assets/wrappers/AdminUsersContainer'

const AdminUsersContainer = () => {
	const { getUsers, users, isLoading, totalUsers } = useAppContext()

	useEffect(() => {
		getUsers()
		// eslint-disable-next-line
	}, [])

	if (isLoading) {
		return <Loading center />
	}

	return (
		<Wrapper>
			<h5>
				{totalUsers} User{users.length > 1 && 's'} found
			</h5>
			<div className='users'>
				{/* {JSON.stringify(users)} */}
				{users ? (
					users.map((data) => {
						return <WorkwiseUser key={data._id} user={data} />
					})
				) : (
					<p>No users found.</p>
				)}
			</div>
		</Wrapper>
	)
}

export default AdminUsersContainer
