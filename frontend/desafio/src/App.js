import './App.css';
import Routes from "./routes";

function App() {
  	return (
      	<div className="grid grid-cols-1 md:grid-cols-2">
			<div className="bg-green-300 md:max-h-screen md:flex md:items-center hidden md:block overflow-hidden">
				<img src="./bg-florest.jpg" alt="Imagem na página de login" className="flex-grow" />
			</div>      
        	<div className="bg-gray-100 md:min-h-screen md:flex items-center lg:p-20 p-8 sm-12">
				<Routes />
        	</div>
      	</div>
  	);
}

export default App;
