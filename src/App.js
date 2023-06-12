import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './views/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
