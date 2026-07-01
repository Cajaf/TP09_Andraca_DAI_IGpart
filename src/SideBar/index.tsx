import instagramLogo from "../fotos/Instagram.png"
import homeIcon from "../fotos/home.png"
import searchIcon from "../fotos/search.png"
import exploreIcon from "../fotos/explorer.png"
import reelsIcon from "../fotos/reels.png"
import messagesIcon from "../fotos/messages.png"
import likeIcon from "../fotos/like.png"
import createIcon from "../fotos/create.png"
import moreIcon from "../fotos/More.png"
import './SideBar.css'
import FotoPerfil from "../Componentes/FotoPerfil"
import { Link } from "react-router-dom"

const SideBar = ({usuarioSesion}) => {
  return (
    <div className="sidebar">
      <img src={instagramLogo} alt="Instagram" className="sidebar-logo" />

      <div className="sidebar-item">
        <img src={homeIcon} alt="Home" />
        <h2>Home</h2>
      </div>
      <div className="sidebar-item">
        <img src={searchIcon} alt="Search" />
        <h2>Search</h2>
      </div>
      <div className="sidebar-item">
        <img src={exploreIcon} alt="Explore" />
        <h2>Explore</h2>
      </div>
      <div className="sidebar-item">
        <img src={reelsIcon} alt="Reels" />
        <h2>Reels</h2>
      </div>
      <div className="sidebar-item">
        <img src={messagesIcon} alt="Messages" />
        <h2>Messages</h2>
      </div>
      <div className="sidebar-item">
        <img src={likeIcon} alt="Notifications" />
        <h2>Notifications</h2>
      </div>
      <div className="sidebar-item">
        <img src={createIcon} alt="Create" />
        <h2>Create</h2>
      </div>
      <Link to="/perfil">
      <div className="sidebar-profile">
        <FotoPerfil foto={usuarioSesion.foto} nombre={usuarioSesion.nombre} />
        <h2>Profile</h2>
      </div>
      </Link>
      <div className="sidebar-item">
        <img src={moreIcon} alt="More" />
        <h2>More</h2>
      </div>
    </div>
  )
}

export default SideBar
