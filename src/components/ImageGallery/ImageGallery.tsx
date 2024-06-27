import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageLink {
  small: string;
  regular: string;
}

interface ImageItem {
  id: string;
  urls: ImageLink;
  slug: string;
}

interface ImageGalleryProps {
  items: ImageItem[];
  onImageClick: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={css.imgList}>
      {items.map(({ id, urls, slug }) => (
        <li key={id}>
          <ImageCard imgLink={urls} imgSlug={slug} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;

