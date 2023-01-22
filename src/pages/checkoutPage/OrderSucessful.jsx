
import {Heading,Text,Button} from '@chakra-ui/react'
import {CheckCircleIcon} from '@chakra-ui/icons'
import { useEffect } from 'react'
import { useState } from 'react'
export const Ordersucessful=()=>{
    const [id,setId]=useState()

    useEffect(()=>{
        const idval = Date.now()
        setId(idval)
    },[])

    const styles={
        width:'40%',
        margin:'auto',
        paddingTop:'100px',
      
        height:"400px",
        display:'flex',
        flexDirection:'column',
         
        gap:'20px',
        justifyContent:'center',
        allignItems:"center", 
     marginBottom:"100px"
      
       
        
    }
  return <div style={styles}>
    <Heading>Your order has been received</Heading>

    <CheckCircleIcon color='green' display={'flex'} justifyContent="center"boxSize={16} marginLeft="200px"  />

    <Heading size='md' marginLeft="100px"  >Thankyou for your Purchase !</Heading>
    <Heading size='md' marginLeft="100px"  >Your order Id is : {id}</Heading>
    <Button width='50%' colorScheme='yellow' as='a' href ='/' marginLeft="100px"  
 >Continue Shoping</Button>

  </div>  
}