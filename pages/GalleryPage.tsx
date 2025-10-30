
import React, { useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Lightbox from '../components/Lightbox';
import OptimizedImage from '../components/ImageOptimizer';

const galleryImages = [
    { src: '/our work/work.jpg', alt: 'Automotive repair work in progress' },
    { src: '/our work/work1.jpg', alt: 'Detailed view of automotive service' },
    { src: '/our work/work2.jpg', alt: 'Professional automotive maintenance' },
    { src: '/our work/work3.jpg', alt: 'Expert car repair service' },
    { src: '/our work/work4.jpg', alt: 'Quality automotive craftsmanship' },
    { src: '/our work/work7.jpg', alt: 'Precision automotive work' },
    { src: '/our work/work8.jpg', alt: 'Dedicated automotive service' },
    { src: '/our work/work9.jpg', alt: 'Professional car maintenance' },
    { src: '/our work/work10.jpg', alt: 'Expert automotive repair' },
    { src: '/our work/work11.jpg', alt: 'High-quality car service' },
    { src: '/our work/work12.jpg', alt: 'Comprehensive automotive care' },
    { src: '/our work/work13.jpg', alt: 'Skilled automotive technicians' },
];

const GalleryPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const galleryRef = useRef(null);
    const isGalleryInView = useInView(galleryRef, { once: true, amount: 0.1 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    return (
        <>
            <motion.div
                className="bg-white text-dark-text pt-12 sm:pt-16 pb-16 sm:pb-24"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-display text-center mb-4">Our Work in <span className="text-secondary">Pictures</span></h1>
                        <p className="text-base sm:text-lg text-light-text text-center max-w-3xl mx-auto mb-12 sm:mb-16 font-bold">
                            Take a look at our state-of-the-art facility, the quality of our work, and some of the amazing vehicles we've had the pleasure of working on.
                        </p>
                    </motion.div>

                    <motion.div
                        ref={galleryRef}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isGalleryInView ? "visible" : "hidden"}
                    >
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg shadow-xl border-2 border-secondary/20"
                                variants={itemVariants}
                                onClick={() => setSelectedImage(index)}
                                whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.25)" }}
                            >
                                <OptimizedImage src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                    <p className="text-white text-lg font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Image</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
            
            <Lightbox
                images={galleryImages}
                selectedIndex={selectedImage}
                onClose={() => setSelectedImage(null)}
                // Fix: Pass an onNavigate handler to allow the Lightbox to change the selected image.
                onNavigate={(index) => setSelectedImage(index)}
            />
        </>
    );
};

export default GalleryPage;
