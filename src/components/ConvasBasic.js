import React from "react";
import _ from "lodash";
// import RGL, { WidthProvider } from "react-grid-layout";
import ReactGridLayout from 'react-grid-layout';
import './style.css'

// const ReactGridLayout = WidthProvider(RGL);

class BasicLayout extends React.Component {
    
    constructor(props) {
        super(props);
        const layout = this.generateLayout();
        this.state = {layout};

    };


    generateCoordinates() {
        const p = this.props;
        const col = Math.sqrt(p.list.length);
        let coordinates = [];
        for (let y = 0; y < col; y++) {
            for (let x = 0; x < col; x++) {
                coordinates.push({
                    x: x,
                    y: y,
                });
            }
        }
        return coordinates;
    }

    layoutProps() {
        return {
            cols: Math.sqrt(this.props.list.length),
            className: "layout",
            rowHeight: 30,
        };
    }

    generateDOM() {
        return _.map(this.props.list, function (i) {
            return (
                <div key={i} className="brick">{i}</div>
            );
        });
    }

    generateLayout() {
        const p = this.props;
        let data_grid = this.generateCoordinates();
        data_grid.map(function (item) {
            item.w = 1;
            item.h = 1;
            item.i = '';
            item.isResizable = false;
        });
        p.list.forEach(function (item, index) {
            data_grid[index].i = item.toString();
        });
        return data_grid;
    }

    onLayoutChange(layout) {
        const col = Math.sqrt(layout.length);
        let puzzleCompleted = false;
        // let coordinates = this.generateCoordinates();
        let coordinates = [];
        for (let y = 0; y < col; y++) {
            for (let x = 0; x < col; x++) {
                coordinates.push({
                    x: x,
                    y: y,
                });
            }
        }
        let matched_items = layout.map(function (item, index) {
            let actual_coordinates = {x: item.x, y: item.y};
            let expected_coordinates = coordinates.filter(function (coords, i) {
                return i + 1 == item.i;
            });
            return JSON.stringify(expected_coordinates[0]) === JSON.stringify(actual_coordinates);
        });

        // If all the bricks have correct coordinates, alert the user
        if (layout.length && matched_items.filter(v => v).length === layout.length) {
            setTimeout(function () {
                alert('Welcome to the team!')
            }, 300)
        }
    }

    onDragStop(layout, oldItem, newItem, placeholder, e, element) {
    }

    render() {

        return (<ReactGridLayout
            layout={this.generateLayout()}
            onLayoutChange={this.onLayoutChange}
            onDragStop={this.onDragStop}
            {...this.layoutProps()}
            width={300}
        >
            {this.generateDOM()}
        </ReactGridLayout>);


    }
}

export default BasicLayout;
