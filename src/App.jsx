import Header from './components/Header/Header.jsx';
import { AppContext } from './components/Context/AppContext';
import './App.css';

function App() {
  return (
    <>
      <AppContext.Provider>
        <div class="app">
          <div className='app_content'>
            <Header />   
          </div>
        </div>
      </AppContext.Provider>    
    </>
  )
}

export default App;