import { z } from 'zod';
import Button from './Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

const schema = z.object({
    email: z
        .string()
        .min(1, { message: 'Fill the email first' })
        .email('Not a valid email'),
});

type ValidationSchemaType = z.infer<typeof schema>;

const EmailForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ValidationSchemaType>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<ValidationSchemaType> = (data) => {
        console.log(data);
    };

    return (
        <section className="bg-slate-100 p-5 py-8 md:p-12">
            <div className="flex flex-col gap-6">
                <header className="text-center flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold flex flex-col">
                        <span>Contact Us</span>
                        <span>Today To Learn More</span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-600">
                        About our services and how we can help you to build the
                        software you need to succeed.
                    </p>
                </header>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 bg-white p-4 rounded-3xl shadow-lg md:w-[500px] md:mx-auto"
                >
                    <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        className={`py-1 px-2 rounded-md outline-none ${
                            errors.email && 'border-2 border-red-400'
                        }`}
                        {...register('email')}
                    />

                    <Button type="submit">
                        <span>Get Started</span>
                    </Button>
                    {errors.email && (
                        <span className="text-center text-sm text-red-500 font-medium">
                            {errors.email.message}
                        </span>
                    )}
                </form>
            </div>
        </section>
    );
};

export default EmailForm;
