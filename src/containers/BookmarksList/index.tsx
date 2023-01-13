import Loader from "@/containers/Loader";
import { Bookmark } from "@/redux/modules/bookmarks/mock/types";
import {
  archiveBookmark,
  deleteBookmark,
  loadBookmarks,
} from "@/redux/modules/bookmarks/reducers";
import { getBookmarksList } from "@/redux/modules/bookmarks/selectors";
import { Collapse, List } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import ItemSlide, { SLIDE_ACTION } from "../../components/ItemSlide";

type Props = {
  data: Bookmark[];
};

function BookmarksList(props: Props) {
  const { data } = props;
  const dispatch = useDispatch();
  const [slideAction, setSlideAction] = useState({ type: null, id: null });
  const [list, setList] = useState<Bookmark[]>(data ?? []);

  const [next, setNext] = useState<string>();
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (slideAction.id && slideAction.type === SLIDE_ACTION.LEFT) {
      dispatch(deleteBookmark(slideAction.id));
      setList(list.filter((item) => item.id !== slideAction.id));
      setSlideAction({ type: null, id: null });
    }
    if (slideAction.id && slideAction.type === SLIDE_ACTION.RIGHT) {
      dispatch(archiveBookmark(slideAction.id));
      setList(list.filter((item) => item.id !== slideAction.id));
      setSlideAction({ type: null, id: null });
    }
  }, [slideAction]);

  useEffect(() => {
    dispatch(loadBookmarks(next));
  }, [next]);

  useEffect(() => {
    console.log("log data", data);
  });

  const handleLoad = () => {
    console.log(data);
    console.log(list);
    console.log(data.length);
    if (data.length) {
      console.log("loading");
      setNext(data[data.length - 1].id);
    }
  };

  return (
    <List>
      <TransitionGroup>
        {data.map((item: any) => (
          <Collapse key={item.id}>
            <ItemSlide
              id={item.id}
              key={item.index}
              image={item.image}
              title={item.title}
              submitSlideAction={setSlideAction}
            />
          </Collapse>
        ))}
      </TransitionGroup>
      <Loader observer={observer} while={next} callback={handleLoad} />
    </List>
  );
}

export default connect(getBookmarksList)(BookmarksList);
