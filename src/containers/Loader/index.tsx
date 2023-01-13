import { LOADING } from "@/redux/modules/app/actions";
import { getAppState } from "@/redux/modules/app/selectors";
import { CircularProgress, Collapse } from "@mui/material";
import { useCallback } from "react";
import { connect } from "react-redux";
import styles from "./styles.module.scss";

type Props = {
  observer: React.MutableRefObject<IntersectionObserver | undefined>;
  while: unknown;
  callback?(...args: any): void;
  state?: string;
};

function Loader(props: Props) {
  const ref = useCallback(
    (node: HTMLDivElement) => {
      if (props.observer.current) props.observer.current.disconnect();
      props.observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && props.callback) props.callback();
      });
      if (node) props.observer.current.observe(node);
    },
    [props.while]
  );

  return (
    <div ref={ref} className={styles.loader}>
      <Collapse in={props.state === LOADING} unmountOnExit>
        <CircularProgress size={30} />
      </Collapse>
    </div>
  );
}

export default connect(getAppState)(Loader);
