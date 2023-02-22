import { GridContainer } from "../../styles/ClothItem"
import { CategoryContext } from "../../context/categoryContext"
import { useContext } from "react"


function Woman() {
    const {womanData} = useContext(CategoryContext)
    return(
        <GridContainer>
            {womanData}
        
        </GridContainer>
    )
}




export default Woman