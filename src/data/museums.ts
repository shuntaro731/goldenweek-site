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
  headline: string;
  body: string;
  image: ImageMetadata;
  titleSvg: ImageMetadata;
  caption: string;
  details: {
    label: string;
    value: string;
  }[];
  galleryImages?: GalleryImage[];
}

export const museums: Museum[] = [
  {
    name: "青森県立美術館",
    englishName: "AOMORI KENRITU BIJYUTUKAN",
    description:
      "青森の自然とアートの融合、魅力的な展示を中心に常設展示も楽しめる、おすすめスポット。一回は行ってみたい",
    headline: "魅力的な展示を中心に常設展示も楽しめる。青森の美術館。",
    body: "青森県立美術館は、展示だけでなく建築や空間そのものにも惹かれる美術館。青森の自然や文化とつながる作品を見ながら、ゆっくり時間を使って巡ってみたい場所です。",
    image: aomoriImage,
    titleSvg: titleAomori,
    caption: "青森県立美術館",
    details: [
      { label: "エリア", value: "青森県青森市" },
      { label: "見どころ", value: "建築・常設展示・青森ゆかりの作品" },
    ],
  },
  {
    name: "武蔵野美術館",
    englishName: "MUSASHINO ART MUSEUM",
    description:
      "多彩なコレクションと企画展示を通して、アートとデザインの魅力に触れられる、ゆっくり巡りたい美術館",
    headline: "アートとデザインの魅力に触れられる、ゆっくり巡りたい美術館。",
    body: "武蔵野美術館は、美術大学ならではの視点で作品やデザインに触れられる場所。展示を見るだけでなく、制作や学びの空気も含めて楽しめそうなところに魅力を感じています。",
    image: musashinoImage,
    titleSvg: titleMusashino,
    caption: "武蔵野美術館",
    details: [
      { label: "エリア", value: "東京都小平市" },
      { label: "見どころ", value: "コレクション・企画展示・デザイン資料" },
    ],
  },
  {
    name: "地中美術館",
    englishName: "CHICHU ART MUSEUM",
    description:
      "建築と自然光が作品の見え方を変える、瀬戸内ならではの体験ができる、一度は訪れたい特別な空間",
    headline: "建築と自然光が作品の見え方を変える、瀬戸内の特別な空間。",
    body: "地中美術館は、作品と建築、自然光が一体になって体験をつくる美術館。瀬戸内の景色の中で、展示室へ向かう時間も含めて味わってみたい場所です。",
    image: chichuImage,
    titleSvg: titleChichu,
    caption: "地中美術館",
    details: [
      { label: "エリア", value: "香川県直島町" },
      { label: "見どころ", value: "建築・自然光・瀬戸内の景観" },
    ],
  },
];
