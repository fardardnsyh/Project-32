import moment from 'moment'
import { Link } from 'react-router-dom'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import JobInfo from './JobInfo'
import Wrapper from '../assets/wrappers/Job'

const Job = ({
	_id,
	position,
	company,
	jobLocation,
	jobType,
	jobStyle,
	createdAt,
	status,
	notes,
}) => {
	const { setEditJob, deleteJob } = useAppContext()
	let date = moment(createdAt)
	date = date.format('D MMM YY')
	return (
		<Wrapper>
			<header>
				<div className='main-icon'>{company.charAt(0)}</div>
				<div className='info'>
					<h5>{position}</h5>
					<p>{company}</p>
				</div>
			</header>
			<div className='content'>
				<div className='content-center'>
					<JobInfo icon={<FaLocationArrow />} text={jobLocation} />
					<JobInfo
						icon={<FaCalendarAlt />}
						text={'Updated: ' + date}
					/>
					<JobInfo
						icon={<FaBriefcase />}
						text={jobType + ', ' + jobStyle}
					/>
					<div className={`status ${status}`}>{status}</div>
				</div>
				<div className='content-center-notes'>
					<JobInfo text={notes} />
				</div>
				<footer>
					<div className='actions'>
						<Link
							to='/add-job'
							className='btn edit-btn'
							onClick={() => setEditJob(_id)}
						>
							{' '}
							Edit{' '}
						</Link>
						<button
							className='btn delete-btn'
							onClick={() => deleteJob(_id)}
						>
							{' '}
							Delete{' '}
						</button>
					</div>
				</footer>
			</div>
		</Wrapper>
	)
}

export default Job
