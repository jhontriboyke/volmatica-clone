import {
    BuildingOffice2Icon,
    ChartBarIcon,
    ChevronUpIcon,
    ComputerDesktopIcon,
    CpuChipIcon,
    TrophyIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type SidebarLinkProps = {
    children: React.ReactNode;
    to: string;
    className?: string;
};

const SidebarLink = ({ children, to, className }: SidebarLinkProps) => {
    return (
        <Link
            to={to}
            className={`flex flex-row items-center gap-4 transition-colors duration-100 ${className}`}
        >
            {children}
        </Link>
    );
};

type SidebarProps = {
    isShow: boolean;
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ isShow, setIsShow }: SidebarProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    return (
        <aside
            className={`fixed top-0 transition-all duration-200 left-[-100%] ${
                isShow && 'left-[0%]'
            } bg-white min-h-screen w-[250px] shadow-lg z-10`}
        >
            <nav className="p-5">
                <div className="flex flex-col gap-10 relative">
                    <div className="flex flex-row items-center justify-between">
                        <img
                            className="w-40"
                            src="\illustration\logo.png"
                            alt="logo"
                        />
                        <div
                            className="cursor-pointer"
                            onClick={() => setIsShow(false)}
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </div>
                    </div>

                    <div>
                        <Link to={'/'} className="w-full  block">
                            Home
                        </Link>
                    </div>
                    <div className="cursor-pointer flex flex-col gap-8  max-h-fit transition-all">
                        <div
                            onClick={(e) => handleClick(e)}
                            className="flex flex-row items-center justify-between"
                        >
                            <span>Services</span>
                            <ChevronUpIcon
                                className={`w-6 h-6 stroke-slate-400 transition-transform duration-200 ${
                                    isExpanded && 'rotate-180'
                                }`}
                            />
                        </div>
                        {isExpanded && (
                            <div className="flex flex-col gap-7">
                                <SidebarLink
                                    className="hover:text-sky-400/80 stroke-sky-400/80"
                                    to="/webapp"
                                >
                                    <ComputerDesktopIcon className="w-6 h-6" />
                                    <span>Web Apps</span>
                                </SidebarLink>
                                <SidebarLink
                                    className="hover:text-sky-400/80 stroke-sky-400/80"
                                    to="/staff"
                                >
                                    <BuildingOffice2Icon className="w-6 h-6" />
                                    <span>Staff Augmentation</span>
                                </SidebarLink>
                                <SidebarLink
                                    className="hover:text-sky-400/80 stroke-sky-400/80"
                                    to="/mvp"
                                >
                                    <TrophyIcon className="w-6 h-6" />
                                    <span>MVP</span>
                                </SidebarLink>
                                <SidebarLink
                                    className="hover:text-sky-400/80 stroke-sky-400/80"
                                    to="/data"
                                >
                                    <ChartBarIcon className="w-6 h-6" />
                                    <span>Data Analytics</span>
                                </SidebarLink>
                                <SidebarLink
                                    className="hover:text-sky-400/80 stroke-sky-400/80"
                                    to="/ai"
                                >
                                    <CpuChipIcon className="w-6 h-6" />
                                    <span>Generative AI</span>
                                </SidebarLink>
                            </div>
                        )}
                    </div>
                    <div>
                        <Link to={'/'} className="w-full  block">
                            About
                        </Link>
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
