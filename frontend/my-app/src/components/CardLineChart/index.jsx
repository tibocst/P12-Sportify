import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

function CustomizedAxisTick(props) {
    const { x, y, stroke, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
          {payload.value}
        </text>
      </g>
    );
}

const CustomTooltip = ({active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value}`}</p>
      </div>
    )
  } else {
    return null
  }
}


function CardLineChart() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/user/${id}/average-sessions`)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data?.sessions}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis 
        dataKey="day" 
        axisLine={false}
        tickLine={false}
        stroke='#8884d8'
        tick={<CustomizedAxisTick />} />
        <Tooltip 
          animationEasing="ease-out"
          content={<CustomTooltip />}
          wrapperStyle={{ outline: "none" }}/>
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CardLineChart;
