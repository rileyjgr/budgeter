import {ComposedChart, Area, Bar, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React, { Component } from 'react';

export default class CreditUtil extends Component {
    render(){
        const data = [
            {card: 'Amex', ab: 500, l:1000, pb: 700},
            {card: 'Visa', ab: 600, l: 2000, pb: 300},
            {card: 'Mastercard', ab: 300, l: 500, pb: 350}
        ];
        return(
            <div className='creditUtil'>
            <h2>Credit Utilization, ab: Actual Balance, l: Limit, pb: Projected Balance</h2>
            <ComposedChart width={730} height={250} data={data}>
                <XAxis dataKey='card' />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke='#f5f5f5' />
                <Area type='monotone' dataKey='pb' fill='#8884d8' stroke='#8884d8' />
                <Bar dataKey='ab' barSize={20} fill='#413ea0' />
                <Line type='monotone' dataKey='l' stroke='#ff7300' />
                </ComposedChart>
            </div>
        );
    }
}
