
import React from 'react';
import { MECHANICAL_REPAIRS, TIRE_SERVICES, SPECIALTY_SERVICES } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import { Accordion, AccordionItem } from '../components/Accordion';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
    const listContainerVariants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        collapsed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const listItemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        collapsed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };
    
    return (
        <motion.div
            className="bg-white text-dark-text pt-12 sm:pt-16 pb-16 sm:pb-24"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <AnimatedSection>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-display text-center mb-4">Our <span className="text-secondary">Automotive Services</span></h1>
                    <p className="text-base sm:text-lg text-light-text text-center max-w-3xl mx-auto mb-12 sm:mb-16 font-bold">
                        We offer a comprehensive range of automotive services to meet all your needs in Decatur, GA. Quality workmanship and customer satisfaction are our top priorities.
                    </p>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="max-w-4xl mx-auto">
                        <Accordion defaultIndex={0}>
                            <AccordionItem title="Mechanical Repairs">
                                <motion.ul 
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-disc list-inside text-light-text font-bold"
                                    variants={listContainerVariants}
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                >
                                    {MECHANICAL_REPAIRS.map(service => (
                                        <motion.li key={service} variants={listItemVariants} className="pl-2 text-primary">{service}</motion.li>
                                    ))}
                                </motion.ul>
                            </AccordionItem>
                            <AccordionItem title="Tire Installation & Services">
                                <motion.ul 
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-disc list-inside text-light-text font-bold"
                                    variants={listContainerVariants}
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                >
                                    {TIRE_SERVICES.map(service => (
                                        <motion.li key={service} variants={listItemVariants} className="pl-2 text-secondary">{service}</motion.li>
                                    ))}
                                </motion.ul>
                            </AccordionItem>
                            <AccordionItem title="Specialty Services">
                                <motion.div 
                                    className="space-y-4"
                                    variants={listContainerVariants}
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                >
                                    {SPECIALTY_SERVICES.map(service => (
                                        <motion.div key={service.name} variants={listItemVariants} className="bg-light p-4 rounded-lg border-l-4 border-secondary">
                                            <h3 className="text-base sm:text-lg font-black text-dark-text">{service.name}</h3>
                                            <p className="font-bold">{service.description}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </AnimatedSection>
            </div>
        </motion.div>
    );
};

export default ServicesPage;
