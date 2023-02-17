import { ChartEmpty } from '../chart-empty/chart-empty'
import { Chart } from '../chart/chart'
import { MapProps } from '../map/map'
import { DropdownSelect } from '../dropdown-select/dropdown-select';
import './chart-area.css'
import { getNeighborhoodProperties } from '../../../infra';

export function ChartArea({ neighborhoodIds, selectedNeighborhood, setSelectedNeighborhood }: MapProps) {

  const selectedNeighborhoodProperties = getNeighborhoodProperties(selectedNeighborhood)

  return(
    <div className='chart-area-background' >
      <div className='square-space'>
        <div className='chart-title'>Informações</div>
        <div className='chart-area'>
          <div className='dropdown'>
            <label className='label'>Bairro</label>
            <DropdownSelect neighborhoodIds={neighborhoodIds} selectedNeighborhood={selectedNeighborhood}
              setSelectedNeighborhood={setSelectedNeighborhood}
            />
            <label className='label'>Setor</label>
            <label className='input-label'>{selectedNeighborhoodProperties?.sector ? selectedNeighborhoodProperties.sector : ''}</label>
            <label className='label'>Zona</label>
            <label className='input-label'>{selectedNeighborhoodProperties?.zone ? selectedNeighborhoodProperties.zone : ''}</label>
          </div>
        </div>
      </div>
      <div className='square-space'>

        <div className='chart-title'>Evolução Populacional</div>
        <div className='chart-area'>
          {neighborhoodIds.length > 0 ? <Chart neighborhoodIds={neighborhoodIds}/> : <ChartEmpty/>}  
        </div>
      </div>
    </div>
  )
}

