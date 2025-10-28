import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footer7 } from '../components/ui/footer-7';

const FooterDemoPage: React.FC = () => {
    return (
        <motion.div
            className="bg-white text-dark-text min-h-screen flex flex-col"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <div className="container mx-auto px-4 sm:px-6 py-8 flex-grow">
                <div className="mb-8">
                    <Link to="/" className="text-primary hover:underline">&larr; Back to Home</Link>
                </div>
                
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-display mb-4">Footer Component Demo</h1>
                    <p className="text-light-text max-w-2xl mx-auto">
                        This page demonstrates the new Footer7 component from the shadcn UI library integration.
                    </p>
                </div>

                <div className="bg-light p-8 rounded-lg mb-12">
                    <h2 className="text-2xl font-bold font-display mb-4">Features</h2>
                    <ul className="list-disc pl-6 space-y-2 text-light-text">
                        <li>Shadcn UI component structure</li>
                        <li>Responsive design with Tailwind CSS</li>
                        <li>TypeScript type safety</li>
                        <li>Social media integration with react-icons</li>
                        <li>Customizable sections and links</li>
                    </ul>
                </div>

                <div className="bg-light p-8 rounded-lg">
                    <h2 className="text-2xl font-bold font-display mb-4">Implementation Notes</h2>
                    <div className="space-y-4 text-light-text">
                        <p>
                            The Footer7 component has been integrated into the project following shadcn conventions:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Created <code className="bg-white px-2 py-1 rounded">components/ui</code> directory</li>
                            <li>Installed <code className="bg-white px-2 py-1 rounded">react-icons</code> dependency</li>
                            <li>Customized content to match PQ Autos branding</li>
                            <li>Integrated with existing Tailwind configuration</li>
                        </ul>
                        <p className="mt-4">
                            To use this component in your application, simply import it:
                        </p>
                        <pre className="bg-white p-4 rounded overflow-x-auto">
                            {`import { Footer7 } from '@/components/ui/footer-7';

const MyComponent = () => {
  return <Footer7 />;
};`}
                        </pre>
                    </div>
                </div>
            </div>
            
            {/* Demo of the new Footer7 component */}
            <Footer7 />
        </motion.div>
    );
};

export default FooterDemoPage;