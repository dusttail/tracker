import BookmarksList from "@/containers/BookmarksList";
import CategorySelector from "@/containers/CategorySelector";

export default function Home() {
  return (
    <>
      <CategorySelector />
      <BookmarksList />
    </>
  );
}
