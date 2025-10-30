
import React, { useRef } from 'react';
import { CAR_BRANDS } from '../constants';
// Fix: Import Variants type from framer-motion to correctly type animation variants.
import { motion, useInView, Variants } from 'framer-motion';
import Tooltip from '../components/Tooltip';
import SimpleLogoLoop from '../components/SimpleLogoLoop';
import OptimizedImage from '../components/ImageOptimizer';

const carImages = [
    { src: '/cars/cars.jpg', alt: 'Quality pre-owned vehicle' },
    { src: '/cars/cars1.jpg', alt: 'Well-maintained sedan' },
    { src: '/cars/cars2.jpg', alt: 'Reliable SUV' },
    { src: '/cars/cars3.jpg', alt: 'Modern hatchback' },
    { src: '/cars/cars4.jpg', alt: 'Luxury sedan' },
    { src: '/cars/cars7.jpg', alt: 'Compact car' },
    { src: '/cars/cars8.jpg', alt: 'Spacious family vehicle' },
];

const CarImage: React.FC<{ src: string, alt: string, variants?: any }> = ({ src, alt, variants }) => (
    <motion.div 
        className="overflow-hidden rounded-lg shadow-xl border-2 border-secondary/20"
        whileHover={{ scale: 1.03, zIndex: 10, boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.25)" }}
        transition={{ duration: 0.3 }}
        variants={variants}
    >
        <OptimizedImage src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
);

const CarSalesPage: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    // Fix: Explicitly type itemVariants with Variants to resolve TypeScript error with the 'ease' property.
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };
    
    const galleryRef = useRef(null);
    const brandsRef = useRef(null);
    const ctaRef = useRef(null);
    const isGalleryInView = useInView(galleryRef, { once: true, amount: 0.2 });
    const isBrandsInView = useInView(brandsRef, { once: true, amount: 0.2 });
    const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 });

    return (
        <motion.div
            className="bg-white text-dark-text pt-12 sm:pt-16 pb-16 sm:pb-24"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div 
                    initial={{opacity: 0, y: 30}} 
                    animate={{opacity: 1, y: 0}} 
                    transition={{duration: 0.6, ease: 'easeOut'}}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-display text-center mb-4">Quality Pre-Owned <span className="text-secondary">Vehicles in Decatur, GA</span></h1>
                    <p className="text-base sm:text-lg text-light-text text-center max-w-3xl mx-auto mb-12 sm:mb-16 font-bold">
                        Discover your next vehicle from our curated selection of quality pre-owned cars in Decatur, GA. Each car undergoes a rigorous inspection to ensure it meets our high standards of quality and reliability.
                    </p>
                </motion.div>

                {/* Photo Gallery */}
                <motion.div
                    ref={galleryRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16 sm:mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isGalleryInView ? "visible" : "hidden"}
                >
                    {carImages.map((car, index) => (
                        <CarImage key={index} src={car.src} alt={car.alt} variants={itemVariants} />
                    ))}
                </motion.div>
                
                {/* Brands Section */}
                 <motion.div 
                    ref={brandsRef}
                    className="text-center mb-16 sm:mb-20"
                    initial="hidden"
                    animate={isBrandsInView ? "visible" : "hidden"}
                    variants={itemVariants}
                 >
                     <h2 className="text-3xl sm:text-5xl font-black font-display mb-8 text-dark-text">Brands We Trust & Sell in Decatur</h2>
                     <div className="py-8 bg-light rounded-xl shadow-lg border-2 border-secondary/10">
                        <SimpleLogoLoop 
                            logos={[
                                { src: '/car icons/bmw-svgrepo-com.svg', alt: 'BMW' },
                                { src: '/car icons/buick-svgrepo-com.svg', alt: 'Buick' },
                                { src: '/car icons/chevrolet-svgrepo-com.svg', alt: 'Chevrolet' },
                                { src: '/car icons/chrysler-svgrepo-com.svg', alt: 'Chrysler' },
                                { src: '/car icons/fiat-alt-svgrepo-com.svg', alt: 'Fiat' },
                                { src: '/car icons/fisker-svgrepo-com.svg', alt: 'Fisker' },
                                { src: '/car icons/ford-svgrepo-com.svg', alt: 'Ford' },
                                { src: '/car icons/gmc-svgrepo-com.svg', alt: 'GMC' },
                                { src: '/car icons/honda-svgrepo-com.svg', alt: 'Honda' },
                                { src: '/car icons/hyundai-svgrepo-com.svg', alt: 'Hyundai' },
                                { src: '/car icons/infiniti-svgrepo-com.svg', alt: 'Infiniti' },
                                { src: '/car icons/isuzu-svgrepo-com.svg', alt: 'Isuzu' },
                                { src: '/car icons/jeep-alt-svgrepo-com.svg', alt: 'Jeep' },
                                { src: '/car icons/kia-svgrepo-com.svg', alt: 'Kia' },
                                { src: '/car icons/land-rover-svgrepo-com.svg', alt: 'Land Rover' },
                                { src: '/car icons/lexus-svgrepo-com.svg', alt: 'Lexus' },
                                { src: '/car icons/lincoln-svgrepo-com.svg', alt: 'Lincoln' },
                                { src: '/car icons/mazda-alt-svgrepo-com.svg', alt: 'Mazda' },
                                { src: '/car icons/mercedes-benz-alt-svgrepo-com.svg', alt: 'Mercedes-Benz' },
                                { src: '/car icons/mitsubishi-svgrepo-com.svg', alt: 'Mitsubishi' },
                                { src: '/car icons/nissan-svgrepo-com.svg', alt: 'Nissan' },
                                { src: '/car icons/opel-svgrepo-com.svg', alt: 'Opel' },
                                { src: '/car icons/renault-alt-svgrepo-com.svg', alt: 'Renault' },
                                { src: '/car icons/skoda-svgrepo-com.svg', alt: 'Skoda' },
                                { src: '/car icons/subaru-alt-svgrepo-com.svg', alt: 'Subaru' },
                                { src: '/car icons/suzuki-svgrepo-com.svg', alt: 'Suzuki' },
                                { src: '/car icons/tesla-svgrepo-com.svg', alt: 'Tesla' },
                            ]}
                            speed={1.5}
                            logoHeight={60}
                            gap={60}
                        />
                    </div>
                 </motion.div>

                 {/* CTA Section */}
                 <motion.div
                    ref={ctaRef}
                    className="text-center"
                    initial="hidden"
                    animate={isCtaInView ? "visible" : "hidden"}
                    variants={itemVariants}
                >
                    <h2 className="text-3xl sm:text-5xl font-black font-display text-secondary mb-4">Ready to Find Your Next Car in Decatur?</h2>
                    <p className="text-base sm:text-lg text-light-text max-w-2xl mx-auto mb-8 font-bold">
                        Visit us today to see our full inventory and take a test drive. Our team is here to help you find the perfect car that fits your needs and budget in the Atlanta metro area.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className="inline-block">
                        <a href="#/contact" className="bg-secondary text-white font-black font-display uppercase tracking-wider py-3 px-6 text-sm sm:text-base sm:py-4 sm:px-10 rounded-md shadow-xl transition-transform duration-300 hover:bg-secondary-hover vibrant-shadow-blue">
                           Find Your Next Car Today
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CarSalesPage;
