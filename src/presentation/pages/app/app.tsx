import { useState } from 'react'
import './app.css'
import { ChartArea, Map, Sidebar } from '../../components/index'


export function App() {
  const [showChart, setShowChart] = useState<boolean>(false)

  const toggleChart = () => setShowChart(!showChart)

  const [selectedNeighborhoodIds, setSelectedNeighborhoodIds] = useState<number[]>([])

  const [ selectedNeighborhood, setSelectedNeighborhood] = useState<number>(0)

  return (
    <div className="container">
      <Map 
        center={[-23.229499587601683, -45.91263486326077]} 
        neighborhoodIds={selectedNeighborhoodIds} 
        setSelectedNeighborhoodIds={setSelectedNeighborhoodIds} 
        selectedNeighborhood={selectedNeighborhood} 
        setSelectedNeighborhood={setSelectedNeighborhood} 
        setShowChart={setShowChart}
      />
      
      {
        showChart 
        && 
        <ChartArea 
          neighborhoodIds={selectedNeighborhoodIds} 
          setSelectedNeighborhoodIds={setSelectedNeighborhoodIds} 
          selectedNeighborhood={selectedNeighborhood} 
          setSelectedNeighborhood={setSelectedNeighborhood} 
          setShowChart={setShowChart}
        />
      }
      
      <Sidebar onChartToggle={toggleChart} showChart={showChart}/>
    </div>
    
  )
}
