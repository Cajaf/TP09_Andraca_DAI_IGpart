import type { typePublicacion } from "../../types"
import Comentario from "../comentario"
import FotoPerfil from "../FotoPerfil"
import './publicacion.css'
import like from '../../fotos/like.png'
import mensajes from '../../fotos/mensaje.png'
import enviar from '../../fotos/Enviar.png'
import { useState } from "react"
import BotonLike from "../BotonLike"
import favorito from "../../fotos/favorito.png"
import puntitos from "../../fotos/puntitos.png"

const Publicacion: React.FC<typePublicacion> = ({perfil,urlimagen, likes}) =>{
    const [likesState, setLikeState] = useState(likes)
    return(
        <>
       <div className="publicacion">
            <div className="publicacion-head">
                <div className="profile">
                <FotoPerfil/>
                </div>
                <h4>{perfil.nombrecompleto}</h4>
                <img src={puntitos} className="puntitos"/>
            </div>
            <img src={urlimagen} className="publicacion-img" />
            <div className="botones">
                <BotonLike setLikeState={setLikeState} likes={likesState}/>
                <img src={mensajes}/>
                <img src={enviar}/>
                <img src={favorito} className="favorito"/>
            </div>
            <h4 className="publicacion-likes">{likesState} likes</h4>
            <div className="barra-separadora"></div>
       </div>
       
       </>
    )
}
export default Publicacion