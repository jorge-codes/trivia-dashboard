import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './views/Home';
import OrganizationCreate from './views/OrganizationCreate';
import OrganizationDetails from './views/OrganizationDetails';
import Organizations from './views/Organizations';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/organizations' element={<Organizations />}></Route>
            <Route path='/organizations/create' element={<OrganizationCreate />}></Route>
            <Route path='/organizations/:id' element={<OrganizationDetails />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
