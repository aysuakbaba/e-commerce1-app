import React from 'react'
import { Div, Image} from '../styles/ClothItem'

function ClothItem({img , category , price}) {
  return (
    <Div>
        <Image src={img} alt='product'/>
        <p>
            {category}
        </p>
        <p>
            {price}TL
        </p>
    </Div>
    
  )
}

export default ClothItem