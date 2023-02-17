import { sidebarData } from "../../../infra/sources/internal/sidebar-data";
import './sidebar.css'

interface SidebarProps {
  onChartToggle: () => void,
  showChart: boolean
}

export function Sidebar({ onChartToggle, showChart }: SidebarProps) {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {
          sidebarData.map( (val, key) => {
            return(
              <li 
                key={key}
                className="row"
                id={(showChart && val.label === 'charts') ? "active": ""}
                onClick={()=>{
                  if(val.label==="charts"){
                    {onChartToggle()}
                  }
                  if(val.label==="map"&&showChart){
                    {onChartToggle()}
                  }
                }}
              >
                <div id="icon">{val.icon}</div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}