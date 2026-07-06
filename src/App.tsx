import './App.css'
import SideBar from './SideBar';
import Publicacion from './Componentes/Publicacion';
import Perfiles from './Componentes/Perfiles';
import { useEffect, useState } from 'react';
import type { typePerfil, typePublicacion } from './types';
import axios from 'axios';

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
        setPerfiles(usuariosRes.data);

        // Setear usuario de sesión (ejemplo: el primero)
        if (usuariosRes.data.length > 0) {
          setUsuarioSesion(usuariosRes.data[0]);
        }

        // Traer publicaciones
        const publicacionesRes = await axios.get("http://localhost:3000/api/publicaciones", {
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
      </div>
      <section className="main-content">
        <Perfiles perfiles={perfiles.slice(1, 7)} />
        {publicaciones.map(item => (
          <Publicacion
            perfil={perfiles.find(p => p.id === item.usuarioid)}
            urlimagen={item.urlimagen}
            likes={item.likes}
            comentarios={[]}
            usuarioid={0}
          />
        ))}
      </section>
    </section>
  )
}

export default App;
