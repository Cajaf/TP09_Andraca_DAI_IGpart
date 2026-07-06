export interface typePublicacion {
perfil: typePerfil
urlimagen:string
likes:number
comentarios: typeComentario[]
usuarioid:number
}

export interface typePerfil {
id:number
urlimagen:string
nombre: string
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