
## redux理解

1. 中文文档 https://www.redux.org.cn/

## Redux是什么

1. redux是一个独立专门用于做状态管理的js库(不是React插件库)
2. 它可以用在react angular vue等项目中，但基本与react配合使用
3. 作用：集中式管理react应用中多个组件共享的状态 对数据进行集中式管理
4. 状态在哪里 修改状态的行为就在哪里
5. 状态就不在组件中了 放在redux库里面管理了 redux提供了修改状态的行为
6. 组件可以读取状态 也可以调用行为去改变状态

## 初始化状态 
1. 组件与redux进行交互
2. store 核心对象
3. store===>React Component 


## 更新状态 声明式编程

1. actions===>store===>reducers
2. 分发事件 store.dispatch()
3. 更新状态 reducers(oldState,actions) =>newState 


## 在React中状态不能直接更新

1. this.state.xxx=newVal 这样是行不通的
2. this.setState({}) 必须重新设置新的状态对象

## store.dispatch

1. store.dispatch(demo) 分发函数名 函数名是函数对象的标识符 通过函数名去找到函数对象 并执行函数体
2. reducers(oldState,actions) =>newState 


## 发布与订阅

1. Pubsub.publish('demo',data)   分发函数名
2. Pubsub.subscribe('demo',(msg,data)=>{}) 找到函数名 并且调用函数体


## 什么情况下需要使用redux

1. 总体原则：能不用就不用，如果不用比较吃力才考虑使用
2. 某个组件的状态，需要共享
3. 某个状态需要在任何地方都可以拿到
4. 一个组件需要改变全局状态
5. 一个组件需要改变另一个组件的状态


## redux的核心API

1. createStore() 创建store对象的一个函数
  
  - 创建包含指定reducer的store对象
  
2. 编码
 
  - import {craeteStore} from 'redux'
  - import counter from './reducers/counter'
  - const store=createStore(counter)

##store 状态对象

1. 作用：
 
   - redux库最核心的管理对象

2. 它内部维护着：
 
   - state
   - reducer ===>根据一个老的状态产生一个新的状态

3. 核心方法
   
   - getState()
   - dispatch(action)    触发
   - subscribe(listener) 回调调用
   
4. 编码

   - store.getState() 读取状态
   - store.dispatch({type:'INCREMENT',number}) 触发事件
   - store.subscribe(render) 事件回调


## applyMiddleware()

1. 作用:
  
   - 应用上基于redux的中间件(插件库)

2. 编码：
 
   - import {createStore,applyMiddleWare} from 'redux'
   - import thunk from 'redux-thunk' redux异步中间件
   - cont store=createStore(counter,applyMiddleware) 应用上异步中间件

## combineReducers()
 
1. 作用

   - 作用：合并多个reducer函数
   
2. 编码

   - export default combineReducers({})

    


## 下载依赖包 

1. npm install --save redux


## redux的核心对象

1. store 包含了状态
2. 包含了改变状态的行为
3. 包含了读取状态的方法

## redux 的三个核心概念

## action对象

1. 标识要执行行为的对象
2. 包含2个方面的属性
   
  - type 标识属性 值为字符串 唯一，必要性
  - xxx:数据属性 值类型任意 可选属性

3. 例子

   - const actions={type:'INCREMENT',Data:2}

4. Action create(创建action的工厂函数)
 
   - const increment=(number)=>({type:'INCREMENT',Data:number})
  

## reducer

1. 根据老的state和action 产生新的state的纯函数
2. 样例

	export function counter(sate=0,action){
	
		switch(action.type){
		
		 case 'INCREMENT':
		
		  return state + action.data
		
		 case 'DESCREMENT':
		 
			return state-action.data
			
		 default:
			
			return state
		
		}
	
	}

3. 注意：返回一个新的状态 不要修改原来的状态


## store

1. 将state，action，reducer联系在一起的对象
2. 如何得到此对象呢？

  - import {createStore} from 'redux'
  - import reducer from './reducers'
  - const store = createStore(reducer)

3. 此对象提供的方法

  - getState() 得到state
  - dispatch(action) 分发一个action对象 对象包含事件名和数据的键值对
  - subscribe(listener):注册监听 当产生了新的state时，自动调用

## subscribe(listener) 监听在state状态发生改变的时候能够重绘组件


## store模块

	import {createStore} from 'redux'
	
	// reducers改变状态的模块
	import {counter} from './reducers'
	// 创建一个store对象
	// 内部会第一次调用reducer函数得到初始state状态
	const store=createStore(counter)
	export default store

## reducers模块

1. 包含n个reducer函数的模块
2. 改变状态
3. reducer函数接受两个参数(state,action)

		// 包含n个reducer函数的模块
		
		import {INCREMENT,DECREMENT} from './action-types'
	
		export function  counter(state=0,action) {
		  
		   switch(action.type){
		      case INCREMENT:
		       return state+action.data
		      case DECREMENT:
		        if(state<=0){
		         return state=0
		        }
		       return state-action.data
		      default:
		       return state
		   }
		
		
		  }

## actions模块

1. 包含所有的action的模块

		// 包含n个action的模块
		
		import {INCREMENT,DECREMENT} from './action-types'
		// 增加的行为
		export const increment=(number)=>({type:INCREMENT,data:number})
		// 减少的行为
		export const decrement=(number)=>({type:DECREMENT,data:number})

## action-types常量模块

1. // 常量模块

	
	export const  INCREMENT ='increment'

	export const  DECREMENT ='decrement'


## 问题

1. redux与react组件的代码耦合(依赖性特别强)度太高
2. 代码不够简洁
3. 依赖性特别强


## react-readux

1. 一个react插件库
2. 专门用来简化react应用中使用redux
3. 简化redux的编写


## react-readux 下载

1. npm install --save react-readux 
2. react-readux 插件库区简化redux的代码编写

## react-redux将所有组件分成两大类

1. UI组件
   
   - 只负责UI的呈现，不带有任何业务逻辑
   - 通过props接收数据(一般数据)
   - 不使用任何redux的API
   - 一般保存在components文件夹下

2. 容器组件

   - 负责管理数据和业务逻辑 不负责UI的呈现
   - 使用redux的API
   - 一般保存在containers文件夹下
   - 容器组件包装UI组件


## 相关的API

1. react-redux提供了一个组件Provider 供应者组件 全局的管理者

   - 让所有组件都可以得到state数据
	  
		  ReactDOM.render(
		    <Provider store={store}>
		     <App />
		    </Provider>
		  , document.getElementById('root'));

   - 用上Provider组件之后 就不需要用redux中的store.subscribe()监听了
   - Provider组件去管理了store状态数据
   - Provider对整个应用进行全局的管理



2. connect()是一个函数 执行完之后返回一个函数 返回的函数参数接收一个组件类 bind()

   - connect把ui组件与redux链接起来
   - 并向ui组件中传递属性
   - import {connect} from 'react-redux'
   - connect(mapStateToProps,mapDispatchToProps)(Counter)

3. mapStateToProps() 将状态映射成为属性 是一个函数 把state作为参数

    将外部数据(即state对象)转换为UI组件的标签属性
    const mapStateToProps=function(state){
      return{
        value:state 
      }
     }
    ===> state=>({value:state})


4. mapDispatchToProps 是一个对象 将action转化为标签属性

    将分发action的函数转换为ui组件的标签属性
    简洁语法可以直接指定为actions对象或包含多个action方法的对象


## connect()是一个函数 执行完之后返回一个函数 返回的函数参数接收一个组件类 bind()

1. connect()(App) 执行完之后 返回一个新的App组件
2. connect() 接收两个数据 一般属性数据 函数属性数据

			
			import React, { Component } from 'react'
			import {connect} from 'react-redux'
			import PropTypes from 'prop-types'
			
			import {increment,decrement} from './store/actions'
			 class App extends Component {
			  static propTypes={
			    count:PropTypes.number.isRequired,
			    increment:PropTypes.func.isRequired,
			    decrement:PropTypes.func.isRequired
			  }
			  componentDidMount(){
			    console.log(this.props)
			  }
			  addHandle=()=>{
			    const number=this.select.value*1
			    this.props.increment(number)
			    
			  }
			
			  deHandle=()=>{
			    const number=this.select.value*1
			    this.props.decrement(number)
			  }
			  oddHandle=()=>{
			    const number=this.select.value*1
			    const count=this.props.count
			    if(count%2===0){
			      this.props.increment(number)
			    }
			  }
			
			  asHandle=()=>{
			    const number=this.select.value*1
			    setTimeout(()=>{
			      this.props.increment(number)
			    },3000)
			  }
			  render() {
			    const count=this.props.count
			    return (
			      <div>
			        <h1>click {count} timers</h1>
			        <select ref={(select)=>this.select=select}>
			          <option value="1">1</option>
			          <option value="2">2</option>
			          <option value="3">3</option>
			        </select>
			        &nbsp;
			        <button onClick={this.addHandle}>+</button>
			        &nbsp;
			        <button onClick={this.deHandle}>-</button>
			        &nbsp;
			        <button onClick={this.oddHandle}>imcrement if odd</button>
			        &nbsp;
			        <button onClick={this.asHandle}>async</button>
			
			      </div>
			    )
			  }
			}
			
			//1. 一般属性数据 2.函数数据数据 给App组件传递数据 
            // 通过props的方式传递属性
			export default connect(state=>({count:state}),{increment,decrement})(App)


## 任何组件都需要引入

1. import React from 'react' 

## 问题

1. redux默认是不能进行异步处理的
2. 应用中又需要在redux中执行异步任务(ajax,定时器)