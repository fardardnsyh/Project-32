import Wrapper from '../assets/wrappers/BigSidebar'
import NavLinks from './NavLinks'
import { useAppContext } from '../context/appContext'
import Logo from '../components/Logo'

const BigSidebar = () => {
    // pass toggle sidebar in navlinks if it's annoying. let's see how
    const { showSidebar } = useAppContext()

    return (
        <Wrapper>
            {/* since show sidebar will be false by default, display it on false */}
            <div className={showSidebar? 'sidebar-container' : 'sidebar-container show-sidebar'}>
                <div className='content'>
                    <header><Logo /></header>
                    <NavLinks/>
                </div>
            </div>
        </Wrapper>
    )
}

export default BigSidebar
