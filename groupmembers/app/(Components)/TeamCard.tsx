// components/Team/TeamCard.tsx

import React from 'react';

type TeamCardProps = {
    name: string;
    title: string;
    imageUrl: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ name, title, imageUrl }) => {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-xl group transform transition duration-300 hover:scale-105">
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-96 object-cover transition-all duration-500 group-hover:blur-sm group-hover:brightness-75"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-md text-center text-white w-[90%] group-hover:bg-white/20 transition duration-300">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm">{title}</p>
            </div>
        </div>
    );
};

export default TeamCard;
