type CardProps = {
    className?: string;
    children: React.ReactNode;
};

const Card = ({ className, children }: CardProps) => {
    return (
        <div
            className={`bg-white rounded-xl shadow-md group overflow-hidden cursor-pointer ${className}`}
        >
            <div>{children}</div>
        </div>
    );
};

export default Card;
