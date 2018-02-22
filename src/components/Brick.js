import React, {Component} from 'react';
import Draggable from 'react-draggable';



export default class Brick extends Component {
  constructor (props){
    super (props);
    this.state = this.getInitialState();
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    console.log(this.state);
  }

  getInitialState() {
   return {
     number : this.props.number,
     activeDrags: 0,
     deltaPosition: {
       x: 0, y: 0
     },
     controlledPosition: {
       x: -400, y: 200
     }
   };
 }

 handleDrag(e, ui) {
   const {x, y} = this.state.deltaPosition;
   this.setState({
     deltaPosition: {
       x: x + ui.deltaX,
       y: y + ui.deltaY,
     }
   });
 }

 onStart() {
   this.setState({activeDrags: ++this.state.activeDrags});
 }

 onStop() {
   this.setState({activeDrags: --this.state.activeDrags});
 }

 // For controlled component
 adjustXPos(e) {
   e.preventDefault();
   e.stopPropagation();
   const {x, y} = this.state.controlledPosition;
   this.setState({controlledPosition: {x: x - 10, y}});
 }

 adjustYPos(e) {
   e.preventDefault();
   e.stopPropagation();
   const {controlledPosition} = this.state;
   const {x, y} = controlledPosition;
   this.setState({controlledPosition: {x, y: y - 10}});
 }

 onControlledDrag(e, position) {
   const {x, y} = position;
   this.setState({controlledPosition: {x, y}});
 }

 onControlledDragStop(e, position) {
   this.onControlledDrag(e, position);
   this.onStop();
 }

  render () {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;
    return (
        <Draggable bounds="parent" {...dragHandlers}>
          <div className="numberBox">
          <h1> {this.state.number} </h1>
          </div>
        </Draggable>

      );
  }
}
