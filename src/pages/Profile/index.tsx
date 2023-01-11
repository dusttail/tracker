import { Box, Container } from "@mui/material";
import { setHeaderTitle } from "@/redux/modules/app/reducers";
import { useDispatch } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();
  dispatch(setHeaderTitle("Profile"));

  return (
    <Container>
      <Box>Profile</Box>
    </Container>
  );
}
