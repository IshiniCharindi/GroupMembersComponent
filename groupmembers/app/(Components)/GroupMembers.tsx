import React from 'react';
import TeamCard from "@/app/(Components)/TeamCard";

function GroupMembers() {
    const teamMembers = [
        {
            name: 'Sophia Bennett',
            title: 'Hacking Specialist',
            imageUrl: "/1.JPG",
        },
        {
            name: 'Darrell Steward',
            title: 'Attack Specialist',
            imageUrl: "/2.JPG",
        },
        {
            name: 'Ava Mitchell',
            title: 'Cyber Expert',
            imageUrl: "/3.JPG",
        },
        {
            name: 'Ethan Carter',
            title: 'Penetration Tester',
            imageUrl: "/4.JPG",
        },
    ];
    return (
        <section className="bg-black py-20 px-4 sm:px-8 lg:px-16 text-white min-h-screen">
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-extrabold">
                    Our <span className="text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-indigo-500 text-transparent bg-clip-text">team</span>
                </h2>
                <p className="mt-2 text-gray-400">Meet our elite cybersecurity professionals</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {teamMembers.map((member, index) => (
                    <TeamCard
                        key={index}
                        name={member.name}
                        title={member.title}
                        imageUrl={member.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
}

export default GroupMembers;
