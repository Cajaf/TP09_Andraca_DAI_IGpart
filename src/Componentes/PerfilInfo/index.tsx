import FotoPerfil from "../FotoPerfil"
import './perfilInfo.css'

    const PerfilInfo = ({nombre,posts,followers,following,desc,foto}) =>{
    return(
        <div className="perfil-info">
          <div className="perfil-header">
            <FotoPerfil nombre={nombre} foto={foto}/>
          </div>
          <div className="perfil-stats">
            <div>
              <h1>{nombre}</h1>
              <div className="perfil-actions">
                <button>Edit Profile</button>
                <button>Ad tools</button>
              </div>
            </div>
            <section className="stats">
            <div>
              <strong>{posts}</strong>
              <p>posts</p>
            </div>
            <div>
              <strong>{followers}</strong>
              <p>followers</p>
            </div>
            <div>
              <strong>{following}</strong>
              <p>following</p>
            </div>
            </section>
            <p className="perfil-desc">{desc}</p>
          </div>
        </div>
    )
}




export default PerfilInfo