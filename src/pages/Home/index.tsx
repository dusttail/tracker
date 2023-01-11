import AddButton from "@/components/AddButton";
import BlurScreen from "@/components/BlurScreen";
import BookmarksList from "@/containers/BookmarksList";
import Header from "@/containers/Header";
import LinearSpinner from "@/containers/LinearSpinner";
import { setHeaderTitle } from "@/redux/modules/app/reducers";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  dispatch(setHeaderTitle(""));

  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(isMenuOpen);
  });

  function handleOpen() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <Header />
      <LinearSpinner />
      <AddButton onOpen={handleOpen} isOpen={isMenuOpen} />
      <BlurScreen blur={isMenuOpen} />
      <Box>
        <BookmarksList />
      </Box>
    </>
  );
}
