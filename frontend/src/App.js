import{BrowserRouter, Routes, Route} from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import MyNavbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />  
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
