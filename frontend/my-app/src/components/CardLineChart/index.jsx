import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/CardLineChart.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value}`}</p>
      </div>
    );
  } else {
    return null;
  }
};

const arrayXAxisLabel = ["L","M","M","J","V","S","D"]

function mapData(data) {
  return data?.map((data, index) => {
    data.day = arrayXAxisLabel[index]
    return data
  } )
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
    <>
      <p>Durée moyenne des sessions</p>
      <ResponsiveContainer className="cardLineChart" width="100%" height={300}>
        <LineChart
          data={mapData(data?.sessions)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="0">
              <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#FFFFFF", opacity: "0.5" }}
          />
          <Tooltip
            animationEasing="ease-out"
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
          <Line
            type="basis"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            fill="url(#color)"
            strokeWidth={3}
            dot={false}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default CardLineChart;
