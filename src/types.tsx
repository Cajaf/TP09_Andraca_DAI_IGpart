export interface typePublicacion {
perfil: typePerfil
foto:string
likes:number
comentarios: typeComentario[]
}

export interface typePerfil {
foto:string
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