import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Chicken from "./components/Chicken/Chicken";
import Food from "./components/Food/Food";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/food' element={<Food></Food>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/chicken' element={<Chicken></Chicken>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
      </Routes>
    </div>
  );
}

export default App;
