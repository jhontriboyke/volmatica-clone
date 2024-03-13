type ButtonProps = {
    type: 'button' | 'submit' | 'reset' | undefined;
    children: React.ReactNode;
};

const Button = ({ type = 'button', children }: ButtonProps) => {
    return (
        <button
            type={type}
            className="bg-sky-400/80 p-3 text-white font-medium rounded-xl hover:bg-sky-500/90 transition-colors duration-200"
        >
            {children}
        </button>
    );
};

export default Button;
