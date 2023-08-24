import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, CartesianAxis } from 'recharts';
import { USER_ACTIVITY } from '../../datas/data';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

function PieChart(){
    
    return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={USER_ACTIVITY[0].sessions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <CartesianAxis strokeDasharray="0"/>
            <XAxis tick={USER_ACTIVITY[0].sessions.map((index) => index + 1)} tickLine={false} axisLine={false}/>
            <YAxis dataKey="kilogram" orientation='right' tickCount={3} tickLine={false} axisLine={false} type="number" domain={['auto', 'auto']}/>
            <Tooltip />
            <Bar dataKey="kilogram" fill="#282D30" barSize={10} />
            <Bar dataKey="calories" fill="#E60000" barSize={10}/>
          </BarChart>
        </ResponsiveContainer>
      );
}

export default PieChart;
