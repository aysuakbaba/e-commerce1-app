import { useContext } from "react";
import { CategoryContext } from "../../context/categoryContext";
import { GridContainer } from "../../styles/ClothItem";
function Man() {
  const { manData } = useContext(CategoryContext);

  return <GridContainer>{manData}</GridContainer>;
}

export default Man;
