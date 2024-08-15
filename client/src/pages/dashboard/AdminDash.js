import { useAppContext } from '../../context/appContext'

const AdminDash = () => {
	const { user } = useAppContext()

	return (
		<div>
			<h2>Welcome back, {user.name}!</h2>
			<p>
				Here you can manage all WorkWise users.
				<br />
				Click on the All Users icon in the navigation bar to begin.
			</p>
			<div
				style={{
					height: '100vh',
					width: '100vh',
					display: 'flex',
				}}
			>
				<img
					src='https://storage.ko-fi.com/cdn/useruploads/post/380f1220-1479-4b6f-aac9-df0adc191945_bongo_cat_template.gif'
					alt='A cool animated gif'
					style={{ maxWidth: '70%', maxHeight: '70%' }}
				/>
			</div>
		</div>
	)
}

export default AdminDash
