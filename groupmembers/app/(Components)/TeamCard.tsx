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
            <div className="relative h-96 overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={500}
                    height={384}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />

                {/* Shining angle effect on hover */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -left-full -top-full w-64 h-64 rotate-45 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-[150%] group-hover:top-[150%]"></div>
                </div>
            </div>

            {/* Info card with social icons on hover */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] transition-all duration-500 group-hover:w-full group-hover:bottom-0">
                <div className="bg-black/80 backdrop-blur-sm px-6 py-4 rounded-t-xl shadow-lg">
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-lg font-bold text-white">{name}</h3>
                        <p className="text-sm text-gray-300 mb-2">{title}</p>

                        {/* Social icons that appear on hover */}
                        <div className="flex space-x-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-10 transition-all duration-300">
                            <a href="#" className="text-red-500 hover:text-red-400">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="#" className="text-red-500 hover:text-red-400">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" className="text-red-500 hover:text-red-400">
                                <FaInstagram size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;