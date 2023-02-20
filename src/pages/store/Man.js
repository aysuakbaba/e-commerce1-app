import manClothes_data from "../../dummyData/manClothes_data"
import ClothItem from "../../components/ClothItem"
import { GridContainer } from "../../styles/ClothItem"
function Man() {
    const manData = manClothes_data.map(clothes => <ClothItem key={clothes.id} img={clothes.img} category={clothes.category} price={clothes.price}/>)
    return(

        <GridContainer>
        {manData}
        
        
        </GridContainer>
    )
}




export default Man