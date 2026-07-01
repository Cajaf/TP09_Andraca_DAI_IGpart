import { useEffect, useState } from "react";
import type { typeCatImage, typePublicacion } from "../../types";
import axios from "axios";
import PerfilInfo from "../../Componentes/PerfilInfo";
import SideBar from "../../SideBar";
import './perfil.css'

const Perfil = () =>{



    const [cats, setCats] = useState<typeCatImage[]>([]);
      const [selectedCat, setSelectedCat] = useState<typePublicacion | null>(null);
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get("https://api.thecatapi.com/v1/images/search", {
          headers: {
            "x-api-key": "live_ZtQBVqgO3tQ6htJwAQ8VqMxkzM0D5tVRF0be6lkTr7S5vGdzdc3YEQZtPdZpbgMB" 
          },
          params: {
            limit: 10
          }
        });
        setCats(response.data);
      } catch (error) {
        console.error("Error al traer gatos:", error);
      }
    };

    fetchCats();
  }, []);



  const comentarios = [
    { nombre: "Felipe", comentario: "¡Qué buena foto!" },
    { nombre: "Ana", comentario: "Me encanta este lugar." },
    { nombre: "Luis", comentario: "Gran recuerdo." },
    { nombre: "María", comentario: "Muy inspirador." },
    { nombre: "Carlos", comentario: "Hermoso día." },
    { nombre: "Sofía", comentario: "Qué alegría verte." },
    { nombre: "Pedro", comentario: "Excelente publicación." },
    { nombre: "Lucía", comentario: "Me trae nostalgia." },
    { nombre: "Jorge", comentario: "Muy buena toma." },
    { nombre: "Valentina", comentario: "¡Felicitaciones!" },
    { nombre: "Felipe", comentario: "Siempre motivando." },
    { nombre: "Ana", comentario: "Qué lindo detalle." },
    { nombre: "Luis", comentario: "Me gusta mucho." },
    { nombre: "María", comentario: "Gran homenaje." },
    { nombre: "Carlos", comentario: "Muy emotivo." },
    { nombre: "Sofía", comentario: "Qué buena energía." },
    { nombre: "Pedro", comentario: "Me inspira bastante." },
    { nombre: "Lucía", comentario: "Muy auténtico." },
    { nombre: "Jorge", comentario: "Qué gran recuerdo." },
    { nombre: "Valentina", comentario: "Me alegra verlo." },
  ];

      const perfiles = [
    { nombre: "Felipe", foto: "" },
    { nombre: "Ana", foto: "" },
    { nombre: "Luis", foto: "" },
    { nombre: "María", foto: "" },
    { nombre: "Carlos", foto: "" },
    { nombre: "Sofía", foto: "" },
    { nombre: "Pedro", foto: "" },
    { nombre: "Lucía", foto: "" },
    { nombre: "Jorge", foto: "" },
    { nombre: "Valentina", foto: "" },
  ];

  const [publicaciones, setPublicaciones] = useState([])

      useEffect(() => {
  if (cats.length >= 10) {
    setPublicaciones([
    { perfil: perfiles[0], foto: cats[0].url, likes: 12, comentarios: [comentarios[2], comentarios[4]] },
    { perfil: perfiles[1], foto: cats[1].url, likes: 8, comentarios: [comentarios[1]] },
    { perfil: perfiles[2], foto: cats[2].url, likes: 15, comentarios: [comentarios[5], comentarios[0]] },
    { perfil: perfiles[3], foto: cats[3].url, likes: 20, comentarios: [comentarios[10]] },
    { perfil: perfiles[4], foto: cats[4].url, likes: 5, comentarios: [comentarios[1], comentarios[2]] },
    { perfil: perfiles[5], foto: cats[5].url, likes: 9, comentarios: [comentarios[11]] },
    { perfil: perfiles[6], foto: cats[6].url, likes: 13, comentarios: [comentarios[12], comentarios[13]] },
    { perfil: perfiles[7], foto: cats[7].url, likes: 7, comentarios: [comentarios[14]] },
    { perfil: perfiles[8], foto: cats[8].url, likes: 11, comentarios: [comentarios[9], comentarios[8]] },
    { perfil: perfiles[9], foto: cats[9].url, likes: 18, comentarios: [comentarios[3], comentarios[5]] },
    ]);
  }
}, [cats]);
const usuarioPerfil = {
  nombre: "Felipe",
  posts: 5,
  followers: 15,
  following: 14,
  desc: "Desarrollador web.",
  foto: ""
};

const usuario = {
    nombre: "Felipe", 
    foto: "" 
};

    return(
        <section className="container">
            <div className="sidebar">
                <SideBar usuarioSesion={usuario}/>
            </div>
            <section className="main-content">
                <PerfilInfo
                nombre={usuarioPerfil.nombre}
                posts={usuarioPerfil.posts}
                followers={usuarioPerfil.followers}
                following={usuarioPerfil.following}
                desc={usuarioPerfil.desc}
                foto={usuarioPerfil.foto}
                />
                <div className="cat-grid">
                    {publicaciones.map(item => <img src={item.foto} onClick={() => setSelectedCat(item)} />)}
                </div>

          {selectedCat && (
            <div className="modal-overlay" onClick={() => setSelectedCat(null)}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img src={selectedCat.foto} alt="gatito grande" />
                <div className="modal-info">
                  <h3>{selectedCat.perfil.nombre}</h3>
                  <p>{selectedCat.likes} likes</p>
                  <p>Comentarios:</p>
                  <ul>
                    {selectedCat.comentarios.map((c, i) => (
                      <li key={i}>{c.nombre}: {c.comentario}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </section>
       </section>
    )
}
export default Perfil
// me ayude de la ia para hacer el modal 