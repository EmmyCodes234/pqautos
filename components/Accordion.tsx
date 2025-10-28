import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
    const contentId = useId();
    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center py-4 px-6 text-left text-lg sm:text-xl font-bold font-display text-dark-text hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-expanded={isOpen}
                aria-controls={contentId}
            >
                <span>{title}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDownIcon className="w-6 h-6 text-primary" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={contentId}
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="py-4 px-6 text-light-text text-sm sm:text-base bg-white">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface AccordionProps {
    children: React.ReactElement<AccordionItemProps>[];
    defaultIndex?: number;
}

export const Accordion: React.FC<AccordionProps> = ({ children, defaultIndex = -1 }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultIndex > -1 ? defaultIndex : null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-light rounded-lg shadow-md overflow-hidden">
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement<AccordionItemProps>(child)) {
                    return React.cloneElement(child, {
                        isOpen: openIndex === index,
                        onClick: () => handleClick(index),
                    });
                }
                return child;
            })}
        </div>
    );
};