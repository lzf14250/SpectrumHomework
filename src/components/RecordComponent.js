import React, { Component } from 'react';

class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalBonus: 10
        };
        this.calBonus = this.calBonus.bind(this);
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

    render() {
        var day = 0;
        var totalBonus = 0;
        var bonusArr = this.props.records.map(pay => {
            var bonus = this.calBonus(pay);
            totalBonus += bonus;
            return(
                <tr>
                    <td>{++day}</td>
                    <td>{pay}</td>
                    <td>{bonus}</td>
                </tr>
            );
        });
        return (
            <table>
                <caption>{this.props.caption}</caption>
                <tr>
                    <th>Day of Month</th>
                    <th>Payment Amount</th>
                    <th>Bonus</th>
                </tr>
                {bonusArr}
                <tr><td>Total Bonus: {totalBonus}</td></tr>
            </table>
        );
    }
}

export default Record;