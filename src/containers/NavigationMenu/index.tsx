import NavigationMenuButton from "@/components/NavigationMenuButton";
import { Fade, List, Paper } from "@mui/material";
import styles from "./styles.module.scss";

type Props = {
  isOpen: boolean;
};

export default function NavigationMenu(props: Props) {
  const { isOpen } = props;

  return (
    <Fade in={isOpen}>
      <Paper className={styles.menu_container}>
        <List>
          <NavigationMenuButton label={"📚 Книги"} link={"/search?books"} />
          <NavigationMenuButton label={"🎞️ Фільми"} link={"/search?movies"} />
          <NavigationMenuButton label={"🍥 Аніме"} link={"/search?anime"} />
          <NavigationMenuButton label={"🎴 Манга"} link={"/search?manga"} />
        </List>
      </Paper>
    </Fade>
  );
}
