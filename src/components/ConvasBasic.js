import React from "react";
import _ from "lodash";
// import RGL, { WidthProvider } from "react-grid-layout";
import ReactGridLayout from 'react-grid-layout';

// const ReactGridLayout = WidthProvider(RGL);

class BasicLayout extends React.Component {

    // static defaultProps = {
    //     className: "layout",
    //     items: 4,
    //     rowHeight: 10,
    //     onLayoutChange: function() {},
    //     cols: 4,
    // };

    constructor(props) {
        super(props);
        const layout = this.generateLayout();
        this.state = {layout};
    };

    layoutProps() {
        return {
            cols: Math.sqrt(this.props.list.length),
            className: "layout",
            rowHeight: 10,
            onLayoutChange: function () {
            },
        };
    }

    generateDOM() {
        return _.map(this.props.list, function (i) {
            return (
                <div key={i}>
                    <span className="text" style={{textDecoration:'center'}}>{i}</span>
                </div>
            );
        });
    }

    generateLayout() {
        const p = this.props;
        const col = Math.sqrt(p.list.length);
        let coordinates_list = [];
        for (let y = 0; y < col; y++) {
            for (let x = 0; x < col; x++) {
                coordinates_list.push({
                    x: x,
                    y: y,
                    w: 1,
                    h: 2,
                    i: '',
                    isResizable: false
                });
            }

        }

        p.list.forEach(function (item, index) {
            coordinates_list[index].i = item.toString();
        });
        return coordinates_list;
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    render() {

        return (<ReactGridLayout
            layout={this.generateLayout()}
            onLayoutChange={this.onLayoutChange}
            {...this.layoutProps()}
            width={300}
            // autoSize={false}
            style={{height: 0}}
        >
            {this.generateDOM()}
        </ReactGridLayout>);


    }
}

export default BasicLayout;
