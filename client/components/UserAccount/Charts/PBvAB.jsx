import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area} from 'recharts';
import React, { Component } from "react";


export default class PBvAB extends Component {
  
    render() {
        // PB v Ab data
        const data = [
            {month: 'Jan', pb: 1000, ab: 950, maxiumBalance: 10000},
            {month: 'Feb', pb: 2000, ab: 1500, maxiumBalance: 10000},
            {month: 'Mar', pb: 1500, ab: 1350, maxiumBalance: 10000},
            {month: 'Apr', pb: 3000, ab: 2500, maxiumBalance: 10000},
            {month: 'May', pb: 1700, ab: 1200, maxiumBalance: 10000},
            {month: 'June', pb: 1900, ab: 1750, maxiumBalance: 10000},
            {month: 'July', pb: 700, ab: 500, maxiumBalance: 10000},
            {month: 'Aug', pb: 1950, ab: 2100, maxiumBalance: 10000},
            {month: 'Sept', pb: 3200, ab: 3100, maxiumBalance: 10000},
            {month: 'Oct', pb: 5000, ab: 4500, maxiumBalance: 10000},
            {month: 'Nov', pb: 4000, ab: 3600, maxiumBalance: 10000},
            {month: 'Dec', pb: 6500, ab: 6200, maxiumBalance: 10000}
        ]
      return(
          
        <div>
            <div className="AreaChart">
            <h2>Projected (PB) / Actual Balance(AB) - Analysis </h2>
            <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis dataKey="maxiumBalance"/>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="pb" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="ab" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
            </div>
        </div>
    );
    }
}