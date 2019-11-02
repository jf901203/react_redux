import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment,decrement} from '../store/actions'
import Counter from '../componets/Counter'

export default connect(state=>({count:state}),{increment,decrement})(Counter)