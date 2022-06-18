import React from 'react';
import bgFlorest from './bg-florest.jpg';
import './App.css';

function App() {
  	return (
      	<div className="grid grid-cols-1 md:grid-cols-2">
			<div className="bg-green-300 md:max-h-screen md:flex md:items-center hidden md:block overflow-hidden">
				<img src="./bg-florest.jpg" alt="Imagem na página de login" className="flex-grow" />
			</div>
      
        	<div className="bg-gray-100 md:min-h-screen md:flex items-center lg:p-20 p-8 sm-12">
          		<div className='bg-white w-full p-10 rounded-md shadow font-body text-gray-600'>
          			<h1 className='text-center text-lg font-bold'>Login para continuar</h1>   
          
          			<form>
						<div className="relative z-0 w-full mb-6 group">
							<input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
							<label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail</label>
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
							<label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Senha</label>
						</div>
	
						<div className="grid xl:grid-cols-2 xl:gap-6">
							<div className="flex items-start mb-6 w-full">
								<div className="flex items-center h-5">
									<input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
								</div>
								<label className="ml-2 text-sm font-medium text-gray-600">Lembrar</label>
							</div>
						</div>

  						<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Entrar</button>
					</form>
        
          		</div>
          
        	</div>
      
      	</div>
  	);
}

export default App;
