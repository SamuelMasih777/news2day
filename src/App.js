// import logo from './logo.svg';
import { Fragment } from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import {Navbar, Home, Footer, BarChart, PieChart} from './components'
import { Routes, Route } from "react-router-dom";
import { AdminLogin, AdminPanel, CreateNewsFeed, MobilePreview, NewsFeedList, Performance} from "./pages";

function App() {
  return (
    <Fragment>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/createnews" element={<CreateNewsFeed />} />
        <Route path="/managenews" element={<NewsFeedList />} />
        <Route path="/performance" element={<Performance />} />                
        <Route path="/mobile" element={<MobilePreview />} />
        <Route path="/adminlogin" element={<AdminLogin/>}/>
      </Routes>
      {/* <Footer/> */}
    </Fragment>
  );
}

export default App;
