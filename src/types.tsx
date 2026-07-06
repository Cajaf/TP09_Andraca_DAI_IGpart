export interface typePublicacion {
perfil?: typePerfil
urlimagen:string
likes:number
comentarios: typeComentario[]
usuarioid:number
}

export interface typePerfil {
  id: number
  nombrecompleto: string   // coincide con la columna
  email: string
  nombreusuario: string
  // si querés mostrar foto, tendrías que agregar urlimagen en la tabla usuarios
}

export interface typeComentario {
nombre: string
comentario: string
}


export interface FotoPerfilProps {
  perfiles: typePerfil[]
}

export interface typeCatImage{
  id: string;
  url: string;
};
/* le pedi a la ia que me cree un ejemplo de interface y de ahi cree las mias*/