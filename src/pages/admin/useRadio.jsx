import {useRadio,useRadioGroup,Box,HStack} from  '@chakra-ui/react'
import { useState } from 'react'
function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
   
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          fontSize='sm'
          fontWeight="medium"
          borderWidth='1px'
          borderRadius="60px"
          _checked={{
            bg:`${props.value}`,
            color: 'white',
          }}
          _focus={{
            boxShadow: 'solid',
          }}
          px={5}
          py={3}
        >
            
          {props.children}
        </Box>
      </Box>
    )
  }
  
  
 export const  Example=({onChange})=> {
    
    const options = ['Blue', 'Green', 'Red',"Orange","Cyan"]
    const handleChange=(e)=>{
            onChange(e.target.value)
        
    }
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'colors',
      defaultValue: 'Blue',
    //   onChange:console.log,
    })
  
    const group = getRootProps()
  
    return (
      <HStack onChange={handleChange} {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
        <RadioCard name="color" key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
    )
  }

