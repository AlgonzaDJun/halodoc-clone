import React from "react";
import Card from "./Card.astro";

const Article = () => {
  const article = [
    {
      img: "home/article/ini-ciri-ciri-suami-selingkuh-menurut-psikolog-dan-cara-menghadapinya-halodoc.jpg.webp",
      title:
        "ini ciri ciri suami selingkuh menurut psikolog dan cara menghadapinya",
      jenis: ["Psikologi", "Relationship"],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam ipsum exercitationem mollitia veniam, suscipit sapiente dolor minus magnam sit in cumque, beatae quae, temporibus impedit numquam velit corporis assumenda.",
      kategori: ["populer", "terbaru"],
    },
    {
      title: "mengenal effort dalam hubungan dan cara melakukannya",
      img: "home/article/mengenal-effort-dalam-hubungan-dan-cara-melakukannya-halodoc.jpg.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam ipsum exercitationem mollitia veniam, suscipit sapiente dolor minus magnam sit in cumque, beatae quae, temporibus impedit numquam velit corporis assumenda",
      jenis: ["Relationship", "Psikologi"],
      kategori: ["kecantikan", "terbaru"],
    },
    {
      title: "Mengenal-Istilah-Redflag-dalam-Hubungan-Ciri-dan-Contohnya",
      img: "home/article/Mengenal-Istilah-Redflag-dalam-Hubungan-Ciri-dan-Contohnya.jpg.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam ipsum exercitationem mollitia veniam, suscipit sapiente dolor minus magnam sit in cumque, beatae quae, temporibus impedit numquam velit corporis assumenda",
      jenis: ["Relationship", "Kesehatan Mental"],
      kategori: ["pneumonia"],
    },
    {
      title: "Ini-Langkah-Mencegah-Kehamilan-setelah-Berhubungan-Seks-",
      img: "home/article/Ini-Langkah-Mencegah-Kehamilan-setelah-Berhubungan-Seks-.jpg.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam ipsum exercitationem mollitia veniam, suscipit sapiente dolor minus magnam sit in cumque, beatae quae, temporibus impedit numquam velit corporis assumenda",
      jenis: ["Reproduksi", "Alat Kontrasepsi"],
      kategori: ["kecantikan"],
    },
    {
      title: "Mengenal-Istilah-Redflag-dalam-Hubungan-Ciri-dan-Contohnya",
      img: "home/article/Mengenal-Istilah-Redflag-dalam-Hubungan-Ciri-dan-Contohnya.jpg.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam ipsum exercitationem mollitia veniam, suscipit sapiente dolor minus magnam sit in cumque, beatae quae, temporibus impedit numquam velit corporis assumenda",
      jenis: ["Relationship", "Kesehatan Mental"],
      kategori: ["batuk"],
    },
    {
      title: "4-Jenis-Cedera-Lutut-dan-Cara-Mengatasinya",
      img: "home/article/X-Jenis-Cedera-Lutut-dan-Cara-Mengatasinya.jpg.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam ipsum exercitationem mollitia veniam, suscipit sapiente dolor minus magnam sit in cumque, beatae quae, temporibus impedit numquam velit corporis assumenda",
      jenis: ["olahraga", "cedera"],
      kategori: ["kecantikan"],
    },
    {
      title: "mengenal suplemen vitamin b12 dan manfaatnya untuk kesehatan",
      img: "home/article/vitamin-b12-halodoc.jpg.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam ipsum exercitationem mollitia veniam, suscipit sapiente dolor minus magnam sit in cumque, beatae quae, temporibus impedit numquam velit corporis assumenda",
      jenis: ["Hidup Sehat", "vitamin b", "vitamin b12"],
      kategori: ["batuk", "populer"],
    },
    {
      title: "Apa-Itu-Gluten-dan-Fungsinya-Bagi-Tubuh_.jpg.webp",
      img: "home/article/Apa-Itu-Gluten-dan-Fungsinya-Bagi-Tubuh_.jpg.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsam ipsum exercitationem mollitia veniam, suscipit sapiente dolor minus magnam sit in cumque, beatae quae, temporibus impedit numquam velit corporis assumenda",
      jenis: ["Makanan Sehat"],
      kategori: ["kecantikan", "pneumonia"],
    },
  ];
  return (
    <article class="px-4 md:pl-20 md:pr-16 pb-12 space-y-3 text-text-abu">
      <div class="flex items-center justify-between capitalize">
        <h1 class="font-semibold text-2xl">Baca 100+ Artikel Baru</h1>
        <p class="font-semibold text-xs text-primary">Lihat semua</p>
      </div>
      <div class="flex items-center gap-3 w-full overflow-scroll">
        <button class="p-1 bg-btn-bg border border-primary text-sm rounded text-primary">
          Terbaru
        </button>
        <button class="p-1 border text-sm rounded">Populer</button>
        <button class="p-1 border text-sm rounded">Pneumonia</button>
        <button
          class="p-1 border text-sm rounded"
          onclick="changeKategori('kecantikan')"
        >
          Kecantikan
        </button>
        <button class="p-1 border text-sm rounded">Batuk</button>
      </div>

      <div class="flex items-center gap-5 overflow-scroll">
        <Card noTextCenter>
          <div class="max-w-56 w-72 group p-1 space-y-2 h-64 max-h-64 overflow-y-hidden">
            <img
              src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2024/01/11071728/Ini-5-Pilihan-OBat-Pereda-Nyeri-Punggung-yang-Ampuh-di-Apotek.jpg.webp"
              alt=""
              class=""
            />
            <h4 class="text-xs font-bold group-hover:text-primary">
              5 Rekomendasi Obat Pereda Sakit Punggung yang manjur
            </h4>
            <div class="text-[12px] p-1 bg-[#E9F4F8] inline-block text-start">
              Nyeri Punggung
            </div>
            <p class="text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              facilis quas labore ut amet. Sed soluta quibusdam perferendis
              enim, tempore est obcaecati numquam officiis, error ipsum dolor
              laborum culpa deserunt.
            </p>
          </div>
        </Card>

        {article.map((item, id) => (
          <Card noTextCenter key={id}>
            <div class="max-w-56 w-72 group p-1 space-y-2 h-64 max-h-64 overflow-y-hidden capitalize">
              <img src={item.img} alt="" class="w-full" />
              <h4 class="text-xs font-bold group-hover:text-primary">
                {item.title.replace(/-/g, " ")}
              </h4>
              <div class="flex items-center gap-2">
                {item.jenis.map((item) => (
                  <div class="text-[12px] p-1 bg-[#E9F4F8] inline-block text-start">
                    {item}
                  </div>
                ))}
              </div>

              <p class="text-[12px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                facilis quas labore ut amet. Sed soluta quibusdam perferendis
                enim, tempore est obcaecati numquam officiis, error ipsum dolor
                laborum culpa deserunt.
              </p>
            </div>
          </Card>
        ))}
      </div>
    </article>
  );
};

export default Article;
