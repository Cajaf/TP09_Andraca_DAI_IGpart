import { useState } from "react";
import axios from "axios";

const CrearPublicacion: React.FC = () => {
  const [urlImagen, setUrlImagen] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");
  const [mensaje, setMensaje] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/publicacion",
        {
          urlImagen,
          descripcion
          // usuarioID no se envía, el backend lo obtiene del token
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      setMensaje(`✅ Publicación creada con ID: ${res.data}`);
      setUrlImagen("");
      setDescripcion("");
    } catch (error) {
      console.error(error);
      setMensaje("❌ Error al crear publicación");
    }
  };

  return (
    <section className="crear-publicacion">
      <h2>Crear nueva publicación</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="urlImagen">URL de la imagen:</label>
          <input
            id="urlImagen"
            type="text"
            value={urlImagen}
            onChange={(e) => setUrlImagen(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <button type="submit">Publicar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </section>
  );
};

export default CrearPublicacion;
