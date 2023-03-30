import { GridContainer } from "../../styles/ClothItem";
import { CategoryContext } from "../../context/categoryContext";
import { useContext, useEffect } from "react";
import axios from "axios";

function Woman() {
  const { womanData } = useContext(CategoryContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/cloth");
       
      } catch (e) {
      }
    };
    fetchData();
  }, []);

  return <GridContainer>{womanData}</GridContainer>;
}

export default Woman;
