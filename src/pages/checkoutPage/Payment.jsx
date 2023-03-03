import React from "react";

import { Heading, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

import { DeleteIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import { getuserAddress, postuserAddress } from "../../redux/appReducer/action";
import { useEffect } from "react";
import { useState } from "react";

// const initAdress={
//   FullName:"",
//   EmailAddress :"",
//   Pincode : "",
//   City:"",
//   State :"",
//   Countery:"",
//   FlatNumber : "",
//   Area:"",
//   Landmark : "",
// }

const Payment = () => {
  const [upiId, setUpiId] = useState("");

  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const dispatch = useDispatch();
  // const ItemCount =useSelector((store)=>store.cartReducer.Count)
  const userAddress = useSelector((store) => store.appReducer.userAddress);
  // const [userAddress,setUserAdress]= React.useState(initAdress)

  // console.log(ItemCount)

  const styles = {
    color: "green",
    textDecoration: "underline",
    cursor: "pointer",
  };

  console.log(userAddress);

  const handleAddressANdCheckout = () => {
    dispatch(postuserAddress(userAddress));
    console.log(userAddress);

    navigate("/checkout");
  };
  return (
    <div style={{ marginBottom: "20%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          width: "100%",
          height: "100px",
          top: "0px",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}>
        <Heading>CHECKOUT</Heading>
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            overflow: "auto",
            borderRight: "2px solid whitesmoke",
          }}>
          <div
            style={{
              margin: "auto",
              backgroundColor: "whitesmoke",
              width: "70%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}>
            <Text fontWeight="bold">PAYMENT METHOD</Text>
            <Text onClick={onOpen} style={styles}>
              UPI{" "}
            </Text>
            <Text style={styles}>Dabit/Credit Card</Text>

            <Text style={styles}>Paytm</Text>
            <Text style={styles}>Phone pay</Text>
            <Text style={styles}>Net Banking</Text>
          </div>
        </div>

        <div style={{ width: "40%", margin: "auto" }}>
          <Accordion allowToggle marginTop="50px">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    color={"black"}
                    fontWeight="bold">
                    ORDER SUMMARY
                    <Box color={"black"} fontWeight="400">
                      <Box>
                        {" "}
                        Item Total (1 Item)
                        <span style={{ marginLeft: "385px" }}>Rs.1699</span>
                      </Box>
                      <Box>
                        Shipping
                        <span style={{ marginLeft: "480px" }}>Free</span>
                      </Box>
                    </Box>
                  </Box>
                </AccordionButton>
              </h2>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    color={"black"}
                    fontWeight="bold">
                    <Box color={"black"} fontWeight="400">
                      <Box>
                        {" "}
                        Grand Total
                        <span style={{ marginLeft: "430px" }}>Rs.1699</span>
                      </Box>
                      <Box>
                        (Inclusive of Taxes)
                        <span style={{ marginLeft: "305px" }}>
                          You Saved Rs.300
                        </span>
                      </Box>
                    </Box>
                  </Box>
                </AccordionButton>
              </h2>
              <Button
                colorScheme="green"
                width="95%"
                height={"50px"}
                marginLeft="20px"
                borderRadius={"0px"}>
                Checkout
              </Button>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>ADD UPI DETAILS</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel color="red">UPI</FormLabel>
                      <Input
                        focusBorderColor="red"
                        variant="flushed"
                        name="UPI_ID"
                        ref={initialRef}
                        placeholder="UPI ID"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                      />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      colorScheme="green"
                      width="100%"
                      as="a"
                      href="/payment/os">
                      CONTINUE
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Payment;
