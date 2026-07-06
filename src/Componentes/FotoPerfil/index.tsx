import type { typePerfil } from "../../types"
import './fotoPerfil.css'
import perfilDefault from "../../fotos/perfilDefault.png" 

const FotoPerfil = ({}) =>{
   let fotoPerfil = ""
   if(fotoPerfil == ""){
      fotoPerfil = perfilDefault;
      
   }
     return(
        <>
        <img src={fotoPerfil} className="foto-perfil-img"/>
        </>
     )
}

export default FotoPerfil