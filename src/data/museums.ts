// 紹介する各美術館ごとのメタデータを収納

import type { ImageMetadata } from "astro";
import aomoriImage from "../assets/museum/青森美術館.jpg";
import musashinoImage from "../assets/museum/武蔵野美術館.jpg";
import chichuImage from "../assets/museum/地中美術館.jpg";
import titleAomori from "../assets/title/type=title1.svg";
import titleMusashino from "../assets/title/type=title2.svg";
import titleChichu from "../assets/title/type=title3.svg";

export interface GalleryImage {
  image: ImageMetadata;
  alt?: string;
  caption?: string;
}

export interface Museum {
  name: string;
  englishName: string;
  description: string;
  image: ImageMetadata;
  titleSvg: ImageMetadata;
  caption: string;
  galleryImages?: GalleryImage[];
}

export const museums: Museum[] = [
  {
    name: "青森県立美術館",
    englishName: "AOMORI KENRITU BIJYUTUKAN",
    description:
      "青森の自然とアートの融合、魅力的な展示を中心に常設展示も楽しめる、おすすめスポット。一回は行ってみたい",
    image: aomoriImage,
    titleSvg: titleAomori,
    caption: "青森県立美術館",
  },
  {
    name: "武蔵野美術館",
    englishName: "MUSASHINO ART MUSEUM",
    description:
      "多彩なコレクションと企画展示を通して、アートとデザインの魅力に触れられる、ゆっくり巡りたい美術館",
    image: musashinoImage,
    titleSvg: titleMusashino,
    caption: "武蔵野美術館",
  },
  {
    name: "地中美術館",
    englishName: "CHICHU ART MUSEUM",
    description:
      "建築と自然光が作品の見え方を変える、瀬戸内ならではの体験ができる、一度は訪れたい特別な空間",
    image: chichuImage,
    titleSvg: titleChichu,
    caption: "地中美術館",
  },
];
