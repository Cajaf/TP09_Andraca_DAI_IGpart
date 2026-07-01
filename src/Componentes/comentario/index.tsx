import type { typeComentario } from "../../types"

const Comentario: React.FC<typeComentario> = ({nombre ,comentario}) =>{

    return(
       <section className="comentario-container">
            <h4 className="comentario-nombre">{nombre}</h4>
            <p>{comentario}</p>
       </section>
    )
}

export default Comentario