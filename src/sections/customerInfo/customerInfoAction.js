export const ADD_CUSTOMER_INFO = 'ADD_CUSTOMER_INFO'

export const add_customer_info = (value) => {
  return {
    type : ADD_CUSTOMER_INFO,
    payload: value
  }
}