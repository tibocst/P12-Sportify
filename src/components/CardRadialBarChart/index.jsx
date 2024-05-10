import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import "../../styles/CardRadialBarChart.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from '../../api'

function CardRadialBarChart() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchUser = async (id) => {
  
    const response = await getUser(id); 
    setData(response)
  }
  
    useEffect(() => {
      if (id) {
        fetchUser(id)
      }
    }, [id]);
  
    if (!data) {
      return null
    }

  const formatedData = {
    todayScore: data.todayScore * 100 || data.score * 100,
    fill: "#E60000",
  };

  return (
    <div className="barChart">
      <p className="barChart-legend">Score</p>
      <div className="barChart-innerlayout">
        <h1>{formatedData.todayScore} %</h1>
        <h2>de votre objectif</h2>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="65%"
          outerRadius="80%"
          data={[formatedData]}
          startAngle={95}
          barSize={10}
          endAngle={95 + (formatedData.todayScore * 360) / 100}
        >
          <RadialBar
            minAngle={15}
            label={false}
            dataKey="todayScore"
            cornerRadius={100}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CardRadialBarChart;
