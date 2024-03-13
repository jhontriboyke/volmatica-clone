import {
    ArrowTrendingUpIcon,
    ArrowsPointingOutIcon,
    ChartBarIcon,
    ChartPieIcon,
    ChevronRightIcon,
    DocumentChartBarIcon,
    PresentationChartBarIcon,
} from '@heroicons/react/24/outline';
import { azureTechs, features } from '../../data/data';
import Card from '../../components/Card';

const Analytic = () => {
    const { analytic } = features;
    return (
        <main className="p-5 md:px-8 lg:px-12 xl:p-0">
            <div className="max-w-[1200px] mx-auto py-4 lg:py-14">
                <div className="p-5 flex flex-col md:flex-row justify-center items-center md:gap-10 lg:gap-20">
                    <div className="flex flex-col gap-5">
                        <h1
                            className={`text-xl font-bold md:text-5xl lg:text-6xl
                        `}
                        >
                            {analytic.title}
                        </h1>
                        <div className="p-4 border border-slate-400/40 rounded-lg">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-row items-center gap-3 border border-sky-600 max-w-fit p-1 px-2 bg-sky-400/20 text-sky-600">
                                    <ChevronRightIcon className="w-4 h-4" />
                                    <span className="text-sm md:text-base">
                                        Azure Data Analytics
                                    </span>
                                </div>
                                <p className="text-sm md:text-base">
                                    Microsoft Azure empowered Big Data Solutions
                                    for Implementing Data Lake Strategy and
                                    real-time data integration and management,
                                    both on-premises and in the cloud.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-order-1 md:order-1 w-[300px] md:min-w-[40%] lg:min-w-[40%]">
                        <img src={analytic.image} alt="hero-image" />
                    </div>
                </div>
            </div>
            <div className="bg-slate-50 py-8 lg:py-16 flex flex-col gap-8">
                <h2 className="text-2xl lg:text-4xl text-center font-bold">
                    Azure Data Analytics Services
                </h2>
                <section className="max-w-[1200px] gap-6 mx-auto grid md:grid-cols-2 xl:grid-cols-3 md:gap-4">
                    <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                        <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                            <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                                <DocumentChartBarIcon className="stroke-inherit" />
                            </div>
                            <h2 className="text-lg lg:text-2xl font-bold">
                                Data And Analytics Strategy
                            </h2>
                            <p className="text-sm md:text-base text-slate-500 ">
                                Plan your Azure data analytics architecture with
                                confidence and define the path to become more
                                informed.
                            </p>
                        </section>
                    </Card>
                    <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                        <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                            <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                                <ArrowsPointingOutIcon className="stroke-inherit" />
                            </div>
                            <h2 className="text-lg lg:text-2xl font-bold">
                                Data Discovery and Orchestration
                            </h2>
                            <p className="text-sm md:text-base text-slate-500 ">
                                Eliminate silos and set up a unified repository
                                with analysis-ready input and standardized
                                processing.
                            </p>
                        </section>
                    </Card>
                    <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                        <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                            <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                                <ArrowTrendingUpIcon className="stroke-inherit" />
                            </div>
                            <h2 className="text-lg lg:text-2xl font-bold">
                                Migration and Integration
                            </h2>
                            <p className="text-sm md:text-base text-slate-500 ">
                                We help you securely move to the cloud and
                                consolidate your workflows to achieve maximum
                                consistency.
                            </p>
                        </section>
                    </Card>
                    <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                        <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                            <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                                <PresentationChartBarIcon className="stroke-inherit" />
                            </div>
                            <h2 className="text-lg lg:text-2xl font-bold">
                                Data Lake Analytics in Azure
                            </h2>
                            <p className="text-sm md:text-base text-slate-500 ">
                                Make Big data look simple and transform complex
                                information into actionable guidelines.
                            </p>
                        </section>
                    </Card>
                    <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                        <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                            <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                                <ChartBarIcon className="stroke-inherit" />
                            </div>
                            <h2 className="text-lg lg:text-2xl font-bold">
                                Business Intelligence
                            </h2>
                            <p className="text-sm md:text-base text-slate-500 ">
                                Our BI developers help you stay ahead of the
                                competition and grow safely into the future.
                            </p>
                        </section>
                    </Card>
                    <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                        <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                            <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                                <ChartPieIcon className="stroke-inherit" />
                            </div>
                            <h2 className="text-lg lg:text-2xl font-bold">
                                Visualization and Reporting
                            </h2>
                            <p className="text-sm md:text-base text-slate-500 ">
                                Let your data tell stories and emphasize the
                                message through dynamic and business-led
                                visuals.
                            </p>
                        </section>
                    </Card>
                </section>
            </div>
            <div className="py-8 lg:py-16 flex flex-col gap-8">
                <h2 className="text-2xl lg:text-4xl text-center font-bold flex flex-col gap-1">
                    <span>We Provide Expertise In Following</span>
                    <span>Azure Data Technology</span>
                </h2>
                <section className="flex flex-row max-w-[400px] mx-auto flex-wrap gap-4 justify-center">
                    {azureTechs.map((tech, index) => (
                        <div
                            key={index}
                            className="cursor-pointer md:relative top-0 hover:-top-2 transition-all duration-100 w-20 h-20 p-2 bg-sky-400/20 rounded-md grid place-items-center"
                        >
                            <img src={tech} alt="azure techs" />
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default Analytic;
