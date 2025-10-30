import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, HOURS } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light border-t-2 border-primary">
            <div className="container mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row md:flex-col items-center sm:items-start md:items-center gap-3 mb-4">
                            <Logo className="h-24 w-24 text-secondary" />
                            <div>
                                <h3 className="text-2xl font-display font-black text-dark-text leading-tight">Prestige Quality</h3>
                                <h4 className="text-xl font-display font-black text-secondary">Automotive LLC</h4>
                            </div>
                        </div>
                        <p className="text-light-text mb-4 text-center sm:text-left font-bold">Your one-stop shop for all automotive needs.</p>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            <a href="#" aria-label="Facebook" className="text-light-text hover:text-secondary transition-colors bg-secondary/10 p-2 rounded-full hover:bg-secondary/20">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram" className="text-light-text hover:text-secondary transition-colors bg-secondary/10 p-2 rounded-full hover:bg-secondary/20">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-black font-display text-xl text-dark-text mb-4 pb-2 border-b-2 border-secondary">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-light-text hover:text-secondary transition-colors inline-block font-bold">Home</Link></li>
                            <li><Link to="/about" className="text-light-text hover:text-secondary transition-colors inline-block font-bold">About</Link></li>
                            <li><Link to="/services" className="text-light-text hover:text-secondary transition-colors inline-block font-bold">Services</Link></li>
                            <li><Link to="/sales" className="text-light-text hover:text-secondary transition-colors inline-block font-bold">Car Sales</Link></li>
                            <li><Link to="/gallery" className="text-light-text hover:text-secondary transition-colors inline-block font-bold">Gallery</Link></li>
                            <li><Link to="/contact" className="text-light-text hover:text-secondary transition-colors inline-block font-bold">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-black font-display text-xl text-dark-text mb-4 pb-2 border-b-2 border-secondary">Contact Us</h4>
                        <ul className="space-y-3 text-light-text">
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-bold">{CONTACT_INFO.address}</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-primary mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="font-bold">{CONTACT_INFO.phone}</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="flex-1 font-bold">After Hours: <a href={`tel:${CONTACT_INFO.afterHoursPhone}`} className="hover:text-primary transition-colors block sm:inline font-bold">{CONTACT_INFO.afterHoursPhone}</a></span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span className="font-bold">prestigeautos@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-black font-display text-xl text-dark-text mb-4 pb-2 border-b-2 border-secondary">Hours</h4>
                        <ul className="space-y-3 text-light-text">
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span className="flex-1 font-bold">{HOURS.weekday}</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span className="flex-1 font-bold">{HOURS.weekend}</span>
                            </li>
                            <li className="mt-4 pt-4 border-t-2 border-primary text-sm">
                                <p className="text-gray-700 font-bold">{HOURS.holidays}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t-2 border-primary text-center text-gray-700 text-sm">
                    <p className="font-black">&copy; {new Date().getFullYear()} Prestige Quality Automotive LLC. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;