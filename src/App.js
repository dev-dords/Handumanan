import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/homepage';
import RegisterPage from './components/register';
import { NavigationBar } from './components/navigationbar';
import ScanPage from './components/scan';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      {/* <RegisterPage /> */}
      {/* <Homepage /> */}
      <ScanPage />
    </div>
  );
}

export default App;
