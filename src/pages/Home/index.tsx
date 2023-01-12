import AddButton from "@/components/AddButton";
import BlurScreen from "@/components/BlurScreen";
import BookmarksList from "@/containers/BookmarksList";
import NavigationMenu from "@/containers/NavigationMenu";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleOpen() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <AddButton onOpen={handleOpen} isOpen={isMenuOpen} />
      <NavigationMenu isOpen={isMenuOpen} />
      <BlurScreen blur={isMenuOpen} />
      <BookmarksList />
    </>
  );
}
