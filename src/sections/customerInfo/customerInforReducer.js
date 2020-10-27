import {ADD_CUSTOMER_INFO} from './customerInfoAction';
  
  
  export const default_customer_info = {
    nombre: 'Default',
    apellido: 'Default',
    numero: '999999'
  }

  export default  function customer_info  (state = default_customer_info, action)  {
    switch (action.type) {
      case ADD_CUSTOMER_INFO: {
        return {
          ...state = action.payload
        }
      } 
      default: return state;
    }
  }
