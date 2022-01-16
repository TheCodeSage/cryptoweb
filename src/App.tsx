import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Container } from "@mui/material";
import MyAppBar from "./components/MyAppBar";
import MarketPlace from "./pages/MarketPlace";
import Dashboard from "./pages/Dashboard";
import Info from "./pages/Info";
import Yggdrasil from "./pages/Yggdrasil";

const App = () => {
  return (
    <>
      <MyAppBar />
      <Container className="mainContainer">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/yggdrasil" element={<Yggdrasil />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
