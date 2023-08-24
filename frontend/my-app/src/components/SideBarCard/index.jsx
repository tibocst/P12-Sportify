import '../../styles/SideBarCard.css'

function SideBarCard(props) {
  const { src } = props;
  return (
    <div className="sidebarcard">
      <img src={src} alt="img menu sidebar" />
    </div>
  );
}

export default SideBarCard;