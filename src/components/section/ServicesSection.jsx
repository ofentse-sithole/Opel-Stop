import '../section-css/ServicesSection.css';
import { useEffect } from 'react';

function ServicesSection() {

    // Scroll to the top of the page when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services-container">
            <header className="services-header">
                <h1>Our Services</h1>
                <p>Opel, Isuzu, and Chevrolet specialists, offering a range of mechanical services and repairs.</p>
            </header>

            <main className="services-main">
                <div className="services-grid">
                    <div className="service-item">
                        <h3>Clutch Replacements</h3>
                        <p>Our clutch replacement services ensure smooth gear 
                        transitions, extending your vehicle's lifespan.</p>
                    </div>
                    <div className="service-item">
                        <h3>Engine Overhaul</h3>
                        <p>Full engine overhauls to restore your vehicle's 
                        performance and ensure long-term reliability.</p>
                    </div>
                    <div className="service-item">
                        <h3>Brake Replacements</h3>
                        <p>Expert brake servicing and replacements to keep you safe on the road.</p>
                    </div>
                    <div className="service-item">
                        <h3>Cylinder Head Overhaul</h3>
                        <p>Precision cylinder head overhauls to optimize your engine's power and efficiency.</p>
                    </div>
                    <div className="service-item">
                        <h3>Suspension Repairs</h3>
                        <p>We provide top-notch suspension repairs to ensure a smooth and safe driving experience.</p>
                    </div>
                    <div className="service-item">
                        <h3>Diagnostic Services</h3>
                        <p>We use advanced diagnostic tools to identify and resolve issues indicated by warning lights.</p>
                    </div>
                    <div className="service-item">
                        <h3>Towing Services</h3>
                        <p>24/7 emergency towing services available for your peace of mind.</p>
                    </div>
                </div>
            </main>

            <footer className="services-footer">
                <p>© {new Date().getFullYear()} Opel Stop. All rights reserved.</p>
                <p>Developed by <a href="https://erencedevelopers.co.za/">Erence Developers</a></p>
            </footer>
        </div>
    );
}

export default ServicesSection;
