import droneImage from "../assets/pratham.png";
import Sidebar from "./Sidebar";

const MainContent = () => {
  return (
    <main>
      <Sidebar />
      <div className="main_page">
        <div className="image_container">
          <img src={droneImage} alt="drone" />
          <p>Pratham</p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
