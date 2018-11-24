import { combineReducers } from 'redux';  
import faqReducer from './faqReducer';

 const rootReducer = combineReducers({
   data: faqReducer,
 });

 export default rootReducer;