import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Brick from './Brick';



export default class Canvas extends Component {
  constructor (props){
    super (props);
    this.state = {
      bricks : []
    };

    this.createBricks = this.createBricks.bind(this);
  }

  createBricks(){
    this.state.bricks = [];
    for (var i=0; i < this.props.array.length; i++){
      this.state.bricks.push(<Brick number = {this.props.array[i]}/>);
    }
  }

  render() {
    var height = this.props.size * 50 + 'px';
    if (this.props.size > 0) {
      this.createBricks();
    }
    return (
      <div className="box" style={{height: {height}, width: '500px', position: 'relative', overflow: 'auto', padding: '0'}}>
               {this.state.bricks}
      </div>


    );
  }
}
