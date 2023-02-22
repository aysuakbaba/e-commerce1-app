import { createContext, useState } from "react";

export const CategoryContext = createContext({
  clothCategory: "",
  changeCategory: (category) => {},
});

export default function CategoryContextProvider({ children }) {
  const [clothCategory, setClothCategory] = useState("");
  function changeCategory(category) {
    setClothCategory(category);
  }

  const value = {
    clothCategory: clothCategory,
    changeCategory: changeCategory,
  };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
