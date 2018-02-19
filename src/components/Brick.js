import React, {Component} from 'react';


export default class Brick extends Component {
  constructor (props){
    super (props);
    this.state ={
      position : [0,0],
      number : 0
    }
  }

  render () {
    return this.props.number;
  }
}
