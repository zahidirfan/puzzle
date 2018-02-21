import ReactGridLayout from 'react-grid-layout';
import React, {Component} from 'react';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

export default class Canvas extends Component {
  constructor (props){
    super (props);
  }
  render (){

    return (
      <ReactGridLayout className="layout" maxrows={1} isResizable={false} isDraggable={true} cols={3} height= {1000} rowHeight={30} width={300} static={true} autoSize={false}>
        <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 1, minW : 3, maxW : 1}}>a</div>
        <div key="b" data-grid={{x: 1, y: 0, w: 1, h: 1, minW : 3, maxW : 1}}>b</div>
        <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 1, minW : 3, maxW : 1}}>c</div>
      </ReactGridLayout>
    );

  }
}
