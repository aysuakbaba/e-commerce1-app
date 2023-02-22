import { createContext, useEffect, useState } from "react";
import womanClothes_data from "../dummyData/womanClothes_data";
import ClothItem from "../components/ClothItem";
import manClothes_data from "../dummyData/manClothes_data";

export const CategoryContext = createContext({
  clothCategory: "",
  changeCategory: (category) => {},
  womanData: [],
  manData: [],
  childData: [],
  findSameWomanCategory: (category) => {},
  findSameManCategory: (category) => {}
});

export default function CategoryContextProvider({ children }) {
  const [clothCategory, setClothCategory] = useState("");
  const [womanData, setWomanData] = useState([]);
  const [manData, setManData] = useState([]);
  
  function changeCategory(category) {
    setClothCategory(category);
    defaultData()
  }

  function defaultData(){
    setWomanData(
      womanClothes_data.map((clothes) => (
        <ClothItem
          key={clothes.id}
          img={clothes.img}
          category={clothes.category}
          price={clothes.price}
        />
      ))
    );
    setManData(
      manClothes_data.map((clothes) => 
      <ClothItem
        key={clothes.id}
        img={clothes.img}
        category={clothes.category}
        price={clothes.price}
      />
      )
    )

  }

  useEffect(() => {
    defaultData()
    
  }, []);

  

  function findSameWomanCategory(category) {
    const found = womanClothes_data.filter((woman) => woman.category === category);
    const foundWoman = found.map((clothes) => (
      <ClothItem
        key={clothes.id}
        img={clothes.img}
        category={clothes.category}
        price={clothes.price}
      />
    ));
    
    setWomanData(foundWoman)
  }


  function findSameManCategory(category) {
    const found = manClothes_data.filter((man) => man.category === category);
    const foundMan = found.map((clothes) => (
      <ClothItem
        key={clothes.id}
        img={clothes.img}
        category={clothes.category}
        price={clothes.price}
      />
    ));
    
    setManData(foundMan)
  }



  const value = {
    clothCategory: clothCategory,
    changeCategory: changeCategory,
    womanData: womanData,
    manData: manData,
    findSameWomanCategory: findSameWomanCategory,
    findSameManCategory: findSameManCategory
  };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
