import '../../App.css'
import HeroHomeSection from '../HeroSection/HomeHeroSection'
import AboutSec from '../Sections/AboutInformation'
import ServiceSec from '../Sections/ServicesInfomation'
import GallerySec from '../Sections/GalleryInformation'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <HeroHomeSection/>
            <AboutSec/>
            <ServiceSec/>
            <GallerySec/>
            <Footer/>
        </div>
    )
}

export default Home