import '../../App.css'
import HomeSection from '../section/HomeSection'
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