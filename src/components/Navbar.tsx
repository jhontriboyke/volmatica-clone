import { Bars3Icon } from '@heroicons/react/16/solid';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);
    return (
        <nav className="p-5 shadow-lg sticky top-0 z-10 bg-white border-b border-slate-200">
            <div className="flex flex-row justify-between items-center">
                <div>
                    <div className="h-8">
                        <img
                            className="h-full"
                            src="\illustration\logo.png"
                            alt="Logo"
                        />
                    </div>
                </div>
                <div></div>
                <div>
                    <div className="flex flex-row items-center gap-3">
                        <button
                            className="border border-sky-300 text-sky-400 hover:bg-sky-400 hover:text-white transition-colors duration-200 rounded-xl p-2"
                            type="button"
                        >
                            Contact Us
                        </button>
                        <button
                            className="border border-sky-300 fill-sky-400 hover:bg-sky-400 hover:fill-white transition-colors duration-200  rounded-lg p-2"
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
