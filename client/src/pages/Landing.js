import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				{/* information */}
				<div className='info'>
					<h1>
						<span>WorkWise</span>
					</h1>
					<h4>A fuss-free job tracking app</h4>
					<p>
						Designed to help job seekers easily track their job
						applications. Keep a log of your applications, set
						reminders for follow-ups, and identify potential areas
						for improvement.
						<br />
						<br />
						By keeping all your job search information in one place,
						WorkWise empowers you to stay organised and focused on
						landing your dream job.
					</p>
					<Link to='/register' className='btn btn-hero'>
						Begin your journey
					</Link>
				</div>

				<img
					src={main}
					alt='application logging'
					className='img main-img'
				/>
				{/* PS: img is main class and the other class is for styling on smaller media */}
			</div>
		</Wrapper>
	)
}

// Unique class from styled components should help reduce possible clashing.

export default Landing
