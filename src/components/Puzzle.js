import React, {Component} from 'react';
import {Table, Grid, Row, Col} from 'react-bootstrap';
import Brick from './Brick';
import Canvas from './Canvas';
import BasicLayout from './ConvasBasic';


export default class Puzzle extends Component {

  constructor (props){
    super(props);

    this.createArray = this.createArray.bind(this);
    this.createBricks = this.createBricks.bind(this);
    this.state = {
      randomArray : []
    };
    this.createArray(this.props.size);

  }

  createBricks(){
    var bricks = this.state.randomArray.map((item, index)=>{
      if (index % this.props.size !== 0) {
        return <td><Brick  number={item}/> </td>;
      }
      else {
        return <tr> <td> <Brick number = {item}/> </td> </tr>;
      }
    }
  );
  return bricks;
}

createArray(size){
    var array = Array.apply(null, Array(size*size)).map(function(item, index){
      return index+1;
    });

    var shuffledArray =  (
      ()=> {
        // for (var i=0 ; i < array.length; i++) {
        //   var random = Math.floor(Math.random()*(i+1));
        //   var temp = array [i];
        //   array[i] = array[random] ;
        //   array[random] = temp;
        // }
        return array;
      }

    )();

    this.setState({
      randomArray : shuffledArray
    });

  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps) {
      this.createArray(nextProps.size);
    }
  }

  render (){
    return (
      <div>
        <h1> Puzzle of size {this.props.size} will be displayed here </h1>
        {/*<Canvas/>*/}
          <div className="row"><div className="col-sm-2"><BasicLayout size={this.state.randomArray.length}/></div></div>
      </div>
    );
  }
}
