import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import Card from '../../components/Card';
import Featured from '../../components/Featured';
import { features } from '../../data/data';

const Staff = () => {
    const { staff } = features;
    return (
        <main className="p-5 md:px-8 lg:px-12 xl:p-0 overflow-x-hidden">
            <Featured title={staff.title} image={staff.image} />
            <section className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-center gap-8 ">
                <Card className="relative top-0 hover:md:-top-4 transition-all duration-100 w-[500px] h-[250px]">
                    <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                        <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                            <CheckBadgeIcon className="stroke-inherit" />
                        </div>

                        <h2 className="text-2xl font-medium">
                            On-Shore Staff Augmentation
                        </h2>
                        <p className=" text-slate-500 ">
                            Quickly fill the gap of skilled workforce with our
                            nearshore staff augmentation services.
                        </p>
                    </section>
                </Card>
                <Card className="relative top-0 hover:md:-top-4 transition-all duration-100 w-[500px] h-[250px]">
                    <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                        <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                            <CheckBadgeIcon className="stroke-inherit" />
                        </div>

                        <h2 className="text-2xl font-medium">
                            Off-Shore Staff Augmentation
                        </h2>
                        <p className=" text-slate-500 ">
                            Gain more control over software development and
                            extend technical team capabilities with our offshore
                            staff augmentation services.
                        </p>
                    </section>
                </Card>
            </section>
            <section className="max-w-[1200px] mx-auto py-24">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
                    3 Steps To Build Your Custom Dedicated Development Team
                </h2>
                <div className="grid gap-y-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-6">
                    <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                        <section className="h-full flex flex-col justify-between gap-8 p-6 rounded-lg shadow-lg bg-white ">
                            <div className="flex flex-col gap-6">
                                <div className="bg-sky-200/45 stroke-sky-500 w-fit p-2 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 stroke-inherit"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-3xl font-semibold">
                                        Choose Dedicated Developers
                                    </h3>
                                    <p className="sm:text-sm lg:text-base">
                                        Interview and shortlist candidates from
                                        our in-house tech pool and decide who
                                        joins your team.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </Card>
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
                                            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-3xl font-semibold">
                                        Integrate Team Into Your Projects
                                    </h3>
                                    <p className="sm:text-sm lg:text-base">
                                        Our developers have now become a part of
                                        your team. They work dedicatedly for
                                        you, and you can communicate with them
                                        directly.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </Card>
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
                                            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-3xl font-semibold">
                                        Scale On-Demand
                                    </h3>
                                    <p className="sm:text-sm lg:text-base">
                                        scale on-demand, grow your team during
                                        high-volume periods, and ramp down team
                                        size when needed
                                    </p>
                                </div>
                            </div>
                        </section>
                    </Card>
                </div>
            </section>
        </main>
    );
};

export default Staff;
