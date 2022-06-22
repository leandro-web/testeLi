import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Axios from "axios";
import { Link } from 'react-router-dom';

function Register() {

    const handleClickRegister = (values) => {
		Axios.post("http://localhost:3001/register",{
			email: values.email,
			senha: values.password,
		}).then((response) => {
			alert(response.data.msg);
			console.log(response);
		});
    };
    
    const validationRegister = yup.object().shape({
		email: yup
			.string()
			.email("Não é um e-mail")
			.required("Este campo é obrigatório"),
		password: yup
			.string()
			.min(8, "A senha deve ter no minimo 8 caracteres")
			.required("Este campo é obrigatório"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
    });
    
    return (
        <div className='bg-white w-full p-10 rounded-md shadow font-body text-gray-600'>
			<h1 className='text-center text-lg font-bold'>Criar cadastro</h1> 

            <Formik 
                initialValues={{}} 
                onSubmit={handleClickRegister}
                validationSchema={validationRegister}
            >
                <Form>
                    <div className="relative z-0 w-full mb-6 group">
                        <Field 										
                            type="email"
                            name="email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail</label>
                        <ErrorMessage 
                            component="span"
                            name="email"
                            className="form-error"
                        />
                    </div>
                        
                    <div className="relative z-0 w-full mb-6 group">
                        <Field 
                            name="password"
                            type="password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Senha</label>
                        <ErrorMessage 
                            component="span"
                            name="password"
                            className="form-error"
                        />
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <Field 
                            name="confirmPassword"
                            type="password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Repita a senha</label>
                        <ErrorMessage 
                            component="span"
                            name="confirmPassword"
                            className="form-error"
                        />
                    </div>

                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="flex items-start mb-6 w-full">
                            <Link to="/" className="text-sm font-medium text-gray-600">Efetuar login</Link>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Cadastrar
                    </button>
                </Form>
            </Formik>
        
		</div>
    );
};

export default Register;