import Header from "@/containers/Header";
import LinearSpinner from "@/containers/LinearSpinner";
import { setHeaderTitle } from "@/redux/modules/app/reducers";
import { useDispatch } from "react-redux";

export default function Search() {
  const dispatch = useDispatch();
  dispatch(setHeaderTitle("Категорія: undefined"));

  return (
    <>
      <Header />
      <LinearSpinner />
      Search Placeholder
    </>
  );
}
