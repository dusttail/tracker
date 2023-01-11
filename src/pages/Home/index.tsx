import BookmarksList from "@/containers/BookmarksList";
import Header from "@/containers/Header";
import LinearSpinner from "@/containers/LinearSpinner";
import { setHeaderTitle } from "@/redux/modules/app/reducers";
import { Box, Stack } from "@mui/material";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  dispatch(setHeaderTitle(""));

  return (
    <>
      <Header />
      <LinearSpinner />
      <Box>
        <Stack alignItems="center" spacing={0} sx={{ margin: "20px auto" }}>
          <BookmarksList />
        </Stack>
      </Box>
    </>
  );
}
