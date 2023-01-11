import Header from '@/containers/Header';
import LinearSpinner from '@/containers/LinearSpinner';
import { setHeaderTitle } from "@/redux/modules/app/reducers";
import { Box, Container } from "@mui/material";
import { useDispatch } from "react-redux";

export default function Info() {
  const dispatch = useDispatch();
  dispatch(setHeaderTitle("Info"));
  
  return (
    <>
      <Header />
      <LinearSpinner />
    </>
  );
}
