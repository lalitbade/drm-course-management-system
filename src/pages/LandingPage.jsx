import React from 'react';
import { Sparkles } from 'lucide-react';
import Reviews from '../components/Reviews';
import Details from '../components/Details';
import Courses from '../components/Courses';
import FAQSection from '../components/FaqPage';
import FooterLanding from '../components/FooterLanding';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSignIn = () => {
        navigate('/login'); // Redirect to the login page
    };
    const handlefree = () => {
        navigate('/courses'); // Redirect to the login page
    };

    const handleGetStarted = () => {
        navigate('/signup');
    };
    return (
        <div className="min-h-screen bg-[#0A0F1C] overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
                <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-gradient-to-r from-indigo-600 to-purple-600/30 rounded-full blur-[90px] animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gradient-to-r from-blue-600 to-teal-600/30 rounded-full blur-[90px] animate-pulse" />
            </div>

            <div className="relative z-10">
                {/* Navigation */}
                <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0F1C]/80 border-b border-white/10 shadow-md">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-white">
                                <img src="/Edu_Sphere_Logo__.svg" alt="EduSphere Logo" className="filter invert-100" />
                            </div>
                            <div className="hidden md:flex items-center gap-10">
                                <NavLink className="text-white/90 hover:text-white transition-all">Platform</NavLink>
                                <NavLink className="text-white/90 hover:text-white transition-all">Solutions</NavLink>
                                <NavLink className="text-white/90 hover:text-white transition-all">Resources</NavLink>
                                <NavLink className="text-white/90 hover:text-white transition-all">Pricing</NavLink>
                            </div>
                            <div className="flex items-center gap-6">
                                <button onClick={handleSignIn} className="px-6 py-3 text-sm text-white/80 hover:text-white transition-colors">
                                    Sign In
                                </button>
                                <button onClick={handleGetStarted} className="px-6 py-3 text-sm bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative pt-20 pb-48 text-center text-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto py-4">
                            <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
                                <Sparkles className="w-5 h-5 text-indigo-400 mr-3" />
                                <span className="text-sm font-semibold text-white">Revolutionizing Education</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                                The Future of Learning is Here
                            </h1>
                            <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto">
                                Empower your institution with our AI-powered course management platform designed to scale and revolutionize the learning experience.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <button onClick={handlefree} className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-medium text-base hover:opacity-90 transition-opacity">
                                    Start Free Trial
                                </button>
                                <button className="w-full sm:w-auto px-8 py-3 bg-white/10 rounded-lg font-medium text-base border border-white/20 hover:bg-white/20 transition-all">
                                    Watch Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Details />
            <Courses />
            <Reviews />
            <FAQSection />
            <FooterLanding /> {/* This is your footer */}
        </div>
    );
}

function NavLink({ children, className }) {
    return (
        <button className={`text-sm text-white/60 hover:text-white transition-colors ${className}`}>
            {children}
        </button>
    );
}

export default LandingPage;
