import '../../styles/Home.css'
import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../../datas/data.js'
import MenuSideBar from '../../components/MenuSideBar'
import Card from '../../components/Card'
import PieChart from '../../components/PieChart'
import CardLineChart from '../../components/CardLineChart'
import CardRadarChart from '../../components/CardRadarChart'
import CardRadialBarChart from '../../components/CardRadialBarChart'

const calorie = require('../../assets/energy.png')
const protein = require('../../assets/chicken.png')
const carbohydrate = require('../../assets/apple.png')
const lipid = require('../../assets/cheeseburger.png')

function Home() {
  
  return (
    <div className="home">
      <MenuSideBar />
      <div className='home-dashboard'>
        <h1>Bonjour {USER_MAIN_DATA[0].userInfos.firstName}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div className='home-dashboard-stats'>
          <div className='home-dashboard-stats-charts'>
            <div className='home-dashboard-stats-charts_bar'>
              <PieChart />
            </div>
            <div className='home-dashboard-stats-charts-cards'>
              <div className='home-dashboard-stats-charts-cards_linear'>
                <CardLineChart />
              </div>
              <div className='home-dashboard-stats-charts-cards_radar'>
                <CardRadarChart />
              </div>
              <div className='home-dashboard-stats-charts-cards_pie'>
                <CardRadialBarChart />
              </div>
            </div>
          </div>
          <div className='home-dashboard-stats-cards'>
            <Card icon={calorie} count={USER_MAIN_DATA[0].keyData.calorieCount} type={"Calories"}/>
            <Card icon={protein} count={USER_MAIN_DATA[0].keyData.proteinCount} type={"Proteines"}/>
            <Card icon={carbohydrate} count={USER_MAIN_DATA[0].keyData.carbohydrateCount} type={"Glucides"}/>
            <Card icon={lipid} count={USER_MAIN_DATA[0].keyData.lipidCount} type={"Lipides"}/>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;