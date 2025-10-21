import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';
import { AppContext } from './components/Context/AppContext';

function App() {
  const [x1, setx1] = useState("START VALUE");


  const [c1, setc1] = useState("ROWAN NETWORKS");
  return ( 
    <>
      <AppContext.Provider value={{c1, setc1}}>
        <Header setx1={setx1}/>
        <Background>
          <Main x1={x1}/>
          <Footer setx1={setx1} x1={x1}/>
        </Background>
      
        {/* <h3>Esto está en APP</h3> */}
      </AppContext.Provider>
      
    </>
  );
}

export default App;

