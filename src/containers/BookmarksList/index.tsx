import { archiveBookmark, deleteBookmark } from "@/redux/modules/bookmarks/reducers";
import { getBookmarksList } from "@/redux/modules/bookmarks/selectors";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import ItemSlide, { SLIDE_ACTION } from "../../components/ItemSlide";
import styles from "./styles.module.scss";

type Props = {
  data?: any[];
};

function BookmarksList(props: Props) {
  const { data } = props;
  const dispatch = useDispatch();
  const [slideAction, setSlideAction] = useState({ type: null, id: null });

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
    <ul className={styles.item_list}>
      {data && data.map((item: any) => (
        <li key={item.id}>
          <ItemSlide
            image={item.image}
            title={item.title}
            id={item.id}
            submitSlideAction={setSlideAction}
          />
        </li>
      ))}
    </ul>
  );
}

export default connect(getBookmarksList)(BookmarksList);
