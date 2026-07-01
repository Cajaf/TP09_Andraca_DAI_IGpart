import { useState } from "react";
import likeIcon from "../../fotos/like.png";
import './botonLike.css'

const BotonLike = ({setLikeState,likes}) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeState(likes - 1);
      setLiked(false);
    } else {
      setLikeState(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div className="like-container">
      <img
        src={likeIcon}
        alt="Like"
        className={`like-icon ${liked ? "liked" : ""}`}
        onClick={handleLike}
      />
    </div>
  );
};

export default BotonLike;

//para hacer este componente me ayude de la ia