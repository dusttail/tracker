import { Button } from "@mui/material";

type Props = {
  label: string;
  className: any;
};

export default function ConfirmButton(props: Props) {
  const { label, className } = props;
  return (
    <Button
      variant="contained"
      sx={{
        marginInline: "20px",
        borderRadius: "8px",
        width: "100%",
        maxWidth: "300px",
      }}
      disableElevation
      className={className}
    >
      {label}
    </Button>
  );
}
