import React , {Component, Fragment} from 'react';
import {connect } from 'react-redux'

 class CantidadPokemon extends Component{
    
    render(){
        console.log("Usuario:", this.props.customer_info)
        return(
           <Fragment>
               Unidades: {this.props.game_shop.pokemon}
             

           </Fragment>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        game_shop: state.game_shop,
        customer_info: state.customer_info,
    }

};

export default connect(mapStateToProps)(CantidadPokemon);
