import type { typePerfil } from "../../types"
import './fotoPerfil.css'
import perfilDefault from "../../fotos/perfilDefault.png" 

const FotoPerfil:React.FC<typePerfil> = ({nombre,foto}) =>{
   let fotoPerfil = foto
   if(foto == ""){
      fotoPerfil = perfilDefault;
      
   }
     return(
        <>
        <img src={fotoPerfil} className="foto-perfil-img"/>
        </>
     )
}

export default FotoPerfil