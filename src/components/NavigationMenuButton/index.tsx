import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

type Props = {
  link: string;
  label: string;
};

export default function NavigationMenuButton(props: Props) {
  const { label, link } = props;

  return (
    <Link to={link} className={styles.link}>
      <div className={styles.button}>{label}</div>
    </Link>
  );
}
