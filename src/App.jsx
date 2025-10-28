import Header from './components/Header/Header.jsx';
import { AppContext } from './components/Context/AppContext';
import './App.css';
import Main from './components/Main/Main.jsx'

function App() {
  return (
    <>
      <AppContext.Provider>
        <div class="app">
          <div className='app_content'>
            <Header />   
            <Main />
          </div>
        </div>
      </AppContext.Provider>    
    </>
  )
}

export default App;