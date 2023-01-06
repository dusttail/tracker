import { Box } from "@mui/material";
import style from "./styles.module.scss";

export default function Login() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        margin: "0",
      }}
      className={style.screen}
    >
      <div className={style.title}>Щопонеділка</div>
    </Box>
  );
}
