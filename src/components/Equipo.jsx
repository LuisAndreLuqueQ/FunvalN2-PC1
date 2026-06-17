import Cards from "./Cards"
import { miembrosEquipo } from "/src/teamData.js"


function Equipo(){

    return(
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {miembrosEquipo.map((m) => (
        <Cards 
            key={m.id} 
            nombre={m.nombre} 
            rol={m.rol} 
            foto={m.foto} 
        />
        ))}
    </div>     
    )
}

export default Equipo