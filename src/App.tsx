import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PathRoute } from "./entities/route";
import Home from "./pages/Home";
import About from "./pages/About";
import CustomAppBar from "./compoents/CustomAppBar";
import Clubes from "./pages/Clubes";
import { dataStore } from "./store/dataStore";
import { useEffect } from "react";
import Escalacao from "./pages/Escalacao";

function App() {
  const fetch = dataStore((data) => data.fetchData);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Box
      sx={{ flexGrow: 1, minHeight: "100vh", paddingLeft: 0, paddingRight: 0 }}
    >
      <CustomAppBar />
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          maxWidth={900}
          minHeight={"90vh"}
          flexGrow={1}
          padding={1}
          bgcolor={"white"}
          color={"black"}
        >
          <Routes>
            <Route path={PathRoute.Home} element={<Home />} />
            <Route path={PathRoute.Clubes} element={<Clubes />} />
            <Route path={PathRoute.Escalacao} element={<Escalacao />} />
            <Route path={PathRoute.About} element={<About />} />
            <Route path={PathRoute.NotFound} element={<Home />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
