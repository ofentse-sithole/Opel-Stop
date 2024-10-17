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
            <header className="home-header">
                <h1>Welcome to Opel Stop</h1>
                <p>Opel, Isuzu, and Chevrolet Specialists Since 2011</p>
            </header>

            {/* New Image Section */}
            <div className="home-image-container">
                <img src="/image/untitled_design.jpg" alt="Opel Stop - Vehicle Repairs" className="home-header-image" width="900px" />
            </div>

            <main className="home-main">
                <section className="services-section">
                    <div className="our-services">
                        <h2>Our Services</h2>
                        <p>Your trusted team for vehicle repairs and diagnostics.</p>
                    </div>
                    <div className="services-grid">
                        <a href="tel:+27824034735" className="service-item">
                            <h3>Clutch Replacements</h3>
                            <p>Fast and reliable clutch replacements to keep you on the road.</p>
                        </a>
                        <a href="tel:+27824034735" className="service-item">
                            <h3>Engine Overhaul</h3>
                            <p>Full engine services to restore performance.</p>
                        </a>
                        <a href="tel:+27824034735" className="service-item">
                            <h3>Brake Replacements</h3>
                            <p>Expert brake services to ensure your safety.</p>
                        </a>
                        <a href="tel:+27824034735" className="service-item">
                            <h3>Cylinder Head Overhaul</h3>
                            <p>Professional overhaul services for lasting engine health.</p>
                        </a>
                        <a href="tel:+27824034735" className="service-item">
                            <h3>Suspension Repairs</h3>
                            <p>Keep your ride smooth with our suspension services.</p>
                        </a>
                        <a href="tel:+27824034735" className="service-item">
                            <h3>Diagnostic Services</h3>
                            <p>Accurate diagnostics for any warning lights or issues.</p>
                        </a>
                        <a href="tel:+27824034735" className="service-item">
                            <h3>Towing Services</h3>
                            <p>Emergency towing available for your convenience.</p>
                        </a>
                    </div>
                </section>

                {/* Image Slideshow Section */}
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
                </section>

                <section className="about-section">
                    <div className="our-services">
                        <h2>About Us</h2>
                        <p>
                            At Opel Stop, we have been providing specialized services for Opel, Isuzu, and Chevrolet since 2011. Our experienced team offers a wide range of repair and maintenance services.
                        </p>
                    </div>
                    <button className="cta-button" onClick={AboutPage}>Read More</button>
                </section>
            </main>

            <footer className="home-footer">
                <p>© {new Date().getFullYear()} Opel Stop. All rights reserved.</p>
                <p>Developed by <a href="https://erencedevelopers.co.za/">Erence Developers</a></p>
            </footer>
        </div>
    );
}

export default HomeSection;
