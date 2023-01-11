import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function Header() {
  // TODO: Use trigger to inherit info card image
  const trigger = useScrollTrigger();

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <PersonOutlinedIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h6" noWrap>
            Title
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton edge="end" color="inherit" aria-label="menu">
            <NotificationsOutlinedIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
