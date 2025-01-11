"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Globe, Menu, User } from "lucide-react";
import Flag from "react-world-flags";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguageMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-16 relative">
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center">
                            <Image src="/CRUO_logo.png" alt="Logo" width={60} height={40} />
                        </a>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="/gorverment"
                            className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                        >
                            Government
                        </a>
                        <a
                            href="/manifest"
                            className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                        >
                            Manifest
                        </a>
                        <a
                            href="/portal"
                            className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                        >
                            Portal
                        </a>
                        <a
                            href="/login"
                            className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                        >
                            Accessibility
                        </a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button
                                className="text-gray-600 hover:text-blue-600"
                                onClick={toggleLanguageMenu}
                            >
                                <Globe className="h-5 w-5" />
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg w-48 z-50">
                                    <ul className="space-y-2 p-2">
                                        <li className="flex items-center text-black space-x-2 hover:bg-gray-100 px-2 py-1 rounded">
                                            <Flag code="US" className="w-6 h-6" />
                                            <span>English</span>
                                        </li>
                                        <li className="flex items-center text-black space-x-2 hover:bg-gray-100 px-2 py-1 rounded">
                                            <Flag code="BR" className="w-6 h-6" />
                                            <span>Português</span>
                                        </li>
                                        <li className="flex items-center text-black space-x-2 hover:bg-gray-100 px-2 py-1 rounded">
                                            <Flag code="ES" className="w-6 h-6" />
                                            <span>Español</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <button className="hidden md:flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            <User className="h-4 w-4" />
                            <span className="text-sm font-medium">Become a citizen</span>
                        </button>
                        <button className="md:hidden text-gray-600 hover:text-blue-600">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
