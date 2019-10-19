import React, { Component } from 'react';
import Record from './RecordComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            month1: this.generateData(30),
            month2: this.generateData(31),
            month3: this.generateData(30)
        };
    }

    calBonus(pay) {
        if (pay >= 100) {
            return (pay-100)*2 + 50;
        }
        else if (pay >= 50) {
            return pay - 50;
        }
        else return 0;
    }

    generateData(days) {
        var arr = [];
        for (var i = 0; i < days; i++) {
            arr.push(Math.floor(Math.random()*500));
        }
        return arr;
    }

    render() {
        var allPays = this.state.month1.concat(this.state.month2).concat(this.state.month3);
        var total = 0;
        allPays.forEach(pay => {
            total += this.calBonus(pay);
        });
        return(
            <div>
                <div className="table-container">
                    <Record caption="Month 1" records={this.state.month1} />
                    <Record caption="Month 2" records={this.state.month2} />
                    <Record caption="Month 3" records={this.state.month3} />
                </div>
                <div className="total">
                    Total Bonus for three Month: {total}
                </div>
            </div>
        );
    }
}

export default Main;