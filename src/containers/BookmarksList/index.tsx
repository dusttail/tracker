import {
  archiveBookmark,
  deleteBookmark,
} from "@/redux/modules/bookmarks/reducers";
import { getBookmarksList } from "@/redux/modules/bookmarks/selectors";
import { Collapse, List } from "@mui/material";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import ItemSlide, { SLIDE_ACTION } from "../../components/ItemSlide";

type Props = {
  data?: any[];
};

function BookmarksList(props: Props) {
  const { data } = props;
  const dispatch = useDispatch();
  const [slideAction, setSlideAction] = useState({
    type: null,
    id: null,
  });

  useEffect(() => {
    if (slideAction.id && slideAction.type === SLIDE_ACTION.LEFT) {
      dispatch(deleteBookmark(slideAction.id));
      setSlideAction({ type: null, id: null });
    }
    if (slideAction.id && slideAction.type === SLIDE_ACTION.RIGHT) {
      dispatch(archiveBookmark(slideAction.id));
      setSlideAction({ type: null, id: null });
    }
  }, [slideAction]);

  return (
    <List>
      <TransitionGroup>
        {data &&
          data.map((item: any) => (
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
    </List>
  );
}

export default connect(getBookmarksList)(BookmarksList);
