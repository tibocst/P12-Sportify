import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, CartesianAxis } from 'recharts';
import '../../styles/BarsChart.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getActivity } from '../../api';

const OVAL = require('../../assets/Oval.png')

const CustomTooltip = ({active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    )
  } else {
    return null
  }
}

function BarsChart(){

  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchActivity = async (id) => {
  
    const response = await getActivity(id); 
      setData(response)
  }
  
    useEffect(() => {
      if (id) {
        fetchActivity(id)
      }
    }, [id]);
  
    if (!data) {
      return null
    }
    
    return (
      <div className='barsChart'>
        <div className='barsChart-legend'>
          <p>Activité quotidienne</p>
          <div>
            <p><img src={OVAL} alt="oval" /> Poids (kg)</p>
            <p><img src={OVAL} alt="oval" /> Calories brûlées (kCal)</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={data?.sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="2 2" />
            <CartesianAxis strokeDasharray="0"/>
            <XAxis 
              tick={data?.sessions.map((index) => index + 1)} 
              tickLine={false} 
              axisLine={false}/>
            <YAxis 
              dataKey="calories" 
              orientation='right' 
              tickCount={3} 
              tickLine={false} 
              axisLine={false} 
              type="number" />
            <Tooltip 
              animationEasing="ease-out" 
              offset={40} 
              wrapperStyle={{ outline: "none" }} 
              content={<CustomTooltip />}/>
            <Bar 
              dataKey="kilogram" 
              fill="#282D30" 
              barSize={10} 
              radius={[10, 10, 0, 0]}/>
            <Bar 
              dataKey="calories" 
              fill="#E60000" 
              barSize={10} 
              radius={[10, 10, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
      );
}

export default BarsChart;
