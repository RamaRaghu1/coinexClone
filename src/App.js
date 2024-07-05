import { DataProvider } from './Context/dataContext';
import './App.css';
import HomePage from './Pages/HomePage';

function App() {
  return (
  <DataProvider>
    <HomePage/>
    </DataProvider>
  );
}

export default App;
