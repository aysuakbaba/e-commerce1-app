import { useContext } from "react";
import childClothes_data from "../../dummyData/childClothes_data"
import ClothItem from "../../components/ClothItem"
import { GridContainer } from "../../styles/ClothItem"
import { CategoryContext } from "../../context/categoryContext"
function Child() {
    const { childData } = useContext(CategoryContext)
    return(

        <GridContainer>
        {childData}
        
        
        </GridContainer>
    )
}




export default Child