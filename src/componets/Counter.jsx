import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
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
