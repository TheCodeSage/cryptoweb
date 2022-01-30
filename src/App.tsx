import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import MyAppBar from "./components/MyAppBar";
import MarketPlace from "./pages/MarketPlace";
import Dashboard from "./pages/Dashboard";
import Info from "./pages/Community";
import Yggdrasil from "./pages/Info";

const App = () => {
  return (
    <>
      <MyAppBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          background: "linear-gradient(#eee 90%, #fff 100%)",
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/yggdrasil" element={<Yggdrasil />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
