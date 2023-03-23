import { createContext, useEffect, useState } from "react";
import womanClothes_data from "../dummyData/womanClothes_data";
import ClothItem from "../components/ClothItem";
import manClothes_data from "../dummyData/manClothes_data";
import axios from "axios";


export const CategoryContext = createContext({
  clothCategory: "",
  changeCategory: (category) => {},
  womanData: [],
  manData: [],
  childData: [],
  favourites: [],
  findSameWomanCategory: (category) => {},
  findSameManCategory: (category) => {},
  addToFavourites: (clothObj) => {},
  removeFavourite: (id) => {}
});

export default function CategoryContextProvider({ children }) {
  const [clothCategory, setClothCategory] = useState("");
  const [womanData, setWomanData] = useState([]);
  const [manData, setManData] = useState([]);
  const [childData, setChildData] = useState([]);
  const [favourites, setFavourites] = useState([])
  

  useEffect(() => {
    console.log(favourites)
    

  },[favourites])


  function addToFavourites(clothObj){
    setFavourites(prevFav =>
      [
        ...prevFav,
        clothObj
      ]
    )

  }

  function removeFavourite(id){
    setFavourites(prevFav => prevFav.filter(item => item.id !== id))

  }

  function changeCategory(category) {
    setClothCategory(category);
    defaultData();
  }

  async function defaultData() {
    try {
      const response = await axios.get("/cloth");
      const womanData = response.data.filter((data) => data.gender === "Woman");
      console.log(womanData)
      setWomanData(
        womanData.map((clothes) => (
          <ClothItem
            key={clothes._id}
            id={clothes._id}
            category={clothes.category}
            price={clothes.price}
            img={clothes.img}
          />
        ))
      );

      const manData = response.data.filter((data) => data.gender === "Man");
      setManData(
        manData.map((clothes) => (
          <ClothItem
            key={clothes._id}
            id={clothes._id}
            img={clothes.img}
            category={clothes.category}
            price={clothes.price}
          />
        ))
      );

      const childData = response.data.filter((data) => data.gender === "Child");
      setChildData(
        childData.map((clothes) => (
          <ClothItem
            key={clothes._id}
            id={clothes._id}
            img={clothes.img}
            category={clothes.category}
            price={clothes.price}
          />
        ))
      );
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    defaultData();
  }, []);

  function findSameWomanCategory(category) {
    const found = womanClothes_data.filter(
      (woman) => woman.category === category
    );
    const foundWoman = found.map((clothes) => (
      <ClothItem
        key={clothes._id}
        id={clothes._id}
        img={clothes.img}
        category={clothes.category}
        price={clothes.price}
      />
    ));

    setWomanData(foundWoman);
  }

  function findSameManCategory(category) {
    const found = manClothes_data.filter((man) => man.category === category);
    const foundMan = found.map((clothes) => (
      <ClothItem
            id={clothes._id}
            key={clothes._id}
        img={clothes.img}
        category={clothes.category}
        price={clothes.price}
      />
    ));

    setManData(foundMan);
  }

  const value = {
    clothCategory: clothCategory,
    changeCategory: changeCategory,
    womanData: womanData,
    manData: manData,
    childData: childData,
    favourites: favourites,
    addToFavourites: addToFavourites,
    removeFavourite: removeFavourite,
    findSameWomanCategory: findSameWomanCategory,
    findSameManCategory: findSameManCategory,
  };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
