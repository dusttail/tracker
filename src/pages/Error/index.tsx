import ConfirmButton from "@/components/ConfirmButton";
import Header from "@/containers/Header";
import { setHeaderTitle } from "@/redux/modules/app/reducers";
import { Grid, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import style from "./styles.module.scss";

export default function ErrorPage() {
  const dispatch = useDispatch();
  dispatch(setHeaderTitle(""));

  return (
    <>
      <Header />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item xs sx={{ margin: "30vh auto" }}>
          <Paper
            variant="elevation"
            sx={{
              width: "340px",
              height: "200px",
              border: "2px #DC3545 solid",
              borderRadius: "12px",
            }}
            elevation={3}
            className={style.error_message}
          >
            <span className={style.title}>Сталась помилка!</span>
            <span className={style.error}>404</span>
            <ConfirmButton label="Добре" className={style.button} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
