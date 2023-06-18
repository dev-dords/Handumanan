import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/homepage';
import RegisterPage from './components/register';
import { NavigationBar } from './components/navigationbar';
import ScanPage from './components/scan';
import { Route, Routes, redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Container>
          <Routes>
            <Route path="/Handumanan" element={<Homepage />} />
            <Route path="/Handumanan/scan" element={<ScanPage />} />
            <Route path="/Handumanan/register" element={<RegisterPage />} />
          </Routes>
        </Container>
      </main>
      {/* <RegisterPage /> */}
      {/* <Homepage /> */}
      {/* <ScanPage /> */}
    </div>
  );
}

export default App;
