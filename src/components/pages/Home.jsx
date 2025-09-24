import '../../App.css'
import { Helmet } from 'react-helmet-async';
import HeroHomeSection from '../HeroSection/HomeHeroSection'
import AboutSec from '../Sections/AboutInformation'
import ServiceSec from '../Sections/ServicesInfomation'
import GallerySec from '../Sections/GalleryInformation'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Opel Stop - Chevrolet, Opel & Isuzu Specialists | Pretoria North | South Africa</title>
                <meta 
                    name="description" 
                    content="Professional automotive services in Pretoria North. Clutch replacements, engine overhaul, brake services, diagnostics, suspension repairs & towing for Chevrolet, Opel & Isuzu. Call 082 403 4735." 
                />
                <meta 
                    name="keywords" 
                    content="Opel service Pretoria, Chevrolet repairs South Africa, Isuzu specialists, clutch replacement Pretoria North, engine overhaul, brake service, car diagnostics, suspension repair, towing service, automotive Pretoria North, Klerksoord, 082 403 4735" 
                />
                
                {/* Local Business Schema */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "AutoRepair",
                            "name": "Opel Stop",
                            "description": "Professional automotive services for Chevrolet, Opel & Isuzu vehicles",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "66 Topaas Street, Klerksoord, Unit 7",
                                "addressLocality": "Pretoria North",
                                "addressRegion": "Gauteng",
                                "postalCode": "0116",
                                "addressCountry": "ZA"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "-25.639874",
                                "longitude": "28.125733"
                            },
                            "url": "https://opelstop.co.za",
                            "telephone": "+27824034735",
                            "email": "theopelstop@gmail.com",
                            "priceRange": "$$",
                            "serviceArea": {
                                "@type": "Country",
                                "name": "South Africa"
                            },
                            "openingHours": [
                                "Mo-Fr 08:00-17:00",
                                "Sa 08:00-13:00"
                            ],
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Automotive Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Clutch Replacements",
                                            "description": "Fast and reliable clutch replacements to keep you on the road"
                                        }
                                    },
                                    {
                                        "@type": "Offer", 
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Engine Overhaul",
                                            "description": "Full engine services to restore performance"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service", 
                                            "name": "Brake Services",
                                            "description": "Expert brake services to ensure your safety"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Vehicle Diagnostics",
                                            "description": "Accurate diagnostics for any warning lights or issues"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Suspension Repairs",
                                            "description": "Keep your ride smooth with our suspension services"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Towing Services",
                                            "description": "Emergency towing available for your convenience"
                                        }
                                    }
                                ]
                            }
                        }
                    `}
                </script>

                {/* Open Graph for Social Media */}
                <meta property="og:title" content="Opel Stop - Chevrolet, Opel & Isuzu Specialists Pretoria North" />
                <meta property="og:description" content="Professional automotive services: clutch, engine, brake, diagnostics, suspension & towing. Call 082 403 4735. Serving all South Africa." />
                <meta property="og:url" content="https://opelstop.co.za" />
                <meta property="og:type" content="business.business" />
                <meta property="og:locale" content="en_ZA" />
                <meta property="business:contact_data:street_address" content="66 Topaas Street, Klerksoord, Unit 7" />
                <meta property="business:contact_data:locality" content="Pretoria North" />
                <meta property="business:contact_data:region" content="Gauteng" />
                <meta property="business:contact_data:postal_code" content="0116" />
                <meta property="business:contact_data:country_name" content="South Africa" />
                <meta property="business:contact_data:phone_number" content="+27824034735" />
                <meta property="business:contact_data:email" content="theopelstop@gmail.com" />
                
                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Opel Stop - Auto Specialists Pretoria North" />
                <meta name="twitter:description" content="Chevrolet, Opel & Isuzu specialists. Professional automotive services across South Africa. Call 082 403 4735." />

                {/* Additional Local SEO */}
                <meta name="geo.region" content="ZA-GP" />
                <meta name="geo.placename" content="Pretoria North" />
                <meta name="geo.position" content="-25.639874;28.125733" />
                <meta name="ICBM" content="-25.639874, 28.125733" />
            </Helmet>

            <HeroHomeSection/>
            <AboutSec/>
            <ServiceSec/>
            <GallerySec/>
            <Footer/>
        </div>
    )
}

export default Home