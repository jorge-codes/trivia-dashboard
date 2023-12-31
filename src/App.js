import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './views/Home';
import NotFound from './views/NotFound';
import CategoriesView from './views/CategoriesView';

function App() {
  return (
    <Router>
      <main className='App'>
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/categories' element={<CategoriesView />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
