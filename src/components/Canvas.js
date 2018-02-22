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
    this.renderBricks = this.renderBricks.bind(this);

  }

  createBricks(){
    this.state.bricks = [];
    for (var i=0; i < this.props.array.length; i++){
      var index = i ;
      var position = { x: Math.floor(index / this.props.size)*50, y:  -(index % this.props.size)*50};
      console.log(i );
      console.log( position);
      this.state.bricks.push(<Brick position={position} number = {this.props.array[i]}/>);
    }

    // while(tempbricks.length) this.state.bricks.push(tempbricks.splice(0,this.props.size));

  }

  renderBricks(){
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
