import "../../styles/Home.css";
import MenuSideBar from "../../components/MenuSideBar";
import Card from "../../components/Card";
import BarsChart from "../../components/BarsChart";
import CardLineChart from "../../components/CardLineChart";
import CardRadarChart from "../../components/CardRadarChart";
import CardRadialBarChart from "../../components/CardRadialBarChart";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../../api";

const calorie = require("../../assets/energy.png");
const protein = require("../../assets/chicken.png");
const carbohydrate = require("../../assets/apple.png");
const lipid = require("../../assets/cheeseburger.png");

function Home() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const fetchUser = async (id) => {
    const response = await getUser(id);
    if (response === "can not get user") {
      setError(true)
    } else {
      setData(response);
    }
  };

  useEffect(() => {
    if (id) {
      fetchUser(id);
    }
  }, [id]);

  if (!id) {
    return <Navigate to="user/12" replace={true} />;
  }
  if(error) {
    return <Navigate to="/error" replace={true} />;
  }
  if (!data) {
    return null;
  }

  return (
    <div className="home">
      <MenuSideBar />
      <div className="home-dashboard">
        <h1>Bonjour {data.userInfos.firstName}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div className="home-dashboard-stats">
          <div className="home-dashboard-stats-charts">
            <div className="home-dashboard-stats-charts_bar">
              <BarsChart />
            </div>
            <div className="home-dashboard-stats-charts-cards">
              <div className="home-dashboard-stats-charts-cards_linear">
                <CardLineChart />
              </div>
              <div className="home-dashboard-stats-charts-cards_radar">
                <CardRadarChart />
              </div>
              <div className="home-dashboard-stats-charts-cards_radial">
                <CardRadialBarChart />
              </div>
            </div>
          </div>
          <div className="home-dashboard-stats-cards">
            <Card
              icon={calorie}
              count={data?.keyData.calorieCount}
              type={"Calories"}
            />
            <Card
              icon={protein}
              count={data?.keyData.proteinCount}
              type={"Proteines"}
            />
            <Card
              icon={carbohydrate}
              count={data?.keyData.carbohydrateCount}
              type={"Glucides"}
            />
            <Card
              icon={lipid}
              count={data?.keyData.lipidCount}
              type={"Lipides"}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
