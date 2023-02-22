import childClothes_data from "../../dummyData/childClothes_data"
import ClothItem from "../../components/ClothItem"
import { GridContainer } from "../../styles/ClothItem"
function Child() {
    const childData = childClothes_data.map(clothes => <ClothItem key={clothes.id} img={clothes.img} category={clothes.category} price={clothes.price}/>)
    return(

        <GridContainer>
        {childData}
        
        
        </GridContainer>
    )
}




export default Child