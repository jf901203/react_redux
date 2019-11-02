
import {createStore} from 'redux'

// 通过reducers去创建store对象
import {counter} from './reducers'

const  store=createStore(counter)

console.log(store)
export default store