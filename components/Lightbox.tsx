
import React, { useEffect, useState } from 'react';
// Fix: Import Variants type from framer-motion to correctly type animation variants.
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface LightboxProps {
    images: { src: string; alt: string }[];
    selectedIndex: number | null;
    onClose: () => void;
    // Fix: Add onNavigate prop to allow changing the selected image from within the lightbox.
    onNavigate: (newIndex: number) => void;
}

// Fix: Explicitly type backdropVariants with Variants for consistency and type safety.
const backdropVariants: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

// Fix: Explicitly type imageVariants with Variants to resolve TypeScript error with incompatible 'ease' property type.
const imageVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
        scale: 0.9
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: 'easeOut'
        }
    },
    exit: (direction: number) => ({
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
        scale: 0.9,
        transition: {
            duration: 0.2,
            ease: 'easeIn'
        }
    }),
};

const Lightbox: React.FC<LightboxProps> = ({ images, selectedIndex, onClose, onNavigate }) => {
    const [[page, direction], setPage] = useState([0, 0]);

    useEffect(() => {
        if (selectedIndex !== null) {
            setPage(([prevPage, _]) => [selectedIndex, selectedIndex > prevPage ? 1 : -1]);
        }
    }, [selectedIndex]);

    // Fix: Implement navigation logic to update the parent component's state.
    const navigate = (newDirection: number) => {
        if (selectedIndex === null) return;
        const newIndex = (selectedIndex + newDirection + images.length) % images.length;
        onNavigate(newIndex);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') navigate(1);
        if (e.key === 'ArrowLeft') navigate(-1);
    };

    useEffect(() => {
        if (selectedIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, handleKeyDown]);
    
    if (selectedIndex === null) return null;

    const currentImage = images[selectedIndex];

    return (
        <AnimatePresence initial={false} custom={direction}>
            {selectedIndex !== null && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-80 z-[100] flex items-center justify-center"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button onClick={onClose} className="absolute top-4 right-4 text-white z-[102] p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors" aria-label="Close lightbox">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                    {/* Prev Button */}
                    <button onClick={() => navigate(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-[102] p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors" aria-label="Previous image">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>

                    {/* Next Button */}
                    <button onClick={() => navigate(1)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-[102] p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors" aria-label="Next image">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>

                    <div className="relative w-full h-full flex items-center justify-center p-8 sm:p-16" onClick={(e) => e.stopPropagation()}>
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.img
                                key={selectedIndex}
                                src={currentImage.src}
                                alt={currentImage.alt}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                custom={direction}
                                variants={imageVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                            />
                        </AnimatePresence>
                    </div>

                    {/* Image Caption */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black/50 px-4 py-2 rounded-md text-sm sm:text-base">
                        <p>{currentImage.alt}</p>
                        <p className="font-bold mt-1">{selectedIndex + 1} / {images.length}</p>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
