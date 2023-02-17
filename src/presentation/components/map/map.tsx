import { LatLngExpression, LeafletMouseEventHandlerFn } from "leaflet"
import { MapContainer, TileLayer } from "react-leaflet" 
import { MapPolygon } from "../map-polygon/map-polygon"

export type MapProps = {
  center?: LatLngExpression
  neighborhoodIds: number[]
  selectedNeighborhood: number
  setSelectedNeighborhood: React.Dispatch<React.SetStateAction<number>>
  setSelectedNeighborhoodIds: React.Dispatch<React.SetStateAction<number[]>>
  setShowChart: React.Dispatch<React.SetStateAction<boolean>>
}

export function Map({center, neighborhoodIds, selectedNeighborhood, setSelectedNeighborhood, setSelectedNeighborhoodIds, setShowChart}: MapProps) {

  return(
    <MapContainer className="map" center={center} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapPolygon 
        neighborhoodIds={neighborhoodIds} 
        setSelectedNeighborhoodIds={setSelectedNeighborhoodIds} 
        selectedNeighborhood={selectedNeighborhood} 
        setSelectedNeighborhood={setSelectedNeighborhood} 
        setShowChart={setShowChart}
      />
    </MapContainer>
  )
}