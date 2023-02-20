import ClothItem from "../../components/ClothItem"
import womanClothes_data from "../../dummyData/womanClothes_data"
import { GridContainer } from "../../styles/ClothItem"


function Woman() {
    const womanData = womanClothes_data.map(clothes => <ClothItem key={clothes.id} img={clothes.img} category={clothes.category} price={clothes.price}/>)
    return(
        <GridContainer>
        
        {womanData}
        </GridContainer>
    )
}




export default Woman