import { combineReducers } from "redux";
import game_shop from '../gameShop/gameShopReducer'
import customer_info from '../customerInfo/customerInforReducer'

const rootReducers = combineReducers({
    game_shop,
    customer_info
});

export default rootReducers;