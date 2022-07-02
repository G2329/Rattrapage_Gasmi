import React from 'react';
//import ReactDOM from 'react-dom';
//import DonutChart from './lib';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
  


const pdata = [
    {
        name: '2022-01-01',
         uv: 4000
    },
    {
      name: '2022-02-01',
      uv: 3000
    },
    {
      name: '2022-03-01',
      uv: 2680
    },
    {
      name: '2022-04-01',
      uv: 5000
    },
    {
      name: '2022-05-01',
      uv: 7904
    },
];

  
function App() {
    return (
        <>
            <h1 className="text-heading">
                Uv en fonction de la date : 
            </h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />

                    <Line dataKey="uv"
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
            
        </>
    );
}

  
  
export default App;