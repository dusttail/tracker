import { conditionalStyle } from "@/utils/ConditionalStyle";
import { getX, normalize, vector2, vector2diff } from "@/utils/Vector2";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Card, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import styles from "./styles.module.scss";

const COMPONENT_STATE = {
  INITIALIZED: "INITIALIZED",
  MOUNTED: "MOUNTED",
  DISPOSAL: "DISPOSAL",
};

export const SLIDE_ACTION = {
  LEFT: "LEFT",
  RIGHT: "RIGHT",
};

type Props = {
  id: string;
  image: string;
  title: string;
  submitSlideAction: any;
};

export default function ItemSlide(props: Props) {
  const { id, image, title, submitSlideAction } = props;

  const ONE_HUNDRED_PERCENT = 100;
  const THRESHOLD_PERCENT = 1.5;

  const [startPosition, setStartPosition] = useState(vector2());
  const [mousePosition, setMousePosition] = useState(vector2());
  const [isDragging, setIsDragging] = useState(false);
  const [slideDisposal, setSlideDisposal] = useState("");

  // useEffect(() => {
  //   if (state === COMPONENT_STATE.INITIALIZED) {
  //     setState(COMPONENT_STATE.MOUNTED);
  //   }
  //   return () => {
  //     setState(COMPONENT_STATE.DISPOSAL);
  //   };
  // });

  function handlePress(e: any) {
    setIsDragging(true);
    setStartPosition(vector2(e));
    setMousePosition(vector2(e));
  }

  function handleDrag(e: any) {
    if (isDragging) setMousePosition(vector2(e));
  }

  function handleRelease() {
    setIsDragging(false);
    const action = getAction();
    if (action) {
      setSlideDisposal(action);
      submitSlideAction({ type: action, id });
    } else {
      setStartPosition(vector2());
      setMousePosition(vector2());
    }
  }

  function handleCancel() {
    setIsDragging(false);
    setStartPosition(vector2());
    setMousePosition(vector2());
  }

  function getAction() {
    if (
      getX(vector2diff(mousePosition, startPosition)) / ONE_HUNDRED_PERCENT >=
      THRESHOLD_PERCENT
    )
      return SLIDE_ACTION.RIGHT;
    if (
      getX(vector2diff(startPosition, mousePosition)) / ONE_HUNDRED_PERCENT >=
      THRESHOLD_PERCENT
    )
      return SLIDE_ACTION.LEFT;
  }

  return (
    <div
      className={styles.container}
      onMouseDown={handlePress}
      onMouseUp={handleRelease}
      onMouseMove={handleDrag}
      onMouseLeave={handleCancel}
      onTouchStart={handlePress}
      onTouchMove={handleDrag}
      onTouchEnd={handleRelease}
      onTouchCancel={handleCancel}
      style={{ userSelect: "none" }}
    >
      <div
        className={styles.archive}
        style={{
          opacity:
            getX(vector2diff(mousePosition, startPosition)) /
            (ONE_HUNDRED_PERCENT * THRESHOLD_PERCENT),
        }}
      >
        <CheckIcon
          fontSize="large"
          sx={{ margin: "auto 5px", stroke: "white", strokeWidth: 2 }}
        />
        Завершити
      </div>
      <div
        className={styles.remove}
        style={{
          opacity:
            getX(vector2diff(startPosition, mousePosition)) /
            (ONE_HUNDRED_PERCENT * THRESHOLD_PERCENT),
        }}
      >
        Вилучити
        <CloseIcon
          fontSize="large"
          sx={{ margin: "auto 5px", stroke: "white", strokeWidth: 2 }}
        />
      </div>
      <div
        className={`
          ${styles.card} 
          ${conditionalStyle(
            slideDisposal === SLIDE_ACTION.LEFT,
            styles.card_dispose_left
          )}
          ${conditionalStyle(
            slideDisposal === SLIDE_ACTION.RIGHT,
            styles.card_dispose_right
          )}
        `.trim()}
        style={{
          marginLeft: normalize(
            getX(vector2diff(mousePosition, startPosition)),
            window.screen.width
          ),
        }}
      >
        <Card
          sx={{
            display: "flex",
            minWidth: "340px",
          }}
          variant="elevation"
          elevation={2}
        >
          <CardMedia
            component="img"
            image={image}
            sx={{ width: "60px", height: "60px" }}
          />
          <div className={styles.card_content}>
            <Typography variant="body1" noWrap width="250px">
              {title}
            </Typography>
          </div>
        </Card>
      </div>
    </div>
  );
}
