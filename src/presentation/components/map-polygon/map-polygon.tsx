import { GeoJsonProperties, GeoJsonTypes } from "geojson"
import { GeoJSONFeature } from "highcharts"
import { LatLngExpression, LeafletMouseEventHandlerFn, PathOptions } from "leaflet"
import { Polygon, Tooltip } from "react-leaflet" 
import { coordinates } from "../../../infra/index"
import { MapProps } from "../map/map"

export function MapPolygon({ neighborhoodIds, setSelectedNeighborhoodIds, setSelectedNeighborhood, setShowChart }: MapProps) {

  const setPathOptions = (neighborhoodIds: number[], neighborhoodId: number): PathOptions=>{
    if(neighborhoodIds.includes(neighborhoodId)){
      return { color: 'green'}
    } else {
      return { color: 'purple'}
    }
  }
 
  return(
    <div>
      {
        coordinates.features.map((neighborhood: GeoJSONFeature) => {
          const coordinates: LatLngExpression[] = neighborhood.geometry.coordinates[0][0].map((item: LatLngExpression[]) => [item[1], item[0]])
          const neighborhoodId = neighborhood.properties.id
          return(
            <Polygon 
              key={`${neighborhood.properties.id}${neighborhood.properties.name}`}
              eventHandlers={{
                click: (e) => {
                  const index = neighborhoodIds.indexOf(neighborhoodId)
                  let newNeighborhoodIds = [...neighborhoodIds]

                  if(index > -1) {
                    newNeighborhoodIds.splice(index, 1)
                  } else {
                    newNeighborhoodIds.push(neighborhoodId)
                  }
                  setSelectedNeighborhoodIds(newNeighborhoodIds)
                  setSelectedNeighborhood(0)
                  setShowChart(true)
                }}}
              pathOptions={setPathOptions(neighborhoodIds, neighborhoodId)} 
              positions={coordinates}
            >
              <Tooltip sticky>{neighborhood.properties.name}</Tooltip>
            </Polygon>
          )
        })
      }
    </div>
  )
}