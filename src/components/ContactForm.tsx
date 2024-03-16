import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
    username: z.string().min(3, { message: 'Please insert a valid name' }),
    address: z.string().min(3, { message: 'Please insert a valid address' }),
    email: z
        .string()
        .min(6, { message: 'Email is required' })
        .email('Invalid email address'),
    message: z.string().min(10, {
        message: 'Please insert a valid message (min 10 characters)',
    }),
    tos: z.union([
        z.literal(true).transform(() => true),
        z.literal(undefined).transform(() => false),
    ]),
});

type ValidationSchemaType = z.infer<typeof schema>;

const ContactForm = () => {
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
        <section className="p-5 md:py-8 md:px-16 lg:p-24 bg-gradient-to-br from-sky-400 to-blue-600">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="flex flex-col gap-6 lg:justify-between">
                    <header className="text-white flex flex-col gap-2">
                        <h2 className="flex flex-col text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                            <span>Get In Touch</span>
                            <span>With Us</span>
                            <span>We Answer You</span>
                        </h2>
                        <p className="text-sm md:text-base">
                            About our services and how we can help you to build
                            the software you need to succeed.
                        </p>
                    </header>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex flex-row items-center gap-3">
                            <div className="bg-white w-10 h-10 grid items-center p-2 rounded-lg">
                                <PhoneIcon className="stroke-sky-400/80" />
                            </div>
                            <span className="text-white text-base">
                                +123 4567 890
                            </span>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <div className="bg-white w-10 h-10 grid items-center p-2 rounded-lg">
                                <EnvelopeIcon className="stroke-sky-400/80" />
                            </div>
                            <span className="text-white text-base">
                                info@example.com
                            </span>
                        </div>
                    </div>
                </div>
                <section>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-3 lg:gap-6"
                    >
                        <div className="grid gap-3 md:grid-cols-2">
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    className="w-full p-2 px-4 rounded-lg outline-none"
                                    {...register('username')}
                                />
                                {errors.username && (
                                    <span className="text-sm text-amber-500 font-bold">
                                        {errors.username.message}
                                    </span>
                                )}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="address"
                                    placeholder="Your address"
                                    className="w-full p-2 px-4 rounded-lg outline-none"
                                    {...register('address')}
                                />
                                {errors.address && (
                                    <span className="text-sm text-amber-500 font-bold">
                                        {errors.address.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your email"
                                className="w-full p-2 px-4 rounded-lg outline-none"
                                {...register('email')}
                            />
                            {errors.email && (
                                <span className="text-sm text-amber-500 font-bold">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <textarea
                                id="message"
                                cols={30}
                                rows={6}
                                placeholder="Type Your Message Here"
                                className="w-full p-2 px-4 rounded-lg outline-none"
                                {...register('message')}
                            ></textarea>
                            {errors.message && (
                                <span className="text-sm text-amber-500 font-bold">
                                    {errors.message.message}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center">
                                <input
                                    id="link-checkbox"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    {...register('tos')}
                                />
                                <label
                                    htmlFor="link-checkbox"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    I agree with the terms and conditions.
                                </label>
                            </div>
                            {errors.tos && (
                                <span className="text-sm text-amber-500 font-bold">
                                    Please check the terms and conditions
                                </span>
                            )}
                        </div>
                        <Button type="submit">Get Started</Button>
                    </form>
                </section>
            </div>
        </section>
    );
};

export default ContactForm;
