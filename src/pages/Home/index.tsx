import BlurScreen from "@/components/BlurScreen";
import BookmarksList from "@/containers/BookmarksList";
import Header from "@/containers/Header";
import LinearSpinner from "@/containers/LinearSpinner";
import { setHeaderTitle } from "@/redux/modules/app/reducers";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  dispatch(setHeaderTitle(""));

  return (
    <>
      <Header />
      <LinearSpinner />
      <BlurScreen blur={false} />
      <Box>
        <BookmarksList />
      </Box>
    </>
  );
}
