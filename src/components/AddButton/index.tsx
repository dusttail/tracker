import { conditionalStyle } from "@/utils/ConditionalStyle";
import AddIcon from "@mui/icons-material/Add";
import { Box, Fab } from "@mui/material";
import styles from "./styles.module.scss";

type Props = {
  isOpen: boolean;
  onOpen: any;
};

export default function AddButton(props: Props) {
  const { isOpen, onOpen } = props;

  return (
    <Box className={styles.add_button_container}>
      <Fab color="secondary" aria-label="add" size="large" onClick={onOpen}>
        <div
          className={`
            ${styles.icon}
            ${conditionalStyle(isOpen, styles.open, styles.close)}
          `.trim()}
        >
          <AddIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
        </div>
      </Fab>
    </Box>
  );
}
