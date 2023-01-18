import React, { useState } from "react";
import {
  FormControl,
  FormLabel,Input,Box, Container, Button,Text
} from '@chakra-ui/react'
import {Example} from "./useRadio"
const init={
  title:"",
  image:"",
  salePrice:"",
  discountPrice:"",
  category:"",
  color:""
}
const Admin = () => {
 const [data,setData]= useState(init)
  const handleChange=(e)=>{
   if (e.type=="change") setData({...data,color:e.target.value}) 
   else{
    const {value,name}= e.target
    setData({...data,[name]:value})
    console.log(data);
   }
    
}
let { title, image, salePrice, discountPrice, category,color } = data
  return (
    <Box backgroundColor='#F9F9F9'>
      <Container p={15} backgroundColor="white" h="635px"> 
      <Text fontSize='3xl' mt={-13} textAlign='center'>Add Product</Text>
    <FormControl   >
      <FormLabel>Product Name</FormLabel>
    <Input value={title} name="title" onChange={handleChange} type="text" />
      <FormLabel>Product Image Url</FormLabel>
    <Input value={image} name="image" onChange={handleChange} />
  
      <FormLabel>Product Sale Price</FormLabel>
    <Input value={salePrice} name="salePrice" onChange={handleChange} />
      <FormLabel>Product Discount Price</FormLabel>
    <Input value={discountPrice} name="discountPrice" onChange={handleChange}  />
      <FormLabel>Product Category</FormLabel>
       <Input value={category} name="category" onChange={handleChange} />
       <Box mt={5} >
      <Text fontSize='1xl' mt={-4} p={1} fontWeight="semibold" >Select Color</Text>
      <Example onChange={handleChange} />
      </Box>
      <Box ml={200} mt={5}>
        
      <Button type="submit" colorScheme='green'  >Submit</Button>
      </Box>
</FormControl>
    </Container>
      </Box>
  
  )
};

export default Admin;
