import '../../App.css'
import HomeSection from '../section/HomeSection'
import AboutSec from '../Sections/AboutInformation'
import ServiceSec from '../Sections/ServicesInfomation'

const Home = () => {
    return (
        <div>
            <HomeSection/>
            <AboutSec/>
            <ServiceSec/>
        </div>
    )
}

export default Home