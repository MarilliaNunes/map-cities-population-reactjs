import './chart-empty.css'

export function ChartEmpty() {

  return(
    <div className="ChartEmpty">
      <img src='/assets/location-logo.svg'/>
      <strong>Nenhum bairro foi selecionado!</strong>
      <span>Selecione no mapa pelo menos um bairro para exibir suas informações</span>
    </div>
  )
}