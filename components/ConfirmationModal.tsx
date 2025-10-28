
import React, { useId } from 'react';
// Fix: Import Variants type from framer-motion to correctly type animation variants.
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
}

const backdropVariants: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

// Fix: Explicitly type modalVariants with Variants to resolve TypeScript error with 'ease' properties.
const modalVariants: Variants = {
    hidden: {
        y: "-50px",
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        y: "0",
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        },
    },
    exit: {
        y: "50px",
        opacity: 0,
        scale: 0.95,
        transition: {
            duration: 0.15,
            ease: "easeIn"
        },
    },
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, title, message }) => {
    const titleId = useId();
    
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-md mx-auto"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={titleId}
                    >
                        <h3 id={titleId} className="text-xl sm:text-2xl font-bold font-display text-dark-text mb-4">{title}</h3>
                        <p className="text-light-text text-sm sm:text-base mb-6">{message}</p>
                        <div className="flex justify-end gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 text-sm sm:text-base rounded-md text-light-text bg-gray-200 hover:bg-gray-300 transition-colors"
                                onClick={onClose}
                            >
                                Cancel
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 text-sm sm:text-base rounded-md text-white bg-primary hover:bg-primary-hover transition-colors"
                                onClick={onConfirm}
                            >
                                Confirm
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ConfirmationModal;