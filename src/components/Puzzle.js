import React, {Component} from 'react';
import {Table, Grid, Row, Col} from 'react-bootstrap';
import Canvas from './Canvas';


export default class Puzzle extends Component {

  constructor (props){
    super(props);

    this.createArray = this.createArray.bind(this);
    this.state = {
      randomArray : []
    }
    this.createArray(this.props.size);

  }



createArray(size){
  var array =[];
    array = Array.apply(null, Array(size*size)).map(function(item, index){
      return index+1;
    });

    var shuffledArray =  (
      ()=> {
        for (var i=0 ; i < array.length; i++) {
          var random = Math.floor(Math.random()*(i+1));
          var temp = array [i];
          array[i] = array[random] ;
          array[random] = temp;
        }
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
        <Canvas size = {this.props.size} array = {this.state.randomArray}/>
      </div>
    );
  }
}
