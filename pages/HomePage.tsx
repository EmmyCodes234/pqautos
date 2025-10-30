import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// Fix: Import Variants type from framer-motion to correctly type animation variants.
import { motion, useInView, Variants } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Tooltip from '../components/Tooltip';
import VideoOptimizer from '../components/VideoOptimizer';
import OptimizedImage from '../components/ImageOptimizer';

const ToolIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3 3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);

const TireIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

const CarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
       <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
       <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
    </svg>
);

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
     <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const HomePage: React.FC = () => {
    const listContainerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
        hidden: {},
    };

    // Fix: Explicitly type listItemVariants with Variants to resolve TypeScript error with the 'ease' property.
    const listItemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };
    
    const listRef = useRef(null);
    const isListInView = useInView(listRef, { once: true, amount: 0.3 });

    return (
        <motion.div
            className="text-dark-text"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            {/* Hero Section */}
            <section className="relative min-h-[500px] sm:min-h-screen flex items-center justify-center text-center overflow-hidden">
                <VideoOptimizer
                    src="/coastal.mp4"
                    className="absolute z-0 w-full h-full object-cover"
                >
                    Your browser does not support the video tag.
                </VideoOptimizer>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-20 px-4 py-12 sm:py-0">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-display uppercase tracking-widest text-white drop-shadow-2xl">
                        Beyond <span className="text-white">Performance</span>
                    </h1>
                    <p className="mt-4 text-base sm:text-lg md:text-2xl max-w-2xl sm:max-w-3xl mx-auto text-gray-100 font-bold">
                        From expert repairs to quality car sales, we have you covered.
                    </p>
                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                        <motion.div 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                            <Link to="/services" className="inline-block bg-primary text-white font-black font-display uppercase tracking-wider py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-base rounded-md shadow-xl transition-transform duration-300 hover:bg-primary-hover vibrant-shadow-red">
                                Schedule a Service
                            </Link>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                            <Link to="/sales" className="inline-block bg-secondary text-white font-black font-display uppercase tracking-wider py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-base rounded-md shadow-xl transition-colors duration-300 hover:bg-secondary-hover vibrant-shadow-blue">
                                View Car Inventory
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Services Overview */}
            <div className="bg-light py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-5xl font-black font-display text-center mb-12 text-dark-text">Our Core Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.25)" }} className="bg-white p-8 rounded-lg text-center transition-all duration-300 shadow-xl border-2 border-primary/20">
                                <ToolIcon className="h-12 sm:h-16 w-12 sm:w-16 mx-auto text-primary mb-4" />
                                <h3 className="text-xl sm:text-2xl font-black font-display mb-2">Mechanical Repairs</h3>
                                <p className="text-light-text text-sm sm:text-base font-bold">Expert diagnostics and repairs to keep your vehicle running smoothly.</p>
                            </motion.div>
                            <motion.div whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.25)" }} className="bg-white p-8 rounded-lg text-center transition-all duration-300 shadow-xl border-2 border-secondary/20">
                                <TireIcon className="h-12 sm:h-16 w-12 sm:w-16 mx-auto text-secondary mb-4" />
                                <h3 className="text-xl sm:text-2xl font-black font-display mb-2">Tire Services</h3>
                                <p className="text-light-text text-sm sm:text-base font-bold">Installation, balancing, rotation, and sales of new and used tires.</p>
                            </motion.div>
                            <motion.div whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.25)" }} className="bg-white p-8 rounded-lg text-center transition-all duration-300 shadow-xl border-2 border-primary/20">
                                <CarIcon className="h-12 sm:h-16 w-12 sm:w-16 mx-auto text-primary mb-4" />
                                <h3 className="text-xl sm:text-2xl font-black font-display mb-2">Car Sales</h3>
                                <p className="text-light-text text-sm sm:text-base font-bold">A curated selection of quality-assured pre-owned vehicles.</p>
                            </motion.div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white py-16 sm:py-20">
                 <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <AnimatedSection>
                        <OptimizedImage src="/pq1.jpg" alt="Expert mechanic working on a car" className="rounded-lg shadow-2xl border-4 border-secondary" />
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <h2 className="text-3xl sm:text-5xl font-black font-display mb-6 text-dark-text">Why Choose <span className="text-secondary">PQ Autos?</span></h2>
                        <p className="text-light-text mb-8 text-base sm:text-lg font-bold">
                            We're not just a garage; we're your partners in automotive care. We are committed to providing exceptional service, transparent pricing, and quality you can trust.
                        </p>
                        <motion.div 
                            ref={listRef}
                            className="space-y-4"
                            variants={listContainerVariants}
                            initial="hidden"
                            animate={isListInView ? "visible" : "hidden"}
                        >
                            <motion.div className="flex items-start" variants={listItemVariants}>
                                <CheckCircleIcon className="h-8 w-8 text-secondary mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg sm:text-xl font-black">Expert Technicians</h3>
                                    <p className="text-light-text text-sm sm:text-base font-bold">Our certified mechanics use the latest tools and technology.</p>
                                </div>
                            </motion.div>
                            <motion.div className="flex items-start" variants={listItemVariants}>
                                <CheckCircleIcon className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg sm:text-xl font-black">All-in-One Convenience</h3>
                                    <p className="text-light-text text-sm sm:text-base font-bold">From oil changes to car sales, get everything you need in one place.</p>
                                </div>
                            </motion.div>
                             <motion.div className="flex items-start" variants={listItemVariants}>
                                <CheckCircleIcon className="h-8 w-8 text-secondary mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg sm:text-xl font-black">Quality-Assured Vehicles</h3>
                                    <p className="text-light-text text-sm sm:text-base font-bold">Every car we sell passes a rigorous inspection for your peace of mind.</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </div>
        </motion.div>
    );
};

export default HomePage;
