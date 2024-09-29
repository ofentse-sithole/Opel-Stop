import '../section-css/AboutSection.css';
import { useEffect } from 'react';

function AboutSection() {

    // Scroll to the top of the page when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Opel Stop</h1>
                <p>Established in 2011, your trusted Opel, Isuzu, and Chevrolet specialists.</p>
            </header>

            <main className="about-main">
                <section className="about-story">
                    <h2>Our Story</h2>
                    <p>
                        Opel Stop was founded in 2011 with a passion for delivering expert mechanical services
                        to Opel, Isuzu, and Chevrolet owners. Over the years, we've grown to become a trusted
                        name in the industry, providing high-quality vehicle services with a focus on customer
                        satisfaction and professional craftsmanship.
                    </p>
                </section>

                <section className="about-mission">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to provide top-tier automotive services that keep your vehicle running
                        smoothly and safely. We strive to offer exceptional service, using cutting-edge diagnostic
                        tools and expert mechanical skills to address a range of vehicle issues.
                    </p>
                </section>

                <section className="about-values">
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Expertise:</strong> Specializing in Opel, Isuzu, and Chevrolet vehicles.</li>
                        <li><strong>Customer Satisfaction:</strong> We prioritize your experience and ensure your vehicle gets the best care.</li>
                        <li><strong>Quality Workmanship:</strong> All repairs and services are carried out to the highest standards.</li>
                        <li><strong>Integrity:</strong> Honest pricing, transparent diagnostics, and ethical services.</li>
                    </ul>
                </section>

                <section className="about-team">
                    <h2>Meet the Team</h2>
                    <p>
                        At Opel Stop, our team is composed of certified mechanics and experts who are passionate
                        about cars and committed to delivering the best results. Each team member brings years of
                        experience and specialized knowledge in mechanical repairs and diagnostics.
                    </p>
                </section>
            </main>

            <footer className="about-footer">
                <p>© {new Date().getFullYear()} Opel Stop. All rights reserved.</p>
                <p>Developed by <a href="https://erencedevelopers.co.za/">Erence Developers</a></p>
            </footer>
        </div>
    );
}

export default AboutSection;
