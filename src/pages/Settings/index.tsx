import { Box, Container } from "@mui/material";
import { setHeaderTitle } from "@/redux/modules/app/reducers";
import { useDispatch } from "react-redux";

export default function Settings() {
  const dispatch = useDispatch();
  dispatch(setHeaderTitle("Settings"));

  return (
    <Container>
      <Box>Settings</Box>
    </Container>
  );
}
