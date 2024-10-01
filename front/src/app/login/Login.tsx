"use client";

// Vendors
import React from 'react';

// Next
import Link from 'next/link';

// Hooks
import { useRouter } from 'next/navigation';
import { useToken } from '@/context/TokenContext/TokenContext';

// Types
import { IUserLogin } from './types';

// Helpers
import { loginUser } from '@/helpers/loginFetch';
import { validateLogin } from '@/helpers/validateLogin';

// Libraries
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';

const Login: React.FC = (): React.ReactElement => {

    const router = useRouter();
    const { setToken } = useToken();

    return (

        <div className='w-full h-auto bg-[url("/assets/images/background.png")] md:h-[100vh]'>
            <div className='w-full h-full bg-[#000000cc] flex flex-col justify-between relative md:flex-row'>
                <Link className='absolute text-[#f3f4f6] top-5 left-10' href="/">
                    <span>&larr;</span>
                    Volver al inicio
                </Link>
                <div className='w-full h-full flex flex-col text-[#f3f4f6] justify-center gap-5 p-10 pt-20'>
                    <h1 className='text-6xl font-bold lg:text-8xl'>TechZen</h1>
                    <h3 className='text-2xl font-semibold lg:text-3xl'>Tecnología que impulsa tu vida</h3>
                    <p className='font-light w-full'>
                        Explora la última tecnología diseñada para mejorar tu día a día. En TechZen, te ofrecemos productos innovadores que combinan funcionalidad, estilo y vanguardia, para que estés siempre un paso adelante en el mundo digital.
                    </p>
                </div>
                <div className='w-full h-full bg-[#212121] flex flex-col justify-center items-center text-[#f3f4f6] py-5 md:rounded-tl-[50px] md:rounded-bl-[50px] lg:w-3/5 xl:w-1/3'>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validate={validateLogin}
                        onSubmit={async (userData: IUserLogin, { resetForm }) => {

                            const user = await loginUser(userData);

                            resetForm();

                            if (!user.user.email) return;

                            setToken(user.token);

                            router.push("/");

                        }}
                    >
                        {({ errors, touched }: FormikProps<IUserLogin>) => (
                            <Form className='flex flex-col items-center gap-10'>
                                <h2 className='font-semibold text-3xl'>INICIA SESIÓN</h2>
                                <div className='relative'>
                                    <Field className="input" type="email" name="email" placeholder="Correo electrónico" />
                                    {
                                        errors.email && touched.email && (
                                            <div className='errorMessage'>
                                                <ErrorMessage name='email' />
                                            </div>
                                        )
                                    }
                                </div>
                                <div className='relative'>
                                    <Field className="input" type="password" name="password" placeholder="Contraseña" />
                                    {
                                        errors.password && touched.password && (
                                            <div className='errorMessage'>
                                                <ErrorMessage name='password' />
                                            </div>
                                        )
                                    }
                                </div>
                                <button className='bg-[#6ca7ec] py-3 px-9 rounded-xl transition-all hover:bg-[#6ca7ecac]' type='submit'>INICIAR SESIÓN</button>
                                <p className='font-light'>
                                    ¿No tenés una cuenta?
                                    <Link className='text-[#6ca7ec] transition-all border-b-[1px] border-transparent hover:border-b-[1px] hover:border-[#6ca7ec]' href="/register"> Registrate acá</Link>
                                </p>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>

    )

};

export default Login;