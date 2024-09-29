import '../section-css/ContactSection.css';
import { useEffect } from 'react';

function ContactSection() {

    // Scroll to the top of the page when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-container">
            <header className="contact-header">
                <h1>Contact Opel Stop</h1>
                <p>Get in touch with us for all your Opel, Isuzu, and Chevrolet needs.</p>
            </header>

            <main className="contact-main">
                <section className="contact-info">
                    <h2>Our Contact Information</h2>
                    <p><strong>Address:</strong> 66 Topaas Street, Klerksoord, Unit 7, Pretoria North</p>
                    <p><strong>Phone:</strong> 082 403 4735</p>
                    <p><strong>Email:</strong> theopelstop@gmail.com</p>
                    <p><strong>Working Hours:</strong> Mon-Fri: 8 AM - 5 PM | Sat: 8 AM - 1 PM</p>
                </section>

                <section className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name" required />

                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Your email" required />

                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </section>

                <section className="contact-map">
                    <h2>Find Us</h2>
                    {/* Google Maps Embed */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d660.8197027815552!2d28.125732746635663!3d-25.639874270116525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfda12ca1376ad%3A0x6a3a0f70662174fd!2s7%2C%2066%20Topaas%20St%2C%20Klerksoord%20AH%2C%20Pretoria%2C%200116!5e0!3m2!1sen!2sza!4v1727624149644!5m2!1sen!2sza"
                        width="100%" height="400px" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                    ></iframe>
                </section>
            </main>

            <footer className="contact-footer">
                <p>© {new Date().getFullYear()} Opel Stop. All rights reserved.</p>
                <p>Developed by <a href="https://erencedevelopers.co.za/">Erence Developers</a></p>
            </footer>
        </div>
    );
}

export default ContactSection;
