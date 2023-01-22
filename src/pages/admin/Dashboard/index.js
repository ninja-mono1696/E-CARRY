import { Flex, Grid, SimpleGrid, useColorModeValue } from "@chakra-ui/react"

import BarChart from "./components/Charts/BarChart"
import LineChart from "./components/Charts/LineChart"

import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "./components/Icons/Icons"
import React from "react"

import ActiveUsers from "./components/ActiveUsers"
import MiniStatistics from "./components/MiniStatistics"
import SalesOverview from "./components/SalesOverview"
export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white")
  return (
    <Flex margin="3" flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="10px">
        <MiniStatistics
          title={"Today's Earning"}
          amount={"53,000"}
          percentage={10}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Users"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"New Clients"}
          amount={"+3,020"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Sales"}
          amount={"173,00000"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="26px"
        gap="24px"
      ></Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <ActiveUsers
          title={"Active Users"}
          percentage={23}
          chart={<BarChart />}
        />{" "}
        <SalesOverview
          title={"Sales Overview"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap="24px"
      ></Grid>
    </Flex>
  )
}
