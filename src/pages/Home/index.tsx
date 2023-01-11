import Header from "@/components/Header";
import BookmarksList from "@/containers/BookmarksList";
import LinearSpinner from "@/containers/LinearSpinner";
import { Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <LinearSpinner />
      <Box>
        <Stack alignItems="center" spacing={0} sx={{ margin: "20px auto" }}>
          <BookmarksList />
        </Stack>
      </Box>
    </>
  );
}
