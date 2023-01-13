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
  const [list, setList] = useState<Bookmark[]>([]);

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
    setList(data);
  }, [data]);

  const handleLoad = () => {
    if (list.length) dispatch(loadBookmarks(list[list.length - 1].id));
    else dispatch(loadBookmarks());
  };

  console.log(data.length);

  return (
    <List>
      <TransitionGroup>
        {list.map((item: any) => (
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
      <Loader observer={observer} callback={handleLoad} />
    </List>
  );
}

export default connect(getBookmarksList)(BookmarksList);
