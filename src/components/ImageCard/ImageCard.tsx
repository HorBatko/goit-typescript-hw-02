import React from "react";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  imgLink: {
    small: string;
    regular: string;
  };
  imgSlug: string;
  onClick: (url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imgLink: { small, regular }, imgSlug, onClick }) => {
  const handleClick = () => {
    onClick(small);
  };

  return (
    <div>
      <img
        className={css.card}
        src={small}
        alt={imgSlug}
        onClick={handleClick}
      />
    </div>
  );
}

export default ImageCard;
