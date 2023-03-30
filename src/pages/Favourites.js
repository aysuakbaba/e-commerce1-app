import { useContext } from "react";
import FavouritesCard from "../components/FavouritesCard";
import MainNavigation from "../components/MainNavigation"
import { CategoryContext } from "../context/categoryContext";




function Favourites() {
    const {favourites} = useContext(CategoryContext)
    const favouritesCard = favourites.map((item) => {
        return(
            <FavouritesCard
                key={item.id}
                img={item.img}
                category={item.category}
                price={item.price}
            />
        )
    })


    return(
        <>
        <MainNavigation/>
        {favouritesCard}

        
        </>
    )
}




export default Favourites