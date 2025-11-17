"use client";

import Image from "next/image";
import { useState } from "react";

interface MemberData {
 // Or whatever the actual type of 'member' is
  name: string;
  role: string;
  img: string;
  // ... other properties
}

export default function OurTeamPage() {
  const team: MemberData[] = [];

  return (
    <div className="relative min-h-screen bg-gray-50 ">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/comingsoon.png"
          alt="Team background"
          fill
          className="object-cover opacity-20 transition-opacity duration-1000"
          priority
        />
      </div>

      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Our Team</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Meet the dedicated professionals behind{" "}
          <span className="font-semibold text-green-700">
            Muthuma International Agency
          </span>{" "}
          — committed to delivering trusted healthcare, pharmaceutical, and
          wellness solutions with excellence and compassion.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Separate component for smoother control
function TeamCard({ member }: { member: MemberData }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="relative w-full h-64">
        {!loaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400">
            Loading...
          </div>
        )}
        <Image
          src={member.img}
          alt={member.name}
          fill
          className={`object-cover transition-all duration-700 ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
        <p className="text-sm text-green-600">{member.role}</p>
      </div>
    </div>
  );
}

