
import './App.css'
import SideBar from './SideBar';
import Publicacion from './Componentes/Publicacion';
import Perfiles from './Componentes/Perfiles';
import { useEffect, useState } from 'react';
import type { typeCatImage, typePerfil, typePublicacion } from './types';
import axios from 'axios';


function App() {
  
  const [cats, setCats] = useState<typeCatImage[]>([]);

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

  //me ayude con la ia para hacer la llamada a la api

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
const [usuario, setUsuario] = useState<typePerfil>(perfiles[0])
  // 20 comentarios
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

  // 10 publicaciones
const [publicaciones, setPublicaciones] = useState<typePublicacion[]>([]);

  useEffect(() => {
  if (cats.length >= 10) {
    setPublicaciones([
    { perfil: perfiles[0], foto: cats[0].url, likes: 12, comentarios: [comentarios[2], comentarios[4]] },
    { perfil: perfiles[0], foto: cats[1].url, likes: 8, comentarios: [comentarios[1]] },
    { perfil: perfiles[0], foto: cats[2].url, likes: 15, comentarios: [comentarios[5], comentarios[0]] },
    { perfil: perfiles[0], foto: cats[3].url, likes: 20, comentarios: [comentarios[10]] },
    { perfil: perfiles[0], foto: cats[4].url, likes: 5, comentarios: [comentarios[1], comentarios[2]] },
    { perfil: perfiles[0], foto: cats[5].url, likes: 9, comentarios: [comentarios[11]] },
    { perfil: perfiles[0], foto: cats[6].url, likes: 13, comentarios: [comentarios[12], comentarios[13]] },
    { perfil: perfiles[0], foto: cats[7].url, likes: 7, comentarios: [comentarios[14]] },
    { perfil: perfiles[0], foto: cats[8].url, likes: 11, comentarios: [comentarios[9], comentarios[8]] },
    { perfil: perfiles[0], foto: cats[9].url, likes: 18, comentarios: [comentarios[3], comentarios[5]] },
    ]);
  }
}, [cats]);

  // Los datos se los pedi a la ia
  return (
    <section className="app-container">
      
    <div className="sidebar">
      <SideBar usuarioSesion={usuario}/>
    </div>
      <section className="main-content">
        
        <Perfiles perfiles={perfiles.slice(1, 7)} />
          {publicaciones.map(item => <Publicacion perfil={item.perfil} foto={item.foto} likes={item.likes} comentarios={item.comentarios}/>)}
      </section>
    </section>
  )
}

export default App
