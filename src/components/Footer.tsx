import { Link } from 'react-router-dom';
import EmailForm from './EmailForm';
import Button from './Button';
import { MapPinIcon } from '@heroicons/react/24/outline';
import ContactForm from './ContactForm';

const Footer = () => {
    return (
        <footer>
            <EmailForm />
            <ContactForm />
            <section className="px-5 pt-10 pb-4 lg:px-0">
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between xl:max-w-[1200px] lg:mx-auto">
                    <div className="flex flex-col gap-3 lg:w-[500px]">
                        <img
                            className="max-w-40"
                            src="\illustration\logo.png"
                            alt="logo"
                        />
                        <p>
                            VOLMATICA specializes in creating top-tier web and
                            mobile solutions, data warehouses, ETL solutions,
                            and enhancing user interface and experience.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-medium">Sitemap</h4>
                        <ul className="flex flex-col gap-3 my-4">
                            <li>
                                <Link to={'/'}>Product</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Data Analysis</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Services</Link>
                            </li>
                            <li>
                                <Link to={'/'}>About Us</Link>
                            </li>
                        </ul>
                        <Button type="button">Get Started</Button>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-2xl font-medium">Get In Touch</h4>
                        <div className="flex flex-row items-center gap-3">
                            <MapPinIcon className="w-6 h-6 stroke-slate-400" />
                            <span>33 S Wood Ave STE 600 Iselin NJ 08830</span>
                        </div>
                        <div className="cursor-pointer flex flex-row items-center gap-3 p-3 border border-slate-400 rounded-lg max-w-fit top-0 hover:-top-[2px] transition-all duration-100 relative">
                            <div className="w-6 h-6 bg-slate-200" />
                            <span className="text-slate-400">
                                Follow us on LinkedIn
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full flex flex-row justify-center xl:justify-between items-center max-w-[1200px] mx-auto">
                <p className="py-4 text-center text-slate-400">
                    © 2023 Volamtica All Rights Reserved
                </p>
                <div className="hidden text-xs xl:flex flex-row items-center gap-4 text-slate-400">
                    <Link className="hover:underline" to={'/about'}>
                        About Us
                    </Link>
                    <Link className="hover:underline" to={'/'}>
                        Terms & Conditions
                    </Link>
                    <Link className="hover:underline" to={'/'}>
                        Privacy Policy
                    </Link>
                    <Link className="hover:underline" to={'/'}>
                        Cookie Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
