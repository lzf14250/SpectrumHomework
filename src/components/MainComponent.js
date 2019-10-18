import React, { Component } from 'react';
import Record from './RecordComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            month1: this.generateData(30),
            month2: this.generateData(31),
            month3: this.generateData(30),
            valueShowed: 0
        };
    }

    generateData(days) {
        var arr = [];
        for (var i = 0; i < days; i++) {
            arr.push(Math.floor(Math.random()*500));
        }
        return arr;
    }

    render() {
        return(
            <div className="table-container">
                <Record caption="Month 1" records={this.state.month1}/>
                <Record caption="Month 2" records={this.state.month2}/>
                <Record caption="Month 3" records={this.state.month3}/>
            </div>
        );
    }
}

export default Main;