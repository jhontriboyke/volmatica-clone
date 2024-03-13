import { Link } from 'react-router-dom';

type CardProps = {
    className?: string;
    to: string;
    children: React.ReactNode;
};

const Card = ({ className, to, children }: CardProps) => {
    return (
        <Link
            to={to}
            className={`bg-white rounded-xl shadow-md group overflow-hidden cursor-pointer ${className}`}
        >
            <div className="p-5 flex flex-col gap-4 group-hover:text-white group-hover:bg-sky-400/80 transition-all duration-200">
                {children}
            </div>
        </Link>
    );
};

export default Card;
