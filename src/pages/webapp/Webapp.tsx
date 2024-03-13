import {
    ComputerDesktopIcon,
    DocumentArrowDownIcon,
    PresentationChartBarIcon,
    Square2StackIcon,
} from '@heroicons/react/24/outline';
import Card from '../../components/Card';
import Featured from '../../components/Featured';
import { techsList } from '../../data/data';
import { features } from '../../data/data';

const Webapp = () => {
    const { webapp } = features;
    return (
        <main className="p-5 md:px-8 lg:px-12 xl:p-0">
            <Featured
                title={webapp.title}
                image={webapp.image}
                desc={webapp.desc}
            />
            <section className="max-w-[1200px] gap-6 mx-auto grid md:grid-cols-2 xl:grid-cols-4 md:gap-4">
                <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                    <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                        <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                            <ComputerDesktopIcon className="stroke-inherit" />
                        </div>

                        <h2 className="text-2xl font-medium">
                            Mobile & Web App Develop
                        </h2>
                        <p className=" text-slate-500 ">
                            Quickly capitalize on opportunities with a strategic
                            approach to finding the perfect balance between
                            building the right product and building the product
                            right.
                        </p>
                    </section>
                </Card>
                <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                    <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                        <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                            <Square2StackIcon className="stroke-inherit" />
                        </div>

                        <h2 className="text-2xl font-medium">
                            UI/UX Design & Customer Experience
                        </h2>
                        <p className=" text-slate-500 ">
                            Boost customer loyalty with a user-centric,
                            data-backed process to create digital experiences
                            that drive adoption, engagement, and transactions.
                        </p>
                    </section>
                </Card>
                <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                    <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                        <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                            <DocumentArrowDownIcon className="stroke-inherit" />
                        </div>

                        <h2 className="text-2xl font-medium">
                            Digital Transformation & Modernization
                        </h2>
                        <p className=" text-slate-500 ">
                            Leverage the power of emerging technologies and
                            cloud-native architectures to evolve faster, scale
                            easier, and unlock value.
                        </p>
                    </section>
                </Card>
                <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                    <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                        <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                            <PresentationChartBarIcon className="stroke-inherit" />
                        </div>

                        <h2 className="text-2xl font-medium">
                            Data Insights, Machine Learning & AI
                        </h2>
                        <p className=" text-slate-500 ">
                            Gain actionable insights from your data and improve
                            decision-making capabilities with analytics that are
                            intelligent, accurate, and available in real-time.
                        </p>
                    </section>
                </Card>
            </section>
            <section className="max-w-[1200px] mx-auto py-24">
                <h2 className="text-5xl font-bold text-center mb-16">
                    Technologies
                </h2>
                <div className="grid gap-y-4 sm:grid-cols-2 sm:gap-4 md:gap-6">
                    {techsList
                        .filter((item) => item.name !== 'Azure Data')
                        .map(({ name, images, desc }) => (
                            <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                                <section className="h-full flex flex-col justify-between gap-8 p-6 rounded-lg shadow-lg bg-white ">
                                    <div className="flex flex-col gap-6">
                                        <div className="bg-sky-200/45 stroke-sky-500 w-fit p-2 rounded-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 stroke-inherit"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-3xl font-semibold">
                                                {name}
                                            </h3>
                                            <p className="sm:text-sm lg:text-base">
                                                {desc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-6 auto-rows-[60px] gap-4">
                                        {images.map((image) => (
                                            <div className="bg-sky-400/20 grid items-center rounded-md">
                                                <img
                                                    className="mx-auto w-8"
                                                    src={image}
                                                    alt="icon"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </Card>
                        ))}
                </div>
            </section>
        </main>
    );
};

export default Webapp;
