import React, {useState} from 'react'; 
import Customer from './Components/Customer';
import Coupon from './Components/Coupon';
import Notfound from './Components/Notfound';
import { Context } from './Components/Context';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { Routes , Route, BrowserRouter }from 'react-router-dom';
import './App.css';
function App() {
  /*Here I am using Context Provider to maintain the correct selected Side Bar with the main Body*/
  const [page,setPage] = useState(1);
    return (
      <div className="App">
         <Navbar name="Sumanto" position="Cashier" />
        <Context.Provider value={{page,setPage}}>
         <BrowserRouter>
         <div style={{display:"flex"}}>
                <>
                <Sidebar/>
                </>
                <>
                    <Routes>
                    <Route path="/" element={<Customer />} />
                    <Route path="/coupon" element={<Coupon />} />
                    <Route path="/notfound" element={<Notfound />} />
                    <Route element={<Notfound />} />
                    </Routes>
                </>
          </div>
        </BrowserRouter>
        </Context.Provider>
      </div>
    );
  }
  
export default App