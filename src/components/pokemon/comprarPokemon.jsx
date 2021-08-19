import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from '../../sections/gameShop/gameShopAction';
import { add_customer_info } from '../../sections/customerInfo/customerInfoAction';


const new_customer_info = {
	nombre: "William Miguel",
	apellido: "Avila Medrano",
	documento: "1073934859"
}
class ComprarPokemon extends Component {


	render() {
		return (
			<div>
				<button className="button.btn-btn-dark btn-sm mb-2" onClick={() => {
					this.props.buy_pokemon_action(1);
				}}>Comprar Pokemon</button>
				<button className="button.btn-btn-dark btn-sm " onClick={() => {
					this.props.return_pokemon_action(1);
				}}>Regresar Pokemon</button>
				<button className="button.btn-btn-dark btn-sm " onClick={() => {
					this.props.add_customer_info(new_customer_info);
				}}>Asignar nuevo cliente</button>
			</div>

		)
	}


}

const mapDispatchToProps = {
	buy_pokemon_action,
	return_pokemon_action,
	add_customer_info
}

export default connect(null, mapDispatchToProps)(ComprarPokemon);
