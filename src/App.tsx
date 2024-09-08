import { HashRouter } from 'react-router-dom';
import Routers from './routers/index';
import './App.css'
import { AppContextProvider } from './store';


function App() {
  return (
    <HashRouter>
      <AppContextProvider>
        <Routers />
      </AppContextProvider>
    </HashRouter>
  )
}

export default App
