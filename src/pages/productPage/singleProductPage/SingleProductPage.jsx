import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom'

export const SingleProductPage = () => {
  const [isCart,setIsCart]=useState(false)
  const[count,setCount]=useState(0)

  const singleProduct = useSelector((store)=>(store.appReducer.singleProduct))
  console.log(singleProduct)

  const handleGoTOCart=()=>{
    
    setIsCart(true)
    setCount(count+1)
    

  }


  if(count==2){
    return  <Navigate to ='/cart'/>
    }


  return (
    <div style={{width:'100%', display:'flex'}}>

<div style={{width:'50%'}}>
  <img src={singleProduct.image}/>

</div>
<div style={{width:'40%',height:'500px' ,display:'flex',flexDirection:'column',justifyContent:'space-evenly' ,margin :'auto'}}>
  <p>{singleProduct.title}</p>
  <p>Rs. <span>{singleProduct.discountPrice}</span> <span>{singleProduct.salePrice} Inclusive of all taxes</span></p>
   <p>
Extra 10% cashback upto INR 500 with
zest-updated.png</p>

<h3>Color</h3>
<hr></hr>

<div>
  {/* add coolrs */}
</div>
<Button onClick={()=>handleGoTOCart(singleProduct.id)}colorScheme='green'>{isCart? 'Go To Cart':'Add To Cart'}</Button>
</div>

    </div>
  )
}
