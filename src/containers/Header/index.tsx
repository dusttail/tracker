import { getHeaderTitle } from "@/redux/modules/app/selectors";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

function Header(props: any) {
  const { headerTitle } = props;

  // TODO: Use location to set header title
  const location = useLocation();

  // TODO: Use trigger to inherit info card image
  const trigger = useScrollTrigger();

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <PersonOutlinedIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Typography variant="h6" noWrap marginLeft={"8px"}>
            {headerTitle}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton edge="end" color="inherit" aria-label="menu">
            <SearchIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

export default connect(getHeaderTitle)(Header);
