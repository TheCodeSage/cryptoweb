import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Container } from "@mui/material";
import MyAppBar from "./components/MyAppBar";
import MarketPlace from "./pages/MarketPlace";
import Dashboard from "./pages/Dashboard";
import Info from "./pages/Community";
import Yggdrasil from "./pages/Info";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <MyAppBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/yggdrasil" element={<Yggdrasil />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
};

export default App;
