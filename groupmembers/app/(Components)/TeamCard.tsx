'use client';
import React from 'react';
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

type TeamCardProps = {
    name: string;
    title: string;
    imageUrl: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ name, title, imageUrl }) => {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            {/* Image with zoom effect on hover */}
            <div className="relative h-[28rem] overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={500}
                    height={384}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* Enhanced shining angle effect */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -left-full -top-full w-full h-full rotate-45
                                    bg-gradient-to-r from-transparent via-white/50 to-transparent
                                    transition-all duration-2000 group-hover:left-full group-hover:top-full
                                    opacity-70 group-hover:opacity-90"></div>
                </div>
            </div>

            {/* Info card with expanded width on hover */}
            <div className="pb-8 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%]
                           transition-all duration-500 group-hover:w-[95%] group-hover:bottom-0">
                <div className="bg-black/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-2xl">
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-xl font-bold text-white">{name}</h3>
                        <p className="text-sm text-gray-300 mb-3">{title}</p>

                        {/* Social icons with enhanced animation */}
                        <div className="flex space-x-5 opacity-0 max-h-0 group-hover:opacity-100
                                      group-hover:max-h-10 transition-all duration-500 delay-100">
                            <a href="#" className="text-red-500 hover:text-red-400 transform hover:-translate-y-1 transition">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="text-red-500 hover:text-red-400 transform hover:-translate-y-1 transition">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-red-500 hover:text-red-400 transform hover:-translate-y-1 transition">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;