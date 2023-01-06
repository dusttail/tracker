import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

interface Props {
  children: React.ReactElement;
}

function InheritOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header(props: any) {
  return (
    <Box>
      <InheritOnScroll {...props}>
        <AppBar>
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
      </InheritOnScroll>
    </Box>
  );
}
