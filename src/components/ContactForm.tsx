import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Button from './Button';

const ContactForm = () => {
    return (
        <section className="p-5 md:py-8 md:px-16 lg:p-24 bg-gradient-to-br from-sky-400 to-blue-600">
            <div className="flex flex-col gap-5 lg:flex-row">
                <div className="flex flex-col gap-6 lg:justify-between">
                    <header className="text-white flex flex-col gap-2">
                        <h2 className="flex flex-col text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                            <span>Get In Touch</span>
                            <span>With Us</span>
                            <span>We Answer You</span>
                        </h2>
                        <p className="text-sm md:text-base">
                            About our services and how we can help you to build
                            the software you need to succeed.
                        </p>
                    </header>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex flex-row items-center gap-3">
                            <div className="bg-white w-10 h-10 grid items-center p-2 rounded-lg">
                                <PhoneIcon className="stroke-sky-400/80" />
                            </div>
                            <span className="text-white text-base">
                                +123 4567 890
                            </span>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <div className="bg-white w-10 h-10 grid items-center p-2 rounded-lg">
                                <EnvelopeIcon className="stroke-sky-400/80" />
                            </div>
                            <span className="text-white text-base">
                                info@example.com
                            </span>
                        </div>
                    </div>
                </div>
                <section>
                    <form className="flex flex-col gap-3 lg:gap-6">
                        <div className="grid gap-3 md:grid-cols-2">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your name"
                                className="w-full p-2 px-4 rounded-lg outline-none"
                            />
                            <input
                                type="text"
                                name="address"
                                id="address"
                                placeholder="Your address"
                                className="w-full p-2 px-4 rounded-lg outline-none"
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email"
                            className="w-full p-2 px-4 rounded-lg outline-none"
                        />
                        <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={6}
                            placeholder="Type Your Message Here"
                            className="w-full p-2 px-4 rounded-lg outline-none"
                        ></textarea>
                        <div className="flex flex-row items-center gap-3">
                            <div className="flex items-center">
                                <input
                                    id="link-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="link-checkbox"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    I agree with the terms and conditions.
                                </label>
                            </div>
                        </div>
                        <Button type="submit">Get Started</Button>
                    </form>
                </section>
            </div>
        </section>
    );
};

export default ContactForm;
