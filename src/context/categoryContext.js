import { createContext, useEffect, useState, useCallback } from "react";
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
  user: {},
  token: "",
  isLoggedIn: false,
  findSameWomanCategory: (category) => {},
  findSameManCategory: (category) => {},
  addToFavourites: (clothObj) => {},
  removeFavourite: (id) => {},
  handleLogin: (email, password) => {},
});

export default function CategoryContextProvider({ children }) {
  const [clothCategory, setClothCategory] = useState("");
  const [womanData, setWomanData] = useState([]);
  const [manData, setManData] = useState([]);
  const [childData, setChildData] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)



  const injectToken = token => {
    axios.defaults.headers.Authorization = 'Bearer ' + token
  }

  const handleLogin = useCallback(async (email, password) => {
    const response = await axios.post("/user/login", {
      email,
      password
    });
    console.log(response)

    if (response?.data?.token) {
      const token = response.data.token
      const user = response.data.user
      console.log(token)
      console.log(user)

      setUser(user)
      setToken(token)
      injectToken(token)
      setIsLoggedIn(true)
    }
  }, [])

  function addToFavourites(clothObj) {
    setFavourites((prevFav) => [...prevFav, clothObj]);
  }

  function removeFavourite(id) {
    setFavourites((prevFav) => prevFav.filter((item) => item.id !== id));
  }

  function changeCategory(category) {
    setClothCategory(category);
    defaultData();
  }

  async function defaultData() {
    try {
      const response = await axios.get("/cloth");
      const womanData = response.data.filter((data) => data.gender === "Woman");
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
    user: user,
    token: token,
    isLoggedIn: isLoggedIn,
    addToFavourites: addToFavourites,
    removeFavourite: removeFavourite,
    findSameWomanCategory: findSameWomanCategory,
    findSameManCategory: findSameManCategory,
    handleLogin: handleLogin,
  };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
