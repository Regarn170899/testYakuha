import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header";
import Sector_Ferst from "./component/Sector_Ferst";
import Sector_Second from "./component/Sector_Second";
import Footer from "./component/Footer";



function App() {
  return (
    <div className={'App'}  >
      <Header/>
      <Sector_Ferst/>
      <Sector_Second/>
      <Footer/>
    </div>
  );
}

export default App;
