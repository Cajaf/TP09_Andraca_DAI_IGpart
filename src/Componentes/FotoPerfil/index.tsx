import type { typePerfil } from "../../types"
import './fotoPerfil.css'
import perfilDefault from "../../fotos/perfilDefault.png" 

const FotoPerfil:React.FC<typePerfil> = ({urlimagen}) =>{
   let fotoPerfil = urlimagen
   if(urlimagen == ""){
      fotoPerfil = perfilDefault;
      
   }
     return(
        <>
        <img src={fotoPerfil} className="foto-perfil-img"/>
        </>
     )
}

export default FotoPerfil