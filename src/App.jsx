import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import CantidadPokemon from './components/pokemon/cantidadPokemon';
import ComprarPokemon from './components/pokemon/comprarPokemon'
import store from './sections/reducers/store';
import { Provider } from 'react-redux';

export default function App() {

	return (
		<Provider store={store}>
			<div className="App container">
				<div className="row" className="contenedor">
					<div className="col-12">
						<div className="card mt-5" style={{ maxWidth: '500px' }}>
							<div className="row no-gutters">
								<div className="col-4">
									<img src={require('./images/pokemon.jpg')} alt="pokemon" className="card-img" height="200px"></img>
								</div>
								<div className="col-8">
									<div className="card-body">
										<div className="card-title h3 text-center">
											<CantidadPokemon />
										</div>
										<ComprarPokemon />
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</Provider>
	);

}