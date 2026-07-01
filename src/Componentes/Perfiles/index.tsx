import type { FotoPerfilProps} from "../../types"
import FotoPerfil from "../FotoPerfil"
import './perfiles.css'

const Perfiles:React.FC<FotoPerfilProps> = ({perfiles}) =>{
     return(
        <section className="perfiles-container">
            {perfiles.map((item) => (
        <div className="perfil-container">
          <FotoPerfil foto={item.foto} nombre={item.nombre} />
          <h4>{item.nombre}</h4>
        </div>
      ))}
        </section>
     )
}

export default Perfiles