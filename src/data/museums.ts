// 紹介する各美術館ごとのメタデータを収納

import type { ImageMetadata } from "astro";
import aomoriImage from "../assets/museum/aomori/青森美術館.jpg";
import musashinoImage from "../assets/museum/musashino/武蔵野美術館.jpg";
import chichuImage from "../assets/museum/chichu/地中美術館.jpg";
import aomori1 from "../assets/museum/aomori/aomori1.jpg";
import aomori2 from "../assets/museum/aomori/aomori2.jpg";
import aomori3 from "../assets/museum/aomori/aomori3.jpeg";
import aomori4 from "../assets/museum/aomori/aomori4.jpeg";
import musashino1 from "../assets/museum/musashino/musasino1.jpg";
import musashino2 from "../assets/museum/musashino/musasino2.webp";
import musashino3 from "../assets/museum/musashino/musasino3.jpeg";
import musashino4 from "../assets/museum/musashino/musasino4.jpg";
import chichu1 from "../assets/museum/chichu/tichu1.jpg";
import chichu2 from "../assets/museum/chichu/tichu2.jpg";
import chichu3 from "../assets/museum/chichu/tichu3.jpg";
import chichu4 from "../assets/museum/chichu/tichu4.jpeg";
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
  galleryLayout: "split" | "staggered" | "mosaic";
  galleryImages?: GalleryImage[];
}

export const museums: Museum[] = [
  {
    name: "青森県立美術館",
    englishName: "AOMORI KENRITU BIJYUTUKAN",
    description:
      "青森の自然とアートの融合、魅力的な展示を中心に常設展示も楽しめる、おすすめスポット。一回は行ってみたい",
    headline: "魅力的な展示を中心に常設展示も楽しめる。青森の美術館。",
    body: "ゴールデンウィークに行ってみたい美術館のひとつが、青森県立美術館。地面に半分埋まったような独特の建築がまず目を引き、中に入ると奈良美智の巨大な「あおもり犬」が出迎えてくれます。シャガールの大作など見ごたえのある作品も多く、美術館自体の空間が面白いと評判です。三内丸山遺跡のすぐ隣にあるので、一緒に回れるのも魅力のひとつ。青森まで足を伸ばす価値がありそうな、気になるスポットです。",
    image: aomoriImage,
    titleSvg: titleAomori,
    caption: "青森県立美術館",
    details: [
      { label: "エリア", value: "青森県青森市" },
      { label: "見どころ", value: "建築・常設展示・青森ゆかりの作品" },
    ],
    galleryLayout: "split",
    galleryImages: [
      { image: aomori1, alt: "青森県立美術館の外観" },
      { image: aomori2, alt: "青森県立美術館の展示空間" },
      { image: aomori3, alt: "青森県立美術館の展示風景" },
      { image: aomori4, alt: "青森県立美術館の建築ディテール" },
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
    galleryLayout: "staggered",
    galleryImages: [
      { image: musashino1, alt: "武蔵野美術館の外観" },
      { image: musashino2, alt: "武蔵野美術館の展示空間" },
      { image: musashino3, alt: "武蔵野美術館の館内風景" },
      { image: musashino4, alt: "武蔵野美術館の建築ディテール" },
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
    galleryLayout: "mosaic",
    galleryImages: [
      { image: chichu1, alt: "地中美術館の外観" },
      { image: chichu2, alt: "地中美術館の建築空間" },
      { image: chichu3, alt: "地中美術館の展示空間" },
      { image: chichu4, alt: "地中美術館の作品ディテール" },
    ],
  },
];
