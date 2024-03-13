import Button from './Button';

const EmailForm = () => {
    return (
        <section className="bg-slate-100 p-5 py-8 md:p-12">
            <div className="flex flex-col gap-6">
                <header className="text-center flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold flex flex-col">
                        <span>Contact Us</span>
                        <span>Today To Learn More</span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-600">
                        About our services and how we can help you to build the
                        software you need to succeed.
                    </p>
                </header>
                <form className="flex flex-col gap-4 bg-white p-4 rounded-3xl shadow-lg md:w-[500px] md:mx-auto">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your email"
                        className="outline-none focus-visible:border-none"
                    />
                    <Button type="submit">
                        <span>Get Started</span>
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default EmailForm;
