"use client"

// Vendors
import React from 'react';

// Next
import Link from 'next/link';

// Hooks
import { useRouter } from 'next/navigation';

// Types
import { IUserRegister } from './types';

// Helpers
import { validateRegister } from '@/helpers/validateRegister';
import { registerUser } from '@/helpers/registerFetch';

// Libraries
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';

const Register: React.FC = (): React.ReactElement => {

    const router = useRouter();

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
                        initialValues={{ name: "", email: "", password: "", address: "", phone: "" }}
                        validate={validateRegister}
                        onSubmit={async (userData: IUserRegister, { resetForm }) => {

                            const user = await registerUser(userData);

                            resetForm();

                            if (!user.email) return;

                            router.push("/login");

                        }}
                    >
                        {({ errors, touched }: FormikProps<IUserRegister>) => (
                            <Form className='flex flex-col items-center gap-10'>
                                <h2 className='font-semibold text-3xl'>REGÍSTRATE</h2>
                                <div className='relative'>
                                    <Field className="input" type="text" name="name" placeholder="Nombre completo" />
                                    {
                                        errors.name && touched.name && (
                                            <div className='errorMessage'>
                                                <ErrorMessage name='name' />
                                            </div>
                                        )
                                    }
                                </div>
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
                                <div className='relative'>
                                    <Field className="input" type="text" name="address" placeholder="Dirección" />
                                    {
                                        errors.address && touched.address && (
                                            <div className='errorMessage'>
                                                <ErrorMessage name='address' />
                                            </div>
                                        )
                                    }
                                </div>
                                <div className='relative'>
                                    <Field className="input" type="text" name="phone" placeholder="Teléfono" />
                                    {
                                        errors.phone && touched.phone && (
                                            <div className='errorMessage'>
                                                <ErrorMessage name='phone' />
                                            </div>
                                        )
                                    }
                                </div>
                                <button className='bg-[#6ca7ec] py-3 px-9 rounded-xl transition-all hover:bg-[#6ca7ecac]' type='submit'>REGISTRARSE</button>
                                <p className='font-light'>
                                    ¿Ya tenés una cuenta?
                                    <Link className='text-[#6ca7ec] transition-all border-b-[1px] border-transparent hover:border-b-[1px] hover:border-[#6ca7ec]' href="/login"> Ingresa acá</Link>
                                </p>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>

    )

};

export default Register;