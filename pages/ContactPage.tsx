import React, { useState } from 'react';
import { CONTACT_INFO, HOURS } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
// Fix: Import Transition type from framer-motion to correctly type animation transitions.
import { motion, Transition } from 'framer-motion';
import ConfirmationModal from '../components/ConfirmationModal';
import Tooltip from '../components/Tooltip';

const Spinner: React.FC = () => (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" role="status">
        <title>Submitting...</title>
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        if (error) {
            setError(null);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsConfirmModalOpen(true);
    };

    const handleConfirmSubmit = () => {
        setIsConfirmModalOpen(false);
        setIsSubmitting(true);
        // Simulate network request with potential failure
        setTimeout(() => {
            if (Math.random() > 0.3) { // 70% chance of success
                console.log('Form submitted:', formState);
                setIsSubmitting(false);
                setIsSubmitted(true);
            } else { // 30% chance of failure
                setIsSubmitting(false);
                setError('An unexpected error occurred. Please check your connection and try again.');
            }
        }, 1500);
    };
    
    const formFocusAnimation = {
        scale: 1.02,
        borderColor: '#2563eb',
        boxShadow: "0 0 10px rgba(37, 99, 235, 0.3)"
    };

    // Fix: Explicitly type formTransition with Transition to resolve TypeScript error with 'type' and 'ease' properties.
    const formTransition: Transition = {
        type: 'tween',
        ease: 'easeOut',
        duration: 0.2
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <ConfirmationModal
                isOpen={isConfirmModalOpen}
                onClose={() => setIsConfirmModalOpen(false)}
                onConfirm={handleConfirmSubmit}
                title="Confirm Submission"
                message="Are you sure you want to send this message?"
            />
            <div className="bg-white text-dark-text pt-12 sm:pt-16 pb-16 sm:pb-24">
                <div className="container mx-auto px-4 sm:px-6">
                    <AnimatedSection>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-display text-center mb-4">Get In <span className="text-secondary">Touch</span></h1>
                        <p className="text-base sm:text-lg text-light-text text-center max-w-3xl mx-auto mb-12 sm:mb-16 font-bold">
                            We're here to help with all your automotive needs. Contact us today to schedule a service, inquire about our inventory, or ask any questions you may have.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                        {/* Contact Info and Map */}
                        <AnimatedSection>
                            <div className="bg-light p-6 sm:p-8 rounded-lg shadow-xl h-full flex flex-col border-2 border-secondary/20">
                                <div>
                                    <h2 className="text-2xl sm:text-4xl font-black font-display text-secondary mb-6">Contact & Location</h2>
                                    <div className="space-y-3 sm:space-y-4 text-light-text text-sm sm:text-base font-bold">
                                        <p><strong>Address:</strong> {CONTACT_INFO.address}</p>
                                        <p><strong>Phone:</strong> <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-secondary transition-colors font-black">{CONTACT_INFO.phone}</a></p>
                                        <p><strong>After Hours:</strong> <a href={`tel:${CONTACT_INFO.afterHoursPhone}`} className="hover:text-secondary transition-colors font-black">{CONTACT_INFO.afterHoursPhone}</a></p>
                                    </div>
                                    <div className="mt-8">
                                        <h3 className="text-xl sm:text-3xl font-black font-display text-dark-text mb-4">Hours of Operation</h3>
                                        <p className="text-light-text text-sm sm:text-base font-bold">{HOURS.weekday}</p>
                                        <p className="text-light-text text-sm sm:text-base font-bold">{HOURS.weekend}</p>
                                        <p className="text-xs sm:text-sm text-gray-700 mt-4 font-bold">{HOURS.holidays}</p>
                                    </div>
                                </div>
                                <div className="mt-8 flex-grow">
                                    <iframe
                                        src={CONTACT_INFO.mapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, minHeight: '300px' }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-md border-2 border-secondary/20"
                                    ></iframe>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Contact Form */}
                        <AnimatedSection>
                            <div className="bg-light p-6 sm:p-8 rounded-lg shadow-xl border-2 border-secondary/20">
                                <h2 className="text-2xl sm:text-4xl font-black font-display text-secondary mb-6">Send Us a Message</h2>
                                {isSubmitted ? (
                                    <div className="text-center bg-white p-8 rounded-md border-2 border-secondary/20">
                                        <h3 className="text-xl sm:text-3xl font-black text-secondary">Thank You!</h3>
                                        <p className="text-light-text mt-2 text-sm sm:text-base font-bold">Your message has been sent. We'll get back to you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-xs sm:text-sm font-black text-dark-text mb-2">Full Name</label>
                                            <motion.input 
                                                type="text" name="name" id="name" required value={formState.name} onChange={handleChange} 
                                                className="w-full bg-white border-2 border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base text-dark-text focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary font-bold" 
                                                whileFocus={formFocusAnimation}
                                                transition={formTransition}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-xs sm:text-sm font-black text-dark-text mb-2">Email Address</label>
                                            <motion.input 
                                                type="email" name="email" id="email" required value={formState.email} onChange={handleChange} 
                                                className="w-full bg-white border-2 border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base text-dark-text focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary font-bold"
                                                whileFocus={formFocusAnimation}
                                                transition={formTransition}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-xs sm:text-sm font-black text-dark-text mb-2">Message</label>
                                            <motion.textarea 
                                                name="message" id="message" rows={5} required value={formState.message} onChange={handleChange} 
                                                className="w-full bg-white border-2 border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base text-dark-text focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary font-bold"
                                                whileFocus={formFocusAnimation}
                                                transition={formTransition}
                                            ></motion.textarea>
                                        </div>
                                        {error && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-600 text-sm text-center -mt-2 mb-4 bg-red-100 p-3 rounded-md border-2 border-red-300 font-bold"
                                            >
                                                {error}
                                            </motion.div>
                                        )}
                                        <motion.button 
                                            type="submit" 
                                            disabled={isSubmitting}
                                            whileHover={isSubmitting ? {} : { scale: 1.05 }} 
                                            whileTap={isSubmitting ? {} : { scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="w-full bg-secondary text-white font-black font-display uppercase tracking-wider py-3 px-8 rounded-md shadow-xl transition-all duration-300 text-sm sm:text-base flex justify-center items-center disabled:opacity-75 disabled:cursor-not-allowed hover:bg-secondary-hover vibrant-shadow-blue">
                                            {isSubmitting ? <Spinner /> : 'Submit Inquiry'}
                                        </motion.button>
                                    </form>
                                )}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;