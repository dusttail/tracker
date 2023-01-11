import { Box, Container } from "@mui/material";
import { setHeaderTitle } from "@/redux/modules/app/reducers";
import { useDispatch } from "react-redux";

export default function Search() {
  const dispatch = useDispatch();
  dispatch(setHeaderTitle("Search"));

  return (
    <Container>
      <Box>Search</Box>
    </Container>
  );
}
