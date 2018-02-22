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
    if (this.props.size > 0) {
      this.createBricks();
    }
    return (

      <div className="box" style={{height: '500px', width: '500px', position: 'relative', overflow: 'auto', padding: '0'}}>
           <div style={{height: '500px', width: '500px', padding: '10px'}}>
              {this.state.bricks}
            
           </div>
         </div>
    );
  }
}
