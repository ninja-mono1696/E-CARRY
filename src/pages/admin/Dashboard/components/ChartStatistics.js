import { Flex, Progress, Text, useColorModeValue } from "@chakra-ui/react"
import IconBox from "./Icons/IconBox"
import React from "react"

const ChartStatistics = ({ title, amount, icon, percentage }) => {
  const iconTeal = useColorModeValue("teal.300", "teal.300")
  const textColor = useColorModeValue("gray.700", "white")

  return (
    <Flex direction="column">
      <Flex alignItems="center">
        <IconBox as="box" h={"30px"} w={"30px"} bg={"#20A87E"} me="6px">
          {icon}
        </IconBox>
        <Text fontSize="sm" color="gray.400" fontWeight="semibold">
          {title}
        </Text>
      </Flex>
      <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px" my="6px">
        {amount}
      </Text>
      <Progress
        colorScheme="teal"
        borderRadius="12px"
        h="5px"
        value={percentage}
      />
    </Flex>
  )
}

export default ChartStatistics
