import LoginButton from "@/components/LoginButton";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
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
      <div className={style.buttons}>
        <Link to={"/"}>
          <LoginButton label="Демо логін" />
        </Link>
      </div>
    </Box>
  );
}
