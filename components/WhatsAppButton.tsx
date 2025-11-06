"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
    return (
        <Link
        href="https://wa.me/254715907311"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
        >
            <FaWhatsapp size={28} />
        </Link>
    );
}