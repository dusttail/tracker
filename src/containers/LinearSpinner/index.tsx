import { LOADING } from "@/redux/modules/app/actions";
import { getAppState } from "@/redux/modules/app/selectors";
import { Box, Collapse, LinearProgress } from "@mui/material";
import { connect } from "react-redux";

function LinearSpinner(props: any) {
  return (
    <Collapse in={props.state === LOADING} unmountOnExit>
      <Box sx={{ width: "100%", zIndex: 999, position: "fixed" }}>
        <LinearProgress />
      </Box>
    </Collapse>
  );
}

export default connect(getAppState)(LinearSpinner);
