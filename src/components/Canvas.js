import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <div className="box" style = {{width: 40, height: 40, backgroundColor: 'orange'}}>{value}</div>);

const SortableList = SortableContainer(({items}) => {
  var width = 60 * Math.sqrt(items.length) + 20;
  var height = 60 * Math.sqrt(items.length) + 20;


    return (
      <div className="boxcontainer" style = {{width: width, height: height, backgroundColor: 'powderblue'}}>
        {items.map((item, index) => {
          return <SortableItem key={`item-${index}`} index={index} value={item} />;
        })}
      </div>
    );
});

export default class Canvas extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
        list: this.props.array
    }
  }

  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      list: arrayMove(this.state.list, oldIndex, newIndex)
    });
    if (!!this.state.list.reduce((memo, item) => memo && item >= memo && item)){
      alert('Wow! Welcome to the team!!');
    }

  }

  componentWillReceiveProps(nextProps){
    this.setState({
      list : nextProps.array
    });

  }

  render() {
    return (
      <div>
        <SortableList items={this.state.list} onSortEnd={this.onSortEnd.bind(this)} axis='xy' />
      </div>
    );
  }
};
