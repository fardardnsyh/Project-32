import StatItem from './StatItem'
import { useAppContext } from '../context/appContext'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/StatsContainer'

const StatsContainer = () => {
	const { stats } = useAppContext()
	const defaultStats = [
		{
			title: 'Pending Applications',
			count: stats.pending || 0,
			icon: <FaSuitcaseRolling />,
			color: 'var(--primary-300)',
			bcg: 'var(--primary-100)',
		},
		{
			title: 'Interviews Scheduled',
			count: stats.interview || 0,
			icon: <FaCalendarCheck />,
			color: 'var(--primary-500)',
			bcg: 'var(--primary-100)',
		},
		{
			title: 'Declined Applications',
			count: stats.declined || 0,
			icon: <FaBug />,
			color: '#cc0000',
			bcg: '#ffe6e6',
		},
	]

	return (
		<Wrapper>
			{defaultStats.map((item, index) => {
				return <StatItem key={index} {...item} />
			})}
		</Wrapper>
	)
}

export default StatsContainer
