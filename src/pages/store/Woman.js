import ClothItem from "../../components/ClothItem"
import womanClothes_data from "../../dummyData/womanClothes_data"


function Woman() {
    const womanData = womanClothes_data.map(clothes => <ClothItem img={clothes.img} category={clothes.category} price={clothes.price}/>)
    return(
        <div>
        
        {womanData}
        </div>
    )
}




export default Woman