import { getNeighborhoodProperties } from './get-neighborhod-name'
import { default as neighborhoodPopulation } from './sources/external/populacao_bairros.json'

interface NeighborhoodSerie {
  name?: string
  data: number[]
}

export const getNeighborhoodPopulation = (neighborhoodId: number): NeighborhoodSerie => {
  const filteredPopulation = neighborhoodPopulation.filter((item)=>item.id_geometria===neighborhoodId)
  const getNeighborhoodPopulation = filteredPopulation.map((item)=>{
    return item.populacao
  })
  const neighborhoodName = getNeighborhoodProperties(neighborhoodId)

  const neighborhoodSerie = {
    name: neighborhoodName?.name,
    data: getNeighborhoodPopulation
  }
  return neighborhoodSerie
}


