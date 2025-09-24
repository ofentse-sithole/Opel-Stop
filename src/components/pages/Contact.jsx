import '../../App.css'
import { Helmet } from 'react-helmet-async';
import ContactSection from '../Sections/ContactInformation'
import Footer from '../Footer/Footer'

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact Opel Stop - Call 082 403 4735 | Automotive Services Pretoria North</title>
                <meta 
                    name="description" 
                    content="Contact Opel Stop for Chevrolet, Opel & Isuzu services. Located at 66 Topaas Street, Pretoria North. Call 082 403 4735 or email theopelstop@gmail.com. Open Mon-Fri 8AM-5PM, Sat 8AM-1PM." 
                />
                <meta 
                    name="keywords" 
                    content="contact Opel Stop, 082 403 4735, theopelstop@gmail.com, automotive quote Pretoria, Chevrolet service contact, Opel repairs Pretoria North, Isuzu specialist contact, 66 Topaas Street Klerksoord, car service booking" 
                />
                
                <meta property="og:title" content="Contact Opel Stop - Get Your Automotive Service Quote | 082 403 4735" />
                <meta property="og:description" content="Professional automotive services in Pretoria North. Contact us for Chevrolet, Opel & Isuzu repairs. Call 082 403 4735 for immediate assistance." />
                <meta property="og:url" content="https://opelstop.co.za/contact" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Contact Opel Stop - 082 403 4735" />
                <meta name="twitter:description" content="Get in touch for professional Chevrolet, Opel & Isuzu services in Pretoria North. Call now for a quote!" />

                {/* Contact-specific Schema */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "ContactPage",
                            "mainEntity": {
                                "@type": "AutoRepair",
                                "name": "Opel Stop",
                                "telephone": "+27824034735",
                                "email": "theopelstop@gmail.com",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "66 Topaas Street, Klerksoord, Unit 7",
                                    "addressLocality": "Pretoria North",
                                    "addressRegion": "Gauteng",
                                    "postalCode": "0116",
                                    "addressCountry": "ZA"
                                },
                                "openingHours": [
                                    "Mo-Fr 08:00-17:00",
                                    "Sa 08:00-13:00"
                                ]
                            }
                        }
                    `}
                </script>
            </Helmet>

            <ContactSection />
            <Footer/>
        </div>
    )
}

export default Contact