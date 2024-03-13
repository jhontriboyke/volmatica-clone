import {
    BuildingOffice2Icon,
    ChartBarIcon,
    ComputerDesktopIcon,
    CpuChipIcon,
    TrophyIcon,
} from '@heroicons/react/24/outline';
import Card from '../../components/Card';

const Home = () => {
    return (
        <main>
            <div className="h-screen w-full overflow-hidden relative xl:grid place-items-center">
                <div className="h-full w-full -z-10 absolute lg:top-[-20%]">
                    <img src="\illustration\illustration_1.png" alt="" />
                </div>
                <div className="p-5 flex flex-col gap-5 md:flex-row relative overflow-hidden md:p-12 lg:24 md:items-center">
                    <section className="flex flex-col gap-3">
                        <h1 className="flex flex-col text-3xl font-bold tracking-wide leading-7">
                            <span className="md:text-4xl lg:text-5xl drop-shadow-lg">
                                Empowering Startups
                            </span>
                            <span className="md:text-4xl lg:text-5xl drop-shadow-lg">
                                And SMBs With
                            </span>
                            <span className="hidden md:block md:text-4xl  text-sky-400 title-skew">
                                Tailored Software Solutions
                            </span>
                            <span className="title-skew md:text-4xl text-sky-400 drop-shadow-lg md:hidden">
                                Tailored Software
                            </span>
                            <span className="title-skew md:text-4xl text-sky-400 drop-shadow-lg md:hidden">
                                Solutions
                            </span>
                        </h1>
                        <p className="lg:w-[95%]">
                            We help you build the software you need to succeed,
                            on time and within budget. Expertise in MVPs, Web
                            Apps, and Advanced Data Analytics & AI Solutions for
                            Your Business Growth
                        </p>
                    </section>
                    <article className="shadow-md rounded-lg overflow-hidden flex flex-col md:w-[700px] lg:w-[900px]">
                        <section className="group p-4 last:border-none border-b border-slate-200 bg-white flex flex-row items-center gap-4 hover:bg-sky-400/80 transition-colors duration-200">
                            <div className="p-2 bg-sky-200/45 stroke-sky-500 min-w-10 h-10 rounded-lg group-hover:bg-white">
                                <ComputerDesktopIcon className="stroke-inherit" />
                            </div>
                            <div className="group-hover:text-white">
                                <h2 className="text-base font-medium">
                                    Web Apps
                                </h2>
                                <p className="text-xs font-normal text-slate-500 group-hover:text-white">
                                    We can build custom software solutions for
                                    any industry
                                </p>
                            </div>
                        </section>
                        <section className="group p-4 last:border-none border-b border-slate-200 bg-white flex flex-row items-center gap-4 hover:bg-sky-400/80 transition-colors duration-200">
                            <div className="p-2 bg-sky-200/45 stroke-sky-500 min-w-10 h-10 rounded-lg group-hover:bg-white">
                                <BuildingOffice2Icon className="stroke-inherit" />
                            </div>
                            <div className="group-hover:text-white">
                                <h2 className="text-base font-medium">
                                    Staff Augmentation
                                </h2>
                                <p className="text-xs font-normal text-slate-500 group-hover:text-white">
                                    We can build custom software solutions for
                                    any industry
                                </p>
                            </div>
                        </section>
                        <section className="group p-4 last:border-none border-b border-slate-200 bg-white flex flex-row items-center gap-4 hover:bg-sky-400/80 transition-colors duration-200">
                            <div className="p-2 bg-sky-200/45 stroke-sky-500 min-w-10 h-10 rounded-lg group-hover:bg-white">
                                <TrophyIcon className="stroke-inherit" />
                            </div>
                            <div className="group-hover:text-white">
                                <h2 className="text-base font-medium">MVP</h2>
                                <p className="text-xs font-normal text-slate-500 group-hover:text-white">
                                    We can build custom software solutions for
                                    any industry
                                </p>
                            </div>
                        </section>
                        <section className="group p-4 last:border-none border-b border-slate-200 bg-white flex flex-row items-center gap-4 hover:bg-sky-400/80 transition-colors duration-200">
                            <div className="p-2 bg-sky-200/45 stroke-sky-500 min-w-10 h-10 rounded-lg group-hover:bg-white">
                                <ChartBarIcon className="stroke-inherit" />
                            </div>
                            <div className="group-hover:text-white">
                                <h2 className="text-base font-medium">
                                    Data Analytics
                                </h2>
                                <p className="text-xs font-normal text-slate-500 group-hover:text-white">
                                    We can build custom software solutions for
                                    any industry
                                </p>
                            </div>
                        </section>
                        <section className="group p-4 last:border-none border-b border-slate-200 bg-white flex flex-row items-center gap-4 hover:bg-sky-400/80 transition-colors duration-200">
                            <div className="p-2 bg-sky-200/45 stroke-sky-500 min-w-10 h-10 rounded-lg group-hover:bg-white">
                                <CpuChipIcon className="stroke-inherit" />
                            </div>
                            <div className="group-hover:text-white">
                                <h2 className="text-base font-medium">
                                    Generative AI
                                </h2>
                                <p className="text-xs font-normal text-slate-500 group-hover:text-white">
                                    We can build custom software solutions for
                                    any industry
                                </p>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
            <div className="py-10 p-5 bg-slate-100 md:p-12 lg:p-24">
                <section className="flex flex-col gap-4 md:gap-10">
                    <div className="text-center flex flex-col gap-3">
                        <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl">
                            What We Do
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error eligendi similique voluptatibus iure
                            explicabo aliquid dicta?
                        </p>
                    </div>
                    <div className="grid gap-y-4 grid-cols-1 sm:gap-2 sm:grid-cols-6 md:gap-4 lg:gap-6">
                        <Card to={'/webapps'} className="sm:col-span-3">
                            <div className="w-12 h-12 p-2.5 bg-sky-200/45 rounded-lg stroke-sky-500 group-hover:bg-white">
                                <ComputerDesktopIcon className="stroke-inherit" />
                            </div>
                            <span className="text-2xl sm:text-xl lg:text-2xl font-semibold">
                                Web Apps
                            </span>
                            <p className="sm:text-sm md:text-base">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum rerum recusandae autem
                                deleniti quidem dolores modi repudiandae cumque
                                accusamus numquam natus explicabo ab voluptas
                                unde, commodi architecto quam sit saepe!
                            </p>
                        </Card>
                        <Card to={'/mvp'} className="sm:col-span-3">
                            <div className="w-12 h-12 p-2.5 bg-sky-200/45 rounded-lg stroke-sky-500 group-hover:bg-white">
                                <TrophyIcon className="stroke-inherit" />
                            </div>
                            <span className="text-2xl sm:text-xl lg:text-2xl font-semibold">
                                MVP Development
                            </span>
                            <p className="sm:text-sm md:text-base">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum rerum recusandae autem
                                deleniti quidem dolores modi repudiandae cumque
                                accusamus numquam natus explicabo ab voluptas
                                unde, commodi architecto quam sit saepe!
                            </p>
                        </Card>
                        <Card
                            to={'/ai'}
                            className="sm:col-span-2 md:col-span-2"
                        >
                            <div className="w-12 h-12 p-2.5 bg-sky-200/45 rounded-lg stroke-sky-500 group-hover:bg-white">
                                <CpuChipIcon className="stroke-inherit" />
                            </div>
                            <span className="text-2xl sm:text-xl lg:text-2xl font-semibold">
                                Generative AI
                            </span>
                            <p className="sm:text-sm md:text-base">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum rerum recusandae autem
                                deleniti quidem dolores modi repudiandae cumque
                                accusamus numquam natus explicabo ab voluptas
                                unde, commodi architecto quam sit saepe!
                            </p>
                        </Card>
                        <Card
                            to={'/staff'}
                            className="sm:col-span-2 md:col-span-2"
                        >
                            <div className="w-12 h-12 p-2.5 bg-sky-200/45 rounded-lg stroke-sky-500 group-hover:bg-white">
                                <BuildingOffice2Icon className="stroke-inherit" />
                            </div>
                            <span className="text-2xl sm:text-xl lg:text-2xl font-semibold">
                                Staff Augmentation
                            </span>
                            <p className="sm:text-sm md:text-base">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum rerum recusandae autem
                                deleniti quidem dolores modi repudiandae cumque
                                accusamus numquam natus explicabo ab voluptas
                                unde, commodi architecto quam sit saepe!
                            </p>
                        </Card>
                        <Card
                            to={'/analytics'}
                            className="sm:col-span-2 md:col-span-2"
                        >
                            <div className="w-12 h-12 p-2.5 bg-sky-200/45 rounded-lg stroke-sky-500 group-hover:bg-white">
                                <ChartBarIcon className="stroke-inherit" />
                            </div>
                            <span className="text-2xl sm:text-xl lg:text-2xl font-semibold">
                                Azure Data Analytics
                            </span>
                            <p className="sm:text-sm md:text-base">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum rerum recusandae autem
                                deleniti quidem dolores modi repudiandae cumque
                                accusamus numquam natus explicabo ab voluptas
                                unde, commodi architecto quam sit saepe!
                            </p>
                        </Card>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;
