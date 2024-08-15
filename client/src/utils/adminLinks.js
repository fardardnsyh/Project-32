import { IoBarChart } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'

// point to parent cos this is nested route
const adminLinks = [
	{
		id: 1,
		text: 'Dashboard',
		path: '/',
		icon: <IoBarChart />,
	},
	{
		id: 2,
		text: 'all users',
		path: '/admin',
		icon: <MdQueryStats />,
	},
]

export default adminLinks
