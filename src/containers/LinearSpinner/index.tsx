import { LOADING } from "@/redux/modules/app/actions";
import { getAppState } from "@/redux/modules/app/selectors";
import { Box, LinearProgress } from "@mui/material";
import { connect } from "react-redux";

function LinearSpinner(props: any) {
  const { state } = props;

  if (state === LOADING)
    return (
      <Box sx={{ width: "100%", zIndex: 999, position: "fixed" }}>
        <LinearProgress />
      </Box>
    );

  return <></>;
}

export default connect(getAppState)(LinearSpinner);
