import React, { Component } from 'react';

function Record(props) {
    var day = 0;
    var totalBonus = 0;

    function calBonus(pay) {
        if (pay >= 100) {
            return (pay-100)*2 + 50;
        }
        else if (pay >= 50) {
            return pay - 50;
        }
        else return 0;
    }

    return (
        <table>
            <caption>{props.caption}</caption>
            <tr>
                <th>Day of Month</th>
                <th>Payment Amount</th>
                <th>Bonus</th>
            </tr>
            {props.records.map(pay => {
                var bonus = calBonus(pay);
                totalBonus += bonus;
                return(
                    <tr>
                        <td>{++day}</td>
                        <td>{pay}</td>
                        <td>{bonus}</td>
                    </tr>
                );
            })}
            <tr><td>Total Bonus: {totalBonus}</td></tr>
        </table>
    );
}

export default Record;