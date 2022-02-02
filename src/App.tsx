import { Routes, Route } from "react-router-dom";
import "./App.css";
import MyAppBar from "./components/MyAppBar";
import MarketPlace from "./pages/MarketPlace";
import Dashboard from "./pages/Dashboard";
import Info from "./pages/Info";
import Arena from "./pages/Arena";

const App = () => {
  return (
    <>
      <MyAppBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
};

export default App;
