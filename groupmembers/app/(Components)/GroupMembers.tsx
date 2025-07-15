'use client';
import React from 'react';
import TeamCard from "@/app/(Components)/TeamCard";
import { motion } from 'framer-motion';

function GroupMembers() {
    const teamMembers = [
        {
            name: 'Sophia Bennett',
            title: 'Hacking Specialist',
            imageUrl: "/1.JPG",
            accentColor: "bg-gradient-to-br from-pink-500 to-purple-600"
        },
        {
            name: 'Darrell Steward',
            title: 'Attack Specialist',
            imageUrl: "/2.JPG",
            accentColor: "bg-gradient-to-br from-red-500 to-orange-500"
        },
        {
            name: 'Ava Mitchell',
            title: 'Cyber Expert',
            imageUrl: "/3.JPG",
            accentColor: "bg-gradient-to-br from-blue-400 to-cyan-500"
        },
        {
            name: 'Ethan Carter',
            title: 'Penetration Tester',
            imageUrl: "/4.JPG",
            accentColor: "bg-gradient-to-br from-emerald-400 to-teal-600"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section className="relative py-20 px-4 sm:px-8 lg:px-16 text-white min-h-screen overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900 opacity-95 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white"
                            style={{
                                width: Math.random() * 10 + 2 + 'px',
                                height: Math.random() * 10 + 2 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                                opacity: Math.random() * 0.5 + 0.1,
                                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                                animationDelay: Math.random() * 5 + 's'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                        Our <span className="text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-indigo-500 text-transparent bg-clip-text">Cyber Team</span>
                    </h2>
                    <p className="mt-2 text-lg text-gray-300 max-w-2xl mx-auto">
                        Meet our elite cybersecurity professionals dedicated to keeping your digital assets secure
                    </p>

                    <div className="mt-8 flex justify-center">
                        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-full"></div>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="relative group"
                        >
                            <div className={`absolute -inset-0.5 ${member.accentColor} rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300`}></div>
                            <div className="relative h-full bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 group-hover:border-gray-600 transition-all duration-300">
                                <TeamCard
                                    name={member.name}
                                    title={member.title}
                                    imageUrl={member.imageUrl}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -left-20 -top-20 w-64 h-64 bg-red-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
            </div>

            {/* Custom styles for animations */}
            <style jsx global>{`
              @keyframes float {
                0% { transform: translateY(0) translateX(0); }
                50% { transform: translateY(-100px) translateX(20px); }
                100% { transform: translateY(0) translateX(0); }
              }
              .text-gradient {
                background-size: 200% auto;
                animation: gradient-shift 3s ease infinite;
              }
              @keyframes gradient-shift {
                0% { background-position: 0% center; }
                50% { background-position: 100% center; }
                100% { background-position: 0% center; }
              }
            `}</style>
        </section>
    );
}

export default GroupMembers;