type FeaturedProps = {
    title: string;
    desc?: string;
    image: string;
};

const Featured = ({ title, desc, image }: FeaturedProps) => {
    return (
        <div className="max-w-[1200px] mx-auto py-4 lg:py-14">
            <div className="p-5 flex flex-col md:flex-row justify-center items-center md:gap-10 lg:gap-20">
                <div className="flex flex-col gap-5">
                    <h1
                        className={`text-xl md:text-3xl lg:text-4xl font-bold ${
                            !desc && 'md:text-5xl lg:text-6xl'
                        }`}
                    >
                        {title}
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg text-slate-500/90">
                        {desc}
                    </p>
                </div>
                <div className="-order-1 md:order-1 w-[300px] md:min-w-[40%] lg:min-w-[40%]">
                    <img src={image} alt="hero-image" />
                </div>
            </div>
        </div>
    );
};

export default Featured;
