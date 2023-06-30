import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/homepage';
import RegisterPage from './components/register';
import { NavigationBar } from './components/navigationbar';
import ScanPage from './components/scan';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Payment } from './components/payment';
import { AdminLog } from './components/adminListView/adminLog';
function App() {
  return (
    <div className="App banner">
      <main>
        <NavigationBar />
        <Container>
          <Routes>
            <Route path="/Handumanan" element={<Homepage />} />
            <Route path="/Handumanan/scan" element={<ScanPage />} />
            <Route path="/Handumanan/register" element={<RegisterPage />} />
            <Route path="/Handumanan/payment" element={<Payment />} />
            <Route path="/Handumanan/admin" element={<AdminLog />} />
          </Routes>
        </Container>
      </main>
    </div>
  );
}

export default App;
