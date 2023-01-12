import AddButton from "@/components/AddButton";
import BlurScreen from "@/components/BlurScreen";
import NavigationMenu from "@/containers/NavigationMenu";
import { useState } from "react";

export default function CategorySelector() {
  const [isOpen, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!isOpen);
  }

  return (
    <>
      <AddButton onOpen={handleOpen} isOpen={isOpen} />
      <NavigationMenu isOpen={isOpen} />
      <BlurScreen blur={isOpen} />
    </>
  );
}
