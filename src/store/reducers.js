
import {INCREMENT,DECREMENT} from './action-types'

export function counter(state=0,action){

   switch(action.type){

    case INCREMENT:
      return state+action.data
    case DECREMENT:
      if(state<=0){
        return state
      }
      return state-action.data
    default:
      return state  

   }
  

}