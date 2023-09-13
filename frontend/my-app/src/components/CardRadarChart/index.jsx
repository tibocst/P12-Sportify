import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../../styles/CardRadarChart.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'

function mapData(perfs) {
  return perfs?.data.map((perf) => {
    switch (perf.kind) {
      case 1:
        perf.kind = "Cardio";
        break;
      case 2:
        perf.kind = "Energie";
        break;
      case 3:
        perf.kind = "Endurance";
        break;
      case 4:
        perf.kind = "Force";
        break;
      case 5:
        perf.kind = "Vitesse";
        break;
      case 6:
        perf.kind = "Intensité";
        break;
      default:
        break;
    }
    return perf
  } )
}

function CardRadarChart() {

  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
      fetch(`http://localhost:3000/user/${id}/performance`)
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch( (err) => {
        console.log(err);
      })
  }, [id]);

    return (
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={mapData(data)}>
        <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 15 }}/>
          <Radar name={data?.id} dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
    );
}

export default CardRadarChart;
