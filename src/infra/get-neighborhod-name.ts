import { default as coordinates } from './sources/external/geometrias_bairros.json'


interface NeiborhoodPropertiesObject {
  id: number
  name: string
  sector: string
  zone: string
}

export const getNeighborhoodProperties = (neighborhoodId: number): NeiborhoodPropertiesObject => {
  const neighborhoodMap = coordinates.features.map((feature)=>{
    return {
      id: feature.properties.id,
      name: feature.properties.name,
      sector: feature.properties.setor,
      zone: feature.properties.zona
    }
  })

  const neighborhoodPropertiesObject = neighborhoodMap.filter((item)=>item.id === neighborhoodId)

  return neighborhoodPropertiesObject[0]
}
