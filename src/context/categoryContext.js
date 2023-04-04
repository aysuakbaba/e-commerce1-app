import { createContext, useCallback, useEffect, useState } from "react";
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
  logInError: false,
  registerError: false,
  isLoggedIn: false,
  findSameWomanCategory: (category) => {},
  findSameManCategory: (category) => {},
  addToFavourites: (favourites) => {},
  removeFavourite: (id) => {},
  handleLogin: (email, password) => {},
  handleRegister: (name, surname, email, password) => {},
});

export default function CategoryContextProvider({ children }) {
  const [clothCategory, setClothCategory] = useState("");
  const [womanData, setWomanData] = useState([]);
  const [manData, setManData] = useState([]);
  const [childData, setChildData] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logInError, setLogInError] = useState(false);
  const [registerError, setRegisterError] = useState(false)

  const injectToken = (token) => {
    axios.defaults.headers.Authorization = "Bearer " + token;
  };

  // const addToFavourites = async (id) => {
  //   try{
  //     const response = await axios.post('/user/favourites/' + id)
  //     console.log(response)

  //   }catch(e){
  //     console.log(e.message)

  //   }
  // }

  const handleRegister = async (name, surname, email, password) => {
    try {
      const response = await axios.post("/user", {
        name,
        surname,
        email,
        password,
      });
      console.log(response)
      if(response?.data?.token){
        const dbResult = response.data
        const token = dbResult.token
        const user = {
          ...dbResult.user,
          username: dbResult.user.name + " " + dbResult.user.surname
        }
        setUser(user)
        setToken(token)
        injectToken(token)
        setIsLoggedIn(true);
        setRegisterError(false);
        return

      }
      setRegisterError(true)
    } catch (e) {
      setRegisterError(true);
      console.log(e.message);
    }
  };

  const handleLogin = useCallback(async (email, password) => {
    try {
      const response = await axios.post("/user/login", {
        email,
        password,
      });
      console.log(response);

      if (response?.data?.token) {
        const dbResult = response.data;
        const token = dbResult.token;
        const user = {
          ...dbResult.user,
          username: dbResult.user.name + " " + dbResult.user.surname,
        };
        console.log(user);

        setUser(user);
        setToken(token);
        injectToken(token);
        setIsLoggedIn(true);
        setLogInError(false);
        return;
      }
      setIsLoggedIn(false)
      setLogInError(true);
    } catch (e) {
      setLogInError(true);

      console.log(e.message);
    }
  }, []);

  

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
    logInError: logInError,
    registerError: registerError,
    removeFavourite: removeFavourite,
    findSameWomanCategory: findSameWomanCategory,
    findSameManCategory: findSameManCategory,
    handleLogin: handleLogin,
    handleRegister: handleRegister,
  };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
