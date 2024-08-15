import { IoBarChart } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

// point to parent cos this is nested route
const links = [
    {
        id:1,
        text: 'stats',
        path: '/',
        icon: <IoBarChart />
    },
    {
        id:2,
        text: 'all jobs',
        path: '/all-jobs',
        icon: <MdQueryStats />
    },
    {
        id:3,
        text: 'add job',
        path: '/add-job',
        icon: <FaWpforms />
    },
    {
        id:4,
        text: 'profile',
        path: '/profile',
        icon: <ImProfile />
    },
]

export default links