import React, { Component } from "react"
import Card from "../Card/Card"
import Chart from "react-apexcharts"
import { barChartData, barChartOptions } from "../variables/charts"

class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: [],
      chartOptions: {},
    }
  }

  componentDidMount() {
    this.setState({
      chartData: barChartData,
      chartOptions: barChartOptions,
    })
  }

  render() {
    return (
      <Card
        py="1rem"
        height={{ sm: "300px" }}
        width="100%"
        bg="#20A87E"
        position="relative"
      >
        <Chart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="bar"
          width="100%"
          height="100%"
        />
      </Card>
    )
  }
}

export default BarChart
