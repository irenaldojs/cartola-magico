import { AccountCircle, Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { PathRoute } from "../../entities/route";

export default function CustomAppBar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexGrow: 1,
            maxWidth: 900,
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
            flexGrow={1}
            fontSize={20}
          >
            <Link to={PathRoute.Home}>Home</Link>
            <Link to={PathRoute.Escalacao}>Escalação</Link>
            <Link to={PathRoute.Home}>Home</Link>
            <Link to={PathRoute.Home}>Home</Link>
            <Link to={PathRoute.Home}>Home</Link>
          </Box>

          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
