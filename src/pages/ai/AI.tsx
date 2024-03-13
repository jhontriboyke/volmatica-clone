import {
    AdjustmentsHorizontalIcon,
    CodeBracketSquareIcon,
    CpuChipIcon,
    LinkIcon,
} from '@heroicons/react/24/outline';
import { features } from '../../data/data';
import Card from '../../components/Card';
import Featured from '../../components/Featured';

const AI = () => {
    const { ai1, ai2 } = features;
    return (
        <main className="p-5 md:px-8 lg:px-12 xl:p-0">
            <div className="max-w-[1200px] mx-auto py-4 lg:py-14">
                <div className="p-5 flex flex-col md:flex-row justify-center items-center md:gap-10 lg:gap-20">
                    <div className="flex flex-col gap-5">
                        <h1
                            className={`text-xl font-bold md:text-5xl lg:text-6xl
                        `}
                        >
                            {ai1.title}
                        </h1>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-4xl font-medium">
                                Get Generative AI Solutions That Transform and
                                Reinvent Your Business.
                            </h2>
                            <p>
                                Unleash the power of Generative AI to create
                                unique yet intelligent digital products to
                                advance your business effectively.
                            </p>
                            <p>
                                Take a step forward and enhance your business
                                with generative AI solutions. We offer a highly
                                advanced generative AI model & solution by our
                                experts to help your business with advanced AI
                                technology. Get a customized generative AI
                                solution as per your business requirement &
                                lessen the friction of the business.
                            </p>
                        </div>
                    </div>
                    <div className="-order-1 md:order-1 w-[300px] md:min-w-[40%] lg:min-w-[40%]">
                        <img src={ai1.image} alt="hero-image" />
                    </div>
                </div>
            </div>
            <div className="bg-slate-50 py-8 lg:py-16 flex flex-col gap-8">
                <h2 className="text-2xl lg:text-4xl text-center font-bold">
                    Azure Data Analytics Services
                </h2>
                <section className="max-w-[1200px] gap-6 mx-auto grid md:grid-cols-2 xl:grid-cols-4 md:gap-4">
                    <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                        <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                            <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                                <AdjustmentsHorizontalIcon className="stroke-inherit" />
                            </div>
                            <h2 className="text-lg lg:text-2xl font-bold">
                                AI Model Development
                            </h2>
                            <p className="text-sm md:text-base text-slate-500 ">
                                Meet your operational objectives and output
                                requirements with Generative AI models developed
                                around your requirements using advanced techs
                                like deep learning, NLP, RNNs, and transformers.
                            </p>
                        </section>
                    </Card>
                    <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                        <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                            <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                                <CpuChipIcon className="stroke-inherit" />
                            </div>
                            <h2 className="text-lg lg:text-2xl font-bold">
                                AI Integration
                            </h2>
                            <p className="text-sm md:text-base text-slate-500 ">
                                Our team will evaluate every aspect of your
                                business and analyze the data to determine the
                                areas that best benefit from generative AI
                                integration. Find the best use case for AI in
                                different areas of business-
                            </p>
                        </section>
                    </Card>
                    <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                        <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                            <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                                <LinkIcon className="stroke-inherit" />
                            </div>
                            <h2 className="text-lg lg:text-2xl font-bold">
                                Model Fine Tuning
                            </h2>
                            <p className="text-sm md:text-base text-slate-500 ">
                                We offer fine-tuning services to optimize your
                                models and improve their performance over time.
                                By continuously analyzing and adjusting model
                                parameters, we ensure that your Generative AI
                                solutions stay relevant and effective in
                                changing market dynamics and user preferences.
                            </p>
                        </section>
                    </Card>
                    <Card className="relative top-0 hover:md:-top-4 transition-all duration-100">
                        <section className="flex flex-col gap-3 p-5 rounded-lg shadow-lg bg-white h-full ">
                            <div className="p-3 bg-sky-200/45 stroke-sky-500 w-14 h-14 rounded-lg">
                                <CodeBracketSquareIcon className="stroke-inherit" />
                            </div>
                            <h2 className="text-lg lg:text-2xl font-bold">
                                Custom Solutions
                            </h2>
                            <p className="text-sm md:text-base text-slate-500 ">
                                We provide tailored AI development services that
                                analyze project requirements and utilize modern
                                technologies like reinforcement learning and GPT
                                models. Our solutions integrate AI with existing
                                systems for streamlined workflows..
                            </p>
                        </section>
                    </Card>
                </section>
            </div>
            <Featured image={ai2.image} title={ai2.title} desc={ai2.desc} />
        </main>
    );
};

export default AI;
