import ClothItem from "../../components/ClothItem"
import womanClothes_data from "../../dummyData/womanClothes_data"


function Woman() {
    const womanData = womanClothes_data.map(clothes => <ClothItem key={clothes.id} img={clothes.img} category={clothes.category} price={clothes.price}/>)
    return(
        <div className="woman-container">
        
        {womanData}
        </div>
    )
}




export default Woman