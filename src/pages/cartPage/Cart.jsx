import React from "react";
import { Heading } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonGroup } from '@chakra-ui/react'

import { DeleteIcon} from '@chakra-ui/icons'
import { Input ,InputGroup,InputRightElement ,Text} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

const Cart = () => {

const dispatch =useDispatch()
// const ItemCount =useSelector((store)=>store.cartReducer.Count)
const cartData =useSelector ((store)=> store.appReducer.cartData)

// console.log(ItemCount)

  return <div>
    <div style={{ display:'flex', justifyContent:'center',alignItems:'center', backgroundColor:'white',
    width:'100%',height:'100px', top:'0px',boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}>
<Heading>SHOPPING BAG
</Heading>
    </div>

<div style={{ display:'flex',marginTop:'50px', }}>
  <div style={{width:'50%',display:'flex',flexDirection:'column' ,gap:'20px',overflow:'auto'}}>
{
  cartData.map((el)=>(
    <div style={{display:'flex'}}>
   <img src ={el.image} width='30%'style={{backgroundColor:'whitesmoke'}} />
   <div style={{marginLeft:"30px"}}>
    <p>{el.title}</p>
    <p>Rs.<span>{el.discountPrice}<span style={{marginLeft:"10px",textDecoration:'line-through',color:'gray'}}>{el.salePrice}</span></span></p>
   
    <ButtonGroup variant='outline' >
  <Button colorScheme='blue' >-</Button>
  <Button colorScheme='blue' isDisabled={true}></Button>
  <Button colorScheme='blue'  >+</Button>
</ButtonGroup>

<DeleteIcon style={{marginLeft:'250px'}} />


    </div> 
   </div>
  ))
}


  </div>
  <div style={{width:'40%', margin:'auto'}}>
  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' color={'teal'} fontWeight="bold">
        COUPONS & OFFERS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} backgroundColor={'whitesmoke'}>
    ADDITIONAL OFFERS ON YOUR CART
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
      
        placeholder='Type coupon code here'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' color='teal'>
       Apply
        </Button>
      </InputRightElement>
    </InputGroup>

    <UnorderedList >
  <ListItem>Buy Any 3 Apple Watchbands @ Rs.2499 Only</ListItem>
  <ListItem>Buy Any 3 Universal Watchbands @ Rs.999 OnlyC</ListItem>
  <ListItem>Buy 1 Get 1 Free On Cases & Sale Category</ListItem>
  <ListItem>Free Bi-Fold Wallet On Orders Above Rs. 1999</ListItem>
  <ListItem>Free Duffle Bag On Orders Above Rs. 2499</ListItem>
  <ListItem>Extra 10% Cashback Upto INR 500 With ZestMoney! (*Applicable for new users only)</ListItem>
  <ListItem>Get Assured Cashback Up to Rs. 250 On Orders Above INR 1499 Via MobiKwik</ListItem>
</UnorderedList>
 </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' color={'teal'} fontWeight="bold" >
        REDEEM GIFT CARD
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
  <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' color={'black'} fontWeight="bold" >
        ORDER SUMMARY
        <Box color={'black'} fontWeight="400">
        <Box> Item Total (1 Item)<span style={{marginLeft:'385px'}}>Rs.1699</span></Box>
        <Box>Shipping<span style={{marginLeft:'480px'}}>Free</span></Box>
        </Box>
        </Box>
     </AccordionButton>
    </h2>
    </AccordionItem>

    <AccordionItem>
  <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' color={'black'} fontWeight="bold" >
      
        <Box color={'black'} fontWeight="400">
        <Box> Grand Total<span style={{marginLeft:'430px'}}>Rs.1699</span></Box>
        <Box>(Inclusive of Taxes)<span style={{marginLeft:'305px'}}>You Saved Rs.300</span></Box>
        </Box>
        </Box>
     </AccordionButton>
    </h2>
    <Button colorScheme='green' width="95%"height={'50px'} marginLeft='20px' borderRadius={'0px'}>Checkout</Button>
    </AccordionItem>

</Accordion>


  </div>
</div>


  </div>;
};

export default Cart;
