import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

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
        this.state = { layout };
    };

    layoutProps() {
        return {
            cols: this.props.list.length,
            items: this.props.list.length,
            className:"layout",
            rowHeight: 10,
            onLayoutChange: function() {},
        }

    }

    generateDOM() {
        return _.map(this.props.list, function(i) {
            return (
                <div key={i}>
                    <span className="text">{i}</span>
                </div>
            );
        });
    }

    generateLayout() {
        const p = this.props;
        return _.map(p.list, function(item, i) {
            const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
            return {
                x: (i * 2) % p.list.length,
                y: Math.floor(i / 6) * y,
                w: 2,
                h: 2,
                i: item.toString(),
                isResizable: false
            };
        });
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    render() {
        return (
            <ReactGridLayout
                layout={this.generateLayout()}
                onLayoutChange={this.onLayoutChange}
                {...this.layoutProps()}
            >
                {this.generateDOM()}
            </ReactGridLayout>
        );
    }
}

export default BasicLayout;
