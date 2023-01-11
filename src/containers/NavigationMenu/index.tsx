import { Card, Fade } from "@mui/material";
import styles from "./styles.module.scss";

type Props = {
  isOpen: boolean;
};

export default function NavigationMenu(props: Props) {
  const { isOpen } = props;

  return (
    <Fade in={isOpen}>
      <Card className={styles.menu_container}>
        Enim proident ipsum eiusmod ea pariatur exercitation veniam commodo
        cupidatat in incididunt occaecat. Dolore laborum nisi ad laboris
        incididunt exercitation reprehenderit adipisicing minim. Voluptate elit
        consectetur ullamco occaecat cupidatat excepteur sunt nostrud eiusmod.
        Aliqua excepteur Lorem exercitation esse mollit dolore exercitation
        reprehenderit. Laborum incididunt laboris nulla duis cupidatat.
      </Card>
    </Fade>
  );
}
