import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { getNeighborhoodPopulation } from '../../../infra/get-neighborhood-population'

interface ChartProps {
  neighborhoodIds: number[]
}

export function Chart({neighborhoodIds}: ChartProps) {

  const dataSeries = neighborhoodIds.map((item) => getNeighborhoodPopulation(item))

  const highchartsOptions = {
    chart: {
      type: 'column'
    },
    title: {
        text: undefined
    },
    xAxis: {
        categories: ['2000', '2002', '2004', '2006']
          },
    yAxis: {
        min: 0,
        title: {
            text: 'População',
            align: 'middle'
        }
    },
    tooltip: {
        valueSuffix: ' habitantes'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },

    series: dataSeries

    }
  return(
    <HighchartsReact highcharts={Highcharts} options={highchartsOptions}/>
  )
}