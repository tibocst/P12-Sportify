import "../../styles/MenuSideBar.css";
import SideBarCard from "../SideBarCard";

const YOGA = require("../../assets/yoga.png");
const BIKER = require("../../assets/biker.png");
const DUMBBELL = require("../../assets/dumbbell.png");
const SWIMER = require("../../assets/swimer.png");

function MenuSideBar() {
  return (
    <div className="menusidebar">
      <div>
        <SideBarCard src={YOGA} />
        <SideBarCard src={SWIMER} />
        <SideBarCard src={BIKER} />
        <SideBarCard src={DUMBBELL} />
      </div>
      <div>
        <p>Copyright, SportSee 2020</p>
      </div>
    </div>
  );
}

export default MenuSideBar;
