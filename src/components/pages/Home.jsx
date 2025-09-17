import '../../App.css'
import HeroHomeSection from '../HeroSection/HomeHeroSection'
import AboutSec from '../Sections/AboutInformation'
import ServiceSec from '../Sections/ServicesInfomation'

const Home = () => {
    return (
        <div>
            <HeroHomeSection/>
            <AboutSec/>
            <ServiceSec/>
        </div>
    )
}

export default Home