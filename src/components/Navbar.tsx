import { Bars3Icon } from '@heroicons/react/16/solid';
import Sidebar from './Sidebar';
import { useState } from 'react';
import {
    ChevronDownIcon,
    ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);
    const [servicesShow, setServicesShow] = useState(false);
    return (
        <nav className="p-5 shadow-lg sticky top-0 z-10 bg-white border-b border-slate-200">
            <div className="flex flex-row justify-between items-center max-w-[1200px] mx-auto">
                <div>
                    <div className="h-8">
                        <img
                            className="h-full"
                            src="\illustration\logo.png"
                            alt="Logo"
                        />
                    </div>
                </div>
                <div className="hidden xl:block">
                    <ul className="flex flex-row items-center gap-16">
                        <li>
                            <Link
                                className="hover:text-sky-400/80 transition-color duration-200"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="relative">
                            <div
                                onClick={() => setServicesShow(!servicesShow)}
                                className=" group flex flex-row items-center gap-2 cursor-pointer"
                            >
                                <span className=" group-hover:text-sky-400/80 transition-colors duration-200">
                                    Service
                                </span>{' '}
                                <ChevronDownIcon className="w-4 h-4 group-hover:stroke-sky-400/80 transition-colors duration-200" />
                            </div>

                            {servicesShow && (
                                <div className="absolute w-[250px] bg-white bottom-[-1200%] left-[-100%] shadow-md border border-slate-400/20 rounded-md">
                                    <Link
                                        to={'/webapp'}
                                        className="flex flex-row items-center gap-3 p-4 group hover:bg-sky-500/60 stroke-white border-b border-slate-200 "
                                    >
                                        <ComputerDesktopIcon className="w-6 h-6 stroke-sky-400/80 group-hover:stroke-inherit" />
                                        <span className="group-hover:text-white">
                                            Web Apps
                                        </span>
                                    </Link>
                                    <Link
                                        to={'/webapp'}
                                        className="flex flex-row items-center gap-3 p-4 group hover:bg-sky-500/60 stroke-white border-b border-slate-200 "
                                    >
                                        <ComputerDesktopIcon className="w-6 h-6 stroke-sky-400/80 group-hover:stroke-inherit" />
                                        <span className="group-hover:text-white">
                                            Web Apps
                                        </span>
                                    </Link>
                                    <Link
                                        to={'/webapp'}
                                        className="flex flex-row items-center gap-3 p-4 group hover:bg-sky-500/60 stroke-white border-b border-slate-200 "
                                    >
                                        <ComputerDesktopIcon className="w-6 h-6 stroke-sky-400/80 group-hover:stroke-inherit" />
                                        <span className="group-hover:text-white">
                                            Web Apps
                                        </span>
                                    </Link>
                                    <Link
                                        to={'/webapp'}
                                        className="flex flex-row items-center gap-3 p-4 group hover:bg-sky-500/60 stroke-white border-b border-slate-200 "
                                    >
                                        <ComputerDesktopIcon className="w-6 h-6 stroke-sky-400/80 group-hover:stroke-inherit" />
                                        <span className="group-hover:text-white">
                                            Web Apps
                                        </span>
                                    </Link>
                                    <Link
                                        to={'/webapp'}
                                        className="flex flex-row items-center gap-3 p-4 group hover:bg-sky-500/60 stroke-white  "
                                    >
                                        <ComputerDesktopIcon className="w-6 h-6 stroke-sky-400/80 group-hover:stroke-inherit" />
                                        <span className="group-hover:text-white">
                                            Web Apps
                                        </span>
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link
                                className="hover:text-sky-400/80 transition-color duration-200"
                                to={'/about'}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex flex-row items-center gap-3">
                        <button
                            className="border border-sky-300 text-sky-400 hover:bg-sky-400 hover:text-white transition-colors duration-200 rounded-xl p-2"
                            type="button"
                        >
                            Contact Us
                        </button>
                        <button
                            className="xl:hidden border border-sky-300 fill-sky-400 hover:bg-sky-400 hover:fill-white transition-colors duration-200  rounded-lg p-2"
                            type="button"
                            title="Navbar Menu"
                            onClick={() => setIsShow(!isShow)}
                        >
                            <Bars3Icon className="w-5 h-5 fill-inherit" />
                        </button>
                    </div>
                </div>
                <Sidebar isShow={isShow} setIsShow={setIsShow} />
            </div>
        </nav>
    );
};

export default Navbar;
