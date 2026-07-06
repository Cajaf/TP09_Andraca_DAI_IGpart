import './App.css'
import SideBar from './SideBar';
import Publicacion from './Componentes/Publicacion';
import Perfiles from './Componentes/Perfiles';
import { useEffect, useState } from 'react';
import type { typePerfil, typePublicacion } from './types';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
  const [usuarioSesion, setUsuarioSesion] = useState<typePerfil | null>(null);
  const [perfiles, setPerfiles] = useState<typePerfil[]>([]);
  const [publicaciones, setPublicaciones] = useState<typePublicacion[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      try {
        // Traer usuarios
        const usuariosRes = await axios.get("http://localhost:3000/api/usuarios", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const perfilesAdaptados = usuariosRes.data.map((u: any) => ({
          id: u.id,
          nombre: u.nombrecompleto,
          urlimagen: u.urlimagen ?? ""
        }));

        setPerfiles(perfilesAdaptados);

        // Setear usuario de sesión (ejemplo: el primero)
        if (perfilesAdaptados.length > 0) {
        setUsuarioSesion(perfilesAdaptados[0]);
        }

        // Traer publicaciones
        const publicacionesRes = await axios.get("http://localhost:3000/api/publicacion", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPublicaciones(publicacionesRes.data);

      } catch (error) {
        console.error("Error al traer datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="app-container">
      <div className="sidebar">
        {usuarioSesion && <SideBar usuarioSesion={usuarioSesion}/>}
        <Link to="/crearPubli">
            <button className="btn-link">crearPubli</button>
        </Link>
      </div>
        
      <section className="main-content">
        <Perfiles perfiles={perfiles.slice(1, 7)} />
      {publicaciones.map((item, index) => {
        const perfilEncontrado = perfiles.find(p => p.id === item.usuarioid);

        return (
          <Publicacion
            key={index}
            perfil={perfilEncontrado ?? { id: 0, nombrecompleto: "Desconocido", nombreusuario:"",email:"g" }}
            urlimagen={item.urlimagen}
            likes={item.likes}
            comentarios={[]}
            usuarioid={item.usuarioid}
          />
        );
      })}
      </section>
    </section>
  )
}

export default App;
