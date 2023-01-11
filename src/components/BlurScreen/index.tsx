import styles from "./styles.module.scss";

type Props = {
  blur: boolean;
};

export default function BlurScreen(props: Props) {
  const { blur } = props;

  return blur ? <div className={styles.blur} /> : <></>;
}
