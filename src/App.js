import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header";
import { Routes,Route,Link} from 'react-router-dom';
import React, {useState} from "react";
import Blog from "./component/Blog/Blog";

function App() {
    const [menuActive,setMenuActive]=useState(false);
  return (

    <div className={'App'}  >
        <Routes>
            <Route path={'/'} element={<Header menuActive={menuActive} setMenuActive={setMenuActive}/>} />
            <Route path={'/blog'} element={<Blog menuActive={menuActive} setMenuActive={setMenuActive}/>}/>
        </Routes>

    </div>
  );
}

export default App;
