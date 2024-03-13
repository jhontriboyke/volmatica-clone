import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { features } from '../../data/data';

const MVP = () => {
    const { mvp1, mvp2 } = features;
    return (
        <main className="p-5 md:px-8 lg:px-12 xl:p-0">
            <div className="max-w-[1200px] mx-auto py-4 lg:py-14">
                <div className="p-5 flex flex-col md:flex-row justify-center items-center md:gap-10 lg:gap-20">
                    <div className="flex flex-col gap-5">
                        <h1
                            className={`text-xl font-bold md:text-5xl lg:text-6xl
                        `}
                        >
                            {mvp1.title}
                        </h1>
                        <div className="p-4 border border-slate-400/40 rounded-lg">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-row items-center gap-3 border border-sky-600 max-w-fit p-1 px-2 bg-sky-400/20 text-sky-600">
                                    <ChevronRightIcon className="w-4 h-4" />
                                    <span className="text-sm md:text-base">
                                        Minimum Viable Product
                                    </span>
                                </div>
                                <p className="text-sm md:text-base">
                                    Startups face numerous challenges when
                                    building Minimum Viable Products (MVPs),
                                    such as limited resources, tight timelines,
                                    unclear requirements, and the need for
                                    technical expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-order-1 md:order-1 w-[300px] md:min-w-[40%] lg:min-w-[40%]">
                        <img src={mvp1.image} alt="hero-image" />
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto py-4 lg:py-14">
                <div className="p-5 flex flex-col md:flex-row justify-center items-center md:gap-10 lg:gap-20">
                    <div className="flex flex-col gap-5">
                        <h1
                            className={`text-xl font-bold md:text-3xl lg:text-4xl
                        `}
                        >
                            {mvp2.title}
                        </h1>

                        <p className="text-sm md:text-base lg:text-lg text-slate-500/90">
                            {mvp2.desc}
                        </p>
                    </div>
                    <div className="-order-1  w-[300px] md:min-w-[40%] lg:min-w-[40%]">
                        <img src={mvp2.image} alt="hero-image" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MVP;
