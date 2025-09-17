import '../section-css/HomeSec.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeSection() {
    // Scroll to the top of the page when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const AboutPage = () => {
        navigate('/about');
    };

    // Slideshow logic
    const images = [
        '/car-images/1.jpeg',
        '/car-images/2.jpeg',
        '/car-images/3.jpeg',
        '/car-images/4.jpeg',
        '/car-images/5.jpeg'
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const previousImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const nextImageIndex = (currentImageIndex + 1) % images.length;

    return (
        <div className="home-container">

            <main className="home-main">
            

                {/* Image Slideshow Section 
                <section className="gallery-section">
                    <h2>Our Gallery</h2>
                    <div className="carousel-container">
                        <img
                            src={images[previousImageIndex]}
                            alt="Previous"
                            className="carousel-image previous"
                        />
                        <img
                            src={images[currentImageIndex]}
                            alt="Current"
                            className="carousel-image current"
                        />
                        <img
                            src={images[nextImageIndex]}
                            alt="Next"
                            className="carousel-image next"
                        />
                    </div>
                </section>*/}


            </main>

           {/*} <footer className="home-footer">
                <p>© {new Date().getFullYear()} Opel Stop. All rights reserved.</p>
                <p>Developed by <a href="https://erencedevelopers.co.za/">Erence Developers</a></p>
            </footer>*/}
        </div>
    );
}

export default HomeSection;
